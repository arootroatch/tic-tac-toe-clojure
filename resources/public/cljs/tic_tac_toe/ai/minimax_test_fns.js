// Compiled by ClojureScript 1.11.132 {:optimizations :none}
goog.provide('tic_tac_toe.ai.minimax_test_fns');
goog.require('cljs.core');
goog.require('clojure.math.combinatorics');
goog.require('tic_tac_toe.ai.minimax');
goog.require('tic_tac_toe.eval_board');
tic_tac_toe.ai.minimax_test_fns.possible_combo_QMARK_ = (function tic_tac_toe$ai$minimax_test_fns$possible_combo_QMARK_(moves){
return ((((((cljs.core._EQ_.call(null,(1),cljs.core.first.call(null,moves))) || (((cljs.core._EQ_.call(null,(3),cljs.core.first.call(null,moves))) || (((cljs.core._EQ_.call(null,(7),cljs.core.first.call(null,moves))) || (cljs.core._EQ_.call(null,(9),cljs.core.first.call(null,moves))))))))) && (cljs.core.not.call(null,cljs.core.some.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [(5),null], null), null),moves))))) || (((((((cljs.core._EQ_.call(null,(2),cljs.core.first.call(null,moves))) || (((cljs.core._EQ_.call(null,(4),cljs.core.first.call(null,moves))) || (cljs.core._EQ_.call(null,(5),cljs.core.first.call(null,moves))))))) && (cljs.core.not.call(null,cljs.core.some.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [(1),null], null), null),moves))))) || (((((cljs.core._EQ_.call(null,(6),cljs.core.first.call(null,moves))) && (cljs.core.not.call(null,cljs.core.some.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [(3),null], null), null),moves))))) || (((cljs.core._EQ_.call(null,(8),cljs.core.first.call(null,moves))) && (cljs.core.not.call(null,cljs.core.some.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [(2),null], null), null),moves))))))))));
});
tic_tac_toe.ai.minimax_test_fns.play_minimax_turn = (function tic_tac_toe$ai$minimax_test_fns$play_minimax_turn(board,player){
var move = tic_tac_toe.ai.minimax.find_best_move_memo.call(null,board,player,false);
return cljs.core.assoc.call(null,board,(move - (1)),player);
});
tic_tac_toe.ai.minimax_test_fns.play_sim_game = (function tic_tac_toe$ai$minimax_test_fns$play_sim_game(coll){
var moves = coll;
var board = new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(3),(4),(5),(6),(7),(8),(9)], null);
var player = cljs.core.cycle.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"o","o",-1350007228)], null));
while(true){
if(cljs.core.not_EQ_.call(null,tic_tac_toe.eval_board.score.call(null,board),new cljs.core.Keyword(null,"in-progress","in-progress",2126442630))){
return tic_tac_toe.eval_board.score.call(null,board);
} else {
if((!(typeof cljs.core.get.call(null,board,(cljs.core.first.call(null,moves) - (1))) === 'number'))){
return "O wins!";
} else {
if(cljs.core._EQ_.call(null,cljs.core.first.call(null,player),new cljs.core.Keyword(null,"x","x",2099068185))){
var G__11744 = cljs.core.rest.call(null,moves);
var G__11745 = cljs.core.assoc.call(null,board,(cljs.core.first.call(null,moves) - (1)),cljs.core.first.call(null,player));
var G__11746 = cljs.core.rest.call(null,player);
moves = G__11744;
board = G__11745;
player = G__11746;
continue;
} else {
var G__11747 = moves;
var G__11748 = tic_tac_toe.ai.minimax_test_fns.play_minimax_turn.call(null,board,cljs.core.first.call(null,player));
var G__11749 = cljs.core.rest.call(null,player);
moves = G__11747;
board = G__11748;
player = G__11749;
continue;

}
}
}
break;
}
});
tic_tac_toe.ai.minimax_test_fns.unbeatable_QMARK_ = (function tic_tac_toe$ai$minimax_test_fns$unbeatable_QMARK_(board){
var all_move_combos = cljs.core.set.call(null,cljs.core.filter.call(null,tic_tac_toe.ai.minimax_test_fns.possible_combo_QMARK_,cljs.core.map.call(null,(function (p1__11739_SHARP_){
return cljs.core.drop_last.call(null,(4),p1__11739_SHARP_);
}),clojure.math.combinatorics.permutations.call(null,cljs.core.vec.call(null,board)))));
var lost_QMARK_ = false;
var game_count = (0);
while(true){
if(((cljs.core.empty_QMARK_.call(null,all_move_combos)) || (lost_QMARK_))){
return (!(lost_QMARK_));
} else {
var G__11756 = cljs.core.rest.call(null,all_move_combos);
var G__11757 = ((cljs.core._EQ_.call(null,"X wins!",tic_tac_toe.ai.minimax_test_fns.play_sim_game.call(null,cljs.core.first.call(null,all_move_combos))))?true:false);
var G__11758 = (game_count + (1));
all_move_combos = G__11756;
lost_QMARK_ = G__11757;
game_count = G__11758;
continue;
}
break;
}
});
tic_tac_toe.ai.minimax_test_fns.play_ai_game = (function tic_tac_toe$ai$minimax_test_fns$play_ai_game(board){
var player = cljs.core.cycle.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"o","o",-1350007228)], null));
var board__$1 = cljs.core.vec.call(null,board);
while(true){
if(cljs.core.not_EQ_.call(null,tic_tac_toe.eval_board.score.call(null,board__$1),new cljs.core.Keyword(null,"in-progress","in-progress",2126442630))){
return tic_tac_toe.eval_board.score.call(null,board__$1);
} else {
var G__11770 = cljs.core.rest.call(null,player);
var G__11771 = tic_tac_toe.ai.minimax_test_fns.play_minimax_turn.call(null,board__$1,cljs.core.first.call(null,player));
player = G__11770;
board__$1 = G__11771;
continue;
}
break;
}
});
tic_tac_toe.ai.minimax_test_fns.always_ties_QMARK_ = (function tic_tac_toe$ai$minimax_test_fns$always_ties_QMARK_(board){
var ties_QMARK_ = true;
var games = cljs.core.range.call(null,(10));
while(true){
if(((cljs.core.empty_QMARK_.call(null,games)) || ((!(ties_QMARK_))))){
return ties_QMARK_;
} else {
var G__11780 = ((cljs.core._EQ_.call(null,"It is a tie!",tic_tac_toe.ai.minimax_test_fns.play_ai_game.call(null,board)))?true:false);
var G__11781 = cljs.core.rest.call(null,games);
ties_QMARK_ = G__11780;
games = G__11781;
continue;
}
break;
}
});

//# sourceMappingURL=minimax_test_fns.js.map
