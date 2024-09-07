// Compiled by ClojureScript 1.11.132 {:optimizations :none}
goog.provide('taoensso.timbre.appenders.core');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('taoensso.encore');
/**
 * Returns a simple `println` appender for Clojure/Script.
 *   Use with ClojureScript requires that `cljs.core/*print-fn*` be set.
 * 
 *   :stream (clj only) - e/o #{:auto :*out* :*err* :std-err :std-out <io-stream>}.
 */
taoensso.timbre.appenders.core.println_appender = (function taoensso$timbre$appenders$core$println_appender(var_args){
var args__5732__auto__ = [];
var len__5726__auto___15415 = arguments.length;
var i__5727__auto___15416 = (0);
while(true){
if((i__5727__auto___15416 < len__5726__auto___15415)){
args__5732__auto__.push((arguments[i__5727__auto___15416]));

var G__15417 = (i__5727__auto___15416 + (1));
i__5727__auto___15416 = G__15417;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return taoensso.timbre.appenders.core.println_appender.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(taoensso.timbre.appenders.core.println_appender.cljs$core$IFn$_invoke$arity$variadic = (function (p__15410){
var vec__15411 = p__15410;
var _opts = cljs.core.nth.call(null,vec__15411,(0),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"enabled?","enabled?",-1376075057),true,new cljs.core.Keyword(null,"fn","fn",-1175266204),(function (data){
var map__15414 = data;
var map__15414__$1 = cljs.core.__destructure_map.call(null,map__15414);
var output_ = cljs.core.get.call(null,map__15414__$1,new cljs.core.Keyword(null,"output_","output_",-36797880));
return cljs.core.println.call(null,cljs.core.force.call(null,output_));
})], null);
}));

(taoensso.timbre.appenders.core.println_appender.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(taoensso.timbre.appenders.core.println_appender.cljs$lang$applyTo = (function (seq15409){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq15409));
}));

/**
 * Returns a simple js/console appender for ClojureScript.
 * 
 *   Raw logging
 * 
 *     There's 2 ways that Timbre can log to a web browser console:
 *       1. As a prepared output string (default)
 *       2. As a list of raw argument objects
 * 
 *     The benefit of #2 is that it allows the browser to offer type-specific
 *     object printing and inspection (e.g. for maps, etc.).
 * 
 *     Raw logging can be enabled or disabled as follows:
 * 
 *       1. On a per-call basis via a special 1st argument to your logging call:
 *            (info ^:meta {:raw-console? true} arg1 ...)
 * 
 *       2. Via middleware, by adding an option to your log data:
 *            (fn my-middleware [data] (assoc data :raw-console? true))
 * 
 *       3. Via an option provided to this appender constructor:
 *            (console-appender {:raw-console? <bool>})
 * 
 *   Ignoring library / "blackbox" code for accurate line numbers, etc.
 * 
 *     Most web browsers offer a feature to ignore library or "blackbox" code
 *     in their debugger.
 * 
 *     You'll probably want to ignore at least the following:
 *       `/taoensso/timbre/appenders/core\.js$` ; Timbre console appender
 *       `/taoensso/timbre\.js$`                ; Timbre core
 *       `/cljs/core\.js$`                      ; ClojureScript core
 * 
 *     Depending on the browser, you can usually set up these exclusions through
 *     right-click popups and/or through a configurable list in a settings menu.
 * 
 *     For example:
 *       https://developer.chrome.com/docs/devtools/settings/ignore-list/
 *       https://webkit.org/web-inspector/web-inspector-settings/
 *       https://firefox-source-docs.mozilla.org/devtools-user/debugger/how_to/ignoring_sources/index.html
 *       etc.
 */
taoensso.timbre.appenders.core.console_appender = (function taoensso$timbre$appenders$core$console_appender(var_args){
var args__5732__auto__ = [];
var len__5726__auto___15425 = arguments.length;
var i__5727__auto___15426 = (0);
while(true){
if((i__5727__auto___15426 < len__5726__auto___15425)){
args__5732__auto__.push((arguments[i__5727__auto___15426]));

var G__15427 = (i__5727__auto___15426 + (1));
i__5727__auto___15426 = G__15427;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return taoensso.timbre.appenders.core.console_appender.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(taoensso.timbre.appenders.core.console_appender.cljs$core$IFn$_invoke$arity$variadic = (function (p__15419){
var vec__15420 = p__15419;
var map__15423 = cljs.core.nth.call(null,vec__15420,(0),null);
var map__15423__$1 = cljs.core.__destructure_map.call(null,map__15423);
var raw_console_QMARK_ = cljs.core.get.call(null,map__15423__$1,new cljs.core.Keyword(null,"raw-console?","raw-console?",-2061489061));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"enabled?","enabled?",-1376075057),true,new cljs.core.Keyword(null,"fn","fn",-1175266204),(((!((typeof console !== 'undefined'))))?(function (data){
return null;
}):(function (){var level__GT_logger = (function (level){
var or__5002__auto__ = (function (){var G__15424 = level;
var G__15424__$1 = (((G__15424 instanceof cljs.core.Keyword))?G__15424.fqn:null);
switch (G__15424__$1) {
case "trace":
return console.trace;

break;
case "debug":
return console.debug;

break;
case "info":
return console.info;

break;
case "warn":
return console.warn;

break;
case "error":
return console.error;

break;
case "fatal":
return console.error;

break;
case "report":
return console.info;

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__15424__$1)].join('')));

}
})();
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return console.log;
}
});
return (function (data){
var temp__5804__auto__ = level__GT_logger.call(null,new cljs.core.Keyword(null,"level","level",1290497552).cljs$core$IFn$_invoke$arity$1(data));
if(cljs.core.truth_(temp__5804__auto__)){
var logger = temp__5804__auto__;
var temp__5802__auto__ = (function (){var _QMARK_meta = cljs.core.get.call(null,data,new cljs.core.Keyword(null,"?meta","?meta",-793560773));
if(cljs.core.contains_QMARK_.call(null,_QMARK_meta,new cljs.core.Keyword(null,"raw-console?","raw-console?",-2061489061))){
return cljs.core.get.call(null,_QMARK_meta,new cljs.core.Keyword(null,"raw-console?","raw-console?",-2061489061));
} else {
if(cljs.core.contains_QMARK_.call(null,data,new cljs.core.Keyword(null,"raw-console?","raw-console?",-2061489061))){
return cljs.core.get.call(null,data,new cljs.core.Keyword(null,"raw-console?","raw-console?",-2061489061));
} else {
return raw_console_QMARK_;
}
}
})();
if(cljs.core.truth_(temp__5802__auto__)){
var raw_console_QMARK___$1 = temp__5802__auto__;
var output = new cljs.core.Keyword(null,"output-fn","output-fn",1600951539).cljs$core$IFn$_invoke$arity$1(data).call(null,cljs.core.assoc.call(null,data,new cljs.core.Keyword(null,"msg-type","msg-type",-2132567822),null,new cljs.core.Keyword(null,"?err","?err",549653299),null));
var args = (function (){var vargs = new cljs.core.Keyword(null,"vargs","vargs",-966597273).cljs$core$IFn$_invoke$arity$1(data);
var temp__5802__auto____$1 = new cljs.core.Keyword(null,"?err","?err",549653299).cljs$core$IFn$_invoke$arity$1(data);
if(cljs.core.truth_(temp__5802__auto____$1)){
var err = temp__5802__auto____$1;
return cljs.core.cons.call(null,output,cljs.core.cons.call(null,err,vargs));
} else {
return cljs.core.cons.call(null,output,vargs);
}
})();
return logger.apply(console,cljs.core.into_array.call(null,args));
} else {
return logger.call(console,cljs.core.force.call(null,new cljs.core.Keyword(null,"output_","output_",-36797880).cljs$core$IFn$_invoke$arity$1(data)));
}
} else {
return null;
}
});
})())], null);
}));

(taoensso.timbre.appenders.core.console_appender.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(taoensso.timbre.appenders.core.console_appender.cljs$lang$applyTo = (function (seq15418){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq15418));
}));

taoensso.timbre.appenders.core.console__QMARK_appender = taoensso.timbre.appenders.core.console_appender;

//# sourceMappingURL=core.js.map
