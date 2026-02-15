// Compiled by ClojureScript 1.11.132 {:optimizations :none}
goog.provide('tic_tac_toe.print_utils_spec');
goog.require('cljs.core');
goog.require('speclj.core');
goog.require('speclj.stub');
goog.require('tic_tac_toe.print_utils');
var description__7638__auto___8919 = speclj.components.new_description.call(null,"utility functions",false,"tic-tac-toe.print-utils-spec");
var _STAR_parent_description_STAR__orig_val__8126_8920 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__8127_8921 = description__7638__auto___8919;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__8127_8921);

try{var seq__8130_8922 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,6,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_around.call(null,((function (_STAR_parent_description_STAR__orig_val__8126_8920,_STAR_parent_description_STAR__temp_val__8127_8921,description__7638__auto___8919){
return (function (it__8008__auto__){
var _STAR_stubbed_invocations_STAR__orig_val__8639 = speclj.stub._STAR_stubbed_invocations_STAR_;
var _STAR_stubbed_invocations_STAR__temp_val__8640 = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
(speclj.stub._STAR_stubbed_invocations_STAR_ = _STAR_stubbed_invocations_STAR__temp_val__8640);

try{return it__8008__auto__.call(null);
}finally {(speclj.stub._STAR_stubbed_invocations_STAR_ = _STAR_stubbed_invocations_STAR__orig_val__8639);
}});})(_STAR_parent_description_STAR__orig_val__8126_8920,_STAR_parent_description_STAR__temp_val__8127_8921,description__7638__auto___8919))
),(function (){var empty_3x3 = new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(3),(4),(5),(6),(7),(8),(9)], null);
var empty_4x4 = new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(3),(4),(5),(6),(7),(8),(9),(10),(11),(12),(13),(14),(15),(16)], null);
var description__7638__auto___8926__$1 = speclj.components.new_description.call(null,"display-invalid-move-error",false,"tic-tac-toe.print-utils-spec");
var _STAR_parent_description_STAR__orig_val__8641_8927 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__8642_8928 = description__7638__auto___8926__$1;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__8642_8928);

try{var seq__8643_8929 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_characteristic.call(null,"asks for a valid move",((function (_STAR_parent_description_STAR__orig_val__8641_8927,_STAR_parent_description_STAR__temp_val__8642_8928,description__7638__auto___8926__$1,empty_3x3,empty_4x4,_STAR_parent_description_STAR__orig_val__8126_8920,_STAR_parent_description_STAR__temp_val__8127_8921,description__7638__auto___8919){
return (function (){
var expected__7775__auto__ = "Please choose an empty cell\n";
var actual__7776__auto__ = (function (){var sb__5647__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__8651_8933 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__8652_8934 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__8653_8935 = true;
var _STAR_print_fn_STAR__temp_val__8654_8936 = (function (x__5648__auto__){
return sb__5647__auto__.append(x__5648__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__8653_8935);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__8654_8936);

try{tic_tac_toe.print_utils.display_invalid_move_error.call(null);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__8652_8934);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__8651_8933);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5647__auto__);
})();
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
});})(_STAR_parent_description_STAR__orig_val__8641_8927,_STAR_parent_description_STAR__temp_val__8642_8928,description__7638__auto___8926__$1,empty_3x3,empty_4x4,_STAR_parent_description_STAR__orig_val__8126_8920,_STAR_parent_description_STAR__temp_val__8127_8921,description__7638__auto___8919))
,false)],null)));
var chunk__8644_8930 = null;
var count__8645_8931 = (0);
var i__8646_8932 = (0);
while(true){
if((i__8646_8932 < count__8645_8931)){
var component__7639__auto___8937 = cljs.core._nth.call(null,chunk__8644_8930,i__8646_8932);
speclj.components.install.call(null,component__7639__auto___8937,description__7638__auto___8926__$1);


var G__8938 = seq__8643_8929;
var G__8939 = chunk__8644_8930;
var G__8940 = count__8645_8931;
var G__8941 = (i__8646_8932 + (1));
seq__8643_8929 = G__8938;
chunk__8644_8930 = G__8939;
count__8645_8931 = G__8940;
i__8646_8932 = G__8941;
continue;
} else {
var temp__5804__auto___8942 = cljs.core.seq.call(null,seq__8643_8929);
if(temp__5804__auto___8942){
var seq__8643_8943__$1 = temp__5804__auto___8942;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8643_8943__$1)){
var c__5525__auto___8944 = cljs.core.chunk_first.call(null,seq__8643_8943__$1);
var G__8945 = cljs.core.chunk_rest.call(null,seq__8643_8943__$1);
var G__8946 = c__5525__auto___8944;
var G__8947 = cljs.core.count.call(null,c__5525__auto___8944);
var G__8948 = (0);
seq__8643_8929 = G__8945;
chunk__8644_8930 = G__8946;
count__8645_8931 = G__8947;
i__8646_8932 = G__8948;
continue;
} else {
var component__7639__auto___8949 = cljs.core.first.call(null,seq__8643_8943__$1);
speclj.components.install.call(null,component__7639__auto___8949,description__7638__auto___8926__$1);


var G__8950 = cljs.core.next.call(null,seq__8643_8943__$1);
var G__8951 = null;
var G__8952 = (0);
var G__8953 = (0);
seq__8643_8929 = G__8950;
chunk__8644_8930 = G__8951;
count__8645_8931 = G__8952;
i__8646_8932 = G__8953;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__8641_8927);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__7638__auto___8926__$1);
}


var description__7638__auto___8954__$1 = speclj.components.new_description.call(null,"prompt-user-for-move",false,"tic-tac-toe.print-utils-spec");
var _STAR_parent_description_STAR__orig_val__8655_8955 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__8656_8956 = description__7638__auto___8954__$1;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__8656_8956);

try{var seq__8657_8957 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_characteristic.call(null,"asks user to input a move",((function (_STAR_parent_description_STAR__orig_val__8655_8955,_STAR_parent_description_STAR__temp_val__8656_8956,description__7638__auto___8954__$1,empty_3x3,empty_4x4,_STAR_parent_description_STAR__orig_val__8126_8920,_STAR_parent_description_STAR__temp_val__8127_8921,description__7638__auto___8919){
return (function (){
var expected__7775__auto__ = "Please enter your move (type 1-9 and hit enter):\n";
var actual__7776__auto__ = (function (){var sb__5647__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__8681_8961 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__8682_8962 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__8683_8963 = true;
var _STAR_print_fn_STAR__temp_val__8684_8964 = (function (x__5648__auto__){
return sb__5647__auto__.append(x__5648__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__8683_8963);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__8684_8964);

try{tic_tac_toe.print_utils.prompt_user_for_move.call(null,new cljs.core.Keyword(null,"o","o",-1350007228),(2),empty_3x3);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__8682_8962);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__8681_8961);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5647__auto__);
})();
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
});})(_STAR_parent_description_STAR__orig_val__8655_8955,_STAR_parent_description_STAR__temp_val__8656_8956,description__7638__auto___8954__$1,empty_3x3,empty_4x4,_STAR_parent_description_STAR__orig_val__8126_8920,_STAR_parent_description_STAR__temp_val__8127_8921,description__7638__auto___8919))
,false),speclj.components.new_characteristic.call(null,"says which player's turn it is if human vs human",((function (_STAR_parent_description_STAR__orig_val__8655_8955,_STAR_parent_description_STAR__temp_val__8656_8956,description__7638__auto___8954__$1,empty_3x3,empty_4x4,_STAR_parent_description_STAR__orig_val__8126_8920,_STAR_parent_description_STAR__temp_val__8127_8921,description__7638__auto___8919){
return (function (){
var expected__7775__auto___8965 = "O's turn!\nPlease enter your move (type 1-9 and hit enter):\n";
var actual__7776__auto___8966 = (function (){var sb__5647__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__8685_8967 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__8686_8968 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__8687_8969 = true;
var _STAR_print_fn_STAR__temp_val__8688_8970 = (function (x__5648__auto__){
return sb__5647__auto__.append(x__5648__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__8687_8969);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__8688_8970);

try{tic_tac_toe.print_utils.prompt_user_for_move.call(null,new cljs.core.Keyword(null,"o","o",-1350007228),(1),empty_3x3);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__8686_8968);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__8685_8967);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5647__auto__);
})();
if(cljs.core._EQ_.call(null,expected__7775__auto___8965,actual__7776__auto___8966)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__7775__auto___8965;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7743__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7743__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__7776__auto___8966;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7743__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7743__auto__);
}
})()," (using =)"].join('')));
}

var expected__7775__auto__ = "X's turn!\nPlease enter your move (type 1-9 and hit enter):\n";
var actual__7776__auto__ = (function (){var sb__5647__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__8689_8977 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__8690_8978 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__8691_8979 = true;
var _STAR_print_fn_STAR__temp_val__8692_8980 = (function (x__5648__auto__){
return sb__5647__auto__.append(x__5648__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__8691_8979);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__8692_8980);

try{tic_tac_toe.print_utils.prompt_user_for_move.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(1),empty_3x3);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__8690_8978);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__8689_8977);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5647__auto__);
})();
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
});})(_STAR_parent_description_STAR__orig_val__8655_8955,_STAR_parent_description_STAR__temp_val__8656_8956,description__7638__auto___8954__$1,empty_3x3,empty_4x4,_STAR_parent_description_STAR__orig_val__8126_8920,_STAR_parent_description_STAR__temp_val__8127_8921,description__7638__auto___8919))
,false),speclj.components.new_characteristic.call(null,"specifies 1-16 if board is 4x4",((function (_STAR_parent_description_STAR__orig_val__8655_8955,_STAR_parent_description_STAR__temp_val__8656_8956,description__7638__auto___8954__$1,empty_3x3,empty_4x4,_STAR_parent_description_STAR__orig_val__8126_8920,_STAR_parent_description_STAR__temp_val__8127_8921,description__7638__auto___8919){
return (function (){
var expected__7775__auto___8999 = "Please enter your move (type 1-16 and hit enter):\n";
var actual__7776__auto___9000 = (function (){var sb__5647__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__8699_9006 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__8700_9007 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__8701_9008 = true;
var _STAR_print_fn_STAR__temp_val__8702_9009 = (function (x__5648__auto__){
return sb__5647__auto__.append(x__5648__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__8701_9008);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__8702_9009);

try{tic_tac_toe.print_utils.prompt_user_for_move.call(null,new cljs.core.Keyword(null,"o","o",-1350007228),(2),empty_4x4);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__8700_9007);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__8699_9006);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5647__auto__);
})();
if(cljs.core._EQ_.call(null,expected__7775__auto___8999,actual__7776__auto___9000)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__7775__auto___8999;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7743__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7743__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__7776__auto___9000;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7743__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7743__auto__);
}
})()," (using =)"].join('')));
}

var expected__7775__auto__ = "O's turn!\nPlease enter your move (type 1-16 and hit enter):\n";
var actual__7776__auto__ = (function (){var sb__5647__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__8703_9015 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__8704_9016 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__8705_9017 = true;
var _STAR_print_fn_STAR__temp_val__8706_9018 = (function (x__5648__auto__){
return sb__5647__auto__.append(x__5648__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__8705_9017);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__8706_9018);

try{tic_tac_toe.print_utils.prompt_user_for_move.call(null,new cljs.core.Keyword(null,"o","o",-1350007228),(1),empty_4x4);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__8704_9016);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__8703_9015);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5647__auto__);
})();
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
});})(_STAR_parent_description_STAR__orig_val__8655_8955,_STAR_parent_description_STAR__temp_val__8656_8956,description__7638__auto___8954__$1,empty_3x3,empty_4x4,_STAR_parent_description_STAR__orig_val__8126_8920,_STAR_parent_description_STAR__temp_val__8127_8921,description__7638__auto___8919))
,false)],null)));
var chunk__8658_8958 = null;
var count__8659_8959 = (0);
var i__8660_8960 = (0);
while(true){
if((i__8660_8960 < count__8659_8959)){
var component__7639__auto___9019 = cljs.core._nth.call(null,chunk__8658_8958,i__8660_8960);
speclj.components.install.call(null,component__7639__auto___9019,description__7638__auto___8954__$1);


var G__9020 = seq__8657_8957;
var G__9021 = chunk__8658_8958;
var G__9022 = count__8659_8959;
var G__9023 = (i__8660_8960 + (1));
seq__8657_8957 = G__9020;
chunk__8658_8958 = G__9021;
count__8659_8959 = G__9022;
i__8660_8960 = G__9023;
continue;
} else {
var temp__5804__auto___9024 = cljs.core.seq.call(null,seq__8657_8957);
if(temp__5804__auto___9024){
var seq__8657_9025__$1 = temp__5804__auto___9024;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8657_9025__$1)){
var c__5525__auto___9026 = cljs.core.chunk_first.call(null,seq__8657_9025__$1);
var G__9029 = cljs.core.chunk_rest.call(null,seq__8657_9025__$1);
var G__9030 = c__5525__auto___9026;
var G__9031 = cljs.core.count.call(null,c__5525__auto___9026);
var G__9032 = (0);
seq__8657_8957 = G__9029;
chunk__8658_8958 = G__9030;
count__8659_8959 = G__9031;
i__8660_8960 = G__9032;
continue;
} else {
var component__7639__auto___9033 = cljs.core.first.call(null,seq__8657_9025__$1);
speclj.components.install.call(null,component__7639__auto___9033,description__7638__auto___8954__$1);


var G__9034 = cljs.core.next.call(null,seq__8657_9025__$1);
var G__9035 = null;
var G__9036 = (0);
var G__9037 = (0);
seq__8657_8957 = G__9034;
chunk__8658_8958 = G__9035;
count__8659_8959 = G__9036;
i__8660_8960 = G__9037;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__8655_8955);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__7638__auto___8954__$1);
}


var description__7638__auto___9038__$1 = speclj.components.new_description.call(null,"display-bot-thinking",false,"tic-tac-toe.print-utils-spec");
var _STAR_parent_description_STAR__orig_val__8707_9043 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__8708_9044 = description__7638__auto___9038__$1;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__8708_9044);

try{var seq__8709_9045 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_characteristic.call(null,"prints message to let the user know the computer is processing",((function (_STAR_parent_description_STAR__orig_val__8707_9043,_STAR_parent_description_STAR__temp_val__8708_9044,description__7638__auto___9038__$1,empty_3x3,empty_4x4,_STAR_parent_description_STAR__orig_val__8126_8920,_STAR_parent_description_STAR__temp_val__8127_8921,description__7638__auto___8919){
return (function (){
var expected__7775__auto___9049 = "Player X is thinking...";
var actual__7776__auto___9050 = (function (){var sb__5647__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__8721_9051 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__8722_9052 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__8723_9053 = true;
var _STAR_print_fn_STAR__temp_val__8724_9054 = (function (x__5648__auto__){
return sb__5647__auto__.append(x__5648__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__8723_9053);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__8724_9054);

try{tic_tac_toe.print_utils.display_bot_thinking_message.call(null,new cljs.core.Keyword(null,"x","x",2099068185));
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__8722_9052);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__8721_9051);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5647__auto__);
})();
if(cljs.core._EQ_.call(null,expected__7775__auto___9049,actual__7776__auto___9050)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__7775__auto___9049;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7743__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7743__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__7776__auto___9050;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7743__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7743__auto__);
}
})()," (using =)"].join('')));
}

var expected__7775__auto__ = "Player O is thinking...";
var actual__7776__auto__ = (function (){var sb__5647__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__8725_9055 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__8726_9056 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__8727_9057 = true;
var _STAR_print_fn_STAR__temp_val__8728_9058 = (function (x__5648__auto__){
return sb__5647__auto__.append(x__5648__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__8727_9057);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__8728_9058);

try{tic_tac_toe.print_utils.display_bot_thinking_message.call(null,new cljs.core.Keyword(null,"o","o",-1350007228));
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__8726_9056);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__8725_9055);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5647__auto__);
})();
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
});})(_STAR_parent_description_STAR__orig_val__8707_9043,_STAR_parent_description_STAR__temp_val__8708_9044,description__7638__auto___9038__$1,empty_3x3,empty_4x4,_STAR_parent_description_STAR__orig_val__8126_8920,_STAR_parent_description_STAR__temp_val__8127_8921,description__7638__auto___8919))
,false)],null)));
var chunk__8710_9046 = null;
var count__8711_9047 = (0);
var i__8712_9048 = (0);
while(true){
if((i__8712_9048 < count__8711_9047)){
var component__7639__auto___9059 = cljs.core._nth.call(null,chunk__8710_9046,i__8712_9048);
speclj.components.install.call(null,component__7639__auto___9059,description__7638__auto___9038__$1);


var G__9060 = seq__8709_9045;
var G__9061 = chunk__8710_9046;
var G__9062 = count__8711_9047;
var G__9063 = (i__8712_9048 + (1));
seq__8709_9045 = G__9060;
chunk__8710_9046 = G__9061;
count__8711_9047 = G__9062;
i__8712_9048 = G__9063;
continue;
} else {
var temp__5804__auto___9064 = cljs.core.seq.call(null,seq__8709_9045);
if(temp__5804__auto___9064){
var seq__8709_9065__$1 = temp__5804__auto___9064;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8709_9065__$1)){
var c__5525__auto___9066 = cljs.core.chunk_first.call(null,seq__8709_9065__$1);
var G__9067 = cljs.core.chunk_rest.call(null,seq__8709_9065__$1);
var G__9068 = c__5525__auto___9066;
var G__9069 = cljs.core.count.call(null,c__5525__auto___9066);
var G__9070 = (0);
seq__8709_9045 = G__9067;
chunk__8710_9046 = G__9068;
count__8711_9047 = G__9069;
i__8712_9048 = G__9070;
continue;
} else {
var component__7639__auto___9071 = cljs.core.first.call(null,seq__8709_9065__$1);
speclj.components.install.call(null,component__7639__auto___9071,description__7638__auto___9038__$1);


var G__9072 = cljs.core.next.call(null,seq__8709_9065__$1);
var G__9073 = null;
var G__9074 = (0);
var G__9075 = (0);
seq__8709_9045 = G__9072;
chunk__8710_9046 = G__9073;
count__8711_9047 = G__9074;
i__8712_9048 = G__9075;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__8707_9043);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__7638__auto___9038__$1);
}


var description__7638__auto___9076__$1 = speclj.components.new_description.call(null,"display-bot-move-message",false,"tic-tac-toe.print-utils-spec");
var _STAR_parent_description_STAR__orig_val__8729_9077 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__8730_9078 = description__7638__auto___9076__$1;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__8730_9078);

try{var seq__8731_9079 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_characteristic.call(null,"informs human of computer's move",((function (_STAR_parent_description_STAR__orig_val__8729_9077,_STAR_parent_description_STAR__temp_val__8730_9078,description__7638__auto___9076__$1,empty_3x3,empty_4x4,_STAR_parent_description_STAR__orig_val__8126_8920,_STAR_parent_description_STAR__temp_val__8127_8921,description__7638__auto___8919){
return (function (){
var expected__7775__auto__ = "Your opponent plays 5!\n";
var actual__7776__auto__ = (function (){var sb__5647__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__8747_9083 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__8748_9084 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__8749_9085 = true;
var _STAR_print_fn_STAR__temp_val__8750_9086 = (function (x__5648__auto__){
return sb__5647__auto__.append(x__5648__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__8749_9085);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__8750_9086);

try{tic_tac_toe.print_utils.display_bot_move_message.call(null,(5),(2),new cljs.core.Keyword(null,"o","o",-1350007228));
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__8748_9084);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__8747_9083);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5647__auto__);
})();
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
});})(_STAR_parent_description_STAR__orig_val__8729_9077,_STAR_parent_description_STAR__temp_val__8730_9078,description__7638__auto___9076__$1,empty_3x3,empty_4x4,_STAR_parent_description_STAR__orig_val__8126_8920,_STAR_parent_description_STAR__temp_val__8127_8921,description__7638__auto___8919))
,false),speclj.components.new_characteristic.call(null,"informs human of first AI's move",((function (_STAR_parent_description_STAR__orig_val__8729_9077,_STAR_parent_description_STAR__temp_val__8730_9078,description__7638__auto___9076__$1,empty_3x3,empty_4x4,_STAR_parent_description_STAR__orig_val__8126_8920,_STAR_parent_description_STAR__temp_val__8127_8921,description__7638__auto___8919){
return (function (){
var expected__7775__auto__ = "X plays 1!\n";
var actual__7776__auto__ = (function (){var sb__5647__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__8751_9087 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__8752_9088 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__8753_9089 = true;
var _STAR_print_fn_STAR__temp_val__8754_9090 = (function (x__5648__auto__){
return sb__5647__auto__.append(x__5648__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__8753_9089);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__8754_9090);

try{tic_tac_toe.print_utils.display_bot_move_message.call(null,(1),(4),new cljs.core.Keyword(null,"x","x",2099068185));
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__8752_9088);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__8751_9087);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5647__auto__);
})();
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
});})(_STAR_parent_description_STAR__orig_val__8729_9077,_STAR_parent_description_STAR__temp_val__8730_9078,description__7638__auto___9076__$1,empty_3x3,empty_4x4,_STAR_parent_description_STAR__orig_val__8126_8920,_STAR_parent_description_STAR__temp_val__8127_8921,description__7638__auto___8919))
,false),speclj.components.new_characteristic.call(null,"informs human of second AI's move",((function (_STAR_parent_description_STAR__orig_val__8729_9077,_STAR_parent_description_STAR__temp_val__8730_9078,description__7638__auto___9076__$1,empty_3x3,empty_4x4,_STAR_parent_description_STAR__orig_val__8126_8920,_STAR_parent_description_STAR__temp_val__8127_8921,description__7638__auto___8919){
return (function (){
var expected__7775__auto__ = "O plays 8!\n";
var actual__7776__auto__ = (function (){var sb__5647__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__8755_9091 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__8756_9092 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__8757_9093 = true;
var _STAR_print_fn_STAR__temp_val__8758_9094 = (function (x__5648__auto__){
return sb__5647__auto__.append(x__5648__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__8757_9093);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__8758_9094);

try{tic_tac_toe.print_utils.display_bot_move_message.call(null,(8),(4),new cljs.core.Keyword(null,"o","o",-1350007228));
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__8756_9092);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__8755_9091);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5647__auto__);
})();
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
});})(_STAR_parent_description_STAR__orig_val__8729_9077,_STAR_parent_description_STAR__temp_val__8730_9078,description__7638__auto___9076__$1,empty_3x3,empty_4x4,_STAR_parent_description_STAR__orig_val__8126_8920,_STAR_parent_description_STAR__temp_val__8127_8921,description__7638__auto___8919))
,false)],null)));
var chunk__8732_9080 = null;
var count__8733_9081 = (0);
var i__8734_9082 = (0);
while(true){
if((i__8734_9082 < count__8733_9081)){
var component__7639__auto___9095 = cljs.core._nth.call(null,chunk__8732_9080,i__8734_9082);
speclj.components.install.call(null,component__7639__auto___9095,description__7638__auto___9076__$1);


var G__9096 = seq__8731_9079;
var G__9097 = chunk__8732_9080;
var G__9098 = count__8733_9081;
var G__9099 = (i__8734_9082 + (1));
seq__8731_9079 = G__9096;
chunk__8732_9080 = G__9097;
count__8733_9081 = G__9098;
i__8734_9082 = G__9099;
continue;
} else {
var temp__5804__auto___9100 = cljs.core.seq.call(null,seq__8731_9079);
if(temp__5804__auto___9100){
var seq__8731_9101__$1 = temp__5804__auto___9100;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8731_9101__$1)){
var c__5525__auto___9102 = cljs.core.chunk_first.call(null,seq__8731_9101__$1);
var G__9103 = cljs.core.chunk_rest.call(null,seq__8731_9101__$1);
var G__9104 = c__5525__auto___9102;
var G__9105 = cljs.core.count.call(null,c__5525__auto___9102);
var G__9106 = (0);
seq__8731_9079 = G__9103;
chunk__8732_9080 = G__9104;
count__8733_9081 = G__9105;
i__8734_9082 = G__9106;
continue;
} else {
var component__7639__auto___9107 = cljs.core.first.call(null,seq__8731_9101__$1);
speclj.components.install.call(null,component__7639__auto___9107,description__7638__auto___9076__$1);


var G__9108 = cljs.core.next.call(null,seq__8731_9101__$1);
var G__9109 = null;
var G__9110 = (0);
var G__9111 = (0);
seq__8731_9079 = G__9108;
chunk__8732_9080 = G__9109;
count__8733_9081 = G__9110;
i__8734_9082 = G__9111;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__8729_9077);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__7638__auto___9076__$1);
}


var description__7638__auto____$1 = speclj.components.new_description.call(null,"print-board",false,"tic-tac-toe.print-utils-spec");
var _STAR_parent_description_STAR__orig_val__8759_9112 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__8760_9113 = description__7638__auto____$1;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__8760_9113);

try{var seq__8761_9114 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_characteristic.call(null,"prints 3x3 board to the terminal",((function (_STAR_parent_description_STAR__orig_val__8759_9112,_STAR_parent_description_STAR__temp_val__8760_9113,description__7638__auto____$1,empty_3x3,empty_4x4,_STAR_parent_description_STAR__orig_val__8126_8920,_STAR_parent_description_STAR__temp_val__8127_8921,description__7638__auto___8919){
return (function (){
var expected__7775__auto___9118 = [" ",tic_tac_toe.print_utils.purple,cljs.core.str.cljs$core$IFn$_invoke$arity$1((1)),tic_tac_toe.print_utils.reset,"  ",tic_tac_toe.print_utils.purple,cljs.core.str.cljs$core$IFn$_invoke$arity$1((2)),tic_tac_toe.print_utils.reset,"  ",tic_tac_toe.print_utils.purple,cljs.core.str.cljs$core$IFn$_invoke$arity$1((3)),tic_tac_toe.print_utils.reset,"\n"," ",tic_tac_toe.print_utils.purple,cljs.core.str.cljs$core$IFn$_invoke$arity$1((4)),tic_tac_toe.print_utils.reset,"  ",tic_tac_toe.print_utils.purple,cljs.core.str.cljs$core$IFn$_invoke$arity$1((5)),tic_tac_toe.print_utils.reset,"  ",tic_tac_toe.print_utils.purple,cljs.core.str.cljs$core$IFn$_invoke$arity$1((6)),tic_tac_toe.print_utils.reset,"\n"," ",tic_tac_toe.print_utils.purple,cljs.core.str.cljs$core$IFn$_invoke$arity$1((7)),tic_tac_toe.print_utils.reset,"  ",tic_tac_toe.print_utils.purple,cljs.core.str.cljs$core$IFn$_invoke$arity$1((8)),tic_tac_toe.print_utils.reset,"  ",tic_tac_toe.print_utils.purple,cljs.core.str.cljs$core$IFn$_invoke$arity$1((9)),tic_tac_toe.print_utils.reset,"\n\n"].join('');
var actual__7776__auto___9119 = (function (){var sb__5647__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__8798_9120 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__8799_9121 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__8800_9122 = true;
var _STAR_print_fn_STAR__temp_val__8801_9123 = (function (x__5648__auto__){
return sb__5647__auto__.append(x__5648__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__8800_9122);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__8801_9123);

try{tic_tac_toe.print_utils.print_board.call(null,empty_3x3);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__8799_9121);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__8798_9120);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5647__auto__);
})();
if(cljs.core._EQ_.call(null,expected__7775__auto___9118,actual__7776__auto___9119)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__7775__auto___9118;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7743__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7743__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__7776__auto___9119;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7743__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7743__auto__);
}
})()," (using =)"].join('')));
}

var expected__7775__auto__ = [" ",tic_tac_toe.print_utils.purple,cljs.core.str.cljs$core$IFn$_invoke$arity$1((1)),tic_tac_toe.print_utils.reset,"  X  ",tic_tac_toe.print_utils.purple,cljs.core.str.cljs$core$IFn$_invoke$arity$1((3)),tic_tac_toe.print_utils.reset,"\n"," ",tic_tac_toe.print_utils.purple,cljs.core.str.cljs$core$IFn$_invoke$arity$1((4)),tic_tac_toe.print_utils.reset,"  O  ",tic_tac_toe.print_utils.purple,cljs.core.str.cljs$core$IFn$_invoke$arity$1((6)),tic_tac_toe.print_utils.reset,"\n"," O  ",tic_tac_toe.print_utils.purple,cljs.core.str.cljs$core$IFn$_invoke$arity$1((8)),tic_tac_toe.print_utils.reset,"  ",tic_tac_toe.print_utils.purple,cljs.core.str.cljs$core$IFn$_invoke$arity$1((9)),tic_tac_toe.print_utils.reset,"\n\n"].join('');
var actual__7776__auto__ = (function (){var sb__5647__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__8804_9124 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__8805_9125 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__8806_9126 = true;
var _STAR_print_fn_STAR__temp_val__8807_9127 = (function (x__5648__auto__){
return sb__5647__auto__.append(x__5648__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__8806_9126);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__8807_9127);

try{tic_tac_toe.print_utils.print_board.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),new cljs.core.Keyword(null,"x","x",2099068185),(3),(4),new cljs.core.Keyword(null,"o","o",-1350007228),(6),new cljs.core.Keyword(null,"o","o",-1350007228),(8),(9)], null));
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__8805_9125);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__8804_9124);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5647__auto__);
})();
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
});})(_STAR_parent_description_STAR__orig_val__8759_9112,_STAR_parent_description_STAR__temp_val__8760_9113,description__7638__auto____$1,empty_3x3,empty_4x4,_STAR_parent_description_STAR__orig_val__8126_8920,_STAR_parent_description_STAR__temp_val__8127_8921,description__7638__auto___8919))
,false),speclj.components.new_characteristic.call(null,"prints 4x4 board to the terminal",((function (_STAR_parent_description_STAR__orig_val__8759_9112,_STAR_parent_description_STAR__temp_val__8760_9113,description__7638__auto____$1,empty_3x3,empty_4x4,_STAR_parent_description_STAR__orig_val__8126_8920,_STAR_parent_description_STAR__temp_val__8127_8921,description__7638__auto___8919){
return (function (){
var expected__7775__auto___9128 = [" ",tic_tac_toe.print_utils.purple,cljs.core.str.cljs$core$IFn$_invoke$arity$1((1)),tic_tac_toe.print_utils.reset,"  ",tic_tac_toe.print_utils.purple,cljs.core.str.cljs$core$IFn$_invoke$arity$1((2)),tic_tac_toe.print_utils.reset,"  ",tic_tac_toe.print_utils.purple,cljs.core.str.cljs$core$IFn$_invoke$arity$1((3)),tic_tac_toe.print_utils.reset,"  ",tic_tac_toe.print_utils.purple,cljs.core.str.cljs$core$IFn$_invoke$arity$1((4)),tic_tac_toe.print_utils.reset,"\n"," ",tic_tac_toe.print_utils.purple,cljs.core.str.cljs$core$IFn$_invoke$arity$1((5)),tic_tac_toe.print_utils.reset,"  ",tic_tac_toe.print_utils.purple,cljs.core.str.cljs$core$IFn$_invoke$arity$1((6)),tic_tac_toe.print_utils.reset,"  ",tic_tac_toe.print_utils.purple,cljs.core.str.cljs$core$IFn$_invoke$arity$1((7)),tic_tac_toe.print_utils.reset,"  ",tic_tac_toe.print_utils.purple,cljs.core.str.cljs$core$IFn$_invoke$arity$1((8)),tic_tac_toe.print_utils.reset,"\n"," ",tic_tac_toe.print_utils.purple,cljs.core.str.cljs$core$IFn$_invoke$arity$1((9)),tic_tac_toe.print_utils.reset," ",tic_tac_toe.print_utils.purple,cljs.core.str.cljs$core$IFn$_invoke$arity$1((10)),tic_tac_toe.print_utils.reset," ",tic_tac_toe.print_utils.purple,cljs.core.str.cljs$core$IFn$_invoke$arity$1((11)),tic_tac_toe.print_utils.reset," ",tic_tac_toe.print_utils.purple,cljs.core.str.cljs$core$IFn$_invoke$arity$1((12)),tic_tac_toe.print_utils.reset,"\n",tic_tac_toe.print_utils.purple,cljs.core.str.cljs$core$IFn$_invoke$arity$1((13)),tic_tac_toe.print_utils.reset," ",tic_tac_toe.print_utils.purple,cljs.core.str.cljs$core$IFn$_invoke$arity$1((14)),tic_tac_toe.print_utils.reset," ",tic_tac_toe.print_utils.purple,cljs.core.str.cljs$core$IFn$_invoke$arity$1((15)),tic_tac_toe.print_utils.reset," ",tic_tac_toe.print_utils.purple,cljs.core.str.cljs$core$IFn$_invoke$arity$1((16)),tic_tac_toe.print_utils.reset,"\n\n"].join('');
var actual__7776__auto___9129 = (function (){var sb__5647__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__8810_9130 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__8811_9131 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__8812_9132 = true;
var _STAR_print_fn_STAR__temp_val__8813_9133 = (function (x__5648__auto__){
return sb__5647__auto__.append(x__5648__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__8812_9132);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__8813_9133);

try{tic_tac_toe.print_utils.print_board.call(null,empty_4x4);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__8811_9131);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__8810_9130);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5647__auto__);
})();
if(cljs.core._EQ_.call(null,expected__7775__auto___9128,actual__7776__auto___9129)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__7775__auto___9128;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7743__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7743__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__7776__auto___9129;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7743__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7743__auto__);
}
})()," (using =)"].join('')));
}

var expected__7775__auto__ = [" ",tic_tac_toe.print_utils.purple,cljs.core.str.cljs$core$IFn$_invoke$arity$1((1)),tic_tac_toe.print_utils.reset,"  X  ",tic_tac_toe.print_utils.purple,cljs.core.str.cljs$core$IFn$_invoke$arity$1((3)),tic_tac_toe.print_utils.reset,"  ",tic_tac_toe.print_utils.purple,cljs.core.str.cljs$core$IFn$_invoke$arity$1((4)),tic_tac_toe.print_utils.reset,"\n"," O  ",tic_tac_toe.print_utils.purple,cljs.core.str.cljs$core$IFn$_invoke$arity$1((6)),tic_tac_toe.print_utils.reset,"  O  ",tic_tac_toe.print_utils.purple,cljs.core.str.cljs$core$IFn$_invoke$arity$1((8)),tic_tac_toe.print_utils.reset,"\n"," X  X  O  O\n",tic_tac_toe.print_utils.purple,cljs.core.str.cljs$core$IFn$_invoke$arity$1((13)),tic_tac_toe.print_utils.reset,"  X  X  O\n\n"].join('');
var actual__7776__auto__ = (function (){var sb__5647__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__8814_9134 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__8815_9135 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__8816_9136 = true;
var _STAR_print_fn_STAR__temp_val__8817_9137 = (function (x__5648__auto__){
return sb__5647__auto__.append(x__5648__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__8816_9136);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__8817_9137);

try{tic_tac_toe.print_utils.print_board.call(null,new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),new cljs.core.Keyword(null,"x","x",2099068185),(3),(4),new cljs.core.Keyword(null,"o","o",-1350007228),(6),new cljs.core.Keyword(null,"o","o",-1350007228),(8),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"o","o",-1350007228),new cljs.core.Keyword(null,"o","o",-1350007228),(13),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"o","o",-1350007228)], null));
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__8815_9135);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__8814_9134);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5647__auto__);
})();
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
});})(_STAR_parent_description_STAR__orig_val__8759_9112,_STAR_parent_description_STAR__temp_val__8760_9113,description__7638__auto____$1,empty_3x3,empty_4x4,_STAR_parent_description_STAR__orig_val__8126_8920,_STAR_parent_description_STAR__temp_val__8127_8921,description__7638__auto___8919))
,false),speclj.components.new_characteristic.call(null,"prints 3x3x3 board to the terminal",((function (_STAR_parent_description_STAR__orig_val__8759_9112,_STAR_parent_description_STAR__temp_val__8760_9113,description__7638__auto____$1,empty_3x3,empty_4x4,_STAR_parent_description_STAR__orig_val__8126_8920,_STAR_parent_description_STAR__temp_val__8127_8921,description__7638__auto___8919){
return (function (){
var expected__7775__auto__ = [" ",tic_tac_toe.print_utils.purple,cljs.core.str.cljs$core$IFn$_invoke$arity$1((1)),tic_tac_toe.print_utils.reset,"  ",tic_tac_toe.print_utils.purple,cljs.core.str.cljs$core$IFn$_invoke$arity$1((2)),tic_tac_toe.print_utils.reset,"  ",tic_tac_toe.print_utils.purple,cljs.core.str.cljs$core$IFn$_invoke$arity$1((3)),tic_tac_toe.print_utils.reset,"\n"," ",tic_tac_toe.print_utils.purple,cljs.core.str.cljs$core$IFn$_invoke$arity$1((4)),tic_tac_toe.print_utils.reset,"  ",tic_tac_toe.print_utils.purple,cljs.core.str.cljs$core$IFn$_invoke$arity$1((5)),tic_tac_toe.print_utils.reset,"  ",tic_tac_toe.print_utils.purple,cljs.core.str.cljs$core$IFn$_invoke$arity$1((6)),tic_tac_toe.print_utils.reset,"\n"," ",tic_tac_toe.print_utils.purple,cljs.core.str.cljs$core$IFn$_invoke$arity$1((7)),tic_tac_toe.print_utils.reset,"  ",tic_tac_toe.print_utils.purple,cljs.core.str.cljs$core$IFn$_invoke$arity$1((8)),tic_tac_toe.print_utils.reset,"  ",tic_tac_toe.print_utils.purple,cljs.core.str.cljs$core$IFn$_invoke$arity$1((9)),tic_tac_toe.print_utils.reset,"\n\n",tic_tac_toe.print_utils.purple,cljs.core.str.cljs$core$IFn$_invoke$arity$1((10)),tic_tac_toe.print_utils.reset," ",tic_tac_toe.print_utils.purple,cljs.core.str.cljs$core$IFn$_invoke$arity$1((11)),tic_tac_toe.print_utils.reset," ",tic_tac_toe.print_utils.purple,cljs.core.str.cljs$core$IFn$_invoke$arity$1((12)),tic_tac_toe.print_utils.reset,"\n",tic_tac_toe.print_utils.purple,cljs.core.str.cljs$core$IFn$_invoke$arity$1((13)),tic_tac_toe.print_utils.reset," ",tic_tac_toe.print_utils.purple,cljs.core.str.cljs$core$IFn$_invoke$arity$1((14)),tic_tac_toe.print_utils.reset," ",tic_tac_toe.print_utils.purple,cljs.core.str.cljs$core$IFn$_invoke$arity$1((15)),tic_tac_toe.print_utils.reset,"\n",tic_tac_toe.print_utils.purple,cljs.core.str.cljs$core$IFn$_invoke$arity$1((16)),tic_tac_toe.print_utils.reset," ",tic_tac_toe.print_utils.purple,cljs.core.str.cljs$core$IFn$_invoke$arity$1((17)),tic_tac_toe.print_utils.reset," ",tic_tac_toe.print_utils.purple,cljs.core.str.cljs$core$IFn$_invoke$arity$1((18)),tic_tac_toe.print_utils.reset,"\n\n",tic_tac_toe.print_utils.purple,cljs.core.str.cljs$core$IFn$_invoke$arity$1((19)),tic_tac_toe.print_utils.reset," ",tic_tac_toe.print_utils.purple,cljs.core.str.cljs$core$IFn$_invoke$arity$1((20)),tic_tac_toe.print_utils.reset," ",tic_tac_toe.print_utils.purple,cljs.core.str.cljs$core$IFn$_invoke$arity$1((21)),tic_tac_toe.print_utils.reset,"\n",tic_tac_toe.print_utils.purple,cljs.core.str.cljs$core$IFn$_invoke$arity$1((22)),tic_tac_toe.print_utils.reset," ",tic_tac_toe.print_utils.purple,cljs.core.str.cljs$core$IFn$_invoke$arity$1((23)),tic_tac_toe.print_utils.reset," ",tic_tac_toe.print_utils.purple,cljs.core.str.cljs$core$IFn$_invoke$arity$1((24)),tic_tac_toe.print_utils.reset,"\n",tic_tac_toe.print_utils.purple,cljs.core.str.cljs$core$IFn$_invoke$arity$1((25)),tic_tac_toe.print_utils.reset," ",tic_tac_toe.print_utils.purple,cljs.core.str.cljs$core$IFn$_invoke$arity$1((26)),tic_tac_toe.print_utils.reset," ",tic_tac_toe.print_utils.purple,cljs.core.str.cljs$core$IFn$_invoke$arity$1((27)),tic_tac_toe.print_utils.reset,"\n\n"].join('');
var actual__7776__auto__ = (function (){var sb__5647__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__8820_9138 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__8821_9139 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__8822_9140 = true;
var _STAR_print_fn_STAR__temp_val__8823_9141 = (function (x__5648__auto__){
return sb__5647__auto__.append(x__5648__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__8822_9140);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__8823_9141);

try{tic_tac_toe.print_utils.print_board.call(null,cljs.core.range.call(null,(1),(28)));
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__8821_9139);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__8820_9138);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5647__auto__);
})();
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
});})(_STAR_parent_description_STAR__orig_val__8759_9112,_STAR_parent_description_STAR__temp_val__8760_9113,description__7638__auto____$1,empty_3x3,empty_4x4,_STAR_parent_description_STAR__orig_val__8126_8920,_STAR_parent_description_STAR__temp_val__8127_8921,description__7638__auto___8919))
,false)],null)));
var chunk__8762_9115 = null;
var count__8763_9116 = (0);
var i__8764_9117 = (0);
while(true){
if((i__8764_9117 < count__8763_9116)){
var component__7639__auto___9142 = cljs.core._nth.call(null,chunk__8762_9115,i__8764_9117);
speclj.components.install.call(null,component__7639__auto___9142,description__7638__auto____$1);


var G__9143 = seq__8761_9114;
var G__9144 = chunk__8762_9115;
var G__9145 = count__8763_9116;
var G__9146 = (i__8764_9117 + (1));
seq__8761_9114 = G__9143;
chunk__8762_9115 = G__9144;
count__8763_9116 = G__9145;
i__8764_9117 = G__9146;
continue;
} else {
var temp__5804__auto___9147 = cljs.core.seq.call(null,seq__8761_9114);
if(temp__5804__auto___9147){
var seq__8761_9148__$1 = temp__5804__auto___9147;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8761_9148__$1)){
var c__5525__auto___9149 = cljs.core.chunk_first.call(null,seq__8761_9148__$1);
var G__9150 = cljs.core.chunk_rest.call(null,seq__8761_9148__$1);
var G__9151 = c__5525__auto___9149;
var G__9152 = cljs.core.count.call(null,c__5525__auto___9149);
var G__9153 = (0);
seq__8761_9114 = G__9150;
chunk__8762_9115 = G__9151;
count__8763_9116 = G__9152;
i__8764_9117 = G__9153;
continue;
} else {
var component__7639__auto___9154 = cljs.core.first.call(null,seq__8761_9148__$1);
speclj.components.install.call(null,component__7639__auto___9154,description__7638__auto____$1);


var G__9155 = cljs.core.next.call(null,seq__8761_9148__$1);
var G__9156 = null;
var G__9157 = (0);
var G__9158 = (0);
seq__8761_9114 = G__9155;
chunk__8762_9115 = G__9156;
count__8763_9116 = G__9157;
i__8764_9117 = G__9158;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__8759_9112);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__7638__auto____$1);
}

return description__7638__auto____$1;
})(),(function (){var description__7638__auto____$1 = speclj.components.new_description.call(null,"play-logged-game",false,"tic-tac-toe.print-utils-spec");
var _STAR_parent_description_STAR__orig_val__8824_9159 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__8825_9160 = description__7638__auto____$1;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__8825_9160);

try{var seq__8826_9161 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_characteristic.call(null,"prints error message if there are no moves",((function (_STAR_parent_description_STAR__orig_val__8824_9159,_STAR_parent_description_STAR__temp_val__8825_9160,description__7638__auto____$1,_STAR_parent_description_STAR__orig_val__8126_8920,_STAR_parent_description_STAR__temp_val__8127_8921,description__7638__auto___8919){
return (function (){
var expected__7775__auto___9165 = "There are no moves to show for this game.\n";
var actual__7776__auto___9166 = (function (){var sb__5647__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__8860_9167 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__8861_9168 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__8862_9169 = true;
var _STAR_print_fn_STAR__temp_val__8863_9170 = (function (x__5648__auto__){
return sb__5647__auto__.append(x__5648__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__8862_9169);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__8863_9170);

try{tic_tac_toe.print_utils.play_logged_game.call(null,cljs.core.PersistentVector.EMPTY,null);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__8861_9168);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__8860_9167);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5647__auto__);
})();
if(cljs.core._EQ_.call(null,expected__7775__auto___9165,actual__7776__auto___9166)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__7775__auto___9165;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7743__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7743__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__7776__auto___9166;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7743__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7743__auto__);
}
})()," (using =)"].join('')));
}

var expected__7775__auto__ = "There are no moves to show for this game.\n";
var actual__7776__auto__ = (function (){var sb__5647__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__8866_9171 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__8867_9172 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__8868_9173 = true;
var _STAR_print_fn_STAR__temp_val__8869_9174 = (function (x__5648__auto__){
return sb__5647__auto__.append(x__5648__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__8868_9173);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__8869_9174);

try{tic_tac_toe.print_utils.play_logged_game.call(null,null,null);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__8867_9172);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__8866_9171);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5647__auto__);
})();
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
});})(_STAR_parent_description_STAR__orig_val__8824_9159,_STAR_parent_description_STAR__temp_val__8825_9160,description__7638__auto____$1,_STAR_parent_description_STAR__orig_val__8126_8920,_STAR_parent_description_STAR__temp_val__8127_8921,description__7638__auto___8919))
,false),speclj.components.new_characteristic.call(null,"prints each move to the console in order followed by winner",((function (_STAR_parent_description_STAR__orig_val__8824_9159,_STAR_parent_description_STAR__temp_val__8825_9160,description__7638__auto____$1,_STAR_parent_description_STAR__orig_val__8126_8920,_STAR_parent_description_STAR__temp_val__8127_8921,description__7638__auto___8919){
return (function (){
var print_board_orig_val__8871 = tic_tac_toe.print_utils.print_board;
var println_orig_val__8873 = cljs.core.println;
var print_board_temp_val__8874 = speclj.stub.stub.call(null,new cljs.core.Keyword(null,"print-board","print-board",1861954072),cljs.core.PersistentArrayMap.EMPTY);
var println_temp_val__8875 = speclj.stub.stub.call(null,new cljs.core.Keyword(null,"println","println",1920840330),cljs.core.PersistentArrayMap.EMPTY);
(tic_tac_toe.print_utils.print_board = print_board_temp_val__8874);

(cljs.core.println = println_temp_val__8875);

try{tic_tac_toe.print_utils.play_logged_game.call(null,cljs.core.list(new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(3),(4),new cljs.core.Keyword(null,"x","x",2099068185),(6),(7),(8),(9)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"o","o",-1350007228),(2),(3),(4),new cljs.core.Keyword(null,"x","x",2099068185),(6),(7),(8),(9)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"o","o",-1350007228),(2),(3),(4),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"x","x",2099068185),(7),(8),(9)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"o","o",-1350007228),(2),(3),new cljs.core.Keyword(null,"o","o",-1350007228),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"x","x",2099068185),(7),(8),(9)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"o","o",-1350007228),(2),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"o","o",-1350007228),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"x","x",2099068185),(7),(8),(9)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"o","o",-1350007228),(2),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"o","o",-1350007228),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"o","o",-1350007228),(8),(9)], null)),"O wins!");

var expected__7775__auto___9175 = new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(3),(4),new cljs.core.Keyword(null,"x","x",2099068185),(6),(7),(8),(9)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"o","o",-1350007228),(2),(3),(4),new cljs.core.Keyword(null,"x","x",2099068185),(6),(7),(8),(9)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"o","o",-1350007228),(2),(3),(4),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"x","x",2099068185),(7),(8),(9)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"o","o",-1350007228),(2),(3),new cljs.core.Keyword(null,"o","o",-1350007228),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"x","x",2099068185),(7),(8),(9)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"o","o",-1350007228),(2),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"o","o",-1350007228),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"x","x",2099068185),(7),(8),(9)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"o","o",-1350007228),(2),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"o","o",-1350007228),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"o","o",-1350007228),(8),(9)], null)], null)], null);
var actual__7776__auto___9176 = speclj.stub.invocations_of.call(null,new cljs.core.Keyword(null,"print-board","print-board",1861954072));
if(cljs.core._EQ_.call(null,expected__7775__auto___9175,actual__7776__auto___9176)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__7775__auto___9175;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7743__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7743__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__7776__auto___9176;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7743__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7743__auto__);
}
})()," (using =)"].join('')));
}

var name__8022__auto__ = new cljs.core.Keyword(null,"println","println",1920840330);
var options__8023__auto__ = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"with","with",-1536296876),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["O wins!"], null)], null);
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
}finally {(cljs.core.println = println_orig_val__8873);

(tic_tac_toe.print_utils.print_board = print_board_orig_val__8871);
}});})(_STAR_parent_description_STAR__orig_val__8824_9159,_STAR_parent_description_STAR__temp_val__8825_9160,description__7638__auto____$1,_STAR_parent_description_STAR__orig_val__8126_8920,_STAR_parent_description_STAR__temp_val__8127_8921,description__7638__auto___8919))
,false)],null)));
var chunk__8827_9162 = null;
var count__8828_9163 = (0);
var i__8829_9164 = (0);
while(true){
if((i__8829_9164 < count__8828_9163)){
var component__7639__auto___9177 = cljs.core._nth.call(null,chunk__8827_9162,i__8829_9164);
speclj.components.install.call(null,component__7639__auto___9177,description__7638__auto____$1);


var G__9178 = seq__8826_9161;
var G__9179 = chunk__8827_9162;
var G__9180 = count__8828_9163;
var G__9181 = (i__8829_9164 + (1));
seq__8826_9161 = G__9178;
chunk__8827_9162 = G__9179;
count__8828_9163 = G__9180;
i__8829_9164 = G__9181;
continue;
} else {
var temp__5804__auto___9182 = cljs.core.seq.call(null,seq__8826_9161);
if(temp__5804__auto___9182){
var seq__8826_9183__$1 = temp__5804__auto___9182;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8826_9183__$1)){
var c__5525__auto___9184 = cljs.core.chunk_first.call(null,seq__8826_9183__$1);
var G__9185 = cljs.core.chunk_rest.call(null,seq__8826_9183__$1);
var G__9186 = c__5525__auto___9184;
var G__9187 = cljs.core.count.call(null,c__5525__auto___9184);
var G__9188 = (0);
seq__8826_9161 = G__9185;
chunk__8827_9162 = G__9186;
count__8828_9163 = G__9187;
i__8829_9164 = G__9188;
continue;
} else {
var component__7639__auto___9189 = cljs.core.first.call(null,seq__8826_9183__$1);
speclj.components.install.call(null,component__7639__auto___9189,description__7638__auto____$1);


var G__9190 = cljs.core.next.call(null,seq__8826_9183__$1);
var G__9191 = null;
var G__9192 = (0);
var G__9193 = (0);
seq__8826_9161 = G__9190;
chunk__8827_9162 = G__9191;
count__8828_9163 = G__9192;
i__8829_9164 = G__9193;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__8824_9159);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__7638__auto____$1);
}

return description__7638__auto____$1;
})(),speclj.components.new_characteristic.call(null,"shows error message when psql game is incomplete and can't be replayed",((function (_STAR_parent_description_STAR__orig_val__8126_8920,_STAR_parent_description_STAR__temp_val__8127_8921,description__7638__auto___8919){
return (function (){
var expected__7775__auto__ = "The requested game is unfinished. Please choose a completed game to replay.\n";
var actual__7776__auto__ = (function (){var sb__5647__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__8889_9194 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__8890_9195 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__8891_9196 = true;
var _STAR_print_fn_STAR__temp_val__8892_9197 = (function (x__5648__auto__){
return sb__5647__auto__.append(x__5648__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__8891_9196);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__8892_9197);

try{tic_tac_toe.print_utils.display_unfinished_game_error.call(null);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__8890_9195);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__8889_9194);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5647__auto__);
})();
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
});})(_STAR_parent_description_STAR__orig_val__8126_8920,_STAR_parent_description_STAR__temp_val__8127_8921,description__7638__auto___8919))
,false),speclj.components.new_characteristic.call(null,"shows error message when game id is invalid",((function (_STAR_parent_description_STAR__orig_val__8126_8920,_STAR_parent_description_STAR__temp_val__8127_8921,description__7638__auto___8919){
return (function (){
var expected__7775__auto__ = "There is no game with ID 20\n";
var actual__7776__auto__ = (function (){var sb__5647__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__8909_9198 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__8910_9199 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__8911_9200 = true;
var _STAR_print_fn_STAR__temp_val__8912_9201 = (function (x__5648__auto__){
return sb__5647__auto__.append(x__5648__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__8911_9200);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__8912_9201);

try{tic_tac_toe.print_utils.display_invalid_game_id_error.call(null,(20));
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__8910_9199);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__8909_9198);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5647__auto__);
})();
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
});})(_STAR_parent_description_STAR__orig_val__8126_8920,_STAR_parent_description_STAR__temp_val__8127_8921,description__7638__auto___8919))
,false),speclj.components.new_characteristic.call(null,"displays command options to user",((function (_STAR_parent_description_STAR__orig_val__8126_8920,_STAR_parent_description_STAR__temp_val__8127_8921,description__7638__auto___8919){
return (function (){
var println_orig_val__8915 = cljs.core.println;
var println_temp_val__8916 = speclj.stub.stub.call(null,new cljs.core.Keyword(null,"println","println",1920840330),cljs.core.PersistentArrayMap.EMPTY);
(cljs.core.println = println_temp_val__8916);

try{tic_tac_toe.print_utils.display_command_options.call(null);

var expected__7775__auto__ = new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Please enter your preferences:"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Format: 'clj -Mrun <ui> <db> <game id>"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["<db> is the only required field\n"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["--psqldb         Run with PostgreSQL"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["--edndb         Run with EDN Database"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["gui             Run GUI"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["--game <id>     Replay specific game"], null)], null);
var actual__7776__auto__ = speclj.stub.invocations_of.call(null,new cljs.core.Keyword(null,"println","println",1920840330));
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
}finally {(cljs.core.println = println_orig_val__8915);
}});})(_STAR_parent_description_STAR__orig_val__8126_8920,_STAR_parent_description_STAR__temp_val__8127_8921,description__7638__auto___8919))
,false)],null)));
var chunk__8131_8923 = null;
var count__8132_8924 = (0);
var i__8134_8925 = (0);
while(true){
if((i__8134_8925 < count__8132_8924)){
var component__7639__auto___9202 = cljs.core._nth.call(null,chunk__8131_8923,i__8134_8925);
speclj.components.install.call(null,component__7639__auto___9202,description__7638__auto___8919);


var G__9203 = seq__8130_8922;
var G__9204 = chunk__8131_8923;
var G__9205 = count__8132_8924;
var G__9206 = (i__8134_8925 + (1));
seq__8130_8922 = G__9203;
chunk__8131_8923 = G__9204;
count__8132_8924 = G__9205;
i__8134_8925 = G__9206;
continue;
} else {
var temp__5804__auto___9207 = cljs.core.seq.call(null,seq__8130_8922);
if(temp__5804__auto___9207){
var seq__8130_9208__$1 = temp__5804__auto___9207;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8130_9208__$1)){
var c__5525__auto___9209 = cljs.core.chunk_first.call(null,seq__8130_9208__$1);
var G__9210 = cljs.core.chunk_rest.call(null,seq__8130_9208__$1);
var G__9211 = c__5525__auto___9209;
var G__9212 = cljs.core.count.call(null,c__5525__auto___9209);
var G__9213 = (0);
seq__8130_8922 = G__9210;
chunk__8131_8923 = G__9211;
count__8132_8924 = G__9212;
i__8134_8925 = G__9213;
continue;
} else {
var component__7639__auto___9214 = cljs.core.first.call(null,seq__8130_9208__$1);
speclj.components.install.call(null,component__7639__auto___9214,description__7638__auto___8919);


var G__9215 = cljs.core.next.call(null,seq__8130_9208__$1);
var G__9216 = null;
var G__9217 = (0);
var G__9218 = (0);
seq__8130_8922 = G__9215;
chunk__8131_8923 = G__9216;
count__8132_8924 = G__9217;
i__8134_8925 = G__9218;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__8126_8920);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__7638__auto___8919);
}


//# sourceMappingURL=print_utils_spec.js.map
