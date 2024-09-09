// Compiled by ClojureScript 1.11.132 {:optimizations :none}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('goog.array');
goog.scope(function(){
cljs.core.async.goog$module$goog$array = goog.module.get('goog.array');
});
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__11431 = arguments.length;
switch (G__11431) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async11432 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async11432 = (function (f,blockable,meta11433){
this.f = f;
this.blockable = blockable;
this.meta11433 = meta11433;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async11432.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11434,meta11433__$1){
var self__ = this;
var _11434__$1 = this;
return (new cljs.core.async.t_cljs$core$async11432(self__.f,self__.blockable,meta11433__$1));
}));

(cljs.core.async.t_cljs$core$async11432.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11434){
var self__ = this;
var _11434__$1 = this;
return self__.meta11433;
}));

(cljs.core.async.t_cljs$core$async11432.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async11432.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async11432.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async11432.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async11432.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta11433","meta11433",-1620812872,null)], null);
}));

(cljs.core.async.t_cljs$core$async11432.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async11432.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async11432");

(cljs.core.async.t_cljs$core$async11432.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write.call(null,writer__5288__auto__,"cljs.core.async/t_cljs$core$async11432");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async11432.
 */
cljs.core.async.__GT_t_cljs$core$async11432 = (function cljs$core$async$__GT_t_cljs$core$async11432(f__$1,blockable__$1,meta11433){
return (new cljs.core.async.t_cljs$core$async11432(f__$1,blockable__$1,meta11433));
});

}

return (new cljs.core.async.t_cljs$core$async11432(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
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
var G__11438 = arguments.length;
switch (G__11438) {
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
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__11441 = arguments.length;
switch (G__11441) {
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
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
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
var G__11446 = arguments.length;
switch (G__11446) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_11459 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_11459);
} else {
cljs.core.async.impl.dispatch.run.call(null,(function (){
return fn1.call(null,val_11459);
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__11479 = arguments.length;
switch (G__11479) {
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
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5802__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5802__auto__)){
var ret = temp__5802__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5802__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__5802__auto__)){
var retb = temp__5802__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,(function (){
return fn1.call(null,ret);
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__5593__auto___11494 = n;
var x_11495 = (0);
while(true){
if((x_11495 < n__5593__auto___11494)){
(a[x_11495] = x_11495);

var G__11499 = (x_11495 + (1));
x_11495 = G__11499;
continue;
} else {
}
break;
}

cljs.core.async.goog$module$goog$array.shuffle.call(null,a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async11496 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async11496 = (function (flag,meta11497){
this.flag = flag;
this.meta11497 = meta11497;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async11496.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11498,meta11497__$1){
var self__ = this;
var _11498__$1 = this;
return (new cljs.core.async.t_cljs$core$async11496(self__.flag,meta11497__$1));
}));

(cljs.core.async.t_cljs$core$async11496.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11498){
var self__ = this;
var _11498__$1 = this;
return self__.meta11497;
}));

(cljs.core.async.t_cljs$core$async11496.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async11496.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
}));

(cljs.core.async.t_cljs$core$async11496.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async11496.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async11496.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta11497","meta11497",-745006195,null)], null);
}));

(cljs.core.async.t_cljs$core$async11496.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async11496.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async11496");

(cljs.core.async.t_cljs$core$async11496.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write.call(null,writer__5288__auto__,"cljs.core.async/t_cljs$core$async11496");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async11496.
 */
cljs.core.async.__GT_t_cljs$core$async11496 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async11496(flag__$1,meta11497){
return (new cljs.core.async.t_cljs$core$async11496(flag__$1,meta11497));
});

}

return (new cljs.core.async.t_cljs$core$async11496(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async11511 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async11511 = (function (flag,cb,meta11512){
this.flag = flag;
this.cb = cb;
this.meta11512 = meta11512;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async11511.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11513,meta11512__$1){
var self__ = this;
var _11513__$1 = this;
return (new cljs.core.async.t_cljs$core$async11511(self__.flag,self__.cb,meta11512__$1));
}));

(cljs.core.async.t_cljs$core$async11511.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11513){
var self__ = this;
var _11513__$1 = this;
return self__.meta11512;
}));

(cljs.core.async.t_cljs$core$async11511.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async11511.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
}));

(cljs.core.async.t_cljs$core$async11511.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async11511.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async11511.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta11512","meta11512",436967366,null)], null);
}));

(cljs.core.async.t_cljs$core$async11511.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async11511.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async11511");

(cljs.core.async.t_cljs$core$async11511.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write.call(null,writer__5288__auto__,"cljs.core.async/t_cljs$core$async11511");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async11511.
 */
cljs.core.async.__GT_t_cljs$core$async11511 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async11511(flag__$1,cb__$1,meta11512){
return (new cljs.core.async.t_cljs$core$async11511(flag__$1,cb__$1,meta11512));
});

}

return (new cljs.core.async.t_cljs$core$async11511(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count.call(null,ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag.call(null);
var ports__$1 = cljs.core.vec.call(null,ports);
var n = cljs.core.count.call(null,ports__$1);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports__$1,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,ports__$1,n,idxs,priority){
return (function (p1__11550_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__11550_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,ports__$1,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,ports__$1,n,idxs,priority){
return (function (p1__11551_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__11551_SHARP_,port], null));
});})(i,idx,port,wport,flag,ports__$1,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__5002__auto__ = wport;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return port;
}
})()], null));
} else {
var G__11560 = (i + (1));
i = G__11560;
continue;
}
} else {
return null;
}
break;
}
})();
var or__5002__auto__ = ret;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5804__auto__ = (function (){var and__5000__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__5000__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__5000__auto__;
}
})();
if(cljs.core.truth_(temp__5804__auto__)){
var got = temp__5804__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
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
var args__5732__auto__ = [];
var len__5726__auto___11562 = arguments.length;
var i__5727__auto___11563 = (0);
while(true){
if((i__5727__auto___11563 < len__5726__auto___11562)){
args__5732__auto__.push((arguments[i__5727__auto___11563]));

var G__11564 = (i__5727__auto___11563 + (1));
i__5727__auto___11563 = G__11564;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__11559){
var map__11561 = p__11559;
var map__11561__$1 = cljs.core.__destructure_map.call(null,map__11561);
var opts = map__11561__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq11557){
var G__11558 = cljs.core.first.call(null,seq11557);
var seq11557__$1 = cljs.core.next.call(null,seq11557);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__11558,seq11557__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
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
var G__11566 = arguments.length;
switch (G__11566) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__11371__auto___11613 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__11372__auto__ = (function (){var switch__11190__auto__ = (function (state_11590){
var state_val_11591 = (state_11590[(1)]);
if((state_val_11591 === (7))){
var inst_11586 = (state_11590[(2)]);
var state_11590__$1 = state_11590;
var statearr_11592_11618 = state_11590__$1;
(statearr_11592_11618[(2)] = inst_11586);

(statearr_11592_11618[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11591 === (1))){
var state_11590__$1 = state_11590;
var statearr_11593_11619 = state_11590__$1;
(statearr_11593_11619[(2)] = null);

(statearr_11593_11619[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11591 === (4))){
var inst_11569 = (state_11590[(7)]);
var inst_11569__$1 = (state_11590[(2)]);
var inst_11570 = (inst_11569__$1 == null);
var state_11590__$1 = (function (){var statearr_11594 = state_11590;
(statearr_11594[(7)] = inst_11569__$1);

return statearr_11594;
})();
if(cljs.core.truth_(inst_11570)){
var statearr_11595_11624 = state_11590__$1;
(statearr_11595_11624[(1)] = (5));

} else {
var statearr_11596_11627 = state_11590__$1;
(statearr_11596_11627[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11591 === (13))){
var state_11590__$1 = state_11590;
var statearr_11597_11628 = state_11590__$1;
(statearr_11597_11628[(2)] = null);

(statearr_11597_11628[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11591 === (6))){
var inst_11569 = (state_11590[(7)]);
var state_11590__$1 = state_11590;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11590__$1,(11),to,inst_11569);
} else {
if((state_val_11591 === (3))){
var inst_11588 = (state_11590[(2)]);
var state_11590__$1 = state_11590;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11590__$1,inst_11588);
} else {
if((state_val_11591 === (12))){
var state_11590__$1 = state_11590;
var statearr_11598_11629 = state_11590__$1;
(statearr_11598_11629[(2)] = null);

(statearr_11598_11629[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11591 === (2))){
var state_11590__$1 = state_11590;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11590__$1,(4),from);
} else {
if((state_val_11591 === (11))){
var inst_11579 = (state_11590[(2)]);
var state_11590__$1 = state_11590;
if(cljs.core.truth_(inst_11579)){
var statearr_11599_11631 = state_11590__$1;
(statearr_11599_11631[(1)] = (12));

} else {
var statearr_11600_11632 = state_11590__$1;
(statearr_11600_11632[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11591 === (9))){
var state_11590__$1 = state_11590;
var statearr_11601_11633 = state_11590__$1;
(statearr_11601_11633[(2)] = null);

(statearr_11601_11633[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11591 === (5))){
var state_11590__$1 = state_11590;
if(cljs.core.truth_(close_QMARK_)){
var statearr_11602_11635 = state_11590__$1;
(statearr_11602_11635[(1)] = (8));

} else {
var statearr_11603_11636 = state_11590__$1;
(statearr_11603_11636[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11591 === (14))){
var inst_11584 = (state_11590[(2)]);
var state_11590__$1 = state_11590;
var statearr_11604_11639 = state_11590__$1;
(statearr_11604_11639[(2)] = inst_11584);

(statearr_11604_11639[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11591 === (10))){
var inst_11576 = (state_11590[(2)]);
var state_11590__$1 = state_11590;
var statearr_11605_11641 = state_11590__$1;
(statearr_11605_11641[(2)] = inst_11576);

(statearr_11605_11641[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11591 === (8))){
var inst_11573 = cljs.core.async.close_BANG_.call(null,to);
var state_11590__$1 = state_11590;
var statearr_11606_11642 = state_11590__$1;
(statearr_11606_11642[(2)] = inst_11573);

(statearr_11606_11642[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});
return (function() {
var cljs$core$async$state_machine__11191__auto__ = null;
var cljs$core$async$state_machine__11191__auto____0 = (function (){
var statearr_11607 = [null,null,null,null,null,null,null,null];
(statearr_11607[(0)] = cljs$core$async$state_machine__11191__auto__);

(statearr_11607[(1)] = (1));

return statearr_11607;
});
var cljs$core$async$state_machine__11191__auto____1 = (function (state_11590){
while(true){
var ret_value__11192__auto__ = (function (){try{while(true){
var result__11193__auto__ = switch__11190__auto__.call(null,state_11590);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11193__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11193__auto__;
}
break;
}
}catch (e11608){var ex__11194__auto__ = e11608;
var statearr_11609_11643 = state_11590;
(statearr_11609_11643[(2)] = ex__11194__auto__);


if(cljs.core.seq.call(null,(state_11590[(4)]))){
var statearr_11610_11645 = state_11590;
(statearr_11610_11645[(1)] = cljs.core.first.call(null,(state_11590[(4)])));

} else {
throw ex__11194__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11192__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11646 = state_11590;
state_11590 = G__11646;
continue;
} else {
return ret_value__11192__auto__;
}
break;
}
});
cljs$core$async$state_machine__11191__auto__ = function(state_11590){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__11191__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__11191__auto____1.call(this,state_11590);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__11191__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__11191__auto____0;
cljs$core$async$state_machine__11191__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__11191__auto____1;
return cljs$core$async$state_machine__11191__auto__;
})()
})();
var state__11373__auto__ = (function (){var statearr_11611 = f__11372__auto__.call(null);
(statearr_11611[(6)] = c__11371__auto___11613);

return statearr_11611;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11373__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process__$1 = (function (p__11614){
var vec__11615 = p__11614;
var v = cljs.core.nth.call(null,vec__11615,(0),null);
var p = cljs.core.nth.call(null,vec__11615,(1),null);
var job = vec__11615;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__11371__auto___11823 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__11372__auto__ = (function (){var switch__11190__auto__ = (function (state_11625){
var state_val_11626 = (state_11625[(1)]);
if((state_val_11626 === (1))){
var state_11625__$1 = state_11625;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11625__$1,(2),res,v);
} else {
if((state_val_11626 === (2))){
var inst_11621 = (state_11625[(2)]);
var inst_11622 = cljs.core.async.close_BANG_.call(null,res);
var state_11625__$1 = (function (){var statearr_11630 = state_11625;
(statearr_11630[(7)] = inst_11621);

return statearr_11630;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11625__$1,inst_11622);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__11191__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__11191__auto____0 = (function (){
var statearr_11634 = [null,null,null,null,null,null,null,null];
(statearr_11634[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__11191__auto__);

(statearr_11634[(1)] = (1));

return statearr_11634;
});
var cljs$core$async$pipeline_STAR__$_state_machine__11191__auto____1 = (function (state_11625){
while(true){
var ret_value__11192__auto__ = (function (){try{while(true){
var result__11193__auto__ = switch__11190__auto__.call(null,state_11625);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11193__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11193__auto__;
}
break;
}
}catch (e11637){var ex__11194__auto__ = e11637;
var statearr_11638_11825 = state_11625;
(statearr_11638_11825[(2)] = ex__11194__auto__);


if(cljs.core.seq.call(null,(state_11625[(4)]))){
var statearr_11640_11826 = state_11625;
(statearr_11640_11826[(1)] = cljs.core.first.call(null,(state_11625[(4)])));

} else {
throw ex__11194__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11192__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11827 = state_11625;
state_11625 = G__11827;
continue;
} else {
return ret_value__11192__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__11191__auto__ = function(state_11625){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__11191__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__11191__auto____1.call(this,state_11625);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__11191__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__11191__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__11191__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__11191__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__11191__auto__;
})()
})();
var state__11373__auto__ = (function (){var statearr_11644 = f__11372__auto__.call(null);
(statearr_11644[(6)] = c__11371__auto___11823);

return statearr_11644;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11373__auto__);
}));


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});
var async = (function (p__11647){
var vec__11648 = p__11647;
var v = cljs.core.nth.call(null,vec__11648,(0),null);
var p = cljs.core.nth.call(null,vec__11648,(1),null);
var job = vec__11648;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});
var n__5593__auto___11828 = n;
var __11830 = (0);
while(true){
if((__11830 < n__5593__auto___11828)){
var G__11651_11831 = type;
var G__11651_11832__$1 = (((G__11651_11831 instanceof cljs.core.Keyword))?G__11651_11831.fqn:null);
switch (G__11651_11832__$1) {
case "compute":
var c__11371__auto___11835 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__11830,c__11371__auto___11835,G__11651_11831,G__11651_11832__$1,n__5593__auto___11828,jobs,results,process__$1,async){
return (function (){
var f__11372__auto__ = (function (){var switch__11190__auto__ = ((function (__11830,c__11371__auto___11835,G__11651_11831,G__11651_11832__$1,n__5593__auto___11828,jobs,results,process__$1,async){
return (function (state_11664){
var state_val_11665 = (state_11664[(1)]);
if((state_val_11665 === (1))){
var state_11664__$1 = state_11664;
var statearr_11666_11836 = state_11664__$1;
(statearr_11666_11836[(2)] = null);

(statearr_11666_11836[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11665 === (2))){
var state_11664__$1 = state_11664;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11664__$1,(4),jobs);
} else {
if((state_val_11665 === (3))){
var inst_11662 = (state_11664[(2)]);
var state_11664__$1 = state_11664;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11664__$1,inst_11662);
} else {
if((state_val_11665 === (4))){
var inst_11654 = (state_11664[(2)]);
var inst_11655 = process__$1.call(null,inst_11654);
var state_11664__$1 = state_11664;
if(cljs.core.truth_(inst_11655)){
var statearr_11667_11837 = state_11664__$1;
(statearr_11667_11837[(1)] = (5));

} else {
var statearr_11668_11838 = state_11664__$1;
(statearr_11668_11838[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11665 === (5))){
var state_11664__$1 = state_11664;
var statearr_11669_11839 = state_11664__$1;
(statearr_11669_11839[(2)] = null);

(statearr_11669_11839[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11665 === (6))){
var state_11664__$1 = state_11664;
var statearr_11670_11840 = state_11664__$1;
(statearr_11670_11840[(2)] = null);

(statearr_11670_11840[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11665 === (7))){
var inst_11660 = (state_11664[(2)]);
var state_11664__$1 = state_11664;
var statearr_11671_11842 = state_11664__$1;
(statearr_11671_11842[(2)] = inst_11660);

(statearr_11671_11842[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__11830,c__11371__auto___11835,G__11651_11831,G__11651_11832__$1,n__5593__auto___11828,jobs,results,process__$1,async))
;
return ((function (__11830,switch__11190__auto__,c__11371__auto___11835,G__11651_11831,G__11651_11832__$1,n__5593__auto___11828,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__11191__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__11191__auto____0 = (function (){
var statearr_11672 = [null,null,null,null,null,null,null];
(statearr_11672[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__11191__auto__);

(statearr_11672[(1)] = (1));

return statearr_11672;
});
var cljs$core$async$pipeline_STAR__$_state_machine__11191__auto____1 = (function (state_11664){
while(true){
var ret_value__11192__auto__ = (function (){try{while(true){
var result__11193__auto__ = switch__11190__auto__.call(null,state_11664);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11193__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11193__auto__;
}
break;
}
}catch (e11673){var ex__11194__auto__ = e11673;
var statearr_11674_11844 = state_11664;
(statearr_11674_11844[(2)] = ex__11194__auto__);


if(cljs.core.seq.call(null,(state_11664[(4)]))){
var statearr_11675_11845 = state_11664;
(statearr_11675_11845[(1)] = cljs.core.first.call(null,(state_11664[(4)])));

} else {
throw ex__11194__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11192__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11846 = state_11664;
state_11664 = G__11846;
continue;
} else {
return ret_value__11192__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__11191__auto__ = function(state_11664){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__11191__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__11191__auto____1.call(this,state_11664);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__11191__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__11191__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__11191__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__11191__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__11191__auto__;
})()
;})(__11830,switch__11190__auto__,c__11371__auto___11835,G__11651_11831,G__11651_11832__$1,n__5593__auto___11828,jobs,results,process__$1,async))
})();
var state__11373__auto__ = (function (){var statearr_11676 = f__11372__auto__.call(null);
(statearr_11676[(6)] = c__11371__auto___11835);

return statearr_11676;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11373__auto__);
});})(__11830,c__11371__auto___11835,G__11651_11831,G__11651_11832__$1,n__5593__auto___11828,jobs,results,process__$1,async))
);


break;
case "async":
var c__11371__auto___11848 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__11830,c__11371__auto___11848,G__11651_11831,G__11651_11832__$1,n__5593__auto___11828,jobs,results,process__$1,async){
return (function (){
var f__11372__auto__ = (function (){var switch__11190__auto__ = ((function (__11830,c__11371__auto___11848,G__11651_11831,G__11651_11832__$1,n__5593__auto___11828,jobs,results,process__$1,async){
return (function (state_11689){
var state_val_11690 = (state_11689[(1)]);
if((state_val_11690 === (1))){
var state_11689__$1 = state_11689;
var statearr_11696_11863 = state_11689__$1;
(statearr_11696_11863[(2)] = null);

(statearr_11696_11863[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11690 === (2))){
var state_11689__$1 = state_11689;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11689__$1,(4),jobs);
} else {
if((state_val_11690 === (3))){
var inst_11687 = (state_11689[(2)]);
var state_11689__$1 = state_11689;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11689__$1,inst_11687);
} else {
if((state_val_11690 === (4))){
var inst_11679 = (state_11689[(2)]);
var inst_11680 = async.call(null,inst_11679);
var state_11689__$1 = state_11689;
if(cljs.core.truth_(inst_11680)){
var statearr_11699_11876 = state_11689__$1;
(statearr_11699_11876[(1)] = (5));

} else {
var statearr_11700_11877 = state_11689__$1;
(statearr_11700_11877[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11690 === (5))){
var state_11689__$1 = state_11689;
var statearr_11702_11878 = state_11689__$1;
(statearr_11702_11878[(2)] = null);

(statearr_11702_11878[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11690 === (6))){
var state_11689__$1 = state_11689;
var statearr_11703_11880 = state_11689__$1;
(statearr_11703_11880[(2)] = null);

(statearr_11703_11880[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11690 === (7))){
var inst_11685 = (state_11689[(2)]);
var state_11689__$1 = state_11689;
var statearr_11705_11882 = state_11689__$1;
(statearr_11705_11882[(2)] = inst_11685);

(statearr_11705_11882[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__11830,c__11371__auto___11848,G__11651_11831,G__11651_11832__$1,n__5593__auto___11828,jobs,results,process__$1,async))
;
return ((function (__11830,switch__11190__auto__,c__11371__auto___11848,G__11651_11831,G__11651_11832__$1,n__5593__auto___11828,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__11191__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__11191__auto____0 = (function (){
var statearr_11706 = [null,null,null,null,null,null,null];
(statearr_11706[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__11191__auto__);

(statearr_11706[(1)] = (1));

return statearr_11706;
});
var cljs$core$async$pipeline_STAR__$_state_machine__11191__auto____1 = (function (state_11689){
while(true){
var ret_value__11192__auto__ = (function (){try{while(true){
var result__11193__auto__ = switch__11190__auto__.call(null,state_11689);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11193__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11193__auto__;
}
break;
}
}catch (e11707){var ex__11194__auto__ = e11707;
var statearr_11708_11887 = state_11689;
(statearr_11708_11887[(2)] = ex__11194__auto__);


if(cljs.core.seq.call(null,(state_11689[(4)]))){
var statearr_11709_11888 = state_11689;
(statearr_11709_11888[(1)] = cljs.core.first.call(null,(state_11689[(4)])));

} else {
throw ex__11194__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11192__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11890 = state_11689;
state_11689 = G__11890;
continue;
} else {
return ret_value__11192__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__11191__auto__ = function(state_11689){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__11191__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__11191__auto____1.call(this,state_11689);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__11191__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__11191__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__11191__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__11191__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__11191__auto__;
})()
;})(__11830,switch__11190__auto__,c__11371__auto___11848,G__11651_11831,G__11651_11832__$1,n__5593__auto___11828,jobs,results,process__$1,async))
})();
var state__11373__auto__ = (function (){var statearr_11710 = f__11372__auto__.call(null);
(statearr_11710[(6)] = c__11371__auto___11848);

return statearr_11710;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11373__auto__);
});})(__11830,c__11371__auto___11848,G__11651_11831,G__11651_11832__$1,n__5593__auto___11828,jobs,results,process__$1,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__11651_11832__$1)].join('')));

}

var G__11892 = (__11830 + (1));
__11830 = G__11892;
continue;
} else {
}
break;
}

var c__11371__auto___11893 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__11372__auto__ = (function (){var switch__11190__auto__ = (function (state_11732){
var state_val_11733 = (state_11732[(1)]);
if((state_val_11733 === (7))){
var inst_11728 = (state_11732[(2)]);
var state_11732__$1 = state_11732;
var statearr_11739_11895 = state_11732__$1;
(statearr_11739_11895[(2)] = inst_11728);

(statearr_11739_11895[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11733 === (1))){
var state_11732__$1 = state_11732;
var statearr_11740_11896 = state_11732__$1;
(statearr_11740_11896[(2)] = null);

(statearr_11740_11896[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11733 === (4))){
var inst_11713 = (state_11732[(7)]);
var inst_11713__$1 = (state_11732[(2)]);
var inst_11714 = (inst_11713__$1 == null);
var state_11732__$1 = (function (){var statearr_11741 = state_11732;
(statearr_11741[(7)] = inst_11713__$1);

return statearr_11741;
})();
if(cljs.core.truth_(inst_11714)){
var statearr_11742_11897 = state_11732__$1;
(statearr_11742_11897[(1)] = (5));

} else {
var statearr_11743_11898 = state_11732__$1;
(statearr_11743_11898[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11733 === (6))){
var inst_11713 = (state_11732[(7)]);
var inst_11718 = (state_11732[(8)]);
var inst_11718__$1 = cljs.core.async.chan.call(null,(1));
var inst_11719 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_11720 = [inst_11713,inst_11718__$1];
var inst_11721 = (new cljs.core.PersistentVector(null,2,(5),inst_11719,inst_11720,null));
var state_11732__$1 = (function (){var statearr_11744 = state_11732;
(statearr_11744[(8)] = inst_11718__$1);

return statearr_11744;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11732__$1,(8),jobs,inst_11721);
} else {
if((state_val_11733 === (3))){
var inst_11730 = (state_11732[(2)]);
var state_11732__$1 = state_11732;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11732__$1,inst_11730);
} else {
if((state_val_11733 === (2))){
var state_11732__$1 = state_11732;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11732__$1,(4),from);
} else {
if((state_val_11733 === (9))){
var inst_11725 = (state_11732[(2)]);
var state_11732__$1 = (function (){var statearr_11745 = state_11732;
(statearr_11745[(9)] = inst_11725);

return statearr_11745;
})();
var statearr_11746_11900 = state_11732__$1;
(statearr_11746_11900[(2)] = null);

(statearr_11746_11900[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11733 === (5))){
var inst_11716 = cljs.core.async.close_BANG_.call(null,jobs);
var state_11732__$1 = state_11732;
var statearr_11747_11901 = state_11732__$1;
(statearr_11747_11901[(2)] = inst_11716);

(statearr_11747_11901[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11733 === (8))){
var inst_11718 = (state_11732[(8)]);
var inst_11723 = (state_11732[(2)]);
var state_11732__$1 = (function (){var statearr_11748 = state_11732;
(statearr_11748[(10)] = inst_11723);

return statearr_11748;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11732__$1,(9),results,inst_11718);
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
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__11191__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__11191__auto____0 = (function (){
var statearr_11749 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_11749[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__11191__auto__);

(statearr_11749[(1)] = (1));

return statearr_11749;
});
var cljs$core$async$pipeline_STAR__$_state_machine__11191__auto____1 = (function (state_11732){
while(true){
var ret_value__11192__auto__ = (function (){try{while(true){
var result__11193__auto__ = switch__11190__auto__.call(null,state_11732);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11193__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11193__auto__;
}
break;
}
}catch (e11750){var ex__11194__auto__ = e11750;
var statearr_11751_11906 = state_11732;
(statearr_11751_11906[(2)] = ex__11194__auto__);


if(cljs.core.seq.call(null,(state_11732[(4)]))){
var statearr_11752_11909 = state_11732;
(statearr_11752_11909[(1)] = cljs.core.first.call(null,(state_11732[(4)])));

} else {
throw ex__11194__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11192__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11910 = state_11732;
state_11732 = G__11910;
continue;
} else {
return ret_value__11192__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__11191__auto__ = function(state_11732){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__11191__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__11191__auto____1.call(this,state_11732);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__11191__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__11191__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__11191__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__11191__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__11191__auto__;
})()
})();
var state__11373__auto__ = (function (){var statearr_11753 = f__11372__auto__.call(null);
(statearr_11753[(6)] = c__11371__auto___11893);

return statearr_11753;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11373__auto__);
}));


var c__11371__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__11372__auto__ = (function (){var switch__11190__auto__ = (function (state_11791){
var state_val_11792 = (state_11791[(1)]);
if((state_val_11792 === (7))){
var inst_11787 = (state_11791[(2)]);
var state_11791__$1 = state_11791;
var statearr_11793_11912 = state_11791__$1;
(statearr_11793_11912[(2)] = inst_11787);

(statearr_11793_11912[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11792 === (20))){
var state_11791__$1 = state_11791;
var statearr_11794_11913 = state_11791__$1;
(statearr_11794_11913[(2)] = null);

(statearr_11794_11913[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11792 === (1))){
var state_11791__$1 = state_11791;
var statearr_11795_11914 = state_11791__$1;
(statearr_11795_11914[(2)] = null);

(statearr_11795_11914[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11792 === (4))){
var inst_11756 = (state_11791[(7)]);
var inst_11756__$1 = (state_11791[(2)]);
var inst_11757 = (inst_11756__$1 == null);
var state_11791__$1 = (function (){var statearr_11796 = state_11791;
(statearr_11796[(7)] = inst_11756__$1);

return statearr_11796;
})();
if(cljs.core.truth_(inst_11757)){
var statearr_11797_11915 = state_11791__$1;
(statearr_11797_11915[(1)] = (5));

} else {
var statearr_11798_11916 = state_11791__$1;
(statearr_11798_11916[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11792 === (15))){
var inst_11769 = (state_11791[(8)]);
var state_11791__$1 = state_11791;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11791__$1,(18),to,inst_11769);
} else {
if((state_val_11792 === (21))){
var inst_11782 = (state_11791[(2)]);
var state_11791__$1 = state_11791;
var statearr_11799_11919 = state_11791__$1;
(statearr_11799_11919[(2)] = inst_11782);

(statearr_11799_11919[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11792 === (13))){
var inst_11784 = (state_11791[(2)]);
var state_11791__$1 = (function (){var statearr_11800 = state_11791;
(statearr_11800[(9)] = inst_11784);

return statearr_11800;
})();
var statearr_11801_11921 = state_11791__$1;
(statearr_11801_11921[(2)] = null);

(statearr_11801_11921[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11792 === (6))){
var inst_11756 = (state_11791[(7)]);
var state_11791__$1 = state_11791;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11791__$1,(11),inst_11756);
} else {
if((state_val_11792 === (17))){
var inst_11777 = (state_11791[(2)]);
var state_11791__$1 = state_11791;
if(cljs.core.truth_(inst_11777)){
var statearr_11802_11922 = state_11791__$1;
(statearr_11802_11922[(1)] = (19));

} else {
var statearr_11803_11923 = state_11791__$1;
(statearr_11803_11923[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11792 === (3))){
var inst_11789 = (state_11791[(2)]);
var state_11791__$1 = state_11791;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11791__$1,inst_11789);
} else {
if((state_val_11792 === (12))){
var inst_11766 = (state_11791[(10)]);
var state_11791__$1 = state_11791;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11791__$1,(14),inst_11766);
} else {
if((state_val_11792 === (2))){
var state_11791__$1 = state_11791;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11791__$1,(4),results);
} else {
if((state_val_11792 === (19))){
var state_11791__$1 = state_11791;
var statearr_11804_11925 = state_11791__$1;
(statearr_11804_11925[(2)] = null);

(statearr_11804_11925[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11792 === (11))){
var inst_11766 = (state_11791[(2)]);
var state_11791__$1 = (function (){var statearr_11805 = state_11791;
(statearr_11805[(10)] = inst_11766);

return statearr_11805;
})();
var statearr_11806_11926 = state_11791__$1;
(statearr_11806_11926[(2)] = null);

(statearr_11806_11926[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11792 === (9))){
var state_11791__$1 = state_11791;
var statearr_11807_11927 = state_11791__$1;
(statearr_11807_11927[(2)] = null);

(statearr_11807_11927[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11792 === (5))){
var state_11791__$1 = state_11791;
if(cljs.core.truth_(close_QMARK_)){
var statearr_11808_11930 = state_11791__$1;
(statearr_11808_11930[(1)] = (8));

} else {
var statearr_11809_11932 = state_11791__$1;
(statearr_11809_11932[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11792 === (14))){
var inst_11769 = (state_11791[(8)]);
var inst_11771 = (state_11791[(11)]);
var inst_11769__$1 = (state_11791[(2)]);
var inst_11770 = (inst_11769__$1 == null);
var inst_11771__$1 = cljs.core.not.call(null,inst_11770);
var state_11791__$1 = (function (){var statearr_11810 = state_11791;
(statearr_11810[(8)] = inst_11769__$1);

(statearr_11810[(11)] = inst_11771__$1);

return statearr_11810;
})();
if(inst_11771__$1){
var statearr_11811_11941 = state_11791__$1;
(statearr_11811_11941[(1)] = (15));

} else {
var statearr_11812_11945 = state_11791__$1;
(statearr_11812_11945[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11792 === (16))){
var inst_11771 = (state_11791[(11)]);
var state_11791__$1 = state_11791;
var statearr_11813_11953 = state_11791__$1;
(statearr_11813_11953[(2)] = inst_11771);

(statearr_11813_11953[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11792 === (10))){
var inst_11763 = (state_11791[(2)]);
var state_11791__$1 = state_11791;
var statearr_11814_11956 = state_11791__$1;
(statearr_11814_11956[(2)] = inst_11763);

(statearr_11814_11956[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11792 === (18))){
var inst_11774 = (state_11791[(2)]);
var state_11791__$1 = state_11791;
var statearr_11815_11957 = state_11791__$1;
(statearr_11815_11957[(2)] = inst_11774);

(statearr_11815_11957[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11792 === (8))){
var inst_11760 = cljs.core.async.close_BANG_.call(null,to);
var state_11791__$1 = state_11791;
var statearr_11816_11959 = state_11791__$1;
(statearr_11816_11959[(2)] = inst_11760);

(statearr_11816_11959[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__11191__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__11191__auto____0 = (function (){
var statearr_11817 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_11817[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__11191__auto__);

(statearr_11817[(1)] = (1));

return statearr_11817;
});
var cljs$core$async$pipeline_STAR__$_state_machine__11191__auto____1 = (function (state_11791){
while(true){
var ret_value__11192__auto__ = (function (){try{while(true){
var result__11193__auto__ = switch__11190__auto__.call(null,state_11791);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11193__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11193__auto__;
}
break;
}
}catch (e11818){var ex__11194__auto__ = e11818;
var statearr_11819_11964 = state_11791;
(statearr_11819_11964[(2)] = ex__11194__auto__);


if(cljs.core.seq.call(null,(state_11791[(4)]))){
var statearr_11820_11966 = state_11791;
(statearr_11820_11966[(1)] = cljs.core.first.call(null,(state_11791[(4)])));

} else {
throw ex__11194__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11192__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11967 = state_11791;
state_11791 = G__11967;
continue;
} else {
return ret_value__11192__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__11191__auto__ = function(state_11791){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__11191__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__11191__auto____1.call(this,state_11791);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__11191__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__11191__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__11191__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__11191__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__11191__auto__;
})()
})();
var state__11373__auto__ = (function (){var statearr_11821 = f__11372__auto__.call(null);
(statearr_11821[(6)] = c__11371__auto__);

return statearr_11821;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11373__auto__);
}));

return c__11371__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). The
 *   presumption is that af will return immediately, having launched some
 *   asynchronous operation whose completion/callback will put results on
 *   the channel, then close! it. Outputs will be returned in order
 *   relative to the inputs. By default, the to channel will be closed
 *   when the from channel closes, but can be determined by the close?
 *   parameter. Will stop consuming the from channel if the to channel
 *   closes. See also pipeline, pipeline-blocking.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__11824 = arguments.length;
switch (G__11824) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

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
var G__11833 = arguments.length;
switch (G__11833) {
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
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

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
var G__11843 = arguments.length;
switch (G__11843) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__11371__auto___11983 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__11372__auto__ = (function (){var switch__11190__auto__ = (function (state_11874){
var state_val_11875 = (state_11874[(1)]);
if((state_val_11875 === (7))){
var inst_11870 = (state_11874[(2)]);
var state_11874__$1 = state_11874;
var statearr_11879_11984 = state_11874__$1;
(statearr_11879_11984[(2)] = inst_11870);

(statearr_11879_11984[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11875 === (1))){
var state_11874__$1 = state_11874;
var statearr_11881_11985 = state_11874__$1;
(statearr_11881_11985[(2)] = null);

(statearr_11881_11985[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11875 === (4))){
var inst_11850 = (state_11874[(7)]);
var inst_11850__$1 = (state_11874[(2)]);
var inst_11851 = (inst_11850__$1 == null);
var state_11874__$1 = (function (){var statearr_11883 = state_11874;
(statearr_11883[(7)] = inst_11850__$1);

return statearr_11883;
})();
if(cljs.core.truth_(inst_11851)){
var statearr_11884_11987 = state_11874__$1;
(statearr_11884_11987[(1)] = (5));

} else {
var statearr_11885_11988 = state_11874__$1;
(statearr_11885_11988[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11875 === (13))){
var state_11874__$1 = state_11874;
var statearr_11886_11989 = state_11874__$1;
(statearr_11886_11989[(2)] = null);

(statearr_11886_11989[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11875 === (6))){
var inst_11850 = (state_11874[(7)]);
var inst_11856 = p.call(null,inst_11850);
var state_11874__$1 = state_11874;
if(cljs.core.truth_(inst_11856)){
var statearr_11889_11991 = state_11874__$1;
(statearr_11889_11991[(1)] = (9));

} else {
var statearr_11891_11993 = state_11874__$1;
(statearr_11891_11993[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11875 === (3))){
var inst_11872 = (state_11874[(2)]);
var state_11874__$1 = state_11874;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11874__$1,inst_11872);
} else {
if((state_val_11875 === (12))){
var state_11874__$1 = state_11874;
var statearr_11894_12001 = state_11874__$1;
(statearr_11894_12001[(2)] = null);

(statearr_11894_12001[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11875 === (2))){
var state_11874__$1 = state_11874;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11874__$1,(4),ch);
} else {
if((state_val_11875 === (11))){
var inst_11850 = (state_11874[(7)]);
var inst_11860 = (state_11874[(2)]);
var state_11874__$1 = state_11874;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11874__$1,(8),inst_11860,inst_11850);
} else {
if((state_val_11875 === (9))){
var state_11874__$1 = state_11874;
var statearr_11899_12002 = state_11874__$1;
(statearr_11899_12002[(2)] = tc);

(statearr_11899_12002[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11875 === (5))){
var inst_11853 = cljs.core.async.close_BANG_.call(null,tc);
var inst_11854 = cljs.core.async.close_BANG_.call(null,fc);
var state_11874__$1 = (function (){var statearr_11902 = state_11874;
(statearr_11902[(8)] = inst_11853);

return statearr_11902;
})();
var statearr_11903_12003 = state_11874__$1;
(statearr_11903_12003[(2)] = inst_11854);

(statearr_11903_12003[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11875 === (14))){
var inst_11868 = (state_11874[(2)]);
var state_11874__$1 = state_11874;
var statearr_11904_12004 = state_11874__$1;
(statearr_11904_12004[(2)] = inst_11868);

(statearr_11904_12004[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11875 === (10))){
var state_11874__$1 = state_11874;
var statearr_11905_12005 = state_11874__$1;
(statearr_11905_12005[(2)] = fc);

(statearr_11905_12005[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11875 === (8))){
var inst_11862 = (state_11874[(2)]);
var state_11874__$1 = state_11874;
if(cljs.core.truth_(inst_11862)){
var statearr_11907_12007 = state_11874__$1;
(statearr_11907_12007[(1)] = (12));

} else {
var statearr_11908_12008 = state_11874__$1;
(statearr_11908_12008[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});
return (function() {
var cljs$core$async$state_machine__11191__auto__ = null;
var cljs$core$async$state_machine__11191__auto____0 = (function (){
var statearr_11911 = [null,null,null,null,null,null,null,null,null];
(statearr_11911[(0)] = cljs$core$async$state_machine__11191__auto__);

(statearr_11911[(1)] = (1));

return statearr_11911;
});
var cljs$core$async$state_machine__11191__auto____1 = (function (state_11874){
while(true){
var ret_value__11192__auto__ = (function (){try{while(true){
var result__11193__auto__ = switch__11190__auto__.call(null,state_11874);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11193__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11193__auto__;
}
break;
}
}catch (e11917){var ex__11194__auto__ = e11917;
var statearr_11918_12010 = state_11874;
(statearr_11918_12010[(2)] = ex__11194__auto__);


if(cljs.core.seq.call(null,(state_11874[(4)]))){
var statearr_11920_12012 = state_11874;
(statearr_11920_12012[(1)] = cljs.core.first.call(null,(state_11874[(4)])));

} else {
throw ex__11194__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11192__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12014 = state_11874;
state_11874 = G__12014;
continue;
} else {
return ret_value__11192__auto__;
}
break;
}
});
cljs$core$async$state_machine__11191__auto__ = function(state_11874){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__11191__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__11191__auto____1.call(this,state_11874);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__11191__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__11191__auto____0;
cljs$core$async$state_machine__11191__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__11191__auto____1;
return cljs$core$async$state_machine__11191__auto__;
})()
})();
var state__11373__auto__ = (function (){var statearr_11924 = f__11372__auto__.call(null);
(statearr_11924[(6)] = c__11371__auto___11983);

return statearr_11924;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11373__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__11371__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__11372__auto__ = (function (){var switch__11190__auto__ = (function (state_11954){
var state_val_11955 = (state_11954[(1)]);
if((state_val_11955 === (7))){
var inst_11949 = (state_11954[(2)]);
var state_11954__$1 = state_11954;
var statearr_11958_12016 = state_11954__$1;
(statearr_11958_12016[(2)] = inst_11949);

(statearr_11958_12016[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11955 === (1))){
var inst_11928 = init;
var inst_11929 = inst_11928;
var state_11954__$1 = (function (){var statearr_11960 = state_11954;
(statearr_11960[(7)] = inst_11929);

return statearr_11960;
})();
var statearr_11961_12017 = state_11954__$1;
(statearr_11961_12017[(2)] = null);

(statearr_11961_12017[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11955 === (4))){
var inst_11934 = (state_11954[(8)]);
var inst_11934__$1 = (state_11954[(2)]);
var inst_11935 = (inst_11934__$1 == null);
var state_11954__$1 = (function (){var statearr_11962 = state_11954;
(statearr_11962[(8)] = inst_11934__$1);

return statearr_11962;
})();
if(cljs.core.truth_(inst_11935)){
var statearr_11963_12019 = state_11954__$1;
(statearr_11963_12019[(1)] = (5));

} else {
var statearr_11965_12021 = state_11954__$1;
(statearr_11965_12021[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11955 === (6))){
var inst_11929 = (state_11954[(7)]);
var inst_11934 = (state_11954[(8)]);
var inst_11938 = (state_11954[(9)]);
var inst_11938__$1 = f.call(null,inst_11929,inst_11934);
var inst_11939 = cljs.core.reduced_QMARK_.call(null,inst_11938__$1);
var state_11954__$1 = (function (){var statearr_11968 = state_11954;
(statearr_11968[(9)] = inst_11938__$1);

return statearr_11968;
})();
if(inst_11939){
var statearr_11969_12022 = state_11954__$1;
(statearr_11969_12022[(1)] = (8));

} else {
var statearr_11970_12023 = state_11954__$1;
(statearr_11970_12023[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11955 === (3))){
var inst_11951 = (state_11954[(2)]);
var state_11954__$1 = state_11954;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11954__$1,inst_11951);
} else {
if((state_val_11955 === (2))){
var state_11954__$1 = state_11954;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11954__$1,(4),ch);
} else {
if((state_val_11955 === (9))){
var inst_11938 = (state_11954[(9)]);
var inst_11929 = inst_11938;
var state_11954__$1 = (function (){var statearr_11972 = state_11954;
(statearr_11972[(7)] = inst_11929);

return statearr_11972;
})();
var statearr_11973_12028 = state_11954__$1;
(statearr_11973_12028[(2)] = null);

(statearr_11973_12028[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11955 === (5))){
var inst_11929 = (state_11954[(7)]);
var state_11954__$1 = state_11954;
var statearr_11975_12048 = state_11954__$1;
(statearr_11975_12048[(2)] = inst_11929);

(statearr_11975_12048[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11955 === (10))){
var inst_11947 = (state_11954[(2)]);
var state_11954__$1 = state_11954;
var statearr_11976_12052 = state_11954__$1;
(statearr_11976_12052[(2)] = inst_11947);

(statearr_11976_12052[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11955 === (8))){
var inst_11938 = (state_11954[(9)]);
var inst_11942 = cljs.core.deref.call(null,inst_11938);
var state_11954__$1 = state_11954;
var statearr_11977_12053 = state_11954__$1;
(statearr_11977_12053[(2)] = inst_11942);

(statearr_11977_12053[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});
return (function() {
var cljs$core$async$reduce_$_state_machine__11191__auto__ = null;
var cljs$core$async$reduce_$_state_machine__11191__auto____0 = (function (){
var statearr_11978 = [null,null,null,null,null,null,null,null,null,null];
(statearr_11978[(0)] = cljs$core$async$reduce_$_state_machine__11191__auto__);

(statearr_11978[(1)] = (1));

return statearr_11978;
});
var cljs$core$async$reduce_$_state_machine__11191__auto____1 = (function (state_11954){
while(true){
var ret_value__11192__auto__ = (function (){try{while(true){
var result__11193__auto__ = switch__11190__auto__.call(null,state_11954);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11193__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11193__auto__;
}
break;
}
}catch (e11980){var ex__11194__auto__ = e11980;
var statearr_11981_12057 = state_11954;
(statearr_11981_12057[(2)] = ex__11194__auto__);


if(cljs.core.seq.call(null,(state_11954[(4)]))){
var statearr_11982_12058 = state_11954;
(statearr_11982_12058[(1)] = cljs.core.first.call(null,(state_11954[(4)])));

} else {
throw ex__11194__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11192__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12059 = state_11954;
state_11954 = G__12059;
continue;
} else {
return ret_value__11192__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__11191__auto__ = function(state_11954){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__11191__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__11191__auto____1.call(this,state_11954);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__11191__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__11191__auto____0;
cljs$core$async$reduce_$_state_machine__11191__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__11191__auto____1;
return cljs$core$async$reduce_$_state_machine__11191__auto__;
})()
})();
var state__11373__auto__ = (function (){var statearr_11986 = f__11372__auto__.call(null);
(statearr_11986[(6)] = c__11371__auto__);

return statearr_11986;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11373__auto__);
}));

return c__11371__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__11371__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__11372__auto__ = (function (){var switch__11190__auto__ = (function (state_11999){
var state_val_12000 = (state_11999[(1)]);
if((state_val_12000 === (1))){
var inst_11992 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_11999__$1 = state_11999;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11999__$1,(2),inst_11992);
} else {
if((state_val_12000 === (2))){
var inst_11996 = (state_11999[(2)]);
var inst_11997 = f__$1.call(null,inst_11996);
var state_11999__$1 = state_11999;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11999__$1,inst_11997);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__11191__auto__ = null;
var cljs$core$async$transduce_$_state_machine__11191__auto____0 = (function (){
var statearr_12006 = [null,null,null,null,null,null,null];
(statearr_12006[(0)] = cljs$core$async$transduce_$_state_machine__11191__auto__);

(statearr_12006[(1)] = (1));

return statearr_12006;
});
var cljs$core$async$transduce_$_state_machine__11191__auto____1 = (function (state_11999){
while(true){
var ret_value__11192__auto__ = (function (){try{while(true){
var result__11193__auto__ = switch__11190__auto__.call(null,state_11999);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11193__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11193__auto__;
}
break;
}
}catch (e12009){var ex__11194__auto__ = e12009;
var statearr_12011_12063 = state_11999;
(statearr_12011_12063[(2)] = ex__11194__auto__);


if(cljs.core.seq.call(null,(state_11999[(4)]))){
var statearr_12013_12065 = state_11999;
(statearr_12013_12065[(1)] = cljs.core.first.call(null,(state_11999[(4)])));

} else {
throw ex__11194__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11192__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12066 = state_11999;
state_11999 = G__12066;
continue;
} else {
return ret_value__11192__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__11191__auto__ = function(state_11999){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__11191__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__11191__auto____1.call(this,state_11999);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__11191__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__11191__auto____0;
cljs$core$async$transduce_$_state_machine__11191__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__11191__auto____1;
return cljs$core$async$transduce_$_state_machine__11191__auto__;
})()
})();
var state__11373__auto__ = (function (){var statearr_12015 = f__11372__auto__.call(null);
(statearr_12015[(6)] = c__11371__auto__);

return statearr_12015;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11373__auto__);
}));

return c__11371__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__12020 = arguments.length;
switch (G__12020) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.call(null,ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__11371__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__11372__auto__ = (function (){var switch__11190__auto__ = (function (state_12050){
var state_val_12051 = (state_12050[(1)]);
if((state_val_12051 === (7))){
var inst_12031 = (state_12050[(2)]);
var state_12050__$1 = state_12050;
var statearr_12054_12096 = state_12050__$1;
(statearr_12054_12096[(2)] = inst_12031);

(statearr_12054_12096[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12051 === (1))){
var inst_12024 = cljs.core.seq.call(null,coll);
var inst_12025 = inst_12024;
var state_12050__$1 = (function (){var statearr_12055 = state_12050;
(statearr_12055[(7)] = inst_12025);

return statearr_12055;
})();
var statearr_12056_12097 = state_12050__$1;
(statearr_12056_12097[(2)] = null);

(statearr_12056_12097[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12051 === (4))){
var inst_12025 = (state_12050[(7)]);
var inst_12029 = cljs.core.first.call(null,inst_12025);
var state_12050__$1 = state_12050;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12050__$1,(7),ch,inst_12029);
} else {
if((state_val_12051 === (13))){
var inst_12043 = (state_12050[(2)]);
var state_12050__$1 = state_12050;
var statearr_12060_12101 = state_12050__$1;
(statearr_12060_12101[(2)] = inst_12043);

(statearr_12060_12101[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12051 === (6))){
var inst_12034 = (state_12050[(2)]);
var state_12050__$1 = state_12050;
if(cljs.core.truth_(inst_12034)){
var statearr_12061_12102 = state_12050__$1;
(statearr_12061_12102[(1)] = (8));

} else {
var statearr_12062_12103 = state_12050__$1;
(statearr_12062_12103[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12051 === (3))){
var inst_12047 = (state_12050[(2)]);
var state_12050__$1 = state_12050;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12050__$1,inst_12047);
} else {
if((state_val_12051 === (12))){
var state_12050__$1 = state_12050;
var statearr_12064_12104 = state_12050__$1;
(statearr_12064_12104[(2)] = null);

(statearr_12064_12104[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12051 === (2))){
var inst_12025 = (state_12050[(7)]);
var state_12050__$1 = state_12050;
if(cljs.core.truth_(inst_12025)){
var statearr_12067_12105 = state_12050__$1;
(statearr_12067_12105[(1)] = (4));

} else {
var statearr_12068_12106 = state_12050__$1;
(statearr_12068_12106[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12051 === (11))){
var inst_12040 = cljs.core.async.close_BANG_.call(null,ch);
var state_12050__$1 = state_12050;
var statearr_12069_12110 = state_12050__$1;
(statearr_12069_12110[(2)] = inst_12040);

(statearr_12069_12110[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12051 === (9))){
var state_12050__$1 = state_12050;
if(cljs.core.truth_(close_QMARK_)){
var statearr_12070_12111 = state_12050__$1;
(statearr_12070_12111[(1)] = (11));

} else {
var statearr_12071_12112 = state_12050__$1;
(statearr_12071_12112[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12051 === (5))){
var inst_12025 = (state_12050[(7)]);
var state_12050__$1 = state_12050;
var statearr_12072_12115 = state_12050__$1;
(statearr_12072_12115[(2)] = inst_12025);

(statearr_12072_12115[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12051 === (10))){
var inst_12045 = (state_12050[(2)]);
var state_12050__$1 = state_12050;
var statearr_12073_12117 = state_12050__$1;
(statearr_12073_12117[(2)] = inst_12045);

(statearr_12073_12117[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12051 === (8))){
var inst_12025 = (state_12050[(7)]);
var inst_12036 = cljs.core.next.call(null,inst_12025);
var inst_12025__$1 = inst_12036;
var state_12050__$1 = (function (){var statearr_12074 = state_12050;
(statearr_12074[(7)] = inst_12025__$1);

return statearr_12074;
})();
var statearr_12075_12121 = state_12050__$1;
(statearr_12075_12121[(2)] = null);

(statearr_12075_12121[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});
return (function() {
var cljs$core$async$state_machine__11191__auto__ = null;
var cljs$core$async$state_machine__11191__auto____0 = (function (){
var statearr_12076 = [null,null,null,null,null,null,null,null];
(statearr_12076[(0)] = cljs$core$async$state_machine__11191__auto__);

(statearr_12076[(1)] = (1));

return statearr_12076;
});
var cljs$core$async$state_machine__11191__auto____1 = (function (state_12050){
while(true){
var ret_value__11192__auto__ = (function (){try{while(true){
var result__11193__auto__ = switch__11190__auto__.call(null,state_12050);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11193__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11193__auto__;
}
break;
}
}catch (e12077){var ex__11194__auto__ = e12077;
var statearr_12078_12125 = state_12050;
(statearr_12078_12125[(2)] = ex__11194__auto__);


if(cljs.core.seq.call(null,(state_12050[(4)]))){
var statearr_12079_12126 = state_12050;
(statearr_12079_12126[(1)] = cljs.core.first.call(null,(state_12050[(4)])));

} else {
throw ex__11194__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11192__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12127 = state_12050;
state_12050 = G__12127;
continue;
} else {
return ret_value__11192__auto__;
}
break;
}
});
cljs$core$async$state_machine__11191__auto__ = function(state_12050){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__11191__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__11191__auto____1.call(this,state_12050);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__11191__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__11191__auto____0;
cljs$core$async$state_machine__11191__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__11191__auto____1;
return cljs$core$async$state_machine__11191__auto__;
})()
})();
var state__11373__auto__ = (function (){var statearr_12082 = f__11372__auto__.call(null);
(statearr_12082[(6)] = c__11371__auto__);

return statearr_12082;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11373__auto__);
}));

return c__11371__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan_BANG_.call(null,ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__12092 = arguments.length;
switch (G__12092) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.call(null,ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.call(null,ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_.call(null,coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_12133 = (function (_){
var x__5350__auto__ = (((_ == null))?null:_);
var m__5351__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return m__5351__auto__.call(null,_);
} else {
var m__5349__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return m__5349__auto__.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_12133.call(null,_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_12148 = (function (m,ch,close_QMARK_){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return m__5351__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__5349__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return m__5349__auto__.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_12148.call(null,m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_12155 = (function (m,ch){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return m__5351__auto__.call(null,m,ch);
} else {
var m__5349__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return m__5349__auto__.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_12155.call(null,m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_12159 = (function (m){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return m__5351__auto__.call(null,m);
} else {
var m__5349__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return m__5349__auto__.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_12159.call(null,m);
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
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async12150 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async12150 = (function (ch,cs,meta12151){
this.ch = ch;
this.cs = cs;
this.meta12151 = meta12151;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async12150.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12152,meta12151__$1){
var self__ = this;
var _12152__$1 = this;
return (new cljs.core.async.t_cljs$core$async12150(self__.ch,self__.cs,meta12151__$1));
}));

(cljs.core.async.t_cljs$core$async12150.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12152){
var self__ = this;
var _12152__$1 = this;
return self__.meta12151;
}));

(cljs.core.async.t_cljs$core$async12150.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12150.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async12150.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12150.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async12150.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async12150.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async12150.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta12151","meta12151",-2121112602,null)], null);
}));

(cljs.core.async.t_cljs$core$async12150.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async12150.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async12150");

(cljs.core.async.t_cljs$core$async12150.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write.call(null,writer__5288__auto__,"cljs.core.async/t_cljs$core$async12150");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async12150.
 */
cljs.core.async.__GT_t_cljs$core$async12150 = (function cljs$core$async$mult_$___GT_t_cljs$core$async12150(ch__$1,cs__$1,meta12151){
return (new cljs.core.async.t_cljs$core$async12150(ch__$1,cs__$1,meta12151));
});

}

return (new cljs.core.async.t_cljs$core$async12150(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});
var c__11371__auto___12504 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__11372__auto__ = (function (){var switch__11190__auto__ = (function (state_12307){
var state_val_12308 = (state_12307[(1)]);
if((state_val_12308 === (7))){
var inst_12301 = (state_12307[(2)]);
var state_12307__$1 = state_12307;
var statearr_12310_12505 = state_12307__$1;
(statearr_12310_12505[(2)] = inst_12301);

(statearr_12310_12505[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12308 === (20))){
var inst_12200 = (state_12307[(7)]);
var inst_12212 = cljs.core.first.call(null,inst_12200);
var inst_12214 = cljs.core.nth.call(null,inst_12212,(0),null);
var inst_12215 = cljs.core.nth.call(null,inst_12212,(1),null);
var state_12307__$1 = (function (){var statearr_12314 = state_12307;
(statearr_12314[(8)] = inst_12214);

return statearr_12314;
})();
if(cljs.core.truth_(inst_12215)){
var statearr_12315_12515 = state_12307__$1;
(statearr_12315_12515[(1)] = (22));

} else {
var statearr_12317_12516 = state_12307__$1;
(statearr_12317_12516[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12308 === (27))){
var inst_12244 = (state_12307[(9)]);
var inst_12246 = (state_12307[(10)]);
var inst_12251 = (state_12307[(11)]);
var inst_12168 = (state_12307[(12)]);
var inst_12251__$1 = cljs.core._nth.call(null,inst_12244,inst_12246);
var inst_12252 = cljs.core.async.put_BANG_.call(null,inst_12251__$1,inst_12168,done);
var state_12307__$1 = (function (){var statearr_12318 = state_12307;
(statearr_12318[(11)] = inst_12251__$1);

return statearr_12318;
})();
if(cljs.core.truth_(inst_12252)){
var statearr_12320_12520 = state_12307__$1;
(statearr_12320_12520[(1)] = (30));

} else {
var statearr_12321_12521 = state_12307__$1;
(statearr_12321_12521[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12308 === (1))){
var state_12307__$1 = state_12307;
var statearr_12322_12522 = state_12307__$1;
(statearr_12322_12522[(2)] = null);

(statearr_12322_12522[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12308 === (24))){
var inst_12200 = (state_12307[(7)]);
var inst_12221 = (state_12307[(2)]);
var inst_12222 = cljs.core.next.call(null,inst_12200);
var inst_12177 = inst_12222;
var inst_12178 = null;
var inst_12179 = (0);
var inst_12180 = (0);
var state_12307__$1 = (function (){var statearr_12327 = state_12307;
(statearr_12327[(13)] = inst_12221);

(statearr_12327[(14)] = inst_12177);

(statearr_12327[(15)] = inst_12178);

(statearr_12327[(16)] = inst_12179);

(statearr_12327[(17)] = inst_12180);

return statearr_12327;
})();
var statearr_12329_12530 = state_12307__$1;
(statearr_12329_12530[(2)] = null);

(statearr_12329_12530[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12308 === (39))){
var state_12307__$1 = state_12307;
var statearr_12336_12531 = state_12307__$1;
(statearr_12336_12531[(2)] = null);

(statearr_12336_12531[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12308 === (4))){
var inst_12168 = (state_12307[(12)]);
var inst_12168__$1 = (state_12307[(2)]);
var inst_12169 = (inst_12168__$1 == null);
var state_12307__$1 = (function (){var statearr_12338 = state_12307;
(statearr_12338[(12)] = inst_12168__$1);

return statearr_12338;
})();
if(cljs.core.truth_(inst_12169)){
var statearr_12340_12535 = state_12307__$1;
(statearr_12340_12535[(1)] = (5));

} else {
var statearr_12341_12536 = state_12307__$1;
(statearr_12341_12536[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12308 === (15))){
var inst_12180 = (state_12307[(17)]);
var inst_12177 = (state_12307[(14)]);
var inst_12178 = (state_12307[(15)]);
var inst_12179 = (state_12307[(16)]);
var inst_12196 = (state_12307[(2)]);
var inst_12197 = (inst_12180 + (1));
var tmp12330 = inst_12179;
var tmp12331 = inst_12177;
var tmp12332 = inst_12178;
var inst_12177__$1 = tmp12331;
var inst_12178__$1 = tmp12332;
var inst_12179__$1 = tmp12330;
var inst_12180__$1 = inst_12197;
var state_12307__$1 = (function (){var statearr_12343 = state_12307;
(statearr_12343[(18)] = inst_12196);

(statearr_12343[(14)] = inst_12177__$1);

(statearr_12343[(15)] = inst_12178__$1);

(statearr_12343[(16)] = inst_12179__$1);

(statearr_12343[(17)] = inst_12180__$1);

return statearr_12343;
})();
var statearr_12345_12540 = state_12307__$1;
(statearr_12345_12540[(2)] = null);

(statearr_12345_12540[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12308 === (21))){
var inst_12225 = (state_12307[(2)]);
var state_12307__$1 = state_12307;
var statearr_12350_12541 = state_12307__$1;
(statearr_12350_12541[(2)] = inst_12225);

(statearr_12350_12541[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12308 === (31))){
var inst_12251 = (state_12307[(11)]);
var inst_12255 = cljs.core.async.untap_STAR_.call(null,m,inst_12251);
var state_12307__$1 = state_12307;
var statearr_12351_12542 = state_12307__$1;
(statearr_12351_12542[(2)] = inst_12255);

(statearr_12351_12542[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12308 === (32))){
var inst_12246 = (state_12307[(10)]);
var inst_12243 = (state_12307[(19)]);
var inst_12244 = (state_12307[(9)]);
var inst_12245 = (state_12307[(20)]);
var inst_12257 = (state_12307[(2)]);
var inst_12261 = (inst_12246 + (1));
var tmp12346 = inst_12243;
var tmp12347 = inst_12245;
var tmp12348 = inst_12244;
var inst_12243__$1 = tmp12346;
var inst_12244__$1 = tmp12348;
var inst_12245__$1 = tmp12347;
var inst_12246__$1 = inst_12261;
var state_12307__$1 = (function (){var statearr_12354 = state_12307;
(statearr_12354[(21)] = inst_12257);

(statearr_12354[(19)] = inst_12243__$1);

(statearr_12354[(9)] = inst_12244__$1);

(statearr_12354[(20)] = inst_12245__$1);

(statearr_12354[(10)] = inst_12246__$1);

return statearr_12354;
})();
var statearr_12356_12543 = state_12307__$1;
(statearr_12356_12543[(2)] = null);

(statearr_12356_12543[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12308 === (40))){
var inst_12273 = (state_12307[(22)]);
var inst_12277 = cljs.core.async.untap_STAR_.call(null,m,inst_12273);
var state_12307__$1 = state_12307;
var statearr_12358_12545 = state_12307__$1;
(statearr_12358_12545[(2)] = inst_12277);

(statearr_12358_12545[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12308 === (33))){
var inst_12264 = (state_12307[(23)]);
var inst_12266 = cljs.core.chunked_seq_QMARK_.call(null,inst_12264);
var state_12307__$1 = state_12307;
if(inst_12266){
var statearr_12359_12549 = state_12307__$1;
(statearr_12359_12549[(1)] = (36));

} else {
var statearr_12360_12550 = state_12307__$1;
(statearr_12360_12550[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12308 === (13))){
var inst_12189 = (state_12307[(24)]);
var inst_12193 = cljs.core.async.close_BANG_.call(null,inst_12189);
var state_12307__$1 = state_12307;
var statearr_12365_12551 = state_12307__$1;
(statearr_12365_12551[(2)] = inst_12193);

(statearr_12365_12551[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12308 === (22))){
var inst_12214 = (state_12307[(8)]);
var inst_12218 = cljs.core.async.close_BANG_.call(null,inst_12214);
var state_12307__$1 = state_12307;
var statearr_12366_12554 = state_12307__$1;
(statearr_12366_12554[(2)] = inst_12218);

(statearr_12366_12554[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12308 === (36))){
var inst_12264 = (state_12307[(23)]);
var inst_12268 = cljs.core.chunk_first.call(null,inst_12264);
var inst_12269 = cljs.core.chunk_rest.call(null,inst_12264);
var inst_12270 = cljs.core.count.call(null,inst_12268);
var inst_12243 = inst_12269;
var inst_12244 = inst_12268;
var inst_12245 = inst_12270;
var inst_12246 = (0);
var state_12307__$1 = (function (){var statearr_12379 = state_12307;
(statearr_12379[(19)] = inst_12243);

(statearr_12379[(9)] = inst_12244);

(statearr_12379[(20)] = inst_12245);

(statearr_12379[(10)] = inst_12246);

return statearr_12379;
})();
var statearr_12382_12555 = state_12307__$1;
(statearr_12382_12555[(2)] = null);

(statearr_12382_12555[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12308 === (41))){
var inst_12264 = (state_12307[(23)]);
var inst_12279 = (state_12307[(2)]);
var inst_12280 = cljs.core.next.call(null,inst_12264);
var inst_12243 = inst_12280;
var inst_12244 = null;
var inst_12245 = (0);
var inst_12246 = (0);
var state_12307__$1 = (function (){var statearr_12384 = state_12307;
(statearr_12384[(25)] = inst_12279);

(statearr_12384[(19)] = inst_12243);

(statearr_12384[(9)] = inst_12244);

(statearr_12384[(20)] = inst_12245);

(statearr_12384[(10)] = inst_12246);

return statearr_12384;
})();
var statearr_12385_12556 = state_12307__$1;
(statearr_12385_12556[(2)] = null);

(statearr_12385_12556[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12308 === (43))){
var state_12307__$1 = state_12307;
var statearr_12386_12557 = state_12307__$1;
(statearr_12386_12557[(2)] = null);

(statearr_12386_12557[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12308 === (29))){
var inst_12288 = (state_12307[(2)]);
var state_12307__$1 = state_12307;
var statearr_12387_12558 = state_12307__$1;
(statearr_12387_12558[(2)] = inst_12288);

(statearr_12387_12558[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12308 === (44))){
var inst_12297 = (state_12307[(2)]);
var state_12307__$1 = (function (){var statearr_12389 = state_12307;
(statearr_12389[(26)] = inst_12297);

return statearr_12389;
})();
var statearr_12390_12560 = state_12307__$1;
(statearr_12390_12560[(2)] = null);

(statearr_12390_12560[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12308 === (6))){
var inst_12235 = (state_12307[(27)]);
var inst_12234 = cljs.core.deref.call(null,cs);
var inst_12235__$1 = cljs.core.keys.call(null,inst_12234);
var inst_12236 = cljs.core.count.call(null,inst_12235__$1);
var inst_12237 = cljs.core.reset_BANG_.call(null,dctr,inst_12236);
var inst_12242 = cljs.core.seq.call(null,inst_12235__$1);
var inst_12243 = inst_12242;
var inst_12244 = null;
var inst_12245 = (0);
var inst_12246 = (0);
var state_12307__$1 = (function (){var statearr_12393 = state_12307;
(statearr_12393[(27)] = inst_12235__$1);

(statearr_12393[(28)] = inst_12237);

(statearr_12393[(19)] = inst_12243);

(statearr_12393[(9)] = inst_12244);

(statearr_12393[(20)] = inst_12245);

(statearr_12393[(10)] = inst_12246);

return statearr_12393;
})();
var statearr_12397_12561 = state_12307__$1;
(statearr_12397_12561[(2)] = null);

(statearr_12397_12561[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12308 === (28))){
var inst_12243 = (state_12307[(19)]);
var inst_12264 = (state_12307[(23)]);
var inst_12264__$1 = cljs.core.seq.call(null,inst_12243);
var state_12307__$1 = (function (){var statearr_12400 = state_12307;
(statearr_12400[(23)] = inst_12264__$1);

return statearr_12400;
})();
if(inst_12264__$1){
var statearr_12402_12563 = state_12307__$1;
(statearr_12402_12563[(1)] = (33));

} else {
var statearr_12403_12564 = state_12307__$1;
(statearr_12403_12564[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12308 === (25))){
var inst_12246 = (state_12307[(10)]);
var inst_12245 = (state_12307[(20)]);
var inst_12248 = (inst_12246 < inst_12245);
var inst_12249 = inst_12248;
var state_12307__$1 = state_12307;
if(cljs.core.truth_(inst_12249)){
var statearr_12410_12569 = state_12307__$1;
(statearr_12410_12569[(1)] = (27));

} else {
var statearr_12411_12571 = state_12307__$1;
(statearr_12411_12571[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12308 === (34))){
var state_12307__$1 = state_12307;
var statearr_12413_12572 = state_12307__$1;
(statearr_12413_12572[(2)] = null);

(statearr_12413_12572[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12308 === (17))){
var state_12307__$1 = state_12307;
var statearr_12418_12573 = state_12307__$1;
(statearr_12418_12573[(2)] = null);

(statearr_12418_12573[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12308 === (3))){
var inst_12303 = (state_12307[(2)]);
var state_12307__$1 = state_12307;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12307__$1,inst_12303);
} else {
if((state_val_12308 === (12))){
var inst_12230 = (state_12307[(2)]);
var state_12307__$1 = state_12307;
var statearr_12423_12574 = state_12307__$1;
(statearr_12423_12574[(2)] = inst_12230);

(statearr_12423_12574[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12308 === (2))){
var state_12307__$1 = state_12307;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12307__$1,(4),ch);
} else {
if((state_val_12308 === (23))){
var state_12307__$1 = state_12307;
var statearr_12428_12575 = state_12307__$1;
(statearr_12428_12575[(2)] = null);

(statearr_12428_12575[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12308 === (35))){
var inst_12286 = (state_12307[(2)]);
var state_12307__$1 = state_12307;
var statearr_12430_12576 = state_12307__$1;
(statearr_12430_12576[(2)] = inst_12286);

(statearr_12430_12576[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12308 === (19))){
var inst_12200 = (state_12307[(7)]);
var inst_12204 = cljs.core.chunk_first.call(null,inst_12200);
var inst_12205 = cljs.core.chunk_rest.call(null,inst_12200);
var inst_12206 = cljs.core.count.call(null,inst_12204);
var inst_12177 = inst_12205;
var inst_12178 = inst_12204;
var inst_12179 = inst_12206;
var inst_12180 = (0);
var state_12307__$1 = (function (){var statearr_12432 = state_12307;
(statearr_12432[(14)] = inst_12177);

(statearr_12432[(15)] = inst_12178);

(statearr_12432[(16)] = inst_12179);

(statearr_12432[(17)] = inst_12180);

return statearr_12432;
})();
var statearr_12433_12577 = state_12307__$1;
(statearr_12433_12577[(2)] = null);

(statearr_12433_12577[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12308 === (11))){
var inst_12177 = (state_12307[(14)]);
var inst_12200 = (state_12307[(7)]);
var inst_12200__$1 = cljs.core.seq.call(null,inst_12177);
var state_12307__$1 = (function (){var statearr_12436 = state_12307;
(statearr_12436[(7)] = inst_12200__$1);

return statearr_12436;
})();
if(inst_12200__$1){
var statearr_12440_12578 = state_12307__$1;
(statearr_12440_12578[(1)] = (16));

} else {
var statearr_12441_12579 = state_12307__$1;
(statearr_12441_12579[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12308 === (9))){
var inst_12232 = (state_12307[(2)]);
var state_12307__$1 = state_12307;
var statearr_12442_12580 = state_12307__$1;
(statearr_12442_12580[(2)] = inst_12232);

(statearr_12442_12580[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12308 === (5))){
var inst_12175 = cljs.core.deref.call(null,cs);
var inst_12176 = cljs.core.seq.call(null,inst_12175);
var inst_12177 = inst_12176;
var inst_12178 = null;
var inst_12179 = (0);
var inst_12180 = (0);
var state_12307__$1 = (function (){var statearr_12444 = state_12307;
(statearr_12444[(14)] = inst_12177);

(statearr_12444[(15)] = inst_12178);

(statearr_12444[(16)] = inst_12179);

(statearr_12444[(17)] = inst_12180);

return statearr_12444;
})();
var statearr_12445_12581 = state_12307__$1;
(statearr_12445_12581[(2)] = null);

(statearr_12445_12581[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12308 === (14))){
var state_12307__$1 = state_12307;
var statearr_12446_12583 = state_12307__$1;
(statearr_12446_12583[(2)] = null);

(statearr_12446_12583[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12308 === (45))){
var inst_12294 = (state_12307[(2)]);
var state_12307__$1 = state_12307;
var statearr_12447_12584 = state_12307__$1;
(statearr_12447_12584[(2)] = inst_12294);

(statearr_12447_12584[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12308 === (26))){
var inst_12235 = (state_12307[(27)]);
var inst_12290 = (state_12307[(2)]);
var inst_12291 = cljs.core.seq.call(null,inst_12235);
var state_12307__$1 = (function (){var statearr_12464 = state_12307;
(statearr_12464[(29)] = inst_12290);

return statearr_12464;
})();
if(inst_12291){
var statearr_12468_12590 = state_12307__$1;
(statearr_12468_12590[(1)] = (42));

} else {
var statearr_12469_12591 = state_12307__$1;
(statearr_12469_12591[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12308 === (16))){
var inst_12200 = (state_12307[(7)]);
var inst_12202 = cljs.core.chunked_seq_QMARK_.call(null,inst_12200);
var state_12307__$1 = state_12307;
if(inst_12202){
var statearr_12470_12597 = state_12307__$1;
(statearr_12470_12597[(1)] = (19));

} else {
var statearr_12471_12598 = state_12307__$1;
(statearr_12471_12598[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12308 === (38))){
var inst_12283 = (state_12307[(2)]);
var state_12307__$1 = state_12307;
var statearr_12473_12599 = state_12307__$1;
(statearr_12473_12599[(2)] = inst_12283);

(statearr_12473_12599[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12308 === (30))){
var state_12307__$1 = state_12307;
var statearr_12474_12600 = state_12307__$1;
(statearr_12474_12600[(2)] = null);

(statearr_12474_12600[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12308 === (10))){
var inst_12178 = (state_12307[(15)]);
var inst_12180 = (state_12307[(17)]);
var inst_12188 = cljs.core._nth.call(null,inst_12178,inst_12180);
var inst_12189 = cljs.core.nth.call(null,inst_12188,(0),null);
var inst_12191 = cljs.core.nth.call(null,inst_12188,(1),null);
var state_12307__$1 = (function (){var statearr_12475 = state_12307;
(statearr_12475[(24)] = inst_12189);

return statearr_12475;
})();
if(cljs.core.truth_(inst_12191)){
var statearr_12476_12604 = state_12307__$1;
(statearr_12476_12604[(1)] = (13));

} else {
var statearr_12477_12606 = state_12307__$1;
(statearr_12477_12606[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12308 === (18))){
var inst_12228 = (state_12307[(2)]);
var state_12307__$1 = state_12307;
var statearr_12478_12607 = state_12307__$1;
(statearr_12478_12607[(2)] = inst_12228);

(statearr_12478_12607[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12308 === (42))){
var state_12307__$1 = state_12307;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12307__$1,(45),dchan);
} else {
if((state_val_12308 === (37))){
var inst_12264 = (state_12307[(23)]);
var inst_12273 = (state_12307[(22)]);
var inst_12168 = (state_12307[(12)]);
var inst_12273__$1 = cljs.core.first.call(null,inst_12264);
var inst_12274 = cljs.core.async.put_BANG_.call(null,inst_12273__$1,inst_12168,done);
var state_12307__$1 = (function (){var statearr_12479 = state_12307;
(statearr_12479[(22)] = inst_12273__$1);

return statearr_12479;
})();
if(cljs.core.truth_(inst_12274)){
var statearr_12480_12610 = state_12307__$1;
(statearr_12480_12610[(1)] = (39));

} else {
var statearr_12481_12611 = state_12307__$1;
(statearr_12481_12611[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12308 === (8))){
var inst_12180 = (state_12307[(17)]);
var inst_12179 = (state_12307[(16)]);
var inst_12182 = (inst_12180 < inst_12179);
var inst_12183 = inst_12182;
var state_12307__$1 = state_12307;
if(cljs.core.truth_(inst_12183)){
var statearr_12482_12612 = state_12307__$1;
(statearr_12482_12612[(1)] = (10));

} else {
var statearr_12484_12614 = state_12307__$1;
(statearr_12484_12614[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});
return (function() {
var cljs$core$async$mult_$_state_machine__11191__auto__ = null;
var cljs$core$async$mult_$_state_machine__11191__auto____0 = (function (){
var statearr_12485 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12485[(0)] = cljs$core$async$mult_$_state_machine__11191__auto__);

(statearr_12485[(1)] = (1));

return statearr_12485;
});
var cljs$core$async$mult_$_state_machine__11191__auto____1 = (function (state_12307){
while(true){
var ret_value__11192__auto__ = (function (){try{while(true){
var result__11193__auto__ = switch__11190__auto__.call(null,state_12307);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11193__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11193__auto__;
}
break;
}
}catch (e12491){var ex__11194__auto__ = e12491;
var statearr_12492_12616 = state_12307;
(statearr_12492_12616[(2)] = ex__11194__auto__);


if(cljs.core.seq.call(null,(state_12307[(4)]))){
var statearr_12493_12617 = state_12307;
(statearr_12493_12617[(1)] = cljs.core.first.call(null,(state_12307[(4)])));

} else {
throw ex__11194__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11192__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12618 = state_12307;
state_12307 = G__12618;
continue;
} else {
return ret_value__11192__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__11191__auto__ = function(state_12307){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__11191__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__11191__auto____1.call(this,state_12307);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__11191__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__11191__auto____0;
cljs$core$async$mult_$_state_machine__11191__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__11191__auto____1;
return cljs$core$async$mult_$_state_machine__11191__auto__;
})()
})();
var state__11373__auto__ = (function (){var statearr_12499 = f__11372__auto__.call(null);
(statearr_12499[(6)] = c__11371__auto___12504);

return statearr_12499;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11373__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__12502 = arguments.length;
switch (G__12502) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_12628 = (function (m,ch){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return m__5351__auto__.call(null,m,ch);
} else {
var m__5349__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return m__5349__auto__.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_12628.call(null,m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_12632 = (function (m,ch){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return m__5351__auto__.call(null,m,ch);
} else {
var m__5349__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return m__5349__auto__.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_12632.call(null,m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_12636 = (function (m){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return m__5351__auto__.call(null,m);
} else {
var m__5349__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return m__5349__auto__.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_12636.call(null,m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_12637 = (function (m,state_map){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return m__5351__auto__.call(null,m,state_map);
} else {
var m__5349__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return m__5349__auto__.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_12637.call(null,m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_12638 = (function (m,mode){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return m__5351__auto__.call(null,m,mode);
} else {
var m__5349__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return m__5349__auto__.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_12638.call(null,m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__5732__auto__ = [];
var len__5726__auto___12639 = arguments.length;
var i__5727__auto___12641 = (0);
while(true){
if((i__5727__auto___12641 < len__5726__auto___12639)){
args__5732__auto__.push((arguments[i__5727__auto___12641]));

var G__12643 = (i__5727__auto___12641 + (1));
i__5727__auto___12641 = G__12643;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((3) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5733__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__12602){
var map__12603 = p__12602;
var map__12603__$1 = cljs.core.__destructure_map.call(null,map__12603);
var opts = map__12603__$1;
var statearr_12605_12646 = state;
(statearr_12605_12646[(1)] = cont_block);


var temp__5804__auto__ = cljs.core.async.do_alts.call(null,(function (val){
var statearr_12608_12647 = state;
(statearr_12608_12647[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
}),ports,opts);
if(cljs.core.truth_(temp__5804__auto__)){
var cb = temp__5804__auto__;
var statearr_12609_12651 = state;
(statearr_12609_12651[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq12586){
var G__12587 = cljs.core.first.call(null,seq12586);
var seq12586__$1 = cljs.core.next.call(null,seq12586);
var G__12588 = cljs.core.first.call(null,seq12586__$1);
var seq12586__$2 = cljs.core.next.call(null,seq12586__$1);
var G__12589 = cljs.core.first.call(null,seq12586__$2);
var seq12586__$3 = cljs.core.next.call(null,seq12586__$2);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__12587,G__12588,G__12589,seq12586__$3);
}));

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
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null,cljs.core.async.sliding_buffer.call(null,(1)));
var changed = (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv.call(null,(function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,((((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (cljs.core.seq.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async12629 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async12629 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta12630){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta12630 = meta12630;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async12629.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12631,meta12630__$1){
var self__ = this;
var _12631__$1 = this;
return (new cljs.core.async.t_cljs$core$async12629(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta12630__$1));
}));

(cljs.core.async.t_cljs$core$async12629.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12631){
var self__ = this;
var _12631__$1 = this;
return self__.meta12630;
}));

(cljs.core.async.t_cljs$core$async12629.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12629.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async12629.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12629.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async12629.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async12629.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async12629.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async12629.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async12629.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta12630","meta12630",-557206428,null)], null);
}));

(cljs.core.async.t_cljs$core$async12629.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async12629.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async12629");

(cljs.core.async.t_cljs$core$async12629.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write.call(null,writer__5288__auto__,"cljs.core.async/t_cljs$core$async12629");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async12629.
 */
cljs.core.async.__GT_t_cljs$core$async12629 = (function cljs$core$async$mix_$___GT_t_cljs$core$async12629(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta12630){
return (new cljs.core.async.t_cljs$core$async12629(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta12630));
});

}

return (new cljs.core.async.t_cljs$core$async12629(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__11371__auto___12804 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__11372__auto__ = (function (){var switch__11190__auto__ = (function (state_12755){
var state_val_12756 = (state_12755[(1)]);
if((state_val_12756 === (7))){
var inst_12693 = (state_12755[(2)]);
var state_12755__$1 = state_12755;
if(cljs.core.truth_(inst_12693)){
var statearr_12761_12805 = state_12755__$1;
(statearr_12761_12805[(1)] = (8));

} else {
var statearr_12762_12806 = state_12755__$1;
(statearr_12762_12806[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12756 === (20))){
var inst_12682 = (state_12755[(7)]);
var state_12755__$1 = state_12755;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12755__$1,(23),out,inst_12682);
} else {
if((state_val_12756 === (1))){
var inst_12658 = calc_state.call(null);
var inst_12659 = cljs.core.__destructure_map.call(null,inst_12658);
var inst_12660 = cljs.core.get.call(null,inst_12659,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_12661 = cljs.core.get.call(null,inst_12659,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_12662 = cljs.core.get.call(null,inst_12659,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_12663 = inst_12658;
var state_12755__$1 = (function (){var statearr_12763 = state_12755;
(statearr_12763[(8)] = inst_12660);

(statearr_12763[(9)] = inst_12661);

(statearr_12763[(10)] = inst_12662);

(statearr_12763[(11)] = inst_12663);

return statearr_12763;
})();
var statearr_12764_12807 = state_12755__$1;
(statearr_12764_12807[(2)] = null);

(statearr_12764_12807[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12756 === (24))){
var inst_12670 = (state_12755[(12)]);
var inst_12663 = inst_12670;
var state_12755__$1 = (function (){var statearr_12765 = state_12755;
(statearr_12765[(11)] = inst_12663);

return statearr_12765;
})();
var statearr_12766_12808 = state_12755__$1;
(statearr_12766_12808[(2)] = null);

(statearr_12766_12808[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12756 === (4))){
var inst_12682 = (state_12755[(7)]);
var inst_12686 = (state_12755[(13)]);
var inst_12681 = (state_12755[(2)]);
var inst_12682__$1 = cljs.core.nth.call(null,inst_12681,(0),null);
var inst_12683 = cljs.core.nth.call(null,inst_12681,(1),null);
var inst_12686__$1 = (inst_12682__$1 == null);
var state_12755__$1 = (function (){var statearr_12767 = state_12755;
(statearr_12767[(7)] = inst_12682__$1);

(statearr_12767[(14)] = inst_12683);

(statearr_12767[(13)] = inst_12686__$1);

return statearr_12767;
})();
if(cljs.core.truth_(inst_12686__$1)){
var statearr_12768_12809 = state_12755__$1;
(statearr_12768_12809[(1)] = (5));

} else {
var statearr_12769_12810 = state_12755__$1;
(statearr_12769_12810[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12756 === (15))){
var inst_12671 = (state_12755[(15)]);
var inst_12720 = (state_12755[(16)]);
var inst_12720__$1 = cljs.core.empty_QMARK_.call(null,inst_12671);
var state_12755__$1 = (function (){var statearr_12770 = state_12755;
(statearr_12770[(16)] = inst_12720__$1);

return statearr_12770;
})();
if(inst_12720__$1){
var statearr_12771_12811 = state_12755__$1;
(statearr_12771_12811[(1)] = (17));

} else {
var statearr_12772_12812 = state_12755__$1;
(statearr_12772_12812[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12756 === (21))){
var inst_12670 = (state_12755[(12)]);
var inst_12663 = inst_12670;
var state_12755__$1 = (function (){var statearr_12773 = state_12755;
(statearr_12773[(11)] = inst_12663);

return statearr_12773;
})();
var statearr_12774_12813 = state_12755__$1;
(statearr_12774_12813[(2)] = null);

(statearr_12774_12813[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12756 === (13))){
var inst_12706 = (state_12755[(2)]);
var inst_12707 = calc_state.call(null);
var inst_12663 = inst_12707;
var state_12755__$1 = (function (){var statearr_12775 = state_12755;
(statearr_12775[(17)] = inst_12706);

(statearr_12775[(11)] = inst_12663);

return statearr_12775;
})();
var statearr_12776_12814 = state_12755__$1;
(statearr_12776_12814[(2)] = null);

(statearr_12776_12814[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12756 === (22))){
var inst_12745 = (state_12755[(2)]);
var state_12755__$1 = state_12755;
var statearr_12777_12815 = state_12755__$1;
(statearr_12777_12815[(2)] = inst_12745);

(statearr_12777_12815[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12756 === (6))){
var inst_12683 = (state_12755[(14)]);
var inst_12691 = cljs.core._EQ_.call(null,inst_12683,change);
var state_12755__$1 = state_12755;
var statearr_12778_12816 = state_12755__$1;
(statearr_12778_12816[(2)] = inst_12691);

(statearr_12778_12816[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12756 === (25))){
var state_12755__$1 = state_12755;
var statearr_12779_12817 = state_12755__$1;
(statearr_12779_12817[(2)] = null);

(statearr_12779_12817[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12756 === (17))){
var inst_12672 = (state_12755[(18)]);
var inst_12683 = (state_12755[(14)]);
var inst_12722 = inst_12672.call(null,inst_12683);
var inst_12723 = cljs.core.not.call(null,inst_12722);
var state_12755__$1 = state_12755;
var statearr_12780_12818 = state_12755__$1;
(statearr_12780_12818[(2)] = inst_12723);

(statearr_12780_12818[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12756 === (3))){
var inst_12750 = (state_12755[(2)]);
var state_12755__$1 = state_12755;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12755__$1,inst_12750);
} else {
if((state_val_12756 === (12))){
var state_12755__$1 = state_12755;
var statearr_12781_12819 = state_12755__$1;
(statearr_12781_12819[(2)] = null);

(statearr_12781_12819[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12756 === (2))){
var inst_12663 = (state_12755[(11)]);
var inst_12670 = (state_12755[(12)]);
var inst_12670__$1 = cljs.core.__destructure_map.call(null,inst_12663);
var inst_12671 = cljs.core.get.call(null,inst_12670__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_12672 = cljs.core.get.call(null,inst_12670__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_12673 = cljs.core.get.call(null,inst_12670__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_12755__$1 = (function (){var statearr_12782 = state_12755;
(statearr_12782[(12)] = inst_12670__$1);

(statearr_12782[(15)] = inst_12671);

(statearr_12782[(18)] = inst_12672);

return statearr_12782;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_12755__$1,(4),inst_12673);
} else {
if((state_val_12756 === (23))){
var inst_12734 = (state_12755[(2)]);
var state_12755__$1 = state_12755;
if(cljs.core.truth_(inst_12734)){
var statearr_12783_12820 = state_12755__$1;
(statearr_12783_12820[(1)] = (24));

} else {
var statearr_12784_12821 = state_12755__$1;
(statearr_12784_12821[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12756 === (19))){
var inst_12726 = (state_12755[(2)]);
var state_12755__$1 = state_12755;
var statearr_12785_12822 = state_12755__$1;
(statearr_12785_12822[(2)] = inst_12726);

(statearr_12785_12822[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12756 === (11))){
var inst_12683 = (state_12755[(14)]);
var inst_12703 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_12683);
var state_12755__$1 = state_12755;
var statearr_12786_12823 = state_12755__$1;
(statearr_12786_12823[(2)] = inst_12703);

(statearr_12786_12823[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12756 === (9))){
var inst_12671 = (state_12755[(15)]);
var inst_12683 = (state_12755[(14)]);
var inst_12712 = (state_12755[(19)]);
var inst_12712__$1 = inst_12671.call(null,inst_12683);
var state_12755__$1 = (function (){var statearr_12787 = state_12755;
(statearr_12787[(19)] = inst_12712__$1);

return statearr_12787;
})();
if(cljs.core.truth_(inst_12712__$1)){
var statearr_12788_12825 = state_12755__$1;
(statearr_12788_12825[(1)] = (14));

} else {
var statearr_12789_12826 = state_12755__$1;
(statearr_12789_12826[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12756 === (5))){
var inst_12686 = (state_12755[(13)]);
var state_12755__$1 = state_12755;
var statearr_12790_12828 = state_12755__$1;
(statearr_12790_12828[(2)] = inst_12686);

(statearr_12790_12828[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12756 === (14))){
var inst_12712 = (state_12755[(19)]);
var state_12755__$1 = state_12755;
var statearr_12791_12829 = state_12755__$1;
(statearr_12791_12829[(2)] = inst_12712);

(statearr_12791_12829[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12756 === (26))){
var inst_12740 = (state_12755[(2)]);
var state_12755__$1 = state_12755;
var statearr_12792_12831 = state_12755__$1;
(statearr_12792_12831[(2)] = inst_12740);

(statearr_12792_12831[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12756 === (16))){
var inst_12728 = (state_12755[(2)]);
var state_12755__$1 = state_12755;
if(cljs.core.truth_(inst_12728)){
var statearr_12793_12832 = state_12755__$1;
(statearr_12793_12832[(1)] = (20));

} else {
var statearr_12794_12833 = state_12755__$1;
(statearr_12794_12833[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12756 === (10))){
var inst_12747 = (state_12755[(2)]);
var state_12755__$1 = state_12755;
var statearr_12795_12835 = state_12755__$1;
(statearr_12795_12835[(2)] = inst_12747);

(statearr_12795_12835[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12756 === (18))){
var inst_12720 = (state_12755[(16)]);
var state_12755__$1 = state_12755;
var statearr_12796_12838 = state_12755__$1;
(statearr_12796_12838[(2)] = inst_12720);

(statearr_12796_12838[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12756 === (8))){
var inst_12682 = (state_12755[(7)]);
var inst_12697 = (inst_12682 == null);
var state_12755__$1 = state_12755;
if(cljs.core.truth_(inst_12697)){
var statearr_12797_12839 = state_12755__$1;
(statearr_12797_12839[(1)] = (11));

} else {
var statearr_12798_12840 = state_12755__$1;
(statearr_12798_12840[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});
return (function() {
var cljs$core$async$mix_$_state_machine__11191__auto__ = null;
var cljs$core$async$mix_$_state_machine__11191__auto____0 = (function (){
var statearr_12799 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12799[(0)] = cljs$core$async$mix_$_state_machine__11191__auto__);

(statearr_12799[(1)] = (1));

return statearr_12799;
});
var cljs$core$async$mix_$_state_machine__11191__auto____1 = (function (state_12755){
while(true){
var ret_value__11192__auto__ = (function (){try{while(true){
var result__11193__auto__ = switch__11190__auto__.call(null,state_12755);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11193__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11193__auto__;
}
break;
}
}catch (e12800){var ex__11194__auto__ = e12800;
var statearr_12801_12844 = state_12755;
(statearr_12801_12844[(2)] = ex__11194__auto__);


if(cljs.core.seq.call(null,(state_12755[(4)]))){
var statearr_12802_12845 = state_12755;
(statearr_12802_12845[(1)] = cljs.core.first.call(null,(state_12755[(4)])));

} else {
throw ex__11194__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11192__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12846 = state_12755;
state_12755 = G__12846;
continue;
} else {
return ret_value__11192__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__11191__auto__ = function(state_12755){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__11191__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__11191__auto____1.call(this,state_12755);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__11191__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__11191__auto____0;
cljs$core$async$mix_$_state_machine__11191__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__11191__auto____1;
return cljs$core$async$mix_$_state_machine__11191__auto__;
})()
})();
var state__11373__auto__ = (function (){var statearr_12803 = f__11372__auto__.call(null);
(statearr_12803[(6)] = c__11371__auto___12804);

return statearr_12803;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11373__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
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
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_12856 = (function (p,v,ch,close_QMARK_){
var x__5350__auto__ = (((p == null))?null:p);
var m__5351__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return m__5351__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__5349__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return m__5349__auto__.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_12856.call(null,p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_12859 = (function (p,v,ch){
var x__5350__auto__ = (((p == null))?null:p);
var m__5351__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return m__5351__auto__.call(null,p,v,ch);
} else {
var m__5349__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return m__5349__auto__.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_12859.call(null,p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_12864 = (function() {
var G__12865 = null;
var G__12865__1 = (function (p){
var x__5350__auto__ = (((p == null))?null:p);
var m__5351__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return m__5351__auto__.call(null,p);
} else {
var m__5349__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return m__5349__auto__.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
});
var G__12865__2 = (function (p,v){
var x__5350__auto__ = (((p == null))?null:p);
var m__5351__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return m__5351__auto__.call(null,p,v);
} else {
var m__5349__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return m__5349__auto__.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
});
G__12865 = function(p,v){
switch(arguments.length){
case 1:
return G__12865__1.call(this,p);
case 2:
return G__12865__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__12865.cljs$core$IFn$_invoke$arity$1 = G__12865__1;
G__12865.cljs$core$IFn$_invoke$arity$2 = G__12865__2;
return G__12865;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__12827 = arguments.length;
switch (G__12827) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_12864.call(null,p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_12864.call(null,p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);


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
var G__12858 = arguments.length;
switch (G__12858) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__5002__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,(function (p1__12852_SHARP_){
if(cljs.core.truth_(p1__12852_SHARP_.call(null,topic))){
return p1__12852_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__12852_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async12866 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async12866 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta12867){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta12867 = meta12867;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async12866.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12868,meta12867__$1){
var self__ = this;
var _12868__$1 = this;
return (new cljs.core.async.t_cljs$core$async12866(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta12867__$1));
}));

(cljs.core.async.t_cljs$core$async12866.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12868){
var self__ = this;
var _12868__$1 = this;
return self__.meta12867;
}));

(cljs.core.async.t_cljs$core$async12866.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12866.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async12866.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12866.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async12866.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5804__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__5804__auto__)){
var m = temp__5804__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async12866.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async12866.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async12866.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta12867","meta12867",1008927537,null)], null);
}));

(cljs.core.async.t_cljs$core$async12866.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async12866.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async12866");

(cljs.core.async.t_cljs$core$async12866.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write.call(null,writer__5288__auto__,"cljs.core.async/t_cljs$core$async12866");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async12866.
 */
cljs.core.async.__GT_t_cljs$core$async12866 = (function cljs$core$async$__GT_t_cljs$core$async12866(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta12867){
return (new cljs.core.async.t_cljs$core$async12866(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta12867));
});

}

return (new cljs.core.async.t_cljs$core$async12866(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__11371__auto___13109 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__11372__auto__ = (function (){var switch__11190__auto__ = (function (state_12966){
var state_val_12967 = (state_12966[(1)]);
if((state_val_12967 === (7))){
var inst_12961 = (state_12966[(2)]);
var state_12966__$1 = state_12966;
var statearr_12971_13111 = state_12966__$1;
(statearr_12971_13111[(2)] = inst_12961);

(statearr_12971_13111[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12967 === (20))){
var state_12966__$1 = state_12966;
var statearr_12972_13112 = state_12966__$1;
(statearr_12972_13112[(2)] = null);

(statearr_12972_13112[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12967 === (1))){
var state_12966__$1 = state_12966;
var statearr_12974_13113 = state_12966__$1;
(statearr_12974_13113[(2)] = null);

(statearr_12974_13113[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12967 === (24))){
var inst_12944 = (state_12966[(7)]);
var inst_12953 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_12944);
var state_12966__$1 = state_12966;
var statearr_12975_13114 = state_12966__$1;
(statearr_12975_13114[(2)] = inst_12953);

(statearr_12975_13114[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12967 === (4))){
var inst_12888 = (state_12966[(8)]);
var inst_12888__$1 = (state_12966[(2)]);
var inst_12889 = (inst_12888__$1 == null);
var state_12966__$1 = (function (){var statearr_12978 = state_12966;
(statearr_12978[(8)] = inst_12888__$1);

return statearr_12978;
})();
if(cljs.core.truth_(inst_12889)){
var statearr_12979_13115 = state_12966__$1;
(statearr_12979_13115[(1)] = (5));

} else {
var statearr_12980_13116 = state_12966__$1;
(statearr_12980_13116[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12967 === (15))){
var inst_12935 = (state_12966[(2)]);
var state_12966__$1 = state_12966;
var statearr_12981_13117 = state_12966__$1;
(statearr_12981_13117[(2)] = inst_12935);

(statearr_12981_13117[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12967 === (21))){
var inst_12958 = (state_12966[(2)]);
var state_12966__$1 = (function (){var statearr_12983 = state_12966;
(statearr_12983[(9)] = inst_12958);

return statearr_12983;
})();
var statearr_12985_13118 = state_12966__$1;
(statearr_12985_13118[(2)] = null);

(statearr_12985_13118[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12967 === (13))){
var inst_12916 = (state_12966[(10)]);
var inst_12919 = cljs.core.chunked_seq_QMARK_.call(null,inst_12916);
var state_12966__$1 = state_12966;
if(inst_12919){
var statearr_12988_13125 = state_12966__$1;
(statearr_12988_13125[(1)] = (16));

} else {
var statearr_12989_13128 = state_12966__$1;
(statearr_12989_13128[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12967 === (22))){
var inst_12950 = (state_12966[(2)]);
var state_12966__$1 = state_12966;
if(cljs.core.truth_(inst_12950)){
var statearr_12991_13130 = state_12966__$1;
(statearr_12991_13130[(1)] = (23));

} else {
var statearr_12992_13131 = state_12966__$1;
(statearr_12992_13131[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12967 === (6))){
var inst_12888 = (state_12966[(8)]);
var inst_12944 = (state_12966[(7)]);
var inst_12946 = (state_12966[(11)]);
var inst_12944__$1 = topic_fn.call(null,inst_12888);
var inst_12945 = cljs.core.deref.call(null,mults);
var inst_12946__$1 = cljs.core.get.call(null,inst_12945,inst_12944__$1);
var state_12966__$1 = (function (){var statearr_12993 = state_12966;
(statearr_12993[(7)] = inst_12944__$1);

(statearr_12993[(11)] = inst_12946__$1);

return statearr_12993;
})();
if(cljs.core.truth_(inst_12946__$1)){
var statearr_12994_13132 = state_12966__$1;
(statearr_12994_13132[(1)] = (19));

} else {
var statearr_12995_13133 = state_12966__$1;
(statearr_12995_13133[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12967 === (25))){
var inst_12955 = (state_12966[(2)]);
var state_12966__$1 = state_12966;
var statearr_12997_13134 = state_12966__$1;
(statearr_12997_13134[(2)] = inst_12955);

(statearr_12997_13134[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12967 === (17))){
var inst_12916 = (state_12966[(10)]);
var inst_12926 = cljs.core.first.call(null,inst_12916);
var inst_12927 = cljs.core.async.muxch_STAR_.call(null,inst_12926);
var inst_12928 = cljs.core.async.close_BANG_.call(null,inst_12927);
var inst_12929 = cljs.core.next.call(null,inst_12916);
var inst_12898 = inst_12929;
var inst_12899 = null;
var inst_12900 = (0);
var inst_12901 = (0);
var state_12966__$1 = (function (){var statearr_13005 = state_12966;
(statearr_13005[(12)] = inst_12928);

(statearr_13005[(13)] = inst_12898);

(statearr_13005[(14)] = inst_12899);

(statearr_13005[(15)] = inst_12900);

(statearr_13005[(16)] = inst_12901);

return statearr_13005;
})();
var statearr_13007_13135 = state_12966__$1;
(statearr_13007_13135[(2)] = null);

(statearr_13007_13135[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12967 === (3))){
var inst_12963 = (state_12966[(2)]);
var state_12966__$1 = state_12966;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12966__$1,inst_12963);
} else {
if((state_val_12967 === (12))){
var inst_12940 = (state_12966[(2)]);
var state_12966__$1 = state_12966;
var statearr_13018_13136 = state_12966__$1;
(statearr_13018_13136[(2)] = inst_12940);

(statearr_13018_13136[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12967 === (2))){
var state_12966__$1 = state_12966;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12966__$1,(4),ch);
} else {
if((state_val_12967 === (23))){
var state_12966__$1 = state_12966;
var statearr_13019_13137 = state_12966__$1;
(statearr_13019_13137[(2)] = null);

(statearr_13019_13137[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12967 === (19))){
var inst_12946 = (state_12966[(11)]);
var inst_12888 = (state_12966[(8)]);
var inst_12948 = cljs.core.async.muxch_STAR_.call(null,inst_12946);
var state_12966__$1 = state_12966;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12966__$1,(22),inst_12948,inst_12888);
} else {
if((state_val_12967 === (11))){
var inst_12898 = (state_12966[(13)]);
var inst_12916 = (state_12966[(10)]);
var inst_12916__$1 = cljs.core.seq.call(null,inst_12898);
var state_12966__$1 = (function (){var statearr_13028 = state_12966;
(statearr_13028[(10)] = inst_12916__$1);

return statearr_13028;
})();
if(inst_12916__$1){
var statearr_13029_13142 = state_12966__$1;
(statearr_13029_13142[(1)] = (13));

} else {
var statearr_13030_13143 = state_12966__$1;
(statearr_13030_13143[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12967 === (9))){
var inst_12942 = (state_12966[(2)]);
var state_12966__$1 = state_12966;
var statearr_13037_13144 = state_12966__$1;
(statearr_13037_13144[(2)] = inst_12942);

(statearr_13037_13144[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12967 === (5))){
var inst_12895 = cljs.core.deref.call(null,mults);
var inst_12896 = cljs.core.vals.call(null,inst_12895);
var inst_12897 = cljs.core.seq.call(null,inst_12896);
var inst_12898 = inst_12897;
var inst_12899 = null;
var inst_12900 = (0);
var inst_12901 = (0);
var state_12966__$1 = (function (){var statearr_13038 = state_12966;
(statearr_13038[(13)] = inst_12898);

(statearr_13038[(14)] = inst_12899);

(statearr_13038[(15)] = inst_12900);

(statearr_13038[(16)] = inst_12901);

return statearr_13038;
})();
var statearr_13039_13145 = state_12966__$1;
(statearr_13039_13145[(2)] = null);

(statearr_13039_13145[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12967 === (14))){
var state_12966__$1 = state_12966;
var statearr_13051_13146 = state_12966__$1;
(statearr_13051_13146[(2)] = null);

(statearr_13051_13146[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12967 === (16))){
var inst_12916 = (state_12966[(10)]);
var inst_12921 = cljs.core.chunk_first.call(null,inst_12916);
var inst_12922 = cljs.core.chunk_rest.call(null,inst_12916);
var inst_12923 = cljs.core.count.call(null,inst_12921);
var inst_12898 = inst_12922;
var inst_12899 = inst_12921;
var inst_12900 = inst_12923;
var inst_12901 = (0);
var state_12966__$1 = (function (){var statearr_13060 = state_12966;
(statearr_13060[(13)] = inst_12898);

(statearr_13060[(14)] = inst_12899);

(statearr_13060[(15)] = inst_12900);

(statearr_13060[(16)] = inst_12901);

return statearr_13060;
})();
var statearr_13065_13147 = state_12966__$1;
(statearr_13065_13147[(2)] = null);

(statearr_13065_13147[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12967 === (10))){
var inst_12899 = (state_12966[(14)]);
var inst_12901 = (state_12966[(16)]);
var inst_12898 = (state_12966[(13)]);
var inst_12900 = (state_12966[(15)]);
var inst_12908 = cljs.core._nth.call(null,inst_12899,inst_12901);
var inst_12909 = cljs.core.async.muxch_STAR_.call(null,inst_12908);
var inst_12910 = cljs.core.async.close_BANG_.call(null,inst_12909);
var inst_12912 = (inst_12901 + (1));
var tmp13048 = inst_12900;
var tmp13049 = inst_12898;
var tmp13050 = inst_12899;
var inst_12898__$1 = tmp13049;
var inst_12899__$1 = tmp13050;
var inst_12900__$1 = tmp13048;
var inst_12901__$1 = inst_12912;
var state_12966__$1 = (function (){var statearr_13070 = state_12966;
(statearr_13070[(17)] = inst_12910);

(statearr_13070[(13)] = inst_12898__$1);

(statearr_13070[(14)] = inst_12899__$1);

(statearr_13070[(15)] = inst_12900__$1);

(statearr_13070[(16)] = inst_12901__$1);

return statearr_13070;
})();
var statearr_13073_13148 = state_12966__$1;
(statearr_13073_13148[(2)] = null);

(statearr_13073_13148[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12967 === (18))){
var inst_12932 = (state_12966[(2)]);
var state_12966__$1 = state_12966;
var statearr_13074_13149 = state_12966__$1;
(statearr_13074_13149[(2)] = inst_12932);

(statearr_13074_13149[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12967 === (8))){
var inst_12901 = (state_12966[(16)]);
var inst_12900 = (state_12966[(15)]);
var inst_12903 = (inst_12901 < inst_12900);
var inst_12904 = inst_12903;
var state_12966__$1 = state_12966;
if(cljs.core.truth_(inst_12904)){
var statearr_13075_13150 = state_12966__$1;
(statearr_13075_13150[(1)] = (10));

} else {
var statearr_13081_13151 = state_12966__$1;
(statearr_13081_13151[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});
return (function() {
var cljs$core$async$state_machine__11191__auto__ = null;
var cljs$core$async$state_machine__11191__auto____0 = (function (){
var statearr_13083 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_13083[(0)] = cljs$core$async$state_machine__11191__auto__);

(statearr_13083[(1)] = (1));

return statearr_13083;
});
var cljs$core$async$state_machine__11191__auto____1 = (function (state_12966){
while(true){
var ret_value__11192__auto__ = (function (){try{while(true){
var result__11193__auto__ = switch__11190__auto__.call(null,state_12966);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11193__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11193__auto__;
}
break;
}
}catch (e13084){var ex__11194__auto__ = e13084;
var statearr_13086_13152 = state_12966;
(statearr_13086_13152[(2)] = ex__11194__auto__);


if(cljs.core.seq.call(null,(state_12966[(4)]))){
var statearr_13089_13153 = state_12966;
(statearr_13089_13153[(1)] = cljs.core.first.call(null,(state_12966[(4)])));

} else {
throw ex__11194__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11192__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13154 = state_12966;
state_12966 = G__13154;
continue;
} else {
return ret_value__11192__auto__;
}
break;
}
});
cljs$core$async$state_machine__11191__auto__ = function(state_12966){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__11191__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__11191__auto____1.call(this,state_12966);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__11191__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__11191__auto____0;
cljs$core$async$state_machine__11191__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__11191__auto____1;
return cljs$core$async$state_machine__11191__auto__;
})()
})();
var state__11373__auto__ = (function (){var statearr_13090 = f__11372__auto__.call(null);
(statearr_13090[(6)] = c__11371__auto___13109);

return statearr_13090;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11373__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__13096 = arguments.length;
switch (G__13096) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__13101 = arguments.length;
switch (G__13101) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

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
var G__13110 = arguments.length;
switch (G__13110) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,(function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.call(null,cnt));
if((cnt === (0))){
cljs.core.async.close_BANG_.call(null,out);
} else {
var c__11371__auto___13263 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__11372__auto__ = (function (){var switch__11190__auto__ = (function (state_13205){
var state_val_13206 = (state_13205[(1)]);
if((state_val_13206 === (7))){
var state_13205__$1 = state_13205;
var statearr_13209_13275 = state_13205__$1;
(statearr_13209_13275[(2)] = null);

(statearr_13209_13275[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13206 === (1))){
var state_13205__$1 = state_13205;
var statearr_13210_13280 = state_13205__$1;
(statearr_13210_13280[(2)] = null);

(statearr_13210_13280[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13206 === (4))){
var inst_13160 = (state_13205[(7)]);
var inst_13159 = (state_13205[(8)]);
var inst_13162 = (inst_13160 < inst_13159);
var state_13205__$1 = state_13205;
if(cljs.core.truth_(inst_13162)){
var statearr_13211_13284 = state_13205__$1;
(statearr_13211_13284[(1)] = (6));

} else {
var statearr_13212_13288 = state_13205__$1;
(statearr_13212_13288[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13206 === (15))){
var inst_13191 = (state_13205[(9)]);
var inst_13196 = cljs.core.apply.call(null,f,inst_13191);
var state_13205__$1 = state_13205;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13205__$1,(17),out,inst_13196);
} else {
if((state_val_13206 === (13))){
var inst_13191 = (state_13205[(9)]);
var inst_13191__$1 = (state_13205[(2)]);
var inst_13192 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_13191__$1);
var state_13205__$1 = (function (){var statearr_13213 = state_13205;
(statearr_13213[(9)] = inst_13191__$1);

return statearr_13213;
})();
if(cljs.core.truth_(inst_13192)){
var statearr_13214_13304 = state_13205__$1;
(statearr_13214_13304[(1)] = (14));

} else {
var statearr_13215_13305 = state_13205__$1;
(statearr_13215_13305[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13206 === (6))){
var state_13205__$1 = state_13205;
var statearr_13216_13306 = state_13205__$1;
(statearr_13216_13306[(2)] = null);

(statearr_13216_13306[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13206 === (17))){
var inst_13198 = (state_13205[(2)]);
var state_13205__$1 = (function (){var statearr_13230 = state_13205;
(statearr_13230[(10)] = inst_13198);

return statearr_13230;
})();
var statearr_13231_13308 = state_13205__$1;
(statearr_13231_13308[(2)] = null);

(statearr_13231_13308[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13206 === (3))){
var inst_13203 = (state_13205[(2)]);
var state_13205__$1 = state_13205;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13205__$1,inst_13203);
} else {
if((state_val_13206 === (12))){
var _ = (function (){var statearr_13232 = state_13205;
(statearr_13232[(4)] = cljs.core.rest.call(null,(state_13205[(4)])));

return statearr_13232;
})();
var state_13205__$1 = state_13205;
var ex13229 = (state_13205__$1[(2)]);
var statearr_13233_13312 = state_13205__$1;
(statearr_13233_13312[(5)] = ex13229);


if((ex13229 instanceof Object)){
var statearr_13234_13314 = state_13205__$1;
(statearr_13234_13314[(1)] = (11));

(statearr_13234_13314[(5)] = null);

} else {
throw ex13229;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13206 === (2))){
var inst_13158 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_13159 = cnt;
var inst_13160 = (0);
var state_13205__$1 = (function (){var statearr_13235 = state_13205;
(statearr_13235[(11)] = inst_13158);

(statearr_13235[(8)] = inst_13159);

(statearr_13235[(7)] = inst_13160);

return statearr_13235;
})();
var statearr_13236_13316 = state_13205__$1;
(statearr_13236_13316[(2)] = null);

(statearr_13236_13316[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13206 === (11))){
var inst_13170 = (state_13205[(2)]);
var inst_13171 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_13205__$1 = (function (){var statearr_13237 = state_13205;
(statearr_13237[(12)] = inst_13170);

return statearr_13237;
})();
var statearr_13238_13320 = state_13205__$1;
(statearr_13238_13320[(2)] = inst_13171);

(statearr_13238_13320[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13206 === (9))){
var inst_13160 = (state_13205[(7)]);
var _ = (function (){var statearr_13240 = state_13205;
(statearr_13240[(4)] = cljs.core.cons.call(null,(12),(state_13205[(4)])));

return statearr_13240;
})();
var inst_13177 = chs__$1.call(null,inst_13160);
var inst_13178 = done.call(null,inst_13160);
var inst_13179 = cljs.core.async.take_BANG_.call(null,inst_13177,inst_13178);
var ___$1 = (function (){var statearr_13242 = state_13205;
(statearr_13242[(4)] = cljs.core.rest.call(null,(state_13205[(4)])));

return statearr_13242;
})();
var state_13205__$1 = state_13205;
var statearr_13243_13322 = state_13205__$1;
(statearr_13243_13322[(2)] = inst_13179);

(statearr_13243_13322[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13206 === (5))){
var inst_13189 = (state_13205[(2)]);
var state_13205__$1 = (function (){var statearr_13245 = state_13205;
(statearr_13245[(13)] = inst_13189);

return statearr_13245;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13205__$1,(13),dchan);
} else {
if((state_val_13206 === (14))){
var inst_13194 = cljs.core.async.close_BANG_.call(null,out);
var state_13205__$1 = state_13205;
var statearr_13246_13323 = state_13205__$1;
(statearr_13246_13323[(2)] = inst_13194);

(statearr_13246_13323[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13206 === (16))){
var inst_13201 = (state_13205[(2)]);
var state_13205__$1 = state_13205;
var statearr_13247_13324 = state_13205__$1;
(statearr_13247_13324[(2)] = inst_13201);

(statearr_13247_13324[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13206 === (10))){
var inst_13160 = (state_13205[(7)]);
var inst_13182 = (state_13205[(2)]);
var inst_13183 = (inst_13160 + (1));
var inst_13160__$1 = inst_13183;
var state_13205__$1 = (function (){var statearr_13248 = state_13205;
(statearr_13248[(14)] = inst_13182);

(statearr_13248[(7)] = inst_13160__$1);

return statearr_13248;
})();
var statearr_13249_13327 = state_13205__$1;
(statearr_13249_13327[(2)] = null);

(statearr_13249_13327[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13206 === (8))){
var inst_13187 = (state_13205[(2)]);
var state_13205__$1 = state_13205;
var statearr_13250_13330 = state_13205__$1;
(statearr_13250_13330[(2)] = inst_13187);

(statearr_13250_13330[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});
return (function() {
var cljs$core$async$state_machine__11191__auto__ = null;
var cljs$core$async$state_machine__11191__auto____0 = (function (){
var statearr_13251 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_13251[(0)] = cljs$core$async$state_machine__11191__auto__);

(statearr_13251[(1)] = (1));

return statearr_13251;
});
var cljs$core$async$state_machine__11191__auto____1 = (function (state_13205){
while(true){
var ret_value__11192__auto__ = (function (){try{while(true){
var result__11193__auto__ = switch__11190__auto__.call(null,state_13205);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11193__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11193__auto__;
}
break;
}
}catch (e13252){var ex__11194__auto__ = e13252;
var statearr_13253_13331 = state_13205;
(statearr_13253_13331[(2)] = ex__11194__auto__);


if(cljs.core.seq.call(null,(state_13205[(4)]))){
var statearr_13254_13332 = state_13205;
(statearr_13254_13332[(1)] = cljs.core.first.call(null,(state_13205[(4)])));

} else {
throw ex__11194__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11192__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13334 = state_13205;
state_13205 = G__13334;
continue;
} else {
return ret_value__11192__auto__;
}
break;
}
});
cljs$core$async$state_machine__11191__auto__ = function(state_13205){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__11191__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__11191__auto____1.call(this,state_13205);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__11191__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__11191__auto____0;
cljs$core$async$state_machine__11191__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__11191__auto____1;
return cljs$core$async$state_machine__11191__auto__;
})()
})();
var state__11373__auto__ = (function (){var statearr_13257 = f__11372__auto__.call(null);
(statearr_13257[(6)] = c__11371__auto___13263);

return statearr_13257;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11373__auto__);
}));

}

return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__13262 = arguments.length;
switch (G__13262) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__11371__auto___13354 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__11372__auto__ = (function (){var switch__11190__auto__ = (function (state_13302){
var state_val_13303 = (state_13302[(1)]);
if((state_val_13303 === (7))){
var inst_13277 = (state_13302[(7)]);
var inst_13278 = (state_13302[(8)]);
var inst_13277__$1 = (state_13302[(2)]);
var inst_13278__$1 = cljs.core.nth.call(null,inst_13277__$1,(0),null);
var inst_13279 = cljs.core.nth.call(null,inst_13277__$1,(1),null);
var inst_13281 = (inst_13278__$1 == null);
var state_13302__$1 = (function (){var statearr_13307 = state_13302;
(statearr_13307[(7)] = inst_13277__$1);

(statearr_13307[(8)] = inst_13278__$1);

(statearr_13307[(9)] = inst_13279);

return statearr_13307;
})();
if(cljs.core.truth_(inst_13281)){
var statearr_13309_13357 = state_13302__$1;
(statearr_13309_13357[(1)] = (8));

} else {
var statearr_13310_13358 = state_13302__$1;
(statearr_13310_13358[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13303 === (1))){
var inst_13266 = cljs.core.vec.call(null,chs);
var inst_13267 = inst_13266;
var state_13302__$1 = (function (){var statearr_13311 = state_13302;
(statearr_13311[(10)] = inst_13267);

return statearr_13311;
})();
var statearr_13313_13359 = state_13302__$1;
(statearr_13313_13359[(2)] = null);

(statearr_13313_13359[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13303 === (4))){
var inst_13267 = (state_13302[(10)]);
var state_13302__$1 = state_13302;
return cljs.core.async.ioc_alts_BANG_.call(null,state_13302__$1,(7),inst_13267);
} else {
if((state_val_13303 === (6))){
var inst_13298 = (state_13302[(2)]);
var state_13302__$1 = state_13302;
var statearr_13318_13364 = state_13302__$1;
(statearr_13318_13364[(2)] = inst_13298);

(statearr_13318_13364[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13303 === (3))){
var inst_13300 = (state_13302[(2)]);
var state_13302__$1 = state_13302;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13302__$1,inst_13300);
} else {
if((state_val_13303 === (2))){
var inst_13267 = (state_13302[(10)]);
var inst_13269 = cljs.core.count.call(null,inst_13267);
var inst_13270 = (inst_13269 > (0));
var state_13302__$1 = state_13302;
if(cljs.core.truth_(inst_13270)){
var statearr_13325_13386 = state_13302__$1;
(statearr_13325_13386[(1)] = (4));

} else {
var statearr_13326_13387 = state_13302__$1;
(statearr_13326_13387[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13303 === (11))){
var inst_13267 = (state_13302[(10)]);
var inst_13290 = (state_13302[(2)]);
var tmp13319 = inst_13267;
var inst_13267__$1 = tmp13319;
var state_13302__$1 = (function (){var statearr_13328 = state_13302;
(statearr_13328[(11)] = inst_13290);

(statearr_13328[(10)] = inst_13267__$1);

return statearr_13328;
})();
var statearr_13329_13388 = state_13302__$1;
(statearr_13329_13388[(2)] = null);

(statearr_13329_13388[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13303 === (9))){
var inst_13278 = (state_13302[(8)]);
var state_13302__$1 = state_13302;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13302__$1,(11),out,inst_13278);
} else {
if((state_val_13303 === (5))){
var inst_13296 = cljs.core.async.close_BANG_.call(null,out);
var state_13302__$1 = state_13302;
var statearr_13333_13396 = state_13302__$1;
(statearr_13333_13396[(2)] = inst_13296);

(statearr_13333_13396[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13303 === (10))){
var inst_13294 = (state_13302[(2)]);
var state_13302__$1 = state_13302;
var statearr_13335_13399 = state_13302__$1;
(statearr_13335_13399[(2)] = inst_13294);

(statearr_13335_13399[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13303 === (8))){
var inst_13267 = (state_13302[(10)]);
var inst_13277 = (state_13302[(7)]);
var inst_13278 = (state_13302[(8)]);
var inst_13279 = (state_13302[(9)]);
var inst_13283 = (function (){var cs = inst_13267;
var vec__13272 = inst_13277;
var v = inst_13278;
var c = inst_13279;
return (function (p1__13259_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__13259_SHARP_);
});
})();
var inst_13285 = cljs.core.filterv.call(null,inst_13283,inst_13267);
var inst_13267__$1 = inst_13285;
var state_13302__$1 = (function (){var statearr_13338 = state_13302;
(statearr_13338[(10)] = inst_13267__$1);

return statearr_13338;
})();
var statearr_13339_13401 = state_13302__$1;
(statearr_13339_13401[(2)] = null);

(statearr_13339_13401[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});
return (function() {
var cljs$core$async$state_machine__11191__auto__ = null;
var cljs$core$async$state_machine__11191__auto____0 = (function (){
var statearr_13342 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_13342[(0)] = cljs$core$async$state_machine__11191__auto__);

(statearr_13342[(1)] = (1));

return statearr_13342;
});
var cljs$core$async$state_machine__11191__auto____1 = (function (state_13302){
while(true){
var ret_value__11192__auto__ = (function (){try{while(true){
var result__11193__auto__ = switch__11190__auto__.call(null,state_13302);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11193__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11193__auto__;
}
break;
}
}catch (e13343){var ex__11194__auto__ = e13343;
var statearr_13344_13406 = state_13302;
(statearr_13344_13406[(2)] = ex__11194__auto__);


if(cljs.core.seq.call(null,(state_13302[(4)]))){
var statearr_13345_13409 = state_13302;
(statearr_13345_13409[(1)] = cljs.core.first.call(null,(state_13302[(4)])));

} else {
throw ex__11194__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11192__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13411 = state_13302;
state_13302 = G__13411;
continue;
} else {
return ret_value__11192__auto__;
}
break;
}
});
cljs$core$async$state_machine__11191__auto__ = function(state_13302){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__11191__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__11191__auto____1.call(this,state_13302);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__11191__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__11191__auto____0;
cljs$core$async$state_machine__11191__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__11191__auto____1;
return cljs$core$async$state_machine__11191__auto__;
})()
})();
var state__11373__auto__ = (function (){var statearr_13346 = f__11372__auto__.call(null);
(statearr_13346[(6)] = c__11371__auto___13354);

return statearr_13346;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11373__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__13356 = arguments.length;
switch (G__13356) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__11371__auto___13428 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__11372__auto__ = (function (){var switch__11190__auto__ = (function (state_13384){
var state_val_13385 = (state_13384[(1)]);
if((state_val_13385 === (7))){
var inst_13366 = (state_13384[(7)]);
var inst_13366__$1 = (state_13384[(2)]);
var inst_13367 = (inst_13366__$1 == null);
var inst_13368 = cljs.core.not.call(null,inst_13367);
var state_13384__$1 = (function (){var statearr_13389 = state_13384;
(statearr_13389[(7)] = inst_13366__$1);

return statearr_13389;
})();
if(inst_13368){
var statearr_13392_13429 = state_13384__$1;
(statearr_13392_13429[(1)] = (8));

} else {
var statearr_13394_13430 = state_13384__$1;
(statearr_13394_13430[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13385 === (1))){
var inst_13360 = (0);
var state_13384__$1 = (function (){var statearr_13397 = state_13384;
(statearr_13397[(8)] = inst_13360);

return statearr_13397;
})();
var statearr_13398_13431 = state_13384__$1;
(statearr_13398_13431[(2)] = null);

(statearr_13398_13431[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13385 === (4))){
var state_13384__$1 = state_13384;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13384__$1,(7),ch);
} else {
if((state_val_13385 === (6))){
var inst_13379 = (state_13384[(2)]);
var state_13384__$1 = state_13384;
var statearr_13400_13434 = state_13384__$1;
(statearr_13400_13434[(2)] = inst_13379);

(statearr_13400_13434[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13385 === (3))){
var inst_13381 = (state_13384[(2)]);
var inst_13382 = cljs.core.async.close_BANG_.call(null,out);
var state_13384__$1 = (function (){var statearr_13403 = state_13384;
(statearr_13403[(9)] = inst_13381);

return statearr_13403;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13384__$1,inst_13382);
} else {
if((state_val_13385 === (2))){
var inst_13360 = (state_13384[(8)]);
var inst_13362 = (inst_13360 < n);
var state_13384__$1 = state_13384;
if(cljs.core.truth_(inst_13362)){
var statearr_13404_13435 = state_13384__$1;
(statearr_13404_13435[(1)] = (4));

} else {
var statearr_13405_13436 = state_13384__$1;
(statearr_13405_13436[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13385 === (11))){
var inst_13360 = (state_13384[(8)]);
var inst_13371 = (state_13384[(2)]);
var inst_13372 = (inst_13360 + (1));
var inst_13360__$1 = inst_13372;
var state_13384__$1 = (function (){var statearr_13408 = state_13384;
(statearr_13408[(10)] = inst_13371);

(statearr_13408[(8)] = inst_13360__$1);

return statearr_13408;
})();
var statearr_13410_13438 = state_13384__$1;
(statearr_13410_13438[(2)] = null);

(statearr_13410_13438[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13385 === (9))){
var state_13384__$1 = state_13384;
var statearr_13412_13444 = state_13384__$1;
(statearr_13412_13444[(2)] = null);

(statearr_13412_13444[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13385 === (5))){
var state_13384__$1 = state_13384;
var statearr_13413_13446 = state_13384__$1;
(statearr_13413_13446[(2)] = null);

(statearr_13413_13446[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13385 === (10))){
var inst_13376 = (state_13384[(2)]);
var state_13384__$1 = state_13384;
var statearr_13414_13447 = state_13384__$1;
(statearr_13414_13447[(2)] = inst_13376);

(statearr_13414_13447[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13385 === (8))){
var inst_13366 = (state_13384[(7)]);
var state_13384__$1 = state_13384;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13384__$1,(11),out,inst_13366);
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
});
return (function() {
var cljs$core$async$state_machine__11191__auto__ = null;
var cljs$core$async$state_machine__11191__auto____0 = (function (){
var statearr_13416 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_13416[(0)] = cljs$core$async$state_machine__11191__auto__);

(statearr_13416[(1)] = (1));

return statearr_13416;
});
var cljs$core$async$state_machine__11191__auto____1 = (function (state_13384){
while(true){
var ret_value__11192__auto__ = (function (){try{while(true){
var result__11193__auto__ = switch__11190__auto__.call(null,state_13384);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11193__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11193__auto__;
}
break;
}
}catch (e13417){var ex__11194__auto__ = e13417;
var statearr_13418_13449 = state_13384;
(statearr_13418_13449[(2)] = ex__11194__auto__);


if(cljs.core.seq.call(null,(state_13384[(4)]))){
var statearr_13419_13450 = state_13384;
(statearr_13419_13450[(1)] = cljs.core.first.call(null,(state_13384[(4)])));

} else {
throw ex__11194__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11192__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13451 = state_13384;
state_13384 = G__13451;
continue;
} else {
return ret_value__11192__auto__;
}
break;
}
});
cljs$core$async$state_machine__11191__auto__ = function(state_13384){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__11191__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__11191__auto____1.call(this,state_13384);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__11191__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__11191__auto____0;
cljs$core$async$state_machine__11191__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__11191__auto____1;
return cljs$core$async$state_machine__11191__auto__;
})()
})();
var state__11373__auto__ = (function (){var statearr_13420 = f__11372__auto__.call(null);
(statearr_13420[(6)] = c__11371__auto___13428);

return statearr_13420;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11373__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async13422 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async13422 = (function (f,ch,meta13423){
this.f = f;
this.ch = ch;
this.meta13423 = meta13423;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async13422.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13424,meta13423__$1){
var self__ = this;
var _13424__$1 = this;
return (new cljs.core.async.t_cljs$core$async13422(self__.f,self__.ch,meta13423__$1));
}));

(cljs.core.async.t_cljs$core$async13422.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13424){
var self__ = this;
var _13424__$1 = this;
return self__.meta13423;
}));

(cljs.core.async.t_cljs$core$async13422.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async13422.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async13422.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async13422.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async13422.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async13440 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async13440 = (function (f,ch,meta13423,_,fn1,meta13441){
this.f = f;
this.ch = ch;
this.meta13423 = meta13423;
this._ = _;
this.fn1 = fn1;
this.meta13441 = meta13441;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async13440.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13442,meta13441__$1){
var self__ = this;
var _13442__$1 = this;
return (new cljs.core.async.t_cljs$core$async13440(self__.f,self__.ch,self__.meta13423,self__._,self__.fn1,meta13441__$1));
}));

(cljs.core.async.t_cljs$core$async13440.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13442){
var self__ = this;
var _13442__$1 = this;
return self__.meta13441;
}));

(cljs.core.async.t_cljs$core$async13440.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async13440.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
}));

(cljs.core.async.t_cljs$core$async13440.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async13440.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return (function (p1__13421_SHARP_){
return f1.call(null,(((p1__13421_SHARP_ == null))?null:self__.f.call(null,p1__13421_SHARP_)));
});
}));

(cljs.core.async.t_cljs$core$async13440.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta13423","meta13423",-2087751299,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async13422","cljs.core.async/t_cljs$core$async13422",-1966857738,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta13441","meta13441",1069154497,null)], null);
}));

(cljs.core.async.t_cljs$core$async13440.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async13440.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async13440");

(cljs.core.async.t_cljs$core$async13440.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write.call(null,writer__5288__auto__,"cljs.core.async/t_cljs$core$async13440");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async13440.
 */
cljs.core.async.__GT_t_cljs$core$async13440 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async13440(f__$1,ch__$1,meta13423__$1,___$2,fn1__$1,meta13441){
return (new cljs.core.async.t_cljs$core$async13440(f__$1,ch__$1,meta13423__$1,___$2,fn1__$1,meta13441));
});

}

return (new cljs.core.async.t_cljs$core$async13440(self__.f,self__.ch,self__.meta13423,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__5000__auto__ = ret;
if(cljs.core.truth_(and__5000__auto__)){
return (!((cljs.core.deref.call(null,ret) == null)));
} else {
return and__5000__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async13422.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async13422.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async13422.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta13423","meta13423",-2087751299,null)], null);
}));

(cljs.core.async.t_cljs$core$async13422.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async13422.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async13422");

(cljs.core.async.t_cljs$core$async13422.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write.call(null,writer__5288__auto__,"cljs.core.async/t_cljs$core$async13422");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async13422.
 */
cljs.core.async.__GT_t_cljs$core$async13422 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async13422(f__$1,ch__$1,meta13423){
return (new cljs.core.async.t_cljs$core$async13422(f__$1,ch__$1,meta13423));
});

}

return (new cljs.core.async.t_cljs$core$async13422(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async13456 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async13456 = (function (f,ch,meta13457){
this.f = f;
this.ch = ch;
this.meta13457 = meta13457;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async13456.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13458,meta13457__$1){
var self__ = this;
var _13458__$1 = this;
return (new cljs.core.async.t_cljs$core$async13456(self__.f,self__.ch,meta13457__$1));
}));

(cljs.core.async.t_cljs$core$async13456.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13458){
var self__ = this;
var _13458__$1 = this;
return self__.meta13457;
}));

(cljs.core.async.t_cljs$core$async13456.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async13456.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async13456.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async13456.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async13456.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async13456.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
}));

(cljs.core.async.t_cljs$core$async13456.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta13457","meta13457",786393284,null)], null);
}));

(cljs.core.async.t_cljs$core$async13456.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async13456.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async13456");

(cljs.core.async.t_cljs$core$async13456.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write.call(null,writer__5288__auto__,"cljs.core.async/t_cljs$core$async13456");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async13456.
 */
cljs.core.async.__GT_t_cljs$core$async13456 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async13456(f__$1,ch__$1,meta13457){
return (new cljs.core.async.t_cljs$core$async13456(f__$1,ch__$1,meta13457));
});

}

return (new cljs.core.async.t_cljs$core$async13456(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async13461 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async13461 = (function (p,ch,meta13462){
this.p = p;
this.ch = ch;
this.meta13462 = meta13462;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async13461.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13463,meta13462__$1){
var self__ = this;
var _13463__$1 = this;
return (new cljs.core.async.t_cljs$core$async13461(self__.p,self__.ch,meta13462__$1));
}));

(cljs.core.async.t_cljs$core$async13461.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13463){
var self__ = this;
var _13463__$1 = this;
return self__.meta13462;
}));

(cljs.core.async.t_cljs$core$async13461.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async13461.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async13461.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async13461.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async13461.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async13461.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async13461.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async13461.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta13462","meta13462",1317925684,null)], null);
}));

(cljs.core.async.t_cljs$core$async13461.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async13461.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async13461");

(cljs.core.async.t_cljs$core$async13461.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write.call(null,writer__5288__auto__,"cljs.core.async/t_cljs$core$async13461");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async13461.
 */
cljs.core.async.__GT_t_cljs$core$async13461 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async13461(p__$1,ch__$1,meta13462){
return (new cljs.core.async.t_cljs$core$async13461(p__$1,ch__$1,meta13462));
});

}

return (new cljs.core.async.t_cljs$core$async13461(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__13469 = arguments.length;
switch (G__13469) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__11371__auto___13512 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__11372__auto__ = (function (){var switch__11190__auto__ = (function (state_13490){
var state_val_13491 = (state_13490[(1)]);
if((state_val_13491 === (7))){
var inst_13486 = (state_13490[(2)]);
var state_13490__$1 = state_13490;
var statearr_13492_13513 = state_13490__$1;
(statearr_13492_13513[(2)] = inst_13486);

(statearr_13492_13513[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13491 === (1))){
var state_13490__$1 = state_13490;
var statearr_13493_13514 = state_13490__$1;
(statearr_13493_13514[(2)] = null);

(statearr_13493_13514[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13491 === (4))){
var inst_13472 = (state_13490[(7)]);
var inst_13472__$1 = (state_13490[(2)]);
var inst_13473 = (inst_13472__$1 == null);
var state_13490__$1 = (function (){var statearr_13494 = state_13490;
(statearr_13494[(7)] = inst_13472__$1);

return statearr_13494;
})();
if(cljs.core.truth_(inst_13473)){
var statearr_13495_13515 = state_13490__$1;
(statearr_13495_13515[(1)] = (5));

} else {
var statearr_13496_13516 = state_13490__$1;
(statearr_13496_13516[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13491 === (6))){
var inst_13472 = (state_13490[(7)]);
var inst_13477 = p.call(null,inst_13472);
var state_13490__$1 = state_13490;
if(cljs.core.truth_(inst_13477)){
var statearr_13497_13517 = state_13490__$1;
(statearr_13497_13517[(1)] = (8));

} else {
var statearr_13498_13518 = state_13490__$1;
(statearr_13498_13518[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13491 === (3))){
var inst_13488 = (state_13490[(2)]);
var state_13490__$1 = state_13490;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13490__$1,inst_13488);
} else {
if((state_val_13491 === (2))){
var state_13490__$1 = state_13490;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13490__$1,(4),ch);
} else {
if((state_val_13491 === (11))){
var inst_13480 = (state_13490[(2)]);
var state_13490__$1 = state_13490;
var statearr_13499_13519 = state_13490__$1;
(statearr_13499_13519[(2)] = inst_13480);

(statearr_13499_13519[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13491 === (9))){
var state_13490__$1 = state_13490;
var statearr_13500_13523 = state_13490__$1;
(statearr_13500_13523[(2)] = null);

(statearr_13500_13523[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13491 === (5))){
var inst_13475 = cljs.core.async.close_BANG_.call(null,out);
var state_13490__$1 = state_13490;
var statearr_13501_13532 = state_13490__$1;
(statearr_13501_13532[(2)] = inst_13475);

(statearr_13501_13532[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13491 === (10))){
var inst_13483 = (state_13490[(2)]);
var state_13490__$1 = (function (){var statearr_13502 = state_13490;
(statearr_13502[(8)] = inst_13483);

return statearr_13502;
})();
var statearr_13503_13542 = state_13490__$1;
(statearr_13503_13542[(2)] = null);

(statearr_13503_13542[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13491 === (8))){
var inst_13472 = (state_13490[(7)]);
var state_13490__$1 = state_13490;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13490__$1,(11),out,inst_13472);
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
});
return (function() {
var cljs$core$async$state_machine__11191__auto__ = null;
var cljs$core$async$state_machine__11191__auto____0 = (function (){
var statearr_13504 = [null,null,null,null,null,null,null,null,null];
(statearr_13504[(0)] = cljs$core$async$state_machine__11191__auto__);

(statearr_13504[(1)] = (1));

return statearr_13504;
});
var cljs$core$async$state_machine__11191__auto____1 = (function (state_13490){
while(true){
var ret_value__11192__auto__ = (function (){try{while(true){
var result__11193__auto__ = switch__11190__auto__.call(null,state_13490);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11193__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11193__auto__;
}
break;
}
}catch (e13505){var ex__11194__auto__ = e13505;
var statearr_13506_13565 = state_13490;
(statearr_13506_13565[(2)] = ex__11194__auto__);


if(cljs.core.seq.call(null,(state_13490[(4)]))){
var statearr_13507_13574 = state_13490;
(statearr_13507_13574[(1)] = cljs.core.first.call(null,(state_13490[(4)])));

} else {
throw ex__11194__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11192__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13586 = state_13490;
state_13490 = G__13586;
continue;
} else {
return ret_value__11192__auto__;
}
break;
}
});
cljs$core$async$state_machine__11191__auto__ = function(state_13490){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__11191__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__11191__auto____1.call(this,state_13490);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__11191__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__11191__auto____0;
cljs$core$async$state_machine__11191__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__11191__auto____1;
return cljs$core$async$state_machine__11191__auto__;
})()
})();
var state__11373__auto__ = (function (){var statearr_13508 = f__11372__auto__.call(null);
(statearr_13508[(6)] = c__11371__auto___13512);

return statearr_13508;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11373__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__13511 = arguments.length;
switch (G__13511) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__11371__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__11372__auto__ = (function (){var switch__11190__auto__ = (function (state_13587){
var state_val_13588 = (state_13587[(1)]);
if((state_val_13588 === (7))){
var inst_13582 = (state_13587[(2)]);
var state_13587__$1 = state_13587;
var statearr_13590_13631 = state_13587__$1;
(statearr_13590_13631[(2)] = inst_13582);

(statearr_13590_13631[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13588 === (20))){
var inst_13550 = (state_13587[(7)]);
var inst_13561 = (state_13587[(2)]);
var inst_13562 = cljs.core.next.call(null,inst_13550);
var inst_13535 = inst_13562;
var inst_13536 = null;
var inst_13537 = (0);
var inst_13538 = (0);
var state_13587__$1 = (function (){var statearr_13591 = state_13587;
(statearr_13591[(8)] = inst_13561);

(statearr_13591[(9)] = inst_13535);

(statearr_13591[(10)] = inst_13536);

(statearr_13591[(11)] = inst_13537);

(statearr_13591[(12)] = inst_13538);

return statearr_13591;
})();
var statearr_13592_13632 = state_13587__$1;
(statearr_13592_13632[(2)] = null);

(statearr_13592_13632[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13588 === (1))){
var state_13587__$1 = state_13587;
var statearr_13593_13633 = state_13587__$1;
(statearr_13593_13633[(2)] = null);

(statearr_13593_13633[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13588 === (4))){
var inst_13522 = (state_13587[(13)]);
var inst_13522__$1 = (state_13587[(2)]);
var inst_13524 = (inst_13522__$1 == null);
var state_13587__$1 = (function (){var statearr_13594 = state_13587;
(statearr_13594[(13)] = inst_13522__$1);

return statearr_13594;
})();
if(cljs.core.truth_(inst_13524)){
var statearr_13595_13634 = state_13587__$1;
(statearr_13595_13634[(1)] = (5));

} else {
var statearr_13596_13635 = state_13587__$1;
(statearr_13596_13635[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13588 === (15))){
var state_13587__$1 = state_13587;
var statearr_13600_13637 = state_13587__$1;
(statearr_13600_13637[(2)] = null);

(statearr_13600_13637[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13588 === (21))){
var state_13587__$1 = state_13587;
var statearr_13601_13639 = state_13587__$1;
(statearr_13601_13639[(2)] = null);

(statearr_13601_13639[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13588 === (13))){
var inst_13538 = (state_13587[(12)]);
var inst_13535 = (state_13587[(9)]);
var inst_13536 = (state_13587[(10)]);
var inst_13537 = (state_13587[(11)]);
var inst_13546 = (state_13587[(2)]);
var inst_13547 = (inst_13538 + (1));
var tmp13597 = inst_13535;
var tmp13598 = inst_13537;
var tmp13599 = inst_13536;
var inst_13535__$1 = tmp13597;
var inst_13536__$1 = tmp13599;
var inst_13537__$1 = tmp13598;
var inst_13538__$1 = inst_13547;
var state_13587__$1 = (function (){var statearr_13602 = state_13587;
(statearr_13602[(14)] = inst_13546);

(statearr_13602[(9)] = inst_13535__$1);

(statearr_13602[(10)] = inst_13536__$1);

(statearr_13602[(11)] = inst_13537__$1);

(statearr_13602[(12)] = inst_13538__$1);

return statearr_13602;
})();
var statearr_13603_13640 = state_13587__$1;
(statearr_13603_13640[(2)] = null);

(statearr_13603_13640[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13588 === (22))){
var state_13587__$1 = state_13587;
var statearr_13604_13641 = state_13587__$1;
(statearr_13604_13641[(2)] = null);

(statearr_13604_13641[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13588 === (6))){
var inst_13522 = (state_13587[(13)]);
var inst_13533 = f.call(null,inst_13522);
var inst_13534 = cljs.core.seq.call(null,inst_13533);
var inst_13535 = inst_13534;
var inst_13536 = null;
var inst_13537 = (0);
var inst_13538 = (0);
var state_13587__$1 = (function (){var statearr_13605 = state_13587;
(statearr_13605[(9)] = inst_13535);

(statearr_13605[(10)] = inst_13536);

(statearr_13605[(11)] = inst_13537);

(statearr_13605[(12)] = inst_13538);

return statearr_13605;
})();
var statearr_13606_13643 = state_13587__$1;
(statearr_13606_13643[(2)] = null);

(statearr_13606_13643[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13588 === (17))){
var inst_13550 = (state_13587[(7)]);
var inst_13554 = cljs.core.chunk_first.call(null,inst_13550);
var inst_13555 = cljs.core.chunk_rest.call(null,inst_13550);
var inst_13556 = cljs.core.count.call(null,inst_13554);
var inst_13535 = inst_13555;
var inst_13536 = inst_13554;
var inst_13537 = inst_13556;
var inst_13538 = (0);
var state_13587__$1 = (function (){var statearr_13607 = state_13587;
(statearr_13607[(9)] = inst_13535);

(statearr_13607[(10)] = inst_13536);

(statearr_13607[(11)] = inst_13537);

(statearr_13607[(12)] = inst_13538);

return statearr_13607;
})();
var statearr_13608_13645 = state_13587__$1;
(statearr_13608_13645[(2)] = null);

(statearr_13608_13645[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13588 === (3))){
var inst_13584 = (state_13587[(2)]);
var state_13587__$1 = state_13587;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13587__$1,inst_13584);
} else {
if((state_val_13588 === (12))){
var inst_13571 = (state_13587[(2)]);
var state_13587__$1 = state_13587;
var statearr_13609_13646 = state_13587__$1;
(statearr_13609_13646[(2)] = inst_13571);

(statearr_13609_13646[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13588 === (2))){
var state_13587__$1 = state_13587;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13587__$1,(4),in$);
} else {
if((state_val_13588 === (23))){
var inst_13580 = (state_13587[(2)]);
var state_13587__$1 = state_13587;
var statearr_13610_13648 = state_13587__$1;
(statearr_13610_13648[(2)] = inst_13580);

(statearr_13610_13648[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13588 === (19))){
var inst_13566 = (state_13587[(2)]);
var state_13587__$1 = state_13587;
var statearr_13611_13652 = state_13587__$1;
(statearr_13611_13652[(2)] = inst_13566);

(statearr_13611_13652[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13588 === (11))){
var inst_13535 = (state_13587[(9)]);
var inst_13550 = (state_13587[(7)]);
var inst_13550__$1 = cljs.core.seq.call(null,inst_13535);
var state_13587__$1 = (function (){var statearr_13612 = state_13587;
(statearr_13612[(7)] = inst_13550__$1);

return statearr_13612;
})();
if(inst_13550__$1){
var statearr_13613_13672 = state_13587__$1;
(statearr_13613_13672[(1)] = (14));

} else {
var statearr_13614_13675 = state_13587__$1;
(statearr_13614_13675[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13588 === (9))){
var inst_13573 = (state_13587[(2)]);
var inst_13575 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_13587__$1 = (function (){var statearr_13615 = state_13587;
(statearr_13615[(15)] = inst_13573);

return statearr_13615;
})();
if(cljs.core.truth_(inst_13575)){
var statearr_13616_13676 = state_13587__$1;
(statearr_13616_13676[(1)] = (21));

} else {
var statearr_13617_13677 = state_13587__$1;
(statearr_13617_13677[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13588 === (5))){
var inst_13526 = cljs.core.async.close_BANG_.call(null,out);
var state_13587__$1 = state_13587;
var statearr_13618_13679 = state_13587__$1;
(statearr_13618_13679[(2)] = inst_13526);

(statearr_13618_13679[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13588 === (14))){
var inst_13550 = (state_13587[(7)]);
var inst_13552 = cljs.core.chunked_seq_QMARK_.call(null,inst_13550);
var state_13587__$1 = state_13587;
if(inst_13552){
var statearr_13619_13682 = state_13587__$1;
(statearr_13619_13682[(1)] = (17));

} else {
var statearr_13620_13683 = state_13587__$1;
(statearr_13620_13683[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13588 === (16))){
var inst_13569 = (state_13587[(2)]);
var state_13587__$1 = state_13587;
var statearr_13621_13684 = state_13587__$1;
(statearr_13621_13684[(2)] = inst_13569);

(statearr_13621_13684[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13588 === (10))){
var inst_13536 = (state_13587[(10)]);
var inst_13538 = (state_13587[(12)]);
var inst_13544 = cljs.core._nth.call(null,inst_13536,inst_13538);
var state_13587__$1 = state_13587;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13587__$1,(13),out,inst_13544);
} else {
if((state_val_13588 === (18))){
var inst_13550 = (state_13587[(7)]);
var inst_13559 = cljs.core.first.call(null,inst_13550);
var state_13587__$1 = state_13587;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13587__$1,(20),out,inst_13559);
} else {
if((state_val_13588 === (8))){
var inst_13538 = (state_13587[(12)]);
var inst_13537 = (state_13587[(11)]);
var inst_13540 = (inst_13538 < inst_13537);
var inst_13541 = inst_13540;
var state_13587__$1 = state_13587;
if(cljs.core.truth_(inst_13541)){
var statearr_13622_13689 = state_13587__$1;
(statearr_13622_13689[(1)] = (10));

} else {
var statearr_13623_13690 = state_13587__$1;
(statearr_13623_13690[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__11191__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__11191__auto____0 = (function (){
var statearr_13624 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_13624[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__11191__auto__);

(statearr_13624[(1)] = (1));

return statearr_13624;
});
var cljs$core$async$mapcat_STAR__$_state_machine__11191__auto____1 = (function (state_13587){
while(true){
var ret_value__11192__auto__ = (function (){try{while(true){
var result__11193__auto__ = switch__11190__auto__.call(null,state_13587);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11193__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11193__auto__;
}
break;
}
}catch (e13625){var ex__11194__auto__ = e13625;
var statearr_13626_13693 = state_13587;
(statearr_13626_13693[(2)] = ex__11194__auto__);


if(cljs.core.seq.call(null,(state_13587[(4)]))){
var statearr_13627_13695 = state_13587;
(statearr_13627_13695[(1)] = cljs.core.first.call(null,(state_13587[(4)])));

} else {
throw ex__11194__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11192__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13696 = state_13587;
state_13587 = G__13696;
continue;
} else {
return ret_value__11192__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__11191__auto__ = function(state_13587){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__11191__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__11191__auto____1.call(this,state_13587);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__11191__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__11191__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__11191__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__11191__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__11191__auto__;
})()
})();
var state__11373__auto__ = (function (){var statearr_13628 = f__11372__auto__.call(null);
(statearr_13628[(6)] = c__11371__auto__);

return statearr_13628;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11373__auto__);
}));

return c__11371__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__13630 = arguments.length;
switch (G__13630) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__13638 = arguments.length;
switch (G__13638) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__13644 = arguments.length;
switch (G__13644) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__11371__auto___13713 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__11372__auto__ = (function (){var switch__11190__auto__ = (function (state_13673){
var state_val_13674 = (state_13673[(1)]);
if((state_val_13674 === (7))){
var inst_13667 = (state_13673[(2)]);
var state_13673__$1 = state_13673;
var statearr_13678_13714 = state_13673__$1;
(statearr_13678_13714[(2)] = inst_13667);

(statearr_13678_13714[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13674 === (1))){
var inst_13647 = null;
var state_13673__$1 = (function (){var statearr_13680 = state_13673;
(statearr_13680[(7)] = inst_13647);

return statearr_13680;
})();
var statearr_13681_13715 = state_13673__$1;
(statearr_13681_13715[(2)] = null);

(statearr_13681_13715[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13674 === (4))){
var inst_13651 = (state_13673[(8)]);
var inst_13651__$1 = (state_13673[(2)]);
var inst_13653 = (inst_13651__$1 == null);
var inst_13654 = cljs.core.not.call(null,inst_13653);
var state_13673__$1 = (function (){var statearr_13685 = state_13673;
(statearr_13685[(8)] = inst_13651__$1);

return statearr_13685;
})();
if(inst_13654){
var statearr_13686_13716 = state_13673__$1;
(statearr_13686_13716[(1)] = (5));

} else {
var statearr_13687_13720 = state_13673__$1;
(statearr_13687_13720[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13674 === (6))){
var state_13673__$1 = state_13673;
var statearr_13688_13724 = state_13673__$1;
(statearr_13688_13724[(2)] = null);

(statearr_13688_13724[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13674 === (3))){
var inst_13669 = (state_13673[(2)]);
var inst_13670 = cljs.core.async.close_BANG_.call(null,out);
var state_13673__$1 = (function (){var statearr_13691 = state_13673;
(statearr_13691[(9)] = inst_13669);

return statearr_13691;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13673__$1,inst_13670);
} else {
if((state_val_13674 === (2))){
var state_13673__$1 = state_13673;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13673__$1,(4),ch);
} else {
if((state_val_13674 === (11))){
var inst_13651 = (state_13673[(8)]);
var inst_13661 = (state_13673[(2)]);
var inst_13647 = inst_13651;
var state_13673__$1 = (function (){var statearr_13692 = state_13673;
(statearr_13692[(10)] = inst_13661);

(statearr_13692[(7)] = inst_13647);

return statearr_13692;
})();
var statearr_13694_13750 = state_13673__$1;
(statearr_13694_13750[(2)] = null);

(statearr_13694_13750[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13674 === (9))){
var inst_13651 = (state_13673[(8)]);
var state_13673__$1 = state_13673;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13673__$1,(11),out,inst_13651);
} else {
if((state_val_13674 === (5))){
var inst_13651 = (state_13673[(8)]);
var inst_13647 = (state_13673[(7)]);
var inst_13656 = cljs.core._EQ_.call(null,inst_13651,inst_13647);
var state_13673__$1 = state_13673;
if(inst_13656){
var statearr_13698_13759 = state_13673__$1;
(statearr_13698_13759[(1)] = (8));

} else {
var statearr_13700_13760 = state_13673__$1;
(statearr_13700_13760[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13674 === (10))){
var inst_13664 = (state_13673[(2)]);
var state_13673__$1 = state_13673;
var statearr_13701_13761 = state_13673__$1;
(statearr_13701_13761[(2)] = inst_13664);

(statearr_13701_13761[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13674 === (8))){
var inst_13647 = (state_13673[(7)]);
var tmp13697 = inst_13647;
var inst_13647__$1 = tmp13697;
var state_13673__$1 = (function (){var statearr_13702 = state_13673;
(statearr_13702[(7)] = inst_13647__$1);

return statearr_13702;
})();
var statearr_13703_13764 = state_13673__$1;
(statearr_13703_13764[(2)] = null);

(statearr_13703_13764[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});
return (function() {
var cljs$core$async$state_machine__11191__auto__ = null;
var cljs$core$async$state_machine__11191__auto____0 = (function (){
var statearr_13705 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_13705[(0)] = cljs$core$async$state_machine__11191__auto__);

(statearr_13705[(1)] = (1));

return statearr_13705;
});
var cljs$core$async$state_machine__11191__auto____1 = (function (state_13673){
while(true){
var ret_value__11192__auto__ = (function (){try{while(true){
var result__11193__auto__ = switch__11190__auto__.call(null,state_13673);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11193__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11193__auto__;
}
break;
}
}catch (e13706){var ex__11194__auto__ = e13706;
var statearr_13707_13768 = state_13673;
(statearr_13707_13768[(2)] = ex__11194__auto__);


if(cljs.core.seq.call(null,(state_13673[(4)]))){
var statearr_13708_13770 = state_13673;
(statearr_13708_13770[(1)] = cljs.core.first.call(null,(state_13673[(4)])));

} else {
throw ex__11194__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11192__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13772 = state_13673;
state_13673 = G__13772;
continue;
} else {
return ret_value__11192__auto__;
}
break;
}
});
cljs$core$async$state_machine__11191__auto__ = function(state_13673){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__11191__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__11191__auto____1.call(this,state_13673);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__11191__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__11191__auto____0;
cljs$core$async$state_machine__11191__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__11191__auto____1;
return cljs$core$async$state_machine__11191__auto__;
})()
})();
var state__11373__auto__ = (function (){var statearr_13709 = f__11372__auto__.call(null);
(statearr_13709[(6)] = c__11371__auto___13713);

return statearr_13709;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11373__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__13712 = arguments.length;
switch (G__13712) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__11371__auto___13795 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__11372__auto__ = (function (){var switch__11190__auto__ = (function (state_13757){
var state_val_13758 = (state_13757[(1)]);
if((state_val_13758 === (7))){
var inst_13753 = (state_13757[(2)]);
var state_13757__$1 = state_13757;
var statearr_13762_13796 = state_13757__$1;
(statearr_13762_13796[(2)] = inst_13753);

(statearr_13762_13796[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13758 === (1))){
var inst_13717 = (new Array(n));
var inst_13718 = inst_13717;
var inst_13719 = (0);
var state_13757__$1 = (function (){var statearr_13763 = state_13757;
(statearr_13763[(7)] = inst_13718);

(statearr_13763[(8)] = inst_13719);

return statearr_13763;
})();
var statearr_13765_13797 = state_13757__$1;
(statearr_13765_13797[(2)] = null);

(statearr_13765_13797[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13758 === (4))){
var inst_13723 = (state_13757[(9)]);
var inst_13723__$1 = (state_13757[(2)]);
var inst_13725 = (inst_13723__$1 == null);
var inst_13726 = cljs.core.not.call(null,inst_13725);
var state_13757__$1 = (function (){var statearr_13766 = state_13757;
(statearr_13766[(9)] = inst_13723__$1);

return statearr_13766;
})();
if(inst_13726){
var statearr_13767_13808 = state_13757__$1;
(statearr_13767_13808[(1)] = (5));

} else {
var statearr_13769_13809 = state_13757__$1;
(statearr_13769_13809[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13758 === (15))){
var inst_13746 = (state_13757[(2)]);
var state_13757__$1 = state_13757;
var statearr_13771_13817 = state_13757__$1;
(statearr_13771_13817[(2)] = inst_13746);

(statearr_13771_13817[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13758 === (13))){
var state_13757__$1 = state_13757;
var statearr_13773_13826 = state_13757__$1;
(statearr_13773_13826[(2)] = null);

(statearr_13773_13826[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13758 === (6))){
var inst_13719 = (state_13757[(8)]);
var inst_13742 = (inst_13719 > (0));
var state_13757__$1 = state_13757;
if(cljs.core.truth_(inst_13742)){
var statearr_13774_13840 = state_13757__$1;
(statearr_13774_13840[(1)] = (12));

} else {
var statearr_13775_13847 = state_13757__$1;
(statearr_13775_13847[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13758 === (3))){
var inst_13755 = (state_13757[(2)]);
var state_13757__$1 = state_13757;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13757__$1,inst_13755);
} else {
if((state_val_13758 === (12))){
var inst_13718 = (state_13757[(7)]);
var inst_13744 = cljs.core.vec.call(null,inst_13718);
var state_13757__$1 = state_13757;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13757__$1,(15),out,inst_13744);
} else {
if((state_val_13758 === (2))){
var state_13757__$1 = state_13757;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13757__$1,(4),ch);
} else {
if((state_val_13758 === (11))){
var inst_13736 = (state_13757[(2)]);
var inst_13737 = (new Array(n));
var inst_13718 = inst_13737;
var inst_13719 = (0);
var state_13757__$1 = (function (){var statearr_13776 = state_13757;
(statearr_13776[(10)] = inst_13736);

(statearr_13776[(7)] = inst_13718);

(statearr_13776[(8)] = inst_13719);

return statearr_13776;
})();
var statearr_13777_13851 = state_13757__$1;
(statearr_13777_13851[(2)] = null);

(statearr_13777_13851[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13758 === (9))){
var inst_13718 = (state_13757[(7)]);
var inst_13734 = cljs.core.vec.call(null,inst_13718);
var state_13757__$1 = state_13757;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13757__$1,(11),out,inst_13734);
} else {
if((state_val_13758 === (5))){
var inst_13718 = (state_13757[(7)]);
var inst_13719 = (state_13757[(8)]);
var inst_13723 = (state_13757[(9)]);
var inst_13729 = (state_13757[(11)]);
var inst_13728 = (inst_13718[inst_13719] = inst_13723);
var inst_13729__$1 = (inst_13719 + (1));
var inst_13730 = (inst_13729__$1 < n);
var state_13757__$1 = (function (){var statearr_13778 = state_13757;
(statearr_13778[(12)] = inst_13728);

(statearr_13778[(11)] = inst_13729__$1);

return statearr_13778;
})();
if(cljs.core.truth_(inst_13730)){
var statearr_13779_13855 = state_13757__$1;
(statearr_13779_13855[(1)] = (8));

} else {
var statearr_13780_13856 = state_13757__$1;
(statearr_13780_13856[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13758 === (14))){
var inst_13749 = (state_13757[(2)]);
var inst_13751 = cljs.core.async.close_BANG_.call(null,out);
var state_13757__$1 = (function (){var statearr_13782 = state_13757;
(statearr_13782[(13)] = inst_13749);

return statearr_13782;
})();
var statearr_13783_13859 = state_13757__$1;
(statearr_13783_13859[(2)] = inst_13751);

(statearr_13783_13859[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13758 === (10))){
var inst_13740 = (state_13757[(2)]);
var state_13757__$1 = state_13757;
var statearr_13784_13860 = state_13757__$1;
(statearr_13784_13860[(2)] = inst_13740);

(statearr_13784_13860[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13758 === (8))){
var inst_13718 = (state_13757[(7)]);
var inst_13729 = (state_13757[(11)]);
var tmp13781 = inst_13718;
var inst_13718__$1 = tmp13781;
var inst_13719 = inst_13729;
var state_13757__$1 = (function (){var statearr_13785 = state_13757;
(statearr_13785[(7)] = inst_13718__$1);

(statearr_13785[(8)] = inst_13719);

return statearr_13785;
})();
var statearr_13786_13862 = state_13757__$1;
(statearr_13786_13862[(2)] = null);

(statearr_13786_13862[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});
return (function() {
var cljs$core$async$state_machine__11191__auto__ = null;
var cljs$core$async$state_machine__11191__auto____0 = (function (){
var statearr_13787 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_13787[(0)] = cljs$core$async$state_machine__11191__auto__);

(statearr_13787[(1)] = (1));

return statearr_13787;
});
var cljs$core$async$state_machine__11191__auto____1 = (function (state_13757){
while(true){
var ret_value__11192__auto__ = (function (){try{while(true){
var result__11193__auto__ = switch__11190__auto__.call(null,state_13757);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11193__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11193__auto__;
}
break;
}
}catch (e13788){var ex__11194__auto__ = e13788;
var statearr_13789_13867 = state_13757;
(statearr_13789_13867[(2)] = ex__11194__auto__);


if(cljs.core.seq.call(null,(state_13757[(4)]))){
var statearr_13790_13868 = state_13757;
(statearr_13790_13868[(1)] = cljs.core.first.call(null,(state_13757[(4)])));

} else {
throw ex__11194__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11192__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13869 = state_13757;
state_13757 = G__13869;
continue;
} else {
return ret_value__11192__auto__;
}
break;
}
});
cljs$core$async$state_machine__11191__auto__ = function(state_13757){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__11191__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__11191__auto____1.call(this,state_13757);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__11191__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__11191__auto____0;
cljs$core$async$state_machine__11191__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__11191__auto____1;
return cljs$core$async$state_machine__11191__auto__;
})()
})();
var state__11373__auto__ = (function (){var statearr_13791 = f__11372__auto__.call(null);
(statearr_13791[(6)] = c__11371__auto___13795);

return statearr_13791;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11373__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__13794 = arguments.length;
switch (G__13794) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__11371__auto___13890 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__11372__auto__ = (function (){var switch__11190__auto__ = (function (state_13848){
var state_val_13849 = (state_13848[(1)]);
if((state_val_13849 === (7))){
var inst_13843 = (state_13848[(2)]);
var state_13848__$1 = state_13848;
var statearr_13850_13891 = state_13848__$1;
(statearr_13850_13891[(2)] = inst_13843);

(statearr_13850_13891[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13849 === (1))){
var inst_13798 = [];
var inst_13799 = inst_13798;
var inst_13800 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_13848__$1 = (function (){var statearr_13852 = state_13848;
(statearr_13852[(7)] = inst_13799);

(statearr_13852[(8)] = inst_13800);

return statearr_13852;
})();
var statearr_13853_13892 = state_13848__$1;
(statearr_13853_13892[(2)] = null);

(statearr_13853_13892[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13849 === (4))){
var inst_13803 = (state_13848[(9)]);
var inst_13803__$1 = (state_13848[(2)]);
var inst_13804 = (inst_13803__$1 == null);
var inst_13805 = cljs.core.not.call(null,inst_13804);
var state_13848__$1 = (function (){var statearr_13854 = state_13848;
(statearr_13854[(9)] = inst_13803__$1);

return statearr_13854;
})();
if(inst_13805){
var statearr_13857_13893 = state_13848__$1;
(statearr_13857_13893[(1)] = (5));

} else {
var statearr_13858_13894 = state_13848__$1;
(statearr_13858_13894[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13849 === (15))){
var inst_13799 = (state_13848[(7)]);
var inst_13834 = cljs.core.vec.call(null,inst_13799);
var state_13848__$1 = state_13848;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13848__$1,(18),out,inst_13834);
} else {
if((state_val_13849 === (13))){
var inst_13829 = (state_13848[(2)]);
var state_13848__$1 = state_13848;
var statearr_13861_13895 = state_13848__$1;
(statearr_13861_13895[(2)] = inst_13829);

(statearr_13861_13895[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13849 === (6))){
var inst_13799 = (state_13848[(7)]);
var inst_13831 = inst_13799.length;
var inst_13832 = (inst_13831 > (0));
var state_13848__$1 = state_13848;
if(cljs.core.truth_(inst_13832)){
var statearr_13863_13896 = state_13848__$1;
(statearr_13863_13896[(1)] = (15));

} else {
var statearr_13864_13897 = state_13848__$1;
(statearr_13864_13897[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13849 === (17))){
var inst_13839 = (state_13848[(2)]);
var inst_13841 = cljs.core.async.close_BANG_.call(null,out);
var state_13848__$1 = (function (){var statearr_13865 = state_13848;
(statearr_13865[(10)] = inst_13839);

return statearr_13865;
})();
var statearr_13866_13898 = state_13848__$1;
(statearr_13866_13898[(2)] = inst_13841);

(statearr_13866_13898[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13849 === (3))){
var inst_13845 = (state_13848[(2)]);
var state_13848__$1 = state_13848;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13848__$1,inst_13845);
} else {
if((state_val_13849 === (12))){
var inst_13799 = (state_13848[(7)]);
var inst_13821 = cljs.core.vec.call(null,inst_13799);
var state_13848__$1 = state_13848;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13848__$1,(14),out,inst_13821);
} else {
if((state_val_13849 === (2))){
var state_13848__$1 = state_13848;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13848__$1,(4),ch);
} else {
if((state_val_13849 === (11))){
var inst_13799 = (state_13848[(7)]);
var inst_13803 = (state_13848[(9)]);
var inst_13807 = (state_13848[(11)]);
var inst_13818 = inst_13799.push(inst_13803);
var tmp13870 = inst_13799;
var inst_13799__$1 = tmp13870;
var inst_13800 = inst_13807;
var state_13848__$1 = (function (){var statearr_13871 = state_13848;
(statearr_13871[(12)] = inst_13818);

(statearr_13871[(7)] = inst_13799__$1);

(statearr_13871[(8)] = inst_13800);

return statearr_13871;
})();
var statearr_13872_13899 = state_13848__$1;
(statearr_13872_13899[(2)] = null);

(statearr_13872_13899[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13849 === (9))){
var inst_13800 = (state_13848[(8)]);
var inst_13813 = cljs.core.keyword_identical_QMARK_.call(null,inst_13800,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_13848__$1 = state_13848;
var statearr_13873_13900 = state_13848__$1;
(statearr_13873_13900[(2)] = inst_13813);

(statearr_13873_13900[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13849 === (5))){
var inst_13803 = (state_13848[(9)]);
var inst_13807 = (state_13848[(11)]);
var inst_13800 = (state_13848[(8)]);
var inst_13810 = (state_13848[(13)]);
var inst_13807__$1 = f.call(null,inst_13803);
var inst_13810__$1 = cljs.core._EQ_.call(null,inst_13807__$1,inst_13800);
var state_13848__$1 = (function (){var statearr_13874 = state_13848;
(statearr_13874[(11)] = inst_13807__$1);

(statearr_13874[(13)] = inst_13810__$1);

return statearr_13874;
})();
if(inst_13810__$1){
var statearr_13875_13901 = state_13848__$1;
(statearr_13875_13901[(1)] = (8));

} else {
var statearr_13876_13902 = state_13848__$1;
(statearr_13876_13902[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13849 === (14))){
var inst_13803 = (state_13848[(9)]);
var inst_13807 = (state_13848[(11)]);
var inst_13823 = (state_13848[(2)]);
var inst_13824 = [];
var inst_13825 = inst_13824.push(inst_13803);
var inst_13799 = inst_13824;
var inst_13800 = inst_13807;
var state_13848__$1 = (function (){var statearr_13877 = state_13848;
(statearr_13877[(14)] = inst_13823);

(statearr_13877[(15)] = inst_13825);

(statearr_13877[(7)] = inst_13799);

(statearr_13877[(8)] = inst_13800);

return statearr_13877;
})();
var statearr_13878_13903 = state_13848__$1;
(statearr_13878_13903[(2)] = null);

(statearr_13878_13903[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13849 === (16))){
var state_13848__$1 = state_13848;
var statearr_13879_13904 = state_13848__$1;
(statearr_13879_13904[(2)] = null);

(statearr_13879_13904[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13849 === (10))){
var inst_13815 = (state_13848[(2)]);
var state_13848__$1 = state_13848;
if(cljs.core.truth_(inst_13815)){
var statearr_13880_13905 = state_13848__$1;
(statearr_13880_13905[(1)] = (11));

} else {
var statearr_13881_13906 = state_13848__$1;
(statearr_13881_13906[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13849 === (18))){
var inst_13836 = (state_13848[(2)]);
var state_13848__$1 = state_13848;
var statearr_13882_13907 = state_13848__$1;
(statearr_13882_13907[(2)] = inst_13836);

(statearr_13882_13907[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13849 === (8))){
var inst_13810 = (state_13848[(13)]);
var state_13848__$1 = state_13848;
var statearr_13883_13908 = state_13848__$1;
(statearr_13883_13908[(2)] = inst_13810);

(statearr_13883_13908[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});
return (function() {
var cljs$core$async$state_machine__11191__auto__ = null;
var cljs$core$async$state_machine__11191__auto____0 = (function (){
var statearr_13884 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_13884[(0)] = cljs$core$async$state_machine__11191__auto__);

(statearr_13884[(1)] = (1));

return statearr_13884;
});
var cljs$core$async$state_machine__11191__auto____1 = (function (state_13848){
while(true){
var ret_value__11192__auto__ = (function (){try{while(true){
var result__11193__auto__ = switch__11190__auto__.call(null,state_13848);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11193__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11193__auto__;
}
break;
}
}catch (e13885){var ex__11194__auto__ = e13885;
var statearr_13886_13909 = state_13848;
(statearr_13886_13909[(2)] = ex__11194__auto__);


if(cljs.core.seq.call(null,(state_13848[(4)]))){
var statearr_13887_13910 = state_13848;
(statearr_13887_13910[(1)] = cljs.core.first.call(null,(state_13848[(4)])));

} else {
throw ex__11194__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11192__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13911 = state_13848;
state_13848 = G__13911;
continue;
} else {
return ret_value__11192__auto__;
}
break;
}
});
cljs$core$async$state_machine__11191__auto__ = function(state_13848){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__11191__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__11191__auto____1.call(this,state_13848);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__11191__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__11191__auto____0;
cljs$core$async$state_machine__11191__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__11191__auto____1;
return cljs$core$async$state_machine__11191__auto__;
})()
})();
var state__11373__auto__ = (function (){var statearr_13888 = f__11372__auto__.call(null);
(statearr_13888[(6)] = c__11371__auto___13890);

return statearr_13888;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11373__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=async.js.map
