// Compiled by ClojureScript 1.11.132 {:optimizations :none}
goog.provide('tic_tac_toe.screens.board_selection');
goog.require('cljs.core');
goog.require('tic_tac_toe.print_utils');
goog.require('tic_tac_toe.render_screen');
goog.require('tic_tac_toe.board_options');
tic_tac_toe.screens.board_selection.on_click = (function tic_tac_toe$screens$board_selection$on_click(state,n){
cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"current-screen","current-screen",-1454713691),((cljs.core._EQ_.call(null,(1),new cljs.core.Keyword(null,"mode","mode",654403691).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state))))?new cljs.core.Keyword(null,"play","play",-580418022):new cljs.core.Keyword(null,"first-level-selection","first-level-selection",-675329011)));

return cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"board","board",-1907017633),(function (){var G__17095 = n;
switch (G__17095) {
case (1):
return tic_tac_toe.board_options.initial_3x3_board;

break;
case (2):
return tic_tac_toe.board_options.initial_4x4_board;

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__17095)].join('')));

}
})());
});
tic_tac_toe.screens.board_selection.preview_square = (function tic_tac_toe$screens$board_selection$preview_square(size){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),["preview-square-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(size)].join('')], null)], null);
});
tic_tac_toe.screens.board_selection.three_by_three_preview = (function tic_tac_toe$screens$board_selection$three_by_three_preview(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.three-grid","span.three-grid",1506129929),(function (){var iter__5480__auto__ = (function tic_tac_toe$screens$board_selection$three_by_three_preview_$_iter__17096(s__17097){
return (new cljs.core.LazySeq(null,(function (){
var s__17097__$1 = s__17097;
while(true){
var temp__5804__auto__ = cljs.core.seq.call(null,s__17097__$1);
if(temp__5804__auto__){
var s__17097__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__17097__$2)){
var c__5478__auto__ = cljs.core.chunk_first.call(null,s__17097__$2);
var size__5479__auto__ = cljs.core.count.call(null,c__5478__auto__);
var b__17099 = cljs.core.chunk_buffer.call(null,size__5479__auto__);
if((function (){var i__17098 = (0);
while(true){
if((i__17098 < size__5479__auto__)){
var n = cljs.core._nth.call(null,c__5478__auto__,i__17098);
cljs.core.chunk_append.call(null,b__17099,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tic_tac_toe.screens.board_selection.preview_square,(27)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),n], null)));

var G__17105 = (i__17098 + (1));
i__17098 = G__17105;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17099),tic_tac_toe$screens$board_selection$three_by_three_preview_$_iter__17096.call(null,cljs.core.chunk_rest.call(null,s__17097__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17099),null);
}
} else {
var n = cljs.core.first.call(null,s__17097__$2);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tic_tac_toe.screens.board_selection.preview_square,(27)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),n], null)),tic_tac_toe$screens$board_selection$three_by_three_preview_$_iter__17096.call(null,cljs.core.rest.call(null,s__17097__$2)));
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
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.four-grid","span.four-grid",1101704459),(function (){var iter__5480__auto__ = (function tic_tac_toe$screens$board_selection$four_by_four_preview_$_iter__17101(s__17102){
return (new cljs.core.LazySeq(null,(function (){
var s__17102__$1 = s__17102;
while(true){
var temp__5804__auto__ = cljs.core.seq.call(null,s__17102__$1);
if(temp__5804__auto__){
var s__17102__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__17102__$2)){
var c__5478__auto__ = cljs.core.chunk_first.call(null,s__17102__$2);
var size__5479__auto__ = cljs.core.count.call(null,c__5478__auto__);
var b__17104 = cljs.core.chunk_buffer.call(null,size__5479__auto__);
if((function (){var i__17103 = (0);
while(true){
if((i__17103 < size__5479__auto__)){
var n = cljs.core._nth.call(null,c__5478__auto__,i__17103);
cljs.core.chunk_append.call(null,b__17104,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tic_tac_toe.screens.board_selection.preview_square,(20)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),n], null)));

var G__17185 = (i__17103 + (1));
i__17103 = G__17185;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17104),tic_tac_toe$screens$board_selection$four_by_four_preview_$_iter__17101.call(null,cljs.core.chunk_rest.call(null,s__17102__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17104),null);
}
} else {
var n = cljs.core.first.call(null,s__17102__$2);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tic_tac_toe.screens.board_selection.preview_square,(20)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),n], null)),tic_tac_toe$screens$board_selection$four_by_four_preview_$_iter__17101.call(null,cljs.core.rest.call(null,s__17102__$2)));
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
var G__17184 = n;
switch (G__17184) {
case (1):
return tic_tac_toe.screens.board_selection.three_by_three_preview.call(null);

break;
case (2):
return tic_tac_toe.screens.board_selection.four_by_four_preview.call(null);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__17184)].join('')));

}
});
tic_tac_toe.screens.board_selection.select_board_btn = (function tic_tac_toe$screens$board_selection$select_board_btn(state,n){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.select-board-btn","button.select-board-btn",1742922576),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),cljs.core.partial.call(null,tic_tac_toe.screens.board_selection.on_click,state,n)], null),tic_tac_toe.screens.board_selection.board_preview.call(null,n),cljs.core.nth.call(null,tic_tac_toe.print_utils.board_prompt,n)], null);
});
cljs.core._add_method.call(null,tic_tac_toe.render_screen.render_screen,new cljs.core.Keyword(null,"board-selection","board-selection",276837898),(function (state){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#board-selection.screen","div#board-selection.screen",422032848),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),cljs.core.first.call(null,tic_tac_toe.print_utils.board_prompt)], null),(function (){var iter__5480__auto__ = (function tic_tac_toe$screens$board_selection$iter__17189(s__17193){
return (new cljs.core.LazySeq(null,(function (){
var s__17193__$1 = s__17193;
while(true){
var temp__5804__auto__ = cljs.core.seq.call(null,s__17193__$1);
if(temp__5804__auto__){
var s__17193__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__17193__$2)){
var c__5478__auto__ = cljs.core.chunk_first.call(null,s__17193__$2);
var size__5479__auto__ = cljs.core.count.call(null,c__5478__auto__);
var b__17195 = cljs.core.chunk_buffer.call(null,size__5479__auto__);
if((function (){var i__17194 = (0);
while(true){
if((i__17194 < size__5479__auto__)){
var n = cljs.core._nth.call(null,c__5478__auto__,i__17194);
cljs.core.chunk_append.call(null,b__17195,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [tic_tac_toe.screens.board_selection.select_board_btn,state,n], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),n], null)));

var G__17204 = (i__17194 + (1));
i__17194 = G__17204;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17195),tic_tac_toe$screens$board_selection$iter__17189.call(null,cljs.core.chunk_rest.call(null,s__17193__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17195),null);
}
} else {
var n = cljs.core.first.call(null,s__17193__$2);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [tic_tac_toe.screens.board_selection.select_board_btn,state,n], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),n], null)),tic_tac_toe$screens$board_selection$iter__17189.call(null,cljs.core.rest.call(null,s__17193__$2)));
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
