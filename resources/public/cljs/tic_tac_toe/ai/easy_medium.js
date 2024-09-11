// Compiled by ClojureScript 1.11.132 {:optimizations :none}
goog.provide('tic_tac_toe.ai.easy_medium');
goog.require('cljs.core');
goog.require('tic_tac_toe.eval_board');
tic_tac_toe.ai.easy_medium.played_corner_QMARK_ = (function tic_tac_toe$ai$easy_medium$played_corner_QMARK_(board){
return cljs.core.some.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"o","o",-1350007228),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),cljs.core.map.call(null,(function (p1__17097_SHARP_){
return cljs.core.nth.call(null,board,p1__17097_SHARP_);
}),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(2),(6),(8)], null)));
});
tic_tac_toe.ai.easy_medium.can_win_QMARK_ = (function tic_tac_toe$ai$easy_medium$can_win_QMARK_(path,player){
var and__5000__auto__ = cljs.core._EQ_.call(null,((cljs.core._EQ_.call(null,(4),cljs.core.count.call(null,path)))?(3):(2)),cljs.core.count.call(null,cljs.core.filter.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([player]),path)));
if(and__5000__auto__){
return cljs.core.some.call(null,cljs.core.number_QMARK_,path);
} else {
return and__5000__auto__;
}
});
tic_tac_toe.ai.easy_medium.get_winning_move = (function tic_tac_toe$ai$easy_medium$get_winning_move(board,player){
var paths = tic_tac_toe.eval_board.__GT_paths.call(null,board);
return cljs.core.first.call(null,cljs.core.filter.call(null,cljs.core.number_QMARK_,cljs.core.flatten.call(null,cljs.core.filter.call(null,(function (p1__17101_SHARP_){
return tic_tac_toe.ai.easy_medium.can_win_QMARK_.call(null,p1__17101_SHARP_,player);
}),paths))));
});
tic_tac_toe.ai.easy_medium.find_easy_move = (function tic_tac_toe$ai$easy_medium$find_easy_move(board){
var available = cljs.core.filter.call(null,cljs.core.number_QMARK_,board);
return cljs.core.nth.call(null,available,cljs.core.rand_int.call(null,cljs.core.count.call(null,available)));
});
tic_tac_toe.ai.easy_medium.find_medium_move = (function tic_tac_toe$ai$easy_medium$find_medium_move(board){
if(((cljs.core._EQ_.call(null,(9),cljs.core.count.call(null,board))) && (cljs.core._EQ_.call(null,(1),cljs.core.count.call(null,cljs.core.filter.call(null,cljs.core.keyword_QMARK_,board)))))){
if(cljs.core.truth_(tic_tac_toe.ai.easy_medium.played_corner_QMARK_.call(null,board))){
return (5);
} else {
return (1);
}
} else {
if((!((tic_tac_toe.ai.easy_medium.get_winning_move.call(null,board,new cljs.core.Keyword(null,"x","x",2099068185)) == null)))){
return tic_tac_toe.ai.easy_medium.get_winning_move.call(null,board,new cljs.core.Keyword(null,"x","x",2099068185));
} else {
if((!((tic_tac_toe.ai.easy_medium.get_winning_move.call(null,board,new cljs.core.Keyword(null,"o","o",-1350007228)) == null)))){
return tic_tac_toe.ai.easy_medium.get_winning_move.call(null,board,new cljs.core.Keyword(null,"o","o",-1350007228));
} else {
return tic_tac_toe.ai.easy_medium.find_easy_move.call(null,board);

}
}
}
});

//# sourceMappingURL=easy_medium.js.map
