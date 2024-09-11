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
var G__11444 = arguments.length;
switch (G__11444) {
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
var val_11446 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_11446);
} else {
cljs.core.async.impl.dispatch.run.call(null,(function (){
return fn1.call(null,val_11446);
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
var G__11448 = arguments.length;
switch (G__11448) {
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
var n__5593__auto___11455 = n;
var x_11456 = (0);
while(true){
if((x_11456 < n__5593__auto___11455)){
(a[x_11456] = x_11456);

var G__11457 = (x_11456 + (1));
x_11456 = G__11457;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async11452 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async11452 = (function (flag,meta11453){
this.flag = flag;
this.meta11453 = meta11453;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async11452.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11454,meta11453__$1){
var self__ = this;
var _11454__$1 = this;
return (new cljs.core.async.t_cljs$core$async11452(self__.flag,meta11453__$1));
}));

(cljs.core.async.t_cljs$core$async11452.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11454){
var self__ = this;
var _11454__$1 = this;
return self__.meta11453;
}));

(cljs.core.async.t_cljs$core$async11452.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async11452.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
}));

(cljs.core.async.t_cljs$core$async11452.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async11452.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async11452.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta11453","meta11453",-2098896539,null)], null);
}));

(cljs.core.async.t_cljs$core$async11452.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async11452.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async11452");

(cljs.core.async.t_cljs$core$async11452.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write.call(null,writer__5288__auto__,"cljs.core.async/t_cljs$core$async11452");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async11452.
 */
cljs.core.async.__GT_t_cljs$core$async11452 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async11452(flag__$1,meta11453){
return (new cljs.core.async.t_cljs$core$async11452(flag__$1,meta11453));
});

}

return (new cljs.core.async.t_cljs$core$async11452(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async11469 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async11469 = (function (flag,cb,meta11470){
this.flag = flag;
this.cb = cb;
this.meta11470 = meta11470;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async11469.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11471,meta11470__$1){
var self__ = this;
var _11471__$1 = this;
return (new cljs.core.async.t_cljs$core$async11469(self__.flag,self__.cb,meta11470__$1));
}));

(cljs.core.async.t_cljs$core$async11469.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11471){
var self__ = this;
var _11471__$1 = this;
return self__.meta11470;
}));

(cljs.core.async.t_cljs$core$async11469.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async11469.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
}));

(cljs.core.async.t_cljs$core$async11469.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async11469.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async11469.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta11470","meta11470",233021167,null)], null);
}));

(cljs.core.async.t_cljs$core$async11469.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async11469.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async11469");

(cljs.core.async.t_cljs$core$async11469.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write.call(null,writer__5288__auto__,"cljs.core.async/t_cljs$core$async11469");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async11469.
 */
cljs.core.async.__GT_t_cljs$core$async11469 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async11469(flag__$1,cb__$1,meta11470){
return (new cljs.core.async.t_cljs$core$async11469(flag__$1,cb__$1,meta11470));
});

}

return (new cljs.core.async.t_cljs$core$async11469(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__11486_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__11486_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,ports__$1,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,ports__$1,n,idxs,priority){
return (function (p1__11487_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__11487_SHARP_,port], null));
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
var G__11499 = (i + (1));
i = G__11499;
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
var len__5726__auto___11508 = arguments.length;
var i__5727__auto___11510 = (0);
while(true){
if((i__5727__auto___11510 < len__5726__auto___11508)){
args__5732__auto__.push((arguments[i__5727__auto___11510]));

var G__11512 = (i__5727__auto___11510 + (1));
i__5727__auto___11510 = G__11512;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__11496){
var map__11497 = p__11496;
var map__11497__$1 = cljs.core.__destructure_map.call(null,map__11497);
var opts = map__11497__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq11493){
var G__11494 = cljs.core.first.call(null,seq11493);
var seq11493__$1 = cljs.core.next.call(null,seq11493);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__11494,seq11493__$1);
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
var G__11514 = arguments.length;
switch (G__11514) {
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
var c__11371__auto___11602 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__11372__auto__ = (function (){var switch__11190__auto__ = (function (state_11550){
var state_val_11551 = (state_11550[(1)]);
if((state_val_11551 === (7))){
var inst_11545 = (state_11550[(2)]);
var state_11550__$1 = state_11550;
var statearr_11555_11603 = state_11550__$1;
(statearr_11555_11603[(2)] = inst_11545);

(statearr_11555_11603[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11551 === (1))){
var state_11550__$1 = state_11550;
var statearr_11556_11604 = state_11550__$1;
(statearr_11556_11604[(2)] = null);

(statearr_11556_11604[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11551 === (4))){
var inst_11525 = (state_11550[(7)]);
var inst_11525__$1 = (state_11550[(2)]);
var inst_11526 = (inst_11525__$1 == null);
var state_11550__$1 = (function (){var statearr_11559 = state_11550;
(statearr_11559[(7)] = inst_11525__$1);

return statearr_11559;
})();
if(cljs.core.truth_(inst_11526)){
var statearr_11560_11609 = state_11550__$1;
(statearr_11560_11609[(1)] = (5));

} else {
var statearr_11561_11610 = state_11550__$1;
(statearr_11561_11610[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11551 === (13))){
var state_11550__$1 = state_11550;
var statearr_11565_11611 = state_11550__$1;
(statearr_11565_11611[(2)] = null);

(statearr_11565_11611[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11551 === (6))){
var inst_11525 = (state_11550[(7)]);
var state_11550__$1 = state_11550;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11550__$1,(11),to,inst_11525);
} else {
if((state_val_11551 === (3))){
var inst_11547 = (state_11550[(2)]);
var state_11550__$1 = state_11550;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11550__$1,inst_11547);
} else {
if((state_val_11551 === (12))){
var state_11550__$1 = state_11550;
var statearr_11568_11618 = state_11550__$1;
(statearr_11568_11618[(2)] = null);

(statearr_11568_11618[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11551 === (2))){
var state_11550__$1 = state_11550;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11550__$1,(4),from);
} else {
if((state_val_11551 === (11))){
var inst_11537 = (state_11550[(2)]);
var state_11550__$1 = state_11550;
if(cljs.core.truth_(inst_11537)){
var statearr_11569_11620 = state_11550__$1;
(statearr_11569_11620[(1)] = (12));

} else {
var statearr_11570_11621 = state_11550__$1;
(statearr_11570_11621[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11551 === (9))){
var state_11550__$1 = state_11550;
var statearr_11572_11623 = state_11550__$1;
(statearr_11572_11623[(2)] = null);

(statearr_11572_11623[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11551 === (5))){
var state_11550__$1 = state_11550;
if(cljs.core.truth_(close_QMARK_)){
var statearr_11576_11624 = state_11550__$1;
(statearr_11576_11624[(1)] = (8));

} else {
var statearr_11580_11626 = state_11550__$1;
(statearr_11580_11626[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11551 === (14))){
var inst_11543 = (state_11550[(2)]);
var state_11550__$1 = state_11550;
var statearr_11582_11628 = state_11550__$1;
(statearr_11582_11628[(2)] = inst_11543);

(statearr_11582_11628[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11551 === (10))){
var inst_11532 = (state_11550[(2)]);
var state_11550__$1 = state_11550;
var statearr_11583_11631 = state_11550__$1;
(statearr_11583_11631[(2)] = inst_11532);

(statearr_11583_11631[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11551 === (8))){
var inst_11529 = cljs.core.async.close_BANG_.call(null,to);
var state_11550__$1 = state_11550;
var statearr_11589_11632 = state_11550__$1;
(statearr_11589_11632[(2)] = inst_11529);

(statearr_11589_11632[(1)] = (10));


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
var statearr_11591 = [null,null,null,null,null,null,null,null];
(statearr_11591[(0)] = cljs$core$async$state_machine__11191__auto__);

(statearr_11591[(1)] = (1));

return statearr_11591;
});
var cljs$core$async$state_machine__11191__auto____1 = (function (state_11550){
while(true){
var ret_value__11192__auto__ = (function (){try{while(true){
var result__11193__auto__ = switch__11190__auto__.call(null,state_11550);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11193__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11193__auto__;
}
break;
}
}catch (e11592){var ex__11194__auto__ = e11592;
var statearr_11593_11639 = state_11550;
(statearr_11593_11639[(2)] = ex__11194__auto__);


if(cljs.core.seq.call(null,(state_11550[(4)]))){
var statearr_11594_11640 = state_11550;
(statearr_11594_11640[(1)] = cljs.core.first.call(null,(state_11550[(4)])));

} else {
throw ex__11194__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11192__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11645 = state_11550;
state_11550 = G__11645;
continue;
} else {
return ret_value__11192__auto__;
}
break;
}
});
cljs$core$async$state_machine__11191__auto__ = function(state_11550){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__11191__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__11191__auto____1.call(this,state_11550);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__11191__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__11191__auto____0;
cljs$core$async$state_machine__11191__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__11191__auto____1;
return cljs$core$async$state_machine__11191__auto__;
})()
})();
var state__11373__auto__ = (function (){var statearr_11595 = f__11372__auto__.call(null);
(statearr_11595[(6)] = c__11371__auto___11602);

return statearr_11595;
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
var process__$1 = (function (p__11605){
var vec__11606 = p__11605;
var v = cljs.core.nth.call(null,vec__11606,(0),null);
var p = cljs.core.nth.call(null,vec__11606,(1),null);
var job = vec__11606;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__11371__auto___11810 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__11372__auto__ = (function (){var switch__11190__auto__ = (function (state_11616){
var state_val_11617 = (state_11616[(1)]);
if((state_val_11617 === (1))){
var state_11616__$1 = state_11616;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11616__$1,(2),res,v);
} else {
if((state_val_11617 === (2))){
var inst_11613 = (state_11616[(2)]);
var inst_11614 = cljs.core.async.close_BANG_.call(null,res);
var state_11616__$1 = (function (){var statearr_11622 = state_11616;
(statearr_11622[(7)] = inst_11613);

return statearr_11622;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11616__$1,inst_11614);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__11191__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__11191__auto____0 = (function (){
var statearr_11625 = [null,null,null,null,null,null,null,null];
(statearr_11625[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__11191__auto__);

(statearr_11625[(1)] = (1));

return statearr_11625;
});
var cljs$core$async$pipeline_STAR__$_state_machine__11191__auto____1 = (function (state_11616){
while(true){
var ret_value__11192__auto__ = (function (){try{while(true){
var result__11193__auto__ = switch__11190__auto__.call(null,state_11616);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11193__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11193__auto__;
}
break;
}
}catch (e11627){var ex__11194__auto__ = e11627;
var statearr_11629_11813 = state_11616;
(statearr_11629_11813[(2)] = ex__11194__auto__);


if(cljs.core.seq.call(null,(state_11616[(4)]))){
var statearr_11630_11814 = state_11616;
(statearr_11630_11814[(1)] = cljs.core.first.call(null,(state_11616[(4)])));

} else {
throw ex__11194__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11192__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11815 = state_11616;
state_11616 = G__11815;
continue;
} else {
return ret_value__11192__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__11191__auto__ = function(state_11616){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__11191__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__11191__auto____1.call(this,state_11616);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__11191__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__11191__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__11191__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__11191__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__11191__auto__;
})()
})();
var state__11373__auto__ = (function (){var statearr_11638 = f__11372__auto__.call(null);
(statearr_11638[(6)] = c__11371__auto___11810);

return statearr_11638;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11373__auto__);
}));


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});
var async = (function (p__11641){
var vec__11642 = p__11641;
var v = cljs.core.nth.call(null,vec__11642,(0),null);
var p = cljs.core.nth.call(null,vec__11642,(1),null);
var job = vec__11642;
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
var n__5593__auto___11816 = n;
var __11817 = (0);
while(true){
if((__11817 < n__5593__auto___11816)){
var G__11646_11818 = type;
var G__11646_11819__$1 = (((G__11646_11818 instanceof cljs.core.Keyword))?G__11646_11818.fqn:null);
switch (G__11646_11819__$1) {
case "compute":
var c__11371__auto___11821 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__11817,c__11371__auto___11821,G__11646_11818,G__11646_11819__$1,n__5593__auto___11816,jobs,results,process__$1,async){
return (function (){
var f__11372__auto__ = (function (){var switch__11190__auto__ = ((function (__11817,c__11371__auto___11821,G__11646_11818,G__11646_11819__$1,n__5593__auto___11816,jobs,results,process__$1,async){
return (function (state_11659){
var state_val_11660 = (state_11659[(1)]);
if((state_val_11660 === (1))){
var state_11659__$1 = state_11659;
var statearr_11664_11822 = state_11659__$1;
(statearr_11664_11822[(2)] = null);

(statearr_11664_11822[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11660 === (2))){
var state_11659__$1 = state_11659;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11659__$1,(4),jobs);
} else {
if((state_val_11660 === (3))){
var inst_11657 = (state_11659[(2)]);
var state_11659__$1 = state_11659;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11659__$1,inst_11657);
} else {
if((state_val_11660 === (4))){
var inst_11649 = (state_11659[(2)]);
var inst_11650 = process__$1.call(null,inst_11649);
var state_11659__$1 = state_11659;
if(cljs.core.truth_(inst_11650)){
var statearr_11667_11825 = state_11659__$1;
(statearr_11667_11825[(1)] = (5));

} else {
var statearr_11668_11826 = state_11659__$1;
(statearr_11668_11826[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11660 === (5))){
var state_11659__$1 = state_11659;
var statearr_11669_11827 = state_11659__$1;
(statearr_11669_11827[(2)] = null);

(statearr_11669_11827[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11660 === (6))){
var state_11659__$1 = state_11659;
var statearr_11670_11828 = state_11659__$1;
(statearr_11670_11828[(2)] = null);

(statearr_11670_11828[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11660 === (7))){
var inst_11655 = (state_11659[(2)]);
var state_11659__$1 = state_11659;
var statearr_11671_11829 = state_11659__$1;
(statearr_11671_11829[(2)] = inst_11655);

(statearr_11671_11829[(1)] = (3));


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
});})(__11817,c__11371__auto___11821,G__11646_11818,G__11646_11819__$1,n__5593__auto___11816,jobs,results,process__$1,async))
;
return ((function (__11817,switch__11190__auto__,c__11371__auto___11821,G__11646_11818,G__11646_11819__$1,n__5593__auto___11816,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__11191__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__11191__auto____0 = (function (){
var statearr_11672 = [null,null,null,null,null,null,null];
(statearr_11672[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__11191__auto__);

(statearr_11672[(1)] = (1));

return statearr_11672;
});
var cljs$core$async$pipeline_STAR__$_state_machine__11191__auto____1 = (function (state_11659){
while(true){
var ret_value__11192__auto__ = (function (){try{while(true){
var result__11193__auto__ = switch__11190__auto__.call(null,state_11659);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11193__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11193__auto__;
}
break;
}
}catch (e11673){var ex__11194__auto__ = e11673;
var statearr_11674_11837 = state_11659;
(statearr_11674_11837[(2)] = ex__11194__auto__);


if(cljs.core.seq.call(null,(state_11659[(4)]))){
var statearr_11675_11846 = state_11659;
(statearr_11675_11846[(1)] = cljs.core.first.call(null,(state_11659[(4)])));

} else {
throw ex__11194__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11192__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11858 = state_11659;
state_11659 = G__11858;
continue;
} else {
return ret_value__11192__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__11191__auto__ = function(state_11659){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__11191__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__11191__auto____1.call(this,state_11659);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__11191__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__11191__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__11191__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__11191__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__11191__auto__;
})()
;})(__11817,switch__11190__auto__,c__11371__auto___11821,G__11646_11818,G__11646_11819__$1,n__5593__auto___11816,jobs,results,process__$1,async))
})();
var state__11373__auto__ = (function (){var statearr_11676 = f__11372__auto__.call(null);
(statearr_11676[(6)] = c__11371__auto___11821);

return statearr_11676;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11373__auto__);
});})(__11817,c__11371__auto___11821,G__11646_11818,G__11646_11819__$1,n__5593__auto___11816,jobs,results,process__$1,async))
);


break;
case "async":
var c__11371__auto___11860 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__11817,c__11371__auto___11860,G__11646_11818,G__11646_11819__$1,n__5593__auto___11816,jobs,results,process__$1,async){
return (function (){
var f__11372__auto__ = (function (){var switch__11190__auto__ = ((function (__11817,c__11371__auto___11860,G__11646_11818,G__11646_11819__$1,n__5593__auto___11816,jobs,results,process__$1,async){
return (function (state_11689){
var state_val_11690 = (state_11689[(1)]);
if((state_val_11690 === (1))){
var state_11689__$1 = state_11689;
var statearr_11691_11863 = state_11689__$1;
(statearr_11691_11863[(2)] = null);

(statearr_11691_11863[(1)] = (2));


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
var statearr_11692_11865 = state_11689__$1;
(statearr_11692_11865[(1)] = (5));

} else {
var statearr_11693_11867 = state_11689__$1;
(statearr_11693_11867[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11690 === (5))){
var state_11689__$1 = state_11689;
var statearr_11694_11869 = state_11689__$1;
(statearr_11694_11869[(2)] = null);

(statearr_11694_11869[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11690 === (6))){
var state_11689__$1 = state_11689;
var statearr_11695_11871 = state_11689__$1;
(statearr_11695_11871[(2)] = null);

(statearr_11695_11871[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11690 === (7))){
var inst_11685 = (state_11689[(2)]);
var state_11689__$1 = state_11689;
var statearr_11696_11875 = state_11689__$1;
(statearr_11696_11875[(2)] = inst_11685);

(statearr_11696_11875[(1)] = (3));


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
});})(__11817,c__11371__auto___11860,G__11646_11818,G__11646_11819__$1,n__5593__auto___11816,jobs,results,process__$1,async))
;
return ((function (__11817,switch__11190__auto__,c__11371__auto___11860,G__11646_11818,G__11646_11819__$1,n__5593__auto___11816,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__11191__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__11191__auto____0 = (function (){
var statearr_11697 = [null,null,null,null,null,null,null];
(statearr_11697[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__11191__auto__);

(statearr_11697[(1)] = (1));

return statearr_11697;
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
}catch (e11698){var ex__11194__auto__ = e11698;
var statearr_11699_11880 = state_11689;
(statearr_11699_11880[(2)] = ex__11194__auto__);


if(cljs.core.seq.call(null,(state_11689[(4)]))){
var statearr_11700_11884 = state_11689;
(statearr_11700_11884[(1)] = cljs.core.first.call(null,(state_11689[(4)])));

} else {
throw ex__11194__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11192__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11885 = state_11689;
state_11689 = G__11885;
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
;})(__11817,switch__11190__auto__,c__11371__auto___11860,G__11646_11818,G__11646_11819__$1,n__5593__auto___11816,jobs,results,process__$1,async))
})();
var state__11373__auto__ = (function (){var statearr_11701 = f__11372__auto__.call(null);
(statearr_11701[(6)] = c__11371__auto___11860);

return statearr_11701;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11373__auto__);
});})(__11817,c__11371__auto___11860,G__11646_11818,G__11646_11819__$1,n__5593__auto___11816,jobs,results,process__$1,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__11646_11819__$1)].join('')));

}

var G__11887 = (__11817 + (1));
__11817 = G__11887;
continue;
} else {
}
break;
}

var c__11371__auto___11888 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__11372__auto__ = (function (){var switch__11190__auto__ = (function (state_11723){
var state_val_11724 = (state_11723[(1)]);
if((state_val_11724 === (7))){
var inst_11719 = (state_11723[(2)]);
var state_11723__$1 = state_11723;
var statearr_11725_11891 = state_11723__$1;
(statearr_11725_11891[(2)] = inst_11719);

(statearr_11725_11891[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11724 === (1))){
var state_11723__$1 = state_11723;
var statearr_11726_11893 = state_11723__$1;
(statearr_11726_11893[(2)] = null);

(statearr_11726_11893[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11724 === (4))){
var inst_11704 = (state_11723[(7)]);
var inst_11704__$1 = (state_11723[(2)]);
var inst_11705 = (inst_11704__$1 == null);
var state_11723__$1 = (function (){var statearr_11727 = state_11723;
(statearr_11727[(7)] = inst_11704__$1);

return statearr_11727;
})();
if(cljs.core.truth_(inst_11705)){
var statearr_11728_11896 = state_11723__$1;
(statearr_11728_11896[(1)] = (5));

} else {
var statearr_11729_11897 = state_11723__$1;
(statearr_11729_11897[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11724 === (6))){
var inst_11704 = (state_11723[(7)]);
var inst_11709 = (state_11723[(8)]);
var inst_11709__$1 = cljs.core.async.chan.call(null,(1));
var inst_11710 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_11711 = [inst_11704,inst_11709__$1];
var inst_11712 = (new cljs.core.PersistentVector(null,2,(5),inst_11710,inst_11711,null));
var state_11723__$1 = (function (){var statearr_11730 = state_11723;
(statearr_11730[(8)] = inst_11709__$1);

return statearr_11730;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11723__$1,(8),jobs,inst_11712);
} else {
if((state_val_11724 === (3))){
var inst_11721 = (state_11723[(2)]);
var state_11723__$1 = state_11723;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11723__$1,inst_11721);
} else {
if((state_val_11724 === (2))){
var state_11723__$1 = state_11723;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11723__$1,(4),from);
} else {
if((state_val_11724 === (9))){
var inst_11716 = (state_11723[(2)]);
var state_11723__$1 = (function (){var statearr_11731 = state_11723;
(statearr_11731[(9)] = inst_11716);

return statearr_11731;
})();
var statearr_11732_11901 = state_11723__$1;
(statearr_11732_11901[(2)] = null);

(statearr_11732_11901[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11724 === (5))){
var inst_11707 = cljs.core.async.close_BANG_.call(null,jobs);
var state_11723__$1 = state_11723;
var statearr_11733_11903 = state_11723__$1;
(statearr_11733_11903[(2)] = inst_11707);

(statearr_11733_11903[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11724 === (8))){
var inst_11709 = (state_11723[(8)]);
var inst_11714 = (state_11723[(2)]);
var state_11723__$1 = (function (){var statearr_11734 = state_11723;
(statearr_11734[(10)] = inst_11714);

return statearr_11734;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11723__$1,(9),results,inst_11709);
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
var statearr_11735 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_11735[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__11191__auto__);

(statearr_11735[(1)] = (1));

return statearr_11735;
});
var cljs$core$async$pipeline_STAR__$_state_machine__11191__auto____1 = (function (state_11723){
while(true){
var ret_value__11192__auto__ = (function (){try{while(true){
var result__11193__auto__ = switch__11190__auto__.call(null,state_11723);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11193__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11193__auto__;
}
break;
}
}catch (e11736){var ex__11194__auto__ = e11736;
var statearr_11737_11907 = state_11723;
(statearr_11737_11907[(2)] = ex__11194__auto__);


if(cljs.core.seq.call(null,(state_11723[(4)]))){
var statearr_11738_11908 = state_11723;
(statearr_11738_11908[(1)] = cljs.core.first.call(null,(state_11723[(4)])));

} else {
throw ex__11194__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11192__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11909 = state_11723;
state_11723 = G__11909;
continue;
} else {
return ret_value__11192__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__11191__auto__ = function(state_11723){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__11191__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__11191__auto____1.call(this,state_11723);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__11191__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__11191__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__11191__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__11191__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__11191__auto__;
})()
})();
var state__11373__auto__ = (function (){var statearr_11739 = f__11372__auto__.call(null);
(statearr_11739[(6)] = c__11371__auto___11888);

return statearr_11739;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11373__auto__);
}));


var c__11371__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__11372__auto__ = (function (){var switch__11190__auto__ = (function (state_11777){
var state_val_11778 = (state_11777[(1)]);
if((state_val_11778 === (7))){
var inst_11773 = (state_11777[(2)]);
var state_11777__$1 = state_11777;
var statearr_11779_11910 = state_11777__$1;
(statearr_11779_11910[(2)] = inst_11773);

(statearr_11779_11910[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11778 === (20))){
var state_11777__$1 = state_11777;
var statearr_11780_11912 = state_11777__$1;
(statearr_11780_11912[(2)] = null);

(statearr_11780_11912[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11778 === (1))){
var state_11777__$1 = state_11777;
var statearr_11781_11913 = state_11777__$1;
(statearr_11781_11913[(2)] = null);

(statearr_11781_11913[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11778 === (4))){
var inst_11742 = (state_11777[(7)]);
var inst_11742__$1 = (state_11777[(2)]);
var inst_11743 = (inst_11742__$1 == null);
var state_11777__$1 = (function (){var statearr_11782 = state_11777;
(statearr_11782[(7)] = inst_11742__$1);

return statearr_11782;
})();
if(cljs.core.truth_(inst_11743)){
var statearr_11783_11914 = state_11777__$1;
(statearr_11783_11914[(1)] = (5));

} else {
var statearr_11784_11915 = state_11777__$1;
(statearr_11784_11915[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11778 === (15))){
var inst_11755 = (state_11777[(8)]);
var state_11777__$1 = state_11777;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11777__$1,(18),to,inst_11755);
} else {
if((state_val_11778 === (21))){
var inst_11768 = (state_11777[(2)]);
var state_11777__$1 = state_11777;
var statearr_11785_11916 = state_11777__$1;
(statearr_11785_11916[(2)] = inst_11768);

(statearr_11785_11916[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11778 === (13))){
var inst_11770 = (state_11777[(2)]);
var state_11777__$1 = (function (){var statearr_11786 = state_11777;
(statearr_11786[(9)] = inst_11770);

return statearr_11786;
})();
var statearr_11787_11921 = state_11777__$1;
(statearr_11787_11921[(2)] = null);

(statearr_11787_11921[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11778 === (6))){
var inst_11742 = (state_11777[(7)]);
var state_11777__$1 = state_11777;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11777__$1,(11),inst_11742);
} else {
if((state_val_11778 === (17))){
var inst_11763 = (state_11777[(2)]);
var state_11777__$1 = state_11777;
if(cljs.core.truth_(inst_11763)){
var statearr_11788_11931 = state_11777__$1;
(statearr_11788_11931[(1)] = (19));

} else {
var statearr_11789_11933 = state_11777__$1;
(statearr_11789_11933[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11778 === (3))){
var inst_11775 = (state_11777[(2)]);
var state_11777__$1 = state_11777;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11777__$1,inst_11775);
} else {
if((state_val_11778 === (12))){
var inst_11752 = (state_11777[(10)]);
var state_11777__$1 = state_11777;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11777__$1,(14),inst_11752);
} else {
if((state_val_11778 === (2))){
var state_11777__$1 = state_11777;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11777__$1,(4),results);
} else {
if((state_val_11778 === (19))){
var state_11777__$1 = state_11777;
var statearr_11790_11948 = state_11777__$1;
(statearr_11790_11948[(2)] = null);

(statearr_11790_11948[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11778 === (11))){
var inst_11752 = (state_11777[(2)]);
var state_11777__$1 = (function (){var statearr_11791 = state_11777;
(statearr_11791[(10)] = inst_11752);

return statearr_11791;
})();
var statearr_11792_11949 = state_11777__$1;
(statearr_11792_11949[(2)] = null);

(statearr_11792_11949[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11778 === (9))){
var state_11777__$1 = state_11777;
var statearr_11793_11950 = state_11777__$1;
(statearr_11793_11950[(2)] = null);

(statearr_11793_11950[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11778 === (5))){
var state_11777__$1 = state_11777;
if(cljs.core.truth_(close_QMARK_)){
var statearr_11794_11951 = state_11777__$1;
(statearr_11794_11951[(1)] = (8));

} else {
var statearr_11795_11953 = state_11777__$1;
(statearr_11795_11953[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11778 === (14))){
var inst_11755 = (state_11777[(8)]);
var inst_11757 = (state_11777[(11)]);
var inst_11755__$1 = (state_11777[(2)]);
var inst_11756 = (inst_11755__$1 == null);
var inst_11757__$1 = cljs.core.not.call(null,inst_11756);
var state_11777__$1 = (function (){var statearr_11796 = state_11777;
(statearr_11796[(8)] = inst_11755__$1);

(statearr_11796[(11)] = inst_11757__$1);

return statearr_11796;
})();
if(inst_11757__$1){
var statearr_11797_11956 = state_11777__$1;
(statearr_11797_11956[(1)] = (15));

} else {
var statearr_11798_11957 = state_11777__$1;
(statearr_11798_11957[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11778 === (16))){
var inst_11757 = (state_11777[(11)]);
var state_11777__$1 = state_11777;
var statearr_11799_11958 = state_11777__$1;
(statearr_11799_11958[(2)] = inst_11757);

(statearr_11799_11958[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11778 === (10))){
var inst_11749 = (state_11777[(2)]);
var state_11777__$1 = state_11777;
var statearr_11800_11961 = state_11777__$1;
(statearr_11800_11961[(2)] = inst_11749);

(statearr_11800_11961[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11778 === (18))){
var inst_11760 = (state_11777[(2)]);
var state_11777__$1 = state_11777;
var statearr_11801_11963 = state_11777__$1;
(statearr_11801_11963[(2)] = inst_11760);

(statearr_11801_11963[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11778 === (8))){
var inst_11746 = cljs.core.async.close_BANG_.call(null,to);
var state_11777__$1 = state_11777;
var statearr_11802_11964 = state_11777__$1;
(statearr_11802_11964[(2)] = inst_11746);

(statearr_11802_11964[(1)] = (10));


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
var statearr_11803 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_11803[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__11191__auto__);

(statearr_11803[(1)] = (1));

return statearr_11803;
});
var cljs$core$async$pipeline_STAR__$_state_machine__11191__auto____1 = (function (state_11777){
while(true){
var ret_value__11192__auto__ = (function (){try{while(true){
var result__11193__auto__ = switch__11190__auto__.call(null,state_11777);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11193__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11193__auto__;
}
break;
}
}catch (e11804){var ex__11194__auto__ = e11804;
var statearr_11805_11968 = state_11777;
(statearr_11805_11968[(2)] = ex__11194__auto__);


if(cljs.core.seq.call(null,(state_11777[(4)]))){
var statearr_11806_11969 = state_11777;
(statearr_11806_11969[(1)] = cljs.core.first.call(null,(state_11777[(4)])));

} else {
throw ex__11194__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11192__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11970 = state_11777;
state_11777 = G__11970;
continue;
} else {
return ret_value__11192__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__11191__auto__ = function(state_11777){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__11191__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__11191__auto____1.call(this,state_11777);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__11191__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__11191__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__11191__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__11191__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__11191__auto__;
})()
})();
var state__11373__auto__ = (function (){var statearr_11807 = f__11372__auto__.call(null);
(statearr_11807[(6)] = c__11371__auto__);

return statearr_11807;
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
var G__11809 = arguments.length;
switch (G__11809) {
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
var G__11812 = arguments.length;
switch (G__11812) {
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
var G__11824 = arguments.length;
switch (G__11824) {
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
var c__11371__auto___11984 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__11372__auto__ = (function (){var switch__11190__auto__ = (function (state_11857){
var state_val_11859 = (state_11857[(1)]);
if((state_val_11859 === (7))){
var inst_11853 = (state_11857[(2)]);
var state_11857__$1 = state_11857;
var statearr_11861_11985 = state_11857__$1;
(statearr_11861_11985[(2)] = inst_11853);

(statearr_11861_11985[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11859 === (1))){
var state_11857__$1 = state_11857;
var statearr_11862_11986 = state_11857__$1;
(statearr_11862_11986[(2)] = null);

(statearr_11862_11986[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11859 === (4))){
var inst_11832 = (state_11857[(7)]);
var inst_11832__$1 = (state_11857[(2)]);
var inst_11833 = (inst_11832__$1 == null);
var state_11857__$1 = (function (){var statearr_11864 = state_11857;
(statearr_11864[(7)] = inst_11832__$1);

return statearr_11864;
})();
if(cljs.core.truth_(inst_11833)){
var statearr_11866_11994 = state_11857__$1;
(statearr_11866_11994[(1)] = (5));

} else {
var statearr_11868_11995 = state_11857__$1;
(statearr_11868_11995[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11859 === (13))){
var state_11857__$1 = state_11857;
var statearr_11870_11996 = state_11857__$1;
(statearr_11870_11996[(2)] = null);

(statearr_11870_11996[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11859 === (6))){
var inst_11832 = (state_11857[(7)]);
var inst_11839 = p.call(null,inst_11832);
var state_11857__$1 = state_11857;
if(cljs.core.truth_(inst_11839)){
var statearr_11876_11997 = state_11857__$1;
(statearr_11876_11997[(1)] = (9));

} else {
var statearr_11877_11998 = state_11857__$1;
(statearr_11877_11998[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11859 === (3))){
var inst_11855 = (state_11857[(2)]);
var state_11857__$1 = state_11857;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11857__$1,inst_11855);
} else {
if((state_val_11859 === (12))){
var state_11857__$1 = state_11857;
var statearr_11882_12000 = state_11857__$1;
(statearr_11882_12000[(2)] = null);

(statearr_11882_12000[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11859 === (2))){
var state_11857__$1 = state_11857;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11857__$1,(4),ch);
} else {
if((state_val_11859 === (11))){
var inst_11832 = (state_11857[(7)]);
var inst_11843 = (state_11857[(2)]);
var state_11857__$1 = state_11857;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11857__$1,(8),inst_11843,inst_11832);
} else {
if((state_val_11859 === (9))){
var state_11857__$1 = state_11857;
var statearr_11889_12003 = state_11857__$1;
(statearr_11889_12003[(2)] = tc);

(statearr_11889_12003[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11859 === (5))){
var inst_11835 = cljs.core.async.close_BANG_.call(null,tc);
var inst_11836 = cljs.core.async.close_BANG_.call(null,fc);
var state_11857__$1 = (function (){var statearr_11892 = state_11857;
(statearr_11892[(8)] = inst_11835);

return statearr_11892;
})();
var statearr_11894_12005 = state_11857__$1;
(statearr_11894_12005[(2)] = inst_11836);

(statearr_11894_12005[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11859 === (14))){
var inst_11851 = (state_11857[(2)]);
var state_11857__$1 = state_11857;
var statearr_11895_12006 = state_11857__$1;
(statearr_11895_12006[(2)] = inst_11851);

(statearr_11895_12006[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11859 === (10))){
var state_11857__$1 = state_11857;
var statearr_11898_12007 = state_11857__$1;
(statearr_11898_12007[(2)] = fc);

(statearr_11898_12007[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11859 === (8))){
var inst_11845 = (state_11857[(2)]);
var state_11857__$1 = state_11857;
if(cljs.core.truth_(inst_11845)){
var statearr_11899_12009 = state_11857__$1;
(statearr_11899_12009[(1)] = (12));

} else {
var statearr_11900_12010 = state_11857__$1;
(statearr_11900_12010[(1)] = (13));

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
var statearr_11902 = [null,null,null,null,null,null,null,null,null];
(statearr_11902[(0)] = cljs$core$async$state_machine__11191__auto__);

(statearr_11902[(1)] = (1));

return statearr_11902;
});
var cljs$core$async$state_machine__11191__auto____1 = (function (state_11857){
while(true){
var ret_value__11192__auto__ = (function (){try{while(true){
var result__11193__auto__ = switch__11190__auto__.call(null,state_11857);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11193__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11193__auto__;
}
break;
}
}catch (e11904){var ex__11194__auto__ = e11904;
var statearr_11905_12012 = state_11857;
(statearr_11905_12012[(2)] = ex__11194__auto__);


if(cljs.core.seq.call(null,(state_11857[(4)]))){
var statearr_11906_12014 = state_11857;
(statearr_11906_12014[(1)] = cljs.core.first.call(null,(state_11857[(4)])));

} else {
throw ex__11194__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11192__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12015 = state_11857;
state_11857 = G__12015;
continue;
} else {
return ret_value__11192__auto__;
}
break;
}
});
cljs$core$async$state_machine__11191__auto__ = function(state_11857){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__11191__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__11191__auto____1.call(this,state_11857);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__11191__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__11191__auto____0;
cljs$core$async$state_machine__11191__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__11191__auto____1;
return cljs$core$async$state_machine__11191__auto__;
})()
})();
var state__11373__auto__ = (function (){var statearr_11911 = f__11372__auto__.call(null);
(statearr_11911[(6)] = c__11371__auto___11984);

return statearr_11911;
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
var f__11372__auto__ = (function (){var switch__11190__auto__ = (function (state_11946){
var state_val_11947 = (state_11946[(1)]);
if((state_val_11947 === (7))){
var inst_11942 = (state_11946[(2)]);
var state_11946__$1 = state_11946;
var statearr_11952_12016 = state_11946__$1;
(statearr_11952_12016[(2)] = inst_11942);

(statearr_11952_12016[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11947 === (1))){
var inst_11917 = init;
var inst_11918 = inst_11917;
var state_11946__$1 = (function (){var statearr_11954 = state_11946;
(statearr_11954[(7)] = inst_11918);

return statearr_11954;
})();
var statearr_11955_12021 = state_11946__$1;
(statearr_11955_12021[(2)] = null);

(statearr_11955_12021[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11947 === (4))){
var inst_11924 = (state_11946[(8)]);
var inst_11924__$1 = (state_11946[(2)]);
var inst_11925 = (inst_11924__$1 == null);
var state_11946__$1 = (function (){var statearr_11959 = state_11946;
(statearr_11959[(8)] = inst_11924__$1);

return statearr_11959;
})();
if(cljs.core.truth_(inst_11925)){
var statearr_11960_12041 = state_11946__$1;
(statearr_11960_12041[(1)] = (5));

} else {
var statearr_11962_12043 = state_11946__$1;
(statearr_11962_12043[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11947 === (6))){
var inst_11918 = (state_11946[(7)]);
var inst_11924 = (state_11946[(8)]);
var inst_11932 = (state_11946[(9)]);
var inst_11932__$1 = f.call(null,inst_11918,inst_11924);
var inst_11934 = cljs.core.reduced_QMARK_.call(null,inst_11932__$1);
var state_11946__$1 = (function (){var statearr_11965 = state_11946;
(statearr_11965[(9)] = inst_11932__$1);

return statearr_11965;
})();
if(inst_11934){
var statearr_11966_12046 = state_11946__$1;
(statearr_11966_12046[(1)] = (8));

} else {
var statearr_11967_12047 = state_11946__$1;
(statearr_11967_12047[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11947 === (3))){
var inst_11944 = (state_11946[(2)]);
var state_11946__$1 = state_11946;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11946__$1,inst_11944);
} else {
if((state_val_11947 === (2))){
var state_11946__$1 = state_11946;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11946__$1,(4),ch);
} else {
if((state_val_11947 === (9))){
var inst_11932 = (state_11946[(9)]);
var inst_11918 = inst_11932;
var state_11946__$1 = (function (){var statearr_11971 = state_11946;
(statearr_11971[(7)] = inst_11918);

return statearr_11971;
})();
var statearr_11972_12049 = state_11946__$1;
(statearr_11972_12049[(2)] = null);

(statearr_11972_12049[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11947 === (5))){
var inst_11918 = (state_11946[(7)]);
var state_11946__$1 = state_11946;
var statearr_11974_12052 = state_11946__$1;
(statearr_11974_12052[(2)] = inst_11918);

(statearr_11974_12052[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11947 === (10))){
var inst_11940 = (state_11946[(2)]);
var state_11946__$1 = state_11946;
var statearr_11975_12053 = state_11946__$1;
(statearr_11975_12053[(2)] = inst_11940);

(statearr_11975_12053[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11947 === (8))){
var inst_11932 = (state_11946[(9)]);
var inst_11936 = cljs.core.deref.call(null,inst_11932);
var state_11946__$1 = state_11946;
var statearr_11976_12054 = state_11946__$1;
(statearr_11976_12054[(2)] = inst_11936);

(statearr_11976_12054[(1)] = (10));


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
var cljs$core$async$reduce_$_state_machine__11191__auto____1 = (function (state_11946){
while(true){
var ret_value__11192__auto__ = (function (){try{while(true){
var result__11193__auto__ = switch__11190__auto__.call(null,state_11946);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11193__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11193__auto__;
}
break;
}
}catch (e11979){var ex__11194__auto__ = e11979;
var statearr_11980_12058 = state_11946;
(statearr_11980_12058[(2)] = ex__11194__auto__);


if(cljs.core.seq.call(null,(state_11946[(4)]))){
var statearr_11981_12059 = state_11946;
(statearr_11981_12059[(1)] = cljs.core.first.call(null,(state_11946[(4)])));

} else {
throw ex__11194__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11192__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12060 = state_11946;
state_11946 = G__12060;
continue;
} else {
return ret_value__11192__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__11191__auto__ = function(state_11946){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__11191__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__11191__auto____1.call(this,state_11946);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__11191__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__11191__auto____0;
cljs$core$async$reduce_$_state_machine__11191__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__11191__auto____1;
return cljs$core$async$reduce_$_state_machine__11191__auto__;
})()
})();
var state__11373__auto__ = (function (){var statearr_11983 = f__11372__auto__.call(null);
(statearr_11983[(6)] = c__11371__auto__);

return statearr_11983;
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
var f__11372__auto__ = (function (){var switch__11190__auto__ = (function (state_11992){
var state_val_11993 = (state_11992[(1)]);
if((state_val_11993 === (1))){
var inst_11987 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_11992__$1 = state_11992;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11992__$1,(2),inst_11987);
} else {
if((state_val_11993 === (2))){
var inst_11989 = (state_11992[(2)]);
var inst_11990 = f__$1.call(null,inst_11989);
var state_11992__$1 = state_11992;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11992__$1,inst_11990);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__11191__auto__ = null;
var cljs$core$async$transduce_$_state_machine__11191__auto____0 = (function (){
var statearr_11999 = [null,null,null,null,null,null,null];
(statearr_11999[(0)] = cljs$core$async$transduce_$_state_machine__11191__auto__);

(statearr_11999[(1)] = (1));

return statearr_11999;
});
var cljs$core$async$transduce_$_state_machine__11191__auto____1 = (function (state_11992){
while(true){
var ret_value__11192__auto__ = (function (){try{while(true){
var result__11193__auto__ = switch__11190__auto__.call(null,state_11992);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11193__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11193__auto__;
}
break;
}
}catch (e12001){var ex__11194__auto__ = e12001;
var statearr_12002_12067 = state_11992;
(statearr_12002_12067[(2)] = ex__11194__auto__);


if(cljs.core.seq.call(null,(state_11992[(4)]))){
var statearr_12004_12069 = state_11992;
(statearr_12004_12069[(1)] = cljs.core.first.call(null,(state_11992[(4)])));

} else {
throw ex__11194__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11192__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12071 = state_11992;
state_11992 = G__12071;
continue;
} else {
return ret_value__11192__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__11191__auto__ = function(state_11992){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__11191__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__11191__auto____1.call(this,state_11992);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__11191__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__11191__auto____0;
cljs$core$async$transduce_$_state_machine__11191__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__11191__auto____1;
return cljs$core$async$transduce_$_state_machine__11191__auto__;
})()
})();
var state__11373__auto__ = (function (){var statearr_12008 = f__11372__auto__.call(null);
(statearr_12008[(6)] = c__11371__auto__);

return statearr_12008;
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
var G__12013 = arguments.length;
switch (G__12013) {
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
var f__11372__auto__ = (function (){var switch__11190__auto__ = (function (state_12044){
var state_val_12045 = (state_12044[(1)]);
if((state_val_12045 === (7))){
var inst_12024 = (state_12044[(2)]);
var state_12044__$1 = state_12044;
var statearr_12048_12096 = state_12044__$1;
(statearr_12048_12096[(2)] = inst_12024);

(statearr_12048_12096[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12045 === (1))){
var inst_12017 = cljs.core.seq.call(null,coll);
var inst_12018 = inst_12017;
var state_12044__$1 = (function (){var statearr_12050 = state_12044;
(statearr_12050[(7)] = inst_12018);

return statearr_12050;
})();
var statearr_12051_12100 = state_12044__$1;
(statearr_12051_12100[(2)] = null);

(statearr_12051_12100[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12045 === (4))){
var inst_12018 = (state_12044[(7)]);
var inst_12022 = cljs.core.first.call(null,inst_12018);
var state_12044__$1 = state_12044;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12044__$1,(7),ch,inst_12022);
} else {
if((state_val_12045 === (13))){
var inst_12036 = (state_12044[(2)]);
var state_12044__$1 = state_12044;
var statearr_12055_12101 = state_12044__$1;
(statearr_12055_12101[(2)] = inst_12036);

(statearr_12055_12101[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12045 === (6))){
var inst_12027 = (state_12044[(2)]);
var state_12044__$1 = state_12044;
if(cljs.core.truth_(inst_12027)){
var statearr_12056_12102 = state_12044__$1;
(statearr_12056_12102[(1)] = (8));

} else {
var statearr_12057_12106 = state_12044__$1;
(statearr_12057_12106[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12045 === (3))){
var inst_12040 = (state_12044[(2)]);
var state_12044__$1 = state_12044;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12044__$1,inst_12040);
} else {
if((state_val_12045 === (12))){
var state_12044__$1 = state_12044;
var statearr_12061_12107 = state_12044__$1;
(statearr_12061_12107[(2)] = null);

(statearr_12061_12107[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12045 === (2))){
var inst_12018 = (state_12044[(7)]);
var state_12044__$1 = state_12044;
if(cljs.core.truth_(inst_12018)){
var statearr_12062_12108 = state_12044__$1;
(statearr_12062_12108[(1)] = (4));

} else {
var statearr_12063_12109 = state_12044__$1;
(statearr_12063_12109[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12045 === (11))){
var inst_12033 = cljs.core.async.close_BANG_.call(null,ch);
var state_12044__$1 = state_12044;
var statearr_12066_12116 = state_12044__$1;
(statearr_12066_12116[(2)] = inst_12033);

(statearr_12066_12116[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12045 === (9))){
var state_12044__$1 = state_12044;
if(cljs.core.truth_(close_QMARK_)){
var statearr_12068_12117 = state_12044__$1;
(statearr_12068_12117[(1)] = (11));

} else {
var statearr_12070_12118 = state_12044__$1;
(statearr_12070_12118[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12045 === (5))){
var inst_12018 = (state_12044[(7)]);
var state_12044__$1 = state_12044;
var statearr_12072_12122 = state_12044__$1;
(statearr_12072_12122[(2)] = inst_12018);

(statearr_12072_12122[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12045 === (10))){
var inst_12038 = (state_12044[(2)]);
var state_12044__$1 = state_12044;
var statearr_12073_12123 = state_12044__$1;
(statearr_12073_12123[(2)] = inst_12038);

(statearr_12073_12123[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12045 === (8))){
var inst_12018 = (state_12044[(7)]);
var inst_12029 = cljs.core.next.call(null,inst_12018);
var inst_12018__$1 = inst_12029;
var state_12044__$1 = (function (){var statearr_12074 = state_12044;
(statearr_12074[(7)] = inst_12018__$1);

return statearr_12074;
})();
var statearr_12075_12125 = state_12044__$1;
(statearr_12075_12125[(2)] = null);

(statearr_12075_12125[(1)] = (2));


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
var cljs$core$async$state_machine__11191__auto____1 = (function (state_12044){
while(true){
var ret_value__11192__auto__ = (function (){try{while(true){
var result__11193__auto__ = switch__11190__auto__.call(null,state_12044);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11193__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11193__auto__;
}
break;
}
}catch (e12077){var ex__11194__auto__ = e12077;
var statearr_12078_12129 = state_12044;
(statearr_12078_12129[(2)] = ex__11194__auto__);


if(cljs.core.seq.call(null,(state_12044[(4)]))){
var statearr_12079_12130 = state_12044;
(statearr_12079_12130[(1)] = cljs.core.first.call(null,(state_12044[(4)])));

} else {
throw ex__11194__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11192__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12131 = state_12044;
state_12044 = G__12131;
continue;
} else {
return ret_value__11192__auto__;
}
break;
}
});
cljs$core$async$state_machine__11191__auto__ = function(state_12044){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__11191__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__11191__auto____1.call(this,state_12044);
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
var G__12095 = arguments.length;
switch (G__12095) {
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

var cljs$core$async$Mux$muxch_STAR_$dyn_12136 = (function (_){
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
return cljs$core$async$Mux$muxch_STAR_$dyn_12136.call(null,_);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async12152 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async12152 = (function (ch,cs,meta12153){
this.ch = ch;
this.cs = cs;
this.meta12153 = meta12153;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async12152.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12154,meta12153__$1){
var self__ = this;
var _12154__$1 = this;
return (new cljs.core.async.t_cljs$core$async12152(self__.ch,self__.cs,meta12153__$1));
}));

(cljs.core.async.t_cljs$core$async12152.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12154){
var self__ = this;
var _12154__$1 = this;
return self__.meta12153;
}));

(cljs.core.async.t_cljs$core$async12152.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12152.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async12152.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12152.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async12152.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async12152.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async12152.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta12153","meta12153",-1799651090,null)], null);
}));

(cljs.core.async.t_cljs$core$async12152.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async12152.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async12152");

(cljs.core.async.t_cljs$core$async12152.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write.call(null,writer__5288__auto__,"cljs.core.async/t_cljs$core$async12152");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async12152.
 */
cljs.core.async.__GT_t_cljs$core$async12152 = (function cljs$core$async$mult_$___GT_t_cljs$core$async12152(ch__$1,cs__$1,meta12153){
return (new cljs.core.async.t_cljs$core$async12152(ch__$1,cs__$1,meta12153));
});

}

return (new cljs.core.async.t_cljs$core$async12152(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__11371__auto___12516 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__11372__auto__ = (function (){var switch__11190__auto__ = (function (state_12313){
var state_val_12314 = (state_12313[(1)]);
if((state_val_12314 === (7))){
var inst_12306 = (state_12313[(2)]);
var state_12313__$1 = state_12313;
var statearr_12315_12517 = state_12313__$1;
(statearr_12315_12517[(2)] = inst_12306);

(statearr_12315_12517[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12314 === (20))){
var inst_12205 = (state_12313[(7)]);
var inst_12217 = cljs.core.first.call(null,inst_12205);
var inst_12218 = cljs.core.nth.call(null,inst_12217,(0),null);
var inst_12219 = cljs.core.nth.call(null,inst_12217,(1),null);
var state_12313__$1 = (function (){var statearr_12319 = state_12313;
(statearr_12319[(8)] = inst_12218);

return statearr_12319;
})();
if(cljs.core.truth_(inst_12219)){
var statearr_12320_12519 = state_12313__$1;
(statearr_12320_12519[(1)] = (22));

} else {
var statearr_12321_12520 = state_12313__$1;
(statearr_12321_12520[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12314 === (27))){
var inst_12250 = (state_12313[(9)]);
var inst_12252 = (state_12313[(10)]);
var inst_12257 = (state_12313[(11)]);
var inst_12171 = (state_12313[(12)]);
var inst_12257__$1 = cljs.core._nth.call(null,inst_12250,inst_12252);
var inst_12258 = cljs.core.async.put_BANG_.call(null,inst_12257__$1,inst_12171,done);
var state_12313__$1 = (function (){var statearr_12322 = state_12313;
(statearr_12322[(11)] = inst_12257__$1);

return statearr_12322;
})();
if(cljs.core.truth_(inst_12258)){
var statearr_12323_12522 = state_12313__$1;
(statearr_12323_12522[(1)] = (30));

} else {
var statearr_12324_12523 = state_12313__$1;
(statearr_12324_12523[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12314 === (1))){
var state_12313__$1 = state_12313;
var statearr_12327_12524 = state_12313__$1;
(statearr_12327_12524[(2)] = null);

(statearr_12327_12524[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12314 === (24))){
var inst_12205 = (state_12313[(7)]);
var inst_12224 = (state_12313[(2)]);
var inst_12225 = cljs.core.next.call(null,inst_12205);
var inst_12180 = inst_12225;
var inst_12181 = null;
var inst_12182 = (0);
var inst_12183 = (0);
var state_12313__$1 = (function (){var statearr_12329 = state_12313;
(statearr_12329[(13)] = inst_12224);

(statearr_12329[(14)] = inst_12180);

(statearr_12329[(15)] = inst_12181);

(statearr_12329[(16)] = inst_12182);

(statearr_12329[(17)] = inst_12183);

return statearr_12329;
})();
var statearr_12330_12534 = state_12313__$1;
(statearr_12330_12534[(2)] = null);

(statearr_12330_12534[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12314 === (39))){
var state_12313__$1 = state_12313;
var statearr_12337_12535 = state_12313__$1;
(statearr_12337_12535[(2)] = null);

(statearr_12337_12535[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12314 === (4))){
var inst_12171 = (state_12313[(12)]);
var inst_12171__$1 = (state_12313[(2)]);
var inst_12172 = (inst_12171__$1 == null);
var state_12313__$1 = (function (){var statearr_12338 = state_12313;
(statearr_12338[(12)] = inst_12171__$1);

return statearr_12338;
})();
if(cljs.core.truth_(inst_12172)){
var statearr_12339_12537 = state_12313__$1;
(statearr_12339_12537[(1)] = (5));

} else {
var statearr_12340_12538 = state_12313__$1;
(statearr_12340_12538[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12314 === (15))){
var inst_12183 = (state_12313[(17)]);
var inst_12180 = (state_12313[(14)]);
var inst_12181 = (state_12313[(15)]);
var inst_12182 = (state_12313[(16)]);
var inst_12201 = (state_12313[(2)]);
var inst_12202 = (inst_12183 + (1));
var tmp12331 = inst_12182;
var tmp12332 = inst_12181;
var tmp12333 = inst_12180;
var inst_12180__$1 = tmp12333;
var inst_12181__$1 = tmp12332;
var inst_12182__$1 = tmp12331;
var inst_12183__$1 = inst_12202;
var state_12313__$1 = (function (){var statearr_12342 = state_12313;
(statearr_12342[(18)] = inst_12201);

(statearr_12342[(14)] = inst_12180__$1);

(statearr_12342[(15)] = inst_12181__$1);

(statearr_12342[(16)] = inst_12182__$1);

(statearr_12342[(17)] = inst_12183__$1);

return statearr_12342;
})();
var statearr_12345_12540 = state_12313__$1;
(statearr_12345_12540[(2)] = null);

(statearr_12345_12540[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12314 === (21))){
var inst_12228 = (state_12313[(2)]);
var state_12313__$1 = state_12313;
var statearr_12350_12541 = state_12313__$1;
(statearr_12350_12541[(2)] = inst_12228);

(statearr_12350_12541[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12314 === (31))){
var inst_12257 = (state_12313[(11)]);
var inst_12261 = cljs.core.async.untap_STAR_.call(null,m,inst_12257);
var state_12313__$1 = state_12313;
var statearr_12351_12544 = state_12313__$1;
(statearr_12351_12544[(2)] = inst_12261);

(statearr_12351_12544[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12314 === (32))){
var inst_12252 = (state_12313[(10)]);
var inst_12249 = (state_12313[(19)]);
var inst_12250 = (state_12313[(9)]);
var inst_12251 = (state_12313[(20)]);
var inst_12263 = (state_12313[(2)]);
var inst_12264 = (inst_12252 + (1));
var tmp12347 = inst_12251;
var tmp12348 = inst_12249;
var tmp12349 = inst_12250;
var inst_12249__$1 = tmp12348;
var inst_12250__$1 = tmp12349;
var inst_12251__$1 = tmp12347;
var inst_12252__$1 = inst_12264;
var state_12313__$1 = (function (){var statearr_12357 = state_12313;
(statearr_12357[(21)] = inst_12263);

(statearr_12357[(19)] = inst_12249__$1);

(statearr_12357[(9)] = inst_12250__$1);

(statearr_12357[(20)] = inst_12251__$1);

(statearr_12357[(10)] = inst_12252__$1);

return statearr_12357;
})();
var statearr_12358_12549 = state_12313__$1;
(statearr_12358_12549[(2)] = null);

(statearr_12358_12549[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12314 === (40))){
var inst_12279 = (state_12313[(22)]);
var inst_12283 = cljs.core.async.untap_STAR_.call(null,m,inst_12279);
var state_12313__$1 = state_12313;
var statearr_12360_12550 = state_12313__$1;
(statearr_12360_12550[(2)] = inst_12283);

(statearr_12360_12550[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12314 === (33))){
var inst_12268 = (state_12313[(23)]);
var inst_12271 = cljs.core.chunked_seq_QMARK_.call(null,inst_12268);
var state_12313__$1 = state_12313;
if(inst_12271){
var statearr_12365_12551 = state_12313__$1;
(statearr_12365_12551[(1)] = (36));

} else {
var statearr_12366_12552 = state_12313__$1;
(statearr_12366_12552[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12314 === (13))){
var inst_12194 = (state_12313[(24)]);
var inst_12198 = cljs.core.async.close_BANG_.call(null,inst_12194);
var state_12313__$1 = state_12313;
var statearr_12368_12556 = state_12313__$1;
(statearr_12368_12556[(2)] = inst_12198);

(statearr_12368_12556[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12314 === (22))){
var inst_12218 = (state_12313[(8)]);
var inst_12221 = cljs.core.async.close_BANG_.call(null,inst_12218);
var state_12313__$1 = state_12313;
var statearr_12370_12557 = state_12313__$1;
(statearr_12370_12557[(2)] = inst_12221);

(statearr_12370_12557[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12314 === (36))){
var inst_12268 = (state_12313[(23)]);
var inst_12274 = cljs.core.chunk_first.call(null,inst_12268);
var inst_12275 = cljs.core.chunk_rest.call(null,inst_12268);
var inst_12276 = cljs.core.count.call(null,inst_12274);
var inst_12249 = inst_12275;
var inst_12250 = inst_12274;
var inst_12251 = inst_12276;
var inst_12252 = (0);
var state_12313__$1 = (function (){var statearr_12372 = state_12313;
(statearr_12372[(19)] = inst_12249);

(statearr_12372[(9)] = inst_12250);

(statearr_12372[(20)] = inst_12251);

(statearr_12372[(10)] = inst_12252);

return statearr_12372;
})();
var statearr_12374_12558 = state_12313__$1;
(statearr_12374_12558[(2)] = null);

(statearr_12374_12558[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12314 === (41))){
var inst_12268 = (state_12313[(23)]);
var inst_12285 = (state_12313[(2)]);
var inst_12286 = cljs.core.next.call(null,inst_12268);
var inst_12249 = inst_12286;
var inst_12250 = null;
var inst_12251 = (0);
var inst_12252 = (0);
var state_12313__$1 = (function (){var statearr_12377 = state_12313;
(statearr_12377[(25)] = inst_12285);

(statearr_12377[(19)] = inst_12249);

(statearr_12377[(9)] = inst_12250);

(statearr_12377[(20)] = inst_12251);

(statearr_12377[(10)] = inst_12252);

return statearr_12377;
})();
var statearr_12379_12559 = state_12313__$1;
(statearr_12379_12559[(2)] = null);

(statearr_12379_12559[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12314 === (43))){
var state_12313__$1 = state_12313;
var statearr_12383_12560 = state_12313__$1;
(statearr_12383_12560[(2)] = null);

(statearr_12383_12560[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12314 === (29))){
var inst_12294 = (state_12313[(2)]);
var state_12313__$1 = state_12313;
var statearr_12386_12561 = state_12313__$1;
(statearr_12386_12561[(2)] = inst_12294);

(statearr_12386_12561[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12314 === (44))){
var inst_12303 = (state_12313[(2)]);
var state_12313__$1 = (function (){var statearr_12387 = state_12313;
(statearr_12387[(26)] = inst_12303);

return statearr_12387;
})();
var statearr_12392_12562 = state_12313__$1;
(statearr_12392_12562[(2)] = null);

(statearr_12392_12562[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12314 === (6))){
var inst_12240 = (state_12313[(27)]);
var inst_12239 = cljs.core.deref.call(null,cs);
var inst_12240__$1 = cljs.core.keys.call(null,inst_12239);
var inst_12241 = cljs.core.count.call(null,inst_12240__$1);
var inst_12242 = cljs.core.reset_BANG_.call(null,dctr,inst_12241);
var inst_12248 = cljs.core.seq.call(null,inst_12240__$1);
var inst_12249 = inst_12248;
var inst_12250 = null;
var inst_12251 = (0);
var inst_12252 = (0);
var state_12313__$1 = (function (){var statearr_12393 = state_12313;
(statearr_12393[(27)] = inst_12240__$1);

(statearr_12393[(28)] = inst_12242);

(statearr_12393[(19)] = inst_12249);

(statearr_12393[(9)] = inst_12250);

(statearr_12393[(20)] = inst_12251);

(statearr_12393[(10)] = inst_12252);

return statearr_12393;
})();
var statearr_12398_12568 = state_12313__$1;
(statearr_12398_12568[(2)] = null);

(statearr_12398_12568[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12314 === (28))){
var inst_12249 = (state_12313[(19)]);
var inst_12268 = (state_12313[(23)]);
var inst_12268__$1 = cljs.core.seq.call(null,inst_12249);
var state_12313__$1 = (function (){var statearr_12400 = state_12313;
(statearr_12400[(23)] = inst_12268__$1);

return statearr_12400;
})();
if(inst_12268__$1){
var statearr_12401_12569 = state_12313__$1;
(statearr_12401_12569[(1)] = (33));

} else {
var statearr_12403_12570 = state_12313__$1;
(statearr_12403_12570[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12314 === (25))){
var inst_12252 = (state_12313[(10)]);
var inst_12251 = (state_12313[(20)]);
var inst_12254 = (inst_12252 < inst_12251);
var inst_12255 = inst_12254;
var state_12313__$1 = state_12313;
if(cljs.core.truth_(inst_12255)){
var statearr_12404_12571 = state_12313__$1;
(statearr_12404_12571[(1)] = (27));

} else {
var statearr_12405_12572 = state_12313__$1;
(statearr_12405_12572[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12314 === (34))){
var state_12313__$1 = state_12313;
var statearr_12408_12574 = state_12313__$1;
(statearr_12408_12574[(2)] = null);

(statearr_12408_12574[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12314 === (17))){
var state_12313__$1 = state_12313;
var statearr_12412_12577 = state_12313__$1;
(statearr_12412_12577[(2)] = null);

(statearr_12412_12577[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12314 === (3))){
var inst_12308 = (state_12313[(2)]);
var state_12313__$1 = state_12313;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12313__$1,inst_12308);
} else {
if((state_val_12314 === (12))){
var inst_12233 = (state_12313[(2)]);
var state_12313__$1 = state_12313;
var statearr_12414_12579 = state_12313__$1;
(statearr_12414_12579[(2)] = inst_12233);

(statearr_12414_12579[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12314 === (2))){
var state_12313__$1 = state_12313;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12313__$1,(4),ch);
} else {
if((state_val_12314 === (23))){
var state_12313__$1 = state_12313;
var statearr_12416_12581 = state_12313__$1;
(statearr_12416_12581[(2)] = null);

(statearr_12416_12581[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12314 === (35))){
var inst_12292 = (state_12313[(2)]);
var state_12313__$1 = state_12313;
var statearr_12426_12582 = state_12313__$1;
(statearr_12426_12582[(2)] = inst_12292);

(statearr_12426_12582[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12314 === (19))){
var inst_12205 = (state_12313[(7)]);
var inst_12209 = cljs.core.chunk_first.call(null,inst_12205);
var inst_12210 = cljs.core.chunk_rest.call(null,inst_12205);
var inst_12211 = cljs.core.count.call(null,inst_12209);
var inst_12180 = inst_12210;
var inst_12181 = inst_12209;
var inst_12182 = inst_12211;
var inst_12183 = (0);
var state_12313__$1 = (function (){var statearr_12428 = state_12313;
(statearr_12428[(14)] = inst_12180);

(statearr_12428[(15)] = inst_12181);

(statearr_12428[(16)] = inst_12182);

(statearr_12428[(17)] = inst_12183);

return statearr_12428;
})();
var statearr_12429_12583 = state_12313__$1;
(statearr_12429_12583[(2)] = null);

(statearr_12429_12583[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12314 === (11))){
var inst_12180 = (state_12313[(14)]);
var inst_12205 = (state_12313[(7)]);
var inst_12205__$1 = cljs.core.seq.call(null,inst_12180);
var state_12313__$1 = (function (){var statearr_12436 = state_12313;
(statearr_12436[(7)] = inst_12205__$1);

return statearr_12436;
})();
if(inst_12205__$1){
var statearr_12438_12584 = state_12313__$1;
(statearr_12438_12584[(1)] = (16));

} else {
var statearr_12439_12585 = state_12313__$1;
(statearr_12439_12585[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12314 === (9))){
var inst_12235 = (state_12313[(2)]);
var state_12313__$1 = state_12313;
var statearr_12446_12586 = state_12313__$1;
(statearr_12446_12586[(2)] = inst_12235);

(statearr_12446_12586[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12314 === (5))){
var inst_12178 = cljs.core.deref.call(null,cs);
var inst_12179 = cljs.core.seq.call(null,inst_12178);
var inst_12180 = inst_12179;
var inst_12181 = null;
var inst_12182 = (0);
var inst_12183 = (0);
var state_12313__$1 = (function (){var statearr_12447 = state_12313;
(statearr_12447[(14)] = inst_12180);

(statearr_12447[(15)] = inst_12181);

(statearr_12447[(16)] = inst_12182);

(statearr_12447[(17)] = inst_12183);

return statearr_12447;
})();
var statearr_12449_12588 = state_12313__$1;
(statearr_12449_12588[(2)] = null);

(statearr_12449_12588[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12314 === (14))){
var state_12313__$1 = state_12313;
var statearr_12451_12592 = state_12313__$1;
(statearr_12451_12592[(2)] = null);

(statearr_12451_12592[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12314 === (45))){
var inst_12300 = (state_12313[(2)]);
var state_12313__$1 = state_12313;
var statearr_12454_12593 = state_12313__$1;
(statearr_12454_12593[(2)] = inst_12300);

(statearr_12454_12593[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12314 === (26))){
var inst_12240 = (state_12313[(27)]);
var inst_12296 = (state_12313[(2)]);
var inst_12297 = cljs.core.seq.call(null,inst_12240);
var state_12313__$1 = (function (){var statearr_12455 = state_12313;
(statearr_12455[(29)] = inst_12296);

return statearr_12455;
})();
if(inst_12297){
var statearr_12460_12594 = state_12313__$1;
(statearr_12460_12594[(1)] = (42));

} else {
var statearr_12461_12595 = state_12313__$1;
(statearr_12461_12595[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12314 === (16))){
var inst_12205 = (state_12313[(7)]);
var inst_12207 = cljs.core.chunked_seq_QMARK_.call(null,inst_12205);
var state_12313__$1 = state_12313;
if(inst_12207){
var statearr_12463_12596 = state_12313__$1;
(statearr_12463_12596[(1)] = (19));

} else {
var statearr_12464_12597 = state_12313__$1;
(statearr_12464_12597[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12314 === (38))){
var inst_12289 = (state_12313[(2)]);
var state_12313__$1 = state_12313;
var statearr_12466_12598 = state_12313__$1;
(statearr_12466_12598[(2)] = inst_12289);

(statearr_12466_12598[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12314 === (30))){
var state_12313__$1 = state_12313;
var statearr_12467_12599 = state_12313__$1;
(statearr_12467_12599[(2)] = null);

(statearr_12467_12599[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12314 === (10))){
var inst_12181 = (state_12313[(15)]);
var inst_12183 = (state_12313[(17)]);
var inst_12192 = cljs.core._nth.call(null,inst_12181,inst_12183);
var inst_12194 = cljs.core.nth.call(null,inst_12192,(0),null);
var inst_12195 = cljs.core.nth.call(null,inst_12192,(1),null);
var state_12313__$1 = (function (){var statearr_12469 = state_12313;
(statearr_12469[(24)] = inst_12194);

return statearr_12469;
})();
if(cljs.core.truth_(inst_12195)){
var statearr_12470_12603 = state_12313__$1;
(statearr_12470_12603[(1)] = (13));

} else {
var statearr_12471_12604 = state_12313__$1;
(statearr_12471_12604[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12314 === (18))){
var inst_12231 = (state_12313[(2)]);
var state_12313__$1 = state_12313;
var statearr_12473_12605 = state_12313__$1;
(statearr_12473_12605[(2)] = inst_12231);

(statearr_12473_12605[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12314 === (42))){
var state_12313__$1 = state_12313;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12313__$1,(45),dchan);
} else {
if((state_val_12314 === (37))){
var inst_12268 = (state_12313[(23)]);
var inst_12279 = (state_12313[(22)]);
var inst_12171 = (state_12313[(12)]);
var inst_12279__$1 = cljs.core.first.call(null,inst_12268);
var inst_12280 = cljs.core.async.put_BANG_.call(null,inst_12279__$1,inst_12171,done);
var state_12313__$1 = (function (){var statearr_12480 = state_12313;
(statearr_12480[(22)] = inst_12279__$1);

return statearr_12480;
})();
if(cljs.core.truth_(inst_12280)){
var statearr_12481_12606 = state_12313__$1;
(statearr_12481_12606[(1)] = (39));

} else {
var statearr_12482_12607 = state_12313__$1;
(statearr_12482_12607[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12314 === (8))){
var inst_12183 = (state_12313[(17)]);
var inst_12182 = (state_12313[(16)]);
var inst_12185 = (inst_12183 < inst_12182);
var inst_12186 = inst_12185;
var state_12313__$1 = state_12313;
if(cljs.core.truth_(inst_12186)){
var statearr_12483_12609 = state_12313__$1;
(statearr_12483_12609[(1)] = (10));

} else {
var statearr_12484_12610 = state_12313__$1;
(statearr_12484_12610[(1)] = (11));

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
var cljs$core$async$mult_$_state_machine__11191__auto____1 = (function (state_12313){
while(true){
var ret_value__11192__auto__ = (function (){try{while(true){
var result__11193__auto__ = switch__11190__auto__.call(null,state_12313);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11193__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11193__auto__;
}
break;
}
}catch (e12486){var ex__11194__auto__ = e12486;
var statearr_12487_12615 = state_12313;
(statearr_12487_12615[(2)] = ex__11194__auto__);


if(cljs.core.seq.call(null,(state_12313[(4)]))){
var statearr_12488_12617 = state_12313;
(statearr_12488_12617[(1)] = cljs.core.first.call(null,(state_12313[(4)])));

} else {
throw ex__11194__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11192__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12619 = state_12313;
state_12313 = G__12619;
continue;
} else {
return ret_value__11192__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__11191__auto__ = function(state_12313){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__11191__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__11191__auto____1.call(this,state_12313);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__11191__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__11191__auto____0;
cljs$core$async$mult_$_state_machine__11191__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__11191__auto____1;
return cljs$core$async$mult_$_state_machine__11191__auto__;
})()
})();
var state__11373__auto__ = (function (){var statearr_12501 = f__11372__auto__.call(null);
(statearr_12501[(6)] = c__11371__auto___12516);

return statearr_12501;
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
var G__12506 = arguments.length;
switch (G__12506) {
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

var cljs$core$async$Mix$admix_STAR_$dyn_12621 = (function (m,ch){
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
return cljs$core$async$Mix$admix_STAR_$dyn_12621.call(null,m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_12623 = (function (m,ch){
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
return cljs$core$async$Mix$unmix_STAR_$dyn_12623.call(null,m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_12639 = (function (m){
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
return cljs$core$async$Mix$unmix_all_STAR_$dyn_12639.call(null,m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_12659 = (function (m,state_map){
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
return cljs$core$async$Mix$toggle_STAR_$dyn_12659.call(null,m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_12683 = (function (m,mode){
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
return cljs$core$async$Mix$solo_mode_STAR_$dyn_12683.call(null,m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__5732__auto__ = [];
var len__5726__auto___12702 = arguments.length;
var i__5727__auto___12703 = (0);
while(true){
if((i__5727__auto___12703 < len__5726__auto___12702)){
args__5732__auto__.push((arguments[i__5727__auto___12703]));

var G__12707 = (i__5727__auto___12703 + (1));
i__5727__auto___12703 = G__12707;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((3) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5733__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__12573){
var map__12575 = p__12573;
var map__12575__$1 = cljs.core.__destructure_map.call(null,map__12575);
var opts = map__12575__$1;
var statearr_12576_12710 = state;
(statearr_12576_12710[(1)] = cont_block);


var temp__5804__auto__ = cljs.core.async.do_alts.call(null,(function (val){
var statearr_12578_12711 = state;
(statearr_12578_12711[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
}),ports,opts);
if(cljs.core.truth_(temp__5804__auto__)){
var cb = temp__5804__auto__;
var statearr_12580_12712 = state;
(statearr_12580_12712[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq12563){
var G__12564 = cljs.core.first.call(null,seq12563);
var seq12563__$1 = cljs.core.next.call(null,seq12563);
var G__12565 = cljs.core.first.call(null,seq12563__$1);
var seq12563__$2 = cljs.core.next.call(null,seq12563__$1);
var G__12566 = cljs.core.first.call(null,seq12563__$2);
var seq12563__$3 = cljs.core.next.call(null,seq12563__$2);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__12564,G__12565,G__12566,seq12563__$3);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async12600 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async12600 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta12601){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta12601 = meta12601;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async12600.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12602,meta12601__$1){
var self__ = this;
var _12602__$1 = this;
return (new cljs.core.async.t_cljs$core$async12600(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta12601__$1));
}));

(cljs.core.async.t_cljs$core$async12600.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12602){
var self__ = this;
var _12602__$1 = this;
return self__.meta12601;
}));

(cljs.core.async.t_cljs$core$async12600.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12600.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async12600.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12600.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async12600.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async12600.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async12600.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async12600.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async12600.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta12601","meta12601",-1113335444,null)], null);
}));

(cljs.core.async.t_cljs$core$async12600.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async12600.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async12600");

(cljs.core.async.t_cljs$core$async12600.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write.call(null,writer__5288__auto__,"cljs.core.async/t_cljs$core$async12600");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async12600.
 */
cljs.core.async.__GT_t_cljs$core$async12600 = (function cljs$core$async$mix_$___GT_t_cljs$core$async12600(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta12601){
return (new cljs.core.async.t_cljs$core$async12600(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta12601));
});

}

return (new cljs.core.async.t_cljs$core$async12600(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__11371__auto___12804 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__11372__auto__ = (function (){var switch__11190__auto__ = (function (state_12696){
var state_val_12697 = (state_12696[(1)]);
if((state_val_12697 === (7))){
var inst_12653 = (state_12696[(2)]);
var state_12696__$1 = state_12696;
if(cljs.core.truth_(inst_12653)){
var statearr_12708_12805 = state_12696__$1;
(statearr_12708_12805[(1)] = (8));

} else {
var statearr_12709_12806 = state_12696__$1;
(statearr_12709_12806[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12697 === (20))){
var inst_12646 = (state_12696[(7)]);
var state_12696__$1 = state_12696;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12696__$1,(23),out,inst_12646);
} else {
if((state_val_12697 === (1))){
var inst_12626 = calc_state.call(null);
var inst_12627 = cljs.core.__destructure_map.call(null,inst_12626);
var inst_12628 = cljs.core.get.call(null,inst_12627,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_12630 = cljs.core.get.call(null,inst_12627,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_12631 = cljs.core.get.call(null,inst_12627,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_12632 = inst_12626;
var state_12696__$1 = (function (){var statearr_12713 = state_12696;
(statearr_12713[(8)] = inst_12628);

(statearr_12713[(9)] = inst_12630);

(statearr_12713[(10)] = inst_12631);

(statearr_12713[(11)] = inst_12632);

return statearr_12713;
})();
var statearr_12714_12807 = state_12696__$1;
(statearr_12714_12807[(2)] = null);

(statearr_12714_12807[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12697 === (24))){
var inst_12635 = (state_12696[(12)]);
var inst_12632 = inst_12635;
var state_12696__$1 = (function (){var statearr_12718 = state_12696;
(statearr_12718[(11)] = inst_12632);

return statearr_12718;
})();
var statearr_12719_12810 = state_12696__$1;
(statearr_12719_12810[(2)] = null);

(statearr_12719_12810[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12697 === (4))){
var inst_12646 = (state_12696[(7)]);
var inst_12648 = (state_12696[(13)]);
var inst_12645 = (state_12696[(2)]);
var inst_12646__$1 = cljs.core.nth.call(null,inst_12645,(0),null);
var inst_12647 = cljs.core.nth.call(null,inst_12645,(1),null);
var inst_12648__$1 = (inst_12646__$1 == null);
var state_12696__$1 = (function (){var statearr_12720 = state_12696;
(statearr_12720[(7)] = inst_12646__$1);

(statearr_12720[(14)] = inst_12647);

(statearr_12720[(13)] = inst_12648__$1);

return statearr_12720;
})();
if(cljs.core.truth_(inst_12648__$1)){
var statearr_12721_12811 = state_12696__$1;
(statearr_12721_12811[(1)] = (5));

} else {
var statearr_12725_12812 = state_12696__$1;
(statearr_12725_12812[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12697 === (15))){
var inst_12637 = (state_12696[(15)]);
var inst_12668 = (state_12696[(16)]);
var inst_12668__$1 = cljs.core.empty_QMARK_.call(null,inst_12637);
var state_12696__$1 = (function (){var statearr_12726 = state_12696;
(statearr_12726[(16)] = inst_12668__$1);

return statearr_12726;
})();
if(inst_12668__$1){
var statearr_12727_12813 = state_12696__$1;
(statearr_12727_12813[(1)] = (17));

} else {
var statearr_12728_12814 = state_12696__$1;
(statearr_12728_12814[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12697 === (21))){
var inst_12635 = (state_12696[(12)]);
var inst_12632 = inst_12635;
var state_12696__$1 = (function (){var statearr_12730 = state_12696;
(statearr_12730[(11)] = inst_12632);

return statearr_12730;
})();
var statearr_12733_12815 = state_12696__$1;
(statearr_12733_12815[(2)] = null);

(statearr_12733_12815[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12697 === (13))){
var inst_12661 = (state_12696[(2)]);
var inst_12662 = calc_state.call(null);
var inst_12632 = inst_12662;
var state_12696__$1 = (function (){var statearr_12735 = state_12696;
(statearr_12735[(17)] = inst_12661);

(statearr_12735[(11)] = inst_12632);

return statearr_12735;
})();
var statearr_12736_12816 = state_12696__$1;
(statearr_12736_12816[(2)] = null);

(statearr_12736_12816[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12697 === (22))){
var inst_12690 = (state_12696[(2)]);
var state_12696__$1 = state_12696;
var statearr_12740_12818 = state_12696__$1;
(statearr_12740_12818[(2)] = inst_12690);

(statearr_12740_12818[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12697 === (6))){
var inst_12647 = (state_12696[(14)]);
var inst_12651 = cljs.core._EQ_.call(null,inst_12647,change);
var state_12696__$1 = state_12696;
var statearr_12741_12819 = state_12696__$1;
(statearr_12741_12819[(2)] = inst_12651);

(statearr_12741_12819[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12697 === (25))){
var state_12696__$1 = state_12696;
var statearr_12742_12822 = state_12696__$1;
(statearr_12742_12822[(2)] = null);

(statearr_12742_12822[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12697 === (17))){
var inst_12638 = (state_12696[(18)]);
var inst_12647 = (state_12696[(14)]);
var inst_12670 = inst_12638.call(null,inst_12647);
var inst_12671 = cljs.core.not.call(null,inst_12670);
var state_12696__$1 = state_12696;
var statearr_12743_12823 = state_12696__$1;
(statearr_12743_12823[(2)] = inst_12671);

(statearr_12743_12823[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12697 === (3))){
var inst_12694 = (state_12696[(2)]);
var state_12696__$1 = state_12696;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12696__$1,inst_12694);
} else {
if((state_val_12697 === (12))){
var state_12696__$1 = state_12696;
var statearr_12748_12824 = state_12696__$1;
(statearr_12748_12824[(2)] = null);

(statearr_12748_12824[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12697 === (2))){
var inst_12632 = (state_12696[(11)]);
var inst_12635 = (state_12696[(12)]);
var inst_12635__$1 = cljs.core.__destructure_map.call(null,inst_12632);
var inst_12637 = cljs.core.get.call(null,inst_12635__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_12638 = cljs.core.get.call(null,inst_12635__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_12640 = cljs.core.get.call(null,inst_12635__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_12696__$1 = (function (){var statearr_12757 = state_12696;
(statearr_12757[(12)] = inst_12635__$1);

(statearr_12757[(15)] = inst_12637);

(statearr_12757[(18)] = inst_12638);

return statearr_12757;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_12696__$1,(4),inst_12640);
} else {
if((state_val_12697 === (23))){
var inst_12679 = (state_12696[(2)]);
var state_12696__$1 = state_12696;
if(cljs.core.truth_(inst_12679)){
var statearr_12766_12825 = state_12696__$1;
(statearr_12766_12825[(1)] = (24));

} else {
var statearr_12771_12826 = state_12696__$1;
(statearr_12771_12826[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12697 === (19))){
var inst_12674 = (state_12696[(2)]);
var state_12696__$1 = state_12696;
var statearr_12776_12830 = state_12696__$1;
(statearr_12776_12830[(2)] = inst_12674);

(statearr_12776_12830[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12697 === (11))){
var inst_12647 = (state_12696[(14)]);
var inst_12657 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_12647);
var state_12696__$1 = state_12696;
var statearr_12782_12831 = state_12696__$1;
(statearr_12782_12831[(2)] = inst_12657);

(statearr_12782_12831[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12697 === (9))){
var inst_12637 = (state_12696[(15)]);
var inst_12647 = (state_12696[(14)]);
var inst_12665 = (state_12696[(19)]);
var inst_12665__$1 = inst_12637.call(null,inst_12647);
var state_12696__$1 = (function (){var statearr_12787 = state_12696;
(statearr_12787[(19)] = inst_12665__$1);

return statearr_12787;
})();
if(cljs.core.truth_(inst_12665__$1)){
var statearr_12788_12832 = state_12696__$1;
(statearr_12788_12832[(1)] = (14));

} else {
var statearr_12789_12835 = state_12696__$1;
(statearr_12789_12835[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12697 === (5))){
var inst_12648 = (state_12696[(13)]);
var state_12696__$1 = state_12696;
var statearr_12790_12836 = state_12696__$1;
(statearr_12790_12836[(2)] = inst_12648);

(statearr_12790_12836[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12697 === (14))){
var inst_12665 = (state_12696[(19)]);
var state_12696__$1 = state_12696;
var statearr_12791_12838 = state_12696__$1;
(statearr_12791_12838[(2)] = inst_12665);

(statearr_12791_12838[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12697 === (26))){
var inst_12686 = (state_12696[(2)]);
var state_12696__$1 = state_12696;
var statearr_12792_12840 = state_12696__$1;
(statearr_12792_12840[(2)] = inst_12686);

(statearr_12792_12840[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12697 === (16))){
var inst_12676 = (state_12696[(2)]);
var state_12696__$1 = state_12696;
if(cljs.core.truth_(inst_12676)){
var statearr_12793_12841 = state_12696__$1;
(statearr_12793_12841[(1)] = (20));

} else {
var statearr_12794_12842 = state_12696__$1;
(statearr_12794_12842[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12697 === (10))){
var inst_12692 = (state_12696[(2)]);
var state_12696__$1 = state_12696;
var statearr_12795_12843 = state_12696__$1;
(statearr_12795_12843[(2)] = inst_12692);

(statearr_12795_12843[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12697 === (18))){
var inst_12668 = (state_12696[(16)]);
var state_12696__$1 = state_12696;
var statearr_12796_12845 = state_12696__$1;
(statearr_12796_12845[(2)] = inst_12668);

(statearr_12796_12845[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12697 === (8))){
var inst_12646 = (state_12696[(7)]);
var inst_12655 = (inst_12646 == null);
var state_12696__$1 = state_12696;
if(cljs.core.truth_(inst_12655)){
var statearr_12797_12846 = state_12696__$1;
(statearr_12797_12846[(1)] = (11));

} else {
var statearr_12798_12850 = state_12696__$1;
(statearr_12798_12850[(1)] = (12));

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
var cljs$core$async$mix_$_state_machine__11191__auto____1 = (function (state_12696){
while(true){
var ret_value__11192__auto__ = (function (){try{while(true){
var result__11193__auto__ = switch__11190__auto__.call(null,state_12696);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11193__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11193__auto__;
}
break;
}
}catch (e12800){var ex__11194__auto__ = e12800;
var statearr_12801_12853 = state_12696;
(statearr_12801_12853[(2)] = ex__11194__auto__);


if(cljs.core.seq.call(null,(state_12696[(4)]))){
var statearr_12802_12854 = state_12696;
(statearr_12802_12854[(1)] = cljs.core.first.call(null,(state_12696[(4)])));

} else {
throw ex__11194__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11192__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12855 = state_12696;
state_12696 = G__12855;
continue;
} else {
return ret_value__11192__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__11191__auto__ = function(state_12696){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__11191__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__11191__auto____1.call(this,state_12696);
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

var cljs$core$async$Pub$sub_STAR_$dyn_12861 = (function (p,v,ch,close_QMARK_){
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
return cljs$core$async$Pub$sub_STAR_$dyn_12861.call(null,p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_12874 = (function (p,v,ch){
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
return cljs$core$async$Pub$unsub_STAR_$dyn_12874.call(null,p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_12893 = (function() {
var G__12894 = null;
var G__12894__1 = (function (p){
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
var G__12894__2 = (function (p,v){
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
G__12894 = function(p,v){
switch(arguments.length){
case 1:
return G__12894__1.call(this,p);
case 2:
return G__12894__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__12894.cljs$core$IFn$_invoke$arity$1 = G__12894__1;
G__12894.cljs$core$IFn$_invoke$arity$2 = G__12894__2;
return G__12894;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__12809 = arguments.length;
switch (G__12809) {
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
return cljs$core$async$Pub$unsub_all_STAR_$dyn_12893.call(null,p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_12893.call(null,p,v);
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
var G__12821 = arguments.length;
switch (G__12821) {
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
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,(function (p1__12817_SHARP_){
if(cljs.core.truth_(p1__12817_SHARP_.call(null,topic))){
return p1__12817_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__12817_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async12827 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async12827 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta12828){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta12828 = meta12828;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async12827.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12829,meta12828__$1){
var self__ = this;
var _12829__$1 = this;
return (new cljs.core.async.t_cljs$core$async12827(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta12828__$1));
}));

(cljs.core.async.t_cljs$core$async12827.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12829){
var self__ = this;
var _12829__$1 = this;
return self__.meta12828;
}));

(cljs.core.async.t_cljs$core$async12827.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12827.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async12827.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12827.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async12827.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
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

(cljs.core.async.t_cljs$core$async12827.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async12827.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async12827.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta12828","meta12828",479991305,null)], null);
}));

(cljs.core.async.t_cljs$core$async12827.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async12827.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async12827");

(cljs.core.async.t_cljs$core$async12827.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write.call(null,writer__5288__auto__,"cljs.core.async/t_cljs$core$async12827");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async12827.
 */
cljs.core.async.__GT_t_cljs$core$async12827 = (function cljs$core$async$__GT_t_cljs$core$async12827(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta12828){
return (new cljs.core.async.t_cljs$core$async12827(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta12828));
});

}

return (new cljs.core.async.t_cljs$core$async12827(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__11371__auto___13063 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__11372__auto__ = (function (){var switch__11190__auto__ = (function (state_12947){
var state_val_12948 = (state_12947[(1)]);
if((state_val_12948 === (7))){
var inst_12942 = (state_12947[(2)]);
var state_12947__$1 = state_12947;
var statearr_12952_13067 = state_12947__$1;
(statearr_12952_13067[(2)] = inst_12942);

(statearr_12952_13067[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12948 === (20))){
var state_12947__$1 = state_12947;
var statearr_12953_13069 = state_12947__$1;
(statearr_12953_13069[(2)] = null);

(statearr_12953_13069[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12948 === (1))){
var state_12947__$1 = state_12947;
var statearr_12954_13073 = state_12947__$1;
(statearr_12954_13073[(2)] = null);

(statearr_12954_13073[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12948 === (24))){
var inst_12924 = (state_12947[(7)]);
var inst_12934 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_12924);
var state_12947__$1 = state_12947;
var statearr_12955_13076 = state_12947__$1;
(statearr_12955_13076[(2)] = inst_12934);

(statearr_12955_13076[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12948 === (4))){
var inst_12865 = (state_12947[(8)]);
var inst_12865__$1 = (state_12947[(2)]);
var inst_12866 = (inst_12865__$1 == null);
var state_12947__$1 = (function (){var statearr_12958 = state_12947;
(statearr_12958[(8)] = inst_12865__$1);

return statearr_12958;
})();
if(cljs.core.truth_(inst_12866)){
var statearr_12960_13077 = state_12947__$1;
(statearr_12960_13077[(1)] = (5));

} else {
var statearr_12961_13078 = state_12947__$1;
(statearr_12961_13078[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12948 === (15))){
var inst_12918 = (state_12947[(2)]);
var state_12947__$1 = state_12947;
var statearr_12962_13079 = state_12947__$1;
(statearr_12962_13079[(2)] = inst_12918);

(statearr_12962_13079[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12948 === (21))){
var inst_12939 = (state_12947[(2)]);
var state_12947__$1 = (function (){var statearr_12963 = state_12947;
(statearr_12963[(9)] = inst_12939);

return statearr_12963;
})();
var statearr_12964_13085 = state_12947__$1;
(statearr_12964_13085[(2)] = null);

(statearr_12964_13085[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12948 === (13))){
var inst_12895 = (state_12947[(10)]);
var inst_12897 = cljs.core.chunked_seq_QMARK_.call(null,inst_12895);
var state_12947__$1 = state_12947;
if(inst_12897){
var statearr_12968_13088 = state_12947__$1;
(statearr_12968_13088[(1)] = (16));

} else {
var statearr_12969_13091 = state_12947__$1;
(statearr_12969_13091[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12948 === (22))){
var inst_12931 = (state_12947[(2)]);
var state_12947__$1 = state_12947;
if(cljs.core.truth_(inst_12931)){
var statearr_12973_13096 = state_12947__$1;
(statearr_12973_13096[(1)] = (23));

} else {
var statearr_12974_13097 = state_12947__$1;
(statearr_12974_13097[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12948 === (6))){
var inst_12865 = (state_12947[(8)]);
var inst_12924 = (state_12947[(7)]);
var inst_12927 = (state_12947[(11)]);
var inst_12924__$1 = topic_fn.call(null,inst_12865);
var inst_12926 = cljs.core.deref.call(null,mults);
var inst_12927__$1 = cljs.core.get.call(null,inst_12926,inst_12924__$1);
var state_12947__$1 = (function (){var statearr_12975 = state_12947;
(statearr_12975[(7)] = inst_12924__$1);

(statearr_12975[(11)] = inst_12927__$1);

return statearr_12975;
})();
if(cljs.core.truth_(inst_12927__$1)){
var statearr_12976_13107 = state_12947__$1;
(statearr_12976_13107[(1)] = (19));

} else {
var statearr_12977_13109 = state_12947__$1;
(statearr_12977_13109[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12948 === (25))){
var inst_12936 = (state_12947[(2)]);
var state_12947__$1 = state_12947;
var statearr_12980_13114 = state_12947__$1;
(statearr_12980_13114[(2)] = inst_12936);

(statearr_12980_13114[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12948 === (17))){
var inst_12895 = (state_12947[(10)]);
var inst_12905 = cljs.core.first.call(null,inst_12895);
var inst_12909 = cljs.core.async.muxch_STAR_.call(null,inst_12905);
var inst_12910 = cljs.core.async.close_BANG_.call(null,inst_12909);
var inst_12911 = cljs.core.next.call(null,inst_12895);
var inst_12878 = inst_12911;
var inst_12879 = null;
var inst_12880 = (0);
var inst_12881 = (0);
var state_12947__$1 = (function (){var statearr_12982 = state_12947;
(statearr_12982[(12)] = inst_12910);

(statearr_12982[(13)] = inst_12878);

(statearr_12982[(14)] = inst_12879);

(statearr_12982[(15)] = inst_12880);

(statearr_12982[(16)] = inst_12881);

return statearr_12982;
})();
var statearr_12983_13141 = state_12947__$1;
(statearr_12983_13141[(2)] = null);

(statearr_12983_13141[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12948 === (3))){
var inst_12944 = (state_12947[(2)]);
var state_12947__$1 = state_12947;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12947__$1,inst_12944);
} else {
if((state_val_12948 === (12))){
var inst_12920 = (state_12947[(2)]);
var state_12947__$1 = state_12947;
var statearr_12984_13165 = state_12947__$1;
(statearr_12984_13165[(2)] = inst_12920);

(statearr_12984_13165[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12948 === (2))){
var state_12947__$1 = state_12947;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12947__$1,(4),ch);
} else {
if((state_val_12948 === (23))){
var state_12947__$1 = state_12947;
var statearr_12988_13169 = state_12947__$1;
(statearr_12988_13169[(2)] = null);

(statearr_12988_13169[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12948 === (19))){
var inst_12927 = (state_12947[(11)]);
var inst_12865 = (state_12947[(8)]);
var inst_12929 = cljs.core.async.muxch_STAR_.call(null,inst_12927);
var state_12947__$1 = state_12947;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12947__$1,(22),inst_12929,inst_12865);
} else {
if((state_val_12948 === (11))){
var inst_12878 = (state_12947[(13)]);
var inst_12895 = (state_12947[(10)]);
var inst_12895__$1 = cljs.core.seq.call(null,inst_12878);
var state_12947__$1 = (function (){var statearr_12990 = state_12947;
(statearr_12990[(10)] = inst_12895__$1);

return statearr_12990;
})();
if(inst_12895__$1){
var statearr_12992_13171 = state_12947__$1;
(statearr_12992_13171[(1)] = (13));

} else {
var statearr_12994_13172 = state_12947__$1;
(statearr_12994_13172[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12948 === (9))){
var inst_12922 = (state_12947[(2)]);
var state_12947__$1 = state_12947;
var statearr_12997_13174 = state_12947__$1;
(statearr_12997_13174[(2)] = inst_12922);

(statearr_12997_13174[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12948 === (5))){
var inst_12875 = cljs.core.deref.call(null,mults);
var inst_12876 = cljs.core.vals.call(null,inst_12875);
var inst_12877 = cljs.core.seq.call(null,inst_12876);
var inst_12878 = inst_12877;
var inst_12879 = null;
var inst_12880 = (0);
var inst_12881 = (0);
var state_12947__$1 = (function (){var statearr_12999 = state_12947;
(statearr_12999[(13)] = inst_12878);

(statearr_12999[(14)] = inst_12879);

(statearr_12999[(15)] = inst_12880);

(statearr_12999[(16)] = inst_12881);

return statearr_12999;
})();
var statearr_13000_13180 = state_12947__$1;
(statearr_13000_13180[(2)] = null);

(statearr_13000_13180[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12948 === (14))){
var state_12947__$1 = state_12947;
var statearr_13004_13181 = state_12947__$1;
(statearr_13004_13181[(2)] = null);

(statearr_13004_13181[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12948 === (16))){
var inst_12895 = (state_12947[(10)]);
var inst_12900 = cljs.core.chunk_first.call(null,inst_12895);
var inst_12901 = cljs.core.chunk_rest.call(null,inst_12895);
var inst_12902 = cljs.core.count.call(null,inst_12900);
var inst_12878 = inst_12901;
var inst_12879 = inst_12900;
var inst_12880 = inst_12902;
var inst_12881 = (0);
var state_12947__$1 = (function (){var statearr_13007 = state_12947;
(statearr_13007[(13)] = inst_12878);

(statearr_13007[(14)] = inst_12879);

(statearr_13007[(15)] = inst_12880);

(statearr_13007[(16)] = inst_12881);

return statearr_13007;
})();
var statearr_13009_13185 = state_12947__$1;
(statearr_13009_13185[(2)] = null);

(statearr_13009_13185[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12948 === (10))){
var inst_12879 = (state_12947[(14)]);
var inst_12881 = (state_12947[(16)]);
var inst_12878 = (state_12947[(13)]);
var inst_12880 = (state_12947[(15)]);
var inst_12887 = cljs.core._nth.call(null,inst_12879,inst_12881);
var inst_12888 = cljs.core.async.muxch_STAR_.call(null,inst_12887);
var inst_12889 = cljs.core.async.close_BANG_.call(null,inst_12888);
var inst_12890 = (inst_12881 + (1));
var tmp13001 = inst_12879;
var tmp13002 = inst_12880;
var tmp13003 = inst_12878;
var inst_12878__$1 = tmp13003;
var inst_12879__$1 = tmp13001;
var inst_12880__$1 = tmp13002;
var inst_12881__$1 = inst_12890;
var state_12947__$1 = (function (){var statearr_13011 = state_12947;
(statearr_13011[(17)] = inst_12889);

(statearr_13011[(13)] = inst_12878__$1);

(statearr_13011[(14)] = inst_12879__$1);

(statearr_13011[(15)] = inst_12880__$1);

(statearr_13011[(16)] = inst_12881__$1);

return statearr_13011;
})();
var statearr_13012_13196 = state_12947__$1;
(statearr_13012_13196[(2)] = null);

(statearr_13012_13196[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12948 === (18))){
var inst_12914 = (state_12947[(2)]);
var state_12947__$1 = state_12947;
var statearr_13016_13197 = state_12947__$1;
(statearr_13016_13197[(2)] = inst_12914);

(statearr_13016_13197[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12948 === (8))){
var inst_12881 = (state_12947[(16)]);
var inst_12880 = (state_12947[(15)]);
var inst_12884 = (inst_12881 < inst_12880);
var inst_12885 = inst_12884;
var state_12947__$1 = state_12947;
if(cljs.core.truth_(inst_12885)){
var statearr_13017_13199 = state_12947__$1;
(statearr_13017_13199[(1)] = (10));

} else {
var statearr_13018_13200 = state_12947__$1;
(statearr_13018_13200[(1)] = (11));

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
var statearr_13021 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_13021[(0)] = cljs$core$async$state_machine__11191__auto__);

(statearr_13021[(1)] = (1));

return statearr_13021;
});
var cljs$core$async$state_machine__11191__auto____1 = (function (state_12947){
while(true){
var ret_value__11192__auto__ = (function (){try{while(true){
var result__11193__auto__ = switch__11190__auto__.call(null,state_12947);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11193__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11193__auto__;
}
break;
}
}catch (e13023){var ex__11194__auto__ = e13023;
var statearr_13024_13204 = state_12947;
(statearr_13024_13204[(2)] = ex__11194__auto__);


if(cljs.core.seq.call(null,(state_12947[(4)]))){
var statearr_13025_13206 = state_12947;
(statearr_13025_13206[(1)] = cljs.core.first.call(null,(state_12947[(4)])));

} else {
throw ex__11194__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11192__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13207 = state_12947;
state_12947 = G__13207;
continue;
} else {
return ret_value__11192__auto__;
}
break;
}
});
cljs$core$async$state_machine__11191__auto__ = function(state_12947){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__11191__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__11191__auto____1.call(this,state_12947);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__11191__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__11191__auto____0;
cljs$core$async$state_machine__11191__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__11191__auto____1;
return cljs$core$async$state_machine__11191__auto__;
})()
})();
var state__11373__auto__ = (function (){var statearr_13029 = f__11372__auto__.call(null);
(statearr_13029[(6)] = c__11371__auto___13063);

return statearr_13029;
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
var G__13035 = arguments.length;
switch (G__13035) {
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
var G__13047 = arguments.length;
switch (G__13047) {
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
var G__13064 = arguments.length;
switch (G__13064) {
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
var c__11371__auto___13252 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__11372__auto__ = (function (){var switch__11190__auto__ = (function (state_13166){
var state_val_13168 = (state_13166[(1)]);
if((state_val_13168 === (7))){
var state_13166__$1 = state_13166;
var statearr_13170_13253 = state_13166__$1;
(statearr_13170_13253[(2)] = null);

(statearr_13170_13253[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13168 === (1))){
var state_13166__$1 = state_13166;
var statearr_13173_13257 = state_13166__$1;
(statearr_13173_13257[(2)] = null);

(statearr_13173_13257[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13168 === (4))){
var inst_13092 = (state_13166[(7)]);
var inst_13090 = (state_13166[(8)]);
var inst_13094 = (inst_13092 < inst_13090);
var state_13166__$1 = state_13166;
if(cljs.core.truth_(inst_13094)){
var statearr_13178_13269 = state_13166__$1;
(statearr_13178_13269[(1)] = (6));

} else {
var statearr_13179_13271 = state_13166__$1;
(statearr_13179_13271[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13168 === (15))){
var inst_13143 = (state_13166[(9)]);
var inst_13148 = cljs.core.apply.call(null,f,inst_13143);
var state_13166__$1 = state_13166;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13166__$1,(17),out,inst_13148);
} else {
if((state_val_13168 === (13))){
var inst_13143 = (state_13166[(9)]);
var inst_13143__$1 = (state_13166[(2)]);
var inst_13144 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_13143__$1);
var state_13166__$1 = (function (){var statearr_13182 = state_13166;
(statearr_13182[(9)] = inst_13143__$1);

return statearr_13182;
})();
if(cljs.core.truth_(inst_13144)){
var statearr_13183_13290 = state_13166__$1;
(statearr_13183_13290[(1)] = (14));

} else {
var statearr_13184_13292 = state_13166__$1;
(statearr_13184_13292[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13168 === (6))){
var state_13166__$1 = state_13166;
var statearr_13188_13295 = state_13166__$1;
(statearr_13188_13295[(2)] = null);

(statearr_13188_13295[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13168 === (17))){
var inst_13150 = (state_13166[(2)]);
var state_13166__$1 = (function (){var statearr_13201 = state_13166;
(statearr_13201[(10)] = inst_13150);

return statearr_13201;
})();
var statearr_13202_13296 = state_13166__$1;
(statearr_13202_13296[(2)] = null);

(statearr_13202_13296[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13168 === (3))){
var inst_13159 = (state_13166[(2)]);
var state_13166__$1 = state_13166;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13166__$1,inst_13159);
} else {
if((state_val_13168 === (12))){
var _ = (function (){var statearr_13203 = state_13166;
(statearr_13203[(4)] = cljs.core.rest.call(null,(state_13166[(4)])));

return statearr_13203;
})();
var state_13166__$1 = state_13166;
var ex13198 = (state_13166__$1[(2)]);
var statearr_13205_13299 = state_13166__$1;
(statearr_13205_13299[(5)] = ex13198);


if((ex13198 instanceof Object)){
var statearr_13208_13300 = state_13166__$1;
(statearr_13208_13300[(1)] = (11));

(statearr_13208_13300[(5)] = null);

} else {
throw ex13198;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13168 === (2))){
var inst_13089 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_13090 = cnt;
var inst_13092 = (0);
var state_13166__$1 = (function (){var statearr_13214 = state_13166;
(statearr_13214[(11)] = inst_13089);

(statearr_13214[(8)] = inst_13090);

(statearr_13214[(7)] = inst_13092);

return statearr_13214;
})();
var statearr_13216_13304 = state_13166__$1;
(statearr_13216_13304[(2)] = null);

(statearr_13216_13304[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13168 === (11))){
var inst_13115 = (state_13166[(2)]);
var inst_13116 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_13166__$1 = (function (){var statearr_13219 = state_13166;
(statearr_13219[(12)] = inst_13115);

return statearr_13219;
})();
var statearr_13220_13307 = state_13166__$1;
(statearr_13220_13307[(2)] = inst_13116);

(statearr_13220_13307[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13168 === (9))){
var inst_13092 = (state_13166[(7)]);
var _ = (function (){var statearr_13221 = state_13166;
(statearr_13221[(4)] = cljs.core.cons.call(null,(12),(state_13166[(4)])));

return statearr_13221;
})();
var inst_13125 = chs__$1.call(null,inst_13092);
var inst_13126 = done.call(null,inst_13092);
var inst_13127 = cljs.core.async.take_BANG_.call(null,inst_13125,inst_13126);
var ___$1 = (function (){var statearr_13222 = state_13166;
(statearr_13222[(4)] = cljs.core.rest.call(null,(state_13166[(4)])));

return statearr_13222;
})();
var state_13166__$1 = state_13166;
var statearr_13223_13308 = state_13166__$1;
(statearr_13223_13308[(2)] = inst_13127);

(statearr_13223_13308[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13168 === (5))){
var inst_13140 = (state_13166[(2)]);
var state_13166__$1 = (function (){var statearr_13224 = state_13166;
(statearr_13224[(13)] = inst_13140);

return statearr_13224;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13166__$1,(13),dchan);
} else {
if((state_val_13168 === (14))){
var inst_13146 = cljs.core.async.close_BANG_.call(null,out);
var state_13166__$1 = state_13166;
var statearr_13226_13309 = state_13166__$1;
(statearr_13226_13309[(2)] = inst_13146);

(statearr_13226_13309[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13168 === (16))){
var inst_13153 = (state_13166[(2)]);
var state_13166__$1 = state_13166;
var statearr_13229_13310 = state_13166__$1;
(statearr_13229_13310[(2)] = inst_13153);

(statearr_13229_13310[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13168 === (10))){
var inst_13092 = (state_13166[(7)]);
var inst_13130 = (state_13166[(2)]);
var inst_13131 = (inst_13092 + (1));
var inst_13092__$1 = inst_13131;
var state_13166__$1 = (function (){var statearr_13230 = state_13166;
(statearr_13230[(14)] = inst_13130);

(statearr_13230[(7)] = inst_13092__$1);

return statearr_13230;
})();
var statearr_13231_13311 = state_13166__$1;
(statearr_13231_13311[(2)] = null);

(statearr_13231_13311[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13168 === (8))){
var inst_13135 = (state_13166[(2)]);
var state_13166__$1 = state_13166;
var statearr_13232_13313 = state_13166__$1;
(statearr_13232_13313[(2)] = inst_13135);

(statearr_13232_13313[(1)] = (5));


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
var statearr_13234 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_13234[(0)] = cljs$core$async$state_machine__11191__auto__);

(statearr_13234[(1)] = (1));

return statearr_13234;
});
var cljs$core$async$state_machine__11191__auto____1 = (function (state_13166){
while(true){
var ret_value__11192__auto__ = (function (){try{while(true){
var result__11193__auto__ = switch__11190__auto__.call(null,state_13166);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11193__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11193__auto__;
}
break;
}
}catch (e13235){var ex__11194__auto__ = e13235;
var statearr_13236_13317 = state_13166;
(statearr_13236_13317[(2)] = ex__11194__auto__);


if(cljs.core.seq.call(null,(state_13166[(4)]))){
var statearr_13238_13319 = state_13166;
(statearr_13238_13319[(1)] = cljs.core.first.call(null,(state_13166[(4)])));

} else {
throw ex__11194__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11192__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13321 = state_13166;
state_13166 = G__13321;
continue;
} else {
return ret_value__11192__auto__;
}
break;
}
});
cljs$core$async$state_machine__11191__auto__ = function(state_13166){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__11191__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__11191__auto____1.call(this,state_13166);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__11191__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__11191__auto____0;
cljs$core$async$state_machine__11191__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__11191__auto____1;
return cljs$core$async$state_machine__11191__auto__;
})()
})();
var state__11373__auto__ = (function (){var statearr_13240 = f__11372__auto__.call(null);
(statearr_13240[(6)] = c__11371__auto___13252);

return statearr_13240;
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
var G__13244 = arguments.length;
switch (G__13244) {
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
var c__11371__auto___13339 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__11372__auto__ = (function (){var switch__11190__auto__ = (function (state_13293){
var state_val_13294 = (state_13293[(1)]);
if((state_val_13294 === (7))){
var inst_13266 = (state_13293[(7)]);
var inst_13267 = (state_13293[(8)]);
var inst_13266__$1 = (state_13293[(2)]);
var inst_13267__$1 = cljs.core.nth.call(null,inst_13266__$1,(0),null);
var inst_13268 = cljs.core.nth.call(null,inst_13266__$1,(1),null);
var inst_13270 = (inst_13267__$1 == null);
var state_13293__$1 = (function (){var statearr_13301 = state_13293;
(statearr_13301[(7)] = inst_13266__$1);

(statearr_13301[(8)] = inst_13267__$1);

(statearr_13301[(9)] = inst_13268);

return statearr_13301;
})();
if(cljs.core.truth_(inst_13270)){
var statearr_13302_13341 = state_13293__$1;
(statearr_13302_13341[(1)] = (8));

} else {
var statearr_13303_13343 = state_13293__$1;
(statearr_13303_13343[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13294 === (1))){
var inst_13254 = cljs.core.vec.call(null,chs);
var inst_13255 = inst_13254;
var state_13293__$1 = (function (){var statearr_13305 = state_13293;
(statearr_13305[(10)] = inst_13255);

return statearr_13305;
})();
var statearr_13306_13345 = state_13293__$1;
(statearr_13306_13345[(2)] = null);

(statearr_13306_13345[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13294 === (4))){
var inst_13255 = (state_13293[(10)]);
var state_13293__$1 = state_13293;
return cljs.core.async.ioc_alts_BANG_.call(null,state_13293__$1,(7),inst_13255);
} else {
if((state_val_13294 === (6))){
var inst_13285 = (state_13293[(2)]);
var state_13293__$1 = state_13293;
var statearr_13312_13347 = state_13293__$1;
(statearr_13312_13347[(2)] = inst_13285);

(statearr_13312_13347[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13294 === (3))){
var inst_13287 = (state_13293[(2)]);
var state_13293__$1 = state_13293;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13293__$1,inst_13287);
} else {
if((state_val_13294 === (2))){
var inst_13255 = (state_13293[(10)]);
var inst_13258 = cljs.core.count.call(null,inst_13255);
var inst_13259 = (inst_13258 > (0));
var state_13293__$1 = state_13293;
if(cljs.core.truth_(inst_13259)){
var statearr_13318_13354 = state_13293__$1;
(statearr_13318_13354[(1)] = (4));

} else {
var statearr_13320_13355 = state_13293__$1;
(statearr_13320_13355[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13294 === (11))){
var inst_13255 = (state_13293[(10)]);
var inst_13278 = (state_13293[(2)]);
var tmp13314 = inst_13255;
var inst_13255__$1 = tmp13314;
var state_13293__$1 = (function (){var statearr_13322 = state_13293;
(statearr_13322[(11)] = inst_13278);

(statearr_13322[(10)] = inst_13255__$1);

return statearr_13322;
})();
var statearr_13323_13373 = state_13293__$1;
(statearr_13323_13373[(2)] = null);

(statearr_13323_13373[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13294 === (9))){
var inst_13267 = (state_13293[(8)]);
var state_13293__$1 = state_13293;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13293__$1,(11),out,inst_13267);
} else {
if((state_val_13294 === (5))){
var inst_13283 = cljs.core.async.close_BANG_.call(null,out);
var state_13293__$1 = state_13293;
var statearr_13325_13376 = state_13293__$1;
(statearr_13325_13376[(2)] = inst_13283);

(statearr_13325_13376[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13294 === (10))){
var inst_13281 = (state_13293[(2)]);
var state_13293__$1 = state_13293;
var statearr_13326_13377 = state_13293__$1;
(statearr_13326_13377[(2)] = inst_13281);

(statearr_13326_13377[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13294 === (8))){
var inst_13255 = (state_13293[(10)]);
var inst_13266 = (state_13293[(7)]);
var inst_13267 = (state_13293[(8)]);
var inst_13268 = (state_13293[(9)]);
var inst_13273 = (function (){var cs = inst_13255;
var vec__13261 = inst_13266;
var v = inst_13267;
var c = inst_13268;
return (function (p1__13241_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__13241_SHARP_);
});
})();
var inst_13274 = cljs.core.filterv.call(null,inst_13273,inst_13255);
var inst_13255__$1 = inst_13274;
var state_13293__$1 = (function (){var statearr_13327 = state_13293;
(statearr_13327[(10)] = inst_13255__$1);

return statearr_13327;
})();
var statearr_13328_13384 = state_13293__$1;
(statearr_13328_13384[(2)] = null);

(statearr_13328_13384[(1)] = (2));


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
var statearr_13329 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_13329[(0)] = cljs$core$async$state_machine__11191__auto__);

(statearr_13329[(1)] = (1));

return statearr_13329;
});
var cljs$core$async$state_machine__11191__auto____1 = (function (state_13293){
while(true){
var ret_value__11192__auto__ = (function (){try{while(true){
var result__11193__auto__ = switch__11190__auto__.call(null,state_13293);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11193__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11193__auto__;
}
break;
}
}catch (e13330){var ex__11194__auto__ = e13330;
var statearr_13331_13387 = state_13293;
(statearr_13331_13387[(2)] = ex__11194__auto__);


if(cljs.core.seq.call(null,(state_13293[(4)]))){
var statearr_13332_13389 = state_13293;
(statearr_13332_13389[(1)] = cljs.core.first.call(null,(state_13293[(4)])));

} else {
throw ex__11194__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11192__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13390 = state_13293;
state_13293 = G__13390;
continue;
} else {
return ret_value__11192__auto__;
}
break;
}
});
cljs$core$async$state_machine__11191__auto__ = function(state_13293){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__11191__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__11191__auto____1.call(this,state_13293);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__11191__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__11191__auto____0;
cljs$core$async$state_machine__11191__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__11191__auto____1;
return cljs$core$async$state_machine__11191__auto__;
})()
})();
var state__11373__auto__ = (function (){var statearr_13333 = f__11372__auto__.call(null);
(statearr_13333[(6)] = c__11371__auto___13339);

return statearr_13333;
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
var G__13340 = arguments.length;
switch (G__13340) {
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
var c__11371__auto___13416 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__11372__auto__ = (function (){var switch__11190__auto__ = (function (state_13374){
var state_val_13375 = (state_13374[(1)]);
if((state_val_13375 === (7))){
var inst_13353 = (state_13374[(7)]);
var inst_13353__$1 = (state_13374[(2)]);
var inst_13356 = (inst_13353__$1 == null);
var inst_13357 = cljs.core.not.call(null,inst_13356);
var state_13374__$1 = (function (){var statearr_13378 = state_13374;
(statearr_13378[(7)] = inst_13353__$1);

return statearr_13378;
})();
if(inst_13357){
var statearr_13381_13417 = state_13374__$1;
(statearr_13381_13417[(1)] = (8));

} else {
var statearr_13382_13418 = state_13374__$1;
(statearr_13382_13418[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13375 === (1))){
var inst_13348 = (0);
var state_13374__$1 = (function (){var statearr_13385 = state_13374;
(statearr_13385[(8)] = inst_13348);

return statearr_13385;
})();
var statearr_13386_13419 = state_13374__$1;
(statearr_13386_13419[(2)] = null);

(statearr_13386_13419[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13375 === (4))){
var state_13374__$1 = state_13374;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13374__$1,(7),ch);
} else {
if((state_val_13375 === (6))){
var inst_13368 = (state_13374[(2)]);
var state_13374__$1 = state_13374;
var statearr_13388_13420 = state_13374__$1;
(statearr_13388_13420[(2)] = inst_13368);

(statearr_13388_13420[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13375 === (3))){
var inst_13370 = (state_13374[(2)]);
var inst_13371 = cljs.core.async.close_BANG_.call(null,out);
var state_13374__$1 = (function (){var statearr_13391 = state_13374;
(statearr_13391[(9)] = inst_13370);

return statearr_13391;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13374__$1,inst_13371);
} else {
if((state_val_13375 === (2))){
var inst_13348 = (state_13374[(8)]);
var inst_13350 = (inst_13348 < n);
var state_13374__$1 = state_13374;
if(cljs.core.truth_(inst_13350)){
var statearr_13392_13421 = state_13374__$1;
(statearr_13392_13421[(1)] = (4));

} else {
var statearr_13393_13422 = state_13374__$1;
(statearr_13393_13422[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13375 === (11))){
var inst_13348 = (state_13374[(8)]);
var inst_13360 = (state_13374[(2)]);
var inst_13361 = (inst_13348 + (1));
var inst_13348__$1 = inst_13361;
var state_13374__$1 = (function (){var statearr_13394 = state_13374;
(statearr_13394[(10)] = inst_13360);

(statearr_13394[(8)] = inst_13348__$1);

return statearr_13394;
})();
var statearr_13395_13423 = state_13374__$1;
(statearr_13395_13423[(2)] = null);

(statearr_13395_13423[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13375 === (9))){
var state_13374__$1 = state_13374;
var statearr_13397_13424 = state_13374__$1;
(statearr_13397_13424[(2)] = null);

(statearr_13397_13424[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13375 === (5))){
var state_13374__$1 = state_13374;
var statearr_13399_13425 = state_13374__$1;
(statearr_13399_13425[(2)] = null);

(statearr_13399_13425[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13375 === (10))){
var inst_13365 = (state_13374[(2)]);
var state_13374__$1 = state_13374;
var statearr_13400_13426 = state_13374__$1;
(statearr_13400_13426[(2)] = inst_13365);

(statearr_13400_13426[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13375 === (8))){
var inst_13353 = (state_13374[(7)]);
var state_13374__$1 = state_13374;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13374__$1,(11),out,inst_13353);
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
var statearr_13403 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_13403[(0)] = cljs$core$async$state_machine__11191__auto__);

(statearr_13403[(1)] = (1));

return statearr_13403;
});
var cljs$core$async$state_machine__11191__auto____1 = (function (state_13374){
while(true){
var ret_value__11192__auto__ = (function (){try{while(true){
var result__11193__auto__ = switch__11190__auto__.call(null,state_13374);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11193__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11193__auto__;
}
break;
}
}catch (e13404){var ex__11194__auto__ = e13404;
var statearr_13405_13427 = state_13374;
(statearr_13405_13427[(2)] = ex__11194__auto__);


if(cljs.core.seq.call(null,(state_13374[(4)]))){
var statearr_13406_13428 = state_13374;
(statearr_13406_13428[(1)] = cljs.core.first.call(null,(state_13374[(4)])));

} else {
throw ex__11194__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11192__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13431 = state_13374;
state_13374 = G__13431;
continue;
} else {
return ret_value__11192__auto__;
}
break;
}
});
cljs$core$async$state_machine__11191__auto__ = function(state_13374){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__11191__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__11191__auto____1.call(this,state_13374);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__11191__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__11191__auto____0;
cljs$core$async$state_machine__11191__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__11191__auto____1;
return cljs$core$async$state_machine__11191__auto__;
})()
})();
var state__11373__auto__ = (function (){var statearr_13409 = f__11372__auto__.call(null);
(statearr_13409[(6)] = c__11371__auto___13416);

return statearr_13409;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async13433 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async13433 = (function (f,ch,meta13434){
this.f = f;
this.ch = ch;
this.meta13434 = meta13434;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async13433.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13435,meta13434__$1){
var self__ = this;
var _13435__$1 = this;
return (new cljs.core.async.t_cljs$core$async13433(self__.f,self__.ch,meta13434__$1));
}));

(cljs.core.async.t_cljs$core$async13433.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13435){
var self__ = this;
var _13435__$1 = this;
return self__.meta13434;
}));

(cljs.core.async.t_cljs$core$async13433.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async13433.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async13433.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async13433.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async13433.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
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
cljs.core.async.t_cljs$core$async13440 = (function (f,ch,meta13434,_,fn1,meta13441){
this.f = f;
this.ch = ch;
this.meta13434 = meta13434;
this._ = _;
this.fn1 = fn1;
this.meta13441 = meta13441;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async13440.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13442,meta13441__$1){
var self__ = this;
var _13442__$1 = this;
return (new cljs.core.async.t_cljs$core$async13440(self__.f,self__.ch,self__.meta13434,self__._,self__.fn1,meta13441__$1));
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
return (function (p1__13415_SHARP_){
return f1.call(null,(((p1__13415_SHARP_ == null))?null:self__.f.call(null,p1__13415_SHARP_)));
});
}));

(cljs.core.async.t_cljs$core$async13440.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta13434","meta13434",1883788335,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async13433","cljs.core.async/t_cljs$core$async13433",316444708,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta13441","meta13441",1069154497,null)], null);
}));

(cljs.core.async.t_cljs$core$async13440.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async13440.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async13440");

(cljs.core.async.t_cljs$core$async13440.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write.call(null,writer__5288__auto__,"cljs.core.async/t_cljs$core$async13440");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async13440.
 */
cljs.core.async.__GT_t_cljs$core$async13440 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async13440(f__$1,ch__$1,meta13434__$1,___$2,fn1__$1,meta13441){
return (new cljs.core.async.t_cljs$core$async13440(f__$1,ch__$1,meta13434__$1,___$2,fn1__$1,meta13441));
});

}

return (new cljs.core.async.t_cljs$core$async13440(self__.f,self__.ch,self__.meta13434,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
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

(cljs.core.async.t_cljs$core$async13433.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async13433.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async13433.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta13434","meta13434",1883788335,null)], null);
}));

(cljs.core.async.t_cljs$core$async13433.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async13433.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async13433");

(cljs.core.async.t_cljs$core$async13433.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write.call(null,writer__5288__auto__,"cljs.core.async/t_cljs$core$async13433");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async13433.
 */
cljs.core.async.__GT_t_cljs$core$async13433 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async13433(f__$1,ch__$1,meta13434){
return (new cljs.core.async.t_cljs$core$async13433(f__$1,ch__$1,meta13434));
});

}

return (new cljs.core.async.t_cljs$core$async13433(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async13448 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async13448 = (function (f,ch,meta13449){
this.f = f;
this.ch = ch;
this.meta13449 = meta13449;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async13448.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13450,meta13449__$1){
var self__ = this;
var _13450__$1 = this;
return (new cljs.core.async.t_cljs$core$async13448(self__.f,self__.ch,meta13449__$1));
}));

(cljs.core.async.t_cljs$core$async13448.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13450){
var self__ = this;
var _13450__$1 = this;
return self__.meta13449;
}));

(cljs.core.async.t_cljs$core$async13448.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async13448.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async13448.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async13448.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async13448.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async13448.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
}));

(cljs.core.async.t_cljs$core$async13448.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta13449","meta13449",720040568,null)], null);
}));

(cljs.core.async.t_cljs$core$async13448.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async13448.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async13448");

(cljs.core.async.t_cljs$core$async13448.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write.call(null,writer__5288__auto__,"cljs.core.async/t_cljs$core$async13448");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async13448.
 */
cljs.core.async.__GT_t_cljs$core$async13448 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async13448(f__$1,ch__$1,meta13449){
return (new cljs.core.async.t_cljs$core$async13448(f__$1,ch__$1,meta13449));
});

}

return (new cljs.core.async.t_cljs$core$async13448(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async13459 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async13459 = (function (p,ch,meta13460){
this.p = p;
this.ch = ch;
this.meta13460 = meta13460;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async13459.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13461,meta13460__$1){
var self__ = this;
var _13461__$1 = this;
return (new cljs.core.async.t_cljs$core$async13459(self__.p,self__.ch,meta13460__$1));
}));

(cljs.core.async.t_cljs$core$async13459.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13461){
var self__ = this;
var _13461__$1 = this;
return self__.meta13460;
}));

(cljs.core.async.t_cljs$core$async13459.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async13459.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async13459.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async13459.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async13459.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async13459.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async13459.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async13459.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta13460","meta13460",-331233321,null)], null);
}));

(cljs.core.async.t_cljs$core$async13459.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async13459.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async13459");

(cljs.core.async.t_cljs$core$async13459.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write.call(null,writer__5288__auto__,"cljs.core.async/t_cljs$core$async13459");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async13459.
 */
cljs.core.async.__GT_t_cljs$core$async13459 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async13459(p__$1,ch__$1,meta13460){
return (new cljs.core.async.t_cljs$core$async13459(p__$1,ch__$1,meta13460));
});

}

return (new cljs.core.async.t_cljs$core$async13459(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var statearr_13497_13518 = state_13490__$1;
(statearr_13497_13518[(1)] = (8));

} else {
var statearr_13498_13521 = state_13490__$1;
(statearr_13498_13521[(1)] = (9));

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
var statearr_13499_13536 = state_13490__$1;
(statearr_13499_13536[(2)] = inst_13480);

(statearr_13499_13536[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13491 === (9))){
var state_13490__$1 = state_13490;
var statearr_13500_13540 = state_13490__$1;
(statearr_13500_13540[(2)] = null);

(statearr_13500_13540[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13491 === (5))){
var inst_13475 = cljs.core.async.close_BANG_.call(null,out);
var state_13490__$1 = state_13490;
var statearr_13501_13545 = state_13490__$1;
(statearr_13501_13545[(2)] = inst_13475);

(statearr_13501_13545[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13491 === (10))){
var inst_13483 = (state_13490[(2)]);
var state_13490__$1 = (function (){var statearr_13502 = state_13490;
(statearr_13502[(8)] = inst_13483);

return statearr_13502;
})();
var statearr_13503_13550 = state_13490__$1;
(statearr_13503_13550[(2)] = null);

(statearr_13503_13550[(1)] = (2));


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
var statearr_13506_13576 = state_13490;
(statearr_13506_13576[(2)] = ex__11194__auto__);


if(cljs.core.seq.call(null,(state_13490[(4)]))){
var statearr_13507_13585 = state_13490;
(statearr_13507_13585[(1)] = cljs.core.first.call(null,(state_13490[(4)])));

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
var inst_13581 = (state_13587[(2)]);
var state_13587__$1 = state_13587;
var statearr_13590_13631 = state_13587__$1;
(statearr_13590_13631[(2)] = inst_13581);

(statearr_13590_13631[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13588 === (20))){
var inst_13549 = (state_13587[(7)]);
var inst_13561 = (state_13587[(2)]);
var inst_13562 = cljs.core.next.call(null,inst_13549);
var inst_13532 = inst_13562;
var inst_13533 = null;
var inst_13534 = (0);
var inst_13535 = (0);
var state_13587__$1 = (function (){var statearr_13591 = state_13587;
(statearr_13591[(8)] = inst_13561);

(statearr_13591[(9)] = inst_13532);

(statearr_13591[(10)] = inst_13533);

(statearr_13591[(11)] = inst_13534);

(statearr_13591[(12)] = inst_13535);

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
var inst_13520 = (state_13587[(13)]);
var inst_13520__$1 = (state_13587[(2)]);
var inst_13522 = (inst_13520__$1 == null);
var state_13587__$1 = (function (){var statearr_13594 = state_13587;
(statearr_13594[(13)] = inst_13520__$1);

return statearr_13594;
})();
if(cljs.core.truth_(inst_13522)){
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
var statearr_13600_13636 = state_13587__$1;
(statearr_13600_13636[(2)] = null);

(statearr_13600_13636[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13588 === (21))){
var state_13587__$1 = state_13587;
var statearr_13601_13638 = state_13587__$1;
(statearr_13601_13638[(2)] = null);

(statearr_13601_13638[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13588 === (13))){
var inst_13535 = (state_13587[(12)]);
var inst_13532 = (state_13587[(9)]);
var inst_13533 = (state_13587[(10)]);
var inst_13534 = (state_13587[(11)]);
var inst_13544 = (state_13587[(2)]);
var inst_13546 = (inst_13535 + (1));
var tmp13597 = inst_13532;
var tmp13598 = inst_13534;
var tmp13599 = inst_13533;
var inst_13532__$1 = tmp13597;
var inst_13533__$1 = tmp13599;
var inst_13534__$1 = tmp13598;
var inst_13535__$1 = inst_13546;
var state_13587__$1 = (function (){var statearr_13602 = state_13587;
(statearr_13602[(14)] = inst_13544);

(statearr_13602[(9)] = inst_13532__$1);

(statearr_13602[(10)] = inst_13533__$1);

(statearr_13602[(11)] = inst_13534__$1);

(statearr_13602[(12)] = inst_13535__$1);

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
var inst_13520 = (state_13587[(13)]);
var inst_13530 = f.call(null,inst_13520);
var inst_13531 = cljs.core.seq.call(null,inst_13530);
var inst_13532 = inst_13531;
var inst_13533 = null;
var inst_13534 = (0);
var inst_13535 = (0);
var state_13587__$1 = (function (){var statearr_13605 = state_13587;
(statearr_13605[(9)] = inst_13532);

(statearr_13605[(10)] = inst_13533);

(statearr_13605[(11)] = inst_13534);

(statearr_13605[(12)] = inst_13535);

return statearr_13605;
})();
var statearr_13606_13642 = state_13587__$1;
(statearr_13606_13642[(2)] = null);

(statearr_13606_13642[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13588 === (17))){
var inst_13549 = (state_13587[(7)]);
var inst_13554 = cljs.core.chunk_first.call(null,inst_13549);
var inst_13555 = cljs.core.chunk_rest.call(null,inst_13549);
var inst_13556 = cljs.core.count.call(null,inst_13554);
var inst_13532 = inst_13555;
var inst_13533 = inst_13554;
var inst_13534 = inst_13556;
var inst_13535 = (0);
var state_13587__$1 = (function (){var statearr_13607 = state_13587;
(statearr_13607[(9)] = inst_13532);

(statearr_13607[(10)] = inst_13533);

(statearr_13607[(11)] = inst_13534);

(statearr_13607[(12)] = inst_13535);

return statearr_13607;
})();
var statearr_13608_13645 = state_13587__$1;
(statearr_13608_13645[(2)] = null);

(statearr_13608_13645[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13588 === (3))){
var inst_13583 = (state_13587[(2)]);
var state_13587__$1 = state_13587;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13587__$1,inst_13583);
} else {
if((state_val_13588 === (12))){
var inst_13570 = (state_13587[(2)]);
var state_13587__$1 = state_13587;
var statearr_13609_13646 = state_13587__$1;
(statearr_13609_13646[(2)] = inst_13570);

(statearr_13609_13646[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13588 === (2))){
var state_13587__$1 = state_13587;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13587__$1,(4),in$);
} else {
if((state_val_13588 === (23))){
var inst_13579 = (state_13587[(2)]);
var state_13587__$1 = state_13587;
var statearr_13610_13647 = state_13587__$1;
(statearr_13610_13647[(2)] = inst_13579);

(statearr_13610_13647[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13588 === (19))){
var inst_13565 = (state_13587[(2)]);
var state_13587__$1 = state_13587;
var statearr_13611_13648 = state_13587__$1;
(statearr_13611_13648[(2)] = inst_13565);

(statearr_13611_13648[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13588 === (11))){
var inst_13532 = (state_13587[(9)]);
var inst_13549 = (state_13587[(7)]);
var inst_13549__$1 = cljs.core.seq.call(null,inst_13532);
var state_13587__$1 = (function (){var statearr_13612 = state_13587;
(statearr_13612[(7)] = inst_13549__$1);

return statearr_13612;
})();
if(inst_13549__$1){
var statearr_13613_13653 = state_13587__$1;
(statearr_13613_13653[(1)] = (14));

} else {
var statearr_13614_13657 = state_13587__$1;
(statearr_13614_13657[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13588 === (9))){
var inst_13572 = (state_13587[(2)]);
var inst_13573 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_13587__$1 = (function (){var statearr_13615 = state_13587;
(statearr_13615[(15)] = inst_13572);

return statearr_13615;
})();
if(cljs.core.truth_(inst_13573)){
var statearr_13616_13676 = state_13587__$1;
(statearr_13616_13676[(1)] = (21));

} else {
var statearr_13617_13677 = state_13587__$1;
(statearr_13617_13677[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13588 === (5))){
var inst_13524 = cljs.core.async.close_BANG_.call(null,out);
var state_13587__$1 = state_13587;
var statearr_13618_13678 = state_13587__$1;
(statearr_13618_13678[(2)] = inst_13524);

(statearr_13618_13678[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13588 === (14))){
var inst_13549 = (state_13587[(7)]);
var inst_13552 = cljs.core.chunked_seq_QMARK_.call(null,inst_13549);
var state_13587__$1 = state_13587;
if(inst_13552){
var statearr_13619_13679 = state_13587__$1;
(statearr_13619_13679[(1)] = (17));

} else {
var statearr_13620_13681 = state_13587__$1;
(statearr_13620_13681[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13588 === (16))){
var inst_13568 = (state_13587[(2)]);
var state_13587__$1 = state_13587;
var statearr_13621_13683 = state_13587__$1;
(statearr_13621_13683[(2)] = inst_13568);

(statearr_13621_13683[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13588 === (10))){
var inst_13533 = (state_13587[(10)]);
var inst_13535 = (state_13587[(12)]);
var inst_13542 = cljs.core._nth.call(null,inst_13533,inst_13535);
var state_13587__$1 = state_13587;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13587__$1,(13),out,inst_13542);
} else {
if((state_val_13588 === (18))){
var inst_13549 = (state_13587[(7)]);
var inst_13559 = cljs.core.first.call(null,inst_13549);
var state_13587__$1 = state_13587;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13587__$1,(20),out,inst_13559);
} else {
if((state_val_13588 === (8))){
var inst_13535 = (state_13587[(12)]);
var inst_13534 = (state_13587[(11)]);
var inst_13538 = (inst_13535 < inst_13534);
var inst_13539 = inst_13538;
var state_13587__$1 = state_13587;
if(cljs.core.truth_(inst_13539)){
var statearr_13622_13686 = state_13587__$1;
(statearr_13622_13686[(1)] = (10));

} else {
var statearr_13623_13688 = state_13587__$1;
(statearr_13623_13688[(1)] = (11));

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
var statearr_13626_13691 = state_13587;
(statearr_13626_13691[(2)] = ex__11194__auto__);


if(cljs.core.seq.call(null,(state_13587[(4)]))){
var statearr_13627_13693 = state_13587;
(statearr_13627_13693[(1)] = cljs.core.first.call(null,(state_13587[(4)])));

} else {
throw ex__11194__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11192__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13694 = state_13587;
state_13587 = G__13694;
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
var G__13639 = arguments.length;
switch (G__13639) {
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
var f__11372__auto__ = (function (){var switch__11190__auto__ = (function (state_13674){
var state_val_13675 = (state_13674[(1)]);
if((state_val_13675 === (7))){
var inst_13669 = (state_13674[(2)]);
var state_13674__$1 = state_13674;
var statearr_13680_13714 = state_13674__$1;
(statearr_13680_13714[(2)] = inst_13669);

(statearr_13680_13714[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13675 === (1))){
var inst_13649 = null;
var state_13674__$1 = (function (){var statearr_13682 = state_13674;
(statearr_13682[(7)] = inst_13649);

return statearr_13682;
})();
var statearr_13684_13715 = state_13674__$1;
(statearr_13684_13715[(2)] = null);

(statearr_13684_13715[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13675 === (4))){
var inst_13652 = (state_13674[(8)]);
var inst_13652__$1 = (state_13674[(2)]);
var inst_13654 = (inst_13652__$1 == null);
var inst_13655 = cljs.core.not.call(null,inst_13654);
var state_13674__$1 = (function (){var statearr_13685 = state_13674;
(statearr_13685[(8)] = inst_13652__$1);

return statearr_13685;
})();
if(inst_13655){
var statearr_13687_13716 = state_13674__$1;
(statearr_13687_13716[(1)] = (5));

} else {
var statearr_13689_13720 = state_13674__$1;
(statearr_13689_13720[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13675 === (6))){
var state_13674__$1 = state_13674;
var statearr_13690_13726 = state_13674__$1;
(statearr_13690_13726[(2)] = null);

(statearr_13690_13726[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13675 === (3))){
var inst_13671 = (state_13674[(2)]);
var inst_13672 = cljs.core.async.close_BANG_.call(null,out);
var state_13674__$1 = (function (){var statearr_13692 = state_13674;
(statearr_13692[(9)] = inst_13671);

return statearr_13692;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13674__$1,inst_13672);
} else {
if((state_val_13675 === (2))){
var state_13674__$1 = state_13674;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13674__$1,(4),ch);
} else {
if((state_val_13675 === (11))){
var inst_13652 = (state_13674[(8)]);
var inst_13663 = (state_13674[(2)]);
var inst_13649 = inst_13652;
var state_13674__$1 = (function (){var statearr_13695 = state_13674;
(statearr_13695[(10)] = inst_13663);

(statearr_13695[(7)] = inst_13649);

return statearr_13695;
})();
var statearr_13697_13752 = state_13674__$1;
(statearr_13697_13752[(2)] = null);

(statearr_13697_13752[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13675 === (9))){
var inst_13652 = (state_13674[(8)]);
var state_13674__$1 = state_13674;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13674__$1,(11),out,inst_13652);
} else {
if((state_val_13675 === (5))){
var inst_13652 = (state_13674[(8)]);
var inst_13649 = (state_13674[(7)]);
var inst_13658 = cljs.core._EQ_.call(null,inst_13652,inst_13649);
var state_13674__$1 = state_13674;
if(inst_13658){
var statearr_13700_13759 = state_13674__$1;
(statearr_13700_13759[(1)] = (8));

} else {
var statearr_13701_13760 = state_13674__$1;
(statearr_13701_13760[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13675 === (10))){
var inst_13666 = (state_13674[(2)]);
var state_13674__$1 = state_13674;
var statearr_13702_13762 = state_13674__$1;
(statearr_13702_13762[(2)] = inst_13666);

(statearr_13702_13762[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13675 === (8))){
var inst_13649 = (state_13674[(7)]);
var tmp13698 = inst_13649;
var inst_13649__$1 = tmp13698;
var state_13674__$1 = (function (){var statearr_13703 = state_13674;
(statearr_13703[(7)] = inst_13649__$1);

return statearr_13703;
})();
var statearr_13704_13764 = state_13674__$1;
(statearr_13704_13764[(2)] = null);

(statearr_13704_13764[(1)] = (2));


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
var cljs$core$async$state_machine__11191__auto____1 = (function (state_13674){
while(true){
var ret_value__11192__auto__ = (function (){try{while(true){
var result__11193__auto__ = switch__11190__auto__.call(null,state_13674);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11193__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11193__auto__;
}
break;
}
}catch (e13706){var ex__11194__auto__ = e13706;
var statearr_13707_13768 = state_13674;
(statearr_13707_13768[(2)] = ex__11194__auto__);


if(cljs.core.seq.call(null,(state_13674[(4)]))){
var statearr_13708_13770 = state_13674;
(statearr_13708_13770[(1)] = cljs.core.first.call(null,(state_13674[(4)])));

} else {
throw ex__11194__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11192__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13771 = state_13674;
state_13674 = G__13771;
continue;
} else {
return ret_value__11192__auto__;
}
break;
}
});
cljs$core$async$state_machine__11191__auto__ = function(state_13674){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__11191__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__11191__auto____1.call(this,state_13674);
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
var statearr_13761_13796 = state_13757__$1;
(statearr_13761_13796[(2)] = inst_13753);

(statearr_13761_13796[(1)] = (3));


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
var inst_13724 = (inst_13723__$1 == null);
var inst_13725 = cljs.core.not.call(null,inst_13724);
var state_13757__$1 = (function (){var statearr_13766 = state_13757;
(statearr_13766[(9)] = inst_13723__$1);

return statearr_13766;
})();
if(inst_13725){
var statearr_13767_13802 = state_13757__$1;
(statearr_13767_13802[(1)] = (5));

} else {
var statearr_13769_13805 = state_13757__$1;
(statearr_13769_13805[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13758 === (15))){
var inst_13746 = (state_13757[(2)]);
var state_13757__$1 = state_13757;
var statearr_13772_13810 = state_13757__$1;
(statearr_13772_13810[(2)] = inst_13746);

(statearr_13772_13810[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13758 === (13))){
var state_13757__$1 = state_13757;
var statearr_13773_13814 = state_13757__$1;
(statearr_13773_13814[(2)] = null);

(statearr_13773_13814[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13758 === (6))){
var inst_13719 = (state_13757[(8)]);
var inst_13742 = (inst_13719 > (0));
var state_13757__$1 = state_13757;
if(cljs.core.truth_(inst_13742)){
var statearr_13774_13826 = state_13757__$1;
(statearr_13774_13826[(1)] = (12));

} else {
var statearr_13775_13832 = state_13757__$1;
(statearr_13775_13832[(1)] = (13));

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
var statearr_13777_13850 = state_13757__$1;
(statearr_13777_13850[(2)] = null);

(statearr_13777_13850[(1)] = (2));


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
var statearr_13779_13854 = state_13757__$1;
(statearr_13779_13854[(1)] = (8));

} else {
var statearr_13780_13855 = state_13757__$1;
(statearr_13780_13855[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13758 === (14))){
var inst_13749 = (state_13757[(2)]);
var inst_13750 = cljs.core.async.close_BANG_.call(null,out);
var state_13757__$1 = (function (){var statearr_13782 = state_13757;
(statearr_13782[(13)] = inst_13749);

return statearr_13782;
})();
var statearr_13783_13857 = state_13757__$1;
(statearr_13783_13857[(2)] = inst_13750);

(statearr_13783_13857[(1)] = (7));


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
var statearr_13786_13861 = state_13757__$1;
(statearr_13786_13861[(2)] = null);

(statearr_13786_13861[(1)] = (2));


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
var statearr_13789_13863 = state_13757;
(statearr_13789_13863[(2)] = ex__11194__auto__);


if(cljs.core.seq.call(null,(state_13757[(4)]))){
var statearr_13790_13866 = state_13757;
(statearr_13790_13866[(1)] = cljs.core.first.call(null,(state_13757[(4)])));

} else {
throw ex__11194__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11192__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13867 = state_13757;
state_13757 = G__13867;
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
var inst_13844 = (state_13848[(2)]);
var state_13848__$1 = state_13848;
var statearr_13851_13891 = state_13848__$1;
(statearr_13851_13891[(2)] = inst_13844);

(statearr_13851_13891[(1)] = (3));


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
var inst_13804 = (state_13848[(9)]);
var inst_13804__$1 = (state_13848[(2)]);
var inst_13806 = (inst_13804__$1 == null);
var inst_13807 = cljs.core.not.call(null,inst_13806);
var state_13848__$1 = (function (){var statearr_13856 = state_13848;
(statearr_13856[(9)] = inst_13804__$1);

return statearr_13856;
})();
if(inst_13807){
var statearr_13858_13893 = state_13848__$1;
(statearr_13858_13893[(1)] = (5));

} else {
var statearr_13859_13894 = state_13848__$1;
(statearr_13859_13894[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13849 === (15))){
var inst_13799 = (state_13848[(7)]);
var inst_13836 = cljs.core.vec.call(null,inst_13799);
var state_13848__$1 = state_13848;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13848__$1,(18),out,inst_13836);
} else {
if((state_val_13849 === (13))){
var inst_13830 = (state_13848[(2)]);
var state_13848__$1 = state_13848;
var statearr_13862_13895 = state_13848__$1;
(statearr_13862_13895[(2)] = inst_13830);

(statearr_13862_13895[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13849 === (6))){
var inst_13799 = (state_13848[(7)]);
var inst_13833 = inst_13799.length;
var inst_13834 = (inst_13833 > (0));
var state_13848__$1 = state_13848;
if(cljs.core.truth_(inst_13834)){
var statearr_13864_13896 = state_13848__$1;
(statearr_13864_13896[(1)] = (15));

} else {
var statearr_13865_13897 = state_13848__$1;
(statearr_13865_13897[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13849 === (17))){
var inst_13841 = (state_13848[(2)]);
var inst_13842 = cljs.core.async.close_BANG_.call(null,out);
var state_13848__$1 = (function (){var statearr_13868 = state_13848;
(statearr_13868[(10)] = inst_13841);

return statearr_13868;
})();
var statearr_13869_13898 = state_13848__$1;
(statearr_13869_13898[(2)] = inst_13842);

(statearr_13869_13898[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13849 === (3))){
var inst_13846 = (state_13848[(2)]);
var state_13848__$1 = state_13848;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13848__$1,inst_13846);
} else {
if((state_val_13849 === (12))){
var inst_13799 = (state_13848[(7)]);
var inst_13822 = cljs.core.vec.call(null,inst_13799);
var state_13848__$1 = state_13848;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13848__$1,(14),out,inst_13822);
} else {
if((state_val_13849 === (2))){
var state_13848__$1 = state_13848;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13848__$1,(4),ch);
} else {
if((state_val_13849 === (11))){
var inst_13799 = (state_13848[(7)]);
var inst_13804 = (state_13848[(9)]);
var inst_13809 = (state_13848[(11)]);
var inst_13819 = inst_13799.push(inst_13804);
var tmp13870 = inst_13799;
var inst_13799__$1 = tmp13870;
var inst_13800 = inst_13809;
var state_13848__$1 = (function (){var statearr_13871 = state_13848;
(statearr_13871[(12)] = inst_13819);

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
var inst_13815 = cljs.core.keyword_identical_QMARK_.call(null,inst_13800,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_13848__$1 = state_13848;
var statearr_13873_13900 = state_13848__$1;
(statearr_13873_13900[(2)] = inst_13815);

(statearr_13873_13900[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13849 === (5))){
var inst_13804 = (state_13848[(9)]);
var inst_13809 = (state_13848[(11)]);
var inst_13800 = (state_13848[(8)]);
var inst_13811 = (state_13848[(13)]);
var inst_13809__$1 = f.call(null,inst_13804);
var inst_13811__$1 = cljs.core._EQ_.call(null,inst_13809__$1,inst_13800);
var state_13848__$1 = (function (){var statearr_13874 = state_13848;
(statearr_13874[(11)] = inst_13809__$1);

(statearr_13874[(13)] = inst_13811__$1);

return statearr_13874;
})();
if(inst_13811__$1){
var statearr_13875_13901 = state_13848__$1;
(statearr_13875_13901[(1)] = (8));

} else {
var statearr_13876_13902 = state_13848__$1;
(statearr_13876_13902[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13849 === (14))){
var inst_13804 = (state_13848[(9)]);
var inst_13809 = (state_13848[(11)]);
var inst_13824 = (state_13848[(2)]);
var inst_13825 = [];
var inst_13827 = inst_13825.push(inst_13804);
var inst_13799 = inst_13825;
var inst_13800 = inst_13809;
var state_13848__$1 = (function (){var statearr_13877 = state_13848;
(statearr_13877[(14)] = inst_13824);

(statearr_13877[(15)] = inst_13827);

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
var inst_13817 = (state_13848[(2)]);
var state_13848__$1 = state_13848;
if(cljs.core.truth_(inst_13817)){
var statearr_13880_13905 = state_13848__$1;
(statearr_13880_13905[(1)] = (11));

} else {
var statearr_13881_13906 = state_13848__$1;
(statearr_13881_13906[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13849 === (18))){
var inst_13838 = (state_13848[(2)]);
var state_13848__$1 = state_13848;
var statearr_13882_13907 = state_13848__$1;
(statearr_13882_13907[(2)] = inst_13838);

(statearr_13882_13907[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13849 === (8))){
var inst_13811 = (state_13848[(13)]);
var state_13848__$1 = state_13848;
var statearr_13883_13908 = state_13848__$1;
(statearr_13883_13908[(2)] = inst_13811);

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
