// Compiled by ClojureScript 1.11.132 {:optimizations :none}
goog.provide('reagent.debug');
goog.require('cljs.core');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.call(null,null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
(o.warn = (function() { 
var G__8512__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__8512 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__8514__i = 0, G__8514__a = new Array(arguments.length -  0);
while (G__8514__i < G__8514__a.length) {G__8514__a[G__8514__i] = arguments[G__8514__i + 0]; ++G__8514__i;}
  args = new cljs.core.IndexedSeq(G__8514__a,0,null);
} 
return G__8512__delegate.call(this,args);};
G__8512.cljs$lang$maxFixedArity = 0;
G__8512.cljs$lang$applyTo = (function (arglist__8515){
var args = cljs.core.seq(arglist__8515);
return G__8512__delegate(args);
});
G__8512.cljs$core$IFn$_invoke$arity$variadic = G__8512__delegate;
return G__8512;
})()
);

(o.error = (function() { 
var G__8516__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__8516 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__8517__i = 0, G__8517__a = new Array(arguments.length -  0);
while (G__8517__i < G__8517__a.length) {G__8517__a[G__8517__i] = arguments[G__8517__i + 0]; ++G__8517__i;}
  args = new cljs.core.IndexedSeq(G__8517__a,0,null);
} 
return G__8516__delegate.call(this,args);};
G__8516.cljs$lang$maxFixedArity = 0;
G__8516.cljs$lang$applyTo = (function (arglist__8518){
var args = cljs.core.seq(arglist__8518);
return G__8516__delegate(args);
});
G__8516.cljs$core$IFn$_invoke$arity$variadic = G__8516__delegate;
return G__8516;
})()
);

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
(reagent.debug.tracking = true);

cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

f.call(null);

var warns = cljs.core.deref.call(null,reagent.debug.warnings);
cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

(reagent.debug.tracking = false);

return warns;
});

//# sourceMappingURL=debug.js.map
