// Compiled by ClojureScript 1.11.132 {:optimizations :none}
goog.provide('tic_tac_toe.screens.second_level_selection_spec');
goog.require('cljs.core');
goog.require('speclj.core');
goog.require('c3kit.wire.spec_helper');
goog.require('tic_tac_toe.prompts');
goog.require('tic_tac_toe.render_screen');
goog.require('tic_tac_toe.screens.level_selection');
if((typeof tic_tac_toe !== 'undefined') && (typeof tic_tac_toe.screens !== 'undefined') && (typeof tic_tac_toe.screens.second_level_selection_spec !== 'undefined') && (typeof tic_tac_toe.screens.second_level_selection_spec.state !== 'undefined')){
} else {
tic_tac_toe.screens.second_level_selection_spec.state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"current-screen","current-screen",-1454713691),new cljs.core.Keyword(null,"second-level-selection","second-level-selection",199785260)], null));
}
var description__9652__auto___13177 = speclj.components.new_description.call(null,"second level selection screen",false,"tic-tac-toe.screens.second-level-selection-spec");
var _STAR_parent_description_STAR__orig_val__13119_13178 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__13120_13179 = description__9652__auto___13177;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__13120_13179);

try{var seq__13121_13180 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,7,(5),cljs.core.PersistentVector.EMPTY_NODE,[c3kit.wire.spec_helper.with_root_dom.call(null),speclj.components.new_before.call(null,((function (_STAR_parent_description_STAR__orig_val__13119_13178,_STAR_parent_description_STAR__temp_val__13120_13179,description__9652__auto___13177){
return (function (){
cljs.core.reset_BANG_.call(null,tic_tac_toe.screens.second_level_selection_spec.state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"current-screen","current-screen",-1454713691),new cljs.core.Keyword(null,"second-level-selection","second-level-selection",199785260)], null));

return c3kit.wire.spec_helper.render.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tic_tac_toe.render_screen.render_screen,tic_tac_toe.screens.second_level_selection_spec.state], null));
});})(_STAR_parent_description_STAR__orig_val__13119_13178,_STAR_parent_description_STAR__temp_val__13120_13179,description__9652__auto___13177))
),speclj.components.new_characteristic.call(null,"renders second level selection screen",((function (_STAR_parent_description_STAR__orig_val__13119_13178,_STAR_parent_description_STAR__temp_val__13120_13179,description__9652__auto___13177){
return (function (){
var value__10152__auto___13188 = "#second-level-selection";
var node__10153__auto___13189 = c3kit.wire.spec_helper.select.call(null,value__10152__auto___13188);
if(cljs.core.truth_(node__10153__auto___13189)){
} else {
throw (new speclj.platform.SpecFailure(["Expected selector to find node: ",(function (){var temp__5806__auto__ = value__10152__auto___13188;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9757__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9757__auto__);
}
})()].join('')));
}

var expected__9789__auto___13190 = cljs.core.nth.call(null,tic_tac_toe.prompts.level_prompt,(1));
var actual__9790__auto___13191 = c3kit.wire.spec_helper.text.call(null,"#second-level-selection h2");
if(cljs.core._EQ_.call(null,expected__9789__auto___13190,actual__9790__auto___13191)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__9789__auto___13190;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9757__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9757__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__9790__auto___13191;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9757__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9757__auto__);
}
})()," (using =)"].join('')));
}

var expected__9789__auto___13192 = cljs.core.nth.call(null,tic_tac_toe.prompts.level_prompt,(3));
var actual__9790__auto___13193 = c3kit.wire.spec_helper.text.call(null,"#second-level-selection button:nth-of-type(1)");
if(cljs.core._EQ_.call(null,expected__9789__auto___13192,actual__9790__auto___13193)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__9789__auto___13192;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9757__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9757__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__9790__auto___13193;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9757__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9757__auto__);
}
})()," (using =)"].join('')));
}

var expected__9789__auto___13194 = cljs.core.nth.call(null,tic_tac_toe.prompts.level_prompt,(4));
var actual__9790__auto___13195 = c3kit.wire.spec_helper.text.call(null,"#second-level-selection button:nth-of-type(2)");
if(cljs.core._EQ_.call(null,expected__9789__auto___13194,actual__9790__auto___13195)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__9789__auto___13194;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9757__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9757__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__9790__auto___13195;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9757__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9757__auto__);
}
})()," (using =)"].join('')));
}

var expected__9789__auto__ = cljs.core.nth.call(null,tic_tac_toe.prompts.level_prompt,(6));
var actual__9790__auto__ = c3kit.wire.spec_helper.text.call(null,"#second-level-selection button:nth-of-type(3)");
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
});})(_STAR_parent_description_STAR__orig_val__13119_13178,_STAR_parent_description_STAR__temp_val__13120_13179,description__9652__auto___13177))
,false),speclj.components.new_characteristic.call(null,"sets :first-ai-level to 1 when Easy is clicked",((function (_STAR_parent_description_STAR__orig_val__13119_13178,_STAR_parent_description_STAR__temp_val__13120_13179,description__9652__auto___13177){
return (function (){
c3kit.wire.spec_helper.click_BANG_.call(null,"#second-level-selection button:nth-of-type(1)");

var expected__9789__auto__ = (1);
var actual__9790__auto__ = new cljs.core.Keyword(null,"second-ai-level","second-ai-level",-418730455).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.screens.second_level_selection_spec.state));
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
});})(_STAR_parent_description_STAR__orig_val__13119_13178,_STAR_parent_description_STAR__temp_val__13120_13179,description__9652__auto___13177))
,false),speclj.components.new_characteristic.call(null,"sets :first-ai-level to 2 when Medium is clicked",((function (_STAR_parent_description_STAR__orig_val__13119_13178,_STAR_parent_description_STAR__temp_val__13120_13179,description__9652__auto___13177){
return (function (){
c3kit.wire.spec_helper.click_BANG_.call(null,"#second-level-selection button:nth-of-type(2)");

var expected__9789__auto__ = (2);
var actual__9790__auto__ = new cljs.core.Keyword(null,"second-ai-level","second-ai-level",-418730455).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.screens.second_level_selection_spec.state));
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
});})(_STAR_parent_description_STAR__orig_val__13119_13178,_STAR_parent_description_STAR__temp_val__13120_13179,description__9652__auto___13177))
,false),speclj.components.new_characteristic.call(null,"sets :first-ai-level to 3 when Unbeatable is clicked",((function (_STAR_parent_description_STAR__orig_val__13119_13178,_STAR_parent_description_STAR__temp_val__13120_13179,description__9652__auto___13177){
return (function (){
c3kit.wire.spec_helper.click_BANG_.call(null,"#second-level-selection button:nth-of-type(3)");

var expected__9789__auto__ = (3);
var actual__9790__auto__ = new cljs.core.Keyword(null,"second-ai-level","second-ai-level",-418730455).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.screens.second_level_selection_spec.state));
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
});})(_STAR_parent_description_STAR__orig_val__13119_13178,_STAR_parent_description_STAR__temp_val__13120_13179,description__9652__auto___13177))
,false),speclj.components.new_characteristic.call(null,"sets screen to play upon user selection",((function (_STAR_parent_description_STAR__orig_val__13119_13178,_STAR_parent_description_STAR__temp_val__13120_13179,description__9652__auto___13177){
return (function (){
var seq__13171 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#second-level-selection button:nth-of-type(1)","#second-level-selection button:nth-of-type(2)","#second-level-selection button:nth-of-type(3)"], null));
var chunk__13172 = null;
var count__13173 = (0);
var i__13174 = (0);
while(true){
if((i__13174 < count__13173)){
var item = cljs.core._nth.call(null,chunk__13172,i__13174);
c3kit.wire.spec_helper.click_BANG_.call(null,item);

var expected__9789__auto___13200 = new cljs.core.Keyword(null,"play","play",-580418022);
var actual__9790__auto___13201 = new cljs.core.Keyword(null,"current-screen","current-screen",-1454713691).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.screens.second_level_selection_spec.state));
if(cljs.core._EQ_.call(null,expected__9789__auto___13200,actual__9790__auto___13201)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__9789__auto___13200;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9757__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9757__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__9790__auto___13201;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9757__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9757__auto__);
}
})()," (using =)"].join('')));
}


var G__13202 = seq__13171;
var G__13203 = chunk__13172;
var G__13204 = count__13173;
var G__13205 = (i__13174 + (1));
seq__13171 = G__13202;
chunk__13172 = G__13203;
count__13173 = G__13204;
i__13174 = G__13205;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__13171);
if(temp__5804__auto__){
var seq__13171__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13171__$1)){
var c__5525__auto__ = cljs.core.chunk_first.call(null,seq__13171__$1);
var G__13206 = cljs.core.chunk_rest.call(null,seq__13171__$1);
var G__13207 = c__5525__auto__;
var G__13208 = cljs.core.count.call(null,c__5525__auto__);
var G__13209 = (0);
seq__13171 = G__13206;
chunk__13172 = G__13207;
count__13173 = G__13208;
i__13174 = G__13209;
continue;
} else {
var item = cljs.core.first.call(null,seq__13171__$1);
c3kit.wire.spec_helper.click_BANG_.call(null,item);

var expected__9789__auto___13210 = new cljs.core.Keyword(null,"play","play",-580418022);
var actual__9790__auto___13211 = new cljs.core.Keyword(null,"current-screen","current-screen",-1454713691).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.screens.second_level_selection_spec.state));
if(cljs.core._EQ_.call(null,expected__9789__auto___13210,actual__9790__auto___13211)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__9789__auto___13210;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9757__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9757__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__9790__auto___13211;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9757__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9757__auto__);
}
})()," (using =)"].join('')));
}


var G__13212 = cljs.core.next.call(null,seq__13171__$1);
var G__13213 = null;
var G__13214 = (0);
var G__13215 = (0);
seq__13171 = G__13212;
chunk__13172 = G__13213;
count__13173 = G__13214;
i__13174 = G__13215;
continue;
}
} else {
return null;
}
}
break;
}
});})(_STAR_parent_description_STAR__orig_val__13119_13178,_STAR_parent_description_STAR__temp_val__13120_13179,description__9652__auto___13177))
,false)],null)));
var chunk__13122_13181 = null;
var count__13123_13182 = (0);
var i__13124_13183 = (0);
while(true){
if((i__13124_13183 < count__13123_13182)){
var component__9653__auto___13216 = cljs.core._nth.call(null,chunk__13122_13181,i__13124_13183);
speclj.components.install.call(null,component__9653__auto___13216,description__9652__auto___13177);


var G__13217 = seq__13121_13180;
var G__13218 = chunk__13122_13181;
var G__13219 = count__13123_13182;
var G__13220 = (i__13124_13183 + (1));
seq__13121_13180 = G__13217;
chunk__13122_13181 = G__13218;
count__13123_13182 = G__13219;
i__13124_13183 = G__13220;
continue;
} else {
var temp__5804__auto___13221 = cljs.core.seq.call(null,seq__13121_13180);
if(temp__5804__auto___13221){
var seq__13121_13222__$1 = temp__5804__auto___13221;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13121_13222__$1)){
var c__5525__auto___13223 = cljs.core.chunk_first.call(null,seq__13121_13222__$1);
var G__13224 = cljs.core.chunk_rest.call(null,seq__13121_13222__$1);
var G__13225 = c__5525__auto___13223;
var G__13226 = cljs.core.count.call(null,c__5525__auto___13223);
var G__13227 = (0);
seq__13121_13180 = G__13224;
chunk__13122_13181 = G__13225;
count__13123_13182 = G__13226;
i__13124_13183 = G__13227;
continue;
} else {
var component__9653__auto___13228 = cljs.core.first.call(null,seq__13121_13222__$1);
speclj.components.install.call(null,component__9653__auto___13228,description__9652__auto___13177);


var G__13229 = cljs.core.next.call(null,seq__13121_13222__$1);
var G__13230 = null;
var G__13231 = (0);
var G__13232 = (0);
seq__13121_13180 = G__13229;
chunk__13122_13181 = G__13230;
count__13123_13182 = G__13231;
i__13124_13183 = G__13232;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__13119_13178);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__9652__auto___13177);
}


//# sourceMappingURL=second_level_selection_spec.js.map
