(def project 'lsobot)
(def version "0.1.0-SNAPSHOT")

(set-env! :resource-paths #{"resources"}
          :source-paths   #{"src" "dev"}
          :dependencies   '[[org.clojure/clojurescript "1.9.76"]
                            [tailrecursion/boot.task   "2.2.4"]
                            [adzerk/boot-cljs          "1.7.228-1"]
                            [adzerk/boot-reload        "0.4.8"]
                            [hoplon/boot-hoplon        "0.1.13"]
                            [hoplon/hoplon             "6.0.0-alpha16"]
                            [org.clojure/clojure "1.9.0-alpha10"]
                            [org.clojure/core.async    "0.2.374"
                             :exclusions [org.clojure/tools.reader]]
                            [tailrecursion/boot-jetty  "0.1.3"]
                            [org.clojure/tools.namespace "RELEASE"]
                            [com.andrewmcveigh/cljs-time "0.4.0"]

                            [adzerk/boot-cljs-repl   "0.3.2"] ;; latest release
                            [com.cemerick/piggieback "0.2.1"  :scope "test"]
                            [weasel                  "0.7.0"  :scope "test"]
                            [org.clojure/tools.nrepl "0.2.12" :scope "test"]

                            [com.taoensso/timbre "4.7.0"]

                            [org.clojure/test.check "RELEASE" :scope "test"]
                            ;;[adzerk/boot-test "RELEASE" :scope "test"]
                            [clojure-complete "0.2.4" :scope "test"]]
          :asset-paths    #{"assets"})

;; (task-options!
;;  aot {:namespace   #{'lsobot.core}}
;;  pom {:project     project
;;       :version     version
;;       :description "FIXME: write description"
;;       :url         "http://example/FIXME"
;;       :scm         {:url "https://github.com/yourname/lsobot"}
;;       :license     {"Eclipse Public License"
;;                     "http://www.eclipse.org/legal/epl-v10.html"}}
;;  jar {:main        'lsobot.core
;;       :file        (str "lsobot-" version "-standalone.jar")})

(require
 '[adzerk.boot-cljs         :refer [cljs]]
 '[adzerk.boot-cljs-repl   :refer [cljs-repl start-repl]]
 '[adzerk.boot-reload       :refer [reload]]
 '[hoplon.boot-hoplon       :refer [hoplon prerender]]
 '[tailrecursion.boot-jetty :refer [serve]]
 'complete.core ; For inf-clojure completion
 ;;'user
 )

(deftask dev
  "Build for local development."
  []
  (comp
    (watch)
    (speak)
    (hoplon)
    (reload)
    (cljs-repl)
    (cljs)
    (serve :port 8000)))

(deftask prod
  "Build for production deployment."
  []
  (comp
    (hoplon)
    (cljs :optimizations :advanced)
    (target :dir #{"target"})))

(deftask build
  "Build the project locally as a JAR."
  [d dir PATH #{str} "the set of directories to write to (target)."]
  (let [dir (if (seq dir) dir #{"target"})]
    (comp (aot) (pom) (uber) (jar) (target :dir dir))))

(deftask run
  "Run the project."
  [a args ARG [str] "the arguments for the application."]
  (require '[lsobot.core :as app])
  (apply (resolve 'app/-main) args))

(defn run-repl-server
  [port]
  (clojure.core.server/start-server {:port port
                                     :name (name project)
                                     :accept 'clojure.core.server/repl
                                     :daemon false}))

(deftask repl-server
  "Run a REPL socket server"
  [p port PORT int "Port to run the server on. Defaults to 5555."]
  (let [port (or port 5555)]
    (run-repl-server port)
    (println "Server is running on port" port)
    (Thread/sleep Long/MAX_VALUE)))

;; (require 'user)
