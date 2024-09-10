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
var description__11262__auto___17564 = speclj.components.new_description.call(null,"second level selection screen",false,"tic-tac-toe.screens.second-level-selection-spec");
var _STAR_parent_description_STAR__orig_val__17524_17565 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__17525_17566 = description__11262__auto___17564;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__17525_17566);

try{var seq__17526_17567 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,7,(5),cljs.core.PersistentVector.EMPTY_NODE,[c3kit.wire.spec_helper.with_root_dom.call(null),speclj.components.new_before.call(null,((function (_STAR_parent_description_STAR__orig_val__17524_17565,_STAR_parent_description_STAR__temp_val__17525_17566,description__11262__auto___17564){
return (function (){
cljs.core.reset_BANG_.call(null,tic_tac_toe.screens.second_level_selection_spec.state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"current-screen","current-screen",-1454713691),new cljs.core.Keyword(null,"second-level-selection","second-level-selection",199785260)], null));

return c3kit.wire.spec_helper.render.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tic_tac_toe.render_screen.render_screen,tic_tac_toe.screens.second_level_selection_spec.state], null));
});})(_STAR_parent_description_STAR__orig_val__17524_17565,_STAR_parent_description_STAR__temp_val__17525_17566,description__11262__auto___17564))
),speclj.components.new_characteristic.call(null,"renders second level selection screen",((function (_STAR_parent_description_STAR__orig_val__17524_17565,_STAR_parent_description_STAR__temp_val__17525_17566,description__11262__auto___17564){
return (function (){
var value__11762__auto___17571 = "#second-level-selection";
var node__11763__auto___17572 = c3kit.wire.spec_helper.select.call(null,value__11762__auto___17571);
if(cljs.core.truth_(node__11763__auto___17572)){
} else {
throw (new speclj.platform.SpecFailure(["Expected selector to find node: ",(function (){var temp__5806__auto__ = value__11762__auto___17571;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11367__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11367__auto__);
}
})()].join('')));
}

var expected__11399__auto___17573 = cljs.core.nth.call(null,tic_tac_toe.print_utils.level_prompt,(1));
var actual__11400__auto___17574 = c3kit.wire.spec_helper.text.call(null,"#second-level-selection h2");
if(cljs.core._EQ_.call(null,expected__11399__auto___17573,actual__11400__auto___17574)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__11399__auto___17573;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11367__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11367__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__11400__auto___17574;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11367__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11367__auto__);
}
})()," (using =)"].join('')));
}

var expected__11399__auto___17575 = cljs.core.nth.call(null,tic_tac_toe.print_utils.level_prompt,(3));
var actual__11400__auto___17576 = c3kit.wire.spec_helper.text.call(null,"#second-level-selection button:nth-of-type(1)");
if(cljs.core._EQ_.call(null,expected__11399__auto___17575,actual__11400__auto___17576)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__11399__auto___17575;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11367__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11367__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__11400__auto___17576;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11367__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11367__auto__);
}
})()," (using =)"].join('')));
}

var expected__11399__auto___17577 = cljs.core.nth.call(null,tic_tac_toe.print_utils.level_prompt,(4));
var actual__11400__auto___17578 = c3kit.wire.spec_helper.text.call(null,"#second-level-selection button:nth-of-type(2)");
if(cljs.core._EQ_.call(null,expected__11399__auto___17577,actual__11400__auto___17578)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__11399__auto___17577;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11367__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11367__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__11400__auto___17578;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11367__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11367__auto__);
}
})()," (using =)"].join('')));
}

var expected__11399__auto__ = cljs.core.nth.call(null,tic_tac_toe.print_utils.level_prompt,(6));
var actual__11400__auto__ = c3kit.wire.spec_helper.text.call(null,"#second-level-selection button:nth-of-type(3)");
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
});})(_STAR_parent_description_STAR__orig_val__17524_17565,_STAR_parent_description_STAR__temp_val__17525_17566,description__11262__auto___17564))
,false),speclj.components.new_characteristic.call(null,"sets :first-ai-level to 1 when Easy is clicked",((function (_STAR_parent_description_STAR__orig_val__17524_17565,_STAR_parent_description_STAR__temp_val__17525_17566,description__11262__auto___17564){
return (function (){
c3kit.wire.spec_helper.click_BANG_.call(null,"#second-level-selection button:nth-of-type(1)");

var expected__11399__auto__ = (1);
var actual__11400__auto__ = new cljs.core.Keyword(null,"second-ai-level","second-ai-level",-418730455).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.screens.second_level_selection_spec.state));
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
});})(_STAR_parent_description_STAR__orig_val__17524_17565,_STAR_parent_description_STAR__temp_val__17525_17566,description__11262__auto___17564))
,false),speclj.components.new_characteristic.call(null,"sets :first-ai-level to 2 when Medium is clicked",((function (_STAR_parent_description_STAR__orig_val__17524_17565,_STAR_parent_description_STAR__temp_val__17525_17566,description__11262__auto___17564){
return (function (){
c3kit.wire.spec_helper.click_BANG_.call(null,"#second-level-selection button:nth-of-type(2)");

var expected__11399__auto__ = (2);
var actual__11400__auto__ = new cljs.core.Keyword(null,"second-ai-level","second-ai-level",-418730455).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.screens.second_level_selection_spec.state));
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
});})(_STAR_parent_description_STAR__orig_val__17524_17565,_STAR_parent_description_STAR__temp_val__17525_17566,description__11262__auto___17564))
,false),speclj.components.new_characteristic.call(null,"sets :first-ai-level to 3 when Unbeatable is clicked",((function (_STAR_parent_description_STAR__orig_val__17524_17565,_STAR_parent_description_STAR__temp_val__17525_17566,description__11262__auto___17564){
return (function (){
c3kit.wire.spec_helper.click_BANG_.call(null,"#second-level-selection button:nth-of-type(3)");

var expected__11399__auto__ = (3);
var actual__11400__auto__ = new cljs.core.Keyword(null,"second-ai-level","second-ai-level",-418730455).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.screens.second_level_selection_spec.state));
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
});})(_STAR_parent_description_STAR__orig_val__17524_17565,_STAR_parent_description_STAR__temp_val__17525_17566,description__11262__auto___17564))
,false),speclj.components.new_characteristic.call(null,"sets screen to play upon user selection",((function (_STAR_parent_description_STAR__orig_val__17524_17565,_STAR_parent_description_STAR__temp_val__17525_17566,description__11262__auto___17564){
return (function (){
var seq__17560 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#second-level-selection button:nth-of-type(1)","#second-level-selection button:nth-of-type(2)","#second-level-selection button:nth-of-type(3)"], null));
var chunk__17561 = null;
var count__17562 = (0);
var i__17563 = (0);
while(true){
if((i__17563 < count__17562)){
var item = cljs.core._nth.call(null,chunk__17561,i__17563);
c3kit.wire.spec_helper.click_BANG_.call(null,item);

var expected__11399__auto___17579 = new cljs.core.Keyword(null,"play","play",-580418022);
var actual__11400__auto___17580 = new cljs.core.Keyword(null,"current-screen","current-screen",-1454713691).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.screens.second_level_selection_spec.state));
if(cljs.core._EQ_.call(null,expected__11399__auto___17579,actual__11400__auto___17580)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__11399__auto___17579;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11367__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11367__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__11400__auto___17580;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11367__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11367__auto__);
}
})()," (using =)"].join('')));
}


var G__17581 = seq__17560;
var G__17582 = chunk__17561;
var G__17583 = count__17562;
var G__17584 = (i__17563 + (1));
seq__17560 = G__17581;
chunk__17561 = G__17582;
count__17562 = G__17583;
i__17563 = G__17584;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__17560);
if(temp__5804__auto__){
var seq__17560__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__17560__$1)){
var c__5525__auto__ = cljs.core.chunk_first.call(null,seq__17560__$1);
var G__17585 = cljs.core.chunk_rest.call(null,seq__17560__$1);
var G__17586 = c__5525__auto__;
var G__17587 = cljs.core.count.call(null,c__5525__auto__);
var G__17588 = (0);
seq__17560 = G__17585;
chunk__17561 = G__17586;
count__17562 = G__17587;
i__17563 = G__17588;
continue;
} else {
var item = cljs.core.first.call(null,seq__17560__$1);
c3kit.wire.spec_helper.click_BANG_.call(null,item);

var expected__11399__auto___17589 = new cljs.core.Keyword(null,"play","play",-580418022);
var actual__11400__auto___17590 = new cljs.core.Keyword(null,"current-screen","current-screen",-1454713691).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.screens.second_level_selection_spec.state));
if(cljs.core._EQ_.call(null,expected__11399__auto___17589,actual__11400__auto___17590)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__11399__auto___17589;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11367__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11367__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__11400__auto___17590;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11367__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11367__auto__);
}
})()," (using =)"].join('')));
}


var G__17591 = cljs.core.next.call(null,seq__17560__$1);
var G__17592 = null;
var G__17593 = (0);
var G__17594 = (0);
seq__17560 = G__17591;
chunk__17561 = G__17592;
count__17562 = G__17593;
i__17563 = G__17594;
continue;
}
} else {
return null;
}
}
break;
}
});})(_STAR_parent_description_STAR__orig_val__17524_17565,_STAR_parent_description_STAR__temp_val__17525_17566,description__11262__auto___17564))
,false)],null)));
var chunk__17527_17568 = null;
var count__17528_17569 = (0);
var i__17529_17570 = (0);
while(true){
if((i__17529_17570 < count__17528_17569)){
var component__11263__auto___17595 = cljs.core._nth.call(null,chunk__17527_17568,i__17529_17570);
speclj.components.install.call(null,component__11263__auto___17595,description__11262__auto___17564);


var G__17596 = seq__17526_17567;
var G__17597 = chunk__17527_17568;
var G__17598 = count__17528_17569;
var G__17599 = (i__17529_17570 + (1));
seq__17526_17567 = G__17596;
chunk__17527_17568 = G__17597;
count__17528_17569 = G__17598;
i__17529_17570 = G__17599;
continue;
} else {
var temp__5804__auto___17600 = cljs.core.seq.call(null,seq__17526_17567);
if(temp__5804__auto___17600){
var seq__17526_17601__$1 = temp__5804__auto___17600;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__17526_17601__$1)){
var c__5525__auto___17602 = cljs.core.chunk_first.call(null,seq__17526_17601__$1);
var G__17603 = cljs.core.chunk_rest.call(null,seq__17526_17601__$1);
var G__17604 = c__5525__auto___17602;
var G__17605 = cljs.core.count.call(null,c__5525__auto___17602);
var G__17606 = (0);
seq__17526_17567 = G__17603;
chunk__17527_17568 = G__17604;
count__17528_17569 = G__17605;
i__17529_17570 = G__17606;
continue;
} else {
var component__11263__auto___17607 = cljs.core.first.call(null,seq__17526_17601__$1);
speclj.components.install.call(null,component__11263__auto___17607,description__11262__auto___17564);


var G__17608 = cljs.core.next.call(null,seq__17526_17601__$1);
var G__17609 = null;
var G__17610 = (0);
var G__17611 = (0);
seq__17526_17567 = G__17608;
chunk__17527_17568 = G__17609;
count__17528_17569 = G__17610;
i__17529_17570 = G__17611;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__17524_17565);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__11262__auto___17564);
}


//# sourceMappingURL=second_level_selection_spec.js.map
