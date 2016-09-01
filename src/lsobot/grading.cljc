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

(def deviations (s/spec (s/* deviation)))
(s/def ::aoa-deviations deviations)
(s/def ::glideslope-deviations deviations)
(s/def ::lineup-deviations deviations)
(def comments (s/keys :req [::aoa-deviations
                            ::glideslope-deviations
                            ::lineup-deviations]))

(s/def ::start comments)

(def assessment (s/keys :req [::result ::frames ::start]))

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
  {:min-time            10  ; Seconds
   :max-slope           10  ; Degrees
   :max-angle           20  ; Degrees
   :min-dist            0.4 ; Pass has to start at least this far away (nm).
                                        ; Prevents things like detecting a pass starting
                                        ; on the deck.
   :max-dist            1.5   ; Pass starts no farther away than this (nm).
   :recovery-skew       11    ; Degrees the deck of the carrier differs from
                                        ; the heading of the carrier
   :coda                5      ; Seconds of data to keep after approach ends
   :landing-point       [-15 -313 74]       ; x,y,z position in carrier
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

   :trap-speed          (units/kts->ft-per-sec 40) ; Must slow to below this
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
                         :end          2
                         :ideal        1
                         :good         1
                         :minor        2
                         :major        4
                         :unacceptable 8}
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
               _ (when (or (some nil? pilot-loc)
                           (some nil? landing-loc))
                   (log/debug "locs"
                              :t (::acmi/t frame)
                              :pilot pilot-id
                              :pilot-loc pilot-loc
                              :landing-loc landing-loc))
               ;; Now into landing space
               coords       (->> (mapv - pilot-loc landing-loc)
                                 (rotate-z (- carrier-hdg (:recovery-skew params)))
                                 (mapv units/m->ft)
                                 (mapv * [1 -1 1]))
               [crosstrack-error downrange height]   coords
               distance     (Math/sqrt (+ (* crosstrack-error crosstrack-error)
                                          (* downrange downrange)))
               s            (units/rad->deg (Math/atan2 height distance))
               d            distance
               c            (-> (units/rad->deg (Math/asin (/ crosstrack-error distance)))
                                (+ (if (pos? downrange)
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
                                                               downrange)
                                    ::glideslope       (glideslope (:glideslope params)
                                                                   window-length
                                                                   height
                                                                   distance
                                                                   downrange)
                                    ::height           height
                                    ::slope            s
                                    ::distance         d
                                    ::course-deviation c})]
           (into (sorted-map)
                 {:landing-loc landing-loc
                  :carrier-loc carrier-loc
                  :pilot-loc pilot-loc
                  :approaching? approaching?
                  :distance d
                  :pass-frame pass-frame})))))))

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
        path-a (units/rad->deg (Math/atan2 (- z1 z0) d))
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
        last-height (->> frames last ::height)
        last-downrange (->> frames last ::downrange)
        min-deck-height (when-not (empty? deck-frames)
                          (->> deck-frames
                               (mapv ::height)
                               (reduce min)))]
    ;; TODO: refine
    (cond
      (and (neg? last-height)
           (pos? last-downrange)
           (< last-downrange (+ 500 deck-downrange)))
      :ramp-strike

      (and min-deck-height
           (< min-deck-height (:touchdown-height params)))
      (if (< min-speed trap-speed)
        :trap
        :bolter)

      :else
      :waveoff)))

(s/fdef assess-start
        :args frames
        :ret comments)

(defn assess-start
  "Returns assessment of start"
  [params frames]
  (let [dist (-> params
                 :zones
                 :start
                 ;; TODO: make this a from/to zone instead
                 :from)
        frame (->> frames
                   (filterv #(< (::downrange %) dist))
                   first)]
    {::aoa-deviations [(-> frame ::aoa ::deviation)]
     ::glideslope-deviations [(-> frame ::glideslope ::deviation)]
     ::lineup-deviations [(-> frame ::lineup ::deviation)]}))

(defn most-serious-deviation
  "Returns the most serious deviation from a sequence of deviations."
  [deviations]
  (let [rank {:ideal        0
              :good         1
              :minor        2
              :major        3
              :unacceptable 4}
        seriousness (fn [[deviation count]]
                      [(- (rank (::degree deviation))) (- count)])]
    (->> deviations
         frequencies
         (sort-by seriousness)
         first
         first)))

(s/fdef assess-mid
        :args frames
        :ret comments)

(defn assess-mid
  "Returns assessment of mid-phase."
  [params frames]
  (let [from (-> params :zones :start :from)
        to (-> params :zones :start :to)
        phase-frames (->> frames
                          (filterv #(< to (::downrange %) from)))]
    ;; For now, we return only a single deviation, which is the most
    ;; common, most serious one.
    {::aoa-deviations [(->> phase-frames
                            (mapv #(get-in % [::aoa ::deviation]))
                            most-serious-deviation)]
     ::glideslope-deviations [(->> phase-frames
                                   (mapv #(get-in % [::glideslope ::deviation]))
                                   most-serious-deviation)]
     ::lineup-deviations [(->> phase-frames
                               (mapv #(get-in % [::lineup ::deviation]))
                               most-serious-deviation)]}))

(defn assess-deviation
  "Returns the assessed deviation for the given zone."
  [{:keys [params path frames zone]}]
  (let [{:keys [zones weights]} params
        {:keys [start end]} weights
        {:keys [from to]} (get zones zone)
        scores (->> frames
                    (filterv #(< to (::downrange %) from))
                    (reduce (fn [scores frame]
                              (let [{:keys [::degree ::direction]} (get-in frame path)
                                    downrange (::downrange frame)
                                    range-proportion (/ (- downrange to) (- from to))
                                    range-weight (+ end (* range-proportion (- start end)))
                                    class-weight (get weights degree)
                                    score (* range-weight
                                             class-weight)]
                                (update scores
                                        [degree direction]
                                        (fnil + 0)
                                        score)))
                            {}))
        [[degree direction] score] (apply max-key val scores)]
    [{::degree degree
      ::direction direction
      ::score score}]))

(defn assess-zone
  "Returns assessment of the given zone"
  [params zone frames]
  (->> (for [[dimension key] [[::aoa-deviations ::aoa]
                              [::glideslope-deviations ::glideslope]
                              [::lineup-deviations ::lineup]]]
         [dimension (assess-deviation {:params params
                                       :zone zone
                                       :path [key ::deviation]
                                       :frames frames})])
       (into {})))

(defn hook-pos
  "Returns [crosstrack downrange height] of hook."
  [params frame]
  (let [pitch (-> frame ::pilot ::acmi/pitch units/deg->rad -)
        [hx hy hz] (:hook-offset params)
        ;; x assumed to be zero
        y (- (* hy (Math/cos pitch))
             (* hz (Math/sin pitch)))
        z (+ (* hz (Math/cos pitch))
             (* hy (Math/sin pitch)))]
    [(-> frame ::crosstrack-error)
     (-> frame
         ::downrange
         (+ y))
     (-> frame
         ::height
         (+ z))]))

(defn assess-wire
  "Returns a wire number, or nil if wire cannot be determined."
  [params frames]
  (let [{:keys [wire-interval]}  params
        ;; TODO
        ]
    ))

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
                                           :frames (conj frames
                                                         (assoc frame
                                                                ::pos (mapv units/m->ft pos)
                                                                ::pilot p))
                                           :last-pos pos))))
                              {:frames []
                               :last-pos nil})
                             :frames)]
    (mapv (fn [f0 f1]
            (merge f1 (derived-data (:aoa params) pilot-id f0 f1)))
          distinct-frames
          (drop 4 distinct-frames))))

(defn assess-pass
  "Perform any processing that can only happen once we have the whole
  pass. Returns the assessment."
  [params pilot-id frames]
  (let [augmented-frames (augment-frames params pilot-id frames)
        result (result params augmented-frames)]
    {::result result
     ::start (assess-zone params :start augmented-frames)
     ::mid (assess-zone params :mid augmented-frames)
     ::in-close (assess-zone params :in-close augmented-frames)
     ::wire (when (= result :trap)
              (assess-wire params augmented-frames))
     ::frames augmented-frames}))

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
                  [coda remainder] (split-with
                                    (fn [frame]
                                      (< (::acmi/t frame) (+ t (:coda params))))
                                    frames)
                  coda-frames (->> coda
                                   (map #(characterize-frame carrier-id
                                                             pilot-id
                                                             params
                                                             %))
                                   (map :pass-frame))]
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
