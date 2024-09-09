// Compiled by ClojureScript 1.11.132 {:optimizations :none}
goog.provide('tic_tac_toe.screens.second_level_selection');
goog.require('cljs.core');
goog.require('tic_tac_toe.render_screen');
goog.require('tic_tac_toe.print_utils');
goog.require('tic_tac_toe.screens.selection_button');
goog.require('tic_tac_toe.state');
tic_tac_toe.screens.second_level_selection.on_click = (function tic_tac_toe$screens$second_level_selection$on_click(){
return cljs.core.swap_BANG_.call(null,tic_tac_toe.state.state,cljs.core.assoc,new cljs.core.Keyword(null,"current-screen","current-screen",-1454713691),new cljs.core.Keyword(null,"play","play",-580418022));
});
cljs.core._add_method.call(null,tic_tac_toe.render_screen.render_screen,new cljs.core.Keyword(null,"second-level-selection","second-level-selection",199785260),(function (_){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#second-level-selection.screen","div#second-level-selection.screen",-1867859331),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),cljs.core.nth.call(null,tic_tac_toe.print_utils.level_prompt,(1))], null),cljs.core.map.call(null,(function (p1__14540_SHARP_){
return tic_tac_toe.screens.selection_button.selection_button.call(null,cljs.core.nth.call(null,tic_tac_toe.print_utils.level_prompt,p1__14540_SHARP_),tic_tac_toe.screens.second_level_selection.on_click,p1__14540_SHARP_);
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(4),(6)], null))], null);
}));

//# sourceMappingURL=second_level_selection.js.map
