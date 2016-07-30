(ns lsobot.spec
  "Wrapper library for Clojure spec, to help with cross-platform concerns"
  (:refer-clojure :exclude [and or keys cat]))

(defmacro defnops [& names]
  `(do
     ~@(for [name names]
         (list 'defmacro name '[& body]))))

(defnops def with-gen and keys map-of spec cat fdef or)

