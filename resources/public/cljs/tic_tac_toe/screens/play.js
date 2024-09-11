// Compiled by ClojureScript 1.11.132 {:optimizations :none}
goog.provide('tic_tac_toe.screens.play');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('tic_tac_toe.bot_moves');
goog.require('tic_tac_toe.eval_board');
goog.require('tic_tac_toe.player');
goog.require('tic_tac_toe.render_screen');
tic_tac_toe.screens.play.on_click = (function tic_tac_toe$screens$play$on_click(state,move){
var board = new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state));
var player = new cljs.core.Keyword(null,"player","player",-97687400).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state));
var new_board = cljs.core.assoc.call(null,board,move,player);
return cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"board","board",-1907017633),new_board,new cljs.core.Keyword(null,"player","player",-97687400),tic_tac_toe.player.switch_player.call(null,player),new cljs.core.Keyword(null,"game-state","game-state",935682735),tic_tac_toe.eval_board.score.call(null,new_board),new cljs.core.Keyword(null,"human?","human?",-2017219054),((cljs.core._EQ_.call(null,(1),new cljs.core.Keyword(null,"mode","mode",654403691).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state))))?true:false));
});
tic_tac_toe.screens.play.set_token = (function tic_tac_toe$screens$play$set_token(state,n){
var val = cljs.core.nth.call(null,new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state)),n);
if((val instanceof cljs.core.Keyword)){
return clojure.string.capitalize.call(null,cljs.core.name.call(null,val));
} else {
return null;
}
});
tic_tac_toe.screens.play.board_square = (function tic_tac_toe$screens$play$board_square(state,n){
var token = tic_tac_toe.screens.play.set_token.call(null,state,n);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.board-square","button.board-square",-1824570174),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),["index-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),cljs.core.partial.call(null,tic_tac_toe.screens.play.on_click,state,n),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),((cljs.core.not.call(null,new cljs.core.Keyword(null,"human?","human?",-2017219054).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state)))) || (((cljs.core.not_EQ_.call(null,new cljs.core.Keyword(null,"in-progress","in-progress",2126442630),new cljs.core.Keyword(null,"game-state","game-state",935682735).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state)))) || ((!((token == null)))))))], null),token], null);
});
tic_tac_toe.screens.play.ai_turn = (function tic_tac_toe$screens$play$ai_turn(state){
if(((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"in-progress","in-progress",2126442630),new cljs.core.Keyword(null,"game-state","game-state",935682735).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state)))) && (cljs.core.not.call(null,new cljs.core.Keyword(null,"human?","human?",-2017219054).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state)))))){
var new_board = tic_tac_toe.player.take_turn.call(null,cljs.core.deref.call(null,state));
return cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"player","player",-97687400),tic_tac_toe.player.switch_player.call(null,new cljs.core.Keyword(null,"player","player",-97687400).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state))),new cljs.core.Keyword(null,"board","board",-1907017633),new_board,new cljs.core.Keyword(null,"game-state","game-state",935682735),tic_tac_toe.eval_board.score.call(null,new_board),new cljs.core.Keyword(null,"human?","human?",-2017219054),((cljs.core._EQ_.call(null,(4),new cljs.core.Keyword(null,"mode","mode",654403691).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state))))?false:true));
} else {
return null;
}
});
if((typeof tic_tac_toe !== 'undefined') && (typeof tic_tac_toe.screens !== 'undefined') && (typeof tic_tac_toe.screens.play !== 'undefined') && (typeof tic_tac_toe.screens.play.render_board !== 'undefined')){
} else {
tic_tac_toe.screens.play.render_board = (function (){var method_table__5599__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5600__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5601__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5602__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5603__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"tic-tac-toe.screens.play","render-board"),(function (state){
return cljs.core.count.call(null,new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state)));
}),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5603__auto__,method_table__5599__auto__,prefer_table__5600__auto__,method_cache__5601__auto__,cached_hierarchy__5602__auto__));
})();
}
cljs.core._add_method.call(null,tic_tac_toe.screens.play.render_board,(9),(function (state){
React.useEffect(cljs.core.partial.call(null,tic_tac_toe.screens.play.ai_turn,state));

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.three-grid","div.three-grid",224966406),(function (){var iter__5480__auto__ = (function tic_tac_toe$screens$play$iter__17290(s__17291){
return (new cljs.core.LazySeq(null,(function (){
var s__17291__$1 = s__17291;
while(true){
var temp__5804__auto__ = cljs.core.seq.call(null,s__17291__$1);
if(temp__5804__auto__){
var s__17291__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__17291__$2)){
var c__5478__auto__ = cljs.core.chunk_first.call(null,s__17291__$2);
var size__5479__auto__ = cljs.core.count.call(null,c__5478__auto__);
var b__17293 = cljs.core.chunk_buffer.call(null,size__5479__auto__);
if((function (){var i__17292 = (0);
while(true){
if((i__17292 < size__5479__auto__)){
var n = cljs.core._nth.call(null,c__5478__auto__,i__17292);
cljs.core.chunk_append.call(null,b__17293,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [tic_tac_toe.screens.play.board_square,state,n], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),n], null)));

var G__17318 = (i__17292 + (1));
i__17292 = G__17318;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17293),tic_tac_toe$screens$play$iter__17290.call(null,cljs.core.chunk_rest.call(null,s__17291__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17293),null);
}
} else {
var n = cljs.core.first.call(null,s__17291__$2);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [tic_tac_toe.screens.play.board_square,state,n], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),n], null)),tic_tac_toe$screens$play$iter__17290.call(null,cljs.core.rest.call(null,s__17291__$2)));
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
}));
cljs.core._add_method.call(null,tic_tac_toe.screens.play.render_board,(16),(function (state){
React.useEffect(cljs.core.partial.call(null,tic_tac_toe.screens.play.ai_turn,state));

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.four-grid","div.four-grid",-321265237),(function (){var iter__5480__auto__ = (function tic_tac_toe$screens$play$iter__17308(s__17309){
return (new cljs.core.LazySeq(null,(function (){
var s__17309__$1 = s__17309;
while(true){
var temp__5804__auto__ = cljs.core.seq.call(null,s__17309__$1);
if(temp__5804__auto__){
var s__17309__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__17309__$2)){
var c__5478__auto__ = cljs.core.chunk_first.call(null,s__17309__$2);
var size__5479__auto__ = cljs.core.count.call(null,c__5478__auto__);
var b__17311 = cljs.core.chunk_buffer.call(null,size__5479__auto__);
if((function (){var i__17310 = (0);
while(true){
if((i__17310 < size__5479__auto__)){
var n = cljs.core._nth.call(null,c__5478__auto__,i__17310);
cljs.core.chunk_append.call(null,b__17311,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [tic_tac_toe.screens.play.board_square,state,n], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),n], null)));

var G__17328 = (i__17310 + (1));
i__17310 = G__17328;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17311),tic_tac_toe$screens$play$iter__17308.call(null,cljs.core.chunk_rest.call(null,s__17309__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17311),null);
}
} else {
var n = cljs.core.first.call(null,s__17309__$2);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [tic_tac_toe.screens.play.board_square,state,n], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),n], null)),tic_tac_toe$screens$play$iter__17308.call(null,cljs.core.rest.call(null,s__17309__$2)));
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
}));
tic_tac_toe.screens.play.play_heading = (function tic_tac_toe$screens$play$play_heading(state){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2#play-heading","h2#play-heading",1387918084),(function (){var player = (function (){var G__17326 = new cljs.core.Keyword(null,"player","player",-97687400).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state));
var G__17326__$1 = (((G__17326 == null))?null:cljs.core.name.call(null,G__17326));
if((G__17326__$1 == null)){
return null;
} else {
return clojure.string.capitalize.call(null,G__17326__$1);
}
})();
var game_state = new cljs.core.Keyword(null,"game-state","game-state",935682735).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"in-progress","in-progress",2126442630),game_state)){
return [player,"'s turn!"].join('');
} else {
return game_state;
}
})()], null);
});
tic_tac_toe.screens.play.reset_state = (function tic_tac_toe$screens$play$reset_state(state){
return cljs.core.reset_BANG_.call(null,state,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"current-screen","current-screen",-1454713691),new cljs.core.Keyword(null,"second-ai-level","second-ai-level",-418730455),new cljs.core.Keyword(null,"mode","mode",654403691),new cljs.core.Keyword(null,"first-ai-level","first-ai-level",1004633644),new cljs.core.Keyword(null,"game-state","game-state",935682735),new cljs.core.Keyword(null,"human?","human?",-2017219054),new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"board","board",-1907017633)],[new cljs.core.Keyword(null,"mode-selection","mode-selection",986239762),null,null,null,new cljs.core.Keyword(null,"in-progress","in-progress",2126442630),true,new cljs.core.Keyword(null,"gui","gui",604532813),new cljs.core.Keyword(null,"x","x",2099068185),null]));
});
cljs.core._add_method.call(null,tic_tac_toe.render_screen.render_screen,new cljs.core.Keyword(null,"play","play",-580418022),(function (state){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#board-wrapper","div#board-wrapper",-1589398465),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tic_tac_toe.screens.play.play_heading,state], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"f>","f>",1484564198),tic_tac_toe.screens.play.render_board,state], null),((cljs.core.not_EQ_.call(null,new cljs.core.Keyword(null,"in-progress","in-progress",2126442630),new cljs.core.Keyword(null,"game-state","game-state",935682735).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state))))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button#restart","button#restart",-406511129),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),cljs.core.partial.call(null,tic_tac_toe.screens.play.reset_state,state)], null),"Restart"], null):null)], null);
}));

//# sourceMappingURL=play.js.map
