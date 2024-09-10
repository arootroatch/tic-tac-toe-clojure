// Compiled by ClojureScript 1.11.132 {:optimizations :none}
goog.provide('tic_tac_toe.ai.minimax_spec');
goog.require('cljs.core');
goog.require('speclj.core');
goog.require('tic_tac_toe.ai.minimax');
goog.require('tic_tac_toe.ai.minimax_test_fns');
goog.require('tic_tac_toe.print_utils');
var description__9152__auto___12203 = speclj.components.new_description.call(null,"computer opponent - is maximizer",false,"tic-tac-toe.ai.minimax-spec");
var _STAR_parent_description_STAR__orig_val__11903_12204 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__11904_12205 = description__9152__auto___12203;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__11904_12205);

try{var seq__11905_12206 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,7,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_around.call(null,((function (_STAR_parent_description_STAR__orig_val__11903_12204,_STAR_parent_description_STAR__temp_val__11904_12205,description__9152__auto___12203){
return (function (it__9522__auto__){
var _STAR_stubbed_invocations_STAR__orig_val__12145 = speclj.stub._STAR_stubbed_invocations_STAR_;
var _STAR_stubbed_invocations_STAR__temp_val__12146 = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
(speclj.stub._STAR_stubbed_invocations_STAR_ = _STAR_stubbed_invocations_STAR__temp_val__12146);

try{return it__9522__auto__.call(null);
}finally {(speclj.stub._STAR_stubbed_invocations_STAR_ = _STAR_stubbed_invocations_STAR__orig_val__12145);
}});})(_STAR_parent_description_STAR__orig_val__11903_12204,_STAR_parent_description_STAR__temp_val__11904_12205,description__9152__auto___12203))
),speclj.components.new_around.call(null,((function (_STAR_parent_description_STAR__orig_val__11903_12204,_STAR_parent_description_STAR__temp_val__11904_12205,description__9152__auto___12203){
return (function (it__9214__auto__){
var display_bot_thinking_message_orig_val__12147 = tic_tac_toe.print_utils.display_bot_thinking_message;
var display_bot_thinking_message_temp_val__12148 = speclj.stub.stub.call(null,new cljs.core.Keyword(null,"thinking","thinking",2063777387),cljs.core.PersistentArrayMap.EMPTY);
(tic_tac_toe.print_utils.display_bot_thinking_message = display_bot_thinking_message_temp_val__12148);

try{return it__9214__auto__.call(null);
}finally {(tic_tac_toe.print_utils.display_bot_thinking_message = display_bot_thinking_message_orig_val__12147);
}});})(_STAR_parent_description_STAR__orig_val__11903_12204,_STAR_parent_description_STAR__temp_val__11904_12205,description__9152__auto___12203))
),(function (){var description__9152__auto____$1 = speclj.components.new_description.call(null,"prove unbeatable",false,"tic-tac-toe.ai.minimax-spec");
var _STAR_parent_description_STAR__orig_val__12149_12210 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__12150_12211 = description__9152__auto____$1;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__12150_12211);

try{var seq__12151_12212 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.mapv.call(null,speclj.components.new_tag,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"slow","slow",120317203)], null)),speclj.components.new_characteristic.call(null,"wins or ties every possible game against human player",((function (_STAR_parent_description_STAR__orig_val__12149_12210,_STAR_parent_description_STAR__temp_val__12150_12211,description__9152__auto____$1,_STAR_parent_description_STAR__orig_val__11903_12204,_STAR_parent_description_STAR__temp_val__11904_12205,description__9152__auto___12203){
return (function (){
var expected__9289__auto__ = true;
var actual__9290__auto__ = tic_tac_toe.ai.minimax_test_fns.unbeatable_QMARK_.call(null,cljs.core.range.call(null,(1),(10)));
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
});})(_STAR_parent_description_STAR__orig_val__12149_12210,_STAR_parent_description_STAR__temp_val__12150_12211,description__9152__auto____$1,_STAR_parent_description_STAR__orig_val__11903_12204,_STAR_parent_description_STAR__temp_val__11904_12205,description__9152__auto___12203))
,false),speclj.components.new_characteristic.call(null,"minimax vs minimax always ties",((function (_STAR_parent_description_STAR__orig_val__12149_12210,_STAR_parent_description_STAR__temp_val__12150_12211,description__9152__auto____$1,_STAR_parent_description_STAR__orig_val__11903_12204,_STAR_parent_description_STAR__temp_val__11904_12205,description__9152__auto___12203){
return (function (){
var expected__9289__auto___12216 = true;
var actual__9290__auto___12217 = tic_tac_toe.ai.minimax_test_fns.always_ties_QMARK_.call(null,cljs.core.range.call(null,(1),(10)));
if(cljs.core._EQ_.call(null,expected__9289__auto___12216,actual__9290__auto___12217)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__9289__auto___12216;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9257__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9257__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__9290__auto___12217;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9257__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9257__auto__);
}
})()," (using =)"].join('')));
}

var expected__9289__auto__ = true;
var actual__9290__auto__ = tic_tac_toe.ai.minimax_test_fns.always_ties_QMARK_.call(null,cljs.core.range.call(null,(1),(17)));
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
});})(_STAR_parent_description_STAR__orig_val__12149_12210,_STAR_parent_description_STAR__temp_val__12150_12211,description__9152__auto____$1,_STAR_parent_description_STAR__orig_val__11903_12204,_STAR_parent_description_STAR__temp_val__11904_12205,description__9152__auto___12203))
,false)],null)));
var chunk__12152_12213 = null;
var count__12153_12214 = (0);
var i__12154_12215 = (0);
while(true){
if((i__12154_12215 < count__12153_12214)){
var component__9153__auto___12218 = cljs.core._nth.call(null,chunk__12152_12213,i__12154_12215);
speclj.components.install.call(null,component__9153__auto___12218,description__9152__auto____$1);


var G__12219 = seq__12151_12212;
var G__12220 = chunk__12152_12213;
var G__12221 = count__12153_12214;
var G__12222 = (i__12154_12215 + (1));
seq__12151_12212 = G__12219;
chunk__12152_12213 = G__12220;
count__12153_12214 = G__12221;
i__12154_12215 = G__12222;
continue;
} else {
var temp__5804__auto___12223 = cljs.core.seq.call(null,seq__12151_12212);
if(temp__5804__auto___12223){
var seq__12151_12224__$1 = temp__5804__auto___12223;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12151_12224__$1)){
var c__5525__auto___12225 = cljs.core.chunk_first.call(null,seq__12151_12224__$1);
var G__12226 = cljs.core.chunk_rest.call(null,seq__12151_12224__$1);
var G__12227 = c__5525__auto___12225;
var G__12228 = cljs.core.count.call(null,c__5525__auto___12225);
var G__12229 = (0);
seq__12151_12212 = G__12226;
chunk__12152_12213 = G__12227;
count__12153_12214 = G__12228;
i__12154_12215 = G__12229;
continue;
} else {
var component__9153__auto___12230 = cljs.core.first.call(null,seq__12151_12224__$1);
speclj.components.install.call(null,component__9153__auto___12230,description__9152__auto____$1);


var G__12231 = cljs.core.next.call(null,seq__12151_12224__$1);
var G__12232 = null;
var G__12233 = (0);
var G__12234 = (0);
seq__12151_12212 = G__12231;
chunk__12152_12213 = G__12232;
count__12153_12214 = G__12233;
i__12154_12215 = G__12234;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__12149_12210);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__9152__auto____$1);
}

return description__9152__auto____$1;
})(),(function (){var description__9152__auto____$1 = speclj.components.new_description.call(null,"plays as O",false,"tic-tac-toe.ai.minimax-spec");
var _STAR_parent_description_STAR__orig_val__12155_12235 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__12156_12236 = description__9152__auto____$1;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__12156_12236);

try{var seq__12157_12237 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_characteristic.call(null,"finds move if next move is a win",((function (_STAR_parent_description_STAR__orig_val__12155_12235,_STAR_parent_description_STAR__temp_val__12156_12236,description__9152__auto____$1,_STAR_parent_description_STAR__orig_val__11903_12204,_STAR_parent_description_STAR__temp_val__11904_12205,description__9152__auto___12203){
return (function (){
var expected__9289__auto___12241 = (2);
var actual__9290__auto___12242 = tic_tac_toe.ai.minimax.find_best_move_memo.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"o","o",-1350007228),(2),new cljs.core.Keyword(null,"o","o",-1350007228),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"o","o",-1350007228),new cljs.core.Keyword(null,"x","x",2099068185),(8),new cljs.core.Keyword(null,"x","x",2099068185)], null),new cljs.core.Keyword(null,"o","o",-1350007228),false);
if(cljs.core._EQ_.call(null,expected__9289__auto___12241,actual__9290__auto___12242)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__9289__auto___12241;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9257__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9257__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__9290__auto___12242;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9257__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9257__auto__);
}
})()," (using =)"].join('')));
}

var expected__9289__auto___12243 = (2);
var actual__9290__auto___12244 = tic_tac_toe.ai.minimax.find_best_move_memo.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"o","o",-1350007228),(2),new cljs.core.Keyword(null,"o","o",-1350007228),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"x","x",2099068185),(6),new cljs.core.Keyword(null,"x","x",2099068185),(8),(9)], null),new cljs.core.Keyword(null,"o","o",-1350007228),false);
if(cljs.core._EQ_.call(null,expected__9289__auto___12243,actual__9290__auto___12244)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__9289__auto___12243;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9257__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9257__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__9290__auto___12244;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9257__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9257__auto__);
}
})()," (using =)"].join('')));
}

var expected__9289__auto___12245 = (4);
var actual__9290__auto___12246 = tic_tac_toe.ai.minimax.find_best_move_memo.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"x","x",2099068185),(4),new cljs.core.Keyword(null,"o","o",-1350007228),new cljs.core.Keyword(null,"o","o",-1350007228),new cljs.core.Keyword(null,"o","o",-1350007228),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"x","x",2099068185)], null),new cljs.core.Keyword(null,"o","o",-1350007228),false);
if(cljs.core._EQ_.call(null,expected__9289__auto___12245,actual__9290__auto___12246)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__9289__auto___12245;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9257__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9257__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__9290__auto___12246;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9257__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9257__auto__);
}
})()," (using =)"].join('')));
}

var expected__9289__auto__ = (3);
var actual__9290__auto__ = tic_tac_toe.ai.minimax.find_best_move_memo.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(3),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"o","o",-1350007228),(7),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"o","o",-1350007228)], null),new cljs.core.Keyword(null,"o","o",-1350007228),false);
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
});})(_STAR_parent_description_STAR__orig_val__12155_12235,_STAR_parent_description_STAR__temp_val__12156_12236,description__9152__auto____$1,_STAR_parent_description_STAR__orig_val__11903_12204,_STAR_parent_description_STAR__temp_val__11904_12205,description__9152__auto___12203))
,false),speclj.components.new_characteristic.call(null,"finds move if next move is a block",((function (_STAR_parent_description_STAR__orig_val__12155_12235,_STAR_parent_description_STAR__temp_val__12156_12236,description__9152__auto____$1,_STAR_parent_description_STAR__orig_val__11903_12204,_STAR_parent_description_STAR__temp_val__11904_12205,description__9152__auto___12203){
return (function (){
var expected__9289__auto___12247 = (4);
var actual__9290__auto___12248 = tic_tac_toe.ai.minimax.find_best_move_memo.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),new cljs.core.Keyword(null,"o","o",-1350007228),(4),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"x","x",2099068185),(7),(8),(9)], null),new cljs.core.Keyword(null,"o","o",-1350007228),false);
if(cljs.core._EQ_.call(null,expected__9289__auto___12247,actual__9290__auto___12248)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__9289__auto___12247;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9257__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9257__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__9290__auto___12248;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9257__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9257__auto__);
}
})()," (using =)"].join('')));
}

var expected__9289__auto___12249 = (1);
var actual__9290__auto___12250 = tic_tac_toe.ai.minimax.find_best_move_memo.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),new cljs.core.Keyword(null,"o","o",-1350007228),(4),new cljs.core.Keyword(null,"x","x",2099068185),(6),(7),(8),new cljs.core.Keyword(null,"x","x",2099068185)], null),new cljs.core.Keyword(null,"o","o",-1350007228),false);
if(cljs.core._EQ_.call(null,expected__9289__auto___12249,actual__9290__auto___12250)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__9289__auto___12249;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9257__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9257__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__9290__auto___12250;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9257__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9257__auto__);
}
})()," (using =)"].join('')));
}

var expected__9289__auto___12251 = (9);
var actual__9290__auto___12252 = tic_tac_toe.ai.minimax.find_best_move_memo.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"o","o",-1350007228),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"o","o",-1350007228),new cljs.core.Keyword(null,"o","o",-1350007228),new cljs.core.Keyword(null,"x","x",2099068185),(7),new cljs.core.Keyword(null,"x","x",2099068185),(9)], null),new cljs.core.Keyword(null,"o","o",-1350007228),false);
if(cljs.core._EQ_.call(null,expected__9289__auto___12251,actual__9290__auto___12252)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__9289__auto___12251;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9257__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9257__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__9290__auto___12252;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9257__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9257__auto__);
}
})()," (using =)"].join('')));
}

var expected__9289__auto__ = (4);
var actual__9290__auto__ = tic_tac_toe.ai.minimax.find_best_move_memo.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"o","o",-1350007228),new cljs.core.Keyword(null,"x","x",2099068185),(4),new cljs.core.Keyword(null,"o","o",-1350007228),(6),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"o","o",-1350007228)], null),new cljs.core.Keyword(null,"o","o",-1350007228),false);
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
});})(_STAR_parent_description_STAR__orig_val__12155_12235,_STAR_parent_description_STAR__temp_val__12156_12236,description__9152__auto____$1,_STAR_parent_description_STAR__orig_val__11903_12204,_STAR_parent_description_STAR__temp_val__11904_12205,description__9152__auto___12203))
,false),(function (){var description__9152__auto____$2 = speclj.components.new_description.call(null,"slow",false,"tic-tac-toe.ai.minimax-spec");
var _STAR_parent_description_STAR__orig_val__12167_12253 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__12168_12254 = description__9152__auto____$2;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__12168_12254);

try{var seq__12169_12255 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.mapv.call(null,speclj.components.new_tag,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"slow","slow",120317203)], null)),speclj.components.new_characteristic.call(null,"finds move with most potential to win if not blocked",((function (_STAR_parent_description_STAR__orig_val__12167_12253,_STAR_parent_description_STAR__temp_val__12168_12254,description__9152__auto____$2,_STAR_parent_description_STAR__orig_val__12155_12235,_STAR_parent_description_STAR__temp_val__12156_12236,description__9152__auto____$1,_STAR_parent_description_STAR__orig_val__11903_12204,_STAR_parent_description_STAR__temp_val__11904_12205,description__9152__auto___12203){
return (function (){
var expected__9289__auto__ = (5);
var actual__9290__auto__ = tic_tac_toe.ai.minimax.find_best_move_memo.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"o","o",-1350007228),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"o","o",-1350007228),new cljs.core.Keyword(null,"x","x",2099068185),(5),(6),(7),(8),new cljs.core.Keyword(null,"x","x",2099068185)], null),new cljs.core.Keyword(null,"o","o",-1350007228),false);
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
});})(_STAR_parent_description_STAR__orig_val__12167_12253,_STAR_parent_description_STAR__temp_val__12168_12254,description__9152__auto____$2,_STAR_parent_description_STAR__orig_val__12155_12235,_STAR_parent_description_STAR__temp_val__12156_12236,description__9152__auto____$1,_STAR_parent_description_STAR__orig_val__11903_12204,_STAR_parent_description_STAR__temp_val__11904_12205,description__9152__auto___12203))
,false),speclj.components.new_characteristic.call(null,"plays center if first move is a corner",((function (_STAR_parent_description_STAR__orig_val__12167_12253,_STAR_parent_description_STAR__temp_val__12168_12254,description__9152__auto____$2,_STAR_parent_description_STAR__orig_val__12155_12235,_STAR_parent_description_STAR__temp_val__12156_12236,description__9152__auto____$1,_STAR_parent_description_STAR__orig_val__11903_12204,_STAR_parent_description_STAR__temp_val__11904_12205,description__9152__auto___12203){
return (function (){
var expected__9289__auto___12259 = (5);
var actual__9290__auto___12260 = tic_tac_toe.ai.minimax.find_best_move_memo.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),(2),(3),(4),(5),(6),(7),(8),(9)], null),new cljs.core.Keyword(null,"o","o",-1350007228),false);
if(cljs.core._EQ_.call(null,expected__9289__auto___12259,actual__9290__auto___12260)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__9289__auto___12259;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9257__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9257__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__9290__auto___12260;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9257__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9257__auto__);
}
})()," (using =)"].join('')));
}

var expected__9289__auto___12261 = (5);
var actual__9290__auto___12262 = tic_tac_toe.ai.minimax.find_best_move_memo.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),new cljs.core.Keyword(null,"x","x",2099068185),(4),(5),(6),(7),(8),(9)], null),new cljs.core.Keyword(null,"o","o",-1350007228),false);
if(cljs.core._EQ_.call(null,expected__9289__auto___12261,actual__9290__auto___12262)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__9289__auto___12261;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9257__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9257__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__9290__auto___12262;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9257__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9257__auto__);
}
})()," (using =)"].join('')));
}

var expected__9289__auto___12263 = (5);
var actual__9290__auto___12264 = tic_tac_toe.ai.minimax.find_best_move_memo.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(3),(4),(5),(6),new cljs.core.Keyword(null,"x","x",2099068185),(8),(9)], null),new cljs.core.Keyword(null,"o","o",-1350007228),false);
if(cljs.core._EQ_.call(null,expected__9289__auto___12263,actual__9290__auto___12264)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__9289__auto___12263;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9257__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9257__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__9290__auto___12264;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9257__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9257__auto__);
}
})()," (using =)"].join('')));
}

var expected__9289__auto__ = (5);
var actual__9290__auto__ = tic_tac_toe.ai.minimax.find_best_move_memo.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(3),(4),(5),(6),(7),(8),new cljs.core.Keyword(null,"x","x",2099068185)], null),new cljs.core.Keyword(null,"o","o",-1350007228),false);
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
});})(_STAR_parent_description_STAR__orig_val__12167_12253,_STAR_parent_description_STAR__temp_val__12168_12254,description__9152__auto____$2,_STAR_parent_description_STAR__orig_val__12155_12235,_STAR_parent_description_STAR__temp_val__12156_12236,description__9152__auto____$1,_STAR_parent_description_STAR__orig_val__11903_12204,_STAR_parent_description_STAR__temp_val__11904_12205,description__9152__auto___12203))
,false)],null)));
var chunk__12170_12256 = null;
var count__12171_12257 = (0);
var i__12172_12258 = (0);
while(true){
if((i__12172_12258 < count__12171_12257)){
var component__9153__auto___12265 = cljs.core._nth.call(null,chunk__12170_12256,i__12172_12258);
speclj.components.install.call(null,component__9153__auto___12265,description__9152__auto____$2);


var G__12266 = seq__12169_12255;
var G__12267 = chunk__12170_12256;
var G__12268 = count__12171_12257;
var G__12269 = (i__12172_12258 + (1));
seq__12169_12255 = G__12266;
chunk__12170_12256 = G__12267;
count__12171_12257 = G__12268;
i__12172_12258 = G__12269;
continue;
} else {
var temp__5804__auto___12270 = cljs.core.seq.call(null,seq__12169_12255);
if(temp__5804__auto___12270){
var seq__12169_12271__$1 = temp__5804__auto___12270;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12169_12271__$1)){
var c__5525__auto___12272 = cljs.core.chunk_first.call(null,seq__12169_12271__$1);
var G__12273 = cljs.core.chunk_rest.call(null,seq__12169_12271__$1);
var G__12274 = c__5525__auto___12272;
var G__12275 = cljs.core.count.call(null,c__5525__auto___12272);
var G__12276 = (0);
seq__12169_12255 = G__12273;
chunk__12170_12256 = G__12274;
count__12171_12257 = G__12275;
i__12172_12258 = G__12276;
continue;
} else {
var component__9153__auto___12277 = cljs.core.first.call(null,seq__12169_12271__$1);
speclj.components.install.call(null,component__9153__auto___12277,description__9152__auto____$2);


var G__12278 = cljs.core.next.call(null,seq__12169_12271__$1);
var G__12279 = null;
var G__12280 = (0);
var G__12281 = (0);
seq__12169_12255 = G__12278;
chunk__12170_12256 = G__12279;
count__12171_12257 = G__12280;
i__12172_12258 = G__12281;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__12167_12253);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__9152__auto____$2);
}

return description__9152__auto____$2;
})()],null)));
var chunk__12158_12238 = null;
var count__12159_12239 = (0);
var i__12160_12240 = (0);
while(true){
if((i__12160_12240 < count__12159_12239)){
var component__9153__auto___12282 = cljs.core._nth.call(null,chunk__12158_12238,i__12160_12240);
speclj.components.install.call(null,component__9153__auto___12282,description__9152__auto____$1);


var G__12283 = seq__12157_12237;
var G__12284 = chunk__12158_12238;
var G__12285 = count__12159_12239;
var G__12286 = (i__12160_12240 + (1));
seq__12157_12237 = G__12283;
chunk__12158_12238 = G__12284;
count__12159_12239 = G__12285;
i__12160_12240 = G__12286;
continue;
} else {
var temp__5804__auto___12287 = cljs.core.seq.call(null,seq__12157_12237);
if(temp__5804__auto___12287){
var seq__12157_12288__$1 = temp__5804__auto___12287;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12157_12288__$1)){
var c__5525__auto___12289 = cljs.core.chunk_first.call(null,seq__12157_12288__$1);
var G__12290 = cljs.core.chunk_rest.call(null,seq__12157_12288__$1);
var G__12291 = c__5525__auto___12289;
var G__12292 = cljs.core.count.call(null,c__5525__auto___12289);
var G__12293 = (0);
seq__12157_12237 = G__12290;
chunk__12158_12238 = G__12291;
count__12159_12239 = G__12292;
i__12160_12240 = G__12293;
continue;
} else {
var component__9153__auto___12294 = cljs.core.first.call(null,seq__12157_12288__$1);
speclj.components.install.call(null,component__9153__auto___12294,description__9152__auto____$1);


var G__12295 = cljs.core.next.call(null,seq__12157_12288__$1);
var G__12296 = null;
var G__12297 = (0);
var G__12298 = (0);
seq__12157_12237 = G__12295;
chunk__12158_12238 = G__12296;
count__12159_12239 = G__12297;
i__12160_12240 = G__12298;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__12155_12235);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__9152__auto____$1);
}

return description__9152__auto____$1;
})(),(function (){var description__9152__auto____$1 = speclj.components.new_description.call(null,"plays as X",false,"tic-tac-toe.ai.minimax-spec");
var _STAR_parent_description_STAR__orig_val__12173_12299 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__12174_12300 = description__9152__auto____$1;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__12174_12300);

try{var seq__12175_12301 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_characteristic.call(null,"finds move if next move is a win",((function (_STAR_parent_description_STAR__orig_val__12173_12299,_STAR_parent_description_STAR__temp_val__12174_12300,description__9152__auto____$1,_STAR_parent_description_STAR__orig_val__11903_12204,_STAR_parent_description_STAR__temp_val__11904_12205,description__9152__auto___12203){
return (function (){
var expected__9289__auto___12305 = (2);
var actual__9290__auto___12306 = tic_tac_toe.ai.minimax.find_best_move_memo.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),(2),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"o","o",-1350007228),new cljs.core.Keyword(null,"o","o",-1350007228),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"o","o",-1350007228),(8),new cljs.core.Keyword(null,"o","o",-1350007228)], null),new cljs.core.Keyword(null,"x","x",2099068185),false);
if(cljs.core._EQ_.call(null,expected__9289__auto___12305,actual__9290__auto___12306)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__9289__auto___12305;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9257__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9257__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__9290__auto___12306;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9257__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9257__auto__);
}
})()," (using =)"].join('')));
}

var expected__9289__auto___12307 = (2);
var actual__9290__auto___12308 = tic_tac_toe.ai.minimax.find_best_move_memo.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),(2),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"o","o",-1350007228),new cljs.core.Keyword(null,"o","o",-1350007228),(6),new cljs.core.Keyword(null,"o","o",-1350007228),(8),(9)], null),new cljs.core.Keyword(null,"x","x",2099068185),false);
if(cljs.core._EQ_.call(null,expected__9289__auto___12307,actual__9290__auto___12308)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__9289__auto___12307;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9257__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9257__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__9290__auto___12308;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9257__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9257__auto__);
}
})()," (using =)"].join('')));
}

var expected__9289__auto___12309 = (4);
var actual__9290__auto___12310 = tic_tac_toe.ai.minimax.find_best_move_memo.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),new cljs.core.Keyword(null,"o","o",-1350007228),new cljs.core.Keyword(null,"o","o",-1350007228),(4),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"o","o",-1350007228),new cljs.core.Keyword(null,"o","o",-1350007228)], null),new cljs.core.Keyword(null,"x","x",2099068185),false);
if(cljs.core._EQ_.call(null,expected__9289__auto___12309,actual__9290__auto___12310)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__9289__auto___12309;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9257__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9257__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__9290__auto___12310;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9257__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9257__auto__);
}
})()," (using =)"].join('')));
}

var expected__9289__auto__ = (3);
var actual__9290__auto__ = tic_tac_toe.ai.minimax.find_best_move_memo.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(3),new cljs.core.Keyword(null,"o","o",-1350007228),new cljs.core.Keyword(null,"o","o",-1350007228),new cljs.core.Keyword(null,"x","x",2099068185),(7),new cljs.core.Keyword(null,"o","o",-1350007228),new cljs.core.Keyword(null,"x","x",2099068185)], null),new cljs.core.Keyword(null,"x","x",2099068185),false);
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
});})(_STAR_parent_description_STAR__orig_val__12173_12299,_STAR_parent_description_STAR__temp_val__12174_12300,description__9152__auto____$1,_STAR_parent_description_STAR__orig_val__11903_12204,_STAR_parent_description_STAR__temp_val__11904_12205,description__9152__auto___12203))
,false),speclj.components.new_characteristic.call(null,"finds move if next move is a block",((function (_STAR_parent_description_STAR__orig_val__12173_12299,_STAR_parent_description_STAR__temp_val__12174_12300,description__9152__auto____$1,_STAR_parent_description_STAR__orig_val__11903_12204,_STAR_parent_description_STAR__temp_val__11904_12205,description__9152__auto___12203){
return (function (){
var expected__9289__auto___12311 = (4);
var actual__9290__auto___12312 = tic_tac_toe.ai.minimax.find_best_move_memo.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),new cljs.core.Keyword(null,"x","x",2099068185),(4),new cljs.core.Keyword(null,"o","o",-1350007228),new cljs.core.Keyword(null,"o","o",-1350007228),(7),(8),(9)], null),new cljs.core.Keyword(null,"x","x",2099068185),false);
if(cljs.core._EQ_.call(null,expected__9289__auto___12311,actual__9290__auto___12312)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__9289__auto___12311;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9257__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9257__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__9290__auto___12312;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9257__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9257__auto__);
}
})()," (using =)"].join('')));
}

var expected__9289__auto___12313 = (1);
var actual__9290__auto___12314 = tic_tac_toe.ai.minimax.find_best_move_memo.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),new cljs.core.Keyword(null,"x","x",2099068185),(4),new cljs.core.Keyword(null,"o","o",-1350007228),(6),(7),(8),new cljs.core.Keyword(null,"o","o",-1350007228)], null),new cljs.core.Keyword(null,"x","x",2099068185),false);
if(cljs.core._EQ_.call(null,expected__9289__auto___12313,actual__9290__auto___12314)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__9289__auto___12313;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9257__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9257__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__9290__auto___12314;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9257__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9257__auto__);
}
})()," (using =)"].join('')));
}

var expected__9289__auto___12315 = (9);
var actual__9290__auto___12316 = tic_tac_toe.ai.minimax.find_best_move_memo.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"o","o",-1350007228),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"o","o",-1350007228),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"o","o",-1350007228),(7),new cljs.core.Keyword(null,"o","o",-1350007228),(9)], null),new cljs.core.Keyword(null,"x","x",2099068185),false);
if(cljs.core._EQ_.call(null,expected__9289__auto___12315,actual__9290__auto___12316)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__9289__auto___12315;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9257__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9257__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__9290__auto___12316;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9257__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9257__auto__);
}
})()," (using =)"].join('')));
}

var expected__9289__auto__ = (4);
var actual__9290__auto__ = tic_tac_toe.ai.minimax.find_best_move_memo.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"o","o",-1350007228),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"o","o",-1350007228),(4),new cljs.core.Keyword(null,"x","x",2099068185),(6),new cljs.core.Keyword(null,"o","o",-1350007228),new cljs.core.Keyword(null,"o","o",-1350007228),new cljs.core.Keyword(null,"x","x",2099068185)], null),new cljs.core.Keyword(null,"x","x",2099068185),false);
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
});})(_STAR_parent_description_STAR__orig_val__12173_12299,_STAR_parent_description_STAR__temp_val__12174_12300,description__9152__auto____$1,_STAR_parent_description_STAR__orig_val__11903_12204,_STAR_parent_description_STAR__temp_val__11904_12205,description__9152__auto___12203))
,false),(function (){var description__9152__auto____$2 = speclj.components.new_description.call(null,"slow",false,"tic-tac-toe.ai.minimax-spec");
var _STAR_parent_description_STAR__orig_val__12185_12317 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__12186_12318 = description__9152__auto____$2;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__12186_12318);

try{var seq__12187_12319 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.mapv.call(null,speclj.components.new_tag,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"slow","slow",120317203)], null)),speclj.components.new_characteristic.call(null,"finds move with most potential to win if not blocked",((function (_STAR_parent_description_STAR__orig_val__12185_12317,_STAR_parent_description_STAR__temp_val__12186_12318,description__9152__auto____$2,_STAR_parent_description_STAR__orig_val__12173_12299,_STAR_parent_description_STAR__temp_val__12174_12300,description__9152__auto____$1,_STAR_parent_description_STAR__orig_val__11903_12204,_STAR_parent_description_STAR__temp_val__11904_12205,description__9152__auto___12203){
return (function (){
var expected__9289__auto__ = (5);
var actual__9290__auto__ = tic_tac_toe.ai.minimax.find_best_move_memo.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"o","o",-1350007228),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"o","o",-1350007228),(5),(6),(7),(8),new cljs.core.Keyword(null,"o","o",-1350007228)], null),new cljs.core.Keyword(null,"x","x",2099068185),false);
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
});})(_STAR_parent_description_STAR__orig_val__12185_12317,_STAR_parent_description_STAR__temp_val__12186_12318,description__9152__auto____$2,_STAR_parent_description_STAR__orig_val__12173_12299,_STAR_parent_description_STAR__temp_val__12174_12300,description__9152__auto____$1,_STAR_parent_description_STAR__orig_val__11903_12204,_STAR_parent_description_STAR__temp_val__11904_12205,description__9152__auto___12203))
,false),speclj.components.new_characteristic.call(null,"plays center if first move is a corner",((function (_STAR_parent_description_STAR__orig_val__12185_12317,_STAR_parent_description_STAR__temp_val__12186_12318,description__9152__auto____$2,_STAR_parent_description_STAR__orig_val__12173_12299,_STAR_parent_description_STAR__temp_val__12174_12300,description__9152__auto____$1,_STAR_parent_description_STAR__orig_val__11903_12204,_STAR_parent_description_STAR__temp_val__11904_12205,description__9152__auto___12203){
return (function (){
var expected__9289__auto___12323 = (5);
var actual__9290__auto___12324 = tic_tac_toe.ai.minimax.find_best_move_memo.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"o","o",-1350007228),(2),(3),(4),(5),(6),(7),(8),(9)], null),new cljs.core.Keyword(null,"x","x",2099068185),false);
if(cljs.core._EQ_.call(null,expected__9289__auto___12323,actual__9290__auto___12324)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__9289__auto___12323;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9257__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9257__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__9290__auto___12324;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9257__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9257__auto__);
}
})()," (using =)"].join('')));
}

var expected__9289__auto___12325 = (5);
var actual__9290__auto___12326 = tic_tac_toe.ai.minimax.find_best_move_memo.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),new cljs.core.Keyword(null,"o","o",-1350007228),(4),(5),(6),(7),(8),(9)], null),new cljs.core.Keyword(null,"x","x",2099068185),false);
if(cljs.core._EQ_.call(null,expected__9289__auto___12325,actual__9290__auto___12326)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__9289__auto___12325;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9257__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9257__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__9290__auto___12326;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9257__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9257__auto__);
}
})()," (using =)"].join('')));
}

var expected__9289__auto___12327 = (5);
var actual__9290__auto___12328 = tic_tac_toe.ai.minimax.find_best_move_memo.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(3),(4),(5),(6),new cljs.core.Keyword(null,"o","o",-1350007228),(8),(9)], null),new cljs.core.Keyword(null,"x","x",2099068185),false);
if(cljs.core._EQ_.call(null,expected__9289__auto___12327,actual__9290__auto___12328)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__9289__auto___12327;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9257__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9257__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__9290__auto___12328;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9257__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9257__auto__);
}
})()," (using =)"].join('')));
}

var expected__9289__auto__ = (5);
var actual__9290__auto__ = tic_tac_toe.ai.minimax.find_best_move_memo.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(3),(4),(5),(6),(7),(8),new cljs.core.Keyword(null,"o","o",-1350007228)], null),new cljs.core.Keyword(null,"x","x",2099068185),false);
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
});})(_STAR_parent_description_STAR__orig_val__12185_12317,_STAR_parent_description_STAR__temp_val__12186_12318,description__9152__auto____$2,_STAR_parent_description_STAR__orig_val__12173_12299,_STAR_parent_description_STAR__temp_val__12174_12300,description__9152__auto____$1,_STAR_parent_description_STAR__orig_val__11903_12204,_STAR_parent_description_STAR__temp_val__11904_12205,description__9152__auto___12203))
,false)],null)));
var chunk__12188_12320 = null;
var count__12189_12321 = (0);
var i__12190_12322 = (0);
while(true){
if((i__12190_12322 < count__12189_12321)){
var component__9153__auto___12329 = cljs.core._nth.call(null,chunk__12188_12320,i__12190_12322);
speclj.components.install.call(null,component__9153__auto___12329,description__9152__auto____$2);


var G__12330 = seq__12187_12319;
var G__12331 = chunk__12188_12320;
var G__12332 = count__12189_12321;
var G__12333 = (i__12190_12322 + (1));
seq__12187_12319 = G__12330;
chunk__12188_12320 = G__12331;
count__12189_12321 = G__12332;
i__12190_12322 = G__12333;
continue;
} else {
var temp__5804__auto___12334 = cljs.core.seq.call(null,seq__12187_12319);
if(temp__5804__auto___12334){
var seq__12187_12335__$1 = temp__5804__auto___12334;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12187_12335__$1)){
var c__5525__auto___12336 = cljs.core.chunk_first.call(null,seq__12187_12335__$1);
var G__12337 = cljs.core.chunk_rest.call(null,seq__12187_12335__$1);
var G__12338 = c__5525__auto___12336;
var G__12339 = cljs.core.count.call(null,c__5525__auto___12336);
var G__12340 = (0);
seq__12187_12319 = G__12337;
chunk__12188_12320 = G__12338;
count__12189_12321 = G__12339;
i__12190_12322 = G__12340;
continue;
} else {
var component__9153__auto___12341 = cljs.core.first.call(null,seq__12187_12335__$1);
speclj.components.install.call(null,component__9153__auto___12341,description__9152__auto____$2);


var G__12342 = cljs.core.next.call(null,seq__12187_12335__$1);
var G__12343 = null;
var G__12344 = (0);
var G__12345 = (0);
seq__12187_12319 = G__12342;
chunk__12188_12320 = G__12343;
count__12189_12321 = G__12344;
i__12190_12322 = G__12345;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__12185_12317);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__9152__auto____$2);
}

return description__9152__auto____$2;
})()],null)));
var chunk__12176_12302 = null;
var count__12177_12303 = (0);
var i__12178_12304 = (0);
while(true){
if((i__12178_12304 < count__12177_12303)){
var component__9153__auto___12346 = cljs.core._nth.call(null,chunk__12176_12302,i__12178_12304);
speclj.components.install.call(null,component__9153__auto___12346,description__9152__auto____$1);


var G__12347 = seq__12175_12301;
var G__12348 = chunk__12176_12302;
var G__12349 = count__12177_12303;
var G__12350 = (i__12178_12304 + (1));
seq__12175_12301 = G__12347;
chunk__12176_12302 = G__12348;
count__12177_12303 = G__12349;
i__12178_12304 = G__12350;
continue;
} else {
var temp__5804__auto___12351 = cljs.core.seq.call(null,seq__12175_12301);
if(temp__5804__auto___12351){
var seq__12175_12352__$1 = temp__5804__auto___12351;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12175_12352__$1)){
var c__5525__auto___12353 = cljs.core.chunk_first.call(null,seq__12175_12352__$1);
var G__12354 = cljs.core.chunk_rest.call(null,seq__12175_12352__$1);
var G__12355 = c__5525__auto___12353;
var G__12356 = cljs.core.count.call(null,c__5525__auto___12353);
var G__12357 = (0);
seq__12175_12301 = G__12354;
chunk__12176_12302 = G__12355;
count__12177_12303 = G__12356;
i__12178_12304 = G__12357;
continue;
} else {
var component__9153__auto___12358 = cljs.core.first.call(null,seq__12175_12352__$1);
speclj.components.install.call(null,component__9153__auto___12358,description__9152__auto____$1);


var G__12359 = cljs.core.next.call(null,seq__12175_12352__$1);
var G__12360 = null;
var G__12361 = (0);
var G__12362 = (0);
seq__12175_12301 = G__12359;
chunk__12176_12302 = G__12360;
count__12177_12303 = G__12361;
i__12178_12304 = G__12362;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__12173_12299);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__9152__auto____$1);
}

return description__9152__auto____$1;
})(),(function (){var description__9152__auto____$1 = speclj.components.new_description.call(null,"plays 4x4 board",false,"tic-tac-toe.ai.minimax-spec");
var _STAR_parent_description_STAR__orig_val__12191_12363 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__12192_12364 = description__9152__auto____$1;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__12192_12364);

try{var seq__12193_12365 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,8,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.mapv.call(null,speclj.components.new_tag,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"slow","slow",120317203)], null)),speclj.components.new_characteristic.call(null,"finds move if next move is a win",((function (_STAR_parent_description_STAR__orig_val__12191_12363,_STAR_parent_description_STAR__temp_val__12192_12364,description__9152__auto____$1,_STAR_parent_description_STAR__orig_val__11903_12204,_STAR_parent_description_STAR__temp_val__11904_12205,description__9152__auto___12203){
return (function (){
var expected__9289__auto___12369 = (5);
var actual__9290__auto___12370 = tic_tac_toe.ai.minimax.find_best_move_memo.call(null,new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),(2),(3),new cljs.core.Keyword(null,"x","x",2099068185),(5),new cljs.core.Keyword(null,"o","o",-1350007228),new cljs.core.Keyword(null,"o","o",-1350007228),new cljs.core.Keyword(null,"o","o",-1350007228),(9),(10),new cljs.core.Keyword(null,"x","x",2099068185),(12),(13),new cljs.core.Keyword(null,"x","x",2099068185),(15),(16)], null),new cljs.core.Keyword(null,"o","o",-1350007228),false);
if(cljs.core._EQ_.call(null,expected__9289__auto___12369,actual__9290__auto___12370)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__9289__auto___12369;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9257__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9257__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__9290__auto___12370;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9257__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9257__auto__);
}
})()," (using =)"].join('')));
}

var expected__9289__auto__ = (5);
var actual__9290__auto__ = tic_tac_toe.ai.minimax.find_best_move_memo.call(null,new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"o","o",-1350007228),(2),(3),new cljs.core.Keyword(null,"o","o",-1350007228),(5),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"x","x",2099068185),(9),(10),new cljs.core.Keyword(null,"o","o",-1350007228),(12),(13),new cljs.core.Keyword(null,"o","o",-1350007228),(15),(16)], null),new cljs.core.Keyword(null,"x","x",2099068185),false);
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
});})(_STAR_parent_description_STAR__orig_val__12191_12363,_STAR_parent_description_STAR__temp_val__12192_12364,description__9152__auto____$1,_STAR_parent_description_STAR__orig_val__11903_12204,_STAR_parent_description_STAR__temp_val__11904_12205,description__9152__auto___12203))
,false),speclj.components.new_characteristic.call(null,"finds move if next move is a block",((function (_STAR_parent_description_STAR__orig_val__12191_12363,_STAR_parent_description_STAR__temp_val__12192_12364,description__9152__auto____$1,_STAR_parent_description_STAR__orig_val__11903_12204,_STAR_parent_description_STAR__temp_val__11904_12205,description__9152__auto___12203){
return (function (){
var expected__9289__auto__ = (4);
var actual__9290__auto__ = tic_tac_toe.ai.minimax.find_best_move_memo.call(null,new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"x","x",2099068185),(4),(5),(6),(7),(8),(9),(10),(11),(12),(13),(14),(15),(16)], null),new cljs.core.Keyword(null,"o","o",-1350007228),false);
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
});})(_STAR_parent_description_STAR__orig_val__12191_12363,_STAR_parent_description_STAR__temp_val__12192_12364,description__9152__auto____$1,_STAR_parent_description_STAR__orig_val__11903_12204,_STAR_parent_description_STAR__temp_val__11904_12205,description__9152__auto___12203))
,false),speclj.components.new_characteristic.call(null,"finds move on empty board",((function (_STAR_parent_description_STAR__orig_val__12191_12363,_STAR_parent_description_STAR__temp_val__12192_12364,description__9152__auto____$1,_STAR_parent_description_STAR__orig_val__11903_12204,_STAR_parent_description_STAR__temp_val__11904_12205,description__9152__auto___12203){
return (function (){
var expected__9289__auto__ = (1);
var actual__9290__auto__ = tic_tac_toe.ai.minimax.find_best_move_memo.call(null,cljs.core.vec.call(null,cljs.core.range.call(null,(1),(17))),new cljs.core.Keyword(null,"x","x",2099068185),false);
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
});})(_STAR_parent_description_STAR__orig_val__12191_12363,_STAR_parent_description_STAR__temp_val__12192_12364,description__9152__auto____$1,_STAR_parent_description_STAR__orig_val__11903_12204,_STAR_parent_description_STAR__temp_val__11904_12205,description__9152__auto___12203))
,false),speclj.components.new_characteristic.call(null,"finds second move",((function (_STAR_parent_description_STAR__orig_val__12191_12363,_STAR_parent_description_STAR__temp_val__12192_12364,description__9152__auto____$1,_STAR_parent_description_STAR__orig_val__11903_12204,_STAR_parent_description_STAR__temp_val__11904_12205,description__9152__auto___12203){
return (function (){
var expected__9289__auto___12371 = (2);
var actual__9290__auto___12372 = tic_tac_toe.ai.minimax.find_best_move_memo.call(null,new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),(2),(3),(4),(5),(6),(7),(8),(9),(10),(11),(12),(13),(14),(15),(16)], null),new cljs.core.Keyword(null,"o","o",-1350007228),false);
if(cljs.core._EQ_.call(null,expected__9289__auto___12371,actual__9290__auto___12372)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__9289__auto___12371;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9257__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9257__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__9290__auto___12372;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9257__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9257__auto__);
}
})()," (using =)"].join('')));
}

var expected__9289__auto___12373 = (1);
var actual__9290__auto___12374 = tic_tac_toe.ai.minimax.find_best_move_memo.call(null,new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),new cljs.core.Keyword(null,"x","x",2099068185),(3),(4),(5),(6),(7),(8),(9),(10),(11),(12),(13),(14),(15),(16)], null),new cljs.core.Keyword(null,"o","o",-1350007228),false);
if(cljs.core._EQ_.call(null,expected__9289__auto___12373,actual__9290__auto___12374)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__9289__auto___12373;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9257__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9257__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__9290__auto___12374;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9257__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9257__auto__);
}
})()," (using =)"].join('')));
}

var expected__9289__auto___12375 = (1);
var actual__9290__auto___12376 = tic_tac_toe.ai.minimax.find_best_move_memo.call(null,new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),new cljs.core.Keyword(null,"x","x",2099068185),(4),(5),(6),(7),(8),(9),(10),(11),(12),(13),(14),(15),(16)], null),new cljs.core.Keyword(null,"o","o",-1350007228),false);
if(cljs.core._EQ_.call(null,expected__9289__auto___12375,actual__9290__auto___12376)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__9289__auto___12375;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9257__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9257__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__9290__auto___12376;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9257__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9257__auto__);
}
})()," (using =)"].join('')));
}

var expected__9289__auto___12377 = (1);
var actual__9290__auto___12378 = tic_tac_toe.ai.minimax.find_best_move_memo.call(null,new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(3),new cljs.core.Keyword(null,"x","x",2099068185),(5),(6),(7),(8),(9),(10),(11),(12),(13),(14),(15),(16)], null),new cljs.core.Keyword(null,"o","o",-1350007228),false);
if(cljs.core._EQ_.call(null,expected__9289__auto___12377,actual__9290__auto___12378)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__9289__auto___12377;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9257__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9257__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__9290__auto___12378;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9257__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9257__auto__);
}
})()," (using =)"].join('')));
}

var expected__9289__auto___12379 = (1);
var actual__9290__auto___12380 = tic_tac_toe.ai.minimax.find_best_move_memo.call(null,new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(3),(4),new cljs.core.Keyword(null,"x","x",2099068185),(6),(7),(8),(9),(10),(11),(12),(13),(14),(15),(16)], null),new cljs.core.Keyword(null,"o","o",-1350007228),false);
if(cljs.core._EQ_.call(null,expected__9289__auto___12379,actual__9290__auto___12380)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__9289__auto___12379;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9257__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9257__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__9290__auto___12380;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9257__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9257__auto__);
}
})()," (using =)"].join('')));
}

var expected__9289__auto___12381 = (1);
var actual__9290__auto___12382 = tic_tac_toe.ai.minimax.find_best_move_memo.call(null,new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(3),(4),(5),new cljs.core.Keyword(null,"x","x",2099068185),(7),(8),(9),(10),(11),(12),(13),(14),(15),(16)], null),new cljs.core.Keyword(null,"o","o",-1350007228),false);
if(cljs.core._EQ_.call(null,expected__9289__auto___12381,actual__9290__auto___12382)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__9289__auto___12381;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9257__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9257__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__9290__auto___12382;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9257__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9257__auto__);
}
})()," (using =)"].join('')));
}

var expected__9289__auto___12383 = (1);
var actual__9290__auto___12384 = tic_tac_toe.ai.minimax.find_best_move_memo.call(null,new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(3),(4),(5),(6),new cljs.core.Keyword(null,"x","x",2099068185),(8),(9),(10),(11),(12),(13),(14),(15),(16)], null),new cljs.core.Keyword(null,"o","o",-1350007228),false);
if(cljs.core._EQ_.call(null,expected__9289__auto___12383,actual__9290__auto___12384)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__9289__auto___12383;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9257__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9257__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__9290__auto___12384;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9257__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9257__auto__);
}
})()," (using =)"].join('')));
}

var expected__9289__auto___12385 = (1);
var actual__9290__auto___12386 = tic_tac_toe.ai.minimax.find_best_move_memo.call(null,new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(3),(4),(5),(6),(7),new cljs.core.Keyword(null,"x","x",2099068185),(9),(10),(11),(12),(13),(14),(15),(16)], null),new cljs.core.Keyword(null,"o","o",-1350007228),false);
if(cljs.core._EQ_.call(null,expected__9289__auto___12385,actual__9290__auto___12386)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__9289__auto___12385;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9257__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9257__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__9290__auto___12386;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9257__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9257__auto__);
}
})()," (using =)"].join('')));
}

var expected__9289__auto___12387 = (1);
var actual__9290__auto___12388 = tic_tac_toe.ai.minimax.find_best_move_memo.call(null,new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(3),(4),(5),(6),(7),(8),new cljs.core.Keyword(null,"x","x",2099068185),(10),(11),(12),(13),(14),(15),(16)], null),new cljs.core.Keyword(null,"o","o",-1350007228),false);
if(cljs.core._EQ_.call(null,expected__9289__auto___12387,actual__9290__auto___12388)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__9289__auto___12387;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9257__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9257__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__9290__auto___12388;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9257__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9257__auto__);
}
})()," (using =)"].join('')));
}

var expected__9289__auto___12389 = (1);
var actual__9290__auto___12390 = tic_tac_toe.ai.minimax.find_best_move_memo.call(null,new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(3),(4),(5),(6),(7),(8),(9),new cljs.core.Keyword(null,"x","x",2099068185),(11),(12),(13),(14),(15),(16)], null),new cljs.core.Keyword(null,"o","o",-1350007228),false);
if(cljs.core._EQ_.call(null,expected__9289__auto___12389,actual__9290__auto___12390)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__9289__auto___12389;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9257__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9257__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__9290__auto___12390;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9257__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9257__auto__);
}
})()," (using =)"].join('')));
}

var expected__9289__auto___12391 = (1);
var actual__9290__auto___12392 = tic_tac_toe.ai.minimax.find_best_move_memo.call(null,new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(3),(4),(5),(6),(7),(8),(9),(10),new cljs.core.Keyword(null,"x","x",2099068185),(12),(13),(14),(15),(16)], null),new cljs.core.Keyword(null,"o","o",-1350007228),false);
if(cljs.core._EQ_.call(null,expected__9289__auto___12391,actual__9290__auto___12392)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__9289__auto___12391;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9257__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9257__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__9290__auto___12392;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9257__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9257__auto__);
}
})()," (using =)"].join('')));
}

var expected__9289__auto___12393 = (1);
var actual__9290__auto___12394 = tic_tac_toe.ai.minimax.find_best_move_memo.call(null,new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(3),(4),(5),(6),(7),(8),(9),(10),(11),new cljs.core.Keyword(null,"x","x",2099068185),(13),(14),(15),(16)], null),new cljs.core.Keyword(null,"o","o",-1350007228),false);
if(cljs.core._EQ_.call(null,expected__9289__auto___12393,actual__9290__auto___12394)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__9289__auto___12393;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9257__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9257__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__9290__auto___12394;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9257__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9257__auto__);
}
})()," (using =)"].join('')));
}

var expected__9289__auto___12395 = (1);
var actual__9290__auto___12396 = tic_tac_toe.ai.minimax.find_best_move_memo.call(null,new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(3),(4),(5),(6),(7),(8),(9),(10),(11),(12),new cljs.core.Keyword(null,"x","x",2099068185),(14),(15),(16)], null),new cljs.core.Keyword(null,"o","o",-1350007228),false);
if(cljs.core._EQ_.call(null,expected__9289__auto___12395,actual__9290__auto___12396)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__9289__auto___12395;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9257__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9257__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__9290__auto___12396;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9257__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9257__auto__);
}
})()," (using =)"].join('')));
}

var expected__9289__auto___12397 = (1);
var actual__9290__auto___12398 = tic_tac_toe.ai.minimax.find_best_move_memo.call(null,new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(3),(4),(5),(6),(7),(8),(9),(10),(11),(12),(13),new cljs.core.Keyword(null,"x","x",2099068185),(15),(16)], null),new cljs.core.Keyword(null,"o","o",-1350007228),false);
if(cljs.core._EQ_.call(null,expected__9289__auto___12397,actual__9290__auto___12398)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__9289__auto___12397;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9257__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9257__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__9290__auto___12398;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9257__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9257__auto__);
}
})()," (using =)"].join('')));
}

var expected__9289__auto___12399 = (1);
var actual__9290__auto___12400 = tic_tac_toe.ai.minimax.find_best_move_memo.call(null,new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(3),(4),(5),(6),(7),(8),(9),(10),(11),(12),(13),(14),new cljs.core.Keyword(null,"x","x",2099068185),(16)], null),new cljs.core.Keyword(null,"o","o",-1350007228),false);
if(cljs.core._EQ_.call(null,expected__9289__auto___12399,actual__9290__auto___12400)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__9289__auto___12399;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9257__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9257__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__9290__auto___12400;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9257__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9257__auto__);
}
})()," (using =)"].join('')));
}

var expected__9289__auto__ = (1);
var actual__9290__auto__ = tic_tac_toe.ai.minimax.find_best_move_memo.call(null,new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(3),(4),(5),(6),(7),(8),(9),(10),(11),(12),(13),(14),(15),new cljs.core.Keyword(null,"x","x",2099068185)], null),new cljs.core.Keyword(null,"o","o",-1350007228),false);
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
});})(_STAR_parent_description_STAR__orig_val__12191_12363,_STAR_parent_description_STAR__temp_val__12192_12364,description__9152__auto____$1,_STAR_parent_description_STAR__orig_val__11903_12204,_STAR_parent_description_STAR__temp_val__11904_12205,description__9152__auto___12203))
,false),speclj.components.new_characteristic.call(null,"finds third move",((function (_STAR_parent_description_STAR__orig_val__12191_12363,_STAR_parent_description_STAR__temp_val__12192_12364,description__9152__auto____$1,_STAR_parent_description_STAR__orig_val__11903_12204,_STAR_parent_description_STAR__temp_val__11904_12205,description__9152__auto___12203){
return (function (){
var expected__9289__auto___12401 = (3);
var actual__9290__auto___12402 = tic_tac_toe.ai.minimax.find_best_move_memo.call(null,new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"o","o",-1350007228),(3),(4),(5),(6),(7),(8),(9),(10),(11),(12),(13),(14),(15),(16)], null),new cljs.core.Keyword(null,"x","x",2099068185),false);
if(cljs.core._EQ_.call(null,expected__9289__auto___12401,actual__9290__auto___12402)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__9289__auto___12401;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9257__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9257__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__9290__auto___12402;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9257__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9257__auto__);
}
})()," (using =)"].join('')));
}

var expected__9289__auto___12403 = (3);
var actual__9290__auto___12404 = tic_tac_toe.ai.minimax.find_best_move_memo.call(null,new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"o","o",-1350007228),new cljs.core.Keyword(null,"x","x",2099068185),(3),(4),(5),(6),(7),(8),(9),(10),(11),(12),(13),(14),(15),(16)], null),new cljs.core.Keyword(null,"x","x",2099068185),false);
if(cljs.core._EQ_.call(null,expected__9289__auto___12403,actual__9290__auto___12404)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__9289__auto___12403;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9257__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9257__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__9290__auto___12404;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9257__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9257__auto__);
}
})()," (using =)"].join('')));
}

var expected__9289__auto___12405 = (2);
var actual__9290__auto___12406 = tic_tac_toe.ai.minimax.find_best_move_memo.call(null,new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"o","o",-1350007228),(2),new cljs.core.Keyword(null,"x","x",2099068185),(4),(5),(6),(7),(8),(9),(10),(11),(12),(13),(14),(15),(16)], null),new cljs.core.Keyword(null,"x","x",2099068185),false);
if(cljs.core._EQ_.call(null,expected__9289__auto___12405,actual__9290__auto___12406)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__9289__auto___12405;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9257__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9257__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__9290__auto___12406;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9257__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9257__auto__);
}
})()," (using =)"].join('')));
}

var expected__9289__auto___12407 = (2);
var actual__9290__auto___12408 = tic_tac_toe.ai.minimax.find_best_move_memo.call(null,new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"o","o",-1350007228),(2),(3),new cljs.core.Keyword(null,"x","x",2099068185),(5),(6),(7),(8),(9),(10),(11),(12),(13),(14),(15),(16)], null),new cljs.core.Keyword(null,"x","x",2099068185),false);
if(cljs.core._EQ_.call(null,expected__9289__auto___12407,actual__9290__auto___12408)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__9289__auto___12407;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9257__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9257__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__9290__auto___12408;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9257__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9257__auto__);
}
})()," (using =)"].join('')));
}

var expected__9289__auto___12409 = (2);
var actual__9290__auto___12410 = tic_tac_toe.ai.minimax.find_best_move_memo.call(null,new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"o","o",-1350007228),(2),(3),(4),new cljs.core.Keyword(null,"x","x",2099068185),(6),(7),(8),(9),(10),(11),(12),(13),(14),(15),(16)], null),new cljs.core.Keyword(null,"x","x",2099068185),false);
if(cljs.core._EQ_.call(null,expected__9289__auto___12409,actual__9290__auto___12410)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__9289__auto___12409;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9257__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9257__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__9290__auto___12410;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9257__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9257__auto__);
}
})()," (using =)"].join('')));
}

var expected__9289__auto___12411 = (2);
var actual__9290__auto___12412 = tic_tac_toe.ai.minimax.find_best_move_memo.call(null,new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"o","o",-1350007228),(2),(3),(4),(5),new cljs.core.Keyword(null,"x","x",2099068185),(7),(8),(9),(10),(11),(12),(13),(14),(15),(16)], null),new cljs.core.Keyword(null,"x","x",2099068185),false);
if(cljs.core._EQ_.call(null,expected__9289__auto___12411,actual__9290__auto___12412)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__9289__auto___12411;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9257__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9257__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__9290__auto___12412;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9257__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9257__auto__);
}
})()," (using =)"].join('')));
}

var expected__9289__auto___12413 = (2);
var actual__9290__auto___12414 = tic_tac_toe.ai.minimax.find_best_move_memo.call(null,new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"o","o",-1350007228),(2),(3),(4),(5),(6),new cljs.core.Keyword(null,"x","x",2099068185),(8),(9),(10),(11),(12),(13),(14),(15),(16)], null),new cljs.core.Keyword(null,"x","x",2099068185),false);
if(cljs.core._EQ_.call(null,expected__9289__auto___12413,actual__9290__auto___12414)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__9289__auto___12413;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9257__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9257__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__9290__auto___12414;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9257__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9257__auto__);
}
})()," (using =)"].join('')));
}

var expected__9289__auto___12415 = (2);
var actual__9290__auto___12416 = tic_tac_toe.ai.minimax.find_best_move_memo.call(null,new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"o","o",-1350007228),(2),(3),(4),(5),(6),(7),new cljs.core.Keyword(null,"x","x",2099068185),(9),(10),(11),(12),(13),(14),(15),(16)], null),new cljs.core.Keyword(null,"x","x",2099068185),false);
if(cljs.core._EQ_.call(null,expected__9289__auto___12415,actual__9290__auto___12416)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__9289__auto___12415;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9257__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9257__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__9290__auto___12416;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9257__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9257__auto__);
}
})()," (using =)"].join('')));
}

var expected__9289__auto___12417 = (2);
var actual__9290__auto___12418 = tic_tac_toe.ai.minimax.find_best_move_memo.call(null,new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"o","o",-1350007228),(2),(3),(4),(5),(6),(7),(8),new cljs.core.Keyword(null,"x","x",2099068185),(10),(11),(12),(13),(14),(15),(16)], null),new cljs.core.Keyword(null,"x","x",2099068185),false);
if(cljs.core._EQ_.call(null,expected__9289__auto___12417,actual__9290__auto___12418)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__9289__auto___12417;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9257__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9257__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__9290__auto___12418;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9257__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9257__auto__);
}
})()," (using =)"].join('')));
}

var expected__9289__auto___12419 = (2);
var actual__9290__auto___12420 = tic_tac_toe.ai.minimax.find_best_move_memo.call(null,new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"o","o",-1350007228),(2),(3),(4),(5),(6),(7),(8),(9),new cljs.core.Keyword(null,"x","x",2099068185),(11),(12),(13),(14),(15),(16)], null),new cljs.core.Keyword(null,"x","x",2099068185),false);
if(cljs.core._EQ_.call(null,expected__9289__auto___12419,actual__9290__auto___12420)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__9289__auto___12419;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9257__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9257__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__9290__auto___12420;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9257__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9257__auto__);
}
})()," (using =)"].join('')));
}

var expected__9289__auto___12421 = (2);
var actual__9290__auto___12422 = tic_tac_toe.ai.minimax.find_best_move_memo.call(null,new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"o","o",-1350007228),(2),(3),(4),(5),(6),(7),(8),(9),(10),new cljs.core.Keyword(null,"x","x",2099068185),(12),(13),(14),(15),(16)], null),new cljs.core.Keyword(null,"x","x",2099068185),false);
if(cljs.core._EQ_.call(null,expected__9289__auto___12421,actual__9290__auto___12422)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__9289__auto___12421;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9257__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9257__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__9290__auto___12422;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9257__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9257__auto__);
}
})()," (using =)"].join('')));
}

var expected__9289__auto___12423 = (2);
var actual__9290__auto___12424 = tic_tac_toe.ai.minimax.find_best_move_memo.call(null,new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"o","o",-1350007228),(2),(3),(4),(5),(6),(7),(8),(9),(10),(11),new cljs.core.Keyword(null,"x","x",2099068185),(13),(14),(15),(16)], null),new cljs.core.Keyword(null,"x","x",2099068185),false);
if(cljs.core._EQ_.call(null,expected__9289__auto___12423,actual__9290__auto___12424)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__9289__auto___12423;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9257__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9257__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__9290__auto___12424;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9257__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9257__auto__);
}
})()," (using =)"].join('')));
}

var expected__9289__auto___12425 = (2);
var actual__9290__auto___12426 = tic_tac_toe.ai.minimax.find_best_move_memo.call(null,new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"o","o",-1350007228),(2),(3),(4),(5),(6),(7),(8),(9),(10),(11),(12),new cljs.core.Keyword(null,"x","x",2099068185),(14),(15),(16)], null),new cljs.core.Keyword(null,"x","x",2099068185),false);
if(cljs.core._EQ_.call(null,expected__9289__auto___12425,actual__9290__auto___12426)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__9289__auto___12425;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9257__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9257__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__9290__auto___12426;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9257__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9257__auto__);
}
})()," (using =)"].join('')));
}

var expected__9289__auto___12427 = (2);
var actual__9290__auto___12428 = tic_tac_toe.ai.minimax.find_best_move_memo.call(null,new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"o","o",-1350007228),(2),(3),(4),(5),(6),(7),(8),(9),(10),(11),(12),(13),new cljs.core.Keyword(null,"x","x",2099068185),(15),(16)], null),new cljs.core.Keyword(null,"x","x",2099068185),false);
if(cljs.core._EQ_.call(null,expected__9289__auto___12427,actual__9290__auto___12428)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__9289__auto___12427;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9257__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9257__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__9290__auto___12428;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9257__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9257__auto__);
}
})()," (using =)"].join('')));
}

var expected__9289__auto___12429 = (2);
var actual__9290__auto___12430 = tic_tac_toe.ai.minimax.find_best_move_memo.call(null,new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"o","o",-1350007228),(2),(3),(4),(5),(6),(7),(8),(9),(10),(11),(12),(13),(14),new cljs.core.Keyword(null,"x","x",2099068185),(16)], null),new cljs.core.Keyword(null,"x","x",2099068185),false);
if(cljs.core._EQ_.call(null,expected__9289__auto___12429,actual__9290__auto___12430)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__9289__auto___12429;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9257__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9257__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__9290__auto___12430;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9257__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9257__auto__);
}
})()," (using =)"].join('')));
}

var expected__9289__auto__ = (2);
var actual__9290__auto__ = tic_tac_toe.ai.minimax.find_best_move_memo.call(null,new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"o","o",-1350007228),(2),(3),(4),(5),(6),(7),(8),(9),(10),(11),(12),(13),(14),(15),new cljs.core.Keyword(null,"x","x",2099068185)], null),new cljs.core.Keyword(null,"x","x",2099068185),false);
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
});})(_STAR_parent_description_STAR__orig_val__12191_12363,_STAR_parent_description_STAR__temp_val__12192_12364,description__9152__auto____$1,_STAR_parent_description_STAR__orig_val__11903_12204,_STAR_parent_description_STAR__temp_val__11904_12205,description__9152__auto___12203))
,false),speclj.components.new_characteristic.call(null,"finds fourth move",((function (_STAR_parent_description_STAR__orig_val__12191_12363,_STAR_parent_description_STAR__temp_val__12192_12364,description__9152__auto____$1,_STAR_parent_description_STAR__orig_val__11903_12204,_STAR_parent_description_STAR__temp_val__11904_12205,description__9152__auto___12203){
return (function (){
var expected__9289__auto___12431 = (4);
var actual__9290__auto___12432 = tic_tac_toe.ai.minimax.find_best_move_memo.call(null,new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"o","o",-1350007228),new cljs.core.Keyword(null,"x","x",2099068185),(4),(5),(6),(7),(8),(9),(10),(11),(12),(13),(14),(15),(16)], null),new cljs.core.Keyword(null,"o","o",-1350007228),false);
if(cljs.core._EQ_.call(null,expected__9289__auto___12431,actual__9290__auto___12432)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__9289__auto___12431;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9257__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9257__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__9290__auto___12432;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9257__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9257__auto__);
}
})()," (using =)"].join('')));
}

var expected__9289__auto___12433 = (4);
var actual__9290__auto___12434 = tic_tac_toe.ai.minimax.find_best_move_memo.call(null,new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"o","o",-1350007228),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"x","x",2099068185),(4),(5),(6),(7),(8),(9),(10),(11),(12),(13),(14),(15),(16)], null),new cljs.core.Keyword(null,"o","o",-1350007228),false);
if(cljs.core._EQ_.call(null,expected__9289__auto___12433,actual__9290__auto___12434)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__9289__auto___12433;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9257__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9257__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__9290__auto___12434;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9257__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9257__auto__);
}
})()," (using =)"].join('')));
}

var expected__9289__auto___12435 = (4);
var actual__9290__auto___12436 = tic_tac_toe.ai.minimax.find_best_move_memo.call(null,new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"o","o",-1350007228),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"x","x",2099068185),(4),(5),(6),(7),(8),(9),(10),(11),(12),(13),(14),(15),(16)], null),new cljs.core.Keyword(null,"o","o",-1350007228),false);
if(cljs.core._EQ_.call(null,expected__9289__auto___12435,actual__9290__auto___12436)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__9289__auto___12435;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9257__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9257__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__9290__auto___12436;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9257__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9257__auto__);
}
})()," (using =)"].join('')));
}

var expected__9289__auto___12437 = (2);
var actual__9290__auto___12438 = tic_tac_toe.ai.minimax.find_best_move_memo.call(null,new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"o","o",-1350007228),(2),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"x","x",2099068185),(5),(6),(7),(8),(9),(10),(11),(12),(13),(14),(15),(16)], null),new cljs.core.Keyword(null,"o","o",-1350007228),false);
if(cljs.core._EQ_.call(null,expected__9289__auto___12437,actual__9290__auto___12438)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__9289__auto___12437;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9257__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9257__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__9290__auto___12438;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9257__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9257__auto__);
}
})()," (using =)"].join('')));
}

var expected__9289__auto___12439 = (2);
var actual__9290__auto___12440 = tic_tac_toe.ai.minimax.find_best_move_memo.call(null,new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"o","o",-1350007228),(2),new cljs.core.Keyword(null,"x","x",2099068185),(4),new cljs.core.Keyword(null,"x","x",2099068185),(6),(7),(8),(9),(10),(11),(12),(13),(14),(15),(16)], null),new cljs.core.Keyword(null,"o","o",-1350007228),false);
if(cljs.core._EQ_.call(null,expected__9289__auto___12439,actual__9290__auto___12440)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__9289__auto___12439;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9257__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9257__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__9290__auto___12440;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9257__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9257__auto__);
}
})()," (using =)"].join('')));
}

var expected__9289__auto___12441 = (2);
var actual__9290__auto___12442 = tic_tac_toe.ai.minimax.find_best_move_memo.call(null,new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"o","o",-1350007228),(2),new cljs.core.Keyword(null,"x","x",2099068185),(4),(5),new cljs.core.Keyword(null,"x","x",2099068185),(7),(8),(9),(10),(11),(12),(13),(14),(15),(16)], null),new cljs.core.Keyword(null,"o","o",-1350007228),false);
if(cljs.core._EQ_.call(null,expected__9289__auto___12441,actual__9290__auto___12442)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__9289__auto___12441;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9257__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9257__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__9290__auto___12442;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9257__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9257__auto__);
}
})()," (using =)"].join('')));
}

var expected__9289__auto___12443 = (2);
var actual__9290__auto___12444 = tic_tac_toe.ai.minimax.find_best_move_memo.call(null,new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"o","o",-1350007228),(2),new cljs.core.Keyword(null,"x","x",2099068185),(4),(5),(6),new cljs.core.Keyword(null,"x","x",2099068185),(8),(9),(10),(11),(12),(13),(14),(15),(16)], null),new cljs.core.Keyword(null,"o","o",-1350007228),false);
if(cljs.core._EQ_.call(null,expected__9289__auto___12443,actual__9290__auto___12444)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__9289__auto___12443;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9257__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9257__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__9290__auto___12444;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9257__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9257__auto__);
}
})()," (using =)"].join('')));
}

var expected__9289__auto___12445 = (2);
var actual__9290__auto___12446 = tic_tac_toe.ai.minimax.find_best_move_memo.call(null,new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"o","o",-1350007228),(2),new cljs.core.Keyword(null,"x","x",2099068185),(4),(5),(6),(7),new cljs.core.Keyword(null,"x","x",2099068185),(9),(10),(11),(12),(13),(14),(15),(16)], null),new cljs.core.Keyword(null,"o","o",-1350007228),false);
if(cljs.core._EQ_.call(null,expected__9289__auto___12445,actual__9290__auto___12446)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__9289__auto___12445;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9257__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9257__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__9290__auto___12446;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9257__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9257__auto__);
}
})()," (using =)"].join('')));
}

var expected__9289__auto___12447 = (2);
var actual__9290__auto___12448 = tic_tac_toe.ai.minimax.find_best_move_memo.call(null,new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"o","o",-1350007228),(2),new cljs.core.Keyword(null,"x","x",2099068185),(4),(5),(6),(7),(8),new cljs.core.Keyword(null,"x","x",2099068185),(10),(11),(12),(13),(14),(15),(16)], null),new cljs.core.Keyword(null,"o","o",-1350007228),false);
if(cljs.core._EQ_.call(null,expected__9289__auto___12447,actual__9290__auto___12448)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__9289__auto___12447;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9257__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9257__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__9290__auto___12448;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9257__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9257__auto__);
}
})()," (using =)"].join('')));
}

var expected__9289__auto___12449 = (2);
var actual__9290__auto___12450 = tic_tac_toe.ai.minimax.find_best_move_memo.call(null,new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"o","o",-1350007228),(2),new cljs.core.Keyword(null,"x","x",2099068185),(4),(5),(6),(7),(8),(9),new cljs.core.Keyword(null,"x","x",2099068185),(11),(12),(13),(14),(15),(16)], null),new cljs.core.Keyword(null,"o","o",-1350007228),false);
if(cljs.core._EQ_.call(null,expected__9289__auto___12449,actual__9290__auto___12450)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__9289__auto___12449;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9257__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9257__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__9290__auto___12450;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9257__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9257__auto__);
}
})()," (using =)"].join('')));
}

var expected__9289__auto___12451 = (2);
var actual__9290__auto___12452 = tic_tac_toe.ai.minimax.find_best_move_memo.call(null,new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"o","o",-1350007228),(2),new cljs.core.Keyword(null,"x","x",2099068185),(4),(5),(6),(7),(8),(9),(10),new cljs.core.Keyword(null,"x","x",2099068185),(12),(13),(14),(15),(16)], null),new cljs.core.Keyword(null,"o","o",-1350007228),false);
if(cljs.core._EQ_.call(null,expected__9289__auto___12451,actual__9290__auto___12452)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__9289__auto___12451;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9257__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9257__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__9290__auto___12452;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9257__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9257__auto__);
}
})()," (using =)"].join('')));
}

var expected__9289__auto___12453 = (2);
var actual__9290__auto___12454 = tic_tac_toe.ai.minimax.find_best_move_memo.call(null,new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"o","o",-1350007228),(2),new cljs.core.Keyword(null,"x","x",2099068185),(4),(5),(6),(7),(8),(9),(10),(11),new cljs.core.Keyword(null,"x","x",2099068185),(13),(14),(15),(16)], null),new cljs.core.Keyword(null,"o","o",-1350007228),false);
if(cljs.core._EQ_.call(null,expected__9289__auto___12453,actual__9290__auto___12454)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__9289__auto___12453;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9257__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9257__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__9290__auto___12454;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9257__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9257__auto__);
}
})()," (using =)"].join('')));
}

var expected__9289__auto___12455 = (2);
var actual__9290__auto___12456 = tic_tac_toe.ai.minimax.find_best_move_memo.call(null,new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"o","o",-1350007228),(2),new cljs.core.Keyword(null,"x","x",2099068185),(4),(5),(6),(7),(8),(9),(10),(11),(12),new cljs.core.Keyword(null,"x","x",2099068185),(14),(15),(16)], null),new cljs.core.Keyword(null,"o","o",-1350007228),false);
if(cljs.core._EQ_.call(null,expected__9289__auto___12455,actual__9290__auto___12456)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__9289__auto___12455;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9257__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9257__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__9290__auto___12456;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9257__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9257__auto__);
}
})()," (using =)"].join('')));
}

var expected__9289__auto___12457 = (2);
var actual__9290__auto___12458 = tic_tac_toe.ai.minimax.find_best_move_memo.call(null,new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"o","o",-1350007228),(2),new cljs.core.Keyword(null,"x","x",2099068185),(4),(5),(6),(7),(8),(9),(10),(11),(12),(13),new cljs.core.Keyword(null,"x","x",2099068185),(15),(16)], null),new cljs.core.Keyword(null,"o","o",-1350007228),false);
if(cljs.core._EQ_.call(null,expected__9289__auto___12457,actual__9290__auto___12458)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__9289__auto___12457;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9257__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9257__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__9290__auto___12458;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9257__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9257__auto__);
}
})()," (using =)"].join('')));
}

var expected__9289__auto___12459 = (2);
var actual__9290__auto___12460 = tic_tac_toe.ai.minimax.find_best_move_memo.call(null,new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"o","o",-1350007228),(2),new cljs.core.Keyword(null,"x","x",2099068185),(4),(5),(6),(7),(8),(9),(10),(11),(12),(13),(14),new cljs.core.Keyword(null,"x","x",2099068185),(16)], null),new cljs.core.Keyword(null,"o","o",-1350007228),false);
if(cljs.core._EQ_.call(null,expected__9289__auto___12459,actual__9290__auto___12460)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__9289__auto___12459;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9257__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9257__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__9290__auto___12460;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9257__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9257__auto__);
}
})()," (using =)"].join('')));
}

var expected__9289__auto__ = (2);
var actual__9290__auto__ = tic_tac_toe.ai.minimax.find_best_move_memo.call(null,new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"o","o",-1350007228),(2),(3),new cljs.core.Keyword(null,"x","x",2099068185),(5),(6),(7),(8),(9),(10),(11),(12),(13),(14),(15),new cljs.core.Keyword(null,"x","x",2099068185)], null),new cljs.core.Keyword(null,"o","o",-1350007228),false);
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
});})(_STAR_parent_description_STAR__orig_val__12191_12363,_STAR_parent_description_STAR__temp_val__12192_12364,description__9152__auto____$1,_STAR_parent_description_STAR__orig_val__11903_12204,_STAR_parent_description_STAR__temp_val__11904_12205,description__9152__auto___12203))
,false),speclj.components.new_characteristic.call(null,"finds 6th move",((function (_STAR_parent_description_STAR__orig_val__12191_12363,_STAR_parent_description_STAR__temp_val__12192_12364,description__9152__auto____$1,_STAR_parent_description_STAR__orig_val__11903_12204,_STAR_parent_description_STAR__temp_val__11904_12205,description__9152__auto___12203){
return (function (){
var expected__9289__auto__ = (3);
var actual__9290__auto__ = tic_tac_toe.ai.minimax.find_best_move_memo.call(null,new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"o","o",-1350007228),new cljs.core.Keyword(null,"o","o",-1350007228),(3),new cljs.core.Keyword(null,"x","x",2099068185),(5),(6),(7),(8),new cljs.core.Keyword(null,"x","x",2099068185),(10),(11),new cljs.core.Keyword(null,"x","x",2099068185),(13),(14),(15),(16)], null),new cljs.core.Keyword(null,"x","x",2099068185),false);
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
});})(_STAR_parent_description_STAR__orig_val__12191_12363,_STAR_parent_description_STAR__temp_val__12192_12364,description__9152__auto____$1,_STAR_parent_description_STAR__orig_val__11903_12204,_STAR_parent_description_STAR__temp_val__11904_12205,description__9152__auto___12203))
,false)],null)));
var chunk__12194_12366 = null;
var count__12195_12367 = (0);
var i__12196_12368 = (0);
while(true){
if((i__12196_12368 < count__12195_12367)){
var component__9153__auto___12461 = cljs.core._nth.call(null,chunk__12194_12366,i__12196_12368);
speclj.components.install.call(null,component__9153__auto___12461,description__9152__auto____$1);


var G__12462 = seq__12193_12365;
var G__12463 = chunk__12194_12366;
var G__12464 = count__12195_12367;
var G__12465 = (i__12196_12368 + (1));
seq__12193_12365 = G__12462;
chunk__12194_12366 = G__12463;
count__12195_12367 = G__12464;
i__12196_12368 = G__12465;
continue;
} else {
var temp__5804__auto___12466 = cljs.core.seq.call(null,seq__12193_12365);
if(temp__5804__auto___12466){
var seq__12193_12467__$1 = temp__5804__auto___12466;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12193_12467__$1)){
var c__5525__auto___12468 = cljs.core.chunk_first.call(null,seq__12193_12467__$1);
var G__12469 = cljs.core.chunk_rest.call(null,seq__12193_12467__$1);
var G__12470 = c__5525__auto___12468;
var G__12471 = cljs.core.count.call(null,c__5525__auto___12468);
var G__12472 = (0);
seq__12193_12365 = G__12469;
chunk__12194_12366 = G__12470;
count__12195_12367 = G__12471;
i__12196_12368 = G__12472;
continue;
} else {
var component__9153__auto___12473 = cljs.core.first.call(null,seq__12193_12467__$1);
speclj.components.install.call(null,component__9153__auto___12473,description__9152__auto____$1);


var G__12474 = cljs.core.next.call(null,seq__12193_12467__$1);
var G__12475 = null;
var G__12476 = (0);
var G__12477 = (0);
seq__12193_12365 = G__12474;
chunk__12194_12366 = G__12475;
count__12195_12367 = G__12476;
i__12196_12368 = G__12477;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__12191_12363);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__9152__auto____$1);
}

return description__9152__auto____$1;
})(),(function (){var description__9152__auto____$1 = speclj.components.new_description.call(null,"plays 3D board",false,"tic-tac-toe.ai.minimax-spec");
var _STAR_parent_description_STAR__orig_val__12197_12478 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__12198_12479 = description__9152__auto____$1;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__12198_12479);

try{var seq__12199_12480 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,4,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_characteristic.call(null,"finds potential active winning paths for given player",((function (_STAR_parent_description_STAR__orig_val__12197_12478,_STAR_parent_description_STAR__temp_val__12198_12479,description__9152__auto____$1,_STAR_parent_description_STAR__orig_val__11903_12204,_STAR_parent_description_STAR__temp_val__11904_12205,description__9152__auto___12203){
return (function (){
var expected__9289__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(12),new cljs.core.Keyword(null,"o","o",-1350007228),(18)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(6),new cljs.core.Keyword(null,"o","o",-1350007228),(24)], null)], null);
var actual__9290__auto__ = tic_tac_toe.ai.minimax.get_player_paths.call(null,new cljs.core.PersistentVector(null, 27, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),new cljs.core.Keyword(null,"x","x",2099068185),(3),(4),(5),(6),(7),(8),(9),(10),(11),(12),(13),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"o","o",-1350007228),(16),(17),(18),(19),(20),(21),(22),(23),(24),(25),(26),(27)], null),new cljs.core.Keyword(null,"o","o",-1350007228));
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
});})(_STAR_parent_description_STAR__orig_val__12197_12478,_STAR_parent_description_STAR__temp_val__12198_12479,description__9152__auto____$1,_STAR_parent_description_STAR__orig_val__11903_12204,_STAR_parent_description_STAR__temp_val__11904_12205,description__9152__auto___12203))
,false),speclj.components.new_characteristic.call(null,"find potential active winning moves for given player",((function (_STAR_parent_description_STAR__orig_val__12197_12478,_STAR_parent_description_STAR__temp_val__12198_12479,description__9152__auto____$1,_STAR_parent_description_STAR__orig_val__11903_12204,_STAR_parent_description_STAR__temp_val__11904_12205,description__9152__auto___12203){
return (function (){
var expected__9289__auto__ = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(12),(18),(6),(24)], null);
var actual__9290__auto__ = tic_tac_toe.ai.minimax.get_player_moves.call(null,new cljs.core.PersistentVector(null, 27, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),new cljs.core.Keyword(null,"x","x",2099068185),(3),(4),(5),(6),(7),(8),(9),(10),(11),(12),(13),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"o","o",-1350007228),(16),(17),(18),(19),(20),(21),(22),(23),(24),(25),(26),(27)], null),new cljs.core.Keyword(null,"o","o",-1350007228));
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
});})(_STAR_parent_description_STAR__orig_val__12197_12478,_STAR_parent_description_STAR__temp_val__12198_12479,description__9152__auto____$1,_STAR_parent_description_STAR__orig_val__11903_12204,_STAR_parent_description_STAR__temp_val__11904_12205,description__9152__auto___12203))
,false),speclj.components.new_characteristic.call(null,"finds moves with higher potential for winning",((function (_STAR_parent_description_STAR__orig_val__12197_12478,_STAR_parent_description_STAR__temp_val__12198_12479,description__9152__auto____$1,_STAR_parent_description_STAR__orig_val__11903_12204,_STAR_parent_description_STAR__temp_val__11904_12205,description__9152__auto___12203){
return (function (){
var expected__9289__auto___12484 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [(24),null,(6),null,(12),null,(18),null], null), null);
var actual__9290__auto___12485 = tic_tac_toe.ai.minimax.get_relevant_moves.call(null,new cljs.core.PersistentVector(null, 27, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),new cljs.core.Keyword(null,"x","x",2099068185),(3),(4),(5),(6),(7),(8),(9),(10),(11),(12),(13),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"o","o",-1350007228),(16),(17),(18),(19),(20),(21),(22),(23),(24),(25),(26),(27)], null),new cljs.core.Keyword(null,"o","o",-1350007228));
if(cljs.core._EQ_.call(null,expected__9289__auto___12484,actual__9290__auto___12485)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__9289__auto___12484;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9257__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9257__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__9290__auto___12485;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9257__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9257__auto__);
}
})()," (using =)"].join('')));
}

var expected__9289__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 18, [(7),null,(20),null,(27),null,(1),null,(21),null,(25),null,(17),null,(3),null,(12),null,(23),null,(19),null,(11),null,(9),null,(5),null,(16),null,(10),null,(18),null,(8),null], null), null);
var actual__9290__auto__ = tic_tac_toe.ai.minimax.get_relevant_moves.call(null,new cljs.core.PersistentVector(null, 27, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),new cljs.core.Keyword(null,"x","x",2099068185),(3),(4),(5),(6),(7),(8),(9),(10),(11),(12),(13),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"o","o",-1350007228),(16),(17),(18),(19),(20),(21),(22),(23),(24),(25),(26),(27)], null),new cljs.core.Keyword(null,"x","x",2099068185));
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
});})(_STAR_parent_description_STAR__orig_val__12197_12478,_STAR_parent_description_STAR__temp_val__12198_12479,description__9152__auto____$1,_STAR_parent_description_STAR__orig_val__11903_12204,_STAR_parent_description_STAR__temp_val__11904_12205,description__9152__auto___12203))
,false),speclj.components.new_characteristic.call(null,"finds next move",((function (_STAR_parent_description_STAR__orig_val__12197_12478,_STAR_parent_description_STAR__temp_val__12198_12479,description__9152__auto____$1,_STAR_parent_description_STAR__orig_val__11903_12204,_STAR_parent_description_STAR__temp_val__11904_12205,description__9152__auto___12203){
return (function (){
var expected__9289__auto___12486 = (7);
var actual__9290__auto___12487 = tic_tac_toe.ai.minimax.find_best_move_memo.call(null,new cljs.core.PersistentVector(null, 27, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(3),(4),new cljs.core.Keyword(null,"x","x",2099068185),(6),(7),(8),(9),(10),(11),(12),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"o","o",-1350007228),(15),(16),(17),(18),(19),(20),(21),(22),(23),(24),(25),(26),(27)], null),new cljs.core.Keyword(null,"o","o",-1350007228),false);
if(cljs.core._EQ_.call(null,expected__9289__auto___12486,actual__9290__auto___12487)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__9289__auto___12486;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9257__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9257__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__9290__auto___12487;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9257__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9257__auto__);
}
})()," (using =)"].join('')));
}

var expected__9289__auto___12488 = (1);
var actual__9290__auto___12489 = tic_tac_toe.ai.minimax.find_best_move_memo.call(null,new cljs.core.PersistentVector(null, 27, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(3),new cljs.core.Keyword(null,"x","x",2099068185),(5),(6),(7),(8),(9),(10),(11),(12),(13),new cljs.core.Keyword(null,"o","o",-1350007228),(15),new cljs.core.Keyword(null,"x","x",2099068185),(17),(18),(19),(20),(21),(22),(23),(24),(25),(26),(27)], null),new cljs.core.Keyword(null,"o","o",-1350007228),false);
if(cljs.core._EQ_.call(null,expected__9289__auto___12488,actual__9290__auto___12489)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__9289__auto___12488;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9257__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9257__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__9290__auto___12489;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9257__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9257__auto__);
}
})()," (using =)"].join('')));
}

var expected__9289__auto___12490 = (7);
var actual__9290__auto___12491 = tic_tac_toe.ai.minimax.find_best_move_memo.call(null,new cljs.core.PersistentVector(null, 27, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(3),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"o","o",-1350007228),new cljs.core.Keyword(null,"x","x",2099068185),(7),(8),(9),(10),(11),(12),(13),new cljs.core.Keyword(null,"o","o",-1350007228),(15),new cljs.core.Keyword(null,"x","x",2099068185),(17),(18),(19),(20),(21),new cljs.core.Keyword(null,"o","o",-1350007228),new cljs.core.Keyword(null,"x","x",2099068185),(24),(25),(26),(27)], null),new cljs.core.Keyword(null,"o","o",-1350007228),false);
if(cljs.core._EQ_.call(null,expected__9289__auto___12490,actual__9290__auto___12491)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__9289__auto___12490;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9257__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9257__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__9290__auto___12491;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9257__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9257__auto__);
}
})()," (using =)"].join('')));
}

var expected__9289__auto___12492 = (7);
var actual__9290__auto___12493 = tic_tac_toe.ai.minimax.find_best_move_memo.call(null,new cljs.core.PersistentVector(null, 27, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(3),(4),new cljs.core.Keyword(null,"x","x",2099068185),(6),(7),(8),(9),(10),(11),new cljs.core.Keyword(null,"x","x",2099068185),(13),new cljs.core.Keyword(null,"o","o",-1350007228),(15),(16),(17),(18),(19),(20),(21),(22),(23),(24),(25),(26),(27)], null),new cljs.core.Keyword(null,"o","o",-1350007228),false);
if(cljs.core._EQ_.call(null,expected__9289__auto___12492,actual__9290__auto___12493)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__9289__auto___12492;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9257__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9257__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__9290__auto___12493;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9257__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9257__auto__);
}
})()," (using =)"].join('')));
}

var expected__9289__auto___12494 = (24);
var actual__9290__auto___12495 = tic_tac_toe.ai.minimax.find_best_move_memo.call(null,new cljs.core.PersistentVector(null, 27, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),new cljs.core.Keyword(null,"x","x",2099068185),(4),(5),(6),(7),(8),(9),(10),(11),(12),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"o","o",-1350007228),new cljs.core.Keyword(null,"o","o",-1350007228),(16),(17),(18),(19),(20),(21),(22),(23),(24),(25),(26),new cljs.core.Keyword(null,"x","x",2099068185)], null),new cljs.core.Keyword(null,"o","o",-1350007228),false);
if(cljs.core._EQ_.call(null,expected__9289__auto___12494,actual__9290__auto___12495)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__9289__auto___12494;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9257__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9257__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__9290__auto___12495;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9257__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9257__auto__);
}
})()," (using =)"].join('')));
}

var expected__9289__auto___12496 = (7);
var actual__9290__auto___12497 = tic_tac_toe.ai.minimax.find_best_move_memo.call(null,new cljs.core.PersistentVector(null, 27, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(3),(4),(5),new cljs.core.Keyword(null,"x","x",2099068185),(7),(8),new cljs.core.Keyword(null,"o","o",-1350007228),(10),(11),(12),(13),new cljs.core.Keyword(null,"o","o",-1350007228),(15),(16),new cljs.core.Keyword(null,"x","x",2099068185),(18),new cljs.core.Keyword(null,"x","x",2099068185),(20),(21),new cljs.core.Keyword(null,"o","o",-1350007228),(23),(24),new cljs.core.Keyword(null,"x","x",2099068185),(26),(27)], null),new cljs.core.Keyword(null,"o","o",-1350007228),false);
if(cljs.core._EQ_.call(null,expected__9289__auto___12496,actual__9290__auto___12497)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__9289__auto___12496;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9257__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9257__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__9290__auto___12497;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9257__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9257__auto__);
}
})()," (using =)"].join('')));
}

var expected__9289__auto___12498 = (7);
var actual__9290__auto___12499 = tic_tac_toe.ai.minimax.find_best_move_memo.call(null,new cljs.core.PersistentVector(null, 27, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),(2),(3),(4),(5),(6),(7),(8),(9),(10),(11),(12),(13),new cljs.core.Keyword(null,"o","o",-1350007228),new cljs.core.Keyword(null,"x","x",2099068185),(16),(17),(18),(19),(20),(21),new cljs.core.Keyword(null,"x","x",2099068185),(23),(24),(25),(26),new cljs.core.Keyword(null,"o","o",-1350007228)], null),new cljs.core.Keyword(null,"o","o",-1350007228),false);
if(cljs.core._EQ_.call(null,expected__9289__auto___12498,actual__9290__auto___12499)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__9289__auto___12498;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9257__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9257__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__9290__auto___12499;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9257__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9257__auto__);
}
})()," (using =)"].join('')));
}

var expected__9289__auto___12500 = (25);
var actual__9290__auto___12501 = tic_tac_toe.ai.minimax.find_best_move_memo.call(null,new cljs.core.PersistentVector(null, 27, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(3),(4),(5),(6),(7),(8),(9),(10),(11),(12),(13),new cljs.core.Keyword(null,"o","o",-1350007228),new cljs.core.Keyword(null,"x","x",2099068185),(16),(17),(18),(19),(20),(21),new cljs.core.Keyword(null,"x","x",2099068185),(23),(24),(25),(26),(27)], null),new cljs.core.Keyword(null,"o","o",-1350007228),false);
if(cljs.core._EQ_.call(null,expected__9289__auto___12500,actual__9290__auto___12501)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__9289__auto___12500;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9257__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9257__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__9290__auto___12501;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9257__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9257__auto__);
}
})()," (using =)"].join('')));
}

var expected__9289__auto___12502 = (27);
var actual__9290__auto___12503 = tic_tac_toe.ai.minimax.find_best_move_memo.call(null,new cljs.core.PersistentVector(null, 27, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(3),(4),(5),(6),new cljs.core.Keyword(null,"x","x",2099068185),(8),(9),(10),(11),(12),(13),new cljs.core.Keyword(null,"o","o",-1350007228),(15),(16),(17),new cljs.core.Keyword(null,"x","x",2099068185),(19),(20),(21),(22),(23),(24),(25),(26),(27)], null),new cljs.core.Keyword(null,"o","o",-1350007228),false);
if(cljs.core._EQ_.call(null,expected__9289__auto___12502,actual__9290__auto___12503)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__9289__auto___12502;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9257__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9257__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__9290__auto___12503;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9257__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9257__auto__);
}
})()," (using =)"].join('')));
}

var expected__9289__auto___12504 = (19);
var actual__9290__auto___12505 = tic_tac_toe.ai.minimax.find_best_move_memo.call(null,new cljs.core.PersistentVector(null, 27, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(3),(4),(5),(6),(7),new cljs.core.Keyword(null,"x","x",2099068185),(9),(10),new cljs.core.Keyword(null,"x","x",2099068185),(12),(13),new cljs.core.Keyword(null,"o","o",-1350007228),(15),(16),new cljs.core.Keyword(null,"o","o",-1350007228),(18),(19),new cljs.core.Keyword(null,"o","o",-1350007228),(21),(22),new cljs.core.Keyword(null,"x","x",2099068185),(24),(25),new cljs.core.Keyword(null,"x","x",2099068185),(27)], null),new cljs.core.Keyword(null,"o","o",-1350007228),false);
if(cljs.core._EQ_.call(null,expected__9289__auto___12504,actual__9290__auto___12505)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__9289__auto___12504;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9257__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9257__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__9290__auto___12505;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9257__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9257__auto__);
}
})()," (using =)"].join('')));
}

var expected__9289__auto___12506 = (7);
var actual__9290__auto___12507 = tic_tac_toe.ai.minimax.find_best_move_memo.call(null,new cljs.core.PersistentVector(null, 27, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"o","o",-1350007228),new cljs.core.Keyword(null,"x","x",2099068185),(3),(4),(5),(6),(7),(8),(9),(10),(11),(12),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"o","o",-1350007228),(15),(16),(17),(18),(19),(20),(21),(22),(23),(24),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"o","o",-1350007228),new cljs.core.Keyword(null,"x","x",2099068185)], null),new cljs.core.Keyword(null,"o","o",-1350007228),false);
if(cljs.core._EQ_.call(null,expected__9289__auto___12506,actual__9290__auto___12507)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__9289__auto___12506;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9257__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9257__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__9290__auto___12507;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9257__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9257__auto__);
}
})()," (using =)"].join('')));
}

var expected__9289__auto___12508 = (7);
var actual__9290__auto___12509 = tic_tac_toe.ai.minimax.find_best_move_memo.call(null,new cljs.core.PersistentVector(null, 27, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),new cljs.core.Keyword(null,"x","x",2099068185),(4),(5),(6),(7),(8),(9),(10),(11),(12),(13),new cljs.core.Keyword(null,"o","o",-1350007228),(15),(16),(17),new cljs.core.Keyword(null,"x","x",2099068185),(19),(20),(21),(22),(23),(24),(25),(26),(27)], null),new cljs.core.Keyword(null,"o","o",-1350007228),false);
if(cljs.core._EQ_.call(null,expected__9289__auto___12508,actual__9290__auto___12509)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__9289__auto___12508;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9257__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9257__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__9290__auto___12509;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9257__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9257__auto__);
}
})()," (using =)"].join('')));
}

var expected__9289__auto___12510 = (20);
var actual__9290__auto___12511 = tic_tac_toe.ai.minimax.find_best_move_memo.call(null,new cljs.core.PersistentVector(null, 27, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),new cljs.core.Keyword(null,"x","x",2099068185),(4),(5),new cljs.core.Keyword(null,"o","o",-1350007228),(7),(8),new cljs.core.Keyword(null,"x","x",2099068185),(10),new cljs.core.Keyword(null,"x","x",2099068185),(12),(13),new cljs.core.Keyword(null,"o","o",-1350007228),(15),(16),(17),(18),new cljs.core.Keyword(null,"o","o",-1350007228),(20),(21),new cljs.core.Keyword(null,"x","x",2099068185),(23),(24),(25),(26),(27)], null),new cljs.core.Keyword(null,"o","o",-1350007228),false);
if(cljs.core._EQ_.call(null,expected__9289__auto___12510,actual__9290__auto___12511)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__9289__auto___12510;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9257__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9257__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__9290__auto___12511;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9257__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9257__auto__);
}
})()," (using =)"].join('')));
}

var expected__9289__auto___12512 = (21);
var actual__9290__auto___12513 = tic_tac_toe.ai.minimax.find_best_move_memo.call(null,new cljs.core.PersistentVector(null, 27, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"o","o",-1350007228),new cljs.core.Keyword(null,"x","x",2099068185),(4),(5),(6),(7),(8),(9),(10),(11),(12),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"o","o",-1350007228),(15),(16),(17),(18),(19),(20),(21),(22),(23),(24),new cljs.core.Keyword(null,"o","o",-1350007228),new cljs.core.Keyword(null,"x","x",2099068185),(27)], null),new cljs.core.Keyword(null,"o","o",-1350007228),false);
if(cljs.core._EQ_.call(null,expected__9289__auto___12512,actual__9290__auto___12513)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__9289__auto___12512;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9257__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9257__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__9290__auto___12513;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9257__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9257__auto__);
}
})()," (using =)"].join('')));
}

var expected__9289__auto___12514 = (23);
var actual__9290__auto___12515 = tic_tac_toe.ai.minimax.find_best_move_memo.call(null,new cljs.core.PersistentVector(null, 27, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(3),(4),(5),(6),(7),(8),(9),(10),(11),(12),(13),new cljs.core.Keyword(null,"x","x",2099068185),(15),(16),(17),(18),(19),(20),(21),(22),(23),(24),(25),(26),(27)], null),new cljs.core.Keyword(null,"o","o",-1350007228),false);
if(cljs.core._EQ_.call(null,expected__9289__auto___12514,actual__9290__auto___12515)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__9289__auto___12514;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9257__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9257__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__9290__auto___12515;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9257__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9257__auto__);
}
})()," (using =)"].join('')));
}

var expected__9289__auto__ = (3);
var actual__9290__auto__ = tic_tac_toe.ai.minimax.find_best_move_memo.call(null,new cljs.core.PersistentVector(null, 27, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),(2),(3),new cljs.core.Keyword(null,"x","x",2099068185),(5),(6),new cljs.core.Keyword(null,"o","o",-1350007228),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"o","o",-1350007228),new cljs.core.Keyword(null,"o","o",-1350007228),(11),(12),(13),new cljs.core.Keyword(null,"x","x",2099068185),(15),(16),(17),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"x","x",2099068185),(20),(21),(22),new cljs.core.Keyword(null,"o","o",-1350007228),(24),(25),(26),new cljs.core.Keyword(null,"o","o",-1350007228)], null),new cljs.core.Keyword(null,"o","o",-1350007228),false);
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
});})(_STAR_parent_description_STAR__orig_val__12197_12478,_STAR_parent_description_STAR__temp_val__12198_12479,description__9152__auto____$1,_STAR_parent_description_STAR__orig_val__11903_12204,_STAR_parent_description_STAR__temp_val__11904_12205,description__9152__auto___12203))
,false)],null)));
var chunk__12200_12481 = null;
var count__12201_12482 = (0);
var i__12202_12483 = (0);
while(true){
if((i__12202_12483 < count__12201_12482)){
var component__9153__auto___12516 = cljs.core._nth.call(null,chunk__12200_12481,i__12202_12483);
speclj.components.install.call(null,component__9153__auto___12516,description__9152__auto____$1);


var G__12517 = seq__12199_12480;
var G__12518 = chunk__12200_12481;
var G__12519 = count__12201_12482;
var G__12520 = (i__12202_12483 + (1));
seq__12199_12480 = G__12517;
chunk__12200_12481 = G__12518;
count__12201_12482 = G__12519;
i__12202_12483 = G__12520;
continue;
} else {
var temp__5804__auto___12521 = cljs.core.seq.call(null,seq__12199_12480);
if(temp__5804__auto___12521){
var seq__12199_12522__$1 = temp__5804__auto___12521;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12199_12522__$1)){
var c__5525__auto___12523 = cljs.core.chunk_first.call(null,seq__12199_12522__$1);
var G__12524 = cljs.core.chunk_rest.call(null,seq__12199_12522__$1);
var G__12525 = c__5525__auto___12523;
var G__12526 = cljs.core.count.call(null,c__5525__auto___12523);
var G__12527 = (0);
seq__12199_12480 = G__12524;
chunk__12200_12481 = G__12525;
count__12201_12482 = G__12526;
i__12202_12483 = G__12527;
continue;
} else {
var component__9153__auto___12528 = cljs.core.first.call(null,seq__12199_12522__$1);
speclj.components.install.call(null,component__9153__auto___12528,description__9152__auto____$1);


var G__12529 = cljs.core.next.call(null,seq__12199_12522__$1);
var G__12530 = null;
var G__12531 = (0);
var G__12532 = (0);
seq__12199_12480 = G__12529;
chunk__12200_12481 = G__12530;
count__12201_12482 = G__12531;
i__12202_12483 = G__12532;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__12197_12478);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__9152__auto____$1);
}

return description__9152__auto____$1;
})()],null)));
var chunk__11906_12207 = null;
var count__11907_12208 = (0);
var i__11908_12209 = (0);
while(true){
if((i__11908_12209 < count__11907_12208)){
var component__9153__auto___12533 = cljs.core._nth.call(null,chunk__11906_12207,i__11908_12209);
speclj.components.install.call(null,component__9153__auto___12533,description__9152__auto___12203);


var G__12534 = seq__11905_12206;
var G__12535 = chunk__11906_12207;
var G__12536 = count__11907_12208;
var G__12537 = (i__11908_12209 + (1));
seq__11905_12206 = G__12534;
chunk__11906_12207 = G__12535;
count__11907_12208 = G__12536;
i__11908_12209 = G__12537;
continue;
} else {
var temp__5804__auto___12538 = cljs.core.seq.call(null,seq__11905_12206);
if(temp__5804__auto___12538){
var seq__11905_12539__$1 = temp__5804__auto___12538;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11905_12539__$1)){
var c__5525__auto___12540 = cljs.core.chunk_first.call(null,seq__11905_12539__$1);
var G__12541 = cljs.core.chunk_rest.call(null,seq__11905_12539__$1);
var G__12542 = c__5525__auto___12540;
var G__12543 = cljs.core.count.call(null,c__5525__auto___12540);
var G__12544 = (0);
seq__11905_12206 = G__12541;
chunk__11906_12207 = G__12542;
count__11907_12208 = G__12543;
i__11908_12209 = G__12544;
continue;
} else {
var component__9153__auto___12545 = cljs.core.first.call(null,seq__11905_12539__$1);
speclj.components.install.call(null,component__9153__auto___12545,description__9152__auto___12203);


var G__12546 = cljs.core.next.call(null,seq__11905_12539__$1);
var G__12547 = null;
var G__12548 = (0);
var G__12549 = (0);
seq__11905_12206 = G__12546;
chunk__11906_12207 = G__12547;
count__11907_12208 = G__12548;
i__11908_12209 = G__12549;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__11903_12204);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__9152__auto___12203);
}


//# sourceMappingURL=minimax_spec.js.map
