// Compiled by ClojureScript 1.9.76 {:static-fns true, :optimize-constants true}
goog.provide('taoensso.encore');
goog.require('cljs.core');
goog.require('goog.net.XhrIoPool');
goog.require('goog.events');
goog.require('clojure.set');
goog.require('cljs.test');
goog.require('cljs.tools.reader.edn');
goog.require('taoensso.truss');
goog.require('goog.net.XhrIo');
goog.require('goog.Uri.QueryData');
goog.require('goog.string');
goog.require('goog.object');
goog.require('goog.string.StringBuffer');
goog.require('goog.net.EventType');
goog.require('goog.structs');
goog.require('goog.string.format');
goog.require('clojure.string');
goog.require('cljs.reader');
goog.require('goog.net.ErrorCode');
taoensso.encore.get_dynamic_assertion_data = (function taoensso$encore$get_dynamic_assertion_data(){
return taoensso.truss.get_dynamic_assertion_data();
});
taoensso.encore.encore_version = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(64),(1)], null);
taoensso.encore.assert_min_encore_version = (function taoensso$encore$assert_min_encore_version(min_version){
var vec__32532 = taoensso.encore.encore_version;
var xc = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32532,(0),null);
var yc = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32532,(1),null);
var zc = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32532,(2),null);
var vec__32535 = ((cljs.core.vector_QMARK_(min_version))?min_version:cljs.core.cst$kw$version.cljs$core$IFn$_invoke$arity$1((taoensso.encore.parse_version.cljs$core$IFn$_invoke$arity$1 ? taoensso.encore.parse_version.cljs$core$IFn$_invoke$arity$1(min_version) : taoensso.encore.parse_version.call(null,min_version))));
var xm = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32535,(0),null);
var ym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32535,(1),null);
var zm = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32535,(2),null);
var vec__32538 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (vec__32532,xc,yc,zc,vec__32535,xm,ym,zm){
return (function (p1__32522_SHARP_){
var or__17769__auto__ = p1__32522_SHARP_;
if(cljs.core.truth_(or__17769__auto__)){
return or__17769__auto__;
} else {
return (0);
}
});})(vec__32532,xc,yc,zc,vec__32535,xm,ym,zm))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [xm,ym,zm], null));
var xm__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32538,(0),null);
var ym__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32538,(1),null);
var zm__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32538,(2),null);
if(((xc > xm__$1)) || ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(xc,xm__$1)) && (((yc > ym__$1)) || ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(yc,ym__$1)) && ((zc >= zm__$1)))))){
return null;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2([cljs.core.str("Insufficient `com.taoensso/encore` version. You may have a Leiningen dependency conflict (see http://goo.gl/qBbLvC for solution).")].join(''),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$min_DASH_version,clojure.string.join.cljs$core$IFn$_invoke$arity$2(".",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [xm__$1,ym__$1,zm__$1], null)),cljs.core.cst$kw$your_DASH_version,clojure.string.join.cljs$core$IFn$_invoke$arity$2(".",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [xc,yc,zc], null))], null));
}
});
/**
 * Given a name symbol and sigs, returns [<name-with-attrs-meta> <args>]
 */
taoensso.encore.name_with_attrs = (function taoensso$encore$name_with_attrs(var_args){
var args32541 = [];
var len__18952__auto___32550 = arguments.length;
var i__18953__auto___32551 = (0);
while(true){
if((i__18953__auto___32551 < len__18952__auto___32550)){
args32541.push((arguments[i__18953__auto___32551]));

var G__32552 = (i__18953__auto___32551 + (1));
i__18953__auto___32551 = G__32552;
continue;
} else {
}
break;
}

var G__32543 = args32541.length;
switch (G__32543) {
case 2:
return taoensso.encore.name_with_attrs.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.name_with_attrs.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32541.length)].join('')));

}
});

taoensso.encore.name_with_attrs.cljs$core$IFn$_invoke$arity$2 = (function (sym,sigs){
return taoensso.encore.name_with_attrs.cljs$core$IFn$_invoke$arity$3(sym,null,sigs);
});

taoensso.encore.name_with_attrs.cljs$core$IFn$_invoke$arity$3 = (function (sym,attrs_merge,sigs){
var vec__32544 = (((typeof cljs.core.first(sigs) === 'string') && (cljs.core.next(sigs)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(sigs),cljs.core.next(sigs)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,sigs], null));
var _QMARK_docstring = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32544,(0),null);
var sigs__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32544,(1),null);
var vec__32547 = (((cljs.core.map_QMARK_(cljs.core.first(sigs__$1))) && (cljs.core.next(sigs__$1)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(sigs__$1),cljs.core.next(sigs__$1)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.EMPTY,sigs__$1], null));
var attrs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32547,(0),null);
var sigs__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32547,(1),null);
var attrs__$1 = (cljs.core.truth_(_QMARK_docstring)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(attrs,cljs.core.cst$kw$doc,_QMARK_docstring):attrs);
var attrs__$2 = (cljs.core.truth_(cljs.core.meta(sym))?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.meta(sym),attrs__$1):attrs__$1);
var attrs__$3 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(attrs__$2,attrs_merge);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(sym,attrs__$3),sigs__$2], null);
});

taoensso.encore.name_with_attrs.cljs$lang$maxFixedArity = 3;


/**
 * Attempts to pave over differences in:
 *  `clojure.edn/read-string`, `clojure.tools.edn/read-string`,
 *  `cljs.reader/read-string`, `cljs.tools.reader/read-string`.
 * `cljs.reader` in particular can be a pain.
 */
taoensso.encore.read_edn = (function taoensso$encore$read_edn(var_args){
var args32554 = [];
var len__18952__auto___32559 = arguments.length;
var i__18953__auto___32560 = (0);
while(true){
if((i__18953__auto___32560 < len__18952__auto___32559)){
args32554.push((arguments[i__18953__auto___32560]));

var G__32561 = (i__18953__auto___32560 + (1));
i__18953__auto___32560 = G__32561;
continue;
} else {
}
break;
}

var G__32556 = args32554.length;
switch (G__32556) {
case 1:
return taoensso.encore.read_edn.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.read_edn.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32554.length)].join('')));

}
});

taoensso.encore.read_edn.cljs$core$IFn$_invoke$arity$1 = (function (s){
return taoensso.encore.read_edn.cljs$core$IFn$_invoke$arity$2(null,s);
});

taoensso.encore.read_edn.cljs$core$IFn$_invoke$arity$2 = (function (opts,s){
if(((s == null)) || ((s === ""))){
return null;
} else {
if(typeof s === 'string'){
var readers = cljs.core.get.cljs$core$IFn$_invoke$arity$3(opts,cljs.core.cst$kw$readers,cljs.core.cst$kw$taoensso$encore_SLASH_dynamic);
var default$ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(opts,cljs.core.cst$kw$default,cljs.core.cst$kw$taoensso$encore_SLASH_dynamic);
var readers__$1 = (cljs.core.truth_((taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(readers,cljs.core.cst$kw$taoensso$encore_SLASH_dynamic) : taoensso.encore.kw_identical_QMARK_.call(null,readers,cljs.core.cst$kw$taoensso$encore_SLASH_dynamic)))?(function (){var G__32557 = cljs.core.symbol;
var G__32558 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cljs.reader._STAR_tag_table_STAR_) : cljs.core.deref.call(null,cljs.reader._STAR_tag_table_STAR_));
return (taoensso.encore.map_keys.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.map_keys.cljs$core$IFn$_invoke$arity$2(G__32557,G__32558) : taoensso.encore.map_keys.call(null,G__32557,G__32558));
})():readers);
var default$__$1 = (cljs.core.truth_((taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(default$,cljs.core.cst$kw$taoensso$encore_SLASH_dynamic) : taoensso.encore.kw_identical_QMARK_.call(null,default$,cljs.core.cst$kw$taoensso$encore_SLASH_dynamic)))?(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cljs.reader._STAR_default_data_reader_fn_STAR_) : cljs.core.deref.call(null,cljs.reader._STAR_default_data_reader_fn_STAR_)):default$);
var opts__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(opts,cljs.core.cst$kw$readers,readers__$1,cljs.core.array_seq([cljs.core.cst$kw$default,default$__$1], 0));
return cljs.tools.reader.edn.read_string.cljs$core$IFn$_invoke$arity$2(opts__$1,s);
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("`read-edn` attempt against non-nil, non-string arg",new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$arg,s,cljs.core.cst$kw$type,cljs.core.type(s)], null));
}
}
});

taoensso.encore.read_edn.cljs$lang$maxFixedArity = 2;

/**
 * Prints arg to an edn string readable with `read-edn`
 */
taoensso.encore.pr_edn = (function taoensso$encore$pr_edn(var_args){
var args32563 = [];
var len__18952__auto___32568 = arguments.length;
var i__18953__auto___32569 = (0);
while(true){
if((i__18953__auto___32569 < len__18952__auto___32568)){
args32563.push((arguments[i__18953__auto___32569]));

var G__32570 = (i__18953__auto___32569 + (1));
i__18953__auto___32569 = G__32570;
continue;
} else {
}
break;
}

var G__32565 = args32563.length;
switch (G__32565) {
case 1:
return taoensso.encore.pr_edn.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.pr_edn.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32563.length)].join('')));

}
});

taoensso.encore.pr_edn.cljs$core$IFn$_invoke$arity$1 = (function (x){
return taoensso.encore.pr_edn.cljs$core$IFn$_invoke$arity$2(null,x);
});

taoensso.encore.pr_edn.cljs$core$IFn$_invoke$arity$2 = (function (_opts,x){
var _STAR_print_level_STAR_32566 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_length_STAR_32567 = cljs.core._STAR_print_length_STAR_;
cljs.core._STAR_print_level_STAR_ = null;

cljs.core._STAR_print_length_STAR_ = null;

try{return cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([x], 0));
}finally {cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR_32567;

cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR_32566;
}});

taoensso.encore.pr_edn.cljs$lang$maxFixedArity = 2;

/**
 * Returns data map iff `x` is an error of any type on platform
 */
taoensso.encore.error_data = (function taoensso$encore$error_data(x){
var temp__6503__auto__ = (function (){var or__17769__auto__ = cljs.core.ex_data(x);
if(cljs.core.truth_(or__17769__auto__)){
return or__17769__auto__;
} else {
if((x instanceof Error)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return null;
}
}
})();
if(cljs.core.truth_(temp__6503__auto__)){
var data_map = temp__6503__auto__;
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([(function (){var err = x;
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$err_DASH_type,cljs.core.type(err),cljs.core.cst$kw$err_DASH_msg,err.message,cljs.core.cst$kw$err_DASH_cause,err.cause], null);
})(),data_map], 0));
} else {
return null;
}
});
taoensso.encore.some_QMARK_ = (function taoensso$encore$some_QMARK_(x){
return !((x == null));
});

taoensso.encore.stringy_QMARK_ = (function taoensso$encore$stringy_QMARK_(x){
return ((x instanceof cljs.core.Keyword)) || (typeof x === 'string');
});

taoensso.encore.ident_QMARK_ = (function taoensso$encore$ident_QMARK_(x){
return ((x instanceof cljs.core.Keyword)) || ((x instanceof cljs.core.Symbol));
});

taoensso.encore.boolean_QMARK_ = (function taoensso$encore$boolean_QMARK_(x){
return (x === true) || (x === false);
});

taoensso.encore.indexed_QMARK_ = (function taoensso$encore$indexed_QMARK_(x){
if(!((x == null))){
if(((x.cljs$lang$protocol_mask$partition0$ & (16))) || (x.cljs$core$IIndexed$)){
return true;
} else {
if((!x.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.IIndexed,x);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.IIndexed,x);
}
});

taoensso.encore.named_QMARK_ = (function taoensso$encore$named_QMARK_(x){
if(!((x == null))){
if(((x.cljs$lang$protocol_mask$partition1$ & (4096))) || (x.cljs$core$INamed$)){
return true;
} else {
return false;
}
} else {
return false;
}
});

taoensso.encore.editable_QMARK_ = (function taoensso$encore$editable_QMARK_(x){
if(!((x == null))){
if(((x.cljs$lang$protocol_mask$partition1$ & (4))) || (x.cljs$core$IEditableCollection$)){
return true;
} else {
return false;
}
} else {
return false;
}
});

taoensso.encore.derefable_QMARK_ = (function taoensso$encore$derefable_QMARK_(x){
if(!((x == null))){
if(((x.cljs$lang$protocol_mask$partition0$ & (32768))) || (x.cljs$core$IDeref$)){
return true;
} else {
if((!x.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,x);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,x);
}
});

taoensso.encore.error_QMARK_ = (function taoensso$encore$error_QMARK_(x){
return (x instanceof Error);
});

taoensso.encore.atom_QMARK_ = (function taoensso$encore$atom_QMARK_(x){
return (x instanceof cljs.core.Atom);
});

taoensso.encore.lazy_seq_QMARK_ = (function taoensso$encore$lazy_seq_QMARK_(x){
return (x instanceof cljs.core.LazySeq);
});

taoensso.encore.re_pattern_QMARK_ = (function taoensso$encore$re_pattern_QMARK_(x){
return (x instanceof RegExp);
});

taoensso.encore.simple_ident_QMARK_ = (function taoensso$encore$simple_ident_QMARK_(x){
return (taoensso.encore.ident_QMARK_(x)) && ((cljs.core.namespace(x) == null));
});

taoensso.encore.qualified_ident_QMARK_ = (function taoensso$encore$qualified_ident_QMARK_(x){
var and__17757__auto__ = taoensso.encore.ident_QMARK_(x);
if(and__17757__auto__){
var and__17757__auto____$1 = cljs.core.namespace(x);
if(cljs.core.truth_(and__17757__auto____$1)){
return true;
} else {
return and__17757__auto____$1;
}
} else {
return and__17757__auto__;
}
});

taoensso.encore.simple_symbol_QMARK_ = (function taoensso$encore$simple_symbol_QMARK_(x){
return ((x instanceof cljs.core.Symbol)) && ((cljs.core.namespace(x) == null));
});

taoensso.encore.qualified_symbol_QMARK_ = (function taoensso$encore$qualified_symbol_QMARK_(x){
var and__17757__auto__ = (x instanceof cljs.core.Symbol);
if(and__17757__auto__){
var and__17757__auto____$1 = cljs.core.namespace(x);
if(cljs.core.truth_(and__17757__auto____$1)){
return true;
} else {
return and__17757__auto____$1;
}
} else {
return and__17757__auto__;
}
});

taoensso.encore.simple_keyword_QMARK_ = (function taoensso$encore$simple_keyword_QMARK_(x){
return ((x instanceof cljs.core.Keyword)) && ((cljs.core.namespace(x) == null));
});

taoensso.encore.qualified_keyword_QMARK_ = (function taoensso$encore$qualified_keyword_QMARK_(x){
var and__17757__auto__ = (x instanceof cljs.core.Keyword);
if(and__17757__auto__){
var and__17757__auto____$1 = cljs.core.namespace(x);
if(cljs.core.truth_(and__17757__auto____$1)){
return true;
} else {
return and__17757__auto____$1;
}
} else {
return and__17757__auto__;
}
});

taoensso.encore.nempty_str_QMARK_ = (function taoensso$encore$nempty_str_QMARK_(x){
return (typeof x === 'string') && (!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,"")));
});

taoensso.encore.nblank_str_QMARK_ = (function taoensso$encore$nblank_str_QMARK_(x){
return (typeof x === 'string') && (!(clojure.string.blank_QMARK_(x)));
});

taoensso.encore.nblank_QMARK_ = (function taoensso$encore$nblank_QMARK_(x){
return !(clojure.string.blank_QMARK_(x));
});

taoensso.encore.vec2_QMARK_ = (function taoensso$encore$vec2_QMARK_(x){
return (cljs.core.vector_QMARK_(x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(x),(2)));
});

taoensso.encore.vec3_QMARK_ = (function taoensso$encore$vec3_QMARK_(x){
return (cljs.core.vector_QMARK_(x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(x),(3)));
});
taoensso.encore.nneg_QMARK_ = (function taoensso$encore$nneg_QMARK_(x){
return !((x < (0)));
});

taoensso.encore.zero_num_QMARK_ = (function taoensso$encore$zero_num_QMARK_(x){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,(0));
});

taoensso.encore.regular_num_QMARK_ = (function taoensso$encore$regular_num_QMARK_(x){
return (typeof x === 'number') && (!(isNaN(x))) && (!((x === Infinity)));
});

taoensso.encore.float_QMARK_ = (function taoensso$encore$float_QMARK_(x){
return (typeof x === 'number') && (!(isNaN(x))) && (!((x === Infinity))) && (!((parseFloat(x) === parseInt(x,(10)))));
});

taoensso.encore.int_QMARK_ = (function taoensso$encore$int_QMARK_(x){
return (typeof x === 'number') && (!(isNaN(x))) && (!((x === Infinity))) && ((parseFloat(x) === parseInt(x,(10))));
});

taoensso.encore.nat_num_QMARK_ = (function taoensso$encore$nat_num_QMARK_(x){
return (typeof x === 'number') && (!((x < (0))));
});

taoensso.encore.pos_num_QMARK_ = (function taoensso$encore$pos_num_QMARK_(x){
return (typeof x === 'number') && ((x > (0)));
});

taoensso.encore.neg_num_QMARK_ = (function taoensso$encore$neg_num_QMARK_(x){
return (typeof x === 'number') && ((x < (0)));
});

taoensso.encore.nat_int_QMARK_ = (function taoensso$encore$nat_int_QMARK_(x){
return (taoensso.encore.int_QMARK_(x)) && (!((x < (0))));
});

taoensso.encore.pos_int_QMARK_ = (function taoensso$encore$pos_int_QMARK_(x){
return (taoensso.encore.int_QMARK_(x)) && ((x > (0)));
});

taoensso.encore.neg_int_QMARK_ = (function taoensso$encore$neg_int_QMARK_(x){
return (taoensso.encore.int_QMARK_(x)) && ((x < (0)));
});

taoensso.encore.nat_float_QMARK_ = (function taoensso$encore$nat_float_QMARK_(x){
return (taoensso.encore.float_QMARK_(x)) && (!((x < (0))));
});

taoensso.encore.pos_float_QMARK_ = (function taoensso$encore$pos_float_QMARK_(x){
return (taoensso.encore.float_QMARK_(x)) && ((x > (0)));
});

taoensso.encore.neg_float_QMARK_ = (function taoensso$encore$neg_float_QMARK_(x){
return (taoensso.encore.float_QMARK_(x)) && ((x < (0)));
});

taoensso.encore.udt_QMARK_ = (function taoensso$encore$udt_QMARK_(x){
return (taoensso.encore.int_QMARK_(x)) && (!((x < (0))));
});

taoensso.encore.pval_QMARK_ = (function taoensso$encore$pval_QMARK_(x){
var and__17757__auto__ = typeof x === 'number';
if(and__17757__auto__){
var n = x;
return ((n >= 0.0)) && ((n <= 1.0));
} else {
return and__17757__auto__;
}
});
taoensso.encore.chan_QMARK_ = (function taoensso$encore$chan_QMARK_(x){
return (x instanceof cljs.core.async.impl.channels.ManyToManyChannel);
});
taoensso.encore.kw_identical_QMARK_ = (function taoensso$encore$kw_identical_QMARK_(x,y){
if((x === y)){
return true;
} else {
if(((x instanceof cljs.core.Keyword)) && ((y instanceof cljs.core.Keyword))){
return (x.fqn === y.fqn);
} else {
return false;
}
}
});
taoensso.encore.as__QMARK_nzero = (function taoensso$encore$as__QMARK_nzero(x){
if(typeof x === 'number'){
if((x === (0))){
return null;
} else {
return x;
}
} else {
return null;
}
});
taoensso.encore.as__QMARK_nblank = (function taoensso$encore$as__QMARK_nblank(x){
if(typeof x === 'string'){
if(clojure.string.blank_QMARK_(x)){
return null;
} else {
return x;
}
} else {
return null;
}
});
taoensso.encore.as__QMARK_kw = (function taoensso$encore$as__QMARK_kw(x){
if((x instanceof cljs.core.Keyword)){
return x;
} else {
if(typeof x === 'string'){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(x);
} else {
return null;
}
}
});
taoensso.encore.as__QMARK_name = (function taoensso$encore$as__QMARK_name(x){
if(taoensso.encore.named_QMARK_(x)){
return cljs.core.name(x);
} else {
if(typeof x === 'string'){
return x;
} else {
return null;
}
}
});
taoensso.encore.as__QMARK_qname = (function taoensso$encore$as__QMARK_qname(x){
if(taoensso.encore.named_QMARK_(x)){
var n = cljs.core.name(x);
var temp__6501__auto__ = cljs.core.namespace(x);
if(cljs.core.truth_(temp__6501__auto__)){
var ns = temp__6501__auto__;
return [cljs.core.str(ns),cljs.core.str("/"),cljs.core.str(n)].join('');
} else {
return n;
}
} else {
if(typeof x === 'string'){
return x;
} else {
return null;
}
}
});
taoensso.encore.as__QMARK_nempty_str = (function taoensso$encore$as__QMARK_nempty_str(x){
if(typeof x === 'string'){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,"")){
return null;
} else {
return x;
}
} else {
return null;
}
});
taoensso.encore.as__QMARK_int = (function taoensso$encore$as__QMARK_int(x){
if(typeof x === 'number'){
return cljs.core.long$(x);
} else {
if(typeof x === 'string'){
var x__$1 = parseInt(x,(10));
if(cljs.core.truth_(isNaN(x__$1))){
return null;
} else {
return x__$1;
}
} else {
return null;
}
}
});
taoensso.encore.as__QMARK_float = (function taoensso$encore$as__QMARK_float(x){
if(typeof x === 'number'){
return x;
} else {
if(typeof x === 'string'){
var x__$1 = parseFloat(x);
if(cljs.core.truth_(isNaN(x__$1))){
return null;
} else {
return x__$1;
}
} else {
return null;
}
}
});
taoensso.encore.as__QMARK_udt = (function taoensso$encore$as__QMARK_udt(x){
var temp__6503__auto__ = taoensso.encore.as__QMARK_int(x);
if(cljs.core.truth_(temp__6503__auto__)){
var n = temp__6503__auto__;
if((n < (0))){
return null;
} else {
return n;
}
} else {
return null;
}
});
taoensso.encore.as__QMARK_nat_int = (function taoensso$encore$as__QMARK_nat_int(x){
var temp__6503__auto__ = taoensso.encore.as__QMARK_int(x);
if(cljs.core.truth_(temp__6503__auto__)){
var n = temp__6503__auto__;
if((n < (0))){
return null;
} else {
return n;
}
} else {
return null;
}
});
taoensso.encore.as__QMARK_pos_int = (function taoensso$encore$as__QMARK_pos_int(x){
var temp__6503__auto__ = taoensso.encore.as__QMARK_int(x);
if(cljs.core.truth_(temp__6503__auto__)){
var n = temp__6503__auto__;
if((n > (0))){
return n;
} else {
return null;
}
} else {
return null;
}
});
taoensso.encore.as__QMARK_nat_float = (function taoensso$encore$as__QMARK_nat_float(x){
var temp__6503__auto__ = taoensso.encore.as__QMARK_float(x);
if(cljs.core.truth_(temp__6503__auto__)){
var n = temp__6503__auto__;
if((n < (0))){
return null;
} else {
return n;
}
} else {
return null;
}
});
taoensso.encore.as__QMARK_pos_float = (function taoensso$encore$as__QMARK_pos_float(x){
var temp__6503__auto__ = taoensso.encore.as__QMARK_float(x);
if(cljs.core.truth_(temp__6503__auto__)){
var n = temp__6503__auto__;
if((n > (0))){
return n;
} else {
return null;
}
} else {
return null;
}
});
taoensso.encore.as__QMARK_pval = (function taoensso$encore$as__QMARK_pval(x){
var temp__6503__auto__ = taoensso.encore.as__QMARK_float(x);
if(cljs.core.truth_(temp__6503__auto__)){
var f = temp__6503__auto__;
if((f > 1.0)){
return 1.0;
} else {
if((f < 0.0)){
return 0.0;
} else {
return f;
}
}
} else {
return null;
}
});
taoensso.encore.as__QMARK_bool = (function taoensso$encore$as__QMARK_bool(x){
if((x == null)){
return null;
} else {
if((x === true) || (x === false)){
return x;
} else {
if((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,(0))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,"false")) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,"FALSE")) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,"0"))){
return false;
} else {
if((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,(1))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,"true")) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,"TRUE")) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,"1"))){
return true;
} else {
return null;
}
}
}
}
});
taoensso.encore.as__QMARK_email = (function taoensso$encore$as__QMARK_email(_QMARK_s){
if(cljs.core.truth_(_QMARK_s)){
return cljs.core.re_find(/^[^\s@]+@[^\s@]+\.\S*[^\.]$/,clojure.string.trim(_QMARK_s));
} else {
return null;
}
});
taoensso.encore.as__QMARK_nemail = (function taoensso$encore$as__QMARK_nemail(_QMARK_s){
var temp__6503__auto__ = taoensso.encore.as__QMARK_email(_QMARK_s);
if(cljs.core.truth_(temp__6503__auto__)){
var email = temp__6503__auto__;
return clojure.string.lower_case(email);
} else {
return null;
}
});
taoensso.encore.try_pred = (function taoensso$encore$try_pred(pred,x){
try{return (pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(x) : pred.call(null,x));
}catch (e32583){if((e32583 instanceof Error)){
var _ = e32583;
return false;
} else {
throw e32583;

}
}});
taoensso.encore.when_QMARK_ = (function taoensso$encore$when_QMARK_(pred,x){
if(cljs.core.truth_(taoensso.encore.try_pred(pred,x))){
return x;
} else {
return null;
}
});
/**
 * Cheaper `have!` that provides less diagnostic info
 */
taoensso.encore.is_BANG_ = (function taoensso$encore$is_BANG_(var_args){
var args32584 = [];
var len__18952__auto___32587 = arguments.length;
var i__18953__auto___32588 = (0);
while(true){
if((i__18953__auto___32588 < len__18952__auto___32587)){
args32584.push((arguments[i__18953__auto___32588]));

var G__32589 = (i__18953__auto___32588 + (1));
i__18953__auto___32588 = G__32589;
continue;
} else {
}
break;
}

var G__32586 = args32584.length;
switch (G__32586) {
case 1:
return taoensso.encore.is_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.is_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.is_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32584.length)].join('')));

}
});

taoensso.encore.is_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (x){
return taoensso.encore.is_BANG_.cljs$core$IFn$_invoke$arity$3(cljs.core.identity,x,null);
});

taoensso.encore.is_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (pred,x){
return taoensso.encore.is_BANG_.cljs$core$IFn$_invoke$arity$3(cljs.core.identity,x,null);
});

taoensso.encore.is_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (pred,x,fail__QMARK_data){
if(cljs.core.truth_(taoensso.encore.try_pred(pred,x))){
return x;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2([cljs.core.str("`is!` "),cljs.core.str([cljs.core.str(pred)].join('')),cljs.core.str(" failure against arg: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([x], 0)))].join(''),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$arg_DASH_val,x,cljs.core.cst$kw$arg_DASH_type,cljs.core.type(x),cljs.core.cst$kw$fail_DASH__QMARK_data,fail__QMARK_data], null));
}
});

taoensso.encore.is_BANG_.cljs$lang$maxFixedArity = 3;

taoensso.encore._as_throw = (function taoensso$encore$_as_throw(as_name,x){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2([cljs.core.str("`as-"),cljs.core.str(cljs.core.name(as_name)),cljs.core.str("` failed against: `"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([x], 0))),cljs.core.str("`")].join(''),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$arg,x,cljs.core.cst$kw$type,cljs.core.type(x)], null));
});
taoensso.encore.as_nzero = (function taoensso$encore$as_nzero(x){
var or__17769__auto__ = taoensso.encore.as__QMARK_nzero(x);
if(cljs.core.truth_(or__17769__auto__)){
return or__17769__auto__;
} else {
return taoensso.encore._as_throw(cljs.core.cst$kw$nzero,x);
}
});
taoensso.encore.as_nblank = (function taoensso$encore$as_nblank(x){
var or__17769__auto__ = taoensso.encore.as__QMARK_nblank(x);
if(cljs.core.truth_(or__17769__auto__)){
return or__17769__auto__;
} else {
return taoensso.encore._as_throw(cljs.core.cst$kw$nblank,x);
}
});
taoensso.encore.as_nempty_str = (function taoensso$encore$as_nempty_str(x){
var or__17769__auto__ = taoensso.encore.as__QMARK_nempty_str(x);
if(cljs.core.truth_(or__17769__auto__)){
return or__17769__auto__;
} else {
return taoensso.encore._as_throw(cljs.core.cst$kw$nempty_DASH_str,x);
}
});
taoensso.encore.as_kw = (function taoensso$encore$as_kw(x){
var or__17769__auto__ = taoensso.encore.as__QMARK_kw(x);
if(cljs.core.truth_(or__17769__auto__)){
return or__17769__auto__;
} else {
return taoensso.encore._as_throw(cljs.core.cst$kw$kw,x);
}
});
taoensso.encore.as_name = (function taoensso$encore$as_name(x){
var or__17769__auto__ = taoensso.encore.as__QMARK_name(x);
if(cljs.core.truth_(or__17769__auto__)){
return or__17769__auto__;
} else {
return taoensso.encore._as_throw(cljs.core.cst$kw$name,x);
}
});
taoensso.encore.as_qname = (function taoensso$encore$as_qname(x){
var or__17769__auto__ = taoensso.encore.as__QMARK_qname(x);
if(cljs.core.truth_(or__17769__auto__)){
return or__17769__auto__;
} else {
return taoensso.encore._as_throw(cljs.core.cst$kw$qname,x);
}
});
taoensso.encore.as_email = (function taoensso$encore$as_email(x){
var or__17769__auto__ = taoensso.encore.as__QMARK_email(x);
if(cljs.core.truth_(or__17769__auto__)){
return or__17769__auto__;
} else {
return taoensso.encore._as_throw(cljs.core.cst$kw$email,x);
}
});
taoensso.encore.as_nemail = (function taoensso$encore$as_nemail(x){
var or__17769__auto__ = taoensso.encore.as__QMARK_nemail(x);
if(cljs.core.truth_(or__17769__auto__)){
return or__17769__auto__;
} else {
return taoensso.encore._as_throw(cljs.core.cst$kw$nemail,x);
}
});
taoensso.encore.as_udt = (function taoensso$encore$as_udt(x){
var or__17769__auto__ = taoensso.encore.as__QMARK_udt(x);
if(cljs.core.truth_(or__17769__auto__)){
return or__17769__auto__;
} else {
return taoensso.encore._as_throw(cljs.core.cst$kw$udt,x);
}
});
taoensso.encore.as_int = (function taoensso$encore$as_int(x){
var or__17769__auto__ = taoensso.encore.as__QMARK_int(x);
if(cljs.core.truth_(or__17769__auto__)){
return or__17769__auto__;
} else {
return taoensso.encore._as_throw(cljs.core.cst$kw$int,x);
}
});
taoensso.encore.as_nat_int = (function taoensso$encore$as_nat_int(x){
var or__17769__auto__ = taoensso.encore.as__QMARK_nat_int(x);
if(cljs.core.truth_(or__17769__auto__)){
return or__17769__auto__;
} else {
return taoensso.encore._as_throw(cljs.core.cst$kw$nat_DASH_int,x);
}
});
taoensso.encore.as_pos_int = (function taoensso$encore$as_pos_int(x){
var or__17769__auto__ = taoensso.encore.as__QMARK_pos_int(x);
if(cljs.core.truth_(or__17769__auto__)){
return or__17769__auto__;
} else {
return taoensso.encore._as_throw(cljs.core.cst$kw$pos_DASH_int,x);
}
});
taoensso.encore.as_float = (function taoensso$encore$as_float(x){
var or__17769__auto__ = taoensso.encore.as__QMARK_float(x);
if(cljs.core.truth_(or__17769__auto__)){
return or__17769__auto__;
} else {
return taoensso.encore._as_throw(cljs.core.cst$kw$float,x);
}
});
taoensso.encore.as_nat_float = (function taoensso$encore$as_nat_float(x){
var or__17769__auto__ = taoensso.encore.as__QMARK_nat_float(x);
if(cljs.core.truth_(or__17769__auto__)){
return or__17769__auto__;
} else {
return taoensso.encore._as_throw(cljs.core.cst$kw$nat_DASH_float,x);
}
});
taoensso.encore.as_pos_float = (function taoensso$encore$as_pos_float(x){
var or__17769__auto__ = taoensso.encore.as__QMARK_pos_float(x);
if(cljs.core.truth_(or__17769__auto__)){
return or__17769__auto__;
} else {
return taoensso.encore._as_throw(cljs.core.cst$kw$pos_DASH_float,x);
}
});
taoensso.encore.as_pval = (function taoensso$encore$as_pval(x){
var or__17769__auto__ = taoensso.encore.as__QMARK_pval(x);
if(cljs.core.truth_(or__17769__auto__)){
return or__17769__auto__;
} else {
return taoensso.encore._as_throw(cljs.core.cst$kw$pval,x);
}
});
taoensso.encore.as_bool = (function taoensso$encore$as_bool(x){
var _QMARK_b = taoensso.encore.as__QMARK_bool(x);
if((_QMARK_b == null)){
return taoensso.encore._as_throw(cljs.core.cst$kw$bool,x);
} else {
return _QMARK_b;
}
});
taoensso.encore.explode_keyword = (function taoensso$encore$explode_keyword(k){
return clojure.string.split.cljs$core$IFn$_invoke$arity$2(taoensso.encore.as_qname(k),/[\.\/]/);
});
taoensso.encore.merge_keywords = (function taoensso$encore$merge_keywords(var_args){
var args32591 = [];
var len__18952__auto___32594 = arguments.length;
var i__18953__auto___32595 = (0);
while(true){
if((i__18953__auto___32595 < len__18952__auto___32594)){
args32591.push((arguments[i__18953__auto___32595]));

var G__32596 = (i__18953__auto___32595 + (1));
i__18953__auto___32595 = G__32596;
continue;
} else {
}
break;
}

var G__32593 = args32591.length;
switch (G__32593) {
case 1:
return taoensso.encore.merge_keywords.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.merge_keywords.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32591.length)].join('')));

}
});

taoensso.encore.merge_keywords.cljs$core$IFn$_invoke$arity$1 = (function (ks){
return taoensso.encore.merge_keywords.cljs$core$IFn$_invoke$arity$2(ks,false);
});

taoensso.encore.merge_keywords.cljs$core$IFn$_invoke$arity$2 = (function (ks,no_slash_QMARK_){
var parts = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,in$){
if(cljs.core.truth_(in$)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(acc,taoensso.encore.explode_keyword(in$));
} else {
return acc;
}
}),cljs.core.PersistentVector.EMPTY,ks);
if(cljs.core.seq(parts)){
if(cljs.core.truth_(no_slash_QMARK_)){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(clojure.string.join.cljs$core$IFn$_invoke$arity$2(".",parts));
} else {
var ppop = cljs.core.pop(parts);
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$2(((cljs.core.seq(ppop))?clojure.string.join.cljs$core$IFn$_invoke$arity$2(".",ppop):null),cljs.core.peek(parts));
}
} else {
return null;
}
});

taoensso.encore.merge_keywords.cljs$lang$maxFixedArity = 2;

/**
 * Like `force` for refs
 */
taoensso.encore.force_ref = (function taoensso$encore$force_ref(x){
if(taoensso.encore.derefable_QMARK_(x)){
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(x) : cljs.core.deref.call(null,x));
} else {
return x;
}
});
taoensso.encore.merge_meta = (function taoensso$encore$merge_meta(x,m){
return cljs.core.with_meta(x,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.meta(x),m], 0)));
});
taoensso.encore.without_meta = (function taoensso$encore$without_meta(x){
if(cljs.core.truth_(cljs.core.meta(x))){
return cljs.core.with_meta(x,null);
} else {
return x;
}
});
taoensso.encore.some_EQ_ = (function taoensso$encore$some_EQ_(var_args){
var args32599 = [];
var len__18952__auto___32611 = arguments.length;
var i__18953__auto___32612 = (0);
while(true){
if((i__18953__auto___32612 < len__18952__auto___32611)){
args32599.push((arguments[i__18953__auto___32612]));

var G__32613 = (i__18953__auto___32612 + (1));
i__18953__auto___32612 = G__32613;
continue;
} else {
}
break;
}

var G__32604 = args32599.length;
switch (G__32604) {
case 2:
return taoensso.encore.some_EQ_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__18975__auto__ = (new cljs.core.IndexedSeq(args32599.slice((2)),(0),null));
return taoensso.encore.some_EQ_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__18975__auto__);

}
});

taoensso.encore.some_EQ_.cljs$core$IFn$_invoke$arity$2 = (function (x,y){
return (taoensso.encore.some_QMARK_(x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,y));
});

taoensso.encore.some_EQ_.cljs$core$IFn$_invoke$arity$variadic = (function (x,y,more){
var and__17757__auto__ = taoensso.encore.some_QMARK_(x);
if(and__17757__auto__){
var and__17757__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,y);
if(and__17757__auto____$1){
var G__32609 = ((function (and__17757__auto____$1,and__17757__auto__){
return (function (p1__32598_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__32598_SHARP_,x);
});})(and__17757__auto____$1,and__17757__auto__))
;
var G__32610 = more;
return (taoensso.encore.revery_QMARK_.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.revery_QMARK_.cljs$core$IFn$_invoke$arity$2(G__32609,G__32610) : taoensso.encore.revery_QMARK_.call(null,G__32609,G__32610));
} else {
return and__17757__auto____$1;
}
} else {
return and__17757__auto__;
}
});

taoensso.encore.some_EQ_.cljs$lang$applyTo = (function (seq32600){
var G__32601 = cljs.core.first(seq32600);
var seq32600__$1 = cljs.core.next(seq32600);
var G__32602 = cljs.core.first(seq32600__$1);
var seq32600__$2 = cljs.core.next(seq32600__$1);
return taoensso.encore.some_EQ_.cljs$core$IFn$_invoke$arity$variadic(G__32601,G__32602,seq32600__$2);
});

taoensso.encore.some_EQ_.cljs$lang$maxFixedArity = (2);

/**
 * Returns first non-nil arg, or nil
 */
taoensso.encore.nnil = (function taoensso$encore$nnil(var_args){
var args32615 = [];
var len__18952__auto___32622 = arguments.length;
var i__18953__auto___32623 = (0);
while(true){
if((i__18953__auto___32623 < len__18952__auto___32622)){
args32615.push((arguments[i__18953__auto___32623]));

var G__32624 = (i__18953__auto___32623 + (1));
i__18953__auto___32623 = G__32624;
continue;
} else {
}
break;
}

var G__32621 = args32615.length;
switch (G__32621) {
case 0:
return taoensso.encore.nnil.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return taoensso.encore.nnil.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.nnil.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.nnil.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var argseq__18975__auto__ = (new cljs.core.IndexedSeq(args32615.slice((3)),(0),null));
return taoensso.encore.nnil.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__18975__auto__);

}
});

taoensso.encore.nnil.cljs$core$IFn$_invoke$arity$0 = (function (){
return null;
});

taoensso.encore.nnil.cljs$core$IFn$_invoke$arity$1 = (function (x){
return x;
});

taoensso.encore.nnil.cljs$core$IFn$_invoke$arity$2 = (function (x,y){
if((x == null)){
return y;
} else {
return x;
}
});

taoensso.encore.nnil.cljs$core$IFn$_invoke$arity$3 = (function (x,y,z){
if((x == null)){
if((y == null)){
return z;
} else {
return y;
}
} else {
return x;
}
});

taoensso.encore.nnil.cljs$core$IFn$_invoke$arity$variadic = (function (x,y,z,more){
if((x == null)){
if((y == null)){
if((z == null)){
return (taoensso.encore.rfirst.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.rfirst.cljs$core$IFn$_invoke$arity$2(taoensso.encore.some_QMARK_,more) : taoensso.encore.rfirst.call(null,taoensso.encore.some_QMARK_,more));
} else {
return z;
}
} else {
return y;
}
} else {
return x;
}
});

taoensso.encore.nnil.cljs$lang$applyTo = (function (seq32616){
var G__32617 = cljs.core.first(seq32616);
var seq32616__$1 = cljs.core.next(seq32616);
var G__32618 = cljs.core.first(seq32616__$1);
var seq32616__$2 = cljs.core.next(seq32616__$1);
var G__32619 = cljs.core.first(seq32616__$2);
var seq32616__$3 = cljs.core.next(seq32616__$2);
return taoensso.encore.nnil.cljs$core$IFn$_invoke$arity$variadic(G__32617,G__32618,G__32619,seq32616__$3);
});

taoensso.encore.nnil.cljs$lang$maxFixedArity = (3);

taoensso.encore.sentinel = {};

taoensso.encore.sentinel_QMARK_ = (function taoensso$encore$sentinel_QMARK_(x){
return (x === taoensso.encore.sentinel);
});

taoensso.encore.nil__GT_sentinel = (function taoensso$encore$nil__GT_sentinel(x){
if((x == null)){
return taoensso.encore.sentinel;
} else {
return x;
}
});

taoensso.encore.sentinel__GT_nil = (function taoensso$encore$sentinel__GT_nil(x){
if(cljs.core.truth_(taoensso.encore.sentinel_QMARK_(x))){
return null;
} else {
return x;
}
});
taoensso.encore.parse_version = (function taoensso$encore$parse_version(x){
var vec__32631 = clojure.string.split.cljs$core$IFn$_invoke$arity$3([cljs.core.str(x)].join(''),/-/,(2));
var s_version = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32631,(0),null);
var _QMARK_s_qualifier = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32631,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$version,(function (){var temp__6503__auto__ = cljs.core.re_seq(/\d+/,s_version);
if(cljs.core.truth_(temp__6503__auto__)){
var s = temp__6503__auto__;
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(taoensso.encore.as__QMARK_int,s);
} else {
return null;
}
})(),cljs.core.cst$kw$qualifier,(function (){var temp__6503__auto__ = _QMARK_s_qualifier;
if(cljs.core.truth_(temp__6503__auto__)){
var s = temp__6503__auto__;
return clojure.string.lower_case(s);
} else {
return null;
}
})()], null);
});
/**
 * May not be available with Node.js, etc.
 */
taoensso.encore.js__QMARK_win = ((typeof window !== 'undefined')?window:null);
taoensso.encore.max_long = (9007199254740991);
taoensso.encore.min_long = (-9007199254740991);
taoensso.encore.approx_EQ_ = (function taoensso$encore$approx_EQ_(var_args){
var args32634 = [];
var len__18952__auto___32638 = arguments.length;
var i__18953__auto___32639 = (0);
while(true){
if((i__18953__auto___32639 < len__18952__auto___32638)){
args32634.push((arguments[i__18953__auto___32639]));

var G__32640 = (i__18953__auto___32639 + (1));
i__18953__auto___32639 = G__32640;
continue;
} else {
}
break;
}

var G__32636 = args32634.length;
switch (G__32636) {
case 2:
return taoensso.encore.approx_EQ_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.approx_EQ_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32634.length)].join('')));

}
});

taoensso.encore.approx_EQ_.cljs$core$IFn$_invoke$arity$2 = (function (x,y){
return taoensso.encore.approx_EQ_.cljs$core$IFn$_invoke$arity$3(x,y,0.001);
});

taoensso.encore.approx_EQ_.cljs$core$IFn$_invoke$arity$3 = (function (x,y,signf){
return ((function (){var G__32637 = (x - y);
return Math.abs(G__32637);
})() < signf);
});

taoensso.encore.approx_EQ_.cljs$lang$maxFixedArity = 3;

taoensso.encore.clamp = (function taoensso$encore$clamp(nmin,nmax,n){
if((n < nmin)){
return nmin;
} else {
if((n > nmax)){
return nmax;
} else {
return n;
}
}
});
taoensso.encore.pow = (function taoensso$encore$pow(n,exp){
return Math.pow(n,exp);
});
taoensso.encore.abs = (function taoensso$encore$abs(n){
if((n < (0))){
return (- n);
} else {
return n;
}
});
taoensso.encore.round_STAR_ = (function taoensso$encore$round_STAR_(var_args){
var args32642 = [];
var len__18952__auto___32646 = arguments.length;
var i__18953__auto___32647 = (0);
while(true){
if((i__18953__auto___32647 < len__18952__auto___32646)){
args32642.push((arguments[i__18953__auto___32647]));

var G__32648 = (i__18953__auto___32647 + (1));
i__18953__auto___32647 = G__32648;
continue;
} else {
}
break;
}

var G__32644 = args32642.length;
switch (G__32644) {
case 1:
return taoensso.encore.round_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.round_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.round_STAR_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32642.length)].join('')));

}
});

taoensso.encore.round_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (n){
return taoensso.encore.round_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$round,null,n);
});

taoensso.encore.round_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (type,n){
return taoensso.encore.round_STAR_.cljs$core$IFn$_invoke$arity$3(type,null,n);
});

taoensso.encore.round_STAR_.cljs$core$IFn$_invoke$arity$3 = (function (type,nplaces,n){
var n__$1 = n;
var modifier = (cljs.core.truth_(nplaces)?Math.pow(10.0,nplaces):null);
var n_STAR_ = (cljs.core.truth_(modifier)?(n__$1 * modifier):n__$1);
var rounded = (function (){var G__32645 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__32645) {
case "round":
return Math.round(n_STAR_);

break;
case "floor":
return Math.floor(n_STAR_);

break;
case "ceil":
return Math.ceil(n_STAR_);

break;
case "trunc":
return cljs.core.long$(n_STAR_);

break;
default:
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Unknown round type",new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$type,type], null));

}
})();
if(cljs.core.truth_(modifier)){
return (rounded / modifier);
} else {
return cljs.core.long$(rounded);
}
});

taoensso.encore.round_STAR_.cljs$lang$maxFixedArity = 3;

taoensso.encore.round0 = (function taoensso$encore$round0(n){
return Math.round(n);
});
taoensso.encore.round1 = (function taoensso$encore$round1(n){
return ((function (){var G__32652 = (n * 10.0);
return Math.round(G__32652);
})() / 10.0);
});
taoensso.encore.round2 = (function taoensso$encore$round2(n){
return ((function (){var G__32654 = (n * 100.0);
return Math.round(G__32654);
})() / 100.0);
});
/**
 * Returns binary exponential backoff value for n<=36
 */
taoensso.encore.exp_backoff = (function taoensso$encore$exp_backoff(var_args){
var args32655 = [];
var len__18952__auto___32661 = arguments.length;
var i__18953__auto___32662 = (0);
while(true){
if((i__18953__auto___32662 < len__18952__auto___32661)){
args32655.push((arguments[i__18953__auto___32662]));

var G__32663 = (i__18953__auto___32662 + (1));
i__18953__auto___32662 = G__32663;
continue;
} else {
}
break;
}

var G__32657 = args32655.length;
switch (G__32657) {
case 1:
return taoensso.encore.exp_backoff.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.exp_backoff.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32655.length)].join('')));

}
});

taoensso.encore.exp_backoff.cljs$core$IFn$_invoke$arity$1 = (function (n_attempt){
return taoensso.encore.exp_backoff.cljs$core$IFn$_invoke$arity$2(n_attempt,null);
});

taoensso.encore.exp_backoff.cljs$core$IFn$_invoke$arity$2 = (function (n_attempt,p__32658){
var map__32659 = p__32658;
var map__32659__$1 = ((((!((map__32659 == null)))?((((map__32659.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32659.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32659):map__32659);
var min = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32659__$1,cljs.core.cst$kw$min);
var max = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32659__$1,cljs.core.cst$kw$max);
var factor = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__32659__$1,cljs.core.cst$kw$factor,(1000));
var n = (((n_attempt > (36)))?(36):n_attempt);
var b = Math.pow((2),n);
var t = cljs.core.long$((((b + cljs.core.rand.cljs$core$IFn$_invoke$arity$1(b)) * 0.5) * factor));
var t__$1 = cljs.core.long$((cljs.core.truth_(min)?(((t < min))?min:t):t));
var t__$2 = cljs.core.long$((cljs.core.truth_(max)?(((t__$1 > max))?max:t__$1):t__$1));
return t__$2;
});

taoensso.encore.exp_backoff.cljs$lang$maxFixedArity = 2;

taoensso.encore.now_dt = (function taoensso$encore$now_dt(){
return (new Date());
});
taoensso.encore.now_udt = (function taoensso$encore$now_udt(){
return (new Date()).getTime();
});
taoensso.encore.secs__GT_ms = (function taoensso$encore$secs__GT_ms(secs){
return (cljs.core.long$(secs) * (1000));
});
taoensso.encore.ms__GT_secs = (function taoensso$encore$ms__GT_secs(ms){
return cljs.core.quot(cljs.core.long$(ms),(1000));
});
/**
 * Returns ~number of milliseconds in period defined by given args
 */
taoensso.encore.ms = (function taoensso$encore$ms(var_args){
var args__18959__auto__ = [];
var len__18952__auto___32681 = arguments.length;
var i__18953__auto___32682 = (0);
while(true){
if((i__18953__auto___32682 < len__18952__auto___32681)){
args__18959__auto__.push((arguments[i__18953__auto___32682]));

var G__32683 = (i__18953__auto___32682 + (1));
i__18953__auto___32682 = G__32683;
continue;
} else {
}
break;
}

var argseq__18960__auto__ = ((((0) < args__18959__auto__.length))?(new cljs.core.IndexedSeq(args__18959__auto__.slice((0)),(0),null)):null);
return taoensso.encore.ms.cljs$core$IFn$_invoke$arity$variadic(argseq__18960__auto__);
});

taoensso.encore.ms.cljs$core$IFn$_invoke$arity$variadic = (function (p__32678){
var map__32679 = p__32678;
var map__32679__$1 = ((((!((map__32679 == null)))?((((map__32679.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32679.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32679):map__32679);
var opts = map__32679__$1;
var years = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32679__$1,cljs.core.cst$kw$years);
var months = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32679__$1,cljs.core.cst$kw$months);
var weeks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32679__$1,cljs.core.cst$kw$weeks);
var days = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32679__$1,cljs.core.cst$kw$days);
var hours = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32679__$1,cljs.core.cst$kw$hours);
var mins = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32679__$1,cljs.core.cst$kw$mins);
var secs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32679__$1,cljs.core.cst$kw$secs);
var msecs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32679__$1,cljs.core.cst$kw$msecs);
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32679__$1,cljs.core.cst$kw$ms);
if(cljs.core.truth_(cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (map__32679,map__32679__$1,opts,years,months,weeks,days,hours,mins,secs,msecs,ms){
return (function (__in){
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, [cljs.core.cst$kw$msecs,null,cljs.core.cst$kw$secs,null,cljs.core.cst$kw$months,null,cljs.core.cst$kw$days,null,cljs.core.cst$kw$mins,null,cljs.core.cst$kw$hours,null,cljs.core.cst$kw$years,null,cljs.core.cst$kw$ms,null,cljs.core.cst$kw$weeks,null], null), null).call(null,__in))){
return __in;
} else {
return taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.encore",null,"(#{:msecs :secs :months :days :mins :hours :years :ms :weeks} __in)",__in,null,null);
}
});})(map__32679,map__32679__$1,opts,years,months,weeks,days,hours,mins,secs,msecs,ms))
,cljs.core.keys(opts)))){
} else {
throw (new Error("Assert failed: (have #{:msecs :secs :months :days :mins :hours :years :ms :weeks} :in (keys opts))"));
}

return taoensso.encore.round_STAR_.cljs$core$IFn$_invoke$arity$1((((((((((cljs.core.truth_(years)?(years * (31536000000)):0.0) + (cljs.core.truth_(months)?(months * 2.551392E9):0.0)) + (cljs.core.truth_(weeks)?(weeks * (604800000)):0.0)) + (cljs.core.truth_(days)?(days * (86400000)):0.0)) + (cljs.core.truth_(hours)?(hours * (3600000)):0.0)) + (cljs.core.truth_(mins)?(mins * (60000)):0.0)) + (cljs.core.truth_(secs)?(secs * (1000)):0.0)) + (cljs.core.truth_(msecs)?msecs:0.0)) + (cljs.core.truth_(ms)?ms:0.0)));
});

taoensso.encore.ms.cljs$lang$maxFixedArity = (0);

taoensso.encore.ms.cljs$lang$applyTo = (function (seq32677){
return taoensso.encore.ms.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq32677));
});

taoensso.encore.secs = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(taoensso.encore.ms__GT_secs,taoensso.encore.ms);
taoensso.encore.vec_STAR_ = (function taoensso$encore$vec_STAR_(x){
if(cljs.core.vector_QMARK_(x)){
return x;
} else {
return cljs.core.vec(x);
}
});
taoensso.encore.set_STAR_ = (function taoensso$encore$set_STAR_(x){
if(cljs.core.set_QMARK_(x)){
return x;
} else {
return cljs.core.set(x);
}
});
taoensso.encore.distinct_elements_QMARK_ = (function taoensso$encore$distinct_elements_QMARK_(x){
return (cljs.core.set_QMARK_(x)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(x),cljs.core.count(taoensso.encore.set_STAR_(x))));
});
/**
 * Like `aget` for JS objects, Ref. https://goo.gl/eze8hY.
 *   Unlike `aget`, returns nil for missing keys instead of throwing.
 */
taoensso.encore.oget = (function taoensso$encore$oget(var_args){
var args32688 = [];
var len__18952__auto___32695 = arguments.length;
var i__18953__auto___32696 = (0);
while(true){
if((i__18953__auto___32696 < len__18952__auto___32695)){
args32688.push((arguments[i__18953__auto___32696]));

var G__32697 = (i__18953__auto___32696 + (1));
i__18953__auto___32696 = G__32697;
continue;
} else {
}
break;
}

var G__32694 = args32688.length;
switch (G__32694) {
case 2:
return taoensso.encore.oget.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.oget.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var argseq__18975__auto__ = (new cljs.core.IndexedSeq(args32688.slice((3)),(0),null));
return taoensso.encore.oget.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__18975__auto__);

}
});

taoensso.encore.oget.cljs$core$IFn$_invoke$arity$2 = (function (o,k){
if(cljs.core.truth_(o)){
return goog.object.get(o,k,null);
} else {
return null;
}
});

taoensso.encore.oget.cljs$core$IFn$_invoke$arity$3 = (function (o,k1,k2){
var temp__6503__auto__ = taoensso.encore.oget.cljs$core$IFn$_invoke$arity$2(o,k1);
if(cljs.core.truth_(temp__6503__auto__)){
var o__$1 = temp__6503__auto__;
return goog.object.get(o__$1,k2,null);
} else {
return null;
}
});

taoensso.encore.oget.cljs$core$IFn$_invoke$arity$variadic = (function (o,k1,k2,ks){
var temp__6503__auto__ = taoensso.encore.oget.cljs$core$IFn$_invoke$arity$3(o,k1,k2);
if(cljs.core.truth_(temp__6503__auto__)){
var o__$1 = temp__6503__auto__;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(taoensso.encore.oget,o__$1,ks);
} else {
return null;
}
});

taoensso.encore.oget.cljs$lang$applyTo = (function (seq32689){
var G__32690 = cljs.core.first(seq32689);
var seq32689__$1 = cljs.core.next(seq32689);
var G__32691 = cljs.core.first(seq32689__$1);
var seq32689__$2 = cljs.core.next(seq32689__$1);
var G__32692 = cljs.core.first(seq32689__$2);
var seq32689__$3 = cljs.core.next(seq32689__$2);
return taoensso.encore.oget.cljs$core$IFn$_invoke$arity$variadic(G__32690,G__32691,G__32692,seq32689__$3);
});

taoensso.encore.oget.cljs$lang$maxFixedArity = (3);

taoensso.encore.singleton_QMARK_ = (function taoensso$encore$singleton_QMARK_(coll){
if(cljs.core.counted_QMARK_(coll)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(coll),(1));
} else {
return cljs.core.not(cljs.core.next(coll));
}
});
taoensso.encore.__GT__QMARK_singleton = (function taoensso$encore$__GT__QMARK_singleton(coll){
if(cljs.core.truth_(taoensso.encore.singleton_QMARK_(coll))){
var vec__32702 = coll;
var c1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32702,(0),null);
return c1;
} else {
return null;
}
});
taoensso.encore.__GT_vec = (function taoensso$encore$__GT_vec(x){
if(cljs.core.vector_QMARK_(x)){
return x;
} else {
if(cljs.core.sequential_QMARK_(x)){
return cljs.core.vec(x);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null);
}
}
});
taoensso.encore.vnext = (function taoensso$encore$vnext(v){
if((cljs.core.count(v) > (1))){
return cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(v,(1));
} else {
return null;
}
});
taoensso.encore.vsplit_last = (function taoensso$encore$vsplit_last(v){
var c = cljs.core.count(v);
if((c > (0))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(((c > (1)))?cljs.core.pop(v):null),cljs.core.peek(v)], null);
} else {
return null;
}
});
taoensso.encore.vsplit_first = (function taoensso$encore$vsplit_first(v){
var c = cljs.core.count(v);
if((c > (0))){
var vec__32708 = v;
var v1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32708,(0),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [v1,(((c > (1)))?cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(v,(1)):null)], null);
} else {
return null;
}
});
taoensso.encore.nnil_set = (function taoensso$encore$nnil_set(x){
return cljs.core.disj.cljs$core$IFn$_invoke$arity$2(taoensso.encore.set_STAR_(x),null);
});
taoensso.encore.conj_some = (function taoensso$encore$conj_some(var_args){
var args32711 = [];
var len__18952__auto___32717 = arguments.length;
var i__18953__auto___32718 = (0);
while(true){
if((i__18953__auto___32718 < len__18952__auto___32717)){
args32711.push((arguments[i__18953__auto___32718]));

var G__32719 = (i__18953__auto___32718 + (1));
i__18953__auto___32718 = G__32719;
continue;
} else {
}
break;
}

var G__32716 = args32711.length;
switch (G__32716) {
case 0:
return taoensso.encore.conj_some.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return taoensso.encore.conj_some.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.conj_some.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__18975__auto__ = (new cljs.core.IndexedSeq(args32711.slice((2)),(0),null));
return taoensso.encore.conj_some.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__18975__auto__);

}
});

taoensso.encore.conj_some.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.PersistentVector.EMPTY;
});

taoensso.encore.conj_some.cljs$core$IFn$_invoke$arity$1 = (function (coll){
return coll;
});

taoensso.encore.conj_some.cljs$core$IFn$_invoke$arity$2 = (function (coll,_QMARK_x){
if(taoensso.encore.some_QMARK_(_QMARK_x)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(coll,_QMARK_x);
} else {
return coll;
}
});

taoensso.encore.conj_some.cljs$core$IFn$_invoke$arity$variadic = (function (coll,_QMARK_x,_QMARK_xs){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(taoensso.encore.conj_some,taoensso.encore.conj_some.cljs$core$IFn$_invoke$arity$2(coll,_QMARK_x),_QMARK_xs);
});

taoensso.encore.conj_some.cljs$lang$applyTo = (function (seq32712){
var G__32713 = cljs.core.first(seq32712);
var seq32712__$1 = cljs.core.next(seq32712);
var G__32714 = cljs.core.first(seq32712__$1);
var seq32712__$2 = cljs.core.next(seq32712__$1);
return taoensso.encore.conj_some.cljs$core$IFn$_invoke$arity$variadic(G__32713,G__32714,seq32712__$2);
});

taoensso.encore.conj_some.cljs$lang$maxFixedArity = (2);

/**
 * As `clojure.core/preserving-reduced`
 */
taoensso.encore.preserve_reduced = (function taoensso$encore$preserve_reduced(rf){
return (function (acc,in$){
var result = (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(acc,in$) : rf.call(null,acc,in$));
if(cljs.core.reduced_QMARK_(result)){
return cljs.core.reduced(result);
} else {
return result;
}
});
});
taoensso.encore.run_BANG_ = (function taoensso$encore$run_BANG_(proc,coll){
cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__32722_SHARP_,p2__32721_SHARP_){
return (proc.cljs$core$IFn$_invoke$arity$1 ? proc.cljs$core$IFn$_invoke$arity$1(p2__32721_SHARP_) : proc.call(null,p2__32721_SHARP_));
}),null,coll);

return null;
});
taoensso.encore.run_kv_BANG_ = (function taoensso$encore$run_kv_BANG_(proc,m){
cljs.core.reduce_kv((function (p1__32725_SHARP_,p2__32723_SHARP_,p3__32724_SHARP_){
return (proc.cljs$core$IFn$_invoke$arity$2 ? proc.cljs$core$IFn$_invoke$arity$2(p2__32723_SHARP_,p3__32724_SHARP_) : proc.call(null,p2__32723_SHARP_,p3__32724_SHARP_));
}),null,m);

return null;
});
taoensso.encore.run_kvs_BANG_ = (function taoensso$encore$run_kvs_BANG_(proc,kvs){
var G__32732_32735 = (function (p1__32728_SHARP_,p2__32726_SHARP_,p3__32727_SHARP_){
return (proc.cljs$core$IFn$_invoke$arity$2 ? proc.cljs$core$IFn$_invoke$arity$2(p2__32726_SHARP_,p3__32727_SHARP_) : proc.call(null,p2__32726_SHARP_,p3__32727_SHARP_));
});
var G__32733_32736 = null;
var G__32734_32737 = kvs;
(taoensso.encore.reduce_kvs.cljs$core$IFn$_invoke$arity$3 ? taoensso.encore.reduce_kvs.cljs$core$IFn$_invoke$arity$3(G__32732_32735,G__32733_32736,G__32734_32737) : taoensso.encore.reduce_kvs.call(null,G__32732_32735,G__32733_32736,G__32734_32737));

return null;
});
taoensso.encore.rsome = (function taoensso$encore$rsome(pred,coll){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,in$){
var temp__6503__auto__ = (pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(in$) : pred.call(null,in$));
if(cljs.core.truth_(temp__6503__auto__)){
var p = temp__6503__auto__;
return cljs.core.reduced(p);
} else {
return null;
}
}),null,coll);
});
taoensso.encore.rsome_kv = (function taoensso$encore$rsome_kv(pred,coll){
return cljs.core.reduce_kv((function (acc,k,v){
var temp__6503__auto__ = (pred.cljs$core$IFn$_invoke$arity$2 ? pred.cljs$core$IFn$_invoke$arity$2(k,v) : pred.call(null,k,v));
if(cljs.core.truth_(temp__6503__auto__)){
var p = temp__6503__auto__;
return cljs.core.reduced(p);
} else {
return null;
}
}),null,coll);
});
taoensso.encore.rfirst = (function taoensso$encore$rfirst(pred,coll){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,in$){
if(cljs.core.truth_((pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(in$) : pred.call(null,in$)))){
return cljs.core.reduced(in$);
} else {
return null;
}
}),null,coll);
});
taoensso.encore.rfirst_kv = (function taoensso$encore$rfirst_kv(pred,coll){
return cljs.core.reduce_kv((function (acc,k,v){
if(cljs.core.truth_((pred.cljs$core$IFn$_invoke$arity$2 ? pred.cljs$core$IFn$_invoke$arity$2(k,v) : pred.call(null,k,v)))){
return cljs.core.reduced(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));
} else {
return null;
}
}),null,coll);
});
taoensso.encore.revery_QMARK_ = (function taoensso$encore$revery_QMARK_(pred,coll){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,in$){
if(cljs.core.truth_((pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(in$) : pred.call(null,in$)))){
return true;
} else {
return cljs.core.reduced(null);
}
}),true,coll);
});
taoensso.encore.revery_kv_QMARK_ = (function taoensso$encore$revery_kv_QMARK_(pred,coll){
return cljs.core.reduce_kv((function (acc,k,v){
if(cljs.core.truth_((pred.cljs$core$IFn$_invoke$arity$2 ? pred.cljs$core$IFn$_invoke$arity$2(k,v) : pred.call(null,k,v)))){
return true;
} else {
return cljs.core.reduced(null);
}
}),true,coll);
});
taoensso.encore.revery = (function taoensso$encore$revery(pred,coll){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,in$){
if(cljs.core.truth_((pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(in$) : pred.call(null,in$)))){
return coll;
} else {
return cljs.core.reduced(null);
}
}),coll,coll);
});
taoensso.encore.revery_kv = (function taoensso$encore$revery_kv(pred,coll){
return cljs.core.reduce_kv((function (acc,k,v){
if(cljs.core.truth_((pred.cljs$core$IFn$_invoke$arity$2 ? pred.cljs$core$IFn$_invoke$arity$2(k,v) : pred.call(null,k,v)))){
return coll;
} else {
return cljs.core.reduced(null);
}
}),coll,coll);
});
/**
 * Like `reduce-kv` but takes a flat sequence of kv pairs
 */
taoensso.encore.reduce_kvs = (function taoensso$encore$reduce_kvs(rf,init,kvs){
return cljs.core.transduce.cljs$core$IFn$_invoke$arity$4(cljs.core.partition_all.cljs$core$IFn$_invoke$arity$1((2)),cljs.core.completing.cljs$core$IFn$_invoke$arity$1((function (acc,p__32747){
var vec__32748 = p__32747;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32748,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32748,(1),null);
return (rf.cljs$core$IFn$_invoke$arity$3 ? rf.cljs$core$IFn$_invoke$arity$3(acc,k,v) : rf.call(null,acc,k,v));
})),init,kvs);
});
taoensso.encore.reduce_n = (function taoensso$encore$reduce_n(rf,init,n){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(rf,init,cljs.core.range.cljs$core$IFn$_invoke$arity$1(n));
});
/**
 * Like `reduce-kv` but for JavaScript objects
 */
taoensso.encore.reduce_obj = (function taoensso$encore$reduce_obj(f,init,o){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,k){
var G__32754 = acc;
var G__32755 = k;
var G__32756 = goog.object.get(o,k,null);
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__32754,G__32755,G__32756) : f.call(null,G__32754,G__32755,G__32756));
}),init,cljs.core.js_keys(o));
});
taoensso.encore.into_BANG_ = (function taoensso$encore$into_BANG_(var_args){
var args32761 = [];
var len__18952__auto___32764 = arguments.length;
var i__18953__auto___32765 = (0);
while(true){
if((i__18953__auto___32765 < len__18952__auto___32764)){
args32761.push((arguments[i__18953__auto___32765]));

var G__32766 = (i__18953__auto___32765 + (1));
i__18953__auto___32765 = G__32766;
continue;
} else {
}
break;
}

var G__32763 = args32761.length;
switch (G__32763) {
case 2:
return taoensso.encore.into_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.into_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32761.length)].join('')));

}
});

taoensso.encore.into_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (to,from){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj_BANG_,to,from);
});

taoensso.encore.into_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (to,xform,from){
return cljs.core.transduce.cljs$core$IFn$_invoke$arity$4(xform,cljs.core.conj_BANG_,to,from);
});

taoensso.encore.into_BANG_.cljs$lang$maxFixedArity = 3;

taoensso.encore.xdistinct = (function taoensso$encore$xdistinct(var_args){
var args32772 = [];
var len__18952__auto___32775 = arguments.length;
var i__18953__auto___32776 = (0);
while(true){
if((i__18953__auto___32776 < len__18952__auto___32775)){
args32772.push((arguments[i__18953__auto___32776]));

var G__32777 = (i__18953__auto___32776 + (1));
i__18953__auto___32776 = G__32777;
continue;
} else {
}
break;
}

var G__32774 = args32772.length;
switch (G__32774) {
case 0:
return taoensso.encore.xdistinct.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return taoensso.encore.xdistinct.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32772.length)].join('')));

}
});

taoensso.encore.xdistinct.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.distinct.cljs$core$IFn$_invoke$arity$0();
});

taoensso.encore.xdistinct.cljs$core$IFn$_invoke$arity$1 = (function (keyfn){
return (function (rf){
var seen_ = cljs.core.volatile_BANG_(cljs.core.PersistentHashSet.EMPTY);
return ((function (seen_){
return (function() {
var G__32779 = null;
var G__32779__0 = (function (){
return (rf.cljs$core$IFn$_invoke$arity$0 ? rf.cljs$core$IFn$_invoke$arity$0() : rf.call(null));
});
var G__32779__1 = (function (acc){
return (rf.cljs$core$IFn$_invoke$arity$1 ? rf.cljs$core$IFn$_invoke$arity$1(acc) : rf.call(null,acc));
});
var G__32779__2 = (function (acc,input){
var k = (keyfn.cljs$core$IFn$_invoke$arity$1 ? keyfn.cljs$core$IFn$_invoke$arity$1(input) : keyfn.call(null,input));
if(cljs.core.contains_QMARK_((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(seen_) : cljs.core.deref.call(null,seen_)),k)){
return acc;
} else {
cljs.core._vreset_BANG_(seen_,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core._deref(seen_),k));

return (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(acc,input) : rf.call(null,acc,input));
}
});
G__32779 = function(acc,input){
switch(arguments.length){
case 0:
return G__32779__0.call(this);
case 1:
return G__32779__1.call(this,acc);
case 2:
return G__32779__2.call(this,acc,input);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__32779.cljs$core$IFn$_invoke$arity$0 = G__32779__0;
G__32779.cljs$core$IFn$_invoke$arity$1 = G__32779__1;
G__32779.cljs$core$IFn$_invoke$arity$2 = G__32779__2;
return G__32779;
})()
;})(seen_))
});
});

taoensso.encore.xdistinct.cljs$lang$maxFixedArity = 1;

taoensso.encore.takev = (function taoensso$encore$takev(n,coll){
if(cljs.core.vector_QMARK_(coll)){
var or__17769__auto__ = (taoensso.encore._QMARK_subvec_LT_len.cljs$core$IFn$_invoke$arity$3 ? taoensso.encore._QMARK_subvec_LT_len.cljs$core$IFn$_invoke$arity$3(coll,(0),n) : taoensso.encore._QMARK_subvec_LT_len.call(null,coll,(0),n));
if(cljs.core.truth_(or__17769__auto__)){
return or__17769__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
} else {
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.take.cljs$core$IFn$_invoke$arity$1(n),coll);
}
});
/**
 * Like `into` but supports multiple "from"s
 */
taoensso.encore.into_all = (function taoensso$encore$into_all(var_args){
var args32784 = [];
var len__18952__auto___32790 = arguments.length;
var i__18953__auto___32791 = (0);
while(true){
if((i__18953__auto___32791 < len__18952__auto___32790)){
args32784.push((arguments[i__18953__auto___32791]));

var G__32792 = (i__18953__auto___32791 + (1));
i__18953__auto___32791 = G__32792;
continue;
} else {
}
break;
}

var G__32789 = args32784.length;
switch (G__32789) {
case 2:
return taoensso.encore.into_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__18975__auto__ = (new cljs.core.IndexedSeq(args32784.slice((2)),(0),null));
return taoensso.encore.into_all.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__18975__auto__);

}
});

taoensso.encore.into_all.cljs$core$IFn$_invoke$arity$2 = (function (to,from){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(to,from);
});

taoensso.encore.into_all.cljs$core$IFn$_invoke$arity$variadic = (function (to,from,more){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.into,cljs.core.into.cljs$core$IFn$_invoke$arity$2(to,from),more);
});

taoensso.encore.into_all.cljs$lang$applyTo = (function (seq32785){
var G__32786 = cljs.core.first(seq32785);
var seq32785__$1 = cljs.core.next(seq32785);
var G__32787 = cljs.core.first(seq32785__$1);
var seq32785__$2 = cljs.core.next(seq32785__$1);
return taoensso.encore.into_all.cljs$core$IFn$_invoke$arity$variadic(G__32786,G__32787,seq32785__$2);
});

taoensso.encore.into_all.cljs$lang$maxFixedArity = (2);

/**
 * Like `repeatedly` but faster and `conj`s items into given collection
 */
taoensso.encore.repeatedly_into = (function taoensso$encore$repeatedly_into(coll,n,f){
if(((n > (10))) && (taoensso.encore.editable_QMARK_(coll))){
return cljs.core.persistent_BANG_(taoensso.encore.reduce_n((function (acc,_){
return cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(acc,(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null)));
}),cljs.core.transient$(coll),n));
} else {
return taoensso.encore.reduce_n((function (acc,_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null)));
}),coll,n);
}
});
taoensso.encore.map_vals = (function taoensso$encore$map_vals(f,m){
if((m == null)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return cljs.core.reduce_kv((function (m__$1,k,v){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m__$1,k,(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(v) : f.call(null,v)));
}),m,m);
}
});
taoensso.encore.map_keys = (function taoensso$encore$map_keys(f,m){
if((m == null)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return cljs.core.reduce_kv((function (m__$1,k,v){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m__$1,(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(k) : f.call(null,k)),v);
}),cljs.core.PersistentArrayMap.EMPTY,m);
}
});
taoensso.encore.filter_kvs = (function taoensso$encore$filter_kvs(pred,m){
if((m == null)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return cljs.core.reduce_kv((function (m__$1,k,v){
if(cljs.core.truth_((pred.cljs$core$IFn$_invoke$arity$2 ? pred.cljs$core$IFn$_invoke$arity$2(k,v) : pred.call(null,k,v)))){
return m__$1;
} else {
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(m__$1,k);
}
}),m,m);
}
});
taoensso.encore.filter_keys = (function taoensso$encore$filter_keys(pred,m){
if((m == null)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return cljs.core.reduce_kv((function (m__$1,k,v){
if(cljs.core.truth_((pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(k) : pred.call(null,k)))){
return m__$1;
} else {
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(m__$1,k);
}
}),m,m);
}
});
taoensso.encore.filter_vals = (function taoensso$encore$filter_vals(pred,m){
if((m == null)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return cljs.core.reduce_kv((function (m__$1,k,v){
if(cljs.core.truth_((pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(v) : pred.call(null,v)))){
return m__$1;
} else {
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(m__$1,k);
}
}),m,m);
}
});
taoensso.encore.remove_vals = (function taoensso$encore$remove_vals(pred,m){
return taoensso.encore.filter_vals(cljs.core.complement(pred),m);
});
taoensso.encore.remove_keys = (function taoensso$encore$remove_keys(pred,m){
return taoensso.encore.filter_keys(cljs.core.complement(pred),m);
});
taoensso.encore.remove_kvs = (function taoensso$encore$remove_kvs(pred,m){
return taoensso.encore.filter_kvs(cljs.core.complement(pred),m);
});
taoensso.encore.ks_EQ_ = (function taoensso$encore$ks_EQ_(ks,m){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.set(cljs.core.keys(m)),taoensso.encore.set_STAR_(ks));
});
taoensso.encore.ks_LT__EQ_ = (function taoensso$encore$ks_LT__EQ_(ks,m){
return clojure.set.subset_QMARK_(cljs.core.set(cljs.core.keys(m)),taoensso.encore.set_STAR_(ks));
});
taoensso.encore.ks_GT__EQ_ = (function taoensso$encore$ks_GT__EQ_(ks,m){
return clojure.set.superset_QMARK_(cljs.core.set(cljs.core.keys(m)),taoensso.encore.set_STAR_(ks));
});
taoensso.encore.ks_nnil_QMARK_ = (function taoensso$encore$ks_nnil_QMARK_(ks,m){
return taoensso.encore.revery_QMARK_((function (p1__32794_SHARP_){
return taoensso.encore.some_QMARK_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,p1__32794_SHARP_));
}),ks);
});
/**
 * Like `update-in` but faster, more flexible, and simpler (less ambiguous)
 */
taoensso.encore.update_in_STAR_ = (function taoensso$encore$update_in_STAR_(m,ks,f){
if(cljs.core.empty_QMARK_(ks)){
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(m) : f.call(null,m));
} else {
var vec__32802 = ks;
var seq__32803 = cljs.core.seq(vec__32802);
var first__32804 = cljs.core.first(seq__32803);
var seq__32803__$1 = cljs.core.next(seq__32803);
var k = first__32804;
var ks__$1 = seq__32803__$1;
if(ks__$1){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,taoensso$encore$update_in_STAR_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k),ks__$1,f));
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,(function (){var G__32805 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__32805) : f.call(null,G__32805));
})());
}
}
});
/**
 * Like `subvec` but:
 *  - Never throws; snaps to valid start and end indexes.
 *  - Returns nil rather than an empty vector.
 */
taoensso.encore._QMARK_subvec_LT_idx = (function taoensso$encore$_QMARK_subvec_LT_idx(var_args){
var args32806 = [];
var len__18952__auto___32809 = arguments.length;
var i__18953__auto___32810 = (0);
while(true){
if((i__18953__auto___32810 < len__18952__auto___32809)){
args32806.push((arguments[i__18953__auto___32810]));

var G__32811 = (i__18953__auto___32810 + (1));
i__18953__auto___32810 = G__32811;
continue;
} else {
}
break;
}

var G__32808 = args32806.length;
switch (G__32808) {
case 2:
return taoensso.encore._QMARK_subvec_LT_idx.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore._QMARK_subvec_LT_idx.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32806.length)].join('')));

}
});

taoensso.encore._QMARK_subvec_LT_idx.cljs$core$IFn$_invoke$arity$2 = (function (v,start){
var start__$1 = (((start < (0)))?(0):start);
var vlen = cljs.core.count(v);
if((start__$1 >= vlen)){
return null;
} else {
return cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(v,start__$1,vlen);
}
});

taoensso.encore._QMARK_subvec_LT_idx.cljs$core$IFn$_invoke$arity$3 = (function (v,start,end){
var start__$1 = (((start < (0)))?(0):start);
var vlen = cljs.core.long$(cljs.core.count(v));
var end__$1 = (((end > vlen))?vlen:end);
if((start__$1 >= end__$1)){
return null;
} else {
return cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(v,start__$1,end__$1);
}
});

taoensso.encore._QMARK_subvec_LT_idx.cljs$lang$maxFixedArity = 3;

/**
 * Like `?subvec<idx` but:
 *  - Takes `length` instead of `end` (index).
 *  - -ive `start` => index from right of vector.
 */
taoensso.encore._QMARK_subvec_LT_len = (function taoensso$encore$_QMARK_subvec_LT_len(var_args){
var args32813 = [];
var len__18952__auto___32816 = arguments.length;
var i__18953__auto___32817 = (0);
while(true){
if((i__18953__auto___32817 < len__18952__auto___32816)){
args32813.push((arguments[i__18953__auto___32817]));

var G__32818 = (i__18953__auto___32817 + (1));
i__18953__auto___32817 = G__32818;
continue;
} else {
}
break;
}

var G__32815 = args32813.length;
switch (G__32815) {
case 2:
return taoensso.encore._QMARK_subvec_LT_len.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore._QMARK_subvec_LT_len.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32813.length)].join('')));

}
});

taoensso.encore._QMARK_subvec_LT_len.cljs$core$IFn$_invoke$arity$2 = (function (v,start){
var vlen = cljs.core.count(v);
if((start < (0))){
var start__$1 = (start + vlen);
var start__$2 = (((start__$1 < (0)))?(0):start__$1);
return cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(v,start__$2,vlen);
} else {
if((start >= vlen)){
return null;
} else {
return cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(v,start,vlen);
}
}
});

taoensso.encore._QMARK_subvec_LT_len.cljs$core$IFn$_invoke$arity$3 = (function (v,start,length){
if((length <= (0))){
return null;
} else {
var vlen = cljs.core.long$(cljs.core.count(v));
if((start < (0))){
var start__$1 = (start + vlen);
var start__$2 = (((start__$1 < (0)))?(0):start__$1);
var end = (start__$2 + length);
var end__$1 = (((end > vlen))?vlen:end);
return cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(v,start__$2,end__$1);
} else {
var end = (start + length);
var end__$1 = (((end > vlen))?vlen:end);
if((start >= end__$1)){
return null;
} else {
return cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(v,start,end__$1);
}
}
}
});

taoensso.encore._QMARK_subvec_LT_len.cljs$lang$maxFixedArity = 3;

/**
 * Returns a sorted vector of the top n items from coll of N items in O(N.logn)
 *   time. (take n (sort-by ...)) is O(N.logN) time, so much slower when n << N.
 *   Ref. http://stevehanov.ca/blog/index.php?id=122
 */
taoensso.encore.top = (function taoensso$encore$top(var_args){
var args32820 = [];
var len__18952__auto___32823 = arguments.length;
var i__18953__auto___32824 = (0);
while(true){
if((i__18953__auto___32824 < len__18952__auto___32823)){
args32820.push((arguments[i__18953__auto___32824]));

var G__32825 = (i__18953__auto___32824 + (1));
i__18953__auto___32824 = G__32825;
continue;
} else {
}
break;
}

var G__32822 = args32820.length;
switch (G__32822) {
case 2:
return taoensso.encore.top.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.top.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return taoensso.encore.top.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32820.length)].join('')));

}
});

taoensso.encore.top.cljs$core$IFn$_invoke$arity$2 = (function (n,coll){
return taoensso.encore.top.cljs$core$IFn$_invoke$arity$4(n,cljs.core.identity,cljs.core.compare,coll);
});

taoensso.encore.top.cljs$core$IFn$_invoke$arity$3 = (function (n,keyfn,coll){
return taoensso.encore.top.cljs$core$IFn$_invoke$arity$4(n,keyfn,cljs.core.compare,coll);
});

taoensso.encore.top.cljs$core$IFn$_invoke$arity$4 = (function (n,keyfn,cmp,coll){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.take.cljs$core$IFn$_invoke$arity$1(n),cljs.core.sort_by.cljs$core$IFn$_invoke$arity$3(keyfn,cmp,coll));
});

taoensso.encore.top.cljs$lang$maxFixedArity = 4;

taoensso.encore.contains_in_QMARK_ = (function taoensso$encore$contains_in_QMARK_(coll,ks){
return cljs.core.contains_QMARK_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(coll,cljs.core.butlast(ks)),cljs.core.last(ks));
});
taoensso.encore.dissoc_in = (function taoensso$encore$dissoc_in(var_args){
var args32827 = [];
var len__18952__auto___32834 = arguments.length;
var i__18953__auto___32835 = (0);
while(true){
if((i__18953__auto___32835 < len__18952__auto___32834)){
args32827.push((arguments[i__18953__auto___32835]));

var G__32836 = (i__18953__auto___32835 + (1));
i__18953__auto___32835 = G__32836;
continue;
} else {
}
break;
}

var G__32833 = args32827.length;
switch (G__32833) {
case 3:
return taoensso.encore.dissoc_in.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var argseq__18975__auto__ = (new cljs.core.IndexedSeq(args32827.slice((3)),(0),null));
return taoensso.encore.dissoc_in.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__18975__auto__);

}
});

taoensso.encore.dissoc_in.cljs$core$IFn$_invoke$arity$3 = (function (m,ks,dissoc_k){
return taoensso.encore.update_in_STAR_(m,ks,(function (m__$1){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(m__$1,dissoc_k);
}));
});

taoensso.encore.dissoc_in.cljs$core$IFn$_invoke$arity$variadic = (function (m,ks,dissoc_k,more){
return taoensso.encore.update_in_STAR_(m,ks,(function (m__$1){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.dissoc,m__$1,dissoc_k,more);
}));
});

taoensso.encore.dissoc_in.cljs$lang$applyTo = (function (seq32828){
var G__32829 = cljs.core.first(seq32828);
var seq32828__$1 = cljs.core.next(seq32828);
var G__32830 = cljs.core.first(seq32828__$1);
var seq32828__$2 = cljs.core.next(seq32828__$1);
var G__32831 = cljs.core.first(seq32828__$2);
var seq32828__$3 = cljs.core.next(seq32828__$2);
return taoensso.encore.dissoc_in.cljs$core$IFn$_invoke$arity$variadic(G__32829,G__32830,G__32831,seq32828__$3);
});

taoensso.encore.dissoc_in.cljs$lang$maxFixedArity = (3);

/**
 * Assocs each kv iff its value is not nil
 */
taoensso.encore.assoc_some = (function taoensso$encore$assoc_some(var_args){
var args32838 = [];
var len__18952__auto___32845 = arguments.length;
var i__18953__auto___32846 = (0);
while(true){
if((i__18953__auto___32846 < len__18952__auto___32845)){
args32838.push((arguments[i__18953__auto___32846]));

var G__32847 = (i__18953__auto___32846 + (1));
i__18953__auto___32846 = G__32847;
continue;
} else {
}
break;
}

var G__32844 = args32838.length;
switch (G__32844) {
case 3:
return taoensso.encore.assoc_some.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var argseq__18975__auto__ = (new cljs.core.IndexedSeq(args32838.slice((3)),(0),null));
return taoensso.encore.assoc_some.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__18975__auto__);

}
});

taoensso.encore.assoc_some.cljs$core$IFn$_invoke$arity$3 = (function (m,k,v){
if((v == null)){
if((m == null)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return m;
}
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,v);
}
});

taoensso.encore.assoc_some.cljs$core$IFn$_invoke$arity$variadic = (function (m,k,v,kvs){
return taoensso.encore.reduce_kvs((function (acc,k__$1,v__$1){
return taoensso.encore.assoc_some.cljs$core$IFn$_invoke$arity$3(acc,k__$1,v__$1);
}),taoensso.encore.assoc_some.cljs$core$IFn$_invoke$arity$3(m,k,v),kvs);
});

taoensso.encore.assoc_some.cljs$lang$applyTo = (function (seq32839){
var G__32840 = cljs.core.first(seq32839);
var seq32839__$1 = cljs.core.next(seq32839);
var G__32841 = cljs.core.first(seq32839__$1);
var seq32839__$2 = cljs.core.next(seq32839__$1);
var G__32842 = cljs.core.first(seq32839__$2);
var seq32839__$3 = cljs.core.next(seq32839__$2);
return taoensso.encore.assoc_some.cljs$core$IFn$_invoke$arity$variadic(G__32840,G__32841,G__32842,seq32839__$3);
});

taoensso.encore.assoc_some.cljs$lang$maxFixedArity = (3);

/**
 * Assocs each kv iff its val is truthy
 */
taoensso.encore.assoc_when = (function taoensso$encore$assoc_when(var_args){
var args32849 = [];
var len__18952__auto___32856 = arguments.length;
var i__18953__auto___32857 = (0);
while(true){
if((i__18953__auto___32857 < len__18952__auto___32856)){
args32849.push((arguments[i__18953__auto___32857]));

var G__32858 = (i__18953__auto___32857 + (1));
i__18953__auto___32857 = G__32858;
continue;
} else {
}
break;
}

var G__32855 = args32849.length;
switch (G__32855) {
case 3:
return taoensso.encore.assoc_when.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var argseq__18975__auto__ = (new cljs.core.IndexedSeq(args32849.slice((3)),(0),null));
return taoensso.encore.assoc_when.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__18975__auto__);

}
});

taoensso.encore.assoc_when.cljs$core$IFn$_invoke$arity$3 = (function (m,k,v){
if(cljs.core.truth_(v)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,v);
} else {
if((m == null)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return m;
}
}
});

taoensso.encore.assoc_when.cljs$core$IFn$_invoke$arity$variadic = (function (m,k,v,kvs){
return taoensso.encore.reduce_kvs((function (acc,k__$1,v__$1){
return taoensso.encore.assoc_when.cljs$core$IFn$_invoke$arity$3(acc,k__$1,v__$1);
}),taoensso.encore.assoc_when.cljs$core$IFn$_invoke$arity$3(m,k,v),kvs);
});

taoensso.encore.assoc_when.cljs$lang$applyTo = (function (seq32850){
var G__32851 = cljs.core.first(seq32850);
var seq32850__$1 = cljs.core.next(seq32850);
var G__32852 = cljs.core.first(seq32850__$1);
var seq32850__$2 = cljs.core.next(seq32850__$1);
var G__32853 = cljs.core.first(seq32850__$2);
var seq32850__$3 = cljs.core.next(seq32850__$2);
return taoensso.encore.assoc_when.cljs$core$IFn$_invoke$arity$variadic(G__32851,G__32852,G__32853,seq32850__$3);
});

taoensso.encore.assoc_when.cljs$lang$maxFixedArity = (3);

taoensso.encore.queue_QMARK_ = (function taoensso$encore$queue_QMARK_(x){
return (x instanceof cljs.core.PersistentQueue);
});
/**
 * Returns a PersistentQueue
 */
taoensso.encore.queue = (function taoensso$encore$queue(var_args){
var args32860 = [];
var len__18952__auto___32863 = arguments.length;
var i__18953__auto___32864 = (0);
while(true){
if((i__18953__auto___32864 < len__18952__auto___32863)){
args32860.push((arguments[i__18953__auto___32864]));

var G__32865 = (i__18953__auto___32864 + (1));
i__18953__auto___32864 = G__32865;
continue;
} else {
}
break;
}

var G__32862 = args32860.length;
switch (G__32862) {
case 1:
return taoensso.encore.queue.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return taoensso.encore.queue.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32860.length)].join('')));

}
});

taoensso.encore.queue.cljs$core$IFn$_invoke$arity$1 = (function (coll){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(taoensso.encore.queue.cljs$core$IFn$_invoke$arity$0(),coll);
});

taoensso.encore.queue.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.PersistentQueue.EMPTY;
});

taoensso.encore.queue.cljs$lang$maxFixedArity = 1;

taoensso.encore.queue_STAR_ = (function taoensso$encore$queue_STAR_(var_args){
var args__18959__auto__ = [];
var len__18952__auto___32868 = arguments.length;
var i__18953__auto___32869 = (0);
while(true){
if((i__18953__auto___32869 < len__18952__auto___32868)){
args__18959__auto__.push((arguments[i__18953__auto___32869]));

var G__32870 = (i__18953__auto___32869 + (1));
i__18953__auto___32869 = G__32870;
continue;
} else {
}
break;
}

var argseq__18960__auto__ = ((((0) < args__18959__auto__.length))?(new cljs.core.IndexedSeq(args__18959__auto__.slice((0)),(0),null)):null);
return taoensso.encore.queue_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__18960__auto__);
});

taoensso.encore.queue_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (items){
return taoensso.encore.queue.cljs$core$IFn$_invoke$arity$1(items);
});

taoensso.encore.queue_STAR_.cljs$lang$maxFixedArity = (0);

taoensso.encore.queue_STAR_.cljs$lang$applyTo = (function (seq32867){
return taoensso.encore.queue_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq32867));
});

/**
 * (seq-kvs {:a :A}) => (:a :A)
 */
taoensso.encore.seq_kvs = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.reduce,cljs.core.concat);
/**
 * Like `apply` but calls `seq-kvs` on final arg
 */
taoensso.encore.mapply = (function taoensso$encore$mapply(var_args){
var args__18959__auto__ = [];
var len__18952__auto___32874 = arguments.length;
var i__18953__auto___32875 = (0);
while(true){
if((i__18953__auto___32875 < len__18952__auto___32874)){
args__18959__auto__.push((arguments[i__18953__auto___32875]));

var G__32876 = (i__18953__auto___32875 + (1));
i__18953__auto___32875 = G__32876;
continue;
} else {
}
break;
}

var argseq__18960__auto__ = ((((1) < args__18959__auto__.length))?(new cljs.core.IndexedSeq(args__18959__auto__.slice((1)),(0),null)):null);
return taoensso.encore.mapply.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__18960__auto__);
});

taoensso.encore.mapply.cljs$core$IFn$_invoke$arity$variadic = (function (f,args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.butlast(args),(function (){var G__32873 = cljs.core.last(args);
return (taoensso.encore.seq_kvs.cljs$core$IFn$_invoke$arity$1 ? taoensso.encore.seq_kvs.cljs$core$IFn$_invoke$arity$1(G__32873) : taoensso.encore.seq_kvs.call(null,G__32873));
})()));
});

taoensso.encore.mapply.cljs$lang$maxFixedArity = (1);

taoensso.encore.mapply.cljs$lang$applyTo = (function (seq32871){
var G__32872 = cljs.core.first(seq32871);
var seq32871__$1 = cljs.core.next(seq32871);
return taoensso.encore.mapply.cljs$core$IFn$_invoke$arity$variadic(G__32872,seq32871__$1);
});

/**
 * Faster `zipmap` using transients
 */
taoensso.encore.fzipmap = (function taoensso$encore$fzipmap(ks,vs){
var m = cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY);
var ks__$1 = cljs.core.seq(ks);
var vs__$1 = cljs.core.seq(vs);
while(true){
if((ks__$1) && (vs__$1)){
var G__32877 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m,cljs.core.first(ks__$1),cljs.core.first(vs__$1));
var G__32878 = cljs.core.next(ks__$1);
var G__32879 = cljs.core.next(vs__$1);
m = G__32877;
ks__$1 = G__32878;
vs__$1 = G__32879;
continue;
} else {
return cljs.core.persistent_BANG_(m);
}
break;
}
});
/**
 * Greedy version of `interleave`, Ref. http://goo.gl/KvzqWb
 */
taoensso.encore.interleave_all = (function taoensso$encore$interleave_all(var_args){
var args32880 = [];
var len__18952__auto___32886 = arguments.length;
var i__18953__auto___32887 = (0);
while(true){
if((i__18953__auto___32887 < len__18952__auto___32886)){
args32880.push((arguments[i__18953__auto___32887]));

var G__32888 = (i__18953__auto___32887 + (1));
i__18953__auto___32887 = G__32888;
continue;
} else {
}
break;
}

var G__32885 = args32880.length;
switch (G__32885) {
case 0:
return taoensso.encore.interleave_all.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return taoensso.encore.interleave_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.interleave_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__18975__auto__ = (new cljs.core.IndexedSeq(args32880.slice((2)),(0),null));
return taoensso.encore.interleave_all.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__18975__auto__);

}
});

taoensso.encore.interleave_all.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.List.EMPTY;
});

taoensso.encore.interleave_all.cljs$core$IFn$_invoke$arity$1 = (function (c1){
return (new cljs.core.LazySeq(null,(function (){
return c1;
}),null,null));
});

taoensso.encore.interleave_all.cljs$core$IFn$_invoke$arity$2 = (function (c1,c2){
return (new cljs.core.LazySeq(null,(function (){
var s1 = cljs.core.seq(c1);
var s2 = cljs.core.seq(c2);
if((s1) && (s2)){
return cljs.core.cons(cljs.core.first(s1),cljs.core.cons(cljs.core.first(s2),taoensso.encore.interleave_all.cljs$core$IFn$_invoke$arity$2(cljs.core.rest(s1),cljs.core.rest(s2))));
} else {
if(s1){
return s1;
} else {
if(s2){
return s2;
} else {
return null;
}
}
}
}),null,null));
});

taoensso.encore.interleave_all.cljs$core$IFn$_invoke$arity$variadic = (function (c1,c2,colls){
return (new cljs.core.LazySeq(null,(function (){
var ss = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.seq,cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(colls,c2,cljs.core.array_seq([c1], 0))));
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,ss),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(taoensso.encore.interleave_all,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.rest,ss)));
}),null,null));
});

taoensso.encore.interleave_all.cljs$lang$applyTo = (function (seq32881){
var G__32882 = cljs.core.first(seq32881);
var seq32881__$1 = cljs.core.next(seq32881);
var G__32883 = cljs.core.first(seq32881__$1);
var seq32881__$2 = cljs.core.next(seq32881__$1);
return taoensso.encore.interleave_all.cljs$core$IFn$_invoke$arity$variadic(G__32882,G__32883,seq32881__$2);
});

taoensso.encore.interleave_all.cljs$lang$maxFixedArity = (2);

taoensso.encore.vinterleave_all = (function taoensso$encore$vinterleave_all(c1,c2){
var v = cljs.core.transient$(cljs.core.PersistentVector.EMPTY);
var s1 = cljs.core.seq(c1);
var s2 = cljs.core.seq(c2);
while(true){
if((s1) && (s2)){
var G__32890 = cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(v,cljs.core.first(s1)),cljs.core.first(s2));
var G__32891 = cljs.core.next(s1);
var G__32892 = cljs.core.next(s2);
v = G__32890;
s1 = G__32891;
s2 = G__32892;
continue;
} else {
if(s1){
return cljs.core.persistent_BANG_(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj_BANG_,v,s1));
} else {
if(s2){
return cljs.core.persistent_BANG_(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj_BANG_,v,s2));
} else {
return cljs.core.persistent_BANG_(v);
}
}
}
break;
}
});
/**
 * Reverse comparator
 */
taoensso.encore.rcompare = (function taoensso$encore$rcompare(x,y){
return cljs.core.compare(y,x);
});
taoensso.encore._nested_merge_with = (function taoensso$encore$_nested_merge_with(f,maps){
if(cljs.core.truth_(taoensso.encore.rsome(cljs.core.identity,maps))){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,in$){
return cljs.core.reduce_kv((function taoensso$encore$_nested_merge_with_$_rf2(acc__$1,k,rv){
if(cljs.core.contains_QMARK_(acc__$1,k)){
var lv = cljs.core.get.cljs$core$IFn$_invoke$arity$2(acc__$1,k);
if((cljs.core.map_QMARK_(lv)) && (cljs.core.map_QMARK_(rv))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc__$1,k,cljs.core.reduce_kv(taoensso$encore$_nested_merge_with_$_rf2,lv,rv));
} else {
if(taoensso.encore.kw_identical_QMARK_(rv,cljs.core.cst$kw$merge_SLASH_dissoc)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(acc__$1,k);
} else {
var new_rv = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(lv,rv) : f.call(null,lv,rv));
if(taoensso.encore.kw_identical_QMARK_(new_rv,cljs.core.cst$kw$merge_SLASH_dissoc)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(acc__$1,k);
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc__$1,k,new_rv);
}
}
}
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc__$1,k,rv);
}
}),acc,in$);
}),cljs.core.PersistentArrayMap.EMPTY,maps);
} else {
return null;
}
});
taoensso.encore.nested_merge_with = (function taoensso$encore$nested_merge_with(var_args){
var args__18959__auto__ = [];
var len__18952__auto___32895 = arguments.length;
var i__18953__auto___32896 = (0);
while(true){
if((i__18953__auto___32896 < len__18952__auto___32895)){
args__18959__auto__.push((arguments[i__18953__auto___32896]));

var G__32897 = (i__18953__auto___32896 + (1));
i__18953__auto___32896 = G__32897;
continue;
} else {
}
break;
}

var argseq__18960__auto__ = ((((1) < args__18959__auto__.length))?(new cljs.core.IndexedSeq(args__18959__auto__.slice((1)),(0),null)):null);
return taoensso.encore.nested_merge_with.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__18960__auto__);
});

taoensso.encore.nested_merge_with.cljs$core$IFn$_invoke$arity$variadic = (function (f,maps){
return taoensso.encore._nested_merge_with(f,maps);
});

taoensso.encore.nested_merge_with.cljs$lang$maxFixedArity = (1);

taoensso.encore.nested_merge_with.cljs$lang$applyTo = (function (seq32893){
var G__32894 = cljs.core.first(seq32893);
var seq32893__$1 = cljs.core.next(seq32893);
return taoensso.encore.nested_merge_with.cljs$core$IFn$_invoke$arity$variadic(G__32894,seq32893__$1);
});

taoensso.encore.nested_merge = (function taoensso$encore$nested_merge(var_args){
var args__18959__auto__ = [];
var len__18952__auto___32899 = arguments.length;
var i__18953__auto___32900 = (0);
while(true){
if((i__18953__auto___32900 < len__18952__auto___32899)){
args__18959__auto__.push((arguments[i__18953__auto___32900]));

var G__32901 = (i__18953__auto___32900 + (1));
i__18953__auto___32900 = G__32901;
continue;
} else {
}
break;
}

var argseq__18960__auto__ = ((((0) < args__18959__auto__.length))?(new cljs.core.IndexedSeq(args__18959__auto__.slice((0)),(0),null)):null);
return taoensso.encore.nested_merge.cljs$core$IFn$_invoke$arity$variadic(argseq__18960__auto__);
});

taoensso.encore.nested_merge.cljs$core$IFn$_invoke$arity$variadic = (function (maps){
return taoensso.encore._nested_merge_with((function (x,y){
return y;
}),maps);
});

taoensso.encore.nested_merge.cljs$lang$maxFixedArity = (0);

taoensso.encore.nested_merge.cljs$lang$applyTo = (function (seq32898){
return taoensso.encore.nested_merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq32898));
});

/**
 * Minor optimization for single-threaded Cljs
 */
taoensso.encore._platform_cas_BANG_ = (function taoensso$encore$_platform_cas_BANG_(atom_,old_val,new_val){
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(atom_,new_val) : cljs.core.reset_BANG_.call(null,atom_,new_val));

return true;
});
/**
 * Returns [<old-val> <new-val>]
 */
taoensso.encore.dswap_BANG_ = (function taoensso$encore$dswap_BANG_(atom_,f){
var ov = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(atom_) : cljs.core.deref.call(null,atom_));
var nv = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(ov) : f.call(null,ov));
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(atom_,nv) : cljs.core.reset_BANG_.call(null,atom_,nv));

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ov,nv], null);
});
/**
 * Used by memoization utils
 */
taoensso.encore._swap_cache_BANG_ = (function taoensso$encore$_swap_cache_BANG_(atom_,k,f){
var om = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(atom_) : cljs.core.deref.call(null,atom_));
var nv = (function (){var G__32903 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(om,k);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__32903) : f.call(null,G__32903));
})();
var nm = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(om,k,nv);
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(atom_,nm) : cljs.core.reset_BANG_.call(null,atom_,nm));

return nv;
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
taoensso.encore.Swapped = (function (new_val,return_val,__meta,__extmap,__hash){
this.new_val = new_val;
this.return_val = return_val;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
taoensso.encore.Swapped.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__18439__auto__,k__18440__auto__){
var self__ = this;
var this__18439__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__18439__auto____$1,k__18440__auto__,null);
});

taoensso.encore.Swapped.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__18441__auto__,k32905,else__18442__auto__){
var self__ = this;
var this__18441__auto____$1 = this;
var G__32907 = (((k32905 instanceof cljs.core.Keyword))?k32905.fqn:null);
switch (G__32907) {
case "new-val":
return self__.new_val;

break;
case "return-val":
return self__.return_val;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k32905,else__18442__auto__);

}
});

taoensso.encore.Swapped.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__18453__auto__,writer__18454__auto__,opts__18455__auto__){
var self__ = this;
var this__18453__auto____$1 = this;
var pr_pair__18456__auto__ = ((function (this__18453__auto____$1){
return (function (keyval__18457__auto__){
return cljs.core.pr_sequential_writer(writer__18454__auto__,cljs.core.pr_writer,""," ","",opts__18455__auto__,keyval__18457__auto__);
});})(this__18453__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__18454__auto__,pr_pair__18456__auto__,"#taoensso.encore.Swapped{",", ","}",opts__18455__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$new_DASH_val,self__.new_val],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$return_DASH_val,self__.return_val],null))], null),self__.__extmap));
});

taoensso.encore.Swapped.prototype.cljs$core$IIterable$ = true;

taoensso.encore.Swapped.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__32904){
var self__ = this;
var G__32904__$1 = this;
return (new cljs.core.RecordIter((0),G__32904__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$new_DASH_val,cljs.core.cst$kw$return_DASH_val], null),cljs.core._iterator(self__.__extmap)));
});

taoensso.encore.Swapped.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__18437__auto__){
var self__ = this;
var this__18437__auto____$1 = this;
return self__.__meta;
});

taoensso.encore.Swapped.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__18433__auto__){
var self__ = this;
var this__18433__auto____$1 = this;
return (new taoensso.encore.Swapped(self__.new_val,self__.return_val,self__.__meta,self__.__extmap,self__.__hash));
});

taoensso.encore.Swapped.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__18443__auto__){
var self__ = this;
var this__18443__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
});

taoensso.encore.Swapped.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__18434__auto__){
var self__ = this;
var this__18434__auto____$1 = this;
var h__18206__auto__ = self__.__hash;
if(!((h__18206__auto__ == null))){
return h__18206__auto__;
} else {
var h__18206__auto____$1 = cljs.core.hash_imap(this__18434__auto____$1);
self__.__hash = h__18206__auto____$1;

return h__18206__auto____$1;
}
});

taoensso.encore.Swapped.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__18435__auto__,other__18436__auto__){
var self__ = this;
var this__18435__auto____$1 = this;
if(cljs.core.truth_((function (){var and__17757__auto__ = other__18436__auto__;
if(cljs.core.truth_(and__17757__auto__)){
var and__17757__auto____$1 = (this__18435__auto____$1.constructor === other__18436__auto__.constructor);
if(and__17757__auto____$1){
return cljs.core.equiv_map(this__18435__auto____$1,other__18436__auto__);
} else {
return and__17757__auto____$1;
}
} else {
return and__17757__auto__;
}
})())){
return true;
} else {
return false;
}
});

taoensso.encore.Swapped.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__18448__auto__,k__18449__auto__){
var self__ = this;
var this__18448__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$return_DASH_val,null,cljs.core.cst$kw$new_DASH_val,null], null), null),k__18449__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__18448__auto____$1),self__.__meta),k__18449__auto__);
} else {
return (new taoensso.encore.Swapped(self__.new_val,self__.return_val,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__18449__auto__)),null));
}
});

taoensso.encore.Swapped.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__18446__auto__,k__18447__auto__,G__32904){
var self__ = this;
var this__18446__auto____$1 = this;
var pred__32908 = cljs.core.keyword_identical_QMARK_;
var expr__32909 = k__18447__auto__;
if(cljs.core.truth_((pred__32908.cljs$core$IFn$_invoke$arity$2 ? pred__32908.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$new_DASH_val,expr__32909) : pred__32908.call(null,cljs.core.cst$kw$new_DASH_val,expr__32909)))){
return (new taoensso.encore.Swapped(G__32904,self__.return_val,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__32908.cljs$core$IFn$_invoke$arity$2 ? pred__32908.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$return_DASH_val,expr__32909) : pred__32908.call(null,cljs.core.cst$kw$return_DASH_val,expr__32909)))){
return (new taoensso.encore.Swapped(self__.new_val,G__32904,self__.__meta,self__.__extmap,null));
} else {
return (new taoensso.encore.Swapped(self__.new_val,self__.return_val,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__18447__auto__,G__32904),null));
}
}
});

taoensso.encore.Swapped.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__18451__auto__){
var self__ = this;
var this__18451__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$new_DASH_val,self__.new_val],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$return_DASH_val,self__.return_val],null))], null),self__.__extmap));
});

taoensso.encore.Swapped.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__18438__auto__,G__32904){
var self__ = this;
var this__18438__auto____$1 = this;
return (new taoensso.encore.Swapped(self__.new_val,self__.return_val,G__32904,self__.__extmap,self__.__hash));
});

taoensso.encore.Swapped.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__18444__auto__,entry__18445__auto__){
var self__ = this;
var this__18444__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__18445__auto__)){
return cljs.core._assoc(this__18444__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__18445__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__18445__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__18444__auto____$1,entry__18445__auto__);
}
});

taoensso.encore.Swapped.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$new_DASH_val,cljs.core.cst$sym$return_DASH_val], null);
});

taoensso.encore.Swapped.cljs$lang$type = true;

taoensso.encore.Swapped.cljs$lang$ctorPrSeq = (function (this__18475__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"taoensso.encore/Swapped");
});

taoensso.encore.Swapped.cljs$lang$ctorPrWriter = (function (this__18475__auto__,writer__18476__auto__){
return cljs.core._write(writer__18476__auto__,"taoensso.encore/Swapped");
});

taoensso.encore.__GT_Swapped = (function taoensso$encore$__GT_Swapped(new_val,return_val){
return (new taoensso.encore.Swapped(new_val,return_val,null,null,null));
});

taoensso.encore.map__GT_Swapped = (function taoensso$encore$map__GT_Swapped(G__32906){
return (new taoensso.encore.Swapped(cljs.core.cst$kw$new_DASH_val.cljs$core$IFn$_invoke$arity$1(G__32906),cljs.core.cst$kw$return_DASH_val.cljs$core$IFn$_invoke$arity$1(G__32906),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__32906,cljs.core.cst$kw$new_DASH_val,cljs.core.array_seq([cljs.core.cst$kw$return_DASH_val], 0)),null));
});

taoensso.encore.swapped_QMARK_ = (function taoensso$encore$swapped_QMARK_(x){
return (x instanceof taoensso.encore.Swapped);
});
taoensso.encore.swapped = (function taoensso$encore$swapped(new_val,return_val){
return (new taoensso.encore.Swapped(new_val,return_val,null,null,null));
});
/**
 * Returns [<new-val> <return-val>]
 */
taoensso.encore._swapped = (function taoensso$encore$_swapped(var_args){
var args32912 = [];
var len__18952__auto___32924 = arguments.length;
var i__18953__auto___32925 = (0);
while(true){
if((i__18953__auto___32925 < len__18952__auto___32924)){
args32912.push((arguments[i__18953__auto___32925]));

var G__32926 = (i__18953__auto___32925 + (1));
i__18953__auto___32925 = G__32926;
continue;
} else {
}
break;
}

var G__32914 = args32912.length;
switch (G__32914) {
case 1:
return taoensso.encore._swapped.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore._swapped.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore._swapped.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32912.length)].join('')));

}
});

taoensso.encore._swapped.cljs$core$IFn$_invoke$arity$1 = (function (x){
if(taoensso.encore.swapped_QMARK_(x)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$new_DASH_val.cljs$core$IFn$_invoke$arity$1(x),cljs.core.cst$kw$return_DASH_val.cljs$core$IFn$_invoke$arity$1(x)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,x], null);
}
});

taoensso.encore._swapped.cljs$core$IFn$_invoke$arity$2 = (function (old_val,f){
return taoensso.encore._swapped.cljs$core$IFn$_invoke$arity$1((f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(old_val) : f.call(null,old_val)));
});

taoensso.encore._swapped.cljs$core$IFn$_invoke$arity$3 = (function (old_val,ks,f){
var vec__32915 = ks;
var seq__32916 = cljs.core.seq(vec__32915);
var first__32917 = cljs.core.first(seq__32916);
var seq__32916__$1 = cljs.core.next(seq__32916);
var k1 = first__32917;
var kn = seq__32916__$1;
var m = old_val;
if(kn){
if(taoensso.encore.kw_identical_QMARK_(f,cljs.core.cst$kw$swap_SLASH_dissoc)){
return taoensso.encore._swapped.cljs$core$IFn$_invoke$arity$1(taoensso.encore.dissoc_in.cljs$core$IFn$_invoke$arity$3(m,cljs.core.butlast(ks),cljs.core.last(ks)));
} else {
var old_val_in = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(m,ks);
var vec__32918 = taoensso.encore._swapped.cljs$core$IFn$_invoke$arity$1((f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(old_val_in) : f.call(null,old_val_in)));
var new_val_in = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32918,(0),null);
var return_val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32918,(1),null);
var new_val = ((taoensso.encore.kw_identical_QMARK_(new_val_in,cljs.core.cst$kw$swap_SLASH_dissoc))?taoensso.encore.dissoc_in.cljs$core$IFn$_invoke$arity$3(m,cljs.core.butlast(ks),cljs.core.last(ks)):cljs.core.assoc_in(m,ks,new_val_in));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_val,return_val], null);
}
} else {
if(((k1 == null)) && (cljs.core.empty_QMARK_(ks))){
return taoensso.encore._swapped.cljs$core$IFn$_invoke$arity$1((f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(old_val) : f.call(null,old_val)));
} else {
if(taoensso.encore.kw_identical_QMARK_(f,cljs.core.cst$kw$swap_SLASH_dissoc)){
return taoensso.encore._swapped.cljs$core$IFn$_invoke$arity$1(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(m,k1));
} else {
var old_val_in = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k1);
var vec__32921 = taoensso.encore._swapped.cljs$core$IFn$_invoke$arity$1((f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(old_val_in) : f.call(null,old_val_in)));
var new_val_in = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32921,(0),null);
var return_val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32921,(1),null);
var new_val = ((taoensso.encore.kw_identical_QMARK_(new_val_in,cljs.core.cst$kw$swap_SLASH_dissoc))?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(m,k1):cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k1,new_val_in));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_val,return_val], null);
}
}
}
});

taoensso.encore._swapped.cljs$lang$maxFixedArity = 3;

/**
 * Reduces input with
 *   [<type> <ks> <reset-val-or-swap-fn>] or
 *       [<ks> <reset-val-or-swap-fn>] ops
 */
taoensso.encore._replace_in = (function taoensso$encore$_replace_in(_QMARK_vf_type,m,ops){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,_QMARK_op){
if(cljs.core.truth_(_QMARK_op)){
var vec__32932 = (cljs.core.truth_(_QMARK_vf_type)?cljs.core.cons(_QMARK_vf_type,_QMARK_op):_QMARK_op);
var vf_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32932,(0),null);
var ks = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32932,(1),null);
var valf = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32932,(2),null);
var G__32935 = (((vf_type instanceof cljs.core.Keyword))?vf_type.fqn:null);
switch (G__32935) {
case "reset":
if(cljs.core.empty_QMARK_(ks)){
return valf;
} else {
return cljs.core.assoc_in(acc,ks,valf);
}

break;
case "swap":
if((valf == null)){
return acc;
} else {
if(cljs.core.empty_QMARK_(ks)){
return (valf.cljs$core$IFn$_invoke$arity$1 ? valf.cljs$core$IFn$_invoke$arity$1(acc) : valf.call(null,acc));
} else {
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(taoensso.encore._swapped.cljs$core$IFn$_invoke$arity$3(acc,ks,valf),(0));
}
}

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(vf_type)].join('')));

}
} else {
return acc;
}
}),m,ops);
});
/**
 * For use with `swap!`, etc.
 */
taoensso.encore.replace_in = (function taoensso$encore$replace_in(var_args){
var args__18959__auto__ = [];
var len__18952__auto___32939 = arguments.length;
var i__18953__auto___32940 = (0);
while(true){
if((i__18953__auto___32940 < len__18952__auto___32939)){
args__18959__auto__.push((arguments[i__18953__auto___32940]));

var G__32941 = (i__18953__auto___32940 + (1));
i__18953__auto___32940 = G__32941;
continue;
} else {
}
break;
}

var argseq__18960__auto__ = ((((1) < args__18959__auto__.length))?(new cljs.core.IndexedSeq(args__18959__auto__.slice((1)),(0),null)):null);
return taoensso.encore.replace_in.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__18960__auto__);
});

taoensso.encore.replace_in.cljs$core$IFn$_invoke$arity$variadic = (function (m,ops){
return taoensso.encore._replace_in(null,m,ops);
});

taoensso.encore.replace_in.cljs$lang$maxFixedArity = (1);

taoensso.encore.replace_in.cljs$lang$applyTo = (function (seq32937){
var G__32938 = cljs.core.first(seq32937);
var seq32937__$1 = cljs.core.next(seq32937);
return taoensso.encore.replace_in.cljs$core$IFn$_invoke$arity$variadic(G__32938,seq32937__$1);
});

taoensso.encore.pairs_into = (function taoensso$encore$pairs_into(to,from){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(to,cljs.core.partition_all.cljs$core$IFn$_invoke$arity$1((2)),from);
});
/**
 * More powerful version of `swap!`:
 *  * Supports optional `update-in` semantics.
 *  * Swap fn can return `(swapped <new-val> <return-val>)` rather than just
 *    <new-val>. This is useful when writing atomic pull fns, etc.
 */
taoensso.encore.swap_in_BANG_ = (function taoensso$encore$swap_in_BANG_(var_args){
var args32946 = [];
var len__18952__auto___32961 = arguments.length;
var i__18953__auto___32962 = (0);
while(true){
if((i__18953__auto___32962 < len__18952__auto___32961)){
args32946.push((arguments[i__18953__auto___32962]));

var G__32963 = (i__18953__auto___32962 + (1));
i__18953__auto___32962 = G__32963;
continue;
} else {
}
break;
}

var G__32952 = args32946.length;
switch (G__32952) {
case 2:
return taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var argseq__18975__auto__ = (new cljs.core.IndexedSeq(args32946.slice((3)),(0),null));
return taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__18975__auto__);

}
});

taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (atom_,f){
while(true){
var old_val = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(atom_) : cljs.core.deref.call(null,atom_));
var vec__32953 = taoensso.encore._swapped.cljs$core$IFn$_invoke$arity$1((f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(old_val) : f.call(null,old_val)));
var new_val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32953,(0),null);
var return_val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32953,(1),null);
if(cljs.core.truth_(taoensso.encore._platform_cas_BANG_(atom_,old_val,new_val))){
return return_val;
} else {
continue;
}
break;
}
});

taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (atom_,ks,f){
while(true){
var old_val = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(atom_) : cljs.core.deref.call(null,atom_));
var vec__32956 = taoensso.encore._swapped.cljs$core$IFn$_invoke$arity$3(old_val,ks,f);
var new_val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32956,(0),null);
var return_val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32956,(1),null);
if(cljs.core.truth_(taoensso.encore._platform_cas_BANG_(atom_,old_val,new_val))){
return return_val;
} else {
continue;
}
break;
}
});

taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (atom_,ks,f,more){
if(cljs.core.truth_((function (){var z = (function (){try{return cljs.core.count(more);
}catch (e32959){if((e32959 instanceof Error)){
var e = e32959;
return (new taoensso.truss.impl.WrappedError(e));
} else {
throw e32959;

}
}})();
var e = (function (){try{if((z instanceof taoensso.truss.impl.WrappedError)){
return z;
} else {
if(cljs.core.even_QMARK_(z)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}
}catch (e32960){if((e32960 instanceof Error)){
var e = e32960;
return e;
} else {
throw e32960;

}
}})();
if((e == null)){
return true;
} else {
return taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.encore",null,"(even? (count more))",z,e,null);
}
})())){
} else {
throw (new Error("Assert failed: (have? even? (count more))"));
}

var op_pairs = taoensso.encore.pairs_into(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ks,f], null)], null),more);
while(true){
var old_val = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(atom_) : cljs.core.deref.call(null,atom_));
var new_val = taoensso.encore._replace_in(cljs.core.cst$kw$swap,old_val,op_pairs);
if(cljs.core.truth_(taoensso.encore._platform_cas_BANG_(atom_,old_val,new_val))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [old_val,new_val], null);
} else {
continue;
}
break;
}
});

taoensso.encore.swap_in_BANG_.cljs$lang$applyTo = (function (seq32947){
var G__32948 = cljs.core.first(seq32947);
var seq32947__$1 = cljs.core.next(seq32947);
var G__32949 = cljs.core.first(seq32947__$1);
var seq32947__$2 = cljs.core.next(seq32947__$1);
var G__32950 = cljs.core.first(seq32947__$2);
var seq32947__$3 = cljs.core.next(seq32947__$2);
return taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__32948,G__32949,G__32950,seq32947__$3);
});

taoensso.encore.swap_in_BANG_.cljs$lang$maxFixedArity = (3);

/**
 * Is to `reset!` as `swap-in!` is to `swap!`
 */
taoensso.encore.reset_in_BANG_ = (function taoensso$encore$reset_in_BANG_(var_args){
var args32965 = [];
var len__18952__auto___32974 = arguments.length;
var i__18953__auto___32975 = (0);
while(true){
if((i__18953__auto___32975 < len__18952__auto___32974)){
args32965.push((arguments[i__18953__auto___32975]));

var G__32976 = (i__18953__auto___32975 + (1));
i__18953__auto___32975 = G__32976;
continue;
} else {
}
break;
}

var G__32971 = args32965.length;
switch (G__32971) {
case 3:
return taoensso.encore.reset_in_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var argseq__18975__auto__ = (new cljs.core.IndexedSeq(args32965.slice((3)),(0),null));
return taoensso.encore.reset_in_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__18975__auto__);

}
});

taoensso.encore.reset_in_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (atom_,ks,new_val){
if(cljs.core.empty_QMARK_(ks)){
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(atom_,new_val) : cljs.core.reset_BANG_.call(null,atom_,new_val));
} else {
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(atom_,(function (old_val){
return cljs.core.assoc_in(old_val,ks,new_val);
}));
}
});

taoensso.encore.reset_in_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (atom_,ks,new_val,more){
if(cljs.core.truth_((function (){var z = (function (){try{return cljs.core.count(more);
}catch (e32972){if((e32972 instanceof Error)){
var e = e32972;
return (new taoensso.truss.impl.WrappedError(e));
} else {
throw e32972;

}
}})();
var e = (function (){try{if((z instanceof taoensso.truss.impl.WrappedError)){
return z;
} else {
if(cljs.core.even_QMARK_(z)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}
}catch (e32973){if((e32973 instanceof Error)){
var e = e32973;
return e;
} else {
throw e32973;

}
}})();
if((e == null)){
return true;
} else {
return taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.encore",null,"(even? (count more))",z,e,null);
}
})())){
} else {
throw (new Error("Assert failed: (have? even? (count more))"));
}

var op_pairs = taoensso.encore.pairs_into(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ks,new_val], null)], null),more);
while(true){
var old_val = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(atom_) : cljs.core.deref.call(null,atom_));
var new_val__$1 = taoensso.encore._replace_in(cljs.core.cst$kw$reset,old_val,op_pairs);
if(cljs.core.truth_(taoensso.encore._platform_cas_BANG_(atom_,old_val,new_val__$1))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [old_val,new_val__$1], null);
} else {
continue;
}
break;
}
});

taoensso.encore.reset_in_BANG_.cljs$lang$applyTo = (function (seq32966){
var G__32967 = cljs.core.first(seq32966);
var seq32966__$1 = cljs.core.next(seq32966);
var G__32968 = cljs.core.first(seq32966__$1);
var seq32966__$2 = cljs.core.next(seq32966__$1);
var G__32969 = cljs.core.first(seq32966__$2);
var seq32966__$3 = cljs.core.next(seq32966__$2);
return taoensso.encore.reset_in_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__32967,G__32968,G__32969,seq32966__$3);
});

taoensso.encore.reset_in_BANG_.cljs$lang$maxFixedArity = (3);

taoensso.encore.str_builder_QMARK_ = (function taoensso$encore$str_builder_QMARK_(x){
return (x instanceof goog.string.StringBuffer);
});
/**
 * For cross-platform string building
 */
taoensso.encore.str_builder = (function() {
var taoensso$encore$str_builder = null;
var taoensso$encore$str_builder__0 = (function (){
return (new goog.string.StringBuffer());
});
var taoensso$encore$str_builder__1 = (function (s_init){
return (new goog.string.StringBuffer(s_init));
});
taoensso$encore$str_builder = function(s_init){
switch(arguments.length){
case 0:
return taoensso$encore$str_builder__0.call(this);
case 1:
return taoensso$encore$str_builder__1.call(this,s_init);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$encore$str_builder.cljs$core$IFn$_invoke$arity$0 = taoensso$encore$str_builder__0;
taoensso$encore$str_builder.cljs$core$IFn$_invoke$arity$1 = taoensso$encore$str_builder__1;
return taoensso$encore$str_builder;
})()
;
/**
 * For cross-platform string building
 */
taoensso.encore.sb_append = (function taoensso$encore$sb_append(var_args){
var args32978 = [];
var len__18952__auto___32984 = arguments.length;
var i__18953__auto___32985 = (0);
while(true){
if((i__18953__auto___32985 < len__18952__auto___32984)){
args32978.push((arguments[i__18953__auto___32985]));

var G__32986 = (i__18953__auto___32985 + (1));
i__18953__auto___32985 = G__32986;
continue;
} else {
}
break;
}

var G__32983 = args32978.length;
switch (G__32983) {
case 2:
return taoensso.encore.sb_append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__18975__auto__ = (new cljs.core.IndexedSeq(args32978.slice((2)),(0),null));
return taoensso.encore.sb_append.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__18975__auto__);

}
});

taoensso.encore.sb_append.cljs$core$IFn$_invoke$arity$2 = (function (str_builder,s){
return str_builder.append(s);
});

taoensso.encore.sb_append.cljs$core$IFn$_invoke$arity$variadic = (function (str_builder,s,more){
taoensso.encore.sb_append.cljs$core$IFn$_invoke$arity$2(str_builder,s);

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,in$){
return taoensso.encore.sb_append.cljs$core$IFn$_invoke$arity$2(acc,in$);
}),str_builder,more);
});

taoensso.encore.sb_append.cljs$lang$applyTo = (function (seq32979){
var G__32980 = cljs.core.first(seq32979);
var seq32979__$1 = cljs.core.next(seq32979);
var G__32981 = cljs.core.first(seq32979__$1);
var seq32979__$2 = cljs.core.next(seq32979__$1);
return taoensso.encore.sb_append.cljs$core$IFn$_invoke$arity$variadic(G__32980,G__32981,seq32979__$2);
});

taoensso.encore.sb_append.cljs$lang$maxFixedArity = (2);

/**
 * String builder reducing fn
 */
taoensso.encore.str_rf = (function() {
var taoensso$encore$str_rf = null;
var taoensso$encore$str_rf__0 = (function (){
return taoensso.encore.str_builder.cljs$core$IFn$_invoke$arity$0();
});
var taoensso$encore$str_rf__1 = (function (acc){
if(taoensso.encore.str_builder_QMARK_(acc)){
return acc;
} else {
return taoensso.encore.str_builder.cljs$core$IFn$_invoke$arity$1([cljs.core.str(acc)].join(''));
}
});
var taoensso$encore$str_rf__2 = (function (acc,in$){
return taoensso.encore.sb_append.cljs$core$IFn$_invoke$arity$2(((taoensso.encore.str_builder_QMARK_(acc))?acc:taoensso.encore.str_builder.cljs$core$IFn$_invoke$arity$1([cljs.core.str(acc)].join(''))),[cljs.core.str(in$)].join(''));
});
taoensso$encore$str_rf = function(acc,in$){
switch(arguments.length){
case 0:
return taoensso$encore$str_rf__0.call(this);
case 1:
return taoensso$encore$str_rf__1.call(this,acc);
case 2:
return taoensso$encore$str_rf__2.call(this,acc,in$);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$encore$str_rf.cljs$core$IFn$_invoke$arity$0 = taoensso$encore$str_rf__0;
taoensso$encore$str_rf.cljs$core$IFn$_invoke$arity$1 = taoensso$encore$str_rf__1;
taoensso$encore$str_rf.cljs$core$IFn$_invoke$arity$2 = taoensso$encore$str_rf__2;
return taoensso$encore$str_rf;
})()
;
taoensso.encore.undefined__GT_nil = (function taoensso$encore$undefined__GT_nil(x){
if((void 0 === x)){
return null;
} else {
return x;
}
});
taoensso.encore.nil__GT_str = (function taoensso$encore$nil__GT_str(x){
if(((void 0 === x)) || ((x == null))){
return "nil";
} else {
return x;
}
});
/**
 * Faster, transducer-based generalization of `clojure.string/join` with `xform`
 *  support
 */
taoensso.encore.str_join = (function taoensso$encore$str_join(var_args){
var args32992 = [];
var len__18952__auto___32995 = arguments.length;
var i__18953__auto___32996 = (0);
while(true){
if((i__18953__auto___32996 < len__18952__auto___32995)){
args32992.push((arguments[i__18953__auto___32996]));

var G__32997 = (i__18953__auto___32996 + (1));
i__18953__auto___32996 = G__32997;
continue;
} else {
}
break;
}

var G__32994 = args32992.length;
switch (G__32994) {
case 1:
return taoensso.encore.str_join.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.str_join.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.str_join.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32992.length)].join('')));

}
});

taoensso.encore.str_join.cljs$core$IFn$_invoke$arity$1 = (function (coll){
return taoensso.encore.str_join.cljs$core$IFn$_invoke$arity$3(null,null,coll);
});

taoensso.encore.str_join.cljs$core$IFn$_invoke$arity$2 = (function (separator,coll){
return taoensso.encore.str_join.cljs$core$IFn$_invoke$arity$3(separator,null,coll);
});

taoensso.encore.str_join.cljs$core$IFn$_invoke$arity$3 = (function (separator,xform,coll){
if(cljs.core.truth_((function (){var and__17757__auto__ = separator;
if(cljs.core.truth_(and__17757__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(separator,"");
} else {
return and__17757__auto__;
}
})())){
var sep_xform = cljs.core.interpose.cljs$core$IFn$_invoke$arity$1(separator);
var str_rf_STAR_ = cljs.core.completing.cljs$core$IFn$_invoke$arity$2(taoensso.encore.str_rf,cljs.core.str);
if(cljs.core.truth_(xform)){
return cljs.core.transduce.cljs$core$IFn$_invoke$arity$3(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(xform,sep_xform),str_rf_STAR_,coll);
} else {
return cljs.core.transduce.cljs$core$IFn$_invoke$arity$3(sep_xform,str_rf_STAR_,coll);
}
} else {
if(cljs.core.truth_(xform)){
return cljs.core.transduce.cljs$core$IFn$_invoke$arity$3(xform,cljs.core.completing.cljs$core$IFn$_invoke$arity$2(taoensso.encore.str_rf,cljs.core.str),coll);
} else {
return [cljs.core.str(cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(taoensso.encore.str_rf,coll))].join('');
}
}
});

taoensso.encore.str_join.cljs$lang$maxFixedArity = 3;

taoensso.encore.format_STAR_ = (function taoensso$encore$format_STAR_(fmt,args){
var fmt__$1 = (function (){var or__17769__auto__ = fmt;
if(cljs.core.truth_(or__17769__auto__)){
return or__17769__auto__;
} else {
return "";
}
})();
var args__$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(taoensso.encore.nil__GT_str,args);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(goog.string.format,fmt__$1,args__$1);
});
/**
 * Like `core/format` but:
 *  * Returns "" when fmt is nil rather than throwing an NPE
 *  * Formats nil as "nil" rather than "null"
 *  * Provides ClojureScript support via goog.string.format (this has fewer
 *    formatting options than Clojure's `format`!)
 */
taoensso.encore.format = (function taoensso$encore$format(var_args){
var args__18959__auto__ = [];
var len__18952__auto___33001 = arguments.length;
var i__18953__auto___33002 = (0);
while(true){
if((i__18953__auto___33002 < len__18952__auto___33001)){
args__18959__auto__.push((arguments[i__18953__auto___33002]));

var G__33003 = (i__18953__auto___33002 + (1));
i__18953__auto___33002 = G__33003;
continue;
} else {
}
break;
}

var argseq__18960__auto__ = ((((1) < args__18959__auto__.length))?(new cljs.core.IndexedSeq(args__18959__auto__.slice((1)),(0),null)):null);
return taoensso.encore.format.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__18960__auto__);
});

taoensso.encore.format.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,args){
return taoensso.encore.format_STAR_(fmt,args);
});

taoensso.encore.format.cljs$lang$maxFixedArity = (1);

taoensso.encore.format.cljs$lang$applyTo = (function (seq32999){
var G__33000 = cljs.core.first(seq32999);
var seq32999__$1 = cljs.core.next(seq32999);
return taoensso.encore.format.cljs$core$IFn$_invoke$arity$variadic(G__33000,seq32999__$1);
});

/**
 * Workaround for http://dev.clojure.org/jira/browse/CLJS-794,
 *                http://dev.clojure.org/jira/browse/CLJS-911.
 * 
 *   Note that ClojureScript 1.7.145 technically introduced a breaking "fix" for
 *   CLJS-911 (Ref. https://goo.gl/bk5hcT) but it's a mess in an attempt to keep
 *   some compatibility with the previous broken behaviour. The merged CLJS-911 fix
 *   provides only inconsistent (single-match) and error-prone compatibility with
 *   Clojure's `str/replace`. CLJS-794 is also still unresolved.
 * 
 *   This util provides behaviour consistent between Clojure/Script.
 */
taoensso.encore.str_replace = (function taoensso$encore$str_replace(s,match,replacement){
if(typeof match === 'string'){
return s.replace((new RegExp(goog.string.regExpEscape(match),"g")),replacement);
} else {
if((match instanceof RegExp)){
var flags = [cljs.core.str("g"),cljs.core.str((cljs.core.truth_(match.ignoreCase)?"i":null)),cljs.core.str((cljs.core.truth_(match.multiline)?"m":null))].join('');
var replacement__$1 = ((typeof replacement === 'string')?replacement:((function (flags){
return (function() { 
var G__33006__delegate = function (args){
var G__33005 = cljs.core.vec(args);
return (replacement.cljs$core$IFn$_invoke$arity$1 ? replacement.cljs$core$IFn$_invoke$arity$1(G__33005) : replacement.call(null,G__33005));
};
var G__33006 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__33007__i = 0, G__33007__a = new Array(arguments.length -  0);
while (G__33007__i < G__33007__a.length) {G__33007__a[G__33007__i] = arguments[G__33007__i + 0]; ++G__33007__i;}
  args = new cljs.core.IndexedSeq(G__33007__a,0);
} 
return G__33006__delegate.call(this,args);};
G__33006.cljs$lang$maxFixedArity = 0;
G__33006.cljs$lang$applyTo = (function (arglist__33008){
var args = cljs.core.seq(arglist__33008);
return G__33006__delegate(args);
});
G__33006.cljs$core$IFn$_invoke$arity$variadic = G__33006__delegate;
return G__33006;
})()
;})(flags))
);
return s.replace((new RegExp(match.source,flags)),replacement__$1);
} else {
throw [cljs.core.str("Invalid match arg: "),cljs.core.str(match)].join('');
}
}
});
taoensso.encore.str_contains_QMARK_ = (function taoensso$encore$str_contains_QMARK_(s,substr){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((-1),s.indexOf(substr));
});
taoensso.encore.str_starts_with_QMARK_ = (function taoensso$encore$str_starts_with_QMARK_(s,substr){
return (s.indexOf(substr) === (0));
});
taoensso.encore.str_ends_with_QMARK_ = (function taoensso$encore$str_ends_with_QMARK_(s,substr){
var s_len = s.length;
var substr_len = substr.length;
if((s_len >= substr_len)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((-1),s.indexOf(substr,(s_len - substr_len)));
} else {
return null;
}
});
taoensso.encore.str__QMARK_index = (function taoensso$encore$str__QMARK_index(var_args){
var args33009 = [];
var len__18952__auto___33012 = arguments.length;
var i__18953__auto___33013 = (0);
while(true){
if((i__18953__auto___33013 < len__18952__auto___33012)){
args33009.push((arguments[i__18953__auto___33013]));

var G__33014 = (i__18953__auto___33013 + (1));
i__18953__auto___33013 = G__33014;
continue;
} else {
}
break;
}

var G__33011 = args33009.length;
switch (G__33011) {
case 2:
return taoensso.encore.str__QMARK_index.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.str__QMARK_index.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return taoensso.encore.str__QMARK_index.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33009.length)].join('')));

}
});

taoensso.encore.str__QMARK_index.cljs$core$IFn$_invoke$arity$2 = (function (s,substr){
return taoensso.encore.str__QMARK_index.cljs$core$IFn$_invoke$arity$4(s,substr,(0),false);
});

taoensso.encore.str__QMARK_index.cljs$core$IFn$_invoke$arity$3 = (function (s,substr,start_idx){
return taoensso.encore.str__QMARK_index.cljs$core$IFn$_invoke$arity$4(s,substr,start_idx,false);
});

taoensso.encore.str__QMARK_index.cljs$core$IFn$_invoke$arity$4 = (function (s,substr,start_idx,last_QMARK_){
var result = (cljs.core.truth_(last_QMARK_)?s.lastIndexOf(substr,start_idx):s.indexOf(substr,start_idx));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(result,(-1))){
return result;
} else {
return null;
}
});

taoensso.encore.str__QMARK_index.cljs$lang$maxFixedArity = 4;

/**
 * Like `subs` but provides consistent clj/s behaviour:
 *  - Never throws; snaps to valid start and end indexes.
 *  - Returns nil rather than an empty string.
 */
taoensso.encore._QMARK_substr_LT_idx = (function taoensso$encore$_QMARK_substr_LT_idx(var_args){
var args33016 = [];
var len__18952__auto___33019 = arguments.length;
var i__18953__auto___33020 = (0);
while(true){
if((i__18953__auto___33020 < len__18952__auto___33019)){
args33016.push((arguments[i__18953__auto___33020]));

var G__33021 = (i__18953__auto___33020 + (1));
i__18953__auto___33020 = G__33021;
continue;
} else {
}
break;
}

var G__33018 = args33016.length;
switch (G__33018) {
case 2:
return taoensso.encore._QMARK_substr_LT_idx.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore._QMARK_substr_LT_idx.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33016.length)].join('')));

}
});

taoensso.encore._QMARK_substr_LT_idx.cljs$core$IFn$_invoke$arity$2 = (function (s,start){
return taoensso.encore.as__QMARK_nempty_str(s.substring(start));
});

taoensso.encore._QMARK_substr_LT_idx.cljs$core$IFn$_invoke$arity$3 = (function (s,start,end){
if((start >= end)){
return null;
} else {
return s.substring(start,end);
}
});

taoensso.encore._QMARK_substr_LT_idx.cljs$lang$maxFixedArity = 3;

/**
 * Like `?substr<idx` but:
 *  - Takes `length` instead of `end` (index).
 *  - -ive `start` => index from right of string.
 */
taoensso.encore._QMARK_substr_LT_len = (function taoensso$encore$_QMARK_substr_LT_len(var_args){
var args33023 = [];
var len__18952__auto___33026 = arguments.length;
var i__18953__auto___33027 = (0);
while(true){
if((i__18953__auto___33027 < len__18952__auto___33026)){
args33023.push((arguments[i__18953__auto___33027]));

var G__33028 = (i__18953__auto___33027 + (1));
i__18953__auto___33027 = G__33028;
continue;
} else {
}
break;
}

var G__33025 = args33023.length;
switch (G__33025) {
case 2:
return taoensso.encore._QMARK_substr_LT_len.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore._QMARK_substr_LT_len.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33023.length)].join('')));

}
});

taoensso.encore._QMARK_substr_LT_len.cljs$core$IFn$_invoke$arity$2 = (function (s,start){
return taoensso.encore.as__QMARK_nempty_str(s.substr(start));
});

taoensso.encore._QMARK_substr_LT_len.cljs$core$IFn$_invoke$arity$3 = (function (s,start,length){
return taoensso.encore.as__QMARK_nempty_str(s.substr(start,length));
});

taoensso.encore._QMARK_substr_LT_len.cljs$lang$maxFixedArity = 3;

/**
 * Like `string/join` but skips duplicate separators
 */
taoensso.encore.str_join_once = (function taoensso$encore$str_join_once(separator,coll){
var sep = separator;
if(clojure.string.blank_QMARK_(sep)){
return [cljs.core.str(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(taoensso.encore.str_rf,"",coll))].join('');
} else {
var acc_ends_with_sep_QMARK__ = cljs.core.volatile_BANG_(false);
var acc_empty_QMARK__ = cljs.core.volatile_BANG_(true);
return [cljs.core.str(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (acc_ends_with_sep_QMARK__,acc_empty_QMARK__,sep){
return (function (acc,in$){
var in$__$1 = [cljs.core.str(in$)].join('');
var in_empty_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(in$__$1,"");
var in_starts_with_sep_QMARK_ = taoensso.encore.str_starts_with_QMARK_(in$__$1,sep);
var in_ends_with_sep_QMARK_ = taoensso.encore.str_ends_with_QMARK_(in$__$1,sep);
var acc_ends_with_sep_QMARK_ = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(acc_ends_with_sep_QMARK__) : cljs.core.deref.call(null,acc_ends_with_sep_QMARK__));
var acc_empty_QMARK_ = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(acc_empty_QMARK__) : cljs.core.deref.call(null,acc_empty_QMARK__));
cljs.core.vreset_BANG_(acc_ends_with_sep_QMARK__,in_ends_with_sep_QMARK_);

if(cljs.core.truth_(acc_empty_QMARK_)){
cljs.core.vreset_BANG_(acc_empty_QMARK__,in_empty_QMARK_);
} else {
}

if(cljs.core.truth_(acc_ends_with_sep_QMARK_)){
if(cljs.core.truth_(in_starts_with_sep_QMARK_)){
return taoensso.encore.sb_append.cljs$core$IFn$_invoke$arity$2(acc,in$__$1.substring((1)));
} else {
return taoensso.encore.sb_append.cljs$core$IFn$_invoke$arity$2(acc,in$__$1);
}
} else {
if(cljs.core.truth_(in_starts_with_sep_QMARK_)){
return taoensso.encore.sb_append.cljs$core$IFn$_invoke$arity$2(acc,in$__$1);
} else {
if(cljs.core.truth_((function (){var or__17769__auto__ = acc_empty_QMARK_;
if(cljs.core.truth_(or__17769__auto__)){
return or__17769__auto__;
} else {
return in_empty_QMARK_;
}
})())){
return taoensso.encore.sb_append.cljs$core$IFn$_invoke$arity$2(acc,in$__$1);
} else {
taoensso.encore.sb_append.cljs$core$IFn$_invoke$arity$2(acc,sep);

return taoensso.encore.sb_append.cljs$core$IFn$_invoke$arity$2(acc,in$__$1);
}
}
}
});})(acc_ends_with_sep_QMARK__,acc_empty_QMARK__,sep))
,taoensso.encore.str_builder.cljs$core$IFn$_invoke$arity$0(),coll))].join('');
}
});
taoensso.encore.path = (function taoensso$encore$path(var_args){
var args__18959__auto__ = [];
var len__18952__auto___33033 = arguments.length;
var i__18953__auto___33034 = (0);
while(true){
if((i__18953__auto___33034 < len__18952__auto___33033)){
args__18959__auto__.push((arguments[i__18953__auto___33034]));

var G__33035 = (i__18953__auto___33034 + (1));
i__18953__auto___33034 = G__33035;
continue;
} else {
}
break;
}

var argseq__18960__auto__ = ((((0) < args__18959__auto__.length))?(new cljs.core.IndexedSeq(args__18959__auto__.slice((0)),(0),null)):null);
return taoensso.encore.path.cljs$core$IFn$_invoke$arity$variadic(argseq__18960__auto__);
});

taoensso.encore.path.cljs$core$IFn$_invoke$arity$variadic = (function (parts){
return taoensso.encore.str_join_once("/",parts);
});

taoensso.encore.path.cljs$lang$maxFixedArity = (0);

taoensso.encore.path.cljs$lang$applyTo = (function (seq33032){
return taoensso.encore.path.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq33032));
});

/**
 * Converts all word breaks of any form and length (including line breaks of any
 *   form, tabs, spaces, etc.) to a single regular space
 */
taoensso.encore.norm_word_breaks = (function taoensso$encore$norm_word_breaks(s){
return clojure.string.replace([cljs.core.str(s)].join(''),/\s+/," ");
});
taoensso.encore.count_words = (function taoensso$encore$count_words(s){
if(clojure.string.blank_QMARK_(s)){
return (0);
} else {
return cljs.core.count(clojure.string.split.cljs$core$IFn$_invoke$arity$2(s,/\s+/));
}
});
/**
 * Returns a UUIDv4 string of form "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx",
 *   Ref. http://www.ietf.org/rfc/rfc4122.txt,
 *     https://gist.github.com/franks42/4159427
 */
taoensso.encore.uuid_str = (function taoensso$encore$uuid_str(var_args){
var args33036 = [];
var len__18952__auto___33039 = arguments.length;
var i__18953__auto___33040 = (0);
while(true){
if((i__18953__auto___33040 < len__18952__auto___33039)){
args33036.push((arguments[i__18953__auto___33040]));

var G__33041 = (i__18953__auto___33040 + (1));
i__18953__auto___33040 = G__33041;
continue;
} else {
}
break;
}

var G__33038 = args33036.length;
switch (G__33038) {
case 1:
return taoensso.encore.uuid_str.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return taoensso.encore.uuid_str.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33036.length)].join('')));

}
});

taoensso.encore.uuid_str.cljs$core$IFn$_invoke$arity$1 = (function (max_length){
return taoensso.encore._QMARK_substr_LT_len.cljs$core$IFn$_invoke$arity$3(taoensso.encore.uuid_str.cljs$core$IFn$_invoke$arity$0(),(0),max_length);
});

taoensso.encore.uuid_str.cljs$core$IFn$_invoke$arity$0 = (function (){
var hex = (function (){
return cljs.core.rand_int((16)).toString((16));
});
var rhex = ((8) | ((3) & cljs.core.rand_int((16)))).toString((16));
return [cljs.core.str(hex()),cljs.core.str(hex()),cljs.core.str(hex()),cljs.core.str(hex()),cljs.core.str(hex()),cljs.core.str(hex()),cljs.core.str(hex()),cljs.core.str(hex()),cljs.core.str("-"),cljs.core.str(hex()),cljs.core.str(hex()),cljs.core.str(hex()),cljs.core.str(hex()),cljs.core.str("-"),cljs.core.str("4"),cljs.core.str(hex()),cljs.core.str(hex()),cljs.core.str(hex()),cljs.core.str("-"),cljs.core.str(rhex),cljs.core.str(hex()),cljs.core.str(hex()),cljs.core.str(hex()),cljs.core.str("-"),cljs.core.str(hex()),cljs.core.str(hex()),cljs.core.str(hex()),cljs.core.str(hex()),cljs.core.str(hex()),cljs.core.str(hex()),cljs.core.str(hex()),cljs.core.str(hex()),cljs.core.str(hex()),cljs.core.str(hex()),cljs.core.str(hex()),cljs.core.str(hex())].join('');
});

taoensso.encore.uuid_str.cljs$lang$maxFixedArity = 1;

/**
 * Like `core/memoize` but avoids write races, supports invalidation
 */
taoensso.encore.memoize_ = (function taoensso$encore$memoize_(f){
var cache_ = cljs.core.volatile_BANG_(cljs.core.PersistentArrayMap.EMPTY);
return ((function (cache_){
return (function() { 
var G__33047__delegate = function (xs){
var get_sentinel = {};
var x1 = cljs.core.first(xs);
if(taoensso.encore.kw_identical_QMARK_(x1,cljs.core.cst$kw$mem_SLASH_del)){
var xn = cljs.core.next(xs);
var x2 = cljs.core.first(xn);
if(taoensso.encore.kw_identical_QMARK_(x2,cljs.core.cst$kw$mem_SLASH_all)){
cljs.core.vreset_BANG_(cache_,cljs.core.PersistentArrayMap.EMPTY);
} else {
cljs.core._vreset_BANG_(cache_,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._deref(cache_),xn));
}

return null;
} else {
if(taoensso.encore.kw_identical_QMARK_(x1,cljs.core.cst$kw$mem_SLASH_fresh)){
var xn = cljs.core.next(xs);
var v = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,xn);
cljs.core._vreset_BANG_(cache_,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core._deref(cache_),xn,v));

return v;
} else {
var v = cljs.core.get.cljs$core$IFn$_invoke$arity$3((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cache_) : cljs.core.deref.call(null,cache_)),xs,get_sentinel);
if((v === get_sentinel)){
var v__$1 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,xs);
cljs.core._vreset_BANG_(cache_,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core._deref(cache_),xs,v__$1));

return v__$1;
} else {
return v;
}
}
}
};
var G__33047 = function (var_args){
var xs = null;
if (arguments.length > 0) {
var G__33048__i = 0, G__33048__a = new Array(arguments.length -  0);
while (G__33048__i < G__33048__a.length) {G__33048__a[G__33048__i] = arguments[G__33048__i + 0]; ++G__33048__i;}
  xs = new cljs.core.IndexedSeq(G__33048__a,0);
} 
return G__33047__delegate.call(this,xs);};
G__33047.cljs$lang$maxFixedArity = 0;
G__33047.cljs$lang$applyTo = (function (arglist__33049){
var xs = cljs.core.seq(arglist__33049);
return G__33047__delegate(xs);
});
G__33047.cljs$core$IFn$_invoke$arity$variadic = G__33047__delegate;
return G__33047;
})()
;
;})(cache_))
});
/**
 * Great for Reactjs render op caching on mobile devices, etc.
 */
taoensso.encore.memoize_last = (function taoensso$encore$memoize_last(f){
var cache_ = (function (){var G__33052 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__33052) : cljs.core.atom.call(null,G__33052));
})();
return ((function (cache_){
return (function() { 
var G__33054__delegate = function (args){
var G__33053 = (function (){var or__17769__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cache_) : cljs.core.deref.call(null,cache_)),args);
if(cljs.core.truth_(or__17769__auto__)){
return or__17769__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cache_,((function (or__17769__auto__,cache_){
return (function (cache){
if(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cache,args))){
return cache;
} else {
return cljs.core.PersistentArrayMap.fromArray([args,(new cljs.core.Delay(((function (or__17769__auto__,cache_){
return (function (){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,args);
});})(or__17769__auto__,cache_))
,null))], true, false);
}
});})(or__17769__auto__,cache_))
),args);
}
})();
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__33053) : cljs.core.deref.call(null,G__33053));
};
var G__33054 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__33055__i = 0, G__33055__a = new Array(arguments.length -  0);
while (G__33055__i < G__33055__a.length) {G__33055__a[G__33055__i] = arguments[G__33055__i + 0]; ++G__33055__i;}
  args = new cljs.core.IndexedSeq(G__33055__a,0);
} 
return G__33054__delegate.call(this,args);};
G__33054.cljs$lang$maxFixedArity = 0;
G__33054.cljs$lang$applyTo = (function (arglist__33056){
var args = cljs.core.seq(arglist__33056);
return G__33054__delegate(args);
});
G__33054.cljs$core$IFn$_invoke$arity$variadic = G__33054__delegate;
return G__33054;
})()
;
;})(cache_))
});
taoensso.encore.gc_rate = (1.0 / (16000));
taoensso.encore.gc_now_QMARK_ = (function taoensso$encore$gc_now_QMARK_(){
return (cljs.core.rand.cljs$core$IFn$_invoke$arity$0() <= taoensso.encore.gc_rate);
});
/**
 * Like `core/memoize` but:
 *  * Often faster, depends on opts
 *  * Prevents race conditions on writes
 *  * Supports auto invalidation & gc with `ttl-ms` opt
 *  * Supports cache size limit & gc with `cache-size` opt
 *  * Supports invalidation by prepending args with `:mem/del` or `:mem/fresh`
 */
taoensso.encore.memoize_STAR_ = (function taoensso$encore$memoize_STAR_(var_args){
var args33057 = [];
var len__18952__auto___33100 = arguments.length;
var i__18953__auto___33101 = (0);
while(true){
if((i__18953__auto___33101 < len__18952__auto___33100)){
args33057.push((arguments[i__18953__auto___33101]));

var G__33102 = (i__18953__auto___33101 + (1));
i__18953__auto___33101 = G__33102;
continue;
} else {
}
break;
}

var G__33059 = args33057.length;
switch (G__33059) {
case 1:
return taoensso.encore.memoize_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.memoize_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.memoize_STAR_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33057.length)].join('')));

}
});

taoensso.encore.memoize_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (f){
return taoensso.encore.memoize_(f);
});

taoensso.encore.memoize_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (ttl_ms,f){
var e_33104 = (function (){try{if(taoensso.encore.pos_int_QMARK_(ttl_ms)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e33060){if((e33060 instanceof Error)){
var e = e33060;
return e;
} else {
throw e33060;

}
}})();
if((e_33104 == null)){
} else {
taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.encore",null,"(pos-int? ttl-ms)",ttl_ms,e_33104,null);
}

var cache_ = (function (){var G__33061 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__33061) : cljs.core.atom.call(null,G__33061));
})();
var gc_running_QMARK__ = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false) : cljs.core.atom.call(null,false));
var ttl_ms__$1 = cljs.core.long$(ttl_ms);
var gc_fn = ((function (cache_,gc_running_QMARK__,ttl_ms__$1){
return (function (){
if(cljs.core.truth_((function (){var and__17757__auto__ = taoensso.encore.gc_now_QMARK_();
if(cljs.core.truth_(and__17757__auto__)){
return taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$3(gc_running_QMARK__,cljs.core.PersistentVector.EMPTY,((function (and__17757__auto__,cache_,gc_running_QMARK__,ttl_ms__$1){
return (function (b){
return taoensso.encore.swapped(true,cljs.core.not(b));
});})(and__17757__auto__,cache_,gc_running_QMARK__,ttl_ms__$1))
);
} else {
return and__17757__auto__;
}
})())){
var instant = taoensso.encore.now_udt();
var snapshot = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cache_) : cljs.core.deref.call(null,cache_));
var ks_to_gc = cljs.core.persistent_BANG_(cljs.core.reduce_kv(((function (instant,snapshot,cache_,gc_running_QMARK__,ttl_ms__$1){
return (function (acc,k,p__33062){
var vec__33063 = p__33062;
var dv = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33063,(0),null);
var udt = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33063,(1),null);
var cv = vec__33063;
if(((instant - udt) > ttl_ms__$1)){
return cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(acc,k);
} else {
return acc;
}
});})(instant,snapshot,cache_,gc_running_QMARK__,ttl_ms__$1))
,cljs.core.transient$(cljs.core.PersistentVector.EMPTY),snapshot));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cache_,((function (instant,snapshot,ks_to_gc,cache_,gc_running_QMARK__,ttl_ms__$1){
return (function (m){
return cljs.core.persistent_BANG_(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (instant,snapshot,ks_to_gc,cache_,gc_running_QMARK__,ttl_ms__$1){
return (function (acc,in$){
return cljs.core.dissoc_BANG_.cljs$core$IFn$_invoke$arity$2(acc,in$);
});})(instant,snapshot,ks_to_gc,cache_,gc_running_QMARK__,ttl_ms__$1))
,cljs.core.transient$(m),ks_to_gc));
});})(instant,snapshot,ks_to_gc,cache_,gc_running_QMARK__,ttl_ms__$1))
);

return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(gc_running_QMARK__,false) : cljs.core.reset_BANG_.call(null,gc_running_QMARK__,false));
} else {
return null;
}
});})(cache_,gc_running_QMARK__,ttl_ms__$1))
;
return ((function (cache_,gc_running_QMARK__,ttl_ms__$1,gc_fn){
return (function() { 
var G__33105__delegate = function (args){
var a1 = cljs.core.first(args);
if(taoensso.encore.kw_identical_QMARK_(a1,cljs.core.cst$kw$mem_SLASH_del)){
var argn = cljs.core.next(args);
var a2 = cljs.core.first(argn);
if(taoensso.encore.kw_identical_QMARK_(a2,cljs.core.cst$kw$mem_SLASH_all)){
var G__33066_33106 = cache_;
var G__33067_33107 = cljs.core.PersistentArrayMap.EMPTY;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__33066_33106,G__33067_33107) : cljs.core.reset_BANG_.call(null,G__33066_33106,G__33067_33107));
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cache_,cljs.core.dissoc,argn);
}

return null;
} else {
gc_fn();

var fresh_QMARK_ = taoensso.encore.kw_identical_QMARK_(a1,cljs.core.cst$kw$mem_SLASH_fresh);
var args__$1 = ((fresh_QMARK_)?cljs.core.next(args):args);
var instant = taoensso.encore.now_udt();
var vec__33068 = taoensso.encore._swap_cache_BANG_(cache_,args__$1,((function (fresh_QMARK_,args__$1,instant,a1,cache_,gc_running_QMARK__,ttl_ms__$1,gc_fn){
return (function (_QMARK_cv){
if(cljs.core.truth_((function (){var and__17757__auto__ = _QMARK_cv;
if(cljs.core.truth_(and__17757__auto__)){
var and__17757__auto____$1 = !(fresh_QMARK_);
if(and__17757__auto____$1){
var vec__33074 = _QMARK_cv;
var _dv = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33074,(0),null);
var udt = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33074,(1),null);
return ((instant - udt) < ttl_ms__$1);
} else {
return and__17757__auto____$1;
}
} else {
return and__17757__auto__;
}
})())){
return _QMARK_cv;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.Delay(((function (fresh_QMARK_,args__$1,instant,a1,cache_,gc_running_QMARK__,ttl_ms__$1,gc_fn){
return (function (){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,args__$1);
});})(fresh_QMARK_,args__$1,instant,a1,cache_,gc_running_QMARK__,ttl_ms__$1,gc_fn))
,null)),instant], null);
}
});})(fresh_QMARK_,args__$1,instant,a1,cache_,gc_running_QMARK__,ttl_ms__$1,gc_fn))
);
var dv = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33068,(0),null);
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(dv) : cljs.core.deref.call(null,dv));
}
};
var G__33105 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__33108__i = 0, G__33108__a = new Array(arguments.length -  0);
while (G__33108__i < G__33108__a.length) {G__33108__a[G__33108__i] = arguments[G__33108__i + 0]; ++G__33108__i;}
  args = new cljs.core.IndexedSeq(G__33108__a,0);
} 
return G__33105__delegate.call(this,args);};
G__33105.cljs$lang$maxFixedArity = 0;
G__33105.cljs$lang$applyTo = (function (arglist__33109){
var args = cljs.core.seq(arglist__33109);
return G__33105__delegate(args);
});
G__33105.cljs$core$IFn$_invoke$arity$variadic = G__33105__delegate;
return G__33105;
})()
;
;})(cache_,gc_running_QMARK__,ttl_ms__$1,gc_fn))
});

taoensso.encore.memoize_STAR_.cljs$core$IFn$_invoke$arity$3 = (function (cache_size,ttl_ms,f){
if(cljs.core.truth_((function (x){
var or__17769__auto__ = (x == null);
if(or__17769__auto__){
return or__17769__auto__;
} else {
return taoensso.truss.impl.non_throwing(taoensso.encore.pos_int_QMARK_).call(null,x);
}
}).call(null,ttl_ms))){
} else {
taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.encore",null,"([:or nil? pos-int?] ttl-ms)",ttl_ms,null,null);
}

var e_33110 = (function (){try{if(taoensso.encore.pos_int_QMARK_(cache_size)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e33077){if((e33077 instanceof Error)){
var e = e33077;
return e;
} else {
throw e33077;

}
}})();
if((e_33110 == null)){
} else {
taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.encore",null,"(pos-int? cache-size)",cache_size,e_33110,null);
}

var state_ = (function (){var G__33078 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tick,(0)], null);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__33078) : cljs.core.atom.call(null,G__33078));
})();
var gc_running_QMARK__ = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false) : cljs.core.atom.call(null,false));
var ttl_ms_QMARK_ = !((ttl_ms == null));
var ttl_ms__$1 = cljs.core.long$((function (){var or__17769__auto__ = ttl_ms;
if(cljs.core.truth_(or__17769__auto__)){
return or__17769__auto__;
} else {
return (0);
}
})());
var cache_size__$1 = cljs.core.long$(cache_size);
var gc_fn = ((function (state_,gc_running_QMARK__,ttl_ms_QMARK_,ttl_ms__$1,cache_size__$1){
return (function (){
if(cljs.core.truth_((function (){var and__17757__auto__ = taoensso.encore.gc_now_QMARK_();
if(cljs.core.truth_(and__17757__auto__)){
return taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$3(gc_running_QMARK__,cljs.core.PersistentVector.EMPTY,((function (and__17757__auto__,state_,gc_running_QMARK__,ttl_ms_QMARK_,ttl_ms__$1,cache_size__$1){
return (function (b){
return taoensso.encore.swapped(true,cljs.core.not(b));
});})(and__17757__auto__,state_,gc_running_QMARK__,ttl_ms_QMARK_,ttl_ms__$1,cache_size__$1))
);
} else {
return and__17757__auto__;
}
})())){
var instant = taoensso.encore.now_udt();
if(ttl_ms_QMARK_){
var snapshot_33111 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(state_) : cljs.core.deref.call(null,state_)),cljs.core.cst$kw$tick);
var ks_to_gc_33112 = cljs.core.persistent_BANG_(cljs.core.reduce_kv(((function (snapshot_33111,instant,state_,gc_running_QMARK__,ttl_ms_QMARK_,ttl_ms__$1,cache_size__$1){
return (function (acc,k,p__33079){
var vec__33080 = p__33079;
var dv = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33080,(0),null);
var udt = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33080,(1),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33080,(2),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33080,(3),null);
var cv = vec__33080;
if(((instant - udt) > ttl_ms__$1)){
return cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(acc,k);
} else {
return acc;
}
});})(snapshot_33111,instant,state_,gc_running_QMARK__,ttl_ms_QMARK_,ttl_ms__$1,cache_size__$1))
,cljs.core.transient$(cljs.core.PersistentVector.EMPTY),snapshot_33111));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(state_,((function (snapshot_33111,ks_to_gc_33112,instant,state_,gc_running_QMARK__,ttl_ms_QMARK_,ttl_ms__$1,cache_size__$1){
return (function (m){
return cljs.core.persistent_BANG_(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (snapshot_33111,ks_to_gc_33112,instant,state_,gc_running_QMARK__,ttl_ms_QMARK_,ttl_ms__$1,cache_size__$1){
return (function (acc,in$){
return cljs.core.dissoc_BANG_.cljs$core$IFn$_invoke$arity$2(acc,in$);
});})(snapshot_33111,ks_to_gc_33112,instant,state_,gc_running_QMARK__,ttl_ms_QMARK_,ttl_ms__$1,cache_size__$1))
,cljs.core.transient$(m),ks_to_gc_33112));
});})(snapshot_33111,ks_to_gc_33112,instant,state_,gc_running_QMARK__,ttl_ms_QMARK_,ttl_ms__$1,cache_size__$1))
);
} else {
}

var snapshot_33113 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(state_) : cljs.core.deref.call(null,state_)),cljs.core.cst$kw$tick);
var n_to_gc_33114 = (cljs.core.count(snapshot_33113) - cache_size__$1);
if((n_to_gc_33114 > (64))){
var ks_to_gc_33115 = taoensso.encore.top.cljs$core$IFn$_invoke$arity$3(n_to_gc_33114,((function (snapshot_33113,n_to_gc_33114,instant,state_,gc_running_QMARK__,ttl_ms_QMARK_,ttl_ms__$1,cache_size__$1){
return (function (k){
var vec__33083 = (snapshot_33113.cljs$core$IFn$_invoke$arity$1 ? snapshot_33113.cljs$core$IFn$_invoke$arity$1(k) : snapshot_33113.call(null,k));
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33083,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33083,(1),null);
var tick_lru = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33083,(2),null);
var tick_lfu = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33083,(3),null);
return (tick_lru + tick_lfu);
});})(snapshot_33113,n_to_gc_33114,instant,state_,gc_running_QMARK__,ttl_ms_QMARK_,ttl_ms__$1,cache_size__$1))
,cljs.core.keys(snapshot_33113));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(state_,((function (ks_to_gc_33115,snapshot_33113,n_to_gc_33114,instant,state_,gc_running_QMARK__,ttl_ms_QMARK_,ttl_ms__$1,cache_size__$1){
return (function (m){
return cljs.core.persistent_BANG_(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (ks_to_gc_33115,snapshot_33113,n_to_gc_33114,instant,state_,gc_running_QMARK__,ttl_ms_QMARK_,ttl_ms__$1,cache_size__$1){
return (function (acc,in$){
return cljs.core.dissoc_BANG_.cljs$core$IFn$_invoke$arity$2(acc,in$);
});})(ks_to_gc_33115,snapshot_33113,n_to_gc_33114,instant,state_,gc_running_QMARK__,ttl_ms_QMARK_,ttl_ms__$1,cache_size__$1))
,cljs.core.transient$(m),ks_to_gc_33115));
});})(ks_to_gc_33115,snapshot_33113,n_to_gc_33114,instant,state_,gc_running_QMARK__,ttl_ms_QMARK_,ttl_ms__$1,cache_size__$1))
);
} else {
}

return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(gc_running_QMARK__,false) : cljs.core.reset_BANG_.call(null,gc_running_QMARK__,false));
} else {
return null;
}
});})(state_,gc_running_QMARK__,ttl_ms_QMARK_,ttl_ms__$1,cache_size__$1))
;
var cv_fn = ((ttl_ms_QMARK_)?((function (state_,gc_running_QMARK__,ttl_ms_QMARK_,ttl_ms__$1,cache_size__$1,gc_fn){
return (function (args,fresh_QMARK_,tick){
var instant = taoensso.encore.now_udt();
return taoensso.encore._swap_cache_BANG_(state_,args,((function (instant,state_,gc_running_QMARK__,ttl_ms_QMARK_,ttl_ms__$1,cache_size__$1,gc_fn){
return (function (_QMARK_cv){
if(cljs.core.truth_((function (){var and__17757__auto__ = _QMARK_cv;
if(cljs.core.truth_(and__17757__auto__)){
var and__17757__auto____$1 = cljs.core.not(fresh_QMARK_);
if(and__17757__auto____$1){
var vec__33089 = _QMARK_cv;
var _dv = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33089,(0),null);
var udt = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33089,(1),null);
return ((instant - udt) < ttl_ms__$1);
} else {
return and__17757__auto____$1;
}
} else {
return and__17757__auto__;
}
})())){
return _QMARK_cv;
} else {
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.Delay(((function (instant,state_,gc_running_QMARK__,ttl_ms_QMARK_,ttl_ms__$1,cache_size__$1,gc_fn){
return (function (){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,args);
});})(instant,state_,gc_running_QMARK__,ttl_ms_QMARK_,ttl_ms__$1,cache_size__$1,gc_fn))
,null)),instant,tick,(1)], null);
}
});})(instant,state_,gc_running_QMARK__,ttl_ms_QMARK_,ttl_ms__$1,cache_size__$1,gc_fn))
);
});})(state_,gc_running_QMARK__,ttl_ms_QMARK_,ttl_ms__$1,cache_size__$1,gc_fn))
:((function (state_,gc_running_QMARK__,ttl_ms_QMARK_,ttl_ms__$1,cache_size__$1,gc_fn){
return (function (args,fresh_QMARK_,tick){
return taoensso.encore._swap_cache_BANG_(state_,args,((function (state_,gc_running_QMARK__,ttl_ms_QMARK_,ttl_ms__$1,cache_size__$1,gc_fn){
return (function (_QMARK_cv){
if(cljs.core.truth_((function (){var and__17757__auto__ = _QMARK_cv;
if(cljs.core.truth_(and__17757__auto__)){
return cljs.core.not(fresh_QMARK_);
} else {
return and__17757__auto__;
}
})())){
return _QMARK_cv;
} else {
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.Delay(((function (state_,gc_running_QMARK__,ttl_ms_QMARK_,ttl_ms__$1,cache_size__$1,gc_fn){
return (function (){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,args);
});})(state_,gc_running_QMARK__,ttl_ms_QMARK_,ttl_ms__$1,cache_size__$1,gc_fn))
,null)),null,tick,(1)], null);
}
});})(state_,gc_running_QMARK__,ttl_ms_QMARK_,ttl_ms__$1,cache_size__$1,gc_fn))
);
});})(state_,gc_running_QMARK__,ttl_ms_QMARK_,ttl_ms__$1,cache_size__$1,gc_fn))
);
return ((function (state_,gc_running_QMARK__,ttl_ms_QMARK_,ttl_ms__$1,cache_size__$1,gc_fn,cv_fn){
return (function() { 
var G__33116__delegate = function (args){
var a1 = cljs.core.first(args);
if(taoensso.encore.kw_identical_QMARK_(a1,cljs.core.cst$kw$mem_SLASH_del)){
var argn = cljs.core.next(args);
var a2 = cljs.core.first(argn);
if(taoensso.encore.kw_identical_QMARK_(a2,cljs.core.cst$kw$mem_SLASH_all)){
var G__33092_33117 = state_;
var G__33093_33118 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tick,(0)], null);
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__33092_33117,G__33093_33118) : cljs.core.reset_BANG_.call(null,G__33092_33117,G__33093_33118));
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_,cljs.core.dissoc,argn);
}

return null;
} else {
gc_fn();

var fresh_QMARK_ = taoensso.encore.kw_identical_QMARK_(a1,cljs.core.cst$kw$mem_SLASH_fresh);
var args__$1 = ((fresh_QMARK_)?cljs.core.next(args):args);
var tick = cljs.core.cst$kw$tick.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(state_) : cljs.core.deref.call(null,state_)));
var vec__33094 = (cv_fn.cljs$core$IFn$_invoke$arity$3 ? cv_fn.cljs$core$IFn$_invoke$arity$3(args__$1,fresh_QMARK_,tick) : cv_fn.call(null,args__$1,fresh_QMARK_,tick));
var dv = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33094,(0),null);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(state_,((function (fresh_QMARK_,args__$1,tick,vec__33094,dv,a1,state_,gc_running_QMARK__,ttl_ms_QMARK_,ttl_ms__$1,cache_size__$1,gc_fn,cv_fn){
return (function (m){
var temp__6501__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,args__$1);
if(cljs.core.truth_(temp__6501__auto__)){
var vec__33097 = temp__6501__auto__;
var dv__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33097,(0),null);
var _QMARK_udt = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33097,(1),null);
var tick_lru = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33097,(2),null);
var tick_lfu = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33097,(3),null);
var cv = vec__33097;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(m,cljs.core.cst$kw$tick,(tick + (1)),cljs.core.array_seq([args__$1,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [dv__$1,_QMARK_udt,tick,(tick_lfu + (1))], null)], 0));
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,cljs.core.cst$kw$tick,(tick + (1)));
}
});})(fresh_QMARK_,args__$1,tick,vec__33094,dv,a1,state_,gc_running_QMARK__,ttl_ms_QMARK_,ttl_ms__$1,cache_size__$1,gc_fn,cv_fn))
);

return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(dv) : cljs.core.deref.call(null,dv));
}
};
var G__33116 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__33119__i = 0, G__33119__a = new Array(arguments.length -  0);
while (G__33119__i < G__33119__a.length) {G__33119__a[G__33119__i] = arguments[G__33119__i + 0]; ++G__33119__i;}
  args = new cljs.core.IndexedSeq(G__33119__a,0);
} 
return G__33116__delegate.call(this,args);};
G__33116.cljs$lang$maxFixedArity = 0;
G__33116.cljs$lang$applyTo = (function (arglist__33120){
var args = cljs.core.seq(arglist__33120);
return G__33116__delegate(args);
});
G__33116.cljs$core$IFn$_invoke$arity$variadic = G__33116__delegate;
return G__33116;
})()
;
;})(state_,gc_running_QMARK__,ttl_ms_QMARK_,ttl_ms__$1,cache_size__$1,gc_fn,cv_fn))
});

taoensso.encore.memoize_STAR_.cljs$lang$maxFixedArity = 3;

/**
 * Takes one or more rate specs of form [ncalls-limit window-ms ?spec-id] and
 *   returns a (fn [& [req-id])) that returns `nil` (=> all rate limits passed), or
 *   [<ms-wait> <worst-offending-spec-id>] / <ms-wait>.
 */
taoensso.encore.rate_limiter_STAR_ = (function taoensso$encore$rate_limiter_STAR_(specs){
if(cljs.core.empty_QMARK_(specs)){
return cljs.core.constantly(null);
} else {
var vspecs = cljs.core.vec(specs);
var vstates_ = (function (){var G__33213 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__33213) : cljs.core.atom.call(null,G__33213));
})();
var max_win_ms = cljs.core.long$(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.max,(0),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (vspecs,vstates_){
return (function (p__33214){
var vec__33215 = p__33214;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33215,(0),null);
var win_ms = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33215,(1),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33215,(2),null);
var spec = vec__33215;
return win_ms;
});})(vspecs,vstates_))
,vspecs)));
var nspecs = cljs.core.count(vspecs);
var nid_specs = cljs.core.count(cljs.core.filterv(((function (vspecs,vstates_,max_win_ms,nspecs){
return (function (p__33218){
var vec__33219 = p__33218;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33219,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33219,(1),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33219,(2),null);
return id;
});})(vspecs,vstates_,max_win_ms,nspecs))
,vspecs));
var _ = ((((nid_specs === (0))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(nid_specs,nspecs)))?null:(function(){throw (new Error("Assert failed: (or (zero? nid-specs) (= nid-specs nspecs))"))})());
var return_ids_QMARK_ = !((nid_specs === (0)));
return ((function (vspecs,vstates_,max_win_ms,nspecs,nid_specs,_,return_ids_QMARK_){
return (function() { 
var taoensso$encore$rate_limiter_STAR__$_check_rate_limits__delegate = function (p__33222){
var vec__33264 = p__33222;
var _QMARK_a1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33264,(0),null);
var _QMARK_a2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33264,(1),null);
if(taoensso.encore.kw_identical_QMARK_(_QMARK_a1,cljs.core.cst$kw$rl_SLASH_debug)){
return vstates_;
} else {
if(taoensso.encore.kw_identical_QMARK_(_QMARK_a1,cljs.core.cst$kw$rl_SLASH_reset)){
if(taoensso.encore.kw_identical_QMARK_(_QMARK_a2,cljs.core.cst$kw$rl_SLASH_all)){
var G__33267_33305 = vstates_;
var G__33268_33306 = cljs.core.PersistentArrayMap.EMPTY;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__33267_33305,G__33268_33306) : cljs.core.reset_BANG_.call(null,G__33267_33305,G__33268_33306));
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(vstates_,cljs.core.dissoc,_QMARK_a2);
}

return null;
} else {
var peek_QMARK_ = taoensso.encore.kw_identical_QMARK_(_QMARK_a1,cljs.core.cst$kw$rl_SLASH_peek);
var req_id = ((peek_QMARK_)?_QMARK_a2:_QMARK_a1);
var instant = taoensso.encore.now_udt();
if(cljs.core.truth_((function (){var and__17757__auto__ = req_id;
if(cljs.core.truth_(and__17757__auto__)){
return taoensso.encore.gc_now_QMARK_();
} else {
return and__17757__auto__;
}
})())){
taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$3(vstates_,cljs.core.PersistentVector.EMPTY,((function (peek_QMARK_,req_id,instant,vec__33264,_QMARK_a1,_QMARK_a2,vspecs,vstates_,max_win_ms,nspecs,nid_specs,_,return_ids_QMARK_){
return (function taoensso$encore$rate_limiter_STAR__$_check_rate_limits_$_gc(m){
return cljs.core.reduce_kv(((function (peek_QMARK_,req_id,instant,vec__33264,_QMARK_a1,_QMARK_a2,vspecs,vstates_,max_win_ms,nspecs,nid_specs,_,return_ids_QMARK_){
return (function (m_STAR_,req_id__$1,vstate){
var max_udt_win_start = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (peek_QMARK_,req_id,instant,vec__33264,_QMARK_a1,_QMARK_a2,vspecs,vstates_,max_win_ms,nspecs,nid_specs,_,return_ids_QMARK_){
return (function (acc,p__33273){
var vec__33274 = p__33273;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33274,(0),null);
var udt = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33274,(1),null);
var ___$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33274,(2),null);
var x__18102__auto__ = acc;
var y__18103__auto__ = udt;
return ((x__18102__auto__ > y__18103__auto__) ? x__18102__auto__ : y__18103__auto__);
});})(peek_QMARK_,req_id,instant,vec__33264,_QMARK_a1,_QMARK_a2,vspecs,vstates_,max_win_ms,nspecs,nid_specs,_,return_ids_QMARK_))
,(0),vstate);
var min_win_ms_elapsed = (instant - max_udt_win_start);
if((min_win_ms_elapsed > max_win_ms)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(m_STAR_,req_id__$1);
} else {
return m_STAR_;
}
});})(peek_QMARK_,req_id,instant,vec__33264,_QMARK_a1,_QMARK_a2,vspecs,vstates_,max_win_ms,nspecs,nid_specs,_,return_ids_QMARK_))
,m,m);
});})(peek_QMARK_,req_id,instant,vec__33264,_QMARK_a1,_QMARK_a2,vspecs,vstates_,max_win_ms,nspecs,nid_specs,_,return_ids_QMARK_))
);
} else {
}

return taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$3(vstates_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [req_id], null),((function (peek_QMARK_,req_id,instant,vec__33264,_QMARK_a1,_QMARK_a2,vspecs,vstates_,max_win_ms,nspecs,nid_specs,_,return_ids_QMARK_){
return (function (_QMARK_vstate){
if(cljs.core.truth_(_QMARK_vstate)){
var vec__33277 = (function (){var in_vspecs = vspecs;
var in_vstate = _QMARK_vstate;
var out_vstate = cljs.core.PersistentVector.EMPTY;
var _QMARK_worst_limit_offence = null;
while(true){
var vec__33280 = in_vspecs;
var seq__33281 = cljs.core.seq(vec__33280);
var first__33282 = cljs.core.first(seq__33281);
var seq__33281__$1 = cljs.core.next(seq__33281);
var vec__33283 = first__33282;
var ncalls_limit = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33283,(0),null);
var win_ms = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33283,(1),null);
var _QMARK_spec_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33283,(2),null);
var next_in_vspecs = seq__33281__$1;
var vec__33286 = in_vstate;
var seq__33287 = cljs.core.seq(vec__33286);
var first__33288 = cljs.core.first(seq__33287);
var seq__33287__$1 = cljs.core.next(seq__33287);
var vec__33289 = first__33288;
var ncalls = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33289,(0),null);
var udt_win_start = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33289,(1),null);
var next_in_vstate = seq__33287__$1;
var win_ms_elapsed = (instant - udt_win_start);
var reset_due_QMARK_ = (win_ms_elapsed >= win_ms);
var rate_limited_QMARK_ = (!(reset_due_QMARK_)) && ((ncalls >= ncalls_limit));
var new_out_vstate = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(out_vstate,((reset_due_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),instant], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ncalls,udt_win_start], null)));
var new__QMARK_worst_limit_offence = ((rate_limited_QMARK_)?(function (){var ms_wait = (win_ms - win_ms_elapsed);
if((function (){var or__17769__auto__ = (_QMARK_worst_limit_offence == null);
if(or__17769__auto__){
return or__17769__auto__;
} else {
var vec__33295 = _QMARK_worst_limit_offence;
var max_ms_wait = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33295,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33295,(1),null);
return (ms_wait > max_ms_wait);
}
})()){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ms_wait,_QMARK_spec_id], null);
} else {
return _QMARK_worst_limit_offence;
}
})():_QMARK_worst_limit_offence);
if(next_in_vspecs){
var G__33307 = next_in_vspecs;
var G__33308 = next_in_vstate;
var G__33309 = new_out_vstate;
var G__33310 = new__QMARK_worst_limit_offence;
in_vspecs = G__33307;
in_vstate = G__33308;
out_vstate = G__33309;
_QMARK_worst_limit_offence = G__33310;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_out_vstate,new__QMARK_worst_limit_offence], null);
}
break;
}
})();
var vstate_with_resets = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33277,(0),null);
var _QMARK_worst_limit_offence = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33277,(1),null);
var all_limits_pass_QMARK_ = (_QMARK_worst_limit_offence == null);
var new_vstate = ((peek_QMARK_)?_QMARK_vstate:((all_limits_pass_QMARK_)?cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (vec__33277,vstate_with_resets,_QMARK_worst_limit_offence,all_limits_pass_QMARK_,peek_QMARK_,req_id,instant,vec__33264,_QMARK_a1,_QMARK_a2,vspecs,vstates_,max_win_ms,nspecs,nid_specs,_,return_ids_QMARK_){
return (function (p__33298){
var vec__33299 = p__33298;
var ncalls = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33299,(0),null);
var udt_win_start = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33299,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(ncalls + (1)),udt_win_start], null);
});})(vec__33277,vstate_with_resets,_QMARK_worst_limit_offence,all_limits_pass_QMARK_,peek_QMARK_,req_id,instant,vec__33264,_QMARK_a1,_QMARK_a2,vspecs,vstates_,max_win_ms,nspecs,nid_specs,_,return_ids_QMARK_))
,vstate_with_resets):vstate_with_resets));
var result = (function (){var temp__6503__auto__ = _QMARK_worst_limit_offence;
if(cljs.core.truth_(temp__6503__auto__)){
var wlo = temp__6503__auto__;
if(return_ids_QMARK_){
return wlo;
} else {
var vec__33302 = wlo;
var ms_wait = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33302,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33302,(1),null);
return ms_wait;
}
} else {
return null;
}
})();
return taoensso.encore.swapped(new_vstate,result);
} else {
if(peek_QMARK_){
return taoensso.encore.swapped(_QMARK_vstate,null);
} else {
return taoensso.encore.swapped(cljs.core.vec(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(nspecs,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),instant], null))),null);
}
}
});})(peek_QMARK_,req_id,instant,vec__33264,_QMARK_a1,_QMARK_a2,vspecs,vstates_,max_win_ms,nspecs,nid_specs,_,return_ids_QMARK_))
);
}
}
};
var taoensso$encore$rate_limiter_STAR__$_check_rate_limits = function (var_args){
var p__33222 = null;
if (arguments.length > 0) {
var G__33311__i = 0, G__33311__a = new Array(arguments.length -  0);
while (G__33311__i < G__33311__a.length) {G__33311__a[G__33311__i] = arguments[G__33311__i + 0]; ++G__33311__i;}
  p__33222 = new cljs.core.IndexedSeq(G__33311__a,0);
} 
return taoensso$encore$rate_limiter_STAR__$_check_rate_limits__delegate.call(this,p__33222);};
taoensso$encore$rate_limiter_STAR__$_check_rate_limits.cljs$lang$maxFixedArity = 0;
taoensso$encore$rate_limiter_STAR__$_check_rate_limits.cljs$lang$applyTo = (function (arglist__33312){
var p__33222 = cljs.core.seq(arglist__33312);
return taoensso$encore$rate_limiter_STAR__$_check_rate_limits__delegate(p__33222);
});
taoensso$encore$rate_limiter_STAR__$_check_rate_limits.cljs$core$IFn$_invoke$arity$variadic = taoensso$encore$rate_limiter_STAR__$_check_rate_limits__delegate;
return taoensso$encore$rate_limiter_STAR__$_check_rate_limits;
})()
;
;})(vspecs,vstates_,max_win_ms,nspecs,nid_specs,_,return_ids_QMARK_))
}
});
taoensso.encore.rate_limit = (function taoensso$encore$rate_limit(specs,f){
var rl = taoensso.encore.rate_limiter_STAR_(specs);
return ((function (rl){
return (function() { 
var G__33313__delegate = function (args){
var temp__6501__auto__ = (rl.cljs$core$IFn$_invoke$arity$0 ? rl.cljs$core$IFn$_invoke$arity$0() : rl.call(null));
if(cljs.core.truth_(temp__6501__auto__)){
var backoff = temp__6501__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,backoff], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null)),null], null);
}
};
var G__33313 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__33314__i = 0, G__33314__a = new Array(arguments.length -  0);
while (G__33314__i < G__33314__a.length) {G__33314__a[G__33314__i] = arguments[G__33314__i + 0]; ++G__33314__i;}
  args = new cljs.core.IndexedSeq(G__33314__a,0);
} 
return G__33313__delegate.call(this,args);};
G__33313.cljs$lang$maxFixedArity = 0;
G__33313.cljs$lang$applyTo = (function (arglist__33315){
var args = cljs.core.seq(arglist__33315);
return G__33313__delegate(args);
});
G__33313.cljs$core$IFn$_invoke$arity$variadic = G__33313__delegate;
return G__33313;
})()
;
;})(rl))
});
taoensso.encore.nano_time = (function (){var temp__6501__auto__ = taoensso.encore.oget.cljs$core$IFn$_invoke$arity$2(taoensso.encore.js__QMARK_win,"performance");
if(cljs.core.truth_(temp__6501__auto__)){
var perf = temp__6501__auto__;
var temp__6501__auto____$1 = (function (){var or__17769__auto__ = taoensso.encore.oget.cljs$core$IFn$_invoke$arity$2(perf,"now");
if(cljs.core.truth_(or__17769__auto__)){
return or__17769__auto__;
} else {
var or__17769__auto____$1 = taoensso.encore.oget.cljs$core$IFn$_invoke$arity$2(perf,"mozNow");
if(cljs.core.truth_(or__17769__auto____$1)){
return or__17769__auto____$1;
} else {
var or__17769__auto____$2 = taoensso.encore.oget.cljs$core$IFn$_invoke$arity$2(perf,"msNow");
if(cljs.core.truth_(or__17769__auto____$2)){
return or__17769__auto____$2;
} else {
var or__17769__auto____$3 = taoensso.encore.oget.cljs$core$IFn$_invoke$arity$2(perf,"oNow");
if(cljs.core.truth_(or__17769__auto____$3)){
return or__17769__auto____$3;
} else {
return taoensso.encore.oget.cljs$core$IFn$_invoke$arity$2(perf,"webkitNow");
}
}
}
}
})();
if(cljs.core.truth_(temp__6501__auto____$1)){
var f = temp__6501__auto____$1;
return ((function (f,temp__6501__auto____$1,perf,temp__6501__auto__){
return (function (){
return cljs.core.long$((1000000.0 * f.call(perf)));
});
;})(f,temp__6501__auto____$1,perf,temp__6501__auto__))
} else {
return ((function (temp__6501__auto____$1,perf,temp__6501__auto__){
return (function (){
return (1000000.0 * taoensso.encore.now_udt());
});
;})(temp__6501__auto____$1,perf,temp__6501__auto__))
}
} else {
return ((function (temp__6501__auto__){
return (function (){
return (1000000.0 * taoensso.encore.now_udt());
});
;})(temp__6501__auto__))
}
})();

taoensso.encore.console_log = (function (){var temp__6501__auto__ = (function (){var and__17757__auto__ = typeof console !== 'undefined';
if(and__17757__auto__){
return console.log;
} else {
return and__17757__auto__;
}
})();
if(cljs.core.truth_(temp__6501__auto__)){
var f = temp__6501__auto__;
return ((function (f,temp__6501__auto__){
return (function (xs){
return f.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(xs));
});
;})(f,temp__6501__auto__))
} else {
return ((function (temp__6501__auto__){
return (function (xs){
return null;
});
;})(temp__6501__auto__))
}
})();

taoensso.encore.log = (function taoensso$encore$log(var_args){
var args__18959__auto__ = [];
var len__18952__auto___33327 = arguments.length;
var i__18953__auto___33328 = (0);
while(true){
if((i__18953__auto___33328 < len__18952__auto___33327)){
args__18959__auto__.push((arguments[i__18953__auto___33328]));

var G__33329 = (i__18953__auto___33328 + (1));
i__18953__auto___33328 = G__33329;
continue;
} else {
}
break;
}

var argseq__18960__auto__ = ((((0) < args__18959__auto__.length))?(new cljs.core.IndexedSeq(args__18959__auto__.slice((0)),(0),null)):null);
return taoensso.encore.log.cljs$core$IFn$_invoke$arity$variadic(argseq__18960__auto__);
});

taoensso.encore.log.cljs$core$IFn$_invoke$arity$variadic = (function (xs){
return (taoensso.encore.console_log.cljs$core$IFn$_invoke$arity$1 ? taoensso.encore.console_log.cljs$core$IFn$_invoke$arity$1(xs) : taoensso.encore.console_log.call(null,xs));
});

taoensso.encore.log.cljs$lang$maxFixedArity = (0);

taoensso.encore.log.cljs$lang$applyTo = (function (seq33316){
return taoensso.encore.log.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq33316));
});


taoensso.encore.logp = (function taoensso$encore$logp(var_args){
var args__18959__auto__ = [];
var len__18952__auto___33330 = arguments.length;
var i__18953__auto___33331 = (0);
while(true){
if((i__18953__auto___33331 < len__18952__auto___33330)){
args__18959__auto__.push((arguments[i__18953__auto___33331]));

var G__33332 = (i__18953__auto___33331 + (1));
i__18953__auto___33331 = G__33332;
continue;
} else {
}
break;
}

var argseq__18960__auto__ = ((((0) < args__18959__auto__.length))?(new cljs.core.IndexedSeq(args__18959__auto__.slice((0)),(0),null)):null);
return taoensso.encore.logp.cljs$core$IFn$_invoke$arity$variadic(argseq__18960__auto__);
});

taoensso.encore.logp.cljs$core$IFn$_invoke$arity$variadic = (function (xs){
var G__33318 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(taoensso.encore.spaced_str_with_nils.cljs$core$IFn$_invoke$arity$1 ? taoensso.encore.spaced_str_with_nils.cljs$core$IFn$_invoke$arity$1(xs) : taoensso.encore.spaced_str_with_nils.call(null,xs))], null);
return (taoensso.encore.console_log.cljs$core$IFn$_invoke$arity$1 ? taoensso.encore.console_log.cljs$core$IFn$_invoke$arity$1(G__33318) : taoensso.encore.console_log.call(null,G__33318));
});

taoensso.encore.logp.cljs$lang$maxFixedArity = (0);

taoensso.encore.logp.cljs$lang$applyTo = (function (seq33317){
return taoensso.encore.logp.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq33317));
});


taoensso.encore.logf = (function taoensso$encore$logf(var_args){
var args__18959__auto__ = [];
var len__18952__auto___33333 = arguments.length;
var i__18953__auto___33334 = (0);
while(true){
if((i__18953__auto___33334 < len__18952__auto___33333)){
args__18959__auto__.push((arguments[i__18953__auto___33334]));

var G__33335 = (i__18953__auto___33334 + (1));
i__18953__auto___33334 = G__33335;
continue;
} else {
}
break;
}

var argseq__18960__auto__ = ((((1) < args__18959__auto__.length))?(new cljs.core.IndexedSeq(args__18959__auto__.slice((1)),(0),null)):null);
return taoensso.encore.logf.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__18960__auto__);
});

taoensso.encore.logf.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,xs){
var G__33321 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [taoensso.encore.format_STAR_(fmt,xs)], null);
return (taoensso.encore.console_log.cljs$core$IFn$_invoke$arity$1 ? taoensso.encore.console_log.cljs$core$IFn$_invoke$arity$1(G__33321) : taoensso.encore.console_log.call(null,G__33321));
});

taoensso.encore.logf.cljs$lang$maxFixedArity = (1);

taoensso.encore.logf.cljs$lang$applyTo = (function (seq33319){
var G__33320 = cljs.core.first(seq33319);
var seq33319__$1 = cljs.core.next(seq33319);
return taoensso.encore.logf.cljs$core$IFn$_invoke$arity$variadic(G__33320,seq33319__$1);
});


taoensso.encore.sayp = (function taoensso$encore$sayp(var_args){
var args__18959__auto__ = [];
var len__18952__auto___33336 = arguments.length;
var i__18953__auto___33337 = (0);
while(true){
if((i__18953__auto___33337 < len__18952__auto___33336)){
args__18959__auto__.push((arguments[i__18953__auto___33337]));

var G__33338 = (i__18953__auto___33337 + (1));
i__18953__auto___33337 = G__33338;
continue;
} else {
}
break;
}

var argseq__18960__auto__ = ((((0) < args__18959__auto__.length))?(new cljs.core.IndexedSeq(args__18959__auto__.slice((0)),(0),null)):null);
return taoensso.encore.sayp.cljs$core$IFn$_invoke$arity$variadic(argseq__18960__auto__);
});

taoensso.encore.sayp.cljs$core$IFn$_invoke$arity$variadic = (function (xs){
var G__33323 = (taoensso.encore.spaced_str_with_nils.cljs$core$IFn$_invoke$arity$1 ? taoensso.encore.spaced_str_with_nils.cljs$core$IFn$_invoke$arity$1(xs) : taoensso.encore.spaced_str_with_nils.call(null,xs));
return alert(G__33323);
});

taoensso.encore.sayp.cljs$lang$maxFixedArity = (0);

taoensso.encore.sayp.cljs$lang$applyTo = (function (seq33322){
return taoensso.encore.sayp.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq33322));
});


taoensso.encore.sayf = (function taoensso$encore$sayf(var_args){
var args__18959__auto__ = [];
var len__18952__auto___33339 = arguments.length;
var i__18953__auto___33340 = (0);
while(true){
if((i__18953__auto___33340 < len__18952__auto___33339)){
args__18959__auto__.push((arguments[i__18953__auto___33340]));

var G__33341 = (i__18953__auto___33340 + (1));
i__18953__auto___33340 = G__33341;
continue;
} else {
}
break;
}

var argseq__18960__auto__ = ((((1) < args__18959__auto__.length))?(new cljs.core.IndexedSeq(args__18959__auto__.slice((1)),(0),null)):null);
return taoensso.encore.sayf.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__18960__auto__);
});

taoensso.encore.sayf.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,xs){
var G__33326 = taoensso.encore.format_STAR_(fmt,xs);
return alert(G__33326);
});

taoensso.encore.sayf.cljs$lang$maxFixedArity = (1);

taoensso.encore.sayf.cljs$lang$applyTo = (function (seq33324){
var G__33325 = cljs.core.first(seq33324);
var seq33324__$1 = cljs.core.next(seq33324);
return taoensso.encore.sayf.cljs$core$IFn$_invoke$arity$variadic(G__33325,seq33324__$1);
});

/**
 * Returns `js/window`'s current location as a map
 */
taoensso.encore.get_win_loc = (function taoensso$encore$get_win_loc(){
var temp__6503__auto__ = taoensso.encore.js__QMARK_win;
if(cljs.core.truth_(temp__6503__auto__)){
var js_win = temp__6503__auto__;
var temp__6503__auto____$1 = js_win.location;
if(cljs.core.truth_(temp__6503__auto____$1)){
var loc = temp__6503__auto____$1;
return new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$href,loc.href,cljs.core.cst$kw$protocol,loc.protocol,cljs.core.cst$kw$hostname,loc.hostname,cljs.core.cst$kw$host,loc.host,cljs.core.cst$kw$pathname,loc.pathname,cljs.core.cst$kw$search,loc.search,cljs.core.cst$kw$hash,loc.hash], null);
} else {
return null;
}
} else {
return null;
}
});
taoensso.encore.xhr_pool_ = (new cljs.core.Delay((function (){
return (new goog.net.XhrIoPool());
}),null));
/**
 * Returns an immediately available XhrIo instance, or nil. The instance must be
 *   released back to pool manually.
 */
taoensso.encore.get_pooled_xhr_BANG_ = (function taoensso$encore$get_pooled_xhr_BANG_(){
var result = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(taoensso.encore.xhr_pool_) : cljs.core.deref.call(null,taoensso.encore.xhr_pool_)).getObject();
if((void 0 === result)){
return null;
} else {
return result;
}
});
/**
 * [uri method get-or-post-params] -> [uri post-content]
 */
taoensso.encore.coerce_xhr_params = (function taoensso$encore$coerce_xhr_params(uri,method,params){
if(cljs.core.truth_((cljs.core.truth_((function (x){
var or__17769__auto__ = (x == null);
if(or__17769__auto__){
return or__17769__auto__;
} else {
return taoensso.truss.impl.non_throwing(cljs.core.map_QMARK_).call(null,x);
}
}).call(null,params))?true:taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.encore",null,"([:or nil? map?] params)",params,null,null)))){
} else {
throw (new Error("Assert failed: (have? [:or nil? map?] params)"));
}

var _QMARK_pstr = ((cljs.core.seq(params))?(function (){var s = (function (){var G__33344 = (new goog.structs.Map(cljs.core.clj__GT_js(params)));
return goog.Uri.QueryData.createFromMap(G__33344);
})().toString();
if(clojure.string.blank_QMARK_(s)){
return null;
} else {
return s;
}
})():null);
var G__33345 = (((method instanceof cljs.core.Keyword))?method.fqn:null);
switch (G__33345) {
case "get":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(_QMARK_pstr)?[cljs.core.str(uri),cljs.core.str("?"),cljs.core.str(_QMARK_pstr)].join(''):uri),null], null);

break;
case "post":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [uri,_QMARK_pstr], null);

break;
case "put":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [uri,_QMARK_pstr], null);

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(method)].join('')));

}
});
/**
 * Alpha - subject to change.
 *   Simple+lightweight Ajax via Google Closure. Returns nil, or the xhr instance.
 *   Ref. https://developers.google.com/closure/library/docs/xhrio.
 * 
 *   (ajax-lite "/my-post-route"
 *  {:method     :post
 *   :params     {:username "Rich Hickey"
 *                :type     "Awesome"}
 *   :headers    {"Foo" "Bar"}
 *   :resp-type  :text
 *   :timeout-ms 7000
 *   :with-credentials? false ; Enable if using CORS (requires xhr v2+)
 *  }
 *  (fn async-callback [resp-map]
 *    (let [{:keys [success? ?status ?error ?content ?content-type]} resp-map]
 *      ;; ?status  - 200, 404, ..., or nil on no response
 *      ;; ?error   - e/o #{:xhr-pool-depleted :exception :http-error :abort
 *      ;;                  :timeout :no-content <http-error-status> nil}
 *      (js/alert (str "Ajax response: " resp-map)))))
 */
taoensso.encore.ajax_lite = (function taoensso$encore$ajax_lite(uri,p__33349,callback){
var map__33391 = p__33349;
var map__33391__$1 = ((((!((map__33391 == null)))?((((map__33391.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33391.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33391):map__33391);
var opts = map__33391__$1;
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__33391__$1,cljs.core.cst$kw$method,cljs.core.cst$kw$get);
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33391__$1,cljs.core.cst$kw$params);
var headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33391__$1,cljs.core.cst$kw$headers);
var timeout_ms = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__33391__$1,cljs.core.cst$kw$timeout_DASH_ms,(10000));
var resp_type = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__33391__$1,cljs.core.cst$kw$resp_DASH_type,cljs.core.cst$kw$auto);
var with_credentials_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33391__$1,cljs.core.cst$kw$with_DASH_credentials_QMARK_);
var progress_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33391__$1,cljs.core.cst$kw$progress_DASH_fn);
var errorf = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__33391__$1,cljs.core.cst$kw$errorf,taoensso.encore.logf);
if(cljs.core.truth_((cljs.core.truth_(((function (map__33391,map__33391__$1,opts,method,params,headers,timeout_ms,resp_type,with_credentials_QMARK_,progress_fn,errorf){
return (function (x){
var or__17769__auto__ = (x == null);
if(or__17769__auto__){
return or__17769__auto__;
} else {
return taoensso.truss.impl.non_throwing(taoensso.encore.nat_int_QMARK_).call(null,x);
}
});})(map__33391,map__33391__$1,opts,method,params,headers,timeout_ms,resp_type,with_credentials_QMARK_,progress_fn,errorf))
.call(null,timeout_ms))?true:taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.encore",null,"([:or nil? nat-int?] timeout-ms)",timeout_ms,null,null)))){
} else {
throw (new Error("Assert failed: (have? [:or nil? nat-int?] timeout-ms)"));
}

var temp__6501__auto__ = taoensso.encore.get_pooled_xhr_BANG_();
if(cljs.core.truth_(temp__6501__auto__)){
var xhr = temp__6501__auto__;
try{var timeout_ms__$1 = (function (){var or__17769__auto__ = cljs.core.cst$kw$timeout.cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__17769__auto__)){
return or__17769__auto__;
} else {
return timeout_ms;
}
})();
var method_STAR_ = (function (){var G__33397 = (((method instanceof cljs.core.Keyword))?method.fqn:null);
switch (G__33397) {
case "get":
return "GET";

break;
case "post":
return "POST";

break;
case "put":
return "PUT";

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(method)].join('')));

}
})();
var params__$1 = taoensso.encore.map_keys(cljs.core.name,params);
var headers__$1 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, ["X-Requested-With","XMLHTTPRequest"], null),taoensso.encore.map_keys(cljs.core.name,headers)], 0));
var vec__33394 = taoensso.encore.coerce_xhr_params(uri,method,params__$1);
var uri_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33394,(0),null);
var post_content_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33394,(1),null);
var headers_STAR_ = cljs.core.clj__GT_js((cljs.core.truth_(post_content_STAR_)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(headers__$1,"Content-Type","application/x-www-form-urlencoded; charset=UTF-8"):headers__$1));
var G__33398_33433 = xhr;
var G__33399_33434 = G__33398_33433;
var G__33400_33435 = goog.net.EventType.READY;
var G__33401_33436 = ((function (G__33399_33434,G__33400_33435,G__33398_33433,timeout_ms__$1,method_STAR_,params__$1,headers__$1,vec__33394,uri_STAR_,post_content_STAR_,headers_STAR_,xhr,temp__6501__auto__,map__33391,map__33391__$1,opts,method,params,headers,timeout_ms,resp_type,with_credentials_QMARK_,progress_fn,errorf){
return (function (_){
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(taoensso.encore.xhr_pool_) : cljs.core.deref.call(null,taoensso.encore.xhr_pool_)).releaseObject(xhr);
});})(G__33399_33434,G__33400_33435,G__33398_33433,timeout_ms__$1,method_STAR_,params__$1,headers__$1,vec__33394,uri_STAR_,post_content_STAR_,headers_STAR_,xhr,temp__6501__auto__,map__33391,map__33391__$1,opts,method,params,headers,timeout_ms,resp_type,with_credentials_QMARK_,progress_fn,errorf))
;
goog.events.listenOnce(G__33399_33434,G__33400_33435,G__33401_33436);

var G__33412_33437 = G__33398_33433;
var G__33413_33438 = goog.net.EventType.COMPLETE;
var G__33414_33439 = ((function (G__33412_33437,G__33413_33438,G__33398_33433,timeout_ms__$1,method_STAR_,params__$1,headers__$1,vec__33394,uri_STAR_,post_content_STAR_,headers_STAR_,xhr,temp__6501__auto__,map__33391,map__33391__$1,opts,method,params,headers,timeout_ms,resp_type,with_credentials_QMARK_,progress_fn,errorf){
return (function taoensso$encore$ajax_lite_$_wrapped_callback(resp){
var status = xhr.getStatus();
var success_QMARK_ = xhr.isSuccess();
var _QMARK_http_status = ((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(status,(-1)))?status:null);
var _QMARK_content_type = (cljs.core.truth_(_QMARK_http_status)?xhr.getResponseHeader("Content-Type"):null);
var _QMARK_content = (cljs.core.truth_(_QMARK_http_status)?(function (){var resp_type__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(resp_type,cljs.core.cst$kw$auto))?(function (){var pred__33420 = ((function (status,success_QMARK_,_QMARK_http_status,_QMARK_content_type,G__33412_33437,G__33413_33438,G__33398_33433,timeout_ms__$1,method_STAR_,params__$1,headers__$1,vec__33394,uri_STAR_,post_content_STAR_,headers_STAR_,xhr,temp__6501__auto__,map__33391,map__33391__$1,opts,method,params,headers,timeout_ms,resp_type,with_credentials_QMARK_,progress_fn,errorf){
return (function (p1__33348_SHARP_,p2__33347_SHARP_){
return taoensso.encore.str_contains_QMARK_(p2__33347_SHARP_,p1__33348_SHARP_);
});})(status,success_QMARK_,_QMARK_http_status,_QMARK_content_type,G__33412_33437,G__33413_33438,G__33398_33433,timeout_ms__$1,method_STAR_,params__$1,headers__$1,vec__33394,uri_STAR_,post_content_STAR_,headers_STAR_,xhr,temp__6501__auto__,map__33391,map__33391__$1,opts,method,params,headers,timeout_ms,resp_type,with_credentials_QMARK_,progress_fn,errorf))
;
var expr__33421 = [cljs.core.str(_QMARK_content_type)].join('');
if(cljs.core.truth_(pred__33420("/edn",expr__33421))){
return cljs.core.cst$kw$edn;
} else {
if(cljs.core.truth_(pred__33420("/json",expr__33421))){
return cljs.core.cst$kw$json;
} else {
if(cljs.core.truth_(pred__33420("/xml",expr__33421))){
return cljs.core.cst$kw$xml;
} else {
if(cljs.core.truth_(pred__33420("/html",expr__33421))){
return cljs.core.cst$kw$text;
} else {
return cljs.core.cst$kw$text;
}
}
}
}
})():resp_type);
try{var G__33424 = (((resp_type__$1 instanceof cljs.core.Keyword))?resp_type__$1.fqn:null);
switch (G__33424) {
case "text":
return xhr.getResponseText();

break;
case "json":
return xhr.getResponseJson();

break;
case "xml":
return xhr.getResponseXml();

break;
case "edn":
return taoensso.encore.read_edn.cljs$core$IFn$_invoke$arity$1(xhr.getResponseText());

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(resp_type__$1)].join('')));

}
}catch (e33423){if((e33423 instanceof Error)){
var e = e33423;
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$ajax_SLASH_bad_DASH_response_DASH_type,resp_type__$1,cljs.core.cst$kw$ajax_SLASH_resp_DASH_as_DASH_text,xhr.getResponseText()], null);
} else {
throw e33423;

}
}})():null);
var cb_arg = new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$raw_DASH_resp,resp,cljs.core.cst$kw$xhr,xhr,cljs.core.cst$kw$success_QMARK_,success_QMARK_,cljs.core.cst$kw$_QMARK_content_DASH_type,(cljs.core.truth_(_QMARK_http_status)?_QMARK_content_type:null),cljs.core.cst$kw$_QMARK_content,_QMARK_content,cljs.core.cst$kw$_QMARK_status,_QMARK_http_status,cljs.core.cst$kw$_QMARK_error,(function (){var or__17769__auto__ = (cljs.core.truth_(_QMARK_http_status)?(function (){var n = _QMARK_http_status;
if(cljs.core.truth_(success_QMARK_)){
return null;
} else {
return _QMARK_http_status;
}
})():cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.fromArray([goog.net.ErrorCode.EXCEPTION,cljs.core.cst$kw$exception,goog.net.ErrorCode.HTTP_ERROR,cljs.core.cst$kw$http_DASH_error,goog.net.ErrorCode.ABORT,cljs.core.cst$kw$abort,goog.net.ErrorCode.TIMEOUT,cljs.core.cst$kw$timeout], true, false),xhr.getLastErrorCode(),cljs.core.cst$kw$unknown));
if(cljs.core.truth_(or__17769__auto__)){
return or__17769__auto__;
} else {
if(((_QMARK_content == null)) && (cljs.core.not(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [(204),null,(1223),null], null), null).call(null,_QMARK_http_status)))){
return cljs.core.cst$kw$no_DASH_content;
} else {
return null;
}
}
})()], null);
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(cb_arg) : callback.call(null,cb_arg));
});})(G__33412_33437,G__33413_33438,G__33398_33433,timeout_ms__$1,method_STAR_,params__$1,headers__$1,vec__33394,uri_STAR_,post_content_STAR_,headers_STAR_,xhr,temp__6501__auto__,map__33391,map__33391__$1,opts,method,params,headers,timeout_ms,resp_type,with_credentials_QMARK_,progress_fn,errorf))
;
goog.events.listenOnce(G__33412_33437,G__33413_33438,G__33414_33439);


var temp__6503__auto___33441 = progress_fn;
if(cljs.core.truth_(temp__6503__auto___33441)){
var pf_33442 = temp__6503__auto___33441;
var G__33426_33443 = xhr;
var G__33427_33444 = goog.net.EventType.PROGRESS;
var G__33428_33445 = ((function (G__33426_33443,G__33427_33444,pf_33442,temp__6503__auto___33441,timeout_ms__$1,method_STAR_,params__$1,headers__$1,vec__33394,uri_STAR_,post_content_STAR_,headers_STAR_,xhr,temp__6501__auto__,map__33391,map__33391__$1,opts,method,params,headers,timeout_ms,resp_type,with_credentials_QMARK_,progress_fn,errorf){
return (function (ev){
var length_computable_QMARK_ = ev.lengthComputable;
var loaded = ev.loaded;
var total = ev.total;
var _QMARK_ratio = (cljs.core.truth_((function (){var and__17757__auto__ = length_computable_QMARK_;
if(cljs.core.truth_(and__17757__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(total,(0));
} else {
return and__17757__auto__;
}
})())?(loaded / total):null);
var G__33429 = new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$_QMARK_ratio,_QMARK_ratio,cljs.core.cst$kw$length_DASH_computable_QMARK_,length_computable_QMARK_,cljs.core.cst$kw$loaded,loaded,cljs.core.cst$kw$total,total,cljs.core.cst$kw$ev,ev], null);
return (pf_33442.cljs$core$IFn$_invoke$arity$1 ? pf_33442.cljs$core$IFn$_invoke$arity$1(G__33429) : pf_33442.call(null,G__33429));
});})(G__33426_33443,G__33427_33444,pf_33442,temp__6503__auto___33441,timeout_ms__$1,method_STAR_,params__$1,headers__$1,vec__33394,uri_STAR_,post_content_STAR_,headers_STAR_,xhr,temp__6501__auto__,map__33391,map__33391__$1,opts,method,params,headers,timeout_ms,resp_type,with_credentials_QMARK_,progress_fn,errorf))
;
goog.events.listen(G__33426_33443,G__33427_33444,G__33428_33445);
} else {
}

var G__33430_33446 = xhr;
var temp__6503__auto___33447 = cljs.core.cst$kw$always;
if(cljs.core.truth_(temp__6503__auto___33447)){
var x_33448 = temp__6503__auto___33447;
G__33430_33446.setTimeoutInterval((function (){var or__17769__auto__ = timeout_ms__$1;
if(cljs.core.truth_(or__17769__auto__)){
return or__17769__auto__;
} else {
return (0);
}
})());
} else {
}

var temp__6503__auto___33449 = with_credentials_QMARK_;
if(cljs.core.truth_(temp__6503__auto___33449)){
var x_33450 = temp__6503__auto___33449;
G__33430_33446.setWithCredentials(true);
} else {
}

var temp__6503__auto___33451 = cljs.core.cst$kw$always;
if(cljs.core.truth_(temp__6503__auto___33451)){
var x_33452 = temp__6503__auto___33451;
G__33430_33446.send(uri_STAR_,method_STAR_,post_content_STAR_,headers_STAR_);
} else {
}


return xhr;
}catch (e33393){if((e33393 instanceof Error)){
var e = e33393;
(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(taoensso.encore.xhr_pool_) : cljs.core.deref.call(null,taoensso.encore.xhr_pool_)).releaseObject(xhr);

return null;
} else {
throw e33393;

}
}} else {
var G__33431_33453 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$_QMARK_error,cljs.core.cst$kw$xhr_DASH_pool_DASH_depleted], null);
(callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(G__33431_33453) : callback.call(null,G__33431_33453));

return null;
}
});
/**
 * Stolen from http://goo.gl/99NSR1
 */
taoensso.encore.url_encode = (function taoensso$encore$url_encode(s){
if(cljs.core.truth_(s)){
return clojure.string.replace(clojure.string.replace((function (){var G__33456 = [cljs.core.str(s)].join('');
var G__33457 = s;
return encodeURIComponent(G__33456,G__33457);
})(),"*","%2A"),"'","%27");
} else {
return null;
}
});
/**
 * Stolen from http://goo.gl/99NSR1
 */
taoensso.encore.url_decode = (function taoensso$encore$url_decode(var_args){
var args__18959__auto__ = [];
var len__18952__auto___33464 = arguments.length;
var i__18953__auto___33465 = (0);
while(true){
if((i__18953__auto___33465 < len__18952__auto___33464)){
args__18959__auto__.push((arguments[i__18953__auto___33465]));

var G__33466 = (i__18953__auto___33465 + (1));
i__18953__auto___33465 = G__33466;
continue;
} else {
}
break;
}

var argseq__18960__auto__ = ((((1) < args__18959__auto__.length))?(new cljs.core.IndexedSeq(args__18959__auto__.slice((1)),(0),null)):null);
return taoensso.encore.url_decode.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__18960__auto__);
});

taoensso.encore.url_decode.cljs$core$IFn$_invoke$arity$variadic = (function (s,p__33460){
var vec__33461 = p__33460;
var encoding = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33461,(0),null);
if(cljs.core.truth_(s)){
return decodeURIComponent(s);
} else {
return null;
}
});

taoensso.encore.url_decode.cljs$lang$maxFixedArity = (1);

taoensso.encore.url_decode.cljs$lang$applyTo = (function (seq33458){
var G__33459 = cljs.core.first(seq33458);
var seq33458__$1 = cljs.core.next(seq33458);
return taoensso.encore.url_decode.cljs$core$IFn$_invoke$arity$variadic(G__33459,seq33458__$1);
});

taoensso.encore.format_query_string = (function taoensso$encore$format_query_string(m){
var param = (function (k,v){
return [cljs.core.str(taoensso.encore.url_encode(taoensso.encore.as_qname(k))),cljs.core.str("="),cljs.core.str(taoensso.encore.url_encode((function (){var or__17769__auto__ = taoensso.encore.as__QMARK_qname(v);
if(cljs.core.truth_(or__17769__auto__)){
return or__17769__auto__;
} else {
return [cljs.core.str(v)].join('');
}
})()))].join('');
});
var join = ((function (param){
return (function (strs){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",strs);
});})(param))
;
if(cljs.core.empty_QMARK_(m)){
return "";
} else {
return join((function (){var iter__18623__auto__ = ((function (param,join){
return (function taoensso$encore$format_query_string_$_iter__33485(s__33486){
return (new cljs.core.LazySeq(null,((function (param,join){
return (function (){
var s__33486__$1 = s__33486;
while(true){
var temp__6503__auto__ = cljs.core.seq(s__33486__$1);
if(temp__6503__auto__){
var s__33486__$2 = temp__6503__auto__;
if(cljs.core.chunked_seq_QMARK_(s__33486__$2)){
var c__18621__auto__ = cljs.core.chunk_first(s__33486__$2);
var size__18622__auto__ = cljs.core.count(c__18621__auto__);
var b__33488 = cljs.core.chunk_buffer(size__18622__auto__);
if((function (){var i__33487 = (0);
while(true){
if((i__33487 < size__18622__auto__)){
var vec__33497 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__18621__auto__,i__33487);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33497,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33497,(1),null);
if(taoensso.encore.some_QMARK_(v)){
cljs.core.chunk_append(b__33488,((cljs.core.sequential_QMARK_(v))?join(cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(param,k),(function (){var or__17769__auto__ = cljs.core.seq(v);
if(or__17769__auto__){
return or__17769__auto__;
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [""], null);
}
})())):param(k,v)));

var G__33503 = (i__33487 + (1));
i__33487 = G__33503;
continue;
} else {
var G__33504 = (i__33487 + (1));
i__33487 = G__33504;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__33488),taoensso$encore$format_query_string_$_iter__33485(cljs.core.chunk_rest(s__33486__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__33488),null);
}
} else {
var vec__33500 = cljs.core.first(s__33486__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33500,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33500,(1),null);
if(taoensso.encore.some_QMARK_(v)){
return cljs.core.cons(((cljs.core.sequential_QMARK_(v))?join(cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(param,k),(function (){var or__17769__auto__ = cljs.core.seq(v);
if(or__17769__auto__){
return or__17769__auto__;
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [""], null);
}
})())):param(k,v)),taoensso$encore$format_query_string_$_iter__33485(cljs.core.rest(s__33486__$2)));
} else {
var G__33505 = cljs.core.rest(s__33486__$2);
s__33486__$1 = G__33505;
continue;
}
}
} else {
return null;
}
break;
}
});})(param,join))
,null,null));
});})(param,join))
;
return iter__18623__auto__(m);
})());
}
});
taoensso.encore.assoc_conj = (function taoensso$encore$assoc_conj(m,k,v){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,(function (){var temp__6501__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k);
if(cljs.core.truth_(temp__6501__auto__)){
var cur = temp__6501__auto__;
if(cljs.core.vector_QMARK_(cur)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cur,v);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cur,v], null);
}
} else {
return v;
}
})());
});
/**
 * Based on `ring-codec/form-decode`
 */
taoensso.encore.parse_query_params = (function taoensso$encore$parse_query_params(var_args){
var args__18959__auto__ = [];
var len__18952__auto___33516 = arguments.length;
var i__18953__auto___33517 = (0);
while(true){
if((i__18953__auto___33517 < len__18952__auto___33516)){
args__18959__auto__.push((arguments[i__18953__auto___33517]));

var G__33518 = (i__18953__auto___33517 + (1));
i__18953__auto___33517 = G__33518;
continue;
} else {
}
break;
}

var argseq__18960__auto__ = ((((1) < args__18959__auto__.length))?(new cljs.core.IndexedSeq(args__18959__auto__.slice((1)),(0),null)):null);
return taoensso.encore.parse_query_params.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__18960__auto__);
});

taoensso.encore.parse_query_params.cljs$core$IFn$_invoke$arity$variadic = (function (s,p__33508){
var vec__33509 = p__33508;
var keywordize_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33509,(0),null);
var encoding = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33509,(1),null);
var _PERCENT_ = ((clojure.string.blank_QMARK_(s))?cljs.core.PersistentArrayMap.EMPTY:(function (){var s__$1 = (cljs.core.truth_(taoensso.encore.str_starts_with_QMARK_(s,"?"))?cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s,(1)):s);
if(cljs.core.truth_(taoensso.encore.str_contains_QMARK_(s__$1,"="))){
var m = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (s__$1,vec__33509,keywordize_QMARK_,encoding){
return (function (m,param){
var temp__6501__auto__ = clojure.string.split.cljs$core$IFn$_invoke$arity$3(param,/=/,(2));
if(cljs.core.truth_(temp__6501__auto__)){
var vec__33512 = temp__6501__auto__;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33512,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33512,(1),null);
return taoensso.encore.assoc_conj(m,taoensso.encore.url_decode.cljs$core$IFn$_invoke$arity$variadic(k,cljs.core.array_seq([encoding], 0)),taoensso.encore.url_decode.cljs$core$IFn$_invoke$arity$variadic(v,cljs.core.array_seq([encoding], 0)));
} else {
return m;
}
});})(s__$1,vec__33509,keywordize_QMARK_,encoding))
,cljs.core.PersistentArrayMap.EMPTY,clojure.string.split.cljs$core$IFn$_invoke$arity$2(s__$1,/&/));
if(cljs.core.truth_(keywordize_QMARK_)){
return taoensso.encore.map_keys(cljs.core.keyword,m);
} else {
return m;
}
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})());
if(cljs.core.truth_((function (){var e = (function (){try{if(cljs.core.map_QMARK_(_PERCENT_)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e33515){if((e33515 instanceof Error)){
var e = e33515;
return e;
} else {
throw e33515;

}
}})();
if((e == null)){
return true;
} else {
return taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.encore",null,"(map? %)",_PERCENT_,e,null);
}
})())){
} else {
throw (new Error("Assert failed: (have? map? %)"));
}

return _PERCENT_;
});

taoensso.encore.parse_query_params.cljs$lang$maxFixedArity = (1);

taoensso.encore.parse_query_params.cljs$lang$applyTo = (function (seq33506){
var G__33507 = cljs.core.first(seq33506);
var seq33506__$1 = cljs.core.next(seq33506);
return taoensso.encore.parse_query_params.cljs$core$IFn$_invoke$arity$variadic(G__33507,seq33506__$1);
});

taoensso.encore.merge_url_with_query_string = (function taoensso$encore$merge_url_with_query_string(url,m){
var vec__33522 = clojure.string.split.cljs$core$IFn$_invoke$arity$3([cljs.core.str(url)].join(''),/\?/,(2));
var url__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33522,(0),null);
var _QMARK_qstr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33522,(1),null);
var qmap = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([(cljs.core.truth_(_QMARK_qstr)?taoensso.encore.map_keys(cljs.core.keyword,taoensso.encore.parse_query_params(_QMARK_qstr)):null),taoensso.encore.map_keys(cljs.core.keyword,m)], 0));
var _QMARK_qstr__$1 = taoensso.encore.as__QMARK_nblank(taoensso.encore.format_query_string(qmap));
var temp__6501__auto__ = _QMARK_qstr__$1;
if(cljs.core.truth_(temp__6501__auto__)){
var qstr = temp__6501__auto__;
return [cljs.core.str(url__$1),cljs.core.str("?"),cljs.core.str(qstr)].join('');
} else {
return url__$1;
}
});
taoensso.encore._new_stub_ = (function taoensso$encore$_new_stub_(sfn_name){
return cljs.core.volatile_BANG_((function() { 
var G__33525__delegate = function (args){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2([cljs.core.str("No stubfn implementation for: "),cljs.core.str(sfn_name)].join(''),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$sfn_DASH_name,sfn_name,cljs.core.cst$kw$args,args], null));
};
var G__33525 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__33526__i = 0, G__33526__a = new Array(arguments.length -  0);
while (G__33526__i < G__33526__a.length) {G__33526__a[G__33526__i] = arguments[G__33526__i + 0]; ++G__33526__i;}
  args = new cljs.core.IndexedSeq(G__33526__a,0);
} 
return G__33525__delegate.call(this,args);};
G__33525.cljs$lang$maxFixedArity = 0;
G__33525.cljs$lang$applyTo = (function (arglist__33527){
var args = cljs.core.seq(arglist__33527);
return G__33525__delegate(args);
});
G__33525.cljs$core$IFn$_invoke$arity$variadic = G__33525__delegate;
return G__33525;
})()
);
});
taoensso.encore.fixture_map__GT_fn = (function taoensso$encore$fixture_map__GT_fn(p__33529){
var map__33532 = p__33529;
var map__33532__$1 = ((((!((map__33532 == null)))?((((map__33532.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33532.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33532):map__33532);
var before = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__33532__$1,cljs.core.cst$kw$before,cljs.core.cst$sym$do);
var after = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__33532__$1,cljs.core.cst$kw$after,cljs.core.cst$sym$do);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_fn),(function (){var x__18695__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$f__33528__auto__)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__18695__auto__);
})(),cljs.core.array_seq([(function (){var x__18695__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((function (){var x__18695__auto__ = before;
return cljs.core._conj(cljs.core.List.EMPTY,x__18695__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__18695__auto__);
})(),(function (){var x__18695__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$f__33528__auto__))));
return cljs.core._conj(cljs.core.List.EMPTY,x__18695__auto__);
})(),(function (){var x__18695__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((function (){var x__18695__auto__ = after;
return cljs.core._conj(cljs.core.List.EMPTY,x__18695__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__18695__auto__);
})()], 0))));
});
taoensso.encore.get_window_location = taoensso.encore.get_win_loc;

taoensso.encore.backport_run_BANG_ = taoensso.encore.run_BANG_;

taoensso.encore.fq_name = taoensso.encore.as_qname;

taoensso.encore.qname = taoensso.encore.as_qname;

taoensso.encore.merge_deep_with = taoensso.encore.nested_merge_with;

taoensso.encore.merge_deep = taoensso.encore.nested_merge;

taoensso.encore.parse_bool = taoensso.encore.as__QMARK_bool;

taoensso.encore.parse_int = taoensso.encore.as__QMARK_int;

taoensso.encore.parse_float = taoensso.encore.as__QMARK_float;

taoensso.encore.swapped_STAR_ = taoensso.encore._swapped;

taoensso.encore.swap_val_BANG_ = taoensso.encore._swap_cache_BANG_;

taoensso.encore.memoize_a0_ = taoensso.encore.memoize_;

taoensso.encore.memoize_a1_ = taoensso.encore.memoize_;

taoensso.encore.a0_memoize_ = taoensso.encore.memoize_;

taoensso.encore.a1_memoize_ = taoensso.encore.memoize_;

taoensso.encore.memoize_1 = taoensso.encore.memoize_last;

taoensso.encore.memoize1 = taoensso.encore.memoize_last;

taoensso.encore.nnil_QMARK_ = taoensso.encore.some_QMARK_;

taoensso.encore.nneg_num_QMARK_ = taoensso.encore.nat_num_QMARK_;

taoensso.encore.nneg_int_QMARK_ = taoensso.encore.nat_int_QMARK_;

taoensso.encore.nneg_float_QMARK_ = taoensso.encore.nat_float_QMARK_;

taoensso.encore.uint_QMARK_ = taoensso.encore.nat_int_QMARK_;

taoensso.encore.pint_QMARK_ = taoensso.encore.pos_int_QMARK_;

taoensso.encore.nnil_EQ_ = taoensso.encore.some_EQ_;

taoensso.encore.as__QMARK_uint = taoensso.encore.as__QMARK_nat_int;

taoensso.encore.as__QMARK_pint = taoensso.encore.as__QMARK_pos_int;

taoensso.encore.as__QMARK_ufloat = taoensso.encore.as__QMARK_nat_float;

taoensso.encore.as__QMARK_pfloat = taoensso.encore.as__QMARK_pos_float;

taoensso.encore.as_uint = taoensso.encore.as_nat_int;

taoensso.encore.as_pint = taoensso.encore.as_pos_int;

taoensso.encore.as_ufloat = taoensso.encore.as_nat_float;

taoensso.encore.as_pfloat = taoensso.encore.as_pos_float;

taoensso.encore.run_BANG__STAR_ = taoensso.encore.run_BANG_;

taoensso.encore.every = taoensso.encore.revery;

taoensso.encore.spaced_str_with_nils = (function taoensso$encore$spaced_str_with_nils(xs){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(taoensso.encore.nil__GT_str,xs));
});

taoensso.encore.spaced_str = (function taoensso$encore$spaced_str(xs){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(taoensso.encore.undefined__GT_nil,xs));
});

taoensso.encore.round = (function taoensso$encore$round(var_args){
var args__18959__auto__ = [];
var len__18952__auto___33641 = arguments.length;
var i__18953__auto___33642 = (0);
while(true){
if((i__18953__auto___33642 < len__18952__auto___33641)){
args__18959__auto__.push((arguments[i__18953__auto___33642]));

var G__33643 = (i__18953__auto___33642 + (1));
i__18953__auto___33642 = G__33643;
continue;
} else {
}
break;
}

var argseq__18960__auto__ = ((((1) < args__18959__auto__.length))?(new cljs.core.IndexedSeq(args__18959__auto__.slice((1)),(0),null)):null);
return taoensso.encore.round.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__18960__auto__);
});

taoensso.encore.round.cljs$core$IFn$_invoke$arity$variadic = (function (n,p__33540){
var vec__33541 = p__33540;
var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33541,(0),null);
var nplaces = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33541,(1),null);
return taoensso.encore.round_STAR_.cljs$core$IFn$_invoke$arity$3((function (){var or__17769__auto__ = type;
if(cljs.core.truth_(or__17769__auto__)){
return or__17769__auto__;
} else {
return cljs.core.cst$kw$round;
}
})(),nplaces,n);
});

taoensso.encore.round.cljs$lang$maxFixedArity = (1);

taoensso.encore.round.cljs$lang$applyTo = (function (seq33538){
var G__33539 = cljs.core.first(seq33538);
var seq33538__$1 = cljs.core.next(seq33538);
return taoensso.encore.round.cljs$core$IFn$_invoke$arity$variadic(G__33539,seq33538__$1);
});


taoensso.encore.join_once = (function taoensso$encore$join_once(var_args){
var args__18959__auto__ = [];
var len__18952__auto___33644 = arguments.length;
var i__18953__auto___33645 = (0);
while(true){
if((i__18953__auto___33645 < len__18952__auto___33644)){
args__18959__auto__.push((arguments[i__18953__auto___33645]));

var G__33646 = (i__18953__auto___33645 + (1));
i__18953__auto___33645 = G__33646;
continue;
} else {
}
break;
}

var argseq__18960__auto__ = ((((1) < args__18959__auto__.length))?(new cljs.core.IndexedSeq(args__18959__auto__.slice((1)),(0),null)):null);
return taoensso.encore.join_once.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__18960__auto__);
});

taoensso.encore.join_once.cljs$core$IFn$_invoke$arity$variadic = (function (sep,coll){
return taoensso.encore.str_join_once(sep,coll);
});

taoensso.encore.join_once.cljs$lang$maxFixedArity = (1);

taoensso.encore.join_once.cljs$lang$applyTo = (function (seq33544){
var G__33545 = cljs.core.first(seq33544);
var seq33544__$1 = cljs.core.next(seq33544);
return taoensso.encore.join_once.cljs$core$IFn$_invoke$arity$variadic(G__33545,seq33544__$1);
});


taoensso.encore.keys_EQ_ = (function taoensso$encore$keys_EQ_(m,ks){
return taoensso.encore.ks_EQ_(ks,m);
});

taoensso.encore.keys_LT__EQ_ = (function taoensso$encore$keys_LT__EQ_(m,ks){
return taoensso.encore.ks_LT__EQ_(ks,m);
});

taoensso.encore.keys_GT__EQ_ = (function taoensso$encore$keys_GT__EQ_(m,ks){
return taoensso.encore.ks_GT__EQ_(ks,m);
});

taoensso.encore.keys_EQ_nnil_QMARK_ = (function taoensso$encore$keys_EQ_nnil_QMARK_(m,ks){
return taoensso.encore.ks_nnil_QMARK_(ks,m);
});

taoensso.encore.rate_limiter = (function taoensso$encore$rate_limiter(ncalls_limit,window_ms){
return taoensso.encore.rate_limiter_STAR_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ncalls_limit,window_ms], null)], null));
});

taoensso.encore.rate_limited = (function taoensso$encore$rate_limited(ncalls_limit,window_ms,f){
var rl = taoensso.encore.rate_limiter_STAR_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ncalls_limit,window_ms], null)], null));
return ((function (rl){
return (function() { 
var G__33647__delegate = function (args){
var temp__6501__auto__ = (rl.cljs$core$IFn$_invoke$arity$0 ? rl.cljs$core$IFn$_invoke$arity$0() : rl.call(null));
if(cljs.core.truth_(temp__6501__auto__)){
var backoff_ms = temp__6501__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$backoff_DASH_ms,backoff_ms], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$result,(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null))], null);
}
};
var G__33647 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__33648__i = 0, G__33648__a = new Array(arguments.length -  0);
while (G__33648__i < G__33648__a.length) {G__33648__a[G__33648__i] = arguments[G__33648__i + 0]; ++G__33648__i;}
  args = new cljs.core.IndexedSeq(G__33648__a,0);
} 
return G__33647__delegate.call(this,args);};
G__33647.cljs$lang$maxFixedArity = 0;
G__33647.cljs$lang$applyTo = (function (arglist__33649){
var args = cljs.core.seq(arglist__33649);
return G__33647__delegate(args);
});
G__33647.cljs$core$IFn$_invoke$arity$variadic = G__33647__delegate;
return G__33647;
})()
;
;})(rl))
});

taoensso.encore.logging_level = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$debug) : cljs.core.atom.call(null,cljs.core.cst$kw$debug));

taoensso.encore.set_exp_backoff_timeout_BANG_ = (function taoensso$encore$set_exp_backoff_timeout_BANG_(var_args){
var args__18959__auto__ = [];
var len__18952__auto___33650 = arguments.length;
var i__18953__auto___33651 = (0);
while(true){
if((i__18953__auto___33651 < len__18952__auto___33650)){
args__18959__auto__.push((arguments[i__18953__auto___33651]));

var G__33652 = (i__18953__auto___33651 + (1));
i__18953__auto___33651 = G__33652;
continue;
} else {
}
break;
}

var argseq__18960__auto__ = ((((1) < args__18959__auto__.length))?(new cljs.core.IndexedSeq(args__18959__auto__.slice((1)),(0),null)):null);
return taoensso.encore.set_exp_backoff_timeout_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__18960__auto__);
});

taoensso.encore.set_exp_backoff_timeout_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (nullary_f,p__33548){
var vec__33549 = p__33548;
var nattempt = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33549,(0),null);
var temp__6503__auto__ = taoensso.encore.js__QMARK_win;
if(cljs.core.truth_(temp__6503__auto__)){
var js_win = temp__6503__auto__;
return js_win.setTimeout(nullary_f,taoensso.encore.exp_backoff.cljs$core$IFn$_invoke$arity$1((function (){var or__17769__auto__ = nattempt;
if(cljs.core.truth_(or__17769__auto__)){
return or__17769__auto__;
} else {
return (0);
}
})()));
} else {
return null;
}
});

taoensso.encore.set_exp_backoff_timeout_BANG_.cljs$lang$maxFixedArity = (1);

taoensso.encore.set_exp_backoff_timeout_BANG_.cljs$lang$applyTo = (function (seq33546){
var G__33547 = cljs.core.first(seq33546);
var seq33546__$1 = cljs.core.next(seq33546);
return taoensso.encore.set_exp_backoff_timeout_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__33547,seq33546__$1);
});


if(typeof taoensso.encore._STAR_log_level_STAR_ !== 'undefined'){
} else {
/**
 * DEPRECATED
 */
taoensso.encore._STAR_log_level_STAR_ = cljs.core.cst$kw$debug;
}

taoensso.encore.log_QMARK_ = (function (){var __GT_n = new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$trace,(1),cljs.core.cst$kw$debug,(2),cljs.core.cst$kw$info,(3),cljs.core.cst$kw$warn,(4),cljs.core.cst$kw$error,(5),cljs.core.cst$kw$fatal,(6),cljs.core.cst$kw$report,(7)], null);
return ((function (__GT_n){
return (function (level){
return ((__GT_n.cljs$core$IFn$_invoke$arity$1 ? __GT_n.cljs$core$IFn$_invoke$arity$1(level) : __GT_n.call(null,level)) >= (__GT_n.cljs$core$IFn$_invoke$arity$1 ? __GT_n.cljs$core$IFn$_invoke$arity$1(taoensso.encore._STAR_log_level_STAR_) : __GT_n.call(null,taoensso.encore._STAR_log_level_STAR_)));
});
;})(__GT_n))
})();

taoensso.encore.tracef = (function taoensso$encore$tracef(var_args){
var args__18959__auto__ = [];
var len__18952__auto___33653 = arguments.length;
var i__18953__auto___33654 = (0);
while(true){
if((i__18953__auto___33654 < len__18952__auto___33653)){
args__18959__auto__.push((arguments[i__18953__auto___33654]));

var G__33655 = (i__18953__auto___33654 + (1));
i__18953__auto___33654 = G__33655;
continue;
} else {
}
break;
}

var argseq__18960__auto__ = ((((1) < args__18959__auto__.length))?(new cljs.core.IndexedSeq(args__18959__auto__.slice((1)),(0),null)):null);
return taoensso.encore.tracef.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__18960__auto__);
});

taoensso.encore.tracef.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,xs){
if(cljs.core.truth_((taoensso.encore.log_QMARK_.cljs$core$IFn$_invoke$arity$1 ? taoensso.encore.log_QMARK_.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$trace) : taoensso.encore.log_QMARK_.call(null,cljs.core.cst$kw$trace)))){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(taoensso.encore.logf,fmt,xs);
} else {
return null;
}
});

taoensso.encore.tracef.cljs$lang$maxFixedArity = (1);

taoensso.encore.tracef.cljs$lang$applyTo = (function (seq33552){
var G__33553 = cljs.core.first(seq33552);
var seq33552__$1 = cljs.core.next(seq33552);
return taoensso.encore.tracef.cljs$core$IFn$_invoke$arity$variadic(G__33553,seq33552__$1);
});


taoensso.encore.debugf = (function taoensso$encore$debugf(var_args){
var args__18959__auto__ = [];
var len__18952__auto___33656 = arguments.length;
var i__18953__auto___33657 = (0);
while(true){
if((i__18953__auto___33657 < len__18952__auto___33656)){
args__18959__auto__.push((arguments[i__18953__auto___33657]));

var G__33658 = (i__18953__auto___33657 + (1));
i__18953__auto___33657 = G__33658;
continue;
} else {
}
break;
}

var argseq__18960__auto__ = ((((1) < args__18959__auto__.length))?(new cljs.core.IndexedSeq(args__18959__auto__.slice((1)),(0),null)):null);
return taoensso.encore.debugf.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__18960__auto__);
});

taoensso.encore.debugf.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,xs){
if(cljs.core.truth_((taoensso.encore.log_QMARK_.cljs$core$IFn$_invoke$arity$1 ? taoensso.encore.log_QMARK_.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$debug) : taoensso.encore.log_QMARK_.call(null,cljs.core.cst$kw$debug)))){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(taoensso.encore.logf,fmt,xs);
} else {
return null;
}
});

taoensso.encore.debugf.cljs$lang$maxFixedArity = (1);

taoensso.encore.debugf.cljs$lang$applyTo = (function (seq33554){
var G__33555 = cljs.core.first(seq33554);
var seq33554__$1 = cljs.core.next(seq33554);
return taoensso.encore.debugf.cljs$core$IFn$_invoke$arity$variadic(G__33555,seq33554__$1);
});


taoensso.encore.infof = (function taoensso$encore$infof(var_args){
var args__18959__auto__ = [];
var len__18952__auto___33659 = arguments.length;
var i__18953__auto___33660 = (0);
while(true){
if((i__18953__auto___33660 < len__18952__auto___33659)){
args__18959__auto__.push((arguments[i__18953__auto___33660]));

var G__33661 = (i__18953__auto___33660 + (1));
i__18953__auto___33660 = G__33661;
continue;
} else {
}
break;
}

var argseq__18960__auto__ = ((((1) < args__18959__auto__.length))?(new cljs.core.IndexedSeq(args__18959__auto__.slice((1)),(0),null)):null);
return taoensso.encore.infof.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__18960__auto__);
});

taoensso.encore.infof.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,xs){
if(cljs.core.truth_((taoensso.encore.log_QMARK_.cljs$core$IFn$_invoke$arity$1 ? taoensso.encore.log_QMARK_.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$info) : taoensso.encore.log_QMARK_.call(null,cljs.core.cst$kw$info)))){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(taoensso.encore.logf,fmt,xs);
} else {
return null;
}
});

taoensso.encore.infof.cljs$lang$maxFixedArity = (1);

taoensso.encore.infof.cljs$lang$applyTo = (function (seq33556){
var G__33557 = cljs.core.first(seq33556);
var seq33556__$1 = cljs.core.next(seq33556);
return taoensso.encore.infof.cljs$core$IFn$_invoke$arity$variadic(G__33557,seq33556__$1);
});


taoensso.encore.warnf = (function taoensso$encore$warnf(var_args){
var args__18959__auto__ = [];
var len__18952__auto___33662 = arguments.length;
var i__18953__auto___33663 = (0);
while(true){
if((i__18953__auto___33663 < len__18952__auto___33662)){
args__18959__auto__.push((arguments[i__18953__auto___33663]));

var G__33664 = (i__18953__auto___33663 + (1));
i__18953__auto___33663 = G__33664;
continue;
} else {
}
break;
}

var argseq__18960__auto__ = ((((1) < args__18959__auto__.length))?(new cljs.core.IndexedSeq(args__18959__auto__.slice((1)),(0),null)):null);
return taoensso.encore.warnf.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__18960__auto__);
});

taoensso.encore.warnf.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,xs){
if(cljs.core.truth_((taoensso.encore.log_QMARK_.cljs$core$IFn$_invoke$arity$1 ? taoensso.encore.log_QMARK_.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$warn) : taoensso.encore.log_QMARK_.call(null,cljs.core.cst$kw$warn)))){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(taoensso.encore.logf,[cljs.core.str("WARN: "),cljs.core.str(fmt)].join(''),xs);
} else {
return null;
}
});

taoensso.encore.warnf.cljs$lang$maxFixedArity = (1);

taoensso.encore.warnf.cljs$lang$applyTo = (function (seq33558){
var G__33559 = cljs.core.first(seq33558);
var seq33558__$1 = cljs.core.next(seq33558);
return taoensso.encore.warnf.cljs$core$IFn$_invoke$arity$variadic(G__33559,seq33558__$1);
});


taoensso.encore.errorf = (function taoensso$encore$errorf(var_args){
var args__18959__auto__ = [];
var len__18952__auto___33665 = arguments.length;
var i__18953__auto___33666 = (0);
while(true){
if((i__18953__auto___33666 < len__18952__auto___33665)){
args__18959__auto__.push((arguments[i__18953__auto___33666]));

var G__33667 = (i__18953__auto___33666 + (1));
i__18953__auto___33666 = G__33667;
continue;
} else {
}
break;
}

var argseq__18960__auto__ = ((((1) < args__18959__auto__.length))?(new cljs.core.IndexedSeq(args__18959__auto__.slice((1)),(0),null)):null);
return taoensso.encore.errorf.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__18960__auto__);
});

taoensso.encore.errorf.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,xs){
if(cljs.core.truth_((taoensso.encore.log_QMARK_.cljs$core$IFn$_invoke$arity$1 ? taoensso.encore.log_QMARK_.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$error) : taoensso.encore.log_QMARK_.call(null,cljs.core.cst$kw$error)))){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(taoensso.encore.logf,[cljs.core.str("ERROR: "),cljs.core.str(fmt)].join(''),xs);
} else {
return null;
}
});

taoensso.encore.errorf.cljs$lang$maxFixedArity = (1);

taoensso.encore.errorf.cljs$lang$applyTo = (function (seq33560){
var G__33561 = cljs.core.first(seq33560);
var seq33560__$1 = cljs.core.next(seq33560);
return taoensso.encore.errorf.cljs$core$IFn$_invoke$arity$variadic(G__33561,seq33560__$1);
});


taoensso.encore.fatalf = (function taoensso$encore$fatalf(var_args){
var args__18959__auto__ = [];
var len__18952__auto___33668 = arguments.length;
var i__18953__auto___33669 = (0);
while(true){
if((i__18953__auto___33669 < len__18952__auto___33668)){
args__18959__auto__.push((arguments[i__18953__auto___33669]));

var G__33670 = (i__18953__auto___33669 + (1));
i__18953__auto___33669 = G__33670;
continue;
} else {
}
break;
}

var argseq__18960__auto__ = ((((1) < args__18959__auto__.length))?(new cljs.core.IndexedSeq(args__18959__auto__.slice((1)),(0),null)):null);
return taoensso.encore.fatalf.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__18960__auto__);
});

taoensso.encore.fatalf.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,xs){
if(cljs.core.truth_((taoensso.encore.log_QMARK_.cljs$core$IFn$_invoke$arity$1 ? taoensso.encore.log_QMARK_.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$fatal) : taoensso.encore.log_QMARK_.call(null,cljs.core.cst$kw$fatal)))){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(taoensso.encore.logf,[cljs.core.str("FATAL: "),cljs.core.str(fmt)].join(''),xs);
} else {
return null;
}
});

taoensso.encore.fatalf.cljs$lang$maxFixedArity = (1);

taoensso.encore.fatalf.cljs$lang$applyTo = (function (seq33562){
var G__33563 = cljs.core.first(seq33562);
var seq33562__$1 = cljs.core.next(seq33562);
return taoensso.encore.fatalf.cljs$core$IFn$_invoke$arity$variadic(G__33563,seq33562__$1);
});


taoensso.encore.reportf = (function taoensso$encore$reportf(var_args){
var args__18959__auto__ = [];
var len__18952__auto___33671 = arguments.length;
var i__18953__auto___33672 = (0);
while(true){
if((i__18953__auto___33672 < len__18952__auto___33671)){
args__18959__auto__.push((arguments[i__18953__auto___33672]));

var G__33673 = (i__18953__auto___33672 + (1));
i__18953__auto___33672 = G__33673;
continue;
} else {
}
break;
}

var argseq__18960__auto__ = ((((1) < args__18959__auto__.length))?(new cljs.core.IndexedSeq(args__18959__auto__.slice((1)),(0),null)):null);
return taoensso.encore.reportf.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__18960__auto__);
});

taoensso.encore.reportf.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,xs){
if(cljs.core.truth_((taoensso.encore.log_QMARK_.cljs$core$IFn$_invoke$arity$1 ? taoensso.encore.log_QMARK_.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$report) : taoensso.encore.log_QMARK_.call(null,cljs.core.cst$kw$report)))){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(taoensso.encore.logf,fmt,xs);
} else {
return null;
}
});

taoensso.encore.reportf.cljs$lang$maxFixedArity = (1);

taoensso.encore.reportf.cljs$lang$applyTo = (function (seq33564){
var G__33565 = cljs.core.first(seq33564);
var seq33564__$1 = cljs.core.next(seq33564);
return taoensso.encore.reportf.cljs$core$IFn$_invoke$arity$variadic(G__33565,seq33564__$1);
});


taoensso.encore.greatest = (function taoensso$encore$greatest(var_args){
var args__18959__auto__ = [];
var len__18952__auto___33674 = arguments.length;
var i__18953__auto___33675 = (0);
while(true){
if((i__18953__auto___33675 < len__18952__auto___33674)){
args__18959__auto__.push((arguments[i__18953__auto___33675]));

var G__33676 = (i__18953__auto___33675 + (1));
i__18953__auto___33675 = G__33676;
continue;
} else {
}
break;
}

var argseq__18960__auto__ = ((((1) < args__18959__auto__.length))?(new cljs.core.IndexedSeq(args__18959__auto__.slice((1)),(0),null)):null);
return taoensso.encore.greatest.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__18960__auto__);
});

taoensso.encore.greatest.cljs$core$IFn$_invoke$arity$variadic = (function (coll,p__33568){
var vec__33569 = p__33568;
var _QMARK_comparator = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33569,(0),null);
var comparator = (function (){var or__17769__auto__ = _QMARK_comparator;
if(cljs.core.truth_(or__17769__auto__)){
return or__17769__auto__;
} else {
return taoensso.encore.rcompare;
}
})();
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(((function (comparator,vec__33569,_QMARK_comparator){
return (function (p1__33534_SHARP_,p2__33535_SHARP_){
if(((comparator.cljs$core$IFn$_invoke$arity$2 ? comparator.cljs$core$IFn$_invoke$arity$2(p1__33534_SHARP_,p2__33535_SHARP_) : comparator.call(null,p1__33534_SHARP_,p2__33535_SHARP_)) > (0))){
return p2__33535_SHARP_;
} else {
return p1__33534_SHARP_;
}
});})(comparator,vec__33569,_QMARK_comparator))
,coll);
});

taoensso.encore.greatest.cljs$lang$maxFixedArity = (1);

taoensso.encore.greatest.cljs$lang$applyTo = (function (seq33566){
var G__33567 = cljs.core.first(seq33566);
var seq33566__$1 = cljs.core.next(seq33566);
return taoensso.encore.greatest.cljs$core$IFn$_invoke$arity$variadic(G__33567,seq33566__$1);
});


taoensso.encore.least = (function taoensso$encore$least(var_args){
var args__18959__auto__ = [];
var len__18952__auto___33677 = arguments.length;
var i__18953__auto___33678 = (0);
while(true){
if((i__18953__auto___33678 < len__18952__auto___33677)){
args__18959__auto__.push((arguments[i__18953__auto___33678]));

var G__33679 = (i__18953__auto___33678 + (1));
i__18953__auto___33678 = G__33679;
continue;
} else {
}
break;
}

var argseq__18960__auto__ = ((((1) < args__18959__auto__.length))?(new cljs.core.IndexedSeq(args__18959__auto__.slice((1)),(0),null)):null);
return taoensso.encore.least.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__18960__auto__);
});

taoensso.encore.least.cljs$core$IFn$_invoke$arity$variadic = (function (coll,p__33574){
var vec__33575 = p__33574;
var _QMARK_comparator = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33575,(0),null);
var comparator = (function (){var or__17769__auto__ = _QMARK_comparator;
if(cljs.core.truth_(or__17769__auto__)){
return or__17769__auto__;
} else {
return taoensso.encore.rcompare;
}
})();
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(((function (comparator,vec__33575,_QMARK_comparator){
return (function (p1__33536_SHARP_,p2__33537_SHARP_){
if(((comparator.cljs$core$IFn$_invoke$arity$2 ? comparator.cljs$core$IFn$_invoke$arity$2(p1__33536_SHARP_,p2__33537_SHARP_) : comparator.call(null,p1__33536_SHARP_,p2__33537_SHARP_)) < (0))){
return p2__33537_SHARP_;
} else {
return p1__33536_SHARP_;
}
});})(comparator,vec__33575,_QMARK_comparator))
,coll);
});

taoensso.encore.least.cljs$lang$maxFixedArity = (1);

taoensso.encore.least.cljs$lang$applyTo = (function (seq33572){
var G__33573 = cljs.core.first(seq33572);
var seq33572__$1 = cljs.core.next(seq33572);
return taoensso.encore.least.cljs$core$IFn$_invoke$arity$variadic(G__33573,seq33572__$1);
});



/**
 * Ref. http://goo.gl/0GzRuz
 */
taoensso.encore.clj1098 = (function taoensso$encore$clj1098(x){
var or__17769__auto__ = x;
if(cljs.core.truth_(or__17769__auto__)){
return or__17769__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
});

/**
 * Deprecated, prefer `xdistinct`
 */
taoensso.encore.distinct_by = (function taoensso$encore$distinct_by(keyfn,coll){
var step = (function taoensso$encore$distinct_by_$_step(xs,seen){
return (new cljs.core.LazySeq(null,(function (){
return (function (p__33594,seen__$1){
while(true){
var vec__33595 = p__33594;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33595,(0),null);
var xs__$1 = vec__33595;
var temp__6503__auto__ = cljs.core.seq(xs__$1);
if(temp__6503__auto__){
var s = temp__6503__auto__;
var v_STAR_ = (keyfn.cljs$core$IFn$_invoke$arity$1 ? keyfn.cljs$core$IFn$_invoke$arity$1(v) : keyfn.call(null,v));
if(cljs.core.contains_QMARK_(seen__$1,v_STAR_)){
var G__33680 = cljs.core.rest(s);
var G__33681 = seen__$1;
p__33594 = G__33680;
seen__$1 = G__33681;
continue;
} else {
return cljs.core.cons(v,taoensso$encore$distinct_by_$_step(cljs.core.rest(s),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(seen__$1,v_STAR_)));
}
} else {
return null;
}
break;
}
}).call(null,xs,seen);
}),null,null));
});
return step(coll,cljs.core.PersistentHashSet.EMPTY);
});

/**
 * Deprecated, prefer `xdistinct`
 */
taoensso.encore.distinctv = (function taoensso$encore$distinctv(var_args){
var args33598 = [];
var len__18952__auto___33682 = arguments.length;
var i__18953__auto___33683 = (0);
while(true){
if((i__18953__auto___33683 < len__18952__auto___33682)){
args33598.push((arguments[i__18953__auto___33683]));

var G__33684 = (i__18953__auto___33683 + (1));
i__18953__auto___33683 = G__33684;
continue;
} else {
}
break;
}

var G__33600 = args33598.length;
switch (G__33600) {
case 1:
return taoensso.encore.distinctv.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.distinctv.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33598.length)].join('')));

}
});

taoensso.encore.distinctv.cljs$core$IFn$_invoke$arity$1 = (function (coll){
return taoensso.encore.distinctv.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,coll);
});

taoensso.encore.distinctv.cljs$core$IFn$_invoke$arity$2 = (function (keyfn,coll){
var tr = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__33601,in$){
var vec__33602 = p__33601;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33602,(0),null);
var seen = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33602,(1),null);
var in_STAR_ = (keyfn.cljs$core$IFn$_invoke$arity$1 ? keyfn.cljs$core$IFn$_invoke$arity$1(in$) : keyfn.call(null,in$));
if(cljs.core.contains_QMARK_(seen,in_STAR_)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [v,seen], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(v,in$),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(seen,in_STAR_)], null);
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.transient$(cljs.core.PersistentVector.EMPTY),cljs.core.PersistentHashSet.EMPTY], null),coll);
return cljs.core.persistent_BANG_(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(tr,(0)));
});

taoensso.encore.distinctv.cljs$lang$maxFixedArity = 2;


/**
 * Deprecated, prefer `reduce-kv`
 */
taoensso.encore.map_kvs = (function taoensso$encore$map_kvs(kf,vf,m){
if(cljs.core.truth_(m)){
var vf__$1 = (((vf == null))?(function (_,v){
return v;
}):vf);
var kf__$1 = (((kf == null))?((function (vf__$1){
return (function (k,_){
return k;
});})(vf__$1))
:((taoensso.encore.kw_identical_QMARK_(kf,cljs.core.cst$kw$keywordize))?((function (vf__$1){
return (function (k,_){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(k);
});})(vf__$1))
:kf));
return cljs.core.persistent_BANG_(cljs.core.reduce_kv(((function (vf__$1,kf__$1){
return (function (m__$1,k,v){
return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m__$1,(kf__$1.cljs$core$IFn$_invoke$arity$2 ? kf__$1.cljs$core$IFn$_invoke$arity$2(k,v) : kf__$1.call(null,k,v)),(vf__$1.cljs$core$IFn$_invoke$arity$2 ? vf__$1.cljs$core$IFn$_invoke$arity$2(k,v) : vf__$1.call(null,k,v)));
});})(vf__$1,kf__$1))
,cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY),m));
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
});

/**
 * Deprecated, prefer `reduce-kvs`
 */
taoensso.encore.as_map = (function taoensso$encore$as_map(var_args){
var args__18959__auto__ = [];
var len__18952__auto___33686 = arguments.length;
var i__18953__auto___33687 = (0);
while(true){
if((i__18953__auto___33687 < len__18952__auto___33686)){
args__18959__auto__.push((arguments[i__18953__auto___33687]));

var G__33688 = (i__18953__auto___33687 + (1));
i__18953__auto___33687 = G__33688;
continue;
} else {
}
break;
}

var argseq__18960__auto__ = ((((1) < args__18959__auto__.length))?(new cljs.core.IndexedSeq(args__18959__auto__.slice((1)),(0),null)):null);
return taoensso.encore.as_map.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__18960__auto__);
});

taoensso.encore.as_map.cljs$core$IFn$_invoke$arity$variadic = (function (kvs,p__33607){
var vec__33608 = p__33607;
var kf = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33608,(0),null);
var vf = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33608,(1),null);
if(cljs.core.empty_QMARK_(kvs)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
var vf__$1 = (((vf == null))?((function (vec__33608,kf,vf){
return (function (_,v){
return v;
});})(vec__33608,kf,vf))
:vf);
var kf__$1 = (((kf == null))?((function (vf__$1,vec__33608,kf,vf){
return (function (k,_){
return k;
});})(vf__$1,vec__33608,kf,vf))
:((taoensso.encore.kw_identical_QMARK_(kf,cljs.core.cst$kw$keywordize))?((function (vf__$1,vec__33608,kf,vf){
return (function (k,_){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(k);
});})(vf__$1,vec__33608,kf,vf))
:kf));
return cljs.core.persistent_BANG_(taoensso.encore.reduce_kvs(((function (vf__$1,kf__$1,vec__33608,kf,vf){
return (function (m,k,v){
return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m,(kf__$1.cljs$core$IFn$_invoke$arity$2 ? kf__$1.cljs$core$IFn$_invoke$arity$2(k,v) : kf__$1.call(null,k,v)),(vf__$1.cljs$core$IFn$_invoke$arity$2 ? vf__$1.cljs$core$IFn$_invoke$arity$2(k,v) : vf__$1.call(null,k,v)));
});})(vf__$1,kf__$1,vec__33608,kf,vf))
,cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY),kvs));
}
});

taoensso.encore.as_map.cljs$lang$maxFixedArity = (1);

taoensso.encore.as_map.cljs$lang$applyTo = (function (seq33605){
var G__33606 = cljs.core.first(seq33605);
var seq33605__$1 = cljs.core.next(seq33605);
return taoensso.encore.as_map.cljs$core$IFn$_invoke$arity$variadic(G__33606,seq33605__$1);
});


taoensso.encore.keywordize_map = (function taoensso$encore$keywordize_map(m){
return taoensso.encore.map_keys(cljs.core.keyword,m);
});

taoensso.encore.removev = (function taoensso$encore$removev(pred,coll){
return cljs.core.filterv(cljs.core.complement(pred),coll);
});

taoensso.encore.nvec_QMARK_ = (function taoensso$encore$nvec_QMARK_(n,x){
return (cljs.core.vector_QMARK_(x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(x),n));
});

taoensso.encore.memoized = (function taoensso$encore$memoized(var_args){
var args__18959__auto__ = [];
var len__18952__auto___33689 = arguments.length;
var i__18953__auto___33690 = (0);
while(true){
if((i__18953__auto___33690 < len__18952__auto___33689)){
args__18959__auto__.push((arguments[i__18953__auto___33690]));

var G__33691 = (i__18953__auto___33690 + (1));
i__18953__auto___33690 = G__33691;
continue;
} else {
}
break;
}

var argseq__18960__auto__ = ((((2) < args__18959__auto__.length))?(new cljs.core.IndexedSeq(args__18959__auto__.slice((2)),(0),null)):null);
return taoensso.encore.memoized.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__18960__auto__);
});

taoensso.encore.memoized.cljs$core$IFn$_invoke$arity$variadic = (function (cache,f,args){
if(cljs.core.truth_(cache)){
var G__33614 = taoensso.encore._swap_cache_BANG_(cache,args,(function (_QMARK_dv){
if(cljs.core.truth_(_QMARK_dv)){
return _QMARK_dv;
} else {
return (new cljs.core.Delay((function (){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,args);
}),null));
}
}));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__33614) : cljs.core.deref.call(null,G__33614));
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,args);
}
});

taoensso.encore.memoized.cljs$lang$maxFixedArity = (2);

taoensso.encore.memoized.cljs$lang$applyTo = (function (seq33611){
var G__33612 = cljs.core.first(seq33611);
var seq33611__$1 = cljs.core.next(seq33611);
var G__33613 = cljs.core.first(seq33611__$1);
var seq33611__$2 = cljs.core.next(seq33611__$1);
return taoensso.encore.memoized.cljs$core$IFn$_invoke$arity$variadic(G__33612,G__33613,seq33611__$2);
});


taoensso.encore.translate_signed_idx = (function taoensso$encore$translate_signed_idx(signed_idx,max_idx){
if((signed_idx >= (0))){
var x__18109__auto__ = signed_idx;
var y__18110__auto__ = max_idx;
return ((x__18109__auto__ < y__18110__auto__) ? x__18109__auto__ : y__18110__auto__);
} else {
var x__18102__auto__ = (0);
var y__18103__auto__ = (signed_idx + max_idx);
return ((x__18102__auto__ > y__18103__auto__) ? x__18102__auto__ : y__18103__auto__);
}
});


taoensso.encore.sub_indexes = (function taoensso$encore$sub_indexes(var_args){
var args__18959__auto__ = [];
var len__18952__auto___33692 = arguments.length;
var i__18953__auto___33693 = (0);
while(true){
if((i__18953__auto___33693 < len__18952__auto___33692)){
args__18959__auto__.push((arguments[i__18953__auto___33693]));

var G__33694 = (i__18953__auto___33693 + (1));
i__18953__auto___33693 = G__33694;
continue;
} else {
}
break;
}

var argseq__18960__auto__ = ((((2) < args__18959__auto__.length))?(new cljs.core.IndexedSeq(args__18959__auto__.slice((2)),(0),null)):null);
return taoensso.encore.sub_indexes.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__18960__auto__);
});

taoensso.encore.sub_indexes.cljs$core$IFn$_invoke$arity$variadic = (function (x,start_idx,p__33618){
var map__33619 = p__33618;
var map__33619__$1 = ((((!((map__33619 == null)))?((((map__33619.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33619.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33619):map__33619);
var max_len = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33619__$1,cljs.core.cst$kw$max_DASH_len);
var end_idx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33619__$1,cljs.core.cst$kw$end_DASH_idx);
var start_idx__$1 = start_idx;
var xlen = cljs.core.count(x);
var start_idx_STAR_ = taoensso.encore.translate_signed_idx(start_idx__$1,xlen);
var end_idx_STAR_ = cljs.core.long$((cljs.core.truth_(max_len)?(function (){var n1__9873__auto__ = (start_idx_STAR_ + max_len);
var n2__9874__auto__ = xlen;
if((n1__9873__auto__ > n2__9874__auto__)){
return n2__9874__auto__;
} else {
return n1__9873__auto__;
}
})():(cljs.core.truth_(end_idx)?(taoensso.encore.translate_signed_idx(end_idx,xlen) + (1)):xlen)));
if((start_idx_STAR_ > end_idx_STAR_)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [start_idx_STAR_,end_idx_STAR_], null);
}
});

taoensso.encore.sub_indexes.cljs$lang$maxFixedArity = (2);

taoensso.encore.sub_indexes.cljs$lang$applyTo = (function (seq33615){
var G__33616 = cljs.core.first(seq33615);
var seq33615__$1 = cljs.core.next(seq33615);
var G__33617 = cljs.core.first(seq33615__$1);
var seq33615__$2 = cljs.core.next(seq33615__$1);
return taoensso.encore.sub_indexes.cljs$core$IFn$_invoke$arity$variadic(G__33616,G__33617,seq33615__$2);
});


/**
 * Deprecated, prefer `?substr<idx` or `?substr<len`
 */
taoensso.encore.substr = (function taoensso$encore$substr(var_args){
var args__18959__auto__ = [];
var len__18952__auto___33695 = arguments.length;
var i__18953__auto___33696 = (0);
while(true){
if((i__18953__auto___33696 < len__18952__auto___33695)){
args__18959__auto__.push((arguments[i__18953__auto___33696]));

var G__33697 = (i__18953__auto___33696 + (1));
i__18953__auto___33696 = G__33697;
continue;
} else {
}
break;
}

var argseq__18960__auto__ = ((((2) < args__18959__auto__.length))?(new cljs.core.IndexedSeq(args__18959__auto__.slice((2)),(0),null)):null);
return taoensso.encore.substr.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__18960__auto__);
});

taoensso.encore.substr.cljs$core$IFn$_invoke$arity$variadic = (function (s,start_idx,p__33624){
var vec__33625 = p__33624;
var _QMARK_max_len = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33625,(0),null);
var vec__33628 = taoensso.encore.sub_indexes.cljs$core$IFn$_invoke$arity$variadic(s,start_idx,cljs.core.array_seq([cljs.core.cst$kw$max_DASH_len,_QMARK_max_len], 0));
var start_idx_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33628,(0),null);
var end_idx_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33628,(1),null);
return s.substring(start_idx_STAR_,end_idx_STAR_);
});

taoensso.encore.substr.cljs$lang$maxFixedArity = (2);

taoensso.encore.substr.cljs$lang$applyTo = (function (seq33621){
var G__33622 = cljs.core.first(seq33621);
var seq33621__$1 = cljs.core.next(seq33621);
var G__33623 = cljs.core.first(seq33621__$1);
var seq33621__$2 = cljs.core.next(seq33621__$1);
return taoensso.encore.substr.cljs$core$IFn$_invoke$arity$variadic(G__33622,G__33623,seq33621__$2);
});



/**
 * Deprecated, prefer `?subvec<idx` or `?subvec<len`
 */
taoensso.encore.subvec_STAR_ = (function taoensso$encore$subvec_STAR_(var_args){
var args__18959__auto__ = [];
var len__18952__auto___33698 = arguments.length;
var i__18953__auto___33699 = (0);
while(true){
if((i__18953__auto___33699 < len__18952__auto___33698)){
args__18959__auto__.push((arguments[i__18953__auto___33699]));

var G__33700 = (i__18953__auto___33699 + (1));
i__18953__auto___33699 = G__33700;
continue;
} else {
}
break;
}

var argseq__18960__auto__ = ((((2) < args__18959__auto__.length))?(new cljs.core.IndexedSeq(args__18959__auto__.slice((2)),(0),null)):null);
return taoensso.encore.subvec_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__18960__auto__);
});

taoensso.encore.subvec_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (v,start_idx,p__33634){
var vec__33635 = p__33634;
var _QMARK_max_len = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33635,(0),null);
var vec__33638 = taoensso.encore.sub_indexes.cljs$core$IFn$_invoke$arity$variadic(v,start_idx,cljs.core.array_seq([cljs.core.cst$kw$max_DASH_len,_QMARK_max_len], 0));
var start_idx_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33638,(0),null);
var end_idx_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33638,(1),null);
return cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(v,start_idx_STAR_,end_idx_STAR_);
});

taoensso.encore.subvec_STAR_.cljs$lang$maxFixedArity = (2);

taoensso.encore.subvec_STAR_.cljs$lang$applyTo = (function (seq33631){
var G__33632 = cljs.core.first(seq33631);
var seq33631__$1 = cljs.core.next(seq33631);
var G__33633 = cljs.core.first(seq33631__$1);
var seq33631__$2 = cljs.core.next(seq33631__$1);
return taoensso.encore.subvec_STAR_.cljs$core$IFn$_invoke$arity$variadic(G__33632,G__33633,seq33631__$2);
});


