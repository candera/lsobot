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
  {:min-time      10  ; Seconds
   :max-slope     10  ; Degrees
   :max-angle     20  ; Degrees
   :min-dist      0.4 ; Pass has to start at least this far away (nm).
                                        ; Prevents things like detecting a pass starting
                                        ; on the deck.
   :max-dist      1.5   ; Pass starts no farther away than this (nm).
   :recovery-skew 11    ; Degrees the deck of the carrier differs from
                                        ; the heading of the carrier
   :coda          5      ; Seconds of data to keep after approach ends
   :landing-point [-15 -313 74] ; x,y,z position in carrier
                                ; coordinates zero where landing
                                        ; should aim. Feet.
   :landing-window [50 150] ; width,length of the "window" around the
                            ; landing point. This forms an imaginary
                            ; box, inside of which everywhere is
                            ; considered equivalent. Lining up on
                            ; anywhere inside this box is considered
                            ; equivalent to lining up on the landing
                            ; point.
   :glideslope    {:ideal 3.3
                   :good  {:low  3.1
                           :high 3.5}
                   :minor {:low  2.7
                           :high 3.9}
                   :major {:low  2.3
                           :high 4.3}}
   :aoa           {:ideal 8.1
                   :good  {:low  7.4
                           :high 8.8}
                   :minor {:low  7.4
                           :high 8.8}
                   :major {:low  6.9
                           :high 9.3}}
   :lineup        {:ideal 0
                   :good  {:low  -1
                           :high 1}
                   :minor {:low  -2
                           :high 2}
                   :major {:low  -3
                           :high 3}}})

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

(defn glideslope
  "Compute the glideslope, taking the landing window into
  consideration. Angles are in degrees."
  [ideal window height distance]
  (let [w (/ window 2)
        d-far  (+ distance w)
        d-near (- distance w)
        g-ideal (units/deg->rad ideal)
        g-near (Math/atan2 height d-near)
        g-far (Math/atan2 height d-far)]
    (units/rad->deg
     (cond
       (<= g-far g-ideal g-near) g-ideal
       (< g-ideal g-far) g-far
       :else g-near))))

(defn lineup
  "Compute the lineup error, taking the landing window
  consideration. Angles are in degrees."
  [ideal window crosstrack-error downrange]
  (let [w (/ window 2)
        c-right  (+ crosstrack-error w)
        c-left (- crosstrack-error w)
        l-ideal (units/deg->rad ideal)
        l-left (Math/atan2 c-left downrange)
        l-right (Math/atan2 c-right downrange)]
    (units/rad->deg
     (cond
       (<= l-left l-ideal l-right) l-ideal
       (< l-ideal l-left) l-left
       :else l-right))))

(defn characterize-frame
  [carrier-id pilot-id params frame]
  (let [{:keys [::acmi/t ::acmi/entities]} frame
        carrier      (get entities carrier-id)
        pilot        (get entities pilot-id)

        ;; ACMI space
        pilot-loc    [(::acmi/u pilot)
                      (::acmi/v pilot)
                      (::acmi/alt pilot)]]
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
                                 ::lineup           (lineup (-> params
                                                                :lineup
                                                                :ideal)
                                                            window-width
                                                            crosstrack-error
                                                            downrange)
                                 ::glideslope       (glideslope (-> params
                                                                    :glideslope
                                                                    :ideal)
                                                                window-length
                                                                height
                                                                distance)
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
               :pass-frame pass-frame})))))

(defn aoa-data
  "Computes angle of attack and related quantities given two frames"
  [pilot-id f0 f1]
  (let [e0 (acmi/entity f0 pilot-id)
        e1 (acmi/entity f1 pilot-id)
        u0 (::acmi/u e0)
        u1 (::acmi/u e1)
        v0 (::acmi/v e0)
        v1 (::acmi/v e1)
        z0 (::acmi/alt e0)
        z1 (::acmi/alt e1)
        ud (- u1 u0)
        vd (- v1 v0)
        d (Math/sqrt (+ (* ud ud) (* vd vd)))
        path-a (units/rad->deg (Math/atan2 (- z1 z0) d))]
    ;; Sometime a frame updates because something other than position
    ;; changes. In which case, we can't compute a meaninful AOA.
    (if (= [u1 v1] [u0 v0])
      {}
      {::zd (- z1 z0)
       ::d d
       ::path-a path-a
       ::pitch (::acmi/pitch e0)
       ::pilot e0
       ::aoa (- (::acmi/pitch e0) path-a)})))

(defn assess-pass
  "Perform any processing that can only happen once we have the whole
  pass. Returns the assessment."
  [pilot-id frames]
  (let [augmented-frames (mapv (fn [f0 f1]
                                 (merge f0 (aoa-data pilot-id f0 f1)))
                               frames
                               (drop 4 frames))]
    {::result :ramp-strike ; TODO
     ::frames augmented-frames}))

(defn find-passes
  "Returns a seq of assessments found for the given pilot and carrier."
  [file carrier-id pilot-id params]
  (loop [[frame & frames] (::acmi/frames file)
         start nil
         end nil
         pass-frames []
         passes []]
    (if-not frame
      passes
      (let [t (::acmi/t frame)
            {:keys [distance approaching? pass-frame]}
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
          (or (not approaching?) (empty? frames))
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
                     (conj passes (assess-pass pilot-id
                                               (into pass-frames* coda-frames)))))
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
(s/def ::slope float?)
(s/def ::distance float?)
(s/def ::course-deviation float?)
(s/def ::result #{:trap :bolter :waveoff :ramp-strike})
(def frame (s/keys :req [::slope
                         ::distance
                         ::course-deviation
                         ::acmi/entities
                         ::acmi/t
                         ::acmi/events]))

(s/def ::frames (s/spec (s/* frame)))

(def assessment (s/keys :req [::result ::frames]))

(s/fdef passes
        :args acmi/file
        :ret (s/map-of carrier-id (s/map-of pilot-id (s/* assessment))))

(defn passes
  "Returns a map from IDs of carriers to map of pilot ids to sequences
  of pass assessments."
  [file params]
  (let [entities (-> file ::acmi/frames last acmi/entities)
        carriers (->> entities
                      (filter (fn [[id properties]]
                                (-> properties
                                    ::acmi/object-type
                                    (get "AircraftCarrier"))))
                      (map first))
        pilots    (->> entities
                       (filter (fn [[id properties]]
                                 (::acmi/pilot properties)))
                       (map first))]
    (reduce (fn [m [carrier-id pilot-id]]
              (assoc-in m
                        [carrier-id pilot-id]
                        (find-passes file carrier-id pilot-id params)))
            {}
            (for [carrier-id carriers
                  pilot-id pilots]
              [carrier-id pilot-id]))))
