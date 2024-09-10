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
var description__9152__auto___11215 = speclj.components.new_description.call(null,"playing bot moves",false,"tic-tac-toe.bot-moves-spec");
var _STAR_parent_description_STAR__orig_val__10737_11216 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__10738_11217 = description__9152__auto___11215;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__10738_11217);

try{var seq__10739_11218 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,4,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_around.call(null,((function (_STAR_parent_description_STAR__orig_val__10737_11216,_STAR_parent_description_STAR__temp_val__10738_11217,description__9152__auto___11215){
return (function (it__9522__auto__){
var _STAR_stubbed_invocations_STAR__orig_val__11012 = speclj.stub._STAR_stubbed_invocations_STAR_;
var _STAR_stubbed_invocations_STAR__temp_val__11013 = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
(speclj.stub._STAR_stubbed_invocations_STAR_ = _STAR_stubbed_invocations_STAR__temp_val__11013);

try{return it__9522__auto__.call(null);
}finally {(speclj.stub._STAR_stubbed_invocations_STAR_ = _STAR_stubbed_invocations_STAR__orig_val__11012);
}});})(_STAR_parent_description_STAR__orig_val__10737_11216,_STAR_parent_description_STAR__temp_val__10738_11217,description__9152__auto___11215))
),speclj.components.new_around.call(null,((function (_STAR_parent_description_STAR__orig_val__10737_11216,_STAR_parent_description_STAR__temp_val__10738_11217,description__9152__auto___11215){
return (function (it__9214__auto__){
var println_orig_val__11014 = cljs.core.println;
var println_temp_val__11015 = speclj.stub.stub.call(null,new cljs.core.Keyword(null,"println","println",1920840330),cljs.core.PersistentArrayMap.EMPTY);
(cljs.core.println = println_temp_val__11015);

try{return it__9214__auto__.call(null);
}finally {(cljs.core.println = println_orig_val__11014);
}});})(_STAR_parent_description_STAR__orig_val__10737_11216,_STAR_parent_description_STAR__temp_val__10738_11217,description__9152__auto___11215))
),(function (){var description__9152__auto____$1 = speclj.components.new_description.call(null,"defmethods",false,"tic-tac-toe.bot-moves-spec");
var _STAR_parent_description_STAR__orig_val__11016_11222 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__11017_11223 = description__9152__auto____$1;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__11017_11223);

try{var seq__11023_11224 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,5,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_around.call(null,((function (_STAR_parent_description_STAR__orig_val__11016_11222,_STAR_parent_description_STAR__temp_val__11017_11223,description__9152__auto____$1,_STAR_parent_description_STAR__orig_val__10737_11216,_STAR_parent_description_STAR__temp_val__10738_11217,description__9152__auto___11215){
return (function (it__9214__auto__){
var find_easy_move_orig_val__11096 = tic_tac_toe.ai.easy_medium.find_easy_move;
var find_medium_move_orig_val__11097 = tic_tac_toe.ai.easy_medium.find_medium_move;
var find_best_move_memo_orig_val__11098 = tic_tac_toe.ai.minimax.find_best_move_memo;
var play_bot_move_orig_val__11099 = tic_tac_toe.bot_moves.play_bot_move;
var find_easy_move_temp_val__11100 = speclj.stub.stub.call(null,new cljs.core.Keyword(null,"find-easy-move","find-easy-move",1506541355),cljs.core.PersistentArrayMap.EMPTY);
var find_medium_move_temp_val__11101 = speclj.stub.stub.call(null,new cljs.core.Keyword(null,"find-medium-move","find-medium-move",1971910015),cljs.core.PersistentArrayMap.EMPTY);
var find_best_move_memo_temp_val__11102 = speclj.stub.stub.call(null,new cljs.core.Keyword(null,"find-best-move","find-best-move",-369337667),cljs.core.PersistentArrayMap.EMPTY);
var play_bot_move_temp_val__11103 = speclj.stub.stub.call(null,new cljs.core.Keyword(null,"play-bot-move","play-bot-move",448549335),cljs.core.PersistentArrayMap.EMPTY);
(tic_tac_toe.ai.easy_medium.find_easy_move = find_easy_move_temp_val__11100);

(tic_tac_toe.ai.easy_medium.find_medium_move = find_medium_move_temp_val__11101);

(tic_tac_toe.ai.minimax.find_best_move_memo = find_best_move_memo_temp_val__11102);

(tic_tac_toe.bot_moves.play_bot_move = play_bot_move_temp_val__11103);

try{return it__9214__auto__.call(null);
}finally {(tic_tac_toe.bot_moves.play_bot_move = play_bot_move_orig_val__11099);

(tic_tac_toe.ai.minimax.find_best_move_memo = find_best_move_memo_orig_val__11098);

(tic_tac_toe.ai.easy_medium.find_medium_move = find_medium_move_orig_val__11097);

(tic_tac_toe.ai.easy_medium.find_easy_move = find_easy_move_orig_val__11096);
}});})(_STAR_parent_description_STAR__orig_val__11016_11222,_STAR_parent_description_STAR__temp_val__11017_11223,description__9152__auto____$1,_STAR_parent_description_STAR__orig_val__10737_11216,_STAR_parent_description_STAR__temp_val__10738_11217,description__9152__auto___11215))
),speclj.components.new_characteristic.call(null,"calls find-easy-move",((function (_STAR_parent_description_STAR__orig_val__11016_11222,_STAR_parent_description_STAR__temp_val__11017_11223,description__9152__auto____$1,_STAR_parent_description_STAR__orig_val__10737_11216,_STAR_parent_description_STAR__temp_val__10738_11217,description__9152__auto___11215){
return (function (){
tic_tac_toe.player.take_turn.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"first-ai-level","first-ai-level",1004633644),(1),new cljs.core.Keyword(null,"board","board",-1907017633),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(3),(4),(5),(6),(7),(8),(9)], null),new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"o","o",-1350007228),new cljs.core.Keyword(null,"mode","mode",654403691),(2),new cljs.core.Keyword(null,"second-ai-level","second-ai-level",-418730455),null], null));

tic_tac_toe.player.take_turn.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"first-ai-level","first-ai-level",1004633644),(1),new cljs.core.Keyword(null,"board","board",-1907017633),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),(2),(3),(4),(5),(6),(7),(8),(9)], null),new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"o","o",-1350007228),new cljs.core.Keyword(null,"mode","mode",654403691),(2),new cljs.core.Keyword(null,"second-ai-level","second-ai-level",-418730455),null], null));

var expected__9289__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(3),(4),(5),(6),(7),(8),(9)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),(2),(3),(4),(5),(6),(7),(8),(9)], null)], null)], null);
var actual__9290__auto__ = speclj.stub.invocations_of.call(null,new cljs.core.Keyword(null,"find-easy-move","find-easy-move",1506541355));
if(cljs.core._EQ_.call(null,expected__9289__auto__,actual__9290__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__9289__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9257__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9257__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__9290__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9257__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9257__auto__);
}
})()," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__11016_11222,_STAR_parent_description_STAR__temp_val__11017_11223,description__9152__auto____$1,_STAR_parent_description_STAR__orig_val__10737_11216,_STAR_parent_description_STAR__temp_val__10738_11217,description__9152__auto___11215))
,false),speclj.components.new_characteristic.call(null,"calls find-medium-move",((function (_STAR_parent_description_STAR__orig_val__11016_11222,_STAR_parent_description_STAR__temp_val__11017_11223,description__9152__auto____$1,_STAR_parent_description_STAR__orig_val__10737_11216,_STAR_parent_description_STAR__temp_val__10738_11217,description__9152__auto___11215){
return (function (){
tic_tac_toe.player.take_turn.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"first-ai-level","first-ai-level",1004633644),(2),new cljs.core.Keyword(null,"board","board",-1907017633),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(3),(4),(5),(6),(7),(8),(9)], null),new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"mode","mode",654403691),(3),new cljs.core.Keyword(null,"second-ai-level","second-ai-level",-418730455),null], null));

tic_tac_toe.player.take_turn.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"second-ai-level","second-ai-level",-418730455),(2),new cljs.core.Keyword(null,"board","board",-1907017633),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),(2),(3),(4),(5),(6),(7),(8),(9)], null),new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"o","o",-1350007228),new cljs.core.Keyword(null,"mode","mode",654403691),(4),new cljs.core.Keyword(null,"first-ai-level","first-ai-level",1004633644),(1)], null));

var expected__9289__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(3),(4),(5),(6),(7),(8),(9)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),(2),(3),(4),(5),(6),(7),(8),(9)], null)], null)], null);
var actual__9290__auto__ = speclj.stub.invocations_of.call(null,new cljs.core.Keyword(null,"find-medium-move","find-medium-move",1971910015));
if(cljs.core._EQ_.call(null,expected__9289__auto__,actual__9290__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__9289__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9257__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9257__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__9290__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9257__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9257__auto__);
}
})()," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__11016_11222,_STAR_parent_description_STAR__temp_val__11017_11223,description__9152__auto____$1,_STAR_parent_description_STAR__orig_val__10737_11216,_STAR_parent_description_STAR__temp_val__10738_11217,description__9152__auto___11215))
,false),speclj.components.new_characteristic.call(null,"calls find-best-move",((function (_STAR_parent_description_STAR__orig_val__11016_11222,_STAR_parent_description_STAR__temp_val__11017_11223,description__9152__auto____$1,_STAR_parent_description_STAR__orig_val__10737_11216,_STAR_parent_description_STAR__temp_val__10738_11217,description__9152__auto___11215){
return (function (){
tic_tac_toe.player.take_turn.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"first-ai-level","first-ai-level",1004633644),(3),new cljs.core.Keyword(null,"board","board",-1907017633),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(3),(4),(5),(6),(7),(8),(9)], null),new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"mode","mode",654403691),(4),new cljs.core.Keyword(null,"second-ai-level","second-ai-level",-418730455),null], null));

tic_tac_toe.player.take_turn.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"second-ai-level","second-ai-level",-418730455),(3),new cljs.core.Keyword(null,"board","board",-1907017633),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),(2),(3),(4),(5),(6),(7),(8),(9)], null),new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"o","o",-1350007228),new cljs.core.Keyword(null,"mode","mode",654403691),(4),new cljs.core.Keyword(null,"first-ai-level","first-ai-level",1004633644),(1)], null));

var expected__9289__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(3),(4),(5),(6),(7),(8),(9)], null),new cljs.core.Keyword(null,"x","x",2099068185),null], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),(2),(3),(4),(5),(6),(7),(8),(9)], null),new cljs.core.Keyword(null,"o","o",-1350007228),null], null)], null);
var actual__9290__auto__ = speclj.stub.invocations_of.call(null,new cljs.core.Keyword(null,"find-best-move","find-best-move",-369337667));
if(cljs.core._EQ_.call(null,expected__9289__auto__,actual__9290__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__9289__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9257__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9257__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__9290__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9257__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9257__auto__);
}
})()," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__11016_11222,_STAR_parent_description_STAR__temp_val__11017_11223,description__9152__auto____$1,_STAR_parent_description_STAR__orig_val__10737_11216,_STAR_parent_description_STAR__temp_val__10738_11217,description__9152__auto___11215))
,false),speclj.components.new_characteristic.call(null,"plays the bot move to the board",((function (_STAR_parent_description_STAR__orig_val__11016_11222,_STAR_parent_description_STAR__temp_val__11017_11223,description__9152__auto____$1,_STAR_parent_description_STAR__orig_val__10737_11216,_STAR_parent_description_STAR__temp_val__10738_11217,description__9152__auto___11215){
return (function (){
tic_tac_toe.player.take_turn.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"first-ai-level","first-ai-level",1004633644),(1),new cljs.core.Keyword(null,"board","board",-1907017633),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(3),(4),(5),(6),(7),(8),(9)], null),new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"o","o",-1350007228),new cljs.core.Keyword(null,"mode","mode",654403691),(2)], null));

var name__9536__auto__ = new cljs.core.Keyword(null,"play-bot-move","play-bot-move",448549335);
var options__9537__auto__ = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"with","with",-1536296876),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(3),(4),(5),(6),(7),(8),(9)], null),(2),new cljs.core.Keyword(null,"o","o",-1350007228),null], null)], null);
var invocations__9538__auto__ = speclj.stub.invocations_of.call(null,name__9536__auto__);
var times__9539__auto__ = new cljs.core.Keyword(null,"times","times",1671571467).cljs$core$IFn$_invoke$arity$1(options__9537__auto__);
var times_QMARK___9540__auto__ = typeof times__9539__auto__ === 'number';
var check_params_QMARK___9541__auto__ = cljs.core.contains_QMARK_.call(null,options__9537__auto__,new cljs.core.Keyword(null,"with","with",-1536296876));
var with__9542__auto__ = new cljs.core.Keyword(null,"with","with",-1536296876).cljs$core$IFn$_invoke$arity$1(options__9537__auto__);
var with__9542__auto____$1 = (((with__9542__auto__ == null))?cljs.core.PersistentVector.EMPTY:with__9542__auto__);
var invocations_str__9543__auto__ = (function (p1__9533__9544__auto__){
if(cljs.core._EQ_.call(null,(1),p1__9533__9544__auto__)){
return "invocation";
} else {
return "invocations";
}
});
if(((times_QMARK___9540__auto__) && (check_params_QMARK___9541__auto__))){
var matching_invocations__9545__auto__ = cljs.core.filter.call(null,(function (p1__9534__9546__auto__){
return speclj.stub.params_match_QMARK_.call(null,with__9542__auto____$1,p1__9534__9546__auto__);
}),invocations__9538__auto__);
var matching_count__9547__auto__ = cljs.core.count.call(null,matching_invocations__9545__auto__);
if(cljs.core._EQ_.call(null,times__9539__auto__,matching_count__9547__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(times__9539__auto__)," ",invocations_str__9543__auto__.call(null,times__9539__auto__)," of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__9536__auto__)," with ",cljs.core.pr_str.call(null,with__9542__auto____$1),speclj.platform.endl,"     got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(matching_count__9547__auto__)," ",invocations_str__9543__auto__.call(null,matching_count__9547__auto__)].join('')));
}
} else {
if(check_params_QMARK___9541__auto__){
if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__9535__9548__auto__){
return speclj.stub.params_match_QMARK_.call(null,with__9542__auto____$1,p1__9535__9548__auto__);
}),invocations__9538__auto__))){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: invocation of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__9536__auto__)," with ",cljs.core.pr_str.call(null,with__9542__auto____$1),speclj.platform.endl,"     got: ",cljs.core.pr_str.call(null,invocations__9538__auto__)].join('')));
}
} else {
if(times_QMARK___9540__auto__){
if(cljs.core._EQ_.call(null,times__9539__auto__,cljs.core.count.call(null,invocations__9538__auto__))){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(times__9539__auto__)," ",invocations_str__9543__auto__.call(null,times__9539__auto__)," of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__9536__auto__),speclj.platform.endl,"     got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,invocations__9538__auto__))].join('')));
}
} else {
if(cljs.core.seq.call(null,invocations__9538__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: an invocation of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__9536__auto__),speclj.platform.endl,"     got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,invocations__9538__auto__))].join('')));
}

}
}
}
});})(_STAR_parent_description_STAR__orig_val__11016_11222,_STAR_parent_description_STAR__temp_val__11017_11223,description__9152__auto____$1,_STAR_parent_description_STAR__orig_val__10737_11216,_STAR_parent_description_STAR__temp_val__10738_11217,description__9152__auto___11215))
,false)],null)));
var chunk__11024_11225 = null;
var count__11025_11226 = (0);
var i__11026_11227 = (0);
while(true){
if((i__11026_11227 < count__11025_11226)){
var component__9153__auto___11275 = cljs.core._nth.call(null,chunk__11024_11225,i__11026_11227);
speclj.components.install.call(null,component__9153__auto___11275,description__9152__auto____$1);


var G__11276 = seq__11023_11224;
var G__11277 = chunk__11024_11225;
var G__11278 = count__11025_11226;
var G__11279 = (i__11026_11227 + (1));
seq__11023_11224 = G__11276;
chunk__11024_11225 = G__11277;
count__11025_11226 = G__11278;
i__11026_11227 = G__11279;
continue;
} else {
var temp__5804__auto___11280 = cljs.core.seq.call(null,seq__11023_11224);
if(temp__5804__auto___11280){
var seq__11023_11281__$1 = temp__5804__auto___11280;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11023_11281__$1)){
var c__5525__auto___11286 = cljs.core.chunk_first.call(null,seq__11023_11281__$1);
var G__11290 = cljs.core.chunk_rest.call(null,seq__11023_11281__$1);
var G__11291 = c__5525__auto___11286;
var G__11292 = cljs.core.count.call(null,c__5525__auto___11286);
var G__11293 = (0);
seq__11023_11224 = G__11290;
chunk__11024_11225 = G__11291;
count__11025_11226 = G__11292;
i__11026_11227 = G__11293;
continue;
} else {
var component__9153__auto___11294 = cljs.core.first.call(null,seq__11023_11281__$1);
speclj.components.install.call(null,component__9153__auto___11294,description__9152__auto____$1);


var G__11295 = cljs.core.next.call(null,seq__11023_11281__$1);
var G__11296 = null;
var G__11297 = (0);
var G__11298 = (0);
seq__11023_11224 = G__11295;
chunk__11024_11225 = G__11296;
count__11025_11226 = G__11297;
i__11026_11227 = G__11298;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__11016_11222);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__9152__auto____$1);
}

return description__9152__auto____$1;
})(),(function (){var description__9152__auto____$1 = speclj.components.new_description.call(null,"play-bot-move",false,"tic-tac-toe.bot-moves-spec");
var _STAR_parent_description_STAR__orig_val__11146_11300 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__11147_11301 = description__9152__auto____$1;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__11147_11301);

try{var seq__11148_11302 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_characteristic.call(null,"plays bot move to board",((function (_STAR_parent_description_STAR__orig_val__11146_11300,_STAR_parent_description_STAR__temp_val__11147_11301,description__9152__auto____$1,_STAR_parent_description_STAR__orig_val__10737_11216,_STAR_parent_description_STAR__temp_val__10738_11217,description__9152__auto___11215){
return (function (){
var expected__9289__auto___11306 = new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(3),(4),new cljs.core.Keyword(null,"o","o",-1350007228),(6),(7),(8),(9)], null);
var actual__9290__auto___11307 = tic_tac_toe.bot_moves.play_bot_move.call(null,(5),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(3),(4),(5),(6),(7),(8),(9)], null),(2),new cljs.core.Keyword(null,"o","o",-1350007228),false);
if(cljs.core._EQ_.call(null,expected__9289__auto___11306,actual__9290__auto___11307)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__9289__auto___11306;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9257__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9257__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__9290__auto___11307;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9257__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9257__auto__);
}
})()," (using =)"].join('')));
}

var expected__9289__auto___11312 = new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"o","o",-1350007228),(2),(3),(4),(5),(6),(7),(8),(9)], null);
var actual__9290__auto___11313 = tic_tac_toe.bot_moves.play_bot_move.call(null,(1),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(3),(4),(5),(6),(7),(8),(9)], null),(2),new cljs.core.Keyword(null,"o","o",-1350007228),false);
if(cljs.core._EQ_.call(null,expected__9289__auto___11312,actual__9290__auto___11313)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__9289__auto___11312;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9257__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9257__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__9290__auto___11313;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9257__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9257__auto__);
}
})()," (using =)"].join('')));
}

var expected__9289__auto__ = new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(3),(4),(5),(6),(7),(8),new cljs.core.Keyword(null,"o","o",-1350007228)], null);
var actual__9290__auto__ = tic_tac_toe.bot_moves.play_bot_move.call(null,(9),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(3),(4),(5),(6),(7),(8),(9)], null),(2),new cljs.core.Keyword(null,"o","o",-1350007228),false);
if(cljs.core._EQ_.call(null,expected__9289__auto__,actual__9290__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__9289__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9257__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9257__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__9290__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9257__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9257__auto__);
}
})()," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__11146_11300,_STAR_parent_description_STAR__temp_val__11147_11301,description__9152__auto____$1,_STAR_parent_description_STAR__orig_val__10737_11216,_STAR_parent_description_STAR__temp_val__10738_11217,description__9152__auto___11215))
,false),speclj.components.new_characteristic.call(null,"displays bot-move to user",((function (_STAR_parent_description_STAR__orig_val__11146_11300,_STAR_parent_description_STAR__temp_val__11147_11301,description__9152__auto____$1,_STAR_parent_description_STAR__orig_val__10737_11216,_STAR_parent_description_STAR__temp_val__10738_11217,description__9152__auto___11215){
return (function (){
var display_bot_move_message_orig_val__11187 = tic_tac_toe.print_utils.display_bot_move_message;
var display_bot_move_message_temp_val__11188 = speclj.stub.stub.call(null,new cljs.core.Keyword(null,"display-bot-move-message","display-bot-move-message",1492900627),cljs.core.PersistentArrayMap.EMPTY);
(tic_tac_toe.print_utils.display_bot_move_message = display_bot_move_message_temp_val__11188);

try{tic_tac_toe.bot_moves.play_bot_move.call(null,(5),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(3),(4),(5),(6),(7),(8),(9)], null),(2),new cljs.core.Keyword(null,"o","o",-1350007228),new cljs.core.Keyword(null,"tui","tui",-1217057309));

var name__9536__auto__ = new cljs.core.Keyword(null,"display-bot-move-message","display-bot-move-message",1492900627);
var options__9537__auto__ = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"with","with",-1536296876),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(5),(2),new cljs.core.Keyword(null,"o","o",-1350007228)], null)], null);
var invocations__9538__auto__ = speclj.stub.invocations_of.call(null,name__9536__auto__);
var times__9539__auto__ = new cljs.core.Keyword(null,"times","times",1671571467).cljs$core$IFn$_invoke$arity$1(options__9537__auto__);
var times_QMARK___9540__auto__ = typeof times__9539__auto__ === 'number';
var check_params_QMARK___9541__auto__ = cljs.core.contains_QMARK_.call(null,options__9537__auto__,new cljs.core.Keyword(null,"with","with",-1536296876));
var with__9542__auto__ = new cljs.core.Keyword(null,"with","with",-1536296876).cljs$core$IFn$_invoke$arity$1(options__9537__auto__);
var with__9542__auto____$1 = (((with__9542__auto__ == null))?cljs.core.PersistentVector.EMPTY:with__9542__auto__);
var invocations_str__9543__auto__ = (function (p1__9533__9544__auto__){
if(cljs.core._EQ_.call(null,(1),p1__9533__9544__auto__)){
return "invocation";
} else {
return "invocations";
}
});
if(((times_QMARK___9540__auto__) && (check_params_QMARK___9541__auto__))){
var matching_invocations__9545__auto__ = cljs.core.filter.call(null,(function (p1__9534__9546__auto__){
return speclj.stub.params_match_QMARK_.call(null,with__9542__auto____$1,p1__9534__9546__auto__);
}),invocations__9538__auto__);
var matching_count__9547__auto__ = cljs.core.count.call(null,matching_invocations__9545__auto__);
if(cljs.core._EQ_.call(null,times__9539__auto__,matching_count__9547__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(times__9539__auto__)," ",invocations_str__9543__auto__.call(null,times__9539__auto__)," of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__9536__auto__)," with ",cljs.core.pr_str.call(null,with__9542__auto____$1),speclj.platform.endl,"     got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(matching_count__9547__auto__)," ",invocations_str__9543__auto__.call(null,matching_count__9547__auto__)].join('')));
}
} else {
if(check_params_QMARK___9541__auto__){
if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__9535__9548__auto__){
return speclj.stub.params_match_QMARK_.call(null,with__9542__auto____$1,p1__9535__9548__auto__);
}),invocations__9538__auto__))){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: invocation of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__9536__auto__)," with ",cljs.core.pr_str.call(null,with__9542__auto____$1),speclj.platform.endl,"     got: ",cljs.core.pr_str.call(null,invocations__9538__auto__)].join('')));
}
} else {
if(times_QMARK___9540__auto__){
if(cljs.core._EQ_.call(null,times__9539__auto__,cljs.core.count.call(null,invocations__9538__auto__))){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(times__9539__auto__)," ",invocations_str__9543__auto__.call(null,times__9539__auto__)," of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__9536__auto__),speclj.platform.endl,"     got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,invocations__9538__auto__))].join('')));
}
} else {
if(cljs.core.seq.call(null,invocations__9538__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: an invocation of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__9536__auto__),speclj.platform.endl,"     got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,invocations__9538__auto__))].join('')));
}

}
}
}
}finally {(tic_tac_toe.print_utils.display_bot_move_message = display_bot_move_message_orig_val__11187);
}});})(_STAR_parent_description_STAR__orig_val__11146_11300,_STAR_parent_description_STAR__temp_val__11147_11301,description__9152__auto____$1,_STAR_parent_description_STAR__orig_val__10737_11216,_STAR_parent_description_STAR__temp_val__10738_11217,description__9152__auto___11215))
,false)],null)));
var chunk__11149_11303 = null;
var count__11150_11304 = (0);
var i__11151_11305 = (0);
while(true){
if((i__11151_11305 < count__11150_11304)){
var component__9153__auto___11331 = cljs.core._nth.call(null,chunk__11149_11303,i__11151_11305);
speclj.components.install.call(null,component__9153__auto___11331,description__9152__auto____$1);


var G__11332 = seq__11148_11302;
var G__11333 = chunk__11149_11303;
var G__11334 = count__11150_11304;
var G__11335 = (i__11151_11305 + (1));
seq__11148_11302 = G__11332;
chunk__11149_11303 = G__11333;
count__11150_11304 = G__11334;
i__11151_11305 = G__11335;
continue;
} else {
var temp__5804__auto___11336 = cljs.core.seq.call(null,seq__11148_11302);
if(temp__5804__auto___11336){
var seq__11148_11337__$1 = temp__5804__auto___11336;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11148_11337__$1)){
var c__5525__auto___11338 = cljs.core.chunk_first.call(null,seq__11148_11337__$1);
var G__11339 = cljs.core.chunk_rest.call(null,seq__11148_11337__$1);
var G__11340 = c__5525__auto___11338;
var G__11341 = cljs.core.count.call(null,c__5525__auto___11338);
var G__11342 = (0);
seq__11148_11302 = G__11339;
chunk__11149_11303 = G__11340;
count__11150_11304 = G__11341;
i__11151_11305 = G__11342;
continue;
} else {
var component__9153__auto___11343 = cljs.core.first.call(null,seq__11148_11337__$1);
speclj.components.install.call(null,component__9153__auto___11343,description__9152__auto____$1);


var G__11344 = cljs.core.next.call(null,seq__11148_11337__$1);
var G__11345 = null;
var G__11346 = (0);
var G__11347 = (0);
seq__11148_11302 = G__11344;
chunk__11149_11303 = G__11345;
count__11150_11304 = G__11346;
i__11151_11305 = G__11347;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__11146_11300);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__9152__auto____$1);
}

return description__9152__auto____$1;
})()],null)));
var chunk__10740_11219 = null;
var count__10741_11220 = (0);
var i__10742_11221 = (0);
while(true){
if((i__10742_11221 < count__10741_11220)){
var component__9153__auto___11348 = cljs.core._nth.call(null,chunk__10740_11219,i__10742_11221);
speclj.components.install.call(null,component__9153__auto___11348,description__9152__auto___11215);


var G__11349 = seq__10739_11218;
var G__11350 = chunk__10740_11219;
var G__11351 = count__10741_11220;
var G__11352 = (i__10742_11221 + (1));
seq__10739_11218 = G__11349;
chunk__10740_11219 = G__11350;
count__10741_11220 = G__11351;
i__10742_11221 = G__11352;
continue;
} else {
var temp__5804__auto___11353 = cljs.core.seq.call(null,seq__10739_11218);
if(temp__5804__auto___11353){
var seq__10739_11354__$1 = temp__5804__auto___11353;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10739_11354__$1)){
var c__5525__auto___11355 = cljs.core.chunk_first.call(null,seq__10739_11354__$1);
var G__11356 = cljs.core.chunk_rest.call(null,seq__10739_11354__$1);
var G__11357 = c__5525__auto___11355;
var G__11358 = cljs.core.count.call(null,c__5525__auto___11355);
var G__11359 = (0);
seq__10739_11218 = G__11356;
chunk__10740_11219 = G__11357;
count__10741_11220 = G__11358;
i__10742_11221 = G__11359;
continue;
} else {
var component__9153__auto___11360 = cljs.core.first.call(null,seq__10739_11354__$1);
speclj.components.install.call(null,component__9153__auto___11360,description__9152__auto___11215);


var G__11361 = cljs.core.next.call(null,seq__10739_11354__$1);
var G__11362 = null;
var G__11363 = (0);
var G__11364 = (0);
seq__10739_11218 = G__11361;
chunk__10740_11219 = G__11362;
count__10741_11220 = G__11363;
i__10742_11221 = G__11364;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__10737_11216);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__9152__auto___11215);
}


//# sourceMappingURL=bot_moves_spec.js.map
