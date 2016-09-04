(ns lsobot.help
  (:require [hoplon.core :refer [p div dl dt dd em do!]]
            [hoplon.svg :as svg]
            [lsobot.grading :as grading]
            [lsobot.svg-fix :as svg-fix]))

(svg-fix/fix-svg!)

(defn circle
  [class]
  (svg/svg
   :attr {:class "help-circle"}
   :viewBox "-6 -6 52 52"
   (svg/circle
    :attr {:class (str "approach-path " class)}
    :cx 20
    :cy 20
    :r 20)))

(defn color-table
  [dimension]
  (dl
   (dt (circle "ideal") "Green with white outline")
   (dd (str "Perfect - exactly on ideal " dimension "."))
   (dt (circle "good") "Green with no outline")
   (dd (str "Good - within desired variance of ideal " dimension "."))
   (dt (circle "minor") "Yellow")
   (dd (str "Minor variation from ideal " dimension "."))
   (dt (circle "major") "Orange")
   (dd (str "Major variation from ideal glideslope" dimension "."))
   (dt (circle "unacceptable") "Red")
   (dd (str "Unacceptable variation from ideal " dimension "."))
   (dt (circle "") "White")
   (dd "Not assessed.")))

(def content
  {:scoresheet
   [(p "Displays the scores. Abbreviations:")
    (dl
     (dt :css {:text-decoration "underline"} "OK")
     (dd (-> grading/grades ::grading/ok+ :description))
     (dt "OK")
     (dd (-> grading/grades ::grading/ok :description))
     (dt "(OK)")
     (dd "Fair. " (-> grading/grades ::grading/fair :description))
     (dt "B")
     (dd "Bolter. " (-> grading/grades ::grading/bolter :description))
     (dt "-")
     (dd (-> grading/grades ::grading/none :description))
     (dt "WO")
     (dd "Waveoff")
     (dt "C")
     (dd "Cut pass. " (-> grading/grades ::grading/cut-pass :description))
     (dt "AW")
     (dd "All the way")
     (dt "X")
     (dd "At the start. The first third of the approach.")
     (dt "IM")
     (dd "In the middle. The middle third of the appraoch.")
     (dt "IC")
     (dd "In close. The last third of the approach.")
     (dt "AR")
     (dd "At the ramp.")
     (dt "( )")
     (dd "Parentheses around any symbol signifies “a little” (e.g., (F) means “a little fast”).")
     (dt :class "unacceptable" "Comment")
     (dd "Underline. For emphasis.")
     (dt "F")
     (dd "Fast.")
     (dt "S")
     (dd "Slow.")
     (dt "H")
     (dd "High.")
     (dt "LO")
     (dd "Low.")
     (dt "L")
     (dd "Left.")
     (dt "R")
     (dd "Right.")
     (dt "LU")
     (dd "Lineup."))]
   :glideslope
   [(p "This graph shows glideslope and angle of attack (AoA) for the
   selected approach. The large circles show the position of the
   aircraft during the approach, and the colors show how much the
   approach deviated from the ideal glideslope. Deviations are
   categorized and colored as follows:")
    (color-table "glideslope")
    (p "The smaller circles show AoA deviation from the ideal via their
   position relative to the glideslope circles. The farther the AoA
   circles are from the corresponding glideslope circle, the larger
   the deviation. For example, an AoA circle that is a long way below
   the corresponding glideslope circle represents an AoA value that is
   much lower than the ideal, indicating that the aircraft was too
   fast at that point on the approach.")
    (p "An approach that is precisely on-speed will result in the AoA
   circles being superimposed on the glideslope circles.")
    (p "AoA data is colored using the same categories as the glideslope
   data, described above.")]
   :lineup
   [(p "This graph shows lineup for the selected approach. Circles
   show the position of the aircraft during the approach, andthe
   colors show how much the lineup deviated from ideal. Deviations are
   categorized and colored as follows:")
    (color-table "lineup")]})
