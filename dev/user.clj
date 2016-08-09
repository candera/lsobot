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
