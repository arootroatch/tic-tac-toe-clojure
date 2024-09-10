// Compiled by ClojureScript 1.11.132 {:optimizations :none}
goog.provide('tic_tac_toe.screens.board_selection');
goog.require('cljs.core');
goog.require('tic_tac_toe.print_utils');
goog.require('tic_tac_toe.render_screen');
goog.require('tic_tac_toe.board_options');
tic_tac_toe.screens.board_selection.on_click = (function tic_tac_toe$screens$board_selection$on_click(state,n){
cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"current-screen","current-screen",-1454713691),((cljs.core._EQ_.call(null,(1),new cljs.core.Keyword(null,"mode","mode",654403691).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state))))?new cljs.core.Keyword(null,"play","play",-580418022):new cljs.core.Keyword(null,"first-level-selection","first-level-selection",-675329011)));

return cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"board","board",-1907017633),(function (){var G__17112 = n;
switch (G__17112) {
case (1):
return tic_tac_toe.board_options.initial_3x3_board;

break;
case (2):
return tic_tac_toe.board_options.initial_4x4_board;

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__17112)].join('')));

}
})());
});
tic_tac_toe.screens.board_selection.preview_square = (function tic_tac_toe$screens$board_selection$preview_square(size){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),["preview-square-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(size)].join('')], null)], null);
});
tic_tac_toe.screens.board_selection.three_by_three_preview = (function tic_tac_toe$screens$board_selection$three_by_three_preview(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.three-grid","span.three-grid",1506129929),(function (){var iter__5480__auto__ = (function tic_tac_toe$screens$board_selection$three_by_three_preview_$_iter__17114(s__17115){
return (new cljs.core.LazySeq(null,(function (){
var s__17115__$1 = s__17115;
while(true){
var temp__5804__auto__ = cljs.core.seq.call(null,s__17115__$1);
if(temp__5804__auto__){
var s__17115__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__17115__$2)){
var c__5478__auto__ = cljs.core.chunk_first.call(null,s__17115__$2);
var size__5479__auto__ = cljs.core.count.call(null,c__5478__auto__);
var b__17117 = cljs.core.chunk_buffer.call(null,size__5479__auto__);
if((function (){var i__17116 = (0);
while(true){
if((i__17116 < size__5479__auto__)){
var n = cljs.core._nth.call(null,c__5478__auto__,i__17116);
cljs.core.chunk_append.call(null,b__17117,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tic_tac_toe.screens.board_selection.preview_square,(27)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),n], null)));

var G__17122 = (i__17116 + (1));
i__17116 = G__17122;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17117),tic_tac_toe$screens$board_selection$three_by_three_preview_$_iter__17114.call(null,cljs.core.chunk_rest.call(null,s__17115__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17117),null);
}
} else {
var n = cljs.core.first.call(null,s__17115__$2);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tic_tac_toe.screens.board_selection.preview_square,(27)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),n], null)),tic_tac_toe$screens$board_selection$three_by_three_preview_$_iter__17114.call(null,cljs.core.rest.call(null,s__17115__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__.call(null,cljs.core.range.call(null,(9)));
})()], null);
});
tic_tac_toe.screens.board_selection.four_by_four_preview = (function tic_tac_toe$screens$board_selection$four_by_four_preview(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.four-grid","span.four-grid",1101704459),(function (){var iter__5480__auto__ = (function tic_tac_toe$screens$board_selection$four_by_four_preview_$_iter__17118(s__17119){
return (new cljs.core.LazySeq(null,(function (){
var s__17119__$1 = s__17119;
while(true){
var temp__5804__auto__ = cljs.core.seq.call(null,s__17119__$1);
if(temp__5804__auto__){
var s__17119__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__17119__$2)){
var c__5478__auto__ = cljs.core.chunk_first.call(null,s__17119__$2);
var size__5479__auto__ = cljs.core.count.call(null,c__5478__auto__);
var b__17121 = cljs.core.chunk_buffer.call(null,size__5479__auto__);
if((function (){var i__17120 = (0);
while(true){
if((i__17120 < size__5479__auto__)){
var n = cljs.core._nth.call(null,c__5478__auto__,i__17120);
cljs.core.chunk_append.call(null,b__17121,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tic_tac_toe.screens.board_selection.preview_square,(20)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),n], null)));

var G__17124 = (i__17120 + (1));
i__17120 = G__17124;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17121),tic_tac_toe$screens$board_selection$four_by_four_preview_$_iter__17118.call(null,cljs.core.chunk_rest.call(null,s__17119__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17121),null);
}
} else {
var n = cljs.core.first.call(null,s__17119__$2);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tic_tac_toe.screens.board_selection.preview_square,(20)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),n], null)),tic_tac_toe$screens$board_selection$four_by_four_preview_$_iter__17118.call(null,cljs.core.rest.call(null,s__17119__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__.call(null,cljs.core.range.call(null,(16)));
})()], null);
});
tic_tac_toe.screens.board_selection.board_preview = (function tic_tac_toe$screens$board_selection$board_preview(n){
var G__17123 = n;
switch (G__17123) {
case (1):
return tic_tac_toe.screens.board_selection.three_by_three_preview.call(null);

break;
case (2):
return tic_tac_toe.screens.board_selection.four_by_four_preview.call(null);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__17123)].join('')));

}
});
tic_tac_toe.screens.board_selection.select_board_btn = (function tic_tac_toe$screens$board_selection$select_board_btn(state,n){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.select-board-btn","button.select-board-btn",1742922576),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),cljs.core.partial.call(null,tic_tac_toe.screens.board_selection.on_click,state,n)], null),tic_tac_toe.screens.board_selection.board_preview.call(null,n),cljs.core.nth.call(null,tic_tac_toe.print_utils.board_prompt,n)], null);
});
cljs.core._add_method.call(null,tic_tac_toe.render_screen.render_screen,new cljs.core.Keyword(null,"board-selection","board-selection",276837898),(function (state){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#board-selection.screen","div#board-selection.screen",422032848),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),cljs.core.first.call(null,tic_tac_toe.print_utils.board_prompt)], null),(function (){var iter__5480__auto__ = (function tic_tac_toe$screens$board_selection$iter__17125(s__17126){
return (new cljs.core.LazySeq(null,(function (){
var s__17126__$1 = s__17126;
while(true){
var temp__5804__auto__ = cljs.core.seq.call(null,s__17126__$1);
if(temp__5804__auto__){
var s__17126__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__17126__$2)){
var c__5478__auto__ = cljs.core.chunk_first.call(null,s__17126__$2);
var size__5479__auto__ = cljs.core.count.call(null,c__5478__auto__);
var b__17128 = cljs.core.chunk_buffer.call(null,size__5479__auto__);
if((function (){var i__17127 = (0);
while(true){
if((i__17127 < size__5479__auto__)){
var n = cljs.core._nth.call(null,c__5478__auto__,i__17127);
cljs.core.chunk_append.call(null,b__17128,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [tic_tac_toe.screens.board_selection.select_board_btn,state,n], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),n], null)));

var G__17130 = (i__17127 + (1));
i__17127 = G__17130;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17128),tic_tac_toe$screens$board_selection$iter__17125.call(null,cljs.core.chunk_rest.call(null,s__17126__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17128),null);
}
} else {
var n = cljs.core.first.call(null,s__17126__$2);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [tic_tac_toe.screens.board_selection.select_board_btn,state,n], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),n], null)),tic_tac_toe$screens$board_selection$iter__17125.call(null,cljs.core.rest.call(null,s__17126__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null));
})()], null);
}));

//# sourceMappingURL=board_selection.js.map
