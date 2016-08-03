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

(def pass-parameters
  {:min-time      10 ; Seconds
   :max-slope     10 ; Degrees
   :max-angle     10 ; Degrees
   :max-dist      1  ; Miles
   :deck-height   70 ; Feet
   :recovery-skew 10 ; Degrees
   })

(defn distance
  "Returns the distance between two objects in feet, independent of altitude."
  [obj1 obj2]
  (let [u1 (some-> obj1 ::acmi/u units/m->ft)
        u2 (some-> obj2 ::acmi/u units/m->ft)
        v1 (some-> obj1 ::acmi/v units/m->ft)
        v2 (some-> obj2 ::acmi/v units/m->ft)]
    (when (and u1 u2 v1 v2)
      (let [ud (- u2 u1)
            vd (- v2 v1)]
        (Math/sqrt (+ (* ud ud)
                      (* vd vd)))))))

(defn slope
  "Returns the elevation from a carrier to a pilot, in degrees"
  [carrier pilot]
  (when-let [height (some-> pilot
                            ::acmi/alt
                            units/m->ft
                            (- (:deck-height pass-parameters)))]
    (units/rad->deg (Math/atan2 height
                                (distance carrier pilot)))))

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

(defn approach-course-deviation
  "How many degrees off the centerline approach the pilot is"
  [carrier pilot]
  (when-let [b (bearing pilot carrier)]
    (-> b
        (+ (:recovery-skew pass-parameters))
        ;; The file doesn't seem to always record a yaw for the
        ;; carrier. For now, we'll assume that means a heading of
        ;; zero.
        (- (or (::acmi/yaw carrier) 0))
        (- 180)
        (mod 360)
        (- 180))))

(defn find-passes
  [file carrier-id pilot-id]
  (loop [[frame & frames] (::acmi/frames file)
         start nil
         end nil
         pass-frames []
         passes []]
    (if-not frame
      passes
      (let [[t {:keys [::acmi/entities] :as frame-data}] frame]
        (let [carrier      (get entities carrier-id)
              pilot        (get entities pilot-id)
              s            (slope carrier pilot)
              d            (distance carrier pilot)
              c            (approach-course-deviation carrier pilot)
              approaching? (and s d c
                                (< s (:max-slope pass-parameters))
                                (< d (-> pass-parameters
                                         :max-dist
                                         units/nm->ft))
                                (< (Math/abs c)
                                   (:max-angle pass-parameters)))
              pass-frame   [t (merge frame-data
                                     {::slope            s
                                      ::distance         d
                                      ::course-deviation c})]]
         (cond
           ;; Look for start of pass
           (not start)
           (do
             (recur frames
                    (when approaching?
                      (log/debug "I think I found a start" :t t)
                      t)
                    nil
                    [pass-frame]
                    passes))

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
           (if (< (:min-time pass-parameters) (- t (or start 0)))
             ;; Yes - record the pass
             (recur frames
                    nil
                    nil
                    []
                    ;; TODO: Move the end time forward a bit
                    (conj passes pass-frames))
             ;; Nope - go back to looking
             (recur frames
                    nil
                    nil
                    []
                    passes))))))))

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
  [file]
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
                        (find-passes file carrier-id pilot-id)))
            {}
            (for [carrier-id carriers
                  pilot-id pilots]
              [carrier-id pilot-id]))))

