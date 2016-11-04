// Compiled by ClojureScript 1.9.76 {:static-fns true, :optimize-constants true}
goog.provide('hoplon.core');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('clojure.set');
goog.require('javelin.core');
goog.require('cljs.reader');
goog.require('clojure.string');



cljs.core.enable_console_print_BANG_();
/**
 * Is the application running in a prerendering container (eg. PhantomJS via
 *   the prerender task)?
 */
hoplon.core.prerendering_QMARK_ = (new goog.Uri(window.location.href)).getParameterValue("prerendering");
/**
 * Experimental.
 */
hoplon.core.static_elements = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__24892_SHARP_,p2__24893_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__24892_SHARP_,p2__24893_SHARP_.getAttribute("static-id"),p2__24893_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,jQuery("[static-id]").get());
/**
 * Adds f as a watcher to ref and evaluates (f init @ref) once. The watcher
 *   f is a function of two arguments: the previous and next values. If init is
 *   not provided the default (nil) will be used.
 */
hoplon.core.do_watch = (function hoplon$core$do_watch(var_args){
var args24894 = [];
var len__18952__auto___24899 = arguments.length;
var i__18953__auto___24900 = (0);
while(true){
if((i__18953__auto___24900 < len__18952__auto___24899)){
args24894.push((arguments[i__18953__auto___24900]));

var G__24901 = (i__18953__auto___24900 + (1));
i__18953__auto___24900 = G__24901;
continue;
} else {
}
break;
}

var G__24896 = args24894.length;
switch (G__24896) {
case 2:
return hoplon.core.do_watch.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return hoplon.core.do_watch.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24894.length)].join('')));

}
});

hoplon.core.do_watch.cljs$core$IFn$_invoke$arity$2 = (function (ref,f){
return hoplon.core.do_watch.cljs$core$IFn$_invoke$arity$3(ref,null,f);
});

hoplon.core.do_watch.cljs$core$IFn$_invoke$arity$3 = (function (ref,init,f){
var k = cljs.core.gensym.cljs$core$IFn$_invoke$arity$0();
var G__24897_24903 = init;
var G__24898_24904 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ref) : cljs.core.deref.call(null,ref));
(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__24897_24903,G__24898_24904) : f.call(null,G__24897_24903,G__24898_24904));

cljs.core.add_watch(ref,k,((function (k){
return (function (_,___$1,old,new$){
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(old,new$) : f.call(null,old,new$));
});})(k))
);

return k;
});

hoplon.core.do_watch.cljs$lang$maxFixedArity = 3;

/**
 * Experimental.
 */
hoplon.core.bust_cache = (function hoplon$core$bust_cache(path){
var vec__24911 = cljs.core.reverse(clojure.string.split.cljs$core$IFn$_invoke$arity$2(path,/\//));
var seq__24912 = cljs.core.seq(vec__24911);
var first__24913 = cljs.core.first(seq__24912);
var seq__24912__$1 = cljs.core.next(seq__24912);
var f = first__24913;
var more = seq__24912__$1;
var vec__24914 = clojure.string.split.cljs$core$IFn$_invoke$arity$3(f,/\./,(2));
var f1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24914,(0),null);
var f2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24914,(1),null);
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("/",cljs.core.reverse(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(more,clojure.string.join.cljs$core$IFn$_invoke$arity$2(".",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str(f1),cljs.core.str("."),cljs.core.str("0ace1ce464b54a229c45aaee0fcce9e3")].join(''),f2], null)))));
});
hoplon.core.child_vec = (function hoplon$core$child_vec(this$){
var x = this$.childNodes;
var l = x.length;
var i = (0);
var ret = cljs.core.transient$(cljs.core.PersistentVector.EMPTY);
while(true){
var or__17769__auto__ = (function (){var and__17757__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,l);
if(and__17757__auto__){
return cljs.core.persistent_BANG_(ret);
} else {
return and__17757__auto__;
}
})();
if(cljs.core.truth_(or__17769__auto__)){
return or__17769__auto__;
} else {
var G__24917 = (i + (1));
var G__24918 = cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(ret,x.item(i));
i = G__24917;
ret = G__24918;
continue;
}
break;
}
});
hoplon.core.__GT_node = (function hoplon$core$__GT_node(x){
if(typeof x === 'string'){
return (hoplon.core.$text.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.$text.cljs$core$IFn$_invoke$arity$1(x) : hoplon.core.$text.call(null,x));
} else {
if(typeof x === 'number'){
var G__24920 = [cljs.core.str(x)].join('');
return (hoplon.core.$text.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.$text.cljs$core$IFn$_invoke$arity$1(G__24920) : hoplon.core.$text.call(null,G__24920));
} else {
return x;

}
}
});
hoplon.core.removeChild = Element.prototype.removeChild;
hoplon.core.appendChild = Element.prototype.appendChild;
hoplon.core.insertBefore = Element.prototype.insertBefore;
hoplon.core.replaceChild = Element.prototype.replaceChild;
hoplon.core.setAttribute = Element.prototype.setAttribute;
hoplon.core.merge_kids = (function hoplon$core$merge_kids(this$,old,new$){
var new$__$1 = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.flatten(new$));
var new_QMARK_ = cljs.core.set(new$__$1);
var G__24947 = new$__$1;
var vec__24949 = G__24947;
var seq__24950 = cljs.core.seq(vec__24949);
var first__24951 = cljs.core.first(seq__24950);
var seq__24950__$1 = cljs.core.next(seq__24950);
var x = first__24951;
var xs = seq__24950__$1;
var G__24948 = hoplon.core.child_vec(this$);
var vec__24952 = G__24948;
var seq__24953 = cljs.core.seq(vec__24952);
var first__24954 = cljs.core.first(seq__24953);
var seq__24953__$1 = cljs.core.next(seq__24953);
var k = first__24954;
var ks = seq__24953__$1;
var kids = vec__24952;
var G__24947__$1 = G__24947;
var G__24948__$1 = G__24948;
while(true){
var vec__24955 = G__24947__$1;
var seq__24956 = cljs.core.seq(vec__24955);
var first__24957 = cljs.core.first(seq__24956);
var seq__24956__$1 = cljs.core.next(seq__24956);
var x__$1 = first__24957;
var xs__$1 = seq__24956__$1;
var vec__24958 = G__24948__$1;
var seq__24959 = cljs.core.seq(vec__24958);
var first__24960 = cljs.core.first(seq__24959);
var seq__24959__$1 = cljs.core.next(seq__24959);
var k__$1 = first__24960;
var ks__$1 = seq__24959__$1;
var kids__$1 = vec__24958;
if(cljs.core.truth_((function (){var or__17769__auto__ = x__$1;
if(cljs.core.truth_(or__17769__auto__)){
return or__17769__auto__;
} else {
return k__$1;
}
})())){
var G__24961 = xs__$1;
var G__24962 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x__$1,k__$1))?ks__$1:((cljs.core.not(k__$1))?(function (){var ks__$2 = ks__$1;
hoplon.core.appendChild.call(this$,hoplon.core.__GT_node(x__$1));

return ks__$2;
})():((cljs.core.not(x__$1))?(function (){var ks__$2 = ks__$1;
if(cljs.core.truth_((new_QMARK_.cljs$core$IFn$_invoke$arity$1 ? new_QMARK_.cljs$core$IFn$_invoke$arity$1(k__$1) : new_QMARK_.call(null,k__$1)))){
} else {
hoplon.core.removeChild.call(this$,hoplon.core.__GT_node(k__$1));
}

return ks__$2;
})():(function (){var kids__$2 = kids__$1;
hoplon.core.insertBefore.call(this$,hoplon.core.__GT_node(x__$1),hoplon.core.__GT_node(k__$1));

return kids__$2;
})()
)));
G__24947__$1 = G__24961;
G__24948__$1 = G__24962;
continue;
} else {
return null;
}
break;
}
});
hoplon.core.ensure_kids_BANG_ = (function hoplon$core$ensure_kids_BANG_(this$){
var this$__$1 = this$;
if(cljs.core.truth_(this$__$1.hoplonKids)){
} else {
var kids_24965 = (function (){var G__24964 = hoplon.core.child_vec(this$__$1);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__24964) : cljs.core.atom.call(null,G__24964));
})();
this$__$1.hoplonKids = kids_24965;

hoplon.core.do_watch.cljs$core$IFn$_invoke$arity$2(kids_24965,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(hoplon.core.merge_kids,this$__$1));
}

return this$__$1;
});
hoplon.core.set_appendChild_BANG_ = (function hoplon$core$set_appendChild_BANG_(this$,kidfn){
return this$.appendChild = (function (x){
var this$__$1 = this;
var x__$1 = x;
hoplon.core.ensure_kids_BANG_(this$__$1);

var kids_24968 = (kidfn.cljs$core$IFn$_invoke$arity$1 ? kidfn.cljs$core$IFn$_invoke$arity$1(this$__$1) : kidfn.call(null,this$__$1));
var i_24969 = cljs.core.count((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(kids_24968) : cljs.core.deref.call(null,kids_24968)));
if(cljs.core.truth_(javelin.core.cell_QMARK_(x__$1))){
hoplon.core.do_watch.cljs$core$IFn$_invoke$arity$2(x__$1,((function (kids_24968,i_24969,x__$1,this$__$1){
return (function (p1__24967_SHARP_,p2__24966_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(kids_24968,cljs.core.assoc,i_24969,p2__24966_SHARP_);
});})(kids_24968,i_24969,x__$1,this$__$1))
);
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(kids_24968,cljs.core.assoc,i_24969,x__$1);
}

return x__$1;
});
});
hoplon.core.set_removeChild_BANG_ = (function hoplon$core$set_removeChild_BANG_(this$,kidfn){
return this$.removeChild = (function (x){
var this$__$1 = this;
var x__$1 = x;
hoplon.core.ensure_kids_BANG_(this$__$1);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2((kidfn.cljs$core$IFn$_invoke$arity$1 ? kidfn.cljs$core$IFn$_invoke$arity$1(this$__$1) : kidfn.call(null,this$__$1)),((function (x__$1,this$__$1){
return (function (p1__24970_SHARP_){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,x__$1),p1__24970_SHARP_));
});})(x__$1,this$__$1))
);

return x__$1;
});
});
hoplon.core.set_insertBefore_BANG_ = (function hoplon$core$set_insertBefore_BANG_(this$,kidfn){
return this$.insertBefore = (function (x,y){
var this$__$1 = this;
var x__$1 = x;
hoplon.core.ensure_kids_BANG_(this$__$1);

if(cljs.core.not(y)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3((kidfn.cljs$core$IFn$_invoke$arity$1 ? kidfn.cljs$core$IFn$_invoke$arity$1(this$__$1) : kidfn.call(null,this$__$1)),cljs.core.conj,x__$1);
} else {
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(x__$1,y)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2((kidfn.cljs$core$IFn$_invoke$arity$1 ? kidfn.cljs$core$IFn$_invoke$arity$1(this$__$1) : kidfn.call(null,this$__$1)),((function (x__$1,this$__$1){
return (function (p1__24971_SHARP_){
return cljs.core.vec(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(((function (x__$1,this$__$1){
return (function (z){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(z,y)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x__$1,z], null);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [z], null);
}
});})(x__$1,this$__$1))
,cljs.core.array_seq([p1__24971_SHARP_], 0)));
});})(x__$1,this$__$1))
);
} else {
}
}

return x__$1;
});
});
hoplon.core.set_replaceChild_BANG_ = (function hoplon$core$set_replaceChild_BANG_(this$,kidfn){
return this$.replaceChild = (function (x,y){
var this$__$1 = this;
var y__$1 = y;
hoplon.core.ensure_kids_BANG_(this$__$1);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2((kidfn.cljs$core$IFn$_invoke$arity$1 ? kidfn.cljs$core$IFn$_invoke$arity$1(this$__$1) : kidfn.call(null,this$__$1)),((function (y__$1,this$__$1){
return (function (p1__24972_SHARP_){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (y__$1,this$__$1){
return (function (z){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(z,y__$1)){
return x;
} else {
return z;
}
});})(y__$1,this$__$1))
,p1__24972_SHARP_);
});})(y__$1,this$__$1))
);

return y__$1;
});
});
hoplon.core.set_setAttribute_BANG_ = (function hoplon$core$set_setAttribute_BANG_(this$,attrfn){
return this$.setAttribute = (function (k,v){
var this$__$1 = this;
var _ = undefined;
var kk_24973 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(k);
var attr_24974 = (attrfn.cljs$core$IFn$_invoke$arity$1 ? attrfn.cljs$core$IFn$_invoke$arity$1(this$__$1) : attrfn.call(null,this$__$1));
var has_QMARK__24975 = (function (){var and__17757__auto__ = attr_24974;
if(cljs.core.truth_(and__17757__auto__)){
return cljs.core.contains_QMARK_((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(attr_24974) : cljs.core.deref.call(null,attr_24974)),kk_24973);
} else {
return and__17757__auto__;
}
})();
if(cljs.core.truth_(has_QMARK__24975)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(attr_24974,cljs.core.assoc,kk_24973,v);
} else {
hoplon.core.setAttribute.call(this$__$1,k,v);
}

return _;
});
});
hoplon.core.set_appendChild_BANG_(Element.prototype,(function (p1__24976_SHARP_){
return p1__24976_SHARP_.hoplonKids;
}));
hoplon.core.set_removeChild_BANG_(Element.prototype,(function (p1__24977_SHARP_){
return p1__24977_SHARP_.hoplonKids;
}));
hoplon.core.set_insertBefore_BANG_(Element.prototype,(function (p1__24978_SHARP_){
return p1__24978_SHARP_.hoplonKids;
}));
hoplon.core.set_replaceChild_BANG_(Element.prototype,(function (p1__24979_SHARP_){
return p1__24979_SHARP_.hoplonKids;
}));

/**
 * @interface
 */
hoplon.core.ICustomElement = function(){};

hoplon.core._set_attributes_BANG_ = (function hoplon$core$_set_attributes_BANG_(this$,kvs){
if((!((this$ == null))) && (!((this$.hoplon$core$ICustomElement$_set_attributes_BANG_$arity$2 == null)))){
return this$.hoplon$core$ICustomElement$_set_attributes_BANG_$arity$2(this$,kvs);
} else {
var x__18482__auto__ = (((this$ == null))?null:this$);
var m__18483__auto__ = (hoplon.core._set_attributes_BANG_[goog.typeOf(x__18482__auto__)]);
if(!((m__18483__auto__ == null))){
return (m__18483__auto__.cljs$core$IFn$_invoke$arity$2 ? m__18483__auto__.cljs$core$IFn$_invoke$arity$2(this$,kvs) : m__18483__auto__.call(null,this$,kvs));
} else {
var m__18483__auto____$1 = (hoplon.core._set_attributes_BANG_["_"]);
if(!((m__18483__auto____$1 == null))){
return (m__18483__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__18483__auto____$1.cljs$core$IFn$_invoke$arity$2(this$,kvs) : m__18483__auto____$1.call(null,this$,kvs));
} else {
throw cljs.core.missing_protocol("ICustomElement.-set-attributes!",this$);
}
}
}
});

hoplon.core._set_styles_BANG_ = (function hoplon$core$_set_styles_BANG_(this$,kvs){
if((!((this$ == null))) && (!((this$.hoplon$core$ICustomElement$_set_styles_BANG_$arity$2 == null)))){
return this$.hoplon$core$ICustomElement$_set_styles_BANG_$arity$2(this$,kvs);
} else {
var x__18482__auto__ = (((this$ == null))?null:this$);
var m__18483__auto__ = (hoplon.core._set_styles_BANG_[goog.typeOf(x__18482__auto__)]);
if(!((m__18483__auto__ == null))){
return (m__18483__auto__.cljs$core$IFn$_invoke$arity$2 ? m__18483__auto__.cljs$core$IFn$_invoke$arity$2(this$,kvs) : m__18483__auto__.call(null,this$,kvs));
} else {
var m__18483__auto____$1 = (hoplon.core._set_styles_BANG_["_"]);
if(!((m__18483__auto____$1 == null))){
return (m__18483__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__18483__auto____$1.cljs$core$IFn$_invoke$arity$2(this$,kvs) : m__18483__auto____$1.call(null,this$,kvs));
} else {
throw cljs.core.missing_protocol("ICustomElement.-set-styles!",this$);
}
}
}
});

hoplon.core._append_child_BANG_ = (function hoplon$core$_append_child_BANG_(this$,child){
if((!((this$ == null))) && (!((this$.hoplon$core$ICustomElement$_append_child_BANG_$arity$2 == null)))){
return this$.hoplon$core$ICustomElement$_append_child_BANG_$arity$2(this$,child);
} else {
var x__18482__auto__ = (((this$ == null))?null:this$);
var m__18483__auto__ = (hoplon.core._append_child_BANG_[goog.typeOf(x__18482__auto__)]);
if(!((m__18483__auto__ == null))){
return (m__18483__auto__.cljs$core$IFn$_invoke$arity$2 ? m__18483__auto__.cljs$core$IFn$_invoke$arity$2(this$,child) : m__18483__auto__.call(null,this$,child));
} else {
var m__18483__auto____$1 = (hoplon.core._append_child_BANG_["_"]);
if(!((m__18483__auto____$1 == null))){
return (m__18483__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__18483__auto____$1.cljs$core$IFn$_invoke$arity$2(this$,child) : m__18483__auto____$1.call(null,this$,child));
} else {
throw cljs.core.missing_protocol("ICustomElement.-append-child!",this$);
}
}
}
});

hoplon.core._remove_child_BANG_ = (function hoplon$core$_remove_child_BANG_(this$,child){
if((!((this$ == null))) && (!((this$.hoplon$core$ICustomElement$_remove_child_BANG_$arity$2 == null)))){
return this$.hoplon$core$ICustomElement$_remove_child_BANG_$arity$2(this$,child);
} else {
var x__18482__auto__ = (((this$ == null))?null:this$);
var m__18483__auto__ = (hoplon.core._remove_child_BANG_[goog.typeOf(x__18482__auto__)]);
if(!((m__18483__auto__ == null))){
return (m__18483__auto__.cljs$core$IFn$_invoke$arity$2 ? m__18483__auto__.cljs$core$IFn$_invoke$arity$2(this$,child) : m__18483__auto__.call(null,this$,child));
} else {
var m__18483__auto____$1 = (hoplon.core._remove_child_BANG_["_"]);
if(!((m__18483__auto____$1 == null))){
return (m__18483__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__18483__auto____$1.cljs$core$IFn$_invoke$arity$2(this$,child) : m__18483__auto____$1.call(null,this$,child));
} else {
throw cljs.core.missing_protocol("ICustomElement.-remove-child!",this$);
}
}
}
});

hoplon.core._replace_child_BANG_ = (function hoplon$core$_replace_child_BANG_(this$,new$,existing){
if((!((this$ == null))) && (!((this$.hoplon$core$ICustomElement$_replace_child_BANG_$arity$3 == null)))){
return this$.hoplon$core$ICustomElement$_replace_child_BANG_$arity$3(this$,new$,existing);
} else {
var x__18482__auto__ = (((this$ == null))?null:this$);
var m__18483__auto__ = (hoplon.core._replace_child_BANG_[goog.typeOf(x__18482__auto__)]);
if(!((m__18483__auto__ == null))){
return (m__18483__auto__.cljs$core$IFn$_invoke$arity$3 ? m__18483__auto__.cljs$core$IFn$_invoke$arity$3(this$,new$,existing) : m__18483__auto__.call(null,this$,new$,existing));
} else {
var m__18483__auto____$1 = (hoplon.core._replace_child_BANG_["_"]);
if(!((m__18483__auto____$1 == null))){
return (m__18483__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__18483__auto____$1.cljs$core$IFn$_invoke$arity$3(this$,new$,existing) : m__18483__auto____$1.call(null,this$,new$,existing));
} else {
throw cljs.core.missing_protocol("ICustomElement.-replace-child!",this$);
}
}
}
});

hoplon.core._insert_before_BANG_ = (function hoplon$core$_insert_before_BANG_(this$,new$,existing){
if((!((this$ == null))) && (!((this$.hoplon$core$ICustomElement$_insert_before_BANG_$arity$3 == null)))){
return this$.hoplon$core$ICustomElement$_insert_before_BANG_$arity$3(this$,new$,existing);
} else {
var x__18482__auto__ = (((this$ == null))?null:this$);
var m__18483__auto__ = (hoplon.core._insert_before_BANG_[goog.typeOf(x__18482__auto__)]);
if(!((m__18483__auto__ == null))){
return (m__18483__auto__.cljs$core$IFn$_invoke$arity$3 ? m__18483__auto__.cljs$core$IFn$_invoke$arity$3(this$,new$,existing) : m__18483__auto__.call(null,this$,new$,existing));
} else {
var m__18483__auto____$1 = (hoplon.core._insert_before_BANG_["_"]);
if(!((m__18483__auto____$1 == null))){
return (m__18483__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__18483__auto____$1.cljs$core$IFn$_invoke$arity$3(this$,new$,existing) : m__18483__auto____$1.call(null,this$,new$,existing));
} else {
throw cljs.core.missing_protocol("ICustomElement.-insert-before!",this$);
}
}
}
});

hoplon.core.set_attributes_BANG_ = (function hoplon$core$set_attributes_BANG_(var_args){
var args24980 = [];
var len__18952__auto___24987 = arguments.length;
var i__18953__auto___24988 = (0);
while(true){
if((i__18953__auto___24988 < len__18952__auto___24987)){
args24980.push((arguments[i__18953__auto___24988]));

var G__24989 = (i__18953__auto___24988 + (1));
i__18953__auto___24988 = G__24989;
continue;
} else {
}
break;
}

var G__24986 = args24980.length;
switch (G__24986) {
case 2:
return hoplon.core.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__18975__auto__ = (new cljs.core.IndexedSeq(args24980.slice((3)),(0),null));
return hoplon.core.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__18975__auto__);

}
});

hoplon.core.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (this$,kvs){
return hoplon.core._set_attributes_BANG_(this$,kvs);
});

hoplon.core.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (this$,k,v,kvs){
return hoplon.core.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$2(this$,cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.hash_map,k,v,kvs));
});

hoplon.core.set_attributes_BANG_.cljs$lang$applyTo = (function (seq24981){
var G__24982 = cljs.core.first(seq24981);
var seq24981__$1 = cljs.core.next(seq24981);
var G__24983 = cljs.core.first(seq24981__$1);
var seq24981__$2 = cljs.core.next(seq24981__$1);
var G__24984 = cljs.core.first(seq24981__$2);
var seq24981__$3 = cljs.core.next(seq24981__$2);
return hoplon.core.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__24982,G__24983,G__24984,seq24981__$3);
});

hoplon.core.set_attributes_BANG_.cljs$lang$maxFixedArity = (3);

hoplon.core.set_styles_BANG_ = (function hoplon$core$set_styles_BANG_(var_args){
var args24991 = [];
var len__18952__auto___24998 = arguments.length;
var i__18953__auto___24999 = (0);
while(true){
if((i__18953__auto___24999 < len__18952__auto___24998)){
args24991.push((arguments[i__18953__auto___24999]));

var G__25000 = (i__18953__auto___24999 + (1));
i__18953__auto___24999 = G__25000;
continue;
} else {
}
break;
}

var G__24997 = args24991.length;
switch (G__24997) {
case 2:
return hoplon.core.set_styles_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__18975__auto__ = (new cljs.core.IndexedSeq(args24991.slice((3)),(0),null));
return hoplon.core.set_styles_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__18975__auto__);

}
});

hoplon.core.set_styles_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (this$,kvs){
return hoplon.core._set_styles_BANG_(this$,kvs);
});

hoplon.core.set_styles_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (this$,k,v,kvs){
return hoplon.core.set_styles_BANG_.cljs$core$IFn$_invoke$arity$2(this$,cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.hash_map,k,v,kvs));
});

hoplon.core.set_styles_BANG_.cljs$lang$applyTo = (function (seq24992){
var G__24993 = cljs.core.first(seq24992);
var seq24992__$1 = cljs.core.next(seq24992);
var G__24994 = cljs.core.first(seq24992__$1);
var seq24992__$2 = cljs.core.next(seq24992__$1);
var G__24995 = cljs.core.first(seq24992__$2);
var seq24992__$3 = cljs.core.next(seq24992__$2);
return hoplon.core.set_styles_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__24993,G__24994,G__24995,seq24992__$3);
});

hoplon.core.set_styles_BANG_.cljs$lang$maxFixedArity = (3);

hoplon.core.append_child_BANG_ = (function hoplon$core$append_child_BANG_(this$,child){
return hoplon.core._append_child_BANG_(this$,child);
});
hoplon.core.remove_child_BANG_ = (function hoplon$core$remove_child_BANG_(this$,child){
return hoplon.core._remove_child_BANG_(this$,child);
});
hoplon.core.replace_child_BANG_ = (function hoplon$core$replace_child_BANG_(this$,new$,existing){
return hoplon.core._replace_child_BANG_(this$,new$,existing);
});
hoplon.core.insert_before_BANG_ = (function hoplon$core$insert_before_BANG_(this$,new$,existing){
return hoplon.core._insert_before_BANG_(this$,new$,existing);
});
hoplon.core.is_ie8 = cljs.core.not((window["Node"]));
hoplon.core.node_QMARK_ = ((cljs.core.not(hoplon.core.is_ie8))?(function (p1__25002_SHARP_){
return (p1__25002_SHARP_ instanceof Node);
}):(function (p1__25003_SHARP_){
try{return p1__25003_SHARP_.nodeType;
}catch (e25004){if((e25004 instanceof Error)){
var _ = e25004;
return null;
} else {
throw e25004;

}
}}));
hoplon.core.vector_QMARK__STAR_ = ((cljs.core.not(hoplon.core.is_ie8))?cljs.core.vector_QMARK_:(function (p1__25005_SHARP_){
try{return cljs.core.vector_QMARK_(p1__25005_SHARP_);
}catch (e25006){if((e25006 instanceof Error)){
var _ = e25006;
return null;
} else {
throw e25006;

}
}}));
hoplon.core.seq_QMARK__STAR_ = ((cljs.core.not(hoplon.core.is_ie8))?cljs.core.seq_QMARK_:(function (p1__25007_SHARP_){
try{return cljs.core.seq_QMARK_(p1__25007_SHARP_);
}catch (e25008){if((e25008 instanceof Error)){
var _ = e25008;
return null;
} else {
throw e25008;

}
}}));
hoplon.core.safe_nth = (function hoplon$core$safe_nth(var_args){
var args25009 = [];
var len__18952__auto___25013 = arguments.length;
var i__18953__auto___25014 = (0);
while(true){
if((i__18953__auto___25014 < len__18952__auto___25013)){
args25009.push((arguments[i__18953__auto___25014]));

var G__25015 = (i__18953__auto___25014 + (1));
i__18953__auto___25014 = G__25015;
continue;
} else {
}
break;
}

var G__25011 = args25009.length;
switch (G__25011) {
case 2:
return hoplon.core.safe_nth.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return hoplon.core.safe_nth.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25009.length)].join('')));

}
});

hoplon.core.safe_nth.cljs$core$IFn$_invoke$arity$2 = (function (coll,index){
return hoplon.core.safe_nth.cljs$core$IFn$_invoke$arity$3(coll,index,null);
});

hoplon.core.safe_nth.cljs$core$IFn$_invoke$arity$3 = (function (coll,index,not_found){
try{return cljs.core.nth.cljs$core$IFn$_invoke$arity$3(coll,index,not_found);
}catch (e25012){if((e25012 instanceof Error)){
var _ = e25012;
return not_found;
} else {
throw e25012;

}
}});

hoplon.core.safe_nth.cljs$lang$maxFixedArity = 3;

hoplon.core.timeout = (function hoplon$core$timeout(var_args){
var args25017 = [];
var len__18952__auto___25020 = arguments.length;
var i__18953__auto___25021 = (0);
while(true){
if((i__18953__auto___25021 < len__18952__auto___25020)){
args25017.push((arguments[i__18953__auto___25021]));

var G__25022 = (i__18953__auto___25021 + (1));
i__18953__auto___25021 = G__25022;
continue;
} else {
}
break;
}

var G__25019 = args25017.length;
switch (G__25019) {
case 1:
return hoplon.core.timeout.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return hoplon.core.timeout.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25017.length)].join('')));

}
});

hoplon.core.timeout.cljs$core$IFn$_invoke$arity$1 = (function (f){
return hoplon.core.timeout.cljs$core$IFn$_invoke$arity$2(f,(0));
});

hoplon.core.timeout.cljs$core$IFn$_invoke$arity$2 = (function (f,t){
return window.setTimeout(f,t);
});

hoplon.core.timeout.cljs$lang$maxFixedArity = 2;

hoplon.core.when_dom = (function hoplon$core$when_dom(this$,f){
if(!((this$ instanceof Element))){
return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
} else {
return hoplon.core.timeout.cljs$core$IFn$_invoke$arity$1((function hoplon$core$when_dom_$_doit(){
if(cljs.core.truth_(document.documentElement.contains(this$))){
return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
} else {
return hoplon.core.timeout.cljs$core$IFn$_invoke$arity$2(hoplon$core$when_dom_$_doit,(20));
}
}));
}
});
hoplon.core.parse_args = (function hoplon$core$parse_args(args){
var attr = cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY);
var kids = cljs.core.transient$(cljs.core.PersistentVector.EMPTY);
var G__25040 = args;
var vec__25041 = G__25040;
var seq__25042 = cljs.core.seq(vec__25041);
var first__25043 = cljs.core.first(seq__25042);
var seq__25042__$1 = cljs.core.next(seq__25042);
var arg = first__25043;
var args__$1 = seq__25042__$1;
var attr__$1 = attr;
var kids__$1 = kids;
var G__25040__$1 = G__25040;
while(true){
var attr__$2 = attr__$1;
var kids__$2 = kids__$1;
var vec__25044 = G__25040__$1;
var seq__25045 = cljs.core.seq(vec__25044);
var first__25046 = cljs.core.first(seq__25045);
var seq__25045__$1 = cljs.core.next(seq__25045);
var arg__$1 = first__25046;
var args__$2 = seq__25045__$1;
if(cljs.core.not(arg__$1)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.persistent_BANG_(attr__$2),cljs.core.persistent_BANG_(kids__$2)], null);
} else {
if(cljs.core.map_QMARK_(arg__$1)){
var G__25047 = cljs.core.reduce_kv(((function (attr__$1,kids__$1,G__25040__$1,attr__$2,kids__$2,vec__25044,seq__25045,first__25046,seq__25045__$1,arg__$1,args__$2,attr,kids,G__25040,vec__25041,seq__25042,first__25043,seq__25042__$1,arg,args__$1){
return (function (p1__25024_SHARP_,p2__25025_SHARP_,p3__25026_SHARP_){
return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(p1__25024_SHARP_,p2__25025_SHARP_,p3__25026_SHARP_);
});})(attr__$1,kids__$1,G__25040__$1,attr__$2,kids__$2,vec__25044,seq__25045,first__25046,seq__25045__$1,arg__$1,args__$2,attr,kids,G__25040,vec__25041,seq__25042,first__25043,seq__25042__$1,arg,args__$1))
,attr__$2,arg__$1);
var G__25048 = kids__$2;
var G__25049 = args__$2;
attr__$1 = G__25047;
kids__$1 = G__25048;
G__25040__$1 = G__25049;
continue;
} else {
if((arg__$1 instanceof cljs.core.Keyword)){
var G__25050 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(attr__$2,arg__$1,cljs.core.first(args__$2));
var G__25051 = kids__$2;
var G__25052 = cljs.core.rest(args__$2);
attr__$1 = G__25050;
kids__$1 = G__25051;
G__25040__$1 = G__25052;
continue;
} else {
if(cljs.core.truth_((hoplon.core.seq_QMARK__STAR_.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.seq_QMARK__STAR_.cljs$core$IFn$_invoke$arity$1(arg__$1) : hoplon.core.seq_QMARK__STAR_.call(null,arg__$1)))){
var G__25053 = attr__$2;
var G__25054 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj_BANG_,kids__$2,cljs.core.flatten(arg__$1));
var G__25055 = args__$2;
attr__$1 = G__25053;
kids__$1 = G__25054;
G__25040__$1 = G__25055;
continue;
} else {
if(cljs.core.truth_((hoplon.core.vector_QMARK__STAR_.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.vector_QMARK__STAR_.cljs$core$IFn$_invoke$arity$1(arg__$1) : hoplon.core.vector_QMARK__STAR_.call(null,arg__$1)))){
var G__25056 = attr__$2;
var G__25057 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj_BANG_,kids__$2,cljs.core.flatten(arg__$1));
var G__25058 = args__$2;
attr__$1 = G__25056;
kids__$1 = G__25057;
G__25040__$1 = G__25058;
continue;
} else {
var G__25059 = attr__$2;
var G__25060 = cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(kids__$2,arg__$1);
var G__25061 = args__$2;
attr__$1 = G__25059;
kids__$1 = G__25060;
G__25040__$1 = G__25061;
continue;

}
}
}
}
}
break;
}
});
hoplon.core.add_attributes_BANG_ = (function hoplon$core$add_attributes_BANG_(this$,attr){
var this$__$1 = this$;
cljs.core.reduce_kv(((function (this$__$1){
return (function (this$__$2,k,v){
var this$__$3 = this$__$2;
if(cljs.core.truth_(javelin.core.cell_QMARK_(v))){
hoplon.core.do_watch.cljs$core$IFn$_invoke$arity$2(v,((function (this$__$3,this$__$1){
return (function (p1__25063_SHARP_,p2__25062_SHARP_){
return (hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3(this$__$3,k,p2__25062_SHARP_) : hoplon.core.do_BANG_.call(null,this$__$3,k,p2__25062_SHARP_));
});})(this$__$3,this$__$1))
);
} else {
if(cljs.core.fn_QMARK_(v)){
(hoplon.core.on_BANG_.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.on_BANG_.cljs$core$IFn$_invoke$arity$3(this$__$3,k,v) : hoplon.core.on_BANG_.call(null,this$__$3,k,v));
} else {
(hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3(this$__$3,k,v) : hoplon.core.do_BANG_.call(null,this$__$3,k,v));

}
}

return this$__$3;
});})(this$__$1))
,this$__$1,attr);

return this$__$1;
});
hoplon.core.add_children_BANG_ = (function hoplon$core$add_children_BANG_(this$,p__25064){
var vec__25072 = p__25064;
var seq__25073 = cljs.core.seq(vec__25072);
var first__25074 = cljs.core.first(seq__25073);
var seq__25073__$1 = cljs.core.next(seq__25073);
var child_cell = first__25074;
var _ = seq__25073__$1;
var kids = vec__25072;
var this$__$1 = this$;
var seq__25075_25079 = cljs.core.seq(cljs.core.flatten(kids));
var chunk__25076_25080 = null;
var count__25077_25081 = (0);
var i__25078_25082 = (0);
while(true){
if((i__25078_25082 < count__25077_25081)){
var x_25083 = chunk__25076_25080.cljs$core$IIndexed$_nth$arity$2(null,i__25078_25082);
var temp__6503__auto___25084 = hoplon.core.__GT_node(x_25083);
if(cljs.core.truth_(temp__6503__auto___25084)){
var x_25085__$1 = temp__6503__auto___25084;
hoplon.core.append_child_BANG_(this$__$1,x_25085__$1);
} else {
}

var G__25086 = seq__25075_25079;
var G__25087 = chunk__25076_25080;
var G__25088 = count__25077_25081;
var G__25089 = (i__25078_25082 + (1));
seq__25075_25079 = G__25086;
chunk__25076_25080 = G__25087;
count__25077_25081 = G__25088;
i__25078_25082 = G__25089;
continue;
} else {
var temp__6503__auto___25090 = cljs.core.seq(seq__25075_25079);
if(temp__6503__auto___25090){
var seq__25075_25091__$1 = temp__6503__auto___25090;
if(cljs.core.chunked_seq_QMARK_(seq__25075_25091__$1)){
var c__18672__auto___25092 = cljs.core.chunk_first(seq__25075_25091__$1);
var G__25093 = cljs.core.chunk_rest(seq__25075_25091__$1);
var G__25094 = c__18672__auto___25092;
var G__25095 = cljs.core.count(c__18672__auto___25092);
var G__25096 = (0);
seq__25075_25079 = G__25093;
chunk__25076_25080 = G__25094;
count__25077_25081 = G__25095;
i__25078_25082 = G__25096;
continue;
} else {
var x_25097 = cljs.core.first(seq__25075_25091__$1);
var temp__6503__auto___25098__$1 = hoplon.core.__GT_node(x_25097);
if(cljs.core.truth_(temp__6503__auto___25098__$1)){
var x_25099__$1 = temp__6503__auto___25098__$1;
hoplon.core.append_child_BANG_(this$__$1,x_25099__$1);
} else {
}

var G__25100 = cljs.core.next(seq__25075_25091__$1);
var G__25101 = null;
var G__25102 = (0);
var G__25103 = (0);
seq__25075_25079 = G__25100;
chunk__25076_25080 = G__25101;
count__25077_25081 = G__25102;
i__25078_25082 = G__25103;
continue;
}
} else {
}
}
break;
}

return this$__$1;
});
Element.prototype.cljs$core$IPrintWithWriter$ = true;

Element.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this$,writer,opts){
var this$__$1 = this;
return cljs.core.write_all.cljs$core$IFn$_invoke$arity$variadic(writer,cljs.core.array_seq(["#<Element: ",this$__$1.tagName,">"], 0));
});

Element.prototype.cljs$core$IFn$ = true;

Element.prototype.call = (function() { 
var G__25136__delegate = function (self__,args){
var self____$1 = this;
var this$ = self____$1;
var vec__25105 = hoplon.core.parse_args(args);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25105,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25105,(1),null);
var G__25108 = this$;
hoplon.core.add_attributes_BANG_(G__25108,attr);

hoplon.core.add_children_BANG_(G__25108,kids);

return G__25108;
};
var G__25136 = function (self__,var_args){
var args = null;
if (arguments.length > 1) {
var G__25137__i = 0, G__25137__a = new Array(arguments.length -  1);
while (G__25137__i < G__25137__a.length) {G__25137__a[G__25137__i] = arguments[G__25137__i + 1]; ++G__25137__i;}
  args = new cljs.core.IndexedSeq(G__25137__a,0);
} 
return G__25136__delegate.call(this,self__,args);};
G__25136.cljs$lang$maxFixedArity = 1;
G__25136.cljs$lang$applyTo = (function (arglist__25138){
var self__ = cljs.core.first(arglist__25138);
var args = cljs.core.rest(arglist__25138);
return G__25136__delegate(self__,args);
});
G__25136.cljs$core$IFn$_invoke$arity$variadic = G__25136__delegate;
return G__25136;
})()
;

Element.prototype.apply = (function (self__,args25104){
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args25104)));
});

Element.prototype.cljs$core$IFn$_invoke$arity$2 = (function() { 
var G__25139__delegate = function (args){
var this$ = this;
var vec__25109 = hoplon.core.parse_args(args);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25109,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25109,(1),null);
var G__25112 = this$;
hoplon.core.add_attributes_BANG_(G__25112,attr);

hoplon.core.add_children_BANG_(G__25112,kids);

return G__25112;
};
var G__25139 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__25140__i = 0, G__25140__a = new Array(arguments.length -  0);
while (G__25140__i < G__25140__a.length) {G__25140__a[G__25140__i] = arguments[G__25140__i + 0]; ++G__25140__i;}
  args = new cljs.core.IndexedSeq(G__25140__a,0);
} 
return G__25139__delegate.call(this,args);};
G__25139.cljs$lang$maxFixedArity = 0;
G__25139.cljs$lang$applyTo = (function (arglist__25141){
var args = cljs.core.seq(arglist__25141);
return G__25139__delegate(args);
});
G__25139.cljs$core$IFn$_invoke$arity$variadic = G__25139__delegate;
return G__25139;
})()
;

Element.prototype.hoplon$core$ICustomElement$ = true;

Element.prototype.hoplon$core$ICustomElement$_set_attributes_BANG_$arity$2 = (function (this$,kvs){
var this$__$1 = this;
var e = jQuery(this$__$1);
var seq__25113 = cljs.core.seq(kvs);
var chunk__25115 = null;
var count__25116 = (0);
var i__25117 = (0);
while(true){
if((i__25117 < count__25116)){
var vec__25119 = chunk__25115.cljs$core$IIndexed$_nth$arity$2(null,i__25117);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25119,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25119,(1),null);
var k_25142__$1 = cljs.core.name(k);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(false,v)){
e.removeAttr(k_25142__$1);
} else {
e.attr(k_25142__$1,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(true,v))?k_25142__$1:v));
}

var G__25143 = seq__25113;
var G__25144 = chunk__25115;
var G__25145 = count__25116;
var G__25146 = (i__25117 + (1));
seq__25113 = G__25143;
chunk__25115 = G__25144;
count__25116 = G__25145;
i__25117 = G__25146;
continue;
} else {
var temp__6503__auto__ = cljs.core.seq(seq__25113);
if(temp__6503__auto__){
var seq__25113__$1 = temp__6503__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__25113__$1)){
var c__18672__auto__ = cljs.core.chunk_first(seq__25113__$1);
var G__25147 = cljs.core.chunk_rest(seq__25113__$1);
var G__25148 = c__18672__auto__;
var G__25149 = cljs.core.count(c__18672__auto__);
var G__25150 = (0);
seq__25113 = G__25147;
chunk__25115 = G__25148;
count__25116 = G__25149;
i__25117 = G__25150;
continue;
} else {
var vec__25122 = cljs.core.first(seq__25113__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25122,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25122,(1),null);
var k_25151__$1 = cljs.core.name(k);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(false,v)){
e.removeAttr(k_25151__$1);
} else {
e.attr(k_25151__$1,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(true,v))?k_25151__$1:v));
}

var G__25152 = cljs.core.next(seq__25113__$1);
var G__25153 = null;
var G__25154 = (0);
var G__25155 = (0);
seq__25113 = G__25152;
chunk__25115 = G__25153;
count__25116 = G__25154;
i__25117 = G__25155;
continue;
}
} else {
return null;
}
}
break;
}
});

Element.prototype.hoplon$core$ICustomElement$_set_styles_BANG_$arity$2 = (function (this$,kvs){
var this$__$1 = this;
var e = jQuery(this$__$1);
var seq__25125 = cljs.core.seq(kvs);
var chunk__25126 = null;
var count__25127 = (0);
var i__25128 = (0);
while(true){
if((i__25128 < count__25127)){
var vec__25129 = chunk__25126.cljs$core$IIndexed$_nth$arity$2(null,i__25128);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25129,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25129,(1),null);
e.css(cljs.core.name(k),[cljs.core.str(v)].join(''));

var G__25156 = seq__25125;
var G__25157 = chunk__25126;
var G__25158 = count__25127;
var G__25159 = (i__25128 + (1));
seq__25125 = G__25156;
chunk__25126 = G__25157;
count__25127 = G__25158;
i__25128 = G__25159;
continue;
} else {
var temp__6503__auto__ = cljs.core.seq(seq__25125);
if(temp__6503__auto__){
var seq__25125__$1 = temp__6503__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__25125__$1)){
var c__18672__auto__ = cljs.core.chunk_first(seq__25125__$1);
var G__25160 = cljs.core.chunk_rest(seq__25125__$1);
var G__25161 = c__18672__auto__;
var G__25162 = cljs.core.count(c__18672__auto__);
var G__25163 = (0);
seq__25125 = G__25160;
chunk__25126 = G__25161;
count__25127 = G__25162;
i__25128 = G__25163;
continue;
} else {
var vec__25132 = cljs.core.first(seq__25125__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25132,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25132,(1),null);
e.css(cljs.core.name(k),[cljs.core.str(v)].join(''));

var G__25164 = cljs.core.next(seq__25125__$1);
var G__25165 = null;
var G__25166 = (0);
var G__25167 = (0);
seq__25125 = G__25164;
chunk__25126 = G__25165;
count__25127 = G__25166;
i__25128 = G__25167;
continue;
}
} else {
return null;
}
}
break;
}
});

Element.prototype.hoplon$core$ICustomElement$_append_child_BANG_$arity$2 = (function (this$,child){
var this$__$1 = this;
if(cljs.core.not(hoplon.core.is_ie8)){
return this$__$1.appendChild(child);
} else {
try{return this$__$1.appendChild(child);
}catch (e25135){if((e25135 instanceof Error)){
var _ = e25135;
return null;
} else {
throw e25135;

}
}}
});

Element.prototype.hoplon$core$ICustomElement$_remove_child_BANG_$arity$2 = (function (this$,child){
var this$__$1 = this;
return this$__$1.removeChild(child);
});

Element.prototype.hoplon$core$ICustomElement$_replace_child_BANG_$arity$3 = (function (this$,new$,existing){
var this$__$1 = this;
return this$__$1.replaceChild(new$,existing);
});

Element.prototype.hoplon$core$ICustomElement$_insert_before_BANG_$arity$3 = (function (this$,new$,existing){
var this$__$1 = this;
return this$__$1.insertBefore(new$,existing);
});
hoplon.core.make_singleton_ctor = (function hoplon$core$make_singleton_ctor(tag){
return (function() { 
var G__25174__delegate = function (args){
var vec__25171 = hoplon.core.parse_args(args);
var attrs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25171,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25171,(1),null);
var elem = (document.getElementsByTagName(tag)[(0)]);
hoplon.core.add_attributes_BANG_(elem,attrs);

if(cljs.core.not(cljs.core.cst$kw$static.cljs$core$IFn$_invoke$arity$1(attrs))){
elem.hoplonKids = null;

elem.innerHTML = "";

return hoplon.core.add_children_BANG_(elem,kids);
} else {
return null;
}
};
var G__25174 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__25175__i = 0, G__25175__a = new Array(arguments.length -  0);
while (G__25175__i < G__25175__a.length) {G__25175__a[G__25175__i] = arguments[G__25175__i + 0]; ++G__25175__i;}
  args = new cljs.core.IndexedSeq(G__25175__a,0);
} 
return G__25174__delegate.call(this,args);};
G__25174.cljs$lang$maxFixedArity = 0;
G__25174.cljs$lang$applyTo = (function (arglist__25176){
var args = cljs.core.seq(arglist__25176);
return G__25174__delegate(args);
});
G__25174.cljs$core$IFn$_invoke$arity$variadic = G__25174__delegate;
return G__25174;
})()
;
});
hoplon.core.make_elem_ctor = (function hoplon$core$make_elem_ctor(tag){
return (function() { 
var G__25177__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(hoplon.core.ensure_kids_BANG_(document.createElement(tag)),args);
};
var G__25177 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__25178__i = 0, G__25178__a = new Array(arguments.length -  0);
while (G__25178__i < G__25178__a.length) {G__25178__a[G__25178__i] = arguments[G__25178__i + 0]; ++G__25178__i;}
  args = new cljs.core.IndexedSeq(G__25178__a,0);
} 
return G__25177__delegate.call(this,args);};
G__25177.cljs$lang$maxFixedArity = 0;
G__25177.cljs$lang$applyTo = (function (arglist__25179){
var args = cljs.core.seq(arglist__25179);
return G__25177__delegate(args);
});
G__25177.cljs$core$IFn$_invoke$arity$variadic = G__25177__delegate;
return G__25177;
})()
;
});
hoplon.core.html = (function hoplon$core$html(var_args){
var args__18959__auto__ = [];
var len__18952__auto___25184 = arguments.length;
var i__18953__auto___25185 = (0);
while(true){
if((i__18953__auto___25185 < len__18952__auto___25184)){
args__18959__auto__.push((arguments[i__18953__auto___25185]));

var G__25186 = (i__18953__auto___25185 + (1));
i__18953__auto___25185 = G__25186;
continue;
} else {
}
break;
}

var argseq__18960__auto__ = ((((0) < args__18959__auto__.length))?(new cljs.core.IndexedSeq(args__18959__auto__.slice((0)),(0),null)):null);
return hoplon.core.html.cljs$core$IFn$_invoke$arity$variadic(argseq__18960__auto__);
});

hoplon.core.html.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var vec__25181 = hoplon.core.parse_args(args);
var attrs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25181,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25181,(1),null);
return hoplon.core.add_attributes_BANG_((document.getElementsByTagName("html")[(0)]),attrs);
});

hoplon.core.html.cljs$lang$maxFixedArity = (0);

hoplon.core.html.cljs$lang$applyTo = (function (seq25180){
return hoplon.core.html.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq25180));
});

hoplon.core.body = hoplon.core.make_singleton_ctor("body");
hoplon.core.head = hoplon.core.make_singleton_ctor("head");
hoplon.core.a = hoplon.core.make_elem_ctor("a");
hoplon.core.abbr = hoplon.core.make_elem_ctor("abbr");
hoplon.core.acronym = hoplon.core.make_elem_ctor("acronym");
hoplon.core.address = hoplon.core.make_elem_ctor("address");
hoplon.core.applet = hoplon.core.make_elem_ctor("applet");
hoplon.core.area = hoplon.core.make_elem_ctor("area");
hoplon.core.article = hoplon.core.make_elem_ctor("article");
hoplon.core.aside = hoplon.core.make_elem_ctor("aside");
hoplon.core.audio = hoplon.core.make_elem_ctor("audio");
hoplon.core.b = hoplon.core.make_elem_ctor("b");
hoplon.core.base = hoplon.core.make_elem_ctor("base");
hoplon.core.basefont = hoplon.core.make_elem_ctor("basefont");
hoplon.core.bdi = hoplon.core.make_elem_ctor("bdi");
hoplon.core.bdo = hoplon.core.make_elem_ctor("bdo");
hoplon.core.big = hoplon.core.make_elem_ctor("big");
hoplon.core.blockquote = hoplon.core.make_elem_ctor("blockquote");
hoplon.core.br = hoplon.core.make_elem_ctor("br");
hoplon.core.button = hoplon.core.make_elem_ctor("button");
hoplon.core.canvas = hoplon.core.make_elem_ctor("canvas");
hoplon.core.caption = hoplon.core.make_elem_ctor("caption");
hoplon.core.center = hoplon.core.make_elem_ctor("center");
hoplon.core.cite = hoplon.core.make_elem_ctor("cite");
hoplon.core.code = hoplon.core.make_elem_ctor("code");
hoplon.core.col = hoplon.core.make_elem_ctor("col");
hoplon.core.colgroup = hoplon.core.make_elem_ctor("colgroup");
hoplon.core.command = hoplon.core.make_elem_ctor("command");
hoplon.core.data = hoplon.core.make_elem_ctor("data");
hoplon.core.datalist = hoplon.core.make_elem_ctor("datalist");
hoplon.core.dd = hoplon.core.make_elem_ctor("dd");
hoplon.core.del = hoplon.core.make_elem_ctor("del");
hoplon.core.details = hoplon.core.make_elem_ctor("details");
hoplon.core.dfn = hoplon.core.make_elem_ctor("dfn");
hoplon.core.dialog = hoplon.core.make_elem_ctor("dialog");
hoplon.core.dir = hoplon.core.make_elem_ctor("dir");
hoplon.core.div = hoplon.core.make_elem_ctor("div");
hoplon.core.dl = hoplon.core.make_elem_ctor("dl");
hoplon.core.dt = hoplon.core.make_elem_ctor("dt");
hoplon.core.em = hoplon.core.make_elem_ctor("em");
hoplon.core.embed = hoplon.core.make_elem_ctor("embed");
hoplon.core.eventsource = hoplon.core.make_elem_ctor("eventsource");
hoplon.core.fieldset = hoplon.core.make_elem_ctor("fieldset");
hoplon.core.figcaption = hoplon.core.make_elem_ctor("figcaption");
hoplon.core.figure = hoplon.core.make_elem_ctor("figure");
hoplon.core.font = hoplon.core.make_elem_ctor("font");
hoplon.core.footer = hoplon.core.make_elem_ctor("footer");
hoplon.core.form = hoplon.core.make_elem_ctor("form");
hoplon.core.frame = hoplon.core.make_elem_ctor("frame");
hoplon.core.frameset = hoplon.core.make_elem_ctor("frameset");
hoplon.core.h1 = hoplon.core.make_elem_ctor("h1");
hoplon.core.h2 = hoplon.core.make_elem_ctor("h2");
hoplon.core.h3 = hoplon.core.make_elem_ctor("h3");
hoplon.core.h4 = hoplon.core.make_elem_ctor("h4");
hoplon.core.h5 = hoplon.core.make_elem_ctor("h5");
hoplon.core.h6 = hoplon.core.make_elem_ctor("h6");
hoplon.core.header = hoplon.core.make_elem_ctor("header");
hoplon.core.hgroup = hoplon.core.make_elem_ctor("hgroup");
hoplon.core.hr = hoplon.core.make_elem_ctor("hr");
hoplon.core.i = hoplon.core.make_elem_ctor("i");
hoplon.core.iframe = hoplon.core.make_elem_ctor("iframe");
hoplon.core.img = hoplon.core.make_elem_ctor("img");
hoplon.core.input = hoplon.core.make_elem_ctor("input");
hoplon.core.ins = hoplon.core.make_elem_ctor("ins");
hoplon.core.isindex = hoplon.core.make_elem_ctor("isindex");
hoplon.core.kbd = hoplon.core.make_elem_ctor("kbd");
hoplon.core.keygen = hoplon.core.make_elem_ctor("keygen");
hoplon.core.label = hoplon.core.make_elem_ctor("label");
hoplon.core.legend = hoplon.core.make_elem_ctor("legend");
hoplon.core.li = hoplon.core.make_elem_ctor("li");
hoplon.core.link = hoplon.core.make_elem_ctor("link");
hoplon.core.main = hoplon.core.make_elem_ctor("main");
hoplon.core.html_map = hoplon.core.make_elem_ctor("map");
hoplon.core.mark = hoplon.core.make_elem_ctor("mark");
hoplon.core.menu = hoplon.core.make_elem_ctor("menu");
hoplon.core.menuitem = hoplon.core.make_elem_ctor("menuitem");
hoplon.core.html_meta = hoplon.core.make_elem_ctor("meta");
hoplon.core.meter = hoplon.core.make_elem_ctor("meter");
hoplon.core.nav = hoplon.core.make_elem_ctor("nav");
hoplon.core.noframes = hoplon.core.make_elem_ctor("noframes");
hoplon.core.noscript = hoplon.core.make_elem_ctor("noscript");
hoplon.core.object = hoplon.core.make_elem_ctor("object");
hoplon.core.ol = hoplon.core.make_elem_ctor("ol");
hoplon.core.optgroup = hoplon.core.make_elem_ctor("optgroup");
hoplon.core.option = hoplon.core.make_elem_ctor("option");
hoplon.core.output = hoplon.core.make_elem_ctor("output");
hoplon.core.p = hoplon.core.make_elem_ctor("p");
hoplon.core.param = hoplon.core.make_elem_ctor("param");
hoplon.core.pre = hoplon.core.make_elem_ctor("pre");
hoplon.core.progress = hoplon.core.make_elem_ctor("progress");
hoplon.core.q = hoplon.core.make_elem_ctor("q");
hoplon.core.rp = hoplon.core.make_elem_ctor("rp");
hoplon.core.rt = hoplon.core.make_elem_ctor("rt");
hoplon.core.rtc = hoplon.core.make_elem_ctor("rtc");
hoplon.core.ruby = hoplon.core.make_elem_ctor("ruby");
hoplon.core.s = hoplon.core.make_elem_ctor("s");
hoplon.core.samp = hoplon.core.make_elem_ctor("samp");
hoplon.core.script = hoplon.core.make_elem_ctor("script");
hoplon.core.section = hoplon.core.make_elem_ctor("section");
hoplon.core.select = hoplon.core.make_elem_ctor("select");
hoplon.core.small = hoplon.core.make_elem_ctor("small");
hoplon.core.source = hoplon.core.make_elem_ctor("source");
hoplon.core.span = hoplon.core.make_elem_ctor("span");
hoplon.core.strike = hoplon.core.make_elem_ctor("strike");
hoplon.core.strong = hoplon.core.make_elem_ctor("strong");
hoplon.core.style = hoplon.core.make_elem_ctor("style");
hoplon.core.sub = hoplon.core.make_elem_ctor("sub");
hoplon.core.summary = hoplon.core.make_elem_ctor("summary");
hoplon.core.sup = hoplon.core.make_elem_ctor("sup");
hoplon.core.table = hoplon.core.make_elem_ctor("table");
hoplon.core.tbody = hoplon.core.make_elem_ctor("tbody");
hoplon.core.td = hoplon.core.make_elem_ctor("td");
hoplon.core.textarea = hoplon.core.make_elem_ctor("textarea");
hoplon.core.tfoot = hoplon.core.make_elem_ctor("tfoot");
hoplon.core.th = hoplon.core.make_elem_ctor("th");
hoplon.core.thead = hoplon.core.make_elem_ctor("thead");
hoplon.core.html_time = hoplon.core.make_elem_ctor("time");
hoplon.core.title = hoplon.core.make_elem_ctor("title");
hoplon.core.tr = hoplon.core.make_elem_ctor("tr");
hoplon.core.track = hoplon.core.make_elem_ctor("track");
hoplon.core.tt = hoplon.core.make_elem_ctor("tt");
hoplon.core.u = hoplon.core.make_elem_ctor("u");
hoplon.core.ul = hoplon.core.make_elem_ctor("ul");
hoplon.core.html_var = hoplon.core.make_elem_ctor("var");
hoplon.core.video = hoplon.core.make_elem_ctor("video");
hoplon.core.wbr = hoplon.core.make_elem_ctor("wbr");
hoplon.core.spliced = cljs.core.vector;
hoplon.core.$text = (function hoplon$core$$text(p1__25187_SHARP_){
return document.createTextNode(p1__25187_SHARP_);
});
hoplon.core.$comment = (function hoplon$core$$comment(p1__25188_SHARP_){
return document.createComment(p1__25188_SHARP_);
});
hoplon.core._LT__BANG___ = hoplon.core.$comment;
hoplon.core.___GT_ = cljs.core.cst$kw$hoplon$core_SLASH__DASH__DASH__GT_;
hoplon.core.add_initfn_BANG_ = (function hoplon$core$add_initfn_BANG_(f){
var G__25196 = (function (){
var G__25197 = (function (){
return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
});
var G__25198 = (0);
return setTimeout(G__25197,G__25198);
});
return jQuery(G__25196);
});
hoplon.core.page_load = (function hoplon$core$page_load(){
return jQuery(document).trigger("page-load");
});
hoplon.core.on_page_load = (function hoplon$core$on_page_load(f){
return jQuery(document).on("page-load",f);
});
hoplon.core.add_initfn_BANG_((function (){
return jQuery("body").on("submit",(function (p1__25199_SHARP_){
var e = (function (){var G__25200 = p1__25199_SHARP_.target;
return jQuery(G__25200);
})();
if(cljs.core.truth_((function (){var or__17769__auto__ = e.attr("action");
if(cljs.core.truth_(or__17769__auto__)){
return or__17769__auto__;
} else {
return e.attr("method");
}
})())){
return null;
} else {
return p1__25199_SHARP_.preventDefault();
}
}));
}));
hoplon.core.text_val_BANG_ = (function hoplon$core$text_val_BANG_(var_args){
var args25201 = [];
var len__18952__auto___25204 = arguments.length;
var i__18953__auto___25205 = (0);
while(true){
if((i__18953__auto___25205 < len__18952__auto___25204)){
args25201.push((arguments[i__18953__auto___25205]));

var G__25206 = (i__18953__auto___25205 + (1));
i__18953__auto___25205 = G__25206;
continue;
} else {
}
break;
}

var G__25203 = args25201.length;
switch (G__25203) {
case 1:
return hoplon.core.text_val_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return hoplon.core.text_val_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25201.length)].join('')));

}
});

hoplon.core.text_val_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (e){
return e.val();
});

hoplon.core.text_val_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (e,v){
var v__$1 = [cljs.core.str(v)].join('');
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(v__$1,hoplon.core.text_val_BANG_.cljs$core$IFn$_invoke$arity$1(e))){
return e.val(v__$1);
} else {
return null;
}
});

hoplon.core.text_val_BANG_.cljs$lang$maxFixedArity = 2;

hoplon.core.check_val_BANG_ = (function hoplon$core$check_val_BANG_(var_args){
var args25208 = [];
var len__18952__auto___25211 = arguments.length;
var i__18953__auto___25212 = (0);
while(true){
if((i__18953__auto___25212 < len__18952__auto___25211)){
args25208.push((arguments[i__18953__auto___25212]));

var G__25213 = (i__18953__auto___25212 + (1));
i__18953__auto___25212 = G__25213;
continue;
} else {
}
break;
}

var G__25210 = args25208.length;
switch (G__25210) {
case 1:
return hoplon.core.check_val_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return hoplon.core.check_val_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25208.length)].join('')));

}
});

hoplon.core.check_val_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (e){
return e.is(":checked");
});

hoplon.core.check_val_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (e,v){
return e.prop("checked",cljs.core.boolean$(v));
});

hoplon.core.check_val_BANG_.cljs$lang$maxFixedArity = 2;

if(typeof hoplon.core.do_BANG_ !== 'undefined'){
} else {
hoplon.core.do_BANG_ = (function (){var method_table__18792__auto__ = (function (){var G__25215 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__25215) : cljs.core.atom.call(null,G__25215));
})();
var prefer_table__18793__auto__ = (function (){var G__25216 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__25216) : cljs.core.atom.call(null,G__25216));
})();
var method_cache__18794__auto__ = (function (){var G__25217 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__25217) : cljs.core.atom.call(null,G__25217));
})();
var cached_hierarchy__18795__auto__ = (function (){var G__25218 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__25218) : cljs.core.atom.call(null,G__25218));
})();
var hierarchy__18796__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$default,cljs.core.cst$kw$hoplon$core_SLASH_default], null),cljs.core.cst$kw$hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("hoplon.core","do!"),((function (method_table__18792__auto__,prefer_table__18793__auto__,method_cache__18794__auto__,cached_hierarchy__18795__auto__,hierarchy__18796__auto__){
return (function (elem,key,val){
var temp__6501__auto__ = cljs.core.namespace(key);
if(cljs.core.truth_(temp__6501__auto__)){
var n = temp__6501__auto__;
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$2(n,"*");
} else {
return key;
}
});})(method_table__18792__auto__,prefer_table__18793__auto__,method_cache__18794__auto__,cached_hierarchy__18795__auto__,hierarchy__18796__auto__))
,cljs.core.cst$kw$hoplon$core_SLASH_default,hierarchy__18796__auto__,method_table__18792__auto__,prefer_table__18793__auto__,method_cache__18794__auto__,cached_hierarchy__18795__auto__));
})();
}
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$hoplon$core_SLASH_default,(function (elem,key,val){
var G__25219 = elem;
var G__25220 = cljs.core.cst$kw$attr;
var G__25221 = cljs.core.PersistentArrayMap.fromArray([key,val], true, false);
return (hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3(G__25219,G__25220,G__25221) : hoplon.core.do_BANG_.call(null,G__25219,G__25220,G__25221));
}));
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$css_SLASH__STAR_,(function (elem,key,val){
return hoplon.core.set_styles_BANG_(elem,key,val);
}));
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$html_SLASH__STAR_,(function (elem,key,val){
return hoplon.core.set_attributes_BANG_(elem,key,val);
}));
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$svg_SLASH__STAR_,(function (elem,key,val){
return hoplon.core.set_attributes_BANG_(elem,key,val);
}));
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$value,(function() { 
var G__25222__delegate = function (elem,_,args){
var e = jQuery(elem);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("checkbox",e.attr("type")))?hoplon.core.check_val_BANG_:hoplon.core.text_val_BANG_),e,args);
};
var G__25222 = function (elem,_,var_args){
var args = null;
if (arguments.length > 2) {
var G__25223__i = 0, G__25223__a = new Array(arguments.length -  2);
while (G__25223__i < G__25223__a.length) {G__25223__a[G__25223__i] = arguments[G__25223__i + 2]; ++G__25223__i;}
  args = new cljs.core.IndexedSeq(G__25223__a,0);
} 
return G__25222__delegate.call(this,elem,_,args);};
G__25222.cljs$lang$maxFixedArity = 2;
G__25222.cljs$lang$applyTo = (function (arglist__25224){
var elem = cljs.core.first(arglist__25224);
arglist__25224 = cljs.core.next(arglist__25224);
var _ = cljs.core.first(arglist__25224);
var args = cljs.core.rest(arglist__25224);
return G__25222__delegate(elem,_,args);
});
G__25222.cljs$core$IFn$_invoke$arity$variadic = G__25222__delegate;
return G__25222;
})()
);
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$attr,(function (elem,_,kvs){
return hoplon.core.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$2(elem,kvs);
}));
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$class,(function (elem,_,kvs){
var elem__$1 = jQuery(elem);
var __GT_map = ((function (elem__$1){
return (function (p1__25225_SHARP_){
return cljs.core.zipmap(p1__25225_SHARP_,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(true));
});})(elem__$1))
;
var clmap = ((cljs.core.map_QMARK_(kvs))?kvs:__GT_map(((typeof kvs === 'string')?kvs.split(/\s+/):cljs.core.seq(kvs))));
var seq__25226 = cljs.core.seq(clmap);
var chunk__25227 = null;
var count__25228 = (0);
var i__25229 = (0);
while(true){
if((i__25229 < count__25228)){
var vec__25230 = chunk__25227.cljs$core$IIndexed$_nth$arity$2(null,i__25229);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25230,(0),null);
var p_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25230,(1),null);
elem__$1.toggleClass(cljs.core.name(c),cljs.core.boolean$(p_QMARK_));

var G__25236 = seq__25226;
var G__25237 = chunk__25227;
var G__25238 = count__25228;
var G__25239 = (i__25229 + (1));
seq__25226 = G__25236;
chunk__25227 = G__25237;
count__25228 = G__25238;
i__25229 = G__25239;
continue;
} else {
var temp__6503__auto__ = cljs.core.seq(seq__25226);
if(temp__6503__auto__){
var seq__25226__$1 = temp__6503__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__25226__$1)){
var c__18672__auto__ = cljs.core.chunk_first(seq__25226__$1);
var G__25240 = cljs.core.chunk_rest(seq__25226__$1);
var G__25241 = c__18672__auto__;
var G__25242 = cljs.core.count(c__18672__auto__);
var G__25243 = (0);
seq__25226 = G__25240;
chunk__25227 = G__25241;
count__25228 = G__25242;
i__25229 = G__25243;
continue;
} else {
var vec__25233 = cljs.core.first(seq__25226__$1);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25233,(0),null);
var p_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25233,(1),null);
elem__$1.toggleClass(cljs.core.name(c),cljs.core.boolean$(p_QMARK_));

var G__25244 = cljs.core.next(seq__25226__$1);
var G__25245 = null;
var G__25246 = (0);
var G__25247 = (0);
seq__25226 = G__25244;
chunk__25227 = G__25245;
count__25228 = G__25246;
i__25229 = G__25247;
continue;
}
} else {
return null;
}
}
break;
}
}));
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$css,(function (elem,_,kvs){
return hoplon.core.set_styles_BANG_.cljs$core$IFn$_invoke$arity$2(elem,kvs);
}));
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$toggle,(function (elem,_,v){
return jQuery(elem).toggle(cljs.core.boolean$(v));
}));
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$slide_DASH_toggle,(function (elem,_,v){
if(cljs.core.truth_(v)){
return jQuery(elem).hide().slideDown("fast");
} else {
return jQuery(elem).slideUp("fast");
}
}));
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$fade_DASH_toggle,(function (elem,_,v){
if(cljs.core.truth_(v)){
return jQuery(elem).hide().fadeIn("fast");
} else {
return jQuery(elem).fadeOut("fast");
}
}));
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$focus,(function (elem,_,v){
var G__25248 = (function (){
if(cljs.core.truth_(v)){
return jQuery(elem).focus();
} else {
return jQuery(elem).focusout();
}
});
var G__25249 = (0);
return setTimeout(G__25248,G__25249);
}));
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$select,(function (elem,_,___$1){
return jQuery(elem).select();
}));
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$focus_DASH_select,(function (elem,_,v){
if(cljs.core.truth_(v)){
(hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3(elem,cljs.core.cst$kw$focus,v) : hoplon.core.do_BANG_.call(null,elem,cljs.core.cst$kw$focus,v));

return (hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3(elem,cljs.core.cst$kw$select,v) : hoplon.core.do_BANG_.call(null,elem,cljs.core.cst$kw$select,v));
} else {
return null;
}
}));
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$text,(function (elem,_,v){
return jQuery(elem).text([cljs.core.str(v)].join(''));
}));
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$html,(function (elem,_,v){
return jQuery(elem).html(v);
}));
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$scroll_DASH_to,(function (elem,_,v){
if(cljs.core.truth_(v)){
var body = jQuery("body,html");
var elem__$1 = jQuery(elem);
return body.animate(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$scrollTop,elem__$1.offset().top], null)));
} else {
return null;
}
}));
if(typeof hoplon.core.on_BANG_ !== 'undefined'){
} else {
hoplon.core.on_BANG_ = (function (){var method_table__18792__auto__ = (function (){var G__25250 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__25250) : cljs.core.atom.call(null,G__25250));
})();
var prefer_table__18793__auto__ = (function (){var G__25251 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__25251) : cljs.core.atom.call(null,G__25251));
})();
var method_cache__18794__auto__ = (function (){var G__25252 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__25252) : cljs.core.atom.call(null,G__25252));
})();
var cached_hierarchy__18795__auto__ = (function (){var G__25253 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__25253) : cljs.core.atom.call(null,G__25253));
})();
var hierarchy__18796__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$default,cljs.core.cst$kw$hoplon$core_SLASH_default], null),cljs.core.cst$kw$hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("hoplon.core","on!"),((function (method_table__18792__auto__,prefer_table__18793__auto__,method_cache__18794__auto__,cached_hierarchy__18795__auto__,hierarchy__18796__auto__){
return (function (elem,key,val){
var temp__6501__auto__ = cljs.core.namespace(key);
if(cljs.core.truth_(temp__6501__auto__)){
var n = temp__6501__auto__;
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$2(n,"*");
} else {
return key;
}
});})(method_table__18792__auto__,prefer_table__18793__auto__,method_cache__18794__auto__,cached_hierarchy__18795__auto__,hierarchy__18796__auto__))
,cljs.core.cst$kw$hoplon$core_SLASH_default,hierarchy__18796__auto__,method_table__18792__auto__,prefer_table__18793__auto__,method_cache__18794__auto__,cached_hierarchy__18795__auto__));
})();
}
jQuery.Event.prototype.cljs$core$IDeref$ = true;

jQuery.Event.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var this$__$1 = this;
return (function (){var G__25254 = this$__$1.target;
return jQuery(G__25254);
})().val();
});
hoplon.core.on_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$hoplon$core_SLASH_default,(function (elem,event,callback){
return hoplon.core.when_dom(elem,(function (){
return jQuery(elem).on(cljs.core.name(event),callback);
}));
}));
hoplon.core.on_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$html_SLASH__STAR_,(function (elem,event,callback){
return hoplon.core.when_dom(elem,(function (){
return jQuery(elem).on(cljs.core.name(event),callback);
}));
}));
/**
 * Given a cell items containing a seqable collection, constructs a cell that
 *   works like a fill vector. The template tpl is a function of one argument: the
 *   formula cell containing the ith item in items. The tpl function is called
 *   once (and only once) for each index in items. When the items collection
 *   shrinks the DOM element created by the template is not destroyed--it is only
 *   removed from the DOM and cached. When the items collection grows again those
 *   cached elements will be reinserted into the DOM at their original index.
 */
hoplon.core.loop_tpl_STAR_ = (function hoplon$core$loop_tpl_STAR_(items,tpl){
var on_deck = (function (){var G__25269 = cljs.core.List.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__25269) : cljs.core.atom.call(null,G__25269));
})();
var items_seq = javelin.core.formula(((function (on_deck){
return (function (G__25270,G__25271){
return (G__25270.cljs$core$IFn$_invoke$arity$1 ? G__25270.cljs$core$IFn$_invoke$arity$1(G__25271) : G__25270.call(null,G__25271));
});})(on_deck))
).call(null,cljs.core.seq,items);
var ith_item = ((function (on_deck,items_seq){
return (function (p1__25255_SHARP_){
return javelin.core.formula(((function (on_deck,items_seq){
return (function (G__25274,G__25273,G__25272){
return (G__25272.cljs$core$IFn$_invoke$arity$2 ? G__25272.cljs$core$IFn$_invoke$arity$2(G__25273,G__25274) : G__25272.call(null,G__25273,G__25274));
});})(on_deck,items_seq))
).call(null,p1__25255_SHARP_,items_seq,hoplon.core.safe_nth);
});})(on_deck,items_seq))
;
var shift_BANG_ = ((function (on_deck,items_seq,ith_item){
return (function (p1__25256_SHARP_){
var x = cljs.core.first((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(p1__25256_SHARP_) : cljs.core.deref.call(null,p1__25256_SHARP_)));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(p1__25256_SHARP_,cljs.core.rest);

return x;
});})(on_deck,items_seq,ith_item))
;
var current = javelin.core.cell.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
hoplon.core.do_watch.cljs$core$IFn$_invoke$arity$2(items_seq,((function (current,on_deck,items_seq,ith_item,shift_BANG_){
return (function (old_items,new_items){
var old = cljs.core.count(old_items);
var new$ = cljs.core.count(new_items);
var diff = (new$ - old);
if((diff > (0))){
var seq__25275 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$2(old,new$));
var chunk__25276 = null;
var count__25277 = (0);
var i__25278 = (0);
while(true){
if((i__25278 < count__25277)){
var i = chunk__25276.cljs$core$IIndexed$_nth$arity$2(null,i__25278);
var e_25281 = (function (){var or__17769__auto__ = shift_BANG_(on_deck);
if(cljs.core.truth_(or__17769__auto__)){
return or__17769__auto__;
} else {
var G__25279 = ith_item(i);
return (tpl.cljs$core$IFn$_invoke$arity$1 ? tpl.cljs$core$IFn$_invoke$arity$1(G__25279) : tpl.call(null,G__25279));
}
})();
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(current,cljs.core.conj,e_25281);

var G__25282 = seq__25275;
var G__25283 = chunk__25276;
var G__25284 = count__25277;
var G__25285 = (i__25278 + (1));
seq__25275 = G__25282;
chunk__25276 = G__25283;
count__25277 = G__25284;
i__25278 = G__25285;
continue;
} else {
var temp__6503__auto__ = cljs.core.seq(seq__25275);
if(temp__6503__auto__){
var seq__25275__$1 = temp__6503__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__25275__$1)){
var c__18672__auto__ = cljs.core.chunk_first(seq__25275__$1);
var G__25286 = cljs.core.chunk_rest(seq__25275__$1);
var G__25287 = c__18672__auto__;
var G__25288 = cljs.core.count(c__18672__auto__);
var G__25289 = (0);
seq__25275 = G__25286;
chunk__25276 = G__25287;
count__25277 = G__25288;
i__25278 = G__25289;
continue;
} else {
var i = cljs.core.first(seq__25275__$1);
var e_25290 = (function (){var or__17769__auto__ = shift_BANG_(on_deck);
if(cljs.core.truth_(or__17769__auto__)){
return or__17769__auto__;
} else {
var G__25280 = ith_item(i);
return (tpl.cljs$core$IFn$_invoke$arity$1 ? tpl.cljs$core$IFn$_invoke$arity$1(G__25280) : tpl.call(null,G__25280));
}
})();
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(current,cljs.core.conj,e_25290);

var G__25291 = cljs.core.next(seq__25275__$1);
var G__25292 = null;
var G__25293 = (0);
var G__25294 = (0);
seq__25275 = G__25291;
chunk__25276 = G__25292;
count__25277 = G__25293;
i__25278 = G__25294;
continue;
}
} else {
return null;
}
}
break;
}
} else {
if((diff < (0))){
var n__18782__auto__ = (- diff);
var _ = (0);
while(true){
if((_ < n__18782__auto__)){
var e_25295 = cljs.core.peek((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(current) : cljs.core.deref.call(null,current)));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(current,cljs.core.pop);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(on_deck,cljs.core.conj,e_25295);

var G__25296 = (_ + (1));
_ = G__25296;
continue;
} else {
return null;
}
break;
}
} else {
return null;
}
}
});})(current,on_deck,items_seq,ith_item,shift_BANG_))
);

return current;
});
/**
 * Defines a cell whose value is the URI fragment.
 */
hoplon.core.route_cell = (function hoplon$core$route_cell(var_args){
var args__18959__auto__ = [];
var len__18952__auto___25307 = arguments.length;
var i__18953__auto___25308 = (0);
while(true){
if((i__18953__auto___25308 < len__18952__auto___25307)){
args__18959__auto__.push((arguments[i__18953__auto___25308]));

var G__25309 = (i__18953__auto___25308 + (1));
i__18953__auto___25308 = G__25309;
continue;
} else {
}
break;
}

var argseq__18960__auto__ = ((((0) < args__18959__auto__.length))?(new cljs.core.IndexedSeq(args__18959__auto__.slice((0)),(0),null)):null);
return hoplon.core.route_cell.cljs$core$IFn$_invoke$arity$variadic(argseq__18960__auto__);
});

hoplon.core.route_cell.cljs$core$IFn$_invoke$arity$variadic = (function (p__25298){
var vec__25299 = p__25298;
var default$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25299,(0),null);
var c = javelin.core.cell.cljs$core$IFn$_invoke$arity$1(window.location.hash);
var _ = javelin.core.formula(((function (c,vec__25299,default$){
return (function (G__25302,G__25304,G__25303){
var or__17769__auto__ = (function (){var and__17757__auto__ = (G__25302.cljs$core$IFn$_invoke$arity$1 ? G__25302.cljs$core$IFn$_invoke$arity$1(G__25303) : G__25302.call(null,G__25303));
if(cljs.core.truth_(and__17757__auto__)){
return G__25303;
} else {
return and__17757__auto__;
}
})();
if(cljs.core.truth_(or__17769__auto__)){
return or__17769__auto__;
} else {
return G__25304;
}
});})(c,vec__25299,default$))
).call(null,cljs.core.seq,default$,c);
jQuery(window).on("hashchange",((function (_,c,vec__25299,default$){
return (function (){
var G__25305 = c;
var G__25306 = window.location.hash;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__25305,G__25306) : cljs.core.reset_BANG_.call(null,G__25305,G__25306));
});})(_,c,vec__25299,default$))
);

return _;
});

hoplon.core.route_cell.cljs$lang$maxFixedArity = (0);

hoplon.core.route_cell.cljs$lang$applyTo = (function (seq25297){
return hoplon.core.route_cell.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq25297));
});

