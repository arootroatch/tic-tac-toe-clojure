// Compiled by ClojureScript 1.11.132 {:optimizations :none}
goog.provide('tic_tac_toe.eval_board');
goog.require('cljs.core');
if((typeof tic_tac_toe !== 'undefined') && (typeof tic_tac_toe.eval_board !== 'undefined') && (typeof tic_tac_toe.eval_board.__GT_paths !== 'undefined')){
} else {
tic_tac_toe.eval_board.__GT_paths = (function (){var method_table__5599__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5600__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5601__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5602__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5603__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"tic-tac-toe.eval-board","->paths"),cljs.core.count,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5603__auto__,method_table__5599__auto__,prefer_table__5600__auto__,method_cache__5601__auto__,cached_hierarchy__5602__auto__));
})();
}
cljs.core._add_method.call(null,tic_tac_toe.eval_board.__GT_paths,(9),(function (board){

return cljs.core.concat.call(null,cljs.core.partition.call(null,(3),board),cljs.core.map.call(null,(function (p1__16030_SHARP_){
return cljs.core.take_nth.call(null,(3),cljs.core.drop.call(null,p1__16030_SHARP_,board));
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1),(2)], null)),(new cljs.core.List(null,cljs.core.take_nth.call(null,(4),board),(new cljs.core.List(null,cljs.core.take_nth.call(null,(2),cljs.core.drop_last.call(null,cljs.core.drop.call(null,(2),board))),null,(1),null)),(2),null)));
}));
cljs.core._add_method.call(null,tic_tac_toe.eval_board.__GT_paths,(16),(function (board){

return cljs.core.concat.call(null,cljs.core.partition.call(null,(4),board),cljs.core.map.call(null,(function (p1__16033_SHARP_){
return cljs.core.take_nth.call(null,(4),cljs.core.drop.call(null,p1__16033_SHARP_,board));
}),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1),(2),(3)], null)),(new cljs.core.List(null,cljs.core.take_nth.call(null,(5),board),(new cljs.core.List(null,cljs.core.take_nth.call(null,(3),cljs.core.drop_last.call(null,cljs.core.drop.call(null,(3),board))),null,(1),null)),(2),null)));
}));
tic_tac_toe.eval_board.__GT_3D_diagonals = (function tic_tac_toe$eval_board$__GT_3D_diagonals(board){
return (new cljs.core.List(null,cljs.core.take_nth.call(null,(13),board),(new cljs.core.List(null,cljs.core.take_nth.call(null,(11),cljs.core.drop.call(null,(2),board)),(new cljs.core.List(null,cljs.core.take_nth.call(null,(7),cljs.core.drop.call(null,(6),board)),(new cljs.core.List(null,cljs.core.drop_last.call(null,cljs.core.take_nth.call(null,(5),cljs.core.drop.call(null,(8),board))),null,(1),null)),(2),null)),(3),null)),(4),null));
});
tic_tac_toe.eval_board.__GT_2D_diagonals = (function tic_tac_toe$eval_board$__GT_2D_diagonals(board){
return cljs.core.concat.call(null,cljs.core.map.call(null,(function (p1__16035_SHARP_){
return cljs.core.take.call(null,(3),cljs.core.take_nth.call(null,(4),cljs.core.drop.call(null,p1__16035_SHARP_,board)));
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(9),(18)], null)),cljs.core.map.call(null,(function (p1__16036_SHARP_){
return cljs.core.take.call(null,(3),cljs.core.take_nth.call(null,(2),cljs.core.drop.call(null,p1__16036_SHARP_,board)));
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(11),(20)], null)));
});
cljs.core._add_method.call(null,tic_tac_toe.eval_board.__GT_paths,(27),(function (board){

return cljs.core.concat.call(null,cljs.core.partition.call(null,(3),board),cljs.core.map.call(null,(function (p1__16037_SHARP_){
return cljs.core.take.call(null,(3),cljs.core.take_nth.call(null,(3),cljs.core.drop.call(null,p1__16037_SHARP_,board)));
}),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1),(2),(9),(10),(11),(18),(19),(20)], null)),tic_tac_toe.eval_board.__GT_2D_diagonals.call(null,board),tic_tac_toe.eval_board.__GT_3D_diagonals.call(null,board),cljs.core.map.call(null,(function (p1__16038_SHARP_){
return cljs.core.take_nth.call(null,(9),cljs.core.drop.call(null,p1__16038_SHARP_,board));
}),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1),(2),(3),(4),(5),(6),(7),(8)], null)));
}));
tic_tac_toe.eval_board.score = (function tic_tac_toe$eval_board$score(board){
var paths = tic_tac_toe.eval_board.__GT_paths.call(null,board);
if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__16042_SHARP_){
return cljs.core.every_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),p1__16042_SHARP_);
}),paths))){
return "X wins!";
} else {
if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__16043_SHARP_){
return cljs.core.every_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"o","o",-1350007228),null], null), null),p1__16043_SHARP_);
}),paths))){
return "O wins!";
} else {
if(cljs.core.every_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"o","o",-1350007228),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),board)){
return "It is a tie!";
} else {
return new cljs.core.Keyword(null,"in-progress","in-progress",2126442630);

}
}
}
});
tic_tac_toe.eval_board.evaluate_board = (function tic_tac_toe$eval_board$evaluate_board(board,depth,maximizer){
var paths = tic_tac_toe.eval_board.__GT_paths.call(null,board);
var minimizer = ((cljs.core._EQ_.call(null,maximizer,new cljs.core.Keyword(null,"x","x",2099068185)))?new cljs.core.Keyword(null,"o","o",-1350007228):new cljs.core.Keyword(null,"x","x",2099068185));
if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__16044_SHARP_){
return cljs.core.every_QMARK_.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([minimizer]),p1__16044_SHARP_);
}),paths))){
return ((-10) + depth);
} else {
if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__16045_SHARP_){
return cljs.core.every_QMARK_.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([maximizer]),p1__16045_SHARP_);
}),paths))){
return ((10) - depth);
} else {
if(cljs.core.every_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"o","o",-1350007228),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),board)){
return (0);
} else {
return new cljs.core.Keyword(null,"in-progress","in-progress",2126442630);

}
}
}
});

//# sourceMappingURL=eval_board.js.map
