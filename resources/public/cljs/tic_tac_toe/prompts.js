// Compiled by ClojureScript 1.11.132 {:optimizations :none}
goog.provide('tic_tac_toe.prompts');
goog.require('cljs.core');
tic_tac_toe.prompts.mode_prompt = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Please select game mode (X always plays first):","Human vs Human","Human vs Computer (Human plays first)","Computer vs Human (Computer plays first)","Computer vs Computer"], null);
tic_tac_toe.prompts.board_prompt = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Please select board:","3x3","4x4","3x3x3 (3 Dimensional)"], null);
tic_tac_toe.prompts.level_prompt = new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Please select level for player X:","Please select level for player O:","Please select level of difficulty:","Easy","Medium","Hard","Unbeatable"], null);
tic_tac_toe.prompts.resume_prompt = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["There's an unfinished game! Would you like resume?","Yes","No"], null);
tic_tac_toe.prompts.print_mode_selection = (function tic_tac_toe$prompts$print_mode_selection(mode){
var G__20067 = mode;
switch (G__20067) {
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__20067)].join('')));

}
});
tic_tac_toe.prompts.prompt_user_for_mode = (function tic_tac_toe$prompts$prompt_user_for_mode(){
cljs.core.println.call(null,cljs.core.first.call(null,tic_tac_toe.prompts.mode_prompt));

cljs.core.println.call(null,["1 - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,tic_tac_toe.prompts.mode_prompt,(1)))].join(''));

cljs.core.println.call(null,["2 - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,tic_tac_toe.prompts.mode_prompt,(2)))].join(''));

cljs.core.println.call(null,["3 - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,tic_tac_toe.prompts.mode_prompt,(3)))].join(''));

return cljs.core.println.call(null,["4 - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,tic_tac_toe.prompts.mode_prompt,(4)))].join(''));
});
tic_tac_toe.prompts.print_board_selection = (function tic_tac_toe$prompts$print_board_selection(input){
var G__20069 = input;
switch (G__20069) {
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__20069)].join('')));

}
});
tic_tac_toe.prompts.prompt_user_for_board = (function tic_tac_toe$prompts$prompt_user_for_board(){
cljs.core.println.call(null,cljs.core.nth.call(null,tic_tac_toe.prompts.board_prompt,(0)));

cljs.core.println.call(null,["1 - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,tic_tac_toe.prompts.board_prompt,(1)))].join(''));

cljs.core.println.call(null,["2 - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,tic_tac_toe.prompts.board_prompt,(2)))].join(''));

return cljs.core.println.call(null,["3 - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,tic_tac_toe.prompts.board_prompt,(3)))].join(''));
});
tic_tac_toe.prompts.print_level_selection = (function tic_tac_toe$prompts$print_level_selection(level,mode,board){
var G__20071 = level;
switch (G__20071) {
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__20071)].join('')));

}
});
tic_tac_toe.prompts.prompt_user_for_level = (function tic_tac_toe$prompts$prompt_user_for_level(ai,mode,board){
if(((cljs.core._EQ_.call(null,ai,(1))) && (cljs.core._EQ_.call(null,mode,(4))))){
cljs.core.println.call(null,cljs.core.nth.call(null,tic_tac_toe.prompts.level_prompt,(0)));
} else {
if(((cljs.core._EQ_.call(null,ai,(2))) && (cljs.core._EQ_.call(null,mode,(4))))){
cljs.core.println.call(null,cljs.core.nth.call(null,tic_tac_toe.prompts.level_prompt,(1)));
} else {
cljs.core.println.call(null,cljs.core.nth.call(null,tic_tac_toe.prompts.level_prompt,(2)));

}
}

cljs.core.println.call(null,["1 - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,tic_tac_toe.prompts.level_prompt,(3)))].join(''));

cljs.core.println.call(null,["2 - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,tic_tac_toe.prompts.level_prompt,(4)))].join(''));

if(((cljs.core._EQ_.call(null,(2),mode)) && (cljs.core._EQ_.call(null,(3),board)))){
return cljs.core.println.call(null,["3 - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,tic_tac_toe.prompts.level_prompt,(5)))].join(''));
} else {
return cljs.core.println.call(null,["3 - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,tic_tac_toe.prompts.level_prompt,(6)))].join(''));
}
});
tic_tac_toe.prompts.print_resume_selection = (function tic_tac_toe$prompts$print_resume_selection(input){
var G__20073 = input;
switch (G__20073) {
case (1):
return cljs.core.println.call(null,"Game resumed!\n");

break;
case (2):
return cljs.core.println.call(null,"New game started!\n");

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__20073)].join('')));

}
});
tic_tac_toe.prompts.prompt_user_to_resume = (function tic_tac_toe$prompts$prompt_user_to_resume(){
cljs.core.println.call(null,cljs.core.first.call(null,tic_tac_toe.prompts.resume_prompt));

cljs.core.println.call(null,["1 - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,tic_tac_toe.prompts.resume_prompt,(1)))].join(''));

return cljs.core.println.call(null,["2 - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,tic_tac_toe.prompts.resume_prompt,(2)))].join(''));
});

//# sourceMappingURL=prompts.js.map
