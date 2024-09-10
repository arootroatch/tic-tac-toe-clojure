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
var G__17171 = n;
switch (G__17171) {
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__17171)].join('')));

}
});
cljs.core._add_method.call(null,tic_tac_toe.render_screen.render_screen,new cljs.core.Keyword(null,"second-level-selection","second-level-selection",199785260),(function (state){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#second-level-selection.screen","div#second-level-selection.screen",-1867859331),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),cljs.core.nth.call(null,tic_tac_toe.print_utils.level_prompt,(1))], null),(function (){var iter__5480__auto__ = (function tic_tac_toe$screens$second_level_selection$iter__17180(s__17181){
return (new cljs.core.LazySeq(null,(function (){
var s__17181__$1 = s__17181;
while(true){
var temp__5804__auto__ = cljs.core.seq.call(null,s__17181__$1);
if(temp__5804__auto__){
var s__17181__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__17181__$2)){
var c__5478__auto__ = cljs.core.chunk_first.call(null,s__17181__$2);
var size__5479__auto__ = cljs.core.count.call(null,c__5478__auto__);
var b__17183 = cljs.core.chunk_buffer.call(null,size__5479__auto__);
if((function (){var i__17182 = (0);
while(true){
if((i__17182 < size__5479__auto__)){
var n = cljs.core._nth.call(null,c__5478__auto__,i__17182);
cljs.core.chunk_append.call(null,b__17183,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [tic_tac_toe.screens.selection_button.selection_button,cljs.core.nth.call(null,tic_tac_toe.print_utils.level_prompt,n),cljs.core.partial.call(null,tic_tac_toe.screens.second_level_selection.on_click,state,tic_tac_toe.screens.second_level_selection.set_number.call(null,n))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),n], null)));

var G__17187 = (i__17182 + (1));
i__17182 = G__17187;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17183),tic_tac_toe$screens$second_level_selection$iter__17180.call(null,cljs.core.chunk_rest.call(null,s__17181__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17183),null);
}
} else {
var n = cljs.core.first.call(null,s__17181__$2);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [tic_tac_toe.screens.selection_button.selection_button,cljs.core.nth.call(null,tic_tac_toe.print_utils.level_prompt,n),cljs.core.partial.call(null,tic_tac_toe.screens.second_level_selection.on_click,state,tic_tac_toe.screens.second_level_selection.set_number.call(null,n))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),n], null)),tic_tac_toe$screens$second_level_selection$iter__17180.call(null,cljs.core.rest.call(null,s__17181__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(4),(6)], null));
})()], null);
}));

//# sourceMappingURL=second_level_selection.js.map
