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
var description__9652__auto___11063 = speclj.components.new_description.call(null,"play screen",false,"tic-tac-toe.screens.play-spec");
var _STAR_parent_description_STAR__orig_val__10229_11064 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__10230_11065 = description__9652__auto___11063;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__10230_11065);

try{var seq__10231_11066 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,6,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_around.call(null,((function (_STAR_parent_description_STAR__orig_val__10229_11064,_STAR_parent_description_STAR__temp_val__10230_11065,description__9652__auto___11063){
return (function (it__10022__auto__){
var _STAR_stubbed_invocations_STAR__orig_val__10729 = speclj.stub._STAR_stubbed_invocations_STAR_;
var _STAR_stubbed_invocations_STAR__temp_val__10730 = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
(speclj.stub._STAR_stubbed_invocations_STAR_ = _STAR_stubbed_invocations_STAR__temp_val__10730);

try{return it__10022__auto__.call(null);
}finally {(speclj.stub._STAR_stubbed_invocations_STAR_ = _STAR_stubbed_invocations_STAR__orig_val__10729);
}});})(_STAR_parent_description_STAR__orig_val__10229_11064,_STAR_parent_description_STAR__temp_val__10230_11065,description__9652__auto___11063))
),c3kit.wire.spec_helper.with_root_dom.call(null),(function (){var description__9652__auto____$1 = speclj.components.new_description.call(null,"restart",false,"tic-tac-toe.screens.play-spec");
var _STAR_parent_description_STAR__orig_val__10731_11070 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__10732_11071 = description__9652__auto____$1;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__10732_11071);

try{var seq__10733_11072 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_characteristic.call(null,"displays restart button at end of game",((function (_STAR_parent_description_STAR__orig_val__10731_11070,_STAR_parent_description_STAR__temp_val__10732_11071,description__9652__auto____$1,_STAR_parent_description_STAR__orig_val__10229_11064,_STAR_parent_description_STAR__temp_val__10230_11065,description__9652__auto___11063){
return (function (){
cljs.core.swap_BANG_.call(null,tic_tac_toe.screens.play_spec.state,cljs.core.assoc,new cljs.core.Keyword(null,"game-state","game-state",935682735),"X wins!");

c3kit.wire.spec_helper.render.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tic_tac_toe.render_screen.render_screen,tic_tac_toe.screens.play_spec.state], null));

var value__10152__auto___11076 = "#restart";
var node__10153__auto___11077 = c3kit.wire.spec_helper.select.call(null,value__10152__auto___11076);
if(cljs.core.truth_(node__10153__auto___11077)){
} else {
throw (new speclj.platform.SpecFailure(["Expected selector to find node: ",(function (){var temp__5806__auto__ = value__10152__auto___11076;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9757__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9757__auto__);
}
})()].join('')));
}

var expected__9789__auto__ = "Restart";
var actual__9790__auto__ = c3kit.wire.spec_helper.text.call(null,"#restart");
if(cljs.core._EQ_.call(null,expected__9789__auto__,actual__9790__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__9789__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9757__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9757__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__9790__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9757__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9757__auto__);
}
})()," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__10731_11070,_STAR_parent_description_STAR__temp_val__10732_11071,description__9652__auto____$1,_STAR_parent_description_STAR__orig_val__10229_11064,_STAR_parent_description_STAR__temp_val__10230_11065,description__9652__auto___11063))
,false),speclj.components.new_characteristic.call(null,"resets game state",((function (_STAR_parent_description_STAR__orig_val__10731_11070,_STAR_parent_description_STAR__temp_val__10732_11071,description__9652__auto____$1,_STAR_parent_description_STAR__orig_val__10229_11064,_STAR_parent_description_STAR__temp_val__10230_11065,description__9652__auto___11063){
return (function (){
cljs.core.swap_BANG_.call(null,tic_tac_toe.screens.play_spec.state,cljs.core.assoc,new cljs.core.Keyword(null,"game-state","game-state",935682735),"X wins!");

c3kit.wire.spec_helper.render.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tic_tac_toe.render_screen.render_screen,tic_tac_toe.screens.play_spec.state], null));

c3kit.wire.spec_helper.click_BANG_.call(null,"#restart");

var expected__9789__auto__ = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"current-screen","current-screen",-1454713691),new cljs.core.Keyword(null,"second-ai-level","second-ai-level",-418730455),new cljs.core.Keyword(null,"mode","mode",654403691),new cljs.core.Keyword(null,"first-ai-level","first-ai-level",1004633644),new cljs.core.Keyword(null,"game-state","game-state",935682735),new cljs.core.Keyword(null,"human?","human?",-2017219054),new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"board","board",-1907017633)],[new cljs.core.Keyword(null,"mode-selection","mode-selection",986239762),null,null,null,new cljs.core.Keyword(null,"in-progress","in-progress",2126442630),true,new cljs.core.Keyword(null,"gui","gui",604532813),new cljs.core.Keyword(null,"x","x",2099068185),null]);
var actual__9790__auto__ = cljs.core.deref.call(null,tic_tac_toe.screens.play_spec.state);
if(cljs.core._EQ_.call(null,expected__9789__auto__,actual__9790__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__9789__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9757__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9757__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__9790__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9757__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9757__auto__);
}
})()," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__10731_11070,_STAR_parent_description_STAR__temp_val__10732_11071,description__9652__auto____$1,_STAR_parent_description_STAR__orig_val__10229_11064,_STAR_parent_description_STAR__temp_val__10230_11065,description__9652__auto___11063))
,false),speclj.components.new_characteristic.call(null,"doesn't display restart button if game is in progress",((function (_STAR_parent_description_STAR__orig_val__10731_11070,_STAR_parent_description_STAR__temp_val__10732_11071,description__9652__auto____$1,_STAR_parent_description_STAR__orig_val__10229_11064,_STAR_parent_description_STAR__temp_val__10230_11065,description__9652__auto___11063){
return (function (){
cljs.core.swap_BANG_.call(null,tic_tac_toe.screens.play_spec.state,cljs.core.assoc,new cljs.core.Keyword(null,"game-state","game-state",935682735),new cljs.core.Keyword(null,"in-progress","in-progress",2126442630));

c3kit.wire.spec_helper.render.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tic_tac_toe.render_screen.render_screen,tic_tac_toe.screens.play_spec.state], null));

var value__10161__auto__ = "#restart";
var node__10162__auto__ = c3kit.wire.spec_helper.select.call(null,value__10161__auto__);
if(cljs.core.truth_(node__10162__auto__)){
throw (new speclj.platform.SpecFailure(["Expected selector NOT to find node: ",(function (){var temp__5806__auto__ = value__10161__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9757__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9757__auto__);
}
})()].join('')));
} else {
return null;
}
});})(_STAR_parent_description_STAR__orig_val__10731_11070,_STAR_parent_description_STAR__temp_val__10732_11071,description__9652__auto____$1,_STAR_parent_description_STAR__orig_val__10229_11064,_STAR_parent_description_STAR__temp_val__10230_11065,description__9652__auto___11063))
,false)],null)));
var chunk__10734_11073 = null;
var count__10735_11074 = (0);
var i__10736_11075 = (0);
while(true){
if((i__10736_11075 < count__10735_11074)){
var component__9653__auto___11078 = cljs.core._nth.call(null,chunk__10734_11073,i__10736_11075);
speclj.components.install.call(null,component__9653__auto___11078,description__9652__auto____$1);


var G__11079 = seq__10733_11072;
var G__11080 = chunk__10734_11073;
var G__11081 = count__10735_11074;
var G__11082 = (i__10736_11075 + (1));
seq__10733_11072 = G__11079;
chunk__10734_11073 = G__11080;
count__10735_11074 = G__11081;
i__10736_11075 = G__11082;
continue;
} else {
var temp__5804__auto___11083 = cljs.core.seq.call(null,seq__10733_11072);
if(temp__5804__auto___11083){
var seq__10733_11084__$1 = temp__5804__auto___11083;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10733_11084__$1)){
var c__5525__auto___11085 = cljs.core.chunk_first.call(null,seq__10733_11084__$1);
var G__11086 = cljs.core.chunk_rest.call(null,seq__10733_11084__$1);
var G__11087 = c__5525__auto___11085;
var G__11088 = cljs.core.count.call(null,c__5525__auto___11085);
var G__11089 = (0);
seq__10733_11072 = G__11086;
chunk__10734_11073 = G__11087;
count__10735_11074 = G__11088;
i__10736_11075 = G__11089;
continue;
} else {
var component__9653__auto___11090 = cljs.core.first.call(null,seq__10733_11084__$1);
speclj.components.install.call(null,component__9653__auto___11090,description__9652__auto____$1);


var G__11091 = cljs.core.next.call(null,seq__10733_11084__$1);
var G__11092 = null;
var G__11093 = (0);
var G__11094 = (0);
seq__10733_11072 = G__11091;
chunk__10734_11073 = G__11092;
count__10735_11074 = G__11093;
i__10736_11075 = G__11094;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__10731_11070);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__9652__auto____$1);
}

return description__9652__auto____$1;
})(),(function (){var description__9652__auto____$1 = speclj.components.new_description.call(null,"play heading",false,"tic-tac-toe.screens.play-spec");
var _STAR_parent_description_STAR__orig_val__10737_11095 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__10738_11096 = description__9652__auto____$1;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__10738_11096);

try{var seq__10739_11097 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,4,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_before.call(null,((function (_STAR_parent_description_STAR__orig_val__10737_11095,_STAR_parent_description_STAR__temp_val__10738_11096,description__9652__auto____$1,_STAR_parent_description_STAR__orig_val__10229_11064,_STAR_parent_description_STAR__temp_val__10230_11065,description__9652__auto___11063){
return (function (){
return cljs.core.reset_BANG_.call(null,tic_tac_toe.screens.play_spec.state,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"current-screen","current-screen",-1454713691),new cljs.core.Keyword(null,"play","play",-580418022),new cljs.core.Keyword(null,"board","board",-1907017633),tic_tac_toe.screens.play_spec.board_3,new cljs.core.Keyword(null,"game-state","game-state",935682735),new cljs.core.Keyword(null,"in-progress","in-progress",2126442630),new cljs.core.Keyword(null,"human?","human?",-2017219054),true], null));
});})(_STAR_parent_description_STAR__orig_val__10737_11095,_STAR_parent_description_STAR__temp_val__10738_11096,description__9652__auto____$1,_STAR_parent_description_STAR__orig_val__10229_11064,_STAR_parent_description_STAR__temp_val__10230_11065,description__9652__auto___11063))
),speclj.components.new_characteristic.call(null,"prompts player x for move",((function (_STAR_parent_description_STAR__orig_val__10737_11095,_STAR_parent_description_STAR__temp_val__10738_11096,description__9652__auto____$1,_STAR_parent_description_STAR__orig_val__10229_11064,_STAR_parent_description_STAR__temp_val__10230_11065,description__9652__auto___11063){
return (function (){
cljs.core.swap_BANG_.call(null,tic_tac_toe.screens.play_spec.state,cljs.core.assoc,new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"x","x",2099068185));

c3kit.wire.spec_helper.render.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tic_tac_toe.render_screen.render_screen,tic_tac_toe.screens.play_spec.state], null));

var expected__9789__auto__ = "X's turn!";
var actual__9790__auto__ = c3kit.wire.spec_helper.text.call(null,"#play-heading");
if(cljs.core._EQ_.call(null,expected__9789__auto__,actual__9790__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__9789__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9757__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9757__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__9790__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9757__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9757__auto__);
}
})()," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__10737_11095,_STAR_parent_description_STAR__temp_val__10738_11096,description__9652__auto____$1,_STAR_parent_description_STAR__orig_val__10229_11064,_STAR_parent_description_STAR__temp_val__10230_11065,description__9652__auto___11063))
,false),speclj.components.new_characteristic.call(null,"prompts player o for move",((function (_STAR_parent_description_STAR__orig_val__10737_11095,_STAR_parent_description_STAR__temp_val__10738_11096,description__9652__auto____$1,_STAR_parent_description_STAR__orig_val__10229_11064,_STAR_parent_description_STAR__temp_val__10230_11065,description__9652__auto___11063){
return (function (){
cljs.core.swap_BANG_.call(null,tic_tac_toe.screens.play_spec.state,cljs.core.assoc,new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"o","o",-1350007228));

c3kit.wire.spec_helper.render.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tic_tac_toe.render_screen.render_screen,tic_tac_toe.screens.play_spec.state], null));

var expected__9789__auto__ = "O's turn!";
var actual__9790__auto__ = c3kit.wire.spec_helper.text.call(null,"#play-heading");
if(cljs.core._EQ_.call(null,expected__9789__auto__,actual__9790__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__9789__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9757__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9757__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__9790__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9757__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9757__auto__);
}
})()," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__10737_11095,_STAR_parent_description_STAR__temp_val__10738_11096,description__9652__auto____$1,_STAR_parent_description_STAR__orig_val__10229_11064,_STAR_parent_description_STAR__temp_val__10230_11065,description__9652__auto___11063))
,false),speclj.components.new_characteristic.call(null,"displays game state if game over",((function (_STAR_parent_description_STAR__orig_val__10737_11095,_STAR_parent_description_STAR__temp_val__10738_11096,description__9652__auto____$1,_STAR_parent_description_STAR__orig_val__10229_11064,_STAR_parent_description_STAR__temp_val__10230_11065,description__9652__auto___11063){
return (function (){
cljs.core.swap_BANG_.call(null,tic_tac_toe.screens.play_spec.state,cljs.core.assoc,new cljs.core.Keyword(null,"game-state","game-state",935682735),"X wins!");

c3kit.wire.spec_helper.render.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tic_tac_toe.render_screen.render_screen,tic_tac_toe.screens.play_spec.state], null));

var expected__9789__auto__ = "X wins!";
var actual__9790__auto__ = c3kit.wire.spec_helper.text.call(null,"#play-heading");
if(cljs.core._EQ_.call(null,expected__9789__auto__,actual__9790__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__9789__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9757__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9757__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__9790__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9757__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9757__auto__);
}
})()," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__10737_11095,_STAR_parent_description_STAR__temp_val__10738_11096,description__9652__auto____$1,_STAR_parent_description_STAR__orig_val__10229_11064,_STAR_parent_description_STAR__temp_val__10230_11065,description__9652__auto___11063))
,false)],null)));
var chunk__10740_11098 = null;
var count__10741_11099 = (0);
var i__10742_11100 = (0);
while(true){
if((i__10742_11100 < count__10741_11099)){
var component__9653__auto___11101 = cljs.core._nth.call(null,chunk__10740_11098,i__10742_11100);
speclj.components.install.call(null,component__9653__auto___11101,description__9652__auto____$1);


var G__11102 = seq__10739_11097;
var G__11103 = chunk__10740_11098;
var G__11104 = count__10741_11099;
var G__11105 = (i__10742_11100 + (1));
seq__10739_11097 = G__11102;
chunk__10740_11098 = G__11103;
count__10741_11099 = G__11104;
i__10742_11100 = G__11105;
continue;
} else {
var temp__5804__auto___11106 = cljs.core.seq.call(null,seq__10739_11097);
if(temp__5804__auto___11106){
var seq__10739_11107__$1 = temp__5804__auto___11106;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10739_11107__$1)){
var c__5525__auto___11108 = cljs.core.chunk_first.call(null,seq__10739_11107__$1);
var G__11109 = cljs.core.chunk_rest.call(null,seq__10739_11107__$1);
var G__11110 = c__5525__auto___11108;
var G__11111 = cljs.core.count.call(null,c__5525__auto___11108);
var G__11112 = (0);
seq__10739_11097 = G__11109;
chunk__10740_11098 = G__11110;
count__10741_11099 = G__11111;
i__10742_11100 = G__11112;
continue;
} else {
var component__9653__auto___11113 = cljs.core.first.call(null,seq__10739_11107__$1);
speclj.components.install.call(null,component__9653__auto___11113,description__9652__auto____$1);


var G__11114 = cljs.core.next.call(null,seq__10739_11107__$1);
var G__11115 = null;
var G__11116 = (0);
var G__11117 = (0);
seq__10739_11097 = G__11114;
chunk__10740_11098 = G__11115;
count__10741_11099 = G__11116;
i__10742_11100 = G__11117;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__10737_11095);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__9652__auto____$1);
}

return description__9652__auto____$1;
})(),(function (){var description__9652__auto____$1 = speclj.components.new_description.call(null,"3x3",false,"tic-tac-toe.screens.play-spec");
var _STAR_parent_description_STAR__orig_val__10743_11118 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__10744_11119 = description__9652__auto____$1;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__10744_11119);

try{var seq__10745_11120 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,15,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_before.call(null,((function (_STAR_parent_description_STAR__orig_val__10743_11118,_STAR_parent_description_STAR__temp_val__10744_11119,description__9652__auto____$1,_STAR_parent_description_STAR__orig_val__10229_11064,_STAR_parent_description_STAR__temp_val__10230_11065,description__9652__auto___11063){
return (function (){
cljs.core.reset_BANG_.call(null,tic_tac_toe.screens.play_spec.state,new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"current-screen","current-screen",-1454713691),new cljs.core.Keyword(null,"play","play",-580418022),new cljs.core.Keyword(null,"board","board",-1907017633),tic_tac_toe.screens.play_spec.board_3,new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"mode","mode",654403691),(1),new cljs.core.Keyword(null,"game-state","game-state",935682735),new cljs.core.Keyword(null,"in-progress","in-progress",2126442630),new cljs.core.Keyword(null,"human?","human?",-2017219054),true,new cljs.core.Keyword(null,"first-ai-level","first-ai-level",1004633644),(1),new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"gui","gui",604532813)], null));

return c3kit.wire.spec_helper.render.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tic_tac_toe.render_screen.render_screen,tic_tac_toe.screens.play_spec.state], null));
});})(_STAR_parent_description_STAR__orig_val__10743_11118,_STAR_parent_description_STAR__temp_val__10744_11119,description__9652__auto____$1,_STAR_parent_description_STAR__orig_val__10229_11064,_STAR_parent_description_STAR__temp_val__10230_11065,description__9652__auto___11063))
),speclj.components.new_characteristic.call(null,"renders board",((function (_STAR_parent_description_STAR__orig_val__10743_11118,_STAR_parent_description_STAR__temp_val__10744_11119,description__9652__auto____$1,_STAR_parent_description_STAR__orig_val__10229_11064,_STAR_parent_description_STAR__temp_val__10230_11065,description__9652__auto___11063){
return (function (){
var expected__9789__auto___11124 = (9);
var actual__9790__auto___11125 = cljs.core.count.call(null,cljs.core.vec.call(null,c3kit.wire.js.query_selector_all.call(null,".board-square")));
if(cljs.core._EQ_.call(null,expected__9789__auto___11124,actual__9790__auto___11125)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__9789__auto___11124;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9757__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9757__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__9790__auto___11125;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9757__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9757__auto__);
}
})()," (using =)"].join('')));
}

var value__10152__auto___11126 = "#board-wrapper";
var node__10153__auto___11127 = c3kit.wire.spec_helper.select.call(null,value__10152__auto___11126);
if(cljs.core.truth_(node__10153__auto___11127)){
} else {
throw (new speclj.platform.SpecFailure(["Expected selector to find node: ",(function (){var temp__5806__auto__ = value__10152__auto___11126;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9757__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9757__auto__);
}
})()].join('')));
}

var value__10152__auto__ = ".three-grid";
var node__10153__auto__ = c3kit.wire.spec_helper.select.call(null,value__10152__auto__);
if(cljs.core.truth_(node__10153__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected selector to find node: ",(function (){var temp__5806__auto__ = value__10152__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9757__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9757__auto__);
}
})()].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__10743_11118,_STAR_parent_description_STAR__temp_val__10744_11119,description__9652__auto____$1,_STAR_parent_description_STAR__orig_val__10229_11064,_STAR_parent_description_STAR__temp_val__10230_11065,description__9652__auto___11063))
,false),speclj.components.new_characteristic.call(null,"buttons have IDs 0-8",((function (_STAR_parent_description_STAR__orig_val__10743_11118,_STAR_parent_description_STAR__temp_val__10744_11119,description__9652__auto____$1,_STAR_parent_description_STAR__orig_val__10229_11064,_STAR_parent_description_STAR__temp_val__10230_11065,description__9652__auto___11063){
return (function (){
var seq__10833 = cljs.core.seq.call(null,cljs.core.range.call(null,(9)));
var chunk__10834 = null;
var count__10835 = (0);
var i__10836 = (0);
while(true){
if((i__10836 < count__10835)){
var n = cljs.core._nth.call(null,chunk__10834,i__10836);
var value__10152__auto___11128 = ["#index-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join('');
var node__10153__auto___11129 = c3kit.wire.spec_helper.select.call(null,value__10152__auto___11128);
if(cljs.core.truth_(node__10153__auto___11129)){
} else {
throw (new speclj.platform.SpecFailure(["Expected selector to find node: ",(function (){var temp__5806__auto__ = value__10152__auto___11128;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9757__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9757__auto__);
}
})()].join('')));
}


var G__11130 = seq__10833;
var G__11131 = chunk__10834;
var G__11132 = count__10835;
var G__11133 = (i__10836 + (1));
seq__10833 = G__11130;
chunk__10834 = G__11131;
count__10835 = G__11132;
i__10836 = G__11133;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__10833);
if(temp__5804__auto__){
var seq__10833__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10833__$1)){
var c__5525__auto__ = cljs.core.chunk_first.call(null,seq__10833__$1);
var G__11134 = cljs.core.chunk_rest.call(null,seq__10833__$1);
var G__11135 = c__5525__auto__;
var G__11136 = cljs.core.count.call(null,c__5525__auto__);
var G__11137 = (0);
seq__10833 = G__11134;
chunk__10834 = G__11135;
count__10835 = G__11136;
i__10836 = G__11137;
continue;
} else {
var n = cljs.core.first.call(null,seq__10833__$1);
var value__10152__auto___11138 = ["#index-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join('');
var node__10153__auto___11139 = c3kit.wire.spec_helper.select.call(null,value__10152__auto___11138);
if(cljs.core.truth_(node__10153__auto___11139)){
} else {
throw (new speclj.platform.SpecFailure(["Expected selector to find node: ",(function (){var temp__5806__auto__ = value__10152__auto___11138;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9757__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9757__auto__);
}
})()].join('')));
}


var G__11140 = cljs.core.next.call(null,seq__10833__$1);
var G__11141 = null;
var G__11142 = (0);
var G__11143 = (0);
seq__10833 = G__11140;
chunk__10834 = G__11141;
count__10835 = G__11142;
i__10836 = G__11143;
continue;
}
} else {
return null;
}
}
break;
}
});})(_STAR_parent_description_STAR__orig_val__10743_11118,_STAR_parent_description_STAR__temp_val__10744_11119,description__9652__auto____$1,_STAR_parent_description_STAR__orig_val__10229_11064,_STAR_parent_description_STAR__temp_val__10230_11065,description__9652__auto___11063))
,false),speclj.components.new_characteristic.call(null,"clicking button updates board in state",((function (_STAR_parent_description_STAR__orig_val__10743_11118,_STAR_parent_description_STAR__temp_val__10744_11119,description__9652__auto____$1,_STAR_parent_description_STAR__orig_val__10229_11064,_STAR_parent_description_STAR__temp_val__10230_11065,description__9652__auto___11063){
return (function (){
var seq__10837 = cljs.core.seq.call(null,cljs.core.range.call(null,(9)));
var chunk__10838 = null;
var count__10839 = (0);
var i__10840 = (0);
while(true){
if((i__10840 < count__10839)){
var n = cljs.core._nth.call(null,chunk__10838,i__10840);
c3kit.wire.spec_helper.click_BANG_.call(null,["#index-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join(''));

var expected__9789__auto___11144 = cljs.core.assoc.call(null,tic_tac_toe.screens.play_spec.board_3,n,new cljs.core.Keyword(null,"x","x",2099068185));
var actual__9790__auto___11145 = new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.screens.play_spec.state));
if(cljs.core._EQ_.call(null,expected__9789__auto___11144,actual__9790__auto___11145)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__9789__auto___11144;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9757__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9757__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__9790__auto___11145;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9757__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9757__auto__);
}
})()," (using =)"].join('')));
}

cljs.core.swap_BANG_.call(null,tic_tac_toe.screens.play_spec.state,cljs.core.assoc,new cljs.core.Keyword(null,"board","board",-1907017633),tic_tac_toe.screens.play_spec.board_3,new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"x","x",2099068185));


var G__11146 = seq__10837;
var G__11147 = chunk__10838;
var G__11148 = count__10839;
var G__11149 = (i__10840 + (1));
seq__10837 = G__11146;
chunk__10838 = G__11147;
count__10839 = G__11148;
i__10840 = G__11149;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__10837);
if(temp__5804__auto__){
var seq__10837__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10837__$1)){
var c__5525__auto__ = cljs.core.chunk_first.call(null,seq__10837__$1);
var G__11150 = cljs.core.chunk_rest.call(null,seq__10837__$1);
var G__11151 = c__5525__auto__;
var G__11152 = cljs.core.count.call(null,c__5525__auto__);
var G__11153 = (0);
seq__10837 = G__11150;
chunk__10838 = G__11151;
count__10839 = G__11152;
i__10840 = G__11153;
continue;
} else {
var n = cljs.core.first.call(null,seq__10837__$1);
c3kit.wire.spec_helper.click_BANG_.call(null,["#index-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join(''));

var expected__9789__auto___11154 = cljs.core.assoc.call(null,tic_tac_toe.screens.play_spec.board_3,n,new cljs.core.Keyword(null,"x","x",2099068185));
var actual__9790__auto___11155 = new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.screens.play_spec.state));
if(cljs.core._EQ_.call(null,expected__9789__auto___11154,actual__9790__auto___11155)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__9789__auto___11154;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9757__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9757__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__9790__auto___11155;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9757__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9757__auto__);
}
})()," (using =)"].join('')));
}

cljs.core.swap_BANG_.call(null,tic_tac_toe.screens.play_spec.state,cljs.core.assoc,new cljs.core.Keyword(null,"board","board",-1907017633),tic_tac_toe.screens.play_spec.board_3,new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"x","x",2099068185));


var G__11156 = cljs.core.next.call(null,seq__10837__$1);
var G__11157 = null;
var G__11158 = (0);
var G__11159 = (0);
seq__10837 = G__11156;
chunk__10838 = G__11157;
count__10839 = G__11158;
i__10840 = G__11159;
continue;
}
} else {
return null;
}
}
break;
}
});})(_STAR_parent_description_STAR__orig_val__10743_11118,_STAR_parent_description_STAR__temp_val__10744_11119,description__9652__auto____$1,_STAR_parent_description_STAR__orig_val__10229_11064,_STAR_parent_description_STAR__temp_val__10230_11065,description__9652__auto___11063))
,false),speclj.components.new_characteristic.call(null,"clicking button swaps player in state",((function (_STAR_parent_description_STAR__orig_val__10743_11118,_STAR_parent_description_STAR__temp_val__10744_11119,description__9652__auto____$1,_STAR_parent_description_STAR__orig_val__10229_11064,_STAR_parent_description_STAR__temp_val__10230_11065,description__9652__auto___11063){
return (function (){
var seq__10841 = cljs.core.seq.call(null,cljs.core.range.call(null,(9)));
var chunk__10842 = null;
var count__10843 = (0);
var i__10844 = (0);
while(true){
if((i__10844 < count__10843)){
var n = cljs.core._nth.call(null,chunk__10842,i__10844);
c3kit.wire.spec_helper.click_BANG_.call(null,["#index-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join(''));

var expected__9789__auto___11160 = new cljs.core.Keyword(null,"o","o",-1350007228);
var actual__9790__auto___11161 = new cljs.core.Keyword(null,"player","player",-97687400).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.screens.play_spec.state));
if(cljs.core._EQ_.call(null,expected__9789__auto___11160,actual__9790__auto___11161)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__9789__auto___11160;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9757__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9757__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__9790__auto___11161;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9757__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9757__auto__);
}
})()," (using =)"].join('')));
}

cljs.core.swap_BANG_.call(null,tic_tac_toe.screens.play_spec.state,cljs.core.assoc,new cljs.core.Keyword(null,"board","board",-1907017633),tic_tac_toe.screens.play_spec.board_3,new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"x","x",2099068185));


var G__11162 = seq__10841;
var G__11163 = chunk__10842;
var G__11164 = count__10843;
var G__11165 = (i__10844 + (1));
seq__10841 = G__11162;
chunk__10842 = G__11163;
count__10843 = G__11164;
i__10844 = G__11165;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__10841);
if(temp__5804__auto__){
var seq__10841__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10841__$1)){
var c__5525__auto__ = cljs.core.chunk_first.call(null,seq__10841__$1);
var G__11166 = cljs.core.chunk_rest.call(null,seq__10841__$1);
var G__11167 = c__5525__auto__;
var G__11168 = cljs.core.count.call(null,c__5525__auto__);
var G__11169 = (0);
seq__10841 = G__11166;
chunk__10842 = G__11167;
count__10843 = G__11168;
i__10844 = G__11169;
continue;
} else {
var n = cljs.core.first.call(null,seq__10841__$1);
c3kit.wire.spec_helper.click_BANG_.call(null,["#index-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join(''));

var expected__9789__auto___11170 = new cljs.core.Keyword(null,"o","o",-1350007228);
var actual__9790__auto___11171 = new cljs.core.Keyword(null,"player","player",-97687400).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.screens.play_spec.state));
if(cljs.core._EQ_.call(null,expected__9789__auto___11170,actual__9790__auto___11171)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__9789__auto___11170;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9757__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9757__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__9790__auto___11171;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9757__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9757__auto__);
}
})()," (using =)"].join('')));
}

cljs.core.swap_BANG_.call(null,tic_tac_toe.screens.play_spec.state,cljs.core.assoc,new cljs.core.Keyword(null,"board","board",-1907017633),tic_tac_toe.screens.play_spec.board_3,new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"x","x",2099068185));


var G__11172 = cljs.core.next.call(null,seq__10841__$1);
var G__11173 = null;
var G__11174 = (0);
var G__11175 = (0);
seq__10841 = G__11172;
chunk__10842 = G__11173;
count__10843 = G__11174;
i__10844 = G__11175;
continue;
}
} else {
return null;
}
}
break;
}
});})(_STAR_parent_description_STAR__orig_val__10743_11118,_STAR_parent_description_STAR__temp_val__10744_11119,description__9652__auto____$1,_STAR_parent_description_STAR__orig_val__10229_11064,_STAR_parent_description_STAR__temp_val__10230_11065,description__9652__auto___11063))
,false),speclj.components.new_characteristic.call(null,"clicking button toggles human? to false if mode 2 or 3",((function (_STAR_parent_description_STAR__orig_val__10743_11118,_STAR_parent_description_STAR__temp_val__10744_11119,description__9652__auto____$1,_STAR_parent_description_STAR__orig_val__10229_11064,_STAR_parent_description_STAR__temp_val__10230_11065,description__9652__auto___11063){
return (function (){
var ai_turn_orig_val__10845 = tic_tac_toe.screens.play.ai_turn;
var ai_turn_temp_val__10846 = speclj.stub.stub.call(null,new cljs.core.Keyword(null,"ai-turn","ai-turn",-1581895352),cljs.core.PersistentArrayMap.EMPTY);
(tic_tac_toe.screens.play.ai_turn = ai_turn_temp_val__10846);

try{var seq__10847 = cljs.core.seq.call(null,cljs.core.range.call(null,(9)));
var chunk__10852 = null;
var count__10853 = (0);
var i__10854 = (0);
while(true){
if((i__10854 < count__10853)){
var n = cljs.core._nth.call(null,chunk__10852,i__10854);
var seq__10855_11176 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(3)], null));
var chunk__10856_11177 = null;
var count__10857_11178 = (0);
var i__10858_11179 = (0);
while(true){
if((i__10858_11179 < count__10857_11178)){
var mode_11180 = cljs.core._nth.call(null,chunk__10856_11177,i__10858_11179);
cljs.core.swap_BANG_.call(null,tic_tac_toe.screens.play_spec.state,cljs.core.assoc,new cljs.core.Keyword(null,"mode","mode",654403691),mode_11180);

c3kit.wire.spec_helper.render.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tic_tac_toe.render_screen.render_screen,tic_tac_toe.screens.play_spec.state], null));

c3kit.wire.spec_helper.click_BANG_.call(null,["#index-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join(''));

var expected__9789__auto___11181 = false;
var actual__9790__auto___11182 = new cljs.core.Keyword(null,"human?","human?",-2017219054).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.screens.play_spec.state));
if(cljs.core._EQ_.call(null,expected__9789__auto___11181,actual__9790__auto___11182)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__9789__auto___11181;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9757__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9757__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__9790__auto___11182;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9757__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9757__auto__);
}
})()," (using =)"].join('')));
}

cljs.core.swap_BANG_.call(null,tic_tac_toe.screens.play_spec.state,cljs.core.assoc,new cljs.core.Keyword(null,"board","board",-1907017633),tic_tac_toe.screens.play_spec.board_3,new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"x","x",2099068185));


var G__11183 = seq__10855_11176;
var G__11184 = chunk__10856_11177;
var G__11185 = count__10857_11178;
var G__11186 = (i__10858_11179 + (1));
seq__10855_11176 = G__11183;
chunk__10856_11177 = G__11184;
count__10857_11178 = G__11185;
i__10858_11179 = G__11186;
continue;
} else {
var temp__5804__auto___11187 = cljs.core.seq.call(null,seq__10855_11176);
if(temp__5804__auto___11187){
var seq__10855_11188__$1 = temp__5804__auto___11187;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10855_11188__$1)){
var c__5525__auto___11189 = cljs.core.chunk_first.call(null,seq__10855_11188__$1);
var G__11190 = cljs.core.chunk_rest.call(null,seq__10855_11188__$1);
var G__11191 = c__5525__auto___11189;
var G__11192 = cljs.core.count.call(null,c__5525__auto___11189);
var G__11193 = (0);
seq__10855_11176 = G__11190;
chunk__10856_11177 = G__11191;
count__10857_11178 = G__11192;
i__10858_11179 = G__11193;
continue;
} else {
var mode_11194 = cljs.core.first.call(null,seq__10855_11188__$1);
cljs.core.swap_BANG_.call(null,tic_tac_toe.screens.play_spec.state,cljs.core.assoc,new cljs.core.Keyword(null,"mode","mode",654403691),mode_11194);

c3kit.wire.spec_helper.render.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tic_tac_toe.render_screen.render_screen,tic_tac_toe.screens.play_spec.state], null));

c3kit.wire.spec_helper.click_BANG_.call(null,["#index-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join(''));

var expected__9789__auto___11195 = false;
var actual__9790__auto___11196 = new cljs.core.Keyword(null,"human?","human?",-2017219054).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.screens.play_spec.state));
if(cljs.core._EQ_.call(null,expected__9789__auto___11195,actual__9790__auto___11196)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__9789__auto___11195;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9757__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9757__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__9790__auto___11196;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9757__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9757__auto__);
}
})()," (using =)"].join('')));
}

cljs.core.swap_BANG_.call(null,tic_tac_toe.screens.play_spec.state,cljs.core.assoc,new cljs.core.Keyword(null,"board","board",-1907017633),tic_tac_toe.screens.play_spec.board_3,new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"x","x",2099068185));


var G__11197 = cljs.core.next.call(null,seq__10855_11188__$1);
var G__11198 = null;
var G__11199 = (0);
var G__11200 = (0);
seq__10855_11176 = G__11197;
chunk__10856_11177 = G__11198;
count__10857_11178 = G__11199;
i__10858_11179 = G__11200;
continue;
}
} else {
}
}
break;
}

var G__11201 = seq__10847;
var G__11202 = chunk__10852;
var G__11203 = count__10853;
var G__11204 = (i__10854 + (1));
seq__10847 = G__11201;
chunk__10852 = G__11202;
count__10853 = G__11203;
i__10854 = G__11204;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__10847);
if(temp__5804__auto__){
var seq__10847__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10847__$1)){
var c__5525__auto__ = cljs.core.chunk_first.call(null,seq__10847__$1);
var G__11205 = cljs.core.chunk_rest.call(null,seq__10847__$1);
var G__11206 = c__5525__auto__;
var G__11207 = cljs.core.count.call(null,c__5525__auto__);
var G__11208 = (0);
seq__10847 = G__11205;
chunk__10852 = G__11206;
count__10853 = G__11207;
i__10854 = G__11208;
continue;
} else {
var n = cljs.core.first.call(null,seq__10847__$1);
var seq__10848_11209 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(3)], null));
var chunk__10849_11210 = null;
var count__10850_11211 = (0);
var i__10851_11212 = (0);
while(true){
if((i__10851_11212 < count__10850_11211)){
var mode_11213 = cljs.core._nth.call(null,chunk__10849_11210,i__10851_11212);
cljs.core.swap_BANG_.call(null,tic_tac_toe.screens.play_spec.state,cljs.core.assoc,new cljs.core.Keyword(null,"mode","mode",654403691),mode_11213);

c3kit.wire.spec_helper.render.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tic_tac_toe.render_screen.render_screen,tic_tac_toe.screens.play_spec.state], null));

c3kit.wire.spec_helper.click_BANG_.call(null,["#index-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join(''));

var expected__9789__auto___11214 = false;
var actual__9790__auto___11215 = new cljs.core.Keyword(null,"human?","human?",-2017219054).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.screens.play_spec.state));
if(cljs.core._EQ_.call(null,expected__9789__auto___11214,actual__9790__auto___11215)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__9789__auto___11214;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9757__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9757__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__9790__auto___11215;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9757__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9757__auto__);
}
})()," (using =)"].join('')));
}

cljs.core.swap_BANG_.call(null,tic_tac_toe.screens.play_spec.state,cljs.core.assoc,new cljs.core.Keyword(null,"board","board",-1907017633),tic_tac_toe.screens.play_spec.board_3,new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"x","x",2099068185));


var G__11216 = seq__10848_11209;
var G__11217 = chunk__10849_11210;
var G__11218 = count__10850_11211;
var G__11219 = (i__10851_11212 + (1));
seq__10848_11209 = G__11216;
chunk__10849_11210 = G__11217;
count__10850_11211 = G__11218;
i__10851_11212 = G__11219;
continue;
} else {
var temp__5804__auto___11220__$1 = cljs.core.seq.call(null,seq__10848_11209);
if(temp__5804__auto___11220__$1){
var seq__10848_11221__$1 = temp__5804__auto___11220__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10848_11221__$1)){
var c__5525__auto___11222 = cljs.core.chunk_first.call(null,seq__10848_11221__$1);
var G__11223 = cljs.core.chunk_rest.call(null,seq__10848_11221__$1);
var G__11224 = c__5525__auto___11222;
var G__11225 = cljs.core.count.call(null,c__5525__auto___11222);
var G__11226 = (0);
seq__10848_11209 = G__11223;
chunk__10849_11210 = G__11224;
count__10850_11211 = G__11225;
i__10851_11212 = G__11226;
continue;
} else {
var mode_11227 = cljs.core.first.call(null,seq__10848_11221__$1);
cljs.core.swap_BANG_.call(null,tic_tac_toe.screens.play_spec.state,cljs.core.assoc,new cljs.core.Keyword(null,"mode","mode",654403691),mode_11227);

c3kit.wire.spec_helper.render.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tic_tac_toe.render_screen.render_screen,tic_tac_toe.screens.play_spec.state], null));

c3kit.wire.spec_helper.click_BANG_.call(null,["#index-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join(''));

var expected__9789__auto___11228 = false;
var actual__9790__auto___11229 = new cljs.core.Keyword(null,"human?","human?",-2017219054).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.screens.play_spec.state));
if(cljs.core._EQ_.call(null,expected__9789__auto___11228,actual__9790__auto___11229)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__9789__auto___11228;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9757__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9757__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__9790__auto___11229;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9757__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9757__auto__);
}
})()," (using =)"].join('')));
}

cljs.core.swap_BANG_.call(null,tic_tac_toe.screens.play_spec.state,cljs.core.assoc,new cljs.core.Keyword(null,"board","board",-1907017633),tic_tac_toe.screens.play_spec.board_3,new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"x","x",2099068185));


var G__11230 = cljs.core.next.call(null,seq__10848_11221__$1);
var G__11231 = null;
var G__11232 = (0);
var G__11233 = (0);
seq__10848_11209 = G__11230;
chunk__10849_11210 = G__11231;
count__10850_11211 = G__11232;
i__10851_11212 = G__11233;
continue;
}
} else {
}
}
break;
}

var G__11234 = cljs.core.next.call(null,seq__10847__$1);
var G__11235 = null;
var G__11236 = (0);
var G__11237 = (0);
seq__10847 = G__11234;
chunk__10852 = G__11235;
count__10853 = G__11236;
i__10854 = G__11237;
continue;
}
} else {
return null;
}
}
break;
}
}finally {(tic_tac_toe.screens.play.ai_turn = ai_turn_orig_val__10845);
}});})(_STAR_parent_description_STAR__orig_val__10743_11118,_STAR_parent_description_STAR__temp_val__10744_11119,description__9652__auto____$1,_STAR_parent_description_STAR__orig_val__10229_11064,_STAR_parent_description_STAR__temp_val__10230_11065,description__9652__auto___11063))
,false),speclj.components.new_characteristic.call(null,"clicking button does not toggle human if mode 1",((function (_STAR_parent_description_STAR__orig_val__10743_11118,_STAR_parent_description_STAR__temp_val__10744_11119,description__9652__auto____$1,_STAR_parent_description_STAR__orig_val__10229_11064,_STAR_parent_description_STAR__temp_val__10230_11065,description__9652__auto___11063){
return (function (){
var ai_turn_orig_val__10859 = tic_tac_toe.screens.play.ai_turn;
var ai_turn_temp_val__10860 = speclj.stub.stub.call(null,new cljs.core.Keyword(null,"ai-turn","ai-turn",-1581895352),cljs.core.PersistentArrayMap.EMPTY);
(tic_tac_toe.screens.play.ai_turn = ai_turn_temp_val__10860);

try{var seq__10861 = cljs.core.seq.call(null,cljs.core.range.call(null,(9)));
var chunk__10862 = null;
var count__10863 = (0);
var i__10864 = (0);
while(true){
if((i__10864 < count__10863)){
var n = cljs.core._nth.call(null,chunk__10862,i__10864);
c3kit.wire.spec_helper.click_BANG_.call(null,["#index-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join(''));

var expected__9789__auto___11238 = true;
var actual__9790__auto___11239 = new cljs.core.Keyword(null,"human?","human?",-2017219054).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.screens.play_spec.state));
if(cljs.core._EQ_.call(null,expected__9789__auto___11238,actual__9790__auto___11239)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__9789__auto___11238;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9757__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9757__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__9790__auto___11239;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9757__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9757__auto__);
}
})()," (using =)"].join('')));
}

cljs.core.swap_BANG_.call(null,tic_tac_toe.screens.play_spec.state,cljs.core.assoc,new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"board","board",-1907017633),tic_tac_toe.screens.play_spec.board_4);


var G__11240 = seq__10861;
var G__11241 = chunk__10862;
var G__11242 = count__10863;
var G__11243 = (i__10864 + (1));
seq__10861 = G__11240;
chunk__10862 = G__11241;
count__10863 = G__11242;
i__10864 = G__11243;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__10861);
if(temp__5804__auto__){
var seq__10861__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10861__$1)){
var c__5525__auto__ = cljs.core.chunk_first.call(null,seq__10861__$1);
var G__11244 = cljs.core.chunk_rest.call(null,seq__10861__$1);
var G__11245 = c__5525__auto__;
var G__11246 = cljs.core.count.call(null,c__5525__auto__);
var G__11247 = (0);
seq__10861 = G__11244;
chunk__10862 = G__11245;
count__10863 = G__11246;
i__10864 = G__11247;
continue;
} else {
var n = cljs.core.first.call(null,seq__10861__$1);
c3kit.wire.spec_helper.click_BANG_.call(null,["#index-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join(''));

var expected__9789__auto___11248 = true;
var actual__9790__auto___11249 = new cljs.core.Keyword(null,"human?","human?",-2017219054).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.screens.play_spec.state));
if(cljs.core._EQ_.call(null,expected__9789__auto___11248,actual__9790__auto___11249)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__9789__auto___11248;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9757__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9757__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__9790__auto___11249;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9757__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9757__auto__);
}
})()," (using =)"].join('')));
}

cljs.core.swap_BANG_.call(null,tic_tac_toe.screens.play_spec.state,cljs.core.assoc,new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"board","board",-1907017633),tic_tac_toe.screens.play_spec.board_4);


var G__11250 = cljs.core.next.call(null,seq__10861__$1);
var G__11251 = null;
var G__11252 = (0);
var G__11253 = (0);
seq__10861 = G__11250;
chunk__10862 = G__11251;
count__10863 = G__11252;
i__10864 = G__11253;
continue;
}
} else {
return null;
}
}
break;
}
}finally {(tic_tac_toe.screens.play.ai_turn = ai_turn_orig_val__10859);
}});})(_STAR_parent_description_STAR__orig_val__10743_11118,_STAR_parent_description_STAR__temp_val__10744_11119,description__9652__auto____$1,_STAR_parent_description_STAR__orig_val__10229_11064,_STAR_parent_description_STAR__temp_val__10230_11065,description__9652__auto___11063))
,false),speclj.components.new_characteristic.call(null,"clicking button updates game-state in state",((function (_STAR_parent_description_STAR__orig_val__10743_11118,_STAR_parent_description_STAR__temp_val__10744_11119,description__9652__auto____$1,_STAR_parent_description_STAR__orig_val__10229_11064,_STAR_parent_description_STAR__temp_val__10230_11065,description__9652__auto___11063){
return (function (){
cljs.core.swap_BANG_.call(null,tic_tac_toe.screens.play_spec.state,cljs.core.assoc,new cljs.core.Keyword(null,"board","board",-1907017633),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"o","o",-1350007228),new cljs.core.Keyword(null,"o","o",-1350007228),(6),(7),(8),(9)], null));

c3kit.wire.spec_helper.click_BANG_.call(null,"#index-0");

var expected__9789__auto__ = "X wins!";
var actual__9790__auto__ = new cljs.core.Keyword(null,"game-state","game-state",935682735).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.screens.play_spec.state));
if(cljs.core._EQ_.call(null,expected__9789__auto__,actual__9790__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__9789__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9757__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9757__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__9790__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9757__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9757__auto__);
}
})()," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__10743_11118,_STAR_parent_description_STAR__temp_val__10744_11119,description__9652__auto____$1,_STAR_parent_description_STAR__orig_val__10229_11064,_STAR_parent_description_STAR__temp_val__10230_11065,description__9652__auto___11063))
,false),speclj.components.new_characteristic.call(null,"clicking button adds token to button HTML",((function (_STAR_parent_description_STAR__orig_val__10743_11118,_STAR_parent_description_STAR__temp_val__10744_11119,description__9652__auto____$1,_STAR_parent_description_STAR__orig_val__10229_11064,_STAR_parent_description_STAR__temp_val__10230_11065,description__9652__auto___11063){
return (function (){
var seq__10865 = cljs.core.seq.call(null,cljs.core.range.call(null,(9)));
var chunk__10866 = null;
var count__10867 = (0);
var i__10868 = (0);
while(true){
if((i__10868 < count__10867)){
var n = cljs.core._nth.call(null,chunk__10866,i__10868);
c3kit.wire.spec_helper.click_BANG_.call(null,["#index-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join(''));

var expected__9789__auto___11254 = "X";
var actual__9790__auto___11255 = c3kit.wire.spec_helper.text.call(null,["#index-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join(''));
if(cljs.core._EQ_.call(null,expected__9789__auto___11254,actual__9790__auto___11255)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__9789__auto___11254;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9757__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9757__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__9790__auto___11255;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9757__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9757__auto__);
}
})()," (using =)"].join('')));
}

cljs.core.reset_BANG_.call(null,tic_tac_toe.screens.play_spec.state,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"board","board",-1907017633),tic_tac_toe.screens.play_spec.board_3,new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"current-screen","current-screen",-1454713691),new cljs.core.Keyword(null,"play","play",-580418022),new cljs.core.Keyword(null,"mode","mode",654403691),(1)], null));


var G__11256 = seq__10865;
var G__11257 = chunk__10866;
var G__11258 = count__10867;
var G__11259 = (i__10868 + (1));
seq__10865 = G__11256;
chunk__10866 = G__11257;
count__10867 = G__11258;
i__10868 = G__11259;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__10865);
if(temp__5804__auto__){
var seq__10865__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10865__$1)){
var c__5525__auto__ = cljs.core.chunk_first.call(null,seq__10865__$1);
var G__11260 = cljs.core.chunk_rest.call(null,seq__10865__$1);
var G__11261 = c__5525__auto__;
var G__11262 = cljs.core.count.call(null,c__5525__auto__);
var G__11263 = (0);
seq__10865 = G__11260;
chunk__10866 = G__11261;
count__10867 = G__11262;
i__10868 = G__11263;
continue;
} else {
var n = cljs.core.first.call(null,seq__10865__$1);
c3kit.wire.spec_helper.click_BANG_.call(null,["#index-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join(''));

var expected__9789__auto___11264 = "X";
var actual__9790__auto___11265 = c3kit.wire.spec_helper.text.call(null,["#index-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join(''));
if(cljs.core._EQ_.call(null,expected__9789__auto___11264,actual__9790__auto___11265)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__9789__auto___11264;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9757__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9757__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__9790__auto___11265;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9757__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9757__auto__);
}
})()," (using =)"].join('')));
}

cljs.core.reset_BANG_.call(null,tic_tac_toe.screens.play_spec.state,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"board","board",-1907017633),tic_tac_toe.screens.play_spec.board_3,new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"current-screen","current-screen",-1454713691),new cljs.core.Keyword(null,"play","play",-580418022),new cljs.core.Keyword(null,"mode","mode",654403691),(1)], null));


var G__11266 = cljs.core.next.call(null,seq__10865__$1);
var G__11267 = null;
var G__11268 = (0);
var G__11269 = (0);
seq__10865 = G__11266;
chunk__10866 = G__11267;
count__10867 = G__11268;
i__10868 = G__11269;
continue;
}
} else {
return null;
}
}
break;
}
});})(_STAR_parent_description_STAR__orig_val__10743_11118,_STAR_parent_description_STAR__temp_val__10744_11119,description__9652__auto____$1,_STAR_parent_description_STAR__orig_val__10229_11064,_STAR_parent_description_STAR__temp_val__10230_11065,description__9652__auto___11063))
,false),speclj.components.new_characteristic.call(null,"clicking button disables button",((function (_STAR_parent_description_STAR__orig_val__10743_11118,_STAR_parent_description_STAR__temp_val__10744_11119,description__9652__auto____$1,_STAR_parent_description_STAR__orig_val__10229_11064,_STAR_parent_description_STAR__temp_val__10230_11065,description__9652__auto___11063){
return (function (){
var seq__10869 = cljs.core.seq.call(null,cljs.core.range.call(null,(9)));
var chunk__10870 = null;
var count__10871 = (0);
var i__10872 = (0);
while(true){
if((i__10872 < count__10871)){
var n = cljs.core._nth.call(null,chunk__10870,i__10872);
c3kit.wire.spec_helper.click_BANG_.call(null,["#index-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join(''));

var expected__9789__auto___11270 = true;
var actual__9790__auto___11271 = c3kit.wire.spec_helper.disabled_QMARK_.call(null,["#index-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join(''));
if(cljs.core._EQ_.call(null,expected__9789__auto___11270,actual__9790__auto___11271)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__9789__auto___11270;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9757__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9757__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__9790__auto___11271;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9757__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9757__auto__);
}
})()," (using =)"].join('')));
}

cljs.core.reset_BANG_.call(null,tic_tac_toe.screens.play_spec.state,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"board","board",-1907017633),tic_tac_toe.screens.play_spec.board_3,new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"current-screen","current-screen",-1454713691),new cljs.core.Keyword(null,"play","play",-580418022),new cljs.core.Keyword(null,"mode","mode",654403691),(1)], null));


var G__11272 = seq__10869;
var G__11273 = chunk__10870;
var G__11274 = count__10871;
var G__11275 = (i__10872 + (1));
seq__10869 = G__11272;
chunk__10870 = G__11273;
count__10871 = G__11274;
i__10872 = G__11275;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__10869);
if(temp__5804__auto__){
var seq__10869__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10869__$1)){
var c__5525__auto__ = cljs.core.chunk_first.call(null,seq__10869__$1);
var G__11276 = cljs.core.chunk_rest.call(null,seq__10869__$1);
var G__11277 = c__5525__auto__;
var G__11278 = cljs.core.count.call(null,c__5525__auto__);
var G__11279 = (0);
seq__10869 = G__11276;
chunk__10870 = G__11277;
count__10871 = G__11278;
i__10872 = G__11279;
continue;
} else {
var n = cljs.core.first.call(null,seq__10869__$1);
c3kit.wire.spec_helper.click_BANG_.call(null,["#index-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join(''));

var expected__9789__auto___11280 = true;
var actual__9790__auto___11281 = c3kit.wire.spec_helper.disabled_QMARK_.call(null,["#index-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join(''));
if(cljs.core._EQ_.call(null,expected__9789__auto___11280,actual__9790__auto___11281)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__9789__auto___11280;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9757__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9757__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__9790__auto___11281;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9757__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9757__auto__);
}
})()," (using =)"].join('')));
}

cljs.core.reset_BANG_.call(null,tic_tac_toe.screens.play_spec.state,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"board","board",-1907017633),tic_tac_toe.screens.play_spec.board_3,new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"current-screen","current-screen",-1454713691),new cljs.core.Keyword(null,"play","play",-580418022),new cljs.core.Keyword(null,"mode","mode",654403691),(1)], null));


var G__11282 = cljs.core.next.call(null,seq__10869__$1);
var G__11283 = null;
var G__11284 = (0);
var G__11285 = (0);
seq__10869 = G__11282;
chunk__10870 = G__11283;
count__10871 = G__11284;
i__10872 = G__11285;
continue;
}
} else {
return null;
}
}
break;
}
});})(_STAR_parent_description_STAR__orig_val__10743_11118,_STAR_parent_description_STAR__temp_val__10744_11119,description__9652__auto____$1,_STAR_parent_description_STAR__orig_val__10229_11064,_STAR_parent_description_STAR__temp_val__10230_11065,description__9652__auto___11063))
,false),speclj.components.new_characteristic.call(null,"all buttons disabled when game-over",((function (_STAR_parent_description_STAR__orig_val__10743_11118,_STAR_parent_description_STAR__temp_val__10744_11119,description__9652__auto____$1,_STAR_parent_description_STAR__orig_val__10229_11064,_STAR_parent_description_STAR__temp_val__10230_11065,description__9652__auto___11063){
return (function (){
var seq__10873 = cljs.core.seq.call(null,cljs.core.range.call(null,(9)));
var chunk__10878 = null;
var count__10879 = (0);
var i__10880 = (0);
while(true){
if((i__10880 < count__10879)){
var n = cljs.core._nth.call(null,chunk__10878,i__10880);
var seq__10881_11286 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["X wins!","O wins!","It is a tie!"], null));
var chunk__10882_11287 = null;
var count__10883_11288 = (0);
var i__10884_11289 = (0);
while(true){
if((i__10884_11289 < count__10883_11288)){
var states_11290 = cljs.core._nth.call(null,chunk__10882_11287,i__10884_11289);
cljs.core.swap_BANG_.call(null,tic_tac_toe.screens.play_spec.state,cljs.core.assoc,new cljs.core.Keyword(null,"game-state","game-state",935682735),states_11290);

c3kit.wire.spec_helper.render.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tic_tac_toe.render_screen.render_screen,tic_tac_toe.screens.play_spec.state], null));

var expected__9789__auto___11291 = true;
var actual__9790__auto___11292 = c3kit.wire.spec_helper.disabled_QMARK_.call(null,["#index-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join(''));
if(cljs.core._EQ_.call(null,expected__9789__auto___11291,actual__9790__auto___11292)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__9789__auto___11291;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9757__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9757__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__9790__auto___11292;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9757__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9757__auto__);
}
})()," (using =)"].join('')));
}

cljs.core.reset_BANG_.call(null,tic_tac_toe.screens.play_spec.state,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"board","board",-1907017633),tic_tac_toe.screens.play_spec.board_3,new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"current-screen","current-screen",-1454713691),new cljs.core.Keyword(null,"play","play",-580418022),new cljs.core.Keyword(null,"mode","mode",654403691),(1)], null));


var G__11293 = seq__10881_11286;
var G__11294 = chunk__10882_11287;
var G__11295 = count__10883_11288;
var G__11296 = (i__10884_11289 + (1));
seq__10881_11286 = G__11293;
chunk__10882_11287 = G__11294;
count__10883_11288 = G__11295;
i__10884_11289 = G__11296;
continue;
} else {
var temp__5804__auto___11297 = cljs.core.seq.call(null,seq__10881_11286);
if(temp__5804__auto___11297){
var seq__10881_11298__$1 = temp__5804__auto___11297;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10881_11298__$1)){
var c__5525__auto___11299 = cljs.core.chunk_first.call(null,seq__10881_11298__$1);
var G__11300 = cljs.core.chunk_rest.call(null,seq__10881_11298__$1);
var G__11301 = c__5525__auto___11299;
var G__11302 = cljs.core.count.call(null,c__5525__auto___11299);
var G__11303 = (0);
seq__10881_11286 = G__11300;
chunk__10882_11287 = G__11301;
count__10883_11288 = G__11302;
i__10884_11289 = G__11303;
continue;
} else {
var states_11304 = cljs.core.first.call(null,seq__10881_11298__$1);
cljs.core.swap_BANG_.call(null,tic_tac_toe.screens.play_spec.state,cljs.core.assoc,new cljs.core.Keyword(null,"game-state","game-state",935682735),states_11304);

c3kit.wire.spec_helper.render.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tic_tac_toe.render_screen.render_screen,tic_tac_toe.screens.play_spec.state], null));

var expected__9789__auto___11305 = true;
var actual__9790__auto___11306 = c3kit.wire.spec_helper.disabled_QMARK_.call(null,["#index-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join(''));
if(cljs.core._EQ_.call(null,expected__9789__auto___11305,actual__9790__auto___11306)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__9789__auto___11305;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9757__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9757__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__9790__auto___11306;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9757__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9757__auto__);
}
})()," (using =)"].join('')));
}

cljs.core.reset_BANG_.call(null,tic_tac_toe.screens.play_spec.state,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"board","board",-1907017633),tic_tac_toe.screens.play_spec.board_3,new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"current-screen","current-screen",-1454713691),new cljs.core.Keyword(null,"play","play",-580418022),new cljs.core.Keyword(null,"mode","mode",654403691),(1)], null));


var G__11307 = cljs.core.next.call(null,seq__10881_11298__$1);
var G__11308 = null;
var G__11309 = (0);
var G__11310 = (0);
seq__10881_11286 = G__11307;
chunk__10882_11287 = G__11308;
count__10883_11288 = G__11309;
i__10884_11289 = G__11310;
continue;
}
} else {
}
}
break;
}

var G__11311 = seq__10873;
var G__11312 = chunk__10878;
var G__11313 = count__10879;
var G__11314 = (i__10880 + (1));
seq__10873 = G__11311;
chunk__10878 = G__11312;
count__10879 = G__11313;
i__10880 = G__11314;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__10873);
if(temp__5804__auto__){
var seq__10873__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10873__$1)){
var c__5525__auto__ = cljs.core.chunk_first.call(null,seq__10873__$1);
var G__11315 = cljs.core.chunk_rest.call(null,seq__10873__$1);
var G__11316 = c__5525__auto__;
var G__11317 = cljs.core.count.call(null,c__5525__auto__);
var G__11318 = (0);
seq__10873 = G__11315;
chunk__10878 = G__11316;
count__10879 = G__11317;
i__10880 = G__11318;
continue;
} else {
var n = cljs.core.first.call(null,seq__10873__$1);
var seq__10874_11319 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["X wins!","O wins!","It is a tie!"], null));
var chunk__10875_11320 = null;
var count__10876_11321 = (0);
var i__10877_11322 = (0);
while(true){
if((i__10877_11322 < count__10876_11321)){
var states_11323 = cljs.core._nth.call(null,chunk__10875_11320,i__10877_11322);
cljs.core.swap_BANG_.call(null,tic_tac_toe.screens.play_spec.state,cljs.core.assoc,new cljs.core.Keyword(null,"game-state","game-state",935682735),states_11323);

c3kit.wire.spec_helper.render.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tic_tac_toe.render_screen.render_screen,tic_tac_toe.screens.play_spec.state], null));

var expected__9789__auto___11324 = true;
var actual__9790__auto___11325 = c3kit.wire.spec_helper.disabled_QMARK_.call(null,["#index-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join(''));
if(cljs.core._EQ_.call(null,expected__9789__auto___11324,actual__9790__auto___11325)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__9789__auto___11324;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9757__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9757__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__9790__auto___11325;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9757__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9757__auto__);
}
})()," (using =)"].join('')));
}

cljs.core.reset_BANG_.call(null,tic_tac_toe.screens.play_spec.state,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"board","board",-1907017633),tic_tac_toe.screens.play_spec.board_3,new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"current-screen","current-screen",-1454713691),new cljs.core.Keyword(null,"play","play",-580418022),new cljs.core.Keyword(null,"mode","mode",654403691),(1)], null));


var G__11326 = seq__10874_11319;
var G__11327 = chunk__10875_11320;
var G__11328 = count__10876_11321;
var G__11329 = (i__10877_11322 + (1));
seq__10874_11319 = G__11326;
chunk__10875_11320 = G__11327;
count__10876_11321 = G__11328;
i__10877_11322 = G__11329;
continue;
} else {
var temp__5804__auto___11330__$1 = cljs.core.seq.call(null,seq__10874_11319);
if(temp__5804__auto___11330__$1){
var seq__10874_11331__$1 = temp__5804__auto___11330__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10874_11331__$1)){
var c__5525__auto___11332 = cljs.core.chunk_first.call(null,seq__10874_11331__$1);
var G__11333 = cljs.core.chunk_rest.call(null,seq__10874_11331__$1);
var G__11334 = c__5525__auto___11332;
var G__11335 = cljs.core.count.call(null,c__5525__auto___11332);
var G__11336 = (0);
seq__10874_11319 = G__11333;
chunk__10875_11320 = G__11334;
count__10876_11321 = G__11335;
i__10877_11322 = G__11336;
continue;
} else {
var states_11337 = cljs.core.first.call(null,seq__10874_11331__$1);
cljs.core.swap_BANG_.call(null,tic_tac_toe.screens.play_spec.state,cljs.core.assoc,new cljs.core.Keyword(null,"game-state","game-state",935682735),states_11337);

c3kit.wire.spec_helper.render.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tic_tac_toe.render_screen.render_screen,tic_tac_toe.screens.play_spec.state], null));

var expected__9789__auto___11338 = true;
var actual__9790__auto___11339 = c3kit.wire.spec_helper.disabled_QMARK_.call(null,["#index-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join(''));
if(cljs.core._EQ_.call(null,expected__9789__auto___11338,actual__9790__auto___11339)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__9789__auto___11338;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9757__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9757__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__9790__auto___11339;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9757__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9757__auto__);
}
})()," (using =)"].join('')));
}

cljs.core.reset_BANG_.call(null,tic_tac_toe.screens.play_spec.state,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"board","board",-1907017633),tic_tac_toe.screens.play_spec.board_3,new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"current-screen","current-screen",-1454713691),new cljs.core.Keyword(null,"play","play",-580418022),new cljs.core.Keyword(null,"mode","mode",654403691),(1)], null));


var G__11340 = cljs.core.next.call(null,seq__10874_11331__$1);
var G__11341 = null;
var G__11342 = (0);
var G__11343 = (0);
seq__10874_11319 = G__11340;
chunk__10875_11320 = G__11341;
count__10876_11321 = G__11342;
i__10877_11322 = G__11343;
continue;
}
} else {
}
}
break;
}

var G__11344 = cljs.core.next.call(null,seq__10873__$1);
var G__11345 = null;
var G__11346 = (0);
var G__11347 = (0);
seq__10873 = G__11344;
chunk__10878 = G__11345;
count__10879 = G__11346;
i__10880 = G__11347;
continue;
}
} else {
return null;
}
}
break;
}
});})(_STAR_parent_description_STAR__orig_val__10743_11118,_STAR_parent_description_STAR__temp_val__10744_11119,description__9652__auto____$1,_STAR_parent_description_STAR__orig_val__10229_11064,_STAR_parent_description_STAR__temp_val__10230_11065,description__9652__auto___11063))
,false),speclj.components.new_characteristic.call(null,"clicking button triggers AI if mode 2 or 3",((function (_STAR_parent_description_STAR__orig_val__10743_11118,_STAR_parent_description_STAR__temp_val__10744_11119,description__9652__auto____$1,_STAR_parent_description_STAR__orig_val__10229_11064,_STAR_parent_description_STAR__temp_val__10230_11065,description__9652__auto___11063){
return (function (){
var take_turn_orig_val__10885 = tic_tac_toe.player.take_turn;
var take_turn_temp_val__10886 = speclj.stub.stub.call(null,new cljs.core.Keyword(null,"turn","turn",75759344),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"return","return",-1891502105),tic_tac_toe.screens.play_spec.board_3], null));
(tic_tac_toe.player.take_turn = take_turn_temp_val__10886);

try{var seq__10887 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(3)], null));
var chunk__10900 = null;
var count__10901 = (0);
var i__10902 = (0);
while(true){
if((i__10902 < count__10901)){
var ai = cljs.core._nth.call(null,chunk__10900,i__10902);
var seq__10903_11348 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(3)], null));
var chunk__10908_11349 = null;
var count__10909_11350 = (0);
var i__10910_11351 = (0);
while(true){
if((i__10910_11351 < count__10909_11350)){
var mode_11352 = cljs.core._nth.call(null,chunk__10908_11349,i__10910_11351);
var seq__10911_11353 = cljs.core.seq.call(null,cljs.core.range.call(null,(9)));
var chunk__10912_11354 = null;
var count__10913_11355 = (0);
var i__10914_11356 = (0);
while(true){
if((i__10914_11356 < count__10913_11355)){
var n_11357 = cljs.core._nth.call(null,chunk__10912_11354,i__10914_11356);
cljs.core.swap_BANG_.call(null,tic_tac_toe.screens.play_spec.state,cljs.core.assoc,new cljs.core.Keyword(null,"mode","mode",654403691),mode_11352,new cljs.core.Keyword(null,"first-ai-level","first-ai-level",1004633644),ai,new cljs.core.Keyword(null,"player","player",-97687400),((cljs.core._EQ_.call(null,(2),mode_11352))?new cljs.core.Keyword(null,"x","x",2099068185):new cljs.core.Keyword(null,"o","o",-1350007228)),new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"gui","gui",604532813));

c3kit.wire.spec_helper.render.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tic_tac_toe.render_screen.render_screen,tic_tac_toe.screens.play_spec.state], null));

c3kit.wire.spec_helper.click_BANG_.call(null,["#index-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n_11357)].join(''));

var name__10036__auto___11358 = new cljs.core.Keyword(null,"turn","turn",75759344);
var options__10037__auto___11359 = cljs.core.PersistentArrayMap.EMPTY;
var invocations__10038__auto___11360 = speclj.stub.invocations_of.call(null,name__10036__auto___11358);
var times__10039__auto___11361 = new cljs.core.Keyword(null,"times","times",1671571467).cljs$core$IFn$_invoke$arity$1(options__10037__auto___11359);
var times_QMARK___10040__auto___11362 = typeof times__10039__auto___11361 === 'number';
var check_params_QMARK___10041__auto___11363 = cljs.core.contains_QMARK_.call(null,options__10037__auto___11359,new cljs.core.Keyword(null,"with","with",-1536296876));
var with__10042__auto___11364 = new cljs.core.Keyword(null,"with","with",-1536296876).cljs$core$IFn$_invoke$arity$1(options__10037__auto___11359);
var with__10042__auto___11365__$1 = (((with__10042__auto___11364 == null))?cljs.core.PersistentVector.EMPTY:with__10042__auto___11364);
var invocations_str__10043__auto___11366 = ((function (seq__10911_11353,chunk__10912_11354,count__10913_11355,i__10914_11356,seq__10903_11348,chunk__10908_11349,count__10909_11350,i__10910_11351,seq__10887,chunk__10900,count__10901,i__10902,name__10036__auto___11358,options__10037__auto___11359,invocations__10038__auto___11360,times__10039__auto___11361,times_QMARK___10040__auto___11362,check_params_QMARK___10041__auto___11363,with__10042__auto___11364,with__10042__auto___11365__$1,n_11357,mode_11352,ai,take_turn_orig_val__10885,take_turn_temp_val__10886,_STAR_parent_description_STAR__orig_val__10743_11118,_STAR_parent_description_STAR__temp_val__10744_11119,description__9652__auto____$1,_STAR_parent_description_STAR__orig_val__10229_11064,_STAR_parent_description_STAR__temp_val__10230_11065,description__9652__auto___11063){
return (function (p1__10033__10044__auto__){
if(cljs.core._EQ_.call(null,(1),p1__10033__10044__auto__)){
return "invocation";
} else {
return "invocations";
}
});})(seq__10911_11353,chunk__10912_11354,count__10913_11355,i__10914_11356,seq__10903_11348,chunk__10908_11349,count__10909_11350,i__10910_11351,seq__10887,chunk__10900,count__10901,i__10902,name__10036__auto___11358,options__10037__auto___11359,invocations__10038__auto___11360,times__10039__auto___11361,times_QMARK___10040__auto___11362,check_params_QMARK___10041__auto___11363,with__10042__auto___11364,with__10042__auto___11365__$1,n_11357,mode_11352,ai,take_turn_orig_val__10885,take_turn_temp_val__10886,_STAR_parent_description_STAR__orig_val__10743_11118,_STAR_parent_description_STAR__temp_val__10744_11119,description__9652__auto____$1,_STAR_parent_description_STAR__orig_val__10229_11064,_STAR_parent_description_STAR__temp_val__10230_11065,description__9652__auto___11063))
;
if(((times_QMARK___10040__auto___11362) && (check_params_QMARK___10041__auto___11363))){
var matching_invocations__10045__auto___11367 = cljs.core.filter.call(null,((function (seq__10911_11353,chunk__10912_11354,count__10913_11355,i__10914_11356,seq__10903_11348,chunk__10908_11349,count__10909_11350,i__10910_11351,seq__10887,chunk__10900,count__10901,i__10902,name__10036__auto___11358,options__10037__auto___11359,invocations__10038__auto___11360,times__10039__auto___11361,times_QMARK___10040__auto___11362,check_params_QMARK___10041__auto___11363,with__10042__auto___11364,with__10042__auto___11365__$1,invocations_str__10043__auto___11366,n_11357,mode_11352,ai,take_turn_orig_val__10885,take_turn_temp_val__10886,_STAR_parent_description_STAR__orig_val__10743_11118,_STAR_parent_description_STAR__temp_val__10744_11119,description__9652__auto____$1,_STAR_parent_description_STAR__orig_val__10229_11064,_STAR_parent_description_STAR__temp_val__10230_11065,description__9652__auto___11063){
return (function (p1__10034__10046__auto__){
return speclj.stub.params_match_QMARK_.call(null,with__10042__auto___11365__$1,p1__10034__10046__auto__);
});})(seq__10911_11353,chunk__10912_11354,count__10913_11355,i__10914_11356,seq__10903_11348,chunk__10908_11349,count__10909_11350,i__10910_11351,seq__10887,chunk__10900,count__10901,i__10902,name__10036__auto___11358,options__10037__auto___11359,invocations__10038__auto___11360,times__10039__auto___11361,times_QMARK___10040__auto___11362,check_params_QMARK___10041__auto___11363,with__10042__auto___11364,with__10042__auto___11365__$1,invocations_str__10043__auto___11366,n_11357,mode_11352,ai,take_turn_orig_val__10885,take_turn_temp_val__10886,_STAR_parent_description_STAR__orig_val__10743_11118,_STAR_parent_description_STAR__temp_val__10744_11119,description__9652__auto____$1,_STAR_parent_description_STAR__orig_val__10229_11064,_STAR_parent_description_STAR__temp_val__10230_11065,description__9652__auto___11063))
,invocations__10038__auto___11360);
var matching_count__10047__auto___11368 = cljs.core.count.call(null,matching_invocations__10045__auto___11367);
if(cljs.core._EQ_.call(null,times__10039__auto___11361,matching_count__10047__auto___11368)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(times__10039__auto___11361)," ",invocations_str__10043__auto___11366.call(null,times__10039__auto___11361)," of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__10036__auto___11358)," with ",cljs.core.pr_str.call(null,with__10042__auto___11365__$1),speclj.platform.endl,"     got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(matching_count__10047__auto___11368)," ",invocations_str__10043__auto___11366.call(null,matching_count__10047__auto___11368)].join('')));
}
} else {
if(check_params_QMARK___10041__auto___11363){
if(cljs.core.truth_(cljs.core.some.call(null,((function (seq__10911_11353,chunk__10912_11354,count__10913_11355,i__10914_11356,seq__10903_11348,chunk__10908_11349,count__10909_11350,i__10910_11351,seq__10887,chunk__10900,count__10901,i__10902,name__10036__auto___11358,options__10037__auto___11359,invocations__10038__auto___11360,times__10039__auto___11361,times_QMARK___10040__auto___11362,check_params_QMARK___10041__auto___11363,with__10042__auto___11364,with__10042__auto___11365__$1,invocations_str__10043__auto___11366,n_11357,mode_11352,ai,take_turn_orig_val__10885,take_turn_temp_val__10886,_STAR_parent_description_STAR__orig_val__10743_11118,_STAR_parent_description_STAR__temp_val__10744_11119,description__9652__auto____$1,_STAR_parent_description_STAR__orig_val__10229_11064,_STAR_parent_description_STAR__temp_val__10230_11065,description__9652__auto___11063){
return (function (p1__10035__10048__auto__){
return speclj.stub.params_match_QMARK_.call(null,with__10042__auto___11365__$1,p1__10035__10048__auto__);
});})(seq__10911_11353,chunk__10912_11354,count__10913_11355,i__10914_11356,seq__10903_11348,chunk__10908_11349,count__10909_11350,i__10910_11351,seq__10887,chunk__10900,count__10901,i__10902,name__10036__auto___11358,options__10037__auto___11359,invocations__10038__auto___11360,times__10039__auto___11361,times_QMARK___10040__auto___11362,check_params_QMARK___10041__auto___11363,with__10042__auto___11364,with__10042__auto___11365__$1,invocations_str__10043__auto___11366,n_11357,mode_11352,ai,take_turn_orig_val__10885,take_turn_temp_val__10886,_STAR_parent_description_STAR__orig_val__10743_11118,_STAR_parent_description_STAR__temp_val__10744_11119,description__9652__auto____$1,_STAR_parent_description_STAR__orig_val__10229_11064,_STAR_parent_description_STAR__temp_val__10230_11065,description__9652__auto___11063))
,invocations__10038__auto___11360))){
} else {
throw (new speclj.platform.SpecFailure(["Expected: invocation of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__10036__auto___11358)," with ",cljs.core.pr_str.call(null,with__10042__auto___11365__$1),speclj.platform.endl,"     got: ",cljs.core.pr_str.call(null,invocations__10038__auto___11360)].join('')));
}
} else {
if(times_QMARK___10040__auto___11362){
if(cljs.core._EQ_.call(null,times__10039__auto___11361,cljs.core.count.call(null,invocations__10038__auto___11360))){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(times__10039__auto___11361)," ",invocations_str__10043__auto___11366.call(null,times__10039__auto___11361)," of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__10036__auto___11358),speclj.platform.endl,"     got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,invocations__10038__auto___11360))].join('')));
}
} else {
if(cljs.core.seq.call(null,invocations__10038__auto___11360)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: an invocation of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__10036__auto___11358),speclj.platform.endl,"     got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,invocations__10038__auto___11360))].join('')));
}

}
}
}

var expected__9789__auto___11369 = ((cljs.core._EQ_.call(null,(2),mode_11352))?new cljs.core.Keyword(null,"x","x",2099068185):new cljs.core.Keyword(null,"o","o",-1350007228));
var actual__9790__auto___11370 = new cljs.core.Keyword(null,"player","player",-97687400).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.screens.play_spec.state));
if(cljs.core._EQ_.call(null,expected__9789__auto___11369,actual__9790__auto___11370)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__9789__auto___11369;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9757__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9757__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__9790__auto___11370;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9757__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9757__auto__);
}
})()," (using =)"].join('')));
}

cljs.core.reset_BANG_.call(null,tic_tac_toe.screens.play_spec.state,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"board","board",-1907017633),tic_tac_toe.screens.play_spec.board_3,new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"current-screen","current-screen",-1454713691),new cljs.core.Keyword(null,"play","play",-580418022)], null));


var G__11371 = seq__10911_11353;
var G__11372 = chunk__10912_11354;
var G__11373 = count__10913_11355;
var G__11374 = (i__10914_11356 + (1));
seq__10911_11353 = G__11371;
chunk__10912_11354 = G__11372;
count__10913_11355 = G__11373;
i__10914_11356 = G__11374;
continue;
} else {
var temp__5804__auto___11375 = cljs.core.seq.call(null,seq__10911_11353);
if(temp__5804__auto___11375){
var seq__10911_11376__$1 = temp__5804__auto___11375;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10911_11376__$1)){
var c__5525__auto___11377 = cljs.core.chunk_first.call(null,seq__10911_11376__$1);
var G__11378 = cljs.core.chunk_rest.call(null,seq__10911_11376__$1);
var G__11379 = c__5525__auto___11377;
var G__11380 = cljs.core.count.call(null,c__5525__auto___11377);
var G__11381 = (0);
seq__10911_11353 = G__11378;
chunk__10912_11354 = G__11379;
count__10913_11355 = G__11380;
i__10914_11356 = G__11381;
continue;
} else {
var n_11382 = cljs.core.first.call(null,seq__10911_11376__$1);
cljs.core.swap_BANG_.call(null,tic_tac_toe.screens.play_spec.state,cljs.core.assoc,new cljs.core.Keyword(null,"mode","mode",654403691),mode_11352,new cljs.core.Keyword(null,"first-ai-level","first-ai-level",1004633644),ai,new cljs.core.Keyword(null,"player","player",-97687400),((cljs.core._EQ_.call(null,(2),mode_11352))?new cljs.core.Keyword(null,"x","x",2099068185):new cljs.core.Keyword(null,"o","o",-1350007228)),new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"gui","gui",604532813));

c3kit.wire.spec_helper.render.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tic_tac_toe.render_screen.render_screen,tic_tac_toe.screens.play_spec.state], null));

c3kit.wire.spec_helper.click_BANG_.call(null,["#index-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n_11382)].join(''));

var name__10036__auto___11383 = new cljs.core.Keyword(null,"turn","turn",75759344);
var options__10037__auto___11384 = cljs.core.PersistentArrayMap.EMPTY;
var invocations__10038__auto___11385 = speclj.stub.invocations_of.call(null,name__10036__auto___11383);
var times__10039__auto___11386 = new cljs.core.Keyword(null,"times","times",1671571467).cljs$core$IFn$_invoke$arity$1(options__10037__auto___11384);
var times_QMARK___10040__auto___11387 = typeof times__10039__auto___11386 === 'number';
var check_params_QMARK___10041__auto___11388 = cljs.core.contains_QMARK_.call(null,options__10037__auto___11384,new cljs.core.Keyword(null,"with","with",-1536296876));
var with__10042__auto___11389 = new cljs.core.Keyword(null,"with","with",-1536296876).cljs$core$IFn$_invoke$arity$1(options__10037__auto___11384);
var with__10042__auto___11390__$1 = (((with__10042__auto___11389 == null))?cljs.core.PersistentVector.EMPTY:with__10042__auto___11389);
var invocations_str__10043__auto___11391 = ((function (seq__10911_11353,chunk__10912_11354,count__10913_11355,i__10914_11356,seq__10903_11348,chunk__10908_11349,count__10909_11350,i__10910_11351,seq__10887,chunk__10900,count__10901,i__10902,name__10036__auto___11383,options__10037__auto___11384,invocations__10038__auto___11385,times__10039__auto___11386,times_QMARK___10040__auto___11387,check_params_QMARK___10041__auto___11388,with__10042__auto___11389,with__10042__auto___11390__$1,n_11382,seq__10911_11376__$1,temp__5804__auto___11375,mode_11352,ai,take_turn_orig_val__10885,take_turn_temp_val__10886,_STAR_parent_description_STAR__orig_val__10743_11118,_STAR_parent_description_STAR__temp_val__10744_11119,description__9652__auto____$1,_STAR_parent_description_STAR__orig_val__10229_11064,_STAR_parent_description_STAR__temp_val__10230_11065,description__9652__auto___11063){
return (function (p1__10033__10044__auto__){
if(cljs.core._EQ_.call(null,(1),p1__10033__10044__auto__)){
return "invocation";
} else {
return "invocations";
}
});})(seq__10911_11353,chunk__10912_11354,count__10913_11355,i__10914_11356,seq__10903_11348,chunk__10908_11349,count__10909_11350,i__10910_11351,seq__10887,chunk__10900,count__10901,i__10902,name__10036__auto___11383,options__10037__auto___11384,invocations__10038__auto___11385,times__10039__auto___11386,times_QMARK___10040__auto___11387,check_params_QMARK___10041__auto___11388,with__10042__auto___11389,with__10042__auto___11390__$1,n_11382,seq__10911_11376__$1,temp__5804__auto___11375,mode_11352,ai,take_turn_orig_val__10885,take_turn_temp_val__10886,_STAR_parent_description_STAR__orig_val__10743_11118,_STAR_parent_description_STAR__temp_val__10744_11119,description__9652__auto____$1,_STAR_parent_description_STAR__orig_val__10229_11064,_STAR_parent_description_STAR__temp_val__10230_11065,description__9652__auto___11063))
;
if(((times_QMARK___10040__auto___11387) && (check_params_QMARK___10041__auto___11388))){
var matching_invocations__10045__auto___11392 = cljs.core.filter.call(null,((function (seq__10911_11353,chunk__10912_11354,count__10913_11355,i__10914_11356,seq__10903_11348,chunk__10908_11349,count__10909_11350,i__10910_11351,seq__10887,chunk__10900,count__10901,i__10902,name__10036__auto___11383,options__10037__auto___11384,invocations__10038__auto___11385,times__10039__auto___11386,times_QMARK___10040__auto___11387,check_params_QMARK___10041__auto___11388,with__10042__auto___11389,with__10042__auto___11390__$1,invocations_str__10043__auto___11391,n_11382,seq__10911_11376__$1,temp__5804__auto___11375,mode_11352,ai,take_turn_orig_val__10885,take_turn_temp_val__10886,_STAR_parent_description_STAR__orig_val__10743_11118,_STAR_parent_description_STAR__temp_val__10744_11119,description__9652__auto____$1,_STAR_parent_description_STAR__orig_val__10229_11064,_STAR_parent_description_STAR__temp_val__10230_11065,description__9652__auto___11063){
return (function (p1__10034__10046__auto__){
return speclj.stub.params_match_QMARK_.call(null,with__10042__auto___11390__$1,p1__10034__10046__auto__);
});})(seq__10911_11353,chunk__10912_11354,count__10913_11355,i__10914_11356,seq__10903_11348,chunk__10908_11349,count__10909_11350,i__10910_11351,seq__10887,chunk__10900,count__10901,i__10902,name__10036__auto___11383,options__10037__auto___11384,invocations__10038__auto___11385,times__10039__auto___11386,times_QMARK___10040__auto___11387,check_params_QMARK___10041__auto___11388,with__10042__auto___11389,with__10042__auto___11390__$1,invocations_str__10043__auto___11391,n_11382,seq__10911_11376__$1,temp__5804__auto___11375,mode_11352,ai,take_turn_orig_val__10885,take_turn_temp_val__10886,_STAR_parent_description_STAR__orig_val__10743_11118,_STAR_parent_description_STAR__temp_val__10744_11119,description__9652__auto____$1,_STAR_parent_description_STAR__orig_val__10229_11064,_STAR_parent_description_STAR__temp_val__10230_11065,description__9652__auto___11063))
,invocations__10038__auto___11385);
var matching_count__10047__auto___11393 = cljs.core.count.call(null,matching_invocations__10045__auto___11392);
if(cljs.core._EQ_.call(null,times__10039__auto___11386,matching_count__10047__auto___11393)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(times__10039__auto___11386)," ",invocations_str__10043__auto___11391.call(null,times__10039__auto___11386)," of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__10036__auto___11383)," with ",cljs.core.pr_str.call(null,with__10042__auto___11390__$1),speclj.platform.endl,"     got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(matching_count__10047__auto___11393)," ",invocations_str__10043__auto___11391.call(null,matching_count__10047__auto___11393)].join('')));
}
} else {
if(check_params_QMARK___10041__auto___11388){
if(cljs.core.truth_(cljs.core.some.call(null,((function (seq__10911_11353,chunk__10912_11354,count__10913_11355,i__10914_11356,seq__10903_11348,chunk__10908_11349,count__10909_11350,i__10910_11351,seq__10887,chunk__10900,count__10901,i__10902,name__10036__auto___11383,options__10037__auto___11384,invocations__10038__auto___11385,times__10039__auto___11386,times_QMARK___10040__auto___11387,check_params_QMARK___10041__auto___11388,with__10042__auto___11389,with__10042__auto___11390__$1,invocations_str__10043__auto___11391,n_11382,seq__10911_11376__$1,temp__5804__auto___11375,mode_11352,ai,take_turn_orig_val__10885,take_turn_temp_val__10886,_STAR_parent_description_STAR__orig_val__10743_11118,_STAR_parent_description_STAR__temp_val__10744_11119,description__9652__auto____$1,_STAR_parent_description_STAR__orig_val__10229_11064,_STAR_parent_description_STAR__temp_val__10230_11065,description__9652__auto___11063){
return (function (p1__10035__10048__auto__){
return speclj.stub.params_match_QMARK_.call(null,with__10042__auto___11390__$1,p1__10035__10048__auto__);
});})(seq__10911_11353,chunk__10912_11354,count__10913_11355,i__10914_11356,seq__10903_11348,chunk__10908_11349,count__10909_11350,i__10910_11351,seq__10887,chunk__10900,count__10901,i__10902,name__10036__auto___11383,options__10037__auto___11384,invocations__10038__auto___11385,times__10039__auto___11386,times_QMARK___10040__auto___11387,check_params_QMARK___10041__auto___11388,with__10042__auto___11389,with__10042__auto___11390__$1,invocations_str__10043__auto___11391,n_11382,seq__10911_11376__$1,temp__5804__auto___11375,mode_11352,ai,take_turn_orig_val__10885,take_turn_temp_val__10886,_STAR_parent_description_STAR__orig_val__10743_11118,_STAR_parent_description_STAR__temp_val__10744_11119,description__9652__auto____$1,_STAR_parent_description_STAR__orig_val__10229_11064,_STAR_parent_description_STAR__temp_val__10230_11065,description__9652__auto___11063))
,invocations__10038__auto___11385))){
} else {
throw (new speclj.platform.SpecFailure(["Expected: invocation of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__10036__auto___11383)," with ",cljs.core.pr_str.call(null,with__10042__auto___11390__$1),speclj.platform.endl,"     got: ",cljs.core.pr_str.call(null,invocations__10038__auto___11385)].join('')));
}
} else {
if(times_QMARK___10040__auto___11387){
if(cljs.core._EQ_.call(null,times__10039__auto___11386,cljs.core.count.call(null,invocations__10038__auto___11385))){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(times__10039__auto___11386)," ",invocations_str__10043__auto___11391.call(null,times__10039__auto___11386)," of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__10036__auto___11383),speclj.platform.endl,"     got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,invocations__10038__auto___11385))].join('')));
}
} else {
if(cljs.core.seq.call(null,invocations__10038__auto___11385)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: an invocation of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__10036__auto___11383),speclj.platform.endl,"     got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,invocations__10038__auto___11385))].join('')));
}

}
}
}

var expected__9789__auto___11394 = ((cljs.core._EQ_.call(null,(2),mode_11352))?new cljs.core.Keyword(null,"x","x",2099068185):new cljs.core.Keyword(null,"o","o",-1350007228));
var actual__9790__auto___11395 = new cljs.core.Keyword(null,"player","player",-97687400).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.screens.play_spec.state));
if(cljs.core._EQ_.call(null,expected__9789__auto___11394,actual__9790__auto___11395)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__9789__auto___11394;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9757__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9757__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__9790__auto___11395;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9757__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9757__auto__);
}
})()," (using =)"].join('')));
}

cljs.core.reset_BANG_.call(null,tic_tac_toe.screens.play_spec.state,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"board","board",-1907017633),tic_tac_toe.screens.play_spec.board_3,new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"current-screen","current-screen",-1454713691),new cljs.core.Keyword(null,"play","play",-580418022)], null));


var G__11396 = cljs.core.next.call(null,seq__10911_11376__$1);
var G__11397 = null;
var G__11398 = (0);
var G__11399 = (0);
seq__10911_11353 = G__11396;
chunk__10912_11354 = G__11397;
count__10913_11355 = G__11398;
i__10914_11356 = G__11399;
continue;
}
} else {
}
}
break;
}

var G__11400 = seq__10903_11348;
var G__11401 = chunk__10908_11349;
var G__11402 = count__10909_11350;
var G__11403 = (i__10910_11351 + (1));
seq__10903_11348 = G__11400;
chunk__10908_11349 = G__11401;
count__10909_11350 = G__11402;
i__10910_11351 = G__11403;
continue;
} else {
var temp__5804__auto___11404 = cljs.core.seq.call(null,seq__10903_11348);
if(temp__5804__auto___11404){
var seq__10903_11405__$1 = temp__5804__auto___11404;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10903_11405__$1)){
var c__5525__auto___11406 = cljs.core.chunk_first.call(null,seq__10903_11405__$1);
var G__11407 = cljs.core.chunk_rest.call(null,seq__10903_11405__$1);
var G__11408 = c__5525__auto___11406;
var G__11409 = cljs.core.count.call(null,c__5525__auto___11406);
var G__11410 = (0);
seq__10903_11348 = G__11407;
chunk__10908_11349 = G__11408;
count__10909_11350 = G__11409;
i__10910_11351 = G__11410;
continue;
} else {
var mode_11411 = cljs.core.first.call(null,seq__10903_11405__$1);
var seq__10904_11412 = cljs.core.seq.call(null,cljs.core.range.call(null,(9)));
var chunk__10905_11413 = null;
var count__10906_11414 = (0);
var i__10907_11415 = (0);
while(true){
if((i__10907_11415 < count__10906_11414)){
var n_11416 = cljs.core._nth.call(null,chunk__10905_11413,i__10907_11415);
cljs.core.swap_BANG_.call(null,tic_tac_toe.screens.play_spec.state,cljs.core.assoc,new cljs.core.Keyword(null,"mode","mode",654403691),mode_11411,new cljs.core.Keyword(null,"first-ai-level","first-ai-level",1004633644),ai,new cljs.core.Keyword(null,"player","player",-97687400),((cljs.core._EQ_.call(null,(2),mode_11411))?new cljs.core.Keyword(null,"x","x",2099068185):new cljs.core.Keyword(null,"o","o",-1350007228)),new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"gui","gui",604532813));

c3kit.wire.spec_helper.render.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tic_tac_toe.render_screen.render_screen,tic_tac_toe.screens.play_spec.state], null));

c3kit.wire.spec_helper.click_BANG_.call(null,["#index-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n_11416)].join(''));

var name__10036__auto___11417 = new cljs.core.Keyword(null,"turn","turn",75759344);
var options__10037__auto___11418 = cljs.core.PersistentArrayMap.EMPTY;
var invocations__10038__auto___11419 = speclj.stub.invocations_of.call(null,name__10036__auto___11417);
var times__10039__auto___11420 = new cljs.core.Keyword(null,"times","times",1671571467).cljs$core$IFn$_invoke$arity$1(options__10037__auto___11418);
var times_QMARK___10040__auto___11421 = typeof times__10039__auto___11420 === 'number';
var check_params_QMARK___10041__auto___11422 = cljs.core.contains_QMARK_.call(null,options__10037__auto___11418,new cljs.core.Keyword(null,"with","with",-1536296876));
var with__10042__auto___11423 = new cljs.core.Keyword(null,"with","with",-1536296876).cljs$core$IFn$_invoke$arity$1(options__10037__auto___11418);
var with__10042__auto___11424__$1 = (((with__10042__auto___11423 == null))?cljs.core.PersistentVector.EMPTY:with__10042__auto___11423);
var invocations_str__10043__auto___11425 = ((function (seq__10904_11412,chunk__10905_11413,count__10906_11414,i__10907_11415,seq__10903_11348,chunk__10908_11349,count__10909_11350,i__10910_11351,seq__10887,chunk__10900,count__10901,i__10902,name__10036__auto___11417,options__10037__auto___11418,invocations__10038__auto___11419,times__10039__auto___11420,times_QMARK___10040__auto___11421,check_params_QMARK___10041__auto___11422,with__10042__auto___11423,with__10042__auto___11424__$1,n_11416,mode_11411,seq__10903_11405__$1,temp__5804__auto___11404,ai,take_turn_orig_val__10885,take_turn_temp_val__10886,_STAR_parent_description_STAR__orig_val__10743_11118,_STAR_parent_description_STAR__temp_val__10744_11119,description__9652__auto____$1,_STAR_parent_description_STAR__orig_val__10229_11064,_STAR_parent_description_STAR__temp_val__10230_11065,description__9652__auto___11063){
return (function (p1__10033__10044__auto__){
if(cljs.core._EQ_.call(null,(1),p1__10033__10044__auto__)){
return "invocation";
} else {
return "invocations";
}
});})(seq__10904_11412,chunk__10905_11413,count__10906_11414,i__10907_11415,seq__10903_11348,chunk__10908_11349,count__10909_11350,i__10910_11351,seq__10887,chunk__10900,count__10901,i__10902,name__10036__auto___11417,options__10037__auto___11418,invocations__10038__auto___11419,times__10039__auto___11420,times_QMARK___10040__auto___11421,check_params_QMARK___10041__auto___11422,with__10042__auto___11423,with__10042__auto___11424__$1,n_11416,mode_11411,seq__10903_11405__$1,temp__5804__auto___11404,ai,take_turn_orig_val__10885,take_turn_temp_val__10886,_STAR_parent_description_STAR__orig_val__10743_11118,_STAR_parent_description_STAR__temp_val__10744_11119,description__9652__auto____$1,_STAR_parent_description_STAR__orig_val__10229_11064,_STAR_parent_description_STAR__temp_val__10230_11065,description__9652__auto___11063))
;
if(((times_QMARK___10040__auto___11421) && (check_params_QMARK___10041__auto___11422))){
var matching_invocations__10045__auto___11426 = cljs.core.filter.call(null,((function (seq__10904_11412,chunk__10905_11413,count__10906_11414,i__10907_11415,seq__10903_11348,chunk__10908_11349,count__10909_11350,i__10910_11351,seq__10887,chunk__10900,count__10901,i__10902,name__10036__auto___11417,options__10037__auto___11418,invocations__10038__auto___11419,times__10039__auto___11420,times_QMARK___10040__auto___11421,check_params_QMARK___10041__auto___11422,with__10042__auto___11423,with__10042__auto___11424__$1,invocations_str__10043__auto___11425,n_11416,mode_11411,seq__10903_11405__$1,temp__5804__auto___11404,ai,take_turn_orig_val__10885,take_turn_temp_val__10886,_STAR_parent_description_STAR__orig_val__10743_11118,_STAR_parent_description_STAR__temp_val__10744_11119,description__9652__auto____$1,_STAR_parent_description_STAR__orig_val__10229_11064,_STAR_parent_description_STAR__temp_val__10230_11065,description__9652__auto___11063){
return (function (p1__10034__10046__auto__){
return speclj.stub.params_match_QMARK_.call(null,with__10042__auto___11424__$1,p1__10034__10046__auto__);
});})(seq__10904_11412,chunk__10905_11413,count__10906_11414,i__10907_11415,seq__10903_11348,chunk__10908_11349,count__10909_11350,i__10910_11351,seq__10887,chunk__10900,count__10901,i__10902,name__10036__auto___11417,options__10037__auto___11418,invocations__10038__auto___11419,times__10039__auto___11420,times_QMARK___10040__auto___11421,check_params_QMARK___10041__auto___11422,with__10042__auto___11423,with__10042__auto___11424__$1,invocations_str__10043__auto___11425,n_11416,mode_11411,seq__10903_11405__$1,temp__5804__auto___11404,ai,take_turn_orig_val__10885,take_turn_temp_val__10886,_STAR_parent_description_STAR__orig_val__10743_11118,_STAR_parent_description_STAR__temp_val__10744_11119,description__9652__auto____$1,_STAR_parent_description_STAR__orig_val__10229_11064,_STAR_parent_description_STAR__temp_val__10230_11065,description__9652__auto___11063))
,invocations__10038__auto___11419);
var matching_count__10047__auto___11427 = cljs.core.count.call(null,matching_invocations__10045__auto___11426);
if(cljs.core._EQ_.call(null,times__10039__auto___11420,matching_count__10047__auto___11427)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(times__10039__auto___11420)," ",invocations_str__10043__auto___11425.call(null,times__10039__auto___11420)," of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__10036__auto___11417)," with ",cljs.core.pr_str.call(null,with__10042__auto___11424__$1),speclj.platform.endl,"     got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(matching_count__10047__auto___11427)," ",invocations_str__10043__auto___11425.call(null,matching_count__10047__auto___11427)].join('')));
}
} else {
if(check_params_QMARK___10041__auto___11422){
if(cljs.core.truth_(cljs.core.some.call(null,((function (seq__10904_11412,chunk__10905_11413,count__10906_11414,i__10907_11415,seq__10903_11348,chunk__10908_11349,count__10909_11350,i__10910_11351,seq__10887,chunk__10900,count__10901,i__10902,name__10036__auto___11417,options__10037__auto___11418,invocations__10038__auto___11419,times__10039__auto___11420,times_QMARK___10040__auto___11421,check_params_QMARK___10041__auto___11422,with__10042__auto___11423,with__10042__auto___11424__$1,invocations_str__10043__auto___11425,n_11416,mode_11411,seq__10903_11405__$1,temp__5804__auto___11404,ai,take_turn_orig_val__10885,take_turn_temp_val__10886,_STAR_parent_description_STAR__orig_val__10743_11118,_STAR_parent_description_STAR__temp_val__10744_11119,description__9652__auto____$1,_STAR_parent_description_STAR__orig_val__10229_11064,_STAR_parent_description_STAR__temp_val__10230_11065,description__9652__auto___11063){
return (function (p1__10035__10048__auto__){
return speclj.stub.params_match_QMARK_.call(null,with__10042__auto___11424__$1,p1__10035__10048__auto__);
});})(seq__10904_11412,chunk__10905_11413,count__10906_11414,i__10907_11415,seq__10903_11348,chunk__10908_11349,count__10909_11350,i__10910_11351,seq__10887,chunk__10900,count__10901,i__10902,name__10036__auto___11417,options__10037__auto___11418,invocations__10038__auto___11419,times__10039__auto___11420,times_QMARK___10040__auto___11421,check_params_QMARK___10041__auto___11422,with__10042__auto___11423,with__10042__auto___11424__$1,invocations_str__10043__auto___11425,n_11416,mode_11411,seq__10903_11405__$1,temp__5804__auto___11404,ai,take_turn_orig_val__10885,take_turn_temp_val__10886,_STAR_parent_description_STAR__orig_val__10743_11118,_STAR_parent_description_STAR__temp_val__10744_11119,description__9652__auto____$1,_STAR_parent_description_STAR__orig_val__10229_11064,_STAR_parent_description_STAR__temp_val__10230_11065,description__9652__auto___11063))
,invocations__10038__auto___11419))){
} else {
throw (new speclj.platform.SpecFailure(["Expected: invocation of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__10036__auto___11417)," with ",cljs.core.pr_str.call(null,with__10042__auto___11424__$1),speclj.platform.endl,"     got: ",cljs.core.pr_str.call(null,invocations__10038__auto___11419)].join('')));
}
} else {
if(times_QMARK___10040__auto___11421){
if(cljs.core._EQ_.call(null,times__10039__auto___11420,cljs.core.count.call(null,invocations__10038__auto___11419))){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(times__10039__auto___11420)," ",invocations_str__10043__auto___11425.call(null,times__10039__auto___11420)," of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__10036__auto___11417),speclj.platform.endl,"     got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,invocations__10038__auto___11419))].join('')));
}
} else {
if(cljs.core.seq.call(null,invocations__10038__auto___11419)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: an invocation of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__10036__auto___11417),speclj.platform.endl,"     got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,invocations__10038__auto___11419))].join('')));
}

}
}
}

var expected__9789__auto___11428 = ((cljs.core._EQ_.call(null,(2),mode_11411))?new cljs.core.Keyword(null,"x","x",2099068185):new cljs.core.Keyword(null,"o","o",-1350007228));
var actual__9790__auto___11429 = new cljs.core.Keyword(null,"player","player",-97687400).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.screens.play_spec.state));
if(cljs.core._EQ_.call(null,expected__9789__auto___11428,actual__9790__auto___11429)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__9789__auto___11428;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9757__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9757__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__9790__auto___11429;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9757__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9757__auto__);
}
})()," (using =)"].join('')));
}

cljs.core.reset_BANG_.call(null,tic_tac_toe.screens.play_spec.state,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"board","board",-1907017633),tic_tac_toe.screens.play_spec.board_3,new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"current-screen","current-screen",-1454713691),new cljs.core.Keyword(null,"play","play",-580418022)], null));


var G__11430 = seq__10904_11412;
var G__11431 = chunk__10905_11413;
var G__11432 = count__10906_11414;
var G__11433 = (i__10907_11415 + (1));
seq__10904_11412 = G__11430;
chunk__10905_11413 = G__11431;
count__10906_11414 = G__11432;
i__10907_11415 = G__11433;
continue;
} else {
var temp__5804__auto___11434__$1 = cljs.core.seq.call(null,seq__10904_11412);
if(temp__5804__auto___11434__$1){
var seq__10904_11435__$1 = temp__5804__auto___11434__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10904_11435__$1)){
var c__5525__auto___11436 = cljs.core.chunk_first.call(null,seq__10904_11435__$1);
var G__11437 = cljs.core.chunk_rest.call(null,seq__10904_11435__$1);
var G__11438 = c__5525__auto___11436;
var G__11439 = cljs.core.count.call(null,c__5525__auto___11436);
var G__11440 = (0);
seq__10904_11412 = G__11437;
chunk__10905_11413 = G__11438;
count__10906_11414 = G__11439;
i__10907_11415 = G__11440;
continue;
} else {
var n_11441 = cljs.core.first.call(null,seq__10904_11435__$1);
cljs.core.swap_BANG_.call(null,tic_tac_toe.screens.play_spec.state,cljs.core.assoc,new cljs.core.Keyword(null,"mode","mode",654403691),mode_11411,new cljs.core.Keyword(null,"first-ai-level","first-ai-level",1004633644),ai,new cljs.core.Keyword(null,"player","player",-97687400),((cljs.core._EQ_.call(null,(2),mode_11411))?new cljs.core.Keyword(null,"x","x",2099068185):new cljs.core.Keyword(null,"o","o",-1350007228)),new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"gui","gui",604532813));

c3kit.wire.spec_helper.render.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tic_tac_toe.render_screen.render_screen,tic_tac_toe.screens.play_spec.state], null));

c3kit.wire.spec_helper.click_BANG_.call(null,["#index-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n_11441)].join(''));

var name__10036__auto___11442 = new cljs.core.Keyword(null,"turn","turn",75759344);
var options__10037__auto___11443 = cljs.core.PersistentArrayMap.EMPTY;
var invocations__10038__auto___11444 = speclj.stub.invocations_of.call(null,name__10036__auto___11442);
var times__10039__auto___11445 = new cljs.core.Keyword(null,"times","times",1671571467).cljs$core$IFn$_invoke$arity$1(options__10037__auto___11443);
var times_QMARK___10040__auto___11446 = typeof times__10039__auto___11445 === 'number';
var check_params_QMARK___10041__auto___11447 = cljs.core.contains_QMARK_.call(null,options__10037__auto___11443,new cljs.core.Keyword(null,"with","with",-1536296876));
var with__10042__auto___11448 = new cljs.core.Keyword(null,"with","with",-1536296876).cljs$core$IFn$_invoke$arity$1(options__10037__auto___11443);
var with__10042__auto___11449__$1 = (((with__10042__auto___11448 == null))?cljs.core.PersistentVector.EMPTY:with__10042__auto___11448);
var invocations_str__10043__auto___11450 = ((function (seq__10904_11412,chunk__10905_11413,count__10906_11414,i__10907_11415,seq__10903_11348,chunk__10908_11349,count__10909_11350,i__10910_11351,seq__10887,chunk__10900,count__10901,i__10902,name__10036__auto___11442,options__10037__auto___11443,invocations__10038__auto___11444,times__10039__auto___11445,times_QMARK___10040__auto___11446,check_params_QMARK___10041__auto___11447,with__10042__auto___11448,with__10042__auto___11449__$1,n_11441,seq__10904_11435__$1,temp__5804__auto___11434__$1,mode_11411,seq__10903_11405__$1,temp__5804__auto___11404,ai,take_turn_orig_val__10885,take_turn_temp_val__10886,_STAR_parent_description_STAR__orig_val__10743_11118,_STAR_parent_description_STAR__temp_val__10744_11119,description__9652__auto____$1,_STAR_parent_description_STAR__orig_val__10229_11064,_STAR_parent_description_STAR__temp_val__10230_11065,description__9652__auto___11063){
return (function (p1__10033__10044__auto__){
if(cljs.core._EQ_.call(null,(1),p1__10033__10044__auto__)){
return "invocation";
} else {
return "invocations";
}
});})(seq__10904_11412,chunk__10905_11413,count__10906_11414,i__10907_11415,seq__10903_11348,chunk__10908_11349,count__10909_11350,i__10910_11351,seq__10887,chunk__10900,count__10901,i__10902,name__10036__auto___11442,options__10037__auto___11443,invocations__10038__auto___11444,times__10039__auto___11445,times_QMARK___10040__auto___11446,check_params_QMARK___10041__auto___11447,with__10042__auto___11448,with__10042__auto___11449__$1,n_11441,seq__10904_11435__$1,temp__5804__auto___11434__$1,mode_11411,seq__10903_11405__$1,temp__5804__auto___11404,ai,take_turn_orig_val__10885,take_turn_temp_val__10886,_STAR_parent_description_STAR__orig_val__10743_11118,_STAR_parent_description_STAR__temp_val__10744_11119,description__9652__auto____$1,_STAR_parent_description_STAR__orig_val__10229_11064,_STAR_parent_description_STAR__temp_val__10230_11065,description__9652__auto___11063))
;
if(((times_QMARK___10040__auto___11446) && (check_params_QMARK___10041__auto___11447))){
var matching_invocations__10045__auto___11451 = cljs.core.filter.call(null,((function (seq__10904_11412,chunk__10905_11413,count__10906_11414,i__10907_11415,seq__10903_11348,chunk__10908_11349,count__10909_11350,i__10910_11351,seq__10887,chunk__10900,count__10901,i__10902,name__10036__auto___11442,options__10037__auto___11443,invocations__10038__auto___11444,times__10039__auto___11445,times_QMARK___10040__auto___11446,check_params_QMARK___10041__auto___11447,with__10042__auto___11448,with__10042__auto___11449__$1,invocations_str__10043__auto___11450,n_11441,seq__10904_11435__$1,temp__5804__auto___11434__$1,mode_11411,seq__10903_11405__$1,temp__5804__auto___11404,ai,take_turn_orig_val__10885,take_turn_temp_val__10886,_STAR_parent_description_STAR__orig_val__10743_11118,_STAR_parent_description_STAR__temp_val__10744_11119,description__9652__auto____$1,_STAR_parent_description_STAR__orig_val__10229_11064,_STAR_parent_description_STAR__temp_val__10230_11065,description__9652__auto___11063){
return (function (p1__10034__10046__auto__){
return speclj.stub.params_match_QMARK_.call(null,with__10042__auto___11449__$1,p1__10034__10046__auto__);
});})(seq__10904_11412,chunk__10905_11413,count__10906_11414,i__10907_11415,seq__10903_11348,chunk__10908_11349,count__10909_11350,i__10910_11351,seq__10887,chunk__10900,count__10901,i__10902,name__10036__auto___11442,options__10037__auto___11443,invocations__10038__auto___11444,times__10039__auto___11445,times_QMARK___10040__auto___11446,check_params_QMARK___10041__auto___11447,with__10042__auto___11448,with__10042__auto___11449__$1,invocations_str__10043__auto___11450,n_11441,seq__10904_11435__$1,temp__5804__auto___11434__$1,mode_11411,seq__10903_11405__$1,temp__5804__auto___11404,ai,take_turn_orig_val__10885,take_turn_temp_val__10886,_STAR_parent_description_STAR__orig_val__10743_11118,_STAR_parent_description_STAR__temp_val__10744_11119,description__9652__auto____$1,_STAR_parent_description_STAR__orig_val__10229_11064,_STAR_parent_description_STAR__temp_val__10230_11065,description__9652__auto___11063))
,invocations__10038__auto___11444);
var matching_count__10047__auto___11452 = cljs.core.count.call(null,matching_invocations__10045__auto___11451);
if(cljs.core._EQ_.call(null,times__10039__auto___11445,matching_count__10047__auto___11452)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(times__10039__auto___11445)," ",invocations_str__10043__auto___11450.call(null,times__10039__auto___11445)," of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__10036__auto___11442)," with ",cljs.core.pr_str.call(null,with__10042__auto___11449__$1),speclj.platform.endl,"     got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(matching_count__10047__auto___11452)," ",invocations_str__10043__auto___11450.call(null,matching_count__10047__auto___11452)].join('')));
}
} else {
if(check_params_QMARK___10041__auto___11447){
if(cljs.core.truth_(cljs.core.some.call(null,((function (seq__10904_11412,chunk__10905_11413,count__10906_11414,i__10907_11415,seq__10903_11348,chunk__10908_11349,count__10909_11350,i__10910_11351,seq__10887,chunk__10900,count__10901,i__10902,name__10036__auto___11442,options__10037__auto___11443,invocations__10038__auto___11444,times__10039__auto___11445,times_QMARK___10040__auto___11446,check_params_QMARK___10041__auto___11447,with__10042__auto___11448,with__10042__auto___11449__$1,invocations_str__10043__auto___11450,n_11441,seq__10904_11435__$1,temp__5804__auto___11434__$1,mode_11411,seq__10903_11405__$1,temp__5804__auto___11404,ai,take_turn_orig_val__10885,take_turn_temp_val__10886,_STAR_parent_description_STAR__orig_val__10743_11118,_STAR_parent_description_STAR__temp_val__10744_11119,description__9652__auto____$1,_STAR_parent_description_STAR__orig_val__10229_11064,_STAR_parent_description_STAR__temp_val__10230_11065,description__9652__auto___11063){
return (function (p1__10035__10048__auto__){
return speclj.stub.params_match_QMARK_.call(null,with__10042__auto___11449__$1,p1__10035__10048__auto__);
});})(seq__10904_11412,chunk__10905_11413,count__10906_11414,i__10907_11415,seq__10903_11348,chunk__10908_11349,count__10909_11350,i__10910_11351,seq__10887,chunk__10900,count__10901,i__10902,name__10036__auto___11442,options__10037__auto___11443,invocations__10038__auto___11444,times__10039__auto___11445,times_QMARK___10040__auto___11446,check_params_QMARK___10041__auto___11447,with__10042__auto___11448,with__10042__auto___11449__$1,invocations_str__10043__auto___11450,n_11441,seq__10904_11435__$1,temp__5804__auto___11434__$1,mode_11411,seq__10903_11405__$1,temp__5804__auto___11404,ai,take_turn_orig_val__10885,take_turn_temp_val__10886,_STAR_parent_description_STAR__orig_val__10743_11118,_STAR_parent_description_STAR__temp_val__10744_11119,description__9652__auto____$1,_STAR_parent_description_STAR__orig_val__10229_11064,_STAR_parent_description_STAR__temp_val__10230_11065,description__9652__auto___11063))
,invocations__10038__auto___11444))){
} else {
throw (new speclj.platform.SpecFailure(["Expected: invocation of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__10036__auto___11442)," with ",cljs.core.pr_str.call(null,with__10042__auto___11449__$1),speclj.platform.endl,"     got: ",cljs.core.pr_str.call(null,invocations__10038__auto___11444)].join('')));
}
} else {
if(times_QMARK___10040__auto___11446){
if(cljs.core._EQ_.call(null,times__10039__auto___11445,cljs.core.count.call(null,invocations__10038__auto___11444))){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(times__10039__auto___11445)," ",invocations_str__10043__auto___11450.call(null,times__10039__auto___11445)," of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__10036__auto___11442),speclj.platform.endl,"     got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,invocations__10038__auto___11444))].join('')));
}
} else {
if(cljs.core.seq.call(null,invocations__10038__auto___11444)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: an invocation of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__10036__auto___11442),speclj.platform.endl,"     got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,invocations__10038__auto___11444))].join('')));
}

}
}
}

var expected__9789__auto___11453 = ((cljs.core._EQ_.call(null,(2),mode_11411))?new cljs.core.Keyword(null,"x","x",2099068185):new cljs.core.Keyword(null,"o","o",-1350007228));
var actual__9790__auto___11454 = new cljs.core.Keyword(null,"player","player",-97687400).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.screens.play_spec.state));
if(cljs.core._EQ_.call(null,expected__9789__auto___11453,actual__9790__auto___11454)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__9789__auto___11453;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9757__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9757__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__9790__auto___11454;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9757__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9757__auto__);
}
})()," (using =)"].join('')));
}

cljs.core.reset_BANG_.call(null,tic_tac_toe.screens.play_spec.state,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"board","board",-1907017633),tic_tac_toe.screens.play_spec.board_3,new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"current-screen","current-screen",-1454713691),new cljs.core.Keyword(null,"play","play",-580418022)], null));


var G__11455 = cljs.core.next.call(null,seq__10904_11435__$1);
var G__11456 = null;
var G__11457 = (0);
var G__11458 = (0);
seq__10904_11412 = G__11455;
chunk__10905_11413 = G__11456;
count__10906_11414 = G__11457;
i__10907_11415 = G__11458;
continue;
}
} else {
}
}
break;
}

var G__11459 = cljs.core.next.call(null,seq__10903_11405__$1);
var G__11460 = null;
var G__11461 = (0);
var G__11462 = (0);
seq__10903_11348 = G__11459;
chunk__10908_11349 = G__11460;
count__10909_11350 = G__11461;
i__10910_11351 = G__11462;
continue;
}
} else {
}
}
break;
}

var G__11463 = seq__10887;
var G__11464 = chunk__10900;
var G__11465 = count__10901;
var G__11466 = (i__10902 + (1));
seq__10887 = G__11463;
chunk__10900 = G__11464;
count__10901 = G__11465;
i__10902 = G__11466;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__10887);
if(temp__5804__auto__){
var seq__10887__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10887__$1)){
var c__5525__auto__ = cljs.core.chunk_first.call(null,seq__10887__$1);
var G__11467 = cljs.core.chunk_rest.call(null,seq__10887__$1);
var G__11468 = c__5525__auto__;
var G__11469 = cljs.core.count.call(null,c__5525__auto__);
var G__11470 = (0);
seq__10887 = G__11467;
chunk__10900 = G__11468;
count__10901 = G__11469;
i__10902 = G__11470;
continue;
} else {
var ai = cljs.core.first.call(null,seq__10887__$1);
var seq__10888_11471 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(3)], null));
var chunk__10893_11472 = null;
var count__10894_11473 = (0);
var i__10895_11474 = (0);
while(true){
if((i__10895_11474 < count__10894_11473)){
var mode_11475 = cljs.core._nth.call(null,chunk__10893_11472,i__10895_11474);
var seq__10896_11476 = cljs.core.seq.call(null,cljs.core.range.call(null,(9)));
var chunk__10897_11477 = null;
var count__10898_11478 = (0);
var i__10899_11479 = (0);
while(true){
if((i__10899_11479 < count__10898_11478)){
var n_11480 = cljs.core._nth.call(null,chunk__10897_11477,i__10899_11479);
cljs.core.swap_BANG_.call(null,tic_tac_toe.screens.play_spec.state,cljs.core.assoc,new cljs.core.Keyword(null,"mode","mode",654403691),mode_11475,new cljs.core.Keyword(null,"first-ai-level","first-ai-level",1004633644),ai,new cljs.core.Keyword(null,"player","player",-97687400),((cljs.core._EQ_.call(null,(2),mode_11475))?new cljs.core.Keyword(null,"x","x",2099068185):new cljs.core.Keyword(null,"o","o",-1350007228)),new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"gui","gui",604532813));

c3kit.wire.spec_helper.render.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tic_tac_toe.render_screen.render_screen,tic_tac_toe.screens.play_spec.state], null));

c3kit.wire.spec_helper.click_BANG_.call(null,["#index-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n_11480)].join(''));

var name__10036__auto___11481 = new cljs.core.Keyword(null,"turn","turn",75759344);
var options__10037__auto___11482 = cljs.core.PersistentArrayMap.EMPTY;
var invocations__10038__auto___11483 = speclj.stub.invocations_of.call(null,name__10036__auto___11481);
var times__10039__auto___11484 = new cljs.core.Keyword(null,"times","times",1671571467).cljs$core$IFn$_invoke$arity$1(options__10037__auto___11482);
var times_QMARK___10040__auto___11485 = typeof times__10039__auto___11484 === 'number';
var check_params_QMARK___10041__auto___11486 = cljs.core.contains_QMARK_.call(null,options__10037__auto___11482,new cljs.core.Keyword(null,"with","with",-1536296876));
var with__10042__auto___11487 = new cljs.core.Keyword(null,"with","with",-1536296876).cljs$core$IFn$_invoke$arity$1(options__10037__auto___11482);
var with__10042__auto___11488__$1 = (((with__10042__auto___11487 == null))?cljs.core.PersistentVector.EMPTY:with__10042__auto___11487);
var invocations_str__10043__auto___11489 = ((function (seq__10896_11476,chunk__10897_11477,count__10898_11478,i__10899_11479,seq__10888_11471,chunk__10893_11472,count__10894_11473,i__10895_11474,seq__10887,chunk__10900,count__10901,i__10902,name__10036__auto___11481,options__10037__auto___11482,invocations__10038__auto___11483,times__10039__auto___11484,times_QMARK___10040__auto___11485,check_params_QMARK___10041__auto___11486,with__10042__auto___11487,with__10042__auto___11488__$1,n_11480,mode_11475,ai,seq__10887__$1,temp__5804__auto__,take_turn_orig_val__10885,take_turn_temp_val__10886,_STAR_parent_description_STAR__orig_val__10743_11118,_STAR_parent_description_STAR__temp_val__10744_11119,description__9652__auto____$1,_STAR_parent_description_STAR__orig_val__10229_11064,_STAR_parent_description_STAR__temp_val__10230_11065,description__9652__auto___11063){
return (function (p1__10033__10044__auto__){
if(cljs.core._EQ_.call(null,(1),p1__10033__10044__auto__)){
return "invocation";
} else {
return "invocations";
}
});})(seq__10896_11476,chunk__10897_11477,count__10898_11478,i__10899_11479,seq__10888_11471,chunk__10893_11472,count__10894_11473,i__10895_11474,seq__10887,chunk__10900,count__10901,i__10902,name__10036__auto___11481,options__10037__auto___11482,invocations__10038__auto___11483,times__10039__auto___11484,times_QMARK___10040__auto___11485,check_params_QMARK___10041__auto___11486,with__10042__auto___11487,with__10042__auto___11488__$1,n_11480,mode_11475,ai,seq__10887__$1,temp__5804__auto__,take_turn_orig_val__10885,take_turn_temp_val__10886,_STAR_parent_description_STAR__orig_val__10743_11118,_STAR_parent_description_STAR__temp_val__10744_11119,description__9652__auto____$1,_STAR_parent_description_STAR__orig_val__10229_11064,_STAR_parent_description_STAR__temp_val__10230_11065,description__9652__auto___11063))
;
if(((times_QMARK___10040__auto___11485) && (check_params_QMARK___10041__auto___11486))){
var matching_invocations__10045__auto___11490 = cljs.core.filter.call(null,((function (seq__10896_11476,chunk__10897_11477,count__10898_11478,i__10899_11479,seq__10888_11471,chunk__10893_11472,count__10894_11473,i__10895_11474,seq__10887,chunk__10900,count__10901,i__10902,name__10036__auto___11481,options__10037__auto___11482,invocations__10038__auto___11483,times__10039__auto___11484,times_QMARK___10040__auto___11485,check_params_QMARK___10041__auto___11486,with__10042__auto___11487,with__10042__auto___11488__$1,invocations_str__10043__auto___11489,n_11480,mode_11475,ai,seq__10887__$1,temp__5804__auto__,take_turn_orig_val__10885,take_turn_temp_val__10886,_STAR_parent_description_STAR__orig_val__10743_11118,_STAR_parent_description_STAR__temp_val__10744_11119,description__9652__auto____$1,_STAR_parent_description_STAR__orig_val__10229_11064,_STAR_parent_description_STAR__temp_val__10230_11065,description__9652__auto___11063){
return (function (p1__10034__10046__auto__){
return speclj.stub.params_match_QMARK_.call(null,with__10042__auto___11488__$1,p1__10034__10046__auto__);
});})(seq__10896_11476,chunk__10897_11477,count__10898_11478,i__10899_11479,seq__10888_11471,chunk__10893_11472,count__10894_11473,i__10895_11474,seq__10887,chunk__10900,count__10901,i__10902,name__10036__auto___11481,options__10037__auto___11482,invocations__10038__auto___11483,times__10039__auto___11484,times_QMARK___10040__auto___11485,check_params_QMARK___10041__auto___11486,with__10042__auto___11487,with__10042__auto___11488__$1,invocations_str__10043__auto___11489,n_11480,mode_11475,ai,seq__10887__$1,temp__5804__auto__,take_turn_orig_val__10885,take_turn_temp_val__10886,_STAR_parent_description_STAR__orig_val__10743_11118,_STAR_parent_description_STAR__temp_val__10744_11119,description__9652__auto____$1,_STAR_parent_description_STAR__orig_val__10229_11064,_STAR_parent_description_STAR__temp_val__10230_11065,description__9652__auto___11063))
,invocations__10038__auto___11483);
var matching_count__10047__auto___11491 = cljs.core.count.call(null,matching_invocations__10045__auto___11490);
if(cljs.core._EQ_.call(null,times__10039__auto___11484,matching_count__10047__auto___11491)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(times__10039__auto___11484)," ",invocations_str__10043__auto___11489.call(null,times__10039__auto___11484)," of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__10036__auto___11481)," with ",cljs.core.pr_str.call(null,with__10042__auto___11488__$1),speclj.platform.endl,"     got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(matching_count__10047__auto___11491)," ",invocations_str__10043__auto___11489.call(null,matching_count__10047__auto___11491)].join('')));
}
} else {
if(check_params_QMARK___10041__auto___11486){
if(cljs.core.truth_(cljs.core.some.call(null,((function (seq__10896_11476,chunk__10897_11477,count__10898_11478,i__10899_11479,seq__10888_11471,chunk__10893_11472,count__10894_11473,i__10895_11474,seq__10887,chunk__10900,count__10901,i__10902,name__10036__auto___11481,options__10037__auto___11482,invocations__10038__auto___11483,times__10039__auto___11484,times_QMARK___10040__auto___11485,check_params_QMARK___10041__auto___11486,with__10042__auto___11487,with__10042__auto___11488__$1,invocations_str__10043__auto___11489,n_11480,mode_11475,ai,seq__10887__$1,temp__5804__auto__,take_turn_orig_val__10885,take_turn_temp_val__10886,_STAR_parent_description_STAR__orig_val__10743_11118,_STAR_parent_description_STAR__temp_val__10744_11119,description__9652__auto____$1,_STAR_parent_description_STAR__orig_val__10229_11064,_STAR_parent_description_STAR__temp_val__10230_11065,description__9652__auto___11063){
return (function (p1__10035__10048__auto__){
return speclj.stub.params_match_QMARK_.call(null,with__10042__auto___11488__$1,p1__10035__10048__auto__);
});})(seq__10896_11476,chunk__10897_11477,count__10898_11478,i__10899_11479,seq__10888_11471,chunk__10893_11472,count__10894_11473,i__10895_11474,seq__10887,chunk__10900,count__10901,i__10902,name__10036__auto___11481,options__10037__auto___11482,invocations__10038__auto___11483,times__10039__auto___11484,times_QMARK___10040__auto___11485,check_params_QMARK___10041__auto___11486,with__10042__auto___11487,with__10042__auto___11488__$1,invocations_str__10043__auto___11489,n_11480,mode_11475,ai,seq__10887__$1,temp__5804__auto__,take_turn_orig_val__10885,take_turn_temp_val__10886,_STAR_parent_description_STAR__orig_val__10743_11118,_STAR_parent_description_STAR__temp_val__10744_11119,description__9652__auto____$1,_STAR_parent_description_STAR__orig_val__10229_11064,_STAR_parent_description_STAR__temp_val__10230_11065,description__9652__auto___11063))
,invocations__10038__auto___11483))){
} else {
throw (new speclj.platform.SpecFailure(["Expected: invocation of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__10036__auto___11481)," with ",cljs.core.pr_str.call(null,with__10042__auto___11488__$1),speclj.platform.endl,"     got: ",cljs.core.pr_str.call(null,invocations__10038__auto___11483)].join('')));
}
} else {
if(times_QMARK___10040__auto___11485){
if(cljs.core._EQ_.call(null,times__10039__auto___11484,cljs.core.count.call(null,invocations__10038__auto___11483))){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(times__10039__auto___11484)," ",invocations_str__10043__auto___11489.call(null,times__10039__auto___11484)," of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__10036__auto___11481),speclj.platform.endl,"     got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,invocations__10038__auto___11483))].join('')));
}
} else {
if(cljs.core.seq.call(null,invocations__10038__auto___11483)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: an invocation of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__10036__auto___11481),speclj.platform.endl,"     got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,invocations__10038__auto___11483))].join('')));
}

}
}
}

var expected__9789__auto___11492 = ((cljs.core._EQ_.call(null,(2),mode_11475))?new cljs.core.Keyword(null,"x","x",2099068185):new cljs.core.Keyword(null,"o","o",-1350007228));
var actual__9790__auto___11493 = new cljs.core.Keyword(null,"player","player",-97687400).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.screens.play_spec.state));
if(cljs.core._EQ_.call(null,expected__9789__auto___11492,actual__9790__auto___11493)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__9789__auto___11492;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9757__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9757__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__9790__auto___11493;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9757__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9757__auto__);
}
})()," (using =)"].join('')));
}

cljs.core.reset_BANG_.call(null,tic_tac_toe.screens.play_spec.state,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"board","board",-1907017633),tic_tac_toe.screens.play_spec.board_3,new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"current-screen","current-screen",-1454713691),new cljs.core.Keyword(null,"play","play",-580418022)], null));


var G__11494 = seq__10896_11476;
var G__11495 = chunk__10897_11477;
var G__11496 = count__10898_11478;
var G__11497 = (i__10899_11479 + (1));
seq__10896_11476 = G__11494;
chunk__10897_11477 = G__11495;
count__10898_11478 = G__11496;
i__10899_11479 = G__11497;
continue;
} else {
var temp__5804__auto___11498__$1 = cljs.core.seq.call(null,seq__10896_11476);
if(temp__5804__auto___11498__$1){
var seq__10896_11499__$1 = temp__5804__auto___11498__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10896_11499__$1)){
var c__5525__auto___11500 = cljs.core.chunk_first.call(null,seq__10896_11499__$1);
var G__11501 = cljs.core.chunk_rest.call(null,seq__10896_11499__$1);
var G__11502 = c__5525__auto___11500;
var G__11503 = cljs.core.count.call(null,c__5525__auto___11500);
var G__11504 = (0);
seq__10896_11476 = G__11501;
chunk__10897_11477 = G__11502;
count__10898_11478 = G__11503;
i__10899_11479 = G__11504;
continue;
} else {
var n_11505 = cljs.core.first.call(null,seq__10896_11499__$1);
cljs.core.swap_BANG_.call(null,tic_tac_toe.screens.play_spec.state,cljs.core.assoc,new cljs.core.Keyword(null,"mode","mode",654403691),mode_11475,new cljs.core.Keyword(null,"first-ai-level","first-ai-level",1004633644),ai,new cljs.core.Keyword(null,"player","player",-97687400),((cljs.core._EQ_.call(null,(2),mode_11475))?new cljs.core.Keyword(null,"x","x",2099068185):new cljs.core.Keyword(null,"o","o",-1350007228)),new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"gui","gui",604532813));

c3kit.wire.spec_helper.render.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tic_tac_toe.render_screen.render_screen,tic_tac_toe.screens.play_spec.state], null));

c3kit.wire.spec_helper.click_BANG_.call(null,["#index-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n_11505)].join(''));

var name__10036__auto___11506 = new cljs.core.Keyword(null,"turn","turn",75759344);
var options__10037__auto___11507 = cljs.core.PersistentArrayMap.EMPTY;
var invocations__10038__auto___11508 = speclj.stub.invocations_of.call(null,name__10036__auto___11506);
var times__10039__auto___11509 = new cljs.core.Keyword(null,"times","times",1671571467).cljs$core$IFn$_invoke$arity$1(options__10037__auto___11507);
var times_QMARK___10040__auto___11510 = typeof times__10039__auto___11509 === 'number';
var check_params_QMARK___10041__auto___11511 = cljs.core.contains_QMARK_.call(null,options__10037__auto___11507,new cljs.core.Keyword(null,"with","with",-1536296876));
var with__10042__auto___11512 = new cljs.core.Keyword(null,"with","with",-1536296876).cljs$core$IFn$_invoke$arity$1(options__10037__auto___11507);
var with__10042__auto___11513__$1 = (((with__10042__auto___11512 == null))?cljs.core.PersistentVector.EMPTY:with__10042__auto___11512);
var invocations_str__10043__auto___11514 = ((function (seq__10896_11476,chunk__10897_11477,count__10898_11478,i__10899_11479,seq__10888_11471,chunk__10893_11472,count__10894_11473,i__10895_11474,seq__10887,chunk__10900,count__10901,i__10902,name__10036__auto___11506,options__10037__auto___11507,invocations__10038__auto___11508,times__10039__auto___11509,times_QMARK___10040__auto___11510,check_params_QMARK___10041__auto___11511,with__10042__auto___11512,with__10042__auto___11513__$1,n_11505,seq__10896_11499__$1,temp__5804__auto___11498__$1,mode_11475,ai,seq__10887__$1,temp__5804__auto__,take_turn_orig_val__10885,take_turn_temp_val__10886,_STAR_parent_description_STAR__orig_val__10743_11118,_STAR_parent_description_STAR__temp_val__10744_11119,description__9652__auto____$1,_STAR_parent_description_STAR__orig_val__10229_11064,_STAR_parent_description_STAR__temp_val__10230_11065,description__9652__auto___11063){
return (function (p1__10033__10044__auto__){
if(cljs.core._EQ_.call(null,(1),p1__10033__10044__auto__)){
return "invocation";
} else {
return "invocations";
}
});})(seq__10896_11476,chunk__10897_11477,count__10898_11478,i__10899_11479,seq__10888_11471,chunk__10893_11472,count__10894_11473,i__10895_11474,seq__10887,chunk__10900,count__10901,i__10902,name__10036__auto___11506,options__10037__auto___11507,invocations__10038__auto___11508,times__10039__auto___11509,times_QMARK___10040__auto___11510,check_params_QMARK___10041__auto___11511,with__10042__auto___11512,with__10042__auto___11513__$1,n_11505,seq__10896_11499__$1,temp__5804__auto___11498__$1,mode_11475,ai,seq__10887__$1,temp__5804__auto__,take_turn_orig_val__10885,take_turn_temp_val__10886,_STAR_parent_description_STAR__orig_val__10743_11118,_STAR_parent_description_STAR__temp_val__10744_11119,description__9652__auto____$1,_STAR_parent_description_STAR__orig_val__10229_11064,_STAR_parent_description_STAR__temp_val__10230_11065,description__9652__auto___11063))
;
if(((times_QMARK___10040__auto___11510) && (check_params_QMARK___10041__auto___11511))){
var matching_invocations__10045__auto___11515 = cljs.core.filter.call(null,((function (seq__10896_11476,chunk__10897_11477,count__10898_11478,i__10899_11479,seq__10888_11471,chunk__10893_11472,count__10894_11473,i__10895_11474,seq__10887,chunk__10900,count__10901,i__10902,name__10036__auto___11506,options__10037__auto___11507,invocations__10038__auto___11508,times__10039__auto___11509,times_QMARK___10040__auto___11510,check_params_QMARK___10041__auto___11511,with__10042__auto___11512,with__10042__auto___11513__$1,invocations_str__10043__auto___11514,n_11505,seq__10896_11499__$1,temp__5804__auto___11498__$1,mode_11475,ai,seq__10887__$1,temp__5804__auto__,take_turn_orig_val__10885,take_turn_temp_val__10886,_STAR_parent_description_STAR__orig_val__10743_11118,_STAR_parent_description_STAR__temp_val__10744_11119,description__9652__auto____$1,_STAR_parent_description_STAR__orig_val__10229_11064,_STAR_parent_description_STAR__temp_val__10230_11065,description__9652__auto___11063){
return (function (p1__10034__10046__auto__){
return speclj.stub.params_match_QMARK_.call(null,with__10042__auto___11513__$1,p1__10034__10046__auto__);
});})(seq__10896_11476,chunk__10897_11477,count__10898_11478,i__10899_11479,seq__10888_11471,chunk__10893_11472,count__10894_11473,i__10895_11474,seq__10887,chunk__10900,count__10901,i__10902,name__10036__auto___11506,options__10037__auto___11507,invocations__10038__auto___11508,times__10039__auto___11509,times_QMARK___10040__auto___11510,check_params_QMARK___10041__auto___11511,with__10042__auto___11512,with__10042__auto___11513__$1,invocations_str__10043__auto___11514,n_11505,seq__10896_11499__$1,temp__5804__auto___11498__$1,mode_11475,ai,seq__10887__$1,temp__5804__auto__,take_turn_orig_val__10885,take_turn_temp_val__10886,_STAR_parent_description_STAR__orig_val__10743_11118,_STAR_parent_description_STAR__temp_val__10744_11119,description__9652__auto____$1,_STAR_parent_description_STAR__orig_val__10229_11064,_STAR_parent_description_STAR__temp_val__10230_11065,description__9652__auto___11063))
,invocations__10038__auto___11508);
var matching_count__10047__auto___11516 = cljs.core.count.call(null,matching_invocations__10045__auto___11515);
if(cljs.core._EQ_.call(null,times__10039__auto___11509,matching_count__10047__auto___11516)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(times__10039__auto___11509)," ",invocations_str__10043__auto___11514.call(null,times__10039__auto___11509)," of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__10036__auto___11506)," with ",cljs.core.pr_str.call(null,with__10042__auto___11513__$1),speclj.platform.endl,"     got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(matching_count__10047__auto___11516)," ",invocations_str__10043__auto___11514.call(null,matching_count__10047__auto___11516)].join('')));
}
} else {
if(check_params_QMARK___10041__auto___11511){
if(cljs.core.truth_(cljs.core.some.call(null,((function (seq__10896_11476,chunk__10897_11477,count__10898_11478,i__10899_11479,seq__10888_11471,chunk__10893_11472,count__10894_11473,i__10895_11474,seq__10887,chunk__10900,count__10901,i__10902,name__10036__auto___11506,options__10037__auto___11507,invocations__10038__auto___11508,times__10039__auto___11509,times_QMARK___10040__auto___11510,check_params_QMARK___10041__auto___11511,with__10042__auto___11512,with__10042__auto___11513__$1,invocations_str__10043__auto___11514,n_11505,seq__10896_11499__$1,temp__5804__auto___11498__$1,mode_11475,ai,seq__10887__$1,temp__5804__auto__,take_turn_orig_val__10885,take_turn_temp_val__10886,_STAR_parent_description_STAR__orig_val__10743_11118,_STAR_parent_description_STAR__temp_val__10744_11119,description__9652__auto____$1,_STAR_parent_description_STAR__orig_val__10229_11064,_STAR_parent_description_STAR__temp_val__10230_11065,description__9652__auto___11063){
return (function (p1__10035__10048__auto__){
return speclj.stub.params_match_QMARK_.call(null,with__10042__auto___11513__$1,p1__10035__10048__auto__);
});})(seq__10896_11476,chunk__10897_11477,count__10898_11478,i__10899_11479,seq__10888_11471,chunk__10893_11472,count__10894_11473,i__10895_11474,seq__10887,chunk__10900,count__10901,i__10902,name__10036__auto___11506,options__10037__auto___11507,invocations__10038__auto___11508,times__10039__auto___11509,times_QMARK___10040__auto___11510,check_params_QMARK___10041__auto___11511,with__10042__auto___11512,with__10042__auto___11513__$1,invocations_str__10043__auto___11514,n_11505,seq__10896_11499__$1,temp__5804__auto___11498__$1,mode_11475,ai,seq__10887__$1,temp__5804__auto__,take_turn_orig_val__10885,take_turn_temp_val__10886,_STAR_parent_description_STAR__orig_val__10743_11118,_STAR_parent_description_STAR__temp_val__10744_11119,description__9652__auto____$1,_STAR_parent_description_STAR__orig_val__10229_11064,_STAR_parent_description_STAR__temp_val__10230_11065,description__9652__auto___11063))
,invocations__10038__auto___11508))){
} else {
throw (new speclj.platform.SpecFailure(["Expected: invocation of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__10036__auto___11506)," with ",cljs.core.pr_str.call(null,with__10042__auto___11513__$1),speclj.platform.endl,"     got: ",cljs.core.pr_str.call(null,invocations__10038__auto___11508)].join('')));
}
} else {
if(times_QMARK___10040__auto___11510){
if(cljs.core._EQ_.call(null,times__10039__auto___11509,cljs.core.count.call(null,invocations__10038__auto___11508))){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(times__10039__auto___11509)," ",invocations_str__10043__auto___11514.call(null,times__10039__auto___11509)," of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__10036__auto___11506),speclj.platform.endl,"     got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,invocations__10038__auto___11508))].join('')));
}
} else {
if(cljs.core.seq.call(null,invocations__10038__auto___11508)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: an invocation of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__10036__auto___11506),speclj.platform.endl,"     got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,invocations__10038__auto___11508))].join('')));
}

}
}
}

var expected__9789__auto___11517 = ((cljs.core._EQ_.call(null,(2),mode_11475))?new cljs.core.Keyword(null,"x","x",2099068185):new cljs.core.Keyword(null,"o","o",-1350007228));
var actual__9790__auto___11518 = new cljs.core.Keyword(null,"player","player",-97687400).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.screens.play_spec.state));
if(cljs.core._EQ_.call(null,expected__9789__auto___11517,actual__9790__auto___11518)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__9789__auto___11517;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9757__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9757__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__9790__auto___11518;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9757__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9757__auto__);
}
})()," (using =)"].join('')));
}

cljs.core.reset_BANG_.call(null,tic_tac_toe.screens.play_spec.state,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"board","board",-1907017633),tic_tac_toe.screens.play_spec.board_3,new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"current-screen","current-screen",-1454713691),new cljs.core.Keyword(null,"play","play",-580418022)], null));


var G__11519 = cljs.core.next.call(null,seq__10896_11499__$1);
var G__11520 = null;
var G__11521 = (0);
var G__11522 = (0);
seq__10896_11476 = G__11519;
chunk__10897_11477 = G__11520;
count__10898_11478 = G__11521;
i__10899_11479 = G__11522;
continue;
}
} else {
}
}
break;
}

var G__11523 = seq__10888_11471;
var G__11524 = chunk__10893_11472;
var G__11525 = count__10894_11473;
var G__11526 = (i__10895_11474 + (1));
seq__10888_11471 = G__11523;
chunk__10893_11472 = G__11524;
count__10894_11473 = G__11525;
i__10895_11474 = G__11526;
continue;
} else {
var temp__5804__auto___11527__$1 = cljs.core.seq.call(null,seq__10888_11471);
if(temp__5804__auto___11527__$1){
var seq__10888_11528__$1 = temp__5804__auto___11527__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10888_11528__$1)){
var c__5525__auto___11529 = cljs.core.chunk_first.call(null,seq__10888_11528__$1);
var G__11530 = cljs.core.chunk_rest.call(null,seq__10888_11528__$1);
var G__11531 = c__5525__auto___11529;
var G__11532 = cljs.core.count.call(null,c__5525__auto___11529);
var G__11533 = (0);
seq__10888_11471 = G__11530;
chunk__10893_11472 = G__11531;
count__10894_11473 = G__11532;
i__10895_11474 = G__11533;
continue;
} else {
var mode_11534 = cljs.core.first.call(null,seq__10888_11528__$1);
var seq__10889_11535 = cljs.core.seq.call(null,cljs.core.range.call(null,(9)));
var chunk__10890_11536 = null;
var count__10891_11537 = (0);
var i__10892_11538 = (0);
while(true){
if((i__10892_11538 < count__10891_11537)){
var n_11539 = cljs.core._nth.call(null,chunk__10890_11536,i__10892_11538);
cljs.core.swap_BANG_.call(null,tic_tac_toe.screens.play_spec.state,cljs.core.assoc,new cljs.core.Keyword(null,"mode","mode",654403691),mode_11534,new cljs.core.Keyword(null,"first-ai-level","first-ai-level",1004633644),ai,new cljs.core.Keyword(null,"player","player",-97687400),((cljs.core._EQ_.call(null,(2),mode_11534))?new cljs.core.Keyword(null,"x","x",2099068185):new cljs.core.Keyword(null,"o","o",-1350007228)),new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"gui","gui",604532813));

c3kit.wire.spec_helper.render.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tic_tac_toe.render_screen.render_screen,tic_tac_toe.screens.play_spec.state], null));

c3kit.wire.spec_helper.click_BANG_.call(null,["#index-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n_11539)].join(''));

var name__10036__auto___11540 = new cljs.core.Keyword(null,"turn","turn",75759344);
var options__10037__auto___11541 = cljs.core.PersistentArrayMap.EMPTY;
var invocations__10038__auto___11542 = speclj.stub.invocations_of.call(null,name__10036__auto___11540);
var times__10039__auto___11543 = new cljs.core.Keyword(null,"times","times",1671571467).cljs$core$IFn$_invoke$arity$1(options__10037__auto___11541);
var times_QMARK___10040__auto___11544 = typeof times__10039__auto___11543 === 'number';
var check_params_QMARK___10041__auto___11545 = cljs.core.contains_QMARK_.call(null,options__10037__auto___11541,new cljs.core.Keyword(null,"with","with",-1536296876));
var with__10042__auto___11546 = new cljs.core.Keyword(null,"with","with",-1536296876).cljs$core$IFn$_invoke$arity$1(options__10037__auto___11541);
var with__10042__auto___11547__$1 = (((with__10042__auto___11546 == null))?cljs.core.PersistentVector.EMPTY:with__10042__auto___11546);
var invocations_str__10043__auto___11548 = ((function (seq__10889_11535,chunk__10890_11536,count__10891_11537,i__10892_11538,seq__10888_11471,chunk__10893_11472,count__10894_11473,i__10895_11474,seq__10887,chunk__10900,count__10901,i__10902,name__10036__auto___11540,options__10037__auto___11541,invocations__10038__auto___11542,times__10039__auto___11543,times_QMARK___10040__auto___11544,check_params_QMARK___10041__auto___11545,with__10042__auto___11546,with__10042__auto___11547__$1,n_11539,mode_11534,seq__10888_11528__$1,temp__5804__auto___11527__$1,ai,seq__10887__$1,temp__5804__auto__,take_turn_orig_val__10885,take_turn_temp_val__10886,_STAR_parent_description_STAR__orig_val__10743_11118,_STAR_parent_description_STAR__temp_val__10744_11119,description__9652__auto____$1,_STAR_parent_description_STAR__orig_val__10229_11064,_STAR_parent_description_STAR__temp_val__10230_11065,description__9652__auto___11063){
return (function (p1__10033__10044__auto__){
if(cljs.core._EQ_.call(null,(1),p1__10033__10044__auto__)){
return "invocation";
} else {
return "invocations";
}
});})(seq__10889_11535,chunk__10890_11536,count__10891_11537,i__10892_11538,seq__10888_11471,chunk__10893_11472,count__10894_11473,i__10895_11474,seq__10887,chunk__10900,count__10901,i__10902,name__10036__auto___11540,options__10037__auto___11541,invocations__10038__auto___11542,times__10039__auto___11543,times_QMARK___10040__auto___11544,check_params_QMARK___10041__auto___11545,with__10042__auto___11546,with__10042__auto___11547__$1,n_11539,mode_11534,seq__10888_11528__$1,temp__5804__auto___11527__$1,ai,seq__10887__$1,temp__5804__auto__,take_turn_orig_val__10885,take_turn_temp_val__10886,_STAR_parent_description_STAR__orig_val__10743_11118,_STAR_parent_description_STAR__temp_val__10744_11119,description__9652__auto____$1,_STAR_parent_description_STAR__orig_val__10229_11064,_STAR_parent_description_STAR__temp_val__10230_11065,description__9652__auto___11063))
;
if(((times_QMARK___10040__auto___11544) && (check_params_QMARK___10041__auto___11545))){
var matching_invocations__10045__auto___11549 = cljs.core.filter.call(null,((function (seq__10889_11535,chunk__10890_11536,count__10891_11537,i__10892_11538,seq__10888_11471,chunk__10893_11472,count__10894_11473,i__10895_11474,seq__10887,chunk__10900,count__10901,i__10902,name__10036__auto___11540,options__10037__auto___11541,invocations__10038__auto___11542,times__10039__auto___11543,times_QMARK___10040__auto___11544,check_params_QMARK___10041__auto___11545,with__10042__auto___11546,with__10042__auto___11547__$1,invocations_str__10043__auto___11548,n_11539,mode_11534,seq__10888_11528__$1,temp__5804__auto___11527__$1,ai,seq__10887__$1,temp__5804__auto__,take_turn_orig_val__10885,take_turn_temp_val__10886,_STAR_parent_description_STAR__orig_val__10743_11118,_STAR_parent_description_STAR__temp_val__10744_11119,description__9652__auto____$1,_STAR_parent_description_STAR__orig_val__10229_11064,_STAR_parent_description_STAR__temp_val__10230_11065,description__9652__auto___11063){
return (function (p1__10034__10046__auto__){
return speclj.stub.params_match_QMARK_.call(null,with__10042__auto___11547__$1,p1__10034__10046__auto__);
});})(seq__10889_11535,chunk__10890_11536,count__10891_11537,i__10892_11538,seq__10888_11471,chunk__10893_11472,count__10894_11473,i__10895_11474,seq__10887,chunk__10900,count__10901,i__10902,name__10036__auto___11540,options__10037__auto___11541,invocations__10038__auto___11542,times__10039__auto___11543,times_QMARK___10040__auto___11544,check_params_QMARK___10041__auto___11545,with__10042__auto___11546,with__10042__auto___11547__$1,invocations_str__10043__auto___11548,n_11539,mode_11534,seq__10888_11528__$1,temp__5804__auto___11527__$1,ai,seq__10887__$1,temp__5804__auto__,take_turn_orig_val__10885,take_turn_temp_val__10886,_STAR_parent_description_STAR__orig_val__10743_11118,_STAR_parent_description_STAR__temp_val__10744_11119,description__9652__auto____$1,_STAR_parent_description_STAR__orig_val__10229_11064,_STAR_parent_description_STAR__temp_val__10230_11065,description__9652__auto___11063))
,invocations__10038__auto___11542);
var matching_count__10047__auto___11550 = cljs.core.count.call(null,matching_invocations__10045__auto___11549);
if(cljs.core._EQ_.call(null,times__10039__auto___11543,matching_count__10047__auto___11550)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(times__10039__auto___11543)," ",invocations_str__10043__auto___11548.call(null,times__10039__auto___11543)," of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__10036__auto___11540)," with ",cljs.core.pr_str.call(null,with__10042__auto___11547__$1),speclj.platform.endl,"     got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(matching_count__10047__auto___11550)," ",invocations_str__10043__auto___11548.call(null,matching_count__10047__auto___11550)].join('')));
}
} else {
if(check_params_QMARK___10041__auto___11545){
if(cljs.core.truth_(cljs.core.some.call(null,((function (seq__10889_11535,chunk__10890_11536,count__10891_11537,i__10892_11538,seq__10888_11471,chunk__10893_11472,count__10894_11473,i__10895_11474,seq__10887,chunk__10900,count__10901,i__10902,name__10036__auto___11540,options__10037__auto___11541,invocations__10038__auto___11542,times__10039__auto___11543,times_QMARK___10040__auto___11544,check_params_QMARK___10041__auto___11545,with__10042__auto___11546,with__10042__auto___11547__$1,invocations_str__10043__auto___11548,n_11539,mode_11534,seq__10888_11528__$1,temp__5804__auto___11527__$1,ai,seq__10887__$1,temp__5804__auto__,take_turn_orig_val__10885,take_turn_temp_val__10886,_STAR_parent_description_STAR__orig_val__10743_11118,_STAR_parent_description_STAR__temp_val__10744_11119,description__9652__auto____$1,_STAR_parent_description_STAR__orig_val__10229_11064,_STAR_parent_description_STAR__temp_val__10230_11065,description__9652__auto___11063){
return (function (p1__10035__10048__auto__){
return speclj.stub.params_match_QMARK_.call(null,with__10042__auto___11547__$1,p1__10035__10048__auto__);
});})(seq__10889_11535,chunk__10890_11536,count__10891_11537,i__10892_11538,seq__10888_11471,chunk__10893_11472,count__10894_11473,i__10895_11474,seq__10887,chunk__10900,count__10901,i__10902,name__10036__auto___11540,options__10037__auto___11541,invocations__10038__auto___11542,times__10039__auto___11543,times_QMARK___10040__auto___11544,check_params_QMARK___10041__auto___11545,with__10042__auto___11546,with__10042__auto___11547__$1,invocations_str__10043__auto___11548,n_11539,mode_11534,seq__10888_11528__$1,temp__5804__auto___11527__$1,ai,seq__10887__$1,temp__5804__auto__,take_turn_orig_val__10885,take_turn_temp_val__10886,_STAR_parent_description_STAR__orig_val__10743_11118,_STAR_parent_description_STAR__temp_val__10744_11119,description__9652__auto____$1,_STAR_parent_description_STAR__orig_val__10229_11064,_STAR_parent_description_STAR__temp_val__10230_11065,description__9652__auto___11063))
,invocations__10038__auto___11542))){
} else {
throw (new speclj.platform.SpecFailure(["Expected: invocation of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__10036__auto___11540)," with ",cljs.core.pr_str.call(null,with__10042__auto___11547__$1),speclj.platform.endl,"     got: ",cljs.core.pr_str.call(null,invocations__10038__auto___11542)].join('')));
}
} else {
if(times_QMARK___10040__auto___11544){
if(cljs.core._EQ_.call(null,times__10039__auto___11543,cljs.core.count.call(null,invocations__10038__auto___11542))){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(times__10039__auto___11543)," ",invocations_str__10043__auto___11548.call(null,times__10039__auto___11543)," of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__10036__auto___11540),speclj.platform.endl,"     got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,invocations__10038__auto___11542))].join('')));
}
} else {
if(cljs.core.seq.call(null,invocations__10038__auto___11542)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: an invocation of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__10036__auto___11540),speclj.platform.endl,"     got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,invocations__10038__auto___11542))].join('')));
}

}
}
}

var expected__9789__auto___11551 = ((cljs.core._EQ_.call(null,(2),mode_11534))?new cljs.core.Keyword(null,"x","x",2099068185):new cljs.core.Keyword(null,"o","o",-1350007228));
var actual__9790__auto___11552 = new cljs.core.Keyword(null,"player","player",-97687400).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.screens.play_spec.state));
if(cljs.core._EQ_.call(null,expected__9789__auto___11551,actual__9790__auto___11552)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__9789__auto___11551;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9757__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9757__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__9790__auto___11552;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9757__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9757__auto__);
}
})()," (using =)"].join('')));
}

cljs.core.reset_BANG_.call(null,tic_tac_toe.screens.play_spec.state,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"board","board",-1907017633),tic_tac_toe.screens.play_spec.board_3,new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"current-screen","current-screen",-1454713691),new cljs.core.Keyword(null,"play","play",-580418022)], null));


var G__11553 = seq__10889_11535;
var G__11554 = chunk__10890_11536;
var G__11555 = count__10891_11537;
var G__11556 = (i__10892_11538 + (1));
seq__10889_11535 = G__11553;
chunk__10890_11536 = G__11554;
count__10891_11537 = G__11555;
i__10892_11538 = G__11556;
continue;
} else {
var temp__5804__auto___11557__$2 = cljs.core.seq.call(null,seq__10889_11535);
if(temp__5804__auto___11557__$2){
var seq__10889_11558__$1 = temp__5804__auto___11557__$2;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10889_11558__$1)){
var c__5525__auto___11559 = cljs.core.chunk_first.call(null,seq__10889_11558__$1);
var G__11560 = cljs.core.chunk_rest.call(null,seq__10889_11558__$1);
var G__11561 = c__5525__auto___11559;
var G__11562 = cljs.core.count.call(null,c__5525__auto___11559);
var G__11563 = (0);
seq__10889_11535 = G__11560;
chunk__10890_11536 = G__11561;
count__10891_11537 = G__11562;
i__10892_11538 = G__11563;
continue;
} else {
var n_11564 = cljs.core.first.call(null,seq__10889_11558__$1);
cljs.core.swap_BANG_.call(null,tic_tac_toe.screens.play_spec.state,cljs.core.assoc,new cljs.core.Keyword(null,"mode","mode",654403691),mode_11534,new cljs.core.Keyword(null,"first-ai-level","first-ai-level",1004633644),ai,new cljs.core.Keyword(null,"player","player",-97687400),((cljs.core._EQ_.call(null,(2),mode_11534))?new cljs.core.Keyword(null,"x","x",2099068185):new cljs.core.Keyword(null,"o","o",-1350007228)),new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"gui","gui",604532813));

c3kit.wire.spec_helper.render.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tic_tac_toe.render_screen.render_screen,tic_tac_toe.screens.play_spec.state], null));

c3kit.wire.spec_helper.click_BANG_.call(null,["#index-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n_11564)].join(''));

var name__10036__auto___11565 = new cljs.core.Keyword(null,"turn","turn",75759344);
var options__10037__auto___11566 = cljs.core.PersistentArrayMap.EMPTY;
var invocations__10038__auto___11567 = speclj.stub.invocations_of.call(null,name__10036__auto___11565);
var times__10039__auto___11568 = new cljs.core.Keyword(null,"times","times",1671571467).cljs$core$IFn$_invoke$arity$1(options__10037__auto___11566);
var times_QMARK___10040__auto___11569 = typeof times__10039__auto___11568 === 'number';
var check_params_QMARK___10041__auto___11570 = cljs.core.contains_QMARK_.call(null,options__10037__auto___11566,new cljs.core.Keyword(null,"with","with",-1536296876));
var with__10042__auto___11571 = new cljs.core.Keyword(null,"with","with",-1536296876).cljs$core$IFn$_invoke$arity$1(options__10037__auto___11566);
var with__10042__auto___11572__$1 = (((with__10042__auto___11571 == null))?cljs.core.PersistentVector.EMPTY:with__10042__auto___11571);
var invocations_str__10043__auto___11573 = ((function (seq__10889_11535,chunk__10890_11536,count__10891_11537,i__10892_11538,seq__10888_11471,chunk__10893_11472,count__10894_11473,i__10895_11474,seq__10887,chunk__10900,count__10901,i__10902,name__10036__auto___11565,options__10037__auto___11566,invocations__10038__auto___11567,times__10039__auto___11568,times_QMARK___10040__auto___11569,check_params_QMARK___10041__auto___11570,with__10042__auto___11571,with__10042__auto___11572__$1,n_11564,seq__10889_11558__$1,temp__5804__auto___11557__$2,mode_11534,seq__10888_11528__$1,temp__5804__auto___11527__$1,ai,seq__10887__$1,temp__5804__auto__,take_turn_orig_val__10885,take_turn_temp_val__10886,_STAR_parent_description_STAR__orig_val__10743_11118,_STAR_parent_description_STAR__temp_val__10744_11119,description__9652__auto____$1,_STAR_parent_description_STAR__orig_val__10229_11064,_STAR_parent_description_STAR__temp_val__10230_11065,description__9652__auto___11063){
return (function (p1__10033__10044__auto__){
if(cljs.core._EQ_.call(null,(1),p1__10033__10044__auto__)){
return "invocation";
} else {
return "invocations";
}
});})(seq__10889_11535,chunk__10890_11536,count__10891_11537,i__10892_11538,seq__10888_11471,chunk__10893_11472,count__10894_11473,i__10895_11474,seq__10887,chunk__10900,count__10901,i__10902,name__10036__auto___11565,options__10037__auto___11566,invocations__10038__auto___11567,times__10039__auto___11568,times_QMARK___10040__auto___11569,check_params_QMARK___10041__auto___11570,with__10042__auto___11571,with__10042__auto___11572__$1,n_11564,seq__10889_11558__$1,temp__5804__auto___11557__$2,mode_11534,seq__10888_11528__$1,temp__5804__auto___11527__$1,ai,seq__10887__$1,temp__5804__auto__,take_turn_orig_val__10885,take_turn_temp_val__10886,_STAR_parent_description_STAR__orig_val__10743_11118,_STAR_parent_description_STAR__temp_val__10744_11119,description__9652__auto____$1,_STAR_parent_description_STAR__orig_val__10229_11064,_STAR_parent_description_STAR__temp_val__10230_11065,description__9652__auto___11063))
;
if(((times_QMARK___10040__auto___11569) && (check_params_QMARK___10041__auto___11570))){
var matching_invocations__10045__auto___11574 = cljs.core.filter.call(null,((function (seq__10889_11535,chunk__10890_11536,count__10891_11537,i__10892_11538,seq__10888_11471,chunk__10893_11472,count__10894_11473,i__10895_11474,seq__10887,chunk__10900,count__10901,i__10902,name__10036__auto___11565,options__10037__auto___11566,invocations__10038__auto___11567,times__10039__auto___11568,times_QMARK___10040__auto___11569,check_params_QMARK___10041__auto___11570,with__10042__auto___11571,with__10042__auto___11572__$1,invocations_str__10043__auto___11573,n_11564,seq__10889_11558__$1,temp__5804__auto___11557__$2,mode_11534,seq__10888_11528__$1,temp__5804__auto___11527__$1,ai,seq__10887__$1,temp__5804__auto__,take_turn_orig_val__10885,take_turn_temp_val__10886,_STAR_parent_description_STAR__orig_val__10743_11118,_STAR_parent_description_STAR__temp_val__10744_11119,description__9652__auto____$1,_STAR_parent_description_STAR__orig_val__10229_11064,_STAR_parent_description_STAR__temp_val__10230_11065,description__9652__auto___11063){
return (function (p1__10034__10046__auto__){
return speclj.stub.params_match_QMARK_.call(null,with__10042__auto___11572__$1,p1__10034__10046__auto__);
});})(seq__10889_11535,chunk__10890_11536,count__10891_11537,i__10892_11538,seq__10888_11471,chunk__10893_11472,count__10894_11473,i__10895_11474,seq__10887,chunk__10900,count__10901,i__10902,name__10036__auto___11565,options__10037__auto___11566,invocations__10038__auto___11567,times__10039__auto___11568,times_QMARK___10040__auto___11569,check_params_QMARK___10041__auto___11570,with__10042__auto___11571,with__10042__auto___11572__$1,invocations_str__10043__auto___11573,n_11564,seq__10889_11558__$1,temp__5804__auto___11557__$2,mode_11534,seq__10888_11528__$1,temp__5804__auto___11527__$1,ai,seq__10887__$1,temp__5804__auto__,take_turn_orig_val__10885,take_turn_temp_val__10886,_STAR_parent_description_STAR__orig_val__10743_11118,_STAR_parent_description_STAR__temp_val__10744_11119,description__9652__auto____$1,_STAR_parent_description_STAR__orig_val__10229_11064,_STAR_parent_description_STAR__temp_val__10230_11065,description__9652__auto___11063))
,invocations__10038__auto___11567);
var matching_count__10047__auto___11575 = cljs.core.count.call(null,matching_invocations__10045__auto___11574);
if(cljs.core._EQ_.call(null,times__10039__auto___11568,matching_count__10047__auto___11575)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(times__10039__auto___11568)," ",invocations_str__10043__auto___11573.call(null,times__10039__auto___11568)," of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__10036__auto___11565)," with ",cljs.core.pr_str.call(null,with__10042__auto___11572__$1),speclj.platform.endl,"     got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(matching_count__10047__auto___11575)," ",invocations_str__10043__auto___11573.call(null,matching_count__10047__auto___11575)].join('')));
}
} else {
if(check_params_QMARK___10041__auto___11570){
if(cljs.core.truth_(cljs.core.some.call(null,((function (seq__10889_11535,chunk__10890_11536,count__10891_11537,i__10892_11538,seq__10888_11471,chunk__10893_11472,count__10894_11473,i__10895_11474,seq__10887,chunk__10900,count__10901,i__10902,name__10036__auto___11565,options__10037__auto___11566,invocations__10038__auto___11567,times__10039__auto___11568,times_QMARK___10040__auto___11569,check_params_QMARK___10041__auto___11570,with__10042__auto___11571,with__10042__auto___11572__$1,invocations_str__10043__auto___11573,n_11564,seq__10889_11558__$1,temp__5804__auto___11557__$2,mode_11534,seq__10888_11528__$1,temp__5804__auto___11527__$1,ai,seq__10887__$1,temp__5804__auto__,take_turn_orig_val__10885,take_turn_temp_val__10886,_STAR_parent_description_STAR__orig_val__10743_11118,_STAR_parent_description_STAR__temp_val__10744_11119,description__9652__auto____$1,_STAR_parent_description_STAR__orig_val__10229_11064,_STAR_parent_description_STAR__temp_val__10230_11065,description__9652__auto___11063){
return (function (p1__10035__10048__auto__){
return speclj.stub.params_match_QMARK_.call(null,with__10042__auto___11572__$1,p1__10035__10048__auto__);
});})(seq__10889_11535,chunk__10890_11536,count__10891_11537,i__10892_11538,seq__10888_11471,chunk__10893_11472,count__10894_11473,i__10895_11474,seq__10887,chunk__10900,count__10901,i__10902,name__10036__auto___11565,options__10037__auto___11566,invocations__10038__auto___11567,times__10039__auto___11568,times_QMARK___10040__auto___11569,check_params_QMARK___10041__auto___11570,with__10042__auto___11571,with__10042__auto___11572__$1,invocations_str__10043__auto___11573,n_11564,seq__10889_11558__$1,temp__5804__auto___11557__$2,mode_11534,seq__10888_11528__$1,temp__5804__auto___11527__$1,ai,seq__10887__$1,temp__5804__auto__,take_turn_orig_val__10885,take_turn_temp_val__10886,_STAR_parent_description_STAR__orig_val__10743_11118,_STAR_parent_description_STAR__temp_val__10744_11119,description__9652__auto____$1,_STAR_parent_description_STAR__orig_val__10229_11064,_STAR_parent_description_STAR__temp_val__10230_11065,description__9652__auto___11063))
,invocations__10038__auto___11567))){
} else {
throw (new speclj.platform.SpecFailure(["Expected: invocation of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__10036__auto___11565)," with ",cljs.core.pr_str.call(null,with__10042__auto___11572__$1),speclj.platform.endl,"     got: ",cljs.core.pr_str.call(null,invocations__10038__auto___11567)].join('')));
}
} else {
if(times_QMARK___10040__auto___11569){
if(cljs.core._EQ_.call(null,times__10039__auto___11568,cljs.core.count.call(null,invocations__10038__auto___11567))){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(times__10039__auto___11568)," ",invocations_str__10043__auto___11573.call(null,times__10039__auto___11568)," of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__10036__auto___11565),speclj.platform.endl,"     got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,invocations__10038__auto___11567))].join('')));
}
} else {
if(cljs.core.seq.call(null,invocations__10038__auto___11567)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: an invocation of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__10036__auto___11565),speclj.platform.endl,"     got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,invocations__10038__auto___11567))].join('')));
}

}
}
}

var expected__9789__auto___11576 = ((cljs.core._EQ_.call(null,(2),mode_11534))?new cljs.core.Keyword(null,"x","x",2099068185):new cljs.core.Keyword(null,"o","o",-1350007228));
var actual__9790__auto___11577 = new cljs.core.Keyword(null,"player","player",-97687400).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.screens.play_spec.state));
if(cljs.core._EQ_.call(null,expected__9789__auto___11576,actual__9790__auto___11577)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__9789__auto___11576;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9757__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9757__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__9790__auto___11577;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9757__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9757__auto__);
}
})()," (using =)"].join('')));
}

cljs.core.reset_BANG_.call(null,tic_tac_toe.screens.play_spec.state,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"board","board",-1907017633),tic_tac_toe.screens.play_spec.board_3,new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"current-screen","current-screen",-1454713691),new cljs.core.Keyword(null,"play","play",-580418022)], null));


var G__11578 = cljs.core.next.call(null,seq__10889_11558__$1);
var G__11579 = null;
var G__11580 = (0);
var G__11581 = (0);
seq__10889_11535 = G__11578;
chunk__10890_11536 = G__11579;
count__10891_11537 = G__11580;
i__10892_11538 = G__11581;
continue;
}
} else {
}
}
break;
}

var G__11582 = cljs.core.next.call(null,seq__10888_11528__$1);
var G__11583 = null;
var G__11584 = (0);
var G__11585 = (0);
seq__10888_11471 = G__11582;
chunk__10893_11472 = G__11583;
count__10894_11473 = G__11584;
i__10895_11474 = G__11585;
continue;
}
} else {
}
}
break;
}

var G__11586 = cljs.core.next.call(null,seq__10887__$1);
var G__11587 = null;
var G__11588 = (0);
var G__11589 = (0);
seq__10887 = G__11586;
chunk__10900 = G__11587;
count__10901 = G__11588;
i__10902 = G__11589;
continue;
}
} else {
return null;
}
}
break;
}
}finally {(tic_tac_toe.player.take_turn = take_turn_orig_val__10885);
}});})(_STAR_parent_description_STAR__orig_val__10743_11118,_STAR_parent_description_STAR__temp_val__10744_11119,description__9652__auto____$1,_STAR_parent_description_STAR__orig_val__10229_11064,_STAR_parent_description_STAR__temp_val__10230_11065,description__9652__auto___11063))
,false),speclj.components.new_characteristic.call(null,"AI is not triggered if game over",((function (_STAR_parent_description_STAR__orig_val__10743_11118,_STAR_parent_description_STAR__temp_val__10744_11119,description__9652__auto____$1,_STAR_parent_description_STAR__orig_val__10229_11064,_STAR_parent_description_STAR__temp_val__10230_11065,description__9652__auto___11063){
return (function (){
cljs.core.swap_BANG_.call(null,tic_tac_toe.screens.play_spec.state,cljs.core.assoc,new cljs.core.Keyword(null,"board","board",-1907017633),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"x","x",2099068185),(3),new cljs.core.Keyword(null,"o","o",-1350007228),new cljs.core.Keyword(null,"o","o",-1350007228),(6),(7),(8),(9)], null),new cljs.core.Keyword(null,"mode","mode",654403691),(2),new cljs.core.Keyword(null,"first-ai-level","first-ai-level",1004633644),(3));

c3kit.wire.spec_helper.click_BANG_.call(null,"#index-2");

var expected__9789__auto__ = new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"o","o",-1350007228),new cljs.core.Keyword(null,"o","o",-1350007228),(6),(7),(8),(9)], null);
var actual__9790__auto__ = new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.screens.play_spec.state));
if(cljs.core._EQ_.call(null,expected__9789__auto__,actual__9790__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__9789__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9757__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9757__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__9790__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9757__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9757__auto__);
}
})()," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__10743_11118,_STAR_parent_description_STAR__temp_val__10744_11119,description__9652__auto____$1,_STAR_parent_description_STAR__orig_val__10229_11064,_STAR_parent_description_STAR__temp_val__10230_11065,description__9652__auto___11063))
,false),speclj.components.new_characteristic.call(null,"AI updates game state",((function (_STAR_parent_description_STAR__orig_val__10743_11118,_STAR_parent_description_STAR__temp_val__10744_11119,description__9652__auto____$1,_STAR_parent_description_STAR__orig_val__10229_11064,_STAR_parent_description_STAR__temp_val__10230_11065,description__9652__auto___11063){
return (function (){
cljs.core.swap_BANG_.call(null,tic_tac_toe.screens.play_spec.state,cljs.core.assoc,new cljs.core.Keyword(null,"board","board",-1907017633),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"x","x",2099068185),(3),new cljs.core.Keyword(null,"o","o",-1350007228),new cljs.core.Keyword(null,"o","o",-1350007228),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"o","o",-1350007228),new cljs.core.Keyword(null,"o","o",-1350007228),(9)], null),new cljs.core.Keyword(null,"mode","mode",654403691),(2),new cljs.core.Keyword(null,"first-ai-level","first-ai-level",1004633644),(3));

c3kit.wire.spec_helper.click_BANG_.call(null,"#index-8");

var expected__9789__auto__ = "O wins!";
var actual__9790__auto__ = new cljs.core.Keyword(null,"game-state","game-state",935682735).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.screens.play_spec.state));
if(cljs.core._EQ_.call(null,expected__9789__auto__,actual__9790__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__9789__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9757__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9757__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__9790__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9757__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9757__auto__);
}
})()," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__10743_11118,_STAR_parent_description_STAR__temp_val__10744_11119,description__9652__auto____$1,_STAR_parent_description_STAR__orig_val__10229_11064,_STAR_parent_description_STAR__temp_val__10230_11065,description__9652__auto___11063))
,false),speclj.components.new_characteristic.call(null,"AI doesn't toggle human? to true if mode 4",((function (_STAR_parent_description_STAR__orig_val__10743_11118,_STAR_parent_description_STAR__temp_val__10744_11119,description__9652__auto____$1,_STAR_parent_description_STAR__orig_val__10229_11064,_STAR_parent_description_STAR__temp_val__10230_11065,description__9652__auto___11063){
return (function (){
var take_turn_orig_val__10915 = tic_tac_toe.player.take_turn;
var take_turn_temp_val__10916 = speclj.stub.stub.call(null,new cljs.core.Keyword(null,"turn","turn",75759344),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"return","return",-1891502105),tic_tac_toe.screens.play_spec.board_3], null));
(tic_tac_toe.player.take_turn = take_turn_temp_val__10916);

try{cljs.core.swap_BANG_.call(null,tic_tac_toe.screens.play_spec.state,cljs.core.assoc,new cljs.core.Keyword(null,"mode","mode",654403691),(4),new cljs.core.Keyword(null,"human?","human?",-2017219054),false,new cljs.core.Keyword(null,"first-ai-level","first-ai-level",1004633644),(1),new cljs.core.Keyword(null,"second-ai-level","second-ai-level",-418730455),(3));

c3kit.wire.spec_helper.render.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tic_tac_toe.render_screen.render_screen,tic_tac_toe.screens.play_spec.state], null));

var expected__9789__auto__ = false;
var actual__9790__auto__ = new cljs.core.Keyword(null,"human?","human?",-2017219054).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.screens.play_spec.state));
if(cljs.core._EQ_.call(null,expected__9789__auto__,actual__9790__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__9789__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9757__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9757__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__9790__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9757__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9757__auto__);
}
})()," (using =)"].join('')));
}
}finally {(tic_tac_toe.player.take_turn = take_turn_orig_val__10915);
}});})(_STAR_parent_description_STAR__orig_val__10743_11118,_STAR_parent_description_STAR__temp_val__10744_11119,description__9652__auto____$1,_STAR_parent_description_STAR__orig_val__10229_11064,_STAR_parent_description_STAR__temp_val__10230_11065,description__9652__auto___11063))
,false)],null)));
var chunk__10746_11121 = null;
var count__10747_11122 = (0);
var i__10748_11123 = (0);
while(true){
if((i__10748_11123 < count__10747_11122)){
var component__9653__auto___11590 = cljs.core._nth.call(null,chunk__10746_11121,i__10748_11123);
speclj.components.install.call(null,component__9653__auto___11590,description__9652__auto____$1);


var G__11591 = seq__10745_11120;
var G__11592 = chunk__10746_11121;
var G__11593 = count__10747_11122;
var G__11594 = (i__10748_11123 + (1));
seq__10745_11120 = G__11591;
chunk__10746_11121 = G__11592;
count__10747_11122 = G__11593;
i__10748_11123 = G__11594;
continue;
} else {
var temp__5804__auto___11595 = cljs.core.seq.call(null,seq__10745_11120);
if(temp__5804__auto___11595){
var seq__10745_11596__$1 = temp__5804__auto___11595;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10745_11596__$1)){
var c__5525__auto___11597 = cljs.core.chunk_first.call(null,seq__10745_11596__$1);
var G__11598 = cljs.core.chunk_rest.call(null,seq__10745_11596__$1);
var G__11599 = c__5525__auto___11597;
var G__11600 = cljs.core.count.call(null,c__5525__auto___11597);
var G__11601 = (0);
seq__10745_11120 = G__11598;
chunk__10746_11121 = G__11599;
count__10747_11122 = G__11600;
i__10748_11123 = G__11601;
continue;
} else {
var component__9653__auto___11602 = cljs.core.first.call(null,seq__10745_11596__$1);
speclj.components.install.call(null,component__9653__auto___11602,description__9652__auto____$1);


var G__11603 = cljs.core.next.call(null,seq__10745_11596__$1);
var G__11604 = null;
var G__11605 = (0);
var G__11606 = (0);
seq__10745_11120 = G__11603;
chunk__10746_11121 = G__11604;
count__10747_11122 = G__11605;
i__10748_11123 = G__11606;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__10743_11118);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__9652__auto____$1);
}

return description__9652__auto____$1;
})(),(function (){var description__9652__auto____$1 = speclj.components.new_description.call(null,"4x4",false,"tic-tac-toe.screens.play-spec");
var _STAR_parent_description_STAR__orig_val__10917_11607 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__10918_11608 = description__9652__auto____$1;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__10918_11608);

try{var seq__10919_11609 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,11,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_before.call(null,((function (_STAR_parent_description_STAR__orig_val__10917_11607,_STAR_parent_description_STAR__temp_val__10918_11608,description__9652__auto____$1,_STAR_parent_description_STAR__orig_val__10229_11064,_STAR_parent_description_STAR__temp_val__10230_11065,description__9652__auto___11063){
return (function (){
cljs.core.reset_BANG_.call(null,tic_tac_toe.screens.play_spec.state,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"current-screen","current-screen",-1454713691),new cljs.core.Keyword(null,"play","play",-580418022),new cljs.core.Keyword(null,"board","board",-1907017633),tic_tac_toe.screens.play_spec.board_4,new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"mode","mode",654403691),(1),new cljs.core.Keyword(null,"game-state","game-state",935682735),new cljs.core.Keyword(null,"in-progress","in-progress",2126442630),new cljs.core.Keyword(null,"human?","human?",-2017219054),true], null));

return c3kit.wire.spec_helper.render.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tic_tac_toe.render_screen.render_screen,tic_tac_toe.screens.play_spec.state], null));
});})(_STAR_parent_description_STAR__orig_val__10917_11607,_STAR_parent_description_STAR__temp_val__10918_11608,description__9652__auto____$1,_STAR_parent_description_STAR__orig_val__10229_11064,_STAR_parent_description_STAR__temp_val__10230_11065,description__9652__auto___11063))
),speclj.components.new_characteristic.call(null,"renders board",((function (_STAR_parent_description_STAR__orig_val__10917_11607,_STAR_parent_description_STAR__temp_val__10918_11608,description__9652__auto____$1,_STAR_parent_description_STAR__orig_val__10229_11064,_STAR_parent_description_STAR__temp_val__10230_11065,description__9652__auto___11063){
return (function (){
var expected__9789__auto___11613 = (16);
var actual__9790__auto___11614 = cljs.core.count.call(null,cljs.core.vec.call(null,c3kit.wire.js.query_selector_all.call(null,".board-square")));
if(cljs.core._EQ_.call(null,expected__9789__auto___11613,actual__9790__auto___11614)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__9789__auto___11613;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9757__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9757__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__9790__auto___11614;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9757__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9757__auto__);
}
})()," (using =)"].join('')));
}

var value__10152__auto___11615 = "#board-wrapper";
var node__10153__auto___11616 = c3kit.wire.spec_helper.select.call(null,value__10152__auto___11615);
if(cljs.core.truth_(node__10153__auto___11616)){
} else {
throw (new speclj.platform.SpecFailure(["Expected selector to find node: ",(function (){var temp__5806__auto__ = value__10152__auto___11615;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9757__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9757__auto__);
}
})()].join('')));
}

var value__10152__auto__ = ".four-grid";
var node__10153__auto__ = c3kit.wire.spec_helper.select.call(null,value__10152__auto__);
if(cljs.core.truth_(node__10153__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected selector to find node: ",(function (){var temp__5806__auto__ = value__10152__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9757__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9757__auto__);
}
})()].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__10917_11607,_STAR_parent_description_STAR__temp_val__10918_11608,description__9652__auto____$1,_STAR_parent_description_STAR__orig_val__10229_11064,_STAR_parent_description_STAR__temp_val__10230_11065,description__9652__auto___11063))
,false),speclj.components.new_characteristic.call(null,"buttons have IDs 0-15",((function (_STAR_parent_description_STAR__orig_val__10917_11607,_STAR_parent_description_STAR__temp_val__10918_11608,description__9652__auto____$1,_STAR_parent_description_STAR__orig_val__10229_11064,_STAR_parent_description_STAR__temp_val__10230_11065,description__9652__auto___11063){
return (function (){
var seq__10993 = cljs.core.seq.call(null,cljs.core.range.call(null,(16)));
var chunk__10994 = null;
var count__10995 = (0);
var i__10996 = (0);
while(true){
if((i__10996 < count__10995)){
var n = cljs.core._nth.call(null,chunk__10994,i__10996);
var value__10152__auto___11617 = ["#index-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join('');
var node__10153__auto___11618 = c3kit.wire.spec_helper.select.call(null,value__10152__auto___11617);
if(cljs.core.truth_(node__10153__auto___11618)){
} else {
throw (new speclj.platform.SpecFailure(["Expected selector to find node: ",(function (){var temp__5806__auto__ = value__10152__auto___11617;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9757__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9757__auto__);
}
})()].join('')));
}


var G__11619 = seq__10993;
var G__11620 = chunk__10994;
var G__11621 = count__10995;
var G__11622 = (i__10996 + (1));
seq__10993 = G__11619;
chunk__10994 = G__11620;
count__10995 = G__11621;
i__10996 = G__11622;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__10993);
if(temp__5804__auto__){
var seq__10993__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10993__$1)){
var c__5525__auto__ = cljs.core.chunk_first.call(null,seq__10993__$1);
var G__11623 = cljs.core.chunk_rest.call(null,seq__10993__$1);
var G__11624 = c__5525__auto__;
var G__11625 = cljs.core.count.call(null,c__5525__auto__);
var G__11626 = (0);
seq__10993 = G__11623;
chunk__10994 = G__11624;
count__10995 = G__11625;
i__10996 = G__11626;
continue;
} else {
var n = cljs.core.first.call(null,seq__10993__$1);
var value__10152__auto___11627 = ["#index-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join('');
var node__10153__auto___11628 = c3kit.wire.spec_helper.select.call(null,value__10152__auto___11627);
if(cljs.core.truth_(node__10153__auto___11628)){
} else {
throw (new speclj.platform.SpecFailure(["Expected selector to find node: ",(function (){var temp__5806__auto__ = value__10152__auto___11627;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9757__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9757__auto__);
}
})()].join('')));
}


var G__11629 = cljs.core.next.call(null,seq__10993__$1);
var G__11630 = null;
var G__11631 = (0);
var G__11632 = (0);
seq__10993 = G__11629;
chunk__10994 = G__11630;
count__10995 = G__11631;
i__10996 = G__11632;
continue;
}
} else {
return null;
}
}
break;
}
});})(_STAR_parent_description_STAR__orig_val__10917_11607,_STAR_parent_description_STAR__temp_val__10918_11608,description__9652__auto____$1,_STAR_parent_description_STAR__orig_val__10229_11064,_STAR_parent_description_STAR__temp_val__10230_11065,description__9652__auto___11063))
,false),speclj.components.new_characteristic.call(null,"clicking button updates board in state",((function (_STAR_parent_description_STAR__orig_val__10917_11607,_STAR_parent_description_STAR__temp_val__10918_11608,description__9652__auto____$1,_STAR_parent_description_STAR__orig_val__10229_11064,_STAR_parent_description_STAR__temp_val__10230_11065,description__9652__auto___11063){
return (function (){
var seq__10997 = cljs.core.seq.call(null,cljs.core.range.call(null,(16)));
var chunk__10998 = null;
var count__10999 = (0);
var i__11000 = (0);
while(true){
if((i__11000 < count__10999)){
var n = cljs.core._nth.call(null,chunk__10998,i__11000);
c3kit.wire.spec_helper.click_BANG_.call(null,["#index-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join(''));

var expected__9789__auto___11633 = cljs.core.assoc.call(null,tic_tac_toe.screens.play_spec.board_4,n,new cljs.core.Keyword(null,"x","x",2099068185));
var actual__9790__auto___11634 = new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.screens.play_spec.state));
if(cljs.core._EQ_.call(null,expected__9789__auto___11633,actual__9790__auto___11634)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__9789__auto___11633;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9757__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9757__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__9790__auto___11634;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9757__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9757__auto__);
}
})()," (using =)"].join('')));
}

cljs.core.swap_BANG_.call(null,tic_tac_toe.screens.play_spec.state,cljs.core.assoc,new cljs.core.Keyword(null,"board","board",-1907017633),tic_tac_toe.screens.play_spec.board_4,new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"x","x",2099068185));


var G__11635 = seq__10997;
var G__11636 = chunk__10998;
var G__11637 = count__10999;
var G__11638 = (i__11000 + (1));
seq__10997 = G__11635;
chunk__10998 = G__11636;
count__10999 = G__11637;
i__11000 = G__11638;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__10997);
if(temp__5804__auto__){
var seq__10997__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10997__$1)){
var c__5525__auto__ = cljs.core.chunk_first.call(null,seq__10997__$1);
var G__11639 = cljs.core.chunk_rest.call(null,seq__10997__$1);
var G__11640 = c__5525__auto__;
var G__11641 = cljs.core.count.call(null,c__5525__auto__);
var G__11642 = (0);
seq__10997 = G__11639;
chunk__10998 = G__11640;
count__10999 = G__11641;
i__11000 = G__11642;
continue;
} else {
var n = cljs.core.first.call(null,seq__10997__$1);
c3kit.wire.spec_helper.click_BANG_.call(null,["#index-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join(''));

var expected__9789__auto___11643 = cljs.core.assoc.call(null,tic_tac_toe.screens.play_spec.board_4,n,new cljs.core.Keyword(null,"x","x",2099068185));
var actual__9790__auto___11644 = new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.screens.play_spec.state));
if(cljs.core._EQ_.call(null,expected__9789__auto___11643,actual__9790__auto___11644)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__9789__auto___11643;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9757__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9757__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__9790__auto___11644;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9757__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9757__auto__);
}
})()," (using =)"].join('')));
}

cljs.core.swap_BANG_.call(null,tic_tac_toe.screens.play_spec.state,cljs.core.assoc,new cljs.core.Keyword(null,"board","board",-1907017633),tic_tac_toe.screens.play_spec.board_4,new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"x","x",2099068185));


var G__11645 = cljs.core.next.call(null,seq__10997__$1);
var G__11646 = null;
var G__11647 = (0);
var G__11648 = (0);
seq__10997 = G__11645;
chunk__10998 = G__11646;
count__10999 = G__11647;
i__11000 = G__11648;
continue;
}
} else {
return null;
}
}
break;
}
});})(_STAR_parent_description_STAR__orig_val__10917_11607,_STAR_parent_description_STAR__temp_val__10918_11608,description__9652__auto____$1,_STAR_parent_description_STAR__orig_val__10229_11064,_STAR_parent_description_STAR__temp_val__10230_11065,description__9652__auto___11063))
,false),speclj.components.new_characteristic.call(null,"clicking button swaps player in state",((function (_STAR_parent_description_STAR__orig_val__10917_11607,_STAR_parent_description_STAR__temp_val__10918_11608,description__9652__auto____$1,_STAR_parent_description_STAR__orig_val__10229_11064,_STAR_parent_description_STAR__temp_val__10230_11065,description__9652__auto___11063){
return (function (){
var seq__11001 = cljs.core.seq.call(null,cljs.core.range.call(null,(16)));
var chunk__11002 = null;
var count__11003 = (0);
var i__11004 = (0);
while(true){
if((i__11004 < count__11003)){
var n = cljs.core._nth.call(null,chunk__11002,i__11004);
c3kit.wire.spec_helper.click_BANG_.call(null,["#index-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join(''));

var expected__9789__auto___11649 = new cljs.core.Keyword(null,"o","o",-1350007228);
var actual__9790__auto___11650 = new cljs.core.Keyword(null,"player","player",-97687400).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.screens.play_spec.state));
if(cljs.core._EQ_.call(null,expected__9789__auto___11649,actual__9790__auto___11650)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__9789__auto___11649;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9757__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9757__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__9790__auto___11650;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9757__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9757__auto__);
}
})()," (using =)"].join('')));
}

cljs.core.swap_BANG_.call(null,tic_tac_toe.screens.play_spec.state,cljs.core.assoc,new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"board","board",-1907017633),tic_tac_toe.screens.play_spec.board_4);


var G__11651 = seq__11001;
var G__11652 = chunk__11002;
var G__11653 = count__11003;
var G__11654 = (i__11004 + (1));
seq__11001 = G__11651;
chunk__11002 = G__11652;
count__11003 = G__11653;
i__11004 = G__11654;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__11001);
if(temp__5804__auto__){
var seq__11001__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11001__$1)){
var c__5525__auto__ = cljs.core.chunk_first.call(null,seq__11001__$1);
var G__11655 = cljs.core.chunk_rest.call(null,seq__11001__$1);
var G__11656 = c__5525__auto__;
var G__11657 = cljs.core.count.call(null,c__5525__auto__);
var G__11658 = (0);
seq__11001 = G__11655;
chunk__11002 = G__11656;
count__11003 = G__11657;
i__11004 = G__11658;
continue;
} else {
var n = cljs.core.first.call(null,seq__11001__$1);
c3kit.wire.spec_helper.click_BANG_.call(null,["#index-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join(''));

var expected__9789__auto___11659 = new cljs.core.Keyword(null,"o","o",-1350007228);
var actual__9790__auto___11660 = new cljs.core.Keyword(null,"player","player",-97687400).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.screens.play_spec.state));
if(cljs.core._EQ_.call(null,expected__9789__auto___11659,actual__9790__auto___11660)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__9789__auto___11659;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9757__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9757__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__9790__auto___11660;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9757__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9757__auto__);
}
})()," (using =)"].join('')));
}

cljs.core.swap_BANG_.call(null,tic_tac_toe.screens.play_spec.state,cljs.core.assoc,new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"board","board",-1907017633),tic_tac_toe.screens.play_spec.board_4);


var G__11661 = cljs.core.next.call(null,seq__11001__$1);
var G__11662 = null;
var G__11663 = (0);
var G__11664 = (0);
seq__11001 = G__11661;
chunk__11002 = G__11662;
count__11003 = G__11663;
i__11004 = G__11664;
continue;
}
} else {
return null;
}
}
break;
}
});})(_STAR_parent_description_STAR__orig_val__10917_11607,_STAR_parent_description_STAR__temp_val__10918_11608,description__9652__auto____$1,_STAR_parent_description_STAR__orig_val__10229_11064,_STAR_parent_description_STAR__temp_val__10230_11065,description__9652__auto___11063))
,false),speclj.components.new_characteristic.call(null,"clicking button toggles human? to false if mode 2 or 3",((function (_STAR_parent_description_STAR__orig_val__10917_11607,_STAR_parent_description_STAR__temp_val__10918_11608,description__9652__auto____$1,_STAR_parent_description_STAR__orig_val__10229_11064,_STAR_parent_description_STAR__temp_val__10230_11065,description__9652__auto___11063){
return (function (){
var ai_turn_orig_val__11005 = tic_tac_toe.screens.play.ai_turn;
var ai_turn_temp_val__11006 = speclj.stub.stub.call(null,new cljs.core.Keyword(null,"ai-turn","ai-turn",-1581895352),cljs.core.PersistentArrayMap.EMPTY);
(tic_tac_toe.screens.play.ai_turn = ai_turn_temp_val__11006);

try{var seq__11007 = cljs.core.seq.call(null,cljs.core.range.call(null,(16)));
var chunk__11012 = null;
var count__11013 = (0);
var i__11014 = (0);
while(true){
if((i__11014 < count__11013)){
var n = cljs.core._nth.call(null,chunk__11012,i__11014);
var seq__11015_11665 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(3)], null));
var chunk__11016_11666 = null;
var count__11017_11667 = (0);
var i__11018_11668 = (0);
while(true){
if((i__11018_11668 < count__11017_11667)){
var mode_11669 = cljs.core._nth.call(null,chunk__11016_11666,i__11018_11668);
cljs.core.swap_BANG_.call(null,tic_tac_toe.screens.play_spec.state,cljs.core.assoc,new cljs.core.Keyword(null,"mode","mode",654403691),mode_11669);

c3kit.wire.spec_helper.render.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tic_tac_toe.render_screen.render_screen,tic_tac_toe.screens.play_spec.state], null));

c3kit.wire.spec_helper.click_BANG_.call(null,["#index-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join(''));

var expected__9789__auto___11670 = false;
var actual__9790__auto___11671 = new cljs.core.Keyword(null,"human?","human?",-2017219054).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.screens.play_spec.state));
if(cljs.core._EQ_.call(null,expected__9789__auto___11670,actual__9790__auto___11671)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__9789__auto___11670;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9757__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9757__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__9790__auto___11671;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9757__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9757__auto__);
}
})()," (using =)"].join('')));
}

cljs.core.swap_BANG_.call(null,tic_tac_toe.screens.play_spec.state,cljs.core.assoc,new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"board","board",-1907017633),tic_tac_toe.screens.play_spec.board_4);


var G__11672 = seq__11015_11665;
var G__11673 = chunk__11016_11666;
var G__11674 = count__11017_11667;
var G__11675 = (i__11018_11668 + (1));
seq__11015_11665 = G__11672;
chunk__11016_11666 = G__11673;
count__11017_11667 = G__11674;
i__11018_11668 = G__11675;
continue;
} else {
var temp__5804__auto___11676 = cljs.core.seq.call(null,seq__11015_11665);
if(temp__5804__auto___11676){
var seq__11015_11677__$1 = temp__5804__auto___11676;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11015_11677__$1)){
var c__5525__auto___11678 = cljs.core.chunk_first.call(null,seq__11015_11677__$1);
var G__11679 = cljs.core.chunk_rest.call(null,seq__11015_11677__$1);
var G__11680 = c__5525__auto___11678;
var G__11681 = cljs.core.count.call(null,c__5525__auto___11678);
var G__11682 = (0);
seq__11015_11665 = G__11679;
chunk__11016_11666 = G__11680;
count__11017_11667 = G__11681;
i__11018_11668 = G__11682;
continue;
} else {
var mode_11683 = cljs.core.first.call(null,seq__11015_11677__$1);
cljs.core.swap_BANG_.call(null,tic_tac_toe.screens.play_spec.state,cljs.core.assoc,new cljs.core.Keyword(null,"mode","mode",654403691),mode_11683);

c3kit.wire.spec_helper.render.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tic_tac_toe.render_screen.render_screen,tic_tac_toe.screens.play_spec.state], null));

c3kit.wire.spec_helper.click_BANG_.call(null,["#index-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join(''));

var expected__9789__auto___11684 = false;
var actual__9790__auto___11685 = new cljs.core.Keyword(null,"human?","human?",-2017219054).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.screens.play_spec.state));
if(cljs.core._EQ_.call(null,expected__9789__auto___11684,actual__9790__auto___11685)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__9789__auto___11684;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9757__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9757__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__9790__auto___11685;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9757__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9757__auto__);
}
})()," (using =)"].join('')));
}

cljs.core.swap_BANG_.call(null,tic_tac_toe.screens.play_spec.state,cljs.core.assoc,new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"board","board",-1907017633),tic_tac_toe.screens.play_spec.board_4);


var G__11686 = cljs.core.next.call(null,seq__11015_11677__$1);
var G__11687 = null;
var G__11688 = (0);
var G__11689 = (0);
seq__11015_11665 = G__11686;
chunk__11016_11666 = G__11687;
count__11017_11667 = G__11688;
i__11018_11668 = G__11689;
continue;
}
} else {
}
}
break;
}

var G__11690 = seq__11007;
var G__11691 = chunk__11012;
var G__11692 = count__11013;
var G__11693 = (i__11014 + (1));
seq__11007 = G__11690;
chunk__11012 = G__11691;
count__11013 = G__11692;
i__11014 = G__11693;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__11007);
if(temp__5804__auto__){
var seq__11007__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11007__$1)){
var c__5525__auto__ = cljs.core.chunk_first.call(null,seq__11007__$1);
var G__11694 = cljs.core.chunk_rest.call(null,seq__11007__$1);
var G__11695 = c__5525__auto__;
var G__11696 = cljs.core.count.call(null,c__5525__auto__);
var G__11697 = (0);
seq__11007 = G__11694;
chunk__11012 = G__11695;
count__11013 = G__11696;
i__11014 = G__11697;
continue;
} else {
var n = cljs.core.first.call(null,seq__11007__$1);
var seq__11008_11698 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(3)], null));
var chunk__11009_11699 = null;
var count__11010_11700 = (0);
var i__11011_11701 = (0);
while(true){
if((i__11011_11701 < count__11010_11700)){
var mode_11702 = cljs.core._nth.call(null,chunk__11009_11699,i__11011_11701);
cljs.core.swap_BANG_.call(null,tic_tac_toe.screens.play_spec.state,cljs.core.assoc,new cljs.core.Keyword(null,"mode","mode",654403691),mode_11702);

c3kit.wire.spec_helper.render.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tic_tac_toe.render_screen.render_screen,tic_tac_toe.screens.play_spec.state], null));

c3kit.wire.spec_helper.click_BANG_.call(null,["#index-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join(''));

var expected__9789__auto___11703 = false;
var actual__9790__auto___11704 = new cljs.core.Keyword(null,"human?","human?",-2017219054).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.screens.play_spec.state));
if(cljs.core._EQ_.call(null,expected__9789__auto___11703,actual__9790__auto___11704)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__9789__auto___11703;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9757__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9757__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__9790__auto___11704;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9757__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9757__auto__);
}
})()," (using =)"].join('')));
}

cljs.core.swap_BANG_.call(null,tic_tac_toe.screens.play_spec.state,cljs.core.assoc,new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"board","board",-1907017633),tic_tac_toe.screens.play_spec.board_4);


var G__11705 = seq__11008_11698;
var G__11706 = chunk__11009_11699;
var G__11707 = count__11010_11700;
var G__11708 = (i__11011_11701 + (1));
seq__11008_11698 = G__11705;
chunk__11009_11699 = G__11706;
count__11010_11700 = G__11707;
i__11011_11701 = G__11708;
continue;
} else {
var temp__5804__auto___11709__$1 = cljs.core.seq.call(null,seq__11008_11698);
if(temp__5804__auto___11709__$1){
var seq__11008_11710__$1 = temp__5804__auto___11709__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11008_11710__$1)){
var c__5525__auto___11711 = cljs.core.chunk_first.call(null,seq__11008_11710__$1);
var G__11712 = cljs.core.chunk_rest.call(null,seq__11008_11710__$1);
var G__11713 = c__5525__auto___11711;
var G__11714 = cljs.core.count.call(null,c__5525__auto___11711);
var G__11715 = (0);
seq__11008_11698 = G__11712;
chunk__11009_11699 = G__11713;
count__11010_11700 = G__11714;
i__11011_11701 = G__11715;
continue;
} else {
var mode_11716 = cljs.core.first.call(null,seq__11008_11710__$1);
cljs.core.swap_BANG_.call(null,tic_tac_toe.screens.play_spec.state,cljs.core.assoc,new cljs.core.Keyword(null,"mode","mode",654403691),mode_11716);

c3kit.wire.spec_helper.render.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tic_tac_toe.render_screen.render_screen,tic_tac_toe.screens.play_spec.state], null));

c3kit.wire.spec_helper.click_BANG_.call(null,["#index-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join(''));

var expected__9789__auto___11717 = false;
var actual__9790__auto___11718 = new cljs.core.Keyword(null,"human?","human?",-2017219054).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.screens.play_spec.state));
if(cljs.core._EQ_.call(null,expected__9789__auto___11717,actual__9790__auto___11718)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__9789__auto___11717;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9757__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9757__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__9790__auto___11718;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9757__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9757__auto__);
}
})()," (using =)"].join('')));
}

cljs.core.swap_BANG_.call(null,tic_tac_toe.screens.play_spec.state,cljs.core.assoc,new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"board","board",-1907017633),tic_tac_toe.screens.play_spec.board_4);


var G__11719 = cljs.core.next.call(null,seq__11008_11710__$1);
var G__11720 = null;
var G__11721 = (0);
var G__11722 = (0);
seq__11008_11698 = G__11719;
chunk__11009_11699 = G__11720;
count__11010_11700 = G__11721;
i__11011_11701 = G__11722;
continue;
}
} else {
}
}
break;
}

var G__11723 = cljs.core.next.call(null,seq__11007__$1);
var G__11724 = null;
var G__11725 = (0);
var G__11726 = (0);
seq__11007 = G__11723;
chunk__11012 = G__11724;
count__11013 = G__11725;
i__11014 = G__11726;
continue;
}
} else {
return null;
}
}
break;
}
}finally {(tic_tac_toe.screens.play.ai_turn = ai_turn_orig_val__11005);
}});})(_STAR_parent_description_STAR__orig_val__10917_11607,_STAR_parent_description_STAR__temp_val__10918_11608,description__9652__auto____$1,_STAR_parent_description_STAR__orig_val__10229_11064,_STAR_parent_description_STAR__temp_val__10230_11065,description__9652__auto___11063))
,false),speclj.components.new_characteristic.call(null,"clicking button does not toggle human if mode 1",((function (_STAR_parent_description_STAR__orig_val__10917_11607,_STAR_parent_description_STAR__temp_val__10918_11608,description__9652__auto____$1,_STAR_parent_description_STAR__orig_val__10229_11064,_STAR_parent_description_STAR__temp_val__10230_11065,description__9652__auto___11063){
return (function (){
var ai_turn_orig_val__11019 = tic_tac_toe.screens.play.ai_turn;
var ai_turn_temp_val__11020 = speclj.stub.stub.call(null,new cljs.core.Keyword(null,"ai-turn","ai-turn",-1581895352),cljs.core.PersistentArrayMap.EMPTY);
(tic_tac_toe.screens.play.ai_turn = ai_turn_temp_val__11020);

try{var seq__11021 = cljs.core.seq.call(null,cljs.core.range.call(null,(16)));
var chunk__11022 = null;
var count__11023 = (0);
var i__11024 = (0);
while(true){
if((i__11024 < count__11023)){
var n = cljs.core._nth.call(null,chunk__11022,i__11024);
c3kit.wire.spec_helper.click_BANG_.call(null,["#index-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join(''));

var expected__9789__auto___11727 = true;
var actual__9790__auto___11728 = new cljs.core.Keyword(null,"human?","human?",-2017219054).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.screens.play_spec.state));
if(cljs.core._EQ_.call(null,expected__9789__auto___11727,actual__9790__auto___11728)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__9789__auto___11727;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9757__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9757__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__9790__auto___11728;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9757__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9757__auto__);
}
})()," (using =)"].join('')));
}

cljs.core.swap_BANG_.call(null,tic_tac_toe.screens.play_spec.state,cljs.core.assoc,new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"board","board",-1907017633),tic_tac_toe.screens.play_spec.board_4);


var G__11729 = seq__11021;
var G__11730 = chunk__11022;
var G__11731 = count__11023;
var G__11732 = (i__11024 + (1));
seq__11021 = G__11729;
chunk__11022 = G__11730;
count__11023 = G__11731;
i__11024 = G__11732;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__11021);
if(temp__5804__auto__){
var seq__11021__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11021__$1)){
var c__5525__auto__ = cljs.core.chunk_first.call(null,seq__11021__$1);
var G__11733 = cljs.core.chunk_rest.call(null,seq__11021__$1);
var G__11734 = c__5525__auto__;
var G__11735 = cljs.core.count.call(null,c__5525__auto__);
var G__11736 = (0);
seq__11021 = G__11733;
chunk__11022 = G__11734;
count__11023 = G__11735;
i__11024 = G__11736;
continue;
} else {
var n = cljs.core.first.call(null,seq__11021__$1);
c3kit.wire.spec_helper.click_BANG_.call(null,["#index-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join(''));

var expected__9789__auto___11737 = true;
var actual__9790__auto___11738 = new cljs.core.Keyword(null,"human?","human?",-2017219054).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.screens.play_spec.state));
if(cljs.core._EQ_.call(null,expected__9789__auto___11737,actual__9790__auto___11738)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__9789__auto___11737;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9757__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9757__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__9790__auto___11738;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9757__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9757__auto__);
}
})()," (using =)"].join('')));
}

cljs.core.swap_BANG_.call(null,tic_tac_toe.screens.play_spec.state,cljs.core.assoc,new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"board","board",-1907017633),tic_tac_toe.screens.play_spec.board_4);


var G__11739 = cljs.core.next.call(null,seq__11021__$1);
var G__11740 = null;
var G__11741 = (0);
var G__11742 = (0);
seq__11021 = G__11739;
chunk__11022 = G__11740;
count__11023 = G__11741;
i__11024 = G__11742;
continue;
}
} else {
return null;
}
}
break;
}
}finally {(tic_tac_toe.screens.play.ai_turn = ai_turn_orig_val__11019);
}});})(_STAR_parent_description_STAR__orig_val__10917_11607,_STAR_parent_description_STAR__temp_val__10918_11608,description__9652__auto____$1,_STAR_parent_description_STAR__orig_val__10229_11064,_STAR_parent_description_STAR__temp_val__10230_11065,description__9652__auto___11063))
,false),speclj.components.new_characteristic.call(null,"clicking button adds token to button HTML",((function (_STAR_parent_description_STAR__orig_val__10917_11607,_STAR_parent_description_STAR__temp_val__10918_11608,description__9652__auto____$1,_STAR_parent_description_STAR__orig_val__10229_11064,_STAR_parent_description_STAR__temp_val__10230_11065,description__9652__auto___11063){
return (function (){
var seq__11025 = cljs.core.seq.call(null,cljs.core.range.call(null,(16)));
var chunk__11026 = null;
var count__11027 = (0);
var i__11028 = (0);
while(true){
if((i__11028 < count__11027)){
var n = cljs.core._nth.call(null,chunk__11026,i__11028);
c3kit.wire.spec_helper.click_BANG_.call(null,["#index-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join(''));

var expected__9789__auto___11743 = "X";
var actual__9790__auto___11744 = c3kit.wire.spec_helper.text.call(null,["#index-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join(''));
if(cljs.core._EQ_.call(null,expected__9789__auto___11743,actual__9790__auto___11744)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__9789__auto___11743;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9757__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9757__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__9790__auto___11744;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9757__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9757__auto__);
}
})()," (using =)"].join('')));
}

cljs.core.reset_BANG_.call(null,tic_tac_toe.screens.play_spec.state,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"board","board",-1907017633),tic_tac_toe.screens.play_spec.board_4,new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"current-screen","current-screen",-1454713691),new cljs.core.Keyword(null,"play","play",-580418022),new cljs.core.Keyword(null,"mode","mode",654403691),(1)], null));


var G__11745 = seq__11025;
var G__11746 = chunk__11026;
var G__11747 = count__11027;
var G__11748 = (i__11028 + (1));
seq__11025 = G__11745;
chunk__11026 = G__11746;
count__11027 = G__11747;
i__11028 = G__11748;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__11025);
if(temp__5804__auto__){
var seq__11025__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11025__$1)){
var c__5525__auto__ = cljs.core.chunk_first.call(null,seq__11025__$1);
var G__11749 = cljs.core.chunk_rest.call(null,seq__11025__$1);
var G__11750 = c__5525__auto__;
var G__11751 = cljs.core.count.call(null,c__5525__auto__);
var G__11752 = (0);
seq__11025 = G__11749;
chunk__11026 = G__11750;
count__11027 = G__11751;
i__11028 = G__11752;
continue;
} else {
var n = cljs.core.first.call(null,seq__11025__$1);
c3kit.wire.spec_helper.click_BANG_.call(null,["#index-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join(''));

var expected__9789__auto___11753 = "X";
var actual__9790__auto___11754 = c3kit.wire.spec_helper.text.call(null,["#index-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join(''));
if(cljs.core._EQ_.call(null,expected__9789__auto___11753,actual__9790__auto___11754)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__9789__auto___11753;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9757__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9757__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__9790__auto___11754;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9757__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9757__auto__);
}
})()," (using =)"].join('')));
}

cljs.core.reset_BANG_.call(null,tic_tac_toe.screens.play_spec.state,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"board","board",-1907017633),tic_tac_toe.screens.play_spec.board_4,new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"current-screen","current-screen",-1454713691),new cljs.core.Keyword(null,"play","play",-580418022),new cljs.core.Keyword(null,"mode","mode",654403691),(1)], null));


var G__11755 = cljs.core.next.call(null,seq__11025__$1);
var G__11756 = null;
var G__11757 = (0);
var G__11758 = (0);
seq__11025 = G__11755;
chunk__11026 = G__11756;
count__11027 = G__11757;
i__11028 = G__11758;
continue;
}
} else {
return null;
}
}
break;
}
});})(_STAR_parent_description_STAR__orig_val__10917_11607,_STAR_parent_description_STAR__temp_val__10918_11608,description__9652__auto____$1,_STAR_parent_description_STAR__orig_val__10229_11064,_STAR_parent_description_STAR__temp_val__10230_11065,description__9652__auto___11063))
,false),speclj.components.new_characteristic.call(null,"clicking button disables button",((function (_STAR_parent_description_STAR__orig_val__10917_11607,_STAR_parent_description_STAR__temp_val__10918_11608,description__9652__auto____$1,_STAR_parent_description_STAR__orig_val__10229_11064,_STAR_parent_description_STAR__temp_val__10230_11065,description__9652__auto___11063){
return (function (){
var seq__11029 = cljs.core.seq.call(null,cljs.core.range.call(null,(16)));
var chunk__11030 = null;
var count__11031 = (0);
var i__11032 = (0);
while(true){
if((i__11032 < count__11031)){
var n = cljs.core._nth.call(null,chunk__11030,i__11032);
c3kit.wire.spec_helper.click_BANG_.call(null,["#index-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join(''));

var expected__9789__auto___11759 = true;
var actual__9790__auto___11760 = c3kit.wire.spec_helper.disabled_QMARK_.call(null,["#index-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join(''));
if(cljs.core._EQ_.call(null,expected__9789__auto___11759,actual__9790__auto___11760)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__9789__auto___11759;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9757__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9757__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__9790__auto___11760;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9757__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9757__auto__);
}
})()," (using =)"].join('')));
}

cljs.core.reset_BANG_.call(null,tic_tac_toe.screens.play_spec.state,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"board","board",-1907017633),tic_tac_toe.screens.play_spec.board_4,new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"current-screen","current-screen",-1454713691),new cljs.core.Keyword(null,"play","play",-580418022),new cljs.core.Keyword(null,"mode","mode",654403691),(1)], null));


var G__11761 = seq__11029;
var G__11762 = chunk__11030;
var G__11763 = count__11031;
var G__11764 = (i__11032 + (1));
seq__11029 = G__11761;
chunk__11030 = G__11762;
count__11031 = G__11763;
i__11032 = G__11764;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__11029);
if(temp__5804__auto__){
var seq__11029__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11029__$1)){
var c__5525__auto__ = cljs.core.chunk_first.call(null,seq__11029__$1);
var G__11765 = cljs.core.chunk_rest.call(null,seq__11029__$1);
var G__11766 = c__5525__auto__;
var G__11767 = cljs.core.count.call(null,c__5525__auto__);
var G__11768 = (0);
seq__11029 = G__11765;
chunk__11030 = G__11766;
count__11031 = G__11767;
i__11032 = G__11768;
continue;
} else {
var n = cljs.core.first.call(null,seq__11029__$1);
c3kit.wire.spec_helper.click_BANG_.call(null,["#index-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join(''));

var expected__9789__auto___11769 = true;
var actual__9790__auto___11770 = c3kit.wire.spec_helper.disabled_QMARK_.call(null,["#index-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join(''));
if(cljs.core._EQ_.call(null,expected__9789__auto___11769,actual__9790__auto___11770)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__9789__auto___11769;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9757__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9757__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__9790__auto___11770;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9757__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9757__auto__);
}
})()," (using =)"].join('')));
}

cljs.core.reset_BANG_.call(null,tic_tac_toe.screens.play_spec.state,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"board","board",-1907017633),tic_tac_toe.screens.play_spec.board_4,new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"current-screen","current-screen",-1454713691),new cljs.core.Keyword(null,"play","play",-580418022),new cljs.core.Keyword(null,"mode","mode",654403691),(1)], null));


var G__11771 = cljs.core.next.call(null,seq__11029__$1);
var G__11772 = null;
var G__11773 = (0);
var G__11774 = (0);
seq__11029 = G__11771;
chunk__11030 = G__11772;
count__11031 = G__11773;
i__11032 = G__11774;
continue;
}
} else {
return null;
}
}
break;
}
});})(_STAR_parent_description_STAR__orig_val__10917_11607,_STAR_parent_description_STAR__temp_val__10918_11608,description__9652__auto____$1,_STAR_parent_description_STAR__orig_val__10229_11064,_STAR_parent_description_STAR__temp_val__10230_11065,description__9652__auto___11063))
,false),speclj.components.new_characteristic.call(null,"clicking button triggers AI if mode 2 or 3",((function (_STAR_parent_description_STAR__orig_val__10917_11607,_STAR_parent_description_STAR__temp_val__10918_11608,description__9652__auto____$1,_STAR_parent_description_STAR__orig_val__10229_11064,_STAR_parent_description_STAR__temp_val__10230_11065,description__9652__auto___11063){
return (function (){
var take_turn_orig_val__11033 = tic_tac_toe.player.take_turn;
var take_turn_temp_val__11034 = speclj.stub.stub.call(null,new cljs.core.Keyword(null,"turn","turn",75759344),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"return","return",-1891502105),tic_tac_toe.screens.play_spec.board_4], null));
(tic_tac_toe.player.take_turn = take_turn_temp_val__11034);

try{var seq__11035 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(3)], null));
var chunk__11048 = null;
var count__11049 = (0);
var i__11050 = (0);
while(true){
if((i__11050 < count__11049)){
var ai = cljs.core._nth.call(null,chunk__11048,i__11050);
var seq__11051_11775 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(3)], null));
var chunk__11056_11776 = null;
var count__11057_11777 = (0);
var i__11058_11778 = (0);
while(true){
if((i__11058_11778 < count__11057_11777)){
var mode_11779 = cljs.core._nth.call(null,chunk__11056_11776,i__11058_11778);
var seq__11059_11780 = cljs.core.seq.call(null,cljs.core.range.call(null,(16)));
var chunk__11060_11781 = null;
var count__11061_11782 = (0);
var i__11062_11783 = (0);
while(true){
if((i__11062_11783 < count__11061_11782)){
var n_11784 = cljs.core._nth.call(null,chunk__11060_11781,i__11062_11783);
cljs.core.swap_BANG_.call(null,tic_tac_toe.screens.play_spec.state,cljs.core.assoc,new cljs.core.Keyword(null,"mode","mode",654403691),mode_11779,new cljs.core.Keyword(null,"first-ai-level","first-ai-level",1004633644),ai,new cljs.core.Keyword(null,"player","player",-97687400),((cljs.core._EQ_.call(null,(2),mode_11779))?new cljs.core.Keyword(null,"x","x",2099068185):new cljs.core.Keyword(null,"o","o",-1350007228)),new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"gui","gui",604532813));

c3kit.wire.spec_helper.render.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tic_tac_toe.render_screen.render_screen,tic_tac_toe.screens.play_spec.state], null));

c3kit.wire.spec_helper.click_BANG_.call(null,["#index-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n_11784)].join(''));

var name__10036__auto___11785 = new cljs.core.Keyword(null,"turn","turn",75759344);
var options__10037__auto___11786 = cljs.core.PersistentArrayMap.EMPTY;
var invocations__10038__auto___11787 = speclj.stub.invocations_of.call(null,name__10036__auto___11785);
var times__10039__auto___11788 = new cljs.core.Keyword(null,"times","times",1671571467).cljs$core$IFn$_invoke$arity$1(options__10037__auto___11786);
var times_QMARK___10040__auto___11789 = typeof times__10039__auto___11788 === 'number';
var check_params_QMARK___10041__auto___11790 = cljs.core.contains_QMARK_.call(null,options__10037__auto___11786,new cljs.core.Keyword(null,"with","with",-1536296876));
var with__10042__auto___11791 = new cljs.core.Keyword(null,"with","with",-1536296876).cljs$core$IFn$_invoke$arity$1(options__10037__auto___11786);
var with__10042__auto___11792__$1 = (((with__10042__auto___11791 == null))?cljs.core.PersistentVector.EMPTY:with__10042__auto___11791);
var invocations_str__10043__auto___11793 = ((function (seq__11059_11780,chunk__11060_11781,count__11061_11782,i__11062_11783,seq__11051_11775,chunk__11056_11776,count__11057_11777,i__11058_11778,seq__11035,chunk__11048,count__11049,i__11050,name__10036__auto___11785,options__10037__auto___11786,invocations__10038__auto___11787,times__10039__auto___11788,times_QMARK___10040__auto___11789,check_params_QMARK___10041__auto___11790,with__10042__auto___11791,with__10042__auto___11792__$1,n_11784,mode_11779,ai,take_turn_orig_val__11033,take_turn_temp_val__11034,_STAR_parent_description_STAR__orig_val__10917_11607,_STAR_parent_description_STAR__temp_val__10918_11608,description__9652__auto____$1,_STAR_parent_description_STAR__orig_val__10229_11064,_STAR_parent_description_STAR__temp_val__10230_11065,description__9652__auto___11063){
return (function (p1__10033__10044__auto__){
if(cljs.core._EQ_.call(null,(1),p1__10033__10044__auto__)){
return "invocation";
} else {
return "invocations";
}
});})(seq__11059_11780,chunk__11060_11781,count__11061_11782,i__11062_11783,seq__11051_11775,chunk__11056_11776,count__11057_11777,i__11058_11778,seq__11035,chunk__11048,count__11049,i__11050,name__10036__auto___11785,options__10037__auto___11786,invocations__10038__auto___11787,times__10039__auto___11788,times_QMARK___10040__auto___11789,check_params_QMARK___10041__auto___11790,with__10042__auto___11791,with__10042__auto___11792__$1,n_11784,mode_11779,ai,take_turn_orig_val__11033,take_turn_temp_val__11034,_STAR_parent_description_STAR__orig_val__10917_11607,_STAR_parent_description_STAR__temp_val__10918_11608,description__9652__auto____$1,_STAR_parent_description_STAR__orig_val__10229_11064,_STAR_parent_description_STAR__temp_val__10230_11065,description__9652__auto___11063))
;
if(((times_QMARK___10040__auto___11789) && (check_params_QMARK___10041__auto___11790))){
var matching_invocations__10045__auto___11794 = cljs.core.filter.call(null,((function (seq__11059_11780,chunk__11060_11781,count__11061_11782,i__11062_11783,seq__11051_11775,chunk__11056_11776,count__11057_11777,i__11058_11778,seq__11035,chunk__11048,count__11049,i__11050,name__10036__auto___11785,options__10037__auto___11786,invocations__10038__auto___11787,times__10039__auto___11788,times_QMARK___10040__auto___11789,check_params_QMARK___10041__auto___11790,with__10042__auto___11791,with__10042__auto___11792__$1,invocations_str__10043__auto___11793,n_11784,mode_11779,ai,take_turn_orig_val__11033,take_turn_temp_val__11034,_STAR_parent_description_STAR__orig_val__10917_11607,_STAR_parent_description_STAR__temp_val__10918_11608,description__9652__auto____$1,_STAR_parent_description_STAR__orig_val__10229_11064,_STAR_parent_description_STAR__temp_val__10230_11065,description__9652__auto___11063){
return (function (p1__10034__10046__auto__){
return speclj.stub.params_match_QMARK_.call(null,with__10042__auto___11792__$1,p1__10034__10046__auto__);
});})(seq__11059_11780,chunk__11060_11781,count__11061_11782,i__11062_11783,seq__11051_11775,chunk__11056_11776,count__11057_11777,i__11058_11778,seq__11035,chunk__11048,count__11049,i__11050,name__10036__auto___11785,options__10037__auto___11786,invocations__10038__auto___11787,times__10039__auto___11788,times_QMARK___10040__auto___11789,check_params_QMARK___10041__auto___11790,with__10042__auto___11791,with__10042__auto___11792__$1,invocations_str__10043__auto___11793,n_11784,mode_11779,ai,take_turn_orig_val__11033,take_turn_temp_val__11034,_STAR_parent_description_STAR__orig_val__10917_11607,_STAR_parent_description_STAR__temp_val__10918_11608,description__9652__auto____$1,_STAR_parent_description_STAR__orig_val__10229_11064,_STAR_parent_description_STAR__temp_val__10230_11065,description__9652__auto___11063))
,invocations__10038__auto___11787);
var matching_count__10047__auto___11795 = cljs.core.count.call(null,matching_invocations__10045__auto___11794);
if(cljs.core._EQ_.call(null,times__10039__auto___11788,matching_count__10047__auto___11795)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(times__10039__auto___11788)," ",invocations_str__10043__auto___11793.call(null,times__10039__auto___11788)," of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__10036__auto___11785)," with ",cljs.core.pr_str.call(null,with__10042__auto___11792__$1),speclj.platform.endl,"     got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(matching_count__10047__auto___11795)," ",invocations_str__10043__auto___11793.call(null,matching_count__10047__auto___11795)].join('')));
}
} else {
if(check_params_QMARK___10041__auto___11790){
if(cljs.core.truth_(cljs.core.some.call(null,((function (seq__11059_11780,chunk__11060_11781,count__11061_11782,i__11062_11783,seq__11051_11775,chunk__11056_11776,count__11057_11777,i__11058_11778,seq__11035,chunk__11048,count__11049,i__11050,name__10036__auto___11785,options__10037__auto___11786,invocations__10038__auto___11787,times__10039__auto___11788,times_QMARK___10040__auto___11789,check_params_QMARK___10041__auto___11790,with__10042__auto___11791,with__10042__auto___11792__$1,invocations_str__10043__auto___11793,n_11784,mode_11779,ai,take_turn_orig_val__11033,take_turn_temp_val__11034,_STAR_parent_description_STAR__orig_val__10917_11607,_STAR_parent_description_STAR__temp_val__10918_11608,description__9652__auto____$1,_STAR_parent_description_STAR__orig_val__10229_11064,_STAR_parent_description_STAR__temp_val__10230_11065,description__9652__auto___11063){
return (function (p1__10035__10048__auto__){
return speclj.stub.params_match_QMARK_.call(null,with__10042__auto___11792__$1,p1__10035__10048__auto__);
});})(seq__11059_11780,chunk__11060_11781,count__11061_11782,i__11062_11783,seq__11051_11775,chunk__11056_11776,count__11057_11777,i__11058_11778,seq__11035,chunk__11048,count__11049,i__11050,name__10036__auto___11785,options__10037__auto___11786,invocations__10038__auto___11787,times__10039__auto___11788,times_QMARK___10040__auto___11789,check_params_QMARK___10041__auto___11790,with__10042__auto___11791,with__10042__auto___11792__$1,invocations_str__10043__auto___11793,n_11784,mode_11779,ai,take_turn_orig_val__11033,take_turn_temp_val__11034,_STAR_parent_description_STAR__orig_val__10917_11607,_STAR_parent_description_STAR__temp_val__10918_11608,description__9652__auto____$1,_STAR_parent_description_STAR__orig_val__10229_11064,_STAR_parent_description_STAR__temp_val__10230_11065,description__9652__auto___11063))
,invocations__10038__auto___11787))){
} else {
throw (new speclj.platform.SpecFailure(["Expected: invocation of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__10036__auto___11785)," with ",cljs.core.pr_str.call(null,with__10042__auto___11792__$1),speclj.platform.endl,"     got: ",cljs.core.pr_str.call(null,invocations__10038__auto___11787)].join('')));
}
} else {
if(times_QMARK___10040__auto___11789){
if(cljs.core._EQ_.call(null,times__10039__auto___11788,cljs.core.count.call(null,invocations__10038__auto___11787))){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(times__10039__auto___11788)," ",invocations_str__10043__auto___11793.call(null,times__10039__auto___11788)," of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__10036__auto___11785),speclj.platform.endl,"     got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,invocations__10038__auto___11787))].join('')));
}
} else {
if(cljs.core.seq.call(null,invocations__10038__auto___11787)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: an invocation of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__10036__auto___11785),speclj.platform.endl,"     got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,invocations__10038__auto___11787))].join('')));
}

}
}
}

var expected__9789__auto___11796 = ((cljs.core._EQ_.call(null,(2),mode_11779))?new cljs.core.Keyword(null,"x","x",2099068185):new cljs.core.Keyword(null,"o","o",-1350007228));
var actual__9790__auto___11797 = new cljs.core.Keyword(null,"player","player",-97687400).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.screens.play_spec.state));
if(cljs.core._EQ_.call(null,expected__9789__auto___11796,actual__9790__auto___11797)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__9789__auto___11796;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9757__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9757__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__9790__auto___11797;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9757__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9757__auto__);
}
})()," (using =)"].join('')));
}

cljs.core.reset_BANG_.call(null,tic_tac_toe.screens.play_spec.state,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"board","board",-1907017633),tic_tac_toe.screens.play_spec.board_4,new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"current-screen","current-screen",-1454713691),new cljs.core.Keyword(null,"play","play",-580418022)], null));


var G__11798 = seq__11059_11780;
var G__11799 = chunk__11060_11781;
var G__11800 = count__11061_11782;
var G__11801 = (i__11062_11783 + (1));
seq__11059_11780 = G__11798;
chunk__11060_11781 = G__11799;
count__11061_11782 = G__11800;
i__11062_11783 = G__11801;
continue;
} else {
var temp__5804__auto___11802 = cljs.core.seq.call(null,seq__11059_11780);
if(temp__5804__auto___11802){
var seq__11059_11803__$1 = temp__5804__auto___11802;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11059_11803__$1)){
var c__5525__auto___11804 = cljs.core.chunk_first.call(null,seq__11059_11803__$1);
var G__11805 = cljs.core.chunk_rest.call(null,seq__11059_11803__$1);
var G__11806 = c__5525__auto___11804;
var G__11807 = cljs.core.count.call(null,c__5525__auto___11804);
var G__11808 = (0);
seq__11059_11780 = G__11805;
chunk__11060_11781 = G__11806;
count__11061_11782 = G__11807;
i__11062_11783 = G__11808;
continue;
} else {
var n_11809 = cljs.core.first.call(null,seq__11059_11803__$1);
cljs.core.swap_BANG_.call(null,tic_tac_toe.screens.play_spec.state,cljs.core.assoc,new cljs.core.Keyword(null,"mode","mode",654403691),mode_11779,new cljs.core.Keyword(null,"first-ai-level","first-ai-level",1004633644),ai,new cljs.core.Keyword(null,"player","player",-97687400),((cljs.core._EQ_.call(null,(2),mode_11779))?new cljs.core.Keyword(null,"x","x",2099068185):new cljs.core.Keyword(null,"o","o",-1350007228)),new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"gui","gui",604532813));

c3kit.wire.spec_helper.render.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tic_tac_toe.render_screen.render_screen,tic_tac_toe.screens.play_spec.state], null));

c3kit.wire.spec_helper.click_BANG_.call(null,["#index-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n_11809)].join(''));

var name__10036__auto___11810 = new cljs.core.Keyword(null,"turn","turn",75759344);
var options__10037__auto___11811 = cljs.core.PersistentArrayMap.EMPTY;
var invocations__10038__auto___11812 = speclj.stub.invocations_of.call(null,name__10036__auto___11810);
var times__10039__auto___11813 = new cljs.core.Keyword(null,"times","times",1671571467).cljs$core$IFn$_invoke$arity$1(options__10037__auto___11811);
var times_QMARK___10040__auto___11814 = typeof times__10039__auto___11813 === 'number';
var check_params_QMARK___10041__auto___11815 = cljs.core.contains_QMARK_.call(null,options__10037__auto___11811,new cljs.core.Keyword(null,"with","with",-1536296876));
var with__10042__auto___11816 = new cljs.core.Keyword(null,"with","with",-1536296876).cljs$core$IFn$_invoke$arity$1(options__10037__auto___11811);
var with__10042__auto___11817__$1 = (((with__10042__auto___11816 == null))?cljs.core.PersistentVector.EMPTY:with__10042__auto___11816);
var invocations_str__10043__auto___11818 = ((function (seq__11059_11780,chunk__11060_11781,count__11061_11782,i__11062_11783,seq__11051_11775,chunk__11056_11776,count__11057_11777,i__11058_11778,seq__11035,chunk__11048,count__11049,i__11050,name__10036__auto___11810,options__10037__auto___11811,invocations__10038__auto___11812,times__10039__auto___11813,times_QMARK___10040__auto___11814,check_params_QMARK___10041__auto___11815,with__10042__auto___11816,with__10042__auto___11817__$1,n_11809,seq__11059_11803__$1,temp__5804__auto___11802,mode_11779,ai,take_turn_orig_val__11033,take_turn_temp_val__11034,_STAR_parent_description_STAR__orig_val__10917_11607,_STAR_parent_description_STAR__temp_val__10918_11608,description__9652__auto____$1,_STAR_parent_description_STAR__orig_val__10229_11064,_STAR_parent_description_STAR__temp_val__10230_11065,description__9652__auto___11063){
return (function (p1__10033__10044__auto__){
if(cljs.core._EQ_.call(null,(1),p1__10033__10044__auto__)){
return "invocation";
} else {
return "invocations";
}
});})(seq__11059_11780,chunk__11060_11781,count__11061_11782,i__11062_11783,seq__11051_11775,chunk__11056_11776,count__11057_11777,i__11058_11778,seq__11035,chunk__11048,count__11049,i__11050,name__10036__auto___11810,options__10037__auto___11811,invocations__10038__auto___11812,times__10039__auto___11813,times_QMARK___10040__auto___11814,check_params_QMARK___10041__auto___11815,with__10042__auto___11816,with__10042__auto___11817__$1,n_11809,seq__11059_11803__$1,temp__5804__auto___11802,mode_11779,ai,take_turn_orig_val__11033,take_turn_temp_val__11034,_STAR_parent_description_STAR__orig_val__10917_11607,_STAR_parent_description_STAR__temp_val__10918_11608,description__9652__auto____$1,_STAR_parent_description_STAR__orig_val__10229_11064,_STAR_parent_description_STAR__temp_val__10230_11065,description__9652__auto___11063))
;
if(((times_QMARK___10040__auto___11814) && (check_params_QMARK___10041__auto___11815))){
var matching_invocations__10045__auto___11819 = cljs.core.filter.call(null,((function (seq__11059_11780,chunk__11060_11781,count__11061_11782,i__11062_11783,seq__11051_11775,chunk__11056_11776,count__11057_11777,i__11058_11778,seq__11035,chunk__11048,count__11049,i__11050,name__10036__auto___11810,options__10037__auto___11811,invocations__10038__auto___11812,times__10039__auto___11813,times_QMARK___10040__auto___11814,check_params_QMARK___10041__auto___11815,with__10042__auto___11816,with__10042__auto___11817__$1,invocations_str__10043__auto___11818,n_11809,seq__11059_11803__$1,temp__5804__auto___11802,mode_11779,ai,take_turn_orig_val__11033,take_turn_temp_val__11034,_STAR_parent_description_STAR__orig_val__10917_11607,_STAR_parent_description_STAR__temp_val__10918_11608,description__9652__auto____$1,_STAR_parent_description_STAR__orig_val__10229_11064,_STAR_parent_description_STAR__temp_val__10230_11065,description__9652__auto___11063){
return (function (p1__10034__10046__auto__){
return speclj.stub.params_match_QMARK_.call(null,with__10042__auto___11817__$1,p1__10034__10046__auto__);
});})(seq__11059_11780,chunk__11060_11781,count__11061_11782,i__11062_11783,seq__11051_11775,chunk__11056_11776,count__11057_11777,i__11058_11778,seq__11035,chunk__11048,count__11049,i__11050,name__10036__auto___11810,options__10037__auto___11811,invocations__10038__auto___11812,times__10039__auto___11813,times_QMARK___10040__auto___11814,check_params_QMARK___10041__auto___11815,with__10042__auto___11816,with__10042__auto___11817__$1,invocations_str__10043__auto___11818,n_11809,seq__11059_11803__$1,temp__5804__auto___11802,mode_11779,ai,take_turn_orig_val__11033,take_turn_temp_val__11034,_STAR_parent_description_STAR__orig_val__10917_11607,_STAR_parent_description_STAR__temp_val__10918_11608,description__9652__auto____$1,_STAR_parent_description_STAR__orig_val__10229_11064,_STAR_parent_description_STAR__temp_val__10230_11065,description__9652__auto___11063))
,invocations__10038__auto___11812);
var matching_count__10047__auto___11820 = cljs.core.count.call(null,matching_invocations__10045__auto___11819);
if(cljs.core._EQ_.call(null,times__10039__auto___11813,matching_count__10047__auto___11820)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(times__10039__auto___11813)," ",invocations_str__10043__auto___11818.call(null,times__10039__auto___11813)," of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__10036__auto___11810)," with ",cljs.core.pr_str.call(null,with__10042__auto___11817__$1),speclj.platform.endl,"     got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(matching_count__10047__auto___11820)," ",invocations_str__10043__auto___11818.call(null,matching_count__10047__auto___11820)].join('')));
}
} else {
if(check_params_QMARK___10041__auto___11815){
if(cljs.core.truth_(cljs.core.some.call(null,((function (seq__11059_11780,chunk__11060_11781,count__11061_11782,i__11062_11783,seq__11051_11775,chunk__11056_11776,count__11057_11777,i__11058_11778,seq__11035,chunk__11048,count__11049,i__11050,name__10036__auto___11810,options__10037__auto___11811,invocations__10038__auto___11812,times__10039__auto___11813,times_QMARK___10040__auto___11814,check_params_QMARK___10041__auto___11815,with__10042__auto___11816,with__10042__auto___11817__$1,invocations_str__10043__auto___11818,n_11809,seq__11059_11803__$1,temp__5804__auto___11802,mode_11779,ai,take_turn_orig_val__11033,take_turn_temp_val__11034,_STAR_parent_description_STAR__orig_val__10917_11607,_STAR_parent_description_STAR__temp_val__10918_11608,description__9652__auto____$1,_STAR_parent_description_STAR__orig_val__10229_11064,_STAR_parent_description_STAR__temp_val__10230_11065,description__9652__auto___11063){
return (function (p1__10035__10048__auto__){
return speclj.stub.params_match_QMARK_.call(null,with__10042__auto___11817__$1,p1__10035__10048__auto__);
});})(seq__11059_11780,chunk__11060_11781,count__11061_11782,i__11062_11783,seq__11051_11775,chunk__11056_11776,count__11057_11777,i__11058_11778,seq__11035,chunk__11048,count__11049,i__11050,name__10036__auto___11810,options__10037__auto___11811,invocations__10038__auto___11812,times__10039__auto___11813,times_QMARK___10040__auto___11814,check_params_QMARK___10041__auto___11815,with__10042__auto___11816,with__10042__auto___11817__$1,invocations_str__10043__auto___11818,n_11809,seq__11059_11803__$1,temp__5804__auto___11802,mode_11779,ai,take_turn_orig_val__11033,take_turn_temp_val__11034,_STAR_parent_description_STAR__orig_val__10917_11607,_STAR_parent_description_STAR__temp_val__10918_11608,description__9652__auto____$1,_STAR_parent_description_STAR__orig_val__10229_11064,_STAR_parent_description_STAR__temp_val__10230_11065,description__9652__auto___11063))
,invocations__10038__auto___11812))){
} else {
throw (new speclj.platform.SpecFailure(["Expected: invocation of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__10036__auto___11810)," with ",cljs.core.pr_str.call(null,with__10042__auto___11817__$1),speclj.platform.endl,"     got: ",cljs.core.pr_str.call(null,invocations__10038__auto___11812)].join('')));
}
} else {
if(times_QMARK___10040__auto___11814){
if(cljs.core._EQ_.call(null,times__10039__auto___11813,cljs.core.count.call(null,invocations__10038__auto___11812))){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(times__10039__auto___11813)," ",invocations_str__10043__auto___11818.call(null,times__10039__auto___11813)," of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__10036__auto___11810),speclj.platform.endl,"     got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,invocations__10038__auto___11812))].join('')));
}
} else {
if(cljs.core.seq.call(null,invocations__10038__auto___11812)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: an invocation of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__10036__auto___11810),speclj.platform.endl,"     got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,invocations__10038__auto___11812))].join('')));
}

}
}
}

var expected__9789__auto___11821 = ((cljs.core._EQ_.call(null,(2),mode_11779))?new cljs.core.Keyword(null,"x","x",2099068185):new cljs.core.Keyword(null,"o","o",-1350007228));
var actual__9790__auto___11822 = new cljs.core.Keyword(null,"player","player",-97687400).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.screens.play_spec.state));
if(cljs.core._EQ_.call(null,expected__9789__auto___11821,actual__9790__auto___11822)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__9789__auto___11821;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9757__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9757__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__9790__auto___11822;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9757__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9757__auto__);
}
})()," (using =)"].join('')));
}

cljs.core.reset_BANG_.call(null,tic_tac_toe.screens.play_spec.state,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"board","board",-1907017633),tic_tac_toe.screens.play_spec.board_4,new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"current-screen","current-screen",-1454713691),new cljs.core.Keyword(null,"play","play",-580418022)], null));


var G__11823 = cljs.core.next.call(null,seq__11059_11803__$1);
var G__11824 = null;
var G__11825 = (0);
var G__11826 = (0);
seq__11059_11780 = G__11823;
chunk__11060_11781 = G__11824;
count__11061_11782 = G__11825;
i__11062_11783 = G__11826;
continue;
}
} else {
}
}
break;
}

var G__11827 = seq__11051_11775;
var G__11828 = chunk__11056_11776;
var G__11829 = count__11057_11777;
var G__11830 = (i__11058_11778 + (1));
seq__11051_11775 = G__11827;
chunk__11056_11776 = G__11828;
count__11057_11777 = G__11829;
i__11058_11778 = G__11830;
continue;
} else {
var temp__5804__auto___11831 = cljs.core.seq.call(null,seq__11051_11775);
if(temp__5804__auto___11831){
var seq__11051_11832__$1 = temp__5804__auto___11831;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11051_11832__$1)){
var c__5525__auto___11833 = cljs.core.chunk_first.call(null,seq__11051_11832__$1);
var G__11834 = cljs.core.chunk_rest.call(null,seq__11051_11832__$1);
var G__11835 = c__5525__auto___11833;
var G__11836 = cljs.core.count.call(null,c__5525__auto___11833);
var G__11837 = (0);
seq__11051_11775 = G__11834;
chunk__11056_11776 = G__11835;
count__11057_11777 = G__11836;
i__11058_11778 = G__11837;
continue;
} else {
var mode_11838 = cljs.core.first.call(null,seq__11051_11832__$1);
var seq__11052_11839 = cljs.core.seq.call(null,cljs.core.range.call(null,(16)));
var chunk__11053_11840 = null;
var count__11054_11841 = (0);
var i__11055_11842 = (0);
while(true){
if((i__11055_11842 < count__11054_11841)){
var n_11843 = cljs.core._nth.call(null,chunk__11053_11840,i__11055_11842);
cljs.core.swap_BANG_.call(null,tic_tac_toe.screens.play_spec.state,cljs.core.assoc,new cljs.core.Keyword(null,"mode","mode",654403691),mode_11838,new cljs.core.Keyword(null,"first-ai-level","first-ai-level",1004633644),ai,new cljs.core.Keyword(null,"player","player",-97687400),((cljs.core._EQ_.call(null,(2),mode_11838))?new cljs.core.Keyword(null,"x","x",2099068185):new cljs.core.Keyword(null,"o","o",-1350007228)),new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"gui","gui",604532813));

c3kit.wire.spec_helper.render.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tic_tac_toe.render_screen.render_screen,tic_tac_toe.screens.play_spec.state], null));

c3kit.wire.spec_helper.click_BANG_.call(null,["#index-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n_11843)].join(''));

var name__10036__auto___11844 = new cljs.core.Keyword(null,"turn","turn",75759344);
var options__10037__auto___11845 = cljs.core.PersistentArrayMap.EMPTY;
var invocations__10038__auto___11846 = speclj.stub.invocations_of.call(null,name__10036__auto___11844);
var times__10039__auto___11847 = new cljs.core.Keyword(null,"times","times",1671571467).cljs$core$IFn$_invoke$arity$1(options__10037__auto___11845);
var times_QMARK___10040__auto___11848 = typeof times__10039__auto___11847 === 'number';
var check_params_QMARK___10041__auto___11849 = cljs.core.contains_QMARK_.call(null,options__10037__auto___11845,new cljs.core.Keyword(null,"with","with",-1536296876));
var with__10042__auto___11850 = new cljs.core.Keyword(null,"with","with",-1536296876).cljs$core$IFn$_invoke$arity$1(options__10037__auto___11845);
var with__10042__auto___11851__$1 = (((with__10042__auto___11850 == null))?cljs.core.PersistentVector.EMPTY:with__10042__auto___11850);
var invocations_str__10043__auto___11852 = ((function (seq__11052_11839,chunk__11053_11840,count__11054_11841,i__11055_11842,seq__11051_11775,chunk__11056_11776,count__11057_11777,i__11058_11778,seq__11035,chunk__11048,count__11049,i__11050,name__10036__auto___11844,options__10037__auto___11845,invocations__10038__auto___11846,times__10039__auto___11847,times_QMARK___10040__auto___11848,check_params_QMARK___10041__auto___11849,with__10042__auto___11850,with__10042__auto___11851__$1,n_11843,mode_11838,seq__11051_11832__$1,temp__5804__auto___11831,ai,take_turn_orig_val__11033,take_turn_temp_val__11034,_STAR_parent_description_STAR__orig_val__10917_11607,_STAR_parent_description_STAR__temp_val__10918_11608,description__9652__auto____$1,_STAR_parent_description_STAR__orig_val__10229_11064,_STAR_parent_description_STAR__temp_val__10230_11065,description__9652__auto___11063){
return (function (p1__10033__10044__auto__){
if(cljs.core._EQ_.call(null,(1),p1__10033__10044__auto__)){
return "invocation";
} else {
return "invocations";
}
});})(seq__11052_11839,chunk__11053_11840,count__11054_11841,i__11055_11842,seq__11051_11775,chunk__11056_11776,count__11057_11777,i__11058_11778,seq__11035,chunk__11048,count__11049,i__11050,name__10036__auto___11844,options__10037__auto___11845,invocations__10038__auto___11846,times__10039__auto___11847,times_QMARK___10040__auto___11848,check_params_QMARK___10041__auto___11849,with__10042__auto___11850,with__10042__auto___11851__$1,n_11843,mode_11838,seq__11051_11832__$1,temp__5804__auto___11831,ai,take_turn_orig_val__11033,take_turn_temp_val__11034,_STAR_parent_description_STAR__orig_val__10917_11607,_STAR_parent_description_STAR__temp_val__10918_11608,description__9652__auto____$1,_STAR_parent_description_STAR__orig_val__10229_11064,_STAR_parent_description_STAR__temp_val__10230_11065,description__9652__auto___11063))
;
if(((times_QMARK___10040__auto___11848) && (check_params_QMARK___10041__auto___11849))){
var matching_invocations__10045__auto___11853 = cljs.core.filter.call(null,((function (seq__11052_11839,chunk__11053_11840,count__11054_11841,i__11055_11842,seq__11051_11775,chunk__11056_11776,count__11057_11777,i__11058_11778,seq__11035,chunk__11048,count__11049,i__11050,name__10036__auto___11844,options__10037__auto___11845,invocations__10038__auto___11846,times__10039__auto___11847,times_QMARK___10040__auto___11848,check_params_QMARK___10041__auto___11849,with__10042__auto___11850,with__10042__auto___11851__$1,invocations_str__10043__auto___11852,n_11843,mode_11838,seq__11051_11832__$1,temp__5804__auto___11831,ai,take_turn_orig_val__11033,take_turn_temp_val__11034,_STAR_parent_description_STAR__orig_val__10917_11607,_STAR_parent_description_STAR__temp_val__10918_11608,description__9652__auto____$1,_STAR_parent_description_STAR__orig_val__10229_11064,_STAR_parent_description_STAR__temp_val__10230_11065,description__9652__auto___11063){
return (function (p1__10034__10046__auto__){
return speclj.stub.params_match_QMARK_.call(null,with__10042__auto___11851__$1,p1__10034__10046__auto__);
});})(seq__11052_11839,chunk__11053_11840,count__11054_11841,i__11055_11842,seq__11051_11775,chunk__11056_11776,count__11057_11777,i__11058_11778,seq__11035,chunk__11048,count__11049,i__11050,name__10036__auto___11844,options__10037__auto___11845,invocations__10038__auto___11846,times__10039__auto___11847,times_QMARK___10040__auto___11848,check_params_QMARK___10041__auto___11849,with__10042__auto___11850,with__10042__auto___11851__$1,invocations_str__10043__auto___11852,n_11843,mode_11838,seq__11051_11832__$1,temp__5804__auto___11831,ai,take_turn_orig_val__11033,take_turn_temp_val__11034,_STAR_parent_description_STAR__orig_val__10917_11607,_STAR_parent_description_STAR__temp_val__10918_11608,description__9652__auto____$1,_STAR_parent_description_STAR__orig_val__10229_11064,_STAR_parent_description_STAR__temp_val__10230_11065,description__9652__auto___11063))
,invocations__10038__auto___11846);
var matching_count__10047__auto___11854 = cljs.core.count.call(null,matching_invocations__10045__auto___11853);
if(cljs.core._EQ_.call(null,times__10039__auto___11847,matching_count__10047__auto___11854)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(times__10039__auto___11847)," ",invocations_str__10043__auto___11852.call(null,times__10039__auto___11847)," of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__10036__auto___11844)," with ",cljs.core.pr_str.call(null,with__10042__auto___11851__$1),speclj.platform.endl,"     got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(matching_count__10047__auto___11854)," ",invocations_str__10043__auto___11852.call(null,matching_count__10047__auto___11854)].join('')));
}
} else {
if(check_params_QMARK___10041__auto___11849){
if(cljs.core.truth_(cljs.core.some.call(null,((function (seq__11052_11839,chunk__11053_11840,count__11054_11841,i__11055_11842,seq__11051_11775,chunk__11056_11776,count__11057_11777,i__11058_11778,seq__11035,chunk__11048,count__11049,i__11050,name__10036__auto___11844,options__10037__auto___11845,invocations__10038__auto___11846,times__10039__auto___11847,times_QMARK___10040__auto___11848,check_params_QMARK___10041__auto___11849,with__10042__auto___11850,with__10042__auto___11851__$1,invocations_str__10043__auto___11852,n_11843,mode_11838,seq__11051_11832__$1,temp__5804__auto___11831,ai,take_turn_orig_val__11033,take_turn_temp_val__11034,_STAR_parent_description_STAR__orig_val__10917_11607,_STAR_parent_description_STAR__temp_val__10918_11608,description__9652__auto____$1,_STAR_parent_description_STAR__orig_val__10229_11064,_STAR_parent_description_STAR__temp_val__10230_11065,description__9652__auto___11063){
return (function (p1__10035__10048__auto__){
return speclj.stub.params_match_QMARK_.call(null,with__10042__auto___11851__$1,p1__10035__10048__auto__);
});})(seq__11052_11839,chunk__11053_11840,count__11054_11841,i__11055_11842,seq__11051_11775,chunk__11056_11776,count__11057_11777,i__11058_11778,seq__11035,chunk__11048,count__11049,i__11050,name__10036__auto___11844,options__10037__auto___11845,invocations__10038__auto___11846,times__10039__auto___11847,times_QMARK___10040__auto___11848,check_params_QMARK___10041__auto___11849,with__10042__auto___11850,with__10042__auto___11851__$1,invocations_str__10043__auto___11852,n_11843,mode_11838,seq__11051_11832__$1,temp__5804__auto___11831,ai,take_turn_orig_val__11033,take_turn_temp_val__11034,_STAR_parent_description_STAR__orig_val__10917_11607,_STAR_parent_description_STAR__temp_val__10918_11608,description__9652__auto____$1,_STAR_parent_description_STAR__orig_val__10229_11064,_STAR_parent_description_STAR__temp_val__10230_11065,description__9652__auto___11063))
,invocations__10038__auto___11846))){
} else {
throw (new speclj.platform.SpecFailure(["Expected: invocation of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__10036__auto___11844)," with ",cljs.core.pr_str.call(null,with__10042__auto___11851__$1),speclj.platform.endl,"     got: ",cljs.core.pr_str.call(null,invocations__10038__auto___11846)].join('')));
}
} else {
if(times_QMARK___10040__auto___11848){
if(cljs.core._EQ_.call(null,times__10039__auto___11847,cljs.core.count.call(null,invocations__10038__auto___11846))){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(times__10039__auto___11847)," ",invocations_str__10043__auto___11852.call(null,times__10039__auto___11847)," of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__10036__auto___11844),speclj.platform.endl,"     got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,invocations__10038__auto___11846))].join('')));
}
} else {
if(cljs.core.seq.call(null,invocations__10038__auto___11846)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: an invocation of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__10036__auto___11844),speclj.platform.endl,"     got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,invocations__10038__auto___11846))].join('')));
}

}
}
}

var expected__9789__auto___11855 = ((cljs.core._EQ_.call(null,(2),mode_11838))?new cljs.core.Keyword(null,"x","x",2099068185):new cljs.core.Keyword(null,"o","o",-1350007228));
var actual__9790__auto___11856 = new cljs.core.Keyword(null,"player","player",-97687400).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.screens.play_spec.state));
if(cljs.core._EQ_.call(null,expected__9789__auto___11855,actual__9790__auto___11856)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__9789__auto___11855;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9757__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9757__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__9790__auto___11856;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9757__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9757__auto__);
}
})()," (using =)"].join('')));
}

cljs.core.reset_BANG_.call(null,tic_tac_toe.screens.play_spec.state,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"board","board",-1907017633),tic_tac_toe.screens.play_spec.board_4,new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"current-screen","current-screen",-1454713691),new cljs.core.Keyword(null,"play","play",-580418022)], null));


var G__11857 = seq__11052_11839;
var G__11858 = chunk__11053_11840;
var G__11859 = count__11054_11841;
var G__11860 = (i__11055_11842 + (1));
seq__11052_11839 = G__11857;
chunk__11053_11840 = G__11858;
count__11054_11841 = G__11859;
i__11055_11842 = G__11860;
continue;
} else {
var temp__5804__auto___11861__$1 = cljs.core.seq.call(null,seq__11052_11839);
if(temp__5804__auto___11861__$1){
var seq__11052_11862__$1 = temp__5804__auto___11861__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11052_11862__$1)){
var c__5525__auto___11863 = cljs.core.chunk_first.call(null,seq__11052_11862__$1);
var G__11864 = cljs.core.chunk_rest.call(null,seq__11052_11862__$1);
var G__11865 = c__5525__auto___11863;
var G__11866 = cljs.core.count.call(null,c__5525__auto___11863);
var G__11867 = (0);
seq__11052_11839 = G__11864;
chunk__11053_11840 = G__11865;
count__11054_11841 = G__11866;
i__11055_11842 = G__11867;
continue;
} else {
var n_11868 = cljs.core.first.call(null,seq__11052_11862__$1);
cljs.core.swap_BANG_.call(null,tic_tac_toe.screens.play_spec.state,cljs.core.assoc,new cljs.core.Keyword(null,"mode","mode",654403691),mode_11838,new cljs.core.Keyword(null,"first-ai-level","first-ai-level",1004633644),ai,new cljs.core.Keyword(null,"player","player",-97687400),((cljs.core._EQ_.call(null,(2),mode_11838))?new cljs.core.Keyword(null,"x","x",2099068185):new cljs.core.Keyword(null,"o","o",-1350007228)),new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"gui","gui",604532813));

c3kit.wire.spec_helper.render.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tic_tac_toe.render_screen.render_screen,tic_tac_toe.screens.play_spec.state], null));

c3kit.wire.spec_helper.click_BANG_.call(null,["#index-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n_11868)].join(''));

var name__10036__auto___11869 = new cljs.core.Keyword(null,"turn","turn",75759344);
var options__10037__auto___11870 = cljs.core.PersistentArrayMap.EMPTY;
var invocations__10038__auto___11871 = speclj.stub.invocations_of.call(null,name__10036__auto___11869);
var times__10039__auto___11872 = new cljs.core.Keyword(null,"times","times",1671571467).cljs$core$IFn$_invoke$arity$1(options__10037__auto___11870);
var times_QMARK___10040__auto___11873 = typeof times__10039__auto___11872 === 'number';
var check_params_QMARK___10041__auto___11874 = cljs.core.contains_QMARK_.call(null,options__10037__auto___11870,new cljs.core.Keyword(null,"with","with",-1536296876));
var with__10042__auto___11875 = new cljs.core.Keyword(null,"with","with",-1536296876).cljs$core$IFn$_invoke$arity$1(options__10037__auto___11870);
var with__10042__auto___11876__$1 = (((with__10042__auto___11875 == null))?cljs.core.PersistentVector.EMPTY:with__10042__auto___11875);
var invocations_str__10043__auto___11877 = ((function (seq__11052_11839,chunk__11053_11840,count__11054_11841,i__11055_11842,seq__11051_11775,chunk__11056_11776,count__11057_11777,i__11058_11778,seq__11035,chunk__11048,count__11049,i__11050,name__10036__auto___11869,options__10037__auto___11870,invocations__10038__auto___11871,times__10039__auto___11872,times_QMARK___10040__auto___11873,check_params_QMARK___10041__auto___11874,with__10042__auto___11875,with__10042__auto___11876__$1,n_11868,seq__11052_11862__$1,temp__5804__auto___11861__$1,mode_11838,seq__11051_11832__$1,temp__5804__auto___11831,ai,take_turn_orig_val__11033,take_turn_temp_val__11034,_STAR_parent_description_STAR__orig_val__10917_11607,_STAR_parent_description_STAR__temp_val__10918_11608,description__9652__auto____$1,_STAR_parent_description_STAR__orig_val__10229_11064,_STAR_parent_description_STAR__temp_val__10230_11065,description__9652__auto___11063){
return (function (p1__10033__10044__auto__){
if(cljs.core._EQ_.call(null,(1),p1__10033__10044__auto__)){
return "invocation";
} else {
return "invocations";
}
});})(seq__11052_11839,chunk__11053_11840,count__11054_11841,i__11055_11842,seq__11051_11775,chunk__11056_11776,count__11057_11777,i__11058_11778,seq__11035,chunk__11048,count__11049,i__11050,name__10036__auto___11869,options__10037__auto___11870,invocations__10038__auto___11871,times__10039__auto___11872,times_QMARK___10040__auto___11873,check_params_QMARK___10041__auto___11874,with__10042__auto___11875,with__10042__auto___11876__$1,n_11868,seq__11052_11862__$1,temp__5804__auto___11861__$1,mode_11838,seq__11051_11832__$1,temp__5804__auto___11831,ai,take_turn_orig_val__11033,take_turn_temp_val__11034,_STAR_parent_description_STAR__orig_val__10917_11607,_STAR_parent_description_STAR__temp_val__10918_11608,description__9652__auto____$1,_STAR_parent_description_STAR__orig_val__10229_11064,_STAR_parent_description_STAR__temp_val__10230_11065,description__9652__auto___11063))
;
if(((times_QMARK___10040__auto___11873) && (check_params_QMARK___10041__auto___11874))){
var matching_invocations__10045__auto___11878 = cljs.core.filter.call(null,((function (seq__11052_11839,chunk__11053_11840,count__11054_11841,i__11055_11842,seq__11051_11775,chunk__11056_11776,count__11057_11777,i__11058_11778,seq__11035,chunk__11048,count__11049,i__11050,name__10036__auto___11869,options__10037__auto___11870,invocations__10038__auto___11871,times__10039__auto___11872,times_QMARK___10040__auto___11873,check_params_QMARK___10041__auto___11874,with__10042__auto___11875,with__10042__auto___11876__$1,invocations_str__10043__auto___11877,n_11868,seq__11052_11862__$1,temp__5804__auto___11861__$1,mode_11838,seq__11051_11832__$1,temp__5804__auto___11831,ai,take_turn_orig_val__11033,take_turn_temp_val__11034,_STAR_parent_description_STAR__orig_val__10917_11607,_STAR_parent_description_STAR__temp_val__10918_11608,description__9652__auto____$1,_STAR_parent_description_STAR__orig_val__10229_11064,_STAR_parent_description_STAR__temp_val__10230_11065,description__9652__auto___11063){
return (function (p1__10034__10046__auto__){
return speclj.stub.params_match_QMARK_.call(null,with__10042__auto___11876__$1,p1__10034__10046__auto__);
});})(seq__11052_11839,chunk__11053_11840,count__11054_11841,i__11055_11842,seq__11051_11775,chunk__11056_11776,count__11057_11777,i__11058_11778,seq__11035,chunk__11048,count__11049,i__11050,name__10036__auto___11869,options__10037__auto___11870,invocations__10038__auto___11871,times__10039__auto___11872,times_QMARK___10040__auto___11873,check_params_QMARK___10041__auto___11874,with__10042__auto___11875,with__10042__auto___11876__$1,invocations_str__10043__auto___11877,n_11868,seq__11052_11862__$1,temp__5804__auto___11861__$1,mode_11838,seq__11051_11832__$1,temp__5804__auto___11831,ai,take_turn_orig_val__11033,take_turn_temp_val__11034,_STAR_parent_description_STAR__orig_val__10917_11607,_STAR_parent_description_STAR__temp_val__10918_11608,description__9652__auto____$1,_STAR_parent_description_STAR__orig_val__10229_11064,_STAR_parent_description_STAR__temp_val__10230_11065,description__9652__auto___11063))
,invocations__10038__auto___11871);
var matching_count__10047__auto___11879 = cljs.core.count.call(null,matching_invocations__10045__auto___11878);
if(cljs.core._EQ_.call(null,times__10039__auto___11872,matching_count__10047__auto___11879)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(times__10039__auto___11872)," ",invocations_str__10043__auto___11877.call(null,times__10039__auto___11872)," of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__10036__auto___11869)," with ",cljs.core.pr_str.call(null,with__10042__auto___11876__$1),speclj.platform.endl,"     got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(matching_count__10047__auto___11879)," ",invocations_str__10043__auto___11877.call(null,matching_count__10047__auto___11879)].join('')));
}
} else {
if(check_params_QMARK___10041__auto___11874){
if(cljs.core.truth_(cljs.core.some.call(null,((function (seq__11052_11839,chunk__11053_11840,count__11054_11841,i__11055_11842,seq__11051_11775,chunk__11056_11776,count__11057_11777,i__11058_11778,seq__11035,chunk__11048,count__11049,i__11050,name__10036__auto___11869,options__10037__auto___11870,invocations__10038__auto___11871,times__10039__auto___11872,times_QMARK___10040__auto___11873,check_params_QMARK___10041__auto___11874,with__10042__auto___11875,with__10042__auto___11876__$1,invocations_str__10043__auto___11877,n_11868,seq__11052_11862__$1,temp__5804__auto___11861__$1,mode_11838,seq__11051_11832__$1,temp__5804__auto___11831,ai,take_turn_orig_val__11033,take_turn_temp_val__11034,_STAR_parent_description_STAR__orig_val__10917_11607,_STAR_parent_description_STAR__temp_val__10918_11608,description__9652__auto____$1,_STAR_parent_description_STAR__orig_val__10229_11064,_STAR_parent_description_STAR__temp_val__10230_11065,description__9652__auto___11063){
return (function (p1__10035__10048__auto__){
return speclj.stub.params_match_QMARK_.call(null,with__10042__auto___11876__$1,p1__10035__10048__auto__);
});})(seq__11052_11839,chunk__11053_11840,count__11054_11841,i__11055_11842,seq__11051_11775,chunk__11056_11776,count__11057_11777,i__11058_11778,seq__11035,chunk__11048,count__11049,i__11050,name__10036__auto___11869,options__10037__auto___11870,invocations__10038__auto___11871,times__10039__auto___11872,times_QMARK___10040__auto___11873,check_params_QMARK___10041__auto___11874,with__10042__auto___11875,with__10042__auto___11876__$1,invocations_str__10043__auto___11877,n_11868,seq__11052_11862__$1,temp__5804__auto___11861__$1,mode_11838,seq__11051_11832__$1,temp__5804__auto___11831,ai,take_turn_orig_val__11033,take_turn_temp_val__11034,_STAR_parent_description_STAR__orig_val__10917_11607,_STAR_parent_description_STAR__temp_val__10918_11608,description__9652__auto____$1,_STAR_parent_description_STAR__orig_val__10229_11064,_STAR_parent_description_STAR__temp_val__10230_11065,description__9652__auto___11063))
,invocations__10038__auto___11871))){
} else {
throw (new speclj.platform.SpecFailure(["Expected: invocation of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__10036__auto___11869)," with ",cljs.core.pr_str.call(null,with__10042__auto___11876__$1),speclj.platform.endl,"     got: ",cljs.core.pr_str.call(null,invocations__10038__auto___11871)].join('')));
}
} else {
if(times_QMARK___10040__auto___11873){
if(cljs.core._EQ_.call(null,times__10039__auto___11872,cljs.core.count.call(null,invocations__10038__auto___11871))){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(times__10039__auto___11872)," ",invocations_str__10043__auto___11877.call(null,times__10039__auto___11872)," of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__10036__auto___11869),speclj.platform.endl,"     got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,invocations__10038__auto___11871))].join('')));
}
} else {
if(cljs.core.seq.call(null,invocations__10038__auto___11871)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: an invocation of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__10036__auto___11869),speclj.platform.endl,"     got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,invocations__10038__auto___11871))].join('')));
}

}
}
}

var expected__9789__auto___11880 = ((cljs.core._EQ_.call(null,(2),mode_11838))?new cljs.core.Keyword(null,"x","x",2099068185):new cljs.core.Keyword(null,"o","o",-1350007228));
var actual__9790__auto___11881 = new cljs.core.Keyword(null,"player","player",-97687400).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.screens.play_spec.state));
if(cljs.core._EQ_.call(null,expected__9789__auto___11880,actual__9790__auto___11881)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__9789__auto___11880;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9757__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9757__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__9790__auto___11881;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9757__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9757__auto__);
}
})()," (using =)"].join('')));
}

cljs.core.reset_BANG_.call(null,tic_tac_toe.screens.play_spec.state,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"board","board",-1907017633),tic_tac_toe.screens.play_spec.board_4,new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"current-screen","current-screen",-1454713691),new cljs.core.Keyword(null,"play","play",-580418022)], null));


var G__11882 = cljs.core.next.call(null,seq__11052_11862__$1);
var G__11883 = null;
var G__11884 = (0);
var G__11885 = (0);
seq__11052_11839 = G__11882;
chunk__11053_11840 = G__11883;
count__11054_11841 = G__11884;
i__11055_11842 = G__11885;
continue;
}
} else {
}
}
break;
}

var G__11886 = cljs.core.next.call(null,seq__11051_11832__$1);
var G__11887 = null;
var G__11888 = (0);
var G__11889 = (0);
seq__11051_11775 = G__11886;
chunk__11056_11776 = G__11887;
count__11057_11777 = G__11888;
i__11058_11778 = G__11889;
continue;
}
} else {
}
}
break;
}

var G__11890 = seq__11035;
var G__11891 = chunk__11048;
var G__11892 = count__11049;
var G__11893 = (i__11050 + (1));
seq__11035 = G__11890;
chunk__11048 = G__11891;
count__11049 = G__11892;
i__11050 = G__11893;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__11035);
if(temp__5804__auto__){
var seq__11035__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11035__$1)){
var c__5525__auto__ = cljs.core.chunk_first.call(null,seq__11035__$1);
var G__11894 = cljs.core.chunk_rest.call(null,seq__11035__$1);
var G__11895 = c__5525__auto__;
var G__11896 = cljs.core.count.call(null,c__5525__auto__);
var G__11897 = (0);
seq__11035 = G__11894;
chunk__11048 = G__11895;
count__11049 = G__11896;
i__11050 = G__11897;
continue;
} else {
var ai = cljs.core.first.call(null,seq__11035__$1);
var seq__11036_11898 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(3)], null));
var chunk__11041_11899 = null;
var count__11042_11900 = (0);
var i__11043_11901 = (0);
while(true){
if((i__11043_11901 < count__11042_11900)){
var mode_11902 = cljs.core._nth.call(null,chunk__11041_11899,i__11043_11901);
var seq__11044_11903 = cljs.core.seq.call(null,cljs.core.range.call(null,(16)));
var chunk__11045_11904 = null;
var count__11046_11905 = (0);
var i__11047_11906 = (0);
while(true){
if((i__11047_11906 < count__11046_11905)){
var n_11907 = cljs.core._nth.call(null,chunk__11045_11904,i__11047_11906);
cljs.core.swap_BANG_.call(null,tic_tac_toe.screens.play_spec.state,cljs.core.assoc,new cljs.core.Keyword(null,"mode","mode",654403691),mode_11902,new cljs.core.Keyword(null,"first-ai-level","first-ai-level",1004633644),ai,new cljs.core.Keyword(null,"player","player",-97687400),((cljs.core._EQ_.call(null,(2),mode_11902))?new cljs.core.Keyword(null,"x","x",2099068185):new cljs.core.Keyword(null,"o","o",-1350007228)),new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"gui","gui",604532813));

c3kit.wire.spec_helper.render.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tic_tac_toe.render_screen.render_screen,tic_tac_toe.screens.play_spec.state], null));

c3kit.wire.spec_helper.click_BANG_.call(null,["#index-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n_11907)].join(''));

var name__10036__auto___11908 = new cljs.core.Keyword(null,"turn","turn",75759344);
var options__10037__auto___11909 = cljs.core.PersistentArrayMap.EMPTY;
var invocations__10038__auto___11910 = speclj.stub.invocations_of.call(null,name__10036__auto___11908);
var times__10039__auto___11911 = new cljs.core.Keyword(null,"times","times",1671571467).cljs$core$IFn$_invoke$arity$1(options__10037__auto___11909);
var times_QMARK___10040__auto___11912 = typeof times__10039__auto___11911 === 'number';
var check_params_QMARK___10041__auto___11913 = cljs.core.contains_QMARK_.call(null,options__10037__auto___11909,new cljs.core.Keyword(null,"with","with",-1536296876));
var with__10042__auto___11914 = new cljs.core.Keyword(null,"with","with",-1536296876).cljs$core$IFn$_invoke$arity$1(options__10037__auto___11909);
var with__10042__auto___11915__$1 = (((with__10042__auto___11914 == null))?cljs.core.PersistentVector.EMPTY:with__10042__auto___11914);
var invocations_str__10043__auto___11916 = ((function (seq__11044_11903,chunk__11045_11904,count__11046_11905,i__11047_11906,seq__11036_11898,chunk__11041_11899,count__11042_11900,i__11043_11901,seq__11035,chunk__11048,count__11049,i__11050,name__10036__auto___11908,options__10037__auto___11909,invocations__10038__auto___11910,times__10039__auto___11911,times_QMARK___10040__auto___11912,check_params_QMARK___10041__auto___11913,with__10042__auto___11914,with__10042__auto___11915__$1,n_11907,mode_11902,ai,seq__11035__$1,temp__5804__auto__,take_turn_orig_val__11033,take_turn_temp_val__11034,_STAR_parent_description_STAR__orig_val__10917_11607,_STAR_parent_description_STAR__temp_val__10918_11608,description__9652__auto____$1,_STAR_parent_description_STAR__orig_val__10229_11064,_STAR_parent_description_STAR__temp_val__10230_11065,description__9652__auto___11063){
return (function (p1__10033__10044__auto__){
if(cljs.core._EQ_.call(null,(1),p1__10033__10044__auto__)){
return "invocation";
} else {
return "invocations";
}
});})(seq__11044_11903,chunk__11045_11904,count__11046_11905,i__11047_11906,seq__11036_11898,chunk__11041_11899,count__11042_11900,i__11043_11901,seq__11035,chunk__11048,count__11049,i__11050,name__10036__auto___11908,options__10037__auto___11909,invocations__10038__auto___11910,times__10039__auto___11911,times_QMARK___10040__auto___11912,check_params_QMARK___10041__auto___11913,with__10042__auto___11914,with__10042__auto___11915__$1,n_11907,mode_11902,ai,seq__11035__$1,temp__5804__auto__,take_turn_orig_val__11033,take_turn_temp_val__11034,_STAR_parent_description_STAR__orig_val__10917_11607,_STAR_parent_description_STAR__temp_val__10918_11608,description__9652__auto____$1,_STAR_parent_description_STAR__orig_val__10229_11064,_STAR_parent_description_STAR__temp_val__10230_11065,description__9652__auto___11063))
;
if(((times_QMARK___10040__auto___11912) && (check_params_QMARK___10041__auto___11913))){
var matching_invocations__10045__auto___11917 = cljs.core.filter.call(null,((function (seq__11044_11903,chunk__11045_11904,count__11046_11905,i__11047_11906,seq__11036_11898,chunk__11041_11899,count__11042_11900,i__11043_11901,seq__11035,chunk__11048,count__11049,i__11050,name__10036__auto___11908,options__10037__auto___11909,invocations__10038__auto___11910,times__10039__auto___11911,times_QMARK___10040__auto___11912,check_params_QMARK___10041__auto___11913,with__10042__auto___11914,with__10042__auto___11915__$1,invocations_str__10043__auto___11916,n_11907,mode_11902,ai,seq__11035__$1,temp__5804__auto__,take_turn_orig_val__11033,take_turn_temp_val__11034,_STAR_parent_description_STAR__orig_val__10917_11607,_STAR_parent_description_STAR__temp_val__10918_11608,description__9652__auto____$1,_STAR_parent_description_STAR__orig_val__10229_11064,_STAR_parent_description_STAR__temp_val__10230_11065,description__9652__auto___11063){
return (function (p1__10034__10046__auto__){
return speclj.stub.params_match_QMARK_.call(null,with__10042__auto___11915__$1,p1__10034__10046__auto__);
});})(seq__11044_11903,chunk__11045_11904,count__11046_11905,i__11047_11906,seq__11036_11898,chunk__11041_11899,count__11042_11900,i__11043_11901,seq__11035,chunk__11048,count__11049,i__11050,name__10036__auto___11908,options__10037__auto___11909,invocations__10038__auto___11910,times__10039__auto___11911,times_QMARK___10040__auto___11912,check_params_QMARK___10041__auto___11913,with__10042__auto___11914,with__10042__auto___11915__$1,invocations_str__10043__auto___11916,n_11907,mode_11902,ai,seq__11035__$1,temp__5804__auto__,take_turn_orig_val__11033,take_turn_temp_val__11034,_STAR_parent_description_STAR__orig_val__10917_11607,_STAR_parent_description_STAR__temp_val__10918_11608,description__9652__auto____$1,_STAR_parent_description_STAR__orig_val__10229_11064,_STAR_parent_description_STAR__temp_val__10230_11065,description__9652__auto___11063))
,invocations__10038__auto___11910);
var matching_count__10047__auto___11918 = cljs.core.count.call(null,matching_invocations__10045__auto___11917);
if(cljs.core._EQ_.call(null,times__10039__auto___11911,matching_count__10047__auto___11918)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(times__10039__auto___11911)," ",invocations_str__10043__auto___11916.call(null,times__10039__auto___11911)," of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__10036__auto___11908)," with ",cljs.core.pr_str.call(null,with__10042__auto___11915__$1),speclj.platform.endl,"     got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(matching_count__10047__auto___11918)," ",invocations_str__10043__auto___11916.call(null,matching_count__10047__auto___11918)].join('')));
}
} else {
if(check_params_QMARK___10041__auto___11913){
if(cljs.core.truth_(cljs.core.some.call(null,((function (seq__11044_11903,chunk__11045_11904,count__11046_11905,i__11047_11906,seq__11036_11898,chunk__11041_11899,count__11042_11900,i__11043_11901,seq__11035,chunk__11048,count__11049,i__11050,name__10036__auto___11908,options__10037__auto___11909,invocations__10038__auto___11910,times__10039__auto___11911,times_QMARK___10040__auto___11912,check_params_QMARK___10041__auto___11913,with__10042__auto___11914,with__10042__auto___11915__$1,invocations_str__10043__auto___11916,n_11907,mode_11902,ai,seq__11035__$1,temp__5804__auto__,take_turn_orig_val__11033,take_turn_temp_val__11034,_STAR_parent_description_STAR__orig_val__10917_11607,_STAR_parent_description_STAR__temp_val__10918_11608,description__9652__auto____$1,_STAR_parent_description_STAR__orig_val__10229_11064,_STAR_parent_description_STAR__temp_val__10230_11065,description__9652__auto___11063){
return (function (p1__10035__10048__auto__){
return speclj.stub.params_match_QMARK_.call(null,with__10042__auto___11915__$1,p1__10035__10048__auto__);
});})(seq__11044_11903,chunk__11045_11904,count__11046_11905,i__11047_11906,seq__11036_11898,chunk__11041_11899,count__11042_11900,i__11043_11901,seq__11035,chunk__11048,count__11049,i__11050,name__10036__auto___11908,options__10037__auto___11909,invocations__10038__auto___11910,times__10039__auto___11911,times_QMARK___10040__auto___11912,check_params_QMARK___10041__auto___11913,with__10042__auto___11914,with__10042__auto___11915__$1,invocations_str__10043__auto___11916,n_11907,mode_11902,ai,seq__11035__$1,temp__5804__auto__,take_turn_orig_val__11033,take_turn_temp_val__11034,_STAR_parent_description_STAR__orig_val__10917_11607,_STAR_parent_description_STAR__temp_val__10918_11608,description__9652__auto____$1,_STAR_parent_description_STAR__orig_val__10229_11064,_STAR_parent_description_STAR__temp_val__10230_11065,description__9652__auto___11063))
,invocations__10038__auto___11910))){
} else {
throw (new speclj.platform.SpecFailure(["Expected: invocation of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__10036__auto___11908)," with ",cljs.core.pr_str.call(null,with__10042__auto___11915__$1),speclj.platform.endl,"     got: ",cljs.core.pr_str.call(null,invocations__10038__auto___11910)].join('')));
}
} else {
if(times_QMARK___10040__auto___11912){
if(cljs.core._EQ_.call(null,times__10039__auto___11911,cljs.core.count.call(null,invocations__10038__auto___11910))){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(times__10039__auto___11911)," ",invocations_str__10043__auto___11916.call(null,times__10039__auto___11911)," of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__10036__auto___11908),speclj.platform.endl,"     got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,invocations__10038__auto___11910))].join('')));
}
} else {
if(cljs.core.seq.call(null,invocations__10038__auto___11910)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: an invocation of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__10036__auto___11908),speclj.platform.endl,"     got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,invocations__10038__auto___11910))].join('')));
}

}
}
}

var expected__9789__auto___11919 = ((cljs.core._EQ_.call(null,(2),mode_11902))?new cljs.core.Keyword(null,"x","x",2099068185):new cljs.core.Keyword(null,"o","o",-1350007228));
var actual__9790__auto___11920 = new cljs.core.Keyword(null,"player","player",-97687400).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.screens.play_spec.state));
if(cljs.core._EQ_.call(null,expected__9789__auto___11919,actual__9790__auto___11920)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__9789__auto___11919;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9757__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9757__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__9790__auto___11920;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9757__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9757__auto__);
}
})()," (using =)"].join('')));
}

cljs.core.reset_BANG_.call(null,tic_tac_toe.screens.play_spec.state,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"board","board",-1907017633),tic_tac_toe.screens.play_spec.board_4,new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"current-screen","current-screen",-1454713691),new cljs.core.Keyword(null,"play","play",-580418022)], null));


var G__11921 = seq__11044_11903;
var G__11922 = chunk__11045_11904;
var G__11923 = count__11046_11905;
var G__11924 = (i__11047_11906 + (1));
seq__11044_11903 = G__11921;
chunk__11045_11904 = G__11922;
count__11046_11905 = G__11923;
i__11047_11906 = G__11924;
continue;
} else {
var temp__5804__auto___11925__$1 = cljs.core.seq.call(null,seq__11044_11903);
if(temp__5804__auto___11925__$1){
var seq__11044_11926__$1 = temp__5804__auto___11925__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11044_11926__$1)){
var c__5525__auto___11927 = cljs.core.chunk_first.call(null,seq__11044_11926__$1);
var G__11928 = cljs.core.chunk_rest.call(null,seq__11044_11926__$1);
var G__11929 = c__5525__auto___11927;
var G__11930 = cljs.core.count.call(null,c__5525__auto___11927);
var G__11931 = (0);
seq__11044_11903 = G__11928;
chunk__11045_11904 = G__11929;
count__11046_11905 = G__11930;
i__11047_11906 = G__11931;
continue;
} else {
var n_11932 = cljs.core.first.call(null,seq__11044_11926__$1);
cljs.core.swap_BANG_.call(null,tic_tac_toe.screens.play_spec.state,cljs.core.assoc,new cljs.core.Keyword(null,"mode","mode",654403691),mode_11902,new cljs.core.Keyword(null,"first-ai-level","first-ai-level",1004633644),ai,new cljs.core.Keyword(null,"player","player",-97687400),((cljs.core._EQ_.call(null,(2),mode_11902))?new cljs.core.Keyword(null,"x","x",2099068185):new cljs.core.Keyword(null,"o","o",-1350007228)),new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"gui","gui",604532813));

c3kit.wire.spec_helper.render.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tic_tac_toe.render_screen.render_screen,tic_tac_toe.screens.play_spec.state], null));

c3kit.wire.spec_helper.click_BANG_.call(null,["#index-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n_11932)].join(''));

var name__10036__auto___11933 = new cljs.core.Keyword(null,"turn","turn",75759344);
var options__10037__auto___11934 = cljs.core.PersistentArrayMap.EMPTY;
var invocations__10038__auto___11935 = speclj.stub.invocations_of.call(null,name__10036__auto___11933);
var times__10039__auto___11936 = new cljs.core.Keyword(null,"times","times",1671571467).cljs$core$IFn$_invoke$arity$1(options__10037__auto___11934);
var times_QMARK___10040__auto___11937 = typeof times__10039__auto___11936 === 'number';
var check_params_QMARK___10041__auto___11938 = cljs.core.contains_QMARK_.call(null,options__10037__auto___11934,new cljs.core.Keyword(null,"with","with",-1536296876));
var with__10042__auto___11939 = new cljs.core.Keyword(null,"with","with",-1536296876).cljs$core$IFn$_invoke$arity$1(options__10037__auto___11934);
var with__10042__auto___11940__$1 = (((with__10042__auto___11939 == null))?cljs.core.PersistentVector.EMPTY:with__10042__auto___11939);
var invocations_str__10043__auto___11941 = ((function (seq__11044_11903,chunk__11045_11904,count__11046_11905,i__11047_11906,seq__11036_11898,chunk__11041_11899,count__11042_11900,i__11043_11901,seq__11035,chunk__11048,count__11049,i__11050,name__10036__auto___11933,options__10037__auto___11934,invocations__10038__auto___11935,times__10039__auto___11936,times_QMARK___10040__auto___11937,check_params_QMARK___10041__auto___11938,with__10042__auto___11939,with__10042__auto___11940__$1,n_11932,seq__11044_11926__$1,temp__5804__auto___11925__$1,mode_11902,ai,seq__11035__$1,temp__5804__auto__,take_turn_orig_val__11033,take_turn_temp_val__11034,_STAR_parent_description_STAR__orig_val__10917_11607,_STAR_parent_description_STAR__temp_val__10918_11608,description__9652__auto____$1,_STAR_parent_description_STAR__orig_val__10229_11064,_STAR_parent_description_STAR__temp_val__10230_11065,description__9652__auto___11063){
return (function (p1__10033__10044__auto__){
if(cljs.core._EQ_.call(null,(1),p1__10033__10044__auto__)){
return "invocation";
} else {
return "invocations";
}
});})(seq__11044_11903,chunk__11045_11904,count__11046_11905,i__11047_11906,seq__11036_11898,chunk__11041_11899,count__11042_11900,i__11043_11901,seq__11035,chunk__11048,count__11049,i__11050,name__10036__auto___11933,options__10037__auto___11934,invocations__10038__auto___11935,times__10039__auto___11936,times_QMARK___10040__auto___11937,check_params_QMARK___10041__auto___11938,with__10042__auto___11939,with__10042__auto___11940__$1,n_11932,seq__11044_11926__$1,temp__5804__auto___11925__$1,mode_11902,ai,seq__11035__$1,temp__5804__auto__,take_turn_orig_val__11033,take_turn_temp_val__11034,_STAR_parent_description_STAR__orig_val__10917_11607,_STAR_parent_description_STAR__temp_val__10918_11608,description__9652__auto____$1,_STAR_parent_description_STAR__orig_val__10229_11064,_STAR_parent_description_STAR__temp_val__10230_11065,description__9652__auto___11063))
;
if(((times_QMARK___10040__auto___11937) && (check_params_QMARK___10041__auto___11938))){
var matching_invocations__10045__auto___11942 = cljs.core.filter.call(null,((function (seq__11044_11903,chunk__11045_11904,count__11046_11905,i__11047_11906,seq__11036_11898,chunk__11041_11899,count__11042_11900,i__11043_11901,seq__11035,chunk__11048,count__11049,i__11050,name__10036__auto___11933,options__10037__auto___11934,invocations__10038__auto___11935,times__10039__auto___11936,times_QMARK___10040__auto___11937,check_params_QMARK___10041__auto___11938,with__10042__auto___11939,with__10042__auto___11940__$1,invocations_str__10043__auto___11941,n_11932,seq__11044_11926__$1,temp__5804__auto___11925__$1,mode_11902,ai,seq__11035__$1,temp__5804__auto__,take_turn_orig_val__11033,take_turn_temp_val__11034,_STAR_parent_description_STAR__orig_val__10917_11607,_STAR_parent_description_STAR__temp_val__10918_11608,description__9652__auto____$1,_STAR_parent_description_STAR__orig_val__10229_11064,_STAR_parent_description_STAR__temp_val__10230_11065,description__9652__auto___11063){
return (function (p1__10034__10046__auto__){
return speclj.stub.params_match_QMARK_.call(null,with__10042__auto___11940__$1,p1__10034__10046__auto__);
});})(seq__11044_11903,chunk__11045_11904,count__11046_11905,i__11047_11906,seq__11036_11898,chunk__11041_11899,count__11042_11900,i__11043_11901,seq__11035,chunk__11048,count__11049,i__11050,name__10036__auto___11933,options__10037__auto___11934,invocations__10038__auto___11935,times__10039__auto___11936,times_QMARK___10040__auto___11937,check_params_QMARK___10041__auto___11938,with__10042__auto___11939,with__10042__auto___11940__$1,invocations_str__10043__auto___11941,n_11932,seq__11044_11926__$1,temp__5804__auto___11925__$1,mode_11902,ai,seq__11035__$1,temp__5804__auto__,take_turn_orig_val__11033,take_turn_temp_val__11034,_STAR_parent_description_STAR__orig_val__10917_11607,_STAR_parent_description_STAR__temp_val__10918_11608,description__9652__auto____$1,_STAR_parent_description_STAR__orig_val__10229_11064,_STAR_parent_description_STAR__temp_val__10230_11065,description__9652__auto___11063))
,invocations__10038__auto___11935);
var matching_count__10047__auto___11943 = cljs.core.count.call(null,matching_invocations__10045__auto___11942);
if(cljs.core._EQ_.call(null,times__10039__auto___11936,matching_count__10047__auto___11943)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(times__10039__auto___11936)," ",invocations_str__10043__auto___11941.call(null,times__10039__auto___11936)," of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__10036__auto___11933)," with ",cljs.core.pr_str.call(null,with__10042__auto___11940__$1),speclj.platform.endl,"     got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(matching_count__10047__auto___11943)," ",invocations_str__10043__auto___11941.call(null,matching_count__10047__auto___11943)].join('')));
}
} else {
if(check_params_QMARK___10041__auto___11938){
if(cljs.core.truth_(cljs.core.some.call(null,((function (seq__11044_11903,chunk__11045_11904,count__11046_11905,i__11047_11906,seq__11036_11898,chunk__11041_11899,count__11042_11900,i__11043_11901,seq__11035,chunk__11048,count__11049,i__11050,name__10036__auto___11933,options__10037__auto___11934,invocations__10038__auto___11935,times__10039__auto___11936,times_QMARK___10040__auto___11937,check_params_QMARK___10041__auto___11938,with__10042__auto___11939,with__10042__auto___11940__$1,invocations_str__10043__auto___11941,n_11932,seq__11044_11926__$1,temp__5804__auto___11925__$1,mode_11902,ai,seq__11035__$1,temp__5804__auto__,take_turn_orig_val__11033,take_turn_temp_val__11034,_STAR_parent_description_STAR__orig_val__10917_11607,_STAR_parent_description_STAR__temp_val__10918_11608,description__9652__auto____$1,_STAR_parent_description_STAR__orig_val__10229_11064,_STAR_parent_description_STAR__temp_val__10230_11065,description__9652__auto___11063){
return (function (p1__10035__10048__auto__){
return speclj.stub.params_match_QMARK_.call(null,with__10042__auto___11940__$1,p1__10035__10048__auto__);
});})(seq__11044_11903,chunk__11045_11904,count__11046_11905,i__11047_11906,seq__11036_11898,chunk__11041_11899,count__11042_11900,i__11043_11901,seq__11035,chunk__11048,count__11049,i__11050,name__10036__auto___11933,options__10037__auto___11934,invocations__10038__auto___11935,times__10039__auto___11936,times_QMARK___10040__auto___11937,check_params_QMARK___10041__auto___11938,with__10042__auto___11939,with__10042__auto___11940__$1,invocations_str__10043__auto___11941,n_11932,seq__11044_11926__$1,temp__5804__auto___11925__$1,mode_11902,ai,seq__11035__$1,temp__5804__auto__,take_turn_orig_val__11033,take_turn_temp_val__11034,_STAR_parent_description_STAR__orig_val__10917_11607,_STAR_parent_description_STAR__temp_val__10918_11608,description__9652__auto____$1,_STAR_parent_description_STAR__orig_val__10229_11064,_STAR_parent_description_STAR__temp_val__10230_11065,description__9652__auto___11063))
,invocations__10038__auto___11935))){
} else {
throw (new speclj.platform.SpecFailure(["Expected: invocation of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__10036__auto___11933)," with ",cljs.core.pr_str.call(null,with__10042__auto___11940__$1),speclj.platform.endl,"     got: ",cljs.core.pr_str.call(null,invocations__10038__auto___11935)].join('')));
}
} else {
if(times_QMARK___10040__auto___11937){
if(cljs.core._EQ_.call(null,times__10039__auto___11936,cljs.core.count.call(null,invocations__10038__auto___11935))){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(times__10039__auto___11936)," ",invocations_str__10043__auto___11941.call(null,times__10039__auto___11936)," of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__10036__auto___11933),speclj.platform.endl,"     got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,invocations__10038__auto___11935))].join('')));
}
} else {
if(cljs.core.seq.call(null,invocations__10038__auto___11935)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: an invocation of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__10036__auto___11933),speclj.platform.endl,"     got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,invocations__10038__auto___11935))].join('')));
}

}
}
}

var expected__9789__auto___11944 = ((cljs.core._EQ_.call(null,(2),mode_11902))?new cljs.core.Keyword(null,"x","x",2099068185):new cljs.core.Keyword(null,"o","o",-1350007228));
var actual__9790__auto___11945 = new cljs.core.Keyword(null,"player","player",-97687400).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.screens.play_spec.state));
if(cljs.core._EQ_.call(null,expected__9789__auto___11944,actual__9790__auto___11945)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__9789__auto___11944;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9757__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9757__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__9790__auto___11945;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9757__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9757__auto__);
}
})()," (using =)"].join('')));
}

cljs.core.reset_BANG_.call(null,tic_tac_toe.screens.play_spec.state,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"board","board",-1907017633),tic_tac_toe.screens.play_spec.board_4,new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"current-screen","current-screen",-1454713691),new cljs.core.Keyword(null,"play","play",-580418022)], null));


var G__11946 = cljs.core.next.call(null,seq__11044_11926__$1);
var G__11947 = null;
var G__11948 = (0);
var G__11949 = (0);
seq__11044_11903 = G__11946;
chunk__11045_11904 = G__11947;
count__11046_11905 = G__11948;
i__11047_11906 = G__11949;
continue;
}
} else {
}
}
break;
}

var G__11950 = seq__11036_11898;
var G__11951 = chunk__11041_11899;
var G__11952 = count__11042_11900;
var G__11953 = (i__11043_11901 + (1));
seq__11036_11898 = G__11950;
chunk__11041_11899 = G__11951;
count__11042_11900 = G__11952;
i__11043_11901 = G__11953;
continue;
} else {
var temp__5804__auto___11954__$1 = cljs.core.seq.call(null,seq__11036_11898);
if(temp__5804__auto___11954__$1){
var seq__11036_11955__$1 = temp__5804__auto___11954__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11036_11955__$1)){
var c__5525__auto___11956 = cljs.core.chunk_first.call(null,seq__11036_11955__$1);
var G__11957 = cljs.core.chunk_rest.call(null,seq__11036_11955__$1);
var G__11958 = c__5525__auto___11956;
var G__11959 = cljs.core.count.call(null,c__5525__auto___11956);
var G__11960 = (0);
seq__11036_11898 = G__11957;
chunk__11041_11899 = G__11958;
count__11042_11900 = G__11959;
i__11043_11901 = G__11960;
continue;
} else {
var mode_11961 = cljs.core.first.call(null,seq__11036_11955__$1);
var seq__11037_11962 = cljs.core.seq.call(null,cljs.core.range.call(null,(16)));
var chunk__11038_11963 = null;
var count__11039_11964 = (0);
var i__11040_11965 = (0);
while(true){
if((i__11040_11965 < count__11039_11964)){
var n_11966 = cljs.core._nth.call(null,chunk__11038_11963,i__11040_11965);
cljs.core.swap_BANG_.call(null,tic_tac_toe.screens.play_spec.state,cljs.core.assoc,new cljs.core.Keyword(null,"mode","mode",654403691),mode_11961,new cljs.core.Keyword(null,"first-ai-level","first-ai-level",1004633644),ai,new cljs.core.Keyword(null,"player","player",-97687400),((cljs.core._EQ_.call(null,(2),mode_11961))?new cljs.core.Keyword(null,"x","x",2099068185):new cljs.core.Keyword(null,"o","o",-1350007228)),new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"gui","gui",604532813));

c3kit.wire.spec_helper.render.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tic_tac_toe.render_screen.render_screen,tic_tac_toe.screens.play_spec.state], null));

c3kit.wire.spec_helper.click_BANG_.call(null,["#index-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n_11966)].join(''));

var name__10036__auto___11967 = new cljs.core.Keyword(null,"turn","turn",75759344);
var options__10037__auto___11968 = cljs.core.PersistentArrayMap.EMPTY;
var invocations__10038__auto___11969 = speclj.stub.invocations_of.call(null,name__10036__auto___11967);
var times__10039__auto___11970 = new cljs.core.Keyword(null,"times","times",1671571467).cljs$core$IFn$_invoke$arity$1(options__10037__auto___11968);
var times_QMARK___10040__auto___11971 = typeof times__10039__auto___11970 === 'number';
var check_params_QMARK___10041__auto___11972 = cljs.core.contains_QMARK_.call(null,options__10037__auto___11968,new cljs.core.Keyword(null,"with","with",-1536296876));
var with__10042__auto___11973 = new cljs.core.Keyword(null,"with","with",-1536296876).cljs$core$IFn$_invoke$arity$1(options__10037__auto___11968);
var with__10042__auto___11974__$1 = (((with__10042__auto___11973 == null))?cljs.core.PersistentVector.EMPTY:with__10042__auto___11973);
var invocations_str__10043__auto___11975 = ((function (seq__11037_11962,chunk__11038_11963,count__11039_11964,i__11040_11965,seq__11036_11898,chunk__11041_11899,count__11042_11900,i__11043_11901,seq__11035,chunk__11048,count__11049,i__11050,name__10036__auto___11967,options__10037__auto___11968,invocations__10038__auto___11969,times__10039__auto___11970,times_QMARK___10040__auto___11971,check_params_QMARK___10041__auto___11972,with__10042__auto___11973,with__10042__auto___11974__$1,n_11966,mode_11961,seq__11036_11955__$1,temp__5804__auto___11954__$1,ai,seq__11035__$1,temp__5804__auto__,take_turn_orig_val__11033,take_turn_temp_val__11034,_STAR_parent_description_STAR__orig_val__10917_11607,_STAR_parent_description_STAR__temp_val__10918_11608,description__9652__auto____$1,_STAR_parent_description_STAR__orig_val__10229_11064,_STAR_parent_description_STAR__temp_val__10230_11065,description__9652__auto___11063){
return (function (p1__10033__10044__auto__){
if(cljs.core._EQ_.call(null,(1),p1__10033__10044__auto__)){
return "invocation";
} else {
return "invocations";
}
});})(seq__11037_11962,chunk__11038_11963,count__11039_11964,i__11040_11965,seq__11036_11898,chunk__11041_11899,count__11042_11900,i__11043_11901,seq__11035,chunk__11048,count__11049,i__11050,name__10036__auto___11967,options__10037__auto___11968,invocations__10038__auto___11969,times__10039__auto___11970,times_QMARK___10040__auto___11971,check_params_QMARK___10041__auto___11972,with__10042__auto___11973,with__10042__auto___11974__$1,n_11966,mode_11961,seq__11036_11955__$1,temp__5804__auto___11954__$1,ai,seq__11035__$1,temp__5804__auto__,take_turn_orig_val__11033,take_turn_temp_val__11034,_STAR_parent_description_STAR__orig_val__10917_11607,_STAR_parent_description_STAR__temp_val__10918_11608,description__9652__auto____$1,_STAR_parent_description_STAR__orig_val__10229_11064,_STAR_parent_description_STAR__temp_val__10230_11065,description__9652__auto___11063))
;
if(((times_QMARK___10040__auto___11971) && (check_params_QMARK___10041__auto___11972))){
var matching_invocations__10045__auto___11976 = cljs.core.filter.call(null,((function (seq__11037_11962,chunk__11038_11963,count__11039_11964,i__11040_11965,seq__11036_11898,chunk__11041_11899,count__11042_11900,i__11043_11901,seq__11035,chunk__11048,count__11049,i__11050,name__10036__auto___11967,options__10037__auto___11968,invocations__10038__auto___11969,times__10039__auto___11970,times_QMARK___10040__auto___11971,check_params_QMARK___10041__auto___11972,with__10042__auto___11973,with__10042__auto___11974__$1,invocations_str__10043__auto___11975,n_11966,mode_11961,seq__11036_11955__$1,temp__5804__auto___11954__$1,ai,seq__11035__$1,temp__5804__auto__,take_turn_orig_val__11033,take_turn_temp_val__11034,_STAR_parent_description_STAR__orig_val__10917_11607,_STAR_parent_description_STAR__temp_val__10918_11608,description__9652__auto____$1,_STAR_parent_description_STAR__orig_val__10229_11064,_STAR_parent_description_STAR__temp_val__10230_11065,description__9652__auto___11063){
return (function (p1__10034__10046__auto__){
return speclj.stub.params_match_QMARK_.call(null,with__10042__auto___11974__$1,p1__10034__10046__auto__);
});})(seq__11037_11962,chunk__11038_11963,count__11039_11964,i__11040_11965,seq__11036_11898,chunk__11041_11899,count__11042_11900,i__11043_11901,seq__11035,chunk__11048,count__11049,i__11050,name__10036__auto___11967,options__10037__auto___11968,invocations__10038__auto___11969,times__10039__auto___11970,times_QMARK___10040__auto___11971,check_params_QMARK___10041__auto___11972,with__10042__auto___11973,with__10042__auto___11974__$1,invocations_str__10043__auto___11975,n_11966,mode_11961,seq__11036_11955__$1,temp__5804__auto___11954__$1,ai,seq__11035__$1,temp__5804__auto__,take_turn_orig_val__11033,take_turn_temp_val__11034,_STAR_parent_description_STAR__orig_val__10917_11607,_STAR_parent_description_STAR__temp_val__10918_11608,description__9652__auto____$1,_STAR_parent_description_STAR__orig_val__10229_11064,_STAR_parent_description_STAR__temp_val__10230_11065,description__9652__auto___11063))
,invocations__10038__auto___11969);
var matching_count__10047__auto___11977 = cljs.core.count.call(null,matching_invocations__10045__auto___11976);
if(cljs.core._EQ_.call(null,times__10039__auto___11970,matching_count__10047__auto___11977)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(times__10039__auto___11970)," ",invocations_str__10043__auto___11975.call(null,times__10039__auto___11970)," of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__10036__auto___11967)," with ",cljs.core.pr_str.call(null,with__10042__auto___11974__$1),speclj.platform.endl,"     got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(matching_count__10047__auto___11977)," ",invocations_str__10043__auto___11975.call(null,matching_count__10047__auto___11977)].join('')));
}
} else {
if(check_params_QMARK___10041__auto___11972){
if(cljs.core.truth_(cljs.core.some.call(null,((function (seq__11037_11962,chunk__11038_11963,count__11039_11964,i__11040_11965,seq__11036_11898,chunk__11041_11899,count__11042_11900,i__11043_11901,seq__11035,chunk__11048,count__11049,i__11050,name__10036__auto___11967,options__10037__auto___11968,invocations__10038__auto___11969,times__10039__auto___11970,times_QMARK___10040__auto___11971,check_params_QMARK___10041__auto___11972,with__10042__auto___11973,with__10042__auto___11974__$1,invocations_str__10043__auto___11975,n_11966,mode_11961,seq__11036_11955__$1,temp__5804__auto___11954__$1,ai,seq__11035__$1,temp__5804__auto__,take_turn_orig_val__11033,take_turn_temp_val__11034,_STAR_parent_description_STAR__orig_val__10917_11607,_STAR_parent_description_STAR__temp_val__10918_11608,description__9652__auto____$1,_STAR_parent_description_STAR__orig_val__10229_11064,_STAR_parent_description_STAR__temp_val__10230_11065,description__9652__auto___11063){
return (function (p1__10035__10048__auto__){
return speclj.stub.params_match_QMARK_.call(null,with__10042__auto___11974__$1,p1__10035__10048__auto__);
});})(seq__11037_11962,chunk__11038_11963,count__11039_11964,i__11040_11965,seq__11036_11898,chunk__11041_11899,count__11042_11900,i__11043_11901,seq__11035,chunk__11048,count__11049,i__11050,name__10036__auto___11967,options__10037__auto___11968,invocations__10038__auto___11969,times__10039__auto___11970,times_QMARK___10040__auto___11971,check_params_QMARK___10041__auto___11972,with__10042__auto___11973,with__10042__auto___11974__$1,invocations_str__10043__auto___11975,n_11966,mode_11961,seq__11036_11955__$1,temp__5804__auto___11954__$1,ai,seq__11035__$1,temp__5804__auto__,take_turn_orig_val__11033,take_turn_temp_val__11034,_STAR_parent_description_STAR__orig_val__10917_11607,_STAR_parent_description_STAR__temp_val__10918_11608,description__9652__auto____$1,_STAR_parent_description_STAR__orig_val__10229_11064,_STAR_parent_description_STAR__temp_val__10230_11065,description__9652__auto___11063))
,invocations__10038__auto___11969))){
} else {
throw (new speclj.platform.SpecFailure(["Expected: invocation of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__10036__auto___11967)," with ",cljs.core.pr_str.call(null,with__10042__auto___11974__$1),speclj.platform.endl,"     got: ",cljs.core.pr_str.call(null,invocations__10038__auto___11969)].join('')));
}
} else {
if(times_QMARK___10040__auto___11971){
if(cljs.core._EQ_.call(null,times__10039__auto___11970,cljs.core.count.call(null,invocations__10038__auto___11969))){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(times__10039__auto___11970)," ",invocations_str__10043__auto___11975.call(null,times__10039__auto___11970)," of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__10036__auto___11967),speclj.platform.endl,"     got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,invocations__10038__auto___11969))].join('')));
}
} else {
if(cljs.core.seq.call(null,invocations__10038__auto___11969)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: an invocation of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__10036__auto___11967),speclj.platform.endl,"     got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,invocations__10038__auto___11969))].join('')));
}

}
}
}

var expected__9789__auto___11978 = ((cljs.core._EQ_.call(null,(2),mode_11961))?new cljs.core.Keyword(null,"x","x",2099068185):new cljs.core.Keyword(null,"o","o",-1350007228));
var actual__9790__auto___11979 = new cljs.core.Keyword(null,"player","player",-97687400).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.screens.play_spec.state));
if(cljs.core._EQ_.call(null,expected__9789__auto___11978,actual__9790__auto___11979)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__9789__auto___11978;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9757__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9757__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__9790__auto___11979;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9757__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9757__auto__);
}
})()," (using =)"].join('')));
}

cljs.core.reset_BANG_.call(null,tic_tac_toe.screens.play_spec.state,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"board","board",-1907017633),tic_tac_toe.screens.play_spec.board_4,new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"current-screen","current-screen",-1454713691),new cljs.core.Keyword(null,"play","play",-580418022)], null));


var G__11980 = seq__11037_11962;
var G__11981 = chunk__11038_11963;
var G__11982 = count__11039_11964;
var G__11983 = (i__11040_11965 + (1));
seq__11037_11962 = G__11980;
chunk__11038_11963 = G__11981;
count__11039_11964 = G__11982;
i__11040_11965 = G__11983;
continue;
} else {
var temp__5804__auto___11984__$2 = cljs.core.seq.call(null,seq__11037_11962);
if(temp__5804__auto___11984__$2){
var seq__11037_11985__$1 = temp__5804__auto___11984__$2;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11037_11985__$1)){
var c__5525__auto___11986 = cljs.core.chunk_first.call(null,seq__11037_11985__$1);
var G__11987 = cljs.core.chunk_rest.call(null,seq__11037_11985__$1);
var G__11988 = c__5525__auto___11986;
var G__11989 = cljs.core.count.call(null,c__5525__auto___11986);
var G__11990 = (0);
seq__11037_11962 = G__11987;
chunk__11038_11963 = G__11988;
count__11039_11964 = G__11989;
i__11040_11965 = G__11990;
continue;
} else {
var n_11991 = cljs.core.first.call(null,seq__11037_11985__$1);
cljs.core.swap_BANG_.call(null,tic_tac_toe.screens.play_spec.state,cljs.core.assoc,new cljs.core.Keyword(null,"mode","mode",654403691),mode_11961,new cljs.core.Keyword(null,"first-ai-level","first-ai-level",1004633644),ai,new cljs.core.Keyword(null,"player","player",-97687400),((cljs.core._EQ_.call(null,(2),mode_11961))?new cljs.core.Keyword(null,"x","x",2099068185):new cljs.core.Keyword(null,"o","o",-1350007228)),new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"gui","gui",604532813));

c3kit.wire.spec_helper.render.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tic_tac_toe.render_screen.render_screen,tic_tac_toe.screens.play_spec.state], null));

c3kit.wire.spec_helper.click_BANG_.call(null,["#index-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n_11991)].join(''));

var name__10036__auto___11992 = new cljs.core.Keyword(null,"turn","turn",75759344);
var options__10037__auto___11993 = cljs.core.PersistentArrayMap.EMPTY;
var invocations__10038__auto___11994 = speclj.stub.invocations_of.call(null,name__10036__auto___11992);
var times__10039__auto___11995 = new cljs.core.Keyword(null,"times","times",1671571467).cljs$core$IFn$_invoke$arity$1(options__10037__auto___11993);
var times_QMARK___10040__auto___11996 = typeof times__10039__auto___11995 === 'number';
var check_params_QMARK___10041__auto___11997 = cljs.core.contains_QMARK_.call(null,options__10037__auto___11993,new cljs.core.Keyword(null,"with","with",-1536296876));
var with__10042__auto___11998 = new cljs.core.Keyword(null,"with","with",-1536296876).cljs$core$IFn$_invoke$arity$1(options__10037__auto___11993);
var with__10042__auto___11999__$1 = (((with__10042__auto___11998 == null))?cljs.core.PersistentVector.EMPTY:with__10042__auto___11998);
var invocations_str__10043__auto___12000 = ((function (seq__11037_11962,chunk__11038_11963,count__11039_11964,i__11040_11965,seq__11036_11898,chunk__11041_11899,count__11042_11900,i__11043_11901,seq__11035,chunk__11048,count__11049,i__11050,name__10036__auto___11992,options__10037__auto___11993,invocations__10038__auto___11994,times__10039__auto___11995,times_QMARK___10040__auto___11996,check_params_QMARK___10041__auto___11997,with__10042__auto___11998,with__10042__auto___11999__$1,n_11991,seq__11037_11985__$1,temp__5804__auto___11984__$2,mode_11961,seq__11036_11955__$1,temp__5804__auto___11954__$1,ai,seq__11035__$1,temp__5804__auto__,take_turn_orig_val__11033,take_turn_temp_val__11034,_STAR_parent_description_STAR__orig_val__10917_11607,_STAR_parent_description_STAR__temp_val__10918_11608,description__9652__auto____$1,_STAR_parent_description_STAR__orig_val__10229_11064,_STAR_parent_description_STAR__temp_val__10230_11065,description__9652__auto___11063){
return (function (p1__10033__10044__auto__){
if(cljs.core._EQ_.call(null,(1),p1__10033__10044__auto__)){
return "invocation";
} else {
return "invocations";
}
});})(seq__11037_11962,chunk__11038_11963,count__11039_11964,i__11040_11965,seq__11036_11898,chunk__11041_11899,count__11042_11900,i__11043_11901,seq__11035,chunk__11048,count__11049,i__11050,name__10036__auto___11992,options__10037__auto___11993,invocations__10038__auto___11994,times__10039__auto___11995,times_QMARK___10040__auto___11996,check_params_QMARK___10041__auto___11997,with__10042__auto___11998,with__10042__auto___11999__$1,n_11991,seq__11037_11985__$1,temp__5804__auto___11984__$2,mode_11961,seq__11036_11955__$1,temp__5804__auto___11954__$1,ai,seq__11035__$1,temp__5804__auto__,take_turn_orig_val__11033,take_turn_temp_val__11034,_STAR_parent_description_STAR__orig_val__10917_11607,_STAR_parent_description_STAR__temp_val__10918_11608,description__9652__auto____$1,_STAR_parent_description_STAR__orig_val__10229_11064,_STAR_parent_description_STAR__temp_val__10230_11065,description__9652__auto___11063))
;
if(((times_QMARK___10040__auto___11996) && (check_params_QMARK___10041__auto___11997))){
var matching_invocations__10045__auto___12001 = cljs.core.filter.call(null,((function (seq__11037_11962,chunk__11038_11963,count__11039_11964,i__11040_11965,seq__11036_11898,chunk__11041_11899,count__11042_11900,i__11043_11901,seq__11035,chunk__11048,count__11049,i__11050,name__10036__auto___11992,options__10037__auto___11993,invocations__10038__auto___11994,times__10039__auto___11995,times_QMARK___10040__auto___11996,check_params_QMARK___10041__auto___11997,with__10042__auto___11998,with__10042__auto___11999__$1,invocations_str__10043__auto___12000,n_11991,seq__11037_11985__$1,temp__5804__auto___11984__$2,mode_11961,seq__11036_11955__$1,temp__5804__auto___11954__$1,ai,seq__11035__$1,temp__5804__auto__,take_turn_orig_val__11033,take_turn_temp_val__11034,_STAR_parent_description_STAR__orig_val__10917_11607,_STAR_parent_description_STAR__temp_val__10918_11608,description__9652__auto____$1,_STAR_parent_description_STAR__orig_val__10229_11064,_STAR_parent_description_STAR__temp_val__10230_11065,description__9652__auto___11063){
return (function (p1__10034__10046__auto__){
return speclj.stub.params_match_QMARK_.call(null,with__10042__auto___11999__$1,p1__10034__10046__auto__);
});})(seq__11037_11962,chunk__11038_11963,count__11039_11964,i__11040_11965,seq__11036_11898,chunk__11041_11899,count__11042_11900,i__11043_11901,seq__11035,chunk__11048,count__11049,i__11050,name__10036__auto___11992,options__10037__auto___11993,invocations__10038__auto___11994,times__10039__auto___11995,times_QMARK___10040__auto___11996,check_params_QMARK___10041__auto___11997,with__10042__auto___11998,with__10042__auto___11999__$1,invocations_str__10043__auto___12000,n_11991,seq__11037_11985__$1,temp__5804__auto___11984__$2,mode_11961,seq__11036_11955__$1,temp__5804__auto___11954__$1,ai,seq__11035__$1,temp__5804__auto__,take_turn_orig_val__11033,take_turn_temp_val__11034,_STAR_parent_description_STAR__orig_val__10917_11607,_STAR_parent_description_STAR__temp_val__10918_11608,description__9652__auto____$1,_STAR_parent_description_STAR__orig_val__10229_11064,_STAR_parent_description_STAR__temp_val__10230_11065,description__9652__auto___11063))
,invocations__10038__auto___11994);
var matching_count__10047__auto___12002 = cljs.core.count.call(null,matching_invocations__10045__auto___12001);
if(cljs.core._EQ_.call(null,times__10039__auto___11995,matching_count__10047__auto___12002)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(times__10039__auto___11995)," ",invocations_str__10043__auto___12000.call(null,times__10039__auto___11995)," of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__10036__auto___11992)," with ",cljs.core.pr_str.call(null,with__10042__auto___11999__$1),speclj.platform.endl,"     got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(matching_count__10047__auto___12002)," ",invocations_str__10043__auto___12000.call(null,matching_count__10047__auto___12002)].join('')));
}
} else {
if(check_params_QMARK___10041__auto___11997){
if(cljs.core.truth_(cljs.core.some.call(null,((function (seq__11037_11962,chunk__11038_11963,count__11039_11964,i__11040_11965,seq__11036_11898,chunk__11041_11899,count__11042_11900,i__11043_11901,seq__11035,chunk__11048,count__11049,i__11050,name__10036__auto___11992,options__10037__auto___11993,invocations__10038__auto___11994,times__10039__auto___11995,times_QMARK___10040__auto___11996,check_params_QMARK___10041__auto___11997,with__10042__auto___11998,with__10042__auto___11999__$1,invocations_str__10043__auto___12000,n_11991,seq__11037_11985__$1,temp__5804__auto___11984__$2,mode_11961,seq__11036_11955__$1,temp__5804__auto___11954__$1,ai,seq__11035__$1,temp__5804__auto__,take_turn_orig_val__11033,take_turn_temp_val__11034,_STAR_parent_description_STAR__orig_val__10917_11607,_STAR_parent_description_STAR__temp_val__10918_11608,description__9652__auto____$1,_STAR_parent_description_STAR__orig_val__10229_11064,_STAR_parent_description_STAR__temp_val__10230_11065,description__9652__auto___11063){
return (function (p1__10035__10048__auto__){
return speclj.stub.params_match_QMARK_.call(null,with__10042__auto___11999__$1,p1__10035__10048__auto__);
});})(seq__11037_11962,chunk__11038_11963,count__11039_11964,i__11040_11965,seq__11036_11898,chunk__11041_11899,count__11042_11900,i__11043_11901,seq__11035,chunk__11048,count__11049,i__11050,name__10036__auto___11992,options__10037__auto___11993,invocations__10038__auto___11994,times__10039__auto___11995,times_QMARK___10040__auto___11996,check_params_QMARK___10041__auto___11997,with__10042__auto___11998,with__10042__auto___11999__$1,invocations_str__10043__auto___12000,n_11991,seq__11037_11985__$1,temp__5804__auto___11984__$2,mode_11961,seq__11036_11955__$1,temp__5804__auto___11954__$1,ai,seq__11035__$1,temp__5804__auto__,take_turn_orig_val__11033,take_turn_temp_val__11034,_STAR_parent_description_STAR__orig_val__10917_11607,_STAR_parent_description_STAR__temp_val__10918_11608,description__9652__auto____$1,_STAR_parent_description_STAR__orig_val__10229_11064,_STAR_parent_description_STAR__temp_val__10230_11065,description__9652__auto___11063))
,invocations__10038__auto___11994))){
} else {
throw (new speclj.platform.SpecFailure(["Expected: invocation of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__10036__auto___11992)," with ",cljs.core.pr_str.call(null,with__10042__auto___11999__$1),speclj.platform.endl,"     got: ",cljs.core.pr_str.call(null,invocations__10038__auto___11994)].join('')));
}
} else {
if(times_QMARK___10040__auto___11996){
if(cljs.core._EQ_.call(null,times__10039__auto___11995,cljs.core.count.call(null,invocations__10038__auto___11994))){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(times__10039__auto___11995)," ",invocations_str__10043__auto___12000.call(null,times__10039__auto___11995)," of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__10036__auto___11992),speclj.platform.endl,"     got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,invocations__10038__auto___11994))].join('')));
}
} else {
if(cljs.core.seq.call(null,invocations__10038__auto___11994)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: an invocation of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__10036__auto___11992),speclj.platform.endl,"     got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,invocations__10038__auto___11994))].join('')));
}

}
}
}

var expected__9789__auto___12003 = ((cljs.core._EQ_.call(null,(2),mode_11961))?new cljs.core.Keyword(null,"x","x",2099068185):new cljs.core.Keyword(null,"o","o",-1350007228));
var actual__9790__auto___12004 = new cljs.core.Keyword(null,"player","player",-97687400).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.screens.play_spec.state));
if(cljs.core._EQ_.call(null,expected__9789__auto___12003,actual__9790__auto___12004)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__9789__auto___12003;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9757__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9757__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__9790__auto___12004;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9757__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9757__auto__);
}
})()," (using =)"].join('')));
}

cljs.core.reset_BANG_.call(null,tic_tac_toe.screens.play_spec.state,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"board","board",-1907017633),tic_tac_toe.screens.play_spec.board_4,new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"current-screen","current-screen",-1454713691),new cljs.core.Keyword(null,"play","play",-580418022)], null));


var G__12005 = cljs.core.next.call(null,seq__11037_11985__$1);
var G__12006 = null;
var G__12007 = (0);
var G__12008 = (0);
seq__11037_11962 = G__12005;
chunk__11038_11963 = G__12006;
count__11039_11964 = G__12007;
i__11040_11965 = G__12008;
continue;
}
} else {
}
}
break;
}

var G__12009 = cljs.core.next.call(null,seq__11036_11955__$1);
var G__12010 = null;
var G__12011 = (0);
var G__12012 = (0);
seq__11036_11898 = G__12009;
chunk__11041_11899 = G__12010;
count__11042_11900 = G__12011;
i__11043_11901 = G__12012;
continue;
}
} else {
}
}
break;
}

var G__12013 = cljs.core.next.call(null,seq__11035__$1);
var G__12014 = null;
var G__12015 = (0);
var G__12016 = (0);
seq__11035 = G__12013;
chunk__11048 = G__12014;
count__11049 = G__12015;
i__11050 = G__12016;
continue;
}
} else {
return null;
}
}
break;
}
}finally {(tic_tac_toe.player.take_turn = take_turn_orig_val__11033);
}});})(_STAR_parent_description_STAR__orig_val__10917_11607,_STAR_parent_description_STAR__temp_val__10918_11608,description__9652__auto____$1,_STAR_parent_description_STAR__orig_val__10229_11064,_STAR_parent_description_STAR__temp_val__10230_11065,description__9652__auto___11063))
,false),speclj.components.new_characteristic.call(null,"AI is not triggered if game over",((function (_STAR_parent_description_STAR__orig_val__10917_11607,_STAR_parent_description_STAR__temp_val__10918_11608,description__9652__auto____$1,_STAR_parent_description_STAR__orig_val__10229_11064,_STAR_parent_description_STAR__temp_val__10230_11065,description__9652__auto___11063){
return (function (){
cljs.core.swap_BANG_.call(null,tic_tac_toe.screens.play_spec.state,cljs.core.assoc,new cljs.core.Keyword(null,"board","board",-1907017633),new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"x","x",2099068185),(3),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"o","o",-1350007228),new cljs.core.Keyword(null,"o","o",-1350007228),new cljs.core.Keyword(null,"o","o",-1350007228),(8),(9),(10),(11),(12),(13),(14),(15),(16)], null),new cljs.core.Keyword(null,"mode","mode",654403691),(2),new cljs.core.Keyword(null,"first-ai-level","first-ai-level",1004633644),(3));

c3kit.wire.spec_helper.click_BANG_.call(null,"#index-2");

var expected__9789__auto__ = new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"o","o",-1350007228),new cljs.core.Keyword(null,"o","o",-1350007228),new cljs.core.Keyword(null,"o","o",-1350007228),(8),(9),(10),(11),(12),(13),(14),(15),(16)], null);
var actual__9790__auto__ = new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.screens.play_spec.state));
if(cljs.core._EQ_.call(null,expected__9789__auto__,actual__9790__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__9789__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9757__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9757__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__9790__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9757__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9757__auto__);
}
})()," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__10917_11607,_STAR_parent_description_STAR__temp_val__10918_11608,description__9652__auto____$1,_STAR_parent_description_STAR__orig_val__10229_11064,_STAR_parent_description_STAR__temp_val__10230_11065,description__9652__auto___11063))
,false)],null)));
var chunk__10920_11610 = null;
var count__10921_11611 = (0);
var i__10922_11612 = (0);
while(true){
if((i__10922_11612 < count__10921_11611)){
var component__9653__auto___12017 = cljs.core._nth.call(null,chunk__10920_11610,i__10922_11612);
speclj.components.install.call(null,component__9653__auto___12017,description__9652__auto____$1);


var G__12018 = seq__10919_11609;
var G__12019 = chunk__10920_11610;
var G__12020 = count__10921_11611;
var G__12021 = (i__10922_11612 + (1));
seq__10919_11609 = G__12018;
chunk__10920_11610 = G__12019;
count__10921_11611 = G__12020;
i__10922_11612 = G__12021;
continue;
} else {
var temp__5804__auto___12022 = cljs.core.seq.call(null,seq__10919_11609);
if(temp__5804__auto___12022){
var seq__10919_12023__$1 = temp__5804__auto___12022;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10919_12023__$1)){
var c__5525__auto___12024 = cljs.core.chunk_first.call(null,seq__10919_12023__$1);
var G__12025 = cljs.core.chunk_rest.call(null,seq__10919_12023__$1);
var G__12026 = c__5525__auto___12024;
var G__12027 = cljs.core.count.call(null,c__5525__auto___12024);
var G__12028 = (0);
seq__10919_11609 = G__12025;
chunk__10920_11610 = G__12026;
count__10921_11611 = G__12027;
i__10922_11612 = G__12028;
continue;
} else {
var component__9653__auto___12029 = cljs.core.first.call(null,seq__10919_12023__$1);
speclj.components.install.call(null,component__9653__auto___12029,description__9652__auto____$1);


var G__12030 = cljs.core.next.call(null,seq__10919_12023__$1);
var G__12031 = null;
var G__12032 = (0);
var G__12033 = (0);
seq__10919_11609 = G__12030;
chunk__10920_11610 = G__12031;
count__10921_11611 = G__12032;
i__10922_11612 = G__12033;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__10917_11607);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__9652__auto____$1);
}

return description__9652__auto____$1;
})()],null)));
var chunk__10232_11067 = null;
var count__10233_11068 = (0);
var i__10234_11069 = (0);
while(true){
if((i__10234_11069 < count__10233_11068)){
var component__9653__auto___12034 = cljs.core._nth.call(null,chunk__10232_11067,i__10234_11069);
speclj.components.install.call(null,component__9653__auto___12034,description__9652__auto___11063);


var G__12035 = seq__10231_11066;
var G__12036 = chunk__10232_11067;
var G__12037 = count__10233_11068;
var G__12038 = (i__10234_11069 + (1));
seq__10231_11066 = G__12035;
chunk__10232_11067 = G__12036;
count__10233_11068 = G__12037;
i__10234_11069 = G__12038;
continue;
} else {
var temp__5804__auto___12039 = cljs.core.seq.call(null,seq__10231_11066);
if(temp__5804__auto___12039){
var seq__10231_12040__$1 = temp__5804__auto___12039;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10231_12040__$1)){
var c__5525__auto___12041 = cljs.core.chunk_first.call(null,seq__10231_12040__$1);
var G__12042 = cljs.core.chunk_rest.call(null,seq__10231_12040__$1);
var G__12043 = c__5525__auto___12041;
var G__12044 = cljs.core.count.call(null,c__5525__auto___12041);
var G__12045 = (0);
seq__10231_11066 = G__12042;
chunk__10232_11067 = G__12043;
count__10233_11068 = G__12044;
i__10234_11069 = G__12045;
continue;
} else {
var component__9653__auto___12046 = cljs.core.first.call(null,seq__10231_12040__$1);
speclj.components.install.call(null,component__9653__auto___12046,description__9652__auto___11063);


var G__12047 = cljs.core.next.call(null,seq__10231_12040__$1);
var G__12048 = null;
var G__12049 = (0);
var G__12050 = (0);
seq__10231_11066 = G__12047;
chunk__10232_11067 = G__12048;
count__10233_11068 = G__12049;
i__10234_11069 = G__12050;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__10229_11064);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__9652__auto___11063);
}


//# sourceMappingURL=play_spec.js.map
