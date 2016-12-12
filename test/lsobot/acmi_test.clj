(ns lsobot.acmi-test
  (:require [lsobot.acmi :as acmi]
            [clojure.test :as t :refer :all]))

(deftest char-split
  (are [x y] (= (acmi/char-split x \|) y)
    "" [""]
    "|" ["" ""]
    "a" ["a"]
    "a|" ["a" ""]
    "a|b|c||" ["a" "b" "c" "" ""]))

(deftest parse-coordinates-bug
  (is (= [:entity-info {"1234"
                        {::acmi/pitch 0.2
                         ::acmi/removed? false}}]
         (acmi/parse-line "1234,T=||||0.2|"))))
