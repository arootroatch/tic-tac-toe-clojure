// Compiled by ClojureScript 1.11.132 {:optimizations :none}
goog.provide('tic_tac_toe.screens.board_selection_spec');
goog.require('cljs.core');
goog.require('c3kit.wire.spec_helper');
goog.require('speclj.core');
goog.require('tic_tac_toe.print_utils');
goog.require('tic_tac_toe.render_screen');
goog.require('tic_tac_toe.screens.board_selection');
var description__11247__auto___14655 = speclj.components.new_description.call(null,"board selection screen",false,"tic-tac-toe.screens.board-selection-spec");
var _STAR_parent_description_STAR__orig_val__14579_14656 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__14580_14657 = description__11247__auto___14655;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__14580_14657);

try{var seq__14583_14658 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[c3kit.wire.spec_helper.with_root_dom.call(null),speclj.components.new_before.call(null,((function (_STAR_parent_description_STAR__orig_val__14579_14656,_STAR_parent_description_STAR__temp_val__14580_14657,description__11247__auto___14655){
return (function (){
return c3kit.wire.spec_helper.render.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tic_tac_toe.render_screen.render_screen,cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"current-screen","current-screen",-1454713691),new cljs.core.Keyword(null,"board-selection","board-selection",276837898)], null))], null));
});})(_STAR_parent_description_STAR__orig_val__14579_14656,_STAR_parent_description_STAR__temp_val__14580_14657,description__11247__auto___14655))
),speclj.components.new_characteristic.call(null,"renders board selection screen",((function (_STAR_parent_description_STAR__orig_val__14579_14656,_STAR_parent_description_STAR__temp_val__14580_14657,description__11247__auto___14655){
return (function (){
var value__11747__auto___14662 = "#board-selection";
var node__11748__auto___14663 = c3kit.wire.spec_helper.select.call(null,value__11747__auto___14662);
if(cljs.core.truth_(node__11748__auto___14663)){
} else {
throw (new speclj.platform.SpecFailure(["Expected selector to find node: ",(function (){var temp__5806__auto__ = value__11747__auto___14662;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11352__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11352__auto__);
}
})()].join('')));
}

var expected__11384__auto___14664 = cljs.core.first.call(null,tic_tac_toe.print_utils.board_prompt);
var actual__11385__auto___14665 = c3kit.wire.spec_helper.text.call(null,"#board-selection h2");
if(cljs.core._EQ_.call(null,expected__11384__auto___14664,actual__11385__auto___14665)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__11384__auto___14664;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11352__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11352__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__11385__auto___14665;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11352__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11352__auto__);
}
})()," (using =)"].join('')));
}

var expected__11384__auto___14666 = cljs.core.nth.call(null,tic_tac_toe.print_utils.board_prompt,(1));
var actual__11385__auto___14667 = c3kit.wire.spec_helper.text.call(null,"#board-selection button:nth-of-type(1)");
if(cljs.core._EQ_.call(null,expected__11384__auto___14666,actual__11385__auto___14667)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__11384__auto___14666;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11352__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11352__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__11385__auto___14667;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11352__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11352__auto__);
}
})()," (using =)"].join('')));
}

var expected__11384__auto__ = cljs.core.nth.call(null,tic_tac_toe.print_utils.board_prompt,(2));
var actual__11385__auto__ = c3kit.wire.spec_helper.text.call(null,"#board-selection button:nth-of-type(2)");
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
});})(_STAR_parent_description_STAR__orig_val__14579_14656,_STAR_parent_description_STAR__temp_val__14580_14657,description__11247__auto___14655))
,false)],null)));
var chunk__14584_14659 = null;
var count__14585_14660 = (0);
var i__14586_14661 = (0);
while(true){
if((i__14586_14661 < count__14585_14660)){
var component__11248__auto___14682 = cljs.core._nth.call(null,chunk__14584_14659,i__14586_14661);
speclj.components.install.call(null,component__11248__auto___14682,description__11247__auto___14655);


var G__14685 = seq__14583_14658;
var G__14686 = chunk__14584_14659;
var G__14687 = count__14585_14660;
var G__14688 = (i__14586_14661 + (1));
seq__14583_14658 = G__14685;
chunk__14584_14659 = G__14686;
count__14585_14660 = G__14687;
i__14586_14661 = G__14688;
continue;
} else {
var temp__5804__auto___14689 = cljs.core.seq.call(null,seq__14583_14658);
if(temp__5804__auto___14689){
var seq__14583_14690__$1 = temp__5804__auto___14689;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14583_14690__$1)){
var c__5525__auto___14691 = cljs.core.chunk_first.call(null,seq__14583_14690__$1);
var G__14694 = cljs.core.chunk_rest.call(null,seq__14583_14690__$1);
var G__14696 = c__5525__auto___14691;
var G__14697 = cljs.core.count.call(null,c__5525__auto___14691);
var G__14698 = (0);
seq__14583_14658 = G__14694;
chunk__14584_14659 = G__14696;
count__14585_14660 = G__14697;
i__14586_14661 = G__14698;
continue;
} else {
var component__11248__auto___14700 = cljs.core.first.call(null,seq__14583_14690__$1);
speclj.components.install.call(null,component__11248__auto___14700,description__11247__auto___14655);


var G__14701 = cljs.core.next.call(null,seq__14583_14690__$1);
var G__14702 = null;
var G__14703 = (0);
var G__14704 = (0);
seq__14583_14658 = G__14701;
chunk__14584_14659 = G__14702;
count__14585_14660 = G__14703;
i__14586_14661 = G__14704;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__14579_14656);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__11247__auto___14655);
}


//# sourceMappingURL=board_selection_spec.js.map
