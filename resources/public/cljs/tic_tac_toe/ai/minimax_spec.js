// Compiled by ClojureScript 1.11.132 {:optimizations :none}
goog.provide('tic_tac_toe.ai.minimax_spec');
goog.require('cljs.core');
goog.require('speclj.core');
goog.require('tic_tac_toe.ai.minimax');
goog.require('tic_tac_toe.ai.minimax_test_fns');
goog.require('tic_tac_toe.print_utils');
var description__7638__auto___9277 = speclj.components.new_description.call(null,"computer opponent - is maximizer",false,"tic-tac-toe.ai.minimax-spec");
var _STAR_parent_description_STAR__orig_val__8188_9278 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__8189_9279 = description__7638__auto___9277;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__8189_9279);

try{var seq__8194_9280 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,7,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_around.call(null,((function (_STAR_parent_description_STAR__orig_val__8188_9278,_STAR_parent_description_STAR__temp_val__8189_9279,description__7638__auto___9277){
return (function (it__8008__auto__){
var _STAR_stubbed_invocations_STAR__orig_val__9219 = speclj.stub._STAR_stubbed_invocations_STAR_;
var _STAR_stubbed_invocations_STAR__temp_val__9220 = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
(speclj.stub._STAR_stubbed_invocations_STAR_ = _STAR_stubbed_invocations_STAR__temp_val__9220);

try{return it__8008__auto__.call(null);
}finally {(speclj.stub._STAR_stubbed_invocations_STAR_ = _STAR_stubbed_invocations_STAR__orig_val__9219);
}});})(_STAR_parent_description_STAR__orig_val__8188_9278,_STAR_parent_description_STAR__temp_val__8189_9279,description__7638__auto___9277))
),speclj.components.new_around.call(null,((function (_STAR_parent_description_STAR__orig_val__8188_9278,_STAR_parent_description_STAR__temp_val__8189_9279,description__7638__auto___9277){
return (function (it__7700__auto__){
var display_bot_thinking_message_orig_val__9221 = tic_tac_toe.print_utils.display_bot_thinking_message;
var display_bot_thinking_message_temp_val__9222 = speclj.stub.stub.call(null,new cljs.core.Keyword(null,"thinking","thinking",2063777387),cljs.core.PersistentArrayMap.EMPTY);
(tic_tac_toe.print_utils.display_bot_thinking_message = display_bot_thinking_message_temp_val__9222);

try{return it__7700__auto__.call(null);
}finally {(tic_tac_toe.print_utils.display_bot_thinking_message = display_bot_thinking_message_orig_val__9221);
}});})(_STAR_parent_description_STAR__orig_val__8188_9278,_STAR_parent_description_STAR__temp_val__8189_9279,description__7638__auto___9277))
),(function (){var description__7638__auto____$1 = speclj.components.new_description.call(null,"prove unbeatable",false,"tic-tac-toe.ai.minimax-spec");
var _STAR_parent_description_STAR__orig_val__9223_9284 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__9224_9285 = description__7638__auto____$1;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__9224_9285);

try{var seq__9225_9286 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.mapv.call(null,speclj.components.new_tag,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"slow","slow",120317203)], null)),speclj.components.new_characteristic.call(null,"wins or ties every possible game against human player",((function (_STAR_parent_description_STAR__orig_val__9223_9284,_STAR_parent_description_STAR__temp_val__9224_9285,description__7638__auto____$1,_STAR_parent_description_STAR__orig_val__8188_9278,_STAR_parent_description_STAR__temp_val__8189_9279,description__7638__auto___9277){
return (function (){
var expected__7775__auto__ = true;
var actual__7776__auto__ = tic_tac_toe.ai.minimax_test_fns.unbeatable_QMARK_.call(null,cljs.core.range.call(null,(1),(10)));
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
});})(_STAR_parent_description_STAR__orig_val__9223_9284,_STAR_parent_description_STAR__temp_val__9224_9285,description__7638__auto____$1,_STAR_parent_description_STAR__orig_val__8188_9278,_STAR_parent_description_STAR__temp_val__8189_9279,description__7638__auto___9277))
,false),speclj.components.new_characteristic.call(null,"minimax vs minimax always ties",((function (_STAR_parent_description_STAR__orig_val__9223_9284,_STAR_parent_description_STAR__temp_val__9224_9285,description__7638__auto____$1,_STAR_parent_description_STAR__orig_val__8188_9278,_STAR_parent_description_STAR__temp_val__8189_9279,description__7638__auto___9277){
return (function (){
var expected__7775__auto___9290 = true;
var actual__7776__auto___9291 = tic_tac_toe.ai.minimax_test_fns.always_ties_QMARK_.call(null,cljs.core.range.call(null,(1),(10)));
if(cljs.core._EQ_.call(null,expected__7775__auto___9290,actual__7776__auto___9291)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__7775__auto___9290;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7743__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7743__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__7776__auto___9291;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7743__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7743__auto__);
}
})()," (using =)"].join('')));
}

var expected__7775__auto__ = true;
var actual__7776__auto__ = tic_tac_toe.ai.minimax_test_fns.always_ties_QMARK_.call(null,cljs.core.range.call(null,(1),(17)));
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
});})(_STAR_parent_description_STAR__orig_val__9223_9284,_STAR_parent_description_STAR__temp_val__9224_9285,description__7638__auto____$1,_STAR_parent_description_STAR__orig_val__8188_9278,_STAR_parent_description_STAR__temp_val__8189_9279,description__7638__auto___9277))
,false)],null)));
var chunk__9226_9287 = null;
var count__9227_9288 = (0);
var i__9228_9289 = (0);
while(true){
if((i__9228_9289 < count__9227_9288)){
var component__7639__auto___9292 = cljs.core._nth.call(null,chunk__9226_9287,i__9228_9289);
speclj.components.install.call(null,component__7639__auto___9292,description__7638__auto____$1);


var G__9293 = seq__9225_9286;
var G__9294 = chunk__9226_9287;
var G__9295 = count__9227_9288;
var G__9296 = (i__9228_9289 + (1));
seq__9225_9286 = G__9293;
chunk__9226_9287 = G__9294;
count__9227_9288 = G__9295;
i__9228_9289 = G__9296;
continue;
} else {
var temp__5804__auto___9297 = cljs.core.seq.call(null,seq__9225_9286);
if(temp__5804__auto___9297){
var seq__9225_9298__$1 = temp__5804__auto___9297;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9225_9298__$1)){
var c__5525__auto___9299 = cljs.core.chunk_first.call(null,seq__9225_9298__$1);
var G__9300 = cljs.core.chunk_rest.call(null,seq__9225_9298__$1);
var G__9301 = c__5525__auto___9299;
var G__9302 = cljs.core.count.call(null,c__5525__auto___9299);
var G__9303 = (0);
seq__9225_9286 = G__9300;
chunk__9226_9287 = G__9301;
count__9227_9288 = G__9302;
i__9228_9289 = G__9303;
continue;
} else {
var component__7639__auto___9304 = cljs.core.first.call(null,seq__9225_9298__$1);
speclj.components.install.call(null,component__7639__auto___9304,description__7638__auto____$1);


var G__9305 = cljs.core.next.call(null,seq__9225_9298__$1);
var G__9306 = null;
var G__9307 = (0);
var G__9308 = (0);
seq__9225_9286 = G__9305;
chunk__9226_9287 = G__9306;
count__9227_9288 = G__9307;
i__9228_9289 = G__9308;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__9223_9284);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__7638__auto____$1);
}

return description__7638__auto____$1;
})(),(function (){var description__7638__auto____$1 = speclj.components.new_description.call(null,"plays as O",false,"tic-tac-toe.ai.minimax-spec");
var _STAR_parent_description_STAR__orig_val__9229_9309 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__9230_9310 = description__7638__auto____$1;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__9230_9310);

try{var seq__9231_9311 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_characteristic.call(null,"finds move if next move is a win",((function (_STAR_parent_description_STAR__orig_val__9229_9309,_STAR_parent_description_STAR__temp_val__9230_9310,description__7638__auto____$1,_STAR_parent_description_STAR__orig_val__8188_9278,_STAR_parent_description_STAR__temp_val__8189_9279,description__7638__auto___9277){
return (function (){
var expected__7775__auto___9315 = (2);
var actual__7776__auto___9316 = tic_tac_toe.ai.minimax.find_best_move_memo.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"o","o",-1350007228),(2),new cljs.core.Keyword(null,"o","o",-1350007228),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"o","o",-1350007228),new cljs.core.Keyword(null,"x","x",2099068185),(8),new cljs.core.Keyword(null,"x","x",2099068185)], null),new cljs.core.Keyword(null,"o","o",-1350007228),false);
if(cljs.core._EQ_.call(null,expected__7775__auto___9315,actual__7776__auto___9316)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__7775__auto___9315;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7743__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7743__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__7776__auto___9316;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7743__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7743__auto__);
}
})()," (using =)"].join('')));
}

var expected__7775__auto___9317 = (2);
var actual__7776__auto___9318 = tic_tac_toe.ai.minimax.find_best_move_memo.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"o","o",-1350007228),(2),new cljs.core.Keyword(null,"o","o",-1350007228),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"x","x",2099068185),(6),new cljs.core.Keyword(null,"x","x",2099068185),(8),(9)], null),new cljs.core.Keyword(null,"o","o",-1350007228),false);
if(cljs.core._EQ_.call(null,expected__7775__auto___9317,actual__7776__auto___9318)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__7775__auto___9317;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7743__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7743__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__7776__auto___9318;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7743__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7743__auto__);
}
})()," (using =)"].join('')));
}

var expected__7775__auto___9319 = (4);
var actual__7776__auto___9320 = tic_tac_toe.ai.minimax.find_best_move_memo.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"x","x",2099068185),(4),new cljs.core.Keyword(null,"o","o",-1350007228),new cljs.core.Keyword(null,"o","o",-1350007228),new cljs.core.Keyword(null,"o","o",-1350007228),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"x","x",2099068185)], null),new cljs.core.Keyword(null,"o","o",-1350007228),false);
if(cljs.core._EQ_.call(null,expected__7775__auto___9319,actual__7776__auto___9320)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__7775__auto___9319;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7743__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7743__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__7776__auto___9320;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7743__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7743__auto__);
}
})()," (using =)"].join('')));
}

var expected__7775__auto__ = (3);
var actual__7776__auto__ = tic_tac_toe.ai.minimax.find_best_move_memo.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(3),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"o","o",-1350007228),(7),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"o","o",-1350007228)], null),new cljs.core.Keyword(null,"o","o",-1350007228),false);
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
});})(_STAR_parent_description_STAR__orig_val__9229_9309,_STAR_parent_description_STAR__temp_val__9230_9310,description__7638__auto____$1,_STAR_parent_description_STAR__orig_val__8188_9278,_STAR_parent_description_STAR__temp_val__8189_9279,description__7638__auto___9277))
,false),speclj.components.new_characteristic.call(null,"finds move if next move is a block",((function (_STAR_parent_description_STAR__orig_val__9229_9309,_STAR_parent_description_STAR__temp_val__9230_9310,description__7638__auto____$1,_STAR_parent_description_STAR__orig_val__8188_9278,_STAR_parent_description_STAR__temp_val__8189_9279,description__7638__auto___9277){
return (function (){
var expected__7775__auto___9321 = (4);
var actual__7776__auto___9322 = tic_tac_toe.ai.minimax.find_best_move_memo.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),new cljs.core.Keyword(null,"o","o",-1350007228),(4),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"x","x",2099068185),(7),(8),(9)], null),new cljs.core.Keyword(null,"o","o",-1350007228),false);
if(cljs.core._EQ_.call(null,expected__7775__auto___9321,actual__7776__auto___9322)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__7775__auto___9321;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7743__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7743__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__7776__auto___9322;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7743__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7743__auto__);
}
})()," (using =)"].join('')));
}

var expected__7775__auto___9323 = (1);
var actual__7776__auto___9324 = tic_tac_toe.ai.minimax.find_best_move_memo.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),new cljs.core.Keyword(null,"o","o",-1350007228),(4),new cljs.core.Keyword(null,"x","x",2099068185),(6),(7),(8),new cljs.core.Keyword(null,"x","x",2099068185)], null),new cljs.core.Keyword(null,"o","o",-1350007228),false);
if(cljs.core._EQ_.call(null,expected__7775__auto___9323,actual__7776__auto___9324)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__7775__auto___9323;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7743__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7743__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__7776__auto___9324;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7743__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7743__auto__);
}
})()," (using =)"].join('')));
}

var expected__7775__auto___9325 = (9);
var actual__7776__auto___9326 = tic_tac_toe.ai.minimax.find_best_move_memo.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"o","o",-1350007228),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"o","o",-1350007228),new cljs.core.Keyword(null,"o","o",-1350007228),new cljs.core.Keyword(null,"x","x",2099068185),(7),new cljs.core.Keyword(null,"x","x",2099068185),(9)], null),new cljs.core.Keyword(null,"o","o",-1350007228),false);
if(cljs.core._EQ_.call(null,expected__7775__auto___9325,actual__7776__auto___9326)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__7775__auto___9325;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7743__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7743__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__7776__auto___9326;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7743__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7743__auto__);
}
})()," (using =)"].join('')));
}

var expected__7775__auto__ = (4);
var actual__7776__auto__ = tic_tac_toe.ai.minimax.find_best_move_memo.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"o","o",-1350007228),new cljs.core.Keyword(null,"x","x",2099068185),(4),new cljs.core.Keyword(null,"o","o",-1350007228),(6),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"o","o",-1350007228)], null),new cljs.core.Keyword(null,"o","o",-1350007228),false);
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
});})(_STAR_parent_description_STAR__orig_val__9229_9309,_STAR_parent_description_STAR__temp_val__9230_9310,description__7638__auto____$1,_STAR_parent_description_STAR__orig_val__8188_9278,_STAR_parent_description_STAR__temp_val__8189_9279,description__7638__auto___9277))
,false),(function (){var description__7638__auto____$2 = speclj.components.new_description.call(null,"slow",false,"tic-tac-toe.ai.minimax-spec");
var _STAR_parent_description_STAR__orig_val__9241_9327 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__9242_9328 = description__7638__auto____$2;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__9242_9328);

try{var seq__9243_9329 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.mapv.call(null,speclj.components.new_tag,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"slow","slow",120317203)], null)),speclj.components.new_characteristic.call(null,"finds move with most potential to win if not blocked",((function (_STAR_parent_description_STAR__orig_val__9241_9327,_STAR_parent_description_STAR__temp_val__9242_9328,description__7638__auto____$2,_STAR_parent_description_STAR__orig_val__9229_9309,_STAR_parent_description_STAR__temp_val__9230_9310,description__7638__auto____$1,_STAR_parent_description_STAR__orig_val__8188_9278,_STAR_parent_description_STAR__temp_val__8189_9279,description__7638__auto___9277){
return (function (){
var expected__7775__auto__ = (5);
var actual__7776__auto__ = tic_tac_toe.ai.minimax.find_best_move_memo.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"o","o",-1350007228),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"o","o",-1350007228),new cljs.core.Keyword(null,"x","x",2099068185),(5),(6),(7),(8),new cljs.core.Keyword(null,"x","x",2099068185)], null),new cljs.core.Keyword(null,"o","o",-1350007228),false);
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
});})(_STAR_parent_description_STAR__orig_val__9241_9327,_STAR_parent_description_STAR__temp_val__9242_9328,description__7638__auto____$2,_STAR_parent_description_STAR__orig_val__9229_9309,_STAR_parent_description_STAR__temp_val__9230_9310,description__7638__auto____$1,_STAR_parent_description_STAR__orig_val__8188_9278,_STAR_parent_description_STAR__temp_val__8189_9279,description__7638__auto___9277))
,false),speclj.components.new_characteristic.call(null,"plays center if first move is a corner",((function (_STAR_parent_description_STAR__orig_val__9241_9327,_STAR_parent_description_STAR__temp_val__9242_9328,description__7638__auto____$2,_STAR_parent_description_STAR__orig_val__9229_9309,_STAR_parent_description_STAR__temp_val__9230_9310,description__7638__auto____$1,_STAR_parent_description_STAR__orig_val__8188_9278,_STAR_parent_description_STAR__temp_val__8189_9279,description__7638__auto___9277){
return (function (){
var expected__7775__auto___9333 = (5);
var actual__7776__auto___9334 = tic_tac_toe.ai.minimax.find_best_move_memo.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),(2),(3),(4),(5),(6),(7),(8),(9)], null),new cljs.core.Keyword(null,"o","o",-1350007228),false);
if(cljs.core._EQ_.call(null,expected__7775__auto___9333,actual__7776__auto___9334)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__7775__auto___9333;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7743__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7743__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__7776__auto___9334;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7743__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7743__auto__);
}
})()," (using =)"].join('')));
}

var expected__7775__auto___9335 = (5);
var actual__7776__auto___9336 = tic_tac_toe.ai.minimax.find_best_move_memo.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),new cljs.core.Keyword(null,"x","x",2099068185),(4),(5),(6),(7),(8),(9)], null),new cljs.core.Keyword(null,"o","o",-1350007228),false);
if(cljs.core._EQ_.call(null,expected__7775__auto___9335,actual__7776__auto___9336)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__7775__auto___9335;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7743__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7743__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__7776__auto___9336;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7743__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7743__auto__);
}
})()," (using =)"].join('')));
}

var expected__7775__auto___9337 = (5);
var actual__7776__auto___9338 = tic_tac_toe.ai.minimax.find_best_move_memo.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(3),(4),(5),(6),new cljs.core.Keyword(null,"x","x",2099068185),(8),(9)], null),new cljs.core.Keyword(null,"o","o",-1350007228),false);
if(cljs.core._EQ_.call(null,expected__7775__auto___9337,actual__7776__auto___9338)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__7775__auto___9337;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7743__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7743__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__7776__auto___9338;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7743__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7743__auto__);
}
})()," (using =)"].join('')));
}

var expected__7775__auto__ = (5);
var actual__7776__auto__ = tic_tac_toe.ai.minimax.find_best_move_memo.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(3),(4),(5),(6),(7),(8),new cljs.core.Keyword(null,"x","x",2099068185)], null),new cljs.core.Keyword(null,"o","o",-1350007228),false);
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
});})(_STAR_parent_description_STAR__orig_val__9241_9327,_STAR_parent_description_STAR__temp_val__9242_9328,description__7638__auto____$2,_STAR_parent_description_STAR__orig_val__9229_9309,_STAR_parent_description_STAR__temp_val__9230_9310,description__7638__auto____$1,_STAR_parent_description_STAR__orig_val__8188_9278,_STAR_parent_description_STAR__temp_val__8189_9279,description__7638__auto___9277))
,false)],null)));
var chunk__9244_9330 = null;
var count__9245_9331 = (0);
var i__9246_9332 = (0);
while(true){
if((i__9246_9332 < count__9245_9331)){
var component__7639__auto___9339 = cljs.core._nth.call(null,chunk__9244_9330,i__9246_9332);
speclj.components.install.call(null,component__7639__auto___9339,description__7638__auto____$2);


var G__9340 = seq__9243_9329;
var G__9341 = chunk__9244_9330;
var G__9342 = count__9245_9331;
var G__9343 = (i__9246_9332 + (1));
seq__9243_9329 = G__9340;
chunk__9244_9330 = G__9341;
count__9245_9331 = G__9342;
i__9246_9332 = G__9343;
continue;
} else {
var temp__5804__auto___9344 = cljs.core.seq.call(null,seq__9243_9329);
if(temp__5804__auto___9344){
var seq__9243_9345__$1 = temp__5804__auto___9344;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9243_9345__$1)){
var c__5525__auto___9346 = cljs.core.chunk_first.call(null,seq__9243_9345__$1);
var G__9347 = cljs.core.chunk_rest.call(null,seq__9243_9345__$1);
var G__9348 = c__5525__auto___9346;
var G__9349 = cljs.core.count.call(null,c__5525__auto___9346);
var G__9350 = (0);
seq__9243_9329 = G__9347;
chunk__9244_9330 = G__9348;
count__9245_9331 = G__9349;
i__9246_9332 = G__9350;
continue;
} else {
var component__7639__auto___9351 = cljs.core.first.call(null,seq__9243_9345__$1);
speclj.components.install.call(null,component__7639__auto___9351,description__7638__auto____$2);


var G__9352 = cljs.core.next.call(null,seq__9243_9345__$1);
var G__9353 = null;
var G__9354 = (0);
var G__9355 = (0);
seq__9243_9329 = G__9352;
chunk__9244_9330 = G__9353;
count__9245_9331 = G__9354;
i__9246_9332 = G__9355;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__9241_9327);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__7638__auto____$2);
}

return description__7638__auto____$2;
})()],null)));
var chunk__9232_9312 = null;
var count__9233_9313 = (0);
var i__9234_9314 = (0);
while(true){
if((i__9234_9314 < count__9233_9313)){
var component__7639__auto___9356 = cljs.core._nth.call(null,chunk__9232_9312,i__9234_9314);
speclj.components.install.call(null,component__7639__auto___9356,description__7638__auto____$1);


var G__9357 = seq__9231_9311;
var G__9358 = chunk__9232_9312;
var G__9359 = count__9233_9313;
var G__9360 = (i__9234_9314 + (1));
seq__9231_9311 = G__9357;
chunk__9232_9312 = G__9358;
count__9233_9313 = G__9359;
i__9234_9314 = G__9360;
continue;
} else {
var temp__5804__auto___9361 = cljs.core.seq.call(null,seq__9231_9311);
if(temp__5804__auto___9361){
var seq__9231_9362__$1 = temp__5804__auto___9361;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9231_9362__$1)){
var c__5525__auto___9363 = cljs.core.chunk_first.call(null,seq__9231_9362__$1);
var G__9364 = cljs.core.chunk_rest.call(null,seq__9231_9362__$1);
var G__9365 = c__5525__auto___9363;
var G__9366 = cljs.core.count.call(null,c__5525__auto___9363);
var G__9367 = (0);
seq__9231_9311 = G__9364;
chunk__9232_9312 = G__9365;
count__9233_9313 = G__9366;
i__9234_9314 = G__9367;
continue;
} else {
var component__7639__auto___9368 = cljs.core.first.call(null,seq__9231_9362__$1);
speclj.components.install.call(null,component__7639__auto___9368,description__7638__auto____$1);


var G__9369 = cljs.core.next.call(null,seq__9231_9362__$1);
var G__9370 = null;
var G__9371 = (0);
var G__9372 = (0);
seq__9231_9311 = G__9369;
chunk__9232_9312 = G__9370;
count__9233_9313 = G__9371;
i__9234_9314 = G__9372;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__9229_9309);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__7638__auto____$1);
}

return description__7638__auto____$1;
})(),(function (){var description__7638__auto____$1 = speclj.components.new_description.call(null,"plays as X",false,"tic-tac-toe.ai.minimax-spec");
var _STAR_parent_description_STAR__orig_val__9247_9373 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__9248_9374 = description__7638__auto____$1;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__9248_9374);

try{var seq__9249_9375 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_characteristic.call(null,"finds move if next move is a win",((function (_STAR_parent_description_STAR__orig_val__9247_9373,_STAR_parent_description_STAR__temp_val__9248_9374,description__7638__auto____$1,_STAR_parent_description_STAR__orig_val__8188_9278,_STAR_parent_description_STAR__temp_val__8189_9279,description__7638__auto___9277){
return (function (){
var expected__7775__auto___9379 = (2);
var actual__7776__auto___9380 = tic_tac_toe.ai.minimax.find_best_move_memo.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),(2),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"o","o",-1350007228),new cljs.core.Keyword(null,"o","o",-1350007228),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"o","o",-1350007228),(8),new cljs.core.Keyword(null,"o","o",-1350007228)], null),new cljs.core.Keyword(null,"x","x",2099068185),false);
if(cljs.core._EQ_.call(null,expected__7775__auto___9379,actual__7776__auto___9380)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__7775__auto___9379;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7743__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7743__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__7776__auto___9380;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7743__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7743__auto__);
}
})()," (using =)"].join('')));
}

var expected__7775__auto___9381 = (2);
var actual__7776__auto___9382 = tic_tac_toe.ai.minimax.find_best_move_memo.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),(2),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"o","o",-1350007228),new cljs.core.Keyword(null,"o","o",-1350007228),(6),new cljs.core.Keyword(null,"o","o",-1350007228),(8),(9)], null),new cljs.core.Keyword(null,"x","x",2099068185),false);
if(cljs.core._EQ_.call(null,expected__7775__auto___9381,actual__7776__auto___9382)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__7775__auto___9381;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7743__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7743__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__7776__auto___9382;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7743__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7743__auto__);
}
})()," (using =)"].join('')));
}

var expected__7775__auto___9383 = (4);
var actual__7776__auto___9384 = tic_tac_toe.ai.minimax.find_best_move_memo.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),new cljs.core.Keyword(null,"o","o",-1350007228),new cljs.core.Keyword(null,"o","o",-1350007228),(4),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"o","o",-1350007228),new cljs.core.Keyword(null,"o","o",-1350007228)], null),new cljs.core.Keyword(null,"x","x",2099068185),false);
if(cljs.core._EQ_.call(null,expected__7775__auto___9383,actual__7776__auto___9384)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__7775__auto___9383;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7743__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7743__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__7776__auto___9384;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7743__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7743__auto__);
}
})()," (using =)"].join('')));
}

var expected__7775__auto__ = (3);
var actual__7776__auto__ = tic_tac_toe.ai.minimax.find_best_move_memo.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(3),new cljs.core.Keyword(null,"o","o",-1350007228),new cljs.core.Keyword(null,"o","o",-1350007228),new cljs.core.Keyword(null,"x","x",2099068185),(7),new cljs.core.Keyword(null,"o","o",-1350007228),new cljs.core.Keyword(null,"x","x",2099068185)], null),new cljs.core.Keyword(null,"x","x",2099068185),false);
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
});})(_STAR_parent_description_STAR__orig_val__9247_9373,_STAR_parent_description_STAR__temp_val__9248_9374,description__7638__auto____$1,_STAR_parent_description_STAR__orig_val__8188_9278,_STAR_parent_description_STAR__temp_val__8189_9279,description__7638__auto___9277))
,false),speclj.components.new_characteristic.call(null,"finds move if next move is a block",((function (_STAR_parent_description_STAR__orig_val__9247_9373,_STAR_parent_description_STAR__temp_val__9248_9374,description__7638__auto____$1,_STAR_parent_description_STAR__orig_val__8188_9278,_STAR_parent_description_STAR__temp_val__8189_9279,description__7638__auto___9277){
return (function (){
var expected__7775__auto___9385 = (4);
var actual__7776__auto___9386 = tic_tac_toe.ai.minimax.find_best_move_memo.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),new cljs.core.Keyword(null,"x","x",2099068185),(4),new cljs.core.Keyword(null,"o","o",-1350007228),new cljs.core.Keyword(null,"o","o",-1350007228),(7),(8),(9)], null),new cljs.core.Keyword(null,"x","x",2099068185),false);
if(cljs.core._EQ_.call(null,expected__7775__auto___9385,actual__7776__auto___9386)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__7775__auto___9385;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7743__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7743__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__7776__auto___9386;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7743__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7743__auto__);
}
})()," (using =)"].join('')));
}

var expected__7775__auto___9387 = (1);
var actual__7776__auto___9388 = tic_tac_toe.ai.minimax.find_best_move_memo.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),new cljs.core.Keyword(null,"x","x",2099068185),(4),new cljs.core.Keyword(null,"o","o",-1350007228),(6),(7),(8),new cljs.core.Keyword(null,"o","o",-1350007228)], null),new cljs.core.Keyword(null,"x","x",2099068185),false);
if(cljs.core._EQ_.call(null,expected__7775__auto___9387,actual__7776__auto___9388)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__7775__auto___9387;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7743__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7743__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__7776__auto___9388;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7743__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7743__auto__);
}
})()," (using =)"].join('')));
}

var expected__7775__auto___9389 = (9);
var actual__7776__auto___9390 = tic_tac_toe.ai.minimax.find_best_move_memo.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"o","o",-1350007228),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"o","o",-1350007228),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"o","o",-1350007228),(7),new cljs.core.Keyword(null,"o","o",-1350007228),(9)], null),new cljs.core.Keyword(null,"x","x",2099068185),false);
if(cljs.core._EQ_.call(null,expected__7775__auto___9389,actual__7776__auto___9390)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__7775__auto___9389;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7743__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7743__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__7776__auto___9390;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7743__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7743__auto__);
}
})()," (using =)"].join('')));
}

var expected__7775__auto__ = (4);
var actual__7776__auto__ = tic_tac_toe.ai.minimax.find_best_move_memo.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"o","o",-1350007228),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"o","o",-1350007228),(4),new cljs.core.Keyword(null,"x","x",2099068185),(6),new cljs.core.Keyword(null,"o","o",-1350007228),new cljs.core.Keyword(null,"o","o",-1350007228),new cljs.core.Keyword(null,"x","x",2099068185)], null),new cljs.core.Keyword(null,"x","x",2099068185),false);
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
});})(_STAR_parent_description_STAR__orig_val__9247_9373,_STAR_parent_description_STAR__temp_val__9248_9374,description__7638__auto____$1,_STAR_parent_description_STAR__orig_val__8188_9278,_STAR_parent_description_STAR__temp_val__8189_9279,description__7638__auto___9277))
,false),(function (){var description__7638__auto____$2 = speclj.components.new_description.call(null,"slow",false,"tic-tac-toe.ai.minimax-spec");
var _STAR_parent_description_STAR__orig_val__9259_9391 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__9260_9392 = description__7638__auto____$2;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__9260_9392);

try{var seq__9261_9393 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.mapv.call(null,speclj.components.new_tag,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"slow","slow",120317203)], null)),speclj.components.new_characteristic.call(null,"finds move with most potential to win if not blocked",((function (_STAR_parent_description_STAR__orig_val__9259_9391,_STAR_parent_description_STAR__temp_val__9260_9392,description__7638__auto____$2,_STAR_parent_description_STAR__orig_val__9247_9373,_STAR_parent_description_STAR__temp_val__9248_9374,description__7638__auto____$1,_STAR_parent_description_STAR__orig_val__8188_9278,_STAR_parent_description_STAR__temp_val__8189_9279,description__7638__auto___9277){
return (function (){
var expected__7775__auto__ = (5);
var actual__7776__auto__ = tic_tac_toe.ai.minimax.find_best_move_memo.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"o","o",-1350007228),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"o","o",-1350007228),(5),(6),(7),(8),new cljs.core.Keyword(null,"o","o",-1350007228)], null),new cljs.core.Keyword(null,"x","x",2099068185),false);
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
});})(_STAR_parent_description_STAR__orig_val__9259_9391,_STAR_parent_description_STAR__temp_val__9260_9392,description__7638__auto____$2,_STAR_parent_description_STAR__orig_val__9247_9373,_STAR_parent_description_STAR__temp_val__9248_9374,description__7638__auto____$1,_STAR_parent_description_STAR__orig_val__8188_9278,_STAR_parent_description_STAR__temp_val__8189_9279,description__7638__auto___9277))
,false),speclj.components.new_characteristic.call(null,"plays center if first move is a corner",((function (_STAR_parent_description_STAR__orig_val__9259_9391,_STAR_parent_description_STAR__temp_val__9260_9392,description__7638__auto____$2,_STAR_parent_description_STAR__orig_val__9247_9373,_STAR_parent_description_STAR__temp_val__9248_9374,description__7638__auto____$1,_STAR_parent_description_STAR__orig_val__8188_9278,_STAR_parent_description_STAR__temp_val__8189_9279,description__7638__auto___9277){
return (function (){
var expected__7775__auto___9397 = (5);
var actual__7776__auto___9398 = tic_tac_toe.ai.minimax.find_best_move_memo.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"o","o",-1350007228),(2),(3),(4),(5),(6),(7),(8),(9)], null),new cljs.core.Keyword(null,"x","x",2099068185),false);
if(cljs.core._EQ_.call(null,expected__7775__auto___9397,actual__7776__auto___9398)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__7775__auto___9397;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7743__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7743__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__7776__auto___9398;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7743__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7743__auto__);
}
})()," (using =)"].join('')));
}

var expected__7775__auto___9399 = (5);
var actual__7776__auto___9400 = tic_tac_toe.ai.minimax.find_best_move_memo.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),new cljs.core.Keyword(null,"o","o",-1350007228),(4),(5),(6),(7),(8),(9)], null),new cljs.core.Keyword(null,"x","x",2099068185),false);
if(cljs.core._EQ_.call(null,expected__7775__auto___9399,actual__7776__auto___9400)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__7775__auto___9399;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7743__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7743__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__7776__auto___9400;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7743__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7743__auto__);
}
})()," (using =)"].join('')));
}

var expected__7775__auto___9401 = (5);
var actual__7776__auto___9402 = tic_tac_toe.ai.minimax.find_best_move_memo.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(3),(4),(5),(6),new cljs.core.Keyword(null,"o","o",-1350007228),(8),(9)], null),new cljs.core.Keyword(null,"x","x",2099068185),false);
if(cljs.core._EQ_.call(null,expected__7775__auto___9401,actual__7776__auto___9402)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__7775__auto___9401;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7743__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7743__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__7776__auto___9402;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7743__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7743__auto__);
}
})()," (using =)"].join('')));
}

var expected__7775__auto__ = (5);
var actual__7776__auto__ = tic_tac_toe.ai.minimax.find_best_move_memo.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(3),(4),(5),(6),(7),(8),new cljs.core.Keyword(null,"o","o",-1350007228)], null),new cljs.core.Keyword(null,"x","x",2099068185),false);
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
});})(_STAR_parent_description_STAR__orig_val__9259_9391,_STAR_parent_description_STAR__temp_val__9260_9392,description__7638__auto____$2,_STAR_parent_description_STAR__orig_val__9247_9373,_STAR_parent_description_STAR__temp_val__9248_9374,description__7638__auto____$1,_STAR_parent_description_STAR__orig_val__8188_9278,_STAR_parent_description_STAR__temp_val__8189_9279,description__7638__auto___9277))
,false)],null)));
var chunk__9262_9394 = null;
var count__9263_9395 = (0);
var i__9264_9396 = (0);
while(true){
if((i__9264_9396 < count__9263_9395)){
var component__7639__auto___9403 = cljs.core._nth.call(null,chunk__9262_9394,i__9264_9396);
speclj.components.install.call(null,component__7639__auto___9403,description__7638__auto____$2);


var G__9404 = seq__9261_9393;
var G__9405 = chunk__9262_9394;
var G__9406 = count__9263_9395;
var G__9407 = (i__9264_9396 + (1));
seq__9261_9393 = G__9404;
chunk__9262_9394 = G__9405;
count__9263_9395 = G__9406;
i__9264_9396 = G__9407;
continue;
} else {
var temp__5804__auto___9408 = cljs.core.seq.call(null,seq__9261_9393);
if(temp__5804__auto___9408){
var seq__9261_9409__$1 = temp__5804__auto___9408;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9261_9409__$1)){
var c__5525__auto___9410 = cljs.core.chunk_first.call(null,seq__9261_9409__$1);
var G__9411 = cljs.core.chunk_rest.call(null,seq__9261_9409__$1);
var G__9412 = c__5525__auto___9410;
var G__9413 = cljs.core.count.call(null,c__5525__auto___9410);
var G__9414 = (0);
seq__9261_9393 = G__9411;
chunk__9262_9394 = G__9412;
count__9263_9395 = G__9413;
i__9264_9396 = G__9414;
continue;
} else {
var component__7639__auto___9415 = cljs.core.first.call(null,seq__9261_9409__$1);
speclj.components.install.call(null,component__7639__auto___9415,description__7638__auto____$2);


var G__9416 = cljs.core.next.call(null,seq__9261_9409__$1);
var G__9417 = null;
var G__9418 = (0);
var G__9419 = (0);
seq__9261_9393 = G__9416;
chunk__9262_9394 = G__9417;
count__9263_9395 = G__9418;
i__9264_9396 = G__9419;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__9259_9391);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__7638__auto____$2);
}

return description__7638__auto____$2;
})()],null)));
var chunk__9250_9376 = null;
var count__9251_9377 = (0);
var i__9252_9378 = (0);
while(true){
if((i__9252_9378 < count__9251_9377)){
var component__7639__auto___9420 = cljs.core._nth.call(null,chunk__9250_9376,i__9252_9378);
speclj.components.install.call(null,component__7639__auto___9420,description__7638__auto____$1);


var G__9421 = seq__9249_9375;
var G__9422 = chunk__9250_9376;
var G__9423 = count__9251_9377;
var G__9424 = (i__9252_9378 + (1));
seq__9249_9375 = G__9421;
chunk__9250_9376 = G__9422;
count__9251_9377 = G__9423;
i__9252_9378 = G__9424;
continue;
} else {
var temp__5804__auto___9425 = cljs.core.seq.call(null,seq__9249_9375);
if(temp__5804__auto___9425){
var seq__9249_9426__$1 = temp__5804__auto___9425;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9249_9426__$1)){
var c__5525__auto___9427 = cljs.core.chunk_first.call(null,seq__9249_9426__$1);
var G__9428 = cljs.core.chunk_rest.call(null,seq__9249_9426__$1);
var G__9429 = c__5525__auto___9427;
var G__9430 = cljs.core.count.call(null,c__5525__auto___9427);
var G__9431 = (0);
seq__9249_9375 = G__9428;
chunk__9250_9376 = G__9429;
count__9251_9377 = G__9430;
i__9252_9378 = G__9431;
continue;
} else {
var component__7639__auto___9432 = cljs.core.first.call(null,seq__9249_9426__$1);
speclj.components.install.call(null,component__7639__auto___9432,description__7638__auto____$1);


var G__9433 = cljs.core.next.call(null,seq__9249_9426__$1);
var G__9434 = null;
var G__9435 = (0);
var G__9436 = (0);
seq__9249_9375 = G__9433;
chunk__9250_9376 = G__9434;
count__9251_9377 = G__9435;
i__9252_9378 = G__9436;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__9247_9373);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__7638__auto____$1);
}

return description__7638__auto____$1;
})(),(function (){var description__7638__auto____$1 = speclj.components.new_description.call(null,"plays 4x4 board",false,"tic-tac-toe.ai.minimax-spec");
var _STAR_parent_description_STAR__orig_val__9265_9437 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__9266_9438 = description__7638__auto____$1;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__9266_9438);

try{var seq__9267_9439 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,8,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.mapv.call(null,speclj.components.new_tag,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"slow","slow",120317203)], null)),speclj.components.new_characteristic.call(null,"finds move if next move is a win",((function (_STAR_parent_description_STAR__orig_val__9265_9437,_STAR_parent_description_STAR__temp_val__9266_9438,description__7638__auto____$1,_STAR_parent_description_STAR__orig_val__8188_9278,_STAR_parent_description_STAR__temp_val__8189_9279,description__7638__auto___9277){
return (function (){
var expected__7775__auto___9443 = (5);
var actual__7776__auto___9444 = tic_tac_toe.ai.minimax.find_best_move_memo.call(null,new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),(2),(3),new cljs.core.Keyword(null,"x","x",2099068185),(5),new cljs.core.Keyword(null,"o","o",-1350007228),new cljs.core.Keyword(null,"o","o",-1350007228),new cljs.core.Keyword(null,"o","o",-1350007228),(9),(10),new cljs.core.Keyword(null,"x","x",2099068185),(12),(13),new cljs.core.Keyword(null,"x","x",2099068185),(15),(16)], null),new cljs.core.Keyword(null,"o","o",-1350007228),false);
if(cljs.core._EQ_.call(null,expected__7775__auto___9443,actual__7776__auto___9444)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__7775__auto___9443;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7743__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7743__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__7776__auto___9444;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7743__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7743__auto__);
}
})()," (using =)"].join('')));
}

var expected__7775__auto__ = (5);
var actual__7776__auto__ = tic_tac_toe.ai.minimax.find_best_move_memo.call(null,new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"o","o",-1350007228),(2),(3),new cljs.core.Keyword(null,"o","o",-1350007228),(5),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"x","x",2099068185),(9),(10),new cljs.core.Keyword(null,"o","o",-1350007228),(12),(13),new cljs.core.Keyword(null,"o","o",-1350007228),(15),(16)], null),new cljs.core.Keyword(null,"x","x",2099068185),false);
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
});})(_STAR_parent_description_STAR__orig_val__9265_9437,_STAR_parent_description_STAR__temp_val__9266_9438,description__7638__auto____$1,_STAR_parent_description_STAR__orig_val__8188_9278,_STAR_parent_description_STAR__temp_val__8189_9279,description__7638__auto___9277))
,false),speclj.components.new_characteristic.call(null,"finds move if next move is a block",((function (_STAR_parent_description_STAR__orig_val__9265_9437,_STAR_parent_description_STAR__temp_val__9266_9438,description__7638__auto____$1,_STAR_parent_description_STAR__orig_val__8188_9278,_STAR_parent_description_STAR__temp_val__8189_9279,description__7638__auto___9277){
return (function (){
var expected__7775__auto__ = (4);
var actual__7776__auto__ = tic_tac_toe.ai.minimax.find_best_move_memo.call(null,new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"x","x",2099068185),(4),(5),(6),(7),(8),(9),(10),(11),(12),(13),(14),(15),(16)], null),new cljs.core.Keyword(null,"o","o",-1350007228),false);
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
});})(_STAR_parent_description_STAR__orig_val__9265_9437,_STAR_parent_description_STAR__temp_val__9266_9438,description__7638__auto____$1,_STAR_parent_description_STAR__orig_val__8188_9278,_STAR_parent_description_STAR__temp_val__8189_9279,description__7638__auto___9277))
,false),speclj.components.new_characteristic.call(null,"finds move on empty board",((function (_STAR_parent_description_STAR__orig_val__9265_9437,_STAR_parent_description_STAR__temp_val__9266_9438,description__7638__auto____$1,_STAR_parent_description_STAR__orig_val__8188_9278,_STAR_parent_description_STAR__temp_val__8189_9279,description__7638__auto___9277){
return (function (){
var expected__7775__auto__ = (1);
var actual__7776__auto__ = tic_tac_toe.ai.minimax.find_best_move_memo.call(null,cljs.core.vec.call(null,cljs.core.range.call(null,(1),(17))),new cljs.core.Keyword(null,"x","x",2099068185),false);
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
});})(_STAR_parent_description_STAR__orig_val__9265_9437,_STAR_parent_description_STAR__temp_val__9266_9438,description__7638__auto____$1,_STAR_parent_description_STAR__orig_val__8188_9278,_STAR_parent_description_STAR__temp_val__8189_9279,description__7638__auto___9277))
,false),speclj.components.new_characteristic.call(null,"finds second move",((function (_STAR_parent_description_STAR__orig_val__9265_9437,_STAR_parent_description_STAR__temp_val__9266_9438,description__7638__auto____$1,_STAR_parent_description_STAR__orig_val__8188_9278,_STAR_parent_description_STAR__temp_val__8189_9279,description__7638__auto___9277){
return (function (){
var expected__7775__auto___9445 = (2);
var actual__7776__auto___9446 = tic_tac_toe.ai.minimax.find_best_move_memo.call(null,new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),(2),(3),(4),(5),(6),(7),(8),(9),(10),(11),(12),(13),(14),(15),(16)], null),new cljs.core.Keyword(null,"o","o",-1350007228),false);
if(cljs.core._EQ_.call(null,expected__7775__auto___9445,actual__7776__auto___9446)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__7775__auto___9445;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7743__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7743__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__7776__auto___9446;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7743__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7743__auto__);
}
})()," (using =)"].join('')));
}

var expected__7775__auto___9447 = (1);
var actual__7776__auto___9448 = tic_tac_toe.ai.minimax.find_best_move_memo.call(null,new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),new cljs.core.Keyword(null,"x","x",2099068185),(3),(4),(5),(6),(7),(8),(9),(10),(11),(12),(13),(14),(15),(16)], null),new cljs.core.Keyword(null,"o","o",-1350007228),false);
if(cljs.core._EQ_.call(null,expected__7775__auto___9447,actual__7776__auto___9448)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__7775__auto___9447;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7743__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7743__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__7776__auto___9448;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7743__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7743__auto__);
}
})()," (using =)"].join('')));
}

var expected__7775__auto___9449 = (1);
var actual__7776__auto___9450 = tic_tac_toe.ai.minimax.find_best_move_memo.call(null,new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),new cljs.core.Keyword(null,"x","x",2099068185),(4),(5),(6),(7),(8),(9),(10),(11),(12),(13),(14),(15),(16)], null),new cljs.core.Keyword(null,"o","o",-1350007228),false);
if(cljs.core._EQ_.call(null,expected__7775__auto___9449,actual__7776__auto___9450)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__7775__auto___9449;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7743__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7743__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__7776__auto___9450;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7743__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7743__auto__);
}
})()," (using =)"].join('')));
}

var expected__7775__auto___9451 = (1);
var actual__7776__auto___9452 = tic_tac_toe.ai.minimax.find_best_move_memo.call(null,new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(3),new cljs.core.Keyword(null,"x","x",2099068185),(5),(6),(7),(8),(9),(10),(11),(12),(13),(14),(15),(16)], null),new cljs.core.Keyword(null,"o","o",-1350007228),false);
if(cljs.core._EQ_.call(null,expected__7775__auto___9451,actual__7776__auto___9452)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__7775__auto___9451;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7743__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7743__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__7776__auto___9452;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7743__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7743__auto__);
}
})()," (using =)"].join('')));
}

var expected__7775__auto___9453 = (1);
var actual__7776__auto___9454 = tic_tac_toe.ai.minimax.find_best_move_memo.call(null,new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(3),(4),new cljs.core.Keyword(null,"x","x",2099068185),(6),(7),(8),(9),(10),(11),(12),(13),(14),(15),(16)], null),new cljs.core.Keyword(null,"o","o",-1350007228),false);
if(cljs.core._EQ_.call(null,expected__7775__auto___9453,actual__7776__auto___9454)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__7775__auto___9453;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7743__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7743__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__7776__auto___9454;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7743__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7743__auto__);
}
})()," (using =)"].join('')));
}

var expected__7775__auto___9455 = (1);
var actual__7776__auto___9456 = tic_tac_toe.ai.minimax.find_best_move_memo.call(null,new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(3),(4),(5),new cljs.core.Keyword(null,"x","x",2099068185),(7),(8),(9),(10),(11),(12),(13),(14),(15),(16)], null),new cljs.core.Keyword(null,"o","o",-1350007228),false);
if(cljs.core._EQ_.call(null,expected__7775__auto___9455,actual__7776__auto___9456)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__7775__auto___9455;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7743__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7743__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__7776__auto___9456;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7743__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7743__auto__);
}
})()," (using =)"].join('')));
}

var expected__7775__auto___9457 = (1);
var actual__7776__auto___9458 = tic_tac_toe.ai.minimax.find_best_move_memo.call(null,new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(3),(4),(5),(6),new cljs.core.Keyword(null,"x","x",2099068185),(8),(9),(10),(11),(12),(13),(14),(15),(16)], null),new cljs.core.Keyword(null,"o","o",-1350007228),false);
if(cljs.core._EQ_.call(null,expected__7775__auto___9457,actual__7776__auto___9458)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__7775__auto___9457;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7743__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7743__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__7776__auto___9458;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7743__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7743__auto__);
}
})()," (using =)"].join('')));
}

var expected__7775__auto___9459 = (1);
var actual__7776__auto___9460 = tic_tac_toe.ai.minimax.find_best_move_memo.call(null,new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(3),(4),(5),(6),(7),new cljs.core.Keyword(null,"x","x",2099068185),(9),(10),(11),(12),(13),(14),(15),(16)], null),new cljs.core.Keyword(null,"o","o",-1350007228),false);
if(cljs.core._EQ_.call(null,expected__7775__auto___9459,actual__7776__auto___9460)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__7775__auto___9459;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7743__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7743__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__7776__auto___9460;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7743__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7743__auto__);
}
})()," (using =)"].join('')));
}

var expected__7775__auto___9461 = (1);
var actual__7776__auto___9462 = tic_tac_toe.ai.minimax.find_best_move_memo.call(null,new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(3),(4),(5),(6),(7),(8),new cljs.core.Keyword(null,"x","x",2099068185),(10),(11),(12),(13),(14),(15),(16)], null),new cljs.core.Keyword(null,"o","o",-1350007228),false);
if(cljs.core._EQ_.call(null,expected__7775__auto___9461,actual__7776__auto___9462)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__7775__auto___9461;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7743__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7743__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__7776__auto___9462;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7743__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7743__auto__);
}
})()," (using =)"].join('')));
}

var expected__7775__auto___9463 = (1);
var actual__7776__auto___9464 = tic_tac_toe.ai.minimax.find_best_move_memo.call(null,new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(3),(4),(5),(6),(7),(8),(9),new cljs.core.Keyword(null,"x","x",2099068185),(11),(12),(13),(14),(15),(16)], null),new cljs.core.Keyword(null,"o","o",-1350007228),false);
if(cljs.core._EQ_.call(null,expected__7775__auto___9463,actual__7776__auto___9464)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__7775__auto___9463;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7743__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7743__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__7776__auto___9464;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7743__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7743__auto__);
}
})()," (using =)"].join('')));
}

var expected__7775__auto___9465 = (1);
var actual__7776__auto___9466 = tic_tac_toe.ai.minimax.find_best_move_memo.call(null,new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(3),(4),(5),(6),(7),(8),(9),(10),new cljs.core.Keyword(null,"x","x",2099068185),(12),(13),(14),(15),(16)], null),new cljs.core.Keyword(null,"o","o",-1350007228),false);
if(cljs.core._EQ_.call(null,expected__7775__auto___9465,actual__7776__auto___9466)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__7775__auto___9465;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7743__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7743__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__7776__auto___9466;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7743__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7743__auto__);
}
})()," (using =)"].join('')));
}

var expected__7775__auto___9467 = (1);
var actual__7776__auto___9468 = tic_tac_toe.ai.minimax.find_best_move_memo.call(null,new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(3),(4),(5),(6),(7),(8),(9),(10),(11),new cljs.core.Keyword(null,"x","x",2099068185),(13),(14),(15),(16)], null),new cljs.core.Keyword(null,"o","o",-1350007228),false);
if(cljs.core._EQ_.call(null,expected__7775__auto___9467,actual__7776__auto___9468)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__7775__auto___9467;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7743__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7743__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__7776__auto___9468;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7743__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7743__auto__);
}
})()," (using =)"].join('')));
}

var expected__7775__auto___9469 = (1);
var actual__7776__auto___9470 = tic_tac_toe.ai.minimax.find_best_move_memo.call(null,new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(3),(4),(5),(6),(7),(8),(9),(10),(11),(12),new cljs.core.Keyword(null,"x","x",2099068185),(14),(15),(16)], null),new cljs.core.Keyword(null,"o","o",-1350007228),false);
if(cljs.core._EQ_.call(null,expected__7775__auto___9469,actual__7776__auto___9470)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__7775__auto___9469;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7743__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7743__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__7776__auto___9470;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7743__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7743__auto__);
}
})()," (using =)"].join('')));
}

var expected__7775__auto___9471 = (1);
var actual__7776__auto___9472 = tic_tac_toe.ai.minimax.find_best_move_memo.call(null,new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(3),(4),(5),(6),(7),(8),(9),(10),(11),(12),(13),new cljs.core.Keyword(null,"x","x",2099068185),(15),(16)], null),new cljs.core.Keyword(null,"o","o",-1350007228),false);
if(cljs.core._EQ_.call(null,expected__7775__auto___9471,actual__7776__auto___9472)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__7775__auto___9471;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7743__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7743__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__7776__auto___9472;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7743__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7743__auto__);
}
})()," (using =)"].join('')));
}

var expected__7775__auto___9473 = (1);
var actual__7776__auto___9474 = tic_tac_toe.ai.minimax.find_best_move_memo.call(null,new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(3),(4),(5),(6),(7),(8),(9),(10),(11),(12),(13),(14),new cljs.core.Keyword(null,"x","x",2099068185),(16)], null),new cljs.core.Keyword(null,"o","o",-1350007228),false);
if(cljs.core._EQ_.call(null,expected__7775__auto___9473,actual__7776__auto___9474)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__7775__auto___9473;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7743__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7743__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__7776__auto___9474;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7743__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7743__auto__);
}
})()," (using =)"].join('')));
}

var expected__7775__auto__ = (1);
var actual__7776__auto__ = tic_tac_toe.ai.minimax.find_best_move_memo.call(null,new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(3),(4),(5),(6),(7),(8),(9),(10),(11),(12),(13),(14),(15),new cljs.core.Keyword(null,"x","x",2099068185)], null),new cljs.core.Keyword(null,"o","o",-1350007228),false);
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
});})(_STAR_parent_description_STAR__orig_val__9265_9437,_STAR_parent_description_STAR__temp_val__9266_9438,description__7638__auto____$1,_STAR_parent_description_STAR__orig_val__8188_9278,_STAR_parent_description_STAR__temp_val__8189_9279,description__7638__auto___9277))
,false),speclj.components.new_characteristic.call(null,"finds third move",((function (_STAR_parent_description_STAR__orig_val__9265_9437,_STAR_parent_description_STAR__temp_val__9266_9438,description__7638__auto____$1,_STAR_parent_description_STAR__orig_val__8188_9278,_STAR_parent_description_STAR__temp_val__8189_9279,description__7638__auto___9277){
return (function (){
var expected__7775__auto___9475 = (3);
var actual__7776__auto___9476 = tic_tac_toe.ai.minimax.find_best_move_memo.call(null,new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"o","o",-1350007228),(3),(4),(5),(6),(7),(8),(9),(10),(11),(12),(13),(14),(15),(16)], null),new cljs.core.Keyword(null,"x","x",2099068185),false);
if(cljs.core._EQ_.call(null,expected__7775__auto___9475,actual__7776__auto___9476)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__7775__auto___9475;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7743__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7743__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__7776__auto___9476;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7743__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7743__auto__);
}
})()," (using =)"].join('')));
}

var expected__7775__auto___9477 = (3);
var actual__7776__auto___9478 = tic_tac_toe.ai.minimax.find_best_move_memo.call(null,new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"o","o",-1350007228),new cljs.core.Keyword(null,"x","x",2099068185),(3),(4),(5),(6),(7),(8),(9),(10),(11),(12),(13),(14),(15),(16)], null),new cljs.core.Keyword(null,"x","x",2099068185),false);
if(cljs.core._EQ_.call(null,expected__7775__auto___9477,actual__7776__auto___9478)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__7775__auto___9477;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7743__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7743__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__7776__auto___9478;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7743__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7743__auto__);
}
})()," (using =)"].join('')));
}

var expected__7775__auto___9479 = (2);
var actual__7776__auto___9480 = tic_tac_toe.ai.minimax.find_best_move_memo.call(null,new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"o","o",-1350007228),(2),new cljs.core.Keyword(null,"x","x",2099068185),(4),(5),(6),(7),(8),(9),(10),(11),(12),(13),(14),(15),(16)], null),new cljs.core.Keyword(null,"x","x",2099068185),false);
if(cljs.core._EQ_.call(null,expected__7775__auto___9479,actual__7776__auto___9480)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__7775__auto___9479;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7743__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7743__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__7776__auto___9480;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7743__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7743__auto__);
}
})()," (using =)"].join('')));
}

var expected__7775__auto___9481 = (2);
var actual__7776__auto___9482 = tic_tac_toe.ai.minimax.find_best_move_memo.call(null,new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"o","o",-1350007228),(2),(3),new cljs.core.Keyword(null,"x","x",2099068185),(5),(6),(7),(8),(9),(10),(11),(12),(13),(14),(15),(16)], null),new cljs.core.Keyword(null,"x","x",2099068185),false);
if(cljs.core._EQ_.call(null,expected__7775__auto___9481,actual__7776__auto___9482)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__7775__auto___9481;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7743__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7743__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__7776__auto___9482;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7743__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7743__auto__);
}
})()," (using =)"].join('')));
}

var expected__7775__auto___9483 = (2);
var actual__7776__auto___9484 = tic_tac_toe.ai.minimax.find_best_move_memo.call(null,new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"o","o",-1350007228),(2),(3),(4),new cljs.core.Keyword(null,"x","x",2099068185),(6),(7),(8),(9),(10),(11),(12),(13),(14),(15),(16)], null),new cljs.core.Keyword(null,"x","x",2099068185),false);
if(cljs.core._EQ_.call(null,expected__7775__auto___9483,actual__7776__auto___9484)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__7775__auto___9483;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7743__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7743__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__7776__auto___9484;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7743__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7743__auto__);
}
})()," (using =)"].join('')));
}

var expected__7775__auto___9485 = (2);
var actual__7776__auto___9486 = tic_tac_toe.ai.minimax.find_best_move_memo.call(null,new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"o","o",-1350007228),(2),(3),(4),(5),new cljs.core.Keyword(null,"x","x",2099068185),(7),(8),(9),(10),(11),(12),(13),(14),(15),(16)], null),new cljs.core.Keyword(null,"x","x",2099068185),false);
if(cljs.core._EQ_.call(null,expected__7775__auto___9485,actual__7776__auto___9486)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__7775__auto___9485;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7743__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7743__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__7776__auto___9486;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7743__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7743__auto__);
}
})()," (using =)"].join('')));
}

var expected__7775__auto___9487 = (2);
var actual__7776__auto___9488 = tic_tac_toe.ai.minimax.find_best_move_memo.call(null,new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"o","o",-1350007228),(2),(3),(4),(5),(6),new cljs.core.Keyword(null,"x","x",2099068185),(8),(9),(10),(11),(12),(13),(14),(15),(16)], null),new cljs.core.Keyword(null,"x","x",2099068185),false);
if(cljs.core._EQ_.call(null,expected__7775__auto___9487,actual__7776__auto___9488)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__7775__auto___9487;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7743__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7743__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__7776__auto___9488;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7743__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7743__auto__);
}
})()," (using =)"].join('')));
}

var expected__7775__auto___9489 = (2);
var actual__7776__auto___9490 = tic_tac_toe.ai.minimax.find_best_move_memo.call(null,new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"o","o",-1350007228),(2),(3),(4),(5),(6),(7),new cljs.core.Keyword(null,"x","x",2099068185),(9),(10),(11),(12),(13),(14),(15),(16)], null),new cljs.core.Keyword(null,"x","x",2099068185),false);
if(cljs.core._EQ_.call(null,expected__7775__auto___9489,actual__7776__auto___9490)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__7775__auto___9489;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7743__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7743__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__7776__auto___9490;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7743__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7743__auto__);
}
})()," (using =)"].join('')));
}

var expected__7775__auto___9491 = (2);
var actual__7776__auto___9492 = tic_tac_toe.ai.minimax.find_best_move_memo.call(null,new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"o","o",-1350007228),(2),(3),(4),(5),(6),(7),(8),new cljs.core.Keyword(null,"x","x",2099068185),(10),(11),(12),(13),(14),(15),(16)], null),new cljs.core.Keyword(null,"x","x",2099068185),false);
if(cljs.core._EQ_.call(null,expected__7775__auto___9491,actual__7776__auto___9492)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__7775__auto___9491;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7743__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7743__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__7776__auto___9492;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7743__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7743__auto__);
}
})()," (using =)"].join('')));
}

var expected__7775__auto___9493 = (2);
var actual__7776__auto___9494 = tic_tac_toe.ai.minimax.find_best_move_memo.call(null,new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"o","o",-1350007228),(2),(3),(4),(5),(6),(7),(8),(9),new cljs.core.Keyword(null,"x","x",2099068185),(11),(12),(13),(14),(15),(16)], null),new cljs.core.Keyword(null,"x","x",2099068185),false);
if(cljs.core._EQ_.call(null,expected__7775__auto___9493,actual__7776__auto___9494)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__7775__auto___9493;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7743__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7743__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__7776__auto___9494;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7743__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7743__auto__);
}
})()," (using =)"].join('')));
}

var expected__7775__auto___9495 = (2);
var actual__7776__auto___9496 = tic_tac_toe.ai.minimax.find_best_move_memo.call(null,new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"o","o",-1350007228),(2),(3),(4),(5),(6),(7),(8),(9),(10),new cljs.core.Keyword(null,"x","x",2099068185),(12),(13),(14),(15),(16)], null),new cljs.core.Keyword(null,"x","x",2099068185),false);
if(cljs.core._EQ_.call(null,expected__7775__auto___9495,actual__7776__auto___9496)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__7775__auto___9495;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7743__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7743__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__7776__auto___9496;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7743__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7743__auto__);
}
})()," (using =)"].join('')));
}

var expected__7775__auto___9497 = (2);
var actual__7776__auto___9498 = tic_tac_toe.ai.minimax.find_best_move_memo.call(null,new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"o","o",-1350007228),(2),(3),(4),(5),(6),(7),(8),(9),(10),(11),new cljs.core.Keyword(null,"x","x",2099068185),(13),(14),(15),(16)], null),new cljs.core.Keyword(null,"x","x",2099068185),false);
if(cljs.core._EQ_.call(null,expected__7775__auto___9497,actual__7776__auto___9498)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__7775__auto___9497;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7743__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7743__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__7776__auto___9498;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7743__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7743__auto__);
}
})()," (using =)"].join('')));
}

var expected__7775__auto___9499 = (2);
var actual__7776__auto___9500 = tic_tac_toe.ai.minimax.find_best_move_memo.call(null,new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"o","o",-1350007228),(2),(3),(4),(5),(6),(7),(8),(9),(10),(11),(12),new cljs.core.Keyword(null,"x","x",2099068185),(14),(15),(16)], null),new cljs.core.Keyword(null,"x","x",2099068185),false);
if(cljs.core._EQ_.call(null,expected__7775__auto___9499,actual__7776__auto___9500)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__7775__auto___9499;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7743__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7743__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__7776__auto___9500;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7743__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7743__auto__);
}
})()," (using =)"].join('')));
}

var expected__7775__auto___9501 = (2);
var actual__7776__auto___9502 = tic_tac_toe.ai.minimax.find_best_move_memo.call(null,new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"o","o",-1350007228),(2),(3),(4),(5),(6),(7),(8),(9),(10),(11),(12),(13),new cljs.core.Keyword(null,"x","x",2099068185),(15),(16)], null),new cljs.core.Keyword(null,"x","x",2099068185),false);
if(cljs.core._EQ_.call(null,expected__7775__auto___9501,actual__7776__auto___9502)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__7775__auto___9501;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7743__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7743__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__7776__auto___9502;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7743__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7743__auto__);
}
})()," (using =)"].join('')));
}

var expected__7775__auto___9503 = (2);
var actual__7776__auto___9504 = tic_tac_toe.ai.minimax.find_best_move_memo.call(null,new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"o","o",-1350007228),(2),(3),(4),(5),(6),(7),(8),(9),(10),(11),(12),(13),(14),new cljs.core.Keyword(null,"x","x",2099068185),(16)], null),new cljs.core.Keyword(null,"x","x",2099068185),false);
if(cljs.core._EQ_.call(null,expected__7775__auto___9503,actual__7776__auto___9504)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__7775__auto___9503;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7743__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7743__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__7776__auto___9504;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7743__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7743__auto__);
}
})()," (using =)"].join('')));
}

var expected__7775__auto__ = (2);
var actual__7776__auto__ = tic_tac_toe.ai.minimax.find_best_move_memo.call(null,new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"o","o",-1350007228),(2),(3),(4),(5),(6),(7),(8),(9),(10),(11),(12),(13),(14),(15),new cljs.core.Keyword(null,"x","x",2099068185)], null),new cljs.core.Keyword(null,"x","x",2099068185),false);
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
});})(_STAR_parent_description_STAR__orig_val__9265_9437,_STAR_parent_description_STAR__temp_val__9266_9438,description__7638__auto____$1,_STAR_parent_description_STAR__orig_val__8188_9278,_STAR_parent_description_STAR__temp_val__8189_9279,description__7638__auto___9277))
,false),speclj.components.new_characteristic.call(null,"finds fourth move",((function (_STAR_parent_description_STAR__orig_val__9265_9437,_STAR_parent_description_STAR__temp_val__9266_9438,description__7638__auto____$1,_STAR_parent_description_STAR__orig_val__8188_9278,_STAR_parent_description_STAR__temp_val__8189_9279,description__7638__auto___9277){
return (function (){
var expected__7775__auto___9505 = (4);
var actual__7776__auto___9506 = tic_tac_toe.ai.minimax.find_best_move_memo.call(null,new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"o","o",-1350007228),new cljs.core.Keyword(null,"x","x",2099068185),(4),(5),(6),(7),(8),(9),(10),(11),(12),(13),(14),(15),(16)], null),new cljs.core.Keyword(null,"o","o",-1350007228),false);
if(cljs.core._EQ_.call(null,expected__7775__auto___9505,actual__7776__auto___9506)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__7775__auto___9505;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7743__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7743__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__7776__auto___9506;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7743__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7743__auto__);
}
})()," (using =)"].join('')));
}

var expected__7775__auto___9507 = (4);
var actual__7776__auto___9508 = tic_tac_toe.ai.minimax.find_best_move_memo.call(null,new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"o","o",-1350007228),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"x","x",2099068185),(4),(5),(6),(7),(8),(9),(10),(11),(12),(13),(14),(15),(16)], null),new cljs.core.Keyword(null,"o","o",-1350007228),false);
if(cljs.core._EQ_.call(null,expected__7775__auto___9507,actual__7776__auto___9508)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__7775__auto___9507;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7743__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7743__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__7776__auto___9508;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7743__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7743__auto__);
}
})()," (using =)"].join('')));
}

var expected__7775__auto___9509 = (4);
var actual__7776__auto___9510 = tic_tac_toe.ai.minimax.find_best_move_memo.call(null,new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"o","o",-1350007228),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"x","x",2099068185),(4),(5),(6),(7),(8),(9),(10),(11),(12),(13),(14),(15),(16)], null),new cljs.core.Keyword(null,"o","o",-1350007228),false);
if(cljs.core._EQ_.call(null,expected__7775__auto___9509,actual__7776__auto___9510)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__7775__auto___9509;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7743__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7743__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__7776__auto___9510;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7743__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7743__auto__);
}
})()," (using =)"].join('')));
}

var expected__7775__auto___9511 = (2);
var actual__7776__auto___9512 = tic_tac_toe.ai.minimax.find_best_move_memo.call(null,new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"o","o",-1350007228),(2),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"x","x",2099068185),(5),(6),(7),(8),(9),(10),(11),(12),(13),(14),(15),(16)], null),new cljs.core.Keyword(null,"o","o",-1350007228),false);
if(cljs.core._EQ_.call(null,expected__7775__auto___9511,actual__7776__auto___9512)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__7775__auto___9511;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7743__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7743__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__7776__auto___9512;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7743__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7743__auto__);
}
})()," (using =)"].join('')));
}

var expected__7775__auto___9513 = (2);
var actual__7776__auto___9514 = tic_tac_toe.ai.minimax.find_best_move_memo.call(null,new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"o","o",-1350007228),(2),new cljs.core.Keyword(null,"x","x",2099068185),(4),new cljs.core.Keyword(null,"x","x",2099068185),(6),(7),(8),(9),(10),(11),(12),(13),(14),(15),(16)], null),new cljs.core.Keyword(null,"o","o",-1350007228),false);
if(cljs.core._EQ_.call(null,expected__7775__auto___9513,actual__7776__auto___9514)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__7775__auto___9513;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7743__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7743__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__7776__auto___9514;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7743__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7743__auto__);
}
})()," (using =)"].join('')));
}

var expected__7775__auto___9515 = (2);
var actual__7776__auto___9516 = tic_tac_toe.ai.minimax.find_best_move_memo.call(null,new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"o","o",-1350007228),(2),new cljs.core.Keyword(null,"x","x",2099068185),(4),(5),new cljs.core.Keyword(null,"x","x",2099068185),(7),(8),(9),(10),(11),(12),(13),(14),(15),(16)], null),new cljs.core.Keyword(null,"o","o",-1350007228),false);
if(cljs.core._EQ_.call(null,expected__7775__auto___9515,actual__7776__auto___9516)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__7775__auto___9515;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7743__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7743__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__7776__auto___9516;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7743__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7743__auto__);
}
})()," (using =)"].join('')));
}

var expected__7775__auto___9517 = (2);
var actual__7776__auto___9518 = tic_tac_toe.ai.minimax.find_best_move_memo.call(null,new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"o","o",-1350007228),(2),new cljs.core.Keyword(null,"x","x",2099068185),(4),(5),(6),new cljs.core.Keyword(null,"x","x",2099068185),(8),(9),(10),(11),(12),(13),(14),(15),(16)], null),new cljs.core.Keyword(null,"o","o",-1350007228),false);
if(cljs.core._EQ_.call(null,expected__7775__auto___9517,actual__7776__auto___9518)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__7775__auto___9517;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7743__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7743__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__7776__auto___9518;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7743__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7743__auto__);
}
})()," (using =)"].join('')));
}

var expected__7775__auto___9519 = (2);
var actual__7776__auto___9520 = tic_tac_toe.ai.minimax.find_best_move_memo.call(null,new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"o","o",-1350007228),(2),new cljs.core.Keyword(null,"x","x",2099068185),(4),(5),(6),(7),new cljs.core.Keyword(null,"x","x",2099068185),(9),(10),(11),(12),(13),(14),(15),(16)], null),new cljs.core.Keyword(null,"o","o",-1350007228),false);
if(cljs.core._EQ_.call(null,expected__7775__auto___9519,actual__7776__auto___9520)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__7775__auto___9519;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7743__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7743__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__7776__auto___9520;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7743__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7743__auto__);
}
})()," (using =)"].join('')));
}

var expected__7775__auto___9521 = (2);
var actual__7776__auto___9522 = tic_tac_toe.ai.minimax.find_best_move_memo.call(null,new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"o","o",-1350007228),(2),new cljs.core.Keyword(null,"x","x",2099068185),(4),(5),(6),(7),(8),new cljs.core.Keyword(null,"x","x",2099068185),(10),(11),(12),(13),(14),(15),(16)], null),new cljs.core.Keyword(null,"o","o",-1350007228),false);
if(cljs.core._EQ_.call(null,expected__7775__auto___9521,actual__7776__auto___9522)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__7775__auto___9521;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7743__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7743__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__7776__auto___9522;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7743__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7743__auto__);
}
})()," (using =)"].join('')));
}

var expected__7775__auto___9523 = (2);
var actual__7776__auto___9524 = tic_tac_toe.ai.minimax.find_best_move_memo.call(null,new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"o","o",-1350007228),(2),new cljs.core.Keyword(null,"x","x",2099068185),(4),(5),(6),(7),(8),(9),new cljs.core.Keyword(null,"x","x",2099068185),(11),(12),(13),(14),(15),(16)], null),new cljs.core.Keyword(null,"o","o",-1350007228),false);
if(cljs.core._EQ_.call(null,expected__7775__auto___9523,actual__7776__auto___9524)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__7775__auto___9523;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7743__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7743__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__7776__auto___9524;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7743__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7743__auto__);
}
})()," (using =)"].join('')));
}

var expected__7775__auto___9525 = (2);
var actual__7776__auto___9526 = tic_tac_toe.ai.minimax.find_best_move_memo.call(null,new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"o","o",-1350007228),(2),new cljs.core.Keyword(null,"x","x",2099068185),(4),(5),(6),(7),(8),(9),(10),new cljs.core.Keyword(null,"x","x",2099068185),(12),(13),(14),(15),(16)], null),new cljs.core.Keyword(null,"o","o",-1350007228),false);
if(cljs.core._EQ_.call(null,expected__7775__auto___9525,actual__7776__auto___9526)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__7775__auto___9525;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7743__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7743__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__7776__auto___9526;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7743__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7743__auto__);
}
})()," (using =)"].join('')));
}

var expected__7775__auto___9527 = (2);
var actual__7776__auto___9528 = tic_tac_toe.ai.minimax.find_best_move_memo.call(null,new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"o","o",-1350007228),(2),new cljs.core.Keyword(null,"x","x",2099068185),(4),(5),(6),(7),(8),(9),(10),(11),new cljs.core.Keyword(null,"x","x",2099068185),(13),(14),(15),(16)], null),new cljs.core.Keyword(null,"o","o",-1350007228),false);
if(cljs.core._EQ_.call(null,expected__7775__auto___9527,actual__7776__auto___9528)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__7775__auto___9527;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7743__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7743__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__7776__auto___9528;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7743__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7743__auto__);
}
})()," (using =)"].join('')));
}

var expected__7775__auto___9529 = (2);
var actual__7776__auto___9530 = tic_tac_toe.ai.minimax.find_best_move_memo.call(null,new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"o","o",-1350007228),(2),new cljs.core.Keyword(null,"x","x",2099068185),(4),(5),(6),(7),(8),(9),(10),(11),(12),new cljs.core.Keyword(null,"x","x",2099068185),(14),(15),(16)], null),new cljs.core.Keyword(null,"o","o",-1350007228),false);
if(cljs.core._EQ_.call(null,expected__7775__auto___9529,actual__7776__auto___9530)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__7775__auto___9529;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7743__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7743__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__7776__auto___9530;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7743__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7743__auto__);
}
})()," (using =)"].join('')));
}

var expected__7775__auto___9531 = (2);
var actual__7776__auto___9532 = tic_tac_toe.ai.minimax.find_best_move_memo.call(null,new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"o","o",-1350007228),(2),new cljs.core.Keyword(null,"x","x",2099068185),(4),(5),(6),(7),(8),(9),(10),(11),(12),(13),new cljs.core.Keyword(null,"x","x",2099068185),(15),(16)], null),new cljs.core.Keyword(null,"o","o",-1350007228),false);
if(cljs.core._EQ_.call(null,expected__7775__auto___9531,actual__7776__auto___9532)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__7775__auto___9531;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7743__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7743__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__7776__auto___9532;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7743__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7743__auto__);
}
})()," (using =)"].join('')));
}

var expected__7775__auto___9533 = (2);
var actual__7776__auto___9534 = tic_tac_toe.ai.minimax.find_best_move_memo.call(null,new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"o","o",-1350007228),(2),new cljs.core.Keyword(null,"x","x",2099068185),(4),(5),(6),(7),(8),(9),(10),(11),(12),(13),(14),new cljs.core.Keyword(null,"x","x",2099068185),(16)], null),new cljs.core.Keyword(null,"o","o",-1350007228),false);
if(cljs.core._EQ_.call(null,expected__7775__auto___9533,actual__7776__auto___9534)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__7775__auto___9533;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7743__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7743__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__7776__auto___9534;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7743__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7743__auto__);
}
})()," (using =)"].join('')));
}

var expected__7775__auto__ = (2);
var actual__7776__auto__ = tic_tac_toe.ai.minimax.find_best_move_memo.call(null,new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"o","o",-1350007228),(2),(3),new cljs.core.Keyword(null,"x","x",2099068185),(5),(6),(7),(8),(9),(10),(11),(12),(13),(14),(15),new cljs.core.Keyword(null,"x","x",2099068185)], null),new cljs.core.Keyword(null,"o","o",-1350007228),false);
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
});})(_STAR_parent_description_STAR__orig_val__9265_9437,_STAR_parent_description_STAR__temp_val__9266_9438,description__7638__auto____$1,_STAR_parent_description_STAR__orig_val__8188_9278,_STAR_parent_description_STAR__temp_val__8189_9279,description__7638__auto___9277))
,false),speclj.components.new_characteristic.call(null,"finds 6th move",((function (_STAR_parent_description_STAR__orig_val__9265_9437,_STAR_parent_description_STAR__temp_val__9266_9438,description__7638__auto____$1,_STAR_parent_description_STAR__orig_val__8188_9278,_STAR_parent_description_STAR__temp_val__8189_9279,description__7638__auto___9277){
return (function (){
var expected__7775__auto__ = (3);
var actual__7776__auto__ = tic_tac_toe.ai.minimax.find_best_move_memo.call(null,new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"o","o",-1350007228),new cljs.core.Keyword(null,"o","o",-1350007228),(3),new cljs.core.Keyword(null,"x","x",2099068185),(5),(6),(7),(8),new cljs.core.Keyword(null,"x","x",2099068185),(10),(11),new cljs.core.Keyword(null,"x","x",2099068185),(13),(14),(15),(16)], null),new cljs.core.Keyword(null,"x","x",2099068185),false);
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
});})(_STAR_parent_description_STAR__orig_val__9265_9437,_STAR_parent_description_STAR__temp_val__9266_9438,description__7638__auto____$1,_STAR_parent_description_STAR__orig_val__8188_9278,_STAR_parent_description_STAR__temp_val__8189_9279,description__7638__auto___9277))
,false)],null)));
var chunk__9268_9440 = null;
var count__9269_9441 = (0);
var i__9270_9442 = (0);
while(true){
if((i__9270_9442 < count__9269_9441)){
var component__7639__auto___9535 = cljs.core._nth.call(null,chunk__9268_9440,i__9270_9442);
speclj.components.install.call(null,component__7639__auto___9535,description__7638__auto____$1);


var G__9536 = seq__9267_9439;
var G__9537 = chunk__9268_9440;
var G__9538 = count__9269_9441;
var G__9539 = (i__9270_9442 + (1));
seq__9267_9439 = G__9536;
chunk__9268_9440 = G__9537;
count__9269_9441 = G__9538;
i__9270_9442 = G__9539;
continue;
} else {
var temp__5804__auto___9540 = cljs.core.seq.call(null,seq__9267_9439);
if(temp__5804__auto___9540){
var seq__9267_9541__$1 = temp__5804__auto___9540;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9267_9541__$1)){
var c__5525__auto___9542 = cljs.core.chunk_first.call(null,seq__9267_9541__$1);
var G__9543 = cljs.core.chunk_rest.call(null,seq__9267_9541__$1);
var G__9544 = c__5525__auto___9542;
var G__9545 = cljs.core.count.call(null,c__5525__auto___9542);
var G__9546 = (0);
seq__9267_9439 = G__9543;
chunk__9268_9440 = G__9544;
count__9269_9441 = G__9545;
i__9270_9442 = G__9546;
continue;
} else {
var component__7639__auto___9547 = cljs.core.first.call(null,seq__9267_9541__$1);
speclj.components.install.call(null,component__7639__auto___9547,description__7638__auto____$1);


var G__9548 = cljs.core.next.call(null,seq__9267_9541__$1);
var G__9549 = null;
var G__9550 = (0);
var G__9551 = (0);
seq__9267_9439 = G__9548;
chunk__9268_9440 = G__9549;
count__9269_9441 = G__9550;
i__9270_9442 = G__9551;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__9265_9437);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__7638__auto____$1);
}

return description__7638__auto____$1;
})(),(function (){var description__7638__auto____$1 = speclj.components.new_description.call(null,"plays 3D board",false,"tic-tac-toe.ai.minimax-spec");
var _STAR_parent_description_STAR__orig_val__9271_9552 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__9272_9553 = description__7638__auto____$1;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__9272_9553);

try{var seq__9273_9554 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,4,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_characteristic.call(null,"finds potential active winning paths for given player",((function (_STAR_parent_description_STAR__orig_val__9271_9552,_STAR_parent_description_STAR__temp_val__9272_9553,description__7638__auto____$1,_STAR_parent_description_STAR__orig_val__8188_9278,_STAR_parent_description_STAR__temp_val__8189_9279,description__7638__auto___9277){
return (function (){
var expected__7775__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(12),new cljs.core.Keyword(null,"o","o",-1350007228),(18)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(6),new cljs.core.Keyword(null,"o","o",-1350007228),(24)], null)], null);
var actual__7776__auto__ = tic_tac_toe.ai.minimax.get_player_paths.call(null,new cljs.core.PersistentVector(null, 27, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),new cljs.core.Keyword(null,"x","x",2099068185),(3),(4),(5),(6),(7),(8),(9),(10),(11),(12),(13),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"o","o",-1350007228),(16),(17),(18),(19),(20),(21),(22),(23),(24),(25),(26),(27)], null),new cljs.core.Keyword(null,"o","o",-1350007228));
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
});})(_STAR_parent_description_STAR__orig_val__9271_9552,_STAR_parent_description_STAR__temp_val__9272_9553,description__7638__auto____$1,_STAR_parent_description_STAR__orig_val__8188_9278,_STAR_parent_description_STAR__temp_val__8189_9279,description__7638__auto___9277))
,false),speclj.components.new_characteristic.call(null,"find potential active winning moves for given player",((function (_STAR_parent_description_STAR__orig_val__9271_9552,_STAR_parent_description_STAR__temp_val__9272_9553,description__7638__auto____$1,_STAR_parent_description_STAR__orig_val__8188_9278,_STAR_parent_description_STAR__temp_val__8189_9279,description__7638__auto___9277){
return (function (){
var expected__7775__auto__ = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(12),(18),(6),(24)], null);
var actual__7776__auto__ = tic_tac_toe.ai.minimax.get_player_moves.call(null,new cljs.core.PersistentVector(null, 27, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),new cljs.core.Keyword(null,"x","x",2099068185),(3),(4),(5),(6),(7),(8),(9),(10),(11),(12),(13),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"o","o",-1350007228),(16),(17),(18),(19),(20),(21),(22),(23),(24),(25),(26),(27)], null),new cljs.core.Keyword(null,"o","o",-1350007228));
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
});})(_STAR_parent_description_STAR__orig_val__9271_9552,_STAR_parent_description_STAR__temp_val__9272_9553,description__7638__auto____$1,_STAR_parent_description_STAR__orig_val__8188_9278,_STAR_parent_description_STAR__temp_val__8189_9279,description__7638__auto___9277))
,false),speclj.components.new_characteristic.call(null,"finds moves with higher potential for winning",((function (_STAR_parent_description_STAR__orig_val__9271_9552,_STAR_parent_description_STAR__temp_val__9272_9553,description__7638__auto____$1,_STAR_parent_description_STAR__orig_val__8188_9278,_STAR_parent_description_STAR__temp_val__8189_9279,description__7638__auto___9277){
return (function (){
var expected__7775__auto___9558 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [(24),null,(6),null,(12),null,(18),null], null), null);
var actual__7776__auto___9559 = tic_tac_toe.ai.minimax.get_relevant_moves.call(null,new cljs.core.PersistentVector(null, 27, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),new cljs.core.Keyword(null,"x","x",2099068185),(3),(4),(5),(6),(7),(8),(9),(10),(11),(12),(13),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"o","o",-1350007228),(16),(17),(18),(19),(20),(21),(22),(23),(24),(25),(26),(27)], null),new cljs.core.Keyword(null,"o","o",-1350007228));
if(cljs.core._EQ_.call(null,expected__7775__auto___9558,actual__7776__auto___9559)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__7775__auto___9558;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7743__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7743__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__7776__auto___9559;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7743__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7743__auto__);
}
})()," (using =)"].join('')));
}

var expected__7775__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 18, [(7),null,(20),null,(27),null,(1),null,(21),null,(25),null,(17),null,(3),null,(12),null,(23),null,(19),null,(11),null,(9),null,(5),null,(16),null,(10),null,(18),null,(8),null], null), null);
var actual__7776__auto__ = tic_tac_toe.ai.minimax.get_relevant_moves.call(null,new cljs.core.PersistentVector(null, 27, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),new cljs.core.Keyword(null,"x","x",2099068185),(3),(4),(5),(6),(7),(8),(9),(10),(11),(12),(13),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"o","o",-1350007228),(16),(17),(18),(19),(20),(21),(22),(23),(24),(25),(26),(27)], null),new cljs.core.Keyword(null,"x","x",2099068185));
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
});})(_STAR_parent_description_STAR__orig_val__9271_9552,_STAR_parent_description_STAR__temp_val__9272_9553,description__7638__auto____$1,_STAR_parent_description_STAR__orig_val__8188_9278,_STAR_parent_description_STAR__temp_val__8189_9279,description__7638__auto___9277))
,false),speclj.components.new_characteristic.call(null,"finds next move",((function (_STAR_parent_description_STAR__orig_val__9271_9552,_STAR_parent_description_STAR__temp_val__9272_9553,description__7638__auto____$1,_STAR_parent_description_STAR__orig_val__8188_9278,_STAR_parent_description_STAR__temp_val__8189_9279,description__7638__auto___9277){
return (function (){
var expected__7775__auto___9560 = (7);
var actual__7776__auto___9561 = tic_tac_toe.ai.minimax.find_best_move_memo.call(null,new cljs.core.PersistentVector(null, 27, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(3),(4),new cljs.core.Keyword(null,"x","x",2099068185),(6),(7),(8),(9),(10),(11),(12),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"o","o",-1350007228),(15),(16),(17),(18),(19),(20),(21),(22),(23),(24),(25),(26),(27)], null),new cljs.core.Keyword(null,"o","o",-1350007228),false);
if(cljs.core._EQ_.call(null,expected__7775__auto___9560,actual__7776__auto___9561)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__7775__auto___9560;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7743__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7743__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__7776__auto___9561;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7743__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7743__auto__);
}
})()," (using =)"].join('')));
}

var expected__7775__auto___9562 = (1);
var actual__7776__auto___9563 = tic_tac_toe.ai.minimax.find_best_move_memo.call(null,new cljs.core.PersistentVector(null, 27, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(3),new cljs.core.Keyword(null,"x","x",2099068185),(5),(6),(7),(8),(9),(10),(11),(12),(13),new cljs.core.Keyword(null,"o","o",-1350007228),(15),new cljs.core.Keyword(null,"x","x",2099068185),(17),(18),(19),(20),(21),(22),(23),(24),(25),(26),(27)], null),new cljs.core.Keyword(null,"o","o",-1350007228),false);
if(cljs.core._EQ_.call(null,expected__7775__auto___9562,actual__7776__auto___9563)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__7775__auto___9562;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7743__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7743__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__7776__auto___9563;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7743__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7743__auto__);
}
})()," (using =)"].join('')));
}

var expected__7775__auto___9564 = (7);
var actual__7776__auto___9565 = tic_tac_toe.ai.minimax.find_best_move_memo.call(null,new cljs.core.PersistentVector(null, 27, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(3),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"o","o",-1350007228),new cljs.core.Keyword(null,"x","x",2099068185),(7),(8),(9),(10),(11),(12),(13),new cljs.core.Keyword(null,"o","o",-1350007228),(15),new cljs.core.Keyword(null,"x","x",2099068185),(17),(18),(19),(20),(21),new cljs.core.Keyword(null,"o","o",-1350007228),new cljs.core.Keyword(null,"x","x",2099068185),(24),(25),(26),(27)], null),new cljs.core.Keyword(null,"o","o",-1350007228),false);
if(cljs.core._EQ_.call(null,expected__7775__auto___9564,actual__7776__auto___9565)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__7775__auto___9564;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7743__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7743__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__7776__auto___9565;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7743__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7743__auto__);
}
})()," (using =)"].join('')));
}

var expected__7775__auto___9566 = (7);
var actual__7776__auto___9567 = tic_tac_toe.ai.minimax.find_best_move_memo.call(null,new cljs.core.PersistentVector(null, 27, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(3),(4),new cljs.core.Keyword(null,"x","x",2099068185),(6),(7),(8),(9),(10),(11),new cljs.core.Keyword(null,"x","x",2099068185),(13),new cljs.core.Keyword(null,"o","o",-1350007228),(15),(16),(17),(18),(19),(20),(21),(22),(23),(24),(25),(26),(27)], null),new cljs.core.Keyword(null,"o","o",-1350007228),false);
if(cljs.core._EQ_.call(null,expected__7775__auto___9566,actual__7776__auto___9567)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__7775__auto___9566;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7743__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7743__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__7776__auto___9567;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7743__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7743__auto__);
}
})()," (using =)"].join('')));
}

var expected__7775__auto___9568 = (24);
var actual__7776__auto___9569 = tic_tac_toe.ai.minimax.find_best_move_memo.call(null,new cljs.core.PersistentVector(null, 27, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),new cljs.core.Keyword(null,"x","x",2099068185),(4),(5),(6),(7),(8),(9),(10),(11),(12),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"o","o",-1350007228),new cljs.core.Keyword(null,"o","o",-1350007228),(16),(17),(18),(19),(20),(21),(22),(23),(24),(25),(26),new cljs.core.Keyword(null,"x","x",2099068185)], null),new cljs.core.Keyword(null,"o","o",-1350007228),false);
if(cljs.core._EQ_.call(null,expected__7775__auto___9568,actual__7776__auto___9569)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__7775__auto___9568;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7743__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7743__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__7776__auto___9569;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7743__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7743__auto__);
}
})()," (using =)"].join('')));
}

var expected__7775__auto___9570 = (7);
var actual__7776__auto___9571 = tic_tac_toe.ai.minimax.find_best_move_memo.call(null,new cljs.core.PersistentVector(null, 27, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(3),(4),(5),new cljs.core.Keyword(null,"x","x",2099068185),(7),(8),new cljs.core.Keyword(null,"o","o",-1350007228),(10),(11),(12),(13),new cljs.core.Keyword(null,"o","o",-1350007228),(15),(16),new cljs.core.Keyword(null,"x","x",2099068185),(18),new cljs.core.Keyword(null,"x","x",2099068185),(20),(21),new cljs.core.Keyword(null,"o","o",-1350007228),(23),(24),new cljs.core.Keyword(null,"x","x",2099068185),(26),(27)], null),new cljs.core.Keyword(null,"o","o",-1350007228),false);
if(cljs.core._EQ_.call(null,expected__7775__auto___9570,actual__7776__auto___9571)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__7775__auto___9570;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7743__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7743__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__7776__auto___9571;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7743__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7743__auto__);
}
})()," (using =)"].join('')));
}

var expected__7775__auto___9572 = (7);
var actual__7776__auto___9573 = tic_tac_toe.ai.minimax.find_best_move_memo.call(null,new cljs.core.PersistentVector(null, 27, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),(2),(3),(4),(5),(6),(7),(8),(9),(10),(11),(12),(13),new cljs.core.Keyword(null,"o","o",-1350007228),new cljs.core.Keyword(null,"x","x",2099068185),(16),(17),(18),(19),(20),(21),new cljs.core.Keyword(null,"x","x",2099068185),(23),(24),(25),(26),new cljs.core.Keyword(null,"o","o",-1350007228)], null),new cljs.core.Keyword(null,"o","o",-1350007228),false);
if(cljs.core._EQ_.call(null,expected__7775__auto___9572,actual__7776__auto___9573)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__7775__auto___9572;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7743__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7743__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__7776__auto___9573;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7743__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7743__auto__);
}
})()," (using =)"].join('')));
}

var expected__7775__auto___9574 = (25);
var actual__7776__auto___9575 = tic_tac_toe.ai.minimax.find_best_move_memo.call(null,new cljs.core.PersistentVector(null, 27, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(3),(4),(5),(6),(7),(8),(9),(10),(11),(12),(13),new cljs.core.Keyword(null,"o","o",-1350007228),new cljs.core.Keyword(null,"x","x",2099068185),(16),(17),(18),(19),(20),(21),new cljs.core.Keyword(null,"x","x",2099068185),(23),(24),(25),(26),(27)], null),new cljs.core.Keyword(null,"o","o",-1350007228),false);
if(cljs.core._EQ_.call(null,expected__7775__auto___9574,actual__7776__auto___9575)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__7775__auto___9574;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7743__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7743__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__7776__auto___9575;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7743__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7743__auto__);
}
})()," (using =)"].join('')));
}

var expected__7775__auto___9576 = (27);
var actual__7776__auto___9577 = tic_tac_toe.ai.minimax.find_best_move_memo.call(null,new cljs.core.PersistentVector(null, 27, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(3),(4),(5),(6),new cljs.core.Keyword(null,"x","x",2099068185),(8),(9),(10),(11),(12),(13),new cljs.core.Keyword(null,"o","o",-1350007228),(15),(16),(17),new cljs.core.Keyword(null,"x","x",2099068185),(19),(20),(21),(22),(23),(24),(25),(26),(27)], null),new cljs.core.Keyword(null,"o","o",-1350007228),false);
if(cljs.core._EQ_.call(null,expected__7775__auto___9576,actual__7776__auto___9577)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__7775__auto___9576;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7743__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7743__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__7776__auto___9577;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7743__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7743__auto__);
}
})()," (using =)"].join('')));
}

var expected__7775__auto___9578 = (19);
var actual__7776__auto___9579 = tic_tac_toe.ai.minimax.find_best_move_memo.call(null,new cljs.core.PersistentVector(null, 27, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(3),(4),(5),(6),(7),new cljs.core.Keyword(null,"x","x",2099068185),(9),(10),new cljs.core.Keyword(null,"x","x",2099068185),(12),(13),new cljs.core.Keyword(null,"o","o",-1350007228),(15),(16),new cljs.core.Keyword(null,"o","o",-1350007228),(18),(19),new cljs.core.Keyword(null,"o","o",-1350007228),(21),(22),new cljs.core.Keyword(null,"x","x",2099068185),(24),(25),new cljs.core.Keyword(null,"x","x",2099068185),(27)], null),new cljs.core.Keyword(null,"o","o",-1350007228),false);
if(cljs.core._EQ_.call(null,expected__7775__auto___9578,actual__7776__auto___9579)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__7775__auto___9578;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7743__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7743__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__7776__auto___9579;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7743__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7743__auto__);
}
})()," (using =)"].join('')));
}

var expected__7775__auto___9580 = (7);
var actual__7776__auto___9581 = tic_tac_toe.ai.minimax.find_best_move_memo.call(null,new cljs.core.PersistentVector(null, 27, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"o","o",-1350007228),new cljs.core.Keyword(null,"x","x",2099068185),(3),(4),(5),(6),(7),(8),(9),(10),(11),(12),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"o","o",-1350007228),(15),(16),(17),(18),(19),(20),(21),(22),(23),(24),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"o","o",-1350007228),new cljs.core.Keyword(null,"x","x",2099068185)], null),new cljs.core.Keyword(null,"o","o",-1350007228),false);
if(cljs.core._EQ_.call(null,expected__7775__auto___9580,actual__7776__auto___9581)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__7775__auto___9580;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7743__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7743__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__7776__auto___9581;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7743__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7743__auto__);
}
})()," (using =)"].join('')));
}

var expected__7775__auto___9582 = (7);
var actual__7776__auto___9583 = tic_tac_toe.ai.minimax.find_best_move_memo.call(null,new cljs.core.PersistentVector(null, 27, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),new cljs.core.Keyword(null,"x","x",2099068185),(4),(5),(6),(7),(8),(9),(10),(11),(12),(13),new cljs.core.Keyword(null,"o","o",-1350007228),(15),(16),(17),new cljs.core.Keyword(null,"x","x",2099068185),(19),(20),(21),(22),(23),(24),(25),(26),(27)], null),new cljs.core.Keyword(null,"o","o",-1350007228),false);
if(cljs.core._EQ_.call(null,expected__7775__auto___9582,actual__7776__auto___9583)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__7775__auto___9582;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7743__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7743__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__7776__auto___9583;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7743__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7743__auto__);
}
})()," (using =)"].join('')));
}

var expected__7775__auto___9584 = (20);
var actual__7776__auto___9585 = tic_tac_toe.ai.minimax.find_best_move_memo.call(null,new cljs.core.PersistentVector(null, 27, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),new cljs.core.Keyword(null,"x","x",2099068185),(4),(5),new cljs.core.Keyword(null,"o","o",-1350007228),(7),(8),new cljs.core.Keyword(null,"x","x",2099068185),(10),new cljs.core.Keyword(null,"x","x",2099068185),(12),(13),new cljs.core.Keyword(null,"o","o",-1350007228),(15),(16),(17),(18),new cljs.core.Keyword(null,"o","o",-1350007228),(20),(21),new cljs.core.Keyword(null,"x","x",2099068185),(23),(24),(25),(26),(27)], null),new cljs.core.Keyword(null,"o","o",-1350007228),false);
if(cljs.core._EQ_.call(null,expected__7775__auto___9584,actual__7776__auto___9585)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__7775__auto___9584;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7743__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7743__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__7776__auto___9585;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7743__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7743__auto__);
}
})()," (using =)"].join('')));
}

var expected__7775__auto___9586 = (21);
var actual__7776__auto___9587 = tic_tac_toe.ai.minimax.find_best_move_memo.call(null,new cljs.core.PersistentVector(null, 27, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"o","o",-1350007228),new cljs.core.Keyword(null,"x","x",2099068185),(4),(5),(6),(7),(8),(9),(10),(11),(12),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"o","o",-1350007228),(15),(16),(17),(18),(19),(20),(21),(22),(23),(24),new cljs.core.Keyword(null,"o","o",-1350007228),new cljs.core.Keyword(null,"x","x",2099068185),(27)], null),new cljs.core.Keyword(null,"o","o",-1350007228),false);
if(cljs.core._EQ_.call(null,expected__7775__auto___9586,actual__7776__auto___9587)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__7775__auto___9586;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7743__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7743__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__7776__auto___9587;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7743__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7743__auto__);
}
})()," (using =)"].join('')));
}

var expected__7775__auto___9588 = (23);
var actual__7776__auto___9589 = tic_tac_toe.ai.minimax.find_best_move_memo.call(null,new cljs.core.PersistentVector(null, 27, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(3),(4),(5),(6),(7),(8),(9),(10),(11),(12),(13),new cljs.core.Keyword(null,"x","x",2099068185),(15),(16),(17),(18),(19),(20),(21),(22),(23),(24),(25),(26),(27)], null),new cljs.core.Keyword(null,"o","o",-1350007228),false);
if(cljs.core._EQ_.call(null,expected__7775__auto___9588,actual__7776__auto___9589)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__7775__auto___9588;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7743__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7743__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__7776__auto___9589;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7743__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7743__auto__);
}
})()," (using =)"].join('')));
}

var expected__7775__auto__ = (3);
var actual__7776__auto__ = tic_tac_toe.ai.minimax.find_best_move_memo.call(null,new cljs.core.PersistentVector(null, 27, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),(2),(3),new cljs.core.Keyword(null,"x","x",2099068185),(5),(6),new cljs.core.Keyword(null,"o","o",-1350007228),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"o","o",-1350007228),new cljs.core.Keyword(null,"o","o",-1350007228),(11),(12),(13),new cljs.core.Keyword(null,"x","x",2099068185),(15),(16),(17),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"x","x",2099068185),(20),(21),(22),new cljs.core.Keyword(null,"o","o",-1350007228),(24),(25),(26),new cljs.core.Keyword(null,"o","o",-1350007228)], null),new cljs.core.Keyword(null,"o","o",-1350007228),false);
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
});})(_STAR_parent_description_STAR__orig_val__9271_9552,_STAR_parent_description_STAR__temp_val__9272_9553,description__7638__auto____$1,_STAR_parent_description_STAR__orig_val__8188_9278,_STAR_parent_description_STAR__temp_val__8189_9279,description__7638__auto___9277))
,false)],null)));
var chunk__9274_9555 = null;
var count__9275_9556 = (0);
var i__9276_9557 = (0);
while(true){
if((i__9276_9557 < count__9275_9556)){
var component__7639__auto___9590 = cljs.core._nth.call(null,chunk__9274_9555,i__9276_9557);
speclj.components.install.call(null,component__7639__auto___9590,description__7638__auto____$1);


var G__9591 = seq__9273_9554;
var G__9592 = chunk__9274_9555;
var G__9593 = count__9275_9556;
var G__9594 = (i__9276_9557 + (1));
seq__9273_9554 = G__9591;
chunk__9274_9555 = G__9592;
count__9275_9556 = G__9593;
i__9276_9557 = G__9594;
continue;
} else {
var temp__5804__auto___9595 = cljs.core.seq.call(null,seq__9273_9554);
if(temp__5804__auto___9595){
var seq__9273_9596__$1 = temp__5804__auto___9595;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9273_9596__$1)){
var c__5525__auto___9597 = cljs.core.chunk_first.call(null,seq__9273_9596__$1);
var G__9598 = cljs.core.chunk_rest.call(null,seq__9273_9596__$1);
var G__9599 = c__5525__auto___9597;
var G__9600 = cljs.core.count.call(null,c__5525__auto___9597);
var G__9601 = (0);
seq__9273_9554 = G__9598;
chunk__9274_9555 = G__9599;
count__9275_9556 = G__9600;
i__9276_9557 = G__9601;
continue;
} else {
var component__7639__auto___9602 = cljs.core.first.call(null,seq__9273_9596__$1);
speclj.components.install.call(null,component__7639__auto___9602,description__7638__auto____$1);


var G__9603 = cljs.core.next.call(null,seq__9273_9596__$1);
var G__9604 = null;
var G__9605 = (0);
var G__9606 = (0);
seq__9273_9554 = G__9603;
chunk__9274_9555 = G__9604;
count__9275_9556 = G__9605;
i__9276_9557 = G__9606;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__9271_9552);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__7638__auto____$1);
}

return description__7638__auto____$1;
})()],null)));
var chunk__8195_9281 = null;
var count__8196_9282 = (0);
var i__8197_9283 = (0);
while(true){
if((i__8197_9283 < count__8196_9282)){
var component__7639__auto___9607 = cljs.core._nth.call(null,chunk__8195_9281,i__8197_9283);
speclj.components.install.call(null,component__7639__auto___9607,description__7638__auto___9277);


var G__9608 = seq__8194_9280;
var G__9609 = chunk__8195_9281;
var G__9610 = count__8196_9282;
var G__9611 = (i__8197_9283 + (1));
seq__8194_9280 = G__9608;
chunk__8195_9281 = G__9609;
count__8196_9282 = G__9610;
i__8197_9283 = G__9611;
continue;
} else {
var temp__5804__auto___9612 = cljs.core.seq.call(null,seq__8194_9280);
if(temp__5804__auto___9612){
var seq__8194_9613__$1 = temp__5804__auto___9612;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8194_9613__$1)){
var c__5525__auto___9614 = cljs.core.chunk_first.call(null,seq__8194_9613__$1);
var G__9615 = cljs.core.chunk_rest.call(null,seq__8194_9613__$1);
var G__9616 = c__5525__auto___9614;
var G__9617 = cljs.core.count.call(null,c__5525__auto___9614);
var G__9618 = (0);
seq__8194_9280 = G__9615;
chunk__8195_9281 = G__9616;
count__8196_9282 = G__9617;
i__8197_9283 = G__9618;
continue;
} else {
var component__7639__auto___9619 = cljs.core.first.call(null,seq__8194_9613__$1);
speclj.components.install.call(null,component__7639__auto___9619,description__7638__auto___9277);


var G__9620 = cljs.core.next.call(null,seq__8194_9613__$1);
var G__9621 = null;
var G__9622 = (0);
var G__9623 = (0);
seq__8194_9280 = G__9620;
chunk__8195_9281 = G__9621;
count__8196_9282 = G__9622;
i__8197_9283 = G__9623;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__8188_9278);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__7638__auto___9277);
}


//# sourceMappingURL=minimax_spec.js.map
