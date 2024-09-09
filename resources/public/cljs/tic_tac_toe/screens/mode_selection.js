// Compiled by ClojureScript 1.11.132 {:optimizations :none}
goog.provide('tic_tac_toe.screens.mode_selection');
goog.require('cljs.core');
goog.require('tic_tac_toe.render_screen');
goog.require('tic_tac_toe.print_utils');
goog.require('tic_tac_toe.screens.selection_button');
tic_tac_toe.screens.mode_selection.on_click = (function tic_tac_toe$screens$mode_selection$on_click(state,n){
cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"current-screen","current-screen",-1454713691),new cljs.core.Keyword(null,"board-selection","board-selection",276837898));

return cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"mode","mode",654403691),n);
});
cljs.core._add_method.call(null,tic_tac_toe.render_screen.render_screen,new cljs.core.Keyword(null,"mode-selection","mode-selection",986239762),(function (state){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#mode-selection.screen","div#mode-selection.screen",-1528330006),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),cljs.core.first.call(null,tic_tac_toe.print_utils.mode_prompt)], null),cljs.core.map.call(null,(function (p1__14318_SHARP_){
return tic_tac_toe.screens.selection_button.selection_button.call(null,cljs.core.nth.call(null,tic_tac_toe.print_utils.mode_prompt,p1__14318_SHARP_),cljs.core.partial.call(null,tic_tac_toe.screens.mode_selection.on_click,state,p1__14318_SHARP_),p1__14318_SHARP_);
}),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(3),(4)], null))], null);
}));

//# sourceMappingURL=mode_selection.js.map
