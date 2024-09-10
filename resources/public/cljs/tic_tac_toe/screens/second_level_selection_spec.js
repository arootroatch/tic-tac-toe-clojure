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
var description__19707__auto___20633 = speclj.components.new_description.call(null,"second level selection screen",false,"tic-tac-toe.screens.second-level-selection-spec");
var _STAR_parent_description_STAR__orig_val__20517_20638 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__20518_20639 = description__19707__auto___20633;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__20518_20639);

try{var seq__20519_20640 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,7,(5),cljs.core.PersistentVector.EMPTY_NODE,[c3kit.wire.spec_helper.with_root_dom.call(null),speclj.components.new_before.call(null,((function (_STAR_parent_description_STAR__orig_val__20517_20638,_STAR_parent_description_STAR__temp_val__20518_20639,description__19707__auto___20633){
return (function (){
cljs.core.reset_BANG_.call(null,tic_tac_toe.screens.second_level_selection_spec.state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"current-screen","current-screen",-1454713691),new cljs.core.Keyword(null,"second-level-selection","second-level-selection",199785260)], null));

return c3kit.wire.spec_helper.render.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tic_tac_toe.render_screen.render_screen,tic_tac_toe.screens.second_level_selection_spec.state], null));
});})(_STAR_parent_description_STAR__orig_val__20517_20638,_STAR_parent_description_STAR__temp_val__20518_20639,description__19707__auto___20633))
),speclj.components.new_characteristic.call(null,"renders second level selection screen",((function (_STAR_parent_description_STAR__orig_val__20517_20638,_STAR_parent_description_STAR__temp_val__20518_20639,description__19707__auto___20633){
return (function (){
var value__20454__auto___20644 = "#second-level-selection";
var node__20455__auto___20645 = c3kit.wire.spec_helper.select.call(null,value__20454__auto___20644);
if(cljs.core.truth_(node__20455__auto___20645)){
} else {
throw (new speclj.platform.SpecFailure(["Expected selector to find node: ",(function (){var temp__5806__auto__ = value__20454__auto___20644;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__19812__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__19812__auto__);
}
})()].join('')));
}

var expected__19844__auto___20646 = cljs.core.nth.call(null,tic_tac_toe.print_utils.level_prompt,(1));
var actual__19845__auto___20647 = c3kit.wire.spec_helper.text.call(null,"#second-level-selection h2");
if(cljs.core._EQ_.call(null,expected__19844__auto___20646,actual__19845__auto___20647)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__19844__auto___20646;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__19812__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__19812__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__19845__auto___20647;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__19812__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__19812__auto__);
}
})()," (using =)"].join('')));
}

var expected__19844__auto___20648 = cljs.core.nth.call(null,tic_tac_toe.print_utils.level_prompt,(3));
var actual__19845__auto___20649 = c3kit.wire.spec_helper.text.call(null,"#second-level-selection button:nth-of-type(1)");
if(cljs.core._EQ_.call(null,expected__19844__auto___20648,actual__19845__auto___20649)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__19844__auto___20648;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__19812__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__19812__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__19845__auto___20649;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__19812__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__19812__auto__);
}
})()," (using =)"].join('')));
}

var expected__19844__auto___20650 = cljs.core.nth.call(null,tic_tac_toe.print_utils.level_prompt,(4));
var actual__19845__auto___20651 = c3kit.wire.spec_helper.text.call(null,"#second-level-selection button:nth-of-type(2)");
if(cljs.core._EQ_.call(null,expected__19844__auto___20650,actual__19845__auto___20651)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__19844__auto___20650;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__19812__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__19812__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__19845__auto___20651;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__19812__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__19812__auto__);
}
})()," (using =)"].join('')));
}

var expected__19844__auto__ = cljs.core.nth.call(null,tic_tac_toe.print_utils.level_prompt,(6));
var actual__19845__auto__ = c3kit.wire.spec_helper.text.call(null,"#second-level-selection button:nth-of-type(3)");
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
});})(_STAR_parent_description_STAR__orig_val__20517_20638,_STAR_parent_description_STAR__temp_val__20518_20639,description__19707__auto___20633))
,false),speclj.components.new_characteristic.call(null,"sets :first-ai-level to 1 when Easy is clicked",((function (_STAR_parent_description_STAR__orig_val__20517_20638,_STAR_parent_description_STAR__temp_val__20518_20639,description__19707__auto___20633){
return (function (){
c3kit.wire.spec_helper.click_BANG_.call(null,"#second-level-selection button:nth-of-type(1)");

var expected__19844__auto__ = (1);
var actual__19845__auto__ = new cljs.core.Keyword(null,"second-ai-level","second-ai-level",-418730455).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.screens.second_level_selection_spec.state));
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
});})(_STAR_parent_description_STAR__orig_val__20517_20638,_STAR_parent_description_STAR__temp_val__20518_20639,description__19707__auto___20633))
,false),speclj.components.new_characteristic.call(null,"sets :first-ai-level to 2 when Medium is clicked",((function (_STAR_parent_description_STAR__orig_val__20517_20638,_STAR_parent_description_STAR__temp_val__20518_20639,description__19707__auto___20633){
return (function (){
c3kit.wire.spec_helper.click_BANG_.call(null,"#second-level-selection button:nth-of-type(2)");

var expected__19844__auto__ = (2);
var actual__19845__auto__ = new cljs.core.Keyword(null,"second-ai-level","second-ai-level",-418730455).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.screens.second_level_selection_spec.state));
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
});})(_STAR_parent_description_STAR__orig_val__20517_20638,_STAR_parent_description_STAR__temp_val__20518_20639,description__19707__auto___20633))
,false),speclj.components.new_characteristic.call(null,"sets :first-ai-level to 3 when Unbeatable is clicked",((function (_STAR_parent_description_STAR__orig_val__20517_20638,_STAR_parent_description_STAR__temp_val__20518_20639,description__19707__auto___20633){
return (function (){
c3kit.wire.spec_helper.click_BANG_.call(null,"#second-level-selection button:nth-of-type(3)");

var expected__19844__auto__ = (3);
var actual__19845__auto__ = new cljs.core.Keyword(null,"second-ai-level","second-ai-level",-418730455).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.screens.second_level_selection_spec.state));
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
});})(_STAR_parent_description_STAR__orig_val__20517_20638,_STAR_parent_description_STAR__temp_val__20518_20639,description__19707__auto___20633))
,false),speclj.components.new_characteristic.call(null,"sets screen to play upon user selection",((function (_STAR_parent_description_STAR__orig_val__20517_20638,_STAR_parent_description_STAR__temp_val__20518_20639,description__19707__auto___20633){
return (function (){
var seq__20621 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#second-level-selection button:nth-of-type(1)","#second-level-selection button:nth-of-type(2)","#second-level-selection button:nth-of-type(3)"], null));
var chunk__20622 = null;
var count__20623 = (0);
var i__20624 = (0);
while(true){
if((i__20624 < count__20623)){
var item = cljs.core._nth.call(null,chunk__20622,i__20624);
c3kit.wire.spec_helper.click_BANG_.call(null,item);

var expected__19844__auto___20665 = new cljs.core.Keyword(null,"play","play",-580418022);
var actual__19845__auto___20666 = new cljs.core.Keyword(null,"current-screen","current-screen",-1454713691).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.screens.second_level_selection_spec.state));
if(cljs.core._EQ_.call(null,expected__19844__auto___20665,actual__19845__auto___20666)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__19844__auto___20665;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__19812__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__19812__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__19845__auto___20666;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__19812__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__19812__auto__);
}
})()," (using =)"].join('')));
}


var G__20669 = seq__20621;
var G__20670 = chunk__20622;
var G__20671 = count__20623;
var G__20672 = (i__20624 + (1));
seq__20621 = G__20669;
chunk__20622 = G__20670;
count__20623 = G__20671;
i__20624 = G__20672;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__20621);
if(temp__5804__auto__){
var seq__20621__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20621__$1)){
var c__5525__auto__ = cljs.core.chunk_first.call(null,seq__20621__$1);
var G__20675 = cljs.core.chunk_rest.call(null,seq__20621__$1);
var G__20676 = c__5525__auto__;
var G__20677 = cljs.core.count.call(null,c__5525__auto__);
var G__20678 = (0);
seq__20621 = G__20675;
chunk__20622 = G__20676;
count__20623 = G__20677;
i__20624 = G__20678;
continue;
} else {
var item = cljs.core.first.call(null,seq__20621__$1);
c3kit.wire.spec_helper.click_BANG_.call(null,item);

var expected__19844__auto___20679 = new cljs.core.Keyword(null,"play","play",-580418022);
var actual__19845__auto___20680 = new cljs.core.Keyword(null,"current-screen","current-screen",-1454713691).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.screens.second_level_selection_spec.state));
if(cljs.core._EQ_.call(null,expected__19844__auto___20679,actual__19845__auto___20680)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__19844__auto___20679;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__19812__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__19812__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__19845__auto___20680;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__19812__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__19812__auto__);
}
})()," (using =)"].join('')));
}


var G__20681 = cljs.core.next.call(null,seq__20621__$1);
var G__20682 = null;
var G__20683 = (0);
var G__20684 = (0);
seq__20621 = G__20681;
chunk__20622 = G__20682;
count__20623 = G__20683;
i__20624 = G__20684;
continue;
}
} else {
return null;
}
}
break;
}
});})(_STAR_parent_description_STAR__orig_val__20517_20638,_STAR_parent_description_STAR__temp_val__20518_20639,description__19707__auto___20633))
,false)],null)));
var chunk__20520_20641 = null;
var count__20521_20642 = (0);
var i__20522_20643 = (0);
while(true){
if((i__20522_20643 < count__20521_20642)){
var component__19708__auto___20685 = cljs.core._nth.call(null,chunk__20520_20641,i__20522_20643);
speclj.components.install.call(null,component__19708__auto___20685,description__19707__auto___20633);


var G__20690 = seq__20519_20640;
var G__20691 = chunk__20520_20641;
var G__20692 = count__20521_20642;
var G__20693 = (i__20522_20643 + (1));
seq__20519_20640 = G__20690;
chunk__20520_20641 = G__20691;
count__20521_20642 = G__20692;
i__20522_20643 = G__20693;
continue;
} else {
var temp__5804__auto___20694 = cljs.core.seq.call(null,seq__20519_20640);
if(temp__5804__auto___20694){
var seq__20519_20695__$1 = temp__5804__auto___20694;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20519_20695__$1)){
var c__5525__auto___20696 = cljs.core.chunk_first.call(null,seq__20519_20695__$1);
var G__20697 = cljs.core.chunk_rest.call(null,seq__20519_20695__$1);
var G__20698 = c__5525__auto___20696;
var G__20699 = cljs.core.count.call(null,c__5525__auto___20696);
var G__20700 = (0);
seq__20519_20640 = G__20697;
chunk__20520_20641 = G__20698;
count__20521_20642 = G__20699;
i__20522_20643 = G__20700;
continue;
} else {
var component__19708__auto___20701 = cljs.core.first.call(null,seq__20519_20695__$1);
speclj.components.install.call(null,component__19708__auto___20701,description__19707__auto___20633);


var G__20702 = cljs.core.next.call(null,seq__20519_20695__$1);
var G__20703 = null;
var G__20704 = (0);
var G__20705 = (0);
seq__20519_20640 = G__20702;
chunk__20520_20641 = G__20703;
count__20521_20642 = G__20704;
i__20522_20643 = G__20705;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__20517_20638);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__19707__auto___20633);
}


//# sourceMappingURL=second_level_selection_spec.js.map
