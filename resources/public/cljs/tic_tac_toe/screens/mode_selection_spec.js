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
var description__11245__auto___15063 = speclj.components.new_description.call(null,"mode selection screen",false,"tic-tac-toe.screens.mode-selection-spec");
var _STAR_parent_description_STAR__orig_val__15049_15064 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__15050_15065 = description__11245__auto___15063;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__15050_15065);

try{var seq__15051_15066 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,8,(5),cljs.core.PersistentVector.EMPTY_NODE,[c3kit.wire.spec_helper.with_root_dom.call(null),speclj.components.new_before.call(null,((function (_STAR_parent_description_STAR__orig_val__15049_15064,_STAR_parent_description_STAR__temp_val__15050_15065,description__11245__auto___15063){
return (function (){
cljs.core.reset_BANG_.call(null,tic_tac_toe.screens.mode_selection_spec.state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"current-screen","current-screen",-1454713691),new cljs.core.Keyword(null,"mode-selection","mode-selection",986239762)], null));

return c3kit.wire.spec_helper.render.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tic_tac_toe.render_screen.render_screen,tic_tac_toe.screens.mode_selection_spec.state], null));
});})(_STAR_parent_description_STAR__orig_val__15049_15064,_STAR_parent_description_STAR__temp_val__15050_15065,description__11245__auto___15063))
),speclj.components.new_characteristic.call(null,"renders mode selection screen",((function (_STAR_parent_description_STAR__orig_val__15049_15064,_STAR_parent_description_STAR__temp_val__15050_15065,description__11245__auto___15063){
return (function (){
var value__11745__auto___15070 = "#mode-selection";
var node__11746__auto___15071 = c3kit.wire.spec_helper.select.call(null,value__11745__auto___15070);
if(cljs.core.truth_(node__11746__auto___15071)){
} else {
throw (new speclj.platform.SpecFailure(["Expected selector to find node: ",(function (){var temp__5806__auto__ = value__11745__auto___15070;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11350__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11350__auto__);
}
})()].join('')));
}

var expected__11382__auto___15072 = cljs.core.first.call(null,tic_tac_toe.print_utils.mode_prompt);
var actual__11383__auto___15073 = c3kit.wire.spec_helper.text.call(null,"#mode-selection h2");
if(cljs.core._EQ_.call(null,expected__11382__auto___15072,actual__11383__auto___15073)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__11382__auto___15072;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11350__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11350__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__11383__auto___15073;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11350__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11350__auto__);
}
})()," (using =)"].join('')));
}

var expected__11382__auto___15074 = cljs.core.nth.call(null,tic_tac_toe.print_utils.mode_prompt,(1));
var actual__11383__auto___15075 = c3kit.wire.spec_helper.text.call(null,"#mode-selection button:nth-of-type(1)");
if(cljs.core._EQ_.call(null,expected__11382__auto___15074,actual__11383__auto___15075)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__11382__auto___15074;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11350__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11350__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__11383__auto___15075;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11350__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11350__auto__);
}
})()," (using =)"].join('')));
}

var expected__11382__auto___15076 = cljs.core.nth.call(null,tic_tac_toe.print_utils.mode_prompt,(2));
var actual__11383__auto___15077 = c3kit.wire.spec_helper.text.call(null,"#mode-selection button:nth-of-type(2)");
if(cljs.core._EQ_.call(null,expected__11382__auto___15076,actual__11383__auto___15077)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__11382__auto___15076;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11350__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11350__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__11383__auto___15077;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11350__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11350__auto__);
}
})()," (using =)"].join('')));
}

var expected__11382__auto___15078 = cljs.core.nth.call(null,tic_tac_toe.print_utils.mode_prompt,(3));
var actual__11383__auto___15079 = c3kit.wire.spec_helper.text.call(null,"#mode-selection button:nth-of-type(3)");
if(cljs.core._EQ_.call(null,expected__11382__auto___15078,actual__11383__auto___15079)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__11382__auto___15078;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11350__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11350__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__11383__auto___15079;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11350__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11350__auto__);
}
})()," (using =)"].join('')));
}

var expected__11382__auto__ = cljs.core.nth.call(null,tic_tac_toe.print_utils.mode_prompt,(4));
var actual__11383__auto__ = c3kit.wire.spec_helper.text.call(null,"#mode-selection button:nth-of-type(4)");
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
});})(_STAR_parent_description_STAR__orig_val__15049_15064,_STAR_parent_description_STAR__temp_val__15050_15065,description__11245__auto___15063))
,false),speclj.components.new_characteristic.call(null,"sets mode to 1 if user selects HvH",((function (_STAR_parent_description_STAR__orig_val__15049_15064,_STAR_parent_description_STAR__temp_val__15050_15065,description__11245__auto___15063){
return (function (){
c3kit.wire.spec_helper.click_BANG_.call(null,"#mode-selection button:nth-of-type(1)");

var expected__11382__auto__ = (1);
var actual__11383__auto__ = new cljs.core.Keyword(null,"mode","mode",654403691).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.screens.mode_selection_spec.state));
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
});})(_STAR_parent_description_STAR__orig_val__15049_15064,_STAR_parent_description_STAR__temp_val__15050_15065,description__11245__auto___15063))
,false),speclj.components.new_characteristic.call(null,"sets mode to 2 if user selects HvC",((function (_STAR_parent_description_STAR__orig_val__15049_15064,_STAR_parent_description_STAR__temp_val__15050_15065,description__11245__auto___15063){
return (function (){
c3kit.wire.spec_helper.click_BANG_.call(null,"#mode-selection button:nth-of-type(2)");

var expected__11382__auto__ = (2);
var actual__11383__auto__ = new cljs.core.Keyword(null,"mode","mode",654403691).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.screens.mode_selection_spec.state));
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
});})(_STAR_parent_description_STAR__orig_val__15049_15064,_STAR_parent_description_STAR__temp_val__15050_15065,description__11245__auto___15063))
,false),speclj.components.new_characteristic.call(null,"sets mode to 3 if user selects CvH",((function (_STAR_parent_description_STAR__orig_val__15049_15064,_STAR_parent_description_STAR__temp_val__15050_15065,description__11245__auto___15063){
return (function (){
c3kit.wire.spec_helper.click_BANG_.call(null,"#mode-selection button:nth-of-type(3)");

var expected__11382__auto__ = (3);
var actual__11383__auto__ = new cljs.core.Keyword(null,"mode","mode",654403691).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.screens.mode_selection_spec.state));
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
});})(_STAR_parent_description_STAR__orig_val__15049_15064,_STAR_parent_description_STAR__temp_val__15050_15065,description__11245__auto___15063))
,false),speclj.components.new_characteristic.call(null,"sets mode to 4 if user selects CvC",((function (_STAR_parent_description_STAR__orig_val__15049_15064,_STAR_parent_description_STAR__temp_val__15050_15065,description__11245__auto___15063){
return (function (){
c3kit.wire.spec_helper.click_BANG_.call(null,"#mode-selection button:nth-of-type(4)");

var expected__11382__auto__ = (4);
var actual__11383__auto__ = new cljs.core.Keyword(null,"mode","mode",654403691).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.screens.mode_selection_spec.state));
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
});})(_STAR_parent_description_STAR__orig_val__15049_15064,_STAR_parent_description_STAR__temp_val__15050_15065,description__11245__auto___15063))
,false),speclj.components.new_characteristic.call(null,"sets screen to board-selection upon user selection",((function (_STAR_parent_description_STAR__orig_val__15049_15064,_STAR_parent_description_STAR__temp_val__15050_15065,description__11245__auto___15063){
return (function (){
var seq__15059 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#mode-selection button:nth-of-type(1)","#mode-selection button:nth-of-type(2)","#mode-selection button:nth-of-type(3)","#mode-selection button:nth-of-type(4)"], null));
var chunk__15060 = null;
var count__15061 = (0);
var i__15062 = (0);
while(true){
if((i__15062 < count__15061)){
var item = cljs.core._nth.call(null,chunk__15060,i__15062);
c3kit.wire.spec_helper.click_BANG_.call(null,item);

var expected__11382__auto___15080 = new cljs.core.Keyword(null,"board-selection","board-selection",276837898);
var actual__11383__auto___15081 = new cljs.core.Keyword(null,"current-screen","current-screen",-1454713691).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.screens.mode_selection_spec.state));
if(cljs.core._EQ_.call(null,expected__11382__auto___15080,actual__11383__auto___15081)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__11382__auto___15080;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11350__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11350__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__11383__auto___15081;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11350__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11350__auto__);
}
})()," (using =)"].join('')));
}


var G__15082 = seq__15059;
var G__15083 = chunk__15060;
var G__15084 = count__15061;
var G__15085 = (i__15062 + (1));
seq__15059 = G__15082;
chunk__15060 = G__15083;
count__15061 = G__15084;
i__15062 = G__15085;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__15059);
if(temp__5804__auto__){
var seq__15059__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15059__$1)){
var c__5525__auto__ = cljs.core.chunk_first.call(null,seq__15059__$1);
var G__15086 = cljs.core.chunk_rest.call(null,seq__15059__$1);
var G__15087 = c__5525__auto__;
var G__15088 = cljs.core.count.call(null,c__5525__auto__);
var G__15089 = (0);
seq__15059 = G__15086;
chunk__15060 = G__15087;
count__15061 = G__15088;
i__15062 = G__15089;
continue;
} else {
var item = cljs.core.first.call(null,seq__15059__$1);
c3kit.wire.spec_helper.click_BANG_.call(null,item);

var expected__11382__auto___15090 = new cljs.core.Keyword(null,"board-selection","board-selection",276837898);
var actual__11383__auto___15091 = new cljs.core.Keyword(null,"current-screen","current-screen",-1454713691).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.screens.mode_selection_spec.state));
if(cljs.core._EQ_.call(null,expected__11382__auto___15090,actual__11383__auto___15091)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__11382__auto___15090;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11350__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11350__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__11383__auto___15091;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11350__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11350__auto__);
}
})()," (using =)"].join('')));
}


var G__15092 = cljs.core.next.call(null,seq__15059__$1);
var G__15093 = null;
var G__15094 = (0);
var G__15095 = (0);
seq__15059 = G__15092;
chunk__15060 = G__15093;
count__15061 = G__15094;
i__15062 = G__15095;
continue;
}
} else {
return null;
}
}
break;
}
});})(_STAR_parent_description_STAR__orig_val__15049_15064,_STAR_parent_description_STAR__temp_val__15050_15065,description__11245__auto___15063))
,false)],null)));
var chunk__15052_15067 = null;
var count__15053_15068 = (0);
var i__15054_15069 = (0);
while(true){
if((i__15054_15069 < count__15053_15068)){
var component__11246__auto___15096 = cljs.core._nth.call(null,chunk__15052_15067,i__15054_15069);
speclj.components.install.call(null,component__11246__auto___15096,description__11245__auto___15063);


var G__15097 = seq__15051_15066;
var G__15098 = chunk__15052_15067;
var G__15099 = count__15053_15068;
var G__15100 = (i__15054_15069 + (1));
seq__15051_15066 = G__15097;
chunk__15052_15067 = G__15098;
count__15053_15068 = G__15099;
i__15054_15069 = G__15100;
continue;
} else {
var temp__5804__auto___15101 = cljs.core.seq.call(null,seq__15051_15066);
if(temp__5804__auto___15101){
var seq__15051_15102__$1 = temp__5804__auto___15101;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15051_15102__$1)){
var c__5525__auto___15103 = cljs.core.chunk_first.call(null,seq__15051_15102__$1);
var G__15104 = cljs.core.chunk_rest.call(null,seq__15051_15102__$1);
var G__15105 = c__5525__auto___15103;
var G__15106 = cljs.core.count.call(null,c__5525__auto___15103);
var G__15107 = (0);
seq__15051_15066 = G__15104;
chunk__15052_15067 = G__15105;
count__15053_15068 = G__15106;
i__15054_15069 = G__15107;
continue;
} else {
var component__11246__auto___15108 = cljs.core.first.call(null,seq__15051_15102__$1);
speclj.components.install.call(null,component__11246__auto___15108,description__11245__auto___15063);


var G__15109 = cljs.core.next.call(null,seq__15051_15102__$1);
var G__15110 = null;
var G__15111 = (0);
var G__15112 = (0);
seq__15051_15066 = G__15109;
chunk__15052_15067 = G__15110;
count__15053_15068 = G__15111;
i__15054_15069 = G__15112;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__15049_15064);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__11245__auto___15063);
}


//# sourceMappingURL=mode_selection_spec.js.map
