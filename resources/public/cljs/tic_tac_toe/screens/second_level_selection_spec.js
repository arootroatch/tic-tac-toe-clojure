// Compiled by ClojureScript 1.11.132 {:optimizations :none}
goog.provide('tic_tac_toe.screens.second_level_selection_spec');
goog.require('cljs.core');
goog.require('speclj.core');
goog.require('c3kit.wire.spec_helper');
goog.require('tic_tac_toe.print_utils');
goog.require('tic_tac_toe.render_screen');
goog.require('tic_tac_toe.screens.second_level_selection');
if((typeof tic_tac_toe !== 'undefined') && (typeof tic_tac_toe.screens !== 'undefined') && (typeof tic_tac_toe.screens.second_level_selection_spec !== 'undefined') && (typeof tic_tac_toe.screens.second_level_selection_spec.state !== 'undefined')){
} else {
tic_tac_toe.screens.second_level_selection_spec.state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"current-screen","current-screen",-1454713691),new cljs.core.Keyword(null,"second-level-selection","second-level-selection",199785260)], null));
}
var description__11245__auto___15923 = speclj.components.new_description.call(null,"second level selection screen",false,"tic-tac-toe.screens.second-level-selection-spec");
var _STAR_parent_description_STAR__orig_val__15885_15924 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__15886_15925 = description__11245__auto___15923;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__15886_15925);

try{var seq__15887_15926 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,7,(5),cljs.core.PersistentVector.EMPTY_NODE,[c3kit.wire.spec_helper.with_root_dom.call(null),speclj.components.new_before.call(null,((function (_STAR_parent_description_STAR__orig_val__15885_15924,_STAR_parent_description_STAR__temp_val__15886_15925,description__11245__auto___15923){
return (function (){
cljs.core.reset_BANG_.call(null,tic_tac_toe.screens.second_level_selection_spec.state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"current-screen","current-screen",-1454713691),new cljs.core.Keyword(null,"second-level-selection","second-level-selection",199785260)], null));

return c3kit.wire.spec_helper.render.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tic_tac_toe.render_screen.render_screen,tic_tac_toe.screens.second_level_selection_spec.state], null));
});})(_STAR_parent_description_STAR__orig_val__15885_15924,_STAR_parent_description_STAR__temp_val__15886_15925,description__11245__auto___15923))
),speclj.components.new_characteristic.call(null,"renders second level selection screen",((function (_STAR_parent_description_STAR__orig_val__15885_15924,_STAR_parent_description_STAR__temp_val__15886_15925,description__11245__auto___15923){
return (function (){
var value__11745__auto___15930 = "#second-level-selection";
var node__11746__auto___15931 = c3kit.wire.spec_helper.select.call(null,value__11745__auto___15930);
if(cljs.core.truth_(node__11746__auto___15931)){
} else {
throw (new speclj.platform.SpecFailure(["Expected selector to find node: ",(function (){var temp__5806__auto__ = value__11745__auto___15930;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11350__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11350__auto__);
}
})()].join('')));
}

var expected__11382__auto___15932 = cljs.core.nth.call(null,tic_tac_toe.print_utils.level_prompt,(1));
var actual__11383__auto___15933 = c3kit.wire.spec_helper.text.call(null,"#second-level-selection h2");
if(cljs.core._EQ_.call(null,expected__11382__auto___15932,actual__11383__auto___15933)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__11382__auto___15932;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11350__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11350__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__11383__auto___15933;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11350__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11350__auto__);
}
})()," (using =)"].join('')));
}

var expected__11382__auto___15934 = cljs.core.nth.call(null,tic_tac_toe.print_utils.level_prompt,(3));
var actual__11383__auto___15935 = c3kit.wire.spec_helper.text.call(null,"#second-level-selection button:nth-of-type(1)");
if(cljs.core._EQ_.call(null,expected__11382__auto___15934,actual__11383__auto___15935)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__11382__auto___15934;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11350__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11350__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__11383__auto___15935;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11350__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11350__auto__);
}
})()," (using =)"].join('')));
}

var expected__11382__auto___15936 = cljs.core.nth.call(null,tic_tac_toe.print_utils.level_prompt,(4));
var actual__11383__auto___15937 = c3kit.wire.spec_helper.text.call(null,"#second-level-selection button:nth-of-type(2)");
if(cljs.core._EQ_.call(null,expected__11382__auto___15936,actual__11383__auto___15937)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__11382__auto___15936;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11350__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11350__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__11383__auto___15937;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11350__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11350__auto__);
}
})()," (using =)"].join('')));
}

var expected__11382__auto__ = cljs.core.nth.call(null,tic_tac_toe.print_utils.level_prompt,(6));
var actual__11383__auto__ = c3kit.wire.spec_helper.text.call(null,"#second-level-selection button:nth-of-type(3)");
if(cljs.core._EQ_.call(null,expected__11382__auto__,actual__11383__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__11382__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11350__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11350__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__11383__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11350__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11350__auto__);
}
})()," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__15885_15924,_STAR_parent_description_STAR__temp_val__15886_15925,description__11245__auto___15923))
,false),speclj.components.new_characteristic.call(null,"sets :first-ai-level to 1 when Easy is clicked",((function (_STAR_parent_description_STAR__orig_val__15885_15924,_STAR_parent_description_STAR__temp_val__15886_15925,description__11245__auto___15923){
return (function (){
c3kit.wire.spec_helper.click_BANG_.call(null,"#second-level-selection button:nth-of-type(1)");

var expected__11382__auto__ = (1);
var actual__11383__auto__ = new cljs.core.Keyword(null,"second-ai-level","second-ai-level",-418730455).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.screens.second_level_selection_spec.state));
if(cljs.core._EQ_.call(null,expected__11382__auto__,actual__11383__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__11382__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11350__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11350__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__11383__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11350__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11350__auto__);
}
})()," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__15885_15924,_STAR_parent_description_STAR__temp_val__15886_15925,description__11245__auto___15923))
,false),speclj.components.new_characteristic.call(null,"sets :first-ai-level to 2 when Medium is clicked",((function (_STAR_parent_description_STAR__orig_val__15885_15924,_STAR_parent_description_STAR__temp_val__15886_15925,description__11245__auto___15923){
return (function (){
c3kit.wire.spec_helper.click_BANG_.call(null,"#second-level-selection button:nth-of-type(2)");

var expected__11382__auto__ = (2);
var actual__11383__auto__ = new cljs.core.Keyword(null,"second-ai-level","second-ai-level",-418730455).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.screens.second_level_selection_spec.state));
if(cljs.core._EQ_.call(null,expected__11382__auto__,actual__11383__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__11382__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11350__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11350__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__11383__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11350__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11350__auto__);
}
})()," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__15885_15924,_STAR_parent_description_STAR__temp_val__15886_15925,description__11245__auto___15923))
,false),speclj.components.new_characteristic.call(null,"sets :first-ai-level to 3 when Unbeatable is clicked",((function (_STAR_parent_description_STAR__orig_val__15885_15924,_STAR_parent_description_STAR__temp_val__15886_15925,description__11245__auto___15923){
return (function (){
c3kit.wire.spec_helper.click_BANG_.call(null,"#second-level-selection button:nth-of-type(3)");

var expected__11382__auto__ = (3);
var actual__11383__auto__ = new cljs.core.Keyword(null,"second-ai-level","second-ai-level",-418730455).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.screens.second_level_selection_spec.state));
if(cljs.core._EQ_.call(null,expected__11382__auto__,actual__11383__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__11382__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11350__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11350__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__11383__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11350__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11350__auto__);
}
})()," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__15885_15924,_STAR_parent_description_STAR__temp_val__15886_15925,description__11245__auto___15923))
,false),speclj.components.new_characteristic.call(null,"sets screen to play upon user selection",((function (_STAR_parent_description_STAR__orig_val__15885_15924,_STAR_parent_description_STAR__temp_val__15886_15925,description__11245__auto___15923){
return (function (){
var seq__15919 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#second-level-selection button:nth-of-type(1)","#second-level-selection button:nth-of-type(2)","#second-level-selection button:nth-of-type(3)"], null));
var chunk__15920 = null;
var count__15921 = (0);
var i__15922 = (0);
while(true){
if((i__15922 < count__15921)){
var item = cljs.core._nth.call(null,chunk__15920,i__15922);
c3kit.wire.spec_helper.click_BANG_.call(null,item);

var expected__11382__auto___15938 = new cljs.core.Keyword(null,"play","play",-580418022);
var actual__11383__auto___15939 = new cljs.core.Keyword(null,"current-screen","current-screen",-1454713691).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.screens.second_level_selection_spec.state));
if(cljs.core._EQ_.call(null,expected__11382__auto___15938,actual__11383__auto___15939)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__11382__auto___15938;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11350__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11350__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__11383__auto___15939;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11350__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11350__auto__);
}
})()," (using =)"].join('')));
}


var G__15940 = seq__15919;
var G__15941 = chunk__15920;
var G__15942 = count__15921;
var G__15943 = (i__15922 + (1));
seq__15919 = G__15940;
chunk__15920 = G__15941;
count__15921 = G__15942;
i__15922 = G__15943;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__15919);
if(temp__5804__auto__){
var seq__15919__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15919__$1)){
var c__5525__auto__ = cljs.core.chunk_first.call(null,seq__15919__$1);
var G__15944 = cljs.core.chunk_rest.call(null,seq__15919__$1);
var G__15945 = c__5525__auto__;
var G__15946 = cljs.core.count.call(null,c__5525__auto__);
var G__15947 = (0);
seq__15919 = G__15944;
chunk__15920 = G__15945;
count__15921 = G__15946;
i__15922 = G__15947;
continue;
} else {
var item = cljs.core.first.call(null,seq__15919__$1);
c3kit.wire.spec_helper.click_BANG_.call(null,item);

var expected__11382__auto___15948 = new cljs.core.Keyword(null,"play","play",-580418022);
var actual__11383__auto___15949 = new cljs.core.Keyword(null,"current-screen","current-screen",-1454713691).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.screens.second_level_selection_spec.state));
if(cljs.core._EQ_.call(null,expected__11382__auto___15948,actual__11383__auto___15949)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__11382__auto___15948;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11350__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11350__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__11383__auto___15949;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11350__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11350__auto__);
}
})()," (using =)"].join('')));
}


var G__15950 = cljs.core.next.call(null,seq__15919__$1);
var G__15951 = null;
var G__15952 = (0);
var G__15953 = (0);
seq__15919 = G__15950;
chunk__15920 = G__15951;
count__15921 = G__15952;
i__15922 = G__15953;
continue;
}
} else {
return null;
}
}
break;
}
});})(_STAR_parent_description_STAR__orig_val__15885_15924,_STAR_parent_description_STAR__temp_val__15886_15925,description__11245__auto___15923))
,false)],null)));
var chunk__15888_15927 = null;
var count__15889_15928 = (0);
var i__15890_15929 = (0);
while(true){
if((i__15890_15929 < count__15889_15928)){
var component__11246__auto___15954 = cljs.core._nth.call(null,chunk__15888_15927,i__15890_15929);
speclj.components.install.call(null,component__11246__auto___15954,description__11245__auto___15923);


var G__15955 = seq__15887_15926;
var G__15956 = chunk__15888_15927;
var G__15957 = count__15889_15928;
var G__15958 = (i__15890_15929 + (1));
seq__15887_15926 = G__15955;
chunk__15888_15927 = G__15956;
count__15889_15928 = G__15957;
i__15890_15929 = G__15958;
continue;
} else {
var temp__5804__auto___15959 = cljs.core.seq.call(null,seq__15887_15926);
if(temp__5804__auto___15959){
var seq__15887_15960__$1 = temp__5804__auto___15959;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15887_15960__$1)){
var c__5525__auto___15961 = cljs.core.chunk_first.call(null,seq__15887_15960__$1);
var G__15962 = cljs.core.chunk_rest.call(null,seq__15887_15960__$1);
var G__15963 = c__5525__auto___15961;
var G__15964 = cljs.core.count.call(null,c__5525__auto___15961);
var G__15965 = (0);
seq__15887_15926 = G__15962;
chunk__15888_15927 = G__15963;
count__15889_15928 = G__15964;
i__15890_15929 = G__15965;
continue;
} else {
var component__11246__auto___15966 = cljs.core.first.call(null,seq__15887_15960__$1);
speclj.components.install.call(null,component__11246__auto___15966,description__11245__auto___15923);


var G__15967 = cljs.core.next.call(null,seq__15887_15960__$1);
var G__15968 = null;
var G__15969 = (0);
var G__15970 = (0);
seq__15887_15926 = G__15967;
chunk__15888_15927 = G__15968;
count__15889_15928 = G__15969;
i__15890_15929 = G__15970;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__15885_15924);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__11245__auto___15923);
}


//# sourceMappingURL=second_level_selection_spec.js.map
