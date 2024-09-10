// Compiled by ClojureScript 1.11.132 {:optimizations :none}
goog.provide('tic_tac_toe.bot_moves');
goog.require('cljs.core');
goog.require('tic_tac_toe.ai.easy_medium');
goog.require('tic_tac_toe.ai.minimax');
goog.require('tic_tac_toe.player');
goog.require('tic_tac_toe.print_utils');
tic_tac_toe.bot_moves.play_bot_move = (function tic_tac_toe$bot_moves$play_bot_move(move,board,mode,player,ui){
if(cljs.core._EQ_.call(null,ui,new cljs.core.Keyword(null,"tui","tui",-1217057309))){
tic_tac_toe.print_utils.display_bot_move_message.call(null,move,mode,player);
} else {
}

return cljs.core.assoc.call(null,board,(move - (1)),player);
});
cljs.core._add_method.call(null,tic_tac_toe.player.take_turn,(1),(function (p__8423){
var map__8424 = p__8423;
var map__8424__$1 = cljs.core.__destructure_map.call(null,map__8424);
var board = cljs.core.get.call(null,map__8424__$1,new cljs.core.Keyword(null,"board","board",-1907017633));
var mode = cljs.core.get.call(null,map__8424__$1,new cljs.core.Keyword(null,"mode","mode",654403691));
var player = cljs.core.get.call(null,map__8424__$1,new cljs.core.Keyword(null,"player","player",-97687400));
var ui = cljs.core.get.call(null,map__8424__$1,new cljs.core.Keyword(null,"ui","ui",-469653645));
var move = tic_tac_toe.ai.easy_medium.find_easy_move.call(null,board);
return tic_tac_toe.bot_moves.play_bot_move.call(null,move,board,mode,player,ui);
}));
cljs.core._add_method.call(null,tic_tac_toe.player.take_turn,(2),(function (p__8425){
var map__8426 = p__8425;
var map__8426__$1 = cljs.core.__destructure_map.call(null,map__8426);
var board = cljs.core.get.call(null,map__8426__$1,new cljs.core.Keyword(null,"board","board",-1907017633));
var mode = cljs.core.get.call(null,map__8426__$1,new cljs.core.Keyword(null,"mode","mode",654403691));
var player = cljs.core.get.call(null,map__8426__$1,new cljs.core.Keyword(null,"player","player",-97687400));
var ui = cljs.core.get.call(null,map__8426__$1,new cljs.core.Keyword(null,"ui","ui",-469653645));
var move = tic_tac_toe.ai.easy_medium.find_medium_move.call(null,board);
return tic_tac_toe.bot_moves.play_bot_move.call(null,move,board,mode,player,ui);
}));
cljs.core._add_method.call(null,tic_tac_toe.player.take_turn,(3),(function (p__8427){
var map__8428 = p__8427;
var map__8428__$1 = cljs.core.__destructure_map.call(null,map__8428);
var board = cljs.core.get.call(null,map__8428__$1,new cljs.core.Keyword(null,"board","board",-1907017633));
var mode = cljs.core.get.call(null,map__8428__$1,new cljs.core.Keyword(null,"mode","mode",654403691));
var player = cljs.core.get.call(null,map__8428__$1,new cljs.core.Keyword(null,"player","player",-97687400));
var ui = cljs.core.get.call(null,map__8428__$1,new cljs.core.Keyword(null,"ui","ui",-469653645));
var move = tic_tac_toe.ai.minimax.find_best_move_memo.call(null,board,player,ui);
return tic_tac_toe.bot_moves.play_bot_move.call(null,move,board,mode,player,ui);
}));

//# sourceMappingURL=bot_moves.js.map
