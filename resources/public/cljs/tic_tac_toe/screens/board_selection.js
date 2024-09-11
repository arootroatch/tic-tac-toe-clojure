// Compiled by ClojureScript 1.11.132 {:optimizations :none}
goog.provide('tic_tac_toe.screens.board_selection');
goog.require('cljs.core');
goog.require('tic_tac_toe.print_utils');
goog.require('tic_tac_toe.render_screen');
goog.require('tic_tac_toe.board_options');
tic_tac_toe.screens.board_selection.on_click = (function tic_tac_toe$screens$board_selection$on_click(state,n){
cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"current-screen","current-screen",-1454713691),((cljs.core._EQ_.call(null,(1),new cljs.core.Keyword(null,"mode","mode",654403691).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state))))?new cljs.core.Keyword(null,"play","play",-580418022):new cljs.core.Keyword(null,"first-level-selection","first-level-selection",-675329011)));

return cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"board","board",-1907017633),(function (){var G__17362 = n;
switch (G__17362) {
case (1):
return tic_tac_toe.board_options.initial_3x3_board;

break;
case (2):
return tic_tac_toe.board_options.initial_4x4_board;

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__17362)].join('')));

}
})());
});
tic_tac_toe.screens.board_selection.preview_square = (function tic_tac_toe$screens$board_selection$preview_square(size){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),["preview-square-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(size)].join('')], null)], null);
});
tic_tac_toe.screens.board_selection.three_by_three_preview = (function tic_tac_toe$screens$board_selection$three_by_three_preview(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.three-grid","span.three-grid",1506129929),(function (){var iter__5480__auto__ = (function tic_tac_toe$screens$board_selection$three_by_three_preview_$_iter__17368(s__17369){
return (new cljs.core.LazySeq(null,(function (){
var s__17369__$1 = s__17369;
while(true){
var temp__5804__auto__ = cljs.core.seq.call(null,s__17369__$1);
if(temp__5804__auto__){
var s__17369__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__17369__$2)){
var c__5478__auto__ = cljs.core.chunk_first.call(null,s__17369__$2);
var size__5479__auto__ = cljs.core.count.call(null,c__5478__auto__);
var b__17371 = cljs.core.chunk_buffer.call(null,size__5479__auto__);
if((function (){var i__17370 = (0);
while(true){
if((i__17370 < size__5479__auto__)){
var n = cljs.core._nth.call(null,c__5478__auto__,i__17370);
cljs.core.chunk_append.call(null,b__17371,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tic_tac_toe.screens.board_selection.preview_square,(27)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),n], null)));

var G__17384 = (i__17370 + (1));
i__17370 = G__17384;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17371),tic_tac_toe$screens$board_selection$three_by_three_preview_$_iter__17368.call(null,cljs.core.chunk_rest.call(null,s__17369__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17371),null);
}
} else {
var n = cljs.core.first.call(null,s__17369__$2);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tic_tac_toe.screens.board_selection.preview_square,(27)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),n], null)),tic_tac_toe$screens$board_selection$three_by_three_preview_$_iter__17368.call(null,cljs.core.rest.call(null,s__17369__$2)));
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
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.four-grid","span.four-grid",1101704459),(function (){var iter__5480__auto__ = (function tic_tac_toe$screens$board_selection$four_by_four_preview_$_iter__17373(s__17374){
return (new cljs.core.LazySeq(null,(function (){
var s__17374__$1 = s__17374;
while(true){
var temp__5804__auto__ = cljs.core.seq.call(null,s__17374__$1);
if(temp__5804__auto__){
var s__17374__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__17374__$2)){
var c__5478__auto__ = cljs.core.chunk_first.call(null,s__17374__$2);
var size__5479__auto__ = cljs.core.count.call(null,c__5478__auto__);
var b__17376 = cljs.core.chunk_buffer.call(null,size__5479__auto__);
if((function (){var i__17375 = (0);
while(true){
if((i__17375 < size__5479__auto__)){
var n = cljs.core._nth.call(null,c__5478__auto__,i__17375);
cljs.core.chunk_append.call(null,b__17376,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tic_tac_toe.screens.board_selection.preview_square,(20)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),n], null)));

var G__17389 = (i__17375 + (1));
i__17375 = G__17389;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17376),tic_tac_toe$screens$board_selection$four_by_four_preview_$_iter__17373.call(null,cljs.core.chunk_rest.call(null,s__17374__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17376),null);
}
} else {
var n = cljs.core.first.call(null,s__17374__$2);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tic_tac_toe.screens.board_selection.preview_square,(20)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),n], null)),tic_tac_toe$screens$board_selection$four_by_four_preview_$_iter__17373.call(null,cljs.core.rest.call(null,s__17374__$2)));
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
var G__17388 = n;
switch (G__17388) {
case (1):
return tic_tac_toe.screens.board_selection.three_by_three_preview.call(null);

break;
case (2):
return tic_tac_toe.screens.board_selection.four_by_four_preview.call(null);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__17388)].join('')));

}
});
tic_tac_toe.screens.board_selection.select_board_btn = (function tic_tac_toe$screens$board_selection$select_board_btn(state,n){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.select-board-btn","button.select-board-btn",1742922576),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),cljs.core.partial.call(null,tic_tac_toe.screens.board_selection.on_click,state,n)], null),tic_tac_toe.screens.board_selection.board_preview.call(null,n),cljs.core.nth.call(null,tic_tac_toe.print_utils.board_prompt,n)], null);
});
cljs.core._add_method.call(null,tic_tac_toe.render_screen.render_screen,new cljs.core.Keyword(null,"board-selection","board-selection",276837898),(function (state){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#board-selection.screen","div#board-selection.screen",422032848),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),cljs.core.first.call(null,tic_tac_toe.print_utils.board_prompt)], null),(function (){var iter__5480__auto__ = (function tic_tac_toe$screens$board_selection$iter__17394(s__17395){
return (new cljs.core.LazySeq(null,(function (){
var s__17395__$1 = s__17395;
while(true){
var temp__5804__auto__ = cljs.core.seq.call(null,s__17395__$1);
if(temp__5804__auto__){
var s__17395__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__17395__$2)){
var c__5478__auto__ = cljs.core.chunk_first.call(null,s__17395__$2);
var size__5479__auto__ = cljs.core.count.call(null,c__5478__auto__);
var b__17397 = cljs.core.chunk_buffer.call(null,size__5479__auto__);
if((function (){var i__17396 = (0);
while(true){
if((i__17396 < size__5479__auto__)){
var n = cljs.core._nth.call(null,c__5478__auto__,i__17396);
cljs.core.chunk_append.call(null,b__17397,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [tic_tac_toe.screens.board_selection.select_board_btn,state,n], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),n], null)));

var G__17404 = (i__17396 + (1));
i__17396 = G__17404;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17397),tic_tac_toe$screens$board_selection$iter__17394.call(null,cljs.core.chunk_rest.call(null,s__17395__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17397),null);
}
} else {
var n = cljs.core.first.call(null,s__17395__$2);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [tic_tac_toe.screens.board_selection.select_board_btn,state,n], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),n], null)),tic_tac_toe$screens$board_selection$iter__17394.call(null,cljs.core.rest.call(null,s__17395__$2)));
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
