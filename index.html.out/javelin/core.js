// Compiled by ClojureScript 1.9.76 {:static-fns true, :optimize-constants true}
goog.provide('javelin.core');
goog.require('cljs.core');
goog.require('tailrecursion.priority_map');




javelin.core._STAR_tx_STAR_ = null;
javelin.core.last_rank = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0)) : cljs.core.atom.call(null,(0)));
/**
 * Like tree-seq but traversal is breadth-first instead of depth-first.
 */
javelin.core.bf_seq = (function javelin$core$bf_seq(branch_QMARK_,children,root){
var walk = (function javelin$core$bf_seq_$_walk(queue){
var temp__6503__auto__ = cljs.core.peek(queue);
if(cljs.core.truth_(temp__6503__auto__)){
var node = temp__6503__auto__;
return (new cljs.core.LazySeq(null,((function (node,temp__6503__auto__){
return (function (){
return cljs.core.cons(node,javelin$core$bf_seq_$_walk(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.pop(queue),(cljs.core.truth_((branch_QMARK_.cljs$core$IFn$_invoke$arity$1 ? branch_QMARK_.cljs$core$IFn$_invoke$arity$1(node) : branch_QMARK_.call(null,node)))?(children.cljs$core$IFn$_invoke$arity$1 ? children.cljs$core$IFn$_invoke$arity$1(node) : children.call(null,node)):null))));
});})(node,temp__6503__auto__))
,null,null));
} else {
return null;
}
});
return walk(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentQueue.EMPTY,root));
});
javelin.core.propagate_STAR_ = (function javelin$core$propagate_STAR_(pri_map){
while(true){
var temp__6503__auto__ = cljs.core.first(cljs.core.peek(pri_map));
if(cljs.core.truth_(temp__6503__auto__)){
var next = temp__6503__auto__;
var popq = cljs.core.pop(pri_map);
var old = next.prev;
var new$ = (function (){var temp__6501__auto__ = next.thunk;
if(cljs.core.truth_(temp__6501__auto__)){
var f = temp__6501__auto__;
return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
} else {
return next.state;
}
})();
var diff_QMARK_ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new$,old);
if(diff_QMARK_){
next.prev = new$;

cljs.core._notify_watches(next,old,new$);
} else {
}

var G__24284 = ((!(diff_QMARK_))?popq:cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (pri_map,popq,old,new$,diff_QMARK_,next,temp__6503__auto__){
return (function (p1__24282_SHARP_,p2__24283_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__24282_SHARP_,p2__24283_SHARP_,p2__24283_SHARP_.rank);
});})(pri_map,popq,old,new$,diff_QMARK_,next,temp__6503__auto__))
,popq,next.sinks));
pri_map = G__24284;
continue;
} else {
return null;
}
break;
}
});
javelin.core.deref_STAR_ = (function javelin$core$deref_STAR_(x){
if(cljs.core.truth_((javelin.core.cell_QMARK_.cljs$core$IFn$_invoke$arity$1 ? javelin.core.cell_QMARK_.cljs$core$IFn$_invoke$arity$1(x) : javelin.core.cell_QMARK_.call(null,x)))){
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(x) : cljs.core.deref.call(null,x));
} else {
return x;
}
});
javelin.core.next_rank = (function javelin$core$next_rank(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(javelin.core.last_rank,cljs.core.inc);
});
javelin.core.cell__GT_pm = (function javelin$core$cell__GT_pm(c){
return tailrecursion.priority_map.priority_map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([c,c.rank], 0));
});
javelin.core.add_sync_BANG_ = (function javelin$core$add_sync_BANG_(c){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(javelin.core._STAR_tx_STAR_,cljs.core.assoc,c,c.rank);
});
javelin.core.safe_nth = (function javelin$core$safe_nth(c,i){
try{return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(c,i);
}catch (e24286){if((e24286 instanceof Error)){
var _ = e24286;
return null;
} else {
throw e24286;

}
}});
javelin.core.propagate_BANG_ = (function javelin$core$propagate_BANG_(c){
if(cljs.core.truth_(javelin.core._STAR_tx_STAR_)){
var G__24289 = c;
javelin.core.add_sync_BANG_(G__24289);

return G__24289;
} else {
var G__24290 = c;
javelin.core.propagate_STAR_(javelin.core.cell__GT_pm(G__24290));

return G__24290;
}
});
javelin.core.destroy_cell_BANG_ = (function javelin$core$destroy_cell_BANG_(var_args){
var args__18959__auto__ = [];
var len__18952__auto___24301 = arguments.length;
var i__18953__auto___24302 = (0);
while(true){
if((i__18953__auto___24302 < len__18952__auto___24301)){
args__18959__auto__.push((arguments[i__18953__auto___24302]));

var G__24303 = (i__18953__auto___24302 + (1));
i__18953__auto___24302 = G__24303;
continue;
} else {
}
break;
}

var argseq__18960__auto__ = ((((1) < args__18959__auto__.length))?(new cljs.core.IndexedSeq(args__18959__auto__.slice((1)),(0),null)):null);
return javelin.core.destroy_cell_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__18960__auto__);
});

javelin.core.destroy_cell_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (this$,p__24293){
var vec__24294 = p__24293;
var keep_watches_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24294,(0),null);
var srcs = this$.sources;
this$.sources = cljs.core.PersistentVector.EMPTY;

this$.update = null;

this$.thunk = null;

if(cljs.core.truth_(keep_watches_QMARK_)){
} else {
this$.watches = cljs.core.PersistentArrayMap.EMPTY;
}

var seq__24297 = cljs.core.seq(srcs);
var chunk__24298 = null;
var count__24299 = (0);
var i__24300 = (0);
while(true){
if((i__24300 < count__24299)){
var src = chunk__24298.cljs$core$IIndexed$_nth$arity$2(null,i__24300);
if(cljs.core.truth_((javelin.core.cell_QMARK_.cljs$core$IFn$_invoke$arity$1 ? javelin.core.cell_QMARK_.cljs$core$IFn$_invoke$arity$1(src) : javelin.core.cell_QMARK_.call(null,src)))){
src.sinks = cljs.core.disj.cljs$core$IFn$_invoke$arity$2(src.sinks,this$);
} else {
}

var G__24304 = seq__24297;
var G__24305 = chunk__24298;
var G__24306 = count__24299;
var G__24307 = (i__24300 + (1));
seq__24297 = G__24304;
chunk__24298 = G__24305;
count__24299 = G__24306;
i__24300 = G__24307;
continue;
} else {
var temp__6503__auto__ = cljs.core.seq(seq__24297);
if(temp__6503__auto__){
var seq__24297__$1 = temp__6503__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__24297__$1)){
var c__18672__auto__ = cljs.core.chunk_first(seq__24297__$1);
var G__24308 = cljs.core.chunk_rest(seq__24297__$1);
var G__24309 = c__18672__auto__;
var G__24310 = cljs.core.count(c__18672__auto__);
var G__24311 = (0);
seq__24297 = G__24308;
chunk__24298 = G__24309;
count__24299 = G__24310;
i__24300 = G__24311;
continue;
} else {
var src = cljs.core.first(seq__24297__$1);
if(cljs.core.truth_((javelin.core.cell_QMARK_.cljs$core$IFn$_invoke$arity$1 ? javelin.core.cell_QMARK_.cljs$core$IFn$_invoke$arity$1(src) : javelin.core.cell_QMARK_.call(null,src)))){
src.sinks = cljs.core.disj.cljs$core$IFn$_invoke$arity$2(src.sinks,this$);
} else {
}

var G__24312 = cljs.core.next(seq__24297__$1);
var G__24313 = null;
var G__24314 = (0);
var G__24315 = (0);
seq__24297 = G__24312;
chunk__24298 = G__24313;
count__24299 = G__24314;
i__24300 = G__24315;
continue;
}
} else {
return null;
}
}
break;
}
});

javelin.core.destroy_cell_BANG_.cljs$lang$maxFixedArity = (1);

javelin.core.destroy_cell_BANG_.cljs$lang$applyTo = (function (seq24291){
var G__24292 = cljs.core.first(seq24291);
var seq24291__$1 = cljs.core.next(seq24291);
return javelin.core.destroy_cell_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__24292,seq24291__$1);
});

javelin.core.set_formula_BANG_ = (function javelin$core$set_formula_BANG_(var_args){
var args__18959__auto__ = [];
var len__18952__auto___24336 = arguments.length;
var i__18953__auto___24337 = (0);
while(true){
if((i__18953__auto___24337 < len__18952__auto___24336)){
args__18959__auto__.push((arguments[i__18953__auto___24337]));

var G__24338 = (i__18953__auto___24337 + (1));
i__18953__auto___24337 = G__24338;
continue;
} else {
}
break;
}

var argseq__18960__auto__ = ((((1) < args__18959__auto__.length))?(new cljs.core.IndexedSeq(args__18959__auto__.slice((1)),(0),null)):null);
return javelin.core.set_formula_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__18960__auto__);
});

javelin.core.set_formula_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (this$,p__24320){
var vec__24321 = p__24320;
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24321,(0),null);
var sources = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24321,(1),null);
javelin.core.destroy_cell_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.array_seq([true], 0));

if(cljs.core.truth_(f)){
this$.sources = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.vec(sources),f);

var seq__24324_24339 = cljs.core.seq(this$.sources);
var chunk__24325_24340 = null;
var count__24326_24341 = (0);
var i__24327_24342 = (0);
while(true){
if((i__24327_24342 < count__24326_24341)){
var source_24343 = chunk__24325_24340.cljs$core$IIndexed$_nth$arity$2(null,i__24327_24342);
if(cljs.core.truth_((javelin.core.cell_QMARK_.cljs$core$IFn$_invoke$arity$1 ? javelin.core.cell_QMARK_.cljs$core$IFn$_invoke$arity$1(source_24343) : javelin.core.cell_QMARK_.call(null,source_24343)))){
source_24343.sinks = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(source_24343.sinks,this$);

if((source_24343.rank > this$.rank)){
var seq__24328_24344 = cljs.core.seq(javelin.core.bf_seq(cljs.core.identity,((function (seq__24324_24339,chunk__24325_24340,count__24326_24341,i__24327_24342,source_24343,vec__24321,f,sources){
return (function (p1__24316_SHARP_){
return p1__24316_SHARP_.sinks;
});})(seq__24324_24339,chunk__24325_24340,count__24326_24341,i__24327_24342,source_24343,vec__24321,f,sources))
,source_24343));
var chunk__24329_24345 = null;
var count__24330_24346 = (0);
var i__24331_24347 = (0);
while(true){
if((i__24331_24347 < count__24330_24346)){
var dep_24348 = chunk__24329_24345.cljs$core$IIndexed$_nth$arity$2(null,i__24331_24347);
dep_24348.rank = javelin.core.next_rank();

var G__24349 = seq__24328_24344;
var G__24350 = chunk__24329_24345;
var G__24351 = count__24330_24346;
var G__24352 = (i__24331_24347 + (1));
seq__24328_24344 = G__24349;
chunk__24329_24345 = G__24350;
count__24330_24346 = G__24351;
i__24331_24347 = G__24352;
continue;
} else {
var temp__6503__auto___24353 = cljs.core.seq(seq__24328_24344);
if(temp__6503__auto___24353){
var seq__24328_24354__$1 = temp__6503__auto___24353;
if(cljs.core.chunked_seq_QMARK_(seq__24328_24354__$1)){
var c__18672__auto___24355 = cljs.core.chunk_first(seq__24328_24354__$1);
var G__24356 = cljs.core.chunk_rest(seq__24328_24354__$1);
var G__24357 = c__18672__auto___24355;
var G__24358 = cljs.core.count(c__18672__auto___24355);
var G__24359 = (0);
seq__24328_24344 = G__24356;
chunk__24329_24345 = G__24357;
count__24330_24346 = G__24358;
i__24331_24347 = G__24359;
continue;
} else {
var dep_24360 = cljs.core.first(seq__24328_24354__$1);
dep_24360.rank = javelin.core.next_rank();

var G__24361 = cljs.core.next(seq__24328_24354__$1);
var G__24362 = null;
var G__24363 = (0);
var G__24364 = (0);
seq__24328_24344 = G__24361;
chunk__24329_24345 = G__24362;
count__24330_24346 = G__24363;
i__24331_24347 = G__24364;
continue;
}
} else {
}
}
break;
}
} else {
}
} else {
}

var G__24365 = seq__24324_24339;
var G__24366 = chunk__24325_24340;
var G__24367 = count__24326_24341;
var G__24368 = (i__24327_24342 + (1));
seq__24324_24339 = G__24365;
chunk__24325_24340 = G__24366;
count__24326_24341 = G__24367;
i__24327_24342 = G__24368;
continue;
} else {
var temp__6503__auto___24369 = cljs.core.seq(seq__24324_24339);
if(temp__6503__auto___24369){
var seq__24324_24370__$1 = temp__6503__auto___24369;
if(cljs.core.chunked_seq_QMARK_(seq__24324_24370__$1)){
var c__18672__auto___24371 = cljs.core.chunk_first(seq__24324_24370__$1);
var G__24372 = cljs.core.chunk_rest(seq__24324_24370__$1);
var G__24373 = c__18672__auto___24371;
var G__24374 = cljs.core.count(c__18672__auto___24371);
var G__24375 = (0);
seq__24324_24339 = G__24372;
chunk__24325_24340 = G__24373;
count__24326_24341 = G__24374;
i__24327_24342 = G__24375;
continue;
} else {
var source_24376 = cljs.core.first(seq__24324_24370__$1);
if(cljs.core.truth_((javelin.core.cell_QMARK_.cljs$core$IFn$_invoke$arity$1 ? javelin.core.cell_QMARK_.cljs$core$IFn$_invoke$arity$1(source_24376) : javelin.core.cell_QMARK_.call(null,source_24376)))){
source_24376.sinks = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(source_24376.sinks,this$);

if((source_24376.rank > this$.rank)){
var seq__24332_24377 = cljs.core.seq(javelin.core.bf_seq(cljs.core.identity,((function (seq__24324_24339,chunk__24325_24340,count__24326_24341,i__24327_24342,source_24376,seq__24324_24370__$1,temp__6503__auto___24369,vec__24321,f,sources){
return (function (p1__24316_SHARP_){
return p1__24316_SHARP_.sinks;
});})(seq__24324_24339,chunk__24325_24340,count__24326_24341,i__24327_24342,source_24376,seq__24324_24370__$1,temp__6503__auto___24369,vec__24321,f,sources))
,source_24376));
var chunk__24333_24378 = null;
var count__24334_24379 = (0);
var i__24335_24380 = (0);
while(true){
if((i__24335_24380 < count__24334_24379)){
var dep_24381 = chunk__24333_24378.cljs$core$IIndexed$_nth$arity$2(null,i__24335_24380);
dep_24381.rank = javelin.core.next_rank();

var G__24382 = seq__24332_24377;
var G__24383 = chunk__24333_24378;
var G__24384 = count__24334_24379;
var G__24385 = (i__24335_24380 + (1));
seq__24332_24377 = G__24382;
chunk__24333_24378 = G__24383;
count__24334_24379 = G__24384;
i__24335_24380 = G__24385;
continue;
} else {
var temp__6503__auto___24386__$1 = cljs.core.seq(seq__24332_24377);
if(temp__6503__auto___24386__$1){
var seq__24332_24387__$1 = temp__6503__auto___24386__$1;
if(cljs.core.chunked_seq_QMARK_(seq__24332_24387__$1)){
var c__18672__auto___24388 = cljs.core.chunk_first(seq__24332_24387__$1);
var G__24389 = cljs.core.chunk_rest(seq__24332_24387__$1);
var G__24390 = c__18672__auto___24388;
var G__24391 = cljs.core.count(c__18672__auto___24388);
var G__24392 = (0);
seq__24332_24377 = G__24389;
chunk__24333_24378 = G__24390;
count__24334_24379 = G__24391;
i__24335_24380 = G__24392;
continue;
} else {
var dep_24393 = cljs.core.first(seq__24332_24387__$1);
dep_24393.rank = javelin.core.next_rank();

var G__24394 = cljs.core.next(seq__24332_24387__$1);
var G__24395 = null;
var G__24396 = (0);
var G__24397 = (0);
seq__24332_24377 = G__24394;
chunk__24333_24378 = G__24395;
count__24334_24379 = G__24396;
i__24335_24380 = G__24397;
continue;
}
} else {
}
}
break;
}
} else {
}
} else {
}

var G__24398 = cljs.core.next(seq__24324_24370__$1);
var G__24399 = null;
var G__24400 = (0);
var G__24401 = (0);
seq__24324_24339 = G__24398;
chunk__24325_24340 = G__24399;
count__24326_24341 = G__24400;
i__24327_24342 = G__24401;
continue;
}
} else {
}
}
break;
}

var compute_24402 = ((function (vec__24321,f,sources){
return (function (p1__24317_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(javelin.core.deref_STAR_(cljs.core.peek(p1__24317_SHARP_)),cljs.core.map.cljs$core$IFn$_invoke$arity$2(javelin.core.deref_STAR_,cljs.core.pop(p1__24317_SHARP_)));
});})(vec__24321,f,sources))
;
this$.thunk = ((function (compute_24402,vec__24321,f,sources){
return (function (){
return this$.state = compute_24402(this$.sources);
});})(compute_24402,vec__24321,f,sources))
;
} else {
}

return javelin.core.propagate_BANG_(this$);
});

javelin.core.set_formula_BANG_.cljs$lang$maxFixedArity = (1);

javelin.core.set_formula_BANG_.cljs$lang$applyTo = (function (seq24318){
var G__24319 = cljs.core.first(seq24318);
var seq24318__$1 = cljs.core.next(seq24318);
return javelin.core.set_formula_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__24319,seq24318__$1);
});


/**
* @constructor
 * @implements {cljs.core.IWatchable}
 * @implements {cljs.core.IReset}
 * @implements {cljs.core.ISwap}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IWithMeta}
*/
javelin.core.Cell = (function (meta,state,rank,prev,sources,sinks,thunk,watches,update){
this.meta = meta;
this.state = state;
this.rank = rank;
this.prev = prev;
this.sources = sources;
this.sinks = sinks;
this.thunk = thunk;
this.watches = watches;
this.update = update;
this.cljs$lang$protocol_mask$partition0$ = 2147909632;
this.cljs$lang$protocol_mask$partition1$ = 98306;
})
javelin.core.Cell.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this$,w,_){
var self__ = this;
var this$__$1 = this;
return cljs.core.write_all.cljs$core$IFn$_invoke$arity$variadic(w,cljs.core.array_seq(["#<Cell: ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([self__.state], 0)),">"], 0));
});

javelin.core.Cell.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this$,meta__$1){
var self__ = this;
var this$__$1 = this;
return (new javelin.core.Cell(meta__$1,self__.state,self__.rank,self__.prev,self__.sources,self__.sinks,self__.thunk,self__.watches,self__.update));
});

javelin.core.Cell.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.meta;
});

javelin.core.Cell.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return this$__$1.state;
});

javelin.core.Cell.prototype.cljs$core$IReset$_reset_BANG_$arity$2 = (function (this$,x){
var self__ = this;
var this$__$1 = this;
if(cljs.core.truth_((javelin.core.lens_QMARK_.cljs$core$IFn$_invoke$arity$1 ? javelin.core.lens_QMARK_.cljs$core$IFn$_invoke$arity$1(this$__$1) : javelin.core.lens_QMARK_.call(null,this$__$1)))){
this$__$1.update.call(null,x);
} else {
if(cljs.core.truth_((javelin.core.input_QMARK_.cljs$core$IFn$_invoke$arity$1 ? javelin.core.input_QMARK_.cljs$core$IFn$_invoke$arity$1(this$__$1) : javelin.core.input_QMARK_.call(null,this$__$1)))){
this$__$1.state = x;

javelin.core.propagate_BANG_(this$__$1);
} else {
throw (new Error("can't swap! or reset! formula cell"));

}
}

return this$__$1.state;
});

javelin.core.Cell.prototype.cljs$core$ISwap$_swap_BANG_$arity$2 = (function (this$,f){
var self__ = this;
var this$__$1 = this;
var G__24404 = this$__$1;
var G__24405 = (function (){var G__24406 = this$__$1.state;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__24406) : f.call(null,G__24406));
})();
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__24404,G__24405) : cljs.core.reset_BANG_.call(null,G__24404,G__24405));
});

javelin.core.Cell.prototype.cljs$core$ISwap$_swap_BANG_$arity$3 = (function (this$,f,a){
var self__ = this;
var this$__$1 = this;
var G__24409 = this$__$1;
var G__24410 = (function (){var G__24411 = this$__$1.state;
var G__24412 = a;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__24411,G__24412) : f.call(null,G__24411,G__24412));
})();
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__24409,G__24410) : cljs.core.reset_BANG_.call(null,G__24409,G__24410));
});

javelin.core.Cell.prototype.cljs$core$ISwap$_swap_BANG_$arity$4 = (function (this$,f,a,b){
var self__ = this;
var this$__$1 = this;
var G__24416 = this$__$1;
var G__24417 = (function (){var G__24418 = this$__$1.state;
var G__24419 = a;
var G__24420 = b;
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__24418,G__24419,G__24420) : f.call(null,G__24418,G__24419,G__24420));
})();
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__24416,G__24417) : cljs.core.reset_BANG_.call(null,G__24416,G__24417));
});

javelin.core.Cell.prototype.cljs$core$ISwap$_swap_BANG_$arity$5 = (function (this$,f,a,b,xs){
var self__ = this;
var this$__$1 = this;
var G__24421 = this$__$1;
var G__24422 = cljs.core.apply.cljs$core$IFn$_invoke$arity$5(f,this$__$1.state,a,b,xs);
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__24421,G__24422) : cljs.core.reset_BANG_.call(null,G__24421,G__24422));
});

javelin.core.Cell.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,o,n){
var self__ = this;
var this$__$1 = this;
var seq__24423 = cljs.core.seq(self__.watches);
var chunk__24424 = null;
var count__24425 = (0);
var i__24426 = (0);
while(true){
if((i__24426 < count__24425)){
var vec__24427 = chunk__24424.cljs$core$IIndexed$_nth$arity$2(null,i__24426);
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24427,(0),null);
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24427,(1),null);
(f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(key,this$__$1,o,n) : f.call(null,key,this$__$1,o,n));

var G__24433 = seq__24423;
var G__24434 = chunk__24424;
var G__24435 = count__24425;
var G__24436 = (i__24426 + (1));
seq__24423 = G__24433;
chunk__24424 = G__24434;
count__24425 = G__24435;
i__24426 = G__24436;
continue;
} else {
var temp__6503__auto__ = cljs.core.seq(seq__24423);
if(temp__6503__auto__){
var seq__24423__$1 = temp__6503__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__24423__$1)){
var c__18672__auto__ = cljs.core.chunk_first(seq__24423__$1);
var G__24437 = cljs.core.chunk_rest(seq__24423__$1);
var G__24438 = c__18672__auto__;
var G__24439 = cljs.core.count(c__18672__auto__);
var G__24440 = (0);
seq__24423 = G__24437;
chunk__24424 = G__24438;
count__24425 = G__24439;
i__24426 = G__24440;
continue;
} else {
var vec__24430 = cljs.core.first(seq__24423__$1);
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24430,(0),null);
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24430,(1),null);
(f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(key,this$__$1,o,n) : f.call(null,key,this$__$1,o,n));

var G__24441 = cljs.core.next(seq__24423__$1);
var G__24442 = null;
var G__24443 = (0);
var G__24444 = (0);
seq__24423 = G__24441;
chunk__24424 = G__24442;
count__24425 = G__24443;
i__24426 = G__24444;
continue;
}
} else {
return null;
}
}
break;
}
});

javelin.core.Cell.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,k,f){
var self__ = this;
var this$__$1 = this;
return this$__$1.watches = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.watches,k,f);
});

javelin.core.Cell.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,k){
var self__ = this;
var this$__$1 = this;
return this$__$1.watches = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.watches,k);
});

javelin.core.Cell.getBasis = (function (){
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$meta,cljs.core.cst$sym$state,cljs.core.cst$sym$rank,cljs.core.cst$sym$prev,cljs.core.cst$sym$sources,cljs.core.cst$sym$sinks,cljs.core.cst$sym$thunk,cljs.core.cst$sym$watches,cljs.core.cst$sym$update], null);
});

javelin.core.Cell.cljs$lang$type = true;

javelin.core.Cell.cljs$lang$ctorStr = "javelin.core/Cell";

javelin.core.Cell.cljs$lang$ctorPrWriter = (function (this__18421__auto__,writer__18422__auto__,opt__18423__auto__){
return cljs.core._write(writer__18422__auto__,"javelin.core/Cell");
});

javelin.core.__GT_Cell = (function javelin$core$__GT_Cell(meta,state,rank,prev,sources,sinks,thunk,watches,update){
return (new javelin.core.Cell(meta,state,rank,prev,sources,sinks,thunk,watches,update));
});

javelin.core.cell_QMARK_ = (function javelin$core$cell_QMARK_(c){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.type(c),javelin.core.Cell)){
return c;
} else {
return null;
}
});
javelin.core.formula_QMARK_ = (function javelin$core$formula_QMARK_(c){
if(cljs.core.truth_((function (){var and__17757__auto__ = javelin.core.cell_QMARK_(c);
if(cljs.core.truth_(and__17757__auto__)){
return c.thunk;
} else {
return and__17757__auto__;
}
})())){
return c;
} else {
return null;
}
});
javelin.core.lens_QMARK_ = (function javelin$core$lens_QMARK_(c){
if(cljs.core.truth_((function (){var and__17757__auto__ = javelin.core.cell_QMARK_(c);
if(cljs.core.truth_(and__17757__auto__)){
return c.update;
} else {
return and__17757__auto__;
}
})())){
return c;
} else {
return null;
}
});
javelin.core.input_QMARK_ = (function javelin$core$input_QMARK_(c){
if(cljs.core.truth_((function (){var and__17757__auto__ = javelin.core.cell_QMARK_(c);
if(cljs.core.truth_(and__17757__auto__)){
return cljs.core.not(javelin.core.formula_QMARK_(c));
} else {
return and__17757__auto__;
}
})())){
return c;
} else {
return null;
}
});
javelin.core.set_cell_BANG_ = (function javelin$core$set_cell_BANG_(c,x){
c.state = x;

return javelin.core.set_formula_BANG_(c);
});
javelin.core.formula = (function javelin$core$formula(f){
return (function() { 
var G__24445__delegate = function (sources){
return javelin.core.set_formula_BANG_.cljs$core$IFn$_invoke$arity$variadic((javelin.core.cell.cljs$core$IFn$_invoke$arity$1 ? javelin.core.cell.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$javelin$core_SLASH_none) : javelin.core.cell.call(null,cljs.core.cst$kw$javelin$core_SLASH_none)),cljs.core.array_seq([f,sources], 0));
};
var G__24445 = function (var_args){
var sources = null;
if (arguments.length > 0) {
var G__24446__i = 0, G__24446__a = new Array(arguments.length -  0);
while (G__24446__i < G__24446__a.length) {G__24446__a[G__24446__i] = arguments[G__24446__i + 0]; ++G__24446__i;}
  sources = new cljs.core.IndexedSeq(G__24446__a,0);
} 
return G__24445__delegate.call(this,sources);};
G__24445.cljs$lang$maxFixedArity = 0;
G__24445.cljs$lang$applyTo = (function (arglist__24447){
var sources = cljs.core.seq(arglist__24447);
return G__24445__delegate(sources);
});
G__24445.cljs$core$IFn$_invoke$arity$variadic = G__24445__delegate;
return G__24445;
})()
;
});
javelin.core.lens = (function javelin$core$lens(c,f){
var c__$1 = javelin.core.formula(cljs.core.identity).call(null,c);
c__$1.update = f;

return c__$1;
});
javelin.core.cell = (function javelin$core$cell(var_args){
var args24448 = [];
var len__18952__auto___24456 = arguments.length;
var i__18953__auto___24457 = (0);
while(true){
if((i__18953__auto___24457 < len__18952__auto___24456)){
args24448.push((arguments[i__18953__auto___24457]));

var G__24458 = (i__18953__auto___24457 + (1));
i__18953__auto___24457 = G__24458;
continue;
} else {
}
break;
}

var G__24452 = args24448.length;
switch (G__24452) {
case 1:
return javelin.core.cell.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
var argseq__18975__auto__ = (new cljs.core.IndexedSeq(args24448.slice((1)),(0),null));
return javelin.core.cell.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__18975__auto__);

}
});

javelin.core.cell.cljs$core$IFn$_invoke$arity$1 = (function (x){
return javelin.core.set_formula_BANG_((new javelin.core.Cell(null,x,javelin.core.next_rank(),x,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentHashSet.EMPTY,null,cljs.core.PersistentArrayMap.EMPTY,null)));
});

javelin.core.cell.cljs$core$IFn$_invoke$arity$variadic = (function (x,p__24453){
var map__24454 = p__24453;
var map__24454__$1 = ((((!((map__24454 == null)))?((((map__24454.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24454.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24454):map__24454);
var meta = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24454__$1,cljs.core.cst$kw$meta);
return javelin.core.set_formula_BANG_((new javelin.core.Cell(meta,x,javelin.core.next_rank(),x,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentHashSet.EMPTY,null,cljs.core.PersistentArrayMap.EMPTY,null)));
});

javelin.core.cell.cljs$lang$applyTo = (function (seq24449){
var G__24450 = cljs.core.first(seq24449);
var seq24449__$1 = cljs.core.next(seq24449);
return javelin.core.cell.cljs$core$IFn$_invoke$arity$variadic(G__24450,seq24449__$1);
});

javelin.core.cell.cljs$lang$maxFixedArity = (1);

javelin.core.lift = javelin.core.formula;
javelin.core.dosync_STAR_ = (function javelin$core$dosync_STAR_(thunk){
var bind = (function (p1__24460_SHARP_){
var _STAR_tx_STAR_24464 = javelin.core._STAR_tx_STAR_;
javelin.core._STAR_tx_STAR_ = (function (){var G__24465 = tailrecursion.priority_map.priority_map();
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__24465) : cljs.core.atom.call(null,G__24465));
})();

try{return (p1__24460_SHARP_.cljs$core$IFn$_invoke$arity$0 ? p1__24460_SHARP_.cljs$core$IFn$_invoke$arity$0() : p1__24460_SHARP_.call(null));
}finally {javelin.core._STAR_tx_STAR_ = _STAR_tx_STAR_24464;
}});
var prop = ((function (bind){
return (function (){
var tx = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(javelin.core._STAR_tx_STAR_) : cljs.core.deref.call(null,javelin.core._STAR_tx_STAR_));
var _STAR_tx_STAR_24466 = javelin.core._STAR_tx_STAR_;
javelin.core._STAR_tx_STAR_ = null;

try{return javelin.core.propagate_STAR_(tx);
}finally {javelin.core._STAR_tx_STAR_ = _STAR_tx_STAR_24466;
}});})(bind))
;
if(cljs.core.truth_(javelin.core._STAR_tx_STAR_)){
return (thunk.cljs$core$IFn$_invoke$arity$0 ? thunk.cljs$core$IFn$_invoke$arity$0() : thunk.call(null));
} else {
return bind(((function (bind,prop){
return (function (){
(thunk.cljs$core$IFn$_invoke$arity$0 ? thunk.cljs$core$IFn$_invoke$arity$0() : thunk.call(null));

return prop();
});})(bind,prop))
);
}
});
javelin.core.alts_BANG_ = (function javelin$core$alts_BANG_(var_args){
var args__18959__auto__ = [];
var len__18952__auto___24474 = arguments.length;
var i__18953__auto___24475 = (0);
while(true){
if((i__18953__auto___24475 < len__18952__auto___24474)){
args__18959__auto__.push((arguments[i__18953__auto___24475]));

var G__24476 = (i__18953__auto___24475 + (1));
i__18953__auto___24475 = G__24476;
continue;
} else {
}
break;
}

var argseq__18960__auto__ = ((((0) < args__18959__auto__.length))?(new cljs.core.IndexedSeq(args__18959__auto__.slice((0)),(0),null)):null);
return javelin.core.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(argseq__18960__auto__);
});

javelin.core.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (cells){
var olds = (function (){var G__24473 = cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(cljs.core.count(cells),cljs.core.cst$kw$javelin$core_SLASH_none);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__24473) : cljs.core.atom.call(null,G__24473));
})();
var tag_neq = ((function (olds){
return (function (p1__24467_SHARP_,p2__24468_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(p1__24467_SHARP_,p2__24468_SHARP_),p2__24468_SHARP_],null));
});})(olds))
;
var diff = ((function (olds,tag_neq){
return (function (p1__24470_SHARP_,p2__24469_SHARP_){
return cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.second,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.map.cljs$core$IFn$_invoke$arity$3(tag_neq,p1__24470_SHARP_,p2__24469_SHARP_))));
});})(olds,tag_neq))
;
var proc = ((function (olds,tag_neq,diff){
return (function() { 
var G__24477__delegate = function (rest__24471_SHARP_){
var news = diff((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(olds) : cljs.core.deref.call(null,olds)),rest__24471_SHARP_);
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(olds,rest__24471_SHARP_) : cljs.core.reset_BANG_.call(null,olds,rest__24471_SHARP_));

return news;
};
var G__24477 = function (var_args){
var rest__24471_SHARP_ = null;
if (arguments.length > 0) {
var G__24478__i = 0, G__24478__a = new Array(arguments.length -  0);
while (G__24478__i < G__24478__a.length) {G__24478__a[G__24478__i] = arguments[G__24478__i + 0]; ++G__24478__i;}
  rest__24471_SHARP_ = new cljs.core.IndexedSeq(G__24478__a,0);
} 
return G__24477__delegate.call(this,rest__24471_SHARP_);};
G__24477.cljs$lang$maxFixedArity = 0;
G__24477.cljs$lang$applyTo = (function (arglist__24479){
var rest__24471_SHARP_ = cljs.core.seq(arglist__24479);
return G__24477__delegate(rest__24471_SHARP_);
});
G__24477.cljs$core$IFn$_invoke$arity$variadic = G__24477__delegate;
return G__24477;
})()
;})(olds,tag_neq,diff))
;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(javelin.core.formula(proc),cells);
});

javelin.core.alts_BANG_.cljs$lang$maxFixedArity = (0);

javelin.core.alts_BANG_.cljs$lang$applyTo = (function (seq24472){
return javelin.core.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq24472));
});

javelin.core.cell_map = (function javelin$core$cell_map(f,c){
var cseq = javelin.core.formula(cljs.core.seq).call(null,c);
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (cseq){
return (function (p1__24480_SHARP_){
return javelin.core.formula(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(f,javelin.core.safe_nth)).call(null,cseq,p1__24480_SHARP_);
});})(cseq))
,cljs.core.range.cljs$core$IFn$_invoke$arity$2((0),cljs.core.count((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cseq) : cljs.core.deref.call(null,cseq)))));
});
javelin.core.cell_doseq_STAR_ = (function javelin$core$cell_doseq_STAR_(items_seq,f){
var pool_size = javelin.core.cell.cljs$core$IFn$_invoke$arity$1((0));
var cur_count = javelin.core.formula(cljs.core.count).call(null,items_seq);
var ith_item = ((function (pool_size,cur_count){
return (function (p1__24481_SHARP_){
return javelin.core.formula(javelin.core.safe_nth).call(null,items_seq,p1__24481_SHARP_);
});})(pool_size,cur_count))
;
return javelin.core.formula(((function (pool_size,cur_count,ith_item){
return (function (pool_size__$1,cur_count__$1,f__$1,ith_item__$1,reset_pool_size_BANG_){
if((pool_size__$1 < cur_count__$1)){
var seq__24488_24494 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$2(pool_size__$1,cur_count__$1));
var chunk__24489_24495 = null;
var count__24490_24496 = (0);
var i__24491_24497 = (0);
while(true){
if((i__24491_24497 < count__24490_24496)){
var i_24498 = chunk__24489_24495.cljs$core$IIndexed$_nth$arity$2(null,i__24491_24497);
var G__24492_24499 = (ith_item__$1.cljs$core$IFn$_invoke$arity$1 ? ith_item__$1.cljs$core$IFn$_invoke$arity$1(i_24498) : ith_item__$1.call(null,i_24498));
(f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(G__24492_24499) : f__$1.call(null,G__24492_24499));

var G__24500 = seq__24488_24494;
var G__24501 = chunk__24489_24495;
var G__24502 = count__24490_24496;
var G__24503 = (i__24491_24497 + (1));
seq__24488_24494 = G__24500;
chunk__24489_24495 = G__24501;
count__24490_24496 = G__24502;
i__24491_24497 = G__24503;
continue;
} else {
var temp__6503__auto___24504 = cljs.core.seq(seq__24488_24494);
if(temp__6503__auto___24504){
var seq__24488_24505__$1 = temp__6503__auto___24504;
if(cljs.core.chunked_seq_QMARK_(seq__24488_24505__$1)){
var c__18672__auto___24506 = cljs.core.chunk_first(seq__24488_24505__$1);
var G__24507 = cljs.core.chunk_rest(seq__24488_24505__$1);
var G__24508 = c__18672__auto___24506;
var G__24509 = cljs.core.count(c__18672__auto___24506);
var G__24510 = (0);
seq__24488_24494 = G__24507;
chunk__24489_24495 = G__24508;
count__24490_24496 = G__24509;
i__24491_24497 = G__24510;
continue;
} else {
var i_24511 = cljs.core.first(seq__24488_24505__$1);
var G__24493_24512 = (ith_item__$1.cljs$core$IFn$_invoke$arity$1 ? ith_item__$1.cljs$core$IFn$_invoke$arity$1(i_24511) : ith_item__$1.call(null,i_24511));
(f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(G__24493_24512) : f__$1.call(null,G__24493_24512));

var G__24513 = cljs.core.next(seq__24488_24505__$1);
var G__24514 = null;
var G__24515 = (0);
var G__24516 = (0);
seq__24488_24494 = G__24513;
chunk__24489_24495 = G__24514;
count__24490_24496 = G__24515;
i__24491_24497 = G__24516;
continue;
}
} else {
}
}
break;
}

return (reset_pool_size_BANG_.cljs$core$IFn$_invoke$arity$1 ? reset_pool_size_BANG_.cljs$core$IFn$_invoke$arity$1(cur_count__$1) : reset_pool_size_BANG_.call(null,cur_count__$1));
} else {
return null;
}
});})(pool_size,cur_count,ith_item))
).call(null,pool_size,cur_count,f,ith_item,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.reset_BANG_,pool_size));
});
