// Compiled by ClojureScript 1.11.132 {:optimizations :none}
goog.provide('tic_tac_toe.screens.board_selection_spec');
goog.require('cljs.core');
goog.require('c3kit.wire.spec_helper');
goog.require('speclj.core');
goog.require('tic_tac_toe.print_utils');
goog.require('tic_tac_toe.render_screen');
goog.require('tic_tac_toe.screens.board_selection');
goog.require('tic_tac_toe.board_options');
if((typeof tic_tac_toe !== 'undefined') && (typeof tic_tac_toe.screens !== 'undefined') && (typeof tic_tac_toe.screens.board_selection_spec !== 'undefined') && (typeof tic_tac_toe.screens.board_selection_spec.state !== 'undefined')){
} else {
tic_tac_toe.screens.board_selection_spec.state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"current-screen","current-screen",-1454713691),new cljs.core.Keyword(null,"board-selection","board-selection",276837898)], null));
}
var description__19707__auto___20656 = speclj.components.new_description.call(null,"board selection screen",false,"tic-tac-toe.screens.board-selection-spec");
var _STAR_parent_description_STAR__orig_val__20537_20657 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__20538_20658 = description__19707__auto___20656;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__20538_20658);

try{var seq__20539_20659 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,7,(5),cljs.core.PersistentVector.EMPTY_NODE,[c3kit.wire.spec_helper.with_root_dom.call(null),speclj.components.new_before.call(null,((function (_STAR_parent_description_STAR__orig_val__20537_20657,_STAR_parent_description_STAR__temp_val__20538_20658,description__19707__auto___20656){
return (function (){
cljs.core.reset_BANG_.call(null,tic_tac_toe.screens.board_selection_spec.state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"current-screen","current-screen",-1454713691),new cljs.core.Keyword(null,"board-selection","board-selection",276837898)], null));

return c3kit.wire.spec_helper.render.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tic_tac_toe.render_screen.render_screen,tic_tac_toe.screens.board_selection_spec.state], null));
});})(_STAR_parent_description_STAR__orig_val__20537_20657,_STAR_parent_description_STAR__temp_val__20538_20658,description__19707__auto___20656))
),speclj.components.new_characteristic.call(null,"renders board selection screen",((function (_STAR_parent_description_STAR__orig_val__20537_20657,_STAR_parent_description_STAR__temp_val__20538_20658,description__19707__auto___20656){
return (function (){
var value__20454__auto___20663 = "#board-selection";
var node__20455__auto___20664 = c3kit.wire.spec_helper.select.call(null,value__20454__auto___20663);
if(cljs.core.truth_(node__20455__auto___20664)){
} else {
throw (new speclj.platform.SpecFailure(["Expected selector to find node: ",(function (){var temp__5806__auto__ = value__20454__auto___20663;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__19812__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__19812__auto__);
}
})()].join('')));
}

var expected__19844__auto___20667 = cljs.core.first.call(null,tic_tac_toe.print_utils.board_prompt);
var actual__19845__auto___20668 = c3kit.wire.spec_helper.text.call(null,"#board-selection h2");
if(cljs.core._EQ_.call(null,expected__19844__auto___20667,actual__19845__auto___20668)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__19844__auto___20667;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__19812__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__19812__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__19845__auto___20668;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__19812__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__19812__auto__);
}
})()," (using =)"].join('')));
}

var expected__19844__auto___20673 = cljs.core.nth.call(null,tic_tac_toe.print_utils.board_prompt,(1));
var actual__19845__auto___20674 = c3kit.wire.spec_helper.text.call(null,"#board-selection button:nth-of-type(1)");
if(cljs.core._EQ_.call(null,expected__19844__auto___20673,actual__19845__auto___20674)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__19844__auto___20673;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__19812__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__19812__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__19845__auto___20674;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__19812__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__19812__auto__);
}
})()," (using =)"].join('')));
}

var expected__19844__auto__ = cljs.core.nth.call(null,tic_tac_toe.print_utils.board_prompt,(2));
var actual__19845__auto__ = c3kit.wire.spec_helper.text.call(null,"#board-selection button:nth-of-type(2)");
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
});})(_STAR_parent_description_STAR__orig_val__20537_20657,_STAR_parent_description_STAR__temp_val__20538_20658,description__19707__auto___20656))
,false),speclj.components.new_characteristic.call(null,"sets 3x3 board upon user selection",((function (_STAR_parent_description_STAR__orig_val__20537_20657,_STAR_parent_description_STAR__temp_val__20538_20658,description__19707__auto___20656){
return (function (){
c3kit.wire.spec_helper.click_BANG_.call(null,"#board-selection button:nth-of-type(1)");

var expected__19844__auto__ = tic_tac_toe.board_options.initial_3x3_board;
var actual__19845__auto__ = new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.screens.board_selection_spec.state));
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
});})(_STAR_parent_description_STAR__orig_val__20537_20657,_STAR_parent_description_STAR__temp_val__20538_20658,description__19707__auto___20656))
,false),speclj.components.new_characteristic.call(null,"sets 4x4 board upon user selection",((function (_STAR_parent_description_STAR__orig_val__20537_20657,_STAR_parent_description_STAR__temp_val__20538_20658,description__19707__auto___20656){
return (function (){
c3kit.wire.spec_helper.click_BANG_.call(null,"#board-selection button:nth-of-type(2)");

var expected__19844__auto__ = tic_tac_toe.board_options.initial_4x4_board;
var actual__19845__auto__ = new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.screens.board_selection_spec.state));
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
});})(_STAR_parent_description_STAR__orig_val__20537_20657,_STAR_parent_description_STAR__temp_val__20538_20658,description__19707__auto___20656))
,false),speclj.components.new_characteristic.call(null,"sets screen to first-level-selection upon user selection and not mode 1",((function (_STAR_parent_description_STAR__orig_val__20537_20657,_STAR_parent_description_STAR__temp_val__20538_20658,description__19707__auto___20656){
return (function (){
var seq__20617 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#board-selection button:nth-of-type(1)","#board-selection button:nth-of-type(2)"], null));
var chunk__20618 = null;
var count__20619 = (0);
var i__20620 = (0);
while(true){
if((i__20620 < count__20619)){
var item = cljs.core._nth.call(null,chunk__20618,i__20620);
c3kit.wire.spec_helper.click_BANG_.call(null,item);

var expected__19844__auto___20706 = new cljs.core.Keyword(null,"first-level-selection","first-level-selection",-675329011);
var actual__19845__auto___20707 = new cljs.core.Keyword(null,"current-screen","current-screen",-1454713691).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.screens.board_selection_spec.state));
if(cljs.core._EQ_.call(null,expected__19844__auto___20706,actual__19845__auto___20707)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__19844__auto___20706;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__19812__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__19812__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__19845__auto___20707;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__19812__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__19812__auto__);
}
})()," (using =)"].join('')));
}


var G__20708 = seq__20617;
var G__20709 = chunk__20618;
var G__20710 = count__20619;
var G__20711 = (i__20620 + (1));
seq__20617 = G__20708;
chunk__20618 = G__20709;
count__20619 = G__20710;
i__20620 = G__20711;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__20617);
if(temp__5804__auto__){
var seq__20617__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20617__$1)){
var c__5525__auto__ = cljs.core.chunk_first.call(null,seq__20617__$1);
var G__20712 = cljs.core.chunk_rest.call(null,seq__20617__$1);
var G__20713 = c__5525__auto__;
var G__20714 = cljs.core.count.call(null,c__5525__auto__);
var G__20715 = (0);
seq__20617 = G__20712;
chunk__20618 = G__20713;
count__20619 = G__20714;
i__20620 = G__20715;
continue;
} else {
var item = cljs.core.first.call(null,seq__20617__$1);
c3kit.wire.spec_helper.click_BANG_.call(null,item);

var expected__19844__auto___20716 = new cljs.core.Keyword(null,"first-level-selection","first-level-selection",-675329011);
var actual__19845__auto___20717 = new cljs.core.Keyword(null,"current-screen","current-screen",-1454713691).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.screens.board_selection_spec.state));
if(cljs.core._EQ_.call(null,expected__19844__auto___20716,actual__19845__auto___20717)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__19844__auto___20716;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__19812__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__19812__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__19845__auto___20717;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__19812__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__19812__auto__);
}
})()," (using =)"].join('')));
}


var G__20722 = cljs.core.next.call(null,seq__20617__$1);
var G__20723 = null;
var G__20724 = (0);
var G__20725 = (0);
seq__20617 = G__20722;
chunk__20618 = G__20723;
count__20619 = G__20724;
i__20620 = G__20725;
continue;
}
} else {
return null;
}
}
break;
}
});})(_STAR_parent_description_STAR__orig_val__20537_20657,_STAR_parent_description_STAR__temp_val__20538_20658,description__19707__auto___20656))
,false),speclj.components.new_characteristic.call(null,"sets screen to play upon user selection and mode 1",((function (_STAR_parent_description_STAR__orig_val__20537_20657,_STAR_parent_description_STAR__temp_val__20538_20658,description__19707__auto___20656){
return (function (){
cljs.core.swap_BANG_.call(null,tic_tac_toe.screens.board_selection_spec.state,cljs.core.assoc,new cljs.core.Keyword(null,"mode","mode",654403691),(1));

var seq__20629 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#board-selection button:nth-of-type(1)","#board-selection button:nth-of-type(2)"], null));
var chunk__20630 = null;
var count__20631 = (0);
var i__20632 = (0);
while(true){
if((i__20632 < count__20631)){
var item = cljs.core._nth.call(null,chunk__20630,i__20632);
c3kit.wire.spec_helper.click_BANG_.call(null,item);

var expected__19844__auto___20726 = new cljs.core.Keyword(null,"play","play",-580418022);
var actual__19845__auto___20727 = new cljs.core.Keyword(null,"current-screen","current-screen",-1454713691).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.screens.board_selection_spec.state));
if(cljs.core._EQ_.call(null,expected__19844__auto___20726,actual__19845__auto___20727)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__19844__auto___20726;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__19812__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__19812__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__19845__auto___20727;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__19812__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__19812__auto__);
}
})()," (using =)"].join('')));
}


var G__20728 = seq__20629;
var G__20729 = chunk__20630;
var G__20730 = count__20631;
var G__20731 = (i__20632 + (1));
seq__20629 = G__20728;
chunk__20630 = G__20729;
count__20631 = G__20730;
i__20632 = G__20731;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__20629);
if(temp__5804__auto__){
var seq__20629__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20629__$1)){
var c__5525__auto__ = cljs.core.chunk_first.call(null,seq__20629__$1);
var G__20732 = cljs.core.chunk_rest.call(null,seq__20629__$1);
var G__20733 = c__5525__auto__;
var G__20734 = cljs.core.count.call(null,c__5525__auto__);
var G__20735 = (0);
seq__20629 = G__20732;
chunk__20630 = G__20733;
count__20631 = G__20734;
i__20632 = G__20735;
continue;
} else {
var item = cljs.core.first.call(null,seq__20629__$1);
c3kit.wire.spec_helper.click_BANG_.call(null,item);

var expected__19844__auto___20736 = new cljs.core.Keyword(null,"play","play",-580418022);
var actual__19845__auto___20737 = new cljs.core.Keyword(null,"current-screen","current-screen",-1454713691).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.screens.board_selection_spec.state));
if(cljs.core._EQ_.call(null,expected__19844__auto___20736,actual__19845__auto___20737)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__19844__auto___20736;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__19812__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__19812__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__19845__auto___20737;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__19812__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__19812__auto__);
}
})()," (using =)"].join('')));
}


var G__20738 = cljs.core.next.call(null,seq__20629__$1);
var G__20739 = null;
var G__20740 = (0);
var G__20741 = (0);
seq__20629 = G__20738;
chunk__20630 = G__20739;
count__20631 = G__20740;
i__20632 = G__20741;
continue;
}
} else {
return null;
}
}
break;
}
});})(_STAR_parent_description_STAR__orig_val__20537_20657,_STAR_parent_description_STAR__temp_val__20538_20658,description__19707__auto___20656))
,false)],null)));
var chunk__20540_20660 = null;
var count__20541_20661 = (0);
var i__20542_20662 = (0);
while(true){
if((i__20542_20662 < count__20541_20661)){
var component__19708__auto___20742 = cljs.core._nth.call(null,chunk__20540_20660,i__20542_20662);
speclj.components.install.call(null,component__19708__auto___20742,description__19707__auto___20656);


var G__20743 = seq__20539_20659;
var G__20744 = chunk__20540_20660;
var G__20745 = count__20541_20661;
var G__20746 = (i__20542_20662 + (1));
seq__20539_20659 = G__20743;
chunk__20540_20660 = G__20744;
count__20541_20661 = G__20745;
i__20542_20662 = G__20746;
continue;
} else {
var temp__5804__auto___20747 = cljs.core.seq.call(null,seq__20539_20659);
if(temp__5804__auto___20747){
var seq__20539_20748__$1 = temp__5804__auto___20747;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20539_20748__$1)){
var c__5525__auto___20749 = cljs.core.chunk_first.call(null,seq__20539_20748__$1);
var G__20750 = cljs.core.chunk_rest.call(null,seq__20539_20748__$1);
var G__20751 = c__5525__auto___20749;
var G__20752 = cljs.core.count.call(null,c__5525__auto___20749);
var G__20753 = (0);
seq__20539_20659 = G__20750;
chunk__20540_20660 = G__20751;
count__20541_20661 = G__20752;
i__20542_20662 = G__20753;
continue;
} else {
var component__19708__auto___20754 = cljs.core.first.call(null,seq__20539_20748__$1);
speclj.components.install.call(null,component__19708__auto___20754,description__19707__auto___20656);


var G__20755 = cljs.core.next.call(null,seq__20539_20748__$1);
var G__20756 = null;
var G__20757 = (0);
var G__20758 = (0);
seq__20539_20659 = G__20755;
chunk__20540_20660 = G__20756;
count__20541_20661 = G__20757;
i__20542_20662 = G__20758;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__20537_20657);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__19707__auto___20656);
}


//# sourceMappingURL=board_selection_spec.js.map
