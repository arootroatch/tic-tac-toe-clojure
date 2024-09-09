// Compiled by ClojureScript 1.11.132 {:optimizations :none}
goog.provide('tic_tac_toe.screens.board_selection');
goog.require('cljs.core');
goog.require('tic_tac_toe.print_utils');
goog.require('tic_tac_toe.render_screen');
goog.require('tic_tac_toe.board_options');
tic_tac_toe.screens.board_selection.on_click = (function tic_tac_toe$screens$board_selection$on_click(state,n){
cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"current-screen","current-screen",-1454713691),((cljs.core._EQ_.call(null,(1),new cljs.core.Keyword(null,"mode","mode",654403691).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state))))?new cljs.core.Keyword(null,"play","play",-580418022):new cljs.core.Keyword(null,"first-level-selection","first-level-selection",-675329011)));

return cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"board","board",-1907017633),(function (){var G__15238 = n;
switch (G__15238) {
case (1):
return tic_tac_toe.board_options.initial_3x3_board;

break;
case (2):
return tic_tac_toe.board_options.initial_4x4_board;

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__15238)].join('')));

}
})());
});
tic_tac_toe.screens.board_selection.preview_square = (function tic_tac_toe$screens$board_selection$preview_square(key,size){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),["preview-square-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(size)].join('')], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),key], null));
});
tic_tac_toe.screens.board_selection.three_by_three_preview = (function tic_tac_toe$screens$board_selection$three_by_three_preview(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.three-grid","span.three-grid",1506129929),cljs.core.map.call(null,(function (p1__15239_SHARP_){
return tic_tac_toe.screens.board_selection.preview_square.call(null,p1__15239_SHARP_,(27));
}),cljs.core.range.call(null,(9)))], null);
});
tic_tac_toe.screens.board_selection.four_by_four_preview = (function tic_tac_toe$screens$board_selection$four_by_four_preview(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.four-grid","span.four-grid",1101704459),cljs.core.map.call(null,(function (p1__15240_SHARP_){
return tic_tac_toe.screens.board_selection.preview_square.call(null,p1__15240_SHARP_,(20));
}),cljs.core.range.call(null,(16)))], null);
});
tic_tac_toe.screens.board_selection.board_preview = (function tic_tac_toe$screens$board_selection$board_preview(n){
var G__15242 = n;
switch (G__15242) {
case (1):
return tic_tac_toe.screens.board_selection.three_by_three_preview.call(null);

break;
case (2):
return tic_tac_toe.screens.board_selection.four_by_four_preview.call(null);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__15242)].join('')));

}
});
tic_tac_toe.screens.board_selection.select_board_btn = (function tic_tac_toe$screens$board_selection$select_board_btn(state,n){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.select-board-btn","button.select-board-btn",1742922576),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),cljs.core.partial.call(null,tic_tac_toe.screens.board_selection.on_click,state,n)], null),tic_tac_toe.screens.board_selection.board_preview.call(null,n),cljs.core.nth.call(null,tic_tac_toe.print_utils.board_prompt,n)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),n], null));
});
cljs.core._add_method.call(null,tic_tac_toe.render_screen.render_screen,new cljs.core.Keyword(null,"board-selection","board-selection",276837898),(function (state){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#board-selection.screen","div#board-selection.screen",422032848),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),cljs.core.first.call(null,tic_tac_toe.print_utils.board_prompt)], null),cljs.core.map.call(null,(function (p1__15244_SHARP_){
return tic_tac_toe.screens.board_selection.select_board_btn.call(null,state,p1__15244_SHARP_);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null))], null);
}));

//# sourceMappingURL=board_selection.js.map
