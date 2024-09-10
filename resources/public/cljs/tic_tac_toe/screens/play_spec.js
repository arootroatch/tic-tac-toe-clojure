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
var description__11279__auto___12194 = speclj.components.new_description.call(null,"play screen",false,"tic-tac-toe.screens.play-spec");
var _STAR_parent_description_STAR__orig_val__11836_12195 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__11837_12196 = description__11279__auto___12194;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__11837_12196);

try{var seq__11838_12197 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,4,(5),cljs.core.PersistentVector.EMPTY_NODE,[c3kit.wire.spec_helper.with_root_dom.call(null),(function (){var description__11279__auto____$1 = speclj.components.new_description.call(null,"play heading",false,"tic-tac-toe.screens.play-spec");
var _STAR_parent_description_STAR__orig_val__12032_12201 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__12033_12202 = description__11279__auto____$1;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__12033_12202);

try{var seq__12034_12203 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_characteristic.call(null,"prompts player x for move",((function (_STAR_parent_description_STAR__orig_val__12032_12201,_STAR_parent_description_STAR__temp_val__12033_12202,description__11279__auto____$1,_STAR_parent_description_STAR__orig_val__11836_12195,_STAR_parent_description_STAR__temp_val__11837_12196,description__11279__auto___12194){
return (function (){
cljs.core.swap_BANG_.call(null,tic_tac_toe.screens.play_spec.state,cljs.core.assoc,new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"x","x",2099068185));

c3kit.wire.spec_helper.render.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tic_tac_toe.render_screen.render_screen,tic_tac_toe.screens.play_spec.state], null));

var expected__11416__auto__ = "X's turn!";
var actual__11417__auto__ = c3kit.wire.spec_helper.text.call(null,"#play-heading");
if(cljs.core._EQ_.call(null,expected__11416__auto__,actual__11417__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__11416__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11384__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11384__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__11417__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11384__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11384__auto__);
}
})()," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__12032_12201,_STAR_parent_description_STAR__temp_val__12033_12202,description__11279__auto____$1,_STAR_parent_description_STAR__orig_val__11836_12195,_STAR_parent_description_STAR__temp_val__11837_12196,description__11279__auto___12194))
,false),speclj.components.new_characteristic.call(null,"prompts player o for move",((function (_STAR_parent_description_STAR__orig_val__12032_12201,_STAR_parent_description_STAR__temp_val__12033_12202,description__11279__auto____$1,_STAR_parent_description_STAR__orig_val__11836_12195,_STAR_parent_description_STAR__temp_val__11837_12196,description__11279__auto___12194){
return (function (){
cljs.core.swap_BANG_.call(null,tic_tac_toe.screens.play_spec.state,cljs.core.assoc,new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"o","o",-1350007228));

c3kit.wire.spec_helper.render.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tic_tac_toe.render_screen.render_screen,tic_tac_toe.screens.play_spec.state], null));

var expected__11416__auto__ = "O's turn!";
var actual__11417__auto__ = c3kit.wire.spec_helper.text.call(null,"#play-heading");
if(cljs.core._EQ_.call(null,expected__11416__auto__,actual__11417__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__11416__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11384__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11384__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__11417__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11384__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11384__auto__);
}
})()," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__12032_12201,_STAR_parent_description_STAR__temp_val__12033_12202,description__11279__auto____$1,_STAR_parent_description_STAR__orig_val__11836_12195,_STAR_parent_description_STAR__temp_val__11837_12196,description__11279__auto___12194))
,false),speclj.components.new_characteristic.call(null,"displays game state if game over",((function (_STAR_parent_description_STAR__orig_val__12032_12201,_STAR_parent_description_STAR__temp_val__12033_12202,description__11279__auto____$1,_STAR_parent_description_STAR__orig_val__11836_12195,_STAR_parent_description_STAR__temp_val__11837_12196,description__11279__auto___12194){
return (function (){
cljs.core.swap_BANG_.call(null,tic_tac_toe.screens.play_spec.state,cljs.core.assoc,new cljs.core.Keyword(null,"game-state","game-state",935682735),"X wins!");

c3kit.wire.spec_helper.render.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tic_tac_toe.render_screen.render_screen,tic_tac_toe.screens.play_spec.state], null));

var expected__11416__auto__ = "X wins!";
var actual__11417__auto__ = c3kit.wire.spec_helper.text.call(null,"#play-heading");
if(cljs.core._EQ_.call(null,expected__11416__auto__,actual__11417__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__11416__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11384__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11384__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__11417__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11384__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11384__auto__);
}
})()," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__12032_12201,_STAR_parent_description_STAR__temp_val__12033_12202,description__11279__auto____$1,_STAR_parent_description_STAR__orig_val__11836_12195,_STAR_parent_description_STAR__temp_val__11837_12196,description__11279__auto___12194))
,false)],null)));
var chunk__12035_12204 = null;
var count__12036_12205 = (0);
var i__12037_12206 = (0);
while(true){
if((i__12037_12206 < count__12036_12205)){
var component__11280__auto___12207 = cljs.core._nth.call(null,chunk__12035_12204,i__12037_12206);
speclj.components.install.call(null,component__11280__auto___12207,description__11279__auto____$1);


var G__12208 = seq__12034_12203;
var G__12209 = chunk__12035_12204;
var G__12210 = count__12036_12205;
var G__12211 = (i__12037_12206 + (1));
seq__12034_12203 = G__12208;
chunk__12035_12204 = G__12209;
count__12036_12205 = G__12210;
i__12037_12206 = G__12211;
continue;
} else {
var temp__5804__auto___12212 = cljs.core.seq.call(null,seq__12034_12203);
if(temp__5804__auto___12212){
var seq__12034_12213__$1 = temp__5804__auto___12212;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12034_12213__$1)){
var c__5525__auto___12214 = cljs.core.chunk_first.call(null,seq__12034_12213__$1);
var G__12215 = cljs.core.chunk_rest.call(null,seq__12034_12213__$1);
var G__12216 = c__5525__auto___12214;
var G__12217 = cljs.core.count.call(null,c__5525__auto___12214);
var G__12218 = (0);
seq__12034_12203 = G__12215;
chunk__12035_12204 = G__12216;
count__12036_12205 = G__12217;
i__12037_12206 = G__12218;
continue;
} else {
var component__11280__auto___12219 = cljs.core.first.call(null,seq__12034_12213__$1);
speclj.components.install.call(null,component__11280__auto___12219,description__11279__auto____$1);


var G__12220 = cljs.core.next.call(null,seq__12034_12213__$1);
var G__12221 = null;
var G__12222 = (0);
var G__12223 = (0);
seq__12034_12203 = G__12220;
chunk__12035_12204 = G__12221;
count__12036_12205 = G__12222;
i__12037_12206 = G__12223;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__12032_12201);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__11279__auto____$1);
}

return description__11279__auto____$1;
})(),(function (){var description__11279__auto____$1 = speclj.components.new_description.call(null,"3x3",false,"tic-tac-toe.screens.play-spec");
var _STAR_parent_description_STAR__orig_val__12038_12224 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__12039_12225 = description__11279__auto____$1;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__12039_12225);

try{var seq__12040_12226 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,10,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_before.call(null,((function (_STAR_parent_description_STAR__orig_val__12038_12224,_STAR_parent_description_STAR__temp_val__12039_12225,description__11279__auto____$1,_STAR_parent_description_STAR__orig_val__11836_12195,_STAR_parent_description_STAR__temp_val__11837_12196,description__11279__auto___12194){
return (function (){
cljs.core.reset_BANG_.call(null,tic_tac_toe.screens.play_spec.state,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"current-screen","current-screen",-1454713691),new cljs.core.Keyword(null,"play","play",-580418022),new cljs.core.Keyword(null,"board","board",-1907017633),tic_tac_toe.screens.play_spec.board_3,new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"mode","mode",654403691),(1)], null));

return c3kit.wire.spec_helper.render.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tic_tac_toe.render_screen.render_screen,tic_tac_toe.screens.play_spec.state], null));
});})(_STAR_parent_description_STAR__orig_val__12038_12224,_STAR_parent_description_STAR__temp_val__12039_12225,description__11279__auto____$1,_STAR_parent_description_STAR__orig_val__11836_12195,_STAR_parent_description_STAR__temp_val__11837_12196,description__11279__auto___12194))
),speclj.components.new_characteristic.call(null,"renders board",((function (_STAR_parent_description_STAR__orig_val__12038_12224,_STAR_parent_description_STAR__temp_val__12039_12225,description__11279__auto____$1,_STAR_parent_description_STAR__orig_val__11836_12195,_STAR_parent_description_STAR__temp_val__11837_12196,description__11279__auto___12194){
return (function (){
var expected__11416__auto___12230 = (9);
var actual__11417__auto___12231 = cljs.core.count.call(null,cljs.core.vec.call(null,c3kit.wire.js.query_selector_all.call(null,".board-square")));
if(cljs.core._EQ_.call(null,expected__11416__auto___12230,actual__11417__auto___12231)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__11416__auto___12230;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11384__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11384__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__11417__auto___12231;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11384__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11384__auto__);
}
})()," (using =)"].join('')));
}

var value__11779__auto___12232 = "#board-wrapper";
var node__11780__auto___12233 = c3kit.wire.spec_helper.select.call(null,value__11779__auto___12232);
if(cljs.core.truth_(node__11780__auto___12233)){
} else {
throw (new speclj.platform.SpecFailure(["Expected selector to find node: ",(function (){var temp__5806__auto__ = value__11779__auto___12232;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11384__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11384__auto__);
}
})()].join('')));
}

var value__11779__auto__ = ".three-grid";
var node__11780__auto__ = c3kit.wire.spec_helper.select.call(null,value__11779__auto__);
if(cljs.core.truth_(node__11780__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected selector to find node: ",(function (){var temp__5806__auto__ = value__11779__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11384__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11384__auto__);
}
})()].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__12038_12224,_STAR_parent_description_STAR__temp_val__12039_12225,description__11279__auto____$1,_STAR_parent_description_STAR__orig_val__11836_12195,_STAR_parent_description_STAR__temp_val__11837_12196,description__11279__auto___12194))
,false),speclj.components.new_characteristic.call(null,"buttons have IDs 0-8",((function (_STAR_parent_description_STAR__orig_val__12038_12224,_STAR_parent_description_STAR__temp_val__12039_12225,description__11279__auto____$1,_STAR_parent_description_STAR__orig_val__11836_12195,_STAR_parent_description_STAR__temp_val__11837_12196,description__11279__auto___12194){
return (function (){
var seq__12096 = cljs.core.seq.call(null,cljs.core.range.call(null,(9)));
var chunk__12097 = null;
var count__12098 = (0);
var i__12099 = (0);
while(true){
if((i__12099 < count__12098)){
var n = cljs.core._nth.call(null,chunk__12097,i__12099);
var value__11779__auto___12234 = ["#index-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join('');
var node__11780__auto___12235 = c3kit.wire.spec_helper.select.call(null,value__11779__auto___12234);
if(cljs.core.truth_(node__11780__auto___12235)){
} else {
throw (new speclj.platform.SpecFailure(["Expected selector to find node: ",(function (){var temp__5806__auto__ = value__11779__auto___12234;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11384__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11384__auto__);
}
})()].join('')));
}


var G__12236 = seq__12096;
var G__12237 = chunk__12097;
var G__12238 = count__12098;
var G__12239 = (i__12099 + (1));
seq__12096 = G__12236;
chunk__12097 = G__12237;
count__12098 = G__12238;
i__12099 = G__12239;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__12096);
if(temp__5804__auto__){
var seq__12096__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12096__$1)){
var c__5525__auto__ = cljs.core.chunk_first.call(null,seq__12096__$1);
var G__12240 = cljs.core.chunk_rest.call(null,seq__12096__$1);
var G__12241 = c__5525__auto__;
var G__12242 = cljs.core.count.call(null,c__5525__auto__);
var G__12243 = (0);
seq__12096 = G__12240;
chunk__12097 = G__12241;
count__12098 = G__12242;
i__12099 = G__12243;
continue;
} else {
var n = cljs.core.first.call(null,seq__12096__$1);
var value__11779__auto___12244 = ["#index-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join('');
var node__11780__auto___12245 = c3kit.wire.spec_helper.select.call(null,value__11779__auto___12244);
if(cljs.core.truth_(node__11780__auto___12245)){
} else {
throw (new speclj.platform.SpecFailure(["Expected selector to find node: ",(function (){var temp__5806__auto__ = value__11779__auto___12244;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11384__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11384__auto__);
}
})()].join('')));
}


var G__12246 = cljs.core.next.call(null,seq__12096__$1);
var G__12247 = null;
var G__12248 = (0);
var G__12249 = (0);
seq__12096 = G__12246;
chunk__12097 = G__12247;
count__12098 = G__12248;
i__12099 = G__12249;
continue;
}
} else {
return null;
}
}
break;
}
});})(_STAR_parent_description_STAR__orig_val__12038_12224,_STAR_parent_description_STAR__temp_val__12039_12225,description__11279__auto____$1,_STAR_parent_description_STAR__orig_val__11836_12195,_STAR_parent_description_STAR__temp_val__11837_12196,description__11279__auto___12194))
,false),speclj.components.new_characteristic.call(null,"clicking button updates board in state",((function (_STAR_parent_description_STAR__orig_val__12038_12224,_STAR_parent_description_STAR__temp_val__12039_12225,description__11279__auto____$1,_STAR_parent_description_STAR__orig_val__11836_12195,_STAR_parent_description_STAR__temp_val__11837_12196,description__11279__auto___12194){
return (function (){
var seq__12100 = cljs.core.seq.call(null,cljs.core.range.call(null,(9)));
var chunk__12101 = null;
var count__12102 = (0);
var i__12103 = (0);
while(true){
if((i__12103 < count__12102)){
var n = cljs.core._nth.call(null,chunk__12101,i__12103);
c3kit.wire.spec_helper.click_BANG_.call(null,["#index-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join(''));

var expected__11416__auto___12250 = cljs.core.assoc.call(null,tic_tac_toe.screens.play_spec.board_3,n,new cljs.core.Keyword(null,"x","x",2099068185));
var actual__11417__auto___12251 = new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.screens.play_spec.state));
if(cljs.core._EQ_.call(null,expected__11416__auto___12250,actual__11417__auto___12251)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__11416__auto___12250;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11384__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11384__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__11417__auto___12251;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11384__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11384__auto__);
}
})()," (using =)"].join('')));
}

cljs.core.swap_BANG_.call(null,tic_tac_toe.screens.play_spec.state,cljs.core.assoc,new cljs.core.Keyword(null,"board","board",-1907017633),tic_tac_toe.screens.play_spec.board_3,new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"x","x",2099068185));


var G__12252 = seq__12100;
var G__12253 = chunk__12101;
var G__12254 = count__12102;
var G__12255 = (i__12103 + (1));
seq__12100 = G__12252;
chunk__12101 = G__12253;
count__12102 = G__12254;
i__12103 = G__12255;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__12100);
if(temp__5804__auto__){
var seq__12100__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12100__$1)){
var c__5525__auto__ = cljs.core.chunk_first.call(null,seq__12100__$1);
var G__12256 = cljs.core.chunk_rest.call(null,seq__12100__$1);
var G__12257 = c__5525__auto__;
var G__12258 = cljs.core.count.call(null,c__5525__auto__);
var G__12259 = (0);
seq__12100 = G__12256;
chunk__12101 = G__12257;
count__12102 = G__12258;
i__12103 = G__12259;
continue;
} else {
var n = cljs.core.first.call(null,seq__12100__$1);
c3kit.wire.spec_helper.click_BANG_.call(null,["#index-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join(''));

var expected__11416__auto___12260 = cljs.core.assoc.call(null,tic_tac_toe.screens.play_spec.board_3,n,new cljs.core.Keyword(null,"x","x",2099068185));
var actual__11417__auto___12261 = new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.screens.play_spec.state));
if(cljs.core._EQ_.call(null,expected__11416__auto___12260,actual__11417__auto___12261)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__11416__auto___12260;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11384__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11384__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__11417__auto___12261;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11384__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11384__auto__);
}
})()," (using =)"].join('')));
}

cljs.core.swap_BANG_.call(null,tic_tac_toe.screens.play_spec.state,cljs.core.assoc,new cljs.core.Keyword(null,"board","board",-1907017633),tic_tac_toe.screens.play_spec.board_3,new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"x","x",2099068185));


var G__12262 = cljs.core.next.call(null,seq__12100__$1);
var G__12263 = null;
var G__12264 = (0);
var G__12265 = (0);
seq__12100 = G__12262;
chunk__12101 = G__12263;
count__12102 = G__12264;
i__12103 = G__12265;
continue;
}
} else {
return null;
}
}
break;
}
});})(_STAR_parent_description_STAR__orig_val__12038_12224,_STAR_parent_description_STAR__temp_val__12039_12225,description__11279__auto____$1,_STAR_parent_description_STAR__orig_val__11836_12195,_STAR_parent_description_STAR__temp_val__11837_12196,description__11279__auto___12194))
,false),speclj.components.new_characteristic.call(null,"clicking button swaps player in state",((function (_STAR_parent_description_STAR__orig_val__12038_12224,_STAR_parent_description_STAR__temp_val__12039_12225,description__11279__auto____$1,_STAR_parent_description_STAR__orig_val__11836_12195,_STAR_parent_description_STAR__temp_val__11837_12196,description__11279__auto___12194){
return (function (){
var seq__12104 = cljs.core.seq.call(null,cljs.core.range.call(null,(9)));
var chunk__12105 = null;
var count__12106 = (0);
var i__12107 = (0);
while(true){
if((i__12107 < count__12106)){
var n = cljs.core._nth.call(null,chunk__12105,i__12107);
c3kit.wire.spec_helper.click_BANG_.call(null,["#index-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join(''));

var expected__11416__auto___12266 = new cljs.core.Keyword(null,"o","o",-1350007228);
var actual__11417__auto___12267 = new cljs.core.Keyword(null,"player","player",-97687400).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.screens.play_spec.state));
if(cljs.core._EQ_.call(null,expected__11416__auto___12266,actual__11417__auto___12267)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__11416__auto___12266;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11384__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11384__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__11417__auto___12267;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11384__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11384__auto__);
}
})()," (using =)"].join('')));
}

cljs.core.swap_BANG_.call(null,tic_tac_toe.screens.play_spec.state,cljs.core.assoc,new cljs.core.Keyword(null,"board","board",-1907017633),tic_tac_toe.screens.play_spec.board_3,new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"x","x",2099068185));


var G__12268 = seq__12104;
var G__12269 = chunk__12105;
var G__12270 = count__12106;
var G__12271 = (i__12107 + (1));
seq__12104 = G__12268;
chunk__12105 = G__12269;
count__12106 = G__12270;
i__12107 = G__12271;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__12104);
if(temp__5804__auto__){
var seq__12104__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12104__$1)){
var c__5525__auto__ = cljs.core.chunk_first.call(null,seq__12104__$1);
var G__12272 = cljs.core.chunk_rest.call(null,seq__12104__$1);
var G__12273 = c__5525__auto__;
var G__12274 = cljs.core.count.call(null,c__5525__auto__);
var G__12275 = (0);
seq__12104 = G__12272;
chunk__12105 = G__12273;
count__12106 = G__12274;
i__12107 = G__12275;
continue;
} else {
var n = cljs.core.first.call(null,seq__12104__$1);
c3kit.wire.spec_helper.click_BANG_.call(null,["#index-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join(''));

var expected__11416__auto___12276 = new cljs.core.Keyword(null,"o","o",-1350007228);
var actual__11417__auto___12277 = new cljs.core.Keyword(null,"player","player",-97687400).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.screens.play_spec.state));
if(cljs.core._EQ_.call(null,expected__11416__auto___12276,actual__11417__auto___12277)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__11416__auto___12276;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11384__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11384__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__11417__auto___12277;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11384__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11384__auto__);
}
})()," (using =)"].join('')));
}

cljs.core.swap_BANG_.call(null,tic_tac_toe.screens.play_spec.state,cljs.core.assoc,new cljs.core.Keyword(null,"board","board",-1907017633),tic_tac_toe.screens.play_spec.board_3,new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"x","x",2099068185));


var G__12278 = cljs.core.next.call(null,seq__12104__$1);
var G__12279 = null;
var G__12280 = (0);
var G__12281 = (0);
seq__12104 = G__12278;
chunk__12105 = G__12279;
count__12106 = G__12280;
i__12107 = G__12281;
continue;
}
} else {
return null;
}
}
break;
}
});})(_STAR_parent_description_STAR__orig_val__12038_12224,_STAR_parent_description_STAR__temp_val__12039_12225,description__11279__auto____$1,_STAR_parent_description_STAR__orig_val__11836_12195,_STAR_parent_description_STAR__temp_val__11837_12196,description__11279__auto___12194))
,false),speclj.components.new_characteristic.call(null,"clicking button updates game-state in state",((function (_STAR_parent_description_STAR__orig_val__12038_12224,_STAR_parent_description_STAR__temp_val__12039_12225,description__11279__auto____$1,_STAR_parent_description_STAR__orig_val__11836_12195,_STAR_parent_description_STAR__temp_val__11837_12196,description__11279__auto___12194){
return (function (){
cljs.core.swap_BANG_.call(null,tic_tac_toe.screens.play_spec.state,cljs.core.assoc,new cljs.core.Keyword(null,"board","board",-1907017633),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"o","o",-1350007228),new cljs.core.Keyword(null,"o","o",-1350007228),(6),(7),(8),(9)], null));

c3kit.wire.spec_helper.click_BANG_.call(null,"#index-0");

var expected__11416__auto__ = "X wins!";
var actual__11417__auto__ = new cljs.core.Keyword(null,"game-state","game-state",935682735).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.screens.play_spec.state));
if(cljs.core._EQ_.call(null,expected__11416__auto__,actual__11417__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__11416__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11384__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11384__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__11417__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11384__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11384__auto__);
}
})()," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__12038_12224,_STAR_parent_description_STAR__temp_val__12039_12225,description__11279__auto____$1,_STAR_parent_description_STAR__orig_val__11836_12195,_STAR_parent_description_STAR__temp_val__11837_12196,description__11279__auto___12194))
,false),speclj.components.new_characteristic.call(null,"clicking button adds token to button HTML",((function (_STAR_parent_description_STAR__orig_val__12038_12224,_STAR_parent_description_STAR__temp_val__12039_12225,description__11279__auto____$1,_STAR_parent_description_STAR__orig_val__11836_12195,_STAR_parent_description_STAR__temp_val__11837_12196,description__11279__auto___12194){
return (function (){
var seq__12108 = cljs.core.seq.call(null,cljs.core.range.call(null,(9)));
var chunk__12109 = null;
var count__12110 = (0);
var i__12111 = (0);
while(true){
if((i__12111 < count__12110)){
var n = cljs.core._nth.call(null,chunk__12109,i__12111);
c3kit.wire.spec_helper.click_BANG_.call(null,["#index-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join(''));

var expected__11416__auto___12282 = "X";
var actual__11417__auto___12283 = c3kit.wire.spec_helper.text.call(null,["#index-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join(''));
if(cljs.core._EQ_.call(null,expected__11416__auto___12282,actual__11417__auto___12283)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__11416__auto___12282;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11384__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11384__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__11417__auto___12283;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11384__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11384__auto__);
}
})()," (using =)"].join('')));
}

cljs.core.reset_BANG_.call(null,tic_tac_toe.screens.play_spec.state,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"board","board",-1907017633),tic_tac_toe.screens.play_spec.board_3,new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"current-screen","current-screen",-1454713691),new cljs.core.Keyword(null,"play","play",-580418022),new cljs.core.Keyword(null,"mode","mode",654403691),(1)], null));


var G__12284 = seq__12108;
var G__12285 = chunk__12109;
var G__12286 = count__12110;
var G__12287 = (i__12111 + (1));
seq__12108 = G__12284;
chunk__12109 = G__12285;
count__12110 = G__12286;
i__12111 = G__12287;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__12108);
if(temp__5804__auto__){
var seq__12108__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12108__$1)){
var c__5525__auto__ = cljs.core.chunk_first.call(null,seq__12108__$1);
var G__12288 = cljs.core.chunk_rest.call(null,seq__12108__$1);
var G__12289 = c__5525__auto__;
var G__12290 = cljs.core.count.call(null,c__5525__auto__);
var G__12291 = (0);
seq__12108 = G__12288;
chunk__12109 = G__12289;
count__12110 = G__12290;
i__12111 = G__12291;
continue;
} else {
var n = cljs.core.first.call(null,seq__12108__$1);
c3kit.wire.spec_helper.click_BANG_.call(null,["#index-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join(''));

var expected__11416__auto___12292 = "X";
var actual__11417__auto___12293 = c3kit.wire.spec_helper.text.call(null,["#index-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join(''));
if(cljs.core._EQ_.call(null,expected__11416__auto___12292,actual__11417__auto___12293)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__11416__auto___12292;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11384__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11384__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__11417__auto___12293;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11384__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11384__auto__);
}
})()," (using =)"].join('')));
}

cljs.core.reset_BANG_.call(null,tic_tac_toe.screens.play_spec.state,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"board","board",-1907017633),tic_tac_toe.screens.play_spec.board_3,new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"current-screen","current-screen",-1454713691),new cljs.core.Keyword(null,"play","play",-580418022),new cljs.core.Keyword(null,"mode","mode",654403691),(1)], null));


var G__12294 = cljs.core.next.call(null,seq__12108__$1);
var G__12295 = null;
var G__12296 = (0);
var G__12297 = (0);
seq__12108 = G__12294;
chunk__12109 = G__12295;
count__12110 = G__12296;
i__12111 = G__12297;
continue;
}
} else {
return null;
}
}
break;
}
});})(_STAR_parent_description_STAR__orig_val__12038_12224,_STAR_parent_description_STAR__temp_val__12039_12225,description__11279__auto____$1,_STAR_parent_description_STAR__orig_val__11836_12195,_STAR_parent_description_STAR__temp_val__11837_12196,description__11279__auto___12194))
,false),speclj.components.new_characteristic.call(null,"clicking button disables button",((function (_STAR_parent_description_STAR__orig_val__12038_12224,_STAR_parent_description_STAR__temp_val__12039_12225,description__11279__auto____$1,_STAR_parent_description_STAR__orig_val__11836_12195,_STAR_parent_description_STAR__temp_val__11837_12196,description__11279__auto___12194){
return (function (){
var seq__12112 = cljs.core.seq.call(null,cljs.core.range.call(null,(9)));
var chunk__12113 = null;
var count__12114 = (0);
var i__12115 = (0);
while(true){
if((i__12115 < count__12114)){
var n = cljs.core._nth.call(null,chunk__12113,i__12115);
c3kit.wire.spec_helper.click_BANG_.call(null,["#index-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join(''));

var expected__11416__auto___12298 = true;
var actual__11417__auto___12299 = c3kit.wire.spec_helper.disabled_QMARK_.call(null,["#index-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join(''));
if(cljs.core._EQ_.call(null,expected__11416__auto___12298,actual__11417__auto___12299)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__11416__auto___12298;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11384__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11384__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__11417__auto___12299;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11384__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11384__auto__);
}
})()," (using =)"].join('')));
}

cljs.core.reset_BANG_.call(null,tic_tac_toe.screens.play_spec.state,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"board","board",-1907017633),tic_tac_toe.screens.play_spec.board_3,new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"current-screen","current-screen",-1454713691),new cljs.core.Keyword(null,"play","play",-580418022),new cljs.core.Keyword(null,"mode","mode",654403691),(1)], null));


var G__12300 = seq__12112;
var G__12301 = chunk__12113;
var G__12302 = count__12114;
var G__12303 = (i__12115 + (1));
seq__12112 = G__12300;
chunk__12113 = G__12301;
count__12114 = G__12302;
i__12115 = G__12303;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__12112);
if(temp__5804__auto__){
var seq__12112__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12112__$1)){
var c__5525__auto__ = cljs.core.chunk_first.call(null,seq__12112__$1);
var G__12304 = cljs.core.chunk_rest.call(null,seq__12112__$1);
var G__12305 = c__5525__auto__;
var G__12306 = cljs.core.count.call(null,c__5525__auto__);
var G__12307 = (0);
seq__12112 = G__12304;
chunk__12113 = G__12305;
count__12114 = G__12306;
i__12115 = G__12307;
continue;
} else {
var n = cljs.core.first.call(null,seq__12112__$1);
c3kit.wire.spec_helper.click_BANG_.call(null,["#index-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join(''));

var expected__11416__auto___12308 = true;
var actual__11417__auto___12309 = c3kit.wire.spec_helper.disabled_QMARK_.call(null,["#index-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join(''));
if(cljs.core._EQ_.call(null,expected__11416__auto___12308,actual__11417__auto___12309)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__11416__auto___12308;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11384__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11384__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__11417__auto___12309;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11384__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11384__auto__);
}
})()," (using =)"].join('')));
}

cljs.core.reset_BANG_.call(null,tic_tac_toe.screens.play_spec.state,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"board","board",-1907017633),tic_tac_toe.screens.play_spec.board_3,new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"current-screen","current-screen",-1454713691),new cljs.core.Keyword(null,"play","play",-580418022),new cljs.core.Keyword(null,"mode","mode",654403691),(1)], null));


var G__12310 = cljs.core.next.call(null,seq__12112__$1);
var G__12311 = null;
var G__12312 = (0);
var G__12313 = (0);
seq__12112 = G__12310;
chunk__12113 = G__12311;
count__12114 = G__12312;
i__12115 = G__12313;
continue;
}
} else {
return null;
}
}
break;
}
});})(_STAR_parent_description_STAR__orig_val__12038_12224,_STAR_parent_description_STAR__temp_val__12039_12225,description__11279__auto____$1,_STAR_parent_description_STAR__orig_val__11836_12195,_STAR_parent_description_STAR__temp_val__11837_12196,description__11279__auto___12194))
,false),speclj.components.new_characteristic.call(null,"all buttons disabled when game-over",((function (_STAR_parent_description_STAR__orig_val__12038_12224,_STAR_parent_description_STAR__temp_val__12039_12225,description__11279__auto____$1,_STAR_parent_description_STAR__orig_val__11836_12195,_STAR_parent_description_STAR__temp_val__11837_12196,description__11279__auto___12194){
return (function (){
var seq__12116 = cljs.core.seq.call(null,cljs.core.range.call(null,(9)));
var chunk__12117 = null;
var count__12118 = (0);
var i__12119 = (0);
while(true){
if((i__12119 < count__12118)){
var n = cljs.core._nth.call(null,chunk__12117,i__12119);
c3kit.wire.spec_helper.click_BANG_.call(null,["#index-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join(''));

var expected__11416__auto___12314 = true;
var actual__11417__auto___12315 = c3kit.wire.spec_helper.disabled_QMARK_.call(null,["#index-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join(''));
if(cljs.core._EQ_.call(null,expected__11416__auto___12314,actual__11417__auto___12315)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__11416__auto___12314;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11384__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11384__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__11417__auto___12315;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11384__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11384__auto__);
}
})()," (using =)"].join('')));
}

cljs.core.reset_BANG_.call(null,tic_tac_toe.screens.play_spec.state,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"board","board",-1907017633),tic_tac_toe.screens.play_spec.board_3,new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"current-screen","current-screen",-1454713691),new cljs.core.Keyword(null,"play","play",-580418022),new cljs.core.Keyword(null,"mode","mode",654403691),(1)], null));


var G__12316 = seq__12116;
var G__12317 = chunk__12117;
var G__12318 = count__12118;
var G__12319 = (i__12119 + (1));
seq__12116 = G__12316;
chunk__12117 = G__12317;
count__12118 = G__12318;
i__12119 = G__12319;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__12116);
if(temp__5804__auto__){
var seq__12116__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12116__$1)){
var c__5525__auto__ = cljs.core.chunk_first.call(null,seq__12116__$1);
var G__12320 = cljs.core.chunk_rest.call(null,seq__12116__$1);
var G__12321 = c__5525__auto__;
var G__12322 = cljs.core.count.call(null,c__5525__auto__);
var G__12323 = (0);
seq__12116 = G__12320;
chunk__12117 = G__12321;
count__12118 = G__12322;
i__12119 = G__12323;
continue;
} else {
var n = cljs.core.first.call(null,seq__12116__$1);
c3kit.wire.spec_helper.click_BANG_.call(null,["#index-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join(''));

var expected__11416__auto___12324 = true;
var actual__11417__auto___12325 = c3kit.wire.spec_helper.disabled_QMARK_.call(null,["#index-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join(''));
if(cljs.core._EQ_.call(null,expected__11416__auto___12324,actual__11417__auto___12325)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__11416__auto___12324;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11384__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11384__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__11417__auto___12325;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11384__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11384__auto__);
}
})()," (using =)"].join('')));
}

cljs.core.reset_BANG_.call(null,tic_tac_toe.screens.play_spec.state,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"board","board",-1907017633),tic_tac_toe.screens.play_spec.board_3,new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"current-screen","current-screen",-1454713691),new cljs.core.Keyword(null,"play","play",-580418022),new cljs.core.Keyword(null,"mode","mode",654403691),(1)], null));


var G__12326 = cljs.core.next.call(null,seq__12116__$1);
var G__12327 = null;
var G__12328 = (0);
var G__12329 = (0);
seq__12116 = G__12326;
chunk__12117 = G__12327;
count__12118 = G__12328;
i__12119 = G__12329;
continue;
}
} else {
return null;
}
}
break;
}
});})(_STAR_parent_description_STAR__orig_val__12038_12224,_STAR_parent_description_STAR__temp_val__12039_12225,description__11279__auto____$1,_STAR_parent_description_STAR__orig_val__11836_12195,_STAR_parent_description_STAR__temp_val__11837_12196,description__11279__auto___12194))
,false),speclj.components.new_characteristic.call(null,"clicking button triggers easy AI if mode 2 or 3 and AI mode is 1",((function (_STAR_parent_description_STAR__orig_val__12038_12224,_STAR_parent_description_STAR__temp_val__12039_12225,description__11279__auto____$1,_STAR_parent_description_STAR__orig_val__11836_12195,_STAR_parent_description_STAR__temp_val__11837_12196,description__11279__auto___12194){
return (function (){
throw (new speclj.platform.SpecPending("Not Yet Implemented"));

var seq__12120 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1)], null));
var chunk__12133 = null;
var count__12134 = (0);
var i__12135 = (0);
while(true){
if((i__12135 < count__12134)){
var ai = cljs.core._nth.call(null,chunk__12133,i__12135);
var seq__12136_12330 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(3)], null));
var chunk__12141_12331 = null;
var count__12142_12332 = (0);
var i__12143_12333 = (0);
while(true){
if((i__12143_12333 < count__12142_12332)){
var mode_12334 = cljs.core._nth.call(null,chunk__12141_12331,i__12143_12333);
var seq__12144_12335 = cljs.core.seq.call(null,cljs.core.range.call(null,(9)));
var chunk__12145_12336 = null;
var count__12146_12337 = (0);
var i__12147_12338 = (0);
while(true){
if((i__12147_12338 < count__12146_12337)){
var n_12339 = cljs.core._nth.call(null,chunk__12145_12336,i__12147_12338);
cljs.core.swap_BANG_.call(null,tic_tac_toe.screens.play_spec.state,cljs.core.assoc,new cljs.core.Keyword(null,"mode","mode",654403691),mode_12334,new cljs.core.Keyword(null,"first-ai-level","first-ai-level",1004633644),ai);

c3kit.wire.spec_helper.render.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tic_tac_toe.render_screen.render_screen,tic_tac_toe.screens.play_spec.state], null));

c3kit.wire.spec_helper.click_BANG_.call(null,["#index-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n_12339)].join(''));

var expected__11440__auto___12340 = cljs.core.assoc.call(null,tic_tac_toe.screens.play_spec.board_3,n_12339,new cljs.core.Keyword(null,"x","x",2099068185));
var actual__11441__auto___12341 = new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.screens.play_spec.state));
if(cljs.core._EQ_.call(null,expected__11440__auto___12340,actual__11441__auto___12341)){
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__11440__auto___12340;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11384__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11384__auto__);
}
})(),speclj.platform.endl,"not to =: ",(function (){var temp__5806__auto__ = actual__11441__auto___12341;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11384__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11384__auto__);
}
})()].join('')));
} else {
}

cljs.core.reset_BANG_.call(null,tic_tac_toe.screens.play_spec.state,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"board","board",-1907017633),tic_tac_toe.screens.play_spec.board_3,new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"current-screen","current-screen",-1454713691),new cljs.core.Keyword(null,"play","play",-580418022)], null));


var G__12342 = seq__12144_12335;
var G__12343 = chunk__12145_12336;
var G__12344 = count__12146_12337;
var G__12345 = (i__12147_12338 + (1));
seq__12144_12335 = G__12342;
chunk__12145_12336 = G__12343;
count__12146_12337 = G__12344;
i__12147_12338 = G__12345;
continue;
} else {
var temp__5804__auto___12346 = cljs.core.seq.call(null,seq__12144_12335);
if(temp__5804__auto___12346){
var seq__12144_12347__$1 = temp__5804__auto___12346;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12144_12347__$1)){
var c__5525__auto___12348 = cljs.core.chunk_first.call(null,seq__12144_12347__$1);
var G__12349 = cljs.core.chunk_rest.call(null,seq__12144_12347__$1);
var G__12350 = c__5525__auto___12348;
var G__12351 = cljs.core.count.call(null,c__5525__auto___12348);
var G__12352 = (0);
seq__12144_12335 = G__12349;
chunk__12145_12336 = G__12350;
count__12146_12337 = G__12351;
i__12147_12338 = G__12352;
continue;
} else {
var n_12353 = cljs.core.first.call(null,seq__12144_12347__$1);
cljs.core.swap_BANG_.call(null,tic_tac_toe.screens.play_spec.state,cljs.core.assoc,new cljs.core.Keyword(null,"mode","mode",654403691),mode_12334,new cljs.core.Keyword(null,"first-ai-level","first-ai-level",1004633644),ai);

c3kit.wire.spec_helper.render.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tic_tac_toe.render_screen.render_screen,tic_tac_toe.screens.play_spec.state], null));

c3kit.wire.spec_helper.click_BANG_.call(null,["#index-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n_12353)].join(''));

var expected__11440__auto___12354 = cljs.core.assoc.call(null,tic_tac_toe.screens.play_spec.board_3,n_12353,new cljs.core.Keyword(null,"x","x",2099068185));
var actual__11441__auto___12355 = new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.screens.play_spec.state));
if(cljs.core._EQ_.call(null,expected__11440__auto___12354,actual__11441__auto___12355)){
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__11440__auto___12354;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11384__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11384__auto__);
}
})(),speclj.platform.endl,"not to =: ",(function (){var temp__5806__auto__ = actual__11441__auto___12355;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11384__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11384__auto__);
}
})()].join('')));
} else {
}

cljs.core.reset_BANG_.call(null,tic_tac_toe.screens.play_spec.state,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"board","board",-1907017633),tic_tac_toe.screens.play_spec.board_3,new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"current-screen","current-screen",-1454713691),new cljs.core.Keyword(null,"play","play",-580418022)], null));


var G__12356 = cljs.core.next.call(null,seq__12144_12347__$1);
var G__12357 = null;
var G__12358 = (0);
var G__12359 = (0);
seq__12144_12335 = G__12356;
chunk__12145_12336 = G__12357;
count__12146_12337 = G__12358;
i__12147_12338 = G__12359;
continue;
}
} else {
}
}
break;
}

var G__12360 = seq__12136_12330;
var G__12361 = chunk__12141_12331;
var G__12362 = count__12142_12332;
var G__12363 = (i__12143_12333 + (1));
seq__12136_12330 = G__12360;
chunk__12141_12331 = G__12361;
count__12142_12332 = G__12362;
i__12143_12333 = G__12363;
continue;
} else {
var temp__5804__auto___12364 = cljs.core.seq.call(null,seq__12136_12330);
if(temp__5804__auto___12364){
var seq__12136_12365__$1 = temp__5804__auto___12364;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12136_12365__$1)){
var c__5525__auto___12366 = cljs.core.chunk_first.call(null,seq__12136_12365__$1);
var G__12367 = cljs.core.chunk_rest.call(null,seq__12136_12365__$1);
var G__12368 = c__5525__auto___12366;
var G__12369 = cljs.core.count.call(null,c__5525__auto___12366);
var G__12370 = (0);
seq__12136_12330 = G__12367;
chunk__12141_12331 = G__12368;
count__12142_12332 = G__12369;
i__12143_12333 = G__12370;
continue;
} else {
var mode_12371 = cljs.core.first.call(null,seq__12136_12365__$1);
var seq__12137_12372 = cljs.core.seq.call(null,cljs.core.range.call(null,(9)));
var chunk__12138_12373 = null;
var count__12139_12374 = (0);
var i__12140_12375 = (0);
while(true){
if((i__12140_12375 < count__12139_12374)){
var n_12376 = cljs.core._nth.call(null,chunk__12138_12373,i__12140_12375);
cljs.core.swap_BANG_.call(null,tic_tac_toe.screens.play_spec.state,cljs.core.assoc,new cljs.core.Keyword(null,"mode","mode",654403691),mode_12371,new cljs.core.Keyword(null,"first-ai-level","first-ai-level",1004633644),ai);

c3kit.wire.spec_helper.render.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tic_tac_toe.render_screen.render_screen,tic_tac_toe.screens.play_spec.state], null));

c3kit.wire.spec_helper.click_BANG_.call(null,["#index-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n_12376)].join(''));

var expected__11440__auto___12377 = cljs.core.assoc.call(null,tic_tac_toe.screens.play_spec.board_3,n_12376,new cljs.core.Keyword(null,"x","x",2099068185));
var actual__11441__auto___12378 = new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.screens.play_spec.state));
if(cljs.core._EQ_.call(null,expected__11440__auto___12377,actual__11441__auto___12378)){
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__11440__auto___12377;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11384__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11384__auto__);
}
})(),speclj.platform.endl,"not to =: ",(function (){var temp__5806__auto__ = actual__11441__auto___12378;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11384__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11384__auto__);
}
})()].join('')));
} else {
}

cljs.core.reset_BANG_.call(null,tic_tac_toe.screens.play_spec.state,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"board","board",-1907017633),tic_tac_toe.screens.play_spec.board_3,new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"current-screen","current-screen",-1454713691),new cljs.core.Keyword(null,"play","play",-580418022)], null));


var G__12379 = seq__12137_12372;
var G__12380 = chunk__12138_12373;
var G__12381 = count__12139_12374;
var G__12382 = (i__12140_12375 + (1));
seq__12137_12372 = G__12379;
chunk__12138_12373 = G__12380;
count__12139_12374 = G__12381;
i__12140_12375 = G__12382;
continue;
} else {
var temp__5804__auto___12383__$1 = cljs.core.seq.call(null,seq__12137_12372);
if(temp__5804__auto___12383__$1){
var seq__12137_12384__$1 = temp__5804__auto___12383__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12137_12384__$1)){
var c__5525__auto___12385 = cljs.core.chunk_first.call(null,seq__12137_12384__$1);
var G__12386 = cljs.core.chunk_rest.call(null,seq__12137_12384__$1);
var G__12387 = c__5525__auto___12385;
var G__12388 = cljs.core.count.call(null,c__5525__auto___12385);
var G__12389 = (0);
seq__12137_12372 = G__12386;
chunk__12138_12373 = G__12387;
count__12139_12374 = G__12388;
i__12140_12375 = G__12389;
continue;
} else {
var n_12390 = cljs.core.first.call(null,seq__12137_12384__$1);
cljs.core.swap_BANG_.call(null,tic_tac_toe.screens.play_spec.state,cljs.core.assoc,new cljs.core.Keyword(null,"mode","mode",654403691),mode_12371,new cljs.core.Keyword(null,"first-ai-level","first-ai-level",1004633644),ai);

c3kit.wire.spec_helper.render.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tic_tac_toe.render_screen.render_screen,tic_tac_toe.screens.play_spec.state], null));

c3kit.wire.spec_helper.click_BANG_.call(null,["#index-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n_12390)].join(''));

var expected__11440__auto___12391 = cljs.core.assoc.call(null,tic_tac_toe.screens.play_spec.board_3,n_12390,new cljs.core.Keyword(null,"x","x",2099068185));
var actual__11441__auto___12392 = new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.screens.play_spec.state));
if(cljs.core._EQ_.call(null,expected__11440__auto___12391,actual__11441__auto___12392)){
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__11440__auto___12391;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11384__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11384__auto__);
}
})(),speclj.platform.endl,"not to =: ",(function (){var temp__5806__auto__ = actual__11441__auto___12392;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11384__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11384__auto__);
}
})()].join('')));
} else {
}

cljs.core.reset_BANG_.call(null,tic_tac_toe.screens.play_spec.state,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"board","board",-1907017633),tic_tac_toe.screens.play_spec.board_3,new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"current-screen","current-screen",-1454713691),new cljs.core.Keyword(null,"play","play",-580418022)], null));


var G__12393 = cljs.core.next.call(null,seq__12137_12384__$1);
var G__12394 = null;
var G__12395 = (0);
var G__12396 = (0);
seq__12137_12372 = G__12393;
chunk__12138_12373 = G__12394;
count__12139_12374 = G__12395;
i__12140_12375 = G__12396;
continue;
}
} else {
}
}
break;
}

var G__12397 = cljs.core.next.call(null,seq__12136_12365__$1);
var G__12398 = null;
var G__12399 = (0);
var G__12400 = (0);
seq__12136_12330 = G__12397;
chunk__12141_12331 = G__12398;
count__12142_12332 = G__12399;
i__12143_12333 = G__12400;
continue;
}
} else {
}
}
break;
}

var G__12401 = seq__12120;
var G__12402 = chunk__12133;
var G__12403 = count__12134;
var G__12404 = (i__12135 + (1));
seq__12120 = G__12401;
chunk__12133 = G__12402;
count__12134 = G__12403;
i__12135 = G__12404;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__12120);
if(temp__5804__auto__){
var seq__12120__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12120__$1)){
var c__5525__auto__ = cljs.core.chunk_first.call(null,seq__12120__$1);
var G__12405 = cljs.core.chunk_rest.call(null,seq__12120__$1);
var G__12406 = c__5525__auto__;
var G__12407 = cljs.core.count.call(null,c__5525__auto__);
var G__12408 = (0);
seq__12120 = G__12405;
chunk__12133 = G__12406;
count__12134 = G__12407;
i__12135 = G__12408;
continue;
} else {
var ai = cljs.core.first.call(null,seq__12120__$1);
var seq__12121_12409 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(3)], null));
var chunk__12126_12410 = null;
var count__12127_12411 = (0);
var i__12128_12412 = (0);
while(true){
if((i__12128_12412 < count__12127_12411)){
var mode_12413 = cljs.core._nth.call(null,chunk__12126_12410,i__12128_12412);
var seq__12129_12414 = cljs.core.seq.call(null,cljs.core.range.call(null,(9)));
var chunk__12130_12415 = null;
var count__12131_12416 = (0);
var i__12132_12417 = (0);
while(true){
if((i__12132_12417 < count__12131_12416)){
var n_12418 = cljs.core._nth.call(null,chunk__12130_12415,i__12132_12417);
cljs.core.swap_BANG_.call(null,tic_tac_toe.screens.play_spec.state,cljs.core.assoc,new cljs.core.Keyword(null,"mode","mode",654403691),mode_12413,new cljs.core.Keyword(null,"first-ai-level","first-ai-level",1004633644),ai);

c3kit.wire.spec_helper.render.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tic_tac_toe.render_screen.render_screen,tic_tac_toe.screens.play_spec.state], null));

c3kit.wire.spec_helper.click_BANG_.call(null,["#index-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n_12418)].join(''));

var expected__11440__auto___12419 = cljs.core.assoc.call(null,tic_tac_toe.screens.play_spec.board_3,n_12418,new cljs.core.Keyword(null,"x","x",2099068185));
var actual__11441__auto___12420 = new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.screens.play_spec.state));
if(cljs.core._EQ_.call(null,expected__11440__auto___12419,actual__11441__auto___12420)){
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__11440__auto___12419;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11384__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11384__auto__);
}
})(),speclj.platform.endl,"not to =: ",(function (){var temp__5806__auto__ = actual__11441__auto___12420;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11384__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11384__auto__);
}
})()].join('')));
} else {
}

cljs.core.reset_BANG_.call(null,tic_tac_toe.screens.play_spec.state,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"board","board",-1907017633),tic_tac_toe.screens.play_spec.board_3,new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"current-screen","current-screen",-1454713691),new cljs.core.Keyword(null,"play","play",-580418022)], null));


var G__12421 = seq__12129_12414;
var G__12422 = chunk__12130_12415;
var G__12423 = count__12131_12416;
var G__12424 = (i__12132_12417 + (1));
seq__12129_12414 = G__12421;
chunk__12130_12415 = G__12422;
count__12131_12416 = G__12423;
i__12132_12417 = G__12424;
continue;
} else {
var temp__5804__auto___12425__$1 = cljs.core.seq.call(null,seq__12129_12414);
if(temp__5804__auto___12425__$1){
var seq__12129_12426__$1 = temp__5804__auto___12425__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12129_12426__$1)){
var c__5525__auto___12427 = cljs.core.chunk_first.call(null,seq__12129_12426__$1);
var G__12428 = cljs.core.chunk_rest.call(null,seq__12129_12426__$1);
var G__12429 = c__5525__auto___12427;
var G__12430 = cljs.core.count.call(null,c__5525__auto___12427);
var G__12431 = (0);
seq__12129_12414 = G__12428;
chunk__12130_12415 = G__12429;
count__12131_12416 = G__12430;
i__12132_12417 = G__12431;
continue;
} else {
var n_12432 = cljs.core.first.call(null,seq__12129_12426__$1);
cljs.core.swap_BANG_.call(null,tic_tac_toe.screens.play_spec.state,cljs.core.assoc,new cljs.core.Keyword(null,"mode","mode",654403691),mode_12413,new cljs.core.Keyword(null,"first-ai-level","first-ai-level",1004633644),ai);

c3kit.wire.spec_helper.render.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tic_tac_toe.render_screen.render_screen,tic_tac_toe.screens.play_spec.state], null));

c3kit.wire.spec_helper.click_BANG_.call(null,["#index-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n_12432)].join(''));

var expected__11440__auto___12433 = cljs.core.assoc.call(null,tic_tac_toe.screens.play_spec.board_3,n_12432,new cljs.core.Keyword(null,"x","x",2099068185));
var actual__11441__auto___12434 = new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.screens.play_spec.state));
if(cljs.core._EQ_.call(null,expected__11440__auto___12433,actual__11441__auto___12434)){
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__11440__auto___12433;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11384__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11384__auto__);
}
})(),speclj.platform.endl,"not to =: ",(function (){var temp__5806__auto__ = actual__11441__auto___12434;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11384__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11384__auto__);
}
})()].join('')));
} else {
}

cljs.core.reset_BANG_.call(null,tic_tac_toe.screens.play_spec.state,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"board","board",-1907017633),tic_tac_toe.screens.play_spec.board_3,new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"current-screen","current-screen",-1454713691),new cljs.core.Keyword(null,"play","play",-580418022)], null));


var G__12435 = cljs.core.next.call(null,seq__12129_12426__$1);
var G__12436 = null;
var G__12437 = (0);
var G__12438 = (0);
seq__12129_12414 = G__12435;
chunk__12130_12415 = G__12436;
count__12131_12416 = G__12437;
i__12132_12417 = G__12438;
continue;
}
} else {
}
}
break;
}

var G__12439 = seq__12121_12409;
var G__12440 = chunk__12126_12410;
var G__12441 = count__12127_12411;
var G__12442 = (i__12128_12412 + (1));
seq__12121_12409 = G__12439;
chunk__12126_12410 = G__12440;
count__12127_12411 = G__12441;
i__12128_12412 = G__12442;
continue;
} else {
var temp__5804__auto___12443__$1 = cljs.core.seq.call(null,seq__12121_12409);
if(temp__5804__auto___12443__$1){
var seq__12121_12444__$1 = temp__5804__auto___12443__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12121_12444__$1)){
var c__5525__auto___12445 = cljs.core.chunk_first.call(null,seq__12121_12444__$1);
var G__12446 = cljs.core.chunk_rest.call(null,seq__12121_12444__$1);
var G__12447 = c__5525__auto___12445;
var G__12448 = cljs.core.count.call(null,c__5525__auto___12445);
var G__12449 = (0);
seq__12121_12409 = G__12446;
chunk__12126_12410 = G__12447;
count__12127_12411 = G__12448;
i__12128_12412 = G__12449;
continue;
} else {
var mode_12450 = cljs.core.first.call(null,seq__12121_12444__$1);
var seq__12122_12451 = cljs.core.seq.call(null,cljs.core.range.call(null,(9)));
var chunk__12123_12452 = null;
var count__12124_12453 = (0);
var i__12125_12454 = (0);
while(true){
if((i__12125_12454 < count__12124_12453)){
var n_12455 = cljs.core._nth.call(null,chunk__12123_12452,i__12125_12454);
cljs.core.swap_BANG_.call(null,tic_tac_toe.screens.play_spec.state,cljs.core.assoc,new cljs.core.Keyword(null,"mode","mode",654403691),mode_12450,new cljs.core.Keyword(null,"first-ai-level","first-ai-level",1004633644),ai);

c3kit.wire.spec_helper.render.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tic_tac_toe.render_screen.render_screen,tic_tac_toe.screens.play_spec.state], null));

c3kit.wire.spec_helper.click_BANG_.call(null,["#index-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n_12455)].join(''));

var expected__11440__auto___12456 = cljs.core.assoc.call(null,tic_tac_toe.screens.play_spec.board_3,n_12455,new cljs.core.Keyword(null,"x","x",2099068185));
var actual__11441__auto___12457 = new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.screens.play_spec.state));
if(cljs.core._EQ_.call(null,expected__11440__auto___12456,actual__11441__auto___12457)){
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__11440__auto___12456;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11384__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11384__auto__);
}
})(),speclj.platform.endl,"not to =: ",(function (){var temp__5806__auto__ = actual__11441__auto___12457;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11384__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11384__auto__);
}
})()].join('')));
} else {
}

cljs.core.reset_BANG_.call(null,tic_tac_toe.screens.play_spec.state,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"board","board",-1907017633),tic_tac_toe.screens.play_spec.board_3,new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"current-screen","current-screen",-1454713691),new cljs.core.Keyword(null,"play","play",-580418022)], null));


var G__12458 = seq__12122_12451;
var G__12459 = chunk__12123_12452;
var G__12460 = count__12124_12453;
var G__12461 = (i__12125_12454 + (1));
seq__12122_12451 = G__12458;
chunk__12123_12452 = G__12459;
count__12124_12453 = G__12460;
i__12125_12454 = G__12461;
continue;
} else {
var temp__5804__auto___12462__$2 = cljs.core.seq.call(null,seq__12122_12451);
if(temp__5804__auto___12462__$2){
var seq__12122_12463__$1 = temp__5804__auto___12462__$2;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12122_12463__$1)){
var c__5525__auto___12464 = cljs.core.chunk_first.call(null,seq__12122_12463__$1);
var G__12465 = cljs.core.chunk_rest.call(null,seq__12122_12463__$1);
var G__12466 = c__5525__auto___12464;
var G__12467 = cljs.core.count.call(null,c__5525__auto___12464);
var G__12468 = (0);
seq__12122_12451 = G__12465;
chunk__12123_12452 = G__12466;
count__12124_12453 = G__12467;
i__12125_12454 = G__12468;
continue;
} else {
var n_12469 = cljs.core.first.call(null,seq__12122_12463__$1);
cljs.core.swap_BANG_.call(null,tic_tac_toe.screens.play_spec.state,cljs.core.assoc,new cljs.core.Keyword(null,"mode","mode",654403691),mode_12450,new cljs.core.Keyword(null,"first-ai-level","first-ai-level",1004633644),ai);

c3kit.wire.spec_helper.render.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tic_tac_toe.render_screen.render_screen,tic_tac_toe.screens.play_spec.state], null));

c3kit.wire.spec_helper.click_BANG_.call(null,["#index-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n_12469)].join(''));

var expected__11440__auto___12470 = cljs.core.assoc.call(null,tic_tac_toe.screens.play_spec.board_3,n_12469,new cljs.core.Keyword(null,"x","x",2099068185));
var actual__11441__auto___12471 = new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.screens.play_spec.state));
if(cljs.core._EQ_.call(null,expected__11440__auto___12470,actual__11441__auto___12471)){
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__11440__auto___12470;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11384__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11384__auto__);
}
})(),speclj.platform.endl,"not to =: ",(function (){var temp__5806__auto__ = actual__11441__auto___12471;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11384__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11384__auto__);
}
})()].join('')));
} else {
}

cljs.core.reset_BANG_.call(null,tic_tac_toe.screens.play_spec.state,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"board","board",-1907017633),tic_tac_toe.screens.play_spec.board_3,new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"current-screen","current-screen",-1454713691),new cljs.core.Keyword(null,"play","play",-580418022)], null));


var G__12472 = cljs.core.next.call(null,seq__12122_12463__$1);
var G__12473 = null;
var G__12474 = (0);
var G__12475 = (0);
seq__12122_12451 = G__12472;
chunk__12123_12452 = G__12473;
count__12124_12453 = G__12474;
i__12125_12454 = G__12475;
continue;
}
} else {
}
}
break;
}

var G__12476 = cljs.core.next.call(null,seq__12121_12444__$1);
var G__12477 = null;
var G__12478 = (0);
var G__12479 = (0);
seq__12121_12409 = G__12476;
chunk__12126_12410 = G__12477;
count__12127_12411 = G__12478;
i__12128_12412 = G__12479;
continue;
}
} else {
}
}
break;
}

var G__12480 = cljs.core.next.call(null,seq__12120__$1);
var G__12481 = null;
var G__12482 = (0);
var G__12483 = (0);
seq__12120 = G__12480;
chunk__12133 = G__12481;
count__12134 = G__12482;
i__12135 = G__12483;
continue;
}
} else {
return null;
}
}
break;
}
});})(_STAR_parent_description_STAR__orig_val__12038_12224,_STAR_parent_description_STAR__temp_val__12039_12225,description__11279__auto____$1,_STAR_parent_description_STAR__orig_val__11836_12195,_STAR_parent_description_STAR__temp_val__11837_12196,description__11279__auto___12194))
,false)],null)));
var chunk__12041_12227 = null;
var count__12042_12228 = (0);
var i__12043_12229 = (0);
while(true){
if((i__12043_12229 < count__12042_12228)){
var component__11280__auto___12484 = cljs.core._nth.call(null,chunk__12041_12227,i__12043_12229);
speclj.components.install.call(null,component__11280__auto___12484,description__11279__auto____$1);


var G__12485 = seq__12040_12226;
var G__12486 = chunk__12041_12227;
var G__12487 = count__12042_12228;
var G__12488 = (i__12043_12229 + (1));
seq__12040_12226 = G__12485;
chunk__12041_12227 = G__12486;
count__12042_12228 = G__12487;
i__12043_12229 = G__12488;
continue;
} else {
var temp__5804__auto___12489 = cljs.core.seq.call(null,seq__12040_12226);
if(temp__5804__auto___12489){
var seq__12040_12490__$1 = temp__5804__auto___12489;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12040_12490__$1)){
var c__5525__auto___12491 = cljs.core.chunk_first.call(null,seq__12040_12490__$1);
var G__12492 = cljs.core.chunk_rest.call(null,seq__12040_12490__$1);
var G__12493 = c__5525__auto___12491;
var G__12494 = cljs.core.count.call(null,c__5525__auto___12491);
var G__12495 = (0);
seq__12040_12226 = G__12492;
chunk__12041_12227 = G__12493;
count__12042_12228 = G__12494;
i__12043_12229 = G__12495;
continue;
} else {
var component__11280__auto___12496 = cljs.core.first.call(null,seq__12040_12490__$1);
speclj.components.install.call(null,component__11280__auto___12496,description__11279__auto____$1);


var G__12497 = cljs.core.next.call(null,seq__12040_12490__$1);
var G__12498 = null;
var G__12499 = (0);
var G__12500 = (0);
seq__12040_12226 = G__12497;
chunk__12041_12227 = G__12498;
count__12042_12228 = G__12499;
i__12043_12229 = G__12500;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__12038_12224);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__11279__auto____$1);
}

return description__11279__auto____$1;
})(),(function (){var description__11279__auto____$1 = speclj.components.new_description.call(null,"4x4",false,"tic-tac-toe.screens.play-spec");
var _STAR_parent_description_STAR__orig_val__12148_12501 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__12149_12502 = description__11279__auto____$1;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__12149_12502);

try{var seq__12150_12503 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,7,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_before.call(null,((function (_STAR_parent_description_STAR__orig_val__12148_12501,_STAR_parent_description_STAR__temp_val__12149_12502,description__11279__auto____$1,_STAR_parent_description_STAR__orig_val__11836_12195,_STAR_parent_description_STAR__temp_val__11837_12196,description__11279__auto___12194){
return (function (){
cljs.core.reset_BANG_.call(null,tic_tac_toe.screens.play_spec.state,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"current-screen","current-screen",-1454713691),new cljs.core.Keyword(null,"play","play",-580418022),new cljs.core.Keyword(null,"board","board",-1907017633),tic_tac_toe.screens.play_spec.board_4,new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"mode","mode",654403691),(1)], null));

return c3kit.wire.spec_helper.render.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tic_tac_toe.render_screen.render_screen,tic_tac_toe.screens.play_spec.state], null));
});})(_STAR_parent_description_STAR__orig_val__12148_12501,_STAR_parent_description_STAR__temp_val__12149_12502,description__11279__auto____$1,_STAR_parent_description_STAR__orig_val__11836_12195,_STAR_parent_description_STAR__temp_val__11837_12196,description__11279__auto___12194))
),speclj.components.new_characteristic.call(null,"renders board",((function (_STAR_parent_description_STAR__orig_val__12148_12501,_STAR_parent_description_STAR__temp_val__12149_12502,description__11279__auto____$1,_STAR_parent_description_STAR__orig_val__11836_12195,_STAR_parent_description_STAR__temp_val__11837_12196,description__11279__auto___12194){
return (function (){
var expected__11416__auto___12507 = (16);
var actual__11417__auto___12508 = cljs.core.count.call(null,cljs.core.vec.call(null,c3kit.wire.js.query_selector_all.call(null,".board-square")));
if(cljs.core._EQ_.call(null,expected__11416__auto___12507,actual__11417__auto___12508)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__11416__auto___12507;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11384__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11384__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__11417__auto___12508;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11384__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11384__auto__);
}
})()," (using =)"].join('')));
}

var value__11779__auto___12509 = "#board-wrapper";
var node__11780__auto___12510 = c3kit.wire.spec_helper.select.call(null,value__11779__auto___12509);
if(cljs.core.truth_(node__11780__auto___12510)){
} else {
throw (new speclj.platform.SpecFailure(["Expected selector to find node: ",(function (){var temp__5806__auto__ = value__11779__auto___12509;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11384__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11384__auto__);
}
})()].join('')));
}

var value__11779__auto__ = ".four-grid";
var node__11780__auto__ = c3kit.wire.spec_helper.select.call(null,value__11779__auto__);
if(cljs.core.truth_(node__11780__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected selector to find node: ",(function (){var temp__5806__auto__ = value__11779__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11384__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11384__auto__);
}
})()].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__12148_12501,_STAR_parent_description_STAR__temp_val__12149_12502,description__11279__auto____$1,_STAR_parent_description_STAR__orig_val__11836_12195,_STAR_parent_description_STAR__temp_val__11837_12196,description__11279__auto___12194))
,false),speclj.components.new_characteristic.call(null,"buttons have IDs 0-15",((function (_STAR_parent_description_STAR__orig_val__12148_12501,_STAR_parent_description_STAR__temp_val__12149_12502,description__11279__auto____$1,_STAR_parent_description_STAR__orig_val__11836_12195,_STAR_parent_description_STAR__temp_val__11837_12196,description__11279__auto___12194){
return (function (){
var seq__12174 = cljs.core.seq.call(null,cljs.core.range.call(null,(16)));
var chunk__12175 = null;
var count__12176 = (0);
var i__12177 = (0);
while(true){
if((i__12177 < count__12176)){
var n = cljs.core._nth.call(null,chunk__12175,i__12177);
var value__11779__auto___12511 = ["#index-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join('');
var node__11780__auto___12512 = c3kit.wire.spec_helper.select.call(null,value__11779__auto___12511);
if(cljs.core.truth_(node__11780__auto___12512)){
} else {
throw (new speclj.platform.SpecFailure(["Expected selector to find node: ",(function (){var temp__5806__auto__ = value__11779__auto___12511;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11384__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11384__auto__);
}
})()].join('')));
}


var G__12513 = seq__12174;
var G__12514 = chunk__12175;
var G__12515 = count__12176;
var G__12516 = (i__12177 + (1));
seq__12174 = G__12513;
chunk__12175 = G__12514;
count__12176 = G__12515;
i__12177 = G__12516;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__12174);
if(temp__5804__auto__){
var seq__12174__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12174__$1)){
var c__5525__auto__ = cljs.core.chunk_first.call(null,seq__12174__$1);
var G__12517 = cljs.core.chunk_rest.call(null,seq__12174__$1);
var G__12518 = c__5525__auto__;
var G__12519 = cljs.core.count.call(null,c__5525__auto__);
var G__12520 = (0);
seq__12174 = G__12517;
chunk__12175 = G__12518;
count__12176 = G__12519;
i__12177 = G__12520;
continue;
} else {
var n = cljs.core.first.call(null,seq__12174__$1);
var value__11779__auto___12521 = ["#index-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join('');
var node__11780__auto___12522 = c3kit.wire.spec_helper.select.call(null,value__11779__auto___12521);
if(cljs.core.truth_(node__11780__auto___12522)){
} else {
throw (new speclj.platform.SpecFailure(["Expected selector to find node: ",(function (){var temp__5806__auto__ = value__11779__auto___12521;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11384__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11384__auto__);
}
})()].join('')));
}


var G__12523 = cljs.core.next.call(null,seq__12174__$1);
var G__12524 = null;
var G__12525 = (0);
var G__12526 = (0);
seq__12174 = G__12523;
chunk__12175 = G__12524;
count__12176 = G__12525;
i__12177 = G__12526;
continue;
}
} else {
return null;
}
}
break;
}
});})(_STAR_parent_description_STAR__orig_val__12148_12501,_STAR_parent_description_STAR__temp_val__12149_12502,description__11279__auto____$1,_STAR_parent_description_STAR__orig_val__11836_12195,_STAR_parent_description_STAR__temp_val__11837_12196,description__11279__auto___12194))
,false),speclj.components.new_characteristic.call(null,"clicking button updates board in state",((function (_STAR_parent_description_STAR__orig_val__12148_12501,_STAR_parent_description_STAR__temp_val__12149_12502,description__11279__auto____$1,_STAR_parent_description_STAR__orig_val__11836_12195,_STAR_parent_description_STAR__temp_val__11837_12196,description__11279__auto___12194){
return (function (){
var seq__12178 = cljs.core.seq.call(null,cljs.core.range.call(null,(16)));
var chunk__12179 = null;
var count__12180 = (0);
var i__12181 = (0);
while(true){
if((i__12181 < count__12180)){
var n = cljs.core._nth.call(null,chunk__12179,i__12181);
c3kit.wire.spec_helper.click_BANG_.call(null,["#index-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join(''));

var expected__11416__auto___12527 = cljs.core.assoc.call(null,tic_tac_toe.screens.play_spec.board_4,n,new cljs.core.Keyword(null,"x","x",2099068185));
var actual__11417__auto___12528 = new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.screens.play_spec.state));
if(cljs.core._EQ_.call(null,expected__11416__auto___12527,actual__11417__auto___12528)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__11416__auto___12527;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11384__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11384__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__11417__auto___12528;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11384__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11384__auto__);
}
})()," (using =)"].join('')));
}

cljs.core.swap_BANG_.call(null,tic_tac_toe.screens.play_spec.state,cljs.core.assoc,new cljs.core.Keyword(null,"board","board",-1907017633),tic_tac_toe.screens.play_spec.board_4,new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"x","x",2099068185));


var G__12529 = seq__12178;
var G__12530 = chunk__12179;
var G__12531 = count__12180;
var G__12532 = (i__12181 + (1));
seq__12178 = G__12529;
chunk__12179 = G__12530;
count__12180 = G__12531;
i__12181 = G__12532;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__12178);
if(temp__5804__auto__){
var seq__12178__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12178__$1)){
var c__5525__auto__ = cljs.core.chunk_first.call(null,seq__12178__$1);
var G__12533 = cljs.core.chunk_rest.call(null,seq__12178__$1);
var G__12534 = c__5525__auto__;
var G__12535 = cljs.core.count.call(null,c__5525__auto__);
var G__12536 = (0);
seq__12178 = G__12533;
chunk__12179 = G__12534;
count__12180 = G__12535;
i__12181 = G__12536;
continue;
} else {
var n = cljs.core.first.call(null,seq__12178__$1);
c3kit.wire.spec_helper.click_BANG_.call(null,["#index-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join(''));

var expected__11416__auto___12537 = cljs.core.assoc.call(null,tic_tac_toe.screens.play_spec.board_4,n,new cljs.core.Keyword(null,"x","x",2099068185));
var actual__11417__auto___12538 = new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.screens.play_spec.state));
if(cljs.core._EQ_.call(null,expected__11416__auto___12537,actual__11417__auto___12538)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__11416__auto___12537;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11384__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11384__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__11417__auto___12538;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11384__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11384__auto__);
}
})()," (using =)"].join('')));
}

cljs.core.swap_BANG_.call(null,tic_tac_toe.screens.play_spec.state,cljs.core.assoc,new cljs.core.Keyword(null,"board","board",-1907017633),tic_tac_toe.screens.play_spec.board_4,new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"x","x",2099068185));


var G__12539 = cljs.core.next.call(null,seq__12178__$1);
var G__12540 = null;
var G__12541 = (0);
var G__12542 = (0);
seq__12178 = G__12539;
chunk__12179 = G__12540;
count__12180 = G__12541;
i__12181 = G__12542;
continue;
}
} else {
return null;
}
}
break;
}
});})(_STAR_parent_description_STAR__orig_val__12148_12501,_STAR_parent_description_STAR__temp_val__12149_12502,description__11279__auto____$1,_STAR_parent_description_STAR__orig_val__11836_12195,_STAR_parent_description_STAR__temp_val__11837_12196,description__11279__auto___12194))
,false),speclj.components.new_characteristic.call(null,"clicking button swaps player in state",((function (_STAR_parent_description_STAR__orig_val__12148_12501,_STAR_parent_description_STAR__temp_val__12149_12502,description__11279__auto____$1,_STAR_parent_description_STAR__orig_val__11836_12195,_STAR_parent_description_STAR__temp_val__11837_12196,description__11279__auto___12194){
return (function (){
var seq__12182 = cljs.core.seq.call(null,cljs.core.range.call(null,(16)));
var chunk__12183 = null;
var count__12184 = (0);
var i__12185 = (0);
while(true){
if((i__12185 < count__12184)){
var n = cljs.core._nth.call(null,chunk__12183,i__12185);
c3kit.wire.spec_helper.click_BANG_.call(null,["#index-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join(''));

var expected__11416__auto___12543 = new cljs.core.Keyword(null,"o","o",-1350007228);
var actual__11417__auto___12544 = new cljs.core.Keyword(null,"player","player",-97687400).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.screens.play_spec.state));
if(cljs.core._EQ_.call(null,expected__11416__auto___12543,actual__11417__auto___12544)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__11416__auto___12543;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11384__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11384__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__11417__auto___12544;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11384__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11384__auto__);
}
})()," (using =)"].join('')));
}

cljs.core.swap_BANG_.call(null,tic_tac_toe.screens.play_spec.state,cljs.core.assoc,new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"x","x",2099068185));


var G__12545 = seq__12182;
var G__12546 = chunk__12183;
var G__12547 = count__12184;
var G__12548 = (i__12185 + (1));
seq__12182 = G__12545;
chunk__12183 = G__12546;
count__12184 = G__12547;
i__12185 = G__12548;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__12182);
if(temp__5804__auto__){
var seq__12182__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12182__$1)){
var c__5525__auto__ = cljs.core.chunk_first.call(null,seq__12182__$1);
var G__12549 = cljs.core.chunk_rest.call(null,seq__12182__$1);
var G__12550 = c__5525__auto__;
var G__12551 = cljs.core.count.call(null,c__5525__auto__);
var G__12552 = (0);
seq__12182 = G__12549;
chunk__12183 = G__12550;
count__12184 = G__12551;
i__12185 = G__12552;
continue;
} else {
var n = cljs.core.first.call(null,seq__12182__$1);
c3kit.wire.spec_helper.click_BANG_.call(null,["#index-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join(''));

var expected__11416__auto___12553 = new cljs.core.Keyword(null,"o","o",-1350007228);
var actual__11417__auto___12554 = new cljs.core.Keyword(null,"player","player",-97687400).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.screens.play_spec.state));
if(cljs.core._EQ_.call(null,expected__11416__auto___12553,actual__11417__auto___12554)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__11416__auto___12553;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11384__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11384__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__11417__auto___12554;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11384__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11384__auto__);
}
})()," (using =)"].join('')));
}

cljs.core.swap_BANG_.call(null,tic_tac_toe.screens.play_spec.state,cljs.core.assoc,new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"x","x",2099068185));


var G__12555 = cljs.core.next.call(null,seq__12182__$1);
var G__12556 = null;
var G__12557 = (0);
var G__12558 = (0);
seq__12182 = G__12555;
chunk__12183 = G__12556;
count__12184 = G__12557;
i__12185 = G__12558;
continue;
}
} else {
return null;
}
}
break;
}
});})(_STAR_parent_description_STAR__orig_val__12148_12501,_STAR_parent_description_STAR__temp_val__12149_12502,description__11279__auto____$1,_STAR_parent_description_STAR__orig_val__11836_12195,_STAR_parent_description_STAR__temp_val__11837_12196,description__11279__auto___12194))
,false),speclj.components.new_characteristic.call(null,"clicking button adds token to button HTML",((function (_STAR_parent_description_STAR__orig_val__12148_12501,_STAR_parent_description_STAR__temp_val__12149_12502,description__11279__auto____$1,_STAR_parent_description_STAR__orig_val__11836_12195,_STAR_parent_description_STAR__temp_val__11837_12196,description__11279__auto___12194){
return (function (){
var seq__12186 = cljs.core.seq.call(null,cljs.core.range.call(null,(16)));
var chunk__12187 = null;
var count__12188 = (0);
var i__12189 = (0);
while(true){
if((i__12189 < count__12188)){
var n = cljs.core._nth.call(null,chunk__12187,i__12189);
c3kit.wire.spec_helper.click_BANG_.call(null,["#index-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join(''));

var expected__11416__auto___12559 = "X";
var actual__11417__auto___12560 = c3kit.wire.spec_helper.text.call(null,["#index-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join(''));
if(cljs.core._EQ_.call(null,expected__11416__auto___12559,actual__11417__auto___12560)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__11416__auto___12559;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11384__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11384__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__11417__auto___12560;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11384__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11384__auto__);
}
})()," (using =)"].join('')));
}

cljs.core.reset_BANG_.call(null,tic_tac_toe.screens.play_spec.state,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"board","board",-1907017633),tic_tac_toe.screens.play_spec.board_4,new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"current-screen","current-screen",-1454713691),new cljs.core.Keyword(null,"play","play",-580418022),new cljs.core.Keyword(null,"mode","mode",654403691),(1)], null));


var G__12561 = seq__12186;
var G__12562 = chunk__12187;
var G__12563 = count__12188;
var G__12564 = (i__12189 + (1));
seq__12186 = G__12561;
chunk__12187 = G__12562;
count__12188 = G__12563;
i__12189 = G__12564;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__12186);
if(temp__5804__auto__){
var seq__12186__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12186__$1)){
var c__5525__auto__ = cljs.core.chunk_first.call(null,seq__12186__$1);
var G__12565 = cljs.core.chunk_rest.call(null,seq__12186__$1);
var G__12566 = c__5525__auto__;
var G__12567 = cljs.core.count.call(null,c__5525__auto__);
var G__12568 = (0);
seq__12186 = G__12565;
chunk__12187 = G__12566;
count__12188 = G__12567;
i__12189 = G__12568;
continue;
} else {
var n = cljs.core.first.call(null,seq__12186__$1);
c3kit.wire.spec_helper.click_BANG_.call(null,["#index-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join(''));

var expected__11416__auto___12569 = "X";
var actual__11417__auto___12570 = c3kit.wire.spec_helper.text.call(null,["#index-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join(''));
if(cljs.core._EQ_.call(null,expected__11416__auto___12569,actual__11417__auto___12570)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__11416__auto___12569;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11384__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11384__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__11417__auto___12570;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11384__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11384__auto__);
}
})()," (using =)"].join('')));
}

cljs.core.reset_BANG_.call(null,tic_tac_toe.screens.play_spec.state,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"board","board",-1907017633),tic_tac_toe.screens.play_spec.board_4,new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"current-screen","current-screen",-1454713691),new cljs.core.Keyword(null,"play","play",-580418022),new cljs.core.Keyword(null,"mode","mode",654403691),(1)], null));


var G__12571 = cljs.core.next.call(null,seq__12186__$1);
var G__12572 = null;
var G__12573 = (0);
var G__12574 = (0);
seq__12186 = G__12571;
chunk__12187 = G__12572;
count__12188 = G__12573;
i__12189 = G__12574;
continue;
}
} else {
return null;
}
}
break;
}
});})(_STAR_parent_description_STAR__orig_val__12148_12501,_STAR_parent_description_STAR__temp_val__12149_12502,description__11279__auto____$1,_STAR_parent_description_STAR__orig_val__11836_12195,_STAR_parent_description_STAR__temp_val__11837_12196,description__11279__auto___12194))
,false),speclj.components.new_characteristic.call(null,"clicking button disables button",((function (_STAR_parent_description_STAR__orig_val__12148_12501,_STAR_parent_description_STAR__temp_val__12149_12502,description__11279__auto____$1,_STAR_parent_description_STAR__orig_val__11836_12195,_STAR_parent_description_STAR__temp_val__11837_12196,description__11279__auto___12194){
return (function (){
var seq__12190 = cljs.core.seq.call(null,cljs.core.range.call(null,(16)));
var chunk__12191 = null;
var count__12192 = (0);
var i__12193 = (0);
while(true){
if((i__12193 < count__12192)){
var n = cljs.core._nth.call(null,chunk__12191,i__12193);
c3kit.wire.spec_helper.click_BANG_.call(null,["#index-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join(''));

var expected__11416__auto___12575 = true;
var actual__11417__auto___12576 = c3kit.wire.spec_helper.disabled_QMARK_.call(null,["#index-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join(''));
if(cljs.core._EQ_.call(null,expected__11416__auto___12575,actual__11417__auto___12576)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__11416__auto___12575;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11384__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11384__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__11417__auto___12576;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11384__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11384__auto__);
}
})()," (using =)"].join('')));
}

cljs.core.reset_BANG_.call(null,tic_tac_toe.screens.play_spec.state,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"board","board",-1907017633),tic_tac_toe.screens.play_spec.board_4,new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"current-screen","current-screen",-1454713691),new cljs.core.Keyword(null,"play","play",-580418022),new cljs.core.Keyword(null,"mode","mode",654403691),(1)], null));


var G__12577 = seq__12190;
var G__12578 = chunk__12191;
var G__12579 = count__12192;
var G__12580 = (i__12193 + (1));
seq__12190 = G__12577;
chunk__12191 = G__12578;
count__12192 = G__12579;
i__12193 = G__12580;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__12190);
if(temp__5804__auto__){
var seq__12190__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12190__$1)){
var c__5525__auto__ = cljs.core.chunk_first.call(null,seq__12190__$1);
var G__12581 = cljs.core.chunk_rest.call(null,seq__12190__$1);
var G__12582 = c__5525__auto__;
var G__12583 = cljs.core.count.call(null,c__5525__auto__);
var G__12584 = (0);
seq__12190 = G__12581;
chunk__12191 = G__12582;
count__12192 = G__12583;
i__12193 = G__12584;
continue;
} else {
var n = cljs.core.first.call(null,seq__12190__$1);
c3kit.wire.spec_helper.click_BANG_.call(null,["#index-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join(''));

var expected__11416__auto___12585 = true;
var actual__11417__auto___12586 = c3kit.wire.spec_helper.disabled_QMARK_.call(null,["#index-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join(''));
if(cljs.core._EQ_.call(null,expected__11416__auto___12585,actual__11417__auto___12586)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__11416__auto___12585;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11384__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11384__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__11417__auto___12586;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11384__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11384__auto__);
}
})()," (using =)"].join('')));
}

cljs.core.reset_BANG_.call(null,tic_tac_toe.screens.play_spec.state,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"board","board",-1907017633),tic_tac_toe.screens.play_spec.board_4,new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"current-screen","current-screen",-1454713691),new cljs.core.Keyword(null,"play","play",-580418022),new cljs.core.Keyword(null,"mode","mode",654403691),(1)], null));


var G__12587 = cljs.core.next.call(null,seq__12190__$1);
var G__12588 = null;
var G__12589 = (0);
var G__12590 = (0);
seq__12190 = G__12587;
chunk__12191 = G__12588;
count__12192 = G__12589;
i__12193 = G__12590;
continue;
}
} else {
return null;
}
}
break;
}
});})(_STAR_parent_description_STAR__orig_val__12148_12501,_STAR_parent_description_STAR__temp_val__12149_12502,description__11279__auto____$1,_STAR_parent_description_STAR__orig_val__11836_12195,_STAR_parent_description_STAR__temp_val__11837_12196,description__11279__auto___12194))
,false)],null)));
var chunk__12151_12504 = null;
var count__12152_12505 = (0);
var i__12153_12506 = (0);
while(true){
if((i__12153_12506 < count__12152_12505)){
var component__11280__auto___12591 = cljs.core._nth.call(null,chunk__12151_12504,i__12153_12506);
speclj.components.install.call(null,component__11280__auto___12591,description__11279__auto____$1);


var G__12592 = seq__12150_12503;
var G__12593 = chunk__12151_12504;
var G__12594 = count__12152_12505;
var G__12595 = (i__12153_12506 + (1));
seq__12150_12503 = G__12592;
chunk__12151_12504 = G__12593;
count__12152_12505 = G__12594;
i__12153_12506 = G__12595;
continue;
} else {
var temp__5804__auto___12596 = cljs.core.seq.call(null,seq__12150_12503);
if(temp__5804__auto___12596){
var seq__12150_12597__$1 = temp__5804__auto___12596;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12150_12597__$1)){
var c__5525__auto___12598 = cljs.core.chunk_first.call(null,seq__12150_12597__$1);
var G__12599 = cljs.core.chunk_rest.call(null,seq__12150_12597__$1);
var G__12600 = c__5525__auto___12598;
var G__12601 = cljs.core.count.call(null,c__5525__auto___12598);
var G__12602 = (0);
seq__12150_12503 = G__12599;
chunk__12151_12504 = G__12600;
count__12152_12505 = G__12601;
i__12153_12506 = G__12602;
continue;
} else {
var component__11280__auto___12603 = cljs.core.first.call(null,seq__12150_12597__$1);
speclj.components.install.call(null,component__11280__auto___12603,description__11279__auto____$1);


var G__12604 = cljs.core.next.call(null,seq__12150_12597__$1);
var G__12605 = null;
var G__12606 = (0);
var G__12607 = (0);
seq__12150_12503 = G__12604;
chunk__12151_12504 = G__12605;
count__12152_12505 = G__12606;
i__12153_12506 = G__12607;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__12148_12501);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__11279__auto____$1);
}

return description__11279__auto____$1;
})()],null)));
var chunk__11840_12198 = null;
var count__11842_12199 = (0);
var i__11844_12200 = (0);
while(true){
if((i__11844_12200 < count__11842_12199)){
var component__11280__auto___12608 = cljs.core._nth.call(null,chunk__11840_12198,i__11844_12200);
speclj.components.install.call(null,component__11280__auto___12608,description__11279__auto___12194);


var G__12609 = seq__11838_12197;
var G__12610 = chunk__11840_12198;
var G__12611 = count__11842_12199;
var G__12612 = (i__11844_12200 + (1));
seq__11838_12197 = G__12609;
chunk__11840_12198 = G__12610;
count__11842_12199 = G__12611;
i__11844_12200 = G__12612;
continue;
} else {
var temp__5804__auto___12613 = cljs.core.seq.call(null,seq__11838_12197);
if(temp__5804__auto___12613){
var seq__11838_12614__$1 = temp__5804__auto___12613;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11838_12614__$1)){
var c__5525__auto___12615 = cljs.core.chunk_first.call(null,seq__11838_12614__$1);
var G__12616 = cljs.core.chunk_rest.call(null,seq__11838_12614__$1);
var G__12617 = c__5525__auto___12615;
var G__12618 = cljs.core.count.call(null,c__5525__auto___12615);
var G__12619 = (0);
seq__11838_12197 = G__12616;
chunk__11840_12198 = G__12617;
count__11842_12199 = G__12618;
i__11844_12200 = G__12619;
continue;
} else {
var component__11280__auto___12620 = cljs.core.first.call(null,seq__11838_12614__$1);
speclj.components.install.call(null,component__11280__auto___12620,description__11279__auto___12194);


var G__12621 = cljs.core.next.call(null,seq__11838_12614__$1);
var G__12622 = null;
var G__12623 = (0);
var G__12624 = (0);
seq__11838_12197 = G__12621;
chunk__11840_12198 = G__12622;
count__11842_12199 = G__12623;
i__11844_12200 = G__12624;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__11836_12195);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__11279__auto___12194);
}


//# sourceMappingURL=play_spec.js.map
