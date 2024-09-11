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
var description__20276__auto___21139 = speclj.components.new_description.call(null,"playing bot moves",false,"tic-tac-toe.bot-moves-spec");
var _STAR_parent_description_STAR__orig_val__20887_21140 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__20888_21141 = description__20276__auto___21139;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__20888_21141);

try{var seq__20894_21142 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,4,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_around.call(null,((function (_STAR_parent_description_STAR__orig_val__20887_21140,_STAR_parent_description_STAR__temp_val__20888_21141,description__20276__auto___21139){
return (function (it__20646__auto__){
var _STAR_stubbed_invocations_STAR__orig_val__21045 = speclj.stub._STAR_stubbed_invocations_STAR_;
var _STAR_stubbed_invocations_STAR__temp_val__21046 = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
(speclj.stub._STAR_stubbed_invocations_STAR_ = _STAR_stubbed_invocations_STAR__temp_val__21046);

try{return it__20646__auto__.call(null);
}finally {(speclj.stub._STAR_stubbed_invocations_STAR_ = _STAR_stubbed_invocations_STAR__orig_val__21045);
}});})(_STAR_parent_description_STAR__orig_val__20887_21140,_STAR_parent_description_STAR__temp_val__20888_21141,description__20276__auto___21139))
),speclj.components.new_around.call(null,((function (_STAR_parent_description_STAR__orig_val__20887_21140,_STAR_parent_description_STAR__temp_val__20888_21141,description__20276__auto___21139){
return (function (it__20338__auto__){
var println_orig_val__21047 = cljs.core.println;
var println_temp_val__21048 = speclj.stub.stub.call(null,new cljs.core.Keyword(null,"println","println",1920840330),cljs.core.PersistentArrayMap.EMPTY);
(cljs.core.println = println_temp_val__21048);

try{return it__20338__auto__.call(null);
}finally {(cljs.core.println = println_orig_val__21047);
}});})(_STAR_parent_description_STAR__orig_val__20887_21140,_STAR_parent_description_STAR__temp_val__20888_21141,description__20276__auto___21139))
),(function (){var description__20276__auto____$1 = speclj.components.new_description.call(null,"defmethods",false,"tic-tac-toe.bot-moves-spec");
var _STAR_parent_description_STAR__orig_val__21052_21146 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__21053_21147 = description__20276__auto____$1;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__21053_21147);

try{var seq__21054_21148 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,5,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_around.call(null,((function (_STAR_parent_description_STAR__orig_val__21052_21146,_STAR_parent_description_STAR__temp_val__21053_21147,description__20276__auto____$1,_STAR_parent_description_STAR__orig_val__20887_21140,_STAR_parent_description_STAR__temp_val__20888_21141,description__20276__auto___21139){
return (function (it__20338__auto__){
var find_easy_move_orig_val__21089 = tic_tac_toe.ai.easy_medium.find_easy_move;
var find_medium_move_orig_val__21090 = tic_tac_toe.ai.easy_medium.find_medium_move;
var find_best_move_memo_orig_val__21091 = tic_tac_toe.ai.minimax.find_best_move_memo;
var play_bot_move_orig_val__21092 = tic_tac_toe.bot_moves.play_bot_move;
var find_easy_move_temp_val__21093 = speclj.stub.stub.call(null,new cljs.core.Keyword(null,"find-easy-move","find-easy-move",1506541355),cljs.core.PersistentArrayMap.EMPTY);
var find_medium_move_temp_val__21094 = speclj.stub.stub.call(null,new cljs.core.Keyword(null,"find-medium-move","find-medium-move",1971910015),cljs.core.PersistentArrayMap.EMPTY);
var find_best_move_memo_temp_val__21095 = speclj.stub.stub.call(null,new cljs.core.Keyword(null,"find-best-move","find-best-move",-369337667),cljs.core.PersistentArrayMap.EMPTY);
var play_bot_move_temp_val__21096 = speclj.stub.stub.call(null,new cljs.core.Keyword(null,"play-bot-move","play-bot-move",448549335),cljs.core.PersistentArrayMap.EMPTY);
(tic_tac_toe.ai.easy_medium.find_easy_move = find_easy_move_temp_val__21093);

(tic_tac_toe.ai.easy_medium.find_medium_move = find_medium_move_temp_val__21094);

(tic_tac_toe.ai.minimax.find_best_move_memo = find_best_move_memo_temp_val__21095);

(tic_tac_toe.bot_moves.play_bot_move = play_bot_move_temp_val__21096);

try{return it__20338__auto__.call(null);
}finally {(tic_tac_toe.bot_moves.play_bot_move = play_bot_move_orig_val__21092);

(tic_tac_toe.ai.minimax.find_best_move_memo = find_best_move_memo_orig_val__21091);

(tic_tac_toe.ai.easy_medium.find_medium_move = find_medium_move_orig_val__21090);

(tic_tac_toe.ai.easy_medium.find_easy_move = find_easy_move_orig_val__21089);
}});})(_STAR_parent_description_STAR__orig_val__21052_21146,_STAR_parent_description_STAR__temp_val__21053_21147,description__20276__auto____$1,_STAR_parent_description_STAR__orig_val__20887_21140,_STAR_parent_description_STAR__temp_val__20888_21141,description__20276__auto___21139))
),speclj.components.new_characteristic.call(null,"calls find-easy-move",((function (_STAR_parent_description_STAR__orig_val__21052_21146,_STAR_parent_description_STAR__temp_val__21053_21147,description__20276__auto____$1,_STAR_parent_description_STAR__orig_val__20887_21140,_STAR_parent_description_STAR__temp_val__20888_21141,description__20276__auto___21139){
return (function (){
tic_tac_toe.player.take_turn.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"first-ai-level","first-ai-level",1004633644),(1),new cljs.core.Keyword(null,"board","board",-1907017633),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(3),(4),(5),(6),(7),(8),(9)], null),new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"o","o",-1350007228),new cljs.core.Keyword(null,"mode","mode",654403691),(2),new cljs.core.Keyword(null,"second-ai-level","second-ai-level",-418730455),null], null));

tic_tac_toe.player.take_turn.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"first-ai-level","first-ai-level",1004633644),(1),new cljs.core.Keyword(null,"board","board",-1907017633),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),(2),(3),(4),(5),(6),(7),(8),(9)], null),new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"o","o",-1350007228),new cljs.core.Keyword(null,"mode","mode",654403691),(2),new cljs.core.Keyword(null,"second-ai-level","second-ai-level",-418730455),null], null));

var expected__20413__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(3),(4),(5),(6),(7),(8),(9)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),(2),(3),(4),(5),(6),(7),(8),(9)], null)], null)], null);
var actual__20414__auto__ = speclj.stub.invocations_of.call(null,new cljs.core.Keyword(null,"find-easy-move","find-easy-move",1506541355));
if(cljs.core._EQ_.call(null,expected__20413__auto__,actual__20414__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__20413__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__20381__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__20381__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__20414__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__20381__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__20381__auto__);
}
})()," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__21052_21146,_STAR_parent_description_STAR__temp_val__21053_21147,description__20276__auto____$1,_STAR_parent_description_STAR__orig_val__20887_21140,_STAR_parent_description_STAR__temp_val__20888_21141,description__20276__auto___21139))
,false),speclj.components.new_characteristic.call(null,"calls find-medium-move",((function (_STAR_parent_description_STAR__orig_val__21052_21146,_STAR_parent_description_STAR__temp_val__21053_21147,description__20276__auto____$1,_STAR_parent_description_STAR__orig_val__20887_21140,_STAR_parent_description_STAR__temp_val__20888_21141,description__20276__auto___21139){
return (function (){
tic_tac_toe.player.take_turn.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"first-ai-level","first-ai-level",1004633644),(2),new cljs.core.Keyword(null,"board","board",-1907017633),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(3),(4),(5),(6),(7),(8),(9)], null),new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"mode","mode",654403691),(3),new cljs.core.Keyword(null,"second-ai-level","second-ai-level",-418730455),null], null));

tic_tac_toe.player.take_turn.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"second-ai-level","second-ai-level",-418730455),(2),new cljs.core.Keyword(null,"board","board",-1907017633),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),(2),(3),(4),(5),(6),(7),(8),(9)], null),new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"o","o",-1350007228),new cljs.core.Keyword(null,"mode","mode",654403691),(4),new cljs.core.Keyword(null,"first-ai-level","first-ai-level",1004633644),(1)], null));

var expected__20413__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(3),(4),(5),(6),(7),(8),(9)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),(2),(3),(4),(5),(6),(7),(8),(9)], null)], null)], null);
var actual__20414__auto__ = speclj.stub.invocations_of.call(null,new cljs.core.Keyword(null,"find-medium-move","find-medium-move",1971910015));
if(cljs.core._EQ_.call(null,expected__20413__auto__,actual__20414__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__20413__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__20381__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__20381__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__20414__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__20381__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__20381__auto__);
}
})()," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__21052_21146,_STAR_parent_description_STAR__temp_val__21053_21147,description__20276__auto____$1,_STAR_parent_description_STAR__orig_val__20887_21140,_STAR_parent_description_STAR__temp_val__20888_21141,description__20276__auto___21139))
,false),speclj.components.new_characteristic.call(null,"calls find-best-move",((function (_STAR_parent_description_STAR__orig_val__21052_21146,_STAR_parent_description_STAR__temp_val__21053_21147,description__20276__auto____$1,_STAR_parent_description_STAR__orig_val__20887_21140,_STAR_parent_description_STAR__temp_val__20888_21141,description__20276__auto___21139){
return (function (){
tic_tac_toe.player.take_turn.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"first-ai-level","first-ai-level",1004633644),(3),new cljs.core.Keyword(null,"board","board",-1907017633),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(3),(4),(5),(6),(7),(8),(9)], null),new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"mode","mode",654403691),(4),new cljs.core.Keyword(null,"second-ai-level","second-ai-level",-418730455),null], null));

tic_tac_toe.player.take_turn.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"second-ai-level","second-ai-level",-418730455),(3),new cljs.core.Keyword(null,"board","board",-1907017633),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),(2),(3),(4),(5),(6),(7),(8),(9)], null),new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"o","o",-1350007228),new cljs.core.Keyword(null,"mode","mode",654403691),(4),new cljs.core.Keyword(null,"first-ai-level","first-ai-level",1004633644),(1)], null));

var expected__20413__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(3),(4),(5),(6),(7),(8),(9)], null),new cljs.core.Keyword(null,"x","x",2099068185),null], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),(2),(3),(4),(5),(6),(7),(8),(9)], null),new cljs.core.Keyword(null,"o","o",-1350007228),null], null)], null);
var actual__20414__auto__ = speclj.stub.invocations_of.call(null,new cljs.core.Keyword(null,"find-best-move","find-best-move",-369337667));
if(cljs.core._EQ_.call(null,expected__20413__auto__,actual__20414__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__20413__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__20381__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__20381__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__20414__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__20381__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__20381__auto__);
}
})()," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__21052_21146,_STAR_parent_description_STAR__temp_val__21053_21147,description__20276__auto____$1,_STAR_parent_description_STAR__orig_val__20887_21140,_STAR_parent_description_STAR__temp_val__20888_21141,description__20276__auto___21139))
,false),speclj.components.new_characteristic.call(null,"plays the bot move to the board",((function (_STAR_parent_description_STAR__orig_val__21052_21146,_STAR_parent_description_STAR__temp_val__21053_21147,description__20276__auto____$1,_STAR_parent_description_STAR__orig_val__20887_21140,_STAR_parent_description_STAR__temp_val__20888_21141,description__20276__auto___21139){
return (function (){
tic_tac_toe.player.take_turn.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"first-ai-level","first-ai-level",1004633644),(1),new cljs.core.Keyword(null,"board","board",-1907017633),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(3),(4),(5),(6),(7),(8),(9)], null),new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"o","o",-1350007228),new cljs.core.Keyword(null,"mode","mode",654403691),(2)], null));

var name__20660__auto__ = new cljs.core.Keyword(null,"play-bot-move","play-bot-move",448549335);
var options__20661__auto__ = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"with","with",-1536296876),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(3),(4),(5),(6),(7),(8),(9)], null),(2),new cljs.core.Keyword(null,"o","o",-1350007228),null], null)], null);
var invocations__20662__auto__ = speclj.stub.invocations_of.call(null,name__20660__auto__);
var times__20663__auto__ = new cljs.core.Keyword(null,"times","times",1671571467).cljs$core$IFn$_invoke$arity$1(options__20661__auto__);
var times_QMARK___20664__auto__ = typeof times__20663__auto__ === 'number';
var check_params_QMARK___20665__auto__ = cljs.core.contains_QMARK_.call(null,options__20661__auto__,new cljs.core.Keyword(null,"with","with",-1536296876));
var with__20666__auto__ = new cljs.core.Keyword(null,"with","with",-1536296876).cljs$core$IFn$_invoke$arity$1(options__20661__auto__);
var with__20666__auto____$1 = (((with__20666__auto__ == null))?cljs.core.PersistentVector.EMPTY:with__20666__auto__);
var invocations_str__20667__auto__ = (function (p1__20657__20668__auto__){
if(cljs.core._EQ_.call(null,(1),p1__20657__20668__auto__)){
return "invocation";
} else {
return "invocations";
}
});
if(((times_QMARK___20664__auto__) && (check_params_QMARK___20665__auto__))){
var matching_invocations__20669__auto__ = cljs.core.filter.call(null,(function (p1__20658__20670__auto__){
return speclj.stub.params_match_QMARK_.call(null,with__20666__auto____$1,p1__20658__20670__auto__);
}),invocations__20662__auto__);
var matching_count__20671__auto__ = cljs.core.count.call(null,matching_invocations__20669__auto__);
if(cljs.core._EQ_.call(null,times__20663__auto__,matching_count__20671__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(times__20663__auto__)," ",invocations_str__20667__auto__.call(null,times__20663__auto__)," of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__20660__auto__)," with ",cljs.core.pr_str.call(null,with__20666__auto____$1),speclj.platform.endl,"     got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(matching_count__20671__auto__)," ",invocations_str__20667__auto__.call(null,matching_count__20671__auto__)].join('')));
}
} else {
if(check_params_QMARK___20665__auto__){
if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__20659__20672__auto__){
return speclj.stub.params_match_QMARK_.call(null,with__20666__auto____$1,p1__20659__20672__auto__);
}),invocations__20662__auto__))){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: invocation of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__20660__auto__)," with ",cljs.core.pr_str.call(null,with__20666__auto____$1),speclj.platform.endl,"     got: ",cljs.core.pr_str.call(null,invocations__20662__auto__)].join('')));
}
} else {
if(times_QMARK___20664__auto__){
if(cljs.core._EQ_.call(null,times__20663__auto__,cljs.core.count.call(null,invocations__20662__auto__))){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(times__20663__auto__)," ",invocations_str__20667__auto__.call(null,times__20663__auto__)," of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__20660__auto__),speclj.platform.endl,"     got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,invocations__20662__auto__))].join('')));
}
} else {
if(cljs.core.seq.call(null,invocations__20662__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: an invocation of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__20660__auto__),speclj.platform.endl,"     got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,invocations__20662__auto__))].join('')));
}

}
}
}
});})(_STAR_parent_description_STAR__orig_val__21052_21146,_STAR_parent_description_STAR__temp_val__21053_21147,description__20276__auto____$1,_STAR_parent_description_STAR__orig_val__20887_21140,_STAR_parent_description_STAR__temp_val__20888_21141,description__20276__auto___21139))
,false)],null)));
var chunk__21055_21149 = null;
var count__21056_21150 = (0);
var i__21057_21151 = (0);
while(true){
if((i__21057_21151 < count__21056_21150)){
var component__20277__auto___21158 = cljs.core._nth.call(null,chunk__21055_21149,i__21057_21151);
speclj.components.install.call(null,component__20277__auto___21158,description__20276__auto____$1);


var G__21159 = seq__21054_21148;
var G__21160 = chunk__21055_21149;
var G__21161 = count__21056_21150;
var G__21162 = (i__21057_21151 + (1));
seq__21054_21148 = G__21159;
chunk__21055_21149 = G__21160;
count__21056_21150 = G__21161;
i__21057_21151 = G__21162;
continue;
} else {
var temp__5804__auto___21163 = cljs.core.seq.call(null,seq__21054_21148);
if(temp__5804__auto___21163){
var seq__21054_21164__$1 = temp__5804__auto___21163;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21054_21164__$1)){
var c__5525__auto___21165 = cljs.core.chunk_first.call(null,seq__21054_21164__$1);
var G__21166 = cljs.core.chunk_rest.call(null,seq__21054_21164__$1);
var G__21167 = c__5525__auto___21165;
var G__21168 = cljs.core.count.call(null,c__5525__auto___21165);
var G__21169 = (0);
seq__21054_21148 = G__21166;
chunk__21055_21149 = G__21167;
count__21056_21150 = G__21168;
i__21057_21151 = G__21169;
continue;
} else {
var component__20277__auto___21170 = cljs.core.first.call(null,seq__21054_21164__$1);
speclj.components.install.call(null,component__20277__auto___21170,description__20276__auto____$1);


var G__21171 = cljs.core.next.call(null,seq__21054_21164__$1);
var G__21172 = null;
var G__21173 = (0);
var G__21174 = (0);
seq__21054_21148 = G__21171;
chunk__21055_21149 = G__21172;
count__21056_21150 = G__21173;
i__21057_21151 = G__21174;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__21052_21146);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__20276__auto____$1);
}

return description__20276__auto____$1;
})(),(function (){var description__20276__auto____$1 = speclj.components.new_description.call(null,"play-bot-move",false,"tic-tac-toe.bot-moves-spec");
var _STAR_parent_description_STAR__orig_val__21118_21175 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__21119_21176 = description__20276__auto____$1;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__21119_21176);

try{var seq__21120_21177 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_characteristic.call(null,"plays bot move to board",((function (_STAR_parent_description_STAR__orig_val__21118_21175,_STAR_parent_description_STAR__temp_val__21119_21176,description__20276__auto____$1,_STAR_parent_description_STAR__orig_val__20887_21140,_STAR_parent_description_STAR__temp_val__20888_21141,description__20276__auto___21139){
return (function (){
var expected__20413__auto___21181 = new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(3),(4),new cljs.core.Keyword(null,"o","o",-1350007228),(6),(7),(8),(9)], null);
var actual__20414__auto___21182 = tic_tac_toe.bot_moves.play_bot_move.call(null,(5),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(3),(4),(5),(6),(7),(8),(9)], null),(2),new cljs.core.Keyword(null,"o","o",-1350007228),false);
if(cljs.core._EQ_.call(null,expected__20413__auto___21181,actual__20414__auto___21182)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__20413__auto___21181;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__20381__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__20381__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__20414__auto___21182;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__20381__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__20381__auto__);
}
})()," (using =)"].join('')));
}

var expected__20413__auto___21183 = new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"o","o",-1350007228),(2),(3),(4),(5),(6),(7),(8),(9)], null);
var actual__20414__auto___21184 = tic_tac_toe.bot_moves.play_bot_move.call(null,(1),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(3),(4),(5),(6),(7),(8),(9)], null),(2),new cljs.core.Keyword(null,"o","o",-1350007228),false);
if(cljs.core._EQ_.call(null,expected__20413__auto___21183,actual__20414__auto___21184)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__20413__auto___21183;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__20381__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__20381__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__20414__auto___21184;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__20381__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__20381__auto__);
}
})()," (using =)"].join('')));
}

var expected__20413__auto__ = new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(3),(4),(5),(6),(7),(8),new cljs.core.Keyword(null,"o","o",-1350007228)], null);
var actual__20414__auto__ = tic_tac_toe.bot_moves.play_bot_move.call(null,(9),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(3),(4),(5),(6),(7),(8),(9)], null),(2),new cljs.core.Keyword(null,"o","o",-1350007228),false);
if(cljs.core._EQ_.call(null,expected__20413__auto__,actual__20414__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__20413__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__20381__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__20381__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__20414__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__20381__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__20381__auto__);
}
})()," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__21118_21175,_STAR_parent_description_STAR__temp_val__21119_21176,description__20276__auto____$1,_STAR_parent_description_STAR__orig_val__20887_21140,_STAR_parent_description_STAR__temp_val__20888_21141,description__20276__auto___21139))
,false),speclj.components.new_characteristic.call(null,"displays bot-move to user",((function (_STAR_parent_description_STAR__orig_val__21118_21175,_STAR_parent_description_STAR__temp_val__21119_21176,description__20276__auto____$1,_STAR_parent_description_STAR__orig_val__20887_21140,_STAR_parent_description_STAR__temp_val__20888_21141,description__20276__auto___21139){
return (function (){
var display_bot_move_message_orig_val__21137 = tic_tac_toe.print_utils.display_bot_move_message;
var display_bot_move_message_temp_val__21138 = speclj.stub.stub.call(null,new cljs.core.Keyword(null,"display-bot-move-message","display-bot-move-message",1492900627),cljs.core.PersistentArrayMap.EMPTY);
(tic_tac_toe.print_utils.display_bot_move_message = display_bot_move_message_temp_val__21138);

try{tic_tac_toe.bot_moves.play_bot_move.call(null,(5),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(3),(4),(5),(6),(7),(8),(9)], null),(2),new cljs.core.Keyword(null,"o","o",-1350007228),new cljs.core.Keyword(null,"tui","tui",-1217057309));

var name__20660__auto__ = new cljs.core.Keyword(null,"display-bot-move-message","display-bot-move-message",1492900627);
var options__20661__auto__ = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"with","with",-1536296876),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(5),(2),new cljs.core.Keyword(null,"o","o",-1350007228)], null)], null);
var invocations__20662__auto__ = speclj.stub.invocations_of.call(null,name__20660__auto__);
var times__20663__auto__ = new cljs.core.Keyword(null,"times","times",1671571467).cljs$core$IFn$_invoke$arity$1(options__20661__auto__);
var times_QMARK___20664__auto__ = typeof times__20663__auto__ === 'number';
var check_params_QMARK___20665__auto__ = cljs.core.contains_QMARK_.call(null,options__20661__auto__,new cljs.core.Keyword(null,"with","with",-1536296876));
var with__20666__auto__ = new cljs.core.Keyword(null,"with","with",-1536296876).cljs$core$IFn$_invoke$arity$1(options__20661__auto__);
var with__20666__auto____$1 = (((with__20666__auto__ == null))?cljs.core.PersistentVector.EMPTY:with__20666__auto__);
var invocations_str__20667__auto__ = (function (p1__20657__20668__auto__){
if(cljs.core._EQ_.call(null,(1),p1__20657__20668__auto__)){
return "invocation";
} else {
return "invocations";
}
});
if(((times_QMARK___20664__auto__) && (check_params_QMARK___20665__auto__))){
var matching_invocations__20669__auto__ = cljs.core.filter.call(null,(function (p1__20658__20670__auto__){
return speclj.stub.params_match_QMARK_.call(null,with__20666__auto____$1,p1__20658__20670__auto__);
}),invocations__20662__auto__);
var matching_count__20671__auto__ = cljs.core.count.call(null,matching_invocations__20669__auto__);
if(cljs.core._EQ_.call(null,times__20663__auto__,matching_count__20671__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(times__20663__auto__)," ",invocations_str__20667__auto__.call(null,times__20663__auto__)," of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__20660__auto__)," with ",cljs.core.pr_str.call(null,with__20666__auto____$1),speclj.platform.endl,"     got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(matching_count__20671__auto__)," ",invocations_str__20667__auto__.call(null,matching_count__20671__auto__)].join('')));
}
} else {
if(check_params_QMARK___20665__auto__){
if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__20659__20672__auto__){
return speclj.stub.params_match_QMARK_.call(null,with__20666__auto____$1,p1__20659__20672__auto__);
}),invocations__20662__auto__))){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: invocation of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__20660__auto__)," with ",cljs.core.pr_str.call(null,with__20666__auto____$1),speclj.platform.endl,"     got: ",cljs.core.pr_str.call(null,invocations__20662__auto__)].join('')));
}
} else {
if(times_QMARK___20664__auto__){
if(cljs.core._EQ_.call(null,times__20663__auto__,cljs.core.count.call(null,invocations__20662__auto__))){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(times__20663__auto__)," ",invocations_str__20667__auto__.call(null,times__20663__auto__)," of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__20660__auto__),speclj.platform.endl,"     got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,invocations__20662__auto__))].join('')));
}
} else {
if(cljs.core.seq.call(null,invocations__20662__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: an invocation of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__20660__auto__),speclj.platform.endl,"     got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,invocations__20662__auto__))].join('')));
}

}
}
}
}finally {(tic_tac_toe.print_utils.display_bot_move_message = display_bot_move_message_orig_val__21137);
}});})(_STAR_parent_description_STAR__orig_val__21118_21175,_STAR_parent_description_STAR__temp_val__21119_21176,description__20276__auto____$1,_STAR_parent_description_STAR__orig_val__20887_21140,_STAR_parent_description_STAR__temp_val__20888_21141,description__20276__auto___21139))
,false)],null)));
var chunk__21121_21178 = null;
var count__21122_21179 = (0);
var i__21123_21180 = (0);
while(true){
if((i__21123_21180 < count__21122_21179)){
var component__20277__auto___21185 = cljs.core._nth.call(null,chunk__21121_21178,i__21123_21180);
speclj.components.install.call(null,component__20277__auto___21185,description__20276__auto____$1);


var G__21186 = seq__21120_21177;
var G__21187 = chunk__21121_21178;
var G__21188 = count__21122_21179;
var G__21189 = (i__21123_21180 + (1));
seq__21120_21177 = G__21186;
chunk__21121_21178 = G__21187;
count__21122_21179 = G__21188;
i__21123_21180 = G__21189;
continue;
} else {
var temp__5804__auto___21190 = cljs.core.seq.call(null,seq__21120_21177);
if(temp__5804__auto___21190){
var seq__21120_21191__$1 = temp__5804__auto___21190;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21120_21191__$1)){
var c__5525__auto___21192 = cljs.core.chunk_first.call(null,seq__21120_21191__$1);
var G__21193 = cljs.core.chunk_rest.call(null,seq__21120_21191__$1);
var G__21194 = c__5525__auto___21192;
var G__21195 = cljs.core.count.call(null,c__5525__auto___21192);
var G__21196 = (0);
seq__21120_21177 = G__21193;
chunk__21121_21178 = G__21194;
count__21122_21179 = G__21195;
i__21123_21180 = G__21196;
continue;
} else {
var component__20277__auto___21197 = cljs.core.first.call(null,seq__21120_21191__$1);
speclj.components.install.call(null,component__20277__auto___21197,description__20276__auto____$1);


var G__21198 = cljs.core.next.call(null,seq__21120_21191__$1);
var G__21199 = null;
var G__21200 = (0);
var G__21201 = (0);
seq__21120_21177 = G__21198;
chunk__21121_21178 = G__21199;
count__21122_21179 = G__21200;
i__21123_21180 = G__21201;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__21118_21175);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__20276__auto____$1);
}

return description__20276__auto____$1;
})()],null)));
var chunk__20895_21143 = null;
var count__20896_21144 = (0);
var i__20897_21145 = (0);
while(true){
if((i__20897_21145 < count__20896_21144)){
var component__20277__auto___21202 = cljs.core._nth.call(null,chunk__20895_21143,i__20897_21145);
speclj.components.install.call(null,component__20277__auto___21202,description__20276__auto___21139);


var G__21203 = seq__20894_21142;
var G__21204 = chunk__20895_21143;
var G__21205 = count__20896_21144;
var G__21206 = (i__20897_21145 + (1));
seq__20894_21142 = G__21203;
chunk__20895_21143 = G__21204;
count__20896_21144 = G__21205;
i__20897_21145 = G__21206;
continue;
} else {
var temp__5804__auto___21207 = cljs.core.seq.call(null,seq__20894_21142);
if(temp__5804__auto___21207){
var seq__20894_21208__$1 = temp__5804__auto___21207;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20894_21208__$1)){
var c__5525__auto___21209 = cljs.core.chunk_first.call(null,seq__20894_21208__$1);
var G__21210 = cljs.core.chunk_rest.call(null,seq__20894_21208__$1);
var G__21211 = c__5525__auto___21209;
var G__21212 = cljs.core.count.call(null,c__5525__auto___21209);
var G__21213 = (0);
seq__20894_21142 = G__21210;
chunk__20895_21143 = G__21211;
count__20896_21144 = G__21212;
i__20897_21145 = G__21213;
continue;
} else {
var component__20277__auto___21214 = cljs.core.first.call(null,seq__20894_21208__$1);
speclj.components.install.call(null,component__20277__auto___21214,description__20276__auto___21139);


var G__21215 = cljs.core.next.call(null,seq__20894_21208__$1);
var G__21216 = null;
var G__21217 = (0);
var G__21218 = (0);
seq__20894_21142 = G__21215;
chunk__20895_21143 = G__21216;
count__20896_21144 = G__21217;
i__20897_21145 = G__21218;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__20887_21140);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__20276__auto___21139);
}


//# sourceMappingURL=bot_moves_spec.js.map
