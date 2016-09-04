(ns lsobot.svg-fix
  "A namespace to fix broken attributes related to SVG."
  (:require [hoplon.core :refer [do!]]
            [hoplon.svg]))

(defn fix-svg!
  "Fix Hoplon SVG rendering."
  []
  (defmethod do! :viewBox
    [elem _ value]
    (if (= false value)
      (.removeAttribute elem "viewBox")
      (.setAttribute elem "viewBox" value)))

  (defmethod do! :preserveAspectRatio
    [elem _ value]
    (if (= false value)
      (.removeAttribute elem "preserveAspectRatio")
      (.setAttribute elem "preserveAspectRatio" value))))
