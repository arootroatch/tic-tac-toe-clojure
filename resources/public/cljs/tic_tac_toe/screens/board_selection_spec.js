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
var description__20276__auto___21510 = speclj.components.new_description.call(null,"board selection screen",false,"tic-tac-toe.screens.board-selection-spec");
var _STAR_parent_description_STAR__orig_val__21379_21511 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__21380_21512 = description__20276__auto___21510;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__21380_21512);

try{var seq__21383_21513 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,7,(5),cljs.core.PersistentVector.EMPTY_NODE,[c3kit.wire.spec_helper.with_root_dom.call(null),speclj.components.new_before.call(null,((function (_STAR_parent_description_STAR__orig_val__21379_21511,_STAR_parent_description_STAR__temp_val__21380_21512,description__20276__auto___21510){
return (function (){
cljs.core.reset_BANG_.call(null,tic_tac_toe.screens.board_selection_spec.state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"current-screen","current-screen",-1454713691),new cljs.core.Keyword(null,"board-selection","board-selection",276837898)], null));

return c3kit.wire.spec_helper.render.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tic_tac_toe.render_screen.render_screen,tic_tac_toe.screens.board_selection_spec.state], null));
});})(_STAR_parent_description_STAR__orig_val__21379_21511,_STAR_parent_description_STAR__temp_val__21380_21512,description__20276__auto___21510))
),speclj.components.new_characteristic.call(null,"renders board selection screen",((function (_STAR_parent_description_STAR__orig_val__21379_21511,_STAR_parent_description_STAR__temp_val__21380_21512,description__20276__auto___21510){
return (function (){
var value__21320__auto___21527 = "#board-selection";
var node__21321__auto___21528 = c3kit.wire.spec_helper.select.call(null,value__21320__auto___21527);
if(cljs.core.truth_(node__21321__auto___21528)){
} else {
throw (new speclj.platform.SpecFailure(["Expected selector to find node: ",(function (){var temp__5806__auto__ = value__21320__auto___21527;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__20381__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__20381__auto__);
}
})()].join('')));
}

var expected__20413__auto___21529 = cljs.core.first.call(null,tic_tac_toe.print_utils.board_prompt);
var actual__20414__auto___21530 = c3kit.wire.spec_helper.text.call(null,"#board-selection h2");
if(cljs.core._EQ_.call(null,expected__20413__auto___21529,actual__20414__auto___21530)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__20413__auto___21529;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__20381__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__20381__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__20414__auto___21530;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__20381__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__20381__auto__);
}
})()," (using =)"].join('')));
}

var expected__20413__auto___21541 = cljs.core.nth.call(null,tic_tac_toe.print_utils.board_prompt,(1));
var actual__20414__auto___21542 = c3kit.wire.spec_helper.text.call(null,"#board-selection button:nth-of-type(1)");
if(cljs.core._EQ_.call(null,expected__20413__auto___21541,actual__20414__auto___21542)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__20413__auto___21541;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__20381__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__20381__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__20414__auto___21542;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__20381__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__20381__auto__);
}
})()," (using =)"].join('')));
}

var expected__20413__auto__ = cljs.core.nth.call(null,tic_tac_toe.print_utils.board_prompt,(2));
var actual__20414__auto__ = c3kit.wire.spec_helper.text.call(null,"#board-selection button:nth-of-type(2)");
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
});})(_STAR_parent_description_STAR__orig_val__21379_21511,_STAR_parent_description_STAR__temp_val__21380_21512,description__20276__auto___21510))
,false),speclj.components.new_characteristic.call(null,"sets 3x3 board upon user selection",((function (_STAR_parent_description_STAR__orig_val__21379_21511,_STAR_parent_description_STAR__temp_val__21380_21512,description__20276__auto___21510){
return (function (){
c3kit.wire.spec_helper.click_BANG_.call(null,"#board-selection button:nth-of-type(1)");

var expected__20413__auto__ = tic_tac_toe.board_options.initial_3x3_board;
var actual__20414__auto__ = new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.screens.board_selection_spec.state));
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
});})(_STAR_parent_description_STAR__orig_val__21379_21511,_STAR_parent_description_STAR__temp_val__21380_21512,description__20276__auto___21510))
,false),speclj.components.new_characteristic.call(null,"sets 4x4 board upon user selection",((function (_STAR_parent_description_STAR__orig_val__21379_21511,_STAR_parent_description_STAR__temp_val__21380_21512,description__20276__auto___21510){
return (function (){
c3kit.wire.spec_helper.click_BANG_.call(null,"#board-selection button:nth-of-type(2)");

var expected__20413__auto__ = tic_tac_toe.board_options.initial_4x4_board;
var actual__20414__auto__ = new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.screens.board_selection_spec.state));
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
});})(_STAR_parent_description_STAR__orig_val__21379_21511,_STAR_parent_description_STAR__temp_val__21380_21512,description__20276__auto___21510))
,false),speclj.components.new_characteristic.call(null,"sets screen to first-level-selection upon user selection and not mode 1",((function (_STAR_parent_description_STAR__orig_val__21379_21511,_STAR_parent_description_STAR__temp_val__21380_21512,description__20276__auto___21510){
return (function (){
var seq__21455 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#board-selection button:nth-of-type(1)","#board-selection button:nth-of-type(2)"], null));
var chunk__21456 = null;
var count__21457 = (0);
var i__21458 = (0);
while(true){
if((i__21458 < count__21457)){
var item = cljs.core._nth.call(null,chunk__21456,i__21458);
c3kit.wire.spec_helper.click_BANG_.call(null,item);

var expected__20413__auto___21554 = new cljs.core.Keyword(null,"first-level-selection","first-level-selection",-675329011);
var actual__20414__auto___21555 = new cljs.core.Keyword(null,"current-screen","current-screen",-1454713691).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.screens.board_selection_spec.state));
if(cljs.core._EQ_.call(null,expected__20413__auto___21554,actual__20414__auto___21555)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__20413__auto___21554;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__20381__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__20381__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__20414__auto___21555;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__20381__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__20381__auto__);
}
})()," (using =)"].join('')));
}


var G__21556 = seq__21455;
var G__21557 = chunk__21456;
var G__21558 = count__21457;
var G__21559 = (i__21458 + (1));
seq__21455 = G__21556;
chunk__21456 = G__21557;
count__21457 = G__21558;
i__21458 = G__21559;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__21455);
if(temp__5804__auto__){
var seq__21455__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21455__$1)){
var c__5525__auto__ = cljs.core.chunk_first.call(null,seq__21455__$1);
var G__21560 = cljs.core.chunk_rest.call(null,seq__21455__$1);
var G__21561 = c__5525__auto__;
var G__21562 = cljs.core.count.call(null,c__5525__auto__);
var G__21563 = (0);
seq__21455 = G__21560;
chunk__21456 = G__21561;
count__21457 = G__21562;
i__21458 = G__21563;
continue;
} else {
var item = cljs.core.first.call(null,seq__21455__$1);
c3kit.wire.spec_helper.click_BANG_.call(null,item);

var expected__20413__auto___21564 = new cljs.core.Keyword(null,"first-level-selection","first-level-selection",-675329011);
var actual__20414__auto___21565 = new cljs.core.Keyword(null,"current-screen","current-screen",-1454713691).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.screens.board_selection_spec.state));
if(cljs.core._EQ_.call(null,expected__20413__auto___21564,actual__20414__auto___21565)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__20413__auto___21564;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__20381__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__20381__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__20414__auto___21565;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__20381__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__20381__auto__);
}
})()," (using =)"].join('')));
}


var G__21566 = cljs.core.next.call(null,seq__21455__$1);
var G__21567 = null;
var G__21568 = (0);
var G__21569 = (0);
seq__21455 = G__21566;
chunk__21456 = G__21567;
count__21457 = G__21568;
i__21458 = G__21569;
continue;
}
} else {
return null;
}
}
break;
}
});})(_STAR_parent_description_STAR__orig_val__21379_21511,_STAR_parent_description_STAR__temp_val__21380_21512,description__20276__auto___21510))
,false),speclj.components.new_characteristic.call(null,"sets screen to play upon user selection and mode 1",((function (_STAR_parent_description_STAR__orig_val__21379_21511,_STAR_parent_description_STAR__temp_val__21380_21512,description__20276__auto___21510){
return (function (){
cljs.core.swap_BANG_.call(null,tic_tac_toe.screens.board_selection_spec.state,cljs.core.assoc,new cljs.core.Keyword(null,"mode","mode",654403691),(1));

var seq__21481 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#board-selection button:nth-of-type(1)","#board-selection button:nth-of-type(2)"], null));
var chunk__21482 = null;
var count__21483 = (0);
var i__21484 = (0);
while(true){
if((i__21484 < count__21483)){
var item = cljs.core._nth.call(null,chunk__21482,i__21484);
c3kit.wire.spec_helper.click_BANG_.call(null,item);

var expected__20413__auto___21577 = new cljs.core.Keyword(null,"play","play",-580418022);
var actual__20414__auto___21578 = new cljs.core.Keyword(null,"current-screen","current-screen",-1454713691).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.screens.board_selection_spec.state));
if(cljs.core._EQ_.call(null,expected__20413__auto___21577,actual__20414__auto___21578)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__20413__auto___21577;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__20381__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__20381__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__20414__auto___21578;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__20381__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__20381__auto__);
}
})()," (using =)"].join('')));
}


var G__21581 = seq__21481;
var G__21582 = chunk__21482;
var G__21583 = count__21483;
var G__21584 = (i__21484 + (1));
seq__21481 = G__21581;
chunk__21482 = G__21582;
count__21483 = G__21583;
i__21484 = G__21584;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__21481);
if(temp__5804__auto__){
var seq__21481__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21481__$1)){
var c__5525__auto__ = cljs.core.chunk_first.call(null,seq__21481__$1);
var G__21587 = cljs.core.chunk_rest.call(null,seq__21481__$1);
var G__21588 = c__5525__auto__;
var G__21589 = cljs.core.count.call(null,c__5525__auto__);
var G__21590 = (0);
seq__21481 = G__21587;
chunk__21482 = G__21588;
count__21483 = G__21589;
i__21484 = G__21590;
continue;
} else {
var item = cljs.core.first.call(null,seq__21481__$1);
c3kit.wire.spec_helper.click_BANG_.call(null,item);

var expected__20413__auto___21601 = new cljs.core.Keyword(null,"play","play",-580418022);
var actual__20414__auto___21603 = new cljs.core.Keyword(null,"current-screen","current-screen",-1454713691).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.screens.board_selection_spec.state));
if(cljs.core._EQ_.call(null,expected__20413__auto___21601,actual__20414__auto___21603)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__20413__auto___21601;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__20381__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__20381__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__20414__auto___21603;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__20381__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__20381__auto__);
}
})()," (using =)"].join('')));
}


var G__21609 = cljs.core.next.call(null,seq__21481__$1);
var G__21610 = null;
var G__21611 = (0);
var G__21612 = (0);
seq__21481 = G__21609;
chunk__21482 = G__21610;
count__21483 = G__21611;
i__21484 = G__21612;
continue;
}
} else {
return null;
}
}
break;
}
});})(_STAR_parent_description_STAR__orig_val__21379_21511,_STAR_parent_description_STAR__temp_val__21380_21512,description__20276__auto___21510))
,false)],null)));
var chunk__21384_21514 = null;
var count__21385_21515 = (0);
var i__21386_21516 = (0);
while(true){
if((i__21386_21516 < count__21385_21515)){
var component__20277__auto___21613 = cljs.core._nth.call(null,chunk__21384_21514,i__21386_21516);
speclj.components.install.call(null,component__20277__auto___21613,description__20276__auto___21510);


var G__21614 = seq__21383_21513;
var G__21615 = chunk__21384_21514;
var G__21616 = count__21385_21515;
var G__21617 = (i__21386_21516 + (1));
seq__21383_21513 = G__21614;
chunk__21384_21514 = G__21615;
count__21385_21515 = G__21616;
i__21386_21516 = G__21617;
continue;
} else {
var temp__5804__auto___21620 = cljs.core.seq.call(null,seq__21383_21513);
if(temp__5804__auto___21620){
var seq__21383_21621__$1 = temp__5804__auto___21620;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21383_21621__$1)){
var c__5525__auto___21622 = cljs.core.chunk_first.call(null,seq__21383_21621__$1);
var G__21623 = cljs.core.chunk_rest.call(null,seq__21383_21621__$1);
var G__21624 = c__5525__auto___21622;
var G__21625 = cljs.core.count.call(null,c__5525__auto___21622);
var G__21626 = (0);
seq__21383_21513 = G__21623;
chunk__21384_21514 = G__21624;
count__21385_21515 = G__21625;
i__21386_21516 = G__21626;
continue;
} else {
var component__20277__auto___21627 = cljs.core.first.call(null,seq__21383_21621__$1);
speclj.components.install.call(null,component__20277__auto___21627,description__20276__auto___21510);


var G__21628 = cljs.core.next.call(null,seq__21383_21621__$1);
var G__21629 = null;
var G__21630 = (0);
var G__21631 = (0);
seq__21383_21513 = G__21628;
chunk__21384_21514 = G__21629;
count__21385_21515 = G__21630;
i__21386_21516 = G__21631;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__21379_21511);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__20276__auto___21510);
}


//# sourceMappingURL=board_selection_spec.js.map
