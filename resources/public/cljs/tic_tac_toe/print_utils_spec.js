// Compiled by ClojureScript 1.11.132 {:optimizations :none}
goog.provide('tic_tac_toe.print_utils_spec');
goog.require('cljs.core');
goog.require('speclj.core');
goog.require('speclj.stub');
goog.require('tic_tac_toe.print_utils');
var description__9152__auto___11697 = speclj.components.new_description.call(null,"utility functions",false,"tic-tac-toe.print-utils-spec");
var _STAR_parent_description_STAR__orig_val__10696_11698 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__10697_11699 = description__9152__auto___11697;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__10697_11699);

try{var seq__10702_11700 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,6,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_around.call(null,((function (_STAR_parent_description_STAR__orig_val__10696_11698,_STAR_parent_description_STAR__temp_val__10697_11699,description__9152__auto___11697){
return (function (it__9522__auto__){
var _STAR_stubbed_invocations_STAR__orig_val__11384 = speclj.stub._STAR_stubbed_invocations_STAR_;
var _STAR_stubbed_invocations_STAR__temp_val__11385 = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
(speclj.stub._STAR_stubbed_invocations_STAR_ = _STAR_stubbed_invocations_STAR__temp_val__11385);

try{return it__9522__auto__.call(null);
}finally {(speclj.stub._STAR_stubbed_invocations_STAR_ = _STAR_stubbed_invocations_STAR__orig_val__11384);
}});})(_STAR_parent_description_STAR__orig_val__10696_11698,_STAR_parent_description_STAR__temp_val__10697_11699,description__9152__auto___11697))
),(function (){var empty_3x3 = new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(3),(4),(5),(6),(7),(8),(9)], null);
var empty_4x4 = new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(3),(4),(5),(6),(7),(8),(9),(10),(11),(12),(13),(14),(15),(16)], null);
var description__9152__auto___11704__$1 = speclj.components.new_description.call(null,"display-invalid-move-error",false,"tic-tac-toe.print-utils-spec");
var _STAR_parent_description_STAR__orig_val__11386_11705 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__11387_11706 = description__9152__auto___11704__$1;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__11387_11706);

try{var seq__11392_11707 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_characteristic.call(null,"asks for a valid move",((function (_STAR_parent_description_STAR__orig_val__11386_11705,_STAR_parent_description_STAR__temp_val__11387_11706,description__9152__auto___11704__$1,empty_3x3,empty_4x4,_STAR_parent_description_STAR__orig_val__10696_11698,_STAR_parent_description_STAR__temp_val__10697_11699,description__9152__auto___11697){
return (function (){
var expected__9289__auto__ = "Please choose an empty cell\n";
var actual__9290__auto__ = (function (){var sb__5647__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__11429_11711 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__11430_11712 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__11431_11713 = true;
var _STAR_print_fn_STAR__temp_val__11432_11714 = (function (x__5648__auto__){
return sb__5647__auto__.append(x__5648__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__11431_11713);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__11432_11714);

try{tic_tac_toe.print_utils.display_invalid_move_error.call(null);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__11430_11712);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__11429_11711);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5647__auto__);
})();
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
});})(_STAR_parent_description_STAR__orig_val__11386_11705,_STAR_parent_description_STAR__temp_val__11387_11706,description__9152__auto___11704__$1,empty_3x3,empty_4x4,_STAR_parent_description_STAR__orig_val__10696_11698,_STAR_parent_description_STAR__temp_val__10697_11699,description__9152__auto___11697))
,false)],null)));
var chunk__11394_11708 = null;
var count__11395_11709 = (0);
var i__11396_11710 = (0);
while(true){
if((i__11396_11710 < count__11395_11709)){
var component__9153__auto___11715 = cljs.core._nth.call(null,chunk__11394_11708,i__11396_11710);
speclj.components.install.call(null,component__9153__auto___11715,description__9152__auto___11704__$1);


var G__11716 = seq__11392_11707;
var G__11717 = chunk__11394_11708;
var G__11718 = count__11395_11709;
var G__11719 = (i__11396_11710 + (1));
seq__11392_11707 = G__11716;
chunk__11394_11708 = G__11717;
count__11395_11709 = G__11718;
i__11396_11710 = G__11719;
continue;
} else {
var temp__5804__auto___11720 = cljs.core.seq.call(null,seq__11392_11707);
if(temp__5804__auto___11720){
var seq__11392_11721__$1 = temp__5804__auto___11720;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11392_11721__$1)){
var c__5525__auto___11722 = cljs.core.chunk_first.call(null,seq__11392_11721__$1);
var G__11723 = cljs.core.chunk_rest.call(null,seq__11392_11721__$1);
var G__11724 = c__5525__auto___11722;
var G__11725 = cljs.core.count.call(null,c__5525__auto___11722);
var G__11726 = (0);
seq__11392_11707 = G__11723;
chunk__11394_11708 = G__11724;
count__11395_11709 = G__11725;
i__11396_11710 = G__11726;
continue;
} else {
var component__9153__auto___11727 = cljs.core.first.call(null,seq__11392_11721__$1);
speclj.components.install.call(null,component__9153__auto___11727,description__9152__auto___11704__$1);


var G__11728 = cljs.core.next.call(null,seq__11392_11721__$1);
var G__11729 = null;
var G__11730 = (0);
var G__11731 = (0);
seq__11392_11707 = G__11728;
chunk__11394_11708 = G__11729;
count__11395_11709 = G__11730;
i__11396_11710 = G__11731;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__11386_11705);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__9152__auto___11704__$1);
}


var description__9152__auto___11732__$1 = speclj.components.new_description.call(null,"prompt-user-for-move",false,"tic-tac-toe.print-utils-spec");
var _STAR_parent_description_STAR__orig_val__11439_11733 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__11440_11734 = description__9152__auto___11732__$1;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__11440_11734);

try{var seq__11441_11735 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_characteristic.call(null,"asks user to input a move",((function (_STAR_parent_description_STAR__orig_val__11439_11733,_STAR_parent_description_STAR__temp_val__11440_11734,description__9152__auto___11732__$1,empty_3x3,empty_4x4,_STAR_parent_description_STAR__orig_val__10696_11698,_STAR_parent_description_STAR__temp_val__10697_11699,description__9152__auto___11697){
return (function (){
var expected__9289__auto__ = "Please enter your move (type 1-9 and hit enter):\n";
var actual__9290__auto__ = (function (){var sb__5647__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__11509_11740 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__11510_11741 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__11511_11742 = true;
var _STAR_print_fn_STAR__temp_val__11512_11743 = (function (x__5648__auto__){
return sb__5647__auto__.append(x__5648__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__11511_11742);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__11512_11743);

try{tic_tac_toe.print_utils.prompt_user_for_move.call(null,new cljs.core.Keyword(null,"o","o",-1350007228),(2),empty_3x3);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__11510_11741);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__11509_11740);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5647__auto__);
})();
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
});})(_STAR_parent_description_STAR__orig_val__11439_11733,_STAR_parent_description_STAR__temp_val__11440_11734,description__9152__auto___11732__$1,empty_3x3,empty_4x4,_STAR_parent_description_STAR__orig_val__10696_11698,_STAR_parent_description_STAR__temp_val__10697_11699,description__9152__auto___11697))
,false),speclj.components.new_characteristic.call(null,"says which player's turn it is if human vs human",((function (_STAR_parent_description_STAR__orig_val__11439_11733,_STAR_parent_description_STAR__temp_val__11440_11734,description__9152__auto___11732__$1,empty_3x3,empty_4x4,_STAR_parent_description_STAR__orig_val__10696_11698,_STAR_parent_description_STAR__temp_val__10697_11699,description__9152__auto___11697){
return (function (){
var expected__9289__auto___11750 = "O's turn!\nPlease enter your move (type 1-9 and hit enter):\n";
var actual__9290__auto___11751 = (function (){var sb__5647__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__11518_11752 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__11519_11753 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__11520_11754 = true;
var _STAR_print_fn_STAR__temp_val__11521_11755 = (function (x__5648__auto__){
return sb__5647__auto__.append(x__5648__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__11520_11754);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__11521_11755);

try{tic_tac_toe.print_utils.prompt_user_for_move.call(null,new cljs.core.Keyword(null,"o","o",-1350007228),(1),empty_3x3);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__11519_11753);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__11518_11752);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5647__auto__);
})();
if(cljs.core._EQ_.call(null,expected__9289__auto___11750,actual__9290__auto___11751)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__9289__auto___11750;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9257__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9257__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__9290__auto___11751;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9257__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9257__auto__);
}
})()," (using =)"].join('')));
}

var expected__9289__auto__ = "X's turn!\nPlease enter your move (type 1-9 and hit enter):\n";
var actual__9290__auto__ = (function (){var sb__5647__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__11524_11759 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__11525_11760 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__11526_11761 = true;
var _STAR_print_fn_STAR__temp_val__11527_11762 = (function (x__5648__auto__){
return sb__5647__auto__.append(x__5648__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__11526_11761);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__11527_11762);

try{tic_tac_toe.print_utils.prompt_user_for_move.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(1),empty_3x3);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__11525_11760);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__11524_11759);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5647__auto__);
})();
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
});})(_STAR_parent_description_STAR__orig_val__11439_11733,_STAR_parent_description_STAR__temp_val__11440_11734,description__9152__auto___11732__$1,empty_3x3,empty_4x4,_STAR_parent_description_STAR__orig_val__10696_11698,_STAR_parent_description_STAR__temp_val__10697_11699,description__9152__auto___11697))
,false),speclj.components.new_characteristic.call(null,"specifies 1-16 if board is 4x4",((function (_STAR_parent_description_STAR__orig_val__11439_11733,_STAR_parent_description_STAR__temp_val__11440_11734,description__9152__auto___11732__$1,empty_3x3,empty_4x4,_STAR_parent_description_STAR__orig_val__10696_11698,_STAR_parent_description_STAR__temp_val__10697_11699,description__9152__auto___11697){
return (function (){
var expected__9289__auto___11772 = "Please enter your move (type 1-16 and hit enter):\n";
var actual__9290__auto___11773 = (function (){var sb__5647__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__11528_11774 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__11529_11775 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__11530_11776 = true;
var _STAR_print_fn_STAR__temp_val__11531_11777 = (function (x__5648__auto__){
return sb__5647__auto__.append(x__5648__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__11530_11776);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__11531_11777);

try{tic_tac_toe.print_utils.prompt_user_for_move.call(null,new cljs.core.Keyword(null,"o","o",-1350007228),(2),empty_4x4);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__11529_11775);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__11528_11774);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5647__auto__);
})();
if(cljs.core._EQ_.call(null,expected__9289__auto___11772,actual__9290__auto___11773)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__9289__auto___11772;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9257__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9257__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__9290__auto___11773;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9257__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9257__auto__);
}
})()," (using =)"].join('')));
}

var expected__9289__auto__ = "O's turn!\nPlease enter your move (type 1-16 and hit enter):\n";
var actual__9290__auto__ = (function (){var sb__5647__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__11533_11784 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__11534_11785 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__11535_11786 = true;
var _STAR_print_fn_STAR__temp_val__11536_11787 = (function (x__5648__auto__){
return sb__5647__auto__.append(x__5648__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__11535_11786);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__11536_11787);

try{tic_tac_toe.print_utils.prompt_user_for_move.call(null,new cljs.core.Keyword(null,"o","o",-1350007228),(1),empty_4x4);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__11534_11785);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__11533_11784);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5647__auto__);
})();
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
});})(_STAR_parent_description_STAR__orig_val__11439_11733,_STAR_parent_description_STAR__temp_val__11440_11734,description__9152__auto___11732__$1,empty_3x3,empty_4x4,_STAR_parent_description_STAR__orig_val__10696_11698,_STAR_parent_description_STAR__temp_val__10697_11699,description__9152__auto___11697))
,false)],null)));
var chunk__11442_11736 = null;
var count__11443_11737 = (0);
var i__11444_11738 = (0);
while(true){
if((i__11444_11738 < count__11443_11737)){
var component__9153__auto___11790 = cljs.core._nth.call(null,chunk__11442_11736,i__11444_11738);
speclj.components.install.call(null,component__9153__auto___11790,description__9152__auto___11732__$1);


var G__11791 = seq__11441_11735;
var G__11792 = chunk__11442_11736;
var G__11793 = count__11443_11737;
var G__11794 = (i__11444_11738 + (1));
seq__11441_11735 = G__11791;
chunk__11442_11736 = G__11792;
count__11443_11737 = G__11793;
i__11444_11738 = G__11794;
continue;
} else {
var temp__5804__auto___11795 = cljs.core.seq.call(null,seq__11441_11735);
if(temp__5804__auto___11795){
var seq__11441_11796__$1 = temp__5804__auto___11795;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11441_11796__$1)){
var c__5525__auto___11797 = cljs.core.chunk_first.call(null,seq__11441_11796__$1);
var G__11798 = cljs.core.chunk_rest.call(null,seq__11441_11796__$1);
var G__11799 = c__5525__auto___11797;
var G__11800 = cljs.core.count.call(null,c__5525__auto___11797);
var G__11801 = (0);
seq__11441_11735 = G__11798;
chunk__11442_11736 = G__11799;
count__11443_11737 = G__11800;
i__11444_11738 = G__11801;
continue;
} else {
var component__9153__auto___11802 = cljs.core.first.call(null,seq__11441_11796__$1);
speclj.components.install.call(null,component__9153__auto___11802,description__9152__auto___11732__$1);


var G__11805 = cljs.core.next.call(null,seq__11441_11796__$1);
var G__11806 = null;
var G__11807 = (0);
var G__11808 = (0);
seq__11441_11735 = G__11805;
chunk__11442_11736 = G__11806;
count__11443_11737 = G__11807;
i__11444_11738 = G__11808;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__11439_11733);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__9152__auto___11732__$1);
}


var description__9152__auto___11809__$1 = speclj.components.new_description.call(null,"display-bot-thinking",false,"tic-tac-toe.print-utils-spec");
var _STAR_parent_description_STAR__orig_val__11539_11810 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__11540_11811 = description__9152__auto___11809__$1;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__11540_11811);

try{var seq__11541_11812 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_characteristic.call(null,"prints message to let the user know the computer is processing",((function (_STAR_parent_description_STAR__orig_val__11539_11810,_STAR_parent_description_STAR__temp_val__11540_11811,description__9152__auto___11809__$1,empty_3x3,empty_4x4,_STAR_parent_description_STAR__orig_val__10696_11698,_STAR_parent_description_STAR__temp_val__10697_11699,description__9152__auto___11697){
return (function (){
var expected__9289__auto___11816 = "Player X is thinking...";
var actual__9290__auto___11817 = (function (){var sb__5647__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__11557_11818 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__11558_11819 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__11559_11820 = true;
var _STAR_print_fn_STAR__temp_val__11560_11821 = (function (x__5648__auto__){
return sb__5647__auto__.append(x__5648__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__11559_11820);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__11560_11821);

try{tic_tac_toe.print_utils.display_bot_thinking_message.call(null,new cljs.core.Keyword(null,"x","x",2099068185));
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__11558_11819);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__11557_11818);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5647__auto__);
})();
if(cljs.core._EQ_.call(null,expected__9289__auto___11816,actual__9290__auto___11817)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__9289__auto___11816;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9257__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9257__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__9290__auto___11817;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9257__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9257__auto__);
}
})()," (using =)"].join('')));
}

var expected__9289__auto__ = "Player O is thinking...";
var actual__9290__auto__ = (function (){var sb__5647__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__11561_11824 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__11562_11825 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__11563_11826 = true;
var _STAR_print_fn_STAR__temp_val__11564_11827 = (function (x__5648__auto__){
return sb__5647__auto__.append(x__5648__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__11563_11826);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__11564_11827);

try{tic_tac_toe.print_utils.display_bot_thinking_message.call(null,new cljs.core.Keyword(null,"o","o",-1350007228));
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__11562_11825);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__11561_11824);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5647__auto__);
})();
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
});})(_STAR_parent_description_STAR__orig_val__11539_11810,_STAR_parent_description_STAR__temp_val__11540_11811,description__9152__auto___11809__$1,empty_3x3,empty_4x4,_STAR_parent_description_STAR__orig_val__10696_11698,_STAR_parent_description_STAR__temp_val__10697_11699,description__9152__auto___11697))
,false)],null)));
var chunk__11542_11813 = null;
var count__11543_11814 = (0);
var i__11544_11815 = (0);
while(true){
if((i__11544_11815 < count__11543_11814)){
var component__9153__auto___11828 = cljs.core._nth.call(null,chunk__11542_11813,i__11544_11815);
speclj.components.install.call(null,component__9153__auto___11828,description__9152__auto___11809__$1);


var G__11829 = seq__11541_11812;
var G__11830 = chunk__11542_11813;
var G__11831 = count__11543_11814;
var G__11832 = (i__11544_11815 + (1));
seq__11541_11812 = G__11829;
chunk__11542_11813 = G__11830;
count__11543_11814 = G__11831;
i__11544_11815 = G__11832;
continue;
} else {
var temp__5804__auto___11833 = cljs.core.seq.call(null,seq__11541_11812);
if(temp__5804__auto___11833){
var seq__11541_11834__$1 = temp__5804__auto___11833;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11541_11834__$1)){
var c__5525__auto___11835 = cljs.core.chunk_first.call(null,seq__11541_11834__$1);
var G__11836 = cljs.core.chunk_rest.call(null,seq__11541_11834__$1);
var G__11837 = c__5525__auto___11835;
var G__11838 = cljs.core.count.call(null,c__5525__auto___11835);
var G__11839 = (0);
seq__11541_11812 = G__11836;
chunk__11542_11813 = G__11837;
count__11543_11814 = G__11838;
i__11544_11815 = G__11839;
continue;
} else {
var component__9153__auto___11840 = cljs.core.first.call(null,seq__11541_11834__$1);
speclj.components.install.call(null,component__9153__auto___11840,description__9152__auto___11809__$1);


var G__11841 = cljs.core.next.call(null,seq__11541_11834__$1);
var G__11842 = null;
var G__11843 = (0);
var G__11844 = (0);
seq__11541_11812 = G__11841;
chunk__11542_11813 = G__11842;
count__11543_11814 = G__11843;
i__11544_11815 = G__11844;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__11539_11810);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__9152__auto___11809__$1);
}


var description__9152__auto___11845__$1 = speclj.components.new_description.call(null,"display-bot-move-message",false,"tic-tac-toe.print-utils-spec");
var _STAR_parent_description_STAR__orig_val__11565_11846 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__11566_11847 = description__9152__auto___11845__$1;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__11566_11847);

try{var seq__11567_11848 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_characteristic.call(null,"informs human of computer's move",((function (_STAR_parent_description_STAR__orig_val__11565_11846,_STAR_parent_description_STAR__temp_val__11566_11847,description__9152__auto___11845__$1,empty_3x3,empty_4x4,_STAR_parent_description_STAR__orig_val__10696_11698,_STAR_parent_description_STAR__temp_val__10697_11699,description__9152__auto___11697){
return (function (){
var expected__9289__auto__ = "Your opponent plays 5!\n";
var actual__9290__auto__ = (function (){var sb__5647__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__11585_11852 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__11586_11853 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__11587_11854 = true;
var _STAR_print_fn_STAR__temp_val__11588_11855 = (function (x__5648__auto__){
return sb__5647__auto__.append(x__5648__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__11587_11854);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__11588_11855);

try{tic_tac_toe.print_utils.display_bot_move_message.call(null,(5),(2),new cljs.core.Keyword(null,"o","o",-1350007228));
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__11586_11853);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__11585_11852);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5647__auto__);
})();
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
});})(_STAR_parent_description_STAR__orig_val__11565_11846,_STAR_parent_description_STAR__temp_val__11566_11847,description__9152__auto___11845__$1,empty_3x3,empty_4x4,_STAR_parent_description_STAR__orig_val__10696_11698,_STAR_parent_description_STAR__temp_val__10697_11699,description__9152__auto___11697))
,false),speclj.components.new_characteristic.call(null,"informs human of first AI's move",((function (_STAR_parent_description_STAR__orig_val__11565_11846,_STAR_parent_description_STAR__temp_val__11566_11847,description__9152__auto___11845__$1,empty_3x3,empty_4x4,_STAR_parent_description_STAR__orig_val__10696_11698,_STAR_parent_description_STAR__temp_val__10697_11699,description__9152__auto___11697){
return (function (){
var expected__9289__auto__ = "X plays 1!\n";
var actual__9290__auto__ = (function (){var sb__5647__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__11589_11858 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__11590_11859 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__11591_11860 = true;
var _STAR_print_fn_STAR__temp_val__11592_11861 = (function (x__5648__auto__){
return sb__5647__auto__.append(x__5648__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__11591_11860);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__11592_11861);

try{tic_tac_toe.print_utils.display_bot_move_message.call(null,(1),(4),new cljs.core.Keyword(null,"x","x",2099068185));
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__11590_11859);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__11589_11858);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5647__auto__);
})();
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
});})(_STAR_parent_description_STAR__orig_val__11565_11846,_STAR_parent_description_STAR__temp_val__11566_11847,description__9152__auto___11845__$1,empty_3x3,empty_4x4,_STAR_parent_description_STAR__orig_val__10696_11698,_STAR_parent_description_STAR__temp_val__10697_11699,description__9152__auto___11697))
,false),speclj.components.new_characteristic.call(null,"informs human of second AI's move",((function (_STAR_parent_description_STAR__orig_val__11565_11846,_STAR_parent_description_STAR__temp_val__11566_11847,description__9152__auto___11845__$1,empty_3x3,empty_4x4,_STAR_parent_description_STAR__orig_val__10696_11698,_STAR_parent_description_STAR__temp_val__10697_11699,description__9152__auto___11697){
return (function (){
var expected__9289__auto__ = "O plays 8!\n";
var actual__9290__auto__ = (function (){var sb__5647__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__11599_11864 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__11600_11865 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__11601_11866 = true;
var _STAR_print_fn_STAR__temp_val__11602_11867 = (function (x__5648__auto__){
return sb__5647__auto__.append(x__5648__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__11601_11866);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__11602_11867);

try{tic_tac_toe.print_utils.display_bot_move_message.call(null,(8),(4),new cljs.core.Keyword(null,"o","o",-1350007228));
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__11600_11865);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__11599_11864);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5647__auto__);
})();
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
});})(_STAR_parent_description_STAR__orig_val__11565_11846,_STAR_parent_description_STAR__temp_val__11566_11847,description__9152__auto___11845__$1,empty_3x3,empty_4x4,_STAR_parent_description_STAR__orig_val__10696_11698,_STAR_parent_description_STAR__temp_val__10697_11699,description__9152__auto___11697))
,false)],null)));
var chunk__11568_11849 = null;
var count__11569_11850 = (0);
var i__11570_11851 = (0);
while(true){
if((i__11570_11851 < count__11569_11850)){
var component__9153__auto___11868 = cljs.core._nth.call(null,chunk__11568_11849,i__11570_11851);
speclj.components.install.call(null,component__9153__auto___11868,description__9152__auto___11845__$1);


var G__11869 = seq__11567_11848;
var G__11870 = chunk__11568_11849;
var G__11871 = count__11569_11850;
var G__11872 = (i__11570_11851 + (1));
seq__11567_11848 = G__11869;
chunk__11568_11849 = G__11870;
count__11569_11850 = G__11871;
i__11570_11851 = G__11872;
continue;
} else {
var temp__5804__auto___11873 = cljs.core.seq.call(null,seq__11567_11848);
if(temp__5804__auto___11873){
var seq__11567_11874__$1 = temp__5804__auto___11873;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11567_11874__$1)){
var c__5525__auto___11875 = cljs.core.chunk_first.call(null,seq__11567_11874__$1);
var G__11876 = cljs.core.chunk_rest.call(null,seq__11567_11874__$1);
var G__11877 = c__5525__auto___11875;
var G__11878 = cljs.core.count.call(null,c__5525__auto___11875);
var G__11879 = (0);
seq__11567_11848 = G__11876;
chunk__11568_11849 = G__11877;
count__11569_11850 = G__11878;
i__11570_11851 = G__11879;
continue;
} else {
var component__9153__auto___11880 = cljs.core.first.call(null,seq__11567_11874__$1);
speclj.components.install.call(null,component__9153__auto___11880,description__9152__auto___11845__$1);


var G__11881 = cljs.core.next.call(null,seq__11567_11874__$1);
var G__11882 = null;
var G__11883 = (0);
var G__11884 = (0);
seq__11567_11848 = G__11881;
chunk__11568_11849 = G__11882;
count__11569_11850 = G__11883;
i__11570_11851 = G__11884;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__11565_11846);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__9152__auto___11845__$1);
}


var description__9152__auto____$1 = speclj.components.new_description.call(null,"print-board",false,"tic-tac-toe.print-utils-spec");
var _STAR_parent_description_STAR__orig_val__11603_11885 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__11604_11886 = description__9152__auto____$1;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__11604_11886);

try{var seq__11605_11887 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_characteristic.call(null,"prints 3x3 board to the terminal",((function (_STAR_parent_description_STAR__orig_val__11603_11885,_STAR_parent_description_STAR__temp_val__11604_11886,description__9152__auto____$1,empty_3x3,empty_4x4,_STAR_parent_description_STAR__orig_val__10696_11698,_STAR_parent_description_STAR__temp_val__10697_11699,description__9152__auto___11697){
return (function (){
var expected__9289__auto___11891 = [" ",tic_tac_toe.print_utils.purple,cljs.core.str.cljs$core$IFn$_invoke$arity$1((1)),tic_tac_toe.print_utils.reset,"  ",tic_tac_toe.print_utils.purple,cljs.core.str.cljs$core$IFn$_invoke$arity$1((2)),tic_tac_toe.print_utils.reset,"  ",tic_tac_toe.print_utils.purple,cljs.core.str.cljs$core$IFn$_invoke$arity$1((3)),tic_tac_toe.print_utils.reset,"\n"," ",tic_tac_toe.print_utils.purple,cljs.core.str.cljs$core$IFn$_invoke$arity$1((4)),tic_tac_toe.print_utils.reset,"  ",tic_tac_toe.print_utils.purple,cljs.core.str.cljs$core$IFn$_invoke$arity$1((5)),tic_tac_toe.print_utils.reset,"  ",tic_tac_toe.print_utils.purple,cljs.core.str.cljs$core$IFn$_invoke$arity$1((6)),tic_tac_toe.print_utils.reset,"\n"," ",tic_tac_toe.print_utils.purple,cljs.core.str.cljs$core$IFn$_invoke$arity$1((7)),tic_tac_toe.print_utils.reset,"  ",tic_tac_toe.print_utils.purple,cljs.core.str.cljs$core$IFn$_invoke$arity$1((8)),tic_tac_toe.print_utils.reset,"  ",tic_tac_toe.print_utils.purple,cljs.core.str.cljs$core$IFn$_invoke$arity$1((9)),tic_tac_toe.print_utils.reset,"\n\n"].join('');
var actual__9290__auto___11892 = (function (){var sb__5647__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__11629_11899 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__11630_11900 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__11631_11901 = true;
var _STAR_print_fn_STAR__temp_val__11632_11902 = (function (x__5648__auto__){
return sb__5647__auto__.append(x__5648__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__11631_11901);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__11632_11902);

try{tic_tac_toe.print_utils.print_board.call(null,empty_3x3);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__11630_11900);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__11629_11899);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5647__auto__);
})();
if(cljs.core._EQ_.call(null,expected__9289__auto___11891,actual__9290__auto___11892)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__9289__auto___11891;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9257__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9257__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__9290__auto___11892;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9257__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9257__auto__);
}
})()," (using =)"].join('')));
}

var expected__9289__auto__ = [" ",tic_tac_toe.print_utils.purple,cljs.core.str.cljs$core$IFn$_invoke$arity$1((1)),tic_tac_toe.print_utils.reset,"  X  ",tic_tac_toe.print_utils.purple,cljs.core.str.cljs$core$IFn$_invoke$arity$1((3)),tic_tac_toe.print_utils.reset,"\n"," ",tic_tac_toe.print_utils.purple,cljs.core.str.cljs$core$IFn$_invoke$arity$1((4)),tic_tac_toe.print_utils.reset,"  O  ",tic_tac_toe.print_utils.purple,cljs.core.str.cljs$core$IFn$_invoke$arity$1((6)),tic_tac_toe.print_utils.reset,"\n"," O  ",tic_tac_toe.print_utils.purple,cljs.core.str.cljs$core$IFn$_invoke$arity$1((8)),tic_tac_toe.print_utils.reset,"  ",tic_tac_toe.print_utils.purple,cljs.core.str.cljs$core$IFn$_invoke$arity$1((9)),tic_tac_toe.print_utils.reset,"\n\n"].join('');
var actual__9290__auto__ = (function (){var sb__5647__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__11633_11911 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__11634_11912 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__11635_11913 = true;
var _STAR_print_fn_STAR__temp_val__11636_11914 = (function (x__5648__auto__){
return sb__5647__auto__.append(x__5648__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__11635_11913);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__11636_11914);

try{tic_tac_toe.print_utils.print_board.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),new cljs.core.Keyword(null,"x","x",2099068185),(3),(4),new cljs.core.Keyword(null,"o","o",-1350007228),(6),new cljs.core.Keyword(null,"o","o",-1350007228),(8),(9)], null));
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__11634_11912);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__11633_11911);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5647__auto__);
})();
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
});})(_STAR_parent_description_STAR__orig_val__11603_11885,_STAR_parent_description_STAR__temp_val__11604_11886,description__9152__auto____$1,empty_3x3,empty_4x4,_STAR_parent_description_STAR__orig_val__10696_11698,_STAR_parent_description_STAR__temp_val__10697_11699,description__9152__auto___11697))
,false),speclj.components.new_characteristic.call(null,"prints 4x4 board to the terminal",((function (_STAR_parent_description_STAR__orig_val__11603_11885,_STAR_parent_description_STAR__temp_val__11604_11886,description__9152__auto____$1,empty_3x3,empty_4x4,_STAR_parent_description_STAR__orig_val__10696_11698,_STAR_parent_description_STAR__temp_val__10697_11699,description__9152__auto___11697){
return (function (){
var expected__9289__auto___11919 = [" ",tic_tac_toe.print_utils.purple,cljs.core.str.cljs$core$IFn$_invoke$arity$1((1)),tic_tac_toe.print_utils.reset,"  ",tic_tac_toe.print_utils.purple,cljs.core.str.cljs$core$IFn$_invoke$arity$1((2)),tic_tac_toe.print_utils.reset,"  ",tic_tac_toe.print_utils.purple,cljs.core.str.cljs$core$IFn$_invoke$arity$1((3)),tic_tac_toe.print_utils.reset,"  ",tic_tac_toe.print_utils.purple,cljs.core.str.cljs$core$IFn$_invoke$arity$1((4)),tic_tac_toe.print_utils.reset,"\n"," ",tic_tac_toe.print_utils.purple,cljs.core.str.cljs$core$IFn$_invoke$arity$1((5)),tic_tac_toe.print_utils.reset,"  ",tic_tac_toe.print_utils.purple,cljs.core.str.cljs$core$IFn$_invoke$arity$1((6)),tic_tac_toe.print_utils.reset,"  ",tic_tac_toe.print_utils.purple,cljs.core.str.cljs$core$IFn$_invoke$arity$1((7)),tic_tac_toe.print_utils.reset,"  ",tic_tac_toe.print_utils.purple,cljs.core.str.cljs$core$IFn$_invoke$arity$1((8)),tic_tac_toe.print_utils.reset,"\n"," ",tic_tac_toe.print_utils.purple,cljs.core.str.cljs$core$IFn$_invoke$arity$1((9)),tic_tac_toe.print_utils.reset," ",tic_tac_toe.print_utils.purple,cljs.core.str.cljs$core$IFn$_invoke$arity$1((10)),tic_tac_toe.print_utils.reset," ",tic_tac_toe.print_utils.purple,cljs.core.str.cljs$core$IFn$_invoke$arity$1((11)),tic_tac_toe.print_utils.reset," ",tic_tac_toe.print_utils.purple,cljs.core.str.cljs$core$IFn$_invoke$arity$1((12)),tic_tac_toe.print_utils.reset,"\n",tic_tac_toe.print_utils.purple,cljs.core.str.cljs$core$IFn$_invoke$arity$1((13)),tic_tac_toe.print_utils.reset," ",tic_tac_toe.print_utils.purple,cljs.core.str.cljs$core$IFn$_invoke$arity$1((14)),tic_tac_toe.print_utils.reset," ",tic_tac_toe.print_utils.purple,cljs.core.str.cljs$core$IFn$_invoke$arity$1((15)),tic_tac_toe.print_utils.reset," ",tic_tac_toe.print_utils.purple,cljs.core.str.cljs$core$IFn$_invoke$arity$1((16)),tic_tac_toe.print_utils.reset,"\n\n"].join('');
var actual__9290__auto___11920 = (function (){var sb__5647__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__11637_11933 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__11638_11934 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__11639_11935 = true;
var _STAR_print_fn_STAR__temp_val__11640_11936 = (function (x__5648__auto__){
return sb__5647__auto__.append(x__5648__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__11639_11935);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__11640_11936);

try{tic_tac_toe.print_utils.print_board.call(null,empty_4x4);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__11638_11934);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__11637_11933);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5647__auto__);
})();
if(cljs.core._EQ_.call(null,expected__9289__auto___11919,actual__9290__auto___11920)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__9289__auto___11919;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9257__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9257__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__9290__auto___11920;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9257__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9257__auto__);
}
})()," (using =)"].join('')));
}

var expected__9289__auto__ = [" ",tic_tac_toe.print_utils.purple,cljs.core.str.cljs$core$IFn$_invoke$arity$1((1)),tic_tac_toe.print_utils.reset,"  X  ",tic_tac_toe.print_utils.purple,cljs.core.str.cljs$core$IFn$_invoke$arity$1((3)),tic_tac_toe.print_utils.reset,"  ",tic_tac_toe.print_utils.purple,cljs.core.str.cljs$core$IFn$_invoke$arity$1((4)),tic_tac_toe.print_utils.reset,"\n"," O  ",tic_tac_toe.print_utils.purple,cljs.core.str.cljs$core$IFn$_invoke$arity$1((6)),tic_tac_toe.print_utils.reset,"  O  ",tic_tac_toe.print_utils.purple,cljs.core.str.cljs$core$IFn$_invoke$arity$1((8)),tic_tac_toe.print_utils.reset,"\n"," X  X  O  O\n",tic_tac_toe.print_utils.purple,cljs.core.str.cljs$core$IFn$_invoke$arity$1((13)),tic_tac_toe.print_utils.reset,"  X  X  O\n\n"].join('');
var actual__9290__auto__ = (function (){var sb__5647__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__11647_11943 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__11648_11944 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__11649_11945 = true;
var _STAR_print_fn_STAR__temp_val__11650_11946 = (function (x__5648__auto__){
return sb__5647__auto__.append(x__5648__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__11649_11945);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__11650_11946);

try{tic_tac_toe.print_utils.print_board.call(null,new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),new cljs.core.Keyword(null,"x","x",2099068185),(3),(4),new cljs.core.Keyword(null,"o","o",-1350007228),(6),new cljs.core.Keyword(null,"o","o",-1350007228),(8),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"o","o",-1350007228),new cljs.core.Keyword(null,"o","o",-1350007228),(13),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"o","o",-1350007228)], null));
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__11648_11944);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__11647_11943);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5647__auto__);
})();
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
});})(_STAR_parent_description_STAR__orig_val__11603_11885,_STAR_parent_description_STAR__temp_val__11604_11886,description__9152__auto____$1,empty_3x3,empty_4x4,_STAR_parent_description_STAR__orig_val__10696_11698,_STAR_parent_description_STAR__temp_val__10697_11699,description__9152__auto___11697))
,false),speclj.components.new_characteristic.call(null,"prints 3x3x3 board to the terminal",((function (_STAR_parent_description_STAR__orig_val__11603_11885,_STAR_parent_description_STAR__temp_val__11604_11886,description__9152__auto____$1,empty_3x3,empty_4x4,_STAR_parent_description_STAR__orig_val__10696_11698,_STAR_parent_description_STAR__temp_val__10697_11699,description__9152__auto___11697){
return (function (){
var expected__9289__auto__ = [" ",tic_tac_toe.print_utils.purple,cljs.core.str.cljs$core$IFn$_invoke$arity$1((1)),tic_tac_toe.print_utils.reset,"  ",tic_tac_toe.print_utils.purple,cljs.core.str.cljs$core$IFn$_invoke$arity$1((2)),tic_tac_toe.print_utils.reset,"  ",tic_tac_toe.print_utils.purple,cljs.core.str.cljs$core$IFn$_invoke$arity$1((3)),tic_tac_toe.print_utils.reset,"\n"," ",tic_tac_toe.print_utils.purple,cljs.core.str.cljs$core$IFn$_invoke$arity$1((4)),tic_tac_toe.print_utils.reset,"  ",tic_tac_toe.print_utils.purple,cljs.core.str.cljs$core$IFn$_invoke$arity$1((5)),tic_tac_toe.print_utils.reset,"  ",tic_tac_toe.print_utils.purple,cljs.core.str.cljs$core$IFn$_invoke$arity$1((6)),tic_tac_toe.print_utils.reset,"\n"," ",tic_tac_toe.print_utils.purple,cljs.core.str.cljs$core$IFn$_invoke$arity$1((7)),tic_tac_toe.print_utils.reset,"  ",tic_tac_toe.print_utils.purple,cljs.core.str.cljs$core$IFn$_invoke$arity$1((8)),tic_tac_toe.print_utils.reset,"  ",tic_tac_toe.print_utils.purple,cljs.core.str.cljs$core$IFn$_invoke$arity$1((9)),tic_tac_toe.print_utils.reset,"\n\n",tic_tac_toe.print_utils.purple,cljs.core.str.cljs$core$IFn$_invoke$arity$1((10)),tic_tac_toe.print_utils.reset," ",tic_tac_toe.print_utils.purple,cljs.core.str.cljs$core$IFn$_invoke$arity$1((11)),tic_tac_toe.print_utils.reset," ",tic_tac_toe.print_utils.purple,cljs.core.str.cljs$core$IFn$_invoke$arity$1((12)),tic_tac_toe.print_utils.reset,"\n",tic_tac_toe.print_utils.purple,cljs.core.str.cljs$core$IFn$_invoke$arity$1((13)),tic_tac_toe.print_utils.reset," ",tic_tac_toe.print_utils.purple,cljs.core.str.cljs$core$IFn$_invoke$arity$1((14)),tic_tac_toe.print_utils.reset," ",tic_tac_toe.print_utils.purple,cljs.core.str.cljs$core$IFn$_invoke$arity$1((15)),tic_tac_toe.print_utils.reset,"\n",tic_tac_toe.print_utils.purple,cljs.core.str.cljs$core$IFn$_invoke$arity$1((16)),tic_tac_toe.print_utils.reset," ",tic_tac_toe.print_utils.purple,cljs.core.str.cljs$core$IFn$_invoke$arity$1((17)),tic_tac_toe.print_utils.reset," ",tic_tac_toe.print_utils.purple,cljs.core.str.cljs$core$IFn$_invoke$arity$1((18)),tic_tac_toe.print_utils.reset,"\n\n",tic_tac_toe.print_utils.purple,cljs.core.str.cljs$core$IFn$_invoke$arity$1((19)),tic_tac_toe.print_utils.reset," ",tic_tac_toe.print_utils.purple,cljs.core.str.cljs$core$IFn$_invoke$arity$1((20)),tic_tac_toe.print_utils.reset," ",tic_tac_toe.print_utils.purple,cljs.core.str.cljs$core$IFn$_invoke$arity$1((21)),tic_tac_toe.print_utils.reset,"\n",tic_tac_toe.print_utils.purple,cljs.core.str.cljs$core$IFn$_invoke$arity$1((22)),tic_tac_toe.print_utils.reset," ",tic_tac_toe.print_utils.purple,cljs.core.str.cljs$core$IFn$_invoke$arity$1((23)),tic_tac_toe.print_utils.reset," ",tic_tac_toe.print_utils.purple,cljs.core.str.cljs$core$IFn$_invoke$arity$1((24)),tic_tac_toe.print_utils.reset,"\n",tic_tac_toe.print_utils.purple,cljs.core.str.cljs$core$IFn$_invoke$arity$1((25)),tic_tac_toe.print_utils.reset," ",tic_tac_toe.print_utils.purple,cljs.core.str.cljs$core$IFn$_invoke$arity$1((26)),tic_tac_toe.print_utils.reset," ",tic_tac_toe.print_utils.purple,cljs.core.str.cljs$core$IFn$_invoke$arity$1((27)),tic_tac_toe.print_utils.reset,"\n\n"].join('');
var actual__9290__auto__ = (function (){var sb__5647__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__11651_11951 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__11652_11952 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__11653_11953 = true;
var _STAR_print_fn_STAR__temp_val__11654_11954 = (function (x__5648__auto__){
return sb__5647__auto__.append(x__5648__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__11653_11953);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__11654_11954);

try{tic_tac_toe.print_utils.print_board.call(null,cljs.core.range.call(null,(1),(28)));
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__11652_11952);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__11651_11951);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5647__auto__);
})();
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
});})(_STAR_parent_description_STAR__orig_val__11603_11885,_STAR_parent_description_STAR__temp_val__11604_11886,description__9152__auto____$1,empty_3x3,empty_4x4,_STAR_parent_description_STAR__orig_val__10696_11698,_STAR_parent_description_STAR__temp_val__10697_11699,description__9152__auto___11697))
,false)],null)));
var chunk__11606_11888 = null;
var count__11607_11889 = (0);
var i__11608_11890 = (0);
while(true){
if((i__11608_11890 < count__11607_11889)){
var component__9153__auto___11959 = cljs.core._nth.call(null,chunk__11606_11888,i__11608_11890);
speclj.components.install.call(null,component__9153__auto___11959,description__9152__auto____$1);


var G__11960 = seq__11605_11887;
var G__11961 = chunk__11606_11888;
var G__11962 = count__11607_11889;
var G__11963 = (i__11608_11890 + (1));
seq__11605_11887 = G__11960;
chunk__11606_11888 = G__11961;
count__11607_11889 = G__11962;
i__11608_11890 = G__11963;
continue;
} else {
var temp__5804__auto___11964 = cljs.core.seq.call(null,seq__11605_11887);
if(temp__5804__auto___11964){
var seq__11605_11965__$1 = temp__5804__auto___11964;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11605_11965__$1)){
var c__5525__auto___11966 = cljs.core.chunk_first.call(null,seq__11605_11965__$1);
var G__11967 = cljs.core.chunk_rest.call(null,seq__11605_11965__$1);
var G__11968 = c__5525__auto___11966;
var G__11969 = cljs.core.count.call(null,c__5525__auto___11966);
var G__11970 = (0);
seq__11605_11887 = G__11967;
chunk__11606_11888 = G__11968;
count__11607_11889 = G__11969;
i__11608_11890 = G__11970;
continue;
} else {
var component__9153__auto___11971 = cljs.core.first.call(null,seq__11605_11965__$1);
speclj.components.install.call(null,component__9153__auto___11971,description__9152__auto____$1);


var G__11972 = cljs.core.next.call(null,seq__11605_11965__$1);
var G__11973 = null;
var G__11974 = (0);
var G__11975 = (0);
seq__11605_11887 = G__11972;
chunk__11606_11888 = G__11973;
count__11607_11889 = G__11974;
i__11608_11890 = G__11975;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__11603_11885);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__9152__auto____$1);
}

return description__9152__auto____$1;
})(),(function (){var description__9152__auto____$1 = speclj.components.new_description.call(null,"play-logged-game",false,"tic-tac-toe.print-utils-spec");
var _STAR_parent_description_STAR__orig_val__11655_11977 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__11656_11978 = description__9152__auto____$1;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__11656_11978);

try{var seq__11657_11983 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_characteristic.call(null,"prints error message if there are no moves",((function (_STAR_parent_description_STAR__orig_val__11655_11977,_STAR_parent_description_STAR__temp_val__11656_11978,description__9152__auto____$1,_STAR_parent_description_STAR__orig_val__10696_11698,_STAR_parent_description_STAR__temp_val__10697_11699,description__9152__auto___11697){
return (function (){
var expected__9289__auto___11989 = "There are no moves to show for this game.\n";
var actual__9290__auto___11990 = (function (){var sb__5647__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__11673_11996 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__11674_11997 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__11675_11998 = true;
var _STAR_print_fn_STAR__temp_val__11676_11999 = (function (x__5648__auto__){
return sb__5647__auto__.append(x__5648__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__11675_11998);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__11676_11999);

try{tic_tac_toe.print_utils.play_logged_game.call(null,cljs.core.PersistentVector.EMPTY,null);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__11674_11997);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__11673_11996);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5647__auto__);
})();
if(cljs.core._EQ_.call(null,expected__9289__auto___11989,actual__9290__auto___11990)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__9289__auto___11989;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9257__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9257__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__9290__auto___11990;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9257__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9257__auto__);
}
})()," (using =)"].join('')));
}

var expected__9289__auto__ = "There are no moves to show for this game.\n";
var actual__9290__auto__ = (function (){var sb__5647__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__11677_12011 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__11678_12012 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__11679_12013 = true;
var _STAR_print_fn_STAR__temp_val__11680_12014 = (function (x__5648__auto__){
return sb__5647__auto__.append(x__5648__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__11679_12013);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__11680_12014);

try{tic_tac_toe.print_utils.play_logged_game.call(null,null,null);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__11678_12012);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__11677_12011);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5647__auto__);
})();
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
});})(_STAR_parent_description_STAR__orig_val__11655_11977,_STAR_parent_description_STAR__temp_val__11656_11978,description__9152__auto____$1,_STAR_parent_description_STAR__orig_val__10696_11698,_STAR_parent_description_STAR__temp_val__10697_11699,description__9152__auto___11697))
,false),speclj.components.new_characteristic.call(null,"prints each move to the console in order followed by winner",((function (_STAR_parent_description_STAR__orig_val__11655_11977,_STAR_parent_description_STAR__temp_val__11656_11978,description__9152__auto____$1,_STAR_parent_description_STAR__orig_val__10696_11698,_STAR_parent_description_STAR__temp_val__10697_11699,description__9152__auto___11697){
return (function (){
var print_board_orig_val__11681 = tic_tac_toe.print_utils.print_board;
var println_orig_val__11682 = cljs.core.println;
var print_board_temp_val__11683 = speclj.stub.stub.call(null,new cljs.core.Keyword(null,"print-board","print-board",1861954072),cljs.core.PersistentArrayMap.EMPTY);
var println_temp_val__11684 = speclj.stub.stub.call(null,new cljs.core.Keyword(null,"println","println",1920840330),cljs.core.PersistentArrayMap.EMPTY);
(tic_tac_toe.print_utils.print_board = print_board_temp_val__11683);

(cljs.core.println = println_temp_val__11684);

try{tic_tac_toe.print_utils.play_logged_game.call(null,cljs.core.list(new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(3),(4),new cljs.core.Keyword(null,"x","x",2099068185),(6),(7),(8),(9)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"o","o",-1350007228),(2),(3),(4),new cljs.core.Keyword(null,"x","x",2099068185),(6),(7),(8),(9)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"o","o",-1350007228),(2),(3),(4),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"x","x",2099068185),(7),(8),(9)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"o","o",-1350007228),(2),(3),new cljs.core.Keyword(null,"o","o",-1350007228),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"x","x",2099068185),(7),(8),(9)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"o","o",-1350007228),(2),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"o","o",-1350007228),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"x","x",2099068185),(7),(8),(9)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"o","o",-1350007228),(2),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"o","o",-1350007228),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"o","o",-1350007228),(8),(9)], null)),"O wins!");

var expected__9289__auto___12017 = new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(3),(4),new cljs.core.Keyword(null,"x","x",2099068185),(6),(7),(8),(9)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"o","o",-1350007228),(2),(3),(4),new cljs.core.Keyword(null,"x","x",2099068185),(6),(7),(8),(9)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"o","o",-1350007228),(2),(3),(4),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"x","x",2099068185),(7),(8),(9)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"o","o",-1350007228),(2),(3),new cljs.core.Keyword(null,"o","o",-1350007228),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"x","x",2099068185),(7),(8),(9)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"o","o",-1350007228),(2),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"o","o",-1350007228),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"x","x",2099068185),(7),(8),(9)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"o","o",-1350007228),(2),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"o","o",-1350007228),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"o","o",-1350007228),(8),(9)], null)], null)], null);
var actual__9290__auto___12018 = speclj.stub.invocations_of.call(null,new cljs.core.Keyword(null,"print-board","print-board",1861954072));
if(cljs.core._EQ_.call(null,expected__9289__auto___12017,actual__9290__auto___12018)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__9289__auto___12017;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9257__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9257__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__9290__auto___12018;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9257__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9257__auto__);
}
})()," (using =)"].join('')));
}

var name__9536__auto__ = new cljs.core.Keyword(null,"println","println",1920840330);
var options__9537__auto__ = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"with","with",-1536296876),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["O wins!"], null)], null);
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
}finally {(cljs.core.println = println_orig_val__11682);

(tic_tac_toe.print_utils.print_board = print_board_orig_val__11681);
}});})(_STAR_parent_description_STAR__orig_val__11655_11977,_STAR_parent_description_STAR__temp_val__11656_11978,description__9152__auto____$1,_STAR_parent_description_STAR__orig_val__10696_11698,_STAR_parent_description_STAR__temp_val__10697_11699,description__9152__auto___11697))
,false)],null)));
var chunk__11658_11984 = null;
var count__11659_11985 = (0);
var i__11660_11986 = (0);
while(true){
if((i__11660_11986 < count__11659_11985)){
var component__9153__auto___12027 = cljs.core._nth.call(null,chunk__11658_11984,i__11660_11986);
speclj.components.install.call(null,component__9153__auto___12027,description__9152__auto____$1);


var G__12028 = seq__11657_11983;
var G__12029 = chunk__11658_11984;
var G__12030 = count__11659_11985;
var G__12031 = (i__11660_11986 + (1));
seq__11657_11983 = G__12028;
chunk__11658_11984 = G__12029;
count__11659_11985 = G__12030;
i__11660_11986 = G__12031;
continue;
} else {
var temp__5804__auto___12032 = cljs.core.seq.call(null,seq__11657_11983);
if(temp__5804__auto___12032){
var seq__11657_12033__$1 = temp__5804__auto___12032;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11657_12033__$1)){
var c__5525__auto___12034 = cljs.core.chunk_first.call(null,seq__11657_12033__$1);
var G__12035 = cljs.core.chunk_rest.call(null,seq__11657_12033__$1);
var G__12036 = c__5525__auto___12034;
var G__12037 = cljs.core.count.call(null,c__5525__auto___12034);
var G__12038 = (0);
seq__11657_11983 = G__12035;
chunk__11658_11984 = G__12036;
count__11659_11985 = G__12037;
i__11660_11986 = G__12038;
continue;
} else {
var component__9153__auto___12039 = cljs.core.first.call(null,seq__11657_12033__$1);
speclj.components.install.call(null,component__9153__auto___12039,description__9152__auto____$1);


var G__12040 = cljs.core.next.call(null,seq__11657_12033__$1);
var G__12041 = null;
var G__12042 = (0);
var G__12043 = (0);
seq__11657_11983 = G__12040;
chunk__11658_11984 = G__12041;
count__11659_11985 = G__12042;
i__11660_11986 = G__12043;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__11655_11977);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__9152__auto____$1);
}

return description__9152__auto____$1;
})(),speclj.components.new_characteristic.call(null,"shows error message when psql game is incomplete and can't be replayed",((function (_STAR_parent_description_STAR__orig_val__10696_11698,_STAR_parent_description_STAR__temp_val__10697_11699,description__9152__auto___11697){
return (function (){
var expected__9289__auto__ = "The requested game is unfinished. Please choose a completed game to replay.\n";
var actual__9290__auto__ = (function (){var sb__5647__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__11685_12044 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__11686_12045 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__11687_12046 = true;
var _STAR_print_fn_STAR__temp_val__11688_12047 = (function (x__5648__auto__){
return sb__5647__auto__.append(x__5648__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__11687_12046);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__11688_12047);

try{tic_tac_toe.print_utils.display_unfinished_game_error.call(null);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__11686_12045);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__11685_12044);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5647__auto__);
})();
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
});})(_STAR_parent_description_STAR__orig_val__10696_11698,_STAR_parent_description_STAR__temp_val__10697_11699,description__9152__auto___11697))
,false),speclj.components.new_characteristic.call(null,"shows error message when game id is invalid",((function (_STAR_parent_description_STAR__orig_val__10696_11698,_STAR_parent_description_STAR__temp_val__10697_11699,description__9152__auto___11697){
return (function (){
var expected__9289__auto__ = "There is no game with ID 20\n";
var actual__9290__auto__ = (function (){var sb__5647__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__11689_12048 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__11690_12049 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__11691_12050 = true;
var _STAR_print_fn_STAR__temp_val__11692_12051 = (function (x__5648__auto__){
return sb__5647__auto__.append(x__5648__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__11691_12050);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__11692_12051);

try{tic_tac_toe.print_utils.display_invalid_game_id_error.call(null,(20));
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__11690_12049);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__11689_12048);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5647__auto__);
})();
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
});})(_STAR_parent_description_STAR__orig_val__10696_11698,_STAR_parent_description_STAR__temp_val__10697_11699,description__9152__auto___11697))
,false),speclj.components.new_characteristic.call(null,"displays command options to user",((function (_STAR_parent_description_STAR__orig_val__10696_11698,_STAR_parent_description_STAR__temp_val__10697_11699,description__9152__auto___11697){
return (function (){
var println_orig_val__11693 = cljs.core.println;
var println_temp_val__11694 = speclj.stub.stub.call(null,new cljs.core.Keyword(null,"println","println",1920840330),cljs.core.PersistentArrayMap.EMPTY);
(cljs.core.println = println_temp_val__11694);

try{tic_tac_toe.print_utils.display_command_options.call(null);

var expected__9289__auto__ = new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Please enter your preferences:"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Format: 'lein run <ui> <db> <game id>"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["<db> is the only required field\n"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["--psqldb         Run with PostgreSQL"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["--edndb         Run with EDN Database"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["gui             Run GUI"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["--game <id>     Run GUI"], null)], null);
var actual__9290__auto__ = speclj.stub.invocations_of.call(null,new cljs.core.Keyword(null,"println","println",1920840330));
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
}finally {(cljs.core.println = println_orig_val__11693);
}});})(_STAR_parent_description_STAR__orig_val__10696_11698,_STAR_parent_description_STAR__temp_val__10697_11699,description__9152__auto___11697))
,false)],null)));
var chunk__10703_11701 = null;
var count__10704_11702 = (0);
var i__10705_11703 = (0);
while(true){
if((i__10705_11703 < count__10704_11702)){
var component__9153__auto___12052 = cljs.core._nth.call(null,chunk__10703_11701,i__10705_11703);
speclj.components.install.call(null,component__9153__auto___12052,description__9152__auto___11697);


var G__12053 = seq__10702_11700;
var G__12054 = chunk__10703_11701;
var G__12055 = count__10704_11702;
var G__12056 = (i__10705_11703 + (1));
seq__10702_11700 = G__12053;
chunk__10703_11701 = G__12054;
count__10704_11702 = G__12055;
i__10705_11703 = G__12056;
continue;
} else {
var temp__5804__auto___12057 = cljs.core.seq.call(null,seq__10702_11700);
if(temp__5804__auto___12057){
var seq__10702_12058__$1 = temp__5804__auto___12057;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10702_12058__$1)){
var c__5525__auto___12059 = cljs.core.chunk_first.call(null,seq__10702_12058__$1);
var G__12060 = cljs.core.chunk_rest.call(null,seq__10702_12058__$1);
var G__12061 = c__5525__auto___12059;
var G__12062 = cljs.core.count.call(null,c__5525__auto___12059);
var G__12063 = (0);
seq__10702_11700 = G__12060;
chunk__10703_11701 = G__12061;
count__10704_11702 = G__12062;
i__10705_11703 = G__12063;
continue;
} else {
var component__9153__auto___12064 = cljs.core.first.call(null,seq__10702_12058__$1);
speclj.components.install.call(null,component__9153__auto___12064,description__9152__auto___11697);


var G__12066 = cljs.core.next.call(null,seq__10702_12058__$1);
var G__12067 = null;
var G__12068 = (0);
var G__12069 = (0);
seq__10702_11700 = G__12066;
chunk__10703_11701 = G__12067;
count__10704_11702 = G__12068;
i__10705_11703 = G__12069;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__10696_11698);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__9152__auto___11697);
}


//# sourceMappingURL=print_utils_spec.js.map
