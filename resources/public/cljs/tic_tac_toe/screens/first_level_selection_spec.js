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
var description__20276__auto___21570 = speclj.components.new_description.call(null,"first level selection screen",false,"tic-tac-toe.screens.first-level-selection-spec");
var _STAR_parent_description_STAR__orig_val__21381_21571 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__21382_21572 = description__20276__auto___21570;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__21382_21572);

try{var seq__21387_21573 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,9,(5),cljs.core.PersistentVector.EMPTY_NODE,[c3kit.wire.spec_helper.with_root_dom.call(null),speclj.components.new_before.call(null,((function (_STAR_parent_description_STAR__orig_val__21381_21571,_STAR_parent_description_STAR__temp_val__21382_21572,description__20276__auto___21570){
return (function (){
cljs.core.reset_BANG_.call(null,tic_tac_toe.screens.first_level_selection_spec.state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"current-screen","current-screen",-1454713691),new cljs.core.Keyword(null,"first-level-selection","first-level-selection",-675329011)], null));

return c3kit.wire.spec_helper.render.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tic_tac_toe.render_screen.render_screen,tic_tac_toe.screens.first_level_selection_spec.state], null));
});})(_STAR_parent_description_STAR__orig_val__21381_21571,_STAR_parent_description_STAR__temp_val__21382_21572,description__20276__auto___21570))
),speclj.components.new_characteristic.call(null,"renders first level selection screen",((function (_STAR_parent_description_STAR__orig_val__21381_21571,_STAR_parent_description_STAR__temp_val__21382_21572,description__20276__auto___21570){
return (function (){
var value__21320__auto___21579 = "#first-level-selection";
var node__21321__auto___21580 = c3kit.wire.spec_helper.select.call(null,value__21320__auto___21579);
if(cljs.core.truth_(node__21321__auto___21580)){
} else {
throw (new speclj.platform.SpecFailure(["Expected selector to find node: ",(function (){var temp__5806__auto__ = value__21320__auto___21579;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__20381__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__20381__auto__);
}
})()].join('')));
}

var expected__20413__auto___21591 = cljs.core.nth.call(null,tic_tac_toe.print_utils.level_prompt,(2));
var actual__20414__auto___21592 = c3kit.wire.spec_helper.text.call(null,"#first-level-selection h2");
if(cljs.core._EQ_.call(null,expected__20413__auto___21591,actual__20414__auto___21592)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__20413__auto___21591;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__20381__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__20381__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__20414__auto___21592;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__20381__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__20381__auto__);
}
})()," (using =)"].join('')));
}

var expected__20413__auto___21607 = cljs.core.nth.call(null,tic_tac_toe.print_utils.level_prompt,(3));
var actual__20414__auto___21608 = c3kit.wire.spec_helper.text.call(null,"#first-level-selection button:nth-of-type(1)");
if(cljs.core._EQ_.call(null,expected__20413__auto___21607,actual__20414__auto___21608)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__20413__auto___21607;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__20381__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__20381__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__20414__auto___21608;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__20381__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__20381__auto__);
}
})()," (using =)"].join('')));
}

var expected__20413__auto___21618 = cljs.core.nth.call(null,tic_tac_toe.print_utils.level_prompt,(4));
var actual__20414__auto___21619 = c3kit.wire.spec_helper.text.call(null,"#first-level-selection button:nth-of-type(2)");
if(cljs.core._EQ_.call(null,expected__20413__auto___21618,actual__20414__auto___21619)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__20413__auto___21618;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__20381__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__20381__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__20414__auto___21619;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__20381__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__20381__auto__);
}
})()," (using =)"].join('')));
}

var expected__20413__auto__ = cljs.core.nth.call(null,tic_tac_toe.print_utils.level_prompt,(6));
var actual__20414__auto__ = c3kit.wire.spec_helper.text.call(null,"#first-level-selection button:nth-of-type(3)");
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
});})(_STAR_parent_description_STAR__orig_val__21381_21571,_STAR_parent_description_STAR__temp_val__21382_21572,description__20276__auto___21570))
,false),speclj.components.new_characteristic.call(null,"specifies player X if mode is 4",((function (_STAR_parent_description_STAR__orig_val__21381_21571,_STAR_parent_description_STAR__temp_val__21382_21572,description__20276__auto___21570){
return (function (){
cljs.core.swap_BANG_.call(null,tic_tac_toe.screens.first_level_selection_spec.state,cljs.core.assoc,new cljs.core.Keyword(null,"mode","mode",654403691),(4));

c3kit.wire.spec_helper.render.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tic_tac_toe.render_screen.render_screen,tic_tac_toe.screens.first_level_selection_spec.state], null));

var expected__20413__auto__ = cljs.core.first.call(null,tic_tac_toe.print_utils.level_prompt);
var actual__20414__auto__ = c3kit.wire.spec_helper.text.call(null,"#first-level-selection h2");
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
});})(_STAR_parent_description_STAR__orig_val__21381_21571,_STAR_parent_description_STAR__temp_val__21382_21572,description__20276__auto___21570))
,false),speclj.components.new_characteristic.call(null,"sets :first-ai-level to 1 when Easy is clicked",((function (_STAR_parent_description_STAR__orig_val__21381_21571,_STAR_parent_description_STAR__temp_val__21382_21572,description__20276__auto___21570){
return (function (){
c3kit.wire.spec_helper.click_BANG_.call(null,"#first-level-selection button:nth-of-type(1)");

var expected__20413__auto__ = (1);
var actual__20414__auto__ = new cljs.core.Keyword(null,"first-ai-level","first-ai-level",1004633644).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.screens.first_level_selection_spec.state));
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
});})(_STAR_parent_description_STAR__orig_val__21381_21571,_STAR_parent_description_STAR__temp_val__21382_21572,description__20276__auto___21570))
,false),speclj.components.new_characteristic.call(null,"sets :first-ai-level to 2 when Medium is clicked",((function (_STAR_parent_description_STAR__orig_val__21381_21571,_STAR_parent_description_STAR__temp_val__21382_21572,description__20276__auto___21570){
return (function (){
c3kit.wire.spec_helper.click_BANG_.call(null,"#first-level-selection button:nth-of-type(2)");

var expected__20413__auto__ = (2);
var actual__20414__auto__ = new cljs.core.Keyword(null,"first-ai-level","first-ai-level",1004633644).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.screens.first_level_selection_spec.state));
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
});})(_STAR_parent_description_STAR__orig_val__21381_21571,_STAR_parent_description_STAR__temp_val__21382_21572,description__20276__auto___21570))
,false),speclj.components.new_characteristic.call(null,"sets :first-ai-level to 3 when Unbeatable is clicked",((function (_STAR_parent_description_STAR__orig_val__21381_21571,_STAR_parent_description_STAR__temp_val__21382_21572,description__20276__auto___21570){
return (function (){
c3kit.wire.spec_helper.click_BANG_.call(null,"#first-level-selection button:nth-of-type(3)");

var expected__20413__auto__ = (3);
var actual__20414__auto__ = new cljs.core.Keyword(null,"first-ai-level","first-ai-level",1004633644).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.screens.first_level_selection_spec.state));
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
});})(_STAR_parent_description_STAR__orig_val__21381_21571,_STAR_parent_description_STAR__temp_val__21382_21572,description__20276__auto___21570))
,false),speclj.components.new_characteristic.call(null,"sets screen to play upon user selection if not mode 4",((function (_STAR_parent_description_STAR__orig_val__21381_21571,_STAR_parent_description_STAR__temp_val__21382_21572,description__20276__auto___21570){
return (function (){
var seq__21477 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#first-level-selection button:nth-of-type(1)","#first-level-selection button:nth-of-type(2)","#first-level-selection button:nth-of-type(3)"], null));
var chunk__21478 = null;
var count__21479 = (0);
var i__21480 = (0);
while(true){
if((i__21480 < count__21479)){
var item = cljs.core._nth.call(null,chunk__21478,i__21480);
c3kit.wire.spec_helper.click_BANG_.call(null,item);

var expected__20413__auto___21642 = new cljs.core.Keyword(null,"play","play",-580418022);
var actual__20414__auto___21643 = new cljs.core.Keyword(null,"current-screen","current-screen",-1454713691).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.screens.first_level_selection_spec.state));
if(cljs.core._EQ_.call(null,expected__20413__auto___21642,actual__20414__auto___21643)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__20413__auto___21642;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__20381__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__20381__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__20414__auto___21643;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__20381__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__20381__auto__);
}
})()," (using =)"].join('')));
}


var G__21648 = seq__21477;
var G__21649 = chunk__21478;
var G__21650 = count__21479;
var G__21651 = (i__21480 + (1));
seq__21477 = G__21648;
chunk__21478 = G__21649;
count__21479 = G__21650;
i__21480 = G__21651;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__21477);
if(temp__5804__auto__){
var seq__21477__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21477__$1)){
var c__5525__auto__ = cljs.core.chunk_first.call(null,seq__21477__$1);
var G__21652 = cljs.core.chunk_rest.call(null,seq__21477__$1);
var G__21653 = c__5525__auto__;
var G__21654 = cljs.core.count.call(null,c__5525__auto__);
var G__21655 = (0);
seq__21477 = G__21652;
chunk__21478 = G__21653;
count__21479 = G__21654;
i__21480 = G__21655;
continue;
} else {
var item = cljs.core.first.call(null,seq__21477__$1);
c3kit.wire.spec_helper.click_BANG_.call(null,item);

var expected__20413__auto___21656 = new cljs.core.Keyword(null,"play","play",-580418022);
var actual__20414__auto___21657 = new cljs.core.Keyword(null,"current-screen","current-screen",-1454713691).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.screens.first_level_selection_spec.state));
if(cljs.core._EQ_.call(null,expected__20413__auto___21656,actual__20414__auto___21657)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__20413__auto___21656;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__20381__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__20381__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__20414__auto___21657;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__20381__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__20381__auto__);
}
})()," (using =)"].join('')));
}


var G__21664 = cljs.core.next.call(null,seq__21477__$1);
var G__21665 = null;
var G__21666 = (0);
var G__21667 = (0);
seq__21477 = G__21664;
chunk__21478 = G__21665;
count__21479 = G__21666;
i__21480 = G__21667;
continue;
}
} else {
return null;
}
}
break;
}
});})(_STAR_parent_description_STAR__orig_val__21381_21571,_STAR_parent_description_STAR__temp_val__21382_21572,description__20276__auto___21570))
,false),speclj.components.new_characteristic.call(null,"sets screen to second-level-selection upon user selection and mode is 4",((function (_STAR_parent_description_STAR__orig_val__21381_21571,_STAR_parent_description_STAR__temp_val__21382_21572,description__20276__auto___21570){
return (function (){
cljs.core.swap_BANG_.call(null,tic_tac_toe.screens.first_level_selection_spec.state,cljs.core.assoc,new cljs.core.Keyword(null,"mode","mode",654403691),(4));

var seq__21504 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#first-level-selection button:nth-of-type(1)","#first-level-selection button:nth-of-type(2)","#first-level-selection button:nth-of-type(3)"], null));
var chunk__21505 = null;
var count__21506 = (0);
var i__21507 = (0);
while(true){
if((i__21507 < count__21506)){
var item = cljs.core._nth.call(null,chunk__21505,i__21507);
c3kit.wire.spec_helper.click_BANG_.call(null,item);

var expected__20413__auto___21668 = new cljs.core.Keyword(null,"second-level-selection","second-level-selection",199785260);
var actual__20414__auto___21669 = new cljs.core.Keyword(null,"current-screen","current-screen",-1454713691).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.screens.first_level_selection_spec.state));
if(cljs.core._EQ_.call(null,expected__20413__auto___21668,actual__20414__auto___21669)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__20413__auto___21668;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__20381__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__20381__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__20414__auto___21669;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__20381__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__20381__auto__);
}
})()," (using =)"].join('')));
}


var G__21670 = seq__21504;
var G__21671 = chunk__21505;
var G__21672 = count__21506;
var G__21673 = (i__21507 + (1));
seq__21504 = G__21670;
chunk__21505 = G__21671;
count__21506 = G__21672;
i__21507 = G__21673;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__21504);
if(temp__5804__auto__){
var seq__21504__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21504__$1)){
var c__5525__auto__ = cljs.core.chunk_first.call(null,seq__21504__$1);
var G__21674 = cljs.core.chunk_rest.call(null,seq__21504__$1);
var G__21675 = c__5525__auto__;
var G__21676 = cljs.core.count.call(null,c__5525__auto__);
var G__21677 = (0);
seq__21504 = G__21674;
chunk__21505 = G__21675;
count__21506 = G__21676;
i__21507 = G__21677;
continue;
} else {
var item = cljs.core.first.call(null,seq__21504__$1);
c3kit.wire.spec_helper.click_BANG_.call(null,item);

var expected__20413__auto___21678 = new cljs.core.Keyword(null,"second-level-selection","second-level-selection",199785260);
var actual__20414__auto___21679 = new cljs.core.Keyword(null,"current-screen","current-screen",-1454713691).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.screens.first_level_selection_spec.state));
if(cljs.core._EQ_.call(null,expected__20413__auto___21678,actual__20414__auto___21679)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__20413__auto___21678;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__20381__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__20381__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__20414__auto___21679;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__20381__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__20381__auto__);
}
})()," (using =)"].join('')));
}


var G__21680 = cljs.core.next.call(null,seq__21504__$1);
var G__21681 = null;
var G__21682 = (0);
var G__21683 = (0);
seq__21504 = G__21680;
chunk__21505 = G__21681;
count__21506 = G__21682;
i__21507 = G__21683;
continue;
}
} else {
return null;
}
}
break;
}
});})(_STAR_parent_description_STAR__orig_val__21381_21571,_STAR_parent_description_STAR__temp_val__21382_21572,description__20276__auto___21570))
,false)],null)));
var chunk__21388_21574 = null;
var count__21389_21575 = (0);
var i__21390_21576 = (0);
while(true){
if((i__21390_21576 < count__21389_21575)){
var component__20277__auto___21684 = cljs.core._nth.call(null,chunk__21388_21574,i__21390_21576);
speclj.components.install.call(null,component__20277__auto___21684,description__20276__auto___21570);


var G__21685 = seq__21387_21573;
var G__21686 = chunk__21388_21574;
var G__21687 = count__21389_21575;
var G__21688 = (i__21390_21576 + (1));
seq__21387_21573 = G__21685;
chunk__21388_21574 = G__21686;
count__21389_21575 = G__21687;
i__21390_21576 = G__21688;
continue;
} else {
var temp__5804__auto___21689 = cljs.core.seq.call(null,seq__21387_21573);
if(temp__5804__auto___21689){
var seq__21387_21690__$1 = temp__5804__auto___21689;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21387_21690__$1)){
var c__5525__auto___21691 = cljs.core.chunk_first.call(null,seq__21387_21690__$1);
var G__21692 = cljs.core.chunk_rest.call(null,seq__21387_21690__$1);
var G__21693 = c__5525__auto___21691;
var G__21694 = cljs.core.count.call(null,c__5525__auto___21691);
var G__21695 = (0);
seq__21387_21573 = G__21692;
chunk__21388_21574 = G__21693;
count__21389_21575 = G__21694;
i__21390_21576 = G__21695;
continue;
} else {
var component__20277__auto___21696 = cljs.core.first.call(null,seq__21387_21690__$1);
speclj.components.install.call(null,component__20277__auto___21696,description__20276__auto___21570);


var G__21697 = cljs.core.next.call(null,seq__21387_21690__$1);
var G__21698 = null;
var G__21699 = (0);
var G__21700 = (0);
seq__21387_21573 = G__21697;
chunk__21388_21574 = G__21698;
count__21389_21575 = G__21699;
i__21390_21576 = G__21700;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__21381_21571);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__20276__auto___21570);
}


//# sourceMappingURL=first_level_selection_spec.js.map
