(ns lsobot.acmi
  "Functions for reading ACMI files"
  (:require [clojure.string :as str]
            #?@(:clj [[clojure.spec :as s]
                      [clojure.spec.gen :as sgen]]))
  #?(:cljs (:require-macros [lsobot.spec :as s]
                            [lsobot.spec-gen :as sgen])))

(def log (constantly nil))
#_(def log println)

;; spec for resulting data structure
;; Units are decimal degrees, meters, and seconds

;; Generic stuff
(def id-digits #{\0 \1 \2 \3 \4 \5 \6 \7 \8 \9
                 \A \B \C \D \E \F
                 \a \b \c \d \e \f})
(def id (s/with-gen
          (s/and string?
                 not-empty
                 (fn [s]
                   (every? id-digits s)))
          #(sgen/fmap (fn [digits] (apply str digits))
                      (sgen/vector (sgen/elements id-digits)
                                   1 16))))

#_(def id (s/and string?
               not-empty
               (fn [s]
                 (every? #{\0 \1 \2 \3 \4 \5 \6 \7 \8 \9
                           \A \B \C \D \E \F
                           \a \b \c \d \e \f}
                         s))))
(s/def ::id id)
(s/def ::ids (s/* id))
(s/def ::t float?)
(s/def ::text string?)

(s/def ::removed? boolean?)

;; Coordinates
(s/def ::long float?)
(s/def ::lat float?)
(s/def ::alt float?)
(s/def ::roll float?)
(s/def ::pitch float?)
(s/def ::yaw float?)
(s/def ::u float?) ; Falcon X coordinate - increases east
(s/def ::v float?) ; Falcon Y coordinate - increases north
(s/def ::heading float?)

;; Global properties
(s/def ::data-source string?)
(s/def ::data-recorder string?)
(s/def ::reference-time inst?)
(s/def ::recording-time inst?)
(s/def ::author string?)
(s/def ::title string?)
(s/def ::category string?)
(s/def ::briefing string?)
(s/def ::debriefing string?)
(s/def ::comments string?)

(s/def ::other-properties (s/map-of string? string?))

;; Events
(s/def ::event-type #{::message ::bookmark ::debug ::left-area ::destroyed ::takeoff ::landed})
(def event (s/keys :req [::event-type ::ids ::text]))

(s/def ::time float?)
(s/def ::events (s/* event))

;; Object properties
(s/def ::object-type (s/and set? #(every? string? %)))
(s/def ::parent id)
(s/def ::name string?)
(s/def ::pilot string?)
(s/def ::group string?)
(s/def ::country string?)
(s/def ::coalition string?)
(s/def ::color #{"Red" "Orange" "Green" "Blue" "Violet"})
(s/def ::registration string?)
(s/def ::squawk string?)
(s/def ::debug string?)
(s/def ::label string?)
(s/def ::locked-target id)
(s/def ::importance float?)
(s/def ::slot integer?)
(s/def ::length float?)
(s/def ::width float?)
(s/def ::height float?)
(s/def ::indicated-airspeed float?)
(s/def ::true-airspeed float?)
(s/def ::heading float?)
(s/def ::throttle float?)
(s/def ::afterburner float?)
(s/def ::airbrakes float?)
(s/def ::flaps float?)
(s/def ::landing-gear float?)
(s/def ::tailhook float?)
(s/def ::parachute float?)
(s/def ::drag-chute float?)

(def entity-info (s/map-of id
                           (s/keys :opt [::lat
                                         ::long
                                         ::alt
                                         ::u
                                         ::v
                                         ::roll
                                         ::pitch
                                         ::yaw
                                         ::heading
                                         ::object-type
                                         ::parent
                                         ::name
                                         ::pilot
                                         ::group
                                         ::country
                                         ::coalition
                                         ::color
                                         ::registration
                                         ::squawk
                                         ::debug
                                         ::label
                                         ::locked-target
                                         ::importance
                                         ::slot
                                         ::length
                                         ::width
                                         ::height
                                         ::indicated-airspeed
                                         ::true-airspeed
                                         ::heading
                                         ::throttle
                                         ::afterburner
                                         ::airbrakes
                                         ::flaps
                                         ::landing-gear
                                         ::tailhook
                                         ::parachute
                                         ::drag-chute
                                         ::removed?])))

(s/def ::entities entity-info)

(def frame (s/keys :req [::t] :opt [::events ::entities]))

(s/def ::frames (s/* frame))

(def file (s/keys :req [::frames]))

;;; Parsing

(defn parse-float
  [^String s]
  (log "parsing" :s s)
  (when-not (empty? s)
    #?(:cljs (js/Number. s)
       :clj (Double. s))))

(def fields
  {"T"            {:parse-as :location}
   "Type"         {:parse-as :taglist
                   :key ::object-type}
   "Parent"       {:key ::parent}
   "Pilot"        {:key ::pilot}
   "Group"        {:key ::group}
   "Country"      {:key ::country}
   "Coalition"    {:key ::coalition}
   "Color"        {:key ::color}
   "Registration" {:key ::registration}
   "Squawk"       {:key ::squawk}
   "Debug"        {:key ::debug}
   "Label"        {:key ::label}
   "LockedTarget" {:key ::locked-target}
   "Importance"   {:parse-as :float
                   :key      ::important}
   "Slot"         {:parse-as :integer
                   :key      ::slot}
   "Length"       {:parse-as :float
                   :key      ::length}
   "Width"        {:parse-as :float
                   :key      ::width}
   "Height"       {:parse-as :float
                   :key      ::height}
   "IAS"          {:parse-as :float
                   :key      ::indicated-airspeed}
   "TAS"          {:parse-as :float
                   :key      ::true-airspeed}
   "HDG"          {:parse-as :float
                   :key      ::heading}
   "Throttle"     {:parse-as :float
                   :key      ::throttle}
   "Afterburner"  {:parse-as :float
                   :key      ::afterburner}
   "AirBrakes"    {:parse-as :float
                   :key      ::airbrakes}
   "Flaps"        {:parse-as :float
                   :key      ::flaps}
   "LandingGear"  {:parse-as :float
                   :key      ::landing-gear}
   "Tailhook"     {:parse-as :float
                   :key      ::tailhook}
   "Parachute"    {:parse-as :float
                   :key      ::parachute}
   "DragChute"    {:parse-as :float
                   :key      ::drag-chute}})

(defmulti parse-field (fn [[k v]] (-> k fields :parse-as)))

(defmethod parse-field :location
  [[_ v]]
  (let [parts (map parse-float (str/split v #"\|"))]
    (if (< (count parts) 6)
      (let [[long lat alt u v] parts]
        (cond-> {}
          long (assoc ::long long)
          lat (assoc ::lat lat)
          alt (assoc ::alt alt)
          u (assoc ::u u)
          v (assoc ::v v)))
      (let [[long lat alt roll pitch yaw u v heading] parts]
        (cond-> {}
          long (assoc ::long long)
          lat (assoc ::lat lat)
          alt (assoc ::alt alt)
          roll (assoc ::roll roll)
          pitch (assoc ::pitch pitch)
          yaw (assoc ::yaw yaw)
          u (assoc ::u u)
          v (assoc ::v v)
          heading (assoc ::heading heading))))))

(defmethod parse-field :taglist
  [[k v]]
  {(-> k fields :key) (set (str/split v #"\+"))})

(defmethod parse-field :default
  [[k v]]
  {(or (-> k fields :key) k) v})

(defmethod parse-field :float
  [[k v]]
  {(-> k fields :key) (parse-float v)})

(s/fdef parse-entity-line
        :args (s/cat :line string?)
        :ret (s/or :entity-info (s/cat :type #{:entity-info}
                                       :data entity-info)
                   :event (s/cat :type #{:event}
                                 :data event)))

(def event-types
  {"Message"   ::message
   "Bookmark"  ::bookmark
   "Debug"     ::debug
   "LeftArea"  ::left-area
   "Destroyed" ::destroyed
   "TakenOff"  ::takeoff
   "Landed"    ::landed})

(defn parse-event
  [event-data]
  (let [[event-type & more] (str/split event-data #"|")
        ids (butlast more)
        text (last more)]
    {::event-type (event-types event-type)
     ::ids        ids
     ::text       text}))

(defn parse-entity-line
  [^String line]
  (let [[id & fields] (str/split line #",")
        raw (->> fields
                 (map #(str/split % #"="))
                 (into {}))]
    (if (contains? raw "Event")
      [:event (parse-event (get raw "Event"))]
      [:entity-info {id (assoc (->> raw
                                    (map parse-field)
                                    (reduce merge {}))
                               ::removed? false)}])))

(s/fdef parse-line
        :args (s/cat :line string?)
        :ret (s/or :comment (s/cat :type #{:comment})
                   :timestamp (s/cat :type #{:timestamp}
                                     :data float?)
                   :entity-info (s/cat :type #{:entity-info}
                                       :data entity-info)
                   :event (s/cat :type #{:event}
                                 :data (s/* event))
                   :deletion (s/cat :type #{:deletion}
                                    :data id)))

(defn parse-line
  "Returns [line-type line-info] given a line from an ACMI file"
  [^String line]
  (cond
    (.startsWith line "//") [:comment]
    (.startsWith line "#")  [:timestamp (-> line (subs 1) #?(:cljs js/Number.
                                                             :clj Double.))]
    (.startsWith line "-")  [:deletion (-> line (subs 1))]
    :else                   (parse-entity-line line)))

(s/fdef read-acmi
        :args (s/cat :path string?)
        :ret file)

(defn read-acmi
  [contents]
  (let [lines (drop 2 (str/split contents #?(:cljs "\n"
                                             :clj #"\n")))]  ; Ignore the header
    (log :lines (count lines))
    (loop [[line & more-lines] lines
           entities            {}
           events              []
           t                   0.0
           frames              []]
      (log :t t :frames (count frames))
      (if-not line
        {::frames (conj frames {::t t
                                ::events   events
                                ::entities entities})}
        (let [[type line-info] (parse-line line)]
          (log :line line :line-info (pr-str line-info))
          (case type
            :comment (recur more-lines
                            entities
                            []
                            t
                            frames)
            :timestamp (recur more-lines
                              entities
                              []
                              line-info
                              (conj frames {::t t
                                            ::events events
                                            ::entities entities}))
            :entity-info (recur more-lines
                                (merge-with merge entities line-info)
                                events
                                t
                                frames)
            :event (recur more-lines
                          entities
                          (conj events line-info)
                          t
                          frames)
            :deletion (recur more-lines
                             (assoc-in entities [line-info ::removed?] true)
                             events
                             t
                             frames)))))))


(s/fdef frame-at
        :args (s/cat :file file :t float?)
        :ret frame)

(defn frame-index-at
  "Returns index of the closest frame at or after the specified time."
  [file t]
  (let [frames (::frames file)]
    (loop [low 0
           high (dec (count frames))]
      (let [idx (-> low (+ high) (/ 2) int)
            t0 (::t (nth frames idx))]
        (cond
          (= t0 t) idx
          (= low (dec high)) (inc idx)
          (< t0 t) (recur idx high)
          :else (recur low idx))))))

(defn frame-at
  "Returns the closest frame at or after the specified time."
  [file t]
  (nth (::frames file) (frame-index-at file t)))

(defn entities
  "Returns the entities of a frame"
  [frame]
  (-> frame ::entities))

(defn entity
  "Returns an entity from a frame"
  [frame id]
  (get (entities frame) id))

(defn entity-at
  "Return entity `id` from closest frame at or after specified time."
  [file id t]
  (let [frame (frame-at file t)]
    (-> frame ::entities (get id))))
