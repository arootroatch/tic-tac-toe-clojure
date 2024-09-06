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
var G__6686__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__6686 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__6687__i = 0, G__6687__a = new Array(arguments.length -  0);
while (G__6687__i < G__6687__a.length) {G__6687__a[G__6687__i] = arguments[G__6687__i + 0]; ++G__6687__i;}
  args = new cljs.core.IndexedSeq(G__6687__a,0,null);
} 
return G__6686__delegate.call(this,args);};
G__6686.cljs$lang$maxFixedArity = 0;
G__6686.cljs$lang$applyTo = (function (arglist__6689){
var args = cljs.core.seq(arglist__6689);
return G__6686__delegate(args);
});
G__6686.cljs$core$IFn$_invoke$arity$variadic = G__6686__delegate;
return G__6686;
})()
);

(o.error = (function() { 
var G__6690__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__6690 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__6691__i = 0, G__6691__a = new Array(arguments.length -  0);
while (G__6691__i < G__6691__a.length) {G__6691__a[G__6691__i] = arguments[G__6691__i + 0]; ++G__6691__i;}
  args = new cljs.core.IndexedSeq(G__6691__a,0,null);
} 
return G__6690__delegate.call(this,args);};
G__6690.cljs$lang$maxFixedArity = 0;
G__6690.cljs$lang$applyTo = (function (arglist__6692){
var args = cljs.core.seq(arglist__6692);
return G__6690__delegate(args);
});
G__6690.cljs$core$IFn$_invoke$arity$variadic = G__6690__delegate;
return G__6690;
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
