(ns lsobot.macros
  "Macros for the CLJS part of the application.")

(defmacro formula-of
  "Emits a form that will produce a cell using the formula over the
  specified input cells. Avoids some of the code-walking problems of
  the Hoplon macros."
  [cells & body]
  `((javelin.core/formula
     (fn ~cells
       ~@body))
    ~@cells))

(defmacro defformula
  [name cells & body]
  `(def ~name (formula-of ~cells ~@body)))

