// Compiled by ClojureScript 1.9.76 {:static-fns true, :optimize-constants true}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var args26787 = [];
var len__18952__auto___26793 = arguments.length;
var i__18953__auto___26794 = (0);
while(true){
if((i__18953__auto___26794 < len__18952__auto___26793)){
args26787.push((arguments[i__18953__auto___26794]));

var G__26795 = (i__18953__auto___26794 + (1));
i__18953__auto___26794 = G__26795;
continue;
} else {
}
break;
}

var G__26789 = args26787.length;
switch (G__26789) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26787.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async26790 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26790 = (function (f,blockable,meta26791){
this.f = f;
this.blockable = blockable;
this.meta26791 = meta26791;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async26790.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26792,meta26791__$1){
var self__ = this;
var _26792__$1 = this;
return (new cljs.core.async.t_cljs$core$async26790(self__.f,self__.blockable,meta26791__$1));
});

cljs.core.async.t_cljs$core$async26790.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26792){
var self__ = this;
var _26792__$1 = this;
return self__.meta26791;
});

cljs.core.async.t_cljs$core$async26790.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async26790.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async26790.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async26790.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async26790.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$blockable,cljs.core.cst$sym$meta26791], null);
});

cljs.core.async.t_cljs$core$async26790.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26790.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26790";

cljs.core.async.t_cljs$core$async26790.cljs$lang$ctorPrWriter = (function (this__18421__auto__,writer__18422__auto__,opt__18423__auto__){
return cljs.core._write(writer__18422__auto__,"cljs.core.async/t_cljs$core$async26790");
});

cljs.core.async.__GT_t_cljs$core$async26790 = (function cljs$core$async$__GT_t_cljs$core$async26790(f__$1,blockable__$1,meta26791){
return (new cljs.core.async.t_cljs$core$async26790(f__$1,blockable__$1,meta26791));
});

}

return (new cljs.core.async.t_cljs$core$async26790(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || (buff.cljs$core$async$impl$protocols$UnblockingBuffer$)){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var args26799 = [];
var len__18952__auto___26802 = arguments.length;
var i__18953__auto___26803 = (0);
while(true){
if((i__18953__auto___26803 < len__18952__auto___26802)){
args26799.push((arguments[i__18953__auto___26803]));

var G__26804 = (i__18953__auto___26803 + (1));
i__18953__auto___26803 = G__26804;
continue;
} else {
}
break;
}

var G__26801 = args26799.length;
switch (G__26801) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26799.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str("buf-or-n")].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var args26806 = [];
var len__18952__auto___26809 = arguments.length;
var i__18953__auto___26810 = (0);
while(true){
if((i__18953__auto___26810 < len__18952__auto___26809)){
args26806.push((arguments[i__18953__auto___26810]));

var G__26811 = (i__18953__auto___26810 + (1));
i__18953__auto___26810 = G__26811;
continue;
} else {
}
break;
}

var G__26808 = args26806.length;
switch (G__26808) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26806.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var args26813 = [];
var len__18952__auto___26816 = arguments.length;
var i__18953__auto___26817 = (0);
while(true){
if((i__18953__auto___26817 < len__18952__auto___26816)){
args26813.push((arguments[i__18953__auto___26817]));

var G__26818 = (i__18953__auto___26817 + (1));
i__18953__auto___26817 = G__26818;
continue;
} else {
}
break;
}

var G__26815 = args26813.length;
switch (G__26815) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26813.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_26820 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ret) : cljs.core.deref.call(null,ret));
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_26820) : fn1.call(null,val_26820));
} else {
cljs.core.async.impl.dispatch.run(((function (val_26820,ret){
return (function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_26820) : fn1.call(null,val_26820));
});})(val_26820,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var args26821 = [];
var len__18952__auto___26824 = arguments.length;
var i__18953__auto___26825 = (0);
while(true){
if((i__18953__auto___26825 < len__18952__auto___26824)){
args26821.push((arguments[i__18953__auto___26825]));

var G__26826 = (i__18953__auto___26825 + (1));
i__18953__auto___26825 = G__26826;
continue;
} else {
}
break;
}

var G__26823 = args26821.length;
switch (G__26823) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26821.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__6501__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__6501__auto__)){
var ret = temp__6501__auto__;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ret) : cljs.core.deref.call(null,ret));
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__6501__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__6501__auto__)){
var retb = temp__6501__auto__;
var ret = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(retb) : cljs.core.deref.call(null,retb));
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run(((function (ret,retb,temp__6501__auto__){
return (function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
});})(ret,retb,temp__6501__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__18782__auto___26828 = n;
var x_26829 = (0);
while(true){
if((x_26829 < n__18782__auto___26828)){
(a[x_26829] = (0));

var G__26830 = (x_26829 + (1));
x_26829 = G__26830;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,n)){
return a;
} else {
var j = cljs.core.rand_int(i);
(a[i] = (a[j]));

(a[j] = i);

var G__26831 = (i + (1));
i = G__26831;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true) : cljs.core.atom.call(null,true));
if(typeof cljs.core.async.t_cljs$core$async26835 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26835 = (function (alt_flag,flag,meta26836){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta26836 = meta26836;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async26835.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_26837,meta26836__$1){
var self__ = this;
var _26837__$1 = this;
return (new cljs.core.async.t_cljs$core$async26835(self__.alt_flag,self__.flag,meta26836__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async26835.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_26837){
var self__ = this;
var _26837__$1 = this;
return self__.meta26836;
});})(flag))
;

cljs.core.async.t_cljs$core$async26835.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async26835.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(self__.flag) : cljs.core.deref.call(null,self__.flag));
});})(flag))
;

cljs.core.async.t_cljs$core$async26835.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async26835.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(self__.flag,null) : cljs.core.reset_BANG_.call(null,self__.flag,null));

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async26835.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$alt_DASH_flag,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$private,true,cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),cljs.core.cst$sym$flag,cljs.core.cst$sym$meta26836], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async26835.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26835.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26835";

cljs.core.async.t_cljs$core$async26835.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__18421__auto__,writer__18422__auto__,opt__18423__auto__){
return cljs.core._write(writer__18422__auto__,"cljs.core.async/t_cljs$core$async26835");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async26835 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async26835(alt_flag__$1,flag__$1,meta26836){
return (new cljs.core.async.t_cljs$core$async26835(alt_flag__$1,flag__$1,meta26836));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async26835(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async26841 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26841 = (function (alt_handler,flag,cb,meta26842){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta26842 = meta26842;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async26841.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26843,meta26842__$1){
var self__ = this;
var _26843__$1 = this;
return (new cljs.core.async.t_cljs$core$async26841(self__.alt_handler,self__.flag,self__.cb,meta26842__$1));
});

cljs.core.async.t_cljs$core$async26841.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26843){
var self__ = this;
var _26843__$1 = this;
return self__.meta26842;
});

cljs.core.async.t_cljs$core$async26841.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async26841.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
});

cljs.core.async.t_cljs$core$async26841.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async26841.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async26841.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$alt_DASH_handler,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$private,true,cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$flag,cljs.core.cst$sym$cb], null)))], null)),cljs.core.cst$sym$flag,cljs.core.cst$sym$cb,cljs.core.cst$sym$meta26842], null);
});

cljs.core.async.t_cljs$core$async26841.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26841.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26841";

cljs.core.async.t_cljs$core$async26841.cljs$lang$ctorPrWriter = (function (this__18421__auto__,writer__18422__auto__,opt__18423__auto__){
return cljs.core._write(writer__18422__auto__,"cljs.core.async/t_cljs$core$async26841");
});

cljs.core.async.__GT_t_cljs$core$async26841 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async26841(alt_handler__$1,flag__$1,cb__$1,meta26842){
return (new cljs.core.async.t_cljs$core$async26841(alt_handler__$1,flag__$1,cb__$1,meta26842));
});

}

return (new cljs.core.async.t_cljs$core$async26841(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = cljs.core.cst$kw$priority.cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__26844_SHARP_){
var G__26848 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__26844_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__26848) : fret.call(null,G__26848));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__26845_SHARP_){
var G__26849 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__26845_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__26849) : fret.call(null,G__26849));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(vbox) : cljs.core.deref.call(null,vbox)),(function (){var or__17769__auto__ = wport;
if(cljs.core.truth_(or__17769__auto__)){
return or__17769__auto__;
} else {
return port;
}
})()], null));
} else {
var G__26850 = (i + (1));
i = G__26850;
continue;
}
} else {
return null;
}
break;
}
})();
var or__17769__auto__ = ret;
if(cljs.core.truth_(or__17769__auto__)){
return or__17769__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,cljs.core.cst$kw$default)){
var temp__6503__auto__ = (function (){var and__17757__auto__ = cljs.core.async.impl.protocols.active_QMARK_(flag);
if(cljs.core.truth_(and__17757__auto__)){
return cljs.core.async.impl.protocols.commit(flag);
} else {
return and__17757__auto__;
}
})();
if(cljs.core.truth_(temp__6503__auto__)){
var got = temp__6503__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$default.cljs$core$IFn$_invoke$arity$1(opts),cljs.core.cst$kw$default], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__18959__auto__ = [];
var len__18952__auto___26856 = arguments.length;
var i__18953__auto___26857 = (0);
while(true){
if((i__18953__auto___26857 < len__18952__auto___26856)){
args__18959__auto__.push((arguments[i__18953__auto___26857]));

var G__26858 = (i__18953__auto___26857 + (1));
i__18953__auto___26857 = G__26858;
continue;
} else {
}
break;
}

var argseq__18960__auto__ = ((((1) < args__18959__auto__.length))?(new cljs.core.IndexedSeq(args__18959__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__18960__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__26853){
var map__26854 = p__26853;
var map__26854__$1 = ((((!((map__26854 == null)))?((((map__26854.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26854.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26854):map__26854);
var opts = map__26854__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq26851){
var G__26852 = cljs.core.first(seq26851);
var seq26851__$1 = cljs.core.next(seq26851);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__26852,seq26851__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ret) : cljs.core.deref.call(null,ret));
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ret) : cljs.core.deref.call(null,ret));
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args26859 = [];
var len__18952__auto___26909 = arguments.length;
var i__18953__auto___26910 = (0);
while(true){
if((i__18953__auto___26910 < len__18952__auto___26909)){
args26859.push((arguments[i__18953__auto___26910]));

var G__26911 = (i__18953__auto___26910 + (1));
i__18953__auto___26910 = G__26911;
continue;
} else {
}
break;
}

var G__26861 = args26859.length;
switch (G__26861) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26859.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__26728__auto___26913 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__26728__auto___26913){
return (function (){
var f__26729__auto__ = (function (){var switch__26612__auto__ = ((function (c__26728__auto___26913){
return (function (state_26885){
var state_val_26886 = (state_26885[(1)]);
if((state_val_26886 === (7))){
var inst_26881 = (state_26885[(2)]);
var state_26885__$1 = state_26885;
var statearr_26887_26914 = state_26885__$1;
(statearr_26887_26914[(2)] = inst_26881);

(statearr_26887_26914[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26886 === (1))){
var state_26885__$1 = state_26885;
var statearr_26888_26915 = state_26885__$1;
(statearr_26888_26915[(2)] = null);

(statearr_26888_26915[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26886 === (4))){
var inst_26864 = (state_26885[(7)]);
var inst_26864__$1 = (state_26885[(2)]);
var inst_26865 = (inst_26864__$1 == null);
var state_26885__$1 = (function (){var statearr_26889 = state_26885;
(statearr_26889[(7)] = inst_26864__$1);

return statearr_26889;
})();
if(cljs.core.truth_(inst_26865)){
var statearr_26890_26916 = state_26885__$1;
(statearr_26890_26916[(1)] = (5));

} else {
var statearr_26891_26917 = state_26885__$1;
(statearr_26891_26917[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_26886 === (13))){
var state_26885__$1 = state_26885;
var statearr_26892_26918 = state_26885__$1;
(statearr_26892_26918[(2)] = null);

(statearr_26892_26918[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26886 === (6))){
var inst_26864 = (state_26885[(7)]);
var state_26885__$1 = state_26885;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26885__$1,(11),to,inst_26864);
} else {
if((state_val_26886 === (3))){
var inst_26883 = (state_26885[(2)]);
var state_26885__$1 = state_26885;
return cljs.core.async.impl.ioc_helpers.return_chan(state_26885__$1,inst_26883);
} else {
if((state_val_26886 === (12))){
var state_26885__$1 = state_26885;
var statearr_26893_26919 = state_26885__$1;
(statearr_26893_26919[(2)] = null);

(statearr_26893_26919[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26886 === (2))){
var state_26885__$1 = state_26885;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_26885__$1,(4),from);
} else {
if((state_val_26886 === (11))){
var inst_26874 = (state_26885[(2)]);
var state_26885__$1 = state_26885;
if(cljs.core.truth_(inst_26874)){
var statearr_26894_26920 = state_26885__$1;
(statearr_26894_26920[(1)] = (12));

} else {
var statearr_26895_26921 = state_26885__$1;
(statearr_26895_26921[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_26886 === (9))){
var state_26885__$1 = state_26885;
var statearr_26896_26922 = state_26885__$1;
(statearr_26896_26922[(2)] = null);

(statearr_26896_26922[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26886 === (5))){
var state_26885__$1 = state_26885;
if(cljs.core.truth_(close_QMARK_)){
var statearr_26897_26923 = state_26885__$1;
(statearr_26897_26923[(1)] = (8));

} else {
var statearr_26898_26924 = state_26885__$1;
(statearr_26898_26924[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_26886 === (14))){
var inst_26879 = (state_26885[(2)]);
var state_26885__$1 = state_26885;
var statearr_26899_26925 = state_26885__$1;
(statearr_26899_26925[(2)] = inst_26879);

(statearr_26899_26925[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26886 === (10))){
var inst_26871 = (state_26885[(2)]);
var state_26885__$1 = state_26885;
var statearr_26900_26926 = state_26885__$1;
(statearr_26900_26926[(2)] = inst_26871);

(statearr_26900_26926[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26886 === (8))){
var inst_26868 = cljs.core.async.close_BANG_(to);
var state_26885__$1 = state_26885;
var statearr_26901_26927 = state_26885__$1;
(statearr_26901_26927[(2)] = inst_26868);

(statearr_26901_26927[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__26728__auto___26913))
;
return ((function (switch__26612__auto__,c__26728__auto___26913){
return (function() {
var cljs$core$async$state_machine__26613__auto__ = null;
var cljs$core$async$state_machine__26613__auto____0 = (function (){
var statearr_26905 = [null,null,null,null,null,null,null,null];
(statearr_26905[(0)] = cljs$core$async$state_machine__26613__auto__);

(statearr_26905[(1)] = (1));

return statearr_26905;
});
var cljs$core$async$state_machine__26613__auto____1 = (function (state_26885){
while(true){
var ret_value__26614__auto__ = (function (){try{while(true){
var result__26615__auto__ = switch__26612__auto__(state_26885);
if(cljs.core.keyword_identical_QMARK_(result__26615__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__26615__auto__;
}
break;
}
}catch (e26906){if((e26906 instanceof Object)){
var ex__26616__auto__ = e26906;
var statearr_26907_26928 = state_26885;
(statearr_26907_26928[(5)] = ex__26616__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_26885);

return cljs.core.cst$kw$recur;
} else {
throw e26906;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__26614__auto__,cljs.core.cst$kw$recur)){
var G__26929 = state_26885;
state_26885 = G__26929;
continue;
} else {
return ret_value__26614__auto__;
}
break;
}
});
cljs$core$async$state_machine__26613__auto__ = function(state_26885){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26613__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26613__auto____1.call(this,state_26885);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26613__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26613__auto____0;
cljs$core$async$state_machine__26613__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26613__auto____1;
return cljs$core$async$state_machine__26613__auto__;
})()
;})(switch__26612__auto__,c__26728__auto___26913))
})();
var state__26730__auto__ = (function (){var statearr_26908 = (f__26729__auto__.cljs$core$IFn$_invoke$arity$0 ? f__26729__auto__.cljs$core$IFn$_invoke$arity$0() : f__26729__auto__.call(null));
(statearr_26908[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26728__auto___26913);

return statearr_26908;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__26730__auto__);
});})(c__26728__auto___26913))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process = ((function (jobs,results){
return (function (p__27117){
var vec__27118 = p__27117;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27118,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27118,(1),null);
var job = vec__27118;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__26728__auto___27304 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__26728__auto___27304,res,vec__27118,v,p,job,jobs,results){
return (function (){
var f__26729__auto__ = (function (){var switch__26612__auto__ = ((function (c__26728__auto___27304,res,vec__27118,v,p,job,jobs,results){
return (function (state_27125){
var state_val_27126 = (state_27125[(1)]);
if((state_val_27126 === (1))){
var state_27125__$1 = state_27125;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_27125__$1,(2),res,v);
} else {
if((state_val_27126 === (2))){
var inst_27122 = (state_27125[(2)]);
var inst_27123 = cljs.core.async.close_BANG_(res);
var state_27125__$1 = (function (){var statearr_27127 = state_27125;
(statearr_27127[(7)] = inst_27122);

return statearr_27127;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_27125__$1,inst_27123);
} else {
return null;
}
}
});})(c__26728__auto___27304,res,vec__27118,v,p,job,jobs,results))
;
return ((function (switch__26612__auto__,c__26728__auto___27304,res,vec__27118,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__26613__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__26613__auto____0 = (function (){
var statearr_27131 = [null,null,null,null,null,null,null,null];
(statearr_27131[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__26613__auto__);

(statearr_27131[(1)] = (1));

return statearr_27131;
});
var cljs$core$async$pipeline_STAR__$_state_machine__26613__auto____1 = (function (state_27125){
while(true){
var ret_value__26614__auto__ = (function (){try{while(true){
var result__26615__auto__ = switch__26612__auto__(state_27125);
if(cljs.core.keyword_identical_QMARK_(result__26615__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__26615__auto__;
}
break;
}
}catch (e27132){if((e27132 instanceof Object)){
var ex__26616__auto__ = e27132;
var statearr_27133_27305 = state_27125;
(statearr_27133_27305[(5)] = ex__26616__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_27125);

return cljs.core.cst$kw$recur;
} else {
throw e27132;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__26614__auto__,cljs.core.cst$kw$recur)){
var G__27306 = state_27125;
state_27125 = G__27306;
continue;
} else {
return ret_value__26614__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__26613__auto__ = function(state_27125){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__26613__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__26613__auto____1.call(this,state_27125);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__26613__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__26613__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__26613__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__26613__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__26613__auto__;
})()
;})(switch__26612__auto__,c__26728__auto___27304,res,vec__27118,v,p,job,jobs,results))
})();
var state__26730__auto__ = (function (){var statearr_27134 = (f__26729__auto__.cljs$core$IFn$_invoke$arity$0 ? f__26729__auto__.cljs$core$IFn$_invoke$arity$0() : f__26729__auto__.call(null));
(statearr_27134[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26728__auto___27304);

return statearr_27134;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__26730__auto__);
});})(c__26728__auto___27304,res,vec__27118,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__27135){
var vec__27136 = p__27135;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27136,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27136,(1),null);
var job = vec__27136;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results,process))
;
var n__18782__auto___27307 = n;
var __27308 = (0);
while(true){
if((__27308 < n__18782__auto___27307)){
var G__27139_27309 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__27139_27309) {
case "compute":
var c__26728__auto___27311 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__27308,c__26728__auto___27311,G__27139_27309,n__18782__auto___27307,jobs,results,process,async){
return (function (){
var f__26729__auto__ = (function (){var switch__26612__auto__ = ((function (__27308,c__26728__auto___27311,G__27139_27309,n__18782__auto___27307,jobs,results,process,async){
return (function (state_27152){
var state_val_27153 = (state_27152[(1)]);
if((state_val_27153 === (1))){
var state_27152__$1 = state_27152;
var statearr_27154_27312 = state_27152__$1;
(statearr_27154_27312[(2)] = null);

(statearr_27154_27312[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27153 === (2))){
var state_27152__$1 = state_27152;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_27152__$1,(4),jobs);
} else {
if((state_val_27153 === (3))){
var inst_27150 = (state_27152[(2)]);
var state_27152__$1 = state_27152;
return cljs.core.async.impl.ioc_helpers.return_chan(state_27152__$1,inst_27150);
} else {
if((state_val_27153 === (4))){
var inst_27142 = (state_27152[(2)]);
var inst_27143 = process(inst_27142);
var state_27152__$1 = state_27152;
if(cljs.core.truth_(inst_27143)){
var statearr_27155_27313 = state_27152__$1;
(statearr_27155_27313[(1)] = (5));

} else {
var statearr_27156_27314 = state_27152__$1;
(statearr_27156_27314[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_27153 === (5))){
var state_27152__$1 = state_27152;
var statearr_27157_27315 = state_27152__$1;
(statearr_27157_27315[(2)] = null);

(statearr_27157_27315[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27153 === (6))){
var state_27152__$1 = state_27152;
var statearr_27158_27316 = state_27152__$1;
(statearr_27158_27316[(2)] = null);

(statearr_27158_27316[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27153 === (7))){
var inst_27148 = (state_27152[(2)]);
var state_27152__$1 = state_27152;
var statearr_27159_27317 = state_27152__$1;
(statearr_27159_27317[(2)] = inst_27148);

(statearr_27159_27317[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
});})(__27308,c__26728__auto___27311,G__27139_27309,n__18782__auto___27307,jobs,results,process,async))
;
return ((function (__27308,switch__26612__auto__,c__26728__auto___27311,G__27139_27309,n__18782__auto___27307,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__26613__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__26613__auto____0 = (function (){
var statearr_27163 = [null,null,null,null,null,null,null];
(statearr_27163[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__26613__auto__);

(statearr_27163[(1)] = (1));

return statearr_27163;
});
var cljs$core$async$pipeline_STAR__$_state_machine__26613__auto____1 = (function (state_27152){
while(true){
var ret_value__26614__auto__ = (function (){try{while(true){
var result__26615__auto__ = switch__26612__auto__(state_27152);
if(cljs.core.keyword_identical_QMARK_(result__26615__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__26615__auto__;
}
break;
}
}catch (e27164){if((e27164 instanceof Object)){
var ex__26616__auto__ = e27164;
var statearr_27165_27318 = state_27152;
(statearr_27165_27318[(5)] = ex__26616__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_27152);

return cljs.core.cst$kw$recur;
} else {
throw e27164;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__26614__auto__,cljs.core.cst$kw$recur)){
var G__27319 = state_27152;
state_27152 = G__27319;
continue;
} else {
return ret_value__26614__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__26613__auto__ = function(state_27152){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__26613__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__26613__auto____1.call(this,state_27152);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__26613__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__26613__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__26613__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__26613__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__26613__auto__;
})()
;})(__27308,switch__26612__auto__,c__26728__auto___27311,G__27139_27309,n__18782__auto___27307,jobs,results,process,async))
})();
var state__26730__auto__ = (function (){var statearr_27166 = (f__26729__auto__.cljs$core$IFn$_invoke$arity$0 ? f__26729__auto__.cljs$core$IFn$_invoke$arity$0() : f__26729__auto__.call(null));
(statearr_27166[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26728__auto___27311);

return statearr_27166;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__26730__auto__);
});})(__27308,c__26728__auto___27311,G__27139_27309,n__18782__auto___27307,jobs,results,process,async))
);


break;
case "async":
var c__26728__auto___27320 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__27308,c__26728__auto___27320,G__27139_27309,n__18782__auto___27307,jobs,results,process,async){
return (function (){
var f__26729__auto__ = (function (){var switch__26612__auto__ = ((function (__27308,c__26728__auto___27320,G__27139_27309,n__18782__auto___27307,jobs,results,process,async){
return (function (state_27179){
var state_val_27180 = (state_27179[(1)]);
if((state_val_27180 === (1))){
var state_27179__$1 = state_27179;
var statearr_27181_27321 = state_27179__$1;
(statearr_27181_27321[(2)] = null);

(statearr_27181_27321[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27180 === (2))){
var state_27179__$1 = state_27179;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_27179__$1,(4),jobs);
} else {
if((state_val_27180 === (3))){
var inst_27177 = (state_27179[(2)]);
var state_27179__$1 = state_27179;
return cljs.core.async.impl.ioc_helpers.return_chan(state_27179__$1,inst_27177);
} else {
if((state_val_27180 === (4))){
var inst_27169 = (state_27179[(2)]);
var inst_27170 = async(inst_27169);
var state_27179__$1 = state_27179;
if(cljs.core.truth_(inst_27170)){
var statearr_27182_27322 = state_27179__$1;
(statearr_27182_27322[(1)] = (5));

} else {
var statearr_27183_27323 = state_27179__$1;
(statearr_27183_27323[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_27180 === (5))){
var state_27179__$1 = state_27179;
var statearr_27184_27324 = state_27179__$1;
(statearr_27184_27324[(2)] = null);

(statearr_27184_27324[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27180 === (6))){
var state_27179__$1 = state_27179;
var statearr_27185_27325 = state_27179__$1;
(statearr_27185_27325[(2)] = null);

(statearr_27185_27325[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27180 === (7))){
var inst_27175 = (state_27179[(2)]);
var state_27179__$1 = state_27179;
var statearr_27186_27326 = state_27179__$1;
(statearr_27186_27326[(2)] = inst_27175);

(statearr_27186_27326[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
});})(__27308,c__26728__auto___27320,G__27139_27309,n__18782__auto___27307,jobs,results,process,async))
;
return ((function (__27308,switch__26612__auto__,c__26728__auto___27320,G__27139_27309,n__18782__auto___27307,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__26613__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__26613__auto____0 = (function (){
var statearr_27190 = [null,null,null,null,null,null,null];
(statearr_27190[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__26613__auto__);

(statearr_27190[(1)] = (1));

return statearr_27190;
});
var cljs$core$async$pipeline_STAR__$_state_machine__26613__auto____1 = (function (state_27179){
while(true){
var ret_value__26614__auto__ = (function (){try{while(true){
var result__26615__auto__ = switch__26612__auto__(state_27179);
if(cljs.core.keyword_identical_QMARK_(result__26615__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__26615__auto__;
}
break;
}
}catch (e27191){if((e27191 instanceof Object)){
var ex__26616__auto__ = e27191;
var statearr_27192_27327 = state_27179;
(statearr_27192_27327[(5)] = ex__26616__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_27179);

return cljs.core.cst$kw$recur;
} else {
throw e27191;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__26614__auto__,cljs.core.cst$kw$recur)){
var G__27328 = state_27179;
state_27179 = G__27328;
continue;
} else {
return ret_value__26614__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__26613__auto__ = function(state_27179){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__26613__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__26613__auto____1.call(this,state_27179);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__26613__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__26613__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__26613__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__26613__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__26613__auto__;
})()
;})(__27308,switch__26612__auto__,c__26728__auto___27320,G__27139_27309,n__18782__auto___27307,jobs,results,process,async))
})();
var state__26730__auto__ = (function (){var statearr_27193 = (f__26729__auto__.cljs$core$IFn$_invoke$arity$0 ? f__26729__auto__.cljs$core$IFn$_invoke$arity$0() : f__26729__auto__.call(null));
(statearr_27193[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26728__auto___27320);

return statearr_27193;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__26730__auto__);
});})(__27308,c__26728__auto___27320,G__27139_27309,n__18782__auto___27307,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__27329 = (__27308 + (1));
__27308 = G__27329;
continue;
} else {
}
break;
}

var c__26728__auto___27330 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__26728__auto___27330,jobs,results,process,async){
return (function (){
var f__26729__auto__ = (function (){var switch__26612__auto__ = ((function (c__26728__auto___27330,jobs,results,process,async){
return (function (state_27215){
var state_val_27216 = (state_27215[(1)]);
if((state_val_27216 === (1))){
var state_27215__$1 = state_27215;
var statearr_27217_27331 = state_27215__$1;
(statearr_27217_27331[(2)] = null);

(statearr_27217_27331[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27216 === (2))){
var state_27215__$1 = state_27215;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_27215__$1,(4),from);
} else {
if((state_val_27216 === (3))){
var inst_27213 = (state_27215[(2)]);
var state_27215__$1 = state_27215;
return cljs.core.async.impl.ioc_helpers.return_chan(state_27215__$1,inst_27213);
} else {
if((state_val_27216 === (4))){
var inst_27196 = (state_27215[(7)]);
var inst_27196__$1 = (state_27215[(2)]);
var inst_27197 = (inst_27196__$1 == null);
var state_27215__$1 = (function (){var statearr_27218 = state_27215;
(statearr_27218[(7)] = inst_27196__$1);

return statearr_27218;
})();
if(cljs.core.truth_(inst_27197)){
var statearr_27219_27332 = state_27215__$1;
(statearr_27219_27332[(1)] = (5));

} else {
var statearr_27220_27333 = state_27215__$1;
(statearr_27220_27333[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_27216 === (5))){
var inst_27199 = cljs.core.async.close_BANG_(jobs);
var state_27215__$1 = state_27215;
var statearr_27221_27334 = state_27215__$1;
(statearr_27221_27334[(2)] = inst_27199);

(statearr_27221_27334[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27216 === (6))){
var inst_27196 = (state_27215[(7)]);
var inst_27201 = (state_27215[(8)]);
var inst_27201__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_27202 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_27203 = [inst_27196,inst_27201__$1];
var inst_27204 = (new cljs.core.PersistentVector(null,2,(5),inst_27202,inst_27203,null));
var state_27215__$1 = (function (){var statearr_27222 = state_27215;
(statearr_27222[(8)] = inst_27201__$1);

return statearr_27222;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_27215__$1,(8),jobs,inst_27204);
} else {
if((state_val_27216 === (7))){
var inst_27211 = (state_27215[(2)]);
var state_27215__$1 = state_27215;
var statearr_27223_27335 = state_27215__$1;
(statearr_27223_27335[(2)] = inst_27211);

(statearr_27223_27335[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27216 === (8))){
var inst_27201 = (state_27215[(8)]);
var inst_27206 = (state_27215[(2)]);
var state_27215__$1 = (function (){var statearr_27224 = state_27215;
(statearr_27224[(9)] = inst_27206);

return statearr_27224;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_27215__$1,(9),results,inst_27201);
} else {
if((state_val_27216 === (9))){
var inst_27208 = (state_27215[(2)]);
var state_27215__$1 = (function (){var statearr_27225 = state_27215;
(statearr_27225[(10)] = inst_27208);

return statearr_27225;
})();
var statearr_27226_27336 = state_27215__$1;
(statearr_27226_27336[(2)] = null);

(statearr_27226_27336[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
});})(c__26728__auto___27330,jobs,results,process,async))
;
return ((function (switch__26612__auto__,c__26728__auto___27330,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__26613__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__26613__auto____0 = (function (){
var statearr_27230 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_27230[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__26613__auto__);

(statearr_27230[(1)] = (1));

return statearr_27230;
});
var cljs$core$async$pipeline_STAR__$_state_machine__26613__auto____1 = (function (state_27215){
while(true){
var ret_value__26614__auto__ = (function (){try{while(true){
var result__26615__auto__ = switch__26612__auto__(state_27215);
if(cljs.core.keyword_identical_QMARK_(result__26615__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__26615__auto__;
}
break;
}
}catch (e27231){if((e27231 instanceof Object)){
var ex__26616__auto__ = e27231;
var statearr_27232_27337 = state_27215;
(statearr_27232_27337[(5)] = ex__26616__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_27215);

return cljs.core.cst$kw$recur;
} else {
throw e27231;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__26614__auto__,cljs.core.cst$kw$recur)){
var G__27338 = state_27215;
state_27215 = G__27338;
continue;
} else {
return ret_value__26614__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__26613__auto__ = function(state_27215){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__26613__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__26613__auto____1.call(this,state_27215);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__26613__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__26613__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__26613__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__26613__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__26613__auto__;
})()
;})(switch__26612__auto__,c__26728__auto___27330,jobs,results,process,async))
})();
var state__26730__auto__ = (function (){var statearr_27233 = (f__26729__auto__.cljs$core$IFn$_invoke$arity$0 ? f__26729__auto__.cljs$core$IFn$_invoke$arity$0() : f__26729__auto__.call(null));
(statearr_27233[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26728__auto___27330);

return statearr_27233;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__26730__auto__);
});})(c__26728__auto___27330,jobs,results,process,async))
);


var c__26728__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__26728__auto__,jobs,results,process,async){
return (function (){
var f__26729__auto__ = (function (){var switch__26612__auto__ = ((function (c__26728__auto__,jobs,results,process,async){
return (function (state_27271){
var state_val_27272 = (state_27271[(1)]);
if((state_val_27272 === (7))){
var inst_27267 = (state_27271[(2)]);
var state_27271__$1 = state_27271;
var statearr_27273_27339 = state_27271__$1;
(statearr_27273_27339[(2)] = inst_27267);

(statearr_27273_27339[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27272 === (20))){
var state_27271__$1 = state_27271;
var statearr_27274_27340 = state_27271__$1;
(statearr_27274_27340[(2)] = null);

(statearr_27274_27340[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27272 === (1))){
var state_27271__$1 = state_27271;
var statearr_27275_27341 = state_27271__$1;
(statearr_27275_27341[(2)] = null);

(statearr_27275_27341[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27272 === (4))){
var inst_27236 = (state_27271[(7)]);
var inst_27236__$1 = (state_27271[(2)]);
var inst_27237 = (inst_27236__$1 == null);
var state_27271__$1 = (function (){var statearr_27276 = state_27271;
(statearr_27276[(7)] = inst_27236__$1);

return statearr_27276;
})();
if(cljs.core.truth_(inst_27237)){
var statearr_27277_27342 = state_27271__$1;
(statearr_27277_27342[(1)] = (5));

} else {
var statearr_27278_27343 = state_27271__$1;
(statearr_27278_27343[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_27272 === (15))){
var inst_27249 = (state_27271[(8)]);
var state_27271__$1 = state_27271;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_27271__$1,(18),to,inst_27249);
} else {
if((state_val_27272 === (21))){
var inst_27262 = (state_27271[(2)]);
var state_27271__$1 = state_27271;
var statearr_27279_27344 = state_27271__$1;
(statearr_27279_27344[(2)] = inst_27262);

(statearr_27279_27344[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27272 === (13))){
var inst_27264 = (state_27271[(2)]);
var state_27271__$1 = (function (){var statearr_27280 = state_27271;
(statearr_27280[(9)] = inst_27264);

return statearr_27280;
})();
var statearr_27281_27345 = state_27271__$1;
(statearr_27281_27345[(2)] = null);

(statearr_27281_27345[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27272 === (6))){
var inst_27236 = (state_27271[(7)]);
var state_27271__$1 = state_27271;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_27271__$1,(11),inst_27236);
} else {
if((state_val_27272 === (17))){
var inst_27257 = (state_27271[(2)]);
var state_27271__$1 = state_27271;
if(cljs.core.truth_(inst_27257)){
var statearr_27282_27346 = state_27271__$1;
(statearr_27282_27346[(1)] = (19));

} else {
var statearr_27283_27347 = state_27271__$1;
(statearr_27283_27347[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_27272 === (3))){
var inst_27269 = (state_27271[(2)]);
var state_27271__$1 = state_27271;
return cljs.core.async.impl.ioc_helpers.return_chan(state_27271__$1,inst_27269);
} else {
if((state_val_27272 === (12))){
var inst_27246 = (state_27271[(10)]);
var state_27271__$1 = state_27271;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_27271__$1,(14),inst_27246);
} else {
if((state_val_27272 === (2))){
var state_27271__$1 = state_27271;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_27271__$1,(4),results);
} else {
if((state_val_27272 === (19))){
var state_27271__$1 = state_27271;
var statearr_27284_27348 = state_27271__$1;
(statearr_27284_27348[(2)] = null);

(statearr_27284_27348[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27272 === (11))){
var inst_27246 = (state_27271[(2)]);
var state_27271__$1 = (function (){var statearr_27285 = state_27271;
(statearr_27285[(10)] = inst_27246);

return statearr_27285;
})();
var statearr_27286_27349 = state_27271__$1;
(statearr_27286_27349[(2)] = null);

(statearr_27286_27349[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27272 === (9))){
var state_27271__$1 = state_27271;
var statearr_27287_27350 = state_27271__$1;
(statearr_27287_27350[(2)] = null);

(statearr_27287_27350[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27272 === (5))){
var state_27271__$1 = state_27271;
if(cljs.core.truth_(close_QMARK_)){
var statearr_27288_27351 = state_27271__$1;
(statearr_27288_27351[(1)] = (8));

} else {
var statearr_27289_27352 = state_27271__$1;
(statearr_27289_27352[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_27272 === (14))){
var inst_27249 = (state_27271[(8)]);
var inst_27251 = (state_27271[(11)]);
var inst_27249__$1 = (state_27271[(2)]);
var inst_27250 = (inst_27249__$1 == null);
var inst_27251__$1 = cljs.core.not(inst_27250);
var state_27271__$1 = (function (){var statearr_27290 = state_27271;
(statearr_27290[(8)] = inst_27249__$1);

(statearr_27290[(11)] = inst_27251__$1);

return statearr_27290;
})();
if(inst_27251__$1){
var statearr_27291_27353 = state_27271__$1;
(statearr_27291_27353[(1)] = (15));

} else {
var statearr_27292_27354 = state_27271__$1;
(statearr_27292_27354[(1)] = (16));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_27272 === (16))){
var inst_27251 = (state_27271[(11)]);
var state_27271__$1 = state_27271;
var statearr_27293_27355 = state_27271__$1;
(statearr_27293_27355[(2)] = inst_27251);

(statearr_27293_27355[(1)] = (17));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27272 === (10))){
var inst_27243 = (state_27271[(2)]);
var state_27271__$1 = state_27271;
var statearr_27294_27356 = state_27271__$1;
(statearr_27294_27356[(2)] = inst_27243);

(statearr_27294_27356[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27272 === (18))){
var inst_27254 = (state_27271[(2)]);
var state_27271__$1 = state_27271;
var statearr_27295_27357 = state_27271__$1;
(statearr_27295_27357[(2)] = inst_27254);

(statearr_27295_27357[(1)] = (17));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27272 === (8))){
var inst_27240 = cljs.core.async.close_BANG_(to);
var state_27271__$1 = state_27271;
var statearr_27296_27358 = state_27271__$1;
(statearr_27296_27358[(2)] = inst_27240);

(statearr_27296_27358[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__26728__auto__,jobs,results,process,async))
;
return ((function (switch__26612__auto__,c__26728__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__26613__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__26613__auto____0 = (function (){
var statearr_27300 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27300[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__26613__auto__);

(statearr_27300[(1)] = (1));

return statearr_27300;
});
var cljs$core$async$pipeline_STAR__$_state_machine__26613__auto____1 = (function (state_27271){
while(true){
var ret_value__26614__auto__ = (function (){try{while(true){
var result__26615__auto__ = switch__26612__auto__(state_27271);
if(cljs.core.keyword_identical_QMARK_(result__26615__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__26615__auto__;
}
break;
}
}catch (e27301){if((e27301 instanceof Object)){
var ex__26616__auto__ = e27301;
var statearr_27302_27359 = state_27271;
(statearr_27302_27359[(5)] = ex__26616__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_27271);

return cljs.core.cst$kw$recur;
} else {
throw e27301;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__26614__auto__,cljs.core.cst$kw$recur)){
var G__27360 = state_27271;
state_27271 = G__27360;
continue;
} else {
return ret_value__26614__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__26613__auto__ = function(state_27271){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__26613__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__26613__auto____1.call(this,state_27271);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__26613__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__26613__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__26613__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__26613__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__26613__auto__;
})()
;})(switch__26612__auto__,c__26728__auto__,jobs,results,process,async))
})();
var state__26730__auto__ = (function (){var statearr_27303 = (f__26729__auto__.cljs$core$IFn$_invoke$arity$0 ? f__26729__auto__.cljs$core$IFn$_invoke$arity$0() : f__26729__auto__.call(null));
(statearr_27303[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26728__auto__);

return statearr_27303;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__26730__auto__);
});})(c__26728__auto__,jobs,results,process,async))
);

return c__26728__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var args27361 = [];
var len__18952__auto___27364 = arguments.length;
var i__18953__auto___27365 = (0);
while(true){
if((i__18953__auto___27365 < len__18952__auto___27364)){
args27361.push((arguments[i__18953__auto___27365]));

var G__27366 = (i__18953__auto___27365 + (1));
i__18953__auto___27365 = G__27366;
continue;
} else {
}
break;
}

var G__27363 = args27361.length;
switch (G__27363) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27361.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,cljs.core.cst$kw$async);
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var args27368 = [];
var len__18952__auto___27371 = arguments.length;
var i__18953__auto___27372 = (0);
while(true){
if((i__18953__auto___27372 < len__18952__auto___27371)){
args27368.push((arguments[i__18953__auto___27372]));

var G__27373 = (i__18953__auto___27372 + (1));
i__18953__auto___27372 = G__27373;
continue;
} else {
}
break;
}

var G__27370 = args27368.length;
switch (G__27370) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27368.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,cljs.core.cst$kw$compute);
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var args27375 = [];
var len__18952__auto___27428 = arguments.length;
var i__18953__auto___27429 = (0);
while(true){
if((i__18953__auto___27429 < len__18952__auto___27428)){
args27375.push((arguments[i__18953__auto___27429]));

var G__27430 = (i__18953__auto___27429 + (1));
i__18953__auto___27429 = G__27430;
continue;
} else {
}
break;
}

var G__27377 = args27375.length;
switch (G__27377) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27375.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__26728__auto___27432 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__26728__auto___27432,tc,fc){
return (function (){
var f__26729__auto__ = (function (){var switch__26612__auto__ = ((function (c__26728__auto___27432,tc,fc){
return (function (state_27403){
var state_val_27404 = (state_27403[(1)]);
if((state_val_27404 === (7))){
var inst_27399 = (state_27403[(2)]);
var state_27403__$1 = state_27403;
var statearr_27405_27433 = state_27403__$1;
(statearr_27405_27433[(2)] = inst_27399);

(statearr_27405_27433[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27404 === (1))){
var state_27403__$1 = state_27403;
var statearr_27406_27434 = state_27403__$1;
(statearr_27406_27434[(2)] = null);

(statearr_27406_27434[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27404 === (4))){
var inst_27380 = (state_27403[(7)]);
var inst_27380__$1 = (state_27403[(2)]);
var inst_27381 = (inst_27380__$1 == null);
var state_27403__$1 = (function (){var statearr_27407 = state_27403;
(statearr_27407[(7)] = inst_27380__$1);

return statearr_27407;
})();
if(cljs.core.truth_(inst_27381)){
var statearr_27408_27435 = state_27403__$1;
(statearr_27408_27435[(1)] = (5));

} else {
var statearr_27409_27436 = state_27403__$1;
(statearr_27409_27436[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_27404 === (13))){
var state_27403__$1 = state_27403;
var statearr_27410_27437 = state_27403__$1;
(statearr_27410_27437[(2)] = null);

(statearr_27410_27437[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27404 === (6))){
var inst_27380 = (state_27403[(7)]);
var inst_27386 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_27380) : p.call(null,inst_27380));
var state_27403__$1 = state_27403;
if(cljs.core.truth_(inst_27386)){
var statearr_27411_27438 = state_27403__$1;
(statearr_27411_27438[(1)] = (9));

} else {
var statearr_27412_27439 = state_27403__$1;
(statearr_27412_27439[(1)] = (10));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_27404 === (3))){
var inst_27401 = (state_27403[(2)]);
var state_27403__$1 = state_27403;
return cljs.core.async.impl.ioc_helpers.return_chan(state_27403__$1,inst_27401);
} else {
if((state_val_27404 === (12))){
var state_27403__$1 = state_27403;
var statearr_27413_27440 = state_27403__$1;
(statearr_27413_27440[(2)] = null);

(statearr_27413_27440[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27404 === (2))){
var state_27403__$1 = state_27403;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_27403__$1,(4),ch);
} else {
if((state_val_27404 === (11))){
var inst_27380 = (state_27403[(7)]);
var inst_27390 = (state_27403[(2)]);
var state_27403__$1 = state_27403;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_27403__$1,(8),inst_27390,inst_27380);
} else {
if((state_val_27404 === (9))){
var state_27403__$1 = state_27403;
var statearr_27414_27441 = state_27403__$1;
(statearr_27414_27441[(2)] = tc);

(statearr_27414_27441[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27404 === (5))){
var inst_27383 = cljs.core.async.close_BANG_(tc);
var inst_27384 = cljs.core.async.close_BANG_(fc);
var state_27403__$1 = (function (){var statearr_27415 = state_27403;
(statearr_27415[(8)] = inst_27383);

return statearr_27415;
})();
var statearr_27416_27442 = state_27403__$1;
(statearr_27416_27442[(2)] = inst_27384);

(statearr_27416_27442[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27404 === (14))){
var inst_27397 = (state_27403[(2)]);
var state_27403__$1 = state_27403;
var statearr_27417_27443 = state_27403__$1;
(statearr_27417_27443[(2)] = inst_27397);

(statearr_27417_27443[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27404 === (10))){
var state_27403__$1 = state_27403;
var statearr_27418_27444 = state_27403__$1;
(statearr_27418_27444[(2)] = fc);

(statearr_27418_27444[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27404 === (8))){
var inst_27392 = (state_27403[(2)]);
var state_27403__$1 = state_27403;
if(cljs.core.truth_(inst_27392)){
var statearr_27419_27445 = state_27403__$1;
(statearr_27419_27445[(1)] = (12));

} else {
var statearr_27420_27446 = state_27403__$1;
(statearr_27420_27446[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__26728__auto___27432,tc,fc))
;
return ((function (switch__26612__auto__,c__26728__auto___27432,tc,fc){
return (function() {
var cljs$core$async$state_machine__26613__auto__ = null;
var cljs$core$async$state_machine__26613__auto____0 = (function (){
var statearr_27424 = [null,null,null,null,null,null,null,null,null];
(statearr_27424[(0)] = cljs$core$async$state_machine__26613__auto__);

(statearr_27424[(1)] = (1));

return statearr_27424;
});
var cljs$core$async$state_machine__26613__auto____1 = (function (state_27403){
while(true){
var ret_value__26614__auto__ = (function (){try{while(true){
var result__26615__auto__ = switch__26612__auto__(state_27403);
if(cljs.core.keyword_identical_QMARK_(result__26615__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__26615__auto__;
}
break;
}
}catch (e27425){if((e27425 instanceof Object)){
var ex__26616__auto__ = e27425;
var statearr_27426_27447 = state_27403;
(statearr_27426_27447[(5)] = ex__26616__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_27403);

return cljs.core.cst$kw$recur;
} else {
throw e27425;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__26614__auto__,cljs.core.cst$kw$recur)){
var G__27448 = state_27403;
state_27403 = G__27448;
continue;
} else {
return ret_value__26614__auto__;
}
break;
}
});
cljs$core$async$state_machine__26613__auto__ = function(state_27403){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26613__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26613__auto____1.call(this,state_27403);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26613__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26613__auto____0;
cljs$core$async$state_machine__26613__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26613__auto____1;
return cljs$core$async$state_machine__26613__auto__;
})()
;})(switch__26612__auto__,c__26728__auto___27432,tc,fc))
})();
var state__26730__auto__ = (function (){var statearr_27427 = (f__26729__auto__.cljs$core$IFn$_invoke$arity$0 ? f__26729__auto__.cljs$core$IFn$_invoke$arity$0() : f__26729__auto__.call(null));
(statearr_27427[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26728__auto___27432);

return statearr_27427;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__26730__auto__);
});})(c__26728__auto___27432,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__26728__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__26728__auto__){
return (function (){
var f__26729__auto__ = (function (){var switch__26612__auto__ = ((function (c__26728__auto__){
return (function (state_27512){
var state_val_27513 = (state_27512[(1)]);
if((state_val_27513 === (7))){
var inst_27508 = (state_27512[(2)]);
var state_27512__$1 = state_27512;
var statearr_27514_27535 = state_27512__$1;
(statearr_27514_27535[(2)] = inst_27508);

(statearr_27514_27535[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27513 === (1))){
var inst_27492 = init;
var state_27512__$1 = (function (){var statearr_27515 = state_27512;
(statearr_27515[(7)] = inst_27492);

return statearr_27515;
})();
var statearr_27516_27536 = state_27512__$1;
(statearr_27516_27536[(2)] = null);

(statearr_27516_27536[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27513 === (4))){
var inst_27495 = (state_27512[(8)]);
var inst_27495__$1 = (state_27512[(2)]);
var inst_27496 = (inst_27495__$1 == null);
var state_27512__$1 = (function (){var statearr_27517 = state_27512;
(statearr_27517[(8)] = inst_27495__$1);

return statearr_27517;
})();
if(cljs.core.truth_(inst_27496)){
var statearr_27518_27537 = state_27512__$1;
(statearr_27518_27537[(1)] = (5));

} else {
var statearr_27519_27538 = state_27512__$1;
(statearr_27519_27538[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_27513 === (6))){
var inst_27492 = (state_27512[(7)]);
var inst_27499 = (state_27512[(9)]);
var inst_27495 = (state_27512[(8)]);
var inst_27499__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_27492,inst_27495) : f.call(null,inst_27492,inst_27495));
var inst_27500 = cljs.core.reduced_QMARK_(inst_27499__$1);
var state_27512__$1 = (function (){var statearr_27520 = state_27512;
(statearr_27520[(9)] = inst_27499__$1);

return statearr_27520;
})();
if(inst_27500){
var statearr_27521_27539 = state_27512__$1;
(statearr_27521_27539[(1)] = (8));

} else {
var statearr_27522_27540 = state_27512__$1;
(statearr_27522_27540[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_27513 === (3))){
var inst_27510 = (state_27512[(2)]);
var state_27512__$1 = state_27512;
return cljs.core.async.impl.ioc_helpers.return_chan(state_27512__$1,inst_27510);
} else {
if((state_val_27513 === (2))){
var state_27512__$1 = state_27512;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_27512__$1,(4),ch);
} else {
if((state_val_27513 === (9))){
var inst_27499 = (state_27512[(9)]);
var inst_27492 = inst_27499;
var state_27512__$1 = (function (){var statearr_27523 = state_27512;
(statearr_27523[(7)] = inst_27492);

return statearr_27523;
})();
var statearr_27524_27541 = state_27512__$1;
(statearr_27524_27541[(2)] = null);

(statearr_27524_27541[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27513 === (5))){
var inst_27492 = (state_27512[(7)]);
var state_27512__$1 = state_27512;
var statearr_27525_27542 = state_27512__$1;
(statearr_27525_27542[(2)] = inst_27492);

(statearr_27525_27542[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27513 === (10))){
var inst_27506 = (state_27512[(2)]);
var state_27512__$1 = state_27512;
var statearr_27526_27543 = state_27512__$1;
(statearr_27526_27543[(2)] = inst_27506);

(statearr_27526_27543[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27513 === (8))){
var inst_27499 = (state_27512[(9)]);
var inst_27502 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(inst_27499) : cljs.core.deref.call(null,inst_27499));
var state_27512__$1 = state_27512;
var statearr_27527_27544 = state_27512__$1;
(statearr_27527_27544[(2)] = inst_27502);

(statearr_27527_27544[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});})(c__26728__auto__))
;
return ((function (switch__26612__auto__,c__26728__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__26613__auto__ = null;
var cljs$core$async$reduce_$_state_machine__26613__auto____0 = (function (){
var statearr_27531 = [null,null,null,null,null,null,null,null,null,null];
(statearr_27531[(0)] = cljs$core$async$reduce_$_state_machine__26613__auto__);

(statearr_27531[(1)] = (1));

return statearr_27531;
});
var cljs$core$async$reduce_$_state_machine__26613__auto____1 = (function (state_27512){
while(true){
var ret_value__26614__auto__ = (function (){try{while(true){
var result__26615__auto__ = switch__26612__auto__(state_27512);
if(cljs.core.keyword_identical_QMARK_(result__26615__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__26615__auto__;
}
break;
}
}catch (e27532){if((e27532 instanceof Object)){
var ex__26616__auto__ = e27532;
var statearr_27533_27545 = state_27512;
(statearr_27533_27545[(5)] = ex__26616__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_27512);

return cljs.core.cst$kw$recur;
} else {
throw e27532;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__26614__auto__,cljs.core.cst$kw$recur)){
var G__27546 = state_27512;
state_27512 = G__27546;
continue;
} else {
return ret_value__26614__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__26613__auto__ = function(state_27512){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__26613__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__26613__auto____1.call(this,state_27512);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__26613__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__26613__auto____0;
cljs$core$async$reduce_$_state_machine__26613__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__26613__auto____1;
return cljs$core$async$reduce_$_state_machine__26613__auto__;
})()
;})(switch__26612__auto__,c__26728__auto__))
})();
var state__26730__auto__ = (function (){var statearr_27534 = (f__26729__auto__.cljs$core$IFn$_invoke$arity$0 ? f__26729__auto__.cljs$core$IFn$_invoke$arity$0() : f__26729__auto__.call(null));
(statearr_27534[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26728__auto__);

return statearr_27534;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__26730__auto__);
});})(c__26728__auto__))
);

return c__26728__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var args27547 = [];
var len__18952__auto___27599 = arguments.length;
var i__18953__auto___27600 = (0);
while(true){
if((i__18953__auto___27600 < len__18952__auto___27599)){
args27547.push((arguments[i__18953__auto___27600]));

var G__27601 = (i__18953__auto___27600 + (1));
i__18953__auto___27600 = G__27601;
continue;
} else {
}
break;
}

var G__27549 = args27547.length;
switch (G__27549) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27547.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__26728__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__26728__auto__){
return (function (){
var f__26729__auto__ = (function (){var switch__26612__auto__ = ((function (c__26728__auto__){
return (function (state_27574){
var state_val_27575 = (state_27574[(1)]);
if((state_val_27575 === (7))){
var inst_27556 = (state_27574[(2)]);
var state_27574__$1 = state_27574;
var statearr_27576_27603 = state_27574__$1;
(statearr_27576_27603[(2)] = inst_27556);

(statearr_27576_27603[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27575 === (1))){
var inst_27550 = cljs.core.seq(coll);
var inst_27551 = inst_27550;
var state_27574__$1 = (function (){var statearr_27577 = state_27574;
(statearr_27577[(7)] = inst_27551);

return statearr_27577;
})();
var statearr_27578_27604 = state_27574__$1;
(statearr_27578_27604[(2)] = null);

(statearr_27578_27604[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27575 === (4))){
var inst_27551 = (state_27574[(7)]);
var inst_27554 = cljs.core.first(inst_27551);
var state_27574__$1 = state_27574;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_27574__$1,(7),ch,inst_27554);
} else {
if((state_val_27575 === (13))){
var inst_27568 = (state_27574[(2)]);
var state_27574__$1 = state_27574;
var statearr_27579_27605 = state_27574__$1;
(statearr_27579_27605[(2)] = inst_27568);

(statearr_27579_27605[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27575 === (6))){
var inst_27559 = (state_27574[(2)]);
var state_27574__$1 = state_27574;
if(cljs.core.truth_(inst_27559)){
var statearr_27580_27606 = state_27574__$1;
(statearr_27580_27606[(1)] = (8));

} else {
var statearr_27581_27607 = state_27574__$1;
(statearr_27581_27607[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_27575 === (3))){
var inst_27572 = (state_27574[(2)]);
var state_27574__$1 = state_27574;
return cljs.core.async.impl.ioc_helpers.return_chan(state_27574__$1,inst_27572);
} else {
if((state_val_27575 === (12))){
var state_27574__$1 = state_27574;
var statearr_27582_27608 = state_27574__$1;
(statearr_27582_27608[(2)] = null);

(statearr_27582_27608[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27575 === (2))){
var inst_27551 = (state_27574[(7)]);
var state_27574__$1 = state_27574;
if(cljs.core.truth_(inst_27551)){
var statearr_27583_27609 = state_27574__$1;
(statearr_27583_27609[(1)] = (4));

} else {
var statearr_27584_27610 = state_27574__$1;
(statearr_27584_27610[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_27575 === (11))){
var inst_27565 = cljs.core.async.close_BANG_(ch);
var state_27574__$1 = state_27574;
var statearr_27585_27611 = state_27574__$1;
(statearr_27585_27611[(2)] = inst_27565);

(statearr_27585_27611[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27575 === (9))){
var state_27574__$1 = state_27574;
if(cljs.core.truth_(close_QMARK_)){
var statearr_27586_27612 = state_27574__$1;
(statearr_27586_27612[(1)] = (11));

} else {
var statearr_27587_27613 = state_27574__$1;
(statearr_27587_27613[(1)] = (12));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_27575 === (5))){
var inst_27551 = (state_27574[(7)]);
var state_27574__$1 = state_27574;
var statearr_27588_27614 = state_27574__$1;
(statearr_27588_27614[(2)] = inst_27551);

(statearr_27588_27614[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27575 === (10))){
var inst_27570 = (state_27574[(2)]);
var state_27574__$1 = state_27574;
var statearr_27589_27615 = state_27574__$1;
(statearr_27589_27615[(2)] = inst_27570);

(statearr_27589_27615[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27575 === (8))){
var inst_27551 = (state_27574[(7)]);
var inst_27561 = cljs.core.next(inst_27551);
var inst_27551__$1 = inst_27561;
var state_27574__$1 = (function (){var statearr_27590 = state_27574;
(statearr_27590[(7)] = inst_27551__$1);

return statearr_27590;
})();
var statearr_27591_27616 = state_27574__$1;
(statearr_27591_27616[(2)] = null);

(statearr_27591_27616[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__26728__auto__))
;
return ((function (switch__26612__auto__,c__26728__auto__){
return (function() {
var cljs$core$async$state_machine__26613__auto__ = null;
var cljs$core$async$state_machine__26613__auto____0 = (function (){
var statearr_27595 = [null,null,null,null,null,null,null,null];
(statearr_27595[(0)] = cljs$core$async$state_machine__26613__auto__);

(statearr_27595[(1)] = (1));

return statearr_27595;
});
var cljs$core$async$state_machine__26613__auto____1 = (function (state_27574){
while(true){
var ret_value__26614__auto__ = (function (){try{while(true){
var result__26615__auto__ = switch__26612__auto__(state_27574);
if(cljs.core.keyword_identical_QMARK_(result__26615__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__26615__auto__;
}
break;
}
}catch (e27596){if((e27596 instanceof Object)){
var ex__26616__auto__ = e27596;
var statearr_27597_27617 = state_27574;
(statearr_27597_27617[(5)] = ex__26616__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_27574);

return cljs.core.cst$kw$recur;
} else {
throw e27596;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__26614__auto__,cljs.core.cst$kw$recur)){
var G__27618 = state_27574;
state_27574 = G__27618;
continue;
} else {
return ret_value__26614__auto__;
}
break;
}
});
cljs$core$async$state_machine__26613__auto__ = function(state_27574){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26613__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26613__auto____1.call(this,state_27574);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26613__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26613__auto____0;
cljs$core$async$state_machine__26613__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26613__auto____1;
return cljs$core$async$state_machine__26613__auto__;
})()
;})(switch__26612__auto__,c__26728__auto__))
})();
var state__26730__auto__ = (function (){var statearr_27598 = (f__26729__auto__.cljs$core$IFn$_invoke$arity$0 ? f__26729__auto__.cljs$core$IFn$_invoke$arity$0() : f__26729__auto__.call(null));
(statearr_27598[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26728__auto__);

return statearr_27598;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__26730__auto__);
});})(c__26728__auto__))
);

return c__26728__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__18482__auto__ = (((_ == null))?null:_);
var m__18483__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__18482__auto__)]);
if(!((m__18483__auto__ == null))){
return (m__18483__auto__.cljs$core$IFn$_invoke$arity$1 ? m__18483__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__18483__auto__.call(null,_));
} else {
var m__18483__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__18483__auto____$1 == null))){
return (m__18483__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__18483__auto____$1.cljs$core$IFn$_invoke$arity$1(_) : m__18483__auto____$1.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__18482__auto__ = (((m == null))?null:m);
var m__18483__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__18482__auto__)]);
if(!((m__18483__auto__ == null))){
return (m__18483__auto__.cljs$core$IFn$_invoke$arity$3 ? m__18483__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__18483__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__18483__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__18483__auto____$1 == null))){
return (m__18483__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__18483__auto____$1.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__18483__auto____$1.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__18482__auto__ = (((m == null))?null:m);
var m__18483__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__18482__auto__)]);
if(!((m__18483__auto__ == null))){
return (m__18483__auto__.cljs$core$IFn$_invoke$arity$2 ? m__18483__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__18483__auto__.call(null,m,ch));
} else {
var m__18483__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__18483__auto____$1 == null))){
return (m__18483__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__18483__auto____$1.cljs$core$IFn$_invoke$arity$2(m,ch) : m__18483__auto____$1.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__18482__auto__ = (((m == null))?null:m);
var m__18483__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__18482__auto__)]);
if(!((m__18483__auto__ == null))){
return (m__18483__auto__.cljs$core$IFn$_invoke$arity$1 ? m__18483__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__18483__auto__.call(null,m));
} else {
var m__18483__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__18483__auto____$1 == null))){
return (m__18483__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__18483__auto____$1.cljs$core$IFn$_invoke$arity$1(m) : m__18483__auto____$1.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = (function (){var G__27847 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__27847) : cljs.core.atom.call(null,G__27847));
})();
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async27848 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27848 = (function (mult,ch,cs,meta27849){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta27849 = meta27849;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async27848.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_27850,meta27849__$1){
var self__ = this;
var _27850__$1 = this;
return (new cljs.core.async.t_cljs$core$async27848(self__.mult,self__.ch,self__.cs,meta27849__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async27848.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_27850){
var self__ = this;
var _27850__$1 = this;
return self__.meta27849;
});})(cs))
;

cljs.core.async.t_cljs$core$async27848.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async27848.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async27848.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async27848.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async27848.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async27848.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__27851_28075 = self__.cs;
var G__27852_28076 = cljs.core.PersistentArrayMap.EMPTY;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__27851_28075,G__27852_28076) : cljs.core.reset_BANG_.call(null,G__27851_28075,G__27852_28076));

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async27848.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$mult,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$ch], null))),cljs.core.cst$kw$doc,"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),cljs.core.cst$sym$ch,cljs.core.cst$sym$cs,cljs.core.cst$sym$meta27849], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async27848.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27848.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27848";

cljs.core.async.t_cljs$core$async27848.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__18421__auto__,writer__18422__auto__,opt__18423__auto__){
return cljs.core._write(writer__18422__auto__,"cljs.core.async/t_cljs$core$async27848");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async27848 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async27848(mult__$1,ch__$1,cs__$1,meta27849){
return (new cljs.core.async.t_cljs$core$async27848(mult__$1,ch__$1,cs__$1,meta27849));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async27848(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null) : cljs.core.atom.call(null,null));
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__26728__auto___28077 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__26728__auto___28077,cs,m,dchan,dctr,done){
return (function (){
var f__26729__auto__ = (function (){var switch__26612__auto__ = ((function (c__26728__auto___28077,cs,m,dchan,dctr,done){
return (function (state_27987){
var state_val_27988 = (state_27987[(1)]);
if((state_val_27988 === (7))){
var inst_27983 = (state_27987[(2)]);
var state_27987__$1 = state_27987;
var statearr_27989_28078 = state_27987__$1;
(statearr_27989_28078[(2)] = inst_27983);

(statearr_27989_28078[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27988 === (20))){
var inst_27886 = (state_27987[(7)]);
var inst_27898 = cljs.core.first(inst_27886);
var inst_27899 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_27898,(0),null);
var inst_27900 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_27898,(1),null);
var state_27987__$1 = (function (){var statearr_27990 = state_27987;
(statearr_27990[(8)] = inst_27899);

return statearr_27990;
})();
if(cljs.core.truth_(inst_27900)){
var statearr_27991_28079 = state_27987__$1;
(statearr_27991_28079[(1)] = (22));

} else {
var statearr_27992_28080 = state_27987__$1;
(statearr_27992_28080[(1)] = (23));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_27988 === (27))){
var inst_27928 = (state_27987[(9)]);
var inst_27935 = (state_27987[(10)]);
var inst_27855 = (state_27987[(11)]);
var inst_27930 = (state_27987[(12)]);
var inst_27935__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_27928,inst_27930);
var inst_27936 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_27935__$1,inst_27855,done);
var state_27987__$1 = (function (){var statearr_27993 = state_27987;
(statearr_27993[(10)] = inst_27935__$1);

return statearr_27993;
})();
if(cljs.core.truth_(inst_27936)){
var statearr_27994_28081 = state_27987__$1;
(statearr_27994_28081[(1)] = (30));

} else {
var statearr_27995_28082 = state_27987__$1;
(statearr_27995_28082[(1)] = (31));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_27988 === (1))){
var state_27987__$1 = state_27987;
var statearr_27996_28083 = state_27987__$1;
(statearr_27996_28083[(2)] = null);

(statearr_27996_28083[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27988 === (24))){
var inst_27886 = (state_27987[(7)]);
var inst_27905 = (state_27987[(2)]);
var inst_27906 = cljs.core.next(inst_27886);
var inst_27864 = inst_27906;
var inst_27865 = null;
var inst_27866 = (0);
var inst_27867 = (0);
var state_27987__$1 = (function (){var statearr_27997 = state_27987;
(statearr_27997[(13)] = inst_27867);

(statearr_27997[(14)] = inst_27864);

(statearr_27997[(15)] = inst_27905);

(statearr_27997[(16)] = inst_27865);

(statearr_27997[(17)] = inst_27866);

return statearr_27997;
})();
var statearr_27998_28084 = state_27987__$1;
(statearr_27998_28084[(2)] = null);

(statearr_27998_28084[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27988 === (39))){
var state_27987__$1 = state_27987;
var statearr_28002_28085 = state_27987__$1;
(statearr_28002_28085[(2)] = null);

(statearr_28002_28085[(1)] = (41));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27988 === (4))){
var inst_27855 = (state_27987[(11)]);
var inst_27855__$1 = (state_27987[(2)]);
var inst_27856 = (inst_27855__$1 == null);
var state_27987__$1 = (function (){var statearr_28003 = state_27987;
(statearr_28003[(11)] = inst_27855__$1);

return statearr_28003;
})();
if(cljs.core.truth_(inst_27856)){
var statearr_28004_28086 = state_27987__$1;
(statearr_28004_28086[(1)] = (5));

} else {
var statearr_28005_28087 = state_27987__$1;
(statearr_28005_28087[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_27988 === (15))){
var inst_27867 = (state_27987[(13)]);
var inst_27864 = (state_27987[(14)]);
var inst_27865 = (state_27987[(16)]);
var inst_27866 = (state_27987[(17)]);
var inst_27882 = (state_27987[(2)]);
var inst_27883 = (inst_27867 + (1));
var tmp27999 = inst_27864;
var tmp28000 = inst_27865;
var tmp28001 = inst_27866;
var inst_27864__$1 = tmp27999;
var inst_27865__$1 = tmp28000;
var inst_27866__$1 = tmp28001;
var inst_27867__$1 = inst_27883;
var state_27987__$1 = (function (){var statearr_28006 = state_27987;
(statearr_28006[(13)] = inst_27867__$1);

(statearr_28006[(18)] = inst_27882);

(statearr_28006[(14)] = inst_27864__$1);

(statearr_28006[(16)] = inst_27865__$1);

(statearr_28006[(17)] = inst_27866__$1);

return statearr_28006;
})();
var statearr_28007_28088 = state_27987__$1;
(statearr_28007_28088[(2)] = null);

(statearr_28007_28088[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27988 === (21))){
var inst_27909 = (state_27987[(2)]);
var state_27987__$1 = state_27987;
var statearr_28011_28089 = state_27987__$1;
(statearr_28011_28089[(2)] = inst_27909);

(statearr_28011_28089[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27988 === (31))){
var inst_27935 = (state_27987[(10)]);
var inst_27939 = done(null);
var inst_27940 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_27935);
var state_27987__$1 = (function (){var statearr_28012 = state_27987;
(statearr_28012[(19)] = inst_27939);

return statearr_28012;
})();
var statearr_28013_28090 = state_27987__$1;
(statearr_28013_28090[(2)] = inst_27940);

(statearr_28013_28090[(1)] = (32));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27988 === (32))){
var inst_27929 = (state_27987[(20)]);
var inst_27928 = (state_27987[(9)]);
var inst_27927 = (state_27987[(21)]);
var inst_27930 = (state_27987[(12)]);
var inst_27942 = (state_27987[(2)]);
var inst_27943 = (inst_27930 + (1));
var tmp28008 = inst_27929;
var tmp28009 = inst_27928;
var tmp28010 = inst_27927;
var inst_27927__$1 = tmp28010;
var inst_27928__$1 = tmp28009;
var inst_27929__$1 = tmp28008;
var inst_27930__$1 = inst_27943;
var state_27987__$1 = (function (){var statearr_28014 = state_27987;
(statearr_28014[(20)] = inst_27929__$1);

(statearr_28014[(9)] = inst_27928__$1);

(statearr_28014[(21)] = inst_27927__$1);

(statearr_28014[(22)] = inst_27942);

(statearr_28014[(12)] = inst_27930__$1);

return statearr_28014;
})();
var statearr_28015_28091 = state_27987__$1;
(statearr_28015_28091[(2)] = null);

(statearr_28015_28091[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27988 === (40))){
var inst_27955 = (state_27987[(23)]);
var inst_27959 = done(null);
var inst_27960 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_27955);
var state_27987__$1 = (function (){var statearr_28016 = state_27987;
(statearr_28016[(24)] = inst_27959);

return statearr_28016;
})();
var statearr_28017_28092 = state_27987__$1;
(statearr_28017_28092[(2)] = inst_27960);

(statearr_28017_28092[(1)] = (41));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27988 === (33))){
var inst_27946 = (state_27987[(25)]);
var inst_27948 = cljs.core.chunked_seq_QMARK_(inst_27946);
var state_27987__$1 = state_27987;
if(inst_27948){
var statearr_28018_28093 = state_27987__$1;
(statearr_28018_28093[(1)] = (36));

} else {
var statearr_28019_28094 = state_27987__$1;
(statearr_28019_28094[(1)] = (37));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_27988 === (13))){
var inst_27876 = (state_27987[(26)]);
var inst_27879 = cljs.core.async.close_BANG_(inst_27876);
var state_27987__$1 = state_27987;
var statearr_28020_28095 = state_27987__$1;
(statearr_28020_28095[(2)] = inst_27879);

(statearr_28020_28095[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27988 === (22))){
var inst_27899 = (state_27987[(8)]);
var inst_27902 = cljs.core.async.close_BANG_(inst_27899);
var state_27987__$1 = state_27987;
var statearr_28021_28096 = state_27987__$1;
(statearr_28021_28096[(2)] = inst_27902);

(statearr_28021_28096[(1)] = (24));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27988 === (36))){
var inst_27946 = (state_27987[(25)]);
var inst_27950 = cljs.core.chunk_first(inst_27946);
var inst_27951 = cljs.core.chunk_rest(inst_27946);
var inst_27952 = cljs.core.count(inst_27950);
var inst_27927 = inst_27951;
var inst_27928 = inst_27950;
var inst_27929 = inst_27952;
var inst_27930 = (0);
var state_27987__$1 = (function (){var statearr_28022 = state_27987;
(statearr_28022[(20)] = inst_27929);

(statearr_28022[(9)] = inst_27928);

(statearr_28022[(21)] = inst_27927);

(statearr_28022[(12)] = inst_27930);

return statearr_28022;
})();
var statearr_28023_28097 = state_27987__$1;
(statearr_28023_28097[(2)] = null);

(statearr_28023_28097[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27988 === (41))){
var inst_27946 = (state_27987[(25)]);
var inst_27962 = (state_27987[(2)]);
var inst_27963 = cljs.core.next(inst_27946);
var inst_27927 = inst_27963;
var inst_27928 = null;
var inst_27929 = (0);
var inst_27930 = (0);
var state_27987__$1 = (function (){var statearr_28024 = state_27987;
(statearr_28024[(20)] = inst_27929);

(statearr_28024[(9)] = inst_27928);

(statearr_28024[(21)] = inst_27927);

(statearr_28024[(27)] = inst_27962);

(statearr_28024[(12)] = inst_27930);

return statearr_28024;
})();
var statearr_28025_28098 = state_27987__$1;
(statearr_28025_28098[(2)] = null);

(statearr_28025_28098[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27988 === (43))){
var state_27987__$1 = state_27987;
var statearr_28026_28099 = state_27987__$1;
(statearr_28026_28099[(2)] = null);

(statearr_28026_28099[(1)] = (44));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27988 === (29))){
var inst_27971 = (state_27987[(2)]);
var state_27987__$1 = state_27987;
var statearr_28027_28100 = state_27987__$1;
(statearr_28027_28100[(2)] = inst_27971);

(statearr_28027_28100[(1)] = (26));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27988 === (44))){
var inst_27980 = (state_27987[(2)]);
var state_27987__$1 = (function (){var statearr_28028 = state_27987;
(statearr_28028[(28)] = inst_27980);

return statearr_28028;
})();
var statearr_28029_28101 = state_27987__$1;
(statearr_28029_28101[(2)] = null);

(statearr_28029_28101[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27988 === (6))){
var inst_27919 = (state_27987[(29)]);
var inst_27918 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cs) : cljs.core.deref.call(null,cs));
var inst_27919__$1 = cljs.core.keys(inst_27918);
var inst_27920 = cljs.core.count(inst_27919__$1);
var inst_27921 = (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,inst_27920) : cljs.core.reset_BANG_.call(null,dctr,inst_27920));
var inst_27926 = cljs.core.seq(inst_27919__$1);
var inst_27927 = inst_27926;
var inst_27928 = null;
var inst_27929 = (0);
var inst_27930 = (0);
var state_27987__$1 = (function (){var statearr_28030 = state_27987;
(statearr_28030[(20)] = inst_27929);

(statearr_28030[(30)] = inst_27921);

(statearr_28030[(9)] = inst_27928);

(statearr_28030[(21)] = inst_27927);

(statearr_28030[(29)] = inst_27919__$1);

(statearr_28030[(12)] = inst_27930);

return statearr_28030;
})();
var statearr_28031_28102 = state_27987__$1;
(statearr_28031_28102[(2)] = null);

(statearr_28031_28102[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27988 === (28))){
var inst_27927 = (state_27987[(21)]);
var inst_27946 = (state_27987[(25)]);
var inst_27946__$1 = cljs.core.seq(inst_27927);
var state_27987__$1 = (function (){var statearr_28032 = state_27987;
(statearr_28032[(25)] = inst_27946__$1);

return statearr_28032;
})();
if(inst_27946__$1){
var statearr_28033_28103 = state_27987__$1;
(statearr_28033_28103[(1)] = (33));

} else {
var statearr_28034_28104 = state_27987__$1;
(statearr_28034_28104[(1)] = (34));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_27988 === (25))){
var inst_27929 = (state_27987[(20)]);
var inst_27930 = (state_27987[(12)]);
var inst_27932 = (inst_27930 < inst_27929);
var inst_27933 = inst_27932;
var state_27987__$1 = state_27987;
if(cljs.core.truth_(inst_27933)){
var statearr_28035_28105 = state_27987__$1;
(statearr_28035_28105[(1)] = (27));

} else {
var statearr_28036_28106 = state_27987__$1;
(statearr_28036_28106[(1)] = (28));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_27988 === (34))){
var state_27987__$1 = state_27987;
var statearr_28037_28107 = state_27987__$1;
(statearr_28037_28107[(2)] = null);

(statearr_28037_28107[(1)] = (35));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27988 === (17))){
var state_27987__$1 = state_27987;
var statearr_28038_28108 = state_27987__$1;
(statearr_28038_28108[(2)] = null);

(statearr_28038_28108[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27988 === (3))){
var inst_27985 = (state_27987[(2)]);
var state_27987__$1 = state_27987;
return cljs.core.async.impl.ioc_helpers.return_chan(state_27987__$1,inst_27985);
} else {
if((state_val_27988 === (12))){
var inst_27914 = (state_27987[(2)]);
var state_27987__$1 = state_27987;
var statearr_28039_28109 = state_27987__$1;
(statearr_28039_28109[(2)] = inst_27914);

(statearr_28039_28109[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27988 === (2))){
var state_27987__$1 = state_27987;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_27987__$1,(4),ch);
} else {
if((state_val_27988 === (23))){
var state_27987__$1 = state_27987;
var statearr_28040_28110 = state_27987__$1;
(statearr_28040_28110[(2)] = null);

(statearr_28040_28110[(1)] = (24));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27988 === (35))){
var inst_27969 = (state_27987[(2)]);
var state_27987__$1 = state_27987;
var statearr_28041_28111 = state_27987__$1;
(statearr_28041_28111[(2)] = inst_27969);

(statearr_28041_28111[(1)] = (29));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27988 === (19))){
var inst_27886 = (state_27987[(7)]);
var inst_27890 = cljs.core.chunk_first(inst_27886);
var inst_27891 = cljs.core.chunk_rest(inst_27886);
var inst_27892 = cljs.core.count(inst_27890);
var inst_27864 = inst_27891;
var inst_27865 = inst_27890;
var inst_27866 = inst_27892;
var inst_27867 = (0);
var state_27987__$1 = (function (){var statearr_28042 = state_27987;
(statearr_28042[(13)] = inst_27867);

(statearr_28042[(14)] = inst_27864);

(statearr_28042[(16)] = inst_27865);

(statearr_28042[(17)] = inst_27866);

return statearr_28042;
})();
var statearr_28043_28112 = state_27987__$1;
(statearr_28043_28112[(2)] = null);

(statearr_28043_28112[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27988 === (11))){
var inst_27886 = (state_27987[(7)]);
var inst_27864 = (state_27987[(14)]);
var inst_27886__$1 = cljs.core.seq(inst_27864);
var state_27987__$1 = (function (){var statearr_28044 = state_27987;
(statearr_28044[(7)] = inst_27886__$1);

return statearr_28044;
})();
if(inst_27886__$1){
var statearr_28045_28113 = state_27987__$1;
(statearr_28045_28113[(1)] = (16));

} else {
var statearr_28046_28114 = state_27987__$1;
(statearr_28046_28114[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_27988 === (9))){
var inst_27916 = (state_27987[(2)]);
var state_27987__$1 = state_27987;
var statearr_28047_28115 = state_27987__$1;
(statearr_28047_28115[(2)] = inst_27916);

(statearr_28047_28115[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27988 === (5))){
var inst_27862 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cs) : cljs.core.deref.call(null,cs));
var inst_27863 = cljs.core.seq(inst_27862);
var inst_27864 = inst_27863;
var inst_27865 = null;
var inst_27866 = (0);
var inst_27867 = (0);
var state_27987__$1 = (function (){var statearr_28048 = state_27987;
(statearr_28048[(13)] = inst_27867);

(statearr_28048[(14)] = inst_27864);

(statearr_28048[(16)] = inst_27865);

(statearr_28048[(17)] = inst_27866);

return statearr_28048;
})();
var statearr_28049_28116 = state_27987__$1;
(statearr_28049_28116[(2)] = null);

(statearr_28049_28116[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27988 === (14))){
var state_27987__$1 = state_27987;
var statearr_28050_28117 = state_27987__$1;
(statearr_28050_28117[(2)] = null);

(statearr_28050_28117[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27988 === (45))){
var inst_27977 = (state_27987[(2)]);
var state_27987__$1 = state_27987;
var statearr_28051_28118 = state_27987__$1;
(statearr_28051_28118[(2)] = inst_27977);

(statearr_28051_28118[(1)] = (44));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27988 === (26))){
var inst_27919 = (state_27987[(29)]);
var inst_27973 = (state_27987[(2)]);
var inst_27974 = cljs.core.seq(inst_27919);
var state_27987__$1 = (function (){var statearr_28052 = state_27987;
(statearr_28052[(31)] = inst_27973);

return statearr_28052;
})();
if(inst_27974){
var statearr_28053_28119 = state_27987__$1;
(statearr_28053_28119[(1)] = (42));

} else {
var statearr_28054_28120 = state_27987__$1;
(statearr_28054_28120[(1)] = (43));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_27988 === (16))){
var inst_27886 = (state_27987[(7)]);
var inst_27888 = cljs.core.chunked_seq_QMARK_(inst_27886);
var state_27987__$1 = state_27987;
if(inst_27888){
var statearr_28055_28121 = state_27987__$1;
(statearr_28055_28121[(1)] = (19));

} else {
var statearr_28056_28122 = state_27987__$1;
(statearr_28056_28122[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_27988 === (38))){
var inst_27966 = (state_27987[(2)]);
var state_27987__$1 = state_27987;
var statearr_28057_28123 = state_27987__$1;
(statearr_28057_28123[(2)] = inst_27966);

(statearr_28057_28123[(1)] = (35));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27988 === (30))){
var state_27987__$1 = state_27987;
var statearr_28058_28124 = state_27987__$1;
(statearr_28058_28124[(2)] = null);

(statearr_28058_28124[(1)] = (32));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27988 === (10))){
var inst_27867 = (state_27987[(13)]);
var inst_27865 = (state_27987[(16)]);
var inst_27875 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_27865,inst_27867);
var inst_27876 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_27875,(0),null);
var inst_27877 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_27875,(1),null);
var state_27987__$1 = (function (){var statearr_28059 = state_27987;
(statearr_28059[(26)] = inst_27876);

return statearr_28059;
})();
if(cljs.core.truth_(inst_27877)){
var statearr_28060_28125 = state_27987__$1;
(statearr_28060_28125[(1)] = (13));

} else {
var statearr_28061_28126 = state_27987__$1;
(statearr_28061_28126[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_27988 === (18))){
var inst_27912 = (state_27987[(2)]);
var state_27987__$1 = state_27987;
var statearr_28062_28127 = state_27987__$1;
(statearr_28062_28127[(2)] = inst_27912);

(statearr_28062_28127[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27988 === (42))){
var state_27987__$1 = state_27987;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_27987__$1,(45),dchan);
} else {
if((state_val_27988 === (37))){
var inst_27955 = (state_27987[(23)]);
var inst_27855 = (state_27987[(11)]);
var inst_27946 = (state_27987[(25)]);
var inst_27955__$1 = cljs.core.first(inst_27946);
var inst_27956 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_27955__$1,inst_27855,done);
var state_27987__$1 = (function (){var statearr_28063 = state_27987;
(statearr_28063[(23)] = inst_27955__$1);

return statearr_28063;
})();
if(cljs.core.truth_(inst_27956)){
var statearr_28064_28128 = state_27987__$1;
(statearr_28064_28128[(1)] = (39));

} else {
var statearr_28065_28129 = state_27987__$1;
(statearr_28065_28129[(1)] = (40));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_27988 === (8))){
var inst_27867 = (state_27987[(13)]);
var inst_27866 = (state_27987[(17)]);
var inst_27869 = (inst_27867 < inst_27866);
var inst_27870 = inst_27869;
var state_27987__$1 = state_27987;
if(cljs.core.truth_(inst_27870)){
var statearr_28066_28130 = state_27987__$1;
(statearr_28066_28130[(1)] = (10));

} else {
var statearr_28067_28131 = state_27987__$1;
(statearr_28067_28131[(1)] = (11));

}

return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__26728__auto___28077,cs,m,dchan,dctr,done))
;
return ((function (switch__26612__auto__,c__26728__auto___28077,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__26613__auto__ = null;
var cljs$core$async$mult_$_state_machine__26613__auto____0 = (function (){
var statearr_28071 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28071[(0)] = cljs$core$async$mult_$_state_machine__26613__auto__);

(statearr_28071[(1)] = (1));

return statearr_28071;
});
var cljs$core$async$mult_$_state_machine__26613__auto____1 = (function (state_27987){
while(true){
var ret_value__26614__auto__ = (function (){try{while(true){
var result__26615__auto__ = switch__26612__auto__(state_27987);
if(cljs.core.keyword_identical_QMARK_(result__26615__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__26615__auto__;
}
break;
}
}catch (e28072){if((e28072 instanceof Object)){
var ex__26616__auto__ = e28072;
var statearr_28073_28132 = state_27987;
(statearr_28073_28132[(5)] = ex__26616__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_27987);

return cljs.core.cst$kw$recur;
} else {
throw e28072;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__26614__auto__,cljs.core.cst$kw$recur)){
var G__28133 = state_27987;
state_27987 = G__28133;
continue;
} else {
return ret_value__26614__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__26613__auto__ = function(state_27987){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__26613__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__26613__auto____1.call(this,state_27987);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__26613__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__26613__auto____0;
cljs$core$async$mult_$_state_machine__26613__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__26613__auto____1;
return cljs$core$async$mult_$_state_machine__26613__auto__;
})()
;})(switch__26612__auto__,c__26728__auto___28077,cs,m,dchan,dctr,done))
})();
var state__26730__auto__ = (function (){var statearr_28074 = (f__26729__auto__.cljs$core$IFn$_invoke$arity$0 ? f__26729__auto__.cljs$core$IFn$_invoke$arity$0() : f__26729__auto__.call(null));
(statearr_28074[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26728__auto___28077);

return statearr_28074;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__26730__auto__);
});})(c__26728__auto___28077,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var args28134 = [];
var len__18952__auto___28137 = arguments.length;
var i__18953__auto___28138 = (0);
while(true){
if((i__18953__auto___28138 < len__18952__auto___28137)){
args28134.push((arguments[i__18953__auto___28138]));

var G__28139 = (i__18953__auto___28138 + (1));
i__18953__auto___28138 = G__28139;
continue;
} else {
}
break;
}

var G__28136 = args28134.length;
switch (G__28136) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28134.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__18482__auto__ = (((m == null))?null:m);
var m__18483__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__18482__auto__)]);
if(!((m__18483__auto__ == null))){
return (m__18483__auto__.cljs$core$IFn$_invoke$arity$2 ? m__18483__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__18483__auto__.call(null,m,ch));
} else {
var m__18483__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__18483__auto____$1 == null))){
return (m__18483__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__18483__auto____$1.cljs$core$IFn$_invoke$arity$2(m,ch) : m__18483__auto____$1.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__18482__auto__ = (((m == null))?null:m);
var m__18483__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__18482__auto__)]);
if(!((m__18483__auto__ == null))){
return (m__18483__auto__.cljs$core$IFn$_invoke$arity$2 ? m__18483__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__18483__auto__.call(null,m,ch));
} else {
var m__18483__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__18483__auto____$1 == null))){
return (m__18483__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__18483__auto____$1.cljs$core$IFn$_invoke$arity$2(m,ch) : m__18483__auto____$1.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__18482__auto__ = (((m == null))?null:m);
var m__18483__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__18482__auto__)]);
if(!((m__18483__auto__ == null))){
return (m__18483__auto__.cljs$core$IFn$_invoke$arity$1 ? m__18483__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__18483__auto__.call(null,m));
} else {
var m__18483__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__18483__auto____$1 == null))){
return (m__18483__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__18483__auto____$1.cljs$core$IFn$_invoke$arity$1(m) : m__18483__auto____$1.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__18482__auto__ = (((m == null))?null:m);
var m__18483__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__18482__auto__)]);
if(!((m__18483__auto__ == null))){
return (m__18483__auto__.cljs$core$IFn$_invoke$arity$2 ? m__18483__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__18483__auto__.call(null,m,state_map));
} else {
var m__18483__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__18483__auto____$1 == null))){
return (m__18483__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__18483__auto____$1.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__18483__auto____$1.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__18482__auto__ = (((m == null))?null:m);
var m__18483__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__18482__auto__)]);
if(!((m__18483__auto__ == null))){
return (m__18483__auto__.cljs$core$IFn$_invoke$arity$2 ? m__18483__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__18483__auto__.call(null,m,mode));
} else {
var m__18483__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__18483__auto____$1 == null))){
return (m__18483__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__18483__auto____$1.cljs$core$IFn$_invoke$arity$2(m,mode) : m__18483__auto____$1.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__18959__auto__ = [];
var len__18952__auto___28151 = arguments.length;
var i__18953__auto___28152 = (0);
while(true){
if((i__18953__auto___28152 < len__18952__auto___28151)){
args__18959__auto__.push((arguments[i__18953__auto___28152]));

var G__28153 = (i__18953__auto___28152 + (1));
i__18953__auto___28152 = G__28153;
continue;
} else {
}
break;
}

var argseq__18960__auto__ = ((((3) < args__18959__auto__.length))?(new cljs.core.IndexedSeq(args__18959__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__18960__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__28145){
var map__28146 = p__28145;
var map__28146__$1 = ((((!((map__28146 == null)))?((((map__28146.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28146.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__28146):map__28146);
var opts = map__28146__$1;
var statearr_28148_28154 = state;
(statearr_28148_28154[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__6503__auto__ = cljs.core.async.do_alts(((function (map__28146,map__28146__$1,opts){
return (function (val){
var statearr_28149_28155 = state;
(statearr_28149_28155[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
});})(map__28146,map__28146__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__6503__auto__)){
var cb = temp__6503__auto__;
var statearr_28150_28156 = state;
(statearr_28150_28156[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cb) : cljs.core.deref.call(null,cb)));


return cljs.core.cst$kw$recur;
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq28141){
var G__28142 = cljs.core.first(seq28141);
var seq28141__$1 = cljs.core.next(seq28141);
var G__28143 = cljs.core.first(seq28141__$1);
var seq28141__$2 = cljs.core.next(seq28141__$1);
var G__28144 = cljs.core.first(seq28141__$2);
var seq28141__$3 = cljs.core.next(seq28141__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__28142,G__28143,G__28144,seq28141__$3);
});

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = (function (){var G__28325 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__28325) : cljs.core.atom.call(null,G__28325));
})();
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$pause,null,cljs.core.cst$kw$mute,null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,cljs.core.cst$kw$solo);
var solo_mode = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$mute) : cljs.core.atom.call(null,cljs.core.cst$kw$mute));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv(((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cs) : cljs.core.deref.call(null,cs));
var mode = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(solo_mode) : cljs.core.deref.call(null,solo_mode));
var solos = pick(cljs.core.cst$kw$solo,chs);
var pauses = pick(cljs.core.cst$kw$pause,chs);
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$solos,solos,cljs.core.cst$kw$mutes,pick(cljs.core.cst$kw$mute,chs),cljs.core.cst$kw$reads,cljs.core.conj.cljs$core$IFn$_invoke$arity$2((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,cljs.core.cst$kw$pause)) && (!(cljs.core.empty_QMARK_(solos))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async28326 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28326 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta28327){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta28327 = meta28327;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async28326.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_28328,meta28327__$1){
var self__ = this;
var _28328__$1 = this;
return (new cljs.core.async.t_cljs$core$async28326(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta28327__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28326.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_28328){
var self__ = this;
var _28328__$1 = this;
return self__.meta28327;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28326.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async28326.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28326.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async28326.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28326.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28326.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__28329_28493 = self__.cs;
var G__28330_28494 = cljs.core.PersistentArrayMap.EMPTY;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__28329_28493,G__28330_28494) : cljs.core.reset_BANG_.call(null,G__28329_28493,G__28330_28494));

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28326.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28326.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str("(solo-modes mode)")].join('')));
}

(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(self__.solo_mode,mode) : cljs.core.reset_BANG_.call(null,self__.solo_mode,mode));

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28326.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$change,cljs.core.with_meta(cljs.core.cst$sym$mix,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$out], null))),cljs.core.cst$kw$doc,"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),cljs.core.cst$sym$solo_DASH_mode,cljs.core.cst$sym$pick,cljs.core.cst$sym$cs,cljs.core.cst$sym$calc_DASH_state,cljs.core.cst$sym$out,cljs.core.cst$sym$changed,cljs.core.cst$sym$solo_DASH_modes,cljs.core.cst$sym$attrs,cljs.core.cst$sym$meta28327], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28326.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28326.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28326";

cljs.core.async.t_cljs$core$async28326.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__18421__auto__,writer__18422__auto__,opt__18423__auto__){
return cljs.core._write(writer__18422__auto__,"cljs.core.async/t_cljs$core$async28326");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async28326 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async28326(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta28327){
return (new cljs.core.async.t_cljs$core$async28326(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta28327));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async28326(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__26728__auto___28495 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__26728__auto___28495,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__26729__auto__ = (function (){var switch__26612__auto__ = ((function (c__26728__auto___28495,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_28430){
var state_val_28431 = (state_28430[(1)]);
if((state_val_28431 === (7))){
var inst_28346 = (state_28430[(2)]);
var state_28430__$1 = state_28430;
var statearr_28432_28496 = state_28430__$1;
(statearr_28432_28496[(2)] = inst_28346);

(statearr_28432_28496[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28431 === (20))){
var inst_28358 = (state_28430[(7)]);
var state_28430__$1 = state_28430;
var statearr_28433_28497 = state_28430__$1;
(statearr_28433_28497[(2)] = inst_28358);

(statearr_28433_28497[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28431 === (27))){
var state_28430__$1 = state_28430;
var statearr_28434_28498 = state_28430__$1;
(statearr_28434_28498[(2)] = null);

(statearr_28434_28498[(1)] = (28));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28431 === (1))){
var inst_28334 = (state_28430[(8)]);
var inst_28334__$1 = calc_state();
var inst_28336 = (inst_28334__$1 == null);
var inst_28337 = cljs.core.not(inst_28336);
var state_28430__$1 = (function (){var statearr_28435 = state_28430;
(statearr_28435[(8)] = inst_28334__$1);

return statearr_28435;
})();
if(inst_28337){
var statearr_28436_28499 = state_28430__$1;
(statearr_28436_28499[(1)] = (2));

} else {
var statearr_28437_28500 = state_28430__$1;
(statearr_28437_28500[(1)] = (3));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_28431 === (24))){
var inst_28381 = (state_28430[(9)]);
var inst_28404 = (state_28430[(10)]);
var inst_28390 = (state_28430[(11)]);
var inst_28404__$1 = (inst_28381.cljs$core$IFn$_invoke$arity$1 ? inst_28381.cljs$core$IFn$_invoke$arity$1(inst_28390) : inst_28381.call(null,inst_28390));
var state_28430__$1 = (function (){var statearr_28438 = state_28430;
(statearr_28438[(10)] = inst_28404__$1);

return statearr_28438;
})();
if(cljs.core.truth_(inst_28404__$1)){
var statearr_28439_28501 = state_28430__$1;
(statearr_28439_28501[(1)] = (29));

} else {
var statearr_28440_28502 = state_28430__$1;
(statearr_28440_28502[(1)] = (30));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_28431 === (4))){
var inst_28349 = (state_28430[(2)]);
var state_28430__$1 = state_28430;
if(cljs.core.truth_(inst_28349)){
var statearr_28441_28503 = state_28430__$1;
(statearr_28441_28503[(1)] = (8));

} else {
var statearr_28442_28504 = state_28430__$1;
(statearr_28442_28504[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_28431 === (15))){
var inst_28375 = (state_28430[(2)]);
var state_28430__$1 = state_28430;
if(cljs.core.truth_(inst_28375)){
var statearr_28443_28505 = state_28430__$1;
(statearr_28443_28505[(1)] = (19));

} else {
var statearr_28444_28506 = state_28430__$1;
(statearr_28444_28506[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_28431 === (21))){
var inst_28380 = (state_28430[(12)]);
var inst_28380__$1 = (state_28430[(2)]);
var inst_28381 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_28380__$1,cljs.core.cst$kw$solos);
var inst_28382 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_28380__$1,cljs.core.cst$kw$mutes);
var inst_28383 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_28380__$1,cljs.core.cst$kw$reads);
var state_28430__$1 = (function (){var statearr_28445 = state_28430;
(statearr_28445[(12)] = inst_28380__$1);

(statearr_28445[(13)] = inst_28382);

(statearr_28445[(9)] = inst_28381);

return statearr_28445;
})();
return cljs.core.async.ioc_alts_BANG_(state_28430__$1,(22),inst_28383);
} else {
if((state_val_28431 === (31))){
var inst_28412 = (state_28430[(2)]);
var state_28430__$1 = state_28430;
if(cljs.core.truth_(inst_28412)){
var statearr_28446_28507 = state_28430__$1;
(statearr_28446_28507[(1)] = (32));

} else {
var statearr_28447_28508 = state_28430__$1;
(statearr_28447_28508[(1)] = (33));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_28431 === (32))){
var inst_28389 = (state_28430[(14)]);
var state_28430__$1 = state_28430;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_28430__$1,(35),out,inst_28389);
} else {
if((state_val_28431 === (33))){
var inst_28380 = (state_28430[(12)]);
var inst_28358 = inst_28380;
var state_28430__$1 = (function (){var statearr_28448 = state_28430;
(statearr_28448[(7)] = inst_28358);

return statearr_28448;
})();
var statearr_28449_28509 = state_28430__$1;
(statearr_28449_28509[(2)] = null);

(statearr_28449_28509[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28431 === (13))){
var inst_28358 = (state_28430[(7)]);
var inst_28365 = inst_28358.cljs$lang$protocol_mask$partition0$;
var inst_28366 = (inst_28365 & (64));
var inst_28367 = inst_28358.cljs$core$ISeq$;
var inst_28368 = (inst_28366) || (inst_28367);
var state_28430__$1 = state_28430;
if(cljs.core.truth_(inst_28368)){
var statearr_28450_28510 = state_28430__$1;
(statearr_28450_28510[(1)] = (16));

} else {
var statearr_28451_28511 = state_28430__$1;
(statearr_28451_28511[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_28431 === (22))){
var inst_28389 = (state_28430[(14)]);
var inst_28390 = (state_28430[(11)]);
var inst_28388 = (state_28430[(2)]);
var inst_28389__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_28388,(0),null);
var inst_28390__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_28388,(1),null);
var inst_28391 = (inst_28389__$1 == null);
var inst_28392 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_28390__$1,change);
var inst_28393 = (inst_28391) || (inst_28392);
var state_28430__$1 = (function (){var statearr_28452 = state_28430;
(statearr_28452[(14)] = inst_28389__$1);

(statearr_28452[(11)] = inst_28390__$1);

return statearr_28452;
})();
if(cljs.core.truth_(inst_28393)){
var statearr_28453_28512 = state_28430__$1;
(statearr_28453_28512[(1)] = (23));

} else {
var statearr_28454_28513 = state_28430__$1;
(statearr_28454_28513[(1)] = (24));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_28431 === (36))){
var inst_28380 = (state_28430[(12)]);
var inst_28358 = inst_28380;
var state_28430__$1 = (function (){var statearr_28455 = state_28430;
(statearr_28455[(7)] = inst_28358);

return statearr_28455;
})();
var statearr_28456_28514 = state_28430__$1;
(statearr_28456_28514[(2)] = null);

(statearr_28456_28514[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28431 === (29))){
var inst_28404 = (state_28430[(10)]);
var state_28430__$1 = state_28430;
var statearr_28457_28515 = state_28430__$1;
(statearr_28457_28515[(2)] = inst_28404);

(statearr_28457_28515[(1)] = (31));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28431 === (6))){
var state_28430__$1 = state_28430;
var statearr_28458_28516 = state_28430__$1;
(statearr_28458_28516[(2)] = false);

(statearr_28458_28516[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28431 === (28))){
var inst_28400 = (state_28430[(2)]);
var inst_28401 = calc_state();
var inst_28358 = inst_28401;
var state_28430__$1 = (function (){var statearr_28459 = state_28430;
(statearr_28459[(15)] = inst_28400);

(statearr_28459[(7)] = inst_28358);

return statearr_28459;
})();
var statearr_28460_28517 = state_28430__$1;
(statearr_28460_28517[(2)] = null);

(statearr_28460_28517[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28431 === (25))){
var inst_28426 = (state_28430[(2)]);
var state_28430__$1 = state_28430;
var statearr_28461_28518 = state_28430__$1;
(statearr_28461_28518[(2)] = inst_28426);

(statearr_28461_28518[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28431 === (34))){
var inst_28424 = (state_28430[(2)]);
var state_28430__$1 = state_28430;
var statearr_28462_28519 = state_28430__$1;
(statearr_28462_28519[(2)] = inst_28424);

(statearr_28462_28519[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28431 === (17))){
var state_28430__$1 = state_28430;
var statearr_28463_28520 = state_28430__$1;
(statearr_28463_28520[(2)] = false);

(statearr_28463_28520[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28431 === (3))){
var state_28430__$1 = state_28430;
var statearr_28464_28521 = state_28430__$1;
(statearr_28464_28521[(2)] = false);

(statearr_28464_28521[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28431 === (12))){
var inst_28428 = (state_28430[(2)]);
var state_28430__$1 = state_28430;
return cljs.core.async.impl.ioc_helpers.return_chan(state_28430__$1,inst_28428);
} else {
if((state_val_28431 === (2))){
var inst_28334 = (state_28430[(8)]);
var inst_28339 = inst_28334.cljs$lang$protocol_mask$partition0$;
var inst_28340 = (inst_28339 & (64));
var inst_28341 = inst_28334.cljs$core$ISeq$;
var inst_28342 = (inst_28340) || (inst_28341);
var state_28430__$1 = state_28430;
if(cljs.core.truth_(inst_28342)){
var statearr_28465_28522 = state_28430__$1;
(statearr_28465_28522[(1)] = (5));

} else {
var statearr_28466_28523 = state_28430__$1;
(statearr_28466_28523[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_28431 === (23))){
var inst_28389 = (state_28430[(14)]);
var inst_28395 = (inst_28389 == null);
var state_28430__$1 = state_28430;
if(cljs.core.truth_(inst_28395)){
var statearr_28467_28524 = state_28430__$1;
(statearr_28467_28524[(1)] = (26));

} else {
var statearr_28468_28525 = state_28430__$1;
(statearr_28468_28525[(1)] = (27));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_28431 === (35))){
var inst_28415 = (state_28430[(2)]);
var state_28430__$1 = state_28430;
if(cljs.core.truth_(inst_28415)){
var statearr_28469_28526 = state_28430__$1;
(statearr_28469_28526[(1)] = (36));

} else {
var statearr_28470_28527 = state_28430__$1;
(statearr_28470_28527[(1)] = (37));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_28431 === (19))){
var inst_28358 = (state_28430[(7)]);
var inst_28377 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_28358);
var state_28430__$1 = state_28430;
var statearr_28471_28528 = state_28430__$1;
(statearr_28471_28528[(2)] = inst_28377);

(statearr_28471_28528[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28431 === (11))){
var inst_28358 = (state_28430[(7)]);
var inst_28362 = (inst_28358 == null);
var inst_28363 = cljs.core.not(inst_28362);
var state_28430__$1 = state_28430;
if(inst_28363){
var statearr_28472_28529 = state_28430__$1;
(statearr_28472_28529[(1)] = (13));

} else {
var statearr_28473_28530 = state_28430__$1;
(statearr_28473_28530[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_28431 === (9))){
var inst_28334 = (state_28430[(8)]);
var state_28430__$1 = state_28430;
var statearr_28474_28531 = state_28430__$1;
(statearr_28474_28531[(2)] = inst_28334);

(statearr_28474_28531[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28431 === (5))){
var state_28430__$1 = state_28430;
var statearr_28475_28532 = state_28430__$1;
(statearr_28475_28532[(2)] = true);

(statearr_28475_28532[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28431 === (14))){
var state_28430__$1 = state_28430;
var statearr_28476_28533 = state_28430__$1;
(statearr_28476_28533[(2)] = false);

(statearr_28476_28533[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28431 === (26))){
var inst_28390 = (state_28430[(11)]);
var inst_28397 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_28390);
var state_28430__$1 = state_28430;
var statearr_28477_28534 = state_28430__$1;
(statearr_28477_28534[(2)] = inst_28397);

(statearr_28477_28534[(1)] = (28));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28431 === (16))){
var state_28430__$1 = state_28430;
var statearr_28478_28535 = state_28430__$1;
(statearr_28478_28535[(2)] = true);

(statearr_28478_28535[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28431 === (38))){
var inst_28420 = (state_28430[(2)]);
var state_28430__$1 = state_28430;
var statearr_28479_28536 = state_28430__$1;
(statearr_28479_28536[(2)] = inst_28420);

(statearr_28479_28536[(1)] = (34));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28431 === (30))){
var inst_28382 = (state_28430[(13)]);
var inst_28381 = (state_28430[(9)]);
var inst_28390 = (state_28430[(11)]);
var inst_28407 = cljs.core.empty_QMARK_(inst_28381);
var inst_28408 = (inst_28382.cljs$core$IFn$_invoke$arity$1 ? inst_28382.cljs$core$IFn$_invoke$arity$1(inst_28390) : inst_28382.call(null,inst_28390));
var inst_28409 = cljs.core.not(inst_28408);
var inst_28410 = (inst_28407) && (inst_28409);
var state_28430__$1 = state_28430;
var statearr_28480_28537 = state_28430__$1;
(statearr_28480_28537[(2)] = inst_28410);

(statearr_28480_28537[(1)] = (31));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28431 === (10))){
var inst_28334 = (state_28430[(8)]);
var inst_28354 = (state_28430[(2)]);
var inst_28355 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_28354,cljs.core.cst$kw$solos);
var inst_28356 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_28354,cljs.core.cst$kw$mutes);
var inst_28357 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_28354,cljs.core.cst$kw$reads);
var inst_28358 = inst_28334;
var state_28430__$1 = (function (){var statearr_28481 = state_28430;
(statearr_28481[(16)] = inst_28356);

(statearr_28481[(17)] = inst_28355);

(statearr_28481[(18)] = inst_28357);

(statearr_28481[(7)] = inst_28358);

return statearr_28481;
})();
var statearr_28482_28538 = state_28430__$1;
(statearr_28482_28538[(2)] = null);

(statearr_28482_28538[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28431 === (18))){
var inst_28372 = (state_28430[(2)]);
var state_28430__$1 = state_28430;
var statearr_28483_28539 = state_28430__$1;
(statearr_28483_28539[(2)] = inst_28372);

(statearr_28483_28539[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28431 === (37))){
var state_28430__$1 = state_28430;
var statearr_28484_28540 = state_28430__$1;
(statearr_28484_28540[(2)] = null);

(statearr_28484_28540[(1)] = (38));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28431 === (8))){
var inst_28334 = (state_28430[(8)]);
var inst_28351 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_28334);
var state_28430__$1 = state_28430;
var statearr_28485_28541 = state_28430__$1;
(statearr_28485_28541[(2)] = inst_28351);

(statearr_28485_28541[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__26728__auto___28495,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__26612__auto__,c__26728__auto___28495,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__26613__auto__ = null;
var cljs$core$async$mix_$_state_machine__26613__auto____0 = (function (){
var statearr_28489 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28489[(0)] = cljs$core$async$mix_$_state_machine__26613__auto__);

(statearr_28489[(1)] = (1));

return statearr_28489;
});
var cljs$core$async$mix_$_state_machine__26613__auto____1 = (function (state_28430){
while(true){
var ret_value__26614__auto__ = (function (){try{while(true){
var result__26615__auto__ = switch__26612__auto__(state_28430);
if(cljs.core.keyword_identical_QMARK_(result__26615__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__26615__auto__;
}
break;
}
}catch (e28490){if((e28490 instanceof Object)){
var ex__26616__auto__ = e28490;
var statearr_28491_28542 = state_28430;
(statearr_28491_28542[(5)] = ex__26616__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_28430);

return cljs.core.cst$kw$recur;
} else {
throw e28490;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__26614__auto__,cljs.core.cst$kw$recur)){
var G__28543 = state_28430;
state_28430 = G__28543;
continue;
} else {
return ret_value__26614__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__26613__auto__ = function(state_28430){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__26613__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__26613__auto____1.call(this,state_28430);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__26613__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__26613__auto____0;
cljs$core$async$mix_$_state_machine__26613__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__26613__auto____1;
return cljs$core$async$mix_$_state_machine__26613__auto__;
})()
;})(switch__26612__auto__,c__26728__auto___28495,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__26730__auto__ = (function (){var statearr_28492 = (f__26729__auto__.cljs$core$IFn$_invoke$arity$0 ? f__26729__auto__.cljs$core$IFn$_invoke$arity$0() : f__26729__auto__.call(null));
(statearr_28492[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26728__auto___28495);

return statearr_28492;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__26730__auto__);
});})(c__26728__auto___28495,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__18482__auto__ = (((p == null))?null:p);
var m__18483__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__18482__auto__)]);
if(!((m__18483__auto__ == null))){
return (m__18483__auto__.cljs$core$IFn$_invoke$arity$4 ? m__18483__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__18483__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__18483__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__18483__auto____$1 == null))){
return (m__18483__auto____$1.cljs$core$IFn$_invoke$arity$4 ? m__18483__auto____$1.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__18483__auto____$1.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__18482__auto__ = (((p == null))?null:p);
var m__18483__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__18482__auto__)]);
if(!((m__18483__auto__ == null))){
return (m__18483__auto__.cljs$core$IFn$_invoke$arity$3 ? m__18483__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__18483__auto__.call(null,p,v,ch));
} else {
var m__18483__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__18483__auto____$1 == null))){
return (m__18483__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__18483__auto____$1.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__18483__auto____$1.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args28544 = [];
var len__18952__auto___28547 = arguments.length;
var i__18953__auto___28548 = (0);
while(true){
if((i__18953__auto___28548 < len__18952__auto___28547)){
args28544.push((arguments[i__18953__auto___28548]));

var G__28549 = (i__18953__auto___28548 + (1));
i__18953__auto___28548 = G__28549;
continue;
} else {
}
break;
}

var G__28546 = args28544.length;
switch (G__28546) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28544.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__18482__auto__ = (((p == null))?null:p);
var m__18483__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__18482__auto__)]);
if(!((m__18483__auto__ == null))){
return (m__18483__auto__.cljs$core$IFn$_invoke$arity$1 ? m__18483__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__18483__auto__.call(null,p));
} else {
var m__18483__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__18483__auto____$1 == null))){
return (m__18483__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__18483__auto____$1.cljs$core$IFn$_invoke$arity$1(p) : m__18483__auto____$1.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__18482__auto__ = (((p == null))?null:p);
var m__18483__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__18482__auto__)]);
if(!((m__18483__auto__ == null))){
return (m__18483__auto__.cljs$core$IFn$_invoke$arity$2 ? m__18483__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__18483__auto__.call(null,p,v));
} else {
var m__18483__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__18483__auto____$1 == null))){
return (m__18483__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__18483__auto____$1.cljs$core$IFn$_invoke$arity$2(p,v) : m__18483__auto____$1.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var args28552 = [];
var len__18952__auto___28680 = arguments.length;
var i__18953__auto___28681 = (0);
while(true){
if((i__18953__auto___28681 < len__18952__auto___28680)){
args28552.push((arguments[i__18953__auto___28681]));

var G__28682 = (i__18953__auto___28681 + (1));
i__18953__auto___28681 = G__28682;
continue;
} else {
}
break;
}

var G__28554 = args28552.length;
switch (G__28554) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28552.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = (function (){var G__28555 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__28555) : cljs.core.atom.call(null,G__28555));
})();
var ensure_mult = ((function (mults){
return (function (topic){
var or__17769__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(mults) : cljs.core.deref.call(null,mults)),topic);
if(cljs.core.truth_(or__17769__auto__)){
return or__17769__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,((function (or__17769__auto__,mults){
return (function (p1__28551_SHARP_){
if(cljs.core.truth_((p1__28551_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__28551_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__28551_SHARP_.call(null,topic)))){
return p1__28551_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__28551_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
});})(or__17769__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async28556 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28556 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta28557){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta28557 = meta28557;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async28556.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_28558,meta28557__$1){
var self__ = this;
var _28558__$1 = this;
return (new cljs.core.async.t_cljs$core$async28556(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta28557__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28556.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_28558){
var self__ = this;
var _28558__$1 = this;
return self__.meta28557;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28556.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async28556.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28556.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async28556.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28556.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__6503__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(self__.mults) : cljs.core.deref.call(null,self__.mults)),topic);
if(cljs.core.truth_(temp__6503__auto__)){
var m = temp__6503__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28556.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__28559 = self__.mults;
var G__28560 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__28559,G__28560) : cljs.core.reset_BANG_.call(null,G__28559,G__28560));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28556.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28556.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$ch,cljs.core.cst$sym$topic_DASH_fn,cljs.core.cst$sym$buf_DASH_fn,cljs.core.cst$sym$mults,cljs.core.cst$sym$ensure_DASH_mult,cljs.core.cst$sym$meta28557], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28556.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28556.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28556";

cljs.core.async.t_cljs$core$async28556.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__18421__auto__,writer__18422__auto__,opt__18423__auto__){
return cljs.core._write(writer__18422__auto__,"cljs.core.async/t_cljs$core$async28556");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async28556 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async28556(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta28557){
return (new cljs.core.async.t_cljs$core$async28556(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta28557));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async28556(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__26728__auto___28684 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__26728__auto___28684,mults,ensure_mult,p){
return (function (){
var f__26729__auto__ = (function (){var switch__26612__auto__ = ((function (c__26728__auto___28684,mults,ensure_mult,p){
return (function (state_28632){
var state_val_28633 = (state_28632[(1)]);
if((state_val_28633 === (7))){
var inst_28628 = (state_28632[(2)]);
var state_28632__$1 = state_28632;
var statearr_28634_28685 = state_28632__$1;
(statearr_28634_28685[(2)] = inst_28628);

(statearr_28634_28685[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28633 === (20))){
var state_28632__$1 = state_28632;
var statearr_28635_28686 = state_28632__$1;
(statearr_28635_28686[(2)] = null);

(statearr_28635_28686[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28633 === (1))){
var state_28632__$1 = state_28632;
var statearr_28636_28687 = state_28632__$1;
(statearr_28636_28687[(2)] = null);

(statearr_28636_28687[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28633 === (24))){
var inst_28611 = (state_28632[(7)]);
var inst_28620 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_28611);
var state_28632__$1 = state_28632;
var statearr_28637_28688 = state_28632__$1;
(statearr_28637_28688[(2)] = inst_28620);

(statearr_28637_28688[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28633 === (4))){
var inst_28563 = (state_28632[(8)]);
var inst_28563__$1 = (state_28632[(2)]);
var inst_28564 = (inst_28563__$1 == null);
var state_28632__$1 = (function (){var statearr_28638 = state_28632;
(statearr_28638[(8)] = inst_28563__$1);

return statearr_28638;
})();
if(cljs.core.truth_(inst_28564)){
var statearr_28639_28689 = state_28632__$1;
(statearr_28639_28689[(1)] = (5));

} else {
var statearr_28640_28690 = state_28632__$1;
(statearr_28640_28690[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_28633 === (15))){
var inst_28605 = (state_28632[(2)]);
var state_28632__$1 = state_28632;
var statearr_28641_28691 = state_28632__$1;
(statearr_28641_28691[(2)] = inst_28605);

(statearr_28641_28691[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28633 === (21))){
var inst_28625 = (state_28632[(2)]);
var state_28632__$1 = (function (){var statearr_28642 = state_28632;
(statearr_28642[(9)] = inst_28625);

return statearr_28642;
})();
var statearr_28643_28692 = state_28632__$1;
(statearr_28643_28692[(2)] = null);

(statearr_28643_28692[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28633 === (13))){
var inst_28587 = (state_28632[(10)]);
var inst_28589 = cljs.core.chunked_seq_QMARK_(inst_28587);
var state_28632__$1 = state_28632;
if(inst_28589){
var statearr_28644_28693 = state_28632__$1;
(statearr_28644_28693[(1)] = (16));

} else {
var statearr_28645_28694 = state_28632__$1;
(statearr_28645_28694[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_28633 === (22))){
var inst_28617 = (state_28632[(2)]);
var state_28632__$1 = state_28632;
if(cljs.core.truth_(inst_28617)){
var statearr_28646_28695 = state_28632__$1;
(statearr_28646_28695[(1)] = (23));

} else {
var statearr_28647_28696 = state_28632__$1;
(statearr_28647_28696[(1)] = (24));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_28633 === (6))){
var inst_28611 = (state_28632[(7)]);
var inst_28563 = (state_28632[(8)]);
var inst_28613 = (state_28632[(11)]);
var inst_28611__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_28563) : topic_fn.call(null,inst_28563));
var inst_28612 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(mults) : cljs.core.deref.call(null,mults));
var inst_28613__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_28612,inst_28611__$1);
var state_28632__$1 = (function (){var statearr_28648 = state_28632;
(statearr_28648[(7)] = inst_28611__$1);

(statearr_28648[(11)] = inst_28613__$1);

return statearr_28648;
})();
if(cljs.core.truth_(inst_28613__$1)){
var statearr_28649_28697 = state_28632__$1;
(statearr_28649_28697[(1)] = (19));

} else {
var statearr_28650_28698 = state_28632__$1;
(statearr_28650_28698[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_28633 === (25))){
var inst_28622 = (state_28632[(2)]);
var state_28632__$1 = state_28632;
var statearr_28651_28699 = state_28632__$1;
(statearr_28651_28699[(2)] = inst_28622);

(statearr_28651_28699[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28633 === (17))){
var inst_28587 = (state_28632[(10)]);
var inst_28596 = cljs.core.first(inst_28587);
var inst_28597 = cljs.core.async.muxch_STAR_(inst_28596);
var inst_28598 = cljs.core.async.close_BANG_(inst_28597);
var inst_28599 = cljs.core.next(inst_28587);
var inst_28573 = inst_28599;
var inst_28574 = null;
var inst_28575 = (0);
var inst_28576 = (0);
var state_28632__$1 = (function (){var statearr_28652 = state_28632;
(statearr_28652[(12)] = inst_28576);

(statearr_28652[(13)] = inst_28574);

(statearr_28652[(14)] = inst_28573);

(statearr_28652[(15)] = inst_28575);

(statearr_28652[(16)] = inst_28598);

return statearr_28652;
})();
var statearr_28653_28700 = state_28632__$1;
(statearr_28653_28700[(2)] = null);

(statearr_28653_28700[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28633 === (3))){
var inst_28630 = (state_28632[(2)]);
var state_28632__$1 = state_28632;
return cljs.core.async.impl.ioc_helpers.return_chan(state_28632__$1,inst_28630);
} else {
if((state_val_28633 === (12))){
var inst_28607 = (state_28632[(2)]);
var state_28632__$1 = state_28632;
var statearr_28654_28701 = state_28632__$1;
(statearr_28654_28701[(2)] = inst_28607);

(statearr_28654_28701[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28633 === (2))){
var state_28632__$1 = state_28632;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_28632__$1,(4),ch);
} else {
if((state_val_28633 === (23))){
var state_28632__$1 = state_28632;
var statearr_28655_28702 = state_28632__$1;
(statearr_28655_28702[(2)] = null);

(statearr_28655_28702[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28633 === (19))){
var inst_28563 = (state_28632[(8)]);
var inst_28613 = (state_28632[(11)]);
var inst_28615 = cljs.core.async.muxch_STAR_(inst_28613);
var state_28632__$1 = state_28632;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_28632__$1,(22),inst_28615,inst_28563);
} else {
if((state_val_28633 === (11))){
var inst_28573 = (state_28632[(14)]);
var inst_28587 = (state_28632[(10)]);
var inst_28587__$1 = cljs.core.seq(inst_28573);
var state_28632__$1 = (function (){var statearr_28656 = state_28632;
(statearr_28656[(10)] = inst_28587__$1);

return statearr_28656;
})();
if(inst_28587__$1){
var statearr_28657_28703 = state_28632__$1;
(statearr_28657_28703[(1)] = (13));

} else {
var statearr_28658_28704 = state_28632__$1;
(statearr_28658_28704[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_28633 === (9))){
var inst_28609 = (state_28632[(2)]);
var state_28632__$1 = state_28632;
var statearr_28659_28705 = state_28632__$1;
(statearr_28659_28705[(2)] = inst_28609);

(statearr_28659_28705[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28633 === (5))){
var inst_28570 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(mults) : cljs.core.deref.call(null,mults));
var inst_28571 = cljs.core.vals(inst_28570);
var inst_28572 = cljs.core.seq(inst_28571);
var inst_28573 = inst_28572;
var inst_28574 = null;
var inst_28575 = (0);
var inst_28576 = (0);
var state_28632__$1 = (function (){var statearr_28660 = state_28632;
(statearr_28660[(12)] = inst_28576);

(statearr_28660[(13)] = inst_28574);

(statearr_28660[(14)] = inst_28573);

(statearr_28660[(15)] = inst_28575);

return statearr_28660;
})();
var statearr_28661_28706 = state_28632__$1;
(statearr_28661_28706[(2)] = null);

(statearr_28661_28706[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28633 === (14))){
var state_28632__$1 = state_28632;
var statearr_28665_28707 = state_28632__$1;
(statearr_28665_28707[(2)] = null);

(statearr_28665_28707[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28633 === (16))){
var inst_28587 = (state_28632[(10)]);
var inst_28591 = cljs.core.chunk_first(inst_28587);
var inst_28592 = cljs.core.chunk_rest(inst_28587);
var inst_28593 = cljs.core.count(inst_28591);
var inst_28573 = inst_28592;
var inst_28574 = inst_28591;
var inst_28575 = inst_28593;
var inst_28576 = (0);
var state_28632__$1 = (function (){var statearr_28666 = state_28632;
(statearr_28666[(12)] = inst_28576);

(statearr_28666[(13)] = inst_28574);

(statearr_28666[(14)] = inst_28573);

(statearr_28666[(15)] = inst_28575);

return statearr_28666;
})();
var statearr_28667_28708 = state_28632__$1;
(statearr_28667_28708[(2)] = null);

(statearr_28667_28708[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28633 === (10))){
var inst_28576 = (state_28632[(12)]);
var inst_28574 = (state_28632[(13)]);
var inst_28573 = (state_28632[(14)]);
var inst_28575 = (state_28632[(15)]);
var inst_28581 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_28574,inst_28576);
var inst_28582 = cljs.core.async.muxch_STAR_(inst_28581);
var inst_28583 = cljs.core.async.close_BANG_(inst_28582);
var inst_28584 = (inst_28576 + (1));
var tmp28662 = inst_28574;
var tmp28663 = inst_28573;
var tmp28664 = inst_28575;
var inst_28573__$1 = tmp28663;
var inst_28574__$1 = tmp28662;
var inst_28575__$1 = tmp28664;
var inst_28576__$1 = inst_28584;
var state_28632__$1 = (function (){var statearr_28668 = state_28632;
(statearr_28668[(12)] = inst_28576__$1);

(statearr_28668[(13)] = inst_28574__$1);

(statearr_28668[(14)] = inst_28573__$1);

(statearr_28668[(15)] = inst_28575__$1);

(statearr_28668[(17)] = inst_28583);

return statearr_28668;
})();
var statearr_28669_28709 = state_28632__$1;
(statearr_28669_28709[(2)] = null);

(statearr_28669_28709[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28633 === (18))){
var inst_28602 = (state_28632[(2)]);
var state_28632__$1 = state_28632;
var statearr_28670_28710 = state_28632__$1;
(statearr_28670_28710[(2)] = inst_28602);

(statearr_28670_28710[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28633 === (8))){
var inst_28576 = (state_28632[(12)]);
var inst_28575 = (state_28632[(15)]);
var inst_28578 = (inst_28576 < inst_28575);
var inst_28579 = inst_28578;
var state_28632__$1 = state_28632;
if(cljs.core.truth_(inst_28579)){
var statearr_28671_28711 = state_28632__$1;
(statearr_28671_28711[(1)] = (10));

} else {
var statearr_28672_28712 = state_28632__$1;
(statearr_28672_28712[(1)] = (11));

}

return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__26728__auto___28684,mults,ensure_mult,p))
;
return ((function (switch__26612__auto__,c__26728__auto___28684,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__26613__auto__ = null;
var cljs$core$async$state_machine__26613__auto____0 = (function (){
var statearr_28676 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28676[(0)] = cljs$core$async$state_machine__26613__auto__);

(statearr_28676[(1)] = (1));

return statearr_28676;
});
var cljs$core$async$state_machine__26613__auto____1 = (function (state_28632){
while(true){
var ret_value__26614__auto__ = (function (){try{while(true){
var result__26615__auto__ = switch__26612__auto__(state_28632);
if(cljs.core.keyword_identical_QMARK_(result__26615__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__26615__auto__;
}
break;
}
}catch (e28677){if((e28677 instanceof Object)){
var ex__26616__auto__ = e28677;
var statearr_28678_28713 = state_28632;
(statearr_28678_28713[(5)] = ex__26616__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_28632);

return cljs.core.cst$kw$recur;
} else {
throw e28677;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__26614__auto__,cljs.core.cst$kw$recur)){
var G__28714 = state_28632;
state_28632 = G__28714;
continue;
} else {
return ret_value__26614__auto__;
}
break;
}
});
cljs$core$async$state_machine__26613__auto__ = function(state_28632){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26613__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26613__auto____1.call(this,state_28632);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26613__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26613__auto____0;
cljs$core$async$state_machine__26613__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26613__auto____1;
return cljs$core$async$state_machine__26613__auto__;
})()
;})(switch__26612__auto__,c__26728__auto___28684,mults,ensure_mult,p))
})();
var state__26730__auto__ = (function (){var statearr_28679 = (f__26729__auto__.cljs$core$IFn$_invoke$arity$0 ? f__26729__auto__.cljs$core$IFn$_invoke$arity$0() : f__26729__auto__.call(null));
(statearr_28679[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26728__auto___28684);

return statearr_28679;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__26730__auto__);
});})(c__26728__auto___28684,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var args28715 = [];
var len__18952__auto___28718 = arguments.length;
var i__18953__auto___28719 = (0);
while(true){
if((i__18953__auto___28719 < len__18952__auto___28718)){
args28715.push((arguments[i__18953__auto___28719]));

var G__28720 = (i__18953__auto___28719 + (1));
i__18953__auto___28719 = G__28720;
continue;
} else {
}
break;
}

var G__28717 = args28715.length;
switch (G__28717) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28715.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var args28722 = [];
var len__18952__auto___28725 = arguments.length;
var i__18953__auto___28726 = (0);
while(true){
if((i__18953__auto___28726 < len__18952__auto___28725)){
args28722.push((arguments[i__18953__auto___28726]));

var G__28727 = (i__18953__auto___28726 + (1));
i__18953__auto___28726 = G__28727;
continue;
} else {
}
break;
}

var G__28724 = args28722.length;
switch (G__28724) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28722.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1(p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2(p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var args28729 = [];
var len__18952__auto___28800 = arguments.length;
var i__18953__auto___28801 = (0);
while(true){
if((i__18953__auto___28801 < len__18952__auto___28800)){
args28729.push((arguments[i__18953__auto___28801]));

var G__28802 = (i__18953__auto___28801 + (1));
i__18953__auto___28801 = G__28802;
continue;
} else {
}
break;
}

var G__28731 = args28729.length;
switch (G__28731) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28729.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null) : cljs.core.atom.call(null,null));
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
var c__26728__auto___28804 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__26728__auto___28804,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__26729__auto__ = (function (){var switch__26612__auto__ = ((function (c__26728__auto___28804,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_28770){
var state_val_28771 = (state_28770[(1)]);
if((state_val_28771 === (7))){
var state_28770__$1 = state_28770;
var statearr_28772_28805 = state_28770__$1;
(statearr_28772_28805[(2)] = null);

(statearr_28772_28805[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28771 === (1))){
var state_28770__$1 = state_28770;
var statearr_28773_28806 = state_28770__$1;
(statearr_28773_28806[(2)] = null);

(statearr_28773_28806[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28771 === (4))){
var inst_28734 = (state_28770[(7)]);
var inst_28736 = (inst_28734 < cnt);
var state_28770__$1 = state_28770;
if(cljs.core.truth_(inst_28736)){
var statearr_28774_28807 = state_28770__$1;
(statearr_28774_28807[(1)] = (6));

} else {
var statearr_28775_28808 = state_28770__$1;
(statearr_28775_28808[(1)] = (7));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_28771 === (15))){
var inst_28766 = (state_28770[(2)]);
var state_28770__$1 = state_28770;
var statearr_28776_28809 = state_28770__$1;
(statearr_28776_28809[(2)] = inst_28766);

(statearr_28776_28809[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28771 === (13))){
var inst_28759 = cljs.core.async.close_BANG_(out);
var state_28770__$1 = state_28770;
var statearr_28777_28810 = state_28770__$1;
(statearr_28777_28810[(2)] = inst_28759);

(statearr_28777_28810[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28771 === (6))){
var state_28770__$1 = state_28770;
var statearr_28778_28811 = state_28770__$1;
(statearr_28778_28811[(2)] = null);

(statearr_28778_28811[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28771 === (3))){
var inst_28768 = (state_28770[(2)]);
var state_28770__$1 = state_28770;
return cljs.core.async.impl.ioc_helpers.return_chan(state_28770__$1,inst_28768);
} else {
if((state_val_28771 === (12))){
var inst_28756 = (state_28770[(8)]);
var inst_28756__$1 = (state_28770[(2)]);
var inst_28757 = cljs.core.some(cljs.core.nil_QMARK_,inst_28756__$1);
var state_28770__$1 = (function (){var statearr_28779 = state_28770;
(statearr_28779[(8)] = inst_28756__$1);

return statearr_28779;
})();
if(cljs.core.truth_(inst_28757)){
var statearr_28780_28812 = state_28770__$1;
(statearr_28780_28812[(1)] = (13));

} else {
var statearr_28781_28813 = state_28770__$1;
(statearr_28781_28813[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_28771 === (2))){
var inst_28733 = (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cnt) : cljs.core.reset_BANG_.call(null,dctr,cnt));
var inst_28734 = (0);
var state_28770__$1 = (function (){var statearr_28782 = state_28770;
(statearr_28782[(9)] = inst_28733);

(statearr_28782[(7)] = inst_28734);

return statearr_28782;
})();
var statearr_28783_28814 = state_28770__$1;
(statearr_28783_28814[(2)] = null);

(statearr_28783_28814[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28771 === (11))){
var inst_28734 = (state_28770[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_28770,(10),Object,null,(9));
var inst_28743 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_28734) : chs__$1.call(null,inst_28734));
var inst_28744 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_28734) : done.call(null,inst_28734));
var inst_28745 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_28743,inst_28744);
var state_28770__$1 = state_28770;
var statearr_28784_28815 = state_28770__$1;
(statearr_28784_28815[(2)] = inst_28745);


cljs.core.async.impl.ioc_helpers.process_exception(state_28770__$1);

return cljs.core.cst$kw$recur;
} else {
if((state_val_28771 === (9))){
var inst_28734 = (state_28770[(7)]);
var inst_28747 = (state_28770[(2)]);
var inst_28748 = (inst_28734 + (1));
var inst_28734__$1 = inst_28748;
var state_28770__$1 = (function (){var statearr_28785 = state_28770;
(statearr_28785[(7)] = inst_28734__$1);

(statearr_28785[(10)] = inst_28747);

return statearr_28785;
})();
var statearr_28786_28816 = state_28770__$1;
(statearr_28786_28816[(2)] = null);

(statearr_28786_28816[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28771 === (5))){
var inst_28754 = (state_28770[(2)]);
var state_28770__$1 = (function (){var statearr_28787 = state_28770;
(statearr_28787[(11)] = inst_28754);

return statearr_28787;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_28770__$1,(12),dchan);
} else {
if((state_val_28771 === (14))){
var inst_28756 = (state_28770[(8)]);
var inst_28761 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_28756);
var state_28770__$1 = state_28770;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_28770__$1,(16),out,inst_28761);
} else {
if((state_val_28771 === (16))){
var inst_28763 = (state_28770[(2)]);
var state_28770__$1 = (function (){var statearr_28788 = state_28770;
(statearr_28788[(12)] = inst_28763);

return statearr_28788;
})();
var statearr_28789_28817 = state_28770__$1;
(statearr_28789_28817[(2)] = null);

(statearr_28789_28817[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28771 === (10))){
var inst_28738 = (state_28770[(2)]);
var inst_28739 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_28770__$1 = (function (){var statearr_28790 = state_28770;
(statearr_28790[(13)] = inst_28738);

return statearr_28790;
})();
var statearr_28791_28818 = state_28770__$1;
(statearr_28791_28818[(2)] = inst_28739);


cljs.core.async.impl.ioc_helpers.process_exception(state_28770__$1);

return cljs.core.cst$kw$recur;
} else {
if((state_val_28771 === (8))){
var inst_28752 = (state_28770[(2)]);
var state_28770__$1 = state_28770;
var statearr_28792_28819 = state_28770__$1;
(statearr_28792_28819[(2)] = inst_28752);

(statearr_28792_28819[(1)] = (5));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__26728__auto___28804,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__26612__auto__,c__26728__auto___28804,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__26613__auto__ = null;
var cljs$core$async$state_machine__26613__auto____0 = (function (){
var statearr_28796 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28796[(0)] = cljs$core$async$state_machine__26613__auto__);

(statearr_28796[(1)] = (1));

return statearr_28796;
});
var cljs$core$async$state_machine__26613__auto____1 = (function (state_28770){
while(true){
var ret_value__26614__auto__ = (function (){try{while(true){
var result__26615__auto__ = switch__26612__auto__(state_28770);
if(cljs.core.keyword_identical_QMARK_(result__26615__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__26615__auto__;
}
break;
}
}catch (e28797){if((e28797 instanceof Object)){
var ex__26616__auto__ = e28797;
var statearr_28798_28820 = state_28770;
(statearr_28798_28820[(5)] = ex__26616__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_28770);

return cljs.core.cst$kw$recur;
} else {
throw e28797;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__26614__auto__,cljs.core.cst$kw$recur)){
var G__28821 = state_28770;
state_28770 = G__28821;
continue;
} else {
return ret_value__26614__auto__;
}
break;
}
});
cljs$core$async$state_machine__26613__auto__ = function(state_28770){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26613__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26613__auto____1.call(this,state_28770);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26613__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26613__auto____0;
cljs$core$async$state_machine__26613__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26613__auto____1;
return cljs$core$async$state_machine__26613__auto__;
})()
;})(switch__26612__auto__,c__26728__auto___28804,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__26730__auto__ = (function (){var statearr_28799 = (f__26729__auto__.cljs$core$IFn$_invoke$arity$0 ? f__26729__auto__.cljs$core$IFn$_invoke$arity$0() : f__26729__auto__.call(null));
(statearr_28799[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26728__auto___28804);

return statearr_28799;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__26730__auto__);
});})(c__26728__auto___28804,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var args28823 = [];
var len__18952__auto___28881 = arguments.length;
var i__18953__auto___28882 = (0);
while(true){
if((i__18953__auto___28882 < len__18952__auto___28881)){
args28823.push((arguments[i__18953__auto___28882]));

var G__28883 = (i__18953__auto___28882 + (1));
i__18953__auto___28882 = G__28883;
continue;
} else {
}
break;
}

var G__28825 = args28823.length;
switch (G__28825) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28823.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__26728__auto___28885 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__26728__auto___28885,out){
return (function (){
var f__26729__auto__ = (function (){var switch__26612__auto__ = ((function (c__26728__auto___28885,out){
return (function (state_28857){
var state_val_28858 = (state_28857[(1)]);
if((state_val_28858 === (7))){
var inst_28837 = (state_28857[(7)]);
var inst_28836 = (state_28857[(8)]);
var inst_28836__$1 = (state_28857[(2)]);
var inst_28837__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_28836__$1,(0),null);
var inst_28838 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_28836__$1,(1),null);
var inst_28839 = (inst_28837__$1 == null);
var state_28857__$1 = (function (){var statearr_28859 = state_28857;
(statearr_28859[(7)] = inst_28837__$1);

(statearr_28859[(9)] = inst_28838);

(statearr_28859[(8)] = inst_28836__$1);

return statearr_28859;
})();
if(cljs.core.truth_(inst_28839)){
var statearr_28860_28886 = state_28857__$1;
(statearr_28860_28886[(1)] = (8));

} else {
var statearr_28861_28887 = state_28857__$1;
(statearr_28861_28887[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_28858 === (1))){
var inst_28826 = cljs.core.vec(chs);
var inst_28827 = inst_28826;
var state_28857__$1 = (function (){var statearr_28862 = state_28857;
(statearr_28862[(10)] = inst_28827);

return statearr_28862;
})();
var statearr_28863_28888 = state_28857__$1;
(statearr_28863_28888[(2)] = null);

(statearr_28863_28888[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28858 === (4))){
var inst_28827 = (state_28857[(10)]);
var state_28857__$1 = state_28857;
return cljs.core.async.ioc_alts_BANG_(state_28857__$1,(7),inst_28827);
} else {
if((state_val_28858 === (6))){
var inst_28853 = (state_28857[(2)]);
var state_28857__$1 = state_28857;
var statearr_28864_28889 = state_28857__$1;
(statearr_28864_28889[(2)] = inst_28853);

(statearr_28864_28889[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28858 === (3))){
var inst_28855 = (state_28857[(2)]);
var state_28857__$1 = state_28857;
return cljs.core.async.impl.ioc_helpers.return_chan(state_28857__$1,inst_28855);
} else {
if((state_val_28858 === (2))){
var inst_28827 = (state_28857[(10)]);
var inst_28829 = cljs.core.count(inst_28827);
var inst_28830 = (inst_28829 > (0));
var state_28857__$1 = state_28857;
if(cljs.core.truth_(inst_28830)){
var statearr_28866_28890 = state_28857__$1;
(statearr_28866_28890[(1)] = (4));

} else {
var statearr_28867_28891 = state_28857__$1;
(statearr_28867_28891[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_28858 === (11))){
var inst_28827 = (state_28857[(10)]);
var inst_28846 = (state_28857[(2)]);
var tmp28865 = inst_28827;
var inst_28827__$1 = tmp28865;
var state_28857__$1 = (function (){var statearr_28868 = state_28857;
(statearr_28868[(10)] = inst_28827__$1);

(statearr_28868[(11)] = inst_28846);

return statearr_28868;
})();
var statearr_28869_28892 = state_28857__$1;
(statearr_28869_28892[(2)] = null);

(statearr_28869_28892[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28858 === (9))){
var inst_28837 = (state_28857[(7)]);
var state_28857__$1 = state_28857;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_28857__$1,(11),out,inst_28837);
} else {
if((state_val_28858 === (5))){
var inst_28851 = cljs.core.async.close_BANG_(out);
var state_28857__$1 = state_28857;
var statearr_28870_28893 = state_28857__$1;
(statearr_28870_28893[(2)] = inst_28851);

(statearr_28870_28893[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28858 === (10))){
var inst_28849 = (state_28857[(2)]);
var state_28857__$1 = state_28857;
var statearr_28871_28894 = state_28857__$1;
(statearr_28871_28894[(2)] = inst_28849);

(statearr_28871_28894[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28858 === (8))){
var inst_28837 = (state_28857[(7)]);
var inst_28838 = (state_28857[(9)]);
var inst_28836 = (state_28857[(8)]);
var inst_28827 = (state_28857[(10)]);
var inst_28841 = (function (){var cs = inst_28827;
var vec__28832 = inst_28836;
var v = inst_28837;
var c = inst_28838;
return ((function (cs,vec__28832,v,c,inst_28837,inst_28838,inst_28836,inst_28827,state_val_28858,c__26728__auto___28885,out){
return (function (p1__28822_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__28822_SHARP_);
});
;})(cs,vec__28832,v,c,inst_28837,inst_28838,inst_28836,inst_28827,state_val_28858,c__26728__auto___28885,out))
})();
var inst_28842 = cljs.core.filterv(inst_28841,inst_28827);
var inst_28827__$1 = inst_28842;
var state_28857__$1 = (function (){var statearr_28872 = state_28857;
(statearr_28872[(10)] = inst_28827__$1);

return statearr_28872;
})();
var statearr_28873_28895 = state_28857__$1;
(statearr_28873_28895[(2)] = null);

(statearr_28873_28895[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__26728__auto___28885,out))
;
return ((function (switch__26612__auto__,c__26728__auto___28885,out){
return (function() {
var cljs$core$async$state_machine__26613__auto__ = null;
var cljs$core$async$state_machine__26613__auto____0 = (function (){
var statearr_28877 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28877[(0)] = cljs$core$async$state_machine__26613__auto__);

(statearr_28877[(1)] = (1));

return statearr_28877;
});
var cljs$core$async$state_machine__26613__auto____1 = (function (state_28857){
while(true){
var ret_value__26614__auto__ = (function (){try{while(true){
var result__26615__auto__ = switch__26612__auto__(state_28857);
if(cljs.core.keyword_identical_QMARK_(result__26615__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__26615__auto__;
}
break;
}
}catch (e28878){if((e28878 instanceof Object)){
var ex__26616__auto__ = e28878;
var statearr_28879_28896 = state_28857;
(statearr_28879_28896[(5)] = ex__26616__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_28857);

return cljs.core.cst$kw$recur;
} else {
throw e28878;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__26614__auto__,cljs.core.cst$kw$recur)){
var G__28897 = state_28857;
state_28857 = G__28897;
continue;
} else {
return ret_value__26614__auto__;
}
break;
}
});
cljs$core$async$state_machine__26613__auto__ = function(state_28857){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26613__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26613__auto____1.call(this,state_28857);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26613__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26613__auto____0;
cljs$core$async$state_machine__26613__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26613__auto____1;
return cljs$core$async$state_machine__26613__auto__;
})()
;})(switch__26612__auto__,c__26728__auto___28885,out))
})();
var state__26730__auto__ = (function (){var statearr_28880 = (f__26729__auto__.cljs$core$IFn$_invoke$arity$0 ? f__26729__auto__.cljs$core$IFn$_invoke$arity$0() : f__26729__auto__.call(null));
(statearr_28880[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26728__auto___28885);

return statearr_28880;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__26730__auto__);
});})(c__26728__auto___28885,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var args28898 = [];
var len__18952__auto___28947 = arguments.length;
var i__18953__auto___28948 = (0);
while(true){
if((i__18953__auto___28948 < len__18952__auto___28947)){
args28898.push((arguments[i__18953__auto___28948]));

var G__28949 = (i__18953__auto___28948 + (1));
i__18953__auto___28948 = G__28949;
continue;
} else {
}
break;
}

var G__28900 = args28898.length;
switch (G__28900) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28898.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__26728__auto___28951 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__26728__auto___28951,out){
return (function (){
var f__26729__auto__ = (function (){var switch__26612__auto__ = ((function (c__26728__auto___28951,out){
return (function (state_28924){
var state_val_28925 = (state_28924[(1)]);
if((state_val_28925 === (7))){
var inst_28906 = (state_28924[(7)]);
var inst_28906__$1 = (state_28924[(2)]);
var inst_28907 = (inst_28906__$1 == null);
var inst_28908 = cljs.core.not(inst_28907);
var state_28924__$1 = (function (){var statearr_28926 = state_28924;
(statearr_28926[(7)] = inst_28906__$1);

return statearr_28926;
})();
if(inst_28908){
var statearr_28927_28952 = state_28924__$1;
(statearr_28927_28952[(1)] = (8));

} else {
var statearr_28928_28953 = state_28924__$1;
(statearr_28928_28953[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_28925 === (1))){
var inst_28901 = (0);
var state_28924__$1 = (function (){var statearr_28929 = state_28924;
(statearr_28929[(8)] = inst_28901);

return statearr_28929;
})();
var statearr_28930_28954 = state_28924__$1;
(statearr_28930_28954[(2)] = null);

(statearr_28930_28954[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28925 === (4))){
var state_28924__$1 = state_28924;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_28924__$1,(7),ch);
} else {
if((state_val_28925 === (6))){
var inst_28919 = (state_28924[(2)]);
var state_28924__$1 = state_28924;
var statearr_28931_28955 = state_28924__$1;
(statearr_28931_28955[(2)] = inst_28919);

(statearr_28931_28955[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28925 === (3))){
var inst_28921 = (state_28924[(2)]);
var inst_28922 = cljs.core.async.close_BANG_(out);
var state_28924__$1 = (function (){var statearr_28932 = state_28924;
(statearr_28932[(9)] = inst_28921);

return statearr_28932;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_28924__$1,inst_28922);
} else {
if((state_val_28925 === (2))){
var inst_28901 = (state_28924[(8)]);
var inst_28903 = (inst_28901 < n);
var state_28924__$1 = state_28924;
if(cljs.core.truth_(inst_28903)){
var statearr_28933_28956 = state_28924__$1;
(statearr_28933_28956[(1)] = (4));

} else {
var statearr_28934_28957 = state_28924__$1;
(statearr_28934_28957[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_28925 === (11))){
var inst_28901 = (state_28924[(8)]);
var inst_28911 = (state_28924[(2)]);
var inst_28912 = (inst_28901 + (1));
var inst_28901__$1 = inst_28912;
var state_28924__$1 = (function (){var statearr_28935 = state_28924;
(statearr_28935[(10)] = inst_28911);

(statearr_28935[(8)] = inst_28901__$1);

return statearr_28935;
})();
var statearr_28936_28958 = state_28924__$1;
(statearr_28936_28958[(2)] = null);

(statearr_28936_28958[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28925 === (9))){
var state_28924__$1 = state_28924;
var statearr_28937_28959 = state_28924__$1;
(statearr_28937_28959[(2)] = null);

(statearr_28937_28959[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28925 === (5))){
var state_28924__$1 = state_28924;
var statearr_28938_28960 = state_28924__$1;
(statearr_28938_28960[(2)] = null);

(statearr_28938_28960[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28925 === (10))){
var inst_28916 = (state_28924[(2)]);
var state_28924__$1 = state_28924;
var statearr_28939_28961 = state_28924__$1;
(statearr_28939_28961[(2)] = inst_28916);

(statearr_28939_28961[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28925 === (8))){
var inst_28906 = (state_28924[(7)]);
var state_28924__$1 = state_28924;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_28924__$1,(11),out,inst_28906);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__26728__auto___28951,out))
;
return ((function (switch__26612__auto__,c__26728__auto___28951,out){
return (function() {
var cljs$core$async$state_machine__26613__auto__ = null;
var cljs$core$async$state_machine__26613__auto____0 = (function (){
var statearr_28943 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_28943[(0)] = cljs$core$async$state_machine__26613__auto__);

(statearr_28943[(1)] = (1));

return statearr_28943;
});
var cljs$core$async$state_machine__26613__auto____1 = (function (state_28924){
while(true){
var ret_value__26614__auto__ = (function (){try{while(true){
var result__26615__auto__ = switch__26612__auto__(state_28924);
if(cljs.core.keyword_identical_QMARK_(result__26615__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__26615__auto__;
}
break;
}
}catch (e28944){if((e28944 instanceof Object)){
var ex__26616__auto__ = e28944;
var statearr_28945_28962 = state_28924;
(statearr_28945_28962[(5)] = ex__26616__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_28924);

return cljs.core.cst$kw$recur;
} else {
throw e28944;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__26614__auto__,cljs.core.cst$kw$recur)){
var G__28963 = state_28924;
state_28924 = G__28963;
continue;
} else {
return ret_value__26614__auto__;
}
break;
}
});
cljs$core$async$state_machine__26613__auto__ = function(state_28924){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26613__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26613__auto____1.call(this,state_28924);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26613__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26613__auto____0;
cljs$core$async$state_machine__26613__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26613__auto____1;
return cljs$core$async$state_machine__26613__auto__;
})()
;})(switch__26612__auto__,c__26728__auto___28951,out))
})();
var state__26730__auto__ = (function (){var statearr_28946 = (f__26729__auto__.cljs$core$IFn$_invoke$arity$0 ? f__26729__auto__.cljs$core$IFn$_invoke$arity$0() : f__26729__auto__.call(null));
(statearr_28946[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26728__auto___28951);

return statearr_28946;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__26730__auto__);
});})(c__26728__auto___28951,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async28973 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28973 = (function (map_LT_,f,ch,meta28974){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta28974 = meta28974;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async28973.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28975,meta28974__$1){
var self__ = this;
var _28975__$1 = this;
return (new cljs.core.async.t_cljs$core$async28973(self__.map_LT_,self__.f,self__.ch,meta28974__$1));
});

cljs.core.async.t_cljs$core$async28973.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28975){
var self__ = this;
var _28975__$1 = this;
return self__.meta28974;
});

cljs.core.async.t_cljs$core$async28973.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async28973.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async28973.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t_cljs$core$async28973.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async28973.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async28976 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28976 = (function (map_LT_,f,ch,meta28974,_,fn1,meta28977){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta28974 = meta28974;
this._ = _;
this.fn1 = fn1;
this.meta28977 = meta28977;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async28976.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_28978,meta28977__$1){
var self__ = this;
var _28978__$1 = this;
return (new cljs.core.async.t_cljs$core$async28976(self__.map_LT_,self__.f,self__.ch,self__.meta28974,self__._,self__.fn1,meta28977__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async28976.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_28978){
var self__ = this;
var _28978__$1 = this;
return self__.meta28977;
});})(___$1))
;

cljs.core.async.t_cljs$core$async28976.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async28976.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async28976.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async28976.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__28964_SHARP_){
var G__28979 = (((p1__28964_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__28964_SHARP_) : self__.f.call(null,p1__28964_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__28979) : f1.call(null,G__28979));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async28976.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$map_LT_,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch], null))),cljs.core.cst$kw$doc,"Deprecated - this function will be removed. Use transducer instead"], null)),cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta28974,cljs.core.with_meta(cljs.core.cst$sym$_,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tag,cljs.core.cst$sym$cljs$core$async_SLASH_t_cljs$core$async28973], null)),cljs.core.cst$sym$fn1,cljs.core.cst$sym$meta28977], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async28976.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28976.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28976";

cljs.core.async.t_cljs$core$async28976.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__18421__auto__,writer__18422__auto__,opt__18423__auto__){
return cljs.core._write(writer__18422__auto__,"cljs.core.async/t_cljs$core$async28976");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async28976 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async28976(map_LT___$1,f__$1,ch__$1,meta28974__$1,___$2,fn1__$1,meta28977){
return (new cljs.core.async.t_cljs$core$async28976(map_LT___$1,f__$1,ch__$1,meta28974__$1,___$2,fn1__$1,meta28977));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async28976(self__.map_LT_,self__.f,self__.ch,self__.meta28974,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__17757__auto__ = ret;
if(cljs.core.truth_(and__17757__auto__)){
return !(((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ret) : cljs.core.deref.call(null,ret)) == null));
} else {
return and__17757__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__28980 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ret) : cljs.core.deref.call(null,ret));
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__28980) : self__.f.call(null,G__28980));
})());
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async28973.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async28973.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async28973.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$map_LT_,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch], null))),cljs.core.cst$kw$doc,"Deprecated - this function will be removed. Use transducer instead"], null)),cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta28974], null);
});

cljs.core.async.t_cljs$core$async28973.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28973.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28973";

cljs.core.async.t_cljs$core$async28973.cljs$lang$ctorPrWriter = (function (this__18421__auto__,writer__18422__auto__,opt__18423__auto__){
return cljs.core._write(writer__18422__auto__,"cljs.core.async/t_cljs$core$async28973");
});

cljs.core.async.__GT_t_cljs$core$async28973 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async28973(map_LT___$1,f__$1,ch__$1,meta28974){
return (new cljs.core.async.t_cljs$core$async28973(map_LT___$1,f__$1,ch__$1,meta28974));
});

}

return (new cljs.core.async.t_cljs$core$async28973(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async28984 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28984 = (function (map_GT_,f,ch,meta28985){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta28985 = meta28985;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async28984.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28986,meta28985__$1){
var self__ = this;
var _28986__$1 = this;
return (new cljs.core.async.t_cljs$core$async28984(self__.map_GT_,self__.f,self__.ch,meta28985__$1));
});

cljs.core.async.t_cljs$core$async28984.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28986){
var self__ = this;
var _28986__$1 = this;
return self__.meta28985;
});

cljs.core.async.t_cljs$core$async28984.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async28984.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async28984.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async28984.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async28984.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async28984.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
});

cljs.core.async.t_cljs$core$async28984.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$map_GT_,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch], null))),cljs.core.cst$kw$doc,"Deprecated - this function will be removed. Use transducer instead"], null)),cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta28985], null);
});

cljs.core.async.t_cljs$core$async28984.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28984.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28984";

cljs.core.async.t_cljs$core$async28984.cljs$lang$ctorPrWriter = (function (this__18421__auto__,writer__18422__auto__,opt__18423__auto__){
return cljs.core._write(writer__18422__auto__,"cljs.core.async/t_cljs$core$async28984");
});

cljs.core.async.__GT_t_cljs$core$async28984 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async28984(map_GT___$1,f__$1,ch__$1,meta28985){
return (new cljs.core.async.t_cljs$core$async28984(map_GT___$1,f__$1,ch__$1,meta28985));
});

}

return (new cljs.core.async.t_cljs$core$async28984(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async28990 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28990 = (function (filter_GT_,p,ch,meta28991){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta28991 = meta28991;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async28990.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28992,meta28991__$1){
var self__ = this;
var _28992__$1 = this;
return (new cljs.core.async.t_cljs$core$async28990(self__.filter_GT_,self__.p,self__.ch,meta28991__$1));
});

cljs.core.async.t_cljs$core$async28990.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28992){
var self__ = this;
var _28992__$1 = this;
return self__.meta28991;
});

cljs.core.async.t_cljs$core$async28990.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async28990.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async28990.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t_cljs$core$async28990.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async28990.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async28990.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async28990.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
});

cljs.core.async.t_cljs$core$async28990.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$filter_GT_,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$p,cljs.core.cst$sym$ch], null))),cljs.core.cst$kw$doc,"Deprecated - this function will be removed. Use transducer instead"], null)),cljs.core.cst$sym$p,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta28991], null);
});

cljs.core.async.t_cljs$core$async28990.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28990.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28990";

cljs.core.async.t_cljs$core$async28990.cljs$lang$ctorPrWriter = (function (this__18421__auto__,writer__18422__auto__,opt__18423__auto__){
return cljs.core._write(writer__18422__auto__,"cljs.core.async/t_cljs$core$async28990");
});

cljs.core.async.__GT_t_cljs$core$async28990 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async28990(filter_GT___$1,p__$1,ch__$1,meta28991){
return (new cljs.core.async.t_cljs$core$async28990(filter_GT___$1,p__$1,ch__$1,meta28991));
});

}

return (new cljs.core.async.t_cljs$core$async28990(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var args28993 = [];
var len__18952__auto___29037 = arguments.length;
var i__18953__auto___29038 = (0);
while(true){
if((i__18953__auto___29038 < len__18952__auto___29037)){
args28993.push((arguments[i__18953__auto___29038]));

var G__29039 = (i__18953__auto___29038 + (1));
i__18953__auto___29038 = G__29039;
continue;
} else {
}
break;
}

var G__28995 = args28993.length;
switch (G__28995) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28993.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__26728__auto___29041 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__26728__auto___29041,out){
return (function (){
var f__26729__auto__ = (function (){var switch__26612__auto__ = ((function (c__26728__auto___29041,out){
return (function (state_29016){
var state_val_29017 = (state_29016[(1)]);
if((state_val_29017 === (7))){
var inst_29012 = (state_29016[(2)]);
var state_29016__$1 = state_29016;
var statearr_29018_29042 = state_29016__$1;
(statearr_29018_29042[(2)] = inst_29012);

(statearr_29018_29042[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29017 === (1))){
var state_29016__$1 = state_29016;
var statearr_29019_29043 = state_29016__$1;
(statearr_29019_29043[(2)] = null);

(statearr_29019_29043[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29017 === (4))){
var inst_28998 = (state_29016[(7)]);
var inst_28998__$1 = (state_29016[(2)]);
var inst_28999 = (inst_28998__$1 == null);
var state_29016__$1 = (function (){var statearr_29020 = state_29016;
(statearr_29020[(7)] = inst_28998__$1);

return statearr_29020;
})();
if(cljs.core.truth_(inst_28999)){
var statearr_29021_29044 = state_29016__$1;
(statearr_29021_29044[(1)] = (5));

} else {
var statearr_29022_29045 = state_29016__$1;
(statearr_29022_29045[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_29017 === (6))){
var inst_28998 = (state_29016[(7)]);
var inst_29003 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_28998) : p.call(null,inst_28998));
var state_29016__$1 = state_29016;
if(cljs.core.truth_(inst_29003)){
var statearr_29023_29046 = state_29016__$1;
(statearr_29023_29046[(1)] = (8));

} else {
var statearr_29024_29047 = state_29016__$1;
(statearr_29024_29047[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_29017 === (3))){
var inst_29014 = (state_29016[(2)]);
var state_29016__$1 = state_29016;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29016__$1,inst_29014);
} else {
if((state_val_29017 === (2))){
var state_29016__$1 = state_29016;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29016__$1,(4),ch);
} else {
if((state_val_29017 === (11))){
var inst_29006 = (state_29016[(2)]);
var state_29016__$1 = state_29016;
var statearr_29025_29048 = state_29016__$1;
(statearr_29025_29048[(2)] = inst_29006);

(statearr_29025_29048[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29017 === (9))){
var state_29016__$1 = state_29016;
var statearr_29026_29049 = state_29016__$1;
(statearr_29026_29049[(2)] = null);

(statearr_29026_29049[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29017 === (5))){
var inst_29001 = cljs.core.async.close_BANG_(out);
var state_29016__$1 = state_29016;
var statearr_29027_29050 = state_29016__$1;
(statearr_29027_29050[(2)] = inst_29001);

(statearr_29027_29050[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29017 === (10))){
var inst_29009 = (state_29016[(2)]);
var state_29016__$1 = (function (){var statearr_29028 = state_29016;
(statearr_29028[(8)] = inst_29009);

return statearr_29028;
})();
var statearr_29029_29051 = state_29016__$1;
(statearr_29029_29051[(2)] = null);

(statearr_29029_29051[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29017 === (8))){
var inst_28998 = (state_29016[(7)]);
var state_29016__$1 = state_29016;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29016__$1,(11),out,inst_28998);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__26728__auto___29041,out))
;
return ((function (switch__26612__auto__,c__26728__auto___29041,out){
return (function() {
var cljs$core$async$state_machine__26613__auto__ = null;
var cljs$core$async$state_machine__26613__auto____0 = (function (){
var statearr_29033 = [null,null,null,null,null,null,null,null,null];
(statearr_29033[(0)] = cljs$core$async$state_machine__26613__auto__);

(statearr_29033[(1)] = (1));

return statearr_29033;
});
var cljs$core$async$state_machine__26613__auto____1 = (function (state_29016){
while(true){
var ret_value__26614__auto__ = (function (){try{while(true){
var result__26615__auto__ = switch__26612__auto__(state_29016);
if(cljs.core.keyword_identical_QMARK_(result__26615__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__26615__auto__;
}
break;
}
}catch (e29034){if((e29034 instanceof Object)){
var ex__26616__auto__ = e29034;
var statearr_29035_29052 = state_29016;
(statearr_29035_29052[(5)] = ex__26616__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_29016);

return cljs.core.cst$kw$recur;
} else {
throw e29034;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__26614__auto__,cljs.core.cst$kw$recur)){
var G__29053 = state_29016;
state_29016 = G__29053;
continue;
} else {
return ret_value__26614__auto__;
}
break;
}
});
cljs$core$async$state_machine__26613__auto__ = function(state_29016){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26613__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26613__auto____1.call(this,state_29016);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26613__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26613__auto____0;
cljs$core$async$state_machine__26613__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26613__auto____1;
return cljs$core$async$state_machine__26613__auto__;
})()
;})(switch__26612__auto__,c__26728__auto___29041,out))
})();
var state__26730__auto__ = (function (){var statearr_29036 = (f__26729__auto__.cljs$core$IFn$_invoke$arity$0 ? f__26729__auto__.cljs$core$IFn$_invoke$arity$0() : f__26729__auto__.call(null));
(statearr_29036[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26728__auto___29041);

return statearr_29036;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__26730__auto__);
});})(c__26728__auto___29041,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args29054 = [];
var len__18952__auto___29057 = arguments.length;
var i__18953__auto___29058 = (0);
while(true){
if((i__18953__auto___29058 < len__18952__auto___29057)){
args29054.push((arguments[i__18953__auto___29058]));

var G__29059 = (i__18953__auto___29058 + (1));
i__18953__auto___29058 = G__29059;
continue;
} else {
}
break;
}

var G__29056 = args29054.length;
switch (G__29056) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29054.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__26728__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__26728__auto__){
return (function (){
var f__26729__auto__ = (function (){var switch__26612__auto__ = ((function (c__26728__auto__){
return (function (state_29226){
var state_val_29227 = (state_29226[(1)]);
if((state_val_29227 === (7))){
var inst_29222 = (state_29226[(2)]);
var state_29226__$1 = state_29226;
var statearr_29228_29269 = state_29226__$1;
(statearr_29228_29269[(2)] = inst_29222);

(statearr_29228_29269[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29227 === (20))){
var inst_29192 = (state_29226[(7)]);
var inst_29203 = (state_29226[(2)]);
var inst_29204 = cljs.core.next(inst_29192);
var inst_29178 = inst_29204;
var inst_29179 = null;
var inst_29180 = (0);
var inst_29181 = (0);
var state_29226__$1 = (function (){var statearr_29229 = state_29226;
(statearr_29229[(8)] = inst_29181);

(statearr_29229[(9)] = inst_29178);

(statearr_29229[(10)] = inst_29180);

(statearr_29229[(11)] = inst_29203);

(statearr_29229[(12)] = inst_29179);

return statearr_29229;
})();
var statearr_29230_29270 = state_29226__$1;
(statearr_29230_29270[(2)] = null);

(statearr_29230_29270[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29227 === (1))){
var state_29226__$1 = state_29226;
var statearr_29231_29271 = state_29226__$1;
(statearr_29231_29271[(2)] = null);

(statearr_29231_29271[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29227 === (4))){
var inst_29167 = (state_29226[(13)]);
var inst_29167__$1 = (state_29226[(2)]);
var inst_29168 = (inst_29167__$1 == null);
var state_29226__$1 = (function (){var statearr_29232 = state_29226;
(statearr_29232[(13)] = inst_29167__$1);

return statearr_29232;
})();
if(cljs.core.truth_(inst_29168)){
var statearr_29233_29272 = state_29226__$1;
(statearr_29233_29272[(1)] = (5));

} else {
var statearr_29234_29273 = state_29226__$1;
(statearr_29234_29273[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_29227 === (15))){
var state_29226__$1 = state_29226;
var statearr_29238_29274 = state_29226__$1;
(statearr_29238_29274[(2)] = null);

(statearr_29238_29274[(1)] = (16));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29227 === (21))){
var state_29226__$1 = state_29226;
var statearr_29239_29275 = state_29226__$1;
(statearr_29239_29275[(2)] = null);

(statearr_29239_29275[(1)] = (23));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29227 === (13))){
var inst_29181 = (state_29226[(8)]);
var inst_29178 = (state_29226[(9)]);
var inst_29180 = (state_29226[(10)]);
var inst_29179 = (state_29226[(12)]);
var inst_29188 = (state_29226[(2)]);
var inst_29189 = (inst_29181 + (1));
var tmp29235 = inst_29178;
var tmp29236 = inst_29180;
var tmp29237 = inst_29179;
var inst_29178__$1 = tmp29235;
var inst_29179__$1 = tmp29237;
var inst_29180__$1 = tmp29236;
var inst_29181__$1 = inst_29189;
var state_29226__$1 = (function (){var statearr_29240 = state_29226;
(statearr_29240[(8)] = inst_29181__$1);

(statearr_29240[(9)] = inst_29178__$1);

(statearr_29240[(14)] = inst_29188);

(statearr_29240[(10)] = inst_29180__$1);

(statearr_29240[(12)] = inst_29179__$1);

return statearr_29240;
})();
var statearr_29241_29276 = state_29226__$1;
(statearr_29241_29276[(2)] = null);

(statearr_29241_29276[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29227 === (22))){
var state_29226__$1 = state_29226;
var statearr_29242_29277 = state_29226__$1;
(statearr_29242_29277[(2)] = null);

(statearr_29242_29277[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29227 === (6))){
var inst_29167 = (state_29226[(13)]);
var inst_29176 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_29167) : f.call(null,inst_29167));
var inst_29177 = cljs.core.seq(inst_29176);
var inst_29178 = inst_29177;
var inst_29179 = null;
var inst_29180 = (0);
var inst_29181 = (0);
var state_29226__$1 = (function (){var statearr_29243 = state_29226;
(statearr_29243[(8)] = inst_29181);

(statearr_29243[(9)] = inst_29178);

(statearr_29243[(10)] = inst_29180);

(statearr_29243[(12)] = inst_29179);

return statearr_29243;
})();
var statearr_29244_29278 = state_29226__$1;
(statearr_29244_29278[(2)] = null);

(statearr_29244_29278[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29227 === (17))){
var inst_29192 = (state_29226[(7)]);
var inst_29196 = cljs.core.chunk_first(inst_29192);
var inst_29197 = cljs.core.chunk_rest(inst_29192);
var inst_29198 = cljs.core.count(inst_29196);
var inst_29178 = inst_29197;
var inst_29179 = inst_29196;
var inst_29180 = inst_29198;
var inst_29181 = (0);
var state_29226__$1 = (function (){var statearr_29245 = state_29226;
(statearr_29245[(8)] = inst_29181);

(statearr_29245[(9)] = inst_29178);

(statearr_29245[(10)] = inst_29180);

(statearr_29245[(12)] = inst_29179);

return statearr_29245;
})();
var statearr_29246_29279 = state_29226__$1;
(statearr_29246_29279[(2)] = null);

(statearr_29246_29279[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29227 === (3))){
var inst_29224 = (state_29226[(2)]);
var state_29226__$1 = state_29226;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29226__$1,inst_29224);
} else {
if((state_val_29227 === (12))){
var inst_29212 = (state_29226[(2)]);
var state_29226__$1 = state_29226;
var statearr_29247_29280 = state_29226__$1;
(statearr_29247_29280[(2)] = inst_29212);

(statearr_29247_29280[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29227 === (2))){
var state_29226__$1 = state_29226;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29226__$1,(4),in$);
} else {
if((state_val_29227 === (23))){
var inst_29220 = (state_29226[(2)]);
var state_29226__$1 = state_29226;
var statearr_29248_29281 = state_29226__$1;
(statearr_29248_29281[(2)] = inst_29220);

(statearr_29248_29281[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29227 === (19))){
var inst_29207 = (state_29226[(2)]);
var state_29226__$1 = state_29226;
var statearr_29249_29282 = state_29226__$1;
(statearr_29249_29282[(2)] = inst_29207);

(statearr_29249_29282[(1)] = (16));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29227 === (11))){
var inst_29178 = (state_29226[(9)]);
var inst_29192 = (state_29226[(7)]);
var inst_29192__$1 = cljs.core.seq(inst_29178);
var state_29226__$1 = (function (){var statearr_29250 = state_29226;
(statearr_29250[(7)] = inst_29192__$1);

return statearr_29250;
})();
if(inst_29192__$1){
var statearr_29251_29283 = state_29226__$1;
(statearr_29251_29283[(1)] = (14));

} else {
var statearr_29252_29284 = state_29226__$1;
(statearr_29252_29284[(1)] = (15));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_29227 === (9))){
var inst_29214 = (state_29226[(2)]);
var inst_29215 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_29226__$1 = (function (){var statearr_29253 = state_29226;
(statearr_29253[(15)] = inst_29214);

return statearr_29253;
})();
if(cljs.core.truth_(inst_29215)){
var statearr_29254_29285 = state_29226__$1;
(statearr_29254_29285[(1)] = (21));

} else {
var statearr_29255_29286 = state_29226__$1;
(statearr_29255_29286[(1)] = (22));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_29227 === (5))){
var inst_29170 = cljs.core.async.close_BANG_(out);
var state_29226__$1 = state_29226;
var statearr_29256_29287 = state_29226__$1;
(statearr_29256_29287[(2)] = inst_29170);

(statearr_29256_29287[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29227 === (14))){
var inst_29192 = (state_29226[(7)]);
var inst_29194 = cljs.core.chunked_seq_QMARK_(inst_29192);
var state_29226__$1 = state_29226;
if(inst_29194){
var statearr_29257_29288 = state_29226__$1;
(statearr_29257_29288[(1)] = (17));

} else {
var statearr_29258_29289 = state_29226__$1;
(statearr_29258_29289[(1)] = (18));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_29227 === (16))){
var inst_29210 = (state_29226[(2)]);
var state_29226__$1 = state_29226;
var statearr_29259_29290 = state_29226__$1;
(statearr_29259_29290[(2)] = inst_29210);

(statearr_29259_29290[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29227 === (10))){
var inst_29181 = (state_29226[(8)]);
var inst_29179 = (state_29226[(12)]);
var inst_29186 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_29179,inst_29181);
var state_29226__$1 = state_29226;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29226__$1,(13),out,inst_29186);
} else {
if((state_val_29227 === (18))){
var inst_29192 = (state_29226[(7)]);
var inst_29201 = cljs.core.first(inst_29192);
var state_29226__$1 = state_29226;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29226__$1,(20),out,inst_29201);
} else {
if((state_val_29227 === (8))){
var inst_29181 = (state_29226[(8)]);
var inst_29180 = (state_29226[(10)]);
var inst_29183 = (inst_29181 < inst_29180);
var inst_29184 = inst_29183;
var state_29226__$1 = state_29226;
if(cljs.core.truth_(inst_29184)){
var statearr_29260_29291 = state_29226__$1;
(statearr_29260_29291[(1)] = (10));

} else {
var statearr_29261_29292 = state_29226__$1;
(statearr_29261_29292[(1)] = (11));

}

return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__26728__auto__))
;
return ((function (switch__26612__auto__,c__26728__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__26613__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__26613__auto____0 = (function (){
var statearr_29265 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29265[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__26613__auto__);

(statearr_29265[(1)] = (1));

return statearr_29265;
});
var cljs$core$async$mapcat_STAR__$_state_machine__26613__auto____1 = (function (state_29226){
while(true){
var ret_value__26614__auto__ = (function (){try{while(true){
var result__26615__auto__ = switch__26612__auto__(state_29226);
if(cljs.core.keyword_identical_QMARK_(result__26615__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__26615__auto__;
}
break;
}
}catch (e29266){if((e29266 instanceof Object)){
var ex__26616__auto__ = e29266;
var statearr_29267_29293 = state_29226;
(statearr_29267_29293[(5)] = ex__26616__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_29226);

return cljs.core.cst$kw$recur;
} else {
throw e29266;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__26614__auto__,cljs.core.cst$kw$recur)){
var G__29294 = state_29226;
state_29226 = G__29294;
continue;
} else {
return ret_value__26614__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__26613__auto__ = function(state_29226){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__26613__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__26613__auto____1.call(this,state_29226);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__26613__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__26613__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__26613__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__26613__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__26613__auto__;
})()
;})(switch__26612__auto__,c__26728__auto__))
})();
var state__26730__auto__ = (function (){var statearr_29268 = (f__26729__auto__.cljs$core$IFn$_invoke$arity$0 ? f__26729__auto__.cljs$core$IFn$_invoke$arity$0() : f__26729__auto__.call(null));
(statearr_29268[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26728__auto__);

return statearr_29268;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__26730__auto__);
});})(c__26728__auto__))
);

return c__26728__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args29295 = [];
var len__18952__auto___29298 = arguments.length;
var i__18953__auto___29299 = (0);
while(true){
if((i__18953__auto___29299 < len__18952__auto___29298)){
args29295.push((arguments[i__18953__auto___29299]));

var G__29300 = (i__18953__auto___29299 + (1));
i__18953__auto___29299 = G__29300;
continue;
} else {
}
break;
}

var G__29297 = args29295.length;
switch (G__29297) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29295.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var args29302 = [];
var len__18952__auto___29305 = arguments.length;
var i__18953__auto___29306 = (0);
while(true){
if((i__18953__auto___29306 < len__18952__auto___29305)){
args29302.push((arguments[i__18953__auto___29306]));

var G__29307 = (i__18953__auto___29306 + (1));
i__18953__auto___29306 = G__29307;
continue;
} else {
}
break;
}

var G__29304 = args29302.length;
switch (G__29304) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29302.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var args29309 = [];
var len__18952__auto___29360 = arguments.length;
var i__18953__auto___29361 = (0);
while(true){
if((i__18953__auto___29361 < len__18952__auto___29360)){
args29309.push((arguments[i__18953__auto___29361]));

var G__29362 = (i__18953__auto___29361 + (1));
i__18953__auto___29361 = G__29362;
continue;
} else {
}
break;
}

var G__29311 = args29309.length;
switch (G__29311) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29309.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__26728__auto___29364 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__26728__auto___29364,out){
return (function (){
var f__26729__auto__ = (function (){var switch__26612__auto__ = ((function (c__26728__auto___29364,out){
return (function (state_29335){
var state_val_29336 = (state_29335[(1)]);
if((state_val_29336 === (7))){
var inst_29330 = (state_29335[(2)]);
var state_29335__$1 = state_29335;
var statearr_29337_29365 = state_29335__$1;
(statearr_29337_29365[(2)] = inst_29330);

(statearr_29337_29365[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29336 === (1))){
var inst_29312 = null;
var state_29335__$1 = (function (){var statearr_29338 = state_29335;
(statearr_29338[(7)] = inst_29312);

return statearr_29338;
})();
var statearr_29339_29366 = state_29335__$1;
(statearr_29339_29366[(2)] = null);

(statearr_29339_29366[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29336 === (4))){
var inst_29315 = (state_29335[(8)]);
var inst_29315__$1 = (state_29335[(2)]);
var inst_29316 = (inst_29315__$1 == null);
var inst_29317 = cljs.core.not(inst_29316);
var state_29335__$1 = (function (){var statearr_29340 = state_29335;
(statearr_29340[(8)] = inst_29315__$1);

return statearr_29340;
})();
if(inst_29317){
var statearr_29341_29367 = state_29335__$1;
(statearr_29341_29367[(1)] = (5));

} else {
var statearr_29342_29368 = state_29335__$1;
(statearr_29342_29368[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_29336 === (6))){
var state_29335__$1 = state_29335;
var statearr_29343_29369 = state_29335__$1;
(statearr_29343_29369[(2)] = null);

(statearr_29343_29369[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29336 === (3))){
var inst_29332 = (state_29335[(2)]);
var inst_29333 = cljs.core.async.close_BANG_(out);
var state_29335__$1 = (function (){var statearr_29344 = state_29335;
(statearr_29344[(9)] = inst_29332);

return statearr_29344;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_29335__$1,inst_29333);
} else {
if((state_val_29336 === (2))){
var state_29335__$1 = state_29335;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29335__$1,(4),ch);
} else {
if((state_val_29336 === (11))){
var inst_29315 = (state_29335[(8)]);
var inst_29324 = (state_29335[(2)]);
var inst_29312 = inst_29315;
var state_29335__$1 = (function (){var statearr_29345 = state_29335;
(statearr_29345[(10)] = inst_29324);

(statearr_29345[(7)] = inst_29312);

return statearr_29345;
})();
var statearr_29346_29370 = state_29335__$1;
(statearr_29346_29370[(2)] = null);

(statearr_29346_29370[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29336 === (9))){
var inst_29315 = (state_29335[(8)]);
var state_29335__$1 = state_29335;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29335__$1,(11),out,inst_29315);
} else {
if((state_val_29336 === (5))){
var inst_29315 = (state_29335[(8)]);
var inst_29312 = (state_29335[(7)]);
var inst_29319 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_29315,inst_29312);
var state_29335__$1 = state_29335;
if(inst_29319){
var statearr_29348_29371 = state_29335__$1;
(statearr_29348_29371[(1)] = (8));

} else {
var statearr_29349_29372 = state_29335__$1;
(statearr_29349_29372[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_29336 === (10))){
var inst_29327 = (state_29335[(2)]);
var state_29335__$1 = state_29335;
var statearr_29350_29373 = state_29335__$1;
(statearr_29350_29373[(2)] = inst_29327);

(statearr_29350_29373[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29336 === (8))){
var inst_29312 = (state_29335[(7)]);
var tmp29347 = inst_29312;
var inst_29312__$1 = tmp29347;
var state_29335__$1 = (function (){var statearr_29351 = state_29335;
(statearr_29351[(7)] = inst_29312__$1);

return statearr_29351;
})();
var statearr_29352_29374 = state_29335__$1;
(statearr_29352_29374[(2)] = null);

(statearr_29352_29374[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__26728__auto___29364,out))
;
return ((function (switch__26612__auto__,c__26728__auto___29364,out){
return (function() {
var cljs$core$async$state_machine__26613__auto__ = null;
var cljs$core$async$state_machine__26613__auto____0 = (function (){
var statearr_29356 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_29356[(0)] = cljs$core$async$state_machine__26613__auto__);

(statearr_29356[(1)] = (1));

return statearr_29356;
});
var cljs$core$async$state_machine__26613__auto____1 = (function (state_29335){
while(true){
var ret_value__26614__auto__ = (function (){try{while(true){
var result__26615__auto__ = switch__26612__auto__(state_29335);
if(cljs.core.keyword_identical_QMARK_(result__26615__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__26615__auto__;
}
break;
}
}catch (e29357){if((e29357 instanceof Object)){
var ex__26616__auto__ = e29357;
var statearr_29358_29375 = state_29335;
(statearr_29358_29375[(5)] = ex__26616__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_29335);

return cljs.core.cst$kw$recur;
} else {
throw e29357;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__26614__auto__,cljs.core.cst$kw$recur)){
var G__29376 = state_29335;
state_29335 = G__29376;
continue;
} else {
return ret_value__26614__auto__;
}
break;
}
});
cljs$core$async$state_machine__26613__auto__ = function(state_29335){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26613__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26613__auto____1.call(this,state_29335);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26613__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26613__auto____0;
cljs$core$async$state_machine__26613__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26613__auto____1;
return cljs$core$async$state_machine__26613__auto__;
})()
;})(switch__26612__auto__,c__26728__auto___29364,out))
})();
var state__26730__auto__ = (function (){var statearr_29359 = (f__26729__auto__.cljs$core$IFn$_invoke$arity$0 ? f__26729__auto__.cljs$core$IFn$_invoke$arity$0() : f__26729__auto__.call(null));
(statearr_29359[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26728__auto___29364);

return statearr_29359;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__26730__auto__);
});})(c__26728__auto___29364,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args29377 = [];
var len__18952__auto___29447 = arguments.length;
var i__18953__auto___29448 = (0);
while(true){
if((i__18953__auto___29448 < len__18952__auto___29447)){
args29377.push((arguments[i__18953__auto___29448]));

var G__29449 = (i__18953__auto___29448 + (1));
i__18953__auto___29448 = G__29449;
continue;
} else {
}
break;
}

var G__29379 = args29377.length;
switch (G__29379) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29377.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__26728__auto___29451 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__26728__auto___29451,out){
return (function (){
var f__26729__auto__ = (function (){var switch__26612__auto__ = ((function (c__26728__auto___29451,out){
return (function (state_29417){
var state_val_29418 = (state_29417[(1)]);
if((state_val_29418 === (7))){
var inst_29413 = (state_29417[(2)]);
var state_29417__$1 = state_29417;
var statearr_29419_29452 = state_29417__$1;
(statearr_29419_29452[(2)] = inst_29413);

(statearr_29419_29452[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29418 === (1))){
var inst_29380 = (new Array(n));
var inst_29381 = inst_29380;
var inst_29382 = (0);
var state_29417__$1 = (function (){var statearr_29420 = state_29417;
(statearr_29420[(7)] = inst_29381);

(statearr_29420[(8)] = inst_29382);

return statearr_29420;
})();
var statearr_29421_29453 = state_29417__$1;
(statearr_29421_29453[(2)] = null);

(statearr_29421_29453[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29418 === (4))){
var inst_29385 = (state_29417[(9)]);
var inst_29385__$1 = (state_29417[(2)]);
var inst_29386 = (inst_29385__$1 == null);
var inst_29387 = cljs.core.not(inst_29386);
var state_29417__$1 = (function (){var statearr_29422 = state_29417;
(statearr_29422[(9)] = inst_29385__$1);

return statearr_29422;
})();
if(inst_29387){
var statearr_29423_29454 = state_29417__$1;
(statearr_29423_29454[(1)] = (5));

} else {
var statearr_29424_29455 = state_29417__$1;
(statearr_29424_29455[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_29418 === (15))){
var inst_29407 = (state_29417[(2)]);
var state_29417__$1 = state_29417;
var statearr_29425_29456 = state_29417__$1;
(statearr_29425_29456[(2)] = inst_29407);

(statearr_29425_29456[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29418 === (13))){
var state_29417__$1 = state_29417;
var statearr_29426_29457 = state_29417__$1;
(statearr_29426_29457[(2)] = null);

(statearr_29426_29457[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29418 === (6))){
var inst_29382 = (state_29417[(8)]);
var inst_29403 = (inst_29382 > (0));
var state_29417__$1 = state_29417;
if(cljs.core.truth_(inst_29403)){
var statearr_29427_29458 = state_29417__$1;
(statearr_29427_29458[(1)] = (12));

} else {
var statearr_29428_29459 = state_29417__$1;
(statearr_29428_29459[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_29418 === (3))){
var inst_29415 = (state_29417[(2)]);
var state_29417__$1 = state_29417;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29417__$1,inst_29415);
} else {
if((state_val_29418 === (12))){
var inst_29381 = (state_29417[(7)]);
var inst_29405 = cljs.core.vec(inst_29381);
var state_29417__$1 = state_29417;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29417__$1,(15),out,inst_29405);
} else {
if((state_val_29418 === (2))){
var state_29417__$1 = state_29417;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29417__$1,(4),ch);
} else {
if((state_val_29418 === (11))){
var inst_29397 = (state_29417[(2)]);
var inst_29398 = (new Array(n));
var inst_29381 = inst_29398;
var inst_29382 = (0);
var state_29417__$1 = (function (){var statearr_29429 = state_29417;
(statearr_29429[(10)] = inst_29397);

(statearr_29429[(7)] = inst_29381);

(statearr_29429[(8)] = inst_29382);

return statearr_29429;
})();
var statearr_29430_29460 = state_29417__$1;
(statearr_29430_29460[(2)] = null);

(statearr_29430_29460[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29418 === (9))){
var inst_29381 = (state_29417[(7)]);
var inst_29395 = cljs.core.vec(inst_29381);
var state_29417__$1 = state_29417;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29417__$1,(11),out,inst_29395);
} else {
if((state_val_29418 === (5))){
var inst_29381 = (state_29417[(7)]);
var inst_29390 = (state_29417[(11)]);
var inst_29382 = (state_29417[(8)]);
var inst_29385 = (state_29417[(9)]);
var inst_29389 = (inst_29381[inst_29382] = inst_29385);
var inst_29390__$1 = (inst_29382 + (1));
var inst_29391 = (inst_29390__$1 < n);
var state_29417__$1 = (function (){var statearr_29431 = state_29417;
(statearr_29431[(11)] = inst_29390__$1);

(statearr_29431[(12)] = inst_29389);

return statearr_29431;
})();
if(cljs.core.truth_(inst_29391)){
var statearr_29432_29461 = state_29417__$1;
(statearr_29432_29461[(1)] = (8));

} else {
var statearr_29433_29462 = state_29417__$1;
(statearr_29433_29462[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_29418 === (14))){
var inst_29410 = (state_29417[(2)]);
var inst_29411 = cljs.core.async.close_BANG_(out);
var state_29417__$1 = (function (){var statearr_29435 = state_29417;
(statearr_29435[(13)] = inst_29410);

return statearr_29435;
})();
var statearr_29436_29463 = state_29417__$1;
(statearr_29436_29463[(2)] = inst_29411);

(statearr_29436_29463[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29418 === (10))){
var inst_29401 = (state_29417[(2)]);
var state_29417__$1 = state_29417;
var statearr_29437_29464 = state_29417__$1;
(statearr_29437_29464[(2)] = inst_29401);

(statearr_29437_29464[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29418 === (8))){
var inst_29381 = (state_29417[(7)]);
var inst_29390 = (state_29417[(11)]);
var tmp29434 = inst_29381;
var inst_29381__$1 = tmp29434;
var inst_29382 = inst_29390;
var state_29417__$1 = (function (){var statearr_29438 = state_29417;
(statearr_29438[(7)] = inst_29381__$1);

(statearr_29438[(8)] = inst_29382);

return statearr_29438;
})();
var statearr_29439_29465 = state_29417__$1;
(statearr_29439_29465[(2)] = null);

(statearr_29439_29465[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__26728__auto___29451,out))
;
return ((function (switch__26612__auto__,c__26728__auto___29451,out){
return (function() {
var cljs$core$async$state_machine__26613__auto__ = null;
var cljs$core$async$state_machine__26613__auto____0 = (function (){
var statearr_29443 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29443[(0)] = cljs$core$async$state_machine__26613__auto__);

(statearr_29443[(1)] = (1));

return statearr_29443;
});
var cljs$core$async$state_machine__26613__auto____1 = (function (state_29417){
while(true){
var ret_value__26614__auto__ = (function (){try{while(true){
var result__26615__auto__ = switch__26612__auto__(state_29417);
if(cljs.core.keyword_identical_QMARK_(result__26615__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__26615__auto__;
}
break;
}
}catch (e29444){if((e29444 instanceof Object)){
var ex__26616__auto__ = e29444;
var statearr_29445_29466 = state_29417;
(statearr_29445_29466[(5)] = ex__26616__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_29417);

return cljs.core.cst$kw$recur;
} else {
throw e29444;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__26614__auto__,cljs.core.cst$kw$recur)){
var G__29467 = state_29417;
state_29417 = G__29467;
continue;
} else {
return ret_value__26614__auto__;
}
break;
}
});
cljs$core$async$state_machine__26613__auto__ = function(state_29417){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26613__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26613__auto____1.call(this,state_29417);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26613__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26613__auto____0;
cljs$core$async$state_machine__26613__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26613__auto____1;
return cljs$core$async$state_machine__26613__auto__;
})()
;})(switch__26612__auto__,c__26728__auto___29451,out))
})();
var state__26730__auto__ = (function (){var statearr_29446 = (f__26729__auto__.cljs$core$IFn$_invoke$arity$0 ? f__26729__auto__.cljs$core$IFn$_invoke$arity$0() : f__26729__auto__.call(null));
(statearr_29446[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26728__auto___29451);

return statearr_29446;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__26730__auto__);
});})(c__26728__auto___29451,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args29468 = [];
var len__18952__auto___29542 = arguments.length;
var i__18953__auto___29543 = (0);
while(true){
if((i__18953__auto___29543 < len__18952__auto___29542)){
args29468.push((arguments[i__18953__auto___29543]));

var G__29544 = (i__18953__auto___29543 + (1));
i__18953__auto___29543 = G__29544;
continue;
} else {
}
break;
}

var G__29470 = args29468.length;
switch (G__29470) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29468.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__26728__auto___29546 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__26728__auto___29546,out){
return (function (){
var f__26729__auto__ = (function (){var switch__26612__auto__ = ((function (c__26728__auto___29546,out){
return (function (state_29512){
var state_val_29513 = (state_29512[(1)]);
if((state_val_29513 === (7))){
var inst_29508 = (state_29512[(2)]);
var state_29512__$1 = state_29512;
var statearr_29514_29547 = state_29512__$1;
(statearr_29514_29547[(2)] = inst_29508);

(statearr_29514_29547[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29513 === (1))){
var inst_29471 = [];
var inst_29472 = inst_29471;
var inst_29473 = cljs.core.cst$kw$cljs$core$async_SLASH_nothing;
var state_29512__$1 = (function (){var statearr_29515 = state_29512;
(statearr_29515[(7)] = inst_29473);

(statearr_29515[(8)] = inst_29472);

return statearr_29515;
})();
var statearr_29516_29548 = state_29512__$1;
(statearr_29516_29548[(2)] = null);

(statearr_29516_29548[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29513 === (4))){
var inst_29476 = (state_29512[(9)]);
var inst_29476__$1 = (state_29512[(2)]);
var inst_29477 = (inst_29476__$1 == null);
var inst_29478 = cljs.core.not(inst_29477);
var state_29512__$1 = (function (){var statearr_29517 = state_29512;
(statearr_29517[(9)] = inst_29476__$1);

return statearr_29517;
})();
if(inst_29478){
var statearr_29518_29549 = state_29512__$1;
(statearr_29518_29549[(1)] = (5));

} else {
var statearr_29519_29550 = state_29512__$1;
(statearr_29519_29550[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_29513 === (15))){
var inst_29502 = (state_29512[(2)]);
var state_29512__$1 = state_29512;
var statearr_29520_29551 = state_29512__$1;
(statearr_29520_29551[(2)] = inst_29502);

(statearr_29520_29551[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29513 === (13))){
var state_29512__$1 = state_29512;
var statearr_29521_29552 = state_29512__$1;
(statearr_29521_29552[(2)] = null);

(statearr_29521_29552[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29513 === (6))){
var inst_29472 = (state_29512[(8)]);
var inst_29497 = inst_29472.length;
var inst_29498 = (inst_29497 > (0));
var state_29512__$1 = state_29512;
if(cljs.core.truth_(inst_29498)){
var statearr_29522_29553 = state_29512__$1;
(statearr_29522_29553[(1)] = (12));

} else {
var statearr_29523_29554 = state_29512__$1;
(statearr_29523_29554[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_29513 === (3))){
var inst_29510 = (state_29512[(2)]);
var state_29512__$1 = state_29512;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29512__$1,inst_29510);
} else {
if((state_val_29513 === (12))){
var inst_29472 = (state_29512[(8)]);
var inst_29500 = cljs.core.vec(inst_29472);
var state_29512__$1 = state_29512;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29512__$1,(15),out,inst_29500);
} else {
if((state_val_29513 === (2))){
var state_29512__$1 = state_29512;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29512__$1,(4),ch);
} else {
if((state_val_29513 === (11))){
var inst_29476 = (state_29512[(9)]);
var inst_29480 = (state_29512[(10)]);
var inst_29490 = (state_29512[(2)]);
var inst_29491 = [];
var inst_29492 = inst_29491.push(inst_29476);
var inst_29472 = inst_29491;
var inst_29473 = inst_29480;
var state_29512__$1 = (function (){var statearr_29524 = state_29512;
(statearr_29524[(11)] = inst_29490);

(statearr_29524[(7)] = inst_29473);

(statearr_29524[(12)] = inst_29492);

(statearr_29524[(8)] = inst_29472);

return statearr_29524;
})();
var statearr_29525_29555 = state_29512__$1;
(statearr_29525_29555[(2)] = null);

(statearr_29525_29555[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29513 === (9))){
var inst_29472 = (state_29512[(8)]);
var inst_29488 = cljs.core.vec(inst_29472);
var state_29512__$1 = state_29512;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29512__$1,(11),out,inst_29488);
} else {
if((state_val_29513 === (5))){
var inst_29476 = (state_29512[(9)]);
var inst_29473 = (state_29512[(7)]);
var inst_29480 = (state_29512[(10)]);
var inst_29480__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_29476) : f.call(null,inst_29476));
var inst_29481 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_29480__$1,inst_29473);
var inst_29482 = cljs.core.keyword_identical_QMARK_(inst_29473,cljs.core.cst$kw$cljs$core$async_SLASH_nothing);
var inst_29483 = (inst_29481) || (inst_29482);
var state_29512__$1 = (function (){var statearr_29526 = state_29512;
(statearr_29526[(10)] = inst_29480__$1);

return statearr_29526;
})();
if(cljs.core.truth_(inst_29483)){
var statearr_29527_29556 = state_29512__$1;
(statearr_29527_29556[(1)] = (8));

} else {
var statearr_29528_29557 = state_29512__$1;
(statearr_29528_29557[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_29513 === (14))){
var inst_29505 = (state_29512[(2)]);
var inst_29506 = cljs.core.async.close_BANG_(out);
var state_29512__$1 = (function (){var statearr_29530 = state_29512;
(statearr_29530[(13)] = inst_29505);

return statearr_29530;
})();
var statearr_29531_29558 = state_29512__$1;
(statearr_29531_29558[(2)] = inst_29506);

(statearr_29531_29558[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29513 === (10))){
var inst_29495 = (state_29512[(2)]);
var state_29512__$1 = state_29512;
var statearr_29532_29559 = state_29512__$1;
(statearr_29532_29559[(2)] = inst_29495);

(statearr_29532_29559[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29513 === (8))){
var inst_29476 = (state_29512[(9)]);
var inst_29480 = (state_29512[(10)]);
var inst_29472 = (state_29512[(8)]);
var inst_29485 = inst_29472.push(inst_29476);
var tmp29529 = inst_29472;
var inst_29472__$1 = tmp29529;
var inst_29473 = inst_29480;
var state_29512__$1 = (function (){var statearr_29533 = state_29512;
(statearr_29533[(14)] = inst_29485);

(statearr_29533[(7)] = inst_29473);

(statearr_29533[(8)] = inst_29472__$1);

return statearr_29533;
})();
var statearr_29534_29560 = state_29512__$1;
(statearr_29534_29560[(2)] = null);

(statearr_29534_29560[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__26728__auto___29546,out))
;
return ((function (switch__26612__auto__,c__26728__auto___29546,out){
return (function() {
var cljs$core$async$state_machine__26613__auto__ = null;
var cljs$core$async$state_machine__26613__auto____0 = (function (){
var statearr_29538 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29538[(0)] = cljs$core$async$state_machine__26613__auto__);

(statearr_29538[(1)] = (1));

return statearr_29538;
});
var cljs$core$async$state_machine__26613__auto____1 = (function (state_29512){
while(true){
var ret_value__26614__auto__ = (function (){try{while(true){
var result__26615__auto__ = switch__26612__auto__(state_29512);
if(cljs.core.keyword_identical_QMARK_(result__26615__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__26615__auto__;
}
break;
}
}catch (e29539){if((e29539 instanceof Object)){
var ex__26616__auto__ = e29539;
var statearr_29540_29561 = state_29512;
(statearr_29540_29561[(5)] = ex__26616__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_29512);

return cljs.core.cst$kw$recur;
} else {
throw e29539;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__26614__auto__,cljs.core.cst$kw$recur)){
var G__29562 = state_29512;
state_29512 = G__29562;
continue;
} else {
return ret_value__26614__auto__;
}
break;
}
});
cljs$core$async$state_machine__26613__auto__ = function(state_29512){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26613__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26613__auto____1.call(this,state_29512);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26613__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26613__auto____0;
cljs$core$async$state_machine__26613__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26613__auto____1;
return cljs$core$async$state_machine__26613__auto__;
})()
;})(switch__26612__auto__,c__26728__auto___29546,out))
})();
var state__26730__auto__ = (function (){var statearr_29541 = (f__26729__auto__.cljs$core$IFn$_invoke$arity$0 ? f__26729__auto__.cljs$core$IFn$_invoke$arity$0() : f__26729__auto__.call(null));
(statearr_29541[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26728__auto___29546);

return statearr_29541;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__26730__auto__);
});})(c__26728__auto___29546,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

