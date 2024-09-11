// Compiled by ClojureScript 1.11.132 {:optimizations :none}
goog.provide('tic_tac_toe.ai.minimax_spec');
goog.require('cljs.core');
goog.require('speclj.core');
goog.require('tic_tac_toe.ai.minimax');
goog.require('tic_tac_toe.ai.minimax_test_fns');
goog.require('tic_tac_toe.print_utils');
var description__20276__auto___22053 = speclj.components.new_description.call(null,"computer opponent - is maximizer",false,"tic-tac-toe.ai.minimax-spec");
var _STAR_parent_description_STAR__orig_val__20925_22054 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__20926_22055 = description__20276__auto___22053;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__20926_22055);

try{var seq__20927_22056 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,7,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_around.call(null,((function (_STAR_parent_description_STAR__orig_val__20925_22054,_STAR_parent_description_STAR__temp_val__20926_22055,description__20276__auto___22053){
return (function (it__20646__auto__){
var _STAR_stubbed_invocations_STAR__orig_val__21772 = speclj.stub._STAR_stubbed_invocations_STAR_;
var _STAR_stubbed_invocations_STAR__temp_val__21773 = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
(speclj.stub._STAR_stubbed_invocations_STAR_ = _STAR_stubbed_invocations_STAR__temp_val__21773);

try{return it__20646__auto__.call(null);
}finally {(speclj.stub._STAR_stubbed_invocations_STAR_ = _STAR_stubbed_invocations_STAR__orig_val__21772);
}});})(_STAR_parent_description_STAR__orig_val__20925_22054,_STAR_parent_description_STAR__temp_val__20926_22055,description__20276__auto___22053))
),speclj.components.new_around.call(null,((function (_STAR_parent_description_STAR__orig_val__20925_22054,_STAR_parent_description_STAR__temp_val__20926_22055,description__20276__auto___22053){
return (function (it__20338__auto__){
var display_bot_thinking_message_orig_val__21778 = tic_tac_toe.print_utils.display_bot_thinking_message;
var display_bot_thinking_message_temp_val__21779 = speclj.stub.stub.call(null,new cljs.core.Keyword(null,"thinking","thinking",2063777387),cljs.core.PersistentArrayMap.EMPTY);
(tic_tac_toe.print_utils.display_bot_thinking_message = display_bot_thinking_message_temp_val__21779);

try{return it__20338__auto__.call(null);
}finally {(tic_tac_toe.print_utils.display_bot_thinking_message = display_bot_thinking_message_orig_val__21778);
}});})(_STAR_parent_description_STAR__orig_val__20925_22054,_STAR_parent_description_STAR__temp_val__20926_22055,description__20276__auto___22053))
),(function (){var description__20276__auto____$1 = speclj.components.new_description.call(null,"prove unbeatable",false,"tic-tac-toe.ai.minimax-spec");
var _STAR_parent_description_STAR__orig_val__21782_22060 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__21783_22061 = description__20276__auto____$1;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__21783_22061);

try{var seq__21784_22062 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.mapv.call(null,speclj.components.new_tag,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"slow","slow",120317203)], null)),speclj.components.new_characteristic.call(null,"wins or ties every possible game against human player",((function (_STAR_parent_description_STAR__orig_val__21782_22060,_STAR_parent_description_STAR__temp_val__21783_22061,description__20276__auto____$1,_STAR_parent_description_STAR__orig_val__20925_22054,_STAR_parent_description_STAR__temp_val__20926_22055,description__20276__auto___22053){
return (function (){
var expected__20413__auto__ = true;
var actual__20414__auto__ = tic_tac_toe.ai.minimax_test_fns.unbeatable_QMARK_.call(null,cljs.core.range.call(null,(1),(10)));
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
});})(_STAR_parent_description_STAR__orig_val__21782_22060,_STAR_parent_description_STAR__temp_val__21783_22061,description__20276__auto____$1,_STAR_parent_description_STAR__orig_val__20925_22054,_STAR_parent_description_STAR__temp_val__20926_22055,description__20276__auto___22053))
,false),speclj.components.new_characteristic.call(null,"minimax vs minimax always ties",((function (_STAR_parent_description_STAR__orig_val__21782_22060,_STAR_parent_description_STAR__temp_val__21783_22061,description__20276__auto____$1,_STAR_parent_description_STAR__orig_val__20925_22054,_STAR_parent_description_STAR__temp_val__20926_22055,description__20276__auto___22053){
return (function (){
var expected__20413__auto___22066 = true;
var actual__20414__auto___22067 = tic_tac_toe.ai.minimax_test_fns.always_ties_QMARK_.call(null,cljs.core.range.call(null,(1),(10)));
if(cljs.core._EQ_.call(null,expected__20413__auto___22066,actual__20414__auto___22067)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__20413__auto___22066;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__20381__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__20381__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__20414__auto___22067;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__20381__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__20381__auto__);
}
})()," (using =)"].join('')));
}

var expected__20413__auto__ = true;
var actual__20414__auto__ = tic_tac_toe.ai.minimax_test_fns.always_ties_QMARK_.call(null,cljs.core.range.call(null,(1),(17)));
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
});})(_STAR_parent_description_STAR__orig_val__21782_22060,_STAR_parent_description_STAR__temp_val__21783_22061,description__20276__auto____$1,_STAR_parent_description_STAR__orig_val__20925_22054,_STAR_parent_description_STAR__temp_val__20926_22055,description__20276__auto___22053))
,false)],null)));
var chunk__21785_22063 = null;
var count__21786_22064 = (0);
var i__21787_22065 = (0);
while(true){
if((i__21787_22065 < count__21786_22064)){
var component__20277__auto___22068 = cljs.core._nth.call(null,chunk__21785_22063,i__21787_22065);
speclj.components.install.call(null,component__20277__auto___22068,description__20276__auto____$1);


var G__22069 = seq__21784_22062;
var G__22070 = chunk__21785_22063;
var G__22071 = count__21786_22064;
var G__22072 = (i__21787_22065 + (1));
seq__21784_22062 = G__22069;
chunk__21785_22063 = G__22070;
count__21786_22064 = G__22071;
i__21787_22065 = G__22072;
continue;
} else {
var temp__5804__auto___22073 = cljs.core.seq.call(null,seq__21784_22062);
if(temp__5804__auto___22073){
var seq__21784_22074__$1 = temp__5804__auto___22073;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21784_22074__$1)){
var c__5525__auto___22075 = cljs.core.chunk_first.call(null,seq__21784_22074__$1);
var G__22076 = cljs.core.chunk_rest.call(null,seq__21784_22074__$1);
var G__22077 = c__5525__auto___22075;
var G__22078 = cljs.core.count.call(null,c__5525__auto___22075);
var G__22079 = (0);
seq__21784_22062 = G__22076;
chunk__21785_22063 = G__22077;
count__21786_22064 = G__22078;
i__21787_22065 = G__22079;
continue;
} else {
var component__20277__auto___22080 = cljs.core.first.call(null,seq__21784_22074__$1);
speclj.components.install.call(null,component__20277__auto___22080,description__20276__auto____$1);


var G__22081 = cljs.core.next.call(null,seq__21784_22074__$1);
var G__22082 = null;
var G__22083 = (0);
var G__22084 = (0);
seq__21784_22062 = G__22081;
chunk__21785_22063 = G__22082;
count__21786_22064 = G__22083;
i__21787_22065 = G__22084;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__21782_22060);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__20276__auto____$1);
}

return description__20276__auto____$1;
})(),(function (){var description__20276__auto____$1 = speclj.components.new_description.call(null,"plays as O",false,"tic-tac-toe.ai.minimax-spec");
var _STAR_parent_description_STAR__orig_val__21814_22085 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__21815_22086 = description__20276__auto____$1;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__21815_22086);

try{var seq__21816_22087 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_characteristic.call(null,"finds move if next move is a win",((function (_STAR_parent_description_STAR__orig_val__21814_22085,_STAR_parent_description_STAR__temp_val__21815_22086,description__20276__auto____$1,_STAR_parent_description_STAR__orig_val__20925_22054,_STAR_parent_description_STAR__temp_val__20926_22055,description__20276__auto___22053){
return (function (){
var expected__20413__auto___22091 = (2);
var actual__20414__auto___22092 = tic_tac_toe.ai.minimax.find_best_move_memo.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"o","o",-1350007228),(2),new cljs.core.Keyword(null,"o","o",-1350007228),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"o","o",-1350007228),new cljs.core.Keyword(null,"x","x",2099068185),(8),new cljs.core.Keyword(null,"x","x",2099068185)], null),new cljs.core.Keyword(null,"o","o",-1350007228),false);
if(cljs.core._EQ_.call(null,expected__20413__auto___22091,actual__20414__auto___22092)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__20413__auto___22091;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__20381__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__20381__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__20414__auto___22092;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__20381__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__20381__auto__);
}
})()," (using =)"].join('')));
}

var expected__20413__auto___22093 = (2);
var actual__20414__auto___22094 = tic_tac_toe.ai.minimax.find_best_move_memo.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"o","o",-1350007228),(2),new cljs.core.Keyword(null,"o","o",-1350007228),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"x","x",2099068185),(6),new cljs.core.Keyword(null,"x","x",2099068185),(8),(9)], null),new cljs.core.Keyword(null,"o","o",-1350007228),false);
if(cljs.core._EQ_.call(null,expected__20413__auto___22093,actual__20414__auto___22094)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__20413__auto___22093;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__20381__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__20381__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__20414__auto___22094;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__20381__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__20381__auto__);
}
})()," (using =)"].join('')));
}

var expected__20413__auto___22095 = (4);
var actual__20414__auto___22096 = tic_tac_toe.ai.minimax.find_best_move_memo.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"x","x",2099068185),(4),new cljs.core.Keyword(null,"o","o",-1350007228),new cljs.core.Keyword(null,"o","o",-1350007228),new cljs.core.Keyword(null,"o","o",-1350007228),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"x","x",2099068185)], null),new cljs.core.Keyword(null,"o","o",-1350007228),false);
if(cljs.core._EQ_.call(null,expected__20413__auto___22095,actual__20414__auto___22096)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__20413__auto___22095;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__20381__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__20381__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__20414__auto___22096;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__20381__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__20381__auto__);
}
})()," (using =)"].join('')));
}

var expected__20413__auto__ = (3);
var actual__20414__auto__ = tic_tac_toe.ai.minimax.find_best_move_memo.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(3),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"o","o",-1350007228),(7),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"o","o",-1350007228)], null),new cljs.core.Keyword(null,"o","o",-1350007228),false);
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
});})(_STAR_parent_description_STAR__orig_val__21814_22085,_STAR_parent_description_STAR__temp_val__21815_22086,description__20276__auto____$1,_STAR_parent_description_STAR__orig_val__20925_22054,_STAR_parent_description_STAR__temp_val__20926_22055,description__20276__auto___22053))
,false),speclj.components.new_characteristic.call(null,"finds move if next move is a block",((function (_STAR_parent_description_STAR__orig_val__21814_22085,_STAR_parent_description_STAR__temp_val__21815_22086,description__20276__auto____$1,_STAR_parent_description_STAR__orig_val__20925_22054,_STAR_parent_description_STAR__temp_val__20926_22055,description__20276__auto___22053){
return (function (){
var expected__20413__auto___22097 = (4);
var actual__20414__auto___22098 = tic_tac_toe.ai.minimax.find_best_move_memo.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),new cljs.core.Keyword(null,"o","o",-1350007228),(4),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"x","x",2099068185),(7),(8),(9)], null),new cljs.core.Keyword(null,"o","o",-1350007228),false);
if(cljs.core._EQ_.call(null,expected__20413__auto___22097,actual__20414__auto___22098)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__20413__auto___22097;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__20381__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__20381__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__20414__auto___22098;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__20381__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__20381__auto__);
}
})()," (using =)"].join('')));
}

var expected__20413__auto___22099 = (1);
var actual__20414__auto___22100 = tic_tac_toe.ai.minimax.find_best_move_memo.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),new cljs.core.Keyword(null,"o","o",-1350007228),(4),new cljs.core.Keyword(null,"x","x",2099068185),(6),(7),(8),new cljs.core.Keyword(null,"x","x",2099068185)], null),new cljs.core.Keyword(null,"o","o",-1350007228),false);
if(cljs.core._EQ_.call(null,expected__20413__auto___22099,actual__20414__auto___22100)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__20413__auto___22099;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__20381__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__20381__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__20414__auto___22100;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__20381__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__20381__auto__);
}
})()," (using =)"].join('')));
}

var expected__20413__auto___22101 = (9);
var actual__20414__auto___22102 = tic_tac_toe.ai.minimax.find_best_move_memo.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"o","o",-1350007228),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"o","o",-1350007228),new cljs.core.Keyword(null,"o","o",-1350007228),new cljs.core.Keyword(null,"x","x",2099068185),(7),new cljs.core.Keyword(null,"x","x",2099068185),(9)], null),new cljs.core.Keyword(null,"o","o",-1350007228),false);
if(cljs.core._EQ_.call(null,expected__20413__auto___22101,actual__20414__auto___22102)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__20413__auto___22101;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__20381__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__20381__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__20414__auto___22102;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__20381__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__20381__auto__);
}
})()," (using =)"].join('')));
}

var expected__20413__auto__ = (4);
var actual__20414__auto__ = tic_tac_toe.ai.minimax.find_best_move_memo.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"o","o",-1350007228),new cljs.core.Keyword(null,"x","x",2099068185),(4),new cljs.core.Keyword(null,"o","o",-1350007228),(6),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"o","o",-1350007228)], null),new cljs.core.Keyword(null,"o","o",-1350007228),false);
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
});})(_STAR_parent_description_STAR__orig_val__21814_22085,_STAR_parent_description_STAR__temp_val__21815_22086,description__20276__auto____$1,_STAR_parent_description_STAR__orig_val__20925_22054,_STAR_parent_description_STAR__temp_val__20926_22055,description__20276__auto___22053))
,false),(function (){var description__20276__auto____$2 = speclj.components.new_description.call(null,"slow",false,"tic-tac-toe.ai.minimax-spec");
var _STAR_parent_description_STAR__orig_val__21877_22103 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__21878_22104 = description__20276__auto____$2;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__21878_22104);

try{var seq__21879_22105 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.mapv.call(null,speclj.components.new_tag,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"slow","slow",120317203)], null)),speclj.components.new_characteristic.call(null,"finds move with most potential to win if not blocked",((function (_STAR_parent_description_STAR__orig_val__21877_22103,_STAR_parent_description_STAR__temp_val__21878_22104,description__20276__auto____$2,_STAR_parent_description_STAR__orig_val__21814_22085,_STAR_parent_description_STAR__temp_val__21815_22086,description__20276__auto____$1,_STAR_parent_description_STAR__orig_val__20925_22054,_STAR_parent_description_STAR__temp_val__20926_22055,description__20276__auto___22053){
return (function (){
var expected__20413__auto__ = (5);
var actual__20414__auto__ = tic_tac_toe.ai.minimax.find_best_move_memo.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"o","o",-1350007228),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"o","o",-1350007228),new cljs.core.Keyword(null,"x","x",2099068185),(5),(6),(7),(8),new cljs.core.Keyword(null,"x","x",2099068185)], null),new cljs.core.Keyword(null,"o","o",-1350007228),false);
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
});})(_STAR_parent_description_STAR__orig_val__21877_22103,_STAR_parent_description_STAR__temp_val__21878_22104,description__20276__auto____$2,_STAR_parent_description_STAR__orig_val__21814_22085,_STAR_parent_description_STAR__temp_val__21815_22086,description__20276__auto____$1,_STAR_parent_description_STAR__orig_val__20925_22054,_STAR_parent_description_STAR__temp_val__20926_22055,description__20276__auto___22053))
,false),speclj.components.new_characteristic.call(null,"plays center if first move is a corner",((function (_STAR_parent_description_STAR__orig_val__21877_22103,_STAR_parent_description_STAR__temp_val__21878_22104,description__20276__auto____$2,_STAR_parent_description_STAR__orig_val__21814_22085,_STAR_parent_description_STAR__temp_val__21815_22086,description__20276__auto____$1,_STAR_parent_description_STAR__orig_val__20925_22054,_STAR_parent_description_STAR__temp_val__20926_22055,description__20276__auto___22053){
return (function (){
var expected__20413__auto___22115 = (5);
var actual__20414__auto___22116 = tic_tac_toe.ai.minimax.find_best_move_memo.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),(2),(3),(4),(5),(6),(7),(8),(9)], null),new cljs.core.Keyword(null,"o","o",-1350007228),false);
if(cljs.core._EQ_.call(null,expected__20413__auto___22115,actual__20414__auto___22116)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__20413__auto___22115;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__20381__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__20381__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__20414__auto___22116;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__20381__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__20381__auto__);
}
})()," (using =)"].join('')));
}

var expected__20413__auto___22117 = (5);
var actual__20414__auto___22118 = tic_tac_toe.ai.minimax.find_best_move_memo.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),new cljs.core.Keyword(null,"x","x",2099068185),(4),(5),(6),(7),(8),(9)], null),new cljs.core.Keyword(null,"o","o",-1350007228),false);
if(cljs.core._EQ_.call(null,expected__20413__auto___22117,actual__20414__auto___22118)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__20413__auto___22117;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__20381__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__20381__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__20414__auto___22118;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__20381__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__20381__auto__);
}
})()," (using =)"].join('')));
}

var expected__20413__auto___22119 = (5);
var actual__20414__auto___22120 = tic_tac_toe.ai.minimax.find_best_move_memo.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(3),(4),(5),(6),new cljs.core.Keyword(null,"x","x",2099068185),(8),(9)], null),new cljs.core.Keyword(null,"o","o",-1350007228),false);
if(cljs.core._EQ_.call(null,expected__20413__auto___22119,actual__20414__auto___22120)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__20413__auto___22119;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__20381__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__20381__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__20414__auto___22120;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__20381__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__20381__auto__);
}
})()," (using =)"].join('')));
}

var expected__20413__auto__ = (5);
var actual__20414__auto__ = tic_tac_toe.ai.minimax.find_best_move_memo.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(3),(4),(5),(6),(7),(8),new cljs.core.Keyword(null,"x","x",2099068185)], null),new cljs.core.Keyword(null,"o","o",-1350007228),false);
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
});})(_STAR_parent_description_STAR__orig_val__21877_22103,_STAR_parent_description_STAR__temp_val__21878_22104,description__20276__auto____$2,_STAR_parent_description_STAR__orig_val__21814_22085,_STAR_parent_description_STAR__temp_val__21815_22086,description__20276__auto____$1,_STAR_parent_description_STAR__orig_val__20925_22054,_STAR_parent_description_STAR__temp_val__20926_22055,description__20276__auto___22053))
,false)],null)));
var chunk__21880_22106 = null;
var count__21881_22107 = (0);
var i__21882_22108 = (0);
while(true){
if((i__21882_22108 < count__21881_22107)){
var component__20277__auto___22121 = cljs.core._nth.call(null,chunk__21880_22106,i__21882_22108);
speclj.components.install.call(null,component__20277__auto___22121,description__20276__auto____$2);


var G__22122 = seq__21879_22105;
var G__22123 = chunk__21880_22106;
var G__22124 = count__21881_22107;
var G__22125 = (i__21882_22108 + (1));
seq__21879_22105 = G__22122;
chunk__21880_22106 = G__22123;
count__21881_22107 = G__22124;
i__21882_22108 = G__22125;
continue;
} else {
var temp__5804__auto___22126 = cljs.core.seq.call(null,seq__21879_22105);
if(temp__5804__auto___22126){
var seq__21879_22127__$1 = temp__5804__auto___22126;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21879_22127__$1)){
var c__5525__auto___22128 = cljs.core.chunk_first.call(null,seq__21879_22127__$1);
var G__22129 = cljs.core.chunk_rest.call(null,seq__21879_22127__$1);
var G__22130 = c__5525__auto___22128;
var G__22131 = cljs.core.count.call(null,c__5525__auto___22128);
var G__22132 = (0);
seq__21879_22105 = G__22129;
chunk__21880_22106 = G__22130;
count__21881_22107 = G__22131;
i__21882_22108 = G__22132;
continue;
} else {
var component__20277__auto___22133 = cljs.core.first.call(null,seq__21879_22127__$1);
speclj.components.install.call(null,component__20277__auto___22133,description__20276__auto____$2);


var G__22134 = cljs.core.next.call(null,seq__21879_22127__$1);
var G__22135 = null;
var G__22136 = (0);
var G__22137 = (0);
seq__21879_22105 = G__22134;
chunk__21880_22106 = G__22135;
count__21881_22107 = G__22136;
i__21882_22108 = G__22137;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__21877_22103);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__20276__auto____$2);
}

return description__20276__auto____$2;
})()],null)));
var chunk__21817_22088 = null;
var count__21818_22089 = (0);
var i__21819_22090 = (0);
while(true){
if((i__21819_22090 < count__21818_22089)){
var component__20277__auto___22138 = cljs.core._nth.call(null,chunk__21817_22088,i__21819_22090);
speclj.components.install.call(null,component__20277__auto___22138,description__20276__auto____$1);


var G__22139 = seq__21816_22087;
var G__22140 = chunk__21817_22088;
var G__22141 = count__21818_22089;
var G__22142 = (i__21819_22090 + (1));
seq__21816_22087 = G__22139;
chunk__21817_22088 = G__22140;
count__21818_22089 = G__22141;
i__21819_22090 = G__22142;
continue;
} else {
var temp__5804__auto___22143 = cljs.core.seq.call(null,seq__21816_22087);
if(temp__5804__auto___22143){
var seq__21816_22144__$1 = temp__5804__auto___22143;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21816_22144__$1)){
var c__5525__auto___22145 = cljs.core.chunk_first.call(null,seq__21816_22144__$1);
var G__22146 = cljs.core.chunk_rest.call(null,seq__21816_22144__$1);
var G__22147 = c__5525__auto___22145;
var G__22148 = cljs.core.count.call(null,c__5525__auto___22145);
var G__22149 = (0);
seq__21816_22087 = G__22146;
chunk__21817_22088 = G__22147;
count__21818_22089 = G__22148;
i__21819_22090 = G__22149;
continue;
} else {
var component__20277__auto___22150 = cljs.core.first.call(null,seq__21816_22144__$1);
speclj.components.install.call(null,component__20277__auto___22150,description__20276__auto____$1);


var G__22151 = cljs.core.next.call(null,seq__21816_22144__$1);
var G__22152 = null;
var G__22153 = (0);
var G__22154 = (0);
seq__21816_22087 = G__22151;
chunk__21817_22088 = G__22152;
count__21818_22089 = G__22153;
i__21819_22090 = G__22154;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__21814_22085);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__20276__auto____$1);
}

return description__20276__auto____$1;
})(),(function (){var description__20276__auto____$1 = speclj.components.new_description.call(null,"plays as X",false,"tic-tac-toe.ai.minimax-spec");
var _STAR_parent_description_STAR__orig_val__21889_22155 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__21890_22156 = description__20276__auto____$1;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__21890_22156);

try{var seq__21891_22157 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_characteristic.call(null,"finds move if next move is a win",((function (_STAR_parent_description_STAR__orig_val__21889_22155,_STAR_parent_description_STAR__temp_val__21890_22156,description__20276__auto____$1,_STAR_parent_description_STAR__orig_val__20925_22054,_STAR_parent_description_STAR__temp_val__20926_22055,description__20276__auto___22053){
return (function (){
var expected__20413__auto___22161 = (2);
var actual__20414__auto___22162 = tic_tac_toe.ai.minimax.find_best_move_memo.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),(2),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"o","o",-1350007228),new cljs.core.Keyword(null,"o","o",-1350007228),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"o","o",-1350007228),(8),new cljs.core.Keyword(null,"o","o",-1350007228)], null),new cljs.core.Keyword(null,"x","x",2099068185),false);
if(cljs.core._EQ_.call(null,expected__20413__auto___22161,actual__20414__auto___22162)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__20413__auto___22161;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__20381__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__20381__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__20414__auto___22162;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__20381__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__20381__auto__);
}
})()," (using =)"].join('')));
}

var expected__20413__auto___22163 = (2);
var actual__20414__auto___22164 = tic_tac_toe.ai.minimax.find_best_move_memo.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),(2),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"o","o",-1350007228),new cljs.core.Keyword(null,"o","o",-1350007228),(6),new cljs.core.Keyword(null,"o","o",-1350007228),(8),(9)], null),new cljs.core.Keyword(null,"x","x",2099068185),false);
if(cljs.core._EQ_.call(null,expected__20413__auto___22163,actual__20414__auto___22164)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__20413__auto___22163;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__20381__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__20381__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__20414__auto___22164;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__20381__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__20381__auto__);
}
})()," (using =)"].join('')));
}

var expected__20413__auto___22165 = (4);
var actual__20414__auto___22166 = tic_tac_toe.ai.minimax.find_best_move_memo.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),new cljs.core.Keyword(null,"o","o",-1350007228),new cljs.core.Keyword(null,"o","o",-1350007228),(4),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"o","o",-1350007228),new cljs.core.Keyword(null,"o","o",-1350007228)], null),new cljs.core.Keyword(null,"x","x",2099068185),false);
if(cljs.core._EQ_.call(null,expected__20413__auto___22165,actual__20414__auto___22166)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__20413__auto___22165;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__20381__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__20381__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__20414__auto___22166;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__20381__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__20381__auto__);
}
})()," (using =)"].join('')));
}

var expected__20413__auto__ = (3);
var actual__20414__auto__ = tic_tac_toe.ai.minimax.find_best_move_memo.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(3),new cljs.core.Keyword(null,"o","o",-1350007228),new cljs.core.Keyword(null,"o","o",-1350007228),new cljs.core.Keyword(null,"x","x",2099068185),(7),new cljs.core.Keyword(null,"o","o",-1350007228),new cljs.core.Keyword(null,"x","x",2099068185)], null),new cljs.core.Keyword(null,"x","x",2099068185),false);
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
});})(_STAR_parent_description_STAR__orig_val__21889_22155,_STAR_parent_description_STAR__temp_val__21890_22156,description__20276__auto____$1,_STAR_parent_description_STAR__orig_val__20925_22054,_STAR_parent_description_STAR__temp_val__20926_22055,description__20276__auto___22053))
,false),speclj.components.new_characteristic.call(null,"finds move if next move is a block",((function (_STAR_parent_description_STAR__orig_val__21889_22155,_STAR_parent_description_STAR__temp_val__21890_22156,description__20276__auto____$1,_STAR_parent_description_STAR__orig_val__20925_22054,_STAR_parent_description_STAR__temp_val__20926_22055,description__20276__auto___22053){
return (function (){
var expected__20413__auto___22167 = (4);
var actual__20414__auto___22168 = tic_tac_toe.ai.minimax.find_best_move_memo.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),new cljs.core.Keyword(null,"x","x",2099068185),(4),new cljs.core.Keyword(null,"o","o",-1350007228),new cljs.core.Keyword(null,"o","o",-1350007228),(7),(8),(9)], null),new cljs.core.Keyword(null,"x","x",2099068185),false);
if(cljs.core._EQ_.call(null,expected__20413__auto___22167,actual__20414__auto___22168)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__20413__auto___22167;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__20381__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__20381__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__20414__auto___22168;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__20381__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__20381__auto__);
}
})()," (using =)"].join('')));
}

var expected__20413__auto___22169 = (1);
var actual__20414__auto___22170 = tic_tac_toe.ai.minimax.find_best_move_memo.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),new cljs.core.Keyword(null,"x","x",2099068185),(4),new cljs.core.Keyword(null,"o","o",-1350007228),(6),(7),(8),new cljs.core.Keyword(null,"o","o",-1350007228)], null),new cljs.core.Keyword(null,"x","x",2099068185),false);
if(cljs.core._EQ_.call(null,expected__20413__auto___22169,actual__20414__auto___22170)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__20413__auto___22169;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__20381__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__20381__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__20414__auto___22170;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__20381__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__20381__auto__);
}
})()," (using =)"].join('')));
}

var expected__20413__auto___22171 = (9);
var actual__20414__auto___22172 = tic_tac_toe.ai.minimax.find_best_move_memo.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"o","o",-1350007228),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"o","o",-1350007228),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"o","o",-1350007228),(7),new cljs.core.Keyword(null,"o","o",-1350007228),(9)], null),new cljs.core.Keyword(null,"x","x",2099068185),false);
if(cljs.core._EQ_.call(null,expected__20413__auto___22171,actual__20414__auto___22172)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__20413__auto___22171;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__20381__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__20381__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__20414__auto___22172;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__20381__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__20381__auto__);
}
})()," (using =)"].join('')));
}

var expected__20413__auto__ = (4);
var actual__20414__auto__ = tic_tac_toe.ai.minimax.find_best_move_memo.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"o","o",-1350007228),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"o","o",-1350007228),(4),new cljs.core.Keyword(null,"x","x",2099068185),(6),new cljs.core.Keyword(null,"o","o",-1350007228),new cljs.core.Keyword(null,"o","o",-1350007228),new cljs.core.Keyword(null,"x","x",2099068185)], null),new cljs.core.Keyword(null,"x","x",2099068185),false);
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
});})(_STAR_parent_description_STAR__orig_val__21889_22155,_STAR_parent_description_STAR__temp_val__21890_22156,description__20276__auto____$1,_STAR_parent_description_STAR__orig_val__20925_22054,_STAR_parent_description_STAR__temp_val__20926_22055,description__20276__auto___22053))
,false),(function (){var description__20276__auto____$2 = speclj.components.new_description.call(null,"slow",false,"tic-tac-toe.ai.minimax-spec");
var _STAR_parent_description_STAR__orig_val__21920_22177 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__21921_22178 = description__20276__auto____$2;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__21921_22178);

try{var seq__21922_22179 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.mapv.call(null,speclj.components.new_tag,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"slow","slow",120317203)], null)),speclj.components.new_characteristic.call(null,"finds move with most potential to win if not blocked",((function (_STAR_parent_description_STAR__orig_val__21920_22177,_STAR_parent_description_STAR__temp_val__21921_22178,description__20276__auto____$2,_STAR_parent_description_STAR__orig_val__21889_22155,_STAR_parent_description_STAR__temp_val__21890_22156,description__20276__auto____$1,_STAR_parent_description_STAR__orig_val__20925_22054,_STAR_parent_description_STAR__temp_val__20926_22055,description__20276__auto___22053){
return (function (){
var expected__20413__auto__ = (5);
var actual__20414__auto__ = tic_tac_toe.ai.minimax.find_best_move_memo.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"o","o",-1350007228),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"o","o",-1350007228),(5),(6),(7),(8),new cljs.core.Keyword(null,"o","o",-1350007228)], null),new cljs.core.Keyword(null,"x","x",2099068185),false);
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
});})(_STAR_parent_description_STAR__orig_val__21920_22177,_STAR_parent_description_STAR__temp_val__21921_22178,description__20276__auto____$2,_STAR_parent_description_STAR__orig_val__21889_22155,_STAR_parent_description_STAR__temp_val__21890_22156,description__20276__auto____$1,_STAR_parent_description_STAR__orig_val__20925_22054,_STAR_parent_description_STAR__temp_val__20926_22055,description__20276__auto___22053))
,false),speclj.components.new_characteristic.call(null,"plays center if first move is a corner",((function (_STAR_parent_description_STAR__orig_val__21920_22177,_STAR_parent_description_STAR__temp_val__21921_22178,description__20276__auto____$2,_STAR_parent_description_STAR__orig_val__21889_22155,_STAR_parent_description_STAR__temp_val__21890_22156,description__20276__auto____$1,_STAR_parent_description_STAR__orig_val__20925_22054,_STAR_parent_description_STAR__temp_val__20926_22055,description__20276__auto___22053){
return (function (){
var expected__20413__auto___22183 = (5);
var actual__20414__auto___22184 = tic_tac_toe.ai.minimax.find_best_move_memo.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"o","o",-1350007228),(2),(3),(4),(5),(6),(7),(8),(9)], null),new cljs.core.Keyword(null,"x","x",2099068185),false);
if(cljs.core._EQ_.call(null,expected__20413__auto___22183,actual__20414__auto___22184)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__20413__auto___22183;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__20381__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__20381__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__20414__auto___22184;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__20381__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__20381__auto__);
}
})()," (using =)"].join('')));
}

var expected__20413__auto___22185 = (5);
var actual__20414__auto___22186 = tic_tac_toe.ai.minimax.find_best_move_memo.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),new cljs.core.Keyword(null,"o","o",-1350007228),(4),(5),(6),(7),(8),(9)], null),new cljs.core.Keyword(null,"x","x",2099068185),false);
if(cljs.core._EQ_.call(null,expected__20413__auto___22185,actual__20414__auto___22186)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__20413__auto___22185;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__20381__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__20381__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__20414__auto___22186;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__20381__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__20381__auto__);
}
})()," (using =)"].join('')));
}

var expected__20413__auto___22187 = (5);
var actual__20414__auto___22188 = tic_tac_toe.ai.minimax.find_best_move_memo.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(3),(4),(5),(6),new cljs.core.Keyword(null,"o","o",-1350007228),(8),(9)], null),new cljs.core.Keyword(null,"x","x",2099068185),false);
if(cljs.core._EQ_.call(null,expected__20413__auto___22187,actual__20414__auto___22188)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__20413__auto___22187;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__20381__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__20381__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__20414__auto___22188;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__20381__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__20381__auto__);
}
})()," (using =)"].join('')));
}

var expected__20413__auto__ = (5);
var actual__20414__auto__ = tic_tac_toe.ai.minimax.find_best_move_memo.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(3),(4),(5),(6),(7),(8),new cljs.core.Keyword(null,"o","o",-1350007228)], null),new cljs.core.Keyword(null,"x","x",2099068185),false);
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
});})(_STAR_parent_description_STAR__orig_val__21920_22177,_STAR_parent_description_STAR__temp_val__21921_22178,description__20276__auto____$2,_STAR_parent_description_STAR__orig_val__21889_22155,_STAR_parent_description_STAR__temp_val__21890_22156,description__20276__auto____$1,_STAR_parent_description_STAR__orig_val__20925_22054,_STAR_parent_description_STAR__temp_val__20926_22055,description__20276__auto___22053))
,false)],null)));
var chunk__21923_22180 = null;
var count__21924_22181 = (0);
var i__21925_22182 = (0);
while(true){
if((i__21925_22182 < count__21924_22181)){
var component__20277__auto___22189 = cljs.core._nth.call(null,chunk__21923_22180,i__21925_22182);
speclj.components.install.call(null,component__20277__auto___22189,description__20276__auto____$2);


var G__22190 = seq__21922_22179;
var G__22191 = chunk__21923_22180;
var G__22192 = count__21924_22181;
var G__22193 = (i__21925_22182 + (1));
seq__21922_22179 = G__22190;
chunk__21923_22180 = G__22191;
count__21924_22181 = G__22192;
i__21925_22182 = G__22193;
continue;
} else {
var temp__5804__auto___22194 = cljs.core.seq.call(null,seq__21922_22179);
if(temp__5804__auto___22194){
var seq__21922_22195__$1 = temp__5804__auto___22194;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21922_22195__$1)){
var c__5525__auto___22196 = cljs.core.chunk_first.call(null,seq__21922_22195__$1);
var G__22197 = cljs.core.chunk_rest.call(null,seq__21922_22195__$1);
var G__22198 = c__5525__auto___22196;
var G__22199 = cljs.core.count.call(null,c__5525__auto___22196);
var G__22200 = (0);
seq__21922_22179 = G__22197;
chunk__21923_22180 = G__22198;
count__21924_22181 = G__22199;
i__21925_22182 = G__22200;
continue;
} else {
var component__20277__auto___22201 = cljs.core.first.call(null,seq__21922_22195__$1);
speclj.components.install.call(null,component__20277__auto___22201,description__20276__auto____$2);


var G__22202 = cljs.core.next.call(null,seq__21922_22195__$1);
var G__22203 = null;
var G__22204 = (0);
var G__22205 = (0);
seq__21922_22179 = G__22202;
chunk__21923_22180 = G__22203;
count__21924_22181 = G__22204;
i__21925_22182 = G__22205;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__21920_22177);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__20276__auto____$2);
}

return description__20276__auto____$2;
})()],null)));
var chunk__21892_22158 = null;
var count__21893_22159 = (0);
var i__21894_22160 = (0);
while(true){
if((i__21894_22160 < count__21893_22159)){
var component__20277__auto___22206 = cljs.core._nth.call(null,chunk__21892_22158,i__21894_22160);
speclj.components.install.call(null,component__20277__auto___22206,description__20276__auto____$1);


var G__22207 = seq__21891_22157;
var G__22208 = chunk__21892_22158;
var G__22209 = count__21893_22159;
var G__22210 = (i__21894_22160 + (1));
seq__21891_22157 = G__22207;
chunk__21892_22158 = G__22208;
count__21893_22159 = G__22209;
i__21894_22160 = G__22210;
continue;
} else {
var temp__5804__auto___22211 = cljs.core.seq.call(null,seq__21891_22157);
if(temp__5804__auto___22211){
var seq__21891_22212__$1 = temp__5804__auto___22211;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21891_22212__$1)){
var c__5525__auto___22213 = cljs.core.chunk_first.call(null,seq__21891_22212__$1);
var G__22214 = cljs.core.chunk_rest.call(null,seq__21891_22212__$1);
var G__22215 = c__5525__auto___22213;
var G__22216 = cljs.core.count.call(null,c__5525__auto___22213);
var G__22217 = (0);
seq__21891_22157 = G__22214;
chunk__21892_22158 = G__22215;
count__21893_22159 = G__22216;
i__21894_22160 = G__22217;
continue;
} else {
var component__20277__auto___22218 = cljs.core.first.call(null,seq__21891_22212__$1);
speclj.components.install.call(null,component__20277__auto___22218,description__20276__auto____$1);


var G__22219 = cljs.core.next.call(null,seq__21891_22212__$1);
var G__22220 = null;
var G__22221 = (0);
var G__22222 = (0);
seq__21891_22157 = G__22219;
chunk__21892_22158 = G__22220;
count__21893_22159 = G__22221;
i__21894_22160 = G__22222;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__21889_22155);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__20276__auto____$1);
}

return description__20276__auto____$1;
})(),(function (){var description__20276__auto____$1 = speclj.components.new_description.call(null,"plays 4x4 board",false,"tic-tac-toe.ai.minimax-spec");
var _STAR_parent_description_STAR__orig_val__21954_22223 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__21955_22224 = description__20276__auto____$1;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__21955_22224);

try{var seq__21956_22225 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,8,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.mapv.call(null,speclj.components.new_tag,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"slow","slow",120317203)], null)),speclj.components.new_characteristic.call(null,"finds move if next move is a win",((function (_STAR_parent_description_STAR__orig_val__21954_22223,_STAR_parent_description_STAR__temp_val__21955_22224,description__20276__auto____$1,_STAR_parent_description_STAR__orig_val__20925_22054,_STAR_parent_description_STAR__temp_val__20926_22055,description__20276__auto___22053){
return (function (){
var expected__20413__auto___22229 = (5);
var actual__20414__auto___22230 = tic_tac_toe.ai.minimax.find_best_move_memo.call(null,new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),(2),(3),new cljs.core.Keyword(null,"x","x",2099068185),(5),new cljs.core.Keyword(null,"o","o",-1350007228),new cljs.core.Keyword(null,"o","o",-1350007228),new cljs.core.Keyword(null,"o","o",-1350007228),(9),(10),new cljs.core.Keyword(null,"x","x",2099068185),(12),(13),new cljs.core.Keyword(null,"x","x",2099068185),(15),(16)], null),new cljs.core.Keyword(null,"o","o",-1350007228),false);
if(cljs.core._EQ_.call(null,expected__20413__auto___22229,actual__20414__auto___22230)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__20413__auto___22229;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__20381__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__20381__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__20414__auto___22230;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__20381__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__20381__auto__);
}
})()," (using =)"].join('')));
}

var expected__20413__auto__ = (5);
var actual__20414__auto__ = tic_tac_toe.ai.minimax.find_best_move_memo.call(null,new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"o","o",-1350007228),(2),(3),new cljs.core.Keyword(null,"o","o",-1350007228),(5),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"x","x",2099068185),(9),(10),new cljs.core.Keyword(null,"o","o",-1350007228),(12),(13),new cljs.core.Keyword(null,"o","o",-1350007228),(15),(16)], null),new cljs.core.Keyword(null,"x","x",2099068185),false);
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
});})(_STAR_parent_description_STAR__orig_val__21954_22223,_STAR_parent_description_STAR__temp_val__21955_22224,description__20276__auto____$1,_STAR_parent_description_STAR__orig_val__20925_22054,_STAR_parent_description_STAR__temp_val__20926_22055,description__20276__auto___22053))
,false),speclj.components.new_characteristic.call(null,"finds move if next move is a block",((function (_STAR_parent_description_STAR__orig_val__21954_22223,_STAR_parent_description_STAR__temp_val__21955_22224,description__20276__auto____$1,_STAR_parent_description_STAR__orig_val__20925_22054,_STAR_parent_description_STAR__temp_val__20926_22055,description__20276__auto___22053){
return (function (){
var expected__20413__auto__ = (4);
var actual__20414__auto__ = tic_tac_toe.ai.minimax.find_best_move_memo.call(null,new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"x","x",2099068185),(4),(5),(6),(7),(8),(9),(10),(11),(12),(13),(14),(15),(16)], null),new cljs.core.Keyword(null,"o","o",-1350007228),false);
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
});})(_STAR_parent_description_STAR__orig_val__21954_22223,_STAR_parent_description_STAR__temp_val__21955_22224,description__20276__auto____$1,_STAR_parent_description_STAR__orig_val__20925_22054,_STAR_parent_description_STAR__temp_val__20926_22055,description__20276__auto___22053))
,false),speclj.components.new_characteristic.call(null,"finds move on empty board",((function (_STAR_parent_description_STAR__orig_val__21954_22223,_STAR_parent_description_STAR__temp_val__21955_22224,description__20276__auto____$1,_STAR_parent_description_STAR__orig_val__20925_22054,_STAR_parent_description_STAR__temp_val__20926_22055,description__20276__auto___22053){
return (function (){
var expected__20413__auto__ = (1);
var actual__20414__auto__ = tic_tac_toe.ai.minimax.find_best_move_memo.call(null,cljs.core.vec.call(null,cljs.core.range.call(null,(1),(17))),new cljs.core.Keyword(null,"x","x",2099068185),false);
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
});})(_STAR_parent_description_STAR__orig_val__21954_22223,_STAR_parent_description_STAR__temp_val__21955_22224,description__20276__auto____$1,_STAR_parent_description_STAR__orig_val__20925_22054,_STAR_parent_description_STAR__temp_val__20926_22055,description__20276__auto___22053))
,false),speclj.components.new_characteristic.call(null,"finds second move",((function (_STAR_parent_description_STAR__orig_val__21954_22223,_STAR_parent_description_STAR__temp_val__21955_22224,description__20276__auto____$1,_STAR_parent_description_STAR__orig_val__20925_22054,_STAR_parent_description_STAR__temp_val__20926_22055,description__20276__auto___22053){
return (function (){
var expected__20413__auto___22235 = (2);
var actual__20414__auto___22236 = tic_tac_toe.ai.minimax.find_best_move_memo.call(null,new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),(2),(3),(4),(5),(6),(7),(8),(9),(10),(11),(12),(13),(14),(15),(16)], null),new cljs.core.Keyword(null,"o","o",-1350007228),false);
if(cljs.core._EQ_.call(null,expected__20413__auto___22235,actual__20414__auto___22236)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__20413__auto___22235;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__20381__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__20381__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__20414__auto___22236;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__20381__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__20381__auto__);
}
})()," (using =)"].join('')));
}

var expected__20413__auto___22237 = (1);
var actual__20414__auto___22238 = tic_tac_toe.ai.minimax.find_best_move_memo.call(null,new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),new cljs.core.Keyword(null,"x","x",2099068185),(3),(4),(5),(6),(7),(8),(9),(10),(11),(12),(13),(14),(15),(16)], null),new cljs.core.Keyword(null,"o","o",-1350007228),false);
if(cljs.core._EQ_.call(null,expected__20413__auto___22237,actual__20414__auto___22238)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__20413__auto___22237;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__20381__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__20381__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__20414__auto___22238;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__20381__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__20381__auto__);
}
})()," (using =)"].join('')));
}

var expected__20413__auto___22239 = (1);
var actual__20414__auto___22240 = tic_tac_toe.ai.minimax.find_best_move_memo.call(null,new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),new cljs.core.Keyword(null,"x","x",2099068185),(4),(5),(6),(7),(8),(9),(10),(11),(12),(13),(14),(15),(16)], null),new cljs.core.Keyword(null,"o","o",-1350007228),false);
if(cljs.core._EQ_.call(null,expected__20413__auto___22239,actual__20414__auto___22240)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__20413__auto___22239;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__20381__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__20381__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__20414__auto___22240;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__20381__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__20381__auto__);
}
})()," (using =)"].join('')));
}

var expected__20413__auto___22241 = (1);
var actual__20414__auto___22242 = tic_tac_toe.ai.minimax.find_best_move_memo.call(null,new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(3),new cljs.core.Keyword(null,"x","x",2099068185),(5),(6),(7),(8),(9),(10),(11),(12),(13),(14),(15),(16)], null),new cljs.core.Keyword(null,"o","o",-1350007228),false);
if(cljs.core._EQ_.call(null,expected__20413__auto___22241,actual__20414__auto___22242)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__20413__auto___22241;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__20381__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__20381__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__20414__auto___22242;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__20381__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__20381__auto__);
}
})()," (using =)"].join('')));
}

var expected__20413__auto___22243 = (1);
var actual__20414__auto___22244 = tic_tac_toe.ai.minimax.find_best_move_memo.call(null,new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(3),(4),new cljs.core.Keyword(null,"x","x",2099068185),(6),(7),(8),(9),(10),(11),(12),(13),(14),(15),(16)], null),new cljs.core.Keyword(null,"o","o",-1350007228),false);
if(cljs.core._EQ_.call(null,expected__20413__auto___22243,actual__20414__auto___22244)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__20413__auto___22243;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__20381__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__20381__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__20414__auto___22244;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__20381__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__20381__auto__);
}
})()," (using =)"].join('')));
}

var expected__20413__auto___22245 = (1);
var actual__20414__auto___22246 = tic_tac_toe.ai.minimax.find_best_move_memo.call(null,new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(3),(4),(5),new cljs.core.Keyword(null,"x","x",2099068185),(7),(8),(9),(10),(11),(12),(13),(14),(15),(16)], null),new cljs.core.Keyword(null,"o","o",-1350007228),false);
if(cljs.core._EQ_.call(null,expected__20413__auto___22245,actual__20414__auto___22246)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__20413__auto___22245;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__20381__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__20381__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__20414__auto___22246;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__20381__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__20381__auto__);
}
})()," (using =)"].join('')));
}

var expected__20413__auto___22247 = (1);
var actual__20414__auto___22248 = tic_tac_toe.ai.minimax.find_best_move_memo.call(null,new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(3),(4),(5),(6),new cljs.core.Keyword(null,"x","x",2099068185),(8),(9),(10),(11),(12),(13),(14),(15),(16)], null),new cljs.core.Keyword(null,"o","o",-1350007228),false);
if(cljs.core._EQ_.call(null,expected__20413__auto___22247,actual__20414__auto___22248)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__20413__auto___22247;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__20381__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__20381__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__20414__auto___22248;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__20381__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__20381__auto__);
}
})()," (using =)"].join('')));
}

var expected__20413__auto___22249 = (1);
var actual__20414__auto___22250 = tic_tac_toe.ai.minimax.find_best_move_memo.call(null,new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(3),(4),(5),(6),(7),new cljs.core.Keyword(null,"x","x",2099068185),(9),(10),(11),(12),(13),(14),(15),(16)], null),new cljs.core.Keyword(null,"o","o",-1350007228),false);
if(cljs.core._EQ_.call(null,expected__20413__auto___22249,actual__20414__auto___22250)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__20413__auto___22249;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__20381__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__20381__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__20414__auto___22250;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__20381__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__20381__auto__);
}
})()," (using =)"].join('')));
}

var expected__20413__auto___22251 = (1);
var actual__20414__auto___22252 = tic_tac_toe.ai.minimax.find_best_move_memo.call(null,new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(3),(4),(5),(6),(7),(8),new cljs.core.Keyword(null,"x","x",2099068185),(10),(11),(12),(13),(14),(15),(16)], null),new cljs.core.Keyword(null,"o","o",-1350007228),false);
if(cljs.core._EQ_.call(null,expected__20413__auto___22251,actual__20414__auto___22252)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__20413__auto___22251;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__20381__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__20381__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__20414__auto___22252;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__20381__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__20381__auto__);
}
})()," (using =)"].join('')));
}

var expected__20413__auto___22253 = (1);
var actual__20414__auto___22254 = tic_tac_toe.ai.minimax.find_best_move_memo.call(null,new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(3),(4),(5),(6),(7),(8),(9),new cljs.core.Keyword(null,"x","x",2099068185),(11),(12),(13),(14),(15),(16)], null),new cljs.core.Keyword(null,"o","o",-1350007228),false);
if(cljs.core._EQ_.call(null,expected__20413__auto___22253,actual__20414__auto___22254)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__20413__auto___22253;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__20381__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__20381__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__20414__auto___22254;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__20381__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__20381__auto__);
}
})()," (using =)"].join('')));
}

var expected__20413__auto___22267 = (1);
var actual__20414__auto___22268 = tic_tac_toe.ai.minimax.find_best_move_memo.call(null,new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(3),(4),(5),(6),(7),(8),(9),(10),new cljs.core.Keyword(null,"x","x",2099068185),(12),(13),(14),(15),(16)], null),new cljs.core.Keyword(null,"o","o",-1350007228),false);
if(cljs.core._EQ_.call(null,expected__20413__auto___22267,actual__20414__auto___22268)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__20413__auto___22267;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__20381__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__20381__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__20414__auto___22268;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__20381__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__20381__auto__);
}
})()," (using =)"].join('')));
}

var expected__20413__auto___22269 = (1);
var actual__20414__auto___22270 = tic_tac_toe.ai.minimax.find_best_move_memo.call(null,new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(3),(4),(5),(6),(7),(8),(9),(10),(11),new cljs.core.Keyword(null,"x","x",2099068185),(13),(14),(15),(16)], null),new cljs.core.Keyword(null,"o","o",-1350007228),false);
if(cljs.core._EQ_.call(null,expected__20413__auto___22269,actual__20414__auto___22270)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__20413__auto___22269;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__20381__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__20381__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__20414__auto___22270;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__20381__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__20381__auto__);
}
})()," (using =)"].join('')));
}

var expected__20413__auto___22271 = (1);
var actual__20414__auto___22272 = tic_tac_toe.ai.minimax.find_best_move_memo.call(null,new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(3),(4),(5),(6),(7),(8),(9),(10),(11),(12),new cljs.core.Keyword(null,"x","x",2099068185),(14),(15),(16)], null),new cljs.core.Keyword(null,"o","o",-1350007228),false);
if(cljs.core._EQ_.call(null,expected__20413__auto___22271,actual__20414__auto___22272)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__20413__auto___22271;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__20381__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__20381__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__20414__auto___22272;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__20381__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__20381__auto__);
}
})()," (using =)"].join('')));
}

var expected__20413__auto___22273 = (1);
var actual__20414__auto___22274 = tic_tac_toe.ai.minimax.find_best_move_memo.call(null,new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(3),(4),(5),(6),(7),(8),(9),(10),(11),(12),(13),new cljs.core.Keyword(null,"x","x",2099068185),(15),(16)], null),new cljs.core.Keyword(null,"o","o",-1350007228),false);
if(cljs.core._EQ_.call(null,expected__20413__auto___22273,actual__20414__auto___22274)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__20413__auto___22273;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__20381__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__20381__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__20414__auto___22274;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__20381__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__20381__auto__);
}
})()," (using =)"].join('')));
}

var expected__20413__auto___22275 = (1);
var actual__20414__auto___22276 = tic_tac_toe.ai.minimax.find_best_move_memo.call(null,new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(3),(4),(5),(6),(7),(8),(9),(10),(11),(12),(13),(14),new cljs.core.Keyword(null,"x","x",2099068185),(16)], null),new cljs.core.Keyword(null,"o","o",-1350007228),false);
if(cljs.core._EQ_.call(null,expected__20413__auto___22275,actual__20414__auto___22276)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__20413__auto___22275;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__20381__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__20381__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__20414__auto___22276;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__20381__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__20381__auto__);
}
})()," (using =)"].join('')));
}

var expected__20413__auto__ = (1);
var actual__20414__auto__ = tic_tac_toe.ai.minimax.find_best_move_memo.call(null,new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(3),(4),(5),(6),(7),(8),(9),(10),(11),(12),(13),(14),(15),new cljs.core.Keyword(null,"x","x",2099068185)], null),new cljs.core.Keyword(null,"o","o",-1350007228),false);
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
});})(_STAR_parent_description_STAR__orig_val__21954_22223,_STAR_parent_description_STAR__temp_val__21955_22224,description__20276__auto____$1,_STAR_parent_description_STAR__orig_val__20925_22054,_STAR_parent_description_STAR__temp_val__20926_22055,description__20276__auto___22053))
,false),speclj.components.new_characteristic.call(null,"finds third move",((function (_STAR_parent_description_STAR__orig_val__21954_22223,_STAR_parent_description_STAR__temp_val__21955_22224,description__20276__auto____$1,_STAR_parent_description_STAR__orig_val__20925_22054,_STAR_parent_description_STAR__temp_val__20926_22055,description__20276__auto___22053){
return (function (){
var expected__20413__auto___22277 = (3);
var actual__20414__auto___22278 = tic_tac_toe.ai.minimax.find_best_move_memo.call(null,new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"o","o",-1350007228),(3),(4),(5),(6),(7),(8),(9),(10),(11),(12),(13),(14),(15),(16)], null),new cljs.core.Keyword(null,"x","x",2099068185),false);
if(cljs.core._EQ_.call(null,expected__20413__auto___22277,actual__20414__auto___22278)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__20413__auto___22277;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__20381__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__20381__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__20414__auto___22278;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__20381__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__20381__auto__);
}
})()," (using =)"].join('')));
}

var expected__20413__auto___22279 = (3);
var actual__20414__auto___22280 = tic_tac_toe.ai.minimax.find_best_move_memo.call(null,new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"o","o",-1350007228),new cljs.core.Keyword(null,"x","x",2099068185),(3),(4),(5),(6),(7),(8),(9),(10),(11),(12),(13),(14),(15),(16)], null),new cljs.core.Keyword(null,"x","x",2099068185),false);
if(cljs.core._EQ_.call(null,expected__20413__auto___22279,actual__20414__auto___22280)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__20413__auto___22279;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__20381__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__20381__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__20414__auto___22280;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__20381__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__20381__auto__);
}
})()," (using =)"].join('')));
}

var expected__20413__auto___22281 = (2);
var actual__20414__auto___22282 = tic_tac_toe.ai.minimax.find_best_move_memo.call(null,new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"o","o",-1350007228),(2),new cljs.core.Keyword(null,"x","x",2099068185),(4),(5),(6),(7),(8),(9),(10),(11),(12),(13),(14),(15),(16)], null),new cljs.core.Keyword(null,"x","x",2099068185),false);
if(cljs.core._EQ_.call(null,expected__20413__auto___22281,actual__20414__auto___22282)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__20413__auto___22281;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__20381__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__20381__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__20414__auto___22282;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__20381__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__20381__auto__);
}
})()," (using =)"].join('')));
}

var expected__20413__auto___22283 = (2);
var actual__20414__auto___22284 = tic_tac_toe.ai.minimax.find_best_move_memo.call(null,new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"o","o",-1350007228),(2),(3),new cljs.core.Keyword(null,"x","x",2099068185),(5),(6),(7),(8),(9),(10),(11),(12),(13),(14),(15),(16)], null),new cljs.core.Keyword(null,"x","x",2099068185),false);
if(cljs.core._EQ_.call(null,expected__20413__auto___22283,actual__20414__auto___22284)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__20413__auto___22283;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__20381__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__20381__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__20414__auto___22284;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__20381__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__20381__auto__);
}
})()," (using =)"].join('')));
}

var expected__20413__auto___22285 = (2);
var actual__20414__auto___22286 = tic_tac_toe.ai.minimax.find_best_move_memo.call(null,new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"o","o",-1350007228),(2),(3),(4),new cljs.core.Keyword(null,"x","x",2099068185),(6),(7),(8),(9),(10),(11),(12),(13),(14),(15),(16)], null),new cljs.core.Keyword(null,"x","x",2099068185),false);
if(cljs.core._EQ_.call(null,expected__20413__auto___22285,actual__20414__auto___22286)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__20413__auto___22285;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__20381__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__20381__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__20414__auto___22286;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__20381__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__20381__auto__);
}
})()," (using =)"].join('')));
}

var expected__20413__auto___22287 = (2);
var actual__20414__auto___22288 = tic_tac_toe.ai.minimax.find_best_move_memo.call(null,new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"o","o",-1350007228),(2),(3),(4),(5),new cljs.core.Keyword(null,"x","x",2099068185),(7),(8),(9),(10),(11),(12),(13),(14),(15),(16)], null),new cljs.core.Keyword(null,"x","x",2099068185),false);
if(cljs.core._EQ_.call(null,expected__20413__auto___22287,actual__20414__auto___22288)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__20413__auto___22287;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__20381__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__20381__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__20414__auto___22288;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__20381__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__20381__auto__);
}
})()," (using =)"].join('')));
}

var expected__20413__auto___22289 = (2);
var actual__20414__auto___22290 = tic_tac_toe.ai.minimax.find_best_move_memo.call(null,new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"o","o",-1350007228),(2),(3),(4),(5),(6),new cljs.core.Keyword(null,"x","x",2099068185),(8),(9),(10),(11),(12),(13),(14),(15),(16)], null),new cljs.core.Keyword(null,"x","x",2099068185),false);
if(cljs.core._EQ_.call(null,expected__20413__auto___22289,actual__20414__auto___22290)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__20413__auto___22289;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__20381__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__20381__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__20414__auto___22290;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__20381__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__20381__auto__);
}
})()," (using =)"].join('')));
}

var expected__20413__auto___22291 = (2);
var actual__20414__auto___22292 = tic_tac_toe.ai.minimax.find_best_move_memo.call(null,new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"o","o",-1350007228),(2),(3),(4),(5),(6),(7),new cljs.core.Keyword(null,"x","x",2099068185),(9),(10),(11),(12),(13),(14),(15),(16)], null),new cljs.core.Keyword(null,"x","x",2099068185),false);
if(cljs.core._EQ_.call(null,expected__20413__auto___22291,actual__20414__auto___22292)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__20413__auto___22291;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__20381__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__20381__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__20414__auto___22292;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__20381__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__20381__auto__);
}
})()," (using =)"].join('')));
}

var expected__20413__auto___22293 = (2);
var actual__20414__auto___22294 = tic_tac_toe.ai.minimax.find_best_move_memo.call(null,new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"o","o",-1350007228),(2),(3),(4),(5),(6),(7),(8),new cljs.core.Keyword(null,"x","x",2099068185),(10),(11),(12),(13),(14),(15),(16)], null),new cljs.core.Keyword(null,"x","x",2099068185),false);
if(cljs.core._EQ_.call(null,expected__20413__auto___22293,actual__20414__auto___22294)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__20413__auto___22293;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__20381__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__20381__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__20414__auto___22294;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__20381__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__20381__auto__);
}
})()," (using =)"].join('')));
}

var expected__20413__auto___22295 = (2);
var actual__20414__auto___22296 = tic_tac_toe.ai.minimax.find_best_move_memo.call(null,new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"o","o",-1350007228),(2),(3),(4),(5),(6),(7),(8),(9),new cljs.core.Keyword(null,"x","x",2099068185),(11),(12),(13),(14),(15),(16)], null),new cljs.core.Keyword(null,"x","x",2099068185),false);
if(cljs.core._EQ_.call(null,expected__20413__auto___22295,actual__20414__auto___22296)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__20413__auto___22295;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__20381__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__20381__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__20414__auto___22296;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__20381__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__20381__auto__);
}
})()," (using =)"].join('')));
}

var expected__20413__auto___22297 = (2);
var actual__20414__auto___22298 = tic_tac_toe.ai.minimax.find_best_move_memo.call(null,new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"o","o",-1350007228),(2),(3),(4),(5),(6),(7),(8),(9),(10),new cljs.core.Keyword(null,"x","x",2099068185),(12),(13),(14),(15),(16)], null),new cljs.core.Keyword(null,"x","x",2099068185),false);
if(cljs.core._EQ_.call(null,expected__20413__auto___22297,actual__20414__auto___22298)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__20413__auto___22297;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__20381__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__20381__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__20414__auto___22298;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__20381__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__20381__auto__);
}
})()," (using =)"].join('')));
}

var expected__20413__auto___22299 = (2);
var actual__20414__auto___22300 = tic_tac_toe.ai.minimax.find_best_move_memo.call(null,new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"o","o",-1350007228),(2),(3),(4),(5),(6),(7),(8),(9),(10),(11),new cljs.core.Keyword(null,"x","x",2099068185),(13),(14),(15),(16)], null),new cljs.core.Keyword(null,"x","x",2099068185),false);
if(cljs.core._EQ_.call(null,expected__20413__auto___22299,actual__20414__auto___22300)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__20413__auto___22299;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__20381__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__20381__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__20414__auto___22300;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__20381__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__20381__auto__);
}
})()," (using =)"].join('')));
}

var expected__20413__auto___22301 = (2);
var actual__20414__auto___22302 = tic_tac_toe.ai.minimax.find_best_move_memo.call(null,new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"o","o",-1350007228),(2),(3),(4),(5),(6),(7),(8),(9),(10),(11),(12),new cljs.core.Keyword(null,"x","x",2099068185),(14),(15),(16)], null),new cljs.core.Keyword(null,"x","x",2099068185),false);
if(cljs.core._EQ_.call(null,expected__20413__auto___22301,actual__20414__auto___22302)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__20413__auto___22301;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__20381__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__20381__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__20414__auto___22302;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__20381__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__20381__auto__);
}
})()," (using =)"].join('')));
}

var expected__20413__auto___22303 = (2);
var actual__20414__auto___22304 = tic_tac_toe.ai.minimax.find_best_move_memo.call(null,new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"o","o",-1350007228),(2),(3),(4),(5),(6),(7),(8),(9),(10),(11),(12),(13),new cljs.core.Keyword(null,"x","x",2099068185),(15),(16)], null),new cljs.core.Keyword(null,"x","x",2099068185),false);
if(cljs.core._EQ_.call(null,expected__20413__auto___22303,actual__20414__auto___22304)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__20413__auto___22303;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__20381__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__20381__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__20414__auto___22304;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__20381__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__20381__auto__);
}
})()," (using =)"].join('')));
}

var expected__20413__auto___22305 = (2);
var actual__20414__auto___22306 = tic_tac_toe.ai.minimax.find_best_move_memo.call(null,new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"o","o",-1350007228),(2),(3),(4),(5),(6),(7),(8),(9),(10),(11),(12),(13),(14),new cljs.core.Keyword(null,"x","x",2099068185),(16)], null),new cljs.core.Keyword(null,"x","x",2099068185),false);
if(cljs.core._EQ_.call(null,expected__20413__auto___22305,actual__20414__auto___22306)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__20413__auto___22305;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__20381__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__20381__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__20414__auto___22306;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__20381__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__20381__auto__);
}
})()," (using =)"].join('')));
}

var expected__20413__auto__ = (2);
var actual__20414__auto__ = tic_tac_toe.ai.minimax.find_best_move_memo.call(null,new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"o","o",-1350007228),(2),(3),(4),(5),(6),(7),(8),(9),(10),(11),(12),(13),(14),(15),new cljs.core.Keyword(null,"x","x",2099068185)], null),new cljs.core.Keyword(null,"x","x",2099068185),false);
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
});})(_STAR_parent_description_STAR__orig_val__21954_22223,_STAR_parent_description_STAR__temp_val__21955_22224,description__20276__auto____$1,_STAR_parent_description_STAR__orig_val__20925_22054,_STAR_parent_description_STAR__temp_val__20926_22055,description__20276__auto___22053))
,false),speclj.components.new_characteristic.call(null,"finds fourth move",((function (_STAR_parent_description_STAR__orig_val__21954_22223,_STAR_parent_description_STAR__temp_val__21955_22224,description__20276__auto____$1,_STAR_parent_description_STAR__orig_val__20925_22054,_STAR_parent_description_STAR__temp_val__20926_22055,description__20276__auto___22053){
return (function (){
var expected__20413__auto___22307 = (4);
var actual__20414__auto___22308 = tic_tac_toe.ai.minimax.find_best_move_memo.call(null,new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"o","o",-1350007228),new cljs.core.Keyword(null,"x","x",2099068185),(4),(5),(6),(7),(8),(9),(10),(11),(12),(13),(14),(15),(16)], null),new cljs.core.Keyword(null,"o","o",-1350007228),false);
if(cljs.core._EQ_.call(null,expected__20413__auto___22307,actual__20414__auto___22308)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__20413__auto___22307;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__20381__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__20381__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__20414__auto___22308;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__20381__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__20381__auto__);
}
})()," (using =)"].join('')));
}

var expected__20413__auto___22309 = (4);
var actual__20414__auto___22310 = tic_tac_toe.ai.minimax.find_best_move_memo.call(null,new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"o","o",-1350007228),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"x","x",2099068185),(4),(5),(6),(7),(8),(9),(10),(11),(12),(13),(14),(15),(16)], null),new cljs.core.Keyword(null,"o","o",-1350007228),false);
if(cljs.core._EQ_.call(null,expected__20413__auto___22309,actual__20414__auto___22310)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__20413__auto___22309;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__20381__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__20381__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__20414__auto___22310;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__20381__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__20381__auto__);
}
})()," (using =)"].join('')));
}

var expected__20413__auto___22311 = (4);
var actual__20414__auto___22312 = tic_tac_toe.ai.minimax.find_best_move_memo.call(null,new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"o","o",-1350007228),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"x","x",2099068185),(4),(5),(6),(7),(8),(9),(10),(11),(12),(13),(14),(15),(16)], null),new cljs.core.Keyword(null,"o","o",-1350007228),false);
if(cljs.core._EQ_.call(null,expected__20413__auto___22311,actual__20414__auto___22312)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__20413__auto___22311;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__20381__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__20381__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__20414__auto___22312;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__20381__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__20381__auto__);
}
})()," (using =)"].join('')));
}

var expected__20413__auto___22313 = (2);
var actual__20414__auto___22314 = tic_tac_toe.ai.minimax.find_best_move_memo.call(null,new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"o","o",-1350007228),(2),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"x","x",2099068185),(5),(6),(7),(8),(9),(10),(11),(12),(13),(14),(15),(16)], null),new cljs.core.Keyword(null,"o","o",-1350007228),false);
if(cljs.core._EQ_.call(null,expected__20413__auto___22313,actual__20414__auto___22314)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__20413__auto___22313;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__20381__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__20381__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__20414__auto___22314;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__20381__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__20381__auto__);
}
})()," (using =)"].join('')));
}

var expected__20413__auto___22315 = (2);
var actual__20414__auto___22316 = tic_tac_toe.ai.minimax.find_best_move_memo.call(null,new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"o","o",-1350007228),(2),new cljs.core.Keyword(null,"x","x",2099068185),(4),new cljs.core.Keyword(null,"x","x",2099068185),(6),(7),(8),(9),(10),(11),(12),(13),(14),(15),(16)], null),new cljs.core.Keyword(null,"o","o",-1350007228),false);
if(cljs.core._EQ_.call(null,expected__20413__auto___22315,actual__20414__auto___22316)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__20413__auto___22315;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__20381__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__20381__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__20414__auto___22316;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__20381__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__20381__auto__);
}
})()," (using =)"].join('')));
}

var expected__20413__auto___22317 = (2);
var actual__20414__auto___22318 = tic_tac_toe.ai.minimax.find_best_move_memo.call(null,new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"o","o",-1350007228),(2),new cljs.core.Keyword(null,"x","x",2099068185),(4),(5),new cljs.core.Keyword(null,"x","x",2099068185),(7),(8),(9),(10),(11),(12),(13),(14),(15),(16)], null),new cljs.core.Keyword(null,"o","o",-1350007228),false);
if(cljs.core._EQ_.call(null,expected__20413__auto___22317,actual__20414__auto___22318)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__20413__auto___22317;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__20381__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__20381__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__20414__auto___22318;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__20381__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__20381__auto__);
}
})()," (using =)"].join('')));
}

var expected__20413__auto___22319 = (2);
var actual__20414__auto___22320 = tic_tac_toe.ai.minimax.find_best_move_memo.call(null,new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"o","o",-1350007228),(2),new cljs.core.Keyword(null,"x","x",2099068185),(4),(5),(6),new cljs.core.Keyword(null,"x","x",2099068185),(8),(9),(10),(11),(12),(13),(14),(15),(16)], null),new cljs.core.Keyword(null,"o","o",-1350007228),false);
if(cljs.core._EQ_.call(null,expected__20413__auto___22319,actual__20414__auto___22320)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__20413__auto___22319;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__20381__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__20381__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__20414__auto___22320;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__20381__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__20381__auto__);
}
})()," (using =)"].join('')));
}

var expected__20413__auto___22321 = (2);
var actual__20414__auto___22322 = tic_tac_toe.ai.minimax.find_best_move_memo.call(null,new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"o","o",-1350007228),(2),new cljs.core.Keyword(null,"x","x",2099068185),(4),(5),(6),(7),new cljs.core.Keyword(null,"x","x",2099068185),(9),(10),(11),(12),(13),(14),(15),(16)], null),new cljs.core.Keyword(null,"o","o",-1350007228),false);
if(cljs.core._EQ_.call(null,expected__20413__auto___22321,actual__20414__auto___22322)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__20413__auto___22321;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__20381__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__20381__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__20414__auto___22322;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__20381__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__20381__auto__);
}
})()," (using =)"].join('')));
}

var expected__20413__auto___22323 = (2);
var actual__20414__auto___22324 = tic_tac_toe.ai.minimax.find_best_move_memo.call(null,new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"o","o",-1350007228),(2),new cljs.core.Keyword(null,"x","x",2099068185),(4),(5),(6),(7),(8),new cljs.core.Keyword(null,"x","x",2099068185),(10),(11),(12),(13),(14),(15),(16)], null),new cljs.core.Keyword(null,"o","o",-1350007228),false);
if(cljs.core._EQ_.call(null,expected__20413__auto___22323,actual__20414__auto___22324)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__20413__auto___22323;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__20381__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__20381__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__20414__auto___22324;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__20381__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__20381__auto__);
}
})()," (using =)"].join('')));
}

var expected__20413__auto___22325 = (2);
var actual__20414__auto___22326 = tic_tac_toe.ai.minimax.find_best_move_memo.call(null,new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"o","o",-1350007228),(2),new cljs.core.Keyword(null,"x","x",2099068185),(4),(5),(6),(7),(8),(9),new cljs.core.Keyword(null,"x","x",2099068185),(11),(12),(13),(14),(15),(16)], null),new cljs.core.Keyword(null,"o","o",-1350007228),false);
if(cljs.core._EQ_.call(null,expected__20413__auto___22325,actual__20414__auto___22326)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__20413__auto___22325;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__20381__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__20381__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__20414__auto___22326;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__20381__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__20381__auto__);
}
})()," (using =)"].join('')));
}

var expected__20413__auto___22327 = (2);
var actual__20414__auto___22328 = tic_tac_toe.ai.minimax.find_best_move_memo.call(null,new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"o","o",-1350007228),(2),new cljs.core.Keyword(null,"x","x",2099068185),(4),(5),(6),(7),(8),(9),(10),new cljs.core.Keyword(null,"x","x",2099068185),(12),(13),(14),(15),(16)], null),new cljs.core.Keyword(null,"o","o",-1350007228),false);
if(cljs.core._EQ_.call(null,expected__20413__auto___22327,actual__20414__auto___22328)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__20413__auto___22327;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__20381__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__20381__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__20414__auto___22328;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__20381__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__20381__auto__);
}
})()," (using =)"].join('')));
}

var expected__20413__auto___22329 = (2);
var actual__20414__auto___22330 = tic_tac_toe.ai.minimax.find_best_move_memo.call(null,new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"o","o",-1350007228),(2),new cljs.core.Keyword(null,"x","x",2099068185),(4),(5),(6),(7),(8),(9),(10),(11),new cljs.core.Keyword(null,"x","x",2099068185),(13),(14),(15),(16)], null),new cljs.core.Keyword(null,"o","o",-1350007228),false);
if(cljs.core._EQ_.call(null,expected__20413__auto___22329,actual__20414__auto___22330)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__20413__auto___22329;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__20381__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__20381__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__20414__auto___22330;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__20381__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__20381__auto__);
}
})()," (using =)"].join('')));
}

var expected__20413__auto___22331 = (2);
var actual__20414__auto___22332 = tic_tac_toe.ai.minimax.find_best_move_memo.call(null,new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"o","o",-1350007228),(2),new cljs.core.Keyword(null,"x","x",2099068185),(4),(5),(6),(7),(8),(9),(10),(11),(12),new cljs.core.Keyword(null,"x","x",2099068185),(14),(15),(16)], null),new cljs.core.Keyword(null,"o","o",-1350007228),false);
if(cljs.core._EQ_.call(null,expected__20413__auto___22331,actual__20414__auto___22332)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__20413__auto___22331;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__20381__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__20381__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__20414__auto___22332;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__20381__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__20381__auto__);
}
})()," (using =)"].join('')));
}

var expected__20413__auto___22333 = (2);
var actual__20414__auto___22334 = tic_tac_toe.ai.minimax.find_best_move_memo.call(null,new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"o","o",-1350007228),(2),new cljs.core.Keyword(null,"x","x",2099068185),(4),(5),(6),(7),(8),(9),(10),(11),(12),(13),new cljs.core.Keyword(null,"x","x",2099068185),(15),(16)], null),new cljs.core.Keyword(null,"o","o",-1350007228),false);
if(cljs.core._EQ_.call(null,expected__20413__auto___22333,actual__20414__auto___22334)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__20413__auto___22333;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__20381__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__20381__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__20414__auto___22334;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__20381__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__20381__auto__);
}
})()," (using =)"].join('')));
}

var expected__20413__auto___22335 = (2);
var actual__20414__auto___22336 = tic_tac_toe.ai.minimax.find_best_move_memo.call(null,new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"o","o",-1350007228),(2),new cljs.core.Keyword(null,"x","x",2099068185),(4),(5),(6),(7),(8),(9),(10),(11),(12),(13),(14),new cljs.core.Keyword(null,"x","x",2099068185),(16)], null),new cljs.core.Keyword(null,"o","o",-1350007228),false);
if(cljs.core._EQ_.call(null,expected__20413__auto___22335,actual__20414__auto___22336)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__20413__auto___22335;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__20381__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__20381__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__20414__auto___22336;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__20381__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__20381__auto__);
}
})()," (using =)"].join('')));
}

var expected__20413__auto__ = (2);
var actual__20414__auto__ = tic_tac_toe.ai.minimax.find_best_move_memo.call(null,new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"o","o",-1350007228),(2),(3),new cljs.core.Keyword(null,"x","x",2099068185),(5),(6),(7),(8),(9),(10),(11),(12),(13),(14),(15),new cljs.core.Keyword(null,"x","x",2099068185)], null),new cljs.core.Keyword(null,"o","o",-1350007228),false);
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
});})(_STAR_parent_description_STAR__orig_val__21954_22223,_STAR_parent_description_STAR__temp_val__21955_22224,description__20276__auto____$1,_STAR_parent_description_STAR__orig_val__20925_22054,_STAR_parent_description_STAR__temp_val__20926_22055,description__20276__auto___22053))
,false),speclj.components.new_characteristic.call(null,"finds 6th move",((function (_STAR_parent_description_STAR__orig_val__21954_22223,_STAR_parent_description_STAR__temp_val__21955_22224,description__20276__auto____$1,_STAR_parent_description_STAR__orig_val__20925_22054,_STAR_parent_description_STAR__temp_val__20926_22055,description__20276__auto___22053){
return (function (){
var expected__20413__auto__ = (3);
var actual__20414__auto__ = tic_tac_toe.ai.minimax.find_best_move_memo.call(null,new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"o","o",-1350007228),new cljs.core.Keyword(null,"o","o",-1350007228),(3),new cljs.core.Keyword(null,"x","x",2099068185),(5),(6),(7),(8),new cljs.core.Keyword(null,"x","x",2099068185),(10),(11),new cljs.core.Keyword(null,"x","x",2099068185),(13),(14),(15),(16)], null),new cljs.core.Keyword(null,"x","x",2099068185),false);
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
});})(_STAR_parent_description_STAR__orig_val__21954_22223,_STAR_parent_description_STAR__temp_val__21955_22224,description__20276__auto____$1,_STAR_parent_description_STAR__orig_val__20925_22054,_STAR_parent_description_STAR__temp_val__20926_22055,description__20276__auto___22053))
,false)],null)));
var chunk__21957_22226 = null;
var count__21958_22227 = (0);
var i__21959_22228 = (0);
while(true){
if((i__21959_22228 < count__21958_22227)){
var component__20277__auto___22337 = cljs.core._nth.call(null,chunk__21957_22226,i__21959_22228);
speclj.components.install.call(null,component__20277__auto___22337,description__20276__auto____$1);


var G__22338 = seq__21956_22225;
var G__22339 = chunk__21957_22226;
var G__22340 = count__21958_22227;
var G__22341 = (i__21959_22228 + (1));
seq__21956_22225 = G__22338;
chunk__21957_22226 = G__22339;
count__21958_22227 = G__22340;
i__21959_22228 = G__22341;
continue;
} else {
var temp__5804__auto___22342 = cljs.core.seq.call(null,seq__21956_22225);
if(temp__5804__auto___22342){
var seq__21956_22343__$1 = temp__5804__auto___22342;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21956_22343__$1)){
var c__5525__auto___22344 = cljs.core.chunk_first.call(null,seq__21956_22343__$1);
var G__22345 = cljs.core.chunk_rest.call(null,seq__21956_22343__$1);
var G__22346 = c__5525__auto___22344;
var G__22347 = cljs.core.count.call(null,c__5525__auto___22344);
var G__22348 = (0);
seq__21956_22225 = G__22345;
chunk__21957_22226 = G__22346;
count__21958_22227 = G__22347;
i__21959_22228 = G__22348;
continue;
} else {
var component__20277__auto___22349 = cljs.core.first.call(null,seq__21956_22343__$1);
speclj.components.install.call(null,component__20277__auto___22349,description__20276__auto____$1);


var G__22350 = cljs.core.next.call(null,seq__21956_22343__$1);
var G__22351 = null;
var G__22352 = (0);
var G__22353 = (0);
seq__21956_22225 = G__22350;
chunk__21957_22226 = G__22351;
count__21958_22227 = G__22352;
i__21959_22228 = G__22353;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__21954_22223);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__20276__auto____$1);
}

return description__20276__auto____$1;
})(),(function (){var description__20276__auto____$1 = speclj.components.new_description.call(null,"plays 3D board",false,"tic-tac-toe.ai.minimax-spec");
var _STAR_parent_description_STAR__orig_val__22021_22354 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__22022_22355 = description__20276__auto____$1;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__22022_22355);

try{var seq__22023_22356 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,4,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_characteristic.call(null,"finds potential active winning paths for given player",((function (_STAR_parent_description_STAR__orig_val__22021_22354,_STAR_parent_description_STAR__temp_val__22022_22355,description__20276__auto____$1,_STAR_parent_description_STAR__orig_val__20925_22054,_STAR_parent_description_STAR__temp_val__20926_22055,description__20276__auto___22053){
return (function (){
var expected__20413__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(12),new cljs.core.Keyword(null,"o","o",-1350007228),(18)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(6),new cljs.core.Keyword(null,"o","o",-1350007228),(24)], null)], null);
var actual__20414__auto__ = tic_tac_toe.ai.minimax.get_player_paths.call(null,new cljs.core.PersistentVector(null, 27, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),new cljs.core.Keyword(null,"x","x",2099068185),(3),(4),(5),(6),(7),(8),(9),(10),(11),(12),(13),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"o","o",-1350007228),(16),(17),(18),(19),(20),(21),(22),(23),(24),(25),(26),(27)], null),new cljs.core.Keyword(null,"o","o",-1350007228));
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
});})(_STAR_parent_description_STAR__orig_val__22021_22354,_STAR_parent_description_STAR__temp_val__22022_22355,description__20276__auto____$1,_STAR_parent_description_STAR__orig_val__20925_22054,_STAR_parent_description_STAR__temp_val__20926_22055,description__20276__auto___22053))
,false),speclj.components.new_characteristic.call(null,"find potential active winning moves for given player",((function (_STAR_parent_description_STAR__orig_val__22021_22354,_STAR_parent_description_STAR__temp_val__22022_22355,description__20276__auto____$1,_STAR_parent_description_STAR__orig_val__20925_22054,_STAR_parent_description_STAR__temp_val__20926_22055,description__20276__auto___22053){
return (function (){
var expected__20413__auto__ = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(12),(18),(6),(24)], null);
var actual__20414__auto__ = tic_tac_toe.ai.minimax.get_player_moves.call(null,new cljs.core.PersistentVector(null, 27, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),new cljs.core.Keyword(null,"x","x",2099068185),(3),(4),(5),(6),(7),(8),(9),(10),(11),(12),(13),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"o","o",-1350007228),(16),(17),(18),(19),(20),(21),(22),(23),(24),(25),(26),(27)], null),new cljs.core.Keyword(null,"o","o",-1350007228));
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
});})(_STAR_parent_description_STAR__orig_val__22021_22354,_STAR_parent_description_STAR__temp_val__22022_22355,description__20276__auto____$1,_STAR_parent_description_STAR__orig_val__20925_22054,_STAR_parent_description_STAR__temp_val__20926_22055,description__20276__auto___22053))
,false),speclj.components.new_characteristic.call(null,"finds moves with higher potential for winning",((function (_STAR_parent_description_STAR__orig_val__22021_22354,_STAR_parent_description_STAR__temp_val__22022_22355,description__20276__auto____$1,_STAR_parent_description_STAR__orig_val__20925_22054,_STAR_parent_description_STAR__temp_val__20926_22055,description__20276__auto___22053){
return (function (){
var expected__20413__auto___22360 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [(24),null,(6),null,(12),null,(18),null], null), null);
var actual__20414__auto___22361 = tic_tac_toe.ai.minimax.get_relevant_moves.call(null,new cljs.core.PersistentVector(null, 27, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),new cljs.core.Keyword(null,"x","x",2099068185),(3),(4),(5),(6),(7),(8),(9),(10),(11),(12),(13),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"o","o",-1350007228),(16),(17),(18),(19),(20),(21),(22),(23),(24),(25),(26),(27)], null),new cljs.core.Keyword(null,"o","o",-1350007228));
if(cljs.core._EQ_.call(null,expected__20413__auto___22360,actual__20414__auto___22361)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__20413__auto___22360;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__20381__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__20381__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__20414__auto___22361;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__20381__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__20381__auto__);
}
})()," (using =)"].join('')));
}

var expected__20413__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 18, [(7),null,(20),null,(27),null,(1),null,(21),null,(25),null,(17),null,(3),null,(12),null,(23),null,(19),null,(11),null,(9),null,(5),null,(16),null,(10),null,(18),null,(8),null], null), null);
var actual__20414__auto__ = tic_tac_toe.ai.minimax.get_relevant_moves.call(null,new cljs.core.PersistentVector(null, 27, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),new cljs.core.Keyword(null,"x","x",2099068185),(3),(4),(5),(6),(7),(8),(9),(10),(11),(12),(13),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"o","o",-1350007228),(16),(17),(18),(19),(20),(21),(22),(23),(24),(25),(26),(27)], null),new cljs.core.Keyword(null,"x","x",2099068185));
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
});})(_STAR_parent_description_STAR__orig_val__22021_22354,_STAR_parent_description_STAR__temp_val__22022_22355,description__20276__auto____$1,_STAR_parent_description_STAR__orig_val__20925_22054,_STAR_parent_description_STAR__temp_val__20926_22055,description__20276__auto___22053))
,false),speclj.components.new_characteristic.call(null,"finds next move",((function (_STAR_parent_description_STAR__orig_val__22021_22354,_STAR_parent_description_STAR__temp_val__22022_22355,description__20276__auto____$1,_STAR_parent_description_STAR__orig_val__20925_22054,_STAR_parent_description_STAR__temp_val__20926_22055,description__20276__auto___22053){
return (function (){
var expected__20413__auto___22362 = (7);
var actual__20414__auto___22363 = tic_tac_toe.ai.minimax.find_best_move_memo.call(null,new cljs.core.PersistentVector(null, 27, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(3),(4),new cljs.core.Keyword(null,"x","x",2099068185),(6),(7),(8),(9),(10),(11),(12),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"o","o",-1350007228),(15),(16),(17),(18),(19),(20),(21),(22),(23),(24),(25),(26),(27)], null),new cljs.core.Keyword(null,"o","o",-1350007228),false);
if(cljs.core._EQ_.call(null,expected__20413__auto___22362,actual__20414__auto___22363)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__20413__auto___22362;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__20381__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__20381__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__20414__auto___22363;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__20381__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__20381__auto__);
}
})()," (using =)"].join('')));
}

var expected__20413__auto___22364 = (1);
var actual__20414__auto___22365 = tic_tac_toe.ai.minimax.find_best_move_memo.call(null,new cljs.core.PersistentVector(null, 27, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(3),new cljs.core.Keyword(null,"x","x",2099068185),(5),(6),(7),(8),(9),(10),(11),(12),(13),new cljs.core.Keyword(null,"o","o",-1350007228),(15),new cljs.core.Keyword(null,"x","x",2099068185),(17),(18),(19),(20),(21),(22),(23),(24),(25),(26),(27)], null),new cljs.core.Keyword(null,"o","o",-1350007228),false);
if(cljs.core._EQ_.call(null,expected__20413__auto___22364,actual__20414__auto___22365)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__20413__auto___22364;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__20381__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__20381__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__20414__auto___22365;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__20381__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__20381__auto__);
}
})()," (using =)"].join('')));
}

var expected__20413__auto___22394 = (7);
var actual__20414__auto___22395 = tic_tac_toe.ai.minimax.find_best_move_memo.call(null,new cljs.core.PersistentVector(null, 27, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(3),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"o","o",-1350007228),new cljs.core.Keyword(null,"x","x",2099068185),(7),(8),(9),(10),(11),(12),(13),new cljs.core.Keyword(null,"o","o",-1350007228),(15),new cljs.core.Keyword(null,"x","x",2099068185),(17),(18),(19),(20),(21),new cljs.core.Keyword(null,"o","o",-1350007228),new cljs.core.Keyword(null,"x","x",2099068185),(24),(25),(26),(27)], null),new cljs.core.Keyword(null,"o","o",-1350007228),false);
if(cljs.core._EQ_.call(null,expected__20413__auto___22394,actual__20414__auto___22395)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__20413__auto___22394;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__20381__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__20381__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__20414__auto___22395;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__20381__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__20381__auto__);
}
})()," (using =)"].join('')));
}

var expected__20413__auto___22396 = (7);
var actual__20414__auto___22397 = tic_tac_toe.ai.minimax.find_best_move_memo.call(null,new cljs.core.PersistentVector(null, 27, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(3),(4),new cljs.core.Keyword(null,"x","x",2099068185),(6),(7),(8),(9),(10),(11),new cljs.core.Keyword(null,"x","x",2099068185),(13),new cljs.core.Keyword(null,"o","o",-1350007228),(15),(16),(17),(18),(19),(20),(21),(22),(23),(24),(25),(26),(27)], null),new cljs.core.Keyword(null,"o","o",-1350007228),false);
if(cljs.core._EQ_.call(null,expected__20413__auto___22396,actual__20414__auto___22397)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__20413__auto___22396;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__20381__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__20381__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__20414__auto___22397;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__20381__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__20381__auto__);
}
})()," (using =)"].join('')));
}

var expected__20413__auto___22398 = (24);
var actual__20414__auto___22399 = tic_tac_toe.ai.minimax.find_best_move_memo.call(null,new cljs.core.PersistentVector(null, 27, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),new cljs.core.Keyword(null,"x","x",2099068185),(4),(5),(6),(7),(8),(9),(10),(11),(12),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"o","o",-1350007228),new cljs.core.Keyword(null,"o","o",-1350007228),(16),(17),(18),(19),(20),(21),(22),(23),(24),(25),(26),new cljs.core.Keyword(null,"x","x",2099068185)], null),new cljs.core.Keyword(null,"o","o",-1350007228),false);
if(cljs.core._EQ_.call(null,expected__20413__auto___22398,actual__20414__auto___22399)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__20413__auto___22398;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__20381__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__20381__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__20414__auto___22399;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__20381__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__20381__auto__);
}
})()," (using =)"].join('')));
}

var expected__20413__auto___22400 = (7);
var actual__20414__auto___22401 = tic_tac_toe.ai.minimax.find_best_move_memo.call(null,new cljs.core.PersistentVector(null, 27, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(3),(4),(5),new cljs.core.Keyword(null,"x","x",2099068185),(7),(8),new cljs.core.Keyword(null,"o","o",-1350007228),(10),(11),(12),(13),new cljs.core.Keyword(null,"o","o",-1350007228),(15),(16),new cljs.core.Keyword(null,"x","x",2099068185),(18),new cljs.core.Keyword(null,"x","x",2099068185),(20),(21),new cljs.core.Keyword(null,"o","o",-1350007228),(23),(24),new cljs.core.Keyword(null,"x","x",2099068185),(26),(27)], null),new cljs.core.Keyword(null,"o","o",-1350007228),false);
if(cljs.core._EQ_.call(null,expected__20413__auto___22400,actual__20414__auto___22401)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__20413__auto___22400;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__20381__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__20381__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__20414__auto___22401;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__20381__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__20381__auto__);
}
})()," (using =)"].join('')));
}

var expected__20413__auto___22402 = (7);
var actual__20414__auto___22403 = tic_tac_toe.ai.minimax.find_best_move_memo.call(null,new cljs.core.PersistentVector(null, 27, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),(2),(3),(4),(5),(6),(7),(8),(9),(10),(11),(12),(13),new cljs.core.Keyword(null,"o","o",-1350007228),new cljs.core.Keyword(null,"x","x",2099068185),(16),(17),(18),(19),(20),(21),new cljs.core.Keyword(null,"x","x",2099068185),(23),(24),(25),(26),new cljs.core.Keyword(null,"o","o",-1350007228)], null),new cljs.core.Keyword(null,"o","o",-1350007228),false);
if(cljs.core._EQ_.call(null,expected__20413__auto___22402,actual__20414__auto___22403)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__20413__auto___22402;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__20381__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__20381__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__20414__auto___22403;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__20381__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__20381__auto__);
}
})()," (using =)"].join('')));
}

var expected__20413__auto___22404 = (25);
var actual__20414__auto___22405 = tic_tac_toe.ai.minimax.find_best_move_memo.call(null,new cljs.core.PersistentVector(null, 27, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(3),(4),(5),(6),(7),(8),(9),(10),(11),(12),(13),new cljs.core.Keyword(null,"o","o",-1350007228),new cljs.core.Keyword(null,"x","x",2099068185),(16),(17),(18),(19),(20),(21),new cljs.core.Keyword(null,"x","x",2099068185),(23),(24),(25),(26),(27)], null),new cljs.core.Keyword(null,"o","o",-1350007228),false);
if(cljs.core._EQ_.call(null,expected__20413__auto___22404,actual__20414__auto___22405)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__20413__auto___22404;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__20381__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__20381__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__20414__auto___22405;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__20381__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__20381__auto__);
}
})()," (using =)"].join('')));
}

var expected__20413__auto___22406 = (27);
var actual__20414__auto___22407 = tic_tac_toe.ai.minimax.find_best_move_memo.call(null,new cljs.core.PersistentVector(null, 27, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(3),(4),(5),(6),new cljs.core.Keyword(null,"x","x",2099068185),(8),(9),(10),(11),(12),(13),new cljs.core.Keyword(null,"o","o",-1350007228),(15),(16),(17),new cljs.core.Keyword(null,"x","x",2099068185),(19),(20),(21),(22),(23),(24),(25),(26),(27)], null),new cljs.core.Keyword(null,"o","o",-1350007228),false);
if(cljs.core._EQ_.call(null,expected__20413__auto___22406,actual__20414__auto___22407)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__20413__auto___22406;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__20381__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__20381__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__20414__auto___22407;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__20381__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__20381__auto__);
}
})()," (using =)"].join('')));
}

var expected__20413__auto___22408 = (19);
var actual__20414__auto___22409 = tic_tac_toe.ai.minimax.find_best_move_memo.call(null,new cljs.core.PersistentVector(null, 27, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(3),(4),(5),(6),(7),new cljs.core.Keyword(null,"x","x",2099068185),(9),(10),new cljs.core.Keyword(null,"x","x",2099068185),(12),(13),new cljs.core.Keyword(null,"o","o",-1350007228),(15),(16),new cljs.core.Keyword(null,"o","o",-1350007228),(18),(19),new cljs.core.Keyword(null,"o","o",-1350007228),(21),(22),new cljs.core.Keyword(null,"x","x",2099068185),(24),(25),new cljs.core.Keyword(null,"x","x",2099068185),(27)], null),new cljs.core.Keyword(null,"o","o",-1350007228),false);
if(cljs.core._EQ_.call(null,expected__20413__auto___22408,actual__20414__auto___22409)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__20413__auto___22408;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__20381__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__20381__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__20414__auto___22409;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__20381__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__20381__auto__);
}
})()," (using =)"].join('')));
}

var expected__20413__auto___22410 = (7);
var actual__20414__auto___22411 = tic_tac_toe.ai.minimax.find_best_move_memo.call(null,new cljs.core.PersistentVector(null, 27, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"o","o",-1350007228),new cljs.core.Keyword(null,"x","x",2099068185),(3),(4),(5),(6),(7),(8),(9),(10),(11),(12),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"o","o",-1350007228),(15),(16),(17),(18),(19),(20),(21),(22),(23),(24),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"o","o",-1350007228),new cljs.core.Keyword(null,"x","x",2099068185)], null),new cljs.core.Keyword(null,"o","o",-1350007228),false);
if(cljs.core._EQ_.call(null,expected__20413__auto___22410,actual__20414__auto___22411)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__20413__auto___22410;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__20381__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__20381__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__20414__auto___22411;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__20381__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__20381__auto__);
}
})()," (using =)"].join('')));
}

var expected__20413__auto___22412 = (7);
var actual__20414__auto___22413 = tic_tac_toe.ai.minimax.find_best_move_memo.call(null,new cljs.core.PersistentVector(null, 27, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),new cljs.core.Keyword(null,"x","x",2099068185),(4),(5),(6),(7),(8),(9),(10),(11),(12),(13),new cljs.core.Keyword(null,"o","o",-1350007228),(15),(16),(17),new cljs.core.Keyword(null,"x","x",2099068185),(19),(20),(21),(22),(23),(24),(25),(26),(27)], null),new cljs.core.Keyword(null,"o","o",-1350007228),false);
if(cljs.core._EQ_.call(null,expected__20413__auto___22412,actual__20414__auto___22413)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__20413__auto___22412;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__20381__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__20381__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__20414__auto___22413;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__20381__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__20381__auto__);
}
})()," (using =)"].join('')));
}

var expected__20413__auto___22414 = (20);
var actual__20414__auto___22415 = tic_tac_toe.ai.minimax.find_best_move_memo.call(null,new cljs.core.PersistentVector(null, 27, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),new cljs.core.Keyword(null,"x","x",2099068185),(4),(5),new cljs.core.Keyword(null,"o","o",-1350007228),(7),(8),new cljs.core.Keyword(null,"x","x",2099068185),(10),new cljs.core.Keyword(null,"x","x",2099068185),(12),(13),new cljs.core.Keyword(null,"o","o",-1350007228),(15),(16),(17),(18),new cljs.core.Keyword(null,"o","o",-1350007228),(20),(21),new cljs.core.Keyword(null,"x","x",2099068185),(23),(24),(25),(26),(27)], null),new cljs.core.Keyword(null,"o","o",-1350007228),false);
if(cljs.core._EQ_.call(null,expected__20413__auto___22414,actual__20414__auto___22415)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__20413__auto___22414;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__20381__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__20381__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__20414__auto___22415;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__20381__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__20381__auto__);
}
})()," (using =)"].join('')));
}

var expected__20413__auto___22416 = (21);
var actual__20414__auto___22417 = tic_tac_toe.ai.minimax.find_best_move_memo.call(null,new cljs.core.PersistentVector(null, 27, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"o","o",-1350007228),new cljs.core.Keyword(null,"x","x",2099068185),(4),(5),(6),(7),(8),(9),(10),(11),(12),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"o","o",-1350007228),(15),(16),(17),(18),(19),(20),(21),(22),(23),(24),new cljs.core.Keyword(null,"o","o",-1350007228),new cljs.core.Keyword(null,"x","x",2099068185),(27)], null),new cljs.core.Keyword(null,"o","o",-1350007228),false);
if(cljs.core._EQ_.call(null,expected__20413__auto___22416,actual__20414__auto___22417)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__20413__auto___22416;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__20381__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__20381__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__20414__auto___22417;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__20381__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__20381__auto__);
}
})()," (using =)"].join('')));
}

var expected__20413__auto___22418 = (23);
var actual__20414__auto___22419 = tic_tac_toe.ai.minimax.find_best_move_memo.call(null,new cljs.core.PersistentVector(null, 27, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(3),(4),(5),(6),(7),(8),(9),(10),(11),(12),(13),new cljs.core.Keyword(null,"x","x",2099068185),(15),(16),(17),(18),(19),(20),(21),(22),(23),(24),(25),(26),(27)], null),new cljs.core.Keyword(null,"o","o",-1350007228),false);
if(cljs.core._EQ_.call(null,expected__20413__auto___22418,actual__20414__auto___22419)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__20413__auto___22418;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__20381__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__20381__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__20414__auto___22419;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__20381__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__20381__auto__);
}
})()," (using =)"].join('')));
}

var expected__20413__auto__ = (3);
var actual__20414__auto__ = tic_tac_toe.ai.minimax.find_best_move_memo.call(null,new cljs.core.PersistentVector(null, 27, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),(2),(3),new cljs.core.Keyword(null,"x","x",2099068185),(5),(6),new cljs.core.Keyword(null,"o","o",-1350007228),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"o","o",-1350007228),new cljs.core.Keyword(null,"o","o",-1350007228),(11),(12),(13),new cljs.core.Keyword(null,"x","x",2099068185),(15),(16),(17),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"x","x",2099068185),(20),(21),(22),new cljs.core.Keyword(null,"o","o",-1350007228),(24),(25),(26),new cljs.core.Keyword(null,"o","o",-1350007228)], null),new cljs.core.Keyword(null,"o","o",-1350007228),false);
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
});})(_STAR_parent_description_STAR__orig_val__22021_22354,_STAR_parent_description_STAR__temp_val__22022_22355,description__20276__auto____$1,_STAR_parent_description_STAR__orig_val__20925_22054,_STAR_parent_description_STAR__temp_val__20926_22055,description__20276__auto___22053))
,false)],null)));
var chunk__22024_22357 = null;
var count__22025_22358 = (0);
var i__22026_22359 = (0);
while(true){
if((i__22026_22359 < count__22025_22358)){
var component__20277__auto___22420 = cljs.core._nth.call(null,chunk__22024_22357,i__22026_22359);
speclj.components.install.call(null,component__20277__auto___22420,description__20276__auto____$1);


var G__22421 = seq__22023_22356;
var G__22422 = chunk__22024_22357;
var G__22423 = count__22025_22358;
var G__22424 = (i__22026_22359 + (1));
seq__22023_22356 = G__22421;
chunk__22024_22357 = G__22422;
count__22025_22358 = G__22423;
i__22026_22359 = G__22424;
continue;
} else {
var temp__5804__auto___22425 = cljs.core.seq.call(null,seq__22023_22356);
if(temp__5804__auto___22425){
var seq__22023_22426__$1 = temp__5804__auto___22425;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22023_22426__$1)){
var c__5525__auto___22427 = cljs.core.chunk_first.call(null,seq__22023_22426__$1);
var G__22428 = cljs.core.chunk_rest.call(null,seq__22023_22426__$1);
var G__22429 = c__5525__auto___22427;
var G__22430 = cljs.core.count.call(null,c__5525__auto___22427);
var G__22431 = (0);
seq__22023_22356 = G__22428;
chunk__22024_22357 = G__22429;
count__22025_22358 = G__22430;
i__22026_22359 = G__22431;
continue;
} else {
var component__20277__auto___22432 = cljs.core.first.call(null,seq__22023_22426__$1);
speclj.components.install.call(null,component__20277__auto___22432,description__20276__auto____$1);


var G__22433 = cljs.core.next.call(null,seq__22023_22426__$1);
var G__22434 = null;
var G__22435 = (0);
var G__22436 = (0);
seq__22023_22356 = G__22433;
chunk__22024_22357 = G__22434;
count__22025_22358 = G__22435;
i__22026_22359 = G__22436;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__22021_22354);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__20276__auto____$1);
}

return description__20276__auto____$1;
})()],null)));
var chunk__20928_22057 = null;
var count__20929_22058 = (0);
var i__20930_22059 = (0);
while(true){
if((i__20930_22059 < count__20929_22058)){
var component__20277__auto___22437 = cljs.core._nth.call(null,chunk__20928_22057,i__20930_22059);
speclj.components.install.call(null,component__20277__auto___22437,description__20276__auto___22053);


var G__22438 = seq__20927_22056;
var G__22439 = chunk__20928_22057;
var G__22440 = count__20929_22058;
var G__22441 = (i__20930_22059 + (1));
seq__20927_22056 = G__22438;
chunk__20928_22057 = G__22439;
count__20929_22058 = G__22440;
i__20930_22059 = G__22441;
continue;
} else {
var temp__5804__auto___22442 = cljs.core.seq.call(null,seq__20927_22056);
if(temp__5804__auto___22442){
var seq__20927_22443__$1 = temp__5804__auto___22442;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20927_22443__$1)){
var c__5525__auto___22444 = cljs.core.chunk_first.call(null,seq__20927_22443__$1);
var G__22445 = cljs.core.chunk_rest.call(null,seq__20927_22443__$1);
var G__22446 = c__5525__auto___22444;
var G__22447 = cljs.core.count.call(null,c__5525__auto___22444);
var G__22448 = (0);
seq__20927_22056 = G__22445;
chunk__20928_22057 = G__22446;
count__20929_22058 = G__22447;
i__20930_22059 = G__22448;
continue;
} else {
var component__20277__auto___22449 = cljs.core.first.call(null,seq__20927_22443__$1);
speclj.components.install.call(null,component__20277__auto___22449,description__20276__auto___22053);


var G__22450 = cljs.core.next.call(null,seq__20927_22443__$1);
var G__22451 = null;
var G__22452 = (0);
var G__22453 = (0);
seq__20927_22056 = G__22450;
chunk__20928_22057 = G__22451;
count__20929_22058 = G__22452;
i__20930_22059 = G__22453;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__20925_22054);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__20276__auto___22053);
}


//# sourceMappingURL=minimax_spec.js.map
