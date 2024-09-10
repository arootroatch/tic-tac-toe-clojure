// Compiled by ClojureScript 1.11.132 {:optimizations :none}
goog.provide('tic_tac_toe.screens.play_spec');
goog.require('cljs.core');
goog.require('c3kit.wire.js');
goog.require('c3kit.wire.spec_helper');
goog.require('reagent.core');
goog.require('speclj.core');
goog.require('tic_tac_toe.render_screen');
goog.require('tic_tac_toe.screens.play');
tic_tac_toe.screens.play_spec.board_3 = new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(3),(4),(5),(6),(7),(8),(9)], null);
tic_tac_toe.screens.play_spec.board_4 = cljs.core.vec.call(null,cljs.core.range.call(null,(1),(17)));
if((typeof tic_tac_toe !== 'undefined') && (typeof tic_tac_toe.screens !== 'undefined') && (typeof tic_tac_toe.screens.play_spec !== 'undefined') && (typeof tic_tac_toe.screens.play_spec.state !== 'undefined')){
} else {
tic_tac_toe.screens.play_spec.state = reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"current-screen","current-screen",-1454713691),new cljs.core.Keyword(null,"play","play",-580418022),new cljs.core.Keyword(null,"board","board",-1907017633),tic_tac_toe.screens.play_spec.board_3,new cljs.core.Keyword(null,"game-state","game-state",935682735),new cljs.core.Keyword(null,"in-progress","in-progress",2126442630)], null));
}
var description__11264__auto___12411 = speclj.components.new_description.call(null,"play screen",false,"tic-tac-toe.screens.play-spec");
var _STAR_parent_description_STAR__orig_val__11825_12412 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__11826_12413 = description__11264__auto___12411;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__11826_12413);

try{var seq__11828_12414 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,4,(5),cljs.core.PersistentVector.EMPTY_NODE,[c3kit.wire.spec_helper.with_root_dom.call(null),(function (){var description__11264__auto____$1 = speclj.components.new_description.call(null,"play heading",false,"tic-tac-toe.screens.play-spec");
var _STAR_parent_description_STAR__orig_val__12177_12418 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__12178_12419 = description__11264__auto____$1;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__12178_12419);

try{var seq__12179_12420 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_characteristic.call(null,"prompts player x for move",((function (_STAR_parent_description_STAR__orig_val__12177_12418,_STAR_parent_description_STAR__temp_val__12178_12419,description__11264__auto____$1,_STAR_parent_description_STAR__orig_val__11825_12412,_STAR_parent_description_STAR__temp_val__11826_12413,description__11264__auto___12411){
return (function (){
cljs.core.swap_BANG_.call(null,tic_tac_toe.screens.play_spec.state,cljs.core.assoc,new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"x","x",2099068185));

c3kit.wire.spec_helper.render.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tic_tac_toe.render_screen.render_screen,tic_tac_toe.screens.play_spec.state], null));

var expected__11401__auto__ = "X's turn!";
var actual__11402__auto__ = c3kit.wire.spec_helper.text.call(null,"#play-heading");
if(cljs.core._EQ_.call(null,expected__11401__auto__,actual__11402__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__11401__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11369__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11369__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__11402__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11369__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11369__auto__);
}
})()," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__12177_12418,_STAR_parent_description_STAR__temp_val__12178_12419,description__11264__auto____$1,_STAR_parent_description_STAR__orig_val__11825_12412,_STAR_parent_description_STAR__temp_val__11826_12413,description__11264__auto___12411))
,false),speclj.components.new_characteristic.call(null,"prompts player o for move",((function (_STAR_parent_description_STAR__orig_val__12177_12418,_STAR_parent_description_STAR__temp_val__12178_12419,description__11264__auto____$1,_STAR_parent_description_STAR__orig_val__11825_12412,_STAR_parent_description_STAR__temp_val__11826_12413,description__11264__auto___12411){
return (function (){
cljs.core.swap_BANG_.call(null,tic_tac_toe.screens.play_spec.state,cljs.core.assoc,new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"o","o",-1350007228));

c3kit.wire.spec_helper.render.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tic_tac_toe.render_screen.render_screen,tic_tac_toe.screens.play_spec.state], null));

var expected__11401__auto__ = "O's turn!";
var actual__11402__auto__ = c3kit.wire.spec_helper.text.call(null,"#play-heading");
if(cljs.core._EQ_.call(null,expected__11401__auto__,actual__11402__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__11401__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11369__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11369__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__11402__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11369__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11369__auto__);
}
})()," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__12177_12418,_STAR_parent_description_STAR__temp_val__12178_12419,description__11264__auto____$1,_STAR_parent_description_STAR__orig_val__11825_12412,_STAR_parent_description_STAR__temp_val__11826_12413,description__11264__auto___12411))
,false),speclj.components.new_characteristic.call(null,"displays game state if game over",((function (_STAR_parent_description_STAR__orig_val__12177_12418,_STAR_parent_description_STAR__temp_val__12178_12419,description__11264__auto____$1,_STAR_parent_description_STAR__orig_val__11825_12412,_STAR_parent_description_STAR__temp_val__11826_12413,description__11264__auto___12411){
return (function (){
cljs.core.swap_BANG_.call(null,tic_tac_toe.screens.play_spec.state,cljs.core.assoc,new cljs.core.Keyword(null,"game-state","game-state",935682735),"X wins!");

c3kit.wire.spec_helper.render.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tic_tac_toe.render_screen.render_screen,tic_tac_toe.screens.play_spec.state], null));

var expected__11401__auto__ = "X wins!";
var actual__11402__auto__ = c3kit.wire.spec_helper.text.call(null,"#play-heading");
if(cljs.core._EQ_.call(null,expected__11401__auto__,actual__11402__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__11401__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11369__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11369__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__11402__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11369__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11369__auto__);
}
})()," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__12177_12418,_STAR_parent_description_STAR__temp_val__12178_12419,description__11264__auto____$1,_STAR_parent_description_STAR__orig_val__11825_12412,_STAR_parent_description_STAR__temp_val__11826_12413,description__11264__auto___12411))
,false)],null)));
var chunk__12180_12421 = null;
var count__12181_12422 = (0);
var i__12182_12423 = (0);
while(true){
if((i__12182_12423 < count__12181_12422)){
var component__11265__auto___12424 = cljs.core._nth.call(null,chunk__12180_12421,i__12182_12423);
speclj.components.install.call(null,component__11265__auto___12424,description__11264__auto____$1);


var G__12425 = seq__12179_12420;
var G__12426 = chunk__12180_12421;
var G__12427 = count__12181_12422;
var G__12428 = (i__12182_12423 + (1));
seq__12179_12420 = G__12425;
chunk__12180_12421 = G__12426;
count__12181_12422 = G__12427;
i__12182_12423 = G__12428;
continue;
} else {
var temp__5804__auto___12429 = cljs.core.seq.call(null,seq__12179_12420);
if(temp__5804__auto___12429){
var seq__12179_12430__$1 = temp__5804__auto___12429;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12179_12430__$1)){
var c__5525__auto___12431 = cljs.core.chunk_first.call(null,seq__12179_12430__$1);
var G__12432 = cljs.core.chunk_rest.call(null,seq__12179_12430__$1);
var G__12433 = c__5525__auto___12431;
var G__12434 = cljs.core.count.call(null,c__5525__auto___12431);
var G__12435 = (0);
seq__12179_12420 = G__12432;
chunk__12180_12421 = G__12433;
count__12181_12422 = G__12434;
i__12182_12423 = G__12435;
continue;
} else {
var component__11265__auto___12436 = cljs.core.first.call(null,seq__12179_12430__$1);
speclj.components.install.call(null,component__11265__auto___12436,description__11264__auto____$1);


var G__12437 = cljs.core.next.call(null,seq__12179_12430__$1);
var G__12438 = null;
var G__12439 = (0);
var G__12440 = (0);
seq__12179_12420 = G__12437;
chunk__12180_12421 = G__12438;
count__12181_12422 = G__12439;
i__12182_12423 = G__12440;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__12177_12418);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__11264__auto____$1);
}

return description__11264__auto____$1;
})(),(function (){var description__11264__auto____$1 = speclj.components.new_description.call(null,"3x3",false,"tic-tac-toe.screens.play-spec");
var _STAR_parent_description_STAR__orig_val__12183_12441 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__12184_12442 = description__11264__auto____$1;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__12184_12442);

try{var seq__12185_12443 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,11,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_before.call(null,((function (_STAR_parent_description_STAR__orig_val__12183_12441,_STAR_parent_description_STAR__temp_val__12184_12442,description__11264__auto____$1,_STAR_parent_description_STAR__orig_val__11825_12412,_STAR_parent_description_STAR__temp_val__11826_12413,description__11264__auto___12411){
return (function (){
cljs.core.reset_BANG_.call(null,tic_tac_toe.screens.play_spec.state,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"current-screen","current-screen",-1454713691),new cljs.core.Keyword(null,"play","play",-580418022),new cljs.core.Keyword(null,"board","board",-1907017633),tic_tac_toe.screens.play_spec.board_3,new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"mode","mode",654403691),(1),new cljs.core.Keyword(null,"game-state","game-state",935682735),new cljs.core.Keyword(null,"in-progress","in-progress",2126442630)], null));

return c3kit.wire.spec_helper.render.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tic_tac_toe.render_screen.render_screen,tic_tac_toe.screens.play_spec.state], null));
});})(_STAR_parent_description_STAR__orig_val__12183_12441,_STAR_parent_description_STAR__temp_val__12184_12442,description__11264__auto____$1,_STAR_parent_description_STAR__orig_val__11825_12412,_STAR_parent_description_STAR__temp_val__11826_12413,description__11264__auto___12411))
),speclj.components.new_characteristic.call(null,"renders board",((function (_STAR_parent_description_STAR__orig_val__12183_12441,_STAR_parent_description_STAR__temp_val__12184_12442,description__11264__auto____$1,_STAR_parent_description_STAR__orig_val__11825_12412,_STAR_parent_description_STAR__temp_val__11826_12413,description__11264__auto___12411){
return (function (){
var expected__11401__auto___12447 = (9);
var actual__11402__auto___12448 = cljs.core.count.call(null,cljs.core.vec.call(null,c3kit.wire.js.query_selector_all.call(null,".board-square")));
if(cljs.core._EQ_.call(null,expected__11401__auto___12447,actual__11402__auto___12448)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__11401__auto___12447;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11369__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11369__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__11402__auto___12448;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11369__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11369__auto__);
}
})()," (using =)"].join('')));
}

var value__11764__auto___12449 = "#board-wrapper";
var node__11765__auto___12450 = c3kit.wire.spec_helper.select.call(null,value__11764__auto___12449);
if(cljs.core.truth_(node__11765__auto___12450)){
} else {
throw (new speclj.platform.SpecFailure(["Expected selector to find node: ",(function (){var temp__5806__auto__ = value__11764__auto___12449;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11369__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11369__auto__);
}
})()].join('')));
}

var value__11764__auto__ = ".three-grid";
var node__11765__auto__ = c3kit.wire.spec_helper.select.call(null,value__11764__auto__);
if(cljs.core.truth_(node__11765__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected selector to find node: ",(function (){var temp__5806__auto__ = value__11764__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11369__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11369__auto__);
}
})()].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__12183_12441,_STAR_parent_description_STAR__temp_val__12184_12442,description__11264__auto____$1,_STAR_parent_description_STAR__orig_val__11825_12412,_STAR_parent_description_STAR__temp_val__11826_12413,description__11264__auto___12411))
,false),speclj.components.new_characteristic.call(null,"buttons have IDs 0-8",((function (_STAR_parent_description_STAR__orig_val__12183_12441,_STAR_parent_description_STAR__temp_val__12184_12442,description__11264__auto____$1,_STAR_parent_description_STAR__orig_val__11825_12412,_STAR_parent_description_STAR__temp_val__11826_12413,description__11264__auto___12411){
return (function (){
var seq__12249 = cljs.core.seq.call(null,cljs.core.range.call(null,(9)));
var chunk__12250 = null;
var count__12251 = (0);
var i__12252 = (0);
while(true){
if((i__12252 < count__12251)){
var n = cljs.core._nth.call(null,chunk__12250,i__12252);
var value__11764__auto___12451 = ["#index-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join('');
var node__11765__auto___12452 = c3kit.wire.spec_helper.select.call(null,value__11764__auto___12451);
if(cljs.core.truth_(node__11765__auto___12452)){
} else {
throw (new speclj.platform.SpecFailure(["Expected selector to find node: ",(function (){var temp__5806__auto__ = value__11764__auto___12451;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11369__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11369__auto__);
}
})()].join('')));
}


var G__12453 = seq__12249;
var G__12454 = chunk__12250;
var G__12455 = count__12251;
var G__12456 = (i__12252 + (1));
seq__12249 = G__12453;
chunk__12250 = G__12454;
count__12251 = G__12455;
i__12252 = G__12456;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__12249);
if(temp__5804__auto__){
var seq__12249__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12249__$1)){
var c__5525__auto__ = cljs.core.chunk_first.call(null,seq__12249__$1);
var G__12457 = cljs.core.chunk_rest.call(null,seq__12249__$1);
var G__12458 = c__5525__auto__;
var G__12459 = cljs.core.count.call(null,c__5525__auto__);
var G__12460 = (0);
seq__12249 = G__12457;
chunk__12250 = G__12458;
count__12251 = G__12459;
i__12252 = G__12460;
continue;
} else {
var n = cljs.core.first.call(null,seq__12249__$1);
var value__11764__auto___12461 = ["#index-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join('');
var node__11765__auto___12462 = c3kit.wire.spec_helper.select.call(null,value__11764__auto___12461);
if(cljs.core.truth_(node__11765__auto___12462)){
} else {
throw (new speclj.platform.SpecFailure(["Expected selector to find node: ",(function (){var temp__5806__auto__ = value__11764__auto___12461;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11369__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11369__auto__);
}
})()].join('')));
}


var G__12463 = cljs.core.next.call(null,seq__12249__$1);
var G__12464 = null;
var G__12465 = (0);
var G__12466 = (0);
seq__12249 = G__12463;
chunk__12250 = G__12464;
count__12251 = G__12465;
i__12252 = G__12466;
continue;
}
} else {
return null;
}
}
break;
}
});})(_STAR_parent_description_STAR__orig_val__12183_12441,_STAR_parent_description_STAR__temp_val__12184_12442,description__11264__auto____$1,_STAR_parent_description_STAR__orig_val__11825_12412,_STAR_parent_description_STAR__temp_val__11826_12413,description__11264__auto___12411))
,false),speclj.components.new_characteristic.call(null,"clicking button updates board in state",((function (_STAR_parent_description_STAR__orig_val__12183_12441,_STAR_parent_description_STAR__temp_val__12184_12442,description__11264__auto____$1,_STAR_parent_description_STAR__orig_val__11825_12412,_STAR_parent_description_STAR__temp_val__11826_12413,description__11264__auto___12411){
return (function (){
var seq__12253 = cljs.core.seq.call(null,cljs.core.range.call(null,(9)));
var chunk__12254 = null;
var count__12255 = (0);
var i__12256 = (0);
while(true){
if((i__12256 < count__12255)){
var n = cljs.core._nth.call(null,chunk__12254,i__12256);
c3kit.wire.spec_helper.click_BANG_.call(null,["#index-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join(''));

var expected__11401__auto___12467 = cljs.core.assoc.call(null,tic_tac_toe.screens.play_spec.board_3,n,new cljs.core.Keyword(null,"x","x",2099068185));
var actual__11402__auto___12468 = new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.screens.play_spec.state));
if(cljs.core._EQ_.call(null,expected__11401__auto___12467,actual__11402__auto___12468)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__11401__auto___12467;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11369__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11369__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__11402__auto___12468;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11369__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11369__auto__);
}
})()," (using =)"].join('')));
}

cljs.core.swap_BANG_.call(null,tic_tac_toe.screens.play_spec.state,cljs.core.assoc,new cljs.core.Keyword(null,"board","board",-1907017633),tic_tac_toe.screens.play_spec.board_3,new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"x","x",2099068185));


var G__12469 = seq__12253;
var G__12470 = chunk__12254;
var G__12471 = count__12255;
var G__12472 = (i__12256 + (1));
seq__12253 = G__12469;
chunk__12254 = G__12470;
count__12255 = G__12471;
i__12256 = G__12472;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__12253);
if(temp__5804__auto__){
var seq__12253__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12253__$1)){
var c__5525__auto__ = cljs.core.chunk_first.call(null,seq__12253__$1);
var G__12473 = cljs.core.chunk_rest.call(null,seq__12253__$1);
var G__12474 = c__5525__auto__;
var G__12475 = cljs.core.count.call(null,c__5525__auto__);
var G__12476 = (0);
seq__12253 = G__12473;
chunk__12254 = G__12474;
count__12255 = G__12475;
i__12256 = G__12476;
continue;
} else {
var n = cljs.core.first.call(null,seq__12253__$1);
c3kit.wire.spec_helper.click_BANG_.call(null,["#index-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join(''));

var expected__11401__auto___12477 = cljs.core.assoc.call(null,tic_tac_toe.screens.play_spec.board_3,n,new cljs.core.Keyword(null,"x","x",2099068185));
var actual__11402__auto___12478 = new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.screens.play_spec.state));
if(cljs.core._EQ_.call(null,expected__11401__auto___12477,actual__11402__auto___12478)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__11401__auto___12477;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11369__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11369__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__11402__auto___12478;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11369__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11369__auto__);
}
})()," (using =)"].join('')));
}

cljs.core.swap_BANG_.call(null,tic_tac_toe.screens.play_spec.state,cljs.core.assoc,new cljs.core.Keyword(null,"board","board",-1907017633),tic_tac_toe.screens.play_spec.board_3,new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"x","x",2099068185));


var G__12479 = cljs.core.next.call(null,seq__12253__$1);
var G__12480 = null;
var G__12481 = (0);
var G__12482 = (0);
seq__12253 = G__12479;
chunk__12254 = G__12480;
count__12255 = G__12481;
i__12256 = G__12482;
continue;
}
} else {
return null;
}
}
break;
}
});})(_STAR_parent_description_STAR__orig_val__12183_12441,_STAR_parent_description_STAR__temp_val__12184_12442,description__11264__auto____$1,_STAR_parent_description_STAR__orig_val__11825_12412,_STAR_parent_description_STAR__temp_val__11826_12413,description__11264__auto___12411))
,false),speclj.components.new_characteristic.call(null,"clicking button swaps player in state",((function (_STAR_parent_description_STAR__orig_val__12183_12441,_STAR_parent_description_STAR__temp_val__12184_12442,description__11264__auto____$1,_STAR_parent_description_STAR__orig_val__11825_12412,_STAR_parent_description_STAR__temp_val__11826_12413,description__11264__auto___12411){
return (function (){
var seq__12257 = cljs.core.seq.call(null,cljs.core.range.call(null,(9)));
var chunk__12258 = null;
var count__12259 = (0);
var i__12260 = (0);
while(true){
if((i__12260 < count__12259)){
var n = cljs.core._nth.call(null,chunk__12258,i__12260);
c3kit.wire.spec_helper.click_BANG_.call(null,["#index-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join(''));

var expected__11401__auto___12483 = new cljs.core.Keyword(null,"o","o",-1350007228);
var actual__11402__auto___12484 = new cljs.core.Keyword(null,"player","player",-97687400).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.screens.play_spec.state));
if(cljs.core._EQ_.call(null,expected__11401__auto___12483,actual__11402__auto___12484)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__11401__auto___12483;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11369__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11369__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__11402__auto___12484;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11369__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11369__auto__);
}
})()," (using =)"].join('')));
}

cljs.core.swap_BANG_.call(null,tic_tac_toe.screens.play_spec.state,cljs.core.assoc,new cljs.core.Keyword(null,"board","board",-1907017633),tic_tac_toe.screens.play_spec.board_3,new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"x","x",2099068185));


var G__12485 = seq__12257;
var G__12486 = chunk__12258;
var G__12487 = count__12259;
var G__12488 = (i__12260 + (1));
seq__12257 = G__12485;
chunk__12258 = G__12486;
count__12259 = G__12487;
i__12260 = G__12488;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__12257);
if(temp__5804__auto__){
var seq__12257__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12257__$1)){
var c__5525__auto__ = cljs.core.chunk_first.call(null,seq__12257__$1);
var G__12489 = cljs.core.chunk_rest.call(null,seq__12257__$1);
var G__12490 = c__5525__auto__;
var G__12491 = cljs.core.count.call(null,c__5525__auto__);
var G__12492 = (0);
seq__12257 = G__12489;
chunk__12258 = G__12490;
count__12259 = G__12491;
i__12260 = G__12492;
continue;
} else {
var n = cljs.core.first.call(null,seq__12257__$1);
c3kit.wire.spec_helper.click_BANG_.call(null,["#index-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join(''));

var expected__11401__auto___12493 = new cljs.core.Keyword(null,"o","o",-1350007228);
var actual__11402__auto___12494 = new cljs.core.Keyword(null,"player","player",-97687400).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.screens.play_spec.state));
if(cljs.core._EQ_.call(null,expected__11401__auto___12493,actual__11402__auto___12494)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__11401__auto___12493;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11369__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11369__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__11402__auto___12494;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11369__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11369__auto__);
}
})()," (using =)"].join('')));
}

cljs.core.swap_BANG_.call(null,tic_tac_toe.screens.play_spec.state,cljs.core.assoc,new cljs.core.Keyword(null,"board","board",-1907017633),tic_tac_toe.screens.play_spec.board_3,new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"x","x",2099068185));


var G__12495 = cljs.core.next.call(null,seq__12257__$1);
var G__12496 = null;
var G__12497 = (0);
var G__12498 = (0);
seq__12257 = G__12495;
chunk__12258 = G__12496;
count__12259 = G__12497;
i__12260 = G__12498;
continue;
}
} else {
return null;
}
}
break;
}
});})(_STAR_parent_description_STAR__orig_val__12183_12441,_STAR_parent_description_STAR__temp_val__12184_12442,description__11264__auto____$1,_STAR_parent_description_STAR__orig_val__11825_12412,_STAR_parent_description_STAR__temp_val__11826_12413,description__11264__auto___12411))
,false),speclj.components.new_characteristic.call(null,"clicking button updates game-state in state",((function (_STAR_parent_description_STAR__orig_val__12183_12441,_STAR_parent_description_STAR__temp_val__12184_12442,description__11264__auto____$1,_STAR_parent_description_STAR__orig_val__11825_12412,_STAR_parent_description_STAR__temp_val__11826_12413,description__11264__auto___12411){
return (function (){
cljs.core.swap_BANG_.call(null,tic_tac_toe.screens.play_spec.state,cljs.core.assoc,new cljs.core.Keyword(null,"board","board",-1907017633),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"o","o",-1350007228),new cljs.core.Keyword(null,"o","o",-1350007228),(6),(7),(8),(9)], null));

c3kit.wire.spec_helper.click_BANG_.call(null,"#index-0");

var expected__11401__auto__ = "X wins!";
var actual__11402__auto__ = new cljs.core.Keyword(null,"game-state","game-state",935682735).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.screens.play_spec.state));
if(cljs.core._EQ_.call(null,expected__11401__auto__,actual__11402__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__11401__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11369__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11369__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__11402__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11369__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11369__auto__);
}
})()," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__12183_12441,_STAR_parent_description_STAR__temp_val__12184_12442,description__11264__auto____$1,_STAR_parent_description_STAR__orig_val__11825_12412,_STAR_parent_description_STAR__temp_val__11826_12413,description__11264__auto___12411))
,false),speclj.components.new_characteristic.call(null,"clicking button adds token to button HTML",((function (_STAR_parent_description_STAR__orig_val__12183_12441,_STAR_parent_description_STAR__temp_val__12184_12442,description__11264__auto____$1,_STAR_parent_description_STAR__orig_val__11825_12412,_STAR_parent_description_STAR__temp_val__11826_12413,description__11264__auto___12411){
return (function (){
var seq__12261 = cljs.core.seq.call(null,cljs.core.range.call(null,(9)));
var chunk__12262 = null;
var count__12263 = (0);
var i__12264 = (0);
while(true){
if((i__12264 < count__12263)){
var n = cljs.core._nth.call(null,chunk__12262,i__12264);
c3kit.wire.spec_helper.click_BANG_.call(null,["#index-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join(''));

var expected__11401__auto___12499 = "X";
var actual__11402__auto___12500 = c3kit.wire.spec_helper.text.call(null,["#index-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join(''));
if(cljs.core._EQ_.call(null,expected__11401__auto___12499,actual__11402__auto___12500)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__11401__auto___12499;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11369__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11369__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__11402__auto___12500;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11369__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11369__auto__);
}
})()," (using =)"].join('')));
}

cljs.core.reset_BANG_.call(null,tic_tac_toe.screens.play_spec.state,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"board","board",-1907017633),tic_tac_toe.screens.play_spec.board_3,new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"current-screen","current-screen",-1454713691),new cljs.core.Keyword(null,"play","play",-580418022),new cljs.core.Keyword(null,"mode","mode",654403691),(1)], null));


var G__12501 = seq__12261;
var G__12502 = chunk__12262;
var G__12503 = count__12263;
var G__12504 = (i__12264 + (1));
seq__12261 = G__12501;
chunk__12262 = G__12502;
count__12263 = G__12503;
i__12264 = G__12504;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__12261);
if(temp__5804__auto__){
var seq__12261__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12261__$1)){
var c__5525__auto__ = cljs.core.chunk_first.call(null,seq__12261__$1);
var G__12505 = cljs.core.chunk_rest.call(null,seq__12261__$1);
var G__12506 = c__5525__auto__;
var G__12507 = cljs.core.count.call(null,c__5525__auto__);
var G__12508 = (0);
seq__12261 = G__12505;
chunk__12262 = G__12506;
count__12263 = G__12507;
i__12264 = G__12508;
continue;
} else {
var n = cljs.core.first.call(null,seq__12261__$1);
c3kit.wire.spec_helper.click_BANG_.call(null,["#index-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join(''));

var expected__11401__auto___12509 = "X";
var actual__11402__auto___12510 = c3kit.wire.spec_helper.text.call(null,["#index-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join(''));
if(cljs.core._EQ_.call(null,expected__11401__auto___12509,actual__11402__auto___12510)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__11401__auto___12509;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11369__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11369__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__11402__auto___12510;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11369__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11369__auto__);
}
})()," (using =)"].join('')));
}

cljs.core.reset_BANG_.call(null,tic_tac_toe.screens.play_spec.state,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"board","board",-1907017633),tic_tac_toe.screens.play_spec.board_3,new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"current-screen","current-screen",-1454713691),new cljs.core.Keyword(null,"play","play",-580418022),new cljs.core.Keyword(null,"mode","mode",654403691),(1)], null));


var G__12511 = cljs.core.next.call(null,seq__12261__$1);
var G__12512 = null;
var G__12513 = (0);
var G__12514 = (0);
seq__12261 = G__12511;
chunk__12262 = G__12512;
count__12263 = G__12513;
i__12264 = G__12514;
continue;
}
} else {
return null;
}
}
break;
}
});})(_STAR_parent_description_STAR__orig_val__12183_12441,_STAR_parent_description_STAR__temp_val__12184_12442,description__11264__auto____$1,_STAR_parent_description_STAR__orig_val__11825_12412,_STAR_parent_description_STAR__temp_val__11826_12413,description__11264__auto___12411))
,false),speclj.components.new_characteristic.call(null,"clicking button disables button",((function (_STAR_parent_description_STAR__orig_val__12183_12441,_STAR_parent_description_STAR__temp_val__12184_12442,description__11264__auto____$1,_STAR_parent_description_STAR__orig_val__11825_12412,_STAR_parent_description_STAR__temp_val__11826_12413,description__11264__auto___12411){
return (function (){
var seq__12265 = cljs.core.seq.call(null,cljs.core.range.call(null,(9)));
var chunk__12266 = null;
var count__12267 = (0);
var i__12268 = (0);
while(true){
if((i__12268 < count__12267)){
var n = cljs.core._nth.call(null,chunk__12266,i__12268);
c3kit.wire.spec_helper.click_BANG_.call(null,["#index-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join(''));

var expected__11401__auto___12515 = true;
var actual__11402__auto___12516 = c3kit.wire.spec_helper.disabled_QMARK_.call(null,["#index-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join(''));
if(cljs.core._EQ_.call(null,expected__11401__auto___12515,actual__11402__auto___12516)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__11401__auto___12515;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11369__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11369__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__11402__auto___12516;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11369__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11369__auto__);
}
})()," (using =)"].join('')));
}

cljs.core.reset_BANG_.call(null,tic_tac_toe.screens.play_spec.state,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"board","board",-1907017633),tic_tac_toe.screens.play_spec.board_3,new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"current-screen","current-screen",-1454713691),new cljs.core.Keyword(null,"play","play",-580418022),new cljs.core.Keyword(null,"mode","mode",654403691),(1)], null));


var G__12517 = seq__12265;
var G__12518 = chunk__12266;
var G__12519 = count__12267;
var G__12520 = (i__12268 + (1));
seq__12265 = G__12517;
chunk__12266 = G__12518;
count__12267 = G__12519;
i__12268 = G__12520;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__12265);
if(temp__5804__auto__){
var seq__12265__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12265__$1)){
var c__5525__auto__ = cljs.core.chunk_first.call(null,seq__12265__$1);
var G__12521 = cljs.core.chunk_rest.call(null,seq__12265__$1);
var G__12522 = c__5525__auto__;
var G__12523 = cljs.core.count.call(null,c__5525__auto__);
var G__12524 = (0);
seq__12265 = G__12521;
chunk__12266 = G__12522;
count__12267 = G__12523;
i__12268 = G__12524;
continue;
} else {
var n = cljs.core.first.call(null,seq__12265__$1);
c3kit.wire.spec_helper.click_BANG_.call(null,["#index-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join(''));

var expected__11401__auto___12525 = true;
var actual__11402__auto___12526 = c3kit.wire.spec_helper.disabled_QMARK_.call(null,["#index-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join(''));
if(cljs.core._EQ_.call(null,expected__11401__auto___12525,actual__11402__auto___12526)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__11401__auto___12525;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11369__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11369__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__11402__auto___12526;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11369__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11369__auto__);
}
})()," (using =)"].join('')));
}

cljs.core.reset_BANG_.call(null,tic_tac_toe.screens.play_spec.state,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"board","board",-1907017633),tic_tac_toe.screens.play_spec.board_3,new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"current-screen","current-screen",-1454713691),new cljs.core.Keyword(null,"play","play",-580418022),new cljs.core.Keyword(null,"mode","mode",654403691),(1)], null));


var G__12527 = cljs.core.next.call(null,seq__12265__$1);
var G__12528 = null;
var G__12529 = (0);
var G__12530 = (0);
seq__12265 = G__12527;
chunk__12266 = G__12528;
count__12267 = G__12529;
i__12268 = G__12530;
continue;
}
} else {
return null;
}
}
break;
}
});})(_STAR_parent_description_STAR__orig_val__12183_12441,_STAR_parent_description_STAR__temp_val__12184_12442,description__11264__auto____$1,_STAR_parent_description_STAR__orig_val__11825_12412,_STAR_parent_description_STAR__temp_val__11826_12413,description__11264__auto___12411))
,false),speclj.components.new_characteristic.call(null,"all buttons disabled when game-over",((function (_STAR_parent_description_STAR__orig_val__12183_12441,_STAR_parent_description_STAR__temp_val__12184_12442,description__11264__auto____$1,_STAR_parent_description_STAR__orig_val__11825_12412,_STAR_parent_description_STAR__temp_val__11826_12413,description__11264__auto___12411){
return (function (){
var seq__12269 = cljs.core.seq.call(null,cljs.core.range.call(null,(9)));
var chunk__12274 = null;
var count__12275 = (0);
var i__12276 = (0);
while(true){
if((i__12276 < count__12275)){
var n = cljs.core._nth.call(null,chunk__12274,i__12276);
var seq__12277_12531 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["X wins!","O wins!","It is a tie!"], null));
var chunk__12278_12532 = null;
var count__12279_12533 = (0);
var i__12280_12534 = (0);
while(true){
if((i__12280_12534 < count__12279_12533)){
var states_12535 = cljs.core._nth.call(null,chunk__12278_12532,i__12280_12534);
cljs.core.swap_BANG_.call(null,tic_tac_toe.screens.play_spec.state,cljs.core.assoc,new cljs.core.Keyword(null,"game-state","game-state",935682735),states_12535);

c3kit.wire.spec_helper.render.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tic_tac_toe.render_screen.render_screen,tic_tac_toe.screens.play_spec.state], null));

var expected__11401__auto___12536 = true;
var actual__11402__auto___12537 = c3kit.wire.spec_helper.disabled_QMARK_.call(null,["#index-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join(''));
if(cljs.core._EQ_.call(null,expected__11401__auto___12536,actual__11402__auto___12537)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__11401__auto___12536;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11369__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11369__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__11402__auto___12537;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11369__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11369__auto__);
}
})()," (using =)"].join('')));
}

cljs.core.reset_BANG_.call(null,tic_tac_toe.screens.play_spec.state,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"board","board",-1907017633),tic_tac_toe.screens.play_spec.board_3,new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"current-screen","current-screen",-1454713691),new cljs.core.Keyword(null,"play","play",-580418022),new cljs.core.Keyword(null,"mode","mode",654403691),(1)], null));


var G__12538 = seq__12277_12531;
var G__12539 = chunk__12278_12532;
var G__12540 = count__12279_12533;
var G__12541 = (i__12280_12534 + (1));
seq__12277_12531 = G__12538;
chunk__12278_12532 = G__12539;
count__12279_12533 = G__12540;
i__12280_12534 = G__12541;
continue;
} else {
var temp__5804__auto___12542 = cljs.core.seq.call(null,seq__12277_12531);
if(temp__5804__auto___12542){
var seq__12277_12543__$1 = temp__5804__auto___12542;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12277_12543__$1)){
var c__5525__auto___12544 = cljs.core.chunk_first.call(null,seq__12277_12543__$1);
var G__12545 = cljs.core.chunk_rest.call(null,seq__12277_12543__$1);
var G__12546 = c__5525__auto___12544;
var G__12547 = cljs.core.count.call(null,c__5525__auto___12544);
var G__12548 = (0);
seq__12277_12531 = G__12545;
chunk__12278_12532 = G__12546;
count__12279_12533 = G__12547;
i__12280_12534 = G__12548;
continue;
} else {
var states_12549 = cljs.core.first.call(null,seq__12277_12543__$1);
cljs.core.swap_BANG_.call(null,tic_tac_toe.screens.play_spec.state,cljs.core.assoc,new cljs.core.Keyword(null,"game-state","game-state",935682735),states_12549);

c3kit.wire.spec_helper.render.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tic_tac_toe.render_screen.render_screen,tic_tac_toe.screens.play_spec.state], null));

var expected__11401__auto___12550 = true;
var actual__11402__auto___12551 = c3kit.wire.spec_helper.disabled_QMARK_.call(null,["#index-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join(''));
if(cljs.core._EQ_.call(null,expected__11401__auto___12550,actual__11402__auto___12551)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__11401__auto___12550;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11369__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11369__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__11402__auto___12551;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11369__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11369__auto__);
}
})()," (using =)"].join('')));
}

cljs.core.reset_BANG_.call(null,tic_tac_toe.screens.play_spec.state,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"board","board",-1907017633),tic_tac_toe.screens.play_spec.board_3,new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"current-screen","current-screen",-1454713691),new cljs.core.Keyword(null,"play","play",-580418022),new cljs.core.Keyword(null,"mode","mode",654403691),(1)], null));


var G__12552 = cljs.core.next.call(null,seq__12277_12543__$1);
var G__12553 = null;
var G__12554 = (0);
var G__12555 = (0);
seq__12277_12531 = G__12552;
chunk__12278_12532 = G__12553;
count__12279_12533 = G__12554;
i__12280_12534 = G__12555;
continue;
}
} else {
}
}
break;
}

var G__12556 = seq__12269;
var G__12557 = chunk__12274;
var G__12558 = count__12275;
var G__12559 = (i__12276 + (1));
seq__12269 = G__12556;
chunk__12274 = G__12557;
count__12275 = G__12558;
i__12276 = G__12559;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__12269);
if(temp__5804__auto__){
var seq__12269__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12269__$1)){
var c__5525__auto__ = cljs.core.chunk_first.call(null,seq__12269__$1);
var G__12560 = cljs.core.chunk_rest.call(null,seq__12269__$1);
var G__12561 = c__5525__auto__;
var G__12562 = cljs.core.count.call(null,c__5525__auto__);
var G__12563 = (0);
seq__12269 = G__12560;
chunk__12274 = G__12561;
count__12275 = G__12562;
i__12276 = G__12563;
continue;
} else {
var n = cljs.core.first.call(null,seq__12269__$1);
var seq__12270_12564 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["X wins!","O wins!","It is a tie!"], null));
var chunk__12271_12565 = null;
var count__12272_12566 = (0);
var i__12273_12567 = (0);
while(true){
if((i__12273_12567 < count__12272_12566)){
var states_12568 = cljs.core._nth.call(null,chunk__12271_12565,i__12273_12567);
cljs.core.swap_BANG_.call(null,tic_tac_toe.screens.play_spec.state,cljs.core.assoc,new cljs.core.Keyword(null,"game-state","game-state",935682735),states_12568);

c3kit.wire.spec_helper.render.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tic_tac_toe.render_screen.render_screen,tic_tac_toe.screens.play_spec.state], null));

var expected__11401__auto___12569 = true;
var actual__11402__auto___12570 = c3kit.wire.spec_helper.disabled_QMARK_.call(null,["#index-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join(''));
if(cljs.core._EQ_.call(null,expected__11401__auto___12569,actual__11402__auto___12570)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__11401__auto___12569;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11369__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11369__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__11402__auto___12570;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11369__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11369__auto__);
}
})()," (using =)"].join('')));
}

cljs.core.reset_BANG_.call(null,tic_tac_toe.screens.play_spec.state,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"board","board",-1907017633),tic_tac_toe.screens.play_spec.board_3,new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"current-screen","current-screen",-1454713691),new cljs.core.Keyword(null,"play","play",-580418022),new cljs.core.Keyword(null,"mode","mode",654403691),(1)], null));


var G__12571 = seq__12270_12564;
var G__12572 = chunk__12271_12565;
var G__12573 = count__12272_12566;
var G__12574 = (i__12273_12567 + (1));
seq__12270_12564 = G__12571;
chunk__12271_12565 = G__12572;
count__12272_12566 = G__12573;
i__12273_12567 = G__12574;
continue;
} else {
var temp__5804__auto___12575__$1 = cljs.core.seq.call(null,seq__12270_12564);
if(temp__5804__auto___12575__$1){
var seq__12270_12576__$1 = temp__5804__auto___12575__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12270_12576__$1)){
var c__5525__auto___12577 = cljs.core.chunk_first.call(null,seq__12270_12576__$1);
var G__12578 = cljs.core.chunk_rest.call(null,seq__12270_12576__$1);
var G__12579 = c__5525__auto___12577;
var G__12580 = cljs.core.count.call(null,c__5525__auto___12577);
var G__12581 = (0);
seq__12270_12564 = G__12578;
chunk__12271_12565 = G__12579;
count__12272_12566 = G__12580;
i__12273_12567 = G__12581;
continue;
} else {
var states_12582 = cljs.core.first.call(null,seq__12270_12576__$1);
cljs.core.swap_BANG_.call(null,tic_tac_toe.screens.play_spec.state,cljs.core.assoc,new cljs.core.Keyword(null,"game-state","game-state",935682735),states_12582);

c3kit.wire.spec_helper.render.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tic_tac_toe.render_screen.render_screen,tic_tac_toe.screens.play_spec.state], null));

var expected__11401__auto___12583 = true;
var actual__11402__auto___12584 = c3kit.wire.spec_helper.disabled_QMARK_.call(null,["#index-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join(''));
if(cljs.core._EQ_.call(null,expected__11401__auto___12583,actual__11402__auto___12584)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__11401__auto___12583;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11369__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11369__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__11402__auto___12584;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11369__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11369__auto__);
}
})()," (using =)"].join('')));
}

cljs.core.reset_BANG_.call(null,tic_tac_toe.screens.play_spec.state,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"board","board",-1907017633),tic_tac_toe.screens.play_spec.board_3,new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"current-screen","current-screen",-1454713691),new cljs.core.Keyword(null,"play","play",-580418022),new cljs.core.Keyword(null,"mode","mode",654403691),(1)], null));


var G__12585 = cljs.core.next.call(null,seq__12270_12576__$1);
var G__12586 = null;
var G__12587 = (0);
var G__12588 = (0);
seq__12270_12564 = G__12585;
chunk__12271_12565 = G__12586;
count__12272_12566 = G__12587;
i__12273_12567 = G__12588;
continue;
}
} else {
}
}
break;
}

var G__12589 = cljs.core.next.call(null,seq__12269__$1);
var G__12590 = null;
var G__12591 = (0);
var G__12592 = (0);
seq__12269 = G__12589;
chunk__12274 = G__12590;
count__12275 = G__12591;
i__12276 = G__12592;
continue;
}
} else {
return null;
}
}
break;
}
});})(_STAR_parent_description_STAR__orig_val__12183_12441,_STAR_parent_description_STAR__temp_val__12184_12442,description__11264__auto____$1,_STAR_parent_description_STAR__orig_val__11825_12412,_STAR_parent_description_STAR__temp_val__11826_12413,description__11264__auto___12411))
,false),speclj.components.new_characteristic.call(null,"clicking button triggers AI if mode 2 or 3",((function (_STAR_parent_description_STAR__orig_val__12183_12441,_STAR_parent_description_STAR__temp_val__12184_12442,description__11264__auto____$1,_STAR_parent_description_STAR__orig_val__11825_12412,_STAR_parent_description_STAR__temp_val__11826_12413,description__11264__auto___12411){
return (function (){
var seq__12281 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(3)], null));
var chunk__12294 = null;
var count__12295 = (0);
var i__12296 = (0);
while(true){
if((i__12296 < count__12295)){
var ai = cljs.core._nth.call(null,chunk__12294,i__12296);
var seq__12297_12593 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(3)], null));
var chunk__12302_12594 = null;
var count__12303_12595 = (0);
var i__12304_12596 = (0);
while(true){
if((i__12304_12596 < count__12303_12595)){
var mode_12597 = cljs.core._nth.call(null,chunk__12302_12594,i__12304_12596);
var seq__12305_12598 = cljs.core.seq.call(null,cljs.core.range.call(null,(9)));
var chunk__12306_12599 = null;
var count__12307_12600 = (0);
var i__12308_12601 = (0);
while(true){
if((i__12308_12601 < count__12307_12600)){
var n_12602 = cljs.core._nth.call(null,chunk__12306_12599,i__12308_12601);
cljs.core.swap_BANG_.call(null,tic_tac_toe.screens.play_spec.state,cljs.core.assoc,new cljs.core.Keyword(null,"mode","mode",654403691),mode_12597,new cljs.core.Keyword(null,"first-ai-level","first-ai-level",1004633644),ai,new cljs.core.Keyword(null,"player","player",-97687400),((cljs.core._EQ_.call(null,(2),mode_12597))?new cljs.core.Keyword(null,"x","x",2099068185):new cljs.core.Keyword(null,"o","o",-1350007228)),new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"gui","gui",604532813));

c3kit.wire.spec_helper.render.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tic_tac_toe.render_screen.render_screen,tic_tac_toe.screens.play_spec.state], null));

c3kit.wire.spec_helper.click_BANG_.call(null,["#index-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n_12602)].join(''));

var expected__11425__auto___12603 = cljs.core.assoc.call(null,tic_tac_toe.screens.play_spec.board_3,n_12602,new cljs.core.Keyword(null,"x","x",2099068185));
var actual__11426__auto___12604 = new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.screens.play_spec.state));
if(cljs.core._EQ_.call(null,expected__11425__auto___12603,actual__11426__auto___12604)){
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__11425__auto___12603;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11369__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11369__auto__);
}
})(),speclj.platform.endl,"not to =: ",(function (){var temp__5806__auto__ = actual__11426__auto___12604;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11369__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11369__auto__);
}
})()].join('')));
} else {
}

cljs.core.reset_BANG_.call(null,tic_tac_toe.screens.play_spec.state,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"board","board",-1907017633),tic_tac_toe.screens.play_spec.board_3,new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"current-screen","current-screen",-1454713691),new cljs.core.Keyword(null,"play","play",-580418022)], null));


var G__12605 = seq__12305_12598;
var G__12606 = chunk__12306_12599;
var G__12607 = count__12307_12600;
var G__12608 = (i__12308_12601 + (1));
seq__12305_12598 = G__12605;
chunk__12306_12599 = G__12606;
count__12307_12600 = G__12607;
i__12308_12601 = G__12608;
continue;
} else {
var temp__5804__auto___12609 = cljs.core.seq.call(null,seq__12305_12598);
if(temp__5804__auto___12609){
var seq__12305_12610__$1 = temp__5804__auto___12609;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12305_12610__$1)){
var c__5525__auto___12611 = cljs.core.chunk_first.call(null,seq__12305_12610__$1);
var G__12612 = cljs.core.chunk_rest.call(null,seq__12305_12610__$1);
var G__12613 = c__5525__auto___12611;
var G__12614 = cljs.core.count.call(null,c__5525__auto___12611);
var G__12615 = (0);
seq__12305_12598 = G__12612;
chunk__12306_12599 = G__12613;
count__12307_12600 = G__12614;
i__12308_12601 = G__12615;
continue;
} else {
var n_12616 = cljs.core.first.call(null,seq__12305_12610__$1);
cljs.core.swap_BANG_.call(null,tic_tac_toe.screens.play_spec.state,cljs.core.assoc,new cljs.core.Keyword(null,"mode","mode",654403691),mode_12597,new cljs.core.Keyword(null,"first-ai-level","first-ai-level",1004633644),ai,new cljs.core.Keyword(null,"player","player",-97687400),((cljs.core._EQ_.call(null,(2),mode_12597))?new cljs.core.Keyword(null,"x","x",2099068185):new cljs.core.Keyword(null,"o","o",-1350007228)),new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"gui","gui",604532813));

c3kit.wire.spec_helper.render.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tic_tac_toe.render_screen.render_screen,tic_tac_toe.screens.play_spec.state], null));

c3kit.wire.spec_helper.click_BANG_.call(null,["#index-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n_12616)].join(''));

var expected__11425__auto___12617 = cljs.core.assoc.call(null,tic_tac_toe.screens.play_spec.board_3,n_12616,new cljs.core.Keyword(null,"x","x",2099068185));
var actual__11426__auto___12618 = new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.screens.play_spec.state));
if(cljs.core._EQ_.call(null,expected__11425__auto___12617,actual__11426__auto___12618)){
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__11425__auto___12617;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11369__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11369__auto__);
}
})(),speclj.platform.endl,"not to =: ",(function (){var temp__5806__auto__ = actual__11426__auto___12618;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11369__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11369__auto__);
}
})()].join('')));
} else {
}

cljs.core.reset_BANG_.call(null,tic_tac_toe.screens.play_spec.state,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"board","board",-1907017633),tic_tac_toe.screens.play_spec.board_3,new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"current-screen","current-screen",-1454713691),new cljs.core.Keyword(null,"play","play",-580418022)], null));


var G__12619 = cljs.core.next.call(null,seq__12305_12610__$1);
var G__12620 = null;
var G__12621 = (0);
var G__12622 = (0);
seq__12305_12598 = G__12619;
chunk__12306_12599 = G__12620;
count__12307_12600 = G__12621;
i__12308_12601 = G__12622;
continue;
}
} else {
}
}
break;
}

var G__12623 = seq__12297_12593;
var G__12624 = chunk__12302_12594;
var G__12625 = count__12303_12595;
var G__12626 = (i__12304_12596 + (1));
seq__12297_12593 = G__12623;
chunk__12302_12594 = G__12624;
count__12303_12595 = G__12625;
i__12304_12596 = G__12626;
continue;
} else {
var temp__5804__auto___12627 = cljs.core.seq.call(null,seq__12297_12593);
if(temp__5804__auto___12627){
var seq__12297_12628__$1 = temp__5804__auto___12627;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12297_12628__$1)){
var c__5525__auto___12629 = cljs.core.chunk_first.call(null,seq__12297_12628__$1);
var G__12630 = cljs.core.chunk_rest.call(null,seq__12297_12628__$1);
var G__12631 = c__5525__auto___12629;
var G__12632 = cljs.core.count.call(null,c__5525__auto___12629);
var G__12633 = (0);
seq__12297_12593 = G__12630;
chunk__12302_12594 = G__12631;
count__12303_12595 = G__12632;
i__12304_12596 = G__12633;
continue;
} else {
var mode_12634 = cljs.core.first.call(null,seq__12297_12628__$1);
var seq__12298_12635 = cljs.core.seq.call(null,cljs.core.range.call(null,(9)));
var chunk__12299_12636 = null;
var count__12300_12637 = (0);
var i__12301_12638 = (0);
while(true){
if((i__12301_12638 < count__12300_12637)){
var n_12639 = cljs.core._nth.call(null,chunk__12299_12636,i__12301_12638);
cljs.core.swap_BANG_.call(null,tic_tac_toe.screens.play_spec.state,cljs.core.assoc,new cljs.core.Keyword(null,"mode","mode",654403691),mode_12634,new cljs.core.Keyword(null,"first-ai-level","first-ai-level",1004633644),ai,new cljs.core.Keyword(null,"player","player",-97687400),((cljs.core._EQ_.call(null,(2),mode_12634))?new cljs.core.Keyword(null,"x","x",2099068185):new cljs.core.Keyword(null,"o","o",-1350007228)),new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"gui","gui",604532813));

c3kit.wire.spec_helper.render.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tic_tac_toe.render_screen.render_screen,tic_tac_toe.screens.play_spec.state], null));

c3kit.wire.spec_helper.click_BANG_.call(null,["#index-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n_12639)].join(''));

var expected__11425__auto___12640 = cljs.core.assoc.call(null,tic_tac_toe.screens.play_spec.board_3,n_12639,new cljs.core.Keyword(null,"x","x",2099068185));
var actual__11426__auto___12641 = new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.screens.play_spec.state));
if(cljs.core._EQ_.call(null,expected__11425__auto___12640,actual__11426__auto___12641)){
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__11425__auto___12640;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11369__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11369__auto__);
}
})(),speclj.platform.endl,"not to =: ",(function (){var temp__5806__auto__ = actual__11426__auto___12641;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11369__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11369__auto__);
}
})()].join('')));
} else {
}

cljs.core.reset_BANG_.call(null,tic_tac_toe.screens.play_spec.state,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"board","board",-1907017633),tic_tac_toe.screens.play_spec.board_3,new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"current-screen","current-screen",-1454713691),new cljs.core.Keyword(null,"play","play",-580418022)], null));


var G__12642 = seq__12298_12635;
var G__12643 = chunk__12299_12636;
var G__12644 = count__12300_12637;
var G__12645 = (i__12301_12638 + (1));
seq__12298_12635 = G__12642;
chunk__12299_12636 = G__12643;
count__12300_12637 = G__12644;
i__12301_12638 = G__12645;
continue;
} else {
var temp__5804__auto___12646__$1 = cljs.core.seq.call(null,seq__12298_12635);
if(temp__5804__auto___12646__$1){
var seq__12298_12647__$1 = temp__5804__auto___12646__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12298_12647__$1)){
var c__5525__auto___12648 = cljs.core.chunk_first.call(null,seq__12298_12647__$1);
var G__12649 = cljs.core.chunk_rest.call(null,seq__12298_12647__$1);
var G__12650 = c__5525__auto___12648;
var G__12651 = cljs.core.count.call(null,c__5525__auto___12648);
var G__12652 = (0);
seq__12298_12635 = G__12649;
chunk__12299_12636 = G__12650;
count__12300_12637 = G__12651;
i__12301_12638 = G__12652;
continue;
} else {
var n_12653 = cljs.core.first.call(null,seq__12298_12647__$1);
cljs.core.swap_BANG_.call(null,tic_tac_toe.screens.play_spec.state,cljs.core.assoc,new cljs.core.Keyword(null,"mode","mode",654403691),mode_12634,new cljs.core.Keyword(null,"first-ai-level","first-ai-level",1004633644),ai,new cljs.core.Keyword(null,"player","player",-97687400),((cljs.core._EQ_.call(null,(2),mode_12634))?new cljs.core.Keyword(null,"x","x",2099068185):new cljs.core.Keyword(null,"o","o",-1350007228)),new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"gui","gui",604532813));

c3kit.wire.spec_helper.render.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tic_tac_toe.render_screen.render_screen,tic_tac_toe.screens.play_spec.state], null));

c3kit.wire.spec_helper.click_BANG_.call(null,["#index-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n_12653)].join(''));

var expected__11425__auto___12654 = cljs.core.assoc.call(null,tic_tac_toe.screens.play_spec.board_3,n_12653,new cljs.core.Keyword(null,"x","x",2099068185));
var actual__11426__auto___12655 = new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.screens.play_spec.state));
if(cljs.core._EQ_.call(null,expected__11425__auto___12654,actual__11426__auto___12655)){
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__11425__auto___12654;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11369__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11369__auto__);
}
})(),speclj.platform.endl,"not to =: ",(function (){var temp__5806__auto__ = actual__11426__auto___12655;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11369__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11369__auto__);
}
})()].join('')));
} else {
}

cljs.core.reset_BANG_.call(null,tic_tac_toe.screens.play_spec.state,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"board","board",-1907017633),tic_tac_toe.screens.play_spec.board_3,new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"current-screen","current-screen",-1454713691),new cljs.core.Keyword(null,"play","play",-580418022)], null));


var G__12656 = cljs.core.next.call(null,seq__12298_12647__$1);
var G__12657 = null;
var G__12658 = (0);
var G__12659 = (0);
seq__12298_12635 = G__12656;
chunk__12299_12636 = G__12657;
count__12300_12637 = G__12658;
i__12301_12638 = G__12659;
continue;
}
} else {
}
}
break;
}

var G__12660 = cljs.core.next.call(null,seq__12297_12628__$1);
var G__12661 = null;
var G__12662 = (0);
var G__12663 = (0);
seq__12297_12593 = G__12660;
chunk__12302_12594 = G__12661;
count__12303_12595 = G__12662;
i__12304_12596 = G__12663;
continue;
}
} else {
}
}
break;
}

var G__12664 = seq__12281;
var G__12665 = chunk__12294;
var G__12666 = count__12295;
var G__12667 = (i__12296 + (1));
seq__12281 = G__12664;
chunk__12294 = G__12665;
count__12295 = G__12666;
i__12296 = G__12667;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__12281);
if(temp__5804__auto__){
var seq__12281__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12281__$1)){
var c__5525__auto__ = cljs.core.chunk_first.call(null,seq__12281__$1);
var G__12668 = cljs.core.chunk_rest.call(null,seq__12281__$1);
var G__12669 = c__5525__auto__;
var G__12670 = cljs.core.count.call(null,c__5525__auto__);
var G__12671 = (0);
seq__12281 = G__12668;
chunk__12294 = G__12669;
count__12295 = G__12670;
i__12296 = G__12671;
continue;
} else {
var ai = cljs.core.first.call(null,seq__12281__$1);
var seq__12282_12672 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(3)], null));
var chunk__12287_12673 = null;
var count__12288_12674 = (0);
var i__12289_12675 = (0);
while(true){
if((i__12289_12675 < count__12288_12674)){
var mode_12676 = cljs.core._nth.call(null,chunk__12287_12673,i__12289_12675);
var seq__12290_12677 = cljs.core.seq.call(null,cljs.core.range.call(null,(9)));
var chunk__12291_12678 = null;
var count__12292_12679 = (0);
var i__12293_12680 = (0);
while(true){
if((i__12293_12680 < count__12292_12679)){
var n_12681 = cljs.core._nth.call(null,chunk__12291_12678,i__12293_12680);
cljs.core.swap_BANG_.call(null,tic_tac_toe.screens.play_spec.state,cljs.core.assoc,new cljs.core.Keyword(null,"mode","mode",654403691),mode_12676,new cljs.core.Keyword(null,"first-ai-level","first-ai-level",1004633644),ai,new cljs.core.Keyword(null,"player","player",-97687400),((cljs.core._EQ_.call(null,(2),mode_12676))?new cljs.core.Keyword(null,"x","x",2099068185):new cljs.core.Keyword(null,"o","o",-1350007228)),new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"gui","gui",604532813));

c3kit.wire.spec_helper.render.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tic_tac_toe.render_screen.render_screen,tic_tac_toe.screens.play_spec.state], null));

c3kit.wire.spec_helper.click_BANG_.call(null,["#index-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n_12681)].join(''));

var expected__11425__auto___12682 = cljs.core.assoc.call(null,tic_tac_toe.screens.play_spec.board_3,n_12681,new cljs.core.Keyword(null,"x","x",2099068185));
var actual__11426__auto___12683 = new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.screens.play_spec.state));
if(cljs.core._EQ_.call(null,expected__11425__auto___12682,actual__11426__auto___12683)){
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__11425__auto___12682;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11369__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11369__auto__);
}
})(),speclj.platform.endl,"not to =: ",(function (){var temp__5806__auto__ = actual__11426__auto___12683;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11369__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11369__auto__);
}
})()].join('')));
} else {
}

cljs.core.reset_BANG_.call(null,tic_tac_toe.screens.play_spec.state,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"board","board",-1907017633),tic_tac_toe.screens.play_spec.board_3,new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"current-screen","current-screen",-1454713691),new cljs.core.Keyword(null,"play","play",-580418022)], null));


var G__12684 = seq__12290_12677;
var G__12685 = chunk__12291_12678;
var G__12686 = count__12292_12679;
var G__12687 = (i__12293_12680 + (1));
seq__12290_12677 = G__12684;
chunk__12291_12678 = G__12685;
count__12292_12679 = G__12686;
i__12293_12680 = G__12687;
continue;
} else {
var temp__5804__auto___12688__$1 = cljs.core.seq.call(null,seq__12290_12677);
if(temp__5804__auto___12688__$1){
var seq__12290_12689__$1 = temp__5804__auto___12688__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12290_12689__$1)){
var c__5525__auto___12690 = cljs.core.chunk_first.call(null,seq__12290_12689__$1);
var G__12691 = cljs.core.chunk_rest.call(null,seq__12290_12689__$1);
var G__12692 = c__5525__auto___12690;
var G__12693 = cljs.core.count.call(null,c__5525__auto___12690);
var G__12694 = (0);
seq__12290_12677 = G__12691;
chunk__12291_12678 = G__12692;
count__12292_12679 = G__12693;
i__12293_12680 = G__12694;
continue;
} else {
var n_12695 = cljs.core.first.call(null,seq__12290_12689__$1);
cljs.core.swap_BANG_.call(null,tic_tac_toe.screens.play_spec.state,cljs.core.assoc,new cljs.core.Keyword(null,"mode","mode",654403691),mode_12676,new cljs.core.Keyword(null,"first-ai-level","first-ai-level",1004633644),ai,new cljs.core.Keyword(null,"player","player",-97687400),((cljs.core._EQ_.call(null,(2),mode_12676))?new cljs.core.Keyword(null,"x","x",2099068185):new cljs.core.Keyword(null,"o","o",-1350007228)),new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"gui","gui",604532813));

c3kit.wire.spec_helper.render.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tic_tac_toe.render_screen.render_screen,tic_tac_toe.screens.play_spec.state], null));

c3kit.wire.spec_helper.click_BANG_.call(null,["#index-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n_12695)].join(''));

var expected__11425__auto___12696 = cljs.core.assoc.call(null,tic_tac_toe.screens.play_spec.board_3,n_12695,new cljs.core.Keyword(null,"x","x",2099068185));
var actual__11426__auto___12697 = new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.screens.play_spec.state));
if(cljs.core._EQ_.call(null,expected__11425__auto___12696,actual__11426__auto___12697)){
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__11425__auto___12696;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11369__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11369__auto__);
}
})(),speclj.platform.endl,"not to =: ",(function (){var temp__5806__auto__ = actual__11426__auto___12697;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11369__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11369__auto__);
}
})()].join('')));
} else {
}

cljs.core.reset_BANG_.call(null,tic_tac_toe.screens.play_spec.state,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"board","board",-1907017633),tic_tac_toe.screens.play_spec.board_3,new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"current-screen","current-screen",-1454713691),new cljs.core.Keyword(null,"play","play",-580418022)], null));


var G__12698 = cljs.core.next.call(null,seq__12290_12689__$1);
var G__12699 = null;
var G__12700 = (0);
var G__12701 = (0);
seq__12290_12677 = G__12698;
chunk__12291_12678 = G__12699;
count__12292_12679 = G__12700;
i__12293_12680 = G__12701;
continue;
}
} else {
}
}
break;
}

var G__12702 = seq__12282_12672;
var G__12703 = chunk__12287_12673;
var G__12704 = count__12288_12674;
var G__12705 = (i__12289_12675 + (1));
seq__12282_12672 = G__12702;
chunk__12287_12673 = G__12703;
count__12288_12674 = G__12704;
i__12289_12675 = G__12705;
continue;
} else {
var temp__5804__auto___12706__$1 = cljs.core.seq.call(null,seq__12282_12672);
if(temp__5804__auto___12706__$1){
var seq__12282_12707__$1 = temp__5804__auto___12706__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12282_12707__$1)){
var c__5525__auto___12708 = cljs.core.chunk_first.call(null,seq__12282_12707__$1);
var G__12709 = cljs.core.chunk_rest.call(null,seq__12282_12707__$1);
var G__12710 = c__5525__auto___12708;
var G__12711 = cljs.core.count.call(null,c__5525__auto___12708);
var G__12712 = (0);
seq__12282_12672 = G__12709;
chunk__12287_12673 = G__12710;
count__12288_12674 = G__12711;
i__12289_12675 = G__12712;
continue;
} else {
var mode_12713 = cljs.core.first.call(null,seq__12282_12707__$1);
var seq__12283_12714 = cljs.core.seq.call(null,cljs.core.range.call(null,(9)));
var chunk__12284_12715 = null;
var count__12285_12716 = (0);
var i__12286_12717 = (0);
while(true){
if((i__12286_12717 < count__12285_12716)){
var n_12718 = cljs.core._nth.call(null,chunk__12284_12715,i__12286_12717);
cljs.core.swap_BANG_.call(null,tic_tac_toe.screens.play_spec.state,cljs.core.assoc,new cljs.core.Keyword(null,"mode","mode",654403691),mode_12713,new cljs.core.Keyword(null,"first-ai-level","first-ai-level",1004633644),ai,new cljs.core.Keyword(null,"player","player",-97687400),((cljs.core._EQ_.call(null,(2),mode_12713))?new cljs.core.Keyword(null,"x","x",2099068185):new cljs.core.Keyword(null,"o","o",-1350007228)),new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"gui","gui",604532813));

c3kit.wire.spec_helper.render.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tic_tac_toe.render_screen.render_screen,tic_tac_toe.screens.play_spec.state], null));

c3kit.wire.spec_helper.click_BANG_.call(null,["#index-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n_12718)].join(''));

var expected__11425__auto___12719 = cljs.core.assoc.call(null,tic_tac_toe.screens.play_spec.board_3,n_12718,new cljs.core.Keyword(null,"x","x",2099068185));
var actual__11426__auto___12720 = new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.screens.play_spec.state));
if(cljs.core._EQ_.call(null,expected__11425__auto___12719,actual__11426__auto___12720)){
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__11425__auto___12719;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11369__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11369__auto__);
}
})(),speclj.platform.endl,"not to =: ",(function (){var temp__5806__auto__ = actual__11426__auto___12720;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11369__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11369__auto__);
}
})()].join('')));
} else {
}

cljs.core.reset_BANG_.call(null,tic_tac_toe.screens.play_spec.state,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"board","board",-1907017633),tic_tac_toe.screens.play_spec.board_3,new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"current-screen","current-screen",-1454713691),new cljs.core.Keyword(null,"play","play",-580418022)], null));


var G__12721 = seq__12283_12714;
var G__12722 = chunk__12284_12715;
var G__12723 = count__12285_12716;
var G__12724 = (i__12286_12717 + (1));
seq__12283_12714 = G__12721;
chunk__12284_12715 = G__12722;
count__12285_12716 = G__12723;
i__12286_12717 = G__12724;
continue;
} else {
var temp__5804__auto___12725__$2 = cljs.core.seq.call(null,seq__12283_12714);
if(temp__5804__auto___12725__$2){
var seq__12283_12726__$1 = temp__5804__auto___12725__$2;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12283_12726__$1)){
var c__5525__auto___12727 = cljs.core.chunk_first.call(null,seq__12283_12726__$1);
var G__12728 = cljs.core.chunk_rest.call(null,seq__12283_12726__$1);
var G__12729 = c__5525__auto___12727;
var G__12730 = cljs.core.count.call(null,c__5525__auto___12727);
var G__12731 = (0);
seq__12283_12714 = G__12728;
chunk__12284_12715 = G__12729;
count__12285_12716 = G__12730;
i__12286_12717 = G__12731;
continue;
} else {
var n_12732 = cljs.core.first.call(null,seq__12283_12726__$1);
cljs.core.swap_BANG_.call(null,tic_tac_toe.screens.play_spec.state,cljs.core.assoc,new cljs.core.Keyword(null,"mode","mode",654403691),mode_12713,new cljs.core.Keyword(null,"first-ai-level","first-ai-level",1004633644),ai,new cljs.core.Keyword(null,"player","player",-97687400),((cljs.core._EQ_.call(null,(2),mode_12713))?new cljs.core.Keyword(null,"x","x",2099068185):new cljs.core.Keyword(null,"o","o",-1350007228)),new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"gui","gui",604532813));

c3kit.wire.spec_helper.render.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tic_tac_toe.render_screen.render_screen,tic_tac_toe.screens.play_spec.state], null));

c3kit.wire.spec_helper.click_BANG_.call(null,["#index-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n_12732)].join(''));

var expected__11425__auto___12733 = cljs.core.assoc.call(null,tic_tac_toe.screens.play_spec.board_3,n_12732,new cljs.core.Keyword(null,"x","x",2099068185));
var actual__11426__auto___12734 = new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.screens.play_spec.state));
if(cljs.core._EQ_.call(null,expected__11425__auto___12733,actual__11426__auto___12734)){
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__11425__auto___12733;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11369__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11369__auto__);
}
})(),speclj.platform.endl,"not to =: ",(function (){var temp__5806__auto__ = actual__11426__auto___12734;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11369__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11369__auto__);
}
})()].join('')));
} else {
}

cljs.core.reset_BANG_.call(null,tic_tac_toe.screens.play_spec.state,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"board","board",-1907017633),tic_tac_toe.screens.play_spec.board_3,new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"current-screen","current-screen",-1454713691),new cljs.core.Keyword(null,"play","play",-580418022)], null));


var G__12735 = cljs.core.next.call(null,seq__12283_12726__$1);
var G__12736 = null;
var G__12737 = (0);
var G__12738 = (0);
seq__12283_12714 = G__12735;
chunk__12284_12715 = G__12736;
count__12285_12716 = G__12737;
i__12286_12717 = G__12738;
continue;
}
} else {
}
}
break;
}

var G__12739 = cljs.core.next.call(null,seq__12282_12707__$1);
var G__12740 = null;
var G__12741 = (0);
var G__12742 = (0);
seq__12282_12672 = G__12739;
chunk__12287_12673 = G__12740;
count__12288_12674 = G__12741;
i__12289_12675 = G__12742;
continue;
}
} else {
}
}
break;
}

var G__12743 = cljs.core.next.call(null,seq__12281__$1);
var G__12744 = null;
var G__12745 = (0);
var G__12746 = (0);
seq__12281 = G__12743;
chunk__12294 = G__12744;
count__12295 = G__12745;
i__12296 = G__12746;
continue;
}
} else {
return null;
}
}
break;
}
});})(_STAR_parent_description_STAR__orig_val__12183_12441,_STAR_parent_description_STAR__temp_val__12184_12442,description__11264__auto____$1,_STAR_parent_description_STAR__orig_val__11825_12412,_STAR_parent_description_STAR__temp_val__11826_12413,description__11264__auto___12411))
,false),speclj.components.new_characteristic.call(null,"AI is not triggered if game over",((function (_STAR_parent_description_STAR__orig_val__12183_12441,_STAR_parent_description_STAR__temp_val__12184_12442,description__11264__auto____$1,_STAR_parent_description_STAR__orig_val__11825_12412,_STAR_parent_description_STAR__temp_val__11826_12413,description__11264__auto___12411){
return (function (){
cljs.core.swap_BANG_.call(null,tic_tac_toe.screens.play_spec.state,cljs.core.assoc,new cljs.core.Keyword(null,"board","board",-1907017633),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"x","x",2099068185),(3),new cljs.core.Keyword(null,"o","o",-1350007228),new cljs.core.Keyword(null,"o","o",-1350007228),(6),(7),(8),(9)], null),new cljs.core.Keyword(null,"mode","mode",654403691),(2),new cljs.core.Keyword(null,"first-ai-level","first-ai-level",1004633644),(3));

c3kit.wire.spec_helper.click_BANG_.call(null,"#index-2");

var expected__11401__auto__ = new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"o","o",-1350007228),new cljs.core.Keyword(null,"o","o",-1350007228),(6),(7),(8),(9)], null);
var actual__11402__auto__ = new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.screens.play_spec.state));
if(cljs.core._EQ_.call(null,expected__11401__auto__,actual__11402__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__11401__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11369__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11369__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__11402__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11369__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11369__auto__);
}
})()," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__12183_12441,_STAR_parent_description_STAR__temp_val__12184_12442,description__11264__auto____$1,_STAR_parent_description_STAR__orig_val__11825_12412,_STAR_parent_description_STAR__temp_val__11826_12413,description__11264__auto___12411))
,false)],null)));
var chunk__12186_12444 = null;
var count__12187_12445 = (0);
var i__12188_12446 = (0);
while(true){
if((i__12188_12446 < count__12187_12445)){
var component__11265__auto___12747 = cljs.core._nth.call(null,chunk__12186_12444,i__12188_12446);
speclj.components.install.call(null,component__11265__auto___12747,description__11264__auto____$1);


var G__12748 = seq__12185_12443;
var G__12749 = chunk__12186_12444;
var G__12750 = count__12187_12445;
var G__12751 = (i__12188_12446 + (1));
seq__12185_12443 = G__12748;
chunk__12186_12444 = G__12749;
count__12187_12445 = G__12750;
i__12188_12446 = G__12751;
continue;
} else {
var temp__5804__auto___12752 = cljs.core.seq.call(null,seq__12185_12443);
if(temp__5804__auto___12752){
var seq__12185_12753__$1 = temp__5804__auto___12752;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12185_12753__$1)){
var c__5525__auto___12754 = cljs.core.chunk_first.call(null,seq__12185_12753__$1);
var G__12755 = cljs.core.chunk_rest.call(null,seq__12185_12753__$1);
var G__12756 = c__5525__auto___12754;
var G__12757 = cljs.core.count.call(null,c__5525__auto___12754);
var G__12758 = (0);
seq__12185_12443 = G__12755;
chunk__12186_12444 = G__12756;
count__12187_12445 = G__12757;
i__12188_12446 = G__12758;
continue;
} else {
var component__11265__auto___12759 = cljs.core.first.call(null,seq__12185_12753__$1);
speclj.components.install.call(null,component__11265__auto___12759,description__11264__auto____$1);


var G__12760 = cljs.core.next.call(null,seq__12185_12753__$1);
var G__12761 = null;
var G__12762 = (0);
var G__12763 = (0);
seq__12185_12443 = G__12760;
chunk__12186_12444 = G__12761;
count__12187_12445 = G__12762;
i__12188_12446 = G__12763;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__12183_12441);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__11264__auto____$1);
}

return description__11264__auto____$1;
})(),(function (){var description__11264__auto____$1 = speclj.components.new_description.call(null,"4x4",false,"tic-tac-toe.screens.play-spec");
var _STAR_parent_description_STAR__orig_val__12309_12764 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__12310_12765 = description__11264__auto____$1;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__12310_12765);

try{var seq__12311_12766 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,9,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_before.call(null,((function (_STAR_parent_description_STAR__orig_val__12309_12764,_STAR_parent_description_STAR__temp_val__12310_12765,description__11264__auto____$1,_STAR_parent_description_STAR__orig_val__11825_12412,_STAR_parent_description_STAR__temp_val__11826_12413,description__11264__auto___12411){
return (function (){
cljs.core.reset_BANG_.call(null,tic_tac_toe.screens.play_spec.state,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"current-screen","current-screen",-1454713691),new cljs.core.Keyword(null,"play","play",-580418022),new cljs.core.Keyword(null,"board","board",-1907017633),tic_tac_toe.screens.play_spec.board_4,new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"mode","mode",654403691),(1),new cljs.core.Keyword(null,"game-state","game-state",935682735),new cljs.core.Keyword(null,"in-progress","in-progress",2126442630)], null));

return c3kit.wire.spec_helper.render.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tic_tac_toe.render_screen.render_screen,tic_tac_toe.screens.play_spec.state], null));
});})(_STAR_parent_description_STAR__orig_val__12309_12764,_STAR_parent_description_STAR__temp_val__12310_12765,description__11264__auto____$1,_STAR_parent_description_STAR__orig_val__11825_12412,_STAR_parent_description_STAR__temp_val__11826_12413,description__11264__auto___12411))
),speclj.components.new_characteristic.call(null,"renders board",((function (_STAR_parent_description_STAR__orig_val__12309_12764,_STAR_parent_description_STAR__temp_val__12310_12765,description__11264__auto____$1,_STAR_parent_description_STAR__orig_val__11825_12412,_STAR_parent_description_STAR__temp_val__11826_12413,description__11264__auto___12411){
return (function (){
var expected__11401__auto___12770 = (16);
var actual__11402__auto___12771 = cljs.core.count.call(null,cljs.core.vec.call(null,c3kit.wire.js.query_selector_all.call(null,".board-square")));
if(cljs.core._EQ_.call(null,expected__11401__auto___12770,actual__11402__auto___12771)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__11401__auto___12770;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11369__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11369__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__11402__auto___12771;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11369__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11369__auto__);
}
})()," (using =)"].join('')));
}

var value__11764__auto___12772 = "#board-wrapper";
var node__11765__auto___12773 = c3kit.wire.spec_helper.select.call(null,value__11764__auto___12772);
if(cljs.core.truth_(node__11765__auto___12773)){
} else {
throw (new speclj.platform.SpecFailure(["Expected selector to find node: ",(function (){var temp__5806__auto__ = value__11764__auto___12772;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11369__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11369__auto__);
}
})()].join('')));
}

var value__11764__auto__ = ".four-grid";
var node__11765__auto__ = c3kit.wire.spec_helper.select.call(null,value__11764__auto__);
if(cljs.core.truth_(node__11765__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected selector to find node: ",(function (){var temp__5806__auto__ = value__11764__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11369__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11369__auto__);
}
})()].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__12309_12764,_STAR_parent_description_STAR__temp_val__12310_12765,description__11264__auto____$1,_STAR_parent_description_STAR__orig_val__11825_12412,_STAR_parent_description_STAR__temp_val__11826_12413,description__11264__auto___12411))
,false),speclj.components.new_characteristic.call(null,"buttons have IDs 0-15",((function (_STAR_parent_description_STAR__orig_val__12309_12764,_STAR_parent_description_STAR__temp_val__12310_12765,description__11264__auto____$1,_STAR_parent_description_STAR__orig_val__11825_12412,_STAR_parent_description_STAR__temp_val__11826_12413,description__11264__auto___12411){
return (function (){
var seq__12363 = cljs.core.seq.call(null,cljs.core.range.call(null,(16)));
var chunk__12364 = null;
var count__12365 = (0);
var i__12366 = (0);
while(true){
if((i__12366 < count__12365)){
var n = cljs.core._nth.call(null,chunk__12364,i__12366);
var value__11764__auto___12774 = ["#index-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join('');
var node__11765__auto___12775 = c3kit.wire.spec_helper.select.call(null,value__11764__auto___12774);
if(cljs.core.truth_(node__11765__auto___12775)){
} else {
throw (new speclj.platform.SpecFailure(["Expected selector to find node: ",(function (){var temp__5806__auto__ = value__11764__auto___12774;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11369__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11369__auto__);
}
})()].join('')));
}


var G__12776 = seq__12363;
var G__12777 = chunk__12364;
var G__12778 = count__12365;
var G__12779 = (i__12366 + (1));
seq__12363 = G__12776;
chunk__12364 = G__12777;
count__12365 = G__12778;
i__12366 = G__12779;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__12363);
if(temp__5804__auto__){
var seq__12363__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12363__$1)){
var c__5525__auto__ = cljs.core.chunk_first.call(null,seq__12363__$1);
var G__12780 = cljs.core.chunk_rest.call(null,seq__12363__$1);
var G__12781 = c__5525__auto__;
var G__12782 = cljs.core.count.call(null,c__5525__auto__);
var G__12783 = (0);
seq__12363 = G__12780;
chunk__12364 = G__12781;
count__12365 = G__12782;
i__12366 = G__12783;
continue;
} else {
var n = cljs.core.first.call(null,seq__12363__$1);
var value__11764__auto___12784 = ["#index-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join('');
var node__11765__auto___12785 = c3kit.wire.spec_helper.select.call(null,value__11764__auto___12784);
if(cljs.core.truth_(node__11765__auto___12785)){
} else {
throw (new speclj.platform.SpecFailure(["Expected selector to find node: ",(function (){var temp__5806__auto__ = value__11764__auto___12784;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11369__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11369__auto__);
}
})()].join('')));
}


var G__12786 = cljs.core.next.call(null,seq__12363__$1);
var G__12787 = null;
var G__12788 = (0);
var G__12789 = (0);
seq__12363 = G__12786;
chunk__12364 = G__12787;
count__12365 = G__12788;
i__12366 = G__12789;
continue;
}
} else {
return null;
}
}
break;
}
});})(_STAR_parent_description_STAR__orig_val__12309_12764,_STAR_parent_description_STAR__temp_val__12310_12765,description__11264__auto____$1,_STAR_parent_description_STAR__orig_val__11825_12412,_STAR_parent_description_STAR__temp_val__11826_12413,description__11264__auto___12411))
,false),speclj.components.new_characteristic.call(null,"clicking button updates board in state",((function (_STAR_parent_description_STAR__orig_val__12309_12764,_STAR_parent_description_STAR__temp_val__12310_12765,description__11264__auto____$1,_STAR_parent_description_STAR__orig_val__11825_12412,_STAR_parent_description_STAR__temp_val__11826_12413,description__11264__auto___12411){
return (function (){
var seq__12367 = cljs.core.seq.call(null,cljs.core.range.call(null,(16)));
var chunk__12368 = null;
var count__12369 = (0);
var i__12370 = (0);
while(true){
if((i__12370 < count__12369)){
var n = cljs.core._nth.call(null,chunk__12368,i__12370);
c3kit.wire.spec_helper.click_BANG_.call(null,["#index-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join(''));

var expected__11401__auto___12790 = cljs.core.assoc.call(null,tic_tac_toe.screens.play_spec.board_4,n,new cljs.core.Keyword(null,"x","x",2099068185));
var actual__11402__auto___12791 = new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.screens.play_spec.state));
if(cljs.core._EQ_.call(null,expected__11401__auto___12790,actual__11402__auto___12791)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__11401__auto___12790;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11369__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11369__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__11402__auto___12791;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11369__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11369__auto__);
}
})()," (using =)"].join('')));
}

cljs.core.swap_BANG_.call(null,tic_tac_toe.screens.play_spec.state,cljs.core.assoc,new cljs.core.Keyword(null,"board","board",-1907017633),tic_tac_toe.screens.play_spec.board_4,new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"x","x",2099068185));


var G__12792 = seq__12367;
var G__12793 = chunk__12368;
var G__12794 = count__12369;
var G__12795 = (i__12370 + (1));
seq__12367 = G__12792;
chunk__12368 = G__12793;
count__12369 = G__12794;
i__12370 = G__12795;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__12367);
if(temp__5804__auto__){
var seq__12367__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12367__$1)){
var c__5525__auto__ = cljs.core.chunk_first.call(null,seq__12367__$1);
var G__12796 = cljs.core.chunk_rest.call(null,seq__12367__$1);
var G__12797 = c__5525__auto__;
var G__12798 = cljs.core.count.call(null,c__5525__auto__);
var G__12799 = (0);
seq__12367 = G__12796;
chunk__12368 = G__12797;
count__12369 = G__12798;
i__12370 = G__12799;
continue;
} else {
var n = cljs.core.first.call(null,seq__12367__$1);
c3kit.wire.spec_helper.click_BANG_.call(null,["#index-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join(''));

var expected__11401__auto___12800 = cljs.core.assoc.call(null,tic_tac_toe.screens.play_spec.board_4,n,new cljs.core.Keyword(null,"x","x",2099068185));
var actual__11402__auto___12801 = new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.screens.play_spec.state));
if(cljs.core._EQ_.call(null,expected__11401__auto___12800,actual__11402__auto___12801)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__11401__auto___12800;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11369__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11369__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__11402__auto___12801;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11369__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11369__auto__);
}
})()," (using =)"].join('')));
}

cljs.core.swap_BANG_.call(null,tic_tac_toe.screens.play_spec.state,cljs.core.assoc,new cljs.core.Keyword(null,"board","board",-1907017633),tic_tac_toe.screens.play_spec.board_4,new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"x","x",2099068185));


var G__12802 = cljs.core.next.call(null,seq__12367__$1);
var G__12803 = null;
var G__12804 = (0);
var G__12805 = (0);
seq__12367 = G__12802;
chunk__12368 = G__12803;
count__12369 = G__12804;
i__12370 = G__12805;
continue;
}
} else {
return null;
}
}
break;
}
});})(_STAR_parent_description_STAR__orig_val__12309_12764,_STAR_parent_description_STAR__temp_val__12310_12765,description__11264__auto____$1,_STAR_parent_description_STAR__orig_val__11825_12412,_STAR_parent_description_STAR__temp_val__11826_12413,description__11264__auto___12411))
,false),speclj.components.new_characteristic.call(null,"clicking button swaps player in state",((function (_STAR_parent_description_STAR__orig_val__12309_12764,_STAR_parent_description_STAR__temp_val__12310_12765,description__11264__auto____$1,_STAR_parent_description_STAR__orig_val__11825_12412,_STAR_parent_description_STAR__temp_val__11826_12413,description__11264__auto___12411){
return (function (){
var seq__12371 = cljs.core.seq.call(null,cljs.core.range.call(null,(16)));
var chunk__12372 = null;
var count__12373 = (0);
var i__12374 = (0);
while(true){
if((i__12374 < count__12373)){
var n = cljs.core._nth.call(null,chunk__12372,i__12374);
c3kit.wire.spec_helper.click_BANG_.call(null,["#index-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join(''));

var expected__11401__auto___12806 = new cljs.core.Keyword(null,"o","o",-1350007228);
var actual__11402__auto___12807 = new cljs.core.Keyword(null,"player","player",-97687400).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.screens.play_spec.state));
if(cljs.core._EQ_.call(null,expected__11401__auto___12806,actual__11402__auto___12807)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__11401__auto___12806;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11369__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11369__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__11402__auto___12807;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11369__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11369__auto__);
}
})()," (using =)"].join('')));
}

cljs.core.swap_BANG_.call(null,tic_tac_toe.screens.play_spec.state,cljs.core.assoc,new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"board","board",-1907017633),tic_tac_toe.screens.play_spec.board_4);


var G__12808 = seq__12371;
var G__12809 = chunk__12372;
var G__12810 = count__12373;
var G__12811 = (i__12374 + (1));
seq__12371 = G__12808;
chunk__12372 = G__12809;
count__12373 = G__12810;
i__12374 = G__12811;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__12371);
if(temp__5804__auto__){
var seq__12371__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12371__$1)){
var c__5525__auto__ = cljs.core.chunk_first.call(null,seq__12371__$1);
var G__12812 = cljs.core.chunk_rest.call(null,seq__12371__$1);
var G__12813 = c__5525__auto__;
var G__12814 = cljs.core.count.call(null,c__5525__auto__);
var G__12815 = (0);
seq__12371 = G__12812;
chunk__12372 = G__12813;
count__12373 = G__12814;
i__12374 = G__12815;
continue;
} else {
var n = cljs.core.first.call(null,seq__12371__$1);
c3kit.wire.spec_helper.click_BANG_.call(null,["#index-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join(''));

var expected__11401__auto___12816 = new cljs.core.Keyword(null,"o","o",-1350007228);
var actual__11402__auto___12817 = new cljs.core.Keyword(null,"player","player",-97687400).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.screens.play_spec.state));
if(cljs.core._EQ_.call(null,expected__11401__auto___12816,actual__11402__auto___12817)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__11401__auto___12816;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11369__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11369__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__11402__auto___12817;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11369__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11369__auto__);
}
})()," (using =)"].join('')));
}

cljs.core.swap_BANG_.call(null,tic_tac_toe.screens.play_spec.state,cljs.core.assoc,new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"board","board",-1907017633),tic_tac_toe.screens.play_spec.board_4);


var G__12818 = cljs.core.next.call(null,seq__12371__$1);
var G__12819 = null;
var G__12820 = (0);
var G__12821 = (0);
seq__12371 = G__12818;
chunk__12372 = G__12819;
count__12373 = G__12820;
i__12374 = G__12821;
continue;
}
} else {
return null;
}
}
break;
}
});})(_STAR_parent_description_STAR__orig_val__12309_12764,_STAR_parent_description_STAR__temp_val__12310_12765,description__11264__auto____$1,_STAR_parent_description_STAR__orig_val__11825_12412,_STAR_parent_description_STAR__temp_val__11826_12413,description__11264__auto___12411))
,false),speclj.components.new_characteristic.call(null,"clicking button adds token to button HTML",((function (_STAR_parent_description_STAR__orig_val__12309_12764,_STAR_parent_description_STAR__temp_val__12310_12765,description__11264__auto____$1,_STAR_parent_description_STAR__orig_val__11825_12412,_STAR_parent_description_STAR__temp_val__11826_12413,description__11264__auto___12411){
return (function (){
var seq__12375 = cljs.core.seq.call(null,cljs.core.range.call(null,(16)));
var chunk__12376 = null;
var count__12377 = (0);
var i__12378 = (0);
while(true){
if((i__12378 < count__12377)){
var n = cljs.core._nth.call(null,chunk__12376,i__12378);
c3kit.wire.spec_helper.click_BANG_.call(null,["#index-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join(''));

var expected__11401__auto___12822 = "X";
var actual__11402__auto___12823 = c3kit.wire.spec_helper.text.call(null,["#index-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join(''));
if(cljs.core._EQ_.call(null,expected__11401__auto___12822,actual__11402__auto___12823)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__11401__auto___12822;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11369__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11369__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__11402__auto___12823;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11369__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11369__auto__);
}
})()," (using =)"].join('')));
}

cljs.core.reset_BANG_.call(null,tic_tac_toe.screens.play_spec.state,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"board","board",-1907017633),tic_tac_toe.screens.play_spec.board_4,new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"current-screen","current-screen",-1454713691),new cljs.core.Keyword(null,"play","play",-580418022),new cljs.core.Keyword(null,"mode","mode",654403691),(1)], null));


var G__12824 = seq__12375;
var G__12825 = chunk__12376;
var G__12826 = count__12377;
var G__12827 = (i__12378 + (1));
seq__12375 = G__12824;
chunk__12376 = G__12825;
count__12377 = G__12826;
i__12378 = G__12827;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__12375);
if(temp__5804__auto__){
var seq__12375__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12375__$1)){
var c__5525__auto__ = cljs.core.chunk_first.call(null,seq__12375__$1);
var G__12828 = cljs.core.chunk_rest.call(null,seq__12375__$1);
var G__12829 = c__5525__auto__;
var G__12830 = cljs.core.count.call(null,c__5525__auto__);
var G__12831 = (0);
seq__12375 = G__12828;
chunk__12376 = G__12829;
count__12377 = G__12830;
i__12378 = G__12831;
continue;
} else {
var n = cljs.core.first.call(null,seq__12375__$1);
c3kit.wire.spec_helper.click_BANG_.call(null,["#index-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join(''));

var expected__11401__auto___12832 = "X";
var actual__11402__auto___12833 = c3kit.wire.spec_helper.text.call(null,["#index-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join(''));
if(cljs.core._EQ_.call(null,expected__11401__auto___12832,actual__11402__auto___12833)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__11401__auto___12832;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11369__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11369__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__11402__auto___12833;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11369__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11369__auto__);
}
})()," (using =)"].join('')));
}

cljs.core.reset_BANG_.call(null,tic_tac_toe.screens.play_spec.state,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"board","board",-1907017633),tic_tac_toe.screens.play_spec.board_4,new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"current-screen","current-screen",-1454713691),new cljs.core.Keyword(null,"play","play",-580418022),new cljs.core.Keyword(null,"mode","mode",654403691),(1)], null));


var G__12834 = cljs.core.next.call(null,seq__12375__$1);
var G__12835 = null;
var G__12836 = (0);
var G__12837 = (0);
seq__12375 = G__12834;
chunk__12376 = G__12835;
count__12377 = G__12836;
i__12378 = G__12837;
continue;
}
} else {
return null;
}
}
break;
}
});})(_STAR_parent_description_STAR__orig_val__12309_12764,_STAR_parent_description_STAR__temp_val__12310_12765,description__11264__auto____$1,_STAR_parent_description_STAR__orig_val__11825_12412,_STAR_parent_description_STAR__temp_val__11826_12413,description__11264__auto___12411))
,false),speclj.components.new_characteristic.call(null,"clicking button disables button",((function (_STAR_parent_description_STAR__orig_val__12309_12764,_STAR_parent_description_STAR__temp_val__12310_12765,description__11264__auto____$1,_STAR_parent_description_STAR__orig_val__11825_12412,_STAR_parent_description_STAR__temp_val__11826_12413,description__11264__auto___12411){
return (function (){
var seq__12379 = cljs.core.seq.call(null,cljs.core.range.call(null,(16)));
var chunk__12380 = null;
var count__12381 = (0);
var i__12382 = (0);
while(true){
if((i__12382 < count__12381)){
var n = cljs.core._nth.call(null,chunk__12380,i__12382);
c3kit.wire.spec_helper.click_BANG_.call(null,["#index-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join(''));

var expected__11401__auto___12838 = true;
var actual__11402__auto___12839 = c3kit.wire.spec_helper.disabled_QMARK_.call(null,["#index-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join(''));
if(cljs.core._EQ_.call(null,expected__11401__auto___12838,actual__11402__auto___12839)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__11401__auto___12838;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11369__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11369__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__11402__auto___12839;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11369__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11369__auto__);
}
})()," (using =)"].join('')));
}

cljs.core.reset_BANG_.call(null,tic_tac_toe.screens.play_spec.state,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"board","board",-1907017633),tic_tac_toe.screens.play_spec.board_4,new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"current-screen","current-screen",-1454713691),new cljs.core.Keyword(null,"play","play",-580418022),new cljs.core.Keyword(null,"mode","mode",654403691),(1)], null));


var G__12840 = seq__12379;
var G__12841 = chunk__12380;
var G__12842 = count__12381;
var G__12843 = (i__12382 + (1));
seq__12379 = G__12840;
chunk__12380 = G__12841;
count__12381 = G__12842;
i__12382 = G__12843;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__12379);
if(temp__5804__auto__){
var seq__12379__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12379__$1)){
var c__5525__auto__ = cljs.core.chunk_first.call(null,seq__12379__$1);
var G__12844 = cljs.core.chunk_rest.call(null,seq__12379__$1);
var G__12845 = c__5525__auto__;
var G__12846 = cljs.core.count.call(null,c__5525__auto__);
var G__12847 = (0);
seq__12379 = G__12844;
chunk__12380 = G__12845;
count__12381 = G__12846;
i__12382 = G__12847;
continue;
} else {
var n = cljs.core.first.call(null,seq__12379__$1);
c3kit.wire.spec_helper.click_BANG_.call(null,["#index-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join(''));

var expected__11401__auto___12848 = true;
var actual__11402__auto___12849 = c3kit.wire.spec_helper.disabled_QMARK_.call(null,["#index-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join(''));
if(cljs.core._EQ_.call(null,expected__11401__auto___12848,actual__11402__auto___12849)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__11401__auto___12848;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11369__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11369__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__11402__auto___12849;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11369__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11369__auto__);
}
})()," (using =)"].join('')));
}

cljs.core.reset_BANG_.call(null,tic_tac_toe.screens.play_spec.state,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"board","board",-1907017633),tic_tac_toe.screens.play_spec.board_4,new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"current-screen","current-screen",-1454713691),new cljs.core.Keyword(null,"play","play",-580418022),new cljs.core.Keyword(null,"mode","mode",654403691),(1)], null));


var G__12850 = cljs.core.next.call(null,seq__12379__$1);
var G__12851 = null;
var G__12852 = (0);
var G__12853 = (0);
seq__12379 = G__12850;
chunk__12380 = G__12851;
count__12381 = G__12852;
i__12382 = G__12853;
continue;
}
} else {
return null;
}
}
break;
}
});})(_STAR_parent_description_STAR__orig_val__12309_12764,_STAR_parent_description_STAR__temp_val__12310_12765,description__11264__auto____$1,_STAR_parent_description_STAR__orig_val__11825_12412,_STAR_parent_description_STAR__temp_val__11826_12413,description__11264__auto___12411))
,false),speclj.components.new_characteristic.call(null,"clicking button triggers AI if mode 2 or 3",((function (_STAR_parent_description_STAR__orig_val__12309_12764,_STAR_parent_description_STAR__temp_val__12310_12765,description__11264__auto____$1,_STAR_parent_description_STAR__orig_val__11825_12412,_STAR_parent_description_STAR__temp_val__11826_12413,description__11264__auto___12411){
return (function (){
var seq__12383 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(3)], null));
var chunk__12396 = null;
var count__12397 = (0);
var i__12398 = (0);
while(true){
if((i__12398 < count__12397)){
var ai = cljs.core._nth.call(null,chunk__12396,i__12398);
var seq__12399_12854 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(3)], null));
var chunk__12404_12855 = null;
var count__12405_12856 = (0);
var i__12406_12857 = (0);
while(true){
if((i__12406_12857 < count__12405_12856)){
var mode_12858 = cljs.core._nth.call(null,chunk__12404_12855,i__12406_12857);
var seq__12407_12859 = cljs.core.seq.call(null,cljs.core.range.call(null,(16)));
var chunk__12408_12860 = null;
var count__12409_12861 = (0);
var i__12410_12862 = (0);
while(true){
if((i__12410_12862 < count__12409_12861)){
var n_12863 = cljs.core._nth.call(null,chunk__12408_12860,i__12410_12862);
cljs.core.swap_BANG_.call(null,tic_tac_toe.screens.play_spec.state,cljs.core.assoc,new cljs.core.Keyword(null,"mode","mode",654403691),mode_12858,new cljs.core.Keyword(null,"first-ai-level","first-ai-level",1004633644),ai,new cljs.core.Keyword(null,"player","player",-97687400),((cljs.core._EQ_.call(null,(2),mode_12858))?new cljs.core.Keyword(null,"x","x",2099068185):new cljs.core.Keyword(null,"o","o",-1350007228)),new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"gui","gui",604532813));

c3kit.wire.spec_helper.render.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tic_tac_toe.render_screen.render_screen,tic_tac_toe.screens.play_spec.state], null));

c3kit.wire.spec_helper.click_BANG_.call(null,["#index-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n_12863)].join(''));

var expected__11425__auto___12864 = cljs.core.assoc.call(null,tic_tac_toe.screens.play_spec.board_4,n_12863,new cljs.core.Keyword(null,"x","x",2099068185));
var actual__11426__auto___12865 = new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.screens.play_spec.state));
if(cljs.core._EQ_.call(null,expected__11425__auto___12864,actual__11426__auto___12865)){
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__11425__auto___12864;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11369__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11369__auto__);
}
})(),speclj.platform.endl,"not to =: ",(function (){var temp__5806__auto__ = actual__11426__auto___12865;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11369__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11369__auto__);
}
})()].join('')));
} else {
}

cljs.core.reset_BANG_.call(null,tic_tac_toe.screens.play_spec.state,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"board","board",-1907017633),tic_tac_toe.screens.play_spec.board_4,new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"current-screen","current-screen",-1454713691),new cljs.core.Keyword(null,"play","play",-580418022)], null));


var G__12866 = seq__12407_12859;
var G__12867 = chunk__12408_12860;
var G__12868 = count__12409_12861;
var G__12869 = (i__12410_12862 + (1));
seq__12407_12859 = G__12866;
chunk__12408_12860 = G__12867;
count__12409_12861 = G__12868;
i__12410_12862 = G__12869;
continue;
} else {
var temp__5804__auto___12870 = cljs.core.seq.call(null,seq__12407_12859);
if(temp__5804__auto___12870){
var seq__12407_12871__$1 = temp__5804__auto___12870;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12407_12871__$1)){
var c__5525__auto___12872 = cljs.core.chunk_first.call(null,seq__12407_12871__$1);
var G__12873 = cljs.core.chunk_rest.call(null,seq__12407_12871__$1);
var G__12874 = c__5525__auto___12872;
var G__12875 = cljs.core.count.call(null,c__5525__auto___12872);
var G__12876 = (0);
seq__12407_12859 = G__12873;
chunk__12408_12860 = G__12874;
count__12409_12861 = G__12875;
i__12410_12862 = G__12876;
continue;
} else {
var n_12877 = cljs.core.first.call(null,seq__12407_12871__$1);
cljs.core.swap_BANG_.call(null,tic_tac_toe.screens.play_spec.state,cljs.core.assoc,new cljs.core.Keyword(null,"mode","mode",654403691),mode_12858,new cljs.core.Keyword(null,"first-ai-level","first-ai-level",1004633644),ai,new cljs.core.Keyword(null,"player","player",-97687400),((cljs.core._EQ_.call(null,(2),mode_12858))?new cljs.core.Keyword(null,"x","x",2099068185):new cljs.core.Keyword(null,"o","o",-1350007228)),new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"gui","gui",604532813));

c3kit.wire.spec_helper.render.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tic_tac_toe.render_screen.render_screen,tic_tac_toe.screens.play_spec.state], null));

c3kit.wire.spec_helper.click_BANG_.call(null,["#index-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n_12877)].join(''));

var expected__11425__auto___12878 = cljs.core.assoc.call(null,tic_tac_toe.screens.play_spec.board_4,n_12877,new cljs.core.Keyword(null,"x","x",2099068185));
var actual__11426__auto___12879 = new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.screens.play_spec.state));
if(cljs.core._EQ_.call(null,expected__11425__auto___12878,actual__11426__auto___12879)){
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__11425__auto___12878;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11369__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11369__auto__);
}
})(),speclj.platform.endl,"not to =: ",(function (){var temp__5806__auto__ = actual__11426__auto___12879;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11369__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11369__auto__);
}
})()].join('')));
} else {
}

cljs.core.reset_BANG_.call(null,tic_tac_toe.screens.play_spec.state,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"board","board",-1907017633),tic_tac_toe.screens.play_spec.board_4,new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"current-screen","current-screen",-1454713691),new cljs.core.Keyword(null,"play","play",-580418022)], null));


var G__12880 = cljs.core.next.call(null,seq__12407_12871__$1);
var G__12881 = null;
var G__12882 = (0);
var G__12883 = (0);
seq__12407_12859 = G__12880;
chunk__12408_12860 = G__12881;
count__12409_12861 = G__12882;
i__12410_12862 = G__12883;
continue;
}
} else {
}
}
break;
}

var G__12884 = seq__12399_12854;
var G__12885 = chunk__12404_12855;
var G__12886 = count__12405_12856;
var G__12887 = (i__12406_12857 + (1));
seq__12399_12854 = G__12884;
chunk__12404_12855 = G__12885;
count__12405_12856 = G__12886;
i__12406_12857 = G__12887;
continue;
} else {
var temp__5804__auto___12888 = cljs.core.seq.call(null,seq__12399_12854);
if(temp__5804__auto___12888){
var seq__12399_12889__$1 = temp__5804__auto___12888;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12399_12889__$1)){
var c__5525__auto___12890 = cljs.core.chunk_first.call(null,seq__12399_12889__$1);
var G__12891 = cljs.core.chunk_rest.call(null,seq__12399_12889__$1);
var G__12892 = c__5525__auto___12890;
var G__12893 = cljs.core.count.call(null,c__5525__auto___12890);
var G__12894 = (0);
seq__12399_12854 = G__12891;
chunk__12404_12855 = G__12892;
count__12405_12856 = G__12893;
i__12406_12857 = G__12894;
continue;
} else {
var mode_12895 = cljs.core.first.call(null,seq__12399_12889__$1);
var seq__12400_12896 = cljs.core.seq.call(null,cljs.core.range.call(null,(16)));
var chunk__12401_12897 = null;
var count__12402_12898 = (0);
var i__12403_12899 = (0);
while(true){
if((i__12403_12899 < count__12402_12898)){
var n_12900 = cljs.core._nth.call(null,chunk__12401_12897,i__12403_12899);
cljs.core.swap_BANG_.call(null,tic_tac_toe.screens.play_spec.state,cljs.core.assoc,new cljs.core.Keyword(null,"mode","mode",654403691),mode_12895,new cljs.core.Keyword(null,"first-ai-level","first-ai-level",1004633644),ai,new cljs.core.Keyword(null,"player","player",-97687400),((cljs.core._EQ_.call(null,(2),mode_12895))?new cljs.core.Keyword(null,"x","x",2099068185):new cljs.core.Keyword(null,"o","o",-1350007228)),new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"gui","gui",604532813));

c3kit.wire.spec_helper.render.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tic_tac_toe.render_screen.render_screen,tic_tac_toe.screens.play_spec.state], null));

c3kit.wire.spec_helper.click_BANG_.call(null,["#index-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n_12900)].join(''));

var expected__11425__auto___12901 = cljs.core.assoc.call(null,tic_tac_toe.screens.play_spec.board_4,n_12900,new cljs.core.Keyword(null,"x","x",2099068185));
var actual__11426__auto___12902 = new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.screens.play_spec.state));
if(cljs.core._EQ_.call(null,expected__11425__auto___12901,actual__11426__auto___12902)){
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__11425__auto___12901;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11369__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11369__auto__);
}
})(),speclj.platform.endl,"not to =: ",(function (){var temp__5806__auto__ = actual__11426__auto___12902;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11369__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11369__auto__);
}
})()].join('')));
} else {
}

cljs.core.reset_BANG_.call(null,tic_tac_toe.screens.play_spec.state,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"board","board",-1907017633),tic_tac_toe.screens.play_spec.board_4,new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"current-screen","current-screen",-1454713691),new cljs.core.Keyword(null,"play","play",-580418022)], null));


var G__12903 = seq__12400_12896;
var G__12904 = chunk__12401_12897;
var G__12905 = count__12402_12898;
var G__12906 = (i__12403_12899 + (1));
seq__12400_12896 = G__12903;
chunk__12401_12897 = G__12904;
count__12402_12898 = G__12905;
i__12403_12899 = G__12906;
continue;
} else {
var temp__5804__auto___12907__$1 = cljs.core.seq.call(null,seq__12400_12896);
if(temp__5804__auto___12907__$1){
var seq__12400_12908__$1 = temp__5804__auto___12907__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12400_12908__$1)){
var c__5525__auto___12909 = cljs.core.chunk_first.call(null,seq__12400_12908__$1);
var G__12910 = cljs.core.chunk_rest.call(null,seq__12400_12908__$1);
var G__12911 = c__5525__auto___12909;
var G__12912 = cljs.core.count.call(null,c__5525__auto___12909);
var G__12913 = (0);
seq__12400_12896 = G__12910;
chunk__12401_12897 = G__12911;
count__12402_12898 = G__12912;
i__12403_12899 = G__12913;
continue;
} else {
var n_12914 = cljs.core.first.call(null,seq__12400_12908__$1);
cljs.core.swap_BANG_.call(null,tic_tac_toe.screens.play_spec.state,cljs.core.assoc,new cljs.core.Keyword(null,"mode","mode",654403691),mode_12895,new cljs.core.Keyword(null,"first-ai-level","first-ai-level",1004633644),ai,new cljs.core.Keyword(null,"player","player",-97687400),((cljs.core._EQ_.call(null,(2),mode_12895))?new cljs.core.Keyword(null,"x","x",2099068185):new cljs.core.Keyword(null,"o","o",-1350007228)),new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"gui","gui",604532813));

c3kit.wire.spec_helper.render.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tic_tac_toe.render_screen.render_screen,tic_tac_toe.screens.play_spec.state], null));

c3kit.wire.spec_helper.click_BANG_.call(null,["#index-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n_12914)].join(''));

var expected__11425__auto___12915 = cljs.core.assoc.call(null,tic_tac_toe.screens.play_spec.board_4,n_12914,new cljs.core.Keyword(null,"x","x",2099068185));
var actual__11426__auto___12916 = new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.screens.play_spec.state));
if(cljs.core._EQ_.call(null,expected__11425__auto___12915,actual__11426__auto___12916)){
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__11425__auto___12915;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11369__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11369__auto__);
}
})(),speclj.platform.endl,"not to =: ",(function (){var temp__5806__auto__ = actual__11426__auto___12916;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11369__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11369__auto__);
}
})()].join('')));
} else {
}

cljs.core.reset_BANG_.call(null,tic_tac_toe.screens.play_spec.state,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"board","board",-1907017633),tic_tac_toe.screens.play_spec.board_4,new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"current-screen","current-screen",-1454713691),new cljs.core.Keyword(null,"play","play",-580418022)], null));


var G__12917 = cljs.core.next.call(null,seq__12400_12908__$1);
var G__12918 = null;
var G__12919 = (0);
var G__12920 = (0);
seq__12400_12896 = G__12917;
chunk__12401_12897 = G__12918;
count__12402_12898 = G__12919;
i__12403_12899 = G__12920;
continue;
}
} else {
}
}
break;
}

var G__12921 = cljs.core.next.call(null,seq__12399_12889__$1);
var G__12922 = null;
var G__12923 = (0);
var G__12924 = (0);
seq__12399_12854 = G__12921;
chunk__12404_12855 = G__12922;
count__12405_12856 = G__12923;
i__12406_12857 = G__12924;
continue;
}
} else {
}
}
break;
}

var G__12925 = seq__12383;
var G__12926 = chunk__12396;
var G__12927 = count__12397;
var G__12928 = (i__12398 + (1));
seq__12383 = G__12925;
chunk__12396 = G__12926;
count__12397 = G__12927;
i__12398 = G__12928;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__12383);
if(temp__5804__auto__){
var seq__12383__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12383__$1)){
var c__5525__auto__ = cljs.core.chunk_first.call(null,seq__12383__$1);
var G__12929 = cljs.core.chunk_rest.call(null,seq__12383__$1);
var G__12930 = c__5525__auto__;
var G__12931 = cljs.core.count.call(null,c__5525__auto__);
var G__12932 = (0);
seq__12383 = G__12929;
chunk__12396 = G__12930;
count__12397 = G__12931;
i__12398 = G__12932;
continue;
} else {
var ai = cljs.core.first.call(null,seq__12383__$1);
var seq__12384_12933 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(3)], null));
var chunk__12389_12934 = null;
var count__12390_12935 = (0);
var i__12391_12936 = (0);
while(true){
if((i__12391_12936 < count__12390_12935)){
var mode_12937 = cljs.core._nth.call(null,chunk__12389_12934,i__12391_12936);
var seq__12392_12938 = cljs.core.seq.call(null,cljs.core.range.call(null,(16)));
var chunk__12393_12939 = null;
var count__12394_12940 = (0);
var i__12395_12941 = (0);
while(true){
if((i__12395_12941 < count__12394_12940)){
var n_12942 = cljs.core._nth.call(null,chunk__12393_12939,i__12395_12941);
cljs.core.swap_BANG_.call(null,tic_tac_toe.screens.play_spec.state,cljs.core.assoc,new cljs.core.Keyword(null,"mode","mode",654403691),mode_12937,new cljs.core.Keyword(null,"first-ai-level","first-ai-level",1004633644),ai,new cljs.core.Keyword(null,"player","player",-97687400),((cljs.core._EQ_.call(null,(2),mode_12937))?new cljs.core.Keyword(null,"x","x",2099068185):new cljs.core.Keyword(null,"o","o",-1350007228)),new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"gui","gui",604532813));

c3kit.wire.spec_helper.render.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tic_tac_toe.render_screen.render_screen,tic_tac_toe.screens.play_spec.state], null));

c3kit.wire.spec_helper.click_BANG_.call(null,["#index-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n_12942)].join(''));

var expected__11425__auto___12943 = cljs.core.assoc.call(null,tic_tac_toe.screens.play_spec.board_4,n_12942,new cljs.core.Keyword(null,"x","x",2099068185));
var actual__11426__auto___12944 = new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.screens.play_spec.state));
if(cljs.core._EQ_.call(null,expected__11425__auto___12943,actual__11426__auto___12944)){
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__11425__auto___12943;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11369__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11369__auto__);
}
})(),speclj.platform.endl,"not to =: ",(function (){var temp__5806__auto__ = actual__11426__auto___12944;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11369__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11369__auto__);
}
})()].join('')));
} else {
}

cljs.core.reset_BANG_.call(null,tic_tac_toe.screens.play_spec.state,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"board","board",-1907017633),tic_tac_toe.screens.play_spec.board_4,new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"current-screen","current-screen",-1454713691),new cljs.core.Keyword(null,"play","play",-580418022)], null));


var G__12945 = seq__12392_12938;
var G__12946 = chunk__12393_12939;
var G__12947 = count__12394_12940;
var G__12948 = (i__12395_12941 + (1));
seq__12392_12938 = G__12945;
chunk__12393_12939 = G__12946;
count__12394_12940 = G__12947;
i__12395_12941 = G__12948;
continue;
} else {
var temp__5804__auto___12949__$1 = cljs.core.seq.call(null,seq__12392_12938);
if(temp__5804__auto___12949__$1){
var seq__12392_12950__$1 = temp__5804__auto___12949__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12392_12950__$1)){
var c__5525__auto___12951 = cljs.core.chunk_first.call(null,seq__12392_12950__$1);
var G__12952 = cljs.core.chunk_rest.call(null,seq__12392_12950__$1);
var G__12953 = c__5525__auto___12951;
var G__12954 = cljs.core.count.call(null,c__5525__auto___12951);
var G__12955 = (0);
seq__12392_12938 = G__12952;
chunk__12393_12939 = G__12953;
count__12394_12940 = G__12954;
i__12395_12941 = G__12955;
continue;
} else {
var n_12956 = cljs.core.first.call(null,seq__12392_12950__$1);
cljs.core.swap_BANG_.call(null,tic_tac_toe.screens.play_spec.state,cljs.core.assoc,new cljs.core.Keyword(null,"mode","mode",654403691),mode_12937,new cljs.core.Keyword(null,"first-ai-level","first-ai-level",1004633644),ai,new cljs.core.Keyword(null,"player","player",-97687400),((cljs.core._EQ_.call(null,(2),mode_12937))?new cljs.core.Keyword(null,"x","x",2099068185):new cljs.core.Keyword(null,"o","o",-1350007228)),new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"gui","gui",604532813));

c3kit.wire.spec_helper.render.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tic_tac_toe.render_screen.render_screen,tic_tac_toe.screens.play_spec.state], null));

c3kit.wire.spec_helper.click_BANG_.call(null,["#index-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n_12956)].join(''));

var expected__11425__auto___12957 = cljs.core.assoc.call(null,tic_tac_toe.screens.play_spec.board_4,n_12956,new cljs.core.Keyword(null,"x","x",2099068185));
var actual__11426__auto___12958 = new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.screens.play_spec.state));
if(cljs.core._EQ_.call(null,expected__11425__auto___12957,actual__11426__auto___12958)){
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__11425__auto___12957;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11369__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11369__auto__);
}
})(),speclj.platform.endl,"not to =: ",(function (){var temp__5806__auto__ = actual__11426__auto___12958;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11369__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11369__auto__);
}
})()].join('')));
} else {
}

cljs.core.reset_BANG_.call(null,tic_tac_toe.screens.play_spec.state,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"board","board",-1907017633),tic_tac_toe.screens.play_spec.board_4,new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"current-screen","current-screen",-1454713691),new cljs.core.Keyword(null,"play","play",-580418022)], null));


var G__12959 = cljs.core.next.call(null,seq__12392_12950__$1);
var G__12960 = null;
var G__12961 = (0);
var G__12962 = (0);
seq__12392_12938 = G__12959;
chunk__12393_12939 = G__12960;
count__12394_12940 = G__12961;
i__12395_12941 = G__12962;
continue;
}
} else {
}
}
break;
}

var G__12963 = seq__12384_12933;
var G__12964 = chunk__12389_12934;
var G__12965 = count__12390_12935;
var G__12966 = (i__12391_12936 + (1));
seq__12384_12933 = G__12963;
chunk__12389_12934 = G__12964;
count__12390_12935 = G__12965;
i__12391_12936 = G__12966;
continue;
} else {
var temp__5804__auto___12967__$1 = cljs.core.seq.call(null,seq__12384_12933);
if(temp__5804__auto___12967__$1){
var seq__12384_12968__$1 = temp__5804__auto___12967__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12384_12968__$1)){
var c__5525__auto___12969 = cljs.core.chunk_first.call(null,seq__12384_12968__$1);
var G__12970 = cljs.core.chunk_rest.call(null,seq__12384_12968__$1);
var G__12971 = c__5525__auto___12969;
var G__12972 = cljs.core.count.call(null,c__5525__auto___12969);
var G__12973 = (0);
seq__12384_12933 = G__12970;
chunk__12389_12934 = G__12971;
count__12390_12935 = G__12972;
i__12391_12936 = G__12973;
continue;
} else {
var mode_12974 = cljs.core.first.call(null,seq__12384_12968__$1);
var seq__12385_12975 = cljs.core.seq.call(null,cljs.core.range.call(null,(16)));
var chunk__12386_12976 = null;
var count__12387_12977 = (0);
var i__12388_12978 = (0);
while(true){
if((i__12388_12978 < count__12387_12977)){
var n_12979 = cljs.core._nth.call(null,chunk__12386_12976,i__12388_12978);
cljs.core.swap_BANG_.call(null,tic_tac_toe.screens.play_spec.state,cljs.core.assoc,new cljs.core.Keyword(null,"mode","mode",654403691),mode_12974,new cljs.core.Keyword(null,"first-ai-level","first-ai-level",1004633644),ai,new cljs.core.Keyword(null,"player","player",-97687400),((cljs.core._EQ_.call(null,(2),mode_12974))?new cljs.core.Keyword(null,"x","x",2099068185):new cljs.core.Keyword(null,"o","o",-1350007228)),new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"gui","gui",604532813));

c3kit.wire.spec_helper.render.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tic_tac_toe.render_screen.render_screen,tic_tac_toe.screens.play_spec.state], null));

c3kit.wire.spec_helper.click_BANG_.call(null,["#index-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n_12979)].join(''));

var expected__11425__auto___12980 = cljs.core.assoc.call(null,tic_tac_toe.screens.play_spec.board_4,n_12979,new cljs.core.Keyword(null,"x","x",2099068185));
var actual__11426__auto___12981 = new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.screens.play_spec.state));
if(cljs.core._EQ_.call(null,expected__11425__auto___12980,actual__11426__auto___12981)){
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__11425__auto___12980;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11369__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11369__auto__);
}
})(),speclj.platform.endl,"not to =: ",(function (){var temp__5806__auto__ = actual__11426__auto___12981;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11369__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11369__auto__);
}
})()].join('')));
} else {
}

cljs.core.reset_BANG_.call(null,tic_tac_toe.screens.play_spec.state,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"board","board",-1907017633),tic_tac_toe.screens.play_spec.board_4,new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"current-screen","current-screen",-1454713691),new cljs.core.Keyword(null,"play","play",-580418022)], null));


var G__12982 = seq__12385_12975;
var G__12983 = chunk__12386_12976;
var G__12984 = count__12387_12977;
var G__12985 = (i__12388_12978 + (1));
seq__12385_12975 = G__12982;
chunk__12386_12976 = G__12983;
count__12387_12977 = G__12984;
i__12388_12978 = G__12985;
continue;
} else {
var temp__5804__auto___12986__$2 = cljs.core.seq.call(null,seq__12385_12975);
if(temp__5804__auto___12986__$2){
var seq__12385_12987__$1 = temp__5804__auto___12986__$2;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12385_12987__$1)){
var c__5525__auto___12988 = cljs.core.chunk_first.call(null,seq__12385_12987__$1);
var G__12989 = cljs.core.chunk_rest.call(null,seq__12385_12987__$1);
var G__12990 = c__5525__auto___12988;
var G__12991 = cljs.core.count.call(null,c__5525__auto___12988);
var G__12992 = (0);
seq__12385_12975 = G__12989;
chunk__12386_12976 = G__12990;
count__12387_12977 = G__12991;
i__12388_12978 = G__12992;
continue;
} else {
var n_12993 = cljs.core.first.call(null,seq__12385_12987__$1);
cljs.core.swap_BANG_.call(null,tic_tac_toe.screens.play_spec.state,cljs.core.assoc,new cljs.core.Keyword(null,"mode","mode",654403691),mode_12974,new cljs.core.Keyword(null,"first-ai-level","first-ai-level",1004633644),ai,new cljs.core.Keyword(null,"player","player",-97687400),((cljs.core._EQ_.call(null,(2),mode_12974))?new cljs.core.Keyword(null,"x","x",2099068185):new cljs.core.Keyword(null,"o","o",-1350007228)),new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"gui","gui",604532813));

c3kit.wire.spec_helper.render.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tic_tac_toe.render_screen.render_screen,tic_tac_toe.screens.play_spec.state], null));

c3kit.wire.spec_helper.click_BANG_.call(null,["#index-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n_12993)].join(''));

var expected__11425__auto___12994 = cljs.core.assoc.call(null,tic_tac_toe.screens.play_spec.board_4,n_12993,new cljs.core.Keyword(null,"x","x",2099068185));
var actual__11426__auto___12995 = new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.screens.play_spec.state));
if(cljs.core._EQ_.call(null,expected__11425__auto___12994,actual__11426__auto___12995)){
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__11425__auto___12994;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11369__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11369__auto__);
}
})(),speclj.platform.endl,"not to =: ",(function (){var temp__5806__auto__ = actual__11426__auto___12995;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11369__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11369__auto__);
}
})()].join('')));
} else {
}

cljs.core.reset_BANG_.call(null,tic_tac_toe.screens.play_spec.state,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"board","board",-1907017633),tic_tac_toe.screens.play_spec.board_4,new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"current-screen","current-screen",-1454713691),new cljs.core.Keyword(null,"play","play",-580418022)], null));


var G__12996 = cljs.core.next.call(null,seq__12385_12987__$1);
var G__12997 = null;
var G__12998 = (0);
var G__12999 = (0);
seq__12385_12975 = G__12996;
chunk__12386_12976 = G__12997;
count__12387_12977 = G__12998;
i__12388_12978 = G__12999;
continue;
}
} else {
}
}
break;
}

var G__13000 = cljs.core.next.call(null,seq__12384_12968__$1);
var G__13001 = null;
var G__13002 = (0);
var G__13003 = (0);
seq__12384_12933 = G__13000;
chunk__12389_12934 = G__13001;
count__12390_12935 = G__13002;
i__12391_12936 = G__13003;
continue;
}
} else {
}
}
break;
}

var G__13004 = cljs.core.next.call(null,seq__12383__$1);
var G__13005 = null;
var G__13006 = (0);
var G__13007 = (0);
seq__12383 = G__13004;
chunk__12396 = G__13005;
count__12397 = G__13006;
i__12398 = G__13007;
continue;
}
} else {
return null;
}
}
break;
}
});})(_STAR_parent_description_STAR__orig_val__12309_12764,_STAR_parent_description_STAR__temp_val__12310_12765,description__11264__auto____$1,_STAR_parent_description_STAR__orig_val__11825_12412,_STAR_parent_description_STAR__temp_val__11826_12413,description__11264__auto___12411))
,false),speclj.components.new_characteristic.call(null,"AI is not triggered if game over",((function (_STAR_parent_description_STAR__orig_val__12309_12764,_STAR_parent_description_STAR__temp_val__12310_12765,description__11264__auto____$1,_STAR_parent_description_STAR__orig_val__11825_12412,_STAR_parent_description_STAR__temp_val__11826_12413,description__11264__auto___12411){
return (function (){
cljs.core.swap_BANG_.call(null,tic_tac_toe.screens.play_spec.state,cljs.core.assoc,new cljs.core.Keyword(null,"board","board",-1907017633),new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"x","x",2099068185),(3),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"o","o",-1350007228),new cljs.core.Keyword(null,"o","o",-1350007228),new cljs.core.Keyword(null,"o","o",-1350007228),(8),(9),(10),(11),(12),(13),(14),(15),(16)], null),new cljs.core.Keyword(null,"mode","mode",654403691),(2),new cljs.core.Keyword(null,"first-ai-level","first-ai-level",1004633644),(3));

c3kit.wire.spec_helper.click_BANG_.call(null,"#index-2");

var expected__11401__auto__ = new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"o","o",-1350007228),new cljs.core.Keyword(null,"o","o",-1350007228),new cljs.core.Keyword(null,"o","o",-1350007228),(8),(9),(10),(11),(12),(13),(14),(15),(16)], null);
var actual__11402__auto__ = new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.screens.play_spec.state));
if(cljs.core._EQ_.call(null,expected__11401__auto__,actual__11402__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__11401__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11369__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11369__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__11402__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11369__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11369__auto__);
}
})()," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__12309_12764,_STAR_parent_description_STAR__temp_val__12310_12765,description__11264__auto____$1,_STAR_parent_description_STAR__orig_val__11825_12412,_STAR_parent_description_STAR__temp_val__11826_12413,description__11264__auto___12411))
,false)],null)));
var chunk__12312_12767 = null;
var count__12313_12768 = (0);
var i__12314_12769 = (0);
while(true){
if((i__12314_12769 < count__12313_12768)){
var component__11265__auto___13008 = cljs.core._nth.call(null,chunk__12312_12767,i__12314_12769);
speclj.components.install.call(null,component__11265__auto___13008,description__11264__auto____$1);


var G__13009 = seq__12311_12766;
var G__13010 = chunk__12312_12767;
var G__13011 = count__12313_12768;
var G__13012 = (i__12314_12769 + (1));
seq__12311_12766 = G__13009;
chunk__12312_12767 = G__13010;
count__12313_12768 = G__13011;
i__12314_12769 = G__13012;
continue;
} else {
var temp__5804__auto___13013 = cljs.core.seq.call(null,seq__12311_12766);
if(temp__5804__auto___13013){
var seq__12311_13014__$1 = temp__5804__auto___13013;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12311_13014__$1)){
var c__5525__auto___13015 = cljs.core.chunk_first.call(null,seq__12311_13014__$1);
var G__13016 = cljs.core.chunk_rest.call(null,seq__12311_13014__$1);
var G__13017 = c__5525__auto___13015;
var G__13018 = cljs.core.count.call(null,c__5525__auto___13015);
var G__13019 = (0);
seq__12311_12766 = G__13016;
chunk__12312_12767 = G__13017;
count__12313_12768 = G__13018;
i__12314_12769 = G__13019;
continue;
} else {
var component__11265__auto___13020 = cljs.core.first.call(null,seq__12311_13014__$1);
speclj.components.install.call(null,component__11265__auto___13020,description__11264__auto____$1);


var G__13021 = cljs.core.next.call(null,seq__12311_13014__$1);
var G__13022 = null;
var G__13023 = (0);
var G__13024 = (0);
seq__12311_12766 = G__13021;
chunk__12312_12767 = G__13022;
count__12313_12768 = G__13023;
i__12314_12769 = G__13024;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__12309_12764);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__11264__auto____$1);
}

return description__11264__auto____$1;
})()],null)));
var chunk__11830_12415 = null;
var count__11833_12416 = (0);
var i__11836_12417 = (0);
while(true){
if((i__11836_12417 < count__11833_12416)){
var component__11265__auto___13025 = cljs.core._nth.call(null,chunk__11830_12415,i__11836_12417);
speclj.components.install.call(null,component__11265__auto___13025,description__11264__auto___12411);


var G__13026 = seq__11828_12414;
var G__13027 = chunk__11830_12415;
var G__13028 = count__11833_12416;
var G__13029 = (i__11836_12417 + (1));
seq__11828_12414 = G__13026;
chunk__11830_12415 = G__13027;
count__11833_12416 = G__13028;
i__11836_12417 = G__13029;
continue;
} else {
var temp__5804__auto___13030 = cljs.core.seq.call(null,seq__11828_12414);
if(temp__5804__auto___13030){
var seq__11828_13031__$1 = temp__5804__auto___13030;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11828_13031__$1)){
var c__5525__auto___13032 = cljs.core.chunk_first.call(null,seq__11828_13031__$1);
var G__13033 = cljs.core.chunk_rest.call(null,seq__11828_13031__$1);
var G__13034 = c__5525__auto___13032;
var G__13035 = cljs.core.count.call(null,c__5525__auto___13032);
var G__13036 = (0);
seq__11828_12414 = G__13033;
chunk__11830_12415 = G__13034;
count__11833_12416 = G__13035;
i__11836_12417 = G__13036;
continue;
} else {
var component__11265__auto___13037 = cljs.core.first.call(null,seq__11828_13031__$1);
speclj.components.install.call(null,component__11265__auto___13037,description__11264__auto___12411);


var G__13038 = cljs.core.next.call(null,seq__11828_13031__$1);
var G__13039 = null;
var G__13040 = (0);
var G__13041 = (0);
seq__11828_12414 = G__13038;
chunk__11830_12415 = G__13039;
count__11833_12416 = G__13040;
i__11836_12417 = G__13041;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__11825_12412);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__11264__auto___12411);
}


//# sourceMappingURL=play_spec.js.map
