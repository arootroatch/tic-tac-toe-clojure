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
var description__20276__auto___21485 = speclj.components.new_description.call(null,"second level selection screen",false,"tic-tac-toe.screens.second-level-selection-spec");
var _STAR_parent_description_STAR__orig_val__21391_21486 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__21392_21487 = description__20276__auto___21485;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__21392_21487);

try{var seq__21393_21488 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,7,(5),cljs.core.PersistentVector.EMPTY_NODE,[c3kit.wire.spec_helper.with_root_dom.call(null),speclj.components.new_before.call(null,((function (_STAR_parent_description_STAR__orig_val__21391_21486,_STAR_parent_description_STAR__temp_val__21392_21487,description__20276__auto___21485){
return (function (){
cljs.core.reset_BANG_.call(null,tic_tac_toe.screens.second_level_selection_spec.state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"current-screen","current-screen",-1454713691),new cljs.core.Keyword(null,"second-level-selection","second-level-selection",199785260)], null));

return c3kit.wire.spec_helper.render.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tic_tac_toe.render_screen.render_screen,tic_tac_toe.screens.second_level_selection_spec.state], null));
});})(_STAR_parent_description_STAR__orig_val__21391_21486,_STAR_parent_description_STAR__temp_val__21392_21487,description__20276__auto___21485))
),speclj.components.new_characteristic.call(null,"renders second level selection screen",((function (_STAR_parent_description_STAR__orig_val__21391_21486,_STAR_parent_description_STAR__temp_val__21392_21487,description__20276__auto___21485){
return (function (){
var value__21320__auto___21492 = "#second-level-selection";
var node__21321__auto___21493 = c3kit.wire.spec_helper.select.call(null,value__21320__auto___21492);
if(cljs.core.truth_(node__21321__auto___21493)){
} else {
throw (new speclj.platform.SpecFailure(["Expected selector to find node: ",(function (){var temp__5806__auto__ = value__21320__auto___21492;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__20381__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__20381__auto__);
}
})()].join('')));
}

var expected__20413__auto___21494 = cljs.core.nth.call(null,tic_tac_toe.print_utils.level_prompt,(1));
var actual__20414__auto___21495 = c3kit.wire.spec_helper.text.call(null,"#second-level-selection h2");
if(cljs.core._EQ_.call(null,expected__20413__auto___21494,actual__20414__auto___21495)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__20413__auto___21494;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__20381__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__20381__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__20414__auto___21495;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__20381__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__20381__auto__);
}
})()," (using =)"].join('')));
}

var expected__20413__auto___21496 = cljs.core.nth.call(null,tic_tac_toe.print_utils.level_prompt,(3));
var actual__20414__auto___21497 = c3kit.wire.spec_helper.text.call(null,"#second-level-selection button:nth-of-type(1)");
if(cljs.core._EQ_.call(null,expected__20413__auto___21496,actual__20414__auto___21497)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__20413__auto___21496;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__20381__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__20381__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__20414__auto___21497;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__20381__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__20381__auto__);
}
})()," (using =)"].join('')));
}

var expected__20413__auto___21498 = cljs.core.nth.call(null,tic_tac_toe.print_utils.level_prompt,(4));
var actual__20414__auto___21499 = c3kit.wire.spec_helper.text.call(null,"#second-level-selection button:nth-of-type(2)");
if(cljs.core._EQ_.call(null,expected__20413__auto___21498,actual__20414__auto___21499)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__20413__auto___21498;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__20381__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__20381__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__20414__auto___21499;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__20381__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__20381__auto__);
}
})()," (using =)"].join('')));
}

var expected__20413__auto__ = cljs.core.nth.call(null,tic_tac_toe.print_utils.level_prompt,(6));
var actual__20414__auto__ = c3kit.wire.spec_helper.text.call(null,"#second-level-selection button:nth-of-type(3)");
if(cljs.core._EQ_.call(null,expected__20413__auto__,actual__20414__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__20413__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__20381__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__20381__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__20414__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__20381__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__20381__auto__);
}
})()," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__21391_21486,_STAR_parent_description_STAR__temp_val__21392_21487,description__20276__auto___21485))
,false),speclj.components.new_characteristic.call(null,"sets :first-ai-level to 1 when Easy is clicked",((function (_STAR_parent_description_STAR__orig_val__21391_21486,_STAR_parent_description_STAR__temp_val__21392_21487,description__20276__auto___21485){
return (function (){
c3kit.wire.spec_helper.click_BANG_.call(null,"#second-level-selection button:nth-of-type(1)");

var expected__20413__auto__ = (1);
var actual__20414__auto__ = new cljs.core.Keyword(null,"second-ai-level","second-ai-level",-418730455).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.screens.second_level_selection_spec.state));
if(cljs.core._EQ_.call(null,expected__20413__auto__,actual__20414__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__20413__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__20381__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__20381__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__20414__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__20381__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__20381__auto__);
}
})()," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__21391_21486,_STAR_parent_description_STAR__temp_val__21392_21487,description__20276__auto___21485))
,false),speclj.components.new_characteristic.call(null,"sets :first-ai-level to 2 when Medium is clicked",((function (_STAR_parent_description_STAR__orig_val__21391_21486,_STAR_parent_description_STAR__temp_val__21392_21487,description__20276__auto___21485){
return (function (){
c3kit.wire.spec_helper.click_BANG_.call(null,"#second-level-selection button:nth-of-type(2)");

var expected__20413__auto__ = (2);
var actual__20414__auto__ = new cljs.core.Keyword(null,"second-ai-level","second-ai-level",-418730455).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.screens.second_level_selection_spec.state));
if(cljs.core._EQ_.call(null,expected__20413__auto__,actual__20414__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__20413__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__20381__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__20381__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__20414__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__20381__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__20381__auto__);
}
})()," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__21391_21486,_STAR_parent_description_STAR__temp_val__21392_21487,description__20276__auto___21485))
,false),speclj.components.new_characteristic.call(null,"sets :first-ai-level to 3 when Unbeatable is clicked",((function (_STAR_parent_description_STAR__orig_val__21391_21486,_STAR_parent_description_STAR__temp_val__21392_21487,description__20276__auto___21485){
return (function (){
c3kit.wire.spec_helper.click_BANG_.call(null,"#second-level-selection button:nth-of-type(3)");

var expected__20413__auto__ = (3);
var actual__20414__auto__ = new cljs.core.Keyword(null,"second-ai-level","second-ai-level",-418730455).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.screens.second_level_selection_spec.state));
if(cljs.core._EQ_.call(null,expected__20413__auto__,actual__20414__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__20413__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__20381__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__20381__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__20414__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__20381__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__20381__auto__);
}
})()," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__21391_21486,_STAR_parent_description_STAR__temp_val__21392_21487,description__20276__auto___21485))
,false),speclj.components.new_characteristic.call(null,"sets screen to play upon user selection",((function (_STAR_parent_description_STAR__orig_val__21391_21486,_STAR_parent_description_STAR__temp_val__21392_21487,description__20276__auto___21485){
return (function (){
var seq__21459 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#second-level-selection button:nth-of-type(1)","#second-level-selection button:nth-of-type(2)","#second-level-selection button:nth-of-type(3)"], null));
var chunk__21460 = null;
var count__21461 = (0);
var i__21462 = (0);
while(true){
if((i__21462 < count__21461)){
var item = cljs.core._nth.call(null,chunk__21460,i__21462);
c3kit.wire.spec_helper.click_BANG_.call(null,item);

var expected__20413__auto___21508 = new cljs.core.Keyword(null,"play","play",-580418022);
var actual__20414__auto___21509 = new cljs.core.Keyword(null,"current-screen","current-screen",-1454713691).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.screens.second_level_selection_spec.state));
if(cljs.core._EQ_.call(null,expected__20413__auto___21508,actual__20414__auto___21509)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__20413__auto___21508;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__20381__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__20381__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__20414__auto___21509;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__20381__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__20381__auto__);
}
})()," (using =)"].join('')));
}


var G__21517 = seq__21459;
var G__21518 = chunk__21460;
var G__21519 = count__21461;
var G__21520 = (i__21462 + (1));
seq__21459 = G__21517;
chunk__21460 = G__21518;
count__21461 = G__21519;
i__21462 = G__21520;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__21459);
if(temp__5804__auto__){
var seq__21459__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21459__$1)){
var c__5525__auto__ = cljs.core.chunk_first.call(null,seq__21459__$1);
var G__21521 = cljs.core.chunk_rest.call(null,seq__21459__$1);
var G__21522 = c__5525__auto__;
var G__21523 = cljs.core.count.call(null,c__5525__auto__);
var G__21524 = (0);
seq__21459 = G__21521;
chunk__21460 = G__21522;
count__21461 = G__21523;
i__21462 = G__21524;
continue;
} else {
var item = cljs.core.first.call(null,seq__21459__$1);
c3kit.wire.spec_helper.click_BANG_.call(null,item);

var expected__20413__auto___21525 = new cljs.core.Keyword(null,"play","play",-580418022);
var actual__20414__auto___21526 = new cljs.core.Keyword(null,"current-screen","current-screen",-1454713691).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.screens.second_level_selection_spec.state));
if(cljs.core._EQ_.call(null,expected__20413__auto___21525,actual__20414__auto___21526)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__20413__auto___21525;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__20381__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__20381__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__20414__auto___21526;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__20381__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__20381__auto__);
}
})()," (using =)"].join('')));
}


var G__21531 = cljs.core.next.call(null,seq__21459__$1);
var G__21532 = null;
var G__21533 = (0);
var G__21534 = (0);
seq__21459 = G__21531;
chunk__21460 = G__21532;
count__21461 = G__21533;
i__21462 = G__21534;
continue;
}
} else {
return null;
}
}
break;
}
});})(_STAR_parent_description_STAR__orig_val__21391_21486,_STAR_parent_description_STAR__temp_val__21392_21487,description__20276__auto___21485))
,false)],null)));
var chunk__21394_21489 = null;
var count__21395_21490 = (0);
var i__21396_21491 = (0);
while(true){
if((i__21396_21491 < count__21395_21490)){
var component__20277__auto___21535 = cljs.core._nth.call(null,chunk__21394_21489,i__21396_21491);
speclj.components.install.call(null,component__20277__auto___21535,description__20276__auto___21485);


var G__21536 = seq__21393_21488;
var G__21537 = chunk__21394_21489;
var G__21538 = count__21395_21490;
var G__21539 = (i__21396_21491 + (1));
seq__21393_21488 = G__21536;
chunk__21394_21489 = G__21537;
count__21395_21490 = G__21538;
i__21396_21491 = G__21539;
continue;
} else {
var temp__5804__auto___21540 = cljs.core.seq.call(null,seq__21393_21488);
if(temp__5804__auto___21540){
var seq__21393_21543__$1 = temp__5804__auto___21540;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21393_21543__$1)){
var c__5525__auto___21544 = cljs.core.chunk_first.call(null,seq__21393_21543__$1);
var G__21545 = cljs.core.chunk_rest.call(null,seq__21393_21543__$1);
var G__21546 = c__5525__auto___21544;
var G__21547 = cljs.core.count.call(null,c__5525__auto___21544);
var G__21548 = (0);
seq__21393_21488 = G__21545;
chunk__21394_21489 = G__21546;
count__21395_21490 = G__21547;
i__21396_21491 = G__21548;
continue;
} else {
var component__20277__auto___21549 = cljs.core.first.call(null,seq__21393_21543__$1);
speclj.components.install.call(null,component__20277__auto___21549,description__20276__auto___21485);


var G__21550 = cljs.core.next.call(null,seq__21393_21543__$1);
var G__21551 = null;
var G__21552 = (0);
var G__21553 = (0);
seq__21393_21488 = G__21550;
chunk__21394_21489 = G__21551;
count__21395_21490 = G__21552;
i__21396_21491 = G__21553;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__21391_21486);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__20276__auto___21485);
}


//# sourceMappingURL=second_level_selection_spec.js.map
