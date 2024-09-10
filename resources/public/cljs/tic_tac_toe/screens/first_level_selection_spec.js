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
var description__19707__auto___20763 = speclj.components.new_description.call(null,"first level selection screen",false,"tic-tac-toe.screens.first-level-selection-spec");
var _STAR_parent_description_STAR__orig_val__20511_20764 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__20512_20765 = description__19707__auto___20763;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__20512_20765);

try{var seq__20513_20766 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,9,(5),cljs.core.PersistentVector.EMPTY_NODE,[c3kit.wire.spec_helper.with_root_dom.call(null),speclj.components.new_before.call(null,((function (_STAR_parent_description_STAR__orig_val__20511_20764,_STAR_parent_description_STAR__temp_val__20512_20765,description__19707__auto___20763){
return (function (){
cljs.core.reset_BANG_.call(null,tic_tac_toe.screens.first_level_selection_spec.state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"current-screen","current-screen",-1454713691),new cljs.core.Keyword(null,"first-level-selection","first-level-selection",-675329011)], null));

return c3kit.wire.spec_helper.render.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tic_tac_toe.render_screen.render_screen,tic_tac_toe.screens.first_level_selection_spec.state], null));
});})(_STAR_parent_description_STAR__orig_val__20511_20764,_STAR_parent_description_STAR__temp_val__20512_20765,description__19707__auto___20763))
),speclj.components.new_characteristic.call(null,"renders first level selection screen",((function (_STAR_parent_description_STAR__orig_val__20511_20764,_STAR_parent_description_STAR__temp_val__20512_20765,description__19707__auto___20763){
return (function (){
var value__20454__auto___20770 = "#first-level-selection";
var node__20455__auto___20771 = c3kit.wire.spec_helper.select.call(null,value__20454__auto___20770);
if(cljs.core.truth_(node__20455__auto___20771)){
} else {
throw (new speclj.platform.SpecFailure(["Expected selector to find node: ",(function (){var temp__5806__auto__ = value__20454__auto___20770;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__19812__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__19812__auto__);
}
})()].join('')));
}

var expected__19844__auto___20772 = cljs.core.nth.call(null,tic_tac_toe.print_utils.level_prompt,(2));
var actual__19845__auto___20773 = c3kit.wire.spec_helper.text.call(null,"#first-level-selection h2");
if(cljs.core._EQ_.call(null,expected__19844__auto___20772,actual__19845__auto___20773)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__19844__auto___20772;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__19812__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__19812__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__19845__auto___20773;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__19812__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__19812__auto__);
}
})()," (using =)"].join('')));
}

var expected__19844__auto___20774 = cljs.core.nth.call(null,tic_tac_toe.print_utils.level_prompt,(3));
var actual__19845__auto___20775 = c3kit.wire.spec_helper.text.call(null,"#first-level-selection button:nth-of-type(1)");
if(cljs.core._EQ_.call(null,expected__19844__auto___20774,actual__19845__auto___20775)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__19844__auto___20774;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__19812__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__19812__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__19845__auto___20775;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__19812__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__19812__auto__);
}
})()," (using =)"].join('')));
}

var expected__19844__auto___20776 = cljs.core.nth.call(null,tic_tac_toe.print_utils.level_prompt,(4));
var actual__19845__auto___20777 = c3kit.wire.spec_helper.text.call(null,"#first-level-selection button:nth-of-type(2)");
if(cljs.core._EQ_.call(null,expected__19844__auto___20776,actual__19845__auto___20777)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__19844__auto___20776;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__19812__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__19812__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__19845__auto___20777;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__19812__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__19812__auto__);
}
})()," (using =)"].join('')));
}

var expected__19844__auto__ = cljs.core.nth.call(null,tic_tac_toe.print_utils.level_prompt,(6));
var actual__19845__auto__ = c3kit.wire.spec_helper.text.call(null,"#first-level-selection button:nth-of-type(3)");
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
});})(_STAR_parent_description_STAR__orig_val__20511_20764,_STAR_parent_description_STAR__temp_val__20512_20765,description__19707__auto___20763))
,false),speclj.components.new_characteristic.call(null,"specifies player X if mode is 4",((function (_STAR_parent_description_STAR__orig_val__20511_20764,_STAR_parent_description_STAR__temp_val__20512_20765,description__19707__auto___20763){
return (function (){
cljs.core.swap_BANG_.call(null,tic_tac_toe.screens.first_level_selection_spec.state,cljs.core.assoc,new cljs.core.Keyword(null,"mode","mode",654403691),(4));

c3kit.wire.spec_helper.render.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tic_tac_toe.render_screen.render_screen,tic_tac_toe.screens.first_level_selection_spec.state], null));

var expected__19844__auto__ = cljs.core.first.call(null,tic_tac_toe.print_utils.level_prompt);
var actual__19845__auto__ = c3kit.wire.spec_helper.text.call(null,"#first-level-selection h2");
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
});})(_STAR_parent_description_STAR__orig_val__20511_20764,_STAR_parent_description_STAR__temp_val__20512_20765,description__19707__auto___20763))
,false),speclj.components.new_characteristic.call(null,"sets :first-ai-level to 1 when Easy is clicked",((function (_STAR_parent_description_STAR__orig_val__20511_20764,_STAR_parent_description_STAR__temp_val__20512_20765,description__19707__auto___20763){
return (function (){
c3kit.wire.spec_helper.click_BANG_.call(null,"#first-level-selection button:nth-of-type(1)");

var expected__19844__auto__ = (1);
var actual__19845__auto__ = new cljs.core.Keyword(null,"first-ai-level","first-ai-level",1004633644).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.screens.first_level_selection_spec.state));
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
});})(_STAR_parent_description_STAR__orig_val__20511_20764,_STAR_parent_description_STAR__temp_val__20512_20765,description__19707__auto___20763))
,false),speclj.components.new_characteristic.call(null,"sets :first-ai-level to 2 when Medium is clicked",((function (_STAR_parent_description_STAR__orig_val__20511_20764,_STAR_parent_description_STAR__temp_val__20512_20765,description__19707__auto___20763){
return (function (){
c3kit.wire.spec_helper.click_BANG_.call(null,"#first-level-selection button:nth-of-type(2)");

var expected__19844__auto__ = (2);
var actual__19845__auto__ = new cljs.core.Keyword(null,"first-ai-level","first-ai-level",1004633644).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.screens.first_level_selection_spec.state));
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
});})(_STAR_parent_description_STAR__orig_val__20511_20764,_STAR_parent_description_STAR__temp_val__20512_20765,description__19707__auto___20763))
,false),speclj.components.new_characteristic.call(null,"sets :first-ai-level to 3 when Unbeatable is clicked",((function (_STAR_parent_description_STAR__orig_val__20511_20764,_STAR_parent_description_STAR__temp_val__20512_20765,description__19707__auto___20763){
return (function (){
c3kit.wire.spec_helper.click_BANG_.call(null,"#first-level-selection button:nth-of-type(3)");

var expected__19844__auto__ = (3);
var actual__19845__auto__ = new cljs.core.Keyword(null,"first-ai-level","first-ai-level",1004633644).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.screens.first_level_selection_spec.state));
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
});})(_STAR_parent_description_STAR__orig_val__20511_20764,_STAR_parent_description_STAR__temp_val__20512_20765,description__19707__auto___20763))
,false),speclj.components.new_characteristic.call(null,"sets screen to play upon user selection if not mode 4",((function (_STAR_parent_description_STAR__orig_val__20511_20764,_STAR_parent_description_STAR__temp_val__20512_20765,description__19707__auto___20763){
return (function (){
var seq__20652 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#first-level-selection button:nth-of-type(1)","#first-level-selection button:nth-of-type(2)","#first-level-selection button:nth-of-type(3)"], null));
var chunk__20653 = null;
var count__20654 = (0);
var i__20655 = (0);
while(true){
if((i__20655 < count__20654)){
var item = cljs.core._nth.call(null,chunk__20653,i__20655);
c3kit.wire.spec_helper.click_BANG_.call(null,item);

var expected__19844__auto___20786 = new cljs.core.Keyword(null,"play","play",-580418022);
var actual__19845__auto___20787 = new cljs.core.Keyword(null,"current-screen","current-screen",-1454713691).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.screens.first_level_selection_spec.state));
if(cljs.core._EQ_.call(null,expected__19844__auto___20786,actual__19845__auto___20787)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__19844__auto___20786;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__19812__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__19812__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__19845__auto___20787;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__19812__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__19812__auto__);
}
})()," (using =)"].join('')));
}


var G__20788 = seq__20652;
var G__20789 = chunk__20653;
var G__20790 = count__20654;
var G__20791 = (i__20655 + (1));
seq__20652 = G__20788;
chunk__20653 = G__20789;
count__20654 = G__20790;
i__20655 = G__20791;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__20652);
if(temp__5804__auto__){
var seq__20652__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20652__$1)){
var c__5525__auto__ = cljs.core.chunk_first.call(null,seq__20652__$1);
var G__20792 = cljs.core.chunk_rest.call(null,seq__20652__$1);
var G__20793 = c__5525__auto__;
var G__20794 = cljs.core.count.call(null,c__5525__auto__);
var G__20795 = (0);
seq__20652 = G__20792;
chunk__20653 = G__20793;
count__20654 = G__20794;
i__20655 = G__20795;
continue;
} else {
var item = cljs.core.first.call(null,seq__20652__$1);
c3kit.wire.spec_helper.click_BANG_.call(null,item);

var expected__19844__auto___20796 = new cljs.core.Keyword(null,"play","play",-580418022);
var actual__19845__auto___20797 = new cljs.core.Keyword(null,"current-screen","current-screen",-1454713691).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.screens.first_level_selection_spec.state));
if(cljs.core._EQ_.call(null,expected__19844__auto___20796,actual__19845__auto___20797)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__19844__auto___20796;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__19812__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__19812__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__19845__auto___20797;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__19812__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__19812__auto__);
}
})()," (using =)"].join('')));
}


var G__20798 = cljs.core.next.call(null,seq__20652__$1);
var G__20799 = null;
var G__20800 = (0);
var G__20801 = (0);
seq__20652 = G__20798;
chunk__20653 = G__20799;
count__20654 = G__20800;
i__20655 = G__20801;
continue;
}
} else {
return null;
}
}
break;
}
});})(_STAR_parent_description_STAR__orig_val__20511_20764,_STAR_parent_description_STAR__temp_val__20512_20765,description__19707__auto___20763))
,false),speclj.components.new_characteristic.call(null,"sets screen to second-level-selection upon user selection and mode is 4",((function (_STAR_parent_description_STAR__orig_val__20511_20764,_STAR_parent_description_STAR__temp_val__20512_20765,description__19707__auto___20763){
return (function (){
cljs.core.swap_BANG_.call(null,tic_tac_toe.screens.first_level_selection_spec.state,cljs.core.assoc,new cljs.core.Keyword(null,"mode","mode",654403691),(4));

var seq__20718 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#first-level-selection button:nth-of-type(1)","#first-level-selection button:nth-of-type(2)","#first-level-selection button:nth-of-type(3)"], null));
var chunk__20719 = null;
var count__20720 = (0);
var i__20721 = (0);
while(true){
if((i__20721 < count__20720)){
var item = cljs.core._nth.call(null,chunk__20719,i__20721);
c3kit.wire.spec_helper.click_BANG_.call(null,item);

var expected__19844__auto___20802 = new cljs.core.Keyword(null,"second-level-selection","second-level-selection",199785260);
var actual__19845__auto___20803 = new cljs.core.Keyword(null,"current-screen","current-screen",-1454713691).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.screens.first_level_selection_spec.state));
if(cljs.core._EQ_.call(null,expected__19844__auto___20802,actual__19845__auto___20803)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__19844__auto___20802;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__19812__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__19812__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__19845__auto___20803;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__19812__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__19812__auto__);
}
})()," (using =)"].join('')));
}


var G__20804 = seq__20718;
var G__20805 = chunk__20719;
var G__20806 = count__20720;
var G__20807 = (i__20721 + (1));
seq__20718 = G__20804;
chunk__20719 = G__20805;
count__20720 = G__20806;
i__20721 = G__20807;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__20718);
if(temp__5804__auto__){
var seq__20718__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20718__$1)){
var c__5525__auto__ = cljs.core.chunk_first.call(null,seq__20718__$1);
var G__20808 = cljs.core.chunk_rest.call(null,seq__20718__$1);
var G__20809 = c__5525__auto__;
var G__20810 = cljs.core.count.call(null,c__5525__auto__);
var G__20811 = (0);
seq__20718 = G__20808;
chunk__20719 = G__20809;
count__20720 = G__20810;
i__20721 = G__20811;
continue;
} else {
var item = cljs.core.first.call(null,seq__20718__$1);
c3kit.wire.spec_helper.click_BANG_.call(null,item);

var expected__19844__auto___20812 = new cljs.core.Keyword(null,"second-level-selection","second-level-selection",199785260);
var actual__19845__auto___20813 = new cljs.core.Keyword(null,"current-screen","current-screen",-1454713691).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.screens.first_level_selection_spec.state));
if(cljs.core._EQ_.call(null,expected__19844__auto___20812,actual__19845__auto___20813)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__19844__auto___20812;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__19812__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__19812__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__19845__auto___20813;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__19812__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__19812__auto__);
}
})()," (using =)"].join('')));
}


var G__20814 = cljs.core.next.call(null,seq__20718__$1);
var G__20815 = null;
var G__20816 = (0);
var G__20817 = (0);
seq__20718 = G__20814;
chunk__20719 = G__20815;
count__20720 = G__20816;
i__20721 = G__20817;
continue;
}
} else {
return null;
}
}
break;
}
});})(_STAR_parent_description_STAR__orig_val__20511_20764,_STAR_parent_description_STAR__temp_val__20512_20765,description__19707__auto___20763))
,false)],null)));
var chunk__20514_20767 = null;
var count__20515_20768 = (0);
var i__20516_20769 = (0);
while(true){
if((i__20516_20769 < count__20515_20768)){
var component__19708__auto___20818 = cljs.core._nth.call(null,chunk__20514_20767,i__20516_20769);
speclj.components.install.call(null,component__19708__auto___20818,description__19707__auto___20763);


var G__20819 = seq__20513_20766;
var G__20820 = chunk__20514_20767;
var G__20821 = count__20515_20768;
var G__20822 = (i__20516_20769 + (1));
seq__20513_20766 = G__20819;
chunk__20514_20767 = G__20820;
count__20515_20768 = G__20821;
i__20516_20769 = G__20822;
continue;
} else {
var temp__5804__auto___20823 = cljs.core.seq.call(null,seq__20513_20766);
if(temp__5804__auto___20823){
var seq__20513_20824__$1 = temp__5804__auto___20823;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20513_20824__$1)){
var c__5525__auto___20825 = cljs.core.chunk_first.call(null,seq__20513_20824__$1);
var G__20826 = cljs.core.chunk_rest.call(null,seq__20513_20824__$1);
var G__20827 = c__5525__auto___20825;
var G__20828 = cljs.core.count.call(null,c__5525__auto___20825);
var G__20829 = (0);
seq__20513_20766 = G__20826;
chunk__20514_20767 = G__20827;
count__20515_20768 = G__20828;
i__20516_20769 = G__20829;
continue;
} else {
var component__19708__auto___20830 = cljs.core.first.call(null,seq__20513_20824__$1);
speclj.components.install.call(null,component__19708__auto___20830,description__19707__auto___20763);


var G__20831 = cljs.core.next.call(null,seq__20513_20824__$1);
var G__20832 = null;
var G__20833 = (0);
var G__20834 = (0);
seq__20513_20766 = G__20831;
chunk__20514_20767 = G__20832;
count__20515_20768 = G__20833;
i__20516_20769 = G__20834;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__20511_20764);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__19707__auto___20763);
}


//# sourceMappingURL=first_level_selection_spec.js.map
