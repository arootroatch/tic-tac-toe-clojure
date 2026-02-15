// Compiled by ClojureScript 1.11.132 {:optimizations :none}
goog.provide('tic_tac_toe.screens.play_spec');
goog.require('cljs.core');
goog.require('c3kit.wire.js');
goog.require('c3kit.wire.spec_helper');
goog.require('reagent.core');
goog.require('speclj.core');
goog.require('tic_tac_toe.player');
goog.require('tic_tac_toe.render_screen');
goog.require('tic_tac_toe.screens.play');
tic_tac_toe.screens.play_spec.board_3 = new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(3),(4),(5),(6),(7),(8),(9)], null);
tic_tac_toe.screens.play_spec.board_4 = cljs.core.vec.call(null,cljs.core.range.call(null,(1),(17)));
if((typeof tic_tac_toe !== 'undefined') && (typeof tic_tac_toe.screens !== 'undefined') && (typeof tic_tac_toe.screens.play_spec !== 'undefined') && (typeof tic_tac_toe.screens.play_spec.state !== 'undefined')){
} else {
tic_tac_toe.screens.play_spec.state = reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"current-screen","current-screen",-1454713691),new cljs.core.Keyword(null,"play","play",-580418022),new cljs.core.Keyword(null,"board","board",-1907017633),tic_tac_toe.screens.play_spec.board_3,new cljs.core.Keyword(null,"game-state","game-state",935682735),new cljs.core.Keyword(null,"in-progress","in-progress",2126442630),new cljs.core.Keyword(null,"human?","human?",-2017219054),true], null));
}
var description__9411__auto___10660 = speclj.components.new_description.call(null,"play screen",false,"tic-tac-toe.screens.play-spec");
var _STAR_parent_description_STAR__orig_val__9962_10661 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__9963_10662 = description__9411__auto___10660;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__9963_10662);

try{var seq__9964_10663 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,6,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_around.call(null,((function (_STAR_parent_description_STAR__orig_val__9962_10661,_STAR_parent_description_STAR__temp_val__9963_10662,description__9411__auto___10660){
return (function (it__9781__auto__){
var _STAR_stubbed_invocations_STAR__orig_val__10314 = speclj.stub._STAR_stubbed_invocations_STAR_;
var _STAR_stubbed_invocations_STAR__temp_val__10315 = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
(speclj.stub._STAR_stubbed_invocations_STAR_ = _STAR_stubbed_invocations_STAR__temp_val__10315);

try{return it__9781__auto__.call(null);
}finally {(speclj.stub._STAR_stubbed_invocations_STAR_ = _STAR_stubbed_invocations_STAR__orig_val__10314);
}});})(_STAR_parent_description_STAR__orig_val__9962_10661,_STAR_parent_description_STAR__temp_val__9963_10662,description__9411__auto___10660))
),c3kit.wire.spec_helper.with_root_dom.call(null),(function (){var description__9411__auto____$1 = speclj.components.new_description.call(null,"restart",false,"tic-tac-toe.screens.play-spec");
var _STAR_parent_description_STAR__orig_val__10316_10667 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__10317_10668 = description__9411__auto____$1;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__10317_10668);

try{var seq__10318_10669 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_characteristic.call(null,"displays restart button at end of game",((function (_STAR_parent_description_STAR__orig_val__10316_10667,_STAR_parent_description_STAR__temp_val__10317_10668,description__9411__auto____$1,_STAR_parent_description_STAR__orig_val__9962_10661,_STAR_parent_description_STAR__temp_val__9963_10662,description__9411__auto___10660){
return (function (){
cljs.core.swap_BANG_.call(null,tic_tac_toe.screens.play_spec.state,cljs.core.assoc,new cljs.core.Keyword(null,"game-state","game-state",935682735),"X wins!");

c3kit.wire.spec_helper.render.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tic_tac_toe.render_screen.render_screen,tic_tac_toe.screens.play_spec.state], null));

var value__9911__auto___10673 = "#restart";
var node__9912__auto___10674 = c3kit.wire.spec_helper.select.call(null,value__9911__auto___10673);
if(cljs.core.truth_(node__9912__auto___10674)){
} else {
throw (new speclj.platform.SpecFailure(["Expected selector to find node: ",(function (){var temp__5806__auto__ = value__9911__auto___10673;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9516__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9516__auto__);
}
})()].join('')));
}

var expected__9548__auto__ = "Restart";
var actual__9549__auto__ = c3kit.wire.spec_helper.text.call(null,"#restart");
if(cljs.core._EQ_.call(null,expected__9548__auto__,actual__9549__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__9548__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9516__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9516__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__9549__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9516__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9516__auto__);
}
})()," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__10316_10667,_STAR_parent_description_STAR__temp_val__10317_10668,description__9411__auto____$1,_STAR_parent_description_STAR__orig_val__9962_10661,_STAR_parent_description_STAR__temp_val__9963_10662,description__9411__auto___10660))
,false),speclj.components.new_characteristic.call(null,"resets game state",((function (_STAR_parent_description_STAR__orig_val__10316_10667,_STAR_parent_description_STAR__temp_val__10317_10668,description__9411__auto____$1,_STAR_parent_description_STAR__orig_val__9962_10661,_STAR_parent_description_STAR__temp_val__9963_10662,description__9411__auto___10660){
return (function (){
cljs.core.swap_BANG_.call(null,tic_tac_toe.screens.play_spec.state,cljs.core.assoc,new cljs.core.Keyword(null,"game-state","game-state",935682735),"X wins!");

c3kit.wire.spec_helper.render.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tic_tac_toe.render_screen.render_screen,tic_tac_toe.screens.play_spec.state], null));

c3kit.wire.spec_helper.click_BANG_.call(null,"#restart");

var expected__9548__auto__ = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"current-screen","current-screen",-1454713691),new cljs.core.Keyword(null,"second-ai-level","second-ai-level",-418730455),new cljs.core.Keyword(null,"mode","mode",654403691),new cljs.core.Keyword(null,"first-ai-level","first-ai-level",1004633644),new cljs.core.Keyword(null,"game-state","game-state",935682735),new cljs.core.Keyword(null,"human?","human?",-2017219054),new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"board","board",-1907017633)],[new cljs.core.Keyword(null,"mode-selection","mode-selection",986239762),null,null,null,new cljs.core.Keyword(null,"in-progress","in-progress",2126442630),true,new cljs.core.Keyword(null,"gui","gui",604532813),new cljs.core.Keyword(null,"x","x",2099068185),null]);
var actual__9549__auto__ = cljs.core.deref.call(null,tic_tac_toe.screens.play_spec.state);
if(cljs.core._EQ_.call(null,expected__9548__auto__,actual__9549__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__9548__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9516__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9516__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__9549__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9516__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9516__auto__);
}
})()," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__10316_10667,_STAR_parent_description_STAR__temp_val__10317_10668,description__9411__auto____$1,_STAR_parent_description_STAR__orig_val__9962_10661,_STAR_parent_description_STAR__temp_val__9963_10662,description__9411__auto___10660))
,false),speclj.components.new_characteristic.call(null,"doesn't display restart button if game is in progress",((function (_STAR_parent_description_STAR__orig_val__10316_10667,_STAR_parent_description_STAR__temp_val__10317_10668,description__9411__auto____$1,_STAR_parent_description_STAR__orig_val__9962_10661,_STAR_parent_description_STAR__temp_val__9963_10662,description__9411__auto___10660){
return (function (){
cljs.core.swap_BANG_.call(null,tic_tac_toe.screens.play_spec.state,cljs.core.assoc,new cljs.core.Keyword(null,"game-state","game-state",935682735),new cljs.core.Keyword(null,"in-progress","in-progress",2126442630));

c3kit.wire.spec_helper.render.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tic_tac_toe.render_screen.render_screen,tic_tac_toe.screens.play_spec.state], null));

var value__9920__auto__ = "#restart";
var node__9921__auto__ = c3kit.wire.spec_helper.select.call(null,value__9920__auto__);
if(cljs.core.truth_(node__9921__auto__)){
throw (new speclj.platform.SpecFailure(["Expected selector NOT to find node: ",(function (){var temp__5806__auto__ = value__9920__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9516__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9516__auto__);
}
})()].join('')));
} else {
return null;
}
});})(_STAR_parent_description_STAR__orig_val__10316_10667,_STAR_parent_description_STAR__temp_val__10317_10668,description__9411__auto____$1,_STAR_parent_description_STAR__orig_val__9962_10661,_STAR_parent_description_STAR__temp_val__9963_10662,description__9411__auto___10660))
,false)],null)));
var chunk__10319_10670 = null;
var count__10320_10671 = (0);
var i__10321_10672 = (0);
while(true){
if((i__10321_10672 < count__10320_10671)){
var component__9412__auto___10675 = cljs.core._nth.call(null,chunk__10319_10670,i__10321_10672);
speclj.components.install.call(null,component__9412__auto___10675,description__9411__auto____$1);


var G__10676 = seq__10318_10669;
var G__10677 = chunk__10319_10670;
var G__10678 = count__10320_10671;
var G__10679 = (i__10321_10672 + (1));
seq__10318_10669 = G__10676;
chunk__10319_10670 = G__10677;
count__10320_10671 = G__10678;
i__10321_10672 = G__10679;
continue;
} else {
var temp__5804__auto___10680 = cljs.core.seq.call(null,seq__10318_10669);
if(temp__5804__auto___10680){
var seq__10318_10681__$1 = temp__5804__auto___10680;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10318_10681__$1)){
var c__5525__auto___10682 = cljs.core.chunk_first.call(null,seq__10318_10681__$1);
var G__10683 = cljs.core.chunk_rest.call(null,seq__10318_10681__$1);
var G__10684 = c__5525__auto___10682;
var G__10685 = cljs.core.count.call(null,c__5525__auto___10682);
var G__10686 = (0);
seq__10318_10669 = G__10683;
chunk__10319_10670 = G__10684;
count__10320_10671 = G__10685;
i__10321_10672 = G__10686;
continue;
} else {
var component__9412__auto___10687 = cljs.core.first.call(null,seq__10318_10681__$1);
speclj.components.install.call(null,component__9412__auto___10687,description__9411__auto____$1);


var G__10688 = cljs.core.next.call(null,seq__10318_10681__$1);
var G__10689 = null;
var G__10690 = (0);
var G__10691 = (0);
seq__10318_10669 = G__10688;
chunk__10319_10670 = G__10689;
count__10320_10671 = G__10690;
i__10321_10672 = G__10691;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__10316_10667);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__9411__auto____$1);
}

return description__9411__auto____$1;
})(),(function (){var description__9411__auto____$1 = speclj.components.new_description.call(null,"play heading",false,"tic-tac-toe.screens.play-spec");
var _STAR_parent_description_STAR__orig_val__10322_10692 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__10323_10693 = description__9411__auto____$1;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__10323_10693);

try{var seq__10324_10694 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,4,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_before.call(null,((function (_STAR_parent_description_STAR__orig_val__10322_10692,_STAR_parent_description_STAR__temp_val__10323_10693,description__9411__auto____$1,_STAR_parent_description_STAR__orig_val__9962_10661,_STAR_parent_description_STAR__temp_val__9963_10662,description__9411__auto___10660){
return (function (){
return cljs.core.reset_BANG_.call(null,tic_tac_toe.screens.play_spec.state,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"current-screen","current-screen",-1454713691),new cljs.core.Keyword(null,"play","play",-580418022),new cljs.core.Keyword(null,"board","board",-1907017633),tic_tac_toe.screens.play_spec.board_3,new cljs.core.Keyword(null,"game-state","game-state",935682735),new cljs.core.Keyword(null,"in-progress","in-progress",2126442630),new cljs.core.Keyword(null,"human?","human?",-2017219054),true], null));
});})(_STAR_parent_description_STAR__orig_val__10322_10692,_STAR_parent_description_STAR__temp_val__10323_10693,description__9411__auto____$1,_STAR_parent_description_STAR__orig_val__9962_10661,_STAR_parent_description_STAR__temp_val__9963_10662,description__9411__auto___10660))
),speclj.components.new_characteristic.call(null,"prompts player x for move",((function (_STAR_parent_description_STAR__orig_val__10322_10692,_STAR_parent_description_STAR__temp_val__10323_10693,description__9411__auto____$1,_STAR_parent_description_STAR__orig_val__9962_10661,_STAR_parent_description_STAR__temp_val__9963_10662,description__9411__auto___10660){
return (function (){
cljs.core.swap_BANG_.call(null,tic_tac_toe.screens.play_spec.state,cljs.core.assoc,new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"x","x",2099068185));

c3kit.wire.spec_helper.render.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tic_tac_toe.render_screen.render_screen,tic_tac_toe.screens.play_spec.state], null));

var expected__9548__auto__ = "X's turn!";
var actual__9549__auto__ = c3kit.wire.spec_helper.text.call(null,"#play-heading");
if(cljs.core._EQ_.call(null,expected__9548__auto__,actual__9549__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__9548__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9516__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9516__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__9549__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9516__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9516__auto__);
}
})()," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__10322_10692,_STAR_parent_description_STAR__temp_val__10323_10693,description__9411__auto____$1,_STAR_parent_description_STAR__orig_val__9962_10661,_STAR_parent_description_STAR__temp_val__9963_10662,description__9411__auto___10660))
,false),speclj.components.new_characteristic.call(null,"prompts player o for move",((function (_STAR_parent_description_STAR__orig_val__10322_10692,_STAR_parent_description_STAR__temp_val__10323_10693,description__9411__auto____$1,_STAR_parent_description_STAR__orig_val__9962_10661,_STAR_parent_description_STAR__temp_val__9963_10662,description__9411__auto___10660){
return (function (){
cljs.core.swap_BANG_.call(null,tic_tac_toe.screens.play_spec.state,cljs.core.assoc,new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"o","o",-1350007228));

c3kit.wire.spec_helper.render.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tic_tac_toe.render_screen.render_screen,tic_tac_toe.screens.play_spec.state], null));

var expected__9548__auto__ = "O's turn!";
var actual__9549__auto__ = c3kit.wire.spec_helper.text.call(null,"#play-heading");
if(cljs.core._EQ_.call(null,expected__9548__auto__,actual__9549__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__9548__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9516__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9516__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__9549__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9516__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9516__auto__);
}
})()," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__10322_10692,_STAR_parent_description_STAR__temp_val__10323_10693,description__9411__auto____$1,_STAR_parent_description_STAR__orig_val__9962_10661,_STAR_parent_description_STAR__temp_val__9963_10662,description__9411__auto___10660))
,false),speclj.components.new_characteristic.call(null,"displays game state if game over",((function (_STAR_parent_description_STAR__orig_val__10322_10692,_STAR_parent_description_STAR__temp_val__10323_10693,description__9411__auto____$1,_STAR_parent_description_STAR__orig_val__9962_10661,_STAR_parent_description_STAR__temp_val__9963_10662,description__9411__auto___10660){
return (function (){
cljs.core.swap_BANG_.call(null,tic_tac_toe.screens.play_spec.state,cljs.core.assoc,new cljs.core.Keyword(null,"game-state","game-state",935682735),"X wins!");

c3kit.wire.spec_helper.render.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tic_tac_toe.render_screen.render_screen,tic_tac_toe.screens.play_spec.state], null));

var expected__9548__auto__ = "X wins!";
var actual__9549__auto__ = c3kit.wire.spec_helper.text.call(null,"#play-heading");
if(cljs.core._EQ_.call(null,expected__9548__auto__,actual__9549__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__9548__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9516__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9516__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__9549__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9516__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9516__auto__);
}
})()," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__10322_10692,_STAR_parent_description_STAR__temp_val__10323_10693,description__9411__auto____$1,_STAR_parent_description_STAR__orig_val__9962_10661,_STAR_parent_description_STAR__temp_val__9963_10662,description__9411__auto___10660))
,false)],null)));
var chunk__10325_10695 = null;
var count__10326_10696 = (0);
var i__10327_10697 = (0);
while(true){
if((i__10327_10697 < count__10326_10696)){
var component__9412__auto___10698 = cljs.core._nth.call(null,chunk__10325_10695,i__10327_10697);
speclj.components.install.call(null,component__9412__auto___10698,description__9411__auto____$1);


var G__10699 = seq__10324_10694;
var G__10700 = chunk__10325_10695;
var G__10701 = count__10326_10696;
var G__10702 = (i__10327_10697 + (1));
seq__10324_10694 = G__10699;
chunk__10325_10695 = G__10700;
count__10326_10696 = G__10701;
i__10327_10697 = G__10702;
continue;
} else {
var temp__5804__auto___10703 = cljs.core.seq.call(null,seq__10324_10694);
if(temp__5804__auto___10703){
var seq__10324_10704__$1 = temp__5804__auto___10703;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10324_10704__$1)){
var c__5525__auto___10705 = cljs.core.chunk_first.call(null,seq__10324_10704__$1);
var G__10706 = cljs.core.chunk_rest.call(null,seq__10324_10704__$1);
var G__10707 = c__5525__auto___10705;
var G__10708 = cljs.core.count.call(null,c__5525__auto___10705);
var G__10709 = (0);
seq__10324_10694 = G__10706;
chunk__10325_10695 = G__10707;
count__10326_10696 = G__10708;
i__10327_10697 = G__10709;
continue;
} else {
var component__9412__auto___10710 = cljs.core.first.call(null,seq__10324_10704__$1);
speclj.components.install.call(null,component__9412__auto___10710,description__9411__auto____$1);


var G__10711 = cljs.core.next.call(null,seq__10324_10704__$1);
var G__10712 = null;
var G__10713 = (0);
var G__10714 = (0);
seq__10324_10694 = G__10711;
chunk__10325_10695 = G__10712;
count__10326_10696 = G__10713;
i__10327_10697 = G__10714;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__10322_10692);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__9411__auto____$1);
}

return description__9411__auto____$1;
})(),(function (){var description__9411__auto____$1 = speclj.components.new_description.call(null,"3x3",false,"tic-tac-toe.screens.play-spec");
var _STAR_parent_description_STAR__orig_val__10328_10715 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__10329_10716 = description__9411__auto____$1;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__10329_10716);

try{var seq__10330_10717 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,15,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_before.call(null,((function (_STAR_parent_description_STAR__orig_val__10328_10715,_STAR_parent_description_STAR__temp_val__10329_10716,description__9411__auto____$1,_STAR_parent_description_STAR__orig_val__9962_10661,_STAR_parent_description_STAR__temp_val__9963_10662,description__9411__auto___10660){
return (function (){
cljs.core.reset_BANG_.call(null,tic_tac_toe.screens.play_spec.state,new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"current-screen","current-screen",-1454713691),new cljs.core.Keyword(null,"play","play",-580418022),new cljs.core.Keyword(null,"board","board",-1907017633),tic_tac_toe.screens.play_spec.board_3,new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"mode","mode",654403691),(1),new cljs.core.Keyword(null,"game-state","game-state",935682735),new cljs.core.Keyword(null,"in-progress","in-progress",2126442630),new cljs.core.Keyword(null,"human?","human?",-2017219054),true,new cljs.core.Keyword(null,"first-ai-level","first-ai-level",1004633644),(1),new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"gui","gui",604532813)], null));

return c3kit.wire.spec_helper.render.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tic_tac_toe.render_screen.render_screen,tic_tac_toe.screens.play_spec.state], null));
});})(_STAR_parent_description_STAR__orig_val__10328_10715,_STAR_parent_description_STAR__temp_val__10329_10716,description__9411__auto____$1,_STAR_parent_description_STAR__orig_val__9962_10661,_STAR_parent_description_STAR__temp_val__9963_10662,description__9411__auto___10660))
),speclj.components.new_characteristic.call(null,"renders board",((function (_STAR_parent_description_STAR__orig_val__10328_10715,_STAR_parent_description_STAR__temp_val__10329_10716,description__9411__auto____$1,_STAR_parent_description_STAR__orig_val__9962_10661,_STAR_parent_description_STAR__temp_val__9963_10662,description__9411__auto___10660){
return (function (){
var expected__9548__auto___10721 = (9);
var actual__9549__auto___10722 = cljs.core.count.call(null,cljs.core.vec.call(null,c3kit.wire.js.query_selector_all.call(null,".board-square")));
if(cljs.core._EQ_.call(null,expected__9548__auto___10721,actual__9549__auto___10722)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__9548__auto___10721;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9516__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9516__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__9549__auto___10722;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9516__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9516__auto__);
}
})()," (using =)"].join('')));
}

var value__9911__auto___10723 = "#board-wrapper";
var node__9912__auto___10724 = c3kit.wire.spec_helper.select.call(null,value__9911__auto___10723);
if(cljs.core.truth_(node__9912__auto___10724)){
} else {
throw (new speclj.platform.SpecFailure(["Expected selector to find node: ",(function (){var temp__5806__auto__ = value__9911__auto___10723;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9516__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9516__auto__);
}
})()].join('')));
}

var value__9911__auto__ = ".three-grid";
var node__9912__auto__ = c3kit.wire.spec_helper.select.call(null,value__9911__auto__);
if(cljs.core.truth_(node__9912__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected selector to find node: ",(function (){var temp__5806__auto__ = value__9911__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9516__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9516__auto__);
}
})()].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__10328_10715,_STAR_parent_description_STAR__temp_val__10329_10716,description__9411__auto____$1,_STAR_parent_description_STAR__orig_val__9962_10661,_STAR_parent_description_STAR__temp_val__9963_10662,description__9411__auto___10660))
,false),speclj.components.new_characteristic.call(null,"buttons have IDs 0-8",((function (_STAR_parent_description_STAR__orig_val__10328_10715,_STAR_parent_description_STAR__temp_val__10329_10716,description__9411__auto____$1,_STAR_parent_description_STAR__orig_val__9962_10661,_STAR_parent_description_STAR__temp_val__9963_10662,description__9411__auto___10660){
return (function (){
var seq__10422 = cljs.core.seq.call(null,cljs.core.range.call(null,(9)));
var chunk__10423 = null;
var count__10424 = (0);
var i__10425 = (0);
while(true){
if((i__10425 < count__10424)){
var n = cljs.core._nth.call(null,chunk__10423,i__10425);
var value__9911__auto___10725 = ["#index-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join('');
var node__9912__auto___10726 = c3kit.wire.spec_helper.select.call(null,value__9911__auto___10725);
if(cljs.core.truth_(node__9912__auto___10726)){
} else {
throw (new speclj.platform.SpecFailure(["Expected selector to find node: ",(function (){var temp__5806__auto__ = value__9911__auto___10725;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9516__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9516__auto__);
}
})()].join('')));
}


var G__10727 = seq__10422;
var G__10728 = chunk__10423;
var G__10729 = count__10424;
var G__10730 = (i__10425 + (1));
seq__10422 = G__10727;
chunk__10423 = G__10728;
count__10424 = G__10729;
i__10425 = G__10730;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__10422);
if(temp__5804__auto__){
var seq__10422__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10422__$1)){
var c__5525__auto__ = cljs.core.chunk_first.call(null,seq__10422__$1);
var G__10731 = cljs.core.chunk_rest.call(null,seq__10422__$1);
var G__10732 = c__5525__auto__;
var G__10733 = cljs.core.count.call(null,c__5525__auto__);
var G__10734 = (0);
seq__10422 = G__10731;
chunk__10423 = G__10732;
count__10424 = G__10733;
i__10425 = G__10734;
continue;
} else {
var n = cljs.core.first.call(null,seq__10422__$1);
var value__9911__auto___10735 = ["#index-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join('');
var node__9912__auto___10736 = c3kit.wire.spec_helper.select.call(null,value__9911__auto___10735);
if(cljs.core.truth_(node__9912__auto___10736)){
} else {
throw (new speclj.platform.SpecFailure(["Expected selector to find node: ",(function (){var temp__5806__auto__ = value__9911__auto___10735;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9516__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9516__auto__);
}
})()].join('')));
}


var G__10737 = cljs.core.next.call(null,seq__10422__$1);
var G__10738 = null;
var G__10739 = (0);
var G__10740 = (0);
seq__10422 = G__10737;
chunk__10423 = G__10738;
count__10424 = G__10739;
i__10425 = G__10740;
continue;
}
} else {
return null;
}
}
break;
}
});})(_STAR_parent_description_STAR__orig_val__10328_10715,_STAR_parent_description_STAR__temp_val__10329_10716,description__9411__auto____$1,_STAR_parent_description_STAR__orig_val__9962_10661,_STAR_parent_description_STAR__temp_val__9963_10662,description__9411__auto___10660))
,false),speclj.components.new_characteristic.call(null,"clicking button updates board in state",((function (_STAR_parent_description_STAR__orig_val__10328_10715,_STAR_parent_description_STAR__temp_val__10329_10716,description__9411__auto____$1,_STAR_parent_description_STAR__orig_val__9962_10661,_STAR_parent_description_STAR__temp_val__9963_10662,description__9411__auto___10660){
return (function (){
var seq__10426 = cljs.core.seq.call(null,cljs.core.range.call(null,(9)));
var chunk__10427 = null;
var count__10428 = (0);
var i__10429 = (0);
while(true){
if((i__10429 < count__10428)){
var n = cljs.core._nth.call(null,chunk__10427,i__10429);
c3kit.wire.spec_helper.click_BANG_.call(null,["#index-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join(''));

var expected__9548__auto___10741 = cljs.core.assoc.call(null,tic_tac_toe.screens.play_spec.board_3,n,new cljs.core.Keyword(null,"x","x",2099068185));
var actual__9549__auto___10742 = new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.screens.play_spec.state));
if(cljs.core._EQ_.call(null,expected__9548__auto___10741,actual__9549__auto___10742)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__9548__auto___10741;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9516__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9516__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__9549__auto___10742;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9516__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9516__auto__);
}
})()," (using =)"].join('')));
}

cljs.core.swap_BANG_.call(null,tic_tac_toe.screens.play_spec.state,cljs.core.assoc,new cljs.core.Keyword(null,"board","board",-1907017633),tic_tac_toe.screens.play_spec.board_3,new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"x","x",2099068185));


var G__10743 = seq__10426;
var G__10744 = chunk__10427;
var G__10745 = count__10428;
var G__10746 = (i__10429 + (1));
seq__10426 = G__10743;
chunk__10427 = G__10744;
count__10428 = G__10745;
i__10429 = G__10746;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__10426);
if(temp__5804__auto__){
var seq__10426__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10426__$1)){
var c__5525__auto__ = cljs.core.chunk_first.call(null,seq__10426__$1);
var G__10747 = cljs.core.chunk_rest.call(null,seq__10426__$1);
var G__10748 = c__5525__auto__;
var G__10749 = cljs.core.count.call(null,c__5525__auto__);
var G__10750 = (0);
seq__10426 = G__10747;
chunk__10427 = G__10748;
count__10428 = G__10749;
i__10429 = G__10750;
continue;
} else {
var n = cljs.core.first.call(null,seq__10426__$1);
c3kit.wire.spec_helper.click_BANG_.call(null,["#index-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join(''));

var expected__9548__auto___10751 = cljs.core.assoc.call(null,tic_tac_toe.screens.play_spec.board_3,n,new cljs.core.Keyword(null,"x","x",2099068185));
var actual__9549__auto___10752 = new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.screens.play_spec.state));
if(cljs.core._EQ_.call(null,expected__9548__auto___10751,actual__9549__auto___10752)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__9548__auto___10751;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9516__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9516__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__9549__auto___10752;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9516__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9516__auto__);
}
})()," (using =)"].join('')));
}

cljs.core.swap_BANG_.call(null,tic_tac_toe.screens.play_spec.state,cljs.core.assoc,new cljs.core.Keyword(null,"board","board",-1907017633),tic_tac_toe.screens.play_spec.board_3,new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"x","x",2099068185));


var G__10753 = cljs.core.next.call(null,seq__10426__$1);
var G__10754 = null;
var G__10755 = (0);
var G__10756 = (0);
seq__10426 = G__10753;
chunk__10427 = G__10754;
count__10428 = G__10755;
i__10429 = G__10756;
continue;
}
} else {
return null;
}
}
break;
}
});})(_STAR_parent_description_STAR__orig_val__10328_10715,_STAR_parent_description_STAR__temp_val__10329_10716,description__9411__auto____$1,_STAR_parent_description_STAR__orig_val__9962_10661,_STAR_parent_description_STAR__temp_val__9963_10662,description__9411__auto___10660))
,false),speclj.components.new_characteristic.call(null,"clicking button swaps player in state",((function (_STAR_parent_description_STAR__orig_val__10328_10715,_STAR_parent_description_STAR__temp_val__10329_10716,description__9411__auto____$1,_STAR_parent_description_STAR__orig_val__9962_10661,_STAR_parent_description_STAR__temp_val__9963_10662,description__9411__auto___10660){
return (function (){
var seq__10430 = cljs.core.seq.call(null,cljs.core.range.call(null,(9)));
var chunk__10431 = null;
var count__10432 = (0);
var i__10433 = (0);
while(true){
if((i__10433 < count__10432)){
var n = cljs.core._nth.call(null,chunk__10431,i__10433);
c3kit.wire.spec_helper.click_BANG_.call(null,["#index-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join(''));

var expected__9548__auto___10757 = new cljs.core.Keyword(null,"o","o",-1350007228);
var actual__9549__auto___10758 = new cljs.core.Keyword(null,"player","player",-97687400).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.screens.play_spec.state));
if(cljs.core._EQ_.call(null,expected__9548__auto___10757,actual__9549__auto___10758)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__9548__auto___10757;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9516__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9516__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__9549__auto___10758;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9516__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9516__auto__);
}
})()," (using =)"].join('')));
}

cljs.core.swap_BANG_.call(null,tic_tac_toe.screens.play_spec.state,cljs.core.assoc,new cljs.core.Keyword(null,"board","board",-1907017633),tic_tac_toe.screens.play_spec.board_3,new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"x","x",2099068185));


var G__10759 = seq__10430;
var G__10760 = chunk__10431;
var G__10761 = count__10432;
var G__10762 = (i__10433 + (1));
seq__10430 = G__10759;
chunk__10431 = G__10760;
count__10432 = G__10761;
i__10433 = G__10762;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__10430);
if(temp__5804__auto__){
var seq__10430__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10430__$1)){
var c__5525__auto__ = cljs.core.chunk_first.call(null,seq__10430__$1);
var G__10763 = cljs.core.chunk_rest.call(null,seq__10430__$1);
var G__10764 = c__5525__auto__;
var G__10765 = cljs.core.count.call(null,c__5525__auto__);
var G__10766 = (0);
seq__10430 = G__10763;
chunk__10431 = G__10764;
count__10432 = G__10765;
i__10433 = G__10766;
continue;
} else {
var n = cljs.core.first.call(null,seq__10430__$1);
c3kit.wire.spec_helper.click_BANG_.call(null,["#index-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join(''));

var expected__9548__auto___10767 = new cljs.core.Keyword(null,"o","o",-1350007228);
var actual__9549__auto___10768 = new cljs.core.Keyword(null,"player","player",-97687400).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.screens.play_spec.state));
if(cljs.core._EQ_.call(null,expected__9548__auto___10767,actual__9549__auto___10768)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__9548__auto___10767;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9516__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9516__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__9549__auto___10768;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9516__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9516__auto__);
}
})()," (using =)"].join('')));
}

cljs.core.swap_BANG_.call(null,tic_tac_toe.screens.play_spec.state,cljs.core.assoc,new cljs.core.Keyword(null,"board","board",-1907017633),tic_tac_toe.screens.play_spec.board_3,new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"x","x",2099068185));


var G__10769 = cljs.core.next.call(null,seq__10430__$1);
var G__10770 = null;
var G__10771 = (0);
var G__10772 = (0);
seq__10430 = G__10769;
chunk__10431 = G__10770;
count__10432 = G__10771;
i__10433 = G__10772;
continue;
}
} else {
return null;
}
}
break;
}
});})(_STAR_parent_description_STAR__orig_val__10328_10715,_STAR_parent_description_STAR__temp_val__10329_10716,description__9411__auto____$1,_STAR_parent_description_STAR__orig_val__9962_10661,_STAR_parent_description_STAR__temp_val__9963_10662,description__9411__auto___10660))
,false),speclj.components.new_characteristic.call(null,"clicking button toggles human? to false if mode 2 or 3",((function (_STAR_parent_description_STAR__orig_val__10328_10715,_STAR_parent_description_STAR__temp_val__10329_10716,description__9411__auto____$1,_STAR_parent_description_STAR__orig_val__9962_10661,_STAR_parent_description_STAR__temp_val__9963_10662,description__9411__auto___10660){
return (function (){
var ai_turn_orig_val__10434 = tic_tac_toe.screens.play.ai_turn;
var ai_turn_temp_val__10435 = speclj.stub.stub.call(null,new cljs.core.Keyword(null,"ai-turn","ai-turn",-1581895352),cljs.core.PersistentArrayMap.EMPTY);
(tic_tac_toe.screens.play.ai_turn = ai_turn_temp_val__10435);

try{var seq__10436 = cljs.core.seq.call(null,cljs.core.range.call(null,(9)));
var chunk__10441 = null;
var count__10442 = (0);
var i__10443 = (0);
while(true){
if((i__10443 < count__10442)){
var n = cljs.core._nth.call(null,chunk__10441,i__10443);
var seq__10444_10773 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(3)], null));
var chunk__10445_10774 = null;
var count__10446_10775 = (0);
var i__10447_10776 = (0);
while(true){
if((i__10447_10776 < count__10446_10775)){
var mode_10777 = cljs.core._nth.call(null,chunk__10445_10774,i__10447_10776);
cljs.core.swap_BANG_.call(null,tic_tac_toe.screens.play_spec.state,cljs.core.assoc,new cljs.core.Keyword(null,"mode","mode",654403691),mode_10777);

c3kit.wire.spec_helper.render.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tic_tac_toe.render_screen.render_screen,tic_tac_toe.screens.play_spec.state], null));

c3kit.wire.spec_helper.click_BANG_.call(null,["#index-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join(''));

var expected__9548__auto___10778 = false;
var actual__9549__auto___10779 = new cljs.core.Keyword(null,"human?","human?",-2017219054).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.screens.play_spec.state));
if(cljs.core._EQ_.call(null,expected__9548__auto___10778,actual__9549__auto___10779)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__9548__auto___10778;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9516__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9516__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__9549__auto___10779;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9516__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9516__auto__);
}
})()," (using =)"].join('')));
}

cljs.core.swap_BANG_.call(null,tic_tac_toe.screens.play_spec.state,cljs.core.assoc,new cljs.core.Keyword(null,"board","board",-1907017633),tic_tac_toe.screens.play_spec.board_3,new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"x","x",2099068185));


var G__10780 = seq__10444_10773;
var G__10781 = chunk__10445_10774;
var G__10782 = count__10446_10775;
var G__10783 = (i__10447_10776 + (1));
seq__10444_10773 = G__10780;
chunk__10445_10774 = G__10781;
count__10446_10775 = G__10782;
i__10447_10776 = G__10783;
continue;
} else {
var temp__5804__auto___10784 = cljs.core.seq.call(null,seq__10444_10773);
if(temp__5804__auto___10784){
var seq__10444_10785__$1 = temp__5804__auto___10784;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10444_10785__$1)){
var c__5525__auto___10786 = cljs.core.chunk_first.call(null,seq__10444_10785__$1);
var G__10787 = cljs.core.chunk_rest.call(null,seq__10444_10785__$1);
var G__10788 = c__5525__auto___10786;
var G__10789 = cljs.core.count.call(null,c__5525__auto___10786);
var G__10790 = (0);
seq__10444_10773 = G__10787;
chunk__10445_10774 = G__10788;
count__10446_10775 = G__10789;
i__10447_10776 = G__10790;
continue;
} else {
var mode_10791 = cljs.core.first.call(null,seq__10444_10785__$1);
cljs.core.swap_BANG_.call(null,tic_tac_toe.screens.play_spec.state,cljs.core.assoc,new cljs.core.Keyword(null,"mode","mode",654403691),mode_10791);

c3kit.wire.spec_helper.render.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tic_tac_toe.render_screen.render_screen,tic_tac_toe.screens.play_spec.state], null));

c3kit.wire.spec_helper.click_BANG_.call(null,["#index-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join(''));

var expected__9548__auto___10792 = false;
var actual__9549__auto___10793 = new cljs.core.Keyword(null,"human?","human?",-2017219054).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.screens.play_spec.state));
if(cljs.core._EQ_.call(null,expected__9548__auto___10792,actual__9549__auto___10793)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__9548__auto___10792;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9516__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9516__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__9549__auto___10793;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9516__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9516__auto__);
}
})()," (using =)"].join('')));
}

cljs.core.swap_BANG_.call(null,tic_tac_toe.screens.play_spec.state,cljs.core.assoc,new cljs.core.Keyword(null,"board","board",-1907017633),tic_tac_toe.screens.play_spec.board_3,new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"x","x",2099068185));


var G__10794 = cljs.core.next.call(null,seq__10444_10785__$1);
var G__10795 = null;
var G__10796 = (0);
var G__10797 = (0);
seq__10444_10773 = G__10794;
chunk__10445_10774 = G__10795;
count__10446_10775 = G__10796;
i__10447_10776 = G__10797;
continue;
}
} else {
}
}
break;
}

var G__10798 = seq__10436;
var G__10799 = chunk__10441;
var G__10800 = count__10442;
var G__10801 = (i__10443 + (1));
seq__10436 = G__10798;
chunk__10441 = G__10799;
count__10442 = G__10800;
i__10443 = G__10801;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__10436);
if(temp__5804__auto__){
var seq__10436__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10436__$1)){
var c__5525__auto__ = cljs.core.chunk_first.call(null,seq__10436__$1);
var G__10802 = cljs.core.chunk_rest.call(null,seq__10436__$1);
var G__10803 = c__5525__auto__;
var G__10804 = cljs.core.count.call(null,c__5525__auto__);
var G__10805 = (0);
seq__10436 = G__10802;
chunk__10441 = G__10803;
count__10442 = G__10804;
i__10443 = G__10805;
continue;
} else {
var n = cljs.core.first.call(null,seq__10436__$1);
var seq__10437_10806 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(3)], null));
var chunk__10438_10807 = null;
var count__10439_10808 = (0);
var i__10440_10809 = (0);
while(true){
if((i__10440_10809 < count__10439_10808)){
var mode_10810 = cljs.core._nth.call(null,chunk__10438_10807,i__10440_10809);
cljs.core.swap_BANG_.call(null,tic_tac_toe.screens.play_spec.state,cljs.core.assoc,new cljs.core.Keyword(null,"mode","mode",654403691),mode_10810);

c3kit.wire.spec_helper.render.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tic_tac_toe.render_screen.render_screen,tic_tac_toe.screens.play_spec.state], null));

c3kit.wire.spec_helper.click_BANG_.call(null,["#index-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join(''));

var expected__9548__auto___10811 = false;
var actual__9549__auto___10812 = new cljs.core.Keyword(null,"human?","human?",-2017219054).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.screens.play_spec.state));
if(cljs.core._EQ_.call(null,expected__9548__auto___10811,actual__9549__auto___10812)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__9548__auto___10811;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9516__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9516__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__9549__auto___10812;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9516__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9516__auto__);
}
})()," (using =)"].join('')));
}

cljs.core.swap_BANG_.call(null,tic_tac_toe.screens.play_spec.state,cljs.core.assoc,new cljs.core.Keyword(null,"board","board",-1907017633),tic_tac_toe.screens.play_spec.board_3,new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"x","x",2099068185));


var G__10813 = seq__10437_10806;
var G__10814 = chunk__10438_10807;
var G__10815 = count__10439_10808;
var G__10816 = (i__10440_10809 + (1));
seq__10437_10806 = G__10813;
chunk__10438_10807 = G__10814;
count__10439_10808 = G__10815;
i__10440_10809 = G__10816;
continue;
} else {
var temp__5804__auto___10817__$1 = cljs.core.seq.call(null,seq__10437_10806);
if(temp__5804__auto___10817__$1){
var seq__10437_10818__$1 = temp__5804__auto___10817__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10437_10818__$1)){
var c__5525__auto___10819 = cljs.core.chunk_first.call(null,seq__10437_10818__$1);
var G__10820 = cljs.core.chunk_rest.call(null,seq__10437_10818__$1);
var G__10821 = c__5525__auto___10819;
var G__10822 = cljs.core.count.call(null,c__5525__auto___10819);
var G__10823 = (0);
seq__10437_10806 = G__10820;
chunk__10438_10807 = G__10821;
count__10439_10808 = G__10822;
i__10440_10809 = G__10823;
continue;
} else {
var mode_10824 = cljs.core.first.call(null,seq__10437_10818__$1);
cljs.core.swap_BANG_.call(null,tic_tac_toe.screens.play_spec.state,cljs.core.assoc,new cljs.core.Keyword(null,"mode","mode",654403691),mode_10824);

c3kit.wire.spec_helper.render.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tic_tac_toe.render_screen.render_screen,tic_tac_toe.screens.play_spec.state], null));

c3kit.wire.spec_helper.click_BANG_.call(null,["#index-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join(''));

var expected__9548__auto___10825 = false;
var actual__9549__auto___10826 = new cljs.core.Keyword(null,"human?","human?",-2017219054).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.screens.play_spec.state));
if(cljs.core._EQ_.call(null,expected__9548__auto___10825,actual__9549__auto___10826)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__9548__auto___10825;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9516__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9516__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__9549__auto___10826;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9516__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9516__auto__);
}
})()," (using =)"].join('')));
}

cljs.core.swap_BANG_.call(null,tic_tac_toe.screens.play_spec.state,cljs.core.assoc,new cljs.core.Keyword(null,"board","board",-1907017633),tic_tac_toe.screens.play_spec.board_3,new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"x","x",2099068185));


var G__10827 = cljs.core.next.call(null,seq__10437_10818__$1);
var G__10828 = null;
var G__10829 = (0);
var G__10830 = (0);
seq__10437_10806 = G__10827;
chunk__10438_10807 = G__10828;
count__10439_10808 = G__10829;
i__10440_10809 = G__10830;
continue;
}
} else {
}
}
break;
}

var G__10831 = cljs.core.next.call(null,seq__10436__$1);
var G__10832 = null;
var G__10833 = (0);
var G__10834 = (0);
seq__10436 = G__10831;
chunk__10441 = G__10832;
count__10442 = G__10833;
i__10443 = G__10834;
continue;
}
} else {
return null;
}
}
break;
}
}finally {(tic_tac_toe.screens.play.ai_turn = ai_turn_orig_val__10434);
}});})(_STAR_parent_description_STAR__orig_val__10328_10715,_STAR_parent_description_STAR__temp_val__10329_10716,description__9411__auto____$1,_STAR_parent_description_STAR__orig_val__9962_10661,_STAR_parent_description_STAR__temp_val__9963_10662,description__9411__auto___10660))
,false),speclj.components.new_characteristic.call(null,"clicking button does not toggle human if mode 1",((function (_STAR_parent_description_STAR__orig_val__10328_10715,_STAR_parent_description_STAR__temp_val__10329_10716,description__9411__auto____$1,_STAR_parent_description_STAR__orig_val__9962_10661,_STAR_parent_description_STAR__temp_val__9963_10662,description__9411__auto___10660){
return (function (){
var ai_turn_orig_val__10448 = tic_tac_toe.screens.play.ai_turn;
var ai_turn_temp_val__10449 = speclj.stub.stub.call(null,new cljs.core.Keyword(null,"ai-turn","ai-turn",-1581895352),cljs.core.PersistentArrayMap.EMPTY);
(tic_tac_toe.screens.play.ai_turn = ai_turn_temp_val__10449);

try{var seq__10450 = cljs.core.seq.call(null,cljs.core.range.call(null,(9)));
var chunk__10451 = null;
var count__10452 = (0);
var i__10453 = (0);
while(true){
if((i__10453 < count__10452)){
var n = cljs.core._nth.call(null,chunk__10451,i__10453);
c3kit.wire.spec_helper.click_BANG_.call(null,["#index-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join(''));

var expected__9548__auto___10835 = true;
var actual__9549__auto___10836 = new cljs.core.Keyword(null,"human?","human?",-2017219054).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.screens.play_spec.state));
if(cljs.core._EQ_.call(null,expected__9548__auto___10835,actual__9549__auto___10836)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__9548__auto___10835;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9516__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9516__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__9549__auto___10836;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9516__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9516__auto__);
}
})()," (using =)"].join('')));
}

cljs.core.swap_BANG_.call(null,tic_tac_toe.screens.play_spec.state,cljs.core.assoc,new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"board","board",-1907017633),tic_tac_toe.screens.play_spec.board_4);


var G__10837 = seq__10450;
var G__10838 = chunk__10451;
var G__10839 = count__10452;
var G__10840 = (i__10453 + (1));
seq__10450 = G__10837;
chunk__10451 = G__10838;
count__10452 = G__10839;
i__10453 = G__10840;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__10450);
if(temp__5804__auto__){
var seq__10450__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10450__$1)){
var c__5525__auto__ = cljs.core.chunk_first.call(null,seq__10450__$1);
var G__10841 = cljs.core.chunk_rest.call(null,seq__10450__$1);
var G__10842 = c__5525__auto__;
var G__10843 = cljs.core.count.call(null,c__5525__auto__);
var G__10844 = (0);
seq__10450 = G__10841;
chunk__10451 = G__10842;
count__10452 = G__10843;
i__10453 = G__10844;
continue;
} else {
var n = cljs.core.first.call(null,seq__10450__$1);
c3kit.wire.spec_helper.click_BANG_.call(null,["#index-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join(''));

var expected__9548__auto___10845 = true;
var actual__9549__auto___10846 = new cljs.core.Keyword(null,"human?","human?",-2017219054).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.screens.play_spec.state));
if(cljs.core._EQ_.call(null,expected__9548__auto___10845,actual__9549__auto___10846)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__9548__auto___10845;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9516__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9516__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__9549__auto___10846;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9516__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9516__auto__);
}
})()," (using =)"].join('')));
}

cljs.core.swap_BANG_.call(null,tic_tac_toe.screens.play_spec.state,cljs.core.assoc,new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"board","board",-1907017633),tic_tac_toe.screens.play_spec.board_4);


var G__10847 = cljs.core.next.call(null,seq__10450__$1);
var G__10848 = null;
var G__10849 = (0);
var G__10850 = (0);
seq__10450 = G__10847;
chunk__10451 = G__10848;
count__10452 = G__10849;
i__10453 = G__10850;
continue;
}
} else {
return null;
}
}
break;
}
}finally {(tic_tac_toe.screens.play.ai_turn = ai_turn_orig_val__10448);
}});})(_STAR_parent_description_STAR__orig_val__10328_10715,_STAR_parent_description_STAR__temp_val__10329_10716,description__9411__auto____$1,_STAR_parent_description_STAR__orig_val__9962_10661,_STAR_parent_description_STAR__temp_val__9963_10662,description__9411__auto___10660))
,false),speclj.components.new_characteristic.call(null,"clicking button updates game-state in state",((function (_STAR_parent_description_STAR__orig_val__10328_10715,_STAR_parent_description_STAR__temp_val__10329_10716,description__9411__auto____$1,_STAR_parent_description_STAR__orig_val__9962_10661,_STAR_parent_description_STAR__temp_val__9963_10662,description__9411__auto___10660){
return (function (){
cljs.core.swap_BANG_.call(null,tic_tac_toe.screens.play_spec.state,cljs.core.assoc,new cljs.core.Keyword(null,"board","board",-1907017633),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"o","o",-1350007228),new cljs.core.Keyword(null,"o","o",-1350007228),(6),(7),(8),(9)], null));

c3kit.wire.spec_helper.click_BANG_.call(null,"#index-0");

var expected__9548__auto__ = "X wins!";
var actual__9549__auto__ = new cljs.core.Keyword(null,"game-state","game-state",935682735).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.screens.play_spec.state));
if(cljs.core._EQ_.call(null,expected__9548__auto__,actual__9549__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__9548__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9516__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9516__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__9549__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9516__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9516__auto__);
}
})()," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__10328_10715,_STAR_parent_description_STAR__temp_val__10329_10716,description__9411__auto____$1,_STAR_parent_description_STAR__orig_val__9962_10661,_STAR_parent_description_STAR__temp_val__9963_10662,description__9411__auto___10660))
,false),speclj.components.new_characteristic.call(null,"clicking button adds token to button HTML",((function (_STAR_parent_description_STAR__orig_val__10328_10715,_STAR_parent_description_STAR__temp_val__10329_10716,description__9411__auto____$1,_STAR_parent_description_STAR__orig_val__9962_10661,_STAR_parent_description_STAR__temp_val__9963_10662,description__9411__auto___10660){
return (function (){
var seq__10454 = cljs.core.seq.call(null,cljs.core.range.call(null,(9)));
var chunk__10455 = null;
var count__10456 = (0);
var i__10457 = (0);
while(true){
if((i__10457 < count__10456)){
var n = cljs.core._nth.call(null,chunk__10455,i__10457);
c3kit.wire.spec_helper.click_BANG_.call(null,["#index-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join(''));

var expected__9548__auto___10851 = "X";
var actual__9549__auto___10852 = c3kit.wire.spec_helper.text.call(null,["#index-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join(''));
if(cljs.core._EQ_.call(null,expected__9548__auto___10851,actual__9549__auto___10852)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__9548__auto___10851;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9516__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9516__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__9549__auto___10852;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9516__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9516__auto__);
}
})()," (using =)"].join('')));
}

cljs.core.reset_BANG_.call(null,tic_tac_toe.screens.play_spec.state,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"board","board",-1907017633),tic_tac_toe.screens.play_spec.board_3,new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"current-screen","current-screen",-1454713691),new cljs.core.Keyword(null,"play","play",-580418022),new cljs.core.Keyword(null,"mode","mode",654403691),(1)], null));


var G__10853 = seq__10454;
var G__10854 = chunk__10455;
var G__10855 = count__10456;
var G__10856 = (i__10457 + (1));
seq__10454 = G__10853;
chunk__10455 = G__10854;
count__10456 = G__10855;
i__10457 = G__10856;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__10454);
if(temp__5804__auto__){
var seq__10454__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10454__$1)){
var c__5525__auto__ = cljs.core.chunk_first.call(null,seq__10454__$1);
var G__10857 = cljs.core.chunk_rest.call(null,seq__10454__$1);
var G__10858 = c__5525__auto__;
var G__10859 = cljs.core.count.call(null,c__5525__auto__);
var G__10860 = (0);
seq__10454 = G__10857;
chunk__10455 = G__10858;
count__10456 = G__10859;
i__10457 = G__10860;
continue;
} else {
var n = cljs.core.first.call(null,seq__10454__$1);
c3kit.wire.spec_helper.click_BANG_.call(null,["#index-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join(''));

var expected__9548__auto___10861 = "X";
var actual__9549__auto___10862 = c3kit.wire.spec_helper.text.call(null,["#index-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join(''));
if(cljs.core._EQ_.call(null,expected__9548__auto___10861,actual__9549__auto___10862)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__9548__auto___10861;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9516__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9516__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__9549__auto___10862;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9516__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9516__auto__);
}
})()," (using =)"].join('')));
}

cljs.core.reset_BANG_.call(null,tic_tac_toe.screens.play_spec.state,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"board","board",-1907017633),tic_tac_toe.screens.play_spec.board_3,new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"current-screen","current-screen",-1454713691),new cljs.core.Keyword(null,"play","play",-580418022),new cljs.core.Keyword(null,"mode","mode",654403691),(1)], null));


var G__10863 = cljs.core.next.call(null,seq__10454__$1);
var G__10864 = null;
var G__10865 = (0);
var G__10866 = (0);
seq__10454 = G__10863;
chunk__10455 = G__10864;
count__10456 = G__10865;
i__10457 = G__10866;
continue;
}
} else {
return null;
}
}
break;
}
});})(_STAR_parent_description_STAR__orig_val__10328_10715,_STAR_parent_description_STAR__temp_val__10329_10716,description__9411__auto____$1,_STAR_parent_description_STAR__orig_val__9962_10661,_STAR_parent_description_STAR__temp_val__9963_10662,description__9411__auto___10660))
,false),speclj.components.new_characteristic.call(null,"clicking button disables button",((function (_STAR_parent_description_STAR__orig_val__10328_10715,_STAR_parent_description_STAR__temp_val__10329_10716,description__9411__auto____$1,_STAR_parent_description_STAR__orig_val__9962_10661,_STAR_parent_description_STAR__temp_val__9963_10662,description__9411__auto___10660){
return (function (){
var seq__10458 = cljs.core.seq.call(null,cljs.core.range.call(null,(9)));
var chunk__10459 = null;
var count__10460 = (0);
var i__10461 = (0);
while(true){
if((i__10461 < count__10460)){
var n = cljs.core._nth.call(null,chunk__10459,i__10461);
c3kit.wire.spec_helper.click_BANG_.call(null,["#index-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join(''));

var expected__9548__auto___10867 = true;
var actual__9549__auto___10868 = c3kit.wire.spec_helper.disabled_QMARK_.call(null,["#index-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join(''));
if(cljs.core._EQ_.call(null,expected__9548__auto___10867,actual__9549__auto___10868)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__9548__auto___10867;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9516__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9516__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__9549__auto___10868;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9516__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9516__auto__);
}
})()," (using =)"].join('')));
}

cljs.core.reset_BANG_.call(null,tic_tac_toe.screens.play_spec.state,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"board","board",-1907017633),tic_tac_toe.screens.play_spec.board_3,new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"current-screen","current-screen",-1454713691),new cljs.core.Keyword(null,"play","play",-580418022),new cljs.core.Keyword(null,"mode","mode",654403691),(1)], null));


var G__10869 = seq__10458;
var G__10870 = chunk__10459;
var G__10871 = count__10460;
var G__10872 = (i__10461 + (1));
seq__10458 = G__10869;
chunk__10459 = G__10870;
count__10460 = G__10871;
i__10461 = G__10872;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__10458);
if(temp__5804__auto__){
var seq__10458__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10458__$1)){
var c__5525__auto__ = cljs.core.chunk_first.call(null,seq__10458__$1);
var G__10873 = cljs.core.chunk_rest.call(null,seq__10458__$1);
var G__10874 = c__5525__auto__;
var G__10875 = cljs.core.count.call(null,c__5525__auto__);
var G__10876 = (0);
seq__10458 = G__10873;
chunk__10459 = G__10874;
count__10460 = G__10875;
i__10461 = G__10876;
continue;
} else {
var n = cljs.core.first.call(null,seq__10458__$1);
c3kit.wire.spec_helper.click_BANG_.call(null,["#index-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join(''));

var expected__9548__auto___10877 = true;
var actual__9549__auto___10878 = c3kit.wire.spec_helper.disabled_QMARK_.call(null,["#index-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join(''));
if(cljs.core._EQ_.call(null,expected__9548__auto___10877,actual__9549__auto___10878)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__9548__auto___10877;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9516__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9516__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__9549__auto___10878;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9516__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9516__auto__);
}
})()," (using =)"].join('')));
}

cljs.core.reset_BANG_.call(null,tic_tac_toe.screens.play_spec.state,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"board","board",-1907017633),tic_tac_toe.screens.play_spec.board_3,new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"current-screen","current-screen",-1454713691),new cljs.core.Keyword(null,"play","play",-580418022),new cljs.core.Keyword(null,"mode","mode",654403691),(1)], null));


var G__10879 = cljs.core.next.call(null,seq__10458__$1);
var G__10880 = null;
var G__10881 = (0);
var G__10882 = (0);
seq__10458 = G__10879;
chunk__10459 = G__10880;
count__10460 = G__10881;
i__10461 = G__10882;
continue;
}
} else {
return null;
}
}
break;
}
});})(_STAR_parent_description_STAR__orig_val__10328_10715,_STAR_parent_description_STAR__temp_val__10329_10716,description__9411__auto____$1,_STAR_parent_description_STAR__orig_val__9962_10661,_STAR_parent_description_STAR__temp_val__9963_10662,description__9411__auto___10660))
,false),speclj.components.new_characteristic.call(null,"all buttons disabled when game-over",((function (_STAR_parent_description_STAR__orig_val__10328_10715,_STAR_parent_description_STAR__temp_val__10329_10716,description__9411__auto____$1,_STAR_parent_description_STAR__orig_val__9962_10661,_STAR_parent_description_STAR__temp_val__9963_10662,description__9411__auto___10660){
return (function (){
var seq__10462 = cljs.core.seq.call(null,cljs.core.range.call(null,(9)));
var chunk__10467 = null;
var count__10468 = (0);
var i__10469 = (0);
while(true){
if((i__10469 < count__10468)){
var n = cljs.core._nth.call(null,chunk__10467,i__10469);
var seq__10470_10883 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["X wins!","O wins!","It is a tie!"], null));
var chunk__10471_10884 = null;
var count__10472_10885 = (0);
var i__10473_10886 = (0);
while(true){
if((i__10473_10886 < count__10472_10885)){
var states_10887 = cljs.core._nth.call(null,chunk__10471_10884,i__10473_10886);
cljs.core.swap_BANG_.call(null,tic_tac_toe.screens.play_spec.state,cljs.core.assoc,new cljs.core.Keyword(null,"game-state","game-state",935682735),states_10887);

c3kit.wire.spec_helper.render.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tic_tac_toe.render_screen.render_screen,tic_tac_toe.screens.play_spec.state], null));

var expected__9548__auto___10888 = true;
var actual__9549__auto___10889 = c3kit.wire.spec_helper.disabled_QMARK_.call(null,["#index-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join(''));
if(cljs.core._EQ_.call(null,expected__9548__auto___10888,actual__9549__auto___10889)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__9548__auto___10888;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9516__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9516__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__9549__auto___10889;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9516__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9516__auto__);
}
})()," (using =)"].join('')));
}

cljs.core.reset_BANG_.call(null,tic_tac_toe.screens.play_spec.state,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"board","board",-1907017633),tic_tac_toe.screens.play_spec.board_3,new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"current-screen","current-screen",-1454713691),new cljs.core.Keyword(null,"play","play",-580418022),new cljs.core.Keyword(null,"mode","mode",654403691),(1)], null));


var G__10890 = seq__10470_10883;
var G__10891 = chunk__10471_10884;
var G__10892 = count__10472_10885;
var G__10893 = (i__10473_10886 + (1));
seq__10470_10883 = G__10890;
chunk__10471_10884 = G__10891;
count__10472_10885 = G__10892;
i__10473_10886 = G__10893;
continue;
} else {
var temp__5804__auto___10894 = cljs.core.seq.call(null,seq__10470_10883);
if(temp__5804__auto___10894){
var seq__10470_10895__$1 = temp__5804__auto___10894;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10470_10895__$1)){
var c__5525__auto___10896 = cljs.core.chunk_first.call(null,seq__10470_10895__$1);
var G__10897 = cljs.core.chunk_rest.call(null,seq__10470_10895__$1);
var G__10898 = c__5525__auto___10896;
var G__10899 = cljs.core.count.call(null,c__5525__auto___10896);
var G__10900 = (0);
seq__10470_10883 = G__10897;
chunk__10471_10884 = G__10898;
count__10472_10885 = G__10899;
i__10473_10886 = G__10900;
continue;
} else {
var states_10901 = cljs.core.first.call(null,seq__10470_10895__$1);
cljs.core.swap_BANG_.call(null,tic_tac_toe.screens.play_spec.state,cljs.core.assoc,new cljs.core.Keyword(null,"game-state","game-state",935682735),states_10901);

c3kit.wire.spec_helper.render.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tic_tac_toe.render_screen.render_screen,tic_tac_toe.screens.play_spec.state], null));

var expected__9548__auto___10902 = true;
var actual__9549__auto___10903 = c3kit.wire.spec_helper.disabled_QMARK_.call(null,["#index-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join(''));
if(cljs.core._EQ_.call(null,expected__9548__auto___10902,actual__9549__auto___10903)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__9548__auto___10902;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9516__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9516__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__9549__auto___10903;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9516__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9516__auto__);
}
})()," (using =)"].join('')));
}

cljs.core.reset_BANG_.call(null,tic_tac_toe.screens.play_spec.state,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"board","board",-1907017633),tic_tac_toe.screens.play_spec.board_3,new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"current-screen","current-screen",-1454713691),new cljs.core.Keyword(null,"play","play",-580418022),new cljs.core.Keyword(null,"mode","mode",654403691),(1)], null));


var G__10904 = cljs.core.next.call(null,seq__10470_10895__$1);
var G__10905 = null;
var G__10906 = (0);
var G__10907 = (0);
seq__10470_10883 = G__10904;
chunk__10471_10884 = G__10905;
count__10472_10885 = G__10906;
i__10473_10886 = G__10907;
continue;
}
} else {
}
}
break;
}

var G__10908 = seq__10462;
var G__10909 = chunk__10467;
var G__10910 = count__10468;
var G__10911 = (i__10469 + (1));
seq__10462 = G__10908;
chunk__10467 = G__10909;
count__10468 = G__10910;
i__10469 = G__10911;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__10462);
if(temp__5804__auto__){
var seq__10462__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10462__$1)){
var c__5525__auto__ = cljs.core.chunk_first.call(null,seq__10462__$1);
var G__10912 = cljs.core.chunk_rest.call(null,seq__10462__$1);
var G__10913 = c__5525__auto__;
var G__10914 = cljs.core.count.call(null,c__5525__auto__);
var G__10915 = (0);
seq__10462 = G__10912;
chunk__10467 = G__10913;
count__10468 = G__10914;
i__10469 = G__10915;
continue;
} else {
var n = cljs.core.first.call(null,seq__10462__$1);
var seq__10463_10916 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["X wins!","O wins!","It is a tie!"], null));
var chunk__10464_10917 = null;
var count__10465_10918 = (0);
var i__10466_10919 = (0);
while(true){
if((i__10466_10919 < count__10465_10918)){
var states_10920 = cljs.core._nth.call(null,chunk__10464_10917,i__10466_10919);
cljs.core.swap_BANG_.call(null,tic_tac_toe.screens.play_spec.state,cljs.core.assoc,new cljs.core.Keyword(null,"game-state","game-state",935682735),states_10920);

c3kit.wire.spec_helper.render.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tic_tac_toe.render_screen.render_screen,tic_tac_toe.screens.play_spec.state], null));

var expected__9548__auto___10921 = true;
var actual__9549__auto___10922 = c3kit.wire.spec_helper.disabled_QMARK_.call(null,["#index-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join(''));
if(cljs.core._EQ_.call(null,expected__9548__auto___10921,actual__9549__auto___10922)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__9548__auto___10921;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9516__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9516__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__9549__auto___10922;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9516__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9516__auto__);
}
})()," (using =)"].join('')));
}

cljs.core.reset_BANG_.call(null,tic_tac_toe.screens.play_spec.state,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"board","board",-1907017633),tic_tac_toe.screens.play_spec.board_3,new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"current-screen","current-screen",-1454713691),new cljs.core.Keyword(null,"play","play",-580418022),new cljs.core.Keyword(null,"mode","mode",654403691),(1)], null));


var G__10923 = seq__10463_10916;
var G__10924 = chunk__10464_10917;
var G__10925 = count__10465_10918;
var G__10926 = (i__10466_10919 + (1));
seq__10463_10916 = G__10923;
chunk__10464_10917 = G__10924;
count__10465_10918 = G__10925;
i__10466_10919 = G__10926;
continue;
} else {
var temp__5804__auto___10927__$1 = cljs.core.seq.call(null,seq__10463_10916);
if(temp__5804__auto___10927__$1){
var seq__10463_10928__$1 = temp__5804__auto___10927__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10463_10928__$1)){
var c__5525__auto___10929 = cljs.core.chunk_first.call(null,seq__10463_10928__$1);
var G__10930 = cljs.core.chunk_rest.call(null,seq__10463_10928__$1);
var G__10931 = c__5525__auto___10929;
var G__10932 = cljs.core.count.call(null,c__5525__auto___10929);
var G__10933 = (0);
seq__10463_10916 = G__10930;
chunk__10464_10917 = G__10931;
count__10465_10918 = G__10932;
i__10466_10919 = G__10933;
continue;
} else {
var states_10934 = cljs.core.first.call(null,seq__10463_10928__$1);
cljs.core.swap_BANG_.call(null,tic_tac_toe.screens.play_spec.state,cljs.core.assoc,new cljs.core.Keyword(null,"game-state","game-state",935682735),states_10934);

c3kit.wire.spec_helper.render.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tic_tac_toe.render_screen.render_screen,tic_tac_toe.screens.play_spec.state], null));

var expected__9548__auto___10935 = true;
var actual__9549__auto___10936 = c3kit.wire.spec_helper.disabled_QMARK_.call(null,["#index-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join(''));
if(cljs.core._EQ_.call(null,expected__9548__auto___10935,actual__9549__auto___10936)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__9548__auto___10935;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9516__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9516__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__9549__auto___10936;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9516__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9516__auto__);
}
})()," (using =)"].join('')));
}

cljs.core.reset_BANG_.call(null,tic_tac_toe.screens.play_spec.state,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"board","board",-1907017633),tic_tac_toe.screens.play_spec.board_3,new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"current-screen","current-screen",-1454713691),new cljs.core.Keyword(null,"play","play",-580418022),new cljs.core.Keyword(null,"mode","mode",654403691),(1)], null));


var G__10937 = cljs.core.next.call(null,seq__10463_10928__$1);
var G__10938 = null;
var G__10939 = (0);
var G__10940 = (0);
seq__10463_10916 = G__10937;
chunk__10464_10917 = G__10938;
count__10465_10918 = G__10939;
i__10466_10919 = G__10940;
continue;
}
} else {
}
}
break;
}

var G__10941 = cljs.core.next.call(null,seq__10462__$1);
var G__10942 = null;
var G__10943 = (0);
var G__10944 = (0);
seq__10462 = G__10941;
chunk__10467 = G__10942;
count__10468 = G__10943;
i__10469 = G__10944;
continue;
}
} else {
return null;
}
}
break;
}
});})(_STAR_parent_description_STAR__orig_val__10328_10715,_STAR_parent_description_STAR__temp_val__10329_10716,description__9411__auto____$1,_STAR_parent_description_STAR__orig_val__9962_10661,_STAR_parent_description_STAR__temp_val__9963_10662,description__9411__auto___10660))
,false),speclj.components.new_characteristic.call(null,"clicking button triggers AI if mode 2 or 3",((function (_STAR_parent_description_STAR__orig_val__10328_10715,_STAR_parent_description_STAR__temp_val__10329_10716,description__9411__auto____$1,_STAR_parent_description_STAR__orig_val__9962_10661,_STAR_parent_description_STAR__temp_val__9963_10662,description__9411__auto___10660){
return (function (){
var take_turn_orig_val__10474 = tic_tac_toe.player.take_turn;
var defer_orig_val__10475 = tic_tac_toe.screens.play.defer;
var take_turn_temp_val__10476 = speclj.stub.stub.call(null,new cljs.core.Keyword(null,"turn","turn",75759344),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"return","return",-1891502105),tic_tac_toe.screens.play_spec.board_3], null));
var defer_temp_val__10477 = (function (f){
return f.call(null);
});
(tic_tac_toe.player.take_turn = take_turn_temp_val__10476);

(tic_tac_toe.screens.play.defer = defer_temp_val__10477);

try{var seq__10478 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(3)], null));
var chunk__10491 = null;
var count__10492 = (0);
var i__10493 = (0);
while(true){
if((i__10493 < count__10492)){
var ai = cljs.core._nth.call(null,chunk__10491,i__10493);
var seq__10494_10945 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(3)], null));
var chunk__10499_10946 = null;
var count__10500_10947 = (0);
var i__10501_10948 = (0);
while(true){
if((i__10501_10948 < count__10500_10947)){
var mode_10949 = cljs.core._nth.call(null,chunk__10499_10946,i__10501_10948);
var seq__10502_10950 = cljs.core.seq.call(null,cljs.core.range.call(null,(9)));
var chunk__10503_10951 = null;
var count__10504_10952 = (0);
var i__10505_10953 = (0);
while(true){
if((i__10505_10953 < count__10504_10952)){
var n_10954 = cljs.core._nth.call(null,chunk__10503_10951,i__10505_10953);
cljs.core.swap_BANG_.call(null,tic_tac_toe.screens.play_spec.state,cljs.core.assoc,new cljs.core.Keyword(null,"mode","mode",654403691),mode_10949,new cljs.core.Keyword(null,"first-ai-level","first-ai-level",1004633644),ai,new cljs.core.Keyword(null,"player","player",-97687400),((cljs.core._EQ_.call(null,(2),mode_10949))?new cljs.core.Keyword(null,"x","x",2099068185):new cljs.core.Keyword(null,"o","o",-1350007228)),new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"gui","gui",604532813));

c3kit.wire.spec_helper.render.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tic_tac_toe.render_screen.render_screen,tic_tac_toe.screens.play_spec.state], null));

c3kit.wire.spec_helper.click_BANG_.call(null,["#index-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n_10954)].join(''));

var name__9795__auto___10955 = new cljs.core.Keyword(null,"turn","turn",75759344);
var options__9796__auto___10956 = cljs.core.PersistentArrayMap.EMPTY;
var invocations__9797__auto___10957 = speclj.stub.invocations_of.call(null,name__9795__auto___10955);
var times__9798__auto___10958 = new cljs.core.Keyword(null,"times","times",1671571467).cljs$core$IFn$_invoke$arity$1(options__9796__auto___10956);
var times_QMARK___9799__auto___10959 = typeof times__9798__auto___10958 === 'number';
var check_params_QMARK___9800__auto___10960 = cljs.core.contains_QMARK_.call(null,options__9796__auto___10956,new cljs.core.Keyword(null,"with","with",-1536296876));
var with__9801__auto___10961 = new cljs.core.Keyword(null,"with","with",-1536296876).cljs$core$IFn$_invoke$arity$1(options__9796__auto___10956);
var with__9801__auto___10962__$1 = (((with__9801__auto___10961 == null))?cljs.core.PersistentVector.EMPTY:with__9801__auto___10961);
var invocations_str__9802__auto___10963 = ((function (seq__10502_10950,chunk__10503_10951,count__10504_10952,i__10505_10953,seq__10494_10945,chunk__10499_10946,count__10500_10947,i__10501_10948,seq__10478,chunk__10491,count__10492,i__10493,name__9795__auto___10955,options__9796__auto___10956,invocations__9797__auto___10957,times__9798__auto___10958,times_QMARK___9799__auto___10959,check_params_QMARK___9800__auto___10960,with__9801__auto___10961,with__9801__auto___10962__$1,n_10954,mode_10949,ai,take_turn_orig_val__10474,defer_orig_val__10475,take_turn_temp_val__10476,defer_temp_val__10477,_STAR_parent_description_STAR__orig_val__10328_10715,_STAR_parent_description_STAR__temp_val__10329_10716,description__9411__auto____$1,_STAR_parent_description_STAR__orig_val__9962_10661,_STAR_parent_description_STAR__temp_val__9963_10662,description__9411__auto___10660){
return (function (p1__9792__9803__auto__){
if(cljs.core._EQ_.call(null,(1),p1__9792__9803__auto__)){
return "invocation";
} else {
return "invocations";
}
});})(seq__10502_10950,chunk__10503_10951,count__10504_10952,i__10505_10953,seq__10494_10945,chunk__10499_10946,count__10500_10947,i__10501_10948,seq__10478,chunk__10491,count__10492,i__10493,name__9795__auto___10955,options__9796__auto___10956,invocations__9797__auto___10957,times__9798__auto___10958,times_QMARK___9799__auto___10959,check_params_QMARK___9800__auto___10960,with__9801__auto___10961,with__9801__auto___10962__$1,n_10954,mode_10949,ai,take_turn_orig_val__10474,defer_orig_val__10475,take_turn_temp_val__10476,defer_temp_val__10477,_STAR_parent_description_STAR__orig_val__10328_10715,_STAR_parent_description_STAR__temp_val__10329_10716,description__9411__auto____$1,_STAR_parent_description_STAR__orig_val__9962_10661,_STAR_parent_description_STAR__temp_val__9963_10662,description__9411__auto___10660))
;
if(((times_QMARK___9799__auto___10959) && (check_params_QMARK___9800__auto___10960))){
var matching_invocations__9804__auto___10964 = cljs.core.filter.call(null,((function (seq__10502_10950,chunk__10503_10951,count__10504_10952,i__10505_10953,seq__10494_10945,chunk__10499_10946,count__10500_10947,i__10501_10948,seq__10478,chunk__10491,count__10492,i__10493,name__9795__auto___10955,options__9796__auto___10956,invocations__9797__auto___10957,times__9798__auto___10958,times_QMARK___9799__auto___10959,check_params_QMARK___9800__auto___10960,with__9801__auto___10961,with__9801__auto___10962__$1,invocations_str__9802__auto___10963,n_10954,mode_10949,ai,take_turn_orig_val__10474,defer_orig_val__10475,take_turn_temp_val__10476,defer_temp_val__10477,_STAR_parent_description_STAR__orig_val__10328_10715,_STAR_parent_description_STAR__temp_val__10329_10716,description__9411__auto____$1,_STAR_parent_description_STAR__orig_val__9962_10661,_STAR_parent_description_STAR__temp_val__9963_10662,description__9411__auto___10660){
return (function (p1__9793__9805__auto__){
return speclj.stub.params_match_QMARK_.call(null,with__9801__auto___10962__$1,p1__9793__9805__auto__);
});})(seq__10502_10950,chunk__10503_10951,count__10504_10952,i__10505_10953,seq__10494_10945,chunk__10499_10946,count__10500_10947,i__10501_10948,seq__10478,chunk__10491,count__10492,i__10493,name__9795__auto___10955,options__9796__auto___10956,invocations__9797__auto___10957,times__9798__auto___10958,times_QMARK___9799__auto___10959,check_params_QMARK___9800__auto___10960,with__9801__auto___10961,with__9801__auto___10962__$1,invocations_str__9802__auto___10963,n_10954,mode_10949,ai,take_turn_orig_val__10474,defer_orig_val__10475,take_turn_temp_val__10476,defer_temp_val__10477,_STAR_parent_description_STAR__orig_val__10328_10715,_STAR_parent_description_STAR__temp_val__10329_10716,description__9411__auto____$1,_STAR_parent_description_STAR__orig_val__9962_10661,_STAR_parent_description_STAR__temp_val__9963_10662,description__9411__auto___10660))
,invocations__9797__auto___10957);
var matching_count__9806__auto___10965 = cljs.core.count.call(null,matching_invocations__9804__auto___10964);
if(cljs.core._EQ_.call(null,times__9798__auto___10958,matching_count__9806__auto___10965)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(times__9798__auto___10958)," ",invocations_str__9802__auto___10963.call(null,times__9798__auto___10958)," of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__9795__auto___10955)," with ",cljs.core.pr_str.call(null,with__9801__auto___10962__$1),speclj.platform.endl,"     got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(matching_count__9806__auto___10965)," ",invocations_str__9802__auto___10963.call(null,matching_count__9806__auto___10965)].join('')));
}
} else {
if(check_params_QMARK___9800__auto___10960){
if(cljs.core.truth_(cljs.core.some.call(null,((function (seq__10502_10950,chunk__10503_10951,count__10504_10952,i__10505_10953,seq__10494_10945,chunk__10499_10946,count__10500_10947,i__10501_10948,seq__10478,chunk__10491,count__10492,i__10493,name__9795__auto___10955,options__9796__auto___10956,invocations__9797__auto___10957,times__9798__auto___10958,times_QMARK___9799__auto___10959,check_params_QMARK___9800__auto___10960,with__9801__auto___10961,with__9801__auto___10962__$1,invocations_str__9802__auto___10963,n_10954,mode_10949,ai,take_turn_orig_val__10474,defer_orig_val__10475,take_turn_temp_val__10476,defer_temp_val__10477,_STAR_parent_description_STAR__orig_val__10328_10715,_STAR_parent_description_STAR__temp_val__10329_10716,description__9411__auto____$1,_STAR_parent_description_STAR__orig_val__9962_10661,_STAR_parent_description_STAR__temp_val__9963_10662,description__9411__auto___10660){
return (function (p1__9794__9807__auto__){
return speclj.stub.params_match_QMARK_.call(null,with__9801__auto___10962__$1,p1__9794__9807__auto__);
});})(seq__10502_10950,chunk__10503_10951,count__10504_10952,i__10505_10953,seq__10494_10945,chunk__10499_10946,count__10500_10947,i__10501_10948,seq__10478,chunk__10491,count__10492,i__10493,name__9795__auto___10955,options__9796__auto___10956,invocations__9797__auto___10957,times__9798__auto___10958,times_QMARK___9799__auto___10959,check_params_QMARK___9800__auto___10960,with__9801__auto___10961,with__9801__auto___10962__$1,invocations_str__9802__auto___10963,n_10954,mode_10949,ai,take_turn_orig_val__10474,defer_orig_val__10475,take_turn_temp_val__10476,defer_temp_val__10477,_STAR_parent_description_STAR__orig_val__10328_10715,_STAR_parent_description_STAR__temp_val__10329_10716,description__9411__auto____$1,_STAR_parent_description_STAR__orig_val__9962_10661,_STAR_parent_description_STAR__temp_val__9963_10662,description__9411__auto___10660))
,invocations__9797__auto___10957))){
} else {
throw (new speclj.platform.SpecFailure(["Expected: invocation of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__9795__auto___10955)," with ",cljs.core.pr_str.call(null,with__9801__auto___10962__$1),speclj.platform.endl,"     got: ",cljs.core.pr_str.call(null,invocations__9797__auto___10957)].join('')));
}
} else {
if(times_QMARK___9799__auto___10959){
if(cljs.core._EQ_.call(null,times__9798__auto___10958,cljs.core.count.call(null,invocations__9797__auto___10957))){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(times__9798__auto___10958)," ",invocations_str__9802__auto___10963.call(null,times__9798__auto___10958)," of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__9795__auto___10955),speclj.platform.endl,"     got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,invocations__9797__auto___10957))].join('')));
}
} else {
if(cljs.core.seq.call(null,invocations__9797__auto___10957)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: an invocation of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__9795__auto___10955),speclj.platform.endl,"     got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,invocations__9797__auto___10957))].join('')));
}

}
}
}

var expected__9548__auto___10966 = ((cljs.core._EQ_.call(null,(2),mode_10949))?new cljs.core.Keyword(null,"x","x",2099068185):new cljs.core.Keyword(null,"o","o",-1350007228));
var actual__9549__auto___10967 = new cljs.core.Keyword(null,"player","player",-97687400).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.screens.play_spec.state));
if(cljs.core._EQ_.call(null,expected__9548__auto___10966,actual__9549__auto___10967)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__9548__auto___10966;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9516__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9516__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__9549__auto___10967;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9516__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9516__auto__);
}
})()," (using =)"].join('')));
}

cljs.core.reset_BANG_.call(null,tic_tac_toe.screens.play_spec.state,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"board","board",-1907017633),tic_tac_toe.screens.play_spec.board_3,new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"current-screen","current-screen",-1454713691),new cljs.core.Keyword(null,"play","play",-580418022)], null));


var G__10968 = seq__10502_10950;
var G__10969 = chunk__10503_10951;
var G__10970 = count__10504_10952;
var G__10971 = (i__10505_10953 + (1));
seq__10502_10950 = G__10968;
chunk__10503_10951 = G__10969;
count__10504_10952 = G__10970;
i__10505_10953 = G__10971;
continue;
} else {
var temp__5804__auto___10972 = cljs.core.seq.call(null,seq__10502_10950);
if(temp__5804__auto___10972){
var seq__10502_10973__$1 = temp__5804__auto___10972;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10502_10973__$1)){
var c__5525__auto___10974 = cljs.core.chunk_first.call(null,seq__10502_10973__$1);
var G__10975 = cljs.core.chunk_rest.call(null,seq__10502_10973__$1);
var G__10976 = c__5525__auto___10974;
var G__10977 = cljs.core.count.call(null,c__5525__auto___10974);
var G__10978 = (0);
seq__10502_10950 = G__10975;
chunk__10503_10951 = G__10976;
count__10504_10952 = G__10977;
i__10505_10953 = G__10978;
continue;
} else {
var n_10979 = cljs.core.first.call(null,seq__10502_10973__$1);
cljs.core.swap_BANG_.call(null,tic_tac_toe.screens.play_spec.state,cljs.core.assoc,new cljs.core.Keyword(null,"mode","mode",654403691),mode_10949,new cljs.core.Keyword(null,"first-ai-level","first-ai-level",1004633644),ai,new cljs.core.Keyword(null,"player","player",-97687400),((cljs.core._EQ_.call(null,(2),mode_10949))?new cljs.core.Keyword(null,"x","x",2099068185):new cljs.core.Keyword(null,"o","o",-1350007228)),new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"gui","gui",604532813));

c3kit.wire.spec_helper.render.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tic_tac_toe.render_screen.render_screen,tic_tac_toe.screens.play_spec.state], null));

c3kit.wire.spec_helper.click_BANG_.call(null,["#index-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n_10979)].join(''));

var name__9795__auto___10980 = new cljs.core.Keyword(null,"turn","turn",75759344);
var options__9796__auto___10981 = cljs.core.PersistentArrayMap.EMPTY;
var invocations__9797__auto___10982 = speclj.stub.invocations_of.call(null,name__9795__auto___10980);
var times__9798__auto___10983 = new cljs.core.Keyword(null,"times","times",1671571467).cljs$core$IFn$_invoke$arity$1(options__9796__auto___10981);
var times_QMARK___9799__auto___10984 = typeof times__9798__auto___10983 === 'number';
var check_params_QMARK___9800__auto___10985 = cljs.core.contains_QMARK_.call(null,options__9796__auto___10981,new cljs.core.Keyword(null,"with","with",-1536296876));
var with__9801__auto___10986 = new cljs.core.Keyword(null,"with","with",-1536296876).cljs$core$IFn$_invoke$arity$1(options__9796__auto___10981);
var with__9801__auto___10987__$1 = (((with__9801__auto___10986 == null))?cljs.core.PersistentVector.EMPTY:with__9801__auto___10986);
var invocations_str__9802__auto___10988 = ((function (seq__10502_10950,chunk__10503_10951,count__10504_10952,i__10505_10953,seq__10494_10945,chunk__10499_10946,count__10500_10947,i__10501_10948,seq__10478,chunk__10491,count__10492,i__10493,name__9795__auto___10980,options__9796__auto___10981,invocations__9797__auto___10982,times__9798__auto___10983,times_QMARK___9799__auto___10984,check_params_QMARK___9800__auto___10985,with__9801__auto___10986,with__9801__auto___10987__$1,n_10979,seq__10502_10973__$1,temp__5804__auto___10972,mode_10949,ai,take_turn_orig_val__10474,defer_orig_val__10475,take_turn_temp_val__10476,defer_temp_val__10477,_STAR_parent_description_STAR__orig_val__10328_10715,_STAR_parent_description_STAR__temp_val__10329_10716,description__9411__auto____$1,_STAR_parent_description_STAR__orig_val__9962_10661,_STAR_parent_description_STAR__temp_val__9963_10662,description__9411__auto___10660){
return (function (p1__9792__9803__auto__){
if(cljs.core._EQ_.call(null,(1),p1__9792__9803__auto__)){
return "invocation";
} else {
return "invocations";
}
});})(seq__10502_10950,chunk__10503_10951,count__10504_10952,i__10505_10953,seq__10494_10945,chunk__10499_10946,count__10500_10947,i__10501_10948,seq__10478,chunk__10491,count__10492,i__10493,name__9795__auto___10980,options__9796__auto___10981,invocations__9797__auto___10982,times__9798__auto___10983,times_QMARK___9799__auto___10984,check_params_QMARK___9800__auto___10985,with__9801__auto___10986,with__9801__auto___10987__$1,n_10979,seq__10502_10973__$1,temp__5804__auto___10972,mode_10949,ai,take_turn_orig_val__10474,defer_orig_val__10475,take_turn_temp_val__10476,defer_temp_val__10477,_STAR_parent_description_STAR__orig_val__10328_10715,_STAR_parent_description_STAR__temp_val__10329_10716,description__9411__auto____$1,_STAR_parent_description_STAR__orig_val__9962_10661,_STAR_parent_description_STAR__temp_val__9963_10662,description__9411__auto___10660))
;
if(((times_QMARK___9799__auto___10984) && (check_params_QMARK___9800__auto___10985))){
var matching_invocations__9804__auto___10989 = cljs.core.filter.call(null,((function (seq__10502_10950,chunk__10503_10951,count__10504_10952,i__10505_10953,seq__10494_10945,chunk__10499_10946,count__10500_10947,i__10501_10948,seq__10478,chunk__10491,count__10492,i__10493,name__9795__auto___10980,options__9796__auto___10981,invocations__9797__auto___10982,times__9798__auto___10983,times_QMARK___9799__auto___10984,check_params_QMARK___9800__auto___10985,with__9801__auto___10986,with__9801__auto___10987__$1,invocations_str__9802__auto___10988,n_10979,seq__10502_10973__$1,temp__5804__auto___10972,mode_10949,ai,take_turn_orig_val__10474,defer_orig_val__10475,take_turn_temp_val__10476,defer_temp_val__10477,_STAR_parent_description_STAR__orig_val__10328_10715,_STAR_parent_description_STAR__temp_val__10329_10716,description__9411__auto____$1,_STAR_parent_description_STAR__orig_val__9962_10661,_STAR_parent_description_STAR__temp_val__9963_10662,description__9411__auto___10660){
return (function (p1__9793__9805__auto__){
return speclj.stub.params_match_QMARK_.call(null,with__9801__auto___10987__$1,p1__9793__9805__auto__);
});})(seq__10502_10950,chunk__10503_10951,count__10504_10952,i__10505_10953,seq__10494_10945,chunk__10499_10946,count__10500_10947,i__10501_10948,seq__10478,chunk__10491,count__10492,i__10493,name__9795__auto___10980,options__9796__auto___10981,invocations__9797__auto___10982,times__9798__auto___10983,times_QMARK___9799__auto___10984,check_params_QMARK___9800__auto___10985,with__9801__auto___10986,with__9801__auto___10987__$1,invocations_str__9802__auto___10988,n_10979,seq__10502_10973__$1,temp__5804__auto___10972,mode_10949,ai,take_turn_orig_val__10474,defer_orig_val__10475,take_turn_temp_val__10476,defer_temp_val__10477,_STAR_parent_description_STAR__orig_val__10328_10715,_STAR_parent_description_STAR__temp_val__10329_10716,description__9411__auto____$1,_STAR_parent_description_STAR__orig_val__9962_10661,_STAR_parent_description_STAR__temp_val__9963_10662,description__9411__auto___10660))
,invocations__9797__auto___10982);
var matching_count__9806__auto___10990 = cljs.core.count.call(null,matching_invocations__9804__auto___10989);
if(cljs.core._EQ_.call(null,times__9798__auto___10983,matching_count__9806__auto___10990)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(times__9798__auto___10983)," ",invocations_str__9802__auto___10988.call(null,times__9798__auto___10983)," of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__9795__auto___10980)," with ",cljs.core.pr_str.call(null,with__9801__auto___10987__$1),speclj.platform.endl,"     got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(matching_count__9806__auto___10990)," ",invocations_str__9802__auto___10988.call(null,matching_count__9806__auto___10990)].join('')));
}
} else {
if(check_params_QMARK___9800__auto___10985){
if(cljs.core.truth_(cljs.core.some.call(null,((function (seq__10502_10950,chunk__10503_10951,count__10504_10952,i__10505_10953,seq__10494_10945,chunk__10499_10946,count__10500_10947,i__10501_10948,seq__10478,chunk__10491,count__10492,i__10493,name__9795__auto___10980,options__9796__auto___10981,invocations__9797__auto___10982,times__9798__auto___10983,times_QMARK___9799__auto___10984,check_params_QMARK___9800__auto___10985,with__9801__auto___10986,with__9801__auto___10987__$1,invocations_str__9802__auto___10988,n_10979,seq__10502_10973__$1,temp__5804__auto___10972,mode_10949,ai,take_turn_orig_val__10474,defer_orig_val__10475,take_turn_temp_val__10476,defer_temp_val__10477,_STAR_parent_description_STAR__orig_val__10328_10715,_STAR_parent_description_STAR__temp_val__10329_10716,description__9411__auto____$1,_STAR_parent_description_STAR__orig_val__9962_10661,_STAR_parent_description_STAR__temp_val__9963_10662,description__9411__auto___10660){
return (function (p1__9794__9807__auto__){
return speclj.stub.params_match_QMARK_.call(null,with__9801__auto___10987__$1,p1__9794__9807__auto__);
});})(seq__10502_10950,chunk__10503_10951,count__10504_10952,i__10505_10953,seq__10494_10945,chunk__10499_10946,count__10500_10947,i__10501_10948,seq__10478,chunk__10491,count__10492,i__10493,name__9795__auto___10980,options__9796__auto___10981,invocations__9797__auto___10982,times__9798__auto___10983,times_QMARK___9799__auto___10984,check_params_QMARK___9800__auto___10985,with__9801__auto___10986,with__9801__auto___10987__$1,invocations_str__9802__auto___10988,n_10979,seq__10502_10973__$1,temp__5804__auto___10972,mode_10949,ai,take_turn_orig_val__10474,defer_orig_val__10475,take_turn_temp_val__10476,defer_temp_val__10477,_STAR_parent_description_STAR__orig_val__10328_10715,_STAR_parent_description_STAR__temp_val__10329_10716,description__9411__auto____$1,_STAR_parent_description_STAR__orig_val__9962_10661,_STAR_parent_description_STAR__temp_val__9963_10662,description__9411__auto___10660))
,invocations__9797__auto___10982))){
} else {
throw (new speclj.platform.SpecFailure(["Expected: invocation of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__9795__auto___10980)," with ",cljs.core.pr_str.call(null,with__9801__auto___10987__$1),speclj.platform.endl,"     got: ",cljs.core.pr_str.call(null,invocations__9797__auto___10982)].join('')));
}
} else {
if(times_QMARK___9799__auto___10984){
if(cljs.core._EQ_.call(null,times__9798__auto___10983,cljs.core.count.call(null,invocations__9797__auto___10982))){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(times__9798__auto___10983)," ",invocations_str__9802__auto___10988.call(null,times__9798__auto___10983)," of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__9795__auto___10980),speclj.platform.endl,"     got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,invocations__9797__auto___10982))].join('')));
}
} else {
if(cljs.core.seq.call(null,invocations__9797__auto___10982)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: an invocation of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__9795__auto___10980),speclj.platform.endl,"     got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,invocations__9797__auto___10982))].join('')));
}

}
}
}

var expected__9548__auto___10991 = ((cljs.core._EQ_.call(null,(2),mode_10949))?new cljs.core.Keyword(null,"x","x",2099068185):new cljs.core.Keyword(null,"o","o",-1350007228));
var actual__9549__auto___10992 = new cljs.core.Keyword(null,"player","player",-97687400).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.screens.play_spec.state));
if(cljs.core._EQ_.call(null,expected__9548__auto___10991,actual__9549__auto___10992)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__9548__auto___10991;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9516__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9516__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__9549__auto___10992;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9516__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9516__auto__);
}
})()," (using =)"].join('')));
}

cljs.core.reset_BANG_.call(null,tic_tac_toe.screens.play_spec.state,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"board","board",-1907017633),tic_tac_toe.screens.play_spec.board_3,new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"current-screen","current-screen",-1454713691),new cljs.core.Keyword(null,"play","play",-580418022)], null));


var G__10993 = cljs.core.next.call(null,seq__10502_10973__$1);
var G__10994 = null;
var G__10995 = (0);
var G__10996 = (0);
seq__10502_10950 = G__10993;
chunk__10503_10951 = G__10994;
count__10504_10952 = G__10995;
i__10505_10953 = G__10996;
continue;
}
} else {
}
}
break;
}

var G__10997 = seq__10494_10945;
var G__10998 = chunk__10499_10946;
var G__10999 = count__10500_10947;
var G__11000 = (i__10501_10948 + (1));
seq__10494_10945 = G__10997;
chunk__10499_10946 = G__10998;
count__10500_10947 = G__10999;
i__10501_10948 = G__11000;
continue;
} else {
var temp__5804__auto___11001 = cljs.core.seq.call(null,seq__10494_10945);
if(temp__5804__auto___11001){
var seq__10494_11002__$1 = temp__5804__auto___11001;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10494_11002__$1)){
var c__5525__auto___11003 = cljs.core.chunk_first.call(null,seq__10494_11002__$1);
var G__11004 = cljs.core.chunk_rest.call(null,seq__10494_11002__$1);
var G__11005 = c__5525__auto___11003;
var G__11006 = cljs.core.count.call(null,c__5525__auto___11003);
var G__11007 = (0);
seq__10494_10945 = G__11004;
chunk__10499_10946 = G__11005;
count__10500_10947 = G__11006;
i__10501_10948 = G__11007;
continue;
} else {
var mode_11008 = cljs.core.first.call(null,seq__10494_11002__$1);
var seq__10495_11009 = cljs.core.seq.call(null,cljs.core.range.call(null,(9)));
var chunk__10496_11010 = null;
var count__10497_11011 = (0);
var i__10498_11012 = (0);
while(true){
if((i__10498_11012 < count__10497_11011)){
var n_11013 = cljs.core._nth.call(null,chunk__10496_11010,i__10498_11012);
cljs.core.swap_BANG_.call(null,tic_tac_toe.screens.play_spec.state,cljs.core.assoc,new cljs.core.Keyword(null,"mode","mode",654403691),mode_11008,new cljs.core.Keyword(null,"first-ai-level","first-ai-level",1004633644),ai,new cljs.core.Keyword(null,"player","player",-97687400),((cljs.core._EQ_.call(null,(2),mode_11008))?new cljs.core.Keyword(null,"x","x",2099068185):new cljs.core.Keyword(null,"o","o",-1350007228)),new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"gui","gui",604532813));

c3kit.wire.spec_helper.render.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tic_tac_toe.render_screen.render_screen,tic_tac_toe.screens.play_spec.state], null));

c3kit.wire.spec_helper.click_BANG_.call(null,["#index-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n_11013)].join(''));

var name__9795__auto___11014 = new cljs.core.Keyword(null,"turn","turn",75759344);
var options__9796__auto___11015 = cljs.core.PersistentArrayMap.EMPTY;
var invocations__9797__auto___11016 = speclj.stub.invocations_of.call(null,name__9795__auto___11014);
var times__9798__auto___11017 = new cljs.core.Keyword(null,"times","times",1671571467).cljs$core$IFn$_invoke$arity$1(options__9796__auto___11015);
var times_QMARK___9799__auto___11018 = typeof times__9798__auto___11017 === 'number';
var check_params_QMARK___9800__auto___11019 = cljs.core.contains_QMARK_.call(null,options__9796__auto___11015,new cljs.core.Keyword(null,"with","with",-1536296876));
var with__9801__auto___11020 = new cljs.core.Keyword(null,"with","with",-1536296876).cljs$core$IFn$_invoke$arity$1(options__9796__auto___11015);
var with__9801__auto___11021__$1 = (((with__9801__auto___11020 == null))?cljs.core.PersistentVector.EMPTY:with__9801__auto___11020);
var invocations_str__9802__auto___11022 = ((function (seq__10495_11009,chunk__10496_11010,count__10497_11011,i__10498_11012,seq__10494_10945,chunk__10499_10946,count__10500_10947,i__10501_10948,seq__10478,chunk__10491,count__10492,i__10493,name__9795__auto___11014,options__9796__auto___11015,invocations__9797__auto___11016,times__9798__auto___11017,times_QMARK___9799__auto___11018,check_params_QMARK___9800__auto___11019,with__9801__auto___11020,with__9801__auto___11021__$1,n_11013,mode_11008,seq__10494_11002__$1,temp__5804__auto___11001,ai,take_turn_orig_val__10474,defer_orig_val__10475,take_turn_temp_val__10476,defer_temp_val__10477,_STAR_parent_description_STAR__orig_val__10328_10715,_STAR_parent_description_STAR__temp_val__10329_10716,description__9411__auto____$1,_STAR_parent_description_STAR__orig_val__9962_10661,_STAR_parent_description_STAR__temp_val__9963_10662,description__9411__auto___10660){
return (function (p1__9792__9803__auto__){
if(cljs.core._EQ_.call(null,(1),p1__9792__9803__auto__)){
return "invocation";
} else {
return "invocations";
}
});})(seq__10495_11009,chunk__10496_11010,count__10497_11011,i__10498_11012,seq__10494_10945,chunk__10499_10946,count__10500_10947,i__10501_10948,seq__10478,chunk__10491,count__10492,i__10493,name__9795__auto___11014,options__9796__auto___11015,invocations__9797__auto___11016,times__9798__auto___11017,times_QMARK___9799__auto___11018,check_params_QMARK___9800__auto___11019,with__9801__auto___11020,with__9801__auto___11021__$1,n_11013,mode_11008,seq__10494_11002__$1,temp__5804__auto___11001,ai,take_turn_orig_val__10474,defer_orig_val__10475,take_turn_temp_val__10476,defer_temp_val__10477,_STAR_parent_description_STAR__orig_val__10328_10715,_STAR_parent_description_STAR__temp_val__10329_10716,description__9411__auto____$1,_STAR_parent_description_STAR__orig_val__9962_10661,_STAR_parent_description_STAR__temp_val__9963_10662,description__9411__auto___10660))
;
if(((times_QMARK___9799__auto___11018) && (check_params_QMARK___9800__auto___11019))){
var matching_invocations__9804__auto___11023 = cljs.core.filter.call(null,((function (seq__10495_11009,chunk__10496_11010,count__10497_11011,i__10498_11012,seq__10494_10945,chunk__10499_10946,count__10500_10947,i__10501_10948,seq__10478,chunk__10491,count__10492,i__10493,name__9795__auto___11014,options__9796__auto___11015,invocations__9797__auto___11016,times__9798__auto___11017,times_QMARK___9799__auto___11018,check_params_QMARK___9800__auto___11019,with__9801__auto___11020,with__9801__auto___11021__$1,invocations_str__9802__auto___11022,n_11013,mode_11008,seq__10494_11002__$1,temp__5804__auto___11001,ai,take_turn_orig_val__10474,defer_orig_val__10475,take_turn_temp_val__10476,defer_temp_val__10477,_STAR_parent_description_STAR__orig_val__10328_10715,_STAR_parent_description_STAR__temp_val__10329_10716,description__9411__auto____$1,_STAR_parent_description_STAR__orig_val__9962_10661,_STAR_parent_description_STAR__temp_val__9963_10662,description__9411__auto___10660){
return (function (p1__9793__9805__auto__){
return speclj.stub.params_match_QMARK_.call(null,with__9801__auto___11021__$1,p1__9793__9805__auto__);
});})(seq__10495_11009,chunk__10496_11010,count__10497_11011,i__10498_11012,seq__10494_10945,chunk__10499_10946,count__10500_10947,i__10501_10948,seq__10478,chunk__10491,count__10492,i__10493,name__9795__auto___11014,options__9796__auto___11015,invocations__9797__auto___11016,times__9798__auto___11017,times_QMARK___9799__auto___11018,check_params_QMARK___9800__auto___11019,with__9801__auto___11020,with__9801__auto___11021__$1,invocations_str__9802__auto___11022,n_11013,mode_11008,seq__10494_11002__$1,temp__5804__auto___11001,ai,take_turn_orig_val__10474,defer_orig_val__10475,take_turn_temp_val__10476,defer_temp_val__10477,_STAR_parent_description_STAR__orig_val__10328_10715,_STAR_parent_description_STAR__temp_val__10329_10716,description__9411__auto____$1,_STAR_parent_description_STAR__orig_val__9962_10661,_STAR_parent_description_STAR__temp_val__9963_10662,description__9411__auto___10660))
,invocations__9797__auto___11016);
var matching_count__9806__auto___11024 = cljs.core.count.call(null,matching_invocations__9804__auto___11023);
if(cljs.core._EQ_.call(null,times__9798__auto___11017,matching_count__9806__auto___11024)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(times__9798__auto___11017)," ",invocations_str__9802__auto___11022.call(null,times__9798__auto___11017)," of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__9795__auto___11014)," with ",cljs.core.pr_str.call(null,with__9801__auto___11021__$1),speclj.platform.endl,"     got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(matching_count__9806__auto___11024)," ",invocations_str__9802__auto___11022.call(null,matching_count__9806__auto___11024)].join('')));
}
} else {
if(check_params_QMARK___9800__auto___11019){
if(cljs.core.truth_(cljs.core.some.call(null,((function (seq__10495_11009,chunk__10496_11010,count__10497_11011,i__10498_11012,seq__10494_10945,chunk__10499_10946,count__10500_10947,i__10501_10948,seq__10478,chunk__10491,count__10492,i__10493,name__9795__auto___11014,options__9796__auto___11015,invocations__9797__auto___11016,times__9798__auto___11017,times_QMARK___9799__auto___11018,check_params_QMARK___9800__auto___11019,with__9801__auto___11020,with__9801__auto___11021__$1,invocations_str__9802__auto___11022,n_11013,mode_11008,seq__10494_11002__$1,temp__5804__auto___11001,ai,take_turn_orig_val__10474,defer_orig_val__10475,take_turn_temp_val__10476,defer_temp_val__10477,_STAR_parent_description_STAR__orig_val__10328_10715,_STAR_parent_description_STAR__temp_val__10329_10716,description__9411__auto____$1,_STAR_parent_description_STAR__orig_val__9962_10661,_STAR_parent_description_STAR__temp_val__9963_10662,description__9411__auto___10660){
return (function (p1__9794__9807__auto__){
return speclj.stub.params_match_QMARK_.call(null,with__9801__auto___11021__$1,p1__9794__9807__auto__);
});})(seq__10495_11009,chunk__10496_11010,count__10497_11011,i__10498_11012,seq__10494_10945,chunk__10499_10946,count__10500_10947,i__10501_10948,seq__10478,chunk__10491,count__10492,i__10493,name__9795__auto___11014,options__9796__auto___11015,invocations__9797__auto___11016,times__9798__auto___11017,times_QMARK___9799__auto___11018,check_params_QMARK___9800__auto___11019,with__9801__auto___11020,with__9801__auto___11021__$1,invocations_str__9802__auto___11022,n_11013,mode_11008,seq__10494_11002__$1,temp__5804__auto___11001,ai,take_turn_orig_val__10474,defer_orig_val__10475,take_turn_temp_val__10476,defer_temp_val__10477,_STAR_parent_description_STAR__orig_val__10328_10715,_STAR_parent_description_STAR__temp_val__10329_10716,description__9411__auto____$1,_STAR_parent_description_STAR__orig_val__9962_10661,_STAR_parent_description_STAR__temp_val__9963_10662,description__9411__auto___10660))
,invocations__9797__auto___11016))){
} else {
throw (new speclj.platform.SpecFailure(["Expected: invocation of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__9795__auto___11014)," with ",cljs.core.pr_str.call(null,with__9801__auto___11021__$1),speclj.platform.endl,"     got: ",cljs.core.pr_str.call(null,invocations__9797__auto___11016)].join('')));
}
} else {
if(times_QMARK___9799__auto___11018){
if(cljs.core._EQ_.call(null,times__9798__auto___11017,cljs.core.count.call(null,invocations__9797__auto___11016))){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(times__9798__auto___11017)," ",invocations_str__9802__auto___11022.call(null,times__9798__auto___11017)," of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__9795__auto___11014),speclj.platform.endl,"     got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,invocations__9797__auto___11016))].join('')));
}
} else {
if(cljs.core.seq.call(null,invocations__9797__auto___11016)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: an invocation of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__9795__auto___11014),speclj.platform.endl,"     got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,invocations__9797__auto___11016))].join('')));
}

}
}
}

var expected__9548__auto___11025 = ((cljs.core._EQ_.call(null,(2),mode_11008))?new cljs.core.Keyword(null,"x","x",2099068185):new cljs.core.Keyword(null,"o","o",-1350007228));
var actual__9549__auto___11026 = new cljs.core.Keyword(null,"player","player",-97687400).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.screens.play_spec.state));
if(cljs.core._EQ_.call(null,expected__9548__auto___11025,actual__9549__auto___11026)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__9548__auto___11025;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9516__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9516__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__9549__auto___11026;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9516__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9516__auto__);
}
})()," (using =)"].join('')));
}

cljs.core.reset_BANG_.call(null,tic_tac_toe.screens.play_spec.state,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"board","board",-1907017633),tic_tac_toe.screens.play_spec.board_3,new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"current-screen","current-screen",-1454713691),new cljs.core.Keyword(null,"play","play",-580418022)], null));


var G__11027 = seq__10495_11009;
var G__11028 = chunk__10496_11010;
var G__11029 = count__10497_11011;
var G__11030 = (i__10498_11012 + (1));
seq__10495_11009 = G__11027;
chunk__10496_11010 = G__11028;
count__10497_11011 = G__11029;
i__10498_11012 = G__11030;
continue;
} else {
var temp__5804__auto___11031__$1 = cljs.core.seq.call(null,seq__10495_11009);
if(temp__5804__auto___11031__$1){
var seq__10495_11032__$1 = temp__5804__auto___11031__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10495_11032__$1)){
var c__5525__auto___11033 = cljs.core.chunk_first.call(null,seq__10495_11032__$1);
var G__11034 = cljs.core.chunk_rest.call(null,seq__10495_11032__$1);
var G__11035 = c__5525__auto___11033;
var G__11036 = cljs.core.count.call(null,c__5525__auto___11033);
var G__11037 = (0);
seq__10495_11009 = G__11034;
chunk__10496_11010 = G__11035;
count__10497_11011 = G__11036;
i__10498_11012 = G__11037;
continue;
} else {
var n_11038 = cljs.core.first.call(null,seq__10495_11032__$1);
cljs.core.swap_BANG_.call(null,tic_tac_toe.screens.play_spec.state,cljs.core.assoc,new cljs.core.Keyword(null,"mode","mode",654403691),mode_11008,new cljs.core.Keyword(null,"first-ai-level","first-ai-level",1004633644),ai,new cljs.core.Keyword(null,"player","player",-97687400),((cljs.core._EQ_.call(null,(2),mode_11008))?new cljs.core.Keyword(null,"x","x",2099068185):new cljs.core.Keyword(null,"o","o",-1350007228)),new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"gui","gui",604532813));

c3kit.wire.spec_helper.render.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tic_tac_toe.render_screen.render_screen,tic_tac_toe.screens.play_spec.state], null));

c3kit.wire.spec_helper.click_BANG_.call(null,["#index-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n_11038)].join(''));

var name__9795__auto___11039 = new cljs.core.Keyword(null,"turn","turn",75759344);
var options__9796__auto___11040 = cljs.core.PersistentArrayMap.EMPTY;
var invocations__9797__auto___11041 = speclj.stub.invocations_of.call(null,name__9795__auto___11039);
var times__9798__auto___11042 = new cljs.core.Keyword(null,"times","times",1671571467).cljs$core$IFn$_invoke$arity$1(options__9796__auto___11040);
var times_QMARK___9799__auto___11043 = typeof times__9798__auto___11042 === 'number';
var check_params_QMARK___9800__auto___11044 = cljs.core.contains_QMARK_.call(null,options__9796__auto___11040,new cljs.core.Keyword(null,"with","with",-1536296876));
var with__9801__auto___11045 = new cljs.core.Keyword(null,"with","with",-1536296876).cljs$core$IFn$_invoke$arity$1(options__9796__auto___11040);
var with__9801__auto___11046__$1 = (((with__9801__auto___11045 == null))?cljs.core.PersistentVector.EMPTY:with__9801__auto___11045);
var invocations_str__9802__auto___11047 = ((function (seq__10495_11009,chunk__10496_11010,count__10497_11011,i__10498_11012,seq__10494_10945,chunk__10499_10946,count__10500_10947,i__10501_10948,seq__10478,chunk__10491,count__10492,i__10493,name__9795__auto___11039,options__9796__auto___11040,invocations__9797__auto___11041,times__9798__auto___11042,times_QMARK___9799__auto___11043,check_params_QMARK___9800__auto___11044,with__9801__auto___11045,with__9801__auto___11046__$1,n_11038,seq__10495_11032__$1,temp__5804__auto___11031__$1,mode_11008,seq__10494_11002__$1,temp__5804__auto___11001,ai,take_turn_orig_val__10474,defer_orig_val__10475,take_turn_temp_val__10476,defer_temp_val__10477,_STAR_parent_description_STAR__orig_val__10328_10715,_STAR_parent_description_STAR__temp_val__10329_10716,description__9411__auto____$1,_STAR_parent_description_STAR__orig_val__9962_10661,_STAR_parent_description_STAR__temp_val__9963_10662,description__9411__auto___10660){
return (function (p1__9792__9803__auto__){
if(cljs.core._EQ_.call(null,(1),p1__9792__9803__auto__)){
return "invocation";
} else {
return "invocations";
}
});})(seq__10495_11009,chunk__10496_11010,count__10497_11011,i__10498_11012,seq__10494_10945,chunk__10499_10946,count__10500_10947,i__10501_10948,seq__10478,chunk__10491,count__10492,i__10493,name__9795__auto___11039,options__9796__auto___11040,invocations__9797__auto___11041,times__9798__auto___11042,times_QMARK___9799__auto___11043,check_params_QMARK___9800__auto___11044,with__9801__auto___11045,with__9801__auto___11046__$1,n_11038,seq__10495_11032__$1,temp__5804__auto___11031__$1,mode_11008,seq__10494_11002__$1,temp__5804__auto___11001,ai,take_turn_orig_val__10474,defer_orig_val__10475,take_turn_temp_val__10476,defer_temp_val__10477,_STAR_parent_description_STAR__orig_val__10328_10715,_STAR_parent_description_STAR__temp_val__10329_10716,description__9411__auto____$1,_STAR_parent_description_STAR__orig_val__9962_10661,_STAR_parent_description_STAR__temp_val__9963_10662,description__9411__auto___10660))
;
if(((times_QMARK___9799__auto___11043) && (check_params_QMARK___9800__auto___11044))){
var matching_invocations__9804__auto___11048 = cljs.core.filter.call(null,((function (seq__10495_11009,chunk__10496_11010,count__10497_11011,i__10498_11012,seq__10494_10945,chunk__10499_10946,count__10500_10947,i__10501_10948,seq__10478,chunk__10491,count__10492,i__10493,name__9795__auto___11039,options__9796__auto___11040,invocations__9797__auto___11041,times__9798__auto___11042,times_QMARK___9799__auto___11043,check_params_QMARK___9800__auto___11044,with__9801__auto___11045,with__9801__auto___11046__$1,invocations_str__9802__auto___11047,n_11038,seq__10495_11032__$1,temp__5804__auto___11031__$1,mode_11008,seq__10494_11002__$1,temp__5804__auto___11001,ai,take_turn_orig_val__10474,defer_orig_val__10475,take_turn_temp_val__10476,defer_temp_val__10477,_STAR_parent_description_STAR__orig_val__10328_10715,_STAR_parent_description_STAR__temp_val__10329_10716,description__9411__auto____$1,_STAR_parent_description_STAR__orig_val__9962_10661,_STAR_parent_description_STAR__temp_val__9963_10662,description__9411__auto___10660){
return (function (p1__9793__9805__auto__){
return speclj.stub.params_match_QMARK_.call(null,with__9801__auto___11046__$1,p1__9793__9805__auto__);
});})(seq__10495_11009,chunk__10496_11010,count__10497_11011,i__10498_11012,seq__10494_10945,chunk__10499_10946,count__10500_10947,i__10501_10948,seq__10478,chunk__10491,count__10492,i__10493,name__9795__auto___11039,options__9796__auto___11040,invocations__9797__auto___11041,times__9798__auto___11042,times_QMARK___9799__auto___11043,check_params_QMARK___9800__auto___11044,with__9801__auto___11045,with__9801__auto___11046__$1,invocations_str__9802__auto___11047,n_11038,seq__10495_11032__$1,temp__5804__auto___11031__$1,mode_11008,seq__10494_11002__$1,temp__5804__auto___11001,ai,take_turn_orig_val__10474,defer_orig_val__10475,take_turn_temp_val__10476,defer_temp_val__10477,_STAR_parent_description_STAR__orig_val__10328_10715,_STAR_parent_description_STAR__temp_val__10329_10716,description__9411__auto____$1,_STAR_parent_description_STAR__orig_val__9962_10661,_STAR_parent_description_STAR__temp_val__9963_10662,description__9411__auto___10660))
,invocations__9797__auto___11041);
var matching_count__9806__auto___11049 = cljs.core.count.call(null,matching_invocations__9804__auto___11048);
if(cljs.core._EQ_.call(null,times__9798__auto___11042,matching_count__9806__auto___11049)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(times__9798__auto___11042)," ",invocations_str__9802__auto___11047.call(null,times__9798__auto___11042)," of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__9795__auto___11039)," with ",cljs.core.pr_str.call(null,with__9801__auto___11046__$1),speclj.platform.endl,"     got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(matching_count__9806__auto___11049)," ",invocations_str__9802__auto___11047.call(null,matching_count__9806__auto___11049)].join('')));
}
} else {
if(check_params_QMARK___9800__auto___11044){
if(cljs.core.truth_(cljs.core.some.call(null,((function (seq__10495_11009,chunk__10496_11010,count__10497_11011,i__10498_11012,seq__10494_10945,chunk__10499_10946,count__10500_10947,i__10501_10948,seq__10478,chunk__10491,count__10492,i__10493,name__9795__auto___11039,options__9796__auto___11040,invocations__9797__auto___11041,times__9798__auto___11042,times_QMARK___9799__auto___11043,check_params_QMARK___9800__auto___11044,with__9801__auto___11045,with__9801__auto___11046__$1,invocations_str__9802__auto___11047,n_11038,seq__10495_11032__$1,temp__5804__auto___11031__$1,mode_11008,seq__10494_11002__$1,temp__5804__auto___11001,ai,take_turn_orig_val__10474,defer_orig_val__10475,take_turn_temp_val__10476,defer_temp_val__10477,_STAR_parent_description_STAR__orig_val__10328_10715,_STAR_parent_description_STAR__temp_val__10329_10716,description__9411__auto____$1,_STAR_parent_description_STAR__orig_val__9962_10661,_STAR_parent_description_STAR__temp_val__9963_10662,description__9411__auto___10660){
return (function (p1__9794__9807__auto__){
return speclj.stub.params_match_QMARK_.call(null,with__9801__auto___11046__$1,p1__9794__9807__auto__);
});})(seq__10495_11009,chunk__10496_11010,count__10497_11011,i__10498_11012,seq__10494_10945,chunk__10499_10946,count__10500_10947,i__10501_10948,seq__10478,chunk__10491,count__10492,i__10493,name__9795__auto___11039,options__9796__auto___11040,invocations__9797__auto___11041,times__9798__auto___11042,times_QMARK___9799__auto___11043,check_params_QMARK___9800__auto___11044,with__9801__auto___11045,with__9801__auto___11046__$1,invocations_str__9802__auto___11047,n_11038,seq__10495_11032__$1,temp__5804__auto___11031__$1,mode_11008,seq__10494_11002__$1,temp__5804__auto___11001,ai,take_turn_orig_val__10474,defer_orig_val__10475,take_turn_temp_val__10476,defer_temp_val__10477,_STAR_parent_description_STAR__orig_val__10328_10715,_STAR_parent_description_STAR__temp_val__10329_10716,description__9411__auto____$1,_STAR_parent_description_STAR__orig_val__9962_10661,_STAR_parent_description_STAR__temp_val__9963_10662,description__9411__auto___10660))
,invocations__9797__auto___11041))){
} else {
throw (new speclj.platform.SpecFailure(["Expected: invocation of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__9795__auto___11039)," with ",cljs.core.pr_str.call(null,with__9801__auto___11046__$1),speclj.platform.endl,"     got: ",cljs.core.pr_str.call(null,invocations__9797__auto___11041)].join('')));
}
} else {
if(times_QMARK___9799__auto___11043){
if(cljs.core._EQ_.call(null,times__9798__auto___11042,cljs.core.count.call(null,invocations__9797__auto___11041))){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(times__9798__auto___11042)," ",invocations_str__9802__auto___11047.call(null,times__9798__auto___11042)," of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__9795__auto___11039),speclj.platform.endl,"     got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,invocations__9797__auto___11041))].join('')));
}
} else {
if(cljs.core.seq.call(null,invocations__9797__auto___11041)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: an invocation of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__9795__auto___11039),speclj.platform.endl,"     got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,invocations__9797__auto___11041))].join('')));
}

}
}
}

var expected__9548__auto___11050 = ((cljs.core._EQ_.call(null,(2),mode_11008))?new cljs.core.Keyword(null,"x","x",2099068185):new cljs.core.Keyword(null,"o","o",-1350007228));
var actual__9549__auto___11051 = new cljs.core.Keyword(null,"player","player",-97687400).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.screens.play_spec.state));
if(cljs.core._EQ_.call(null,expected__9548__auto___11050,actual__9549__auto___11051)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__9548__auto___11050;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9516__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9516__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__9549__auto___11051;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9516__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9516__auto__);
}
})()," (using =)"].join('')));
}

cljs.core.reset_BANG_.call(null,tic_tac_toe.screens.play_spec.state,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"board","board",-1907017633),tic_tac_toe.screens.play_spec.board_3,new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"current-screen","current-screen",-1454713691),new cljs.core.Keyword(null,"play","play",-580418022)], null));


var G__11052 = cljs.core.next.call(null,seq__10495_11032__$1);
var G__11053 = null;
var G__11054 = (0);
var G__11055 = (0);
seq__10495_11009 = G__11052;
chunk__10496_11010 = G__11053;
count__10497_11011 = G__11054;
i__10498_11012 = G__11055;
continue;
}
} else {
}
}
break;
}

var G__11056 = cljs.core.next.call(null,seq__10494_11002__$1);
var G__11057 = null;
var G__11058 = (0);
var G__11059 = (0);
seq__10494_10945 = G__11056;
chunk__10499_10946 = G__11057;
count__10500_10947 = G__11058;
i__10501_10948 = G__11059;
continue;
}
} else {
}
}
break;
}

var G__11060 = seq__10478;
var G__11061 = chunk__10491;
var G__11062 = count__10492;
var G__11063 = (i__10493 + (1));
seq__10478 = G__11060;
chunk__10491 = G__11061;
count__10492 = G__11062;
i__10493 = G__11063;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__10478);
if(temp__5804__auto__){
var seq__10478__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10478__$1)){
var c__5525__auto__ = cljs.core.chunk_first.call(null,seq__10478__$1);
var G__11064 = cljs.core.chunk_rest.call(null,seq__10478__$1);
var G__11065 = c__5525__auto__;
var G__11066 = cljs.core.count.call(null,c__5525__auto__);
var G__11067 = (0);
seq__10478 = G__11064;
chunk__10491 = G__11065;
count__10492 = G__11066;
i__10493 = G__11067;
continue;
} else {
var ai = cljs.core.first.call(null,seq__10478__$1);
var seq__10479_11068 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(3)], null));
var chunk__10484_11069 = null;
var count__10485_11070 = (0);
var i__10486_11071 = (0);
while(true){
if((i__10486_11071 < count__10485_11070)){
var mode_11072 = cljs.core._nth.call(null,chunk__10484_11069,i__10486_11071);
var seq__10487_11073 = cljs.core.seq.call(null,cljs.core.range.call(null,(9)));
var chunk__10488_11074 = null;
var count__10489_11075 = (0);
var i__10490_11076 = (0);
while(true){
if((i__10490_11076 < count__10489_11075)){
var n_11077 = cljs.core._nth.call(null,chunk__10488_11074,i__10490_11076);
cljs.core.swap_BANG_.call(null,tic_tac_toe.screens.play_spec.state,cljs.core.assoc,new cljs.core.Keyword(null,"mode","mode",654403691),mode_11072,new cljs.core.Keyword(null,"first-ai-level","first-ai-level",1004633644),ai,new cljs.core.Keyword(null,"player","player",-97687400),((cljs.core._EQ_.call(null,(2),mode_11072))?new cljs.core.Keyword(null,"x","x",2099068185):new cljs.core.Keyword(null,"o","o",-1350007228)),new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"gui","gui",604532813));

c3kit.wire.spec_helper.render.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tic_tac_toe.render_screen.render_screen,tic_tac_toe.screens.play_spec.state], null));

c3kit.wire.spec_helper.click_BANG_.call(null,["#index-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n_11077)].join(''));

var name__9795__auto___11078 = new cljs.core.Keyword(null,"turn","turn",75759344);
var options__9796__auto___11079 = cljs.core.PersistentArrayMap.EMPTY;
var invocations__9797__auto___11080 = speclj.stub.invocations_of.call(null,name__9795__auto___11078);
var times__9798__auto___11081 = new cljs.core.Keyword(null,"times","times",1671571467).cljs$core$IFn$_invoke$arity$1(options__9796__auto___11079);
var times_QMARK___9799__auto___11082 = typeof times__9798__auto___11081 === 'number';
var check_params_QMARK___9800__auto___11083 = cljs.core.contains_QMARK_.call(null,options__9796__auto___11079,new cljs.core.Keyword(null,"with","with",-1536296876));
var with__9801__auto___11084 = new cljs.core.Keyword(null,"with","with",-1536296876).cljs$core$IFn$_invoke$arity$1(options__9796__auto___11079);
var with__9801__auto___11085__$1 = (((with__9801__auto___11084 == null))?cljs.core.PersistentVector.EMPTY:with__9801__auto___11084);
var invocations_str__9802__auto___11086 = ((function (seq__10487_11073,chunk__10488_11074,count__10489_11075,i__10490_11076,seq__10479_11068,chunk__10484_11069,count__10485_11070,i__10486_11071,seq__10478,chunk__10491,count__10492,i__10493,name__9795__auto___11078,options__9796__auto___11079,invocations__9797__auto___11080,times__9798__auto___11081,times_QMARK___9799__auto___11082,check_params_QMARK___9800__auto___11083,with__9801__auto___11084,with__9801__auto___11085__$1,n_11077,mode_11072,ai,seq__10478__$1,temp__5804__auto__,take_turn_orig_val__10474,defer_orig_val__10475,take_turn_temp_val__10476,defer_temp_val__10477,_STAR_parent_description_STAR__orig_val__10328_10715,_STAR_parent_description_STAR__temp_val__10329_10716,description__9411__auto____$1,_STAR_parent_description_STAR__orig_val__9962_10661,_STAR_parent_description_STAR__temp_val__9963_10662,description__9411__auto___10660){
return (function (p1__9792__9803__auto__){
if(cljs.core._EQ_.call(null,(1),p1__9792__9803__auto__)){
return "invocation";
} else {
return "invocations";
}
});})(seq__10487_11073,chunk__10488_11074,count__10489_11075,i__10490_11076,seq__10479_11068,chunk__10484_11069,count__10485_11070,i__10486_11071,seq__10478,chunk__10491,count__10492,i__10493,name__9795__auto___11078,options__9796__auto___11079,invocations__9797__auto___11080,times__9798__auto___11081,times_QMARK___9799__auto___11082,check_params_QMARK___9800__auto___11083,with__9801__auto___11084,with__9801__auto___11085__$1,n_11077,mode_11072,ai,seq__10478__$1,temp__5804__auto__,take_turn_orig_val__10474,defer_orig_val__10475,take_turn_temp_val__10476,defer_temp_val__10477,_STAR_parent_description_STAR__orig_val__10328_10715,_STAR_parent_description_STAR__temp_val__10329_10716,description__9411__auto____$1,_STAR_parent_description_STAR__orig_val__9962_10661,_STAR_parent_description_STAR__temp_val__9963_10662,description__9411__auto___10660))
;
if(((times_QMARK___9799__auto___11082) && (check_params_QMARK___9800__auto___11083))){
var matching_invocations__9804__auto___11087 = cljs.core.filter.call(null,((function (seq__10487_11073,chunk__10488_11074,count__10489_11075,i__10490_11076,seq__10479_11068,chunk__10484_11069,count__10485_11070,i__10486_11071,seq__10478,chunk__10491,count__10492,i__10493,name__9795__auto___11078,options__9796__auto___11079,invocations__9797__auto___11080,times__9798__auto___11081,times_QMARK___9799__auto___11082,check_params_QMARK___9800__auto___11083,with__9801__auto___11084,with__9801__auto___11085__$1,invocations_str__9802__auto___11086,n_11077,mode_11072,ai,seq__10478__$1,temp__5804__auto__,take_turn_orig_val__10474,defer_orig_val__10475,take_turn_temp_val__10476,defer_temp_val__10477,_STAR_parent_description_STAR__orig_val__10328_10715,_STAR_parent_description_STAR__temp_val__10329_10716,description__9411__auto____$1,_STAR_parent_description_STAR__orig_val__9962_10661,_STAR_parent_description_STAR__temp_val__9963_10662,description__9411__auto___10660){
return (function (p1__9793__9805__auto__){
return speclj.stub.params_match_QMARK_.call(null,with__9801__auto___11085__$1,p1__9793__9805__auto__);
});})(seq__10487_11073,chunk__10488_11074,count__10489_11075,i__10490_11076,seq__10479_11068,chunk__10484_11069,count__10485_11070,i__10486_11071,seq__10478,chunk__10491,count__10492,i__10493,name__9795__auto___11078,options__9796__auto___11079,invocations__9797__auto___11080,times__9798__auto___11081,times_QMARK___9799__auto___11082,check_params_QMARK___9800__auto___11083,with__9801__auto___11084,with__9801__auto___11085__$1,invocations_str__9802__auto___11086,n_11077,mode_11072,ai,seq__10478__$1,temp__5804__auto__,take_turn_orig_val__10474,defer_orig_val__10475,take_turn_temp_val__10476,defer_temp_val__10477,_STAR_parent_description_STAR__orig_val__10328_10715,_STAR_parent_description_STAR__temp_val__10329_10716,description__9411__auto____$1,_STAR_parent_description_STAR__orig_val__9962_10661,_STAR_parent_description_STAR__temp_val__9963_10662,description__9411__auto___10660))
,invocations__9797__auto___11080);
var matching_count__9806__auto___11088 = cljs.core.count.call(null,matching_invocations__9804__auto___11087);
if(cljs.core._EQ_.call(null,times__9798__auto___11081,matching_count__9806__auto___11088)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(times__9798__auto___11081)," ",invocations_str__9802__auto___11086.call(null,times__9798__auto___11081)," of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__9795__auto___11078)," with ",cljs.core.pr_str.call(null,with__9801__auto___11085__$1),speclj.platform.endl,"     got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(matching_count__9806__auto___11088)," ",invocations_str__9802__auto___11086.call(null,matching_count__9806__auto___11088)].join('')));
}
} else {
if(check_params_QMARK___9800__auto___11083){
if(cljs.core.truth_(cljs.core.some.call(null,((function (seq__10487_11073,chunk__10488_11074,count__10489_11075,i__10490_11076,seq__10479_11068,chunk__10484_11069,count__10485_11070,i__10486_11071,seq__10478,chunk__10491,count__10492,i__10493,name__9795__auto___11078,options__9796__auto___11079,invocations__9797__auto___11080,times__9798__auto___11081,times_QMARK___9799__auto___11082,check_params_QMARK___9800__auto___11083,with__9801__auto___11084,with__9801__auto___11085__$1,invocations_str__9802__auto___11086,n_11077,mode_11072,ai,seq__10478__$1,temp__5804__auto__,take_turn_orig_val__10474,defer_orig_val__10475,take_turn_temp_val__10476,defer_temp_val__10477,_STAR_parent_description_STAR__orig_val__10328_10715,_STAR_parent_description_STAR__temp_val__10329_10716,description__9411__auto____$1,_STAR_parent_description_STAR__orig_val__9962_10661,_STAR_parent_description_STAR__temp_val__9963_10662,description__9411__auto___10660){
return (function (p1__9794__9807__auto__){
return speclj.stub.params_match_QMARK_.call(null,with__9801__auto___11085__$1,p1__9794__9807__auto__);
});})(seq__10487_11073,chunk__10488_11074,count__10489_11075,i__10490_11076,seq__10479_11068,chunk__10484_11069,count__10485_11070,i__10486_11071,seq__10478,chunk__10491,count__10492,i__10493,name__9795__auto___11078,options__9796__auto___11079,invocations__9797__auto___11080,times__9798__auto___11081,times_QMARK___9799__auto___11082,check_params_QMARK___9800__auto___11083,with__9801__auto___11084,with__9801__auto___11085__$1,invocations_str__9802__auto___11086,n_11077,mode_11072,ai,seq__10478__$1,temp__5804__auto__,take_turn_orig_val__10474,defer_orig_val__10475,take_turn_temp_val__10476,defer_temp_val__10477,_STAR_parent_description_STAR__orig_val__10328_10715,_STAR_parent_description_STAR__temp_val__10329_10716,description__9411__auto____$1,_STAR_parent_description_STAR__orig_val__9962_10661,_STAR_parent_description_STAR__temp_val__9963_10662,description__9411__auto___10660))
,invocations__9797__auto___11080))){
} else {
throw (new speclj.platform.SpecFailure(["Expected: invocation of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__9795__auto___11078)," with ",cljs.core.pr_str.call(null,with__9801__auto___11085__$1),speclj.platform.endl,"     got: ",cljs.core.pr_str.call(null,invocations__9797__auto___11080)].join('')));
}
} else {
if(times_QMARK___9799__auto___11082){
if(cljs.core._EQ_.call(null,times__9798__auto___11081,cljs.core.count.call(null,invocations__9797__auto___11080))){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(times__9798__auto___11081)," ",invocations_str__9802__auto___11086.call(null,times__9798__auto___11081)," of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__9795__auto___11078),speclj.platform.endl,"     got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,invocations__9797__auto___11080))].join('')));
}
} else {
if(cljs.core.seq.call(null,invocations__9797__auto___11080)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: an invocation of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__9795__auto___11078),speclj.platform.endl,"     got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,invocations__9797__auto___11080))].join('')));
}

}
}
}

var expected__9548__auto___11089 = ((cljs.core._EQ_.call(null,(2),mode_11072))?new cljs.core.Keyword(null,"x","x",2099068185):new cljs.core.Keyword(null,"o","o",-1350007228));
var actual__9549__auto___11090 = new cljs.core.Keyword(null,"player","player",-97687400).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.screens.play_spec.state));
if(cljs.core._EQ_.call(null,expected__9548__auto___11089,actual__9549__auto___11090)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__9548__auto___11089;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9516__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9516__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__9549__auto___11090;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9516__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9516__auto__);
}
})()," (using =)"].join('')));
}

cljs.core.reset_BANG_.call(null,tic_tac_toe.screens.play_spec.state,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"board","board",-1907017633),tic_tac_toe.screens.play_spec.board_3,new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"current-screen","current-screen",-1454713691),new cljs.core.Keyword(null,"play","play",-580418022)], null));


var G__11091 = seq__10487_11073;
var G__11092 = chunk__10488_11074;
var G__11093 = count__10489_11075;
var G__11094 = (i__10490_11076 + (1));
seq__10487_11073 = G__11091;
chunk__10488_11074 = G__11092;
count__10489_11075 = G__11093;
i__10490_11076 = G__11094;
continue;
} else {
var temp__5804__auto___11095__$1 = cljs.core.seq.call(null,seq__10487_11073);
if(temp__5804__auto___11095__$1){
var seq__10487_11096__$1 = temp__5804__auto___11095__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10487_11096__$1)){
var c__5525__auto___11097 = cljs.core.chunk_first.call(null,seq__10487_11096__$1);
var G__11098 = cljs.core.chunk_rest.call(null,seq__10487_11096__$1);
var G__11099 = c__5525__auto___11097;
var G__11100 = cljs.core.count.call(null,c__5525__auto___11097);
var G__11101 = (0);
seq__10487_11073 = G__11098;
chunk__10488_11074 = G__11099;
count__10489_11075 = G__11100;
i__10490_11076 = G__11101;
continue;
} else {
var n_11102 = cljs.core.first.call(null,seq__10487_11096__$1);
cljs.core.swap_BANG_.call(null,tic_tac_toe.screens.play_spec.state,cljs.core.assoc,new cljs.core.Keyword(null,"mode","mode",654403691),mode_11072,new cljs.core.Keyword(null,"first-ai-level","first-ai-level",1004633644),ai,new cljs.core.Keyword(null,"player","player",-97687400),((cljs.core._EQ_.call(null,(2),mode_11072))?new cljs.core.Keyword(null,"x","x",2099068185):new cljs.core.Keyword(null,"o","o",-1350007228)),new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"gui","gui",604532813));

c3kit.wire.spec_helper.render.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tic_tac_toe.render_screen.render_screen,tic_tac_toe.screens.play_spec.state], null));

c3kit.wire.spec_helper.click_BANG_.call(null,["#index-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n_11102)].join(''));

var name__9795__auto___11103 = new cljs.core.Keyword(null,"turn","turn",75759344);
var options__9796__auto___11104 = cljs.core.PersistentArrayMap.EMPTY;
var invocations__9797__auto___11105 = speclj.stub.invocations_of.call(null,name__9795__auto___11103);
var times__9798__auto___11106 = new cljs.core.Keyword(null,"times","times",1671571467).cljs$core$IFn$_invoke$arity$1(options__9796__auto___11104);
var times_QMARK___9799__auto___11107 = typeof times__9798__auto___11106 === 'number';
var check_params_QMARK___9800__auto___11108 = cljs.core.contains_QMARK_.call(null,options__9796__auto___11104,new cljs.core.Keyword(null,"with","with",-1536296876));
var with__9801__auto___11109 = new cljs.core.Keyword(null,"with","with",-1536296876).cljs$core$IFn$_invoke$arity$1(options__9796__auto___11104);
var with__9801__auto___11110__$1 = (((with__9801__auto___11109 == null))?cljs.core.PersistentVector.EMPTY:with__9801__auto___11109);
var invocations_str__9802__auto___11111 = ((function (seq__10487_11073,chunk__10488_11074,count__10489_11075,i__10490_11076,seq__10479_11068,chunk__10484_11069,count__10485_11070,i__10486_11071,seq__10478,chunk__10491,count__10492,i__10493,name__9795__auto___11103,options__9796__auto___11104,invocations__9797__auto___11105,times__9798__auto___11106,times_QMARK___9799__auto___11107,check_params_QMARK___9800__auto___11108,with__9801__auto___11109,with__9801__auto___11110__$1,n_11102,seq__10487_11096__$1,temp__5804__auto___11095__$1,mode_11072,ai,seq__10478__$1,temp__5804__auto__,take_turn_orig_val__10474,defer_orig_val__10475,take_turn_temp_val__10476,defer_temp_val__10477,_STAR_parent_description_STAR__orig_val__10328_10715,_STAR_parent_description_STAR__temp_val__10329_10716,description__9411__auto____$1,_STAR_parent_description_STAR__orig_val__9962_10661,_STAR_parent_description_STAR__temp_val__9963_10662,description__9411__auto___10660){
return (function (p1__9792__9803__auto__){
if(cljs.core._EQ_.call(null,(1),p1__9792__9803__auto__)){
return "invocation";
} else {
return "invocations";
}
});})(seq__10487_11073,chunk__10488_11074,count__10489_11075,i__10490_11076,seq__10479_11068,chunk__10484_11069,count__10485_11070,i__10486_11071,seq__10478,chunk__10491,count__10492,i__10493,name__9795__auto___11103,options__9796__auto___11104,invocations__9797__auto___11105,times__9798__auto___11106,times_QMARK___9799__auto___11107,check_params_QMARK___9800__auto___11108,with__9801__auto___11109,with__9801__auto___11110__$1,n_11102,seq__10487_11096__$1,temp__5804__auto___11095__$1,mode_11072,ai,seq__10478__$1,temp__5804__auto__,take_turn_orig_val__10474,defer_orig_val__10475,take_turn_temp_val__10476,defer_temp_val__10477,_STAR_parent_description_STAR__orig_val__10328_10715,_STAR_parent_description_STAR__temp_val__10329_10716,description__9411__auto____$1,_STAR_parent_description_STAR__orig_val__9962_10661,_STAR_parent_description_STAR__temp_val__9963_10662,description__9411__auto___10660))
;
if(((times_QMARK___9799__auto___11107) && (check_params_QMARK___9800__auto___11108))){
var matching_invocations__9804__auto___11112 = cljs.core.filter.call(null,((function (seq__10487_11073,chunk__10488_11074,count__10489_11075,i__10490_11076,seq__10479_11068,chunk__10484_11069,count__10485_11070,i__10486_11071,seq__10478,chunk__10491,count__10492,i__10493,name__9795__auto___11103,options__9796__auto___11104,invocations__9797__auto___11105,times__9798__auto___11106,times_QMARK___9799__auto___11107,check_params_QMARK___9800__auto___11108,with__9801__auto___11109,with__9801__auto___11110__$1,invocations_str__9802__auto___11111,n_11102,seq__10487_11096__$1,temp__5804__auto___11095__$1,mode_11072,ai,seq__10478__$1,temp__5804__auto__,take_turn_orig_val__10474,defer_orig_val__10475,take_turn_temp_val__10476,defer_temp_val__10477,_STAR_parent_description_STAR__orig_val__10328_10715,_STAR_parent_description_STAR__temp_val__10329_10716,description__9411__auto____$1,_STAR_parent_description_STAR__orig_val__9962_10661,_STAR_parent_description_STAR__temp_val__9963_10662,description__9411__auto___10660){
return (function (p1__9793__9805__auto__){
return speclj.stub.params_match_QMARK_.call(null,with__9801__auto___11110__$1,p1__9793__9805__auto__);
});})(seq__10487_11073,chunk__10488_11074,count__10489_11075,i__10490_11076,seq__10479_11068,chunk__10484_11069,count__10485_11070,i__10486_11071,seq__10478,chunk__10491,count__10492,i__10493,name__9795__auto___11103,options__9796__auto___11104,invocations__9797__auto___11105,times__9798__auto___11106,times_QMARK___9799__auto___11107,check_params_QMARK___9800__auto___11108,with__9801__auto___11109,with__9801__auto___11110__$1,invocations_str__9802__auto___11111,n_11102,seq__10487_11096__$1,temp__5804__auto___11095__$1,mode_11072,ai,seq__10478__$1,temp__5804__auto__,take_turn_orig_val__10474,defer_orig_val__10475,take_turn_temp_val__10476,defer_temp_val__10477,_STAR_parent_description_STAR__orig_val__10328_10715,_STAR_parent_description_STAR__temp_val__10329_10716,description__9411__auto____$1,_STAR_parent_description_STAR__orig_val__9962_10661,_STAR_parent_description_STAR__temp_val__9963_10662,description__9411__auto___10660))
,invocations__9797__auto___11105);
var matching_count__9806__auto___11113 = cljs.core.count.call(null,matching_invocations__9804__auto___11112);
if(cljs.core._EQ_.call(null,times__9798__auto___11106,matching_count__9806__auto___11113)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(times__9798__auto___11106)," ",invocations_str__9802__auto___11111.call(null,times__9798__auto___11106)," of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__9795__auto___11103)," with ",cljs.core.pr_str.call(null,with__9801__auto___11110__$1),speclj.platform.endl,"     got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(matching_count__9806__auto___11113)," ",invocations_str__9802__auto___11111.call(null,matching_count__9806__auto___11113)].join('')));
}
} else {
if(check_params_QMARK___9800__auto___11108){
if(cljs.core.truth_(cljs.core.some.call(null,((function (seq__10487_11073,chunk__10488_11074,count__10489_11075,i__10490_11076,seq__10479_11068,chunk__10484_11069,count__10485_11070,i__10486_11071,seq__10478,chunk__10491,count__10492,i__10493,name__9795__auto___11103,options__9796__auto___11104,invocations__9797__auto___11105,times__9798__auto___11106,times_QMARK___9799__auto___11107,check_params_QMARK___9800__auto___11108,with__9801__auto___11109,with__9801__auto___11110__$1,invocations_str__9802__auto___11111,n_11102,seq__10487_11096__$1,temp__5804__auto___11095__$1,mode_11072,ai,seq__10478__$1,temp__5804__auto__,take_turn_orig_val__10474,defer_orig_val__10475,take_turn_temp_val__10476,defer_temp_val__10477,_STAR_parent_description_STAR__orig_val__10328_10715,_STAR_parent_description_STAR__temp_val__10329_10716,description__9411__auto____$1,_STAR_parent_description_STAR__orig_val__9962_10661,_STAR_parent_description_STAR__temp_val__9963_10662,description__9411__auto___10660){
return (function (p1__9794__9807__auto__){
return speclj.stub.params_match_QMARK_.call(null,with__9801__auto___11110__$1,p1__9794__9807__auto__);
});})(seq__10487_11073,chunk__10488_11074,count__10489_11075,i__10490_11076,seq__10479_11068,chunk__10484_11069,count__10485_11070,i__10486_11071,seq__10478,chunk__10491,count__10492,i__10493,name__9795__auto___11103,options__9796__auto___11104,invocations__9797__auto___11105,times__9798__auto___11106,times_QMARK___9799__auto___11107,check_params_QMARK___9800__auto___11108,with__9801__auto___11109,with__9801__auto___11110__$1,invocations_str__9802__auto___11111,n_11102,seq__10487_11096__$1,temp__5804__auto___11095__$1,mode_11072,ai,seq__10478__$1,temp__5804__auto__,take_turn_orig_val__10474,defer_orig_val__10475,take_turn_temp_val__10476,defer_temp_val__10477,_STAR_parent_description_STAR__orig_val__10328_10715,_STAR_parent_description_STAR__temp_val__10329_10716,description__9411__auto____$1,_STAR_parent_description_STAR__orig_val__9962_10661,_STAR_parent_description_STAR__temp_val__9963_10662,description__9411__auto___10660))
,invocations__9797__auto___11105))){
} else {
throw (new speclj.platform.SpecFailure(["Expected: invocation of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__9795__auto___11103)," with ",cljs.core.pr_str.call(null,with__9801__auto___11110__$1),speclj.platform.endl,"     got: ",cljs.core.pr_str.call(null,invocations__9797__auto___11105)].join('')));
}
} else {
if(times_QMARK___9799__auto___11107){
if(cljs.core._EQ_.call(null,times__9798__auto___11106,cljs.core.count.call(null,invocations__9797__auto___11105))){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(times__9798__auto___11106)," ",invocations_str__9802__auto___11111.call(null,times__9798__auto___11106)," of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__9795__auto___11103),speclj.platform.endl,"     got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,invocations__9797__auto___11105))].join('')));
}
} else {
if(cljs.core.seq.call(null,invocations__9797__auto___11105)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: an invocation of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__9795__auto___11103),speclj.platform.endl,"     got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,invocations__9797__auto___11105))].join('')));
}

}
}
}

var expected__9548__auto___11114 = ((cljs.core._EQ_.call(null,(2),mode_11072))?new cljs.core.Keyword(null,"x","x",2099068185):new cljs.core.Keyword(null,"o","o",-1350007228));
var actual__9549__auto___11115 = new cljs.core.Keyword(null,"player","player",-97687400).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.screens.play_spec.state));
if(cljs.core._EQ_.call(null,expected__9548__auto___11114,actual__9549__auto___11115)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__9548__auto___11114;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9516__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9516__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__9549__auto___11115;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9516__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9516__auto__);
}
})()," (using =)"].join('')));
}

cljs.core.reset_BANG_.call(null,tic_tac_toe.screens.play_spec.state,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"board","board",-1907017633),tic_tac_toe.screens.play_spec.board_3,new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"current-screen","current-screen",-1454713691),new cljs.core.Keyword(null,"play","play",-580418022)], null));


var G__11116 = cljs.core.next.call(null,seq__10487_11096__$1);
var G__11117 = null;
var G__11118 = (0);
var G__11119 = (0);
seq__10487_11073 = G__11116;
chunk__10488_11074 = G__11117;
count__10489_11075 = G__11118;
i__10490_11076 = G__11119;
continue;
}
} else {
}
}
break;
}

var G__11120 = seq__10479_11068;
var G__11121 = chunk__10484_11069;
var G__11122 = count__10485_11070;
var G__11123 = (i__10486_11071 + (1));
seq__10479_11068 = G__11120;
chunk__10484_11069 = G__11121;
count__10485_11070 = G__11122;
i__10486_11071 = G__11123;
continue;
} else {
var temp__5804__auto___11124__$1 = cljs.core.seq.call(null,seq__10479_11068);
if(temp__5804__auto___11124__$1){
var seq__10479_11125__$1 = temp__5804__auto___11124__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10479_11125__$1)){
var c__5525__auto___11126 = cljs.core.chunk_first.call(null,seq__10479_11125__$1);
var G__11127 = cljs.core.chunk_rest.call(null,seq__10479_11125__$1);
var G__11128 = c__5525__auto___11126;
var G__11129 = cljs.core.count.call(null,c__5525__auto___11126);
var G__11130 = (0);
seq__10479_11068 = G__11127;
chunk__10484_11069 = G__11128;
count__10485_11070 = G__11129;
i__10486_11071 = G__11130;
continue;
} else {
var mode_11131 = cljs.core.first.call(null,seq__10479_11125__$1);
var seq__10480_11132 = cljs.core.seq.call(null,cljs.core.range.call(null,(9)));
var chunk__10481_11133 = null;
var count__10482_11134 = (0);
var i__10483_11135 = (0);
while(true){
if((i__10483_11135 < count__10482_11134)){
var n_11136 = cljs.core._nth.call(null,chunk__10481_11133,i__10483_11135);
cljs.core.swap_BANG_.call(null,tic_tac_toe.screens.play_spec.state,cljs.core.assoc,new cljs.core.Keyword(null,"mode","mode",654403691),mode_11131,new cljs.core.Keyword(null,"first-ai-level","first-ai-level",1004633644),ai,new cljs.core.Keyword(null,"player","player",-97687400),((cljs.core._EQ_.call(null,(2),mode_11131))?new cljs.core.Keyword(null,"x","x",2099068185):new cljs.core.Keyword(null,"o","o",-1350007228)),new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"gui","gui",604532813));

c3kit.wire.spec_helper.render.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tic_tac_toe.render_screen.render_screen,tic_tac_toe.screens.play_spec.state], null));

c3kit.wire.spec_helper.click_BANG_.call(null,["#index-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n_11136)].join(''));

var name__9795__auto___11137 = new cljs.core.Keyword(null,"turn","turn",75759344);
var options__9796__auto___11138 = cljs.core.PersistentArrayMap.EMPTY;
var invocations__9797__auto___11139 = speclj.stub.invocations_of.call(null,name__9795__auto___11137);
var times__9798__auto___11140 = new cljs.core.Keyword(null,"times","times",1671571467).cljs$core$IFn$_invoke$arity$1(options__9796__auto___11138);
var times_QMARK___9799__auto___11141 = typeof times__9798__auto___11140 === 'number';
var check_params_QMARK___9800__auto___11142 = cljs.core.contains_QMARK_.call(null,options__9796__auto___11138,new cljs.core.Keyword(null,"with","with",-1536296876));
var with__9801__auto___11143 = new cljs.core.Keyword(null,"with","with",-1536296876).cljs$core$IFn$_invoke$arity$1(options__9796__auto___11138);
var with__9801__auto___11144__$1 = (((with__9801__auto___11143 == null))?cljs.core.PersistentVector.EMPTY:with__9801__auto___11143);
var invocations_str__9802__auto___11145 = ((function (seq__10480_11132,chunk__10481_11133,count__10482_11134,i__10483_11135,seq__10479_11068,chunk__10484_11069,count__10485_11070,i__10486_11071,seq__10478,chunk__10491,count__10492,i__10493,name__9795__auto___11137,options__9796__auto___11138,invocations__9797__auto___11139,times__9798__auto___11140,times_QMARK___9799__auto___11141,check_params_QMARK___9800__auto___11142,with__9801__auto___11143,with__9801__auto___11144__$1,n_11136,mode_11131,seq__10479_11125__$1,temp__5804__auto___11124__$1,ai,seq__10478__$1,temp__5804__auto__,take_turn_orig_val__10474,defer_orig_val__10475,take_turn_temp_val__10476,defer_temp_val__10477,_STAR_parent_description_STAR__orig_val__10328_10715,_STAR_parent_description_STAR__temp_val__10329_10716,description__9411__auto____$1,_STAR_parent_description_STAR__orig_val__9962_10661,_STAR_parent_description_STAR__temp_val__9963_10662,description__9411__auto___10660){
return (function (p1__9792__9803__auto__){
if(cljs.core._EQ_.call(null,(1),p1__9792__9803__auto__)){
return "invocation";
} else {
return "invocations";
}
});})(seq__10480_11132,chunk__10481_11133,count__10482_11134,i__10483_11135,seq__10479_11068,chunk__10484_11069,count__10485_11070,i__10486_11071,seq__10478,chunk__10491,count__10492,i__10493,name__9795__auto___11137,options__9796__auto___11138,invocations__9797__auto___11139,times__9798__auto___11140,times_QMARK___9799__auto___11141,check_params_QMARK___9800__auto___11142,with__9801__auto___11143,with__9801__auto___11144__$1,n_11136,mode_11131,seq__10479_11125__$1,temp__5804__auto___11124__$1,ai,seq__10478__$1,temp__5804__auto__,take_turn_orig_val__10474,defer_orig_val__10475,take_turn_temp_val__10476,defer_temp_val__10477,_STAR_parent_description_STAR__orig_val__10328_10715,_STAR_parent_description_STAR__temp_val__10329_10716,description__9411__auto____$1,_STAR_parent_description_STAR__orig_val__9962_10661,_STAR_parent_description_STAR__temp_val__9963_10662,description__9411__auto___10660))
;
if(((times_QMARK___9799__auto___11141) && (check_params_QMARK___9800__auto___11142))){
var matching_invocations__9804__auto___11146 = cljs.core.filter.call(null,((function (seq__10480_11132,chunk__10481_11133,count__10482_11134,i__10483_11135,seq__10479_11068,chunk__10484_11069,count__10485_11070,i__10486_11071,seq__10478,chunk__10491,count__10492,i__10493,name__9795__auto___11137,options__9796__auto___11138,invocations__9797__auto___11139,times__9798__auto___11140,times_QMARK___9799__auto___11141,check_params_QMARK___9800__auto___11142,with__9801__auto___11143,with__9801__auto___11144__$1,invocations_str__9802__auto___11145,n_11136,mode_11131,seq__10479_11125__$1,temp__5804__auto___11124__$1,ai,seq__10478__$1,temp__5804__auto__,take_turn_orig_val__10474,defer_orig_val__10475,take_turn_temp_val__10476,defer_temp_val__10477,_STAR_parent_description_STAR__orig_val__10328_10715,_STAR_parent_description_STAR__temp_val__10329_10716,description__9411__auto____$1,_STAR_parent_description_STAR__orig_val__9962_10661,_STAR_parent_description_STAR__temp_val__9963_10662,description__9411__auto___10660){
return (function (p1__9793__9805__auto__){
return speclj.stub.params_match_QMARK_.call(null,with__9801__auto___11144__$1,p1__9793__9805__auto__);
});})(seq__10480_11132,chunk__10481_11133,count__10482_11134,i__10483_11135,seq__10479_11068,chunk__10484_11069,count__10485_11070,i__10486_11071,seq__10478,chunk__10491,count__10492,i__10493,name__9795__auto___11137,options__9796__auto___11138,invocations__9797__auto___11139,times__9798__auto___11140,times_QMARK___9799__auto___11141,check_params_QMARK___9800__auto___11142,with__9801__auto___11143,with__9801__auto___11144__$1,invocations_str__9802__auto___11145,n_11136,mode_11131,seq__10479_11125__$1,temp__5804__auto___11124__$1,ai,seq__10478__$1,temp__5804__auto__,take_turn_orig_val__10474,defer_orig_val__10475,take_turn_temp_val__10476,defer_temp_val__10477,_STAR_parent_description_STAR__orig_val__10328_10715,_STAR_parent_description_STAR__temp_val__10329_10716,description__9411__auto____$1,_STAR_parent_description_STAR__orig_val__9962_10661,_STAR_parent_description_STAR__temp_val__9963_10662,description__9411__auto___10660))
,invocations__9797__auto___11139);
var matching_count__9806__auto___11147 = cljs.core.count.call(null,matching_invocations__9804__auto___11146);
if(cljs.core._EQ_.call(null,times__9798__auto___11140,matching_count__9806__auto___11147)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(times__9798__auto___11140)," ",invocations_str__9802__auto___11145.call(null,times__9798__auto___11140)," of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__9795__auto___11137)," with ",cljs.core.pr_str.call(null,with__9801__auto___11144__$1),speclj.platform.endl,"     got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(matching_count__9806__auto___11147)," ",invocations_str__9802__auto___11145.call(null,matching_count__9806__auto___11147)].join('')));
}
} else {
if(check_params_QMARK___9800__auto___11142){
if(cljs.core.truth_(cljs.core.some.call(null,((function (seq__10480_11132,chunk__10481_11133,count__10482_11134,i__10483_11135,seq__10479_11068,chunk__10484_11069,count__10485_11070,i__10486_11071,seq__10478,chunk__10491,count__10492,i__10493,name__9795__auto___11137,options__9796__auto___11138,invocations__9797__auto___11139,times__9798__auto___11140,times_QMARK___9799__auto___11141,check_params_QMARK___9800__auto___11142,with__9801__auto___11143,with__9801__auto___11144__$1,invocations_str__9802__auto___11145,n_11136,mode_11131,seq__10479_11125__$1,temp__5804__auto___11124__$1,ai,seq__10478__$1,temp__5804__auto__,take_turn_orig_val__10474,defer_orig_val__10475,take_turn_temp_val__10476,defer_temp_val__10477,_STAR_parent_description_STAR__orig_val__10328_10715,_STAR_parent_description_STAR__temp_val__10329_10716,description__9411__auto____$1,_STAR_parent_description_STAR__orig_val__9962_10661,_STAR_parent_description_STAR__temp_val__9963_10662,description__9411__auto___10660){
return (function (p1__9794__9807__auto__){
return speclj.stub.params_match_QMARK_.call(null,with__9801__auto___11144__$1,p1__9794__9807__auto__);
});})(seq__10480_11132,chunk__10481_11133,count__10482_11134,i__10483_11135,seq__10479_11068,chunk__10484_11069,count__10485_11070,i__10486_11071,seq__10478,chunk__10491,count__10492,i__10493,name__9795__auto___11137,options__9796__auto___11138,invocations__9797__auto___11139,times__9798__auto___11140,times_QMARK___9799__auto___11141,check_params_QMARK___9800__auto___11142,with__9801__auto___11143,with__9801__auto___11144__$1,invocations_str__9802__auto___11145,n_11136,mode_11131,seq__10479_11125__$1,temp__5804__auto___11124__$1,ai,seq__10478__$1,temp__5804__auto__,take_turn_orig_val__10474,defer_orig_val__10475,take_turn_temp_val__10476,defer_temp_val__10477,_STAR_parent_description_STAR__orig_val__10328_10715,_STAR_parent_description_STAR__temp_val__10329_10716,description__9411__auto____$1,_STAR_parent_description_STAR__orig_val__9962_10661,_STAR_parent_description_STAR__temp_val__9963_10662,description__9411__auto___10660))
,invocations__9797__auto___11139))){
} else {
throw (new speclj.platform.SpecFailure(["Expected: invocation of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__9795__auto___11137)," with ",cljs.core.pr_str.call(null,with__9801__auto___11144__$1),speclj.platform.endl,"     got: ",cljs.core.pr_str.call(null,invocations__9797__auto___11139)].join('')));
}
} else {
if(times_QMARK___9799__auto___11141){
if(cljs.core._EQ_.call(null,times__9798__auto___11140,cljs.core.count.call(null,invocations__9797__auto___11139))){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(times__9798__auto___11140)," ",invocations_str__9802__auto___11145.call(null,times__9798__auto___11140)," of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__9795__auto___11137),speclj.platform.endl,"     got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,invocations__9797__auto___11139))].join('')));
}
} else {
if(cljs.core.seq.call(null,invocations__9797__auto___11139)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: an invocation of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__9795__auto___11137),speclj.platform.endl,"     got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,invocations__9797__auto___11139))].join('')));
}

}
}
}

var expected__9548__auto___11148 = ((cljs.core._EQ_.call(null,(2),mode_11131))?new cljs.core.Keyword(null,"x","x",2099068185):new cljs.core.Keyword(null,"o","o",-1350007228));
var actual__9549__auto___11149 = new cljs.core.Keyword(null,"player","player",-97687400).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.screens.play_spec.state));
if(cljs.core._EQ_.call(null,expected__9548__auto___11148,actual__9549__auto___11149)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__9548__auto___11148;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9516__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9516__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__9549__auto___11149;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9516__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9516__auto__);
}
})()," (using =)"].join('')));
}

cljs.core.reset_BANG_.call(null,tic_tac_toe.screens.play_spec.state,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"board","board",-1907017633),tic_tac_toe.screens.play_spec.board_3,new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"current-screen","current-screen",-1454713691),new cljs.core.Keyword(null,"play","play",-580418022)], null));


var G__11150 = seq__10480_11132;
var G__11151 = chunk__10481_11133;
var G__11152 = count__10482_11134;
var G__11153 = (i__10483_11135 + (1));
seq__10480_11132 = G__11150;
chunk__10481_11133 = G__11151;
count__10482_11134 = G__11152;
i__10483_11135 = G__11153;
continue;
} else {
var temp__5804__auto___11154__$2 = cljs.core.seq.call(null,seq__10480_11132);
if(temp__5804__auto___11154__$2){
var seq__10480_11155__$1 = temp__5804__auto___11154__$2;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10480_11155__$1)){
var c__5525__auto___11156 = cljs.core.chunk_first.call(null,seq__10480_11155__$1);
var G__11157 = cljs.core.chunk_rest.call(null,seq__10480_11155__$1);
var G__11158 = c__5525__auto___11156;
var G__11159 = cljs.core.count.call(null,c__5525__auto___11156);
var G__11160 = (0);
seq__10480_11132 = G__11157;
chunk__10481_11133 = G__11158;
count__10482_11134 = G__11159;
i__10483_11135 = G__11160;
continue;
} else {
var n_11161 = cljs.core.first.call(null,seq__10480_11155__$1);
cljs.core.swap_BANG_.call(null,tic_tac_toe.screens.play_spec.state,cljs.core.assoc,new cljs.core.Keyword(null,"mode","mode",654403691),mode_11131,new cljs.core.Keyword(null,"first-ai-level","first-ai-level",1004633644),ai,new cljs.core.Keyword(null,"player","player",-97687400),((cljs.core._EQ_.call(null,(2),mode_11131))?new cljs.core.Keyword(null,"x","x",2099068185):new cljs.core.Keyword(null,"o","o",-1350007228)),new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"gui","gui",604532813));

c3kit.wire.spec_helper.render.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tic_tac_toe.render_screen.render_screen,tic_tac_toe.screens.play_spec.state], null));

c3kit.wire.spec_helper.click_BANG_.call(null,["#index-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n_11161)].join(''));

var name__9795__auto___11162 = new cljs.core.Keyword(null,"turn","turn",75759344);
var options__9796__auto___11163 = cljs.core.PersistentArrayMap.EMPTY;
var invocations__9797__auto___11164 = speclj.stub.invocations_of.call(null,name__9795__auto___11162);
var times__9798__auto___11165 = new cljs.core.Keyword(null,"times","times",1671571467).cljs$core$IFn$_invoke$arity$1(options__9796__auto___11163);
var times_QMARK___9799__auto___11166 = typeof times__9798__auto___11165 === 'number';
var check_params_QMARK___9800__auto___11167 = cljs.core.contains_QMARK_.call(null,options__9796__auto___11163,new cljs.core.Keyword(null,"with","with",-1536296876));
var with__9801__auto___11168 = new cljs.core.Keyword(null,"with","with",-1536296876).cljs$core$IFn$_invoke$arity$1(options__9796__auto___11163);
var with__9801__auto___11169__$1 = (((with__9801__auto___11168 == null))?cljs.core.PersistentVector.EMPTY:with__9801__auto___11168);
var invocations_str__9802__auto___11170 = ((function (seq__10480_11132,chunk__10481_11133,count__10482_11134,i__10483_11135,seq__10479_11068,chunk__10484_11069,count__10485_11070,i__10486_11071,seq__10478,chunk__10491,count__10492,i__10493,name__9795__auto___11162,options__9796__auto___11163,invocations__9797__auto___11164,times__9798__auto___11165,times_QMARK___9799__auto___11166,check_params_QMARK___9800__auto___11167,with__9801__auto___11168,with__9801__auto___11169__$1,n_11161,seq__10480_11155__$1,temp__5804__auto___11154__$2,mode_11131,seq__10479_11125__$1,temp__5804__auto___11124__$1,ai,seq__10478__$1,temp__5804__auto__,take_turn_orig_val__10474,defer_orig_val__10475,take_turn_temp_val__10476,defer_temp_val__10477,_STAR_parent_description_STAR__orig_val__10328_10715,_STAR_parent_description_STAR__temp_val__10329_10716,description__9411__auto____$1,_STAR_parent_description_STAR__orig_val__9962_10661,_STAR_parent_description_STAR__temp_val__9963_10662,description__9411__auto___10660){
return (function (p1__9792__9803__auto__){
if(cljs.core._EQ_.call(null,(1),p1__9792__9803__auto__)){
return "invocation";
} else {
return "invocations";
}
});})(seq__10480_11132,chunk__10481_11133,count__10482_11134,i__10483_11135,seq__10479_11068,chunk__10484_11069,count__10485_11070,i__10486_11071,seq__10478,chunk__10491,count__10492,i__10493,name__9795__auto___11162,options__9796__auto___11163,invocations__9797__auto___11164,times__9798__auto___11165,times_QMARK___9799__auto___11166,check_params_QMARK___9800__auto___11167,with__9801__auto___11168,with__9801__auto___11169__$1,n_11161,seq__10480_11155__$1,temp__5804__auto___11154__$2,mode_11131,seq__10479_11125__$1,temp__5804__auto___11124__$1,ai,seq__10478__$1,temp__5804__auto__,take_turn_orig_val__10474,defer_orig_val__10475,take_turn_temp_val__10476,defer_temp_val__10477,_STAR_parent_description_STAR__orig_val__10328_10715,_STAR_parent_description_STAR__temp_val__10329_10716,description__9411__auto____$1,_STAR_parent_description_STAR__orig_val__9962_10661,_STAR_parent_description_STAR__temp_val__9963_10662,description__9411__auto___10660))
;
if(((times_QMARK___9799__auto___11166) && (check_params_QMARK___9800__auto___11167))){
var matching_invocations__9804__auto___11171 = cljs.core.filter.call(null,((function (seq__10480_11132,chunk__10481_11133,count__10482_11134,i__10483_11135,seq__10479_11068,chunk__10484_11069,count__10485_11070,i__10486_11071,seq__10478,chunk__10491,count__10492,i__10493,name__9795__auto___11162,options__9796__auto___11163,invocations__9797__auto___11164,times__9798__auto___11165,times_QMARK___9799__auto___11166,check_params_QMARK___9800__auto___11167,with__9801__auto___11168,with__9801__auto___11169__$1,invocations_str__9802__auto___11170,n_11161,seq__10480_11155__$1,temp__5804__auto___11154__$2,mode_11131,seq__10479_11125__$1,temp__5804__auto___11124__$1,ai,seq__10478__$1,temp__5804__auto__,take_turn_orig_val__10474,defer_orig_val__10475,take_turn_temp_val__10476,defer_temp_val__10477,_STAR_parent_description_STAR__orig_val__10328_10715,_STAR_parent_description_STAR__temp_val__10329_10716,description__9411__auto____$1,_STAR_parent_description_STAR__orig_val__9962_10661,_STAR_parent_description_STAR__temp_val__9963_10662,description__9411__auto___10660){
return (function (p1__9793__9805__auto__){
return speclj.stub.params_match_QMARK_.call(null,with__9801__auto___11169__$1,p1__9793__9805__auto__);
});})(seq__10480_11132,chunk__10481_11133,count__10482_11134,i__10483_11135,seq__10479_11068,chunk__10484_11069,count__10485_11070,i__10486_11071,seq__10478,chunk__10491,count__10492,i__10493,name__9795__auto___11162,options__9796__auto___11163,invocations__9797__auto___11164,times__9798__auto___11165,times_QMARK___9799__auto___11166,check_params_QMARK___9800__auto___11167,with__9801__auto___11168,with__9801__auto___11169__$1,invocations_str__9802__auto___11170,n_11161,seq__10480_11155__$1,temp__5804__auto___11154__$2,mode_11131,seq__10479_11125__$1,temp__5804__auto___11124__$1,ai,seq__10478__$1,temp__5804__auto__,take_turn_orig_val__10474,defer_orig_val__10475,take_turn_temp_val__10476,defer_temp_val__10477,_STAR_parent_description_STAR__orig_val__10328_10715,_STAR_parent_description_STAR__temp_val__10329_10716,description__9411__auto____$1,_STAR_parent_description_STAR__orig_val__9962_10661,_STAR_parent_description_STAR__temp_val__9963_10662,description__9411__auto___10660))
,invocations__9797__auto___11164);
var matching_count__9806__auto___11172 = cljs.core.count.call(null,matching_invocations__9804__auto___11171);
if(cljs.core._EQ_.call(null,times__9798__auto___11165,matching_count__9806__auto___11172)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(times__9798__auto___11165)," ",invocations_str__9802__auto___11170.call(null,times__9798__auto___11165)," of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__9795__auto___11162)," with ",cljs.core.pr_str.call(null,with__9801__auto___11169__$1),speclj.platform.endl,"     got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(matching_count__9806__auto___11172)," ",invocations_str__9802__auto___11170.call(null,matching_count__9806__auto___11172)].join('')));
}
} else {
if(check_params_QMARK___9800__auto___11167){
if(cljs.core.truth_(cljs.core.some.call(null,((function (seq__10480_11132,chunk__10481_11133,count__10482_11134,i__10483_11135,seq__10479_11068,chunk__10484_11069,count__10485_11070,i__10486_11071,seq__10478,chunk__10491,count__10492,i__10493,name__9795__auto___11162,options__9796__auto___11163,invocations__9797__auto___11164,times__9798__auto___11165,times_QMARK___9799__auto___11166,check_params_QMARK___9800__auto___11167,with__9801__auto___11168,with__9801__auto___11169__$1,invocations_str__9802__auto___11170,n_11161,seq__10480_11155__$1,temp__5804__auto___11154__$2,mode_11131,seq__10479_11125__$1,temp__5804__auto___11124__$1,ai,seq__10478__$1,temp__5804__auto__,take_turn_orig_val__10474,defer_orig_val__10475,take_turn_temp_val__10476,defer_temp_val__10477,_STAR_parent_description_STAR__orig_val__10328_10715,_STAR_parent_description_STAR__temp_val__10329_10716,description__9411__auto____$1,_STAR_parent_description_STAR__orig_val__9962_10661,_STAR_parent_description_STAR__temp_val__9963_10662,description__9411__auto___10660){
return (function (p1__9794__9807__auto__){
return speclj.stub.params_match_QMARK_.call(null,with__9801__auto___11169__$1,p1__9794__9807__auto__);
});})(seq__10480_11132,chunk__10481_11133,count__10482_11134,i__10483_11135,seq__10479_11068,chunk__10484_11069,count__10485_11070,i__10486_11071,seq__10478,chunk__10491,count__10492,i__10493,name__9795__auto___11162,options__9796__auto___11163,invocations__9797__auto___11164,times__9798__auto___11165,times_QMARK___9799__auto___11166,check_params_QMARK___9800__auto___11167,with__9801__auto___11168,with__9801__auto___11169__$1,invocations_str__9802__auto___11170,n_11161,seq__10480_11155__$1,temp__5804__auto___11154__$2,mode_11131,seq__10479_11125__$1,temp__5804__auto___11124__$1,ai,seq__10478__$1,temp__5804__auto__,take_turn_orig_val__10474,defer_orig_val__10475,take_turn_temp_val__10476,defer_temp_val__10477,_STAR_parent_description_STAR__orig_val__10328_10715,_STAR_parent_description_STAR__temp_val__10329_10716,description__9411__auto____$1,_STAR_parent_description_STAR__orig_val__9962_10661,_STAR_parent_description_STAR__temp_val__9963_10662,description__9411__auto___10660))
,invocations__9797__auto___11164))){
} else {
throw (new speclj.platform.SpecFailure(["Expected: invocation of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__9795__auto___11162)," with ",cljs.core.pr_str.call(null,with__9801__auto___11169__$1),speclj.platform.endl,"     got: ",cljs.core.pr_str.call(null,invocations__9797__auto___11164)].join('')));
}
} else {
if(times_QMARK___9799__auto___11166){
if(cljs.core._EQ_.call(null,times__9798__auto___11165,cljs.core.count.call(null,invocations__9797__auto___11164))){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(times__9798__auto___11165)," ",invocations_str__9802__auto___11170.call(null,times__9798__auto___11165)," of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__9795__auto___11162),speclj.platform.endl,"     got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,invocations__9797__auto___11164))].join('')));
}
} else {
if(cljs.core.seq.call(null,invocations__9797__auto___11164)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: an invocation of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__9795__auto___11162),speclj.platform.endl,"     got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,invocations__9797__auto___11164))].join('')));
}

}
}
}

var expected__9548__auto___11173 = ((cljs.core._EQ_.call(null,(2),mode_11131))?new cljs.core.Keyword(null,"x","x",2099068185):new cljs.core.Keyword(null,"o","o",-1350007228));
var actual__9549__auto___11174 = new cljs.core.Keyword(null,"player","player",-97687400).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.screens.play_spec.state));
if(cljs.core._EQ_.call(null,expected__9548__auto___11173,actual__9549__auto___11174)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__9548__auto___11173;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9516__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9516__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__9549__auto___11174;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9516__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9516__auto__);
}
})()," (using =)"].join('')));
}

cljs.core.reset_BANG_.call(null,tic_tac_toe.screens.play_spec.state,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"board","board",-1907017633),tic_tac_toe.screens.play_spec.board_3,new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"current-screen","current-screen",-1454713691),new cljs.core.Keyword(null,"play","play",-580418022)], null));


var G__11175 = cljs.core.next.call(null,seq__10480_11155__$1);
var G__11176 = null;
var G__11177 = (0);
var G__11178 = (0);
seq__10480_11132 = G__11175;
chunk__10481_11133 = G__11176;
count__10482_11134 = G__11177;
i__10483_11135 = G__11178;
continue;
}
} else {
}
}
break;
}

var G__11179 = cljs.core.next.call(null,seq__10479_11125__$1);
var G__11180 = null;
var G__11181 = (0);
var G__11182 = (0);
seq__10479_11068 = G__11179;
chunk__10484_11069 = G__11180;
count__10485_11070 = G__11181;
i__10486_11071 = G__11182;
continue;
}
} else {
}
}
break;
}

var G__11183 = cljs.core.next.call(null,seq__10478__$1);
var G__11184 = null;
var G__11185 = (0);
var G__11186 = (0);
seq__10478 = G__11183;
chunk__10491 = G__11184;
count__10492 = G__11185;
i__10493 = G__11186;
continue;
}
} else {
return null;
}
}
break;
}
}finally {(tic_tac_toe.screens.play.defer = defer_orig_val__10475);

(tic_tac_toe.player.take_turn = take_turn_orig_val__10474);
}});})(_STAR_parent_description_STAR__orig_val__10328_10715,_STAR_parent_description_STAR__temp_val__10329_10716,description__9411__auto____$1,_STAR_parent_description_STAR__orig_val__9962_10661,_STAR_parent_description_STAR__temp_val__9963_10662,description__9411__auto___10660))
,false),speclj.components.new_characteristic.call(null,"AI is not triggered if game over",((function (_STAR_parent_description_STAR__orig_val__10328_10715,_STAR_parent_description_STAR__temp_val__10329_10716,description__9411__auto____$1,_STAR_parent_description_STAR__orig_val__9962_10661,_STAR_parent_description_STAR__temp_val__9963_10662,description__9411__auto___10660){
return (function (){
cljs.core.swap_BANG_.call(null,tic_tac_toe.screens.play_spec.state,cljs.core.assoc,new cljs.core.Keyword(null,"board","board",-1907017633),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"x","x",2099068185),(3),new cljs.core.Keyword(null,"o","o",-1350007228),new cljs.core.Keyword(null,"o","o",-1350007228),(6),(7),(8),(9)], null),new cljs.core.Keyword(null,"mode","mode",654403691),(2),new cljs.core.Keyword(null,"first-ai-level","first-ai-level",1004633644),(3));

c3kit.wire.spec_helper.click_BANG_.call(null,"#index-2");

var expected__9548__auto__ = new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"o","o",-1350007228),new cljs.core.Keyword(null,"o","o",-1350007228),(6),(7),(8),(9)], null);
var actual__9549__auto__ = new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.screens.play_spec.state));
if(cljs.core._EQ_.call(null,expected__9548__auto__,actual__9549__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__9548__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9516__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9516__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__9549__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9516__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9516__auto__);
}
})()," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__10328_10715,_STAR_parent_description_STAR__temp_val__10329_10716,description__9411__auto____$1,_STAR_parent_description_STAR__orig_val__9962_10661,_STAR_parent_description_STAR__temp_val__9963_10662,description__9411__auto___10660))
,false),speclj.components.new_characteristic.call(null,"AI updates game state",((function (_STAR_parent_description_STAR__orig_val__10328_10715,_STAR_parent_description_STAR__temp_val__10329_10716,description__9411__auto____$1,_STAR_parent_description_STAR__orig_val__9962_10661,_STAR_parent_description_STAR__temp_val__9963_10662,description__9411__auto___10660){
return (function (){
var defer_orig_val__10506 = tic_tac_toe.screens.play.defer;
var defer_temp_val__10507 = (function (f){
return f.call(null);
});
(tic_tac_toe.screens.play.defer = defer_temp_val__10507);

try{cljs.core.swap_BANG_.call(null,tic_tac_toe.screens.play_spec.state,cljs.core.assoc,new cljs.core.Keyword(null,"board","board",-1907017633),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"x","x",2099068185),(3),new cljs.core.Keyword(null,"o","o",-1350007228),new cljs.core.Keyword(null,"o","o",-1350007228),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"o","o",-1350007228),new cljs.core.Keyword(null,"o","o",-1350007228),(9)], null),new cljs.core.Keyword(null,"mode","mode",654403691),(2),new cljs.core.Keyword(null,"first-ai-level","first-ai-level",1004633644),(3));

c3kit.wire.spec_helper.click_BANG_.call(null,"#index-8");

var expected__9548__auto__ = "O wins!";
var actual__9549__auto__ = new cljs.core.Keyword(null,"game-state","game-state",935682735).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.screens.play_spec.state));
if(cljs.core._EQ_.call(null,expected__9548__auto__,actual__9549__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__9548__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9516__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9516__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__9549__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9516__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9516__auto__);
}
})()," (using =)"].join('')));
}
}finally {(tic_tac_toe.screens.play.defer = defer_orig_val__10506);
}});})(_STAR_parent_description_STAR__orig_val__10328_10715,_STAR_parent_description_STAR__temp_val__10329_10716,description__9411__auto____$1,_STAR_parent_description_STAR__orig_val__9962_10661,_STAR_parent_description_STAR__temp_val__9963_10662,description__9411__auto___10660))
,false),speclj.components.new_characteristic.call(null,"AI doesn't toggle human? to true if mode 4",((function (_STAR_parent_description_STAR__orig_val__10328_10715,_STAR_parent_description_STAR__temp_val__10329_10716,description__9411__auto____$1,_STAR_parent_description_STAR__orig_val__9962_10661,_STAR_parent_description_STAR__temp_val__9963_10662,description__9411__auto___10660){
return (function (){
var take_turn_orig_val__10508 = tic_tac_toe.player.take_turn;
var take_turn_temp_val__10509 = speclj.stub.stub.call(null,new cljs.core.Keyword(null,"turn","turn",75759344),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"return","return",-1891502105),tic_tac_toe.screens.play_spec.board_3], null));
(tic_tac_toe.player.take_turn = take_turn_temp_val__10509);

try{cljs.core.swap_BANG_.call(null,tic_tac_toe.screens.play_spec.state,cljs.core.assoc,new cljs.core.Keyword(null,"mode","mode",654403691),(4),new cljs.core.Keyword(null,"human?","human?",-2017219054),false,new cljs.core.Keyword(null,"first-ai-level","first-ai-level",1004633644),(1),new cljs.core.Keyword(null,"second-ai-level","second-ai-level",-418730455),(3));

c3kit.wire.spec_helper.render.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tic_tac_toe.render_screen.render_screen,tic_tac_toe.screens.play_spec.state], null));

var expected__9548__auto__ = false;
var actual__9549__auto__ = new cljs.core.Keyword(null,"human?","human?",-2017219054).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.screens.play_spec.state));
if(cljs.core._EQ_.call(null,expected__9548__auto__,actual__9549__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__9548__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9516__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9516__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__9549__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9516__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9516__auto__);
}
})()," (using =)"].join('')));
}
}finally {(tic_tac_toe.player.take_turn = take_turn_orig_val__10508);
}});})(_STAR_parent_description_STAR__orig_val__10328_10715,_STAR_parent_description_STAR__temp_val__10329_10716,description__9411__auto____$1,_STAR_parent_description_STAR__orig_val__9962_10661,_STAR_parent_description_STAR__temp_val__9963_10662,description__9411__auto___10660))
,false)],null)));
var chunk__10331_10718 = null;
var count__10332_10719 = (0);
var i__10333_10720 = (0);
while(true){
if((i__10333_10720 < count__10332_10719)){
var component__9412__auto___11187 = cljs.core._nth.call(null,chunk__10331_10718,i__10333_10720);
speclj.components.install.call(null,component__9412__auto___11187,description__9411__auto____$1);


var G__11188 = seq__10330_10717;
var G__11189 = chunk__10331_10718;
var G__11190 = count__10332_10719;
var G__11191 = (i__10333_10720 + (1));
seq__10330_10717 = G__11188;
chunk__10331_10718 = G__11189;
count__10332_10719 = G__11190;
i__10333_10720 = G__11191;
continue;
} else {
var temp__5804__auto___11192 = cljs.core.seq.call(null,seq__10330_10717);
if(temp__5804__auto___11192){
var seq__10330_11193__$1 = temp__5804__auto___11192;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10330_11193__$1)){
var c__5525__auto___11194 = cljs.core.chunk_first.call(null,seq__10330_11193__$1);
var G__11195 = cljs.core.chunk_rest.call(null,seq__10330_11193__$1);
var G__11196 = c__5525__auto___11194;
var G__11197 = cljs.core.count.call(null,c__5525__auto___11194);
var G__11198 = (0);
seq__10330_10717 = G__11195;
chunk__10331_10718 = G__11196;
count__10332_10719 = G__11197;
i__10333_10720 = G__11198;
continue;
} else {
var component__9412__auto___11199 = cljs.core.first.call(null,seq__10330_11193__$1);
speclj.components.install.call(null,component__9412__auto___11199,description__9411__auto____$1);


var G__11200 = cljs.core.next.call(null,seq__10330_11193__$1);
var G__11201 = null;
var G__11202 = (0);
var G__11203 = (0);
seq__10330_10717 = G__11200;
chunk__10331_10718 = G__11201;
count__10332_10719 = G__11202;
i__10333_10720 = G__11203;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__10328_10715);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__9411__auto____$1);
}

return description__9411__auto____$1;
})(),(function (){var description__9411__auto____$1 = speclj.components.new_description.call(null,"4x4",false,"tic-tac-toe.screens.play-spec");
var _STAR_parent_description_STAR__orig_val__10510_11204 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__10511_11205 = description__9411__auto____$1;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__10511_11205);

try{var seq__10512_11206 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,11,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_before.call(null,((function (_STAR_parent_description_STAR__orig_val__10510_11204,_STAR_parent_description_STAR__temp_val__10511_11205,description__9411__auto____$1,_STAR_parent_description_STAR__orig_val__9962_10661,_STAR_parent_description_STAR__temp_val__9963_10662,description__9411__auto___10660){
return (function (){
cljs.core.reset_BANG_.call(null,tic_tac_toe.screens.play_spec.state,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"current-screen","current-screen",-1454713691),new cljs.core.Keyword(null,"play","play",-580418022),new cljs.core.Keyword(null,"board","board",-1907017633),tic_tac_toe.screens.play_spec.board_4,new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"mode","mode",654403691),(1),new cljs.core.Keyword(null,"game-state","game-state",935682735),new cljs.core.Keyword(null,"in-progress","in-progress",2126442630),new cljs.core.Keyword(null,"human?","human?",-2017219054),true], null));

return c3kit.wire.spec_helper.render.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tic_tac_toe.render_screen.render_screen,tic_tac_toe.screens.play_spec.state], null));
});})(_STAR_parent_description_STAR__orig_val__10510_11204,_STAR_parent_description_STAR__temp_val__10511_11205,description__9411__auto____$1,_STAR_parent_description_STAR__orig_val__9962_10661,_STAR_parent_description_STAR__temp_val__9963_10662,description__9411__auto___10660))
),speclj.components.new_characteristic.call(null,"renders board",((function (_STAR_parent_description_STAR__orig_val__10510_11204,_STAR_parent_description_STAR__temp_val__10511_11205,description__9411__auto____$1,_STAR_parent_description_STAR__orig_val__9962_10661,_STAR_parent_description_STAR__temp_val__9963_10662,description__9411__auto___10660){
return (function (){
var expected__9548__auto___11210 = (16);
var actual__9549__auto___11211 = cljs.core.count.call(null,cljs.core.vec.call(null,c3kit.wire.js.query_selector_all.call(null,".board-square")));
if(cljs.core._EQ_.call(null,expected__9548__auto___11210,actual__9549__auto___11211)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__9548__auto___11210;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9516__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9516__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__9549__auto___11211;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9516__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9516__auto__);
}
})()," (using =)"].join('')));
}

var value__9911__auto___11212 = "#board-wrapper";
var node__9912__auto___11213 = c3kit.wire.spec_helper.select.call(null,value__9911__auto___11212);
if(cljs.core.truth_(node__9912__auto___11213)){
} else {
throw (new speclj.platform.SpecFailure(["Expected selector to find node: ",(function (){var temp__5806__auto__ = value__9911__auto___11212;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9516__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9516__auto__);
}
})()].join('')));
}

var value__9911__auto__ = ".four-grid";
var node__9912__auto__ = c3kit.wire.spec_helper.select.call(null,value__9911__auto__);
if(cljs.core.truth_(node__9912__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected selector to find node: ",(function (){var temp__5806__auto__ = value__9911__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9516__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9516__auto__);
}
})()].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__10510_11204,_STAR_parent_description_STAR__temp_val__10511_11205,description__9411__auto____$1,_STAR_parent_description_STAR__orig_val__9962_10661,_STAR_parent_description_STAR__temp_val__9963_10662,description__9411__auto___10660))
,false),speclj.components.new_characteristic.call(null,"buttons have IDs 0-15",((function (_STAR_parent_description_STAR__orig_val__10510_11204,_STAR_parent_description_STAR__temp_val__10511_11205,description__9411__auto____$1,_STAR_parent_description_STAR__orig_val__9962_10661,_STAR_parent_description_STAR__temp_val__9963_10662,description__9411__auto___10660){
return (function (){
var seq__10588 = cljs.core.seq.call(null,cljs.core.range.call(null,(16)));
var chunk__10589 = null;
var count__10590 = (0);
var i__10591 = (0);
while(true){
if((i__10591 < count__10590)){
var n = cljs.core._nth.call(null,chunk__10589,i__10591);
var value__9911__auto___11214 = ["#index-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join('');
var node__9912__auto___11215 = c3kit.wire.spec_helper.select.call(null,value__9911__auto___11214);
if(cljs.core.truth_(node__9912__auto___11215)){
} else {
throw (new speclj.platform.SpecFailure(["Expected selector to find node: ",(function (){var temp__5806__auto__ = value__9911__auto___11214;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9516__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9516__auto__);
}
})()].join('')));
}


var G__11216 = seq__10588;
var G__11217 = chunk__10589;
var G__11218 = count__10590;
var G__11219 = (i__10591 + (1));
seq__10588 = G__11216;
chunk__10589 = G__11217;
count__10590 = G__11218;
i__10591 = G__11219;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__10588);
if(temp__5804__auto__){
var seq__10588__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10588__$1)){
var c__5525__auto__ = cljs.core.chunk_first.call(null,seq__10588__$1);
var G__11220 = cljs.core.chunk_rest.call(null,seq__10588__$1);
var G__11221 = c__5525__auto__;
var G__11222 = cljs.core.count.call(null,c__5525__auto__);
var G__11223 = (0);
seq__10588 = G__11220;
chunk__10589 = G__11221;
count__10590 = G__11222;
i__10591 = G__11223;
continue;
} else {
var n = cljs.core.first.call(null,seq__10588__$1);
var value__9911__auto___11224 = ["#index-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join('');
var node__9912__auto___11225 = c3kit.wire.spec_helper.select.call(null,value__9911__auto___11224);
if(cljs.core.truth_(node__9912__auto___11225)){
} else {
throw (new speclj.platform.SpecFailure(["Expected selector to find node: ",(function (){var temp__5806__auto__ = value__9911__auto___11224;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9516__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9516__auto__);
}
})()].join('')));
}


var G__11226 = cljs.core.next.call(null,seq__10588__$1);
var G__11227 = null;
var G__11228 = (0);
var G__11229 = (0);
seq__10588 = G__11226;
chunk__10589 = G__11227;
count__10590 = G__11228;
i__10591 = G__11229;
continue;
}
} else {
return null;
}
}
break;
}
});})(_STAR_parent_description_STAR__orig_val__10510_11204,_STAR_parent_description_STAR__temp_val__10511_11205,description__9411__auto____$1,_STAR_parent_description_STAR__orig_val__9962_10661,_STAR_parent_description_STAR__temp_val__9963_10662,description__9411__auto___10660))
,false),speclj.components.new_characteristic.call(null,"clicking button updates board in state",((function (_STAR_parent_description_STAR__orig_val__10510_11204,_STAR_parent_description_STAR__temp_val__10511_11205,description__9411__auto____$1,_STAR_parent_description_STAR__orig_val__9962_10661,_STAR_parent_description_STAR__temp_val__9963_10662,description__9411__auto___10660){
return (function (){
var seq__10592 = cljs.core.seq.call(null,cljs.core.range.call(null,(16)));
var chunk__10593 = null;
var count__10594 = (0);
var i__10595 = (0);
while(true){
if((i__10595 < count__10594)){
var n = cljs.core._nth.call(null,chunk__10593,i__10595);
c3kit.wire.spec_helper.click_BANG_.call(null,["#index-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join(''));

var expected__9548__auto___11230 = cljs.core.assoc.call(null,tic_tac_toe.screens.play_spec.board_4,n,new cljs.core.Keyword(null,"x","x",2099068185));
var actual__9549__auto___11231 = new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.screens.play_spec.state));
if(cljs.core._EQ_.call(null,expected__9548__auto___11230,actual__9549__auto___11231)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__9548__auto___11230;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9516__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9516__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__9549__auto___11231;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9516__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9516__auto__);
}
})()," (using =)"].join('')));
}

cljs.core.swap_BANG_.call(null,tic_tac_toe.screens.play_spec.state,cljs.core.assoc,new cljs.core.Keyword(null,"board","board",-1907017633),tic_tac_toe.screens.play_spec.board_4,new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"x","x",2099068185));


var G__11232 = seq__10592;
var G__11233 = chunk__10593;
var G__11234 = count__10594;
var G__11235 = (i__10595 + (1));
seq__10592 = G__11232;
chunk__10593 = G__11233;
count__10594 = G__11234;
i__10595 = G__11235;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__10592);
if(temp__5804__auto__){
var seq__10592__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10592__$1)){
var c__5525__auto__ = cljs.core.chunk_first.call(null,seq__10592__$1);
var G__11236 = cljs.core.chunk_rest.call(null,seq__10592__$1);
var G__11237 = c__5525__auto__;
var G__11238 = cljs.core.count.call(null,c__5525__auto__);
var G__11239 = (0);
seq__10592 = G__11236;
chunk__10593 = G__11237;
count__10594 = G__11238;
i__10595 = G__11239;
continue;
} else {
var n = cljs.core.first.call(null,seq__10592__$1);
c3kit.wire.spec_helper.click_BANG_.call(null,["#index-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join(''));

var expected__9548__auto___11240 = cljs.core.assoc.call(null,tic_tac_toe.screens.play_spec.board_4,n,new cljs.core.Keyword(null,"x","x",2099068185));
var actual__9549__auto___11241 = new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.screens.play_spec.state));
if(cljs.core._EQ_.call(null,expected__9548__auto___11240,actual__9549__auto___11241)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__9548__auto___11240;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9516__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9516__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__9549__auto___11241;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9516__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9516__auto__);
}
})()," (using =)"].join('')));
}

cljs.core.swap_BANG_.call(null,tic_tac_toe.screens.play_spec.state,cljs.core.assoc,new cljs.core.Keyword(null,"board","board",-1907017633),tic_tac_toe.screens.play_spec.board_4,new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"x","x",2099068185));


var G__11242 = cljs.core.next.call(null,seq__10592__$1);
var G__11243 = null;
var G__11244 = (0);
var G__11245 = (0);
seq__10592 = G__11242;
chunk__10593 = G__11243;
count__10594 = G__11244;
i__10595 = G__11245;
continue;
}
} else {
return null;
}
}
break;
}
});})(_STAR_parent_description_STAR__orig_val__10510_11204,_STAR_parent_description_STAR__temp_val__10511_11205,description__9411__auto____$1,_STAR_parent_description_STAR__orig_val__9962_10661,_STAR_parent_description_STAR__temp_val__9963_10662,description__9411__auto___10660))
,false),speclj.components.new_characteristic.call(null,"clicking button swaps player in state",((function (_STAR_parent_description_STAR__orig_val__10510_11204,_STAR_parent_description_STAR__temp_val__10511_11205,description__9411__auto____$1,_STAR_parent_description_STAR__orig_val__9962_10661,_STAR_parent_description_STAR__temp_val__9963_10662,description__9411__auto___10660){
return (function (){
var seq__10596 = cljs.core.seq.call(null,cljs.core.range.call(null,(16)));
var chunk__10597 = null;
var count__10598 = (0);
var i__10599 = (0);
while(true){
if((i__10599 < count__10598)){
var n = cljs.core._nth.call(null,chunk__10597,i__10599);
c3kit.wire.spec_helper.click_BANG_.call(null,["#index-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join(''));

var expected__9548__auto___11246 = new cljs.core.Keyword(null,"o","o",-1350007228);
var actual__9549__auto___11247 = new cljs.core.Keyword(null,"player","player",-97687400).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.screens.play_spec.state));
if(cljs.core._EQ_.call(null,expected__9548__auto___11246,actual__9549__auto___11247)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__9548__auto___11246;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9516__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9516__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__9549__auto___11247;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9516__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9516__auto__);
}
})()," (using =)"].join('')));
}

cljs.core.swap_BANG_.call(null,tic_tac_toe.screens.play_spec.state,cljs.core.assoc,new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"board","board",-1907017633),tic_tac_toe.screens.play_spec.board_4);


var G__11248 = seq__10596;
var G__11249 = chunk__10597;
var G__11250 = count__10598;
var G__11251 = (i__10599 + (1));
seq__10596 = G__11248;
chunk__10597 = G__11249;
count__10598 = G__11250;
i__10599 = G__11251;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__10596);
if(temp__5804__auto__){
var seq__10596__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10596__$1)){
var c__5525__auto__ = cljs.core.chunk_first.call(null,seq__10596__$1);
var G__11252 = cljs.core.chunk_rest.call(null,seq__10596__$1);
var G__11253 = c__5525__auto__;
var G__11254 = cljs.core.count.call(null,c__5525__auto__);
var G__11255 = (0);
seq__10596 = G__11252;
chunk__10597 = G__11253;
count__10598 = G__11254;
i__10599 = G__11255;
continue;
} else {
var n = cljs.core.first.call(null,seq__10596__$1);
c3kit.wire.spec_helper.click_BANG_.call(null,["#index-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join(''));

var expected__9548__auto___11256 = new cljs.core.Keyword(null,"o","o",-1350007228);
var actual__9549__auto___11257 = new cljs.core.Keyword(null,"player","player",-97687400).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.screens.play_spec.state));
if(cljs.core._EQ_.call(null,expected__9548__auto___11256,actual__9549__auto___11257)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__9548__auto___11256;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9516__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9516__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__9549__auto___11257;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9516__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9516__auto__);
}
})()," (using =)"].join('')));
}

cljs.core.swap_BANG_.call(null,tic_tac_toe.screens.play_spec.state,cljs.core.assoc,new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"board","board",-1907017633),tic_tac_toe.screens.play_spec.board_4);


var G__11258 = cljs.core.next.call(null,seq__10596__$1);
var G__11259 = null;
var G__11260 = (0);
var G__11261 = (0);
seq__10596 = G__11258;
chunk__10597 = G__11259;
count__10598 = G__11260;
i__10599 = G__11261;
continue;
}
} else {
return null;
}
}
break;
}
});})(_STAR_parent_description_STAR__orig_val__10510_11204,_STAR_parent_description_STAR__temp_val__10511_11205,description__9411__auto____$1,_STAR_parent_description_STAR__orig_val__9962_10661,_STAR_parent_description_STAR__temp_val__9963_10662,description__9411__auto___10660))
,false),speclj.components.new_characteristic.call(null,"clicking button toggles human? to false if mode 2 or 3",((function (_STAR_parent_description_STAR__orig_val__10510_11204,_STAR_parent_description_STAR__temp_val__10511_11205,description__9411__auto____$1,_STAR_parent_description_STAR__orig_val__9962_10661,_STAR_parent_description_STAR__temp_val__9963_10662,description__9411__auto___10660){
return (function (){
var ai_turn_orig_val__10600 = tic_tac_toe.screens.play.ai_turn;
var ai_turn_temp_val__10601 = speclj.stub.stub.call(null,new cljs.core.Keyword(null,"ai-turn","ai-turn",-1581895352),cljs.core.PersistentArrayMap.EMPTY);
(tic_tac_toe.screens.play.ai_turn = ai_turn_temp_val__10601);

try{var seq__10602 = cljs.core.seq.call(null,cljs.core.range.call(null,(16)));
var chunk__10607 = null;
var count__10608 = (0);
var i__10609 = (0);
while(true){
if((i__10609 < count__10608)){
var n = cljs.core._nth.call(null,chunk__10607,i__10609);
var seq__10610_11262 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(3)], null));
var chunk__10611_11263 = null;
var count__10612_11264 = (0);
var i__10613_11265 = (0);
while(true){
if((i__10613_11265 < count__10612_11264)){
var mode_11266 = cljs.core._nth.call(null,chunk__10611_11263,i__10613_11265);
cljs.core.swap_BANG_.call(null,tic_tac_toe.screens.play_spec.state,cljs.core.assoc,new cljs.core.Keyword(null,"mode","mode",654403691),mode_11266);

c3kit.wire.spec_helper.render.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tic_tac_toe.render_screen.render_screen,tic_tac_toe.screens.play_spec.state], null));

c3kit.wire.spec_helper.click_BANG_.call(null,["#index-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join(''));

var expected__9548__auto___11267 = false;
var actual__9549__auto___11268 = new cljs.core.Keyword(null,"human?","human?",-2017219054).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.screens.play_spec.state));
if(cljs.core._EQ_.call(null,expected__9548__auto___11267,actual__9549__auto___11268)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__9548__auto___11267;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9516__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9516__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__9549__auto___11268;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9516__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9516__auto__);
}
})()," (using =)"].join('')));
}

cljs.core.swap_BANG_.call(null,tic_tac_toe.screens.play_spec.state,cljs.core.assoc,new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"board","board",-1907017633),tic_tac_toe.screens.play_spec.board_4);


var G__11269 = seq__10610_11262;
var G__11270 = chunk__10611_11263;
var G__11271 = count__10612_11264;
var G__11272 = (i__10613_11265 + (1));
seq__10610_11262 = G__11269;
chunk__10611_11263 = G__11270;
count__10612_11264 = G__11271;
i__10613_11265 = G__11272;
continue;
} else {
var temp__5804__auto___11273 = cljs.core.seq.call(null,seq__10610_11262);
if(temp__5804__auto___11273){
var seq__10610_11274__$1 = temp__5804__auto___11273;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10610_11274__$1)){
var c__5525__auto___11275 = cljs.core.chunk_first.call(null,seq__10610_11274__$1);
var G__11276 = cljs.core.chunk_rest.call(null,seq__10610_11274__$1);
var G__11277 = c__5525__auto___11275;
var G__11278 = cljs.core.count.call(null,c__5525__auto___11275);
var G__11279 = (0);
seq__10610_11262 = G__11276;
chunk__10611_11263 = G__11277;
count__10612_11264 = G__11278;
i__10613_11265 = G__11279;
continue;
} else {
var mode_11280 = cljs.core.first.call(null,seq__10610_11274__$1);
cljs.core.swap_BANG_.call(null,tic_tac_toe.screens.play_spec.state,cljs.core.assoc,new cljs.core.Keyword(null,"mode","mode",654403691),mode_11280);

c3kit.wire.spec_helper.render.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tic_tac_toe.render_screen.render_screen,tic_tac_toe.screens.play_spec.state], null));

c3kit.wire.spec_helper.click_BANG_.call(null,["#index-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join(''));

var expected__9548__auto___11281 = false;
var actual__9549__auto___11282 = new cljs.core.Keyword(null,"human?","human?",-2017219054).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.screens.play_spec.state));
if(cljs.core._EQ_.call(null,expected__9548__auto___11281,actual__9549__auto___11282)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__9548__auto___11281;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9516__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9516__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__9549__auto___11282;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9516__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9516__auto__);
}
})()," (using =)"].join('')));
}

cljs.core.swap_BANG_.call(null,tic_tac_toe.screens.play_spec.state,cljs.core.assoc,new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"board","board",-1907017633),tic_tac_toe.screens.play_spec.board_4);


var G__11283 = cljs.core.next.call(null,seq__10610_11274__$1);
var G__11284 = null;
var G__11285 = (0);
var G__11286 = (0);
seq__10610_11262 = G__11283;
chunk__10611_11263 = G__11284;
count__10612_11264 = G__11285;
i__10613_11265 = G__11286;
continue;
}
} else {
}
}
break;
}

var G__11287 = seq__10602;
var G__11288 = chunk__10607;
var G__11289 = count__10608;
var G__11290 = (i__10609 + (1));
seq__10602 = G__11287;
chunk__10607 = G__11288;
count__10608 = G__11289;
i__10609 = G__11290;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__10602);
if(temp__5804__auto__){
var seq__10602__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10602__$1)){
var c__5525__auto__ = cljs.core.chunk_first.call(null,seq__10602__$1);
var G__11291 = cljs.core.chunk_rest.call(null,seq__10602__$1);
var G__11292 = c__5525__auto__;
var G__11293 = cljs.core.count.call(null,c__5525__auto__);
var G__11294 = (0);
seq__10602 = G__11291;
chunk__10607 = G__11292;
count__10608 = G__11293;
i__10609 = G__11294;
continue;
} else {
var n = cljs.core.first.call(null,seq__10602__$1);
var seq__10603_11295 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(3)], null));
var chunk__10604_11296 = null;
var count__10605_11297 = (0);
var i__10606_11298 = (0);
while(true){
if((i__10606_11298 < count__10605_11297)){
var mode_11299 = cljs.core._nth.call(null,chunk__10604_11296,i__10606_11298);
cljs.core.swap_BANG_.call(null,tic_tac_toe.screens.play_spec.state,cljs.core.assoc,new cljs.core.Keyword(null,"mode","mode",654403691),mode_11299);

c3kit.wire.spec_helper.render.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tic_tac_toe.render_screen.render_screen,tic_tac_toe.screens.play_spec.state], null));

c3kit.wire.spec_helper.click_BANG_.call(null,["#index-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join(''));

var expected__9548__auto___11300 = false;
var actual__9549__auto___11301 = new cljs.core.Keyword(null,"human?","human?",-2017219054).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.screens.play_spec.state));
if(cljs.core._EQ_.call(null,expected__9548__auto___11300,actual__9549__auto___11301)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__9548__auto___11300;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9516__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9516__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__9549__auto___11301;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9516__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9516__auto__);
}
})()," (using =)"].join('')));
}

cljs.core.swap_BANG_.call(null,tic_tac_toe.screens.play_spec.state,cljs.core.assoc,new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"board","board",-1907017633),tic_tac_toe.screens.play_spec.board_4);


var G__11302 = seq__10603_11295;
var G__11303 = chunk__10604_11296;
var G__11304 = count__10605_11297;
var G__11305 = (i__10606_11298 + (1));
seq__10603_11295 = G__11302;
chunk__10604_11296 = G__11303;
count__10605_11297 = G__11304;
i__10606_11298 = G__11305;
continue;
} else {
var temp__5804__auto___11306__$1 = cljs.core.seq.call(null,seq__10603_11295);
if(temp__5804__auto___11306__$1){
var seq__10603_11307__$1 = temp__5804__auto___11306__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10603_11307__$1)){
var c__5525__auto___11308 = cljs.core.chunk_first.call(null,seq__10603_11307__$1);
var G__11309 = cljs.core.chunk_rest.call(null,seq__10603_11307__$1);
var G__11310 = c__5525__auto___11308;
var G__11311 = cljs.core.count.call(null,c__5525__auto___11308);
var G__11312 = (0);
seq__10603_11295 = G__11309;
chunk__10604_11296 = G__11310;
count__10605_11297 = G__11311;
i__10606_11298 = G__11312;
continue;
} else {
var mode_11313 = cljs.core.first.call(null,seq__10603_11307__$1);
cljs.core.swap_BANG_.call(null,tic_tac_toe.screens.play_spec.state,cljs.core.assoc,new cljs.core.Keyword(null,"mode","mode",654403691),mode_11313);

c3kit.wire.spec_helper.render.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tic_tac_toe.render_screen.render_screen,tic_tac_toe.screens.play_spec.state], null));

c3kit.wire.spec_helper.click_BANG_.call(null,["#index-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join(''));

var expected__9548__auto___11314 = false;
var actual__9549__auto___11315 = new cljs.core.Keyword(null,"human?","human?",-2017219054).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.screens.play_spec.state));
if(cljs.core._EQ_.call(null,expected__9548__auto___11314,actual__9549__auto___11315)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__9548__auto___11314;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9516__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9516__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__9549__auto___11315;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9516__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9516__auto__);
}
})()," (using =)"].join('')));
}

cljs.core.swap_BANG_.call(null,tic_tac_toe.screens.play_spec.state,cljs.core.assoc,new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"board","board",-1907017633),tic_tac_toe.screens.play_spec.board_4);


var G__11316 = cljs.core.next.call(null,seq__10603_11307__$1);
var G__11317 = null;
var G__11318 = (0);
var G__11319 = (0);
seq__10603_11295 = G__11316;
chunk__10604_11296 = G__11317;
count__10605_11297 = G__11318;
i__10606_11298 = G__11319;
continue;
}
} else {
}
}
break;
}

var G__11320 = cljs.core.next.call(null,seq__10602__$1);
var G__11321 = null;
var G__11322 = (0);
var G__11323 = (0);
seq__10602 = G__11320;
chunk__10607 = G__11321;
count__10608 = G__11322;
i__10609 = G__11323;
continue;
}
} else {
return null;
}
}
break;
}
}finally {(tic_tac_toe.screens.play.ai_turn = ai_turn_orig_val__10600);
}});})(_STAR_parent_description_STAR__orig_val__10510_11204,_STAR_parent_description_STAR__temp_val__10511_11205,description__9411__auto____$1,_STAR_parent_description_STAR__orig_val__9962_10661,_STAR_parent_description_STAR__temp_val__9963_10662,description__9411__auto___10660))
,false),speclj.components.new_characteristic.call(null,"clicking button does not toggle human if mode 1",((function (_STAR_parent_description_STAR__orig_val__10510_11204,_STAR_parent_description_STAR__temp_val__10511_11205,description__9411__auto____$1,_STAR_parent_description_STAR__orig_val__9962_10661,_STAR_parent_description_STAR__temp_val__9963_10662,description__9411__auto___10660){
return (function (){
var ai_turn_orig_val__10614 = tic_tac_toe.screens.play.ai_turn;
var ai_turn_temp_val__10615 = speclj.stub.stub.call(null,new cljs.core.Keyword(null,"ai-turn","ai-turn",-1581895352),cljs.core.PersistentArrayMap.EMPTY);
(tic_tac_toe.screens.play.ai_turn = ai_turn_temp_val__10615);

try{var seq__10616 = cljs.core.seq.call(null,cljs.core.range.call(null,(16)));
var chunk__10617 = null;
var count__10618 = (0);
var i__10619 = (0);
while(true){
if((i__10619 < count__10618)){
var n = cljs.core._nth.call(null,chunk__10617,i__10619);
c3kit.wire.spec_helper.click_BANG_.call(null,["#index-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join(''));

var expected__9548__auto___11324 = true;
var actual__9549__auto___11325 = new cljs.core.Keyword(null,"human?","human?",-2017219054).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.screens.play_spec.state));
if(cljs.core._EQ_.call(null,expected__9548__auto___11324,actual__9549__auto___11325)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__9548__auto___11324;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9516__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9516__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__9549__auto___11325;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9516__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9516__auto__);
}
})()," (using =)"].join('')));
}

cljs.core.swap_BANG_.call(null,tic_tac_toe.screens.play_spec.state,cljs.core.assoc,new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"board","board",-1907017633),tic_tac_toe.screens.play_spec.board_4);


var G__11326 = seq__10616;
var G__11327 = chunk__10617;
var G__11328 = count__10618;
var G__11329 = (i__10619 + (1));
seq__10616 = G__11326;
chunk__10617 = G__11327;
count__10618 = G__11328;
i__10619 = G__11329;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__10616);
if(temp__5804__auto__){
var seq__10616__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10616__$1)){
var c__5525__auto__ = cljs.core.chunk_first.call(null,seq__10616__$1);
var G__11330 = cljs.core.chunk_rest.call(null,seq__10616__$1);
var G__11331 = c__5525__auto__;
var G__11332 = cljs.core.count.call(null,c__5525__auto__);
var G__11333 = (0);
seq__10616 = G__11330;
chunk__10617 = G__11331;
count__10618 = G__11332;
i__10619 = G__11333;
continue;
} else {
var n = cljs.core.first.call(null,seq__10616__$1);
c3kit.wire.spec_helper.click_BANG_.call(null,["#index-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join(''));

var expected__9548__auto___11334 = true;
var actual__9549__auto___11335 = new cljs.core.Keyword(null,"human?","human?",-2017219054).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.screens.play_spec.state));
if(cljs.core._EQ_.call(null,expected__9548__auto___11334,actual__9549__auto___11335)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__9548__auto___11334;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9516__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9516__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__9549__auto___11335;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9516__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9516__auto__);
}
})()," (using =)"].join('')));
}

cljs.core.swap_BANG_.call(null,tic_tac_toe.screens.play_spec.state,cljs.core.assoc,new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"board","board",-1907017633),tic_tac_toe.screens.play_spec.board_4);


var G__11336 = cljs.core.next.call(null,seq__10616__$1);
var G__11337 = null;
var G__11338 = (0);
var G__11339 = (0);
seq__10616 = G__11336;
chunk__10617 = G__11337;
count__10618 = G__11338;
i__10619 = G__11339;
continue;
}
} else {
return null;
}
}
break;
}
}finally {(tic_tac_toe.screens.play.ai_turn = ai_turn_orig_val__10614);
}});})(_STAR_parent_description_STAR__orig_val__10510_11204,_STAR_parent_description_STAR__temp_val__10511_11205,description__9411__auto____$1,_STAR_parent_description_STAR__orig_val__9962_10661,_STAR_parent_description_STAR__temp_val__9963_10662,description__9411__auto___10660))
,false),speclj.components.new_characteristic.call(null,"clicking button adds token to button HTML",((function (_STAR_parent_description_STAR__orig_val__10510_11204,_STAR_parent_description_STAR__temp_val__10511_11205,description__9411__auto____$1,_STAR_parent_description_STAR__orig_val__9962_10661,_STAR_parent_description_STAR__temp_val__9963_10662,description__9411__auto___10660){
return (function (){
var seq__10620 = cljs.core.seq.call(null,cljs.core.range.call(null,(16)));
var chunk__10621 = null;
var count__10622 = (0);
var i__10623 = (0);
while(true){
if((i__10623 < count__10622)){
var n = cljs.core._nth.call(null,chunk__10621,i__10623);
c3kit.wire.spec_helper.click_BANG_.call(null,["#index-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join(''));

var expected__9548__auto___11340 = "X";
var actual__9549__auto___11341 = c3kit.wire.spec_helper.text.call(null,["#index-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join(''));
if(cljs.core._EQ_.call(null,expected__9548__auto___11340,actual__9549__auto___11341)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__9548__auto___11340;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9516__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9516__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__9549__auto___11341;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9516__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9516__auto__);
}
})()," (using =)"].join('')));
}

cljs.core.reset_BANG_.call(null,tic_tac_toe.screens.play_spec.state,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"board","board",-1907017633),tic_tac_toe.screens.play_spec.board_4,new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"current-screen","current-screen",-1454713691),new cljs.core.Keyword(null,"play","play",-580418022),new cljs.core.Keyword(null,"mode","mode",654403691),(1)], null));


var G__11342 = seq__10620;
var G__11343 = chunk__10621;
var G__11344 = count__10622;
var G__11345 = (i__10623 + (1));
seq__10620 = G__11342;
chunk__10621 = G__11343;
count__10622 = G__11344;
i__10623 = G__11345;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__10620);
if(temp__5804__auto__){
var seq__10620__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10620__$1)){
var c__5525__auto__ = cljs.core.chunk_first.call(null,seq__10620__$1);
var G__11346 = cljs.core.chunk_rest.call(null,seq__10620__$1);
var G__11347 = c__5525__auto__;
var G__11348 = cljs.core.count.call(null,c__5525__auto__);
var G__11349 = (0);
seq__10620 = G__11346;
chunk__10621 = G__11347;
count__10622 = G__11348;
i__10623 = G__11349;
continue;
} else {
var n = cljs.core.first.call(null,seq__10620__$1);
c3kit.wire.spec_helper.click_BANG_.call(null,["#index-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join(''));

var expected__9548__auto___11350 = "X";
var actual__9549__auto___11351 = c3kit.wire.spec_helper.text.call(null,["#index-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join(''));
if(cljs.core._EQ_.call(null,expected__9548__auto___11350,actual__9549__auto___11351)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__9548__auto___11350;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9516__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9516__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__9549__auto___11351;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9516__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9516__auto__);
}
})()," (using =)"].join('')));
}

cljs.core.reset_BANG_.call(null,tic_tac_toe.screens.play_spec.state,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"board","board",-1907017633),tic_tac_toe.screens.play_spec.board_4,new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"current-screen","current-screen",-1454713691),new cljs.core.Keyword(null,"play","play",-580418022),new cljs.core.Keyword(null,"mode","mode",654403691),(1)], null));


var G__11352 = cljs.core.next.call(null,seq__10620__$1);
var G__11353 = null;
var G__11354 = (0);
var G__11355 = (0);
seq__10620 = G__11352;
chunk__10621 = G__11353;
count__10622 = G__11354;
i__10623 = G__11355;
continue;
}
} else {
return null;
}
}
break;
}
});})(_STAR_parent_description_STAR__orig_val__10510_11204,_STAR_parent_description_STAR__temp_val__10511_11205,description__9411__auto____$1,_STAR_parent_description_STAR__orig_val__9962_10661,_STAR_parent_description_STAR__temp_val__9963_10662,description__9411__auto___10660))
,false),speclj.components.new_characteristic.call(null,"clicking button disables button",((function (_STAR_parent_description_STAR__orig_val__10510_11204,_STAR_parent_description_STAR__temp_val__10511_11205,description__9411__auto____$1,_STAR_parent_description_STAR__orig_val__9962_10661,_STAR_parent_description_STAR__temp_val__9963_10662,description__9411__auto___10660){
return (function (){
var seq__10624 = cljs.core.seq.call(null,cljs.core.range.call(null,(16)));
var chunk__10625 = null;
var count__10626 = (0);
var i__10627 = (0);
while(true){
if((i__10627 < count__10626)){
var n = cljs.core._nth.call(null,chunk__10625,i__10627);
c3kit.wire.spec_helper.click_BANG_.call(null,["#index-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join(''));

var expected__9548__auto___11356 = true;
var actual__9549__auto___11357 = c3kit.wire.spec_helper.disabled_QMARK_.call(null,["#index-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join(''));
if(cljs.core._EQ_.call(null,expected__9548__auto___11356,actual__9549__auto___11357)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__9548__auto___11356;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9516__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9516__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__9549__auto___11357;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9516__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9516__auto__);
}
})()," (using =)"].join('')));
}

cljs.core.reset_BANG_.call(null,tic_tac_toe.screens.play_spec.state,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"board","board",-1907017633),tic_tac_toe.screens.play_spec.board_4,new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"current-screen","current-screen",-1454713691),new cljs.core.Keyword(null,"play","play",-580418022),new cljs.core.Keyword(null,"mode","mode",654403691),(1)], null));


var G__11358 = seq__10624;
var G__11359 = chunk__10625;
var G__11360 = count__10626;
var G__11361 = (i__10627 + (1));
seq__10624 = G__11358;
chunk__10625 = G__11359;
count__10626 = G__11360;
i__10627 = G__11361;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__10624);
if(temp__5804__auto__){
var seq__10624__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10624__$1)){
var c__5525__auto__ = cljs.core.chunk_first.call(null,seq__10624__$1);
var G__11362 = cljs.core.chunk_rest.call(null,seq__10624__$1);
var G__11363 = c__5525__auto__;
var G__11364 = cljs.core.count.call(null,c__5525__auto__);
var G__11365 = (0);
seq__10624 = G__11362;
chunk__10625 = G__11363;
count__10626 = G__11364;
i__10627 = G__11365;
continue;
} else {
var n = cljs.core.first.call(null,seq__10624__$1);
c3kit.wire.spec_helper.click_BANG_.call(null,["#index-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join(''));

var expected__9548__auto___11366 = true;
var actual__9549__auto___11367 = c3kit.wire.spec_helper.disabled_QMARK_.call(null,["#index-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join(''));
if(cljs.core._EQ_.call(null,expected__9548__auto___11366,actual__9549__auto___11367)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__9548__auto___11366;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9516__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9516__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__9549__auto___11367;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9516__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9516__auto__);
}
})()," (using =)"].join('')));
}

cljs.core.reset_BANG_.call(null,tic_tac_toe.screens.play_spec.state,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"board","board",-1907017633),tic_tac_toe.screens.play_spec.board_4,new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"current-screen","current-screen",-1454713691),new cljs.core.Keyword(null,"play","play",-580418022),new cljs.core.Keyword(null,"mode","mode",654403691),(1)], null));


var G__11368 = cljs.core.next.call(null,seq__10624__$1);
var G__11369 = null;
var G__11370 = (0);
var G__11371 = (0);
seq__10624 = G__11368;
chunk__10625 = G__11369;
count__10626 = G__11370;
i__10627 = G__11371;
continue;
}
} else {
return null;
}
}
break;
}
});})(_STAR_parent_description_STAR__orig_val__10510_11204,_STAR_parent_description_STAR__temp_val__10511_11205,description__9411__auto____$1,_STAR_parent_description_STAR__orig_val__9962_10661,_STAR_parent_description_STAR__temp_val__9963_10662,description__9411__auto___10660))
,false),speclj.components.new_characteristic.call(null,"clicking button triggers AI if mode 2 or 3",((function (_STAR_parent_description_STAR__orig_val__10510_11204,_STAR_parent_description_STAR__temp_val__10511_11205,description__9411__auto____$1,_STAR_parent_description_STAR__orig_val__9962_10661,_STAR_parent_description_STAR__temp_val__9963_10662,description__9411__auto___10660){
return (function (){
var take_turn_orig_val__10628 = tic_tac_toe.player.take_turn;
var defer_orig_val__10629 = tic_tac_toe.screens.play.defer;
var take_turn_temp_val__10630 = speclj.stub.stub.call(null,new cljs.core.Keyword(null,"turn","turn",75759344),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"return","return",-1891502105),tic_tac_toe.screens.play_spec.board_4], null));
var defer_temp_val__10631 = (function (f){
return f.call(null);
});
(tic_tac_toe.player.take_turn = take_turn_temp_val__10630);

(tic_tac_toe.screens.play.defer = defer_temp_val__10631);

try{var seq__10632 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(3)], null));
var chunk__10645 = null;
var count__10646 = (0);
var i__10647 = (0);
while(true){
if((i__10647 < count__10646)){
var ai = cljs.core._nth.call(null,chunk__10645,i__10647);
var seq__10648_11372 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(3)], null));
var chunk__10653_11373 = null;
var count__10654_11374 = (0);
var i__10655_11375 = (0);
while(true){
if((i__10655_11375 < count__10654_11374)){
var mode_11376 = cljs.core._nth.call(null,chunk__10653_11373,i__10655_11375);
var seq__10656_11377 = cljs.core.seq.call(null,cljs.core.range.call(null,(16)));
var chunk__10657_11378 = null;
var count__10658_11379 = (0);
var i__10659_11380 = (0);
while(true){
if((i__10659_11380 < count__10658_11379)){
var n_11381 = cljs.core._nth.call(null,chunk__10657_11378,i__10659_11380);
cljs.core.swap_BANG_.call(null,tic_tac_toe.screens.play_spec.state,cljs.core.assoc,new cljs.core.Keyword(null,"mode","mode",654403691),mode_11376,new cljs.core.Keyword(null,"first-ai-level","first-ai-level",1004633644),ai,new cljs.core.Keyword(null,"player","player",-97687400),((cljs.core._EQ_.call(null,(2),mode_11376))?new cljs.core.Keyword(null,"x","x",2099068185):new cljs.core.Keyword(null,"o","o",-1350007228)),new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"gui","gui",604532813));

c3kit.wire.spec_helper.render.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tic_tac_toe.render_screen.render_screen,tic_tac_toe.screens.play_spec.state], null));

c3kit.wire.spec_helper.click_BANG_.call(null,["#index-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n_11381)].join(''));

var name__9795__auto___11382 = new cljs.core.Keyword(null,"turn","turn",75759344);
var options__9796__auto___11383 = cljs.core.PersistentArrayMap.EMPTY;
var invocations__9797__auto___11384 = speclj.stub.invocations_of.call(null,name__9795__auto___11382);
var times__9798__auto___11385 = new cljs.core.Keyword(null,"times","times",1671571467).cljs$core$IFn$_invoke$arity$1(options__9796__auto___11383);
var times_QMARK___9799__auto___11386 = typeof times__9798__auto___11385 === 'number';
var check_params_QMARK___9800__auto___11387 = cljs.core.contains_QMARK_.call(null,options__9796__auto___11383,new cljs.core.Keyword(null,"with","with",-1536296876));
var with__9801__auto___11388 = new cljs.core.Keyword(null,"with","with",-1536296876).cljs$core$IFn$_invoke$arity$1(options__9796__auto___11383);
var with__9801__auto___11389__$1 = (((with__9801__auto___11388 == null))?cljs.core.PersistentVector.EMPTY:with__9801__auto___11388);
var invocations_str__9802__auto___11390 = ((function (seq__10656_11377,chunk__10657_11378,count__10658_11379,i__10659_11380,seq__10648_11372,chunk__10653_11373,count__10654_11374,i__10655_11375,seq__10632,chunk__10645,count__10646,i__10647,name__9795__auto___11382,options__9796__auto___11383,invocations__9797__auto___11384,times__9798__auto___11385,times_QMARK___9799__auto___11386,check_params_QMARK___9800__auto___11387,with__9801__auto___11388,with__9801__auto___11389__$1,n_11381,mode_11376,ai,take_turn_orig_val__10628,defer_orig_val__10629,take_turn_temp_val__10630,defer_temp_val__10631,_STAR_parent_description_STAR__orig_val__10510_11204,_STAR_parent_description_STAR__temp_val__10511_11205,description__9411__auto____$1,_STAR_parent_description_STAR__orig_val__9962_10661,_STAR_parent_description_STAR__temp_val__9963_10662,description__9411__auto___10660){
return (function (p1__9792__9803__auto__){
if(cljs.core._EQ_.call(null,(1),p1__9792__9803__auto__)){
return "invocation";
} else {
return "invocations";
}
});})(seq__10656_11377,chunk__10657_11378,count__10658_11379,i__10659_11380,seq__10648_11372,chunk__10653_11373,count__10654_11374,i__10655_11375,seq__10632,chunk__10645,count__10646,i__10647,name__9795__auto___11382,options__9796__auto___11383,invocations__9797__auto___11384,times__9798__auto___11385,times_QMARK___9799__auto___11386,check_params_QMARK___9800__auto___11387,with__9801__auto___11388,with__9801__auto___11389__$1,n_11381,mode_11376,ai,take_turn_orig_val__10628,defer_orig_val__10629,take_turn_temp_val__10630,defer_temp_val__10631,_STAR_parent_description_STAR__orig_val__10510_11204,_STAR_parent_description_STAR__temp_val__10511_11205,description__9411__auto____$1,_STAR_parent_description_STAR__orig_val__9962_10661,_STAR_parent_description_STAR__temp_val__9963_10662,description__9411__auto___10660))
;
if(((times_QMARK___9799__auto___11386) && (check_params_QMARK___9800__auto___11387))){
var matching_invocations__9804__auto___11391 = cljs.core.filter.call(null,((function (seq__10656_11377,chunk__10657_11378,count__10658_11379,i__10659_11380,seq__10648_11372,chunk__10653_11373,count__10654_11374,i__10655_11375,seq__10632,chunk__10645,count__10646,i__10647,name__9795__auto___11382,options__9796__auto___11383,invocations__9797__auto___11384,times__9798__auto___11385,times_QMARK___9799__auto___11386,check_params_QMARK___9800__auto___11387,with__9801__auto___11388,with__9801__auto___11389__$1,invocations_str__9802__auto___11390,n_11381,mode_11376,ai,take_turn_orig_val__10628,defer_orig_val__10629,take_turn_temp_val__10630,defer_temp_val__10631,_STAR_parent_description_STAR__orig_val__10510_11204,_STAR_parent_description_STAR__temp_val__10511_11205,description__9411__auto____$1,_STAR_parent_description_STAR__orig_val__9962_10661,_STAR_parent_description_STAR__temp_val__9963_10662,description__9411__auto___10660){
return (function (p1__9793__9805__auto__){
return speclj.stub.params_match_QMARK_.call(null,with__9801__auto___11389__$1,p1__9793__9805__auto__);
});})(seq__10656_11377,chunk__10657_11378,count__10658_11379,i__10659_11380,seq__10648_11372,chunk__10653_11373,count__10654_11374,i__10655_11375,seq__10632,chunk__10645,count__10646,i__10647,name__9795__auto___11382,options__9796__auto___11383,invocations__9797__auto___11384,times__9798__auto___11385,times_QMARK___9799__auto___11386,check_params_QMARK___9800__auto___11387,with__9801__auto___11388,with__9801__auto___11389__$1,invocations_str__9802__auto___11390,n_11381,mode_11376,ai,take_turn_orig_val__10628,defer_orig_val__10629,take_turn_temp_val__10630,defer_temp_val__10631,_STAR_parent_description_STAR__orig_val__10510_11204,_STAR_parent_description_STAR__temp_val__10511_11205,description__9411__auto____$1,_STAR_parent_description_STAR__orig_val__9962_10661,_STAR_parent_description_STAR__temp_val__9963_10662,description__9411__auto___10660))
,invocations__9797__auto___11384);
var matching_count__9806__auto___11392 = cljs.core.count.call(null,matching_invocations__9804__auto___11391);
if(cljs.core._EQ_.call(null,times__9798__auto___11385,matching_count__9806__auto___11392)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(times__9798__auto___11385)," ",invocations_str__9802__auto___11390.call(null,times__9798__auto___11385)," of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__9795__auto___11382)," with ",cljs.core.pr_str.call(null,with__9801__auto___11389__$1),speclj.platform.endl,"     got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(matching_count__9806__auto___11392)," ",invocations_str__9802__auto___11390.call(null,matching_count__9806__auto___11392)].join('')));
}
} else {
if(check_params_QMARK___9800__auto___11387){
if(cljs.core.truth_(cljs.core.some.call(null,((function (seq__10656_11377,chunk__10657_11378,count__10658_11379,i__10659_11380,seq__10648_11372,chunk__10653_11373,count__10654_11374,i__10655_11375,seq__10632,chunk__10645,count__10646,i__10647,name__9795__auto___11382,options__9796__auto___11383,invocations__9797__auto___11384,times__9798__auto___11385,times_QMARK___9799__auto___11386,check_params_QMARK___9800__auto___11387,with__9801__auto___11388,with__9801__auto___11389__$1,invocations_str__9802__auto___11390,n_11381,mode_11376,ai,take_turn_orig_val__10628,defer_orig_val__10629,take_turn_temp_val__10630,defer_temp_val__10631,_STAR_parent_description_STAR__orig_val__10510_11204,_STAR_parent_description_STAR__temp_val__10511_11205,description__9411__auto____$1,_STAR_parent_description_STAR__orig_val__9962_10661,_STAR_parent_description_STAR__temp_val__9963_10662,description__9411__auto___10660){
return (function (p1__9794__9807__auto__){
return speclj.stub.params_match_QMARK_.call(null,with__9801__auto___11389__$1,p1__9794__9807__auto__);
});})(seq__10656_11377,chunk__10657_11378,count__10658_11379,i__10659_11380,seq__10648_11372,chunk__10653_11373,count__10654_11374,i__10655_11375,seq__10632,chunk__10645,count__10646,i__10647,name__9795__auto___11382,options__9796__auto___11383,invocations__9797__auto___11384,times__9798__auto___11385,times_QMARK___9799__auto___11386,check_params_QMARK___9800__auto___11387,with__9801__auto___11388,with__9801__auto___11389__$1,invocations_str__9802__auto___11390,n_11381,mode_11376,ai,take_turn_orig_val__10628,defer_orig_val__10629,take_turn_temp_val__10630,defer_temp_val__10631,_STAR_parent_description_STAR__orig_val__10510_11204,_STAR_parent_description_STAR__temp_val__10511_11205,description__9411__auto____$1,_STAR_parent_description_STAR__orig_val__9962_10661,_STAR_parent_description_STAR__temp_val__9963_10662,description__9411__auto___10660))
,invocations__9797__auto___11384))){
} else {
throw (new speclj.platform.SpecFailure(["Expected: invocation of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__9795__auto___11382)," with ",cljs.core.pr_str.call(null,with__9801__auto___11389__$1),speclj.platform.endl,"     got: ",cljs.core.pr_str.call(null,invocations__9797__auto___11384)].join('')));
}
} else {
if(times_QMARK___9799__auto___11386){
if(cljs.core._EQ_.call(null,times__9798__auto___11385,cljs.core.count.call(null,invocations__9797__auto___11384))){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(times__9798__auto___11385)," ",invocations_str__9802__auto___11390.call(null,times__9798__auto___11385)," of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__9795__auto___11382),speclj.platform.endl,"     got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,invocations__9797__auto___11384))].join('')));
}
} else {
if(cljs.core.seq.call(null,invocations__9797__auto___11384)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: an invocation of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__9795__auto___11382),speclj.platform.endl,"     got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,invocations__9797__auto___11384))].join('')));
}

}
}
}

var expected__9548__auto___11393 = ((cljs.core._EQ_.call(null,(2),mode_11376))?new cljs.core.Keyword(null,"x","x",2099068185):new cljs.core.Keyword(null,"o","o",-1350007228));
var actual__9549__auto___11394 = new cljs.core.Keyword(null,"player","player",-97687400).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.screens.play_spec.state));
if(cljs.core._EQ_.call(null,expected__9548__auto___11393,actual__9549__auto___11394)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__9548__auto___11393;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9516__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9516__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__9549__auto___11394;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9516__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9516__auto__);
}
})()," (using =)"].join('')));
}

cljs.core.reset_BANG_.call(null,tic_tac_toe.screens.play_spec.state,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"board","board",-1907017633),tic_tac_toe.screens.play_spec.board_4,new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"current-screen","current-screen",-1454713691),new cljs.core.Keyword(null,"play","play",-580418022)], null));


var G__11395 = seq__10656_11377;
var G__11396 = chunk__10657_11378;
var G__11397 = count__10658_11379;
var G__11398 = (i__10659_11380 + (1));
seq__10656_11377 = G__11395;
chunk__10657_11378 = G__11396;
count__10658_11379 = G__11397;
i__10659_11380 = G__11398;
continue;
} else {
var temp__5804__auto___11399 = cljs.core.seq.call(null,seq__10656_11377);
if(temp__5804__auto___11399){
var seq__10656_11400__$1 = temp__5804__auto___11399;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10656_11400__$1)){
var c__5525__auto___11401 = cljs.core.chunk_first.call(null,seq__10656_11400__$1);
var G__11402 = cljs.core.chunk_rest.call(null,seq__10656_11400__$1);
var G__11403 = c__5525__auto___11401;
var G__11404 = cljs.core.count.call(null,c__5525__auto___11401);
var G__11405 = (0);
seq__10656_11377 = G__11402;
chunk__10657_11378 = G__11403;
count__10658_11379 = G__11404;
i__10659_11380 = G__11405;
continue;
} else {
var n_11406 = cljs.core.first.call(null,seq__10656_11400__$1);
cljs.core.swap_BANG_.call(null,tic_tac_toe.screens.play_spec.state,cljs.core.assoc,new cljs.core.Keyword(null,"mode","mode",654403691),mode_11376,new cljs.core.Keyword(null,"first-ai-level","first-ai-level",1004633644),ai,new cljs.core.Keyword(null,"player","player",-97687400),((cljs.core._EQ_.call(null,(2),mode_11376))?new cljs.core.Keyword(null,"x","x",2099068185):new cljs.core.Keyword(null,"o","o",-1350007228)),new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"gui","gui",604532813));

c3kit.wire.spec_helper.render.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tic_tac_toe.render_screen.render_screen,tic_tac_toe.screens.play_spec.state], null));

c3kit.wire.spec_helper.click_BANG_.call(null,["#index-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n_11406)].join(''));

var name__9795__auto___11407 = new cljs.core.Keyword(null,"turn","turn",75759344);
var options__9796__auto___11408 = cljs.core.PersistentArrayMap.EMPTY;
var invocations__9797__auto___11409 = speclj.stub.invocations_of.call(null,name__9795__auto___11407);
var times__9798__auto___11410 = new cljs.core.Keyword(null,"times","times",1671571467).cljs$core$IFn$_invoke$arity$1(options__9796__auto___11408);
var times_QMARK___9799__auto___11411 = typeof times__9798__auto___11410 === 'number';
var check_params_QMARK___9800__auto___11412 = cljs.core.contains_QMARK_.call(null,options__9796__auto___11408,new cljs.core.Keyword(null,"with","with",-1536296876));
var with__9801__auto___11413 = new cljs.core.Keyword(null,"with","with",-1536296876).cljs$core$IFn$_invoke$arity$1(options__9796__auto___11408);
var with__9801__auto___11414__$1 = (((with__9801__auto___11413 == null))?cljs.core.PersistentVector.EMPTY:with__9801__auto___11413);
var invocations_str__9802__auto___11415 = ((function (seq__10656_11377,chunk__10657_11378,count__10658_11379,i__10659_11380,seq__10648_11372,chunk__10653_11373,count__10654_11374,i__10655_11375,seq__10632,chunk__10645,count__10646,i__10647,name__9795__auto___11407,options__9796__auto___11408,invocations__9797__auto___11409,times__9798__auto___11410,times_QMARK___9799__auto___11411,check_params_QMARK___9800__auto___11412,with__9801__auto___11413,with__9801__auto___11414__$1,n_11406,seq__10656_11400__$1,temp__5804__auto___11399,mode_11376,ai,take_turn_orig_val__10628,defer_orig_val__10629,take_turn_temp_val__10630,defer_temp_val__10631,_STAR_parent_description_STAR__orig_val__10510_11204,_STAR_parent_description_STAR__temp_val__10511_11205,description__9411__auto____$1,_STAR_parent_description_STAR__orig_val__9962_10661,_STAR_parent_description_STAR__temp_val__9963_10662,description__9411__auto___10660){
return (function (p1__9792__9803__auto__){
if(cljs.core._EQ_.call(null,(1),p1__9792__9803__auto__)){
return "invocation";
} else {
return "invocations";
}
});})(seq__10656_11377,chunk__10657_11378,count__10658_11379,i__10659_11380,seq__10648_11372,chunk__10653_11373,count__10654_11374,i__10655_11375,seq__10632,chunk__10645,count__10646,i__10647,name__9795__auto___11407,options__9796__auto___11408,invocations__9797__auto___11409,times__9798__auto___11410,times_QMARK___9799__auto___11411,check_params_QMARK___9800__auto___11412,with__9801__auto___11413,with__9801__auto___11414__$1,n_11406,seq__10656_11400__$1,temp__5804__auto___11399,mode_11376,ai,take_turn_orig_val__10628,defer_orig_val__10629,take_turn_temp_val__10630,defer_temp_val__10631,_STAR_parent_description_STAR__orig_val__10510_11204,_STAR_parent_description_STAR__temp_val__10511_11205,description__9411__auto____$1,_STAR_parent_description_STAR__orig_val__9962_10661,_STAR_parent_description_STAR__temp_val__9963_10662,description__9411__auto___10660))
;
if(((times_QMARK___9799__auto___11411) && (check_params_QMARK___9800__auto___11412))){
var matching_invocations__9804__auto___11416 = cljs.core.filter.call(null,((function (seq__10656_11377,chunk__10657_11378,count__10658_11379,i__10659_11380,seq__10648_11372,chunk__10653_11373,count__10654_11374,i__10655_11375,seq__10632,chunk__10645,count__10646,i__10647,name__9795__auto___11407,options__9796__auto___11408,invocations__9797__auto___11409,times__9798__auto___11410,times_QMARK___9799__auto___11411,check_params_QMARK___9800__auto___11412,with__9801__auto___11413,with__9801__auto___11414__$1,invocations_str__9802__auto___11415,n_11406,seq__10656_11400__$1,temp__5804__auto___11399,mode_11376,ai,take_turn_orig_val__10628,defer_orig_val__10629,take_turn_temp_val__10630,defer_temp_val__10631,_STAR_parent_description_STAR__orig_val__10510_11204,_STAR_parent_description_STAR__temp_val__10511_11205,description__9411__auto____$1,_STAR_parent_description_STAR__orig_val__9962_10661,_STAR_parent_description_STAR__temp_val__9963_10662,description__9411__auto___10660){
return (function (p1__9793__9805__auto__){
return speclj.stub.params_match_QMARK_.call(null,with__9801__auto___11414__$1,p1__9793__9805__auto__);
});})(seq__10656_11377,chunk__10657_11378,count__10658_11379,i__10659_11380,seq__10648_11372,chunk__10653_11373,count__10654_11374,i__10655_11375,seq__10632,chunk__10645,count__10646,i__10647,name__9795__auto___11407,options__9796__auto___11408,invocations__9797__auto___11409,times__9798__auto___11410,times_QMARK___9799__auto___11411,check_params_QMARK___9800__auto___11412,with__9801__auto___11413,with__9801__auto___11414__$1,invocations_str__9802__auto___11415,n_11406,seq__10656_11400__$1,temp__5804__auto___11399,mode_11376,ai,take_turn_orig_val__10628,defer_orig_val__10629,take_turn_temp_val__10630,defer_temp_val__10631,_STAR_parent_description_STAR__orig_val__10510_11204,_STAR_parent_description_STAR__temp_val__10511_11205,description__9411__auto____$1,_STAR_parent_description_STAR__orig_val__9962_10661,_STAR_parent_description_STAR__temp_val__9963_10662,description__9411__auto___10660))
,invocations__9797__auto___11409);
var matching_count__9806__auto___11417 = cljs.core.count.call(null,matching_invocations__9804__auto___11416);
if(cljs.core._EQ_.call(null,times__9798__auto___11410,matching_count__9806__auto___11417)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(times__9798__auto___11410)," ",invocations_str__9802__auto___11415.call(null,times__9798__auto___11410)," of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__9795__auto___11407)," with ",cljs.core.pr_str.call(null,with__9801__auto___11414__$1),speclj.platform.endl,"     got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(matching_count__9806__auto___11417)," ",invocations_str__9802__auto___11415.call(null,matching_count__9806__auto___11417)].join('')));
}
} else {
if(check_params_QMARK___9800__auto___11412){
if(cljs.core.truth_(cljs.core.some.call(null,((function (seq__10656_11377,chunk__10657_11378,count__10658_11379,i__10659_11380,seq__10648_11372,chunk__10653_11373,count__10654_11374,i__10655_11375,seq__10632,chunk__10645,count__10646,i__10647,name__9795__auto___11407,options__9796__auto___11408,invocations__9797__auto___11409,times__9798__auto___11410,times_QMARK___9799__auto___11411,check_params_QMARK___9800__auto___11412,with__9801__auto___11413,with__9801__auto___11414__$1,invocations_str__9802__auto___11415,n_11406,seq__10656_11400__$1,temp__5804__auto___11399,mode_11376,ai,take_turn_orig_val__10628,defer_orig_val__10629,take_turn_temp_val__10630,defer_temp_val__10631,_STAR_parent_description_STAR__orig_val__10510_11204,_STAR_parent_description_STAR__temp_val__10511_11205,description__9411__auto____$1,_STAR_parent_description_STAR__orig_val__9962_10661,_STAR_parent_description_STAR__temp_val__9963_10662,description__9411__auto___10660){
return (function (p1__9794__9807__auto__){
return speclj.stub.params_match_QMARK_.call(null,with__9801__auto___11414__$1,p1__9794__9807__auto__);
});})(seq__10656_11377,chunk__10657_11378,count__10658_11379,i__10659_11380,seq__10648_11372,chunk__10653_11373,count__10654_11374,i__10655_11375,seq__10632,chunk__10645,count__10646,i__10647,name__9795__auto___11407,options__9796__auto___11408,invocations__9797__auto___11409,times__9798__auto___11410,times_QMARK___9799__auto___11411,check_params_QMARK___9800__auto___11412,with__9801__auto___11413,with__9801__auto___11414__$1,invocations_str__9802__auto___11415,n_11406,seq__10656_11400__$1,temp__5804__auto___11399,mode_11376,ai,take_turn_orig_val__10628,defer_orig_val__10629,take_turn_temp_val__10630,defer_temp_val__10631,_STAR_parent_description_STAR__orig_val__10510_11204,_STAR_parent_description_STAR__temp_val__10511_11205,description__9411__auto____$1,_STAR_parent_description_STAR__orig_val__9962_10661,_STAR_parent_description_STAR__temp_val__9963_10662,description__9411__auto___10660))
,invocations__9797__auto___11409))){
} else {
throw (new speclj.platform.SpecFailure(["Expected: invocation of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__9795__auto___11407)," with ",cljs.core.pr_str.call(null,with__9801__auto___11414__$1),speclj.platform.endl,"     got: ",cljs.core.pr_str.call(null,invocations__9797__auto___11409)].join('')));
}
} else {
if(times_QMARK___9799__auto___11411){
if(cljs.core._EQ_.call(null,times__9798__auto___11410,cljs.core.count.call(null,invocations__9797__auto___11409))){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(times__9798__auto___11410)," ",invocations_str__9802__auto___11415.call(null,times__9798__auto___11410)," of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__9795__auto___11407),speclj.platform.endl,"     got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,invocations__9797__auto___11409))].join('')));
}
} else {
if(cljs.core.seq.call(null,invocations__9797__auto___11409)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: an invocation of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__9795__auto___11407),speclj.platform.endl,"     got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,invocations__9797__auto___11409))].join('')));
}

}
}
}

var expected__9548__auto___11418 = ((cljs.core._EQ_.call(null,(2),mode_11376))?new cljs.core.Keyword(null,"x","x",2099068185):new cljs.core.Keyword(null,"o","o",-1350007228));
var actual__9549__auto___11419 = new cljs.core.Keyword(null,"player","player",-97687400).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.screens.play_spec.state));
if(cljs.core._EQ_.call(null,expected__9548__auto___11418,actual__9549__auto___11419)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__9548__auto___11418;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9516__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9516__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__9549__auto___11419;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9516__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9516__auto__);
}
})()," (using =)"].join('')));
}

cljs.core.reset_BANG_.call(null,tic_tac_toe.screens.play_spec.state,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"board","board",-1907017633),tic_tac_toe.screens.play_spec.board_4,new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"current-screen","current-screen",-1454713691),new cljs.core.Keyword(null,"play","play",-580418022)], null));


var G__11420 = cljs.core.next.call(null,seq__10656_11400__$1);
var G__11421 = null;
var G__11422 = (0);
var G__11423 = (0);
seq__10656_11377 = G__11420;
chunk__10657_11378 = G__11421;
count__10658_11379 = G__11422;
i__10659_11380 = G__11423;
continue;
}
} else {
}
}
break;
}

var G__11424 = seq__10648_11372;
var G__11425 = chunk__10653_11373;
var G__11426 = count__10654_11374;
var G__11427 = (i__10655_11375 + (1));
seq__10648_11372 = G__11424;
chunk__10653_11373 = G__11425;
count__10654_11374 = G__11426;
i__10655_11375 = G__11427;
continue;
} else {
var temp__5804__auto___11428 = cljs.core.seq.call(null,seq__10648_11372);
if(temp__5804__auto___11428){
var seq__10648_11429__$1 = temp__5804__auto___11428;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10648_11429__$1)){
var c__5525__auto___11430 = cljs.core.chunk_first.call(null,seq__10648_11429__$1);
var G__11431 = cljs.core.chunk_rest.call(null,seq__10648_11429__$1);
var G__11432 = c__5525__auto___11430;
var G__11433 = cljs.core.count.call(null,c__5525__auto___11430);
var G__11434 = (0);
seq__10648_11372 = G__11431;
chunk__10653_11373 = G__11432;
count__10654_11374 = G__11433;
i__10655_11375 = G__11434;
continue;
} else {
var mode_11435 = cljs.core.first.call(null,seq__10648_11429__$1);
var seq__10649_11436 = cljs.core.seq.call(null,cljs.core.range.call(null,(16)));
var chunk__10650_11437 = null;
var count__10651_11438 = (0);
var i__10652_11439 = (0);
while(true){
if((i__10652_11439 < count__10651_11438)){
var n_11440 = cljs.core._nth.call(null,chunk__10650_11437,i__10652_11439);
cljs.core.swap_BANG_.call(null,tic_tac_toe.screens.play_spec.state,cljs.core.assoc,new cljs.core.Keyword(null,"mode","mode",654403691),mode_11435,new cljs.core.Keyword(null,"first-ai-level","first-ai-level",1004633644),ai,new cljs.core.Keyword(null,"player","player",-97687400),((cljs.core._EQ_.call(null,(2),mode_11435))?new cljs.core.Keyword(null,"x","x",2099068185):new cljs.core.Keyword(null,"o","o",-1350007228)),new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"gui","gui",604532813));

c3kit.wire.spec_helper.render.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tic_tac_toe.render_screen.render_screen,tic_tac_toe.screens.play_spec.state], null));

c3kit.wire.spec_helper.click_BANG_.call(null,["#index-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n_11440)].join(''));

var name__9795__auto___11441 = new cljs.core.Keyword(null,"turn","turn",75759344);
var options__9796__auto___11442 = cljs.core.PersistentArrayMap.EMPTY;
var invocations__9797__auto___11443 = speclj.stub.invocations_of.call(null,name__9795__auto___11441);
var times__9798__auto___11444 = new cljs.core.Keyword(null,"times","times",1671571467).cljs$core$IFn$_invoke$arity$1(options__9796__auto___11442);
var times_QMARK___9799__auto___11445 = typeof times__9798__auto___11444 === 'number';
var check_params_QMARK___9800__auto___11446 = cljs.core.contains_QMARK_.call(null,options__9796__auto___11442,new cljs.core.Keyword(null,"with","with",-1536296876));
var with__9801__auto___11447 = new cljs.core.Keyword(null,"with","with",-1536296876).cljs$core$IFn$_invoke$arity$1(options__9796__auto___11442);
var with__9801__auto___11448__$1 = (((with__9801__auto___11447 == null))?cljs.core.PersistentVector.EMPTY:with__9801__auto___11447);
var invocations_str__9802__auto___11449 = ((function (seq__10649_11436,chunk__10650_11437,count__10651_11438,i__10652_11439,seq__10648_11372,chunk__10653_11373,count__10654_11374,i__10655_11375,seq__10632,chunk__10645,count__10646,i__10647,name__9795__auto___11441,options__9796__auto___11442,invocations__9797__auto___11443,times__9798__auto___11444,times_QMARK___9799__auto___11445,check_params_QMARK___9800__auto___11446,with__9801__auto___11447,with__9801__auto___11448__$1,n_11440,mode_11435,seq__10648_11429__$1,temp__5804__auto___11428,ai,take_turn_orig_val__10628,defer_orig_val__10629,take_turn_temp_val__10630,defer_temp_val__10631,_STAR_parent_description_STAR__orig_val__10510_11204,_STAR_parent_description_STAR__temp_val__10511_11205,description__9411__auto____$1,_STAR_parent_description_STAR__orig_val__9962_10661,_STAR_parent_description_STAR__temp_val__9963_10662,description__9411__auto___10660){
return (function (p1__9792__9803__auto__){
if(cljs.core._EQ_.call(null,(1),p1__9792__9803__auto__)){
return "invocation";
} else {
return "invocations";
}
});})(seq__10649_11436,chunk__10650_11437,count__10651_11438,i__10652_11439,seq__10648_11372,chunk__10653_11373,count__10654_11374,i__10655_11375,seq__10632,chunk__10645,count__10646,i__10647,name__9795__auto___11441,options__9796__auto___11442,invocations__9797__auto___11443,times__9798__auto___11444,times_QMARK___9799__auto___11445,check_params_QMARK___9800__auto___11446,with__9801__auto___11447,with__9801__auto___11448__$1,n_11440,mode_11435,seq__10648_11429__$1,temp__5804__auto___11428,ai,take_turn_orig_val__10628,defer_orig_val__10629,take_turn_temp_val__10630,defer_temp_val__10631,_STAR_parent_description_STAR__orig_val__10510_11204,_STAR_parent_description_STAR__temp_val__10511_11205,description__9411__auto____$1,_STAR_parent_description_STAR__orig_val__9962_10661,_STAR_parent_description_STAR__temp_val__9963_10662,description__9411__auto___10660))
;
if(((times_QMARK___9799__auto___11445) && (check_params_QMARK___9800__auto___11446))){
var matching_invocations__9804__auto___11450 = cljs.core.filter.call(null,((function (seq__10649_11436,chunk__10650_11437,count__10651_11438,i__10652_11439,seq__10648_11372,chunk__10653_11373,count__10654_11374,i__10655_11375,seq__10632,chunk__10645,count__10646,i__10647,name__9795__auto___11441,options__9796__auto___11442,invocations__9797__auto___11443,times__9798__auto___11444,times_QMARK___9799__auto___11445,check_params_QMARK___9800__auto___11446,with__9801__auto___11447,with__9801__auto___11448__$1,invocations_str__9802__auto___11449,n_11440,mode_11435,seq__10648_11429__$1,temp__5804__auto___11428,ai,take_turn_orig_val__10628,defer_orig_val__10629,take_turn_temp_val__10630,defer_temp_val__10631,_STAR_parent_description_STAR__orig_val__10510_11204,_STAR_parent_description_STAR__temp_val__10511_11205,description__9411__auto____$1,_STAR_parent_description_STAR__orig_val__9962_10661,_STAR_parent_description_STAR__temp_val__9963_10662,description__9411__auto___10660){
return (function (p1__9793__9805__auto__){
return speclj.stub.params_match_QMARK_.call(null,with__9801__auto___11448__$1,p1__9793__9805__auto__);
});})(seq__10649_11436,chunk__10650_11437,count__10651_11438,i__10652_11439,seq__10648_11372,chunk__10653_11373,count__10654_11374,i__10655_11375,seq__10632,chunk__10645,count__10646,i__10647,name__9795__auto___11441,options__9796__auto___11442,invocations__9797__auto___11443,times__9798__auto___11444,times_QMARK___9799__auto___11445,check_params_QMARK___9800__auto___11446,with__9801__auto___11447,with__9801__auto___11448__$1,invocations_str__9802__auto___11449,n_11440,mode_11435,seq__10648_11429__$1,temp__5804__auto___11428,ai,take_turn_orig_val__10628,defer_orig_val__10629,take_turn_temp_val__10630,defer_temp_val__10631,_STAR_parent_description_STAR__orig_val__10510_11204,_STAR_parent_description_STAR__temp_val__10511_11205,description__9411__auto____$1,_STAR_parent_description_STAR__orig_val__9962_10661,_STAR_parent_description_STAR__temp_val__9963_10662,description__9411__auto___10660))
,invocations__9797__auto___11443);
var matching_count__9806__auto___11451 = cljs.core.count.call(null,matching_invocations__9804__auto___11450);
if(cljs.core._EQ_.call(null,times__9798__auto___11444,matching_count__9806__auto___11451)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(times__9798__auto___11444)," ",invocations_str__9802__auto___11449.call(null,times__9798__auto___11444)," of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__9795__auto___11441)," with ",cljs.core.pr_str.call(null,with__9801__auto___11448__$1),speclj.platform.endl,"     got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(matching_count__9806__auto___11451)," ",invocations_str__9802__auto___11449.call(null,matching_count__9806__auto___11451)].join('')));
}
} else {
if(check_params_QMARK___9800__auto___11446){
if(cljs.core.truth_(cljs.core.some.call(null,((function (seq__10649_11436,chunk__10650_11437,count__10651_11438,i__10652_11439,seq__10648_11372,chunk__10653_11373,count__10654_11374,i__10655_11375,seq__10632,chunk__10645,count__10646,i__10647,name__9795__auto___11441,options__9796__auto___11442,invocations__9797__auto___11443,times__9798__auto___11444,times_QMARK___9799__auto___11445,check_params_QMARK___9800__auto___11446,with__9801__auto___11447,with__9801__auto___11448__$1,invocations_str__9802__auto___11449,n_11440,mode_11435,seq__10648_11429__$1,temp__5804__auto___11428,ai,take_turn_orig_val__10628,defer_orig_val__10629,take_turn_temp_val__10630,defer_temp_val__10631,_STAR_parent_description_STAR__orig_val__10510_11204,_STAR_parent_description_STAR__temp_val__10511_11205,description__9411__auto____$1,_STAR_parent_description_STAR__orig_val__9962_10661,_STAR_parent_description_STAR__temp_val__9963_10662,description__9411__auto___10660){
return (function (p1__9794__9807__auto__){
return speclj.stub.params_match_QMARK_.call(null,with__9801__auto___11448__$1,p1__9794__9807__auto__);
});})(seq__10649_11436,chunk__10650_11437,count__10651_11438,i__10652_11439,seq__10648_11372,chunk__10653_11373,count__10654_11374,i__10655_11375,seq__10632,chunk__10645,count__10646,i__10647,name__9795__auto___11441,options__9796__auto___11442,invocations__9797__auto___11443,times__9798__auto___11444,times_QMARK___9799__auto___11445,check_params_QMARK___9800__auto___11446,with__9801__auto___11447,with__9801__auto___11448__$1,invocations_str__9802__auto___11449,n_11440,mode_11435,seq__10648_11429__$1,temp__5804__auto___11428,ai,take_turn_orig_val__10628,defer_orig_val__10629,take_turn_temp_val__10630,defer_temp_val__10631,_STAR_parent_description_STAR__orig_val__10510_11204,_STAR_parent_description_STAR__temp_val__10511_11205,description__9411__auto____$1,_STAR_parent_description_STAR__orig_val__9962_10661,_STAR_parent_description_STAR__temp_val__9963_10662,description__9411__auto___10660))
,invocations__9797__auto___11443))){
} else {
throw (new speclj.platform.SpecFailure(["Expected: invocation of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__9795__auto___11441)," with ",cljs.core.pr_str.call(null,with__9801__auto___11448__$1),speclj.platform.endl,"     got: ",cljs.core.pr_str.call(null,invocations__9797__auto___11443)].join('')));
}
} else {
if(times_QMARK___9799__auto___11445){
if(cljs.core._EQ_.call(null,times__9798__auto___11444,cljs.core.count.call(null,invocations__9797__auto___11443))){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(times__9798__auto___11444)," ",invocations_str__9802__auto___11449.call(null,times__9798__auto___11444)," of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__9795__auto___11441),speclj.platform.endl,"     got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,invocations__9797__auto___11443))].join('')));
}
} else {
if(cljs.core.seq.call(null,invocations__9797__auto___11443)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: an invocation of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__9795__auto___11441),speclj.platform.endl,"     got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,invocations__9797__auto___11443))].join('')));
}

}
}
}

var expected__9548__auto___11452 = ((cljs.core._EQ_.call(null,(2),mode_11435))?new cljs.core.Keyword(null,"x","x",2099068185):new cljs.core.Keyword(null,"o","o",-1350007228));
var actual__9549__auto___11453 = new cljs.core.Keyword(null,"player","player",-97687400).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.screens.play_spec.state));
if(cljs.core._EQ_.call(null,expected__9548__auto___11452,actual__9549__auto___11453)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__9548__auto___11452;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9516__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9516__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__9549__auto___11453;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9516__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9516__auto__);
}
})()," (using =)"].join('')));
}

cljs.core.reset_BANG_.call(null,tic_tac_toe.screens.play_spec.state,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"board","board",-1907017633),tic_tac_toe.screens.play_spec.board_4,new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"current-screen","current-screen",-1454713691),new cljs.core.Keyword(null,"play","play",-580418022)], null));


var G__11454 = seq__10649_11436;
var G__11455 = chunk__10650_11437;
var G__11456 = count__10651_11438;
var G__11457 = (i__10652_11439 + (1));
seq__10649_11436 = G__11454;
chunk__10650_11437 = G__11455;
count__10651_11438 = G__11456;
i__10652_11439 = G__11457;
continue;
} else {
var temp__5804__auto___11458__$1 = cljs.core.seq.call(null,seq__10649_11436);
if(temp__5804__auto___11458__$1){
var seq__10649_11459__$1 = temp__5804__auto___11458__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10649_11459__$1)){
var c__5525__auto___11460 = cljs.core.chunk_first.call(null,seq__10649_11459__$1);
var G__11461 = cljs.core.chunk_rest.call(null,seq__10649_11459__$1);
var G__11462 = c__5525__auto___11460;
var G__11463 = cljs.core.count.call(null,c__5525__auto___11460);
var G__11464 = (0);
seq__10649_11436 = G__11461;
chunk__10650_11437 = G__11462;
count__10651_11438 = G__11463;
i__10652_11439 = G__11464;
continue;
} else {
var n_11465 = cljs.core.first.call(null,seq__10649_11459__$1);
cljs.core.swap_BANG_.call(null,tic_tac_toe.screens.play_spec.state,cljs.core.assoc,new cljs.core.Keyword(null,"mode","mode",654403691),mode_11435,new cljs.core.Keyword(null,"first-ai-level","first-ai-level",1004633644),ai,new cljs.core.Keyword(null,"player","player",-97687400),((cljs.core._EQ_.call(null,(2),mode_11435))?new cljs.core.Keyword(null,"x","x",2099068185):new cljs.core.Keyword(null,"o","o",-1350007228)),new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"gui","gui",604532813));

c3kit.wire.spec_helper.render.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tic_tac_toe.render_screen.render_screen,tic_tac_toe.screens.play_spec.state], null));

c3kit.wire.spec_helper.click_BANG_.call(null,["#index-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n_11465)].join(''));

var name__9795__auto___11466 = new cljs.core.Keyword(null,"turn","turn",75759344);
var options__9796__auto___11467 = cljs.core.PersistentArrayMap.EMPTY;
var invocations__9797__auto___11468 = speclj.stub.invocations_of.call(null,name__9795__auto___11466);
var times__9798__auto___11469 = new cljs.core.Keyword(null,"times","times",1671571467).cljs$core$IFn$_invoke$arity$1(options__9796__auto___11467);
var times_QMARK___9799__auto___11470 = typeof times__9798__auto___11469 === 'number';
var check_params_QMARK___9800__auto___11471 = cljs.core.contains_QMARK_.call(null,options__9796__auto___11467,new cljs.core.Keyword(null,"with","with",-1536296876));
var with__9801__auto___11472 = new cljs.core.Keyword(null,"with","with",-1536296876).cljs$core$IFn$_invoke$arity$1(options__9796__auto___11467);
var with__9801__auto___11473__$1 = (((with__9801__auto___11472 == null))?cljs.core.PersistentVector.EMPTY:with__9801__auto___11472);
var invocations_str__9802__auto___11474 = ((function (seq__10649_11436,chunk__10650_11437,count__10651_11438,i__10652_11439,seq__10648_11372,chunk__10653_11373,count__10654_11374,i__10655_11375,seq__10632,chunk__10645,count__10646,i__10647,name__9795__auto___11466,options__9796__auto___11467,invocations__9797__auto___11468,times__9798__auto___11469,times_QMARK___9799__auto___11470,check_params_QMARK___9800__auto___11471,with__9801__auto___11472,with__9801__auto___11473__$1,n_11465,seq__10649_11459__$1,temp__5804__auto___11458__$1,mode_11435,seq__10648_11429__$1,temp__5804__auto___11428,ai,take_turn_orig_val__10628,defer_orig_val__10629,take_turn_temp_val__10630,defer_temp_val__10631,_STAR_parent_description_STAR__orig_val__10510_11204,_STAR_parent_description_STAR__temp_val__10511_11205,description__9411__auto____$1,_STAR_parent_description_STAR__orig_val__9962_10661,_STAR_parent_description_STAR__temp_val__9963_10662,description__9411__auto___10660){
return (function (p1__9792__9803__auto__){
if(cljs.core._EQ_.call(null,(1),p1__9792__9803__auto__)){
return "invocation";
} else {
return "invocations";
}
});})(seq__10649_11436,chunk__10650_11437,count__10651_11438,i__10652_11439,seq__10648_11372,chunk__10653_11373,count__10654_11374,i__10655_11375,seq__10632,chunk__10645,count__10646,i__10647,name__9795__auto___11466,options__9796__auto___11467,invocations__9797__auto___11468,times__9798__auto___11469,times_QMARK___9799__auto___11470,check_params_QMARK___9800__auto___11471,with__9801__auto___11472,with__9801__auto___11473__$1,n_11465,seq__10649_11459__$1,temp__5804__auto___11458__$1,mode_11435,seq__10648_11429__$1,temp__5804__auto___11428,ai,take_turn_orig_val__10628,defer_orig_val__10629,take_turn_temp_val__10630,defer_temp_val__10631,_STAR_parent_description_STAR__orig_val__10510_11204,_STAR_parent_description_STAR__temp_val__10511_11205,description__9411__auto____$1,_STAR_parent_description_STAR__orig_val__9962_10661,_STAR_parent_description_STAR__temp_val__9963_10662,description__9411__auto___10660))
;
if(((times_QMARK___9799__auto___11470) && (check_params_QMARK___9800__auto___11471))){
var matching_invocations__9804__auto___11475 = cljs.core.filter.call(null,((function (seq__10649_11436,chunk__10650_11437,count__10651_11438,i__10652_11439,seq__10648_11372,chunk__10653_11373,count__10654_11374,i__10655_11375,seq__10632,chunk__10645,count__10646,i__10647,name__9795__auto___11466,options__9796__auto___11467,invocations__9797__auto___11468,times__9798__auto___11469,times_QMARK___9799__auto___11470,check_params_QMARK___9800__auto___11471,with__9801__auto___11472,with__9801__auto___11473__$1,invocations_str__9802__auto___11474,n_11465,seq__10649_11459__$1,temp__5804__auto___11458__$1,mode_11435,seq__10648_11429__$1,temp__5804__auto___11428,ai,take_turn_orig_val__10628,defer_orig_val__10629,take_turn_temp_val__10630,defer_temp_val__10631,_STAR_parent_description_STAR__orig_val__10510_11204,_STAR_parent_description_STAR__temp_val__10511_11205,description__9411__auto____$1,_STAR_parent_description_STAR__orig_val__9962_10661,_STAR_parent_description_STAR__temp_val__9963_10662,description__9411__auto___10660){
return (function (p1__9793__9805__auto__){
return speclj.stub.params_match_QMARK_.call(null,with__9801__auto___11473__$1,p1__9793__9805__auto__);
});})(seq__10649_11436,chunk__10650_11437,count__10651_11438,i__10652_11439,seq__10648_11372,chunk__10653_11373,count__10654_11374,i__10655_11375,seq__10632,chunk__10645,count__10646,i__10647,name__9795__auto___11466,options__9796__auto___11467,invocations__9797__auto___11468,times__9798__auto___11469,times_QMARK___9799__auto___11470,check_params_QMARK___9800__auto___11471,with__9801__auto___11472,with__9801__auto___11473__$1,invocations_str__9802__auto___11474,n_11465,seq__10649_11459__$1,temp__5804__auto___11458__$1,mode_11435,seq__10648_11429__$1,temp__5804__auto___11428,ai,take_turn_orig_val__10628,defer_orig_val__10629,take_turn_temp_val__10630,defer_temp_val__10631,_STAR_parent_description_STAR__orig_val__10510_11204,_STAR_parent_description_STAR__temp_val__10511_11205,description__9411__auto____$1,_STAR_parent_description_STAR__orig_val__9962_10661,_STAR_parent_description_STAR__temp_val__9963_10662,description__9411__auto___10660))
,invocations__9797__auto___11468);
var matching_count__9806__auto___11476 = cljs.core.count.call(null,matching_invocations__9804__auto___11475);
if(cljs.core._EQ_.call(null,times__9798__auto___11469,matching_count__9806__auto___11476)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(times__9798__auto___11469)," ",invocations_str__9802__auto___11474.call(null,times__9798__auto___11469)," of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__9795__auto___11466)," with ",cljs.core.pr_str.call(null,with__9801__auto___11473__$1),speclj.platform.endl,"     got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(matching_count__9806__auto___11476)," ",invocations_str__9802__auto___11474.call(null,matching_count__9806__auto___11476)].join('')));
}
} else {
if(check_params_QMARK___9800__auto___11471){
if(cljs.core.truth_(cljs.core.some.call(null,((function (seq__10649_11436,chunk__10650_11437,count__10651_11438,i__10652_11439,seq__10648_11372,chunk__10653_11373,count__10654_11374,i__10655_11375,seq__10632,chunk__10645,count__10646,i__10647,name__9795__auto___11466,options__9796__auto___11467,invocations__9797__auto___11468,times__9798__auto___11469,times_QMARK___9799__auto___11470,check_params_QMARK___9800__auto___11471,with__9801__auto___11472,with__9801__auto___11473__$1,invocations_str__9802__auto___11474,n_11465,seq__10649_11459__$1,temp__5804__auto___11458__$1,mode_11435,seq__10648_11429__$1,temp__5804__auto___11428,ai,take_turn_orig_val__10628,defer_orig_val__10629,take_turn_temp_val__10630,defer_temp_val__10631,_STAR_parent_description_STAR__orig_val__10510_11204,_STAR_parent_description_STAR__temp_val__10511_11205,description__9411__auto____$1,_STAR_parent_description_STAR__orig_val__9962_10661,_STAR_parent_description_STAR__temp_val__9963_10662,description__9411__auto___10660){
return (function (p1__9794__9807__auto__){
return speclj.stub.params_match_QMARK_.call(null,with__9801__auto___11473__$1,p1__9794__9807__auto__);
});})(seq__10649_11436,chunk__10650_11437,count__10651_11438,i__10652_11439,seq__10648_11372,chunk__10653_11373,count__10654_11374,i__10655_11375,seq__10632,chunk__10645,count__10646,i__10647,name__9795__auto___11466,options__9796__auto___11467,invocations__9797__auto___11468,times__9798__auto___11469,times_QMARK___9799__auto___11470,check_params_QMARK___9800__auto___11471,with__9801__auto___11472,with__9801__auto___11473__$1,invocations_str__9802__auto___11474,n_11465,seq__10649_11459__$1,temp__5804__auto___11458__$1,mode_11435,seq__10648_11429__$1,temp__5804__auto___11428,ai,take_turn_orig_val__10628,defer_orig_val__10629,take_turn_temp_val__10630,defer_temp_val__10631,_STAR_parent_description_STAR__orig_val__10510_11204,_STAR_parent_description_STAR__temp_val__10511_11205,description__9411__auto____$1,_STAR_parent_description_STAR__orig_val__9962_10661,_STAR_parent_description_STAR__temp_val__9963_10662,description__9411__auto___10660))
,invocations__9797__auto___11468))){
} else {
throw (new speclj.platform.SpecFailure(["Expected: invocation of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__9795__auto___11466)," with ",cljs.core.pr_str.call(null,with__9801__auto___11473__$1),speclj.platform.endl,"     got: ",cljs.core.pr_str.call(null,invocations__9797__auto___11468)].join('')));
}
} else {
if(times_QMARK___9799__auto___11470){
if(cljs.core._EQ_.call(null,times__9798__auto___11469,cljs.core.count.call(null,invocations__9797__auto___11468))){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(times__9798__auto___11469)," ",invocations_str__9802__auto___11474.call(null,times__9798__auto___11469)," of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__9795__auto___11466),speclj.platform.endl,"     got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,invocations__9797__auto___11468))].join('')));
}
} else {
if(cljs.core.seq.call(null,invocations__9797__auto___11468)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: an invocation of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__9795__auto___11466),speclj.platform.endl,"     got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,invocations__9797__auto___11468))].join('')));
}

}
}
}

var expected__9548__auto___11477 = ((cljs.core._EQ_.call(null,(2),mode_11435))?new cljs.core.Keyword(null,"x","x",2099068185):new cljs.core.Keyword(null,"o","o",-1350007228));
var actual__9549__auto___11478 = new cljs.core.Keyword(null,"player","player",-97687400).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.screens.play_spec.state));
if(cljs.core._EQ_.call(null,expected__9548__auto___11477,actual__9549__auto___11478)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__9548__auto___11477;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9516__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9516__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__9549__auto___11478;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9516__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9516__auto__);
}
})()," (using =)"].join('')));
}

cljs.core.reset_BANG_.call(null,tic_tac_toe.screens.play_spec.state,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"board","board",-1907017633),tic_tac_toe.screens.play_spec.board_4,new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"current-screen","current-screen",-1454713691),new cljs.core.Keyword(null,"play","play",-580418022)], null));


var G__11479 = cljs.core.next.call(null,seq__10649_11459__$1);
var G__11480 = null;
var G__11481 = (0);
var G__11482 = (0);
seq__10649_11436 = G__11479;
chunk__10650_11437 = G__11480;
count__10651_11438 = G__11481;
i__10652_11439 = G__11482;
continue;
}
} else {
}
}
break;
}

var G__11483 = cljs.core.next.call(null,seq__10648_11429__$1);
var G__11484 = null;
var G__11485 = (0);
var G__11486 = (0);
seq__10648_11372 = G__11483;
chunk__10653_11373 = G__11484;
count__10654_11374 = G__11485;
i__10655_11375 = G__11486;
continue;
}
} else {
}
}
break;
}

var G__11487 = seq__10632;
var G__11488 = chunk__10645;
var G__11489 = count__10646;
var G__11490 = (i__10647 + (1));
seq__10632 = G__11487;
chunk__10645 = G__11488;
count__10646 = G__11489;
i__10647 = G__11490;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__10632);
if(temp__5804__auto__){
var seq__10632__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10632__$1)){
var c__5525__auto__ = cljs.core.chunk_first.call(null,seq__10632__$1);
var G__11491 = cljs.core.chunk_rest.call(null,seq__10632__$1);
var G__11492 = c__5525__auto__;
var G__11493 = cljs.core.count.call(null,c__5525__auto__);
var G__11494 = (0);
seq__10632 = G__11491;
chunk__10645 = G__11492;
count__10646 = G__11493;
i__10647 = G__11494;
continue;
} else {
var ai = cljs.core.first.call(null,seq__10632__$1);
var seq__10633_11495 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(3)], null));
var chunk__10638_11496 = null;
var count__10639_11497 = (0);
var i__10640_11498 = (0);
while(true){
if((i__10640_11498 < count__10639_11497)){
var mode_11499 = cljs.core._nth.call(null,chunk__10638_11496,i__10640_11498);
var seq__10641_11500 = cljs.core.seq.call(null,cljs.core.range.call(null,(16)));
var chunk__10642_11501 = null;
var count__10643_11502 = (0);
var i__10644_11503 = (0);
while(true){
if((i__10644_11503 < count__10643_11502)){
var n_11504 = cljs.core._nth.call(null,chunk__10642_11501,i__10644_11503);
cljs.core.swap_BANG_.call(null,tic_tac_toe.screens.play_spec.state,cljs.core.assoc,new cljs.core.Keyword(null,"mode","mode",654403691),mode_11499,new cljs.core.Keyword(null,"first-ai-level","first-ai-level",1004633644),ai,new cljs.core.Keyword(null,"player","player",-97687400),((cljs.core._EQ_.call(null,(2),mode_11499))?new cljs.core.Keyword(null,"x","x",2099068185):new cljs.core.Keyword(null,"o","o",-1350007228)),new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"gui","gui",604532813));

c3kit.wire.spec_helper.render.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tic_tac_toe.render_screen.render_screen,tic_tac_toe.screens.play_spec.state], null));

c3kit.wire.spec_helper.click_BANG_.call(null,["#index-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n_11504)].join(''));

var name__9795__auto___11505 = new cljs.core.Keyword(null,"turn","turn",75759344);
var options__9796__auto___11506 = cljs.core.PersistentArrayMap.EMPTY;
var invocations__9797__auto___11507 = speclj.stub.invocations_of.call(null,name__9795__auto___11505);
var times__9798__auto___11508 = new cljs.core.Keyword(null,"times","times",1671571467).cljs$core$IFn$_invoke$arity$1(options__9796__auto___11506);
var times_QMARK___9799__auto___11509 = typeof times__9798__auto___11508 === 'number';
var check_params_QMARK___9800__auto___11510 = cljs.core.contains_QMARK_.call(null,options__9796__auto___11506,new cljs.core.Keyword(null,"with","with",-1536296876));
var with__9801__auto___11511 = new cljs.core.Keyword(null,"with","with",-1536296876).cljs$core$IFn$_invoke$arity$1(options__9796__auto___11506);
var with__9801__auto___11512__$1 = (((with__9801__auto___11511 == null))?cljs.core.PersistentVector.EMPTY:with__9801__auto___11511);
var invocations_str__9802__auto___11513 = ((function (seq__10641_11500,chunk__10642_11501,count__10643_11502,i__10644_11503,seq__10633_11495,chunk__10638_11496,count__10639_11497,i__10640_11498,seq__10632,chunk__10645,count__10646,i__10647,name__9795__auto___11505,options__9796__auto___11506,invocations__9797__auto___11507,times__9798__auto___11508,times_QMARK___9799__auto___11509,check_params_QMARK___9800__auto___11510,with__9801__auto___11511,with__9801__auto___11512__$1,n_11504,mode_11499,ai,seq__10632__$1,temp__5804__auto__,take_turn_orig_val__10628,defer_orig_val__10629,take_turn_temp_val__10630,defer_temp_val__10631,_STAR_parent_description_STAR__orig_val__10510_11204,_STAR_parent_description_STAR__temp_val__10511_11205,description__9411__auto____$1,_STAR_parent_description_STAR__orig_val__9962_10661,_STAR_parent_description_STAR__temp_val__9963_10662,description__9411__auto___10660){
return (function (p1__9792__9803__auto__){
if(cljs.core._EQ_.call(null,(1),p1__9792__9803__auto__)){
return "invocation";
} else {
return "invocations";
}
});})(seq__10641_11500,chunk__10642_11501,count__10643_11502,i__10644_11503,seq__10633_11495,chunk__10638_11496,count__10639_11497,i__10640_11498,seq__10632,chunk__10645,count__10646,i__10647,name__9795__auto___11505,options__9796__auto___11506,invocations__9797__auto___11507,times__9798__auto___11508,times_QMARK___9799__auto___11509,check_params_QMARK___9800__auto___11510,with__9801__auto___11511,with__9801__auto___11512__$1,n_11504,mode_11499,ai,seq__10632__$1,temp__5804__auto__,take_turn_orig_val__10628,defer_orig_val__10629,take_turn_temp_val__10630,defer_temp_val__10631,_STAR_parent_description_STAR__orig_val__10510_11204,_STAR_parent_description_STAR__temp_val__10511_11205,description__9411__auto____$1,_STAR_parent_description_STAR__orig_val__9962_10661,_STAR_parent_description_STAR__temp_val__9963_10662,description__9411__auto___10660))
;
if(((times_QMARK___9799__auto___11509) && (check_params_QMARK___9800__auto___11510))){
var matching_invocations__9804__auto___11514 = cljs.core.filter.call(null,((function (seq__10641_11500,chunk__10642_11501,count__10643_11502,i__10644_11503,seq__10633_11495,chunk__10638_11496,count__10639_11497,i__10640_11498,seq__10632,chunk__10645,count__10646,i__10647,name__9795__auto___11505,options__9796__auto___11506,invocations__9797__auto___11507,times__9798__auto___11508,times_QMARK___9799__auto___11509,check_params_QMARK___9800__auto___11510,with__9801__auto___11511,with__9801__auto___11512__$1,invocations_str__9802__auto___11513,n_11504,mode_11499,ai,seq__10632__$1,temp__5804__auto__,take_turn_orig_val__10628,defer_orig_val__10629,take_turn_temp_val__10630,defer_temp_val__10631,_STAR_parent_description_STAR__orig_val__10510_11204,_STAR_parent_description_STAR__temp_val__10511_11205,description__9411__auto____$1,_STAR_parent_description_STAR__orig_val__9962_10661,_STAR_parent_description_STAR__temp_val__9963_10662,description__9411__auto___10660){
return (function (p1__9793__9805__auto__){
return speclj.stub.params_match_QMARK_.call(null,with__9801__auto___11512__$1,p1__9793__9805__auto__);
});})(seq__10641_11500,chunk__10642_11501,count__10643_11502,i__10644_11503,seq__10633_11495,chunk__10638_11496,count__10639_11497,i__10640_11498,seq__10632,chunk__10645,count__10646,i__10647,name__9795__auto___11505,options__9796__auto___11506,invocations__9797__auto___11507,times__9798__auto___11508,times_QMARK___9799__auto___11509,check_params_QMARK___9800__auto___11510,with__9801__auto___11511,with__9801__auto___11512__$1,invocations_str__9802__auto___11513,n_11504,mode_11499,ai,seq__10632__$1,temp__5804__auto__,take_turn_orig_val__10628,defer_orig_val__10629,take_turn_temp_val__10630,defer_temp_val__10631,_STAR_parent_description_STAR__orig_val__10510_11204,_STAR_parent_description_STAR__temp_val__10511_11205,description__9411__auto____$1,_STAR_parent_description_STAR__orig_val__9962_10661,_STAR_parent_description_STAR__temp_val__9963_10662,description__9411__auto___10660))
,invocations__9797__auto___11507);
var matching_count__9806__auto___11515 = cljs.core.count.call(null,matching_invocations__9804__auto___11514);
if(cljs.core._EQ_.call(null,times__9798__auto___11508,matching_count__9806__auto___11515)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(times__9798__auto___11508)," ",invocations_str__9802__auto___11513.call(null,times__9798__auto___11508)," of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__9795__auto___11505)," with ",cljs.core.pr_str.call(null,with__9801__auto___11512__$1),speclj.platform.endl,"     got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(matching_count__9806__auto___11515)," ",invocations_str__9802__auto___11513.call(null,matching_count__9806__auto___11515)].join('')));
}
} else {
if(check_params_QMARK___9800__auto___11510){
if(cljs.core.truth_(cljs.core.some.call(null,((function (seq__10641_11500,chunk__10642_11501,count__10643_11502,i__10644_11503,seq__10633_11495,chunk__10638_11496,count__10639_11497,i__10640_11498,seq__10632,chunk__10645,count__10646,i__10647,name__9795__auto___11505,options__9796__auto___11506,invocations__9797__auto___11507,times__9798__auto___11508,times_QMARK___9799__auto___11509,check_params_QMARK___9800__auto___11510,with__9801__auto___11511,with__9801__auto___11512__$1,invocations_str__9802__auto___11513,n_11504,mode_11499,ai,seq__10632__$1,temp__5804__auto__,take_turn_orig_val__10628,defer_orig_val__10629,take_turn_temp_val__10630,defer_temp_val__10631,_STAR_parent_description_STAR__orig_val__10510_11204,_STAR_parent_description_STAR__temp_val__10511_11205,description__9411__auto____$1,_STAR_parent_description_STAR__orig_val__9962_10661,_STAR_parent_description_STAR__temp_val__9963_10662,description__9411__auto___10660){
return (function (p1__9794__9807__auto__){
return speclj.stub.params_match_QMARK_.call(null,with__9801__auto___11512__$1,p1__9794__9807__auto__);
});})(seq__10641_11500,chunk__10642_11501,count__10643_11502,i__10644_11503,seq__10633_11495,chunk__10638_11496,count__10639_11497,i__10640_11498,seq__10632,chunk__10645,count__10646,i__10647,name__9795__auto___11505,options__9796__auto___11506,invocations__9797__auto___11507,times__9798__auto___11508,times_QMARK___9799__auto___11509,check_params_QMARK___9800__auto___11510,with__9801__auto___11511,with__9801__auto___11512__$1,invocations_str__9802__auto___11513,n_11504,mode_11499,ai,seq__10632__$1,temp__5804__auto__,take_turn_orig_val__10628,defer_orig_val__10629,take_turn_temp_val__10630,defer_temp_val__10631,_STAR_parent_description_STAR__orig_val__10510_11204,_STAR_parent_description_STAR__temp_val__10511_11205,description__9411__auto____$1,_STAR_parent_description_STAR__orig_val__9962_10661,_STAR_parent_description_STAR__temp_val__9963_10662,description__9411__auto___10660))
,invocations__9797__auto___11507))){
} else {
throw (new speclj.platform.SpecFailure(["Expected: invocation of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__9795__auto___11505)," with ",cljs.core.pr_str.call(null,with__9801__auto___11512__$1),speclj.platform.endl,"     got: ",cljs.core.pr_str.call(null,invocations__9797__auto___11507)].join('')));
}
} else {
if(times_QMARK___9799__auto___11509){
if(cljs.core._EQ_.call(null,times__9798__auto___11508,cljs.core.count.call(null,invocations__9797__auto___11507))){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(times__9798__auto___11508)," ",invocations_str__9802__auto___11513.call(null,times__9798__auto___11508)," of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__9795__auto___11505),speclj.platform.endl,"     got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,invocations__9797__auto___11507))].join('')));
}
} else {
if(cljs.core.seq.call(null,invocations__9797__auto___11507)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: an invocation of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__9795__auto___11505),speclj.platform.endl,"     got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,invocations__9797__auto___11507))].join('')));
}

}
}
}

var expected__9548__auto___11516 = ((cljs.core._EQ_.call(null,(2),mode_11499))?new cljs.core.Keyword(null,"x","x",2099068185):new cljs.core.Keyword(null,"o","o",-1350007228));
var actual__9549__auto___11517 = new cljs.core.Keyword(null,"player","player",-97687400).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.screens.play_spec.state));
if(cljs.core._EQ_.call(null,expected__9548__auto___11516,actual__9549__auto___11517)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__9548__auto___11516;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9516__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9516__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__9549__auto___11517;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9516__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9516__auto__);
}
})()," (using =)"].join('')));
}

cljs.core.reset_BANG_.call(null,tic_tac_toe.screens.play_spec.state,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"board","board",-1907017633),tic_tac_toe.screens.play_spec.board_4,new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"current-screen","current-screen",-1454713691),new cljs.core.Keyword(null,"play","play",-580418022)], null));


var G__11518 = seq__10641_11500;
var G__11519 = chunk__10642_11501;
var G__11520 = count__10643_11502;
var G__11521 = (i__10644_11503 + (1));
seq__10641_11500 = G__11518;
chunk__10642_11501 = G__11519;
count__10643_11502 = G__11520;
i__10644_11503 = G__11521;
continue;
} else {
var temp__5804__auto___11522__$1 = cljs.core.seq.call(null,seq__10641_11500);
if(temp__5804__auto___11522__$1){
var seq__10641_11523__$1 = temp__5804__auto___11522__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10641_11523__$1)){
var c__5525__auto___11524 = cljs.core.chunk_first.call(null,seq__10641_11523__$1);
var G__11525 = cljs.core.chunk_rest.call(null,seq__10641_11523__$1);
var G__11526 = c__5525__auto___11524;
var G__11527 = cljs.core.count.call(null,c__5525__auto___11524);
var G__11528 = (0);
seq__10641_11500 = G__11525;
chunk__10642_11501 = G__11526;
count__10643_11502 = G__11527;
i__10644_11503 = G__11528;
continue;
} else {
var n_11529 = cljs.core.first.call(null,seq__10641_11523__$1);
cljs.core.swap_BANG_.call(null,tic_tac_toe.screens.play_spec.state,cljs.core.assoc,new cljs.core.Keyword(null,"mode","mode",654403691),mode_11499,new cljs.core.Keyword(null,"first-ai-level","first-ai-level",1004633644),ai,new cljs.core.Keyword(null,"player","player",-97687400),((cljs.core._EQ_.call(null,(2),mode_11499))?new cljs.core.Keyword(null,"x","x",2099068185):new cljs.core.Keyword(null,"o","o",-1350007228)),new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"gui","gui",604532813));

c3kit.wire.spec_helper.render.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tic_tac_toe.render_screen.render_screen,tic_tac_toe.screens.play_spec.state], null));

c3kit.wire.spec_helper.click_BANG_.call(null,["#index-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n_11529)].join(''));

var name__9795__auto___11530 = new cljs.core.Keyword(null,"turn","turn",75759344);
var options__9796__auto___11531 = cljs.core.PersistentArrayMap.EMPTY;
var invocations__9797__auto___11532 = speclj.stub.invocations_of.call(null,name__9795__auto___11530);
var times__9798__auto___11533 = new cljs.core.Keyword(null,"times","times",1671571467).cljs$core$IFn$_invoke$arity$1(options__9796__auto___11531);
var times_QMARK___9799__auto___11534 = typeof times__9798__auto___11533 === 'number';
var check_params_QMARK___9800__auto___11535 = cljs.core.contains_QMARK_.call(null,options__9796__auto___11531,new cljs.core.Keyword(null,"with","with",-1536296876));
var with__9801__auto___11536 = new cljs.core.Keyword(null,"with","with",-1536296876).cljs$core$IFn$_invoke$arity$1(options__9796__auto___11531);
var with__9801__auto___11537__$1 = (((with__9801__auto___11536 == null))?cljs.core.PersistentVector.EMPTY:with__9801__auto___11536);
var invocations_str__9802__auto___11538 = ((function (seq__10641_11500,chunk__10642_11501,count__10643_11502,i__10644_11503,seq__10633_11495,chunk__10638_11496,count__10639_11497,i__10640_11498,seq__10632,chunk__10645,count__10646,i__10647,name__9795__auto___11530,options__9796__auto___11531,invocations__9797__auto___11532,times__9798__auto___11533,times_QMARK___9799__auto___11534,check_params_QMARK___9800__auto___11535,with__9801__auto___11536,with__9801__auto___11537__$1,n_11529,seq__10641_11523__$1,temp__5804__auto___11522__$1,mode_11499,ai,seq__10632__$1,temp__5804__auto__,take_turn_orig_val__10628,defer_orig_val__10629,take_turn_temp_val__10630,defer_temp_val__10631,_STAR_parent_description_STAR__orig_val__10510_11204,_STAR_parent_description_STAR__temp_val__10511_11205,description__9411__auto____$1,_STAR_parent_description_STAR__orig_val__9962_10661,_STAR_parent_description_STAR__temp_val__9963_10662,description__9411__auto___10660){
return (function (p1__9792__9803__auto__){
if(cljs.core._EQ_.call(null,(1),p1__9792__9803__auto__)){
return "invocation";
} else {
return "invocations";
}
});})(seq__10641_11500,chunk__10642_11501,count__10643_11502,i__10644_11503,seq__10633_11495,chunk__10638_11496,count__10639_11497,i__10640_11498,seq__10632,chunk__10645,count__10646,i__10647,name__9795__auto___11530,options__9796__auto___11531,invocations__9797__auto___11532,times__9798__auto___11533,times_QMARK___9799__auto___11534,check_params_QMARK___9800__auto___11535,with__9801__auto___11536,with__9801__auto___11537__$1,n_11529,seq__10641_11523__$1,temp__5804__auto___11522__$1,mode_11499,ai,seq__10632__$1,temp__5804__auto__,take_turn_orig_val__10628,defer_orig_val__10629,take_turn_temp_val__10630,defer_temp_val__10631,_STAR_parent_description_STAR__orig_val__10510_11204,_STAR_parent_description_STAR__temp_val__10511_11205,description__9411__auto____$1,_STAR_parent_description_STAR__orig_val__9962_10661,_STAR_parent_description_STAR__temp_val__9963_10662,description__9411__auto___10660))
;
if(((times_QMARK___9799__auto___11534) && (check_params_QMARK___9800__auto___11535))){
var matching_invocations__9804__auto___11539 = cljs.core.filter.call(null,((function (seq__10641_11500,chunk__10642_11501,count__10643_11502,i__10644_11503,seq__10633_11495,chunk__10638_11496,count__10639_11497,i__10640_11498,seq__10632,chunk__10645,count__10646,i__10647,name__9795__auto___11530,options__9796__auto___11531,invocations__9797__auto___11532,times__9798__auto___11533,times_QMARK___9799__auto___11534,check_params_QMARK___9800__auto___11535,with__9801__auto___11536,with__9801__auto___11537__$1,invocations_str__9802__auto___11538,n_11529,seq__10641_11523__$1,temp__5804__auto___11522__$1,mode_11499,ai,seq__10632__$1,temp__5804__auto__,take_turn_orig_val__10628,defer_orig_val__10629,take_turn_temp_val__10630,defer_temp_val__10631,_STAR_parent_description_STAR__orig_val__10510_11204,_STAR_parent_description_STAR__temp_val__10511_11205,description__9411__auto____$1,_STAR_parent_description_STAR__orig_val__9962_10661,_STAR_parent_description_STAR__temp_val__9963_10662,description__9411__auto___10660){
return (function (p1__9793__9805__auto__){
return speclj.stub.params_match_QMARK_.call(null,with__9801__auto___11537__$1,p1__9793__9805__auto__);
});})(seq__10641_11500,chunk__10642_11501,count__10643_11502,i__10644_11503,seq__10633_11495,chunk__10638_11496,count__10639_11497,i__10640_11498,seq__10632,chunk__10645,count__10646,i__10647,name__9795__auto___11530,options__9796__auto___11531,invocations__9797__auto___11532,times__9798__auto___11533,times_QMARK___9799__auto___11534,check_params_QMARK___9800__auto___11535,with__9801__auto___11536,with__9801__auto___11537__$1,invocations_str__9802__auto___11538,n_11529,seq__10641_11523__$1,temp__5804__auto___11522__$1,mode_11499,ai,seq__10632__$1,temp__5804__auto__,take_turn_orig_val__10628,defer_orig_val__10629,take_turn_temp_val__10630,defer_temp_val__10631,_STAR_parent_description_STAR__orig_val__10510_11204,_STAR_parent_description_STAR__temp_val__10511_11205,description__9411__auto____$1,_STAR_parent_description_STAR__orig_val__9962_10661,_STAR_parent_description_STAR__temp_val__9963_10662,description__9411__auto___10660))
,invocations__9797__auto___11532);
var matching_count__9806__auto___11540 = cljs.core.count.call(null,matching_invocations__9804__auto___11539);
if(cljs.core._EQ_.call(null,times__9798__auto___11533,matching_count__9806__auto___11540)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(times__9798__auto___11533)," ",invocations_str__9802__auto___11538.call(null,times__9798__auto___11533)," of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__9795__auto___11530)," with ",cljs.core.pr_str.call(null,with__9801__auto___11537__$1),speclj.platform.endl,"     got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(matching_count__9806__auto___11540)," ",invocations_str__9802__auto___11538.call(null,matching_count__9806__auto___11540)].join('')));
}
} else {
if(check_params_QMARK___9800__auto___11535){
if(cljs.core.truth_(cljs.core.some.call(null,((function (seq__10641_11500,chunk__10642_11501,count__10643_11502,i__10644_11503,seq__10633_11495,chunk__10638_11496,count__10639_11497,i__10640_11498,seq__10632,chunk__10645,count__10646,i__10647,name__9795__auto___11530,options__9796__auto___11531,invocations__9797__auto___11532,times__9798__auto___11533,times_QMARK___9799__auto___11534,check_params_QMARK___9800__auto___11535,with__9801__auto___11536,with__9801__auto___11537__$1,invocations_str__9802__auto___11538,n_11529,seq__10641_11523__$1,temp__5804__auto___11522__$1,mode_11499,ai,seq__10632__$1,temp__5804__auto__,take_turn_orig_val__10628,defer_orig_val__10629,take_turn_temp_val__10630,defer_temp_val__10631,_STAR_parent_description_STAR__orig_val__10510_11204,_STAR_parent_description_STAR__temp_val__10511_11205,description__9411__auto____$1,_STAR_parent_description_STAR__orig_val__9962_10661,_STAR_parent_description_STAR__temp_val__9963_10662,description__9411__auto___10660){
return (function (p1__9794__9807__auto__){
return speclj.stub.params_match_QMARK_.call(null,with__9801__auto___11537__$1,p1__9794__9807__auto__);
});})(seq__10641_11500,chunk__10642_11501,count__10643_11502,i__10644_11503,seq__10633_11495,chunk__10638_11496,count__10639_11497,i__10640_11498,seq__10632,chunk__10645,count__10646,i__10647,name__9795__auto___11530,options__9796__auto___11531,invocations__9797__auto___11532,times__9798__auto___11533,times_QMARK___9799__auto___11534,check_params_QMARK___9800__auto___11535,with__9801__auto___11536,with__9801__auto___11537__$1,invocations_str__9802__auto___11538,n_11529,seq__10641_11523__$1,temp__5804__auto___11522__$1,mode_11499,ai,seq__10632__$1,temp__5804__auto__,take_turn_orig_val__10628,defer_orig_val__10629,take_turn_temp_val__10630,defer_temp_val__10631,_STAR_parent_description_STAR__orig_val__10510_11204,_STAR_parent_description_STAR__temp_val__10511_11205,description__9411__auto____$1,_STAR_parent_description_STAR__orig_val__9962_10661,_STAR_parent_description_STAR__temp_val__9963_10662,description__9411__auto___10660))
,invocations__9797__auto___11532))){
} else {
throw (new speclj.platform.SpecFailure(["Expected: invocation of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__9795__auto___11530)," with ",cljs.core.pr_str.call(null,with__9801__auto___11537__$1),speclj.platform.endl,"     got: ",cljs.core.pr_str.call(null,invocations__9797__auto___11532)].join('')));
}
} else {
if(times_QMARK___9799__auto___11534){
if(cljs.core._EQ_.call(null,times__9798__auto___11533,cljs.core.count.call(null,invocations__9797__auto___11532))){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(times__9798__auto___11533)," ",invocations_str__9802__auto___11538.call(null,times__9798__auto___11533)," of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__9795__auto___11530),speclj.platform.endl,"     got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,invocations__9797__auto___11532))].join('')));
}
} else {
if(cljs.core.seq.call(null,invocations__9797__auto___11532)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: an invocation of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__9795__auto___11530),speclj.platform.endl,"     got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,invocations__9797__auto___11532))].join('')));
}

}
}
}

var expected__9548__auto___11541 = ((cljs.core._EQ_.call(null,(2),mode_11499))?new cljs.core.Keyword(null,"x","x",2099068185):new cljs.core.Keyword(null,"o","o",-1350007228));
var actual__9549__auto___11542 = new cljs.core.Keyword(null,"player","player",-97687400).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.screens.play_spec.state));
if(cljs.core._EQ_.call(null,expected__9548__auto___11541,actual__9549__auto___11542)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__9548__auto___11541;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9516__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9516__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__9549__auto___11542;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9516__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9516__auto__);
}
})()," (using =)"].join('')));
}

cljs.core.reset_BANG_.call(null,tic_tac_toe.screens.play_spec.state,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"board","board",-1907017633),tic_tac_toe.screens.play_spec.board_4,new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"current-screen","current-screen",-1454713691),new cljs.core.Keyword(null,"play","play",-580418022)], null));


var G__11543 = cljs.core.next.call(null,seq__10641_11523__$1);
var G__11544 = null;
var G__11545 = (0);
var G__11546 = (0);
seq__10641_11500 = G__11543;
chunk__10642_11501 = G__11544;
count__10643_11502 = G__11545;
i__10644_11503 = G__11546;
continue;
}
} else {
}
}
break;
}

var G__11547 = seq__10633_11495;
var G__11548 = chunk__10638_11496;
var G__11549 = count__10639_11497;
var G__11550 = (i__10640_11498 + (1));
seq__10633_11495 = G__11547;
chunk__10638_11496 = G__11548;
count__10639_11497 = G__11549;
i__10640_11498 = G__11550;
continue;
} else {
var temp__5804__auto___11551__$1 = cljs.core.seq.call(null,seq__10633_11495);
if(temp__5804__auto___11551__$1){
var seq__10633_11552__$1 = temp__5804__auto___11551__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10633_11552__$1)){
var c__5525__auto___11553 = cljs.core.chunk_first.call(null,seq__10633_11552__$1);
var G__11554 = cljs.core.chunk_rest.call(null,seq__10633_11552__$1);
var G__11555 = c__5525__auto___11553;
var G__11556 = cljs.core.count.call(null,c__5525__auto___11553);
var G__11557 = (0);
seq__10633_11495 = G__11554;
chunk__10638_11496 = G__11555;
count__10639_11497 = G__11556;
i__10640_11498 = G__11557;
continue;
} else {
var mode_11558 = cljs.core.first.call(null,seq__10633_11552__$1);
var seq__10634_11559 = cljs.core.seq.call(null,cljs.core.range.call(null,(16)));
var chunk__10635_11560 = null;
var count__10636_11561 = (0);
var i__10637_11562 = (0);
while(true){
if((i__10637_11562 < count__10636_11561)){
var n_11563 = cljs.core._nth.call(null,chunk__10635_11560,i__10637_11562);
cljs.core.swap_BANG_.call(null,tic_tac_toe.screens.play_spec.state,cljs.core.assoc,new cljs.core.Keyword(null,"mode","mode",654403691),mode_11558,new cljs.core.Keyword(null,"first-ai-level","first-ai-level",1004633644),ai,new cljs.core.Keyword(null,"player","player",-97687400),((cljs.core._EQ_.call(null,(2),mode_11558))?new cljs.core.Keyword(null,"x","x",2099068185):new cljs.core.Keyword(null,"o","o",-1350007228)),new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"gui","gui",604532813));

c3kit.wire.spec_helper.render.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tic_tac_toe.render_screen.render_screen,tic_tac_toe.screens.play_spec.state], null));

c3kit.wire.spec_helper.click_BANG_.call(null,["#index-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n_11563)].join(''));

var name__9795__auto___11564 = new cljs.core.Keyword(null,"turn","turn",75759344);
var options__9796__auto___11565 = cljs.core.PersistentArrayMap.EMPTY;
var invocations__9797__auto___11566 = speclj.stub.invocations_of.call(null,name__9795__auto___11564);
var times__9798__auto___11567 = new cljs.core.Keyword(null,"times","times",1671571467).cljs$core$IFn$_invoke$arity$1(options__9796__auto___11565);
var times_QMARK___9799__auto___11568 = typeof times__9798__auto___11567 === 'number';
var check_params_QMARK___9800__auto___11569 = cljs.core.contains_QMARK_.call(null,options__9796__auto___11565,new cljs.core.Keyword(null,"with","with",-1536296876));
var with__9801__auto___11570 = new cljs.core.Keyword(null,"with","with",-1536296876).cljs$core$IFn$_invoke$arity$1(options__9796__auto___11565);
var with__9801__auto___11571__$1 = (((with__9801__auto___11570 == null))?cljs.core.PersistentVector.EMPTY:with__9801__auto___11570);
var invocations_str__9802__auto___11572 = ((function (seq__10634_11559,chunk__10635_11560,count__10636_11561,i__10637_11562,seq__10633_11495,chunk__10638_11496,count__10639_11497,i__10640_11498,seq__10632,chunk__10645,count__10646,i__10647,name__9795__auto___11564,options__9796__auto___11565,invocations__9797__auto___11566,times__9798__auto___11567,times_QMARK___9799__auto___11568,check_params_QMARK___9800__auto___11569,with__9801__auto___11570,with__9801__auto___11571__$1,n_11563,mode_11558,seq__10633_11552__$1,temp__5804__auto___11551__$1,ai,seq__10632__$1,temp__5804__auto__,take_turn_orig_val__10628,defer_orig_val__10629,take_turn_temp_val__10630,defer_temp_val__10631,_STAR_parent_description_STAR__orig_val__10510_11204,_STAR_parent_description_STAR__temp_val__10511_11205,description__9411__auto____$1,_STAR_parent_description_STAR__orig_val__9962_10661,_STAR_parent_description_STAR__temp_val__9963_10662,description__9411__auto___10660){
return (function (p1__9792__9803__auto__){
if(cljs.core._EQ_.call(null,(1),p1__9792__9803__auto__)){
return "invocation";
} else {
return "invocations";
}
});})(seq__10634_11559,chunk__10635_11560,count__10636_11561,i__10637_11562,seq__10633_11495,chunk__10638_11496,count__10639_11497,i__10640_11498,seq__10632,chunk__10645,count__10646,i__10647,name__9795__auto___11564,options__9796__auto___11565,invocations__9797__auto___11566,times__9798__auto___11567,times_QMARK___9799__auto___11568,check_params_QMARK___9800__auto___11569,with__9801__auto___11570,with__9801__auto___11571__$1,n_11563,mode_11558,seq__10633_11552__$1,temp__5804__auto___11551__$1,ai,seq__10632__$1,temp__5804__auto__,take_turn_orig_val__10628,defer_orig_val__10629,take_turn_temp_val__10630,defer_temp_val__10631,_STAR_parent_description_STAR__orig_val__10510_11204,_STAR_parent_description_STAR__temp_val__10511_11205,description__9411__auto____$1,_STAR_parent_description_STAR__orig_val__9962_10661,_STAR_parent_description_STAR__temp_val__9963_10662,description__9411__auto___10660))
;
if(((times_QMARK___9799__auto___11568) && (check_params_QMARK___9800__auto___11569))){
var matching_invocations__9804__auto___11573 = cljs.core.filter.call(null,((function (seq__10634_11559,chunk__10635_11560,count__10636_11561,i__10637_11562,seq__10633_11495,chunk__10638_11496,count__10639_11497,i__10640_11498,seq__10632,chunk__10645,count__10646,i__10647,name__9795__auto___11564,options__9796__auto___11565,invocations__9797__auto___11566,times__9798__auto___11567,times_QMARK___9799__auto___11568,check_params_QMARK___9800__auto___11569,with__9801__auto___11570,with__9801__auto___11571__$1,invocations_str__9802__auto___11572,n_11563,mode_11558,seq__10633_11552__$1,temp__5804__auto___11551__$1,ai,seq__10632__$1,temp__5804__auto__,take_turn_orig_val__10628,defer_orig_val__10629,take_turn_temp_val__10630,defer_temp_val__10631,_STAR_parent_description_STAR__orig_val__10510_11204,_STAR_parent_description_STAR__temp_val__10511_11205,description__9411__auto____$1,_STAR_parent_description_STAR__orig_val__9962_10661,_STAR_parent_description_STAR__temp_val__9963_10662,description__9411__auto___10660){
return (function (p1__9793__9805__auto__){
return speclj.stub.params_match_QMARK_.call(null,with__9801__auto___11571__$1,p1__9793__9805__auto__);
});})(seq__10634_11559,chunk__10635_11560,count__10636_11561,i__10637_11562,seq__10633_11495,chunk__10638_11496,count__10639_11497,i__10640_11498,seq__10632,chunk__10645,count__10646,i__10647,name__9795__auto___11564,options__9796__auto___11565,invocations__9797__auto___11566,times__9798__auto___11567,times_QMARK___9799__auto___11568,check_params_QMARK___9800__auto___11569,with__9801__auto___11570,with__9801__auto___11571__$1,invocations_str__9802__auto___11572,n_11563,mode_11558,seq__10633_11552__$1,temp__5804__auto___11551__$1,ai,seq__10632__$1,temp__5804__auto__,take_turn_orig_val__10628,defer_orig_val__10629,take_turn_temp_val__10630,defer_temp_val__10631,_STAR_parent_description_STAR__orig_val__10510_11204,_STAR_parent_description_STAR__temp_val__10511_11205,description__9411__auto____$1,_STAR_parent_description_STAR__orig_val__9962_10661,_STAR_parent_description_STAR__temp_val__9963_10662,description__9411__auto___10660))
,invocations__9797__auto___11566);
var matching_count__9806__auto___11574 = cljs.core.count.call(null,matching_invocations__9804__auto___11573);
if(cljs.core._EQ_.call(null,times__9798__auto___11567,matching_count__9806__auto___11574)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(times__9798__auto___11567)," ",invocations_str__9802__auto___11572.call(null,times__9798__auto___11567)," of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__9795__auto___11564)," with ",cljs.core.pr_str.call(null,with__9801__auto___11571__$1),speclj.platform.endl,"     got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(matching_count__9806__auto___11574)," ",invocations_str__9802__auto___11572.call(null,matching_count__9806__auto___11574)].join('')));
}
} else {
if(check_params_QMARK___9800__auto___11569){
if(cljs.core.truth_(cljs.core.some.call(null,((function (seq__10634_11559,chunk__10635_11560,count__10636_11561,i__10637_11562,seq__10633_11495,chunk__10638_11496,count__10639_11497,i__10640_11498,seq__10632,chunk__10645,count__10646,i__10647,name__9795__auto___11564,options__9796__auto___11565,invocations__9797__auto___11566,times__9798__auto___11567,times_QMARK___9799__auto___11568,check_params_QMARK___9800__auto___11569,with__9801__auto___11570,with__9801__auto___11571__$1,invocations_str__9802__auto___11572,n_11563,mode_11558,seq__10633_11552__$1,temp__5804__auto___11551__$1,ai,seq__10632__$1,temp__5804__auto__,take_turn_orig_val__10628,defer_orig_val__10629,take_turn_temp_val__10630,defer_temp_val__10631,_STAR_parent_description_STAR__orig_val__10510_11204,_STAR_parent_description_STAR__temp_val__10511_11205,description__9411__auto____$1,_STAR_parent_description_STAR__orig_val__9962_10661,_STAR_parent_description_STAR__temp_val__9963_10662,description__9411__auto___10660){
return (function (p1__9794__9807__auto__){
return speclj.stub.params_match_QMARK_.call(null,with__9801__auto___11571__$1,p1__9794__9807__auto__);
});})(seq__10634_11559,chunk__10635_11560,count__10636_11561,i__10637_11562,seq__10633_11495,chunk__10638_11496,count__10639_11497,i__10640_11498,seq__10632,chunk__10645,count__10646,i__10647,name__9795__auto___11564,options__9796__auto___11565,invocations__9797__auto___11566,times__9798__auto___11567,times_QMARK___9799__auto___11568,check_params_QMARK___9800__auto___11569,with__9801__auto___11570,with__9801__auto___11571__$1,invocations_str__9802__auto___11572,n_11563,mode_11558,seq__10633_11552__$1,temp__5804__auto___11551__$1,ai,seq__10632__$1,temp__5804__auto__,take_turn_orig_val__10628,defer_orig_val__10629,take_turn_temp_val__10630,defer_temp_val__10631,_STAR_parent_description_STAR__orig_val__10510_11204,_STAR_parent_description_STAR__temp_val__10511_11205,description__9411__auto____$1,_STAR_parent_description_STAR__orig_val__9962_10661,_STAR_parent_description_STAR__temp_val__9963_10662,description__9411__auto___10660))
,invocations__9797__auto___11566))){
} else {
throw (new speclj.platform.SpecFailure(["Expected: invocation of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__9795__auto___11564)," with ",cljs.core.pr_str.call(null,with__9801__auto___11571__$1),speclj.platform.endl,"     got: ",cljs.core.pr_str.call(null,invocations__9797__auto___11566)].join('')));
}
} else {
if(times_QMARK___9799__auto___11568){
if(cljs.core._EQ_.call(null,times__9798__auto___11567,cljs.core.count.call(null,invocations__9797__auto___11566))){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(times__9798__auto___11567)," ",invocations_str__9802__auto___11572.call(null,times__9798__auto___11567)," of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__9795__auto___11564),speclj.platform.endl,"     got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,invocations__9797__auto___11566))].join('')));
}
} else {
if(cljs.core.seq.call(null,invocations__9797__auto___11566)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: an invocation of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__9795__auto___11564),speclj.platform.endl,"     got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,invocations__9797__auto___11566))].join('')));
}

}
}
}

var expected__9548__auto___11575 = ((cljs.core._EQ_.call(null,(2),mode_11558))?new cljs.core.Keyword(null,"x","x",2099068185):new cljs.core.Keyword(null,"o","o",-1350007228));
var actual__9549__auto___11576 = new cljs.core.Keyword(null,"player","player",-97687400).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.screens.play_spec.state));
if(cljs.core._EQ_.call(null,expected__9548__auto___11575,actual__9549__auto___11576)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__9548__auto___11575;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9516__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9516__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__9549__auto___11576;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9516__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9516__auto__);
}
})()," (using =)"].join('')));
}

cljs.core.reset_BANG_.call(null,tic_tac_toe.screens.play_spec.state,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"board","board",-1907017633),tic_tac_toe.screens.play_spec.board_4,new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"current-screen","current-screen",-1454713691),new cljs.core.Keyword(null,"play","play",-580418022)], null));


var G__11577 = seq__10634_11559;
var G__11578 = chunk__10635_11560;
var G__11579 = count__10636_11561;
var G__11580 = (i__10637_11562 + (1));
seq__10634_11559 = G__11577;
chunk__10635_11560 = G__11578;
count__10636_11561 = G__11579;
i__10637_11562 = G__11580;
continue;
} else {
var temp__5804__auto___11581__$2 = cljs.core.seq.call(null,seq__10634_11559);
if(temp__5804__auto___11581__$2){
var seq__10634_11582__$1 = temp__5804__auto___11581__$2;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10634_11582__$1)){
var c__5525__auto___11583 = cljs.core.chunk_first.call(null,seq__10634_11582__$1);
var G__11584 = cljs.core.chunk_rest.call(null,seq__10634_11582__$1);
var G__11585 = c__5525__auto___11583;
var G__11586 = cljs.core.count.call(null,c__5525__auto___11583);
var G__11587 = (0);
seq__10634_11559 = G__11584;
chunk__10635_11560 = G__11585;
count__10636_11561 = G__11586;
i__10637_11562 = G__11587;
continue;
} else {
var n_11588 = cljs.core.first.call(null,seq__10634_11582__$1);
cljs.core.swap_BANG_.call(null,tic_tac_toe.screens.play_spec.state,cljs.core.assoc,new cljs.core.Keyword(null,"mode","mode",654403691),mode_11558,new cljs.core.Keyword(null,"first-ai-level","first-ai-level",1004633644),ai,new cljs.core.Keyword(null,"player","player",-97687400),((cljs.core._EQ_.call(null,(2),mode_11558))?new cljs.core.Keyword(null,"x","x",2099068185):new cljs.core.Keyword(null,"o","o",-1350007228)),new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"gui","gui",604532813));

c3kit.wire.spec_helper.render.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tic_tac_toe.render_screen.render_screen,tic_tac_toe.screens.play_spec.state], null));

c3kit.wire.spec_helper.click_BANG_.call(null,["#index-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n_11588)].join(''));

var name__9795__auto___11589 = new cljs.core.Keyword(null,"turn","turn",75759344);
var options__9796__auto___11590 = cljs.core.PersistentArrayMap.EMPTY;
var invocations__9797__auto___11591 = speclj.stub.invocations_of.call(null,name__9795__auto___11589);
var times__9798__auto___11592 = new cljs.core.Keyword(null,"times","times",1671571467).cljs$core$IFn$_invoke$arity$1(options__9796__auto___11590);
var times_QMARK___9799__auto___11593 = typeof times__9798__auto___11592 === 'number';
var check_params_QMARK___9800__auto___11594 = cljs.core.contains_QMARK_.call(null,options__9796__auto___11590,new cljs.core.Keyword(null,"with","with",-1536296876));
var with__9801__auto___11595 = new cljs.core.Keyword(null,"with","with",-1536296876).cljs$core$IFn$_invoke$arity$1(options__9796__auto___11590);
var with__9801__auto___11596__$1 = (((with__9801__auto___11595 == null))?cljs.core.PersistentVector.EMPTY:with__9801__auto___11595);
var invocations_str__9802__auto___11597 = ((function (seq__10634_11559,chunk__10635_11560,count__10636_11561,i__10637_11562,seq__10633_11495,chunk__10638_11496,count__10639_11497,i__10640_11498,seq__10632,chunk__10645,count__10646,i__10647,name__9795__auto___11589,options__9796__auto___11590,invocations__9797__auto___11591,times__9798__auto___11592,times_QMARK___9799__auto___11593,check_params_QMARK___9800__auto___11594,with__9801__auto___11595,with__9801__auto___11596__$1,n_11588,seq__10634_11582__$1,temp__5804__auto___11581__$2,mode_11558,seq__10633_11552__$1,temp__5804__auto___11551__$1,ai,seq__10632__$1,temp__5804__auto__,take_turn_orig_val__10628,defer_orig_val__10629,take_turn_temp_val__10630,defer_temp_val__10631,_STAR_parent_description_STAR__orig_val__10510_11204,_STAR_parent_description_STAR__temp_val__10511_11205,description__9411__auto____$1,_STAR_parent_description_STAR__orig_val__9962_10661,_STAR_parent_description_STAR__temp_val__9963_10662,description__9411__auto___10660){
return (function (p1__9792__9803__auto__){
if(cljs.core._EQ_.call(null,(1),p1__9792__9803__auto__)){
return "invocation";
} else {
return "invocations";
}
});})(seq__10634_11559,chunk__10635_11560,count__10636_11561,i__10637_11562,seq__10633_11495,chunk__10638_11496,count__10639_11497,i__10640_11498,seq__10632,chunk__10645,count__10646,i__10647,name__9795__auto___11589,options__9796__auto___11590,invocations__9797__auto___11591,times__9798__auto___11592,times_QMARK___9799__auto___11593,check_params_QMARK___9800__auto___11594,with__9801__auto___11595,with__9801__auto___11596__$1,n_11588,seq__10634_11582__$1,temp__5804__auto___11581__$2,mode_11558,seq__10633_11552__$1,temp__5804__auto___11551__$1,ai,seq__10632__$1,temp__5804__auto__,take_turn_orig_val__10628,defer_orig_val__10629,take_turn_temp_val__10630,defer_temp_val__10631,_STAR_parent_description_STAR__orig_val__10510_11204,_STAR_parent_description_STAR__temp_val__10511_11205,description__9411__auto____$1,_STAR_parent_description_STAR__orig_val__9962_10661,_STAR_parent_description_STAR__temp_val__9963_10662,description__9411__auto___10660))
;
if(((times_QMARK___9799__auto___11593) && (check_params_QMARK___9800__auto___11594))){
var matching_invocations__9804__auto___11598 = cljs.core.filter.call(null,((function (seq__10634_11559,chunk__10635_11560,count__10636_11561,i__10637_11562,seq__10633_11495,chunk__10638_11496,count__10639_11497,i__10640_11498,seq__10632,chunk__10645,count__10646,i__10647,name__9795__auto___11589,options__9796__auto___11590,invocations__9797__auto___11591,times__9798__auto___11592,times_QMARK___9799__auto___11593,check_params_QMARK___9800__auto___11594,with__9801__auto___11595,with__9801__auto___11596__$1,invocations_str__9802__auto___11597,n_11588,seq__10634_11582__$1,temp__5804__auto___11581__$2,mode_11558,seq__10633_11552__$1,temp__5804__auto___11551__$1,ai,seq__10632__$1,temp__5804__auto__,take_turn_orig_val__10628,defer_orig_val__10629,take_turn_temp_val__10630,defer_temp_val__10631,_STAR_parent_description_STAR__orig_val__10510_11204,_STAR_parent_description_STAR__temp_val__10511_11205,description__9411__auto____$1,_STAR_parent_description_STAR__orig_val__9962_10661,_STAR_parent_description_STAR__temp_val__9963_10662,description__9411__auto___10660){
return (function (p1__9793__9805__auto__){
return speclj.stub.params_match_QMARK_.call(null,with__9801__auto___11596__$1,p1__9793__9805__auto__);
});})(seq__10634_11559,chunk__10635_11560,count__10636_11561,i__10637_11562,seq__10633_11495,chunk__10638_11496,count__10639_11497,i__10640_11498,seq__10632,chunk__10645,count__10646,i__10647,name__9795__auto___11589,options__9796__auto___11590,invocations__9797__auto___11591,times__9798__auto___11592,times_QMARK___9799__auto___11593,check_params_QMARK___9800__auto___11594,with__9801__auto___11595,with__9801__auto___11596__$1,invocations_str__9802__auto___11597,n_11588,seq__10634_11582__$1,temp__5804__auto___11581__$2,mode_11558,seq__10633_11552__$1,temp__5804__auto___11551__$1,ai,seq__10632__$1,temp__5804__auto__,take_turn_orig_val__10628,defer_orig_val__10629,take_turn_temp_val__10630,defer_temp_val__10631,_STAR_parent_description_STAR__orig_val__10510_11204,_STAR_parent_description_STAR__temp_val__10511_11205,description__9411__auto____$1,_STAR_parent_description_STAR__orig_val__9962_10661,_STAR_parent_description_STAR__temp_val__9963_10662,description__9411__auto___10660))
,invocations__9797__auto___11591);
var matching_count__9806__auto___11599 = cljs.core.count.call(null,matching_invocations__9804__auto___11598);
if(cljs.core._EQ_.call(null,times__9798__auto___11592,matching_count__9806__auto___11599)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(times__9798__auto___11592)," ",invocations_str__9802__auto___11597.call(null,times__9798__auto___11592)," of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__9795__auto___11589)," with ",cljs.core.pr_str.call(null,with__9801__auto___11596__$1),speclj.platform.endl,"     got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(matching_count__9806__auto___11599)," ",invocations_str__9802__auto___11597.call(null,matching_count__9806__auto___11599)].join('')));
}
} else {
if(check_params_QMARK___9800__auto___11594){
if(cljs.core.truth_(cljs.core.some.call(null,((function (seq__10634_11559,chunk__10635_11560,count__10636_11561,i__10637_11562,seq__10633_11495,chunk__10638_11496,count__10639_11497,i__10640_11498,seq__10632,chunk__10645,count__10646,i__10647,name__9795__auto___11589,options__9796__auto___11590,invocations__9797__auto___11591,times__9798__auto___11592,times_QMARK___9799__auto___11593,check_params_QMARK___9800__auto___11594,with__9801__auto___11595,with__9801__auto___11596__$1,invocations_str__9802__auto___11597,n_11588,seq__10634_11582__$1,temp__5804__auto___11581__$2,mode_11558,seq__10633_11552__$1,temp__5804__auto___11551__$1,ai,seq__10632__$1,temp__5804__auto__,take_turn_orig_val__10628,defer_orig_val__10629,take_turn_temp_val__10630,defer_temp_val__10631,_STAR_parent_description_STAR__orig_val__10510_11204,_STAR_parent_description_STAR__temp_val__10511_11205,description__9411__auto____$1,_STAR_parent_description_STAR__orig_val__9962_10661,_STAR_parent_description_STAR__temp_val__9963_10662,description__9411__auto___10660){
return (function (p1__9794__9807__auto__){
return speclj.stub.params_match_QMARK_.call(null,with__9801__auto___11596__$1,p1__9794__9807__auto__);
});})(seq__10634_11559,chunk__10635_11560,count__10636_11561,i__10637_11562,seq__10633_11495,chunk__10638_11496,count__10639_11497,i__10640_11498,seq__10632,chunk__10645,count__10646,i__10647,name__9795__auto___11589,options__9796__auto___11590,invocations__9797__auto___11591,times__9798__auto___11592,times_QMARK___9799__auto___11593,check_params_QMARK___9800__auto___11594,with__9801__auto___11595,with__9801__auto___11596__$1,invocations_str__9802__auto___11597,n_11588,seq__10634_11582__$1,temp__5804__auto___11581__$2,mode_11558,seq__10633_11552__$1,temp__5804__auto___11551__$1,ai,seq__10632__$1,temp__5804__auto__,take_turn_orig_val__10628,defer_orig_val__10629,take_turn_temp_val__10630,defer_temp_val__10631,_STAR_parent_description_STAR__orig_val__10510_11204,_STAR_parent_description_STAR__temp_val__10511_11205,description__9411__auto____$1,_STAR_parent_description_STAR__orig_val__9962_10661,_STAR_parent_description_STAR__temp_val__9963_10662,description__9411__auto___10660))
,invocations__9797__auto___11591))){
} else {
throw (new speclj.platform.SpecFailure(["Expected: invocation of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__9795__auto___11589)," with ",cljs.core.pr_str.call(null,with__9801__auto___11596__$1),speclj.platform.endl,"     got: ",cljs.core.pr_str.call(null,invocations__9797__auto___11591)].join('')));
}
} else {
if(times_QMARK___9799__auto___11593){
if(cljs.core._EQ_.call(null,times__9798__auto___11592,cljs.core.count.call(null,invocations__9797__auto___11591))){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(times__9798__auto___11592)," ",invocations_str__9802__auto___11597.call(null,times__9798__auto___11592)," of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__9795__auto___11589),speclj.platform.endl,"     got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,invocations__9797__auto___11591))].join('')));
}
} else {
if(cljs.core.seq.call(null,invocations__9797__auto___11591)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: an invocation of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__9795__auto___11589),speclj.platform.endl,"     got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,invocations__9797__auto___11591))].join('')));
}

}
}
}

var expected__9548__auto___11600 = ((cljs.core._EQ_.call(null,(2),mode_11558))?new cljs.core.Keyword(null,"x","x",2099068185):new cljs.core.Keyword(null,"o","o",-1350007228));
var actual__9549__auto___11601 = new cljs.core.Keyword(null,"player","player",-97687400).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.screens.play_spec.state));
if(cljs.core._EQ_.call(null,expected__9548__auto___11600,actual__9549__auto___11601)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__9548__auto___11600;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9516__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9516__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__9549__auto___11601;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9516__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9516__auto__);
}
})()," (using =)"].join('')));
}

cljs.core.reset_BANG_.call(null,tic_tac_toe.screens.play_spec.state,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"board","board",-1907017633),tic_tac_toe.screens.play_spec.board_4,new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"current-screen","current-screen",-1454713691),new cljs.core.Keyword(null,"play","play",-580418022)], null));


var G__11602 = cljs.core.next.call(null,seq__10634_11582__$1);
var G__11603 = null;
var G__11604 = (0);
var G__11605 = (0);
seq__10634_11559 = G__11602;
chunk__10635_11560 = G__11603;
count__10636_11561 = G__11604;
i__10637_11562 = G__11605;
continue;
}
} else {
}
}
break;
}

var G__11606 = cljs.core.next.call(null,seq__10633_11552__$1);
var G__11607 = null;
var G__11608 = (0);
var G__11609 = (0);
seq__10633_11495 = G__11606;
chunk__10638_11496 = G__11607;
count__10639_11497 = G__11608;
i__10640_11498 = G__11609;
continue;
}
} else {
}
}
break;
}

var G__11610 = cljs.core.next.call(null,seq__10632__$1);
var G__11611 = null;
var G__11612 = (0);
var G__11613 = (0);
seq__10632 = G__11610;
chunk__10645 = G__11611;
count__10646 = G__11612;
i__10647 = G__11613;
continue;
}
} else {
return null;
}
}
break;
}
}finally {(tic_tac_toe.screens.play.defer = defer_orig_val__10629);

(tic_tac_toe.player.take_turn = take_turn_orig_val__10628);
}});})(_STAR_parent_description_STAR__orig_val__10510_11204,_STAR_parent_description_STAR__temp_val__10511_11205,description__9411__auto____$1,_STAR_parent_description_STAR__orig_val__9962_10661,_STAR_parent_description_STAR__temp_val__9963_10662,description__9411__auto___10660))
,false),speclj.components.new_characteristic.call(null,"AI is not triggered if game over",((function (_STAR_parent_description_STAR__orig_val__10510_11204,_STAR_parent_description_STAR__temp_val__10511_11205,description__9411__auto____$1,_STAR_parent_description_STAR__orig_val__9962_10661,_STAR_parent_description_STAR__temp_val__9963_10662,description__9411__auto___10660){
return (function (){
cljs.core.swap_BANG_.call(null,tic_tac_toe.screens.play_spec.state,cljs.core.assoc,new cljs.core.Keyword(null,"board","board",-1907017633),new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"x","x",2099068185),(3),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"o","o",-1350007228),new cljs.core.Keyword(null,"o","o",-1350007228),new cljs.core.Keyword(null,"o","o",-1350007228),(8),(9),(10),(11),(12),(13),(14),(15),(16)], null),new cljs.core.Keyword(null,"mode","mode",654403691),(2),new cljs.core.Keyword(null,"first-ai-level","first-ai-level",1004633644),(3));

c3kit.wire.spec_helper.click_BANG_.call(null,"#index-2");

var expected__9548__auto__ = new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"o","o",-1350007228),new cljs.core.Keyword(null,"o","o",-1350007228),new cljs.core.Keyword(null,"o","o",-1350007228),(8),(9),(10),(11),(12),(13),(14),(15),(16)], null);
var actual__9549__auto__ = new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.screens.play_spec.state));
if(cljs.core._EQ_.call(null,expected__9548__auto__,actual__9549__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__9548__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9516__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9516__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__9549__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9516__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9516__auto__);
}
})()," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__10510_11204,_STAR_parent_description_STAR__temp_val__10511_11205,description__9411__auto____$1,_STAR_parent_description_STAR__orig_val__9962_10661,_STAR_parent_description_STAR__temp_val__9963_10662,description__9411__auto___10660))
,false)],null)));
var chunk__10513_11207 = null;
var count__10514_11208 = (0);
var i__10515_11209 = (0);
while(true){
if((i__10515_11209 < count__10514_11208)){
var component__9412__auto___11614 = cljs.core._nth.call(null,chunk__10513_11207,i__10515_11209);
speclj.components.install.call(null,component__9412__auto___11614,description__9411__auto____$1);


var G__11615 = seq__10512_11206;
var G__11616 = chunk__10513_11207;
var G__11617 = count__10514_11208;
var G__11618 = (i__10515_11209 + (1));
seq__10512_11206 = G__11615;
chunk__10513_11207 = G__11616;
count__10514_11208 = G__11617;
i__10515_11209 = G__11618;
continue;
} else {
var temp__5804__auto___11619 = cljs.core.seq.call(null,seq__10512_11206);
if(temp__5804__auto___11619){
var seq__10512_11620__$1 = temp__5804__auto___11619;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10512_11620__$1)){
var c__5525__auto___11621 = cljs.core.chunk_first.call(null,seq__10512_11620__$1);
var G__11622 = cljs.core.chunk_rest.call(null,seq__10512_11620__$1);
var G__11623 = c__5525__auto___11621;
var G__11624 = cljs.core.count.call(null,c__5525__auto___11621);
var G__11625 = (0);
seq__10512_11206 = G__11622;
chunk__10513_11207 = G__11623;
count__10514_11208 = G__11624;
i__10515_11209 = G__11625;
continue;
} else {
var component__9412__auto___11626 = cljs.core.first.call(null,seq__10512_11620__$1);
speclj.components.install.call(null,component__9412__auto___11626,description__9411__auto____$1);


var G__11627 = cljs.core.next.call(null,seq__10512_11620__$1);
var G__11628 = null;
var G__11629 = (0);
var G__11630 = (0);
seq__10512_11206 = G__11627;
chunk__10513_11207 = G__11628;
count__10514_11208 = G__11629;
i__10515_11209 = G__11630;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__10510_11204);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__9411__auto____$1);
}

return description__9411__auto____$1;
})()],null)));
var chunk__9965_10664 = null;
var count__9966_10665 = (0);
var i__9967_10666 = (0);
while(true){
if((i__9967_10666 < count__9966_10665)){
var component__9412__auto___11631 = cljs.core._nth.call(null,chunk__9965_10664,i__9967_10666);
speclj.components.install.call(null,component__9412__auto___11631,description__9411__auto___10660);


var G__11632 = seq__9964_10663;
var G__11633 = chunk__9965_10664;
var G__11634 = count__9966_10665;
var G__11635 = (i__9967_10666 + (1));
seq__9964_10663 = G__11632;
chunk__9965_10664 = G__11633;
count__9966_10665 = G__11634;
i__9967_10666 = G__11635;
continue;
} else {
var temp__5804__auto___11636 = cljs.core.seq.call(null,seq__9964_10663);
if(temp__5804__auto___11636){
var seq__9964_11637__$1 = temp__5804__auto___11636;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9964_11637__$1)){
var c__5525__auto___11638 = cljs.core.chunk_first.call(null,seq__9964_11637__$1);
var G__11639 = cljs.core.chunk_rest.call(null,seq__9964_11637__$1);
var G__11640 = c__5525__auto___11638;
var G__11641 = cljs.core.count.call(null,c__5525__auto___11638);
var G__11642 = (0);
seq__9964_10663 = G__11639;
chunk__9965_10664 = G__11640;
count__9966_10665 = G__11641;
i__9967_10666 = G__11642;
continue;
} else {
var component__9412__auto___11643 = cljs.core.first.call(null,seq__9964_11637__$1);
speclj.components.install.call(null,component__9412__auto___11643,description__9411__auto___10660);


var G__11644 = cljs.core.next.call(null,seq__9964_11637__$1);
var G__11645 = null;
var G__11646 = (0);
var G__11647 = (0);
seq__9964_10663 = G__11644;
chunk__9965_10664 = G__11645;
count__9966_10665 = G__11646;
i__9967_10666 = G__11647;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__9962_10661);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__9411__auto___10660);
}


//# sourceMappingURL=play_spec.js.map
