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
            [clojure.pprint :refer [pprint]]))

(def a8 (-> "TAPE0008.txt.acmi" slurp acmi/read-acmi))

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
