// Compiled by ClojureScript 1.11.132 {:optimizations :none}
goog.provide('tic_tac_toe.screens.mode_selection');
goog.require('cljs.core');
goog.require('tic_tac_toe.render_screen');
goog.require('tic_tac_toe.print_utils');
goog.require('tic_tac_toe.screens.button');
goog.require('tic_tac_toe.state');
tic_tac_toe.screens.mode_selection.on_click = (function tic_tac_toe$screens$mode_selection$on_click(n){
cljs.core.swap_BANG_.call(null,tic_tac_toe.state.state,cljs.core.assoc,new cljs.core.Keyword(null,"current-screen","current-screen",-1454713691),new cljs.core.Keyword(null,"board-selection","board-selection",276837898));

cljs.core.swap_BANG_.call(null,tic_tac_toe.state.state,cljs.core.assoc,new cljs.core.Keyword(null,"mode","mode",654403691),n);

return cljs.core.println.call(null,cljs.core.deref.call(null,tic_tac_toe.state.state));
});
cljs.core._add_method.call(null,tic_tac_toe.render_screen.render_screen,new cljs.core.Keyword(null,"mode-selection","mode-selection",986239762),(function (_){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#mode-selection","div#mode-selection",-631622800),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),cljs.core.first.call(null,tic_tac_toe.print_utils.mode_prompt)], null),cljs.core.map.call(null,(function (p1__8566_SHARP_){
return tic_tac_toe.screens.button.selection_button.call(null,cljs.core.nth.call(null,tic_tac_toe.print_utils.mode_prompt,p1__8566_SHARP_),cljs.core.partial.call(null,tic_tac_toe.screens.mode_selection.on_click,p1__8566_SHARP_),p1__8566_SHARP_);
}),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(3),(4)], null))], null);
}));

//# sourceMappingURL=mode_selection.js.map
