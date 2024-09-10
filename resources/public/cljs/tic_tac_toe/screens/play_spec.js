// Compiled by ClojureScript 1.11.132 {:optimizations :none}
goog.provide('tic_tac_toe.screens.play_spec');
goog.require('cljs.core');
goog.require('c3kit.wire.js');
goog.require('c3kit.wire.spec_helper');
goog.require('speclj.core');
goog.require('tic_tac_toe.render_screen');
goog.require('tic_tac_toe.screens.play');
tic_tac_toe.screens.play_spec.board_3 = new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(3),(4),(5),(6),(7),(8),(9)], null);
tic_tac_toe.screens.play_spec.board_4 = cljs.core.vec.call(null,cljs.core.range.call(null,(1),(17)));
if((typeof tic_tac_toe !== 'undefined') && (typeof tic_tac_toe.screens !== 'undefined') && (typeof tic_tac_toe.screens.play_spec !== 'undefined') && (typeof tic_tac_toe.screens.play_spec.state !== 'undefined')){
} else {
tic_tac_toe.screens.play_spec.state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"current-screen","current-screen",-1454713691),new cljs.core.Keyword(null,"play","play",-580418022),new cljs.core.Keyword(null,"board","board",-1907017633),tic_tac_toe.screens.play_spec.board_3,new cljs.core.Keyword(null,"game-state","game-state",935682735),new cljs.core.Keyword(null,"in-progress","in-progress",2126442630)], null));
}
var description__11246__auto___12033 = speclj.components.new_description.call(null,"play screen",false,"tic-tac-toe.screens.play-spec");
var _STAR_parent_description_STAR__orig_val__11803_12034 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__11804_12035 = description__11246__auto___12033;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__11804_12035);

try{var seq__11805_12036 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,4,(5),cljs.core.PersistentVector.EMPTY_NODE,[c3kit.wire.spec_helper.with_root_dom.call(null),(function (){var description__11246__auto____$1 = speclj.components.new_description.call(null,"play heading",false,"tic-tac-toe.screens.play-spec");
var _STAR_parent_description_STAR__orig_val__11935_12040 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__11936_12041 = description__11246__auto____$1;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__11936_12041);

try{var seq__11937_12042 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_characteristic.call(null,"prompts player x for move",((function (_STAR_parent_description_STAR__orig_val__11935_12040,_STAR_parent_description_STAR__temp_val__11936_12041,description__11246__auto____$1,_STAR_parent_description_STAR__orig_val__11803_12034,_STAR_parent_description_STAR__temp_val__11804_12035,description__11246__auto___12033){
return (function (){
cljs.core.swap_BANG_.call(null,tic_tac_toe.screens.play_spec.state,cljs.core.assoc,new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"x","x",2099068185));

c3kit.wire.spec_helper.render.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tic_tac_toe.render_screen.render_screen,tic_tac_toe.screens.play_spec.state], null));

var expected__11383__auto__ = "X's turn!";
var actual__11384__auto__ = c3kit.wire.spec_helper.text.call(null,"#play-heading");
if(cljs.core._EQ_.call(null,expected__11383__auto__,actual__11384__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__11383__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11351__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11351__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__11384__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11351__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11351__auto__);
}
})()," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__11935_12040,_STAR_parent_description_STAR__temp_val__11936_12041,description__11246__auto____$1,_STAR_parent_description_STAR__orig_val__11803_12034,_STAR_parent_description_STAR__temp_val__11804_12035,description__11246__auto___12033))
,false),speclj.components.new_characteristic.call(null,"prompts player o for move",((function (_STAR_parent_description_STAR__orig_val__11935_12040,_STAR_parent_description_STAR__temp_val__11936_12041,description__11246__auto____$1,_STAR_parent_description_STAR__orig_val__11803_12034,_STAR_parent_description_STAR__temp_val__11804_12035,description__11246__auto___12033){
return (function (){
cljs.core.swap_BANG_.call(null,tic_tac_toe.screens.play_spec.state,cljs.core.assoc,new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"o","o",-1350007228));

c3kit.wire.spec_helper.render.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tic_tac_toe.render_screen.render_screen,tic_tac_toe.screens.play_spec.state], null));

var expected__11383__auto__ = "O's turn!";
var actual__11384__auto__ = c3kit.wire.spec_helper.text.call(null,"#play-heading");
if(cljs.core._EQ_.call(null,expected__11383__auto__,actual__11384__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__11383__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11351__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11351__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__11384__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11351__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11351__auto__);
}
})()," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__11935_12040,_STAR_parent_description_STAR__temp_val__11936_12041,description__11246__auto____$1,_STAR_parent_description_STAR__orig_val__11803_12034,_STAR_parent_description_STAR__temp_val__11804_12035,description__11246__auto___12033))
,false),speclj.components.new_characteristic.call(null,"displays game state if game over",((function (_STAR_parent_description_STAR__orig_val__11935_12040,_STAR_parent_description_STAR__temp_val__11936_12041,description__11246__auto____$1,_STAR_parent_description_STAR__orig_val__11803_12034,_STAR_parent_description_STAR__temp_val__11804_12035,description__11246__auto___12033){
return (function (){
cljs.core.swap_BANG_.call(null,tic_tac_toe.screens.play_spec.state,cljs.core.assoc,new cljs.core.Keyword(null,"game-state","game-state",935682735),"X wins!");

c3kit.wire.spec_helper.render.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tic_tac_toe.render_screen.render_screen,tic_tac_toe.screens.play_spec.state], null));

var expected__11383__auto__ = "X wins!";
var actual__11384__auto__ = c3kit.wire.spec_helper.text.call(null,"#play-heading");
if(cljs.core._EQ_.call(null,expected__11383__auto__,actual__11384__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__11383__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11351__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11351__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__11384__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11351__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11351__auto__);
}
})()," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__11935_12040,_STAR_parent_description_STAR__temp_val__11936_12041,description__11246__auto____$1,_STAR_parent_description_STAR__orig_val__11803_12034,_STAR_parent_description_STAR__temp_val__11804_12035,description__11246__auto___12033))
,false)],null)));
var chunk__11938_12043 = null;
var count__11939_12044 = (0);
var i__11940_12045 = (0);
while(true){
if((i__11940_12045 < count__11939_12044)){
var component__11247__auto___12046 = cljs.core._nth.call(null,chunk__11938_12043,i__11940_12045);
speclj.components.install.call(null,component__11247__auto___12046,description__11246__auto____$1);


var G__12047 = seq__11937_12042;
var G__12048 = chunk__11938_12043;
var G__12049 = count__11939_12044;
var G__12050 = (i__11940_12045 + (1));
seq__11937_12042 = G__12047;
chunk__11938_12043 = G__12048;
count__11939_12044 = G__12049;
i__11940_12045 = G__12050;
continue;
} else {
var temp__5804__auto___12051 = cljs.core.seq.call(null,seq__11937_12042);
if(temp__5804__auto___12051){
var seq__11937_12052__$1 = temp__5804__auto___12051;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11937_12052__$1)){
var c__5525__auto___12053 = cljs.core.chunk_first.call(null,seq__11937_12052__$1);
var G__12054 = cljs.core.chunk_rest.call(null,seq__11937_12052__$1);
var G__12055 = c__5525__auto___12053;
var G__12056 = cljs.core.count.call(null,c__5525__auto___12053);
var G__12057 = (0);
seq__11937_12042 = G__12054;
chunk__11938_12043 = G__12055;
count__11939_12044 = G__12056;
i__11940_12045 = G__12057;
continue;
} else {
var component__11247__auto___12058 = cljs.core.first.call(null,seq__11937_12052__$1);
speclj.components.install.call(null,component__11247__auto___12058,description__11246__auto____$1);


var G__12059 = cljs.core.next.call(null,seq__11937_12052__$1);
var G__12060 = null;
var G__12061 = (0);
var G__12062 = (0);
seq__11937_12042 = G__12059;
chunk__11938_12043 = G__12060;
count__11939_12044 = G__12061;
i__11940_12045 = G__12062;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__11935_12040);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__11246__auto____$1);
}

return description__11246__auto____$1;
})(),(function (){var description__11246__auto____$1 = speclj.components.new_description.call(null,"3x3",false,"tic-tac-toe.screens.play-spec");
var _STAR_parent_description_STAR__orig_val__11941_12063 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__11942_12064 = description__11246__auto____$1;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__11942_12064);

try{var seq__11943_12065 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,8,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_before.call(null,((function (_STAR_parent_description_STAR__orig_val__11941_12063,_STAR_parent_description_STAR__temp_val__11942_12064,description__11246__auto____$1,_STAR_parent_description_STAR__orig_val__11803_12034,_STAR_parent_description_STAR__temp_val__11804_12035,description__11246__auto___12033){
return (function (){
cljs.core.reset_BANG_.call(null,tic_tac_toe.screens.play_spec.state,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"current-screen","current-screen",-1454713691),new cljs.core.Keyword(null,"play","play",-580418022),new cljs.core.Keyword(null,"board","board",-1907017633),tic_tac_toe.screens.play_spec.board_3,new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"x","x",2099068185)], null));

return c3kit.wire.spec_helper.render.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tic_tac_toe.render_screen.render_screen,tic_tac_toe.screens.play_spec.state], null));
});})(_STAR_parent_description_STAR__orig_val__11941_12063,_STAR_parent_description_STAR__temp_val__11942_12064,description__11246__auto____$1,_STAR_parent_description_STAR__orig_val__11803_12034,_STAR_parent_description_STAR__temp_val__11804_12035,description__11246__auto___12033))
),speclj.components.new_characteristic.call(null,"renders board",((function (_STAR_parent_description_STAR__orig_val__11941_12063,_STAR_parent_description_STAR__temp_val__11942_12064,description__11246__auto____$1,_STAR_parent_description_STAR__orig_val__11803_12034,_STAR_parent_description_STAR__temp_val__11804_12035,description__11246__auto___12033){
return (function (){
var expected__11383__auto___12069 = (9);
var actual__11384__auto___12070 = cljs.core.count.call(null,cljs.core.vec.call(null,c3kit.wire.js.query_selector_all.call(null,".board-square")));
if(cljs.core._EQ_.call(null,expected__11383__auto___12069,actual__11384__auto___12070)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__11383__auto___12069;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11351__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11351__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__11384__auto___12070;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11351__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11351__auto__);
}
})()," (using =)"].join('')));
}

var value__11746__auto___12071 = "#board-wrapper";
var node__11747__auto___12072 = c3kit.wire.spec_helper.select.call(null,value__11746__auto___12071);
if(cljs.core.truth_(node__11747__auto___12072)){
} else {
throw (new speclj.platform.SpecFailure(["Expected selector to find node: ",(function (){var temp__5806__auto__ = value__11746__auto___12071;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11351__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11351__auto__);
}
})()].join('')));
}

var value__11746__auto__ = ".three-grid";
var node__11747__auto__ = c3kit.wire.spec_helper.select.call(null,value__11746__auto__);
if(cljs.core.truth_(node__11747__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected selector to find node: ",(function (){var temp__5806__auto__ = value__11746__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11351__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11351__auto__);
}
})()].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__11941_12063,_STAR_parent_description_STAR__temp_val__11942_12064,description__11246__auto____$1,_STAR_parent_description_STAR__orig_val__11803_12034,_STAR_parent_description_STAR__temp_val__11804_12035,description__11246__auto___12033))
,false),speclj.components.new_characteristic.call(null,"buttons have IDs 0-8",((function (_STAR_parent_description_STAR__orig_val__11941_12063,_STAR_parent_description_STAR__temp_val__11942_12064,description__11246__auto____$1,_STAR_parent_description_STAR__orig_val__11803_12034,_STAR_parent_description_STAR__temp_val__11804_12035,description__11246__auto___12033){
return (function (){
var seq__11967 = cljs.core.seq.call(null,cljs.core.range.call(null,(9)));
var chunk__11968 = null;
var count__11969 = (0);
var i__11970 = (0);
while(true){
if((i__11970 < count__11969)){
var n = cljs.core._nth.call(null,chunk__11968,i__11970);
var value__11746__auto___12073 = ["#index-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join('');
var node__11747__auto___12074 = c3kit.wire.spec_helper.select.call(null,value__11746__auto___12073);
if(cljs.core.truth_(node__11747__auto___12074)){
} else {
throw (new speclj.platform.SpecFailure(["Expected selector to find node: ",(function (){var temp__5806__auto__ = value__11746__auto___12073;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11351__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11351__auto__);
}
})()].join('')));
}


var G__12075 = seq__11967;
var G__12076 = chunk__11968;
var G__12077 = count__11969;
var G__12078 = (i__11970 + (1));
seq__11967 = G__12075;
chunk__11968 = G__12076;
count__11969 = G__12077;
i__11970 = G__12078;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__11967);
if(temp__5804__auto__){
var seq__11967__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11967__$1)){
var c__5525__auto__ = cljs.core.chunk_first.call(null,seq__11967__$1);
var G__12079 = cljs.core.chunk_rest.call(null,seq__11967__$1);
var G__12080 = c__5525__auto__;
var G__12081 = cljs.core.count.call(null,c__5525__auto__);
var G__12082 = (0);
seq__11967 = G__12079;
chunk__11968 = G__12080;
count__11969 = G__12081;
i__11970 = G__12082;
continue;
} else {
var n = cljs.core.first.call(null,seq__11967__$1);
var value__11746__auto___12083 = ["#index-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join('');
var node__11747__auto___12084 = c3kit.wire.spec_helper.select.call(null,value__11746__auto___12083);
if(cljs.core.truth_(node__11747__auto___12084)){
} else {
throw (new speclj.platform.SpecFailure(["Expected selector to find node: ",(function (){var temp__5806__auto__ = value__11746__auto___12083;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11351__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11351__auto__);
}
})()].join('')));
}


var G__12085 = cljs.core.next.call(null,seq__11967__$1);
var G__12086 = null;
var G__12087 = (0);
var G__12088 = (0);
seq__11967 = G__12085;
chunk__11968 = G__12086;
count__11969 = G__12087;
i__11970 = G__12088;
continue;
}
} else {
return null;
}
}
break;
}
});})(_STAR_parent_description_STAR__orig_val__11941_12063,_STAR_parent_description_STAR__temp_val__11942_12064,description__11246__auto____$1,_STAR_parent_description_STAR__orig_val__11803_12034,_STAR_parent_description_STAR__temp_val__11804_12035,description__11246__auto___12033))
,false),speclj.components.new_characteristic.call(null,"clicking button updates board in state",((function (_STAR_parent_description_STAR__orig_val__11941_12063,_STAR_parent_description_STAR__temp_val__11942_12064,description__11246__auto____$1,_STAR_parent_description_STAR__orig_val__11803_12034,_STAR_parent_description_STAR__temp_val__11804_12035,description__11246__auto___12033){
return (function (){
var seq__11971 = cljs.core.seq.call(null,cljs.core.range.call(null,(9)));
var chunk__11972 = null;
var count__11973 = (0);
var i__11974 = (0);
while(true){
if((i__11974 < count__11973)){
var n = cljs.core._nth.call(null,chunk__11972,i__11974);
c3kit.wire.spec_helper.click_BANG_.call(null,["#index-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join(''));

var expected__11383__auto___12089 = cljs.core.assoc.call(null,tic_tac_toe.screens.play_spec.board_3,n,new cljs.core.Keyword(null,"x","x",2099068185));
var actual__11384__auto___12090 = new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.screens.play_spec.state));
if(cljs.core._EQ_.call(null,expected__11383__auto___12089,actual__11384__auto___12090)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__11383__auto___12089;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11351__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11351__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__11384__auto___12090;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11351__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11351__auto__);
}
})()," (using =)"].join('')));
}

cljs.core.swap_BANG_.call(null,tic_tac_toe.screens.play_spec.state,cljs.core.assoc,new cljs.core.Keyword(null,"board","board",-1907017633),tic_tac_toe.screens.play_spec.board_3,new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"x","x",2099068185));


var G__12091 = seq__11971;
var G__12092 = chunk__11972;
var G__12093 = count__11973;
var G__12094 = (i__11974 + (1));
seq__11971 = G__12091;
chunk__11972 = G__12092;
count__11973 = G__12093;
i__11974 = G__12094;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__11971);
if(temp__5804__auto__){
var seq__11971__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11971__$1)){
var c__5525__auto__ = cljs.core.chunk_first.call(null,seq__11971__$1);
var G__12095 = cljs.core.chunk_rest.call(null,seq__11971__$1);
var G__12096 = c__5525__auto__;
var G__12097 = cljs.core.count.call(null,c__5525__auto__);
var G__12098 = (0);
seq__11971 = G__12095;
chunk__11972 = G__12096;
count__11973 = G__12097;
i__11974 = G__12098;
continue;
} else {
var n = cljs.core.first.call(null,seq__11971__$1);
c3kit.wire.spec_helper.click_BANG_.call(null,["#index-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join(''));

var expected__11383__auto___12099 = cljs.core.assoc.call(null,tic_tac_toe.screens.play_spec.board_3,n,new cljs.core.Keyword(null,"x","x",2099068185));
var actual__11384__auto___12100 = new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.screens.play_spec.state));
if(cljs.core._EQ_.call(null,expected__11383__auto___12099,actual__11384__auto___12100)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__11383__auto___12099;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11351__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11351__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__11384__auto___12100;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11351__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11351__auto__);
}
})()," (using =)"].join('')));
}

cljs.core.swap_BANG_.call(null,tic_tac_toe.screens.play_spec.state,cljs.core.assoc,new cljs.core.Keyword(null,"board","board",-1907017633),tic_tac_toe.screens.play_spec.board_3,new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"x","x",2099068185));


var G__12101 = cljs.core.next.call(null,seq__11971__$1);
var G__12102 = null;
var G__12103 = (0);
var G__12104 = (0);
seq__11971 = G__12101;
chunk__11972 = G__12102;
count__11973 = G__12103;
i__11974 = G__12104;
continue;
}
} else {
return null;
}
}
break;
}
});})(_STAR_parent_description_STAR__orig_val__11941_12063,_STAR_parent_description_STAR__temp_val__11942_12064,description__11246__auto____$1,_STAR_parent_description_STAR__orig_val__11803_12034,_STAR_parent_description_STAR__temp_val__11804_12035,description__11246__auto___12033))
,false),speclj.components.new_characteristic.call(null,"clicking button swaps player in state",((function (_STAR_parent_description_STAR__orig_val__11941_12063,_STAR_parent_description_STAR__temp_val__11942_12064,description__11246__auto____$1,_STAR_parent_description_STAR__orig_val__11803_12034,_STAR_parent_description_STAR__temp_val__11804_12035,description__11246__auto___12033){
return (function (){
var seq__11975 = cljs.core.seq.call(null,cljs.core.range.call(null,(9)));
var chunk__11976 = null;
var count__11977 = (0);
var i__11978 = (0);
while(true){
if((i__11978 < count__11977)){
var n = cljs.core._nth.call(null,chunk__11976,i__11978);
c3kit.wire.spec_helper.click_BANG_.call(null,["#index-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join(''));

var expected__11383__auto___12105 = new cljs.core.Keyword(null,"o","o",-1350007228);
var actual__11384__auto___12106 = new cljs.core.Keyword(null,"player","player",-97687400).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.screens.play_spec.state));
if(cljs.core._EQ_.call(null,expected__11383__auto___12105,actual__11384__auto___12106)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__11383__auto___12105;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11351__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11351__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__11384__auto___12106;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11351__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11351__auto__);
}
})()," (using =)"].join('')));
}

cljs.core.swap_BANG_.call(null,tic_tac_toe.screens.play_spec.state,cljs.core.assoc,new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"x","x",2099068185));


var G__12107 = seq__11975;
var G__12108 = chunk__11976;
var G__12109 = count__11977;
var G__12110 = (i__11978 + (1));
seq__11975 = G__12107;
chunk__11976 = G__12108;
count__11977 = G__12109;
i__11978 = G__12110;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__11975);
if(temp__5804__auto__){
var seq__11975__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11975__$1)){
var c__5525__auto__ = cljs.core.chunk_first.call(null,seq__11975__$1);
var G__12111 = cljs.core.chunk_rest.call(null,seq__11975__$1);
var G__12112 = c__5525__auto__;
var G__12113 = cljs.core.count.call(null,c__5525__auto__);
var G__12114 = (0);
seq__11975 = G__12111;
chunk__11976 = G__12112;
count__11977 = G__12113;
i__11978 = G__12114;
continue;
} else {
var n = cljs.core.first.call(null,seq__11975__$1);
c3kit.wire.spec_helper.click_BANG_.call(null,["#index-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join(''));

var expected__11383__auto___12115 = new cljs.core.Keyword(null,"o","o",-1350007228);
var actual__11384__auto___12116 = new cljs.core.Keyword(null,"player","player",-97687400).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.screens.play_spec.state));
if(cljs.core._EQ_.call(null,expected__11383__auto___12115,actual__11384__auto___12116)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__11383__auto___12115;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11351__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11351__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__11384__auto___12116;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11351__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11351__auto__);
}
})()," (using =)"].join('')));
}

cljs.core.swap_BANG_.call(null,tic_tac_toe.screens.play_spec.state,cljs.core.assoc,new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"x","x",2099068185));


var G__12117 = cljs.core.next.call(null,seq__11975__$1);
var G__12118 = null;
var G__12119 = (0);
var G__12120 = (0);
seq__11975 = G__12117;
chunk__11976 = G__12118;
count__11977 = G__12119;
i__11978 = G__12120;
continue;
}
} else {
return null;
}
}
break;
}
});})(_STAR_parent_description_STAR__orig_val__11941_12063,_STAR_parent_description_STAR__temp_val__11942_12064,description__11246__auto____$1,_STAR_parent_description_STAR__orig_val__11803_12034,_STAR_parent_description_STAR__temp_val__11804_12035,description__11246__auto___12033))
,false),speclj.components.new_characteristic.call(null,"clicking button updates game-state in state",((function (_STAR_parent_description_STAR__orig_val__11941_12063,_STAR_parent_description_STAR__temp_val__11942_12064,description__11246__auto____$1,_STAR_parent_description_STAR__orig_val__11803_12034,_STAR_parent_description_STAR__temp_val__11804_12035,description__11246__auto___12033){
return (function (){
cljs.core.swap_BANG_.call(null,tic_tac_toe.screens.play_spec.state,cljs.core.assoc,new cljs.core.Keyword(null,"board","board",-1907017633),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"o","o",-1350007228),new cljs.core.Keyword(null,"o","o",-1350007228),(6),(7),(8),(9)], null));

c3kit.wire.spec_helper.click_BANG_.call(null,"#index-0");

var expected__11383__auto__ = "X wins!";
var actual__11384__auto__ = new cljs.core.Keyword(null,"game-state","game-state",935682735).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.screens.play_spec.state));
if(cljs.core._EQ_.call(null,expected__11383__auto__,actual__11384__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__11383__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11351__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11351__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__11384__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11351__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11351__auto__);
}
})()," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__11941_12063,_STAR_parent_description_STAR__temp_val__11942_12064,description__11246__auto____$1,_STAR_parent_description_STAR__orig_val__11803_12034,_STAR_parent_description_STAR__temp_val__11804_12035,description__11246__auto___12033))
,false),speclj.components.new_characteristic.call(null,"clicking button adds token to button HTML",((function (_STAR_parent_description_STAR__orig_val__11941_12063,_STAR_parent_description_STAR__temp_val__11942_12064,description__11246__auto____$1,_STAR_parent_description_STAR__orig_val__11803_12034,_STAR_parent_description_STAR__temp_val__11804_12035,description__11246__auto___12033){
return (function (){
var seq__11979 = cljs.core.seq.call(null,cljs.core.range.call(null,(9)));
var chunk__11980 = null;
var count__11981 = (0);
var i__11982 = (0);
while(true){
if((i__11982 < count__11981)){
var n = cljs.core._nth.call(null,chunk__11980,i__11982);
c3kit.wire.spec_helper.click_BANG_.call(null,["#index-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join(''));

var expected__11383__auto___12121 = "X";
var actual__11384__auto___12122 = c3kit.wire.spec_helper.text.call(null,["#index-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join(''));
if(cljs.core._EQ_.call(null,expected__11383__auto___12121,actual__11384__auto___12122)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__11383__auto___12121;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11351__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11351__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__11384__auto___12122;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11351__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11351__auto__);
}
})()," (using =)"].join('')));
}

cljs.core.reset_BANG_.call(null,tic_tac_toe.screens.play_spec.state,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"board","board",-1907017633),tic_tac_toe.screens.play_spec.board_3,new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"current-screen","current-screen",-1454713691),new cljs.core.Keyword(null,"play","play",-580418022)], null));


var G__12123 = seq__11979;
var G__12124 = chunk__11980;
var G__12125 = count__11981;
var G__12126 = (i__11982 + (1));
seq__11979 = G__12123;
chunk__11980 = G__12124;
count__11981 = G__12125;
i__11982 = G__12126;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__11979);
if(temp__5804__auto__){
var seq__11979__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11979__$1)){
var c__5525__auto__ = cljs.core.chunk_first.call(null,seq__11979__$1);
var G__12127 = cljs.core.chunk_rest.call(null,seq__11979__$1);
var G__12128 = c__5525__auto__;
var G__12129 = cljs.core.count.call(null,c__5525__auto__);
var G__12130 = (0);
seq__11979 = G__12127;
chunk__11980 = G__12128;
count__11981 = G__12129;
i__11982 = G__12130;
continue;
} else {
var n = cljs.core.first.call(null,seq__11979__$1);
c3kit.wire.spec_helper.click_BANG_.call(null,["#index-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join(''));

var expected__11383__auto___12131 = "X";
var actual__11384__auto___12132 = c3kit.wire.spec_helper.text.call(null,["#index-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join(''));
if(cljs.core._EQ_.call(null,expected__11383__auto___12131,actual__11384__auto___12132)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__11383__auto___12131;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11351__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11351__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__11384__auto___12132;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11351__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11351__auto__);
}
})()," (using =)"].join('')));
}

cljs.core.reset_BANG_.call(null,tic_tac_toe.screens.play_spec.state,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"board","board",-1907017633),tic_tac_toe.screens.play_spec.board_3,new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"current-screen","current-screen",-1454713691),new cljs.core.Keyword(null,"play","play",-580418022)], null));


var G__12133 = cljs.core.next.call(null,seq__11979__$1);
var G__12134 = null;
var G__12135 = (0);
var G__12136 = (0);
seq__11979 = G__12133;
chunk__11980 = G__12134;
count__11981 = G__12135;
i__11982 = G__12136;
continue;
}
} else {
return null;
}
}
break;
}
});})(_STAR_parent_description_STAR__orig_val__11941_12063,_STAR_parent_description_STAR__temp_val__11942_12064,description__11246__auto____$1,_STAR_parent_description_STAR__orig_val__11803_12034,_STAR_parent_description_STAR__temp_val__11804_12035,description__11246__auto___12033))
,false),speclj.components.new_characteristic.call(null,"clicking button disables button",((function (_STAR_parent_description_STAR__orig_val__11941_12063,_STAR_parent_description_STAR__temp_val__11942_12064,description__11246__auto____$1,_STAR_parent_description_STAR__orig_val__11803_12034,_STAR_parent_description_STAR__temp_val__11804_12035,description__11246__auto___12033){
return (function (){
var seq__11983 = cljs.core.seq.call(null,cljs.core.range.call(null,(9)));
var chunk__11984 = null;
var count__11985 = (0);
var i__11986 = (0);
while(true){
if((i__11986 < count__11985)){
var n = cljs.core._nth.call(null,chunk__11984,i__11986);
c3kit.wire.spec_helper.click_BANG_.call(null,["#index-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join(''));

var expected__11383__auto___12137 = true;
var actual__11384__auto___12138 = c3kit.wire.spec_helper.disabled_QMARK_.call(null,["#index-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join(''));
if(cljs.core._EQ_.call(null,expected__11383__auto___12137,actual__11384__auto___12138)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__11383__auto___12137;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11351__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11351__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__11384__auto___12138;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11351__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11351__auto__);
}
})()," (using =)"].join('')));
}

cljs.core.reset_BANG_.call(null,tic_tac_toe.screens.play_spec.state,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"board","board",-1907017633),tic_tac_toe.screens.play_spec.board_3,new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"current-screen","current-screen",-1454713691),new cljs.core.Keyword(null,"play","play",-580418022)], null));


var G__12139 = seq__11983;
var G__12140 = chunk__11984;
var G__12141 = count__11985;
var G__12142 = (i__11986 + (1));
seq__11983 = G__12139;
chunk__11984 = G__12140;
count__11985 = G__12141;
i__11986 = G__12142;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__11983);
if(temp__5804__auto__){
var seq__11983__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11983__$1)){
var c__5525__auto__ = cljs.core.chunk_first.call(null,seq__11983__$1);
var G__12143 = cljs.core.chunk_rest.call(null,seq__11983__$1);
var G__12144 = c__5525__auto__;
var G__12145 = cljs.core.count.call(null,c__5525__auto__);
var G__12146 = (0);
seq__11983 = G__12143;
chunk__11984 = G__12144;
count__11985 = G__12145;
i__11986 = G__12146;
continue;
} else {
var n = cljs.core.first.call(null,seq__11983__$1);
c3kit.wire.spec_helper.click_BANG_.call(null,["#index-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join(''));

var expected__11383__auto___12147 = true;
var actual__11384__auto___12148 = c3kit.wire.spec_helper.disabled_QMARK_.call(null,["#index-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join(''));
if(cljs.core._EQ_.call(null,expected__11383__auto___12147,actual__11384__auto___12148)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__11383__auto___12147;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11351__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11351__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__11384__auto___12148;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11351__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11351__auto__);
}
})()," (using =)"].join('')));
}

cljs.core.reset_BANG_.call(null,tic_tac_toe.screens.play_spec.state,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"board","board",-1907017633),tic_tac_toe.screens.play_spec.board_3,new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"current-screen","current-screen",-1454713691),new cljs.core.Keyword(null,"play","play",-580418022)], null));


var G__12149 = cljs.core.next.call(null,seq__11983__$1);
var G__12150 = null;
var G__12151 = (0);
var G__12152 = (0);
seq__11983 = G__12149;
chunk__11984 = G__12150;
count__11985 = G__12151;
i__11986 = G__12152;
continue;
}
} else {
return null;
}
}
break;
}
});})(_STAR_parent_description_STAR__orig_val__11941_12063,_STAR_parent_description_STAR__temp_val__11942_12064,description__11246__auto____$1,_STAR_parent_description_STAR__orig_val__11803_12034,_STAR_parent_description_STAR__temp_val__11804_12035,description__11246__auto___12033))
,false)],null)));
var chunk__11944_12066 = null;
var count__11945_12067 = (0);
var i__11946_12068 = (0);
while(true){
if((i__11946_12068 < count__11945_12067)){
var component__11247__auto___12153 = cljs.core._nth.call(null,chunk__11944_12066,i__11946_12068);
speclj.components.install.call(null,component__11247__auto___12153,description__11246__auto____$1);


var G__12154 = seq__11943_12065;
var G__12155 = chunk__11944_12066;
var G__12156 = count__11945_12067;
var G__12157 = (i__11946_12068 + (1));
seq__11943_12065 = G__12154;
chunk__11944_12066 = G__12155;
count__11945_12067 = G__12156;
i__11946_12068 = G__12157;
continue;
} else {
var temp__5804__auto___12158 = cljs.core.seq.call(null,seq__11943_12065);
if(temp__5804__auto___12158){
var seq__11943_12159__$1 = temp__5804__auto___12158;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11943_12159__$1)){
var c__5525__auto___12160 = cljs.core.chunk_first.call(null,seq__11943_12159__$1);
var G__12161 = cljs.core.chunk_rest.call(null,seq__11943_12159__$1);
var G__12162 = c__5525__auto___12160;
var G__12163 = cljs.core.count.call(null,c__5525__auto___12160);
var G__12164 = (0);
seq__11943_12065 = G__12161;
chunk__11944_12066 = G__12162;
count__11945_12067 = G__12163;
i__11946_12068 = G__12164;
continue;
} else {
var component__11247__auto___12165 = cljs.core.first.call(null,seq__11943_12159__$1);
speclj.components.install.call(null,component__11247__auto___12165,description__11246__auto____$1);


var G__12166 = cljs.core.next.call(null,seq__11943_12159__$1);
var G__12167 = null;
var G__12168 = (0);
var G__12169 = (0);
seq__11943_12065 = G__12166;
chunk__11944_12066 = G__12167;
count__11945_12067 = G__12168;
i__11946_12068 = G__12169;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__11941_12063);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__11246__auto____$1);
}

return description__11246__auto____$1;
})(),(function (){var description__11246__auto____$1 = speclj.components.new_description.call(null,"4x4",false,"tic-tac-toe.screens.play-spec");
var _STAR_parent_description_STAR__orig_val__11987_12170 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__11988_12171 = description__11246__auto____$1;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__11988_12171);

try{var seq__11989_12172 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,7,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_before.call(null,((function (_STAR_parent_description_STAR__orig_val__11987_12170,_STAR_parent_description_STAR__temp_val__11988_12171,description__11246__auto____$1,_STAR_parent_description_STAR__orig_val__11803_12034,_STAR_parent_description_STAR__temp_val__11804_12035,description__11246__auto___12033){
return (function (){
cljs.core.reset_BANG_.call(null,tic_tac_toe.screens.play_spec.state,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"current-screen","current-screen",-1454713691),new cljs.core.Keyword(null,"play","play",-580418022),new cljs.core.Keyword(null,"board","board",-1907017633),tic_tac_toe.screens.play_spec.board_4,new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"x","x",2099068185)], null));

return c3kit.wire.spec_helper.render.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tic_tac_toe.render_screen.render_screen,tic_tac_toe.screens.play_spec.state], null));
});})(_STAR_parent_description_STAR__orig_val__11987_12170,_STAR_parent_description_STAR__temp_val__11988_12171,description__11246__auto____$1,_STAR_parent_description_STAR__orig_val__11803_12034,_STAR_parent_description_STAR__temp_val__11804_12035,description__11246__auto___12033))
),speclj.components.new_characteristic.call(null,"renders board",((function (_STAR_parent_description_STAR__orig_val__11987_12170,_STAR_parent_description_STAR__temp_val__11988_12171,description__11246__auto____$1,_STAR_parent_description_STAR__orig_val__11803_12034,_STAR_parent_description_STAR__temp_val__11804_12035,description__11246__auto___12033){
return (function (){
var expected__11383__auto___12176 = (16);
var actual__11384__auto___12177 = cljs.core.count.call(null,cljs.core.vec.call(null,c3kit.wire.js.query_selector_all.call(null,".board-square")));
if(cljs.core._EQ_.call(null,expected__11383__auto___12176,actual__11384__auto___12177)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__11383__auto___12176;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11351__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11351__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__11384__auto___12177;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11351__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11351__auto__);
}
})()," (using =)"].join('')));
}

var value__11746__auto___12178 = "#board-wrapper";
var node__11747__auto___12179 = c3kit.wire.spec_helper.select.call(null,value__11746__auto___12178);
if(cljs.core.truth_(node__11747__auto___12179)){
} else {
throw (new speclj.platform.SpecFailure(["Expected selector to find node: ",(function (){var temp__5806__auto__ = value__11746__auto___12178;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11351__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11351__auto__);
}
})()].join('')));
}

var value__11746__auto__ = ".four-grid";
var node__11747__auto__ = c3kit.wire.spec_helper.select.call(null,value__11746__auto__);
if(cljs.core.truth_(node__11747__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected selector to find node: ",(function (){var temp__5806__auto__ = value__11746__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11351__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11351__auto__);
}
})()].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__11987_12170,_STAR_parent_description_STAR__temp_val__11988_12171,description__11246__auto____$1,_STAR_parent_description_STAR__orig_val__11803_12034,_STAR_parent_description_STAR__temp_val__11804_12035,description__11246__auto___12033))
,false),speclj.components.new_characteristic.call(null,"buttons have IDs 0-15",((function (_STAR_parent_description_STAR__orig_val__11987_12170,_STAR_parent_description_STAR__temp_val__11988_12171,description__11246__auto____$1,_STAR_parent_description_STAR__orig_val__11803_12034,_STAR_parent_description_STAR__temp_val__11804_12035,description__11246__auto___12033){
return (function (){
var seq__12013 = cljs.core.seq.call(null,cljs.core.range.call(null,(16)));
var chunk__12014 = null;
var count__12015 = (0);
var i__12016 = (0);
while(true){
if((i__12016 < count__12015)){
var n = cljs.core._nth.call(null,chunk__12014,i__12016);
var value__11746__auto___12180 = ["#index-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join('');
var node__11747__auto___12181 = c3kit.wire.spec_helper.select.call(null,value__11746__auto___12180);
if(cljs.core.truth_(node__11747__auto___12181)){
} else {
throw (new speclj.platform.SpecFailure(["Expected selector to find node: ",(function (){var temp__5806__auto__ = value__11746__auto___12180;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11351__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11351__auto__);
}
})()].join('')));
}


var G__12182 = seq__12013;
var G__12183 = chunk__12014;
var G__12184 = count__12015;
var G__12185 = (i__12016 + (1));
seq__12013 = G__12182;
chunk__12014 = G__12183;
count__12015 = G__12184;
i__12016 = G__12185;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__12013);
if(temp__5804__auto__){
var seq__12013__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12013__$1)){
var c__5525__auto__ = cljs.core.chunk_first.call(null,seq__12013__$1);
var G__12186 = cljs.core.chunk_rest.call(null,seq__12013__$1);
var G__12187 = c__5525__auto__;
var G__12188 = cljs.core.count.call(null,c__5525__auto__);
var G__12189 = (0);
seq__12013 = G__12186;
chunk__12014 = G__12187;
count__12015 = G__12188;
i__12016 = G__12189;
continue;
} else {
var n = cljs.core.first.call(null,seq__12013__$1);
var value__11746__auto___12190 = ["#index-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join('');
var node__11747__auto___12191 = c3kit.wire.spec_helper.select.call(null,value__11746__auto___12190);
if(cljs.core.truth_(node__11747__auto___12191)){
} else {
throw (new speclj.platform.SpecFailure(["Expected selector to find node: ",(function (){var temp__5806__auto__ = value__11746__auto___12190;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11351__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11351__auto__);
}
})()].join('')));
}


var G__12192 = cljs.core.next.call(null,seq__12013__$1);
var G__12193 = null;
var G__12194 = (0);
var G__12195 = (0);
seq__12013 = G__12192;
chunk__12014 = G__12193;
count__12015 = G__12194;
i__12016 = G__12195;
continue;
}
} else {
return null;
}
}
break;
}
});})(_STAR_parent_description_STAR__orig_val__11987_12170,_STAR_parent_description_STAR__temp_val__11988_12171,description__11246__auto____$1,_STAR_parent_description_STAR__orig_val__11803_12034,_STAR_parent_description_STAR__temp_val__11804_12035,description__11246__auto___12033))
,false),speclj.components.new_characteristic.call(null,"clicking button updates board in state",((function (_STAR_parent_description_STAR__orig_val__11987_12170,_STAR_parent_description_STAR__temp_val__11988_12171,description__11246__auto____$1,_STAR_parent_description_STAR__orig_val__11803_12034,_STAR_parent_description_STAR__temp_val__11804_12035,description__11246__auto___12033){
return (function (){
var seq__12017 = cljs.core.seq.call(null,cljs.core.range.call(null,(16)));
var chunk__12018 = null;
var count__12019 = (0);
var i__12020 = (0);
while(true){
if((i__12020 < count__12019)){
var n = cljs.core._nth.call(null,chunk__12018,i__12020);
c3kit.wire.spec_helper.click_BANG_.call(null,["#index-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join(''));

var expected__11383__auto___12196 = cljs.core.assoc.call(null,tic_tac_toe.screens.play_spec.board_4,n,new cljs.core.Keyword(null,"x","x",2099068185));
var actual__11384__auto___12197 = new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.screens.play_spec.state));
if(cljs.core._EQ_.call(null,expected__11383__auto___12196,actual__11384__auto___12197)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__11383__auto___12196;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11351__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11351__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__11384__auto___12197;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11351__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11351__auto__);
}
})()," (using =)"].join('')));
}

cljs.core.swap_BANG_.call(null,tic_tac_toe.screens.play_spec.state,cljs.core.assoc,new cljs.core.Keyword(null,"board","board",-1907017633),tic_tac_toe.screens.play_spec.board_4,new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"x","x",2099068185));


var G__12198 = seq__12017;
var G__12199 = chunk__12018;
var G__12200 = count__12019;
var G__12201 = (i__12020 + (1));
seq__12017 = G__12198;
chunk__12018 = G__12199;
count__12019 = G__12200;
i__12020 = G__12201;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__12017);
if(temp__5804__auto__){
var seq__12017__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12017__$1)){
var c__5525__auto__ = cljs.core.chunk_first.call(null,seq__12017__$1);
var G__12202 = cljs.core.chunk_rest.call(null,seq__12017__$1);
var G__12203 = c__5525__auto__;
var G__12204 = cljs.core.count.call(null,c__5525__auto__);
var G__12205 = (0);
seq__12017 = G__12202;
chunk__12018 = G__12203;
count__12019 = G__12204;
i__12020 = G__12205;
continue;
} else {
var n = cljs.core.first.call(null,seq__12017__$1);
c3kit.wire.spec_helper.click_BANG_.call(null,["#index-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join(''));

var expected__11383__auto___12206 = cljs.core.assoc.call(null,tic_tac_toe.screens.play_spec.board_4,n,new cljs.core.Keyword(null,"x","x",2099068185));
var actual__11384__auto___12207 = new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.screens.play_spec.state));
if(cljs.core._EQ_.call(null,expected__11383__auto___12206,actual__11384__auto___12207)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__11383__auto___12206;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11351__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11351__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__11384__auto___12207;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11351__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11351__auto__);
}
})()," (using =)"].join('')));
}

cljs.core.swap_BANG_.call(null,tic_tac_toe.screens.play_spec.state,cljs.core.assoc,new cljs.core.Keyword(null,"board","board",-1907017633),tic_tac_toe.screens.play_spec.board_4,new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"x","x",2099068185));


var G__12208 = cljs.core.next.call(null,seq__12017__$1);
var G__12209 = null;
var G__12210 = (0);
var G__12211 = (0);
seq__12017 = G__12208;
chunk__12018 = G__12209;
count__12019 = G__12210;
i__12020 = G__12211;
continue;
}
} else {
return null;
}
}
break;
}
});})(_STAR_parent_description_STAR__orig_val__11987_12170,_STAR_parent_description_STAR__temp_val__11988_12171,description__11246__auto____$1,_STAR_parent_description_STAR__orig_val__11803_12034,_STAR_parent_description_STAR__temp_val__11804_12035,description__11246__auto___12033))
,false),speclj.components.new_characteristic.call(null,"clicking button swaps player in state",((function (_STAR_parent_description_STAR__orig_val__11987_12170,_STAR_parent_description_STAR__temp_val__11988_12171,description__11246__auto____$1,_STAR_parent_description_STAR__orig_val__11803_12034,_STAR_parent_description_STAR__temp_val__11804_12035,description__11246__auto___12033){
return (function (){
var seq__12021 = cljs.core.seq.call(null,cljs.core.range.call(null,(16)));
var chunk__12022 = null;
var count__12023 = (0);
var i__12024 = (0);
while(true){
if((i__12024 < count__12023)){
var n = cljs.core._nth.call(null,chunk__12022,i__12024);
c3kit.wire.spec_helper.click_BANG_.call(null,["#index-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join(''));

var expected__11383__auto___12212 = new cljs.core.Keyword(null,"o","o",-1350007228);
var actual__11384__auto___12213 = new cljs.core.Keyword(null,"player","player",-97687400).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.screens.play_spec.state));
if(cljs.core._EQ_.call(null,expected__11383__auto___12212,actual__11384__auto___12213)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__11383__auto___12212;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11351__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11351__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__11384__auto___12213;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11351__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11351__auto__);
}
})()," (using =)"].join('')));
}

cljs.core.swap_BANG_.call(null,tic_tac_toe.screens.play_spec.state,cljs.core.assoc,new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"x","x",2099068185));


var G__12214 = seq__12021;
var G__12215 = chunk__12022;
var G__12216 = count__12023;
var G__12217 = (i__12024 + (1));
seq__12021 = G__12214;
chunk__12022 = G__12215;
count__12023 = G__12216;
i__12024 = G__12217;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__12021);
if(temp__5804__auto__){
var seq__12021__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12021__$1)){
var c__5525__auto__ = cljs.core.chunk_first.call(null,seq__12021__$1);
var G__12218 = cljs.core.chunk_rest.call(null,seq__12021__$1);
var G__12219 = c__5525__auto__;
var G__12220 = cljs.core.count.call(null,c__5525__auto__);
var G__12221 = (0);
seq__12021 = G__12218;
chunk__12022 = G__12219;
count__12023 = G__12220;
i__12024 = G__12221;
continue;
} else {
var n = cljs.core.first.call(null,seq__12021__$1);
c3kit.wire.spec_helper.click_BANG_.call(null,["#index-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join(''));

var expected__11383__auto___12222 = new cljs.core.Keyword(null,"o","o",-1350007228);
var actual__11384__auto___12223 = new cljs.core.Keyword(null,"player","player",-97687400).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.screens.play_spec.state));
if(cljs.core._EQ_.call(null,expected__11383__auto___12222,actual__11384__auto___12223)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__11383__auto___12222;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11351__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11351__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__11384__auto___12223;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11351__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11351__auto__);
}
})()," (using =)"].join('')));
}

cljs.core.swap_BANG_.call(null,tic_tac_toe.screens.play_spec.state,cljs.core.assoc,new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"x","x",2099068185));


var G__12224 = cljs.core.next.call(null,seq__12021__$1);
var G__12225 = null;
var G__12226 = (0);
var G__12227 = (0);
seq__12021 = G__12224;
chunk__12022 = G__12225;
count__12023 = G__12226;
i__12024 = G__12227;
continue;
}
} else {
return null;
}
}
break;
}
});})(_STAR_parent_description_STAR__orig_val__11987_12170,_STAR_parent_description_STAR__temp_val__11988_12171,description__11246__auto____$1,_STAR_parent_description_STAR__orig_val__11803_12034,_STAR_parent_description_STAR__temp_val__11804_12035,description__11246__auto___12033))
,false),speclj.components.new_characteristic.call(null,"clicking button adds token to button HTML",((function (_STAR_parent_description_STAR__orig_val__11987_12170,_STAR_parent_description_STAR__temp_val__11988_12171,description__11246__auto____$1,_STAR_parent_description_STAR__orig_val__11803_12034,_STAR_parent_description_STAR__temp_val__11804_12035,description__11246__auto___12033){
return (function (){
var seq__12025 = cljs.core.seq.call(null,cljs.core.range.call(null,(16)));
var chunk__12026 = null;
var count__12027 = (0);
var i__12028 = (0);
while(true){
if((i__12028 < count__12027)){
var n = cljs.core._nth.call(null,chunk__12026,i__12028);
c3kit.wire.spec_helper.click_BANG_.call(null,["#index-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join(''));

var expected__11383__auto___12228 = "X";
var actual__11384__auto___12229 = c3kit.wire.spec_helper.text.call(null,["#index-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join(''));
if(cljs.core._EQ_.call(null,expected__11383__auto___12228,actual__11384__auto___12229)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__11383__auto___12228;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11351__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11351__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__11384__auto___12229;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11351__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11351__auto__);
}
})()," (using =)"].join('')));
}

cljs.core.reset_BANG_.call(null,tic_tac_toe.screens.play_spec.state,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"board","board",-1907017633),tic_tac_toe.screens.play_spec.board_4,new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"current-screen","current-screen",-1454713691),new cljs.core.Keyword(null,"play","play",-580418022)], null));


var G__12230 = seq__12025;
var G__12231 = chunk__12026;
var G__12232 = count__12027;
var G__12233 = (i__12028 + (1));
seq__12025 = G__12230;
chunk__12026 = G__12231;
count__12027 = G__12232;
i__12028 = G__12233;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__12025);
if(temp__5804__auto__){
var seq__12025__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12025__$1)){
var c__5525__auto__ = cljs.core.chunk_first.call(null,seq__12025__$1);
var G__12234 = cljs.core.chunk_rest.call(null,seq__12025__$1);
var G__12235 = c__5525__auto__;
var G__12236 = cljs.core.count.call(null,c__5525__auto__);
var G__12237 = (0);
seq__12025 = G__12234;
chunk__12026 = G__12235;
count__12027 = G__12236;
i__12028 = G__12237;
continue;
} else {
var n = cljs.core.first.call(null,seq__12025__$1);
c3kit.wire.spec_helper.click_BANG_.call(null,["#index-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join(''));

var expected__11383__auto___12238 = "X";
var actual__11384__auto___12239 = c3kit.wire.spec_helper.text.call(null,["#index-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join(''));
if(cljs.core._EQ_.call(null,expected__11383__auto___12238,actual__11384__auto___12239)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__11383__auto___12238;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11351__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11351__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__11384__auto___12239;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11351__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11351__auto__);
}
})()," (using =)"].join('')));
}

cljs.core.reset_BANG_.call(null,tic_tac_toe.screens.play_spec.state,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"board","board",-1907017633),tic_tac_toe.screens.play_spec.board_4,new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"current-screen","current-screen",-1454713691),new cljs.core.Keyword(null,"play","play",-580418022)], null));


var G__12240 = cljs.core.next.call(null,seq__12025__$1);
var G__12241 = null;
var G__12242 = (0);
var G__12243 = (0);
seq__12025 = G__12240;
chunk__12026 = G__12241;
count__12027 = G__12242;
i__12028 = G__12243;
continue;
}
} else {
return null;
}
}
break;
}
});})(_STAR_parent_description_STAR__orig_val__11987_12170,_STAR_parent_description_STAR__temp_val__11988_12171,description__11246__auto____$1,_STAR_parent_description_STAR__orig_val__11803_12034,_STAR_parent_description_STAR__temp_val__11804_12035,description__11246__auto___12033))
,false),speclj.components.new_characteristic.call(null,"clicking button disables button",((function (_STAR_parent_description_STAR__orig_val__11987_12170,_STAR_parent_description_STAR__temp_val__11988_12171,description__11246__auto____$1,_STAR_parent_description_STAR__orig_val__11803_12034,_STAR_parent_description_STAR__temp_val__11804_12035,description__11246__auto___12033){
return (function (){
var seq__12029 = cljs.core.seq.call(null,cljs.core.range.call(null,(16)));
var chunk__12030 = null;
var count__12031 = (0);
var i__12032 = (0);
while(true){
if((i__12032 < count__12031)){
var n = cljs.core._nth.call(null,chunk__12030,i__12032);
c3kit.wire.spec_helper.click_BANG_.call(null,["#index-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join(''));

var expected__11383__auto___12244 = true;
var actual__11384__auto___12245 = c3kit.wire.spec_helper.disabled_QMARK_.call(null,["#index-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join(''));
if(cljs.core._EQ_.call(null,expected__11383__auto___12244,actual__11384__auto___12245)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__11383__auto___12244;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11351__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11351__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__11384__auto___12245;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11351__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11351__auto__);
}
})()," (using =)"].join('')));
}

cljs.core.reset_BANG_.call(null,tic_tac_toe.screens.play_spec.state,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"board","board",-1907017633),tic_tac_toe.screens.play_spec.board_4,new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"current-screen","current-screen",-1454713691),new cljs.core.Keyword(null,"play","play",-580418022)], null));


var G__12246 = seq__12029;
var G__12247 = chunk__12030;
var G__12248 = count__12031;
var G__12249 = (i__12032 + (1));
seq__12029 = G__12246;
chunk__12030 = G__12247;
count__12031 = G__12248;
i__12032 = G__12249;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__12029);
if(temp__5804__auto__){
var seq__12029__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12029__$1)){
var c__5525__auto__ = cljs.core.chunk_first.call(null,seq__12029__$1);
var G__12250 = cljs.core.chunk_rest.call(null,seq__12029__$1);
var G__12251 = c__5525__auto__;
var G__12252 = cljs.core.count.call(null,c__5525__auto__);
var G__12253 = (0);
seq__12029 = G__12250;
chunk__12030 = G__12251;
count__12031 = G__12252;
i__12032 = G__12253;
continue;
} else {
var n = cljs.core.first.call(null,seq__12029__$1);
c3kit.wire.spec_helper.click_BANG_.call(null,["#index-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join(''));

var expected__11383__auto___12254 = true;
var actual__11384__auto___12255 = c3kit.wire.spec_helper.disabled_QMARK_.call(null,["#index-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join(''));
if(cljs.core._EQ_.call(null,expected__11383__auto___12254,actual__11384__auto___12255)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__11383__auto___12254;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11351__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11351__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__11384__auto___12255;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11351__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11351__auto__);
}
})()," (using =)"].join('')));
}

cljs.core.reset_BANG_.call(null,tic_tac_toe.screens.play_spec.state,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"board","board",-1907017633),tic_tac_toe.screens.play_spec.board_4,new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"current-screen","current-screen",-1454713691),new cljs.core.Keyword(null,"play","play",-580418022)], null));


var G__12256 = cljs.core.next.call(null,seq__12029__$1);
var G__12257 = null;
var G__12258 = (0);
var G__12259 = (0);
seq__12029 = G__12256;
chunk__12030 = G__12257;
count__12031 = G__12258;
i__12032 = G__12259;
continue;
}
} else {
return null;
}
}
break;
}
});})(_STAR_parent_description_STAR__orig_val__11987_12170,_STAR_parent_description_STAR__temp_val__11988_12171,description__11246__auto____$1,_STAR_parent_description_STAR__orig_val__11803_12034,_STAR_parent_description_STAR__temp_val__11804_12035,description__11246__auto___12033))
,false)],null)));
var chunk__11990_12173 = null;
var count__11991_12174 = (0);
var i__11992_12175 = (0);
while(true){
if((i__11992_12175 < count__11991_12174)){
var component__11247__auto___12260 = cljs.core._nth.call(null,chunk__11990_12173,i__11992_12175);
speclj.components.install.call(null,component__11247__auto___12260,description__11246__auto____$1);


var G__12261 = seq__11989_12172;
var G__12262 = chunk__11990_12173;
var G__12263 = count__11991_12174;
var G__12264 = (i__11992_12175 + (1));
seq__11989_12172 = G__12261;
chunk__11990_12173 = G__12262;
count__11991_12174 = G__12263;
i__11992_12175 = G__12264;
continue;
} else {
var temp__5804__auto___12265 = cljs.core.seq.call(null,seq__11989_12172);
if(temp__5804__auto___12265){
var seq__11989_12266__$1 = temp__5804__auto___12265;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11989_12266__$1)){
var c__5525__auto___12267 = cljs.core.chunk_first.call(null,seq__11989_12266__$1);
var G__12268 = cljs.core.chunk_rest.call(null,seq__11989_12266__$1);
var G__12269 = c__5525__auto___12267;
var G__12270 = cljs.core.count.call(null,c__5525__auto___12267);
var G__12271 = (0);
seq__11989_12172 = G__12268;
chunk__11990_12173 = G__12269;
count__11991_12174 = G__12270;
i__11992_12175 = G__12271;
continue;
} else {
var component__11247__auto___12272 = cljs.core.first.call(null,seq__11989_12266__$1);
speclj.components.install.call(null,component__11247__auto___12272,description__11246__auto____$1);


var G__12273 = cljs.core.next.call(null,seq__11989_12266__$1);
var G__12274 = null;
var G__12275 = (0);
var G__12276 = (0);
seq__11989_12172 = G__12273;
chunk__11990_12173 = G__12274;
count__11991_12174 = G__12275;
i__11992_12175 = G__12276;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__11987_12170);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__11246__auto____$1);
}

return description__11246__auto____$1;
})()],null)));
var chunk__11807_12037 = null;
var count__11808_12038 = (0);
var i__11809_12039 = (0);
while(true){
if((i__11809_12039 < count__11808_12038)){
var component__11247__auto___12277 = cljs.core._nth.call(null,chunk__11807_12037,i__11809_12039);
speclj.components.install.call(null,component__11247__auto___12277,description__11246__auto___12033);


var G__12278 = seq__11805_12036;
var G__12279 = chunk__11807_12037;
var G__12280 = count__11808_12038;
var G__12281 = (i__11809_12039 + (1));
seq__11805_12036 = G__12278;
chunk__11807_12037 = G__12279;
count__11808_12038 = G__12280;
i__11809_12039 = G__12281;
continue;
} else {
var temp__5804__auto___12282 = cljs.core.seq.call(null,seq__11805_12036);
if(temp__5804__auto___12282){
var seq__11805_12283__$1 = temp__5804__auto___12282;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11805_12283__$1)){
var c__5525__auto___12284 = cljs.core.chunk_first.call(null,seq__11805_12283__$1);
var G__12285 = cljs.core.chunk_rest.call(null,seq__11805_12283__$1);
var G__12286 = c__5525__auto___12284;
var G__12287 = cljs.core.count.call(null,c__5525__auto___12284);
var G__12288 = (0);
seq__11805_12036 = G__12285;
chunk__11807_12037 = G__12286;
count__11808_12038 = G__12287;
i__11809_12039 = G__12288;
continue;
} else {
var component__11247__auto___12289 = cljs.core.first.call(null,seq__11805_12283__$1);
speclj.components.install.call(null,component__11247__auto___12289,description__11246__auto___12033);


var G__12290 = cljs.core.next.call(null,seq__11805_12283__$1);
var G__12291 = null;
var G__12292 = (0);
var G__12293 = (0);
seq__11805_12036 = G__12290;
chunk__11807_12037 = G__12291;
count__11808_12038 = G__12292;
i__11809_12039 = G__12293;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__11803_12034);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__11246__auto___12033);
}


//# sourceMappingURL=play_spec.js.map
