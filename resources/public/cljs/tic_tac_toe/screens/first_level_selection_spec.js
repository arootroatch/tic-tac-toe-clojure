// Compiled by ClojureScript 1.11.132 {:optimizations :none}
goog.provide('tic_tac_toe.screens.first_level_selection_spec');
goog.require('cljs.core');
goog.require('c3kit.wire.spec_helper');
goog.require('speclj.core');
goog.require('tic_tac_toe.prompts');
goog.require('tic_tac_toe.render_screen');
goog.require('tic_tac_toe.screens.level_selection');
if((typeof tic_tac_toe !== 'undefined') && (typeof tic_tac_toe.screens !== 'undefined') && (typeof tic_tac_toe.screens.first_level_selection_spec !== 'undefined') && (typeof tic_tac_toe.screens.first_level_selection_spec.state !== 'undefined')){
} else {
tic_tac_toe.screens.first_level_selection_spec.state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"current-screen","current-screen",-1454713691),new cljs.core.Keyword(null,"first-level-selection","first-level-selection",-675329011)], null));
}
var description__9652__auto___13233 = speclj.components.new_description.call(null,"first level selection screen",false,"tic-tac-toe.screens.first-level-selection-spec");
var _STAR_parent_description_STAR__orig_val__13109_13234 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__13110_13235 = description__9652__auto___13233;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__13110_13235);

try{var seq__13111_13236 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,9,(5),cljs.core.PersistentVector.EMPTY_NODE,[c3kit.wire.spec_helper.with_root_dom.call(null),speclj.components.new_before.call(null,((function (_STAR_parent_description_STAR__orig_val__13109_13234,_STAR_parent_description_STAR__temp_val__13110_13235,description__9652__auto___13233){
return (function (){
cljs.core.reset_BANG_.call(null,tic_tac_toe.screens.first_level_selection_spec.state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"current-screen","current-screen",-1454713691),new cljs.core.Keyword(null,"first-level-selection","first-level-selection",-675329011)], null));

return c3kit.wire.spec_helper.render.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tic_tac_toe.render_screen.render_screen,tic_tac_toe.screens.first_level_selection_spec.state], null));
});})(_STAR_parent_description_STAR__orig_val__13109_13234,_STAR_parent_description_STAR__temp_val__13110_13235,description__9652__auto___13233))
),speclj.components.new_characteristic.call(null,"renders first level selection screen",((function (_STAR_parent_description_STAR__orig_val__13109_13234,_STAR_parent_description_STAR__temp_val__13110_13235,description__9652__auto___13233){
return (function (){
var value__10152__auto___13240 = "#first-level-selection";
var node__10153__auto___13241 = c3kit.wire.spec_helper.select.call(null,value__10152__auto___13240);
if(cljs.core.truth_(node__10153__auto___13241)){
} else {
throw (new speclj.platform.SpecFailure(["Expected selector to find node: ",(function (){var temp__5806__auto__ = value__10152__auto___13240;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9757__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9757__auto__);
}
})()].join('')));
}

var expected__9789__auto___13242 = cljs.core.nth.call(null,tic_tac_toe.prompts.level_prompt,(2));
var actual__9790__auto___13243 = c3kit.wire.spec_helper.text.call(null,"#first-level-selection h2");
if(cljs.core._EQ_.call(null,expected__9789__auto___13242,actual__9790__auto___13243)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__9789__auto___13242;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9757__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9757__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__9790__auto___13243;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9757__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9757__auto__);
}
})()," (using =)"].join('')));
}

var expected__9789__auto___13244 = cljs.core.nth.call(null,tic_tac_toe.prompts.level_prompt,(3));
var actual__9790__auto___13245 = c3kit.wire.spec_helper.text.call(null,"#first-level-selection button:nth-of-type(1)");
if(cljs.core._EQ_.call(null,expected__9789__auto___13244,actual__9790__auto___13245)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__9789__auto___13244;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9757__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9757__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__9790__auto___13245;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9757__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9757__auto__);
}
})()," (using =)"].join('')));
}

var expected__9789__auto___13246 = cljs.core.nth.call(null,tic_tac_toe.prompts.level_prompt,(4));
var actual__9790__auto___13247 = c3kit.wire.spec_helper.text.call(null,"#first-level-selection button:nth-of-type(2)");
if(cljs.core._EQ_.call(null,expected__9789__auto___13246,actual__9790__auto___13247)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__9789__auto___13246;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9757__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9757__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__9790__auto___13247;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9757__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9757__auto__);
}
})()," (using =)"].join('')));
}

var expected__9789__auto__ = cljs.core.nth.call(null,tic_tac_toe.prompts.level_prompt,(6));
var actual__9790__auto__ = c3kit.wire.spec_helper.text.call(null,"#first-level-selection button:nth-of-type(3)");
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
});})(_STAR_parent_description_STAR__orig_val__13109_13234,_STAR_parent_description_STAR__temp_val__13110_13235,description__9652__auto___13233))
,false),speclj.components.new_characteristic.call(null,"specifies player X if mode is 4",((function (_STAR_parent_description_STAR__orig_val__13109_13234,_STAR_parent_description_STAR__temp_val__13110_13235,description__9652__auto___13233){
return (function (){
cljs.core.swap_BANG_.call(null,tic_tac_toe.screens.first_level_selection_spec.state,cljs.core.assoc,new cljs.core.Keyword(null,"mode","mode",654403691),(4));

c3kit.wire.spec_helper.render.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tic_tac_toe.render_screen.render_screen,tic_tac_toe.screens.first_level_selection_spec.state], null));

var expected__9789__auto__ = cljs.core.first.call(null,tic_tac_toe.prompts.level_prompt);
var actual__9790__auto__ = c3kit.wire.spec_helper.text.call(null,"#first-level-selection h2");
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
});})(_STAR_parent_description_STAR__orig_val__13109_13234,_STAR_parent_description_STAR__temp_val__13110_13235,description__9652__auto___13233))
,false),speclj.components.new_characteristic.call(null,"sets :first-ai-level to 1 when Easy is clicked",((function (_STAR_parent_description_STAR__orig_val__13109_13234,_STAR_parent_description_STAR__temp_val__13110_13235,description__9652__auto___13233){
return (function (){
c3kit.wire.spec_helper.click_BANG_.call(null,"#first-level-selection button:nth-of-type(1)");

var expected__9789__auto__ = (1);
var actual__9790__auto__ = new cljs.core.Keyword(null,"first-ai-level","first-ai-level",1004633644).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.screens.first_level_selection_spec.state));
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
});})(_STAR_parent_description_STAR__orig_val__13109_13234,_STAR_parent_description_STAR__temp_val__13110_13235,description__9652__auto___13233))
,false),speclj.components.new_characteristic.call(null,"sets :first-ai-level to 2 when Medium is clicked",((function (_STAR_parent_description_STAR__orig_val__13109_13234,_STAR_parent_description_STAR__temp_val__13110_13235,description__9652__auto___13233){
return (function (){
c3kit.wire.spec_helper.click_BANG_.call(null,"#first-level-selection button:nth-of-type(2)");

var expected__9789__auto__ = (2);
var actual__9790__auto__ = new cljs.core.Keyword(null,"first-ai-level","first-ai-level",1004633644).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.screens.first_level_selection_spec.state));
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
});})(_STAR_parent_description_STAR__orig_val__13109_13234,_STAR_parent_description_STAR__temp_val__13110_13235,description__9652__auto___13233))
,false),speclj.components.new_characteristic.call(null,"sets :first-ai-level to 3 when Unbeatable is clicked",((function (_STAR_parent_description_STAR__orig_val__13109_13234,_STAR_parent_description_STAR__temp_val__13110_13235,description__9652__auto___13233){
return (function (){
c3kit.wire.spec_helper.click_BANG_.call(null,"#first-level-selection button:nth-of-type(3)");

var expected__9789__auto__ = (3);
var actual__9790__auto__ = new cljs.core.Keyword(null,"first-ai-level","first-ai-level",1004633644).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.screens.first_level_selection_spec.state));
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
});})(_STAR_parent_description_STAR__orig_val__13109_13234,_STAR_parent_description_STAR__temp_val__13110_13235,description__9652__auto___13233))
,false),speclj.components.new_characteristic.call(null,"sets screen to play upon user selection if not mode 4",((function (_STAR_parent_description_STAR__orig_val__13109_13234,_STAR_parent_description_STAR__temp_val__13110_13235,description__9652__auto___13233){
return (function (){
var seq__13184 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#first-level-selection button:nth-of-type(1)","#first-level-selection button:nth-of-type(2)","#first-level-selection button:nth-of-type(3)"], null));
var chunk__13185 = null;
var count__13186 = (0);
var i__13187 = (0);
while(true){
if((i__13187 < count__13186)){
var item = cljs.core._nth.call(null,chunk__13185,i__13187);
c3kit.wire.spec_helper.click_BANG_.call(null,item);

var expected__9789__auto___13248 = new cljs.core.Keyword(null,"play","play",-580418022);
var actual__9790__auto___13249 = new cljs.core.Keyword(null,"current-screen","current-screen",-1454713691).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.screens.first_level_selection_spec.state));
if(cljs.core._EQ_.call(null,expected__9789__auto___13248,actual__9790__auto___13249)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__9789__auto___13248;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9757__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9757__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__9790__auto___13249;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9757__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9757__auto__);
}
})()," (using =)"].join('')));
}


var G__13250 = seq__13184;
var G__13251 = chunk__13185;
var G__13252 = count__13186;
var G__13253 = (i__13187 + (1));
seq__13184 = G__13250;
chunk__13185 = G__13251;
count__13186 = G__13252;
i__13187 = G__13253;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__13184);
if(temp__5804__auto__){
var seq__13184__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13184__$1)){
var c__5525__auto__ = cljs.core.chunk_first.call(null,seq__13184__$1);
var G__13254 = cljs.core.chunk_rest.call(null,seq__13184__$1);
var G__13255 = c__5525__auto__;
var G__13256 = cljs.core.count.call(null,c__5525__auto__);
var G__13257 = (0);
seq__13184 = G__13254;
chunk__13185 = G__13255;
count__13186 = G__13256;
i__13187 = G__13257;
continue;
} else {
var item = cljs.core.first.call(null,seq__13184__$1);
c3kit.wire.spec_helper.click_BANG_.call(null,item);

var expected__9789__auto___13258 = new cljs.core.Keyword(null,"play","play",-580418022);
var actual__9790__auto___13259 = new cljs.core.Keyword(null,"current-screen","current-screen",-1454713691).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.screens.first_level_selection_spec.state));
if(cljs.core._EQ_.call(null,expected__9789__auto___13258,actual__9790__auto___13259)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__9789__auto___13258;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9757__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9757__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__9790__auto___13259;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9757__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9757__auto__);
}
})()," (using =)"].join('')));
}


var G__13260 = cljs.core.next.call(null,seq__13184__$1);
var G__13261 = null;
var G__13262 = (0);
var G__13263 = (0);
seq__13184 = G__13260;
chunk__13185 = G__13261;
count__13186 = G__13262;
i__13187 = G__13263;
continue;
}
} else {
return null;
}
}
break;
}
});})(_STAR_parent_description_STAR__orig_val__13109_13234,_STAR_parent_description_STAR__temp_val__13110_13235,description__9652__auto___13233))
,false),speclj.components.new_characteristic.call(null,"sets screen to second-level-selection upon user selection and mode is 4",((function (_STAR_parent_description_STAR__orig_val__13109_13234,_STAR_parent_description_STAR__temp_val__13110_13235,description__9652__auto___13233){
return (function (){
cljs.core.swap_BANG_.call(null,tic_tac_toe.screens.first_level_selection_spec.state,cljs.core.assoc,new cljs.core.Keyword(null,"mode","mode",654403691),(4));

var seq__13196 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#first-level-selection button:nth-of-type(1)","#first-level-selection button:nth-of-type(2)","#first-level-selection button:nth-of-type(3)"], null));
var chunk__13197 = null;
var count__13198 = (0);
var i__13199 = (0);
while(true){
if((i__13199 < count__13198)){
var item = cljs.core._nth.call(null,chunk__13197,i__13199);
c3kit.wire.spec_helper.click_BANG_.call(null,item);

var expected__9789__auto___13264 = new cljs.core.Keyword(null,"second-level-selection","second-level-selection",199785260);
var actual__9790__auto___13265 = new cljs.core.Keyword(null,"current-screen","current-screen",-1454713691).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.screens.first_level_selection_spec.state));
if(cljs.core._EQ_.call(null,expected__9789__auto___13264,actual__9790__auto___13265)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__9789__auto___13264;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9757__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9757__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__9790__auto___13265;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9757__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9757__auto__);
}
})()," (using =)"].join('')));
}


var G__13266 = seq__13196;
var G__13267 = chunk__13197;
var G__13268 = count__13198;
var G__13269 = (i__13199 + (1));
seq__13196 = G__13266;
chunk__13197 = G__13267;
count__13198 = G__13268;
i__13199 = G__13269;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__13196);
if(temp__5804__auto__){
var seq__13196__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13196__$1)){
var c__5525__auto__ = cljs.core.chunk_first.call(null,seq__13196__$1);
var G__13270 = cljs.core.chunk_rest.call(null,seq__13196__$1);
var G__13271 = c__5525__auto__;
var G__13272 = cljs.core.count.call(null,c__5525__auto__);
var G__13273 = (0);
seq__13196 = G__13270;
chunk__13197 = G__13271;
count__13198 = G__13272;
i__13199 = G__13273;
continue;
} else {
var item = cljs.core.first.call(null,seq__13196__$1);
c3kit.wire.spec_helper.click_BANG_.call(null,item);

var expected__9789__auto___13274 = new cljs.core.Keyword(null,"second-level-selection","second-level-selection",199785260);
var actual__9790__auto___13275 = new cljs.core.Keyword(null,"current-screen","current-screen",-1454713691).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.screens.first_level_selection_spec.state));
if(cljs.core._EQ_.call(null,expected__9789__auto___13274,actual__9790__auto___13275)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__9789__auto___13274;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9757__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9757__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__9790__auto___13275;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9757__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9757__auto__);
}
})()," (using =)"].join('')));
}


var G__13276 = cljs.core.next.call(null,seq__13196__$1);
var G__13277 = null;
var G__13278 = (0);
var G__13279 = (0);
seq__13196 = G__13276;
chunk__13197 = G__13277;
count__13198 = G__13278;
i__13199 = G__13279;
continue;
}
} else {
return null;
}
}
break;
}
});})(_STAR_parent_description_STAR__orig_val__13109_13234,_STAR_parent_description_STAR__temp_val__13110_13235,description__9652__auto___13233))
,false)],null)));
var chunk__13112_13237 = null;
var count__13113_13238 = (0);
var i__13114_13239 = (0);
while(true){
if((i__13114_13239 < count__13113_13238)){
var component__9653__auto___13280 = cljs.core._nth.call(null,chunk__13112_13237,i__13114_13239);
speclj.components.install.call(null,component__9653__auto___13280,description__9652__auto___13233);


var G__13281 = seq__13111_13236;
var G__13282 = chunk__13112_13237;
var G__13283 = count__13113_13238;
var G__13284 = (i__13114_13239 + (1));
seq__13111_13236 = G__13281;
chunk__13112_13237 = G__13282;
count__13113_13238 = G__13283;
i__13114_13239 = G__13284;
continue;
} else {
var temp__5804__auto___13285 = cljs.core.seq.call(null,seq__13111_13236);
if(temp__5804__auto___13285){
var seq__13111_13286__$1 = temp__5804__auto___13285;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13111_13286__$1)){
var c__5525__auto___13287 = cljs.core.chunk_first.call(null,seq__13111_13286__$1);
var G__13288 = cljs.core.chunk_rest.call(null,seq__13111_13286__$1);
var G__13289 = c__5525__auto___13287;
var G__13290 = cljs.core.count.call(null,c__5525__auto___13287);
var G__13291 = (0);
seq__13111_13236 = G__13288;
chunk__13112_13237 = G__13289;
count__13113_13238 = G__13290;
i__13114_13239 = G__13291;
continue;
} else {
var component__9653__auto___13292 = cljs.core.first.call(null,seq__13111_13286__$1);
speclj.components.install.call(null,component__9653__auto___13292,description__9652__auto___13233);


var G__13293 = cljs.core.next.call(null,seq__13111_13286__$1);
var G__13294 = null;
var G__13295 = (0);
var G__13296 = (0);
seq__13111_13236 = G__13293;
chunk__13112_13237 = G__13294;
count__13113_13238 = G__13295;
i__13114_13239 = G__13296;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__13109_13234);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__9652__auto___13233);
}


//# sourceMappingURL=first_level_selection_spec.js.map
