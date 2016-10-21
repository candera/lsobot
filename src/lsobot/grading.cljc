(ns lsobot.grading
  "Functions for grading an approach"
  (:require [lsobot.acmi :as acmi]
            [lsobot.units :as units]
            #?@(:clj [[clojure.spec :as s]
                      [clojure.spec.gen :as sgen]])
            [taoensso.timbre :as log
             #?@(:cljs [:refer-macros
                        (log trace debug info warn error fatal report
                             logf tracef debugf infof warnf errorf fatalf
                             reportf spy get-env log-env)])])
  #?(:cljs (:require-macros [lsobot.spec :as s]
                            [lsobot.spec-gen :as sgen])))

(def grades
  {::ok+               {:description "A perfect pass. Reserved for outstanding landings with significant complicating factors (an engine out, for example). Naval aviators often have hundreds of carrier landings without ever receiving this grade."
                        :score 5}
   ::ok                {:description "A pass with only very minor deviations. Pretty much the best that you can do – above average, in other words. You don’t count on Ok."
                        :score 4}
   ::fair              {:description "A pass with one or more safe deviations and appropriate corrections. Fleet average."
                        :score 3}
   ::bolter            {:description "A safe pass where the hook is down and the aircraft does not stop. Counts against pilot/squadron/wing ‘boarding rate’."
                        :score 2.5}
   ::none              {:description "A pass with gross deviations or inappropriate corrections. It’s ugly, but safely ugly. Nevertheless, you don’t want to make a habit of being safely ugly. Failure to respond to LSO calls will often result in this grade."
                        :score 2}
   ::waveoff-pattern   {:description "Usually issued for gross deviations in the approach turn."
                        :score 2}
   ::own-waveoff       {:description "Own waveoff, executed when clearance to land via Roger ball or cut lights are received"
                        :score 2}
   ::waveoff           {:description "A pass defined as ‘unsettled dynamics, potentially unsafe’, with deviations from centerline, glideslope and/or angle of attack that are unsafe and need to be aborted." :score 1}
   ::cut-pass          {:description "An unsafe pass with unacceptable deviations, typically after a wave off is possible. The worst grade. You definitely don’t want to get many of those. They’re career enders."
                        :score 0}
   ::foul-deck-waveoff {:description "A pass that was aborted due to the landing area being ‘fouled’. No points are assigned, and the pass is not counted toward the pilot’s landing grade average."}
   ::incomplete        {:description "Insufficient data to determine the status of the pass."}})


;;; Specs
(s/def ::slope float?)
(s/def ::distance float?)
(s/def ::course-deviation float?)
(s/def ::wire (s/nilable (s/and integer? #(< 0 % 5))))
(s/def ::result #{:trap :bolter :waveoff :ramp-strike})
(def frame (s/keys :req [::slope
                         ::distance
                         ::course-deviation
                         ::acmi/entities
                         ::acmi/t
                         ::acmi/events]))

(def frames (s/spec (s/* frame)))
(s/def ::frames frames)

(s/def ::direction (s/nilable #{:low :high}))
(s/def ::degree #{:ideal :good :minor :major :unacceptable})
(def deviation (s/keys :req [::direction ::degree]))
(s/def ::deviation deviation)
(s/def ::deviations (s/spec (s/* deviation)))

(s/def ::aoa (s/keys :req [::value ::deviation]))

(def deviations
  "Describes a series of deviations that summarize some aspect of an
  an approach. A perfect approach would have two deviations, one each
  at the start and the end, whose value would be the ideal for that
  dimension."
  (s/spec (s/* deviation)))
(s/def ::aoa-deviations deviations)
(s/def ::glideslope-deviations deviations)
(s/def ::lineup-deviations deviations)
(s/def ::aoa-assessment deviation)
(s/def ::glideslope-assessment deviation)
(s/def ::lineup-assessment deviation)
(def comments (s/keys :req [::aoa-assessment
                            ::glideslope-assessment
                            ::lineup-assessment
                            ::aoa-deviations
                            ::glideslope-deviations
                            ::lineup-deviations]))

(s/def ::start comments)
(s/def ::mid comments)
(s/def ::in-close comments)
(s/def ::at-ramp comments)
(s/def ::grade (set (keys grades)))

(def assessment (s/keys :req [::result
                              ::frames
                              ::start
                              ::mid
                              ::in-close
                              ::at-ramp
                              ::grade]))

;; Landing coordinates:
;; x indicates cross-track error. Negative left.
;; y indicates downrange distance. Postive downrange (approaching the
;; trap), negative uprange.
;; z indicates height above the deck.
;; It basically puts the touchdown point of the carrier at the origin,
;; assuming that the carrier is aligned such that the recovery is
;; straight north.

;; Carrier coordinates:
;; The bow of the ship is in the positive y direction
;; The starboard is in the positive x direction
;; Waterline is zero z.
;; Heading is assumed to be zero.
;; The origin is whatever part of the ship Falcon thinks it is.
;; Distances in feet.

(def default-parameters
  {:min-time            10  ; Seconds - pass has to last at least this long
   :max-slope           6  ; Degrees - pass has to start on this glideslope or less
   :max-angle           20  ; Degrees - pass has to start within this lineup
   :min-dist            0.5 ; Pass has to start at least this far away (nm).
                                        ; Prevents things like detecting a pass starting
                                        ; on the deck.
   :max-dist            1.0   ; Pass starts no farther away than this (nm).
   :recovery-skew       11    ; Degrees the deck of the carrier differs from
                                        ; the heading of the carrier
   :coda                4      ; Seconds of data to keep after approach ends
   :landing-point       [-13.5 -295.2 67.75] ; x,y,z position in carrier
                                        ; coordinates zero where landing
                                        ; should aim. Feet.
   :landing-window      [50 150]  ; width,length of the "window" around the
                                        ; landing point. This forms an imaginary
                                        ; box, inside of which everywhere is
                                        ; considered equivalent. Lining up on
                                        ; anywhere inside this box is considered
                                        ; equivalent to lining up on the landing
                                        ; point.
   ;; Source: https://www.airwarriors.com/community/index.php?threads/carrier-dimensions.23820/
   ;; -Interval between wires: 40 feet
   ;; -Distance from 1 wire to ramp: 176 ft
   ;; -Landing area width: 80 ft
   ;; -Total length of landing area, from ramp to deck edge: 795 ft
   ;; Landing point centers between 2- and 3-wire
   :wire-interval       40               ; Feet
   :ramp-to-1-wire      176             ; Feet
   :landing-area-width  80          ; Feet
   :landing-area-length 795        ; Feet
   :hook-offset         [0.00 18.04 -6.87] ; In carrier coordinates, offset from
                                        ; pilot location. Feet.

   :trap-speed          (units/kts->ft-per-sec 70) ; Must slow to below this
                                        ; speed to be considered to
                                        ; have caught a wire. ft/s

   :touchdown-height    10        ; How high above the deck (in feet) the
                                        ; aircraft has to be before it
                                        ; is considered to be on the deck

   :glideslope          {:ideal 3.3
                         :good  {:low  3.1
                                 :high 3.5}
                         :minor {:low  2.7
                                 :high 3.9}
                         :major {:low  2.3
                                 :high 4.3}}
   :aoa                 {:ideal 8.1
                         :good  {:low  7.4
                                 :high 8.8}
                         :minor {:low  7.4
                                 :high 8.8}
                         :major {:low  6.9
                                 :high 9.3}}
   :lineup              {:ideal 0
                         :good  {:low  -1
                                 :high 1}
                         :minor {:low  -2
                                 :high 2}
                         :major {:low  -3
                                 :high 3}}
   :weights             {:start        1
                         :end          1
                         :ideal        1
                         :good         1
                         :minor        2
                         :major        3
                         :unacceptable 4}
   :zones               {:start        {:from 4500
                                        :to 3000}
                         :mid          {:from 3000
                                        :to 1500}
                         :in-close     {:from 1500
                                        :to 600}
                         ;; Ramp distance is automatically the end of the carrier
                         ;; until touchdown
                         :at-ramp      {}
                         ;; In the wires from touchdown until stopped
                         :in-the-wires {}}})

(defn bearing
  "Returns the bearing between two objects in degrees."
  [from to]
  (let [u1 (some-> from ::acmi/u units/m->ft)
        u2 (some-> to ::acmi/u units/m->ft)
        v1 (some-> from ::acmi/v units/m->ft)
        v2 (some-> to ::acmi/v units/m->ft)]
    (when (and u1 u2 v1 v2)
      (let [ud (- u2 u1)
            vd (- v2 v1)]
        (-> (Math/atan2 ud vd) units/rad->deg (mod 360))))))

(defn rotate-z
  "Rotate a point in 3D space around the z axis by deg."
  [deg [x y z]]
  (let [theta (units/deg->rad deg)]
    [(- (* x (Math/cos theta))
        (* y (Math/sin theta)))
     (+ (* y (Math/cos theta))
        (* x (Math/sin theta)))
     z]))

(s/fdef classify
        :args nil ; todo
        :ret deviation)

(defn classify
  "Classifies the deviation value v represents according to params."
  [params v]
  (let [{:keys [ideal good minor major]} params]
    {::degree (cond
                (= ideal v) :ideal
                (<= (:low good) v (:high good)) :good
                (<= (:low minor) v (:high minor)) :minor
                (<= (:low major) v (:high major)) :major
                :else :unacceptable)
     ::direction (when-not (= v ideal)
                   (if (< v ideal) :low :high))}))

(s/fdef glideslope
        :args nil ; todo
        :ret (s/keys :req [::value ::deviation]))

(defn glideslope
  "Compute the glideslope, taking the landing window into
  consideration. Angles are in degrees."
  [params window height distance downrange]
  (let [w (/ window 2)
        d-far  (+ distance w)
        d-near (- distance w)
        g-ideal (units/deg->rad (:ideal params))
        g-near (Math/atan2 height d-near)
        g-far (Math/atan2 height d-far)
        value (units/rad->deg
               (cond
                 (<= g-far g-ideal g-near) g-ideal
                 (< g-ideal g-far) g-far
                 :else g-near))]
    {::value value
     ::deviation (when (pos? downrange)
                   (classify params value))}))

(defn lineup
  "Compute the lineup error, taking the landing window
  consideration. Angles are in degrees."
  [params window crosstrack-error downrange]
  (let [w (/ window 2)
        c-right  (+ crosstrack-error w)
        c-left (- crosstrack-error w)
        l-ideal (units/deg->rad (:ideal params))
        l-left (Math/atan2 c-left downrange)
        l-right (Math/atan2 c-right downrange)
        value (units/rad->deg
               (cond
                 (<= l-left l-ideal l-right) l-ideal
                 (< l-ideal l-left) l-left
                 :else l-right))]
    {::value value
     ::deviation (when (pos? downrange)
                   (classify params value))}))

(defn characterize-frame
  [carrier-id pilot-id params frame]
  (let [{:keys [::acmi/t ::acmi/entities]} frame
        carrier      (get entities carrier-id)
        pilot        (get entities pilot-id)

        ;; ACMI space
        pilot-loc    [(::acmi/u pilot)
                      (::acmi/v pilot)
                      (::acmi/alt pilot)]
        removed? (::acmi/removed? pilot)]
    ;; Because we can have pilots that don't show up until later in
    ;; the file, it's possible that we have no information whatsoever
    ;; about the pilot at this point. We need to have at least
    ;; position to do anything useful.
    (when-not (some nil? pilot-loc)
      (merge
       {:removed? removed?}
       (if-not (and (::acmi/u carrier) (::acmi/v carrier))
         {:approaching? false}
         (let [carrier-loc  [(::acmi/u carrier)
                             (::acmi/v carrier)
                             0]
               ;; Assume a north heading if we can't find one
               carrier-hdg  (or (::acmi/heading carrier) 0)
               landing-loc  (mapv +
                                  (rotate-z (- carrier-hdg)
                                            (mapv units/ft->m (:landing-point params)))
                                  carrier-loc)
               [window-width window-length] (:landing-window params)
               ;; Now into landing space
               coords       (->> (mapv - pilot-loc landing-loc)
                                 (rotate-z (- carrier-hdg (:recovery-skew params)))
                                 (mapv units/m->ft)
                                 (mapv * [1 -1 1]))
               [crosstrack-error downrange height]   coords
               ;; The position we care about is the position of the hook
               pitch (-> frame (acmi/entity pilot-id) ::acmi/pitch units/deg->rad -)
               [hx hy hz] (:hook-offset params)
               ;; x assumed to be zero
               hook-delta-y (- (* hy (Math/cos pitch))
                               (* hz (Math/sin pitch)))
               hook-delta-z (+ (* hz (Math/cos pitch))
                               (* hy (Math/sin pitch)))
               hook-pos     [crosstrack-error
                             (+ downrange hook-delta-y)
                             (+ height hook-delta-z)]
               [_ hook-downrange hook-height] hook-pos
               distance     (Math/sqrt (+ (* crosstrack-error crosstrack-error)
                                          (* hook-downrange hook-downrange)))
               s            (units/rad->deg (Math/atan2 hook-height distance))
               d            distance
               c            (-> (units/rad->deg (Math/asin (/ crosstrack-error distance)))
                                (+ (if (pos? hook-downrange)
                                     0
                                     180)))
               approaching? (and s d c
                                 (< s (:max-slope params))
                                 (< d (-> params
                                          :max-dist
                                          units/nm->ft))
                                 (< (Math/abs c)
                                    (:max-angle params)))
               pass-frame   (merge frame
                                   {::downrange        downrange
                                    ::crosstrack-error crosstrack-error
                                    ::lineup           (lineup (:lineup params)
                                                               window-width
                                                               crosstrack-error
                                                               hook-downrange)
                                    ::glideslope       (glideslope (:glideslope params)
                                                                   window-length
                                                                   hook-height
                                                                   distance
                                                                   hook-downrange)
                                    ::height           height
                                    ::hook-pos         hook-pos
                                    ::slope            s
                                    ::distance         d
                                    ::course-deviation c})]
           (into (sorted-map)
                 {:landing-loc landing-loc
                  :carrier-loc carrier-loc
                  :pilot-loc pilot-loc
                  :approaching? approaching?
                  :distance d
                  :pass-frame pass-frame
                  :s s
                  :d d
                  :c c})))))))

(s/fdef aoa-data
        :args nil ; TODO
        :ret (s/keys :req [::aoa]))

(defn derived-data
  "Computes angle of attack, speed, and other quantities given two frames"
  [params pilot-id f0 f1]
  (let [t0 (::acmi/t f0)
        t1 (::acmi/t f1)
        p0 (::pilot f0)
        [u0 v0 z0] (::pos f0)
        [u1 v1 z1] (::pos f1)
        ud (- u1 u0)
        vd (- v1 v0)
        zd (- z1 z0)
        d (Math/sqrt (+ (* ud ud) (* vd vd) (* zd zd)))
        path-a (units/rad->deg (Math/asin (/ zd d)))
        pitch (::acmi/pitch p0)]
    {::zd     zd
     ::d      d
     ::path-a path-a
     ::pitch  pitch
     ::speed  (/ d (- t1 t0))           ; Feet/sec
     ::aoa    (let [value (- pitch path-a)]
                {::value value
                 ::deviation (classify params value)})}))

(defn result
  "Compute the result of the pass - trap, bolter, etc."
  [params frames]
  ;; What was the height above the deck at which we passed through zero downrange?
  (let [{:keys [wire-interval
                ramp-to-1-wire
                landing-area-width
                landing-area-length
                touchdown-height
                trap-speed]} params
        deck-downrange (+ ramp-to-1-wire (* 2.5 wire-interval))
        deck-uprange (- deck-downrange landing-area-length)
        max-uprange (->> frames
                         (mapv ::downrange)
                         (reduce min))
        min-speed (->> frames
                       (mapv ::speed)
                       (remove nil?)
                       (reduce min))
        deck-frames (->> frames
                         (filterv #(< deck-uprange
                                      (::downrange %)
                                      deck-downrange)))
        [_ _ last-height] (->> frames last ::hook-pos)
        last-downrange (->> frames last ::downrange)
        min-deck-height (when-not (empty? deck-frames)
                          (->> deck-frames
                               (mapv ::height)
                               (reduce min)))]
    ;; TODO: refine
    (cond
      (and (neg? (log/spy last-height))
           (pos? (log/spy last-downrange))
           (< (log/spy last-downrange) (+ 500 (log/spy deck-downrange))))
      :ramp-strike

      (and min-deck-height
           (< min-deck-height (:touchdown-height params)))
      (if (< min-speed trap-speed)
        :trap
        :bolter)

      :else
      :waveoff)))

(defn assess-deviation
  "Returns the assessed deviation for the given zone."
  [{:keys [params path frames from to]}]
  (let [{:keys [weights]} params
        {:keys [start end]} weights
        scores (->> frames
                    (filterv #(< to (::downrange %) from))
                    (reduce (fn [scores frame]
                              (let [{:keys [::degree ::direction]} (get-in frame path)
                                    ;; downrange (::downrange frame)
                                    ;; range-proportion (/ (- downrange to) (- from to))
                                    ;; range-weight (or (+ end (* range-proportion (- start end)))
                                    ;;                  0)
                                    ;; _ (log/debug :downrange downrange
                                    ;;              :from from
                                    ;;              :to to
                                    ;;              :range-weight range-weight)
                                    class-weight (or (get weights degree) 0)
                                    ;; score (* range-weight
                                    ;;          class-weight)
                                    score class-weight]
                                (update scores
                                        [degree direction]
                                        (fnil + 0)
                                        score)))
                            {}))]
    (when-not (empty? scores)
      (let [[[degree direction] score] (apply max-key val scores)]
        {::degree degree
         ::direction direction
         ::scores scores}))))

(defn assess-zone
  "Returns assessment of the given zone"
  [{:keys [params frames from to]}]
  (->> (for [[dimension key] [[::aoa-assessment ::aoa]
                              [::glideslope-assessment ::glideslope]
                              [::lineup-assessment ::lineup]]]
         (do (log/info "Assesssing" :dimension key)
             [dimension (assess-deviation {:params params
                                           :path [key ::deviation]
                                           :frames frames
                                           :from from
                                           :to to})]))
       (into {})))

(defn assess-wire
  "Returns a wire number, or nil if wire cannot be determined."
  [params frames]
  (let [{:keys [wire-interval hook-offset touchdown-height]}  params
        aloft (->> frames
                   (take-while (fn [frame]
                                 (let [[_ _ height] (::hook-pos frame)]
                                   ;; Blah: magic
                                   (< 1 height))))
                   (into []))
        last-aloft (last aloft)
        [_ hook-downrange hook-height] (::hook-pos last-aloft)
        hook-contact (+ hook-downrange
                        (/ hook-height
                           (Math/tan (units/deg->rad (::path-a last-aloft)))))]
    (let [penultimate (->> aloft butlast last)
          last-aloft penultimate
          [_ hook-downrange hook-height] (::hook-pos last-aloft)
          hook-contact (+ hook-downrange
                          (/ hook-height
                             (Math/tan (units/deg->rad (::path-a last-aloft)))))]
      (log/debug "assess-wire penultimate"
                 :t (::acmi/t last-aloft)
                 :start (->> frames first ::acmi/t units/s->dhms)
                 :hook-downrange hook-downrange
                 :hook-height hook-height
                 :hook-contact hook-contact
                 :pitch (-> last-aloft ::pilot ::acmi/pitch)
                 :path-a (::path-a last-aloft)))
    (log/debug "assess-wire last"
               :t (::acmi/t last-aloft)
               :start (->> frames first ::acmi/t units/s->dhms)
               :hook-downrange hook-downrange
               :hook-height hook-height
               :hook-contact hook-contact
               :pitch (-> last-aloft ::pilot ::acmi/pitch)
               :path-a (::path-a last-aloft))
    (let [down (->> frames
                    (drop-while (fn [frame]
                              (let [[_ _ height] (::hook-pos frame)]
                                (< 1 height))))
                    first)
          [_ hook-downrange hook-height] (::hook-pos down)
          hook-contact (+ hook-downrange
                          (/ hook-height
                             (Math/tan (units/deg->rad (::path-a last-aloft)))))]
      (log/debug "assess-wire down"
                 :t (::acmi/t down)
                 :start (->> frames first ::acmi/t units/s->dhms)
                 :hook-downrange hook-downrange
                 :hook-height hook-height
                 :hook-contact hook-contact
                 :pitch (-> down ::pilot ::acmi/pitch)
                 :path-a (::path-a down)))
    (cond
      (< (* 1.5 wire-interval) hook-contact)
      1

      (< (/ wire-interval 2) hook-contact)
      2

      (< (- (/ wire-interval 2)) hook-contact)
      3

      :else 4)))

(defn augment-frames
  "Augment the pass frames with any data that has to be derived from
  the sequence."
  [params pilot-id frames]
  (let [distinct-frames (->> frames
                             (reduce
                              (fn [{:keys [frames last-pos] :as acc} frame]
                                (let [p (acmi/entity frame pilot-id)
                                      u (::acmi/u p)
                                      v (::acmi/v p)
                                      z (::acmi/alt p)
                                      pos [u v z]]
                                  (if (= last-pos pos)
                                    acc
                                    (assoc acc
                                           :frames
                                           (conj frames
                                                 (assoc frame
                                                        ::pos (mapv units/m->ft pos)
                                                        ::pilot p))
                                           :last-pos
                                           pos))))
                              {:frames []
                               :last-pos nil})
                             :frames)]
    (mapv (fn [f0 f1]
            (merge f1 (derived-data (:aoa params) pilot-id f0 f1)))
          distinct-frames
          (drop 4 distinct-frames))))

(defn low-and-slow-at-ramp?
  [assessment]
  (and (-> assessment ::at-ramp ::aoa-assessment log/spy ::degree #{:unacceptable :major})
       (-> assessment ::at-ramp ::aoa-assessment ::direction (= :high))
       (-> assessment ::at-ramp ::glideslope-assessment log/spy ::degree #{:unacceptable :major})
       (-> assessment ::at-ramp ::glideslope-assessment ::direction (= :low))))

(defn grade-trap
  [params assessment]
  (let [{:keys [::result ::start ::mid ::in-close ::at-ramp ::wire]} assessment
        deviation-score (fn [dimension]
                          (->> (for [phase [start mid in-close at-ramp]]
                                 (get-in phase [dimension ::degree]))
                               (map {nil           0
                                     :ideal        0
                                     :good         0
                                     :minor        1
                                     :major        2
                                     :unacceptable 4})
                               (reduce +)))
        aoa-score (deviation-score ::aoa-assessment)
        lineup-score (deviation-score ::lineup-assessment)
        glideslope-score (deviation-score ::glideslope-assessment)
        exactly (fn [_ n] n)
        overall (cond-> 5
                  (low-and-slow-at-ramp? assessment) (exactly 0)
                  (<= 20 aoa-score) (- 1)
                  (<= 10 aoa-score) (- 1)
                  (< 0 aoa-score) (- 0.1)
                  (<= 8 glideslope-score) (- 1)
                  (<= 4 glideslope-score) (- 1)
                  (< 0 glideslope-score) (- 0.1)
                  (<= 8 lineup-score) (- 1)
                  (<= 4 lineup-score) (- 1)
                  (< 0 lineup-score) (- 0.1))]
    (log/debug "scoring"
               :overall overall
               :aoa aoa-score
               :lineup lineup-score
               :glideslope glideslope-score)
    (cond
      (= 5 overall) ::ok+
      (<= 4 overall) ::ok
      (<= 3 overall) ::fair
      (<= 2 overall) ::none
      :else ::cut-pass)))

(defn grade
  "Given an initial assessment, return a grade."
  [params assessment]
  ;; TODO: update grading
  (let [result (::result assessment)]
   (cond
     (= result :bolter) ::bolter
     (= result :waveoff) ::waveoff
     (= result :ramp-strike) ::cut-pass
     (= result :trap) (grade-trap params assessment))))

(defn assess-pass
  "Perform any processing that can only happen once we have the whole
  pass. Returns the assessment."
  [params pilot-id frames]
  (log/info "assessing pass"
            :pilot (-> frames
                       last
                       (acmi/entity pilot-id)
                       ::acmi/pilot)
            :start (-> frames
                       first
                       ::acmi/t
                       units/s->dhms))
  (let [augmented-frames (augment-frames params pilot-id frames)
        result (result params augmented-frames)
        {:keys [touchdown-height zones]}  params
        touchdown (when (#{:bolter :trap} result)
                    (->> augmented-frames
                         (filter #(< (::height %) touchdown-height))
                         first
                         ::downrange))
        initial     {::result result
                     ::start (do (log/info "Asessing start")
                                 (assess-zone {:params params
                                               :frames augmented-frames
                                               :from (-> zones :start :from)
                                               :to (-> params :zones :start :to)}))
                     ::mid (do (log/info "Asssessing mid")
                               (assess-zone {:params params
                                             :frames augmented-frames
                                             :from (-> zones :mid :from)
                                             :to (-> zones :mid :to)}))
                     ::in-close (do (log/info "Assessing in close")
                                    (assess-zone {:params params
                                                  :frames augmented-frames
                                                  :from (-> zones :in-close :from)
                                                  :to (-> zones :in-close :to)}))
                     ::at-ramp (do (log/info "Assessing at ramp")
                                   (assess-zone {:params params
                                                 :frames augmented-frames
                                                 :from (-> zones :in-close :to)
                                                 :to (or touchdown 0)}))
                     ::wire (when (= result :trap)
                              (log/info "Assessing wire")
                              (assess-wire params augmented-frames))
                     ::frames augmented-frames}]
    (assoc initial
           ::grade (grade params initial))))

(defn find-passes
  "Returns a seq of seq of pass frames found for the given pilot and
  carrier."
  [file carrier-id pilot-id params]
  (loop [[frame & frames] (::acmi/frames file)
         start nil
         end nil
         pass-frames []
         passes []]
    (if-not frame
      passes
      (let [t (::acmi/t frame)
            {:keys [distance approaching? pass-frame removed?]}
            (characterize-frame carrier-id pilot-id params frame)]
        (cond
          ;; Look for start of pass
          (not start)
          (recur frames
                 (when (and approaching?
                            (< (-> params :min-dist units/nm->ft) distance))
                   t)
                 nil
                 [pass-frame]
                 passes)

          ;; Either we're not in the approach cone any more, or the
          ;; file has ended
          (or (not approaching?)
              removed?
              (empty? frames))
          ;; Have we been in the cone long enough?
          (if (< (:min-time params) (- t (or start 0)))
            ;; Yes - record the pass
            (let [pass-frames* (conj pass-frames pass-frame)
                  [coda remainder] (loop [coda []
                                          [frame & more] frames
                                          t0 nil]
                                     ;; We record until either the
                                     ;; pilot crosses the threshold,
                                     ;; plus the coda, or until 30
                                     ;; seconds have gone by,
                                     ;; whichever comes first.
                                     (let [cf (:pass-frame
                                               (characterize-frame carrier-id
                                                                   pilot-id
                                                                   params
                                                                   frame))]
                                       (if (or (nil? frame)
                                               (and t0
                                                    (< (+ (long t0) (:coda params))
                                                       (::acmi/t frame)))
                                               (< (+ t 30)
                                                  (::acmi/t frame)))
                                         [(conj coda cf) more]
                                         (recur (conj coda cf)
                                                more
                                                (or t0 (when (neg? (-> cf
                                                                       ::downrange))
                                                         (::acmi/t frame)))))))
                  coda-frames coda]
              (recur remainder
                     nil
                     nil
                     []
                     (conj passes (into pass-frames* coda-frames)
                           #_(assess-pass params
                                          pilot-id
                                          ))))
            ;; Nope - go back to looking
            (recur frames
                   nil
                   nil
                   []
                   passes))

          ;; Still on approach
          :else
          (recur frames
                 start
                 end
                 (conj pass-frames pass-frame)
                 passes))))))

(def carrier-id acmi/id)
(def pilot-id acmi/id)

(defn carriers
  [file]
  (let [entities (-> file ::acmi/frames last acmi/entities)]
    (->> entities
         (filter (fn [[id properties]]
                   (-> properties
                       ::acmi/object-type
                       (get "AircraftCarrier"))))
         (map first))))

(defn pilots
  [file]
  (let [entities (-> file ::acmi/frames last acmi/entities)]
    (->> entities
         (filter (fn [[id properties]]
                   (::acmi/pilot properties)))
         (map first))))

(s/fdef passes
        :args acmi/file
        :ret (s/map-of carrier-id (s/map-of pilot-id (s/* assessment))))

(defn passes
  "Returns a map from IDs of carriers to map of pilot ids to sequences
  of pass assessments."
  [file params]
  (let [carriers (carriers file)
        pilots   (pilots file)]
    (reduce (fn [m [carrier-id pilot-id]]
              (assoc-in m
                        [carrier-id pilot-id]
                        (mapv #(assess-pass params pilot-id %)
                              (find-passes file carrier-id pilot-id params))))
            {}
            (for [carrier-id carriers
                  pilot-id pilots]
              [carrier-id pilot-id]))))
