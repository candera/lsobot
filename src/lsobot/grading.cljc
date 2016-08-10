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
   :max-angle     10  ; Degrees
   :min-dist      0.4 ; Pass has to start at least this far away (nm).
                                        ; Prevents things like detecting a pass starting
                                        ; on the deck.
   :max-dist      1.5   ; Pass starts no farther away than this (nm).
   :recovery-skew 12.15  ; Degrees the deck of the carrier differs from
                                        ; the heading of the carrier
   :coda          5      ; Seconds of data to keep after approach ends
   :landing-point [-25 -313 74] ; x,y,z position in carrier coordinates
                                        ; zero where landing
                                        ; should aim. Feet.
   })

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

(defn characterize-frame
  [carrier-id pilot-id params frame]
  (let [[t {:keys [::acmi/entities] :as frame-data}] frame
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
            carrier-hdg  (or (::acmi/yaw carrier) 0)
            landing-loc  (mapv +
                               (rotate-z (- carrier-hdg)
                                         (mapv units/ft->m (:landing-point params)))
                               carrier-loc)
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
            pass-frame   [t (merge frame-data
                                   {::downrange        downrange
                                    ::crosstrack-error crosstrack-error
                                    ::height           height
                                    ::slope            s
                                    ::distance         d
                                    ::course-deviation c})]]
        (into (sorted-map)
              {:landing-loc landing-loc
               :carrier-loc carrier-loc
               :pilot-loc pilot-loc
               :approaching? approaching?
               :distance d
               :pass-frame pass-frame})))))

(defn find-passes
  [file carrier-id pilot-id params]
  (loop [[frame & frames] (::acmi/frames file)
         start nil
         end nil
         pass-frames []
         passes []]
    (if-not frame
      passes
      (let [[t] frame
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

          ;; Still on approach
          approaching?
          (recur frames
                 start
                 end
                 (conj pass-frames pass-frame)
                 passes)

          ;; Either we're not in the approach cone any more, or the
          ;; file has ended
          (or (not approaching?) (empty? frames))
          ;; Have we been in the cone long enough?
          (if (< (:min-time params) (- t (or start 0)))
            ;; Yes - record the pass
            (let [pass-frames* (conj pass-frames pass-frame)
                  [coda remainder] (split-with
                                    (fn [[t*]]
                                      (< t* (+ t (:coda params))))
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
                     ;; TODO: Move the end time forward a bit
                     (conj passes (into pass-frames* coda-frames))))
            ;; Nope - go back to looking
            (recur frames
                   nil
                   nil
                   []
                   passes)))))))

(def carrier-id acmi/id)
(def pilot-id acmi/id)
(s/def ::slope float?)
(s/def ::distance float?)
(s/def ::course-deviation float?)
(def pass-data (s/keys :req [::slope ::distance ::course-deviation ::acmi/entities]))
(def pass-frame (s/cat :time float? :data pass-data))

(s/fdef passes
        :args acmi/file
        :ret (s/map-of carrier-id (s/map-of pilot-id (s/* pass-frame))))

(defn passes
  "Returns a map from IDs of carriers to map of pilot ids to sequences
  of passes."
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
