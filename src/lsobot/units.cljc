(ns lsobot.units
  "Converstion between different unit systems.")

(defn m->ft
  [m]
  (* m 3.28084))

(defn nm->ft
  [nm]
  (* nm 6076.12))

(defn rad->deg
  [rad]
  (-> rad (* 180.0) (/ Math/PI)))
