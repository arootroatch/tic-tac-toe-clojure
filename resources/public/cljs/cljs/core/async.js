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
var G__9604 = arguments.length;
switch (G__9604) {
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async9605 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async9605 = (function (f,blockable,meta9606){
this.f = f;
this.blockable = blockable;
this.meta9606 = meta9606;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async9605.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9607,meta9606__$1){
var self__ = this;
var _9607__$1 = this;
return (new cljs.core.async.t_cljs$core$async9605(self__.f,self__.blockable,meta9606__$1));
}));

(cljs.core.async.t_cljs$core$async9605.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9607){
var self__ = this;
var _9607__$1 = this;
return self__.meta9606;
}));

(cljs.core.async.t_cljs$core$async9605.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async9605.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async9605.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async9605.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async9605.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta9606","meta9606",-248096785,null)], null);
}));

(cljs.core.async.t_cljs$core$async9605.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async9605.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async9605");

(cljs.core.async.t_cljs$core$async9605.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write.call(null,writer__5288__auto__,"cljs.core.async/t_cljs$core$async9605");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async9605.
 */
cljs.core.async.__GT_t_cljs$core$async9605 = (function cljs$core$async$__GT_t_cljs$core$async9605(f__$1,blockable__$1,meta9606){
return (new cljs.core.async.t_cljs$core$async9605(f__$1,blockable__$1,meta9606));
});

}

return (new cljs.core.async.t_cljs$core$async9605(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__9611 = arguments.length;
switch (G__9611) {
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
var G__9614 = arguments.length;
switch (G__9614) {
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
var G__9617 = arguments.length;
switch (G__9617) {
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
var val_9619 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_9619);
} else {
cljs.core.async.impl.dispatch.run.call(null,(function (){
return fn1.call(null,val_9619);
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
var G__9621 = arguments.length;
switch (G__9621) {
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
var n__5593__auto___9628 = n;
var x_9629 = (0);
while(true){
if((x_9629 < n__5593__auto___9628)){
(a[x_9629] = x_9629);

var G__9630 = (x_9629 + (1));
x_9629 = G__9630;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async9625 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async9625 = (function (flag,meta9626){
this.flag = flag;
this.meta9626 = meta9626;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async9625.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9627,meta9626__$1){
var self__ = this;
var _9627__$1 = this;
return (new cljs.core.async.t_cljs$core$async9625(self__.flag,meta9626__$1));
}));

(cljs.core.async.t_cljs$core$async9625.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9627){
var self__ = this;
var _9627__$1 = this;
return self__.meta9626;
}));

(cljs.core.async.t_cljs$core$async9625.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async9625.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
}));

(cljs.core.async.t_cljs$core$async9625.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async9625.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async9625.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta9626","meta9626",-1167496164,null)], null);
}));

(cljs.core.async.t_cljs$core$async9625.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async9625.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async9625");

(cljs.core.async.t_cljs$core$async9625.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write.call(null,writer__5288__auto__,"cljs.core.async/t_cljs$core$async9625");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async9625.
 */
cljs.core.async.__GT_t_cljs$core$async9625 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async9625(flag__$1,meta9626){
return (new cljs.core.async.t_cljs$core$async9625(flag__$1,meta9626));
});

}

return (new cljs.core.async.t_cljs$core$async9625(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async9634 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async9634 = (function (flag,cb,meta9635){
this.flag = flag;
this.cb = cb;
this.meta9635 = meta9635;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async9634.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9636,meta9635__$1){
var self__ = this;
var _9636__$1 = this;
return (new cljs.core.async.t_cljs$core$async9634(self__.flag,self__.cb,meta9635__$1));
}));

(cljs.core.async.t_cljs$core$async9634.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9636){
var self__ = this;
var _9636__$1 = this;
return self__.meta9635;
}));

(cljs.core.async.t_cljs$core$async9634.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async9634.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
}));

(cljs.core.async.t_cljs$core$async9634.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async9634.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async9634.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta9635","meta9635",1887245542,null)], null);
}));

(cljs.core.async.t_cljs$core$async9634.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async9634.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async9634");

(cljs.core.async.t_cljs$core$async9634.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write.call(null,writer__5288__auto__,"cljs.core.async/t_cljs$core$async9634");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async9634.
 */
cljs.core.async.__GT_t_cljs$core$async9634 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async9634(flag__$1,cb__$1,meta9635){
return (new cljs.core.async.t_cljs$core$async9634(flag__$1,cb__$1,meta9635));
});

}

return (new cljs.core.async.t_cljs$core$async9634(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__9649_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__9649_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,ports__$1,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,ports__$1,n,idxs,priority){
return (function (p1__9650_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__9650_SHARP_,port], null));
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
var G__9670 = (i + (1));
i = G__9670;
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
var len__5726__auto___9671 = arguments.length;
var i__5727__auto___9672 = (0);
while(true){
if((i__5727__auto___9672 < len__5726__auto___9671)){
args__5732__auto__.push((arguments[i__5727__auto___9672]));

var G__9673 = (i__5727__auto___9672 + (1));
i__5727__auto___9672 = G__9673;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__9667){
var map__9668 = p__9667;
var map__9668__$1 = cljs.core.__destructure_map.call(null,map__9668);
var opts = map__9668__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq9664){
var G__9665 = cljs.core.first.call(null,seq9664);
var seq9664__$1 = cljs.core.next.call(null,seq9664);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__9665,seq9664__$1);
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
var G__9677 = arguments.length;
switch (G__9677) {
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
var c__9544__auto___9756 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__9545__auto__ = (function (){var switch__9363__auto__ = (function (state_9718){
var state_val_9719 = (state_9718[(1)]);
if((state_val_9719 === (7))){
var inst_9714 = (state_9718[(2)]);
var state_9718__$1 = state_9718;
var statearr_9721_9760 = state_9718__$1;
(statearr_9721_9760[(2)] = inst_9714);

(statearr_9721_9760[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9719 === (1))){
var state_9718__$1 = state_9718;
var statearr_9722_9761 = state_9718__$1;
(statearr_9722_9761[(2)] = null);

(statearr_9722_9761[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9719 === (4))){
var inst_9693 = (state_9718[(7)]);
var inst_9693__$1 = (state_9718[(2)]);
var inst_9695 = (inst_9693__$1 == null);
var state_9718__$1 = (function (){var statearr_9723 = state_9718;
(statearr_9723[(7)] = inst_9693__$1);

return statearr_9723;
})();
if(cljs.core.truth_(inst_9695)){
var statearr_9724_9766 = state_9718__$1;
(statearr_9724_9766[(1)] = (5));

} else {
var statearr_9725_9767 = state_9718__$1;
(statearr_9725_9767[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9719 === (13))){
var state_9718__$1 = state_9718;
var statearr_9727_9775 = state_9718__$1;
(statearr_9727_9775[(2)] = null);

(statearr_9727_9775[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9719 === (6))){
var inst_9693 = (state_9718[(7)]);
var state_9718__$1 = state_9718;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9718__$1,(11),to,inst_9693);
} else {
if((state_val_9719 === (3))){
var inst_9716 = (state_9718[(2)]);
var state_9718__$1 = state_9718;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9718__$1,inst_9716);
} else {
if((state_val_9719 === (12))){
var state_9718__$1 = state_9718;
var statearr_9733_9777 = state_9718__$1;
(statearr_9733_9777[(2)] = null);

(statearr_9733_9777[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9719 === (2))){
var state_9718__$1 = state_9718;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9718__$1,(4),from);
} else {
if((state_val_9719 === (11))){
var inst_9704 = (state_9718[(2)]);
var state_9718__$1 = state_9718;
if(cljs.core.truth_(inst_9704)){
var statearr_9736_9783 = state_9718__$1;
(statearr_9736_9783[(1)] = (12));

} else {
var statearr_9737_9785 = state_9718__$1;
(statearr_9737_9785[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9719 === (9))){
var state_9718__$1 = state_9718;
var statearr_9738_9787 = state_9718__$1;
(statearr_9738_9787[(2)] = null);

(statearr_9738_9787[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9719 === (5))){
var state_9718__$1 = state_9718;
if(cljs.core.truth_(close_QMARK_)){
var statearr_9739_9790 = state_9718__$1;
(statearr_9739_9790[(1)] = (8));

} else {
var statearr_9740_9791 = state_9718__$1;
(statearr_9740_9791[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9719 === (14))){
var inst_9712 = (state_9718[(2)]);
var state_9718__$1 = state_9718;
var statearr_9741_9796 = state_9718__$1;
(statearr_9741_9796[(2)] = inst_9712);

(statearr_9741_9796[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9719 === (10))){
var inst_9701 = (state_9718[(2)]);
var state_9718__$1 = state_9718;
var statearr_9742_9798 = state_9718__$1;
(statearr_9742_9798[(2)] = inst_9701);

(statearr_9742_9798[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9719 === (8))){
var inst_9698 = cljs.core.async.close_BANG_.call(null,to);
var state_9718__$1 = state_9718;
var statearr_9743_9799 = state_9718__$1;
(statearr_9743_9799[(2)] = inst_9698);

(statearr_9743_9799[(1)] = (10));


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
var cljs$core$async$state_machine__9364__auto__ = null;
var cljs$core$async$state_machine__9364__auto____0 = (function (){
var statearr_9745 = [null,null,null,null,null,null,null,null];
(statearr_9745[(0)] = cljs$core$async$state_machine__9364__auto__);

(statearr_9745[(1)] = (1));

return statearr_9745;
});
var cljs$core$async$state_machine__9364__auto____1 = (function (state_9718){
while(true){
var ret_value__9365__auto__ = (function (){try{while(true){
var result__9366__auto__ = switch__9363__auto__.call(null,state_9718);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9366__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9366__auto__;
}
break;
}
}catch (e9747){var ex__9367__auto__ = e9747;
var statearr_9749_9805 = state_9718;
(statearr_9749_9805[(2)] = ex__9367__auto__);


if(cljs.core.seq.call(null,(state_9718[(4)]))){
var statearr_9750_9806 = state_9718;
(statearr_9750_9806[(1)] = cljs.core.first.call(null,(state_9718[(4)])));

} else {
throw ex__9367__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9365__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9808 = state_9718;
state_9718 = G__9808;
continue;
} else {
return ret_value__9365__auto__;
}
break;
}
});
cljs$core$async$state_machine__9364__auto__ = function(state_9718){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__9364__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__9364__auto____1.call(this,state_9718);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__9364__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__9364__auto____0;
cljs$core$async$state_machine__9364__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__9364__auto____1;
return cljs$core$async$state_machine__9364__auto__;
})()
})();
var state__9546__auto__ = (function (){var statearr_9754 = f__9545__auto__.call(null);
(statearr_9754[(6)] = c__9544__auto___9756);

return statearr_9754;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9546__auto__);
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
var process__$1 = (function (p__9762){
var vec__9763 = p__9762;
var v = cljs.core.nth.call(null,vec__9763,(0),null);
var p = cljs.core.nth.call(null,vec__9763,(1),null);
var job = vec__9763;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__9544__auto___9983 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__9545__auto__ = (function (){var switch__9363__auto__ = (function (state_9772){
var state_val_9773 = (state_9772[(1)]);
if((state_val_9773 === (1))){
var state_9772__$1 = state_9772;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9772__$1,(2),res,v);
} else {
if((state_val_9773 === (2))){
var inst_9769 = (state_9772[(2)]);
var inst_9770 = cljs.core.async.close_BANG_.call(null,res);
var state_9772__$1 = (function (){var statearr_9776 = state_9772;
(statearr_9776[(7)] = inst_9769);

return statearr_9776;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9772__$1,inst_9770);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__9364__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__9364__auto____0 = (function (){
var statearr_9784 = [null,null,null,null,null,null,null,null];
(statearr_9784[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__9364__auto__);

(statearr_9784[(1)] = (1));

return statearr_9784;
});
var cljs$core$async$pipeline_STAR__$_state_machine__9364__auto____1 = (function (state_9772){
while(true){
var ret_value__9365__auto__ = (function (){try{while(true){
var result__9366__auto__ = switch__9363__auto__.call(null,state_9772);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9366__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9366__auto__;
}
break;
}
}catch (e9786){var ex__9367__auto__ = e9786;
var statearr_9788_9985 = state_9772;
(statearr_9788_9985[(2)] = ex__9367__auto__);


if(cljs.core.seq.call(null,(state_9772[(4)]))){
var statearr_9789_9987 = state_9772;
(statearr_9789_9987[(1)] = cljs.core.first.call(null,(state_9772[(4)])));

} else {
throw ex__9367__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9365__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9988 = state_9772;
state_9772 = G__9988;
continue;
} else {
return ret_value__9365__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__9364__auto__ = function(state_9772){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__9364__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__9364__auto____1.call(this,state_9772);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__9364__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__9364__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__9364__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__9364__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__9364__auto__;
})()
})();
var state__9546__auto__ = (function (){var statearr_9797 = f__9545__auto__.call(null);
(statearr_9797[(6)] = c__9544__auto___9983);

return statearr_9797;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9546__auto__);
}));


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});
var async = (function (p__9800){
var vec__9801 = p__9800;
var v = cljs.core.nth.call(null,vec__9801,(0),null);
var p = cljs.core.nth.call(null,vec__9801,(1),null);
var job = vec__9801;
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
var n__5593__auto___9989 = n;
var __9990 = (0);
while(true){
if((__9990 < n__5593__auto___9989)){
var G__9807_9991 = type;
var G__9807_9992__$1 = (((G__9807_9991 instanceof cljs.core.Keyword))?G__9807_9991.fqn:null);
switch (G__9807_9992__$1) {
case "compute":
var c__9544__auto___9994 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__9990,c__9544__auto___9994,G__9807_9991,G__9807_9992__$1,n__5593__auto___9989,jobs,results,process__$1,async){
return (function (){
var f__9545__auto__ = (function (){var switch__9363__auto__ = ((function (__9990,c__9544__auto___9994,G__9807_9991,G__9807_9992__$1,n__5593__auto___9989,jobs,results,process__$1,async){
return (function (state_9821){
var state_val_9822 = (state_9821[(1)]);
if((state_val_9822 === (1))){
var state_9821__$1 = state_9821;
var statearr_9823_9995 = state_9821__$1;
(statearr_9823_9995[(2)] = null);

(statearr_9823_9995[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9822 === (2))){
var state_9821__$1 = state_9821;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9821__$1,(4),jobs);
} else {
if((state_val_9822 === (3))){
var inst_9819 = (state_9821[(2)]);
var state_9821__$1 = state_9821;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9821__$1,inst_9819);
} else {
if((state_val_9822 === (4))){
var inst_9811 = (state_9821[(2)]);
var inst_9812 = process__$1.call(null,inst_9811);
var state_9821__$1 = state_9821;
if(cljs.core.truth_(inst_9812)){
var statearr_9829_9998 = state_9821__$1;
(statearr_9829_9998[(1)] = (5));

} else {
var statearr_9830_9999 = state_9821__$1;
(statearr_9830_9999[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9822 === (5))){
var state_9821__$1 = state_9821;
var statearr_9831_10000 = state_9821__$1;
(statearr_9831_10000[(2)] = null);

(statearr_9831_10000[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9822 === (6))){
var state_9821__$1 = state_9821;
var statearr_9832_10001 = state_9821__$1;
(statearr_9832_10001[(2)] = null);

(statearr_9832_10001[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9822 === (7))){
var inst_9817 = (state_9821[(2)]);
var state_9821__$1 = state_9821;
var statearr_9833_10002 = state_9821__$1;
(statearr_9833_10002[(2)] = inst_9817);

(statearr_9833_10002[(1)] = (3));


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
});})(__9990,c__9544__auto___9994,G__9807_9991,G__9807_9992__$1,n__5593__auto___9989,jobs,results,process__$1,async))
;
return ((function (__9990,switch__9363__auto__,c__9544__auto___9994,G__9807_9991,G__9807_9992__$1,n__5593__auto___9989,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__9364__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__9364__auto____0 = (function (){
var statearr_9834 = [null,null,null,null,null,null,null];
(statearr_9834[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__9364__auto__);

(statearr_9834[(1)] = (1));

return statearr_9834;
});
var cljs$core$async$pipeline_STAR__$_state_machine__9364__auto____1 = (function (state_9821){
while(true){
var ret_value__9365__auto__ = (function (){try{while(true){
var result__9366__auto__ = switch__9363__auto__.call(null,state_9821);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9366__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9366__auto__;
}
break;
}
}catch (e9835){var ex__9367__auto__ = e9835;
var statearr_9836_10019 = state_9821;
(statearr_9836_10019[(2)] = ex__9367__auto__);


if(cljs.core.seq.call(null,(state_9821[(4)]))){
var statearr_9837_10029 = state_9821;
(statearr_9837_10029[(1)] = cljs.core.first.call(null,(state_9821[(4)])));

} else {
throw ex__9367__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9365__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10032 = state_9821;
state_9821 = G__10032;
continue;
} else {
return ret_value__9365__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__9364__auto__ = function(state_9821){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__9364__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__9364__auto____1.call(this,state_9821);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__9364__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__9364__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__9364__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__9364__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__9364__auto__;
})()
;})(__9990,switch__9363__auto__,c__9544__auto___9994,G__9807_9991,G__9807_9992__$1,n__5593__auto___9989,jobs,results,process__$1,async))
})();
var state__9546__auto__ = (function (){var statearr_9839 = f__9545__auto__.call(null);
(statearr_9839[(6)] = c__9544__auto___9994);

return statearr_9839;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9546__auto__);
});})(__9990,c__9544__auto___9994,G__9807_9991,G__9807_9992__$1,n__5593__auto___9989,jobs,results,process__$1,async))
);


break;
case "async":
var c__9544__auto___10033 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__9990,c__9544__auto___10033,G__9807_9991,G__9807_9992__$1,n__5593__auto___9989,jobs,results,process__$1,async){
return (function (){
var f__9545__auto__ = (function (){var switch__9363__auto__ = ((function (__9990,c__9544__auto___10033,G__9807_9991,G__9807_9992__$1,n__5593__auto___9989,jobs,results,process__$1,async){
return (function (state_9852){
var state_val_9853 = (state_9852[(1)]);
if((state_val_9853 === (1))){
var state_9852__$1 = state_9852;
var statearr_9854_10036 = state_9852__$1;
(statearr_9854_10036[(2)] = null);

(statearr_9854_10036[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9853 === (2))){
var state_9852__$1 = state_9852;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9852__$1,(4),jobs);
} else {
if((state_val_9853 === (3))){
var inst_9850 = (state_9852[(2)]);
var state_9852__$1 = state_9852;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9852__$1,inst_9850);
} else {
if((state_val_9853 === (4))){
var inst_9842 = (state_9852[(2)]);
var inst_9843 = async.call(null,inst_9842);
var state_9852__$1 = state_9852;
if(cljs.core.truth_(inst_9843)){
var statearr_9860_10040 = state_9852__$1;
(statearr_9860_10040[(1)] = (5));

} else {
var statearr_9861_10041 = state_9852__$1;
(statearr_9861_10041[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9853 === (5))){
var state_9852__$1 = state_9852;
var statearr_9862_10043 = state_9852__$1;
(statearr_9862_10043[(2)] = null);

(statearr_9862_10043[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9853 === (6))){
var state_9852__$1 = state_9852;
var statearr_9863_10046 = state_9852__$1;
(statearr_9863_10046[(2)] = null);

(statearr_9863_10046[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9853 === (7))){
var inst_9848 = (state_9852[(2)]);
var state_9852__$1 = state_9852;
var statearr_9864_10047 = state_9852__$1;
(statearr_9864_10047[(2)] = inst_9848);

(statearr_9864_10047[(1)] = (3));


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
});})(__9990,c__9544__auto___10033,G__9807_9991,G__9807_9992__$1,n__5593__auto___9989,jobs,results,process__$1,async))
;
return ((function (__9990,switch__9363__auto__,c__9544__auto___10033,G__9807_9991,G__9807_9992__$1,n__5593__auto___9989,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__9364__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__9364__auto____0 = (function (){
var statearr_9865 = [null,null,null,null,null,null,null];
(statearr_9865[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__9364__auto__);

(statearr_9865[(1)] = (1));

return statearr_9865;
});
var cljs$core$async$pipeline_STAR__$_state_machine__9364__auto____1 = (function (state_9852){
while(true){
var ret_value__9365__auto__ = (function (){try{while(true){
var result__9366__auto__ = switch__9363__auto__.call(null,state_9852);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9366__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9366__auto__;
}
break;
}
}catch (e9868){var ex__9367__auto__ = e9868;
var statearr_9870_10051 = state_9852;
(statearr_9870_10051[(2)] = ex__9367__auto__);


if(cljs.core.seq.call(null,(state_9852[(4)]))){
var statearr_9871_10055 = state_9852;
(statearr_9871_10055[(1)] = cljs.core.first.call(null,(state_9852[(4)])));

} else {
throw ex__9367__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9365__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10057 = state_9852;
state_9852 = G__10057;
continue;
} else {
return ret_value__9365__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__9364__auto__ = function(state_9852){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__9364__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__9364__auto____1.call(this,state_9852);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__9364__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__9364__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__9364__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__9364__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__9364__auto__;
})()
;})(__9990,switch__9363__auto__,c__9544__auto___10033,G__9807_9991,G__9807_9992__$1,n__5593__auto___9989,jobs,results,process__$1,async))
})();
var state__9546__auto__ = (function (){var statearr_9874 = f__9545__auto__.call(null);
(statearr_9874[(6)] = c__9544__auto___10033);

return statearr_9874;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9546__auto__);
});})(__9990,c__9544__auto___10033,G__9807_9991,G__9807_9992__$1,n__5593__auto___9989,jobs,results,process__$1,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__9807_9992__$1)].join('')));

}

var G__10064 = (__9990 + (1));
__9990 = G__10064;
continue;
} else {
}
break;
}

var c__9544__auto___10065 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__9545__auto__ = (function (){var switch__9363__auto__ = (function (state_9896){
var state_val_9897 = (state_9896[(1)]);
if((state_val_9897 === (7))){
var inst_9892 = (state_9896[(2)]);
var state_9896__$1 = state_9896;
var statearr_9898_10069 = state_9896__$1;
(statearr_9898_10069[(2)] = inst_9892);

(statearr_9898_10069[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9897 === (1))){
var state_9896__$1 = state_9896;
var statearr_9899_10070 = state_9896__$1;
(statearr_9899_10070[(2)] = null);

(statearr_9899_10070[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9897 === (4))){
var inst_9877 = (state_9896[(7)]);
var inst_9877__$1 = (state_9896[(2)]);
var inst_9878 = (inst_9877__$1 == null);
var state_9896__$1 = (function (){var statearr_9900 = state_9896;
(statearr_9900[(7)] = inst_9877__$1);

return statearr_9900;
})();
if(cljs.core.truth_(inst_9878)){
var statearr_9901_10073 = state_9896__$1;
(statearr_9901_10073[(1)] = (5));

} else {
var statearr_9902_10076 = state_9896__$1;
(statearr_9902_10076[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9897 === (6))){
var inst_9877 = (state_9896[(7)]);
var inst_9882 = (state_9896[(8)]);
var inst_9882__$1 = cljs.core.async.chan.call(null,(1));
var inst_9883 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_9884 = [inst_9877,inst_9882__$1];
var inst_9885 = (new cljs.core.PersistentVector(null,2,(5),inst_9883,inst_9884,null));
var state_9896__$1 = (function (){var statearr_9903 = state_9896;
(statearr_9903[(8)] = inst_9882__$1);

return statearr_9903;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9896__$1,(8),jobs,inst_9885);
} else {
if((state_val_9897 === (3))){
var inst_9894 = (state_9896[(2)]);
var state_9896__$1 = state_9896;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9896__$1,inst_9894);
} else {
if((state_val_9897 === (2))){
var state_9896__$1 = state_9896;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9896__$1,(4),from);
} else {
if((state_val_9897 === (9))){
var inst_9889 = (state_9896[(2)]);
var state_9896__$1 = (function (){var statearr_9904 = state_9896;
(statearr_9904[(9)] = inst_9889);

return statearr_9904;
})();
var statearr_9905_10078 = state_9896__$1;
(statearr_9905_10078[(2)] = null);

(statearr_9905_10078[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9897 === (5))){
var inst_9880 = cljs.core.async.close_BANG_.call(null,jobs);
var state_9896__$1 = state_9896;
var statearr_9906_10079 = state_9896__$1;
(statearr_9906_10079[(2)] = inst_9880);

(statearr_9906_10079[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9897 === (8))){
var inst_9882 = (state_9896[(8)]);
var inst_9887 = (state_9896[(2)]);
var state_9896__$1 = (function (){var statearr_9907 = state_9896;
(statearr_9907[(10)] = inst_9887);

return statearr_9907;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9896__$1,(9),results,inst_9882);
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
var cljs$core$async$pipeline_STAR__$_state_machine__9364__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__9364__auto____0 = (function (){
var statearr_9908 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_9908[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__9364__auto__);

(statearr_9908[(1)] = (1));

return statearr_9908;
});
var cljs$core$async$pipeline_STAR__$_state_machine__9364__auto____1 = (function (state_9896){
while(true){
var ret_value__9365__auto__ = (function (){try{while(true){
var result__9366__auto__ = switch__9363__auto__.call(null,state_9896);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9366__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9366__auto__;
}
break;
}
}catch (e9909){var ex__9367__auto__ = e9909;
var statearr_9910_10081 = state_9896;
(statearr_9910_10081[(2)] = ex__9367__auto__);


if(cljs.core.seq.call(null,(state_9896[(4)]))){
var statearr_9911_10082 = state_9896;
(statearr_9911_10082[(1)] = cljs.core.first.call(null,(state_9896[(4)])));

} else {
throw ex__9367__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9365__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10083 = state_9896;
state_9896 = G__10083;
continue;
} else {
return ret_value__9365__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__9364__auto__ = function(state_9896){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__9364__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__9364__auto____1.call(this,state_9896);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__9364__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__9364__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__9364__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__9364__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__9364__auto__;
})()
})();
var state__9546__auto__ = (function (){var statearr_9912 = f__9545__auto__.call(null);
(statearr_9912[(6)] = c__9544__auto___10065);

return statearr_9912;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9546__auto__);
}));


var c__9544__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__9545__auto__ = (function (){var switch__9363__auto__ = (function (state_9950){
var state_val_9951 = (state_9950[(1)]);
if((state_val_9951 === (7))){
var inst_9946 = (state_9950[(2)]);
var state_9950__$1 = state_9950;
var statearr_9952_10084 = state_9950__$1;
(statearr_9952_10084[(2)] = inst_9946);

(statearr_9952_10084[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9951 === (20))){
var state_9950__$1 = state_9950;
var statearr_9953_10085 = state_9950__$1;
(statearr_9953_10085[(2)] = null);

(statearr_9953_10085[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9951 === (1))){
var state_9950__$1 = state_9950;
var statearr_9954_10089 = state_9950__$1;
(statearr_9954_10089[(2)] = null);

(statearr_9954_10089[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9951 === (4))){
var inst_9915 = (state_9950[(7)]);
var inst_9915__$1 = (state_9950[(2)]);
var inst_9916 = (inst_9915__$1 == null);
var state_9950__$1 = (function (){var statearr_9955 = state_9950;
(statearr_9955[(7)] = inst_9915__$1);

return statearr_9955;
})();
if(cljs.core.truth_(inst_9916)){
var statearr_9956_10090 = state_9950__$1;
(statearr_9956_10090[(1)] = (5));

} else {
var statearr_9957_10091 = state_9950__$1;
(statearr_9957_10091[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9951 === (15))){
var inst_9928 = (state_9950[(8)]);
var state_9950__$1 = state_9950;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9950__$1,(18),to,inst_9928);
} else {
if((state_val_9951 === (21))){
var inst_9941 = (state_9950[(2)]);
var state_9950__$1 = state_9950;
var statearr_9958_10094 = state_9950__$1;
(statearr_9958_10094[(2)] = inst_9941);

(statearr_9958_10094[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9951 === (13))){
var inst_9943 = (state_9950[(2)]);
var state_9950__$1 = (function (){var statearr_9959 = state_9950;
(statearr_9959[(9)] = inst_9943);

return statearr_9959;
})();
var statearr_9960_10098 = state_9950__$1;
(statearr_9960_10098[(2)] = null);

(statearr_9960_10098[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9951 === (6))){
var inst_9915 = (state_9950[(7)]);
var state_9950__$1 = state_9950;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9950__$1,(11),inst_9915);
} else {
if((state_val_9951 === (17))){
var inst_9936 = (state_9950[(2)]);
var state_9950__$1 = state_9950;
if(cljs.core.truth_(inst_9936)){
var statearr_9961_10103 = state_9950__$1;
(statearr_9961_10103[(1)] = (19));

} else {
var statearr_9962_10108 = state_9950__$1;
(statearr_9962_10108[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9951 === (3))){
var inst_9948 = (state_9950[(2)]);
var state_9950__$1 = state_9950;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9950__$1,inst_9948);
} else {
if((state_val_9951 === (12))){
var inst_9925 = (state_9950[(10)]);
var state_9950__$1 = state_9950;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9950__$1,(14),inst_9925);
} else {
if((state_val_9951 === (2))){
var state_9950__$1 = state_9950;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9950__$1,(4),results);
} else {
if((state_val_9951 === (19))){
var state_9950__$1 = state_9950;
var statearr_9963_10121 = state_9950__$1;
(statearr_9963_10121[(2)] = null);

(statearr_9963_10121[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9951 === (11))){
var inst_9925 = (state_9950[(2)]);
var state_9950__$1 = (function (){var statearr_9964 = state_9950;
(statearr_9964[(10)] = inst_9925);

return statearr_9964;
})();
var statearr_9965_10123 = state_9950__$1;
(statearr_9965_10123[(2)] = null);

(statearr_9965_10123[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9951 === (9))){
var state_9950__$1 = state_9950;
var statearr_9966_10125 = state_9950__$1;
(statearr_9966_10125[(2)] = null);

(statearr_9966_10125[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9951 === (5))){
var state_9950__$1 = state_9950;
if(cljs.core.truth_(close_QMARK_)){
var statearr_9967_10127 = state_9950__$1;
(statearr_9967_10127[(1)] = (8));

} else {
var statearr_9968_10128 = state_9950__$1;
(statearr_9968_10128[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9951 === (14))){
var inst_9928 = (state_9950[(8)]);
var inst_9930 = (state_9950[(11)]);
var inst_9928__$1 = (state_9950[(2)]);
var inst_9929 = (inst_9928__$1 == null);
var inst_9930__$1 = cljs.core.not.call(null,inst_9929);
var state_9950__$1 = (function (){var statearr_9969 = state_9950;
(statearr_9969[(8)] = inst_9928__$1);

(statearr_9969[(11)] = inst_9930__$1);

return statearr_9969;
})();
if(inst_9930__$1){
var statearr_9970_10132 = state_9950__$1;
(statearr_9970_10132[(1)] = (15));

} else {
var statearr_9971_10133 = state_9950__$1;
(statearr_9971_10133[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9951 === (16))){
var inst_9930 = (state_9950[(11)]);
var state_9950__$1 = state_9950;
var statearr_9972_10136 = state_9950__$1;
(statearr_9972_10136[(2)] = inst_9930);

(statearr_9972_10136[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9951 === (10))){
var inst_9922 = (state_9950[(2)]);
var state_9950__$1 = state_9950;
var statearr_9973_10138 = state_9950__$1;
(statearr_9973_10138[(2)] = inst_9922);

(statearr_9973_10138[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9951 === (18))){
var inst_9933 = (state_9950[(2)]);
var state_9950__$1 = state_9950;
var statearr_9974_10139 = state_9950__$1;
(statearr_9974_10139[(2)] = inst_9933);

(statearr_9974_10139[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9951 === (8))){
var inst_9919 = cljs.core.async.close_BANG_.call(null,to);
var state_9950__$1 = state_9950;
var statearr_9975_10140 = state_9950__$1;
(statearr_9975_10140[(2)] = inst_9919);

(statearr_9975_10140[(1)] = (10));


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
var cljs$core$async$pipeline_STAR__$_state_machine__9364__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__9364__auto____0 = (function (){
var statearr_9976 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_9976[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__9364__auto__);

(statearr_9976[(1)] = (1));

return statearr_9976;
});
var cljs$core$async$pipeline_STAR__$_state_machine__9364__auto____1 = (function (state_9950){
while(true){
var ret_value__9365__auto__ = (function (){try{while(true){
var result__9366__auto__ = switch__9363__auto__.call(null,state_9950);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9366__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9366__auto__;
}
break;
}
}catch (e9977){var ex__9367__auto__ = e9977;
var statearr_9978_10144 = state_9950;
(statearr_9978_10144[(2)] = ex__9367__auto__);


if(cljs.core.seq.call(null,(state_9950[(4)]))){
var statearr_9979_10146 = state_9950;
(statearr_9979_10146[(1)] = cljs.core.first.call(null,(state_9950[(4)])));

} else {
throw ex__9367__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9365__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10147 = state_9950;
state_9950 = G__10147;
continue;
} else {
return ret_value__9365__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__9364__auto__ = function(state_9950){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__9364__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__9364__auto____1.call(this,state_9950);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__9364__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__9364__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__9364__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__9364__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__9364__auto__;
})()
})();
var state__9546__auto__ = (function (){var statearr_9980 = f__9545__auto__.call(null);
(statearr_9980[(6)] = c__9544__auto__);

return statearr_9980;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9546__auto__);
}));

return c__9544__auto__;
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
var G__9982 = arguments.length;
switch (G__9982) {
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
var G__9986 = arguments.length;
switch (G__9986) {
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
var G__9997 = arguments.length;
switch (G__9997) {
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
var c__9544__auto___10164 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__9545__auto__ = (function (){var switch__9363__auto__ = (function (state_10030){
var state_val_10031 = (state_10030[(1)]);
if((state_val_10031 === (7))){
var inst_10025 = (state_10030[(2)]);
var state_10030__$1 = state_10030;
var statearr_10034_10165 = state_10030__$1;
(statearr_10034_10165[(2)] = inst_10025);

(statearr_10034_10165[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10031 === (1))){
var state_10030__$1 = state_10030;
var statearr_10035_10166 = state_10030__$1;
(statearr_10035_10166[(2)] = null);

(statearr_10035_10166[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10031 === (4))){
var inst_10005 = (state_10030[(7)]);
var inst_10005__$1 = (state_10030[(2)]);
var inst_10006 = (inst_10005__$1 == null);
var state_10030__$1 = (function (){var statearr_10037 = state_10030;
(statearr_10037[(7)] = inst_10005__$1);

return statearr_10037;
})();
if(cljs.core.truth_(inst_10006)){
var statearr_10038_10168 = state_10030__$1;
(statearr_10038_10168[(1)] = (5));

} else {
var statearr_10039_10169 = state_10030__$1;
(statearr_10039_10169[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10031 === (13))){
var state_10030__$1 = state_10030;
var statearr_10042_10172 = state_10030__$1;
(statearr_10042_10172[(2)] = null);

(statearr_10042_10172[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10031 === (6))){
var inst_10005 = (state_10030[(7)]);
var inst_10011 = p.call(null,inst_10005);
var state_10030__$1 = state_10030;
if(cljs.core.truth_(inst_10011)){
var statearr_10044_10174 = state_10030__$1;
(statearr_10044_10174[(1)] = (9));

} else {
var statearr_10045_10175 = state_10030__$1;
(statearr_10045_10175[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10031 === (3))){
var inst_10027 = (state_10030[(2)]);
var state_10030__$1 = state_10030;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10030__$1,inst_10027);
} else {
if((state_val_10031 === (12))){
var state_10030__$1 = state_10030;
var statearr_10048_10177 = state_10030__$1;
(statearr_10048_10177[(2)] = null);

(statearr_10048_10177[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10031 === (2))){
var state_10030__$1 = state_10030;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10030__$1,(4),ch);
} else {
if((state_val_10031 === (11))){
var inst_10005 = (state_10030[(7)]);
var inst_10015 = (state_10030[(2)]);
var state_10030__$1 = state_10030;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10030__$1,(8),inst_10015,inst_10005);
} else {
if((state_val_10031 === (9))){
var state_10030__$1 = state_10030;
var statearr_10056_10178 = state_10030__$1;
(statearr_10056_10178[(2)] = tc);

(statearr_10056_10178[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10031 === (5))){
var inst_10008 = cljs.core.async.close_BANG_.call(null,tc);
var inst_10009 = cljs.core.async.close_BANG_.call(null,fc);
var state_10030__$1 = (function (){var statearr_10058 = state_10030;
(statearr_10058[(8)] = inst_10008);

return statearr_10058;
})();
var statearr_10059_10180 = state_10030__$1;
(statearr_10059_10180[(2)] = inst_10009);

(statearr_10059_10180[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10031 === (14))){
var inst_10023 = (state_10030[(2)]);
var state_10030__$1 = state_10030;
var statearr_10062_10182 = state_10030__$1;
(statearr_10062_10182[(2)] = inst_10023);

(statearr_10062_10182[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10031 === (10))){
var state_10030__$1 = state_10030;
var statearr_10063_10183 = state_10030__$1;
(statearr_10063_10183[(2)] = fc);

(statearr_10063_10183[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10031 === (8))){
var inst_10017 = (state_10030[(2)]);
var state_10030__$1 = state_10030;
if(cljs.core.truth_(inst_10017)){
var statearr_10067_10184 = state_10030__$1;
(statearr_10067_10184[(1)] = (12));

} else {
var statearr_10068_10185 = state_10030__$1;
(statearr_10068_10185[(1)] = (13));

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
var cljs$core$async$state_machine__9364__auto__ = null;
var cljs$core$async$state_machine__9364__auto____0 = (function (){
var statearr_10072 = [null,null,null,null,null,null,null,null,null];
(statearr_10072[(0)] = cljs$core$async$state_machine__9364__auto__);

(statearr_10072[(1)] = (1));

return statearr_10072;
});
var cljs$core$async$state_machine__9364__auto____1 = (function (state_10030){
while(true){
var ret_value__9365__auto__ = (function (){try{while(true){
var result__9366__auto__ = switch__9363__auto__.call(null,state_10030);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9366__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9366__auto__;
}
break;
}
}catch (e10074){var ex__9367__auto__ = e10074;
var statearr_10075_10197 = state_10030;
(statearr_10075_10197[(2)] = ex__9367__auto__);


if(cljs.core.seq.call(null,(state_10030[(4)]))){
var statearr_10077_10208 = state_10030;
(statearr_10077_10208[(1)] = cljs.core.first.call(null,(state_10030[(4)])));

} else {
throw ex__9367__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9365__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10214 = state_10030;
state_10030 = G__10214;
continue;
} else {
return ret_value__9365__auto__;
}
break;
}
});
cljs$core$async$state_machine__9364__auto__ = function(state_10030){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__9364__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__9364__auto____1.call(this,state_10030);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__9364__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__9364__auto____0;
cljs$core$async$state_machine__9364__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__9364__auto____1;
return cljs$core$async$state_machine__9364__auto__;
})()
})();
var state__9546__auto__ = (function (){var statearr_10080 = f__9545__auto__.call(null);
(statearr_10080[(6)] = c__9544__auto___10164);

return statearr_10080;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9546__auto__);
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
var c__9544__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__9545__auto__ = (function (){var switch__9363__auto__ = (function (state_10119){
var state_val_10120 = (state_10119[(1)]);
if((state_val_10120 === (7))){
var inst_10115 = (state_10119[(2)]);
var state_10119__$1 = state_10119;
var statearr_10122_10216 = state_10119__$1;
(statearr_10122_10216[(2)] = inst_10115);

(statearr_10122_10216[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10120 === (1))){
var inst_10086 = init;
var inst_10087 = inst_10086;
var state_10119__$1 = (function (){var statearr_10124 = state_10119;
(statearr_10124[(7)] = inst_10087);

return statearr_10124;
})();
var statearr_10126_10219 = state_10119__$1;
(statearr_10126_10219[(2)] = null);

(statearr_10126_10219[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10120 === (4))){
var inst_10100 = (state_10119[(8)]);
var inst_10100__$1 = (state_10119[(2)]);
var inst_10101 = (inst_10100__$1 == null);
var state_10119__$1 = (function (){var statearr_10129 = state_10119;
(statearr_10129[(8)] = inst_10100__$1);

return statearr_10129;
})();
if(cljs.core.truth_(inst_10101)){
var statearr_10130_10220 = state_10119__$1;
(statearr_10130_10220[(1)] = (5));

} else {
var statearr_10131_10221 = state_10119__$1;
(statearr_10131_10221[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10120 === (6))){
var inst_10087 = (state_10119[(7)]);
var inst_10100 = (state_10119[(8)]);
var inst_10105 = (state_10119[(9)]);
var inst_10105__$1 = f.call(null,inst_10087,inst_10100);
var inst_10106 = cljs.core.reduced_QMARK_.call(null,inst_10105__$1);
var state_10119__$1 = (function (){var statearr_10134 = state_10119;
(statearr_10134[(9)] = inst_10105__$1);

return statearr_10134;
})();
if(inst_10106){
var statearr_10135_10223 = state_10119__$1;
(statearr_10135_10223[(1)] = (8));

} else {
var statearr_10137_10224 = state_10119__$1;
(statearr_10137_10224[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10120 === (3))){
var inst_10117 = (state_10119[(2)]);
var state_10119__$1 = state_10119;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10119__$1,inst_10117);
} else {
if((state_val_10120 === (2))){
var state_10119__$1 = state_10119;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10119__$1,(4),ch);
} else {
if((state_val_10120 === (9))){
var inst_10105 = (state_10119[(9)]);
var inst_10087 = inst_10105;
var state_10119__$1 = (function (){var statearr_10141 = state_10119;
(statearr_10141[(7)] = inst_10087);

return statearr_10141;
})();
var statearr_10142_10227 = state_10119__$1;
(statearr_10142_10227[(2)] = null);

(statearr_10142_10227[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10120 === (5))){
var inst_10087 = (state_10119[(7)]);
var state_10119__$1 = state_10119;
var statearr_10143_10228 = state_10119__$1;
(statearr_10143_10228[(2)] = inst_10087);

(statearr_10143_10228[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10120 === (10))){
var inst_10113 = (state_10119[(2)]);
var state_10119__$1 = state_10119;
var statearr_10145_10230 = state_10119__$1;
(statearr_10145_10230[(2)] = inst_10113);

(statearr_10145_10230[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10120 === (8))){
var inst_10105 = (state_10119[(9)]);
var inst_10109 = cljs.core.deref.call(null,inst_10105);
var state_10119__$1 = state_10119;
var statearr_10148_10232 = state_10119__$1;
(statearr_10148_10232[(2)] = inst_10109);

(statearr_10148_10232[(1)] = (10));


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
var cljs$core$async$reduce_$_state_machine__9364__auto__ = null;
var cljs$core$async$reduce_$_state_machine__9364__auto____0 = (function (){
var statearr_10149 = [null,null,null,null,null,null,null,null,null,null];
(statearr_10149[(0)] = cljs$core$async$reduce_$_state_machine__9364__auto__);

(statearr_10149[(1)] = (1));

return statearr_10149;
});
var cljs$core$async$reduce_$_state_machine__9364__auto____1 = (function (state_10119){
while(true){
var ret_value__9365__auto__ = (function (){try{while(true){
var result__9366__auto__ = switch__9363__auto__.call(null,state_10119);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9366__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9366__auto__;
}
break;
}
}catch (e10151){var ex__9367__auto__ = e10151;
var statearr_10152_10236 = state_10119;
(statearr_10152_10236[(2)] = ex__9367__auto__);


if(cljs.core.seq.call(null,(state_10119[(4)]))){
var statearr_10153_10238 = state_10119;
(statearr_10153_10238[(1)] = cljs.core.first.call(null,(state_10119[(4)])));

} else {
throw ex__9367__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9365__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10240 = state_10119;
state_10119 = G__10240;
continue;
} else {
return ret_value__9365__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__9364__auto__ = function(state_10119){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__9364__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__9364__auto____1.call(this,state_10119);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__9364__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__9364__auto____0;
cljs$core$async$reduce_$_state_machine__9364__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__9364__auto____1;
return cljs$core$async$reduce_$_state_machine__9364__auto__;
})()
})();
var state__9546__auto__ = (function (){var statearr_10155 = f__9545__auto__.call(null);
(statearr_10155[(6)] = c__9544__auto__);

return statearr_10155;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9546__auto__);
}));

return c__9544__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__9544__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__9545__auto__ = (function (){var switch__9363__auto__ = (function (state_10162){
var state_val_10163 = (state_10162[(1)]);
if((state_val_10163 === (1))){
var inst_10157 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_10162__$1 = state_10162;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10162__$1,(2),inst_10157);
} else {
if((state_val_10163 === (2))){
var inst_10159 = (state_10162[(2)]);
var inst_10160 = f__$1.call(null,inst_10159);
var state_10162__$1 = state_10162;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10162__$1,inst_10160);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__9364__auto__ = null;
var cljs$core$async$transduce_$_state_machine__9364__auto____0 = (function (){
var statearr_10167 = [null,null,null,null,null,null,null];
(statearr_10167[(0)] = cljs$core$async$transduce_$_state_machine__9364__auto__);

(statearr_10167[(1)] = (1));

return statearr_10167;
});
var cljs$core$async$transduce_$_state_machine__9364__auto____1 = (function (state_10162){
while(true){
var ret_value__9365__auto__ = (function (){try{while(true){
var result__9366__auto__ = switch__9363__auto__.call(null,state_10162);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9366__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9366__auto__;
}
break;
}
}catch (e10170){var ex__9367__auto__ = e10170;
var statearr_10171_10248 = state_10162;
(statearr_10171_10248[(2)] = ex__9367__auto__);


if(cljs.core.seq.call(null,(state_10162[(4)]))){
var statearr_10173_10249 = state_10162;
(statearr_10173_10249[(1)] = cljs.core.first.call(null,(state_10162[(4)])));

} else {
throw ex__9367__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9365__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10251 = state_10162;
state_10162 = G__10251;
continue;
} else {
return ret_value__9365__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__9364__auto__ = function(state_10162){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__9364__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__9364__auto____1.call(this,state_10162);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__9364__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__9364__auto____0;
cljs$core$async$transduce_$_state_machine__9364__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__9364__auto____1;
return cljs$core$async$transduce_$_state_machine__9364__auto__;
})()
})();
var state__9546__auto__ = (function (){var statearr_10176 = f__9545__auto__.call(null);
(statearr_10176[(6)] = c__9544__auto__);

return statearr_10176;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9546__auto__);
}));

return c__9544__auto__;
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
var G__10181 = arguments.length;
switch (G__10181) {
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
var c__9544__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__9545__auto__ = (function (){var switch__9363__auto__ = (function (state_10212){
var state_val_10213 = (state_10212[(1)]);
if((state_val_10213 === (7))){
var inst_10192 = (state_10212[(2)]);
var state_10212__$1 = state_10212;
var statearr_10215_10255 = state_10212__$1;
(statearr_10215_10255[(2)] = inst_10192);

(statearr_10215_10255[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10213 === (1))){
var inst_10186 = cljs.core.seq.call(null,coll);
var inst_10187 = inst_10186;
var state_10212__$1 = (function (){var statearr_10217 = state_10212;
(statearr_10217[(7)] = inst_10187);

return statearr_10217;
})();
var statearr_10218_10256 = state_10212__$1;
(statearr_10218_10256[(2)] = null);

(statearr_10218_10256[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10213 === (4))){
var inst_10187 = (state_10212[(7)]);
var inst_10190 = cljs.core.first.call(null,inst_10187);
var state_10212__$1 = state_10212;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10212__$1,(7),ch,inst_10190);
} else {
if((state_val_10213 === (13))){
var inst_10205 = (state_10212[(2)]);
var state_10212__$1 = state_10212;
var statearr_10222_10257 = state_10212__$1;
(statearr_10222_10257[(2)] = inst_10205);

(statearr_10222_10257[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10213 === (6))){
var inst_10195 = (state_10212[(2)]);
var state_10212__$1 = state_10212;
if(cljs.core.truth_(inst_10195)){
var statearr_10225_10258 = state_10212__$1;
(statearr_10225_10258[(1)] = (8));

} else {
var statearr_10226_10259 = state_10212__$1;
(statearr_10226_10259[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10213 === (3))){
var inst_10210 = (state_10212[(2)]);
var state_10212__$1 = state_10212;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10212__$1,inst_10210);
} else {
if((state_val_10213 === (12))){
var state_10212__$1 = state_10212;
var statearr_10229_10260 = state_10212__$1;
(statearr_10229_10260[(2)] = null);

(statearr_10229_10260[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10213 === (2))){
var inst_10187 = (state_10212[(7)]);
var state_10212__$1 = state_10212;
if(cljs.core.truth_(inst_10187)){
var statearr_10231_10261 = state_10212__$1;
(statearr_10231_10261[(1)] = (4));

} else {
var statearr_10233_10262 = state_10212__$1;
(statearr_10233_10262[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10213 === (11))){
var inst_10202 = cljs.core.async.close_BANG_.call(null,ch);
var state_10212__$1 = state_10212;
var statearr_10234_10263 = state_10212__$1;
(statearr_10234_10263[(2)] = inst_10202);

(statearr_10234_10263[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10213 === (9))){
var state_10212__$1 = state_10212;
if(cljs.core.truth_(close_QMARK_)){
var statearr_10235_10264 = state_10212__$1;
(statearr_10235_10264[(1)] = (11));

} else {
var statearr_10237_10265 = state_10212__$1;
(statearr_10237_10265[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10213 === (5))){
var inst_10187 = (state_10212[(7)]);
var state_10212__$1 = state_10212;
var statearr_10239_10266 = state_10212__$1;
(statearr_10239_10266[(2)] = inst_10187);

(statearr_10239_10266[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10213 === (10))){
var inst_10207 = (state_10212[(2)]);
var state_10212__$1 = state_10212;
var statearr_10241_10267 = state_10212__$1;
(statearr_10241_10267[(2)] = inst_10207);

(statearr_10241_10267[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10213 === (8))){
var inst_10187 = (state_10212[(7)]);
var inst_10198 = cljs.core.next.call(null,inst_10187);
var inst_10187__$1 = inst_10198;
var state_10212__$1 = (function (){var statearr_10242 = state_10212;
(statearr_10242[(7)] = inst_10187__$1);

return statearr_10242;
})();
var statearr_10243_10270 = state_10212__$1;
(statearr_10243_10270[(2)] = null);

(statearr_10243_10270[(1)] = (2));


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
var cljs$core$async$state_machine__9364__auto__ = null;
var cljs$core$async$state_machine__9364__auto____0 = (function (){
var statearr_10244 = [null,null,null,null,null,null,null,null];
(statearr_10244[(0)] = cljs$core$async$state_machine__9364__auto__);

(statearr_10244[(1)] = (1));

return statearr_10244;
});
var cljs$core$async$state_machine__9364__auto____1 = (function (state_10212){
while(true){
var ret_value__9365__auto__ = (function (){try{while(true){
var result__9366__auto__ = switch__9363__auto__.call(null,state_10212);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9366__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9366__auto__;
}
break;
}
}catch (e10245){var ex__9367__auto__ = e10245;
var statearr_10246_10271 = state_10212;
(statearr_10246_10271[(2)] = ex__9367__auto__);


if(cljs.core.seq.call(null,(state_10212[(4)]))){
var statearr_10247_10272 = state_10212;
(statearr_10247_10272[(1)] = cljs.core.first.call(null,(state_10212[(4)])));

} else {
throw ex__9367__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9365__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10274 = state_10212;
state_10212 = G__10274;
continue;
} else {
return ret_value__9365__auto__;
}
break;
}
});
cljs$core$async$state_machine__9364__auto__ = function(state_10212){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__9364__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__9364__auto____1.call(this,state_10212);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__9364__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__9364__auto____0;
cljs$core$async$state_machine__9364__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__9364__auto____1;
return cljs$core$async$state_machine__9364__auto__;
})()
})();
var state__9546__auto__ = (function (){var statearr_10250 = f__9545__auto__.call(null);
(statearr_10250[(6)] = c__9544__auto__);

return statearr_10250;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9546__auto__);
}));

return c__9544__auto__;
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
var G__10254 = arguments.length;
switch (G__10254) {
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

var cljs$core$async$Mux$muxch_STAR_$dyn_10287 = (function (_){
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
return cljs$core$async$Mux$muxch_STAR_$dyn_10287.call(null,_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_10295 = (function (m,ch,close_QMARK_){
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
return cljs$core$async$Mult$tap_STAR_$dyn_10295.call(null,m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_10308 = (function (m,ch){
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
return cljs$core$async$Mult$untap_STAR_$dyn_10308.call(null,m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_10312 = (function (m){
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
return cljs$core$async$Mult$untap_all_STAR_$dyn_10312.call(null,m);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async10304 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async10304 = (function (ch,cs,meta10305){
this.ch = ch;
this.cs = cs;
this.meta10305 = meta10305;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async10304.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10306,meta10305__$1){
var self__ = this;
var _10306__$1 = this;
return (new cljs.core.async.t_cljs$core$async10304(self__.ch,self__.cs,meta10305__$1));
}));

(cljs.core.async.t_cljs$core$async10304.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10306){
var self__ = this;
var _10306__$1 = this;
return self__.meta10305;
}));

(cljs.core.async.t_cljs$core$async10304.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async10304.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async10304.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async10304.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async10304.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async10304.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async10304.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta10305","meta10305",833965182,null)], null);
}));

(cljs.core.async.t_cljs$core$async10304.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async10304.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async10304");

(cljs.core.async.t_cljs$core$async10304.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write.call(null,writer__5288__auto__,"cljs.core.async/t_cljs$core$async10304");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async10304.
 */
cljs.core.async.__GT_t_cljs$core$async10304 = (function cljs$core$async$mult_$___GT_t_cljs$core$async10304(ch__$1,cs__$1,meta10305){
return (new cljs.core.async.t_cljs$core$async10304(ch__$1,cs__$1,meta10305));
});

}

return (new cljs.core.async.t_cljs$core$async10304(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__9544__auto___10648 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__9545__auto__ = (function (){var switch__9363__auto__ = (function (state_10468){
var state_val_10469 = (state_10468[(1)]);
if((state_val_10469 === (7))){
var inst_10463 = (state_10468[(2)]);
var state_10468__$1 = state_10468;
var statearr_10473_10649 = state_10468__$1;
(statearr_10473_10649[(2)] = inst_10463);

(statearr_10473_10649[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10469 === (20))){
var inst_10355 = (state_10468[(7)]);
var inst_10372 = cljs.core.first.call(null,inst_10355);
var inst_10373 = cljs.core.nth.call(null,inst_10372,(0),null);
var inst_10374 = cljs.core.nth.call(null,inst_10372,(1),null);
var state_10468__$1 = (function (){var statearr_10476 = state_10468;
(statearr_10476[(8)] = inst_10373);

return statearr_10476;
})();
if(cljs.core.truth_(inst_10374)){
var statearr_10478_10654 = state_10468__$1;
(statearr_10478_10654[(1)] = (22));

} else {
var statearr_10479_10655 = state_10468__$1;
(statearr_10479_10655[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10469 === (27))){
var inst_10405 = (state_10468[(9)]);
var inst_10407 = (state_10468[(10)]);
var inst_10412 = (state_10468[(11)]);
var inst_10321 = (state_10468[(12)]);
var inst_10412__$1 = cljs.core._nth.call(null,inst_10405,inst_10407);
var inst_10413 = cljs.core.async.put_BANG_.call(null,inst_10412__$1,inst_10321,done);
var state_10468__$1 = (function (){var statearr_10480 = state_10468;
(statearr_10480[(11)] = inst_10412__$1);

return statearr_10480;
})();
if(cljs.core.truth_(inst_10413)){
var statearr_10481_10656 = state_10468__$1;
(statearr_10481_10656[(1)] = (30));

} else {
var statearr_10482_10657 = state_10468__$1;
(statearr_10482_10657[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10469 === (1))){
var state_10468__$1 = state_10468;
var statearr_10484_10659 = state_10468__$1;
(statearr_10484_10659[(2)] = null);

(statearr_10484_10659[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10469 === (24))){
var inst_10355 = (state_10468[(7)]);
var inst_10380 = (state_10468[(2)]);
var inst_10381 = cljs.core.next.call(null,inst_10355);
var inst_10330 = inst_10381;
var inst_10331 = null;
var inst_10332 = (0);
var inst_10333 = (0);
var state_10468__$1 = (function (){var statearr_10487 = state_10468;
(statearr_10487[(13)] = inst_10380);

(statearr_10487[(14)] = inst_10330);

(statearr_10487[(15)] = inst_10331);

(statearr_10487[(16)] = inst_10332);

(statearr_10487[(17)] = inst_10333);

return statearr_10487;
})();
var statearr_10488_10663 = state_10468__$1;
(statearr_10488_10663[(2)] = null);

(statearr_10488_10663[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10469 === (39))){
var state_10468__$1 = state_10468;
var statearr_10492_10664 = state_10468__$1;
(statearr_10492_10664[(2)] = null);

(statearr_10492_10664[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10469 === (4))){
var inst_10321 = (state_10468[(12)]);
var inst_10321__$1 = (state_10468[(2)]);
var inst_10322 = (inst_10321__$1 == null);
var state_10468__$1 = (function (){var statearr_10496 = state_10468;
(statearr_10496[(12)] = inst_10321__$1);

return statearr_10496;
})();
if(cljs.core.truth_(inst_10322)){
var statearr_10497_10666 = state_10468__$1;
(statearr_10497_10666[(1)] = (5));

} else {
var statearr_10498_10667 = state_10468__$1;
(statearr_10498_10667[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10469 === (15))){
var inst_10333 = (state_10468[(17)]);
var inst_10330 = (state_10468[(14)]);
var inst_10331 = (state_10468[(15)]);
var inst_10332 = (state_10468[(16)]);
var inst_10351 = (state_10468[(2)]);
var inst_10352 = (inst_10333 + (1));
var tmp10489 = inst_10331;
var tmp10490 = inst_10332;
var tmp10491 = inst_10330;
var inst_10330__$1 = tmp10491;
var inst_10331__$1 = tmp10489;
var inst_10332__$1 = tmp10490;
var inst_10333__$1 = inst_10352;
var state_10468__$1 = (function (){var statearr_10499 = state_10468;
(statearr_10499[(18)] = inst_10351);

(statearr_10499[(14)] = inst_10330__$1);

(statearr_10499[(15)] = inst_10331__$1);

(statearr_10499[(16)] = inst_10332__$1);

(statearr_10499[(17)] = inst_10333__$1);

return statearr_10499;
})();
var statearr_10501_10669 = state_10468__$1;
(statearr_10501_10669[(2)] = null);

(statearr_10501_10669[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10469 === (21))){
var inst_10385 = (state_10468[(2)]);
var state_10468__$1 = state_10468;
var statearr_10507_10670 = state_10468__$1;
(statearr_10507_10670[(2)] = inst_10385);

(statearr_10507_10670[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10469 === (31))){
var inst_10412 = (state_10468[(11)]);
var inst_10416 = cljs.core.async.untap_STAR_.call(null,m,inst_10412);
var state_10468__$1 = state_10468;
var statearr_10508_10676 = state_10468__$1;
(statearr_10508_10676[(2)] = inst_10416);

(statearr_10508_10676[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10469 === (32))){
var inst_10407 = (state_10468[(10)]);
var inst_10404 = (state_10468[(19)]);
var inst_10405 = (state_10468[(9)]);
var inst_10406 = (state_10468[(20)]);
var inst_10418 = (state_10468[(2)]);
var inst_10422 = (inst_10407 + (1));
var tmp10504 = inst_10406;
var tmp10505 = inst_10404;
var tmp10506 = inst_10405;
var inst_10404__$1 = tmp10505;
var inst_10405__$1 = tmp10506;
var inst_10406__$1 = tmp10504;
var inst_10407__$1 = inst_10422;
var state_10468__$1 = (function (){var statearr_10510 = state_10468;
(statearr_10510[(21)] = inst_10418);

(statearr_10510[(19)] = inst_10404__$1);

(statearr_10510[(9)] = inst_10405__$1);

(statearr_10510[(20)] = inst_10406__$1);

(statearr_10510[(10)] = inst_10407__$1);

return statearr_10510;
})();
var statearr_10513_10679 = state_10468__$1;
(statearr_10513_10679[(2)] = null);

(statearr_10513_10679[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10469 === (40))){
var inst_10434 = (state_10468[(22)]);
var inst_10438 = cljs.core.async.untap_STAR_.call(null,m,inst_10434);
var state_10468__$1 = state_10468;
var statearr_10514_10680 = state_10468__$1;
(statearr_10514_10680[(2)] = inst_10438);

(statearr_10514_10680[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10469 === (33))){
var inst_10425 = (state_10468[(23)]);
var inst_10427 = cljs.core.chunked_seq_QMARK_.call(null,inst_10425);
var state_10468__$1 = state_10468;
if(inst_10427){
var statearr_10515_10681 = state_10468__$1;
(statearr_10515_10681[(1)] = (36));

} else {
var statearr_10516_10682 = state_10468__$1;
(statearr_10516_10682[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10469 === (13))){
var inst_10345 = (state_10468[(24)]);
var inst_10348 = cljs.core.async.close_BANG_.call(null,inst_10345);
var state_10468__$1 = state_10468;
var statearr_10518_10683 = state_10468__$1;
(statearr_10518_10683[(2)] = inst_10348);

(statearr_10518_10683[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10469 === (22))){
var inst_10373 = (state_10468[(8)]);
var inst_10377 = cljs.core.async.close_BANG_.call(null,inst_10373);
var state_10468__$1 = state_10468;
var statearr_10521_10684 = state_10468__$1;
(statearr_10521_10684[(2)] = inst_10377);

(statearr_10521_10684[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10469 === (36))){
var inst_10425 = (state_10468[(23)]);
var inst_10429 = cljs.core.chunk_first.call(null,inst_10425);
var inst_10430 = cljs.core.chunk_rest.call(null,inst_10425);
var inst_10431 = cljs.core.count.call(null,inst_10429);
var inst_10404 = inst_10430;
var inst_10405 = inst_10429;
var inst_10406 = inst_10431;
var inst_10407 = (0);
var state_10468__$1 = (function (){var statearr_10522 = state_10468;
(statearr_10522[(19)] = inst_10404);

(statearr_10522[(9)] = inst_10405);

(statearr_10522[(20)] = inst_10406);

(statearr_10522[(10)] = inst_10407);

return statearr_10522;
})();
var statearr_10523_10694 = state_10468__$1;
(statearr_10523_10694[(2)] = null);

(statearr_10523_10694[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10469 === (41))){
var inst_10425 = (state_10468[(23)]);
var inst_10440 = (state_10468[(2)]);
var inst_10441 = cljs.core.next.call(null,inst_10425);
var inst_10404 = inst_10441;
var inst_10405 = null;
var inst_10406 = (0);
var inst_10407 = (0);
var state_10468__$1 = (function (){var statearr_10527 = state_10468;
(statearr_10527[(25)] = inst_10440);

(statearr_10527[(19)] = inst_10404);

(statearr_10527[(9)] = inst_10405);

(statearr_10527[(20)] = inst_10406);

(statearr_10527[(10)] = inst_10407);

return statearr_10527;
})();
var statearr_10528_10705 = state_10468__$1;
(statearr_10528_10705[(2)] = null);

(statearr_10528_10705[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10469 === (43))){
var state_10468__$1 = state_10468;
var statearr_10529_10706 = state_10468__$1;
(statearr_10529_10706[(2)] = null);

(statearr_10529_10706[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10469 === (29))){
var inst_10449 = (state_10468[(2)]);
var state_10468__$1 = state_10468;
var statearr_10530_10710 = state_10468__$1;
(statearr_10530_10710[(2)] = inst_10449);

(statearr_10530_10710[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10469 === (44))){
var inst_10458 = (state_10468[(2)]);
var state_10468__$1 = (function (){var statearr_10533 = state_10468;
(statearr_10533[(26)] = inst_10458);

return statearr_10533;
})();
var statearr_10535_10714 = state_10468__$1;
(statearr_10535_10714[(2)] = null);

(statearr_10535_10714[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10469 === (6))){
var inst_10396 = (state_10468[(27)]);
var inst_10395 = cljs.core.deref.call(null,cs);
var inst_10396__$1 = cljs.core.keys.call(null,inst_10395);
var inst_10397 = cljs.core.count.call(null,inst_10396__$1);
var inst_10398 = cljs.core.reset_BANG_.call(null,dctr,inst_10397);
var inst_10403 = cljs.core.seq.call(null,inst_10396__$1);
var inst_10404 = inst_10403;
var inst_10405 = null;
var inst_10406 = (0);
var inst_10407 = (0);
var state_10468__$1 = (function (){var statearr_10536 = state_10468;
(statearr_10536[(27)] = inst_10396__$1);

(statearr_10536[(28)] = inst_10398);

(statearr_10536[(19)] = inst_10404);

(statearr_10536[(9)] = inst_10405);

(statearr_10536[(20)] = inst_10406);

(statearr_10536[(10)] = inst_10407);

return statearr_10536;
})();
var statearr_10537_10721 = state_10468__$1;
(statearr_10537_10721[(2)] = null);

(statearr_10537_10721[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10469 === (28))){
var inst_10404 = (state_10468[(19)]);
var inst_10425 = (state_10468[(23)]);
var inst_10425__$1 = cljs.core.seq.call(null,inst_10404);
var state_10468__$1 = (function (){var statearr_10538 = state_10468;
(statearr_10538[(23)] = inst_10425__$1);

return statearr_10538;
})();
if(inst_10425__$1){
var statearr_10540_10723 = state_10468__$1;
(statearr_10540_10723[(1)] = (33));

} else {
var statearr_10542_10724 = state_10468__$1;
(statearr_10542_10724[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10469 === (25))){
var inst_10407 = (state_10468[(10)]);
var inst_10406 = (state_10468[(20)]);
var inst_10409 = (inst_10407 < inst_10406);
var inst_10410 = inst_10409;
var state_10468__$1 = state_10468;
if(cljs.core.truth_(inst_10410)){
var statearr_10544_10726 = state_10468__$1;
(statearr_10544_10726[(1)] = (27));

} else {
var statearr_10545_10728 = state_10468__$1;
(statearr_10545_10728[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10469 === (34))){
var state_10468__$1 = state_10468;
var statearr_10546_10729 = state_10468__$1;
(statearr_10546_10729[(2)] = null);

(statearr_10546_10729[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10469 === (17))){
var state_10468__$1 = state_10468;
var statearr_10547_10730 = state_10468__$1;
(statearr_10547_10730[(2)] = null);

(statearr_10547_10730[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10469 === (3))){
var inst_10465 = (state_10468[(2)]);
var state_10468__$1 = state_10468;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10468__$1,inst_10465);
} else {
if((state_val_10469 === (12))){
var inst_10390 = (state_10468[(2)]);
var state_10468__$1 = state_10468;
var statearr_10552_10737 = state_10468__$1;
(statearr_10552_10737[(2)] = inst_10390);

(statearr_10552_10737[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10469 === (2))){
var state_10468__$1 = state_10468;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10468__$1,(4),ch);
} else {
if((state_val_10469 === (23))){
var state_10468__$1 = state_10468;
var statearr_10553_10738 = state_10468__$1;
(statearr_10553_10738[(2)] = null);

(statearr_10553_10738[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10469 === (35))){
var inst_10447 = (state_10468[(2)]);
var state_10468__$1 = state_10468;
var statearr_10555_10739 = state_10468__$1;
(statearr_10555_10739[(2)] = inst_10447);

(statearr_10555_10739[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10469 === (19))){
var inst_10355 = (state_10468[(7)]);
var inst_10362 = cljs.core.chunk_first.call(null,inst_10355);
var inst_10363 = cljs.core.chunk_rest.call(null,inst_10355);
var inst_10364 = cljs.core.count.call(null,inst_10362);
var inst_10330 = inst_10363;
var inst_10331 = inst_10362;
var inst_10332 = inst_10364;
var inst_10333 = (0);
var state_10468__$1 = (function (){var statearr_10559 = state_10468;
(statearr_10559[(14)] = inst_10330);

(statearr_10559[(15)] = inst_10331);

(statearr_10559[(16)] = inst_10332);

(statearr_10559[(17)] = inst_10333);

return statearr_10559;
})();
var statearr_10560_10740 = state_10468__$1;
(statearr_10560_10740[(2)] = null);

(statearr_10560_10740[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10469 === (11))){
var inst_10330 = (state_10468[(14)]);
var inst_10355 = (state_10468[(7)]);
var inst_10355__$1 = cljs.core.seq.call(null,inst_10330);
var state_10468__$1 = (function (){var statearr_10563 = state_10468;
(statearr_10563[(7)] = inst_10355__$1);

return statearr_10563;
})();
if(inst_10355__$1){
var statearr_10564_10746 = state_10468__$1;
(statearr_10564_10746[(1)] = (16));

} else {
var statearr_10565_10747 = state_10468__$1;
(statearr_10565_10747[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10469 === (9))){
var inst_10392 = (state_10468[(2)]);
var state_10468__$1 = state_10468;
var statearr_10567_10748 = state_10468__$1;
(statearr_10567_10748[(2)] = inst_10392);

(statearr_10567_10748[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10469 === (5))){
var inst_10328 = cljs.core.deref.call(null,cs);
var inst_10329 = cljs.core.seq.call(null,inst_10328);
var inst_10330 = inst_10329;
var inst_10331 = null;
var inst_10332 = (0);
var inst_10333 = (0);
var state_10468__$1 = (function (){var statearr_10569 = state_10468;
(statearr_10569[(14)] = inst_10330);

(statearr_10569[(15)] = inst_10331);

(statearr_10569[(16)] = inst_10332);

(statearr_10569[(17)] = inst_10333);

return statearr_10569;
})();
var statearr_10570_10749 = state_10468__$1;
(statearr_10570_10749[(2)] = null);

(statearr_10570_10749[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10469 === (14))){
var state_10468__$1 = state_10468;
var statearr_10572_10750 = state_10468__$1;
(statearr_10572_10750[(2)] = null);

(statearr_10572_10750[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10469 === (45))){
var inst_10455 = (state_10468[(2)]);
var state_10468__$1 = state_10468;
var statearr_10574_10751 = state_10468__$1;
(statearr_10574_10751[(2)] = inst_10455);

(statearr_10574_10751[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10469 === (26))){
var inst_10396 = (state_10468[(27)]);
var inst_10451 = (state_10468[(2)]);
var inst_10452 = cljs.core.seq.call(null,inst_10396);
var state_10468__$1 = (function (){var statearr_10576 = state_10468;
(statearr_10576[(29)] = inst_10451);

return statearr_10576;
})();
if(inst_10452){
var statearr_10578_10753 = state_10468__$1;
(statearr_10578_10753[(1)] = (42));

} else {
var statearr_10579_10754 = state_10468__$1;
(statearr_10579_10754[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10469 === (16))){
var inst_10355 = (state_10468[(7)]);
var inst_10360 = cljs.core.chunked_seq_QMARK_.call(null,inst_10355);
var state_10468__$1 = state_10468;
if(inst_10360){
var statearr_10584_10758 = state_10468__$1;
(statearr_10584_10758[(1)] = (19));

} else {
var statearr_10585_10759 = state_10468__$1;
(statearr_10585_10759[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10469 === (38))){
var inst_10444 = (state_10468[(2)]);
var state_10468__$1 = state_10468;
var statearr_10589_10761 = state_10468__$1;
(statearr_10589_10761[(2)] = inst_10444);

(statearr_10589_10761[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10469 === (30))){
var state_10468__$1 = state_10468;
var statearr_10591_10764 = state_10468__$1;
(statearr_10591_10764[(2)] = null);

(statearr_10591_10764[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10469 === (10))){
var inst_10331 = (state_10468[(15)]);
var inst_10333 = (state_10468[(17)]);
var inst_10344 = cljs.core._nth.call(null,inst_10331,inst_10333);
var inst_10345 = cljs.core.nth.call(null,inst_10344,(0),null);
var inst_10346 = cljs.core.nth.call(null,inst_10344,(1),null);
var state_10468__$1 = (function (){var statearr_10595 = state_10468;
(statearr_10595[(24)] = inst_10345);

return statearr_10595;
})();
if(cljs.core.truth_(inst_10346)){
var statearr_10596_10765 = state_10468__$1;
(statearr_10596_10765[(1)] = (13));

} else {
var statearr_10598_10771 = state_10468__$1;
(statearr_10598_10771[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10469 === (18))){
var inst_10388 = (state_10468[(2)]);
var state_10468__$1 = state_10468;
var statearr_10600_10773 = state_10468__$1;
(statearr_10600_10773[(2)] = inst_10388);

(statearr_10600_10773[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10469 === (42))){
var state_10468__$1 = state_10468;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10468__$1,(45),dchan);
} else {
if((state_val_10469 === (37))){
var inst_10425 = (state_10468[(23)]);
var inst_10434 = (state_10468[(22)]);
var inst_10321 = (state_10468[(12)]);
var inst_10434__$1 = cljs.core.first.call(null,inst_10425);
var inst_10435 = cljs.core.async.put_BANG_.call(null,inst_10434__$1,inst_10321,done);
var state_10468__$1 = (function (){var statearr_10602 = state_10468;
(statearr_10602[(22)] = inst_10434__$1);

return statearr_10602;
})();
if(cljs.core.truth_(inst_10435)){
var statearr_10604_10774 = state_10468__$1;
(statearr_10604_10774[(1)] = (39));

} else {
var statearr_10605_10775 = state_10468__$1;
(statearr_10605_10775[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10469 === (8))){
var inst_10333 = (state_10468[(17)]);
var inst_10332 = (state_10468[(16)]);
var inst_10338 = (inst_10333 < inst_10332);
var inst_10339 = inst_10338;
var state_10468__$1 = state_10468;
if(cljs.core.truth_(inst_10339)){
var statearr_10609_10776 = state_10468__$1;
(statearr_10609_10776[(1)] = (10));

} else {
var statearr_10610_10777 = state_10468__$1;
(statearr_10610_10777[(1)] = (11));

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
var cljs$core$async$mult_$_state_machine__9364__auto__ = null;
var cljs$core$async$mult_$_state_machine__9364__auto____0 = (function (){
var statearr_10613 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_10613[(0)] = cljs$core$async$mult_$_state_machine__9364__auto__);

(statearr_10613[(1)] = (1));

return statearr_10613;
});
var cljs$core$async$mult_$_state_machine__9364__auto____1 = (function (state_10468){
while(true){
var ret_value__9365__auto__ = (function (){try{while(true){
var result__9366__auto__ = switch__9363__auto__.call(null,state_10468);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9366__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9366__auto__;
}
break;
}
}catch (e10623){var ex__9367__auto__ = e10623;
var statearr_10624_10778 = state_10468;
(statearr_10624_10778[(2)] = ex__9367__auto__);


if(cljs.core.seq.call(null,(state_10468[(4)]))){
var statearr_10625_10779 = state_10468;
(statearr_10625_10779[(1)] = cljs.core.first.call(null,(state_10468[(4)])));

} else {
throw ex__9367__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9365__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10780 = state_10468;
state_10468 = G__10780;
continue;
} else {
return ret_value__9365__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__9364__auto__ = function(state_10468){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__9364__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__9364__auto____1.call(this,state_10468);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__9364__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__9364__auto____0;
cljs$core$async$mult_$_state_machine__9364__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__9364__auto____1;
return cljs$core$async$mult_$_state_machine__9364__auto__;
})()
})();
var state__9546__auto__ = (function (){var statearr_10627 = f__9545__auto__.call(null);
(statearr_10627[(6)] = c__9544__auto___10648);

return statearr_10627;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9546__auto__);
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
var G__10634 = arguments.length;
switch (G__10634) {
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

var cljs$core$async$Mix$admix_STAR_$dyn_10783 = (function (m,ch){
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
return cljs$core$async$Mix$admix_STAR_$dyn_10783.call(null,m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_10784 = (function (m,ch){
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
return cljs$core$async$Mix$unmix_STAR_$dyn_10784.call(null,m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_10788 = (function (m){
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
return cljs$core$async$Mix$unmix_all_STAR_$dyn_10788.call(null,m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_10806 = (function (m,state_map){
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
return cljs$core$async$Mix$toggle_STAR_$dyn_10806.call(null,m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_10855 = (function (m,mode){
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
return cljs$core$async$Mix$solo_mode_STAR_$dyn_10855.call(null,m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__5732__auto__ = [];
var len__5726__auto___10861 = arguments.length;
var i__5727__auto___10862 = (0);
while(true){
if((i__5727__auto___10862 < len__5726__auto___10861)){
args__5732__auto__.push((arguments[i__5727__auto___10862]));

var G__10863 = (i__5727__auto___10862 + (1));
i__5727__auto___10862 = G__10863;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((3) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5733__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__10718){
var map__10719 = p__10718;
var map__10719__$1 = cljs.core.__destructure_map.call(null,map__10719);
var opts = map__10719__$1;
var statearr_10720_10866 = state;
(statearr_10720_10866[(1)] = cont_block);


var temp__5804__auto__ = cljs.core.async.do_alts.call(null,(function (val){
var statearr_10722_10867 = state;
(statearr_10722_10867[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
}),ports,opts);
if(cljs.core.truth_(temp__5804__auto__)){
var cb = temp__5804__auto__;
var statearr_10725_10868 = state;
(statearr_10725_10868[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq10701){
var G__10702 = cljs.core.first.call(null,seq10701);
var seq10701__$1 = cljs.core.next.call(null,seq10701);
var G__10703 = cljs.core.first.call(null,seq10701__$1);
var seq10701__$2 = cljs.core.next.call(null,seq10701__$1);
var G__10704 = cljs.core.first.call(null,seq10701__$2);
var seq10701__$3 = cljs.core.next.call(null,seq10701__$2);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__10702,G__10703,G__10704,seq10701__$3);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async10755 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async10755 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta10756){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta10756 = meta10756;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async10755.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10757,meta10756__$1){
var self__ = this;
var _10757__$1 = this;
return (new cljs.core.async.t_cljs$core$async10755(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta10756__$1));
}));

(cljs.core.async.t_cljs$core$async10755.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10757){
var self__ = this;
var _10757__$1 = this;
return self__.meta10756;
}));

(cljs.core.async.t_cljs$core$async10755.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async10755.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async10755.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async10755.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async10755.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async10755.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async10755.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async10755.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async10755.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta10756","meta10756",1723274999,null)], null);
}));

(cljs.core.async.t_cljs$core$async10755.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async10755.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async10755");

(cljs.core.async.t_cljs$core$async10755.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write.call(null,writer__5288__auto__,"cljs.core.async/t_cljs$core$async10755");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async10755.
 */
cljs.core.async.__GT_t_cljs$core$async10755 = (function cljs$core$async$mix_$___GT_t_cljs$core$async10755(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta10756){
return (new cljs.core.async.t_cljs$core$async10755(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta10756));
});

}

return (new cljs.core.async.t_cljs$core$async10755(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__9544__auto___10940 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__9545__auto__ = (function (){var switch__9363__auto__ = (function (state_10856){
var state_val_10857 = (state_10856[(1)]);
if((state_val_10857 === (7))){
var inst_10814 = (state_10856[(2)]);
var state_10856__$1 = state_10856;
if(cljs.core.truth_(inst_10814)){
var statearr_10864_10941 = state_10856__$1;
(statearr_10864_10941[(1)] = (8));

} else {
var statearr_10865_10942 = state_10856__$1;
(statearr_10865_10942[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10857 === (20))){
var inst_10807 = (state_10856[(7)]);
var state_10856__$1 = state_10856;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10856__$1,(23),out,inst_10807);
} else {
if((state_val_10857 === (1))){
var inst_10789 = calc_state.call(null);
var inst_10790 = cljs.core.__destructure_map.call(null,inst_10789);
var inst_10791 = cljs.core.get.call(null,inst_10790,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_10792 = cljs.core.get.call(null,inst_10790,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_10793 = cljs.core.get.call(null,inst_10790,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_10794 = inst_10789;
var state_10856__$1 = (function (){var statearr_10869 = state_10856;
(statearr_10869[(8)] = inst_10791);

(statearr_10869[(9)] = inst_10792);

(statearr_10869[(10)] = inst_10793);

(statearr_10869[(11)] = inst_10794);

return statearr_10869;
})();
var statearr_10870_10943 = state_10856__$1;
(statearr_10870_10943[(2)] = null);

(statearr_10870_10943[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10857 === (24))){
var inst_10797 = (state_10856[(12)]);
var inst_10794 = inst_10797;
var state_10856__$1 = (function (){var statearr_10871 = state_10856;
(statearr_10871[(11)] = inst_10794);

return statearr_10871;
})();
var statearr_10872_10948 = state_10856__$1;
(statearr_10872_10948[(2)] = null);

(statearr_10872_10948[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10857 === (4))){
var inst_10807 = (state_10856[(7)]);
var inst_10809 = (state_10856[(13)]);
var inst_10805 = (state_10856[(2)]);
var inst_10807__$1 = cljs.core.nth.call(null,inst_10805,(0),null);
var inst_10808 = cljs.core.nth.call(null,inst_10805,(1),null);
var inst_10809__$1 = (inst_10807__$1 == null);
var state_10856__$1 = (function (){var statearr_10873 = state_10856;
(statearr_10873[(7)] = inst_10807__$1);

(statearr_10873[(14)] = inst_10808);

(statearr_10873[(13)] = inst_10809__$1);

return statearr_10873;
})();
if(cljs.core.truth_(inst_10809__$1)){
var statearr_10874_10957 = state_10856__$1;
(statearr_10874_10957[(1)] = (5));

} else {
var statearr_10875_10959 = state_10856__$1;
(statearr_10875_10959[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10857 === (15))){
var inst_10798 = (state_10856[(15)]);
var inst_10828 = (state_10856[(16)]);
var inst_10828__$1 = cljs.core.empty_QMARK_.call(null,inst_10798);
var state_10856__$1 = (function (){var statearr_10876 = state_10856;
(statearr_10876[(16)] = inst_10828__$1);

return statearr_10876;
})();
if(inst_10828__$1){
var statearr_10877_10967 = state_10856__$1;
(statearr_10877_10967[(1)] = (17));

} else {
var statearr_10878_10972 = state_10856__$1;
(statearr_10878_10972[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10857 === (21))){
var inst_10797 = (state_10856[(12)]);
var inst_10794 = inst_10797;
var state_10856__$1 = (function (){var statearr_10879 = state_10856;
(statearr_10879[(11)] = inst_10794);

return statearr_10879;
})();
var statearr_10880_10978 = state_10856__$1;
(statearr_10880_10978[(2)] = null);

(statearr_10880_10978[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10857 === (13))){
var inst_10821 = (state_10856[(2)]);
var inst_10822 = calc_state.call(null);
var inst_10794 = inst_10822;
var state_10856__$1 = (function (){var statearr_10882 = state_10856;
(statearr_10882[(17)] = inst_10821);

(statearr_10882[(11)] = inst_10794);

return statearr_10882;
})();
var statearr_10883_10987 = state_10856__$1;
(statearr_10883_10987[(2)] = null);

(statearr_10883_10987[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10857 === (22))){
var inst_10848 = (state_10856[(2)]);
var state_10856__$1 = state_10856;
var statearr_10884_10988 = state_10856__$1;
(statearr_10884_10988[(2)] = inst_10848);

(statearr_10884_10988[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10857 === (6))){
var inst_10808 = (state_10856[(14)]);
var inst_10812 = cljs.core._EQ_.call(null,inst_10808,change);
var state_10856__$1 = state_10856;
var statearr_10890_10989 = state_10856__$1;
(statearr_10890_10989[(2)] = inst_10812);

(statearr_10890_10989[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10857 === (25))){
var state_10856__$1 = state_10856;
var statearr_10892_10990 = state_10856__$1;
(statearr_10892_10990[(2)] = null);

(statearr_10892_10990[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10857 === (17))){
var inst_10799 = (state_10856[(18)]);
var inst_10808 = (state_10856[(14)]);
var inst_10830 = inst_10799.call(null,inst_10808);
var inst_10831 = cljs.core.not.call(null,inst_10830);
var state_10856__$1 = state_10856;
var statearr_10893_10991 = state_10856__$1;
(statearr_10893_10991[(2)] = inst_10831);

(statearr_10893_10991[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10857 === (3))){
var inst_10852 = (state_10856[(2)]);
var state_10856__$1 = state_10856;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10856__$1,inst_10852);
} else {
if((state_val_10857 === (12))){
var state_10856__$1 = state_10856;
var statearr_10894_10992 = state_10856__$1;
(statearr_10894_10992[(2)] = null);

(statearr_10894_10992[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10857 === (2))){
var inst_10794 = (state_10856[(11)]);
var inst_10797 = (state_10856[(12)]);
var inst_10797__$1 = cljs.core.__destructure_map.call(null,inst_10794);
var inst_10798 = cljs.core.get.call(null,inst_10797__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_10799 = cljs.core.get.call(null,inst_10797__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_10800 = cljs.core.get.call(null,inst_10797__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_10856__$1 = (function (){var statearr_10897 = state_10856;
(statearr_10897[(12)] = inst_10797__$1);

(statearr_10897[(15)] = inst_10798);

(statearr_10897[(18)] = inst_10799);

return statearr_10897;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_10856__$1,(4),inst_10800);
} else {
if((state_val_10857 === (23))){
var inst_10839 = (state_10856[(2)]);
var state_10856__$1 = state_10856;
if(cljs.core.truth_(inst_10839)){
var statearr_10898_10993 = state_10856__$1;
(statearr_10898_10993[(1)] = (24));

} else {
var statearr_10899_10994 = state_10856__$1;
(statearr_10899_10994[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10857 === (19))){
var inst_10834 = (state_10856[(2)]);
var state_10856__$1 = state_10856;
var statearr_10900_10995 = state_10856__$1;
(statearr_10900_10995[(2)] = inst_10834);

(statearr_10900_10995[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10857 === (11))){
var inst_10808 = (state_10856[(14)]);
var inst_10818 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_10808);
var state_10856__$1 = state_10856;
var statearr_10902_10998 = state_10856__$1;
(statearr_10902_10998[(2)] = inst_10818);

(statearr_10902_10998[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10857 === (9))){
var inst_10798 = (state_10856[(15)]);
var inst_10808 = (state_10856[(14)]);
var inst_10825 = (state_10856[(19)]);
var inst_10825__$1 = inst_10798.call(null,inst_10808);
var state_10856__$1 = (function (){var statearr_10907 = state_10856;
(statearr_10907[(19)] = inst_10825__$1);

return statearr_10907;
})();
if(cljs.core.truth_(inst_10825__$1)){
var statearr_10911_10999 = state_10856__$1;
(statearr_10911_10999[(1)] = (14));

} else {
var statearr_10912_11000 = state_10856__$1;
(statearr_10912_11000[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10857 === (5))){
var inst_10809 = (state_10856[(13)]);
var state_10856__$1 = state_10856;
var statearr_10913_11001 = state_10856__$1;
(statearr_10913_11001[(2)] = inst_10809);

(statearr_10913_11001[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10857 === (14))){
var inst_10825 = (state_10856[(19)]);
var state_10856__$1 = state_10856;
var statearr_10914_11002 = state_10856__$1;
(statearr_10914_11002[(2)] = inst_10825);

(statearr_10914_11002[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10857 === (26))){
var inst_10844 = (state_10856[(2)]);
var state_10856__$1 = state_10856;
var statearr_10915_11003 = state_10856__$1;
(statearr_10915_11003[(2)] = inst_10844);

(statearr_10915_11003[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10857 === (16))){
var inst_10836 = (state_10856[(2)]);
var state_10856__$1 = state_10856;
if(cljs.core.truth_(inst_10836)){
var statearr_10916_11004 = state_10856__$1;
(statearr_10916_11004[(1)] = (20));

} else {
var statearr_10917_11005 = state_10856__$1;
(statearr_10917_11005[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10857 === (10))){
var inst_10850 = (state_10856[(2)]);
var state_10856__$1 = state_10856;
var statearr_10918_11006 = state_10856__$1;
(statearr_10918_11006[(2)] = inst_10850);

(statearr_10918_11006[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10857 === (18))){
var inst_10828 = (state_10856[(16)]);
var state_10856__$1 = state_10856;
var statearr_10922_11008 = state_10856__$1;
(statearr_10922_11008[(2)] = inst_10828);

(statearr_10922_11008[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10857 === (8))){
var inst_10807 = (state_10856[(7)]);
var inst_10816 = (inst_10807 == null);
var state_10856__$1 = state_10856;
if(cljs.core.truth_(inst_10816)){
var statearr_10923_11009 = state_10856__$1;
(statearr_10923_11009[(1)] = (11));

} else {
var statearr_10924_11010 = state_10856__$1;
(statearr_10924_11010[(1)] = (12));

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
var cljs$core$async$mix_$_state_machine__9364__auto__ = null;
var cljs$core$async$mix_$_state_machine__9364__auto____0 = (function (){
var statearr_10925 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_10925[(0)] = cljs$core$async$mix_$_state_machine__9364__auto__);

(statearr_10925[(1)] = (1));

return statearr_10925;
});
var cljs$core$async$mix_$_state_machine__9364__auto____1 = (function (state_10856){
while(true){
var ret_value__9365__auto__ = (function (){try{while(true){
var result__9366__auto__ = switch__9363__auto__.call(null,state_10856);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9366__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9366__auto__;
}
break;
}
}catch (e10926){var ex__9367__auto__ = e10926;
var statearr_10927_11013 = state_10856;
(statearr_10927_11013[(2)] = ex__9367__auto__);


if(cljs.core.seq.call(null,(state_10856[(4)]))){
var statearr_10929_11014 = state_10856;
(statearr_10929_11014[(1)] = cljs.core.first.call(null,(state_10856[(4)])));

} else {
throw ex__9367__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9365__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11015 = state_10856;
state_10856 = G__11015;
continue;
} else {
return ret_value__9365__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__9364__auto__ = function(state_10856){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__9364__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__9364__auto____1.call(this,state_10856);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__9364__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__9364__auto____0;
cljs$core$async$mix_$_state_machine__9364__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__9364__auto____1;
return cljs$core$async$mix_$_state_machine__9364__auto__;
})()
})();
var state__9546__auto__ = (function (){var statearr_10936 = f__9545__auto__.call(null);
(statearr_10936[(6)] = c__9544__auto___10940);

return statearr_10936;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9546__auto__);
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

var cljs$core$async$Pub$sub_STAR_$dyn_11019 = (function (p,v,ch,close_QMARK_){
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
return cljs$core$async$Pub$sub_STAR_$dyn_11019.call(null,p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_11020 = (function (p,v,ch){
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
return cljs$core$async$Pub$unsub_STAR_$dyn_11020.call(null,p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_11021 = (function() {
var G__11022 = null;
var G__11022__1 = (function (p){
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
var G__11022__2 = (function (p,v){
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
G__11022 = function(p,v){
switch(arguments.length){
case 1:
return G__11022__1.call(this,p);
case 2:
return G__11022__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__11022.cljs$core$IFn$_invoke$arity$1 = G__11022__1;
G__11022.cljs$core$IFn$_invoke$arity$2 = G__11022__2;
return G__11022;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__10997 = arguments.length;
switch (G__10997) {
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
return cljs$core$async$Pub$unsub_all_STAR_$dyn_11021.call(null,p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_11021.call(null,p,v);
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
var G__11012 = arguments.length;
switch (G__11012) {
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
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,(function (p1__11007_SHARP_){
if(cljs.core.truth_(p1__11007_SHARP_.call(null,topic))){
return p1__11007_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__11007_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async11016 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async11016 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta11017){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta11017 = meta11017;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async11016.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11018,meta11017__$1){
var self__ = this;
var _11018__$1 = this;
return (new cljs.core.async.t_cljs$core$async11016(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta11017__$1));
}));

(cljs.core.async.t_cljs$core$async11016.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11018){
var self__ = this;
var _11018__$1 = this;
return self__.meta11017;
}));

(cljs.core.async.t_cljs$core$async11016.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async11016.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async11016.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async11016.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async11016.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
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

(cljs.core.async.t_cljs$core$async11016.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async11016.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async11016.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta11017","meta11017",1808655424,null)], null);
}));

(cljs.core.async.t_cljs$core$async11016.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async11016.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async11016");

(cljs.core.async.t_cljs$core$async11016.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write.call(null,writer__5288__auto__,"cljs.core.async/t_cljs$core$async11016");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async11016.
 */
cljs.core.async.__GT_t_cljs$core$async11016 = (function cljs$core$async$__GT_t_cljs$core$async11016(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta11017){
return (new cljs.core.async.t_cljs$core$async11016(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta11017));
});

}

return (new cljs.core.async.t_cljs$core$async11016(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__9544__auto___11198 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__9545__auto__ = (function (){var switch__9363__auto__ = (function (state_11102){
var state_val_11103 = (state_11102[(1)]);
if((state_val_11103 === (7))){
var inst_11098 = (state_11102[(2)]);
var state_11102__$1 = state_11102;
var statearr_11107_11199 = state_11102__$1;
(statearr_11107_11199[(2)] = inst_11098);

(statearr_11107_11199[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11103 === (20))){
var state_11102__$1 = state_11102;
var statearr_11108_11200 = state_11102__$1;
(statearr_11108_11200[(2)] = null);

(statearr_11108_11200[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11103 === (1))){
var state_11102__$1 = state_11102;
var statearr_11109_11204 = state_11102__$1;
(statearr_11109_11204[(2)] = null);

(statearr_11109_11204[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11103 === (24))){
var inst_11081 = (state_11102[(7)]);
var inst_11090 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_11081);
var state_11102__$1 = state_11102;
var statearr_11113_11206 = state_11102__$1;
(statearr_11113_11206[(2)] = inst_11090);

(statearr_11113_11206[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11103 === (4))){
var inst_11028 = (state_11102[(8)]);
var inst_11028__$1 = (state_11102[(2)]);
var inst_11029 = (inst_11028__$1 == null);
var state_11102__$1 = (function (){var statearr_11114 = state_11102;
(statearr_11114[(8)] = inst_11028__$1);

return statearr_11114;
})();
if(cljs.core.truth_(inst_11029)){
var statearr_11115_11208 = state_11102__$1;
(statearr_11115_11208[(1)] = (5));

} else {
var statearr_11116_11210 = state_11102__$1;
(statearr_11116_11210[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11103 === (15))){
var inst_11075 = (state_11102[(2)]);
var state_11102__$1 = state_11102;
var statearr_11117_11215 = state_11102__$1;
(statearr_11117_11215[(2)] = inst_11075);

(statearr_11117_11215[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11103 === (21))){
var inst_11095 = (state_11102[(2)]);
var state_11102__$1 = (function (){var statearr_11118 = state_11102;
(statearr_11118[(9)] = inst_11095);

return statearr_11118;
})();
var statearr_11119_11218 = state_11102__$1;
(statearr_11119_11218[(2)] = null);

(statearr_11119_11218[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11103 === (13))){
var inst_11054 = (state_11102[(10)]);
var inst_11056 = cljs.core.chunked_seq_QMARK_.call(null,inst_11054);
var state_11102__$1 = state_11102;
if(inst_11056){
var statearr_11123_11219 = state_11102__$1;
(statearr_11123_11219[(1)] = (16));

} else {
var statearr_11124_11220 = state_11102__$1;
(statearr_11124_11220[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11103 === (22))){
var inst_11087 = (state_11102[(2)]);
var state_11102__$1 = state_11102;
if(cljs.core.truth_(inst_11087)){
var statearr_11125_11222 = state_11102__$1;
(statearr_11125_11222[(1)] = (23));

} else {
var statearr_11126_11225 = state_11102__$1;
(statearr_11126_11225[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11103 === (6))){
var inst_11028 = (state_11102[(8)]);
var inst_11081 = (state_11102[(7)]);
var inst_11083 = (state_11102[(11)]);
var inst_11081__$1 = topic_fn.call(null,inst_11028);
var inst_11082 = cljs.core.deref.call(null,mults);
var inst_11083__$1 = cljs.core.get.call(null,inst_11082,inst_11081__$1);
var state_11102__$1 = (function (){var statearr_11130 = state_11102;
(statearr_11130[(7)] = inst_11081__$1);

(statearr_11130[(11)] = inst_11083__$1);

return statearr_11130;
})();
if(cljs.core.truth_(inst_11083__$1)){
var statearr_11131_11240 = state_11102__$1;
(statearr_11131_11240[(1)] = (19));

} else {
var statearr_11132_11241 = state_11102__$1;
(statearr_11132_11241[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11103 === (25))){
var inst_11092 = (state_11102[(2)]);
var state_11102__$1 = state_11102;
var statearr_11133_11242 = state_11102__$1;
(statearr_11133_11242[(2)] = inst_11092);

(statearr_11133_11242[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11103 === (17))){
var inst_11054 = (state_11102[(10)]);
var inst_11066 = cljs.core.first.call(null,inst_11054);
var inst_11067 = cljs.core.async.muxch_STAR_.call(null,inst_11066);
var inst_11068 = cljs.core.async.close_BANG_.call(null,inst_11067);
var inst_11069 = cljs.core.next.call(null,inst_11054);
var inst_11039 = inst_11069;
var inst_11040 = null;
var inst_11041 = (0);
var inst_11042 = (0);
var state_11102__$1 = (function (){var statearr_11137 = state_11102;
(statearr_11137[(12)] = inst_11068);

(statearr_11137[(13)] = inst_11039);

(statearr_11137[(14)] = inst_11040);

(statearr_11137[(15)] = inst_11041);

(statearr_11137[(16)] = inst_11042);

return statearr_11137;
})();
var statearr_11139_11263 = state_11102__$1;
(statearr_11139_11263[(2)] = null);

(statearr_11139_11263[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11103 === (3))){
var inst_11100 = (state_11102[(2)]);
var state_11102__$1 = state_11102;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11102__$1,inst_11100);
} else {
if((state_val_11103 === (12))){
var inst_11077 = (state_11102[(2)]);
var state_11102__$1 = state_11102;
var statearr_11141_11275 = state_11102__$1;
(statearr_11141_11275[(2)] = inst_11077);

(statearr_11141_11275[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11103 === (2))){
var state_11102__$1 = state_11102;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11102__$1,(4),ch);
} else {
if((state_val_11103 === (23))){
var state_11102__$1 = state_11102;
var statearr_11143_11287 = state_11102__$1;
(statearr_11143_11287[(2)] = null);

(statearr_11143_11287[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11103 === (19))){
var inst_11083 = (state_11102[(11)]);
var inst_11028 = (state_11102[(8)]);
var inst_11085 = cljs.core.async.muxch_STAR_.call(null,inst_11083);
var state_11102__$1 = state_11102;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11102__$1,(22),inst_11085,inst_11028);
} else {
if((state_val_11103 === (11))){
var inst_11039 = (state_11102[(13)]);
var inst_11054 = (state_11102[(10)]);
var inst_11054__$1 = cljs.core.seq.call(null,inst_11039);
var state_11102__$1 = (function (){var statearr_11148 = state_11102;
(statearr_11148[(10)] = inst_11054__$1);

return statearr_11148;
})();
if(inst_11054__$1){
var statearr_11149_11294 = state_11102__$1;
(statearr_11149_11294[(1)] = (13));

} else {
var statearr_11150_11295 = state_11102__$1;
(statearr_11150_11295[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11103 === (9))){
var inst_11079 = (state_11102[(2)]);
var state_11102__$1 = state_11102;
var statearr_11151_11296 = state_11102__$1;
(statearr_11151_11296[(2)] = inst_11079);

(statearr_11151_11296[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11103 === (5))){
var inst_11036 = cljs.core.deref.call(null,mults);
var inst_11037 = cljs.core.vals.call(null,inst_11036);
var inst_11038 = cljs.core.seq.call(null,inst_11037);
var inst_11039 = inst_11038;
var inst_11040 = null;
var inst_11041 = (0);
var inst_11042 = (0);
var state_11102__$1 = (function (){var statearr_11157 = state_11102;
(statearr_11157[(13)] = inst_11039);

(statearr_11157[(14)] = inst_11040);

(statearr_11157[(15)] = inst_11041);

(statearr_11157[(16)] = inst_11042);

return statearr_11157;
})();
var statearr_11158_11306 = state_11102__$1;
(statearr_11158_11306[(2)] = null);

(statearr_11158_11306[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11103 === (14))){
var state_11102__$1 = state_11102;
var statearr_11162_11309 = state_11102__$1;
(statearr_11162_11309[(2)] = null);

(statearr_11162_11309[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11103 === (16))){
var inst_11054 = (state_11102[(10)]);
var inst_11058 = cljs.core.chunk_first.call(null,inst_11054);
var inst_11060 = cljs.core.chunk_rest.call(null,inst_11054);
var inst_11062 = cljs.core.count.call(null,inst_11058);
var inst_11039 = inst_11060;
var inst_11040 = inst_11058;
var inst_11041 = inst_11062;
var inst_11042 = (0);
var state_11102__$1 = (function (){var statearr_11165 = state_11102;
(statearr_11165[(13)] = inst_11039);

(statearr_11165[(14)] = inst_11040);

(statearr_11165[(15)] = inst_11041);

(statearr_11165[(16)] = inst_11042);

return statearr_11165;
})();
var statearr_11167_11317 = state_11102__$1;
(statearr_11167_11317[(2)] = null);

(statearr_11167_11317[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11103 === (10))){
var inst_11040 = (state_11102[(14)]);
var inst_11042 = (state_11102[(16)]);
var inst_11039 = (state_11102[(13)]);
var inst_11041 = (state_11102[(15)]);
var inst_11048 = cljs.core._nth.call(null,inst_11040,inst_11042);
var inst_11049 = cljs.core.async.muxch_STAR_.call(null,inst_11048);
var inst_11050 = cljs.core.async.close_BANG_.call(null,inst_11049);
var inst_11051 = (inst_11042 + (1));
var tmp11159 = inst_11041;
var tmp11160 = inst_11040;
var tmp11161 = inst_11039;
var inst_11039__$1 = tmp11161;
var inst_11040__$1 = tmp11160;
var inst_11041__$1 = tmp11159;
var inst_11042__$1 = inst_11051;
var state_11102__$1 = (function (){var statearr_11169 = state_11102;
(statearr_11169[(17)] = inst_11050);

(statearr_11169[(13)] = inst_11039__$1);

(statearr_11169[(14)] = inst_11040__$1);

(statearr_11169[(15)] = inst_11041__$1);

(statearr_11169[(16)] = inst_11042__$1);

return statearr_11169;
})();
var statearr_11171_11329 = state_11102__$1;
(statearr_11171_11329[(2)] = null);

(statearr_11171_11329[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11103 === (18))){
var inst_11072 = (state_11102[(2)]);
var state_11102__$1 = state_11102;
var statearr_11173_11331 = state_11102__$1;
(statearr_11173_11331[(2)] = inst_11072);

(statearr_11173_11331[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11103 === (8))){
var inst_11042 = (state_11102[(16)]);
var inst_11041 = (state_11102[(15)]);
var inst_11045 = (inst_11042 < inst_11041);
var inst_11046 = inst_11045;
var state_11102__$1 = state_11102;
if(cljs.core.truth_(inst_11046)){
var statearr_11175_11332 = state_11102__$1;
(statearr_11175_11332[(1)] = (10));

} else {
var statearr_11176_11334 = state_11102__$1;
(statearr_11176_11334[(1)] = (11));

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
var cljs$core$async$state_machine__9364__auto__ = null;
var cljs$core$async$state_machine__9364__auto____0 = (function (){
var statearr_11178 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_11178[(0)] = cljs$core$async$state_machine__9364__auto__);

(statearr_11178[(1)] = (1));

return statearr_11178;
});
var cljs$core$async$state_machine__9364__auto____1 = (function (state_11102){
while(true){
var ret_value__9365__auto__ = (function (){try{while(true){
var result__9366__auto__ = switch__9363__auto__.call(null,state_11102);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9366__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9366__auto__;
}
break;
}
}catch (e11179){var ex__9367__auto__ = e11179;
var statearr_11180_11341 = state_11102;
(statearr_11180_11341[(2)] = ex__9367__auto__);


if(cljs.core.seq.call(null,(state_11102[(4)]))){
var statearr_11181_11344 = state_11102;
(statearr_11181_11344[(1)] = cljs.core.first.call(null,(state_11102[(4)])));

} else {
throw ex__9367__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9365__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11345 = state_11102;
state_11102 = G__11345;
continue;
} else {
return ret_value__9365__auto__;
}
break;
}
});
cljs$core$async$state_machine__9364__auto__ = function(state_11102){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__9364__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__9364__auto____1.call(this,state_11102);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__9364__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__9364__auto____0;
cljs$core$async$state_machine__9364__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__9364__auto____1;
return cljs$core$async$state_machine__9364__auto__;
})()
})();
var state__9546__auto__ = (function (){var statearr_11184 = f__9545__auto__.call(null);
(statearr_11184[(6)] = c__9544__auto___11198);

return statearr_11184;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9546__auto__);
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
var G__11187 = arguments.length;
switch (G__11187) {
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
var G__11196 = arguments.length;
switch (G__11196) {
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
var G__11203 = arguments.length;
switch (G__11203) {
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
var c__9544__auto___11397 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__9545__auto__ = (function (){var switch__9363__auto__ = (function (state_11289){
var state_val_11290 = (state_11289[(1)]);
if((state_val_11290 === (7))){
var state_11289__$1 = state_11289;
var statearr_11297_11398 = state_11289__$1;
(statearr_11297_11398[(2)] = null);

(statearr_11297_11398[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11290 === (1))){
var state_11289__$1 = state_11289;
var statearr_11298_11399 = state_11289__$1;
(statearr_11298_11399[(2)] = null);

(statearr_11298_11399[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11290 === (4))){
var inst_11227 = (state_11289[(7)]);
var inst_11226 = (state_11289[(8)]);
var inst_11230 = (inst_11227 < inst_11226);
var state_11289__$1 = state_11289;
if(cljs.core.truth_(inst_11230)){
var statearr_11308_11400 = state_11289__$1;
(statearr_11308_11400[(1)] = (6));

} else {
var statearr_11310_11404 = state_11289__$1;
(statearr_11310_11404[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11290 === (15))){
var inst_11266 = (state_11289[(9)]);
var inst_11278 = cljs.core.apply.call(null,f,inst_11266);
var state_11289__$1 = state_11289;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11289__$1,(17),out,inst_11278);
} else {
if((state_val_11290 === (13))){
var inst_11266 = (state_11289[(9)]);
var inst_11266__$1 = (state_11289[(2)]);
var inst_11267 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_11266__$1);
var state_11289__$1 = (function (){var statearr_11318 = state_11289;
(statearr_11318[(9)] = inst_11266__$1);

return statearr_11318;
})();
if(cljs.core.truth_(inst_11267)){
var statearr_11322_11421 = state_11289__$1;
(statearr_11322_11421[(1)] = (14));

} else {
var statearr_11323_11426 = state_11289__$1;
(statearr_11323_11426[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11290 === (6))){
var state_11289__$1 = state_11289;
var statearr_11327_11435 = state_11289__$1;
(statearr_11327_11435[(2)] = null);

(statearr_11327_11435[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11290 === (17))){
var inst_11280 = (state_11289[(2)]);
var state_11289__$1 = (function (){var statearr_11335 = state_11289;
(statearr_11335[(10)] = inst_11280);

return statearr_11335;
})();
var statearr_11336_11438 = state_11289__$1;
(statearr_11336_11438[(2)] = null);

(statearr_11336_11438[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11290 === (3))){
var inst_11286 = (state_11289[(2)]);
var state_11289__$1 = state_11289;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11289__$1,inst_11286);
} else {
if((state_val_11290 === (12))){
var _ = (function (){var statearr_11346 = state_11289;
(statearr_11346[(4)] = cljs.core.rest.call(null,(state_11289[(4)])));

return statearr_11346;
})();
var state_11289__$1 = state_11289;
var ex11333 = (state_11289__$1[(2)]);
var statearr_11347_11448 = state_11289__$1;
(statearr_11347_11448[(5)] = ex11333);


if((ex11333 instanceof Object)){
var statearr_11350_11449 = state_11289__$1;
(statearr_11350_11449[(1)] = (11));

(statearr_11350_11449[(5)] = null);

} else {
throw ex11333;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11290 === (2))){
var inst_11224 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_11226 = cnt;
var inst_11227 = (0);
var state_11289__$1 = (function (){var statearr_11354 = state_11289;
(statearr_11354[(11)] = inst_11224);

(statearr_11354[(8)] = inst_11226);

(statearr_11354[(7)] = inst_11227);

return statearr_11354;
})();
var statearr_11355_11450 = state_11289__$1;
(statearr_11355_11450[(2)] = null);

(statearr_11355_11450[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11290 === (11))){
var inst_11243 = (state_11289[(2)]);
var inst_11244 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_11289__$1 = (function (){var statearr_11359 = state_11289;
(statearr_11359[(12)] = inst_11243);

return statearr_11359;
})();
var statearr_11360_11454 = state_11289__$1;
(statearr_11360_11454[(2)] = inst_11244);

(statearr_11360_11454[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11290 === (9))){
var inst_11227 = (state_11289[(7)]);
var _ = (function (){var statearr_11361 = state_11289;
(statearr_11361[(4)] = cljs.core.cons.call(null,(12),(state_11289[(4)])));

return statearr_11361;
})();
var inst_11250 = chs__$1.call(null,inst_11227);
var inst_11251 = done.call(null,inst_11227);
var inst_11252 = cljs.core.async.take_BANG_.call(null,inst_11250,inst_11251);
var ___$1 = (function (){var statearr_11362 = state_11289;
(statearr_11362[(4)] = cljs.core.rest.call(null,(state_11289[(4)])));

return statearr_11362;
})();
var state_11289__$1 = state_11289;
var statearr_11365_11458 = state_11289__$1;
(statearr_11365_11458[(2)] = inst_11252);

(statearr_11365_11458[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11290 === (5))){
var inst_11262 = (state_11289[(2)]);
var state_11289__$1 = (function (){var statearr_11367 = state_11289;
(statearr_11367[(13)] = inst_11262);

return statearr_11367;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11289__$1,(13),dchan);
} else {
if((state_val_11290 === (14))){
var inst_11273 = cljs.core.async.close_BANG_.call(null,out);
var state_11289__$1 = state_11289;
var statearr_11368_11460 = state_11289__$1;
(statearr_11368_11460[(2)] = inst_11273);

(statearr_11368_11460[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11290 === (16))){
var inst_11284 = (state_11289[(2)]);
var state_11289__$1 = state_11289;
var statearr_11369_11466 = state_11289__$1;
(statearr_11369_11466[(2)] = inst_11284);

(statearr_11369_11466[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11290 === (10))){
var inst_11227 = (state_11289[(7)]);
var inst_11255 = (state_11289[(2)]);
var inst_11256 = (inst_11227 + (1));
var inst_11227__$1 = inst_11256;
var state_11289__$1 = (function (){var statearr_11372 = state_11289;
(statearr_11372[(14)] = inst_11255);

(statearr_11372[(7)] = inst_11227__$1);

return statearr_11372;
})();
var statearr_11374_11469 = state_11289__$1;
(statearr_11374_11469[(2)] = null);

(statearr_11374_11469[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11290 === (8))){
var inst_11260 = (state_11289[(2)]);
var state_11289__$1 = state_11289;
var statearr_11375_11471 = state_11289__$1;
(statearr_11375_11471[(2)] = inst_11260);

(statearr_11375_11471[(1)] = (5));


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
var cljs$core$async$state_machine__9364__auto__ = null;
var cljs$core$async$state_machine__9364__auto____0 = (function (){
var statearr_11376 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_11376[(0)] = cljs$core$async$state_machine__9364__auto__);

(statearr_11376[(1)] = (1));

return statearr_11376;
});
var cljs$core$async$state_machine__9364__auto____1 = (function (state_11289){
while(true){
var ret_value__9365__auto__ = (function (){try{while(true){
var result__9366__auto__ = switch__9363__auto__.call(null,state_11289);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9366__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9366__auto__;
}
break;
}
}catch (e11377){var ex__9367__auto__ = e11377;
var statearr_11378_11474 = state_11289;
(statearr_11378_11474[(2)] = ex__9367__auto__);


if(cljs.core.seq.call(null,(state_11289[(4)]))){
var statearr_11381_11475 = state_11289;
(statearr_11381_11475[(1)] = cljs.core.first.call(null,(state_11289[(4)])));

} else {
throw ex__9367__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9365__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11477 = state_11289;
state_11289 = G__11477;
continue;
} else {
return ret_value__9365__auto__;
}
break;
}
});
cljs$core$async$state_machine__9364__auto__ = function(state_11289){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__9364__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__9364__auto____1.call(this,state_11289);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__9364__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__9364__auto____0;
cljs$core$async$state_machine__9364__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__9364__auto____1;
return cljs$core$async$state_machine__9364__auto__;
})()
})();
var state__9546__auto__ = (function (){var statearr_11383 = f__9545__auto__.call(null);
(statearr_11383[(6)] = c__9544__auto___11397);

return statearr_11383;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9546__auto__);
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
var G__11390 = arguments.length;
switch (G__11390) {
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
var c__9544__auto___11493 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__9545__auto__ = (function (){var switch__9363__auto__ = (function (state_11436){
var state_val_11437 = (state_11436[(1)]);
if((state_val_11437 === (7))){
var inst_11412 = (state_11436[(7)]);
var inst_11413 = (state_11436[(8)]);
var inst_11412__$1 = (state_11436[(2)]);
var inst_11413__$1 = cljs.core.nth.call(null,inst_11412__$1,(0),null);
var inst_11414 = cljs.core.nth.call(null,inst_11412__$1,(1),null);
var inst_11415 = (inst_11413__$1 == null);
var state_11436__$1 = (function (){var statearr_11451 = state_11436;
(statearr_11451[(7)] = inst_11412__$1);

(statearr_11451[(8)] = inst_11413__$1);

(statearr_11451[(9)] = inst_11414);

return statearr_11451;
})();
if(cljs.core.truth_(inst_11415)){
var statearr_11452_11502 = state_11436__$1;
(statearr_11452_11502[(1)] = (8));

} else {
var statearr_11453_11504 = state_11436__$1;
(statearr_11453_11504[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11437 === (1))){
var inst_11401 = cljs.core.vec.call(null,chs);
var inst_11402 = inst_11401;
var state_11436__$1 = (function (){var statearr_11455 = state_11436;
(statearr_11455[(10)] = inst_11402);

return statearr_11455;
})();
var statearr_11456_11505 = state_11436__$1;
(statearr_11456_11505[(2)] = null);

(statearr_11456_11505[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11437 === (4))){
var inst_11402 = (state_11436[(10)]);
var state_11436__$1 = state_11436;
return cljs.core.async.ioc_alts_BANG_.call(null,state_11436__$1,(7),inst_11402);
} else {
if((state_val_11437 === (6))){
var inst_11431 = (state_11436[(2)]);
var state_11436__$1 = state_11436;
var statearr_11457_11506 = state_11436__$1;
(statearr_11457_11506[(2)] = inst_11431);

(statearr_11457_11506[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11437 === (3))){
var inst_11433 = (state_11436[(2)]);
var state_11436__$1 = state_11436;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11436__$1,inst_11433);
} else {
if((state_val_11437 === (2))){
var inst_11402 = (state_11436[(10)]);
var inst_11405 = cljs.core.count.call(null,inst_11402);
var inst_11406 = (inst_11405 > (0));
var state_11436__$1 = state_11436;
if(cljs.core.truth_(inst_11406)){
var statearr_11462_11512 = state_11436__$1;
(statearr_11462_11512[(1)] = (4));

} else {
var statearr_11465_11515 = state_11436__$1;
(statearr_11465_11515[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11437 === (11))){
var inst_11402 = (state_11436[(10)]);
var inst_11423 = (state_11436[(2)]);
var tmp11459 = inst_11402;
var inst_11402__$1 = tmp11459;
var state_11436__$1 = (function (){var statearr_11468 = state_11436;
(statearr_11468[(11)] = inst_11423);

(statearr_11468[(10)] = inst_11402__$1);

return statearr_11468;
})();
var statearr_11470_11521 = state_11436__$1;
(statearr_11470_11521[(2)] = null);

(statearr_11470_11521[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11437 === (9))){
var inst_11413 = (state_11436[(8)]);
var state_11436__$1 = state_11436;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11436__$1,(11),out,inst_11413);
} else {
if((state_val_11437 === (5))){
var inst_11429 = cljs.core.async.close_BANG_.call(null,out);
var state_11436__$1 = state_11436;
var statearr_11476_11538 = state_11436__$1;
(statearr_11476_11538[(2)] = inst_11429);

(statearr_11476_11538[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11437 === (10))){
var inst_11427 = (state_11436[(2)]);
var state_11436__$1 = state_11436;
var statearr_11478_11541 = state_11436__$1;
(statearr_11478_11541[(2)] = inst_11427);

(statearr_11478_11541[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11437 === (8))){
var inst_11402 = (state_11436[(10)]);
var inst_11412 = (state_11436[(7)]);
var inst_11413 = (state_11436[(8)]);
var inst_11414 = (state_11436[(9)]);
var inst_11417 = (function (){var cs = inst_11402;
var vec__11408 = inst_11412;
var v = inst_11413;
var c = inst_11414;
return (function (p1__11388_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__11388_SHARP_);
});
})();
var inst_11418 = cljs.core.filterv.call(null,inst_11417,inst_11402);
var inst_11402__$1 = inst_11418;
var state_11436__$1 = (function (){var statearr_11482 = state_11436;
(statearr_11482[(10)] = inst_11402__$1);

return statearr_11482;
})();
var statearr_11483_11546 = state_11436__$1;
(statearr_11483_11546[(2)] = null);

(statearr_11483_11546[(1)] = (2));


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
var cljs$core$async$state_machine__9364__auto__ = null;
var cljs$core$async$state_machine__9364__auto____0 = (function (){
var statearr_11484 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_11484[(0)] = cljs$core$async$state_machine__9364__auto__);

(statearr_11484[(1)] = (1));

return statearr_11484;
});
var cljs$core$async$state_machine__9364__auto____1 = (function (state_11436){
while(true){
var ret_value__9365__auto__ = (function (){try{while(true){
var result__9366__auto__ = switch__9363__auto__.call(null,state_11436);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9366__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9366__auto__;
}
break;
}
}catch (e11485){var ex__9367__auto__ = e11485;
var statearr_11486_11549 = state_11436;
(statearr_11486_11549[(2)] = ex__9367__auto__);


if(cljs.core.seq.call(null,(state_11436[(4)]))){
var statearr_11487_11551 = state_11436;
(statearr_11487_11551[(1)] = cljs.core.first.call(null,(state_11436[(4)])));

} else {
throw ex__9367__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9365__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11552 = state_11436;
state_11436 = G__11552;
continue;
} else {
return ret_value__9365__auto__;
}
break;
}
});
cljs$core$async$state_machine__9364__auto__ = function(state_11436){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__9364__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__9364__auto____1.call(this,state_11436);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__9364__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__9364__auto____0;
cljs$core$async$state_machine__9364__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__9364__auto____1;
return cljs$core$async$state_machine__9364__auto__;
})()
})();
var state__9546__auto__ = (function (){var statearr_11489 = f__9545__auto__.call(null);
(statearr_11489[(6)] = c__9544__auto___11493);

return statearr_11489;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9546__auto__);
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
var G__11495 = arguments.length;
switch (G__11495) {
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
var c__9544__auto___11573 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__9545__auto__ = (function (){var switch__9363__auto__ = (function (state_11536){
var state_val_11537 = (state_11536[(1)]);
if((state_val_11537 === (7))){
var inst_11514 = (state_11536[(7)]);
var inst_11514__$1 = (state_11536[(2)]);
var inst_11516 = (inst_11514__$1 == null);
var inst_11517 = cljs.core.not.call(null,inst_11516);
var state_11536__$1 = (function (){var statearr_11542 = state_11536;
(statearr_11542[(7)] = inst_11514__$1);

return statearr_11542;
})();
if(inst_11517){
var statearr_11543_11574 = state_11536__$1;
(statearr_11543_11574[(1)] = (8));

} else {
var statearr_11544_11575 = state_11536__$1;
(statearr_11544_11575[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11537 === (1))){
var inst_11508 = (0);
var state_11536__$1 = (function (){var statearr_11545 = state_11536;
(statearr_11545[(8)] = inst_11508);

return statearr_11545;
})();
var statearr_11547_11578 = state_11536__$1;
(statearr_11547_11578[(2)] = null);

(statearr_11547_11578[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11537 === (4))){
var state_11536__$1 = state_11536;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11536__$1,(7),ch);
} else {
if((state_val_11537 === (6))){
var inst_11531 = (state_11536[(2)]);
var state_11536__$1 = state_11536;
var statearr_11548_11579 = state_11536__$1;
(statearr_11548_11579[(2)] = inst_11531);

(statearr_11548_11579[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11537 === (3))){
var inst_11533 = (state_11536[(2)]);
var inst_11534 = cljs.core.async.close_BANG_.call(null,out);
var state_11536__$1 = (function (){var statearr_11550 = state_11536;
(statearr_11550[(9)] = inst_11533);

return statearr_11550;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11536__$1,inst_11534);
} else {
if((state_val_11537 === (2))){
var inst_11508 = (state_11536[(8)]);
var inst_11510 = (inst_11508 < n);
var state_11536__$1 = state_11536;
if(cljs.core.truth_(inst_11510)){
var statearr_11553_11581 = state_11536__$1;
(statearr_11553_11581[(1)] = (4));

} else {
var statearr_11554_11582 = state_11536__$1;
(statearr_11554_11582[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11537 === (11))){
var inst_11508 = (state_11536[(8)]);
var inst_11523 = (state_11536[(2)]);
var inst_11524 = (inst_11508 + (1));
var inst_11508__$1 = inst_11524;
var state_11536__$1 = (function (){var statearr_11555 = state_11536;
(statearr_11555[(10)] = inst_11523);

(statearr_11555[(8)] = inst_11508__$1);

return statearr_11555;
})();
var statearr_11556_11586 = state_11536__$1;
(statearr_11556_11586[(2)] = null);

(statearr_11556_11586[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11537 === (9))){
var state_11536__$1 = state_11536;
var statearr_11557_11587 = state_11536__$1;
(statearr_11557_11587[(2)] = null);

(statearr_11557_11587[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11537 === (5))){
var state_11536__$1 = state_11536;
var statearr_11558_11588 = state_11536__$1;
(statearr_11558_11588[(2)] = null);

(statearr_11558_11588[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11537 === (10))){
var inst_11528 = (state_11536[(2)]);
var state_11536__$1 = state_11536;
var statearr_11559_11589 = state_11536__$1;
(statearr_11559_11589[(2)] = inst_11528);

(statearr_11559_11589[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11537 === (8))){
var inst_11514 = (state_11536[(7)]);
var state_11536__$1 = state_11536;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11536__$1,(11),out,inst_11514);
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
var cljs$core$async$state_machine__9364__auto__ = null;
var cljs$core$async$state_machine__9364__auto____0 = (function (){
var statearr_11562 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_11562[(0)] = cljs$core$async$state_machine__9364__auto__);

(statearr_11562[(1)] = (1));

return statearr_11562;
});
var cljs$core$async$state_machine__9364__auto____1 = (function (state_11536){
while(true){
var ret_value__9365__auto__ = (function (){try{while(true){
var result__9366__auto__ = switch__9363__auto__.call(null,state_11536);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9366__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9366__auto__;
}
break;
}
}catch (e11563){var ex__9367__auto__ = e11563;
var statearr_11564_11593 = state_11536;
(statearr_11564_11593[(2)] = ex__9367__auto__);


if(cljs.core.seq.call(null,(state_11536[(4)]))){
var statearr_11566_11594 = state_11536;
(statearr_11566_11594[(1)] = cljs.core.first.call(null,(state_11536[(4)])));

} else {
throw ex__9367__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9365__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11595 = state_11536;
state_11536 = G__11595;
continue;
} else {
return ret_value__9365__auto__;
}
break;
}
});
cljs$core$async$state_machine__9364__auto__ = function(state_11536){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__9364__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__9364__auto____1.call(this,state_11536);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__9364__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__9364__auto____0;
cljs$core$async$state_machine__9364__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__9364__auto____1;
return cljs$core$async$state_machine__9364__auto__;
})()
})();
var state__9546__auto__ = (function (){var statearr_11567 = f__9545__auto__.call(null);
(statearr_11567[(6)] = c__9544__auto___11573);

return statearr_11567;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9546__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async11569 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async11569 = (function (f,ch,meta11570){
this.f = f;
this.ch = ch;
this.meta11570 = meta11570;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async11569.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11571,meta11570__$1){
var self__ = this;
var _11571__$1 = this;
return (new cljs.core.async.t_cljs$core$async11569(self__.f,self__.ch,meta11570__$1));
}));

(cljs.core.async.t_cljs$core$async11569.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11571){
var self__ = this;
var _11571__$1 = this;
return self__.meta11570;
}));

(cljs.core.async.t_cljs$core$async11569.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async11569.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async11569.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async11569.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async11569.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async11583 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async11583 = (function (f,ch,meta11570,_,fn1,meta11584){
this.f = f;
this.ch = ch;
this.meta11570 = meta11570;
this._ = _;
this.fn1 = fn1;
this.meta11584 = meta11584;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async11583.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11585,meta11584__$1){
var self__ = this;
var _11585__$1 = this;
return (new cljs.core.async.t_cljs$core$async11583(self__.f,self__.ch,self__.meta11570,self__._,self__.fn1,meta11584__$1));
}));

(cljs.core.async.t_cljs$core$async11583.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11585){
var self__ = this;
var _11585__$1 = this;
return self__.meta11584;
}));

(cljs.core.async.t_cljs$core$async11583.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async11583.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
}));

(cljs.core.async.t_cljs$core$async11583.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async11583.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return (function (p1__11568_SHARP_){
return f1.call(null,(((p1__11568_SHARP_ == null))?null:self__.f.call(null,p1__11568_SHARP_)));
});
}));

(cljs.core.async.t_cljs$core$async11583.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta11570","meta11570",-157952667,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async11569","cljs.core.async/t_cljs$core$async11569",-1796000948,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta11584","meta11584",1868907951,null)], null);
}));

(cljs.core.async.t_cljs$core$async11583.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async11583.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async11583");

(cljs.core.async.t_cljs$core$async11583.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write.call(null,writer__5288__auto__,"cljs.core.async/t_cljs$core$async11583");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async11583.
 */
cljs.core.async.__GT_t_cljs$core$async11583 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async11583(f__$1,ch__$1,meta11570__$1,___$2,fn1__$1,meta11584){
return (new cljs.core.async.t_cljs$core$async11583(f__$1,ch__$1,meta11570__$1,___$2,fn1__$1,meta11584));
});

}

return (new cljs.core.async.t_cljs$core$async11583(self__.f,self__.ch,self__.meta11570,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
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

(cljs.core.async.t_cljs$core$async11569.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async11569.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async11569.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta11570","meta11570",-157952667,null)], null);
}));

(cljs.core.async.t_cljs$core$async11569.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async11569.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async11569");

(cljs.core.async.t_cljs$core$async11569.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write.call(null,writer__5288__auto__,"cljs.core.async/t_cljs$core$async11569");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async11569.
 */
cljs.core.async.__GT_t_cljs$core$async11569 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async11569(f__$1,ch__$1,meta11570){
return (new cljs.core.async.t_cljs$core$async11569(f__$1,ch__$1,meta11570));
});

}

return (new cljs.core.async.t_cljs$core$async11569(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async11599 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async11599 = (function (f,ch,meta11600){
this.f = f;
this.ch = ch;
this.meta11600 = meta11600;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async11599.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11601,meta11600__$1){
var self__ = this;
var _11601__$1 = this;
return (new cljs.core.async.t_cljs$core$async11599(self__.f,self__.ch,meta11600__$1));
}));

(cljs.core.async.t_cljs$core$async11599.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11601){
var self__ = this;
var _11601__$1 = this;
return self__.meta11600;
}));

(cljs.core.async.t_cljs$core$async11599.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async11599.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async11599.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async11599.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async11599.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async11599.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
}));

(cljs.core.async.t_cljs$core$async11599.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta11600","meta11600",-1589125759,null)], null);
}));

(cljs.core.async.t_cljs$core$async11599.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async11599.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async11599");

(cljs.core.async.t_cljs$core$async11599.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write.call(null,writer__5288__auto__,"cljs.core.async/t_cljs$core$async11599");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async11599.
 */
cljs.core.async.__GT_t_cljs$core$async11599 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async11599(f__$1,ch__$1,meta11600){
return (new cljs.core.async.t_cljs$core$async11599(f__$1,ch__$1,meta11600));
});

}

return (new cljs.core.async.t_cljs$core$async11599(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async11612 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async11612 = (function (p,ch,meta11613){
this.p = p;
this.ch = ch;
this.meta11613 = meta11613;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async11612.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11614,meta11613__$1){
var self__ = this;
var _11614__$1 = this;
return (new cljs.core.async.t_cljs$core$async11612(self__.p,self__.ch,meta11613__$1));
}));

(cljs.core.async.t_cljs$core$async11612.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11614){
var self__ = this;
var _11614__$1 = this;
return self__.meta11613;
}));

(cljs.core.async.t_cljs$core$async11612.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async11612.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async11612.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async11612.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async11612.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async11612.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async11612.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async11612.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta11613","meta11613",1629824584,null)], null);
}));

(cljs.core.async.t_cljs$core$async11612.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async11612.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async11612");

(cljs.core.async.t_cljs$core$async11612.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write.call(null,writer__5288__auto__,"cljs.core.async/t_cljs$core$async11612");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async11612.
 */
cljs.core.async.__GT_t_cljs$core$async11612 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async11612(p__$1,ch__$1,meta11613){
return (new cljs.core.async.t_cljs$core$async11612(p__$1,ch__$1,meta11613));
});

}

return (new cljs.core.async.t_cljs$core$async11612(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__11623 = arguments.length;
switch (G__11623) {
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
var c__9544__auto___11674 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__9545__auto__ = (function (){var switch__9363__auto__ = (function (state_11644){
var state_val_11645 = (state_11644[(1)]);
if((state_val_11645 === (7))){
var inst_11640 = (state_11644[(2)]);
var state_11644__$1 = state_11644;
var statearr_11646_11676 = state_11644__$1;
(statearr_11646_11676[(2)] = inst_11640);

(statearr_11646_11676[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11645 === (1))){
var state_11644__$1 = state_11644;
var statearr_11647_11677 = state_11644__$1;
(statearr_11647_11677[(2)] = null);

(statearr_11647_11677[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11645 === (4))){
var inst_11626 = (state_11644[(7)]);
var inst_11626__$1 = (state_11644[(2)]);
var inst_11627 = (inst_11626__$1 == null);
var state_11644__$1 = (function (){var statearr_11648 = state_11644;
(statearr_11648[(7)] = inst_11626__$1);

return statearr_11648;
})();
if(cljs.core.truth_(inst_11627)){
var statearr_11649_11678 = state_11644__$1;
(statearr_11649_11678[(1)] = (5));

} else {
var statearr_11650_11679 = state_11644__$1;
(statearr_11650_11679[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11645 === (6))){
var inst_11626 = (state_11644[(7)]);
var inst_11631 = p.call(null,inst_11626);
var state_11644__$1 = state_11644;
if(cljs.core.truth_(inst_11631)){
var statearr_11651_11685 = state_11644__$1;
(statearr_11651_11685[(1)] = (8));

} else {
var statearr_11652_11692 = state_11644__$1;
(statearr_11652_11692[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11645 === (3))){
var inst_11642 = (state_11644[(2)]);
var state_11644__$1 = state_11644;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11644__$1,inst_11642);
} else {
if((state_val_11645 === (2))){
var state_11644__$1 = state_11644;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11644__$1,(4),ch);
} else {
if((state_val_11645 === (11))){
var inst_11634 = (state_11644[(2)]);
var state_11644__$1 = state_11644;
var statearr_11655_11706 = state_11644__$1;
(statearr_11655_11706[(2)] = inst_11634);

(statearr_11655_11706[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11645 === (9))){
var state_11644__$1 = state_11644;
var statearr_11656_11713 = state_11644__$1;
(statearr_11656_11713[(2)] = null);

(statearr_11656_11713[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11645 === (5))){
var inst_11629 = cljs.core.async.close_BANG_.call(null,out);
var state_11644__$1 = state_11644;
var statearr_11657_11718 = state_11644__$1;
(statearr_11657_11718[(2)] = inst_11629);

(statearr_11657_11718[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11645 === (10))){
var inst_11637 = (state_11644[(2)]);
var state_11644__$1 = (function (){var statearr_11658 = state_11644;
(statearr_11658[(8)] = inst_11637);

return statearr_11658;
})();
var statearr_11659_11727 = state_11644__$1;
(statearr_11659_11727[(2)] = null);

(statearr_11659_11727[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11645 === (8))){
var inst_11626 = (state_11644[(7)]);
var state_11644__$1 = state_11644;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11644__$1,(11),out,inst_11626);
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
var cljs$core$async$state_machine__9364__auto__ = null;
var cljs$core$async$state_machine__9364__auto____0 = (function (){
var statearr_11663 = [null,null,null,null,null,null,null,null,null];
(statearr_11663[(0)] = cljs$core$async$state_machine__9364__auto__);

(statearr_11663[(1)] = (1));

return statearr_11663;
});
var cljs$core$async$state_machine__9364__auto____1 = (function (state_11644){
while(true){
var ret_value__9365__auto__ = (function (){try{while(true){
var result__9366__auto__ = switch__9363__auto__.call(null,state_11644);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9366__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9366__auto__;
}
break;
}
}catch (e11664){var ex__9367__auto__ = e11664;
var statearr_11665_11753 = state_11644;
(statearr_11665_11753[(2)] = ex__9367__auto__);


if(cljs.core.seq.call(null,(state_11644[(4)]))){
var statearr_11666_11755 = state_11644;
(statearr_11666_11755[(1)] = cljs.core.first.call(null,(state_11644[(4)])));

} else {
throw ex__9367__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9365__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11757 = state_11644;
state_11644 = G__11757;
continue;
} else {
return ret_value__9365__auto__;
}
break;
}
});
cljs$core$async$state_machine__9364__auto__ = function(state_11644){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__9364__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__9364__auto____1.call(this,state_11644);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__9364__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__9364__auto____0;
cljs$core$async$state_machine__9364__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__9364__auto____1;
return cljs$core$async$state_machine__9364__auto__;
})()
})();
var state__9546__auto__ = (function (){var statearr_11670 = f__9545__auto__.call(null);
(statearr_11670[(6)] = c__9544__auto___11674);

return statearr_11670;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9546__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__11673 = arguments.length;
switch (G__11673) {
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
var c__9544__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__9545__auto__ = (function (){var switch__9363__auto__ = (function (state_11751){
var state_val_11752 = (state_11751[(1)]);
if((state_val_11752 === (7))){
var inst_11747 = (state_11751[(2)]);
var state_11751__$1 = state_11751;
var statearr_11754_11804 = state_11751__$1;
(statearr_11754_11804[(2)] = inst_11747);

(statearr_11754_11804[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11752 === (20))){
var inst_11711 = (state_11751[(7)]);
var inst_11726 = (state_11751[(2)]);
var inst_11728 = cljs.core.next.call(null,inst_11711);
var inst_11695 = inst_11728;
var inst_11696 = null;
var inst_11697 = (0);
var inst_11698 = (0);
var state_11751__$1 = (function (){var statearr_11756 = state_11751;
(statearr_11756[(8)] = inst_11726);

(statearr_11756[(9)] = inst_11695);

(statearr_11756[(10)] = inst_11696);

(statearr_11756[(11)] = inst_11697);

(statearr_11756[(12)] = inst_11698);

return statearr_11756;
})();
var statearr_11758_11805 = state_11751__$1;
(statearr_11758_11805[(2)] = null);

(statearr_11758_11805[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11752 === (1))){
var state_11751__$1 = state_11751;
var statearr_11759_11806 = state_11751__$1;
(statearr_11759_11806[(2)] = null);

(statearr_11759_11806[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11752 === (4))){
var inst_11682 = (state_11751[(13)]);
var inst_11682__$1 = (state_11751[(2)]);
var inst_11683 = (inst_11682__$1 == null);
var state_11751__$1 = (function (){var statearr_11761 = state_11751;
(statearr_11761[(13)] = inst_11682__$1);

return statearr_11761;
})();
if(cljs.core.truth_(inst_11683)){
var statearr_11764_11807 = state_11751__$1;
(statearr_11764_11807[(1)] = (5));

} else {
var statearr_11765_11809 = state_11751__$1;
(statearr_11765_11809[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11752 === (15))){
var state_11751__$1 = state_11751;
var statearr_11769_11810 = state_11751__$1;
(statearr_11769_11810[(2)] = null);

(statearr_11769_11810[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11752 === (21))){
var state_11751__$1 = state_11751;
var statearr_11770_11812 = state_11751__$1;
(statearr_11770_11812[(2)] = null);

(statearr_11770_11812[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11752 === (13))){
var inst_11698 = (state_11751[(12)]);
var inst_11695 = (state_11751[(9)]);
var inst_11696 = (state_11751[(10)]);
var inst_11697 = (state_11751[(11)]);
var inst_11705 = (state_11751[(2)]);
var inst_11707 = (inst_11698 + (1));
var tmp11766 = inst_11695;
var tmp11767 = inst_11696;
var tmp11768 = inst_11697;
var inst_11695__$1 = tmp11766;
var inst_11696__$1 = tmp11767;
var inst_11697__$1 = tmp11768;
var inst_11698__$1 = inst_11707;
var state_11751__$1 = (function (){var statearr_11772 = state_11751;
(statearr_11772[(14)] = inst_11705);

(statearr_11772[(9)] = inst_11695__$1);

(statearr_11772[(10)] = inst_11696__$1);

(statearr_11772[(11)] = inst_11697__$1);

(statearr_11772[(12)] = inst_11698__$1);

return statearr_11772;
})();
var statearr_11773_11813 = state_11751__$1;
(statearr_11773_11813[(2)] = null);

(statearr_11773_11813[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11752 === (22))){
var state_11751__$1 = state_11751;
var statearr_11774_11814 = state_11751__$1;
(statearr_11774_11814[(2)] = null);

(statearr_11774_11814[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11752 === (6))){
var inst_11682 = (state_11751[(13)]);
var inst_11693 = f.call(null,inst_11682);
var inst_11694 = cljs.core.seq.call(null,inst_11693);
var inst_11695 = inst_11694;
var inst_11696 = null;
var inst_11697 = (0);
var inst_11698 = (0);
var state_11751__$1 = (function (){var statearr_11778 = state_11751;
(statearr_11778[(9)] = inst_11695);

(statearr_11778[(10)] = inst_11696);

(statearr_11778[(11)] = inst_11697);

(statearr_11778[(12)] = inst_11698);

return statearr_11778;
})();
var statearr_11779_11816 = state_11751__$1;
(statearr_11779_11816[(2)] = null);

(statearr_11779_11816[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11752 === (17))){
var inst_11711 = (state_11751[(7)]);
var inst_11716 = cljs.core.chunk_first.call(null,inst_11711);
var inst_11717 = cljs.core.chunk_rest.call(null,inst_11711);
var inst_11719 = cljs.core.count.call(null,inst_11716);
var inst_11695 = inst_11717;
var inst_11696 = inst_11716;
var inst_11697 = inst_11719;
var inst_11698 = (0);
var state_11751__$1 = (function (){var statearr_11780 = state_11751;
(statearr_11780[(9)] = inst_11695);

(statearr_11780[(10)] = inst_11696);

(statearr_11780[(11)] = inst_11697);

(statearr_11780[(12)] = inst_11698);

return statearr_11780;
})();
var statearr_11781_11818 = state_11751__$1;
(statearr_11781_11818[(2)] = null);

(statearr_11781_11818[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11752 === (3))){
var inst_11749 = (state_11751[(2)]);
var state_11751__$1 = state_11751;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11751__$1,inst_11749);
} else {
if((state_val_11752 === (12))){
var inst_11736 = (state_11751[(2)]);
var state_11751__$1 = state_11751;
var statearr_11782_11819 = state_11751__$1;
(statearr_11782_11819[(2)] = inst_11736);

(statearr_11782_11819[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11752 === (2))){
var state_11751__$1 = state_11751;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11751__$1,(4),in$);
} else {
if((state_val_11752 === (23))){
var inst_11745 = (state_11751[(2)]);
var state_11751__$1 = state_11751;
var statearr_11783_11827 = state_11751__$1;
(statearr_11783_11827[(2)] = inst_11745);

(statearr_11783_11827[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11752 === (19))){
var inst_11731 = (state_11751[(2)]);
var state_11751__$1 = state_11751;
var statearr_11784_11844 = state_11751__$1;
(statearr_11784_11844[(2)] = inst_11731);

(statearr_11784_11844[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11752 === (11))){
var inst_11695 = (state_11751[(9)]);
var inst_11711 = (state_11751[(7)]);
var inst_11711__$1 = cljs.core.seq.call(null,inst_11695);
var state_11751__$1 = (function (){var statearr_11785 = state_11751;
(statearr_11785[(7)] = inst_11711__$1);

return statearr_11785;
})();
if(inst_11711__$1){
var statearr_11786_11847 = state_11751__$1;
(statearr_11786_11847[(1)] = (14));

} else {
var statearr_11787_11848 = state_11751__$1;
(statearr_11787_11848[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11752 === (9))){
var inst_11738 = (state_11751[(2)]);
var inst_11739 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_11751__$1 = (function (){var statearr_11788 = state_11751;
(statearr_11788[(15)] = inst_11738);

return statearr_11788;
})();
if(cljs.core.truth_(inst_11739)){
var statearr_11789_11850 = state_11751__$1;
(statearr_11789_11850[(1)] = (21));

} else {
var statearr_11790_11851 = state_11751__$1;
(statearr_11790_11851[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11752 === (5))){
var inst_11686 = cljs.core.async.close_BANG_.call(null,out);
var state_11751__$1 = state_11751;
var statearr_11791_11854 = state_11751__$1;
(statearr_11791_11854[(2)] = inst_11686);

(statearr_11791_11854[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11752 === (14))){
var inst_11711 = (state_11751[(7)]);
var inst_11714 = cljs.core.chunked_seq_QMARK_.call(null,inst_11711);
var state_11751__$1 = state_11751;
if(inst_11714){
var statearr_11792_11855 = state_11751__$1;
(statearr_11792_11855[(1)] = (17));

} else {
var statearr_11793_11857 = state_11751__$1;
(statearr_11793_11857[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11752 === (16))){
var inst_11734 = (state_11751[(2)]);
var state_11751__$1 = state_11751;
var statearr_11794_11859 = state_11751__$1;
(statearr_11794_11859[(2)] = inst_11734);

(statearr_11794_11859[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11752 === (10))){
var inst_11696 = (state_11751[(10)]);
var inst_11698 = (state_11751[(12)]);
var inst_11703 = cljs.core._nth.call(null,inst_11696,inst_11698);
var state_11751__$1 = state_11751;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11751__$1,(13),out,inst_11703);
} else {
if((state_val_11752 === (18))){
var inst_11711 = (state_11751[(7)]);
var inst_11722 = cljs.core.first.call(null,inst_11711);
var state_11751__$1 = state_11751;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11751__$1,(20),out,inst_11722);
} else {
if((state_val_11752 === (8))){
var inst_11698 = (state_11751[(12)]);
var inst_11697 = (state_11751[(11)]);
var inst_11700 = (inst_11698 < inst_11697);
var inst_11701 = inst_11700;
var state_11751__$1 = state_11751;
if(cljs.core.truth_(inst_11701)){
var statearr_11795_11863 = state_11751__$1;
(statearr_11795_11863[(1)] = (10));

} else {
var statearr_11796_11864 = state_11751__$1;
(statearr_11796_11864[(1)] = (11));

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
var cljs$core$async$mapcat_STAR__$_state_machine__9364__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__9364__auto____0 = (function (){
var statearr_11797 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_11797[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__9364__auto__);

(statearr_11797[(1)] = (1));

return statearr_11797;
});
var cljs$core$async$mapcat_STAR__$_state_machine__9364__auto____1 = (function (state_11751){
while(true){
var ret_value__9365__auto__ = (function (){try{while(true){
var result__9366__auto__ = switch__9363__auto__.call(null,state_11751);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9366__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9366__auto__;
}
break;
}
}catch (e11798){var ex__9367__auto__ = e11798;
var statearr_11799_11867 = state_11751;
(statearr_11799_11867[(2)] = ex__9367__auto__);


if(cljs.core.seq.call(null,(state_11751[(4)]))){
var statearr_11800_11868 = state_11751;
(statearr_11800_11868[(1)] = cljs.core.first.call(null,(state_11751[(4)])));

} else {
throw ex__9367__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9365__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11869 = state_11751;
state_11751 = G__11869;
continue;
} else {
return ret_value__9365__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__9364__auto__ = function(state_11751){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__9364__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__9364__auto____1.call(this,state_11751);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__9364__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__9364__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__9364__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__9364__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__9364__auto__;
})()
})();
var state__9546__auto__ = (function (){var statearr_11801 = f__9545__auto__.call(null);
(statearr_11801[(6)] = c__9544__auto__);

return statearr_11801;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9546__auto__);
}));

return c__9544__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__11803 = arguments.length;
switch (G__11803) {
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
var G__11811 = arguments.length;
switch (G__11811) {
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
var G__11817 = arguments.length;
switch (G__11817) {
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
var c__9544__auto___11886 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__9545__auto__ = (function (){var switch__9363__auto__ = (function (state_11845){
var state_val_11846 = (state_11845[(1)]);
if((state_val_11846 === (7))){
var inst_11839 = (state_11845[(2)]);
var state_11845__$1 = state_11845;
var statearr_11849_11887 = state_11845__$1;
(statearr_11849_11887[(2)] = inst_11839);

(statearr_11849_11887[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11846 === (1))){
var inst_11820 = null;
var state_11845__$1 = (function (){var statearr_11852 = state_11845;
(statearr_11852[(7)] = inst_11820);

return statearr_11852;
})();
var statearr_11853_11888 = state_11845__$1;
(statearr_11853_11888[(2)] = null);

(statearr_11853_11888[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11846 === (4))){
var inst_11823 = (state_11845[(8)]);
var inst_11823__$1 = (state_11845[(2)]);
var inst_11824 = (inst_11823__$1 == null);
var inst_11825 = cljs.core.not.call(null,inst_11824);
var state_11845__$1 = (function (){var statearr_11856 = state_11845;
(statearr_11856[(8)] = inst_11823__$1);

return statearr_11856;
})();
if(inst_11825){
var statearr_11858_11889 = state_11845__$1;
(statearr_11858_11889[(1)] = (5));

} else {
var statearr_11860_11890 = state_11845__$1;
(statearr_11860_11890[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11846 === (6))){
var state_11845__$1 = state_11845;
var statearr_11861_11897 = state_11845__$1;
(statearr_11861_11897[(2)] = null);

(statearr_11861_11897[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11846 === (3))){
var inst_11841 = (state_11845[(2)]);
var inst_11842 = cljs.core.async.close_BANG_.call(null,out);
var state_11845__$1 = (function (){var statearr_11862 = state_11845;
(statearr_11862[(9)] = inst_11841);

return statearr_11862;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11845__$1,inst_11842);
} else {
if((state_val_11846 === (2))){
var state_11845__$1 = state_11845;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11845__$1,(4),ch);
} else {
if((state_val_11846 === (11))){
var inst_11823 = (state_11845[(8)]);
var inst_11833 = (state_11845[(2)]);
var inst_11820 = inst_11823;
var state_11845__$1 = (function (){var statearr_11865 = state_11845;
(statearr_11865[(10)] = inst_11833);

(statearr_11865[(7)] = inst_11820);

return statearr_11865;
})();
var statearr_11866_11929 = state_11845__$1;
(statearr_11866_11929[(2)] = null);

(statearr_11866_11929[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11846 === (9))){
var inst_11823 = (state_11845[(8)]);
var state_11845__$1 = state_11845;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11845__$1,(11),out,inst_11823);
} else {
if((state_val_11846 === (5))){
var inst_11823 = (state_11845[(8)]);
var inst_11820 = (state_11845[(7)]);
var inst_11828 = cljs.core._EQ_.call(null,inst_11823,inst_11820);
var state_11845__$1 = state_11845;
if(inst_11828){
var statearr_11871_11932 = state_11845__$1;
(statearr_11871_11932[(1)] = (8));

} else {
var statearr_11872_11933 = state_11845__$1;
(statearr_11872_11933[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11846 === (10))){
var inst_11836 = (state_11845[(2)]);
var state_11845__$1 = state_11845;
var statearr_11874_11935 = state_11845__$1;
(statearr_11874_11935[(2)] = inst_11836);

(statearr_11874_11935[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11846 === (8))){
var inst_11820 = (state_11845[(7)]);
var tmp11870 = inst_11820;
var inst_11820__$1 = tmp11870;
var state_11845__$1 = (function (){var statearr_11875 = state_11845;
(statearr_11875[(7)] = inst_11820__$1);

return statearr_11875;
})();
var statearr_11876_11938 = state_11845__$1;
(statearr_11876_11938[(2)] = null);

(statearr_11876_11938[(1)] = (2));


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
var cljs$core$async$state_machine__9364__auto__ = null;
var cljs$core$async$state_machine__9364__auto____0 = (function (){
var statearr_11878 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_11878[(0)] = cljs$core$async$state_machine__9364__auto__);

(statearr_11878[(1)] = (1));

return statearr_11878;
});
var cljs$core$async$state_machine__9364__auto____1 = (function (state_11845){
while(true){
var ret_value__9365__auto__ = (function (){try{while(true){
var result__9366__auto__ = switch__9363__auto__.call(null,state_11845);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9366__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9366__auto__;
}
break;
}
}catch (e11879){var ex__9367__auto__ = e11879;
var statearr_11880_11940 = state_11845;
(statearr_11880_11940[(2)] = ex__9367__auto__);


if(cljs.core.seq.call(null,(state_11845[(4)]))){
var statearr_11881_11942 = state_11845;
(statearr_11881_11942[(1)] = cljs.core.first.call(null,(state_11845[(4)])));

} else {
throw ex__9367__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9365__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11944 = state_11845;
state_11845 = G__11944;
continue;
} else {
return ret_value__9365__auto__;
}
break;
}
});
cljs$core$async$state_machine__9364__auto__ = function(state_11845){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__9364__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__9364__auto____1.call(this,state_11845);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__9364__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__9364__auto____0;
cljs$core$async$state_machine__9364__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__9364__auto____1;
return cljs$core$async$state_machine__9364__auto__;
})()
})();
var state__9546__auto__ = (function (){var statearr_11882 = f__9545__auto__.call(null);
(statearr_11882[(6)] = c__9544__auto___11886);

return statearr_11882;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9546__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__11885 = arguments.length;
switch (G__11885) {
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
var c__9544__auto___11968 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__9545__auto__ = (function (){var switch__9363__auto__ = (function (state_11930){
var state_val_11931 = (state_11930[(1)]);
if((state_val_11931 === (7))){
var inst_11925 = (state_11930[(2)]);
var state_11930__$1 = state_11930;
var statearr_11934_11969 = state_11930__$1;
(statearr_11934_11969[(2)] = inst_11925);

(statearr_11934_11969[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11931 === (1))){
var inst_11891 = (new Array(n));
var inst_11892 = inst_11891;
var inst_11893 = (0);
var state_11930__$1 = (function (){var statearr_11936 = state_11930;
(statearr_11936[(7)] = inst_11892);

(statearr_11936[(8)] = inst_11893);

return statearr_11936;
})();
var statearr_11937_11970 = state_11930__$1;
(statearr_11937_11970[(2)] = null);

(statearr_11937_11970[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11931 === (4))){
var inst_11896 = (state_11930[(9)]);
var inst_11896__$1 = (state_11930[(2)]);
var inst_11898 = (inst_11896__$1 == null);
var inst_11899 = cljs.core.not.call(null,inst_11898);
var state_11930__$1 = (function (){var statearr_11939 = state_11930;
(statearr_11939[(9)] = inst_11896__$1);

return statearr_11939;
})();
if(inst_11899){
var statearr_11941_11977 = state_11930__$1;
(statearr_11941_11977[(1)] = (5));

} else {
var statearr_11943_11978 = state_11930__$1;
(statearr_11943_11978[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11931 === (15))){
var inst_11919 = (state_11930[(2)]);
var state_11930__$1 = state_11930;
var statearr_11945_11983 = state_11930__$1;
(statearr_11945_11983[(2)] = inst_11919);

(statearr_11945_11983[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11931 === (13))){
var state_11930__$1 = state_11930;
var statearr_11946_11987 = state_11930__$1;
(statearr_11946_11987[(2)] = null);

(statearr_11946_11987[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11931 === (6))){
var inst_11893 = (state_11930[(8)]);
var inst_11915 = (inst_11893 > (0));
var state_11930__$1 = state_11930;
if(cljs.core.truth_(inst_11915)){
var statearr_11947_12002 = state_11930__$1;
(statearr_11947_12002[(1)] = (12));

} else {
var statearr_11948_12005 = state_11930__$1;
(statearr_11948_12005[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11931 === (3))){
var inst_11927 = (state_11930[(2)]);
var state_11930__$1 = state_11930;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11930__$1,inst_11927);
} else {
if((state_val_11931 === (12))){
var inst_11892 = (state_11930[(7)]);
var inst_11917 = cljs.core.vec.call(null,inst_11892);
var state_11930__$1 = state_11930;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11930__$1,(15),out,inst_11917);
} else {
if((state_val_11931 === (2))){
var state_11930__$1 = state_11930;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11930__$1,(4),ch);
} else {
if((state_val_11931 === (11))){
var inst_11909 = (state_11930[(2)]);
var inst_11910 = (new Array(n));
var inst_11892 = inst_11910;
var inst_11893 = (0);
var state_11930__$1 = (function (){var statearr_11949 = state_11930;
(statearr_11949[(10)] = inst_11909);

(statearr_11949[(7)] = inst_11892);

(statearr_11949[(8)] = inst_11893);

return statearr_11949;
})();
var statearr_11950_12023 = state_11930__$1;
(statearr_11950_12023[(2)] = null);

(statearr_11950_12023[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11931 === (9))){
var inst_11892 = (state_11930[(7)]);
var inst_11907 = cljs.core.vec.call(null,inst_11892);
var state_11930__$1 = state_11930;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11930__$1,(11),out,inst_11907);
} else {
if((state_val_11931 === (5))){
var inst_11892 = (state_11930[(7)]);
var inst_11893 = (state_11930[(8)]);
var inst_11896 = (state_11930[(9)]);
var inst_11902 = (state_11930[(11)]);
var inst_11901 = (inst_11892[inst_11893] = inst_11896);
var inst_11902__$1 = (inst_11893 + (1));
var inst_11903 = (inst_11902__$1 < n);
var state_11930__$1 = (function (){var statearr_11951 = state_11930;
(statearr_11951[(12)] = inst_11901);

(statearr_11951[(11)] = inst_11902__$1);

return statearr_11951;
})();
if(cljs.core.truth_(inst_11903)){
var statearr_11952_12027 = state_11930__$1;
(statearr_11952_12027[(1)] = (8));

} else {
var statearr_11953_12028 = state_11930__$1;
(statearr_11953_12028[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11931 === (14))){
var inst_11922 = (state_11930[(2)]);
var inst_11923 = cljs.core.async.close_BANG_.call(null,out);
var state_11930__$1 = (function (){var statearr_11955 = state_11930;
(statearr_11955[(13)] = inst_11922);

return statearr_11955;
})();
var statearr_11956_12029 = state_11930__$1;
(statearr_11956_12029[(2)] = inst_11923);

(statearr_11956_12029[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11931 === (10))){
var inst_11913 = (state_11930[(2)]);
var state_11930__$1 = state_11930;
var statearr_11957_12031 = state_11930__$1;
(statearr_11957_12031[(2)] = inst_11913);

(statearr_11957_12031[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11931 === (8))){
var inst_11892 = (state_11930[(7)]);
var inst_11902 = (state_11930[(11)]);
var tmp11954 = inst_11892;
var inst_11892__$1 = tmp11954;
var inst_11893 = inst_11902;
var state_11930__$1 = (function (){var statearr_11958 = state_11930;
(statearr_11958[(7)] = inst_11892__$1);

(statearr_11958[(8)] = inst_11893);

return statearr_11958;
})();
var statearr_11959_12034 = state_11930__$1;
(statearr_11959_12034[(2)] = null);

(statearr_11959_12034[(1)] = (2));


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
var cljs$core$async$state_machine__9364__auto__ = null;
var cljs$core$async$state_machine__9364__auto____0 = (function (){
var statearr_11960 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_11960[(0)] = cljs$core$async$state_machine__9364__auto__);

(statearr_11960[(1)] = (1));

return statearr_11960;
});
var cljs$core$async$state_machine__9364__auto____1 = (function (state_11930){
while(true){
var ret_value__9365__auto__ = (function (){try{while(true){
var result__9366__auto__ = switch__9363__auto__.call(null,state_11930);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9366__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9366__auto__;
}
break;
}
}catch (e11961){var ex__9367__auto__ = e11961;
var statearr_11962_12036 = state_11930;
(statearr_11962_12036[(2)] = ex__9367__auto__);


if(cljs.core.seq.call(null,(state_11930[(4)]))){
var statearr_11963_12038 = state_11930;
(statearr_11963_12038[(1)] = cljs.core.first.call(null,(state_11930[(4)])));

} else {
throw ex__9367__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9365__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12040 = state_11930;
state_11930 = G__12040;
continue;
} else {
return ret_value__9365__auto__;
}
break;
}
});
cljs$core$async$state_machine__9364__auto__ = function(state_11930){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__9364__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__9364__auto____1.call(this,state_11930);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__9364__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__9364__auto____0;
cljs$core$async$state_machine__9364__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__9364__auto____1;
return cljs$core$async$state_machine__9364__auto__;
})()
})();
var state__9546__auto__ = (function (){var statearr_11964 = f__9545__auto__.call(null);
(statearr_11964[(6)] = c__9544__auto___11968);

return statearr_11964;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9546__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__11967 = arguments.length;
switch (G__11967) {
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
var c__9544__auto___12063 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__9545__auto__ = (function (){var switch__9363__auto__ = (function (state_12021){
var state_val_12022 = (state_12021[(1)]);
if((state_val_12022 === (7))){
var inst_12017 = (state_12021[(2)]);
var state_12021__$1 = state_12021;
var statearr_12024_12064 = state_12021__$1;
(statearr_12024_12064[(2)] = inst_12017);

(statearr_12024_12064[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12022 === (1))){
var inst_11971 = [];
var inst_11972 = inst_11971;
var inst_11973 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_12021__$1 = (function (){var statearr_12025 = state_12021;
(statearr_12025[(7)] = inst_11972);

(statearr_12025[(8)] = inst_11973);

return statearr_12025;
})();
var statearr_12026_12065 = state_12021__$1;
(statearr_12026_12065[(2)] = null);

(statearr_12026_12065[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12022 === (4))){
var inst_11976 = (state_12021[(9)]);
var inst_11976__$1 = (state_12021[(2)]);
var inst_11979 = (inst_11976__$1 == null);
var inst_11980 = cljs.core.not.call(null,inst_11979);
var state_12021__$1 = (function (){var statearr_12030 = state_12021;
(statearr_12030[(9)] = inst_11976__$1);

return statearr_12030;
})();
if(inst_11980){
var statearr_12032_12066 = state_12021__$1;
(statearr_12032_12066[(1)] = (5));

} else {
var statearr_12033_12067 = state_12021__$1;
(statearr_12033_12067[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12022 === (15))){
var inst_11972 = (state_12021[(7)]);
var inst_12009 = cljs.core.vec.call(null,inst_11972);
var state_12021__$1 = state_12021;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12021__$1,(18),out,inst_12009);
} else {
if((state_val_12022 === (13))){
var inst_12003 = (state_12021[(2)]);
var state_12021__$1 = state_12021;
var statearr_12035_12068 = state_12021__$1;
(statearr_12035_12068[(2)] = inst_12003);

(statearr_12035_12068[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12022 === (6))){
var inst_11972 = (state_12021[(7)]);
var inst_12006 = inst_11972.length;
var inst_12007 = (inst_12006 > (0));
var state_12021__$1 = state_12021;
if(cljs.core.truth_(inst_12007)){
var statearr_12037_12069 = state_12021__$1;
(statearr_12037_12069[(1)] = (15));

} else {
var statearr_12039_12070 = state_12021__$1;
(statearr_12039_12070[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12022 === (17))){
var inst_12014 = (state_12021[(2)]);
var inst_12015 = cljs.core.async.close_BANG_.call(null,out);
var state_12021__$1 = (function (){var statearr_12041 = state_12021;
(statearr_12041[(10)] = inst_12014);

return statearr_12041;
})();
var statearr_12042_12071 = state_12021__$1;
(statearr_12042_12071[(2)] = inst_12015);

(statearr_12042_12071[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12022 === (3))){
var inst_12019 = (state_12021[(2)]);
var state_12021__$1 = state_12021;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12021__$1,inst_12019);
} else {
if((state_val_12022 === (12))){
var inst_11972 = (state_12021[(7)]);
var inst_11995 = cljs.core.vec.call(null,inst_11972);
var state_12021__$1 = state_12021;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12021__$1,(14),out,inst_11995);
} else {
if((state_val_12022 === (2))){
var state_12021__$1 = state_12021;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12021__$1,(4),ch);
} else {
if((state_val_12022 === (11))){
var inst_11972 = (state_12021[(7)]);
var inst_11976 = (state_12021[(9)]);
var inst_11982 = (state_12021[(11)]);
var inst_11992 = inst_11972.push(inst_11976);
var tmp12043 = inst_11972;
var inst_11972__$1 = tmp12043;
var inst_11973 = inst_11982;
var state_12021__$1 = (function (){var statearr_12044 = state_12021;
(statearr_12044[(12)] = inst_11992);

(statearr_12044[(7)] = inst_11972__$1);

(statearr_12044[(8)] = inst_11973);

return statearr_12044;
})();
var statearr_12045_12072 = state_12021__$1;
(statearr_12045_12072[(2)] = null);

(statearr_12045_12072[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12022 === (9))){
var inst_11973 = (state_12021[(8)]);
var inst_11988 = cljs.core.keyword_identical_QMARK_.call(null,inst_11973,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_12021__$1 = state_12021;
var statearr_12046_12073 = state_12021__$1;
(statearr_12046_12073[(2)] = inst_11988);

(statearr_12046_12073[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12022 === (5))){
var inst_11976 = (state_12021[(9)]);
var inst_11982 = (state_12021[(11)]);
var inst_11973 = (state_12021[(8)]);
var inst_11984 = (state_12021[(13)]);
var inst_11982__$1 = f.call(null,inst_11976);
var inst_11984__$1 = cljs.core._EQ_.call(null,inst_11982__$1,inst_11973);
var state_12021__$1 = (function (){var statearr_12047 = state_12021;
(statearr_12047[(11)] = inst_11982__$1);

(statearr_12047[(13)] = inst_11984__$1);

return statearr_12047;
})();
if(inst_11984__$1){
var statearr_12048_12074 = state_12021__$1;
(statearr_12048_12074[(1)] = (8));

} else {
var statearr_12049_12075 = state_12021__$1;
(statearr_12049_12075[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12022 === (14))){
var inst_11976 = (state_12021[(9)]);
var inst_11982 = (state_12021[(11)]);
var inst_11997 = (state_12021[(2)]);
var inst_11998 = [];
var inst_11999 = inst_11998.push(inst_11976);
var inst_11972 = inst_11998;
var inst_11973 = inst_11982;
var state_12021__$1 = (function (){var statearr_12050 = state_12021;
(statearr_12050[(14)] = inst_11997);

(statearr_12050[(15)] = inst_11999);

(statearr_12050[(7)] = inst_11972);

(statearr_12050[(8)] = inst_11973);

return statearr_12050;
})();
var statearr_12051_12076 = state_12021__$1;
(statearr_12051_12076[(2)] = null);

(statearr_12051_12076[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12022 === (16))){
var state_12021__$1 = state_12021;
var statearr_12052_12077 = state_12021__$1;
(statearr_12052_12077[(2)] = null);

(statearr_12052_12077[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12022 === (10))){
var inst_11990 = (state_12021[(2)]);
var state_12021__$1 = state_12021;
if(cljs.core.truth_(inst_11990)){
var statearr_12053_12078 = state_12021__$1;
(statearr_12053_12078[(1)] = (11));

} else {
var statearr_12054_12079 = state_12021__$1;
(statearr_12054_12079[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12022 === (18))){
var inst_12011 = (state_12021[(2)]);
var state_12021__$1 = state_12021;
var statearr_12055_12080 = state_12021__$1;
(statearr_12055_12080[(2)] = inst_12011);

(statearr_12055_12080[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12022 === (8))){
var inst_11984 = (state_12021[(13)]);
var state_12021__$1 = state_12021;
var statearr_12056_12081 = state_12021__$1;
(statearr_12056_12081[(2)] = inst_11984);

(statearr_12056_12081[(1)] = (10));


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
var cljs$core$async$state_machine__9364__auto__ = null;
var cljs$core$async$state_machine__9364__auto____0 = (function (){
var statearr_12057 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12057[(0)] = cljs$core$async$state_machine__9364__auto__);

(statearr_12057[(1)] = (1));

return statearr_12057;
});
var cljs$core$async$state_machine__9364__auto____1 = (function (state_12021){
while(true){
var ret_value__9365__auto__ = (function (){try{while(true){
var result__9366__auto__ = switch__9363__auto__.call(null,state_12021);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9366__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9366__auto__;
}
break;
}
}catch (e12058){var ex__9367__auto__ = e12058;
var statearr_12059_12082 = state_12021;
(statearr_12059_12082[(2)] = ex__9367__auto__);


if(cljs.core.seq.call(null,(state_12021[(4)]))){
var statearr_12060_12083 = state_12021;
(statearr_12060_12083[(1)] = cljs.core.first.call(null,(state_12021[(4)])));

} else {
throw ex__9367__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9365__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12084 = state_12021;
state_12021 = G__12084;
continue;
} else {
return ret_value__9365__auto__;
}
break;
}
});
cljs$core$async$state_machine__9364__auto__ = function(state_12021){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__9364__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__9364__auto____1.call(this,state_12021);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__9364__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__9364__auto____0;
cljs$core$async$state_machine__9364__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__9364__auto____1;
return cljs$core$async$state_machine__9364__auto__;
})()
})();
var state__9546__auto__ = (function (){var statearr_12061 = f__9545__auto__.call(null);
(statearr_12061[(6)] = c__9544__auto___12063);

return statearr_12061;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9546__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=async.js.map
