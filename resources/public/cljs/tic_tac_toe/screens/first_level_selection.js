// Compiled by ClojureScript 1.11.132 {:optimizations :none}
goog.provide('tic_tac_toe.screens.first_level_selection');
goog.require('cljs.core');
goog.require('tic_tac_toe.render_screen');
goog.require('tic_tac_toe.print_utils');
goog.require('tic_tac_toe.screens.selection_button');
tic_tac_toe.screens.first_level_selection.on_click = (function tic_tac_toe$screens$first_level_selection$on_click(state,n){
cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"current-screen","current-screen",-1454713691),((cljs.core._EQ_.call(null,(4),new cljs.core.Keyword(null,"mode","mode",654403691).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state))))?new cljs.core.Keyword(null,"second-level-selection","second-level-selection",199785260):new cljs.core.Keyword(null,"play","play",-580418022)));

return cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"first-ai-level","first-ai-level",1004633644),n);
});
tic_tac_toe.screens.first_level_selection.selection_heading = (function tic_tac_toe$screens$first_level_selection$selection_heading(state){
if(cljs.core._EQ_.call(null,(4),new cljs.core.Keyword(null,"mode","mode",654403691).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state)))){
return cljs.core.first.call(null,tic_tac_toe.print_utils.level_prompt);
} else {
return cljs.core.nth.call(null,tic_tac_toe.print_utils.level_prompt,(2));
}
});
tic_tac_toe.screens.first_level_selection.set_number = (function tic_tac_toe$screens$first_level_selection$set_number(n){
var G__12557 = n;
switch (G__12557) {
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__12557)].join('')));

}
});
cljs.core._add_method.call(null,tic_tac_toe.render_screen.render_screen,new cljs.core.Keyword(null,"first-level-selection","first-level-selection",-675329011),(function (state){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#first-level-selection.screen","div#first-level-selection.screen",2134266571),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),tic_tac_toe.screens.first_level_selection.selection_heading.call(null,state)], null),cljs.core.map.call(null,(function (p1__12558_SHARP_){
return tic_tac_toe.screens.selection_button.selection_button.call(null,cljs.core.nth.call(null,tic_tac_toe.print_utils.level_prompt,p1__12558_SHARP_),cljs.core.partial.call(null,tic_tac_toe.screens.first_level_selection.on_click,state,tic_tac_toe.screens.first_level_selection.set_number.call(null,p1__12558_SHARP_)),p1__12558_SHARP_);
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(4),(6)], null))], null);
}));

//# sourceMappingURL=first_level_selection.js.map
