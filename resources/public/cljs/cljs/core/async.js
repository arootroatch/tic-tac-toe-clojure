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
var G__13717 = arguments.length;
switch (G__13717) {
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async13718 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async13718 = (function (f,blockable,meta13719){
this.f = f;
this.blockable = blockable;
this.meta13719 = meta13719;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async13718.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13720,meta13719__$1){
var self__ = this;
var _13720__$1 = this;
return (new cljs.core.async.t_cljs$core$async13718(self__.f,self__.blockable,meta13719__$1));
}));

(cljs.core.async.t_cljs$core$async13718.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13720){
var self__ = this;
var _13720__$1 = this;
return self__.meta13719;
}));

(cljs.core.async.t_cljs$core$async13718.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async13718.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async13718.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async13718.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async13718.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta13719","meta13719",-1942742715,null)], null);
}));

(cljs.core.async.t_cljs$core$async13718.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async13718.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async13718");

(cljs.core.async.t_cljs$core$async13718.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write.call(null,writer__5288__auto__,"cljs.core.async/t_cljs$core$async13718");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async13718.
 */
cljs.core.async.__GT_t_cljs$core$async13718 = (function cljs$core$async$__GT_t_cljs$core$async13718(f__$1,blockable__$1,meta13719){
return (new cljs.core.async.t_cljs$core$async13718(f__$1,blockable__$1,meta13719));
});

}

return (new cljs.core.async.t_cljs$core$async13718(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__13734 = arguments.length;
switch (G__13734) {
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
var G__13743 = arguments.length;
switch (G__13743) {
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
var G__13747 = arguments.length;
switch (G__13747) {
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
var val_13749 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_13749);
} else {
cljs.core.async.impl.dispatch.run.call(null,(function (){
return fn1.call(null,val_13749);
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
var G__13751 = arguments.length;
switch (G__13751) {
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
var n__5593__auto___13760 = n;
var x_13761 = (0);
while(true){
if((x_13761 < n__5593__auto___13760)){
(a[x_13761] = x_13761);

var G__13762 = (x_13761 + (1));
x_13761 = G__13762;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async13757 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async13757 = (function (flag,meta13758){
this.flag = flag;
this.meta13758 = meta13758;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async13757.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13759,meta13758__$1){
var self__ = this;
var _13759__$1 = this;
return (new cljs.core.async.t_cljs$core$async13757(self__.flag,meta13758__$1));
}));

(cljs.core.async.t_cljs$core$async13757.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13759){
var self__ = this;
var _13759__$1 = this;
return self__.meta13758;
}));

(cljs.core.async.t_cljs$core$async13757.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async13757.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
}));

(cljs.core.async.t_cljs$core$async13757.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async13757.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async13757.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta13758","meta13758",221309241,null)], null);
}));

(cljs.core.async.t_cljs$core$async13757.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async13757.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async13757");

(cljs.core.async.t_cljs$core$async13757.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write.call(null,writer__5288__auto__,"cljs.core.async/t_cljs$core$async13757");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async13757.
 */
cljs.core.async.__GT_t_cljs$core$async13757 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async13757(flag__$1,meta13758){
return (new cljs.core.async.t_cljs$core$async13757(flag__$1,meta13758));
});

}

return (new cljs.core.async.t_cljs$core$async13757(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async13768 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async13768 = (function (flag,cb,meta13769){
this.flag = flag;
this.cb = cb;
this.meta13769 = meta13769;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async13768.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13770,meta13769__$1){
var self__ = this;
var _13770__$1 = this;
return (new cljs.core.async.t_cljs$core$async13768(self__.flag,self__.cb,meta13769__$1));
}));

(cljs.core.async.t_cljs$core$async13768.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13770){
var self__ = this;
var _13770__$1 = this;
return self__.meta13769;
}));

(cljs.core.async.t_cljs$core$async13768.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async13768.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
}));

(cljs.core.async.t_cljs$core$async13768.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async13768.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async13768.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta13769","meta13769",143083995,null)], null);
}));

(cljs.core.async.t_cljs$core$async13768.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async13768.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async13768");

(cljs.core.async.t_cljs$core$async13768.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write.call(null,writer__5288__auto__,"cljs.core.async/t_cljs$core$async13768");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async13768.
 */
cljs.core.async.__GT_t_cljs$core$async13768 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async13768(flag__$1,cb__$1,meta13769){
return (new cljs.core.async.t_cljs$core$async13768(flag__$1,cb__$1,meta13769));
});

}

return (new cljs.core.async.t_cljs$core$async13768(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__13779_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__13779_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,ports__$1,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,ports__$1,n,idxs,priority){
return (function (p1__13780_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__13780_SHARP_,port], null));
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
var G__13796 = (i + (1));
i = G__13796;
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
var len__5726__auto___13803 = arguments.length;
var i__5727__auto___13804 = (0);
while(true){
if((i__5727__auto___13804 < len__5726__auto___13803)){
args__5732__auto__.push((arguments[i__5727__auto___13804]));

var G__13805 = (i__5727__auto___13804 + (1));
i__5727__auto___13804 = G__13805;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__13797){
var map__13798 = p__13797;
var map__13798__$1 = cljs.core.__destructure_map.call(null,map__13798);
var opts = map__13798__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq13791){
var G__13792 = cljs.core.first.call(null,seq13791);
var seq13791__$1 = cljs.core.next.call(null,seq13791);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__13792,seq13791__$1);
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
var G__13807 = arguments.length;
switch (G__13807) {
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
var c__10771__auto___13891 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__10772__auto__ = (function (){var switch__10328__auto__ = (function (state_13849){
var state_val_13850 = (state_13849[(1)]);
if((state_val_13850 === (7))){
var inst_13844 = (state_13849[(2)]);
var state_13849__$1 = state_13849;
var statearr_13862_13892 = state_13849__$1;
(statearr_13862_13892[(2)] = inst_13844);

(statearr_13862_13892[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13850 === (1))){
var state_13849__$1 = state_13849;
var statearr_13866_13893 = state_13849__$1;
(statearr_13866_13893[(2)] = null);

(statearr_13866_13893[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13850 === (4))){
var inst_13820 = (state_13849[(7)]);
var inst_13820__$1 = (state_13849[(2)]);
var inst_13821 = (inst_13820__$1 == null);
var state_13849__$1 = (function (){var statearr_13872 = state_13849;
(statearr_13872[(7)] = inst_13820__$1);

return statearr_13872;
})();
if(cljs.core.truth_(inst_13821)){
var statearr_13873_13898 = state_13849__$1;
(statearr_13873_13898[(1)] = (5));

} else {
var statearr_13874_13899 = state_13849__$1;
(statearr_13874_13899[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13850 === (13))){
var state_13849__$1 = state_13849;
var statearr_13875_13900 = state_13849__$1;
(statearr_13875_13900[(2)] = null);

(statearr_13875_13900[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13850 === (6))){
var inst_13820 = (state_13849[(7)]);
var state_13849__$1 = state_13849;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13849__$1,(11),to,inst_13820);
} else {
if((state_val_13850 === (3))){
var inst_13846 = (state_13849[(2)]);
var state_13849__$1 = state_13849;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13849__$1,inst_13846);
} else {
if((state_val_13850 === (12))){
var state_13849__$1 = state_13849;
var statearr_13876_13907 = state_13849__$1;
(statearr_13876_13907[(2)] = null);

(statearr_13876_13907[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13850 === (2))){
var state_13849__$1 = state_13849;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13849__$1,(4),from);
} else {
if((state_val_13850 === (11))){
var inst_13833 = (state_13849[(2)]);
var state_13849__$1 = state_13849;
if(cljs.core.truth_(inst_13833)){
var statearr_13877_13908 = state_13849__$1;
(statearr_13877_13908[(1)] = (12));

} else {
var statearr_13878_13909 = state_13849__$1;
(statearr_13878_13909[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13850 === (9))){
var state_13849__$1 = state_13849;
var statearr_13879_13910 = state_13849__$1;
(statearr_13879_13910[(2)] = null);

(statearr_13879_13910[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13850 === (5))){
var state_13849__$1 = state_13849;
if(cljs.core.truth_(close_QMARK_)){
var statearr_13880_13912 = state_13849__$1;
(statearr_13880_13912[(1)] = (8));

} else {
var statearr_13881_13913 = state_13849__$1;
(statearr_13881_13913[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13850 === (14))){
var inst_13842 = (state_13849[(2)]);
var state_13849__$1 = state_13849;
var statearr_13882_13914 = state_13849__$1;
(statearr_13882_13914[(2)] = inst_13842);

(statearr_13882_13914[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13850 === (10))){
var inst_13829 = (state_13849[(2)]);
var state_13849__$1 = state_13849;
var statearr_13883_13917 = state_13849__$1;
(statearr_13883_13917[(2)] = inst_13829);

(statearr_13883_13917[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13850 === (8))){
var inst_13826 = cljs.core.async.close_BANG_.call(null,to);
var state_13849__$1 = state_13849;
var statearr_13884_13920 = state_13849__$1;
(statearr_13884_13920[(2)] = inst_13826);

(statearr_13884_13920[(1)] = (10));


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
var cljs$core$async$state_machine__10329__auto__ = null;
var cljs$core$async$state_machine__10329__auto____0 = (function (){
var statearr_13885 = [null,null,null,null,null,null,null,null];
(statearr_13885[(0)] = cljs$core$async$state_machine__10329__auto__);

(statearr_13885[(1)] = (1));

return statearr_13885;
});
var cljs$core$async$state_machine__10329__auto____1 = (function (state_13849){
while(true){
var ret_value__10330__auto__ = (function (){try{while(true){
var result__10331__auto__ = switch__10328__auto__.call(null,state_13849);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10331__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10331__auto__;
}
break;
}
}catch (e13886){var ex__10332__auto__ = e13886;
var statearr_13887_13926 = state_13849;
(statearr_13887_13926[(2)] = ex__10332__auto__);


if(cljs.core.seq.call(null,(state_13849[(4)]))){
var statearr_13888_13927 = state_13849;
(statearr_13888_13927[(1)] = cljs.core.first.call(null,(state_13849[(4)])));

} else {
throw ex__10332__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10330__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13929 = state_13849;
state_13849 = G__13929;
continue;
} else {
return ret_value__10330__auto__;
}
break;
}
});
cljs$core$async$state_machine__10329__auto__ = function(state_13849){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10329__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10329__auto____1.call(this,state_13849);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10329__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10329__auto____0;
cljs$core$async$state_machine__10329__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10329__auto____1;
return cljs$core$async$state_machine__10329__auto__;
})()
})();
var state__10773__auto__ = (function (){var statearr_13889 = f__10772__auto__.call(null);
(statearr_13889[(6)] = c__10771__auto___13891);

return statearr_13889;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10773__auto__);
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
var process__$1 = (function (p__13894){
var vec__13895 = p__13894;
var v = cljs.core.nth.call(null,vec__13895,(0),null);
var p = cljs.core.nth.call(null,vec__13895,(1),null);
var job = vec__13895;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__10771__auto___14110 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__10772__auto__ = (function (){var switch__10328__auto__ = (function (state_13905){
var state_val_13906 = (state_13905[(1)]);
if((state_val_13906 === (1))){
var state_13905__$1 = state_13905;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13905__$1,(2),res,v);
} else {
if((state_val_13906 === (2))){
var inst_13902 = (state_13905[(2)]);
var inst_13903 = cljs.core.async.close_BANG_.call(null,res);
var state_13905__$1 = (function (){var statearr_13911 = state_13905;
(statearr_13911[(7)] = inst_13902);

return statearr_13911;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13905__$1,inst_13903);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__10329__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__10329__auto____0 = (function (){
var statearr_13915 = [null,null,null,null,null,null,null,null];
(statearr_13915[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__10329__auto__);

(statearr_13915[(1)] = (1));

return statearr_13915;
});
var cljs$core$async$pipeline_STAR__$_state_machine__10329__auto____1 = (function (state_13905){
while(true){
var ret_value__10330__auto__ = (function (){try{while(true){
var result__10331__auto__ = switch__10328__auto__.call(null,state_13905);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10331__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10331__auto__;
}
break;
}
}catch (e13916){var ex__10332__auto__ = e13916;
var statearr_13918_14115 = state_13905;
(statearr_13918_14115[(2)] = ex__10332__auto__);


if(cljs.core.seq.call(null,(state_13905[(4)]))){
var statearr_13919_14117 = state_13905;
(statearr_13919_14117[(1)] = cljs.core.first.call(null,(state_13905[(4)])));

} else {
throw ex__10332__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10330__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14118 = state_13905;
state_13905 = G__14118;
continue;
} else {
return ret_value__10330__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__10329__auto__ = function(state_13905){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__10329__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__10329__auto____1.call(this,state_13905);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__10329__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__10329__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__10329__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__10329__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__10329__auto__;
})()
})();
var state__10773__auto__ = (function (){var statearr_13921 = f__10772__auto__.call(null);
(statearr_13921[(6)] = c__10771__auto___14110);

return statearr_13921;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10773__auto__);
}));


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});
var async = (function (p__13922){
var vec__13923 = p__13922;
var v = cljs.core.nth.call(null,vec__13923,(0),null);
var p = cljs.core.nth.call(null,vec__13923,(1),null);
var job = vec__13923;
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
var n__5593__auto___14122 = n;
var __14123 = (0);
while(true){
if((__14123 < n__5593__auto___14122)){
var G__13928_14124 = type;
var G__13928_14125__$1 = (((G__13928_14124 instanceof cljs.core.Keyword))?G__13928_14124.fqn:null);
switch (G__13928_14125__$1) {
case "compute":
var c__10771__auto___14127 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__14123,c__10771__auto___14127,G__13928_14124,G__13928_14125__$1,n__5593__auto___14122,jobs,results,process__$1,async){
return (function (){
var f__10772__auto__ = (function (){var switch__10328__auto__ = ((function (__14123,c__10771__auto___14127,G__13928_14124,G__13928_14125__$1,n__5593__auto___14122,jobs,results,process__$1,async){
return (function (state_13942){
var state_val_13943 = (state_13942[(1)]);
if((state_val_13943 === (1))){
var state_13942__$1 = state_13942;
var statearr_13944_14128 = state_13942__$1;
(statearr_13944_14128[(2)] = null);

(statearr_13944_14128[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13943 === (2))){
var state_13942__$1 = state_13942;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13942__$1,(4),jobs);
} else {
if((state_val_13943 === (3))){
var inst_13940 = (state_13942[(2)]);
var state_13942__$1 = state_13942;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13942__$1,inst_13940);
} else {
if((state_val_13943 === (4))){
var inst_13932 = (state_13942[(2)]);
var inst_13933 = process__$1.call(null,inst_13932);
var state_13942__$1 = state_13942;
if(cljs.core.truth_(inst_13933)){
var statearr_13945_14134 = state_13942__$1;
(statearr_13945_14134[(1)] = (5));

} else {
var statearr_13946_14135 = state_13942__$1;
(statearr_13946_14135[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13943 === (5))){
var state_13942__$1 = state_13942;
var statearr_13947_14136 = state_13942__$1;
(statearr_13947_14136[(2)] = null);

(statearr_13947_14136[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13943 === (6))){
var state_13942__$1 = state_13942;
var statearr_13948_14137 = state_13942__$1;
(statearr_13948_14137[(2)] = null);

(statearr_13948_14137[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13943 === (7))){
var inst_13938 = (state_13942[(2)]);
var state_13942__$1 = state_13942;
var statearr_13949_14140 = state_13942__$1;
(statearr_13949_14140[(2)] = inst_13938);

(statearr_13949_14140[(1)] = (3));


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
});})(__14123,c__10771__auto___14127,G__13928_14124,G__13928_14125__$1,n__5593__auto___14122,jobs,results,process__$1,async))
;
return ((function (__14123,switch__10328__auto__,c__10771__auto___14127,G__13928_14124,G__13928_14125__$1,n__5593__auto___14122,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__10329__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__10329__auto____0 = (function (){
var statearr_13950 = [null,null,null,null,null,null,null];
(statearr_13950[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__10329__auto__);

(statearr_13950[(1)] = (1));

return statearr_13950;
});
var cljs$core$async$pipeline_STAR__$_state_machine__10329__auto____1 = (function (state_13942){
while(true){
var ret_value__10330__auto__ = (function (){try{while(true){
var result__10331__auto__ = switch__10328__auto__.call(null,state_13942);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10331__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10331__auto__;
}
break;
}
}catch (e13951){var ex__10332__auto__ = e13951;
var statearr_13952_14157 = state_13942;
(statearr_13952_14157[(2)] = ex__10332__auto__);


if(cljs.core.seq.call(null,(state_13942[(4)]))){
var statearr_13953_14169 = state_13942;
(statearr_13953_14169[(1)] = cljs.core.first.call(null,(state_13942[(4)])));

} else {
throw ex__10332__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10330__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14171 = state_13942;
state_13942 = G__14171;
continue;
} else {
return ret_value__10330__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__10329__auto__ = function(state_13942){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__10329__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__10329__auto____1.call(this,state_13942);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__10329__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__10329__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__10329__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__10329__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__10329__auto__;
})()
;})(__14123,switch__10328__auto__,c__10771__auto___14127,G__13928_14124,G__13928_14125__$1,n__5593__auto___14122,jobs,results,process__$1,async))
})();
var state__10773__auto__ = (function (){var statearr_13954 = f__10772__auto__.call(null);
(statearr_13954[(6)] = c__10771__auto___14127);

return statearr_13954;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10773__auto__);
});})(__14123,c__10771__auto___14127,G__13928_14124,G__13928_14125__$1,n__5593__auto___14122,jobs,results,process__$1,async))
);


break;
case "async":
var c__10771__auto___14173 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__14123,c__10771__auto___14173,G__13928_14124,G__13928_14125__$1,n__5593__auto___14122,jobs,results,process__$1,async){
return (function (){
var f__10772__auto__ = (function (){var switch__10328__auto__ = ((function (__14123,c__10771__auto___14173,G__13928_14124,G__13928_14125__$1,n__5593__auto___14122,jobs,results,process__$1,async){
return (function (state_13967){
var state_val_13968 = (state_13967[(1)]);
if((state_val_13968 === (1))){
var state_13967__$1 = state_13967;
var statearr_13969_14180 = state_13967__$1;
(statearr_13969_14180[(2)] = null);

(statearr_13969_14180[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13968 === (2))){
var state_13967__$1 = state_13967;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13967__$1,(4),jobs);
} else {
if((state_val_13968 === (3))){
var inst_13965 = (state_13967[(2)]);
var state_13967__$1 = state_13967;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13967__$1,inst_13965);
} else {
if((state_val_13968 === (4))){
var inst_13957 = (state_13967[(2)]);
var inst_13958 = async.call(null,inst_13957);
var state_13967__$1 = state_13967;
if(cljs.core.truth_(inst_13958)){
var statearr_13970_14185 = state_13967__$1;
(statearr_13970_14185[(1)] = (5));

} else {
var statearr_13971_14186 = state_13967__$1;
(statearr_13971_14186[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13968 === (5))){
var state_13967__$1 = state_13967;
var statearr_13972_14187 = state_13967__$1;
(statearr_13972_14187[(2)] = null);

(statearr_13972_14187[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13968 === (6))){
var state_13967__$1 = state_13967;
var statearr_13973_14188 = state_13967__$1;
(statearr_13973_14188[(2)] = null);

(statearr_13973_14188[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13968 === (7))){
var inst_13963 = (state_13967[(2)]);
var state_13967__$1 = state_13967;
var statearr_13974_14191 = state_13967__$1;
(statearr_13974_14191[(2)] = inst_13963);

(statearr_13974_14191[(1)] = (3));


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
});})(__14123,c__10771__auto___14173,G__13928_14124,G__13928_14125__$1,n__5593__auto___14122,jobs,results,process__$1,async))
;
return ((function (__14123,switch__10328__auto__,c__10771__auto___14173,G__13928_14124,G__13928_14125__$1,n__5593__auto___14122,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__10329__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__10329__auto____0 = (function (){
var statearr_13975 = [null,null,null,null,null,null,null];
(statearr_13975[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__10329__auto__);

(statearr_13975[(1)] = (1));

return statearr_13975;
});
var cljs$core$async$pipeline_STAR__$_state_machine__10329__auto____1 = (function (state_13967){
while(true){
var ret_value__10330__auto__ = (function (){try{while(true){
var result__10331__auto__ = switch__10328__auto__.call(null,state_13967);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10331__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10331__auto__;
}
break;
}
}catch (e13976){var ex__10332__auto__ = e13976;
var statearr_13977_14194 = state_13967;
(statearr_13977_14194[(2)] = ex__10332__auto__);


if(cljs.core.seq.call(null,(state_13967[(4)]))){
var statearr_13978_14196 = state_13967;
(statearr_13978_14196[(1)] = cljs.core.first.call(null,(state_13967[(4)])));

} else {
throw ex__10332__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10330__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14203 = state_13967;
state_13967 = G__14203;
continue;
} else {
return ret_value__10330__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__10329__auto__ = function(state_13967){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__10329__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__10329__auto____1.call(this,state_13967);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__10329__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__10329__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__10329__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__10329__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__10329__auto__;
})()
;})(__14123,switch__10328__auto__,c__10771__auto___14173,G__13928_14124,G__13928_14125__$1,n__5593__auto___14122,jobs,results,process__$1,async))
})();
var state__10773__auto__ = (function (){var statearr_13980 = f__10772__auto__.call(null);
(statearr_13980[(6)] = c__10771__auto___14173);

return statearr_13980;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10773__auto__);
});})(__14123,c__10771__auto___14173,G__13928_14124,G__13928_14125__$1,n__5593__auto___14122,jobs,results,process__$1,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__13928_14125__$1)].join('')));

}

var G__14207 = (__14123 + (1));
__14123 = G__14207;
continue;
} else {
}
break;
}

var c__10771__auto___14208 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__10772__auto__ = (function (){var switch__10328__auto__ = (function (state_14004){
var state_val_14005 = (state_14004[(1)]);
if((state_val_14005 === (7))){
var inst_14000 = (state_14004[(2)]);
var state_14004__$1 = state_14004;
var statearr_14009_14210 = state_14004__$1;
(statearr_14009_14210[(2)] = inst_14000);

(statearr_14009_14210[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14005 === (1))){
var state_14004__$1 = state_14004;
var statearr_14010_14212 = state_14004__$1;
(statearr_14010_14212[(2)] = null);

(statearr_14010_14212[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14005 === (4))){
var inst_13984 = (state_14004[(7)]);
var inst_13984__$1 = (state_14004[(2)]);
var inst_13986 = (inst_13984__$1 == null);
var state_14004__$1 = (function (){var statearr_14011 = state_14004;
(statearr_14011[(7)] = inst_13984__$1);

return statearr_14011;
})();
if(cljs.core.truth_(inst_13986)){
var statearr_14012_14214 = state_14004__$1;
(statearr_14012_14214[(1)] = (5));

} else {
var statearr_14013_14215 = state_14004__$1;
(statearr_14013_14215[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14005 === (6))){
var inst_13984 = (state_14004[(7)]);
var inst_13990 = (state_14004[(8)]);
var inst_13990__$1 = cljs.core.async.chan.call(null,(1));
var inst_13991 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_13992 = [inst_13984,inst_13990__$1];
var inst_13993 = (new cljs.core.PersistentVector(null,2,(5),inst_13991,inst_13992,null));
var state_14004__$1 = (function (){var statearr_14015 = state_14004;
(statearr_14015[(8)] = inst_13990__$1);

return statearr_14015;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14004__$1,(8),jobs,inst_13993);
} else {
if((state_val_14005 === (3))){
var inst_14002 = (state_14004[(2)]);
var state_14004__$1 = state_14004;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14004__$1,inst_14002);
} else {
if((state_val_14005 === (2))){
var state_14004__$1 = state_14004;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14004__$1,(4),from);
} else {
if((state_val_14005 === (9))){
var inst_13997 = (state_14004[(2)]);
var state_14004__$1 = (function (){var statearr_14017 = state_14004;
(statearr_14017[(9)] = inst_13997);

return statearr_14017;
})();
var statearr_14018_14228 = state_14004__$1;
(statearr_14018_14228[(2)] = null);

(statearr_14018_14228[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14005 === (5))){
var inst_13988 = cljs.core.async.close_BANG_.call(null,jobs);
var state_14004__$1 = state_14004;
var statearr_14019_14231 = state_14004__$1;
(statearr_14019_14231[(2)] = inst_13988);

(statearr_14019_14231[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14005 === (8))){
var inst_13990 = (state_14004[(8)]);
var inst_13995 = (state_14004[(2)]);
var state_14004__$1 = (function (){var statearr_14020 = state_14004;
(statearr_14020[(10)] = inst_13995);

return statearr_14020;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14004__$1,(9),results,inst_13990);
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
var cljs$core$async$pipeline_STAR__$_state_machine__10329__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__10329__auto____0 = (function (){
var statearr_14021 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_14021[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__10329__auto__);

(statearr_14021[(1)] = (1));

return statearr_14021;
});
var cljs$core$async$pipeline_STAR__$_state_machine__10329__auto____1 = (function (state_14004){
while(true){
var ret_value__10330__auto__ = (function (){try{while(true){
var result__10331__auto__ = switch__10328__auto__.call(null,state_14004);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10331__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10331__auto__;
}
break;
}
}catch (e14022){var ex__10332__auto__ = e14022;
var statearr_14023_14253 = state_14004;
(statearr_14023_14253[(2)] = ex__10332__auto__);


if(cljs.core.seq.call(null,(state_14004[(4)]))){
var statearr_14024_14256 = state_14004;
(statearr_14024_14256[(1)] = cljs.core.first.call(null,(state_14004[(4)])));

} else {
throw ex__10332__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10330__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14257 = state_14004;
state_14004 = G__14257;
continue;
} else {
return ret_value__10330__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__10329__auto__ = function(state_14004){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__10329__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__10329__auto____1.call(this,state_14004);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__10329__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__10329__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__10329__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__10329__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__10329__auto__;
})()
})();
var state__10773__auto__ = (function (){var statearr_14028 = f__10772__auto__.call(null);
(statearr_14028[(6)] = c__10771__auto___14208);

return statearr_14028;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10773__auto__);
}));


var c__10771__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__10772__auto__ = (function (){var switch__10328__auto__ = (function (state_14067){
var state_val_14068 = (state_14067[(1)]);
if((state_val_14068 === (7))){
var inst_14063 = (state_14067[(2)]);
var state_14067__$1 = state_14067;
var statearr_14070_14263 = state_14067__$1;
(statearr_14070_14263[(2)] = inst_14063);

(statearr_14070_14263[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14068 === (20))){
var state_14067__$1 = state_14067;
var statearr_14071_14265 = state_14067__$1;
(statearr_14071_14265[(2)] = null);

(statearr_14071_14265[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14068 === (1))){
var state_14067__$1 = state_14067;
var statearr_14072_14267 = state_14067__$1;
(statearr_14072_14267[(2)] = null);

(statearr_14072_14267[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14068 === (4))){
var inst_14031 = (state_14067[(7)]);
var inst_14031__$1 = (state_14067[(2)]);
var inst_14033 = (inst_14031__$1 == null);
var state_14067__$1 = (function (){var statearr_14073 = state_14067;
(statearr_14073[(7)] = inst_14031__$1);

return statearr_14073;
})();
if(cljs.core.truth_(inst_14033)){
var statearr_14074_14272 = state_14067__$1;
(statearr_14074_14272[(1)] = (5));

} else {
var statearr_14075_14273 = state_14067__$1;
(statearr_14075_14273[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14068 === (15))){
var inst_14045 = (state_14067[(8)]);
var state_14067__$1 = state_14067;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14067__$1,(18),to,inst_14045);
} else {
if((state_val_14068 === (21))){
var inst_14058 = (state_14067[(2)]);
var state_14067__$1 = state_14067;
var statearr_14076_14275 = state_14067__$1;
(statearr_14076_14275[(2)] = inst_14058);

(statearr_14076_14275[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14068 === (13))){
var inst_14060 = (state_14067[(2)]);
var state_14067__$1 = (function (){var statearr_14078 = state_14067;
(statearr_14078[(9)] = inst_14060);

return statearr_14078;
})();
var statearr_14079_14278 = state_14067__$1;
(statearr_14079_14278[(2)] = null);

(statearr_14079_14278[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14068 === (6))){
var inst_14031 = (state_14067[(7)]);
var state_14067__$1 = state_14067;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14067__$1,(11),inst_14031);
} else {
if((state_val_14068 === (17))){
var inst_14053 = (state_14067[(2)]);
var state_14067__$1 = state_14067;
if(cljs.core.truth_(inst_14053)){
var statearr_14081_14280 = state_14067__$1;
(statearr_14081_14280[(1)] = (19));

} else {
var statearr_14082_14281 = state_14067__$1;
(statearr_14082_14281[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14068 === (3))){
var inst_14065 = (state_14067[(2)]);
var state_14067__$1 = state_14067;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14067__$1,inst_14065);
} else {
if((state_val_14068 === (12))){
var inst_14042 = (state_14067[(10)]);
var state_14067__$1 = state_14067;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14067__$1,(14),inst_14042);
} else {
if((state_val_14068 === (2))){
var state_14067__$1 = state_14067;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14067__$1,(4),results);
} else {
if((state_val_14068 === (19))){
var state_14067__$1 = state_14067;
var statearr_14083_14286 = state_14067__$1;
(statearr_14083_14286[(2)] = null);

(statearr_14083_14286[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14068 === (11))){
var inst_14042 = (state_14067[(2)]);
var state_14067__$1 = (function (){var statearr_14084 = state_14067;
(statearr_14084[(10)] = inst_14042);

return statearr_14084;
})();
var statearr_14085_14288 = state_14067__$1;
(statearr_14085_14288[(2)] = null);

(statearr_14085_14288[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14068 === (9))){
var state_14067__$1 = state_14067;
var statearr_14086_14290 = state_14067__$1;
(statearr_14086_14290[(2)] = null);

(statearr_14086_14290[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14068 === (5))){
var state_14067__$1 = state_14067;
if(cljs.core.truth_(close_QMARK_)){
var statearr_14087_14292 = state_14067__$1;
(statearr_14087_14292[(1)] = (8));

} else {
var statearr_14089_14293 = state_14067__$1;
(statearr_14089_14293[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14068 === (14))){
var inst_14045 = (state_14067[(8)]);
var inst_14047 = (state_14067[(11)]);
var inst_14045__$1 = (state_14067[(2)]);
var inst_14046 = (inst_14045__$1 == null);
var inst_14047__$1 = cljs.core.not.call(null,inst_14046);
var state_14067__$1 = (function (){var statearr_14091 = state_14067;
(statearr_14091[(8)] = inst_14045__$1);

(statearr_14091[(11)] = inst_14047__$1);

return statearr_14091;
})();
if(inst_14047__$1){
var statearr_14092_14295 = state_14067__$1;
(statearr_14092_14295[(1)] = (15));

} else {
var statearr_14093_14297 = state_14067__$1;
(statearr_14093_14297[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14068 === (16))){
var inst_14047 = (state_14067[(11)]);
var state_14067__$1 = state_14067;
var statearr_14094_14299 = state_14067__$1;
(statearr_14094_14299[(2)] = inst_14047);

(statearr_14094_14299[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14068 === (10))){
var inst_14039 = (state_14067[(2)]);
var state_14067__$1 = state_14067;
var statearr_14095_14300 = state_14067__$1;
(statearr_14095_14300[(2)] = inst_14039);

(statearr_14095_14300[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14068 === (18))){
var inst_14050 = (state_14067[(2)]);
var state_14067__$1 = state_14067;
var statearr_14096_14304 = state_14067__$1;
(statearr_14096_14304[(2)] = inst_14050);

(statearr_14096_14304[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14068 === (8))){
var inst_14036 = cljs.core.async.close_BANG_.call(null,to);
var state_14067__$1 = state_14067;
var statearr_14097_14307 = state_14067__$1;
(statearr_14097_14307[(2)] = inst_14036);

(statearr_14097_14307[(1)] = (10));


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
var cljs$core$async$pipeline_STAR__$_state_machine__10329__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__10329__auto____0 = (function (){
var statearr_14098 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14098[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__10329__auto__);

(statearr_14098[(1)] = (1));

return statearr_14098;
});
var cljs$core$async$pipeline_STAR__$_state_machine__10329__auto____1 = (function (state_14067){
while(true){
var ret_value__10330__auto__ = (function (){try{while(true){
var result__10331__auto__ = switch__10328__auto__.call(null,state_14067);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10331__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10331__auto__;
}
break;
}
}catch (e14099){var ex__10332__auto__ = e14099;
var statearr_14100_14308 = state_14067;
(statearr_14100_14308[(2)] = ex__10332__auto__);


if(cljs.core.seq.call(null,(state_14067[(4)]))){
var statearr_14101_14309 = state_14067;
(statearr_14101_14309[(1)] = cljs.core.first.call(null,(state_14067[(4)])));

} else {
throw ex__10332__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10330__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14311 = state_14067;
state_14067 = G__14311;
continue;
} else {
return ret_value__10330__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__10329__auto__ = function(state_14067){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__10329__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__10329__auto____1.call(this,state_14067);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__10329__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__10329__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__10329__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__10329__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__10329__auto__;
})()
})();
var state__10773__auto__ = (function (){var statearr_14104 = f__10772__auto__.call(null);
(statearr_14104[(6)] = c__10771__auto__);

return statearr_14104;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10773__auto__);
}));

return c__10771__auto__;
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
var G__14107 = arguments.length;
switch (G__14107) {
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
var G__14116 = arguments.length;
switch (G__14116) {
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
var G__14133 = arguments.length;
switch (G__14133) {
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
var c__10771__auto___14337 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__10772__auto__ = (function (){var switch__10328__auto__ = (function (state_14168){
var state_val_14170 = (state_14168[(1)]);
if((state_val_14170 === (7))){
var inst_14164 = (state_14168[(2)]);
var state_14168__$1 = state_14168;
var statearr_14172_14340 = state_14168__$1;
(statearr_14172_14340[(2)] = inst_14164);

(statearr_14172_14340[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14170 === (1))){
var state_14168__$1 = state_14168;
var statearr_14174_14342 = state_14168__$1;
(statearr_14174_14342[(2)] = null);

(statearr_14174_14342[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14170 === (4))){
var inst_14144 = (state_14168[(7)]);
var inst_14144__$1 = (state_14168[(2)]);
var inst_14145 = (inst_14144__$1 == null);
var state_14168__$1 = (function (){var statearr_14175 = state_14168;
(statearr_14175[(7)] = inst_14144__$1);

return statearr_14175;
})();
if(cljs.core.truth_(inst_14145)){
var statearr_14178_14344 = state_14168__$1;
(statearr_14178_14344[(1)] = (5));

} else {
var statearr_14179_14345 = state_14168__$1;
(statearr_14179_14345[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14170 === (13))){
var state_14168__$1 = state_14168;
var statearr_14182_14346 = state_14168__$1;
(statearr_14182_14346[(2)] = null);

(statearr_14182_14346[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14170 === (6))){
var inst_14144 = (state_14168[(7)]);
var inst_14150 = p.call(null,inst_14144);
var state_14168__$1 = state_14168;
if(cljs.core.truth_(inst_14150)){
var statearr_14183_14347 = state_14168__$1;
(statearr_14183_14347[(1)] = (9));

} else {
var statearr_14184_14348 = state_14168__$1;
(statearr_14184_14348[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14170 === (3))){
var inst_14166 = (state_14168[(2)]);
var state_14168__$1 = state_14168;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14168__$1,inst_14166);
} else {
if((state_val_14170 === (12))){
var state_14168__$1 = state_14168;
var statearr_14190_14359 = state_14168__$1;
(statearr_14190_14359[(2)] = null);

(statearr_14190_14359[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14170 === (2))){
var state_14168__$1 = state_14168;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14168__$1,(4),ch);
} else {
if((state_val_14170 === (11))){
var inst_14144 = (state_14168[(7)]);
var inst_14154 = (state_14168[(2)]);
var state_14168__$1 = state_14168;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14168__$1,(8),inst_14154,inst_14144);
} else {
if((state_val_14170 === (9))){
var state_14168__$1 = state_14168;
var statearr_14195_14376 = state_14168__$1;
(statearr_14195_14376[(2)] = tc);

(statearr_14195_14376[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14170 === (5))){
var inst_14147 = cljs.core.async.close_BANG_.call(null,tc);
var inst_14148 = cljs.core.async.close_BANG_.call(null,fc);
var state_14168__$1 = (function (){var statearr_14202 = state_14168;
(statearr_14202[(8)] = inst_14147);

return statearr_14202;
})();
var statearr_14205_14377 = state_14168__$1;
(statearr_14205_14377[(2)] = inst_14148);

(statearr_14205_14377[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14170 === (14))){
var inst_14162 = (state_14168[(2)]);
var state_14168__$1 = state_14168;
var statearr_14206_14379 = state_14168__$1;
(statearr_14206_14379[(2)] = inst_14162);

(statearr_14206_14379[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14170 === (10))){
var state_14168__$1 = state_14168;
var statearr_14209_14380 = state_14168__$1;
(statearr_14209_14380[(2)] = fc);

(statearr_14209_14380[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14170 === (8))){
var inst_14156 = (state_14168[(2)]);
var state_14168__$1 = state_14168;
if(cljs.core.truth_(inst_14156)){
var statearr_14211_14383 = state_14168__$1;
(statearr_14211_14383[(1)] = (12));

} else {
var statearr_14213_14384 = state_14168__$1;
(statearr_14213_14384[(1)] = (13));

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
var cljs$core$async$state_machine__10329__auto__ = null;
var cljs$core$async$state_machine__10329__auto____0 = (function (){
var statearr_14216 = [null,null,null,null,null,null,null,null,null];
(statearr_14216[(0)] = cljs$core$async$state_machine__10329__auto__);

(statearr_14216[(1)] = (1));

return statearr_14216;
});
var cljs$core$async$state_machine__10329__auto____1 = (function (state_14168){
while(true){
var ret_value__10330__auto__ = (function (){try{while(true){
var result__10331__auto__ = switch__10328__auto__.call(null,state_14168);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10331__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10331__auto__;
}
break;
}
}catch (e14217){var ex__10332__auto__ = e14217;
var statearr_14218_14388 = state_14168;
(statearr_14218_14388[(2)] = ex__10332__auto__);


if(cljs.core.seq.call(null,(state_14168[(4)]))){
var statearr_14219_14389 = state_14168;
(statearr_14219_14389[(1)] = cljs.core.first.call(null,(state_14168[(4)])));

} else {
throw ex__10332__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10330__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14392 = state_14168;
state_14168 = G__14392;
continue;
} else {
return ret_value__10330__auto__;
}
break;
}
});
cljs$core$async$state_machine__10329__auto__ = function(state_14168){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10329__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10329__auto____1.call(this,state_14168);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10329__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10329__auto____0;
cljs$core$async$state_machine__10329__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10329__auto____1;
return cljs$core$async$state_machine__10329__auto__;
})()
})();
var state__10773__auto__ = (function (){var statearr_14229 = f__10772__auto__.call(null);
(statearr_14229[(6)] = c__10771__auto___14337);

return statearr_14229;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10773__auto__);
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
var c__10771__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__10772__auto__ = (function (){var switch__10328__auto__ = (function (state_14254){
var state_val_14255 = (state_14254[(1)]);
if((state_val_14255 === (7))){
var inst_14249 = (state_14254[(2)]);
var state_14254__$1 = state_14254;
var statearr_14262_14399 = state_14254__$1;
(statearr_14262_14399[(2)] = inst_14249);

(statearr_14262_14399[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14255 === (1))){
var inst_14232 = init;
var inst_14233 = inst_14232;
var state_14254__$1 = (function (){var statearr_14264 = state_14254;
(statearr_14264[(7)] = inst_14233);

return statearr_14264;
})();
var statearr_14266_14402 = state_14254__$1;
(statearr_14266_14402[(2)] = null);

(statearr_14266_14402[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14255 === (4))){
var inst_14236 = (state_14254[(8)]);
var inst_14236__$1 = (state_14254[(2)]);
var inst_14237 = (inst_14236__$1 == null);
var state_14254__$1 = (function (){var statearr_14268 = state_14254;
(statearr_14268[(8)] = inst_14236__$1);

return statearr_14268;
})();
if(cljs.core.truth_(inst_14237)){
var statearr_14269_14406 = state_14254__$1;
(statearr_14269_14406[(1)] = (5));

} else {
var statearr_14270_14407 = state_14254__$1;
(statearr_14270_14407[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14255 === (6))){
var inst_14233 = (state_14254[(7)]);
var inst_14236 = (state_14254[(8)]);
var inst_14240 = (state_14254[(9)]);
var inst_14240__$1 = f.call(null,inst_14233,inst_14236);
var inst_14241 = cljs.core.reduced_QMARK_.call(null,inst_14240__$1);
var state_14254__$1 = (function (){var statearr_14276 = state_14254;
(statearr_14276[(9)] = inst_14240__$1);

return statearr_14276;
})();
if(inst_14241){
var statearr_14277_14411 = state_14254__$1;
(statearr_14277_14411[(1)] = (8));

} else {
var statearr_14279_14412 = state_14254__$1;
(statearr_14279_14412[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14255 === (3))){
var inst_14251 = (state_14254[(2)]);
var state_14254__$1 = state_14254;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14254__$1,inst_14251);
} else {
if((state_val_14255 === (2))){
var state_14254__$1 = state_14254;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14254__$1,(4),ch);
} else {
if((state_val_14255 === (9))){
var inst_14240 = (state_14254[(9)]);
var inst_14233 = inst_14240;
var state_14254__$1 = (function (){var statearr_14283 = state_14254;
(statearr_14283[(7)] = inst_14233);

return statearr_14283;
})();
var statearr_14287_14417 = state_14254__$1;
(statearr_14287_14417[(2)] = null);

(statearr_14287_14417[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14255 === (5))){
var inst_14233 = (state_14254[(7)]);
var state_14254__$1 = state_14254;
var statearr_14289_14419 = state_14254__$1;
(statearr_14289_14419[(2)] = inst_14233);

(statearr_14289_14419[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14255 === (10))){
var inst_14247 = (state_14254[(2)]);
var state_14254__$1 = state_14254;
var statearr_14291_14420 = state_14254__$1;
(statearr_14291_14420[(2)] = inst_14247);

(statearr_14291_14420[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14255 === (8))){
var inst_14240 = (state_14254[(9)]);
var inst_14243 = cljs.core.deref.call(null,inst_14240);
var state_14254__$1 = state_14254;
var statearr_14294_14423 = state_14254__$1;
(statearr_14294_14423[(2)] = inst_14243);

(statearr_14294_14423[(1)] = (10));


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
var cljs$core$async$reduce_$_state_machine__10329__auto__ = null;
var cljs$core$async$reduce_$_state_machine__10329__auto____0 = (function (){
var statearr_14298 = [null,null,null,null,null,null,null,null,null,null];
(statearr_14298[(0)] = cljs$core$async$reduce_$_state_machine__10329__auto__);

(statearr_14298[(1)] = (1));

return statearr_14298;
});
var cljs$core$async$reduce_$_state_machine__10329__auto____1 = (function (state_14254){
while(true){
var ret_value__10330__auto__ = (function (){try{while(true){
var result__10331__auto__ = switch__10328__auto__.call(null,state_14254);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10331__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10331__auto__;
}
break;
}
}catch (e14301){var ex__10332__auto__ = e14301;
var statearr_14302_14424 = state_14254;
(statearr_14302_14424[(2)] = ex__10332__auto__);


if(cljs.core.seq.call(null,(state_14254[(4)]))){
var statearr_14306_14426 = state_14254;
(statearr_14306_14426[(1)] = cljs.core.first.call(null,(state_14254[(4)])));

} else {
throw ex__10332__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10330__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14428 = state_14254;
state_14254 = G__14428;
continue;
} else {
return ret_value__10330__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__10329__auto__ = function(state_14254){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__10329__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__10329__auto____1.call(this,state_14254);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__10329__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__10329__auto____0;
cljs$core$async$reduce_$_state_machine__10329__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__10329__auto____1;
return cljs$core$async$reduce_$_state_machine__10329__auto__;
})()
})();
var state__10773__auto__ = (function (){var statearr_14310 = f__10772__auto__.call(null);
(statearr_14310[(6)] = c__10771__auto__);

return statearr_14310;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10773__auto__);
}));

return c__10771__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__10771__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__10772__auto__ = (function (){var switch__10328__auto__ = (function (state_14320){
var state_val_14321 = (state_14320[(1)]);
if((state_val_14321 === (1))){
var inst_14313 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_14320__$1 = state_14320;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14320__$1,(2),inst_14313);
} else {
if((state_val_14321 === (2))){
var inst_14315 = (state_14320[(2)]);
var inst_14317 = f__$1.call(null,inst_14315);
var state_14320__$1 = state_14320;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14320__$1,inst_14317);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__10329__auto__ = null;
var cljs$core$async$transduce_$_state_machine__10329__auto____0 = (function (){
var statearr_14329 = [null,null,null,null,null,null,null];
(statearr_14329[(0)] = cljs$core$async$transduce_$_state_machine__10329__auto__);

(statearr_14329[(1)] = (1));

return statearr_14329;
});
var cljs$core$async$transduce_$_state_machine__10329__auto____1 = (function (state_14320){
while(true){
var ret_value__10330__auto__ = (function (){try{while(true){
var result__10331__auto__ = switch__10328__auto__.call(null,state_14320);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10331__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10331__auto__;
}
break;
}
}catch (e14330){var ex__10332__auto__ = e14330;
var statearr_14331_14430 = state_14320;
(statearr_14331_14430[(2)] = ex__10332__auto__);


if(cljs.core.seq.call(null,(state_14320[(4)]))){
var statearr_14334_14431 = state_14320;
(statearr_14334_14431[(1)] = cljs.core.first.call(null,(state_14320[(4)])));

} else {
throw ex__10332__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10330__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14432 = state_14320;
state_14320 = G__14432;
continue;
} else {
return ret_value__10330__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__10329__auto__ = function(state_14320){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__10329__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__10329__auto____1.call(this,state_14320);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__10329__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__10329__auto____0;
cljs$core$async$transduce_$_state_machine__10329__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__10329__auto____1;
return cljs$core$async$transduce_$_state_machine__10329__auto__;
})()
})();
var state__10773__auto__ = (function (){var statearr_14336 = f__10772__auto__.call(null);
(statearr_14336[(6)] = c__10771__auto__);

return statearr_14336;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10773__auto__);
}));

return c__10771__auto__;
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
var G__14343 = arguments.length;
switch (G__14343) {
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
var c__10771__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__10772__auto__ = (function (){var switch__10328__auto__ = (function (state_14374){
var state_val_14375 = (state_14374[(1)]);
if((state_val_14375 === (7))){
var inst_14355 = (state_14374[(2)]);
var state_14374__$1 = state_14374;
var statearr_14378_14437 = state_14374__$1;
(statearr_14378_14437[(2)] = inst_14355);

(statearr_14378_14437[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14375 === (1))){
var inst_14349 = cljs.core.seq.call(null,coll);
var inst_14350 = inst_14349;
var state_14374__$1 = (function (){var statearr_14381 = state_14374;
(statearr_14381[(7)] = inst_14350);

return statearr_14381;
})();
var statearr_14382_14438 = state_14374__$1;
(statearr_14382_14438[(2)] = null);

(statearr_14382_14438[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14375 === (4))){
var inst_14350 = (state_14374[(7)]);
var inst_14353 = cljs.core.first.call(null,inst_14350);
var state_14374__$1 = state_14374;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14374__$1,(7),ch,inst_14353);
} else {
if((state_val_14375 === (13))){
var inst_14368 = (state_14374[(2)]);
var state_14374__$1 = state_14374;
var statearr_14386_14439 = state_14374__$1;
(statearr_14386_14439[(2)] = inst_14368);

(statearr_14386_14439[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14375 === (6))){
var inst_14358 = (state_14374[(2)]);
var state_14374__$1 = state_14374;
if(cljs.core.truth_(inst_14358)){
var statearr_14390_14440 = state_14374__$1;
(statearr_14390_14440[(1)] = (8));

} else {
var statearr_14391_14441 = state_14374__$1;
(statearr_14391_14441[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14375 === (3))){
var inst_14372 = (state_14374[(2)]);
var state_14374__$1 = state_14374;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14374__$1,inst_14372);
} else {
if((state_val_14375 === (12))){
var state_14374__$1 = state_14374;
var statearr_14394_14442 = state_14374__$1;
(statearr_14394_14442[(2)] = null);

(statearr_14394_14442[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14375 === (2))){
var inst_14350 = (state_14374[(7)]);
var state_14374__$1 = state_14374;
if(cljs.core.truth_(inst_14350)){
var statearr_14395_14443 = state_14374__$1;
(statearr_14395_14443[(1)] = (4));

} else {
var statearr_14396_14444 = state_14374__$1;
(statearr_14396_14444[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14375 === (11))){
var inst_14365 = cljs.core.async.close_BANG_.call(null,ch);
var state_14374__$1 = state_14374;
var statearr_14397_14446 = state_14374__$1;
(statearr_14397_14446[(2)] = inst_14365);

(statearr_14397_14446[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14375 === (9))){
var state_14374__$1 = state_14374;
if(cljs.core.truth_(close_QMARK_)){
var statearr_14398_14448 = state_14374__$1;
(statearr_14398_14448[(1)] = (11));

} else {
var statearr_14400_14449 = state_14374__$1;
(statearr_14400_14449[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14375 === (5))){
var inst_14350 = (state_14374[(7)]);
var state_14374__$1 = state_14374;
var statearr_14401_14450 = state_14374__$1;
(statearr_14401_14450[(2)] = inst_14350);

(statearr_14401_14450[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14375 === (10))){
var inst_14370 = (state_14374[(2)]);
var state_14374__$1 = state_14374;
var statearr_14403_14452 = state_14374__$1;
(statearr_14403_14452[(2)] = inst_14370);

(statearr_14403_14452[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14375 === (8))){
var inst_14350 = (state_14374[(7)]);
var inst_14361 = cljs.core.next.call(null,inst_14350);
var inst_14350__$1 = inst_14361;
var state_14374__$1 = (function (){var statearr_14404 = state_14374;
(statearr_14404[(7)] = inst_14350__$1);

return statearr_14404;
})();
var statearr_14405_14457 = state_14374__$1;
(statearr_14405_14457[(2)] = null);

(statearr_14405_14457[(1)] = (2));


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
var cljs$core$async$state_machine__10329__auto__ = null;
var cljs$core$async$state_machine__10329__auto____0 = (function (){
var statearr_14408 = [null,null,null,null,null,null,null,null];
(statearr_14408[(0)] = cljs$core$async$state_machine__10329__auto__);

(statearr_14408[(1)] = (1));

return statearr_14408;
});
var cljs$core$async$state_machine__10329__auto____1 = (function (state_14374){
while(true){
var ret_value__10330__auto__ = (function (){try{while(true){
var result__10331__auto__ = switch__10328__auto__.call(null,state_14374);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10331__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10331__auto__;
}
break;
}
}catch (e14409){var ex__10332__auto__ = e14409;
var statearr_14410_14458 = state_14374;
(statearr_14410_14458[(2)] = ex__10332__auto__);


if(cljs.core.seq.call(null,(state_14374[(4)]))){
var statearr_14413_14459 = state_14374;
(statearr_14413_14459[(1)] = cljs.core.first.call(null,(state_14374[(4)])));

} else {
throw ex__10332__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10330__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14461 = state_14374;
state_14374 = G__14461;
continue;
} else {
return ret_value__10330__auto__;
}
break;
}
});
cljs$core$async$state_machine__10329__auto__ = function(state_14374){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10329__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10329__auto____1.call(this,state_14374);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10329__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10329__auto____0;
cljs$core$async$state_machine__10329__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10329__auto____1;
return cljs$core$async$state_machine__10329__auto__;
})()
})();
var state__10773__auto__ = (function (){var statearr_14416 = f__10772__auto__.call(null);
(statearr_14416[(6)] = c__10771__auto__);

return statearr_14416;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10773__auto__);
}));

return c__10771__auto__;
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
var G__14422 = arguments.length;
switch (G__14422) {
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

var cljs$core$async$Mux$muxch_STAR_$dyn_14471 = (function (_){
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
return cljs$core$async$Mux$muxch_STAR_$dyn_14471.call(null,_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_14505 = (function (m,ch,close_QMARK_){
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
return cljs$core$async$Mult$tap_STAR_$dyn_14505.call(null,m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_14549 = (function (m,ch){
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
return cljs$core$async$Mult$untap_STAR_$dyn_14549.call(null,m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_14577 = (function (m){
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
return cljs$core$async$Mult$untap_all_STAR_$dyn_14577.call(null,m);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async14454 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14454 = (function (ch,cs,meta14455){
this.ch = ch;
this.cs = cs;
this.meta14455 = meta14455;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async14454.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14456,meta14455__$1){
var self__ = this;
var _14456__$1 = this;
return (new cljs.core.async.t_cljs$core$async14454(self__.ch,self__.cs,meta14455__$1));
}));

(cljs.core.async.t_cljs$core$async14454.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14456){
var self__ = this;
var _14456__$1 = this;
return self__.meta14455;
}));

(cljs.core.async.t_cljs$core$async14454.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async14454.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async14454.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async14454.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async14454.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async14454.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async14454.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta14455","meta14455",-1330744494,null)], null);
}));

(cljs.core.async.t_cljs$core$async14454.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async14454.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14454");

(cljs.core.async.t_cljs$core$async14454.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write.call(null,writer__5288__auto__,"cljs.core.async/t_cljs$core$async14454");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async14454.
 */
cljs.core.async.__GT_t_cljs$core$async14454 = (function cljs$core$async$mult_$___GT_t_cljs$core$async14454(ch__$1,cs__$1,meta14455){
return (new cljs.core.async.t_cljs$core$async14454(ch__$1,cs__$1,meta14455));
});

}

return (new cljs.core.async.t_cljs$core$async14454(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__10771__auto___14716 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__10772__auto__ = (function (){var switch__10328__auto__ = (function (state_14611){
var state_val_14612 = (state_14611[(1)]);
if((state_val_14612 === (7))){
var inst_14606 = (state_14611[(2)]);
var state_14611__$1 = state_14611;
var statearr_14613_14717 = state_14611__$1;
(statearr_14613_14717[(2)] = inst_14606);

(statearr_14613_14717[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14612 === (20))){
var inst_14502 = (state_14611[(7)]);
var inst_14515 = cljs.core.first.call(null,inst_14502);
var inst_14516 = cljs.core.nth.call(null,inst_14515,(0),null);
var inst_14517 = cljs.core.nth.call(null,inst_14515,(1),null);
var state_14611__$1 = (function (){var statearr_14614 = state_14611;
(statearr_14614[(8)] = inst_14516);

return statearr_14614;
})();
if(cljs.core.truth_(inst_14517)){
var statearr_14615_14718 = state_14611__$1;
(statearr_14615_14718[(1)] = (22));

} else {
var statearr_14616_14719 = state_14611__$1;
(statearr_14616_14719[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14612 === (27))){
var inst_14551 = (state_14611[(9)]);
var inst_14553 = (state_14611[(10)]);
var inst_14558 = (state_14611[(11)]);
var inst_14470 = (state_14611[(12)]);
var inst_14558__$1 = cljs.core._nth.call(null,inst_14551,inst_14553);
var inst_14559 = cljs.core.async.put_BANG_.call(null,inst_14558__$1,inst_14470,done);
var state_14611__$1 = (function (){var statearr_14617 = state_14611;
(statearr_14617[(11)] = inst_14558__$1);

return statearr_14617;
})();
if(cljs.core.truth_(inst_14559)){
var statearr_14618_14720 = state_14611__$1;
(statearr_14618_14720[(1)] = (30));

} else {
var statearr_14619_14721 = state_14611__$1;
(statearr_14619_14721[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14612 === (1))){
var state_14611__$1 = state_14611;
var statearr_14620_14722 = state_14611__$1;
(statearr_14620_14722[(2)] = null);

(statearr_14620_14722[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14612 === (24))){
var inst_14502 = (state_14611[(7)]);
var inst_14526 = (state_14611[(2)]);
var inst_14528 = cljs.core.next.call(null,inst_14502);
var inst_14480 = inst_14528;
var inst_14481 = null;
var inst_14482 = (0);
var inst_14483 = (0);
var state_14611__$1 = (function (){var statearr_14621 = state_14611;
(statearr_14621[(13)] = inst_14526);

(statearr_14621[(14)] = inst_14480);

(statearr_14621[(15)] = inst_14481);

(statearr_14621[(16)] = inst_14482);

(statearr_14621[(17)] = inst_14483);

return statearr_14621;
})();
var statearr_14622_14723 = state_14611__$1;
(statearr_14622_14723[(2)] = null);

(statearr_14622_14723[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14612 === (39))){
var state_14611__$1 = state_14611;
var statearr_14627_14724 = state_14611__$1;
(statearr_14627_14724[(2)] = null);

(statearr_14627_14724[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14612 === (4))){
var inst_14470 = (state_14611[(12)]);
var inst_14470__$1 = (state_14611[(2)]);
var inst_14472 = (inst_14470__$1 == null);
var state_14611__$1 = (function (){var statearr_14629 = state_14611;
(statearr_14629[(12)] = inst_14470__$1);

return statearr_14629;
})();
if(cljs.core.truth_(inst_14472)){
var statearr_14630_14725 = state_14611__$1;
(statearr_14630_14725[(1)] = (5));

} else {
var statearr_14631_14726 = state_14611__$1;
(statearr_14631_14726[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14612 === (15))){
var inst_14483 = (state_14611[(17)]);
var inst_14480 = (state_14611[(14)]);
var inst_14481 = (state_14611[(15)]);
var inst_14482 = (state_14611[(16)]);
var inst_14498 = (state_14611[(2)]);
var inst_14499 = (inst_14483 + (1));
var tmp14623 = inst_14482;
var tmp14624 = inst_14481;
var tmp14625 = inst_14480;
var inst_14480__$1 = tmp14625;
var inst_14481__$1 = tmp14624;
var inst_14482__$1 = tmp14623;
var inst_14483__$1 = inst_14499;
var state_14611__$1 = (function (){var statearr_14632 = state_14611;
(statearr_14632[(18)] = inst_14498);

(statearr_14632[(14)] = inst_14480__$1);

(statearr_14632[(15)] = inst_14481__$1);

(statearr_14632[(16)] = inst_14482__$1);

(statearr_14632[(17)] = inst_14483__$1);

return statearr_14632;
})();
var statearr_14633_14727 = state_14611__$1;
(statearr_14633_14727[(2)] = null);

(statearr_14633_14727[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14612 === (21))){
var inst_14531 = (state_14611[(2)]);
var state_14611__$1 = state_14611;
var statearr_14639_14728 = state_14611__$1;
(statearr_14639_14728[(2)] = inst_14531);

(statearr_14639_14728[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14612 === (31))){
var inst_14558 = (state_14611[(11)]);
var inst_14562 = cljs.core.async.untap_STAR_.call(null,m,inst_14558);
var state_14611__$1 = state_14611;
var statearr_14641_14729 = state_14611__$1;
(statearr_14641_14729[(2)] = inst_14562);

(statearr_14641_14729[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14612 === (32))){
var inst_14553 = (state_14611[(10)]);
var inst_14550 = (state_14611[(19)]);
var inst_14551 = (state_14611[(9)]);
var inst_14552 = (state_14611[(20)]);
var inst_14564 = (state_14611[(2)]);
var inst_14565 = (inst_14553 + (1));
var tmp14635 = inst_14552;
var tmp14636 = inst_14550;
var tmp14637 = inst_14551;
var inst_14550__$1 = tmp14636;
var inst_14551__$1 = tmp14637;
var inst_14552__$1 = tmp14635;
var inst_14553__$1 = inst_14565;
var state_14611__$1 = (function (){var statearr_14642 = state_14611;
(statearr_14642[(21)] = inst_14564);

(statearr_14642[(19)] = inst_14550__$1);

(statearr_14642[(9)] = inst_14551__$1);

(statearr_14642[(20)] = inst_14552__$1);

(statearr_14642[(10)] = inst_14553__$1);

return statearr_14642;
})();
var statearr_14643_14730 = state_14611__$1;
(statearr_14643_14730[(2)] = null);

(statearr_14643_14730[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14612 === (40))){
var inst_14579 = (state_14611[(22)]);
var inst_14583 = cljs.core.async.untap_STAR_.call(null,m,inst_14579);
var state_14611__$1 = state_14611;
var statearr_14647_14731 = state_14611__$1;
(statearr_14647_14731[(2)] = inst_14583);

(statearr_14647_14731[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14612 === (33))){
var inst_14568 = (state_14611[(23)]);
var inst_14571 = cljs.core.chunked_seq_QMARK_.call(null,inst_14568);
var state_14611__$1 = state_14611;
if(inst_14571){
var statearr_14648_14732 = state_14611__$1;
(statearr_14648_14732[(1)] = (36));

} else {
var statearr_14649_14733 = state_14611__$1;
(statearr_14649_14733[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14612 === (13))){
var inst_14492 = (state_14611[(24)]);
var inst_14495 = cljs.core.async.close_BANG_.call(null,inst_14492);
var state_14611__$1 = state_14611;
var statearr_14650_14734 = state_14611__$1;
(statearr_14650_14734[(2)] = inst_14495);

(statearr_14650_14734[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14612 === (22))){
var inst_14516 = (state_14611[(8)]);
var inst_14522 = cljs.core.async.close_BANG_.call(null,inst_14516);
var state_14611__$1 = state_14611;
var statearr_14651_14735 = state_14611__$1;
(statearr_14651_14735[(2)] = inst_14522);

(statearr_14651_14735[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14612 === (36))){
var inst_14568 = (state_14611[(23)]);
var inst_14573 = cljs.core.chunk_first.call(null,inst_14568);
var inst_14574 = cljs.core.chunk_rest.call(null,inst_14568);
var inst_14575 = cljs.core.count.call(null,inst_14573);
var inst_14550 = inst_14574;
var inst_14551 = inst_14573;
var inst_14552 = inst_14575;
var inst_14553 = (0);
var state_14611__$1 = (function (){var statearr_14653 = state_14611;
(statearr_14653[(19)] = inst_14550);

(statearr_14653[(9)] = inst_14551);

(statearr_14653[(20)] = inst_14552);

(statearr_14653[(10)] = inst_14553);

return statearr_14653;
})();
var statearr_14654_14736 = state_14611__$1;
(statearr_14654_14736[(2)] = null);

(statearr_14654_14736[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14612 === (41))){
var inst_14568 = (state_14611[(23)]);
var inst_14585 = (state_14611[(2)]);
var inst_14586 = cljs.core.next.call(null,inst_14568);
var inst_14550 = inst_14586;
var inst_14551 = null;
var inst_14552 = (0);
var inst_14553 = (0);
var state_14611__$1 = (function (){var statearr_14655 = state_14611;
(statearr_14655[(25)] = inst_14585);

(statearr_14655[(19)] = inst_14550);

(statearr_14655[(9)] = inst_14551);

(statearr_14655[(20)] = inst_14552);

(statearr_14655[(10)] = inst_14553);

return statearr_14655;
})();
var statearr_14656_14741 = state_14611__$1;
(statearr_14656_14741[(2)] = null);

(statearr_14656_14741[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14612 === (43))){
var state_14611__$1 = state_14611;
var statearr_14657_14742 = state_14611__$1;
(statearr_14657_14742[(2)] = null);

(statearr_14657_14742[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14612 === (29))){
var inst_14594 = (state_14611[(2)]);
var state_14611__$1 = state_14611;
var statearr_14659_14743 = state_14611__$1;
(statearr_14659_14743[(2)] = inst_14594);

(statearr_14659_14743[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14612 === (44))){
var inst_14603 = (state_14611[(2)]);
var state_14611__$1 = (function (){var statearr_14660 = state_14611;
(statearr_14660[(26)] = inst_14603);

return statearr_14660;
})();
var statearr_14661_14744 = state_14611__$1;
(statearr_14661_14744[(2)] = null);

(statearr_14661_14744[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14612 === (6))){
var inst_14541 = (state_14611[(27)]);
var inst_14540 = cljs.core.deref.call(null,cs);
var inst_14541__$1 = cljs.core.keys.call(null,inst_14540);
var inst_14542 = cljs.core.count.call(null,inst_14541__$1);
var inst_14543 = cljs.core.reset_BANG_.call(null,dctr,inst_14542);
var inst_14548 = cljs.core.seq.call(null,inst_14541__$1);
var inst_14550 = inst_14548;
var inst_14551 = null;
var inst_14552 = (0);
var inst_14553 = (0);
var state_14611__$1 = (function (){var statearr_14664 = state_14611;
(statearr_14664[(27)] = inst_14541__$1);

(statearr_14664[(28)] = inst_14543);

(statearr_14664[(19)] = inst_14550);

(statearr_14664[(9)] = inst_14551);

(statearr_14664[(20)] = inst_14552);

(statearr_14664[(10)] = inst_14553);

return statearr_14664;
})();
var statearr_14665_14749 = state_14611__$1;
(statearr_14665_14749[(2)] = null);

(statearr_14665_14749[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14612 === (28))){
var inst_14550 = (state_14611[(19)]);
var inst_14568 = (state_14611[(23)]);
var inst_14568__$1 = cljs.core.seq.call(null,inst_14550);
var state_14611__$1 = (function (){var statearr_14667 = state_14611;
(statearr_14667[(23)] = inst_14568__$1);

return statearr_14667;
})();
if(inst_14568__$1){
var statearr_14668_14751 = state_14611__$1;
(statearr_14668_14751[(1)] = (33));

} else {
var statearr_14669_14752 = state_14611__$1;
(statearr_14669_14752[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14612 === (25))){
var inst_14553 = (state_14611[(10)]);
var inst_14552 = (state_14611[(20)]);
var inst_14555 = (inst_14553 < inst_14552);
var inst_14556 = inst_14555;
var state_14611__$1 = state_14611;
if(cljs.core.truth_(inst_14556)){
var statearr_14670_14753 = state_14611__$1;
(statearr_14670_14753[(1)] = (27));

} else {
var statearr_14671_14754 = state_14611__$1;
(statearr_14671_14754[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14612 === (34))){
var state_14611__$1 = state_14611;
var statearr_14672_14755 = state_14611__$1;
(statearr_14672_14755[(2)] = null);

(statearr_14672_14755[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14612 === (17))){
var state_14611__$1 = state_14611;
var statearr_14673_14756 = state_14611__$1;
(statearr_14673_14756[(2)] = null);

(statearr_14673_14756[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14612 === (3))){
var inst_14608 = (state_14611[(2)]);
var state_14611__$1 = state_14611;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14611__$1,inst_14608);
} else {
if((state_val_14612 === (12))){
var inst_14536 = (state_14611[(2)]);
var state_14611__$1 = state_14611;
var statearr_14674_14757 = state_14611__$1;
(statearr_14674_14757[(2)] = inst_14536);

(statearr_14674_14757[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14612 === (2))){
var state_14611__$1 = state_14611;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14611__$1,(4),ch);
} else {
if((state_val_14612 === (23))){
var state_14611__$1 = state_14611;
var statearr_14676_14758 = state_14611__$1;
(statearr_14676_14758[(2)] = null);

(statearr_14676_14758[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14612 === (35))){
var inst_14592 = (state_14611[(2)]);
var state_14611__$1 = state_14611;
var statearr_14678_14759 = state_14611__$1;
(statearr_14678_14759[(2)] = inst_14592);

(statearr_14678_14759[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14612 === (19))){
var inst_14502 = (state_14611[(7)]);
var inst_14507 = cljs.core.chunk_first.call(null,inst_14502);
var inst_14508 = cljs.core.chunk_rest.call(null,inst_14502);
var inst_14509 = cljs.core.count.call(null,inst_14507);
var inst_14480 = inst_14508;
var inst_14481 = inst_14507;
var inst_14482 = inst_14509;
var inst_14483 = (0);
var state_14611__$1 = (function (){var statearr_14679 = state_14611;
(statearr_14679[(14)] = inst_14480);

(statearr_14679[(15)] = inst_14481);

(statearr_14679[(16)] = inst_14482);

(statearr_14679[(17)] = inst_14483);

return statearr_14679;
})();
var statearr_14680_14760 = state_14611__$1;
(statearr_14680_14760[(2)] = null);

(statearr_14680_14760[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14612 === (11))){
var inst_14480 = (state_14611[(14)]);
var inst_14502 = (state_14611[(7)]);
var inst_14502__$1 = cljs.core.seq.call(null,inst_14480);
var state_14611__$1 = (function (){var statearr_14682 = state_14611;
(statearr_14682[(7)] = inst_14502__$1);

return statearr_14682;
})();
if(inst_14502__$1){
var statearr_14683_14761 = state_14611__$1;
(statearr_14683_14761[(1)] = (16));

} else {
var statearr_14684_14762 = state_14611__$1;
(statearr_14684_14762[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14612 === (9))){
var inst_14538 = (state_14611[(2)]);
var state_14611__$1 = state_14611;
var statearr_14685_14763 = state_14611__$1;
(statearr_14685_14763[(2)] = inst_14538);

(statearr_14685_14763[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14612 === (5))){
var inst_14478 = cljs.core.deref.call(null,cs);
var inst_14479 = cljs.core.seq.call(null,inst_14478);
var inst_14480 = inst_14479;
var inst_14481 = null;
var inst_14482 = (0);
var inst_14483 = (0);
var state_14611__$1 = (function (){var statearr_14688 = state_14611;
(statearr_14688[(14)] = inst_14480);

(statearr_14688[(15)] = inst_14481);

(statearr_14688[(16)] = inst_14482);

(statearr_14688[(17)] = inst_14483);

return statearr_14688;
})();
var statearr_14690_14767 = state_14611__$1;
(statearr_14690_14767[(2)] = null);

(statearr_14690_14767[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14612 === (14))){
var state_14611__$1 = state_14611;
var statearr_14691_14768 = state_14611__$1;
(statearr_14691_14768[(2)] = null);

(statearr_14691_14768[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14612 === (45))){
var inst_14600 = (state_14611[(2)]);
var state_14611__$1 = state_14611;
var statearr_14692_14769 = state_14611__$1;
(statearr_14692_14769[(2)] = inst_14600);

(statearr_14692_14769[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14612 === (26))){
var inst_14541 = (state_14611[(27)]);
var inst_14596 = (state_14611[(2)]);
var inst_14597 = cljs.core.seq.call(null,inst_14541);
var state_14611__$1 = (function (){var statearr_14693 = state_14611;
(statearr_14693[(29)] = inst_14596);

return statearr_14693;
})();
if(inst_14597){
var statearr_14694_14770 = state_14611__$1;
(statearr_14694_14770[(1)] = (42));

} else {
var statearr_14695_14771 = state_14611__$1;
(statearr_14695_14771[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14612 === (16))){
var inst_14502 = (state_14611[(7)]);
var inst_14504 = cljs.core.chunked_seq_QMARK_.call(null,inst_14502);
var state_14611__$1 = state_14611;
if(inst_14504){
var statearr_14696_14772 = state_14611__$1;
(statearr_14696_14772[(1)] = (19));

} else {
var statearr_14697_14773 = state_14611__$1;
(statearr_14697_14773[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14612 === (38))){
var inst_14589 = (state_14611[(2)]);
var state_14611__$1 = state_14611;
var statearr_14698_14774 = state_14611__$1;
(statearr_14698_14774[(2)] = inst_14589);

(statearr_14698_14774[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14612 === (30))){
var state_14611__$1 = state_14611;
var statearr_14699_14775 = state_14611__$1;
(statearr_14699_14775[(2)] = null);

(statearr_14699_14775[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14612 === (10))){
var inst_14481 = (state_14611[(15)]);
var inst_14483 = (state_14611[(17)]);
var inst_14491 = cljs.core._nth.call(null,inst_14481,inst_14483);
var inst_14492 = cljs.core.nth.call(null,inst_14491,(0),null);
var inst_14493 = cljs.core.nth.call(null,inst_14491,(1),null);
var state_14611__$1 = (function (){var statearr_14700 = state_14611;
(statearr_14700[(24)] = inst_14492);

return statearr_14700;
})();
if(cljs.core.truth_(inst_14493)){
var statearr_14701_14776 = state_14611__$1;
(statearr_14701_14776[(1)] = (13));

} else {
var statearr_14702_14777 = state_14611__$1;
(statearr_14702_14777[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14612 === (18))){
var inst_14534 = (state_14611[(2)]);
var state_14611__$1 = state_14611;
var statearr_14703_14778 = state_14611__$1;
(statearr_14703_14778[(2)] = inst_14534);

(statearr_14703_14778[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14612 === (42))){
var state_14611__$1 = state_14611;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14611__$1,(45),dchan);
} else {
if((state_val_14612 === (37))){
var inst_14568 = (state_14611[(23)]);
var inst_14579 = (state_14611[(22)]);
var inst_14470 = (state_14611[(12)]);
var inst_14579__$1 = cljs.core.first.call(null,inst_14568);
var inst_14580 = cljs.core.async.put_BANG_.call(null,inst_14579__$1,inst_14470,done);
var state_14611__$1 = (function (){var statearr_14704 = state_14611;
(statearr_14704[(22)] = inst_14579__$1);

return statearr_14704;
})();
if(cljs.core.truth_(inst_14580)){
var statearr_14705_14779 = state_14611__$1;
(statearr_14705_14779[(1)] = (39));

} else {
var statearr_14706_14780 = state_14611__$1;
(statearr_14706_14780[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14612 === (8))){
var inst_14483 = (state_14611[(17)]);
var inst_14482 = (state_14611[(16)]);
var inst_14485 = (inst_14483 < inst_14482);
var inst_14486 = inst_14485;
var state_14611__$1 = state_14611;
if(cljs.core.truth_(inst_14486)){
var statearr_14707_14781 = state_14611__$1;
(statearr_14707_14781[(1)] = (10));

} else {
var statearr_14708_14782 = state_14611__$1;
(statearr_14708_14782[(1)] = (11));

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
var cljs$core$async$mult_$_state_machine__10329__auto__ = null;
var cljs$core$async$mult_$_state_machine__10329__auto____0 = (function (){
var statearr_14709 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14709[(0)] = cljs$core$async$mult_$_state_machine__10329__auto__);

(statearr_14709[(1)] = (1));

return statearr_14709;
});
var cljs$core$async$mult_$_state_machine__10329__auto____1 = (function (state_14611){
while(true){
var ret_value__10330__auto__ = (function (){try{while(true){
var result__10331__auto__ = switch__10328__auto__.call(null,state_14611);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10331__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10331__auto__;
}
break;
}
}catch (e14710){var ex__10332__auto__ = e14710;
var statearr_14711_14783 = state_14611;
(statearr_14711_14783[(2)] = ex__10332__auto__);


if(cljs.core.seq.call(null,(state_14611[(4)]))){
var statearr_14712_14787 = state_14611;
(statearr_14712_14787[(1)] = cljs.core.first.call(null,(state_14611[(4)])));

} else {
throw ex__10332__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10330__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14794 = state_14611;
state_14611 = G__14794;
continue;
} else {
return ret_value__10330__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__10329__auto__ = function(state_14611){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__10329__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__10329__auto____1.call(this,state_14611);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__10329__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__10329__auto____0;
cljs$core$async$mult_$_state_machine__10329__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__10329__auto____1;
return cljs$core$async$mult_$_state_machine__10329__auto__;
})()
})();
var state__10773__auto__ = (function (){var statearr_14713 = f__10772__auto__.call(null);
(statearr_14713[(6)] = c__10771__auto___14716);

return statearr_14713;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10773__auto__);
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
var G__14715 = arguments.length;
switch (G__14715) {
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

var cljs$core$async$Mix$admix_STAR_$dyn_14854 = (function (m,ch){
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
return cljs$core$async$Mix$admix_STAR_$dyn_14854.call(null,m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_14857 = (function (m,ch){
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
return cljs$core$async$Mix$unmix_STAR_$dyn_14857.call(null,m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_14860 = (function (m){
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
return cljs$core$async$Mix$unmix_all_STAR_$dyn_14860.call(null,m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_14862 = (function (m,state_map){
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
return cljs$core$async$Mix$toggle_STAR_$dyn_14862.call(null,m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_14866 = (function (m,mode){
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
return cljs$core$async$Mix$solo_mode_STAR_$dyn_14866.call(null,m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__5732__auto__ = [];
var len__5726__auto___14872 = arguments.length;
var i__5727__auto___14873 = (0);
while(true){
if((i__5727__auto___14873 < len__5726__auto___14872)){
args__5732__auto__.push((arguments[i__5727__auto___14873]));

var G__14875 = (i__5727__auto___14873 + (1));
i__5727__auto___14873 = G__14875;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((3) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5733__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__14745){
var map__14746 = p__14745;
var map__14746__$1 = cljs.core.__destructure_map.call(null,map__14746);
var opts = map__14746__$1;
var statearr_14747_14878 = state;
(statearr_14747_14878[(1)] = cont_block);


var temp__5804__auto__ = cljs.core.async.do_alts.call(null,(function (val){
var statearr_14748_14880 = state;
(statearr_14748_14880[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
}),ports,opts);
if(cljs.core.truth_(temp__5804__auto__)){
var cb = temp__5804__auto__;
var statearr_14750_14882 = state;
(statearr_14750_14882[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq14737){
var G__14738 = cljs.core.first.call(null,seq14737);
var seq14737__$1 = cljs.core.next.call(null,seq14737);
var G__14739 = cljs.core.first.call(null,seq14737__$1);
var seq14737__$2 = cljs.core.next.call(null,seq14737__$1);
var G__14740 = cljs.core.first.call(null,seq14737__$2);
var seq14737__$3 = cljs.core.next.call(null,seq14737__$2);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__14738,G__14739,G__14740,seq14737__$3);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async14764 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14764 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta14765){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta14765 = meta14765;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async14764.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14766,meta14765__$1){
var self__ = this;
var _14766__$1 = this;
return (new cljs.core.async.t_cljs$core$async14764(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta14765__$1));
}));

(cljs.core.async.t_cljs$core$async14764.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14766){
var self__ = this;
var _14766__$1 = this;
return self__.meta14765;
}));

(cljs.core.async.t_cljs$core$async14764.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async14764.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async14764.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async14764.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async14764.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async14764.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async14764.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async14764.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async14764.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta14765","meta14765",-1510383792,null)], null);
}));

(cljs.core.async.t_cljs$core$async14764.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async14764.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14764");

(cljs.core.async.t_cljs$core$async14764.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write.call(null,writer__5288__auto__,"cljs.core.async/t_cljs$core$async14764");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async14764.
 */
cljs.core.async.__GT_t_cljs$core$async14764 = (function cljs$core$async$mix_$___GT_t_cljs$core$async14764(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta14765){
return (new cljs.core.async.t_cljs$core$async14764(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta14765));
});

}

return (new cljs.core.async.t_cljs$core$async14764(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__10771__auto___14910 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__10772__auto__ = (function (){var switch__10328__auto__ = (function (state_14855){
var state_val_14856 = (state_14855[(1)]);
if((state_val_14856 === (7))){
var inst_14814 = (state_14855[(2)]);
var state_14855__$1 = state_14855;
if(cljs.core.truth_(inst_14814)){
var statearr_14858_14911 = state_14855__$1;
(statearr_14858_14911[(1)] = (8));

} else {
var statearr_14859_14912 = state_14855__$1;
(statearr_14859_14912[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14856 === (20))){
var inst_14806 = (state_14855[(7)]);
var state_14855__$1 = state_14855;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14855__$1,(23),out,inst_14806);
} else {
if((state_val_14856 === (1))){
var inst_14788 = calc_state.call(null);
var inst_14789 = cljs.core.__destructure_map.call(null,inst_14788);
var inst_14790 = cljs.core.get.call(null,inst_14789,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_14791 = cljs.core.get.call(null,inst_14789,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_14792 = cljs.core.get.call(null,inst_14789,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_14793 = inst_14788;
var state_14855__$1 = (function (){var statearr_14861 = state_14855;
(statearr_14861[(8)] = inst_14790);

(statearr_14861[(9)] = inst_14791);

(statearr_14861[(10)] = inst_14792);

(statearr_14861[(11)] = inst_14793);

return statearr_14861;
})();
var statearr_14863_14913 = state_14855__$1;
(statearr_14863_14913[(2)] = null);

(statearr_14863_14913[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14856 === (24))){
var inst_14797 = (state_14855[(12)]);
var inst_14793 = inst_14797;
var state_14855__$1 = (function (){var statearr_14864 = state_14855;
(statearr_14864[(11)] = inst_14793);

return statearr_14864;
})();
var statearr_14865_14914 = state_14855__$1;
(statearr_14865_14914[(2)] = null);

(statearr_14865_14914[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14856 === (4))){
var inst_14806 = (state_14855[(7)]);
var inst_14809 = (state_14855[(13)]);
var inst_14805 = (state_14855[(2)]);
var inst_14806__$1 = cljs.core.nth.call(null,inst_14805,(0),null);
var inst_14807 = cljs.core.nth.call(null,inst_14805,(1),null);
var inst_14809__$1 = (inst_14806__$1 == null);
var state_14855__$1 = (function (){var statearr_14867 = state_14855;
(statearr_14867[(7)] = inst_14806__$1);

(statearr_14867[(14)] = inst_14807);

(statearr_14867[(13)] = inst_14809__$1);

return statearr_14867;
})();
if(cljs.core.truth_(inst_14809__$1)){
var statearr_14868_14915 = state_14855__$1;
(statearr_14868_14915[(1)] = (5));

} else {
var statearr_14869_14916 = state_14855__$1;
(statearr_14869_14916[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14856 === (15))){
var inst_14798 = (state_14855[(15)]);
var inst_14828 = (state_14855[(16)]);
var inst_14828__$1 = cljs.core.empty_QMARK_.call(null,inst_14798);
var state_14855__$1 = (function (){var statearr_14870 = state_14855;
(statearr_14870[(16)] = inst_14828__$1);

return statearr_14870;
})();
if(inst_14828__$1){
var statearr_14871_14917 = state_14855__$1;
(statearr_14871_14917[(1)] = (17));

} else {
var statearr_14874_14918 = state_14855__$1;
(statearr_14874_14918[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14856 === (21))){
var inst_14797 = (state_14855[(12)]);
var inst_14793 = inst_14797;
var state_14855__$1 = (function (){var statearr_14876 = state_14855;
(statearr_14876[(11)] = inst_14793);

return statearr_14876;
})();
var statearr_14877_14919 = state_14855__$1;
(statearr_14877_14919[(2)] = null);

(statearr_14877_14919[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14856 === (13))){
var inst_14821 = (state_14855[(2)]);
var inst_14822 = calc_state.call(null);
var inst_14793 = inst_14822;
var state_14855__$1 = (function (){var statearr_14879 = state_14855;
(statearr_14879[(17)] = inst_14821);

(statearr_14879[(11)] = inst_14793);

return statearr_14879;
})();
var statearr_14881_14922 = state_14855__$1;
(statearr_14881_14922[(2)] = null);

(statearr_14881_14922[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14856 === (22))){
var inst_14848 = (state_14855[(2)]);
var state_14855__$1 = state_14855;
var statearr_14883_14923 = state_14855__$1;
(statearr_14883_14923[(2)] = inst_14848);

(statearr_14883_14923[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14856 === (6))){
var inst_14807 = (state_14855[(14)]);
var inst_14812 = cljs.core._EQ_.call(null,inst_14807,change);
var state_14855__$1 = state_14855;
var statearr_14884_14924 = state_14855__$1;
(statearr_14884_14924[(2)] = inst_14812);

(statearr_14884_14924[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14856 === (25))){
var state_14855__$1 = state_14855;
var statearr_14885_14925 = state_14855__$1;
(statearr_14885_14925[(2)] = null);

(statearr_14885_14925[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14856 === (17))){
var inst_14799 = (state_14855[(18)]);
var inst_14807 = (state_14855[(14)]);
var inst_14830 = inst_14799.call(null,inst_14807);
var inst_14831 = cljs.core.not.call(null,inst_14830);
var state_14855__$1 = state_14855;
var statearr_14886_14926 = state_14855__$1;
(statearr_14886_14926[(2)] = inst_14831);

(statearr_14886_14926[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14856 === (3))){
var inst_14852 = (state_14855[(2)]);
var state_14855__$1 = state_14855;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14855__$1,inst_14852);
} else {
if((state_val_14856 === (12))){
var state_14855__$1 = state_14855;
var statearr_14887_14927 = state_14855__$1;
(statearr_14887_14927[(2)] = null);

(statearr_14887_14927[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14856 === (2))){
var inst_14793 = (state_14855[(11)]);
var inst_14797 = (state_14855[(12)]);
var inst_14797__$1 = cljs.core.__destructure_map.call(null,inst_14793);
var inst_14798 = cljs.core.get.call(null,inst_14797__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_14799 = cljs.core.get.call(null,inst_14797__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_14800 = cljs.core.get.call(null,inst_14797__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_14855__$1 = (function (){var statearr_14888 = state_14855;
(statearr_14888[(12)] = inst_14797__$1);

(statearr_14888[(15)] = inst_14798);

(statearr_14888[(18)] = inst_14799);

return statearr_14888;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_14855__$1,(4),inst_14800);
} else {
if((state_val_14856 === (23))){
var inst_14839 = (state_14855[(2)]);
var state_14855__$1 = state_14855;
if(cljs.core.truth_(inst_14839)){
var statearr_14889_14929 = state_14855__$1;
(statearr_14889_14929[(1)] = (24));

} else {
var statearr_14890_14930 = state_14855__$1;
(statearr_14890_14930[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14856 === (19))){
var inst_14834 = (state_14855[(2)]);
var state_14855__$1 = state_14855;
var statearr_14891_14931 = state_14855__$1;
(statearr_14891_14931[(2)] = inst_14834);

(statearr_14891_14931[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14856 === (11))){
var inst_14807 = (state_14855[(14)]);
var inst_14818 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_14807);
var state_14855__$1 = state_14855;
var statearr_14892_14933 = state_14855__$1;
(statearr_14892_14933[(2)] = inst_14818);

(statearr_14892_14933[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14856 === (9))){
var inst_14798 = (state_14855[(15)]);
var inst_14807 = (state_14855[(14)]);
var inst_14825 = (state_14855[(19)]);
var inst_14825__$1 = inst_14798.call(null,inst_14807);
var state_14855__$1 = (function (){var statearr_14893 = state_14855;
(statearr_14893[(19)] = inst_14825__$1);

return statearr_14893;
})();
if(cljs.core.truth_(inst_14825__$1)){
var statearr_14894_14935 = state_14855__$1;
(statearr_14894_14935[(1)] = (14));

} else {
var statearr_14895_14936 = state_14855__$1;
(statearr_14895_14936[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14856 === (5))){
var inst_14809 = (state_14855[(13)]);
var state_14855__$1 = state_14855;
var statearr_14896_14937 = state_14855__$1;
(statearr_14896_14937[(2)] = inst_14809);

(statearr_14896_14937[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14856 === (14))){
var inst_14825 = (state_14855[(19)]);
var state_14855__$1 = state_14855;
var statearr_14897_14938 = state_14855__$1;
(statearr_14897_14938[(2)] = inst_14825);

(statearr_14897_14938[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14856 === (26))){
var inst_14844 = (state_14855[(2)]);
var state_14855__$1 = state_14855;
var statearr_14898_14939 = state_14855__$1;
(statearr_14898_14939[(2)] = inst_14844);

(statearr_14898_14939[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14856 === (16))){
var inst_14836 = (state_14855[(2)]);
var state_14855__$1 = state_14855;
if(cljs.core.truth_(inst_14836)){
var statearr_14899_14940 = state_14855__$1;
(statearr_14899_14940[(1)] = (20));

} else {
var statearr_14900_14941 = state_14855__$1;
(statearr_14900_14941[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14856 === (10))){
var inst_14850 = (state_14855[(2)]);
var state_14855__$1 = state_14855;
var statearr_14901_14945 = state_14855__$1;
(statearr_14901_14945[(2)] = inst_14850);

(statearr_14901_14945[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14856 === (18))){
var inst_14828 = (state_14855[(16)]);
var state_14855__$1 = state_14855;
var statearr_14902_14946 = state_14855__$1;
(statearr_14902_14946[(2)] = inst_14828);

(statearr_14902_14946[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14856 === (8))){
var inst_14806 = (state_14855[(7)]);
var inst_14816 = (inst_14806 == null);
var state_14855__$1 = state_14855;
if(cljs.core.truth_(inst_14816)){
var statearr_14903_14947 = state_14855__$1;
(statearr_14903_14947[(1)] = (11));

} else {
var statearr_14904_14948 = state_14855__$1;
(statearr_14904_14948[(1)] = (12));

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
var cljs$core$async$mix_$_state_machine__10329__auto__ = null;
var cljs$core$async$mix_$_state_machine__10329__auto____0 = (function (){
var statearr_14905 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14905[(0)] = cljs$core$async$mix_$_state_machine__10329__auto__);

(statearr_14905[(1)] = (1));

return statearr_14905;
});
var cljs$core$async$mix_$_state_machine__10329__auto____1 = (function (state_14855){
while(true){
var ret_value__10330__auto__ = (function (){try{while(true){
var result__10331__auto__ = switch__10328__auto__.call(null,state_14855);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10331__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10331__auto__;
}
break;
}
}catch (e14906){var ex__10332__auto__ = e14906;
var statearr_14907_14949 = state_14855;
(statearr_14907_14949[(2)] = ex__10332__auto__);


if(cljs.core.seq.call(null,(state_14855[(4)]))){
var statearr_14908_14950 = state_14855;
(statearr_14908_14950[(1)] = cljs.core.first.call(null,(state_14855[(4)])));

} else {
throw ex__10332__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10330__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14951 = state_14855;
state_14855 = G__14951;
continue;
} else {
return ret_value__10330__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__10329__auto__ = function(state_14855){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__10329__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__10329__auto____1.call(this,state_14855);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__10329__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__10329__auto____0;
cljs$core$async$mix_$_state_machine__10329__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__10329__auto____1;
return cljs$core$async$mix_$_state_machine__10329__auto__;
})()
})();
var state__10773__auto__ = (function (){var statearr_14909 = f__10772__auto__.call(null);
(statearr_14909[(6)] = c__10771__auto___14910);

return statearr_14909;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10773__auto__);
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

var cljs$core$async$Pub$sub_STAR_$dyn_14952 = (function (p,v,ch,close_QMARK_){
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
return cljs$core$async$Pub$sub_STAR_$dyn_14952.call(null,p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_14953 = (function (p,v,ch){
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
return cljs$core$async$Pub$unsub_STAR_$dyn_14953.call(null,p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_14954 = (function() {
var G__14955 = null;
var G__14955__1 = (function (p){
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
var G__14955__2 = (function (p,v){
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
G__14955 = function(p,v){
switch(arguments.length){
case 1:
return G__14955__1.call(this,p);
case 2:
return G__14955__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__14955.cljs$core$IFn$_invoke$arity$1 = G__14955__1;
G__14955.cljs$core$IFn$_invoke$arity$2 = G__14955__2;
return G__14955;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__14921 = arguments.length;
switch (G__14921) {
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
return cljs$core$async$Pub$unsub_all_STAR_$dyn_14954.call(null,p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_14954.call(null,p,v);
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
var G__14934 = arguments.length;
switch (G__14934) {
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
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,(function (p1__14928_SHARP_){
if(cljs.core.truth_(p1__14928_SHARP_.call(null,topic))){
return p1__14928_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__14928_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async14942 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14942 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta14943){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta14943 = meta14943;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async14942.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14944,meta14943__$1){
var self__ = this;
var _14944__$1 = this;
return (new cljs.core.async.t_cljs$core$async14942(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta14943__$1));
}));

(cljs.core.async.t_cljs$core$async14942.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14944){
var self__ = this;
var _14944__$1 = this;
return self__.meta14943;
}));

(cljs.core.async.t_cljs$core$async14942.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async14942.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async14942.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async14942.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async14942.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
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

(cljs.core.async.t_cljs$core$async14942.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async14942.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async14942.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta14943","meta14943",-1948130807,null)], null);
}));

(cljs.core.async.t_cljs$core$async14942.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async14942.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14942");

(cljs.core.async.t_cljs$core$async14942.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write.call(null,writer__5288__auto__,"cljs.core.async/t_cljs$core$async14942");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async14942.
 */
cljs.core.async.__GT_t_cljs$core$async14942 = (function cljs$core$async$__GT_t_cljs$core$async14942(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta14943){
return (new cljs.core.async.t_cljs$core$async14942(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta14943));
});

}

return (new cljs.core.async.t_cljs$core$async14942(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__10771__auto___15079 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__10772__auto__ = (function (){var switch__10328__auto__ = (function (state_15028){
var state_val_15029 = (state_15028[(1)]);
if((state_val_15029 === (7))){
var inst_15024 = (state_15028[(2)]);
var state_15028__$1 = state_15028;
var statearr_15030_15080 = state_15028__$1;
(statearr_15030_15080[(2)] = inst_15024);

(statearr_15030_15080[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15029 === (20))){
var state_15028__$1 = state_15028;
var statearr_15031_15081 = state_15028__$1;
(statearr_15031_15081[(2)] = null);

(statearr_15031_15081[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15029 === (1))){
var state_15028__$1 = state_15028;
var statearr_15032_15082 = state_15028__$1;
(statearr_15032_15082[(2)] = null);

(statearr_15032_15082[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15029 === (24))){
var inst_15007 = (state_15028[(7)]);
var inst_15016 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_15007);
var state_15028__$1 = state_15028;
var statearr_15033_15083 = state_15028__$1;
(statearr_15033_15083[(2)] = inst_15016);

(statearr_15033_15083[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15029 === (4))){
var inst_14959 = (state_15028[(8)]);
var inst_14959__$1 = (state_15028[(2)]);
var inst_14960 = (inst_14959__$1 == null);
var state_15028__$1 = (function (){var statearr_15034 = state_15028;
(statearr_15034[(8)] = inst_14959__$1);

return statearr_15034;
})();
if(cljs.core.truth_(inst_14960)){
var statearr_15035_15084 = state_15028__$1;
(statearr_15035_15084[(1)] = (5));

} else {
var statearr_15036_15085 = state_15028__$1;
(statearr_15036_15085[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15029 === (15))){
var inst_15001 = (state_15028[(2)]);
var state_15028__$1 = state_15028;
var statearr_15037_15086 = state_15028__$1;
(statearr_15037_15086[(2)] = inst_15001);

(statearr_15037_15086[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15029 === (21))){
var inst_15021 = (state_15028[(2)]);
var state_15028__$1 = (function (){var statearr_15038 = state_15028;
(statearr_15038[(9)] = inst_15021);

return statearr_15038;
})();
var statearr_15039_15088 = state_15028__$1;
(statearr_15039_15088[(2)] = null);

(statearr_15039_15088[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15029 === (13))){
var inst_14983 = (state_15028[(10)]);
var inst_14985 = cljs.core.chunked_seq_QMARK_.call(null,inst_14983);
var state_15028__$1 = state_15028;
if(inst_14985){
var statearr_15040_15090 = state_15028__$1;
(statearr_15040_15090[(1)] = (16));

} else {
var statearr_15041_15091 = state_15028__$1;
(statearr_15041_15091[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15029 === (22))){
var inst_15013 = (state_15028[(2)]);
var state_15028__$1 = state_15028;
if(cljs.core.truth_(inst_15013)){
var statearr_15042_15092 = state_15028__$1;
(statearr_15042_15092[(1)] = (23));

} else {
var statearr_15043_15093 = state_15028__$1;
(statearr_15043_15093[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15029 === (6))){
var inst_14959 = (state_15028[(8)]);
var inst_15007 = (state_15028[(7)]);
var inst_15009 = (state_15028[(11)]);
var inst_15007__$1 = topic_fn.call(null,inst_14959);
var inst_15008 = cljs.core.deref.call(null,mults);
var inst_15009__$1 = cljs.core.get.call(null,inst_15008,inst_15007__$1);
var state_15028__$1 = (function (){var statearr_15044 = state_15028;
(statearr_15044[(7)] = inst_15007__$1);

(statearr_15044[(11)] = inst_15009__$1);

return statearr_15044;
})();
if(cljs.core.truth_(inst_15009__$1)){
var statearr_15045_15094 = state_15028__$1;
(statearr_15045_15094[(1)] = (19));

} else {
var statearr_15046_15095 = state_15028__$1;
(statearr_15046_15095[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15029 === (25))){
var inst_15018 = (state_15028[(2)]);
var state_15028__$1 = state_15028;
var statearr_15047_15096 = state_15028__$1;
(statearr_15047_15096[(2)] = inst_15018);

(statearr_15047_15096[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15029 === (17))){
var inst_14983 = (state_15028[(10)]);
var inst_14992 = cljs.core.first.call(null,inst_14983);
var inst_14993 = cljs.core.async.muxch_STAR_.call(null,inst_14992);
var inst_14994 = cljs.core.async.close_BANG_.call(null,inst_14993);
var inst_14995 = cljs.core.next.call(null,inst_14983);
var inst_14969 = inst_14995;
var inst_14970 = null;
var inst_14971 = (0);
var inst_14972 = (0);
var state_15028__$1 = (function (){var statearr_15048 = state_15028;
(statearr_15048[(12)] = inst_14994);

(statearr_15048[(13)] = inst_14969);

(statearr_15048[(14)] = inst_14970);

(statearr_15048[(15)] = inst_14971);

(statearr_15048[(16)] = inst_14972);

return statearr_15048;
})();
var statearr_15049_15097 = state_15028__$1;
(statearr_15049_15097[(2)] = null);

(statearr_15049_15097[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15029 === (3))){
var inst_15026 = (state_15028[(2)]);
var state_15028__$1 = state_15028;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15028__$1,inst_15026);
} else {
if((state_val_15029 === (12))){
var inst_15003 = (state_15028[(2)]);
var state_15028__$1 = state_15028;
var statearr_15050_15108 = state_15028__$1;
(statearr_15050_15108[(2)] = inst_15003);

(statearr_15050_15108[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15029 === (2))){
var state_15028__$1 = state_15028;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15028__$1,(4),ch);
} else {
if((state_val_15029 === (23))){
var state_15028__$1 = state_15028;
var statearr_15051_15141 = state_15028__$1;
(statearr_15051_15141[(2)] = null);

(statearr_15051_15141[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15029 === (19))){
var inst_15009 = (state_15028[(11)]);
var inst_14959 = (state_15028[(8)]);
var inst_15011 = cljs.core.async.muxch_STAR_.call(null,inst_15009);
var state_15028__$1 = state_15028;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15028__$1,(22),inst_15011,inst_14959);
} else {
if((state_val_15029 === (11))){
var inst_14969 = (state_15028[(13)]);
var inst_14983 = (state_15028[(10)]);
var inst_14983__$1 = cljs.core.seq.call(null,inst_14969);
var state_15028__$1 = (function (){var statearr_15052 = state_15028;
(statearr_15052[(10)] = inst_14983__$1);

return statearr_15052;
})();
if(inst_14983__$1){
var statearr_15053_15145 = state_15028__$1;
(statearr_15053_15145[(1)] = (13));

} else {
var statearr_15054_15147 = state_15028__$1;
(statearr_15054_15147[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15029 === (9))){
var inst_15005 = (state_15028[(2)]);
var state_15028__$1 = state_15028;
var statearr_15055_15148 = state_15028__$1;
(statearr_15055_15148[(2)] = inst_15005);

(statearr_15055_15148[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15029 === (5))){
var inst_14966 = cljs.core.deref.call(null,mults);
var inst_14967 = cljs.core.vals.call(null,inst_14966);
var inst_14968 = cljs.core.seq.call(null,inst_14967);
var inst_14969 = inst_14968;
var inst_14970 = null;
var inst_14971 = (0);
var inst_14972 = (0);
var state_15028__$1 = (function (){var statearr_15056 = state_15028;
(statearr_15056[(13)] = inst_14969);

(statearr_15056[(14)] = inst_14970);

(statearr_15056[(15)] = inst_14971);

(statearr_15056[(16)] = inst_14972);

return statearr_15056;
})();
var statearr_15057_15151 = state_15028__$1;
(statearr_15057_15151[(2)] = null);

(statearr_15057_15151[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15029 === (14))){
var state_15028__$1 = state_15028;
var statearr_15061_15153 = state_15028__$1;
(statearr_15061_15153[(2)] = null);

(statearr_15061_15153[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15029 === (16))){
var inst_14983 = (state_15028[(10)]);
var inst_14987 = cljs.core.chunk_first.call(null,inst_14983);
var inst_14988 = cljs.core.chunk_rest.call(null,inst_14983);
var inst_14989 = cljs.core.count.call(null,inst_14987);
var inst_14969 = inst_14988;
var inst_14970 = inst_14987;
var inst_14971 = inst_14989;
var inst_14972 = (0);
var state_15028__$1 = (function (){var statearr_15062 = state_15028;
(statearr_15062[(13)] = inst_14969);

(statearr_15062[(14)] = inst_14970);

(statearr_15062[(15)] = inst_14971);

(statearr_15062[(16)] = inst_14972);

return statearr_15062;
})();
var statearr_15063_15158 = state_15028__$1;
(statearr_15063_15158[(2)] = null);

(statearr_15063_15158[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15029 === (10))){
var inst_14970 = (state_15028[(14)]);
var inst_14972 = (state_15028[(16)]);
var inst_14969 = (state_15028[(13)]);
var inst_14971 = (state_15028[(15)]);
var inst_14977 = cljs.core._nth.call(null,inst_14970,inst_14972);
var inst_14978 = cljs.core.async.muxch_STAR_.call(null,inst_14977);
var inst_14979 = cljs.core.async.close_BANG_.call(null,inst_14978);
var inst_14980 = (inst_14972 + (1));
var tmp15058 = inst_14970;
var tmp15059 = inst_14969;
var tmp15060 = inst_14971;
var inst_14969__$1 = tmp15059;
var inst_14970__$1 = tmp15058;
var inst_14971__$1 = tmp15060;
var inst_14972__$1 = inst_14980;
var state_15028__$1 = (function (){var statearr_15064 = state_15028;
(statearr_15064[(17)] = inst_14979);

(statearr_15064[(13)] = inst_14969__$1);

(statearr_15064[(14)] = inst_14970__$1);

(statearr_15064[(15)] = inst_14971__$1);

(statearr_15064[(16)] = inst_14972__$1);

return statearr_15064;
})();
var statearr_15065_15162 = state_15028__$1;
(statearr_15065_15162[(2)] = null);

(statearr_15065_15162[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15029 === (18))){
var inst_14998 = (state_15028[(2)]);
var state_15028__$1 = state_15028;
var statearr_15066_15163 = state_15028__$1;
(statearr_15066_15163[(2)] = inst_14998);

(statearr_15066_15163[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15029 === (8))){
var inst_14972 = (state_15028[(16)]);
var inst_14971 = (state_15028[(15)]);
var inst_14974 = (inst_14972 < inst_14971);
var inst_14975 = inst_14974;
var state_15028__$1 = state_15028;
if(cljs.core.truth_(inst_14975)){
var statearr_15067_15165 = state_15028__$1;
(statearr_15067_15165[(1)] = (10));

} else {
var statearr_15068_15166 = state_15028__$1;
(statearr_15068_15166[(1)] = (11));

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
var cljs$core$async$state_machine__10329__auto__ = null;
var cljs$core$async$state_machine__10329__auto____0 = (function (){
var statearr_15069 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15069[(0)] = cljs$core$async$state_machine__10329__auto__);

(statearr_15069[(1)] = (1));

return statearr_15069;
});
var cljs$core$async$state_machine__10329__auto____1 = (function (state_15028){
while(true){
var ret_value__10330__auto__ = (function (){try{while(true){
var result__10331__auto__ = switch__10328__auto__.call(null,state_15028);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10331__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10331__auto__;
}
break;
}
}catch (e15070){var ex__10332__auto__ = e15070;
var statearr_15071_15169 = state_15028;
(statearr_15071_15169[(2)] = ex__10332__auto__);


if(cljs.core.seq.call(null,(state_15028[(4)]))){
var statearr_15072_15171 = state_15028;
(statearr_15072_15171[(1)] = cljs.core.first.call(null,(state_15028[(4)])));

} else {
throw ex__10332__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10330__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15172 = state_15028;
state_15028 = G__15172;
continue;
} else {
return ret_value__10330__auto__;
}
break;
}
});
cljs$core$async$state_machine__10329__auto__ = function(state_15028){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10329__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10329__auto____1.call(this,state_15028);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10329__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10329__auto____0;
cljs$core$async$state_machine__10329__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10329__auto____1;
return cljs$core$async$state_machine__10329__auto__;
})()
})();
var state__10773__auto__ = (function (){var statearr_15073 = f__10772__auto__.call(null);
(statearr_15073[(6)] = c__10771__auto___15079);

return statearr_15073;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10773__auto__);
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
var G__15076 = arguments.length;
switch (G__15076) {
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
var G__15078 = arguments.length;
switch (G__15078) {
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
var G__15089 = arguments.length;
switch (G__15089) {
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
var c__10771__auto___15198 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__10772__auto__ = (function (){var switch__10328__auto__ = (function (state_15142){
var state_val_15143 = (state_15142[(1)]);
if((state_val_15143 === (7))){
var state_15142__$1 = state_15142;
var statearr_15144_15213 = state_15142__$1;
(statearr_15144_15213[(2)] = null);

(statearr_15144_15213[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15143 === (1))){
var state_15142__$1 = state_15142;
var statearr_15146_15228 = state_15142__$1;
(statearr_15146_15228[(2)] = null);

(statearr_15146_15228[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15143 === (4))){
var inst_15101 = (state_15142[(7)]);
var inst_15100 = (state_15142[(8)]);
var inst_15103 = (inst_15101 < inst_15100);
var state_15142__$1 = state_15142;
if(cljs.core.truth_(inst_15103)){
var statearr_15149_15231 = state_15142__$1;
(statearr_15149_15231[(1)] = (6));

} else {
var statearr_15150_15232 = state_15142__$1;
(statearr_15150_15232[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15143 === (15))){
var inst_15127 = (state_15142[(9)]);
var inst_15132 = cljs.core.apply.call(null,f,inst_15127);
var state_15142__$1 = state_15142;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15142__$1,(17),out,inst_15132);
} else {
if((state_val_15143 === (13))){
var inst_15127 = (state_15142[(9)]);
var inst_15127__$1 = (state_15142[(2)]);
var inst_15128 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_15127__$1);
var state_15142__$1 = (function (){var statearr_15152 = state_15142;
(statearr_15152[(9)] = inst_15127__$1);

return statearr_15152;
})();
if(cljs.core.truth_(inst_15128)){
var statearr_15154_15233 = state_15142__$1;
(statearr_15154_15233[(1)] = (14));

} else {
var statearr_15155_15234 = state_15142__$1;
(statearr_15155_15234[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15143 === (6))){
var state_15142__$1 = state_15142;
var statearr_15156_15236 = state_15142__$1;
(statearr_15156_15236[(2)] = null);

(statearr_15156_15236[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15143 === (17))){
var inst_15134 = (state_15142[(2)]);
var state_15142__$1 = (function (){var statearr_15159 = state_15142;
(statearr_15159[(10)] = inst_15134);

return statearr_15159;
})();
var statearr_15160_15239 = state_15142__$1;
(statearr_15160_15239[(2)] = null);

(statearr_15160_15239[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15143 === (3))){
var inst_15139 = (state_15142[(2)]);
var state_15142__$1 = state_15142;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15142__$1,inst_15139);
} else {
if((state_val_15143 === (12))){
var _ = (function (){var statearr_15161 = state_15142;
(statearr_15161[(4)] = cljs.core.rest.call(null,(state_15142[(4)])));

return statearr_15161;
})();
var state_15142__$1 = state_15142;
var ex15157 = (state_15142__$1[(2)]);
var statearr_15164_15242 = state_15142__$1;
(statearr_15164_15242[(5)] = ex15157);


if((ex15157 instanceof Object)){
var statearr_15167_15243 = state_15142__$1;
(statearr_15167_15243[(1)] = (11));

(statearr_15167_15243[(5)] = null);

} else {
throw ex15157;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15143 === (2))){
var inst_15099 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_15100 = cnt;
var inst_15101 = (0);
var state_15142__$1 = (function (){var statearr_15168 = state_15142;
(statearr_15168[(11)] = inst_15099);

(statearr_15168[(8)] = inst_15100);

(statearr_15168[(7)] = inst_15101);

return statearr_15168;
})();
var statearr_15170_15245 = state_15142__$1;
(statearr_15170_15245[(2)] = null);

(statearr_15170_15245[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15143 === (11))){
var inst_15105 = (state_15142[(2)]);
var inst_15106 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_15142__$1 = (function (){var statearr_15173 = state_15142;
(statearr_15173[(12)] = inst_15105);

return statearr_15173;
})();
var statearr_15174_15247 = state_15142__$1;
(statearr_15174_15247[(2)] = inst_15106);

(statearr_15174_15247[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15143 === (9))){
var inst_15101 = (state_15142[(7)]);
var _ = (function (){var statearr_15175 = state_15142;
(statearr_15175[(4)] = cljs.core.cons.call(null,(12),(state_15142[(4)])));

return statearr_15175;
})();
var inst_15113 = chs__$1.call(null,inst_15101);
var inst_15114 = done.call(null,inst_15101);
var inst_15115 = cljs.core.async.take_BANG_.call(null,inst_15113,inst_15114);
var ___$1 = (function (){var statearr_15177 = state_15142;
(statearr_15177[(4)] = cljs.core.rest.call(null,(state_15142[(4)])));

return statearr_15177;
})();
var state_15142__$1 = state_15142;
var statearr_15178_15250 = state_15142__$1;
(statearr_15178_15250[(2)] = inst_15115);

(statearr_15178_15250[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15143 === (5))){
var inst_15125 = (state_15142[(2)]);
var state_15142__$1 = (function (){var statearr_15179 = state_15142;
(statearr_15179[(13)] = inst_15125);

return statearr_15179;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15142__$1,(13),dchan);
} else {
if((state_val_15143 === (14))){
var inst_15130 = cljs.core.async.close_BANG_.call(null,out);
var state_15142__$1 = state_15142;
var statearr_15181_15253 = state_15142__$1;
(statearr_15181_15253[(2)] = inst_15130);

(statearr_15181_15253[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15143 === (16))){
var inst_15137 = (state_15142[(2)]);
var state_15142__$1 = state_15142;
var statearr_15182_15254 = state_15142__$1;
(statearr_15182_15254[(2)] = inst_15137);

(statearr_15182_15254[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15143 === (10))){
var inst_15101 = (state_15142[(7)]);
var inst_15118 = (state_15142[(2)]);
var inst_15119 = (inst_15101 + (1));
var inst_15101__$1 = inst_15119;
var state_15142__$1 = (function (){var statearr_15183 = state_15142;
(statearr_15183[(14)] = inst_15118);

(statearr_15183[(7)] = inst_15101__$1);

return statearr_15183;
})();
var statearr_15184_15257 = state_15142__$1;
(statearr_15184_15257[(2)] = null);

(statearr_15184_15257[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15143 === (8))){
var inst_15123 = (state_15142[(2)]);
var state_15142__$1 = state_15142;
var statearr_15185_15258 = state_15142__$1;
(statearr_15185_15258[(2)] = inst_15123);

(statearr_15185_15258[(1)] = (5));


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
var cljs$core$async$state_machine__10329__auto__ = null;
var cljs$core$async$state_machine__10329__auto____0 = (function (){
var statearr_15186 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15186[(0)] = cljs$core$async$state_machine__10329__auto__);

(statearr_15186[(1)] = (1));

return statearr_15186;
});
var cljs$core$async$state_machine__10329__auto____1 = (function (state_15142){
while(true){
var ret_value__10330__auto__ = (function (){try{while(true){
var result__10331__auto__ = switch__10328__auto__.call(null,state_15142);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10331__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10331__auto__;
}
break;
}
}catch (e15187){var ex__10332__auto__ = e15187;
var statearr_15188_15261 = state_15142;
(statearr_15188_15261[(2)] = ex__10332__auto__);


if(cljs.core.seq.call(null,(state_15142[(4)]))){
var statearr_15189_15262 = state_15142;
(statearr_15189_15262[(1)] = cljs.core.first.call(null,(state_15142[(4)])));

} else {
throw ex__10332__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10330__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15264 = state_15142;
state_15142 = G__15264;
continue;
} else {
return ret_value__10330__auto__;
}
break;
}
});
cljs$core$async$state_machine__10329__auto__ = function(state_15142){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10329__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10329__auto____1.call(this,state_15142);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10329__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10329__auto____0;
cljs$core$async$state_machine__10329__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10329__auto____1;
return cljs$core$async$state_machine__10329__auto__;
})()
})();
var state__10773__auto__ = (function (){var statearr_15190 = f__10772__auto__.call(null);
(statearr_15190[(6)] = c__10771__auto___15198);

return statearr_15190;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10773__auto__);
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
var G__15194 = arguments.length;
switch (G__15194) {
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
var c__10771__auto___15271 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__10772__auto__ = (function (){var switch__10328__auto__ = (function (state_15229){
var state_val_15230 = (state_15229[(1)]);
if((state_val_15230 === (7))){
var inst_15206 = (state_15229[(7)]);
var inst_15207 = (state_15229[(8)]);
var inst_15206__$1 = (state_15229[(2)]);
var inst_15207__$1 = cljs.core.nth.call(null,inst_15206__$1,(0),null);
var inst_15208 = cljs.core.nth.call(null,inst_15206__$1,(1),null);
var inst_15209 = (inst_15207__$1 == null);
var state_15229__$1 = (function (){var statearr_15235 = state_15229;
(statearr_15235[(7)] = inst_15206__$1);

(statearr_15235[(8)] = inst_15207__$1);

(statearr_15235[(9)] = inst_15208);

return statearr_15235;
})();
if(cljs.core.truth_(inst_15209)){
var statearr_15237_15273 = state_15229__$1;
(statearr_15237_15273[(1)] = (8));

} else {
var statearr_15238_15274 = state_15229__$1;
(statearr_15238_15274[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15230 === (1))){
var inst_15195 = cljs.core.vec.call(null,chs);
var inst_15196 = inst_15195;
var state_15229__$1 = (function (){var statearr_15240 = state_15229;
(statearr_15240[(10)] = inst_15196);

return statearr_15240;
})();
var statearr_15241_15275 = state_15229__$1;
(statearr_15241_15275[(2)] = null);

(statearr_15241_15275[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15230 === (4))){
var inst_15196 = (state_15229[(10)]);
var state_15229__$1 = state_15229;
return cljs.core.async.ioc_alts_BANG_.call(null,state_15229__$1,(7),inst_15196);
} else {
if((state_val_15230 === (6))){
var inst_15224 = (state_15229[(2)]);
var state_15229__$1 = state_15229;
var statearr_15244_15278 = state_15229__$1;
(statearr_15244_15278[(2)] = inst_15224);

(statearr_15244_15278[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15230 === (3))){
var inst_15226 = (state_15229[(2)]);
var state_15229__$1 = state_15229;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15229__$1,inst_15226);
} else {
if((state_val_15230 === (2))){
var inst_15196 = (state_15229[(10)]);
var inst_15199 = cljs.core.count.call(null,inst_15196);
var inst_15200 = (inst_15199 > (0));
var state_15229__$1 = state_15229;
if(cljs.core.truth_(inst_15200)){
var statearr_15248_15286 = state_15229__$1;
(statearr_15248_15286[(1)] = (4));

} else {
var statearr_15249_15289 = state_15229__$1;
(statearr_15249_15289[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15230 === (11))){
var inst_15196 = (state_15229[(10)]);
var inst_15217 = (state_15229[(2)]);
var tmp15246 = inst_15196;
var inst_15196__$1 = tmp15246;
var state_15229__$1 = (function (){var statearr_15251 = state_15229;
(statearr_15251[(11)] = inst_15217);

(statearr_15251[(10)] = inst_15196__$1);

return statearr_15251;
})();
var statearr_15252_15303 = state_15229__$1;
(statearr_15252_15303[(2)] = null);

(statearr_15252_15303[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15230 === (9))){
var inst_15207 = (state_15229[(8)]);
var state_15229__$1 = state_15229;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15229__$1,(11),out,inst_15207);
} else {
if((state_val_15230 === (5))){
var inst_15222 = cljs.core.async.close_BANG_.call(null,out);
var state_15229__$1 = state_15229;
var statearr_15255_15305 = state_15229__$1;
(statearr_15255_15305[(2)] = inst_15222);

(statearr_15255_15305[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15230 === (10))){
var inst_15220 = (state_15229[(2)]);
var state_15229__$1 = state_15229;
var statearr_15256_15306 = state_15229__$1;
(statearr_15256_15306[(2)] = inst_15220);

(statearr_15256_15306[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15230 === (8))){
var inst_15196 = (state_15229[(10)]);
var inst_15206 = (state_15229[(7)]);
var inst_15207 = (state_15229[(8)]);
var inst_15208 = (state_15229[(9)]);
var inst_15211 = (function (){var cs = inst_15196;
var vec__15202 = inst_15206;
var v = inst_15207;
var c = inst_15208;
return (function (p1__15191_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__15191_SHARP_);
});
})();
var inst_15212 = cljs.core.filterv.call(null,inst_15211,inst_15196);
var inst_15196__$1 = inst_15212;
var state_15229__$1 = (function (){var statearr_15259 = state_15229;
(statearr_15259[(10)] = inst_15196__$1);

return statearr_15259;
})();
var statearr_15260_15311 = state_15229__$1;
(statearr_15260_15311[(2)] = null);

(statearr_15260_15311[(1)] = (2));


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
var cljs$core$async$state_machine__10329__auto__ = null;
var cljs$core$async$state_machine__10329__auto____0 = (function (){
var statearr_15263 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15263[(0)] = cljs$core$async$state_machine__10329__auto__);

(statearr_15263[(1)] = (1));

return statearr_15263;
});
var cljs$core$async$state_machine__10329__auto____1 = (function (state_15229){
while(true){
var ret_value__10330__auto__ = (function (){try{while(true){
var result__10331__auto__ = switch__10328__auto__.call(null,state_15229);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10331__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10331__auto__;
}
break;
}
}catch (e15265){var ex__10332__auto__ = e15265;
var statearr_15266_15314 = state_15229;
(statearr_15266_15314[(2)] = ex__10332__auto__);


if(cljs.core.seq.call(null,(state_15229[(4)]))){
var statearr_15267_15316 = state_15229;
(statearr_15267_15316[(1)] = cljs.core.first.call(null,(state_15229[(4)])));

} else {
throw ex__10332__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10330__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15317 = state_15229;
state_15229 = G__15317;
continue;
} else {
return ret_value__10330__auto__;
}
break;
}
});
cljs$core$async$state_machine__10329__auto__ = function(state_15229){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10329__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10329__auto____1.call(this,state_15229);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10329__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10329__auto____0;
cljs$core$async$state_machine__10329__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10329__auto____1;
return cljs$core$async$state_machine__10329__auto__;
})()
})();
var state__10773__auto__ = (function (){var statearr_15268 = f__10772__auto__.call(null);
(statearr_15268[(6)] = c__10771__auto___15271);

return statearr_15268;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10773__auto__);
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
var G__15272 = arguments.length;
switch (G__15272) {
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
var c__10771__auto___15335 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__10772__auto__ = (function (){var switch__10328__auto__ = (function (state_15302){
var state_val_15304 = (state_15302[(1)]);
if((state_val_15304 === (7))){
var inst_15282 = (state_15302[(7)]);
var inst_15282__$1 = (state_15302[(2)]);
var inst_15283 = (inst_15282__$1 == null);
var inst_15284 = cljs.core.not.call(null,inst_15283);
var state_15302__$1 = (function (){var statearr_15307 = state_15302;
(statearr_15307[(7)] = inst_15282__$1);

return statearr_15307;
})();
if(inst_15284){
var statearr_15308_15336 = state_15302__$1;
(statearr_15308_15336[(1)] = (8));

} else {
var statearr_15309_15337 = state_15302__$1;
(statearr_15309_15337[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15304 === (1))){
var inst_15276 = (0);
var state_15302__$1 = (function (){var statearr_15310 = state_15302;
(statearr_15310[(8)] = inst_15276);

return statearr_15310;
})();
var statearr_15312_15338 = state_15302__$1;
(statearr_15312_15338[(2)] = null);

(statearr_15312_15338[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15304 === (4))){
var state_15302__$1 = state_15302;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15302__$1,(7),ch);
} else {
if((state_val_15304 === (6))){
var inst_15297 = (state_15302[(2)]);
var state_15302__$1 = state_15302;
var statearr_15313_15341 = state_15302__$1;
(statearr_15313_15341[(2)] = inst_15297);

(statearr_15313_15341[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15304 === (3))){
var inst_15299 = (state_15302[(2)]);
var inst_15300 = cljs.core.async.close_BANG_.call(null,out);
var state_15302__$1 = (function (){var statearr_15315 = state_15302;
(statearr_15315[(9)] = inst_15299);

return statearr_15315;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15302__$1,inst_15300);
} else {
if((state_val_15304 === (2))){
var inst_15276 = (state_15302[(8)]);
var inst_15279 = (inst_15276 < n);
var state_15302__$1 = state_15302;
if(cljs.core.truth_(inst_15279)){
var statearr_15318_15346 = state_15302__$1;
(statearr_15318_15346[(1)] = (4));

} else {
var statearr_15319_15347 = state_15302__$1;
(statearr_15319_15347[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15304 === (11))){
var inst_15276 = (state_15302[(8)]);
var inst_15288 = (state_15302[(2)]);
var inst_15290 = (inst_15276 + (1));
var inst_15276__$1 = inst_15290;
var state_15302__$1 = (function (){var statearr_15320 = state_15302;
(statearr_15320[(10)] = inst_15288);

(statearr_15320[(8)] = inst_15276__$1);

return statearr_15320;
})();
var statearr_15321_15352 = state_15302__$1;
(statearr_15321_15352[(2)] = null);

(statearr_15321_15352[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15304 === (9))){
var state_15302__$1 = state_15302;
var statearr_15322_15353 = state_15302__$1;
(statearr_15322_15353[(2)] = null);

(statearr_15322_15353[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15304 === (5))){
var state_15302__$1 = state_15302;
var statearr_15323_15354 = state_15302__$1;
(statearr_15323_15354[(2)] = null);

(statearr_15323_15354[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15304 === (10))){
var inst_15294 = (state_15302[(2)]);
var state_15302__$1 = state_15302;
var statearr_15324_15356 = state_15302__$1;
(statearr_15324_15356[(2)] = inst_15294);

(statearr_15324_15356[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15304 === (8))){
var inst_15282 = (state_15302[(7)]);
var state_15302__$1 = state_15302;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15302__$1,(11),out,inst_15282);
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
var cljs$core$async$state_machine__10329__auto__ = null;
var cljs$core$async$state_machine__10329__auto____0 = (function (){
var statearr_15325 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_15325[(0)] = cljs$core$async$state_machine__10329__auto__);

(statearr_15325[(1)] = (1));

return statearr_15325;
});
var cljs$core$async$state_machine__10329__auto____1 = (function (state_15302){
while(true){
var ret_value__10330__auto__ = (function (){try{while(true){
var result__10331__auto__ = switch__10328__auto__.call(null,state_15302);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10331__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10331__auto__;
}
break;
}
}catch (e15326){var ex__10332__auto__ = e15326;
var statearr_15327_15361 = state_15302;
(statearr_15327_15361[(2)] = ex__10332__auto__);


if(cljs.core.seq.call(null,(state_15302[(4)]))){
var statearr_15328_15362 = state_15302;
(statearr_15328_15362[(1)] = cljs.core.first.call(null,(state_15302[(4)])));

} else {
throw ex__10332__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10330__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15363 = state_15302;
state_15302 = G__15363;
continue;
} else {
return ret_value__10330__auto__;
}
break;
}
});
cljs$core$async$state_machine__10329__auto__ = function(state_15302){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10329__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10329__auto____1.call(this,state_15302);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10329__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10329__auto____0;
cljs$core$async$state_machine__10329__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10329__auto____1;
return cljs$core$async$state_machine__10329__auto__;
})()
})();
var state__10773__auto__ = (function (){var statearr_15329 = f__10772__auto__.call(null);
(statearr_15329[(6)] = c__10771__auto___15335);

return statearr_15329;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10773__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async15331 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15331 = (function (f,ch,meta15332){
this.f = f;
this.ch = ch;
this.meta15332 = meta15332;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async15331.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15333,meta15332__$1){
var self__ = this;
var _15333__$1 = this;
return (new cljs.core.async.t_cljs$core$async15331(self__.f,self__.ch,meta15332__$1));
}));

(cljs.core.async.t_cljs$core$async15331.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15333){
var self__ = this;
var _15333__$1 = this;
return self__.meta15332;
}));

(cljs.core.async.t_cljs$core$async15331.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15331.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async15331.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async15331.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15331.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async15348 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15348 = (function (f,ch,meta15332,_,fn1,meta15349){
this.f = f;
this.ch = ch;
this.meta15332 = meta15332;
this._ = _;
this.fn1 = fn1;
this.meta15349 = meta15349;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async15348.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15350,meta15349__$1){
var self__ = this;
var _15350__$1 = this;
return (new cljs.core.async.t_cljs$core$async15348(self__.f,self__.ch,self__.meta15332,self__._,self__.fn1,meta15349__$1));
}));

(cljs.core.async.t_cljs$core$async15348.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15350){
var self__ = this;
var _15350__$1 = this;
return self__.meta15349;
}));

(cljs.core.async.t_cljs$core$async15348.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15348.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
}));

(cljs.core.async.t_cljs$core$async15348.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async15348.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return (function (p1__15330_SHARP_){
return f1.call(null,(((p1__15330_SHARP_ == null))?null:self__.f.call(null,p1__15330_SHARP_)));
});
}));

(cljs.core.async.t_cljs$core$async15348.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta15332","meta15332",-1494051550,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async15331","cljs.core.async/t_cljs$core$async15331",1254644289,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta15349","meta15349",993369561,null)], null);
}));

(cljs.core.async.t_cljs$core$async15348.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async15348.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15348");

(cljs.core.async.t_cljs$core$async15348.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write.call(null,writer__5288__auto__,"cljs.core.async/t_cljs$core$async15348");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async15348.
 */
cljs.core.async.__GT_t_cljs$core$async15348 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async15348(f__$1,ch__$1,meta15332__$1,___$2,fn1__$1,meta15349){
return (new cljs.core.async.t_cljs$core$async15348(f__$1,ch__$1,meta15332__$1,___$2,fn1__$1,meta15349));
});

}

return (new cljs.core.async.t_cljs$core$async15348(self__.f,self__.ch,self__.meta15332,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
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

(cljs.core.async.t_cljs$core$async15331.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15331.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async15331.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta15332","meta15332",-1494051550,null)], null);
}));

(cljs.core.async.t_cljs$core$async15331.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async15331.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15331");

(cljs.core.async.t_cljs$core$async15331.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write.call(null,writer__5288__auto__,"cljs.core.async/t_cljs$core$async15331");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async15331.
 */
cljs.core.async.__GT_t_cljs$core$async15331 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async15331(f__$1,ch__$1,meta15332){
return (new cljs.core.async.t_cljs$core$async15331(f__$1,ch__$1,meta15332));
});

}

return (new cljs.core.async.t_cljs$core$async15331(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async15364 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15364 = (function (f,ch,meta15365){
this.f = f;
this.ch = ch;
this.meta15365 = meta15365;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async15364.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15366,meta15365__$1){
var self__ = this;
var _15366__$1 = this;
return (new cljs.core.async.t_cljs$core$async15364(self__.f,self__.ch,meta15365__$1));
}));

(cljs.core.async.t_cljs$core$async15364.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15366){
var self__ = this;
var _15366__$1 = this;
return self__.meta15365;
}));

(cljs.core.async.t_cljs$core$async15364.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15364.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async15364.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15364.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async15364.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15364.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
}));

(cljs.core.async.t_cljs$core$async15364.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta15365","meta15365",-1787086700,null)], null);
}));

(cljs.core.async.t_cljs$core$async15364.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async15364.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15364");

(cljs.core.async.t_cljs$core$async15364.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write.call(null,writer__5288__auto__,"cljs.core.async/t_cljs$core$async15364");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async15364.
 */
cljs.core.async.__GT_t_cljs$core$async15364 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async15364(f__$1,ch__$1,meta15365){
return (new cljs.core.async.t_cljs$core$async15364(f__$1,ch__$1,meta15365));
});

}

return (new cljs.core.async.t_cljs$core$async15364(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async15371 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15371 = (function (p,ch,meta15372){
this.p = p;
this.ch = ch;
this.meta15372 = meta15372;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async15371.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15373,meta15372__$1){
var self__ = this;
var _15373__$1 = this;
return (new cljs.core.async.t_cljs$core$async15371(self__.p,self__.ch,meta15372__$1));
}));

(cljs.core.async.t_cljs$core$async15371.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15373){
var self__ = this;
var _15373__$1 = this;
return self__.meta15372;
}));

(cljs.core.async.t_cljs$core$async15371.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15371.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async15371.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async15371.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15371.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async15371.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15371.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async15371.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta15372","meta15372",-510327629,null)], null);
}));

(cljs.core.async.t_cljs$core$async15371.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async15371.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15371");

(cljs.core.async.t_cljs$core$async15371.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write.call(null,writer__5288__auto__,"cljs.core.async/t_cljs$core$async15371");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async15371.
 */
cljs.core.async.__GT_t_cljs$core$async15371 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async15371(p__$1,ch__$1,meta15372){
return (new cljs.core.async.t_cljs$core$async15371(p__$1,ch__$1,meta15372));
});

}

return (new cljs.core.async.t_cljs$core$async15371(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__15379 = arguments.length;
switch (G__15379) {
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
var c__10771__auto___15433 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__10772__auto__ = (function (){var switch__10328__auto__ = (function (state_15401){
var state_val_15402 = (state_15401[(1)]);
if((state_val_15402 === (7))){
var inst_15397 = (state_15401[(2)]);
var state_15401__$1 = state_15401;
var statearr_15403_15435 = state_15401__$1;
(statearr_15403_15435[(2)] = inst_15397);

(statearr_15403_15435[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15402 === (1))){
var state_15401__$1 = state_15401;
var statearr_15404_15436 = state_15401__$1;
(statearr_15404_15436[(2)] = null);

(statearr_15404_15436[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15402 === (4))){
var inst_15383 = (state_15401[(7)]);
var inst_15383__$1 = (state_15401[(2)]);
var inst_15384 = (inst_15383__$1 == null);
var state_15401__$1 = (function (){var statearr_15405 = state_15401;
(statearr_15405[(7)] = inst_15383__$1);

return statearr_15405;
})();
if(cljs.core.truth_(inst_15384)){
var statearr_15406_15437 = state_15401__$1;
(statearr_15406_15437[(1)] = (5));

} else {
var statearr_15408_15438 = state_15401__$1;
(statearr_15408_15438[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15402 === (6))){
var inst_15383 = (state_15401[(7)]);
var inst_15388 = p.call(null,inst_15383);
var state_15401__$1 = state_15401;
if(cljs.core.truth_(inst_15388)){
var statearr_15410_15440 = state_15401__$1;
(statearr_15410_15440[(1)] = (8));

} else {
var statearr_15411_15455 = state_15401__$1;
(statearr_15411_15455[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15402 === (3))){
var inst_15399 = (state_15401[(2)]);
var state_15401__$1 = state_15401;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15401__$1,inst_15399);
} else {
if((state_val_15402 === (2))){
var state_15401__$1 = state_15401;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15401__$1,(4),ch);
} else {
if((state_val_15402 === (11))){
var inst_15391 = (state_15401[(2)]);
var state_15401__$1 = state_15401;
var statearr_15416_15472 = state_15401__$1;
(statearr_15416_15472[(2)] = inst_15391);

(statearr_15416_15472[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15402 === (9))){
var state_15401__$1 = state_15401;
var statearr_15418_15482 = state_15401__$1;
(statearr_15418_15482[(2)] = null);

(statearr_15418_15482[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15402 === (5))){
var inst_15386 = cljs.core.async.close_BANG_.call(null,out);
var state_15401__$1 = state_15401;
var statearr_15419_15505 = state_15401__$1;
(statearr_15419_15505[(2)] = inst_15386);

(statearr_15419_15505[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15402 === (10))){
var inst_15394 = (state_15401[(2)]);
var state_15401__$1 = (function (){var statearr_15420 = state_15401;
(statearr_15420[(8)] = inst_15394);

return statearr_15420;
})();
var statearr_15421_15512 = state_15401__$1;
(statearr_15421_15512[(2)] = null);

(statearr_15421_15512[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15402 === (8))){
var inst_15383 = (state_15401[(7)]);
var state_15401__$1 = state_15401;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15401__$1,(11),out,inst_15383);
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
var cljs$core$async$state_machine__10329__auto__ = null;
var cljs$core$async$state_machine__10329__auto____0 = (function (){
var statearr_15423 = [null,null,null,null,null,null,null,null,null];
(statearr_15423[(0)] = cljs$core$async$state_machine__10329__auto__);

(statearr_15423[(1)] = (1));

return statearr_15423;
});
var cljs$core$async$state_machine__10329__auto____1 = (function (state_15401){
while(true){
var ret_value__10330__auto__ = (function (){try{while(true){
var result__10331__auto__ = switch__10328__auto__.call(null,state_15401);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10331__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10331__auto__;
}
break;
}
}catch (e15424){var ex__10332__auto__ = e15424;
var statearr_15425_15518 = state_15401;
(statearr_15425_15518[(2)] = ex__10332__auto__);


if(cljs.core.seq.call(null,(state_15401[(4)]))){
var statearr_15426_15519 = state_15401;
(statearr_15426_15519[(1)] = cljs.core.first.call(null,(state_15401[(4)])));

} else {
throw ex__10332__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10330__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15522 = state_15401;
state_15401 = G__15522;
continue;
} else {
return ret_value__10330__auto__;
}
break;
}
});
cljs$core$async$state_machine__10329__auto__ = function(state_15401){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10329__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10329__auto____1.call(this,state_15401);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10329__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10329__auto____0;
cljs$core$async$state_machine__10329__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10329__auto____1;
return cljs$core$async$state_machine__10329__auto__;
})()
})();
var state__10773__auto__ = (function (){var statearr_15428 = f__10772__auto__.call(null);
(statearr_15428[(6)] = c__10771__auto___15433);

return statearr_15428;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10773__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__15432 = arguments.length;
switch (G__15432) {
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
var c__10771__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__10772__auto__ = (function (){var switch__10328__auto__ = (function (state_15510){
var state_val_15511 = (state_15510[(1)]);
if((state_val_15511 === (7))){
var inst_15504 = (state_15510[(2)]);
var state_15510__$1 = state_15510;
var statearr_15514_15590 = state_15510__$1;
(statearr_15514_15590[(2)] = inst_15504);

(statearr_15514_15590[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15511 === (20))){
var inst_15473 = (state_15510[(7)]);
var inst_15485 = (state_15510[(2)]);
var inst_15486 = cljs.core.next.call(null,inst_15473);
var inst_15458 = inst_15486;
var inst_15459 = null;
var inst_15460 = (0);
var inst_15461 = (0);
var state_15510__$1 = (function (){var statearr_15516 = state_15510;
(statearr_15516[(8)] = inst_15485);

(statearr_15516[(9)] = inst_15458);

(statearr_15516[(10)] = inst_15459);

(statearr_15516[(11)] = inst_15460);

(statearr_15516[(12)] = inst_15461);

return statearr_15516;
})();
var statearr_15517_15592 = state_15510__$1;
(statearr_15517_15592[(2)] = null);

(statearr_15517_15592[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15511 === (1))){
var state_15510__$1 = state_15510;
var statearr_15524_15593 = state_15510__$1;
(statearr_15524_15593[(2)] = null);

(statearr_15524_15593[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15511 === (4))){
var inst_15442 = (state_15510[(13)]);
var inst_15442__$1 = (state_15510[(2)]);
var inst_15447 = (inst_15442__$1 == null);
var state_15510__$1 = (function (){var statearr_15529 = state_15510;
(statearr_15529[(13)] = inst_15442__$1);

return statearr_15529;
})();
if(cljs.core.truth_(inst_15447)){
var statearr_15530_15594 = state_15510__$1;
(statearr_15530_15594[(1)] = (5));

} else {
var statearr_15531_15595 = state_15510__$1;
(statearr_15531_15595[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15511 === (15))){
var state_15510__$1 = state_15510;
var statearr_15539_15596 = state_15510__$1;
(statearr_15539_15596[(2)] = null);

(statearr_15539_15596[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15511 === (21))){
var state_15510__$1 = state_15510;
var statearr_15540_15597 = state_15510__$1;
(statearr_15540_15597[(2)] = null);

(statearr_15540_15597[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15511 === (13))){
var inst_15461 = (state_15510[(12)]);
var inst_15458 = (state_15510[(9)]);
var inst_15459 = (state_15510[(10)]);
var inst_15460 = (state_15510[(11)]);
var inst_15468 = (state_15510[(2)]);
var inst_15469 = (inst_15461 + (1));
var tmp15536 = inst_15458;
var tmp15537 = inst_15460;
var tmp15538 = inst_15459;
var inst_15458__$1 = tmp15536;
var inst_15459__$1 = tmp15538;
var inst_15460__$1 = tmp15537;
var inst_15461__$1 = inst_15469;
var state_15510__$1 = (function (){var statearr_15544 = state_15510;
(statearr_15544[(14)] = inst_15468);

(statearr_15544[(9)] = inst_15458__$1);

(statearr_15544[(10)] = inst_15459__$1);

(statearr_15544[(11)] = inst_15460__$1);

(statearr_15544[(12)] = inst_15461__$1);

return statearr_15544;
})();
var statearr_15545_15601 = state_15510__$1;
(statearr_15545_15601[(2)] = null);

(statearr_15545_15601[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15511 === (22))){
var state_15510__$1 = state_15510;
var statearr_15547_15602 = state_15510__$1;
(statearr_15547_15602[(2)] = null);

(statearr_15547_15602[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15511 === (6))){
var inst_15442 = (state_15510[(13)]);
var inst_15456 = f.call(null,inst_15442);
var inst_15457 = cljs.core.seq.call(null,inst_15456);
var inst_15458 = inst_15457;
var inst_15459 = null;
var inst_15460 = (0);
var inst_15461 = (0);
var state_15510__$1 = (function (){var statearr_15548 = state_15510;
(statearr_15548[(9)] = inst_15458);

(statearr_15548[(10)] = inst_15459);

(statearr_15548[(11)] = inst_15460);

(statearr_15548[(12)] = inst_15461);

return statearr_15548;
})();
var statearr_15549_15612 = state_15510__$1;
(statearr_15549_15612[(2)] = null);

(statearr_15549_15612[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15511 === (17))){
var inst_15473 = (state_15510[(7)]);
var inst_15477 = cljs.core.chunk_first.call(null,inst_15473);
var inst_15478 = cljs.core.chunk_rest.call(null,inst_15473);
var inst_15479 = cljs.core.count.call(null,inst_15477);
var inst_15458 = inst_15478;
var inst_15459 = inst_15477;
var inst_15460 = inst_15479;
var inst_15461 = (0);
var state_15510__$1 = (function (){var statearr_15551 = state_15510;
(statearr_15551[(9)] = inst_15458);

(statearr_15551[(10)] = inst_15459);

(statearr_15551[(11)] = inst_15460);

(statearr_15551[(12)] = inst_15461);

return statearr_15551;
})();
var statearr_15552_15620 = state_15510__$1;
(statearr_15552_15620[(2)] = null);

(statearr_15552_15620[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15511 === (3))){
var inst_15507 = (state_15510[(2)]);
var state_15510__$1 = state_15510;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15510__$1,inst_15507);
} else {
if((state_val_15511 === (12))){
var inst_15494 = (state_15510[(2)]);
var state_15510__$1 = state_15510;
var statearr_15553_15622 = state_15510__$1;
(statearr_15553_15622[(2)] = inst_15494);

(statearr_15553_15622[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15511 === (2))){
var state_15510__$1 = state_15510;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15510__$1,(4),in$);
} else {
if((state_val_15511 === (23))){
var inst_15502 = (state_15510[(2)]);
var state_15510__$1 = state_15510;
var statearr_15557_15623 = state_15510__$1;
(statearr_15557_15623[(2)] = inst_15502);

(statearr_15557_15623[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15511 === (19))){
var inst_15489 = (state_15510[(2)]);
var state_15510__$1 = state_15510;
var statearr_15558_15624 = state_15510__$1;
(statearr_15558_15624[(2)] = inst_15489);

(statearr_15558_15624[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15511 === (11))){
var inst_15458 = (state_15510[(9)]);
var inst_15473 = (state_15510[(7)]);
var inst_15473__$1 = cljs.core.seq.call(null,inst_15458);
var state_15510__$1 = (function (){var statearr_15559 = state_15510;
(statearr_15559[(7)] = inst_15473__$1);

return statearr_15559;
})();
if(inst_15473__$1){
var statearr_15560_15627 = state_15510__$1;
(statearr_15560_15627[(1)] = (14));

} else {
var statearr_15561_15651 = state_15510__$1;
(statearr_15561_15651[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15511 === (9))){
var inst_15496 = (state_15510[(2)]);
var inst_15497 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_15510__$1 = (function (){var statearr_15564 = state_15510;
(statearr_15564[(15)] = inst_15496);

return statearr_15564;
})();
if(cljs.core.truth_(inst_15497)){
var statearr_15565_15656 = state_15510__$1;
(statearr_15565_15656[(1)] = (21));

} else {
var statearr_15566_15658 = state_15510__$1;
(statearr_15566_15658[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15511 === (5))){
var inst_15449 = cljs.core.async.close_BANG_.call(null,out);
var state_15510__$1 = state_15510;
var statearr_15569_15660 = state_15510__$1;
(statearr_15569_15660[(2)] = inst_15449);

(statearr_15569_15660[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15511 === (14))){
var inst_15473 = (state_15510[(7)]);
var inst_15475 = cljs.core.chunked_seq_QMARK_.call(null,inst_15473);
var state_15510__$1 = state_15510;
if(inst_15475){
var statearr_15570_15663 = state_15510__$1;
(statearr_15570_15663[(1)] = (17));

} else {
var statearr_15572_15664 = state_15510__$1;
(statearr_15572_15664[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15511 === (16))){
var inst_15492 = (state_15510[(2)]);
var state_15510__$1 = state_15510;
var statearr_15575_15666 = state_15510__$1;
(statearr_15575_15666[(2)] = inst_15492);

(statearr_15575_15666[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15511 === (10))){
var inst_15459 = (state_15510[(10)]);
var inst_15461 = (state_15510[(12)]);
var inst_15466 = cljs.core._nth.call(null,inst_15459,inst_15461);
var state_15510__$1 = state_15510;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15510__$1,(13),out,inst_15466);
} else {
if((state_val_15511 === (18))){
var inst_15473 = (state_15510[(7)]);
var inst_15483 = cljs.core.first.call(null,inst_15473);
var state_15510__$1 = state_15510;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15510__$1,(20),out,inst_15483);
} else {
if((state_val_15511 === (8))){
var inst_15461 = (state_15510[(12)]);
var inst_15460 = (state_15510[(11)]);
var inst_15463 = (inst_15461 < inst_15460);
var inst_15464 = inst_15463;
var state_15510__$1 = state_15510;
if(cljs.core.truth_(inst_15464)){
var statearr_15576_15669 = state_15510__$1;
(statearr_15576_15669[(1)] = (10));

} else {
var statearr_15577_15670 = state_15510__$1;
(statearr_15577_15670[(1)] = (11));

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
var cljs$core$async$mapcat_STAR__$_state_machine__10329__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__10329__auto____0 = (function (){
var statearr_15580 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15580[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__10329__auto__);

(statearr_15580[(1)] = (1));

return statearr_15580;
});
var cljs$core$async$mapcat_STAR__$_state_machine__10329__auto____1 = (function (state_15510){
while(true){
var ret_value__10330__auto__ = (function (){try{while(true){
var result__10331__auto__ = switch__10328__auto__.call(null,state_15510);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10331__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10331__auto__;
}
break;
}
}catch (e15581){var ex__10332__auto__ = e15581;
var statearr_15582_15675 = state_15510;
(statearr_15582_15675[(2)] = ex__10332__auto__);


if(cljs.core.seq.call(null,(state_15510[(4)]))){
var statearr_15587_15678 = state_15510;
(statearr_15587_15678[(1)] = cljs.core.first.call(null,(state_15510[(4)])));

} else {
throw ex__10332__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10330__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15680 = state_15510;
state_15510 = G__15680;
continue;
} else {
return ret_value__10330__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__10329__auto__ = function(state_15510){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__10329__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__10329__auto____1.call(this,state_15510);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__10329__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__10329__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__10329__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__10329__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__10329__auto__;
})()
})();
var state__10773__auto__ = (function (){var statearr_15588 = f__10772__auto__.call(null);
(statearr_15588[(6)] = c__10771__auto__);

return statearr_15588;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10773__auto__);
}));

return c__10771__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__15591 = arguments.length;
switch (G__15591) {
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
var G__15599 = arguments.length;
switch (G__15599) {
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
var G__15619 = arguments.length;
switch (G__15619) {
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
var c__10771__auto___15691 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__10772__auto__ = (function (){var switch__10328__auto__ = (function (state_15649){
var state_val_15650 = (state_15649[(1)]);
if((state_val_15650 === (7))){
var inst_15644 = (state_15649[(2)]);
var state_15649__$1 = state_15649;
var statearr_15652_15692 = state_15649__$1;
(statearr_15652_15692[(2)] = inst_15644);

(statearr_15652_15692[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15650 === (1))){
var inst_15625 = null;
var state_15649__$1 = (function (){var statearr_15653 = state_15649;
(statearr_15653[(7)] = inst_15625);

return statearr_15653;
})();
var statearr_15654_15693 = state_15649__$1;
(statearr_15654_15693[(2)] = null);

(statearr_15654_15693[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15650 === (4))){
var inst_15629 = (state_15649[(8)]);
var inst_15629__$1 = (state_15649[(2)]);
var inst_15630 = (inst_15629__$1 == null);
var inst_15631 = cljs.core.not.call(null,inst_15630);
var state_15649__$1 = (function (){var statearr_15655 = state_15649;
(statearr_15655[(8)] = inst_15629__$1);

return statearr_15655;
})();
if(inst_15631){
var statearr_15657_15700 = state_15649__$1;
(statearr_15657_15700[(1)] = (5));

} else {
var statearr_15659_15705 = state_15649__$1;
(statearr_15659_15705[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15650 === (6))){
var state_15649__$1 = state_15649;
var statearr_15661_15711 = state_15649__$1;
(statearr_15661_15711[(2)] = null);

(statearr_15661_15711[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15650 === (3))){
var inst_15646 = (state_15649[(2)]);
var inst_15647 = cljs.core.async.close_BANG_.call(null,out);
var state_15649__$1 = (function (){var statearr_15665 = state_15649;
(statearr_15665[(9)] = inst_15646);

return statearr_15665;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15649__$1,inst_15647);
} else {
if((state_val_15650 === (2))){
var state_15649__$1 = state_15649;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15649__$1,(4),ch);
} else {
if((state_val_15650 === (11))){
var inst_15629 = (state_15649[(8)]);
var inst_15638 = (state_15649[(2)]);
var inst_15625 = inst_15629;
var state_15649__$1 = (function (){var statearr_15667 = state_15649;
(statearr_15667[(10)] = inst_15638);

(statearr_15667[(7)] = inst_15625);

return statearr_15667;
})();
var statearr_15668_15736 = state_15649__$1;
(statearr_15668_15736[(2)] = null);

(statearr_15668_15736[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15650 === (9))){
var inst_15629 = (state_15649[(8)]);
var state_15649__$1 = state_15649;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15649__$1,(11),out,inst_15629);
} else {
if((state_val_15650 === (5))){
var inst_15629 = (state_15649[(8)]);
var inst_15625 = (state_15649[(7)]);
var inst_15633 = cljs.core._EQ_.call(null,inst_15629,inst_15625);
var state_15649__$1 = state_15649;
if(inst_15633){
var statearr_15672_15737 = state_15649__$1;
(statearr_15672_15737[(1)] = (8));

} else {
var statearr_15673_15739 = state_15649__$1;
(statearr_15673_15739[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15650 === (10))){
var inst_15641 = (state_15649[(2)]);
var state_15649__$1 = state_15649;
var statearr_15674_15741 = state_15649__$1;
(statearr_15674_15741[(2)] = inst_15641);

(statearr_15674_15741[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15650 === (8))){
var inst_15625 = (state_15649[(7)]);
var tmp15671 = inst_15625;
var inst_15625__$1 = tmp15671;
var state_15649__$1 = (function (){var statearr_15677 = state_15649;
(statearr_15677[(7)] = inst_15625__$1);

return statearr_15677;
})();
var statearr_15679_15743 = state_15649__$1;
(statearr_15679_15743[(2)] = null);

(statearr_15679_15743[(1)] = (2));


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
var cljs$core$async$state_machine__10329__auto__ = null;
var cljs$core$async$state_machine__10329__auto____0 = (function (){
var statearr_15681 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_15681[(0)] = cljs$core$async$state_machine__10329__auto__);

(statearr_15681[(1)] = (1));

return statearr_15681;
});
var cljs$core$async$state_machine__10329__auto____1 = (function (state_15649){
while(true){
var ret_value__10330__auto__ = (function (){try{while(true){
var result__10331__auto__ = switch__10328__auto__.call(null,state_15649);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10331__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10331__auto__;
}
break;
}
}catch (e15682){var ex__10332__auto__ = e15682;
var statearr_15684_15745 = state_15649;
(statearr_15684_15745[(2)] = ex__10332__auto__);


if(cljs.core.seq.call(null,(state_15649[(4)]))){
var statearr_15685_15746 = state_15649;
(statearr_15685_15746[(1)] = cljs.core.first.call(null,(state_15649[(4)])));

} else {
throw ex__10332__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10330__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15749 = state_15649;
state_15649 = G__15749;
continue;
} else {
return ret_value__10330__auto__;
}
break;
}
});
cljs$core$async$state_machine__10329__auto__ = function(state_15649){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10329__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10329__auto____1.call(this,state_15649);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10329__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10329__auto____0;
cljs$core$async$state_machine__10329__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10329__auto____1;
return cljs$core$async$state_machine__10329__auto__;
})()
})();
var state__10773__auto__ = (function (){var statearr_15686 = f__10772__auto__.call(null);
(statearr_15686[(6)] = c__10771__auto___15691);

return statearr_15686;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10773__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__15690 = arguments.length;
switch (G__15690) {
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
var c__10771__auto___15773 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__10772__auto__ = (function (){var switch__10328__auto__ = (function (state_15734){
var state_val_15735 = (state_15734[(1)]);
if((state_val_15735 === (7))){
var inst_15730 = (state_15734[(2)]);
var state_15734__$1 = state_15734;
var statearr_15738_15774 = state_15734__$1;
(statearr_15738_15774[(2)] = inst_15730);

(statearr_15738_15774[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15735 === (1))){
var inst_15694 = (new Array(n));
var inst_15695 = inst_15694;
var inst_15696 = (0);
var state_15734__$1 = (function (){var statearr_15740 = state_15734;
(statearr_15740[(7)] = inst_15695);

(statearr_15740[(8)] = inst_15696);

return statearr_15740;
})();
var statearr_15742_15775 = state_15734__$1;
(statearr_15742_15775[(2)] = null);

(statearr_15742_15775[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15735 === (4))){
var inst_15699 = (state_15734[(9)]);
var inst_15699__$1 = (state_15734[(2)]);
var inst_15701 = (inst_15699__$1 == null);
var inst_15702 = cljs.core.not.call(null,inst_15701);
var state_15734__$1 = (function (){var statearr_15744 = state_15734;
(statearr_15744[(9)] = inst_15699__$1);

return statearr_15744;
})();
if(inst_15702){
var statearr_15747_15787 = state_15734__$1;
(statearr_15747_15787[(1)] = (5));

} else {
var statearr_15748_15793 = state_15734__$1;
(statearr_15748_15793[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15735 === (15))){
var inst_15724 = (state_15734[(2)]);
var state_15734__$1 = state_15734;
var statearr_15750_15802 = state_15734__$1;
(statearr_15750_15802[(2)] = inst_15724);

(statearr_15750_15802[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15735 === (13))){
var state_15734__$1 = state_15734;
var statearr_15751_15808 = state_15734__$1;
(statearr_15751_15808[(2)] = null);

(statearr_15751_15808[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15735 === (6))){
var inst_15696 = (state_15734[(8)]);
var inst_15720 = (inst_15696 > (0));
var state_15734__$1 = state_15734;
if(cljs.core.truth_(inst_15720)){
var statearr_15752_15824 = state_15734__$1;
(statearr_15752_15824[(1)] = (12));

} else {
var statearr_15753_15827 = state_15734__$1;
(statearr_15753_15827[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15735 === (3))){
var inst_15732 = (state_15734[(2)]);
var state_15734__$1 = state_15734;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15734__$1,inst_15732);
} else {
if((state_val_15735 === (12))){
var inst_15695 = (state_15734[(7)]);
var inst_15722 = cljs.core.vec.call(null,inst_15695);
var state_15734__$1 = state_15734;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15734__$1,(15),out,inst_15722);
} else {
if((state_val_15735 === (2))){
var state_15734__$1 = state_15734;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15734__$1,(4),ch);
} else {
if((state_val_15735 === (11))){
var inst_15714 = (state_15734[(2)]);
var inst_15715 = (new Array(n));
var inst_15695 = inst_15715;
var inst_15696 = (0);
var state_15734__$1 = (function (){var statearr_15754 = state_15734;
(statearr_15754[(10)] = inst_15714);

(statearr_15754[(7)] = inst_15695);

(statearr_15754[(8)] = inst_15696);

return statearr_15754;
})();
var statearr_15755_15830 = state_15734__$1;
(statearr_15755_15830[(2)] = null);

(statearr_15755_15830[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15735 === (9))){
var inst_15695 = (state_15734[(7)]);
var inst_15712 = cljs.core.vec.call(null,inst_15695);
var state_15734__$1 = state_15734;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15734__$1,(11),out,inst_15712);
} else {
if((state_val_15735 === (5))){
var inst_15695 = (state_15734[(7)]);
var inst_15696 = (state_15734[(8)]);
var inst_15699 = (state_15734[(9)]);
var inst_15706 = (state_15734[(11)]);
var inst_15704 = (inst_15695[inst_15696] = inst_15699);
var inst_15706__$1 = (inst_15696 + (1));
var inst_15707 = (inst_15706__$1 < n);
var state_15734__$1 = (function (){var statearr_15756 = state_15734;
(statearr_15756[(12)] = inst_15704);

(statearr_15756[(11)] = inst_15706__$1);

return statearr_15756;
})();
if(cljs.core.truth_(inst_15707)){
var statearr_15757_15835 = state_15734__$1;
(statearr_15757_15835[(1)] = (8));

} else {
var statearr_15758_15836 = state_15734__$1;
(statearr_15758_15836[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15735 === (14))){
var inst_15727 = (state_15734[(2)]);
var inst_15728 = cljs.core.async.close_BANG_.call(null,out);
var state_15734__$1 = (function (){var statearr_15760 = state_15734;
(statearr_15760[(13)] = inst_15727);

return statearr_15760;
})();
var statearr_15761_15837 = state_15734__$1;
(statearr_15761_15837[(2)] = inst_15728);

(statearr_15761_15837[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15735 === (10))){
var inst_15718 = (state_15734[(2)]);
var state_15734__$1 = state_15734;
var statearr_15762_15839 = state_15734__$1;
(statearr_15762_15839[(2)] = inst_15718);

(statearr_15762_15839[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15735 === (8))){
var inst_15695 = (state_15734[(7)]);
var inst_15706 = (state_15734[(11)]);
var tmp15759 = inst_15695;
var inst_15695__$1 = tmp15759;
var inst_15696 = inst_15706;
var state_15734__$1 = (function (){var statearr_15763 = state_15734;
(statearr_15763[(7)] = inst_15695__$1);

(statearr_15763[(8)] = inst_15696);

return statearr_15763;
})();
var statearr_15764_15842 = state_15734__$1;
(statearr_15764_15842[(2)] = null);

(statearr_15764_15842[(1)] = (2));


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
var cljs$core$async$state_machine__10329__auto__ = null;
var cljs$core$async$state_machine__10329__auto____0 = (function (){
var statearr_15765 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15765[(0)] = cljs$core$async$state_machine__10329__auto__);

(statearr_15765[(1)] = (1));

return statearr_15765;
});
var cljs$core$async$state_machine__10329__auto____1 = (function (state_15734){
while(true){
var ret_value__10330__auto__ = (function (){try{while(true){
var result__10331__auto__ = switch__10328__auto__.call(null,state_15734);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10331__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10331__auto__;
}
break;
}
}catch (e15766){var ex__10332__auto__ = e15766;
var statearr_15767_15845 = state_15734;
(statearr_15767_15845[(2)] = ex__10332__auto__);


if(cljs.core.seq.call(null,(state_15734[(4)]))){
var statearr_15768_15847 = state_15734;
(statearr_15768_15847[(1)] = cljs.core.first.call(null,(state_15734[(4)])));

} else {
throw ex__10332__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10330__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15848 = state_15734;
state_15734 = G__15848;
continue;
} else {
return ret_value__10330__auto__;
}
break;
}
});
cljs$core$async$state_machine__10329__auto__ = function(state_15734){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10329__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10329__auto____1.call(this,state_15734);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10329__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10329__auto____0;
cljs$core$async$state_machine__10329__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10329__auto____1;
return cljs$core$async$state_machine__10329__auto__;
})()
})();
var state__10773__auto__ = (function (){var statearr_15769 = f__10772__auto__.call(null);
(statearr_15769[(6)] = c__10771__auto___15773);

return statearr_15769;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10773__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__15772 = arguments.length;
switch (G__15772) {
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
var c__10771__auto___15868 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__10772__auto__ = (function (){var switch__10328__auto__ = (function (state_15825){
var state_val_15826 = (state_15825[(1)]);
if((state_val_15826 === (7))){
var inst_15820 = (state_15825[(2)]);
var state_15825__$1 = state_15825;
var statearr_15828_15869 = state_15825__$1;
(statearr_15828_15869[(2)] = inst_15820);

(statearr_15828_15869[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15826 === (1))){
var inst_15776 = [];
var inst_15777 = inst_15776;
var inst_15778 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_15825__$1 = (function (){var statearr_15829 = state_15825;
(statearr_15829[(7)] = inst_15777);

(statearr_15829[(8)] = inst_15778);

return statearr_15829;
})();
var statearr_15831_15870 = state_15825__$1;
(statearr_15831_15870[(2)] = null);

(statearr_15831_15870[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15826 === (4))){
var inst_15781 = (state_15825[(9)]);
var inst_15781__$1 = (state_15825[(2)]);
var inst_15782 = (inst_15781__$1 == null);
var inst_15783 = cljs.core.not.call(null,inst_15782);
var state_15825__$1 = (function (){var statearr_15832 = state_15825;
(statearr_15832[(9)] = inst_15781__$1);

return statearr_15832;
})();
if(inst_15783){
var statearr_15833_15871 = state_15825__$1;
(statearr_15833_15871[(1)] = (5));

} else {
var statearr_15834_15872 = state_15825__$1;
(statearr_15834_15872[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15826 === (15))){
var inst_15777 = (state_15825[(7)]);
var inst_15812 = cljs.core.vec.call(null,inst_15777);
var state_15825__$1 = state_15825;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15825__$1,(18),out,inst_15812);
} else {
if((state_val_15826 === (13))){
var inst_15806 = (state_15825[(2)]);
var state_15825__$1 = state_15825;
var statearr_15838_15875 = state_15825__$1;
(statearr_15838_15875[(2)] = inst_15806);

(statearr_15838_15875[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15826 === (6))){
var inst_15777 = (state_15825[(7)]);
var inst_15809 = inst_15777.length;
var inst_15810 = (inst_15809 > (0));
var state_15825__$1 = state_15825;
if(cljs.core.truth_(inst_15810)){
var statearr_15840_15876 = state_15825__$1;
(statearr_15840_15876[(1)] = (15));

} else {
var statearr_15841_15877 = state_15825__$1;
(statearr_15841_15877[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15826 === (17))){
var inst_15817 = (state_15825[(2)]);
var inst_15818 = cljs.core.async.close_BANG_.call(null,out);
var state_15825__$1 = (function (){var statearr_15843 = state_15825;
(statearr_15843[(10)] = inst_15817);

return statearr_15843;
})();
var statearr_15844_15882 = state_15825__$1;
(statearr_15844_15882[(2)] = inst_15818);

(statearr_15844_15882[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15826 === (3))){
var inst_15822 = (state_15825[(2)]);
var state_15825__$1 = state_15825;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15825__$1,inst_15822);
} else {
if((state_val_15826 === (12))){
var inst_15777 = (state_15825[(7)]);
var inst_15798 = cljs.core.vec.call(null,inst_15777);
var state_15825__$1 = state_15825;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15825__$1,(14),out,inst_15798);
} else {
if((state_val_15826 === (2))){
var state_15825__$1 = state_15825;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15825__$1,(4),ch);
} else {
if((state_val_15826 === (11))){
var inst_15777 = (state_15825[(7)]);
var inst_15781 = (state_15825[(9)]);
var inst_15785 = (state_15825[(11)]);
var inst_15795 = inst_15777.push(inst_15781);
var tmp15846 = inst_15777;
var inst_15777__$1 = tmp15846;
var inst_15778 = inst_15785;
var state_15825__$1 = (function (){var statearr_15849 = state_15825;
(statearr_15849[(12)] = inst_15795);

(statearr_15849[(7)] = inst_15777__$1);

(statearr_15849[(8)] = inst_15778);

return statearr_15849;
})();
var statearr_15850_15884 = state_15825__$1;
(statearr_15850_15884[(2)] = null);

(statearr_15850_15884[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15826 === (9))){
var inst_15778 = (state_15825[(8)]);
var inst_15790 = cljs.core.keyword_identical_QMARK_.call(null,inst_15778,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_15825__$1 = state_15825;
var statearr_15851_15885 = state_15825__$1;
(statearr_15851_15885[(2)] = inst_15790);

(statearr_15851_15885[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15826 === (5))){
var inst_15781 = (state_15825[(9)]);
var inst_15785 = (state_15825[(11)]);
var inst_15778 = (state_15825[(8)]);
var inst_15786 = (state_15825[(13)]);
var inst_15785__$1 = f.call(null,inst_15781);
var inst_15786__$1 = cljs.core._EQ_.call(null,inst_15785__$1,inst_15778);
var state_15825__$1 = (function (){var statearr_15852 = state_15825;
(statearr_15852[(11)] = inst_15785__$1);

(statearr_15852[(13)] = inst_15786__$1);

return statearr_15852;
})();
if(inst_15786__$1){
var statearr_15853_15887 = state_15825__$1;
(statearr_15853_15887[(1)] = (8));

} else {
var statearr_15854_15888 = state_15825__$1;
(statearr_15854_15888[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15826 === (14))){
var inst_15781 = (state_15825[(9)]);
var inst_15785 = (state_15825[(11)]);
var inst_15800 = (state_15825[(2)]);
var inst_15801 = [];
var inst_15803 = inst_15801.push(inst_15781);
var inst_15777 = inst_15801;
var inst_15778 = inst_15785;
var state_15825__$1 = (function (){var statearr_15855 = state_15825;
(statearr_15855[(14)] = inst_15800);

(statearr_15855[(15)] = inst_15803);

(statearr_15855[(7)] = inst_15777);

(statearr_15855[(8)] = inst_15778);

return statearr_15855;
})();
var statearr_15856_15893 = state_15825__$1;
(statearr_15856_15893[(2)] = null);

(statearr_15856_15893[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15826 === (16))){
var state_15825__$1 = state_15825;
var statearr_15857_15894 = state_15825__$1;
(statearr_15857_15894[(2)] = null);

(statearr_15857_15894[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15826 === (10))){
var inst_15792 = (state_15825[(2)]);
var state_15825__$1 = state_15825;
if(cljs.core.truth_(inst_15792)){
var statearr_15858_15895 = state_15825__$1;
(statearr_15858_15895[(1)] = (11));

} else {
var statearr_15859_15896 = state_15825__$1;
(statearr_15859_15896[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15826 === (18))){
var inst_15814 = (state_15825[(2)]);
var state_15825__$1 = state_15825;
var statearr_15860_15897 = state_15825__$1;
(statearr_15860_15897[(2)] = inst_15814);

(statearr_15860_15897[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15826 === (8))){
var inst_15786 = (state_15825[(13)]);
var state_15825__$1 = state_15825;
var statearr_15861_15898 = state_15825__$1;
(statearr_15861_15898[(2)] = inst_15786);

(statearr_15861_15898[(1)] = (10));


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
var cljs$core$async$state_machine__10329__auto__ = null;
var cljs$core$async$state_machine__10329__auto____0 = (function (){
var statearr_15862 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15862[(0)] = cljs$core$async$state_machine__10329__auto__);

(statearr_15862[(1)] = (1));

return statearr_15862;
});
var cljs$core$async$state_machine__10329__auto____1 = (function (state_15825){
while(true){
var ret_value__10330__auto__ = (function (){try{while(true){
var result__10331__auto__ = switch__10328__auto__.call(null,state_15825);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10331__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10331__auto__;
}
break;
}
}catch (e15863){var ex__10332__auto__ = e15863;
var statearr_15864_15899 = state_15825;
(statearr_15864_15899[(2)] = ex__10332__auto__);


if(cljs.core.seq.call(null,(state_15825[(4)]))){
var statearr_15865_15900 = state_15825;
(statearr_15865_15900[(1)] = cljs.core.first.call(null,(state_15825[(4)])));

} else {
throw ex__10332__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10330__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15901 = state_15825;
state_15825 = G__15901;
continue;
} else {
return ret_value__10330__auto__;
}
break;
}
});
cljs$core$async$state_machine__10329__auto__ = function(state_15825){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10329__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10329__auto____1.call(this,state_15825);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10329__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10329__auto____0;
cljs$core$async$state_machine__10329__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10329__auto____1;
return cljs$core$async$state_machine__10329__auto__;
})()
})();
var state__10773__auto__ = (function (){var statearr_15866 = f__10772__auto__.call(null);
(statearr_15866[(6)] = c__10771__auto___15868);

return statearr_15866;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10773__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=async.js.map
