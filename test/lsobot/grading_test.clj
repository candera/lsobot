(ns lsobot.grading-test
  (:require [clojure.java.io :as io]
            [clojure.test :refer :all]
            [lsobot.acmi :as acmi]
            [lsobot.grading :as grading]
            [lsobot.units :as units]
            [taoensso.timbre :as log]))

(defn carrier-name
  [acmi carrier-id]
  (-> acmi ::acmi/frames last (acmi/entity carrier-id) ::acmi/name))

(defn pilot-name
  [acmi pilot-id]
  (-> acmi ::acmi/frames last (acmi/entity pilot-id) ::acmi/pilot))

(defn get-assessment
  ([acmi pilot start] (get-assessment acmi nil pilot start))
  ([acmi carrier pilot start]
   (let [pass-map (grading/passes acmi grading/default-parameters)]
     (first (for [[carrier-id pilot-passes] pass-map
                  [pilot-id assessments]    pilot-passes
                  assessment assessments
                  :let [pass-start (-> assessment
                                       ::grading/frames
                                       first
                                       ::acmi/t
                                       units/time->str)]
                  :when (and (or (nil? carrier)
                                 (= carrier (carrier-name acmi carrier-id)))
                             (= pilot (pilot-name acmi pilot-id))
                             (= start pass-start))]
              assessment)))))

(defn load-acmi
  [file]
  (-> file
      io/resource
      slurp
      acmi/read-acmi))

(deftest ramp-strike
  (let [ramp-strike (load-acmi "acmi/Ramp Strike.txt.acmi")]
    (testing "Ramp strikes are correctly detected."
      (is (= ::grading/cut-pass
             (-> ramp-strike
                 (get-assessment nil
                                 "Flounder"
                                 "01/08:46:08")
                 ::grading/grade))))))

(deftest OK
  (let [ramp-strike (load-acmi "acmi/Ramp Strike.txt.acmi")]
    (testing "The AI gets an OK grade for a good pass."
      (is (= ::grading/ok
             (-> ramp-strike
                 (get-assessment nil
                                 "Hornet13"
                                 "01/08:45:38")
                 ::grading/grade))))))

(deftest waveoff
  (let [ramp-strike (load-acmi "acmi/Ramp Strike.txt.acmi")]
    (testing "Waveoff is assessed correctly"
      (is (= ::grading/waveoff
             (-> ramp-strike
                 (get-assessment nil
                                 "Flounder"
                                 "01/08:39:22")
                 ::grading/grade))))))
