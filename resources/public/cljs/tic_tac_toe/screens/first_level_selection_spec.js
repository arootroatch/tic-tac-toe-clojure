// Compiled by ClojureScript 1.11.132 {:optimizations :none}
goog.provide('tic_tac_toe.screens.first_level_selection_spec');
goog.require('cljs.core');
goog.require('c3kit.wire.spec_helper');
goog.require('speclj.core');
goog.require('tic_tac_toe.print_utils');
goog.require('tic_tac_toe.render_screen');
goog.require('tic_tac_toe.screens.first_level_selection');
if((typeof tic_tac_toe !== 'undefined') && (typeof tic_tac_toe.screens !== 'undefined') && (typeof tic_tac_toe.screens.first_level_selection_spec !== 'undefined') && (typeof tic_tac_toe.screens.first_level_selection_spec.state !== 'undefined')){
} else {
tic_tac_toe.screens.first_level_selection_spec.state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"current-screen","current-screen",-1454713691),new cljs.core.Keyword(null,"first-level-selection","first-level-selection",-675329011)], null));
}
var description__11262__auto___17326 = speclj.components.new_description.call(null,"first level selection screen",false,"tic-tac-toe.screens.first-level-selection-spec");
var _STAR_parent_description_STAR__orig_val__17280_17327 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__17281_17328 = description__11262__auto___17326;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__17281_17328);

try{var seq__17282_17329 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,9,(5),cljs.core.PersistentVector.EMPTY_NODE,[c3kit.wire.spec_helper.with_root_dom.call(null),speclj.components.new_before.call(null,((function (_STAR_parent_description_STAR__orig_val__17280_17327,_STAR_parent_description_STAR__temp_val__17281_17328,description__11262__auto___17326){
return (function (){
cljs.core.reset_BANG_.call(null,tic_tac_toe.screens.first_level_selection_spec.state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"current-screen","current-screen",-1454713691),new cljs.core.Keyword(null,"first-level-selection","first-level-selection",-675329011)], null));

return c3kit.wire.spec_helper.render.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tic_tac_toe.render_screen.render_screen,tic_tac_toe.screens.first_level_selection_spec.state], null));
});})(_STAR_parent_description_STAR__orig_val__17280_17327,_STAR_parent_description_STAR__temp_val__17281_17328,description__11262__auto___17326))
),speclj.components.new_characteristic.call(null,"renders first level selection screen",((function (_STAR_parent_description_STAR__orig_val__17280_17327,_STAR_parent_description_STAR__temp_val__17281_17328,description__11262__auto___17326){
return (function (){
var value__11762__auto___17333 = "#first-level-selection";
var node__11763__auto___17334 = c3kit.wire.spec_helper.select.call(null,value__11762__auto___17333);
if(cljs.core.truth_(node__11763__auto___17334)){
} else {
throw (new speclj.platform.SpecFailure(["Expected selector to find node: ",(function (){var temp__5806__auto__ = value__11762__auto___17333;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11367__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11367__auto__);
}
})()].join('')));
}

var expected__11399__auto___17335 = cljs.core.nth.call(null,tic_tac_toe.print_utils.level_prompt,(2));
var actual__11400__auto___17336 = c3kit.wire.spec_helper.text.call(null,"#first-level-selection h2");
if(cljs.core._EQ_.call(null,expected__11399__auto___17335,actual__11400__auto___17336)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__11399__auto___17335;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11367__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11367__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__11400__auto___17336;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11367__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11367__auto__);
}
})()," (using =)"].join('')));
}

var expected__11399__auto___17337 = cljs.core.nth.call(null,tic_tac_toe.print_utils.level_prompt,(3));
var actual__11400__auto___17338 = c3kit.wire.spec_helper.text.call(null,"#first-level-selection button:nth-of-type(1)");
if(cljs.core._EQ_.call(null,expected__11399__auto___17337,actual__11400__auto___17338)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__11399__auto___17337;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11367__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11367__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__11400__auto___17338;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11367__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11367__auto__);
}
})()," (using =)"].join('')));
}

var expected__11399__auto___17339 = cljs.core.nth.call(null,tic_tac_toe.print_utils.level_prompt,(4));
var actual__11400__auto___17340 = c3kit.wire.spec_helper.text.call(null,"#first-level-selection button:nth-of-type(2)");
if(cljs.core._EQ_.call(null,expected__11399__auto___17339,actual__11400__auto___17340)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__11399__auto___17339;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11367__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11367__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__11400__auto___17340;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11367__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11367__auto__);
}
})()," (using =)"].join('')));
}

var expected__11399__auto__ = cljs.core.nth.call(null,tic_tac_toe.print_utils.level_prompt,(6));
var actual__11400__auto__ = c3kit.wire.spec_helper.text.call(null,"#first-level-selection button:nth-of-type(3)");
if(cljs.core._EQ_.call(null,expected__11399__auto__,actual__11400__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__11399__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11367__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11367__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__11400__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11367__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11367__auto__);
}
})()," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__17280_17327,_STAR_parent_description_STAR__temp_val__17281_17328,description__11262__auto___17326))
,false),speclj.components.new_characteristic.call(null,"specifies player X if mode is 4",((function (_STAR_parent_description_STAR__orig_val__17280_17327,_STAR_parent_description_STAR__temp_val__17281_17328,description__11262__auto___17326){
return (function (){
cljs.core.swap_BANG_.call(null,tic_tac_toe.screens.first_level_selection_spec.state,cljs.core.assoc,new cljs.core.Keyword(null,"mode","mode",654403691),(4));

c3kit.wire.spec_helper.render.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tic_tac_toe.render_screen.render_screen,tic_tac_toe.screens.first_level_selection_spec.state], null));

var expected__11399__auto__ = cljs.core.first.call(null,tic_tac_toe.print_utils.level_prompt);
var actual__11400__auto__ = c3kit.wire.spec_helper.text.call(null,"#first-level-selection h2");
if(cljs.core._EQ_.call(null,expected__11399__auto__,actual__11400__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__11399__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11367__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11367__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__11400__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11367__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11367__auto__);
}
})()," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__17280_17327,_STAR_parent_description_STAR__temp_val__17281_17328,description__11262__auto___17326))
,false),speclj.components.new_characteristic.call(null,"sets :first-ai-level to 1 when Easy is clicked",((function (_STAR_parent_description_STAR__orig_val__17280_17327,_STAR_parent_description_STAR__temp_val__17281_17328,description__11262__auto___17326){
return (function (){
c3kit.wire.spec_helper.click_BANG_.call(null,"#first-level-selection button:nth-of-type(1)");

var expected__11399__auto__ = (1);
var actual__11400__auto__ = new cljs.core.Keyword(null,"first-ai-level","first-ai-level",1004633644).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.screens.first_level_selection_spec.state));
if(cljs.core._EQ_.call(null,expected__11399__auto__,actual__11400__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__11399__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11367__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11367__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__11400__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11367__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11367__auto__);
}
})()," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__17280_17327,_STAR_parent_description_STAR__temp_val__17281_17328,description__11262__auto___17326))
,false),speclj.components.new_characteristic.call(null,"sets :first-ai-level to 2 when Medium is clicked",((function (_STAR_parent_description_STAR__orig_val__17280_17327,_STAR_parent_description_STAR__temp_val__17281_17328,description__11262__auto___17326){
return (function (){
c3kit.wire.spec_helper.click_BANG_.call(null,"#first-level-selection button:nth-of-type(2)");

var expected__11399__auto__ = (2);
var actual__11400__auto__ = new cljs.core.Keyword(null,"first-ai-level","first-ai-level",1004633644).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.screens.first_level_selection_spec.state));
if(cljs.core._EQ_.call(null,expected__11399__auto__,actual__11400__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__11399__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11367__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11367__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__11400__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11367__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11367__auto__);
}
})()," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__17280_17327,_STAR_parent_description_STAR__temp_val__17281_17328,description__11262__auto___17326))
,false),speclj.components.new_characteristic.call(null,"sets :first-ai-level to 3 when Unbeatable is clicked",((function (_STAR_parent_description_STAR__orig_val__17280_17327,_STAR_parent_description_STAR__temp_val__17281_17328,description__11262__auto___17326){
return (function (){
c3kit.wire.spec_helper.click_BANG_.call(null,"#first-level-selection button:nth-of-type(3)");

var expected__11399__auto__ = (3);
var actual__11400__auto__ = new cljs.core.Keyword(null,"first-ai-level","first-ai-level",1004633644).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.screens.first_level_selection_spec.state));
if(cljs.core._EQ_.call(null,expected__11399__auto__,actual__11400__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__11399__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11367__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11367__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__11400__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11367__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11367__auto__);
}
})()," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__17280_17327,_STAR_parent_description_STAR__temp_val__17281_17328,description__11262__auto___17326))
,false),speclj.components.new_characteristic.call(null,"sets screen to play upon user selection if not mode 4",((function (_STAR_parent_description_STAR__orig_val__17280_17327,_STAR_parent_description_STAR__temp_val__17281_17328,description__11262__auto___17326){
return (function (){
var seq__17318 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#first-level-selection button:nth-of-type(1)","#first-level-selection button:nth-of-type(2)","#first-level-selection button:nth-of-type(3)"], null));
var chunk__17319 = null;
var count__17320 = (0);
var i__17321 = (0);
while(true){
if((i__17321 < count__17320)){
var item = cljs.core._nth.call(null,chunk__17319,i__17321);
c3kit.wire.spec_helper.click_BANG_.call(null,item);

var expected__11399__auto___17341 = new cljs.core.Keyword(null,"play","play",-580418022);
var actual__11400__auto___17342 = new cljs.core.Keyword(null,"current-screen","current-screen",-1454713691).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.screens.first_level_selection_spec.state));
if(cljs.core._EQ_.call(null,expected__11399__auto___17341,actual__11400__auto___17342)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__11399__auto___17341;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11367__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11367__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__11400__auto___17342;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11367__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11367__auto__);
}
})()," (using =)"].join('')));
}


var G__17343 = seq__17318;
var G__17344 = chunk__17319;
var G__17345 = count__17320;
var G__17346 = (i__17321 + (1));
seq__17318 = G__17343;
chunk__17319 = G__17344;
count__17320 = G__17345;
i__17321 = G__17346;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__17318);
if(temp__5804__auto__){
var seq__17318__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__17318__$1)){
var c__5525__auto__ = cljs.core.chunk_first.call(null,seq__17318__$1);
var G__17347 = cljs.core.chunk_rest.call(null,seq__17318__$1);
var G__17348 = c__5525__auto__;
var G__17349 = cljs.core.count.call(null,c__5525__auto__);
var G__17350 = (0);
seq__17318 = G__17347;
chunk__17319 = G__17348;
count__17320 = G__17349;
i__17321 = G__17350;
continue;
} else {
var item = cljs.core.first.call(null,seq__17318__$1);
c3kit.wire.spec_helper.click_BANG_.call(null,item);

var expected__11399__auto___17351 = new cljs.core.Keyword(null,"play","play",-580418022);
var actual__11400__auto___17352 = new cljs.core.Keyword(null,"current-screen","current-screen",-1454713691).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.screens.first_level_selection_spec.state));
if(cljs.core._EQ_.call(null,expected__11399__auto___17351,actual__11400__auto___17352)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__11399__auto___17351;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11367__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11367__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__11400__auto___17352;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11367__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11367__auto__);
}
})()," (using =)"].join('')));
}


var G__17353 = cljs.core.next.call(null,seq__17318__$1);
var G__17354 = null;
var G__17355 = (0);
var G__17356 = (0);
seq__17318 = G__17353;
chunk__17319 = G__17354;
count__17320 = G__17355;
i__17321 = G__17356;
continue;
}
} else {
return null;
}
}
break;
}
});})(_STAR_parent_description_STAR__orig_val__17280_17327,_STAR_parent_description_STAR__temp_val__17281_17328,description__11262__auto___17326))
,false),speclj.components.new_characteristic.call(null,"sets screen to second-level-selection upon user selection and mode is 4",((function (_STAR_parent_description_STAR__orig_val__17280_17327,_STAR_parent_description_STAR__temp_val__17281_17328,description__11262__auto___17326){
return (function (){
cljs.core.swap_BANG_.call(null,tic_tac_toe.screens.first_level_selection_spec.state,cljs.core.assoc,new cljs.core.Keyword(null,"mode","mode",654403691),(4));

var seq__17322 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#first-level-selection button:nth-of-type(1)","#first-level-selection button:nth-of-type(2)","#first-level-selection button:nth-of-type(3)"], null));
var chunk__17323 = null;
var count__17324 = (0);
var i__17325 = (0);
while(true){
if((i__17325 < count__17324)){
var item = cljs.core._nth.call(null,chunk__17323,i__17325);
c3kit.wire.spec_helper.click_BANG_.call(null,item);

var expected__11399__auto___17357 = new cljs.core.Keyword(null,"second-level-selection","second-level-selection",199785260);
var actual__11400__auto___17358 = new cljs.core.Keyword(null,"current-screen","current-screen",-1454713691).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.screens.first_level_selection_spec.state));
if(cljs.core._EQ_.call(null,expected__11399__auto___17357,actual__11400__auto___17358)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__11399__auto___17357;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11367__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11367__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__11400__auto___17358;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11367__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11367__auto__);
}
})()," (using =)"].join('')));
}


var G__17359 = seq__17322;
var G__17360 = chunk__17323;
var G__17361 = count__17324;
var G__17362 = (i__17325 + (1));
seq__17322 = G__17359;
chunk__17323 = G__17360;
count__17324 = G__17361;
i__17325 = G__17362;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__17322);
if(temp__5804__auto__){
var seq__17322__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__17322__$1)){
var c__5525__auto__ = cljs.core.chunk_first.call(null,seq__17322__$1);
var G__17363 = cljs.core.chunk_rest.call(null,seq__17322__$1);
var G__17364 = c__5525__auto__;
var G__17365 = cljs.core.count.call(null,c__5525__auto__);
var G__17366 = (0);
seq__17322 = G__17363;
chunk__17323 = G__17364;
count__17324 = G__17365;
i__17325 = G__17366;
continue;
} else {
var item = cljs.core.first.call(null,seq__17322__$1);
c3kit.wire.spec_helper.click_BANG_.call(null,item);

var expected__11399__auto___17367 = new cljs.core.Keyword(null,"second-level-selection","second-level-selection",199785260);
var actual__11400__auto___17368 = new cljs.core.Keyword(null,"current-screen","current-screen",-1454713691).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.screens.first_level_selection_spec.state));
if(cljs.core._EQ_.call(null,expected__11399__auto___17367,actual__11400__auto___17368)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__11399__auto___17367;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11367__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11367__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__11400__auto___17368;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11367__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11367__auto__);
}
})()," (using =)"].join('')));
}


var G__17369 = cljs.core.next.call(null,seq__17322__$1);
var G__17370 = null;
var G__17371 = (0);
var G__17372 = (0);
seq__17322 = G__17369;
chunk__17323 = G__17370;
count__17324 = G__17371;
i__17325 = G__17372;
continue;
}
} else {
return null;
}
}
break;
}
});})(_STAR_parent_description_STAR__orig_val__17280_17327,_STAR_parent_description_STAR__temp_val__17281_17328,description__11262__auto___17326))
,false)],null)));
var chunk__17283_17330 = null;
var count__17284_17331 = (0);
var i__17285_17332 = (0);
while(true){
if((i__17285_17332 < count__17284_17331)){
var component__11263__auto___17373 = cljs.core._nth.call(null,chunk__17283_17330,i__17285_17332);
speclj.components.install.call(null,component__11263__auto___17373,description__11262__auto___17326);


var G__17374 = seq__17282_17329;
var G__17375 = chunk__17283_17330;
var G__17376 = count__17284_17331;
var G__17377 = (i__17285_17332 + (1));
seq__17282_17329 = G__17374;
chunk__17283_17330 = G__17375;
count__17284_17331 = G__17376;
i__17285_17332 = G__17377;
continue;
} else {
var temp__5804__auto___17378 = cljs.core.seq.call(null,seq__17282_17329);
if(temp__5804__auto___17378){
var seq__17282_17379__$1 = temp__5804__auto___17378;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__17282_17379__$1)){
var c__5525__auto___17380 = cljs.core.chunk_first.call(null,seq__17282_17379__$1);
var G__17381 = cljs.core.chunk_rest.call(null,seq__17282_17379__$1);
var G__17382 = c__5525__auto___17380;
var G__17383 = cljs.core.count.call(null,c__5525__auto___17380);
var G__17384 = (0);
seq__17282_17329 = G__17381;
chunk__17283_17330 = G__17382;
count__17284_17331 = G__17383;
i__17285_17332 = G__17384;
continue;
} else {
var component__11263__auto___17385 = cljs.core.first.call(null,seq__17282_17379__$1);
speclj.components.install.call(null,component__11263__auto___17385,description__11262__auto___17326);


var G__17386 = cljs.core.next.call(null,seq__17282_17379__$1);
var G__17387 = null;
var G__17388 = (0);
var G__17389 = (0);
seq__17282_17329 = G__17386;
chunk__17283_17330 = G__17387;
count__17284_17331 = G__17388;
i__17285_17332 = G__17389;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__17280_17327);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__11262__auto___17326);
}


//# sourceMappingURL=first_level_selection_spec.js.map
