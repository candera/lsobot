(ns user
  (:require ;;[adzerk.boot-test :refer [test]]
            [clojure.tools.namespace.repl :refer [refresh]]
            [clojure.spec :as s]
            [clojure.spec.gen :as sgen]
            [clojure.spec.test :as stest]
            [lsobot.acmi :as acmi]
            [lsobot.grading :as grading]
            [lsobot.units :as units]
            [clojure.repl :refer :all]
            [clojure.pprint :refer [pprint]]
            [taoensso.timbre :as log]))

(def a8 (-> "acmi/TAPE0008.txt.acmi" slurp acmi/read-acmi))

(defn carriers
  [file]
  (->> file
       ::acmi/frames
       last
       acmi/entities
       (filter (fn [[id properties]]
                 (-> properties
                     ::acmi/object-type
                     (get "AircraftCarrier"))))
       (map first)))


(defn time-str
  [acmi t]
  ;; For now we're just going to assume the reference time is midnight
  (let [s (long (mod t 60))
        t (long (/ t 60))
        m (mod t 60)
        t (long (/ t 60))
        h (mod t 24)
        d (long (/ t 24))]
    (format "%02d/%02d:%02d:%02d" (inc d) h m s)))

(def symbol-mapping
  {:aoa {:low "F"
         :high "S"}
   :glideslope {:low "LO"
                :high "H"}
   :lineup {:low "LUR"
            :high "LUL"}})

(defn assessment-symbol
  [dimension deviation]
  (assert (some? dimension))
  (assert (some? deviation))
  (let [{:keys [::grading/degree ::grading/direction]} deviation]
    (if-not direction
      ""
      (let [mark (-> symbol-mapping dimension direction)]
        (case degree
          :ideal ""
          :good ""
          :minor (str "(" mark ")")
          :major mark
          :unacceptable (str "_" mark "_"))))))

(defn symbolize
  [comments]
  (let [{:keys [::grading/aoa-deviations
                ::grading/glideslope-deviations
                ::lineup-deviations]} comments]
    (->> [(mapv #(assessment-symbol :aoa %) aoa-deviations)
          (mapv #(assessment-symbol :glideslope %) glideslope-deviations)
          (mapv #(assessment-symbol :lineup %) lineup-deviations)]
         (reduce into)
         (remove empty?)
         (interpose " ")
         (apply str))))

(defn report
  "Prints a table showing the assessment of the given file."
  [path]
  (let [file (-> path slurp acmi/read-acmi)
        passes (grading/passes file grading/default-parameters)
        columns [{:width 10
                  :label "Carrier"
                  :data (fn [c p a]
                          (-> file
                              ::acmi/frames
                              last
                              (acmi/entity c)
                              ::acmi/name))}
                 {:width 10
                  :label "Pilot"
                  :data (fn [c p a]
                          (-> file
                              ::acmi/frames
                              last
                              (acmi/entity p)
                              ::acmi/pilot))}
                 {:width 13
                  :label "Time"
                  :data (fn [c p a]
                          (->> a
                               ::grading/frames
                               first
                               ::acmi/t
                               (time-str nil)))}
                 {:width 10
                  :label "Result"
                  :data (fn [_ _ a] (::grading/result a))}
                 {:width 10
                  :label "X"
                  :data (fn [_ _ a] (symbolize (::grading/start a)))}]
        format-str (str (->> columns
                             (map #(str "%" (:width %) "s "))
                             (apply str))
                        "\n")]
    (apply printf format-str (map :label columns))
    (doseq [[carrier-id pilot-passes] passes
            [pilot-id assessments] pilot-passes
            assessment assessments]
      (apply printf
             format-str
             (->> columns
                  (map :data)
                  (map #(% carrier-id pilot-id assessment)))))))

(log/merge-config! {:enabled? true})
