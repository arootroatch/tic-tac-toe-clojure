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
var G__11467 = arguments.length;
switch (G__11467) {
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async11471 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async11471 = (function (f,blockable,meta11472){
this.f = f;
this.blockable = blockable;
this.meta11472 = meta11472;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async11471.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11473,meta11472__$1){
var self__ = this;
var _11473__$1 = this;
return (new cljs.core.async.t_cljs$core$async11471(self__.f,self__.blockable,meta11472__$1));
}));

(cljs.core.async.t_cljs$core$async11471.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11473){
var self__ = this;
var _11473__$1 = this;
return self__.meta11472;
}));

(cljs.core.async.t_cljs$core$async11471.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async11471.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async11471.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async11471.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async11471.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta11472","meta11472",528224002,null)], null);
}));

(cljs.core.async.t_cljs$core$async11471.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async11471.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async11471");

(cljs.core.async.t_cljs$core$async11471.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write.call(null,writer__5288__auto__,"cljs.core.async/t_cljs$core$async11471");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async11471.
 */
cljs.core.async.__GT_t_cljs$core$async11471 = (function cljs$core$async$__GT_t_cljs$core$async11471(f__$1,blockable__$1,meta11472){
return (new cljs.core.async.t_cljs$core$async11471(f__$1,blockable__$1,meta11472));
});

}

return (new cljs.core.async.t_cljs$core$async11471(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__11479 = arguments.length;
switch (G__11479) {
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
var G__11485 = arguments.length;
switch (G__11485) {
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
var G__11489 = arguments.length;
switch (G__11489) {
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
var val_11494 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_11494);
} else {
cljs.core.async.impl.dispatch.run.call(null,(function (){
return fn1.call(null,val_11494);
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
var G__11496 = arguments.length;
switch (G__11496) {
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
var n__5593__auto___11508 = n;
var x_11509 = (0);
while(true){
if((x_11509 < n__5593__auto___11508)){
(a[x_11509] = x_11509);

var G__11510 = (x_11509 + (1));
x_11509 = G__11510;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async11511 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async11511 = (function (flag,meta11512){
this.flag = flag;
this.meta11512 = meta11512;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async11511.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11513,meta11512__$1){
var self__ = this;
var _11513__$1 = this;
return (new cljs.core.async.t_cljs$core$async11511(self__.flag,meta11512__$1));
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
return cljs.core.deref.call(null,self__.flag);
}));

(cljs.core.async.t_cljs$core$async11511.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async11511.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async11511.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta11512","meta11512",436967366,null)], null);
}));

(cljs.core.async.t_cljs$core$async11511.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async11511.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async11511");

(cljs.core.async.t_cljs$core$async11511.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write.call(null,writer__5288__auto__,"cljs.core.async/t_cljs$core$async11511");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async11511.
 */
cljs.core.async.__GT_t_cljs$core$async11511 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async11511(flag__$1,meta11512){
return (new cljs.core.async.t_cljs$core$async11511(flag__$1,meta11512));
});

}

return (new cljs.core.async.t_cljs$core$async11511(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async11526 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async11526 = (function (flag,cb,meta11527){
this.flag = flag;
this.cb = cb;
this.meta11527 = meta11527;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async11526.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11528,meta11527__$1){
var self__ = this;
var _11528__$1 = this;
return (new cljs.core.async.t_cljs$core$async11526(self__.flag,self__.cb,meta11527__$1));
}));

(cljs.core.async.t_cljs$core$async11526.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11528){
var self__ = this;
var _11528__$1 = this;
return self__.meta11527;
}));

(cljs.core.async.t_cljs$core$async11526.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async11526.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
}));

(cljs.core.async.t_cljs$core$async11526.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async11526.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async11526.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta11527","meta11527",-315535505,null)], null);
}));

(cljs.core.async.t_cljs$core$async11526.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async11526.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async11526");

(cljs.core.async.t_cljs$core$async11526.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write.call(null,writer__5288__auto__,"cljs.core.async/t_cljs$core$async11526");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async11526.
 */
cljs.core.async.__GT_t_cljs$core$async11526 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async11526(flag__$1,cb__$1,meta11527){
return (new cljs.core.async.t_cljs$core$async11526(flag__$1,cb__$1,meta11527));
});

}

return (new cljs.core.async.t_cljs$core$async11526(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__11544_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__11544_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,ports__$1,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,ports__$1,n,idxs,priority){
return (function (p1__11545_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__11545_SHARP_,port], null));
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
var G__11548 = (i + (1));
i = G__11548;
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
var len__5726__auto___11554 = arguments.length;
var i__5727__auto___11557 = (0);
while(true){
if((i__5727__auto___11557 < len__5726__auto___11554)){
args__5732__auto__.push((arguments[i__5727__auto___11557]));

var G__11558 = (i__5727__auto___11557 + (1));
i__5727__auto___11557 = G__11558;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__11550){
var map__11551 = p__11550;
var map__11551__$1 = cljs.core.__destructure_map.call(null,map__11551);
var opts = map__11551__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq11546){
var G__11547 = cljs.core.first.call(null,seq11546);
var seq11546__$1 = cljs.core.next.call(null,seq11546);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__11547,seq11546__$1);
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
var G__11565 = arguments.length;
switch (G__11565) {
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
var c__11393__auto___11621 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__11394__auto__ = (function (){var switch__11190__auto__ = (function (state_11590){
var state_val_11591 = (state_11590[(1)]);
if((state_val_11591 === (7))){
var inst_11586 = (state_11590[(2)]);
var state_11590__$1 = state_11590;
var statearr_11592_11623 = state_11590__$1;
(statearr_11592_11623[(2)] = inst_11586);

(statearr_11592_11623[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11591 === (1))){
var state_11590__$1 = state_11590;
var statearr_11593_11628 = state_11590__$1;
(statearr_11593_11628[(2)] = null);

(statearr_11593_11628[(1)] = (2));


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
var statearr_11595_11629 = state_11590__$1;
(statearr_11595_11629[(1)] = (5));

} else {
var statearr_11596_11630 = state_11590__$1;
(statearr_11596_11630[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11591 === (13))){
var state_11590__$1 = state_11590;
var statearr_11597_11631 = state_11590__$1;
(statearr_11597_11631[(2)] = null);

(statearr_11597_11631[(1)] = (14));


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
var statearr_11598_11634 = state_11590__$1;
(statearr_11598_11634[(2)] = null);

(statearr_11598_11634[(1)] = (2));


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
var statearr_11599_11639 = state_11590__$1;
(statearr_11599_11639[(1)] = (12));

} else {
var statearr_11600_11640 = state_11590__$1;
(statearr_11600_11640[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11591 === (9))){
var state_11590__$1 = state_11590;
var statearr_11601_11641 = state_11590__$1;
(statearr_11601_11641[(2)] = null);

(statearr_11601_11641[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11591 === (5))){
var state_11590__$1 = state_11590;
if(cljs.core.truth_(close_QMARK_)){
var statearr_11602_11642 = state_11590__$1;
(statearr_11602_11642[(1)] = (8));

} else {
var statearr_11603_11643 = state_11590__$1;
(statearr_11603_11643[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11591 === (14))){
var inst_11584 = (state_11590[(2)]);
var state_11590__$1 = state_11590;
var statearr_11604_11645 = state_11590__$1;
(statearr_11604_11645[(2)] = inst_11584);

(statearr_11604_11645[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11591 === (10))){
var inst_11576 = (state_11590[(2)]);
var state_11590__$1 = state_11590;
var statearr_11605_11646 = state_11590__$1;
(statearr_11605_11646[(2)] = inst_11576);

(statearr_11605_11646[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11591 === (8))){
var inst_11573 = cljs.core.async.close_BANG_.call(null,to);
var state_11590__$1 = state_11590;
var statearr_11606_11647 = state_11590__$1;
(statearr_11606_11647[(2)] = inst_11573);

(statearr_11606_11647[(1)] = (10));


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
var statearr_11609_11652 = state_11590;
(statearr_11609_11652[(2)] = ex__11194__auto__);


if(cljs.core.seq.call(null,(state_11590[(4)]))){
var statearr_11610_11653 = state_11590;
(statearr_11610_11653[(1)] = cljs.core.first.call(null,(state_11590[(4)])));

} else {
throw ex__11194__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11192__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11654 = state_11590;
state_11590 = G__11654;
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
var state__11395__auto__ = (function (){var statearr_11611 = f__11394__auto__.call(null);
(statearr_11611[(6)] = c__11393__auto___11621);

return statearr_11611;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11395__auto__);
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
var process__$1 = (function (p__11624){
var vec__11625 = p__11624;
var v = cljs.core.nth.call(null,vec__11625,(0),null);
var p = cljs.core.nth.call(null,vec__11625,(1),null);
var job = vec__11625;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__11393__auto___11824 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__11394__auto__ = (function (){var switch__11190__auto__ = (function (state_11637){
var state_val_11638 = (state_11637[(1)]);
if((state_val_11638 === (1))){
var state_11637__$1 = state_11637;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11637__$1,(2),res,v);
} else {
if((state_val_11638 === (2))){
var inst_11633 = (state_11637[(2)]);
var inst_11635 = cljs.core.async.close_BANG_.call(null,res);
var state_11637__$1 = (function (){var statearr_11644 = state_11637;
(statearr_11644[(7)] = inst_11633);

return statearr_11644;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11637__$1,inst_11635);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__11191__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__11191__auto____0 = (function (){
var statearr_11648 = [null,null,null,null,null,null,null,null];
(statearr_11648[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__11191__auto__);

(statearr_11648[(1)] = (1));

return statearr_11648;
});
var cljs$core$async$pipeline_STAR__$_state_machine__11191__auto____1 = (function (state_11637){
while(true){
var ret_value__11192__auto__ = (function (){try{while(true){
var result__11193__auto__ = switch__11190__auto__.call(null,state_11637);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11193__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11193__auto__;
}
break;
}
}catch (e11649){var ex__11194__auto__ = e11649;
var statearr_11650_11828 = state_11637;
(statearr_11650_11828[(2)] = ex__11194__auto__);


if(cljs.core.seq.call(null,(state_11637[(4)]))){
var statearr_11651_11831 = state_11637;
(statearr_11651_11831[(1)] = cljs.core.first.call(null,(state_11637[(4)])));

} else {
throw ex__11194__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11192__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11833 = state_11637;
state_11637 = G__11833;
continue;
} else {
return ret_value__11192__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__11191__auto__ = function(state_11637){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__11191__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__11191__auto____1.call(this,state_11637);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__11191__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__11191__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__11191__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__11191__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__11191__auto__;
})()
})();
var state__11395__auto__ = (function (){var statearr_11655 = f__11394__auto__.call(null);
(statearr_11655[(6)] = c__11393__auto___11824);

return statearr_11655;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11395__auto__);
}));


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});
var async = (function (p__11658){
var vec__11659 = p__11658;
var v = cljs.core.nth.call(null,vec__11659,(0),null);
var p = cljs.core.nth.call(null,vec__11659,(1),null);
var job = vec__11659;
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
var n__5593__auto___11841 = n;
var __11842 = (0);
while(true){
if((__11842 < n__5593__auto___11841)){
var G__11665_11843 = type;
var G__11665_11844__$1 = (((G__11665_11843 instanceof cljs.core.Keyword))?G__11665_11843.fqn:null);
switch (G__11665_11844__$1) {
case "compute":
var c__11393__auto___11846 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__11842,c__11393__auto___11846,G__11665_11843,G__11665_11844__$1,n__5593__auto___11841,jobs,results,process__$1,async){
return (function (){
var f__11394__auto__ = (function (){var switch__11190__auto__ = ((function (__11842,c__11393__auto___11846,G__11665_11843,G__11665_11844__$1,n__5593__auto___11841,jobs,results,process__$1,async){
return (function (state_11678){
var state_val_11679 = (state_11678[(1)]);
if((state_val_11679 === (1))){
var state_11678__$1 = state_11678;
var statearr_11680_11850 = state_11678__$1;
(statearr_11680_11850[(2)] = null);

(statearr_11680_11850[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11679 === (2))){
var state_11678__$1 = state_11678;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11678__$1,(4),jobs);
} else {
if((state_val_11679 === (3))){
var inst_11676 = (state_11678[(2)]);
var state_11678__$1 = state_11678;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11678__$1,inst_11676);
} else {
if((state_val_11679 === (4))){
var inst_11668 = (state_11678[(2)]);
var inst_11669 = process__$1.call(null,inst_11668);
var state_11678__$1 = state_11678;
if(cljs.core.truth_(inst_11669)){
var statearr_11681_11856 = state_11678__$1;
(statearr_11681_11856[(1)] = (5));

} else {
var statearr_11682_11860 = state_11678__$1;
(statearr_11682_11860[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11679 === (5))){
var state_11678__$1 = state_11678;
var statearr_11683_11861 = state_11678__$1;
(statearr_11683_11861[(2)] = null);

(statearr_11683_11861[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11679 === (6))){
var state_11678__$1 = state_11678;
var statearr_11684_11865 = state_11678__$1;
(statearr_11684_11865[(2)] = null);

(statearr_11684_11865[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11679 === (7))){
var inst_11674 = (state_11678[(2)]);
var state_11678__$1 = state_11678;
var statearr_11685_11899 = state_11678__$1;
(statearr_11685_11899[(2)] = inst_11674);

(statearr_11685_11899[(1)] = (3));


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
});})(__11842,c__11393__auto___11846,G__11665_11843,G__11665_11844__$1,n__5593__auto___11841,jobs,results,process__$1,async))
;
return ((function (__11842,switch__11190__auto__,c__11393__auto___11846,G__11665_11843,G__11665_11844__$1,n__5593__auto___11841,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__11191__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__11191__auto____0 = (function (){
var statearr_11686 = [null,null,null,null,null,null,null];
(statearr_11686[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__11191__auto__);

(statearr_11686[(1)] = (1));

return statearr_11686;
});
var cljs$core$async$pipeline_STAR__$_state_machine__11191__auto____1 = (function (state_11678){
while(true){
var ret_value__11192__auto__ = (function (){try{while(true){
var result__11193__auto__ = switch__11190__auto__.call(null,state_11678);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11193__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11193__auto__;
}
break;
}
}catch (e11687){var ex__11194__auto__ = e11687;
var statearr_11688_11903 = state_11678;
(statearr_11688_11903[(2)] = ex__11194__auto__);


if(cljs.core.seq.call(null,(state_11678[(4)]))){
var statearr_11689_11907 = state_11678;
(statearr_11689_11907[(1)] = cljs.core.first.call(null,(state_11678[(4)])));

} else {
throw ex__11194__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11192__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11908 = state_11678;
state_11678 = G__11908;
continue;
} else {
return ret_value__11192__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__11191__auto__ = function(state_11678){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__11191__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__11191__auto____1.call(this,state_11678);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__11191__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__11191__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__11191__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__11191__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__11191__auto__;
})()
;})(__11842,switch__11190__auto__,c__11393__auto___11846,G__11665_11843,G__11665_11844__$1,n__5593__auto___11841,jobs,results,process__$1,async))
})();
var state__11395__auto__ = (function (){var statearr_11690 = f__11394__auto__.call(null);
(statearr_11690[(6)] = c__11393__auto___11846);

return statearr_11690;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11395__auto__);
});})(__11842,c__11393__auto___11846,G__11665_11843,G__11665_11844__$1,n__5593__auto___11841,jobs,results,process__$1,async))
);


break;
case "async":
var c__11393__auto___11911 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__11842,c__11393__auto___11911,G__11665_11843,G__11665_11844__$1,n__5593__auto___11841,jobs,results,process__$1,async){
return (function (){
var f__11394__auto__ = (function (){var switch__11190__auto__ = ((function (__11842,c__11393__auto___11911,G__11665_11843,G__11665_11844__$1,n__5593__auto___11841,jobs,results,process__$1,async){
return (function (state_11703){
var state_val_11704 = (state_11703[(1)]);
if((state_val_11704 === (1))){
var state_11703__$1 = state_11703;
var statearr_11705_11913 = state_11703__$1;
(statearr_11705_11913[(2)] = null);

(statearr_11705_11913[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11704 === (2))){
var state_11703__$1 = state_11703;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11703__$1,(4),jobs);
} else {
if((state_val_11704 === (3))){
var inst_11701 = (state_11703[(2)]);
var state_11703__$1 = state_11703;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11703__$1,inst_11701);
} else {
if((state_val_11704 === (4))){
var inst_11693 = (state_11703[(2)]);
var inst_11694 = async.call(null,inst_11693);
var state_11703__$1 = state_11703;
if(cljs.core.truth_(inst_11694)){
var statearr_11706_11915 = state_11703__$1;
(statearr_11706_11915[(1)] = (5));

} else {
var statearr_11707_11916 = state_11703__$1;
(statearr_11707_11916[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11704 === (5))){
var state_11703__$1 = state_11703;
var statearr_11708_11919 = state_11703__$1;
(statearr_11708_11919[(2)] = null);

(statearr_11708_11919[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11704 === (6))){
var state_11703__$1 = state_11703;
var statearr_11709_11920 = state_11703__$1;
(statearr_11709_11920[(2)] = null);

(statearr_11709_11920[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11704 === (7))){
var inst_11699 = (state_11703[(2)]);
var state_11703__$1 = state_11703;
var statearr_11710_11921 = state_11703__$1;
(statearr_11710_11921[(2)] = inst_11699);

(statearr_11710_11921[(1)] = (3));


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
});})(__11842,c__11393__auto___11911,G__11665_11843,G__11665_11844__$1,n__5593__auto___11841,jobs,results,process__$1,async))
;
return ((function (__11842,switch__11190__auto__,c__11393__auto___11911,G__11665_11843,G__11665_11844__$1,n__5593__auto___11841,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__11191__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__11191__auto____0 = (function (){
var statearr_11711 = [null,null,null,null,null,null,null];
(statearr_11711[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__11191__auto__);

(statearr_11711[(1)] = (1));

return statearr_11711;
});
var cljs$core$async$pipeline_STAR__$_state_machine__11191__auto____1 = (function (state_11703){
while(true){
var ret_value__11192__auto__ = (function (){try{while(true){
var result__11193__auto__ = switch__11190__auto__.call(null,state_11703);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11193__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11193__auto__;
}
break;
}
}catch (e11712){var ex__11194__auto__ = e11712;
var statearr_11713_11926 = state_11703;
(statearr_11713_11926[(2)] = ex__11194__auto__);


if(cljs.core.seq.call(null,(state_11703[(4)]))){
var statearr_11714_11927 = state_11703;
(statearr_11714_11927[(1)] = cljs.core.first.call(null,(state_11703[(4)])));

} else {
throw ex__11194__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11192__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11932 = state_11703;
state_11703 = G__11932;
continue;
} else {
return ret_value__11192__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__11191__auto__ = function(state_11703){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__11191__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__11191__auto____1.call(this,state_11703);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__11191__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__11191__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__11191__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__11191__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__11191__auto__;
})()
;})(__11842,switch__11190__auto__,c__11393__auto___11911,G__11665_11843,G__11665_11844__$1,n__5593__auto___11841,jobs,results,process__$1,async))
})();
var state__11395__auto__ = (function (){var statearr_11715 = f__11394__auto__.call(null);
(statearr_11715[(6)] = c__11393__auto___11911);

return statearr_11715;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11395__auto__);
});})(__11842,c__11393__auto___11911,G__11665_11843,G__11665_11844__$1,n__5593__auto___11841,jobs,results,process__$1,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__11665_11844__$1)].join('')));

}

var G__11938 = (__11842 + (1));
__11842 = G__11938;
continue;
} else {
}
break;
}

var c__11393__auto___11939 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__11394__auto__ = (function (){var switch__11190__auto__ = (function (state_11737){
var state_val_11738 = (state_11737[(1)]);
if((state_val_11738 === (7))){
var inst_11733 = (state_11737[(2)]);
var state_11737__$1 = state_11737;
var statearr_11739_11942 = state_11737__$1;
(statearr_11739_11942[(2)] = inst_11733);

(statearr_11739_11942[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11738 === (1))){
var state_11737__$1 = state_11737;
var statearr_11740_11948 = state_11737__$1;
(statearr_11740_11948[(2)] = null);

(statearr_11740_11948[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11738 === (4))){
var inst_11718 = (state_11737[(7)]);
var inst_11718__$1 = (state_11737[(2)]);
var inst_11719 = (inst_11718__$1 == null);
var state_11737__$1 = (function (){var statearr_11741 = state_11737;
(statearr_11741[(7)] = inst_11718__$1);

return statearr_11741;
})();
if(cljs.core.truth_(inst_11719)){
var statearr_11742_11953 = state_11737__$1;
(statearr_11742_11953[(1)] = (5));

} else {
var statearr_11743_11954 = state_11737__$1;
(statearr_11743_11954[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11738 === (6))){
var inst_11718 = (state_11737[(7)]);
var inst_11723 = (state_11737[(8)]);
var inst_11723__$1 = cljs.core.async.chan.call(null,(1));
var inst_11724 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_11725 = [inst_11718,inst_11723__$1];
var inst_11726 = (new cljs.core.PersistentVector(null,2,(5),inst_11724,inst_11725,null));
var state_11737__$1 = (function (){var statearr_11744 = state_11737;
(statearr_11744[(8)] = inst_11723__$1);

return statearr_11744;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11737__$1,(8),jobs,inst_11726);
} else {
if((state_val_11738 === (3))){
var inst_11735 = (state_11737[(2)]);
var state_11737__$1 = state_11737;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11737__$1,inst_11735);
} else {
if((state_val_11738 === (2))){
var state_11737__$1 = state_11737;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11737__$1,(4),from);
} else {
if((state_val_11738 === (9))){
var inst_11730 = (state_11737[(2)]);
var state_11737__$1 = (function (){var statearr_11745 = state_11737;
(statearr_11745[(9)] = inst_11730);

return statearr_11745;
})();
var statearr_11746_11959 = state_11737__$1;
(statearr_11746_11959[(2)] = null);

(statearr_11746_11959[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11738 === (5))){
var inst_11721 = cljs.core.async.close_BANG_.call(null,jobs);
var state_11737__$1 = state_11737;
var statearr_11747_11961 = state_11737__$1;
(statearr_11747_11961[(2)] = inst_11721);

(statearr_11747_11961[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11738 === (8))){
var inst_11723 = (state_11737[(8)]);
var inst_11728 = (state_11737[(2)]);
var state_11737__$1 = (function (){var statearr_11748 = state_11737;
(statearr_11748[(10)] = inst_11728);

return statearr_11748;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11737__$1,(9),results,inst_11723);
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
var cljs$core$async$pipeline_STAR__$_state_machine__11191__auto____1 = (function (state_11737){
while(true){
var ret_value__11192__auto__ = (function (){try{while(true){
var result__11193__auto__ = switch__11190__auto__.call(null,state_11737);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11193__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11193__auto__;
}
break;
}
}catch (e11750){var ex__11194__auto__ = e11750;
var statearr_11751_11989 = state_11737;
(statearr_11751_11989[(2)] = ex__11194__auto__);


if(cljs.core.seq.call(null,(state_11737[(4)]))){
var statearr_11752_11990 = state_11737;
(statearr_11752_11990[(1)] = cljs.core.first.call(null,(state_11737[(4)])));

} else {
throw ex__11194__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11192__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11991 = state_11737;
state_11737 = G__11991;
continue;
} else {
return ret_value__11192__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__11191__auto__ = function(state_11737){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__11191__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__11191__auto____1.call(this,state_11737);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__11191__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__11191__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__11191__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__11191__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__11191__auto__;
})()
})();
var state__11395__auto__ = (function (){var statearr_11753 = f__11394__auto__.call(null);
(statearr_11753[(6)] = c__11393__auto___11939);

return statearr_11753;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11395__auto__);
}));


var c__11393__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__11394__auto__ = (function (){var switch__11190__auto__ = (function (state_11791){
var state_val_11792 = (state_11791[(1)]);
if((state_val_11792 === (7))){
var inst_11787 = (state_11791[(2)]);
var state_11791__$1 = state_11791;
var statearr_11793_11998 = state_11791__$1;
(statearr_11793_11998[(2)] = inst_11787);

(statearr_11793_11998[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11792 === (20))){
var state_11791__$1 = state_11791;
var statearr_11794_12000 = state_11791__$1;
(statearr_11794_12000[(2)] = null);

(statearr_11794_12000[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11792 === (1))){
var state_11791__$1 = state_11791;
var statearr_11795_12003 = state_11791__$1;
(statearr_11795_12003[(2)] = null);

(statearr_11795_12003[(1)] = (2));


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
var statearr_11797_12007 = state_11791__$1;
(statearr_11797_12007[(1)] = (5));

} else {
var statearr_11798_12008 = state_11791__$1;
(statearr_11798_12008[(1)] = (6));

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
var statearr_11799_12013 = state_11791__$1;
(statearr_11799_12013[(2)] = inst_11782);

(statearr_11799_12013[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11792 === (13))){
var inst_11784 = (state_11791[(2)]);
var state_11791__$1 = (function (){var statearr_11800 = state_11791;
(statearr_11800[(9)] = inst_11784);

return statearr_11800;
})();
var statearr_11801_12016 = state_11791__$1;
(statearr_11801_12016[(2)] = null);

(statearr_11801_12016[(1)] = (2));


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
var statearr_11802_12019 = state_11791__$1;
(statearr_11802_12019[(1)] = (19));

} else {
var statearr_11803_12021 = state_11791__$1;
(statearr_11803_12021[(1)] = (20));

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
var statearr_11804_12025 = state_11791__$1;
(statearr_11804_12025[(2)] = null);

(statearr_11804_12025[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11792 === (11))){
var inst_11766 = (state_11791[(2)]);
var state_11791__$1 = (function (){var statearr_11805 = state_11791;
(statearr_11805[(10)] = inst_11766);

return statearr_11805;
})();
var statearr_11806_12026 = state_11791__$1;
(statearr_11806_12026[(2)] = null);

(statearr_11806_12026[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11792 === (9))){
var state_11791__$1 = state_11791;
var statearr_11807_12028 = state_11791__$1;
(statearr_11807_12028[(2)] = null);

(statearr_11807_12028[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11792 === (5))){
var state_11791__$1 = state_11791;
if(cljs.core.truth_(close_QMARK_)){
var statearr_11808_12030 = state_11791__$1;
(statearr_11808_12030[(1)] = (8));

} else {
var statearr_11809_12032 = state_11791__$1;
(statearr_11809_12032[(1)] = (9));

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
var statearr_11811_12036 = state_11791__$1;
(statearr_11811_12036[(1)] = (15));

} else {
var statearr_11812_12037 = state_11791__$1;
(statearr_11812_12037[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11792 === (16))){
var inst_11771 = (state_11791[(11)]);
var state_11791__$1 = state_11791;
var statearr_11813_12040 = state_11791__$1;
(statearr_11813_12040[(2)] = inst_11771);

(statearr_11813_12040[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11792 === (10))){
var inst_11763 = (state_11791[(2)]);
var state_11791__$1 = state_11791;
var statearr_11814_12042 = state_11791__$1;
(statearr_11814_12042[(2)] = inst_11763);

(statearr_11814_12042[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11792 === (18))){
var inst_11774 = (state_11791[(2)]);
var state_11791__$1 = state_11791;
var statearr_11815_12044 = state_11791__$1;
(statearr_11815_12044[(2)] = inst_11774);

(statearr_11815_12044[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11792 === (8))){
var inst_11760 = cljs.core.async.close_BANG_.call(null,to);
var state_11791__$1 = state_11791;
var statearr_11816_12047 = state_11791__$1;
(statearr_11816_12047[(2)] = inst_11760);

(statearr_11816_12047[(1)] = (10));


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
var statearr_11819_12048 = state_11791;
(statearr_11819_12048[(2)] = ex__11194__auto__);


if(cljs.core.seq.call(null,(state_11791[(4)]))){
var statearr_11820_12053 = state_11791;
(statearr_11820_12053[(1)] = cljs.core.first.call(null,(state_11791[(4)])));

} else {
throw ex__11194__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11192__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12060 = state_11791;
state_11791 = G__12060;
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
var state__11395__auto__ = (function (){var statearr_11821 = f__11394__auto__.call(null);
(statearr_11821[(6)] = c__11393__auto__);

return statearr_11821;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11395__auto__);
}));

return c__11393__auto__;
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
var G__11823 = arguments.length;
switch (G__11823) {
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
var G__11832 = arguments.length;
switch (G__11832) {
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
var G__11855 = arguments.length;
switch (G__11855) {
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
var c__11393__auto___12078 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__11394__auto__ = (function (){var switch__11190__auto__ = (function (state_11895){
var state_val_11896 = (state_11895[(1)]);
if((state_val_11896 === (7))){
var inst_11888 = (state_11895[(2)]);
var state_11895__$1 = state_11895;
var statearr_11900_12079 = state_11895__$1;
(statearr_11900_12079[(2)] = inst_11888);

(statearr_11900_12079[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11896 === (1))){
var state_11895__$1 = state_11895;
var statearr_11902_12080 = state_11895__$1;
(statearr_11902_12080[(2)] = null);

(statearr_11902_12080[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11896 === (4))){
var inst_11864 = (state_11895[(7)]);
var inst_11864__$1 = (state_11895[(2)]);
var inst_11866 = (inst_11864__$1 == null);
var state_11895__$1 = (function (){var statearr_11909 = state_11895;
(statearr_11909[(7)] = inst_11864__$1);

return statearr_11909;
})();
if(cljs.core.truth_(inst_11866)){
var statearr_11910_12095 = state_11895__$1;
(statearr_11910_12095[(1)] = (5));

} else {
var statearr_11912_12096 = state_11895__$1;
(statearr_11912_12096[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11896 === (13))){
var state_11895__$1 = state_11895;
var statearr_11914_12107 = state_11895__$1;
(statearr_11914_12107[(2)] = null);

(statearr_11914_12107[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11896 === (6))){
var inst_11864 = (state_11895[(7)]);
var inst_11875 = p.call(null,inst_11864);
var state_11895__$1 = state_11895;
if(cljs.core.truth_(inst_11875)){
var statearr_11917_12110 = state_11895__$1;
(statearr_11917_12110[(1)] = (9));

} else {
var statearr_11918_12116 = state_11895__$1;
(statearr_11918_12116[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11896 === (3))){
var inst_11890 = (state_11895[(2)]);
var state_11895__$1 = state_11895;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11895__$1,inst_11890);
} else {
if((state_val_11896 === (12))){
var state_11895__$1 = state_11895;
var statearr_11922_12118 = state_11895__$1;
(statearr_11922_12118[(2)] = null);

(statearr_11922_12118[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11896 === (2))){
var state_11895__$1 = state_11895;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11895__$1,(4),ch);
} else {
if((state_val_11896 === (11))){
var inst_11864 = (state_11895[(7)]);
var inst_11879 = (state_11895[(2)]);
var state_11895__$1 = state_11895;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11895__$1,(8),inst_11879,inst_11864);
} else {
if((state_val_11896 === (9))){
var state_11895__$1 = state_11895;
var statearr_11928_12119 = state_11895__$1;
(statearr_11928_12119[(2)] = tc);

(statearr_11928_12119[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11896 === (5))){
var inst_11869 = cljs.core.async.close_BANG_.call(null,tc);
var inst_11873 = cljs.core.async.close_BANG_.call(null,fc);
var state_11895__$1 = (function (){var statearr_11933 = state_11895;
(statearr_11933[(8)] = inst_11869);

return statearr_11933;
})();
var statearr_11934_12122 = state_11895__$1;
(statearr_11934_12122[(2)] = inst_11873);

(statearr_11934_12122[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11896 === (14))){
var inst_11886 = (state_11895[(2)]);
var state_11895__$1 = state_11895;
var statearr_11940_12124 = state_11895__$1;
(statearr_11940_12124[(2)] = inst_11886);

(statearr_11940_12124[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11896 === (10))){
var state_11895__$1 = state_11895;
var statearr_11941_12125 = state_11895__$1;
(statearr_11941_12125[(2)] = fc);

(statearr_11941_12125[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11896 === (8))){
var inst_11881 = (state_11895[(2)]);
var state_11895__$1 = state_11895;
if(cljs.core.truth_(inst_11881)){
var statearr_11946_12128 = state_11895__$1;
(statearr_11946_12128[(1)] = (12));

} else {
var statearr_11947_12129 = state_11895__$1;
(statearr_11947_12129[(1)] = (13));

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
var statearr_11952 = [null,null,null,null,null,null,null,null,null];
(statearr_11952[(0)] = cljs$core$async$state_machine__11191__auto__);

(statearr_11952[(1)] = (1));

return statearr_11952;
});
var cljs$core$async$state_machine__11191__auto____1 = (function (state_11895){
while(true){
var ret_value__11192__auto__ = (function (){try{while(true){
var result__11193__auto__ = switch__11190__auto__.call(null,state_11895);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11193__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11193__auto__;
}
break;
}
}catch (e11955){var ex__11194__auto__ = e11955;
var statearr_11957_12134 = state_11895;
(statearr_11957_12134[(2)] = ex__11194__auto__);


if(cljs.core.seq.call(null,(state_11895[(4)]))){
var statearr_11958_12135 = state_11895;
(statearr_11958_12135[(1)] = cljs.core.first.call(null,(state_11895[(4)])));

} else {
throw ex__11194__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11192__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12136 = state_11895;
state_11895 = G__12136;
continue;
} else {
return ret_value__11192__auto__;
}
break;
}
});
cljs$core$async$state_machine__11191__auto__ = function(state_11895){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__11191__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__11191__auto____1.call(this,state_11895);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__11191__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__11191__auto____0;
cljs$core$async$state_machine__11191__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__11191__auto____1;
return cljs$core$async$state_machine__11191__auto__;
})()
})();
var state__11395__auto__ = (function (){var statearr_11960 = f__11394__auto__.call(null);
(statearr_11960[(6)] = c__11393__auto___12078);

return statearr_11960;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11395__auto__);
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
var c__11393__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__11394__auto__ = (function (){var switch__11190__auto__ = (function (state_11987){
var state_val_11988 = (state_11987[(1)]);
if((state_val_11988 === (7))){
var inst_11983 = (state_11987[(2)]);
var state_11987__$1 = state_11987;
var statearr_11992_12144 = state_11987__$1;
(statearr_11992_12144[(2)] = inst_11983);

(statearr_11992_12144[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11988 === (1))){
var inst_11963 = init;
var inst_11964 = inst_11963;
var state_11987__$1 = (function (){var statearr_11995 = state_11987;
(statearr_11995[(7)] = inst_11964);

return statearr_11995;
})();
var statearr_11996_12148 = state_11987__$1;
(statearr_11996_12148[(2)] = null);

(statearr_11996_12148[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11988 === (4))){
var inst_11967 = (state_11987[(8)]);
var inst_11967__$1 = (state_11987[(2)]);
var inst_11968 = (inst_11967__$1 == null);
var state_11987__$1 = (function (){var statearr_11999 = state_11987;
(statearr_11999[(8)] = inst_11967__$1);

return statearr_11999;
})();
if(cljs.core.truth_(inst_11968)){
var statearr_12001_12151 = state_11987__$1;
(statearr_12001_12151[(1)] = (5));

} else {
var statearr_12002_12152 = state_11987__$1;
(statearr_12002_12152[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11988 === (6))){
var inst_11964 = (state_11987[(7)]);
var inst_11967 = (state_11987[(8)]);
var inst_11971 = (state_11987[(9)]);
var inst_11971__$1 = f.call(null,inst_11964,inst_11967);
var inst_11975 = cljs.core.reduced_QMARK_.call(null,inst_11971__$1);
var state_11987__$1 = (function (){var statearr_12009 = state_11987;
(statearr_12009[(9)] = inst_11971__$1);

return statearr_12009;
})();
if(inst_11975){
var statearr_12011_12157 = state_11987__$1;
(statearr_12011_12157[(1)] = (8));

} else {
var statearr_12012_12160 = state_11987__$1;
(statearr_12012_12160[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11988 === (3))){
var inst_11985 = (state_11987[(2)]);
var state_11987__$1 = state_11987;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11987__$1,inst_11985);
} else {
if((state_val_11988 === (2))){
var state_11987__$1 = state_11987;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11987__$1,(4),ch);
} else {
if((state_val_11988 === (9))){
var inst_11971 = (state_11987[(9)]);
var inst_11964 = inst_11971;
var state_11987__$1 = (function (){var statearr_12017 = state_11987;
(statearr_12017[(7)] = inst_11964);

return statearr_12017;
})();
var statearr_12018_12171 = state_11987__$1;
(statearr_12018_12171[(2)] = null);

(statearr_12018_12171[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11988 === (5))){
var inst_11964 = (state_11987[(7)]);
var state_11987__$1 = state_11987;
var statearr_12024_12174 = state_11987__$1;
(statearr_12024_12174[(2)] = inst_11964);

(statearr_12024_12174[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11988 === (10))){
var inst_11981 = (state_11987[(2)]);
var state_11987__$1 = state_11987;
var statearr_12027_12175 = state_11987__$1;
(statearr_12027_12175[(2)] = inst_11981);

(statearr_12027_12175[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11988 === (8))){
var inst_11971 = (state_11987[(9)]);
var inst_11977 = cljs.core.deref.call(null,inst_11971);
var state_11987__$1 = state_11987;
var statearr_12029_12177 = state_11987__$1;
(statearr_12029_12177[(2)] = inst_11977);

(statearr_12029_12177[(1)] = (10));


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
var statearr_12034 = [null,null,null,null,null,null,null,null,null,null];
(statearr_12034[(0)] = cljs$core$async$reduce_$_state_machine__11191__auto__);

(statearr_12034[(1)] = (1));

return statearr_12034;
});
var cljs$core$async$reduce_$_state_machine__11191__auto____1 = (function (state_11987){
while(true){
var ret_value__11192__auto__ = (function (){try{while(true){
var result__11193__auto__ = switch__11190__auto__.call(null,state_11987);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11193__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11193__auto__;
}
break;
}
}catch (e12038){var ex__11194__auto__ = e12038;
var statearr_12039_12181 = state_11987;
(statearr_12039_12181[(2)] = ex__11194__auto__);


if(cljs.core.seq.call(null,(state_11987[(4)]))){
var statearr_12041_12182 = state_11987;
(statearr_12041_12182[(1)] = cljs.core.first.call(null,(state_11987[(4)])));

} else {
throw ex__11194__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11192__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12184 = state_11987;
state_11987 = G__12184;
continue;
} else {
return ret_value__11192__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__11191__auto__ = function(state_11987){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__11191__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__11191__auto____1.call(this,state_11987);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__11191__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__11191__auto____0;
cljs$core$async$reduce_$_state_machine__11191__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__11191__auto____1;
return cljs$core$async$reduce_$_state_machine__11191__auto__;
})()
})();
var state__11395__auto__ = (function (){var statearr_12046 = f__11394__auto__.call(null);
(statearr_12046[(6)] = c__11393__auto__);

return statearr_12046;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11395__auto__);
}));

return c__11393__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__11393__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__11394__auto__ = (function (){var switch__11190__auto__ = (function (state_12056){
var state_val_12057 = (state_12056[(1)]);
if((state_val_12057 === (1))){
var inst_12050 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_12056__$1 = state_12056;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12056__$1,(2),inst_12050);
} else {
if((state_val_12057 === (2))){
var inst_12052 = (state_12056[(2)]);
var inst_12054 = f__$1.call(null,inst_12052);
var state_12056__$1 = state_12056;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12056__$1,inst_12054);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__11191__auto__ = null;
var cljs$core$async$transduce_$_state_machine__11191__auto____0 = (function (){
var statearr_12063 = [null,null,null,null,null,null,null];
(statearr_12063[(0)] = cljs$core$async$transduce_$_state_machine__11191__auto__);

(statearr_12063[(1)] = (1));

return statearr_12063;
});
var cljs$core$async$transduce_$_state_machine__11191__auto____1 = (function (state_12056){
while(true){
var ret_value__11192__auto__ = (function (){try{while(true){
var result__11193__auto__ = switch__11190__auto__.call(null,state_12056);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11193__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11193__auto__;
}
break;
}
}catch (e12064){var ex__11194__auto__ = e12064;
var statearr_12065_12193 = state_12056;
(statearr_12065_12193[(2)] = ex__11194__auto__);


if(cljs.core.seq.call(null,(state_12056[(4)]))){
var statearr_12068_12195 = state_12056;
(statearr_12068_12195[(1)] = cljs.core.first.call(null,(state_12056[(4)])));

} else {
throw ex__11194__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11192__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12199 = state_12056;
state_12056 = G__12199;
continue;
} else {
return ret_value__11192__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__11191__auto__ = function(state_12056){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__11191__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__11191__auto____1.call(this,state_12056);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__11191__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__11191__auto____0;
cljs$core$async$transduce_$_state_machine__11191__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__11191__auto____1;
return cljs$core$async$transduce_$_state_machine__11191__auto__;
})()
})();
var state__11395__auto__ = (function (){var statearr_12071 = f__11394__auto__.call(null);
(statearr_12071[(6)] = c__11393__auto__);

return statearr_12071;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11395__auto__);
}));

return c__11393__auto__;
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
var G__12076 = arguments.length;
switch (G__12076) {
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
var c__11393__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__11394__auto__ = (function (){var switch__11190__auto__ = (function (state_12108){
var state_val_12109 = (state_12108[(1)]);
if((state_val_12109 === (7))){
var inst_12087 = (state_12108[(2)]);
var state_12108__$1 = state_12108;
var statearr_12111_12208 = state_12108__$1;
(statearr_12111_12208[(2)] = inst_12087);

(statearr_12111_12208[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12109 === (1))){
var inst_12081 = cljs.core.seq.call(null,coll);
var inst_12082 = inst_12081;
var state_12108__$1 = (function (){var statearr_12114 = state_12108;
(statearr_12114[(7)] = inst_12082);

return statearr_12114;
})();
var statearr_12117_12209 = state_12108__$1;
(statearr_12117_12209[(2)] = null);

(statearr_12117_12209[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12109 === (4))){
var inst_12082 = (state_12108[(7)]);
var inst_12085 = cljs.core.first.call(null,inst_12082);
var state_12108__$1 = state_12108;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12108__$1,(7),ch,inst_12085);
} else {
if((state_val_12109 === (13))){
var inst_12101 = (state_12108[(2)]);
var state_12108__$1 = state_12108;
var statearr_12127_12211 = state_12108__$1;
(statearr_12127_12211[(2)] = inst_12101);

(statearr_12127_12211[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12109 === (6))){
var inst_12090 = (state_12108[(2)]);
var state_12108__$1 = state_12108;
if(cljs.core.truth_(inst_12090)){
var statearr_12130_12212 = state_12108__$1;
(statearr_12130_12212[(1)] = (8));

} else {
var statearr_12133_12213 = state_12108__$1;
(statearr_12133_12213[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12109 === (3))){
var inst_12105 = (state_12108[(2)]);
var state_12108__$1 = state_12108;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12108__$1,inst_12105);
} else {
if((state_val_12109 === (12))){
var state_12108__$1 = state_12108;
var statearr_12137_12215 = state_12108__$1;
(statearr_12137_12215[(2)] = null);

(statearr_12137_12215[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12109 === (2))){
var inst_12082 = (state_12108[(7)]);
var state_12108__$1 = state_12108;
if(cljs.core.truth_(inst_12082)){
var statearr_12139_12216 = state_12108__$1;
(statearr_12139_12216[(1)] = (4));

} else {
var statearr_12140_12217 = state_12108__$1;
(statearr_12140_12217[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12109 === (11))){
var inst_12098 = cljs.core.async.close_BANG_.call(null,ch);
var state_12108__$1 = state_12108;
var statearr_12143_12227 = state_12108__$1;
(statearr_12143_12227[(2)] = inst_12098);

(statearr_12143_12227[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12109 === (9))){
var state_12108__$1 = state_12108;
if(cljs.core.truth_(close_QMARK_)){
var statearr_12146_12232 = state_12108__$1;
(statearr_12146_12232[(1)] = (11));

} else {
var statearr_12147_12233 = state_12108__$1;
(statearr_12147_12233[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12109 === (5))){
var inst_12082 = (state_12108[(7)]);
var state_12108__$1 = state_12108;
var statearr_12150_12234 = state_12108__$1;
(statearr_12150_12234[(2)] = inst_12082);

(statearr_12150_12234[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12109 === (10))){
var inst_12103 = (state_12108[(2)]);
var state_12108__$1 = state_12108;
var statearr_12153_12236 = state_12108__$1;
(statearr_12153_12236[(2)] = inst_12103);

(statearr_12153_12236[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12109 === (8))){
var inst_12082 = (state_12108[(7)]);
var inst_12092 = cljs.core.next.call(null,inst_12082);
var inst_12082__$1 = inst_12092;
var state_12108__$1 = (function (){var statearr_12156 = state_12108;
(statearr_12156[(7)] = inst_12082__$1);

return statearr_12156;
})();
var statearr_12158_12237 = state_12108__$1;
(statearr_12158_12237[(2)] = null);

(statearr_12158_12237[(1)] = (2));


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
var statearr_12163 = [null,null,null,null,null,null,null,null];
(statearr_12163[(0)] = cljs$core$async$state_machine__11191__auto__);

(statearr_12163[(1)] = (1));

return statearr_12163;
});
var cljs$core$async$state_machine__11191__auto____1 = (function (state_12108){
while(true){
var ret_value__11192__auto__ = (function (){try{while(true){
var result__11193__auto__ = switch__11190__auto__.call(null,state_12108);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11193__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11193__auto__;
}
break;
}
}catch (e12164){var ex__11194__auto__ = e12164;
var statearr_12165_12241 = state_12108;
(statearr_12165_12241[(2)] = ex__11194__auto__);


if(cljs.core.seq.call(null,(state_12108[(4)]))){
var statearr_12167_12246 = state_12108;
(statearr_12167_12246[(1)] = cljs.core.first.call(null,(state_12108[(4)])));

} else {
throw ex__11194__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11192__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12251 = state_12108;
state_12108 = G__12251;
continue;
} else {
return ret_value__11192__auto__;
}
break;
}
});
cljs$core$async$state_machine__11191__auto__ = function(state_12108){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__11191__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__11191__auto____1.call(this,state_12108);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__11191__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__11191__auto____0;
cljs$core$async$state_machine__11191__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__11191__auto____1;
return cljs$core$async$state_machine__11191__auto__;
})()
})();
var state__11395__auto__ = (function (){var statearr_12169 = f__11394__auto__.call(null);
(statearr_12169[(6)] = c__11393__auto__);

return statearr_12169;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11395__auto__);
}));

return c__11393__auto__;
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
var G__12179 = arguments.length;
switch (G__12179) {
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

var cljs$core$async$Mux$muxch_STAR_$dyn_12264 = (function (_){
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
return cljs$core$async$Mux$muxch_STAR_$dyn_12264.call(null,_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_12266 = (function (m,ch,close_QMARK_){
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
return cljs$core$async$Mult$tap_STAR_$dyn_12266.call(null,m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_12267 = (function (m,ch){
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
return cljs$core$async$Mult$untap_STAR_$dyn_12267.call(null,m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_12269 = (function (m){
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
return cljs$core$async$Mult$untap_all_STAR_$dyn_12269.call(null,m);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async12247 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async12247 = (function (ch,cs,meta12248){
this.ch = ch;
this.cs = cs;
this.meta12248 = meta12248;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async12247.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12249,meta12248__$1){
var self__ = this;
var _12249__$1 = this;
return (new cljs.core.async.t_cljs$core$async12247(self__.ch,self__.cs,meta12248__$1));
}));

(cljs.core.async.t_cljs$core$async12247.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12249){
var self__ = this;
var _12249__$1 = this;
return self__.meta12248;
}));

(cljs.core.async.t_cljs$core$async12247.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12247.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async12247.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12247.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async12247.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async12247.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async12247.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta12248","meta12248",-410605477,null)], null);
}));

(cljs.core.async.t_cljs$core$async12247.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async12247.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async12247");

(cljs.core.async.t_cljs$core$async12247.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write.call(null,writer__5288__auto__,"cljs.core.async/t_cljs$core$async12247");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async12247.
 */
cljs.core.async.__GT_t_cljs$core$async12247 = (function cljs$core$async$mult_$___GT_t_cljs$core$async12247(ch__$1,cs__$1,meta12248){
return (new cljs.core.async.t_cljs$core$async12247(ch__$1,cs__$1,meta12248));
});

}

return (new cljs.core.async.t_cljs$core$async12247(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__11393__auto___12567 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__11394__auto__ = (function (){var switch__11190__auto__ = (function (state_12440){
var state_val_12441 = (state_12440[(1)]);
if((state_val_12441 === (7))){
var inst_12424 = (state_12440[(2)]);
var state_12440__$1 = state_12440;
var statearr_12445_12568 = state_12440__$1;
(statearr_12445_12568[(2)] = inst_12424);

(statearr_12445_12568[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12441 === (20))){
var inst_12307 = (state_12440[(7)]);
var inst_12320 = cljs.core.first.call(null,inst_12307);
var inst_12322 = cljs.core.nth.call(null,inst_12320,(0),null);
var inst_12323 = cljs.core.nth.call(null,inst_12320,(1),null);
var state_12440__$1 = (function (){var statearr_12447 = state_12440;
(statearr_12447[(8)] = inst_12322);

return statearr_12447;
})();
if(cljs.core.truth_(inst_12323)){
var statearr_12448_12569 = state_12440__$1;
(statearr_12448_12569[(1)] = (22));

} else {
var statearr_12449_12570 = state_12440__$1;
(statearr_12449_12570[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12441 === (27))){
var inst_12351 = (state_12440[(9)]);
var inst_12353 = (state_12440[(10)]);
var inst_12358 = (state_12440[(11)]);
var inst_12271 = (state_12440[(12)]);
var inst_12358__$1 = cljs.core._nth.call(null,inst_12351,inst_12353);
var inst_12359 = cljs.core.async.put_BANG_.call(null,inst_12358__$1,inst_12271,done);
var state_12440__$1 = (function (){var statearr_12451 = state_12440;
(statearr_12451[(11)] = inst_12358__$1);

return statearr_12451;
})();
if(cljs.core.truth_(inst_12359)){
var statearr_12452_12571 = state_12440__$1;
(statearr_12452_12571[(1)] = (30));

} else {
var statearr_12453_12572 = state_12440__$1;
(statearr_12453_12572[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12441 === (1))){
var state_12440__$1 = state_12440;
var statearr_12459_12573 = state_12440__$1;
(statearr_12459_12573[(2)] = null);

(statearr_12459_12573[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12441 === (24))){
var inst_12307 = (state_12440[(7)]);
var inst_12328 = (state_12440[(2)]);
var inst_12329 = cljs.core.next.call(null,inst_12307);
var inst_12284 = inst_12329;
var inst_12285 = null;
var inst_12286 = (0);
var inst_12287 = (0);
var state_12440__$1 = (function (){var statearr_12460 = state_12440;
(statearr_12460[(13)] = inst_12328);

(statearr_12460[(14)] = inst_12284);

(statearr_12460[(15)] = inst_12285);

(statearr_12460[(16)] = inst_12286);

(statearr_12460[(17)] = inst_12287);

return statearr_12460;
})();
var statearr_12461_12574 = state_12440__$1;
(statearr_12461_12574[(2)] = null);

(statearr_12461_12574[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12441 === (39))){
var state_12440__$1 = state_12440;
var statearr_12465_12575 = state_12440__$1;
(statearr_12465_12575[(2)] = null);

(statearr_12465_12575[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12441 === (4))){
var inst_12271 = (state_12440[(12)]);
var inst_12271__$1 = (state_12440[(2)]);
var inst_12272 = (inst_12271__$1 == null);
var state_12440__$1 = (function (){var statearr_12468 = state_12440;
(statearr_12468[(12)] = inst_12271__$1);

return statearr_12468;
})();
if(cljs.core.truth_(inst_12272)){
var statearr_12469_12579 = state_12440__$1;
(statearr_12469_12579[(1)] = (5));

} else {
var statearr_12470_12580 = state_12440__$1;
(statearr_12470_12580[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12441 === (15))){
var inst_12287 = (state_12440[(17)]);
var inst_12284 = (state_12440[(14)]);
var inst_12285 = (state_12440[(15)]);
var inst_12286 = (state_12440[(16)]);
var inst_12303 = (state_12440[(2)]);
var inst_12304 = (inst_12287 + (1));
var tmp12462 = inst_12286;
var tmp12463 = inst_12285;
var tmp12464 = inst_12284;
var inst_12284__$1 = tmp12464;
var inst_12285__$1 = tmp12463;
var inst_12286__$1 = tmp12462;
var inst_12287__$1 = inst_12304;
var state_12440__$1 = (function (){var statearr_12471 = state_12440;
(statearr_12471[(18)] = inst_12303);

(statearr_12471[(14)] = inst_12284__$1);

(statearr_12471[(15)] = inst_12285__$1);

(statearr_12471[(16)] = inst_12286__$1);

(statearr_12471[(17)] = inst_12287__$1);

return statearr_12471;
})();
var statearr_12472_12581 = state_12440__$1;
(statearr_12472_12581[(2)] = null);

(statearr_12472_12581[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12441 === (21))){
var inst_12332 = (state_12440[(2)]);
var state_12440__$1 = state_12440;
var statearr_12476_12582 = state_12440__$1;
(statearr_12476_12582[(2)] = inst_12332);

(statearr_12476_12582[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12441 === (31))){
var inst_12358 = (state_12440[(11)]);
var inst_12362 = cljs.core.async.untap_STAR_.call(null,m,inst_12358);
var state_12440__$1 = state_12440;
var statearr_12477_12583 = state_12440__$1;
(statearr_12477_12583[(2)] = inst_12362);

(statearr_12477_12583[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12441 === (32))){
var inst_12353 = (state_12440[(10)]);
var inst_12350 = (state_12440[(19)]);
var inst_12351 = (state_12440[(9)]);
var inst_12352 = (state_12440[(20)]);
var inst_12364 = (state_12440[(2)]);
var inst_12365 = (inst_12353 + (1));
var tmp12473 = inst_12352;
var tmp12474 = inst_12351;
var tmp12475 = inst_12350;
var inst_12350__$1 = tmp12475;
var inst_12351__$1 = tmp12474;
var inst_12352__$1 = tmp12473;
var inst_12353__$1 = inst_12365;
var state_12440__$1 = (function (){var statearr_12478 = state_12440;
(statearr_12478[(21)] = inst_12364);

(statearr_12478[(19)] = inst_12350__$1);

(statearr_12478[(9)] = inst_12351__$1);

(statearr_12478[(20)] = inst_12352__$1);

(statearr_12478[(10)] = inst_12353__$1);

return statearr_12478;
})();
var statearr_12479_12587 = state_12440__$1;
(statearr_12479_12587[(2)] = null);

(statearr_12479_12587[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12441 === (40))){
var inst_12377 = (state_12440[(22)]);
var inst_12388 = cljs.core.async.untap_STAR_.call(null,m,inst_12377);
var state_12440__$1 = state_12440;
var statearr_12481_12588 = state_12440__$1;
(statearr_12481_12588[(2)] = inst_12388);

(statearr_12481_12588[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12441 === (33))){
var inst_12368 = (state_12440[(23)]);
var inst_12370 = cljs.core.chunked_seq_QMARK_.call(null,inst_12368);
var state_12440__$1 = state_12440;
if(inst_12370){
var statearr_12482_12589 = state_12440__$1;
(statearr_12482_12589[(1)] = (36));

} else {
var statearr_12483_12590 = state_12440__$1;
(statearr_12483_12590[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12441 === (13))){
var inst_12297 = (state_12440[(24)]);
var inst_12300 = cljs.core.async.close_BANG_.call(null,inst_12297);
var state_12440__$1 = state_12440;
var statearr_12484_12591 = state_12440__$1;
(statearr_12484_12591[(2)] = inst_12300);

(statearr_12484_12591[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12441 === (22))){
var inst_12322 = (state_12440[(8)]);
var inst_12325 = cljs.core.async.close_BANG_.call(null,inst_12322);
var state_12440__$1 = state_12440;
var statearr_12485_12592 = state_12440__$1;
(statearr_12485_12592[(2)] = inst_12325);

(statearr_12485_12592[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12441 === (36))){
var inst_12368 = (state_12440[(23)]);
var inst_12372 = cljs.core.chunk_first.call(null,inst_12368);
var inst_12373 = cljs.core.chunk_rest.call(null,inst_12368);
var inst_12374 = cljs.core.count.call(null,inst_12372);
var inst_12350 = inst_12373;
var inst_12351 = inst_12372;
var inst_12352 = inst_12374;
var inst_12353 = (0);
var state_12440__$1 = (function (){var statearr_12486 = state_12440;
(statearr_12486[(19)] = inst_12350);

(statearr_12486[(9)] = inst_12351);

(statearr_12486[(20)] = inst_12352);

(statearr_12486[(10)] = inst_12353);

return statearr_12486;
})();
var statearr_12487_12602 = state_12440__$1;
(statearr_12487_12602[(2)] = null);

(statearr_12487_12602[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12441 === (41))){
var inst_12368 = (state_12440[(23)]);
var inst_12390 = (state_12440[(2)]);
var inst_12391 = cljs.core.next.call(null,inst_12368);
var inst_12350 = inst_12391;
var inst_12351 = null;
var inst_12352 = (0);
var inst_12353 = (0);
var state_12440__$1 = (function (){var statearr_12489 = state_12440;
(statearr_12489[(25)] = inst_12390);

(statearr_12489[(19)] = inst_12350);

(statearr_12489[(9)] = inst_12351);

(statearr_12489[(20)] = inst_12352);

(statearr_12489[(10)] = inst_12353);

return statearr_12489;
})();
var statearr_12490_12611 = state_12440__$1;
(statearr_12490_12611[(2)] = null);

(statearr_12490_12611[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12441 === (43))){
var state_12440__$1 = state_12440;
var statearr_12491_12614 = state_12440__$1;
(statearr_12491_12614[(2)] = null);

(statearr_12491_12614[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12441 === (29))){
var inst_12405 = (state_12440[(2)]);
var state_12440__$1 = state_12440;
var statearr_12495_12620 = state_12440__$1;
(statearr_12495_12620[(2)] = inst_12405);

(statearr_12495_12620[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12441 === (44))){
var inst_12421 = (state_12440[(2)]);
var state_12440__$1 = (function (){var statearr_12496 = state_12440;
(statearr_12496[(26)] = inst_12421);

return statearr_12496;
})();
var statearr_12497_12625 = state_12440__$1;
(statearr_12497_12625[(2)] = null);

(statearr_12497_12625[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12441 === (6))){
var inst_12342 = (state_12440[(27)]);
var inst_12341 = cljs.core.deref.call(null,cs);
var inst_12342__$1 = cljs.core.keys.call(null,inst_12341);
var inst_12343 = cljs.core.count.call(null,inst_12342__$1);
var inst_12344 = cljs.core.reset_BANG_.call(null,dctr,inst_12343);
var inst_12349 = cljs.core.seq.call(null,inst_12342__$1);
var inst_12350 = inst_12349;
var inst_12351 = null;
var inst_12352 = (0);
var inst_12353 = (0);
var state_12440__$1 = (function (){var statearr_12498 = state_12440;
(statearr_12498[(27)] = inst_12342__$1);

(statearr_12498[(28)] = inst_12344);

(statearr_12498[(19)] = inst_12350);

(statearr_12498[(9)] = inst_12351);

(statearr_12498[(20)] = inst_12352);

(statearr_12498[(10)] = inst_12353);

return statearr_12498;
})();
var statearr_12499_12635 = state_12440__$1;
(statearr_12499_12635[(2)] = null);

(statearr_12499_12635[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12441 === (28))){
var inst_12350 = (state_12440[(19)]);
var inst_12368 = (state_12440[(23)]);
var inst_12368__$1 = cljs.core.seq.call(null,inst_12350);
var state_12440__$1 = (function (){var statearr_12500 = state_12440;
(statearr_12500[(23)] = inst_12368__$1);

return statearr_12500;
})();
if(inst_12368__$1){
var statearr_12501_12636 = state_12440__$1;
(statearr_12501_12636[(1)] = (33));

} else {
var statearr_12502_12637 = state_12440__$1;
(statearr_12502_12637[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12441 === (25))){
var inst_12353 = (state_12440[(10)]);
var inst_12352 = (state_12440[(20)]);
var inst_12355 = (inst_12353 < inst_12352);
var inst_12356 = inst_12355;
var state_12440__$1 = state_12440;
if(cljs.core.truth_(inst_12356)){
var statearr_12503_12638 = state_12440__$1;
(statearr_12503_12638[(1)] = (27));

} else {
var statearr_12504_12639 = state_12440__$1;
(statearr_12504_12639[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12441 === (34))){
var state_12440__$1 = state_12440;
var statearr_12505_12640 = state_12440__$1;
(statearr_12505_12640[(2)] = null);

(statearr_12505_12640[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12441 === (17))){
var state_12440__$1 = state_12440;
var statearr_12506_12641 = state_12440__$1;
(statearr_12506_12641[(2)] = null);

(statearr_12506_12641[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12441 === (3))){
var inst_12426 = (state_12440[(2)]);
var state_12440__$1 = state_12440;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12440__$1,inst_12426);
} else {
if((state_val_12441 === (12))){
var inst_12337 = (state_12440[(2)]);
var state_12440__$1 = state_12440;
var statearr_12508_12642 = state_12440__$1;
(statearr_12508_12642[(2)] = inst_12337);

(statearr_12508_12642[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12441 === (2))){
var state_12440__$1 = state_12440;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12440__$1,(4),ch);
} else {
if((state_val_12441 === (23))){
var state_12440__$1 = state_12440;
var statearr_12514_12643 = state_12440__$1;
(statearr_12514_12643[(2)] = null);

(statearr_12514_12643[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12441 === (35))){
var inst_12403 = (state_12440[(2)]);
var state_12440__$1 = state_12440;
var statearr_12515_12644 = state_12440__$1;
(statearr_12515_12644[(2)] = inst_12403);

(statearr_12515_12644[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12441 === (19))){
var inst_12307 = (state_12440[(7)]);
var inst_12312 = cljs.core.chunk_first.call(null,inst_12307);
var inst_12313 = cljs.core.chunk_rest.call(null,inst_12307);
var inst_12314 = cljs.core.count.call(null,inst_12312);
var inst_12284 = inst_12313;
var inst_12285 = inst_12312;
var inst_12286 = inst_12314;
var inst_12287 = (0);
var state_12440__$1 = (function (){var statearr_12517 = state_12440;
(statearr_12517[(14)] = inst_12284);

(statearr_12517[(15)] = inst_12285);

(statearr_12517[(16)] = inst_12286);

(statearr_12517[(17)] = inst_12287);

return statearr_12517;
})();
var statearr_12518_12645 = state_12440__$1;
(statearr_12518_12645[(2)] = null);

(statearr_12518_12645[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12441 === (11))){
var inst_12284 = (state_12440[(14)]);
var inst_12307 = (state_12440[(7)]);
var inst_12307__$1 = cljs.core.seq.call(null,inst_12284);
var state_12440__$1 = (function (){var statearr_12519 = state_12440;
(statearr_12519[(7)] = inst_12307__$1);

return statearr_12519;
})();
if(inst_12307__$1){
var statearr_12520_12646 = state_12440__$1;
(statearr_12520_12646[(1)] = (16));

} else {
var statearr_12521_12647 = state_12440__$1;
(statearr_12521_12647[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12441 === (9))){
var inst_12339 = (state_12440[(2)]);
var state_12440__$1 = state_12440;
var statearr_12523_12648 = state_12440__$1;
(statearr_12523_12648[(2)] = inst_12339);

(statearr_12523_12648[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12441 === (5))){
var inst_12282 = cljs.core.deref.call(null,cs);
var inst_12283 = cljs.core.seq.call(null,inst_12282);
var inst_12284 = inst_12283;
var inst_12285 = null;
var inst_12286 = (0);
var inst_12287 = (0);
var state_12440__$1 = (function (){var statearr_12525 = state_12440;
(statearr_12525[(14)] = inst_12284);

(statearr_12525[(15)] = inst_12285);

(statearr_12525[(16)] = inst_12286);

(statearr_12525[(17)] = inst_12287);

return statearr_12525;
})();
var statearr_12526_12649 = state_12440__$1;
(statearr_12526_12649[(2)] = null);

(statearr_12526_12649[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12441 === (14))){
var state_12440__$1 = state_12440;
var statearr_12527_12650 = state_12440__$1;
(statearr_12527_12650[(2)] = null);

(statearr_12527_12650[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12441 === (45))){
var inst_12418 = (state_12440[(2)]);
var state_12440__$1 = state_12440;
var statearr_12528_12651 = state_12440__$1;
(statearr_12528_12651[(2)] = inst_12418);

(statearr_12528_12651[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12441 === (26))){
var inst_12342 = (state_12440[(27)]);
var inst_12407 = (state_12440[(2)]);
var inst_12408 = cljs.core.seq.call(null,inst_12342);
var state_12440__$1 = (function (){var statearr_12529 = state_12440;
(statearr_12529[(29)] = inst_12407);

return statearr_12529;
})();
if(inst_12408){
var statearr_12534_12652 = state_12440__$1;
(statearr_12534_12652[(1)] = (42));

} else {
var statearr_12535_12653 = state_12440__$1;
(statearr_12535_12653[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12441 === (16))){
var inst_12307 = (state_12440[(7)]);
var inst_12309 = cljs.core.chunked_seq_QMARK_.call(null,inst_12307);
var state_12440__$1 = state_12440;
if(inst_12309){
var statearr_12540_12654 = state_12440__$1;
(statearr_12540_12654[(1)] = (19));

} else {
var statearr_12541_12655 = state_12440__$1;
(statearr_12541_12655[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12441 === (38))){
var inst_12400 = (state_12440[(2)]);
var state_12440__$1 = state_12440;
var statearr_12542_12656 = state_12440__$1;
(statearr_12542_12656[(2)] = inst_12400);

(statearr_12542_12656[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12441 === (30))){
var state_12440__$1 = state_12440;
var statearr_12543_12657 = state_12440__$1;
(statearr_12543_12657[(2)] = null);

(statearr_12543_12657[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12441 === (10))){
var inst_12285 = (state_12440[(15)]);
var inst_12287 = (state_12440[(17)]);
var inst_12296 = cljs.core._nth.call(null,inst_12285,inst_12287);
var inst_12297 = cljs.core.nth.call(null,inst_12296,(0),null);
var inst_12298 = cljs.core.nth.call(null,inst_12296,(1),null);
var state_12440__$1 = (function (){var statearr_12544 = state_12440;
(statearr_12544[(24)] = inst_12297);

return statearr_12544;
})();
if(cljs.core.truth_(inst_12298)){
var statearr_12548_12658 = state_12440__$1;
(statearr_12548_12658[(1)] = (13));

} else {
var statearr_12549_12659 = state_12440__$1;
(statearr_12549_12659[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12441 === (18))){
var inst_12335 = (state_12440[(2)]);
var state_12440__$1 = state_12440;
var statearr_12550_12660 = state_12440__$1;
(statearr_12550_12660[(2)] = inst_12335);

(statearr_12550_12660[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12441 === (42))){
var state_12440__$1 = state_12440;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12440__$1,(45),dchan);
} else {
if((state_val_12441 === (37))){
var inst_12368 = (state_12440[(23)]);
var inst_12377 = (state_12440[(22)]);
var inst_12271 = (state_12440[(12)]);
var inst_12377__$1 = cljs.core.first.call(null,inst_12368);
var inst_12385 = cljs.core.async.put_BANG_.call(null,inst_12377__$1,inst_12271,done);
var state_12440__$1 = (function (){var statearr_12551 = state_12440;
(statearr_12551[(22)] = inst_12377__$1);

return statearr_12551;
})();
if(cljs.core.truth_(inst_12385)){
var statearr_12552_12661 = state_12440__$1;
(statearr_12552_12661[(1)] = (39));

} else {
var statearr_12553_12662 = state_12440__$1;
(statearr_12553_12662[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12441 === (8))){
var inst_12287 = (state_12440[(17)]);
var inst_12286 = (state_12440[(16)]);
var inst_12290 = (inst_12287 < inst_12286);
var inst_12291 = inst_12290;
var state_12440__$1 = state_12440;
if(cljs.core.truth_(inst_12291)){
var statearr_12554_12663 = state_12440__$1;
(statearr_12554_12663[(1)] = (10));

} else {
var statearr_12555_12664 = state_12440__$1;
(statearr_12555_12664[(1)] = (11));

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
var statearr_12556 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12556[(0)] = cljs$core$async$mult_$_state_machine__11191__auto__);

(statearr_12556[(1)] = (1));

return statearr_12556;
});
var cljs$core$async$mult_$_state_machine__11191__auto____1 = (function (state_12440){
while(true){
var ret_value__11192__auto__ = (function (){try{while(true){
var result__11193__auto__ = switch__11190__auto__.call(null,state_12440);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11193__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11193__auto__;
}
break;
}
}catch (e12557){var ex__11194__auto__ = e12557;
var statearr_12560_12665 = state_12440;
(statearr_12560_12665[(2)] = ex__11194__auto__);


if(cljs.core.seq.call(null,(state_12440[(4)]))){
var statearr_12563_12666 = state_12440;
(statearr_12563_12666[(1)] = cljs.core.first.call(null,(state_12440[(4)])));

} else {
throw ex__11194__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11192__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12667 = state_12440;
state_12440 = G__12667;
continue;
} else {
return ret_value__11192__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__11191__auto__ = function(state_12440){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__11191__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__11191__auto____1.call(this,state_12440);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__11191__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__11191__auto____0;
cljs$core$async$mult_$_state_machine__11191__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__11191__auto____1;
return cljs$core$async$mult_$_state_machine__11191__auto__;
})()
})();
var state__11395__auto__ = (function (){var statearr_12564 = f__11394__auto__.call(null);
(statearr_12564[(6)] = c__11393__auto___12567);

return statearr_12564;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11395__auto__);
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
var G__12566 = arguments.length;
switch (G__12566) {
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

var cljs$core$async$Mix$admix_STAR_$dyn_12669 = (function (m,ch){
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
return cljs$core$async$Mix$admix_STAR_$dyn_12669.call(null,m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_12670 = (function (m,ch){
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
return cljs$core$async$Mix$unmix_STAR_$dyn_12670.call(null,m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_12675 = (function (m){
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
return cljs$core$async$Mix$unmix_all_STAR_$dyn_12675.call(null,m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_12676 = (function (m,state_map){
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
return cljs$core$async$Mix$toggle_STAR_$dyn_12676.call(null,m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_12677 = (function (m,mode){
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
return cljs$core$async$Mix$solo_mode_STAR_$dyn_12677.call(null,m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__5732__auto__ = [];
var len__5726__auto___12683 = arguments.length;
var i__5727__auto___12684 = (0);
while(true){
if((i__5727__auto___12684 < len__5726__auto___12683)){
args__5732__auto__.push((arguments[i__5727__auto___12684]));

var G__12685 = (i__5727__auto___12684 + (1));
i__5727__auto___12684 = G__12685;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((3) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5733__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__12678){
var map__12679 = p__12678;
var map__12679__$1 = cljs.core.__destructure_map.call(null,map__12679);
var opts = map__12679__$1;
var statearr_12680_12686 = state;
(statearr_12680_12686[(1)] = cont_block);


var temp__5804__auto__ = cljs.core.async.do_alts.call(null,(function (val){
var statearr_12681_12687 = state;
(statearr_12681_12687[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
}),ports,opts);
if(cljs.core.truth_(temp__5804__auto__)){
var cb = temp__5804__auto__;
var statearr_12682_12688 = state;
(statearr_12682_12688[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq12671){
var G__12672 = cljs.core.first.call(null,seq12671);
var seq12671__$1 = cljs.core.next.call(null,seq12671);
var G__12673 = cljs.core.first.call(null,seq12671__$1);
var seq12671__$2 = cljs.core.next.call(null,seq12671__$1);
var G__12674 = cljs.core.first.call(null,seq12671__$2);
var seq12671__$3 = cljs.core.next.call(null,seq12671__$2);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__12672,G__12673,G__12674,seq12671__$3);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async12689 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async12689 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta12690){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta12690 = meta12690;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async12689.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12691,meta12690__$1){
var self__ = this;
var _12691__$1 = this;
return (new cljs.core.async.t_cljs$core$async12689(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta12690__$1));
}));

(cljs.core.async.t_cljs$core$async12689.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12691){
var self__ = this;
var _12691__$1 = this;
return self__.meta12690;
}));

(cljs.core.async.t_cljs$core$async12689.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12689.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async12689.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12689.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async12689.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async12689.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async12689.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async12689.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async12689.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta12690","meta12690",185543728,null)], null);
}));

(cljs.core.async.t_cljs$core$async12689.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async12689.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async12689");

(cljs.core.async.t_cljs$core$async12689.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write.call(null,writer__5288__auto__,"cljs.core.async/t_cljs$core$async12689");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async12689.
 */
cljs.core.async.__GT_t_cljs$core$async12689 = (function cljs$core$async$mix_$___GT_t_cljs$core$async12689(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta12690){
return (new cljs.core.async.t_cljs$core$async12689(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta12690));
});

}

return (new cljs.core.async.t_cljs$core$async12689(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__11393__auto___12891 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__11394__auto__ = (function (){var switch__11190__auto__ = (function (state_12772){
var state_val_12773 = (state_12772[(1)]);
if((state_val_12773 === (7))){
var inst_12729 = (state_12772[(2)]);
var state_12772__$1 = state_12772;
if(cljs.core.truth_(inst_12729)){
var statearr_12774_12895 = state_12772__$1;
(statearr_12774_12895[(1)] = (8));

} else {
var statearr_12775_12896 = state_12772__$1;
(statearr_12775_12896[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12773 === (20))){
var inst_12721 = (state_12772[(7)]);
var state_12772__$1 = state_12772;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12772__$1,(23),out,inst_12721);
} else {
if((state_val_12773 === (1))){
var inst_12702 = calc_state.call(null);
var inst_12703 = cljs.core.__destructure_map.call(null,inst_12702);
var inst_12704 = cljs.core.get.call(null,inst_12703,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_12705 = cljs.core.get.call(null,inst_12703,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_12706 = cljs.core.get.call(null,inst_12703,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_12707 = inst_12702;
var state_12772__$1 = (function (){var statearr_12778 = state_12772;
(statearr_12778[(8)] = inst_12704);

(statearr_12778[(9)] = inst_12705);

(statearr_12778[(10)] = inst_12706);

(statearr_12778[(11)] = inst_12707);

return statearr_12778;
})();
var statearr_12780_12903 = state_12772__$1;
(statearr_12780_12903[(2)] = null);

(statearr_12780_12903[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12773 === (24))){
var inst_12710 = (state_12772[(12)]);
var inst_12707 = inst_12710;
var state_12772__$1 = (function (){var statearr_12781 = state_12772;
(statearr_12781[(11)] = inst_12707);

return statearr_12781;
})();
var statearr_12782_12907 = state_12772__$1;
(statearr_12782_12907[(2)] = null);

(statearr_12782_12907[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12773 === (4))){
var inst_12721 = (state_12772[(7)]);
var inst_12724 = (state_12772[(13)]);
var inst_12720 = (state_12772[(2)]);
var inst_12721__$1 = cljs.core.nth.call(null,inst_12720,(0),null);
var inst_12723 = cljs.core.nth.call(null,inst_12720,(1),null);
var inst_12724__$1 = (inst_12721__$1 == null);
var state_12772__$1 = (function (){var statearr_12783 = state_12772;
(statearr_12783[(7)] = inst_12721__$1);

(statearr_12783[(14)] = inst_12723);

(statearr_12783[(13)] = inst_12724__$1);

return statearr_12783;
})();
if(cljs.core.truth_(inst_12724__$1)){
var statearr_12788_12908 = state_12772__$1;
(statearr_12788_12908[(1)] = (5));

} else {
var statearr_12797_12909 = state_12772__$1;
(statearr_12797_12909[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12773 === (15))){
var inst_12711 = (state_12772[(15)]);
var inst_12743 = (state_12772[(16)]);
var inst_12743__$1 = cljs.core.empty_QMARK_.call(null,inst_12711);
var state_12772__$1 = (function (){var statearr_12798 = state_12772;
(statearr_12798[(16)] = inst_12743__$1);

return statearr_12798;
})();
if(inst_12743__$1){
var statearr_12800_12910 = state_12772__$1;
(statearr_12800_12910[(1)] = (17));

} else {
var statearr_12801_12911 = state_12772__$1;
(statearr_12801_12911[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12773 === (21))){
var inst_12710 = (state_12772[(12)]);
var inst_12707 = inst_12710;
var state_12772__$1 = (function (){var statearr_12802 = state_12772;
(statearr_12802[(11)] = inst_12707);

return statearr_12802;
})();
var statearr_12804_12912 = state_12772__$1;
(statearr_12804_12912[(2)] = null);

(statearr_12804_12912[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12773 === (13))){
var inst_12736 = (state_12772[(2)]);
var inst_12737 = calc_state.call(null);
var inst_12707 = inst_12737;
var state_12772__$1 = (function (){var statearr_12809 = state_12772;
(statearr_12809[(17)] = inst_12736);

(statearr_12809[(11)] = inst_12707);

return statearr_12809;
})();
var statearr_12810_12916 = state_12772__$1;
(statearr_12810_12916[(2)] = null);

(statearr_12810_12916[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12773 === (22))){
var inst_12763 = (state_12772[(2)]);
var state_12772__$1 = state_12772;
var statearr_12814_12917 = state_12772__$1;
(statearr_12814_12917[(2)] = inst_12763);

(statearr_12814_12917[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12773 === (6))){
var inst_12723 = (state_12772[(14)]);
var inst_12727 = cljs.core._EQ_.call(null,inst_12723,change);
var state_12772__$1 = state_12772;
var statearr_12821_12918 = state_12772__$1;
(statearr_12821_12918[(2)] = inst_12727);

(statearr_12821_12918[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12773 === (25))){
var state_12772__$1 = state_12772;
var statearr_12822_12919 = state_12772__$1;
(statearr_12822_12919[(2)] = null);

(statearr_12822_12919[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12773 === (17))){
var inst_12713 = (state_12772[(18)]);
var inst_12723 = (state_12772[(14)]);
var inst_12745 = inst_12713.call(null,inst_12723);
var inst_12746 = cljs.core.not.call(null,inst_12745);
var state_12772__$1 = state_12772;
var statearr_12823_12920 = state_12772__$1;
(statearr_12823_12920[(2)] = inst_12746);

(statearr_12823_12920[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12773 === (3))){
var inst_12769 = (state_12772[(2)]);
var state_12772__$1 = state_12772;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12772__$1,inst_12769);
} else {
if((state_val_12773 === (12))){
var state_12772__$1 = state_12772;
var statearr_12826_12921 = state_12772__$1;
(statearr_12826_12921[(2)] = null);

(statearr_12826_12921[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12773 === (2))){
var inst_12707 = (state_12772[(11)]);
var inst_12710 = (state_12772[(12)]);
var inst_12710__$1 = cljs.core.__destructure_map.call(null,inst_12707);
var inst_12711 = cljs.core.get.call(null,inst_12710__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_12713 = cljs.core.get.call(null,inst_12710__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_12714 = cljs.core.get.call(null,inst_12710__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_12772__$1 = (function (){var statearr_12827 = state_12772;
(statearr_12827[(12)] = inst_12710__$1);

(statearr_12827[(15)] = inst_12711);

(statearr_12827[(18)] = inst_12713);

return statearr_12827;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_12772__$1,(4),inst_12714);
} else {
if((state_val_12773 === (23))){
var inst_12754 = (state_12772[(2)]);
var state_12772__$1 = state_12772;
if(cljs.core.truth_(inst_12754)){
var statearr_12828_12922 = state_12772__$1;
(statearr_12828_12922[(1)] = (24));

} else {
var statearr_12831_12923 = state_12772__$1;
(statearr_12831_12923[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12773 === (19))){
var inst_12749 = (state_12772[(2)]);
var state_12772__$1 = state_12772;
var statearr_12833_12924 = state_12772__$1;
(statearr_12833_12924[(2)] = inst_12749);

(statearr_12833_12924[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12773 === (11))){
var inst_12723 = (state_12772[(14)]);
var inst_12733 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_12723);
var state_12772__$1 = state_12772;
var statearr_12834_12925 = state_12772__$1;
(statearr_12834_12925[(2)] = inst_12733);

(statearr_12834_12925[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12773 === (9))){
var inst_12711 = (state_12772[(15)]);
var inst_12723 = (state_12772[(14)]);
var inst_12740 = (state_12772[(19)]);
var inst_12740__$1 = inst_12711.call(null,inst_12723);
var state_12772__$1 = (function (){var statearr_12837 = state_12772;
(statearr_12837[(19)] = inst_12740__$1);

return statearr_12837;
})();
if(cljs.core.truth_(inst_12740__$1)){
var statearr_12839_12926 = state_12772__$1;
(statearr_12839_12926[(1)] = (14));

} else {
var statearr_12840_12927 = state_12772__$1;
(statearr_12840_12927[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12773 === (5))){
var inst_12724 = (state_12772[(13)]);
var state_12772__$1 = state_12772;
var statearr_12841_12928 = state_12772__$1;
(statearr_12841_12928[(2)] = inst_12724);

(statearr_12841_12928[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12773 === (14))){
var inst_12740 = (state_12772[(19)]);
var state_12772__$1 = state_12772;
var statearr_12842_12929 = state_12772__$1;
(statearr_12842_12929[(2)] = inst_12740);

(statearr_12842_12929[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12773 === (26))){
var inst_12759 = (state_12772[(2)]);
var state_12772__$1 = state_12772;
var statearr_12844_12930 = state_12772__$1;
(statearr_12844_12930[(2)] = inst_12759);

(statearr_12844_12930[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12773 === (16))){
var inst_12751 = (state_12772[(2)]);
var state_12772__$1 = state_12772;
if(cljs.core.truth_(inst_12751)){
var statearr_12845_12931 = state_12772__$1;
(statearr_12845_12931[(1)] = (20));

} else {
var statearr_12846_12932 = state_12772__$1;
(statearr_12846_12932[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12773 === (10))){
var inst_12766 = (state_12772[(2)]);
var state_12772__$1 = state_12772;
var statearr_12848_12933 = state_12772__$1;
(statearr_12848_12933[(2)] = inst_12766);

(statearr_12848_12933[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12773 === (18))){
var inst_12743 = (state_12772[(16)]);
var state_12772__$1 = state_12772;
var statearr_12849_12934 = state_12772__$1;
(statearr_12849_12934[(2)] = inst_12743);

(statearr_12849_12934[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12773 === (8))){
var inst_12721 = (state_12772[(7)]);
var inst_12731 = (inst_12721 == null);
var state_12772__$1 = state_12772;
if(cljs.core.truth_(inst_12731)){
var statearr_12850_12935 = state_12772__$1;
(statearr_12850_12935[(1)] = (11));

} else {
var statearr_12851_12936 = state_12772__$1;
(statearr_12851_12936[(1)] = (12));

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
var statearr_12858 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12858[(0)] = cljs$core$async$mix_$_state_machine__11191__auto__);

(statearr_12858[(1)] = (1));

return statearr_12858;
});
var cljs$core$async$mix_$_state_machine__11191__auto____1 = (function (state_12772){
while(true){
var ret_value__11192__auto__ = (function (){try{while(true){
var result__11193__auto__ = switch__11190__auto__.call(null,state_12772);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11193__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11193__auto__;
}
break;
}
}catch (e12859){var ex__11194__auto__ = e12859;
var statearr_12860_12939 = state_12772;
(statearr_12860_12939[(2)] = ex__11194__auto__);


if(cljs.core.seq.call(null,(state_12772[(4)]))){
var statearr_12861_12940 = state_12772;
(statearr_12861_12940[(1)] = cljs.core.first.call(null,(state_12772[(4)])));

} else {
throw ex__11194__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11192__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12941 = state_12772;
state_12772 = G__12941;
continue;
} else {
return ret_value__11192__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__11191__auto__ = function(state_12772){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__11191__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__11191__auto____1.call(this,state_12772);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__11191__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__11191__auto____0;
cljs$core$async$mix_$_state_machine__11191__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__11191__auto____1;
return cljs$core$async$mix_$_state_machine__11191__auto__;
})()
})();
var state__11395__auto__ = (function (){var statearr_12872 = f__11394__auto__.call(null);
(statearr_12872[(6)] = c__11393__auto___12891);

return statearr_12872;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11395__auto__);
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

var cljs$core$async$Pub$sub_STAR_$dyn_12946 = (function (p,v,ch,close_QMARK_){
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
return cljs$core$async$Pub$sub_STAR_$dyn_12946.call(null,p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_12952 = (function (p,v,ch){
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
return cljs$core$async$Pub$unsub_STAR_$dyn_12952.call(null,p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_12953 = (function() {
var G__12954 = null;
var G__12954__1 = (function (p){
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
var G__12954__2 = (function (p,v){
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
G__12954 = function(p,v){
switch(arguments.length){
case 1:
return G__12954__1.call(this,p);
case 2:
return G__12954__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__12954.cljs$core$IFn$_invoke$arity$1 = G__12954__1;
G__12954.cljs$core$IFn$_invoke$arity$2 = G__12954__2;
return G__12954;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__12945 = arguments.length;
switch (G__12945) {
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
return cljs$core$async$Pub$unsub_all_STAR_$dyn_12953.call(null,p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_12953.call(null,p,v);
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
var G__12951 = arguments.length;
switch (G__12951) {
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
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,(function (p1__12947_SHARP_){
if(cljs.core.truth_(p1__12947_SHARP_.call(null,topic))){
return p1__12947_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__12947_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async12958 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async12958 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta12959){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta12959 = meta12959;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async12958.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12960,meta12959__$1){
var self__ = this;
var _12960__$1 = this;
return (new cljs.core.async.t_cljs$core$async12958(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta12959__$1));
}));

(cljs.core.async.t_cljs$core$async12958.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12960){
var self__ = this;
var _12960__$1 = this;
return self__.meta12959;
}));

(cljs.core.async.t_cljs$core$async12958.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12958.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async12958.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12958.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async12958.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
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

(cljs.core.async.t_cljs$core$async12958.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async12958.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async12958.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta12959","meta12959",445025957,null)], null);
}));

(cljs.core.async.t_cljs$core$async12958.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async12958.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async12958");

(cljs.core.async.t_cljs$core$async12958.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write.call(null,writer__5288__auto__,"cljs.core.async/t_cljs$core$async12958");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async12958.
 */
cljs.core.async.__GT_t_cljs$core$async12958 = (function cljs$core$async$__GT_t_cljs$core$async12958(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta12959){
return (new cljs.core.async.t_cljs$core$async12958(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta12959));
});

}

return (new cljs.core.async.t_cljs$core$async12958(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__11393__auto___13141 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__11394__auto__ = (function (){var switch__11190__auto__ = (function (state_13058){
var state_val_13063 = (state_13058[(1)]);
if((state_val_13063 === (7))){
var inst_13053 = (state_13058[(2)]);
var state_13058__$1 = state_13058;
var statearr_13068_13142 = state_13058__$1;
(statearr_13068_13142[(2)] = inst_13053);

(statearr_13068_13142[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13063 === (20))){
var state_13058__$1 = state_13058;
var statearr_13069_13143 = state_13058__$1;
(statearr_13069_13143[(2)] = null);

(statearr_13069_13143[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13063 === (1))){
var state_13058__$1 = state_13058;
var statearr_13070_13144 = state_13058__$1;
(statearr_13070_13144[(2)] = null);

(statearr_13070_13144[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13063 === (24))){
var inst_13036 = (state_13058[(7)]);
var inst_13045 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_13036);
var state_13058__$1 = state_13058;
var statearr_13071_13145 = state_13058__$1;
(statearr_13071_13145[(2)] = inst_13045);

(statearr_13071_13145[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13063 === (4))){
var inst_12982 = (state_13058[(8)]);
var inst_12982__$1 = (state_13058[(2)]);
var inst_12983 = (inst_12982__$1 == null);
var state_13058__$1 = (function (){var statearr_13072 = state_13058;
(statearr_13072[(8)] = inst_12982__$1);

return statearr_13072;
})();
if(cljs.core.truth_(inst_12983)){
var statearr_13074_13146 = state_13058__$1;
(statearr_13074_13146[(1)] = (5));

} else {
var statearr_13076_13147 = state_13058__$1;
(statearr_13076_13147[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13063 === (15))){
var inst_13030 = (state_13058[(2)]);
var state_13058__$1 = state_13058;
var statearr_13079_13148 = state_13058__$1;
(statearr_13079_13148[(2)] = inst_13030);

(statearr_13079_13148[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13063 === (21))){
var inst_13050 = (state_13058[(2)]);
var state_13058__$1 = (function (){var statearr_13080 = state_13058;
(statearr_13080[(9)] = inst_13050);

return statearr_13080;
})();
var statearr_13081_13149 = state_13058__$1;
(statearr_13081_13149[(2)] = null);

(statearr_13081_13149[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13063 === (13))){
var inst_13012 = (state_13058[(10)]);
var inst_13014 = cljs.core.chunked_seq_QMARK_.call(null,inst_13012);
var state_13058__$1 = state_13058;
if(inst_13014){
var statearr_13082_13151 = state_13058__$1;
(statearr_13082_13151[(1)] = (16));

} else {
var statearr_13083_13152 = state_13058__$1;
(statearr_13083_13152[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13063 === (22))){
var inst_13042 = (state_13058[(2)]);
var state_13058__$1 = state_13058;
if(cljs.core.truth_(inst_13042)){
var statearr_13084_13154 = state_13058__$1;
(statearr_13084_13154[(1)] = (23));

} else {
var statearr_13085_13155 = state_13058__$1;
(statearr_13085_13155[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13063 === (6))){
var inst_12982 = (state_13058[(8)]);
var inst_13036 = (state_13058[(7)]);
var inst_13038 = (state_13058[(11)]);
var inst_13036__$1 = topic_fn.call(null,inst_12982);
var inst_13037 = cljs.core.deref.call(null,mults);
var inst_13038__$1 = cljs.core.get.call(null,inst_13037,inst_13036__$1);
var state_13058__$1 = (function (){var statearr_13088 = state_13058;
(statearr_13088[(7)] = inst_13036__$1);

(statearr_13088[(11)] = inst_13038__$1);

return statearr_13088;
})();
if(cljs.core.truth_(inst_13038__$1)){
var statearr_13089_13156 = state_13058__$1;
(statearr_13089_13156[(1)] = (19));

} else {
var statearr_13090_13157 = state_13058__$1;
(statearr_13090_13157[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13063 === (25))){
var inst_13047 = (state_13058[(2)]);
var state_13058__$1 = state_13058;
var statearr_13091_13158 = state_13058__$1;
(statearr_13091_13158[(2)] = inst_13047);

(statearr_13091_13158[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13063 === (17))){
var inst_13012 = (state_13058[(10)]);
var inst_13021 = cljs.core.first.call(null,inst_13012);
var inst_13022 = cljs.core.async.muxch_STAR_.call(null,inst_13021);
var inst_13023 = cljs.core.async.close_BANG_.call(null,inst_13022);
var inst_13024 = cljs.core.next.call(null,inst_13012);
var inst_12997 = inst_13024;
var inst_12998 = null;
var inst_12999 = (0);
var inst_13000 = (0);
var state_13058__$1 = (function (){var statearr_13092 = state_13058;
(statearr_13092[(12)] = inst_13023);

(statearr_13092[(13)] = inst_12997);

(statearr_13092[(14)] = inst_12998);

(statearr_13092[(15)] = inst_12999);

(statearr_13092[(16)] = inst_13000);

return statearr_13092;
})();
var statearr_13093_13159 = state_13058__$1;
(statearr_13093_13159[(2)] = null);

(statearr_13093_13159[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13063 === (3))){
var inst_13055 = (state_13058[(2)]);
var state_13058__$1 = state_13058;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13058__$1,inst_13055);
} else {
if((state_val_13063 === (12))){
var inst_13032 = (state_13058[(2)]);
var state_13058__$1 = state_13058;
var statearr_13097_13162 = state_13058__$1;
(statearr_13097_13162[(2)] = inst_13032);

(statearr_13097_13162[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13063 === (2))){
var state_13058__$1 = state_13058;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13058__$1,(4),ch);
} else {
if((state_val_13063 === (23))){
var state_13058__$1 = state_13058;
var statearr_13098_13163 = state_13058__$1;
(statearr_13098_13163[(2)] = null);

(statearr_13098_13163[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13063 === (19))){
var inst_13038 = (state_13058[(11)]);
var inst_12982 = (state_13058[(8)]);
var inst_13040 = cljs.core.async.muxch_STAR_.call(null,inst_13038);
var state_13058__$1 = state_13058;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13058__$1,(22),inst_13040,inst_12982);
} else {
if((state_val_13063 === (11))){
var inst_12997 = (state_13058[(13)]);
var inst_13012 = (state_13058[(10)]);
var inst_13012__$1 = cljs.core.seq.call(null,inst_12997);
var state_13058__$1 = (function (){var statearr_13102 = state_13058;
(statearr_13102[(10)] = inst_13012__$1);

return statearr_13102;
})();
if(inst_13012__$1){
var statearr_13103_13165 = state_13058__$1;
(statearr_13103_13165[(1)] = (13));

} else {
var statearr_13104_13166 = state_13058__$1;
(statearr_13104_13166[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13063 === (9))){
var inst_13034 = (state_13058[(2)]);
var state_13058__$1 = state_13058;
var statearr_13105_13167 = state_13058__$1;
(statearr_13105_13167[(2)] = inst_13034);

(statearr_13105_13167[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13063 === (5))){
var inst_12993 = cljs.core.deref.call(null,mults);
var inst_12994 = cljs.core.vals.call(null,inst_12993);
var inst_12995 = cljs.core.seq.call(null,inst_12994);
var inst_12997 = inst_12995;
var inst_12998 = null;
var inst_12999 = (0);
var inst_13000 = (0);
var state_13058__$1 = (function (){var statearr_13106 = state_13058;
(statearr_13106[(13)] = inst_12997);

(statearr_13106[(14)] = inst_12998);

(statearr_13106[(15)] = inst_12999);

(statearr_13106[(16)] = inst_13000);

return statearr_13106;
})();
var statearr_13107_13168 = state_13058__$1;
(statearr_13107_13168[(2)] = null);

(statearr_13107_13168[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13063 === (14))){
var state_13058__$1 = state_13058;
var statearr_13111_13169 = state_13058__$1;
(statearr_13111_13169[(2)] = null);

(statearr_13111_13169[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13063 === (16))){
var inst_13012 = (state_13058[(10)]);
var inst_13016 = cljs.core.chunk_first.call(null,inst_13012);
var inst_13017 = cljs.core.chunk_rest.call(null,inst_13012);
var inst_13018 = cljs.core.count.call(null,inst_13016);
var inst_12997 = inst_13017;
var inst_12998 = inst_13016;
var inst_12999 = inst_13018;
var inst_13000 = (0);
var state_13058__$1 = (function (){var statearr_13112 = state_13058;
(statearr_13112[(13)] = inst_12997);

(statearr_13112[(14)] = inst_12998);

(statearr_13112[(15)] = inst_12999);

(statearr_13112[(16)] = inst_13000);

return statearr_13112;
})();
var statearr_13113_13170 = state_13058__$1;
(statearr_13113_13170[(2)] = null);

(statearr_13113_13170[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13063 === (10))){
var inst_12998 = (state_13058[(14)]);
var inst_13000 = (state_13058[(16)]);
var inst_12997 = (state_13058[(13)]);
var inst_12999 = (state_13058[(15)]);
var inst_13006 = cljs.core._nth.call(null,inst_12998,inst_13000);
var inst_13007 = cljs.core.async.muxch_STAR_.call(null,inst_13006);
var inst_13008 = cljs.core.async.close_BANG_.call(null,inst_13007);
var inst_13009 = (inst_13000 + (1));
var tmp13108 = inst_12998;
var tmp13109 = inst_12999;
var tmp13110 = inst_12997;
var inst_12997__$1 = tmp13110;
var inst_12998__$1 = tmp13108;
var inst_12999__$1 = tmp13109;
var inst_13000__$1 = inst_13009;
var state_13058__$1 = (function (){var statearr_13121 = state_13058;
(statearr_13121[(17)] = inst_13008);

(statearr_13121[(13)] = inst_12997__$1);

(statearr_13121[(14)] = inst_12998__$1);

(statearr_13121[(15)] = inst_12999__$1);

(statearr_13121[(16)] = inst_13000__$1);

return statearr_13121;
})();
var statearr_13123_13171 = state_13058__$1;
(statearr_13123_13171[(2)] = null);

(statearr_13123_13171[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13063 === (18))){
var inst_13027 = (state_13058[(2)]);
var state_13058__$1 = state_13058;
var statearr_13124_13172 = state_13058__$1;
(statearr_13124_13172[(2)] = inst_13027);

(statearr_13124_13172[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13063 === (8))){
var inst_13000 = (state_13058[(16)]);
var inst_12999 = (state_13058[(15)]);
var inst_13003 = (inst_13000 < inst_12999);
var inst_13004 = inst_13003;
var state_13058__$1 = state_13058;
if(cljs.core.truth_(inst_13004)){
var statearr_13125_13174 = state_13058__$1;
(statearr_13125_13174[(1)] = (10));

} else {
var statearr_13126_13176 = state_13058__$1;
(statearr_13126_13176[(1)] = (11));

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
var statearr_13127 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_13127[(0)] = cljs$core$async$state_machine__11191__auto__);

(statearr_13127[(1)] = (1));

return statearr_13127;
});
var cljs$core$async$state_machine__11191__auto____1 = (function (state_13058){
while(true){
var ret_value__11192__auto__ = (function (){try{while(true){
var result__11193__auto__ = switch__11190__auto__.call(null,state_13058);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11193__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11193__auto__;
}
break;
}
}catch (e13128){var ex__11194__auto__ = e13128;
var statearr_13131_13178 = state_13058;
(statearr_13131_13178[(2)] = ex__11194__auto__);


if(cljs.core.seq.call(null,(state_13058[(4)]))){
var statearr_13132_13180 = state_13058;
(statearr_13132_13180[(1)] = cljs.core.first.call(null,(state_13058[(4)])));

} else {
throw ex__11194__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11192__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13186 = state_13058;
state_13058 = G__13186;
continue;
} else {
return ret_value__11192__auto__;
}
break;
}
});
cljs$core$async$state_machine__11191__auto__ = function(state_13058){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__11191__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__11191__auto____1.call(this,state_13058);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__11191__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__11191__auto____0;
cljs$core$async$state_machine__11191__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__11191__auto____1;
return cljs$core$async$state_machine__11191__auto__;
})()
})();
var state__11395__auto__ = (function (){var statearr_13133 = f__11394__auto__.call(null);
(statearr_13133[(6)] = c__11393__auto___13141);

return statearr_13133;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11395__auto__);
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
var G__13137 = arguments.length;
switch (G__13137) {
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
var G__13140 = arguments.length;
switch (G__13140) {
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
var G__13153 = arguments.length;
switch (G__13153) {
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
var c__11393__auto___13281 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__11394__auto__ = (function (){var switch__11190__auto__ = (function (state_13226){
var state_val_13228 = (state_13226[(1)]);
if((state_val_13228 === (7))){
var state_13226__$1 = state_13226;
var statearr_13230_13282 = state_13226__$1;
(statearr_13230_13282[(2)] = null);

(statearr_13230_13282[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13228 === (1))){
var state_13226__$1 = state_13226;
var statearr_13231_13287 = state_13226__$1;
(statearr_13231_13287[(2)] = null);

(statearr_13231_13287[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13228 === (4))){
var inst_13182 = (state_13226[(7)]);
var inst_13177 = (state_13226[(8)]);
var inst_13184 = (inst_13182 < inst_13177);
var state_13226__$1 = state_13226;
if(cljs.core.truth_(inst_13184)){
var statearr_13232_13288 = state_13226__$1;
(statearr_13232_13288[(1)] = (6));

} else {
var statearr_13233_13289 = state_13226__$1;
(statearr_13233_13289[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13228 === (15))){
var inst_13210 = (state_13226[(9)]);
var inst_13215 = cljs.core.apply.call(null,f,inst_13210);
var state_13226__$1 = state_13226;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13226__$1,(17),out,inst_13215);
} else {
if((state_val_13228 === (13))){
var inst_13210 = (state_13226[(9)]);
var inst_13210__$1 = (state_13226[(2)]);
var inst_13211 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_13210__$1);
var state_13226__$1 = (function (){var statearr_13234 = state_13226;
(statearr_13234[(9)] = inst_13210__$1);

return statearr_13234;
})();
if(cljs.core.truth_(inst_13211)){
var statearr_13235_13293 = state_13226__$1;
(statearr_13235_13293[(1)] = (14));

} else {
var statearr_13236_13295 = state_13226__$1;
(statearr_13236_13295[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13228 === (6))){
var state_13226__$1 = state_13226;
var statearr_13237_13304 = state_13226__$1;
(statearr_13237_13304[(2)] = null);

(statearr_13237_13304[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13228 === (17))){
var inst_13217 = (state_13226[(2)]);
var state_13226__$1 = (function (){var statearr_13239 = state_13226;
(statearr_13239[(10)] = inst_13217);

return statearr_13239;
})();
var statearr_13240_13309 = state_13226__$1;
(statearr_13240_13309[(2)] = null);

(statearr_13240_13309[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13228 === (3))){
var inst_13222 = (state_13226[(2)]);
var state_13226__$1 = state_13226;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13226__$1,inst_13222);
} else {
if((state_val_13228 === (12))){
var _ = (function (){var statearr_13243 = state_13226;
(statearr_13243[(4)] = cljs.core.rest.call(null,(state_13226[(4)])));

return statearr_13243;
})();
var state_13226__$1 = state_13226;
var ex13238 = (state_13226__$1[(2)]);
var statearr_13245_13326 = state_13226__$1;
(statearr_13245_13326[(5)] = ex13238);


if((ex13238 instanceof Object)){
var statearr_13246_13327 = state_13226__$1;
(statearr_13246_13327[(1)] = (11));

(statearr_13246_13327[(5)] = null);

} else {
throw ex13238;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13228 === (2))){
var inst_13175 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_13177 = cnt;
var inst_13182 = (0);
var state_13226__$1 = (function (){var statearr_13247 = state_13226;
(statearr_13247[(11)] = inst_13175);

(statearr_13247[(8)] = inst_13177);

(statearr_13247[(7)] = inst_13182);

return statearr_13247;
})();
var statearr_13248_13330 = state_13226__$1;
(statearr_13248_13330[(2)] = null);

(statearr_13248_13330[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13228 === (11))){
var inst_13189 = (state_13226[(2)]);
var inst_13190 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_13226__$1 = (function (){var statearr_13249 = state_13226;
(statearr_13249[(12)] = inst_13189);

return statearr_13249;
})();
var statearr_13250_13331 = state_13226__$1;
(statearr_13250_13331[(2)] = inst_13190);

(statearr_13250_13331[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13228 === (9))){
var inst_13182 = (state_13226[(7)]);
var _ = (function (){var statearr_13251 = state_13226;
(statearr_13251[(4)] = cljs.core.cons.call(null,(12),(state_13226[(4)])));

return statearr_13251;
})();
var inst_13196 = chs__$1.call(null,inst_13182);
var inst_13197 = done.call(null,inst_13182);
var inst_13198 = cljs.core.async.take_BANG_.call(null,inst_13196,inst_13197);
var ___$1 = (function (){var statearr_13253 = state_13226;
(statearr_13253[(4)] = cljs.core.rest.call(null,(state_13226[(4)])));

return statearr_13253;
})();
var state_13226__$1 = state_13226;
var statearr_13255_13335 = state_13226__$1;
(statearr_13255_13335[(2)] = inst_13198);

(statearr_13255_13335[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13228 === (5))){
var inst_13208 = (state_13226[(2)]);
var state_13226__$1 = (function (){var statearr_13256 = state_13226;
(statearr_13256[(13)] = inst_13208);

return statearr_13256;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13226__$1,(13),dchan);
} else {
if((state_val_13228 === (14))){
var inst_13213 = cljs.core.async.close_BANG_.call(null,out);
var state_13226__$1 = state_13226;
var statearr_13259_13338 = state_13226__$1;
(statearr_13259_13338[(2)] = inst_13213);

(statearr_13259_13338[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13228 === (16))){
var inst_13220 = (state_13226[(2)]);
var state_13226__$1 = state_13226;
var statearr_13260_13339 = state_13226__$1;
(statearr_13260_13339[(2)] = inst_13220);

(statearr_13260_13339[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13228 === (10))){
var inst_13182 = (state_13226[(7)]);
var inst_13201 = (state_13226[(2)]);
var inst_13202 = (inst_13182 + (1));
var inst_13182__$1 = inst_13202;
var state_13226__$1 = (function (){var statearr_13267 = state_13226;
(statearr_13267[(14)] = inst_13201);

(statearr_13267[(7)] = inst_13182__$1);

return statearr_13267;
})();
var statearr_13268_13340 = state_13226__$1;
(statearr_13268_13340[(2)] = null);

(statearr_13268_13340[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13228 === (8))){
var inst_13206 = (state_13226[(2)]);
var state_13226__$1 = state_13226;
var statearr_13269_13341 = state_13226__$1;
(statearr_13269_13341[(2)] = inst_13206);

(statearr_13269_13341[(1)] = (5));


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
var statearr_13271 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_13271[(0)] = cljs$core$async$state_machine__11191__auto__);

(statearr_13271[(1)] = (1));

return statearr_13271;
});
var cljs$core$async$state_machine__11191__auto____1 = (function (state_13226){
while(true){
var ret_value__11192__auto__ = (function (){try{while(true){
var result__11193__auto__ = switch__11190__auto__.call(null,state_13226);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11193__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11193__auto__;
}
break;
}
}catch (e13272){var ex__11194__auto__ = e13272;
var statearr_13273_13344 = state_13226;
(statearr_13273_13344[(2)] = ex__11194__auto__);


if(cljs.core.seq.call(null,(state_13226[(4)]))){
var statearr_13274_13345 = state_13226;
(statearr_13274_13345[(1)] = cljs.core.first.call(null,(state_13226[(4)])));

} else {
throw ex__11194__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11192__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13346 = state_13226;
state_13226 = G__13346;
continue;
} else {
return ret_value__11192__auto__;
}
break;
}
});
cljs$core$async$state_machine__11191__auto__ = function(state_13226){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__11191__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__11191__auto____1.call(this,state_13226);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__11191__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__11191__auto____0;
cljs$core$async$state_machine__11191__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__11191__auto____1;
return cljs$core$async$state_machine__11191__auto__;
})()
})();
var state__11395__auto__ = (function (){var statearr_13276 = f__11394__auto__.call(null);
(statearr_13276[(6)] = c__11393__auto___13281);

return statearr_13276;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11395__auto__);
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
var G__13280 = arguments.length;
switch (G__13280) {
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
var c__11393__auto___13370 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__11394__auto__ = (function (){var switch__11190__auto__ = (function (state_13328){
var state_val_13329 = (state_13328[(1)]);
if((state_val_13329 === (7))){
var inst_13303 = (state_13328[(7)]);
var inst_13305 = (state_13328[(8)]);
var inst_13303__$1 = (state_13328[(2)]);
var inst_13305__$1 = cljs.core.nth.call(null,inst_13303__$1,(0),null);
var inst_13306 = cljs.core.nth.call(null,inst_13303__$1,(1),null);
var inst_13307 = (inst_13305__$1 == null);
var state_13328__$1 = (function (){var statearr_13332 = state_13328;
(statearr_13332[(7)] = inst_13303__$1);

(statearr_13332[(8)] = inst_13305__$1);

(statearr_13332[(9)] = inst_13306);

return statearr_13332;
})();
if(cljs.core.truth_(inst_13307)){
var statearr_13333_13373 = state_13328__$1;
(statearr_13333_13373[(1)] = (8));

} else {
var statearr_13334_13374 = state_13328__$1;
(statearr_13334_13374[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13329 === (1))){
var inst_13290 = cljs.core.vec.call(null,chs);
var inst_13291 = inst_13290;
var state_13328__$1 = (function (){var statearr_13336 = state_13328;
(statearr_13336[(10)] = inst_13291);

return statearr_13336;
})();
var statearr_13337_13375 = state_13328__$1;
(statearr_13337_13375[(2)] = null);

(statearr_13337_13375[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13329 === (4))){
var inst_13291 = (state_13328[(10)]);
var state_13328__$1 = state_13328;
return cljs.core.async.ioc_alts_BANG_.call(null,state_13328__$1,(7),inst_13291);
} else {
if((state_val_13329 === (6))){
var inst_13322 = (state_13328[(2)]);
var state_13328__$1 = state_13328;
var statearr_13342_13380 = state_13328__$1;
(statearr_13342_13380[(2)] = inst_13322);

(statearr_13342_13380[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13329 === (3))){
var inst_13324 = (state_13328[(2)]);
var state_13328__$1 = state_13328;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13328__$1,inst_13324);
} else {
if((state_val_13329 === (2))){
var inst_13291 = (state_13328[(10)]);
var inst_13296 = cljs.core.count.call(null,inst_13291);
var inst_13297 = (inst_13296 > (0));
var state_13328__$1 = state_13328;
if(cljs.core.truth_(inst_13297)){
var statearr_13347_13389 = state_13328__$1;
(statearr_13347_13389[(1)] = (4));

} else {
var statearr_13348_13390 = state_13328__$1;
(statearr_13348_13390[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13329 === (11))){
var inst_13291 = (state_13328[(10)]);
var inst_13315 = (state_13328[(2)]);
var tmp13343 = inst_13291;
var inst_13291__$1 = tmp13343;
var state_13328__$1 = (function (){var statearr_13349 = state_13328;
(statearr_13349[(11)] = inst_13315);

(statearr_13349[(10)] = inst_13291__$1);

return statearr_13349;
})();
var statearr_13350_13403 = state_13328__$1;
(statearr_13350_13403[(2)] = null);

(statearr_13350_13403[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13329 === (9))){
var inst_13305 = (state_13328[(8)]);
var state_13328__$1 = state_13328;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13328__$1,(11),out,inst_13305);
} else {
if((state_val_13329 === (5))){
var inst_13320 = cljs.core.async.close_BANG_.call(null,out);
var state_13328__$1 = state_13328;
var statearr_13353_13408 = state_13328__$1;
(statearr_13353_13408[(2)] = inst_13320);

(statearr_13353_13408[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13329 === (10))){
var inst_13318 = (state_13328[(2)]);
var state_13328__$1 = state_13328;
var statearr_13354_13410 = state_13328__$1;
(statearr_13354_13410[(2)] = inst_13318);

(statearr_13354_13410[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13329 === (8))){
var inst_13291 = (state_13328[(10)]);
var inst_13303 = (state_13328[(7)]);
var inst_13305 = (state_13328[(8)]);
var inst_13306 = (state_13328[(9)]);
var inst_13310 = (function (){var cs = inst_13291;
var vec__13299 = inst_13303;
var v = inst_13305;
var c = inst_13306;
return (function (p1__13278_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__13278_SHARP_);
});
})();
var inst_13311 = cljs.core.filterv.call(null,inst_13310,inst_13291);
var inst_13291__$1 = inst_13311;
var state_13328__$1 = (function (){var statearr_13358 = state_13328;
(statearr_13358[(10)] = inst_13291__$1);

return statearr_13358;
})();
var statearr_13359_13416 = state_13328__$1;
(statearr_13359_13416[(2)] = null);

(statearr_13359_13416[(1)] = (2));


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
var statearr_13360 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_13360[(0)] = cljs$core$async$state_machine__11191__auto__);

(statearr_13360[(1)] = (1));

return statearr_13360;
});
var cljs$core$async$state_machine__11191__auto____1 = (function (state_13328){
while(true){
var ret_value__11192__auto__ = (function (){try{while(true){
var result__11193__auto__ = switch__11190__auto__.call(null,state_13328);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11193__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11193__auto__;
}
break;
}
}catch (e13361){var ex__11194__auto__ = e13361;
var statearr_13362_13419 = state_13328;
(statearr_13362_13419[(2)] = ex__11194__auto__);


if(cljs.core.seq.call(null,(state_13328[(4)]))){
var statearr_13363_13420 = state_13328;
(statearr_13363_13420[(1)] = cljs.core.first.call(null,(state_13328[(4)])));

} else {
throw ex__11194__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11192__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13422 = state_13328;
state_13328 = G__13422;
continue;
} else {
return ret_value__11192__auto__;
}
break;
}
});
cljs$core$async$state_machine__11191__auto__ = function(state_13328){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__11191__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__11191__auto____1.call(this,state_13328);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__11191__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__11191__auto____0;
cljs$core$async$state_machine__11191__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__11191__auto____1;
return cljs$core$async$state_machine__11191__auto__;
})()
})();
var state__11395__auto__ = (function (){var statearr_13367 = f__11394__auto__.call(null);
(statearr_13367[(6)] = c__11393__auto___13370);

return statearr_13367;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11395__auto__);
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
var G__13371 = arguments.length;
switch (G__13371) {
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
var c__11393__auto___13445 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__11394__auto__ = (function (){var switch__11190__auto__ = (function (state_13404){
var state_val_13405 = (state_13404[(1)]);
if((state_val_13405 === (7))){
var inst_13382 = (state_13404[(7)]);
var inst_13382__$1 = (state_13404[(2)]);
var inst_13384 = (inst_13382__$1 == null);
var inst_13385 = cljs.core.not.call(null,inst_13384);
var state_13404__$1 = (function (){var statearr_13411 = state_13404;
(statearr_13411[(7)] = inst_13382__$1);

return statearr_13411;
})();
if(inst_13385){
var statearr_13412_13446 = state_13404__$1;
(statearr_13412_13446[(1)] = (8));

} else {
var statearr_13413_13447 = state_13404__$1;
(statearr_13413_13447[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13405 === (1))){
var inst_13376 = (0);
var state_13404__$1 = (function (){var statearr_13414 = state_13404;
(statearr_13414[(8)] = inst_13376);

return statearr_13414;
})();
var statearr_13415_13448 = state_13404__$1;
(statearr_13415_13448[(2)] = null);

(statearr_13415_13448[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13405 === (4))){
var state_13404__$1 = state_13404;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13404__$1,(7),ch);
} else {
if((state_val_13405 === (6))){
var inst_13398 = (state_13404[(2)]);
var state_13404__$1 = state_13404;
var statearr_13417_13449 = state_13404__$1;
(statearr_13417_13449[(2)] = inst_13398);

(statearr_13417_13449[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13405 === (3))){
var inst_13400 = (state_13404[(2)]);
var inst_13401 = cljs.core.async.close_BANG_.call(null,out);
var state_13404__$1 = (function (){var statearr_13418 = state_13404;
(statearr_13418[(9)] = inst_13400);

return statearr_13418;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13404__$1,inst_13401);
} else {
if((state_val_13405 === (2))){
var inst_13376 = (state_13404[(8)]);
var inst_13378 = (inst_13376 < n);
var state_13404__$1 = state_13404;
if(cljs.core.truth_(inst_13378)){
var statearr_13424_13450 = state_13404__$1;
(statearr_13424_13450[(1)] = (4));

} else {
var statearr_13425_13451 = state_13404__$1;
(statearr_13425_13451[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13405 === (11))){
var inst_13376 = (state_13404[(8)]);
var inst_13388 = (state_13404[(2)]);
var inst_13391 = (inst_13376 + (1));
var inst_13376__$1 = inst_13391;
var state_13404__$1 = (function (){var statearr_13426 = state_13404;
(statearr_13426[(10)] = inst_13388);

(statearr_13426[(8)] = inst_13376__$1);

return statearr_13426;
})();
var statearr_13427_13455 = state_13404__$1;
(statearr_13427_13455[(2)] = null);

(statearr_13427_13455[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13405 === (9))){
var state_13404__$1 = state_13404;
var statearr_13429_13456 = state_13404__$1;
(statearr_13429_13456[(2)] = null);

(statearr_13429_13456[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13405 === (5))){
var state_13404__$1 = state_13404;
var statearr_13430_13457 = state_13404__$1;
(statearr_13430_13457[(2)] = null);

(statearr_13430_13457[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13405 === (10))){
var inst_13395 = (state_13404[(2)]);
var state_13404__$1 = state_13404;
var statearr_13431_13458 = state_13404__$1;
(statearr_13431_13458[(2)] = inst_13395);

(statearr_13431_13458[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13405 === (8))){
var inst_13382 = (state_13404[(7)]);
var state_13404__$1 = state_13404;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13404__$1,(11),out,inst_13382);
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
var statearr_13435 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_13435[(0)] = cljs$core$async$state_machine__11191__auto__);

(statearr_13435[(1)] = (1));

return statearr_13435;
});
var cljs$core$async$state_machine__11191__auto____1 = (function (state_13404){
while(true){
var ret_value__11192__auto__ = (function (){try{while(true){
var result__11193__auto__ = switch__11190__auto__.call(null,state_13404);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11193__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11193__auto__;
}
break;
}
}catch (e13436){var ex__11194__auto__ = e13436;
var statearr_13437_13459 = state_13404;
(statearr_13437_13459[(2)] = ex__11194__auto__);


if(cljs.core.seq.call(null,(state_13404[(4)]))){
var statearr_13438_13460 = state_13404;
(statearr_13438_13460[(1)] = cljs.core.first.call(null,(state_13404[(4)])));

} else {
throw ex__11194__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11192__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13461 = state_13404;
state_13404 = G__13461;
continue;
} else {
return ret_value__11192__auto__;
}
break;
}
});
cljs$core$async$state_machine__11191__auto__ = function(state_13404){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__11191__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__11191__auto____1.call(this,state_13404);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__11191__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__11191__auto____0;
cljs$core$async$state_machine__11191__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__11191__auto____1;
return cljs$core$async$state_machine__11191__auto__;
})()
})();
var state__11395__auto__ = (function (){var statearr_13439 = f__11394__auto__.call(null);
(statearr_13439[(6)] = c__11393__auto___13445);

return statearr_13439;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11395__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async13442 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async13442 = (function (f,ch,meta13443){
this.f = f;
this.ch = ch;
this.meta13443 = meta13443;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async13442.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13444,meta13443__$1){
var self__ = this;
var _13444__$1 = this;
return (new cljs.core.async.t_cljs$core$async13442(self__.f,self__.ch,meta13443__$1));
}));

(cljs.core.async.t_cljs$core$async13442.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13444){
var self__ = this;
var _13444__$1 = this;
return self__.meta13443;
}));

(cljs.core.async.t_cljs$core$async13442.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async13442.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async13442.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async13442.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async13442.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async13452 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async13452 = (function (f,ch,meta13443,_,fn1,meta13453){
this.f = f;
this.ch = ch;
this.meta13443 = meta13443;
this._ = _;
this.fn1 = fn1;
this.meta13453 = meta13453;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async13452.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13454,meta13453__$1){
var self__ = this;
var _13454__$1 = this;
return (new cljs.core.async.t_cljs$core$async13452(self__.f,self__.ch,self__.meta13443,self__._,self__.fn1,meta13453__$1));
}));

(cljs.core.async.t_cljs$core$async13452.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13454){
var self__ = this;
var _13454__$1 = this;
return self__.meta13453;
}));

(cljs.core.async.t_cljs$core$async13452.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async13452.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
}));

(cljs.core.async.t_cljs$core$async13452.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async13452.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return (function (p1__13440_SHARP_){
return f1.call(null,(((p1__13440_SHARP_ == null))?null:self__.f.call(null,p1__13440_SHARP_)));
});
}));

(cljs.core.async.t_cljs$core$async13452.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta13443","meta13443",-688306107,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async13442","cljs.core.async/t_cljs$core$async13442",-1144480202,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta13453","meta13453",2046427224,null)], null);
}));

(cljs.core.async.t_cljs$core$async13452.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async13452.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async13452");

(cljs.core.async.t_cljs$core$async13452.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write.call(null,writer__5288__auto__,"cljs.core.async/t_cljs$core$async13452");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async13452.
 */
cljs.core.async.__GT_t_cljs$core$async13452 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async13452(f__$1,ch__$1,meta13443__$1,___$2,fn1__$1,meta13453){
return (new cljs.core.async.t_cljs$core$async13452(f__$1,ch__$1,meta13443__$1,___$2,fn1__$1,meta13453));
});

}

return (new cljs.core.async.t_cljs$core$async13452(self__.f,self__.ch,self__.meta13443,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
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

(cljs.core.async.t_cljs$core$async13442.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async13442.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async13442.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta13443","meta13443",-688306107,null)], null);
}));

(cljs.core.async.t_cljs$core$async13442.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async13442.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async13442");

(cljs.core.async.t_cljs$core$async13442.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write.call(null,writer__5288__auto__,"cljs.core.async/t_cljs$core$async13442");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async13442.
 */
cljs.core.async.__GT_t_cljs$core$async13442 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async13442(f__$1,ch__$1,meta13443){
return (new cljs.core.async.t_cljs$core$async13442(f__$1,ch__$1,meta13443));
});

}

return (new cljs.core.async.t_cljs$core$async13442(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async13462 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async13462 = (function (f,ch,meta13463){
this.f = f;
this.ch = ch;
this.meta13463 = meta13463;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async13462.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13464,meta13463__$1){
var self__ = this;
var _13464__$1 = this;
return (new cljs.core.async.t_cljs$core$async13462(self__.f,self__.ch,meta13463__$1));
}));

(cljs.core.async.t_cljs$core$async13462.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13464){
var self__ = this;
var _13464__$1 = this;
return self__.meta13463;
}));

(cljs.core.async.t_cljs$core$async13462.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async13462.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async13462.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async13462.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async13462.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async13462.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
}));

(cljs.core.async.t_cljs$core$async13462.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta13463","meta13463",-844000756,null)], null);
}));

(cljs.core.async.t_cljs$core$async13462.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async13462.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async13462");

(cljs.core.async.t_cljs$core$async13462.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write.call(null,writer__5288__auto__,"cljs.core.async/t_cljs$core$async13462");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async13462.
 */
cljs.core.async.__GT_t_cljs$core$async13462 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async13462(f__$1,ch__$1,meta13463){
return (new cljs.core.async.t_cljs$core$async13462(f__$1,ch__$1,meta13463));
});

}

return (new cljs.core.async.t_cljs$core$async13462(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async13465 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async13465 = (function (p,ch,meta13466){
this.p = p;
this.ch = ch;
this.meta13466 = meta13466;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async13465.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13467,meta13466__$1){
var self__ = this;
var _13467__$1 = this;
return (new cljs.core.async.t_cljs$core$async13465(self__.p,self__.ch,meta13466__$1));
}));

(cljs.core.async.t_cljs$core$async13465.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13467){
var self__ = this;
var _13467__$1 = this;
return self__.meta13466;
}));

(cljs.core.async.t_cljs$core$async13465.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async13465.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async13465.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async13465.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async13465.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async13465.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async13465.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async13465.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta13466","meta13466",1755809368,null)], null);
}));

(cljs.core.async.t_cljs$core$async13465.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async13465.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async13465");

(cljs.core.async.t_cljs$core$async13465.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write.call(null,writer__5288__auto__,"cljs.core.async/t_cljs$core$async13465");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async13465.
 */
cljs.core.async.__GT_t_cljs$core$async13465 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async13465(p__$1,ch__$1,meta13466){
return (new cljs.core.async.t_cljs$core$async13465(p__$1,ch__$1,meta13466));
});

}

return (new cljs.core.async.t_cljs$core$async13465(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var c__11393__auto___13512 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__11394__auto__ = (function (){var switch__11190__auto__ = (function (state_13490){
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
var statearr_13495_13519 = state_13490__$1;
(statearr_13495_13519[(1)] = (5));

} else {
var statearr_13496_13527 = state_13490__$1;
(statearr_13496_13527[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13491 === (6))){
var inst_13472 = (state_13490[(7)]);
var inst_13477 = p.call(null,inst_13472);
var state_13490__$1 = state_13490;
if(cljs.core.truth_(inst_13477)){
var statearr_13497_13535 = state_13490__$1;
(statearr_13497_13535[(1)] = (8));

} else {
var statearr_13498_13537 = state_13490__$1;
(statearr_13498_13537[(1)] = (9));

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
var statearr_13499_13548 = state_13490__$1;
(statearr_13499_13548[(2)] = inst_13480);

(statearr_13499_13548[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13491 === (9))){
var state_13490__$1 = state_13490;
var statearr_13500_13551 = state_13490__$1;
(statearr_13500_13551[(2)] = null);

(statearr_13500_13551[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13491 === (5))){
var inst_13475 = cljs.core.async.close_BANG_.call(null,out);
var state_13490__$1 = state_13490;
var statearr_13501_13553 = state_13490__$1;
(statearr_13501_13553[(2)] = inst_13475);

(statearr_13501_13553[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13491 === (10))){
var inst_13483 = (state_13490[(2)]);
var state_13490__$1 = (function (){var statearr_13502 = state_13490;
(statearr_13502[(8)] = inst_13483);

return statearr_13502;
})();
var statearr_13503_13565 = state_13490__$1;
(statearr_13503_13565[(2)] = null);

(statearr_13503_13565[(1)] = (2));


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
var statearr_13506_13586 = state_13490;
(statearr_13506_13586[(2)] = ex__11194__auto__);


if(cljs.core.seq.call(null,(state_13490[(4)]))){
var statearr_13507_13588 = state_13490;
(statearr_13507_13588[(1)] = cljs.core.first.call(null,(state_13490[(4)])));

} else {
throw ex__11194__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11192__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13589 = state_13490;
state_13490 = G__13589;
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
var state__11395__auto__ = (function (){var statearr_13508 = f__11394__auto__.call(null);
(statearr_13508[(6)] = c__11393__auto___13512);

return statearr_13508;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11395__auto__);
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
var c__11393__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__11394__auto__ = (function (){var switch__11190__auto__ = (function (state_13584){
var state_val_13585 = (state_13584[(1)]);
if((state_val_13585 === (7))){
var inst_13580 = (state_13584[(2)]);
var state_13584__$1 = state_13584;
var statearr_13587_13631 = state_13584__$1;
(statearr_13587_13631[(2)] = inst_13580);

(statearr_13587_13631[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13585 === (20))){
var inst_13546 = (state_13584[(7)]);
var inst_13560 = (state_13584[(2)]);
var inst_13561 = cljs.core.next.call(null,inst_13546);
var inst_13530 = inst_13561;
var inst_13531 = null;
var inst_13532 = (0);
var inst_13533 = (0);
var state_13584__$1 = (function (){var statearr_13590 = state_13584;
(statearr_13590[(8)] = inst_13560);

(statearr_13590[(9)] = inst_13530);

(statearr_13590[(10)] = inst_13531);

(statearr_13590[(11)] = inst_13532);

(statearr_13590[(12)] = inst_13533);

return statearr_13590;
})();
var statearr_13591_13632 = state_13584__$1;
(statearr_13591_13632[(2)] = null);

(statearr_13591_13632[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13585 === (1))){
var state_13584__$1 = state_13584;
var statearr_13592_13633 = state_13584__$1;
(statearr_13592_13633[(2)] = null);

(statearr_13592_13633[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13585 === (4))){
var inst_13517 = (state_13584[(13)]);
var inst_13517__$1 = (state_13584[(2)]);
var inst_13518 = (inst_13517__$1 == null);
var state_13584__$1 = (function (){var statearr_13594 = state_13584;
(statearr_13594[(13)] = inst_13517__$1);

return statearr_13594;
})();
if(cljs.core.truth_(inst_13518)){
var statearr_13595_13634 = state_13584__$1;
(statearr_13595_13634[(1)] = (5));

} else {
var statearr_13596_13636 = state_13584__$1;
(statearr_13596_13636[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13585 === (15))){
var state_13584__$1 = state_13584;
var statearr_13600_13637 = state_13584__$1;
(statearr_13600_13637[(2)] = null);

(statearr_13600_13637[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13585 === (21))){
var state_13584__$1 = state_13584;
var statearr_13601_13639 = state_13584__$1;
(statearr_13601_13639[(2)] = null);

(statearr_13601_13639[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13585 === (13))){
var inst_13533 = (state_13584[(12)]);
var inst_13530 = (state_13584[(9)]);
var inst_13531 = (state_13584[(10)]);
var inst_13532 = (state_13584[(11)]);
var inst_13542 = (state_13584[(2)]);
var inst_13543 = (inst_13533 + (1));
var tmp13597 = inst_13531;
var tmp13598 = inst_13532;
var tmp13599 = inst_13530;
var inst_13530__$1 = tmp13599;
var inst_13531__$1 = tmp13597;
var inst_13532__$1 = tmp13598;
var inst_13533__$1 = inst_13543;
var state_13584__$1 = (function (){var statearr_13602 = state_13584;
(statearr_13602[(14)] = inst_13542);

(statearr_13602[(9)] = inst_13530__$1);

(statearr_13602[(10)] = inst_13531__$1);

(statearr_13602[(11)] = inst_13532__$1);

(statearr_13602[(12)] = inst_13533__$1);

return statearr_13602;
})();
var statearr_13603_13640 = state_13584__$1;
(statearr_13603_13640[(2)] = null);

(statearr_13603_13640[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13585 === (22))){
var state_13584__$1 = state_13584;
var statearr_13604_13641 = state_13584__$1;
(statearr_13604_13641[(2)] = null);

(statearr_13604_13641[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13585 === (6))){
var inst_13517 = (state_13584[(13)]);
var inst_13528 = f.call(null,inst_13517);
var inst_13529 = cljs.core.seq.call(null,inst_13528);
var inst_13530 = inst_13529;
var inst_13531 = null;
var inst_13532 = (0);
var inst_13533 = (0);
var state_13584__$1 = (function (){var statearr_13605 = state_13584;
(statearr_13605[(9)] = inst_13530);

(statearr_13605[(10)] = inst_13531);

(statearr_13605[(11)] = inst_13532);

(statearr_13605[(12)] = inst_13533);

return statearr_13605;
})();
var statearr_13606_13644 = state_13584__$1;
(statearr_13606_13644[(2)] = null);

(statearr_13606_13644[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13585 === (17))){
var inst_13546 = (state_13584[(7)]);
var inst_13552 = cljs.core.chunk_first.call(null,inst_13546);
var inst_13554 = cljs.core.chunk_rest.call(null,inst_13546);
var inst_13555 = cljs.core.count.call(null,inst_13552);
var inst_13530 = inst_13554;
var inst_13531 = inst_13552;
var inst_13532 = inst_13555;
var inst_13533 = (0);
var state_13584__$1 = (function (){var statearr_13607 = state_13584;
(statearr_13607[(9)] = inst_13530);

(statearr_13607[(10)] = inst_13531);

(statearr_13607[(11)] = inst_13532);

(statearr_13607[(12)] = inst_13533);

return statearr_13607;
})();
var statearr_13608_13645 = state_13584__$1;
(statearr_13608_13645[(2)] = null);

(statearr_13608_13645[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13585 === (3))){
var inst_13582 = (state_13584[(2)]);
var state_13584__$1 = state_13584;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13584__$1,inst_13582);
} else {
if((state_val_13585 === (12))){
var inst_13570 = (state_13584[(2)]);
var state_13584__$1 = state_13584;
var statearr_13609_13646 = state_13584__$1;
(statearr_13609_13646[(2)] = inst_13570);

(statearr_13609_13646[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13585 === (2))){
var state_13584__$1 = state_13584;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13584__$1,(4),in$);
} else {
if((state_val_13585 === (23))){
var inst_13578 = (state_13584[(2)]);
var state_13584__$1 = state_13584;
var statearr_13610_13649 = state_13584__$1;
(statearr_13610_13649[(2)] = inst_13578);

(statearr_13610_13649[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13585 === (19))){
var inst_13564 = (state_13584[(2)]);
var state_13584__$1 = state_13584;
var statearr_13611_13655 = state_13584__$1;
(statearr_13611_13655[(2)] = inst_13564);

(statearr_13611_13655[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13585 === (11))){
var inst_13530 = (state_13584[(9)]);
var inst_13546 = (state_13584[(7)]);
var inst_13546__$1 = cljs.core.seq.call(null,inst_13530);
var state_13584__$1 = (function (){var statearr_13612 = state_13584;
(statearr_13612[(7)] = inst_13546__$1);

return statearr_13612;
})();
if(inst_13546__$1){
var statearr_13613_13674 = state_13584__$1;
(statearr_13613_13674[(1)] = (14));

} else {
var statearr_13614_13675 = state_13584__$1;
(statearr_13614_13675[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13585 === (9))){
var inst_13572 = (state_13584[(2)]);
var inst_13573 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_13584__$1 = (function (){var statearr_13615 = state_13584;
(statearr_13615[(15)] = inst_13572);

return statearr_13615;
})();
if(cljs.core.truth_(inst_13573)){
var statearr_13616_13677 = state_13584__$1;
(statearr_13616_13677[(1)] = (21));

} else {
var statearr_13617_13679 = state_13584__$1;
(statearr_13617_13679[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13585 === (5))){
var inst_13521 = cljs.core.async.close_BANG_.call(null,out);
var state_13584__$1 = state_13584;
var statearr_13618_13681 = state_13584__$1;
(statearr_13618_13681[(2)] = inst_13521);

(statearr_13618_13681[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13585 === (14))){
var inst_13546 = (state_13584[(7)]);
var inst_13549 = cljs.core.chunked_seq_QMARK_.call(null,inst_13546);
var state_13584__$1 = state_13584;
if(inst_13549){
var statearr_13619_13683 = state_13584__$1;
(statearr_13619_13683[(1)] = (17));

} else {
var statearr_13620_13685 = state_13584__$1;
(statearr_13620_13685[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13585 === (16))){
var inst_13568 = (state_13584[(2)]);
var state_13584__$1 = state_13584;
var statearr_13621_13687 = state_13584__$1;
(statearr_13621_13687[(2)] = inst_13568);

(statearr_13621_13687[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13585 === (10))){
var inst_13531 = (state_13584[(10)]);
var inst_13533 = (state_13584[(12)]);
var inst_13540 = cljs.core._nth.call(null,inst_13531,inst_13533);
var state_13584__$1 = state_13584;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13584__$1,(13),out,inst_13540);
} else {
if((state_val_13585 === (18))){
var inst_13546 = (state_13584[(7)]);
var inst_13558 = cljs.core.first.call(null,inst_13546);
var state_13584__$1 = state_13584;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13584__$1,(20),out,inst_13558);
} else {
if((state_val_13585 === (8))){
var inst_13533 = (state_13584[(12)]);
var inst_13532 = (state_13584[(11)]);
var inst_13536 = (inst_13533 < inst_13532);
var inst_13538 = inst_13536;
var state_13584__$1 = state_13584;
if(cljs.core.truth_(inst_13538)){
var statearr_13622_13690 = state_13584__$1;
(statearr_13622_13690[(1)] = (10));

} else {
var statearr_13623_13692 = state_13584__$1;
(statearr_13623_13692[(1)] = (11));

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
var cljs$core$async$mapcat_STAR__$_state_machine__11191__auto____1 = (function (state_13584){
while(true){
var ret_value__11192__auto__ = (function (){try{while(true){
var result__11193__auto__ = switch__11190__auto__.call(null,state_13584);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11193__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11193__auto__;
}
break;
}
}catch (e13625){var ex__11194__auto__ = e13625;
var statearr_13626_13695 = state_13584;
(statearr_13626_13695[(2)] = ex__11194__auto__);


if(cljs.core.seq.call(null,(state_13584[(4)]))){
var statearr_13627_13697 = state_13584;
(statearr_13627_13697[(1)] = cljs.core.first.call(null,(state_13584[(4)])));

} else {
throw ex__11194__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11192__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13700 = state_13584;
state_13584 = G__13700;
continue;
} else {
return ret_value__11192__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__11191__auto__ = function(state_13584){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__11191__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__11191__auto____1.call(this,state_13584);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__11191__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__11191__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__11191__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__11191__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__11191__auto__;
})()
})();
var state__11395__auto__ = (function (){var statearr_13628 = f__11394__auto__.call(null);
(statearr_13628[(6)] = c__11393__auto__);

return statearr_13628;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11395__auto__);
}));

return c__11393__auto__;
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
var G__13643 = arguments.length;
switch (G__13643) {
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
var c__11393__auto___13713 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__11394__auto__ = (function (){var switch__11190__auto__ = (function (state_13672){
var state_val_13673 = (state_13672[(1)]);
if((state_val_13673 === (7))){
var inst_13667 = (state_13672[(2)]);
var state_13672__$1 = state_13672;
var statearr_13676_13714 = state_13672__$1;
(statearr_13676_13714[(2)] = inst_13667);

(statearr_13676_13714[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13673 === (1))){
var inst_13647 = null;
var state_13672__$1 = (function (){var statearr_13678 = state_13672;
(statearr_13678[(7)] = inst_13647);

return statearr_13678;
})();
var statearr_13680_13715 = state_13672__$1;
(statearr_13680_13715[(2)] = null);

(statearr_13680_13715[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13673 === (4))){
var inst_13651 = (state_13672[(8)]);
var inst_13651__$1 = (state_13672[(2)]);
var inst_13652 = (inst_13651__$1 == null);
var inst_13653 = cljs.core.not.call(null,inst_13652);
var state_13672__$1 = (function (){var statearr_13682 = state_13672;
(statearr_13682[(8)] = inst_13651__$1);

return statearr_13682;
})();
if(inst_13653){
var statearr_13684_13726 = state_13672__$1;
(statearr_13684_13726[(1)] = (5));

} else {
var statearr_13686_13728 = state_13672__$1;
(statearr_13686_13728[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13673 === (6))){
var state_13672__$1 = state_13672;
var statearr_13688_13739 = state_13672__$1;
(statearr_13688_13739[(2)] = null);

(statearr_13688_13739[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13673 === (3))){
var inst_13669 = (state_13672[(2)]);
var inst_13670 = cljs.core.async.close_BANG_.call(null,out);
var state_13672__$1 = (function (){var statearr_13689 = state_13672;
(statearr_13689[(9)] = inst_13669);

return statearr_13689;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13672__$1,inst_13670);
} else {
if((state_val_13673 === (2))){
var state_13672__$1 = state_13672;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13672__$1,(4),ch);
} else {
if((state_val_13673 === (11))){
var inst_13651 = (state_13672[(8)]);
var inst_13661 = (state_13672[(2)]);
var inst_13647 = inst_13651;
var state_13672__$1 = (function (){var statearr_13691 = state_13672;
(statearr_13691[(10)] = inst_13661);

(statearr_13691[(7)] = inst_13647);

return statearr_13691;
})();
var statearr_13693_13758 = state_13672__$1;
(statearr_13693_13758[(2)] = null);

(statearr_13693_13758[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13673 === (9))){
var inst_13651 = (state_13672[(8)]);
var state_13672__$1 = state_13672;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13672__$1,(11),out,inst_13651);
} else {
if((state_val_13673 === (5))){
var inst_13651 = (state_13672[(8)]);
var inst_13647 = (state_13672[(7)]);
var inst_13656 = cljs.core._EQ_.call(null,inst_13651,inst_13647);
var state_13672__$1 = state_13672;
if(inst_13656){
var statearr_13696_13760 = state_13672__$1;
(statearr_13696_13760[(1)] = (8));

} else {
var statearr_13698_13761 = state_13672__$1;
(statearr_13698_13761[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13673 === (10))){
var inst_13664 = (state_13672[(2)]);
var state_13672__$1 = state_13672;
var statearr_13699_13763 = state_13672__$1;
(statearr_13699_13763[(2)] = inst_13664);

(statearr_13699_13763[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13673 === (8))){
var inst_13647 = (state_13672[(7)]);
var tmp13694 = inst_13647;
var inst_13647__$1 = tmp13694;
var state_13672__$1 = (function (){var statearr_13701 = state_13672;
(statearr_13701[(7)] = inst_13647__$1);

return statearr_13701;
})();
var statearr_13702_13765 = state_13672__$1;
(statearr_13702_13765[(2)] = null);

(statearr_13702_13765[(1)] = (2));


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
var statearr_13704 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_13704[(0)] = cljs$core$async$state_machine__11191__auto__);

(statearr_13704[(1)] = (1));

return statearr_13704;
});
var cljs$core$async$state_machine__11191__auto____1 = (function (state_13672){
while(true){
var ret_value__11192__auto__ = (function (){try{while(true){
var result__11193__auto__ = switch__11190__auto__.call(null,state_13672);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11193__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11193__auto__;
}
break;
}
}catch (e13705){var ex__11194__auto__ = e13705;
var statearr_13706_13769 = state_13672;
(statearr_13706_13769[(2)] = ex__11194__auto__);


if(cljs.core.seq.call(null,(state_13672[(4)]))){
var statearr_13707_13770 = state_13672;
(statearr_13707_13770[(1)] = cljs.core.first.call(null,(state_13672[(4)])));

} else {
throw ex__11194__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11192__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13772 = state_13672;
state_13672 = G__13772;
continue;
} else {
return ret_value__11192__auto__;
}
break;
}
});
cljs$core$async$state_machine__11191__auto__ = function(state_13672){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__11191__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__11191__auto____1.call(this,state_13672);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__11191__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__11191__auto____0;
cljs$core$async$state_machine__11191__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__11191__auto____1;
return cljs$core$async$state_machine__11191__auto__;
})()
})();
var state__11395__auto__ = (function (){var statearr_13709 = f__11394__auto__.call(null);
(statearr_13709[(6)] = c__11393__auto___13713);

return statearr_13709;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11395__auto__);
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
var c__11393__auto___13795 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__11394__auto__ = (function (){var switch__11190__auto__ = (function (state_13756){
var state_val_13757 = (state_13756[(1)]);
if((state_val_13757 === (7))){
var inst_13752 = (state_13756[(2)]);
var state_13756__$1 = state_13756;
var statearr_13759_13796 = state_13756__$1;
(statearr_13759_13796[(2)] = inst_13752);

(statearr_13759_13796[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13757 === (1))){
var inst_13716 = (new Array(n));
var inst_13717 = inst_13716;
var inst_13718 = (0);
var state_13756__$1 = (function (){var statearr_13762 = state_13756;
(statearr_13762[(7)] = inst_13717);

(statearr_13762[(8)] = inst_13718);

return statearr_13762;
})();
var statearr_13764_13797 = state_13756__$1;
(statearr_13764_13797[(2)] = null);

(statearr_13764_13797[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13757 === (4))){
var inst_13721 = (state_13756[(9)]);
var inst_13721__$1 = (state_13756[(2)]);
var inst_13722 = (inst_13721__$1 == null);
var inst_13723 = cljs.core.not.call(null,inst_13722);
var state_13756__$1 = (function (){var statearr_13766 = state_13756;
(statearr_13766[(9)] = inst_13721__$1);

return statearr_13766;
})();
if(inst_13723){
var statearr_13767_13809 = state_13756__$1;
(statearr_13767_13809[(1)] = (5));

} else {
var statearr_13768_13812 = state_13756__$1;
(statearr_13768_13812[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13757 === (15))){
var inst_13746 = (state_13756[(2)]);
var state_13756__$1 = state_13756;
var statearr_13771_13823 = state_13756__$1;
(statearr_13771_13823[(2)] = inst_13746);

(statearr_13771_13823[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13757 === (13))){
var state_13756__$1 = state_13756;
var statearr_13773_13830 = state_13756__$1;
(statearr_13773_13830[(2)] = null);

(statearr_13773_13830[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13757 === (6))){
var inst_13718 = (state_13756[(8)]);
var inst_13742 = (inst_13718 > (0));
var state_13756__$1 = state_13756;
if(cljs.core.truth_(inst_13742)){
var statearr_13774_13846 = state_13756__$1;
(statearr_13774_13846[(1)] = (12));

} else {
var statearr_13775_13848 = state_13756__$1;
(statearr_13775_13848[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13757 === (3))){
var inst_13754 = (state_13756[(2)]);
var state_13756__$1 = state_13756;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13756__$1,inst_13754);
} else {
if((state_val_13757 === (12))){
var inst_13717 = (state_13756[(7)]);
var inst_13744 = cljs.core.vec.call(null,inst_13717);
var state_13756__$1 = state_13756;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13756__$1,(15),out,inst_13744);
} else {
if((state_val_13757 === (2))){
var state_13756__$1 = state_13756;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13756__$1,(4),ch);
} else {
if((state_val_13757 === (11))){
var inst_13735 = (state_13756[(2)]);
var inst_13736 = (new Array(n));
var inst_13717 = inst_13736;
var inst_13718 = (0);
var state_13756__$1 = (function (){var statearr_13776 = state_13756;
(statearr_13776[(10)] = inst_13735);

(statearr_13776[(7)] = inst_13717);

(statearr_13776[(8)] = inst_13718);

return statearr_13776;
})();
var statearr_13777_13853 = state_13756__$1;
(statearr_13777_13853[(2)] = null);

(statearr_13777_13853[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13757 === (9))){
var inst_13717 = (state_13756[(7)]);
var inst_13733 = cljs.core.vec.call(null,inst_13717);
var state_13756__$1 = state_13756;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13756__$1,(11),out,inst_13733);
} else {
if((state_val_13757 === (5))){
var inst_13717 = (state_13756[(7)]);
var inst_13718 = (state_13756[(8)]);
var inst_13721 = (state_13756[(9)]);
var inst_13727 = (state_13756[(11)]);
var inst_13725 = (inst_13717[inst_13718] = inst_13721);
var inst_13727__$1 = (inst_13718 + (1));
var inst_13729 = (inst_13727__$1 < n);
var state_13756__$1 = (function (){var statearr_13778 = state_13756;
(statearr_13778[(12)] = inst_13725);

(statearr_13778[(11)] = inst_13727__$1);

return statearr_13778;
})();
if(cljs.core.truth_(inst_13729)){
var statearr_13779_13857 = state_13756__$1;
(statearr_13779_13857[(1)] = (8));

} else {
var statearr_13780_13858 = state_13756__$1;
(statearr_13780_13858[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13757 === (14))){
var inst_13749 = (state_13756[(2)]);
var inst_13750 = cljs.core.async.close_BANG_.call(null,out);
var state_13756__$1 = (function (){var statearr_13782 = state_13756;
(statearr_13782[(13)] = inst_13749);

return statearr_13782;
})();
var statearr_13783_13862 = state_13756__$1;
(statearr_13783_13862[(2)] = inst_13750);

(statearr_13783_13862[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13757 === (10))){
var inst_13740 = (state_13756[(2)]);
var state_13756__$1 = state_13756;
var statearr_13784_13864 = state_13756__$1;
(statearr_13784_13864[(2)] = inst_13740);

(statearr_13784_13864[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13757 === (8))){
var inst_13717 = (state_13756[(7)]);
var inst_13727 = (state_13756[(11)]);
var tmp13781 = inst_13717;
var inst_13717__$1 = tmp13781;
var inst_13718 = inst_13727;
var state_13756__$1 = (function (){var statearr_13785 = state_13756;
(statearr_13785[(7)] = inst_13717__$1);

(statearr_13785[(8)] = inst_13718);

return statearr_13785;
})();
var statearr_13786_13866 = state_13756__$1;
(statearr_13786_13866[(2)] = null);

(statearr_13786_13866[(1)] = (2));


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
var cljs$core$async$state_machine__11191__auto____1 = (function (state_13756){
while(true){
var ret_value__11192__auto__ = (function (){try{while(true){
var result__11193__auto__ = switch__11190__auto__.call(null,state_13756);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11193__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11193__auto__;
}
break;
}
}catch (e13788){var ex__11194__auto__ = e13788;
var statearr_13789_13868 = state_13756;
(statearr_13789_13868[(2)] = ex__11194__auto__);


if(cljs.core.seq.call(null,(state_13756[(4)]))){
var statearr_13790_13869 = state_13756;
(statearr_13790_13869[(1)] = cljs.core.first.call(null,(state_13756[(4)])));

} else {
throw ex__11194__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11192__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13870 = state_13756;
state_13756 = G__13870;
continue;
} else {
return ret_value__11192__auto__;
}
break;
}
});
cljs$core$async$state_machine__11191__auto__ = function(state_13756){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__11191__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__11191__auto____1.call(this,state_13756);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__11191__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__11191__auto____0;
cljs$core$async$state_machine__11191__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__11191__auto____1;
return cljs$core$async$state_machine__11191__auto__;
})()
})();
var state__11395__auto__ = (function (){var statearr_13791 = f__11394__auto__.call(null);
(statearr_13791[(6)] = c__11393__auto___13795);

return statearr_13791;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11395__auto__);
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
var c__11393__auto___13890 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__11394__auto__ = (function (){var switch__11190__auto__ = (function (state_13847){
var state_val_13849 = (state_13847[(1)]);
if((state_val_13849 === (7))){
var inst_13842 = (state_13847[(2)]);
var state_13847__$1 = state_13847;
var statearr_13850_13892 = state_13847__$1;
(statearr_13850_13892[(2)] = inst_13842);

(statearr_13850_13892[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13849 === (1))){
var inst_13798 = [];
var inst_13799 = inst_13798;
var inst_13800 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_13847__$1 = (function (){var statearr_13851 = state_13847;
(statearr_13851[(7)] = inst_13799);

(statearr_13851[(8)] = inst_13800);

return statearr_13851;
})();
var statearr_13852_13894 = state_13847__$1;
(statearr_13852_13894[(2)] = null);

(statearr_13852_13894[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13849 === (4))){
var inst_13803 = (state_13847[(9)]);
var inst_13803__$1 = (state_13847[(2)]);
var inst_13804 = (inst_13803__$1 == null);
var inst_13805 = cljs.core.not.call(null,inst_13804);
var state_13847__$1 = (function (){var statearr_13854 = state_13847;
(statearr_13854[(9)] = inst_13803__$1);

return statearr_13854;
})();
if(inst_13805){
var statearr_13855_13895 = state_13847__$1;
(statearr_13855_13895[(1)] = (5));

} else {
var statearr_13856_13896 = state_13847__$1;
(statearr_13856_13896[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13849 === (15))){
var inst_13799 = (state_13847[(7)]);
var inst_13834 = cljs.core.vec.call(null,inst_13799);
var state_13847__$1 = state_13847;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13847__$1,(18),out,inst_13834);
} else {
if((state_val_13849 === (13))){
var inst_13828 = (state_13847[(2)]);
var state_13847__$1 = state_13847;
var statearr_13859_13901 = state_13847__$1;
(statearr_13859_13901[(2)] = inst_13828);

(statearr_13859_13901[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13849 === (6))){
var inst_13799 = (state_13847[(7)]);
var inst_13831 = inst_13799.length;
var inst_13832 = (inst_13831 > (0));
var state_13847__$1 = state_13847;
if(cljs.core.truth_(inst_13832)){
var statearr_13860_13903 = state_13847__$1;
(statearr_13860_13903[(1)] = (15));

} else {
var statearr_13861_13904 = state_13847__$1;
(statearr_13861_13904[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13849 === (17))){
var inst_13839 = (state_13847[(2)]);
var inst_13840 = cljs.core.async.close_BANG_.call(null,out);
var state_13847__$1 = (function (){var statearr_13863 = state_13847;
(statearr_13863[(10)] = inst_13839);

return statearr_13863;
})();
var statearr_13865_13905 = state_13847__$1;
(statearr_13865_13905[(2)] = inst_13840);

(statearr_13865_13905[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13849 === (3))){
var inst_13844 = (state_13847[(2)]);
var state_13847__$1 = state_13847;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13847__$1,inst_13844);
} else {
if((state_val_13849 === (12))){
var inst_13799 = (state_13847[(7)]);
var inst_13820 = cljs.core.vec.call(null,inst_13799);
var state_13847__$1 = state_13847;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13847__$1,(14),out,inst_13820);
} else {
if((state_val_13849 === (2))){
var state_13847__$1 = state_13847;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13847__$1,(4),ch);
} else {
if((state_val_13849 === (11))){
var inst_13799 = (state_13847[(7)]);
var inst_13803 = (state_13847[(9)]);
var inst_13807 = (state_13847[(11)]);
var inst_13817 = inst_13799.push(inst_13803);
var tmp13867 = inst_13799;
var inst_13799__$1 = tmp13867;
var inst_13800 = inst_13807;
var state_13847__$1 = (function (){var statearr_13871 = state_13847;
(statearr_13871[(12)] = inst_13817);

(statearr_13871[(7)] = inst_13799__$1);

(statearr_13871[(8)] = inst_13800);

return statearr_13871;
})();
var statearr_13872_13907 = state_13847__$1;
(statearr_13872_13907[(2)] = null);

(statearr_13872_13907[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13849 === (9))){
var inst_13800 = (state_13847[(8)]);
var inst_13813 = cljs.core.keyword_identical_QMARK_.call(null,inst_13800,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_13847__$1 = state_13847;
var statearr_13873_13908 = state_13847__$1;
(statearr_13873_13908[(2)] = inst_13813);

(statearr_13873_13908[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13849 === (5))){
var inst_13803 = (state_13847[(9)]);
var inst_13807 = (state_13847[(11)]);
var inst_13800 = (state_13847[(8)]);
var inst_13808 = (state_13847[(13)]);
var inst_13807__$1 = f.call(null,inst_13803);
var inst_13808__$1 = cljs.core._EQ_.call(null,inst_13807__$1,inst_13800);
var state_13847__$1 = (function (){var statearr_13874 = state_13847;
(statearr_13874[(11)] = inst_13807__$1);

(statearr_13874[(13)] = inst_13808__$1);

return statearr_13874;
})();
if(inst_13808__$1){
var statearr_13875_13913 = state_13847__$1;
(statearr_13875_13913[(1)] = (8));

} else {
var statearr_13876_13914 = state_13847__$1;
(statearr_13876_13914[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13849 === (14))){
var inst_13803 = (state_13847[(9)]);
var inst_13807 = (state_13847[(11)]);
var inst_13822 = (state_13847[(2)]);
var inst_13824 = [];
var inst_13825 = inst_13824.push(inst_13803);
var inst_13799 = inst_13824;
var inst_13800 = inst_13807;
var state_13847__$1 = (function (){var statearr_13877 = state_13847;
(statearr_13877[(14)] = inst_13822);

(statearr_13877[(15)] = inst_13825);

(statearr_13877[(7)] = inst_13799);

(statearr_13877[(8)] = inst_13800);

return statearr_13877;
})();
var statearr_13878_13915 = state_13847__$1;
(statearr_13878_13915[(2)] = null);

(statearr_13878_13915[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13849 === (16))){
var state_13847__$1 = state_13847;
var statearr_13879_13916 = state_13847__$1;
(statearr_13879_13916[(2)] = null);

(statearr_13879_13916[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13849 === (10))){
var inst_13815 = (state_13847[(2)]);
var state_13847__$1 = state_13847;
if(cljs.core.truth_(inst_13815)){
var statearr_13880_13917 = state_13847__$1;
(statearr_13880_13917[(1)] = (11));

} else {
var statearr_13881_13918 = state_13847__$1;
(statearr_13881_13918[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13849 === (18))){
var inst_13836 = (state_13847[(2)]);
var state_13847__$1 = state_13847;
var statearr_13882_13919 = state_13847__$1;
(statearr_13882_13919[(2)] = inst_13836);

(statearr_13882_13919[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13849 === (8))){
var inst_13808 = (state_13847[(13)]);
var state_13847__$1 = state_13847;
var statearr_13883_13920 = state_13847__$1;
(statearr_13883_13920[(2)] = inst_13808);

(statearr_13883_13920[(1)] = (10));


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
var cljs$core$async$state_machine__11191__auto____1 = (function (state_13847){
while(true){
var ret_value__11192__auto__ = (function (){try{while(true){
var result__11193__auto__ = switch__11190__auto__.call(null,state_13847);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11193__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11193__auto__;
}
break;
}
}catch (e13885){var ex__11194__auto__ = e13885;
var statearr_13886_13921 = state_13847;
(statearr_13886_13921[(2)] = ex__11194__auto__);


if(cljs.core.seq.call(null,(state_13847[(4)]))){
var statearr_13887_13922 = state_13847;
(statearr_13887_13922[(1)] = cljs.core.first.call(null,(state_13847[(4)])));

} else {
throw ex__11194__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11192__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13923 = state_13847;
state_13847 = G__13923;
continue;
} else {
return ret_value__11192__auto__;
}
break;
}
});
cljs$core$async$state_machine__11191__auto__ = function(state_13847){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__11191__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__11191__auto____1.call(this,state_13847);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__11191__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__11191__auto____0;
cljs$core$async$state_machine__11191__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__11191__auto____1;
return cljs$core$async$state_machine__11191__auto__;
})()
})();
var state__11395__auto__ = (function (){var statearr_13888 = f__11394__auto__.call(null);
(statearr_13888[(6)] = c__11393__auto___13890);

return statearr_13888;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11395__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=async.js.map
