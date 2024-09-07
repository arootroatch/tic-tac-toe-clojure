// Compiled by ClojureScript 1.11.132 {:optimizations :none}
goog.provide('tic_tac_toe.print_utils');
goog.require('cljs.core');
tic_tac_toe.print_utils.display_invalid_move_error = (function tic_tac_toe$print_utils$display_invalid_move_error(){
return cljs.core.println.call(null,"Please choose an empty cell");
});
tic_tac_toe.print_utils.prompt_user_for_move = (function tic_tac_toe$print_utils$prompt_user_for_move(player,mode,board){
var letter = cljs.core.name.call(null,player).toUpperCase();
if(((cljs.core._EQ_.call(null,(1),mode)) && (cljs.core._EQ_.call(null,(16),cljs.core.count.call(null,board))))){
return cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(letter),"'s turn!\nPlease enter your move (type 1-16 and hit enter):"].join(''));
} else {
if(cljs.core._EQ_.call(null,(1),mode)){
return cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(letter),"'s turn!\nPlease enter your move (type 1-9 and hit enter):"].join(''));
} else {
if(cljs.core._EQ_.call(null,(16),cljs.core.count.call(null,board))){
return cljs.core.println.call(null,"Please enter your move (type 1-16 and hit enter):");
} else {
return cljs.core.println.call(null,"Please enter your move (type 1-9 and hit enter):");

}
}
}
});
tic_tac_toe.print_utils.display_bot_thinking_message = (function tic_tac_toe$print_utils$display_bot_thinking_message(player){
return cljs.core.println.call(null,["Player ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,player).toUpperCase())," is thinking..."].join(''));
});
tic_tac_toe.print_utils.display_bot_move_message = (function tic_tac_toe$print_utils$display_bot_move_message(move,mode,player){
if(cljs.core._EQ_.call(null,mode,(4))){
return cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,player).toUpperCase())," plays ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(move),"!"].join(''));
} else {
return cljs.core.println.call(null,["Your opponent plays ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(move),"!"].join(''));
}
});
tic_tac_toe.print_utils.print_board_selection = (function tic_tac_toe$print_utils$print_board_selection(input){
var G__8407 = input;
switch (G__8407) {
case (1):
return cljs.core.println.call(null,"3x3 board activated!\n");

break;
case (2):
return cljs.core.println.call(null,"4x4 board activated!\n");

break;
case (3):
return cljs.core.println.call(null,"3 dimensional board activated!\n");

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__8407)].join('')));

}
});
tic_tac_toe.print_utils.board_prompt = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Please select board:","3x3","4x4","3x3x3 (3 Dimensional)"], null);
tic_tac_toe.print_utils.prompt_user_for_board = (function tic_tac_toe$print_utils$prompt_user_for_board(){
cljs.core.println.call(null,cljs.core.nth.call(null,tic_tac_toe.print_utils.board_prompt,(0)));

cljs.core.println.call(null,["1 - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,tic_tac_toe.print_utils.board_prompt,(1)))].join(''));

cljs.core.println.call(null,["2 - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,tic_tac_toe.print_utils.board_prompt,(2)))].join(''));

return cljs.core.println.call(null,["3 - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,tic_tac_toe.print_utils.board_prompt,(3)))].join(''));
});
tic_tac_toe.print_utils.print_level_selection = (function tic_tac_toe$print_utils$print_level_selection(level,mode,board){
var G__8409 = level;
switch (G__8409) {
case (1):
return cljs.core.println.call(null,"Easy mode activated!\n");

break;
case (2):
return cljs.core.println.call(null,"Medium mode activated!\n");

break;
case (3):
if(((cljs.core._EQ_.call(null,(3),board)) && (cljs.core._EQ_.call(null,(2),mode)))){
return cljs.core.println.call(null,"Hard mode activated!\n");
} else {
return cljs.core.println.call(null,"Unbeatable mode activated!\n");
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__8409)].join('')));

}
});
tic_tac_toe.print_utils.level_prompt = new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Please select level for player X:","Please select level for player O:","Please select level of difficulty:","Easy","Medium","Hard","Unbeatable"], null);
tic_tac_toe.print_utils.prompt_user_for_level = (function tic_tac_toe$print_utils$prompt_user_for_level(ai,mode,board){
if(((cljs.core._EQ_.call(null,ai,(1))) && (cljs.core._EQ_.call(null,mode,(4))))){
cljs.core.println.call(null,cljs.core.nth.call(null,tic_tac_toe.print_utils.level_prompt,(0)));
} else {
if(((cljs.core._EQ_.call(null,ai,(2))) && (cljs.core._EQ_.call(null,mode,(4))))){
cljs.core.println.call(null,cljs.core.nth.call(null,tic_tac_toe.print_utils.level_prompt,(1)));
} else {
cljs.core.println.call(null,cljs.core.nth.call(null,tic_tac_toe.print_utils.level_prompt,(2)));

}
}

cljs.core.println.call(null,["1 - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,tic_tac_toe.print_utils.level_prompt,(3)))].join(''));

cljs.core.println.call(null,["2 - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,tic_tac_toe.print_utils.level_prompt,(4)))].join(''));

if(((cljs.core._EQ_.call(null,(2),mode)) && (cljs.core._EQ_.call(null,(3),board)))){
return cljs.core.println.call(null,["3 - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,tic_tac_toe.print_utils.level_prompt,(5)))].join(''));
} else {
return cljs.core.println.call(null,["3 - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,tic_tac_toe.print_utils.level_prompt,(6)))].join(''));
}
});
tic_tac_toe.print_utils.print_mode_selection = (function tic_tac_toe$print_utils$print_mode_selection(mode){
var G__8411 = mode;
switch (G__8411) {
case (1):
return cljs.core.println.call(null,"Human vs Human activated!\n");

break;
case (2):
return cljs.core.println.call(null,"Human vs Computer activated!\n");

break;
case (3):
return cljs.core.println.call(null,"Computer vs Human activated!\n");

break;
case (4):
return cljs.core.println.call(null,"Computer vs Computer activated!\n");

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__8411)].join('')));

}
});
tic_tac_toe.print_utils.mode_prompt = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Please select game mode (X always plays first):","Human vs Human","Human vs Computer (Human plays first)","Computer vs Human (Computer plays first)","Computer vs Computer"], null);
tic_tac_toe.print_utils.prompt_user_for_mode = (function tic_tac_toe$print_utils$prompt_user_for_mode(){
cljs.core.println.call(null,cljs.core.first.call(null,tic_tac_toe.print_utils.mode_prompt));

cljs.core.println.call(null,["1 - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,tic_tac_toe.print_utils.mode_prompt,(1)))].join(''));

cljs.core.println.call(null,["2 - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,tic_tac_toe.print_utils.mode_prompt,(2)))].join(''));

cljs.core.println.call(null,["3 - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,tic_tac_toe.print_utils.mode_prompt,(3)))].join(''));

return cljs.core.println.call(null,["4 - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,tic_tac_toe.print_utils.mode_prompt,(4)))].join(''));
});
tic_tac_toe.print_utils.print_resume_selection = (function tic_tac_toe$print_utils$print_resume_selection(input){
var G__8413 = input;
switch (G__8413) {
case (1):
return cljs.core.println.call(null,"Game resumed!\n");

break;
case (2):
return cljs.core.println.call(null,"New game started!\n");

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__8413)].join('')));

}
});
tic_tac_toe.print_utils.resume_prompt = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["There's an unfinished game! Would you like resume?","Yes","No"], null);
tic_tac_toe.print_utils.prompt_user_to_resume = (function tic_tac_toe$print_utils$prompt_user_to_resume(){
cljs.core.println.call(null,cljs.core.first.call(null,tic_tac_toe.print_utils.resume_prompt));

cljs.core.println.call(null,["1 - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,tic_tac_toe.print_utils.resume_prompt,(1)))].join(''));

return cljs.core.println.call(null,["2 - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,tic_tac_toe.print_utils.resume_prompt,(2)))].join(''));
});
tic_tac_toe.print_utils.purple = "\u001B[35m";
tic_tac_toe.print_utils.reset = "\u001B[0m";
tic_tac_toe.print_utils.format_board = (function tic_tac_toe$print_utils$format_board(board){
return cljs.core.map.call(null,(function (p1__8415_SHARP_){
if((p1__8415_SHARP_ instanceof cljs.core.Keyword)){
return [" ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,p1__8415_SHARP_).toUpperCase())].join('');
} else {
if((p1__8415_SHARP_ < (10))){
return [" ",tic_tac_toe.print_utils.purple,cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__8415_SHARP_),tic_tac_toe.print_utils.reset].join('');
} else {
return [tic_tac_toe.print_utils.purple,cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__8415_SHARP_),tic_tac_toe.print_utils.reset].join('');

}
}
}),board);
});
if((typeof tic_tac_toe !== 'undefined') && (typeof tic_tac_toe.print_utils !== 'undefined') && (typeof tic_tac_toe.print_utils.print_board !== 'undefined')){
} else {
tic_tac_toe.print_utils.print_board = (function (){var method_table__5599__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5600__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5601__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5602__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5603__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"tic-tac-toe.print-utils","print-board"),cljs.core.count,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5603__auto__,method_table__5599__auto__,prefer_table__5600__auto__,method_cache__5601__auto__,cached_hierarchy__5602__auto__));
})();
}
cljs.core._add_method.call(null,tic_tac_toe.print_utils.print_board,(9),(function (board){
var board__$1 = tic_tac_toe.print_utils.format_board.call(null,board);
return cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,board__$1))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,board__$1))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,board__$1,(2))),"\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,board__$1,(3)))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,board__$1,(4)))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,board__$1,(5))),"\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,board__$1,(6)))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,board__$1,(7)))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,board__$1,(8))),"\n"].join(''));
}));
cljs.core._add_method.call(null,tic_tac_toe.print_utils.print_board,(16),(function (board){
var board__$1 = tic_tac_toe.print_utils.format_board.call(null,board);
return cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,board__$1))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,board__$1))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,board__$1,(2)))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,board__$1,(3))),"\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,board__$1,(4)))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,board__$1,(5)))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,board__$1,(6)))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,board__$1,(7))),"\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,board__$1,(8)))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,board__$1,(9)))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,board__$1,(10)))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,board__$1,(11))),"\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,board__$1,(12)))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,board__$1,(13)))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,board__$1,(14)))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,board__$1,(15))),"\n"].join(''));
}));
cljs.core._add_method.call(null,tic_tac_toe.print_utils.print_board,(27),(function (board){
var top_board = cljs.core.first.call(null,cljs.core.partition.call(null,(9),board));
var middle_board = cljs.core.second.call(null,cljs.core.partition.call(null,(9),board));
var bottom_board = cljs.core.last.call(null,cljs.core.partition.call(null,(9),board));
tic_tac_toe.print_utils.print_board.call(null,top_board);

tic_tac_toe.print_utils.print_board.call(null,middle_board);

return tic_tac_toe.print_utils.print_board.call(null,bottom_board);
}));
tic_tac_toe.print_utils.display_no_moves_error = (function tic_tac_toe$print_utils$display_no_moves_error(){
return cljs.core.println.call(null,"There are no moves to show for this game.");
});
tic_tac_toe.print_utils.play_logged_game = (function tic_tac_toe$print_utils$play_logged_game(moves,winner){
if(cljs.core.empty_QMARK_.call(null,moves)){
return tic_tac_toe.print_utils.display_no_moves_error.call(null);
} else {
cljs.core.run_BANG_.call(null,tic_tac_toe.print_utils.print_board,moves);

return cljs.core.println.call(null,winner);
}
});
tic_tac_toe.print_utils.display_unfinished_game_error = (function tic_tac_toe$print_utils$display_unfinished_game_error(){
return cljs.core.println.call(null,"The requested game is unfinished. Please choose a completed game to replay.");
});
tic_tac_toe.print_utils.display_invalid_game_id_error = (function tic_tac_toe$print_utils$display_invalid_game_id_error(id){
return cljs.core.println.call(null,["There is no game with ID ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)].join(''));
});
tic_tac_toe.print_utils.display_command_options = (function tic_tac_toe$print_utils$display_command_options(){
cljs.core.println.call(null,"Please enter your preferences:");

cljs.core.println.call(null,"Format: 'lein run <ui> <db> <game id>");

cljs.core.println.call(null,"<db> is the only required field\n");

cljs.core.println.call(null,"--psqldb         Run with PostgreSQL");

cljs.core.println.call(null,"--edndb         Run with EDN Database");

cljs.core.println.call(null,"gui             Run GUI");

return cljs.core.println.call(null,"--game <id>     Run GUI");
});

//# sourceMappingURL=print_utils.js.map
