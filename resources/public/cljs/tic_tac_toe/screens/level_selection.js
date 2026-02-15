// Compiled by ClojureScript 1.11.132 {:optimizations :none}
goog.provide('tic_tac_toe.screens.level_selection');
goog.require('cljs.core');
goog.require('tic_tac_toe.render_screen');
goog.require('tic_tac_toe.prompts');
goog.require('tic_tac_toe.screens.selection_button');
tic_tac_toe.screens.level_selection.prompt_index__GT_level = (function tic_tac_toe$screens$level_selection$prompt_index__GT_level(n){
var G__13100 = n;
switch (G__13100) {
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__13100)].join('')));

}
});
tic_tac_toe.screens.level_selection.heading_text = (function tic_tac_toe$screens$level_selection$heading_text(state){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"second-level-selection","second-level-selection",199785260),new cljs.core.Keyword(null,"current-screen","current-screen",-1454713691).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state)))){
return cljs.core.nth.call(null,tic_tac_toe.prompts.level_prompt,(1));
} else {
if(cljs.core._EQ_.call(null,(4),new cljs.core.Keyword(null,"mode","mode",654403691).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state)))){
return cljs.core.first.call(null,tic_tac_toe.prompts.level_prompt);
} else {
return cljs.core.nth.call(null,tic_tac_toe.prompts.level_prompt,(2));

}
}
});
tic_tac_toe.screens.level_selection.on_click = (function tic_tac_toe$screens$level_selection$on_click(state,screen,n){
var lk = ((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"first-level-selection","first-level-selection",-675329011),screen))?new cljs.core.Keyword(null,"first-ai-level","first-ai-level",1004633644):new cljs.core.Keyword(null,"second-ai-level","second-ai-level",-418730455));
var ns = ((((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"first-level-selection","first-level-selection",-675329011),screen)) && (cljs.core._EQ_.call(null,(4),new cljs.core.Keyword(null,"mode","mode",654403691).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state))))))?new cljs.core.Keyword(null,"second-level-selection","second-level-selection",199785260):new cljs.core.Keyword(null,"play","play",-580418022));
return cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"current-screen","current-screen",-1454713691),ns,lk,tic_tac_toe.screens.level_selection.prompt_index__GT_level.call(null,n));
});
tic_tac_toe.screens.level_selection.level_selection_screen = (function tic_tac_toe$screens$level_selection$level_selection_screen(screen_id,screen,state){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),screen_id,new cljs.core.Keyword(null,"class","class",-2030961996),"screen"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),tic_tac_toe.screens.level_selection.heading_text.call(null,state)], null),(function (){var iter__5480__auto__ = (function tic_tac_toe$screens$level_selection$level_selection_screen_$_iter__13102(s__13103){
return (new cljs.core.LazySeq(null,(function (){
var s__13103__$1 = s__13103;
while(true){
var temp__5804__auto__ = cljs.core.seq.call(null,s__13103__$1);
if(temp__5804__auto__){
var s__13103__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__13103__$2)){
var c__5478__auto__ = cljs.core.chunk_first.call(null,s__13103__$2);
var size__5479__auto__ = cljs.core.count.call(null,c__5478__auto__);
var b__13105 = cljs.core.chunk_buffer.call(null,size__5479__auto__);
if((function (){var i__13104 = (0);
while(true){
if((i__13104 < size__5479__auto__)){
var n = cljs.core._nth.call(null,c__5478__auto__,i__13104);
cljs.core.chunk_append.call(null,b__13105,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [tic_tac_toe.screens.selection_button.selection_button,cljs.core.nth.call(null,tic_tac_toe.prompts.level_prompt,n),cljs.core.partial.call(null,tic_tac_toe.screens.level_selection.on_click,state,screen,n)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),n], null)));

var G__13106 = (i__13104 + (1));
i__13104 = G__13106;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13105),tic_tac_toe$screens$level_selection$level_selection_screen_$_iter__13102.call(null,cljs.core.chunk_rest.call(null,s__13103__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13105),null);
}
} else {
var n = cljs.core.first.call(null,s__13103__$2);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [tic_tac_toe.screens.selection_button.selection_button,cljs.core.nth.call(null,tic_tac_toe.prompts.level_prompt,n),cljs.core.partial.call(null,tic_tac_toe.screens.level_selection.on_click,state,screen,n)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),n], null)),tic_tac_toe$screens$level_selection$level_selection_screen_$_iter__13102.call(null,cljs.core.rest.call(null,s__13103__$2)));
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
});
cljs.core._add_method.call(null,tic_tac_toe.render_screen.render_screen,new cljs.core.Keyword(null,"first-level-selection","first-level-selection",-675329011),(function (state){
return tic_tac_toe.screens.level_selection.level_selection_screen.call(null,"first-level-selection",new cljs.core.Keyword(null,"first-level-selection","first-level-selection",-675329011),state);
}));
cljs.core._add_method.call(null,tic_tac_toe.render_screen.render_screen,new cljs.core.Keyword(null,"second-level-selection","second-level-selection",199785260),(function (state){
return tic_tac_toe.screens.level_selection.level_selection_screen.call(null,"second-level-selection",new cljs.core.Keyword(null,"second-level-selection","second-level-selection",199785260),state);
}));

//# sourceMappingURL=level_selection.js.map
