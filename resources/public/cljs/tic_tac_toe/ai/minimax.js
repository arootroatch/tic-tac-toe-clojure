// Compiled by ClojureScript 1.11.132 {:optimizations :none}
goog.provide('tic_tac_toe.ai.minimax');
goog.require('cljs.core');
goog.require('tic_tac_toe.ai.easy_medium');
goog.require('tic_tac_toe.ai.lookup_tables');
goog.require('tic_tac_toe.eval_board');
goog.require('tic_tac_toe.player');
goog.require('tic_tac_toe.print_utils');
tic_tac_toe.ai.minimax.get_player_paths = (function tic_tac_toe$ai$minimax$get_player_paths(board,player){
var paths = tic_tac_toe.eval_board.__GT_paths.call(null,board);
return cljs.core.filter.call(null,(function (p1__6583_SHARP_){
var and__5000__auto__ = (!(cljs.core.contains_QMARK_.call(null,cljs.core.set.call(null,p1__6583_SHARP_),tic_tac_toe.player.switch_player.call(null,player))));
if(and__5000__auto__){
return cljs.core.some.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([player]),p1__6583_SHARP_);
} else {
return and__5000__auto__;
}
}),paths);
});
tic_tac_toe.ai.minimax.get_player_moves = (function tic_tac_toe$ai$minimax$get_player_moves(board,player){
return cljs.core.filter.call(null,cljs.core.number_QMARK_,cljs.core.flatten.call(null,tic_tac_toe.ai.minimax.get_player_paths.call(null,board,player)));
});
tic_tac_toe.ai.minimax.get_relevant_moves = (function tic_tac_toe$ai$minimax$get_relevant_moves(board,player){
var available = cljs.core.filter.call(null,cljs.core.number_QMARK_,board);
var opponent_moves = tic_tac_toe.ai.minimax.get_player_moves.call(null,board,tic_tac_toe.player.switch_player.call(null,player));
var player_moves = tic_tac_toe.ai.minimax.get_player_moves.call(null,board,player);
var overlap = cljs.core.filter.call(null,cljs.core.set.call(null,player_moves),cljs.core.set.call(null,opponent_moves));
if((((cljs.core.count.call(null,overlap) > (3))) && ((cljs.core.count.call(null,available) > (16))))){
if((cljs.core.count.call(null,overlap) > (6))){
return cljs.core.take.call(null,(6),overlap);
} else {
return overlap;
}
} else {
if(cljs.core.truth_((function (){var and__5000__auto__ = cljs.core.not_empty.call(null,player_moves);
if(cljs.core.truth_(and__5000__auto__)){
return (cljs.core.count.call(null,available) > (16));
} else {
return and__5000__auto__;
}
})())){
return cljs.core.set.call(null,player_moves);
} else {
if((cljs.core.count.call(null,available) > (16))){
return cljs.core.set.call(null,opponent_moves);
} else {
return available;

}
}
}
});
tic_tac_toe.ai.minimax.minimax_move = (function tic_tac_toe$ai$minimax$minimax_move(board,max_QMARK_,player,depth,alpha,beta){
var available = tic_tac_toe.ai.minimax.get_relevant_moves.call(null,board,player);
var best_score = (cljs.core.truth_(max_QMARK_)?(-1000):(1000));
var new_alpha = alpha;
var new_beta = beta;
while(true){
if(((cljs.core.empty_QMARK_.call(null,available)) || ((alpha > beta)))){
return best_score;
} else {
var move = cljs.core.first.call(null,available);
var new_board = cljs.core.assoc.call(null,board,(move - (1)),player);
var score = tic_tac_toe.ai.minimax.minimax.call(null,new_board,cljs.core.not.call(null,max_QMARK_),(depth + (1)),tic_tac_toe.player.switch_player.call(null,player),new_alpha,new_beta);
if(cljs.core.truth_(max_QMARK_)){
var G__6592 = cljs.core.rest.call(null,available);
var G__6593 = (function (){var x__5087__auto__ = best_score;
var y__5088__auto__ = score;
return ((x__5087__auto__ > y__5088__auto__) ? x__5087__auto__ : y__5088__auto__);
})();
var G__6594 = (function (){var x__5087__auto__ = alpha;
var y__5088__auto__ = score;
return ((x__5087__auto__ > y__5088__auto__) ? x__5087__auto__ : y__5088__auto__);
})();
var G__6595 = beta;
available = G__6592;
best_score = G__6593;
new_alpha = G__6594;
new_beta = G__6595;
continue;
} else {
var G__6596 = cljs.core.rest.call(null,available);
var G__6597 = (function (){var x__5090__auto__ = best_score;
var y__5091__auto__ = score;
return ((x__5090__auto__ < y__5091__auto__) ? x__5090__auto__ : y__5091__auto__);
})();
var G__6598 = alpha;
var G__6599 = (function (){var x__5090__auto__ = beta;
var y__5091__auto__ = score;
return ((x__5090__auto__ < y__5091__auto__) ? x__5090__auto__ : y__5091__auto__);
})();
available = G__6596;
best_score = G__6597;
new_alpha = G__6598;
new_beta = G__6599;
continue;
}
}
break;
}
});
tic_tac_toe.ai.minimax.minimax_move_memo = cljs.core.memoize.call(null,tic_tac_toe.ai.minimax.minimax_move);
tic_tac_toe.ai.minimax.minimax = (function tic_tac_toe$ai$minimax$minimax(board,max_QMARK_,depth,player,alpha,beta){
var maximizer = (cljs.core.truth_(max_QMARK_)?player:tic_tac_toe.player.switch_player.call(null,player));
var game_state = tic_tac_toe.eval_board.evaluate_board.call(null,board,depth,maximizer);
if(cljs.core.not_EQ_.call(null,new cljs.core.Keyword(null,"in-progress","in-progress",2126442630),game_state)){
return game_state;
} else {
if((depth > (4))){
return (0);
} else {
return tic_tac_toe.ai.minimax.minimax_move_memo.call(null,board,max_QMARK_,player,depth,alpha,beta);

}
}
});
tic_tac_toe.ai.minimax.search_with_minimax = (function tic_tac_toe$ai$minimax$search_with_minimax(board,player,gui){
var available = tic_tac_toe.ai.minimax.get_relevant_moves.call(null,board,player);
var best_move = (-1);
var best_score = (-1000);
while(true){
if(cljs.core.not.call(null,gui)){
tic_tac_toe.print_utils.display_bot_thinking_message.call(null,player);
} else {
}

if(cljs.core.empty_QMARK_.call(null,available)){
return best_move;
} else {
var move = cljs.core.first.call(null,available);
var new_board = cljs.core.assoc.call(null,board,(move - (1)),player);
var score = tic_tac_toe.ai.minimax.minimax.call(null,new_board,false,(0),tic_tac_toe.player.switch_player.call(null,player),(-1000),(1000));
var G__6601 = cljs.core.rest.call(null,available);
var G__6602 = (((score > best_score))?move:best_move);
var G__6603 = (function (){var x__5087__auto__ = score;
var y__5088__auto__ = best_score;
return ((x__5087__auto__ > y__5088__auto__) ? x__5087__auto__ : y__5088__auto__);
})();
available = G__6601;
best_move = G__6602;
best_score = G__6603;
continue;
}
break;
}
});
tic_tac_toe.ai.minimax.search_with_minimax_memo = cljs.core.memoize.call(null,tic_tac_toe.ai.minimax.search_with_minimax);
tic_tac_toe.ai.minimax.find_best_move = (function tic_tac_toe$ai$minimax$find_best_move(board,player,gui){
var available = cljs.core.filter.call(null,cljs.core.number_QMARK_,board);
var winning_move = tic_tac_toe.ai.easy_medium.get_winning_move.call(null,board,player);
var blocking_move = tic_tac_toe.ai.easy_medium.get_winning_move.call(null,board,tic_tac_toe.player.switch_player.call(null,player));
var move_table = ((cljs.core._EQ_.call(null,player,new cljs.core.Keyword(null,"x","x",2099068185)))?tic_tac_toe.ai.lookup_tables.move_table_x:tic_tac_toe.ai.lookup_tables.move_table_o);
if(cljs.core.every_QMARK_.call(null,cljs.core.number_QMARK_,board)){
if(cljs.core._EQ_.call(null,(27),cljs.core.count.call(null,board))){
return (14);
} else {
return (1);
}
} else {
if((!((winning_move == null)))){
return winning_move;
} else {
if((!((blocking_move == null)))){
return blocking_move;
} else {
if(((cljs.core._EQ_.call(null,(16),cljs.core.count.call(null,board))) && ((cljs.core.count.call(null,available) >= (12))))){
return cljs.core.first.call(null,available);
} else {
if(((cljs.core._EQ_.call(null,(27),cljs.core.count.call(null,board))) && (typeof cljs.core.nth.call(null,board,(13)) === 'number'))){
return (14);
} else {
if(((cljs.core._EQ_.call(null,(27),cljs.core.count.call(null,board))) && (cljs.core.contains_QMARK_.call(null,move_table,board)))){
return cljs.core.get.call(null,move_table,board);
} else {
return tic_tac_toe.ai.minimax.search_with_minimax_memo.call(null,board,player,gui);

}
}
}
}
}
}
});
tic_tac_toe.ai.minimax.find_best_move_memo = cljs.core.memoize.call(null,tic_tac_toe.ai.minimax.find_best_move);

//# sourceMappingURL=minimax.js.map
