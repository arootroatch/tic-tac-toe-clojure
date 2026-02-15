// Compiled by ClojureScript 1.11.132 {:optimizations :none}
goog.provide('tic_tac_toe.screens.board_selection_spec');
goog.require('cljs.core');
goog.require('c3kit.wire.spec_helper');
goog.require('speclj.core');
goog.require('tic_tac_toe.prompts');
goog.require('tic_tac_toe.render_screen');
goog.require('tic_tac_toe.screens.board_selection');
goog.require('tic_tac_toe.board_options');
if((typeof tic_tac_toe !== 'undefined') && (typeof tic_tac_toe.screens !== 'undefined') && (typeof tic_tac_toe.screens.board_selection_spec !== 'undefined') && (typeof tic_tac_toe.screens.board_selection_spec.state !== 'undefined')){
} else {
tic_tac_toe.screens.board_selection_spec.state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"current-screen","current-screen",-1454713691),new cljs.core.Keyword(null,"board-selection","board-selection",276837898)], null));
}
var description__26625__auto___27819 = speclj.components.new_description.call(null,"board selection screen",false,"tic-tac-toe.screens.board-selection-spec");
var _STAR_parent_description_STAR__orig_val__27696_27822 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__27698_27823 = description__26625__auto___27819;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__27698_27823);

try{var seq__27701_27828 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,7,(5),cljs.core.PersistentVector.EMPTY_NODE,[c3kit.wire.spec_helper.with_root_dom.call(null),speclj.components.new_before.call(null,((function (_STAR_parent_description_STAR__orig_val__27696_27822,_STAR_parent_description_STAR__temp_val__27698_27823,description__26625__auto___27819){
return (function (){
cljs.core.reset_BANG_.call(null,tic_tac_toe.screens.board_selection_spec.state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"current-screen","current-screen",-1454713691),new cljs.core.Keyword(null,"board-selection","board-selection",276837898)], null));

return c3kit.wire.spec_helper.render.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tic_tac_toe.render_screen.render_screen,tic_tac_toe.screens.board_selection_spec.state], null));
});})(_STAR_parent_description_STAR__orig_val__27696_27822,_STAR_parent_description_STAR__temp_val__27698_27823,description__26625__auto___27819))
),speclj.components.new_characteristic.call(null,"renders board selection screen",((function (_STAR_parent_description_STAR__orig_val__27696_27822,_STAR_parent_description_STAR__temp_val__27698_27823,description__26625__auto___27819){
return (function (){
var value__27629__auto___27843 = "#board-selection";
var node__27630__auto___27844 = c3kit.wire.spec_helper.select.call(null,value__27629__auto___27843);
if(cljs.core.truth_(node__27630__auto___27844)){
} else {
throw (new speclj.platform.SpecFailure(["Expected selector to find node: ",(function (){var temp__5806__auto__ = value__27629__auto___27843;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__26730__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__26730__auto__);
}
})()].join('')));
}

var expected__26762__auto___27853 = cljs.core.first.call(null,tic_tac_toe.prompts.board_prompt);
var actual__26763__auto___27854 = c3kit.wire.spec_helper.text.call(null,"#board-selection h2");
if(cljs.core._EQ_.call(null,expected__26762__auto___27853,actual__26763__auto___27854)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__26762__auto___27853;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__26730__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__26730__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__26763__auto___27854;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__26730__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__26730__auto__);
}
})()," (using =)"].join('')));
}

var expected__26762__auto___27865 = cljs.core.nth.call(null,tic_tac_toe.prompts.board_prompt,(1));
var actual__26763__auto___27866 = c3kit.wire.spec_helper.text.call(null,"#board-selection button:nth-of-type(1)");
if(cljs.core._EQ_.call(null,expected__26762__auto___27865,actual__26763__auto___27866)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__26762__auto___27865;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__26730__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__26730__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__26763__auto___27866;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__26730__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__26730__auto__);
}
})()," (using =)"].join('')));
}

var expected__26762__auto__ = cljs.core.nth.call(null,tic_tac_toe.prompts.board_prompt,(2));
var actual__26763__auto__ = c3kit.wire.spec_helper.text.call(null,"#board-selection button:nth-of-type(2)");
if(cljs.core._EQ_.call(null,expected__26762__auto__,actual__26763__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__26762__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__26730__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__26730__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__26763__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__26730__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__26730__auto__);
}
})()," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__27696_27822,_STAR_parent_description_STAR__temp_val__27698_27823,description__26625__auto___27819))
,false),speclj.components.new_characteristic.call(null,"sets 3x3 board upon user selection",((function (_STAR_parent_description_STAR__orig_val__27696_27822,_STAR_parent_description_STAR__temp_val__27698_27823,description__26625__auto___27819){
return (function (){
c3kit.wire.spec_helper.click_BANG_.call(null,"#board-selection button:nth-of-type(1)");

var expected__26762__auto__ = tic_tac_toe.board_options.initial_3x3_board;
var actual__26763__auto__ = new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.screens.board_selection_spec.state));
if(cljs.core._EQ_.call(null,expected__26762__auto__,actual__26763__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__26762__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__26730__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__26730__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__26763__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__26730__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__26730__auto__);
}
})()," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__27696_27822,_STAR_parent_description_STAR__temp_val__27698_27823,description__26625__auto___27819))
,false),speclj.components.new_characteristic.call(null,"sets 4x4 board upon user selection",((function (_STAR_parent_description_STAR__orig_val__27696_27822,_STAR_parent_description_STAR__temp_val__27698_27823,description__26625__auto___27819){
return (function (){
c3kit.wire.spec_helper.click_BANG_.call(null,"#board-selection button:nth-of-type(2)");

var expected__26762__auto__ = tic_tac_toe.board_options.initial_4x4_board;
var actual__26763__auto__ = new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.screens.board_selection_spec.state));
if(cljs.core._EQ_.call(null,expected__26762__auto__,actual__26763__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__26762__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__26730__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__26730__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__26763__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__26730__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__26730__auto__);
}
})()," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__27696_27822,_STAR_parent_description_STAR__temp_val__27698_27823,description__26625__auto___27819))
,false),speclj.components.new_characteristic.call(null,"sets screen to first-level-selection upon user selection and not mode 1",((function (_STAR_parent_description_STAR__orig_val__27696_27822,_STAR_parent_description_STAR__temp_val__27698_27823,description__26625__auto___27819){
return (function (){
var seq__27764 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#board-selection button:nth-of-type(1)","#board-selection button:nth-of-type(2)"], null));
var chunk__27765 = null;
var count__27766 = (0);
var i__27767 = (0);
while(true){
if((i__27767 < count__27766)){
var item = cljs.core._nth.call(null,chunk__27765,i__27767);
c3kit.wire.spec_helper.click_BANG_.call(null,item);

var expected__26762__auto___27867 = new cljs.core.Keyword(null,"first-level-selection","first-level-selection",-675329011);
var actual__26763__auto___27868 = new cljs.core.Keyword(null,"current-screen","current-screen",-1454713691).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.screens.board_selection_spec.state));
if(cljs.core._EQ_.call(null,expected__26762__auto___27867,actual__26763__auto___27868)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__26762__auto___27867;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__26730__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__26730__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__26763__auto___27868;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__26730__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__26730__auto__);
}
})()," (using =)"].join('')));
}


var G__27869 = seq__27764;
var G__27870 = chunk__27765;
var G__27871 = count__27766;
var G__27872 = (i__27767 + (1));
seq__27764 = G__27869;
chunk__27765 = G__27870;
count__27766 = G__27871;
i__27767 = G__27872;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__27764);
if(temp__5804__auto__){
var seq__27764__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27764__$1)){
var c__5525__auto__ = cljs.core.chunk_first.call(null,seq__27764__$1);
var G__27873 = cljs.core.chunk_rest.call(null,seq__27764__$1);
var G__27874 = c__5525__auto__;
var G__27875 = cljs.core.count.call(null,c__5525__auto__);
var G__27876 = (0);
seq__27764 = G__27873;
chunk__27765 = G__27874;
count__27766 = G__27875;
i__27767 = G__27876;
continue;
} else {
var item = cljs.core.first.call(null,seq__27764__$1);
c3kit.wire.spec_helper.click_BANG_.call(null,item);

var expected__26762__auto___27877 = new cljs.core.Keyword(null,"first-level-selection","first-level-selection",-675329011);
var actual__26763__auto___27878 = new cljs.core.Keyword(null,"current-screen","current-screen",-1454713691).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.screens.board_selection_spec.state));
if(cljs.core._EQ_.call(null,expected__26762__auto___27877,actual__26763__auto___27878)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__26762__auto___27877;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__26730__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__26730__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__26763__auto___27878;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__26730__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__26730__auto__);
}
})()," (using =)"].join('')));
}


var G__27896 = cljs.core.next.call(null,seq__27764__$1);
var G__27897 = null;
var G__27898 = (0);
var G__27899 = (0);
seq__27764 = G__27896;
chunk__27765 = G__27897;
count__27766 = G__27898;
i__27767 = G__27899;
continue;
}
} else {
return null;
}
}
break;
}
});})(_STAR_parent_description_STAR__orig_val__27696_27822,_STAR_parent_description_STAR__temp_val__27698_27823,description__26625__auto___27819))
,false),speclj.components.new_characteristic.call(null,"sets screen to play upon user selection and mode 1",((function (_STAR_parent_description_STAR__orig_val__27696_27822,_STAR_parent_description_STAR__temp_val__27698_27823,description__26625__auto___27819){
return (function (){
cljs.core.swap_BANG_.call(null,tic_tac_toe.screens.board_selection_spec.state,cljs.core.assoc,new cljs.core.Keyword(null,"mode","mode",654403691),(1));

var seq__27785 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#board-selection button:nth-of-type(1)","#board-selection button:nth-of-type(2)"], null));
var chunk__27786 = null;
var count__27787 = (0);
var i__27788 = (0);
while(true){
if((i__27788 < count__27787)){
var item = cljs.core._nth.call(null,chunk__27786,i__27788);
c3kit.wire.spec_helper.click_BANG_.call(null,item);

var expected__26762__auto___27904 = new cljs.core.Keyword(null,"play","play",-580418022);
var actual__26763__auto___27905 = new cljs.core.Keyword(null,"current-screen","current-screen",-1454713691).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.screens.board_selection_spec.state));
if(cljs.core._EQ_.call(null,expected__26762__auto___27904,actual__26763__auto___27905)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__26762__auto___27904;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__26730__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__26730__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__26763__auto___27905;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__26730__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__26730__auto__);
}
})()," (using =)"].join('')));
}


var G__27910 = seq__27785;
var G__27911 = chunk__27786;
var G__27912 = count__27787;
var G__27913 = (i__27788 + (1));
seq__27785 = G__27910;
chunk__27786 = G__27911;
count__27787 = G__27912;
i__27788 = G__27913;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__27785);
if(temp__5804__auto__){
var seq__27785__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27785__$1)){
var c__5525__auto__ = cljs.core.chunk_first.call(null,seq__27785__$1);
var G__27914 = cljs.core.chunk_rest.call(null,seq__27785__$1);
var G__27915 = c__5525__auto__;
var G__27916 = cljs.core.count.call(null,c__5525__auto__);
var G__27917 = (0);
seq__27785 = G__27914;
chunk__27786 = G__27915;
count__27787 = G__27916;
i__27788 = G__27917;
continue;
} else {
var item = cljs.core.first.call(null,seq__27785__$1);
c3kit.wire.spec_helper.click_BANG_.call(null,item);

var expected__26762__auto___27920 = new cljs.core.Keyword(null,"play","play",-580418022);
var actual__26763__auto___27921 = new cljs.core.Keyword(null,"current-screen","current-screen",-1454713691).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.screens.board_selection_spec.state));
if(cljs.core._EQ_.call(null,expected__26762__auto___27920,actual__26763__auto___27921)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__26762__auto___27920;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__26730__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__26730__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__26763__auto___27921;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__26730__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__26730__auto__);
}
})()," (using =)"].join('')));
}


var G__27924 = cljs.core.next.call(null,seq__27785__$1);
var G__27925 = null;
var G__27926 = (0);
var G__27927 = (0);
seq__27785 = G__27924;
chunk__27786 = G__27925;
count__27787 = G__27926;
i__27788 = G__27927;
continue;
}
} else {
return null;
}
}
break;
}
});})(_STAR_parent_description_STAR__orig_val__27696_27822,_STAR_parent_description_STAR__temp_val__27698_27823,description__26625__auto___27819))
,false)],null)));
var chunk__27702_27829 = null;
var count__27704_27830 = (0);
var i__27706_27831 = (0);
while(true){
if((i__27706_27831 < count__27704_27830)){
var component__26626__auto___27928 = cljs.core._nth.call(null,chunk__27702_27829,i__27706_27831);
speclj.components.install.call(null,component__26626__auto___27928,description__26625__auto___27819);


var G__27929 = seq__27701_27828;
var G__27930 = chunk__27702_27829;
var G__27931 = count__27704_27830;
var G__27932 = (i__27706_27831 + (1));
seq__27701_27828 = G__27929;
chunk__27702_27829 = G__27930;
count__27704_27830 = G__27931;
i__27706_27831 = G__27932;
continue;
} else {
var temp__5804__auto___27933 = cljs.core.seq.call(null,seq__27701_27828);
if(temp__5804__auto___27933){
var seq__27701_27934__$1 = temp__5804__auto___27933;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27701_27934__$1)){
var c__5525__auto___27935 = cljs.core.chunk_first.call(null,seq__27701_27934__$1);
var G__27936 = cljs.core.chunk_rest.call(null,seq__27701_27934__$1);
var G__27937 = c__5525__auto___27935;
var G__27938 = cljs.core.count.call(null,c__5525__auto___27935);
var G__27939 = (0);
seq__27701_27828 = G__27936;
chunk__27702_27829 = G__27937;
count__27704_27830 = G__27938;
i__27706_27831 = G__27939;
continue;
} else {
var component__26626__auto___27940 = cljs.core.first.call(null,seq__27701_27934__$1);
speclj.components.install.call(null,component__26626__auto___27940,description__26625__auto___27819);


var G__27941 = cljs.core.next.call(null,seq__27701_27934__$1);
var G__27942 = null;
var G__27943 = (0);
var G__27944 = (0);
seq__27701_27828 = G__27941;
chunk__27702_27829 = G__27942;
count__27704_27830 = G__27943;
i__27706_27831 = G__27944;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__27696_27822);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__26625__auto___27819);
}


//# sourceMappingURL=board_selection_spec.js.map
