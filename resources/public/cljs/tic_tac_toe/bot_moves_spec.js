// Compiled by ClojureScript 1.11.132 {:optimizations :none}
goog.provide('tic_tac_toe.bot_moves_spec');
goog.require('cljs.core');
goog.require('speclj.core');
goog.require('speclj.stub');
goog.require('tic_tac_toe.print_utils');
goog.require('tic_tac_toe.ai.easy_medium');
goog.require('tic_tac_toe.ai.minimax');
goog.require('tic_tac_toe.bot_moves');
goog.require('tic_tac_toe.player');
var description__7638__auto___8473 = speclj.components.new_description.call(null,"playing bot moves",false,"tic-tac-toe.bot-moves-spec");
var _STAR_parent_description_STAR__orig_val__8162_8474 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__8163_8475 = description__7638__auto___8473;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__8163_8475);

try{var seq__8164_8476 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,4,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_around.call(null,((function (_STAR_parent_description_STAR__orig_val__8162_8474,_STAR_parent_description_STAR__temp_val__8163_8475,description__7638__auto___8473){
return (function (it__8008__auto__){
var _STAR_stubbed_invocations_STAR__orig_val__8359 = speclj.stub._STAR_stubbed_invocations_STAR_;
var _STAR_stubbed_invocations_STAR__temp_val__8360 = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
(speclj.stub._STAR_stubbed_invocations_STAR_ = _STAR_stubbed_invocations_STAR__temp_val__8360);

try{return it__8008__auto__.call(null);
}finally {(speclj.stub._STAR_stubbed_invocations_STAR_ = _STAR_stubbed_invocations_STAR__orig_val__8359);
}});})(_STAR_parent_description_STAR__orig_val__8162_8474,_STAR_parent_description_STAR__temp_val__8163_8475,description__7638__auto___8473))
),speclj.components.new_around.call(null,((function (_STAR_parent_description_STAR__orig_val__8162_8474,_STAR_parent_description_STAR__temp_val__8163_8475,description__7638__auto___8473){
return (function (it__7700__auto__){
var println_orig_val__8361 = cljs.core.println;
var println_temp_val__8362 = speclj.stub.stub.call(null,new cljs.core.Keyword(null,"println","println",1920840330),cljs.core.PersistentArrayMap.EMPTY);
(cljs.core.println = println_temp_val__8362);

try{return it__7700__auto__.call(null);
}finally {(cljs.core.println = println_orig_val__8361);
}});})(_STAR_parent_description_STAR__orig_val__8162_8474,_STAR_parent_description_STAR__temp_val__8163_8475,description__7638__auto___8473))
),(function (){var description__7638__auto____$1 = speclj.components.new_description.call(null,"defmethods",false,"tic-tac-toe.bot-moves-spec");
var _STAR_parent_description_STAR__orig_val__8363_8490 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__8364_8491 = description__7638__auto____$1;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__8364_8491);

try{var seq__8365_8492 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,5,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_around.call(null,((function (_STAR_parent_description_STAR__orig_val__8363_8490,_STAR_parent_description_STAR__temp_val__8364_8491,description__7638__auto____$1,_STAR_parent_description_STAR__orig_val__8162_8474,_STAR_parent_description_STAR__temp_val__8163_8475,description__7638__auto___8473){
return (function (it__7700__auto__){
var find_easy_move_orig_val__8399 = tic_tac_toe.ai.easy_medium.find_easy_move;
var find_medium_move_orig_val__8400 = tic_tac_toe.ai.easy_medium.find_medium_move;
var find_best_move_memo_orig_val__8401 = tic_tac_toe.ai.minimax.find_best_move_memo;
var play_bot_move_orig_val__8402 = tic_tac_toe.bot_moves.play_bot_move;
var find_easy_move_temp_val__8403 = speclj.stub.stub.call(null,new cljs.core.Keyword(null,"find-easy-move","find-easy-move",1506541355),cljs.core.PersistentArrayMap.EMPTY);
var find_medium_move_temp_val__8404 = speclj.stub.stub.call(null,new cljs.core.Keyword(null,"find-medium-move","find-medium-move",1971910015),cljs.core.PersistentArrayMap.EMPTY);
var find_best_move_memo_temp_val__8405 = speclj.stub.stub.call(null,new cljs.core.Keyword(null,"find-best-move","find-best-move",-369337667),cljs.core.PersistentArrayMap.EMPTY);
var play_bot_move_temp_val__8406 = speclj.stub.stub.call(null,new cljs.core.Keyword(null,"play-bot-move","play-bot-move",448549335),cljs.core.PersistentArrayMap.EMPTY);
(tic_tac_toe.ai.easy_medium.find_easy_move = find_easy_move_temp_val__8403);

(tic_tac_toe.ai.easy_medium.find_medium_move = find_medium_move_temp_val__8404);

(tic_tac_toe.ai.minimax.find_best_move_memo = find_best_move_memo_temp_val__8405);

(tic_tac_toe.bot_moves.play_bot_move = play_bot_move_temp_val__8406);

try{return it__7700__auto__.call(null);
}finally {(tic_tac_toe.bot_moves.play_bot_move = play_bot_move_orig_val__8402);

(tic_tac_toe.ai.minimax.find_best_move_memo = find_best_move_memo_orig_val__8401);

(tic_tac_toe.ai.easy_medium.find_medium_move = find_medium_move_orig_val__8400);

(tic_tac_toe.ai.easy_medium.find_easy_move = find_easy_move_orig_val__8399);
}});})(_STAR_parent_description_STAR__orig_val__8363_8490,_STAR_parent_description_STAR__temp_val__8364_8491,description__7638__auto____$1,_STAR_parent_description_STAR__orig_val__8162_8474,_STAR_parent_description_STAR__temp_val__8163_8475,description__7638__auto___8473))
),speclj.components.new_characteristic.call(null,"calls find-easy-move",((function (_STAR_parent_description_STAR__orig_val__8363_8490,_STAR_parent_description_STAR__temp_val__8364_8491,description__7638__auto____$1,_STAR_parent_description_STAR__orig_val__8162_8474,_STAR_parent_description_STAR__temp_val__8163_8475,description__7638__auto___8473){
return (function (){
tic_tac_toe.player.take_turn.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"first-ai-level","first-ai-level",1004633644),(1),new cljs.core.Keyword(null,"board","board",-1907017633),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(3),(4),(5),(6),(7),(8),(9)], null),new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"o","o",-1350007228),new cljs.core.Keyword(null,"mode","mode",654403691),(2),new cljs.core.Keyword(null,"second-ai-level","second-ai-level",-418730455),null], null));

tic_tac_toe.player.take_turn.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"first-ai-level","first-ai-level",1004633644),(1),new cljs.core.Keyword(null,"board","board",-1907017633),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),(2),(3),(4),(5),(6),(7),(8),(9)], null),new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"o","o",-1350007228),new cljs.core.Keyword(null,"mode","mode",654403691),(2),new cljs.core.Keyword(null,"second-ai-level","second-ai-level",-418730455),null], null));

var expected__7775__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(3),(4),(5),(6),(7),(8),(9)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),(2),(3),(4),(5),(6),(7),(8),(9)], null)], null)], null);
var actual__7776__auto__ = speclj.stub.invocations_of.call(null,new cljs.core.Keyword(null,"find-easy-move","find-easy-move",1506541355));
if(cljs.core._EQ_.call(null,expected__7775__auto__,actual__7776__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__7775__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7743__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7743__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__7776__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7743__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7743__auto__);
}
})()," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__8363_8490,_STAR_parent_description_STAR__temp_val__8364_8491,description__7638__auto____$1,_STAR_parent_description_STAR__orig_val__8162_8474,_STAR_parent_description_STAR__temp_val__8163_8475,description__7638__auto___8473))
,false),speclj.components.new_characteristic.call(null,"calls find-medium-move",((function (_STAR_parent_description_STAR__orig_val__8363_8490,_STAR_parent_description_STAR__temp_val__8364_8491,description__7638__auto____$1,_STAR_parent_description_STAR__orig_val__8162_8474,_STAR_parent_description_STAR__temp_val__8163_8475,description__7638__auto___8473){
return (function (){
tic_tac_toe.player.take_turn.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"first-ai-level","first-ai-level",1004633644),(2),new cljs.core.Keyword(null,"board","board",-1907017633),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(3),(4),(5),(6),(7),(8),(9)], null),new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"mode","mode",654403691),(3),new cljs.core.Keyword(null,"second-ai-level","second-ai-level",-418730455),null], null));

tic_tac_toe.player.take_turn.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"second-ai-level","second-ai-level",-418730455),(2),new cljs.core.Keyword(null,"board","board",-1907017633),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),(2),(3),(4),(5),(6),(7),(8),(9)], null),new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"o","o",-1350007228),new cljs.core.Keyword(null,"mode","mode",654403691),(4),new cljs.core.Keyword(null,"first-ai-level","first-ai-level",1004633644),(1)], null));

var expected__7775__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(3),(4),(5),(6),(7),(8),(9)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),(2),(3),(4),(5),(6),(7),(8),(9)], null)], null)], null);
var actual__7776__auto__ = speclj.stub.invocations_of.call(null,new cljs.core.Keyword(null,"find-medium-move","find-medium-move",1971910015));
if(cljs.core._EQ_.call(null,expected__7775__auto__,actual__7776__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__7775__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7743__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7743__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__7776__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7743__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7743__auto__);
}
})()," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__8363_8490,_STAR_parent_description_STAR__temp_val__8364_8491,description__7638__auto____$1,_STAR_parent_description_STAR__orig_val__8162_8474,_STAR_parent_description_STAR__temp_val__8163_8475,description__7638__auto___8473))
,false),speclj.components.new_characteristic.call(null,"calls find-best-move",((function (_STAR_parent_description_STAR__orig_val__8363_8490,_STAR_parent_description_STAR__temp_val__8364_8491,description__7638__auto____$1,_STAR_parent_description_STAR__orig_val__8162_8474,_STAR_parent_description_STAR__temp_val__8163_8475,description__7638__auto___8473){
return (function (){
tic_tac_toe.player.take_turn.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"first-ai-level","first-ai-level",1004633644),(3),new cljs.core.Keyword(null,"board","board",-1907017633),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(3),(4),(5),(6),(7),(8),(9)], null),new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"mode","mode",654403691),(4),new cljs.core.Keyword(null,"second-ai-level","second-ai-level",-418730455),null], null));

tic_tac_toe.player.take_turn.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"second-ai-level","second-ai-level",-418730455),(3),new cljs.core.Keyword(null,"board","board",-1907017633),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),(2),(3),(4),(5),(6),(7),(8),(9)], null),new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"o","o",-1350007228),new cljs.core.Keyword(null,"mode","mode",654403691),(4),new cljs.core.Keyword(null,"first-ai-level","first-ai-level",1004633644),(1)], null));

var expected__7775__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(3),(4),(5),(6),(7),(8),(9)], null),new cljs.core.Keyword(null,"x","x",2099068185),null], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),(2),(3),(4),(5),(6),(7),(8),(9)], null),new cljs.core.Keyword(null,"o","o",-1350007228),null], null)], null);
var actual__7776__auto__ = speclj.stub.invocations_of.call(null,new cljs.core.Keyword(null,"find-best-move","find-best-move",-369337667));
if(cljs.core._EQ_.call(null,expected__7775__auto__,actual__7776__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__7775__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7743__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7743__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__7776__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7743__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7743__auto__);
}
})()," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__8363_8490,_STAR_parent_description_STAR__temp_val__8364_8491,description__7638__auto____$1,_STAR_parent_description_STAR__orig_val__8162_8474,_STAR_parent_description_STAR__temp_val__8163_8475,description__7638__auto___8473))
,false),speclj.components.new_characteristic.call(null,"plays the bot move to the board",((function (_STAR_parent_description_STAR__orig_val__8363_8490,_STAR_parent_description_STAR__temp_val__8364_8491,description__7638__auto____$1,_STAR_parent_description_STAR__orig_val__8162_8474,_STAR_parent_description_STAR__temp_val__8163_8475,description__7638__auto___8473){
return (function (){
tic_tac_toe.player.take_turn.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"first-ai-level","first-ai-level",1004633644),(1),new cljs.core.Keyword(null,"board","board",-1907017633),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(3),(4),(5),(6),(7),(8),(9)], null),new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"o","o",-1350007228),new cljs.core.Keyword(null,"mode","mode",654403691),(2)], null));

var name__8022__auto__ = new cljs.core.Keyword(null,"play-bot-move","play-bot-move",448549335);
var options__8023__auto__ = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"with","with",-1536296876),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(3),(4),(5),(6),(7),(8),(9)], null),(2),new cljs.core.Keyword(null,"o","o",-1350007228),null], null)], null);
var invocations__8024__auto__ = speclj.stub.invocations_of.call(null,name__8022__auto__);
var times__8025__auto__ = new cljs.core.Keyword(null,"times","times",1671571467).cljs$core$IFn$_invoke$arity$1(options__8023__auto__);
var times_QMARK___8026__auto__ = typeof times__8025__auto__ === 'number';
var check_params_QMARK___8027__auto__ = cljs.core.contains_QMARK_.call(null,options__8023__auto__,new cljs.core.Keyword(null,"with","with",-1536296876));
var with__8028__auto__ = new cljs.core.Keyword(null,"with","with",-1536296876).cljs$core$IFn$_invoke$arity$1(options__8023__auto__);
var with__8028__auto____$1 = (((with__8028__auto__ == null))?cljs.core.PersistentVector.EMPTY:with__8028__auto__);
var invocations_str__8029__auto__ = (function (p1__8019__8030__auto__){
if(cljs.core._EQ_.call(null,(1),p1__8019__8030__auto__)){
return "invocation";
} else {
return "invocations";
}
});
if(((times_QMARK___8026__auto__) && (check_params_QMARK___8027__auto__))){
var matching_invocations__8031__auto__ = cljs.core.filter.call(null,(function (p1__8020__8032__auto__){
return speclj.stub.params_match_QMARK_.call(null,with__8028__auto____$1,p1__8020__8032__auto__);
}),invocations__8024__auto__);
var matching_count__8033__auto__ = cljs.core.count.call(null,matching_invocations__8031__auto__);
if(cljs.core._EQ_.call(null,times__8025__auto__,matching_count__8033__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(times__8025__auto__)," ",invocations_str__8029__auto__.call(null,times__8025__auto__)," of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__8022__auto__)," with ",cljs.core.pr_str.call(null,with__8028__auto____$1),speclj.platform.endl,"     got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(matching_count__8033__auto__)," ",invocations_str__8029__auto__.call(null,matching_count__8033__auto__)].join('')));
}
} else {
if(check_params_QMARK___8027__auto__){
if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__8021__8034__auto__){
return speclj.stub.params_match_QMARK_.call(null,with__8028__auto____$1,p1__8021__8034__auto__);
}),invocations__8024__auto__))){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: invocation of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__8022__auto__)," with ",cljs.core.pr_str.call(null,with__8028__auto____$1),speclj.platform.endl,"     got: ",cljs.core.pr_str.call(null,invocations__8024__auto__)].join('')));
}
} else {
if(times_QMARK___8026__auto__){
if(cljs.core._EQ_.call(null,times__8025__auto__,cljs.core.count.call(null,invocations__8024__auto__))){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(times__8025__auto__)," ",invocations_str__8029__auto__.call(null,times__8025__auto__)," of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__8022__auto__),speclj.platform.endl,"     got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,invocations__8024__auto__))].join('')));
}
} else {
if(cljs.core.seq.call(null,invocations__8024__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: an invocation of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__8022__auto__),speclj.platform.endl,"     got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,invocations__8024__auto__))].join('')));
}

}
}
}
});})(_STAR_parent_description_STAR__orig_val__8363_8490,_STAR_parent_description_STAR__temp_val__8364_8491,description__7638__auto____$1,_STAR_parent_description_STAR__orig_val__8162_8474,_STAR_parent_description_STAR__temp_val__8163_8475,description__7638__auto___8473))
,false)],null)));
var chunk__8366_8493 = null;
var count__8367_8494 = (0);
var i__8368_8495 = (0);
while(true){
if((i__8368_8495 < count__8367_8494)){
var component__7639__auto___8516 = cljs.core._nth.call(null,chunk__8366_8493,i__8368_8495);
speclj.components.install.call(null,component__7639__auto___8516,description__7638__auto____$1);


var G__8517 = seq__8365_8492;
var G__8518 = chunk__8366_8493;
var G__8519 = count__8367_8494;
var G__8520 = (i__8368_8495 + (1));
seq__8365_8492 = G__8517;
chunk__8366_8493 = G__8518;
count__8367_8494 = G__8519;
i__8368_8495 = G__8520;
continue;
} else {
var temp__5804__auto___8521 = cljs.core.seq.call(null,seq__8365_8492);
if(temp__5804__auto___8521){
var seq__8365_8522__$1 = temp__5804__auto___8521;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8365_8522__$1)){
var c__5525__auto___8523 = cljs.core.chunk_first.call(null,seq__8365_8522__$1);
var G__8524 = cljs.core.chunk_rest.call(null,seq__8365_8522__$1);
var G__8525 = c__5525__auto___8523;
var G__8526 = cljs.core.count.call(null,c__5525__auto___8523);
var G__8527 = (0);
seq__8365_8492 = G__8524;
chunk__8366_8493 = G__8525;
count__8367_8494 = G__8526;
i__8368_8495 = G__8527;
continue;
} else {
var component__7639__auto___8528 = cljs.core.first.call(null,seq__8365_8522__$1);
speclj.components.install.call(null,component__7639__auto___8528,description__7638__auto____$1);


var G__8529 = cljs.core.next.call(null,seq__8365_8522__$1);
var G__8530 = null;
var G__8531 = (0);
var G__8532 = (0);
seq__8365_8492 = G__8529;
chunk__8366_8493 = G__8530;
count__8367_8494 = G__8531;
i__8368_8495 = G__8532;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__8363_8490);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__7638__auto____$1);
}

return description__7638__auto____$1;
})(),(function (){var description__7638__auto____$1 = speclj.components.new_description.call(null,"play-bot-move",false,"tic-tac-toe.bot-moves-spec");
var _STAR_parent_description_STAR__orig_val__8427_8533 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__8428_8534 = description__7638__auto____$1;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__8428_8534);

try{var seq__8429_8535 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_characteristic.call(null,"plays bot move to board",((function (_STAR_parent_description_STAR__orig_val__8427_8533,_STAR_parent_description_STAR__temp_val__8428_8534,description__7638__auto____$1,_STAR_parent_description_STAR__orig_val__8162_8474,_STAR_parent_description_STAR__temp_val__8163_8475,description__7638__auto___8473){
return (function (){
var expected__7775__auto___8541 = new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(3),(4),new cljs.core.Keyword(null,"o","o",-1350007228),(6),(7),(8),(9)], null);
var actual__7776__auto___8542 = tic_tac_toe.bot_moves.play_bot_move.call(null,(5),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(3),(4),(5),(6),(7),(8),(9)], null),(2),new cljs.core.Keyword(null,"o","o",-1350007228),false);
if(cljs.core._EQ_.call(null,expected__7775__auto___8541,actual__7776__auto___8542)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__7775__auto___8541;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7743__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7743__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__7776__auto___8542;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7743__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7743__auto__);
}
})()," (using =)"].join('')));
}

var expected__7775__auto___8553 = new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"o","o",-1350007228),(2),(3),(4),(5),(6),(7),(8),(9)], null);
var actual__7776__auto___8554 = tic_tac_toe.bot_moves.play_bot_move.call(null,(1),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(3),(4),(5),(6),(7),(8),(9)], null),(2),new cljs.core.Keyword(null,"o","o",-1350007228),false);
if(cljs.core._EQ_.call(null,expected__7775__auto___8553,actual__7776__auto___8554)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__7775__auto___8553;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7743__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7743__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__7776__auto___8554;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7743__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7743__auto__);
}
})()," (using =)"].join('')));
}

var expected__7775__auto__ = new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(3),(4),(5),(6),(7),(8),new cljs.core.Keyword(null,"o","o",-1350007228)], null);
var actual__7776__auto__ = tic_tac_toe.bot_moves.play_bot_move.call(null,(9),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(3),(4),(5),(6),(7),(8),(9)], null),(2),new cljs.core.Keyword(null,"o","o",-1350007228),false);
if(cljs.core._EQ_.call(null,expected__7775__auto__,actual__7776__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__7775__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7743__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7743__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__7776__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7743__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7743__auto__);
}
})()," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__8427_8533,_STAR_parent_description_STAR__temp_val__8428_8534,description__7638__auto____$1,_STAR_parent_description_STAR__orig_val__8162_8474,_STAR_parent_description_STAR__temp_val__8163_8475,description__7638__auto___8473))
,false),speclj.components.new_characteristic.call(null,"displays bot-move to user",((function (_STAR_parent_description_STAR__orig_val__8427_8533,_STAR_parent_description_STAR__temp_val__8428_8534,description__7638__auto____$1,_STAR_parent_description_STAR__orig_val__8162_8474,_STAR_parent_description_STAR__temp_val__8163_8475,description__7638__auto___8473){
return (function (){
var display_bot_move_message_orig_val__8463 = tic_tac_toe.print_utils.display_bot_move_message;
var display_bot_move_message_temp_val__8464 = speclj.stub.stub.call(null,new cljs.core.Keyword(null,"display-bot-move-message","display-bot-move-message",1492900627),cljs.core.PersistentArrayMap.EMPTY);
(tic_tac_toe.print_utils.display_bot_move_message = display_bot_move_message_temp_val__8464);

try{tic_tac_toe.bot_moves.play_bot_move.call(null,(5),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(3),(4),(5),(6),(7),(8),(9)], null),(2),new cljs.core.Keyword(null,"o","o",-1350007228),new cljs.core.Keyword(null,"tui","tui",-1217057309));

var name__8022__auto__ = new cljs.core.Keyword(null,"display-bot-move-message","display-bot-move-message",1492900627);
var options__8023__auto__ = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"with","with",-1536296876),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(5),(2),new cljs.core.Keyword(null,"o","o",-1350007228)], null)], null);
var invocations__8024__auto__ = speclj.stub.invocations_of.call(null,name__8022__auto__);
var times__8025__auto__ = new cljs.core.Keyword(null,"times","times",1671571467).cljs$core$IFn$_invoke$arity$1(options__8023__auto__);
var times_QMARK___8026__auto__ = typeof times__8025__auto__ === 'number';
var check_params_QMARK___8027__auto__ = cljs.core.contains_QMARK_.call(null,options__8023__auto__,new cljs.core.Keyword(null,"with","with",-1536296876));
var with__8028__auto__ = new cljs.core.Keyword(null,"with","with",-1536296876).cljs$core$IFn$_invoke$arity$1(options__8023__auto__);
var with__8028__auto____$1 = (((with__8028__auto__ == null))?cljs.core.PersistentVector.EMPTY:with__8028__auto__);
var invocations_str__8029__auto__ = (function (p1__8019__8030__auto__){
if(cljs.core._EQ_.call(null,(1),p1__8019__8030__auto__)){
return "invocation";
} else {
return "invocations";
}
});
if(((times_QMARK___8026__auto__) && (check_params_QMARK___8027__auto__))){
var matching_invocations__8031__auto__ = cljs.core.filter.call(null,(function (p1__8020__8032__auto__){
return speclj.stub.params_match_QMARK_.call(null,with__8028__auto____$1,p1__8020__8032__auto__);
}),invocations__8024__auto__);
var matching_count__8033__auto__ = cljs.core.count.call(null,matching_invocations__8031__auto__);
if(cljs.core._EQ_.call(null,times__8025__auto__,matching_count__8033__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(times__8025__auto__)," ",invocations_str__8029__auto__.call(null,times__8025__auto__)," of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__8022__auto__)," with ",cljs.core.pr_str.call(null,with__8028__auto____$1),speclj.platform.endl,"     got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(matching_count__8033__auto__)," ",invocations_str__8029__auto__.call(null,matching_count__8033__auto__)].join('')));
}
} else {
if(check_params_QMARK___8027__auto__){
if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__8021__8034__auto__){
return speclj.stub.params_match_QMARK_.call(null,with__8028__auto____$1,p1__8021__8034__auto__);
}),invocations__8024__auto__))){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: invocation of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__8022__auto__)," with ",cljs.core.pr_str.call(null,with__8028__auto____$1),speclj.platform.endl,"     got: ",cljs.core.pr_str.call(null,invocations__8024__auto__)].join('')));
}
} else {
if(times_QMARK___8026__auto__){
if(cljs.core._EQ_.call(null,times__8025__auto__,cljs.core.count.call(null,invocations__8024__auto__))){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(times__8025__auto__)," ",invocations_str__8029__auto__.call(null,times__8025__auto__)," of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__8022__auto__),speclj.platform.endl,"     got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,invocations__8024__auto__))].join('')));
}
} else {
if(cljs.core.seq.call(null,invocations__8024__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: an invocation of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__8022__auto__),speclj.platform.endl,"     got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,invocations__8024__auto__))].join('')));
}

}
}
}
}finally {(tic_tac_toe.print_utils.display_bot_move_message = display_bot_move_message_orig_val__8463);
}});})(_STAR_parent_description_STAR__orig_val__8427_8533,_STAR_parent_description_STAR__temp_val__8428_8534,description__7638__auto____$1,_STAR_parent_description_STAR__orig_val__8162_8474,_STAR_parent_description_STAR__temp_val__8163_8475,description__7638__auto___8473))
,false)],null)));
var chunk__8430_8536 = null;
var count__8431_8537 = (0);
var i__8432_8538 = (0);
while(true){
if((i__8432_8538 < count__8431_8537)){
var component__7639__auto___8569 = cljs.core._nth.call(null,chunk__8430_8536,i__8432_8538);
speclj.components.install.call(null,component__7639__auto___8569,description__7638__auto____$1);


var G__8570 = seq__8429_8535;
var G__8571 = chunk__8430_8536;
var G__8572 = count__8431_8537;
var G__8573 = (i__8432_8538 + (1));
seq__8429_8535 = G__8570;
chunk__8430_8536 = G__8571;
count__8431_8537 = G__8572;
i__8432_8538 = G__8573;
continue;
} else {
var temp__5804__auto___8574 = cljs.core.seq.call(null,seq__8429_8535);
if(temp__5804__auto___8574){
var seq__8429_8575__$1 = temp__5804__auto___8574;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8429_8575__$1)){
var c__5525__auto___8576 = cljs.core.chunk_first.call(null,seq__8429_8575__$1);
var G__8577 = cljs.core.chunk_rest.call(null,seq__8429_8575__$1);
var G__8578 = c__5525__auto___8576;
var G__8579 = cljs.core.count.call(null,c__5525__auto___8576);
var G__8580 = (0);
seq__8429_8535 = G__8577;
chunk__8430_8536 = G__8578;
count__8431_8537 = G__8579;
i__8432_8538 = G__8580;
continue;
} else {
var component__7639__auto___8581 = cljs.core.first.call(null,seq__8429_8575__$1);
speclj.components.install.call(null,component__7639__auto___8581,description__7638__auto____$1);


var G__8582 = cljs.core.next.call(null,seq__8429_8575__$1);
var G__8583 = null;
var G__8584 = (0);
var G__8585 = (0);
seq__8429_8535 = G__8582;
chunk__8430_8536 = G__8583;
count__8431_8537 = G__8584;
i__8432_8538 = G__8585;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__8427_8533);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__7638__auto____$1);
}

return description__7638__auto____$1;
})()],null)));
var chunk__8165_8477 = null;
var count__8166_8478 = (0);
var i__8167_8479 = (0);
while(true){
if((i__8167_8479 < count__8166_8478)){
var component__7639__auto___8586 = cljs.core._nth.call(null,chunk__8165_8477,i__8167_8479);
speclj.components.install.call(null,component__7639__auto___8586,description__7638__auto___8473);


var G__8587 = seq__8164_8476;
var G__8588 = chunk__8165_8477;
var G__8589 = count__8166_8478;
var G__8590 = (i__8167_8479 + (1));
seq__8164_8476 = G__8587;
chunk__8165_8477 = G__8588;
count__8166_8478 = G__8589;
i__8167_8479 = G__8590;
continue;
} else {
var temp__5804__auto___8591 = cljs.core.seq.call(null,seq__8164_8476);
if(temp__5804__auto___8591){
var seq__8164_8592__$1 = temp__5804__auto___8591;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8164_8592__$1)){
var c__5525__auto___8593 = cljs.core.chunk_first.call(null,seq__8164_8592__$1);
var G__8594 = cljs.core.chunk_rest.call(null,seq__8164_8592__$1);
var G__8595 = c__5525__auto___8593;
var G__8596 = cljs.core.count.call(null,c__5525__auto___8593);
var G__8597 = (0);
seq__8164_8476 = G__8594;
chunk__8165_8477 = G__8595;
count__8166_8478 = G__8596;
i__8167_8479 = G__8597;
continue;
} else {
var component__7639__auto___8598 = cljs.core.first.call(null,seq__8164_8592__$1);
speclj.components.install.call(null,component__7639__auto___8598,description__7638__auto___8473);


var G__8599 = cljs.core.next.call(null,seq__8164_8592__$1);
var G__8600 = null;
var G__8601 = (0);
var G__8602 = (0);
seq__8164_8476 = G__8599;
chunk__8165_8477 = G__8600;
count__8166_8478 = G__8601;
i__8167_8479 = G__8602;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__8162_8474);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__7638__auto___8473);
}


//# sourceMappingURL=bot_moves_spec.js.map
