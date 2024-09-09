// Compiled by ClojureScript 1.11.132 {:optimizations :none}
goog.provide('tic_tac_toe.screens.mode_selection_spec');
goog.require('cljs.core');
goog.require('speclj.core');
goog.require('c3kit.wire.spec_helper');
goog.require('tic_tac_toe.print_utils');
goog.require('tic_tac_toe.render_screen');
goog.require('tic_tac_toe.screens.mode_selection');
var description__11247__auto___14601 = speclj.components.new_description.call(null,"mode selection screen",false,"tic-tac-toe.screens.mode-selection-spec");
var _STAR_parent_description_STAR__orig_val__14563_14605 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__14564_14606 = description__11247__auto___14601;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__14564_14606);

try{var seq__14567_14607 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[c3kit.wire.spec_helper.with_root_dom.call(null),speclj.components.new_before.call(null,((function (_STAR_parent_description_STAR__orig_val__14563_14605,_STAR_parent_description_STAR__temp_val__14564_14606,description__11247__auto___14601){
return (function (){
return c3kit.wire.spec_helper.render.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tic_tac_toe.render_screen.render_screen,cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"current-screen","current-screen",-1454713691),new cljs.core.Keyword(null,"mode-selection","mode-selection",986239762)], null))], null));
});})(_STAR_parent_description_STAR__orig_val__14563_14605,_STAR_parent_description_STAR__temp_val__14564_14606,description__11247__auto___14601))
),speclj.components.new_characteristic.call(null,"renders mode selection screen",((function (_STAR_parent_description_STAR__orig_val__14563_14605,_STAR_parent_description_STAR__temp_val__14564_14606,description__11247__auto___14601){
return (function (){
var value__11747__auto___14611 = "#mode-selection";
var node__11748__auto___14612 = c3kit.wire.spec_helper.select.call(null,value__11747__auto___14611);
if(cljs.core.truth_(node__11748__auto___14612)){
} else {
throw (new speclj.platform.SpecFailure(["Expected selector to find node: ",(function (){var temp__5806__auto__ = value__11747__auto___14611;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11352__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11352__auto__);
}
})()].join('')));
}

var expected__11384__auto___14613 = cljs.core.first.call(null,tic_tac_toe.print_utils.mode_prompt);
var actual__11385__auto___14614 = c3kit.wire.spec_helper.text.call(null,"#mode-selection h2");
if(cljs.core._EQ_.call(null,expected__11384__auto___14613,actual__11385__auto___14614)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__11384__auto___14613;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11352__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11352__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__11385__auto___14614;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11352__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11352__auto__);
}
})()," (using =)"].join('')));
}

var expected__11384__auto___14615 = cljs.core.nth.call(null,tic_tac_toe.print_utils.mode_prompt,(1));
var actual__11385__auto___14616 = c3kit.wire.spec_helper.text.call(null,"#mode-selection button:nth-of-type(1)");
if(cljs.core._EQ_.call(null,expected__11384__auto___14615,actual__11385__auto___14616)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__11384__auto___14615;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11352__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11352__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__11385__auto___14616;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11352__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11352__auto__);
}
})()," (using =)"].join('')));
}

var expected__11384__auto___14623 = cljs.core.nth.call(null,tic_tac_toe.print_utils.mode_prompt,(2));
var actual__11385__auto___14624 = c3kit.wire.spec_helper.text.call(null,"#mode-selection button:nth-of-type(2)");
if(cljs.core._EQ_.call(null,expected__11384__auto___14623,actual__11385__auto___14624)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__11384__auto___14623;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11352__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11352__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__11385__auto___14624;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11352__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11352__auto__);
}
})()," (using =)"].join('')));
}

var expected__11384__auto___14632 = cljs.core.nth.call(null,tic_tac_toe.print_utils.mode_prompt,(3));
var actual__11385__auto___14633 = c3kit.wire.spec_helper.text.call(null,"#mode-selection button:nth-of-type(3)");
if(cljs.core._EQ_.call(null,expected__11384__auto___14632,actual__11385__auto___14633)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__11384__auto___14632;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11352__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11352__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__11385__auto___14633;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11352__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11352__auto__);
}
})()," (using =)"].join('')));
}

var expected__11384__auto__ = cljs.core.nth.call(null,tic_tac_toe.print_utils.mode_prompt,(4));
var actual__11385__auto__ = c3kit.wire.spec_helper.text.call(null,"#mode-selection button:nth-of-type(4)");
if(cljs.core._EQ_.call(null,expected__11384__auto__,actual__11385__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__11384__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11352__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11352__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__11385__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11352__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11352__auto__);
}
})()," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__14563_14605,_STAR_parent_description_STAR__temp_val__14564_14606,description__11247__auto___14601))
,false)],null)));
var chunk__14568_14608 = null;
var count__14569_14609 = (0);
var i__14570_14610 = (0);
while(true){
if((i__14570_14610 < count__14569_14609)){
var component__11248__auto___14638 = cljs.core._nth.call(null,chunk__14568_14608,i__14570_14610);
speclj.components.install.call(null,component__11248__auto___14638,description__11247__auto___14601);


var G__14639 = seq__14567_14607;
var G__14640 = chunk__14568_14608;
var G__14641 = count__14569_14609;
var G__14642 = (i__14570_14610 + (1));
seq__14567_14607 = G__14639;
chunk__14568_14608 = G__14640;
count__14569_14609 = G__14641;
i__14570_14610 = G__14642;
continue;
} else {
var temp__5804__auto___14643 = cljs.core.seq.call(null,seq__14567_14607);
if(temp__5804__auto___14643){
var seq__14567_14644__$1 = temp__5804__auto___14643;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14567_14644__$1)){
var c__5525__auto___14645 = cljs.core.chunk_first.call(null,seq__14567_14644__$1);
var G__14646 = cljs.core.chunk_rest.call(null,seq__14567_14644__$1);
var G__14647 = c__5525__auto___14645;
var G__14648 = cljs.core.count.call(null,c__5525__auto___14645);
var G__14649 = (0);
seq__14567_14607 = G__14646;
chunk__14568_14608 = G__14647;
count__14569_14609 = G__14648;
i__14570_14610 = G__14649;
continue;
} else {
var component__11248__auto___14650 = cljs.core.first.call(null,seq__14567_14644__$1);
speclj.components.install.call(null,component__11248__auto___14650,description__11247__auto___14601);


var G__14651 = cljs.core.next.call(null,seq__14567_14644__$1);
var G__14652 = null;
var G__14653 = (0);
var G__14654 = (0);
seq__14567_14607 = G__14651;
chunk__14568_14608 = G__14652;
count__14569_14609 = G__14653;
i__14570_14610 = G__14654;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__14563_14605);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__11247__auto___14601);
}


//# sourceMappingURL=mode_selection_spec.js.map
