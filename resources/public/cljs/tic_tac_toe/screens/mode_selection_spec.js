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
tic_tac_toe.screens.mode_selection_spec.state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"current-screen","current-screen",-1454713691),new cljs.core.Keyword(null,"mode-selection","mode-selection",986239762)], null));
}
var description__11262__auto___16548 = speclj.components.new_description.call(null,"mode selection screen",false,"tic-tac-toe.screens.mode-selection-spec");
var _STAR_parent_description_STAR__orig_val__16463_16549 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__16464_16550 = description__11262__auto___16548;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__16464_16550);

try{var seq__16465_16551 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,8,(5),cljs.core.PersistentVector.EMPTY_NODE,[c3kit.wire.spec_helper.with_root_dom.call(null),speclj.components.new_before.call(null,((function (_STAR_parent_description_STAR__orig_val__16463_16549,_STAR_parent_description_STAR__temp_val__16464_16550,description__11262__auto___16548){
return (function (){
cljs.core.reset_BANG_.call(null,tic_tac_toe.screens.mode_selection_spec.state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"current-screen","current-screen",-1454713691),new cljs.core.Keyword(null,"mode-selection","mode-selection",986239762)], null));

return c3kit.wire.spec_helper.render.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tic_tac_toe.render_screen.render_screen,tic_tac_toe.screens.mode_selection_spec.state], null));
});})(_STAR_parent_description_STAR__orig_val__16463_16549,_STAR_parent_description_STAR__temp_val__16464_16550,description__11262__auto___16548))
),speclj.components.new_characteristic.call(null,"renders mode selection screen",((function (_STAR_parent_description_STAR__orig_val__16463_16549,_STAR_parent_description_STAR__temp_val__16464_16550,description__11262__auto___16548){
return (function (){
var value__11762__auto___16555 = "#mode-selection";
var node__11763__auto___16556 = c3kit.wire.spec_helper.select.call(null,value__11762__auto___16555);
if(cljs.core.truth_(node__11763__auto___16556)){
} else {
throw (new speclj.platform.SpecFailure(["Expected selector to find node: ",(function (){var temp__5806__auto__ = value__11762__auto___16555;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11367__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11367__auto__);
}
})()].join('')));
}

var expected__11399__auto___16557 = cljs.core.first.call(null,tic_tac_toe.print_utils.mode_prompt);
var actual__11400__auto___16558 = c3kit.wire.spec_helper.text.call(null,"#mode-selection h2");
if(cljs.core._EQ_.call(null,expected__11399__auto___16557,actual__11400__auto___16558)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__11399__auto___16557;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11367__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11367__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__11400__auto___16558;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11367__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11367__auto__);
}
})()," (using =)"].join('')));
}

var expected__11399__auto___16561 = cljs.core.nth.call(null,tic_tac_toe.print_utils.mode_prompt,(1));
var actual__11400__auto___16562 = c3kit.wire.spec_helper.text.call(null,"#mode-selection button:nth-of-type(1)");
if(cljs.core._EQ_.call(null,expected__11399__auto___16561,actual__11400__auto___16562)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__11399__auto___16561;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11367__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11367__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__11400__auto___16562;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11367__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11367__auto__);
}
})()," (using =)"].join('')));
}

var expected__11399__auto___16567 = cljs.core.nth.call(null,tic_tac_toe.print_utils.mode_prompt,(2));
var actual__11400__auto___16568 = c3kit.wire.spec_helper.text.call(null,"#mode-selection button:nth-of-type(2)");
if(cljs.core._EQ_.call(null,expected__11399__auto___16567,actual__11400__auto___16568)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__11399__auto___16567;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11367__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11367__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__11400__auto___16568;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11367__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11367__auto__);
}
})()," (using =)"].join('')));
}

var expected__11399__auto___16575 = cljs.core.nth.call(null,tic_tac_toe.print_utils.mode_prompt,(3));
var actual__11400__auto___16576 = c3kit.wire.spec_helper.text.call(null,"#mode-selection button:nth-of-type(3)");
if(cljs.core._EQ_.call(null,expected__11399__auto___16575,actual__11400__auto___16576)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__11399__auto___16575;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11367__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11367__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__11400__auto___16576;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11367__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11367__auto__);
}
})()," (using =)"].join('')));
}

var expected__11399__auto__ = cljs.core.nth.call(null,tic_tac_toe.print_utils.mode_prompt,(4));
var actual__11400__auto__ = c3kit.wire.spec_helper.text.call(null,"#mode-selection button:nth-of-type(4)");
if(cljs.core._EQ_.call(null,expected__11399__auto__,actual__11400__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__11399__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11367__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11367__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__11400__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11367__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11367__auto__);
}
})()," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__16463_16549,_STAR_parent_description_STAR__temp_val__16464_16550,description__11262__auto___16548))
,false),speclj.components.new_characteristic.call(null,"sets mode to 1 if user selects HvH",((function (_STAR_parent_description_STAR__orig_val__16463_16549,_STAR_parent_description_STAR__temp_val__16464_16550,description__11262__auto___16548){
return (function (){
c3kit.wire.spec_helper.click_BANG_.call(null,"#mode-selection button:nth-of-type(1)");

var expected__11399__auto__ = (1);
var actual__11400__auto__ = new cljs.core.Keyword(null,"mode","mode",654403691).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.screens.mode_selection_spec.state));
if(cljs.core._EQ_.call(null,expected__11399__auto__,actual__11400__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__11399__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11367__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11367__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__11400__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11367__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11367__auto__);
}
})()," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__16463_16549,_STAR_parent_description_STAR__temp_val__16464_16550,description__11262__auto___16548))
,false),speclj.components.new_characteristic.call(null,"sets mode to 2 if user selects HvC",((function (_STAR_parent_description_STAR__orig_val__16463_16549,_STAR_parent_description_STAR__temp_val__16464_16550,description__11262__auto___16548){
return (function (){
c3kit.wire.spec_helper.click_BANG_.call(null,"#mode-selection button:nth-of-type(2)");

var expected__11399__auto__ = (2);
var actual__11400__auto__ = new cljs.core.Keyword(null,"mode","mode",654403691).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.screens.mode_selection_spec.state));
if(cljs.core._EQ_.call(null,expected__11399__auto__,actual__11400__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__11399__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11367__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11367__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__11400__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11367__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11367__auto__);
}
})()," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__16463_16549,_STAR_parent_description_STAR__temp_val__16464_16550,description__11262__auto___16548))
,false),speclj.components.new_characteristic.call(null,"sets mode to 3 if user selects CvH",((function (_STAR_parent_description_STAR__orig_val__16463_16549,_STAR_parent_description_STAR__temp_val__16464_16550,description__11262__auto___16548){
return (function (){
c3kit.wire.spec_helper.click_BANG_.call(null,"#mode-selection button:nth-of-type(3)");

var expected__11399__auto__ = (3);
var actual__11400__auto__ = new cljs.core.Keyword(null,"mode","mode",654403691).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.screens.mode_selection_spec.state));
if(cljs.core._EQ_.call(null,expected__11399__auto__,actual__11400__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__11399__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11367__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11367__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__11400__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11367__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11367__auto__);
}
})()," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__16463_16549,_STAR_parent_description_STAR__temp_val__16464_16550,description__11262__auto___16548))
,false),speclj.components.new_characteristic.call(null,"sets mode to 4 if user selects CvC",((function (_STAR_parent_description_STAR__orig_val__16463_16549,_STAR_parent_description_STAR__temp_val__16464_16550,description__11262__auto___16548){
return (function (){
c3kit.wire.spec_helper.click_BANG_.call(null,"#mode-selection button:nth-of-type(4)");

var expected__11399__auto__ = (4);
var actual__11400__auto__ = new cljs.core.Keyword(null,"mode","mode",654403691).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.screens.mode_selection_spec.state));
if(cljs.core._EQ_.call(null,expected__11399__auto__,actual__11400__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__11399__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11367__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11367__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__11400__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11367__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11367__auto__);
}
})()," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__16463_16549,_STAR_parent_description_STAR__temp_val__16464_16550,description__11262__auto___16548))
,false),speclj.components.new_characteristic.call(null,"sets screen to board-selection upon user selection",((function (_STAR_parent_description_STAR__orig_val__16463_16549,_STAR_parent_description_STAR__temp_val__16464_16550,description__11262__auto___16548){
return (function (){
var seq__16525 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#mode-selection button:nth-of-type(1)","#mode-selection button:nth-of-type(2)","#mode-selection button:nth-of-type(3)","#mode-selection button:nth-of-type(4)"], null));
var chunk__16526 = null;
var count__16527 = (0);
var i__16528 = (0);
while(true){
if((i__16528 < count__16527)){
var item = cljs.core._nth.call(null,chunk__16526,i__16528);
c3kit.wire.spec_helper.click_BANG_.call(null,item);

var expected__11399__auto___16602 = new cljs.core.Keyword(null,"board-selection","board-selection",276837898);
var actual__11400__auto___16603 = new cljs.core.Keyword(null,"current-screen","current-screen",-1454713691).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.screens.mode_selection_spec.state));
if(cljs.core._EQ_.call(null,expected__11399__auto___16602,actual__11400__auto___16603)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__11399__auto___16602;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11367__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11367__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__11400__auto___16603;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11367__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11367__auto__);
}
})()," (using =)"].join('')));
}


var G__16604 = seq__16525;
var G__16605 = chunk__16526;
var G__16606 = count__16527;
var G__16607 = (i__16528 + (1));
seq__16525 = G__16604;
chunk__16526 = G__16605;
count__16527 = G__16606;
i__16528 = G__16607;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__16525);
if(temp__5804__auto__){
var seq__16525__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16525__$1)){
var c__5525__auto__ = cljs.core.chunk_first.call(null,seq__16525__$1);
var G__16608 = cljs.core.chunk_rest.call(null,seq__16525__$1);
var G__16609 = c__5525__auto__;
var G__16610 = cljs.core.count.call(null,c__5525__auto__);
var G__16611 = (0);
seq__16525 = G__16608;
chunk__16526 = G__16609;
count__16527 = G__16610;
i__16528 = G__16611;
continue;
} else {
var item = cljs.core.first.call(null,seq__16525__$1);
c3kit.wire.spec_helper.click_BANG_.call(null,item);

var expected__11399__auto___16612 = new cljs.core.Keyword(null,"board-selection","board-selection",276837898);
var actual__11400__auto___16613 = new cljs.core.Keyword(null,"current-screen","current-screen",-1454713691).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.screens.mode_selection_spec.state));
if(cljs.core._EQ_.call(null,expected__11399__auto___16612,actual__11400__auto___16613)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__11399__auto___16612;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11367__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11367__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__11400__auto___16613;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11367__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11367__auto__);
}
})()," (using =)"].join('')));
}


var G__16614 = cljs.core.next.call(null,seq__16525__$1);
var G__16615 = null;
var G__16616 = (0);
var G__16617 = (0);
seq__16525 = G__16614;
chunk__16526 = G__16615;
count__16527 = G__16616;
i__16528 = G__16617;
continue;
}
} else {
return null;
}
}
break;
}
});})(_STAR_parent_description_STAR__orig_val__16463_16549,_STAR_parent_description_STAR__temp_val__16464_16550,description__11262__auto___16548))
,false)],null)));
var chunk__16466_16552 = null;
var count__16467_16553 = (0);
var i__16468_16554 = (0);
while(true){
if((i__16468_16554 < count__16467_16553)){
var component__11263__auto___16618 = cljs.core._nth.call(null,chunk__16466_16552,i__16468_16554);
speclj.components.install.call(null,component__11263__auto___16618,description__11262__auto___16548);


var G__16619 = seq__16465_16551;
var G__16620 = chunk__16466_16552;
var G__16621 = count__16467_16553;
var G__16622 = (i__16468_16554 + (1));
seq__16465_16551 = G__16619;
chunk__16466_16552 = G__16620;
count__16467_16553 = G__16621;
i__16468_16554 = G__16622;
continue;
} else {
var temp__5804__auto___16623 = cljs.core.seq.call(null,seq__16465_16551);
if(temp__5804__auto___16623){
var seq__16465_16624__$1 = temp__5804__auto___16623;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16465_16624__$1)){
var c__5525__auto___16625 = cljs.core.chunk_first.call(null,seq__16465_16624__$1);
var G__16626 = cljs.core.chunk_rest.call(null,seq__16465_16624__$1);
var G__16627 = c__5525__auto___16625;
var G__16628 = cljs.core.count.call(null,c__5525__auto___16625);
var G__16629 = (0);
seq__16465_16551 = G__16626;
chunk__16466_16552 = G__16627;
count__16467_16553 = G__16628;
i__16468_16554 = G__16629;
continue;
} else {
var component__11263__auto___16630 = cljs.core.first.call(null,seq__16465_16624__$1);
speclj.components.install.call(null,component__11263__auto___16630,description__11262__auto___16548);


var G__16631 = cljs.core.next.call(null,seq__16465_16624__$1);
var G__16632 = null;
var G__16633 = (0);
var G__16634 = (0);
seq__16465_16551 = G__16631;
chunk__16466_16552 = G__16632;
count__16467_16553 = G__16633;
i__16468_16554 = G__16634;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__16463_16549);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__11262__auto___16548);
}


//# sourceMappingURL=mode_selection_spec.js.map
