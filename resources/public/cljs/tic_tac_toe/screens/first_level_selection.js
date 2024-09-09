// Compiled by ClojureScript 1.11.132 {:optimizations :none}
goog.provide('tic_tac_toe.screens.first_level_selection');
goog.require('cljs.core');
goog.require('tic_tac_toe.render_screen');
goog.require('tic_tac_toe.print_utils');
goog.require('tic_tac_toe.screens.selection_button');
goog.require('tic_tac_toe.state');
tic_tac_toe.screens.first_level_selection.on_click = (function tic_tac_toe$screens$first_level_selection$on_click(){
return cljs.core.swap_BANG_.call(null,tic_tac_toe.state.state,cljs.core.assoc,new cljs.core.Keyword(null,"current-screen","current-screen",-1454713691),((cljs.core._EQ_.call(null,(4),new cljs.core.Keyword(null,"mode","mode",654403691).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.state.state))))?new cljs.core.Keyword(null,"second-level-selection","second-level-selection",199785260):new cljs.core.Keyword(null,"play","play",-580418022)));
});
tic_tac_toe.screens.first_level_selection.selection_heading = (function tic_tac_toe$screens$first_level_selection$selection_heading(state){
if(cljs.core._EQ_.call(null,(4),new cljs.core.Keyword(null,"mode","mode",654403691).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state)))){
return cljs.core.first.call(null,tic_tac_toe.print_utils.level_prompt);
} else {
return cljs.core.nth.call(null,tic_tac_toe.print_utils.level_prompt,(2));
}
});
cljs.core._add_method.call(null,tic_tac_toe.render_screen.render_screen,new cljs.core.Keyword(null,"first-level-selection","first-level-selection",-675329011),(function (state){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#first-level-selection.screen","div#first-level-selection.screen",2134266571),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),tic_tac_toe.screens.first_level_selection.selection_heading.call(null,state)], null),cljs.core.map.call(null,(function (p1__14535_SHARP_){
return tic_tac_toe.screens.selection_button.selection_button.call(null,cljs.core.nth.call(null,tic_tac_toe.print_utils.level_prompt,p1__14535_SHARP_),tic_tac_toe.screens.first_level_selection.on_click,p1__14535_SHARP_);
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(4),(6)], null))], null);
}));

//# sourceMappingURL=first_level_selection.js.map
