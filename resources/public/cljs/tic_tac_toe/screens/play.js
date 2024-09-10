// Compiled by ClojureScript 1.11.132 {:optimizations :none}
goog.provide('tic_tac_toe.screens.play');
goog.require('cljs.core');
goog.require('c3kit.wire.js');
goog.require('tic_tac_toe.eval_board');
goog.require('tic_tac_toe.player');
goog.require('tic_tac_toe.render_screen');
tic_tac_toe.screens.play.read_player = (function tic_tac_toe$screens$play$read_player(player){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"x","x",2099068185),player)){
return "X";
} else {
return "O";
}
});
tic_tac_toe.screens.play.on_click = (function tic_tac_toe$screens$play$on_click(state,move){
var board = new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state));
var player = new cljs.core.Keyword(null,"player","player",-97687400).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state));
var new_board = cljs.core.assoc.call(null,board,move,player);
var btn = c3kit.wire.js.element_by_id.call(null,["index-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(move)].join(''));
(btn.innerHTML = tic_tac_toe.screens.play.read_player.call(null,player));

(btn.disabled = true);

return cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"board","board",-1907017633),new_board,new cljs.core.Keyword(null,"player","player",-97687400),tic_tac_toe.player.switch_player.call(null,player),new cljs.core.Keyword(null,"game-state","game-state",935682735),tic_tac_toe.eval_board.score.call(null,new_board));
});
tic_tac_toe.screens.play.board_square = (function tic_tac_toe$screens$play$board_square(state,n){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.board-square","button.board-square",-1824570174),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),["index-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),cljs.core.partial.call(null,tic_tac_toe.screens.play.on_click,state,n)], null)], null);
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
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.three-grid","div.three-grid",224966406),(function (){var iter__5480__auto__ = (function tic_tac_toe$screens$play$iter__15911(s__15912){
return (new cljs.core.LazySeq(null,(function (){
var s__15912__$1 = s__15912;
while(true){
var temp__5804__auto__ = cljs.core.seq.call(null,s__15912__$1);
if(temp__5804__auto__){
var s__15912__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__15912__$2)){
var c__5478__auto__ = cljs.core.chunk_first.call(null,s__15912__$2);
var size__5479__auto__ = cljs.core.count.call(null,c__5478__auto__);
var b__15914 = cljs.core.chunk_buffer.call(null,size__5479__auto__);
if((function (){var i__15913 = (0);
while(true){
if((i__15913 < size__5479__auto__)){
var n = cljs.core._nth.call(null,c__5478__auto__,i__15913);
cljs.core.chunk_append.call(null,b__15914,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [tic_tac_toe.screens.play.board_square,state,n], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),n], null)));

var G__15919 = (i__15913 + (1));
i__15913 = G__15919;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15914),tic_tac_toe$screens$play$iter__15911.call(null,cljs.core.chunk_rest.call(null,s__15912__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15914),null);
}
} else {
var n = cljs.core.first.call(null,s__15912__$2);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [tic_tac_toe.screens.play.board_square,state,n], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),n], null)),tic_tac_toe$screens$play$iter__15911.call(null,cljs.core.rest.call(null,s__15912__$2)));
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
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.four-grid","div.four-grid",-321265237),(function (){var iter__5480__auto__ = (function tic_tac_toe$screens$play$iter__15915(s__15916){
return (new cljs.core.LazySeq(null,(function (){
var s__15916__$1 = s__15916;
while(true){
var temp__5804__auto__ = cljs.core.seq.call(null,s__15916__$1);
if(temp__5804__auto__){
var s__15916__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__15916__$2)){
var c__5478__auto__ = cljs.core.chunk_first.call(null,s__15916__$2);
var size__5479__auto__ = cljs.core.count.call(null,c__5478__auto__);
var b__15918 = cljs.core.chunk_buffer.call(null,size__5479__auto__);
if((function (){var i__15917 = (0);
while(true){
if((i__15917 < size__5479__auto__)){
var n = cljs.core._nth.call(null,c__5478__auto__,i__15917);
cljs.core.chunk_append.call(null,b__15918,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [tic_tac_toe.screens.play.board_square,state,n], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),n], null)));

var G__15920 = (i__15917 + (1));
i__15917 = G__15920;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15918),tic_tac_toe$screens$play$iter__15915.call(null,cljs.core.chunk_rest.call(null,s__15916__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15918),null);
}
} else {
var n = cljs.core.first.call(null,s__15916__$2);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [tic_tac_toe.screens.play.board_square,state,n], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),n], null)),tic_tac_toe$screens$play$iter__15915.call(null,cljs.core.rest.call(null,s__15916__$2)));
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
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2#play-heading","h2#play-heading",1387918084),(function (){var player = tic_tac_toe.screens.play.read_player.call(null,new cljs.core.Keyword(null,"player","player",-97687400).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state)));
var game_state = new cljs.core.Keyword(null,"game-state","game-state",935682735).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"in-progress","in-progress",2126442630),game_state)){
return [player,"'s turn!"].join('');
} else {
return game_state;
}
})()], null);
});
cljs.core._add_method.call(null,tic_tac_toe.render_screen.render_screen,new cljs.core.Keyword(null,"play","play",-580418022),(function (state){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#board-wrapper","div#board-wrapper",-1589398465),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tic_tac_toe.screens.play.play_heading,state], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tic_tac_toe.screens.play.render_board,state], null)], null);
}));

//# sourceMappingURL=play.js.map
