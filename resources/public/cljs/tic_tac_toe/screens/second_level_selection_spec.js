// Compiled by ClojureScript 1.11.132 {:optimizations :none}
goog.provide('tic_tac_toe.screens.second_level_selection_spec');
goog.require('cljs.core');
goog.require('speclj.core');
goog.require('c3kit.wire.spec_helper');
goog.require('tic_tac_toe.print_utils');
goog.require('tic_tac_toe.render_screen');
goog.require('tic_tac_toe.screens.second_level_selection');
var description__11247__auto___14675 = speclj.components.new_description.call(null,"second level selection screen",false,"tic-tac-toe.screens.second-level-selection-spec");
var _STAR_parent_description_STAR__orig_val__14571_14676 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__14572_14677 = description__11247__auto___14675;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__14572_14677);

try{var seq__14575_14678 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[c3kit.wire.spec_helper.with_root_dom.call(null),speclj.components.new_before.call(null,((function (_STAR_parent_description_STAR__orig_val__14571_14676,_STAR_parent_description_STAR__temp_val__14572_14677,description__11247__auto___14675){
return (function (){
return c3kit.wire.spec_helper.render.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tic_tac_toe.render_screen.render_screen,cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"current-screen","current-screen",-1454713691),new cljs.core.Keyword(null,"second-level-selection","second-level-selection",199785260)], null))], null));
});})(_STAR_parent_description_STAR__orig_val__14571_14676,_STAR_parent_description_STAR__temp_val__14572_14677,description__11247__auto___14675))
),speclj.components.new_characteristic.call(null,"renders second level selection screen",((function (_STAR_parent_description_STAR__orig_val__14571_14676,_STAR_parent_description_STAR__temp_val__14572_14677,description__11247__auto___14675){
return (function (){
var value__11747__auto___14695 = "#second-level-selection";
var node__11748__auto___14699 = c3kit.wire.spec_helper.select.call(null,value__11747__auto___14695);
if(cljs.core.truth_(node__11748__auto___14699)){
} else {
throw (new speclj.platform.SpecFailure(["Expected selector to find node: ",(function (){var temp__5806__auto__ = value__11747__auto___14695;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11352__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11352__auto__);
}
})()].join('')));
}

var expected__11384__auto___14705 = cljs.core.nth.call(null,tic_tac_toe.print_utils.level_prompt,(1));
var actual__11385__auto___14706 = c3kit.wire.spec_helper.text.call(null,"#second-level-selection h2");
if(cljs.core._EQ_.call(null,expected__11384__auto___14705,actual__11385__auto___14706)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__11384__auto___14705;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11352__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11352__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__11385__auto___14706;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11352__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11352__auto__);
}
})()," (using =)"].join('')));
}

var expected__11384__auto___14709 = cljs.core.nth.call(null,tic_tac_toe.print_utils.level_prompt,(3));
var actual__11385__auto___14710 = c3kit.wire.spec_helper.text.call(null,"#second-level-selection button:nth-of-type(1)");
if(cljs.core._EQ_.call(null,expected__11384__auto___14709,actual__11385__auto___14710)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__11384__auto___14709;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11352__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11352__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__11385__auto___14710;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11352__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11352__auto__);
}
})()," (using =)"].join('')));
}

var expected__11384__auto___14713 = cljs.core.nth.call(null,tic_tac_toe.print_utils.level_prompt,(4));
var actual__11385__auto___14714 = c3kit.wire.spec_helper.text.call(null,"#second-level-selection button:nth-of-type(2)");
if(cljs.core._EQ_.call(null,expected__11384__auto___14713,actual__11385__auto___14714)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__11384__auto___14713;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11352__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11352__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__11385__auto___14714;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11352__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11352__auto__);
}
})()," (using =)"].join('')));
}

var expected__11384__auto__ = cljs.core.nth.call(null,tic_tac_toe.print_utils.level_prompt,(6));
var actual__11385__auto__ = c3kit.wire.spec_helper.text.call(null,"#second-level-selection button:nth-of-type(3)");
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
});})(_STAR_parent_description_STAR__orig_val__14571_14676,_STAR_parent_description_STAR__temp_val__14572_14677,description__11247__auto___14675))
,false)],null)));
var chunk__14576_14679 = null;
var count__14577_14680 = (0);
var i__14578_14681 = (0);
while(true){
if((i__14578_14681 < count__14577_14680)){
var component__11248__auto___14715 = cljs.core._nth.call(null,chunk__14576_14679,i__14578_14681);
speclj.components.install.call(null,component__11248__auto___14715,description__11247__auto___14675);


var G__14717 = seq__14575_14678;
var G__14718 = chunk__14576_14679;
var G__14719 = count__14577_14680;
var G__14720 = (i__14578_14681 + (1));
seq__14575_14678 = G__14717;
chunk__14576_14679 = G__14718;
count__14577_14680 = G__14719;
i__14578_14681 = G__14720;
continue;
} else {
var temp__5804__auto___14726 = cljs.core.seq.call(null,seq__14575_14678);
if(temp__5804__auto___14726){
var seq__14575_14728__$1 = temp__5804__auto___14726;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14575_14728__$1)){
var c__5525__auto___14730 = cljs.core.chunk_first.call(null,seq__14575_14728__$1);
var G__14735 = cljs.core.chunk_rest.call(null,seq__14575_14728__$1);
var G__14736 = c__5525__auto___14730;
var G__14737 = cljs.core.count.call(null,c__5525__auto___14730);
var G__14738 = (0);
seq__14575_14678 = G__14735;
chunk__14576_14679 = G__14736;
count__14577_14680 = G__14737;
i__14578_14681 = G__14738;
continue;
} else {
var component__11248__auto___14740 = cljs.core.first.call(null,seq__14575_14728__$1);
speclj.components.install.call(null,component__11248__auto___14740,description__11247__auto___14675);


var G__14745 = cljs.core.next.call(null,seq__14575_14728__$1);
var G__14746 = null;
var G__14747 = (0);
var G__14748 = (0);
seq__14575_14678 = G__14745;
chunk__14576_14679 = G__14746;
count__14577_14680 = G__14747;
i__14578_14681 = G__14748;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__14571_14676);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__11247__auto___14675);
}


//# sourceMappingURL=second_level_selection_spec.js.map
