// Compiled by ClojureScript 1.11.132 {:optimizations :none}
goog.provide('tic_tac_toe.screens.second_level_selection');
goog.require('cljs.core');
goog.require('tic_tac_toe.render_screen');
goog.require('tic_tac_toe.print_utils');
goog.require('tic_tac_toe.screens.selection_button');
tic_tac_toe.screens.second_level_selection.on_click = (function tic_tac_toe$screens$second_level_selection$on_click(state,n){
return cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"current-screen","current-screen",-1454713691),new cljs.core.Keyword(null,"play","play",-580418022),new cljs.core.Keyword(null,"second-ai-level","second-ai-level",-418730455),n);
});
tic_tac_toe.screens.second_level_selection.set_number = (function tic_tac_toe$screens$second_level_selection$set_number(n){
var G__15866 = n;
switch (G__15866) {
case (3):
return (1);

break;
case (4):
return (2);

break;
case (6):
return (3);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__15866)].join('')));

}
});
cljs.core._add_method.call(null,tic_tac_toe.render_screen.render_screen,new cljs.core.Keyword(null,"second-level-selection","second-level-selection",199785260),(function (state){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#second-level-selection.screen","div#second-level-selection.screen",-1867859331),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),cljs.core.nth.call(null,tic_tac_toe.print_utils.level_prompt,(1))], null),cljs.core.map.call(null,(function (p1__15867_SHARP_){
return tic_tac_toe.screens.selection_button.selection_button.call(null,cljs.core.nth.call(null,tic_tac_toe.print_utils.level_prompt,p1__15867_SHARP_),cljs.core.partial.call(null,tic_tac_toe.screens.second_level_selection.on_click,state,tic_tac_toe.screens.second_level_selection.set_number.call(null,p1__15867_SHARP_)),p1__15867_SHARP_);
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(4),(6)], null))], null);
}));

//# sourceMappingURL=second_level_selection.js.map
