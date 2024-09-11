// Compiled by ClojureScript 1.11.132 {:optimizations :none}
goog.provide('tic_tac_toe.screens.mode_selection');
goog.require('cljs.core');
goog.require('tic_tac_toe.print_utils');
goog.require('tic_tac_toe.render_screen');
goog.require('tic_tac_toe.screens.selection_button');
tic_tac_toe.screens.mode_selection.on_click = (function tic_tac_toe$screens$mode_selection$on_click(state,n){
return cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"current-screen","current-screen",-1454713691),new cljs.core.Keyword(null,"board-selection","board-selection",276837898),new cljs.core.Keyword(null,"mode","mode",654403691),n,new cljs.core.Keyword(null,"human?","human?",-2017219054),((((cljs.core._EQ_.call(null,(4),n)) || (cljs.core._EQ_.call(null,(3),n))))?false:true));
});
cljs.core._add_method.call(null,tic_tac_toe.render_screen.render_screen,new cljs.core.Keyword(null,"mode-selection","mode-selection",986239762),(function (state){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#mode-selection.screen","div#mode-selection.screen",-1528330006),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),cljs.core.first.call(null,tic_tac_toe.print_utils.mode_prompt)], null),(function (){var iter__5480__auto__ = (function tic_tac_toe$screens$mode_selection$iter__17499(s__17500){
return (new cljs.core.LazySeq(null,(function (){
var s__17500__$1 = s__17500;
while(true){
var temp__5804__auto__ = cljs.core.seq.call(null,s__17500__$1);
if(temp__5804__auto__){
var s__17500__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__17500__$2)){
var c__5478__auto__ = cljs.core.chunk_first.call(null,s__17500__$2);
var size__5479__auto__ = cljs.core.count.call(null,c__5478__auto__);
var b__17502 = cljs.core.chunk_buffer.call(null,size__5479__auto__);
if((function (){var i__17501 = (0);
while(true){
if((i__17501 < size__5479__auto__)){
var n = cljs.core._nth.call(null,c__5478__auto__,i__17501);
cljs.core.chunk_append.call(null,b__17502,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [tic_tac_toe.screens.selection_button.selection_button,cljs.core.nth.call(null,tic_tac_toe.print_utils.mode_prompt,n),cljs.core.partial.call(null,tic_tac_toe.screens.mode_selection.on_click,state,n)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),n], null)));

var G__17517 = (i__17501 + (1));
i__17501 = G__17517;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17502),tic_tac_toe$screens$mode_selection$iter__17499.call(null,cljs.core.chunk_rest.call(null,s__17500__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17502),null);
}
} else {
var n = cljs.core.first.call(null,s__17500__$2);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [tic_tac_toe.screens.selection_button.selection_button,cljs.core.nth.call(null,tic_tac_toe.print_utils.mode_prompt,n),cljs.core.partial.call(null,tic_tac_toe.screens.mode_selection.on_click,state,n)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),n], null)),tic_tac_toe$screens$mode_selection$iter__17499.call(null,cljs.core.rest.call(null,s__17500__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(3),(4)], null));
})()], null);
}));

//# sourceMappingURL=mode_selection.js.map
