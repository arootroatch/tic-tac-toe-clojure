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
var G__11433 = arguments.length;
switch (G__11433) {
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async11434 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async11434 = (function (f,blockable,meta11435){
this.f = f;
this.blockable = blockable;
this.meta11435 = meta11435;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async11434.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11436,meta11435__$1){
var self__ = this;
var _11436__$1 = this;
return (new cljs.core.async.t_cljs$core$async11434(self__.f,self__.blockable,meta11435__$1));
}));

(cljs.core.async.t_cljs$core$async11434.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11436){
var self__ = this;
var _11436__$1 = this;
return self__.meta11435;
}));

(cljs.core.async.t_cljs$core$async11434.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async11434.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async11434.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async11434.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async11434.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta11435","meta11435",1744338359,null)], null);
}));

(cljs.core.async.t_cljs$core$async11434.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async11434.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async11434");

(cljs.core.async.t_cljs$core$async11434.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write.call(null,writer__5288__auto__,"cljs.core.async/t_cljs$core$async11434");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async11434.
 */
cljs.core.async.__GT_t_cljs$core$async11434 = (function cljs$core$async$__GT_t_cljs$core$async11434(f__$1,blockable__$1,meta11435){
return (new cljs.core.async.t_cljs$core$async11434(f__$1,blockable__$1,meta11435));
});

}

return (new cljs.core.async.t_cljs$core$async11434(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__11460 = arguments.length;
switch (G__11460) {
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
var G__11472 = arguments.length;
switch (G__11472) {
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
var G__11479 = arguments.length;
switch (G__11479) {
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
var val_11485 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_11485);
} else {
cljs.core.async.impl.dispatch.run.call(null,(function (){
return fn1.call(null,val_11485);
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
var G__11487 = arguments.length;
switch (G__11487) {
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

var G__11496 = (x_11495 + (1));
x_11495 = G__11496;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async11491 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async11491 = (function (flag,meta11492){
this.flag = flag;
this.meta11492 = meta11492;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async11491.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11493,meta11492__$1){
var self__ = this;
var _11493__$1 = this;
return (new cljs.core.async.t_cljs$core$async11491(self__.flag,meta11492__$1));
}));

(cljs.core.async.t_cljs$core$async11491.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11493){
var self__ = this;
var _11493__$1 = this;
return self__.meta11492;
}));

(cljs.core.async.t_cljs$core$async11491.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async11491.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
}));

(cljs.core.async.t_cljs$core$async11491.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async11491.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async11491.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta11492","meta11492",1507759533,null)], null);
}));

(cljs.core.async.t_cljs$core$async11491.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async11491.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async11491");

(cljs.core.async.t_cljs$core$async11491.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write.call(null,writer__5288__auto__,"cljs.core.async/t_cljs$core$async11491");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async11491.
 */
cljs.core.async.__GT_t_cljs$core$async11491 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async11491(flag__$1,meta11492){
return (new cljs.core.async.t_cljs$core$async11491(flag__$1,meta11492));
});

}

return (new cljs.core.async.t_cljs$core$async11491(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async11505 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async11505 = (function (flag,cb,meta11506){
this.flag = flag;
this.cb = cb;
this.meta11506 = meta11506;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async11505.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11507,meta11506__$1){
var self__ = this;
var _11507__$1 = this;
return (new cljs.core.async.t_cljs$core$async11505(self__.flag,self__.cb,meta11506__$1));
}));

(cljs.core.async.t_cljs$core$async11505.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11507){
var self__ = this;
var _11507__$1 = this;
return self__.meta11506;
}));

(cljs.core.async.t_cljs$core$async11505.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async11505.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
}));

(cljs.core.async.t_cljs$core$async11505.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async11505.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async11505.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta11506","meta11506",514256571,null)], null);
}));

(cljs.core.async.t_cljs$core$async11505.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async11505.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async11505");

(cljs.core.async.t_cljs$core$async11505.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write.call(null,writer__5288__auto__,"cljs.core.async/t_cljs$core$async11505");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async11505.
 */
cljs.core.async.__GT_t_cljs$core$async11505 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async11505(flag__$1,cb__$1,meta11506){
return (new cljs.core.async.t_cljs$core$async11505(flag__$1,cb__$1,meta11506));
});

}

return (new cljs.core.async.t_cljs$core$async11505(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__11513_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__11513_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,ports__$1,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,ports__$1,n,idxs,priority){
return (function (p1__11514_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__11514_SHARP_,port], null));
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
var G__11522 = (i + (1));
i = G__11522;
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
var len__5726__auto___11531 = arguments.length;
var i__5727__auto___11535 = (0);
while(true){
if((i__5727__auto___11535 < len__5726__auto___11531)){
args__5732__auto__.push((arguments[i__5727__auto___11535]));

var G__11536 = (i__5727__auto___11535 + (1));
i__5727__auto___11535 = G__11536;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__11523){
var map__11524 = p__11523;
var map__11524__$1 = cljs.core.__destructure_map.call(null,map__11524);
var opts = map__11524__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq11520){
var G__11521 = cljs.core.first.call(null,seq11520);
var seq11520__$1 = cljs.core.next.call(null,seq11520);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__11521,seq11520__$1);
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
var G__11540 = arguments.length;
switch (G__11540) {
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
var f__11372__auto__ = (function (){var switch__11190__auto__ = (function (state_11585){
var state_val_11586 = (state_11585[(1)]);
if((state_val_11586 === (7))){
var inst_11576 = (state_11585[(2)]);
var state_11585__$1 = state_11585;
var statearr_11592_11614 = state_11585__$1;
(statearr_11592_11614[(2)] = inst_11576);

(statearr_11592_11614[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11586 === (1))){
var state_11585__$1 = state_11585;
var statearr_11593_11615 = state_11585__$1;
(statearr_11593_11615[(2)] = null);

(statearr_11593_11615[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11586 === (4))){
var inst_11553 = (state_11585[(7)]);
var inst_11553__$1 = (state_11585[(2)]);
var inst_11556 = (inst_11553__$1 == null);
var state_11585__$1 = (function (){var statearr_11594 = state_11585;
(statearr_11594[(7)] = inst_11553__$1);

return statearr_11594;
})();
if(cljs.core.truth_(inst_11556)){
var statearr_11595_11616 = state_11585__$1;
(statearr_11595_11616[(1)] = (5));

} else {
var statearr_11596_11618 = state_11585__$1;
(statearr_11596_11618[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11586 === (13))){
var state_11585__$1 = state_11585;
var statearr_11597_11622 = state_11585__$1;
(statearr_11597_11622[(2)] = null);

(statearr_11597_11622[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11586 === (6))){
var inst_11553 = (state_11585[(7)]);
var state_11585__$1 = state_11585;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11585__$1,(11),to,inst_11553);
} else {
if((state_val_11586 === (3))){
var inst_11582 = (state_11585[(2)]);
var state_11585__$1 = state_11585;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11585__$1,inst_11582);
} else {
if((state_val_11586 === (12))){
var state_11585__$1 = state_11585;
var statearr_11598_11629 = state_11585__$1;
(statearr_11598_11629[(2)] = null);

(statearr_11598_11629[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11586 === (2))){
var state_11585__$1 = state_11585;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11585__$1,(4),from);
} else {
if((state_val_11586 === (11))){
var inst_11565 = (state_11585[(2)]);
var state_11585__$1 = state_11585;
if(cljs.core.truth_(inst_11565)){
var statearr_11599_11630 = state_11585__$1;
(statearr_11599_11630[(1)] = (12));

} else {
var statearr_11600_11631 = state_11585__$1;
(statearr_11600_11631[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11586 === (9))){
var state_11585__$1 = state_11585;
var statearr_11601_11633 = state_11585__$1;
(statearr_11601_11633[(2)] = null);

(statearr_11601_11633[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11586 === (5))){
var state_11585__$1 = state_11585;
if(cljs.core.truth_(close_QMARK_)){
var statearr_11602_11635 = state_11585__$1;
(statearr_11602_11635[(1)] = (8));

} else {
var statearr_11603_11636 = state_11585__$1;
(statearr_11603_11636[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11586 === (14))){
var inst_11574 = (state_11585[(2)]);
var state_11585__$1 = state_11585;
var statearr_11604_11640 = state_11585__$1;
(statearr_11604_11640[(2)] = inst_11574);

(statearr_11604_11640[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11586 === (10))){
var inst_11562 = (state_11585[(2)]);
var state_11585__$1 = state_11585;
var statearr_11605_11641 = state_11585__$1;
(statearr_11605_11641[(2)] = inst_11562);

(statearr_11605_11641[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11586 === (8))){
var inst_11559 = cljs.core.async.close_BANG_.call(null,to);
var state_11585__$1 = state_11585;
var statearr_11606_11642 = state_11585__$1;
(statearr_11606_11642[(2)] = inst_11559);

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
var cljs$core$async$state_machine__11191__auto____1 = (function (state_11585){
while(true){
var ret_value__11192__auto__ = (function (){try{while(true){
var result__11193__auto__ = switch__11190__auto__.call(null,state_11585);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11193__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11193__auto__;
}
break;
}
}catch (e11608){var ex__11194__auto__ = e11608;
var statearr_11609_11644 = state_11585;
(statearr_11609_11644[(2)] = ex__11194__auto__);


if(cljs.core.seq.call(null,(state_11585[(4)]))){
var statearr_11610_11649 = state_11585;
(statearr_11610_11649[(1)] = cljs.core.first.call(null,(state_11585[(4)])));

} else {
throw ex__11194__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11192__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11650 = state_11585;
state_11585 = G__11650;
continue;
} else {
return ret_value__11192__auto__;
}
break;
}
});
cljs$core$async$state_machine__11191__auto__ = function(state_11585){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__11191__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__11191__auto____1.call(this,state_11585);
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
var process__$1 = (function (p__11617){
var vec__11619 = p__11617;
var v = cljs.core.nth.call(null,vec__11619,(0),null);
var p = cljs.core.nth.call(null,vec__11619,(1),null);
var job = vec__11619;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__11371__auto___11819 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__11372__auto__ = (function (){var switch__11190__auto__ = (function (state_11627){
var state_val_11628 = (state_11627[(1)]);
if((state_val_11628 === (1))){
var state_11627__$1 = state_11627;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11627__$1,(2),res,v);
} else {
if((state_val_11628 === (2))){
var inst_11624 = (state_11627[(2)]);
var inst_11625 = cljs.core.async.close_BANG_.call(null,res);
var state_11627__$1 = (function (){var statearr_11632 = state_11627;
(statearr_11632[(7)] = inst_11624);

return statearr_11632;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11627__$1,inst_11625);
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
var cljs$core$async$pipeline_STAR__$_state_machine__11191__auto____1 = (function (state_11627){
while(true){
var ret_value__11192__auto__ = (function (){try{while(true){
var result__11193__auto__ = switch__11190__auto__.call(null,state_11627);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11193__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11193__auto__;
}
break;
}
}catch (e11637){var ex__11194__auto__ = e11637;
var statearr_11638_11821 = state_11627;
(statearr_11638_11821[(2)] = ex__11194__auto__);


if(cljs.core.seq.call(null,(state_11627[(4)]))){
var statearr_11639_11823 = state_11627;
(statearr_11639_11823[(1)] = cljs.core.first.call(null,(state_11627[(4)])));

} else {
throw ex__11194__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11192__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11824 = state_11627;
state_11627 = G__11824;
continue;
} else {
return ret_value__11192__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__11191__auto__ = function(state_11627){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__11191__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__11191__auto____1.call(this,state_11627);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__11191__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__11191__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__11191__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__11191__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__11191__auto__;
})()
})();
var state__11373__auto__ = (function (){var statearr_11643 = f__11372__auto__.call(null);
(statearr_11643[(6)] = c__11371__auto___11819);

return statearr_11643;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11373__auto__);
}));


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});
var async = (function (p__11645){
var vec__11646 = p__11645;
var v = cljs.core.nth.call(null,vec__11646,(0),null);
var p = cljs.core.nth.call(null,vec__11646,(1),null);
var job = vec__11646;
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
var n__5593__auto___11825 = n;
var __11826 = (0);
while(true){
if((__11826 < n__5593__auto___11825)){
var G__11651_11827 = type;
var G__11651_11828__$1 = (((G__11651_11827 instanceof cljs.core.Keyword))?G__11651_11827.fqn:null);
switch (G__11651_11828__$1) {
case "compute":
var c__11371__auto___11830 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__11826,c__11371__auto___11830,G__11651_11827,G__11651_11828__$1,n__5593__auto___11825,jobs,results,process__$1,async){
return (function (){
var f__11372__auto__ = (function (){var switch__11190__auto__ = ((function (__11826,c__11371__auto___11830,G__11651_11827,G__11651_11828__$1,n__5593__auto___11825,jobs,results,process__$1,async){
return (function (state_11664){
var state_val_11665 = (state_11664[(1)]);
if((state_val_11665 === (1))){
var state_11664__$1 = state_11664;
var statearr_11666_11831 = state_11664__$1;
(statearr_11666_11831[(2)] = null);

(statearr_11666_11831[(1)] = (2));


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
var statearr_11667_11832 = state_11664__$1;
(statearr_11667_11832[(1)] = (5));

} else {
var statearr_11668_11833 = state_11664__$1;
(statearr_11668_11833[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11665 === (5))){
var state_11664__$1 = state_11664;
var statearr_11669_11834 = state_11664__$1;
(statearr_11669_11834[(2)] = null);

(statearr_11669_11834[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11665 === (6))){
var state_11664__$1 = state_11664;
var statearr_11670_11835 = state_11664__$1;
(statearr_11670_11835[(2)] = null);

(statearr_11670_11835[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11665 === (7))){
var inst_11660 = (state_11664[(2)]);
var state_11664__$1 = state_11664;
var statearr_11671_11838 = state_11664__$1;
(statearr_11671_11838[(2)] = inst_11660);

(statearr_11671_11838[(1)] = (3));


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
});})(__11826,c__11371__auto___11830,G__11651_11827,G__11651_11828__$1,n__5593__auto___11825,jobs,results,process__$1,async))
;
return ((function (__11826,switch__11190__auto__,c__11371__auto___11830,G__11651_11827,G__11651_11828__$1,n__5593__auto___11825,jobs,results,process__$1,async){
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
;})(__11826,switch__11190__auto__,c__11371__auto___11830,G__11651_11827,G__11651_11828__$1,n__5593__auto___11825,jobs,results,process__$1,async))
})();
var state__11373__auto__ = (function (){var statearr_11676 = f__11372__auto__.call(null);
(statearr_11676[(6)] = c__11371__auto___11830);

return statearr_11676;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11373__auto__);
});})(__11826,c__11371__auto___11830,G__11651_11827,G__11651_11828__$1,n__5593__auto___11825,jobs,results,process__$1,async))
);


break;
case "async":
var c__11371__auto___11847 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__11826,c__11371__auto___11847,G__11651_11827,G__11651_11828__$1,n__5593__auto___11825,jobs,results,process__$1,async){
return (function (){
var f__11372__auto__ = (function (){var switch__11190__auto__ = ((function (__11826,c__11371__auto___11847,G__11651_11827,G__11651_11828__$1,n__5593__auto___11825,jobs,results,process__$1,async){
return (function (state_11689){
var state_val_11690 = (state_11689[(1)]);
if((state_val_11690 === (1))){
var state_11689__$1 = state_11689;
var statearr_11691_11851 = state_11689__$1;
(statearr_11691_11851[(2)] = null);

(statearr_11691_11851[(1)] = (2));


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
var statearr_11692_11875 = state_11689__$1;
(statearr_11692_11875[(1)] = (5));

} else {
var statearr_11693_11877 = state_11689__$1;
(statearr_11693_11877[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11690 === (5))){
var state_11689__$1 = state_11689;
var statearr_11694_11878 = state_11689__$1;
(statearr_11694_11878[(2)] = null);

(statearr_11694_11878[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11690 === (6))){
var state_11689__$1 = state_11689;
var statearr_11695_11879 = state_11689__$1;
(statearr_11695_11879[(2)] = null);

(statearr_11695_11879[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11690 === (7))){
var inst_11685 = (state_11689[(2)]);
var state_11689__$1 = state_11689;
var statearr_11696_11881 = state_11689__$1;
(statearr_11696_11881[(2)] = inst_11685);

(statearr_11696_11881[(1)] = (3));


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
});})(__11826,c__11371__auto___11847,G__11651_11827,G__11651_11828__$1,n__5593__auto___11825,jobs,results,process__$1,async))
;
return ((function (__11826,switch__11190__auto__,c__11371__auto___11847,G__11651_11827,G__11651_11828__$1,n__5593__auto___11825,jobs,results,process__$1,async){
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
var statearr_11699_11884 = state_11689;
(statearr_11699_11884[(2)] = ex__11194__auto__);


if(cljs.core.seq.call(null,(state_11689[(4)]))){
var statearr_11700_11887 = state_11689;
(statearr_11700_11887[(1)] = cljs.core.first.call(null,(state_11689[(4)])));

} else {
throw ex__11194__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11192__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11889 = state_11689;
state_11689 = G__11889;
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
;})(__11826,switch__11190__auto__,c__11371__auto___11847,G__11651_11827,G__11651_11828__$1,n__5593__auto___11825,jobs,results,process__$1,async))
})();
var state__11373__auto__ = (function (){var statearr_11701 = f__11372__auto__.call(null);
(statearr_11701[(6)] = c__11371__auto___11847);

return statearr_11701;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11373__auto__);
});})(__11826,c__11371__auto___11847,G__11651_11827,G__11651_11828__$1,n__5593__auto___11825,jobs,results,process__$1,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__11651_11828__$1)].join('')));

}

var G__11891 = (__11826 + (1));
__11826 = G__11891;
continue;
} else {
}
break;
}

var c__11371__auto___11892 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__11372__auto__ = (function (){var switch__11190__auto__ = (function (state_11723){
var state_val_11724 = (state_11723[(1)]);
if((state_val_11724 === (7))){
var inst_11719 = (state_11723[(2)]);
var state_11723__$1 = state_11723;
var statearr_11725_11894 = state_11723__$1;
(statearr_11725_11894[(2)] = inst_11719);

(statearr_11725_11894[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11724 === (1))){
var state_11723__$1 = state_11723;
var statearr_11726_11896 = state_11723__$1;
(statearr_11726_11896[(2)] = null);

(statearr_11726_11896[(1)] = (2));


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
var statearr_11728_11897 = state_11723__$1;
(statearr_11728_11897[(1)] = (5));

} else {
var statearr_11729_11898 = state_11723__$1;
(statearr_11729_11898[(1)] = (6));

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
var statearr_11737_11908 = state_11723;
(statearr_11737_11908[(2)] = ex__11194__auto__);


if(cljs.core.seq.call(null,(state_11723[(4)]))){
var statearr_11738_11909 = state_11723;
(statearr_11738_11909[(1)] = cljs.core.first.call(null,(state_11723[(4)])));

} else {
throw ex__11194__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11192__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11911 = state_11723;
state_11723 = G__11911;
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
(statearr_11739[(6)] = c__11371__auto___11892);

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
var statearr_11779_11915 = state_11777__$1;
(statearr_11779_11915[(2)] = inst_11773);

(statearr_11779_11915[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11778 === (20))){
var state_11777__$1 = state_11777;
var statearr_11780_11916 = state_11777__$1;
(statearr_11780_11916[(2)] = null);

(statearr_11780_11916[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11778 === (1))){
var state_11777__$1 = state_11777;
var statearr_11781_11917 = state_11777__$1;
(statearr_11781_11917[(2)] = null);

(statearr_11781_11917[(1)] = (2));


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
var statearr_11783_11919 = state_11777__$1;
(statearr_11783_11919[(1)] = (5));

} else {
var statearr_11784_11920 = state_11777__$1;
(statearr_11784_11920[(1)] = (6));

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
var statearr_11785_11921 = state_11777__$1;
(statearr_11785_11921[(2)] = inst_11768);

(statearr_11785_11921[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11778 === (13))){
var inst_11770 = (state_11777[(2)]);
var state_11777__$1 = (function (){var statearr_11786 = state_11777;
(statearr_11786[(9)] = inst_11770);

return statearr_11786;
})();
var statearr_11787_11923 = state_11777__$1;
(statearr_11787_11923[(2)] = null);

(statearr_11787_11923[(1)] = (2));


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
var statearr_11788_11933 = state_11777__$1;
(statearr_11788_11933[(1)] = (19));

} else {
var statearr_11789_11935 = state_11777__$1;
(statearr_11789_11935[(1)] = (20));

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
var statearr_11793_11951 = state_11777__$1;
(statearr_11793_11951[(2)] = null);

(statearr_11793_11951[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11778 === (5))){
var state_11777__$1 = state_11777;
if(cljs.core.truth_(close_QMARK_)){
var statearr_11794_11953 = state_11777__$1;
(statearr_11794_11953[(1)] = (8));

} else {
var statearr_11795_11954 = state_11777__$1;
(statearr_11795_11954[(1)] = (9));

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
var statearr_11797_11957 = state_11777__$1;
(statearr_11797_11957[(1)] = (15));

} else {
var statearr_11798_11958 = state_11777__$1;
(statearr_11798_11958[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11778 === (16))){
var inst_11757 = (state_11777[(11)]);
var state_11777__$1 = state_11777;
var statearr_11799_11960 = state_11777__$1;
(statearr_11799_11960[(2)] = inst_11757);

(statearr_11799_11960[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11778 === (10))){
var inst_11749 = (state_11777[(2)]);
var state_11777__$1 = state_11777;
var statearr_11800_11962 = state_11777__$1;
(statearr_11800_11962[(2)] = inst_11749);

(statearr_11800_11962[(1)] = (7));


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
}catch (e11806){var ex__11194__auto__ = e11806;
var statearr_11807_11968 = state_11777;
(statearr_11807_11968[(2)] = ex__11194__auto__);


if(cljs.core.seq.call(null,(state_11777[(4)]))){
var statearr_11811_11969 = state_11777;
(statearr_11811_11969[(1)] = cljs.core.first.call(null,(state_11777[(4)])));

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
var state__11373__auto__ = (function (){var statearr_11812 = f__11372__auto__.call(null);
(statearr_11812[(6)] = c__11371__auto__);

return statearr_11812;
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
var G__11817 = arguments.length;
switch (G__11817) {
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
var G__11822 = arguments.length;
switch (G__11822) {
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
var c__11371__auto___11984 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__11372__auto__ = (function (){var switch__11190__auto__ = (function (state_11874){
var state_val_11876 = (state_11874[(1)]);
if((state_val_11876 === (7))){
var inst_11870 = (state_11874[(2)]);
var state_11874__$1 = state_11874;
var statearr_11880_11985 = state_11874__$1;
(statearr_11880_11985[(2)] = inst_11870);

(statearr_11880_11985[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11876 === (1))){
var state_11874__$1 = state_11874;
var statearr_11882_11986 = state_11874__$1;
(statearr_11882_11986[(2)] = null);

(statearr_11882_11986[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11876 === (4))){
var inst_11850 = (state_11874[(7)]);
var inst_11850__$1 = (state_11874[(2)]);
var inst_11852 = (inst_11850__$1 == null);
var state_11874__$1 = (function (){var statearr_11883 = state_11874;
(statearr_11883[(7)] = inst_11850__$1);

return statearr_11883;
})();
if(cljs.core.truth_(inst_11852)){
var statearr_11885_11987 = state_11874__$1;
(statearr_11885_11987[(1)] = (5));

} else {
var statearr_11886_11988 = state_11874__$1;
(statearr_11886_11988[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11876 === (13))){
var state_11874__$1 = state_11874;
var statearr_11888_11993 = state_11874__$1;
(statearr_11888_11993[(2)] = null);

(statearr_11888_11993[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11876 === (6))){
var inst_11850 = (state_11874[(7)]);
var inst_11857 = p.call(null,inst_11850);
var state_11874__$1 = state_11874;
if(cljs.core.truth_(inst_11857)){
var statearr_11890_11997 = state_11874__$1;
(statearr_11890_11997[(1)] = (9));

} else {
var statearr_11893_11998 = state_11874__$1;
(statearr_11893_11998[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11876 === (3))){
var inst_11872 = (state_11874[(2)]);
var state_11874__$1 = state_11874;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11874__$1,inst_11872);
} else {
if((state_val_11876 === (12))){
var state_11874__$1 = state_11874;
var statearr_11895_11999 = state_11874__$1;
(statearr_11895_11999[(2)] = null);

(statearr_11895_11999[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11876 === (2))){
var state_11874__$1 = state_11874;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11874__$1,(4),ch);
} else {
if((state_val_11876 === (11))){
var inst_11850 = (state_11874[(7)]);
var inst_11861 = (state_11874[(2)]);
var state_11874__$1 = state_11874;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11874__$1,(8),inst_11861,inst_11850);
} else {
if((state_val_11876 === (9))){
var state_11874__$1 = state_11874;
var statearr_11899_12001 = state_11874__$1;
(statearr_11899_12001[(2)] = tc);

(statearr_11899_12001[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11876 === (5))){
var inst_11854 = cljs.core.async.close_BANG_.call(null,tc);
var inst_11855 = cljs.core.async.close_BANG_.call(null,fc);
var state_11874__$1 = (function (){var statearr_11900 = state_11874;
(statearr_11900[(8)] = inst_11854);

return statearr_11900;
})();
var statearr_11902_12004 = state_11874__$1;
(statearr_11902_12004[(2)] = inst_11855);

(statearr_11902_12004[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11876 === (14))){
var inst_11868 = (state_11874[(2)]);
var state_11874__$1 = state_11874;
var statearr_11904_12006 = state_11874__$1;
(statearr_11904_12006[(2)] = inst_11868);

(statearr_11904_12006[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11876 === (10))){
var state_11874__$1 = state_11874;
var statearr_11905_12007 = state_11874__$1;
(statearr_11905_12007[(2)] = fc);

(statearr_11905_12007[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11876 === (8))){
var inst_11863 = (state_11874[(2)]);
var state_11874__$1 = state_11874;
if(cljs.core.truth_(inst_11863)){
var statearr_11906_12008 = state_11874__$1;
(statearr_11906_12008[(1)] = (12));

} else {
var statearr_11907_12009 = state_11874__$1;
(statearr_11907_12009[(1)] = (13));

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
var statearr_11910 = [null,null,null,null,null,null,null,null,null];
(statearr_11910[(0)] = cljs$core$async$state_machine__11191__auto__);

(statearr_11910[(1)] = (1));

return statearr_11910;
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
}catch (e11912){var ex__11194__auto__ = e11912;
var statearr_11913_12011 = state_11874;
(statearr_11913_12011[(2)] = ex__11194__auto__);


if(cljs.core.seq.call(null,(state_11874[(4)]))){
var statearr_11914_12013 = state_11874;
(statearr_11914_12013[(1)] = cljs.core.first.call(null,(state_11874[(4)])));

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
var state__11373__auto__ = (function (){var statearr_11918 = f__11372__auto__.call(null);
(statearr_11918[(6)] = c__11371__auto___11984);

return statearr_11918;
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
var statearr_11950_12016 = state_11946__$1;
(statearr_11950_12016[(2)] = inst_11942);

(statearr_11950_12016[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11947 === (1))){
var inst_11922 = init;
var inst_11924 = inst_11922;
var state_11946__$1 = (function (){var statearr_11952 = state_11946;
(statearr_11952[(7)] = inst_11924);

return statearr_11952;
})();
var statearr_11955_12017 = state_11946__$1;
(statearr_11955_12017[(2)] = null);

(statearr_11955_12017[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11947 === (4))){
var inst_11927 = (state_11946[(8)]);
var inst_11927__$1 = (state_11946[(2)]);
var inst_11928 = (inst_11927__$1 == null);
var state_11946__$1 = (function (){var statearr_11956 = state_11946;
(statearr_11956[(8)] = inst_11927__$1);

return statearr_11956;
})();
if(cljs.core.truth_(inst_11928)){
var statearr_11959_12021 = state_11946__$1;
(statearr_11959_12021[(1)] = (5));

} else {
var statearr_11961_12022 = state_11946__$1;
(statearr_11961_12022[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11947 === (6))){
var inst_11924 = (state_11946[(7)]);
var inst_11927 = (state_11946[(8)]);
var inst_11931 = (state_11946[(9)]);
var inst_11931__$1 = f.call(null,inst_11924,inst_11927);
var inst_11932 = cljs.core.reduced_QMARK_.call(null,inst_11931__$1);
var state_11946__$1 = (function (){var statearr_11965 = state_11946;
(statearr_11965[(9)] = inst_11931__$1);

return statearr_11965;
})();
if(inst_11932){
var statearr_11966_12034 = state_11946__$1;
(statearr_11966_12034[(1)] = (8));

} else {
var statearr_11967_12042 = state_11946__$1;
(statearr_11967_12042[(1)] = (9));

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
var inst_11931 = (state_11946[(9)]);
var inst_11924 = inst_11931;
var state_11946__$1 = (function (){var statearr_11971 = state_11946;
(statearr_11971[(7)] = inst_11924);

return statearr_11971;
})();
var statearr_11972_12050 = state_11946__$1;
(statearr_11972_12050[(2)] = null);

(statearr_11972_12050[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11947 === (5))){
var inst_11924 = (state_11946[(7)]);
var state_11946__$1 = state_11946;
var statearr_11974_12051 = state_11946__$1;
(statearr_11974_12051[(2)] = inst_11924);

(statearr_11974_12051[(1)] = (7));


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
var inst_11931 = (state_11946[(9)]);
var inst_11936 = cljs.core.deref.call(null,inst_11931);
var state_11946__$1 = state_11946;
var statearr_11976_12056 = state_11946__$1;
(statearr_11976_12056[(2)] = inst_11936);

(statearr_11976_12056[(1)] = (10));


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
var G__12062 = state_11946;
state_11946 = G__12062;
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
var f__11372__auto__ = (function (){var switch__11190__auto__ = (function (state_11995){
var state_val_11996 = (state_11995[(1)]);
if((state_val_11996 === (1))){
var inst_11989 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_11995__$1 = state_11995;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11995__$1,(2),inst_11989);
} else {
if((state_val_11996 === (2))){
var inst_11991 = (state_11995[(2)]);
var inst_11992 = f__$1.call(null,inst_11991);
var state_11995__$1 = state_11995;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11995__$1,inst_11992);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__11191__auto__ = null;
var cljs$core$async$transduce_$_state_machine__11191__auto____0 = (function (){
var statearr_12000 = [null,null,null,null,null,null,null];
(statearr_12000[(0)] = cljs$core$async$transduce_$_state_machine__11191__auto__);

(statearr_12000[(1)] = (1));

return statearr_12000;
});
var cljs$core$async$transduce_$_state_machine__11191__auto____1 = (function (state_11995){
while(true){
var ret_value__11192__auto__ = (function (){try{while(true){
var result__11193__auto__ = switch__11190__auto__.call(null,state_11995);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11193__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11193__auto__;
}
break;
}
}catch (e12002){var ex__11194__auto__ = e12002;
var statearr_12003_12069 = state_11995;
(statearr_12003_12069[(2)] = ex__11194__auto__);


if(cljs.core.seq.call(null,(state_11995[(4)]))){
var statearr_12005_12070 = state_11995;
(statearr_12005_12070[(1)] = cljs.core.first.call(null,(state_11995[(4)])));

} else {
throw ex__11194__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11192__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12072 = state_11995;
state_11995 = G__12072;
continue;
} else {
return ret_value__11192__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__11191__auto__ = function(state_11995){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__11191__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__11191__auto____1.call(this,state_11995);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__11191__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__11191__auto____0;
cljs$core$async$transduce_$_state_machine__11191__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__11191__auto____1;
return cljs$core$async$transduce_$_state_machine__11191__auto__;
})()
})();
var state__11373__auto__ = (function (){var statearr_12010 = f__11372__auto__.call(null);
(statearr_12010[(6)] = c__11371__auto__);

return statearr_12010;
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
var G__12015 = arguments.length;
switch (G__12015) {
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
var f__11372__auto__ = (function (){var switch__11190__auto__ = (function (state_12046){
var state_val_12047 = (state_12046[(1)]);
if((state_val_12047 === (7))){
var inst_12026 = (state_12046[(2)]);
var state_12046__$1 = state_12046;
var statearr_12052_12084 = state_12046__$1;
(statearr_12052_12084[(2)] = inst_12026);

(statearr_12052_12084[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12047 === (1))){
var inst_12018 = cljs.core.seq.call(null,coll);
var inst_12019 = inst_12018;
var state_12046__$1 = (function (){var statearr_12054 = state_12046;
(statearr_12054[(7)] = inst_12019);

return statearr_12054;
})();
var statearr_12055_12085 = state_12046__$1;
(statearr_12055_12085[(2)] = null);

(statearr_12055_12085[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12047 === (4))){
var inst_12019 = (state_12046[(7)]);
var inst_12024 = cljs.core.first.call(null,inst_12019);
var state_12046__$1 = state_12046;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12046__$1,(7),ch,inst_12024);
} else {
if((state_val_12047 === (13))){
var inst_12039 = (state_12046[(2)]);
var state_12046__$1 = state_12046;
var statearr_12057_12086 = state_12046__$1;
(statearr_12057_12086[(2)] = inst_12039);

(statearr_12057_12086[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12047 === (6))){
var inst_12029 = (state_12046[(2)]);
var state_12046__$1 = state_12046;
if(cljs.core.truth_(inst_12029)){
var statearr_12060_12087 = state_12046__$1;
(statearr_12060_12087[(1)] = (8));

} else {
var statearr_12061_12088 = state_12046__$1;
(statearr_12061_12088[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12047 === (3))){
var inst_12044 = (state_12046[(2)]);
var state_12046__$1 = state_12046;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12046__$1,inst_12044);
} else {
if((state_val_12047 === (12))){
var state_12046__$1 = state_12046;
var statearr_12063_12089 = state_12046__$1;
(statearr_12063_12089[(2)] = null);

(statearr_12063_12089[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12047 === (2))){
var inst_12019 = (state_12046[(7)]);
var state_12046__$1 = state_12046;
if(cljs.core.truth_(inst_12019)){
var statearr_12064_12090 = state_12046__$1;
(statearr_12064_12090[(1)] = (4));

} else {
var statearr_12065_12091 = state_12046__$1;
(statearr_12065_12091[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12047 === (11))){
var inst_12036 = cljs.core.async.close_BANG_.call(null,ch);
var state_12046__$1 = state_12046;
var statearr_12066_12092 = state_12046__$1;
(statearr_12066_12092[(2)] = inst_12036);

(statearr_12066_12092[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12047 === (9))){
var state_12046__$1 = state_12046;
if(cljs.core.truth_(close_QMARK_)){
var statearr_12067_12093 = state_12046__$1;
(statearr_12067_12093[(1)] = (11));

} else {
var statearr_12068_12095 = state_12046__$1;
(statearr_12068_12095[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12047 === (5))){
var inst_12019 = (state_12046[(7)]);
var state_12046__$1 = state_12046;
var statearr_12071_12097 = state_12046__$1;
(statearr_12071_12097[(2)] = inst_12019);

(statearr_12071_12097[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12047 === (10))){
var inst_12041 = (state_12046[(2)]);
var state_12046__$1 = state_12046;
var statearr_12073_12098 = state_12046__$1;
(statearr_12073_12098[(2)] = inst_12041);

(statearr_12073_12098[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12047 === (8))){
var inst_12019 = (state_12046[(7)]);
var inst_12031 = cljs.core.next.call(null,inst_12019);
var inst_12019__$1 = inst_12031;
var state_12046__$1 = (function (){var statearr_12074 = state_12046;
(statearr_12074[(7)] = inst_12019__$1);

return statearr_12074;
})();
var statearr_12075_12099 = state_12046__$1;
(statearr_12075_12099[(2)] = null);

(statearr_12075_12099[(1)] = (2));


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
var cljs$core$async$state_machine__11191__auto____1 = (function (state_12046){
while(true){
var ret_value__11192__auto__ = (function (){try{while(true){
var result__11193__auto__ = switch__11190__auto__.call(null,state_12046);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11193__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11193__auto__;
}
break;
}
}catch (e12077){var ex__11194__auto__ = e12077;
var statearr_12078_12107 = state_12046;
(statearr_12078_12107[(2)] = ex__11194__auto__);


if(cljs.core.seq.call(null,(state_12046[(4)]))){
var statearr_12079_12108 = state_12046;
(statearr_12079_12108[(1)] = cljs.core.first.call(null,(state_12046[(4)])));

} else {
throw ex__11194__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11192__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12112 = state_12046;
state_12046 = G__12112;
continue;
} else {
return ret_value__11192__auto__;
}
break;
}
});
cljs$core$async$state_machine__11191__auto__ = function(state_12046){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__11191__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__11191__auto____1.call(this,state_12046);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__11191__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__11191__auto____0;
cljs$core$async$state_machine__11191__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__11191__auto____1;
return cljs$core$async$state_machine__11191__auto__;
})()
})();
var state__11373__auto__ = (function (){var statearr_12080 = f__11372__auto__.call(null);
(statearr_12080[(6)] = c__11371__auto__);

return statearr_12080;
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
var G__12083 = arguments.length;
switch (G__12083) {
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

var cljs$core$async$Mux$muxch_STAR_$dyn_12117 = (function (_){
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
return cljs$core$async$Mux$muxch_STAR_$dyn_12117.call(null,_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_12123 = (function (m,ch,close_QMARK_){
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
return cljs$core$async$Mult$tap_STAR_$dyn_12123.call(null,m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_12128 = (function (m,ch){
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
return cljs$core$async$Mult$untap_STAR_$dyn_12128.call(null,m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_12136 = (function (m){
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
return cljs$core$async$Mult$untap_all_STAR_$dyn_12136.call(null,m);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async12132 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async12132 = (function (ch,cs,meta12133){
this.ch = ch;
this.cs = cs;
this.meta12133 = meta12133;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async12132.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12134,meta12133__$1){
var self__ = this;
var _12134__$1 = this;
return (new cljs.core.async.t_cljs$core$async12132(self__.ch,self__.cs,meta12133__$1));
}));

(cljs.core.async.t_cljs$core$async12132.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12134){
var self__ = this;
var _12134__$1 = this;
return self__.meta12133;
}));

(cljs.core.async.t_cljs$core$async12132.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12132.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async12132.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12132.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async12132.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async12132.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async12132.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta12133","meta12133",-1629202545,null)], null);
}));

(cljs.core.async.t_cljs$core$async12132.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async12132.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async12132");

(cljs.core.async.t_cljs$core$async12132.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write.call(null,writer__5288__auto__,"cljs.core.async/t_cljs$core$async12132");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async12132.
 */
cljs.core.async.__GT_t_cljs$core$async12132 = (function cljs$core$async$mult_$___GT_t_cljs$core$async12132(ch__$1,cs__$1,meta12133){
return (new cljs.core.async.t_cljs$core$async12132(ch__$1,cs__$1,meta12133));
});

}

return (new cljs.core.async.t_cljs$core$async12132(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__11371__auto___12495 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__11372__auto__ = (function (){var switch__11190__auto__ = (function (state_12295){
var state_val_12296 = (state_12295[(1)]);
if((state_val_12296 === (7))){
var inst_12291 = (state_12295[(2)]);
var state_12295__$1 = state_12295;
var statearr_12303_12497 = state_12295__$1;
(statearr_12303_12497[(2)] = inst_12291);

(statearr_12303_12497[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12296 === (20))){
var inst_12185 = (state_12295[(7)]);
var inst_12201 = cljs.core.first.call(null,inst_12185);
var inst_12202 = cljs.core.nth.call(null,inst_12201,(0),null);
var inst_12203 = cljs.core.nth.call(null,inst_12201,(1),null);
var state_12295__$1 = (function (){var statearr_12304 = state_12295;
(statearr_12304[(8)] = inst_12202);

return statearr_12304;
})();
if(cljs.core.truth_(inst_12203)){
var statearr_12305_12498 = state_12295__$1;
(statearr_12305_12498[(1)] = (22));

} else {
var statearr_12307_12499 = state_12295__$1;
(statearr_12307_12499[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12296 === (27))){
var inst_12232 = (state_12295[(9)]);
var inst_12234 = (state_12295[(10)]);
var inst_12239 = (state_12295[(11)]);
var inst_12148 = (state_12295[(12)]);
var inst_12239__$1 = cljs.core._nth.call(null,inst_12232,inst_12234);
var inst_12240 = cljs.core.async.put_BANG_.call(null,inst_12239__$1,inst_12148,done);
var state_12295__$1 = (function (){var statearr_12310 = state_12295;
(statearr_12310[(11)] = inst_12239__$1);

return statearr_12310;
})();
if(cljs.core.truth_(inst_12240)){
var statearr_12311_12500 = state_12295__$1;
(statearr_12311_12500[(1)] = (30));

} else {
var statearr_12312_12501 = state_12295__$1;
(statearr_12312_12501[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12296 === (1))){
var state_12295__$1 = state_12295;
var statearr_12313_12502 = state_12295__$1;
(statearr_12313_12502[(2)] = null);

(statearr_12313_12502[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12296 === (24))){
var inst_12185 = (state_12295[(7)]);
var inst_12209 = (state_12295[(2)]);
var inst_12210 = cljs.core.next.call(null,inst_12185);
var inst_12160 = inst_12210;
var inst_12161 = null;
var inst_12162 = (0);
var inst_12163 = (0);
var state_12295__$1 = (function (){var statearr_12316 = state_12295;
(statearr_12316[(13)] = inst_12209);

(statearr_12316[(14)] = inst_12160);

(statearr_12316[(15)] = inst_12161);

(statearr_12316[(16)] = inst_12162);

(statearr_12316[(17)] = inst_12163);

return statearr_12316;
})();
var statearr_12317_12508 = state_12295__$1;
(statearr_12317_12508[(2)] = null);

(statearr_12317_12508[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12296 === (39))){
var state_12295__$1 = state_12295;
var statearr_12322_12510 = state_12295__$1;
(statearr_12322_12510[(2)] = null);

(statearr_12322_12510[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12296 === (4))){
var inst_12148 = (state_12295[(12)]);
var inst_12148__$1 = (state_12295[(2)]);
var inst_12149 = (inst_12148__$1 == null);
var state_12295__$1 = (function (){var statearr_12324 = state_12295;
(statearr_12324[(12)] = inst_12148__$1);

return statearr_12324;
})();
if(cljs.core.truth_(inst_12149)){
var statearr_12326_12516 = state_12295__$1;
(statearr_12326_12516[(1)] = (5));

} else {
var statearr_12327_12517 = state_12295__$1;
(statearr_12327_12517[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12296 === (15))){
var inst_12163 = (state_12295[(17)]);
var inst_12160 = (state_12295[(14)]);
var inst_12161 = (state_12295[(15)]);
var inst_12162 = (state_12295[(16)]);
var inst_12181 = (state_12295[(2)]);
var inst_12182 = (inst_12163 + (1));
var tmp12318 = inst_12160;
var tmp12319 = inst_12161;
var tmp12320 = inst_12162;
var inst_12160__$1 = tmp12318;
var inst_12161__$1 = tmp12319;
var inst_12162__$1 = tmp12320;
var inst_12163__$1 = inst_12182;
var state_12295__$1 = (function (){var statearr_12330 = state_12295;
(statearr_12330[(18)] = inst_12181);

(statearr_12330[(14)] = inst_12160__$1);

(statearr_12330[(15)] = inst_12161__$1);

(statearr_12330[(16)] = inst_12162__$1);

(statearr_12330[(17)] = inst_12163__$1);

return statearr_12330;
})();
var statearr_12332_12519 = state_12295__$1;
(statearr_12332_12519[(2)] = null);

(statearr_12332_12519[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12296 === (21))){
var inst_12213 = (state_12295[(2)]);
var state_12295__$1 = state_12295;
var statearr_12337_12523 = state_12295__$1;
(statearr_12337_12523[(2)] = inst_12213);

(statearr_12337_12523[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12296 === (31))){
var inst_12239 = (state_12295[(11)]);
var inst_12246 = cljs.core.async.untap_STAR_.call(null,m,inst_12239);
var state_12295__$1 = state_12295;
var statearr_12338_12524 = state_12295__$1;
(statearr_12338_12524[(2)] = inst_12246);

(statearr_12338_12524[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12296 === (32))){
var inst_12234 = (state_12295[(10)]);
var inst_12231 = (state_12295[(19)]);
var inst_12232 = (state_12295[(9)]);
var inst_12233 = (state_12295[(20)]);
var inst_12248 = (state_12295[(2)]);
var inst_12249 = (inst_12234 + (1));
var tmp12334 = inst_12233;
var tmp12335 = inst_12232;
var tmp12336 = inst_12231;
var inst_12231__$1 = tmp12336;
var inst_12232__$1 = tmp12335;
var inst_12233__$1 = tmp12334;
var inst_12234__$1 = inst_12249;
var state_12295__$1 = (function (){var statearr_12343 = state_12295;
(statearr_12343[(21)] = inst_12248);

(statearr_12343[(19)] = inst_12231__$1);

(statearr_12343[(9)] = inst_12232__$1);

(statearr_12343[(20)] = inst_12233__$1);

(statearr_12343[(10)] = inst_12234__$1);

return statearr_12343;
})();
var statearr_12345_12536 = state_12295__$1;
(statearr_12345_12536[(2)] = null);

(statearr_12345_12536[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12296 === (40))){
var inst_12261 = (state_12295[(22)]);
var inst_12265 = cljs.core.async.untap_STAR_.call(null,m,inst_12261);
var state_12295__$1 = state_12295;
var statearr_12346_12537 = state_12295__$1;
(statearr_12346_12537[(2)] = inst_12265);

(statearr_12346_12537[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12296 === (33))){
var inst_12252 = (state_12295[(23)]);
var inst_12254 = cljs.core.chunked_seq_QMARK_.call(null,inst_12252);
var state_12295__$1 = state_12295;
if(inst_12254){
var statearr_12349_12541 = state_12295__$1;
(statearr_12349_12541[(1)] = (36));

} else {
var statearr_12351_12542 = state_12295__$1;
(statearr_12351_12542[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12296 === (13))){
var inst_12172 = (state_12295[(24)]);
var inst_12178 = cljs.core.async.close_BANG_.call(null,inst_12172);
var state_12295__$1 = state_12295;
var statearr_12352_12547 = state_12295__$1;
(statearr_12352_12547[(2)] = inst_12178);

(statearr_12352_12547[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12296 === (22))){
var inst_12202 = (state_12295[(8)]);
var inst_12206 = cljs.core.async.close_BANG_.call(null,inst_12202);
var state_12295__$1 = state_12295;
var statearr_12355_12548 = state_12295__$1;
(statearr_12355_12548[(2)] = inst_12206);

(statearr_12355_12548[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12296 === (36))){
var inst_12252 = (state_12295[(23)]);
var inst_12256 = cljs.core.chunk_first.call(null,inst_12252);
var inst_12257 = cljs.core.chunk_rest.call(null,inst_12252);
var inst_12258 = cljs.core.count.call(null,inst_12256);
var inst_12231 = inst_12257;
var inst_12232 = inst_12256;
var inst_12233 = inst_12258;
var inst_12234 = (0);
var state_12295__$1 = (function (){var statearr_12357 = state_12295;
(statearr_12357[(19)] = inst_12231);

(statearr_12357[(9)] = inst_12232);

(statearr_12357[(20)] = inst_12233);

(statearr_12357[(10)] = inst_12234);

return statearr_12357;
})();
var statearr_12359_12554 = state_12295__$1;
(statearr_12359_12554[(2)] = null);

(statearr_12359_12554[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12296 === (41))){
var inst_12252 = (state_12295[(23)]);
var inst_12267 = (state_12295[(2)]);
var inst_12268 = cljs.core.next.call(null,inst_12252);
var inst_12231 = inst_12268;
var inst_12232 = null;
var inst_12233 = (0);
var inst_12234 = (0);
var state_12295__$1 = (function (){var statearr_12363 = state_12295;
(statearr_12363[(25)] = inst_12267);

(statearr_12363[(19)] = inst_12231);

(statearr_12363[(9)] = inst_12232);

(statearr_12363[(20)] = inst_12233);

(statearr_12363[(10)] = inst_12234);

return statearr_12363;
})();
var statearr_12364_12560 = state_12295__$1;
(statearr_12364_12560[(2)] = null);

(statearr_12364_12560[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12296 === (43))){
var state_12295__$1 = state_12295;
var statearr_12366_12562 = state_12295__$1;
(statearr_12366_12562[(2)] = null);

(statearr_12366_12562[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12296 === (29))){
var inst_12278 = (state_12295[(2)]);
var state_12295__$1 = state_12295;
var statearr_12368_12567 = state_12295__$1;
(statearr_12368_12567[(2)] = inst_12278);

(statearr_12368_12567[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12296 === (44))){
var inst_12288 = (state_12295[(2)]);
var state_12295__$1 = (function (){var statearr_12371 = state_12295;
(statearr_12371[(26)] = inst_12288);

return statearr_12371;
})();
var statearr_12372_12568 = state_12295__$1;
(statearr_12372_12568[(2)] = null);

(statearr_12372_12568[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12296 === (6))){
var inst_12223 = (state_12295[(27)]);
var inst_12222 = cljs.core.deref.call(null,cs);
var inst_12223__$1 = cljs.core.keys.call(null,inst_12222);
var inst_12224 = cljs.core.count.call(null,inst_12223__$1);
var inst_12225 = cljs.core.reset_BANG_.call(null,dctr,inst_12224);
var inst_12230 = cljs.core.seq.call(null,inst_12223__$1);
var inst_12231 = inst_12230;
var inst_12232 = null;
var inst_12233 = (0);
var inst_12234 = (0);
var state_12295__$1 = (function (){var statearr_12374 = state_12295;
(statearr_12374[(27)] = inst_12223__$1);

(statearr_12374[(28)] = inst_12225);

(statearr_12374[(19)] = inst_12231);

(statearr_12374[(9)] = inst_12232);

(statearr_12374[(20)] = inst_12233);

(statearr_12374[(10)] = inst_12234);

return statearr_12374;
})();
var statearr_12376_12569 = state_12295__$1;
(statearr_12376_12569[(2)] = null);

(statearr_12376_12569[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12296 === (28))){
var inst_12231 = (state_12295[(19)]);
var inst_12252 = (state_12295[(23)]);
var inst_12252__$1 = cljs.core.seq.call(null,inst_12231);
var state_12295__$1 = (function (){var statearr_12380 = state_12295;
(statearr_12380[(23)] = inst_12252__$1);

return statearr_12380;
})();
if(inst_12252__$1){
var statearr_12381_12571 = state_12295__$1;
(statearr_12381_12571[(1)] = (33));

} else {
var statearr_12382_12572 = state_12295__$1;
(statearr_12382_12572[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12296 === (25))){
var inst_12234 = (state_12295[(10)]);
var inst_12233 = (state_12295[(20)]);
var inst_12236 = (inst_12234 < inst_12233);
var inst_12237 = inst_12236;
var state_12295__$1 = state_12295;
if(cljs.core.truth_(inst_12237)){
var statearr_12384_12573 = state_12295__$1;
(statearr_12384_12573[(1)] = (27));

} else {
var statearr_12385_12574 = state_12295__$1;
(statearr_12385_12574[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12296 === (34))){
var state_12295__$1 = state_12295;
var statearr_12387_12575 = state_12295__$1;
(statearr_12387_12575[(2)] = null);

(statearr_12387_12575[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12296 === (17))){
var state_12295__$1 = state_12295;
var statearr_12390_12576 = state_12295__$1;
(statearr_12390_12576[(2)] = null);

(statearr_12390_12576[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12296 === (3))){
var inst_12293 = (state_12295[(2)]);
var state_12295__$1 = state_12295;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12295__$1,inst_12293);
} else {
if((state_val_12296 === (12))){
var inst_12218 = (state_12295[(2)]);
var state_12295__$1 = state_12295;
var statearr_12392_12577 = state_12295__$1;
(statearr_12392_12577[(2)] = inst_12218);

(statearr_12392_12577[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12296 === (2))){
var state_12295__$1 = state_12295;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12295__$1,(4),ch);
} else {
if((state_val_12296 === (23))){
var state_12295__$1 = state_12295;
var statearr_12396_12578 = state_12295__$1;
(statearr_12396_12578[(2)] = null);

(statearr_12396_12578[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12296 === (35))){
var inst_12275 = (state_12295[(2)]);
var state_12295__$1 = state_12295;
var statearr_12399_12579 = state_12295__$1;
(statearr_12399_12579[(2)] = inst_12275);

(statearr_12399_12579[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12296 === (19))){
var inst_12185 = (state_12295[(7)]);
var inst_12191 = cljs.core.chunk_first.call(null,inst_12185);
var inst_12193 = cljs.core.chunk_rest.call(null,inst_12185);
var inst_12194 = cljs.core.count.call(null,inst_12191);
var inst_12160 = inst_12193;
var inst_12161 = inst_12191;
var inst_12162 = inst_12194;
var inst_12163 = (0);
var state_12295__$1 = (function (){var statearr_12400 = state_12295;
(statearr_12400[(14)] = inst_12160);

(statearr_12400[(15)] = inst_12161);

(statearr_12400[(16)] = inst_12162);

(statearr_12400[(17)] = inst_12163);

return statearr_12400;
})();
var statearr_12401_12585 = state_12295__$1;
(statearr_12401_12585[(2)] = null);

(statearr_12401_12585[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12296 === (11))){
var inst_12160 = (state_12295[(14)]);
var inst_12185 = (state_12295[(7)]);
var inst_12185__$1 = cljs.core.seq.call(null,inst_12160);
var state_12295__$1 = (function (){var statearr_12404 = state_12295;
(statearr_12404[(7)] = inst_12185__$1);

return statearr_12404;
})();
if(inst_12185__$1){
var statearr_12405_12586 = state_12295__$1;
(statearr_12405_12586[(1)] = (16));

} else {
var statearr_12406_12587 = state_12295__$1;
(statearr_12406_12587[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12296 === (9))){
var inst_12220 = (state_12295[(2)]);
var state_12295__$1 = state_12295;
var statearr_12412_12588 = state_12295__$1;
(statearr_12412_12588[(2)] = inst_12220);

(statearr_12412_12588[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12296 === (5))){
var inst_12158 = cljs.core.deref.call(null,cs);
var inst_12159 = cljs.core.seq.call(null,inst_12158);
var inst_12160 = inst_12159;
var inst_12161 = null;
var inst_12162 = (0);
var inst_12163 = (0);
var state_12295__$1 = (function (){var statearr_12415 = state_12295;
(statearr_12415[(14)] = inst_12160);

(statearr_12415[(15)] = inst_12161);

(statearr_12415[(16)] = inst_12162);

(statearr_12415[(17)] = inst_12163);

return statearr_12415;
})();
var statearr_12417_12589 = state_12295__$1;
(statearr_12417_12589[(2)] = null);

(statearr_12417_12589[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12296 === (14))){
var state_12295__$1 = state_12295;
var statearr_12420_12590 = state_12295__$1;
(statearr_12420_12590[(2)] = null);

(statearr_12420_12590[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12296 === (45))){
var inst_12285 = (state_12295[(2)]);
var state_12295__$1 = state_12295;
var statearr_12424_12591 = state_12295__$1;
(statearr_12424_12591[(2)] = inst_12285);

(statearr_12424_12591[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12296 === (26))){
var inst_12223 = (state_12295[(27)]);
var inst_12280 = (state_12295[(2)]);
var inst_12281 = cljs.core.seq.call(null,inst_12223);
var state_12295__$1 = (function (){var statearr_12427 = state_12295;
(statearr_12427[(29)] = inst_12280);

return statearr_12427;
})();
if(inst_12281){
var statearr_12431_12592 = state_12295__$1;
(statearr_12431_12592[(1)] = (42));

} else {
var statearr_12432_12593 = state_12295__$1;
(statearr_12432_12593[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12296 === (16))){
var inst_12185 = (state_12295[(7)]);
var inst_12189 = cljs.core.chunked_seq_QMARK_.call(null,inst_12185);
var state_12295__$1 = state_12295;
if(inst_12189){
var statearr_12435_12594 = state_12295__$1;
(statearr_12435_12594[(1)] = (19));

} else {
var statearr_12442_12595 = state_12295__$1;
(statearr_12442_12595[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12296 === (38))){
var inst_12271 = (state_12295[(2)]);
var state_12295__$1 = state_12295;
var statearr_12443_12596 = state_12295__$1;
(statearr_12443_12596[(2)] = inst_12271);

(statearr_12443_12596[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12296 === (30))){
var state_12295__$1 = state_12295;
var statearr_12445_12597 = state_12295__$1;
(statearr_12445_12597[(2)] = null);

(statearr_12445_12597[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12296 === (10))){
var inst_12161 = (state_12295[(15)]);
var inst_12163 = (state_12295[(17)]);
var inst_12171 = cljs.core._nth.call(null,inst_12161,inst_12163);
var inst_12172 = cljs.core.nth.call(null,inst_12171,(0),null);
var inst_12173 = cljs.core.nth.call(null,inst_12171,(1),null);
var state_12295__$1 = (function (){var statearr_12447 = state_12295;
(statearr_12447[(24)] = inst_12172);

return statearr_12447;
})();
if(cljs.core.truth_(inst_12173)){
var statearr_12448_12599 = state_12295__$1;
(statearr_12448_12599[(1)] = (13));

} else {
var statearr_12449_12600 = state_12295__$1;
(statearr_12449_12600[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12296 === (18))){
var inst_12216 = (state_12295[(2)]);
var state_12295__$1 = state_12295;
var statearr_12452_12601 = state_12295__$1;
(statearr_12452_12601[(2)] = inst_12216);

(statearr_12452_12601[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12296 === (42))){
var state_12295__$1 = state_12295;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12295__$1,(45),dchan);
} else {
if((state_val_12296 === (37))){
var inst_12252 = (state_12295[(23)]);
var inst_12261 = (state_12295[(22)]);
var inst_12148 = (state_12295[(12)]);
var inst_12261__$1 = cljs.core.first.call(null,inst_12252);
var inst_12262 = cljs.core.async.put_BANG_.call(null,inst_12261__$1,inst_12148,done);
var state_12295__$1 = (function (){var statearr_12468 = state_12295;
(statearr_12468[(22)] = inst_12261__$1);

return statearr_12468;
})();
if(cljs.core.truth_(inst_12262)){
var statearr_12469_12605 = state_12295__$1;
(statearr_12469_12605[(1)] = (39));

} else {
var statearr_12471_12606 = state_12295__$1;
(statearr_12471_12606[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12296 === (8))){
var inst_12163 = (state_12295[(17)]);
var inst_12162 = (state_12295[(16)]);
var inst_12165 = (inst_12163 < inst_12162);
var inst_12166 = inst_12165;
var state_12295__$1 = state_12295;
if(cljs.core.truth_(inst_12166)){
var statearr_12474_12607 = state_12295__$1;
(statearr_12474_12607[(1)] = (10));

} else {
var statearr_12475_12609 = state_12295__$1;
(statearr_12475_12609[(1)] = (11));

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
var statearr_12480 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12480[(0)] = cljs$core$async$mult_$_state_machine__11191__auto__);

(statearr_12480[(1)] = (1));

return statearr_12480;
});
var cljs$core$async$mult_$_state_machine__11191__auto____1 = (function (state_12295){
while(true){
var ret_value__11192__auto__ = (function (){try{while(true){
var result__11193__auto__ = switch__11190__auto__.call(null,state_12295);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11193__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11193__auto__;
}
break;
}
}catch (e12481){var ex__11194__auto__ = e12481;
var statearr_12482_12610 = state_12295;
(statearr_12482_12610[(2)] = ex__11194__auto__);


if(cljs.core.seq.call(null,(state_12295[(4)]))){
var statearr_12483_12611 = state_12295;
(statearr_12483_12611[(1)] = cljs.core.first.call(null,(state_12295[(4)])));

} else {
throw ex__11194__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11192__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12612 = state_12295;
state_12295 = G__12612;
continue;
} else {
return ret_value__11192__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__11191__auto__ = function(state_12295){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__11191__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__11191__auto____1.call(this,state_12295);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__11191__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__11191__auto____0;
cljs$core$async$mult_$_state_machine__11191__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__11191__auto____1;
return cljs$core$async$mult_$_state_machine__11191__auto__;
})()
})();
var state__11373__auto__ = (function (){var statearr_12484 = f__11372__auto__.call(null);
(statearr_12484[(6)] = c__11371__auto___12495);

return statearr_12484;
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
var G__12490 = arguments.length;
switch (G__12490) {
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

var cljs$core$async$Mix$admix_STAR_$dyn_12636 = (function (m,ch){
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
return cljs$core$async$Mix$admix_STAR_$dyn_12636.call(null,m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_12655 = (function (m,ch){
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
return cljs$core$async$Mix$unmix_STAR_$dyn_12655.call(null,m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_12689 = (function (m){
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
return cljs$core$async$Mix$unmix_all_STAR_$dyn_12689.call(null,m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_12693 = (function (m,state_map){
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
return cljs$core$async$Mix$toggle_STAR_$dyn_12693.call(null,m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_12696 = (function (m,mode){
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
return cljs$core$async$Mix$solo_mode_STAR_$dyn_12696.call(null,m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__5732__auto__ = [];
var len__5726__auto___12701 = arguments.length;
var i__5727__auto___12703 = (0);
while(true){
if((i__5727__auto___12703 < len__5726__auto___12701)){
args__5732__auto__.push((arguments[i__5727__auto___12703]));

var G__12704 = (i__5727__auto___12703 + (1));
i__5727__auto___12703 = G__12704;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((3) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5733__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__12555){
var map__12556 = p__12555;
var map__12556__$1 = cljs.core.__destructure_map.call(null,map__12556);
var opts = map__12556__$1;
var statearr_12557_12705 = state;
(statearr_12557_12705[(1)] = cont_block);


var temp__5804__auto__ = cljs.core.async.do_alts.call(null,(function (val){
var statearr_12561_12706 = state;
(statearr_12561_12706[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
}),ports,opts);
if(cljs.core.truth_(temp__5804__auto__)){
var cb = temp__5804__auto__;
var statearr_12566_12707 = state;
(statearr_12566_12707[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq12549){
var G__12550 = cljs.core.first.call(null,seq12549);
var seq12549__$1 = cljs.core.next.call(null,seq12549);
var G__12551 = cljs.core.first.call(null,seq12549__$1);
var seq12549__$2 = cljs.core.next.call(null,seq12549__$1);
var G__12552 = cljs.core.first.call(null,seq12549__$2);
var seq12549__$3 = cljs.core.next.call(null,seq12549__$2);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__12550,G__12551,G__12552,seq12549__$3);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async12580 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async12580 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta12581){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta12581 = meta12581;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async12580.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12582,meta12581__$1){
var self__ = this;
var _12582__$1 = this;
return (new cljs.core.async.t_cljs$core$async12580(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta12581__$1));
}));

(cljs.core.async.t_cljs$core$async12580.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12582){
var self__ = this;
var _12582__$1 = this;
return self__.meta12581;
}));

(cljs.core.async.t_cljs$core$async12580.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12580.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async12580.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12580.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async12580.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async12580.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async12580.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async12580.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async12580.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta12581","meta12581",107656655,null)], null);
}));

(cljs.core.async.t_cljs$core$async12580.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async12580.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async12580");

(cljs.core.async.t_cljs$core$async12580.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write.call(null,writer__5288__auto__,"cljs.core.async/t_cljs$core$async12580");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async12580.
 */
cljs.core.async.__GT_t_cljs$core$async12580 = (function cljs$core$async$mix_$___GT_t_cljs$core$async12580(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta12581){
return (new cljs.core.async.t_cljs$core$async12580(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta12581));
});

}

return (new cljs.core.async.t_cljs$core$async12580(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__11371__auto___12804 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__11372__auto__ = (function (){var switch__11190__auto__ = (function (state_12690){
var state_val_12691 = (state_12690[(1)]);
if((state_val_12691 === (7))){
var inst_12642 = (state_12690[(2)]);
var state_12690__$1 = state_12690;
if(cljs.core.truth_(inst_12642)){
var statearr_12694_12805 = state_12690__$1;
(statearr_12694_12805[(1)] = (8));

} else {
var statearr_12695_12806 = state_12690__$1;
(statearr_12695_12806[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12691 === (20))){
var inst_12634 = (state_12690[(7)]);
var state_12690__$1 = state_12690;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12690__$1,(23),out,inst_12634);
} else {
if((state_val_12691 === (1))){
var inst_12616 = calc_state.call(null);
var inst_12617 = cljs.core.__destructure_map.call(null,inst_12616);
var inst_12618 = cljs.core.get.call(null,inst_12617,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_12619 = cljs.core.get.call(null,inst_12617,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_12620 = cljs.core.get.call(null,inst_12617,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_12621 = inst_12616;
var state_12690__$1 = (function (){var statearr_12697 = state_12690;
(statearr_12697[(8)] = inst_12618);

(statearr_12697[(9)] = inst_12619);

(statearr_12697[(10)] = inst_12620);

(statearr_12697[(11)] = inst_12621);

return statearr_12697;
})();
var statearr_12698_12809 = state_12690__$1;
(statearr_12698_12809[(2)] = null);

(statearr_12698_12809[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12691 === (24))){
var inst_12625 = (state_12690[(12)]);
var inst_12621 = inst_12625;
var state_12690__$1 = (function (){var statearr_12699 = state_12690;
(statearr_12699[(11)] = inst_12621);

return statearr_12699;
})();
var statearr_12708_12810 = state_12690__$1;
(statearr_12708_12810[(2)] = null);

(statearr_12708_12810[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12691 === (4))){
var inst_12634 = (state_12690[(7)]);
var inst_12637 = (state_12690[(13)]);
var inst_12633 = (state_12690[(2)]);
var inst_12634__$1 = cljs.core.nth.call(null,inst_12633,(0),null);
var inst_12635 = cljs.core.nth.call(null,inst_12633,(1),null);
var inst_12637__$1 = (inst_12634__$1 == null);
var state_12690__$1 = (function (){var statearr_12713 = state_12690;
(statearr_12713[(7)] = inst_12634__$1);

(statearr_12713[(14)] = inst_12635);

(statearr_12713[(13)] = inst_12637__$1);

return statearr_12713;
})();
if(cljs.core.truth_(inst_12637__$1)){
var statearr_12718_12811 = state_12690__$1;
(statearr_12718_12811[(1)] = (5));

} else {
var statearr_12719_12812 = state_12690__$1;
(statearr_12719_12812[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12691 === (15))){
var inst_12626 = (state_12690[(15)]);
var inst_12658 = (state_12690[(16)]);
var inst_12658__$1 = cljs.core.empty_QMARK_.call(null,inst_12626);
var state_12690__$1 = (function (){var statearr_12720 = state_12690;
(statearr_12720[(16)] = inst_12658__$1);

return statearr_12720;
})();
if(inst_12658__$1){
var statearr_12721_12813 = state_12690__$1;
(statearr_12721_12813[(1)] = (17));

} else {
var statearr_12722_12814 = state_12690__$1;
(statearr_12722_12814[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12691 === (21))){
var inst_12625 = (state_12690[(12)]);
var inst_12621 = inst_12625;
var state_12690__$1 = (function (){var statearr_12726 = state_12690;
(statearr_12726[(11)] = inst_12621);

return statearr_12726;
})();
var statearr_12727_12816 = state_12690__$1;
(statearr_12727_12816[(2)] = null);

(statearr_12727_12816[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12691 === (13))){
var inst_12650 = (state_12690[(2)]);
var inst_12651 = calc_state.call(null);
var inst_12621 = inst_12651;
var state_12690__$1 = (function (){var statearr_12728 = state_12690;
(statearr_12728[(17)] = inst_12650);

(statearr_12728[(11)] = inst_12621);

return statearr_12728;
})();
var statearr_12729_12818 = state_12690__$1;
(statearr_12729_12818[(2)] = null);

(statearr_12729_12818[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12691 === (22))){
var inst_12679 = (state_12690[(2)]);
var state_12690__$1 = state_12690;
var statearr_12733_12820 = state_12690__$1;
(statearr_12733_12820[(2)] = inst_12679);

(statearr_12733_12820[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12691 === (6))){
var inst_12635 = (state_12690[(14)]);
var inst_12640 = cljs.core._EQ_.call(null,inst_12635,change);
var state_12690__$1 = state_12690;
var statearr_12734_12821 = state_12690__$1;
(statearr_12734_12821[(2)] = inst_12640);

(statearr_12734_12821[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12691 === (25))){
var state_12690__$1 = state_12690;
var statearr_12735_12822 = state_12690__$1;
(statearr_12735_12822[(2)] = null);

(statearr_12735_12822[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12691 === (17))){
var inst_12627 = (state_12690[(18)]);
var inst_12635 = (state_12690[(14)]);
var inst_12660 = inst_12627.call(null,inst_12635);
var inst_12661 = cljs.core.not.call(null,inst_12660);
var state_12690__$1 = state_12690;
var statearr_12739_12823 = state_12690__$1;
(statearr_12739_12823[(2)] = inst_12661);

(statearr_12739_12823[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12691 === (3))){
var inst_12686 = (state_12690[(2)]);
var state_12690__$1 = state_12690;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12690__$1,inst_12686);
} else {
if((state_val_12691 === (12))){
var state_12690__$1 = state_12690;
var statearr_12741_12824 = state_12690__$1;
(statearr_12741_12824[(2)] = null);

(statearr_12741_12824[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12691 === (2))){
var inst_12621 = (state_12690[(11)]);
var inst_12625 = (state_12690[(12)]);
var inst_12625__$1 = cljs.core.__destructure_map.call(null,inst_12621);
var inst_12626 = cljs.core.get.call(null,inst_12625__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_12627 = cljs.core.get.call(null,inst_12625__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_12628 = cljs.core.get.call(null,inst_12625__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_12690__$1 = (function (){var statearr_12745 = state_12690;
(statearr_12745[(12)] = inst_12625__$1);

(statearr_12745[(15)] = inst_12626);

(statearr_12745[(18)] = inst_12627);

return statearr_12745;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_12690__$1,(4),inst_12628);
} else {
if((state_val_12691 === (23))){
var inst_12669 = (state_12690[(2)]);
var state_12690__$1 = state_12690;
if(cljs.core.truth_(inst_12669)){
var statearr_12746_12828 = state_12690__$1;
(statearr_12746_12828[(1)] = (24));

} else {
var statearr_12747_12829 = state_12690__$1;
(statearr_12747_12829[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12691 === (19))){
var inst_12664 = (state_12690[(2)]);
var state_12690__$1 = state_12690;
var statearr_12748_12830 = state_12690__$1;
(statearr_12748_12830[(2)] = inst_12664);

(statearr_12748_12830[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12691 === (11))){
var inst_12635 = (state_12690[(14)]);
var inst_12647 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_12635);
var state_12690__$1 = state_12690;
var statearr_12749_12831 = state_12690__$1;
(statearr_12749_12831[(2)] = inst_12647);

(statearr_12749_12831[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12691 === (9))){
var inst_12626 = (state_12690[(15)]);
var inst_12635 = (state_12690[(14)]);
var inst_12654 = (state_12690[(19)]);
var inst_12654__$1 = inst_12626.call(null,inst_12635);
var state_12690__$1 = (function (){var statearr_12750 = state_12690;
(statearr_12750[(19)] = inst_12654__$1);

return statearr_12750;
})();
if(cljs.core.truth_(inst_12654__$1)){
var statearr_12751_12832 = state_12690__$1;
(statearr_12751_12832[(1)] = (14));

} else {
var statearr_12752_12833 = state_12690__$1;
(statearr_12752_12833[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12691 === (5))){
var inst_12637 = (state_12690[(13)]);
var state_12690__$1 = state_12690;
var statearr_12753_12834 = state_12690__$1;
(statearr_12753_12834[(2)] = inst_12637);

(statearr_12753_12834[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12691 === (14))){
var inst_12654 = (state_12690[(19)]);
var state_12690__$1 = state_12690;
var statearr_12761_12835 = state_12690__$1;
(statearr_12761_12835[(2)] = inst_12654);

(statearr_12761_12835[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12691 === (26))){
var inst_12675 = (state_12690[(2)]);
var state_12690__$1 = state_12690;
var statearr_12764_12836 = state_12690__$1;
(statearr_12764_12836[(2)] = inst_12675);

(statearr_12764_12836[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12691 === (16))){
var inst_12666 = (state_12690[(2)]);
var state_12690__$1 = state_12690;
if(cljs.core.truth_(inst_12666)){
var statearr_12769_12837 = state_12690__$1;
(statearr_12769_12837[(1)] = (20));

} else {
var statearr_12774_12838 = state_12690__$1;
(statearr_12774_12838[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12691 === (10))){
var inst_12682 = (state_12690[(2)]);
var state_12690__$1 = state_12690;
var statearr_12778_12839 = state_12690__$1;
(statearr_12778_12839[(2)] = inst_12682);

(statearr_12778_12839[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12691 === (18))){
var inst_12658 = (state_12690[(16)]);
var state_12690__$1 = state_12690;
var statearr_12786_12840 = state_12690__$1;
(statearr_12786_12840[(2)] = inst_12658);

(statearr_12786_12840[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12691 === (8))){
var inst_12634 = (state_12690[(7)]);
var inst_12645 = (inst_12634 == null);
var state_12690__$1 = state_12690;
if(cljs.core.truth_(inst_12645)){
var statearr_12789_12841 = state_12690__$1;
(statearr_12789_12841[(1)] = (11));

} else {
var statearr_12791_12842 = state_12690__$1;
(statearr_12791_12842[(1)] = (12));

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
var cljs$core$async$mix_$_state_machine__11191__auto____1 = (function (state_12690){
while(true){
var ret_value__11192__auto__ = (function (){try{while(true){
var result__11193__auto__ = switch__11190__auto__.call(null,state_12690);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11193__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11193__auto__;
}
break;
}
}catch (e12800){var ex__11194__auto__ = e12800;
var statearr_12801_12863 = state_12690;
(statearr_12801_12863[(2)] = ex__11194__auto__);


if(cljs.core.seq.call(null,(state_12690[(4)]))){
var statearr_12802_12867 = state_12690;
(statearr_12802_12867[(1)] = cljs.core.first.call(null,(state_12690[(4)])));

} else {
throw ex__11194__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11192__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12871 = state_12690;
state_12690 = G__12871;
continue;
} else {
return ret_value__11192__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__11191__auto__ = function(state_12690){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__11191__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__11191__auto____1.call(this,state_12690);
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

var cljs$core$async$Pub$sub_STAR_$dyn_12903 = (function (p,v,ch,close_QMARK_){
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
return cljs$core$async$Pub$sub_STAR_$dyn_12903.call(null,p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_12925 = (function (p,v,ch){
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
return cljs$core$async$Pub$unsub_STAR_$dyn_12925.call(null,p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_12929 = (function() {
var G__12930 = null;
var G__12930__1 = (function (p){
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
var G__12930__2 = (function (p,v){
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
G__12930 = function(p,v){
switch(arguments.length){
case 1:
return G__12930__1.call(this,p);
case 2:
return G__12930__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__12930.cljs$core$IFn$_invoke$arity$1 = G__12930__1;
G__12930.cljs$core$IFn$_invoke$arity$2 = G__12930__2;
return G__12930;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__12808 = arguments.length;
switch (G__12808) {
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
return cljs$core$async$Pub$unsub_all_STAR_$dyn_12929.call(null,p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_12929.call(null,p,v);
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
var G__12819 = arguments.length;
switch (G__12819) {
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
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,(function (p1__12815_SHARP_){
if(cljs.core.truth_(p1__12815_SHARP_.call(null,topic))){
return p1__12815_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__12815_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async12825 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async12825 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta12826){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta12826 = meta12826;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async12825.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12827,meta12826__$1){
var self__ = this;
var _12827__$1 = this;
return (new cljs.core.async.t_cljs$core$async12825(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta12826__$1));
}));

(cljs.core.async.t_cljs$core$async12825.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12827){
var self__ = this;
var _12827__$1 = this;
return self__.meta12826;
}));

(cljs.core.async.t_cljs$core$async12825.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12825.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async12825.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12825.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async12825.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
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

(cljs.core.async.t_cljs$core$async12825.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async12825.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async12825.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta12826","meta12826",-1215130290,null)], null);
}));

(cljs.core.async.t_cljs$core$async12825.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async12825.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async12825");

(cljs.core.async.t_cljs$core$async12825.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write.call(null,writer__5288__auto__,"cljs.core.async/t_cljs$core$async12825");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async12825.
 */
cljs.core.async.__GT_t_cljs$core$async12825 = (function cljs$core$async$__GT_t_cljs$core$async12825(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta12826){
return (new cljs.core.async.t_cljs$core$async12825(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta12826));
});

}

return (new cljs.core.async.t_cljs$core$async12825(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__11371__auto___13034 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__11372__auto__ = (function (){var switch__11190__auto__ = (function (state_12922){
var state_val_12923 = (state_12922[(1)]);
if((state_val_12923 === (7))){
var inst_12917 = (state_12922[(2)]);
var state_12922__$1 = state_12922;
var statearr_12927_13035 = state_12922__$1;
(statearr_12927_13035[(2)] = inst_12917);

(statearr_12927_13035[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12923 === (20))){
var state_12922__$1 = state_12922;
var statearr_12928_13039 = state_12922__$1;
(statearr_12928_13039[(2)] = null);

(statearr_12928_13039[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12923 === (1))){
var state_12922__$1 = state_12922;
var statearr_12931_13044 = state_12922__$1;
(statearr_12931_13044[(2)] = null);

(statearr_12931_13044[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12923 === (24))){
var inst_12899 = (state_12922[(7)]);
var inst_12909 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_12899);
var state_12922__$1 = state_12922;
var statearr_12932_13048 = state_12922__$1;
(statearr_12932_13048[(2)] = inst_12909);

(statearr_12932_13048[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12923 === (4))){
var inst_12845 = (state_12922[(8)]);
var inst_12845__$1 = (state_12922[(2)]);
var inst_12846 = (inst_12845__$1 == null);
var state_12922__$1 = (function (){var statearr_12933 = state_12922;
(statearr_12933[(8)] = inst_12845__$1);

return statearr_12933;
})();
if(cljs.core.truth_(inst_12846)){
var statearr_12934_13050 = state_12922__$1;
(statearr_12934_13050[(1)] = (5));

} else {
var statearr_12935_13051 = state_12922__$1;
(statearr_12935_13051[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12923 === (15))){
var inst_12893 = (state_12922[(2)]);
var state_12922__$1 = state_12922;
var statearr_12939_13054 = state_12922__$1;
(statearr_12939_13054[(2)] = inst_12893);

(statearr_12939_13054[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12923 === (21))){
var inst_12914 = (state_12922[(2)]);
var state_12922__$1 = (function (){var statearr_12940 = state_12922;
(statearr_12940[(9)] = inst_12914);

return statearr_12940;
})();
var statearr_12941_13064 = state_12922__$1;
(statearr_12941_13064[(2)] = null);

(statearr_12941_13064[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12923 === (13))){
var inst_12874 = (state_12922[(10)]);
var inst_12876 = cljs.core.chunked_seq_QMARK_.call(null,inst_12874);
var state_12922__$1 = state_12922;
if(inst_12876){
var statearr_12944_13082 = state_12922__$1;
(statearr_12944_13082[(1)] = (16));

} else {
var statearr_12945_13088 = state_12922__$1;
(statearr_12945_13088[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12923 === (22))){
var inst_12906 = (state_12922[(2)]);
var state_12922__$1 = state_12922;
if(cljs.core.truth_(inst_12906)){
var statearr_12947_13095 = state_12922__$1;
(statearr_12947_13095[(1)] = (23));

} else {
var statearr_12948_13096 = state_12922__$1;
(statearr_12948_13096[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12923 === (6))){
var inst_12845 = (state_12922[(8)]);
var inst_12899 = (state_12922[(7)]);
var inst_12901 = (state_12922[(11)]);
var inst_12899__$1 = topic_fn.call(null,inst_12845);
var inst_12900 = cljs.core.deref.call(null,mults);
var inst_12901__$1 = cljs.core.get.call(null,inst_12900,inst_12899__$1);
var state_12922__$1 = (function (){var statearr_12950 = state_12922;
(statearr_12950[(7)] = inst_12899__$1);

(statearr_12950[(11)] = inst_12901__$1);

return statearr_12950;
})();
if(cljs.core.truth_(inst_12901__$1)){
var statearr_12951_13104 = state_12922__$1;
(statearr_12951_13104[(1)] = (19));

} else {
var statearr_12952_13105 = state_12922__$1;
(statearr_12952_13105[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12923 === (25))){
var inst_12911 = (state_12922[(2)]);
var state_12922__$1 = state_12922;
var statearr_12953_13107 = state_12922__$1;
(statearr_12953_13107[(2)] = inst_12911);

(statearr_12953_13107[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12923 === (17))){
var inst_12874 = (state_12922[(10)]);
var inst_12884 = cljs.core.first.call(null,inst_12874);
var inst_12885 = cljs.core.async.muxch_STAR_.call(null,inst_12884);
var inst_12886 = cljs.core.async.close_BANG_.call(null,inst_12885);
var inst_12887 = cljs.core.next.call(null,inst_12874);
var inst_12855 = inst_12887;
var inst_12856 = null;
var inst_12857 = (0);
var inst_12858 = (0);
var state_12922__$1 = (function (){var statearr_12957 = state_12922;
(statearr_12957[(12)] = inst_12886);

(statearr_12957[(13)] = inst_12855);

(statearr_12957[(14)] = inst_12856);

(statearr_12957[(15)] = inst_12857);

(statearr_12957[(16)] = inst_12858);

return statearr_12957;
})();
var statearr_12958_13112 = state_12922__$1;
(statearr_12958_13112[(2)] = null);

(statearr_12958_13112[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12923 === (3))){
var inst_12919 = (state_12922[(2)]);
var state_12922__$1 = state_12922;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12922__$1,inst_12919);
} else {
if((state_val_12923 === (12))){
var inst_12895 = (state_12922[(2)]);
var state_12922__$1 = state_12922;
var statearr_12962_13116 = state_12922__$1;
(statearr_12962_13116[(2)] = inst_12895);

(statearr_12962_13116[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12923 === (2))){
var state_12922__$1 = state_12922;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12922__$1,(4),ch);
} else {
if((state_val_12923 === (23))){
var state_12922__$1 = state_12922;
var statearr_12965_13121 = state_12922__$1;
(statearr_12965_13121[(2)] = null);

(statearr_12965_13121[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12923 === (19))){
var inst_12901 = (state_12922[(11)]);
var inst_12845 = (state_12922[(8)]);
var inst_12904 = cljs.core.async.muxch_STAR_.call(null,inst_12901);
var state_12922__$1 = state_12922;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12922__$1,(22),inst_12904,inst_12845);
} else {
if((state_val_12923 === (11))){
var inst_12855 = (state_12922[(13)]);
var inst_12874 = (state_12922[(10)]);
var inst_12874__$1 = cljs.core.seq.call(null,inst_12855);
var state_12922__$1 = (function (){var statearr_12968 = state_12922;
(statearr_12968[(10)] = inst_12874__$1);

return statearr_12968;
})();
if(inst_12874__$1){
var statearr_12969_13123 = state_12922__$1;
(statearr_12969_13123[(1)] = (13));

} else {
var statearr_12970_13125 = state_12922__$1;
(statearr_12970_13125[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12923 === (9))){
var inst_12897 = (state_12922[(2)]);
var state_12922__$1 = state_12922;
var statearr_12974_13129 = state_12922__$1;
(statearr_12974_13129[(2)] = inst_12897);

(statearr_12974_13129[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12923 === (5))){
var inst_12852 = cljs.core.deref.call(null,mults);
var inst_12853 = cljs.core.vals.call(null,inst_12852);
var inst_12854 = cljs.core.seq.call(null,inst_12853);
var inst_12855 = inst_12854;
var inst_12856 = null;
var inst_12857 = (0);
var inst_12858 = (0);
var state_12922__$1 = (function (){var statearr_12975 = state_12922;
(statearr_12975[(13)] = inst_12855);

(statearr_12975[(14)] = inst_12856);

(statearr_12975[(15)] = inst_12857);

(statearr_12975[(16)] = inst_12858);

return statearr_12975;
})();
var statearr_12976_13133 = state_12922__$1;
(statearr_12976_13133[(2)] = null);

(statearr_12976_13133[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12923 === (14))){
var state_12922__$1 = state_12922;
var statearr_12983_13139 = state_12922__$1;
(statearr_12983_13139[(2)] = null);

(statearr_12983_13139[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12923 === (16))){
var inst_12874 = (state_12922[(10)]);
var inst_12878 = cljs.core.chunk_first.call(null,inst_12874);
var inst_12880 = cljs.core.chunk_rest.call(null,inst_12874);
var inst_12881 = cljs.core.count.call(null,inst_12878);
var inst_12855 = inst_12880;
var inst_12856 = inst_12878;
var inst_12857 = inst_12881;
var inst_12858 = (0);
var state_12922__$1 = (function (){var statearr_12985 = state_12922;
(statearr_12985[(13)] = inst_12855);

(statearr_12985[(14)] = inst_12856);

(statearr_12985[(15)] = inst_12857);

(statearr_12985[(16)] = inst_12858);

return statearr_12985;
})();
var statearr_12986_13144 = state_12922__$1;
(statearr_12986_13144[(2)] = null);

(statearr_12986_13144[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12923 === (10))){
var inst_12856 = (state_12922[(14)]);
var inst_12858 = (state_12922[(16)]);
var inst_12855 = (state_12922[(13)]);
var inst_12857 = (state_12922[(15)]);
var inst_12864 = cljs.core._nth.call(null,inst_12856,inst_12858);
var inst_12865 = cljs.core.async.muxch_STAR_.call(null,inst_12864);
var inst_12866 = cljs.core.async.close_BANG_.call(null,inst_12865);
var inst_12868 = (inst_12858 + (1));
var tmp12977 = inst_12856;
var tmp12978 = inst_12857;
var tmp12979 = inst_12855;
var inst_12855__$1 = tmp12979;
var inst_12856__$1 = tmp12977;
var inst_12857__$1 = tmp12978;
var inst_12858__$1 = inst_12868;
var state_12922__$1 = (function (){var statearr_12989 = state_12922;
(statearr_12989[(17)] = inst_12866);

(statearr_12989[(13)] = inst_12855__$1);

(statearr_12989[(14)] = inst_12856__$1);

(statearr_12989[(15)] = inst_12857__$1);

(statearr_12989[(16)] = inst_12858__$1);

return statearr_12989;
})();
var statearr_12993_13161 = state_12922__$1;
(statearr_12993_13161[(2)] = null);

(statearr_12993_13161[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12923 === (18))){
var inst_12890 = (state_12922[(2)]);
var state_12922__$1 = state_12922;
var statearr_12994_13162 = state_12922__$1;
(statearr_12994_13162[(2)] = inst_12890);

(statearr_12994_13162[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12923 === (8))){
var inst_12858 = (state_12922[(16)]);
var inst_12857 = (state_12922[(15)]);
var inst_12860 = (inst_12858 < inst_12857);
var inst_12861 = inst_12860;
var state_12922__$1 = state_12922;
if(cljs.core.truth_(inst_12861)){
var statearr_12995_13163 = state_12922__$1;
(statearr_12995_13163[(1)] = (10));

} else {
var statearr_12996_13164 = state_12922__$1;
(statearr_12996_13164[(1)] = (11));

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
var statearr_12999 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12999[(0)] = cljs$core$async$state_machine__11191__auto__);

(statearr_12999[(1)] = (1));

return statearr_12999;
});
var cljs$core$async$state_machine__11191__auto____1 = (function (state_12922){
while(true){
var ret_value__11192__auto__ = (function (){try{while(true){
var result__11193__auto__ = switch__11190__auto__.call(null,state_12922);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11193__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11193__auto__;
}
break;
}
}catch (e13001){var ex__11194__auto__ = e13001;
var statearr_13002_13168 = state_12922;
(statearr_13002_13168[(2)] = ex__11194__auto__);


if(cljs.core.seq.call(null,(state_12922[(4)]))){
var statearr_13003_13174 = state_12922;
(statearr_13003_13174[(1)] = cljs.core.first.call(null,(state_12922[(4)])));

} else {
throw ex__11194__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11192__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13178 = state_12922;
state_12922 = G__13178;
continue;
} else {
return ret_value__11192__auto__;
}
break;
}
});
cljs$core$async$state_machine__11191__auto__ = function(state_12922){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__11191__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__11191__auto____1.call(this,state_12922);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__11191__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__11191__auto____0;
cljs$core$async$state_machine__11191__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__11191__auto____1;
return cljs$core$async$state_machine__11191__auto__;
})()
})();
var state__11373__auto__ = (function (){var statearr_13006 = f__11372__auto__.call(null);
(statearr_13006[(6)] = c__11371__auto___13034);

return statearr_13006;
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
var G__13011 = arguments.length;
switch (G__13011) {
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
var G__13019 = arguments.length;
switch (G__13019) {
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
var G__13027 = arguments.length;
switch (G__13027) {
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
var c__11371__auto___13239 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__11372__auto__ = (function (){var switch__11190__auto__ = (function (state_13097){
var state_val_13098 = (state_13097[(1)]);
if((state_val_13098 === (7))){
var state_13097__$1 = state_13097;
var statearr_13103_13240 = state_13097__$1;
(statearr_13103_13240[(2)] = null);

(statearr_13103_13240[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13098 === (1))){
var state_13097__$1 = state_13097;
var statearr_13106_13242 = state_13097__$1;
(statearr_13106_13242[(2)] = null);

(statearr_13106_13242[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13098 === (4))){
var inst_13042 = (state_13097[(7)]);
var inst_13041 = (state_13097[(8)]);
var inst_13045 = (inst_13042 < inst_13041);
var state_13097__$1 = state_13097;
if(cljs.core.truth_(inst_13045)){
var statearr_13110_13256 = state_13097__$1;
(statearr_13110_13256[(1)] = (6));

} else {
var statearr_13111_13259 = state_13097__$1;
(statearr_13111_13259[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13098 === (15))){
var inst_13079 = (state_13097[(9)]);
var inst_13085 = cljs.core.apply.call(null,f,inst_13079);
var state_13097__$1 = state_13097;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13097__$1,(17),out,inst_13085);
} else {
if((state_val_13098 === (13))){
var inst_13079 = (state_13097[(9)]);
var inst_13079__$1 = (state_13097[(2)]);
var inst_13080 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_13079__$1);
var state_13097__$1 = (function (){var statearr_13114 = state_13097;
(statearr_13114[(9)] = inst_13079__$1);

return statearr_13114;
})();
if(cljs.core.truth_(inst_13080)){
var statearr_13117_13278 = state_13097__$1;
(statearr_13117_13278[(1)] = (14));

} else {
var statearr_13119_13279 = state_13097__$1;
(statearr_13119_13279[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13098 === (6))){
var state_13097__$1 = state_13097;
var statearr_13122_13280 = state_13097__$1;
(statearr_13122_13280[(2)] = null);

(statearr_13122_13280[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13098 === (17))){
var inst_13087 = (state_13097[(2)]);
var state_13097__$1 = (function (){var statearr_13132 = state_13097;
(statearr_13132[(10)] = inst_13087);

return statearr_13132;
})();
var statearr_13135_13283 = state_13097__$1;
(statearr_13135_13283[(2)] = null);

(statearr_13135_13283[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13098 === (3))){
var inst_13093 = (state_13097[(2)]);
var state_13097__$1 = state_13097;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13097__$1,inst_13093);
} else {
if((state_val_13098 === (12))){
var _ = (function (){var statearr_13143 = state_13097;
(statearr_13143[(4)] = cljs.core.rest.call(null,(state_13097[(4)])));

return statearr_13143;
})();
var state_13097__$1 = state_13097;
var ex13130 = (state_13097__$1[(2)]);
var statearr_13145_13285 = state_13097__$1;
(statearr_13145_13285[(5)] = ex13130);


if((ex13130 instanceof Object)){
var statearr_13150_13286 = state_13097__$1;
(statearr_13150_13286[(1)] = (11));

(statearr_13150_13286[(5)] = null);

} else {
throw ex13130;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13098 === (2))){
var inst_13040 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_13041 = cnt;
var inst_13042 = (0);
var state_13097__$1 = (function (){var statearr_13165 = state_13097;
(statearr_13165[(11)] = inst_13040);

(statearr_13165[(8)] = inst_13041);

(statearr_13165[(7)] = inst_13042);

return statearr_13165;
})();
var statearr_13166_13287 = state_13097__$1;
(statearr_13166_13287[(2)] = null);

(statearr_13166_13287[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13098 === (11))){
var inst_13053 = (state_13097[(2)]);
var inst_13055 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_13097__$1 = (function (){var statearr_13167 = state_13097;
(statearr_13167[(12)] = inst_13053);

return statearr_13167;
})();
var statearr_13170_13291 = state_13097__$1;
(statearr_13170_13291[(2)] = inst_13055);

(statearr_13170_13291[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13098 === (9))){
var inst_13042 = (state_13097[(7)]);
var _ = (function (){var statearr_13177 = state_13097;
(statearr_13177[(4)] = cljs.core.cons.call(null,(12),(state_13097[(4)])));

return statearr_13177;
})();
var inst_13062 = chs__$1.call(null,inst_13042);
var inst_13063 = done.call(null,inst_13042);
var inst_13065 = cljs.core.async.take_BANG_.call(null,inst_13062,inst_13063);
var ___$1 = (function (){var statearr_13179 = state_13097;
(statearr_13179[(4)] = cljs.core.rest.call(null,(state_13097[(4)])));

return statearr_13179;
})();
var state_13097__$1 = state_13097;
var statearr_13180_13296 = state_13097__$1;
(statearr_13180_13296[(2)] = inst_13065);

(statearr_13180_13296[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13098 === (5))){
var inst_13077 = (state_13097[(2)]);
var state_13097__$1 = (function (){var statearr_13186 = state_13097;
(statearr_13186[(13)] = inst_13077);

return statearr_13186;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13097__$1,(13),dchan);
} else {
if((state_val_13098 === (14))){
var inst_13083 = cljs.core.async.close_BANG_.call(null,out);
var state_13097__$1 = state_13097;
var statearr_13195_13297 = state_13097__$1;
(statearr_13195_13297[(2)] = inst_13083);

(statearr_13195_13297[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13098 === (16))){
var inst_13091 = (state_13097[(2)]);
var state_13097__$1 = state_13097;
var statearr_13196_13298 = state_13097__$1;
(statearr_13196_13298[(2)] = inst_13091);

(statearr_13196_13298[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13098 === (10))){
var inst_13042 = (state_13097[(7)]);
var inst_13068 = (state_13097[(2)]);
var inst_13070 = (inst_13042 + (1));
var inst_13042__$1 = inst_13070;
var state_13097__$1 = (function (){var statearr_13206 = state_13097;
(statearr_13206[(14)] = inst_13068);

(statearr_13206[(7)] = inst_13042__$1);

return statearr_13206;
})();
var statearr_13210_13301 = state_13097__$1;
(statearr_13210_13301[(2)] = null);

(statearr_13210_13301[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13098 === (8))){
var inst_13075 = (state_13097[(2)]);
var state_13097__$1 = state_13097;
var statearr_13214_13302 = state_13097__$1;
(statearr_13214_13302[(2)] = inst_13075);

(statearr_13214_13302[(1)] = (5));


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
var statearr_13221 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_13221[(0)] = cljs$core$async$state_machine__11191__auto__);

(statearr_13221[(1)] = (1));

return statearr_13221;
});
var cljs$core$async$state_machine__11191__auto____1 = (function (state_13097){
while(true){
var ret_value__11192__auto__ = (function (){try{while(true){
var result__11193__auto__ = switch__11190__auto__.call(null,state_13097);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11193__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11193__auto__;
}
break;
}
}catch (e13222){var ex__11194__auto__ = e13222;
var statearr_13223_13305 = state_13097;
(statearr_13223_13305[(2)] = ex__11194__auto__);


if(cljs.core.seq.call(null,(state_13097[(4)]))){
var statearr_13224_13306 = state_13097;
(statearr_13224_13306[(1)] = cljs.core.first.call(null,(state_13097[(4)])));

} else {
throw ex__11194__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11192__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13309 = state_13097;
state_13097 = G__13309;
continue;
} else {
return ret_value__11192__auto__;
}
break;
}
});
cljs$core$async$state_machine__11191__auto__ = function(state_13097){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__11191__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__11191__auto____1.call(this,state_13097);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__11191__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__11191__auto____0;
cljs$core$async$state_machine__11191__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__11191__auto____1;
return cljs$core$async$state_machine__11191__auto__;
})()
})();
var state__11373__auto__ = (function (){var statearr_13229 = f__11372__auto__.call(null);
(statearr_13229[(6)] = c__11371__auto___13239);

return statearr_13229;
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
var G__13238 = arguments.length;
switch (G__13238) {
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
var c__11371__auto___13331 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__11372__auto__ = (function (){var switch__11190__auto__ = (function (state_13281){
var state_val_13282 = (state_13281[(1)]);
if((state_val_13282 === (7))){
var inst_13255 = (state_13281[(7)]);
var inst_13257 = (state_13281[(8)]);
var inst_13255__$1 = (state_13281[(2)]);
var inst_13257__$1 = cljs.core.nth.call(null,inst_13255__$1,(0),null);
var inst_13258 = cljs.core.nth.call(null,inst_13255__$1,(1),null);
var inst_13260 = (inst_13257__$1 == null);
var state_13281__$1 = (function (){var statearr_13290 = state_13281;
(statearr_13290[(7)] = inst_13255__$1);

(statearr_13290[(8)] = inst_13257__$1);

(statearr_13290[(9)] = inst_13258);

return statearr_13290;
})();
if(cljs.core.truth_(inst_13260)){
var statearr_13292_13335 = state_13281__$1;
(statearr_13292_13335[(1)] = (8));

} else {
var statearr_13293_13336 = state_13281__$1;
(statearr_13293_13336[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13282 === (1))){
var inst_13241 = cljs.core.vec.call(null,chs);
var inst_13243 = inst_13241;
var state_13281__$1 = (function (){var statearr_13294 = state_13281;
(statearr_13294[(10)] = inst_13243);

return statearr_13294;
})();
var statearr_13295_13337 = state_13281__$1;
(statearr_13295_13337[(2)] = null);

(statearr_13295_13337[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13282 === (4))){
var inst_13243 = (state_13281[(10)]);
var state_13281__$1 = state_13281;
return cljs.core.async.ioc_alts_BANG_.call(null,state_13281__$1,(7),inst_13243);
} else {
if((state_val_13282 === (6))){
var inst_13274 = (state_13281[(2)]);
var state_13281__$1 = state_13281;
var statearr_13299_13342 = state_13281__$1;
(statearr_13299_13342[(2)] = inst_13274);

(statearr_13299_13342[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13282 === (3))){
var inst_13276 = (state_13281[(2)]);
var state_13281__$1 = state_13281;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13281__$1,inst_13276);
} else {
if((state_val_13282 === (2))){
var inst_13243 = (state_13281[(10)]);
var inst_13246 = cljs.core.count.call(null,inst_13243);
var inst_13248 = (inst_13246 > (0));
var state_13281__$1 = state_13281;
if(cljs.core.truth_(inst_13248)){
var statearr_13303_13362 = state_13281__$1;
(statearr_13303_13362[(1)] = (4));

} else {
var statearr_13304_13364 = state_13281__$1;
(statearr_13304_13364[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13282 === (11))){
var inst_13243 = (state_13281[(10)]);
var inst_13267 = (state_13281[(2)]);
var tmp13300 = inst_13243;
var inst_13243__$1 = tmp13300;
var state_13281__$1 = (function (){var statearr_13307 = state_13281;
(statearr_13307[(11)] = inst_13267);

(statearr_13307[(10)] = inst_13243__$1);

return statearr_13307;
})();
var statearr_13308_13366 = state_13281__$1;
(statearr_13308_13366[(2)] = null);

(statearr_13308_13366[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13282 === (9))){
var inst_13257 = (state_13281[(8)]);
var state_13281__$1 = state_13281;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13281__$1,(11),out,inst_13257);
} else {
if((state_val_13282 === (5))){
var inst_13272 = cljs.core.async.close_BANG_.call(null,out);
var state_13281__$1 = state_13281;
var statearr_13310_13367 = state_13281__$1;
(statearr_13310_13367[(2)] = inst_13272);

(statearr_13310_13367[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13282 === (10))){
var inst_13270 = (state_13281[(2)]);
var state_13281__$1 = state_13281;
var statearr_13311_13372 = state_13281__$1;
(statearr_13311_13372[(2)] = inst_13270);

(statearr_13311_13372[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13282 === (8))){
var inst_13243 = (state_13281[(10)]);
var inst_13255 = (state_13281[(7)]);
var inst_13257 = (state_13281[(8)]);
var inst_13258 = (state_13281[(9)]);
var inst_13262 = (function (){var cs = inst_13243;
var vec__13250 = inst_13255;
var v = inst_13257;
var c = inst_13258;
return (function (p1__13235_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__13235_SHARP_);
});
})();
var inst_13263 = cljs.core.filterv.call(null,inst_13262,inst_13243);
var inst_13243__$1 = inst_13263;
var state_13281__$1 = (function (){var statearr_13312 = state_13281;
(statearr_13312[(10)] = inst_13243__$1);

return statearr_13312;
})();
var statearr_13313_13377 = state_13281__$1;
(statearr_13313_13377[(2)] = null);

(statearr_13313_13377[(1)] = (2));


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
var statearr_13319 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_13319[(0)] = cljs$core$async$state_machine__11191__auto__);

(statearr_13319[(1)] = (1));

return statearr_13319;
});
var cljs$core$async$state_machine__11191__auto____1 = (function (state_13281){
while(true){
var ret_value__11192__auto__ = (function (){try{while(true){
var result__11193__auto__ = switch__11190__auto__.call(null,state_13281);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11193__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11193__auto__;
}
break;
}
}catch (e13322){var ex__11194__auto__ = e13322;
var statearr_13323_13380 = state_13281;
(statearr_13323_13380[(2)] = ex__11194__auto__);


if(cljs.core.seq.call(null,(state_13281[(4)]))){
var statearr_13324_13381 = state_13281;
(statearr_13324_13381[(1)] = cljs.core.first.call(null,(state_13281[(4)])));

} else {
throw ex__11194__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11192__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13384 = state_13281;
state_13281 = G__13384;
continue;
} else {
return ret_value__11192__auto__;
}
break;
}
});
cljs$core$async$state_machine__11191__auto__ = function(state_13281){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__11191__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__11191__auto____1.call(this,state_13281);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__11191__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__11191__auto____0;
cljs$core$async$state_machine__11191__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__11191__auto____1;
return cljs$core$async$state_machine__11191__auto__;
})()
})();
var state__11373__auto__ = (function (){var statearr_13326 = f__11372__auto__.call(null);
(statearr_13326[(6)] = c__11371__auto___13331);

return statearr_13326;
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
var G__13332 = arguments.length;
switch (G__13332) {
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
var c__11371__auto___13405 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__11372__auto__ = (function (){var switch__11190__auto__ = (function (state_13363){
var state_val_13365 = (state_13363[(1)]);
if((state_val_13365 === (7))){
var inst_13344 = (state_13363[(7)]);
var inst_13344__$1 = (state_13363[(2)]);
var inst_13345 = (inst_13344__$1 == null);
var inst_13346 = cljs.core.not.call(null,inst_13345);
var state_13363__$1 = (function (){var statearr_13368 = state_13363;
(statearr_13368[(7)] = inst_13344__$1);

return statearr_13368;
})();
if(inst_13346){
var statearr_13369_13407 = state_13363__$1;
(statearr_13369_13407[(1)] = (8));

} else {
var statearr_13370_13408 = state_13363__$1;
(statearr_13370_13408[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13365 === (1))){
var inst_13338 = (0);
var state_13363__$1 = (function (){var statearr_13371 = state_13363;
(statearr_13371[(8)] = inst_13338);

return statearr_13371;
})();
var statearr_13373_13409 = state_13363__$1;
(statearr_13373_13409[(2)] = null);

(statearr_13373_13409[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13365 === (4))){
var state_13363__$1 = state_13363;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13363__$1,(7),ch);
} else {
if((state_val_13365 === (6))){
var inst_13357 = (state_13363[(2)]);
var state_13363__$1 = state_13363;
var statearr_13376_13410 = state_13363__$1;
(statearr_13376_13410[(2)] = inst_13357);

(statearr_13376_13410[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13365 === (3))){
var inst_13359 = (state_13363[(2)]);
var inst_13360 = cljs.core.async.close_BANG_.call(null,out);
var state_13363__$1 = (function (){var statearr_13379 = state_13363;
(statearr_13379[(9)] = inst_13359);

return statearr_13379;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13363__$1,inst_13360);
} else {
if((state_val_13365 === (2))){
var inst_13338 = (state_13363[(8)]);
var inst_13340 = (inst_13338 < n);
var state_13363__$1 = state_13363;
if(cljs.core.truth_(inst_13340)){
var statearr_13382_13414 = state_13363__$1;
(statearr_13382_13414[(1)] = (4));

} else {
var statearr_13383_13418 = state_13363__$1;
(statearr_13383_13418[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13365 === (11))){
var inst_13338 = (state_13363[(8)]);
var inst_13349 = (state_13363[(2)]);
var inst_13350 = (inst_13338 + (1));
var inst_13338__$1 = inst_13350;
var state_13363__$1 = (function (){var statearr_13385 = state_13363;
(statearr_13385[(10)] = inst_13349);

(statearr_13385[(8)] = inst_13338__$1);

return statearr_13385;
})();
var statearr_13386_13419 = state_13363__$1;
(statearr_13386_13419[(2)] = null);

(statearr_13386_13419[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13365 === (9))){
var state_13363__$1 = state_13363;
var statearr_13387_13420 = state_13363__$1;
(statearr_13387_13420[(2)] = null);

(statearr_13387_13420[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13365 === (5))){
var state_13363__$1 = state_13363;
var statearr_13388_13421 = state_13363__$1;
(statearr_13388_13421[(2)] = null);

(statearr_13388_13421[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13365 === (10))){
var inst_13354 = (state_13363[(2)]);
var state_13363__$1 = state_13363;
var statearr_13389_13422 = state_13363__$1;
(statearr_13389_13422[(2)] = inst_13354);

(statearr_13389_13422[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13365 === (8))){
var inst_13344 = (state_13363[(7)]);
var state_13363__$1 = state_13363;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13363__$1,(11),out,inst_13344);
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
var statearr_13392 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_13392[(0)] = cljs$core$async$state_machine__11191__auto__);

(statearr_13392[(1)] = (1));

return statearr_13392;
});
var cljs$core$async$state_machine__11191__auto____1 = (function (state_13363){
while(true){
var ret_value__11192__auto__ = (function (){try{while(true){
var result__11193__auto__ = switch__11190__auto__.call(null,state_13363);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11193__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11193__auto__;
}
break;
}
}catch (e13393){var ex__11194__auto__ = e13393;
var statearr_13395_13424 = state_13363;
(statearr_13395_13424[(2)] = ex__11194__auto__);


if(cljs.core.seq.call(null,(state_13363[(4)]))){
var statearr_13396_13426 = state_13363;
(statearr_13396_13426[(1)] = cljs.core.first.call(null,(state_13363[(4)])));

} else {
throw ex__11194__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11192__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13427 = state_13363;
state_13363 = G__13427;
continue;
} else {
return ret_value__11192__auto__;
}
break;
}
});
cljs$core$async$state_machine__11191__auto__ = function(state_13363){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__11191__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__11191__auto____1.call(this,state_13363);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__11191__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__11191__auto____0;
cljs$core$async$state_machine__11191__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__11191__auto____1;
return cljs$core$async$state_machine__11191__auto__;
})()
})();
var state__11373__auto__ = (function (){var statearr_13397 = f__11372__auto__.call(null);
(statearr_13397[(6)] = c__11371__auto___13405);

return statearr_13397;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async13402 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async13402 = (function (f,ch,meta13403){
this.f = f;
this.ch = ch;
this.meta13403 = meta13403;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async13402.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13404,meta13403__$1){
var self__ = this;
var _13404__$1 = this;
return (new cljs.core.async.t_cljs$core$async13402(self__.f,self__.ch,meta13403__$1));
}));

(cljs.core.async.t_cljs$core$async13402.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13404){
var self__ = this;
var _13404__$1 = this;
return self__.meta13403;
}));

(cljs.core.async.t_cljs$core$async13402.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async13402.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async13402.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async13402.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async13402.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async13415 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async13415 = (function (f,ch,meta13403,_,fn1,meta13416){
this.f = f;
this.ch = ch;
this.meta13403 = meta13403;
this._ = _;
this.fn1 = fn1;
this.meta13416 = meta13416;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async13415.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13417,meta13416__$1){
var self__ = this;
var _13417__$1 = this;
return (new cljs.core.async.t_cljs$core$async13415(self__.f,self__.ch,self__.meta13403,self__._,self__.fn1,meta13416__$1));
}));

(cljs.core.async.t_cljs$core$async13415.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13417){
var self__ = this;
var _13417__$1 = this;
return self__.meta13416;
}));

(cljs.core.async.t_cljs$core$async13415.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async13415.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
}));

(cljs.core.async.t_cljs$core$async13415.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async13415.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return (function (p1__13399_SHARP_){
return f1.call(null,(((p1__13399_SHARP_ == null))?null:self__.f.call(null,p1__13399_SHARP_)));
});
}));

(cljs.core.async.t_cljs$core$async13415.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta13403","meta13403",1564401901,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async13402","cljs.core.async/t_cljs$core$async13402",-1936507410,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta13416","meta13416",-1137338955,null)], null);
}));

(cljs.core.async.t_cljs$core$async13415.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async13415.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async13415");

(cljs.core.async.t_cljs$core$async13415.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write.call(null,writer__5288__auto__,"cljs.core.async/t_cljs$core$async13415");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async13415.
 */
cljs.core.async.__GT_t_cljs$core$async13415 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async13415(f__$1,ch__$1,meta13403__$1,___$2,fn1__$1,meta13416){
return (new cljs.core.async.t_cljs$core$async13415(f__$1,ch__$1,meta13403__$1,___$2,fn1__$1,meta13416));
});

}

return (new cljs.core.async.t_cljs$core$async13415(self__.f,self__.ch,self__.meta13403,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
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

(cljs.core.async.t_cljs$core$async13402.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async13402.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async13402.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta13403","meta13403",1564401901,null)], null);
}));

(cljs.core.async.t_cljs$core$async13402.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async13402.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async13402");

(cljs.core.async.t_cljs$core$async13402.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write.call(null,writer__5288__auto__,"cljs.core.async/t_cljs$core$async13402");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async13402.
 */
cljs.core.async.__GT_t_cljs$core$async13402 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async13402(f__$1,ch__$1,meta13403){
return (new cljs.core.async.t_cljs$core$async13402(f__$1,ch__$1,meta13403));
});

}

return (new cljs.core.async.t_cljs$core$async13402(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async13436 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async13436 = (function (f,ch,meta13437){
this.f = f;
this.ch = ch;
this.meta13437 = meta13437;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async13436.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13438,meta13437__$1){
var self__ = this;
var _13438__$1 = this;
return (new cljs.core.async.t_cljs$core$async13436(self__.f,self__.ch,meta13437__$1));
}));

(cljs.core.async.t_cljs$core$async13436.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13438){
var self__ = this;
var _13438__$1 = this;
return self__.meta13437;
}));

(cljs.core.async.t_cljs$core$async13436.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async13436.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async13436.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async13436.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async13436.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async13436.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
}));

(cljs.core.async.t_cljs$core$async13436.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta13437","meta13437",1148812701,null)], null);
}));

(cljs.core.async.t_cljs$core$async13436.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async13436.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async13436");

(cljs.core.async.t_cljs$core$async13436.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write.call(null,writer__5288__auto__,"cljs.core.async/t_cljs$core$async13436");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async13436.
 */
cljs.core.async.__GT_t_cljs$core$async13436 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async13436(f__$1,ch__$1,meta13437){
return (new cljs.core.async.t_cljs$core$async13436(f__$1,ch__$1,meta13437));
});

}

return (new cljs.core.async.t_cljs$core$async13436(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async13444 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async13444 = (function (p,ch,meta13445){
this.p = p;
this.ch = ch;
this.meta13445 = meta13445;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async13444.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13446,meta13445__$1){
var self__ = this;
var _13446__$1 = this;
return (new cljs.core.async.t_cljs$core$async13444(self__.p,self__.ch,meta13445__$1));
}));

(cljs.core.async.t_cljs$core$async13444.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13446){
var self__ = this;
var _13446__$1 = this;
return self__.meta13445;
}));

(cljs.core.async.t_cljs$core$async13444.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async13444.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async13444.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async13444.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async13444.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async13444.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async13444.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async13444.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta13445","meta13445",1167021577,null)], null);
}));

(cljs.core.async.t_cljs$core$async13444.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async13444.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async13444");

(cljs.core.async.t_cljs$core$async13444.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write.call(null,writer__5288__auto__,"cljs.core.async/t_cljs$core$async13444");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async13444.
 */
cljs.core.async.__GT_t_cljs$core$async13444 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async13444(p__$1,ch__$1,meta13445){
return (new cljs.core.async.t_cljs$core$async13444(p__$1,ch__$1,meta13445));
});

}

return (new cljs.core.async.t_cljs$core$async13444(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__13452 = arguments.length;
switch (G__13452) {
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
var c__11371__auto___13508 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__11372__auto__ = (function (){var switch__11190__auto__ = (function (state_13476){
var state_val_13477 = (state_13476[(1)]);
if((state_val_13477 === (7))){
var inst_13472 = (state_13476[(2)]);
var state_13476__$1 = state_13476;
var statearr_13479_13509 = state_13476__$1;
(statearr_13479_13509[(2)] = inst_13472);

(statearr_13479_13509[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13477 === (1))){
var state_13476__$1 = state_13476;
var statearr_13481_13510 = state_13476__$1;
(statearr_13481_13510[(2)] = null);

(statearr_13481_13510[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13477 === (4))){
var inst_13457 = (state_13476[(7)]);
var inst_13457__$1 = (state_13476[(2)]);
var inst_13458 = (inst_13457__$1 == null);
var state_13476__$1 = (function (){var statearr_13482 = state_13476;
(statearr_13482[(7)] = inst_13457__$1);

return statearr_13482;
})();
if(cljs.core.truth_(inst_13458)){
var statearr_13483_13512 = state_13476__$1;
(statearr_13483_13512[(1)] = (5));

} else {
var statearr_13485_13513 = state_13476__$1;
(statearr_13485_13513[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13477 === (6))){
var inst_13457 = (state_13476[(7)]);
var inst_13462 = p.call(null,inst_13457);
var state_13476__$1 = state_13476;
if(cljs.core.truth_(inst_13462)){
var statearr_13486_13525 = state_13476__$1;
(statearr_13486_13525[(1)] = (8));

} else {
var statearr_13487_13528 = state_13476__$1;
(statearr_13487_13528[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13477 === (3))){
var inst_13474 = (state_13476[(2)]);
var state_13476__$1 = state_13476;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13476__$1,inst_13474);
} else {
if((state_val_13477 === (2))){
var state_13476__$1 = state_13476;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13476__$1,(4),ch);
} else {
if((state_val_13477 === (11))){
var inst_13465 = (state_13476[(2)]);
var state_13476__$1 = state_13476;
var statearr_13489_13546 = state_13476__$1;
(statearr_13489_13546[(2)] = inst_13465);

(statearr_13489_13546[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13477 === (9))){
var state_13476__$1 = state_13476;
var statearr_13490_13549 = state_13476__$1;
(statearr_13490_13549[(2)] = null);

(statearr_13490_13549[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13477 === (5))){
var inst_13460 = cljs.core.async.close_BANG_.call(null,out);
var state_13476__$1 = state_13476;
var statearr_13492_13557 = state_13476__$1;
(statearr_13492_13557[(2)] = inst_13460);

(statearr_13492_13557[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13477 === (10))){
var inst_13468 = (state_13476[(2)]);
var state_13476__$1 = (function (){var statearr_13493 = state_13476;
(statearr_13493[(8)] = inst_13468);

return statearr_13493;
})();
var statearr_13494_13573 = state_13476__$1;
(statearr_13494_13573[(2)] = null);

(statearr_13494_13573[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13477 === (8))){
var inst_13457 = (state_13476[(7)]);
var state_13476__$1 = state_13476;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13476__$1,(11),out,inst_13457);
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
var statearr_13498 = [null,null,null,null,null,null,null,null,null];
(statearr_13498[(0)] = cljs$core$async$state_machine__11191__auto__);

(statearr_13498[(1)] = (1));

return statearr_13498;
});
var cljs$core$async$state_machine__11191__auto____1 = (function (state_13476){
while(true){
var ret_value__11192__auto__ = (function (){try{while(true){
var result__11193__auto__ = switch__11190__auto__.call(null,state_13476);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11193__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11193__auto__;
}
break;
}
}catch (e13499){var ex__11194__auto__ = e13499;
var statearr_13500_13586 = state_13476;
(statearr_13500_13586[(2)] = ex__11194__auto__);


if(cljs.core.seq.call(null,(state_13476[(4)]))){
var statearr_13501_13588 = state_13476;
(statearr_13501_13588[(1)] = cljs.core.first.call(null,(state_13476[(4)])));

} else {
throw ex__11194__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11192__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13590 = state_13476;
state_13476 = G__13590;
continue;
} else {
return ret_value__11192__auto__;
}
break;
}
});
cljs$core$async$state_machine__11191__auto__ = function(state_13476){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__11191__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__11191__auto____1.call(this,state_13476);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__11191__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__11191__auto____0;
cljs$core$async$state_machine__11191__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__11191__auto____1;
return cljs$core$async$state_machine__11191__auto__;
})()
})();
var state__11373__auto__ = (function (){var statearr_13502 = f__11372__auto__.call(null);
(statearr_13502[(6)] = c__11371__auto___13508);

return statearr_13502;
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
var G__13505 = arguments.length;
switch (G__13505) {
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
var f__11372__auto__ = (function (){var switch__11190__auto__ = (function (state_13584){
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
var inst_13547 = (state_13584[(7)]);
var inst_13560 = (state_13584[(2)]);
var inst_13561 = cljs.core.next.call(null,inst_13547);
var inst_13529 = inst_13561;
var inst_13530 = null;
var inst_13531 = (0);
var inst_13532 = (0);
var state_13584__$1 = (function (){var statearr_13589 = state_13584;
(statearr_13589[(8)] = inst_13560);

(statearr_13589[(9)] = inst_13529);

(statearr_13589[(10)] = inst_13530);

(statearr_13589[(11)] = inst_13531);

(statearr_13589[(12)] = inst_13532);

return statearr_13589;
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
var inst_13516 = (state_13584[(13)]);
var inst_13516__$1 = (state_13584[(2)]);
var inst_13517 = (inst_13516__$1 == null);
var state_13584__$1 = (function (){var statearr_13594 = state_13584;
(statearr_13594[(13)] = inst_13516__$1);

return statearr_13594;
})();
if(cljs.core.truth_(inst_13517)){
var statearr_13595_13635 = state_13584__$1;
(statearr_13595_13635[(1)] = (5));

} else {
var statearr_13596_13636 = state_13584__$1;
(statearr_13596_13636[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13585 === (15))){
var state_13584__$1 = state_13584;
var statearr_13600_13638 = state_13584__$1;
(statearr_13600_13638[(2)] = null);

(statearr_13600_13638[(1)] = (16));


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
var inst_13532 = (state_13584[(12)]);
var inst_13529 = (state_13584[(9)]);
var inst_13530 = (state_13584[(10)]);
var inst_13531 = (state_13584[(11)]);
var inst_13542 = (state_13584[(2)]);
var inst_13543 = (inst_13532 + (1));
var tmp13597 = inst_13531;
var tmp13598 = inst_13529;
var tmp13599 = inst_13530;
var inst_13529__$1 = tmp13598;
var inst_13530__$1 = tmp13599;
var inst_13531__$1 = tmp13597;
var inst_13532__$1 = inst_13543;
var state_13584__$1 = (function (){var statearr_13602 = state_13584;
(statearr_13602[(14)] = inst_13542);

(statearr_13602[(9)] = inst_13529__$1);

(statearr_13602[(10)] = inst_13530__$1);

(statearr_13602[(11)] = inst_13531__$1);

(statearr_13602[(12)] = inst_13532__$1);

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
var inst_13516 = (state_13584[(13)]);
var inst_13526 = f.call(null,inst_13516);
var inst_13527 = cljs.core.seq.call(null,inst_13526);
var inst_13529 = inst_13527;
var inst_13530 = null;
var inst_13531 = (0);
var inst_13532 = (0);
var state_13584__$1 = (function (){var statearr_13605 = state_13584;
(statearr_13605[(9)] = inst_13529);

(statearr_13605[(10)] = inst_13530);

(statearr_13605[(11)] = inst_13531);

(statearr_13605[(12)] = inst_13532);

return statearr_13605;
})();
var statearr_13606_13644 = state_13584__$1;
(statearr_13606_13644[(2)] = null);

(statearr_13606_13644[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13585 === (17))){
var inst_13547 = (state_13584[(7)]);
var inst_13552 = cljs.core.chunk_first.call(null,inst_13547);
var inst_13553 = cljs.core.chunk_rest.call(null,inst_13547);
var inst_13554 = cljs.core.count.call(null,inst_13552);
var inst_13529 = inst_13553;
var inst_13530 = inst_13552;
var inst_13531 = inst_13554;
var inst_13532 = (0);
var state_13584__$1 = (function (){var statearr_13607 = state_13584;
(statearr_13607[(9)] = inst_13529);

(statearr_13607[(10)] = inst_13530);

(statearr_13607[(11)] = inst_13531);

(statearr_13607[(12)] = inst_13532);

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
var inst_13569 = (state_13584[(2)]);
var state_13584__$1 = state_13584;
var statearr_13609_13646 = state_13584__$1;
(statearr_13609_13646[(2)] = inst_13569);

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
var statearr_13610_13651 = state_13584__$1;
(statearr_13610_13651[(2)] = inst_13578);

(statearr_13610_13651[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13585 === (19))){
var inst_13564 = (state_13584[(2)]);
var state_13584__$1 = state_13584;
var statearr_13611_13667 = state_13584__$1;
(statearr_13611_13667[(2)] = inst_13564);

(statearr_13611_13667[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13585 === (11))){
var inst_13529 = (state_13584[(9)]);
var inst_13547 = (state_13584[(7)]);
var inst_13547__$1 = cljs.core.seq.call(null,inst_13529);
var state_13584__$1 = (function (){var statearr_13612 = state_13584;
(statearr_13612[(7)] = inst_13547__$1);

return statearr_13612;
})();
if(inst_13547__$1){
var statearr_13613_13674 = state_13584__$1;
(statearr_13613_13674[(1)] = (14));

} else {
var statearr_13614_13675 = state_13584__$1;
(statearr_13614_13675[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13585 === (9))){
var inst_13571 = (state_13584[(2)]);
var inst_13572 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_13584__$1 = (function (){var statearr_13615 = state_13584;
(statearr_13615[(15)] = inst_13571);

return statearr_13615;
})();
if(cljs.core.truth_(inst_13572)){
var statearr_13616_13677 = state_13584__$1;
(statearr_13616_13677[(1)] = (21));

} else {
var statearr_13617_13678 = state_13584__$1;
(statearr_13617_13678[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13585 === (5))){
var inst_13519 = cljs.core.async.close_BANG_.call(null,out);
var state_13584__$1 = state_13584;
var statearr_13618_13681 = state_13584__$1;
(statearr_13618_13681[(2)] = inst_13519);

(statearr_13618_13681[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13585 === (14))){
var inst_13547 = (state_13584[(7)]);
var inst_13550 = cljs.core.chunked_seq_QMARK_.call(null,inst_13547);
var state_13584__$1 = state_13584;
if(inst_13550){
var statearr_13619_13683 = state_13584__$1;
(statearr_13619_13683[(1)] = (17));

} else {
var statearr_13620_13685 = state_13584__$1;
(statearr_13620_13685[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13585 === (16))){
var inst_13567 = (state_13584[(2)]);
var state_13584__$1 = state_13584;
var statearr_13621_13687 = state_13584__$1;
(statearr_13621_13687[(2)] = inst_13567);

(statearr_13621_13687[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13585 === (10))){
var inst_13530 = (state_13584[(10)]);
var inst_13532 = (state_13584[(12)]);
var inst_13539 = cljs.core._nth.call(null,inst_13530,inst_13532);
var state_13584__$1 = state_13584;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13584__$1,(13),out,inst_13539);
} else {
if((state_val_13585 === (18))){
var inst_13547 = (state_13584[(7)]);
var inst_13558 = cljs.core.first.call(null,inst_13547);
var state_13584__$1 = state_13584;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13584__$1,(20),out,inst_13558);
} else {
if((state_val_13585 === (8))){
var inst_13532 = (state_13584[(12)]);
var inst_13531 = (state_13584[(11)]);
var inst_13534 = (inst_13532 < inst_13531);
var inst_13535 = inst_13534;
var state_13584__$1 = state_13584;
if(cljs.core.truth_(inst_13535)){
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
var statearr_13626_13697 = state_13584;
(statearr_13626_13697[(2)] = ex__11194__auto__);


if(cljs.core.seq.call(null,(state_13584[(4)]))){
var statearr_13627_13699 = state_13584;
(statearr_13627_13699[(1)] = cljs.core.first.call(null,(state_13584[(4)])));

} else {
throw ex__11194__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11192__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13702 = state_13584;
state_13584 = G__13702;
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
var G__13637 = arguments.length;
switch (G__13637) {
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
var c__11371__auto___13713 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__11372__auto__ = (function (){var switch__11190__auto__ = (function (state_13672){
var state_val_13673 = (state_13672[(1)]);
if((state_val_13673 === (7))){
var inst_13666 = (state_13672[(2)]);
var state_13672__$1 = state_13672;
var statearr_13676_13714 = state_13672__$1;
(statearr_13676_13714[(2)] = inst_13666);

(statearr_13676_13714[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13673 === (1))){
var inst_13647 = null;
var state_13672__$1 = (function (){var statearr_13679 = state_13672;
(statearr_13679[(7)] = inst_13647);

return statearr_13679;
})();
var statearr_13680_13715 = state_13672__$1;
(statearr_13680_13715[(2)] = null);

(statearr_13680_13715[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13673 === (4))){
var inst_13650 = (state_13672[(8)]);
var inst_13650__$1 = (state_13672[(2)]);
var inst_13652 = (inst_13650__$1 == null);
var inst_13653 = cljs.core.not.call(null,inst_13652);
var state_13672__$1 = (function (){var statearr_13682 = state_13672;
(statearr_13682[(8)] = inst_13650__$1);

return statearr_13682;
})();
if(inst_13653){
var statearr_13684_13716 = state_13672__$1;
(statearr_13684_13716[(1)] = (5));

} else {
var statearr_13686_13720 = state_13672__$1;
(statearr_13686_13720[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13673 === (6))){
var state_13672__$1 = state_13672;
var statearr_13688_13726 = state_13672__$1;
(statearr_13688_13726[(2)] = null);

(statearr_13688_13726[(1)] = (7));


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
var inst_13650 = (state_13672[(8)]);
var inst_13660 = (state_13672[(2)]);
var inst_13647 = inst_13650;
var state_13672__$1 = (function (){var statearr_13691 = state_13672;
(statearr_13691[(10)] = inst_13660);

(statearr_13691[(7)] = inst_13647);

return statearr_13691;
})();
var statearr_13693_13758 = state_13672__$1;
(statearr_13693_13758[(2)] = null);

(statearr_13693_13758[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13673 === (9))){
var inst_13650 = (state_13672[(8)]);
var state_13672__$1 = state_13672;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13672__$1,(11),out,inst_13650);
} else {
if((state_val_13673 === (5))){
var inst_13650 = (state_13672[(8)]);
var inst_13647 = (state_13672[(7)]);
var inst_13655 = cljs.core._EQ_.call(null,inst_13650,inst_13647);
var state_13672__$1 = state_13672;
if(inst_13655){
var statearr_13695_13760 = state_13672__$1;
(statearr_13695_13760[(1)] = (8));

} else {
var statearr_13696_13761 = state_13672__$1;
(statearr_13696_13761[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13673 === (10))){
var inst_13663 = (state_13672[(2)]);
var state_13672__$1 = state_13672;
var statearr_13698_13764 = state_13672__$1;
(statearr_13698_13764[(2)] = inst_13663);

(statearr_13698_13764[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13673 === (8))){
var inst_13647 = (state_13672[(7)]);
var tmp13694 = inst_13647;
var inst_13647__$1 = tmp13694;
var state_13672__$1 = (function (){var statearr_13700 = state_13672;
(statearr_13700[(7)] = inst_13647__$1);

return statearr_13700;
})();
var statearr_13701_13768 = state_13672__$1;
(statearr_13701_13768[(2)] = null);

(statearr_13701_13768[(1)] = (2));


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
var statearr_13703 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_13703[(0)] = cljs$core$async$state_machine__11191__auto__);

(statearr_13703[(1)] = (1));

return statearr_13703;
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
var statearr_13706_13773 = state_13672;
(statearr_13706_13773[(2)] = ex__11194__auto__);


if(cljs.core.seq.call(null,(state_13672[(4)]))){
var statearr_13707_13774 = state_13672;
(statearr_13707_13774[(1)] = cljs.core.first.call(null,(state_13672[(4)])));

} else {
throw ex__11194__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11192__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13775 = state_13672;
state_13672 = G__13775;
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
var f__11372__auto__ = (function (){var switch__11190__auto__ = (function (state_13756){
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
var inst_13717 = (new Array(n));
var inst_13718 = inst_13717;
var inst_13719 = (0);
var state_13756__$1 = (function (){var statearr_13762 = state_13756;
(statearr_13762[(7)] = inst_13718);

(statearr_13762[(8)] = inst_13719);

return statearr_13762;
})();
var statearr_13763_13797 = state_13756__$1;
(statearr_13763_13797[(2)] = null);

(statearr_13763_13797[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13757 === (4))){
var inst_13723 = (state_13756[(9)]);
var inst_13723__$1 = (state_13756[(2)]);
var inst_13724 = (inst_13723__$1 == null);
var inst_13725 = cljs.core.not.call(null,inst_13724);
var state_13756__$1 = (function (){var statearr_13765 = state_13756;
(statearr_13765[(9)] = inst_13723__$1);

return statearr_13765;
})();
if(inst_13725){
var statearr_13766_13798 = state_13756__$1;
(statearr_13766_13798[(1)] = (5));

} else {
var statearr_13767_13802 = state_13756__$1;
(statearr_13767_13802[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13757 === (15))){
var inst_13746 = (state_13756[(2)]);
var state_13756__$1 = state_13756;
var statearr_13769_13806 = state_13756__$1;
(statearr_13769_13806[(2)] = inst_13746);

(statearr_13769_13806[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13757 === (13))){
var state_13756__$1 = state_13756;
var statearr_13770_13811 = state_13756__$1;
(statearr_13770_13811[(2)] = null);

(statearr_13770_13811[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13757 === (6))){
var inst_13719 = (state_13756[(8)]);
var inst_13742 = (inst_13719 > (0));
var state_13756__$1 = state_13756;
if(cljs.core.truth_(inst_13742)){
var statearr_13771_13825 = state_13756__$1;
(statearr_13771_13825[(1)] = (12));

} else {
var statearr_13772_13827 = state_13756__$1;
(statearr_13772_13827[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13757 === (3))){
var inst_13754 = (state_13756[(2)]);
var state_13756__$1 = state_13756;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13756__$1,inst_13754);
} else {
if((state_val_13757 === (12))){
var inst_13718 = (state_13756[(7)]);
var inst_13744 = cljs.core.vec.call(null,inst_13718);
var state_13756__$1 = state_13756;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13756__$1,(15),out,inst_13744);
} else {
if((state_val_13757 === (2))){
var state_13756__$1 = state_13756;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13756__$1,(4),ch);
} else {
if((state_val_13757 === (11))){
var inst_13736 = (state_13756[(2)]);
var inst_13737 = (new Array(n));
var inst_13718 = inst_13737;
var inst_13719 = (0);
var state_13756__$1 = (function (){var statearr_13776 = state_13756;
(statearr_13776[(10)] = inst_13736);

(statearr_13776[(7)] = inst_13718);

(statearr_13776[(8)] = inst_13719);

return statearr_13776;
})();
var statearr_13777_13850 = state_13756__$1;
(statearr_13777_13850[(2)] = null);

(statearr_13777_13850[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13757 === (9))){
var inst_13718 = (state_13756[(7)]);
var inst_13734 = cljs.core.vec.call(null,inst_13718);
var state_13756__$1 = state_13756;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13756__$1,(11),out,inst_13734);
} else {
if((state_val_13757 === (5))){
var inst_13718 = (state_13756[(7)]);
var inst_13719 = (state_13756[(8)]);
var inst_13723 = (state_13756[(9)]);
var inst_13729 = (state_13756[(11)]);
var inst_13728 = (inst_13718[inst_13719] = inst_13723);
var inst_13729__$1 = (inst_13719 + (1));
var inst_13730 = (inst_13729__$1 < n);
var state_13756__$1 = (function (){var statearr_13778 = state_13756;
(statearr_13778[(12)] = inst_13728);

(statearr_13778[(11)] = inst_13729__$1);

return statearr_13778;
})();
if(cljs.core.truth_(inst_13730)){
var statearr_13779_13854 = state_13756__$1;
(statearr_13779_13854[(1)] = (8));

} else {
var statearr_13780_13855 = state_13756__$1;
(statearr_13780_13855[(1)] = (9));

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
var statearr_13783_13857 = state_13756__$1;
(statearr_13783_13857[(2)] = inst_13750);

(statearr_13783_13857[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13757 === (10))){
var inst_13740 = (state_13756[(2)]);
var state_13756__$1 = state_13756;
var statearr_13784_13860 = state_13756__$1;
(statearr_13784_13860[(2)] = inst_13740);

(statearr_13784_13860[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13757 === (8))){
var inst_13718 = (state_13756[(7)]);
var inst_13729 = (state_13756[(11)]);
var tmp13781 = inst_13718;
var inst_13718__$1 = tmp13781;
var inst_13719 = inst_13729;
var state_13756__$1 = (function (){var statearr_13785 = state_13756;
(statearr_13785[(7)] = inst_13718__$1);

(statearr_13785[(8)] = inst_13719);

return statearr_13785;
})();
var statearr_13786_13861 = state_13756__$1;
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
var statearr_13789_13865 = state_13756;
(statearr_13789_13865[(2)] = ex__11194__auto__);


if(cljs.core.seq.call(null,(state_13756[(4)]))){
var statearr_13790_13866 = state_13756;
(statearr_13790_13866[(1)] = cljs.core.first.call(null,(state_13756[(4)])));

} else {
throw ex__11194__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11192__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13869 = state_13756;
state_13756 = G__13869;
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
var inst_13799 = [];
var inst_13800 = inst_13799;
var inst_13801 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_13848__$1 = (function (){var statearr_13852 = state_13848;
(statearr_13852[(7)] = inst_13800);

(statearr_13852[(8)] = inst_13801);

return statearr_13852;
})();
var statearr_13853_13892 = state_13848__$1;
(statearr_13853_13892[(2)] = null);

(statearr_13853_13892[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13849 === (4))){
var inst_13805 = (state_13848[(9)]);
var inst_13805__$1 = (state_13848[(2)]);
var inst_13807 = (inst_13805__$1 == null);
var inst_13808 = cljs.core.not.call(null,inst_13807);
var state_13848__$1 = (function (){var statearr_13856 = state_13848;
(statearr_13856[(9)] = inst_13805__$1);

return statearr_13856;
})();
if(inst_13808){
var statearr_13858_13893 = state_13848__$1;
(statearr_13858_13893[(1)] = (5));

} else {
var statearr_13859_13894 = state_13848__$1;
(statearr_13859_13894[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13849 === (15))){
var inst_13800 = (state_13848[(7)]);
var inst_13836 = cljs.core.vec.call(null,inst_13800);
var state_13848__$1 = state_13848;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13848__$1,(18),out,inst_13836);
} else {
if((state_val_13849 === (13))){
var inst_13831 = (state_13848[(2)]);
var state_13848__$1 = state_13848;
var statearr_13862_13895 = state_13848__$1;
(statearr_13862_13895[(2)] = inst_13831);

(statearr_13862_13895[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13849 === (6))){
var inst_13800 = (state_13848[(7)]);
var inst_13833 = inst_13800.length;
var inst_13834 = (inst_13833 > (0));
var state_13848__$1 = state_13848;
if(cljs.core.truth_(inst_13834)){
var statearr_13863_13896 = state_13848__$1;
(statearr_13863_13896[(1)] = (15));

} else {
var statearr_13864_13897 = state_13848__$1;
(statearr_13864_13897[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13849 === (17))){
var inst_13841 = (state_13848[(2)]);
var inst_13842 = cljs.core.async.close_BANG_.call(null,out);
var state_13848__$1 = (function (){var statearr_13867 = state_13848;
(statearr_13867[(10)] = inst_13841);

return statearr_13867;
})();
var statearr_13868_13898 = state_13848__$1;
(statearr_13868_13898[(2)] = inst_13842);

(statearr_13868_13898[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13849 === (3))){
var inst_13846 = (state_13848[(2)]);
var state_13848__$1 = state_13848;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13848__$1,inst_13846);
} else {
if((state_val_13849 === (12))){
var inst_13800 = (state_13848[(7)]);
var inst_13822 = cljs.core.vec.call(null,inst_13800);
var state_13848__$1 = state_13848;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13848__$1,(14),out,inst_13822);
} else {
if((state_val_13849 === (2))){
var state_13848__$1 = state_13848;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13848__$1,(4),ch);
} else {
if((state_val_13849 === (11))){
var inst_13800 = (state_13848[(7)]);
var inst_13805 = (state_13848[(9)]);
var inst_13810 = (state_13848[(11)]);
var inst_13819 = inst_13800.push(inst_13805);
var tmp13870 = inst_13800;
var inst_13800__$1 = tmp13870;
var inst_13801 = inst_13810;
var state_13848__$1 = (function (){var statearr_13871 = state_13848;
(statearr_13871[(12)] = inst_13819);

(statearr_13871[(7)] = inst_13800__$1);

(statearr_13871[(8)] = inst_13801);

return statearr_13871;
})();
var statearr_13872_13899 = state_13848__$1;
(statearr_13872_13899[(2)] = null);

(statearr_13872_13899[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13849 === (9))){
var inst_13801 = (state_13848[(8)]);
var inst_13815 = cljs.core.keyword_identical_QMARK_.call(null,inst_13801,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_13848__$1 = state_13848;
var statearr_13873_13900 = state_13848__$1;
(statearr_13873_13900[(2)] = inst_13815);

(statearr_13873_13900[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13849 === (5))){
var inst_13805 = (state_13848[(9)]);
var inst_13810 = (state_13848[(11)]);
var inst_13801 = (state_13848[(8)]);
var inst_13812 = (state_13848[(13)]);
var inst_13810__$1 = f.call(null,inst_13805);
var inst_13812__$1 = cljs.core._EQ_.call(null,inst_13810__$1,inst_13801);
var state_13848__$1 = (function (){var statearr_13874 = state_13848;
(statearr_13874[(11)] = inst_13810__$1);

(statearr_13874[(13)] = inst_13812__$1);

return statearr_13874;
})();
if(inst_13812__$1){
var statearr_13875_13901 = state_13848__$1;
(statearr_13875_13901[(1)] = (8));

} else {
var statearr_13876_13902 = state_13848__$1;
(statearr_13876_13902[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13849 === (14))){
var inst_13805 = (state_13848[(9)]);
var inst_13810 = (state_13848[(11)]);
var inst_13824 = (state_13848[(2)]);
var inst_13826 = [];
var inst_13828 = inst_13826.push(inst_13805);
var inst_13800 = inst_13826;
var inst_13801 = inst_13810;
var state_13848__$1 = (function (){var statearr_13877 = state_13848;
(statearr_13877[(14)] = inst_13824);

(statearr_13877[(15)] = inst_13828);

(statearr_13877[(7)] = inst_13800);

(statearr_13877[(8)] = inst_13801);

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
var inst_13812 = (state_13848[(13)]);
var state_13848__$1 = state_13848;
var statearr_13883_13908 = state_13848__$1;
(statearr_13883_13908[(2)] = inst_13812);

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
