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
var description__11245__auto___15612 = speclj.components.new_description.call(null,"board selection screen",false,"tic-tac-toe.screens.board-selection-spec");
var _STAR_parent_description_STAR__orig_val__15551_15613 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__15552_15614 = description__11245__auto___15612;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__15552_15614);

try{var seq__15557_15615 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,7,(5),cljs.core.PersistentVector.EMPTY_NODE,[c3kit.wire.spec_helper.with_root_dom.call(null),speclj.components.new_before.call(null,((function (_STAR_parent_description_STAR__orig_val__15551_15613,_STAR_parent_description_STAR__temp_val__15552_15614,description__11245__auto___15612){
return (function (){
cljs.core.reset_BANG_.call(null,tic_tac_toe.screens.board_selection_spec.state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"current-screen","current-screen",-1454713691),new cljs.core.Keyword(null,"board-selection","board-selection",276837898)], null));

return c3kit.wire.spec_helper.render.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tic_tac_toe.render_screen.render_screen,tic_tac_toe.screens.board_selection_spec.state], null));
});})(_STAR_parent_description_STAR__orig_val__15551_15613,_STAR_parent_description_STAR__temp_val__15552_15614,description__11245__auto___15612))
),speclj.components.new_characteristic.call(null,"renders board selection screen",((function (_STAR_parent_description_STAR__orig_val__15551_15613,_STAR_parent_description_STAR__temp_val__15552_15614,description__11245__auto___15612){
return (function (){
var value__11745__auto___15629 = "#board-selection";
var node__11746__auto___15630 = c3kit.wire.spec_helper.select.call(null,value__11745__auto___15629);
if(cljs.core.truth_(node__11746__auto___15630)){
} else {
throw (new speclj.platform.SpecFailure(["Expected selector to find node: ",(function (){var temp__5806__auto__ = value__11745__auto___15629;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11350__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11350__auto__);
}
})()].join('')));
}

var expected__11382__auto___15637 = cljs.core.first.call(null,tic_tac_toe.print_utils.board_prompt);
var actual__11383__auto___15638 = c3kit.wire.spec_helper.text.call(null,"#board-selection h2");
if(cljs.core._EQ_.call(null,expected__11382__auto___15637,actual__11383__auto___15638)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__11382__auto___15637;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11350__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11350__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__11383__auto___15638;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11350__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11350__auto__);
}
})()," (using =)"].join('')));
}

var expected__11382__auto___15644 = cljs.core.nth.call(null,tic_tac_toe.print_utils.board_prompt,(1));
var actual__11383__auto___15645 = c3kit.wire.spec_helper.text.call(null,"#board-selection button:nth-of-type(1)");
if(cljs.core._EQ_.call(null,expected__11382__auto___15644,actual__11383__auto___15645)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__11382__auto___15644;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11350__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11350__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__11383__auto___15645;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11350__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11350__auto__);
}
})()," (using =)"].join('')));
}

var expected__11382__auto__ = cljs.core.nth.call(null,tic_tac_toe.print_utils.board_prompt,(2));
var actual__11383__auto__ = c3kit.wire.spec_helper.text.call(null,"#board-selection button:nth-of-type(2)");
if(cljs.core._EQ_.call(null,expected__11382__auto__,actual__11383__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__11382__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11350__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11350__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__11383__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11350__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11350__auto__);
}
})()," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__15551_15613,_STAR_parent_description_STAR__temp_val__15552_15614,description__11245__auto___15612))
,false),speclj.components.new_characteristic.call(null,"sets 3x3 board upon user selection",((function (_STAR_parent_description_STAR__orig_val__15551_15613,_STAR_parent_description_STAR__temp_val__15552_15614,description__11245__auto___15612){
return (function (){
c3kit.wire.spec_helper.click_BANG_.call(null,"#board-selection button:nth-of-type(1)");

var expected__11382__auto__ = tic_tac_toe.board_options.initial_3x3_board;
var actual__11383__auto__ = new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.screens.board_selection_spec.state));
if(cljs.core._EQ_.call(null,expected__11382__auto__,actual__11383__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__11382__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11350__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11350__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__11383__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11350__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11350__auto__);
}
})()," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__15551_15613,_STAR_parent_description_STAR__temp_val__15552_15614,description__11245__auto___15612))
,false),speclj.components.new_characteristic.call(null,"sets 4x4 board upon user selection",((function (_STAR_parent_description_STAR__orig_val__15551_15613,_STAR_parent_description_STAR__temp_val__15552_15614,description__11245__auto___15612){
return (function (){
c3kit.wire.spec_helper.click_BANG_.call(null,"#board-selection button:nth-of-type(2)");

var expected__11382__auto__ = tic_tac_toe.board_options.initial_4x4_board;
var actual__11383__auto__ = new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.screens.board_selection_spec.state));
if(cljs.core._EQ_.call(null,expected__11382__auto__,actual__11383__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__11382__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11350__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11350__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__11383__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11350__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11350__auto__);
}
})()," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__15551_15613,_STAR_parent_description_STAR__temp_val__15552_15614,description__11245__auto___15612))
,false),speclj.components.new_characteristic.call(null,"sets screen to first-level-selection upon user selection and not mode 1",((function (_STAR_parent_description_STAR__orig_val__15551_15613,_STAR_parent_description_STAR__temp_val__15552_15614,description__11245__auto___15612){
return (function (){
var seq__15577 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#board-selection button:nth-of-type(1)","#board-selection button:nth-of-type(2)"], null));
var chunk__15578 = null;
var count__15579 = (0);
var i__15580 = (0);
while(true){
if((i__15580 < count__15579)){
var item = cljs.core._nth.call(null,chunk__15578,i__15580);
c3kit.wire.spec_helper.click_BANG_.call(null,item);

var expected__11382__auto___15646 = new cljs.core.Keyword(null,"first-level-selection","first-level-selection",-675329011);
var actual__11383__auto___15647 = new cljs.core.Keyword(null,"current-screen","current-screen",-1454713691).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.screens.board_selection_spec.state));
if(cljs.core._EQ_.call(null,expected__11382__auto___15646,actual__11383__auto___15647)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__11382__auto___15646;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11350__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11350__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__11383__auto___15647;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11350__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11350__auto__);
}
})()," (using =)"].join('')));
}


var G__15648 = seq__15577;
var G__15649 = chunk__15578;
var G__15650 = count__15579;
var G__15651 = (i__15580 + (1));
seq__15577 = G__15648;
chunk__15578 = G__15649;
count__15579 = G__15650;
i__15580 = G__15651;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__15577);
if(temp__5804__auto__){
var seq__15577__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15577__$1)){
var c__5525__auto__ = cljs.core.chunk_first.call(null,seq__15577__$1);
var G__15652 = cljs.core.chunk_rest.call(null,seq__15577__$1);
var G__15653 = c__5525__auto__;
var G__15654 = cljs.core.count.call(null,c__5525__auto__);
var G__15655 = (0);
seq__15577 = G__15652;
chunk__15578 = G__15653;
count__15579 = G__15654;
i__15580 = G__15655;
continue;
} else {
var item = cljs.core.first.call(null,seq__15577__$1);
c3kit.wire.spec_helper.click_BANG_.call(null,item);

var expected__11382__auto___15656 = new cljs.core.Keyword(null,"first-level-selection","first-level-selection",-675329011);
var actual__11383__auto___15657 = new cljs.core.Keyword(null,"current-screen","current-screen",-1454713691).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.screens.board_selection_spec.state));
if(cljs.core._EQ_.call(null,expected__11382__auto___15656,actual__11383__auto___15657)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__11382__auto___15656;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11350__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11350__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__11383__auto___15657;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11350__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11350__auto__);
}
})()," (using =)"].join('')));
}


var G__15658 = cljs.core.next.call(null,seq__15577__$1);
var G__15659 = null;
var G__15660 = (0);
var G__15661 = (0);
seq__15577 = G__15658;
chunk__15578 = G__15659;
count__15579 = G__15660;
i__15580 = G__15661;
continue;
}
} else {
return null;
}
}
break;
}
});})(_STAR_parent_description_STAR__orig_val__15551_15613,_STAR_parent_description_STAR__temp_val__15552_15614,description__11245__auto___15612))
,false),speclj.components.new_characteristic.call(null,"sets screen to play upon user selection and mode 1",((function (_STAR_parent_description_STAR__orig_val__15551_15613,_STAR_parent_description_STAR__temp_val__15552_15614,description__11245__auto___15612){
return (function (){
cljs.core.swap_BANG_.call(null,tic_tac_toe.screens.board_selection_spec.state,cljs.core.assoc,new cljs.core.Keyword(null,"mode","mode",654403691),(1));

var seq__15588 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#board-selection button:nth-of-type(1)","#board-selection button:nth-of-type(2)"], null));
var chunk__15589 = null;
var count__15590 = (0);
var i__15591 = (0);
while(true){
if((i__15591 < count__15590)){
var item = cljs.core._nth.call(null,chunk__15589,i__15591);
c3kit.wire.spec_helper.click_BANG_.call(null,item);

var expected__11382__auto___15662 = new cljs.core.Keyword(null,"play","play",-580418022);
var actual__11383__auto___15663 = new cljs.core.Keyword(null,"current-screen","current-screen",-1454713691).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.screens.board_selection_spec.state));
if(cljs.core._EQ_.call(null,expected__11382__auto___15662,actual__11383__auto___15663)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__11382__auto___15662;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11350__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11350__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__11383__auto___15663;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11350__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11350__auto__);
}
})()," (using =)"].join('')));
}


var G__15664 = seq__15588;
var G__15665 = chunk__15589;
var G__15666 = count__15590;
var G__15667 = (i__15591 + (1));
seq__15588 = G__15664;
chunk__15589 = G__15665;
count__15590 = G__15666;
i__15591 = G__15667;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__15588);
if(temp__5804__auto__){
var seq__15588__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15588__$1)){
var c__5525__auto__ = cljs.core.chunk_first.call(null,seq__15588__$1);
var G__15668 = cljs.core.chunk_rest.call(null,seq__15588__$1);
var G__15669 = c__5525__auto__;
var G__15670 = cljs.core.count.call(null,c__5525__auto__);
var G__15671 = (0);
seq__15588 = G__15668;
chunk__15589 = G__15669;
count__15590 = G__15670;
i__15591 = G__15671;
continue;
} else {
var item = cljs.core.first.call(null,seq__15588__$1);
c3kit.wire.spec_helper.click_BANG_.call(null,item);

var expected__11382__auto___15672 = new cljs.core.Keyword(null,"play","play",-580418022);
var actual__11383__auto___15673 = new cljs.core.Keyword(null,"current-screen","current-screen",-1454713691).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.screens.board_selection_spec.state));
if(cljs.core._EQ_.call(null,expected__11382__auto___15672,actual__11383__auto___15673)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__11382__auto___15672;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11350__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11350__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__11383__auto___15673;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11350__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11350__auto__);
}
})()," (using =)"].join('')));
}


var G__15674 = cljs.core.next.call(null,seq__15588__$1);
var G__15675 = null;
var G__15676 = (0);
var G__15677 = (0);
seq__15588 = G__15674;
chunk__15589 = G__15675;
count__15590 = G__15676;
i__15591 = G__15677;
continue;
}
} else {
return null;
}
}
break;
}
});})(_STAR_parent_description_STAR__orig_val__15551_15613,_STAR_parent_description_STAR__temp_val__15552_15614,description__11245__auto___15612))
,false)],null)));
var chunk__15558_15616 = null;
var count__15559_15617 = (0);
var i__15560_15618 = (0);
while(true){
if((i__15560_15618 < count__15559_15617)){
var component__11246__auto___15678 = cljs.core._nth.call(null,chunk__15558_15616,i__15560_15618);
speclj.components.install.call(null,component__11246__auto___15678,description__11245__auto___15612);


var G__15679 = seq__15557_15615;
var G__15680 = chunk__15558_15616;
var G__15681 = count__15559_15617;
var G__15682 = (i__15560_15618 + (1));
seq__15557_15615 = G__15679;
chunk__15558_15616 = G__15680;
count__15559_15617 = G__15681;
i__15560_15618 = G__15682;
continue;
} else {
var temp__5804__auto___15683 = cljs.core.seq.call(null,seq__15557_15615);
if(temp__5804__auto___15683){
var seq__15557_15684__$1 = temp__5804__auto___15683;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15557_15684__$1)){
var c__5525__auto___15685 = cljs.core.chunk_first.call(null,seq__15557_15684__$1);
var G__15686 = cljs.core.chunk_rest.call(null,seq__15557_15684__$1);
var G__15687 = c__5525__auto___15685;
var G__15688 = cljs.core.count.call(null,c__5525__auto___15685);
var G__15689 = (0);
seq__15557_15615 = G__15686;
chunk__15558_15616 = G__15687;
count__15559_15617 = G__15688;
i__15560_15618 = G__15689;
continue;
} else {
var component__11246__auto___15690 = cljs.core.first.call(null,seq__15557_15684__$1);
speclj.components.install.call(null,component__11246__auto___15690,description__11245__auto___15612);


var G__15691 = cljs.core.next.call(null,seq__15557_15684__$1);
var G__15692 = null;
var G__15693 = (0);
var G__15694 = (0);
seq__15557_15615 = G__15691;
chunk__15558_15616 = G__15692;
count__15559_15617 = G__15693;
i__15560_15618 = G__15694;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__15551_15613);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__11245__auto___15612);
}


//# sourceMappingURL=board_selection_spec.js.map
