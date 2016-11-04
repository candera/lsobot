(ns taoensso.encore
  "Core utils library for Clojure/Script.

  A personal collection of low-level tools for Clojure/Script that
  emphasizes:
    * Cross platform API compatibility
    * Flexibility
    * Performance
    * Backwards compatibility

  This lib's mostly for my own use and for advanced users that feel
  comfortable reading this source. Not providing much beginner-oriented
  documentation for this, sorry.

  Quick Taoensso naming conventions:
    **foo** - Dynamic var.
    foo!    - Fn with side effects, or that should otherwise be used cautiously.
    foo?    - Truthy val or fn that returns truthy val.
    foo!?   - Fn that has side effetcs (or requires caution) and that returns
              a truthy val. Note: !?, not ?!.
    foo$    - Fn that's notably expensive to compute (e.g. hits db).
    foo_    - Dereffable val (e.g. atom, volatile, delay, etc.).
    _       - Unnamed val.
    _foo    - Named but unused val.
    ?foo    - Optional val (emphasize that val may be nil).
    foo*    - A variation of `foo` (e.g. `foo*` macro vs `foo` fn).
    -foo    - Public implementation detail or intermediate (e.g. uncoerced) val.
    >foo    - Val \"to foo\" (e.g. >sender, >host), or fn to put/coerce/transform.
    <foo    - Val \"from foo\" (e.g. <sender, <host), or fn to take/coerce/transform.
    ->foo   - Fn to put/coerce/transform."

  {:author "Peter Taoussanis (@ptaoussanis)"}

  (:refer-clojure :exclude
    [defonce if-not cond format bytes?
     run! some? ident? float? boolean? uri? indexed?
     int? pos-int? neg-int? nat-int?
     simple-ident?   qualified-ident?
     simple-symbol?  qualified-symbol?
     simple-keyword? qualified-keyword?])

       
           
                            
                            
                           
                                                      
                                         
                                       
                                     
                              

       
          
                                   
                               
                                              
    

        
  (:require
   [clojure.string      :as str]
   [clojure.set         :as set]
   ;; [cljs.core.async  :as async]
   [cljs.reader]
   [cljs.tools.reader.edn :as edn]
   [cljs.test             :as test :refer-macros [is]]
   ;;[goog.crypt.base64 :as base64]
   [goog.object         :as gobj]
   [goog.string         :as gstr]
   [goog.string.format]
   [goog.string.StringBuffer]
   [goog.events         :as gevents]
   [goog.net.XhrIo      :as gxhr]
   [goog.net.XhrIoPool  :as gxhr-pool]
   [goog.Uri.QueryData  :as gquery-data]
   [goog.structs        :as gstructs]
   [goog.net.EventType]
   [goog.net.ErrorCode]
   [taoensso.truss :as truss])

        
  (:require-macros
   [taoensso.encore :as enc-macros :refer
    [have have! have? compile-if if-not if-lets when-lets cond
     catch-errors* catch-errors
     name-with-attrs -vol! -vol-reset! -vol-swap!]]))

(comment "ℕ ℤ ℝ ∞ ≠ ∈ ∉"
  (set! *unchecked-math* :warn-on-boxed)
  (set! *unchecked-math* false))

;;;; Truss aliases (for back compatibility, convenience)

                                                          
                                                          
                                                          
                                                          
(defn      get-dynamic-assertion-data [] (truss/get-dynamic-assertion-data))
                                              
                                                       

;;;; Version check (helps with dependency conflicts, etc.)

(declare parse-version)
(def             encore-version [2 64 1])
(defn assert-min-encore-version [min-version]
  (let [[xc yc zc] encore-version
        [xm ym zm] (if (vector? min-version) min-version (:version (parse-version min-version)))
        [xm ym zm] (mapv #(or % 0) [xm ym zm])]

    (when-not (or (> xc xm) (and (= xc xm) (or (> yc ym) (and (= yc ym) (>= zc zm)))))
      (throw
        (ex-info (str "Insufficient `com.taoensso/encore` version. You may have a Leiningen dependency conflict (see http://goo.gl/qBbLvC for solution).")
          {:min-version  (str/join "." [xm ym zm])
           :your-version (str/join "." [xc yc zc])})))))

(comment (assert-min-encore-version 3.10))

;;;; Core macros

     
                    
                                                                             
                                                                           
                                                                   
                                  
                                      
                      
                                                 
               
                 

                 
                                                            
                                                                          
                                                       
                                                   
             
                                                                         
               

(defn name-with-attrs
  "Given a name symbol and sigs, returns [<name-with-attrs-meta> <args>]"
  ([sym             sigs] (name-with-attrs sym nil sigs))
  ([sym attrs-merge sigs]
   (let [[?docstring sigs] (if (and (string? (first sigs)) (next sigs)) [(first sigs) (next sigs)] [nil sigs])
         [attrs      sigs] (if (and (map?    (first sigs)) (next sigs)) [(first sigs) (next sigs)] [{}  sigs])
         attrs (if ?docstring (assoc attrs :doc ?docstring) attrs)
         attrs (if (meta sym) (conj (meta sym) attrs) attrs)
         attrs (conj attrs attrs-merge)]
     [(with-meta sym attrs) sigs])))

                 
                                                                         
              
                                              
             
                                         
                                            

                        
                                                                            
                         
          
                               
                       
                                        
                                        
                                         
                                               
                                                                     
                                          

     
                                                                    
                                                                    
                                                                          
                                                                          
                         
                                             
                                              
                                                                    
                                                     
                   

                                                                        
                                            
                                             

                 
                                                                             
                            
                                                       
                       
                                           
                    
                                                             
                                                                    
                                                                        
        

                   
                                                                         
                                  
                                                     

(comment
  (if-lets   [a :a b (= a :a)] [a b] "else")
  (if-lets   [a :a b (= a :b)] [a b] "else")
  (when-lets [a :a b nil] "true")
  (when-lets [:let [a :a b :b] c (str a b)] c))

     
              
                                                                          
                                                                    
                                                                      

         
             
                                                       
                                                                
                                                                                  
              

                                                                     
             
                                              
                          
                          
                
                                                                                  
                                                                                  
                                                   
                                                   
                                                   
                                                   
                                                   
                                                   
                           
                                                                       
                                                                               
                                                      

                                           
                                                

                                                                       
                                                                                             
                                            
                                                      
                                                    

(comment
  [(macroexpand-all '(clojure.core/cond nil "a" nil "b" :else "c"))
   (macroexpand-all '(cond nil "a" nil "b" :else "c"))
   (macroexpand-all '(cond nil "a" nil "b" (println "bar")))
   (macroexpand-all '(cond :when true :let [x "x"] :else x))
   (macroexpand-all '(cond false 0 (not false) 1 2))])

                                                                            
                                                                                

(comment [(cond false "false") (cond! false "false")])

                                                                          
                     
                                  
                  
                                                                                  
                 
                                          
            

     
                   
                                                                     
                  
                                             
                                                            
                                                       
                
                                                                                 
                                 

                                             
                                               
                                              

                                                                       
                                                                       
                                                                       

;;;; Edn

(declare map-keys kw-identical?)

(defn read-edn
  "Attempts to pave over differences in:
    `clojure.edn/read-string`, `clojure.tools.edn/read-string`,
    `cljs.reader/read-string`, `cljs.tools.reader/read-string`.
   `cljs.reader` in particular can be a pain."

  ([     s] (read-edn nil s))
  ([opts s]
   ;; First normalize behaviour for unexpected inputs:
   (if (or (nil? s) (identical? s ""))
     nil
     (if-not (string? s)
       (throw (ex-info "`read-edn` attempt against non-nil, non-string arg"
                {:arg s :type (type s)}))

       (let [readers (get opts :readers ::dynamic)
             default (get opts :default ::dynamic)

             ;; Nb we ignore as implementation[1] detail:
             ;;  *.tools.reader/*data-readers*,
             ;;  *.tools.reader/default-data-reader-fn*
             ;;
             ;; [1] Lib consumer doesn't care that we've standardized to
             ;;     using tools.reader under the covers

             readers
             (if-not (kw-identical? readers ::dynamic)
               readers
                                                 
               ;; Unfortunate (slow), but faster than gc'd memoization in most cases:
                      (map-keys symbol @cljs.reader/*tag-table*))

             default
             (if-not (kw-identical? default ::dynamic)
               default
                                                           
                      @cljs.reader/*default-data-reader-fn*)

             opts (assoc opts :readers readers :default default)]

                                                             
                   (cljs.tools.reader.edn/read-string opts s))))))

(defn pr-edn
  "Prints arg to an edn string readable with `read-edn`"
  ([      x] (pr-edn nil x))
  ([_opts x]
          (binding [*print-level* nil, *print-length* nil] (pr-str x))
        
                                    
                                                     
                                             
                
                
                                                      
                       ))

;;;; Errors

(defn error-data
  "Returns data map iff `x` is an error of any type on platform"
  ;; Note that Clojure 1.7+ now has `Throwable->map`
  [x]
  (when-let [data-map
             (or (ex-data x) ; ExceptionInfo
                                                       
                      (when (instance? js/Error  x) {}))]
    (merge
                                                              
                                                    
                                                    
                                                      
             (let [err x] ; (catch :default t <...)
               {:err-type  (type      err)
                :err-msg   (.-message err)
                :err-cause (.-cause   err)})
      data-map)))

(comment
  (error-data (Throwable. "foo"))
  (error-data (Exception. "foo"))
  (error-data (ex-info    "foo" {:bar :baz})))

                       
                                                                          
                                                                                  
                                                 
                                  
            
                                                              
                                                                
                                               
            
                                                                                      
                                                                                         

                                                     
                                                          

(comment
  (catch-errors (zero? "9"))
  (macroexpand '(catch-errors* (do "foo") e e (println "finally")))
  (catch-errors* (do "foo") e e)
  (catch-errors* (/ 5 0)    e e))

                                                                 
                                                               

(comment (caught-error-data (/ 5 0)))

;;;; Type preds, etc.
;; Some of these have slowly been getting added to Clojure core; make sure
;; to :exclude any official preds using the same name

     
   
                                       
                                                      
                                                      
                                                                       
                                                                       
                                                                       
                                                                       
                                                                       
                                                                       
                                                                       
                                                                       
                                                                       
                                                                       
                                                                       
                                                                       

                                                                       
                                                                           
                                                                       
                                                                           
                                                                       
                                                                           

                                                                     
                                                               
                                                              
                                                          
                                                           

      
(do
  (defn ^boolean some?       [x] (not (nil? x)))
  (defn ^boolean stringy?    [x] (or (keyword? x) (string? x)))
  (defn ^boolean ident?      [x] (or (keyword? x) (symbol? x)))
  (defn ^boolean boolean?    [x] (or (true?    x) (false?  x)))
  ;; (defn uri?              [x])
  (defn ^boolean indexed?    [x] (satisfies?  IIndexed            x))
  (defn ^boolean named?      [x] (implements? INamed              x))
  (defn ^boolean editable?   [x] (implements? IEditableCollection x))
  (defn ^boolean derefable?  [x] (satisfies?  IDeref              x))
  ;; (defn throwable?        [x])
  ;; (defn exception?        [x])
  (defn ^boolean      error? [x] (instance?   js/Error            x))
  (defn ^boolean       atom? [x] (instance?   Atom                x))
  (defn ^boolean   lazy-seq? [x] (instance?   LazySeq             x))
  (defn ^boolean re-pattern? [x] (instance?   js/RegExp           x))

  (defn ^boolean simple-ident?      [x] (and (ident?   x) (nil? (namespace x))))
  (defn ^boolean qualified-ident?   [x] (and (ident?   x)       (namespace x) true))
  (defn ^boolean simple-symbol?     [x] (and (symbol?  x) (nil? (namespace x))))
  (defn ^boolean qualified-symbol?  [x] (and (symbol?  x)       (namespace x) true))
  (defn ^boolean simple-keyword?    [x] (and (keyword? x) (nil? (namespace x))))
  (defn ^boolean qualified-keyword? [x] (and (keyword? x)       (namespace x) true))

  (defn ^boolean nempty-str? [x] (and (string? x) (not (= x ""))))
  (defn ^boolean nblank-str? [x] (and (string? x) (not (str/blank? x))))
  (defn ^boolean nblank?     [x]                  (not (str/blank? x)))
  (defn ^boolean vec2?       [x] (and (vector? x) (= (count x) 2)))
  (defn ^boolean vec3?       [x] (and (vector? x) (= (count x) 3))))

     
   
                                           
                                    
                            

                                                                 
                  
       
                           
                           
                                          
                                          
                         
                           

                                                        
                                                       
                                                       

                                                     
                                                    
                                                    

                                                       
                                                      
                                                      

                                                     

                 
                    
                                                         

      
(do
  (defn ^boolean nneg?        [x] (not (neg? x)))
  (defn ^boolean zero-num?    [x] (= x 0))
  (defn ^boolean regular-num? [x]
    (and
      (number? x)
      (not ^boolean (js/isNaN x))
      (not (identical? x js/Infinity))))

    (defn ^boolean float? [x]
    (and
      (number? x)
      (not ^boolean (js/isNaN x))
      (not (identical? x js/Infinity))
      (not (== (js/parseFloat x) (js/parseInt x 10)))))

  (defn ^boolean int? [x]
    (and
      (number? x)
      (not ^boolean (js/isNaN x))
      (not (identical? x js/Infinity))
      (== (js/parseFloat x) (js/parseInt x 10))))

  (defn ^boolean nat-num?   [x] (and (number? x) (not (neg? x))))
  (defn ^boolean pos-num?   [x] (and (number? x)      (pos? x)))
  (defn ^boolean neg-num?   [x] (and (number? x)      (neg? x)))

  (defn ^boolean nat-int?   [x] (and (int? x) (not (neg? x))))
  (defn ^boolean pos-int?   [x] (and (int? x)      (pos? x)))
  (defn ^boolean neg-int?   [x] (and (int? x)      (neg? x)))

  (defn ^boolean nat-float? [x] (and (float? x) (not (neg? x))))
  (defn ^boolean pos-float? [x] (and (float? x)      (pos? x)))
  (defn ^boolean neg-float? [x] (and (float? x)      (neg? x)))

  (defn ^boolean udt?       [x] (and (int? x) (not (neg? x))))

  (defn ^boolean pval? [x]
    (and (number? x)
      (let [n (double x)] (and (>= n 0.0) (<= n 1.0))))))

(compile-if (do (require 'clojure.core.async) true)
                                                                                                   
         (defn ^boolean chan? [x] (instance?    cljs.core.async.impl.channels.ManyToManyChannel x))
  ;; nil to help distinguish from negative `instance?` test:
  (defn chan? [x] nil))

(do
  ;; ClojureScript keywords aren't `identical?` and Clojure doesn't have
  ;; `keyword-identical?`. This util helps alleviate the pain of writing
  ;; cross-platform code, Ref. http://goo.gl/be8CGP
       
                     
                                                              
                          
                                              

        
  (defn ^boolean kw-identical? [x y]
    (if (identical? x y)
      true
      (if (and (keyword? x) (keyword? y))
        (identical? (.-fqn x) (.-fqn y))
        false))))

;;;; Type coercions

(defn as-?nzero  [x] (when (number?  x) (if (zero? x)      nil x)))
(defn as-?nblank [x] (when (string?  x) (if (str/blank? x) nil x)))
(defn as-?kw     [x] (cond (keyword? x)       x  (string? x) (keyword x)))
(defn as-?name   [x] (cond (named?   x) (name x) (string? x)          x))
(defn as-?qname  [x]
  (cond
    (named?  x) (let [n (name x)] (if-let [ns (namespace x)] (str ns "/" n) n))
    (string? x) x))

(defn as-?nempty-str [x]
  (when (string? x)
    (if                                   (= x "") nil x)))

(defn as-?int #_as-?long [x]
  (cond (number? x) (long x)
        (string? x)
               (let [x (js/parseInt x 10)] (when-not (js/isNaN x) x))
                                      
                                                  
                                                      
                                                                 ))

(defn as-?float #_as-?double [x]
  (cond (number? x) (double x)
        (string? x)
               (let [x (js/parseFloat x)] (when-not (js/isNaN x) x))
                                          
                                                        ))

(defn as-?udt       [x] (when-let [n (as-?int   x)] (when-not (neg? ^long   n) n)))
(defn as-?nat-int   [x] (when-let [n (as-?int   x)] (when-not (neg? ^long   n) n)))
(defn as-?pos-int   [x] (when-let [n (as-?int   x)] (when     (pos? ^long   n) n)))
(defn as-?nat-float [x] (when-let [n (as-?float x)] (when-not (neg? ^double n) n)))
(defn as-?pos-float [x] (when-let [n (as-?float x)] (when     (pos? ^double n) n)))
(defn as-?pval      [x] (when-let [^double f (as-?float x)]
                          (if (> f 1.0) 1.0 (if (< f 0.0) 0.0 f))))
(defn as-?bool [x]
  (cond
    (nil? x) nil
    (or (true? x) (false? x)) x
    (or (= x 0) (= x "false") (= x "FALSE") (= x "0")) false
    (or (= x 1) (= x "true")  (= x "TRUE")  (= x "1")) true))

;; Uses simple regex to test for basic "x@y.z" form:
(defn as-?email  [?s] (when ?s (re-find #"^[^\s@]+@[^\s@]+\.\S*[^\.]$" (str/trim ?s))))
(defn as-?nemail [?s] (when-let [email (as-?email ?s)] (str/lower-case email)))
(comment (mapv as-?nemail ["foo" "foo@" "foo@bar" "Foo@BAR.com"
                           "foo@@bar.com" "foo@bar.com." "foo.baz@bar.com"]))

(defn- try-pred [pred x] (catch-errors* (pred x) _ false))
(defn when?     [pred x] (when (try-pred pred x) x))
(defn is! "Cheaper `have!` that provides less diagnostic info"
  ([     x           ] (is! identity x nil)) ; Nb different to single-arg `have`
  ([pred x           ] (is! identity x nil))
  ([pred x fail-?data]
   (if (try-pred pred x)
     x
     (throw
       (ex-info (str "`is!` " (str pred) " failure against arg: " (pr-str x))
         {:arg-val x :arg-type (type x) :fail-?data fail-?data})))))

(comment [(is! false) (when-let [n (when? nneg? (as-?int 37))] n)])

(defn -as-throw [as-name x]
  (throw (ex-info (str "`as-" (name as-name) "` failed against: `" (pr-str x) "`")
           {:arg x :type (type x)})))

(defn as-nzero             [x] (or (as-?nzero      x) (-as-throw :nzero      x)))
(defn as-nblank            [x] (or (as-?nblank     x) (-as-throw :nblank     x)))
(defn as-nempty-str        [x] (or (as-?nempty-str x) (-as-throw :nempty-str x)))
(defn as-kw                [x] (or (as-?kw         x) (-as-throw :kw         x)))
(defn as-name              [x] (or (as-?name       x) (-as-throw :name       x)))
(defn as-qname             [x] (or (as-?qname      x) (-as-throw :qname      x)))
(defn as-email             [x] (or (as-?email      x) (-as-throw :email      x)))
(defn as-nemail            [x] (or (as-?nemail     x) (-as-throw :nemail     x)))
(defn as-udt         ^long [x] (or (as-?udt        x) (-as-throw :udt        x)))
(defn as-int         ^long [x] (or (as-?int        x) (-as-throw :int        x)))
(defn as-nat-int     ^long [x] (or (as-?nat-int    x) (-as-throw :nat-int    x)))
(defn as-pos-int     ^long [x] (or (as-?pos-int    x) (-as-throw :pos-int    x)))
(defn as-float     ^double [x] (or (as-?float      x) (-as-throw :float      x)))
(defn as-nat-float ^double [x] (or (as-?nat-float  x) (-as-throw :nat-float  x)))
(defn as-pos-float ^double [x] (or (as-?pos-float  x) (-as-throw :pos-float  x)))
(defn as-pval      ^double [x] (or (as-?pval       x) (-as-throw :pval       x)))
(defn as-bool              [x] (let [?b (as-?bool  x)] (if-not (nil? ?b) ?b (-as-throw :bool x))))

;;;; Validation

                    
                                                                     
                                                                                
         
                                                             
                                              
                                                                

                   
                                                                      
                              
                
                                   
                                                                                
                            

(comment
  (check-some false [:bad-type (string? 0)] nil [:blank (str/blank? 0)])
  (check-all  false [:bad-type (string? 0)] nil [:blank (str/blank? 0)]))

;;;; Keywords

(defn explode-keyword [k] (str/split (as-qname k) #"[\./]"))
(comment (explode-keyword :foo.bar/baz))

(defn merge-keywords
  ([ks] (merge-keywords ks false))
  ([ks no-slash?]
   (let [parts (reduce (fn [acc in] (if in (into acc (explode-keyword in)) acc))
                 [] ks)]
     (when (seq parts)
       (if no-slash?
         (keyword (str/join "." parts))
         (let [ppop (pop parts)]
           (keyword (when (seq ppop) (str/join "." ppop))
             (peek parts))))))))

(comment (merge-keywords [:foo.bar nil "d.e/k" :baz.qux/end nil] :no))

;;;; Bytes

     
   
                                                
                                                                                       
                                                              

                                                
                           
                           
                                     
                                        
                                        
           

                                      
                   
              
                           
                       
                                                
                                                       

          
                                                             
                                                                               

;;;; Misc

(defn force-ref "Like `force` for refs" [x] (if (derefable? x) (deref x) x))

(defn merge-meta   [x m] (with-meta x (merge (meta x) m)))
(defn without-meta [x] (if (meta x) (with-meta x nil) x))

(declare revery?)
(defn some=
  ([x y]        (and (some? x) (= x y)))
  ([x y & more] (and (some? x) (= x y) (revery? #(= % x) more))))

(comment (some= :foo :foo nil))

(declare rfirst)
(defn nnil "Returns first non-nil arg, or nil"
  ([            ] nil)
  ([x           ] x)
  ([x y         ] (if (nil? x) y x))
  ([x y z       ] (if (nil? x) (if (nil? y) z y) x))
  ([x y z & more] (if (nil? x) (if (nil? y) (if (nil? z) (rfirst some? more) z) y) x)))

(comment
  (qb 100000
    (or   nil nil nil false :a)
    (nnil nil nil nil false :a)))

(do
  ;; In most cases you'll want to define a local sentinel when possible
  ;; for faster (non-var) lookup + comparisons, etc.
  (def sentinel                        (js-obj))
         (defn sentinel? [x] (identical? x sentinel))
                        
                                                                         
                                 
                                       
  (defn nil->sentinel [x] (if (nil? x) sentinel x))
  (defn sentinel->nil [x] (if (sentinel? x) nil x)))

(defn parse-version [x]
  (let [[s-version ?s-qualifier] (str/split (str x) #"-" 2)]
    {:version   (when-let [s (re-seq #"\d+" s-version)] (mapv as-?int s))
     :qualifier (when-let [s ?s-qualifier] (str/lower-case s))}))

(comment [(parse-version "40.32.34.8-foo") (parse-version 10.3)])

      
(def js-?win "May not be available with Node.js, etc."
  (when (exists? js/window) js/window))

;;;; Math

(def ^:const max-long                              9007199254740991)
(def ^:const min-long                             -9007199254740991)

(defn approx=
  ([x y      ] (approx= x y 0.001))
  ([x y signf] (< (Math/abs (- (double x) (double y))) (double signf))))

(comment (qb 10000 (approx= 3.141592 (/ 22 7) 0.01)))

;; This must reflect to output correct long/double types:
(defn clamp [nmin nmax n] (if (< n nmin) nmin (if (> n nmax) nmax n)))

;;; These will pass primitives through w/o reflection
                                                                          
                                                                          
                                                                          
                                                                          
                                                                                 
                                                                                 
                                                                    
                                                                                      

(defn pow [n exp] (Math/pow n exp))
(defn abs [n]     (if (neg? n) (- n) n)) ; #+clj (Math/abs n) reflects
(defn round*
  ([             n] (round* :round nil n))
  ([type         n] (round* type   nil n))
  ([type nplaces n]
   (let [n        (double n)
         modifier (when nplaces (Math/pow 10.0 nplaces))
         n*       (if-not modifier n (* n ^double modifier))
         rounded
         (case type
           ;;; Note same API for both #+clj, #+cljs:
           :round (Math/round n*) ; Round to nearest int or nplaces
           :floor (Math/floor n*) ; Round down to -inf
           :ceil  (Math/ceil  n*) ; Round up to +inf
           :trunc (long n*)       ; Round up/down toward zero
           (throw (ex-info "Unknown round type" {:type type})))]
     (if-not modifier
       (long rounded)                        ; Returns long
       (/ (double rounded) ^double modifier) ; Returns double
       ))))

(comment
  (round* :floor -1.5)
  (round* :trunc -1.5)
  (round* :floor 5 1.1234567)
  (round* :round 5 1.1234567 ))

;;; Optimized common cases
(defn round0   ^long [n]            (Math/round    (double n)))
(defn round1 ^double [n] (/ (double (Math/round (* (double n)  10.0)))  10.0))
(defn round2 ^double [n] (/ (double (Math/round (* (double n) 100.0))) 100.0))

(defn exp-backoff
  "Returns binary exponential backoff value for n<=36"
  ([^long n-attempt] (exp-backoff n-attempt nil))
  ([^long n-attempt {:keys [min max factor] :or {factor 1000}}]
   (let [n (if (> n-attempt 36) 36 n-attempt) ; >2^36 excessive
         b (Math/pow 2 n)
         t (long (* (+ b ^double (rand b)) 0.5 (double factor)))
         t (long (if min (if (< t ^long min) min t) t))
         t (long (if max (if (> t ^long max) max t) t))]
     t)))

(comment (exp-backoff 128))

;;;; Date & time

                                                                         
(defn     now-dt        []           (js/Date.)                        )
                                                                                             
(defn     now-udt ^long []           (.getTime (js/Date.))                                 )

(defn secs->ms ^long [secs] (* (long secs)  1000))
(defn ms->secs ^long [ms]   (quot (long ms) 1000))
(defn ms "Returns ~number of milliseconds in period defined by given args"
  [& {:as opts :keys [years months weeks days hours mins secs msecs ms]}]
  {:pre [(have #{:years :months :weeks :days :hours :mins :secs :msecs :ms}
           :in (keys opts))]}
  (round*
    (+
      (if years  (* (double years)  #=(* 1000 60 60 24 365))    0.0)
      (if months (* (double months) #=(* 1000 60 60 24 29.53))  0.0)
      (if weeks  (* (double weeks)  #=(* 1000 60 60 24 7))      0.0)
      (if days   (* (double days)   #=(* 1000 60 60 24))        0.0)
      (if hours  (* (double hours)  #=(* 1000 60 60))           0.0)
      (if mins   (* (double mins)   #=(* 1000 60))              0.0)
      (if secs   (* (double secs)   1000)                       0.0)
      (if msecs     (double msecs)                              0.0)
      (if ms        (double ms)                                 0.0))))

(def secs (comp ms->secs ms))
(comment #=(ms   :years 88 :months 3 :days 33)
         #=(secs :years 88 :months 3 :days 33))

                                                                      
                                                                   

                                   
     
                         
                                                       
                                                                    

     
                        
                                                                                 
                                                                               
                                                                              
                                                                    

(comment (qb 10000 (.format (simple-date-format "yyyy-MMM-dd") (Date.))))

;;;; Collections

;;; Clojure 1.7-alpha5+ introduced similar behaviour in `vec`, `set`
(defn vec* [x] (if (vector? x) x (vec x)))
(defn set* [x] (if (set?    x) x (set x)))

(defn distinct-elements? [x] (or (set? x) (= (count x) (count (set* x)))))

      
(defn oget
  "Like `aget` for JS objects, Ref. https://goo.gl/eze8hY.
  Unlike `aget`, returns nil for missing keys instead of throwing."
  ([o k]          (when      o                 (gobj/get o k  nil)))
  ([o k1 k2]      (when-let [o (oget o k1)]    (gobj/get o k2 nil)))
  ([o k1 k2 & ks] (when-let [o (oget o k1 k2)] (apply oget o ks))))

(defn   singleton? [coll] (if (counted? coll) (= (count coll) 1) (not (next coll))))
(defn ->?singleton [coll] (when (singleton? coll) (let [[c1] coll] c1)))
(defn ->vec [x] (cond (vector? x) x (sequential? x) (vec x) :else [x]))

(defn vnext        [v] (when (> (count v) 1) (subvec v 1)))
(defn vsplit-last  [v] (let [c (count v)] (when (> c 0) [(when (> c 1) (pop v)) (peek v)])))
(defn vsplit-first [v] (let [c (count v)] (when (> c 0) (let [[v1] v] [v1 (when (> c 1) (subvec v 1))]))))

(comment
  (vsplit-first [:a :b :c])
  (vsplit-last  [:a :b :c]))

(defn nnil-set [x] (disj (set* x) nil))
(defn conj-some
  ([             ] [])
  ([coll         ] coll)
  ([coll ?x      ] (if (some? ?x) (conj coll ?x) coll))
  ([coll ?x & ?xs] (reduce conj-some (conj-some coll ?x) ?xs)))

(comment [(nnil-set [:a :b nil]) (conj-some [] :a :b nil :c :d nil :e)])

(defn preserve-reduced "As `clojure.core/preserving-reduced`"
  [rf]
  (fn [acc in]
    (let [result (rf acc in)]
      (if (reduced? result)
        (reduced result)
        result))))

(declare reduce-kvs)
(defn run!     [proc coll] (reduce     #(proc %2)    nil coll) nil)
(defn run-kv!  [proc    m] (reduce-kv  #(proc %2 %3) nil    m) nil)
(defn run-kvs! [proc  kvs] (reduce-kvs #(proc %2 %3) nil  kvs) nil)

;;; Faster `reduce`-based variants:
(defn rsome      [pred coll] (reduce    (fn [acc in]  (when-let [p (pred in)]  (reduced p)))     nil coll))
(defn rsome-kv   [pred coll] (reduce-kv (fn [acc k v] (when-let [p (pred k v)] (reduced p)))     nil coll))
(defn rfirst     [pred coll] (reduce    (fn [acc in]  (when        (pred in)   (reduced in)))    nil coll))
(defn rfirst-kv  [pred coll] (reduce-kv (fn [acc k v] (when        (pred k v)  (reduced [k v]))) nil coll))
(defn revery?    [pred coll] (reduce    (fn [acc in]  (if (pred in)  true (reduced nil))) true coll))
(defn revery-kv? [pred coll] (reduce-kv (fn [acc k v] (if (pred k v) true (reduced nil))) true coll))
(defn revery     [pred coll] (reduce    (fn [acc in]  (if (pred in)  coll (reduced nil))) coll coll))
(defn revery-kv  [pred coll] (reduce-kv (fn [acc k v] (if (pred k v) coll (reduced nil))) coll coll))

(comment
  ;; Note that `(every? even? nil)` ≠ `(revery even? nil)`
  [(every? even? nil) (revery even? nil)]
  (qb 10e4
    (rsome #(when (string? %) %) [:a :b :c :d "boo"])
    (rfirst        string?       [:a :b :c :d "boo"])))

(compile-if (completing (fn [])) ; Transducers
  (defn reduce-kvs
    "Like `reduce-kv` but takes a flat sequence of kv pairs"
    [rf init kvs]
    (transduce (partition-all 2)
      (completing (fn [acc [k v]] (rf acc k v))) init kvs))

  (defn reduce-kvs [rf init kvs]
    (reduce (fn [acc [k v]] (rf acc k v)) init (partition-all 2 kvs))))

(compile-if clojure.lang.LongRange ; Clojure 1.7+ (no Cljs support yet)
  (defn reduce-n [rf init ^long n] (reduce rf init (range n)))
  (defn reduce-n [rf init ^long n]
    (loop [acc init idx 0]
      (if (== idx n)
        acc
        (let [acc (rf acc idx)]
          (if (reduced? acc)
            @acc
            (recur acc (unchecked-inc idx))))))))

(comment (reduce-n conj [] 100))

      
(defn reduce-obj "Like `reduce-kv` but for JavaScript objects"
  [f init o]
  (reduce (fn [acc k] (f acc k (gobj/get o k nil))) init (js-keys o)))

(compile-if (completing (fn [])) ; Transducers
  (defn into!
       ([to       from] (reduce          conj! to from))
       ([to xform from] (transduce xform conj! to from)))
  (defn into! [to from] (reduce          conj! to from)))

(compile-if (completing (fn [])) ; Transducers
  (defn xdistinct
    ([] (distinct)) ; clojure.core now has a distinct transducer
    ([keyfn]
     (fn [rf]
       (let [seen_ (volatile! #{})]
         (fn
           ([]    (rf))
           ([acc] (rf acc))
           ([acc input]
            (let [k (keyfn input)]
              (if (contains? @seen_ k)
                acc
                (do (vswap! seen_ conj k)
                    (rf acc input)))))))))))

(comment (into [] (xdistinct) [1 2 3 1 4 5 2 6 7 1]))

(declare ?subvec<len)
(compile-if (completing (fn [])) ; Transducers
  (defn takev [n coll] (if (vector? coll) (or (?subvec<len coll 0 n) []) (into [] (take n) coll)))
  (defn takev [n coll] (if (vector? coll) (or (?subvec<len coll 0 n) []) (vec (take n coll)))))

(defn into-all "Like `into` but supports multiple \"from\"s"
  ([to from       ]              (into to from))
  ([to from & more] (reduce into (into to from) more)))

(defn repeatedly-into
  "Like `repeatedly` but faster and `conj`s items into given collection"
  [coll ^long n f]
  (if (and (> n 10) (editable? coll))
    (persistent! (reduce-n (fn [acc _] (conj! acc (f))) (transient coll) n))
    (do          (reduce-n (fn [acc _] (conj  acc (f)))            coll  n))))

(comment (repeatedly-into [] 100 (partial rand-nth [1 2 3 4 5 6])))

;;; Note `mapv`-like nil->{} semantics
(defn map-vals       [f m] (if (nil? m) {} (reduce-kv (fn [m k v] (assoc m k (f v))) m m)))
(defn map-keys       [f m] (if (nil? m) {} (reduce-kv (fn [m k v] (assoc m (f k) v)) {} m)))
(defn filter-kvs  [pred m] (if (nil? m) {} (reduce-kv (fn [m k v] (if (pred k v) m (dissoc m k))) m m)))
(defn filter-keys [pred m] (if (nil? m) {} (reduce-kv (fn [m k v] (if (pred k)   m (dissoc m k))) m m)))
(defn filter-vals [pred m] (if (nil? m) {} (reduce-kv (fn [m k v] (if (pred v)   m (dissoc m k))) m m)))
(defn remove-vals [pred m] (filter-vals (complement pred) m))
(defn remove-keys [pred m] (filter-keys (complement pred) m))
(defn remove-kvs  [pred m] (filter-kvs  (complement pred) m))

(defn ks=      [ks m] (=             (set (keys m)) (set* ks)))
(defn ks<=     [ks m] (set/subset?   (set (keys m)) (set* ks)))
(defn ks>=     [ks m] (set/superset? (set (keys m)) (set* ks)))
(defn ks-nnil? [ks m] (revery?     #(some? (get m %))     ks))

(comment
  (ks=      {:a :A :b :B  :c :C}  #{:a :b})
  (ks<=     {:a :A :b :B  :c :C}  #{:a :b})
  (ks>=     {:a :A :b :B  :c :C}  #{:a :b})
  (ks-nnil? {:a :A :b :B  :c nil} #{:a :b})
  (ks-nnil? {:a :A :b nil :c nil} #{:a :b}))

(defn update-in*
  "Like `update-in` but faster, more flexible, and simpler (less ambiguous)"
  ;; Recall: no `korks` support due to inherent ambiguous nil ([] vs [nil])
  [m ks f]
  (if (empty? ks)
    (f m) ; Resolve [] = [nil] ambiguity in `update-in`, `assoc-in`, etc.
    (let [[k & ks] ks]
      (if ks ; Avoid apply calls:
        (assoc m k (update-in* (get m k) ks f))
        (assoc m k (f          (get m k)))))))

(defn ?subvec<idx
  "Like `subvec` but:
    - Never throws; snaps to valid start and end indexes.
    - Returns nil rather than an empty vector."
  ([v ^long start]
   (let [start (if (< start 0) 0 start)
         vlen  (count v)]
     (if (>= start vlen)
       nil
       (subvec v start vlen))))

  ([v ^long start ^long end]
   (let [start (if (< start 0) 0 start)
         vlen  (long (count v))
         end   (if (> end vlen) vlen end)]
     (if (>= start end)
       nil
       (subvec v start end)))))

(comment
  (qb 10000
    (subvec      [:a :b] 1)
    (?subvec<idx [:a :b] 1)))

(defn ?subvec<len
  "Like `?subvec<idx` but:
    - Takes `length` instead of `end` (index).
    - -ive `start` => index from right of vector."
  ([v ^long start]
   (let [vlen (count v)]
     (if (< start 0)
       (let [start (+ start vlen)
             start (if (< start 0) 0 start)]
         (subvec v start vlen))
       (if (>= start vlen)
         nil
         (subvec v start vlen)))))

  ([v ^long start ^long length]
   (if (<= length 0)
     nil
     (let [vlen (long (count v))]
       (if (< start 0)
         (let [start (+ start vlen)
               start (if (< start 0) 0 start)
               end   (+ start length)
               end   (if (> end vlen) vlen end)]
           (subvec v start end))

         (let [end (+ start length)
               end (if (> end vlen) vlen end)]
           (if (>= start end)
             nil
             (subvec v start end))))))))

(comment
  (qb 1000000
    (subvec      [:a :b :c] 1)
    (?subvec<idx [:a :b :c] 1)))

(defn top
  "Returns a sorted vector of the top n items from coll of N items in O(N.logn)
  time. (take n (sort-by ...)) is O(N.logN) time, so much slower when n << N.
  Ref. http://stevehanov.ca/blog/index.php?id=122"
  ([n           coll] (top n identity compare coll))
  ([n keyfn     coll] (top n keyfn    compare coll))
  ([n keyfn cmp coll]
   ;; TODO Real cljs impl:
          (into [] (take n) (sort-by keyfn cmp coll)) ; Requires transducers
        
                               
                                                   
                     
         
                                        
                                                
                                     
                                                                     
                               
                                                     
                                                          

                                                 
                                                              ))

(comment
  (top 0 [])
  (top 3 [])
  (top 20 [2 3 5 3 88 nil])
  (sort   [2 3 5 3 88 nil])
  (top 20 - [2 3 5 3 88])
  (let [c (repeatedly 5000 rand)]
    (qb 100 (into [] (take 2) (sort-by - c)) (top 2 - c))))

(defn contains-in? [coll ks] (contains? (get-in coll (butlast ks)) (last ks)))
(defn dissoc-in
  ([m ks dissoc-k]        (update-in* m ks (fn [m]       (dissoc m dissoc-k))))
  ([m ks dissoc-k & more] (update-in* m ks (fn [m] (apply dissoc m dissoc-k more)))))

(comment
  (dissoc-in    {:a {:b {:c :C :d :D :e :E}}} [:a :b] :c :e)
  (contains-in? {:a {:b {:c :C :d :D :e :E}}} [:a :b :c])
  (contains-in? {:a {:b {:c :C :d :D :e :E}}} [:a]))

(defn assoc-some "Assocs each kv iff its value is not nil"
  ([m k v      ] (if (nil? v) (if (nil? m) {} m) (assoc m k v)))
  ([m k v & kvs] (reduce-kvs (fn [acc k v] (assoc-some acc k v))
                   (assoc-some m k v) kvs)))

(defn assoc-when "Assocs each kv iff its val is truthy"
  ([m k v      ] (if-not v (if (nil? m) {} m) (assoc m k v)))
  ([m k v & kvs] (reduce-kvs (fn [acc k v] (assoc-when acc k v))
                   (assoc-when m k v) kvs)))

(comment (assoc-some {:a :A} :b nil :c :C :d nil :e :E))

                                                                            
       (defn ^boolean queue? [x] (instance?    cljs.core.PersistentQueue x))

(defn queue "Returns a PersistentQueue"
  ([coll] (into (queue) coll))
  ([]                                          
             cljs.core.PersistentQueue.EMPTY))

(defn queue* [& items] (queue items))

(def seq-kvs "(seq-kvs {:a :A}) => (:a :A)" (partial reduce concat))
(defn mapply "Like `apply` but calls `seq-kvs` on final arg"
  [f & args] (apply f (concat (butlast args) (seq-kvs (last args)))))

(comment [(seq-kvs {:a :A :b :B}) (mapply str 1 2 3 {:a :A})])

(defn fzipmap "Faster `zipmap` using transients"
  [ks vs]
  (loop [m  (transient {})
         ks (seq ks)
         vs (seq vs)]
    (if-not (and ks vs)
      (persistent! m)
      (recur (assoc! m (first ks) (first vs))
        (next ks)
        (next vs)))))

(comment (let [kvs (range 100)] (qb 100 (zipmap kvs kvs) (fzipmap kvs kvs))))

(defn interleave-all
  "Greedy version of `interleave`, Ref. http://goo.gl/KvzqWb"
  ([] '())
  ([c1] (lazy-seq c1))
  ([c1 c2]
     (lazy-seq
      (let [s1 (seq c1) s2 (seq c2)]
        (cond
         (and s1 s2)
         (cons (first s1) (cons (first s2)
                                (interleave-all (rest s1) (rest s2))))
         s1 s1
         s2 s2))))
  ([c1 c2 & colls]
   (lazy-seq
      (let [ss (filter identity (map seq (conj colls c2 c1)))]
        (concat (map first ss)
                (apply interleave-all (map rest ss)))))))

(comment (interleave-all [:a :b :c] [:A :B :C :D :E] [:1 :2]))

(defn vinterleave-all [c1 c2]
  (loop [v (transient []) s1 (seq c1) s2 (seq c2)]
    (cond
      (and s1 s2)
      (recur (conj! (conj! v (first s1)) (first s2)) (next s1) (next s2))
      s1    (persistent! (reduce conj! v s1))
      s2    (persistent! (reduce conj! v s2))
      :else (persistent! v))))

(comment
  (qb 10e4
    (vec (interleave-all [:a :b :c :d] [:a :b :c :d :e]))
        (vinterleave-all [:a :b :c :d] [:a :b :c :d :e])))

       (defn rcompare "Reverse comparator" [x y] (compare y x))
                                          
                                                                 
                               
                             

(defn -nested-merge-with [f maps]
  (when (rsome identity maps) ; (merge nil nil) => nil
    (reduce
      (fn [acc in]
        (reduce-kv
          (fn rf2 [acc k rv]
            (if (contains? acc k)
              (let [lv (get acc k)]
                (if (and (map? lv) (map? rv))
                  (assoc acc k (reduce-kv rf2 lv rv))
                  (if (kw-identical? rv :merge/dissoc)
                    (dissoc acc k)
                    (let [new-rv (f lv rv)]
                      (if (kw-identical? new-rv :merge/dissoc)
                        (dissoc acc k)
                        (assoc  acc k new-rv))))))
              (assoc acc k rv)))
          acc
          in))
      {}
      maps)))

(defn nested-merge-with [f & maps] (-nested-merge-with f           maps))
(defn nested-merge        [& maps] (-nested-merge-with (fn [x y] y) maps))

(comment
  (nested-merge nil nil nil) ; => nil
  (nested-merge
    {:a1 :A1 :b1 :B1  :c1 {:a2 :A2 :b2 {:a3 :A3 :b3 :B3  :d1 :D1 :e1 :E1}}}
    {        :b1 :B1* :c1 {        :b2 {        :b3 :B3* :d1 nil :e1 :merge/dissoc}}}
    nil
    {}) ; =>
  {:a1 :A1, :b1 :B1*, :c1 {:a2 :A2, :b2 {:a3 :A3, :b3 :B3*, :d1 nil}}})

;;;; Swap stuff

(defn- -platform-cas! "Minor optimization for single-threaded Cljs"
  [atom_ old-val new-val]
         (do (reset! atom_ new-val) true) ; No compare for our uses
                                                                  )

;; Fastest possible simple swap with [old new] return
(defn dswap! "Returns [<old-val> <new-val>]" [atom_ f]
         (let [ov @atom_ nv (f ov)] (reset! atom_ nv) [ov nv])
       
          
                        
                              
                                                                   
                         
                  )

;; Fastest possible simple swap with k, new-in return
(defn- -swap-cache! "Used by memoization utils" [atom_ k f]
         (let [om @atom_ nv (f (get om k)) nm (assoc om k nv)] (reset! atom_ nm) nv)
       
          
                      
                                 
                                       
                                                               
             
                  )

(defrecord Swapped [new-val return-val])
                                                         
       (defn ^boolean swapped? [x] (instance? Swapped x))
(defn  swapped  [new-val return-val] (Swapped. new-val return-val))
(defn -swapped "Returns [<new-val> <return-val>]"
  ([x] (if (swapped? x) [(:new-val x) (:return-val x)] [x x]))
  ([old-val    f] (-swapped (f old-val)))
  ([old-val ks f]
   (let [[k1 & kn] ks ; Singular k1 is common case
         m old-val]
     (if kn ; >1 ks
       (if (kw-identical? f :swap/dissoc)
         (-swapped (dissoc-in m (butlast ks) (last ks)))
         (let [old-val-in (get-in m ks)
               [new-val-in return-val] (-swapped (f old-val-in))
               new-val (if (kw-identical? new-val-in :swap/dissoc)
                         (dissoc-in m (butlast ks) (last ks))
                         (assoc-in  m ks new-val-in))]
           [new-val return-val]))

       ;; 0 or 1 ks
       (if (and (nil? k1) (empty? ks))
         (-swapped (f old-val))
         (if (kw-identical? f :swap/dissoc)
           (-swapped (dissoc m k1))
           (let [old-val-in (get m k1)
                 [new-val-in return-val] (-swapped (f old-val-in))
                 new-val (if (kw-identical? new-val-in :swap/dissoc)
                           (dissoc m k1)
                           (assoc  m k1 new-val-in))]
             [new-val return-val])))))))

(defn- -replace-in
  "Reduces input with
  [<type> <ks> <reset-val-or-swap-fn>] or
         [<ks> <reset-val-or-swap-fn>] ops"
  [?vf-type m ops]
  (reduce
    (fn [acc ?op]
      (if-not ?op ; Allow conditional ops: (when <pred> <op>), etc.
        acc
        (let [[vf-type ks valf] (if-not ?vf-type ?op (cons ?vf-type ?op))]
          (case vf-type
            :reset (if (empty? ks) valf (assoc-in acc ks valf))
            :swap  (if (nil? valf)
                     acc ; Noop, allows conditional ops
                     (if (empty? ks)
                       (valf acc)
                       ;; Currently ignore possible <return-val>:
                       (nth (-swapped acc ks valf) 0)))))))
    m ops))

(defn replace-in "For use with `swap!`, etc." [m & ops] (-replace-in nil m ops))

(comment
  (replace-in {}
    [:reset [:a] {:b :B :c 100}]
    (when false [:reset [:a :b] :B2]) ; Conditionals okay
    (do (assert true)
        [:reset [:a :b] :B3]) ; Side-effects okay
    (let [my-swap-fn inc] ; `let`s okay
      [:swap [:a :c] my-swap-fn]))

  (let [a_ (atom {})]
    (swap! a_ replace-in
      [:reset [:a]    {:b :b1 :c :c1 :d 100}]
      [:swap  [:a :d] inc]
      [:swap  [:a :b] :swap/dissoc]
      [:swap  [:a :c] (fn [_] :swap/dissoc)]))

  (let [a_ (atom [0 1 2])]
    (swap! a_ replace-in
      [:swap [0] inc]
      ;; [:swap [5] identity] ; Will throw
      [:swap [5]] nil ; Noop (no throw)
      )))

(compile-if (completing (fn [])) ; Transducers
  (defn- pairs-into [to from] (into to (partition-all 2) from))
  (defn- pairs-into [to from] (into to (partition     2  from))))

(defn swap-in!
  "More powerful version of `swap!`:
    * Supports optional `update-in` semantics.
    * Swap fn can return `(swapped <new-val> <return-val>)` rather than just
      <new-val>. This is useful when writing atomic pull fns, etc."

  ([atom_ f] ; Like `swap!` with `swapped` support
   (loop []
     (let [old-val @atom_
           [new-val return-val] (-swapped (f old-val))]
       (if (-platform-cas! atom_ old-val new-val)
         return-val
         (recur)))))

  ([atom_ ks f] ; Add `update-in` support
   (loop []
     (let [old-val @atom_
           [new-val return-val] (-swapped old-val ks f)]
       (if (-platform-cas! atom_ old-val new-val)
         return-val
         (recur)))))

  ;; Add `replace-in` support, note no way to support `swapped`
  ([atom_ ks f & more] {:pre [(have? even? (count more))]}
   (let [op-pairs (pairs-into [[ks f]] more)]
     (loop []
       (let [old-val @atom_
             new-val (-replace-in :swap old-val op-pairs)]
         (if (-platform-cas! atom_ old-val new-val)
           [old-val new-val]
           (recur)))))))

(defn reset-in! "Is to `reset!` as `swap-in!` is to `swap!`"
  ([atom_ ks new-val]
   (if (empty? ks)
     (reset! atom_ new-val)
     ;; Actually need swap! (CAS) to preserve other keys:
     (swap!  atom_ (fn [old-val] (assoc-in old-val ks new-val)))))

  ([atom_ ks new-val & more] {:pre [(have? even? (count more))]}
   (let [op-pairs (pairs-into [[ks new-val]] more)]
     (loop []
       (let [old-val @atom_
             new-val (-replace-in :reset old-val op-pairs)]
         (if (-platform-cas! atom_ old-val new-val)
           [old-val new-val]
           (recur)))))))

(comment
  ;;; update-in, `swapped`
  (let [a_ (atom {:a :A :b :B})] ; Returns new-val (default)
    [(swap-in! a_ [] (fn [m] (assoc m :c :C))) @a_])
  (let [a_ (atom {:a :A :b :B})] ; Returns old-val
    [(swap-in! a_ [] (fn [m] (swapped (assoc m :c :C) m))) @a_])
  (let [a_ (atom {:a {:b :B}})] ; Returns new-val-in (default)
    [(swap-in! a_ [:a] (fn [m] (assoc m :c :C))) @a_])
  (let [a_ (atom {:a {:b :B}})] ; Returns old-val-in
    [(swap-in! a_ [:a] (fn [m] (swapped (assoc m :c :C) m))) @a_])
  (let [a_ (atom {:a {:b 100}})] (swap-in! a_ [:a :b] inc)) ; => 101

  (let [a_ (atom {:a {:b :b1 :c :c1} :d :d1})]
    (swap-in! a_ [:a :c] :swap/dissoc) @a_)

  ;;; Bulk atomic updates
  (let [a_ (atom {})]
    (swap-in! a_
      []      (constantly {:a {:b :b1 :c :c1 :d 100}})
      [:a :b] (constantly :b2)
      ;; [:a] #(dissoc % :c)
      ;; [:a :c] :swap/dissoc
      [:a :c] (fn [_] :swap/dissoc)
      [:a :d] inc))

  (let [a_ (atom {})]
    (reset-in! a_
      []      {:a {:b :b1 :c :c1 :d 100}}
      [:a :b] :b2
      [:a :d] inc)))

;;;; Strings

                                                                              
       (defn ^boolean str-builder? [x] (instance? goog.string.StringBuffer x))

(def str-builder "For cross-platform string building"
                                                       
                                                                      
         (fn ([]       (goog.string.StringBuffer.))
            ([s-init] (goog.string.StringBuffer. s-init))))

(defn sb-append "For cross-platform string building"
                                                                                        
         (               [               str-builder         s] (.append str-builder s))
  ([str-builder s & more]
   (sb-append str-builder s)
   (reduce (fn [acc in] (sb-append acc in)) str-builder more)))

(comment (str (sb-append (str-builder "foo") "bar")))

(def str-rf "String builder reducing fn"
  (fn
    ([]       (str-builder))
    ([acc]               (if (str-builder? acc) acc (str-builder (str acc)))) ; cf
    ([acc in] (sb-append (if (str-builder? acc) acc (str-builder (str acc))) (str in)))))

(comment
  (qb 1000 ; [358.45 34.6]
         (reduce str    (range 512))
    (str (reduce str-rf (range 512)))))

       (defn undefined->nil [x] (if (undefined? x) nil x))
(defn nil->str [x]
                              
         (if (or (undefined? x) (nil? x)) "nil" x))

(compile-if (completing (fn [])) ; Transducers
  (defn str-join
    "Faster, transducer-based generalization of `clojure.string/join` with `xform`
    support"
    ([                coll] (str-join nil       nil coll))
    ([separator       coll] (str-join separator nil coll))
    ([separator xform coll]
     (if (and separator (not= separator ""))
       (let [sep-xform (interpose separator)
             str-rf*   (completing str-rf str)]
         (if xform
           (transduce (comp xform sep-xform) str-rf* coll)
           (transduce             sep-xform  str-rf* coll)))
       (if xform
         (transduce xform (completing str-rf str) coll)
         (str (reduce str-rf coll)))))))

(comment
  (qb 100000
    (str/join "," ["a" "b" "c" "d"])
    (str-join "," ["a" "b" "c" "d"])
    (str-join ""  ["a" "b" "c" "d"])) ; [29.37 23.63 13.34]
  (str-join "," (comp (filter #{"a" "c"}) (map str/upper-case)) ["a" "b" "c"]))

(defn format*
                          
                [fmt args]
  (let [fmt  (or fmt "") ; Prevent NPE
        args (mapv nil->str args)]
                                              
    ;; Removed from cljs.core 0.0-1885, Ref. http://goo.gl/su7Xkj (pulls in a
    ;; lot of Google Closure that's not v. friendly to dead code elimination):
           (apply gstr/format fmt args)))

(defn format
  "Like `core/format` but:
    * Returns \"\" when fmt is nil rather than throwing an NPE
    * Formats nil as \"nil\" rather than \"null\"
    * Provides ClojureScript support via goog.string.format (this has fewer
      formatting options than Clojure's `format`!)"
  [fmt & args] (format* fmt args))

(defn str-replace
  "Workaround for http://dev.clojure.org/jira/browse/CLJS-794,
                  http://dev.clojure.org/jira/browse/CLJS-911.

  Note that ClojureScript 1.7.145 technically introduced a breaking \"fix\" for
  CLJS-911 (Ref. https://goo.gl/bk5hcT) but it's a mess in an attempt to keep
  some compatibility with the previous broken behaviour. The merged CLJS-911 fix
  provides only inconsistent (single-match) and error-prone compatibility with
  Clojure's `str/replace`. CLJS-794 is also still unresolved.

  This util provides behaviour consistent between Clojure/Script."

  [s match replacement]
                                         
        
  (cond
    (string? match) ; string -> string replacement
    (.replace s (js/RegExp. (gstr/regExpEscape match) "g") replacement)
    ;; (.hasOwnProperty match "source") ; No! Ref. http://goo.gl/8hdqxb

    (instance? js/RegExp match) ; pattern -> string/fn replacement
    (let [flags (str "g" (when (.-ignoreCase match) "i")
                         (when (.-multiline  match) "m")) ; Fix CLJS-794
          replacement ; Fix CLJS-911
          (if (string? replacement)
            replacement
            ;; Note that the merged CLJS-911 fix actually tries to vary
            ;; behaviour here based on the number of matches(!)
            (fn [& args] (replacement (vec args))))]
      (.replace s (js/RegExp. (.-source match) flags) replacement))
    :else (throw (str "Invalid match arg: " match))))

(defn str-contains? [s substr]
                                             
         (not= -1 (.indexOf s substr)))

(defn str-starts-with? [s substr]
                                               
         (zero? (.indexOf s substr)))

(defn str-ends-with? [s substr]
                                             
         (let [s-len      (.-length s)
               substr-len (.-length substr)]
           (when (>= s-len substr-len)
             (not= -1 (.indexOf s substr (- s-len substr-len))))))

(defn str-?index
  ([s substr          ] (str-?index s substr 0         false))
  ([s substr start-idx] (str-?index s substr start-idx false))
  ([s substr start-idx last?]
   (let [result
         (if last?
                                                                         
                  (.lastIndexOf         s         substr       start-idx)
                                                                         
                  (.indexOf             s         substr       start-idx))]

     (when (not= result -1) result))))

(comment (qb 1000 (str-?index "hello there" "there")))

(defn ?substr<idx
  "Like `subs` but provides consistent clj/s behaviour:
    - Never throws; snaps to valid start and end indexes.
    - Returns nil rather than an empty string."
  ([s ^long start]
          (as-?nempty-str (.substring s start))
        
                                       
                                   
                        
          
                                          )

  ([s ^long start ^long end]
          (if (>= start end) nil (.substring s start end))
        
                                       
                                         
                                          
                       
          
                                         ))

(comment
  (?substr<idx "foo" 1)
  (?substr<idx "hello world" -10)
  (?substr<idx "hello world" 100)
  (?substr<idx "hello world" -10 100)
  (?substr<idx "hello world" 100 -10)
  (qb 100000
    (subs "hello world" 0 11)
    (?substr<idx "hello world" -10 100)))

(defn ?substr<len
  "Like `?substr<idx` but:
    - Takes `length` instead of `end` (index).
    - -ive `start` => index from right of string."
  ([s ^long start]
          (as-?nempty-str (.substr s start))
        
                                  
                    
                                 
                                            
                                           
                          
            
                                             )

  ([s ^long start ^long length]
          (as-?nempty-str (.substr s start length))
        
                    
        
                                           
                      
                                   
                                             
                                     
                                                
                                            

                                   
                                              
                             
                
                                                  ))

(comment
  (?substr<len "hello world" -8)
  (?substr<len "hello world" -8 2)
  (?substr<len "hello world" 2 2))

(do
  ;; Back-compatible volatiles, private for now
  ;; Note: benching seems to consistently show that atoms are actually no
  ;; slower than volatiles when used in the same way (i.e. w/o contention
  ;; or watches)?
  (compile-if (volatile! nil)
    (do
                                                                  
                                                                  
                                                                       )
    (do
                                                                 
                                                                 
                                                                      )))

(defn str-join-once "Like `string/join` but skips duplicate separators"
  [separator coll]
  (let [sep separator]
    (if (str/blank? sep)
      (str (reduce str-rf "" coll))
      (let [acc-ends-with-sep?_ (-vol! false)
            acc-empty?_         (-vol! true)]
        (str
          (reduce
            (fn [acc in]
              (let [in (str in)
                    in-empty? (= in "")
                    in-starts-with-sep? (str-starts-with? in sep)
                    in-ends-with-sep?   (str-ends-with?   in sep)
                    acc-ends-with-sep?  @acc-ends-with-sep?_
                    acc-empty?          @acc-empty?_]

                (-vol-reset! acc-ends-with-sep?_ in-ends-with-sep?)
                (when acc-empty? (-vol-reset! acc-empty?_ in-empty?))

                (if acc-ends-with-sep?
                  (if in-starts-with-sep?
                    (sb-append acc (.substring in 1))
                    (sb-append acc in))

                  (if in-starts-with-sep?
                    (sb-append acc in)
                    (if (or acc-empty? in-empty?)
                      (sb-append acc in)
                      (do (sb-append acc sep)
                          (sb-append acc in)))))))
            (str-builder)
            coll))))))

(defn path [& parts] (str-join-once "/" parts))

(comment (path "foo/" nil "/bar" "baz/" "/qux/"))

(defn norm-word-breaks
  "Converts all word breaks of any form and length (including line breaks of any
  form, tabs, spaces, etc.) to a single regular space"
  [s] (str/replace (str s) #"\s+" \space))

(defn count-words [s] (if (str/blank? s) 0 (count (str/split s #"\s+"))))
(comment (count-words "Hello this is a    test"))

(defn uuid-str
  "Returns a UUIDv4 string of form \"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx\",
  Ref. http://www.ietf.org/rfc/rfc4122.txt,
       https://gist.github.com/franks42/4159427"
  ([max-length] (?substr<len (uuid-str) 0 max-length))
  ([]
                                          
         
   (let [hex  (fn [] (.toString (rand-int 16) 16))
         rhex (.toString (bit-or 0x8 (bit-and 0x3 (rand-int 16))) 16)]
     (str (hex) (hex) (hex) (hex)
          (hex) (hex) (hex) (hex) "-"
          (hex) (hex) (hex) (hex) "-"
          "4"   (hex) (hex) (hex) "-"
          rhex  (hex) (hex) (hex) "-"
          (hex) (hex) (hex) (hex)
          (hex) (hex) (hex) (hex)
          (hex) (hex) (hex) (hex)))))

(comment (uuid-str 5))

;;;; Env

                    
                  
                         
                                                                    
                                                                   
                                               
                             
                        

(comment [(let [x :x] (get-env)) ((fn [^long x] (get-env)) 0)])

;;;; IO

     
                      
                             
                               

                                                                           

     
                    
                                                                               
         
                                   
                              
                           
                                                                        
                                          

     
                                      
                                                                              
                     
         
                                                                            
                                        

     
                             
                                                                            
                  
                                                           
                                           
                                                                       
                        
                                                                      
                                                                
                                                
                                                                                  

     
                        
                                                                            
                                                     
                         
               
                                                                   
              
                                  
                                                   
                                        
                                           
                                                              
                                                                 

(comment (slurp-file-resource "log4j.properties"))

;;;; Memoization

(defn memoize_
  "Like `core/memoize` but avoids write races, supports invalidation"
  [f]

  ;; (let [cache_ (atom {})]
  ;;   (fn [& xs]
  ;;     (let [x1 (first xs)]
  ;;       (cond
  ;;         (kw-identical? x1 :mem/del)
  ;;         (let [xn (next  xs)
  ;;               x2 (first xn)]
  ;;           (if (kw-identical? x2 :mem/all)
  ;;             (reset! cache_ {})
  ;;             (swap!  cache_ dissoc xn))
  ;;           nil)

  ;;         (kw-identical? x1 :mem/fresh)
  ;;         @(let [xn (next xs)
  ;;                dv (delay (apply f xn))] (swap! cache_ assoc xn dv) dv)

  ;;         :else
  ;;         @(or
  ;;            (get @cache_ xs)
  ;;            (-swap-cache! cache_ xs
  ;;              (fn [?dv] (or ?dv (delay (apply f xs))))))))))

        
  (let [cache_ (volatile! {})]
    (fn [& xs]
      (let [get-sentinel (js-obj)
            x1 (first xs)]

        (cond
          (kw-identical? x1 :mem/del)
          (let [xn (next  xs)
                x2 (first xn)]
            (if (kw-identical? x2 :mem/all)
              (vreset! cache_ {})
              (vswap!  cache_ dissoc xn))
            nil)

          (kw-identical? x1 :mem/fresh)
          (let [xn (next xs)
                v  (apply f xn)] (vswap! cache_ assoc xn v) v)

          :else
          (let [v (get @cache_ xs get-sentinel)]
            (if (identical? v get-sentinel)
              (let [v (apply f xs)] (vswap! cache_ assoc xs v) v)
              v))))))

       
                              
                                                         

       
                                          
                                     
                                                                  

             
                           

             
                                     
                             
                              
                                           
                              
                                                    
                

                                       
                             
                                                                                   

               
                               
                                             
                                                           )

(comment
  (do
    (def foo (memoize_ (fn [& args] [(rand) args])))
    (def f0  (memoize  (fn [])))
    (def f0_ (memoize_ (fn [])))
    (def f1  (memoize  (fn [x] x)))
    (def f1_ (memoize_ (fn [x] x))))

  (qb 100000 (f0   ) (f0_   )) ; [ 5.53  4.85]
  (qb 100000 (f1 :x) (f1_ :x)) ; [23.99 17.56]
  )

(defn memoize-last
  "Great for Reactjs render op caching on mobile devices, etc."
  [f]
  (let [cache_ (atom {})]
    (fn [& args]
      @(or (get @cache_ args)
           (get (swap! cache_
                  (fn [cache]
                    (if (get cache args)
                      cache
                      {args (delay (apply f args))})))
             args)))))

(def ^:private ^:const gc-rate (/ 1.0 16000))
(defn gc-now? [] (<= ^double (rand) gc-rate))

(defn memoize*
  "Like `core/memoize` but:
    * Often faster, depends on opts
    * Prevents race conditions on writes
    * Supports auto invalidation & gc with `ttl-ms` opt
    * Supports cache size limit & gc with `cache-size` opt
    * Supports invalidation by prepending args with `:mem/del` or `:mem/fresh`"

  ([f] (memoize_ f)) ; De-raced, commands

  ;; De-raced, commands, ttl, gc
  ([ttl-ms f]
   (have? pos-int? ttl-ms)
   (let [cache_       (atom {}) ; {<args> <[delay-val udt :as cache-val]>}
         gc-running?_ (atom false)
         ttl-ms       (long ttl-ms)
         gc-fn
         (fn []
           (when (and (gc-now?)
                      (swap-in! gc-running?_ [] (fn [b] (swapped true (not b)))))
             (let [instant (now-udt)
                   snapshot @cache_ ; NON-atomic gc actually preferable
                   ks-to-gc
                   (persistent!
                     (reduce-kv
                       (fn [acc k [dv ^long udt :as cv]]
                         (if (> (- instant udt) ttl-ms)
                           (conj! acc k)
                           acc))
                       (transient [])
                       snapshot))]

               ;; TODO Lock writes here?

               (swap! cache_
                 (fn [m]
                   (persistent!
                     (reduce (fn [acc in] (dissoc! acc in))
                       (transient m) ks-to-gc))))

               (reset! gc-running?_ false))))]

     (fn [& args]
       (let [a1 (first args)]
         (cond
           (kw-identical? a1 :mem/del)
           (let [argn (next  args)
                 a2   (first argn)]
             (if (kw-identical? a2 :mem/all)
               (reset! cache_ {})
               (swap!  cache_ dissoc argn))
             nil)

          :else
          (do
            (gc-fn)
            (let [fresh?  (kw-identical? a1 :mem/fresh)
                  args    (if fresh? (next args) args)
                  instant (now-udt)
                  [dv]    (-swap-cache! cache_ args
                            (fn [?cv]
                              (if (and ?cv (not fresh?)
                                    (let [[_dv ^long udt] ?cv]
                                      (< (- instant udt) ttl-ms)))
                                ?cv
                                [(delay (apply f args)) instant])))]
              @dv)))))))

  ;; De-raced, commands, ttl, gc, max-size
  ([cache-size ttl-ms f]
   (have? [:or nil? pos-int?] ttl-ms)
   (have? pos-int? cache-size)
   (let [;; {:tick _ <args> <[dval ?udt tick-lru tick-lfu :as cval]>}:
         state_       (atom {:tick 0})
         gc-running?_ (atom false)
         ttl-ms?      (not (nil? ttl-ms))
         ttl-ms       (long (or ttl-ms 0))
         cache-size   (long cache-size)
         gc-fn
         (fn []
           (when (and (gc-now?)
                      (swap-in! gc-running?_ [] (fn [b] (swapped true (not b)))))

             (let [instant (now-udt)]

               (when ttl-ms? ; First prune expired stuff
                 (let [snapshot (dissoc @state_ :tick)
                       ks-to-gc
                       (persistent!
                         (reduce-kv
                           (fn [acc k [dv ^long udt _ _ :as cv]]
                             (if (> (- instant udt) ttl-ms)
                               (conj! acc k)
                               acc))
                           (transient [])
                           snapshot))]

                   ;; TODO Lock writes here?

                   (swap! state_
                     (fn [m]
                       (persistent!
                         (reduce (fn [acc in] (dissoc! acc in))
                           (transient m) ks-to-gc))))))

               ;; Then prune by ascending (worst) tick-sum:
               (let [snapshot (dissoc @state_ :tick)
                     n-to-gc  (- (count snapshot) cache-size)]

                 (when (> n-to-gc 64) ; Tradeoff between sort cost + write contention
                   (let [ks-to-gc
                         (top n-to-gc
                           (fn [k]
                             (let [[_ _ ^long tick-lru ^long tick-lfu] (snapshot k)]
                               (+ tick-lru tick-lfu)))
                           (keys snapshot))]

                     ;; TODO Lock writes here?

                     ;; (println (str "ks-to-gc: " ks-to-gc)) ; Debug
                     (swap! state_
                       (fn [m]
                         (persistent!
                           (reduce (fn [acc in] (dissoc! acc in))
                             (transient m) ks-to-gc)))))))

               (reset! gc-running?_ false))))

         cv-fn
         (if-not ttl-ms?
           (fn [args fresh? tick]
             (-swap-cache! state_ args
               (fn [?cv]
                 (if (and ?cv (not fresh?))
                   ?cv
                   [(delay (apply f args)) nil tick 1]))))

           (fn [args fresh? tick]
             (let [instant (now-udt)]
               (-swap-cache! state_ args
                 (fn [?cv]
                   (if (and ?cv (not fresh?)
                         (let [[_dv ^long udt] ?cv]
                           (< (- instant udt) ttl-ms)))
                     ?cv
                     [(delay (apply f args)) instant tick 1]))))))]

     (fn [& args]
       (let [a1 (first args)]
         (cond
           (kw-identical? a1 :mem/del)
           (let [argn (next args)
                 a2   (first argn)]
             (if (kw-identical? a2 :mem/all)
               (reset! state_ {:tick 0})
               (swap!  state_ dissoc argn))
             nil)
           :else
           (do
             (gc-fn)
             (let [fresh?     (kw-identical? a1 :mem/fresh)
                   args       (if fresh? (next args) args)
                   ^long tick (:tick @state_) ; Atomic sync unimportant
                   [dv]       (cv-fn args fresh? tick)]

               ;; We always adjust counters, even on reads:
               (swap! state_
                 (fn [m]
                   (if-let [[dv ?udt tick-lru ^long tick-lfu :as cv] (get m args)]
                     (assoc m :tick (inc tick) args [dv ?udt tick (inc tick-lfu)])
                     (assoc m :tick (inc tick)))))
               @dv))))))))

(comment
  (do
    (def f0 (memoize         (fn [& [x]] (if x x (Thread/sleep 600)))))
    (def f1 (memoize*        (fn [& [x]] (if x x (Thread/sleep 600)))))
    (def f2 (memoize* 5000   (fn [& [x]] (if x x (Thread/sleep 600)))))
    (def f3 (memoize* 2 nil  (fn [& [x]] (if x x (Thread/sleep 600)))))
    (def f4 (memoize* 2 5000 (fn [& [x]] (if x x (Thread/sleep 600))))))

  (qb 10000 (f0 :x) (f1 :x) (f2 :x) (f3 :x) (f4 :x))
  ;; [1.96 1.68 5.61 13.03 13.72]

  (f1)
  (f1 :mem/del)
  (f1 :mem/fresh)

  ;; For testing, these need GC set to -always- run
  (f3 "a")
  (f3 "b")
  (f3 "c")
  (f3 "d")

  (println "--")
  (let [f0 (memoize  (fn [] (Thread/sleep 5) (println "compute0")))]
    (dotimes [_ 500] (future (f0)))) ; Prints many
  (let [f1 (memoize* (fn [] (Thread/sleep 5) (println "compute1")))]
    (dotimes [_ 500] (future (f1)))) ; NEVER prints >1
  (let [f4 (memoize* 2 5000 (fn [] (Thread/sleep 5) (println "compute1")))]
    (dotimes [_ 10] (future (f4)))))

;;;;

(defn rate-limiter* ; `rate-limiter` name taken by deprecated API
  "Takes one or more rate specs of form [ncalls-limit window-ms ?spec-id] and
  returns a (fn [& [req-id])) that returns `nil` (=> all rate limits passed), or
  [<ms-wait> <worst-offending-spec-id>] / <ms-wait>."
  [specs]
  (if (empty? specs)
    (constantly nil)
    (let [vspecs      (vec specs)
          vstates_    (atom {}) ; {<req-id> [[ncalls udt-window-start] <...>]}
          max-win-ms  (long (reduce max 0 (mapv (fn [[_ win-ms _ :as spec]] win-ms)
                                            vspecs)))
          nspecs      (count vspecs)
          nid-specs   (count (filterv (fn [[_ _ id]] id) vspecs))
          _           (assert (or (zero? nid-specs) (= nid-specs nspecs)))
          return-ids? (not (zero? nid-specs))]

      (fn check-rate-limits [& [?a1 ?a2]]
        (cond
          (kw-identical? ?a1 :rl/debug) vstates_
          (kw-identical? ?a1 :rl/reset)
          (do
            (if (kw-identical? ?a2 :rl/all)
              (reset! vstates_ {})
              (swap!  vstates_ dissoc ?a2))
            nil)

          :else
          (let [peek?   (kw-identical? ?a1 :rl/peek)
                req-id  (if peek? ?a2 ?a1)
                instant (now-udt)]

            (when (and req-id (gc-now?))
              (swap-in! vstates_ []
                (fn gc [m]
                  (reduce-kv
                    (fn [m* req-id vstate]
                      (let [^long max-udt-win-start
                            (reduce (fn [^long acc [_ ^long udt _]]
                                      (max acc udt))
                              0 vstate)
                            min-win-ms-elapsed (- instant max-udt-win-start)]
                        (if (> min-win-ms-elapsed max-win-ms)
                          (dissoc m* req-id)
                          m*)))
                    m m))))

            (swap-in! vstates_ [req-id]
              (fn [?vstate]
                (if-not ?vstate
                  (if peek?
                    (swapped ?vstate nil)
                    (swapped (vec (repeat nspecs [1 instant])) nil))

                  ;; Need to atomically check if all limits pass before committing
                  ;; to any ncall increments:
                  (let [[vstate-with-resets ?worst-limit-offence]
                        (loop [in-vspecs  vspecs
                               in-vstate  ?vstate
                               out-vstate []
                               ?worst-limit-offence nil]
                          (let [[[^long ncalls-limit ^long win-ms ?spec-id]
                                 & next-in-vspecs] in-vspecs
                                [[^long ncalls ^long udt-win-start]
                                 & next-in-vstate] in-vstate

                                win-ms-elapsed (- instant udt-win-start)
                                reset-due?     (>= win-ms-elapsed win-ms)
                                rate-limited?  (and (not reset-due?)
                                                    (>= ncalls ncalls-limit))
                                new-out-vstate ; No ncall increments yet:
                                (conj out-vstate
                                  (if reset-due? [0 instant] [ncalls udt-win-start]))

                                new-?worst-limit-offence
                                (if-not rate-limited?
                                  ?worst-limit-offence
                                  (let [ms-wait (- win-ms win-ms-elapsed)]
                                    (if (or (nil? ?worst-limit-offence)
                                            (let [[^long max-ms-wait _] ?worst-limit-offence]
                                              (> ms-wait max-ms-wait)))
                                      [ms-wait ?spec-id]
                                      ?worst-limit-offence)))]

                            (if-not next-in-vspecs
                              [new-out-vstate new-?worst-limit-offence]
                              (recur next-in-vspecs next-in-vstate new-out-vstate
                                     new-?worst-limit-offence))))

                        all-limits-pass? (nil? ?worst-limit-offence)
                        new-vstate
                        (cond
                          peek? ?vstate
                          (not all-limits-pass?) vstate-with-resets
                          :else
                          (mapv (fn [[^long ncalls udt-win-start]]
                                  [(inc ncalls) udt-win-start])
                            vstate-with-resets))

                        result
                        (when-let [wlo ?worst-limit-offence]
                          (if return-ids?
                            wlo
                            (let [[ms-wait _] wlo] ms-wait)))]

                    (swapped new-vstate result)))))))))))

(comment
  (def rl (rate-limiter* [[5 2000 :5s] [10 20000 :20s]]))
  (def rl (rate-limiter* [[5 2000    ] [10 10000     ]]))
  (def rl (rate-limiter* [[5 2000 :5s]]))
  (repeatedly 5 (fn [] (rl :rid1)))
  (rl :rid1)
  (rl :rl/peek :rid1)
  (rl :rid2)
  (qb 10000 (rl)))

(defn rate-limit [specs f]
  (let [rl (rate-limiter* specs)]
    (fn [& args]
      (if-let [backoff (rl)]
        [nil backoff]
        [(f) nil]))))

(comment
  (def compute (rate-limit [[3 5000 :5s]] (fn [] "Compute!")))
  (compute))

;;;; Async

     
                 
                                                  
       
                                                                         
                                                                          
                                                                    
                                      
           
                                                
                                                        
               
               
                                                                               
                 
                
                 
                                     
                                      
                

          
                                              
                                    

                                     
                                             
                                 
                      

                                       
                                           
                    
                         

(comment
  (time
    (let [fp (future-pool 2)]
      [(fp (fn [] (Thread/sleep 2000) (println "2000")))
       (fp (fn [] (Thread/sleep 500)  (println "500")))
       (fp 200 "timeout" (fn [] (Thread/sleep 900) (println "900")))
       (fp (fn [] (Thread/sleep 3000) (println "3000")))
       (fp)])))

;;;;

     
                                  
                                                
           
                                 
                   
                         
                                                 
                                                    
                      

                  
                                                   
                                       
                     

                    
                                                     
                                         
                                               
                                            
                           

                           
                                     
                          
                                                                    
                                                       
                                                                 
                     

;;;; Benchmarking

                                                 
      
(def nano-time
  ;; 1ms = 10^6ns
  ;; Uses **window context** as epoch!, Ref. http://goo.gl/mWZWnR
  (if-let [perf (and (oget js-?win "performance"))]
    ;; Ref. http://goo.gl/fn84us
    (if-let [f (or (oget perf "now")  (oget perf "mozNow") (oget perf "msNow")
                   (oget perf "oNow") (oget perf "webkitNow"))]
      ;; JS call returns millisecs double, accurate to 1/1000th of a ms:
      (fn [] (long (* 1e6 (.call f perf))))
      (fn [] (* 1e6 (now-udt))))
    (fn [] (* 1e6 (now-udt)))))

                                                                 

                                                                           
                                                           

                                                                          
                                                               

                                                                                  
                                                                                       
               
                       
                                           
                                                                 
                                                        
             
                                                                          
                                                                              
                                                                             
                                                             
                            
                                                  
                                                                         
                  

                                                 ; Alias
                                                 ; Alias (deprecated)

(comment
  (qb 4      (Thread/sleep 100))
  (qb [4 10] (Thread/sleep 100))
  (qb 1e5 (first [1 2 3 4 5]) (nth [1 2 3 4 5] 0)))

     
                                                                                  
                                                                
                                     
                                          
                                     
                  
                            
                                             
                                                      
                      
                                                          
                                                                                     
                                           
                                                     
                      
                                                       
           

                                          
                                               

;;;; Browser stuff

      
(do ; Trivial client-side logging stuff
  (declare spaced-str-with-nils)
  (def ^:private console-log
    (if-let [f (and (exists? js/console) (.-log js/console))]
      (fn [xs] (.apply f js/console (into-array xs)))
      (fn [xs] nil)))

  (defn log  [& xs]     (console-log xs)) ; Raw args
  (defn logp [& xs]     (console-log [(spaced-str-with-nils xs)]))
  (defn logf [fmt & xs] (console-log [(format* fmt xs)]))
  (defn sayp [    & xs] (js/alert (spaced-str-with-nils  xs)))
  (defn sayf [fmt & xs] (js/alert (format* fmt xs))))

      
(defn get-win-loc
  "Returns `js/window`'s current location as a map"
  []
  (when-let [js-win js-?win]
    (when-let [loc (.-location js-win)]
      {;; Ref. http://bl.ocks.org/abernier/3070589
       :href     (.-href     loc) ; "http://www.example.org:80/foo/bar?q=baz#bang"
       :protocol (.-protocol loc) ; "http:" ; Note the :
       :hostname (.-hostname loc) ; "example.org"
       :host     (.-host     loc) ; "example.org:80"
       :pathname (.-pathname loc) ; "/foo/bar"
       :search   (.-search   loc) ; "?q=baz"
       :hash     (.-hash     loc) ; "#bang"
       })))

       (def ^:private xhr-pool_ (delay (goog.net.XhrIoPool.)))
      
(defn- get-pooled-xhr!
  "Returns an immediately available XhrIo instance, or nil. The instance must be
  released back to pool manually."
  []
  (let [result (.getObject @xhr-pool_)]
    (when-not (undefined? result) result)))

      
(defn- coerce-xhr-params "[uri method get-or-post-params] -> [uri post-content]"
  [uri method params] {:pre [(have? [:or nil? map?] params)]}
  (let [?pstr ; URL-encoded string, or nil
        (when (seq params)
          (let [s (-> params clj->js gstructs/Map. gquery-data/createFromMap
                      .toString)]
            (when-not (str/blank? s) s)))]
    (case method
      :get  [(if ?pstr (str uri "?" ?pstr) uri) nil]
      :post [uri ?pstr]
      :put  [uri ?pstr])))

      
(defn ajax-lite
  "Alpha - subject to change.
  Simple+lightweight Ajax via Google Closure. Returns nil, or the xhr instance.
  Ref. https://developers.google.com/closure/library/docs/xhrio.

  (ajax-lite \"/my-post-route\"
    {:method     :post
     :params     {:username \"Rich Hickey\"
                  :type     \"Awesome\"}
     :headers    {\"Foo\" \"Bar\"}
     :resp-type  :text
     :timeout-ms 7000
     :with-credentials? false ; Enable if using CORS (requires xhr v2+)
    }
    (fn async-callback [resp-map]
      (let [{:keys [success? ?status ?error ?content ?content-type]} resp-map]
        ;; ?status  - 200, 404, ..., or nil on no response
        ;; ?error   - e/o #{:xhr-pool-depleted :exception :http-error :abort
        ;;                  :timeout :no-content <http-error-status> nil}
        (js/alert (str \"Ajax response: \" resp-map)))))"
  ;; TODO Ajax file params support
  [uri {:keys [method params headers timeout-ms resp-type with-credentials?
               progress-fn ; Undocumented, experimental
               errorf] :as opts
        :or   {method :get timeout-ms 10000 resp-type :auto
               errorf logf}}
   callback]
  {:pre [(have? [:or nil? nat-int?] timeout-ms)]}
  (if-let [xhr (get-pooled-xhr!)]
    (try
      (let [timeout-ms (or (:timeout opts) timeout-ms) ; Deprecated opt
            method*    (case method :get "GET" :post "POST" :put "PUT")
            params     (map-keys name params)
            headers    (merge {"X-Requested-With" "XMLHTTPRequest"}
                         (map-keys name headers))
            ;;
            [uri* post-content*] (coerce-xhr-params uri method params)
            headers*
            (clj->js
             (if-not post-content* headers
               (assoc headers "Content-Type"
                 "application/x-www-form-urlencoded; charset=UTF-8")))]

        (doto xhr
          (gevents/listenOnce goog.net.EventType/READY
            (fn [_] (.releaseObject @xhr-pool_ xhr)))

          (gevents/listenOnce goog.net.EventType/COMPLETE
            (fn wrapped-callback [resp]
              (let [status        (.getStatus xhr) ; -1 when no resp
                    ;; e/o #{200 201 202 204 206 304 1223},
                    ;; Ref. http://goo.gl/6qcVp0:
                    success?      (.isSuccess xhr)
                    ?http-status  (when (not= status -1) status)
                    ?content-type (when ?http-status
                                    (.getResponseHeader xhr "Content-Type"))
                    ?content
                    (when ?http-status
                      (let [resp-type
                            (if-not (= resp-type :auto) resp-type
                              (condp #(str-contains? %2 %1)
                                  (str ?content-type) ; Prevent nil
                                "/edn"  :edn
                                "/json" :json
                                "/xml"  :xml
                                "/html" :text ; :xml only for text/xml!
                                :text))]
                        (try
                          (case resp-type
                            :text (.getResponseText xhr)
                            :json (.getResponseJson xhr)
                            :xml  (.getResponseXml  xhr)
                            :edn  (read-edn (.getResponseText xhr)))
                          ;; NB Temp workaround for http://goo.gl/UW7773:
                          (catch js/Error #_:default e
                            ;; Undocumented, subject to change:
                            {:ajax/bad-response-type resp-type
                             :ajax/resp-as-text (.getResponseText xhr)}))))

                    cb-arg
                    {;;; Raw stuff
                     :raw-resp resp
                     :xhr      xhr ; = (.-target resp)
                     ;;;
                     :success? success?
                     :?content-type (when ?http-status ?content-type)
                     :?content ?content
                     :?status  ?http-status
                     :?error
                     (or
                       (if ?http-status
                         ;; TODO `let` here is temporary workaround to suppress
                         ;; spurious Cljs warnings:
                         (let [^number n ?http-status]
                           (when-not success? ; (<= 200 n 299)
                             ?http-status))
                         (get { ;; goog.net.ErrorCode/NO_ERROR nil
                               goog.net.ErrorCode/EXCEPTION  :exception
                               goog.net.ErrorCode/HTTP_ERROR :http-error
                               goog.net.ErrorCode/ABORT      :abort
                               goog.net.ErrorCode/TIMEOUT    :timeout}
                           (.getLastErrorCode xhr) :unknown))
                       (when (and (nil? ?content)
                                  (not (#{204 1223} ?http-status)))
                         ;; Seems reasonable?:
                         :no-content))}]
                (callback cb-arg)))))

        ;; Experimental
        (when-let [pf progress-fn]
          (gevents/listen xhr goog.net.EventType/PROGRESS
            (fn [ev]
              (let [length-computable? (.-lengthComputable ev)
                    loaded (.-loaded ev)
                    total  (.-total  ev)
                    ?ratio (when (and length-computable?
                                      (not= total 0))
                             (/ loaded total))]
                (pf
                  {:?ratio ?ratio
                   :length-computable? length-computable?
                   :loaded loaded
                   :total  total
                   :ev     ev})))))

        (enc-macros/doto-cond [x xhr]
          :always (.setTimeoutInterval (or timeout-ms 0)) ; nil = 0 = no timeout
          with-credentials? (.setWithCredentials true) ; Requires xhr v2+
          :always (.send uri* method* post-content* headers*))

        ;; Allow aborts, etc.:
        xhr)

      (catch js/Error e
        ;; (logf "`ajax-lite` error: %s" e)
        (.releaseObject @xhr-pool_ xhr)
        nil))

    (do ; Pool failed to return an available xhr instance
      (callback {:?error :xhr-pool-depleted})
      nil)))

;;;; Ring

     
                  
                                                                              
                                                                                
                                         
                     
            
                                                                            
                                                                      
                                          

     
                                     
                   
                                                                                   

(comment (normalize-headers {:headers {"Foo1" "bar1" "FOO2" "bar2" "foo3" "bar3"}}))

     
   
                                                                  
                                                                                   
                                                                                   
                                                                               
                                                                

(comment (merge-headers {:body "foo"} {"BAR" "baz"})
         (merge-headers "foo"         {"bar" "baz"}))

     
                   
                                       
                       
                                                        
                                                         
                               
                  
                       

(comment (redirect-resp :temp "/foo" "boo!"))

(defn url-encode "Stolen from http://goo.gl/99NSR1"
                         
         [s]
  (when s
                      
                                                                 
                                      
                                       
           (-> (str s)
               (js/encodeURIComponent s)
               (str/replace "*" "%2A")
               (str/replace "'" "%27"))))

(comment (mapv url-encode ["foo+bar" 47]))

(defn url-decode "Stolen from http://goo.gl/99NSR1"
  [s & [encoding]]
  (when s
                                                               
           (js/decodeURIComponent s)))

(comment (url-decode (url-encode "Hello there~*+")))

(defn format-query-string [m]
  (let [param (fn [k v]  (str (url-encode (as-qname k)) "="
                             (url-encode (or (as-?qname v) (str v)))))
        join  (fn [strs] (str/join "&" strs))]
    (if (empty? m)
      ""
      (join (for [[k v] m :when (some? v)]
              (if (sequential? v)
                (join (mapv (partial param k) (or (seq v) [""])))
                (param k v)))))))

(comment
  (format-query-string {})
  (format-query-string {:k1 "v1" :k2 "v2" :k3 nil :k4 "" :k5 ["v4a" "v4b" 7] :k6 []})
  (format-query-string {:a/b :c/d})
  (format-query-string {:k nil}) ; Nb to allow removing pre-existing params, etc.
  )

(defn- assoc-conj [m k v]
  (assoc m k (if-let [cur (get m k)] (if (vector? cur) (conj cur v) [cur v]) v)))

(comment (assoc-conj {:a "a"} :a "b"))

(defn parse-query-params "Based on `ring-codec/form-decode`"
  [s & [keywordize? encoding]] {:post [(have? map? %)]}
  (if (str/blank? s) {}
    (let [;; For convenience (e.g. JavaScript win-loc :search)
          s (if (str-starts-with? s "?") (subs s 1) s)]
      (if-not (str-contains? s "=") {}
        (let [m (reduce
                  (fn [m param]
                    (if-let [[k v] (str/split param #"=" 2)]
                      (assoc-conj m (url-decode k encoding) (url-decode v encoding))
                      m))
                  {}
                  (str/split s #"&"))]
          (if-not keywordize? m
            (map-keys keyword m)))))))

(comment
  (parse-query-params nil)
  (parse-query-params "?foo=bar" :keywordize)
  (-> {:k1 "v1" :k2 "v2" :k3 nil :k4 "" :k5 ["v4a" "v4b"] :k6 [] :k7 47}
      (format-query-string)
      (parse-query-params)))

(defn merge-url-with-query-string [url m]
  (let [[url ?qstr] (str/split (str url) #"\?" 2)
        qmap  (merge
                (when ?qstr (map-keys keyword (parse-query-params ?qstr)))
                (map-keys keyword m))
        ?qstr (as-?nblank (format-query-string qmap))]
    (if-let [qstr ?qstr] (str url "?" qstr) url)))

(comment
  (merge-url-with-query-string "/" nil)
  (merge-url-with-query-string "/?foo=bar" nil)
  (merge-url-with-query-string "/?foo=bar" {"foo" "overwrite"})
  (merge-url-with-query-string "/?foo=bar" {:foo  "overwrite"})
  (merge-url-with-query-string "/?foo=bar" {:foo  nil})
  (merge-url-with-query-string "/?foo=bar" {:foo2 "bar2" :num 5 :foo nil}))

;;;; Stubfns

(defn -new-stub_ [sfn-name]
  (-vol!
    (fn [& args]
      (throw (ex-info (str "No stubfn implementation for: " sfn-name)
               {:sfn-name sfn-name :args args})))))

                   
                                                                             
                                                                           
                                                                           
                                                                    
                            
                                                       
                   
                                                       
                                                                 
                                                         
                                                   
                                                   
                                                                        
                                                       
                                                       
                                                       
                                                       
                                                       
                                                       
                                                   

        
                                                     
                                                  
                            
                                                         
                                        
                                        
                                        
                                        
                                        
                                        
                                                            

(comment
  (defn -foo ^long [x] (* x x))
  (macroexpand '(defn-stub foo "docstring" [x] [x y & more]))
  (defn-stub foo "docstring" ^long [x])
  (implement-foo -foo)
  (qb 1000000 (-foo 5) (foo 5)) ; [69.87 70.46]
  )

;;;; Testing utils

                
                                                          
                                                           
                                                             

(comment
  (expect-let [foo {:a :A}] :A (:a foo))
  (expect (thrown? Exception "foo")))

(defn- fixture-map->fn [{:keys [before after] :or {before 'do after 'do}}]
  `(fn [f#] (~before) (f#) (~after)))

                                                           
                           
                                           
                           
           
                                                         
                                                                                 

(comment (use-fixtures :each {:before (fn []) :after (fn [])}))

;;;; DEPRECATED

(do
         (def get-window-location get-win-loc)
  (def backport-run!   run!)
  (def fq-name         as-qname)
  (def qname           as-qname)
  (def merge-deep-with nested-merge-with)
  (def merge-deep      nested-merge)
  (def parse-bool      as-?bool)
  (def parse-int       as-?int)
  (def parse-float     as-?float)
  (def swapped*        -swapped)
  (def swap-val!       -swap-cache!)
  (def memoize-a0_     memoize_)
  (def memoize-a1_     memoize_)
  (def a0-memoize_     memoize_)
  (def a1-memoize_     memoize_)
  (def memoize-1       memoize-last)
  (def memoize1        memoize-last)
  (def nnil?           some?)
  (def nneg-num?       nat-num?)
  (def nneg-int?       nat-int?)
  (def nneg-float?     nat-float?)
  (def uint?           nat-int?)
  (def pint?           pos-int?)
  (def nnil=           some=)
  (def as-?uint        as-?nat-int)
  (def as-?pint        as-?pos-int)
  (def as-?ufloat      as-?nat-float)
  (def as-?pfloat      as-?pos-float)
  (def as-uint         as-nat-int)
  (def as-pint         as-pos-int)
  (def as-ufloat       as-nat-float)
  (def as-pfloat       as-pos-float)
  (def run!*           run!)
  (def every           revery)

                                                          
                                                          
                                                                      
                                                                      

  ;;; Prefer `str-join` when possible (needs Clojure 1.7+)
  (defn spaced-str-with-nils [xs] (str/join " " (mapv nil->str xs)))
  (defn spaced-str [xs] (str/join " "                 (mapv undefined->nil xs)))

  ;; Arg order changed for easier partials, etc.:
  (defn round [n & [type nplaces]] (round* (or type :round) nplaces n))

  ;; & coll changed to coll:
  (defn join-once [sep & coll] (str-join-once sep coll))

  ;; Used by Carmine <= v2.7.0
                                                                    
                                                                 
                                                               

  ;;; Arg order changed for easier partials
  (defn keys=      [m ks] (ks=      ks m))
  (defn keys<=     [m ks] (ks<=     ks m))
  (defn keys>=     [m ks] (ks>=     ks m))
  (defn keys=nnil? [m ks] (ks-nnil? ks m))

  ;; API changed for greater flexibility:
  (defn rate-limiter [ncalls-limit window-ms] (rate-limiter* [[ncalls-limit window-ms]]))
  (defn rate-limited [ncalls-limit window-ms f]
    (let [rl (rate-limiter* [[ncalls-limit window-ms]])]
      (fn [& args]
        (if-let [backoff-ms (rl)]
          {:backoff-ms backoff-ms}
          {:result     (f)}))))

  ;; Used by Sente <= v1.4.0-alpha2
  (def logging-level (atom :debug)) ; Just ignoring this now

         ; Used by Sente <= v1.1.0
  (defn set-exp-backoff-timeout! [nullary-f & [nattempt]]
    (when-let [js-win js-?win]
      (.setTimeout js-win nullary-f (exp-backoff (or nattempt 0)))))

        
  (do ; Level-based Cljs logging (prefer Timbre v4+)
    (enc-macros/defonce* ^:dynamic *log-level* "DEPRECATED" :debug)
    (def ^:private log?
      (let [->n {:trace 1 :debug 2 :info 3 :warn 4 :error 5 :fatal 6 :report 7}]
        (fn [level] (>= (->n level) (->n *log-level*)))))

    (defn tracef  [fmt & xs] (when (log? :trace)  (apply logf fmt xs)))
    (defn debugf  [fmt & xs] (when (log? :debug)  (apply logf fmt xs)))
    (defn infof   [fmt & xs] (when (log? :info)   (apply logf fmt xs)))
    (defn warnf   [fmt & xs] (when (log? :warn)   (apply logf (str "WARN: "  fmt) xs)))
    (defn errorf  [fmt & xs] (when (log? :error)  (apply logf (str "ERROR: " fmt) xs)))
    (defn fatalf  [fmt & xs] (when (log? :fatal)  (apply logf (str "FATAL: " fmt) xs)))
    (defn reportf [fmt & xs] (when (log? :report) (apply logf fmt xs))))

  (defn greatest [coll & [?comparator]]
    (let [comparator (or ?comparator rcompare)]
      (reduce #(if (pos? (comparator %1 %2)) %2 %1) coll)))

  (defn least [coll & [?comparator]]
    (let [comparator (or ?comparator rcompare)]
      (reduce #(if (neg? (comparator %1 %2)) %2 %1) coll)))

  (comment (greatest ["a" "e" "c" "b" "d"]))

  (defn clj1098 "Ref. http://goo.gl/0GzRuz" [x] (or x {}))

  (defn distinct-by "Deprecated, prefer `xdistinct`"
    [keyfn coll]
    (let [step (fn step [xs seen]
                 (lazy-seq
                   ((fn [[v :as xs] seen]
                      (when-let [s (seq xs)]
                        (let [v* (keyfn v)]
                          (if (contains? seen v*)
                            (recur (rest s) seen)
                            (cons v (step (rest s) (conj seen v*)))))))
                    xs seen)))]
      (step coll #{})))

  (defn distinctv "Deprecated, prefer `xdistinct`"
    ([      coll] (distinctv identity coll))
    ([keyfn coll]
     (let [tr (reduce (fn [[v seen] in]
                        (let [in* (keyfn in)]
                          (if-not (contains? seen in*)
                            [(conj! v in) (conj seen in*)]
                            [v seen])))
                [(transient []) #{}]
                coll)]
       (persistent! (nth tr 0)))))

  (defn map-kvs "Deprecated, prefer `reduce-kv`" [kf vf m]
    (if-not m {}
      (let [vf (cond (nil? vf) (fn [_ v] v) :else vf)
            kf (cond (nil? kf) (fn [k _] k)
                 (kw-identical? kf :keywordize) (fn [k _] (keyword k))
                 :else kf)]
        (persistent!
          (reduce-kv (fn [m k v] (assoc! m (kf k v) (vf k v)))
            (transient {}) m)))))

  (defn as-map "Deprecated, prefer `reduce-kvs`" [kvs & [kf vf]]
    (if (empty? kvs) {}
        (let [vf (cond (nil? vf) (fn [_ v] v) :else vf)
              kf (cond (nil? kf) (fn [k _] k)
                   (kw-identical? kf :keywordize) (fn [k _] (keyword k))
                   :else kf)]
          (persistent!
            (reduce-kvs
              (fn [m k v] (assoc! m (kf k v) (vf k v))) (transient {}) kvs)))))

  (defn keywordize-map [m] (map-keys keyword m))
  (defn removev [pred coll] (filterv (complement pred) coll))
  (defn nvec? [n x] (and (vector? x) (= (count x) n)))

  (defn memoized [cache f & args]
    (if-not cache ; {<args> <delay-val>}
      (apply f args)
      @(-swap-cache! cache args (fn [?dv] (if ?dv ?dv (delay (apply f args)))))))

  (defn- translate-signed-idx [^long signed-idx ^long max-idx]
    (if (>= signed-idx 0)
      (min      signed-idx max-idx)
      (max 0 (+ signed-idx max-idx))))

  (comment (translate-signed-idx -3 5))

  (defn sub-indexes [x start-idx & {:keys [^long max-len ^long end-idx]}]
    (let [start-idx  ^long start-idx
          xlen       (count x) ; also = max-exclusive-end-idx
          ^long start-idx* (translate-signed-idx start-idx xlen)
          end-idx*   (long
                       (cond
                         max-len (                  enc-macros/min*
                                   (+ start-idx* max-len) xlen)
                         end-idx (inc ; Want exclusive
                                   ^long (translate-signed-idx end-idx xlen))
                         :else   xlen))]
      (if (> start-idx* end-idx*)
        ;; [end-idx* start-idx*] ; Allow wrapping
        [0 0] ; Disallow wrapping
        [start-idx* end-idx*])))

  (defn substr "Deprecated, prefer `?substr<idx` or `?substr<len`"
    [s start-idx & [?max-len]]
    (let [[start-idx* end-idx*] (sub-indexes s start-idx :max-len ?max-len)]
                                                       
             (.substring         s start-idx* end-idx*)))

  (comment (substr "hello" -1 1))

  (defn subvec* "Deprecated, prefer `?subvec<idx` or `?subvec<len`"
    [v start-idx & [?max-len]]
    (let [[start-idx* end-idx*] (sub-indexes v start-idx :max-len ?max-len)]
      (subvec v start-idx* end-idx*)))

  (comment
    (subvec* [:a :b :c :d :e] -1)
    (qb 10000
      (subvec*     [:a :b :c :d :e] -1)
      (?subvec<len [:a :b :c :d :e] -1))))

;;;;;;;;;;;; This file autogenerated from src/taoensso/encore.cljx
