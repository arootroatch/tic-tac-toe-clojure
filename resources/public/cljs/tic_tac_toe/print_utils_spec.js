// Compiled by ClojureScript 1.11.132 {:optimizations :none}
goog.provide('tic_tac_toe.print_utils_spec');
goog.require('cljs.core');
goog.require('speclj.core');
goog.require('speclj.stub');
goog.require('tic_tac_toe.print_utils');
var description__9652__auto___12838 = speclj.components.new_description.call(null,"utility functions",false,"tic-tac-toe.print-utils-spec");
var _STAR_parent_description_STAR__orig_val__12432_12839 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__12433_12840 = description__9652__auto___12838;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__12433_12840);

try{var seq__12434_12841 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,6,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_around.call(null,((function (_STAR_parent_description_STAR__orig_val__12432_12839,_STAR_parent_description_STAR__temp_val__12433_12840,description__9652__auto___12838){
return (function (it__10022__auto__){
var _STAR_stubbed_invocations_STAR__orig_val__12638 = speclj.stub._STAR_stubbed_invocations_STAR_;
var _STAR_stubbed_invocations_STAR__temp_val__12639 = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
(speclj.stub._STAR_stubbed_invocations_STAR_ = _STAR_stubbed_invocations_STAR__temp_val__12639);

try{return it__10022__auto__.call(null);
}finally {(speclj.stub._STAR_stubbed_invocations_STAR_ = _STAR_stubbed_invocations_STAR__orig_val__12638);
}});})(_STAR_parent_description_STAR__orig_val__12432_12839,_STAR_parent_description_STAR__temp_val__12433_12840,description__9652__auto___12838))
),(function (){var empty_3x3 = new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(3),(4),(5),(6),(7),(8),(9)], null);
var empty_4x4 = new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(3),(4),(5),(6),(7),(8),(9),(10),(11),(12),(13),(14),(15),(16)], null);
var description__9652__auto___12845__$1 = speclj.components.new_description.call(null,"display-invalid-move-error",false,"tic-tac-toe.print-utils-spec");
var _STAR_parent_description_STAR__orig_val__12640_12846 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__12641_12847 = description__9652__auto___12845__$1;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__12641_12847);

try{var seq__12642_12848 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_characteristic.call(null,"asks for a valid move",((function (_STAR_parent_description_STAR__orig_val__12640_12846,_STAR_parent_description_STAR__temp_val__12641_12847,description__9652__auto___12845__$1,empty_3x3,empty_4x4,_STAR_parent_description_STAR__orig_val__12432_12839,_STAR_parent_description_STAR__temp_val__12433_12840,description__9652__auto___12838){
return (function (){
var expected__9789__auto__ = "Please choose an empty cell\n";
var actual__9790__auto__ = (function (){var sb__5647__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__12650_12852 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__12651_12853 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__12652_12854 = true;
var _STAR_print_fn_STAR__temp_val__12653_12855 = (function (x__5648__auto__){
return sb__5647__auto__.append(x__5648__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__12652_12854);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__12653_12855);

try{tic_tac_toe.print_utils.display_invalid_move_error.call(null);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__12651_12853);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__12650_12852);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5647__auto__);
})();
if(cljs.core._EQ_.call(null,expected__9789__auto__,actual__9790__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__9789__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9757__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9757__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__9790__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9757__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9757__auto__);
}
})()," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__12640_12846,_STAR_parent_description_STAR__temp_val__12641_12847,description__9652__auto___12845__$1,empty_3x3,empty_4x4,_STAR_parent_description_STAR__orig_val__12432_12839,_STAR_parent_description_STAR__temp_val__12433_12840,description__9652__auto___12838))
,false)],null)));
var chunk__12643_12849 = null;
var count__12644_12850 = (0);
var i__12645_12851 = (0);
while(true){
if((i__12645_12851 < count__12644_12850)){
var component__9653__auto___12856 = cljs.core._nth.call(null,chunk__12643_12849,i__12645_12851);
speclj.components.install.call(null,component__9653__auto___12856,description__9652__auto___12845__$1);


var G__12857 = seq__12642_12848;
var G__12858 = chunk__12643_12849;
var G__12859 = count__12644_12850;
var G__12860 = (i__12645_12851 + (1));
seq__12642_12848 = G__12857;
chunk__12643_12849 = G__12858;
count__12644_12850 = G__12859;
i__12645_12851 = G__12860;
continue;
} else {
var temp__5804__auto___12861 = cljs.core.seq.call(null,seq__12642_12848);
if(temp__5804__auto___12861){
var seq__12642_12862__$1 = temp__5804__auto___12861;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12642_12862__$1)){
var c__5525__auto___12863 = cljs.core.chunk_first.call(null,seq__12642_12862__$1);
var G__12864 = cljs.core.chunk_rest.call(null,seq__12642_12862__$1);
var G__12865 = c__5525__auto___12863;
var G__12866 = cljs.core.count.call(null,c__5525__auto___12863);
var G__12867 = (0);
seq__12642_12848 = G__12864;
chunk__12643_12849 = G__12865;
count__12644_12850 = G__12866;
i__12645_12851 = G__12867;
continue;
} else {
var component__9653__auto___12868 = cljs.core.first.call(null,seq__12642_12862__$1);
speclj.components.install.call(null,component__9653__auto___12868,description__9652__auto___12845__$1);


var G__12869 = cljs.core.next.call(null,seq__12642_12862__$1);
var G__12870 = null;
var G__12871 = (0);
var G__12872 = (0);
seq__12642_12848 = G__12869;
chunk__12643_12849 = G__12870;
count__12644_12850 = G__12871;
i__12645_12851 = G__12872;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__12640_12846);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__9652__auto___12845__$1);
}


var description__9652__auto___12873__$1 = speclj.components.new_description.call(null,"prompt-user-for-move",false,"tic-tac-toe.print-utils-spec");
var _STAR_parent_description_STAR__orig_val__12654_12874 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__12655_12875 = description__9652__auto___12873__$1;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__12655_12875);

try{var seq__12656_12876 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_characteristic.call(null,"asks user to input a move",((function (_STAR_parent_description_STAR__orig_val__12654_12874,_STAR_parent_description_STAR__temp_val__12655_12875,description__9652__auto___12873__$1,empty_3x3,empty_4x4,_STAR_parent_description_STAR__orig_val__12432_12839,_STAR_parent_description_STAR__temp_val__12433_12840,description__9652__auto___12838){
return (function (){
var expected__9789__auto__ = "Please enter your move (type 1-9 and hit enter):\n";
var actual__9790__auto__ = (function (){var sb__5647__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__12680_12880 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__12681_12881 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__12682_12882 = true;
var _STAR_print_fn_STAR__temp_val__12683_12883 = (function (x__5648__auto__){
return sb__5647__auto__.append(x__5648__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__12682_12882);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__12683_12883);

try{tic_tac_toe.print_utils.prompt_user_for_move.call(null,new cljs.core.Keyword(null,"o","o",-1350007228),(2),empty_3x3);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__12681_12881);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__12680_12880);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5647__auto__);
})();
if(cljs.core._EQ_.call(null,expected__9789__auto__,actual__9790__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__9789__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9757__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9757__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__9790__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9757__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9757__auto__);
}
})()," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__12654_12874,_STAR_parent_description_STAR__temp_val__12655_12875,description__9652__auto___12873__$1,empty_3x3,empty_4x4,_STAR_parent_description_STAR__orig_val__12432_12839,_STAR_parent_description_STAR__temp_val__12433_12840,description__9652__auto___12838))
,false),speclj.components.new_characteristic.call(null,"says which player's turn it is if human vs human",((function (_STAR_parent_description_STAR__orig_val__12654_12874,_STAR_parent_description_STAR__temp_val__12655_12875,description__9652__auto___12873__$1,empty_3x3,empty_4x4,_STAR_parent_description_STAR__orig_val__12432_12839,_STAR_parent_description_STAR__temp_val__12433_12840,description__9652__auto___12838){
return (function (){
var expected__9789__auto___12884 = "O's turn!\nPlease enter your move (type 1-9 and hit enter):\n";
var actual__9790__auto___12885 = (function (){var sb__5647__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__12684_12886 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__12685_12887 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__12686_12888 = true;
var _STAR_print_fn_STAR__temp_val__12687_12889 = (function (x__5648__auto__){
return sb__5647__auto__.append(x__5648__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__12686_12888);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__12687_12889);

try{tic_tac_toe.print_utils.prompt_user_for_move.call(null,new cljs.core.Keyword(null,"o","o",-1350007228),(1),empty_3x3);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__12685_12887);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__12684_12886);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5647__auto__);
})();
if(cljs.core._EQ_.call(null,expected__9789__auto___12884,actual__9790__auto___12885)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__9789__auto___12884;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9757__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9757__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__9790__auto___12885;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9757__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9757__auto__);
}
})()," (using =)"].join('')));
}

var expected__9789__auto__ = "X's turn!\nPlease enter your move (type 1-9 and hit enter):\n";
var actual__9790__auto__ = (function (){var sb__5647__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__12688_12890 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__12689_12891 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__12690_12892 = true;
var _STAR_print_fn_STAR__temp_val__12691_12893 = (function (x__5648__auto__){
return sb__5647__auto__.append(x__5648__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__12690_12892);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__12691_12893);

try{tic_tac_toe.print_utils.prompt_user_for_move.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(1),empty_3x3);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__12689_12891);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__12688_12890);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5647__auto__);
})();
if(cljs.core._EQ_.call(null,expected__9789__auto__,actual__9790__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__9789__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9757__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9757__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__9790__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9757__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9757__auto__);
}
})()," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__12654_12874,_STAR_parent_description_STAR__temp_val__12655_12875,description__9652__auto___12873__$1,empty_3x3,empty_4x4,_STAR_parent_description_STAR__orig_val__12432_12839,_STAR_parent_description_STAR__temp_val__12433_12840,description__9652__auto___12838))
,false),speclj.components.new_characteristic.call(null,"specifies 1-16 if board is 4x4",((function (_STAR_parent_description_STAR__orig_val__12654_12874,_STAR_parent_description_STAR__temp_val__12655_12875,description__9652__auto___12873__$1,empty_3x3,empty_4x4,_STAR_parent_description_STAR__orig_val__12432_12839,_STAR_parent_description_STAR__temp_val__12433_12840,description__9652__auto___12838){
return (function (){
var expected__9789__auto___12894 = "Please enter your move (type 1-16 and hit enter):\n";
var actual__9790__auto___12895 = (function (){var sb__5647__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__12692_12896 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__12693_12897 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__12694_12898 = true;
var _STAR_print_fn_STAR__temp_val__12695_12899 = (function (x__5648__auto__){
return sb__5647__auto__.append(x__5648__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__12694_12898);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__12695_12899);

try{tic_tac_toe.print_utils.prompt_user_for_move.call(null,new cljs.core.Keyword(null,"o","o",-1350007228),(2),empty_4x4);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__12693_12897);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__12692_12896);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5647__auto__);
})();
if(cljs.core._EQ_.call(null,expected__9789__auto___12894,actual__9790__auto___12895)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__9789__auto___12894;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9757__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9757__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__9790__auto___12895;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9757__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9757__auto__);
}
})()," (using =)"].join('')));
}

var expected__9789__auto__ = "O's turn!\nPlease enter your move (type 1-16 and hit enter):\n";
var actual__9790__auto__ = (function (){var sb__5647__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__12696_12900 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__12697_12901 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__12698_12902 = true;
var _STAR_print_fn_STAR__temp_val__12699_12903 = (function (x__5648__auto__){
return sb__5647__auto__.append(x__5648__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__12698_12902);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__12699_12903);

try{tic_tac_toe.print_utils.prompt_user_for_move.call(null,new cljs.core.Keyword(null,"o","o",-1350007228),(1),empty_4x4);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__12697_12901);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__12696_12900);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5647__auto__);
})();
if(cljs.core._EQ_.call(null,expected__9789__auto__,actual__9790__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__9789__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9757__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9757__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__9790__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9757__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9757__auto__);
}
})()," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__12654_12874,_STAR_parent_description_STAR__temp_val__12655_12875,description__9652__auto___12873__$1,empty_3x3,empty_4x4,_STAR_parent_description_STAR__orig_val__12432_12839,_STAR_parent_description_STAR__temp_val__12433_12840,description__9652__auto___12838))
,false)],null)));
var chunk__12657_12877 = null;
var count__12658_12878 = (0);
var i__12659_12879 = (0);
while(true){
if((i__12659_12879 < count__12658_12878)){
var component__9653__auto___12904 = cljs.core._nth.call(null,chunk__12657_12877,i__12659_12879);
speclj.components.install.call(null,component__9653__auto___12904,description__9652__auto___12873__$1);


var G__12905 = seq__12656_12876;
var G__12906 = chunk__12657_12877;
var G__12907 = count__12658_12878;
var G__12908 = (i__12659_12879 + (1));
seq__12656_12876 = G__12905;
chunk__12657_12877 = G__12906;
count__12658_12878 = G__12907;
i__12659_12879 = G__12908;
continue;
} else {
var temp__5804__auto___12909 = cljs.core.seq.call(null,seq__12656_12876);
if(temp__5804__auto___12909){
var seq__12656_12910__$1 = temp__5804__auto___12909;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12656_12910__$1)){
var c__5525__auto___12911 = cljs.core.chunk_first.call(null,seq__12656_12910__$1);
var G__12912 = cljs.core.chunk_rest.call(null,seq__12656_12910__$1);
var G__12913 = c__5525__auto___12911;
var G__12914 = cljs.core.count.call(null,c__5525__auto___12911);
var G__12915 = (0);
seq__12656_12876 = G__12912;
chunk__12657_12877 = G__12913;
count__12658_12878 = G__12914;
i__12659_12879 = G__12915;
continue;
} else {
var component__9653__auto___12916 = cljs.core.first.call(null,seq__12656_12910__$1);
speclj.components.install.call(null,component__9653__auto___12916,description__9652__auto___12873__$1);


var G__12917 = cljs.core.next.call(null,seq__12656_12910__$1);
var G__12918 = null;
var G__12919 = (0);
var G__12920 = (0);
seq__12656_12876 = G__12917;
chunk__12657_12877 = G__12918;
count__12658_12878 = G__12919;
i__12659_12879 = G__12920;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__12654_12874);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__9652__auto___12873__$1);
}


var description__9652__auto___12921__$1 = speclj.components.new_description.call(null,"display-bot-thinking",false,"tic-tac-toe.print-utils-spec");
var _STAR_parent_description_STAR__orig_val__12700_12922 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__12701_12923 = description__9652__auto___12921__$1;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__12701_12923);

try{var seq__12702_12924 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_characteristic.call(null,"prints message to let the user know the computer is processing",((function (_STAR_parent_description_STAR__orig_val__12700_12922,_STAR_parent_description_STAR__temp_val__12701_12923,description__9652__auto___12921__$1,empty_3x3,empty_4x4,_STAR_parent_description_STAR__orig_val__12432_12839,_STAR_parent_description_STAR__temp_val__12433_12840,description__9652__auto___12838){
return (function (){
var expected__9789__auto___12928 = "Player X is thinking...";
var actual__9790__auto___12929 = (function (){var sb__5647__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__12714_12930 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__12715_12931 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__12716_12932 = true;
var _STAR_print_fn_STAR__temp_val__12717_12933 = (function (x__5648__auto__){
return sb__5647__auto__.append(x__5648__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__12716_12932);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__12717_12933);

try{tic_tac_toe.print_utils.display_bot_thinking_message.call(null,new cljs.core.Keyword(null,"x","x",2099068185));
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__12715_12931);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__12714_12930);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5647__auto__);
})();
if(cljs.core._EQ_.call(null,expected__9789__auto___12928,actual__9790__auto___12929)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__9789__auto___12928;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9757__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9757__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__9790__auto___12929;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9757__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9757__auto__);
}
})()," (using =)"].join('')));
}

var expected__9789__auto__ = "Player O is thinking...";
var actual__9790__auto__ = (function (){var sb__5647__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__12718_12934 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__12719_12935 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__12720_12936 = true;
var _STAR_print_fn_STAR__temp_val__12721_12937 = (function (x__5648__auto__){
return sb__5647__auto__.append(x__5648__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__12720_12936);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__12721_12937);

try{tic_tac_toe.print_utils.display_bot_thinking_message.call(null,new cljs.core.Keyword(null,"o","o",-1350007228));
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__12719_12935);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__12718_12934);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5647__auto__);
})();
if(cljs.core._EQ_.call(null,expected__9789__auto__,actual__9790__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__9789__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9757__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9757__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__9790__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9757__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9757__auto__);
}
})()," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__12700_12922,_STAR_parent_description_STAR__temp_val__12701_12923,description__9652__auto___12921__$1,empty_3x3,empty_4x4,_STAR_parent_description_STAR__orig_val__12432_12839,_STAR_parent_description_STAR__temp_val__12433_12840,description__9652__auto___12838))
,false)],null)));
var chunk__12703_12925 = null;
var count__12704_12926 = (0);
var i__12705_12927 = (0);
while(true){
if((i__12705_12927 < count__12704_12926)){
var component__9653__auto___12938 = cljs.core._nth.call(null,chunk__12703_12925,i__12705_12927);
speclj.components.install.call(null,component__9653__auto___12938,description__9652__auto___12921__$1);


var G__12939 = seq__12702_12924;
var G__12940 = chunk__12703_12925;
var G__12941 = count__12704_12926;
var G__12942 = (i__12705_12927 + (1));
seq__12702_12924 = G__12939;
chunk__12703_12925 = G__12940;
count__12704_12926 = G__12941;
i__12705_12927 = G__12942;
continue;
} else {
var temp__5804__auto___12943 = cljs.core.seq.call(null,seq__12702_12924);
if(temp__5804__auto___12943){
var seq__12702_12944__$1 = temp__5804__auto___12943;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12702_12944__$1)){
var c__5525__auto___12945 = cljs.core.chunk_first.call(null,seq__12702_12944__$1);
var G__12946 = cljs.core.chunk_rest.call(null,seq__12702_12944__$1);
var G__12947 = c__5525__auto___12945;
var G__12948 = cljs.core.count.call(null,c__5525__auto___12945);
var G__12949 = (0);
seq__12702_12924 = G__12946;
chunk__12703_12925 = G__12947;
count__12704_12926 = G__12948;
i__12705_12927 = G__12949;
continue;
} else {
var component__9653__auto___12950 = cljs.core.first.call(null,seq__12702_12944__$1);
speclj.components.install.call(null,component__9653__auto___12950,description__9652__auto___12921__$1);


var G__12951 = cljs.core.next.call(null,seq__12702_12944__$1);
var G__12952 = null;
var G__12953 = (0);
var G__12954 = (0);
seq__12702_12924 = G__12951;
chunk__12703_12925 = G__12952;
count__12704_12926 = G__12953;
i__12705_12927 = G__12954;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__12700_12922);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__9652__auto___12921__$1);
}


var description__9652__auto___12955__$1 = speclj.components.new_description.call(null,"display-bot-move-message",false,"tic-tac-toe.print-utils-spec");
var _STAR_parent_description_STAR__orig_val__12722_12956 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__12723_12957 = description__9652__auto___12955__$1;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__12723_12957);

try{var seq__12724_12958 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_characteristic.call(null,"informs human of computer's move",((function (_STAR_parent_description_STAR__orig_val__12722_12956,_STAR_parent_description_STAR__temp_val__12723_12957,description__9652__auto___12955__$1,empty_3x3,empty_4x4,_STAR_parent_description_STAR__orig_val__12432_12839,_STAR_parent_description_STAR__temp_val__12433_12840,description__9652__auto___12838){
return (function (){
var expected__9789__auto__ = "Your opponent plays 5!\n";
var actual__9790__auto__ = (function (){var sb__5647__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__12740_12962 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__12741_12963 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__12742_12964 = true;
var _STAR_print_fn_STAR__temp_val__12743_12965 = (function (x__5648__auto__){
return sb__5647__auto__.append(x__5648__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__12742_12964);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__12743_12965);

try{tic_tac_toe.print_utils.display_bot_move_message.call(null,(5),(2),new cljs.core.Keyword(null,"o","o",-1350007228));
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__12741_12963);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__12740_12962);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5647__auto__);
})();
if(cljs.core._EQ_.call(null,expected__9789__auto__,actual__9790__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__9789__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9757__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9757__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__9790__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9757__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9757__auto__);
}
})()," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__12722_12956,_STAR_parent_description_STAR__temp_val__12723_12957,description__9652__auto___12955__$1,empty_3x3,empty_4x4,_STAR_parent_description_STAR__orig_val__12432_12839,_STAR_parent_description_STAR__temp_val__12433_12840,description__9652__auto___12838))
,false),speclj.components.new_characteristic.call(null,"informs human of first AI's move",((function (_STAR_parent_description_STAR__orig_val__12722_12956,_STAR_parent_description_STAR__temp_val__12723_12957,description__9652__auto___12955__$1,empty_3x3,empty_4x4,_STAR_parent_description_STAR__orig_val__12432_12839,_STAR_parent_description_STAR__temp_val__12433_12840,description__9652__auto___12838){
return (function (){
var expected__9789__auto__ = "X plays 1!\n";
var actual__9790__auto__ = (function (){var sb__5647__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__12744_12966 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__12745_12967 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__12746_12968 = true;
var _STAR_print_fn_STAR__temp_val__12747_12969 = (function (x__5648__auto__){
return sb__5647__auto__.append(x__5648__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__12746_12968);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__12747_12969);

try{tic_tac_toe.print_utils.display_bot_move_message.call(null,(1),(4),new cljs.core.Keyword(null,"x","x",2099068185));
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__12745_12967);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__12744_12966);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5647__auto__);
})();
if(cljs.core._EQ_.call(null,expected__9789__auto__,actual__9790__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__9789__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9757__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9757__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__9790__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9757__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9757__auto__);
}
})()," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__12722_12956,_STAR_parent_description_STAR__temp_val__12723_12957,description__9652__auto___12955__$1,empty_3x3,empty_4x4,_STAR_parent_description_STAR__orig_val__12432_12839,_STAR_parent_description_STAR__temp_val__12433_12840,description__9652__auto___12838))
,false),speclj.components.new_characteristic.call(null,"informs human of second AI's move",((function (_STAR_parent_description_STAR__orig_val__12722_12956,_STAR_parent_description_STAR__temp_val__12723_12957,description__9652__auto___12955__$1,empty_3x3,empty_4x4,_STAR_parent_description_STAR__orig_val__12432_12839,_STAR_parent_description_STAR__temp_val__12433_12840,description__9652__auto___12838){
return (function (){
var expected__9789__auto__ = "O plays 8!\n";
var actual__9790__auto__ = (function (){var sb__5647__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__12748_12970 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__12749_12971 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__12750_12972 = true;
var _STAR_print_fn_STAR__temp_val__12751_12973 = (function (x__5648__auto__){
return sb__5647__auto__.append(x__5648__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__12750_12972);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__12751_12973);

try{tic_tac_toe.print_utils.display_bot_move_message.call(null,(8),(4),new cljs.core.Keyword(null,"o","o",-1350007228));
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__12749_12971);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__12748_12970);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5647__auto__);
})();
if(cljs.core._EQ_.call(null,expected__9789__auto__,actual__9790__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__9789__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9757__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9757__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__9790__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9757__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9757__auto__);
}
})()," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__12722_12956,_STAR_parent_description_STAR__temp_val__12723_12957,description__9652__auto___12955__$1,empty_3x3,empty_4x4,_STAR_parent_description_STAR__orig_val__12432_12839,_STAR_parent_description_STAR__temp_val__12433_12840,description__9652__auto___12838))
,false)],null)));
var chunk__12725_12959 = null;
var count__12726_12960 = (0);
var i__12727_12961 = (0);
while(true){
if((i__12727_12961 < count__12726_12960)){
var component__9653__auto___12974 = cljs.core._nth.call(null,chunk__12725_12959,i__12727_12961);
speclj.components.install.call(null,component__9653__auto___12974,description__9652__auto___12955__$1);


var G__12975 = seq__12724_12958;
var G__12976 = chunk__12725_12959;
var G__12977 = count__12726_12960;
var G__12978 = (i__12727_12961 + (1));
seq__12724_12958 = G__12975;
chunk__12725_12959 = G__12976;
count__12726_12960 = G__12977;
i__12727_12961 = G__12978;
continue;
} else {
var temp__5804__auto___12979 = cljs.core.seq.call(null,seq__12724_12958);
if(temp__5804__auto___12979){
var seq__12724_12980__$1 = temp__5804__auto___12979;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12724_12980__$1)){
var c__5525__auto___12981 = cljs.core.chunk_first.call(null,seq__12724_12980__$1);
var G__12982 = cljs.core.chunk_rest.call(null,seq__12724_12980__$1);
var G__12983 = c__5525__auto___12981;
var G__12984 = cljs.core.count.call(null,c__5525__auto___12981);
var G__12985 = (0);
seq__12724_12958 = G__12982;
chunk__12725_12959 = G__12983;
count__12726_12960 = G__12984;
i__12727_12961 = G__12985;
continue;
} else {
var component__9653__auto___12986 = cljs.core.first.call(null,seq__12724_12980__$1);
speclj.components.install.call(null,component__9653__auto___12986,description__9652__auto___12955__$1);


var G__12987 = cljs.core.next.call(null,seq__12724_12980__$1);
var G__12988 = null;
var G__12989 = (0);
var G__12990 = (0);
seq__12724_12958 = G__12987;
chunk__12725_12959 = G__12988;
count__12726_12960 = G__12989;
i__12727_12961 = G__12990;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__12722_12956);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__9652__auto___12955__$1);
}


var description__9652__auto____$1 = speclj.components.new_description.call(null,"print-board",false,"tic-tac-toe.print-utils-spec");
var _STAR_parent_description_STAR__orig_val__12752_12991 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__12753_12992 = description__9652__auto____$1;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__12753_12992);

try{var seq__12754_12993 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_characteristic.call(null,"prints 3x3 board to the terminal",((function (_STAR_parent_description_STAR__orig_val__12752_12991,_STAR_parent_description_STAR__temp_val__12753_12992,description__9652__auto____$1,empty_3x3,empty_4x4,_STAR_parent_description_STAR__orig_val__12432_12839,_STAR_parent_description_STAR__temp_val__12433_12840,description__9652__auto___12838){
return (function (){
var expected__9789__auto___12997 = [" ",tic_tac_toe.print_utils.purple,cljs.core.str.cljs$core$IFn$_invoke$arity$1((1)),tic_tac_toe.print_utils.reset,"  ",tic_tac_toe.print_utils.purple,cljs.core.str.cljs$core$IFn$_invoke$arity$1((2)),tic_tac_toe.print_utils.reset,"  ",tic_tac_toe.print_utils.purple,cljs.core.str.cljs$core$IFn$_invoke$arity$1((3)),tic_tac_toe.print_utils.reset,"\n"," ",tic_tac_toe.print_utils.purple,cljs.core.str.cljs$core$IFn$_invoke$arity$1((4)),tic_tac_toe.print_utils.reset,"  ",tic_tac_toe.print_utils.purple,cljs.core.str.cljs$core$IFn$_invoke$arity$1((5)),tic_tac_toe.print_utils.reset,"  ",tic_tac_toe.print_utils.purple,cljs.core.str.cljs$core$IFn$_invoke$arity$1((6)),tic_tac_toe.print_utils.reset,"\n"," ",tic_tac_toe.print_utils.purple,cljs.core.str.cljs$core$IFn$_invoke$arity$1((7)),tic_tac_toe.print_utils.reset,"  ",tic_tac_toe.print_utils.purple,cljs.core.str.cljs$core$IFn$_invoke$arity$1((8)),tic_tac_toe.print_utils.reset,"  ",tic_tac_toe.print_utils.purple,cljs.core.str.cljs$core$IFn$_invoke$arity$1((9)),tic_tac_toe.print_utils.reset,"\n\n"].join('');
var actual__9790__auto___12998 = (function (){var sb__5647__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__12778_12999 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__12779_13000 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__12780_13001 = true;
var _STAR_print_fn_STAR__temp_val__12781_13002 = (function (x__5648__auto__){
return sb__5647__auto__.append(x__5648__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__12780_13001);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__12781_13002);

try{tic_tac_toe.print_utils.print_board.call(null,empty_3x3);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__12779_13000);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__12778_12999);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5647__auto__);
})();
if(cljs.core._EQ_.call(null,expected__9789__auto___12997,actual__9790__auto___12998)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__9789__auto___12997;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9757__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9757__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__9790__auto___12998;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9757__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9757__auto__);
}
})()," (using =)"].join('')));
}

var expected__9789__auto__ = [" ",tic_tac_toe.print_utils.purple,cljs.core.str.cljs$core$IFn$_invoke$arity$1((1)),tic_tac_toe.print_utils.reset,"  X  ",tic_tac_toe.print_utils.purple,cljs.core.str.cljs$core$IFn$_invoke$arity$1((3)),tic_tac_toe.print_utils.reset,"\n"," ",tic_tac_toe.print_utils.purple,cljs.core.str.cljs$core$IFn$_invoke$arity$1((4)),tic_tac_toe.print_utils.reset,"  O  ",tic_tac_toe.print_utils.purple,cljs.core.str.cljs$core$IFn$_invoke$arity$1((6)),tic_tac_toe.print_utils.reset,"\n"," O  ",tic_tac_toe.print_utils.purple,cljs.core.str.cljs$core$IFn$_invoke$arity$1((8)),tic_tac_toe.print_utils.reset,"  ",tic_tac_toe.print_utils.purple,cljs.core.str.cljs$core$IFn$_invoke$arity$1((9)),tic_tac_toe.print_utils.reset,"\n\n"].join('');
var actual__9790__auto__ = (function (){var sb__5647__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__12782_13003 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__12783_13004 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__12784_13005 = true;
var _STAR_print_fn_STAR__temp_val__12785_13006 = (function (x__5648__auto__){
return sb__5647__auto__.append(x__5648__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__12784_13005);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__12785_13006);

try{tic_tac_toe.print_utils.print_board.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),new cljs.core.Keyword(null,"x","x",2099068185),(3),(4),new cljs.core.Keyword(null,"o","o",-1350007228),(6),new cljs.core.Keyword(null,"o","o",-1350007228),(8),(9)], null));
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__12783_13004);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__12782_13003);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5647__auto__);
})();
if(cljs.core._EQ_.call(null,expected__9789__auto__,actual__9790__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__9789__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9757__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9757__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__9790__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9757__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9757__auto__);
}
})()," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__12752_12991,_STAR_parent_description_STAR__temp_val__12753_12992,description__9652__auto____$1,empty_3x3,empty_4x4,_STAR_parent_description_STAR__orig_val__12432_12839,_STAR_parent_description_STAR__temp_val__12433_12840,description__9652__auto___12838))
,false),speclj.components.new_characteristic.call(null,"prints 4x4 board to the terminal",((function (_STAR_parent_description_STAR__orig_val__12752_12991,_STAR_parent_description_STAR__temp_val__12753_12992,description__9652__auto____$1,empty_3x3,empty_4x4,_STAR_parent_description_STAR__orig_val__12432_12839,_STAR_parent_description_STAR__temp_val__12433_12840,description__9652__auto___12838){
return (function (){
var expected__9789__auto___13007 = [" ",tic_tac_toe.print_utils.purple,cljs.core.str.cljs$core$IFn$_invoke$arity$1((1)),tic_tac_toe.print_utils.reset,"  ",tic_tac_toe.print_utils.purple,cljs.core.str.cljs$core$IFn$_invoke$arity$1((2)),tic_tac_toe.print_utils.reset,"  ",tic_tac_toe.print_utils.purple,cljs.core.str.cljs$core$IFn$_invoke$arity$1((3)),tic_tac_toe.print_utils.reset,"  ",tic_tac_toe.print_utils.purple,cljs.core.str.cljs$core$IFn$_invoke$arity$1((4)),tic_tac_toe.print_utils.reset,"\n"," ",tic_tac_toe.print_utils.purple,cljs.core.str.cljs$core$IFn$_invoke$arity$1((5)),tic_tac_toe.print_utils.reset,"  ",tic_tac_toe.print_utils.purple,cljs.core.str.cljs$core$IFn$_invoke$arity$1((6)),tic_tac_toe.print_utils.reset,"  ",tic_tac_toe.print_utils.purple,cljs.core.str.cljs$core$IFn$_invoke$arity$1((7)),tic_tac_toe.print_utils.reset,"  ",tic_tac_toe.print_utils.purple,cljs.core.str.cljs$core$IFn$_invoke$arity$1((8)),tic_tac_toe.print_utils.reset,"\n"," ",tic_tac_toe.print_utils.purple,cljs.core.str.cljs$core$IFn$_invoke$arity$1((9)),tic_tac_toe.print_utils.reset," ",tic_tac_toe.print_utils.purple,cljs.core.str.cljs$core$IFn$_invoke$arity$1((10)),tic_tac_toe.print_utils.reset," ",tic_tac_toe.print_utils.purple,cljs.core.str.cljs$core$IFn$_invoke$arity$1((11)),tic_tac_toe.print_utils.reset," ",tic_tac_toe.print_utils.purple,cljs.core.str.cljs$core$IFn$_invoke$arity$1((12)),tic_tac_toe.print_utils.reset,"\n",tic_tac_toe.print_utils.purple,cljs.core.str.cljs$core$IFn$_invoke$arity$1((13)),tic_tac_toe.print_utils.reset," ",tic_tac_toe.print_utils.purple,cljs.core.str.cljs$core$IFn$_invoke$arity$1((14)),tic_tac_toe.print_utils.reset," ",tic_tac_toe.print_utils.purple,cljs.core.str.cljs$core$IFn$_invoke$arity$1((15)),tic_tac_toe.print_utils.reset," ",tic_tac_toe.print_utils.purple,cljs.core.str.cljs$core$IFn$_invoke$arity$1((16)),tic_tac_toe.print_utils.reset,"\n\n"].join('');
var actual__9790__auto___13008 = (function (){var sb__5647__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__12786_13009 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__12787_13010 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__12788_13011 = true;
var _STAR_print_fn_STAR__temp_val__12789_13012 = (function (x__5648__auto__){
return sb__5647__auto__.append(x__5648__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__12788_13011);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__12789_13012);

try{tic_tac_toe.print_utils.print_board.call(null,empty_4x4);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__12787_13010);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__12786_13009);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5647__auto__);
})();
if(cljs.core._EQ_.call(null,expected__9789__auto___13007,actual__9790__auto___13008)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__9789__auto___13007;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9757__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9757__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__9790__auto___13008;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9757__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9757__auto__);
}
})()," (using =)"].join('')));
}

var expected__9789__auto__ = [" ",tic_tac_toe.print_utils.purple,cljs.core.str.cljs$core$IFn$_invoke$arity$1((1)),tic_tac_toe.print_utils.reset,"  X  ",tic_tac_toe.print_utils.purple,cljs.core.str.cljs$core$IFn$_invoke$arity$1((3)),tic_tac_toe.print_utils.reset,"  ",tic_tac_toe.print_utils.purple,cljs.core.str.cljs$core$IFn$_invoke$arity$1((4)),tic_tac_toe.print_utils.reset,"\n"," O  ",tic_tac_toe.print_utils.purple,cljs.core.str.cljs$core$IFn$_invoke$arity$1((6)),tic_tac_toe.print_utils.reset,"  O  ",tic_tac_toe.print_utils.purple,cljs.core.str.cljs$core$IFn$_invoke$arity$1((8)),tic_tac_toe.print_utils.reset,"\n"," X  X  O  O\n",tic_tac_toe.print_utils.purple,cljs.core.str.cljs$core$IFn$_invoke$arity$1((13)),tic_tac_toe.print_utils.reset,"  X  X  O\n\n"].join('');
var actual__9790__auto__ = (function (){var sb__5647__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__12790_13013 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__12791_13014 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__12792_13015 = true;
var _STAR_print_fn_STAR__temp_val__12793_13016 = (function (x__5648__auto__){
return sb__5647__auto__.append(x__5648__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__12792_13015);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__12793_13016);

try{tic_tac_toe.print_utils.print_board.call(null,new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),new cljs.core.Keyword(null,"x","x",2099068185),(3),(4),new cljs.core.Keyword(null,"o","o",-1350007228),(6),new cljs.core.Keyword(null,"o","o",-1350007228),(8),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"o","o",-1350007228),new cljs.core.Keyword(null,"o","o",-1350007228),(13),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"o","o",-1350007228)], null));
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__12791_13014);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__12790_13013);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5647__auto__);
})();
if(cljs.core._EQ_.call(null,expected__9789__auto__,actual__9790__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__9789__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9757__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9757__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__9790__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9757__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9757__auto__);
}
})()," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__12752_12991,_STAR_parent_description_STAR__temp_val__12753_12992,description__9652__auto____$1,empty_3x3,empty_4x4,_STAR_parent_description_STAR__orig_val__12432_12839,_STAR_parent_description_STAR__temp_val__12433_12840,description__9652__auto___12838))
,false),speclj.components.new_characteristic.call(null,"prints 3x3x3 board to the terminal",((function (_STAR_parent_description_STAR__orig_val__12752_12991,_STAR_parent_description_STAR__temp_val__12753_12992,description__9652__auto____$1,empty_3x3,empty_4x4,_STAR_parent_description_STAR__orig_val__12432_12839,_STAR_parent_description_STAR__temp_val__12433_12840,description__9652__auto___12838){
return (function (){
var expected__9789__auto__ = [" ",tic_tac_toe.print_utils.purple,cljs.core.str.cljs$core$IFn$_invoke$arity$1((1)),tic_tac_toe.print_utils.reset,"  ",tic_tac_toe.print_utils.purple,cljs.core.str.cljs$core$IFn$_invoke$arity$1((2)),tic_tac_toe.print_utils.reset,"  ",tic_tac_toe.print_utils.purple,cljs.core.str.cljs$core$IFn$_invoke$arity$1((3)),tic_tac_toe.print_utils.reset,"\n"," ",tic_tac_toe.print_utils.purple,cljs.core.str.cljs$core$IFn$_invoke$arity$1((4)),tic_tac_toe.print_utils.reset,"  ",tic_tac_toe.print_utils.purple,cljs.core.str.cljs$core$IFn$_invoke$arity$1((5)),tic_tac_toe.print_utils.reset,"  ",tic_tac_toe.print_utils.purple,cljs.core.str.cljs$core$IFn$_invoke$arity$1((6)),tic_tac_toe.print_utils.reset,"\n"," ",tic_tac_toe.print_utils.purple,cljs.core.str.cljs$core$IFn$_invoke$arity$1((7)),tic_tac_toe.print_utils.reset,"  ",tic_tac_toe.print_utils.purple,cljs.core.str.cljs$core$IFn$_invoke$arity$1((8)),tic_tac_toe.print_utils.reset,"  ",tic_tac_toe.print_utils.purple,cljs.core.str.cljs$core$IFn$_invoke$arity$1((9)),tic_tac_toe.print_utils.reset,"\n\n",tic_tac_toe.print_utils.purple,cljs.core.str.cljs$core$IFn$_invoke$arity$1((10)),tic_tac_toe.print_utils.reset," ",tic_tac_toe.print_utils.purple,cljs.core.str.cljs$core$IFn$_invoke$arity$1((11)),tic_tac_toe.print_utils.reset," ",tic_tac_toe.print_utils.purple,cljs.core.str.cljs$core$IFn$_invoke$arity$1((12)),tic_tac_toe.print_utils.reset,"\n",tic_tac_toe.print_utils.purple,cljs.core.str.cljs$core$IFn$_invoke$arity$1((13)),tic_tac_toe.print_utils.reset," ",tic_tac_toe.print_utils.purple,cljs.core.str.cljs$core$IFn$_invoke$arity$1((14)),tic_tac_toe.print_utils.reset," ",tic_tac_toe.print_utils.purple,cljs.core.str.cljs$core$IFn$_invoke$arity$1((15)),tic_tac_toe.print_utils.reset,"\n",tic_tac_toe.print_utils.purple,cljs.core.str.cljs$core$IFn$_invoke$arity$1((16)),tic_tac_toe.print_utils.reset," ",tic_tac_toe.print_utils.purple,cljs.core.str.cljs$core$IFn$_invoke$arity$1((17)),tic_tac_toe.print_utils.reset," ",tic_tac_toe.print_utils.purple,cljs.core.str.cljs$core$IFn$_invoke$arity$1((18)),tic_tac_toe.print_utils.reset,"\n\n",tic_tac_toe.print_utils.purple,cljs.core.str.cljs$core$IFn$_invoke$arity$1((19)),tic_tac_toe.print_utils.reset," ",tic_tac_toe.print_utils.purple,cljs.core.str.cljs$core$IFn$_invoke$arity$1((20)),tic_tac_toe.print_utils.reset," ",tic_tac_toe.print_utils.purple,cljs.core.str.cljs$core$IFn$_invoke$arity$1((21)),tic_tac_toe.print_utils.reset,"\n",tic_tac_toe.print_utils.purple,cljs.core.str.cljs$core$IFn$_invoke$arity$1((22)),tic_tac_toe.print_utils.reset," ",tic_tac_toe.print_utils.purple,cljs.core.str.cljs$core$IFn$_invoke$arity$1((23)),tic_tac_toe.print_utils.reset," ",tic_tac_toe.print_utils.purple,cljs.core.str.cljs$core$IFn$_invoke$arity$1((24)),tic_tac_toe.print_utils.reset,"\n",tic_tac_toe.print_utils.purple,cljs.core.str.cljs$core$IFn$_invoke$arity$1((25)),tic_tac_toe.print_utils.reset," ",tic_tac_toe.print_utils.purple,cljs.core.str.cljs$core$IFn$_invoke$arity$1((26)),tic_tac_toe.print_utils.reset," ",tic_tac_toe.print_utils.purple,cljs.core.str.cljs$core$IFn$_invoke$arity$1((27)),tic_tac_toe.print_utils.reset,"\n\n"].join('');
var actual__9790__auto__ = (function (){var sb__5647__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__12794_13017 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__12795_13018 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__12796_13019 = true;
var _STAR_print_fn_STAR__temp_val__12797_13020 = (function (x__5648__auto__){
return sb__5647__auto__.append(x__5648__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__12796_13019);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__12797_13020);

try{tic_tac_toe.print_utils.print_board.call(null,cljs.core.range.call(null,(1),(28)));
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__12795_13018);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__12794_13017);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5647__auto__);
})();
if(cljs.core._EQ_.call(null,expected__9789__auto__,actual__9790__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__9789__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9757__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9757__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__9790__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9757__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9757__auto__);
}
})()," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__12752_12991,_STAR_parent_description_STAR__temp_val__12753_12992,description__9652__auto____$1,empty_3x3,empty_4x4,_STAR_parent_description_STAR__orig_val__12432_12839,_STAR_parent_description_STAR__temp_val__12433_12840,description__9652__auto___12838))
,false)],null)));
var chunk__12755_12994 = null;
var count__12756_12995 = (0);
var i__12757_12996 = (0);
while(true){
if((i__12757_12996 < count__12756_12995)){
var component__9653__auto___13021 = cljs.core._nth.call(null,chunk__12755_12994,i__12757_12996);
speclj.components.install.call(null,component__9653__auto___13021,description__9652__auto____$1);


var G__13022 = seq__12754_12993;
var G__13023 = chunk__12755_12994;
var G__13024 = count__12756_12995;
var G__13025 = (i__12757_12996 + (1));
seq__12754_12993 = G__13022;
chunk__12755_12994 = G__13023;
count__12756_12995 = G__13024;
i__12757_12996 = G__13025;
continue;
} else {
var temp__5804__auto___13026 = cljs.core.seq.call(null,seq__12754_12993);
if(temp__5804__auto___13026){
var seq__12754_13027__$1 = temp__5804__auto___13026;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12754_13027__$1)){
var c__5525__auto___13028 = cljs.core.chunk_first.call(null,seq__12754_13027__$1);
var G__13029 = cljs.core.chunk_rest.call(null,seq__12754_13027__$1);
var G__13030 = c__5525__auto___13028;
var G__13031 = cljs.core.count.call(null,c__5525__auto___13028);
var G__13032 = (0);
seq__12754_12993 = G__13029;
chunk__12755_12994 = G__13030;
count__12756_12995 = G__13031;
i__12757_12996 = G__13032;
continue;
} else {
var component__9653__auto___13033 = cljs.core.first.call(null,seq__12754_13027__$1);
speclj.components.install.call(null,component__9653__auto___13033,description__9652__auto____$1);


var G__13034 = cljs.core.next.call(null,seq__12754_13027__$1);
var G__13035 = null;
var G__13036 = (0);
var G__13037 = (0);
seq__12754_12993 = G__13034;
chunk__12755_12994 = G__13035;
count__12756_12995 = G__13036;
i__12757_12996 = G__13037;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__12752_12991);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__9652__auto____$1);
}

return description__9652__auto____$1;
})(),(function (){var description__9652__auto____$1 = speclj.components.new_description.call(null,"play-logged-game",false,"tic-tac-toe.print-utils-spec");
var _STAR_parent_description_STAR__orig_val__12798_13038 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__12799_13039 = description__9652__auto____$1;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__12799_13039);

try{var seq__12800_13040 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_characteristic.call(null,"prints error message if there are no moves",((function (_STAR_parent_description_STAR__orig_val__12798_13038,_STAR_parent_description_STAR__temp_val__12799_13039,description__9652__auto____$1,_STAR_parent_description_STAR__orig_val__12432_12839,_STAR_parent_description_STAR__temp_val__12433_12840,description__9652__auto___12838){
return (function (){
var expected__9789__auto___13044 = "There are no moves to show for this game.\n";
var actual__9790__auto___13045 = (function (){var sb__5647__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__12816_13046 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__12817_13047 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__12818_13048 = true;
var _STAR_print_fn_STAR__temp_val__12819_13049 = (function (x__5648__auto__){
return sb__5647__auto__.append(x__5648__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__12818_13048);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__12819_13049);

try{tic_tac_toe.print_utils.play_logged_game.call(null,cljs.core.PersistentVector.EMPTY,null);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__12817_13047);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__12816_13046);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5647__auto__);
})();
if(cljs.core._EQ_.call(null,expected__9789__auto___13044,actual__9790__auto___13045)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__9789__auto___13044;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9757__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9757__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__9790__auto___13045;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9757__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9757__auto__);
}
})()," (using =)"].join('')));
}

var expected__9789__auto__ = "There are no moves to show for this game.\n";
var actual__9790__auto__ = (function (){var sb__5647__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__12820_13050 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__12821_13051 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__12822_13052 = true;
var _STAR_print_fn_STAR__temp_val__12823_13053 = (function (x__5648__auto__){
return sb__5647__auto__.append(x__5648__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__12822_13052);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__12823_13053);

try{tic_tac_toe.print_utils.play_logged_game.call(null,null,null);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__12821_13051);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__12820_13050);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5647__auto__);
})();
if(cljs.core._EQ_.call(null,expected__9789__auto__,actual__9790__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__9789__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9757__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9757__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__9790__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9757__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9757__auto__);
}
})()," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__12798_13038,_STAR_parent_description_STAR__temp_val__12799_13039,description__9652__auto____$1,_STAR_parent_description_STAR__orig_val__12432_12839,_STAR_parent_description_STAR__temp_val__12433_12840,description__9652__auto___12838))
,false),speclj.components.new_characteristic.call(null,"prints each move to the console in order followed by winner",((function (_STAR_parent_description_STAR__orig_val__12798_13038,_STAR_parent_description_STAR__temp_val__12799_13039,description__9652__auto____$1,_STAR_parent_description_STAR__orig_val__12432_12839,_STAR_parent_description_STAR__temp_val__12433_12840,description__9652__auto___12838){
return (function (){
var print_board_orig_val__12824 = tic_tac_toe.print_utils.print_board;
var println_orig_val__12825 = cljs.core.println;
var print_board_temp_val__12826 = speclj.stub.stub.call(null,new cljs.core.Keyword(null,"print-board","print-board",1861954072),cljs.core.PersistentArrayMap.EMPTY);
var println_temp_val__12827 = speclj.stub.stub.call(null,new cljs.core.Keyword(null,"println","println",1920840330),cljs.core.PersistentArrayMap.EMPTY);
(tic_tac_toe.print_utils.print_board = print_board_temp_val__12826);

(cljs.core.println = println_temp_val__12827);

try{tic_tac_toe.print_utils.play_logged_game.call(null,cljs.core.list(new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(3),(4),new cljs.core.Keyword(null,"x","x",2099068185),(6),(7),(8),(9)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"o","o",-1350007228),(2),(3),(4),new cljs.core.Keyword(null,"x","x",2099068185),(6),(7),(8),(9)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"o","o",-1350007228),(2),(3),(4),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"x","x",2099068185),(7),(8),(9)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"o","o",-1350007228),(2),(3),new cljs.core.Keyword(null,"o","o",-1350007228),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"x","x",2099068185),(7),(8),(9)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"o","o",-1350007228),(2),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"o","o",-1350007228),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"x","x",2099068185),(7),(8),(9)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"o","o",-1350007228),(2),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"o","o",-1350007228),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"o","o",-1350007228),(8),(9)], null)),"O wins!");

var expected__9789__auto___13054 = new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(3),(4),new cljs.core.Keyword(null,"x","x",2099068185),(6),(7),(8),(9)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"o","o",-1350007228),(2),(3),(4),new cljs.core.Keyword(null,"x","x",2099068185),(6),(7),(8),(9)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"o","o",-1350007228),(2),(3),(4),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"x","x",2099068185),(7),(8),(9)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"o","o",-1350007228),(2),(3),new cljs.core.Keyword(null,"o","o",-1350007228),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"x","x",2099068185),(7),(8),(9)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"o","o",-1350007228),(2),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"o","o",-1350007228),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"x","x",2099068185),(7),(8),(9)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"o","o",-1350007228),(2),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"o","o",-1350007228),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"o","o",-1350007228),(8),(9)], null)], null)], null);
var actual__9790__auto___13055 = speclj.stub.invocations_of.call(null,new cljs.core.Keyword(null,"print-board","print-board",1861954072));
if(cljs.core._EQ_.call(null,expected__9789__auto___13054,actual__9790__auto___13055)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__9789__auto___13054;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9757__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9757__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__9790__auto___13055;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9757__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9757__auto__);
}
})()," (using =)"].join('')));
}

var name__10036__auto__ = new cljs.core.Keyword(null,"println","println",1920840330);
var options__10037__auto__ = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"with","with",-1536296876),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["O wins!"], null)], null);
var invocations__10038__auto__ = speclj.stub.invocations_of.call(null,name__10036__auto__);
var times__10039__auto__ = new cljs.core.Keyword(null,"times","times",1671571467).cljs$core$IFn$_invoke$arity$1(options__10037__auto__);
var times_QMARK___10040__auto__ = typeof times__10039__auto__ === 'number';
var check_params_QMARK___10041__auto__ = cljs.core.contains_QMARK_.call(null,options__10037__auto__,new cljs.core.Keyword(null,"with","with",-1536296876));
var with__10042__auto__ = new cljs.core.Keyword(null,"with","with",-1536296876).cljs$core$IFn$_invoke$arity$1(options__10037__auto__);
var with__10042__auto____$1 = (((with__10042__auto__ == null))?cljs.core.PersistentVector.EMPTY:with__10042__auto__);
var invocations_str__10043__auto__ = (function (p1__10033__10044__auto__){
if(cljs.core._EQ_.call(null,(1),p1__10033__10044__auto__)){
return "invocation";
} else {
return "invocations";
}
});
if(((times_QMARK___10040__auto__) && (check_params_QMARK___10041__auto__))){
var matching_invocations__10045__auto__ = cljs.core.filter.call(null,(function (p1__10034__10046__auto__){
return speclj.stub.params_match_QMARK_.call(null,with__10042__auto____$1,p1__10034__10046__auto__);
}),invocations__10038__auto__);
var matching_count__10047__auto__ = cljs.core.count.call(null,matching_invocations__10045__auto__);
if(cljs.core._EQ_.call(null,times__10039__auto__,matching_count__10047__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(times__10039__auto__)," ",invocations_str__10043__auto__.call(null,times__10039__auto__)," of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__10036__auto__)," with ",cljs.core.pr_str.call(null,with__10042__auto____$1),speclj.platform.endl,"     got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(matching_count__10047__auto__)," ",invocations_str__10043__auto__.call(null,matching_count__10047__auto__)].join('')));
}
} else {
if(check_params_QMARK___10041__auto__){
if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__10035__10048__auto__){
return speclj.stub.params_match_QMARK_.call(null,with__10042__auto____$1,p1__10035__10048__auto__);
}),invocations__10038__auto__))){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: invocation of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__10036__auto__)," with ",cljs.core.pr_str.call(null,with__10042__auto____$1),speclj.platform.endl,"     got: ",cljs.core.pr_str.call(null,invocations__10038__auto__)].join('')));
}
} else {
if(times_QMARK___10040__auto__){
if(cljs.core._EQ_.call(null,times__10039__auto__,cljs.core.count.call(null,invocations__10038__auto__))){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(times__10039__auto__)," ",invocations_str__10043__auto__.call(null,times__10039__auto__)," of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__10036__auto__),speclj.platform.endl,"     got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,invocations__10038__auto__))].join('')));
}
} else {
if(cljs.core.seq.call(null,invocations__10038__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: an invocation of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__10036__auto__),speclj.platform.endl,"     got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,invocations__10038__auto__))].join('')));
}

}
}
}
}finally {(cljs.core.println = println_orig_val__12825);

(tic_tac_toe.print_utils.print_board = print_board_orig_val__12824);
}});})(_STAR_parent_description_STAR__orig_val__12798_13038,_STAR_parent_description_STAR__temp_val__12799_13039,description__9652__auto____$1,_STAR_parent_description_STAR__orig_val__12432_12839,_STAR_parent_description_STAR__temp_val__12433_12840,description__9652__auto___12838))
,false)],null)));
var chunk__12801_13041 = null;
var count__12802_13042 = (0);
var i__12803_13043 = (0);
while(true){
if((i__12803_13043 < count__12802_13042)){
var component__9653__auto___13056 = cljs.core._nth.call(null,chunk__12801_13041,i__12803_13043);
speclj.components.install.call(null,component__9653__auto___13056,description__9652__auto____$1);


var G__13057 = seq__12800_13040;
var G__13058 = chunk__12801_13041;
var G__13059 = count__12802_13042;
var G__13060 = (i__12803_13043 + (1));
seq__12800_13040 = G__13057;
chunk__12801_13041 = G__13058;
count__12802_13042 = G__13059;
i__12803_13043 = G__13060;
continue;
} else {
var temp__5804__auto___13061 = cljs.core.seq.call(null,seq__12800_13040);
if(temp__5804__auto___13061){
var seq__12800_13062__$1 = temp__5804__auto___13061;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12800_13062__$1)){
var c__5525__auto___13063 = cljs.core.chunk_first.call(null,seq__12800_13062__$1);
var G__13064 = cljs.core.chunk_rest.call(null,seq__12800_13062__$1);
var G__13065 = c__5525__auto___13063;
var G__13066 = cljs.core.count.call(null,c__5525__auto___13063);
var G__13067 = (0);
seq__12800_13040 = G__13064;
chunk__12801_13041 = G__13065;
count__12802_13042 = G__13066;
i__12803_13043 = G__13067;
continue;
} else {
var component__9653__auto___13068 = cljs.core.first.call(null,seq__12800_13062__$1);
speclj.components.install.call(null,component__9653__auto___13068,description__9652__auto____$1);


var G__13069 = cljs.core.next.call(null,seq__12800_13062__$1);
var G__13070 = null;
var G__13071 = (0);
var G__13072 = (0);
seq__12800_13040 = G__13069;
chunk__12801_13041 = G__13070;
count__12802_13042 = G__13071;
i__12803_13043 = G__13072;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__12798_13038);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__9652__auto____$1);
}

return description__9652__auto____$1;
})(),speclj.components.new_characteristic.call(null,"shows error message when psql game is incomplete and can't be replayed",((function (_STAR_parent_description_STAR__orig_val__12432_12839,_STAR_parent_description_STAR__temp_val__12433_12840,description__9652__auto___12838){
return (function (){
var expected__9789__auto__ = "The requested game is unfinished. Please choose a completed game to replay.\n";
var actual__9790__auto__ = (function (){var sb__5647__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__12828_13073 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__12829_13074 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__12830_13075 = true;
var _STAR_print_fn_STAR__temp_val__12831_13076 = (function (x__5648__auto__){
return sb__5647__auto__.append(x__5648__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__12830_13075);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__12831_13076);

try{tic_tac_toe.print_utils.display_unfinished_game_error.call(null);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__12829_13074);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__12828_13073);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5647__auto__);
})();
if(cljs.core._EQ_.call(null,expected__9789__auto__,actual__9790__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__9789__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9757__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9757__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__9790__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9757__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9757__auto__);
}
})()," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__12432_12839,_STAR_parent_description_STAR__temp_val__12433_12840,description__9652__auto___12838))
,false),speclj.components.new_characteristic.call(null,"shows error message when game id is invalid",((function (_STAR_parent_description_STAR__orig_val__12432_12839,_STAR_parent_description_STAR__temp_val__12433_12840,description__9652__auto___12838){
return (function (){
var expected__9789__auto__ = "There is no game with ID 20\n";
var actual__9790__auto__ = (function (){var sb__5647__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__12832_13077 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__12833_13078 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__12834_13079 = true;
var _STAR_print_fn_STAR__temp_val__12835_13080 = (function (x__5648__auto__){
return sb__5647__auto__.append(x__5648__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__12834_13079);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__12835_13080);

try{tic_tac_toe.print_utils.display_invalid_game_id_error.call(null,(20));
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__12833_13078);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__12832_13077);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5647__auto__);
})();
if(cljs.core._EQ_.call(null,expected__9789__auto__,actual__9790__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__9789__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9757__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9757__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__9790__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9757__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9757__auto__);
}
})()," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__12432_12839,_STAR_parent_description_STAR__temp_val__12433_12840,description__9652__auto___12838))
,false),speclj.components.new_characteristic.call(null,"displays command options to user",((function (_STAR_parent_description_STAR__orig_val__12432_12839,_STAR_parent_description_STAR__temp_val__12433_12840,description__9652__auto___12838){
return (function (){
var println_orig_val__12836 = cljs.core.println;
var println_temp_val__12837 = speclj.stub.stub.call(null,new cljs.core.Keyword(null,"println","println",1920840330),cljs.core.PersistentArrayMap.EMPTY);
(cljs.core.println = println_temp_val__12837);

try{tic_tac_toe.print_utils.display_command_options.call(null);

var expected__9789__auto__ = new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Please enter your preferences:"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Format: 'clj -Mrun <ui> <db> <game id>"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["<db> is the only required field\n"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["--psqldb         Run with PostgreSQL"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["--edndb         Run with EDN Database"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["gui             Run GUI"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["--game <id>     Replay specific game"], null)], null);
var actual__9790__auto__ = speclj.stub.invocations_of.call(null,new cljs.core.Keyword(null,"println","println",1920840330));
if(cljs.core._EQ_.call(null,expected__9789__auto__,actual__9790__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__9789__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9757__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9757__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__9790__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9757__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9757__auto__);
}
})()," (using =)"].join('')));
}
}finally {(cljs.core.println = println_orig_val__12836);
}});})(_STAR_parent_description_STAR__orig_val__12432_12839,_STAR_parent_description_STAR__temp_val__12433_12840,description__9652__auto___12838))
,false)],null)));
var chunk__12435_12842 = null;
var count__12436_12843 = (0);
var i__12437_12844 = (0);
while(true){
if((i__12437_12844 < count__12436_12843)){
var component__9653__auto___13081 = cljs.core._nth.call(null,chunk__12435_12842,i__12437_12844);
speclj.components.install.call(null,component__9653__auto___13081,description__9652__auto___12838);


var G__13082 = seq__12434_12841;
var G__13083 = chunk__12435_12842;
var G__13084 = count__12436_12843;
var G__13085 = (i__12437_12844 + (1));
seq__12434_12841 = G__13082;
chunk__12435_12842 = G__13083;
count__12436_12843 = G__13084;
i__12437_12844 = G__13085;
continue;
} else {
var temp__5804__auto___13086 = cljs.core.seq.call(null,seq__12434_12841);
if(temp__5804__auto___13086){
var seq__12434_13087__$1 = temp__5804__auto___13086;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12434_13087__$1)){
var c__5525__auto___13088 = cljs.core.chunk_first.call(null,seq__12434_13087__$1);
var G__13089 = cljs.core.chunk_rest.call(null,seq__12434_13087__$1);
var G__13090 = c__5525__auto___13088;
var G__13091 = cljs.core.count.call(null,c__5525__auto___13088);
var G__13092 = (0);
seq__12434_12841 = G__13089;
chunk__12435_12842 = G__13090;
count__12436_12843 = G__13091;
i__12437_12844 = G__13092;
continue;
} else {
var component__9653__auto___13093 = cljs.core.first.call(null,seq__12434_13087__$1);
speclj.components.install.call(null,component__9653__auto___13093,description__9652__auto___12838);


var G__13094 = cljs.core.next.call(null,seq__12434_13087__$1);
var G__13095 = null;
var G__13096 = (0);
var G__13097 = (0);
seq__12434_12841 = G__13094;
chunk__12435_12842 = G__13095;
count__12436_12843 = G__13096;
i__12437_12844 = G__13097;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__12432_12839);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__9652__auto___12838);
}


//# sourceMappingURL=print_utils_spec.js.map
