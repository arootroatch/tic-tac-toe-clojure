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
var description__11238__auto___20375 = speclj.components.new_description.call(null,"play screen",false,"tic-tac-toe.screens.play-spec");
var _STAR_parent_description_STAR__orig_val__19701_20376 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__19702_20377 = description__11238__auto___20375;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__19702_20377);

try{var seq__19703_20378 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,6,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_around.call(null,((function (_STAR_parent_description_STAR__orig_val__19701_20376,_STAR_parent_description_STAR__temp_val__19702_20377,description__11238__auto___20375){
return (function (it__11608__auto__){
var _STAR_stubbed_invocations_STAR__orig_val__20041 = speclj.stub._STAR_stubbed_invocations_STAR_;
var _STAR_stubbed_invocations_STAR__temp_val__20042 = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
(speclj.stub._STAR_stubbed_invocations_STAR_ = _STAR_stubbed_invocations_STAR__temp_val__20042);

try{return it__11608__auto__.call(null);
}finally {(speclj.stub._STAR_stubbed_invocations_STAR_ = _STAR_stubbed_invocations_STAR__orig_val__20041);
}});})(_STAR_parent_description_STAR__orig_val__19701_20376,_STAR_parent_description_STAR__temp_val__19702_20377,description__11238__auto___20375))
),c3kit.wire.spec_helper.with_root_dom.call(null),(function (){var description__11238__auto____$1 = speclj.components.new_description.call(null,"restart",false,"tic-tac-toe.screens.play-spec");
var _STAR_parent_description_STAR__orig_val__20043_20382 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__20044_20383 = description__11238__auto____$1;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__20044_20383);

try{var seq__20045_20384 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_characteristic.call(null,"displays restart button at end of game",((function (_STAR_parent_description_STAR__orig_val__20043_20382,_STAR_parent_description_STAR__temp_val__20044_20383,description__11238__auto____$1,_STAR_parent_description_STAR__orig_val__19701_20376,_STAR_parent_description_STAR__temp_val__19702_20377,description__11238__auto___20375){
return (function (){
cljs.core.swap_BANG_.call(null,tic_tac_toe.screens.play_spec.state,cljs.core.assoc,new cljs.core.Keyword(null,"game-state","game-state",935682735),"X wins!");

c3kit.wire.spec_helper.render.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tic_tac_toe.render_screen.render_screen,tic_tac_toe.screens.play_spec.state], null));

var value__11738__auto___20388 = "#restart";
var node__11739__auto___20389 = c3kit.wire.spec_helper.select.call(null,value__11738__auto___20388);
if(cljs.core.truth_(node__11739__auto___20389)){
} else {
throw (new speclj.platform.SpecFailure(["Expected selector to find node: ",(function (){var temp__5806__auto__ = value__11738__auto___20388;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11343__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11343__auto__);
}
})()].join('')));
}

var expected__11375__auto__ = "Restart";
var actual__11376__auto__ = c3kit.wire.spec_helper.text.call(null,"#restart");
if(cljs.core._EQ_.call(null,expected__11375__auto__,actual__11376__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__11375__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11343__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11343__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__11376__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11343__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11343__auto__);
}
})()," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__20043_20382,_STAR_parent_description_STAR__temp_val__20044_20383,description__11238__auto____$1,_STAR_parent_description_STAR__orig_val__19701_20376,_STAR_parent_description_STAR__temp_val__19702_20377,description__11238__auto___20375))
,false),speclj.components.new_characteristic.call(null,"resets game state",((function (_STAR_parent_description_STAR__orig_val__20043_20382,_STAR_parent_description_STAR__temp_val__20044_20383,description__11238__auto____$1,_STAR_parent_description_STAR__orig_val__19701_20376,_STAR_parent_description_STAR__temp_val__19702_20377,description__11238__auto___20375){
return (function (){
cljs.core.swap_BANG_.call(null,tic_tac_toe.screens.play_spec.state,cljs.core.assoc,new cljs.core.Keyword(null,"game-state","game-state",935682735),"X wins!");

c3kit.wire.spec_helper.render.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tic_tac_toe.render_screen.render_screen,tic_tac_toe.screens.play_spec.state], null));

c3kit.wire.spec_helper.click_BANG_.call(null,"#restart");

var expected__11375__auto__ = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"current-screen","current-screen",-1454713691),new cljs.core.Keyword(null,"second-ai-level","second-ai-level",-418730455),new cljs.core.Keyword(null,"mode","mode",654403691),new cljs.core.Keyword(null,"first-ai-level","first-ai-level",1004633644),new cljs.core.Keyword(null,"game-state","game-state",935682735),new cljs.core.Keyword(null,"human?","human?",-2017219054),new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"board","board",-1907017633)],[new cljs.core.Keyword(null,"mode-selection","mode-selection",986239762),null,null,null,new cljs.core.Keyword(null,"in-progress","in-progress",2126442630),true,new cljs.core.Keyword(null,"gui","gui",604532813),new cljs.core.Keyword(null,"x","x",2099068185),null]);
var actual__11376__auto__ = cljs.core.deref.call(null,tic_tac_toe.screens.play_spec.state);
if(cljs.core._EQ_.call(null,expected__11375__auto__,actual__11376__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__11375__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11343__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11343__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__11376__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11343__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11343__auto__);
}
})()," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__20043_20382,_STAR_parent_description_STAR__temp_val__20044_20383,description__11238__auto____$1,_STAR_parent_description_STAR__orig_val__19701_20376,_STAR_parent_description_STAR__temp_val__19702_20377,description__11238__auto___20375))
,false),speclj.components.new_characteristic.call(null,"doesn't display restart button if game is in progress",((function (_STAR_parent_description_STAR__orig_val__20043_20382,_STAR_parent_description_STAR__temp_val__20044_20383,description__11238__auto____$1,_STAR_parent_description_STAR__orig_val__19701_20376,_STAR_parent_description_STAR__temp_val__19702_20377,description__11238__auto___20375){
return (function (){
cljs.core.swap_BANG_.call(null,tic_tac_toe.screens.play_spec.state,cljs.core.assoc,new cljs.core.Keyword(null,"game-state","game-state",935682735),new cljs.core.Keyword(null,"in-progress","in-progress",2126442630));

c3kit.wire.spec_helper.render.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tic_tac_toe.render_screen.render_screen,tic_tac_toe.screens.play_spec.state], null));

var value__11747__auto__ = "#restart";
var node__11748__auto__ = c3kit.wire.spec_helper.select.call(null,value__11747__auto__);
if(cljs.core.truth_(node__11748__auto__)){
throw (new speclj.platform.SpecFailure(["Expected selector NOT to find node: ",(function (){var temp__5806__auto__ = value__11747__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11343__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11343__auto__);
}
})()].join('')));
} else {
return null;
}
});})(_STAR_parent_description_STAR__orig_val__20043_20382,_STAR_parent_description_STAR__temp_val__20044_20383,description__11238__auto____$1,_STAR_parent_description_STAR__orig_val__19701_20376,_STAR_parent_description_STAR__temp_val__19702_20377,description__11238__auto___20375))
,false)],null)));
var chunk__20046_20385 = null;
var count__20047_20386 = (0);
var i__20048_20387 = (0);
while(true){
if((i__20048_20387 < count__20047_20386)){
var component__11239__auto___20390 = cljs.core._nth.call(null,chunk__20046_20385,i__20048_20387);
speclj.components.install.call(null,component__11239__auto___20390,description__11238__auto____$1);


var G__20391 = seq__20045_20384;
var G__20392 = chunk__20046_20385;
var G__20393 = count__20047_20386;
var G__20394 = (i__20048_20387 + (1));
seq__20045_20384 = G__20391;
chunk__20046_20385 = G__20392;
count__20047_20386 = G__20393;
i__20048_20387 = G__20394;
continue;
} else {
var temp__5804__auto___20395 = cljs.core.seq.call(null,seq__20045_20384);
if(temp__5804__auto___20395){
var seq__20045_20396__$1 = temp__5804__auto___20395;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20045_20396__$1)){
var c__5525__auto___20397 = cljs.core.chunk_first.call(null,seq__20045_20396__$1);
var G__20398 = cljs.core.chunk_rest.call(null,seq__20045_20396__$1);
var G__20399 = c__5525__auto___20397;
var G__20400 = cljs.core.count.call(null,c__5525__auto___20397);
var G__20401 = (0);
seq__20045_20384 = G__20398;
chunk__20046_20385 = G__20399;
count__20047_20386 = G__20400;
i__20048_20387 = G__20401;
continue;
} else {
var component__11239__auto___20402 = cljs.core.first.call(null,seq__20045_20396__$1);
speclj.components.install.call(null,component__11239__auto___20402,description__11238__auto____$1);


var G__20403 = cljs.core.next.call(null,seq__20045_20396__$1);
var G__20404 = null;
var G__20405 = (0);
var G__20406 = (0);
seq__20045_20384 = G__20403;
chunk__20046_20385 = G__20404;
count__20047_20386 = G__20405;
i__20048_20387 = G__20406;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__20043_20382);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__11238__auto____$1);
}

return description__11238__auto____$1;
})(),(function (){var description__11238__auto____$1 = speclj.components.new_description.call(null,"play heading",false,"tic-tac-toe.screens.play-spec");
var _STAR_parent_description_STAR__orig_val__20049_20407 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__20050_20408 = description__11238__auto____$1;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__20050_20408);

try{var seq__20051_20409 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,4,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_before.call(null,((function (_STAR_parent_description_STAR__orig_val__20049_20407,_STAR_parent_description_STAR__temp_val__20050_20408,description__11238__auto____$1,_STAR_parent_description_STAR__orig_val__19701_20376,_STAR_parent_description_STAR__temp_val__19702_20377,description__11238__auto___20375){
return (function (){
return cljs.core.reset_BANG_.call(null,tic_tac_toe.screens.play_spec.state,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"current-screen","current-screen",-1454713691),new cljs.core.Keyword(null,"play","play",-580418022),new cljs.core.Keyword(null,"board","board",-1907017633),tic_tac_toe.screens.play_spec.board_3,new cljs.core.Keyword(null,"game-state","game-state",935682735),new cljs.core.Keyword(null,"in-progress","in-progress",2126442630),new cljs.core.Keyword(null,"human?","human?",-2017219054),true], null));
});})(_STAR_parent_description_STAR__orig_val__20049_20407,_STAR_parent_description_STAR__temp_val__20050_20408,description__11238__auto____$1,_STAR_parent_description_STAR__orig_val__19701_20376,_STAR_parent_description_STAR__temp_val__19702_20377,description__11238__auto___20375))
),speclj.components.new_characteristic.call(null,"prompts player x for move",((function (_STAR_parent_description_STAR__orig_val__20049_20407,_STAR_parent_description_STAR__temp_val__20050_20408,description__11238__auto____$1,_STAR_parent_description_STAR__orig_val__19701_20376,_STAR_parent_description_STAR__temp_val__19702_20377,description__11238__auto___20375){
return (function (){
cljs.core.swap_BANG_.call(null,tic_tac_toe.screens.play_spec.state,cljs.core.assoc,new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"x","x",2099068185));

c3kit.wire.spec_helper.render.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tic_tac_toe.render_screen.render_screen,tic_tac_toe.screens.play_spec.state], null));

var expected__11375__auto__ = "X's turn!";
var actual__11376__auto__ = c3kit.wire.spec_helper.text.call(null,"#play-heading");
if(cljs.core._EQ_.call(null,expected__11375__auto__,actual__11376__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__11375__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11343__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11343__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__11376__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11343__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11343__auto__);
}
})()," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__20049_20407,_STAR_parent_description_STAR__temp_val__20050_20408,description__11238__auto____$1,_STAR_parent_description_STAR__orig_val__19701_20376,_STAR_parent_description_STAR__temp_val__19702_20377,description__11238__auto___20375))
,false),speclj.components.new_characteristic.call(null,"prompts player o for move",((function (_STAR_parent_description_STAR__orig_val__20049_20407,_STAR_parent_description_STAR__temp_val__20050_20408,description__11238__auto____$1,_STAR_parent_description_STAR__orig_val__19701_20376,_STAR_parent_description_STAR__temp_val__19702_20377,description__11238__auto___20375){
return (function (){
cljs.core.swap_BANG_.call(null,tic_tac_toe.screens.play_spec.state,cljs.core.assoc,new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"o","o",-1350007228));

c3kit.wire.spec_helper.render.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tic_tac_toe.render_screen.render_screen,tic_tac_toe.screens.play_spec.state], null));

var expected__11375__auto__ = "O's turn!";
var actual__11376__auto__ = c3kit.wire.spec_helper.text.call(null,"#play-heading");
if(cljs.core._EQ_.call(null,expected__11375__auto__,actual__11376__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__11375__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11343__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11343__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__11376__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11343__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11343__auto__);
}
})()," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__20049_20407,_STAR_parent_description_STAR__temp_val__20050_20408,description__11238__auto____$1,_STAR_parent_description_STAR__orig_val__19701_20376,_STAR_parent_description_STAR__temp_val__19702_20377,description__11238__auto___20375))
,false),speclj.components.new_characteristic.call(null,"displays game state if game over",((function (_STAR_parent_description_STAR__orig_val__20049_20407,_STAR_parent_description_STAR__temp_val__20050_20408,description__11238__auto____$1,_STAR_parent_description_STAR__orig_val__19701_20376,_STAR_parent_description_STAR__temp_val__19702_20377,description__11238__auto___20375){
return (function (){
cljs.core.swap_BANG_.call(null,tic_tac_toe.screens.play_spec.state,cljs.core.assoc,new cljs.core.Keyword(null,"game-state","game-state",935682735),"X wins!");

c3kit.wire.spec_helper.render.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tic_tac_toe.render_screen.render_screen,tic_tac_toe.screens.play_spec.state], null));

var expected__11375__auto__ = "X wins!";
var actual__11376__auto__ = c3kit.wire.spec_helper.text.call(null,"#play-heading");
if(cljs.core._EQ_.call(null,expected__11375__auto__,actual__11376__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__11375__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11343__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11343__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__11376__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11343__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11343__auto__);
}
})()," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__20049_20407,_STAR_parent_description_STAR__temp_val__20050_20408,description__11238__auto____$1,_STAR_parent_description_STAR__orig_val__19701_20376,_STAR_parent_description_STAR__temp_val__19702_20377,description__11238__auto___20375))
,false)],null)));
var chunk__20052_20410 = null;
var count__20053_20411 = (0);
var i__20054_20412 = (0);
while(true){
if((i__20054_20412 < count__20053_20411)){
var component__11239__auto___20413 = cljs.core._nth.call(null,chunk__20052_20410,i__20054_20412);
speclj.components.install.call(null,component__11239__auto___20413,description__11238__auto____$1);


var G__20414 = seq__20051_20409;
var G__20415 = chunk__20052_20410;
var G__20416 = count__20053_20411;
var G__20417 = (i__20054_20412 + (1));
seq__20051_20409 = G__20414;
chunk__20052_20410 = G__20415;
count__20053_20411 = G__20416;
i__20054_20412 = G__20417;
continue;
} else {
var temp__5804__auto___20418 = cljs.core.seq.call(null,seq__20051_20409);
if(temp__5804__auto___20418){
var seq__20051_20419__$1 = temp__5804__auto___20418;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20051_20419__$1)){
var c__5525__auto___20420 = cljs.core.chunk_first.call(null,seq__20051_20419__$1);
var G__20421 = cljs.core.chunk_rest.call(null,seq__20051_20419__$1);
var G__20422 = c__5525__auto___20420;
var G__20423 = cljs.core.count.call(null,c__5525__auto___20420);
var G__20424 = (0);
seq__20051_20409 = G__20421;
chunk__20052_20410 = G__20422;
count__20053_20411 = G__20423;
i__20054_20412 = G__20424;
continue;
} else {
var component__11239__auto___20425 = cljs.core.first.call(null,seq__20051_20419__$1);
speclj.components.install.call(null,component__11239__auto___20425,description__11238__auto____$1);


var G__20426 = cljs.core.next.call(null,seq__20051_20419__$1);
var G__20427 = null;
var G__20428 = (0);
var G__20429 = (0);
seq__20051_20409 = G__20426;
chunk__20052_20410 = G__20427;
count__20053_20411 = G__20428;
i__20054_20412 = G__20429;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__20049_20407);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__11238__auto____$1);
}

return description__11238__auto____$1;
})(),(function (){var description__11238__auto____$1 = speclj.components.new_description.call(null,"3x3",false,"tic-tac-toe.screens.play-spec");
var _STAR_parent_description_STAR__orig_val__20055_20430 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__20056_20431 = description__11238__auto____$1;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__20056_20431);

try{var seq__20057_20432 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,15,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_before.call(null,((function (_STAR_parent_description_STAR__orig_val__20055_20430,_STAR_parent_description_STAR__temp_val__20056_20431,description__11238__auto____$1,_STAR_parent_description_STAR__orig_val__19701_20376,_STAR_parent_description_STAR__temp_val__19702_20377,description__11238__auto___20375){
return (function (){
cljs.core.reset_BANG_.call(null,tic_tac_toe.screens.play_spec.state,new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"current-screen","current-screen",-1454713691),new cljs.core.Keyword(null,"play","play",-580418022),new cljs.core.Keyword(null,"board","board",-1907017633),tic_tac_toe.screens.play_spec.board_3,new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"mode","mode",654403691),(1),new cljs.core.Keyword(null,"game-state","game-state",935682735),new cljs.core.Keyword(null,"in-progress","in-progress",2126442630),new cljs.core.Keyword(null,"human?","human?",-2017219054),true,new cljs.core.Keyword(null,"first-ai-level","first-ai-level",1004633644),(1),new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"gui","gui",604532813)], null));

return c3kit.wire.spec_helper.render.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tic_tac_toe.render_screen.render_screen,tic_tac_toe.screens.play_spec.state], null));
});})(_STAR_parent_description_STAR__orig_val__20055_20430,_STAR_parent_description_STAR__temp_val__20056_20431,description__11238__auto____$1,_STAR_parent_description_STAR__orig_val__19701_20376,_STAR_parent_description_STAR__temp_val__19702_20377,description__11238__auto___20375))
),speclj.components.new_characteristic.call(null,"renders board",((function (_STAR_parent_description_STAR__orig_val__20055_20430,_STAR_parent_description_STAR__temp_val__20056_20431,description__11238__auto____$1,_STAR_parent_description_STAR__orig_val__19701_20376,_STAR_parent_description_STAR__temp_val__19702_20377,description__11238__auto___20375){
return (function (){
var expected__11375__auto___20436 = (9);
var actual__11376__auto___20437 = cljs.core.count.call(null,cljs.core.vec.call(null,c3kit.wire.js.query_selector_all.call(null,".board-square")));
if(cljs.core._EQ_.call(null,expected__11375__auto___20436,actual__11376__auto___20437)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__11375__auto___20436;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11343__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11343__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__11376__auto___20437;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11343__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11343__auto__);
}
})()," (using =)"].join('')));
}

var value__11738__auto___20438 = "#board-wrapper";
var node__11739__auto___20439 = c3kit.wire.spec_helper.select.call(null,value__11738__auto___20438);
if(cljs.core.truth_(node__11739__auto___20439)){
} else {
throw (new speclj.platform.SpecFailure(["Expected selector to find node: ",(function (){var temp__5806__auto__ = value__11738__auto___20438;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11343__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11343__auto__);
}
})()].join('')));
}

var value__11738__auto__ = ".three-grid";
var node__11739__auto__ = c3kit.wire.spec_helper.select.call(null,value__11738__auto__);
if(cljs.core.truth_(node__11739__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected selector to find node: ",(function (){var temp__5806__auto__ = value__11738__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11343__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11343__auto__);
}
})()].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__20055_20430,_STAR_parent_description_STAR__temp_val__20056_20431,description__11238__auto____$1,_STAR_parent_description_STAR__orig_val__19701_20376,_STAR_parent_description_STAR__temp_val__19702_20377,description__11238__auto___20375))
,false),speclj.components.new_characteristic.call(null,"buttons have IDs 0-8",((function (_STAR_parent_description_STAR__orig_val__20055_20430,_STAR_parent_description_STAR__temp_val__20056_20431,description__11238__auto____$1,_STAR_parent_description_STAR__orig_val__19701_20376,_STAR_parent_description_STAR__temp_val__19702_20377,description__11238__auto___20375){
return (function (){
var seq__20145 = cljs.core.seq.call(null,cljs.core.range.call(null,(9)));
var chunk__20146 = null;
var count__20147 = (0);
var i__20148 = (0);
while(true){
if((i__20148 < count__20147)){
var n = cljs.core._nth.call(null,chunk__20146,i__20148);
var value__11738__auto___20440 = ["#index-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join('');
var node__11739__auto___20441 = c3kit.wire.spec_helper.select.call(null,value__11738__auto___20440);
if(cljs.core.truth_(node__11739__auto___20441)){
} else {
throw (new speclj.platform.SpecFailure(["Expected selector to find node: ",(function (){var temp__5806__auto__ = value__11738__auto___20440;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11343__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11343__auto__);
}
})()].join('')));
}


var G__20442 = seq__20145;
var G__20443 = chunk__20146;
var G__20444 = count__20147;
var G__20445 = (i__20148 + (1));
seq__20145 = G__20442;
chunk__20146 = G__20443;
count__20147 = G__20444;
i__20148 = G__20445;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__20145);
if(temp__5804__auto__){
var seq__20145__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20145__$1)){
var c__5525__auto__ = cljs.core.chunk_first.call(null,seq__20145__$1);
var G__20446 = cljs.core.chunk_rest.call(null,seq__20145__$1);
var G__20447 = c__5525__auto__;
var G__20448 = cljs.core.count.call(null,c__5525__auto__);
var G__20449 = (0);
seq__20145 = G__20446;
chunk__20146 = G__20447;
count__20147 = G__20448;
i__20148 = G__20449;
continue;
} else {
var n = cljs.core.first.call(null,seq__20145__$1);
var value__11738__auto___20450 = ["#index-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join('');
var node__11739__auto___20451 = c3kit.wire.spec_helper.select.call(null,value__11738__auto___20450);
if(cljs.core.truth_(node__11739__auto___20451)){
} else {
throw (new speclj.platform.SpecFailure(["Expected selector to find node: ",(function (){var temp__5806__auto__ = value__11738__auto___20450;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11343__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11343__auto__);
}
})()].join('')));
}


var G__20452 = cljs.core.next.call(null,seq__20145__$1);
var G__20453 = null;
var G__20454 = (0);
var G__20455 = (0);
seq__20145 = G__20452;
chunk__20146 = G__20453;
count__20147 = G__20454;
i__20148 = G__20455;
continue;
}
} else {
return null;
}
}
break;
}
});})(_STAR_parent_description_STAR__orig_val__20055_20430,_STAR_parent_description_STAR__temp_val__20056_20431,description__11238__auto____$1,_STAR_parent_description_STAR__orig_val__19701_20376,_STAR_parent_description_STAR__temp_val__19702_20377,description__11238__auto___20375))
,false),speclj.components.new_characteristic.call(null,"clicking button updates board in state",((function (_STAR_parent_description_STAR__orig_val__20055_20430,_STAR_parent_description_STAR__temp_val__20056_20431,description__11238__auto____$1,_STAR_parent_description_STAR__orig_val__19701_20376,_STAR_parent_description_STAR__temp_val__19702_20377,description__11238__auto___20375){
return (function (){
var seq__20149 = cljs.core.seq.call(null,cljs.core.range.call(null,(9)));
var chunk__20150 = null;
var count__20151 = (0);
var i__20152 = (0);
while(true){
if((i__20152 < count__20151)){
var n = cljs.core._nth.call(null,chunk__20150,i__20152);
c3kit.wire.spec_helper.click_BANG_.call(null,["#index-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join(''));

var expected__11375__auto___20456 = cljs.core.assoc.call(null,tic_tac_toe.screens.play_spec.board_3,n,new cljs.core.Keyword(null,"x","x",2099068185));
var actual__11376__auto___20457 = new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.screens.play_spec.state));
if(cljs.core._EQ_.call(null,expected__11375__auto___20456,actual__11376__auto___20457)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__11375__auto___20456;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11343__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11343__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__11376__auto___20457;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11343__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11343__auto__);
}
})()," (using =)"].join('')));
}

cljs.core.swap_BANG_.call(null,tic_tac_toe.screens.play_spec.state,cljs.core.assoc,new cljs.core.Keyword(null,"board","board",-1907017633),tic_tac_toe.screens.play_spec.board_3,new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"x","x",2099068185));


var G__20458 = seq__20149;
var G__20459 = chunk__20150;
var G__20460 = count__20151;
var G__20461 = (i__20152 + (1));
seq__20149 = G__20458;
chunk__20150 = G__20459;
count__20151 = G__20460;
i__20152 = G__20461;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__20149);
if(temp__5804__auto__){
var seq__20149__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20149__$1)){
var c__5525__auto__ = cljs.core.chunk_first.call(null,seq__20149__$1);
var G__20462 = cljs.core.chunk_rest.call(null,seq__20149__$1);
var G__20463 = c__5525__auto__;
var G__20464 = cljs.core.count.call(null,c__5525__auto__);
var G__20465 = (0);
seq__20149 = G__20462;
chunk__20150 = G__20463;
count__20151 = G__20464;
i__20152 = G__20465;
continue;
} else {
var n = cljs.core.first.call(null,seq__20149__$1);
c3kit.wire.spec_helper.click_BANG_.call(null,["#index-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join(''));

var expected__11375__auto___20466 = cljs.core.assoc.call(null,tic_tac_toe.screens.play_spec.board_3,n,new cljs.core.Keyword(null,"x","x",2099068185));
var actual__11376__auto___20467 = new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.screens.play_spec.state));
if(cljs.core._EQ_.call(null,expected__11375__auto___20466,actual__11376__auto___20467)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__11375__auto___20466;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11343__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11343__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__11376__auto___20467;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11343__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11343__auto__);
}
})()," (using =)"].join('')));
}

cljs.core.swap_BANG_.call(null,tic_tac_toe.screens.play_spec.state,cljs.core.assoc,new cljs.core.Keyword(null,"board","board",-1907017633),tic_tac_toe.screens.play_spec.board_3,new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"x","x",2099068185));


var G__20468 = cljs.core.next.call(null,seq__20149__$1);
var G__20469 = null;
var G__20470 = (0);
var G__20471 = (0);
seq__20149 = G__20468;
chunk__20150 = G__20469;
count__20151 = G__20470;
i__20152 = G__20471;
continue;
}
} else {
return null;
}
}
break;
}
});})(_STAR_parent_description_STAR__orig_val__20055_20430,_STAR_parent_description_STAR__temp_val__20056_20431,description__11238__auto____$1,_STAR_parent_description_STAR__orig_val__19701_20376,_STAR_parent_description_STAR__temp_val__19702_20377,description__11238__auto___20375))
,false),speclj.components.new_characteristic.call(null,"clicking button swaps player in state",((function (_STAR_parent_description_STAR__orig_val__20055_20430,_STAR_parent_description_STAR__temp_val__20056_20431,description__11238__auto____$1,_STAR_parent_description_STAR__orig_val__19701_20376,_STAR_parent_description_STAR__temp_val__19702_20377,description__11238__auto___20375){
return (function (){
var seq__20153 = cljs.core.seq.call(null,cljs.core.range.call(null,(9)));
var chunk__20154 = null;
var count__20155 = (0);
var i__20156 = (0);
while(true){
if((i__20156 < count__20155)){
var n = cljs.core._nth.call(null,chunk__20154,i__20156);
c3kit.wire.spec_helper.click_BANG_.call(null,["#index-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join(''));

var expected__11375__auto___20472 = new cljs.core.Keyword(null,"o","o",-1350007228);
var actual__11376__auto___20473 = new cljs.core.Keyword(null,"player","player",-97687400).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.screens.play_spec.state));
if(cljs.core._EQ_.call(null,expected__11375__auto___20472,actual__11376__auto___20473)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__11375__auto___20472;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11343__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11343__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__11376__auto___20473;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11343__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11343__auto__);
}
})()," (using =)"].join('')));
}

cljs.core.swap_BANG_.call(null,tic_tac_toe.screens.play_spec.state,cljs.core.assoc,new cljs.core.Keyword(null,"board","board",-1907017633),tic_tac_toe.screens.play_spec.board_3,new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"x","x",2099068185));


var G__20474 = seq__20153;
var G__20475 = chunk__20154;
var G__20476 = count__20155;
var G__20477 = (i__20156 + (1));
seq__20153 = G__20474;
chunk__20154 = G__20475;
count__20155 = G__20476;
i__20156 = G__20477;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__20153);
if(temp__5804__auto__){
var seq__20153__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20153__$1)){
var c__5525__auto__ = cljs.core.chunk_first.call(null,seq__20153__$1);
var G__20478 = cljs.core.chunk_rest.call(null,seq__20153__$1);
var G__20479 = c__5525__auto__;
var G__20480 = cljs.core.count.call(null,c__5525__auto__);
var G__20481 = (0);
seq__20153 = G__20478;
chunk__20154 = G__20479;
count__20155 = G__20480;
i__20156 = G__20481;
continue;
} else {
var n = cljs.core.first.call(null,seq__20153__$1);
c3kit.wire.spec_helper.click_BANG_.call(null,["#index-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join(''));

var expected__11375__auto___20482 = new cljs.core.Keyword(null,"o","o",-1350007228);
var actual__11376__auto___20483 = new cljs.core.Keyword(null,"player","player",-97687400).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.screens.play_spec.state));
if(cljs.core._EQ_.call(null,expected__11375__auto___20482,actual__11376__auto___20483)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__11375__auto___20482;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11343__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11343__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__11376__auto___20483;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11343__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11343__auto__);
}
})()," (using =)"].join('')));
}

cljs.core.swap_BANG_.call(null,tic_tac_toe.screens.play_spec.state,cljs.core.assoc,new cljs.core.Keyword(null,"board","board",-1907017633),tic_tac_toe.screens.play_spec.board_3,new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"x","x",2099068185));


var G__20484 = cljs.core.next.call(null,seq__20153__$1);
var G__20485 = null;
var G__20486 = (0);
var G__20487 = (0);
seq__20153 = G__20484;
chunk__20154 = G__20485;
count__20155 = G__20486;
i__20156 = G__20487;
continue;
}
} else {
return null;
}
}
break;
}
});})(_STAR_parent_description_STAR__orig_val__20055_20430,_STAR_parent_description_STAR__temp_val__20056_20431,description__11238__auto____$1,_STAR_parent_description_STAR__orig_val__19701_20376,_STAR_parent_description_STAR__temp_val__19702_20377,description__11238__auto___20375))
,false),speclj.components.new_characteristic.call(null,"clicking button toggles human? to false if mode 2 or 3",((function (_STAR_parent_description_STAR__orig_val__20055_20430,_STAR_parent_description_STAR__temp_val__20056_20431,description__11238__auto____$1,_STAR_parent_description_STAR__orig_val__19701_20376,_STAR_parent_description_STAR__temp_val__19702_20377,description__11238__auto___20375){
return (function (){
var ai_turn_orig_val__20157 = tic_tac_toe.screens.play.ai_turn;
var ai_turn_temp_val__20158 = speclj.stub.stub.call(null,new cljs.core.Keyword(null,"ai-turn","ai-turn",-1581895352),cljs.core.PersistentArrayMap.EMPTY);
(tic_tac_toe.screens.play.ai_turn = ai_turn_temp_val__20158);

try{var seq__20159 = cljs.core.seq.call(null,cljs.core.range.call(null,(9)));
var chunk__20164 = null;
var count__20165 = (0);
var i__20166 = (0);
while(true){
if((i__20166 < count__20165)){
var n = cljs.core._nth.call(null,chunk__20164,i__20166);
var seq__20167_20488 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(3)], null));
var chunk__20168_20489 = null;
var count__20169_20490 = (0);
var i__20170_20491 = (0);
while(true){
if((i__20170_20491 < count__20169_20490)){
var mode_20492 = cljs.core._nth.call(null,chunk__20168_20489,i__20170_20491);
cljs.core.swap_BANG_.call(null,tic_tac_toe.screens.play_spec.state,cljs.core.assoc,new cljs.core.Keyword(null,"mode","mode",654403691),mode_20492);

c3kit.wire.spec_helper.render.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tic_tac_toe.render_screen.render_screen,tic_tac_toe.screens.play_spec.state], null));

c3kit.wire.spec_helper.click_BANG_.call(null,["#index-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join(''));

var expected__11375__auto___20493 = false;
var actual__11376__auto___20494 = new cljs.core.Keyword(null,"human?","human?",-2017219054).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.screens.play_spec.state));
if(cljs.core._EQ_.call(null,expected__11375__auto___20493,actual__11376__auto___20494)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__11375__auto___20493;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11343__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11343__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__11376__auto___20494;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11343__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11343__auto__);
}
})()," (using =)"].join('')));
}

cljs.core.swap_BANG_.call(null,tic_tac_toe.screens.play_spec.state,cljs.core.assoc,new cljs.core.Keyword(null,"board","board",-1907017633),tic_tac_toe.screens.play_spec.board_3,new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"x","x",2099068185));


var G__20495 = seq__20167_20488;
var G__20496 = chunk__20168_20489;
var G__20497 = count__20169_20490;
var G__20498 = (i__20170_20491 + (1));
seq__20167_20488 = G__20495;
chunk__20168_20489 = G__20496;
count__20169_20490 = G__20497;
i__20170_20491 = G__20498;
continue;
} else {
var temp__5804__auto___20499 = cljs.core.seq.call(null,seq__20167_20488);
if(temp__5804__auto___20499){
var seq__20167_20500__$1 = temp__5804__auto___20499;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20167_20500__$1)){
var c__5525__auto___20501 = cljs.core.chunk_first.call(null,seq__20167_20500__$1);
var G__20502 = cljs.core.chunk_rest.call(null,seq__20167_20500__$1);
var G__20503 = c__5525__auto___20501;
var G__20504 = cljs.core.count.call(null,c__5525__auto___20501);
var G__20505 = (0);
seq__20167_20488 = G__20502;
chunk__20168_20489 = G__20503;
count__20169_20490 = G__20504;
i__20170_20491 = G__20505;
continue;
} else {
var mode_20506 = cljs.core.first.call(null,seq__20167_20500__$1);
cljs.core.swap_BANG_.call(null,tic_tac_toe.screens.play_spec.state,cljs.core.assoc,new cljs.core.Keyword(null,"mode","mode",654403691),mode_20506);

c3kit.wire.spec_helper.render.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tic_tac_toe.render_screen.render_screen,tic_tac_toe.screens.play_spec.state], null));

c3kit.wire.spec_helper.click_BANG_.call(null,["#index-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join(''));

var expected__11375__auto___20507 = false;
var actual__11376__auto___20508 = new cljs.core.Keyword(null,"human?","human?",-2017219054).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.screens.play_spec.state));
if(cljs.core._EQ_.call(null,expected__11375__auto___20507,actual__11376__auto___20508)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__11375__auto___20507;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11343__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11343__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__11376__auto___20508;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11343__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11343__auto__);
}
})()," (using =)"].join('')));
}

cljs.core.swap_BANG_.call(null,tic_tac_toe.screens.play_spec.state,cljs.core.assoc,new cljs.core.Keyword(null,"board","board",-1907017633),tic_tac_toe.screens.play_spec.board_3,new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"x","x",2099068185));


var G__20509 = cljs.core.next.call(null,seq__20167_20500__$1);
var G__20510 = null;
var G__20511 = (0);
var G__20512 = (0);
seq__20167_20488 = G__20509;
chunk__20168_20489 = G__20510;
count__20169_20490 = G__20511;
i__20170_20491 = G__20512;
continue;
}
} else {
}
}
break;
}

var G__20513 = seq__20159;
var G__20514 = chunk__20164;
var G__20515 = count__20165;
var G__20516 = (i__20166 + (1));
seq__20159 = G__20513;
chunk__20164 = G__20514;
count__20165 = G__20515;
i__20166 = G__20516;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__20159);
if(temp__5804__auto__){
var seq__20159__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20159__$1)){
var c__5525__auto__ = cljs.core.chunk_first.call(null,seq__20159__$1);
var G__20517 = cljs.core.chunk_rest.call(null,seq__20159__$1);
var G__20518 = c__5525__auto__;
var G__20519 = cljs.core.count.call(null,c__5525__auto__);
var G__20520 = (0);
seq__20159 = G__20517;
chunk__20164 = G__20518;
count__20165 = G__20519;
i__20166 = G__20520;
continue;
} else {
var n = cljs.core.first.call(null,seq__20159__$1);
var seq__20160_20521 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(3)], null));
var chunk__20161_20522 = null;
var count__20162_20523 = (0);
var i__20163_20524 = (0);
while(true){
if((i__20163_20524 < count__20162_20523)){
var mode_20525 = cljs.core._nth.call(null,chunk__20161_20522,i__20163_20524);
cljs.core.swap_BANG_.call(null,tic_tac_toe.screens.play_spec.state,cljs.core.assoc,new cljs.core.Keyword(null,"mode","mode",654403691),mode_20525);

c3kit.wire.spec_helper.render.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tic_tac_toe.render_screen.render_screen,tic_tac_toe.screens.play_spec.state], null));

c3kit.wire.spec_helper.click_BANG_.call(null,["#index-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join(''));

var expected__11375__auto___20526 = false;
var actual__11376__auto___20527 = new cljs.core.Keyword(null,"human?","human?",-2017219054).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.screens.play_spec.state));
if(cljs.core._EQ_.call(null,expected__11375__auto___20526,actual__11376__auto___20527)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__11375__auto___20526;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11343__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11343__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__11376__auto___20527;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11343__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11343__auto__);
}
})()," (using =)"].join('')));
}

cljs.core.swap_BANG_.call(null,tic_tac_toe.screens.play_spec.state,cljs.core.assoc,new cljs.core.Keyword(null,"board","board",-1907017633),tic_tac_toe.screens.play_spec.board_3,new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"x","x",2099068185));


var G__20528 = seq__20160_20521;
var G__20529 = chunk__20161_20522;
var G__20530 = count__20162_20523;
var G__20531 = (i__20163_20524 + (1));
seq__20160_20521 = G__20528;
chunk__20161_20522 = G__20529;
count__20162_20523 = G__20530;
i__20163_20524 = G__20531;
continue;
} else {
var temp__5804__auto___20532__$1 = cljs.core.seq.call(null,seq__20160_20521);
if(temp__5804__auto___20532__$1){
var seq__20160_20533__$1 = temp__5804__auto___20532__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20160_20533__$1)){
var c__5525__auto___20534 = cljs.core.chunk_first.call(null,seq__20160_20533__$1);
var G__20535 = cljs.core.chunk_rest.call(null,seq__20160_20533__$1);
var G__20536 = c__5525__auto___20534;
var G__20537 = cljs.core.count.call(null,c__5525__auto___20534);
var G__20538 = (0);
seq__20160_20521 = G__20535;
chunk__20161_20522 = G__20536;
count__20162_20523 = G__20537;
i__20163_20524 = G__20538;
continue;
} else {
var mode_20539 = cljs.core.first.call(null,seq__20160_20533__$1);
cljs.core.swap_BANG_.call(null,tic_tac_toe.screens.play_spec.state,cljs.core.assoc,new cljs.core.Keyword(null,"mode","mode",654403691),mode_20539);

c3kit.wire.spec_helper.render.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tic_tac_toe.render_screen.render_screen,tic_tac_toe.screens.play_spec.state], null));

c3kit.wire.spec_helper.click_BANG_.call(null,["#index-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join(''));

var expected__11375__auto___20540 = false;
var actual__11376__auto___20541 = new cljs.core.Keyword(null,"human?","human?",-2017219054).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.screens.play_spec.state));
if(cljs.core._EQ_.call(null,expected__11375__auto___20540,actual__11376__auto___20541)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__11375__auto___20540;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11343__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11343__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__11376__auto___20541;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11343__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11343__auto__);
}
})()," (using =)"].join('')));
}

cljs.core.swap_BANG_.call(null,tic_tac_toe.screens.play_spec.state,cljs.core.assoc,new cljs.core.Keyword(null,"board","board",-1907017633),tic_tac_toe.screens.play_spec.board_3,new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"x","x",2099068185));


var G__20542 = cljs.core.next.call(null,seq__20160_20533__$1);
var G__20543 = null;
var G__20544 = (0);
var G__20545 = (0);
seq__20160_20521 = G__20542;
chunk__20161_20522 = G__20543;
count__20162_20523 = G__20544;
i__20163_20524 = G__20545;
continue;
}
} else {
}
}
break;
}

var G__20546 = cljs.core.next.call(null,seq__20159__$1);
var G__20547 = null;
var G__20548 = (0);
var G__20549 = (0);
seq__20159 = G__20546;
chunk__20164 = G__20547;
count__20165 = G__20548;
i__20166 = G__20549;
continue;
}
} else {
return null;
}
}
break;
}
}finally {(tic_tac_toe.screens.play.ai_turn = ai_turn_orig_val__20157);
}});})(_STAR_parent_description_STAR__orig_val__20055_20430,_STAR_parent_description_STAR__temp_val__20056_20431,description__11238__auto____$1,_STAR_parent_description_STAR__orig_val__19701_20376,_STAR_parent_description_STAR__temp_val__19702_20377,description__11238__auto___20375))
,false),speclj.components.new_characteristic.call(null,"clicking button does not toggle human if mode 1",((function (_STAR_parent_description_STAR__orig_val__20055_20430,_STAR_parent_description_STAR__temp_val__20056_20431,description__11238__auto____$1,_STAR_parent_description_STAR__orig_val__19701_20376,_STAR_parent_description_STAR__temp_val__19702_20377,description__11238__auto___20375){
return (function (){
var ai_turn_orig_val__20171 = tic_tac_toe.screens.play.ai_turn;
var ai_turn_temp_val__20172 = speclj.stub.stub.call(null,new cljs.core.Keyword(null,"ai-turn","ai-turn",-1581895352),cljs.core.PersistentArrayMap.EMPTY);
(tic_tac_toe.screens.play.ai_turn = ai_turn_temp_val__20172);

try{var seq__20173 = cljs.core.seq.call(null,cljs.core.range.call(null,(9)));
var chunk__20174 = null;
var count__20175 = (0);
var i__20176 = (0);
while(true){
if((i__20176 < count__20175)){
var n = cljs.core._nth.call(null,chunk__20174,i__20176);
c3kit.wire.spec_helper.click_BANG_.call(null,["#index-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join(''));

var expected__11375__auto___20550 = true;
var actual__11376__auto___20551 = new cljs.core.Keyword(null,"human?","human?",-2017219054).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.screens.play_spec.state));
if(cljs.core._EQ_.call(null,expected__11375__auto___20550,actual__11376__auto___20551)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__11375__auto___20550;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11343__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11343__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__11376__auto___20551;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11343__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11343__auto__);
}
})()," (using =)"].join('')));
}

cljs.core.swap_BANG_.call(null,tic_tac_toe.screens.play_spec.state,cljs.core.assoc,new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"board","board",-1907017633),tic_tac_toe.screens.play_spec.board_4);


var G__20552 = seq__20173;
var G__20553 = chunk__20174;
var G__20554 = count__20175;
var G__20555 = (i__20176 + (1));
seq__20173 = G__20552;
chunk__20174 = G__20553;
count__20175 = G__20554;
i__20176 = G__20555;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__20173);
if(temp__5804__auto__){
var seq__20173__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20173__$1)){
var c__5525__auto__ = cljs.core.chunk_first.call(null,seq__20173__$1);
var G__20556 = cljs.core.chunk_rest.call(null,seq__20173__$1);
var G__20557 = c__5525__auto__;
var G__20558 = cljs.core.count.call(null,c__5525__auto__);
var G__20559 = (0);
seq__20173 = G__20556;
chunk__20174 = G__20557;
count__20175 = G__20558;
i__20176 = G__20559;
continue;
} else {
var n = cljs.core.first.call(null,seq__20173__$1);
c3kit.wire.spec_helper.click_BANG_.call(null,["#index-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join(''));

var expected__11375__auto___20560 = true;
var actual__11376__auto___20561 = new cljs.core.Keyword(null,"human?","human?",-2017219054).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.screens.play_spec.state));
if(cljs.core._EQ_.call(null,expected__11375__auto___20560,actual__11376__auto___20561)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__11375__auto___20560;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11343__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11343__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__11376__auto___20561;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11343__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11343__auto__);
}
})()," (using =)"].join('')));
}

cljs.core.swap_BANG_.call(null,tic_tac_toe.screens.play_spec.state,cljs.core.assoc,new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"board","board",-1907017633),tic_tac_toe.screens.play_spec.board_4);


var G__20562 = cljs.core.next.call(null,seq__20173__$1);
var G__20563 = null;
var G__20564 = (0);
var G__20565 = (0);
seq__20173 = G__20562;
chunk__20174 = G__20563;
count__20175 = G__20564;
i__20176 = G__20565;
continue;
}
} else {
return null;
}
}
break;
}
}finally {(tic_tac_toe.screens.play.ai_turn = ai_turn_orig_val__20171);
}});})(_STAR_parent_description_STAR__orig_val__20055_20430,_STAR_parent_description_STAR__temp_val__20056_20431,description__11238__auto____$1,_STAR_parent_description_STAR__orig_val__19701_20376,_STAR_parent_description_STAR__temp_val__19702_20377,description__11238__auto___20375))
,false),speclj.components.new_characteristic.call(null,"clicking button updates game-state in state",((function (_STAR_parent_description_STAR__orig_val__20055_20430,_STAR_parent_description_STAR__temp_val__20056_20431,description__11238__auto____$1,_STAR_parent_description_STAR__orig_val__19701_20376,_STAR_parent_description_STAR__temp_val__19702_20377,description__11238__auto___20375){
return (function (){
cljs.core.swap_BANG_.call(null,tic_tac_toe.screens.play_spec.state,cljs.core.assoc,new cljs.core.Keyword(null,"board","board",-1907017633),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"o","o",-1350007228),new cljs.core.Keyword(null,"o","o",-1350007228),(6),(7),(8),(9)], null));

c3kit.wire.spec_helper.click_BANG_.call(null,"#index-0");

var expected__11375__auto__ = "X wins!";
var actual__11376__auto__ = new cljs.core.Keyword(null,"game-state","game-state",935682735).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.screens.play_spec.state));
if(cljs.core._EQ_.call(null,expected__11375__auto__,actual__11376__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__11375__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11343__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11343__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__11376__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11343__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11343__auto__);
}
})()," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__20055_20430,_STAR_parent_description_STAR__temp_val__20056_20431,description__11238__auto____$1,_STAR_parent_description_STAR__orig_val__19701_20376,_STAR_parent_description_STAR__temp_val__19702_20377,description__11238__auto___20375))
,false),speclj.components.new_characteristic.call(null,"clicking button adds token to button HTML",((function (_STAR_parent_description_STAR__orig_val__20055_20430,_STAR_parent_description_STAR__temp_val__20056_20431,description__11238__auto____$1,_STAR_parent_description_STAR__orig_val__19701_20376,_STAR_parent_description_STAR__temp_val__19702_20377,description__11238__auto___20375){
return (function (){
var seq__20177 = cljs.core.seq.call(null,cljs.core.range.call(null,(9)));
var chunk__20178 = null;
var count__20179 = (0);
var i__20180 = (0);
while(true){
if((i__20180 < count__20179)){
var n = cljs.core._nth.call(null,chunk__20178,i__20180);
c3kit.wire.spec_helper.click_BANG_.call(null,["#index-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join(''));

var expected__11375__auto___20566 = "X";
var actual__11376__auto___20567 = c3kit.wire.spec_helper.text.call(null,["#index-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join(''));
if(cljs.core._EQ_.call(null,expected__11375__auto___20566,actual__11376__auto___20567)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__11375__auto___20566;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11343__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11343__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__11376__auto___20567;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11343__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11343__auto__);
}
})()," (using =)"].join('')));
}

cljs.core.reset_BANG_.call(null,tic_tac_toe.screens.play_spec.state,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"board","board",-1907017633),tic_tac_toe.screens.play_spec.board_3,new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"current-screen","current-screen",-1454713691),new cljs.core.Keyword(null,"play","play",-580418022),new cljs.core.Keyword(null,"mode","mode",654403691),(1)], null));


var G__20568 = seq__20177;
var G__20569 = chunk__20178;
var G__20570 = count__20179;
var G__20571 = (i__20180 + (1));
seq__20177 = G__20568;
chunk__20178 = G__20569;
count__20179 = G__20570;
i__20180 = G__20571;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__20177);
if(temp__5804__auto__){
var seq__20177__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20177__$1)){
var c__5525__auto__ = cljs.core.chunk_first.call(null,seq__20177__$1);
var G__20572 = cljs.core.chunk_rest.call(null,seq__20177__$1);
var G__20573 = c__5525__auto__;
var G__20574 = cljs.core.count.call(null,c__5525__auto__);
var G__20575 = (0);
seq__20177 = G__20572;
chunk__20178 = G__20573;
count__20179 = G__20574;
i__20180 = G__20575;
continue;
} else {
var n = cljs.core.first.call(null,seq__20177__$1);
c3kit.wire.spec_helper.click_BANG_.call(null,["#index-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join(''));

var expected__11375__auto___20576 = "X";
var actual__11376__auto___20577 = c3kit.wire.spec_helper.text.call(null,["#index-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join(''));
if(cljs.core._EQ_.call(null,expected__11375__auto___20576,actual__11376__auto___20577)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__11375__auto___20576;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11343__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11343__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__11376__auto___20577;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11343__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11343__auto__);
}
})()," (using =)"].join('')));
}

cljs.core.reset_BANG_.call(null,tic_tac_toe.screens.play_spec.state,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"board","board",-1907017633),tic_tac_toe.screens.play_spec.board_3,new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"current-screen","current-screen",-1454713691),new cljs.core.Keyword(null,"play","play",-580418022),new cljs.core.Keyword(null,"mode","mode",654403691),(1)], null));


var G__20578 = cljs.core.next.call(null,seq__20177__$1);
var G__20579 = null;
var G__20580 = (0);
var G__20581 = (0);
seq__20177 = G__20578;
chunk__20178 = G__20579;
count__20179 = G__20580;
i__20180 = G__20581;
continue;
}
} else {
return null;
}
}
break;
}
});})(_STAR_parent_description_STAR__orig_val__20055_20430,_STAR_parent_description_STAR__temp_val__20056_20431,description__11238__auto____$1,_STAR_parent_description_STAR__orig_val__19701_20376,_STAR_parent_description_STAR__temp_val__19702_20377,description__11238__auto___20375))
,false),speclj.components.new_characteristic.call(null,"clicking button disables button",((function (_STAR_parent_description_STAR__orig_val__20055_20430,_STAR_parent_description_STAR__temp_val__20056_20431,description__11238__auto____$1,_STAR_parent_description_STAR__orig_val__19701_20376,_STAR_parent_description_STAR__temp_val__19702_20377,description__11238__auto___20375){
return (function (){
var seq__20181 = cljs.core.seq.call(null,cljs.core.range.call(null,(9)));
var chunk__20182 = null;
var count__20183 = (0);
var i__20184 = (0);
while(true){
if((i__20184 < count__20183)){
var n = cljs.core._nth.call(null,chunk__20182,i__20184);
c3kit.wire.spec_helper.click_BANG_.call(null,["#index-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join(''));

var expected__11375__auto___20582 = true;
var actual__11376__auto___20583 = c3kit.wire.spec_helper.disabled_QMARK_.call(null,["#index-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join(''));
if(cljs.core._EQ_.call(null,expected__11375__auto___20582,actual__11376__auto___20583)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__11375__auto___20582;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11343__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11343__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__11376__auto___20583;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11343__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11343__auto__);
}
})()," (using =)"].join('')));
}

cljs.core.reset_BANG_.call(null,tic_tac_toe.screens.play_spec.state,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"board","board",-1907017633),tic_tac_toe.screens.play_spec.board_3,new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"current-screen","current-screen",-1454713691),new cljs.core.Keyword(null,"play","play",-580418022),new cljs.core.Keyword(null,"mode","mode",654403691),(1)], null));


var G__20584 = seq__20181;
var G__20585 = chunk__20182;
var G__20586 = count__20183;
var G__20587 = (i__20184 + (1));
seq__20181 = G__20584;
chunk__20182 = G__20585;
count__20183 = G__20586;
i__20184 = G__20587;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__20181);
if(temp__5804__auto__){
var seq__20181__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20181__$1)){
var c__5525__auto__ = cljs.core.chunk_first.call(null,seq__20181__$1);
var G__20588 = cljs.core.chunk_rest.call(null,seq__20181__$1);
var G__20589 = c__5525__auto__;
var G__20590 = cljs.core.count.call(null,c__5525__auto__);
var G__20591 = (0);
seq__20181 = G__20588;
chunk__20182 = G__20589;
count__20183 = G__20590;
i__20184 = G__20591;
continue;
} else {
var n = cljs.core.first.call(null,seq__20181__$1);
c3kit.wire.spec_helper.click_BANG_.call(null,["#index-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join(''));

var expected__11375__auto___20592 = true;
var actual__11376__auto___20593 = c3kit.wire.spec_helper.disabled_QMARK_.call(null,["#index-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join(''));
if(cljs.core._EQ_.call(null,expected__11375__auto___20592,actual__11376__auto___20593)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__11375__auto___20592;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11343__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11343__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__11376__auto___20593;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11343__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11343__auto__);
}
})()," (using =)"].join('')));
}

cljs.core.reset_BANG_.call(null,tic_tac_toe.screens.play_spec.state,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"board","board",-1907017633),tic_tac_toe.screens.play_spec.board_3,new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"current-screen","current-screen",-1454713691),new cljs.core.Keyword(null,"play","play",-580418022),new cljs.core.Keyword(null,"mode","mode",654403691),(1)], null));


var G__20594 = cljs.core.next.call(null,seq__20181__$1);
var G__20595 = null;
var G__20596 = (0);
var G__20597 = (0);
seq__20181 = G__20594;
chunk__20182 = G__20595;
count__20183 = G__20596;
i__20184 = G__20597;
continue;
}
} else {
return null;
}
}
break;
}
});})(_STAR_parent_description_STAR__orig_val__20055_20430,_STAR_parent_description_STAR__temp_val__20056_20431,description__11238__auto____$1,_STAR_parent_description_STAR__orig_val__19701_20376,_STAR_parent_description_STAR__temp_val__19702_20377,description__11238__auto___20375))
,false),speclj.components.new_characteristic.call(null,"all buttons disabled when game-over",((function (_STAR_parent_description_STAR__orig_val__20055_20430,_STAR_parent_description_STAR__temp_val__20056_20431,description__11238__auto____$1,_STAR_parent_description_STAR__orig_val__19701_20376,_STAR_parent_description_STAR__temp_val__19702_20377,description__11238__auto___20375){
return (function (){
var seq__20185 = cljs.core.seq.call(null,cljs.core.range.call(null,(9)));
var chunk__20190 = null;
var count__20191 = (0);
var i__20192 = (0);
while(true){
if((i__20192 < count__20191)){
var n = cljs.core._nth.call(null,chunk__20190,i__20192);
var seq__20193_20598 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["X wins!","O wins!","It is a tie!"], null));
var chunk__20194_20599 = null;
var count__20195_20600 = (0);
var i__20196_20601 = (0);
while(true){
if((i__20196_20601 < count__20195_20600)){
var states_20602 = cljs.core._nth.call(null,chunk__20194_20599,i__20196_20601);
cljs.core.swap_BANG_.call(null,tic_tac_toe.screens.play_spec.state,cljs.core.assoc,new cljs.core.Keyword(null,"game-state","game-state",935682735),states_20602);

c3kit.wire.spec_helper.render.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tic_tac_toe.render_screen.render_screen,tic_tac_toe.screens.play_spec.state], null));

var expected__11375__auto___20603 = true;
var actual__11376__auto___20604 = c3kit.wire.spec_helper.disabled_QMARK_.call(null,["#index-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join(''));
if(cljs.core._EQ_.call(null,expected__11375__auto___20603,actual__11376__auto___20604)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__11375__auto___20603;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11343__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11343__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__11376__auto___20604;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11343__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11343__auto__);
}
})()," (using =)"].join('')));
}

cljs.core.reset_BANG_.call(null,tic_tac_toe.screens.play_spec.state,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"board","board",-1907017633),tic_tac_toe.screens.play_spec.board_3,new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"current-screen","current-screen",-1454713691),new cljs.core.Keyword(null,"play","play",-580418022),new cljs.core.Keyword(null,"mode","mode",654403691),(1)], null));


var G__20605 = seq__20193_20598;
var G__20606 = chunk__20194_20599;
var G__20607 = count__20195_20600;
var G__20608 = (i__20196_20601 + (1));
seq__20193_20598 = G__20605;
chunk__20194_20599 = G__20606;
count__20195_20600 = G__20607;
i__20196_20601 = G__20608;
continue;
} else {
var temp__5804__auto___20609 = cljs.core.seq.call(null,seq__20193_20598);
if(temp__5804__auto___20609){
var seq__20193_20610__$1 = temp__5804__auto___20609;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20193_20610__$1)){
var c__5525__auto___20611 = cljs.core.chunk_first.call(null,seq__20193_20610__$1);
var G__20612 = cljs.core.chunk_rest.call(null,seq__20193_20610__$1);
var G__20613 = c__5525__auto___20611;
var G__20614 = cljs.core.count.call(null,c__5525__auto___20611);
var G__20615 = (0);
seq__20193_20598 = G__20612;
chunk__20194_20599 = G__20613;
count__20195_20600 = G__20614;
i__20196_20601 = G__20615;
continue;
} else {
var states_20616 = cljs.core.first.call(null,seq__20193_20610__$1);
cljs.core.swap_BANG_.call(null,tic_tac_toe.screens.play_spec.state,cljs.core.assoc,new cljs.core.Keyword(null,"game-state","game-state",935682735),states_20616);

c3kit.wire.spec_helper.render.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tic_tac_toe.render_screen.render_screen,tic_tac_toe.screens.play_spec.state], null));

var expected__11375__auto___20617 = true;
var actual__11376__auto___20618 = c3kit.wire.spec_helper.disabled_QMARK_.call(null,["#index-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join(''));
if(cljs.core._EQ_.call(null,expected__11375__auto___20617,actual__11376__auto___20618)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__11375__auto___20617;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11343__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11343__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__11376__auto___20618;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11343__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11343__auto__);
}
})()," (using =)"].join('')));
}

cljs.core.reset_BANG_.call(null,tic_tac_toe.screens.play_spec.state,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"board","board",-1907017633),tic_tac_toe.screens.play_spec.board_3,new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"current-screen","current-screen",-1454713691),new cljs.core.Keyword(null,"play","play",-580418022),new cljs.core.Keyword(null,"mode","mode",654403691),(1)], null));


var G__20619 = cljs.core.next.call(null,seq__20193_20610__$1);
var G__20620 = null;
var G__20621 = (0);
var G__20622 = (0);
seq__20193_20598 = G__20619;
chunk__20194_20599 = G__20620;
count__20195_20600 = G__20621;
i__20196_20601 = G__20622;
continue;
}
} else {
}
}
break;
}

var G__20623 = seq__20185;
var G__20624 = chunk__20190;
var G__20625 = count__20191;
var G__20626 = (i__20192 + (1));
seq__20185 = G__20623;
chunk__20190 = G__20624;
count__20191 = G__20625;
i__20192 = G__20626;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__20185);
if(temp__5804__auto__){
var seq__20185__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20185__$1)){
var c__5525__auto__ = cljs.core.chunk_first.call(null,seq__20185__$1);
var G__20627 = cljs.core.chunk_rest.call(null,seq__20185__$1);
var G__20628 = c__5525__auto__;
var G__20629 = cljs.core.count.call(null,c__5525__auto__);
var G__20630 = (0);
seq__20185 = G__20627;
chunk__20190 = G__20628;
count__20191 = G__20629;
i__20192 = G__20630;
continue;
} else {
var n = cljs.core.first.call(null,seq__20185__$1);
var seq__20186_20631 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["X wins!","O wins!","It is a tie!"], null));
var chunk__20187_20632 = null;
var count__20188_20633 = (0);
var i__20189_20634 = (0);
while(true){
if((i__20189_20634 < count__20188_20633)){
var states_20635 = cljs.core._nth.call(null,chunk__20187_20632,i__20189_20634);
cljs.core.swap_BANG_.call(null,tic_tac_toe.screens.play_spec.state,cljs.core.assoc,new cljs.core.Keyword(null,"game-state","game-state",935682735),states_20635);

c3kit.wire.spec_helper.render.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tic_tac_toe.render_screen.render_screen,tic_tac_toe.screens.play_spec.state], null));

var expected__11375__auto___20636 = true;
var actual__11376__auto___20637 = c3kit.wire.spec_helper.disabled_QMARK_.call(null,["#index-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join(''));
if(cljs.core._EQ_.call(null,expected__11375__auto___20636,actual__11376__auto___20637)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__11375__auto___20636;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11343__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11343__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__11376__auto___20637;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11343__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11343__auto__);
}
})()," (using =)"].join('')));
}

cljs.core.reset_BANG_.call(null,tic_tac_toe.screens.play_spec.state,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"board","board",-1907017633),tic_tac_toe.screens.play_spec.board_3,new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"current-screen","current-screen",-1454713691),new cljs.core.Keyword(null,"play","play",-580418022),new cljs.core.Keyword(null,"mode","mode",654403691),(1)], null));


var G__20638 = seq__20186_20631;
var G__20639 = chunk__20187_20632;
var G__20640 = count__20188_20633;
var G__20641 = (i__20189_20634 + (1));
seq__20186_20631 = G__20638;
chunk__20187_20632 = G__20639;
count__20188_20633 = G__20640;
i__20189_20634 = G__20641;
continue;
} else {
var temp__5804__auto___20642__$1 = cljs.core.seq.call(null,seq__20186_20631);
if(temp__5804__auto___20642__$1){
var seq__20186_20643__$1 = temp__5804__auto___20642__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20186_20643__$1)){
var c__5525__auto___20644 = cljs.core.chunk_first.call(null,seq__20186_20643__$1);
var G__20645 = cljs.core.chunk_rest.call(null,seq__20186_20643__$1);
var G__20646 = c__5525__auto___20644;
var G__20647 = cljs.core.count.call(null,c__5525__auto___20644);
var G__20648 = (0);
seq__20186_20631 = G__20645;
chunk__20187_20632 = G__20646;
count__20188_20633 = G__20647;
i__20189_20634 = G__20648;
continue;
} else {
var states_20649 = cljs.core.first.call(null,seq__20186_20643__$1);
cljs.core.swap_BANG_.call(null,tic_tac_toe.screens.play_spec.state,cljs.core.assoc,new cljs.core.Keyword(null,"game-state","game-state",935682735),states_20649);

c3kit.wire.spec_helper.render.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tic_tac_toe.render_screen.render_screen,tic_tac_toe.screens.play_spec.state], null));

var expected__11375__auto___20650 = true;
var actual__11376__auto___20651 = c3kit.wire.spec_helper.disabled_QMARK_.call(null,["#index-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join(''));
if(cljs.core._EQ_.call(null,expected__11375__auto___20650,actual__11376__auto___20651)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__11375__auto___20650;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11343__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11343__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__11376__auto___20651;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11343__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11343__auto__);
}
})()," (using =)"].join('')));
}

cljs.core.reset_BANG_.call(null,tic_tac_toe.screens.play_spec.state,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"board","board",-1907017633),tic_tac_toe.screens.play_spec.board_3,new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"current-screen","current-screen",-1454713691),new cljs.core.Keyword(null,"play","play",-580418022),new cljs.core.Keyword(null,"mode","mode",654403691),(1)], null));


var G__20652 = cljs.core.next.call(null,seq__20186_20643__$1);
var G__20653 = null;
var G__20654 = (0);
var G__20655 = (0);
seq__20186_20631 = G__20652;
chunk__20187_20632 = G__20653;
count__20188_20633 = G__20654;
i__20189_20634 = G__20655;
continue;
}
} else {
}
}
break;
}

var G__20656 = cljs.core.next.call(null,seq__20185__$1);
var G__20657 = null;
var G__20658 = (0);
var G__20659 = (0);
seq__20185 = G__20656;
chunk__20190 = G__20657;
count__20191 = G__20658;
i__20192 = G__20659;
continue;
}
} else {
return null;
}
}
break;
}
});})(_STAR_parent_description_STAR__orig_val__20055_20430,_STAR_parent_description_STAR__temp_val__20056_20431,description__11238__auto____$1,_STAR_parent_description_STAR__orig_val__19701_20376,_STAR_parent_description_STAR__temp_val__19702_20377,description__11238__auto___20375))
,false),speclj.components.new_characteristic.call(null,"clicking button triggers AI if mode 2 or 3",((function (_STAR_parent_description_STAR__orig_val__20055_20430,_STAR_parent_description_STAR__temp_val__20056_20431,description__11238__auto____$1,_STAR_parent_description_STAR__orig_val__19701_20376,_STAR_parent_description_STAR__temp_val__19702_20377,description__11238__auto___20375){
return (function (){
var take_turn_orig_val__20197 = tic_tac_toe.player.take_turn;
var take_turn_temp_val__20198 = speclj.stub.stub.call(null,new cljs.core.Keyword(null,"turn","turn",75759344),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"return","return",-1891502105),tic_tac_toe.screens.play_spec.board_3], null));
(tic_tac_toe.player.take_turn = take_turn_temp_val__20198);

try{var seq__20199 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(3)], null));
var chunk__20212 = null;
var count__20213 = (0);
var i__20214 = (0);
while(true){
if((i__20214 < count__20213)){
var ai = cljs.core._nth.call(null,chunk__20212,i__20214);
var seq__20215_20660 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(3)], null));
var chunk__20220_20661 = null;
var count__20221_20662 = (0);
var i__20222_20663 = (0);
while(true){
if((i__20222_20663 < count__20221_20662)){
var mode_20664 = cljs.core._nth.call(null,chunk__20220_20661,i__20222_20663);
var seq__20223_20665 = cljs.core.seq.call(null,cljs.core.range.call(null,(9)));
var chunk__20224_20666 = null;
var count__20225_20667 = (0);
var i__20226_20668 = (0);
while(true){
if((i__20226_20668 < count__20225_20667)){
var n_20669 = cljs.core._nth.call(null,chunk__20224_20666,i__20226_20668);
cljs.core.swap_BANG_.call(null,tic_tac_toe.screens.play_spec.state,cljs.core.assoc,new cljs.core.Keyword(null,"mode","mode",654403691),mode_20664,new cljs.core.Keyword(null,"first-ai-level","first-ai-level",1004633644),ai,new cljs.core.Keyword(null,"player","player",-97687400),((cljs.core._EQ_.call(null,(2),mode_20664))?new cljs.core.Keyword(null,"x","x",2099068185):new cljs.core.Keyword(null,"o","o",-1350007228)),new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"gui","gui",604532813));

c3kit.wire.spec_helper.render.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tic_tac_toe.render_screen.render_screen,tic_tac_toe.screens.play_spec.state], null));

c3kit.wire.spec_helper.click_BANG_.call(null,["#index-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n_20669)].join(''));

var name__11622__auto___20670 = new cljs.core.Keyword(null,"turn","turn",75759344);
var options__11623__auto___20671 = cljs.core.PersistentArrayMap.EMPTY;
var invocations__11624__auto___20672 = speclj.stub.invocations_of.call(null,name__11622__auto___20670);
var times__11625__auto___20673 = new cljs.core.Keyword(null,"times","times",1671571467).cljs$core$IFn$_invoke$arity$1(options__11623__auto___20671);
var times_QMARK___11626__auto___20674 = typeof times__11625__auto___20673 === 'number';
var check_params_QMARK___11627__auto___20675 = cljs.core.contains_QMARK_.call(null,options__11623__auto___20671,new cljs.core.Keyword(null,"with","with",-1536296876));
var with__11628__auto___20676 = new cljs.core.Keyword(null,"with","with",-1536296876).cljs$core$IFn$_invoke$arity$1(options__11623__auto___20671);
var with__11628__auto___20677__$1 = (((with__11628__auto___20676 == null))?cljs.core.PersistentVector.EMPTY:with__11628__auto___20676);
var invocations_str__11629__auto___20678 = ((function (seq__20223_20665,chunk__20224_20666,count__20225_20667,i__20226_20668,seq__20215_20660,chunk__20220_20661,count__20221_20662,i__20222_20663,seq__20199,chunk__20212,count__20213,i__20214,name__11622__auto___20670,options__11623__auto___20671,invocations__11624__auto___20672,times__11625__auto___20673,times_QMARK___11626__auto___20674,check_params_QMARK___11627__auto___20675,with__11628__auto___20676,with__11628__auto___20677__$1,n_20669,mode_20664,ai,take_turn_orig_val__20197,take_turn_temp_val__20198,_STAR_parent_description_STAR__orig_val__20055_20430,_STAR_parent_description_STAR__temp_val__20056_20431,description__11238__auto____$1,_STAR_parent_description_STAR__orig_val__19701_20376,_STAR_parent_description_STAR__temp_val__19702_20377,description__11238__auto___20375){
return (function (p1__11619__11630__auto__){
if(cljs.core._EQ_.call(null,(1),p1__11619__11630__auto__)){
return "invocation";
} else {
return "invocations";
}
});})(seq__20223_20665,chunk__20224_20666,count__20225_20667,i__20226_20668,seq__20215_20660,chunk__20220_20661,count__20221_20662,i__20222_20663,seq__20199,chunk__20212,count__20213,i__20214,name__11622__auto___20670,options__11623__auto___20671,invocations__11624__auto___20672,times__11625__auto___20673,times_QMARK___11626__auto___20674,check_params_QMARK___11627__auto___20675,with__11628__auto___20676,with__11628__auto___20677__$1,n_20669,mode_20664,ai,take_turn_orig_val__20197,take_turn_temp_val__20198,_STAR_parent_description_STAR__orig_val__20055_20430,_STAR_parent_description_STAR__temp_val__20056_20431,description__11238__auto____$1,_STAR_parent_description_STAR__orig_val__19701_20376,_STAR_parent_description_STAR__temp_val__19702_20377,description__11238__auto___20375))
;
if(((times_QMARK___11626__auto___20674) && (check_params_QMARK___11627__auto___20675))){
var matching_invocations__11631__auto___20679 = cljs.core.filter.call(null,((function (seq__20223_20665,chunk__20224_20666,count__20225_20667,i__20226_20668,seq__20215_20660,chunk__20220_20661,count__20221_20662,i__20222_20663,seq__20199,chunk__20212,count__20213,i__20214,name__11622__auto___20670,options__11623__auto___20671,invocations__11624__auto___20672,times__11625__auto___20673,times_QMARK___11626__auto___20674,check_params_QMARK___11627__auto___20675,with__11628__auto___20676,with__11628__auto___20677__$1,invocations_str__11629__auto___20678,n_20669,mode_20664,ai,take_turn_orig_val__20197,take_turn_temp_val__20198,_STAR_parent_description_STAR__orig_val__20055_20430,_STAR_parent_description_STAR__temp_val__20056_20431,description__11238__auto____$1,_STAR_parent_description_STAR__orig_val__19701_20376,_STAR_parent_description_STAR__temp_val__19702_20377,description__11238__auto___20375){
return (function (p1__11620__11632__auto__){
return speclj.stub.params_match_QMARK_.call(null,with__11628__auto___20677__$1,p1__11620__11632__auto__);
});})(seq__20223_20665,chunk__20224_20666,count__20225_20667,i__20226_20668,seq__20215_20660,chunk__20220_20661,count__20221_20662,i__20222_20663,seq__20199,chunk__20212,count__20213,i__20214,name__11622__auto___20670,options__11623__auto___20671,invocations__11624__auto___20672,times__11625__auto___20673,times_QMARK___11626__auto___20674,check_params_QMARK___11627__auto___20675,with__11628__auto___20676,with__11628__auto___20677__$1,invocations_str__11629__auto___20678,n_20669,mode_20664,ai,take_turn_orig_val__20197,take_turn_temp_val__20198,_STAR_parent_description_STAR__orig_val__20055_20430,_STAR_parent_description_STAR__temp_val__20056_20431,description__11238__auto____$1,_STAR_parent_description_STAR__orig_val__19701_20376,_STAR_parent_description_STAR__temp_val__19702_20377,description__11238__auto___20375))
,invocations__11624__auto___20672);
var matching_count__11633__auto___20680 = cljs.core.count.call(null,matching_invocations__11631__auto___20679);
if(cljs.core._EQ_.call(null,times__11625__auto___20673,matching_count__11633__auto___20680)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(times__11625__auto___20673)," ",invocations_str__11629__auto___20678.call(null,times__11625__auto___20673)," of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__11622__auto___20670)," with ",cljs.core.pr_str.call(null,with__11628__auto___20677__$1),speclj.platform.endl,"     got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(matching_count__11633__auto___20680)," ",invocations_str__11629__auto___20678.call(null,matching_count__11633__auto___20680)].join('')));
}
} else {
if(check_params_QMARK___11627__auto___20675){
if(cljs.core.truth_(cljs.core.some.call(null,((function (seq__20223_20665,chunk__20224_20666,count__20225_20667,i__20226_20668,seq__20215_20660,chunk__20220_20661,count__20221_20662,i__20222_20663,seq__20199,chunk__20212,count__20213,i__20214,name__11622__auto___20670,options__11623__auto___20671,invocations__11624__auto___20672,times__11625__auto___20673,times_QMARK___11626__auto___20674,check_params_QMARK___11627__auto___20675,with__11628__auto___20676,with__11628__auto___20677__$1,invocations_str__11629__auto___20678,n_20669,mode_20664,ai,take_turn_orig_val__20197,take_turn_temp_val__20198,_STAR_parent_description_STAR__orig_val__20055_20430,_STAR_parent_description_STAR__temp_val__20056_20431,description__11238__auto____$1,_STAR_parent_description_STAR__orig_val__19701_20376,_STAR_parent_description_STAR__temp_val__19702_20377,description__11238__auto___20375){
return (function (p1__11621__11634__auto__){
return speclj.stub.params_match_QMARK_.call(null,with__11628__auto___20677__$1,p1__11621__11634__auto__);
});})(seq__20223_20665,chunk__20224_20666,count__20225_20667,i__20226_20668,seq__20215_20660,chunk__20220_20661,count__20221_20662,i__20222_20663,seq__20199,chunk__20212,count__20213,i__20214,name__11622__auto___20670,options__11623__auto___20671,invocations__11624__auto___20672,times__11625__auto___20673,times_QMARK___11626__auto___20674,check_params_QMARK___11627__auto___20675,with__11628__auto___20676,with__11628__auto___20677__$1,invocations_str__11629__auto___20678,n_20669,mode_20664,ai,take_turn_orig_val__20197,take_turn_temp_val__20198,_STAR_parent_description_STAR__orig_val__20055_20430,_STAR_parent_description_STAR__temp_val__20056_20431,description__11238__auto____$1,_STAR_parent_description_STAR__orig_val__19701_20376,_STAR_parent_description_STAR__temp_val__19702_20377,description__11238__auto___20375))
,invocations__11624__auto___20672))){
} else {
throw (new speclj.platform.SpecFailure(["Expected: invocation of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__11622__auto___20670)," with ",cljs.core.pr_str.call(null,with__11628__auto___20677__$1),speclj.platform.endl,"     got: ",cljs.core.pr_str.call(null,invocations__11624__auto___20672)].join('')));
}
} else {
if(times_QMARK___11626__auto___20674){
if(cljs.core._EQ_.call(null,times__11625__auto___20673,cljs.core.count.call(null,invocations__11624__auto___20672))){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(times__11625__auto___20673)," ",invocations_str__11629__auto___20678.call(null,times__11625__auto___20673)," of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__11622__auto___20670),speclj.platform.endl,"     got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,invocations__11624__auto___20672))].join('')));
}
} else {
if(cljs.core.seq.call(null,invocations__11624__auto___20672)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: an invocation of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__11622__auto___20670),speclj.platform.endl,"     got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,invocations__11624__auto___20672))].join('')));
}

}
}
}

var expected__11375__auto___20681 = ((cljs.core._EQ_.call(null,(2),mode_20664))?new cljs.core.Keyword(null,"x","x",2099068185):new cljs.core.Keyword(null,"o","o",-1350007228));
var actual__11376__auto___20682 = new cljs.core.Keyword(null,"player","player",-97687400).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.screens.play_spec.state));
if(cljs.core._EQ_.call(null,expected__11375__auto___20681,actual__11376__auto___20682)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__11375__auto___20681;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11343__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11343__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__11376__auto___20682;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11343__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11343__auto__);
}
})()," (using =)"].join('')));
}

cljs.core.reset_BANG_.call(null,tic_tac_toe.screens.play_spec.state,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"board","board",-1907017633),tic_tac_toe.screens.play_spec.board_3,new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"current-screen","current-screen",-1454713691),new cljs.core.Keyword(null,"play","play",-580418022)], null));


var G__20683 = seq__20223_20665;
var G__20684 = chunk__20224_20666;
var G__20685 = count__20225_20667;
var G__20686 = (i__20226_20668 + (1));
seq__20223_20665 = G__20683;
chunk__20224_20666 = G__20684;
count__20225_20667 = G__20685;
i__20226_20668 = G__20686;
continue;
} else {
var temp__5804__auto___20687 = cljs.core.seq.call(null,seq__20223_20665);
if(temp__5804__auto___20687){
var seq__20223_20688__$1 = temp__5804__auto___20687;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20223_20688__$1)){
var c__5525__auto___20689 = cljs.core.chunk_first.call(null,seq__20223_20688__$1);
var G__20690 = cljs.core.chunk_rest.call(null,seq__20223_20688__$1);
var G__20691 = c__5525__auto___20689;
var G__20692 = cljs.core.count.call(null,c__5525__auto___20689);
var G__20693 = (0);
seq__20223_20665 = G__20690;
chunk__20224_20666 = G__20691;
count__20225_20667 = G__20692;
i__20226_20668 = G__20693;
continue;
} else {
var n_20694 = cljs.core.first.call(null,seq__20223_20688__$1);
cljs.core.swap_BANG_.call(null,tic_tac_toe.screens.play_spec.state,cljs.core.assoc,new cljs.core.Keyword(null,"mode","mode",654403691),mode_20664,new cljs.core.Keyword(null,"first-ai-level","first-ai-level",1004633644),ai,new cljs.core.Keyword(null,"player","player",-97687400),((cljs.core._EQ_.call(null,(2),mode_20664))?new cljs.core.Keyword(null,"x","x",2099068185):new cljs.core.Keyword(null,"o","o",-1350007228)),new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"gui","gui",604532813));

c3kit.wire.spec_helper.render.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tic_tac_toe.render_screen.render_screen,tic_tac_toe.screens.play_spec.state], null));

c3kit.wire.spec_helper.click_BANG_.call(null,["#index-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n_20694)].join(''));

var name__11622__auto___20695 = new cljs.core.Keyword(null,"turn","turn",75759344);
var options__11623__auto___20696 = cljs.core.PersistentArrayMap.EMPTY;
var invocations__11624__auto___20697 = speclj.stub.invocations_of.call(null,name__11622__auto___20695);
var times__11625__auto___20698 = new cljs.core.Keyword(null,"times","times",1671571467).cljs$core$IFn$_invoke$arity$1(options__11623__auto___20696);
var times_QMARK___11626__auto___20699 = typeof times__11625__auto___20698 === 'number';
var check_params_QMARK___11627__auto___20700 = cljs.core.contains_QMARK_.call(null,options__11623__auto___20696,new cljs.core.Keyword(null,"with","with",-1536296876));
var with__11628__auto___20701 = new cljs.core.Keyword(null,"with","with",-1536296876).cljs$core$IFn$_invoke$arity$1(options__11623__auto___20696);
var with__11628__auto___20702__$1 = (((with__11628__auto___20701 == null))?cljs.core.PersistentVector.EMPTY:with__11628__auto___20701);
var invocations_str__11629__auto___20703 = ((function (seq__20223_20665,chunk__20224_20666,count__20225_20667,i__20226_20668,seq__20215_20660,chunk__20220_20661,count__20221_20662,i__20222_20663,seq__20199,chunk__20212,count__20213,i__20214,name__11622__auto___20695,options__11623__auto___20696,invocations__11624__auto___20697,times__11625__auto___20698,times_QMARK___11626__auto___20699,check_params_QMARK___11627__auto___20700,with__11628__auto___20701,with__11628__auto___20702__$1,n_20694,seq__20223_20688__$1,temp__5804__auto___20687,mode_20664,ai,take_turn_orig_val__20197,take_turn_temp_val__20198,_STAR_parent_description_STAR__orig_val__20055_20430,_STAR_parent_description_STAR__temp_val__20056_20431,description__11238__auto____$1,_STAR_parent_description_STAR__orig_val__19701_20376,_STAR_parent_description_STAR__temp_val__19702_20377,description__11238__auto___20375){
return (function (p1__11619__11630__auto__){
if(cljs.core._EQ_.call(null,(1),p1__11619__11630__auto__)){
return "invocation";
} else {
return "invocations";
}
});})(seq__20223_20665,chunk__20224_20666,count__20225_20667,i__20226_20668,seq__20215_20660,chunk__20220_20661,count__20221_20662,i__20222_20663,seq__20199,chunk__20212,count__20213,i__20214,name__11622__auto___20695,options__11623__auto___20696,invocations__11624__auto___20697,times__11625__auto___20698,times_QMARK___11626__auto___20699,check_params_QMARK___11627__auto___20700,with__11628__auto___20701,with__11628__auto___20702__$1,n_20694,seq__20223_20688__$1,temp__5804__auto___20687,mode_20664,ai,take_turn_orig_val__20197,take_turn_temp_val__20198,_STAR_parent_description_STAR__orig_val__20055_20430,_STAR_parent_description_STAR__temp_val__20056_20431,description__11238__auto____$1,_STAR_parent_description_STAR__orig_val__19701_20376,_STAR_parent_description_STAR__temp_val__19702_20377,description__11238__auto___20375))
;
if(((times_QMARK___11626__auto___20699) && (check_params_QMARK___11627__auto___20700))){
var matching_invocations__11631__auto___20704 = cljs.core.filter.call(null,((function (seq__20223_20665,chunk__20224_20666,count__20225_20667,i__20226_20668,seq__20215_20660,chunk__20220_20661,count__20221_20662,i__20222_20663,seq__20199,chunk__20212,count__20213,i__20214,name__11622__auto___20695,options__11623__auto___20696,invocations__11624__auto___20697,times__11625__auto___20698,times_QMARK___11626__auto___20699,check_params_QMARK___11627__auto___20700,with__11628__auto___20701,with__11628__auto___20702__$1,invocations_str__11629__auto___20703,n_20694,seq__20223_20688__$1,temp__5804__auto___20687,mode_20664,ai,take_turn_orig_val__20197,take_turn_temp_val__20198,_STAR_parent_description_STAR__orig_val__20055_20430,_STAR_parent_description_STAR__temp_val__20056_20431,description__11238__auto____$1,_STAR_parent_description_STAR__orig_val__19701_20376,_STAR_parent_description_STAR__temp_val__19702_20377,description__11238__auto___20375){
return (function (p1__11620__11632__auto__){
return speclj.stub.params_match_QMARK_.call(null,with__11628__auto___20702__$1,p1__11620__11632__auto__);
});})(seq__20223_20665,chunk__20224_20666,count__20225_20667,i__20226_20668,seq__20215_20660,chunk__20220_20661,count__20221_20662,i__20222_20663,seq__20199,chunk__20212,count__20213,i__20214,name__11622__auto___20695,options__11623__auto___20696,invocations__11624__auto___20697,times__11625__auto___20698,times_QMARK___11626__auto___20699,check_params_QMARK___11627__auto___20700,with__11628__auto___20701,with__11628__auto___20702__$1,invocations_str__11629__auto___20703,n_20694,seq__20223_20688__$1,temp__5804__auto___20687,mode_20664,ai,take_turn_orig_val__20197,take_turn_temp_val__20198,_STAR_parent_description_STAR__orig_val__20055_20430,_STAR_parent_description_STAR__temp_val__20056_20431,description__11238__auto____$1,_STAR_parent_description_STAR__orig_val__19701_20376,_STAR_parent_description_STAR__temp_val__19702_20377,description__11238__auto___20375))
,invocations__11624__auto___20697);
var matching_count__11633__auto___20705 = cljs.core.count.call(null,matching_invocations__11631__auto___20704);
if(cljs.core._EQ_.call(null,times__11625__auto___20698,matching_count__11633__auto___20705)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(times__11625__auto___20698)," ",invocations_str__11629__auto___20703.call(null,times__11625__auto___20698)," of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__11622__auto___20695)," with ",cljs.core.pr_str.call(null,with__11628__auto___20702__$1),speclj.platform.endl,"     got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(matching_count__11633__auto___20705)," ",invocations_str__11629__auto___20703.call(null,matching_count__11633__auto___20705)].join('')));
}
} else {
if(check_params_QMARK___11627__auto___20700){
if(cljs.core.truth_(cljs.core.some.call(null,((function (seq__20223_20665,chunk__20224_20666,count__20225_20667,i__20226_20668,seq__20215_20660,chunk__20220_20661,count__20221_20662,i__20222_20663,seq__20199,chunk__20212,count__20213,i__20214,name__11622__auto___20695,options__11623__auto___20696,invocations__11624__auto___20697,times__11625__auto___20698,times_QMARK___11626__auto___20699,check_params_QMARK___11627__auto___20700,with__11628__auto___20701,with__11628__auto___20702__$1,invocations_str__11629__auto___20703,n_20694,seq__20223_20688__$1,temp__5804__auto___20687,mode_20664,ai,take_turn_orig_val__20197,take_turn_temp_val__20198,_STAR_parent_description_STAR__orig_val__20055_20430,_STAR_parent_description_STAR__temp_val__20056_20431,description__11238__auto____$1,_STAR_parent_description_STAR__orig_val__19701_20376,_STAR_parent_description_STAR__temp_val__19702_20377,description__11238__auto___20375){
return (function (p1__11621__11634__auto__){
return speclj.stub.params_match_QMARK_.call(null,with__11628__auto___20702__$1,p1__11621__11634__auto__);
});})(seq__20223_20665,chunk__20224_20666,count__20225_20667,i__20226_20668,seq__20215_20660,chunk__20220_20661,count__20221_20662,i__20222_20663,seq__20199,chunk__20212,count__20213,i__20214,name__11622__auto___20695,options__11623__auto___20696,invocations__11624__auto___20697,times__11625__auto___20698,times_QMARK___11626__auto___20699,check_params_QMARK___11627__auto___20700,with__11628__auto___20701,with__11628__auto___20702__$1,invocations_str__11629__auto___20703,n_20694,seq__20223_20688__$1,temp__5804__auto___20687,mode_20664,ai,take_turn_orig_val__20197,take_turn_temp_val__20198,_STAR_parent_description_STAR__orig_val__20055_20430,_STAR_parent_description_STAR__temp_val__20056_20431,description__11238__auto____$1,_STAR_parent_description_STAR__orig_val__19701_20376,_STAR_parent_description_STAR__temp_val__19702_20377,description__11238__auto___20375))
,invocations__11624__auto___20697))){
} else {
throw (new speclj.platform.SpecFailure(["Expected: invocation of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__11622__auto___20695)," with ",cljs.core.pr_str.call(null,with__11628__auto___20702__$1),speclj.platform.endl,"     got: ",cljs.core.pr_str.call(null,invocations__11624__auto___20697)].join('')));
}
} else {
if(times_QMARK___11626__auto___20699){
if(cljs.core._EQ_.call(null,times__11625__auto___20698,cljs.core.count.call(null,invocations__11624__auto___20697))){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(times__11625__auto___20698)," ",invocations_str__11629__auto___20703.call(null,times__11625__auto___20698)," of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__11622__auto___20695),speclj.platform.endl,"     got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,invocations__11624__auto___20697))].join('')));
}
} else {
if(cljs.core.seq.call(null,invocations__11624__auto___20697)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: an invocation of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__11622__auto___20695),speclj.platform.endl,"     got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,invocations__11624__auto___20697))].join('')));
}

}
}
}

var expected__11375__auto___20706 = ((cljs.core._EQ_.call(null,(2),mode_20664))?new cljs.core.Keyword(null,"x","x",2099068185):new cljs.core.Keyword(null,"o","o",-1350007228));
var actual__11376__auto___20707 = new cljs.core.Keyword(null,"player","player",-97687400).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.screens.play_spec.state));
if(cljs.core._EQ_.call(null,expected__11375__auto___20706,actual__11376__auto___20707)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__11375__auto___20706;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11343__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11343__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__11376__auto___20707;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11343__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11343__auto__);
}
})()," (using =)"].join('')));
}

cljs.core.reset_BANG_.call(null,tic_tac_toe.screens.play_spec.state,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"board","board",-1907017633),tic_tac_toe.screens.play_spec.board_3,new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"current-screen","current-screen",-1454713691),new cljs.core.Keyword(null,"play","play",-580418022)], null));


var G__20708 = cljs.core.next.call(null,seq__20223_20688__$1);
var G__20709 = null;
var G__20710 = (0);
var G__20711 = (0);
seq__20223_20665 = G__20708;
chunk__20224_20666 = G__20709;
count__20225_20667 = G__20710;
i__20226_20668 = G__20711;
continue;
}
} else {
}
}
break;
}

var G__20712 = seq__20215_20660;
var G__20713 = chunk__20220_20661;
var G__20714 = count__20221_20662;
var G__20715 = (i__20222_20663 + (1));
seq__20215_20660 = G__20712;
chunk__20220_20661 = G__20713;
count__20221_20662 = G__20714;
i__20222_20663 = G__20715;
continue;
} else {
var temp__5804__auto___20716 = cljs.core.seq.call(null,seq__20215_20660);
if(temp__5804__auto___20716){
var seq__20215_20717__$1 = temp__5804__auto___20716;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20215_20717__$1)){
var c__5525__auto___20718 = cljs.core.chunk_first.call(null,seq__20215_20717__$1);
var G__20719 = cljs.core.chunk_rest.call(null,seq__20215_20717__$1);
var G__20720 = c__5525__auto___20718;
var G__20721 = cljs.core.count.call(null,c__5525__auto___20718);
var G__20722 = (0);
seq__20215_20660 = G__20719;
chunk__20220_20661 = G__20720;
count__20221_20662 = G__20721;
i__20222_20663 = G__20722;
continue;
} else {
var mode_20723 = cljs.core.first.call(null,seq__20215_20717__$1);
var seq__20216_20724 = cljs.core.seq.call(null,cljs.core.range.call(null,(9)));
var chunk__20217_20725 = null;
var count__20218_20726 = (0);
var i__20219_20727 = (0);
while(true){
if((i__20219_20727 < count__20218_20726)){
var n_20728 = cljs.core._nth.call(null,chunk__20217_20725,i__20219_20727);
cljs.core.swap_BANG_.call(null,tic_tac_toe.screens.play_spec.state,cljs.core.assoc,new cljs.core.Keyword(null,"mode","mode",654403691),mode_20723,new cljs.core.Keyword(null,"first-ai-level","first-ai-level",1004633644),ai,new cljs.core.Keyword(null,"player","player",-97687400),((cljs.core._EQ_.call(null,(2),mode_20723))?new cljs.core.Keyword(null,"x","x",2099068185):new cljs.core.Keyword(null,"o","o",-1350007228)),new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"gui","gui",604532813));

c3kit.wire.spec_helper.render.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tic_tac_toe.render_screen.render_screen,tic_tac_toe.screens.play_spec.state], null));

c3kit.wire.spec_helper.click_BANG_.call(null,["#index-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n_20728)].join(''));

var name__11622__auto___20729 = new cljs.core.Keyword(null,"turn","turn",75759344);
var options__11623__auto___20730 = cljs.core.PersistentArrayMap.EMPTY;
var invocations__11624__auto___20731 = speclj.stub.invocations_of.call(null,name__11622__auto___20729);
var times__11625__auto___20732 = new cljs.core.Keyword(null,"times","times",1671571467).cljs$core$IFn$_invoke$arity$1(options__11623__auto___20730);
var times_QMARK___11626__auto___20733 = typeof times__11625__auto___20732 === 'number';
var check_params_QMARK___11627__auto___20734 = cljs.core.contains_QMARK_.call(null,options__11623__auto___20730,new cljs.core.Keyword(null,"with","with",-1536296876));
var with__11628__auto___20735 = new cljs.core.Keyword(null,"with","with",-1536296876).cljs$core$IFn$_invoke$arity$1(options__11623__auto___20730);
var with__11628__auto___20736__$1 = (((with__11628__auto___20735 == null))?cljs.core.PersistentVector.EMPTY:with__11628__auto___20735);
var invocations_str__11629__auto___20737 = ((function (seq__20216_20724,chunk__20217_20725,count__20218_20726,i__20219_20727,seq__20215_20660,chunk__20220_20661,count__20221_20662,i__20222_20663,seq__20199,chunk__20212,count__20213,i__20214,name__11622__auto___20729,options__11623__auto___20730,invocations__11624__auto___20731,times__11625__auto___20732,times_QMARK___11626__auto___20733,check_params_QMARK___11627__auto___20734,with__11628__auto___20735,with__11628__auto___20736__$1,n_20728,mode_20723,seq__20215_20717__$1,temp__5804__auto___20716,ai,take_turn_orig_val__20197,take_turn_temp_val__20198,_STAR_parent_description_STAR__orig_val__20055_20430,_STAR_parent_description_STAR__temp_val__20056_20431,description__11238__auto____$1,_STAR_parent_description_STAR__orig_val__19701_20376,_STAR_parent_description_STAR__temp_val__19702_20377,description__11238__auto___20375){
return (function (p1__11619__11630__auto__){
if(cljs.core._EQ_.call(null,(1),p1__11619__11630__auto__)){
return "invocation";
} else {
return "invocations";
}
});})(seq__20216_20724,chunk__20217_20725,count__20218_20726,i__20219_20727,seq__20215_20660,chunk__20220_20661,count__20221_20662,i__20222_20663,seq__20199,chunk__20212,count__20213,i__20214,name__11622__auto___20729,options__11623__auto___20730,invocations__11624__auto___20731,times__11625__auto___20732,times_QMARK___11626__auto___20733,check_params_QMARK___11627__auto___20734,with__11628__auto___20735,with__11628__auto___20736__$1,n_20728,mode_20723,seq__20215_20717__$1,temp__5804__auto___20716,ai,take_turn_orig_val__20197,take_turn_temp_val__20198,_STAR_parent_description_STAR__orig_val__20055_20430,_STAR_parent_description_STAR__temp_val__20056_20431,description__11238__auto____$1,_STAR_parent_description_STAR__orig_val__19701_20376,_STAR_parent_description_STAR__temp_val__19702_20377,description__11238__auto___20375))
;
if(((times_QMARK___11626__auto___20733) && (check_params_QMARK___11627__auto___20734))){
var matching_invocations__11631__auto___20738 = cljs.core.filter.call(null,((function (seq__20216_20724,chunk__20217_20725,count__20218_20726,i__20219_20727,seq__20215_20660,chunk__20220_20661,count__20221_20662,i__20222_20663,seq__20199,chunk__20212,count__20213,i__20214,name__11622__auto___20729,options__11623__auto___20730,invocations__11624__auto___20731,times__11625__auto___20732,times_QMARK___11626__auto___20733,check_params_QMARK___11627__auto___20734,with__11628__auto___20735,with__11628__auto___20736__$1,invocations_str__11629__auto___20737,n_20728,mode_20723,seq__20215_20717__$1,temp__5804__auto___20716,ai,take_turn_orig_val__20197,take_turn_temp_val__20198,_STAR_parent_description_STAR__orig_val__20055_20430,_STAR_parent_description_STAR__temp_val__20056_20431,description__11238__auto____$1,_STAR_parent_description_STAR__orig_val__19701_20376,_STAR_parent_description_STAR__temp_val__19702_20377,description__11238__auto___20375){
return (function (p1__11620__11632__auto__){
return speclj.stub.params_match_QMARK_.call(null,with__11628__auto___20736__$1,p1__11620__11632__auto__);
});})(seq__20216_20724,chunk__20217_20725,count__20218_20726,i__20219_20727,seq__20215_20660,chunk__20220_20661,count__20221_20662,i__20222_20663,seq__20199,chunk__20212,count__20213,i__20214,name__11622__auto___20729,options__11623__auto___20730,invocations__11624__auto___20731,times__11625__auto___20732,times_QMARK___11626__auto___20733,check_params_QMARK___11627__auto___20734,with__11628__auto___20735,with__11628__auto___20736__$1,invocations_str__11629__auto___20737,n_20728,mode_20723,seq__20215_20717__$1,temp__5804__auto___20716,ai,take_turn_orig_val__20197,take_turn_temp_val__20198,_STAR_parent_description_STAR__orig_val__20055_20430,_STAR_parent_description_STAR__temp_val__20056_20431,description__11238__auto____$1,_STAR_parent_description_STAR__orig_val__19701_20376,_STAR_parent_description_STAR__temp_val__19702_20377,description__11238__auto___20375))
,invocations__11624__auto___20731);
var matching_count__11633__auto___20739 = cljs.core.count.call(null,matching_invocations__11631__auto___20738);
if(cljs.core._EQ_.call(null,times__11625__auto___20732,matching_count__11633__auto___20739)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(times__11625__auto___20732)," ",invocations_str__11629__auto___20737.call(null,times__11625__auto___20732)," of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__11622__auto___20729)," with ",cljs.core.pr_str.call(null,with__11628__auto___20736__$1),speclj.platform.endl,"     got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(matching_count__11633__auto___20739)," ",invocations_str__11629__auto___20737.call(null,matching_count__11633__auto___20739)].join('')));
}
} else {
if(check_params_QMARK___11627__auto___20734){
if(cljs.core.truth_(cljs.core.some.call(null,((function (seq__20216_20724,chunk__20217_20725,count__20218_20726,i__20219_20727,seq__20215_20660,chunk__20220_20661,count__20221_20662,i__20222_20663,seq__20199,chunk__20212,count__20213,i__20214,name__11622__auto___20729,options__11623__auto___20730,invocations__11624__auto___20731,times__11625__auto___20732,times_QMARK___11626__auto___20733,check_params_QMARK___11627__auto___20734,with__11628__auto___20735,with__11628__auto___20736__$1,invocations_str__11629__auto___20737,n_20728,mode_20723,seq__20215_20717__$1,temp__5804__auto___20716,ai,take_turn_orig_val__20197,take_turn_temp_val__20198,_STAR_parent_description_STAR__orig_val__20055_20430,_STAR_parent_description_STAR__temp_val__20056_20431,description__11238__auto____$1,_STAR_parent_description_STAR__orig_val__19701_20376,_STAR_parent_description_STAR__temp_val__19702_20377,description__11238__auto___20375){
return (function (p1__11621__11634__auto__){
return speclj.stub.params_match_QMARK_.call(null,with__11628__auto___20736__$1,p1__11621__11634__auto__);
});})(seq__20216_20724,chunk__20217_20725,count__20218_20726,i__20219_20727,seq__20215_20660,chunk__20220_20661,count__20221_20662,i__20222_20663,seq__20199,chunk__20212,count__20213,i__20214,name__11622__auto___20729,options__11623__auto___20730,invocations__11624__auto___20731,times__11625__auto___20732,times_QMARK___11626__auto___20733,check_params_QMARK___11627__auto___20734,with__11628__auto___20735,with__11628__auto___20736__$1,invocations_str__11629__auto___20737,n_20728,mode_20723,seq__20215_20717__$1,temp__5804__auto___20716,ai,take_turn_orig_val__20197,take_turn_temp_val__20198,_STAR_parent_description_STAR__orig_val__20055_20430,_STAR_parent_description_STAR__temp_val__20056_20431,description__11238__auto____$1,_STAR_parent_description_STAR__orig_val__19701_20376,_STAR_parent_description_STAR__temp_val__19702_20377,description__11238__auto___20375))
,invocations__11624__auto___20731))){
} else {
throw (new speclj.platform.SpecFailure(["Expected: invocation of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__11622__auto___20729)," with ",cljs.core.pr_str.call(null,with__11628__auto___20736__$1),speclj.platform.endl,"     got: ",cljs.core.pr_str.call(null,invocations__11624__auto___20731)].join('')));
}
} else {
if(times_QMARK___11626__auto___20733){
if(cljs.core._EQ_.call(null,times__11625__auto___20732,cljs.core.count.call(null,invocations__11624__auto___20731))){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(times__11625__auto___20732)," ",invocations_str__11629__auto___20737.call(null,times__11625__auto___20732)," of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__11622__auto___20729),speclj.platform.endl,"     got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,invocations__11624__auto___20731))].join('')));
}
} else {
if(cljs.core.seq.call(null,invocations__11624__auto___20731)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: an invocation of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__11622__auto___20729),speclj.platform.endl,"     got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,invocations__11624__auto___20731))].join('')));
}

}
}
}

var expected__11375__auto___20740 = ((cljs.core._EQ_.call(null,(2),mode_20723))?new cljs.core.Keyword(null,"x","x",2099068185):new cljs.core.Keyword(null,"o","o",-1350007228));
var actual__11376__auto___20741 = new cljs.core.Keyword(null,"player","player",-97687400).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.screens.play_spec.state));
if(cljs.core._EQ_.call(null,expected__11375__auto___20740,actual__11376__auto___20741)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__11375__auto___20740;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11343__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11343__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__11376__auto___20741;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11343__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11343__auto__);
}
})()," (using =)"].join('')));
}

cljs.core.reset_BANG_.call(null,tic_tac_toe.screens.play_spec.state,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"board","board",-1907017633),tic_tac_toe.screens.play_spec.board_3,new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"current-screen","current-screen",-1454713691),new cljs.core.Keyword(null,"play","play",-580418022)], null));


var G__20742 = seq__20216_20724;
var G__20743 = chunk__20217_20725;
var G__20744 = count__20218_20726;
var G__20745 = (i__20219_20727 + (1));
seq__20216_20724 = G__20742;
chunk__20217_20725 = G__20743;
count__20218_20726 = G__20744;
i__20219_20727 = G__20745;
continue;
} else {
var temp__5804__auto___20746__$1 = cljs.core.seq.call(null,seq__20216_20724);
if(temp__5804__auto___20746__$1){
var seq__20216_20747__$1 = temp__5804__auto___20746__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20216_20747__$1)){
var c__5525__auto___20748 = cljs.core.chunk_first.call(null,seq__20216_20747__$1);
var G__20749 = cljs.core.chunk_rest.call(null,seq__20216_20747__$1);
var G__20750 = c__5525__auto___20748;
var G__20751 = cljs.core.count.call(null,c__5525__auto___20748);
var G__20752 = (0);
seq__20216_20724 = G__20749;
chunk__20217_20725 = G__20750;
count__20218_20726 = G__20751;
i__20219_20727 = G__20752;
continue;
} else {
var n_20753 = cljs.core.first.call(null,seq__20216_20747__$1);
cljs.core.swap_BANG_.call(null,tic_tac_toe.screens.play_spec.state,cljs.core.assoc,new cljs.core.Keyword(null,"mode","mode",654403691),mode_20723,new cljs.core.Keyword(null,"first-ai-level","first-ai-level",1004633644),ai,new cljs.core.Keyword(null,"player","player",-97687400),((cljs.core._EQ_.call(null,(2),mode_20723))?new cljs.core.Keyword(null,"x","x",2099068185):new cljs.core.Keyword(null,"o","o",-1350007228)),new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"gui","gui",604532813));

c3kit.wire.spec_helper.render.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tic_tac_toe.render_screen.render_screen,tic_tac_toe.screens.play_spec.state], null));

c3kit.wire.spec_helper.click_BANG_.call(null,["#index-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n_20753)].join(''));

var name__11622__auto___20754 = new cljs.core.Keyword(null,"turn","turn",75759344);
var options__11623__auto___20755 = cljs.core.PersistentArrayMap.EMPTY;
var invocations__11624__auto___20756 = speclj.stub.invocations_of.call(null,name__11622__auto___20754);
var times__11625__auto___20757 = new cljs.core.Keyword(null,"times","times",1671571467).cljs$core$IFn$_invoke$arity$1(options__11623__auto___20755);
var times_QMARK___11626__auto___20758 = typeof times__11625__auto___20757 === 'number';
var check_params_QMARK___11627__auto___20759 = cljs.core.contains_QMARK_.call(null,options__11623__auto___20755,new cljs.core.Keyword(null,"with","with",-1536296876));
var with__11628__auto___20760 = new cljs.core.Keyword(null,"with","with",-1536296876).cljs$core$IFn$_invoke$arity$1(options__11623__auto___20755);
var with__11628__auto___20761__$1 = (((with__11628__auto___20760 == null))?cljs.core.PersistentVector.EMPTY:with__11628__auto___20760);
var invocations_str__11629__auto___20762 = ((function (seq__20216_20724,chunk__20217_20725,count__20218_20726,i__20219_20727,seq__20215_20660,chunk__20220_20661,count__20221_20662,i__20222_20663,seq__20199,chunk__20212,count__20213,i__20214,name__11622__auto___20754,options__11623__auto___20755,invocations__11624__auto___20756,times__11625__auto___20757,times_QMARK___11626__auto___20758,check_params_QMARK___11627__auto___20759,with__11628__auto___20760,with__11628__auto___20761__$1,n_20753,seq__20216_20747__$1,temp__5804__auto___20746__$1,mode_20723,seq__20215_20717__$1,temp__5804__auto___20716,ai,take_turn_orig_val__20197,take_turn_temp_val__20198,_STAR_parent_description_STAR__orig_val__20055_20430,_STAR_parent_description_STAR__temp_val__20056_20431,description__11238__auto____$1,_STAR_parent_description_STAR__orig_val__19701_20376,_STAR_parent_description_STAR__temp_val__19702_20377,description__11238__auto___20375){
return (function (p1__11619__11630__auto__){
if(cljs.core._EQ_.call(null,(1),p1__11619__11630__auto__)){
return "invocation";
} else {
return "invocations";
}
});})(seq__20216_20724,chunk__20217_20725,count__20218_20726,i__20219_20727,seq__20215_20660,chunk__20220_20661,count__20221_20662,i__20222_20663,seq__20199,chunk__20212,count__20213,i__20214,name__11622__auto___20754,options__11623__auto___20755,invocations__11624__auto___20756,times__11625__auto___20757,times_QMARK___11626__auto___20758,check_params_QMARK___11627__auto___20759,with__11628__auto___20760,with__11628__auto___20761__$1,n_20753,seq__20216_20747__$1,temp__5804__auto___20746__$1,mode_20723,seq__20215_20717__$1,temp__5804__auto___20716,ai,take_turn_orig_val__20197,take_turn_temp_val__20198,_STAR_parent_description_STAR__orig_val__20055_20430,_STAR_parent_description_STAR__temp_val__20056_20431,description__11238__auto____$1,_STAR_parent_description_STAR__orig_val__19701_20376,_STAR_parent_description_STAR__temp_val__19702_20377,description__11238__auto___20375))
;
if(((times_QMARK___11626__auto___20758) && (check_params_QMARK___11627__auto___20759))){
var matching_invocations__11631__auto___20763 = cljs.core.filter.call(null,((function (seq__20216_20724,chunk__20217_20725,count__20218_20726,i__20219_20727,seq__20215_20660,chunk__20220_20661,count__20221_20662,i__20222_20663,seq__20199,chunk__20212,count__20213,i__20214,name__11622__auto___20754,options__11623__auto___20755,invocations__11624__auto___20756,times__11625__auto___20757,times_QMARK___11626__auto___20758,check_params_QMARK___11627__auto___20759,with__11628__auto___20760,with__11628__auto___20761__$1,invocations_str__11629__auto___20762,n_20753,seq__20216_20747__$1,temp__5804__auto___20746__$1,mode_20723,seq__20215_20717__$1,temp__5804__auto___20716,ai,take_turn_orig_val__20197,take_turn_temp_val__20198,_STAR_parent_description_STAR__orig_val__20055_20430,_STAR_parent_description_STAR__temp_val__20056_20431,description__11238__auto____$1,_STAR_parent_description_STAR__orig_val__19701_20376,_STAR_parent_description_STAR__temp_val__19702_20377,description__11238__auto___20375){
return (function (p1__11620__11632__auto__){
return speclj.stub.params_match_QMARK_.call(null,with__11628__auto___20761__$1,p1__11620__11632__auto__);
});})(seq__20216_20724,chunk__20217_20725,count__20218_20726,i__20219_20727,seq__20215_20660,chunk__20220_20661,count__20221_20662,i__20222_20663,seq__20199,chunk__20212,count__20213,i__20214,name__11622__auto___20754,options__11623__auto___20755,invocations__11624__auto___20756,times__11625__auto___20757,times_QMARK___11626__auto___20758,check_params_QMARK___11627__auto___20759,with__11628__auto___20760,with__11628__auto___20761__$1,invocations_str__11629__auto___20762,n_20753,seq__20216_20747__$1,temp__5804__auto___20746__$1,mode_20723,seq__20215_20717__$1,temp__5804__auto___20716,ai,take_turn_orig_val__20197,take_turn_temp_val__20198,_STAR_parent_description_STAR__orig_val__20055_20430,_STAR_parent_description_STAR__temp_val__20056_20431,description__11238__auto____$1,_STAR_parent_description_STAR__orig_val__19701_20376,_STAR_parent_description_STAR__temp_val__19702_20377,description__11238__auto___20375))
,invocations__11624__auto___20756);
var matching_count__11633__auto___20764 = cljs.core.count.call(null,matching_invocations__11631__auto___20763);
if(cljs.core._EQ_.call(null,times__11625__auto___20757,matching_count__11633__auto___20764)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(times__11625__auto___20757)," ",invocations_str__11629__auto___20762.call(null,times__11625__auto___20757)," of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__11622__auto___20754)," with ",cljs.core.pr_str.call(null,with__11628__auto___20761__$1),speclj.platform.endl,"     got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(matching_count__11633__auto___20764)," ",invocations_str__11629__auto___20762.call(null,matching_count__11633__auto___20764)].join('')));
}
} else {
if(check_params_QMARK___11627__auto___20759){
if(cljs.core.truth_(cljs.core.some.call(null,((function (seq__20216_20724,chunk__20217_20725,count__20218_20726,i__20219_20727,seq__20215_20660,chunk__20220_20661,count__20221_20662,i__20222_20663,seq__20199,chunk__20212,count__20213,i__20214,name__11622__auto___20754,options__11623__auto___20755,invocations__11624__auto___20756,times__11625__auto___20757,times_QMARK___11626__auto___20758,check_params_QMARK___11627__auto___20759,with__11628__auto___20760,with__11628__auto___20761__$1,invocations_str__11629__auto___20762,n_20753,seq__20216_20747__$1,temp__5804__auto___20746__$1,mode_20723,seq__20215_20717__$1,temp__5804__auto___20716,ai,take_turn_orig_val__20197,take_turn_temp_val__20198,_STAR_parent_description_STAR__orig_val__20055_20430,_STAR_parent_description_STAR__temp_val__20056_20431,description__11238__auto____$1,_STAR_parent_description_STAR__orig_val__19701_20376,_STAR_parent_description_STAR__temp_val__19702_20377,description__11238__auto___20375){
return (function (p1__11621__11634__auto__){
return speclj.stub.params_match_QMARK_.call(null,with__11628__auto___20761__$1,p1__11621__11634__auto__);
});})(seq__20216_20724,chunk__20217_20725,count__20218_20726,i__20219_20727,seq__20215_20660,chunk__20220_20661,count__20221_20662,i__20222_20663,seq__20199,chunk__20212,count__20213,i__20214,name__11622__auto___20754,options__11623__auto___20755,invocations__11624__auto___20756,times__11625__auto___20757,times_QMARK___11626__auto___20758,check_params_QMARK___11627__auto___20759,with__11628__auto___20760,with__11628__auto___20761__$1,invocations_str__11629__auto___20762,n_20753,seq__20216_20747__$1,temp__5804__auto___20746__$1,mode_20723,seq__20215_20717__$1,temp__5804__auto___20716,ai,take_turn_orig_val__20197,take_turn_temp_val__20198,_STAR_parent_description_STAR__orig_val__20055_20430,_STAR_parent_description_STAR__temp_val__20056_20431,description__11238__auto____$1,_STAR_parent_description_STAR__orig_val__19701_20376,_STAR_parent_description_STAR__temp_val__19702_20377,description__11238__auto___20375))
,invocations__11624__auto___20756))){
} else {
throw (new speclj.platform.SpecFailure(["Expected: invocation of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__11622__auto___20754)," with ",cljs.core.pr_str.call(null,with__11628__auto___20761__$1),speclj.platform.endl,"     got: ",cljs.core.pr_str.call(null,invocations__11624__auto___20756)].join('')));
}
} else {
if(times_QMARK___11626__auto___20758){
if(cljs.core._EQ_.call(null,times__11625__auto___20757,cljs.core.count.call(null,invocations__11624__auto___20756))){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(times__11625__auto___20757)," ",invocations_str__11629__auto___20762.call(null,times__11625__auto___20757)," of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__11622__auto___20754),speclj.platform.endl,"     got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,invocations__11624__auto___20756))].join('')));
}
} else {
if(cljs.core.seq.call(null,invocations__11624__auto___20756)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: an invocation of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__11622__auto___20754),speclj.platform.endl,"     got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,invocations__11624__auto___20756))].join('')));
}

}
}
}

var expected__11375__auto___20765 = ((cljs.core._EQ_.call(null,(2),mode_20723))?new cljs.core.Keyword(null,"x","x",2099068185):new cljs.core.Keyword(null,"o","o",-1350007228));
var actual__11376__auto___20766 = new cljs.core.Keyword(null,"player","player",-97687400).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.screens.play_spec.state));
if(cljs.core._EQ_.call(null,expected__11375__auto___20765,actual__11376__auto___20766)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__11375__auto___20765;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11343__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11343__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__11376__auto___20766;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11343__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11343__auto__);
}
})()," (using =)"].join('')));
}

cljs.core.reset_BANG_.call(null,tic_tac_toe.screens.play_spec.state,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"board","board",-1907017633),tic_tac_toe.screens.play_spec.board_3,new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"current-screen","current-screen",-1454713691),new cljs.core.Keyword(null,"play","play",-580418022)], null));


var G__20767 = cljs.core.next.call(null,seq__20216_20747__$1);
var G__20768 = null;
var G__20769 = (0);
var G__20770 = (0);
seq__20216_20724 = G__20767;
chunk__20217_20725 = G__20768;
count__20218_20726 = G__20769;
i__20219_20727 = G__20770;
continue;
}
} else {
}
}
break;
}

var G__20771 = cljs.core.next.call(null,seq__20215_20717__$1);
var G__20772 = null;
var G__20773 = (0);
var G__20774 = (0);
seq__20215_20660 = G__20771;
chunk__20220_20661 = G__20772;
count__20221_20662 = G__20773;
i__20222_20663 = G__20774;
continue;
}
} else {
}
}
break;
}

var G__20775 = seq__20199;
var G__20776 = chunk__20212;
var G__20777 = count__20213;
var G__20778 = (i__20214 + (1));
seq__20199 = G__20775;
chunk__20212 = G__20776;
count__20213 = G__20777;
i__20214 = G__20778;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__20199);
if(temp__5804__auto__){
var seq__20199__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20199__$1)){
var c__5525__auto__ = cljs.core.chunk_first.call(null,seq__20199__$1);
var G__20779 = cljs.core.chunk_rest.call(null,seq__20199__$1);
var G__20780 = c__5525__auto__;
var G__20781 = cljs.core.count.call(null,c__5525__auto__);
var G__20782 = (0);
seq__20199 = G__20779;
chunk__20212 = G__20780;
count__20213 = G__20781;
i__20214 = G__20782;
continue;
} else {
var ai = cljs.core.first.call(null,seq__20199__$1);
var seq__20200_20783 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(3)], null));
var chunk__20205_20784 = null;
var count__20206_20785 = (0);
var i__20207_20786 = (0);
while(true){
if((i__20207_20786 < count__20206_20785)){
var mode_20787 = cljs.core._nth.call(null,chunk__20205_20784,i__20207_20786);
var seq__20208_20788 = cljs.core.seq.call(null,cljs.core.range.call(null,(9)));
var chunk__20209_20789 = null;
var count__20210_20790 = (0);
var i__20211_20791 = (0);
while(true){
if((i__20211_20791 < count__20210_20790)){
var n_20792 = cljs.core._nth.call(null,chunk__20209_20789,i__20211_20791);
cljs.core.swap_BANG_.call(null,tic_tac_toe.screens.play_spec.state,cljs.core.assoc,new cljs.core.Keyword(null,"mode","mode",654403691),mode_20787,new cljs.core.Keyword(null,"first-ai-level","first-ai-level",1004633644),ai,new cljs.core.Keyword(null,"player","player",-97687400),((cljs.core._EQ_.call(null,(2),mode_20787))?new cljs.core.Keyword(null,"x","x",2099068185):new cljs.core.Keyword(null,"o","o",-1350007228)),new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"gui","gui",604532813));

c3kit.wire.spec_helper.render.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tic_tac_toe.render_screen.render_screen,tic_tac_toe.screens.play_spec.state], null));

c3kit.wire.spec_helper.click_BANG_.call(null,["#index-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n_20792)].join(''));

var name__11622__auto___20793 = new cljs.core.Keyword(null,"turn","turn",75759344);
var options__11623__auto___20794 = cljs.core.PersistentArrayMap.EMPTY;
var invocations__11624__auto___20795 = speclj.stub.invocations_of.call(null,name__11622__auto___20793);
var times__11625__auto___20796 = new cljs.core.Keyword(null,"times","times",1671571467).cljs$core$IFn$_invoke$arity$1(options__11623__auto___20794);
var times_QMARK___11626__auto___20797 = typeof times__11625__auto___20796 === 'number';
var check_params_QMARK___11627__auto___20798 = cljs.core.contains_QMARK_.call(null,options__11623__auto___20794,new cljs.core.Keyword(null,"with","with",-1536296876));
var with__11628__auto___20799 = new cljs.core.Keyword(null,"with","with",-1536296876).cljs$core$IFn$_invoke$arity$1(options__11623__auto___20794);
var with__11628__auto___20800__$1 = (((with__11628__auto___20799 == null))?cljs.core.PersistentVector.EMPTY:with__11628__auto___20799);
var invocations_str__11629__auto___20801 = ((function (seq__20208_20788,chunk__20209_20789,count__20210_20790,i__20211_20791,seq__20200_20783,chunk__20205_20784,count__20206_20785,i__20207_20786,seq__20199,chunk__20212,count__20213,i__20214,name__11622__auto___20793,options__11623__auto___20794,invocations__11624__auto___20795,times__11625__auto___20796,times_QMARK___11626__auto___20797,check_params_QMARK___11627__auto___20798,with__11628__auto___20799,with__11628__auto___20800__$1,n_20792,mode_20787,ai,seq__20199__$1,temp__5804__auto__,take_turn_orig_val__20197,take_turn_temp_val__20198,_STAR_parent_description_STAR__orig_val__20055_20430,_STAR_parent_description_STAR__temp_val__20056_20431,description__11238__auto____$1,_STAR_parent_description_STAR__orig_val__19701_20376,_STAR_parent_description_STAR__temp_val__19702_20377,description__11238__auto___20375){
return (function (p1__11619__11630__auto__){
if(cljs.core._EQ_.call(null,(1),p1__11619__11630__auto__)){
return "invocation";
} else {
return "invocations";
}
});})(seq__20208_20788,chunk__20209_20789,count__20210_20790,i__20211_20791,seq__20200_20783,chunk__20205_20784,count__20206_20785,i__20207_20786,seq__20199,chunk__20212,count__20213,i__20214,name__11622__auto___20793,options__11623__auto___20794,invocations__11624__auto___20795,times__11625__auto___20796,times_QMARK___11626__auto___20797,check_params_QMARK___11627__auto___20798,with__11628__auto___20799,with__11628__auto___20800__$1,n_20792,mode_20787,ai,seq__20199__$1,temp__5804__auto__,take_turn_orig_val__20197,take_turn_temp_val__20198,_STAR_parent_description_STAR__orig_val__20055_20430,_STAR_parent_description_STAR__temp_val__20056_20431,description__11238__auto____$1,_STAR_parent_description_STAR__orig_val__19701_20376,_STAR_parent_description_STAR__temp_val__19702_20377,description__11238__auto___20375))
;
if(((times_QMARK___11626__auto___20797) && (check_params_QMARK___11627__auto___20798))){
var matching_invocations__11631__auto___20802 = cljs.core.filter.call(null,((function (seq__20208_20788,chunk__20209_20789,count__20210_20790,i__20211_20791,seq__20200_20783,chunk__20205_20784,count__20206_20785,i__20207_20786,seq__20199,chunk__20212,count__20213,i__20214,name__11622__auto___20793,options__11623__auto___20794,invocations__11624__auto___20795,times__11625__auto___20796,times_QMARK___11626__auto___20797,check_params_QMARK___11627__auto___20798,with__11628__auto___20799,with__11628__auto___20800__$1,invocations_str__11629__auto___20801,n_20792,mode_20787,ai,seq__20199__$1,temp__5804__auto__,take_turn_orig_val__20197,take_turn_temp_val__20198,_STAR_parent_description_STAR__orig_val__20055_20430,_STAR_parent_description_STAR__temp_val__20056_20431,description__11238__auto____$1,_STAR_parent_description_STAR__orig_val__19701_20376,_STAR_parent_description_STAR__temp_val__19702_20377,description__11238__auto___20375){
return (function (p1__11620__11632__auto__){
return speclj.stub.params_match_QMARK_.call(null,with__11628__auto___20800__$1,p1__11620__11632__auto__);
});})(seq__20208_20788,chunk__20209_20789,count__20210_20790,i__20211_20791,seq__20200_20783,chunk__20205_20784,count__20206_20785,i__20207_20786,seq__20199,chunk__20212,count__20213,i__20214,name__11622__auto___20793,options__11623__auto___20794,invocations__11624__auto___20795,times__11625__auto___20796,times_QMARK___11626__auto___20797,check_params_QMARK___11627__auto___20798,with__11628__auto___20799,with__11628__auto___20800__$1,invocations_str__11629__auto___20801,n_20792,mode_20787,ai,seq__20199__$1,temp__5804__auto__,take_turn_orig_val__20197,take_turn_temp_val__20198,_STAR_parent_description_STAR__orig_val__20055_20430,_STAR_parent_description_STAR__temp_val__20056_20431,description__11238__auto____$1,_STAR_parent_description_STAR__orig_val__19701_20376,_STAR_parent_description_STAR__temp_val__19702_20377,description__11238__auto___20375))
,invocations__11624__auto___20795);
var matching_count__11633__auto___20803 = cljs.core.count.call(null,matching_invocations__11631__auto___20802);
if(cljs.core._EQ_.call(null,times__11625__auto___20796,matching_count__11633__auto___20803)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(times__11625__auto___20796)," ",invocations_str__11629__auto___20801.call(null,times__11625__auto___20796)," of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__11622__auto___20793)," with ",cljs.core.pr_str.call(null,with__11628__auto___20800__$1),speclj.platform.endl,"     got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(matching_count__11633__auto___20803)," ",invocations_str__11629__auto___20801.call(null,matching_count__11633__auto___20803)].join('')));
}
} else {
if(check_params_QMARK___11627__auto___20798){
if(cljs.core.truth_(cljs.core.some.call(null,((function (seq__20208_20788,chunk__20209_20789,count__20210_20790,i__20211_20791,seq__20200_20783,chunk__20205_20784,count__20206_20785,i__20207_20786,seq__20199,chunk__20212,count__20213,i__20214,name__11622__auto___20793,options__11623__auto___20794,invocations__11624__auto___20795,times__11625__auto___20796,times_QMARK___11626__auto___20797,check_params_QMARK___11627__auto___20798,with__11628__auto___20799,with__11628__auto___20800__$1,invocations_str__11629__auto___20801,n_20792,mode_20787,ai,seq__20199__$1,temp__5804__auto__,take_turn_orig_val__20197,take_turn_temp_val__20198,_STAR_parent_description_STAR__orig_val__20055_20430,_STAR_parent_description_STAR__temp_val__20056_20431,description__11238__auto____$1,_STAR_parent_description_STAR__orig_val__19701_20376,_STAR_parent_description_STAR__temp_val__19702_20377,description__11238__auto___20375){
return (function (p1__11621__11634__auto__){
return speclj.stub.params_match_QMARK_.call(null,with__11628__auto___20800__$1,p1__11621__11634__auto__);
});})(seq__20208_20788,chunk__20209_20789,count__20210_20790,i__20211_20791,seq__20200_20783,chunk__20205_20784,count__20206_20785,i__20207_20786,seq__20199,chunk__20212,count__20213,i__20214,name__11622__auto___20793,options__11623__auto___20794,invocations__11624__auto___20795,times__11625__auto___20796,times_QMARK___11626__auto___20797,check_params_QMARK___11627__auto___20798,with__11628__auto___20799,with__11628__auto___20800__$1,invocations_str__11629__auto___20801,n_20792,mode_20787,ai,seq__20199__$1,temp__5804__auto__,take_turn_orig_val__20197,take_turn_temp_val__20198,_STAR_parent_description_STAR__orig_val__20055_20430,_STAR_parent_description_STAR__temp_val__20056_20431,description__11238__auto____$1,_STAR_parent_description_STAR__orig_val__19701_20376,_STAR_parent_description_STAR__temp_val__19702_20377,description__11238__auto___20375))
,invocations__11624__auto___20795))){
} else {
throw (new speclj.platform.SpecFailure(["Expected: invocation of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__11622__auto___20793)," with ",cljs.core.pr_str.call(null,with__11628__auto___20800__$1),speclj.platform.endl,"     got: ",cljs.core.pr_str.call(null,invocations__11624__auto___20795)].join('')));
}
} else {
if(times_QMARK___11626__auto___20797){
if(cljs.core._EQ_.call(null,times__11625__auto___20796,cljs.core.count.call(null,invocations__11624__auto___20795))){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(times__11625__auto___20796)," ",invocations_str__11629__auto___20801.call(null,times__11625__auto___20796)," of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__11622__auto___20793),speclj.platform.endl,"     got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,invocations__11624__auto___20795))].join('')));
}
} else {
if(cljs.core.seq.call(null,invocations__11624__auto___20795)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: an invocation of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__11622__auto___20793),speclj.platform.endl,"     got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,invocations__11624__auto___20795))].join('')));
}

}
}
}

var expected__11375__auto___20804 = ((cljs.core._EQ_.call(null,(2),mode_20787))?new cljs.core.Keyword(null,"x","x",2099068185):new cljs.core.Keyword(null,"o","o",-1350007228));
var actual__11376__auto___20805 = new cljs.core.Keyword(null,"player","player",-97687400).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.screens.play_spec.state));
if(cljs.core._EQ_.call(null,expected__11375__auto___20804,actual__11376__auto___20805)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__11375__auto___20804;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11343__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11343__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__11376__auto___20805;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11343__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11343__auto__);
}
})()," (using =)"].join('')));
}

cljs.core.reset_BANG_.call(null,tic_tac_toe.screens.play_spec.state,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"board","board",-1907017633),tic_tac_toe.screens.play_spec.board_3,new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"current-screen","current-screen",-1454713691),new cljs.core.Keyword(null,"play","play",-580418022)], null));


var G__20806 = seq__20208_20788;
var G__20807 = chunk__20209_20789;
var G__20808 = count__20210_20790;
var G__20809 = (i__20211_20791 + (1));
seq__20208_20788 = G__20806;
chunk__20209_20789 = G__20807;
count__20210_20790 = G__20808;
i__20211_20791 = G__20809;
continue;
} else {
var temp__5804__auto___20810__$1 = cljs.core.seq.call(null,seq__20208_20788);
if(temp__5804__auto___20810__$1){
var seq__20208_20811__$1 = temp__5804__auto___20810__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20208_20811__$1)){
var c__5525__auto___20812 = cljs.core.chunk_first.call(null,seq__20208_20811__$1);
var G__20813 = cljs.core.chunk_rest.call(null,seq__20208_20811__$1);
var G__20814 = c__5525__auto___20812;
var G__20815 = cljs.core.count.call(null,c__5525__auto___20812);
var G__20816 = (0);
seq__20208_20788 = G__20813;
chunk__20209_20789 = G__20814;
count__20210_20790 = G__20815;
i__20211_20791 = G__20816;
continue;
} else {
var n_20817 = cljs.core.first.call(null,seq__20208_20811__$1);
cljs.core.swap_BANG_.call(null,tic_tac_toe.screens.play_spec.state,cljs.core.assoc,new cljs.core.Keyword(null,"mode","mode",654403691),mode_20787,new cljs.core.Keyword(null,"first-ai-level","first-ai-level",1004633644),ai,new cljs.core.Keyword(null,"player","player",-97687400),((cljs.core._EQ_.call(null,(2),mode_20787))?new cljs.core.Keyword(null,"x","x",2099068185):new cljs.core.Keyword(null,"o","o",-1350007228)),new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"gui","gui",604532813));

c3kit.wire.spec_helper.render.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tic_tac_toe.render_screen.render_screen,tic_tac_toe.screens.play_spec.state], null));

c3kit.wire.spec_helper.click_BANG_.call(null,["#index-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n_20817)].join(''));

var name__11622__auto___20818 = new cljs.core.Keyword(null,"turn","turn",75759344);
var options__11623__auto___20819 = cljs.core.PersistentArrayMap.EMPTY;
var invocations__11624__auto___20820 = speclj.stub.invocations_of.call(null,name__11622__auto___20818);
var times__11625__auto___20821 = new cljs.core.Keyword(null,"times","times",1671571467).cljs$core$IFn$_invoke$arity$1(options__11623__auto___20819);
var times_QMARK___11626__auto___20822 = typeof times__11625__auto___20821 === 'number';
var check_params_QMARK___11627__auto___20823 = cljs.core.contains_QMARK_.call(null,options__11623__auto___20819,new cljs.core.Keyword(null,"with","with",-1536296876));
var with__11628__auto___20824 = new cljs.core.Keyword(null,"with","with",-1536296876).cljs$core$IFn$_invoke$arity$1(options__11623__auto___20819);
var with__11628__auto___20825__$1 = (((with__11628__auto___20824 == null))?cljs.core.PersistentVector.EMPTY:with__11628__auto___20824);
var invocations_str__11629__auto___20826 = ((function (seq__20208_20788,chunk__20209_20789,count__20210_20790,i__20211_20791,seq__20200_20783,chunk__20205_20784,count__20206_20785,i__20207_20786,seq__20199,chunk__20212,count__20213,i__20214,name__11622__auto___20818,options__11623__auto___20819,invocations__11624__auto___20820,times__11625__auto___20821,times_QMARK___11626__auto___20822,check_params_QMARK___11627__auto___20823,with__11628__auto___20824,with__11628__auto___20825__$1,n_20817,seq__20208_20811__$1,temp__5804__auto___20810__$1,mode_20787,ai,seq__20199__$1,temp__5804__auto__,take_turn_orig_val__20197,take_turn_temp_val__20198,_STAR_parent_description_STAR__orig_val__20055_20430,_STAR_parent_description_STAR__temp_val__20056_20431,description__11238__auto____$1,_STAR_parent_description_STAR__orig_val__19701_20376,_STAR_parent_description_STAR__temp_val__19702_20377,description__11238__auto___20375){
return (function (p1__11619__11630__auto__){
if(cljs.core._EQ_.call(null,(1),p1__11619__11630__auto__)){
return "invocation";
} else {
return "invocations";
}
});})(seq__20208_20788,chunk__20209_20789,count__20210_20790,i__20211_20791,seq__20200_20783,chunk__20205_20784,count__20206_20785,i__20207_20786,seq__20199,chunk__20212,count__20213,i__20214,name__11622__auto___20818,options__11623__auto___20819,invocations__11624__auto___20820,times__11625__auto___20821,times_QMARK___11626__auto___20822,check_params_QMARK___11627__auto___20823,with__11628__auto___20824,with__11628__auto___20825__$1,n_20817,seq__20208_20811__$1,temp__5804__auto___20810__$1,mode_20787,ai,seq__20199__$1,temp__5804__auto__,take_turn_orig_val__20197,take_turn_temp_val__20198,_STAR_parent_description_STAR__orig_val__20055_20430,_STAR_parent_description_STAR__temp_val__20056_20431,description__11238__auto____$1,_STAR_parent_description_STAR__orig_val__19701_20376,_STAR_parent_description_STAR__temp_val__19702_20377,description__11238__auto___20375))
;
if(((times_QMARK___11626__auto___20822) && (check_params_QMARK___11627__auto___20823))){
var matching_invocations__11631__auto___20827 = cljs.core.filter.call(null,((function (seq__20208_20788,chunk__20209_20789,count__20210_20790,i__20211_20791,seq__20200_20783,chunk__20205_20784,count__20206_20785,i__20207_20786,seq__20199,chunk__20212,count__20213,i__20214,name__11622__auto___20818,options__11623__auto___20819,invocations__11624__auto___20820,times__11625__auto___20821,times_QMARK___11626__auto___20822,check_params_QMARK___11627__auto___20823,with__11628__auto___20824,with__11628__auto___20825__$1,invocations_str__11629__auto___20826,n_20817,seq__20208_20811__$1,temp__5804__auto___20810__$1,mode_20787,ai,seq__20199__$1,temp__5804__auto__,take_turn_orig_val__20197,take_turn_temp_val__20198,_STAR_parent_description_STAR__orig_val__20055_20430,_STAR_parent_description_STAR__temp_val__20056_20431,description__11238__auto____$1,_STAR_parent_description_STAR__orig_val__19701_20376,_STAR_parent_description_STAR__temp_val__19702_20377,description__11238__auto___20375){
return (function (p1__11620__11632__auto__){
return speclj.stub.params_match_QMARK_.call(null,with__11628__auto___20825__$1,p1__11620__11632__auto__);
});})(seq__20208_20788,chunk__20209_20789,count__20210_20790,i__20211_20791,seq__20200_20783,chunk__20205_20784,count__20206_20785,i__20207_20786,seq__20199,chunk__20212,count__20213,i__20214,name__11622__auto___20818,options__11623__auto___20819,invocations__11624__auto___20820,times__11625__auto___20821,times_QMARK___11626__auto___20822,check_params_QMARK___11627__auto___20823,with__11628__auto___20824,with__11628__auto___20825__$1,invocations_str__11629__auto___20826,n_20817,seq__20208_20811__$1,temp__5804__auto___20810__$1,mode_20787,ai,seq__20199__$1,temp__5804__auto__,take_turn_orig_val__20197,take_turn_temp_val__20198,_STAR_parent_description_STAR__orig_val__20055_20430,_STAR_parent_description_STAR__temp_val__20056_20431,description__11238__auto____$1,_STAR_parent_description_STAR__orig_val__19701_20376,_STAR_parent_description_STAR__temp_val__19702_20377,description__11238__auto___20375))
,invocations__11624__auto___20820);
var matching_count__11633__auto___20828 = cljs.core.count.call(null,matching_invocations__11631__auto___20827);
if(cljs.core._EQ_.call(null,times__11625__auto___20821,matching_count__11633__auto___20828)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(times__11625__auto___20821)," ",invocations_str__11629__auto___20826.call(null,times__11625__auto___20821)," of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__11622__auto___20818)," with ",cljs.core.pr_str.call(null,with__11628__auto___20825__$1),speclj.platform.endl,"     got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(matching_count__11633__auto___20828)," ",invocations_str__11629__auto___20826.call(null,matching_count__11633__auto___20828)].join('')));
}
} else {
if(check_params_QMARK___11627__auto___20823){
if(cljs.core.truth_(cljs.core.some.call(null,((function (seq__20208_20788,chunk__20209_20789,count__20210_20790,i__20211_20791,seq__20200_20783,chunk__20205_20784,count__20206_20785,i__20207_20786,seq__20199,chunk__20212,count__20213,i__20214,name__11622__auto___20818,options__11623__auto___20819,invocations__11624__auto___20820,times__11625__auto___20821,times_QMARK___11626__auto___20822,check_params_QMARK___11627__auto___20823,with__11628__auto___20824,with__11628__auto___20825__$1,invocations_str__11629__auto___20826,n_20817,seq__20208_20811__$1,temp__5804__auto___20810__$1,mode_20787,ai,seq__20199__$1,temp__5804__auto__,take_turn_orig_val__20197,take_turn_temp_val__20198,_STAR_parent_description_STAR__orig_val__20055_20430,_STAR_parent_description_STAR__temp_val__20056_20431,description__11238__auto____$1,_STAR_parent_description_STAR__orig_val__19701_20376,_STAR_parent_description_STAR__temp_val__19702_20377,description__11238__auto___20375){
return (function (p1__11621__11634__auto__){
return speclj.stub.params_match_QMARK_.call(null,with__11628__auto___20825__$1,p1__11621__11634__auto__);
});})(seq__20208_20788,chunk__20209_20789,count__20210_20790,i__20211_20791,seq__20200_20783,chunk__20205_20784,count__20206_20785,i__20207_20786,seq__20199,chunk__20212,count__20213,i__20214,name__11622__auto___20818,options__11623__auto___20819,invocations__11624__auto___20820,times__11625__auto___20821,times_QMARK___11626__auto___20822,check_params_QMARK___11627__auto___20823,with__11628__auto___20824,with__11628__auto___20825__$1,invocations_str__11629__auto___20826,n_20817,seq__20208_20811__$1,temp__5804__auto___20810__$1,mode_20787,ai,seq__20199__$1,temp__5804__auto__,take_turn_orig_val__20197,take_turn_temp_val__20198,_STAR_parent_description_STAR__orig_val__20055_20430,_STAR_parent_description_STAR__temp_val__20056_20431,description__11238__auto____$1,_STAR_parent_description_STAR__orig_val__19701_20376,_STAR_parent_description_STAR__temp_val__19702_20377,description__11238__auto___20375))
,invocations__11624__auto___20820))){
} else {
throw (new speclj.platform.SpecFailure(["Expected: invocation of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__11622__auto___20818)," with ",cljs.core.pr_str.call(null,with__11628__auto___20825__$1),speclj.platform.endl,"     got: ",cljs.core.pr_str.call(null,invocations__11624__auto___20820)].join('')));
}
} else {
if(times_QMARK___11626__auto___20822){
if(cljs.core._EQ_.call(null,times__11625__auto___20821,cljs.core.count.call(null,invocations__11624__auto___20820))){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(times__11625__auto___20821)," ",invocations_str__11629__auto___20826.call(null,times__11625__auto___20821)," of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__11622__auto___20818),speclj.platform.endl,"     got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,invocations__11624__auto___20820))].join('')));
}
} else {
if(cljs.core.seq.call(null,invocations__11624__auto___20820)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: an invocation of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__11622__auto___20818),speclj.platform.endl,"     got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,invocations__11624__auto___20820))].join('')));
}

}
}
}

var expected__11375__auto___20829 = ((cljs.core._EQ_.call(null,(2),mode_20787))?new cljs.core.Keyword(null,"x","x",2099068185):new cljs.core.Keyword(null,"o","o",-1350007228));
var actual__11376__auto___20830 = new cljs.core.Keyword(null,"player","player",-97687400).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.screens.play_spec.state));
if(cljs.core._EQ_.call(null,expected__11375__auto___20829,actual__11376__auto___20830)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__11375__auto___20829;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11343__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11343__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__11376__auto___20830;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11343__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11343__auto__);
}
})()," (using =)"].join('')));
}

cljs.core.reset_BANG_.call(null,tic_tac_toe.screens.play_spec.state,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"board","board",-1907017633),tic_tac_toe.screens.play_spec.board_3,new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"current-screen","current-screen",-1454713691),new cljs.core.Keyword(null,"play","play",-580418022)], null));


var G__20831 = cljs.core.next.call(null,seq__20208_20811__$1);
var G__20832 = null;
var G__20833 = (0);
var G__20834 = (0);
seq__20208_20788 = G__20831;
chunk__20209_20789 = G__20832;
count__20210_20790 = G__20833;
i__20211_20791 = G__20834;
continue;
}
} else {
}
}
break;
}

var G__20835 = seq__20200_20783;
var G__20836 = chunk__20205_20784;
var G__20837 = count__20206_20785;
var G__20838 = (i__20207_20786 + (1));
seq__20200_20783 = G__20835;
chunk__20205_20784 = G__20836;
count__20206_20785 = G__20837;
i__20207_20786 = G__20838;
continue;
} else {
var temp__5804__auto___20839__$1 = cljs.core.seq.call(null,seq__20200_20783);
if(temp__5804__auto___20839__$1){
var seq__20200_20840__$1 = temp__5804__auto___20839__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20200_20840__$1)){
var c__5525__auto___20841 = cljs.core.chunk_first.call(null,seq__20200_20840__$1);
var G__20842 = cljs.core.chunk_rest.call(null,seq__20200_20840__$1);
var G__20843 = c__5525__auto___20841;
var G__20844 = cljs.core.count.call(null,c__5525__auto___20841);
var G__20845 = (0);
seq__20200_20783 = G__20842;
chunk__20205_20784 = G__20843;
count__20206_20785 = G__20844;
i__20207_20786 = G__20845;
continue;
} else {
var mode_20846 = cljs.core.first.call(null,seq__20200_20840__$1);
var seq__20201_20847 = cljs.core.seq.call(null,cljs.core.range.call(null,(9)));
var chunk__20202_20848 = null;
var count__20203_20849 = (0);
var i__20204_20850 = (0);
while(true){
if((i__20204_20850 < count__20203_20849)){
var n_20851 = cljs.core._nth.call(null,chunk__20202_20848,i__20204_20850);
cljs.core.swap_BANG_.call(null,tic_tac_toe.screens.play_spec.state,cljs.core.assoc,new cljs.core.Keyword(null,"mode","mode",654403691),mode_20846,new cljs.core.Keyword(null,"first-ai-level","first-ai-level",1004633644),ai,new cljs.core.Keyword(null,"player","player",-97687400),((cljs.core._EQ_.call(null,(2),mode_20846))?new cljs.core.Keyword(null,"x","x",2099068185):new cljs.core.Keyword(null,"o","o",-1350007228)),new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"gui","gui",604532813));

c3kit.wire.spec_helper.render.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tic_tac_toe.render_screen.render_screen,tic_tac_toe.screens.play_spec.state], null));

c3kit.wire.spec_helper.click_BANG_.call(null,["#index-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n_20851)].join(''));

var name__11622__auto___20852 = new cljs.core.Keyword(null,"turn","turn",75759344);
var options__11623__auto___20853 = cljs.core.PersistentArrayMap.EMPTY;
var invocations__11624__auto___20854 = speclj.stub.invocations_of.call(null,name__11622__auto___20852);
var times__11625__auto___20855 = new cljs.core.Keyword(null,"times","times",1671571467).cljs$core$IFn$_invoke$arity$1(options__11623__auto___20853);
var times_QMARK___11626__auto___20856 = typeof times__11625__auto___20855 === 'number';
var check_params_QMARK___11627__auto___20857 = cljs.core.contains_QMARK_.call(null,options__11623__auto___20853,new cljs.core.Keyword(null,"with","with",-1536296876));
var with__11628__auto___20858 = new cljs.core.Keyword(null,"with","with",-1536296876).cljs$core$IFn$_invoke$arity$1(options__11623__auto___20853);
var with__11628__auto___20859__$1 = (((with__11628__auto___20858 == null))?cljs.core.PersistentVector.EMPTY:with__11628__auto___20858);
var invocations_str__11629__auto___20860 = ((function (seq__20201_20847,chunk__20202_20848,count__20203_20849,i__20204_20850,seq__20200_20783,chunk__20205_20784,count__20206_20785,i__20207_20786,seq__20199,chunk__20212,count__20213,i__20214,name__11622__auto___20852,options__11623__auto___20853,invocations__11624__auto___20854,times__11625__auto___20855,times_QMARK___11626__auto___20856,check_params_QMARK___11627__auto___20857,with__11628__auto___20858,with__11628__auto___20859__$1,n_20851,mode_20846,seq__20200_20840__$1,temp__5804__auto___20839__$1,ai,seq__20199__$1,temp__5804__auto__,take_turn_orig_val__20197,take_turn_temp_val__20198,_STAR_parent_description_STAR__orig_val__20055_20430,_STAR_parent_description_STAR__temp_val__20056_20431,description__11238__auto____$1,_STAR_parent_description_STAR__orig_val__19701_20376,_STAR_parent_description_STAR__temp_val__19702_20377,description__11238__auto___20375){
return (function (p1__11619__11630__auto__){
if(cljs.core._EQ_.call(null,(1),p1__11619__11630__auto__)){
return "invocation";
} else {
return "invocations";
}
});})(seq__20201_20847,chunk__20202_20848,count__20203_20849,i__20204_20850,seq__20200_20783,chunk__20205_20784,count__20206_20785,i__20207_20786,seq__20199,chunk__20212,count__20213,i__20214,name__11622__auto___20852,options__11623__auto___20853,invocations__11624__auto___20854,times__11625__auto___20855,times_QMARK___11626__auto___20856,check_params_QMARK___11627__auto___20857,with__11628__auto___20858,with__11628__auto___20859__$1,n_20851,mode_20846,seq__20200_20840__$1,temp__5804__auto___20839__$1,ai,seq__20199__$1,temp__5804__auto__,take_turn_orig_val__20197,take_turn_temp_val__20198,_STAR_parent_description_STAR__orig_val__20055_20430,_STAR_parent_description_STAR__temp_val__20056_20431,description__11238__auto____$1,_STAR_parent_description_STAR__orig_val__19701_20376,_STAR_parent_description_STAR__temp_val__19702_20377,description__11238__auto___20375))
;
if(((times_QMARK___11626__auto___20856) && (check_params_QMARK___11627__auto___20857))){
var matching_invocations__11631__auto___20861 = cljs.core.filter.call(null,((function (seq__20201_20847,chunk__20202_20848,count__20203_20849,i__20204_20850,seq__20200_20783,chunk__20205_20784,count__20206_20785,i__20207_20786,seq__20199,chunk__20212,count__20213,i__20214,name__11622__auto___20852,options__11623__auto___20853,invocations__11624__auto___20854,times__11625__auto___20855,times_QMARK___11626__auto___20856,check_params_QMARK___11627__auto___20857,with__11628__auto___20858,with__11628__auto___20859__$1,invocations_str__11629__auto___20860,n_20851,mode_20846,seq__20200_20840__$1,temp__5804__auto___20839__$1,ai,seq__20199__$1,temp__5804__auto__,take_turn_orig_val__20197,take_turn_temp_val__20198,_STAR_parent_description_STAR__orig_val__20055_20430,_STAR_parent_description_STAR__temp_val__20056_20431,description__11238__auto____$1,_STAR_parent_description_STAR__orig_val__19701_20376,_STAR_parent_description_STAR__temp_val__19702_20377,description__11238__auto___20375){
return (function (p1__11620__11632__auto__){
return speclj.stub.params_match_QMARK_.call(null,with__11628__auto___20859__$1,p1__11620__11632__auto__);
});})(seq__20201_20847,chunk__20202_20848,count__20203_20849,i__20204_20850,seq__20200_20783,chunk__20205_20784,count__20206_20785,i__20207_20786,seq__20199,chunk__20212,count__20213,i__20214,name__11622__auto___20852,options__11623__auto___20853,invocations__11624__auto___20854,times__11625__auto___20855,times_QMARK___11626__auto___20856,check_params_QMARK___11627__auto___20857,with__11628__auto___20858,with__11628__auto___20859__$1,invocations_str__11629__auto___20860,n_20851,mode_20846,seq__20200_20840__$1,temp__5804__auto___20839__$1,ai,seq__20199__$1,temp__5804__auto__,take_turn_orig_val__20197,take_turn_temp_val__20198,_STAR_parent_description_STAR__orig_val__20055_20430,_STAR_parent_description_STAR__temp_val__20056_20431,description__11238__auto____$1,_STAR_parent_description_STAR__orig_val__19701_20376,_STAR_parent_description_STAR__temp_val__19702_20377,description__11238__auto___20375))
,invocations__11624__auto___20854);
var matching_count__11633__auto___20862 = cljs.core.count.call(null,matching_invocations__11631__auto___20861);
if(cljs.core._EQ_.call(null,times__11625__auto___20855,matching_count__11633__auto___20862)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(times__11625__auto___20855)," ",invocations_str__11629__auto___20860.call(null,times__11625__auto___20855)," of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__11622__auto___20852)," with ",cljs.core.pr_str.call(null,with__11628__auto___20859__$1),speclj.platform.endl,"     got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(matching_count__11633__auto___20862)," ",invocations_str__11629__auto___20860.call(null,matching_count__11633__auto___20862)].join('')));
}
} else {
if(check_params_QMARK___11627__auto___20857){
if(cljs.core.truth_(cljs.core.some.call(null,((function (seq__20201_20847,chunk__20202_20848,count__20203_20849,i__20204_20850,seq__20200_20783,chunk__20205_20784,count__20206_20785,i__20207_20786,seq__20199,chunk__20212,count__20213,i__20214,name__11622__auto___20852,options__11623__auto___20853,invocations__11624__auto___20854,times__11625__auto___20855,times_QMARK___11626__auto___20856,check_params_QMARK___11627__auto___20857,with__11628__auto___20858,with__11628__auto___20859__$1,invocations_str__11629__auto___20860,n_20851,mode_20846,seq__20200_20840__$1,temp__5804__auto___20839__$1,ai,seq__20199__$1,temp__5804__auto__,take_turn_orig_val__20197,take_turn_temp_val__20198,_STAR_parent_description_STAR__orig_val__20055_20430,_STAR_parent_description_STAR__temp_val__20056_20431,description__11238__auto____$1,_STAR_parent_description_STAR__orig_val__19701_20376,_STAR_parent_description_STAR__temp_val__19702_20377,description__11238__auto___20375){
return (function (p1__11621__11634__auto__){
return speclj.stub.params_match_QMARK_.call(null,with__11628__auto___20859__$1,p1__11621__11634__auto__);
});})(seq__20201_20847,chunk__20202_20848,count__20203_20849,i__20204_20850,seq__20200_20783,chunk__20205_20784,count__20206_20785,i__20207_20786,seq__20199,chunk__20212,count__20213,i__20214,name__11622__auto___20852,options__11623__auto___20853,invocations__11624__auto___20854,times__11625__auto___20855,times_QMARK___11626__auto___20856,check_params_QMARK___11627__auto___20857,with__11628__auto___20858,with__11628__auto___20859__$1,invocations_str__11629__auto___20860,n_20851,mode_20846,seq__20200_20840__$1,temp__5804__auto___20839__$1,ai,seq__20199__$1,temp__5804__auto__,take_turn_orig_val__20197,take_turn_temp_val__20198,_STAR_parent_description_STAR__orig_val__20055_20430,_STAR_parent_description_STAR__temp_val__20056_20431,description__11238__auto____$1,_STAR_parent_description_STAR__orig_val__19701_20376,_STAR_parent_description_STAR__temp_val__19702_20377,description__11238__auto___20375))
,invocations__11624__auto___20854))){
} else {
throw (new speclj.platform.SpecFailure(["Expected: invocation of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__11622__auto___20852)," with ",cljs.core.pr_str.call(null,with__11628__auto___20859__$1),speclj.platform.endl,"     got: ",cljs.core.pr_str.call(null,invocations__11624__auto___20854)].join('')));
}
} else {
if(times_QMARK___11626__auto___20856){
if(cljs.core._EQ_.call(null,times__11625__auto___20855,cljs.core.count.call(null,invocations__11624__auto___20854))){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(times__11625__auto___20855)," ",invocations_str__11629__auto___20860.call(null,times__11625__auto___20855)," of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__11622__auto___20852),speclj.platform.endl,"     got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,invocations__11624__auto___20854))].join('')));
}
} else {
if(cljs.core.seq.call(null,invocations__11624__auto___20854)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: an invocation of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__11622__auto___20852),speclj.platform.endl,"     got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,invocations__11624__auto___20854))].join('')));
}

}
}
}

var expected__11375__auto___20863 = ((cljs.core._EQ_.call(null,(2),mode_20846))?new cljs.core.Keyword(null,"x","x",2099068185):new cljs.core.Keyword(null,"o","o",-1350007228));
var actual__11376__auto___20864 = new cljs.core.Keyword(null,"player","player",-97687400).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.screens.play_spec.state));
if(cljs.core._EQ_.call(null,expected__11375__auto___20863,actual__11376__auto___20864)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__11375__auto___20863;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11343__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11343__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__11376__auto___20864;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11343__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11343__auto__);
}
})()," (using =)"].join('')));
}

cljs.core.reset_BANG_.call(null,tic_tac_toe.screens.play_spec.state,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"board","board",-1907017633),tic_tac_toe.screens.play_spec.board_3,new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"current-screen","current-screen",-1454713691),new cljs.core.Keyword(null,"play","play",-580418022)], null));


var G__20865 = seq__20201_20847;
var G__20866 = chunk__20202_20848;
var G__20867 = count__20203_20849;
var G__20868 = (i__20204_20850 + (1));
seq__20201_20847 = G__20865;
chunk__20202_20848 = G__20866;
count__20203_20849 = G__20867;
i__20204_20850 = G__20868;
continue;
} else {
var temp__5804__auto___20869__$2 = cljs.core.seq.call(null,seq__20201_20847);
if(temp__5804__auto___20869__$2){
var seq__20201_20870__$1 = temp__5804__auto___20869__$2;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20201_20870__$1)){
var c__5525__auto___20871 = cljs.core.chunk_first.call(null,seq__20201_20870__$1);
var G__20872 = cljs.core.chunk_rest.call(null,seq__20201_20870__$1);
var G__20873 = c__5525__auto___20871;
var G__20874 = cljs.core.count.call(null,c__5525__auto___20871);
var G__20875 = (0);
seq__20201_20847 = G__20872;
chunk__20202_20848 = G__20873;
count__20203_20849 = G__20874;
i__20204_20850 = G__20875;
continue;
} else {
var n_20876 = cljs.core.first.call(null,seq__20201_20870__$1);
cljs.core.swap_BANG_.call(null,tic_tac_toe.screens.play_spec.state,cljs.core.assoc,new cljs.core.Keyword(null,"mode","mode",654403691),mode_20846,new cljs.core.Keyword(null,"first-ai-level","first-ai-level",1004633644),ai,new cljs.core.Keyword(null,"player","player",-97687400),((cljs.core._EQ_.call(null,(2),mode_20846))?new cljs.core.Keyword(null,"x","x",2099068185):new cljs.core.Keyword(null,"o","o",-1350007228)),new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"gui","gui",604532813));

c3kit.wire.spec_helper.render.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tic_tac_toe.render_screen.render_screen,tic_tac_toe.screens.play_spec.state], null));

c3kit.wire.spec_helper.click_BANG_.call(null,["#index-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n_20876)].join(''));

var name__11622__auto___20877 = new cljs.core.Keyword(null,"turn","turn",75759344);
var options__11623__auto___20878 = cljs.core.PersistentArrayMap.EMPTY;
var invocations__11624__auto___20879 = speclj.stub.invocations_of.call(null,name__11622__auto___20877);
var times__11625__auto___20880 = new cljs.core.Keyword(null,"times","times",1671571467).cljs$core$IFn$_invoke$arity$1(options__11623__auto___20878);
var times_QMARK___11626__auto___20881 = typeof times__11625__auto___20880 === 'number';
var check_params_QMARK___11627__auto___20882 = cljs.core.contains_QMARK_.call(null,options__11623__auto___20878,new cljs.core.Keyword(null,"with","with",-1536296876));
var with__11628__auto___20883 = new cljs.core.Keyword(null,"with","with",-1536296876).cljs$core$IFn$_invoke$arity$1(options__11623__auto___20878);
var with__11628__auto___20884__$1 = (((with__11628__auto___20883 == null))?cljs.core.PersistentVector.EMPTY:with__11628__auto___20883);
var invocations_str__11629__auto___20885 = ((function (seq__20201_20847,chunk__20202_20848,count__20203_20849,i__20204_20850,seq__20200_20783,chunk__20205_20784,count__20206_20785,i__20207_20786,seq__20199,chunk__20212,count__20213,i__20214,name__11622__auto___20877,options__11623__auto___20878,invocations__11624__auto___20879,times__11625__auto___20880,times_QMARK___11626__auto___20881,check_params_QMARK___11627__auto___20882,with__11628__auto___20883,with__11628__auto___20884__$1,n_20876,seq__20201_20870__$1,temp__5804__auto___20869__$2,mode_20846,seq__20200_20840__$1,temp__5804__auto___20839__$1,ai,seq__20199__$1,temp__5804__auto__,take_turn_orig_val__20197,take_turn_temp_val__20198,_STAR_parent_description_STAR__orig_val__20055_20430,_STAR_parent_description_STAR__temp_val__20056_20431,description__11238__auto____$1,_STAR_parent_description_STAR__orig_val__19701_20376,_STAR_parent_description_STAR__temp_val__19702_20377,description__11238__auto___20375){
return (function (p1__11619__11630__auto__){
if(cljs.core._EQ_.call(null,(1),p1__11619__11630__auto__)){
return "invocation";
} else {
return "invocations";
}
});})(seq__20201_20847,chunk__20202_20848,count__20203_20849,i__20204_20850,seq__20200_20783,chunk__20205_20784,count__20206_20785,i__20207_20786,seq__20199,chunk__20212,count__20213,i__20214,name__11622__auto___20877,options__11623__auto___20878,invocations__11624__auto___20879,times__11625__auto___20880,times_QMARK___11626__auto___20881,check_params_QMARK___11627__auto___20882,with__11628__auto___20883,with__11628__auto___20884__$1,n_20876,seq__20201_20870__$1,temp__5804__auto___20869__$2,mode_20846,seq__20200_20840__$1,temp__5804__auto___20839__$1,ai,seq__20199__$1,temp__5804__auto__,take_turn_orig_val__20197,take_turn_temp_val__20198,_STAR_parent_description_STAR__orig_val__20055_20430,_STAR_parent_description_STAR__temp_val__20056_20431,description__11238__auto____$1,_STAR_parent_description_STAR__orig_val__19701_20376,_STAR_parent_description_STAR__temp_val__19702_20377,description__11238__auto___20375))
;
if(((times_QMARK___11626__auto___20881) && (check_params_QMARK___11627__auto___20882))){
var matching_invocations__11631__auto___20886 = cljs.core.filter.call(null,((function (seq__20201_20847,chunk__20202_20848,count__20203_20849,i__20204_20850,seq__20200_20783,chunk__20205_20784,count__20206_20785,i__20207_20786,seq__20199,chunk__20212,count__20213,i__20214,name__11622__auto___20877,options__11623__auto___20878,invocations__11624__auto___20879,times__11625__auto___20880,times_QMARK___11626__auto___20881,check_params_QMARK___11627__auto___20882,with__11628__auto___20883,with__11628__auto___20884__$1,invocations_str__11629__auto___20885,n_20876,seq__20201_20870__$1,temp__5804__auto___20869__$2,mode_20846,seq__20200_20840__$1,temp__5804__auto___20839__$1,ai,seq__20199__$1,temp__5804__auto__,take_turn_orig_val__20197,take_turn_temp_val__20198,_STAR_parent_description_STAR__orig_val__20055_20430,_STAR_parent_description_STAR__temp_val__20056_20431,description__11238__auto____$1,_STAR_parent_description_STAR__orig_val__19701_20376,_STAR_parent_description_STAR__temp_val__19702_20377,description__11238__auto___20375){
return (function (p1__11620__11632__auto__){
return speclj.stub.params_match_QMARK_.call(null,with__11628__auto___20884__$1,p1__11620__11632__auto__);
});})(seq__20201_20847,chunk__20202_20848,count__20203_20849,i__20204_20850,seq__20200_20783,chunk__20205_20784,count__20206_20785,i__20207_20786,seq__20199,chunk__20212,count__20213,i__20214,name__11622__auto___20877,options__11623__auto___20878,invocations__11624__auto___20879,times__11625__auto___20880,times_QMARK___11626__auto___20881,check_params_QMARK___11627__auto___20882,with__11628__auto___20883,with__11628__auto___20884__$1,invocations_str__11629__auto___20885,n_20876,seq__20201_20870__$1,temp__5804__auto___20869__$2,mode_20846,seq__20200_20840__$1,temp__5804__auto___20839__$1,ai,seq__20199__$1,temp__5804__auto__,take_turn_orig_val__20197,take_turn_temp_val__20198,_STAR_parent_description_STAR__orig_val__20055_20430,_STAR_parent_description_STAR__temp_val__20056_20431,description__11238__auto____$1,_STAR_parent_description_STAR__orig_val__19701_20376,_STAR_parent_description_STAR__temp_val__19702_20377,description__11238__auto___20375))
,invocations__11624__auto___20879);
var matching_count__11633__auto___20887 = cljs.core.count.call(null,matching_invocations__11631__auto___20886);
if(cljs.core._EQ_.call(null,times__11625__auto___20880,matching_count__11633__auto___20887)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(times__11625__auto___20880)," ",invocations_str__11629__auto___20885.call(null,times__11625__auto___20880)," of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__11622__auto___20877)," with ",cljs.core.pr_str.call(null,with__11628__auto___20884__$1),speclj.platform.endl,"     got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(matching_count__11633__auto___20887)," ",invocations_str__11629__auto___20885.call(null,matching_count__11633__auto___20887)].join('')));
}
} else {
if(check_params_QMARK___11627__auto___20882){
if(cljs.core.truth_(cljs.core.some.call(null,((function (seq__20201_20847,chunk__20202_20848,count__20203_20849,i__20204_20850,seq__20200_20783,chunk__20205_20784,count__20206_20785,i__20207_20786,seq__20199,chunk__20212,count__20213,i__20214,name__11622__auto___20877,options__11623__auto___20878,invocations__11624__auto___20879,times__11625__auto___20880,times_QMARK___11626__auto___20881,check_params_QMARK___11627__auto___20882,with__11628__auto___20883,with__11628__auto___20884__$1,invocations_str__11629__auto___20885,n_20876,seq__20201_20870__$1,temp__5804__auto___20869__$2,mode_20846,seq__20200_20840__$1,temp__5804__auto___20839__$1,ai,seq__20199__$1,temp__5804__auto__,take_turn_orig_val__20197,take_turn_temp_val__20198,_STAR_parent_description_STAR__orig_val__20055_20430,_STAR_parent_description_STAR__temp_val__20056_20431,description__11238__auto____$1,_STAR_parent_description_STAR__orig_val__19701_20376,_STAR_parent_description_STAR__temp_val__19702_20377,description__11238__auto___20375){
return (function (p1__11621__11634__auto__){
return speclj.stub.params_match_QMARK_.call(null,with__11628__auto___20884__$1,p1__11621__11634__auto__);
});})(seq__20201_20847,chunk__20202_20848,count__20203_20849,i__20204_20850,seq__20200_20783,chunk__20205_20784,count__20206_20785,i__20207_20786,seq__20199,chunk__20212,count__20213,i__20214,name__11622__auto___20877,options__11623__auto___20878,invocations__11624__auto___20879,times__11625__auto___20880,times_QMARK___11626__auto___20881,check_params_QMARK___11627__auto___20882,with__11628__auto___20883,with__11628__auto___20884__$1,invocations_str__11629__auto___20885,n_20876,seq__20201_20870__$1,temp__5804__auto___20869__$2,mode_20846,seq__20200_20840__$1,temp__5804__auto___20839__$1,ai,seq__20199__$1,temp__5804__auto__,take_turn_orig_val__20197,take_turn_temp_val__20198,_STAR_parent_description_STAR__orig_val__20055_20430,_STAR_parent_description_STAR__temp_val__20056_20431,description__11238__auto____$1,_STAR_parent_description_STAR__orig_val__19701_20376,_STAR_parent_description_STAR__temp_val__19702_20377,description__11238__auto___20375))
,invocations__11624__auto___20879))){
} else {
throw (new speclj.platform.SpecFailure(["Expected: invocation of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__11622__auto___20877)," with ",cljs.core.pr_str.call(null,with__11628__auto___20884__$1),speclj.platform.endl,"     got: ",cljs.core.pr_str.call(null,invocations__11624__auto___20879)].join('')));
}
} else {
if(times_QMARK___11626__auto___20881){
if(cljs.core._EQ_.call(null,times__11625__auto___20880,cljs.core.count.call(null,invocations__11624__auto___20879))){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(times__11625__auto___20880)," ",invocations_str__11629__auto___20885.call(null,times__11625__auto___20880)," of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__11622__auto___20877),speclj.platform.endl,"     got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,invocations__11624__auto___20879))].join('')));
}
} else {
if(cljs.core.seq.call(null,invocations__11624__auto___20879)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: an invocation of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__11622__auto___20877),speclj.platform.endl,"     got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,invocations__11624__auto___20879))].join('')));
}

}
}
}

var expected__11375__auto___20888 = ((cljs.core._EQ_.call(null,(2),mode_20846))?new cljs.core.Keyword(null,"x","x",2099068185):new cljs.core.Keyword(null,"o","o",-1350007228));
var actual__11376__auto___20889 = new cljs.core.Keyword(null,"player","player",-97687400).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.screens.play_spec.state));
if(cljs.core._EQ_.call(null,expected__11375__auto___20888,actual__11376__auto___20889)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__11375__auto___20888;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11343__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11343__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__11376__auto___20889;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11343__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11343__auto__);
}
})()," (using =)"].join('')));
}

cljs.core.reset_BANG_.call(null,tic_tac_toe.screens.play_spec.state,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"board","board",-1907017633),tic_tac_toe.screens.play_spec.board_3,new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"current-screen","current-screen",-1454713691),new cljs.core.Keyword(null,"play","play",-580418022)], null));


var G__20890 = cljs.core.next.call(null,seq__20201_20870__$1);
var G__20891 = null;
var G__20892 = (0);
var G__20893 = (0);
seq__20201_20847 = G__20890;
chunk__20202_20848 = G__20891;
count__20203_20849 = G__20892;
i__20204_20850 = G__20893;
continue;
}
} else {
}
}
break;
}

var G__20894 = cljs.core.next.call(null,seq__20200_20840__$1);
var G__20895 = null;
var G__20896 = (0);
var G__20897 = (0);
seq__20200_20783 = G__20894;
chunk__20205_20784 = G__20895;
count__20206_20785 = G__20896;
i__20207_20786 = G__20897;
continue;
}
} else {
}
}
break;
}

var G__20898 = cljs.core.next.call(null,seq__20199__$1);
var G__20899 = null;
var G__20900 = (0);
var G__20901 = (0);
seq__20199 = G__20898;
chunk__20212 = G__20899;
count__20213 = G__20900;
i__20214 = G__20901;
continue;
}
} else {
return null;
}
}
break;
}
}finally {(tic_tac_toe.player.take_turn = take_turn_orig_val__20197);
}});})(_STAR_parent_description_STAR__orig_val__20055_20430,_STAR_parent_description_STAR__temp_val__20056_20431,description__11238__auto____$1,_STAR_parent_description_STAR__orig_val__19701_20376,_STAR_parent_description_STAR__temp_val__19702_20377,description__11238__auto___20375))
,false),speclj.components.new_characteristic.call(null,"AI is not triggered if game over",((function (_STAR_parent_description_STAR__orig_val__20055_20430,_STAR_parent_description_STAR__temp_val__20056_20431,description__11238__auto____$1,_STAR_parent_description_STAR__orig_val__19701_20376,_STAR_parent_description_STAR__temp_val__19702_20377,description__11238__auto___20375){
return (function (){
cljs.core.swap_BANG_.call(null,tic_tac_toe.screens.play_spec.state,cljs.core.assoc,new cljs.core.Keyword(null,"board","board",-1907017633),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"x","x",2099068185),(3),new cljs.core.Keyword(null,"o","o",-1350007228),new cljs.core.Keyword(null,"o","o",-1350007228),(6),(7),(8),(9)], null),new cljs.core.Keyword(null,"mode","mode",654403691),(2),new cljs.core.Keyword(null,"first-ai-level","first-ai-level",1004633644),(3));

c3kit.wire.spec_helper.click_BANG_.call(null,"#index-2");

var expected__11375__auto__ = new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"o","o",-1350007228),new cljs.core.Keyword(null,"o","o",-1350007228),(6),(7),(8),(9)], null);
var actual__11376__auto__ = new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.screens.play_spec.state));
if(cljs.core._EQ_.call(null,expected__11375__auto__,actual__11376__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__11375__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11343__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11343__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__11376__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11343__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11343__auto__);
}
})()," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__20055_20430,_STAR_parent_description_STAR__temp_val__20056_20431,description__11238__auto____$1,_STAR_parent_description_STAR__orig_val__19701_20376,_STAR_parent_description_STAR__temp_val__19702_20377,description__11238__auto___20375))
,false),speclj.components.new_characteristic.call(null,"AI updates game state",((function (_STAR_parent_description_STAR__orig_val__20055_20430,_STAR_parent_description_STAR__temp_val__20056_20431,description__11238__auto____$1,_STAR_parent_description_STAR__orig_val__19701_20376,_STAR_parent_description_STAR__temp_val__19702_20377,description__11238__auto___20375){
return (function (){
cljs.core.swap_BANG_.call(null,tic_tac_toe.screens.play_spec.state,cljs.core.assoc,new cljs.core.Keyword(null,"board","board",-1907017633),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"x","x",2099068185),(3),new cljs.core.Keyword(null,"o","o",-1350007228),new cljs.core.Keyword(null,"o","o",-1350007228),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"o","o",-1350007228),new cljs.core.Keyword(null,"o","o",-1350007228),(9)], null),new cljs.core.Keyword(null,"mode","mode",654403691),(2),new cljs.core.Keyword(null,"first-ai-level","first-ai-level",1004633644),(3));

c3kit.wire.spec_helper.click_BANG_.call(null,"#index-8");

var expected__11375__auto__ = "O wins!";
var actual__11376__auto__ = new cljs.core.Keyword(null,"game-state","game-state",935682735).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.screens.play_spec.state));
if(cljs.core._EQ_.call(null,expected__11375__auto__,actual__11376__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__11375__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11343__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11343__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__11376__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11343__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11343__auto__);
}
})()," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__20055_20430,_STAR_parent_description_STAR__temp_val__20056_20431,description__11238__auto____$1,_STAR_parent_description_STAR__orig_val__19701_20376,_STAR_parent_description_STAR__temp_val__19702_20377,description__11238__auto___20375))
,false),speclj.components.new_characteristic.call(null,"AI doesn't toggle human? to true if mode 4",((function (_STAR_parent_description_STAR__orig_val__20055_20430,_STAR_parent_description_STAR__temp_val__20056_20431,description__11238__auto____$1,_STAR_parent_description_STAR__orig_val__19701_20376,_STAR_parent_description_STAR__temp_val__19702_20377,description__11238__auto___20375){
return (function (){
var take_turn_orig_val__20227 = tic_tac_toe.player.take_turn;
var take_turn_temp_val__20228 = speclj.stub.stub.call(null,new cljs.core.Keyword(null,"turn","turn",75759344),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"return","return",-1891502105),tic_tac_toe.screens.play_spec.board_3], null));
(tic_tac_toe.player.take_turn = take_turn_temp_val__20228);

try{cljs.core.swap_BANG_.call(null,tic_tac_toe.screens.play_spec.state,cljs.core.assoc,new cljs.core.Keyword(null,"mode","mode",654403691),(4),new cljs.core.Keyword(null,"human?","human?",-2017219054),false,new cljs.core.Keyword(null,"first-ai-level","first-ai-level",1004633644),(1),new cljs.core.Keyword(null,"second-ai-level","second-ai-level",-418730455),(3));

c3kit.wire.spec_helper.render.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tic_tac_toe.render_screen.render_screen,tic_tac_toe.screens.play_spec.state], null));

var expected__11375__auto__ = false;
var actual__11376__auto__ = new cljs.core.Keyword(null,"human?","human?",-2017219054).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.screens.play_spec.state));
if(cljs.core._EQ_.call(null,expected__11375__auto__,actual__11376__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__11375__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11343__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11343__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__11376__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11343__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11343__auto__);
}
})()," (using =)"].join('')));
}
}finally {(tic_tac_toe.player.take_turn = take_turn_orig_val__20227);
}});})(_STAR_parent_description_STAR__orig_val__20055_20430,_STAR_parent_description_STAR__temp_val__20056_20431,description__11238__auto____$1,_STAR_parent_description_STAR__orig_val__19701_20376,_STAR_parent_description_STAR__temp_val__19702_20377,description__11238__auto___20375))
,false)],null)));
var chunk__20058_20433 = null;
var count__20059_20434 = (0);
var i__20060_20435 = (0);
while(true){
if((i__20060_20435 < count__20059_20434)){
var component__11239__auto___20902 = cljs.core._nth.call(null,chunk__20058_20433,i__20060_20435);
speclj.components.install.call(null,component__11239__auto___20902,description__11238__auto____$1);


var G__20903 = seq__20057_20432;
var G__20904 = chunk__20058_20433;
var G__20905 = count__20059_20434;
var G__20906 = (i__20060_20435 + (1));
seq__20057_20432 = G__20903;
chunk__20058_20433 = G__20904;
count__20059_20434 = G__20905;
i__20060_20435 = G__20906;
continue;
} else {
var temp__5804__auto___20907 = cljs.core.seq.call(null,seq__20057_20432);
if(temp__5804__auto___20907){
var seq__20057_20908__$1 = temp__5804__auto___20907;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20057_20908__$1)){
var c__5525__auto___20909 = cljs.core.chunk_first.call(null,seq__20057_20908__$1);
var G__20910 = cljs.core.chunk_rest.call(null,seq__20057_20908__$1);
var G__20911 = c__5525__auto___20909;
var G__20912 = cljs.core.count.call(null,c__5525__auto___20909);
var G__20913 = (0);
seq__20057_20432 = G__20910;
chunk__20058_20433 = G__20911;
count__20059_20434 = G__20912;
i__20060_20435 = G__20913;
continue;
} else {
var component__11239__auto___20914 = cljs.core.first.call(null,seq__20057_20908__$1);
speclj.components.install.call(null,component__11239__auto___20914,description__11238__auto____$1);


var G__20915 = cljs.core.next.call(null,seq__20057_20908__$1);
var G__20916 = null;
var G__20917 = (0);
var G__20918 = (0);
seq__20057_20432 = G__20915;
chunk__20058_20433 = G__20916;
count__20059_20434 = G__20917;
i__20060_20435 = G__20918;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__20055_20430);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__11238__auto____$1);
}

return description__11238__auto____$1;
})(),(function (){var description__11238__auto____$1 = speclj.components.new_description.call(null,"4x4",false,"tic-tac-toe.screens.play-spec");
var _STAR_parent_description_STAR__orig_val__20229_20919 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__20230_20920 = description__11238__auto____$1;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__20230_20920);

try{var seq__20231_20921 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,11,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_before.call(null,((function (_STAR_parent_description_STAR__orig_val__20229_20919,_STAR_parent_description_STAR__temp_val__20230_20920,description__11238__auto____$1,_STAR_parent_description_STAR__orig_val__19701_20376,_STAR_parent_description_STAR__temp_val__19702_20377,description__11238__auto___20375){
return (function (){
cljs.core.reset_BANG_.call(null,tic_tac_toe.screens.play_spec.state,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"current-screen","current-screen",-1454713691),new cljs.core.Keyword(null,"play","play",-580418022),new cljs.core.Keyword(null,"board","board",-1907017633),tic_tac_toe.screens.play_spec.board_4,new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"mode","mode",654403691),(1),new cljs.core.Keyword(null,"game-state","game-state",935682735),new cljs.core.Keyword(null,"in-progress","in-progress",2126442630),new cljs.core.Keyword(null,"human?","human?",-2017219054),true], null));

return c3kit.wire.spec_helper.render.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tic_tac_toe.render_screen.render_screen,tic_tac_toe.screens.play_spec.state], null));
});})(_STAR_parent_description_STAR__orig_val__20229_20919,_STAR_parent_description_STAR__temp_val__20230_20920,description__11238__auto____$1,_STAR_parent_description_STAR__orig_val__19701_20376,_STAR_parent_description_STAR__temp_val__19702_20377,description__11238__auto___20375))
),speclj.components.new_characteristic.call(null,"renders board",((function (_STAR_parent_description_STAR__orig_val__20229_20919,_STAR_parent_description_STAR__temp_val__20230_20920,description__11238__auto____$1,_STAR_parent_description_STAR__orig_val__19701_20376,_STAR_parent_description_STAR__temp_val__19702_20377,description__11238__auto___20375){
return (function (){
var expected__11375__auto___20925 = (16);
var actual__11376__auto___20926 = cljs.core.count.call(null,cljs.core.vec.call(null,c3kit.wire.js.query_selector_all.call(null,".board-square")));
if(cljs.core._EQ_.call(null,expected__11375__auto___20925,actual__11376__auto___20926)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__11375__auto___20925;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11343__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11343__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__11376__auto___20926;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11343__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11343__auto__);
}
})()," (using =)"].join('')));
}

var value__11738__auto___20927 = "#board-wrapper";
var node__11739__auto___20928 = c3kit.wire.spec_helper.select.call(null,value__11738__auto___20927);
if(cljs.core.truth_(node__11739__auto___20928)){
} else {
throw (new speclj.platform.SpecFailure(["Expected selector to find node: ",(function (){var temp__5806__auto__ = value__11738__auto___20927;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11343__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11343__auto__);
}
})()].join('')));
}

var value__11738__auto__ = ".four-grid";
var node__11739__auto__ = c3kit.wire.spec_helper.select.call(null,value__11738__auto__);
if(cljs.core.truth_(node__11739__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected selector to find node: ",(function (){var temp__5806__auto__ = value__11738__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11343__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11343__auto__);
}
})()].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__20229_20919,_STAR_parent_description_STAR__temp_val__20230_20920,description__11238__auto____$1,_STAR_parent_description_STAR__orig_val__19701_20376,_STAR_parent_description_STAR__temp_val__19702_20377,description__11238__auto___20375))
,false),speclj.components.new_characteristic.call(null,"buttons have IDs 0-15",((function (_STAR_parent_description_STAR__orig_val__20229_20919,_STAR_parent_description_STAR__temp_val__20230_20920,description__11238__auto____$1,_STAR_parent_description_STAR__orig_val__19701_20376,_STAR_parent_description_STAR__temp_val__19702_20377,description__11238__auto___20375){
return (function (){
var seq__20305 = cljs.core.seq.call(null,cljs.core.range.call(null,(16)));
var chunk__20306 = null;
var count__20307 = (0);
var i__20308 = (0);
while(true){
if((i__20308 < count__20307)){
var n = cljs.core._nth.call(null,chunk__20306,i__20308);
var value__11738__auto___20929 = ["#index-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join('');
var node__11739__auto___20930 = c3kit.wire.spec_helper.select.call(null,value__11738__auto___20929);
if(cljs.core.truth_(node__11739__auto___20930)){
} else {
throw (new speclj.platform.SpecFailure(["Expected selector to find node: ",(function (){var temp__5806__auto__ = value__11738__auto___20929;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11343__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11343__auto__);
}
})()].join('')));
}


var G__20931 = seq__20305;
var G__20932 = chunk__20306;
var G__20933 = count__20307;
var G__20934 = (i__20308 + (1));
seq__20305 = G__20931;
chunk__20306 = G__20932;
count__20307 = G__20933;
i__20308 = G__20934;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__20305);
if(temp__5804__auto__){
var seq__20305__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20305__$1)){
var c__5525__auto__ = cljs.core.chunk_first.call(null,seq__20305__$1);
var G__20935 = cljs.core.chunk_rest.call(null,seq__20305__$1);
var G__20936 = c__5525__auto__;
var G__20937 = cljs.core.count.call(null,c__5525__auto__);
var G__20938 = (0);
seq__20305 = G__20935;
chunk__20306 = G__20936;
count__20307 = G__20937;
i__20308 = G__20938;
continue;
} else {
var n = cljs.core.first.call(null,seq__20305__$1);
var value__11738__auto___20939 = ["#index-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join('');
var node__11739__auto___20940 = c3kit.wire.spec_helper.select.call(null,value__11738__auto___20939);
if(cljs.core.truth_(node__11739__auto___20940)){
} else {
throw (new speclj.platform.SpecFailure(["Expected selector to find node: ",(function (){var temp__5806__auto__ = value__11738__auto___20939;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11343__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11343__auto__);
}
})()].join('')));
}


var G__20941 = cljs.core.next.call(null,seq__20305__$1);
var G__20942 = null;
var G__20943 = (0);
var G__20944 = (0);
seq__20305 = G__20941;
chunk__20306 = G__20942;
count__20307 = G__20943;
i__20308 = G__20944;
continue;
}
} else {
return null;
}
}
break;
}
});})(_STAR_parent_description_STAR__orig_val__20229_20919,_STAR_parent_description_STAR__temp_val__20230_20920,description__11238__auto____$1,_STAR_parent_description_STAR__orig_val__19701_20376,_STAR_parent_description_STAR__temp_val__19702_20377,description__11238__auto___20375))
,false),speclj.components.new_characteristic.call(null,"clicking button updates board in state",((function (_STAR_parent_description_STAR__orig_val__20229_20919,_STAR_parent_description_STAR__temp_val__20230_20920,description__11238__auto____$1,_STAR_parent_description_STAR__orig_val__19701_20376,_STAR_parent_description_STAR__temp_val__19702_20377,description__11238__auto___20375){
return (function (){
var seq__20309 = cljs.core.seq.call(null,cljs.core.range.call(null,(16)));
var chunk__20310 = null;
var count__20311 = (0);
var i__20312 = (0);
while(true){
if((i__20312 < count__20311)){
var n = cljs.core._nth.call(null,chunk__20310,i__20312);
c3kit.wire.spec_helper.click_BANG_.call(null,["#index-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join(''));

var expected__11375__auto___20945 = cljs.core.assoc.call(null,tic_tac_toe.screens.play_spec.board_4,n,new cljs.core.Keyword(null,"x","x",2099068185));
var actual__11376__auto___20946 = new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.screens.play_spec.state));
if(cljs.core._EQ_.call(null,expected__11375__auto___20945,actual__11376__auto___20946)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__11375__auto___20945;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11343__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11343__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__11376__auto___20946;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11343__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11343__auto__);
}
})()," (using =)"].join('')));
}

cljs.core.swap_BANG_.call(null,tic_tac_toe.screens.play_spec.state,cljs.core.assoc,new cljs.core.Keyword(null,"board","board",-1907017633),tic_tac_toe.screens.play_spec.board_4,new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"x","x",2099068185));


var G__20947 = seq__20309;
var G__20948 = chunk__20310;
var G__20949 = count__20311;
var G__20950 = (i__20312 + (1));
seq__20309 = G__20947;
chunk__20310 = G__20948;
count__20311 = G__20949;
i__20312 = G__20950;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__20309);
if(temp__5804__auto__){
var seq__20309__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20309__$1)){
var c__5525__auto__ = cljs.core.chunk_first.call(null,seq__20309__$1);
var G__20951 = cljs.core.chunk_rest.call(null,seq__20309__$1);
var G__20952 = c__5525__auto__;
var G__20953 = cljs.core.count.call(null,c__5525__auto__);
var G__20954 = (0);
seq__20309 = G__20951;
chunk__20310 = G__20952;
count__20311 = G__20953;
i__20312 = G__20954;
continue;
} else {
var n = cljs.core.first.call(null,seq__20309__$1);
c3kit.wire.spec_helper.click_BANG_.call(null,["#index-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join(''));

var expected__11375__auto___20955 = cljs.core.assoc.call(null,tic_tac_toe.screens.play_spec.board_4,n,new cljs.core.Keyword(null,"x","x",2099068185));
var actual__11376__auto___20956 = new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.screens.play_spec.state));
if(cljs.core._EQ_.call(null,expected__11375__auto___20955,actual__11376__auto___20956)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__11375__auto___20955;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11343__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11343__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__11376__auto___20956;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11343__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11343__auto__);
}
})()," (using =)"].join('')));
}

cljs.core.swap_BANG_.call(null,tic_tac_toe.screens.play_spec.state,cljs.core.assoc,new cljs.core.Keyword(null,"board","board",-1907017633),tic_tac_toe.screens.play_spec.board_4,new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"x","x",2099068185));


var G__20957 = cljs.core.next.call(null,seq__20309__$1);
var G__20958 = null;
var G__20959 = (0);
var G__20960 = (0);
seq__20309 = G__20957;
chunk__20310 = G__20958;
count__20311 = G__20959;
i__20312 = G__20960;
continue;
}
} else {
return null;
}
}
break;
}
});})(_STAR_parent_description_STAR__orig_val__20229_20919,_STAR_parent_description_STAR__temp_val__20230_20920,description__11238__auto____$1,_STAR_parent_description_STAR__orig_val__19701_20376,_STAR_parent_description_STAR__temp_val__19702_20377,description__11238__auto___20375))
,false),speclj.components.new_characteristic.call(null,"clicking button swaps player in state",((function (_STAR_parent_description_STAR__orig_val__20229_20919,_STAR_parent_description_STAR__temp_val__20230_20920,description__11238__auto____$1,_STAR_parent_description_STAR__orig_val__19701_20376,_STAR_parent_description_STAR__temp_val__19702_20377,description__11238__auto___20375){
return (function (){
var seq__20313 = cljs.core.seq.call(null,cljs.core.range.call(null,(16)));
var chunk__20314 = null;
var count__20315 = (0);
var i__20316 = (0);
while(true){
if((i__20316 < count__20315)){
var n = cljs.core._nth.call(null,chunk__20314,i__20316);
c3kit.wire.spec_helper.click_BANG_.call(null,["#index-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join(''));

var expected__11375__auto___20961 = new cljs.core.Keyword(null,"o","o",-1350007228);
var actual__11376__auto___20962 = new cljs.core.Keyword(null,"player","player",-97687400).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.screens.play_spec.state));
if(cljs.core._EQ_.call(null,expected__11375__auto___20961,actual__11376__auto___20962)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__11375__auto___20961;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11343__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11343__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__11376__auto___20962;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11343__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11343__auto__);
}
})()," (using =)"].join('')));
}

cljs.core.swap_BANG_.call(null,tic_tac_toe.screens.play_spec.state,cljs.core.assoc,new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"board","board",-1907017633),tic_tac_toe.screens.play_spec.board_4);


var G__20963 = seq__20313;
var G__20964 = chunk__20314;
var G__20965 = count__20315;
var G__20966 = (i__20316 + (1));
seq__20313 = G__20963;
chunk__20314 = G__20964;
count__20315 = G__20965;
i__20316 = G__20966;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__20313);
if(temp__5804__auto__){
var seq__20313__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20313__$1)){
var c__5525__auto__ = cljs.core.chunk_first.call(null,seq__20313__$1);
var G__20967 = cljs.core.chunk_rest.call(null,seq__20313__$1);
var G__20968 = c__5525__auto__;
var G__20969 = cljs.core.count.call(null,c__5525__auto__);
var G__20970 = (0);
seq__20313 = G__20967;
chunk__20314 = G__20968;
count__20315 = G__20969;
i__20316 = G__20970;
continue;
} else {
var n = cljs.core.first.call(null,seq__20313__$1);
c3kit.wire.spec_helper.click_BANG_.call(null,["#index-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join(''));

var expected__11375__auto___20971 = new cljs.core.Keyword(null,"o","o",-1350007228);
var actual__11376__auto___20972 = new cljs.core.Keyword(null,"player","player",-97687400).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.screens.play_spec.state));
if(cljs.core._EQ_.call(null,expected__11375__auto___20971,actual__11376__auto___20972)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__11375__auto___20971;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11343__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11343__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__11376__auto___20972;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11343__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11343__auto__);
}
})()," (using =)"].join('')));
}

cljs.core.swap_BANG_.call(null,tic_tac_toe.screens.play_spec.state,cljs.core.assoc,new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"board","board",-1907017633),tic_tac_toe.screens.play_spec.board_4);


var G__20973 = cljs.core.next.call(null,seq__20313__$1);
var G__20974 = null;
var G__20975 = (0);
var G__20976 = (0);
seq__20313 = G__20973;
chunk__20314 = G__20974;
count__20315 = G__20975;
i__20316 = G__20976;
continue;
}
} else {
return null;
}
}
break;
}
});})(_STAR_parent_description_STAR__orig_val__20229_20919,_STAR_parent_description_STAR__temp_val__20230_20920,description__11238__auto____$1,_STAR_parent_description_STAR__orig_val__19701_20376,_STAR_parent_description_STAR__temp_val__19702_20377,description__11238__auto___20375))
,false),speclj.components.new_characteristic.call(null,"clicking button toggles human? to false if mode 2 or 3",((function (_STAR_parent_description_STAR__orig_val__20229_20919,_STAR_parent_description_STAR__temp_val__20230_20920,description__11238__auto____$1,_STAR_parent_description_STAR__orig_val__19701_20376,_STAR_parent_description_STAR__temp_val__19702_20377,description__11238__auto___20375){
return (function (){
var ai_turn_orig_val__20317 = tic_tac_toe.screens.play.ai_turn;
var ai_turn_temp_val__20318 = speclj.stub.stub.call(null,new cljs.core.Keyword(null,"ai-turn","ai-turn",-1581895352),cljs.core.PersistentArrayMap.EMPTY);
(tic_tac_toe.screens.play.ai_turn = ai_turn_temp_val__20318);

try{var seq__20319 = cljs.core.seq.call(null,cljs.core.range.call(null,(16)));
var chunk__20324 = null;
var count__20325 = (0);
var i__20326 = (0);
while(true){
if((i__20326 < count__20325)){
var n = cljs.core._nth.call(null,chunk__20324,i__20326);
var seq__20327_20977 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(3)], null));
var chunk__20328_20978 = null;
var count__20329_20979 = (0);
var i__20330_20980 = (0);
while(true){
if((i__20330_20980 < count__20329_20979)){
var mode_20981 = cljs.core._nth.call(null,chunk__20328_20978,i__20330_20980);
cljs.core.swap_BANG_.call(null,tic_tac_toe.screens.play_spec.state,cljs.core.assoc,new cljs.core.Keyword(null,"mode","mode",654403691),mode_20981);

c3kit.wire.spec_helper.render.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tic_tac_toe.render_screen.render_screen,tic_tac_toe.screens.play_spec.state], null));

c3kit.wire.spec_helper.click_BANG_.call(null,["#index-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join(''));

var expected__11375__auto___20982 = false;
var actual__11376__auto___20983 = new cljs.core.Keyword(null,"human?","human?",-2017219054).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.screens.play_spec.state));
if(cljs.core._EQ_.call(null,expected__11375__auto___20982,actual__11376__auto___20983)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__11375__auto___20982;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11343__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11343__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__11376__auto___20983;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11343__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11343__auto__);
}
})()," (using =)"].join('')));
}

cljs.core.swap_BANG_.call(null,tic_tac_toe.screens.play_spec.state,cljs.core.assoc,new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"board","board",-1907017633),tic_tac_toe.screens.play_spec.board_4);


var G__20984 = seq__20327_20977;
var G__20985 = chunk__20328_20978;
var G__20986 = count__20329_20979;
var G__20987 = (i__20330_20980 + (1));
seq__20327_20977 = G__20984;
chunk__20328_20978 = G__20985;
count__20329_20979 = G__20986;
i__20330_20980 = G__20987;
continue;
} else {
var temp__5804__auto___20988 = cljs.core.seq.call(null,seq__20327_20977);
if(temp__5804__auto___20988){
var seq__20327_20989__$1 = temp__5804__auto___20988;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20327_20989__$1)){
var c__5525__auto___20990 = cljs.core.chunk_first.call(null,seq__20327_20989__$1);
var G__20991 = cljs.core.chunk_rest.call(null,seq__20327_20989__$1);
var G__20992 = c__5525__auto___20990;
var G__20993 = cljs.core.count.call(null,c__5525__auto___20990);
var G__20994 = (0);
seq__20327_20977 = G__20991;
chunk__20328_20978 = G__20992;
count__20329_20979 = G__20993;
i__20330_20980 = G__20994;
continue;
} else {
var mode_20995 = cljs.core.first.call(null,seq__20327_20989__$1);
cljs.core.swap_BANG_.call(null,tic_tac_toe.screens.play_spec.state,cljs.core.assoc,new cljs.core.Keyword(null,"mode","mode",654403691),mode_20995);

c3kit.wire.spec_helper.render.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tic_tac_toe.render_screen.render_screen,tic_tac_toe.screens.play_spec.state], null));

c3kit.wire.spec_helper.click_BANG_.call(null,["#index-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join(''));

var expected__11375__auto___20996 = false;
var actual__11376__auto___20997 = new cljs.core.Keyword(null,"human?","human?",-2017219054).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.screens.play_spec.state));
if(cljs.core._EQ_.call(null,expected__11375__auto___20996,actual__11376__auto___20997)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__11375__auto___20996;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11343__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11343__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__11376__auto___20997;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11343__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11343__auto__);
}
})()," (using =)"].join('')));
}

cljs.core.swap_BANG_.call(null,tic_tac_toe.screens.play_spec.state,cljs.core.assoc,new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"board","board",-1907017633),tic_tac_toe.screens.play_spec.board_4);


var G__20998 = cljs.core.next.call(null,seq__20327_20989__$1);
var G__20999 = null;
var G__21000 = (0);
var G__21001 = (0);
seq__20327_20977 = G__20998;
chunk__20328_20978 = G__20999;
count__20329_20979 = G__21000;
i__20330_20980 = G__21001;
continue;
}
} else {
}
}
break;
}

var G__21002 = seq__20319;
var G__21003 = chunk__20324;
var G__21004 = count__20325;
var G__21005 = (i__20326 + (1));
seq__20319 = G__21002;
chunk__20324 = G__21003;
count__20325 = G__21004;
i__20326 = G__21005;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__20319);
if(temp__5804__auto__){
var seq__20319__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20319__$1)){
var c__5525__auto__ = cljs.core.chunk_first.call(null,seq__20319__$1);
var G__21006 = cljs.core.chunk_rest.call(null,seq__20319__$1);
var G__21007 = c__5525__auto__;
var G__21008 = cljs.core.count.call(null,c__5525__auto__);
var G__21009 = (0);
seq__20319 = G__21006;
chunk__20324 = G__21007;
count__20325 = G__21008;
i__20326 = G__21009;
continue;
} else {
var n = cljs.core.first.call(null,seq__20319__$1);
var seq__20320_21010 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(3)], null));
var chunk__20321_21011 = null;
var count__20322_21012 = (0);
var i__20323_21013 = (0);
while(true){
if((i__20323_21013 < count__20322_21012)){
var mode_21014 = cljs.core._nth.call(null,chunk__20321_21011,i__20323_21013);
cljs.core.swap_BANG_.call(null,tic_tac_toe.screens.play_spec.state,cljs.core.assoc,new cljs.core.Keyword(null,"mode","mode",654403691),mode_21014);

c3kit.wire.spec_helper.render.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tic_tac_toe.render_screen.render_screen,tic_tac_toe.screens.play_spec.state], null));

c3kit.wire.spec_helper.click_BANG_.call(null,["#index-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join(''));

var expected__11375__auto___21015 = false;
var actual__11376__auto___21016 = new cljs.core.Keyword(null,"human?","human?",-2017219054).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.screens.play_spec.state));
if(cljs.core._EQ_.call(null,expected__11375__auto___21015,actual__11376__auto___21016)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__11375__auto___21015;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11343__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11343__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__11376__auto___21016;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11343__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11343__auto__);
}
})()," (using =)"].join('')));
}

cljs.core.swap_BANG_.call(null,tic_tac_toe.screens.play_spec.state,cljs.core.assoc,new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"board","board",-1907017633),tic_tac_toe.screens.play_spec.board_4);


var G__21017 = seq__20320_21010;
var G__21018 = chunk__20321_21011;
var G__21019 = count__20322_21012;
var G__21020 = (i__20323_21013 + (1));
seq__20320_21010 = G__21017;
chunk__20321_21011 = G__21018;
count__20322_21012 = G__21019;
i__20323_21013 = G__21020;
continue;
} else {
var temp__5804__auto___21021__$1 = cljs.core.seq.call(null,seq__20320_21010);
if(temp__5804__auto___21021__$1){
var seq__20320_21022__$1 = temp__5804__auto___21021__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20320_21022__$1)){
var c__5525__auto___21023 = cljs.core.chunk_first.call(null,seq__20320_21022__$1);
var G__21024 = cljs.core.chunk_rest.call(null,seq__20320_21022__$1);
var G__21025 = c__5525__auto___21023;
var G__21026 = cljs.core.count.call(null,c__5525__auto___21023);
var G__21027 = (0);
seq__20320_21010 = G__21024;
chunk__20321_21011 = G__21025;
count__20322_21012 = G__21026;
i__20323_21013 = G__21027;
continue;
} else {
var mode_21028 = cljs.core.first.call(null,seq__20320_21022__$1);
cljs.core.swap_BANG_.call(null,tic_tac_toe.screens.play_spec.state,cljs.core.assoc,new cljs.core.Keyword(null,"mode","mode",654403691),mode_21028);

c3kit.wire.spec_helper.render.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tic_tac_toe.render_screen.render_screen,tic_tac_toe.screens.play_spec.state], null));

c3kit.wire.spec_helper.click_BANG_.call(null,["#index-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join(''));

var expected__11375__auto___21029 = false;
var actual__11376__auto___21030 = new cljs.core.Keyword(null,"human?","human?",-2017219054).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.screens.play_spec.state));
if(cljs.core._EQ_.call(null,expected__11375__auto___21029,actual__11376__auto___21030)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__11375__auto___21029;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11343__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11343__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__11376__auto___21030;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11343__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11343__auto__);
}
})()," (using =)"].join('')));
}

cljs.core.swap_BANG_.call(null,tic_tac_toe.screens.play_spec.state,cljs.core.assoc,new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"board","board",-1907017633),tic_tac_toe.screens.play_spec.board_4);


var G__21031 = cljs.core.next.call(null,seq__20320_21022__$1);
var G__21032 = null;
var G__21033 = (0);
var G__21034 = (0);
seq__20320_21010 = G__21031;
chunk__20321_21011 = G__21032;
count__20322_21012 = G__21033;
i__20323_21013 = G__21034;
continue;
}
} else {
}
}
break;
}

var G__21035 = cljs.core.next.call(null,seq__20319__$1);
var G__21036 = null;
var G__21037 = (0);
var G__21038 = (0);
seq__20319 = G__21035;
chunk__20324 = G__21036;
count__20325 = G__21037;
i__20326 = G__21038;
continue;
}
} else {
return null;
}
}
break;
}
}finally {(tic_tac_toe.screens.play.ai_turn = ai_turn_orig_val__20317);
}});})(_STAR_parent_description_STAR__orig_val__20229_20919,_STAR_parent_description_STAR__temp_val__20230_20920,description__11238__auto____$1,_STAR_parent_description_STAR__orig_val__19701_20376,_STAR_parent_description_STAR__temp_val__19702_20377,description__11238__auto___20375))
,false),speclj.components.new_characteristic.call(null,"clicking button does not toggle human if mode 1",((function (_STAR_parent_description_STAR__orig_val__20229_20919,_STAR_parent_description_STAR__temp_val__20230_20920,description__11238__auto____$1,_STAR_parent_description_STAR__orig_val__19701_20376,_STAR_parent_description_STAR__temp_val__19702_20377,description__11238__auto___20375){
return (function (){
var ai_turn_orig_val__20331 = tic_tac_toe.screens.play.ai_turn;
var ai_turn_temp_val__20332 = speclj.stub.stub.call(null,new cljs.core.Keyword(null,"ai-turn","ai-turn",-1581895352),cljs.core.PersistentArrayMap.EMPTY);
(tic_tac_toe.screens.play.ai_turn = ai_turn_temp_val__20332);

try{var seq__20333 = cljs.core.seq.call(null,cljs.core.range.call(null,(16)));
var chunk__20334 = null;
var count__20335 = (0);
var i__20336 = (0);
while(true){
if((i__20336 < count__20335)){
var n = cljs.core._nth.call(null,chunk__20334,i__20336);
c3kit.wire.spec_helper.click_BANG_.call(null,["#index-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join(''));

var expected__11375__auto___21039 = true;
var actual__11376__auto___21040 = new cljs.core.Keyword(null,"human?","human?",-2017219054).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.screens.play_spec.state));
if(cljs.core._EQ_.call(null,expected__11375__auto___21039,actual__11376__auto___21040)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__11375__auto___21039;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11343__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11343__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__11376__auto___21040;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11343__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11343__auto__);
}
})()," (using =)"].join('')));
}

cljs.core.swap_BANG_.call(null,tic_tac_toe.screens.play_spec.state,cljs.core.assoc,new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"board","board",-1907017633),tic_tac_toe.screens.play_spec.board_4);


var G__21041 = seq__20333;
var G__21042 = chunk__20334;
var G__21043 = count__20335;
var G__21044 = (i__20336 + (1));
seq__20333 = G__21041;
chunk__20334 = G__21042;
count__20335 = G__21043;
i__20336 = G__21044;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__20333);
if(temp__5804__auto__){
var seq__20333__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20333__$1)){
var c__5525__auto__ = cljs.core.chunk_first.call(null,seq__20333__$1);
var G__21045 = cljs.core.chunk_rest.call(null,seq__20333__$1);
var G__21046 = c__5525__auto__;
var G__21047 = cljs.core.count.call(null,c__5525__auto__);
var G__21048 = (0);
seq__20333 = G__21045;
chunk__20334 = G__21046;
count__20335 = G__21047;
i__20336 = G__21048;
continue;
} else {
var n = cljs.core.first.call(null,seq__20333__$1);
c3kit.wire.spec_helper.click_BANG_.call(null,["#index-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join(''));

var expected__11375__auto___21049 = true;
var actual__11376__auto___21050 = new cljs.core.Keyword(null,"human?","human?",-2017219054).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.screens.play_spec.state));
if(cljs.core._EQ_.call(null,expected__11375__auto___21049,actual__11376__auto___21050)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__11375__auto___21049;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11343__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11343__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__11376__auto___21050;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11343__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11343__auto__);
}
})()," (using =)"].join('')));
}

cljs.core.swap_BANG_.call(null,tic_tac_toe.screens.play_spec.state,cljs.core.assoc,new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"board","board",-1907017633),tic_tac_toe.screens.play_spec.board_4);


var G__21051 = cljs.core.next.call(null,seq__20333__$1);
var G__21052 = null;
var G__21053 = (0);
var G__21054 = (0);
seq__20333 = G__21051;
chunk__20334 = G__21052;
count__20335 = G__21053;
i__20336 = G__21054;
continue;
}
} else {
return null;
}
}
break;
}
}finally {(tic_tac_toe.screens.play.ai_turn = ai_turn_orig_val__20331);
}});})(_STAR_parent_description_STAR__orig_val__20229_20919,_STAR_parent_description_STAR__temp_val__20230_20920,description__11238__auto____$1,_STAR_parent_description_STAR__orig_val__19701_20376,_STAR_parent_description_STAR__temp_val__19702_20377,description__11238__auto___20375))
,false),speclj.components.new_characteristic.call(null,"clicking button adds token to button HTML",((function (_STAR_parent_description_STAR__orig_val__20229_20919,_STAR_parent_description_STAR__temp_val__20230_20920,description__11238__auto____$1,_STAR_parent_description_STAR__orig_val__19701_20376,_STAR_parent_description_STAR__temp_val__19702_20377,description__11238__auto___20375){
return (function (){
var seq__20337 = cljs.core.seq.call(null,cljs.core.range.call(null,(16)));
var chunk__20338 = null;
var count__20339 = (0);
var i__20340 = (0);
while(true){
if((i__20340 < count__20339)){
var n = cljs.core._nth.call(null,chunk__20338,i__20340);
c3kit.wire.spec_helper.click_BANG_.call(null,["#index-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join(''));

var expected__11375__auto___21055 = "X";
var actual__11376__auto___21056 = c3kit.wire.spec_helper.text.call(null,["#index-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join(''));
if(cljs.core._EQ_.call(null,expected__11375__auto___21055,actual__11376__auto___21056)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__11375__auto___21055;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11343__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11343__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__11376__auto___21056;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11343__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11343__auto__);
}
})()," (using =)"].join('')));
}

cljs.core.reset_BANG_.call(null,tic_tac_toe.screens.play_spec.state,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"board","board",-1907017633),tic_tac_toe.screens.play_spec.board_4,new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"current-screen","current-screen",-1454713691),new cljs.core.Keyword(null,"play","play",-580418022),new cljs.core.Keyword(null,"mode","mode",654403691),(1)], null));


var G__21057 = seq__20337;
var G__21058 = chunk__20338;
var G__21059 = count__20339;
var G__21060 = (i__20340 + (1));
seq__20337 = G__21057;
chunk__20338 = G__21058;
count__20339 = G__21059;
i__20340 = G__21060;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__20337);
if(temp__5804__auto__){
var seq__20337__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20337__$1)){
var c__5525__auto__ = cljs.core.chunk_first.call(null,seq__20337__$1);
var G__21061 = cljs.core.chunk_rest.call(null,seq__20337__$1);
var G__21062 = c__5525__auto__;
var G__21063 = cljs.core.count.call(null,c__5525__auto__);
var G__21064 = (0);
seq__20337 = G__21061;
chunk__20338 = G__21062;
count__20339 = G__21063;
i__20340 = G__21064;
continue;
} else {
var n = cljs.core.first.call(null,seq__20337__$1);
c3kit.wire.spec_helper.click_BANG_.call(null,["#index-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join(''));

var expected__11375__auto___21065 = "X";
var actual__11376__auto___21066 = c3kit.wire.spec_helper.text.call(null,["#index-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join(''));
if(cljs.core._EQ_.call(null,expected__11375__auto___21065,actual__11376__auto___21066)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__11375__auto___21065;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11343__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11343__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__11376__auto___21066;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11343__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11343__auto__);
}
})()," (using =)"].join('')));
}

cljs.core.reset_BANG_.call(null,tic_tac_toe.screens.play_spec.state,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"board","board",-1907017633),tic_tac_toe.screens.play_spec.board_4,new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"current-screen","current-screen",-1454713691),new cljs.core.Keyword(null,"play","play",-580418022),new cljs.core.Keyword(null,"mode","mode",654403691),(1)], null));


var G__21067 = cljs.core.next.call(null,seq__20337__$1);
var G__21068 = null;
var G__21069 = (0);
var G__21070 = (0);
seq__20337 = G__21067;
chunk__20338 = G__21068;
count__20339 = G__21069;
i__20340 = G__21070;
continue;
}
} else {
return null;
}
}
break;
}
});})(_STAR_parent_description_STAR__orig_val__20229_20919,_STAR_parent_description_STAR__temp_val__20230_20920,description__11238__auto____$1,_STAR_parent_description_STAR__orig_val__19701_20376,_STAR_parent_description_STAR__temp_val__19702_20377,description__11238__auto___20375))
,false),speclj.components.new_characteristic.call(null,"clicking button disables button",((function (_STAR_parent_description_STAR__orig_val__20229_20919,_STAR_parent_description_STAR__temp_val__20230_20920,description__11238__auto____$1,_STAR_parent_description_STAR__orig_val__19701_20376,_STAR_parent_description_STAR__temp_val__19702_20377,description__11238__auto___20375){
return (function (){
var seq__20341 = cljs.core.seq.call(null,cljs.core.range.call(null,(16)));
var chunk__20342 = null;
var count__20343 = (0);
var i__20344 = (0);
while(true){
if((i__20344 < count__20343)){
var n = cljs.core._nth.call(null,chunk__20342,i__20344);
c3kit.wire.spec_helper.click_BANG_.call(null,["#index-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join(''));

var expected__11375__auto___21071 = true;
var actual__11376__auto___21072 = c3kit.wire.spec_helper.disabled_QMARK_.call(null,["#index-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join(''));
if(cljs.core._EQ_.call(null,expected__11375__auto___21071,actual__11376__auto___21072)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__11375__auto___21071;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11343__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11343__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__11376__auto___21072;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11343__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11343__auto__);
}
})()," (using =)"].join('')));
}

cljs.core.reset_BANG_.call(null,tic_tac_toe.screens.play_spec.state,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"board","board",-1907017633),tic_tac_toe.screens.play_spec.board_4,new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"current-screen","current-screen",-1454713691),new cljs.core.Keyword(null,"play","play",-580418022),new cljs.core.Keyword(null,"mode","mode",654403691),(1)], null));


var G__21073 = seq__20341;
var G__21074 = chunk__20342;
var G__21075 = count__20343;
var G__21076 = (i__20344 + (1));
seq__20341 = G__21073;
chunk__20342 = G__21074;
count__20343 = G__21075;
i__20344 = G__21076;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__20341);
if(temp__5804__auto__){
var seq__20341__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20341__$1)){
var c__5525__auto__ = cljs.core.chunk_first.call(null,seq__20341__$1);
var G__21077 = cljs.core.chunk_rest.call(null,seq__20341__$1);
var G__21078 = c__5525__auto__;
var G__21079 = cljs.core.count.call(null,c__5525__auto__);
var G__21080 = (0);
seq__20341 = G__21077;
chunk__20342 = G__21078;
count__20343 = G__21079;
i__20344 = G__21080;
continue;
} else {
var n = cljs.core.first.call(null,seq__20341__$1);
c3kit.wire.spec_helper.click_BANG_.call(null,["#index-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join(''));

var expected__11375__auto___21081 = true;
var actual__11376__auto___21082 = c3kit.wire.spec_helper.disabled_QMARK_.call(null,["#index-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join(''));
if(cljs.core._EQ_.call(null,expected__11375__auto___21081,actual__11376__auto___21082)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__11375__auto___21081;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11343__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11343__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__11376__auto___21082;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11343__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11343__auto__);
}
})()," (using =)"].join('')));
}

cljs.core.reset_BANG_.call(null,tic_tac_toe.screens.play_spec.state,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"board","board",-1907017633),tic_tac_toe.screens.play_spec.board_4,new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"current-screen","current-screen",-1454713691),new cljs.core.Keyword(null,"play","play",-580418022),new cljs.core.Keyword(null,"mode","mode",654403691),(1)], null));


var G__21083 = cljs.core.next.call(null,seq__20341__$1);
var G__21084 = null;
var G__21085 = (0);
var G__21086 = (0);
seq__20341 = G__21083;
chunk__20342 = G__21084;
count__20343 = G__21085;
i__20344 = G__21086;
continue;
}
} else {
return null;
}
}
break;
}
});})(_STAR_parent_description_STAR__orig_val__20229_20919,_STAR_parent_description_STAR__temp_val__20230_20920,description__11238__auto____$1,_STAR_parent_description_STAR__orig_val__19701_20376,_STAR_parent_description_STAR__temp_val__19702_20377,description__11238__auto___20375))
,false),speclj.components.new_characteristic.call(null,"clicking button triggers AI if mode 2 or 3",((function (_STAR_parent_description_STAR__orig_val__20229_20919,_STAR_parent_description_STAR__temp_val__20230_20920,description__11238__auto____$1,_STAR_parent_description_STAR__orig_val__19701_20376,_STAR_parent_description_STAR__temp_val__19702_20377,description__11238__auto___20375){
return (function (){
var take_turn_orig_val__20345 = tic_tac_toe.player.take_turn;
var take_turn_temp_val__20346 = speclj.stub.stub.call(null,new cljs.core.Keyword(null,"turn","turn",75759344),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"return","return",-1891502105),tic_tac_toe.screens.play_spec.board_4], null));
(tic_tac_toe.player.take_turn = take_turn_temp_val__20346);

try{var seq__20347 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(3)], null));
var chunk__20360 = null;
var count__20361 = (0);
var i__20362 = (0);
while(true){
if((i__20362 < count__20361)){
var ai = cljs.core._nth.call(null,chunk__20360,i__20362);
var seq__20363_21087 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(3)], null));
var chunk__20368_21088 = null;
var count__20369_21089 = (0);
var i__20370_21090 = (0);
while(true){
if((i__20370_21090 < count__20369_21089)){
var mode_21091 = cljs.core._nth.call(null,chunk__20368_21088,i__20370_21090);
var seq__20371_21092 = cljs.core.seq.call(null,cljs.core.range.call(null,(16)));
var chunk__20372_21093 = null;
var count__20373_21094 = (0);
var i__20374_21095 = (0);
while(true){
if((i__20374_21095 < count__20373_21094)){
var n_21096 = cljs.core._nth.call(null,chunk__20372_21093,i__20374_21095);
cljs.core.swap_BANG_.call(null,tic_tac_toe.screens.play_spec.state,cljs.core.assoc,new cljs.core.Keyword(null,"mode","mode",654403691),mode_21091,new cljs.core.Keyword(null,"first-ai-level","first-ai-level",1004633644),ai,new cljs.core.Keyword(null,"player","player",-97687400),((cljs.core._EQ_.call(null,(2),mode_21091))?new cljs.core.Keyword(null,"x","x",2099068185):new cljs.core.Keyword(null,"o","o",-1350007228)),new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"gui","gui",604532813));

c3kit.wire.spec_helper.render.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tic_tac_toe.render_screen.render_screen,tic_tac_toe.screens.play_spec.state], null));

c3kit.wire.spec_helper.click_BANG_.call(null,["#index-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n_21096)].join(''));

var name__11622__auto___21097 = new cljs.core.Keyword(null,"turn","turn",75759344);
var options__11623__auto___21098 = cljs.core.PersistentArrayMap.EMPTY;
var invocations__11624__auto___21099 = speclj.stub.invocations_of.call(null,name__11622__auto___21097);
var times__11625__auto___21100 = new cljs.core.Keyword(null,"times","times",1671571467).cljs$core$IFn$_invoke$arity$1(options__11623__auto___21098);
var times_QMARK___11626__auto___21101 = typeof times__11625__auto___21100 === 'number';
var check_params_QMARK___11627__auto___21102 = cljs.core.contains_QMARK_.call(null,options__11623__auto___21098,new cljs.core.Keyword(null,"with","with",-1536296876));
var with__11628__auto___21103 = new cljs.core.Keyword(null,"with","with",-1536296876).cljs$core$IFn$_invoke$arity$1(options__11623__auto___21098);
var with__11628__auto___21104__$1 = (((with__11628__auto___21103 == null))?cljs.core.PersistentVector.EMPTY:with__11628__auto___21103);
var invocations_str__11629__auto___21105 = ((function (seq__20371_21092,chunk__20372_21093,count__20373_21094,i__20374_21095,seq__20363_21087,chunk__20368_21088,count__20369_21089,i__20370_21090,seq__20347,chunk__20360,count__20361,i__20362,name__11622__auto___21097,options__11623__auto___21098,invocations__11624__auto___21099,times__11625__auto___21100,times_QMARK___11626__auto___21101,check_params_QMARK___11627__auto___21102,with__11628__auto___21103,with__11628__auto___21104__$1,n_21096,mode_21091,ai,take_turn_orig_val__20345,take_turn_temp_val__20346,_STAR_parent_description_STAR__orig_val__20229_20919,_STAR_parent_description_STAR__temp_val__20230_20920,description__11238__auto____$1,_STAR_parent_description_STAR__orig_val__19701_20376,_STAR_parent_description_STAR__temp_val__19702_20377,description__11238__auto___20375){
return (function (p1__11619__11630__auto__){
if(cljs.core._EQ_.call(null,(1),p1__11619__11630__auto__)){
return "invocation";
} else {
return "invocations";
}
});})(seq__20371_21092,chunk__20372_21093,count__20373_21094,i__20374_21095,seq__20363_21087,chunk__20368_21088,count__20369_21089,i__20370_21090,seq__20347,chunk__20360,count__20361,i__20362,name__11622__auto___21097,options__11623__auto___21098,invocations__11624__auto___21099,times__11625__auto___21100,times_QMARK___11626__auto___21101,check_params_QMARK___11627__auto___21102,with__11628__auto___21103,with__11628__auto___21104__$1,n_21096,mode_21091,ai,take_turn_orig_val__20345,take_turn_temp_val__20346,_STAR_parent_description_STAR__orig_val__20229_20919,_STAR_parent_description_STAR__temp_val__20230_20920,description__11238__auto____$1,_STAR_parent_description_STAR__orig_val__19701_20376,_STAR_parent_description_STAR__temp_val__19702_20377,description__11238__auto___20375))
;
if(((times_QMARK___11626__auto___21101) && (check_params_QMARK___11627__auto___21102))){
var matching_invocations__11631__auto___21106 = cljs.core.filter.call(null,((function (seq__20371_21092,chunk__20372_21093,count__20373_21094,i__20374_21095,seq__20363_21087,chunk__20368_21088,count__20369_21089,i__20370_21090,seq__20347,chunk__20360,count__20361,i__20362,name__11622__auto___21097,options__11623__auto___21098,invocations__11624__auto___21099,times__11625__auto___21100,times_QMARK___11626__auto___21101,check_params_QMARK___11627__auto___21102,with__11628__auto___21103,with__11628__auto___21104__$1,invocations_str__11629__auto___21105,n_21096,mode_21091,ai,take_turn_orig_val__20345,take_turn_temp_val__20346,_STAR_parent_description_STAR__orig_val__20229_20919,_STAR_parent_description_STAR__temp_val__20230_20920,description__11238__auto____$1,_STAR_parent_description_STAR__orig_val__19701_20376,_STAR_parent_description_STAR__temp_val__19702_20377,description__11238__auto___20375){
return (function (p1__11620__11632__auto__){
return speclj.stub.params_match_QMARK_.call(null,with__11628__auto___21104__$1,p1__11620__11632__auto__);
});})(seq__20371_21092,chunk__20372_21093,count__20373_21094,i__20374_21095,seq__20363_21087,chunk__20368_21088,count__20369_21089,i__20370_21090,seq__20347,chunk__20360,count__20361,i__20362,name__11622__auto___21097,options__11623__auto___21098,invocations__11624__auto___21099,times__11625__auto___21100,times_QMARK___11626__auto___21101,check_params_QMARK___11627__auto___21102,with__11628__auto___21103,with__11628__auto___21104__$1,invocations_str__11629__auto___21105,n_21096,mode_21091,ai,take_turn_orig_val__20345,take_turn_temp_val__20346,_STAR_parent_description_STAR__orig_val__20229_20919,_STAR_parent_description_STAR__temp_val__20230_20920,description__11238__auto____$1,_STAR_parent_description_STAR__orig_val__19701_20376,_STAR_parent_description_STAR__temp_val__19702_20377,description__11238__auto___20375))
,invocations__11624__auto___21099);
var matching_count__11633__auto___21107 = cljs.core.count.call(null,matching_invocations__11631__auto___21106);
if(cljs.core._EQ_.call(null,times__11625__auto___21100,matching_count__11633__auto___21107)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(times__11625__auto___21100)," ",invocations_str__11629__auto___21105.call(null,times__11625__auto___21100)," of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__11622__auto___21097)," with ",cljs.core.pr_str.call(null,with__11628__auto___21104__$1),speclj.platform.endl,"     got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(matching_count__11633__auto___21107)," ",invocations_str__11629__auto___21105.call(null,matching_count__11633__auto___21107)].join('')));
}
} else {
if(check_params_QMARK___11627__auto___21102){
if(cljs.core.truth_(cljs.core.some.call(null,((function (seq__20371_21092,chunk__20372_21093,count__20373_21094,i__20374_21095,seq__20363_21087,chunk__20368_21088,count__20369_21089,i__20370_21090,seq__20347,chunk__20360,count__20361,i__20362,name__11622__auto___21097,options__11623__auto___21098,invocations__11624__auto___21099,times__11625__auto___21100,times_QMARK___11626__auto___21101,check_params_QMARK___11627__auto___21102,with__11628__auto___21103,with__11628__auto___21104__$1,invocations_str__11629__auto___21105,n_21096,mode_21091,ai,take_turn_orig_val__20345,take_turn_temp_val__20346,_STAR_parent_description_STAR__orig_val__20229_20919,_STAR_parent_description_STAR__temp_val__20230_20920,description__11238__auto____$1,_STAR_parent_description_STAR__orig_val__19701_20376,_STAR_parent_description_STAR__temp_val__19702_20377,description__11238__auto___20375){
return (function (p1__11621__11634__auto__){
return speclj.stub.params_match_QMARK_.call(null,with__11628__auto___21104__$1,p1__11621__11634__auto__);
});})(seq__20371_21092,chunk__20372_21093,count__20373_21094,i__20374_21095,seq__20363_21087,chunk__20368_21088,count__20369_21089,i__20370_21090,seq__20347,chunk__20360,count__20361,i__20362,name__11622__auto___21097,options__11623__auto___21098,invocations__11624__auto___21099,times__11625__auto___21100,times_QMARK___11626__auto___21101,check_params_QMARK___11627__auto___21102,with__11628__auto___21103,with__11628__auto___21104__$1,invocations_str__11629__auto___21105,n_21096,mode_21091,ai,take_turn_orig_val__20345,take_turn_temp_val__20346,_STAR_parent_description_STAR__orig_val__20229_20919,_STAR_parent_description_STAR__temp_val__20230_20920,description__11238__auto____$1,_STAR_parent_description_STAR__orig_val__19701_20376,_STAR_parent_description_STAR__temp_val__19702_20377,description__11238__auto___20375))
,invocations__11624__auto___21099))){
} else {
throw (new speclj.platform.SpecFailure(["Expected: invocation of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__11622__auto___21097)," with ",cljs.core.pr_str.call(null,with__11628__auto___21104__$1),speclj.platform.endl,"     got: ",cljs.core.pr_str.call(null,invocations__11624__auto___21099)].join('')));
}
} else {
if(times_QMARK___11626__auto___21101){
if(cljs.core._EQ_.call(null,times__11625__auto___21100,cljs.core.count.call(null,invocations__11624__auto___21099))){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(times__11625__auto___21100)," ",invocations_str__11629__auto___21105.call(null,times__11625__auto___21100)," of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__11622__auto___21097),speclj.platform.endl,"     got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,invocations__11624__auto___21099))].join('')));
}
} else {
if(cljs.core.seq.call(null,invocations__11624__auto___21099)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: an invocation of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__11622__auto___21097),speclj.platform.endl,"     got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,invocations__11624__auto___21099))].join('')));
}

}
}
}

var expected__11375__auto___21108 = ((cljs.core._EQ_.call(null,(2),mode_21091))?new cljs.core.Keyword(null,"x","x",2099068185):new cljs.core.Keyword(null,"o","o",-1350007228));
var actual__11376__auto___21109 = new cljs.core.Keyword(null,"player","player",-97687400).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.screens.play_spec.state));
if(cljs.core._EQ_.call(null,expected__11375__auto___21108,actual__11376__auto___21109)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__11375__auto___21108;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11343__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11343__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__11376__auto___21109;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11343__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11343__auto__);
}
})()," (using =)"].join('')));
}

cljs.core.reset_BANG_.call(null,tic_tac_toe.screens.play_spec.state,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"board","board",-1907017633),tic_tac_toe.screens.play_spec.board_4,new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"current-screen","current-screen",-1454713691),new cljs.core.Keyword(null,"play","play",-580418022)], null));


var G__21110 = seq__20371_21092;
var G__21111 = chunk__20372_21093;
var G__21112 = count__20373_21094;
var G__21113 = (i__20374_21095 + (1));
seq__20371_21092 = G__21110;
chunk__20372_21093 = G__21111;
count__20373_21094 = G__21112;
i__20374_21095 = G__21113;
continue;
} else {
var temp__5804__auto___21114 = cljs.core.seq.call(null,seq__20371_21092);
if(temp__5804__auto___21114){
var seq__20371_21115__$1 = temp__5804__auto___21114;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20371_21115__$1)){
var c__5525__auto___21116 = cljs.core.chunk_first.call(null,seq__20371_21115__$1);
var G__21117 = cljs.core.chunk_rest.call(null,seq__20371_21115__$1);
var G__21118 = c__5525__auto___21116;
var G__21119 = cljs.core.count.call(null,c__5525__auto___21116);
var G__21120 = (0);
seq__20371_21092 = G__21117;
chunk__20372_21093 = G__21118;
count__20373_21094 = G__21119;
i__20374_21095 = G__21120;
continue;
} else {
var n_21121 = cljs.core.first.call(null,seq__20371_21115__$1);
cljs.core.swap_BANG_.call(null,tic_tac_toe.screens.play_spec.state,cljs.core.assoc,new cljs.core.Keyword(null,"mode","mode",654403691),mode_21091,new cljs.core.Keyword(null,"first-ai-level","first-ai-level",1004633644),ai,new cljs.core.Keyword(null,"player","player",-97687400),((cljs.core._EQ_.call(null,(2),mode_21091))?new cljs.core.Keyword(null,"x","x",2099068185):new cljs.core.Keyword(null,"o","o",-1350007228)),new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"gui","gui",604532813));

c3kit.wire.spec_helper.render.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tic_tac_toe.render_screen.render_screen,tic_tac_toe.screens.play_spec.state], null));

c3kit.wire.spec_helper.click_BANG_.call(null,["#index-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n_21121)].join(''));

var name__11622__auto___21122 = new cljs.core.Keyword(null,"turn","turn",75759344);
var options__11623__auto___21123 = cljs.core.PersistentArrayMap.EMPTY;
var invocations__11624__auto___21124 = speclj.stub.invocations_of.call(null,name__11622__auto___21122);
var times__11625__auto___21125 = new cljs.core.Keyword(null,"times","times",1671571467).cljs$core$IFn$_invoke$arity$1(options__11623__auto___21123);
var times_QMARK___11626__auto___21126 = typeof times__11625__auto___21125 === 'number';
var check_params_QMARK___11627__auto___21127 = cljs.core.contains_QMARK_.call(null,options__11623__auto___21123,new cljs.core.Keyword(null,"with","with",-1536296876));
var with__11628__auto___21128 = new cljs.core.Keyword(null,"with","with",-1536296876).cljs$core$IFn$_invoke$arity$1(options__11623__auto___21123);
var with__11628__auto___21129__$1 = (((with__11628__auto___21128 == null))?cljs.core.PersistentVector.EMPTY:with__11628__auto___21128);
var invocations_str__11629__auto___21130 = ((function (seq__20371_21092,chunk__20372_21093,count__20373_21094,i__20374_21095,seq__20363_21087,chunk__20368_21088,count__20369_21089,i__20370_21090,seq__20347,chunk__20360,count__20361,i__20362,name__11622__auto___21122,options__11623__auto___21123,invocations__11624__auto___21124,times__11625__auto___21125,times_QMARK___11626__auto___21126,check_params_QMARK___11627__auto___21127,with__11628__auto___21128,with__11628__auto___21129__$1,n_21121,seq__20371_21115__$1,temp__5804__auto___21114,mode_21091,ai,take_turn_orig_val__20345,take_turn_temp_val__20346,_STAR_parent_description_STAR__orig_val__20229_20919,_STAR_parent_description_STAR__temp_val__20230_20920,description__11238__auto____$1,_STAR_parent_description_STAR__orig_val__19701_20376,_STAR_parent_description_STAR__temp_val__19702_20377,description__11238__auto___20375){
return (function (p1__11619__11630__auto__){
if(cljs.core._EQ_.call(null,(1),p1__11619__11630__auto__)){
return "invocation";
} else {
return "invocations";
}
});})(seq__20371_21092,chunk__20372_21093,count__20373_21094,i__20374_21095,seq__20363_21087,chunk__20368_21088,count__20369_21089,i__20370_21090,seq__20347,chunk__20360,count__20361,i__20362,name__11622__auto___21122,options__11623__auto___21123,invocations__11624__auto___21124,times__11625__auto___21125,times_QMARK___11626__auto___21126,check_params_QMARK___11627__auto___21127,with__11628__auto___21128,with__11628__auto___21129__$1,n_21121,seq__20371_21115__$1,temp__5804__auto___21114,mode_21091,ai,take_turn_orig_val__20345,take_turn_temp_val__20346,_STAR_parent_description_STAR__orig_val__20229_20919,_STAR_parent_description_STAR__temp_val__20230_20920,description__11238__auto____$1,_STAR_parent_description_STAR__orig_val__19701_20376,_STAR_parent_description_STAR__temp_val__19702_20377,description__11238__auto___20375))
;
if(((times_QMARK___11626__auto___21126) && (check_params_QMARK___11627__auto___21127))){
var matching_invocations__11631__auto___21131 = cljs.core.filter.call(null,((function (seq__20371_21092,chunk__20372_21093,count__20373_21094,i__20374_21095,seq__20363_21087,chunk__20368_21088,count__20369_21089,i__20370_21090,seq__20347,chunk__20360,count__20361,i__20362,name__11622__auto___21122,options__11623__auto___21123,invocations__11624__auto___21124,times__11625__auto___21125,times_QMARK___11626__auto___21126,check_params_QMARK___11627__auto___21127,with__11628__auto___21128,with__11628__auto___21129__$1,invocations_str__11629__auto___21130,n_21121,seq__20371_21115__$1,temp__5804__auto___21114,mode_21091,ai,take_turn_orig_val__20345,take_turn_temp_val__20346,_STAR_parent_description_STAR__orig_val__20229_20919,_STAR_parent_description_STAR__temp_val__20230_20920,description__11238__auto____$1,_STAR_parent_description_STAR__orig_val__19701_20376,_STAR_parent_description_STAR__temp_val__19702_20377,description__11238__auto___20375){
return (function (p1__11620__11632__auto__){
return speclj.stub.params_match_QMARK_.call(null,with__11628__auto___21129__$1,p1__11620__11632__auto__);
});})(seq__20371_21092,chunk__20372_21093,count__20373_21094,i__20374_21095,seq__20363_21087,chunk__20368_21088,count__20369_21089,i__20370_21090,seq__20347,chunk__20360,count__20361,i__20362,name__11622__auto___21122,options__11623__auto___21123,invocations__11624__auto___21124,times__11625__auto___21125,times_QMARK___11626__auto___21126,check_params_QMARK___11627__auto___21127,with__11628__auto___21128,with__11628__auto___21129__$1,invocations_str__11629__auto___21130,n_21121,seq__20371_21115__$1,temp__5804__auto___21114,mode_21091,ai,take_turn_orig_val__20345,take_turn_temp_val__20346,_STAR_parent_description_STAR__orig_val__20229_20919,_STAR_parent_description_STAR__temp_val__20230_20920,description__11238__auto____$1,_STAR_parent_description_STAR__orig_val__19701_20376,_STAR_parent_description_STAR__temp_val__19702_20377,description__11238__auto___20375))
,invocations__11624__auto___21124);
var matching_count__11633__auto___21132 = cljs.core.count.call(null,matching_invocations__11631__auto___21131);
if(cljs.core._EQ_.call(null,times__11625__auto___21125,matching_count__11633__auto___21132)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(times__11625__auto___21125)," ",invocations_str__11629__auto___21130.call(null,times__11625__auto___21125)," of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__11622__auto___21122)," with ",cljs.core.pr_str.call(null,with__11628__auto___21129__$1),speclj.platform.endl,"     got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(matching_count__11633__auto___21132)," ",invocations_str__11629__auto___21130.call(null,matching_count__11633__auto___21132)].join('')));
}
} else {
if(check_params_QMARK___11627__auto___21127){
if(cljs.core.truth_(cljs.core.some.call(null,((function (seq__20371_21092,chunk__20372_21093,count__20373_21094,i__20374_21095,seq__20363_21087,chunk__20368_21088,count__20369_21089,i__20370_21090,seq__20347,chunk__20360,count__20361,i__20362,name__11622__auto___21122,options__11623__auto___21123,invocations__11624__auto___21124,times__11625__auto___21125,times_QMARK___11626__auto___21126,check_params_QMARK___11627__auto___21127,with__11628__auto___21128,with__11628__auto___21129__$1,invocations_str__11629__auto___21130,n_21121,seq__20371_21115__$1,temp__5804__auto___21114,mode_21091,ai,take_turn_orig_val__20345,take_turn_temp_val__20346,_STAR_parent_description_STAR__orig_val__20229_20919,_STAR_parent_description_STAR__temp_val__20230_20920,description__11238__auto____$1,_STAR_parent_description_STAR__orig_val__19701_20376,_STAR_parent_description_STAR__temp_val__19702_20377,description__11238__auto___20375){
return (function (p1__11621__11634__auto__){
return speclj.stub.params_match_QMARK_.call(null,with__11628__auto___21129__$1,p1__11621__11634__auto__);
});})(seq__20371_21092,chunk__20372_21093,count__20373_21094,i__20374_21095,seq__20363_21087,chunk__20368_21088,count__20369_21089,i__20370_21090,seq__20347,chunk__20360,count__20361,i__20362,name__11622__auto___21122,options__11623__auto___21123,invocations__11624__auto___21124,times__11625__auto___21125,times_QMARK___11626__auto___21126,check_params_QMARK___11627__auto___21127,with__11628__auto___21128,with__11628__auto___21129__$1,invocations_str__11629__auto___21130,n_21121,seq__20371_21115__$1,temp__5804__auto___21114,mode_21091,ai,take_turn_orig_val__20345,take_turn_temp_val__20346,_STAR_parent_description_STAR__orig_val__20229_20919,_STAR_parent_description_STAR__temp_val__20230_20920,description__11238__auto____$1,_STAR_parent_description_STAR__orig_val__19701_20376,_STAR_parent_description_STAR__temp_val__19702_20377,description__11238__auto___20375))
,invocations__11624__auto___21124))){
} else {
throw (new speclj.platform.SpecFailure(["Expected: invocation of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__11622__auto___21122)," with ",cljs.core.pr_str.call(null,with__11628__auto___21129__$1),speclj.platform.endl,"     got: ",cljs.core.pr_str.call(null,invocations__11624__auto___21124)].join('')));
}
} else {
if(times_QMARK___11626__auto___21126){
if(cljs.core._EQ_.call(null,times__11625__auto___21125,cljs.core.count.call(null,invocations__11624__auto___21124))){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(times__11625__auto___21125)," ",invocations_str__11629__auto___21130.call(null,times__11625__auto___21125)," of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__11622__auto___21122),speclj.platform.endl,"     got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,invocations__11624__auto___21124))].join('')));
}
} else {
if(cljs.core.seq.call(null,invocations__11624__auto___21124)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: an invocation of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__11622__auto___21122),speclj.platform.endl,"     got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,invocations__11624__auto___21124))].join('')));
}

}
}
}

var expected__11375__auto___21133 = ((cljs.core._EQ_.call(null,(2),mode_21091))?new cljs.core.Keyword(null,"x","x",2099068185):new cljs.core.Keyword(null,"o","o",-1350007228));
var actual__11376__auto___21134 = new cljs.core.Keyword(null,"player","player",-97687400).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.screens.play_spec.state));
if(cljs.core._EQ_.call(null,expected__11375__auto___21133,actual__11376__auto___21134)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__11375__auto___21133;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11343__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11343__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__11376__auto___21134;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11343__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11343__auto__);
}
})()," (using =)"].join('')));
}

cljs.core.reset_BANG_.call(null,tic_tac_toe.screens.play_spec.state,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"board","board",-1907017633),tic_tac_toe.screens.play_spec.board_4,new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"current-screen","current-screen",-1454713691),new cljs.core.Keyword(null,"play","play",-580418022)], null));


var G__21135 = cljs.core.next.call(null,seq__20371_21115__$1);
var G__21136 = null;
var G__21137 = (0);
var G__21138 = (0);
seq__20371_21092 = G__21135;
chunk__20372_21093 = G__21136;
count__20373_21094 = G__21137;
i__20374_21095 = G__21138;
continue;
}
} else {
}
}
break;
}

var G__21139 = seq__20363_21087;
var G__21140 = chunk__20368_21088;
var G__21141 = count__20369_21089;
var G__21142 = (i__20370_21090 + (1));
seq__20363_21087 = G__21139;
chunk__20368_21088 = G__21140;
count__20369_21089 = G__21141;
i__20370_21090 = G__21142;
continue;
} else {
var temp__5804__auto___21143 = cljs.core.seq.call(null,seq__20363_21087);
if(temp__5804__auto___21143){
var seq__20363_21144__$1 = temp__5804__auto___21143;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20363_21144__$1)){
var c__5525__auto___21145 = cljs.core.chunk_first.call(null,seq__20363_21144__$1);
var G__21146 = cljs.core.chunk_rest.call(null,seq__20363_21144__$1);
var G__21147 = c__5525__auto___21145;
var G__21148 = cljs.core.count.call(null,c__5525__auto___21145);
var G__21149 = (0);
seq__20363_21087 = G__21146;
chunk__20368_21088 = G__21147;
count__20369_21089 = G__21148;
i__20370_21090 = G__21149;
continue;
} else {
var mode_21150 = cljs.core.first.call(null,seq__20363_21144__$1);
var seq__20364_21151 = cljs.core.seq.call(null,cljs.core.range.call(null,(16)));
var chunk__20365_21152 = null;
var count__20366_21153 = (0);
var i__20367_21154 = (0);
while(true){
if((i__20367_21154 < count__20366_21153)){
var n_21155 = cljs.core._nth.call(null,chunk__20365_21152,i__20367_21154);
cljs.core.swap_BANG_.call(null,tic_tac_toe.screens.play_spec.state,cljs.core.assoc,new cljs.core.Keyword(null,"mode","mode",654403691),mode_21150,new cljs.core.Keyword(null,"first-ai-level","first-ai-level",1004633644),ai,new cljs.core.Keyword(null,"player","player",-97687400),((cljs.core._EQ_.call(null,(2),mode_21150))?new cljs.core.Keyword(null,"x","x",2099068185):new cljs.core.Keyword(null,"o","o",-1350007228)),new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"gui","gui",604532813));

c3kit.wire.spec_helper.render.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tic_tac_toe.render_screen.render_screen,tic_tac_toe.screens.play_spec.state], null));

c3kit.wire.spec_helper.click_BANG_.call(null,["#index-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n_21155)].join(''));

var name__11622__auto___21156 = new cljs.core.Keyword(null,"turn","turn",75759344);
var options__11623__auto___21157 = cljs.core.PersistentArrayMap.EMPTY;
var invocations__11624__auto___21158 = speclj.stub.invocations_of.call(null,name__11622__auto___21156);
var times__11625__auto___21159 = new cljs.core.Keyword(null,"times","times",1671571467).cljs$core$IFn$_invoke$arity$1(options__11623__auto___21157);
var times_QMARK___11626__auto___21160 = typeof times__11625__auto___21159 === 'number';
var check_params_QMARK___11627__auto___21161 = cljs.core.contains_QMARK_.call(null,options__11623__auto___21157,new cljs.core.Keyword(null,"with","with",-1536296876));
var with__11628__auto___21162 = new cljs.core.Keyword(null,"with","with",-1536296876).cljs$core$IFn$_invoke$arity$1(options__11623__auto___21157);
var with__11628__auto___21163__$1 = (((with__11628__auto___21162 == null))?cljs.core.PersistentVector.EMPTY:with__11628__auto___21162);
var invocations_str__11629__auto___21164 = ((function (seq__20364_21151,chunk__20365_21152,count__20366_21153,i__20367_21154,seq__20363_21087,chunk__20368_21088,count__20369_21089,i__20370_21090,seq__20347,chunk__20360,count__20361,i__20362,name__11622__auto___21156,options__11623__auto___21157,invocations__11624__auto___21158,times__11625__auto___21159,times_QMARK___11626__auto___21160,check_params_QMARK___11627__auto___21161,with__11628__auto___21162,with__11628__auto___21163__$1,n_21155,mode_21150,seq__20363_21144__$1,temp__5804__auto___21143,ai,take_turn_orig_val__20345,take_turn_temp_val__20346,_STAR_parent_description_STAR__orig_val__20229_20919,_STAR_parent_description_STAR__temp_val__20230_20920,description__11238__auto____$1,_STAR_parent_description_STAR__orig_val__19701_20376,_STAR_parent_description_STAR__temp_val__19702_20377,description__11238__auto___20375){
return (function (p1__11619__11630__auto__){
if(cljs.core._EQ_.call(null,(1),p1__11619__11630__auto__)){
return "invocation";
} else {
return "invocations";
}
});})(seq__20364_21151,chunk__20365_21152,count__20366_21153,i__20367_21154,seq__20363_21087,chunk__20368_21088,count__20369_21089,i__20370_21090,seq__20347,chunk__20360,count__20361,i__20362,name__11622__auto___21156,options__11623__auto___21157,invocations__11624__auto___21158,times__11625__auto___21159,times_QMARK___11626__auto___21160,check_params_QMARK___11627__auto___21161,with__11628__auto___21162,with__11628__auto___21163__$1,n_21155,mode_21150,seq__20363_21144__$1,temp__5804__auto___21143,ai,take_turn_orig_val__20345,take_turn_temp_val__20346,_STAR_parent_description_STAR__orig_val__20229_20919,_STAR_parent_description_STAR__temp_val__20230_20920,description__11238__auto____$1,_STAR_parent_description_STAR__orig_val__19701_20376,_STAR_parent_description_STAR__temp_val__19702_20377,description__11238__auto___20375))
;
if(((times_QMARK___11626__auto___21160) && (check_params_QMARK___11627__auto___21161))){
var matching_invocations__11631__auto___21165 = cljs.core.filter.call(null,((function (seq__20364_21151,chunk__20365_21152,count__20366_21153,i__20367_21154,seq__20363_21087,chunk__20368_21088,count__20369_21089,i__20370_21090,seq__20347,chunk__20360,count__20361,i__20362,name__11622__auto___21156,options__11623__auto___21157,invocations__11624__auto___21158,times__11625__auto___21159,times_QMARK___11626__auto___21160,check_params_QMARK___11627__auto___21161,with__11628__auto___21162,with__11628__auto___21163__$1,invocations_str__11629__auto___21164,n_21155,mode_21150,seq__20363_21144__$1,temp__5804__auto___21143,ai,take_turn_orig_val__20345,take_turn_temp_val__20346,_STAR_parent_description_STAR__orig_val__20229_20919,_STAR_parent_description_STAR__temp_val__20230_20920,description__11238__auto____$1,_STAR_parent_description_STAR__orig_val__19701_20376,_STAR_parent_description_STAR__temp_val__19702_20377,description__11238__auto___20375){
return (function (p1__11620__11632__auto__){
return speclj.stub.params_match_QMARK_.call(null,with__11628__auto___21163__$1,p1__11620__11632__auto__);
});})(seq__20364_21151,chunk__20365_21152,count__20366_21153,i__20367_21154,seq__20363_21087,chunk__20368_21088,count__20369_21089,i__20370_21090,seq__20347,chunk__20360,count__20361,i__20362,name__11622__auto___21156,options__11623__auto___21157,invocations__11624__auto___21158,times__11625__auto___21159,times_QMARK___11626__auto___21160,check_params_QMARK___11627__auto___21161,with__11628__auto___21162,with__11628__auto___21163__$1,invocations_str__11629__auto___21164,n_21155,mode_21150,seq__20363_21144__$1,temp__5804__auto___21143,ai,take_turn_orig_val__20345,take_turn_temp_val__20346,_STAR_parent_description_STAR__orig_val__20229_20919,_STAR_parent_description_STAR__temp_val__20230_20920,description__11238__auto____$1,_STAR_parent_description_STAR__orig_val__19701_20376,_STAR_parent_description_STAR__temp_val__19702_20377,description__11238__auto___20375))
,invocations__11624__auto___21158);
var matching_count__11633__auto___21166 = cljs.core.count.call(null,matching_invocations__11631__auto___21165);
if(cljs.core._EQ_.call(null,times__11625__auto___21159,matching_count__11633__auto___21166)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(times__11625__auto___21159)," ",invocations_str__11629__auto___21164.call(null,times__11625__auto___21159)," of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__11622__auto___21156)," with ",cljs.core.pr_str.call(null,with__11628__auto___21163__$1),speclj.platform.endl,"     got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(matching_count__11633__auto___21166)," ",invocations_str__11629__auto___21164.call(null,matching_count__11633__auto___21166)].join('')));
}
} else {
if(check_params_QMARK___11627__auto___21161){
if(cljs.core.truth_(cljs.core.some.call(null,((function (seq__20364_21151,chunk__20365_21152,count__20366_21153,i__20367_21154,seq__20363_21087,chunk__20368_21088,count__20369_21089,i__20370_21090,seq__20347,chunk__20360,count__20361,i__20362,name__11622__auto___21156,options__11623__auto___21157,invocations__11624__auto___21158,times__11625__auto___21159,times_QMARK___11626__auto___21160,check_params_QMARK___11627__auto___21161,with__11628__auto___21162,with__11628__auto___21163__$1,invocations_str__11629__auto___21164,n_21155,mode_21150,seq__20363_21144__$1,temp__5804__auto___21143,ai,take_turn_orig_val__20345,take_turn_temp_val__20346,_STAR_parent_description_STAR__orig_val__20229_20919,_STAR_parent_description_STAR__temp_val__20230_20920,description__11238__auto____$1,_STAR_parent_description_STAR__orig_val__19701_20376,_STAR_parent_description_STAR__temp_val__19702_20377,description__11238__auto___20375){
return (function (p1__11621__11634__auto__){
return speclj.stub.params_match_QMARK_.call(null,with__11628__auto___21163__$1,p1__11621__11634__auto__);
});})(seq__20364_21151,chunk__20365_21152,count__20366_21153,i__20367_21154,seq__20363_21087,chunk__20368_21088,count__20369_21089,i__20370_21090,seq__20347,chunk__20360,count__20361,i__20362,name__11622__auto___21156,options__11623__auto___21157,invocations__11624__auto___21158,times__11625__auto___21159,times_QMARK___11626__auto___21160,check_params_QMARK___11627__auto___21161,with__11628__auto___21162,with__11628__auto___21163__$1,invocations_str__11629__auto___21164,n_21155,mode_21150,seq__20363_21144__$1,temp__5804__auto___21143,ai,take_turn_orig_val__20345,take_turn_temp_val__20346,_STAR_parent_description_STAR__orig_val__20229_20919,_STAR_parent_description_STAR__temp_val__20230_20920,description__11238__auto____$1,_STAR_parent_description_STAR__orig_val__19701_20376,_STAR_parent_description_STAR__temp_val__19702_20377,description__11238__auto___20375))
,invocations__11624__auto___21158))){
} else {
throw (new speclj.platform.SpecFailure(["Expected: invocation of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__11622__auto___21156)," with ",cljs.core.pr_str.call(null,with__11628__auto___21163__$1),speclj.platform.endl,"     got: ",cljs.core.pr_str.call(null,invocations__11624__auto___21158)].join('')));
}
} else {
if(times_QMARK___11626__auto___21160){
if(cljs.core._EQ_.call(null,times__11625__auto___21159,cljs.core.count.call(null,invocations__11624__auto___21158))){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(times__11625__auto___21159)," ",invocations_str__11629__auto___21164.call(null,times__11625__auto___21159)," of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__11622__auto___21156),speclj.platform.endl,"     got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,invocations__11624__auto___21158))].join('')));
}
} else {
if(cljs.core.seq.call(null,invocations__11624__auto___21158)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: an invocation of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__11622__auto___21156),speclj.platform.endl,"     got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,invocations__11624__auto___21158))].join('')));
}

}
}
}

var expected__11375__auto___21167 = ((cljs.core._EQ_.call(null,(2),mode_21150))?new cljs.core.Keyword(null,"x","x",2099068185):new cljs.core.Keyword(null,"o","o",-1350007228));
var actual__11376__auto___21168 = new cljs.core.Keyword(null,"player","player",-97687400).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.screens.play_spec.state));
if(cljs.core._EQ_.call(null,expected__11375__auto___21167,actual__11376__auto___21168)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__11375__auto___21167;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11343__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11343__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__11376__auto___21168;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11343__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11343__auto__);
}
})()," (using =)"].join('')));
}

cljs.core.reset_BANG_.call(null,tic_tac_toe.screens.play_spec.state,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"board","board",-1907017633),tic_tac_toe.screens.play_spec.board_4,new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"current-screen","current-screen",-1454713691),new cljs.core.Keyword(null,"play","play",-580418022)], null));


var G__21169 = seq__20364_21151;
var G__21170 = chunk__20365_21152;
var G__21171 = count__20366_21153;
var G__21172 = (i__20367_21154 + (1));
seq__20364_21151 = G__21169;
chunk__20365_21152 = G__21170;
count__20366_21153 = G__21171;
i__20367_21154 = G__21172;
continue;
} else {
var temp__5804__auto___21173__$1 = cljs.core.seq.call(null,seq__20364_21151);
if(temp__5804__auto___21173__$1){
var seq__20364_21174__$1 = temp__5804__auto___21173__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20364_21174__$1)){
var c__5525__auto___21175 = cljs.core.chunk_first.call(null,seq__20364_21174__$1);
var G__21176 = cljs.core.chunk_rest.call(null,seq__20364_21174__$1);
var G__21177 = c__5525__auto___21175;
var G__21178 = cljs.core.count.call(null,c__5525__auto___21175);
var G__21179 = (0);
seq__20364_21151 = G__21176;
chunk__20365_21152 = G__21177;
count__20366_21153 = G__21178;
i__20367_21154 = G__21179;
continue;
} else {
var n_21180 = cljs.core.first.call(null,seq__20364_21174__$1);
cljs.core.swap_BANG_.call(null,tic_tac_toe.screens.play_spec.state,cljs.core.assoc,new cljs.core.Keyword(null,"mode","mode",654403691),mode_21150,new cljs.core.Keyword(null,"first-ai-level","first-ai-level",1004633644),ai,new cljs.core.Keyword(null,"player","player",-97687400),((cljs.core._EQ_.call(null,(2),mode_21150))?new cljs.core.Keyword(null,"x","x",2099068185):new cljs.core.Keyword(null,"o","o",-1350007228)),new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"gui","gui",604532813));

c3kit.wire.spec_helper.render.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tic_tac_toe.render_screen.render_screen,tic_tac_toe.screens.play_spec.state], null));

c3kit.wire.spec_helper.click_BANG_.call(null,["#index-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n_21180)].join(''));

var name__11622__auto___21181 = new cljs.core.Keyword(null,"turn","turn",75759344);
var options__11623__auto___21182 = cljs.core.PersistentArrayMap.EMPTY;
var invocations__11624__auto___21183 = speclj.stub.invocations_of.call(null,name__11622__auto___21181);
var times__11625__auto___21184 = new cljs.core.Keyword(null,"times","times",1671571467).cljs$core$IFn$_invoke$arity$1(options__11623__auto___21182);
var times_QMARK___11626__auto___21185 = typeof times__11625__auto___21184 === 'number';
var check_params_QMARK___11627__auto___21186 = cljs.core.contains_QMARK_.call(null,options__11623__auto___21182,new cljs.core.Keyword(null,"with","with",-1536296876));
var with__11628__auto___21187 = new cljs.core.Keyword(null,"with","with",-1536296876).cljs$core$IFn$_invoke$arity$1(options__11623__auto___21182);
var with__11628__auto___21188__$1 = (((with__11628__auto___21187 == null))?cljs.core.PersistentVector.EMPTY:with__11628__auto___21187);
var invocations_str__11629__auto___21189 = ((function (seq__20364_21151,chunk__20365_21152,count__20366_21153,i__20367_21154,seq__20363_21087,chunk__20368_21088,count__20369_21089,i__20370_21090,seq__20347,chunk__20360,count__20361,i__20362,name__11622__auto___21181,options__11623__auto___21182,invocations__11624__auto___21183,times__11625__auto___21184,times_QMARK___11626__auto___21185,check_params_QMARK___11627__auto___21186,with__11628__auto___21187,with__11628__auto___21188__$1,n_21180,seq__20364_21174__$1,temp__5804__auto___21173__$1,mode_21150,seq__20363_21144__$1,temp__5804__auto___21143,ai,take_turn_orig_val__20345,take_turn_temp_val__20346,_STAR_parent_description_STAR__orig_val__20229_20919,_STAR_parent_description_STAR__temp_val__20230_20920,description__11238__auto____$1,_STAR_parent_description_STAR__orig_val__19701_20376,_STAR_parent_description_STAR__temp_val__19702_20377,description__11238__auto___20375){
return (function (p1__11619__11630__auto__){
if(cljs.core._EQ_.call(null,(1),p1__11619__11630__auto__)){
return "invocation";
} else {
return "invocations";
}
});})(seq__20364_21151,chunk__20365_21152,count__20366_21153,i__20367_21154,seq__20363_21087,chunk__20368_21088,count__20369_21089,i__20370_21090,seq__20347,chunk__20360,count__20361,i__20362,name__11622__auto___21181,options__11623__auto___21182,invocations__11624__auto___21183,times__11625__auto___21184,times_QMARK___11626__auto___21185,check_params_QMARK___11627__auto___21186,with__11628__auto___21187,with__11628__auto___21188__$1,n_21180,seq__20364_21174__$1,temp__5804__auto___21173__$1,mode_21150,seq__20363_21144__$1,temp__5804__auto___21143,ai,take_turn_orig_val__20345,take_turn_temp_val__20346,_STAR_parent_description_STAR__orig_val__20229_20919,_STAR_parent_description_STAR__temp_val__20230_20920,description__11238__auto____$1,_STAR_parent_description_STAR__orig_val__19701_20376,_STAR_parent_description_STAR__temp_val__19702_20377,description__11238__auto___20375))
;
if(((times_QMARK___11626__auto___21185) && (check_params_QMARK___11627__auto___21186))){
var matching_invocations__11631__auto___21190 = cljs.core.filter.call(null,((function (seq__20364_21151,chunk__20365_21152,count__20366_21153,i__20367_21154,seq__20363_21087,chunk__20368_21088,count__20369_21089,i__20370_21090,seq__20347,chunk__20360,count__20361,i__20362,name__11622__auto___21181,options__11623__auto___21182,invocations__11624__auto___21183,times__11625__auto___21184,times_QMARK___11626__auto___21185,check_params_QMARK___11627__auto___21186,with__11628__auto___21187,with__11628__auto___21188__$1,invocations_str__11629__auto___21189,n_21180,seq__20364_21174__$1,temp__5804__auto___21173__$1,mode_21150,seq__20363_21144__$1,temp__5804__auto___21143,ai,take_turn_orig_val__20345,take_turn_temp_val__20346,_STAR_parent_description_STAR__orig_val__20229_20919,_STAR_parent_description_STAR__temp_val__20230_20920,description__11238__auto____$1,_STAR_parent_description_STAR__orig_val__19701_20376,_STAR_parent_description_STAR__temp_val__19702_20377,description__11238__auto___20375){
return (function (p1__11620__11632__auto__){
return speclj.stub.params_match_QMARK_.call(null,with__11628__auto___21188__$1,p1__11620__11632__auto__);
});})(seq__20364_21151,chunk__20365_21152,count__20366_21153,i__20367_21154,seq__20363_21087,chunk__20368_21088,count__20369_21089,i__20370_21090,seq__20347,chunk__20360,count__20361,i__20362,name__11622__auto___21181,options__11623__auto___21182,invocations__11624__auto___21183,times__11625__auto___21184,times_QMARK___11626__auto___21185,check_params_QMARK___11627__auto___21186,with__11628__auto___21187,with__11628__auto___21188__$1,invocations_str__11629__auto___21189,n_21180,seq__20364_21174__$1,temp__5804__auto___21173__$1,mode_21150,seq__20363_21144__$1,temp__5804__auto___21143,ai,take_turn_orig_val__20345,take_turn_temp_val__20346,_STAR_parent_description_STAR__orig_val__20229_20919,_STAR_parent_description_STAR__temp_val__20230_20920,description__11238__auto____$1,_STAR_parent_description_STAR__orig_val__19701_20376,_STAR_parent_description_STAR__temp_val__19702_20377,description__11238__auto___20375))
,invocations__11624__auto___21183);
var matching_count__11633__auto___21191 = cljs.core.count.call(null,matching_invocations__11631__auto___21190);
if(cljs.core._EQ_.call(null,times__11625__auto___21184,matching_count__11633__auto___21191)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(times__11625__auto___21184)," ",invocations_str__11629__auto___21189.call(null,times__11625__auto___21184)," of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__11622__auto___21181)," with ",cljs.core.pr_str.call(null,with__11628__auto___21188__$1),speclj.platform.endl,"     got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(matching_count__11633__auto___21191)," ",invocations_str__11629__auto___21189.call(null,matching_count__11633__auto___21191)].join('')));
}
} else {
if(check_params_QMARK___11627__auto___21186){
if(cljs.core.truth_(cljs.core.some.call(null,((function (seq__20364_21151,chunk__20365_21152,count__20366_21153,i__20367_21154,seq__20363_21087,chunk__20368_21088,count__20369_21089,i__20370_21090,seq__20347,chunk__20360,count__20361,i__20362,name__11622__auto___21181,options__11623__auto___21182,invocations__11624__auto___21183,times__11625__auto___21184,times_QMARK___11626__auto___21185,check_params_QMARK___11627__auto___21186,with__11628__auto___21187,with__11628__auto___21188__$1,invocations_str__11629__auto___21189,n_21180,seq__20364_21174__$1,temp__5804__auto___21173__$1,mode_21150,seq__20363_21144__$1,temp__5804__auto___21143,ai,take_turn_orig_val__20345,take_turn_temp_val__20346,_STAR_parent_description_STAR__orig_val__20229_20919,_STAR_parent_description_STAR__temp_val__20230_20920,description__11238__auto____$1,_STAR_parent_description_STAR__orig_val__19701_20376,_STAR_parent_description_STAR__temp_val__19702_20377,description__11238__auto___20375){
return (function (p1__11621__11634__auto__){
return speclj.stub.params_match_QMARK_.call(null,with__11628__auto___21188__$1,p1__11621__11634__auto__);
});})(seq__20364_21151,chunk__20365_21152,count__20366_21153,i__20367_21154,seq__20363_21087,chunk__20368_21088,count__20369_21089,i__20370_21090,seq__20347,chunk__20360,count__20361,i__20362,name__11622__auto___21181,options__11623__auto___21182,invocations__11624__auto___21183,times__11625__auto___21184,times_QMARK___11626__auto___21185,check_params_QMARK___11627__auto___21186,with__11628__auto___21187,with__11628__auto___21188__$1,invocations_str__11629__auto___21189,n_21180,seq__20364_21174__$1,temp__5804__auto___21173__$1,mode_21150,seq__20363_21144__$1,temp__5804__auto___21143,ai,take_turn_orig_val__20345,take_turn_temp_val__20346,_STAR_parent_description_STAR__orig_val__20229_20919,_STAR_parent_description_STAR__temp_val__20230_20920,description__11238__auto____$1,_STAR_parent_description_STAR__orig_val__19701_20376,_STAR_parent_description_STAR__temp_val__19702_20377,description__11238__auto___20375))
,invocations__11624__auto___21183))){
} else {
throw (new speclj.platform.SpecFailure(["Expected: invocation of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__11622__auto___21181)," with ",cljs.core.pr_str.call(null,with__11628__auto___21188__$1),speclj.platform.endl,"     got: ",cljs.core.pr_str.call(null,invocations__11624__auto___21183)].join('')));
}
} else {
if(times_QMARK___11626__auto___21185){
if(cljs.core._EQ_.call(null,times__11625__auto___21184,cljs.core.count.call(null,invocations__11624__auto___21183))){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(times__11625__auto___21184)," ",invocations_str__11629__auto___21189.call(null,times__11625__auto___21184)," of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__11622__auto___21181),speclj.platform.endl,"     got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,invocations__11624__auto___21183))].join('')));
}
} else {
if(cljs.core.seq.call(null,invocations__11624__auto___21183)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: an invocation of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__11622__auto___21181),speclj.platform.endl,"     got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,invocations__11624__auto___21183))].join('')));
}

}
}
}

var expected__11375__auto___21192 = ((cljs.core._EQ_.call(null,(2),mode_21150))?new cljs.core.Keyword(null,"x","x",2099068185):new cljs.core.Keyword(null,"o","o",-1350007228));
var actual__11376__auto___21193 = new cljs.core.Keyword(null,"player","player",-97687400).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.screens.play_spec.state));
if(cljs.core._EQ_.call(null,expected__11375__auto___21192,actual__11376__auto___21193)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__11375__auto___21192;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11343__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11343__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__11376__auto___21193;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11343__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11343__auto__);
}
})()," (using =)"].join('')));
}

cljs.core.reset_BANG_.call(null,tic_tac_toe.screens.play_spec.state,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"board","board",-1907017633),tic_tac_toe.screens.play_spec.board_4,new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"current-screen","current-screen",-1454713691),new cljs.core.Keyword(null,"play","play",-580418022)], null));


var G__21194 = cljs.core.next.call(null,seq__20364_21174__$1);
var G__21195 = null;
var G__21196 = (0);
var G__21197 = (0);
seq__20364_21151 = G__21194;
chunk__20365_21152 = G__21195;
count__20366_21153 = G__21196;
i__20367_21154 = G__21197;
continue;
}
} else {
}
}
break;
}

var G__21198 = cljs.core.next.call(null,seq__20363_21144__$1);
var G__21199 = null;
var G__21200 = (0);
var G__21201 = (0);
seq__20363_21087 = G__21198;
chunk__20368_21088 = G__21199;
count__20369_21089 = G__21200;
i__20370_21090 = G__21201;
continue;
}
} else {
}
}
break;
}

var G__21202 = seq__20347;
var G__21203 = chunk__20360;
var G__21204 = count__20361;
var G__21205 = (i__20362 + (1));
seq__20347 = G__21202;
chunk__20360 = G__21203;
count__20361 = G__21204;
i__20362 = G__21205;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__20347);
if(temp__5804__auto__){
var seq__20347__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20347__$1)){
var c__5525__auto__ = cljs.core.chunk_first.call(null,seq__20347__$1);
var G__21206 = cljs.core.chunk_rest.call(null,seq__20347__$1);
var G__21207 = c__5525__auto__;
var G__21208 = cljs.core.count.call(null,c__5525__auto__);
var G__21209 = (0);
seq__20347 = G__21206;
chunk__20360 = G__21207;
count__20361 = G__21208;
i__20362 = G__21209;
continue;
} else {
var ai = cljs.core.first.call(null,seq__20347__$1);
var seq__20348_21210 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(3)], null));
var chunk__20353_21211 = null;
var count__20354_21212 = (0);
var i__20355_21213 = (0);
while(true){
if((i__20355_21213 < count__20354_21212)){
var mode_21214 = cljs.core._nth.call(null,chunk__20353_21211,i__20355_21213);
var seq__20356_21215 = cljs.core.seq.call(null,cljs.core.range.call(null,(16)));
var chunk__20357_21216 = null;
var count__20358_21217 = (0);
var i__20359_21218 = (0);
while(true){
if((i__20359_21218 < count__20358_21217)){
var n_21219 = cljs.core._nth.call(null,chunk__20357_21216,i__20359_21218);
cljs.core.swap_BANG_.call(null,tic_tac_toe.screens.play_spec.state,cljs.core.assoc,new cljs.core.Keyword(null,"mode","mode",654403691),mode_21214,new cljs.core.Keyword(null,"first-ai-level","first-ai-level",1004633644),ai,new cljs.core.Keyword(null,"player","player",-97687400),((cljs.core._EQ_.call(null,(2),mode_21214))?new cljs.core.Keyword(null,"x","x",2099068185):new cljs.core.Keyword(null,"o","o",-1350007228)),new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"gui","gui",604532813));

c3kit.wire.spec_helper.render.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tic_tac_toe.render_screen.render_screen,tic_tac_toe.screens.play_spec.state], null));

c3kit.wire.spec_helper.click_BANG_.call(null,["#index-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n_21219)].join(''));

var name__11622__auto___21220 = new cljs.core.Keyword(null,"turn","turn",75759344);
var options__11623__auto___21221 = cljs.core.PersistentArrayMap.EMPTY;
var invocations__11624__auto___21222 = speclj.stub.invocations_of.call(null,name__11622__auto___21220);
var times__11625__auto___21223 = new cljs.core.Keyword(null,"times","times",1671571467).cljs$core$IFn$_invoke$arity$1(options__11623__auto___21221);
var times_QMARK___11626__auto___21224 = typeof times__11625__auto___21223 === 'number';
var check_params_QMARK___11627__auto___21225 = cljs.core.contains_QMARK_.call(null,options__11623__auto___21221,new cljs.core.Keyword(null,"with","with",-1536296876));
var with__11628__auto___21226 = new cljs.core.Keyword(null,"with","with",-1536296876).cljs$core$IFn$_invoke$arity$1(options__11623__auto___21221);
var with__11628__auto___21227__$1 = (((with__11628__auto___21226 == null))?cljs.core.PersistentVector.EMPTY:with__11628__auto___21226);
var invocations_str__11629__auto___21228 = ((function (seq__20356_21215,chunk__20357_21216,count__20358_21217,i__20359_21218,seq__20348_21210,chunk__20353_21211,count__20354_21212,i__20355_21213,seq__20347,chunk__20360,count__20361,i__20362,name__11622__auto___21220,options__11623__auto___21221,invocations__11624__auto___21222,times__11625__auto___21223,times_QMARK___11626__auto___21224,check_params_QMARK___11627__auto___21225,with__11628__auto___21226,with__11628__auto___21227__$1,n_21219,mode_21214,ai,seq__20347__$1,temp__5804__auto__,take_turn_orig_val__20345,take_turn_temp_val__20346,_STAR_parent_description_STAR__orig_val__20229_20919,_STAR_parent_description_STAR__temp_val__20230_20920,description__11238__auto____$1,_STAR_parent_description_STAR__orig_val__19701_20376,_STAR_parent_description_STAR__temp_val__19702_20377,description__11238__auto___20375){
return (function (p1__11619__11630__auto__){
if(cljs.core._EQ_.call(null,(1),p1__11619__11630__auto__)){
return "invocation";
} else {
return "invocations";
}
});})(seq__20356_21215,chunk__20357_21216,count__20358_21217,i__20359_21218,seq__20348_21210,chunk__20353_21211,count__20354_21212,i__20355_21213,seq__20347,chunk__20360,count__20361,i__20362,name__11622__auto___21220,options__11623__auto___21221,invocations__11624__auto___21222,times__11625__auto___21223,times_QMARK___11626__auto___21224,check_params_QMARK___11627__auto___21225,with__11628__auto___21226,with__11628__auto___21227__$1,n_21219,mode_21214,ai,seq__20347__$1,temp__5804__auto__,take_turn_orig_val__20345,take_turn_temp_val__20346,_STAR_parent_description_STAR__orig_val__20229_20919,_STAR_parent_description_STAR__temp_val__20230_20920,description__11238__auto____$1,_STAR_parent_description_STAR__orig_val__19701_20376,_STAR_parent_description_STAR__temp_val__19702_20377,description__11238__auto___20375))
;
if(((times_QMARK___11626__auto___21224) && (check_params_QMARK___11627__auto___21225))){
var matching_invocations__11631__auto___21229 = cljs.core.filter.call(null,((function (seq__20356_21215,chunk__20357_21216,count__20358_21217,i__20359_21218,seq__20348_21210,chunk__20353_21211,count__20354_21212,i__20355_21213,seq__20347,chunk__20360,count__20361,i__20362,name__11622__auto___21220,options__11623__auto___21221,invocations__11624__auto___21222,times__11625__auto___21223,times_QMARK___11626__auto___21224,check_params_QMARK___11627__auto___21225,with__11628__auto___21226,with__11628__auto___21227__$1,invocations_str__11629__auto___21228,n_21219,mode_21214,ai,seq__20347__$1,temp__5804__auto__,take_turn_orig_val__20345,take_turn_temp_val__20346,_STAR_parent_description_STAR__orig_val__20229_20919,_STAR_parent_description_STAR__temp_val__20230_20920,description__11238__auto____$1,_STAR_parent_description_STAR__orig_val__19701_20376,_STAR_parent_description_STAR__temp_val__19702_20377,description__11238__auto___20375){
return (function (p1__11620__11632__auto__){
return speclj.stub.params_match_QMARK_.call(null,with__11628__auto___21227__$1,p1__11620__11632__auto__);
});})(seq__20356_21215,chunk__20357_21216,count__20358_21217,i__20359_21218,seq__20348_21210,chunk__20353_21211,count__20354_21212,i__20355_21213,seq__20347,chunk__20360,count__20361,i__20362,name__11622__auto___21220,options__11623__auto___21221,invocations__11624__auto___21222,times__11625__auto___21223,times_QMARK___11626__auto___21224,check_params_QMARK___11627__auto___21225,with__11628__auto___21226,with__11628__auto___21227__$1,invocations_str__11629__auto___21228,n_21219,mode_21214,ai,seq__20347__$1,temp__5804__auto__,take_turn_orig_val__20345,take_turn_temp_val__20346,_STAR_parent_description_STAR__orig_val__20229_20919,_STAR_parent_description_STAR__temp_val__20230_20920,description__11238__auto____$1,_STAR_parent_description_STAR__orig_val__19701_20376,_STAR_parent_description_STAR__temp_val__19702_20377,description__11238__auto___20375))
,invocations__11624__auto___21222);
var matching_count__11633__auto___21230 = cljs.core.count.call(null,matching_invocations__11631__auto___21229);
if(cljs.core._EQ_.call(null,times__11625__auto___21223,matching_count__11633__auto___21230)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(times__11625__auto___21223)," ",invocations_str__11629__auto___21228.call(null,times__11625__auto___21223)," of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__11622__auto___21220)," with ",cljs.core.pr_str.call(null,with__11628__auto___21227__$1),speclj.platform.endl,"     got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(matching_count__11633__auto___21230)," ",invocations_str__11629__auto___21228.call(null,matching_count__11633__auto___21230)].join('')));
}
} else {
if(check_params_QMARK___11627__auto___21225){
if(cljs.core.truth_(cljs.core.some.call(null,((function (seq__20356_21215,chunk__20357_21216,count__20358_21217,i__20359_21218,seq__20348_21210,chunk__20353_21211,count__20354_21212,i__20355_21213,seq__20347,chunk__20360,count__20361,i__20362,name__11622__auto___21220,options__11623__auto___21221,invocations__11624__auto___21222,times__11625__auto___21223,times_QMARK___11626__auto___21224,check_params_QMARK___11627__auto___21225,with__11628__auto___21226,with__11628__auto___21227__$1,invocations_str__11629__auto___21228,n_21219,mode_21214,ai,seq__20347__$1,temp__5804__auto__,take_turn_orig_val__20345,take_turn_temp_val__20346,_STAR_parent_description_STAR__orig_val__20229_20919,_STAR_parent_description_STAR__temp_val__20230_20920,description__11238__auto____$1,_STAR_parent_description_STAR__orig_val__19701_20376,_STAR_parent_description_STAR__temp_val__19702_20377,description__11238__auto___20375){
return (function (p1__11621__11634__auto__){
return speclj.stub.params_match_QMARK_.call(null,with__11628__auto___21227__$1,p1__11621__11634__auto__);
});})(seq__20356_21215,chunk__20357_21216,count__20358_21217,i__20359_21218,seq__20348_21210,chunk__20353_21211,count__20354_21212,i__20355_21213,seq__20347,chunk__20360,count__20361,i__20362,name__11622__auto___21220,options__11623__auto___21221,invocations__11624__auto___21222,times__11625__auto___21223,times_QMARK___11626__auto___21224,check_params_QMARK___11627__auto___21225,with__11628__auto___21226,with__11628__auto___21227__$1,invocations_str__11629__auto___21228,n_21219,mode_21214,ai,seq__20347__$1,temp__5804__auto__,take_turn_orig_val__20345,take_turn_temp_val__20346,_STAR_parent_description_STAR__orig_val__20229_20919,_STAR_parent_description_STAR__temp_val__20230_20920,description__11238__auto____$1,_STAR_parent_description_STAR__orig_val__19701_20376,_STAR_parent_description_STAR__temp_val__19702_20377,description__11238__auto___20375))
,invocations__11624__auto___21222))){
} else {
throw (new speclj.platform.SpecFailure(["Expected: invocation of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__11622__auto___21220)," with ",cljs.core.pr_str.call(null,with__11628__auto___21227__$1),speclj.platform.endl,"     got: ",cljs.core.pr_str.call(null,invocations__11624__auto___21222)].join('')));
}
} else {
if(times_QMARK___11626__auto___21224){
if(cljs.core._EQ_.call(null,times__11625__auto___21223,cljs.core.count.call(null,invocations__11624__auto___21222))){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(times__11625__auto___21223)," ",invocations_str__11629__auto___21228.call(null,times__11625__auto___21223)," of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__11622__auto___21220),speclj.platform.endl,"     got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,invocations__11624__auto___21222))].join('')));
}
} else {
if(cljs.core.seq.call(null,invocations__11624__auto___21222)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: an invocation of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__11622__auto___21220),speclj.platform.endl,"     got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,invocations__11624__auto___21222))].join('')));
}

}
}
}

var expected__11375__auto___21231 = ((cljs.core._EQ_.call(null,(2),mode_21214))?new cljs.core.Keyword(null,"x","x",2099068185):new cljs.core.Keyword(null,"o","o",-1350007228));
var actual__11376__auto___21232 = new cljs.core.Keyword(null,"player","player",-97687400).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.screens.play_spec.state));
if(cljs.core._EQ_.call(null,expected__11375__auto___21231,actual__11376__auto___21232)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__11375__auto___21231;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11343__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11343__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__11376__auto___21232;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11343__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11343__auto__);
}
})()," (using =)"].join('')));
}

cljs.core.reset_BANG_.call(null,tic_tac_toe.screens.play_spec.state,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"board","board",-1907017633),tic_tac_toe.screens.play_spec.board_4,new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"current-screen","current-screen",-1454713691),new cljs.core.Keyword(null,"play","play",-580418022)], null));


var G__21233 = seq__20356_21215;
var G__21234 = chunk__20357_21216;
var G__21235 = count__20358_21217;
var G__21236 = (i__20359_21218 + (1));
seq__20356_21215 = G__21233;
chunk__20357_21216 = G__21234;
count__20358_21217 = G__21235;
i__20359_21218 = G__21236;
continue;
} else {
var temp__5804__auto___21237__$1 = cljs.core.seq.call(null,seq__20356_21215);
if(temp__5804__auto___21237__$1){
var seq__20356_21238__$1 = temp__5804__auto___21237__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20356_21238__$1)){
var c__5525__auto___21239 = cljs.core.chunk_first.call(null,seq__20356_21238__$1);
var G__21240 = cljs.core.chunk_rest.call(null,seq__20356_21238__$1);
var G__21241 = c__5525__auto___21239;
var G__21242 = cljs.core.count.call(null,c__5525__auto___21239);
var G__21243 = (0);
seq__20356_21215 = G__21240;
chunk__20357_21216 = G__21241;
count__20358_21217 = G__21242;
i__20359_21218 = G__21243;
continue;
} else {
var n_21244 = cljs.core.first.call(null,seq__20356_21238__$1);
cljs.core.swap_BANG_.call(null,tic_tac_toe.screens.play_spec.state,cljs.core.assoc,new cljs.core.Keyword(null,"mode","mode",654403691),mode_21214,new cljs.core.Keyword(null,"first-ai-level","first-ai-level",1004633644),ai,new cljs.core.Keyword(null,"player","player",-97687400),((cljs.core._EQ_.call(null,(2),mode_21214))?new cljs.core.Keyword(null,"x","x",2099068185):new cljs.core.Keyword(null,"o","o",-1350007228)),new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"gui","gui",604532813));

c3kit.wire.spec_helper.render.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tic_tac_toe.render_screen.render_screen,tic_tac_toe.screens.play_spec.state], null));

c3kit.wire.spec_helper.click_BANG_.call(null,["#index-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n_21244)].join(''));

var name__11622__auto___21245 = new cljs.core.Keyword(null,"turn","turn",75759344);
var options__11623__auto___21246 = cljs.core.PersistentArrayMap.EMPTY;
var invocations__11624__auto___21247 = speclj.stub.invocations_of.call(null,name__11622__auto___21245);
var times__11625__auto___21248 = new cljs.core.Keyword(null,"times","times",1671571467).cljs$core$IFn$_invoke$arity$1(options__11623__auto___21246);
var times_QMARK___11626__auto___21249 = typeof times__11625__auto___21248 === 'number';
var check_params_QMARK___11627__auto___21250 = cljs.core.contains_QMARK_.call(null,options__11623__auto___21246,new cljs.core.Keyword(null,"with","with",-1536296876));
var with__11628__auto___21251 = new cljs.core.Keyword(null,"with","with",-1536296876).cljs$core$IFn$_invoke$arity$1(options__11623__auto___21246);
var with__11628__auto___21252__$1 = (((with__11628__auto___21251 == null))?cljs.core.PersistentVector.EMPTY:with__11628__auto___21251);
var invocations_str__11629__auto___21253 = ((function (seq__20356_21215,chunk__20357_21216,count__20358_21217,i__20359_21218,seq__20348_21210,chunk__20353_21211,count__20354_21212,i__20355_21213,seq__20347,chunk__20360,count__20361,i__20362,name__11622__auto___21245,options__11623__auto___21246,invocations__11624__auto___21247,times__11625__auto___21248,times_QMARK___11626__auto___21249,check_params_QMARK___11627__auto___21250,with__11628__auto___21251,with__11628__auto___21252__$1,n_21244,seq__20356_21238__$1,temp__5804__auto___21237__$1,mode_21214,ai,seq__20347__$1,temp__5804__auto__,take_turn_orig_val__20345,take_turn_temp_val__20346,_STAR_parent_description_STAR__orig_val__20229_20919,_STAR_parent_description_STAR__temp_val__20230_20920,description__11238__auto____$1,_STAR_parent_description_STAR__orig_val__19701_20376,_STAR_parent_description_STAR__temp_val__19702_20377,description__11238__auto___20375){
return (function (p1__11619__11630__auto__){
if(cljs.core._EQ_.call(null,(1),p1__11619__11630__auto__)){
return "invocation";
} else {
return "invocations";
}
});})(seq__20356_21215,chunk__20357_21216,count__20358_21217,i__20359_21218,seq__20348_21210,chunk__20353_21211,count__20354_21212,i__20355_21213,seq__20347,chunk__20360,count__20361,i__20362,name__11622__auto___21245,options__11623__auto___21246,invocations__11624__auto___21247,times__11625__auto___21248,times_QMARK___11626__auto___21249,check_params_QMARK___11627__auto___21250,with__11628__auto___21251,with__11628__auto___21252__$1,n_21244,seq__20356_21238__$1,temp__5804__auto___21237__$1,mode_21214,ai,seq__20347__$1,temp__5804__auto__,take_turn_orig_val__20345,take_turn_temp_val__20346,_STAR_parent_description_STAR__orig_val__20229_20919,_STAR_parent_description_STAR__temp_val__20230_20920,description__11238__auto____$1,_STAR_parent_description_STAR__orig_val__19701_20376,_STAR_parent_description_STAR__temp_val__19702_20377,description__11238__auto___20375))
;
if(((times_QMARK___11626__auto___21249) && (check_params_QMARK___11627__auto___21250))){
var matching_invocations__11631__auto___21254 = cljs.core.filter.call(null,((function (seq__20356_21215,chunk__20357_21216,count__20358_21217,i__20359_21218,seq__20348_21210,chunk__20353_21211,count__20354_21212,i__20355_21213,seq__20347,chunk__20360,count__20361,i__20362,name__11622__auto___21245,options__11623__auto___21246,invocations__11624__auto___21247,times__11625__auto___21248,times_QMARK___11626__auto___21249,check_params_QMARK___11627__auto___21250,with__11628__auto___21251,with__11628__auto___21252__$1,invocations_str__11629__auto___21253,n_21244,seq__20356_21238__$1,temp__5804__auto___21237__$1,mode_21214,ai,seq__20347__$1,temp__5804__auto__,take_turn_orig_val__20345,take_turn_temp_val__20346,_STAR_parent_description_STAR__orig_val__20229_20919,_STAR_parent_description_STAR__temp_val__20230_20920,description__11238__auto____$1,_STAR_parent_description_STAR__orig_val__19701_20376,_STAR_parent_description_STAR__temp_val__19702_20377,description__11238__auto___20375){
return (function (p1__11620__11632__auto__){
return speclj.stub.params_match_QMARK_.call(null,with__11628__auto___21252__$1,p1__11620__11632__auto__);
});})(seq__20356_21215,chunk__20357_21216,count__20358_21217,i__20359_21218,seq__20348_21210,chunk__20353_21211,count__20354_21212,i__20355_21213,seq__20347,chunk__20360,count__20361,i__20362,name__11622__auto___21245,options__11623__auto___21246,invocations__11624__auto___21247,times__11625__auto___21248,times_QMARK___11626__auto___21249,check_params_QMARK___11627__auto___21250,with__11628__auto___21251,with__11628__auto___21252__$1,invocations_str__11629__auto___21253,n_21244,seq__20356_21238__$1,temp__5804__auto___21237__$1,mode_21214,ai,seq__20347__$1,temp__5804__auto__,take_turn_orig_val__20345,take_turn_temp_val__20346,_STAR_parent_description_STAR__orig_val__20229_20919,_STAR_parent_description_STAR__temp_val__20230_20920,description__11238__auto____$1,_STAR_parent_description_STAR__orig_val__19701_20376,_STAR_parent_description_STAR__temp_val__19702_20377,description__11238__auto___20375))
,invocations__11624__auto___21247);
var matching_count__11633__auto___21255 = cljs.core.count.call(null,matching_invocations__11631__auto___21254);
if(cljs.core._EQ_.call(null,times__11625__auto___21248,matching_count__11633__auto___21255)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(times__11625__auto___21248)," ",invocations_str__11629__auto___21253.call(null,times__11625__auto___21248)," of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__11622__auto___21245)," with ",cljs.core.pr_str.call(null,with__11628__auto___21252__$1),speclj.platform.endl,"     got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(matching_count__11633__auto___21255)," ",invocations_str__11629__auto___21253.call(null,matching_count__11633__auto___21255)].join('')));
}
} else {
if(check_params_QMARK___11627__auto___21250){
if(cljs.core.truth_(cljs.core.some.call(null,((function (seq__20356_21215,chunk__20357_21216,count__20358_21217,i__20359_21218,seq__20348_21210,chunk__20353_21211,count__20354_21212,i__20355_21213,seq__20347,chunk__20360,count__20361,i__20362,name__11622__auto___21245,options__11623__auto___21246,invocations__11624__auto___21247,times__11625__auto___21248,times_QMARK___11626__auto___21249,check_params_QMARK___11627__auto___21250,with__11628__auto___21251,with__11628__auto___21252__$1,invocations_str__11629__auto___21253,n_21244,seq__20356_21238__$1,temp__5804__auto___21237__$1,mode_21214,ai,seq__20347__$1,temp__5804__auto__,take_turn_orig_val__20345,take_turn_temp_val__20346,_STAR_parent_description_STAR__orig_val__20229_20919,_STAR_parent_description_STAR__temp_val__20230_20920,description__11238__auto____$1,_STAR_parent_description_STAR__orig_val__19701_20376,_STAR_parent_description_STAR__temp_val__19702_20377,description__11238__auto___20375){
return (function (p1__11621__11634__auto__){
return speclj.stub.params_match_QMARK_.call(null,with__11628__auto___21252__$1,p1__11621__11634__auto__);
});})(seq__20356_21215,chunk__20357_21216,count__20358_21217,i__20359_21218,seq__20348_21210,chunk__20353_21211,count__20354_21212,i__20355_21213,seq__20347,chunk__20360,count__20361,i__20362,name__11622__auto___21245,options__11623__auto___21246,invocations__11624__auto___21247,times__11625__auto___21248,times_QMARK___11626__auto___21249,check_params_QMARK___11627__auto___21250,with__11628__auto___21251,with__11628__auto___21252__$1,invocations_str__11629__auto___21253,n_21244,seq__20356_21238__$1,temp__5804__auto___21237__$1,mode_21214,ai,seq__20347__$1,temp__5804__auto__,take_turn_orig_val__20345,take_turn_temp_val__20346,_STAR_parent_description_STAR__orig_val__20229_20919,_STAR_parent_description_STAR__temp_val__20230_20920,description__11238__auto____$1,_STAR_parent_description_STAR__orig_val__19701_20376,_STAR_parent_description_STAR__temp_val__19702_20377,description__11238__auto___20375))
,invocations__11624__auto___21247))){
} else {
throw (new speclj.platform.SpecFailure(["Expected: invocation of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__11622__auto___21245)," with ",cljs.core.pr_str.call(null,with__11628__auto___21252__$1),speclj.platform.endl,"     got: ",cljs.core.pr_str.call(null,invocations__11624__auto___21247)].join('')));
}
} else {
if(times_QMARK___11626__auto___21249){
if(cljs.core._EQ_.call(null,times__11625__auto___21248,cljs.core.count.call(null,invocations__11624__auto___21247))){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(times__11625__auto___21248)," ",invocations_str__11629__auto___21253.call(null,times__11625__auto___21248)," of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__11622__auto___21245),speclj.platform.endl,"     got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,invocations__11624__auto___21247))].join('')));
}
} else {
if(cljs.core.seq.call(null,invocations__11624__auto___21247)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: an invocation of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__11622__auto___21245),speclj.platform.endl,"     got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,invocations__11624__auto___21247))].join('')));
}

}
}
}

var expected__11375__auto___21256 = ((cljs.core._EQ_.call(null,(2),mode_21214))?new cljs.core.Keyword(null,"x","x",2099068185):new cljs.core.Keyword(null,"o","o",-1350007228));
var actual__11376__auto___21257 = new cljs.core.Keyword(null,"player","player",-97687400).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.screens.play_spec.state));
if(cljs.core._EQ_.call(null,expected__11375__auto___21256,actual__11376__auto___21257)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__11375__auto___21256;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11343__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11343__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__11376__auto___21257;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11343__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11343__auto__);
}
})()," (using =)"].join('')));
}

cljs.core.reset_BANG_.call(null,tic_tac_toe.screens.play_spec.state,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"board","board",-1907017633),tic_tac_toe.screens.play_spec.board_4,new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"current-screen","current-screen",-1454713691),new cljs.core.Keyword(null,"play","play",-580418022)], null));


var G__21258 = cljs.core.next.call(null,seq__20356_21238__$1);
var G__21259 = null;
var G__21260 = (0);
var G__21261 = (0);
seq__20356_21215 = G__21258;
chunk__20357_21216 = G__21259;
count__20358_21217 = G__21260;
i__20359_21218 = G__21261;
continue;
}
} else {
}
}
break;
}

var G__21262 = seq__20348_21210;
var G__21263 = chunk__20353_21211;
var G__21264 = count__20354_21212;
var G__21265 = (i__20355_21213 + (1));
seq__20348_21210 = G__21262;
chunk__20353_21211 = G__21263;
count__20354_21212 = G__21264;
i__20355_21213 = G__21265;
continue;
} else {
var temp__5804__auto___21266__$1 = cljs.core.seq.call(null,seq__20348_21210);
if(temp__5804__auto___21266__$1){
var seq__20348_21267__$1 = temp__5804__auto___21266__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20348_21267__$1)){
var c__5525__auto___21268 = cljs.core.chunk_first.call(null,seq__20348_21267__$1);
var G__21269 = cljs.core.chunk_rest.call(null,seq__20348_21267__$1);
var G__21270 = c__5525__auto___21268;
var G__21271 = cljs.core.count.call(null,c__5525__auto___21268);
var G__21272 = (0);
seq__20348_21210 = G__21269;
chunk__20353_21211 = G__21270;
count__20354_21212 = G__21271;
i__20355_21213 = G__21272;
continue;
} else {
var mode_21273 = cljs.core.first.call(null,seq__20348_21267__$1);
var seq__20349_21274 = cljs.core.seq.call(null,cljs.core.range.call(null,(16)));
var chunk__20350_21275 = null;
var count__20351_21276 = (0);
var i__20352_21277 = (0);
while(true){
if((i__20352_21277 < count__20351_21276)){
var n_21278 = cljs.core._nth.call(null,chunk__20350_21275,i__20352_21277);
cljs.core.swap_BANG_.call(null,tic_tac_toe.screens.play_spec.state,cljs.core.assoc,new cljs.core.Keyword(null,"mode","mode",654403691),mode_21273,new cljs.core.Keyword(null,"first-ai-level","first-ai-level",1004633644),ai,new cljs.core.Keyword(null,"player","player",-97687400),((cljs.core._EQ_.call(null,(2),mode_21273))?new cljs.core.Keyword(null,"x","x",2099068185):new cljs.core.Keyword(null,"o","o",-1350007228)),new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"gui","gui",604532813));

c3kit.wire.spec_helper.render.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tic_tac_toe.render_screen.render_screen,tic_tac_toe.screens.play_spec.state], null));

c3kit.wire.spec_helper.click_BANG_.call(null,["#index-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n_21278)].join(''));

var name__11622__auto___21279 = new cljs.core.Keyword(null,"turn","turn",75759344);
var options__11623__auto___21280 = cljs.core.PersistentArrayMap.EMPTY;
var invocations__11624__auto___21281 = speclj.stub.invocations_of.call(null,name__11622__auto___21279);
var times__11625__auto___21282 = new cljs.core.Keyword(null,"times","times",1671571467).cljs$core$IFn$_invoke$arity$1(options__11623__auto___21280);
var times_QMARK___11626__auto___21283 = typeof times__11625__auto___21282 === 'number';
var check_params_QMARK___11627__auto___21284 = cljs.core.contains_QMARK_.call(null,options__11623__auto___21280,new cljs.core.Keyword(null,"with","with",-1536296876));
var with__11628__auto___21285 = new cljs.core.Keyword(null,"with","with",-1536296876).cljs$core$IFn$_invoke$arity$1(options__11623__auto___21280);
var with__11628__auto___21286__$1 = (((with__11628__auto___21285 == null))?cljs.core.PersistentVector.EMPTY:with__11628__auto___21285);
var invocations_str__11629__auto___21287 = ((function (seq__20349_21274,chunk__20350_21275,count__20351_21276,i__20352_21277,seq__20348_21210,chunk__20353_21211,count__20354_21212,i__20355_21213,seq__20347,chunk__20360,count__20361,i__20362,name__11622__auto___21279,options__11623__auto___21280,invocations__11624__auto___21281,times__11625__auto___21282,times_QMARK___11626__auto___21283,check_params_QMARK___11627__auto___21284,with__11628__auto___21285,with__11628__auto___21286__$1,n_21278,mode_21273,seq__20348_21267__$1,temp__5804__auto___21266__$1,ai,seq__20347__$1,temp__5804__auto__,take_turn_orig_val__20345,take_turn_temp_val__20346,_STAR_parent_description_STAR__orig_val__20229_20919,_STAR_parent_description_STAR__temp_val__20230_20920,description__11238__auto____$1,_STAR_parent_description_STAR__orig_val__19701_20376,_STAR_parent_description_STAR__temp_val__19702_20377,description__11238__auto___20375){
return (function (p1__11619__11630__auto__){
if(cljs.core._EQ_.call(null,(1),p1__11619__11630__auto__)){
return "invocation";
} else {
return "invocations";
}
});})(seq__20349_21274,chunk__20350_21275,count__20351_21276,i__20352_21277,seq__20348_21210,chunk__20353_21211,count__20354_21212,i__20355_21213,seq__20347,chunk__20360,count__20361,i__20362,name__11622__auto___21279,options__11623__auto___21280,invocations__11624__auto___21281,times__11625__auto___21282,times_QMARK___11626__auto___21283,check_params_QMARK___11627__auto___21284,with__11628__auto___21285,with__11628__auto___21286__$1,n_21278,mode_21273,seq__20348_21267__$1,temp__5804__auto___21266__$1,ai,seq__20347__$1,temp__5804__auto__,take_turn_orig_val__20345,take_turn_temp_val__20346,_STAR_parent_description_STAR__orig_val__20229_20919,_STAR_parent_description_STAR__temp_val__20230_20920,description__11238__auto____$1,_STAR_parent_description_STAR__orig_val__19701_20376,_STAR_parent_description_STAR__temp_val__19702_20377,description__11238__auto___20375))
;
if(((times_QMARK___11626__auto___21283) && (check_params_QMARK___11627__auto___21284))){
var matching_invocations__11631__auto___21288 = cljs.core.filter.call(null,((function (seq__20349_21274,chunk__20350_21275,count__20351_21276,i__20352_21277,seq__20348_21210,chunk__20353_21211,count__20354_21212,i__20355_21213,seq__20347,chunk__20360,count__20361,i__20362,name__11622__auto___21279,options__11623__auto___21280,invocations__11624__auto___21281,times__11625__auto___21282,times_QMARK___11626__auto___21283,check_params_QMARK___11627__auto___21284,with__11628__auto___21285,with__11628__auto___21286__$1,invocations_str__11629__auto___21287,n_21278,mode_21273,seq__20348_21267__$1,temp__5804__auto___21266__$1,ai,seq__20347__$1,temp__5804__auto__,take_turn_orig_val__20345,take_turn_temp_val__20346,_STAR_parent_description_STAR__orig_val__20229_20919,_STAR_parent_description_STAR__temp_val__20230_20920,description__11238__auto____$1,_STAR_parent_description_STAR__orig_val__19701_20376,_STAR_parent_description_STAR__temp_val__19702_20377,description__11238__auto___20375){
return (function (p1__11620__11632__auto__){
return speclj.stub.params_match_QMARK_.call(null,with__11628__auto___21286__$1,p1__11620__11632__auto__);
});})(seq__20349_21274,chunk__20350_21275,count__20351_21276,i__20352_21277,seq__20348_21210,chunk__20353_21211,count__20354_21212,i__20355_21213,seq__20347,chunk__20360,count__20361,i__20362,name__11622__auto___21279,options__11623__auto___21280,invocations__11624__auto___21281,times__11625__auto___21282,times_QMARK___11626__auto___21283,check_params_QMARK___11627__auto___21284,with__11628__auto___21285,with__11628__auto___21286__$1,invocations_str__11629__auto___21287,n_21278,mode_21273,seq__20348_21267__$1,temp__5804__auto___21266__$1,ai,seq__20347__$1,temp__5804__auto__,take_turn_orig_val__20345,take_turn_temp_val__20346,_STAR_parent_description_STAR__orig_val__20229_20919,_STAR_parent_description_STAR__temp_val__20230_20920,description__11238__auto____$1,_STAR_parent_description_STAR__orig_val__19701_20376,_STAR_parent_description_STAR__temp_val__19702_20377,description__11238__auto___20375))
,invocations__11624__auto___21281);
var matching_count__11633__auto___21289 = cljs.core.count.call(null,matching_invocations__11631__auto___21288);
if(cljs.core._EQ_.call(null,times__11625__auto___21282,matching_count__11633__auto___21289)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(times__11625__auto___21282)," ",invocations_str__11629__auto___21287.call(null,times__11625__auto___21282)," of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__11622__auto___21279)," with ",cljs.core.pr_str.call(null,with__11628__auto___21286__$1),speclj.platform.endl,"     got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(matching_count__11633__auto___21289)," ",invocations_str__11629__auto___21287.call(null,matching_count__11633__auto___21289)].join('')));
}
} else {
if(check_params_QMARK___11627__auto___21284){
if(cljs.core.truth_(cljs.core.some.call(null,((function (seq__20349_21274,chunk__20350_21275,count__20351_21276,i__20352_21277,seq__20348_21210,chunk__20353_21211,count__20354_21212,i__20355_21213,seq__20347,chunk__20360,count__20361,i__20362,name__11622__auto___21279,options__11623__auto___21280,invocations__11624__auto___21281,times__11625__auto___21282,times_QMARK___11626__auto___21283,check_params_QMARK___11627__auto___21284,with__11628__auto___21285,with__11628__auto___21286__$1,invocations_str__11629__auto___21287,n_21278,mode_21273,seq__20348_21267__$1,temp__5804__auto___21266__$1,ai,seq__20347__$1,temp__5804__auto__,take_turn_orig_val__20345,take_turn_temp_val__20346,_STAR_parent_description_STAR__orig_val__20229_20919,_STAR_parent_description_STAR__temp_val__20230_20920,description__11238__auto____$1,_STAR_parent_description_STAR__orig_val__19701_20376,_STAR_parent_description_STAR__temp_val__19702_20377,description__11238__auto___20375){
return (function (p1__11621__11634__auto__){
return speclj.stub.params_match_QMARK_.call(null,with__11628__auto___21286__$1,p1__11621__11634__auto__);
});})(seq__20349_21274,chunk__20350_21275,count__20351_21276,i__20352_21277,seq__20348_21210,chunk__20353_21211,count__20354_21212,i__20355_21213,seq__20347,chunk__20360,count__20361,i__20362,name__11622__auto___21279,options__11623__auto___21280,invocations__11624__auto___21281,times__11625__auto___21282,times_QMARK___11626__auto___21283,check_params_QMARK___11627__auto___21284,with__11628__auto___21285,with__11628__auto___21286__$1,invocations_str__11629__auto___21287,n_21278,mode_21273,seq__20348_21267__$1,temp__5804__auto___21266__$1,ai,seq__20347__$1,temp__5804__auto__,take_turn_orig_val__20345,take_turn_temp_val__20346,_STAR_parent_description_STAR__orig_val__20229_20919,_STAR_parent_description_STAR__temp_val__20230_20920,description__11238__auto____$1,_STAR_parent_description_STAR__orig_val__19701_20376,_STAR_parent_description_STAR__temp_val__19702_20377,description__11238__auto___20375))
,invocations__11624__auto___21281))){
} else {
throw (new speclj.platform.SpecFailure(["Expected: invocation of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__11622__auto___21279)," with ",cljs.core.pr_str.call(null,with__11628__auto___21286__$1),speclj.platform.endl,"     got: ",cljs.core.pr_str.call(null,invocations__11624__auto___21281)].join('')));
}
} else {
if(times_QMARK___11626__auto___21283){
if(cljs.core._EQ_.call(null,times__11625__auto___21282,cljs.core.count.call(null,invocations__11624__auto___21281))){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(times__11625__auto___21282)," ",invocations_str__11629__auto___21287.call(null,times__11625__auto___21282)," of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__11622__auto___21279),speclj.platform.endl,"     got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,invocations__11624__auto___21281))].join('')));
}
} else {
if(cljs.core.seq.call(null,invocations__11624__auto___21281)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: an invocation of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__11622__auto___21279),speclj.platform.endl,"     got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,invocations__11624__auto___21281))].join('')));
}

}
}
}

var expected__11375__auto___21290 = ((cljs.core._EQ_.call(null,(2),mode_21273))?new cljs.core.Keyword(null,"x","x",2099068185):new cljs.core.Keyword(null,"o","o",-1350007228));
var actual__11376__auto___21291 = new cljs.core.Keyword(null,"player","player",-97687400).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.screens.play_spec.state));
if(cljs.core._EQ_.call(null,expected__11375__auto___21290,actual__11376__auto___21291)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__11375__auto___21290;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11343__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11343__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__11376__auto___21291;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11343__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11343__auto__);
}
})()," (using =)"].join('')));
}

cljs.core.reset_BANG_.call(null,tic_tac_toe.screens.play_spec.state,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"board","board",-1907017633),tic_tac_toe.screens.play_spec.board_4,new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"current-screen","current-screen",-1454713691),new cljs.core.Keyword(null,"play","play",-580418022)], null));


var G__21292 = seq__20349_21274;
var G__21293 = chunk__20350_21275;
var G__21294 = count__20351_21276;
var G__21295 = (i__20352_21277 + (1));
seq__20349_21274 = G__21292;
chunk__20350_21275 = G__21293;
count__20351_21276 = G__21294;
i__20352_21277 = G__21295;
continue;
} else {
var temp__5804__auto___21296__$2 = cljs.core.seq.call(null,seq__20349_21274);
if(temp__5804__auto___21296__$2){
var seq__20349_21297__$1 = temp__5804__auto___21296__$2;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20349_21297__$1)){
var c__5525__auto___21298 = cljs.core.chunk_first.call(null,seq__20349_21297__$1);
var G__21299 = cljs.core.chunk_rest.call(null,seq__20349_21297__$1);
var G__21300 = c__5525__auto___21298;
var G__21301 = cljs.core.count.call(null,c__5525__auto___21298);
var G__21302 = (0);
seq__20349_21274 = G__21299;
chunk__20350_21275 = G__21300;
count__20351_21276 = G__21301;
i__20352_21277 = G__21302;
continue;
} else {
var n_21303 = cljs.core.first.call(null,seq__20349_21297__$1);
cljs.core.swap_BANG_.call(null,tic_tac_toe.screens.play_spec.state,cljs.core.assoc,new cljs.core.Keyword(null,"mode","mode",654403691),mode_21273,new cljs.core.Keyword(null,"first-ai-level","first-ai-level",1004633644),ai,new cljs.core.Keyword(null,"player","player",-97687400),((cljs.core._EQ_.call(null,(2),mode_21273))?new cljs.core.Keyword(null,"x","x",2099068185):new cljs.core.Keyword(null,"o","o",-1350007228)),new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"gui","gui",604532813));

c3kit.wire.spec_helper.render.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tic_tac_toe.render_screen.render_screen,tic_tac_toe.screens.play_spec.state], null));

c3kit.wire.spec_helper.click_BANG_.call(null,["#index-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n_21303)].join(''));

var name__11622__auto___21304 = new cljs.core.Keyword(null,"turn","turn",75759344);
var options__11623__auto___21305 = cljs.core.PersistentArrayMap.EMPTY;
var invocations__11624__auto___21306 = speclj.stub.invocations_of.call(null,name__11622__auto___21304);
var times__11625__auto___21307 = new cljs.core.Keyword(null,"times","times",1671571467).cljs$core$IFn$_invoke$arity$1(options__11623__auto___21305);
var times_QMARK___11626__auto___21308 = typeof times__11625__auto___21307 === 'number';
var check_params_QMARK___11627__auto___21309 = cljs.core.contains_QMARK_.call(null,options__11623__auto___21305,new cljs.core.Keyword(null,"with","with",-1536296876));
var with__11628__auto___21310 = new cljs.core.Keyword(null,"with","with",-1536296876).cljs$core$IFn$_invoke$arity$1(options__11623__auto___21305);
var with__11628__auto___21311__$1 = (((with__11628__auto___21310 == null))?cljs.core.PersistentVector.EMPTY:with__11628__auto___21310);
var invocations_str__11629__auto___21312 = ((function (seq__20349_21274,chunk__20350_21275,count__20351_21276,i__20352_21277,seq__20348_21210,chunk__20353_21211,count__20354_21212,i__20355_21213,seq__20347,chunk__20360,count__20361,i__20362,name__11622__auto___21304,options__11623__auto___21305,invocations__11624__auto___21306,times__11625__auto___21307,times_QMARK___11626__auto___21308,check_params_QMARK___11627__auto___21309,with__11628__auto___21310,with__11628__auto___21311__$1,n_21303,seq__20349_21297__$1,temp__5804__auto___21296__$2,mode_21273,seq__20348_21267__$1,temp__5804__auto___21266__$1,ai,seq__20347__$1,temp__5804__auto__,take_turn_orig_val__20345,take_turn_temp_val__20346,_STAR_parent_description_STAR__orig_val__20229_20919,_STAR_parent_description_STAR__temp_val__20230_20920,description__11238__auto____$1,_STAR_parent_description_STAR__orig_val__19701_20376,_STAR_parent_description_STAR__temp_val__19702_20377,description__11238__auto___20375){
return (function (p1__11619__11630__auto__){
if(cljs.core._EQ_.call(null,(1),p1__11619__11630__auto__)){
return "invocation";
} else {
return "invocations";
}
});})(seq__20349_21274,chunk__20350_21275,count__20351_21276,i__20352_21277,seq__20348_21210,chunk__20353_21211,count__20354_21212,i__20355_21213,seq__20347,chunk__20360,count__20361,i__20362,name__11622__auto___21304,options__11623__auto___21305,invocations__11624__auto___21306,times__11625__auto___21307,times_QMARK___11626__auto___21308,check_params_QMARK___11627__auto___21309,with__11628__auto___21310,with__11628__auto___21311__$1,n_21303,seq__20349_21297__$1,temp__5804__auto___21296__$2,mode_21273,seq__20348_21267__$1,temp__5804__auto___21266__$1,ai,seq__20347__$1,temp__5804__auto__,take_turn_orig_val__20345,take_turn_temp_val__20346,_STAR_parent_description_STAR__orig_val__20229_20919,_STAR_parent_description_STAR__temp_val__20230_20920,description__11238__auto____$1,_STAR_parent_description_STAR__orig_val__19701_20376,_STAR_parent_description_STAR__temp_val__19702_20377,description__11238__auto___20375))
;
if(((times_QMARK___11626__auto___21308) && (check_params_QMARK___11627__auto___21309))){
var matching_invocations__11631__auto___21313 = cljs.core.filter.call(null,((function (seq__20349_21274,chunk__20350_21275,count__20351_21276,i__20352_21277,seq__20348_21210,chunk__20353_21211,count__20354_21212,i__20355_21213,seq__20347,chunk__20360,count__20361,i__20362,name__11622__auto___21304,options__11623__auto___21305,invocations__11624__auto___21306,times__11625__auto___21307,times_QMARK___11626__auto___21308,check_params_QMARK___11627__auto___21309,with__11628__auto___21310,with__11628__auto___21311__$1,invocations_str__11629__auto___21312,n_21303,seq__20349_21297__$1,temp__5804__auto___21296__$2,mode_21273,seq__20348_21267__$1,temp__5804__auto___21266__$1,ai,seq__20347__$1,temp__5804__auto__,take_turn_orig_val__20345,take_turn_temp_val__20346,_STAR_parent_description_STAR__orig_val__20229_20919,_STAR_parent_description_STAR__temp_val__20230_20920,description__11238__auto____$1,_STAR_parent_description_STAR__orig_val__19701_20376,_STAR_parent_description_STAR__temp_val__19702_20377,description__11238__auto___20375){
return (function (p1__11620__11632__auto__){
return speclj.stub.params_match_QMARK_.call(null,with__11628__auto___21311__$1,p1__11620__11632__auto__);
});})(seq__20349_21274,chunk__20350_21275,count__20351_21276,i__20352_21277,seq__20348_21210,chunk__20353_21211,count__20354_21212,i__20355_21213,seq__20347,chunk__20360,count__20361,i__20362,name__11622__auto___21304,options__11623__auto___21305,invocations__11624__auto___21306,times__11625__auto___21307,times_QMARK___11626__auto___21308,check_params_QMARK___11627__auto___21309,with__11628__auto___21310,with__11628__auto___21311__$1,invocations_str__11629__auto___21312,n_21303,seq__20349_21297__$1,temp__5804__auto___21296__$2,mode_21273,seq__20348_21267__$1,temp__5804__auto___21266__$1,ai,seq__20347__$1,temp__5804__auto__,take_turn_orig_val__20345,take_turn_temp_val__20346,_STAR_parent_description_STAR__orig_val__20229_20919,_STAR_parent_description_STAR__temp_val__20230_20920,description__11238__auto____$1,_STAR_parent_description_STAR__orig_val__19701_20376,_STAR_parent_description_STAR__temp_val__19702_20377,description__11238__auto___20375))
,invocations__11624__auto___21306);
var matching_count__11633__auto___21314 = cljs.core.count.call(null,matching_invocations__11631__auto___21313);
if(cljs.core._EQ_.call(null,times__11625__auto___21307,matching_count__11633__auto___21314)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(times__11625__auto___21307)," ",invocations_str__11629__auto___21312.call(null,times__11625__auto___21307)," of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__11622__auto___21304)," with ",cljs.core.pr_str.call(null,with__11628__auto___21311__$1),speclj.platform.endl,"     got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(matching_count__11633__auto___21314)," ",invocations_str__11629__auto___21312.call(null,matching_count__11633__auto___21314)].join('')));
}
} else {
if(check_params_QMARK___11627__auto___21309){
if(cljs.core.truth_(cljs.core.some.call(null,((function (seq__20349_21274,chunk__20350_21275,count__20351_21276,i__20352_21277,seq__20348_21210,chunk__20353_21211,count__20354_21212,i__20355_21213,seq__20347,chunk__20360,count__20361,i__20362,name__11622__auto___21304,options__11623__auto___21305,invocations__11624__auto___21306,times__11625__auto___21307,times_QMARK___11626__auto___21308,check_params_QMARK___11627__auto___21309,with__11628__auto___21310,with__11628__auto___21311__$1,invocations_str__11629__auto___21312,n_21303,seq__20349_21297__$1,temp__5804__auto___21296__$2,mode_21273,seq__20348_21267__$1,temp__5804__auto___21266__$1,ai,seq__20347__$1,temp__5804__auto__,take_turn_orig_val__20345,take_turn_temp_val__20346,_STAR_parent_description_STAR__orig_val__20229_20919,_STAR_parent_description_STAR__temp_val__20230_20920,description__11238__auto____$1,_STAR_parent_description_STAR__orig_val__19701_20376,_STAR_parent_description_STAR__temp_val__19702_20377,description__11238__auto___20375){
return (function (p1__11621__11634__auto__){
return speclj.stub.params_match_QMARK_.call(null,with__11628__auto___21311__$1,p1__11621__11634__auto__);
});})(seq__20349_21274,chunk__20350_21275,count__20351_21276,i__20352_21277,seq__20348_21210,chunk__20353_21211,count__20354_21212,i__20355_21213,seq__20347,chunk__20360,count__20361,i__20362,name__11622__auto___21304,options__11623__auto___21305,invocations__11624__auto___21306,times__11625__auto___21307,times_QMARK___11626__auto___21308,check_params_QMARK___11627__auto___21309,with__11628__auto___21310,with__11628__auto___21311__$1,invocations_str__11629__auto___21312,n_21303,seq__20349_21297__$1,temp__5804__auto___21296__$2,mode_21273,seq__20348_21267__$1,temp__5804__auto___21266__$1,ai,seq__20347__$1,temp__5804__auto__,take_turn_orig_val__20345,take_turn_temp_val__20346,_STAR_parent_description_STAR__orig_val__20229_20919,_STAR_parent_description_STAR__temp_val__20230_20920,description__11238__auto____$1,_STAR_parent_description_STAR__orig_val__19701_20376,_STAR_parent_description_STAR__temp_val__19702_20377,description__11238__auto___20375))
,invocations__11624__auto___21306))){
} else {
throw (new speclj.platform.SpecFailure(["Expected: invocation of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__11622__auto___21304)," with ",cljs.core.pr_str.call(null,with__11628__auto___21311__$1),speclj.platform.endl,"     got: ",cljs.core.pr_str.call(null,invocations__11624__auto___21306)].join('')));
}
} else {
if(times_QMARK___11626__auto___21308){
if(cljs.core._EQ_.call(null,times__11625__auto___21307,cljs.core.count.call(null,invocations__11624__auto___21306))){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(times__11625__auto___21307)," ",invocations_str__11629__auto___21312.call(null,times__11625__auto___21307)," of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__11622__auto___21304),speclj.platform.endl,"     got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,invocations__11624__auto___21306))].join('')));
}
} else {
if(cljs.core.seq.call(null,invocations__11624__auto___21306)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: an invocation of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__11622__auto___21304),speclj.platform.endl,"     got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,invocations__11624__auto___21306))].join('')));
}

}
}
}

var expected__11375__auto___21315 = ((cljs.core._EQ_.call(null,(2),mode_21273))?new cljs.core.Keyword(null,"x","x",2099068185):new cljs.core.Keyword(null,"o","o",-1350007228));
var actual__11376__auto___21316 = new cljs.core.Keyword(null,"player","player",-97687400).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.screens.play_spec.state));
if(cljs.core._EQ_.call(null,expected__11375__auto___21315,actual__11376__auto___21316)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__11375__auto___21315;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11343__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11343__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__11376__auto___21316;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11343__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11343__auto__);
}
})()," (using =)"].join('')));
}

cljs.core.reset_BANG_.call(null,tic_tac_toe.screens.play_spec.state,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"board","board",-1907017633),tic_tac_toe.screens.play_spec.board_4,new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"current-screen","current-screen",-1454713691),new cljs.core.Keyword(null,"play","play",-580418022)], null));


var G__21317 = cljs.core.next.call(null,seq__20349_21297__$1);
var G__21318 = null;
var G__21319 = (0);
var G__21320 = (0);
seq__20349_21274 = G__21317;
chunk__20350_21275 = G__21318;
count__20351_21276 = G__21319;
i__20352_21277 = G__21320;
continue;
}
} else {
}
}
break;
}

var G__21321 = cljs.core.next.call(null,seq__20348_21267__$1);
var G__21322 = null;
var G__21323 = (0);
var G__21324 = (0);
seq__20348_21210 = G__21321;
chunk__20353_21211 = G__21322;
count__20354_21212 = G__21323;
i__20355_21213 = G__21324;
continue;
}
} else {
}
}
break;
}

var G__21325 = cljs.core.next.call(null,seq__20347__$1);
var G__21326 = null;
var G__21327 = (0);
var G__21328 = (0);
seq__20347 = G__21325;
chunk__20360 = G__21326;
count__20361 = G__21327;
i__20362 = G__21328;
continue;
}
} else {
return null;
}
}
break;
}
}finally {(tic_tac_toe.player.take_turn = take_turn_orig_val__20345);
}});})(_STAR_parent_description_STAR__orig_val__20229_20919,_STAR_parent_description_STAR__temp_val__20230_20920,description__11238__auto____$1,_STAR_parent_description_STAR__orig_val__19701_20376,_STAR_parent_description_STAR__temp_val__19702_20377,description__11238__auto___20375))
,false),speclj.components.new_characteristic.call(null,"AI is not triggered if game over",((function (_STAR_parent_description_STAR__orig_val__20229_20919,_STAR_parent_description_STAR__temp_val__20230_20920,description__11238__auto____$1,_STAR_parent_description_STAR__orig_val__19701_20376,_STAR_parent_description_STAR__temp_val__19702_20377,description__11238__auto___20375){
return (function (){
cljs.core.swap_BANG_.call(null,tic_tac_toe.screens.play_spec.state,cljs.core.assoc,new cljs.core.Keyword(null,"board","board",-1907017633),new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"x","x",2099068185),(3),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"o","o",-1350007228),new cljs.core.Keyword(null,"o","o",-1350007228),new cljs.core.Keyword(null,"o","o",-1350007228),(8),(9),(10),(11),(12),(13),(14),(15),(16)], null),new cljs.core.Keyword(null,"mode","mode",654403691),(2),new cljs.core.Keyword(null,"first-ai-level","first-ai-level",1004633644),(3));

c3kit.wire.spec_helper.click_BANG_.call(null,"#index-2");

var expected__11375__auto__ = new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"o","o",-1350007228),new cljs.core.Keyword(null,"o","o",-1350007228),new cljs.core.Keyword(null,"o","o",-1350007228),(8),(9),(10),(11),(12),(13),(14),(15),(16)], null);
var actual__11376__auto__ = new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.screens.play_spec.state));
if(cljs.core._EQ_.call(null,expected__11375__auto__,actual__11376__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__11375__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11343__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11343__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__11376__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11343__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11343__auto__);
}
})()," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__20229_20919,_STAR_parent_description_STAR__temp_val__20230_20920,description__11238__auto____$1,_STAR_parent_description_STAR__orig_val__19701_20376,_STAR_parent_description_STAR__temp_val__19702_20377,description__11238__auto___20375))
,false)],null)));
var chunk__20232_20922 = null;
var count__20233_20923 = (0);
var i__20234_20924 = (0);
while(true){
if((i__20234_20924 < count__20233_20923)){
var component__11239__auto___21329 = cljs.core._nth.call(null,chunk__20232_20922,i__20234_20924);
speclj.components.install.call(null,component__11239__auto___21329,description__11238__auto____$1);


var G__21330 = seq__20231_20921;
var G__21331 = chunk__20232_20922;
var G__21332 = count__20233_20923;
var G__21333 = (i__20234_20924 + (1));
seq__20231_20921 = G__21330;
chunk__20232_20922 = G__21331;
count__20233_20923 = G__21332;
i__20234_20924 = G__21333;
continue;
} else {
var temp__5804__auto___21334 = cljs.core.seq.call(null,seq__20231_20921);
if(temp__5804__auto___21334){
var seq__20231_21335__$1 = temp__5804__auto___21334;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20231_21335__$1)){
var c__5525__auto___21336 = cljs.core.chunk_first.call(null,seq__20231_21335__$1);
var G__21337 = cljs.core.chunk_rest.call(null,seq__20231_21335__$1);
var G__21338 = c__5525__auto___21336;
var G__21339 = cljs.core.count.call(null,c__5525__auto___21336);
var G__21340 = (0);
seq__20231_20921 = G__21337;
chunk__20232_20922 = G__21338;
count__20233_20923 = G__21339;
i__20234_20924 = G__21340;
continue;
} else {
var component__11239__auto___21341 = cljs.core.first.call(null,seq__20231_21335__$1);
speclj.components.install.call(null,component__11239__auto___21341,description__11238__auto____$1);


var G__21342 = cljs.core.next.call(null,seq__20231_21335__$1);
var G__21343 = null;
var G__21344 = (0);
var G__21345 = (0);
seq__20231_20921 = G__21342;
chunk__20232_20922 = G__21343;
count__20233_20923 = G__21344;
i__20234_20924 = G__21345;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__20229_20919);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__11238__auto____$1);
}

return description__11238__auto____$1;
})()],null)));
var chunk__19704_20379 = null;
var count__19705_20380 = (0);
var i__19706_20381 = (0);
while(true){
if((i__19706_20381 < count__19705_20380)){
var component__11239__auto___21346 = cljs.core._nth.call(null,chunk__19704_20379,i__19706_20381);
speclj.components.install.call(null,component__11239__auto___21346,description__11238__auto___20375);


var G__21347 = seq__19703_20378;
var G__21348 = chunk__19704_20379;
var G__21349 = count__19705_20380;
var G__21350 = (i__19706_20381 + (1));
seq__19703_20378 = G__21347;
chunk__19704_20379 = G__21348;
count__19705_20380 = G__21349;
i__19706_20381 = G__21350;
continue;
} else {
var temp__5804__auto___21351 = cljs.core.seq.call(null,seq__19703_20378);
if(temp__5804__auto___21351){
var seq__19703_21352__$1 = temp__5804__auto___21351;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19703_21352__$1)){
var c__5525__auto___21353 = cljs.core.chunk_first.call(null,seq__19703_21352__$1);
var G__21354 = cljs.core.chunk_rest.call(null,seq__19703_21352__$1);
var G__21355 = c__5525__auto___21353;
var G__21356 = cljs.core.count.call(null,c__5525__auto___21353);
var G__21357 = (0);
seq__19703_20378 = G__21354;
chunk__19704_20379 = G__21355;
count__19705_20380 = G__21356;
i__19706_20381 = G__21357;
continue;
} else {
var component__11239__auto___21358 = cljs.core.first.call(null,seq__19703_21352__$1);
speclj.components.install.call(null,component__11239__auto___21358,description__11238__auto___20375);


var G__21359 = cljs.core.next.call(null,seq__19703_21352__$1);
var G__21360 = null;
var G__21361 = (0);
var G__21362 = (0);
seq__19703_20378 = G__21359;
chunk__19704_20379 = G__21360;
count__19705_20380 = G__21361;
i__19706_20381 = G__21362;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__19701_20376);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__11238__auto___20375);
}


//# sourceMappingURL=play_spec.js.map
