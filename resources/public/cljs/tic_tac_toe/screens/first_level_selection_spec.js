// Compiled by ClojureScript 1.11.132 {:optimizations :none}
goog.provide('tic_tac_toe.screens.first_level_selection_spec');
goog.require('cljs.core');
goog.require('speclj.core');
goog.require('c3kit.wire.spec_helper');
goog.require('tic_tac_toe.print_utils');
goog.require('tic_tac_toe.render_screen');
goog.require('tic_tac_toe.screens.first_level_selection');
var description__11247__auto___14668 = speclj.components.new_description.call(null,"first level selection screen",false,"tic-tac-toe.screens.first-level-selection-spec");
var _STAR_parent_description_STAR__orig_val__14555_14669 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__14556_14670 = description__11247__auto___14668;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__14556_14670);

try{var seq__14558_14671 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[c3kit.wire.spec_helper.with_root_dom.call(null),speclj.components.new_characteristic.call(null,"renders first level selection screen",((function (_STAR_parent_description_STAR__orig_val__14555_14669,_STAR_parent_description_STAR__temp_val__14556_14670,description__11247__auto___14668){
return (function (){
c3kit.wire.spec_helper.render.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tic_tac_toe.render_screen.render_screen,cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"current-screen","current-screen",-1454713691),new cljs.core.Keyword(null,"first-level-selection","first-level-selection",-675329011)], null))], null));

var value__11747__auto___14683 = "#first-level-selection";
var node__11748__auto___14684 = c3kit.wire.spec_helper.select.call(null,value__11747__auto___14683);
if(cljs.core.truth_(node__11748__auto___14684)){
} else {
throw (new speclj.platform.SpecFailure(["Expected selector to find node: ",(function (){var temp__5806__auto__ = value__11747__auto___14683;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11352__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11352__auto__);
}
})()].join('')));
}

var expected__11384__auto___14692 = cljs.core.nth.call(null,tic_tac_toe.print_utils.level_prompt,(2));
var actual__11385__auto___14693 = c3kit.wire.spec_helper.text.call(null,"#first-level-selection h2");
if(cljs.core._EQ_.call(null,expected__11384__auto___14692,actual__11385__auto___14693)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__11384__auto___14692;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11352__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11352__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__11385__auto___14693;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11352__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11352__auto__);
}
})()," (using =)"].join('')));
}

var expected__11384__auto___14707 = cljs.core.nth.call(null,tic_tac_toe.print_utils.level_prompt,(3));
var actual__11385__auto___14708 = c3kit.wire.spec_helper.text.call(null,"#first-level-selection button:nth-of-type(1)");
if(cljs.core._EQ_.call(null,expected__11384__auto___14707,actual__11385__auto___14708)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__11384__auto___14707;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11352__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11352__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__11385__auto___14708;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11352__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11352__auto__);
}
})()," (using =)"].join('')));
}

var expected__11384__auto___14711 = cljs.core.nth.call(null,tic_tac_toe.print_utils.level_prompt,(4));
var actual__11385__auto___14712 = c3kit.wire.spec_helper.text.call(null,"#first-level-selection button:nth-of-type(2)");
if(cljs.core._EQ_.call(null,expected__11384__auto___14711,actual__11385__auto___14712)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__11384__auto___14711;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11352__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11352__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__11385__auto___14712;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11352__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11352__auto__);
}
})()," (using =)"].join('')));
}

var expected__11384__auto__ = cljs.core.nth.call(null,tic_tac_toe.print_utils.level_prompt,(6));
var actual__11385__auto__ = c3kit.wire.spec_helper.text.call(null,"#first-level-selection button:nth-of-type(3)");
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
});})(_STAR_parent_description_STAR__orig_val__14555_14669,_STAR_parent_description_STAR__temp_val__14556_14670,description__11247__auto___14668))
,false),speclj.components.new_characteristic.call(null,"specifies player X if mode is 4",((function (_STAR_parent_description_STAR__orig_val__14555_14669,_STAR_parent_description_STAR__temp_val__14556_14670,description__11247__auto___14668){
return (function (){
c3kit.wire.spec_helper.render.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tic_tac_toe.render_screen.render_screen,cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"current-screen","current-screen",-1454713691),new cljs.core.Keyword(null,"first-level-selection","first-level-selection",-675329011),new cljs.core.Keyword(null,"mode","mode",654403691),(4)], null))], null));

var expected__11384__auto__ = cljs.core.first.call(null,tic_tac_toe.print_utils.level_prompt);
var actual__11385__auto__ = c3kit.wire.spec_helper.text.call(null,"#first-level-selection h2");
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
});})(_STAR_parent_description_STAR__orig_val__14555_14669,_STAR_parent_description_STAR__temp_val__14556_14670,description__11247__auto___14668))
,false)],null)));
var chunk__14559_14672 = null;
var count__14560_14673 = (0);
var i__14561_14674 = (0);
while(true){
if((i__14561_14674 < count__14560_14673)){
var component__11248__auto___14716 = cljs.core._nth.call(null,chunk__14559_14672,i__14561_14674);
speclj.components.install.call(null,component__11248__auto___14716,description__11247__auto___14668);


var G__14721 = seq__14558_14671;
var G__14722 = chunk__14559_14672;
var G__14723 = count__14560_14673;
var G__14724 = (i__14561_14674 + (1));
seq__14558_14671 = G__14721;
chunk__14559_14672 = G__14722;
count__14560_14673 = G__14723;
i__14561_14674 = G__14724;
continue;
} else {
var temp__5804__auto___14725 = cljs.core.seq.call(null,seq__14558_14671);
if(temp__5804__auto___14725){
var seq__14558_14727__$1 = temp__5804__auto___14725;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14558_14727__$1)){
var c__5525__auto___14729 = cljs.core.chunk_first.call(null,seq__14558_14727__$1);
var G__14731 = cljs.core.chunk_rest.call(null,seq__14558_14727__$1);
var G__14732 = c__5525__auto___14729;
var G__14733 = cljs.core.count.call(null,c__5525__auto___14729);
var G__14734 = (0);
seq__14558_14671 = G__14731;
chunk__14559_14672 = G__14732;
count__14560_14673 = G__14733;
i__14561_14674 = G__14734;
continue;
} else {
var component__11248__auto___14739 = cljs.core.first.call(null,seq__14558_14727__$1);
speclj.components.install.call(null,component__11248__auto___14739,description__11247__auto___14668);


var G__14741 = cljs.core.next.call(null,seq__14558_14727__$1);
var G__14742 = null;
var G__14743 = (0);
var G__14744 = (0);
seq__14558_14671 = G__14741;
chunk__14559_14672 = G__14742;
count__14560_14673 = G__14743;
i__14561_14674 = G__14744;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__14555_14669);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__11247__auto___14668);
}


//# sourceMappingURL=first_level_selection_spec.js.map
