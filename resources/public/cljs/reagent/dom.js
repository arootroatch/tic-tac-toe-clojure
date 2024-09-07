// Compiled by ClojureScript 1.11.132 {:optimizations :none}
goog.provide('reagent.dom');
goog.require('cljs.core');
goog.require('react_dom');
goog.require('reagent.impl.util');
goog.require('reagent.impl.template');
goog.require('reagent.impl.batching');
goog.require('reagent.impl.protocols');
goog.require('reagent.ratom');
reagent.dom.global$module$react_dom = goog.global["ReactDOM"];
if((typeof reagent !== 'undefined') && (typeof reagent.dom !== 'undefined') && (typeof reagent.dom.roots !== 'undefined')){
} else {
reagent.dom.roots = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
reagent.dom.unmount_comp = (function reagent$dom$unmount_comp(container){
cljs.core.swap_BANG_.call(null,reagent.dom.roots,cljs.core.dissoc,container);

return reagent.dom.global$module$react_dom.unmountComponentAtNode(container);
});
reagent.dom.render_comp = (function reagent$dom$render_comp(comp,container,callback){
var _STAR_always_update_STAR__orig_val__16962 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__16963 = true;
(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__16963);

try{return reagent.dom.global$module$react_dom.render(comp.call(null),container,(function (){
var _STAR_always_update_STAR__orig_val__16965 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__16966 = false;
(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__16966);

try{cljs.core.swap_BANG_.call(null,reagent.dom.roots,cljs.core.assoc,container,comp);

reagent.impl.batching.flush_after_render.call(null);

if((!((callback == null)))){
return callback.call(null);
} else {
return null;
}
}finally {(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__16965);
}}));
}finally {(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__16962);
}});
reagent.dom.re_render_component = (function reagent$dom$re_render_component(comp,container){
return reagent.dom.render_comp.call(null,comp,container,null);
});
/**
 * Render a Reagent component into the DOM. The first argument may be
 *   either a vector (using Reagent's Hiccup syntax), or a React element.
 *   The second argument should be a DOM node.
 * 
 *   Optionally takes a callback that is called when the component is in place.
 * 
 *   Returns the mounted component instance.
 */
reagent.dom.render = (function reagent$dom$render(var_args){
var G__16968 = arguments.length;
switch (G__16968) {
case 2:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(reagent.dom.render.cljs$core$IFn$_invoke$arity$2 = (function (comp,container){
return reagent.dom.render.call(null,comp,container,reagent.impl.template._STAR_current_default_compiler_STAR_);
}));

(reagent.dom.render.cljs$core$IFn$_invoke$arity$3 = (function (comp,container,callback_or_compiler){
reagent.ratom.flush_BANG_.call(null);

var vec__16969 = ((cljs.core.map_QMARK_.call(null,callback_or_compiler))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compiler","compiler",-267926731).cljs$core$IFn$_invoke$arity$1(callback_or_compiler),new cljs.core.Keyword(null,"callback","callback",-705136228).cljs$core$IFn$_invoke$arity$1(callback_or_compiler)], null):((cljs.core.fn_QMARK_.call(null,callback_or_compiler))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.impl.template._STAR_current_default_compiler_STAR_,callback_or_compiler], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [callback_or_compiler,null], null)
));
var compiler = cljs.core.nth.call(null,vec__16969,(0),null);
var callback = cljs.core.nth.call(null,vec__16969,(1),null);
var f = (function (){
return reagent.impl.protocols.as_element.call(null,compiler,((cljs.core.fn_QMARK_.call(null,comp))?comp.call(null):comp));
});
return reagent.dom.render_comp.call(null,f,container,callback);
}));

(reagent.dom.render.cljs$lang$maxFixedArity = 3);

/**
 * Remove a component from the given DOM node.
 */
reagent.dom.unmount_component_at_node = (function reagent$dom$unmount_component_at_node(container){
return reagent.dom.unmount_comp.call(null,container);
});
/**
 * Returns the root DOM node of a mounted component.
 */
reagent.dom.dom_node = (function reagent$dom$dom_node(this$){
return reagent.dom.global$module$react_dom.findDOMNode(this$);
});
/**
 * Force re-rendering of all mounted Reagent components. This is
 *   probably only useful in a development environment, when you want to
 *   update components in response to some dynamic changes to code.
 * 
 *   Note that force-update-all may not update root components. This
 *   happens if a component 'foo' is mounted with `(render [foo])` (since
 *   functions are passed by value, and not by reference, in
 *   ClojureScript). To get around this you'll have to introduce a layer
 *   of indirection, for example by using `(render [#'foo])` instead.
 */
reagent.dom.force_update_all = (function reagent$dom$force_update_all(){
reagent.ratom.flush_BANG_.call(null);

var seq__16979_16998 = cljs.core.seq.call(null,cljs.core.deref.call(null,reagent.dom.roots));
var chunk__16980_16999 = null;
var count__16981_17000 = (0);
var i__16982_17001 = (0);
while(true){
if((i__16982_17001 < count__16981_17000)){
var vec__16989_17002 = cljs.core._nth.call(null,chunk__16980_16999,i__16982_17001);
var container_17003 = cljs.core.nth.call(null,vec__16989_17002,(0),null);
var comp_17004 = cljs.core.nth.call(null,vec__16989_17002,(1),null);
reagent.dom.re_render_component.call(null,comp_17004,container_17003);


var G__17005 = seq__16979_16998;
var G__17006 = chunk__16980_16999;
var G__17007 = count__16981_17000;
var G__17008 = (i__16982_17001 + (1));
seq__16979_16998 = G__17005;
chunk__16980_16999 = G__17006;
count__16981_17000 = G__17007;
i__16982_17001 = G__17008;
continue;
} else {
var temp__5804__auto___17009 = cljs.core.seq.call(null,seq__16979_16998);
if(temp__5804__auto___17009){
var seq__16979_17010__$1 = temp__5804__auto___17009;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16979_17010__$1)){
var c__5525__auto___17011 = cljs.core.chunk_first.call(null,seq__16979_17010__$1);
var G__17012 = cljs.core.chunk_rest.call(null,seq__16979_17010__$1);
var G__17013 = c__5525__auto___17011;
var G__17014 = cljs.core.count.call(null,c__5525__auto___17011);
var G__17015 = (0);
seq__16979_16998 = G__17012;
chunk__16980_16999 = G__17013;
count__16981_17000 = G__17014;
i__16982_17001 = G__17015;
continue;
} else {
var vec__16995_17016 = cljs.core.first.call(null,seq__16979_17010__$1);
var container_17017 = cljs.core.nth.call(null,vec__16995_17016,(0),null);
var comp_17018 = cljs.core.nth.call(null,vec__16995_17016,(1),null);
reagent.dom.re_render_component.call(null,comp_17018,container_17017);


var G__17019 = cljs.core.next.call(null,seq__16979_17010__$1);
var G__17020 = null;
var G__17021 = (0);
var G__17022 = (0);
seq__16979_16998 = G__17019;
chunk__16980_16999 = G__17020;
count__16981_17000 = G__17021;
i__16982_17001 = G__17022;
continue;
}
} else {
}
}
break;
}

return reagent.impl.batching.flush_after_render.call(null);
});

//# sourceMappingURL=dom.js.map
