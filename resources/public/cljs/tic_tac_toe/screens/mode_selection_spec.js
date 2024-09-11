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
tic_tac_toe.screens.mode_selection_spec.state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"current-screen","current-screen",-1454713691),new cljs.core.Keyword(null,"mode-selection","mode-selection",986239762),new cljs.core.Keyword(null,"human?","human?",-2017219054),true], null));
}
var description__20276__auto___21769 = speclj.components.new_description.call(null,"mode selection screen",false,"tic-tac-toe.screens.mode-selection-spec");
var _STAR_parent_description_STAR__orig_val__21640_21770 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__21641_21771 = description__20276__auto___21769;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__21641_21771);

try{var seq__21644_21774 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,12,(5),cljs.core.PersistentVector.EMPTY_NODE,[c3kit.wire.spec_helper.with_root_dom.call(null),speclj.components.new_before.call(null,((function (_STAR_parent_description_STAR__orig_val__21640_21770,_STAR_parent_description_STAR__temp_val__21641_21771,description__20276__auto___21769){
return (function (){
cljs.core.reset_BANG_.call(null,tic_tac_toe.screens.mode_selection_spec.state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"current-screen","current-screen",-1454713691),new cljs.core.Keyword(null,"mode-selection","mode-selection",986239762)], null));

return c3kit.wire.spec_helper.render.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tic_tac_toe.render_screen.render_screen,tic_tac_toe.screens.mode_selection_spec.state], null));
});})(_STAR_parent_description_STAR__orig_val__21640_21770,_STAR_parent_description_STAR__temp_val__21641_21771,description__20276__auto___21769))
),speclj.components.new_characteristic.call(null,"renders mode selection screen",((function (_STAR_parent_description_STAR__orig_val__21640_21770,_STAR_parent_description_STAR__temp_val__21641_21771,description__20276__auto___21769){
return (function (){
var value__21320__auto___21780 = "#mode-selection";
var node__21321__auto___21781 = c3kit.wire.spec_helper.select.call(null,value__21320__auto___21780);
if(cljs.core.truth_(node__21321__auto___21781)){
} else {
throw (new speclj.platform.SpecFailure(["Expected selector to find node: ",(function (){var temp__5806__auto__ = value__21320__auto___21780;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__20381__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__20381__auto__);
}
})()].join('')));
}

var expected__20413__auto___21788 = cljs.core.first.call(null,tic_tac_toe.print_utils.mode_prompt);
var actual__20414__auto___21789 = c3kit.wire.spec_helper.text.call(null,"#mode-selection h2");
if(cljs.core._EQ_.call(null,expected__20413__auto___21788,actual__20414__auto___21789)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__20413__auto___21788;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__20381__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__20381__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__20414__auto___21789;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__20381__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__20381__auto__);
}
})()," (using =)"].join('')));
}

var expected__20413__auto___21790 = cljs.core.nth.call(null,tic_tac_toe.print_utils.mode_prompt,(1));
var actual__20414__auto___21791 = c3kit.wire.spec_helper.text.call(null,"#mode-selection button:nth-of-type(1)");
if(cljs.core._EQ_.call(null,expected__20413__auto___21790,actual__20414__auto___21791)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__20413__auto___21790;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__20381__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__20381__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__20414__auto___21791;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__20381__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__20381__auto__);
}
})()," (using =)"].join('')));
}

var expected__20413__auto___21792 = cljs.core.nth.call(null,tic_tac_toe.print_utils.mode_prompt,(2));
var actual__20414__auto___21793 = c3kit.wire.spec_helper.text.call(null,"#mode-selection button:nth-of-type(2)");
if(cljs.core._EQ_.call(null,expected__20413__auto___21792,actual__20414__auto___21793)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__20413__auto___21792;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__20381__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__20381__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__20414__auto___21793;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__20381__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__20381__auto__);
}
})()," (using =)"].join('')));
}

var expected__20413__auto___21794 = cljs.core.nth.call(null,tic_tac_toe.print_utils.mode_prompt,(3));
var actual__20414__auto___21795 = c3kit.wire.spec_helper.text.call(null,"#mode-selection button:nth-of-type(3)");
if(cljs.core._EQ_.call(null,expected__20413__auto___21794,actual__20414__auto___21795)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__20413__auto___21794;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__20381__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__20381__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__20414__auto___21795;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__20381__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__20381__auto__);
}
})()," (using =)"].join('')));
}

var expected__20413__auto__ = cljs.core.nth.call(null,tic_tac_toe.print_utils.mode_prompt,(4));
var actual__20414__auto__ = c3kit.wire.spec_helper.text.call(null,"#mode-selection button:nth-of-type(4)");
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
});})(_STAR_parent_description_STAR__orig_val__21640_21770,_STAR_parent_description_STAR__temp_val__21641_21771,description__20276__auto___21769))
,false),speclj.components.new_characteristic.call(null,"sets mode to 1 if user selects HvH",((function (_STAR_parent_description_STAR__orig_val__21640_21770,_STAR_parent_description_STAR__temp_val__21641_21771,description__20276__auto___21769){
return (function (){
c3kit.wire.spec_helper.click_BANG_.call(null,"#mode-selection button:nth-of-type(1)");

var expected__20413__auto__ = (1);
var actual__20414__auto__ = new cljs.core.Keyword(null,"mode","mode",654403691).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.screens.mode_selection_spec.state));
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
});})(_STAR_parent_description_STAR__orig_val__21640_21770,_STAR_parent_description_STAR__temp_val__21641_21771,description__20276__auto___21769))
,false),speclj.components.new_characteristic.call(null,"sets mode to 2 if user selects HvC",((function (_STAR_parent_description_STAR__orig_val__21640_21770,_STAR_parent_description_STAR__temp_val__21641_21771,description__20276__auto___21769){
return (function (){
c3kit.wire.spec_helper.click_BANG_.call(null,"#mode-selection button:nth-of-type(2)");

var expected__20413__auto__ = (2);
var actual__20414__auto__ = new cljs.core.Keyword(null,"mode","mode",654403691).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.screens.mode_selection_spec.state));
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
});})(_STAR_parent_description_STAR__orig_val__21640_21770,_STAR_parent_description_STAR__temp_val__21641_21771,description__20276__auto___21769))
,false),speclj.components.new_characteristic.call(null,"sets mode to 3 if user selects CvH",((function (_STAR_parent_description_STAR__orig_val__21640_21770,_STAR_parent_description_STAR__temp_val__21641_21771,description__20276__auto___21769){
return (function (){
c3kit.wire.spec_helper.click_BANG_.call(null,"#mode-selection button:nth-of-type(3)");

var expected__20413__auto__ = (3);
var actual__20414__auto__ = new cljs.core.Keyword(null,"mode","mode",654403691).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.screens.mode_selection_spec.state));
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
});})(_STAR_parent_description_STAR__orig_val__21640_21770,_STAR_parent_description_STAR__temp_val__21641_21771,description__20276__auto___21769))
,false),speclj.components.new_characteristic.call(null,"sets mode to 4 if user selects CvC",((function (_STAR_parent_description_STAR__orig_val__21640_21770,_STAR_parent_description_STAR__temp_val__21641_21771,description__20276__auto___21769){
return (function (){
c3kit.wire.spec_helper.click_BANG_.call(null,"#mode-selection button:nth-of-type(4)");

var expected__20413__auto__ = (4);
var actual__20414__auto__ = new cljs.core.Keyword(null,"mode","mode",654403691).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.screens.mode_selection_spec.state));
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
});})(_STAR_parent_description_STAR__orig_val__21640_21770,_STAR_parent_description_STAR__temp_val__21641_21771,description__20276__auto___21769))
,false),speclj.components.new_characteristic.call(null,"sets screen to board-selection upon user selection",((function (_STAR_parent_description_STAR__orig_val__21640_21770,_STAR_parent_description_STAR__temp_val__21641_21771,description__20276__auto___21769){
return (function (){
var seq__21747 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#mode-selection button:nth-of-type(1)","#mode-selection button:nth-of-type(2)","#mode-selection button:nth-of-type(3)","#mode-selection button:nth-of-type(4)"], null));
var chunk__21748 = null;
var count__21749 = (0);
var i__21750 = (0);
while(true){
if((i__21750 < count__21749)){
var item = cljs.core._nth.call(null,chunk__21748,i__21750);
c3kit.wire.spec_helper.click_BANG_.call(null,item);

var expected__20413__auto___21796 = new cljs.core.Keyword(null,"board-selection","board-selection",276837898);
var actual__20414__auto___21797 = new cljs.core.Keyword(null,"current-screen","current-screen",-1454713691).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.screens.mode_selection_spec.state));
if(cljs.core._EQ_.call(null,expected__20413__auto___21796,actual__20414__auto___21797)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__20413__auto___21796;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__20381__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__20381__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__20414__auto___21797;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__20381__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__20381__auto__);
}
})()," (using =)"].join('')));
}


var G__21798 = seq__21747;
var G__21799 = chunk__21748;
var G__21800 = count__21749;
var G__21801 = (i__21750 + (1));
seq__21747 = G__21798;
chunk__21748 = G__21799;
count__21749 = G__21800;
i__21750 = G__21801;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__21747);
if(temp__5804__auto__){
var seq__21747__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21747__$1)){
var c__5525__auto__ = cljs.core.chunk_first.call(null,seq__21747__$1);
var G__21802 = cljs.core.chunk_rest.call(null,seq__21747__$1);
var G__21803 = c__5525__auto__;
var G__21804 = cljs.core.count.call(null,c__5525__auto__);
var G__21805 = (0);
seq__21747 = G__21802;
chunk__21748 = G__21803;
count__21749 = G__21804;
i__21750 = G__21805;
continue;
} else {
var item = cljs.core.first.call(null,seq__21747__$1);
c3kit.wire.spec_helper.click_BANG_.call(null,item);

var expected__20413__auto___21806 = new cljs.core.Keyword(null,"board-selection","board-selection",276837898);
var actual__20414__auto___21807 = new cljs.core.Keyword(null,"current-screen","current-screen",-1454713691).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.screens.mode_selection_spec.state));
if(cljs.core._EQ_.call(null,expected__20413__auto___21806,actual__20414__auto___21807)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__20413__auto___21806;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__20381__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__20381__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__20414__auto___21807;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__20381__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__20381__auto__);
}
})()," (using =)"].join('')));
}


var G__21810 = cljs.core.next.call(null,seq__21747__$1);
var G__21811 = null;
var G__21812 = (0);
var G__21813 = (0);
seq__21747 = G__21810;
chunk__21748 = G__21811;
count__21749 = G__21812;
i__21750 = G__21813;
continue;
}
} else {
return null;
}
}
break;
}
});})(_STAR_parent_description_STAR__orig_val__21640_21770,_STAR_parent_description_STAR__temp_val__21641_21771,description__20276__auto___21769))
,false),speclj.components.new_characteristic.call(null,"sets human? to false if mode 3",((function (_STAR_parent_description_STAR__orig_val__21640_21770,_STAR_parent_description_STAR__temp_val__21641_21771,description__20276__auto___21769){
return (function (){
c3kit.wire.spec_helper.click_BANG_.call(null,"#mode-selection button:nth-of-type(3)");

var expected__20413__auto__ = false;
var actual__20414__auto__ = new cljs.core.Keyword(null,"human?","human?",-2017219054).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.screens.mode_selection_spec.state));
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
});})(_STAR_parent_description_STAR__orig_val__21640_21770,_STAR_parent_description_STAR__temp_val__21641_21771,description__20276__auto___21769))
,false),speclj.components.new_characteristic.call(null,"sets human? to false if mode 4",((function (_STAR_parent_description_STAR__orig_val__21640_21770,_STAR_parent_description_STAR__temp_val__21641_21771,description__20276__auto___21769){
return (function (){
c3kit.wire.spec_helper.click_BANG_.call(null,"#mode-selection button:nth-of-type(4)");

var expected__20413__auto__ = false;
var actual__20414__auto__ = new cljs.core.Keyword(null,"human?","human?",-2017219054).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.screens.mode_selection_spec.state));
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
});})(_STAR_parent_description_STAR__orig_val__21640_21770,_STAR_parent_description_STAR__temp_val__21641_21771,description__20276__auto___21769))
,false),speclj.components.new_characteristic.call(null,"sets human? to true if mode 1",((function (_STAR_parent_description_STAR__orig_val__21640_21770,_STAR_parent_description_STAR__temp_val__21641_21771,description__20276__auto___21769){
return (function (){
c3kit.wire.spec_helper.click_BANG_.call(null,"#mode-selection button:nth-of-type(1)");

var expected__20413__auto__ = true;
var actual__20414__auto__ = new cljs.core.Keyword(null,"human?","human?",-2017219054).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.screens.mode_selection_spec.state));
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
});})(_STAR_parent_description_STAR__orig_val__21640_21770,_STAR_parent_description_STAR__temp_val__21641_21771,description__20276__auto___21769))
,false),speclj.components.new_characteristic.call(null,"sets human? to true if mode 2",((function (_STAR_parent_description_STAR__orig_val__21640_21770,_STAR_parent_description_STAR__temp_val__21641_21771,description__20276__auto___21769){
return (function (){
c3kit.wire.spec_helper.click_BANG_.call(null,"#mode-selection button:nth-of-type(2)");

var expected__20413__auto__ = true;
var actual__20414__auto__ = new cljs.core.Keyword(null,"human?","human?",-2017219054).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.screens.mode_selection_spec.state));
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
});})(_STAR_parent_description_STAR__orig_val__21640_21770,_STAR_parent_description_STAR__temp_val__21641_21771,description__20276__auto___21769))
,false)],null)));
var chunk__21645_21775 = null;
var count__21646_21776 = (0);
var i__21647_21777 = (0);
while(true){
if((i__21647_21777 < count__21646_21776)){
var component__20277__auto___21820 = cljs.core._nth.call(null,chunk__21645_21775,i__21647_21777);
speclj.components.install.call(null,component__20277__auto___21820,description__20276__auto___21769);


var G__21821 = seq__21644_21774;
var G__21822 = chunk__21645_21775;
var G__21823 = count__21646_21776;
var G__21824 = (i__21647_21777 + (1));
seq__21644_21774 = G__21821;
chunk__21645_21775 = G__21822;
count__21646_21776 = G__21823;
i__21647_21777 = G__21824;
continue;
} else {
var temp__5804__auto___21825 = cljs.core.seq.call(null,seq__21644_21774);
if(temp__5804__auto___21825){
var seq__21644_21826__$1 = temp__5804__auto___21825;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21644_21826__$1)){
var c__5525__auto___21827 = cljs.core.chunk_first.call(null,seq__21644_21826__$1);
var G__21828 = cljs.core.chunk_rest.call(null,seq__21644_21826__$1);
var G__21829 = c__5525__auto___21827;
var G__21830 = cljs.core.count.call(null,c__5525__auto___21827);
var G__21831 = (0);
seq__21644_21774 = G__21828;
chunk__21645_21775 = G__21829;
count__21646_21776 = G__21830;
i__21647_21777 = G__21831;
continue;
} else {
var component__20277__auto___21832 = cljs.core.first.call(null,seq__21644_21826__$1);
speclj.components.install.call(null,component__20277__auto___21832,description__20276__auto___21769);


var G__21833 = cljs.core.next.call(null,seq__21644_21826__$1);
var G__21834 = null;
var G__21835 = (0);
var G__21836 = (0);
seq__21644_21774 = G__21833;
chunk__21645_21775 = G__21834;
count__21646_21776 = G__21835;
i__21647_21777 = G__21836;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__21640_21770);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__20276__auto___21769);
}


//# sourceMappingURL=mode_selection_spec.js.map
