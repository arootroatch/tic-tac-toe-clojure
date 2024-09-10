// Compiled by ClojureScript 1.11.132 {:optimizations :none}
goog.provide('tic_tac_toe.screens.mode_selection_spec');
goog.require('cljs.core');
goog.require('speclj.core');
goog.require('c3kit.wire.spec_helper');
goog.require('tic_tac_toe.print_utils');
goog.require('tic_tac_toe.render_screen');
goog.require('tic_tac_toe.screens.mode_selection');
if((typeof tic_tac_toe !== 'undefined') && (typeof tic_tac_toe.screens !== 'undefined') && (typeof tic_tac_toe.screens.mode_selection_spec !== 'undefined') && (typeof tic_tac_toe.screens.mode_selection_spec.state !== 'undefined')){
} else {
tic_tac_toe.screens.mode_selection_spec.state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"current-screen","current-screen",-1454713691),new cljs.core.Keyword(null,"mode-selection","mode-selection",986239762)], null));
}
var description__19707__auto___20835 = speclj.components.new_description.call(null,"mode selection screen",false,"tic-tac-toe.screens.mode-selection-spec");
var _STAR_parent_description_STAR__orig_val__20523_20836 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__20524_20837 = description__19707__auto___20835;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__20524_20837);

try{var seq__20526_20844 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,8,(5),cljs.core.PersistentVector.EMPTY_NODE,[c3kit.wire.spec_helper.with_root_dom.call(null),speclj.components.new_before.call(null,((function (_STAR_parent_description_STAR__orig_val__20523_20836,_STAR_parent_description_STAR__temp_val__20524_20837,description__19707__auto___20835){
return (function (){
cljs.core.reset_BANG_.call(null,tic_tac_toe.screens.mode_selection_spec.state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"current-screen","current-screen",-1454713691),new cljs.core.Keyword(null,"mode-selection","mode-selection",986239762)], null));

return c3kit.wire.spec_helper.render.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tic_tac_toe.render_screen.render_screen,tic_tac_toe.screens.mode_selection_spec.state], null));
});})(_STAR_parent_description_STAR__orig_val__20523_20836,_STAR_parent_description_STAR__temp_val__20524_20837,description__19707__auto___20835))
),speclj.components.new_characteristic.call(null,"renders mode selection screen",((function (_STAR_parent_description_STAR__orig_val__20523_20836,_STAR_parent_description_STAR__temp_val__20524_20837,description__19707__auto___20835){
return (function (){
var value__20454__auto___20870 = "#mode-selection";
var node__20455__auto___20871 = c3kit.wire.spec_helper.select.call(null,value__20454__auto___20870);
if(cljs.core.truth_(node__20455__auto___20871)){
} else {
throw (new speclj.platform.SpecFailure(["Expected selector to find node: ",(function (){var temp__5806__auto__ = value__20454__auto___20870;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__19812__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__19812__auto__);
}
})()].join('')));
}

var expected__19844__auto___20872 = cljs.core.first.call(null,tic_tac_toe.print_utils.mode_prompt);
var actual__19845__auto___20873 = c3kit.wire.spec_helper.text.call(null,"#mode-selection h2");
if(cljs.core._EQ_.call(null,expected__19844__auto___20872,actual__19845__auto___20873)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__19844__auto___20872;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__19812__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__19812__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__19845__auto___20873;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__19812__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__19812__auto__);
}
})()," (using =)"].join('')));
}

var expected__19844__auto___20874 = cljs.core.nth.call(null,tic_tac_toe.print_utils.mode_prompt,(1));
var actual__19845__auto___20875 = c3kit.wire.spec_helper.text.call(null,"#mode-selection button:nth-of-type(1)");
if(cljs.core._EQ_.call(null,expected__19844__auto___20874,actual__19845__auto___20875)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__19844__auto___20874;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__19812__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__19812__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__19845__auto___20875;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__19812__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__19812__auto__);
}
})()," (using =)"].join('')));
}

var expected__19844__auto___20876 = cljs.core.nth.call(null,tic_tac_toe.print_utils.mode_prompt,(2));
var actual__19845__auto___20877 = c3kit.wire.spec_helper.text.call(null,"#mode-selection button:nth-of-type(2)");
if(cljs.core._EQ_.call(null,expected__19844__auto___20876,actual__19845__auto___20877)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__19844__auto___20876;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__19812__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__19812__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__19845__auto___20877;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__19812__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__19812__auto__);
}
})()," (using =)"].join('')));
}

var expected__19844__auto___20878 = cljs.core.nth.call(null,tic_tac_toe.print_utils.mode_prompt,(3));
var actual__19845__auto___20879 = c3kit.wire.spec_helper.text.call(null,"#mode-selection button:nth-of-type(3)");
if(cljs.core._EQ_.call(null,expected__19844__auto___20878,actual__19845__auto___20879)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__19844__auto___20878;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__19812__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__19812__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__19845__auto___20879;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__19812__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__19812__auto__);
}
})()," (using =)"].join('')));
}

var expected__19844__auto__ = cljs.core.nth.call(null,tic_tac_toe.print_utils.mode_prompt,(4));
var actual__19845__auto__ = c3kit.wire.spec_helper.text.call(null,"#mode-selection button:nth-of-type(4)");
if(cljs.core._EQ_.call(null,expected__19844__auto__,actual__19845__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__19844__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__19812__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__19812__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__19845__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__19812__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__19812__auto__);
}
})()," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__20523_20836,_STAR_parent_description_STAR__temp_val__20524_20837,description__19707__auto___20835))
,false),speclj.components.new_characteristic.call(null,"sets mode to 1 if user selects HvH",((function (_STAR_parent_description_STAR__orig_val__20523_20836,_STAR_parent_description_STAR__temp_val__20524_20837,description__19707__auto___20835){
return (function (){
c3kit.wire.spec_helper.click_BANG_.call(null,"#mode-selection button:nth-of-type(1)");

var expected__19844__auto__ = (1);
var actual__19845__auto__ = new cljs.core.Keyword(null,"mode","mode",654403691).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.screens.mode_selection_spec.state));
if(cljs.core._EQ_.call(null,expected__19844__auto__,actual__19845__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__19844__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__19812__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__19812__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__19845__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__19812__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__19812__auto__);
}
})()," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__20523_20836,_STAR_parent_description_STAR__temp_val__20524_20837,description__19707__auto___20835))
,false),speclj.components.new_characteristic.call(null,"sets mode to 2 if user selects HvC",((function (_STAR_parent_description_STAR__orig_val__20523_20836,_STAR_parent_description_STAR__temp_val__20524_20837,description__19707__auto___20835){
return (function (){
c3kit.wire.spec_helper.click_BANG_.call(null,"#mode-selection button:nth-of-type(2)");

var expected__19844__auto__ = (2);
var actual__19845__auto__ = new cljs.core.Keyword(null,"mode","mode",654403691).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.screens.mode_selection_spec.state));
if(cljs.core._EQ_.call(null,expected__19844__auto__,actual__19845__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__19844__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__19812__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__19812__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__19845__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__19812__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__19812__auto__);
}
})()," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__20523_20836,_STAR_parent_description_STAR__temp_val__20524_20837,description__19707__auto___20835))
,false),speclj.components.new_characteristic.call(null,"sets mode to 3 if user selects CvH",((function (_STAR_parent_description_STAR__orig_val__20523_20836,_STAR_parent_description_STAR__temp_val__20524_20837,description__19707__auto___20835){
return (function (){
c3kit.wire.spec_helper.click_BANG_.call(null,"#mode-selection button:nth-of-type(3)");

var expected__19844__auto__ = (3);
var actual__19845__auto__ = new cljs.core.Keyword(null,"mode","mode",654403691).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.screens.mode_selection_spec.state));
if(cljs.core._EQ_.call(null,expected__19844__auto__,actual__19845__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__19844__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__19812__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__19812__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__19845__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__19812__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__19812__auto__);
}
})()," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__20523_20836,_STAR_parent_description_STAR__temp_val__20524_20837,description__19707__auto___20835))
,false),speclj.components.new_characteristic.call(null,"sets mode to 4 if user selects CvC",((function (_STAR_parent_description_STAR__orig_val__20523_20836,_STAR_parent_description_STAR__temp_val__20524_20837,description__19707__auto___20835){
return (function (){
c3kit.wire.spec_helper.click_BANG_.call(null,"#mode-selection button:nth-of-type(4)");

var expected__19844__auto__ = (4);
var actual__19845__auto__ = new cljs.core.Keyword(null,"mode","mode",654403691).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.screens.mode_selection_spec.state));
if(cljs.core._EQ_.call(null,expected__19844__auto__,actual__19845__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__19844__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__19812__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__19812__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__19845__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__19812__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__19812__auto__);
}
})()," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__20523_20836,_STAR_parent_description_STAR__temp_val__20524_20837,description__19707__auto___20835))
,false),speclj.components.new_characteristic.call(null,"sets screen to board-selection upon user selection",((function (_STAR_parent_description_STAR__orig_val__20523_20836,_STAR_parent_description_STAR__temp_val__20524_20837,description__19707__auto___20835){
return (function (){
var seq__20782 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#mode-selection button:nth-of-type(1)","#mode-selection button:nth-of-type(2)","#mode-selection button:nth-of-type(3)","#mode-selection button:nth-of-type(4)"], null));
var chunk__20783 = null;
var count__20784 = (0);
var i__20785 = (0);
while(true){
if((i__20785 < count__20784)){
var item = cljs.core._nth.call(null,chunk__20783,i__20785);
c3kit.wire.spec_helper.click_BANG_.call(null,item);

var expected__19844__auto___20880 = new cljs.core.Keyword(null,"board-selection","board-selection",276837898);
var actual__19845__auto___20881 = new cljs.core.Keyword(null,"current-screen","current-screen",-1454713691).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.screens.mode_selection_spec.state));
if(cljs.core._EQ_.call(null,expected__19844__auto___20880,actual__19845__auto___20881)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__19844__auto___20880;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__19812__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__19812__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__19845__auto___20881;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__19812__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__19812__auto__);
}
})()," (using =)"].join('')));
}


var G__20882 = seq__20782;
var G__20883 = chunk__20783;
var G__20884 = count__20784;
var G__20885 = (i__20785 + (1));
seq__20782 = G__20882;
chunk__20783 = G__20883;
count__20784 = G__20884;
i__20785 = G__20885;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__20782);
if(temp__5804__auto__){
var seq__20782__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20782__$1)){
var c__5525__auto__ = cljs.core.chunk_first.call(null,seq__20782__$1);
var G__20886 = cljs.core.chunk_rest.call(null,seq__20782__$1);
var G__20887 = c__5525__auto__;
var G__20888 = cljs.core.count.call(null,c__5525__auto__);
var G__20889 = (0);
seq__20782 = G__20886;
chunk__20783 = G__20887;
count__20784 = G__20888;
i__20785 = G__20889;
continue;
} else {
var item = cljs.core.first.call(null,seq__20782__$1);
c3kit.wire.spec_helper.click_BANG_.call(null,item);

var expected__19844__auto___20890 = new cljs.core.Keyword(null,"board-selection","board-selection",276837898);
var actual__19845__auto___20891 = new cljs.core.Keyword(null,"current-screen","current-screen",-1454713691).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.screens.mode_selection_spec.state));
if(cljs.core._EQ_.call(null,expected__19844__auto___20890,actual__19845__auto___20891)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__19844__auto___20890;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__19812__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__19812__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__19845__auto___20891;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__19812__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__19812__auto__);
}
})()," (using =)"].join('')));
}


var G__20892 = cljs.core.next.call(null,seq__20782__$1);
var G__20893 = null;
var G__20894 = (0);
var G__20895 = (0);
seq__20782 = G__20892;
chunk__20783 = G__20893;
count__20784 = G__20894;
i__20785 = G__20895;
continue;
}
} else {
return null;
}
}
break;
}
});})(_STAR_parent_description_STAR__orig_val__20523_20836,_STAR_parent_description_STAR__temp_val__20524_20837,description__19707__auto___20835))
,false)],null)));
var chunk__20527_20845 = null;
var count__20528_20853 = (0);
var i__20529_20854 = (0);
while(true){
if((i__20529_20854 < count__20528_20853)){
var component__19708__auto___20896 = cljs.core._nth.call(null,chunk__20527_20845,i__20529_20854);
speclj.components.install.call(null,component__19708__auto___20896,description__19707__auto___20835);


var G__20897 = seq__20526_20844;
var G__20898 = chunk__20527_20845;
var G__20899 = count__20528_20853;
var G__20900 = (i__20529_20854 + (1));
seq__20526_20844 = G__20897;
chunk__20527_20845 = G__20898;
count__20528_20853 = G__20899;
i__20529_20854 = G__20900;
continue;
} else {
var temp__5804__auto___20901 = cljs.core.seq.call(null,seq__20526_20844);
if(temp__5804__auto___20901){
var seq__20526_20902__$1 = temp__5804__auto___20901;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20526_20902__$1)){
var c__5525__auto___20903 = cljs.core.chunk_first.call(null,seq__20526_20902__$1);
var G__20904 = cljs.core.chunk_rest.call(null,seq__20526_20902__$1);
var G__20905 = c__5525__auto___20903;
var G__20906 = cljs.core.count.call(null,c__5525__auto___20903);
var G__20907 = (0);
seq__20526_20844 = G__20904;
chunk__20527_20845 = G__20905;
count__20528_20853 = G__20906;
i__20529_20854 = G__20907;
continue;
} else {
var component__19708__auto___20908 = cljs.core.first.call(null,seq__20526_20902__$1);
speclj.components.install.call(null,component__19708__auto___20908,description__19707__auto___20835);


var G__20909 = cljs.core.next.call(null,seq__20526_20902__$1);
var G__20910 = null;
var G__20911 = (0);
var G__20912 = (0);
seq__20526_20844 = G__20909;
chunk__20527_20845 = G__20910;
count__20528_20853 = G__20911;
i__20529_20854 = G__20912;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__20523_20836);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__19707__auto___20835);
}


//# sourceMappingURL=mode_selection_spec.js.map
