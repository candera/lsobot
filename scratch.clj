;; (require '[clojure.java.io :as io])

;; ;; File format at https://github.com/agustinsantos/FalconNet/blob/f2357223a8a4e65db6c5e63ce778b71c5d0a1c3e/Acmi/AcmiTape.cs#L321

;; {0  :ACMIRecGenPosition,
;;  1  :ACMIRecMissilePosition,
;;  2  :ACMIRecFeaturePosition,
;;  3  :ACMIRecAircraftPosition,
;;  4  :ACMIRecTracerStart,
;;  5  :ACMIRecStationarySfx,
;;  6  :ACMIRecMovingSfx,
;;  7  :ACMIRecSwitch,
;;  8  :ACMIRecDOF,
;;  9  :ACMIRecChaffPosition,
;;  10 :ACMIRecFlarePosition,
;;  11 :ACMIRecTodOffset,
;;  12 :ACMIRecFeatureStatus,
;;  13 :ACMICallsignList,
;;  14 :ACMIRecMaxTypes}

;; (let [buf (byte-array 1024)
;;       files (->> "/tmp/"
;;                  io/file
;;                  file-seq
;;                  (map #(.getAbsolutePath %))
;;                  (filter #(.endsWith % ".vhs")))]
;;   (doseq [file files]
;;     (let [in  (io/input-stream file)
;;           n (.read in buf)
;;           bb (java.nio.ByteBuffer/allocate n)]
;;       (.order bb java.nio.ByteOrder/LITTLE_ENDIAN)
;;       (.put bb buf 0 n)
;;       (.flip bb)
;;       (let [file-id (.getInt bb)
;;             file-size (.getInt bb)
;;             num-entities (.getInt bb)
;;             num-feat (.getInt bb)
;;             entity-block-offset (.getInt bb)
;;             num-entity-positions (.getInt bb)
;;             timeline-block-offset (.getInt bb)
;;             first-ent-event-offset (.getInt bb)
;;             first-general-event-offset (.getInt bb)
;;             first-event-trailer-offset (.getInt bb)
;;             first-text-event-offset (.getInt bb)
;;             first-feat-event-offset (.getInt bb)
;;             num-events (.getInt bb)
;;             num-ent-events (.getInt bb)
;;             num-text-events (.getInt bb)
;;             num-feat-events (.getInt bb)
;;             start-time (.getFloat bb)
;;             tot-play-time (.getFloat bb)
;;             tod-offset (.getFloat bb)]
;;         (println :file file
;;                  :file-id file-id
;;                  :file-size file-size
;;                  :num-entities num-entities
;;                  :num-feat num-feat
;;                  :entity-block-offset entity-block-offset
;;                  :num-entity-positions num-entity-positions
;;                  :timeline-block-offset timeline-block-offset
;;                  :first-ent-event-offset first-ent-event-offset
;;                  :first-general-event-offset first-general-event-offset
;;                  :first-event-trailer-offset first-event-trailer-offset
;;                  :first-text-event-offset first-text-event-offset
;;                  :first-feat-event-offset first-feat-event-offset
;;                  :num-events num-events
;;                  :num-ent-events num-ent-events
;;                  :num-text-events num-text-events
;;                  :num-feat-events num-feat-events
;;                  :start-time start-time
;;                  :tot-play-time tot-play-time
;;                  :tod-offset tod-offset)
;;         (let [num-entities (.getLong bb)]
;;           (println "  " :num-entities num-entities)
;;           (dotimes [_ (min num-entities 4)]
;;             (let [unique-id                  (.getInt bb)
;;                   type                       (.getInt bb)
;;                   count                      (.getInt bb)
;;                   flags                      (.getInt bb)
;;                   ;;           public enum EntityFlag : int
;;                   ;; {
;;                   ;;     ENTITY_FLAG_MISSILE = 0x00000001,
;;                   ;;     ENTITY_FLAG_FEATURE = 0x00000002,
;;                   ;;     ENTITY_FLAG_AIRCRAFT = 0x00000004,
;;                   ;;     ENTITY_FLAG_CHAFF = 0x00000008,
;;                   ;;     ENTITY_FLAG_FLARE = 0x00000010,
;;                   ;; }
;;                   lead-index                 (.getInt bb)
;;                   slot                       (.getInt bb)
;;                   special-flags              (.getInt bb)
;;                   first-position-data-offset (.getInt bb)
;;                   first-event-data-offset    (.getInt bb)
;;                   ]
;;               (println "  "
;;                        :unique-id unique-id
;;                        :type type
;;                        :count count
;;                        :flags (format "0x%x" flags)
;;                        :lead-index lead-index
;;                        :slot slot
;;                        :special-flags special-flags
;;                        :first-position-data-offset first-position-data-offset
;;                        :first-event-data-offset first-event-data-offset)))))))
;;   )
;; ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

;; (s/valid? id "a")
;; (require '[clojure.spec.gen :as sgen])

;; (-> acmi/id sgen/generate sgen/sample)

;; (sgen/sample (sgen/fmap (fn [digits] (apply str digits))
;;                         (sgen/vector (sgen/elements [1 2 3]) 1 20)))

;; (map #(s/valid? acmi/id %)
;;      (sgen/sample (sgen/fmap (fn [digits] (apply str digits))
;;                              (sgen/vector (sgen/elements acmi/id-digits)
;;                                           1 16))))


;; ;; Bug repro
;; (def id-digits #{\0 \1 \2 \3 \4 \5 \6 \7 \8 \9
;;                  \A \B \C \D \E \F
;;                  \a \b \c \d \e \f})
;; (def id (s/with-gen
;;           (s/and string?
;;                  not-empty
;;                  (fn [s]
;;                    (every? id-digits s)))
;;           #(sgen/fmap (fn [digits] (apply str digits))
;;                       (sgen/vector (sgen/elements id-digits)
;;                                    1 16))))

;; (-> acmi/id s/gen sgen/sample)

;; (-> acmi/file s/gen sgen/generate pprint)

;; (def b (lsobot.acmi/read-acmi "TAPE0012.txt.acmi"))

;; (s/valid? acmi/file b)
;; (s/explain acmi/file b)

;; (-> b ::acmi/frames rand-nth second ::acmi/entities (get "1")
;;     clojure.pprint/pprint)

;; (let [data (-> b ::acmi/frames rand-nth second ::acmi/entities (get "1")
;;                (select-keys [::acmi/u ::acmi/v ::acmi/yaw ::acmi/pitch ::acmi/roll]))]
;;   (-> data
;;       (assoc :x (m->ft (::acmi/v data))
;;              :y (m->ft (::acmi/u data))
;;              :yaw (deg->rad (::acmi/yaw data))
;;              :pitch (deg->rad (::acmi/pitch data))
;;              :roll (deg->rad (::acmi/roll data)))
;;       clojure.pprint/pprint))


;; (require '[lsobot.acmi :as acmi])
;; (require '[lsobot.grading :as grading])
;; (->> "TAPE0008.txt.acmi" acmi/read-acmi (def a8))

;; (let [[t frame] (-> a8 ::acmi/frames rand-nth)
;;       carrier (-> frame ::acmi/entities (get "3bbb115200000004"))
;;       me (-> frame ::acmi/entities (get "3bbb115200000001"))]
;;   (pprint {:t t
;;            :carrier (select-keys carrier [::acmi/u ::acmi/v ::acmi/alt])
;;            :me (select-keys me [::acmi/u ::acmi/v ::acmi/alt])}))

;; (defn distance-between
;;   [file id1 id2 t]
;;   (let [obj1 (acmi/entity-at file id1 t)
;;         obj2 (acmi/entity-at file id2 t)
;;         u1 (::acmi/u obj1)
;;         u2 (::acmi/u obj2)
;;         v1 (::acmi/v obj1)
;;         v2 (::acmi/v obj2)]
;;     (Math/sqrt (+ (Math/pow (- u2 u1) 2)
;;                   (Math/pow (- v2 v1) 2)))))

;; (acmi/entity-at a8 "3bbb115200000001" 40000)

;; (distance-between a8 "3bbb115200000004" "3bbb115200000001" 40000)

;; (-> a8 ::acmi/frames (nth (acmi/frame-at a8 1.0)) first)

;; (let [file {::acmi/frames [[1 :blah]
;;                            [2.1 :blah]
;;                            [3.25 :blah]
;;                            [4.5 :blah]]}]
;;   (nth (::acmi/frames file) (acmi/frame-at file 2.1)))

;; (acmi/frame-at a8 30796.8)

;; ;; Carrier: "3bbb115200000004"
;; ;; Me: "3bbb115200000001"


;; (let [[t frame] (-> a8 ::acmi/frames rand-nth)
;;       carrier (-> frame ::acmi/entities (get "3bbb115200000004"))
;;       me (-> frame ::acmi/entities (get "3bbb115200000001"))]
;;   (println :t t
;;            :alt (::acmi/alt me)
;;            :c-heading (::acmi/heading carrier)
;;            :c-yaw (::acmi/yaw carrier)
;;            :m-heading (::acmi/heading me)
;;            :m-yaw (::acmi/yaw me)))

;; (defn frame-index-at
;;   "Returns index of the closest frame at or after the specified time."
;;   [file t]
;;   (let [frames (::acmi/frames file)]
;;     (loop [low 0
;;            high (dec (count frames))]
;;       (let [idx (-> low (+ high) (/ 2) int)
;;             [t0] (nth frames idx)]
;;         (cond
;;           (= t0 t) idx
;;           (= low (dec high)) (inc idx)
;;           (< t0 t) (recur idx high)
;;           :else (recur low idx))))))

;; (frame-index-at a8 40000)

;; (-> a8 ::acmi/frames rand-nth first)

;; (-> a8 ::acmi/frames (nth 845) first)

;; (let [frames (::acmi/frames a8)
;;       n (rand-int (count frames))
;;       [t-frame] (nth frames n)
;;       t-search (- t-frame 0.5)
;;       found-index (frame-index-at a8 (- t-frame 0.5))]
;;   {:n n
;;    :t-frame t-frame
;;    :t-search t-search
;;    :found found-index
;;    :found-t (first (nth frames found-index))
;;    :prior-t (first (nth frames (dec found-index)))})

;; (grading/passes a8)
;; (grading/find-passes a8 "3bbb115200000004" "3bbb115200000001")

;; (-> a8 ::acmi/frames last first)

;; (let [t 30970
;;       carrier (acmi/entity-at a8 "3bbb115200000004" t)
;;       pilot (acmi/entity-at a8 "3bbb115200000001" t)]
;;   (pprint {:t t
;;            :slope (grading/slope carrier pilot)
;;            :distance (grading/distance carrier pilot)
;;            :bearing (grading/bearing pilot carrier)
;;            :deviation (grading/approach-course-deviation carrier pilot)
;;            :heading (::acmi/yaw carrier)
;;            :location {:carrier [(::acmi/v carrier) (::acmi/u carrier)]
;;                       :pilot [(::acmi/v pilot) (::acmi/u pilot)]}
;;            :alt (::acmi/alt pilot)
;;            :on-approach? (grading/on-approach? carrier pilot)}))

(def a25 (-> "/tmp/Multiple Pass ACMI and VHS/25 passes 4 AC.txt.acmi" slurp acmi/read-acmi))

(def p25 (grading/passes a25))

;; (-> a25 ::acmi/frames second first)

(-> a25 (acmi/frame-at (+ 31690.29 (+ (* 30 60) 25))) acmi/entities)

(def carrier-id "757b9fef00000004")
(def pilot-id "757b9fef00000001") ; Flounder

(let [[m s] [36 20]
      frame (-> a25 (acmi/frame-at (+ 31690.29 (+ (* m 60) s))))
      carrier-id "757b9fef00000004"
      pilot-id "757b9fef00000001"
      carrier (acmi/entity frame carrier-id)
      pilot (acmi/entity frame pilot-id)]
  {:slope (grading/slope carrier pilot)
   :d (grading/distance carrier pilot)
   :c (grading/approach-course-deviation carrier pilot)})


(def fp8 (grading/find-passes
          a8
          "3bbb115200000004"
          "3bbb115200000001"
          {:min-time      10                     ; Seconds
           :max-slope     10                     ; Degrees
           :max-angle     10                     ; Degrees
           :max-dist      1                      ; Miles
           :recovery-skew 10                     ; Degrees
           :landing-point [0 -400 70]   ; x,y,z position relative to
                                        ; carrier zero where landing
                                        ; should aim
           }))

(def p8 (grading/passes a8
                        {:min-time      10 ; Seconds
                         :max-slope     10 ; Degrees
                         :max-angle     10 ; Degrees
                         :max-dist      1  ; Miles
                         :recovery-skew 10 ; Degrees
                         :landing-point [0 -400 70] ; x,y,z position relative to
                                        ; carrier zero where landing
                                        ; should aim
                         }))

(let [[pass & more-passes] fp8
      [frame & more-frames :as frames] pass
      [t data] frame]
  ;;(keys data)
  (count frames)
  )


(for [[carrier-id x] (grading/passes a8
                        {:min-time      10 ; Seconds
                         :max-slope     10 ; Degrees
                         :max-angle     10 ; Degrees
                         :max-dist      1  ; Miles
                         :min-dist 0.4
                         :coda 10
                         :recovery-skew 10 ; Degrees
                         :landing-point [0 -400 70] ; x,y,z position relative to
                                        ; carrier zero where landing
                                        ; should aim
                         })
      [pilot-id y] x
      pass-frames y]
  {:carrier-id carrier-id
   :pilot-id pilot-id
   :frames (count pass-frames)
   :last-t (-> pass-frames last first)
                                        ;:last-distance (-> pass-frames last second ::grading/distance)
   })

(as-> a8 ?
  (acmi/frame-at ? 30965)
  (grading/characterize-frame
   "3bbb115200000004"
   "3bbb115200000001"
   {:min-time      10                   ; Seconds
    :max-slope     10                   ; Degrees
    :max-angle     10                   ; Degrees
    :max-dist      1                    ; Miles
    :min-dist 0.4
    :coda 10
    :recovery-skew 10                   ; Degrees
    :landing-point [0 -400 70]          ; x,y,z position relative to
                                        ; carrier zero where landing
                                        ; should aim
    }
   ?)
  (dissoc ? :pass-frame)
  (pprint ?))

(def )

(let [a5 (-> "/tmp/TAPE0005.txt.acmi" slurp acmi/read-acmi)
      pilot-id "ce64830b00000001"
      carrier-id "ce64830b0000000d"
      frame (-> a5 :lsobot.acmi/frames last)
      pilot (acmi/entity frame pilot-id)
      carrier (acmi/entity frame carrier-id)
      ploc (map units/m->ft
                [(:lsobot.acmi/u pilot)
                 (:lsobot.acmi/v pilot)
                 (:lsobot.acmi/alt pilot)])
      cloc (map units/m->ft
                [(:lsobot.acmi/u carrier)
                 (:lsobot.acmi/v carrier)
                 0])]
  #_(pprint { ;; :pilot pilot
             ;; :carrier carrier
             :ploc ploc
             :cloc cloc
             :lp (map - ploc cloc)})
  (-> (grading/characterize-frame carrier-id
                                  pilot-id
                                  grading/default-parameters
                                  frame)

      pprint))

(pprint
 (grading/characterize-frame
  "carrier"
  "pilot"
  {:min-time      10  ; Seconds
   :max-slope     10  ; Degrees
   :max-angle     10  ; Degrees
   :min-dist      0.4 ; Pass has to start at least this far
                      ; away (nm). Prevents things like detecting a
                      ; pass starting on the deck.
   :max-dist      1      ; Pass starts no farther away than this (nm).
   :recovery-skew 0      ; Degrees to the left the deck of the carrier
                         ; differs from the heading of the carrier
   :coda          5      ; Seconds of data to keep after approach ends
   :landing-point [0 0 0]      ; x,y,z position in carrier coordinates
                               ; zero where landing should aim. Feet.
   }
  [0 {::acmi/entities
      {"carrier" {::acmi/u 0
                  ::acmi/v 0
                  ::acmi/yaw 235}
       "pilot" {::acmi/u (units/ft->m 0)
                ::acmi/v (units/ft->m -5000)
                ::acmi/alt (units/ft->m 100)}}}]))

(def a8 (-> "TAPE0008.txt.acmi" slurp acmi/read-acmi))
(def p8 (grading/passes a8 grading/default-parameters))

(let [path "/tmp/LSOBot Test Passes 8-11-16.txt.acmi"
      file (-> path slurp acmi/read-acmi)
      carrier-id (first (user/carriers file))
      _ (println carrier-id)]
 (->> file
      ::acmi/frames
      (map #(acmi/entity % carrier-id))
      (map (juxt ::acmi/yaw ::acmi/heading))
      ;;count
      ;;(drop 1000)
      ;;(take 10)
      ;;(map (fn [[a b]] (when (and a b) (- a b))))
      ;;(remove nil?)
      distinct
      ;;count
      ))


(let [a5 (-> "/tmp/TAPE0005.txt.acmi" slurp acmi/read-acmi)
      pilot-id "ce64830b00000001"
      carrier-id "ce64830b0000000d"
      frame (-> a5 :lsobot.acmi/frames last)
      pilot (acmi/entity frame pilot-id)
      carrier (acmi/entity frame carrier-id)
      ploc (map units/m->ft
                [(:lsobot.acmi/u pilot)
                 (:lsobot.acmi/v pilot)
                 (:lsobot.acmi/alt pilot)])
      cloc (map units/m->ft
                [(:lsobot.acmi/u carrier)
                 (:lsobot.acmi/v carrier)
                 0])]
  #_(pprint { ;; :pilot pilot
             ;; :carrier carrier
             :ploc ploc
             :cloc cloc
             :lp (map - ploc cloc)})
  (-> (grading/characterize-frame carrier-id
                                  pilot-id
                                  grading/default-parameters
                                  frame)

      pprint))


(def fp8 (grading/find-passes
          a8
          "3bbb115200000004"
          "3bbb115200000001"
          grading/default-parameters))

(->> fp8
     first
     (map second)
     (map ::grading/pilot)
     (map ::acmi/throttle)
     distinct
     )

(let [path "/tmp/LSOBot Test Passes 8-11-16.txt.acmi"
      file (-> path slurp acmi/read-acmi)
      passes (grading/passes file grading/default-parameters)
      carrier-id (-> passes keys rand-nth)
      pilot-id (-> passes (get carrier-id) keys rand-nth)
      pilot-pass (-> passes (get-in [carrier-id pilot-id]) rand-nth)
      [t data] (rand-nth pilot-pass)]
  (println :carrier-id carrier-id :pilot-id pilot-id :t t)
  (-> data ::grading/pilot class #_ ::acmi/throttle)
  )

(let [angular-exaggeration 4
      x1 (units/deg->rad 2)
      x2 (units/deg->rad 10)]
 (defn exaggerate-angle
   "Make small angles bigger."
   ([rad]
    (cond
      (< (Math/abs rad) x1) (* angular-exaggeration rad)
      (< (Math/abs rad) x2) (-> rad
                                (- x1)
                                (/ angular-exaggeration)
                                (+ (* angular-exaggeration x1)))
      :else rad))
   ([x y]
    (let [r (Math/sqrt (+ (* x x) (* y y)))
          ax (Math/abs x)
          ay (Math/abs y)
          theta (Math/atan2 ay ax)
          theta' (exaggerate-angle theta)
          x' (* r (Math/cos theta'))
          y' (* r (Math/sin theta'))]
      ;; Sign of coordinates should match original signs
      [(* x' (/ x ax))
       (* y' (/ y ay))]))))


(let [path "acmi/25 passes 4 AC.2.txt.acmi"
      file (-> path slurp acmi/read-acmi)
      passes (grading/passes file grading/default-parameters)]
  (for [[carrier-id pilot-passes] passes
        [pilot-id assessments] pilot-passes
        assessment assessments]
    (printf "Carrier: %s, Pilot: %s, Time: %s, Result: %s\n"
            (-> file ::acmi/frames last (acmi/entity carrier-id) ::acmi/name)
            (-> file ::acmi/frames last (acmi/entity pilot-id) ::acmi/pilot)
            (->> assessment
                 ::grading/frames
                 first
                 ::acmi/t
                 (time-str nil))
            (::grading/result assessment))))

(let [path "acmi/Ramp Strike.txt.acmi"
      file (-> path slurp acmi/read-acmi)
      passes (grading/passes file grading/default-parameters)
      assessment (get-in passes ["2818779800000010" "2818779800000001" 2])]
  #_(->> assessment
       ::grading/frames
       (mapcat ::acmi/events))
  (-> assessment
      ::grading/frames
      last
      (acmi/entity "2818779800000010")
      ::acmi/name))

(let [path "acmi/25 passes 4 AC.2.txt.acmi"
      file (-> path slurp acmi/read-acmi)
      passes (grading/passes file grading/default-parameters)
      dist (-> grading/default-parameters
               :zones
               :start
               :distance)]
  (->> (for [[carrier-id pilot-passes] passes
             [pilot-id assessments] pilot-passes
             assessment assessments]
         (->> assessment
              ::grading/frames
              (filterv #(< (::grading/downrange %) dist))
              first))
       first
       ::grading/aoa
       ::grading/deviation))

(report "acmi/25 passes 4 AC.2.txt.acmi")

(hook-pos
 grading/default-parameters
 {::grading/pilot {::acmi/pitch -20}
  ::grading/crosstrack-error 0
  ::grading/downrange 0
  ::grading/height 0})

(let [path "acmi/Training Trap5.txt.acmi"
      file (-> path slurp acmi/read-acmi)
      passes (grading/passes file grading/default-parameters)]
  (for [[carrier-id pilot-passes] passes
        [pilot-id assessments] pilot-passes
        assessment assessments
        :when (-> assessment ::grading/pilot ::acmi/pilot (= "Flounder"))]
    {:start (::grading/start assessment)
     :t (->> assessment ::grading/frames first ::acmi/t (time-str nil))}))



(let [path "acmi/25 passes 4 AC.2.txt.acmi"
      file (-> path slurp acmi/read-acmi)
      passes (grading/passes file grading/default-parameters)
      dist (-> grading/default-parameters
               :zones
               :start
               :distance)]
  (->> (for [[carrier-id pilot-passes] passes
             [pilot-id assessments] pilot-passes
             assessment assessments
             frame (::grading/frames assessment)]
         (keys (::grading/pilot frame)))
       rand-nth
       pprint))


(let [path "acmi/Training Trap5.txt.acmi"
      flounder "2c32d33300000001"
      vinson "2c32d33300000008"
      file (-> path slurp acmi/read-acmi)
      passes (grading/find-passes file vinson flounder grading/default-parameters)]
  (-> (for [assessment passes]
        {:assessment (select-keys assessment [::grading/start
                                              ::grading/mid
                                              ::grading/result
                                              ::grading/wire])
         :t (->> assessment ::grading/frames first ::acmi/t (time-str nil))})
      (nth 0)
      pprint))


(let [path "acmi/Training Trap5.txt.acmi"
      flounder "2c32d33300000001"
      vinson "2c32d33300000008"
      file (-> path slurp acmi/read-acmi)
      passes (grading/find-passes file vinson flounder grading/default-parameters)]
  (as-> passes ?
    (first ?)
    (grading/assess-pass grading/default-parameters flounder ?)
    (dissoc ? ::grading/frames)
    (pprint ?)))

(let [path "acmi/Training Trap5.txt.acmi"
      flounder "2c32d33300000001"
      sting21 "2c32d33300000009"
      sting22 "2c32d3330000000a"
      pilot sting21
      vinson "2c32d33300000008"
      file (-> path slurp acmi/read-acmi)
      passes (grading/find-passes file vinson pilot grading/default-parameters)]
  (as-> passes ?
    (nth ? 1)
    (grading/augment-frames grading/default-parameters pilot ?)
    (grading/assess-pass grading/default-parameters pilot ?)
    (dissoc ? ::grading/frames)
    (pprint ?)))

(let [path "acmi/Training Trap5.txt.acmi"
      flounder "2c32d33300000001"
      sting21 "2c32d33300000009"
      sting22 "2c32d3330000000a"
      pilot sting21
      vinson "2c32d33300000008"
      file (-> path slurp acmi/read-acmi)
      passes (grading/find-passes file vinson pilot grading/default-parameters)]
  (as-> passes ?
    (nth ? 1)
    (grading/augment-frames grading/default-parameters pilot ?)
    (grading/assess-pass grading/default-parameters pilot ?)
    (dissoc ? ::grading/frames)
    (pprint ?)))

(let [path "acmi/Training Trap5.txt.acmi"
      file (-> path slurp acmi/read-acmi)]
  {:pilots (grading/pilots file)
   :carriers (grading/carriers file)})

(let [path "acmi/Training Trap5.txt.acmi"
      file (-> path slurp acmi/read-acmi)]
  (count (grading/passes file grading/default-parameters)))

(let [path "acmi/Training Trap5.txt.acmi"
      file (-> path slurp acmi/read-acmi)]
  (count (grading/passes file grading/default-parameters)))

(let [path "acmi/Training Trap5.txt.acmi"
      flounder "2c32d33300000001"
      sting21 "2c32d33300000009"
      sting22 "2c32d3330000000a"
      pilot sting21
      vinson "2c32d33300000008"
      file (-> path slurp acmi/read-acmi)]
  (->> file
       ::acmi/frames
       (mapcat ::acmi/events)
       pprint))

(let [path "acmi/Carl Vinson 4-Wire.txt.acmi"
      flounder "2c32d33300000001"
      sting21 "2c32d33300000009"
      sting22 "2c32d3330000000a"
      pilot sting21
      vinson "2c32d33300000008"
      file (-> path slurp acmi/read-acmi)]
  (->> file
       ::acmi/frames
       (def w4)))

(let [flounder   "c78a93fb00000001"
      vinson   "c78a93fb0000000b"
      f (-> w4
            last
            (assoc-in [flounder ::acmi/alt] 22.58))]
  #_(pprint f)
  (-> (grading/characterize-frame
       vinson
       flounder
       grading/default-parameters
       f)
      :pass-frame
      (select-keys [::grading/downrange ::grading/crosstrack-error ::grading/height ::grading/hook-pos])))




(let [carrier-id  "284f42c50000000b"    ; Carrier
      pilot-id "284f42c500000001"]
  (grading/characterize-frame
   carrier-id
   pilot-id
   grading/default-parameters
   (last w4))) ; flounder

;;

(def ty (-> "acmi/Tyrant-2016-09-05.txt.acmi"
            slurp
            acmi/read-acmi))

;; Altitude at end 22.58 meters. That's 74.08 feet. Which yields the
;; hook (and therefore the deck) at 67.2 feet.

(let [carrier-id   "3b931e1f00000007"
      pilot-id   "3b931e1f00000001"
      ])

(defn data
  [path pilot]
  (let [acmi (-> path slurp acmi/read-acmi)
        frame (-> acmi ::acmi/frames last)
        pilot-id (->> frame
                      ::acmi/entities
                      (filter (fn [[id props]]
                                (= pilot (::acmi/pilot props))))
                      first
                      first)
        carrier-id (->> frame
                        ::acmi/entities
                        (filter (fn [[id props]]
                                  (-> props
                                      ::acmi/object-type
                                      (get "AircraftCarrier"))))
                        first
                        first)
        frame'     (-> (grading/characterize-frame carrier-id
                                                   pilot-id
                                                   grading/default-parameters
                                                   frame)
                       :pass-frame)
        frame''     (-> frame'
                        (assoc ::grading/pilot
                               (acmi/entity frame pilot-id))
                        (assoc-in [::grading/pilot ::acmi/pitch] 0))]
    (-> frame''
        (assoc ::grading/hook-pos
               (grading/hook-pos
                grading/default-parameters
                frame''))
        (select-keys [::grading/hook-pos
                      ::grading/downrange
                      ::grading/crosstrack-error
                      ::grading/height]))

    ))

(data "acmi/Tyrant-4-wire.txt.acmi" "Tyrant")

(data "acmi/Carl Vinson 4-Wire.txt.acmi" "Flounder")

;; Descent: 15.8 ft/sec
;; Advance: 233.8 ft/sec
;; Height: 1.434 last aloft
;; Time to contact: 0.09 sec
;; Advance in that time: 21.042 ft
;; Downrange at last aloft: -12.6
;; Hook contact point: -33.642. Four-wire.

;; If we want the contact point to be at -20 feet:

(-> (- 20 12.6)                         ; Horizontal feet to touchdown
    (/ 233.8)                            ; Seconds to touchdown (0.3165)
    (* 15.8)                            ; Vertical feet in that time (0.5)
    (- 1.434)                           ; Last height aloft
    -
    (+ 67.22)) ; => 68.15

;; With a glideslope of 3.3 degrees, how far downrange do I go for each foot of height?
(->> 3.3
     units/deg->rad
     Math/tan
     (/ 1))

;; 17.34 feet

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

;; Why are there discontinuities in lineup?

(let [acmi (-> "acmi/Flounder Shady Test Passes.txt.acmi" slurp acmi/read-acmi)
      carrier "c2011f8100000011"
      pilot "c2011f8100000001"
      t1 60688.53
      t2 60688.85
      f1 (acmi/frame-at acmi t1)
      f2 (acmi/frame-at acmi t2)
      c1 (grading/characterize-frame carrier pilot grading/default-parameters f1)
      c2 (grading/characterize-frame carrier pilot grading/default-parameters f2)
      [ct1 dr1 h1] (-> c1 :pass-frame ::grading/hook-pos)
      [ct2 dr2 h2] (-> c2 :pass-frame ::grading/hook-pos)
      r1 (Math/sqrt (+ (* dr1 dr1) (* ct1 ct1)))
      r2 (Math/sqrt (+ (* dr2 dr2) (* ct2 ct2)))
      theta1 (Math/atan2 (Math/abs ct1) (Math/abs dr1))
      theta2 (Math/atan2 (Math/abs ct2) (Math/abs dr2))
      ]
  (pprint [{:t t1
            :coords [dr1 ct1]
            :coords* (exaggerate-angle dr1 ct1)
            :r r1
            :theta (units/rad->deg theta1)
            }
           {:t t2
            :coords [dr2 ct2]
            :coords* (exaggerate-angle dr2 ct2)
            :r r2
            :theta (units/rad->deg theta2)}]))

(let [acmi (-> "acmi/Flounder Shady Test Passes.txt.acmi" slurp acmi/read-acmi)
      carrier "c2011f8100000011"
      pilot "c2011f8100000001"
      pass-frames (-> (grading/find-passes
                       acmi
                       carrier
                       pilot
                       grading/default-parameters)
                      (nth 1))]
  (-> (grading/assess-pass grading/default-parameters pilot
                           pass-frames)
      (dissoc ::acmi/entities)
      (dissoc ::grading/frames)
      pprint))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(defn sort-passes
  [unsorted-passes sort-criteria]
  (sort (comparator (fn [a b]
                      (loop [[[k dir] & more] sort-criteria]
                        (if-not k
                          false
                          (let [comparison (* (compare (get a k)
                                                       (get b k))
                                      (if (= dir :ascending)
                                        1
                                        -1))]
                            (cond
                              (neg? comparison) true
                              (pos? comparison) false
                              :else (recur more)))))))
        unsorted-passes))

(pprint
 (sort-passes [{:carrier "a" :pilot "a" :start 1}
               {:carrier "a" :pilot "a" :start 2}
               {:carrier "a" :pilot "b" :start 1}
               {:carrier "a" :pilot "b" :start 2}
               {:carrier "b" :pilot "a" :start 1}
               {:carrier "b" :pilot "a" :start 2}
               {:carrier "b" :pilot "b" :start 1}
               {:carrier "b" :pilot "b" :start 2}]
              [[:pilot :descending]
               [:start :ascending]
               [:carrier :descending]]))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(def a (-> "acmi/TAPE0012-1.txt.acmi" slurp acmi/read-acmi))

(def p
  (grading/find-passes
   a
   "b770a8680000000a"      ;; Carrier
   "b770a86800000008"      ;; AV8R
   grading/default-parameters))

(def ps (grading/passes a grading/default-parameters))

(def f (acmi/frame-at a 36850.6))

(pprint (acmi/entity f "b770a86800000008"))

(pprint (dissoc (grading/characterize-frame
                 "b770a8680000000a"   ;; Carrier
                 "b770a86800000008"   ;; AV8R
                 grading/default-parameters
                 f)
                :pass-frame))

(units/s->dhms 36850.6)

(-> ps (get "b770a8680000000a") (get "b770a86800000008") second ::grading/grade grading/grades :score)

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(->> "/tmp/TAPE0011.txt.acmi"
     slurp
     acmi/read-acmi
     (def a))

(->> a
     ::acmi/frames
     count)

(def carriers
  (->> a
       grading/carriers))

(def pilots
  (->> a
       grading/pilots))

(def enterprise
  (first carriers))

(def shady
  (second pilots))

(map #(-> a ::acmi/frames last (acmi/entity %)) carriers)

(->> a
     ::acmi/frames
     last
     acmi/entities
     (map (fn [[id props]] (::acmi/object-type props))))

(let [a          (->> "/tmp/TAPE0011.txt.acmi"
                      slurp
                      acmi/read-acmi)
      carriers   (->> a
                      grading/carriers)
      pilots     (->> a
                      grading/pilots)
      enterprise (first carriers)
      shady      (second pilots)]
  (-> a
       ::acmi/frames
       last
       (acmi/entity enterprise)
       )
  #_(grading/find-passes a enterprise shady grading/default-parameters))
