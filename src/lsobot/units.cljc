(ns lsobot.units
  "Converstion between different unit systems.")

(def ft-per-m 3.28084)

(defn m->ft
  [m]
  (* m ft-per-m))

(defn ft->m
  [ft]
  (/ ft ft-per-m))

(defn nm->ft
  [nm]
  (* nm 6076.12))

(def deg-per-rad (/ 180.0 Math/PI))

(defn rad->deg
  [rad]
  (* rad deg-per-rad))

(defn deg->rad
  [deg]
  (/ deg deg-per-rad))

(defn kts->m-per-sec
  [kts]
  (* kts 0.514444))
