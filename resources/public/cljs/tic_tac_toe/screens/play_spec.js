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
var description__11252__auto___12039 = speclj.components.new_description.call(null,"play screen",false,"tic-tac-toe.screens.play-spec");
var _STAR_parent_description_STAR__orig_val__11809_12040 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__11810_12041 = description__11252__auto___12039;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__11810_12041);

try{var seq__11811_12042 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,4,(5),cljs.core.PersistentVector.EMPTY_NODE,[c3kit.wire.spec_helper.with_root_dom.call(null),(function (){var description__11252__auto____$1 = speclj.components.new_description.call(null,"play heading",false,"tic-tac-toe.screens.play-spec");
var _STAR_parent_description_STAR__orig_val__11941_12046 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__11942_12047 = description__11252__auto____$1;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__11942_12047);

try{var seq__11943_12048 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_characteristic.call(null,"prompts player x for move",((function (_STAR_parent_description_STAR__orig_val__11941_12046,_STAR_parent_description_STAR__temp_val__11942_12047,description__11252__auto____$1,_STAR_parent_description_STAR__orig_val__11809_12040,_STAR_parent_description_STAR__temp_val__11810_12041,description__11252__auto___12039){
return (function (){
cljs.core.swap_BANG_.call(null,tic_tac_toe.screens.play_spec.state,cljs.core.assoc,new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"x","x",2099068185));

c3kit.wire.spec_helper.render.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tic_tac_toe.render_screen.render_screen,tic_tac_toe.screens.play_spec.state], null));

var expected__11389__auto__ = "X's turn!";
var actual__11390__auto__ = c3kit.wire.spec_helper.text.call(null,"#play-heading");
if(cljs.core._EQ_.call(null,expected__11389__auto__,actual__11390__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__11389__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11357__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11357__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__11390__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11357__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11357__auto__);
}
})()," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__11941_12046,_STAR_parent_description_STAR__temp_val__11942_12047,description__11252__auto____$1,_STAR_parent_description_STAR__orig_val__11809_12040,_STAR_parent_description_STAR__temp_val__11810_12041,description__11252__auto___12039))
,false),speclj.components.new_characteristic.call(null,"prompts player o for move",((function (_STAR_parent_description_STAR__orig_val__11941_12046,_STAR_parent_description_STAR__temp_val__11942_12047,description__11252__auto____$1,_STAR_parent_description_STAR__orig_val__11809_12040,_STAR_parent_description_STAR__temp_val__11810_12041,description__11252__auto___12039){
return (function (){
cljs.core.swap_BANG_.call(null,tic_tac_toe.screens.play_spec.state,cljs.core.assoc,new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"o","o",-1350007228));

c3kit.wire.spec_helper.render.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tic_tac_toe.render_screen.render_screen,tic_tac_toe.screens.play_spec.state], null));

var expected__11389__auto__ = "O's turn!";
var actual__11390__auto__ = c3kit.wire.spec_helper.text.call(null,"#play-heading");
if(cljs.core._EQ_.call(null,expected__11389__auto__,actual__11390__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__11389__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11357__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11357__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__11390__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11357__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11357__auto__);
}
})()," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__11941_12046,_STAR_parent_description_STAR__temp_val__11942_12047,description__11252__auto____$1,_STAR_parent_description_STAR__orig_val__11809_12040,_STAR_parent_description_STAR__temp_val__11810_12041,description__11252__auto___12039))
,false),speclj.components.new_characteristic.call(null,"displays game state if game over",((function (_STAR_parent_description_STAR__orig_val__11941_12046,_STAR_parent_description_STAR__temp_val__11942_12047,description__11252__auto____$1,_STAR_parent_description_STAR__orig_val__11809_12040,_STAR_parent_description_STAR__temp_val__11810_12041,description__11252__auto___12039){
return (function (){
cljs.core.swap_BANG_.call(null,tic_tac_toe.screens.play_spec.state,cljs.core.assoc,new cljs.core.Keyword(null,"game-state","game-state",935682735),"X wins!");

c3kit.wire.spec_helper.render.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tic_tac_toe.render_screen.render_screen,tic_tac_toe.screens.play_spec.state], null));

var expected__11389__auto__ = "X wins!";
var actual__11390__auto__ = c3kit.wire.spec_helper.text.call(null,"#play-heading");
if(cljs.core._EQ_.call(null,expected__11389__auto__,actual__11390__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__11389__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11357__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11357__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__11390__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11357__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11357__auto__);
}
})()," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__11941_12046,_STAR_parent_description_STAR__temp_val__11942_12047,description__11252__auto____$1,_STAR_parent_description_STAR__orig_val__11809_12040,_STAR_parent_description_STAR__temp_val__11810_12041,description__11252__auto___12039))
,false)],null)));
var chunk__11944_12049 = null;
var count__11945_12050 = (0);
var i__11946_12051 = (0);
while(true){
if((i__11946_12051 < count__11945_12050)){
var component__11253__auto___12052 = cljs.core._nth.call(null,chunk__11944_12049,i__11946_12051);
speclj.components.install.call(null,component__11253__auto___12052,description__11252__auto____$1);


var G__12053 = seq__11943_12048;
var G__12054 = chunk__11944_12049;
var G__12055 = count__11945_12050;
var G__12056 = (i__11946_12051 + (1));
seq__11943_12048 = G__12053;
chunk__11944_12049 = G__12054;
count__11945_12050 = G__12055;
i__11946_12051 = G__12056;
continue;
} else {
var temp__5804__auto___12057 = cljs.core.seq.call(null,seq__11943_12048);
if(temp__5804__auto___12057){
var seq__11943_12058__$1 = temp__5804__auto___12057;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11943_12058__$1)){
var c__5525__auto___12059 = cljs.core.chunk_first.call(null,seq__11943_12058__$1);
var G__12060 = cljs.core.chunk_rest.call(null,seq__11943_12058__$1);
var G__12061 = c__5525__auto___12059;
var G__12062 = cljs.core.count.call(null,c__5525__auto___12059);
var G__12063 = (0);
seq__11943_12048 = G__12060;
chunk__11944_12049 = G__12061;
count__11945_12050 = G__12062;
i__11946_12051 = G__12063;
continue;
} else {
var component__11253__auto___12064 = cljs.core.first.call(null,seq__11943_12058__$1);
speclj.components.install.call(null,component__11253__auto___12064,description__11252__auto____$1);


var G__12065 = cljs.core.next.call(null,seq__11943_12058__$1);
var G__12066 = null;
var G__12067 = (0);
var G__12068 = (0);
seq__11943_12048 = G__12065;
chunk__11944_12049 = G__12066;
count__11945_12050 = G__12067;
i__11946_12051 = G__12068;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__11941_12046);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__11252__auto____$1);
}

return description__11252__auto____$1;
})(),(function (){var description__11252__auto____$1 = speclj.components.new_description.call(null,"3x3",false,"tic-tac-toe.screens.play-spec");
var _STAR_parent_description_STAR__orig_val__11947_12069 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__11948_12070 = description__11252__auto____$1;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__11948_12070);

try{var seq__11949_12071 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,8,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_before.call(null,((function (_STAR_parent_description_STAR__orig_val__11947_12069,_STAR_parent_description_STAR__temp_val__11948_12070,description__11252__auto____$1,_STAR_parent_description_STAR__orig_val__11809_12040,_STAR_parent_description_STAR__temp_val__11810_12041,description__11252__auto___12039){
return (function (){
cljs.core.reset_BANG_.call(null,tic_tac_toe.screens.play_spec.state,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"current-screen","current-screen",-1454713691),new cljs.core.Keyword(null,"play","play",-580418022),new cljs.core.Keyword(null,"board","board",-1907017633),tic_tac_toe.screens.play_spec.board_3,new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"x","x",2099068185)], null));

return c3kit.wire.spec_helper.render.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tic_tac_toe.render_screen.render_screen,tic_tac_toe.screens.play_spec.state], null));
});})(_STAR_parent_description_STAR__orig_val__11947_12069,_STAR_parent_description_STAR__temp_val__11948_12070,description__11252__auto____$1,_STAR_parent_description_STAR__orig_val__11809_12040,_STAR_parent_description_STAR__temp_val__11810_12041,description__11252__auto___12039))
),speclj.components.new_characteristic.call(null,"renders board",((function (_STAR_parent_description_STAR__orig_val__11947_12069,_STAR_parent_description_STAR__temp_val__11948_12070,description__11252__auto____$1,_STAR_parent_description_STAR__orig_val__11809_12040,_STAR_parent_description_STAR__temp_val__11810_12041,description__11252__auto___12039){
return (function (){
var expected__11389__auto___12075 = (9);
var actual__11390__auto___12076 = cljs.core.count.call(null,cljs.core.vec.call(null,c3kit.wire.js.query_selector_all.call(null,".board-square")));
if(cljs.core._EQ_.call(null,expected__11389__auto___12075,actual__11390__auto___12076)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__11389__auto___12075;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11357__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11357__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__11390__auto___12076;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11357__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11357__auto__);
}
})()," (using =)"].join('')));
}

var value__11752__auto___12077 = "#board-wrapper";
var node__11753__auto___12078 = c3kit.wire.spec_helper.select.call(null,value__11752__auto___12077);
if(cljs.core.truth_(node__11753__auto___12078)){
} else {
throw (new speclj.platform.SpecFailure(["Expected selector to find node: ",(function (){var temp__5806__auto__ = value__11752__auto___12077;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11357__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11357__auto__);
}
})()].join('')));
}

var value__11752__auto__ = ".three-grid";
var node__11753__auto__ = c3kit.wire.spec_helper.select.call(null,value__11752__auto__);
if(cljs.core.truth_(node__11753__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected selector to find node: ",(function (){var temp__5806__auto__ = value__11752__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11357__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11357__auto__);
}
})()].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__11947_12069,_STAR_parent_description_STAR__temp_val__11948_12070,description__11252__auto____$1,_STAR_parent_description_STAR__orig_val__11809_12040,_STAR_parent_description_STAR__temp_val__11810_12041,description__11252__auto___12039))
,false),speclj.components.new_characteristic.call(null,"buttons have IDs 0-8",((function (_STAR_parent_description_STAR__orig_val__11947_12069,_STAR_parent_description_STAR__temp_val__11948_12070,description__11252__auto____$1,_STAR_parent_description_STAR__orig_val__11809_12040,_STAR_parent_description_STAR__temp_val__11810_12041,description__11252__auto___12039){
return (function (){
var seq__11973 = cljs.core.seq.call(null,cljs.core.range.call(null,(9)));
var chunk__11974 = null;
var count__11975 = (0);
var i__11976 = (0);
while(true){
if((i__11976 < count__11975)){
var n = cljs.core._nth.call(null,chunk__11974,i__11976);
var value__11752__auto___12079 = ["#index-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join('');
var node__11753__auto___12080 = c3kit.wire.spec_helper.select.call(null,value__11752__auto___12079);
if(cljs.core.truth_(node__11753__auto___12080)){
} else {
throw (new speclj.platform.SpecFailure(["Expected selector to find node: ",(function (){var temp__5806__auto__ = value__11752__auto___12079;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11357__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11357__auto__);
}
})()].join('')));
}


var G__12081 = seq__11973;
var G__12082 = chunk__11974;
var G__12083 = count__11975;
var G__12084 = (i__11976 + (1));
seq__11973 = G__12081;
chunk__11974 = G__12082;
count__11975 = G__12083;
i__11976 = G__12084;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__11973);
if(temp__5804__auto__){
var seq__11973__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11973__$1)){
var c__5525__auto__ = cljs.core.chunk_first.call(null,seq__11973__$1);
var G__12085 = cljs.core.chunk_rest.call(null,seq__11973__$1);
var G__12086 = c__5525__auto__;
var G__12087 = cljs.core.count.call(null,c__5525__auto__);
var G__12088 = (0);
seq__11973 = G__12085;
chunk__11974 = G__12086;
count__11975 = G__12087;
i__11976 = G__12088;
continue;
} else {
var n = cljs.core.first.call(null,seq__11973__$1);
var value__11752__auto___12089 = ["#index-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join('');
var node__11753__auto___12090 = c3kit.wire.spec_helper.select.call(null,value__11752__auto___12089);
if(cljs.core.truth_(node__11753__auto___12090)){
} else {
throw (new speclj.platform.SpecFailure(["Expected selector to find node: ",(function (){var temp__5806__auto__ = value__11752__auto___12089;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11357__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11357__auto__);
}
})()].join('')));
}


var G__12091 = cljs.core.next.call(null,seq__11973__$1);
var G__12092 = null;
var G__12093 = (0);
var G__12094 = (0);
seq__11973 = G__12091;
chunk__11974 = G__12092;
count__11975 = G__12093;
i__11976 = G__12094;
continue;
}
} else {
return null;
}
}
break;
}
});})(_STAR_parent_description_STAR__orig_val__11947_12069,_STAR_parent_description_STAR__temp_val__11948_12070,description__11252__auto____$1,_STAR_parent_description_STAR__orig_val__11809_12040,_STAR_parent_description_STAR__temp_val__11810_12041,description__11252__auto___12039))
,false),speclj.components.new_characteristic.call(null,"clicking button updates board in state",((function (_STAR_parent_description_STAR__orig_val__11947_12069,_STAR_parent_description_STAR__temp_val__11948_12070,description__11252__auto____$1,_STAR_parent_description_STAR__orig_val__11809_12040,_STAR_parent_description_STAR__temp_val__11810_12041,description__11252__auto___12039){
return (function (){
var seq__11977 = cljs.core.seq.call(null,cljs.core.range.call(null,(9)));
var chunk__11978 = null;
var count__11979 = (0);
var i__11980 = (0);
while(true){
if((i__11980 < count__11979)){
var n = cljs.core._nth.call(null,chunk__11978,i__11980);
c3kit.wire.spec_helper.click_BANG_.call(null,["#index-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join(''));

var expected__11389__auto___12095 = cljs.core.assoc.call(null,tic_tac_toe.screens.play_spec.board_3,n,new cljs.core.Keyword(null,"x","x",2099068185));
var actual__11390__auto___12096 = new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.screens.play_spec.state));
if(cljs.core._EQ_.call(null,expected__11389__auto___12095,actual__11390__auto___12096)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__11389__auto___12095;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11357__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11357__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__11390__auto___12096;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11357__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11357__auto__);
}
})()," (using =)"].join('')));
}

cljs.core.swap_BANG_.call(null,tic_tac_toe.screens.play_spec.state,cljs.core.assoc,new cljs.core.Keyword(null,"board","board",-1907017633),tic_tac_toe.screens.play_spec.board_3,new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"x","x",2099068185));


var G__12097 = seq__11977;
var G__12098 = chunk__11978;
var G__12099 = count__11979;
var G__12100 = (i__11980 + (1));
seq__11977 = G__12097;
chunk__11978 = G__12098;
count__11979 = G__12099;
i__11980 = G__12100;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__11977);
if(temp__5804__auto__){
var seq__11977__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11977__$1)){
var c__5525__auto__ = cljs.core.chunk_first.call(null,seq__11977__$1);
var G__12101 = cljs.core.chunk_rest.call(null,seq__11977__$1);
var G__12102 = c__5525__auto__;
var G__12103 = cljs.core.count.call(null,c__5525__auto__);
var G__12104 = (0);
seq__11977 = G__12101;
chunk__11978 = G__12102;
count__11979 = G__12103;
i__11980 = G__12104;
continue;
} else {
var n = cljs.core.first.call(null,seq__11977__$1);
c3kit.wire.spec_helper.click_BANG_.call(null,["#index-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join(''));

var expected__11389__auto___12105 = cljs.core.assoc.call(null,tic_tac_toe.screens.play_spec.board_3,n,new cljs.core.Keyword(null,"x","x",2099068185));
var actual__11390__auto___12106 = new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.screens.play_spec.state));
if(cljs.core._EQ_.call(null,expected__11389__auto___12105,actual__11390__auto___12106)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__11389__auto___12105;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11357__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11357__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__11390__auto___12106;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11357__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11357__auto__);
}
})()," (using =)"].join('')));
}

cljs.core.swap_BANG_.call(null,tic_tac_toe.screens.play_spec.state,cljs.core.assoc,new cljs.core.Keyword(null,"board","board",-1907017633),tic_tac_toe.screens.play_spec.board_3,new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"x","x",2099068185));


var G__12107 = cljs.core.next.call(null,seq__11977__$1);
var G__12108 = null;
var G__12109 = (0);
var G__12110 = (0);
seq__11977 = G__12107;
chunk__11978 = G__12108;
count__11979 = G__12109;
i__11980 = G__12110;
continue;
}
} else {
return null;
}
}
break;
}
});})(_STAR_parent_description_STAR__orig_val__11947_12069,_STAR_parent_description_STAR__temp_val__11948_12070,description__11252__auto____$1,_STAR_parent_description_STAR__orig_val__11809_12040,_STAR_parent_description_STAR__temp_val__11810_12041,description__11252__auto___12039))
,false),speclj.components.new_characteristic.call(null,"clicking button swaps player in state",((function (_STAR_parent_description_STAR__orig_val__11947_12069,_STAR_parent_description_STAR__temp_val__11948_12070,description__11252__auto____$1,_STAR_parent_description_STAR__orig_val__11809_12040,_STAR_parent_description_STAR__temp_val__11810_12041,description__11252__auto___12039){
return (function (){
var seq__11981 = cljs.core.seq.call(null,cljs.core.range.call(null,(9)));
var chunk__11982 = null;
var count__11983 = (0);
var i__11984 = (0);
while(true){
if((i__11984 < count__11983)){
var n = cljs.core._nth.call(null,chunk__11982,i__11984);
c3kit.wire.spec_helper.click_BANG_.call(null,["#index-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join(''));

var expected__11389__auto___12111 = new cljs.core.Keyword(null,"o","o",-1350007228);
var actual__11390__auto___12112 = new cljs.core.Keyword(null,"player","player",-97687400).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.screens.play_spec.state));
if(cljs.core._EQ_.call(null,expected__11389__auto___12111,actual__11390__auto___12112)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__11389__auto___12111;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11357__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11357__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__11390__auto___12112;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11357__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11357__auto__);
}
})()," (using =)"].join('')));
}

cljs.core.swap_BANG_.call(null,tic_tac_toe.screens.play_spec.state,cljs.core.assoc,new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"x","x",2099068185));


var G__12113 = seq__11981;
var G__12114 = chunk__11982;
var G__12115 = count__11983;
var G__12116 = (i__11984 + (1));
seq__11981 = G__12113;
chunk__11982 = G__12114;
count__11983 = G__12115;
i__11984 = G__12116;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__11981);
if(temp__5804__auto__){
var seq__11981__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11981__$1)){
var c__5525__auto__ = cljs.core.chunk_first.call(null,seq__11981__$1);
var G__12117 = cljs.core.chunk_rest.call(null,seq__11981__$1);
var G__12118 = c__5525__auto__;
var G__12119 = cljs.core.count.call(null,c__5525__auto__);
var G__12120 = (0);
seq__11981 = G__12117;
chunk__11982 = G__12118;
count__11983 = G__12119;
i__11984 = G__12120;
continue;
} else {
var n = cljs.core.first.call(null,seq__11981__$1);
c3kit.wire.spec_helper.click_BANG_.call(null,["#index-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join(''));

var expected__11389__auto___12121 = new cljs.core.Keyword(null,"o","o",-1350007228);
var actual__11390__auto___12122 = new cljs.core.Keyword(null,"player","player",-97687400).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.screens.play_spec.state));
if(cljs.core._EQ_.call(null,expected__11389__auto___12121,actual__11390__auto___12122)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__11389__auto___12121;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11357__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11357__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__11390__auto___12122;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11357__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11357__auto__);
}
})()," (using =)"].join('')));
}

cljs.core.swap_BANG_.call(null,tic_tac_toe.screens.play_spec.state,cljs.core.assoc,new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"x","x",2099068185));


var G__12123 = cljs.core.next.call(null,seq__11981__$1);
var G__12124 = null;
var G__12125 = (0);
var G__12126 = (0);
seq__11981 = G__12123;
chunk__11982 = G__12124;
count__11983 = G__12125;
i__11984 = G__12126;
continue;
}
} else {
return null;
}
}
break;
}
});})(_STAR_parent_description_STAR__orig_val__11947_12069,_STAR_parent_description_STAR__temp_val__11948_12070,description__11252__auto____$1,_STAR_parent_description_STAR__orig_val__11809_12040,_STAR_parent_description_STAR__temp_val__11810_12041,description__11252__auto___12039))
,false),speclj.components.new_characteristic.call(null,"clicking button updates game-state in state",((function (_STAR_parent_description_STAR__orig_val__11947_12069,_STAR_parent_description_STAR__temp_val__11948_12070,description__11252__auto____$1,_STAR_parent_description_STAR__orig_val__11809_12040,_STAR_parent_description_STAR__temp_val__11810_12041,description__11252__auto___12039){
return (function (){
cljs.core.swap_BANG_.call(null,tic_tac_toe.screens.play_spec.state,cljs.core.assoc,new cljs.core.Keyword(null,"board","board",-1907017633),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"o","o",-1350007228),new cljs.core.Keyword(null,"o","o",-1350007228),(6),(7),(8),(9)], null));

c3kit.wire.spec_helper.click_BANG_.call(null,"#index-0");

var expected__11389__auto__ = "X wins!";
var actual__11390__auto__ = new cljs.core.Keyword(null,"game-state","game-state",935682735).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.screens.play_spec.state));
if(cljs.core._EQ_.call(null,expected__11389__auto__,actual__11390__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__11389__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11357__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11357__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__11390__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11357__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11357__auto__);
}
})()," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__11947_12069,_STAR_parent_description_STAR__temp_val__11948_12070,description__11252__auto____$1,_STAR_parent_description_STAR__orig_val__11809_12040,_STAR_parent_description_STAR__temp_val__11810_12041,description__11252__auto___12039))
,false),speclj.components.new_characteristic.call(null,"clicking button adds token to button HTML",((function (_STAR_parent_description_STAR__orig_val__11947_12069,_STAR_parent_description_STAR__temp_val__11948_12070,description__11252__auto____$1,_STAR_parent_description_STAR__orig_val__11809_12040,_STAR_parent_description_STAR__temp_val__11810_12041,description__11252__auto___12039){
return (function (){
var seq__11985 = cljs.core.seq.call(null,cljs.core.range.call(null,(9)));
var chunk__11986 = null;
var count__11987 = (0);
var i__11988 = (0);
while(true){
if((i__11988 < count__11987)){
var n = cljs.core._nth.call(null,chunk__11986,i__11988);
c3kit.wire.spec_helper.click_BANG_.call(null,["#index-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join(''));

var expected__11389__auto___12127 = "X";
var actual__11390__auto___12128 = c3kit.wire.spec_helper.text.call(null,["#index-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join(''));
if(cljs.core._EQ_.call(null,expected__11389__auto___12127,actual__11390__auto___12128)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__11389__auto___12127;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11357__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11357__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__11390__auto___12128;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11357__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11357__auto__);
}
})()," (using =)"].join('')));
}

cljs.core.reset_BANG_.call(null,tic_tac_toe.screens.play_spec.state,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"board","board",-1907017633),tic_tac_toe.screens.play_spec.board_3,new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"current-screen","current-screen",-1454713691),new cljs.core.Keyword(null,"play","play",-580418022)], null));


var G__12129 = seq__11985;
var G__12130 = chunk__11986;
var G__12131 = count__11987;
var G__12132 = (i__11988 + (1));
seq__11985 = G__12129;
chunk__11986 = G__12130;
count__11987 = G__12131;
i__11988 = G__12132;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__11985);
if(temp__5804__auto__){
var seq__11985__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11985__$1)){
var c__5525__auto__ = cljs.core.chunk_first.call(null,seq__11985__$1);
var G__12133 = cljs.core.chunk_rest.call(null,seq__11985__$1);
var G__12134 = c__5525__auto__;
var G__12135 = cljs.core.count.call(null,c__5525__auto__);
var G__12136 = (0);
seq__11985 = G__12133;
chunk__11986 = G__12134;
count__11987 = G__12135;
i__11988 = G__12136;
continue;
} else {
var n = cljs.core.first.call(null,seq__11985__$1);
c3kit.wire.spec_helper.click_BANG_.call(null,["#index-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join(''));

var expected__11389__auto___12137 = "X";
var actual__11390__auto___12138 = c3kit.wire.spec_helper.text.call(null,["#index-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join(''));
if(cljs.core._EQ_.call(null,expected__11389__auto___12137,actual__11390__auto___12138)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__11389__auto___12137;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11357__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11357__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__11390__auto___12138;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11357__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11357__auto__);
}
})()," (using =)"].join('')));
}

cljs.core.reset_BANG_.call(null,tic_tac_toe.screens.play_spec.state,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"board","board",-1907017633),tic_tac_toe.screens.play_spec.board_3,new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"current-screen","current-screen",-1454713691),new cljs.core.Keyword(null,"play","play",-580418022)], null));


var G__12139 = cljs.core.next.call(null,seq__11985__$1);
var G__12140 = null;
var G__12141 = (0);
var G__12142 = (0);
seq__11985 = G__12139;
chunk__11986 = G__12140;
count__11987 = G__12141;
i__11988 = G__12142;
continue;
}
} else {
return null;
}
}
break;
}
});})(_STAR_parent_description_STAR__orig_val__11947_12069,_STAR_parent_description_STAR__temp_val__11948_12070,description__11252__auto____$1,_STAR_parent_description_STAR__orig_val__11809_12040,_STAR_parent_description_STAR__temp_val__11810_12041,description__11252__auto___12039))
,false),speclj.components.new_characteristic.call(null,"clicking button disables button",((function (_STAR_parent_description_STAR__orig_val__11947_12069,_STAR_parent_description_STAR__temp_val__11948_12070,description__11252__auto____$1,_STAR_parent_description_STAR__orig_val__11809_12040,_STAR_parent_description_STAR__temp_val__11810_12041,description__11252__auto___12039){
return (function (){
var seq__11989 = cljs.core.seq.call(null,cljs.core.range.call(null,(9)));
var chunk__11990 = null;
var count__11991 = (0);
var i__11992 = (0);
while(true){
if((i__11992 < count__11991)){
var n = cljs.core._nth.call(null,chunk__11990,i__11992);
c3kit.wire.spec_helper.click_BANG_.call(null,["#index-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join(''));

var expected__11389__auto___12143 = true;
var actual__11390__auto___12144 = c3kit.wire.spec_helper.disabled_QMARK_.call(null,["#index-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join(''));
if(cljs.core._EQ_.call(null,expected__11389__auto___12143,actual__11390__auto___12144)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__11389__auto___12143;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11357__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11357__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__11390__auto___12144;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11357__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11357__auto__);
}
})()," (using =)"].join('')));
}

cljs.core.reset_BANG_.call(null,tic_tac_toe.screens.play_spec.state,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"board","board",-1907017633),tic_tac_toe.screens.play_spec.board_3,new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"current-screen","current-screen",-1454713691),new cljs.core.Keyword(null,"play","play",-580418022)], null));


var G__12145 = seq__11989;
var G__12146 = chunk__11990;
var G__12147 = count__11991;
var G__12148 = (i__11992 + (1));
seq__11989 = G__12145;
chunk__11990 = G__12146;
count__11991 = G__12147;
i__11992 = G__12148;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__11989);
if(temp__5804__auto__){
var seq__11989__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11989__$1)){
var c__5525__auto__ = cljs.core.chunk_first.call(null,seq__11989__$1);
var G__12149 = cljs.core.chunk_rest.call(null,seq__11989__$1);
var G__12150 = c__5525__auto__;
var G__12151 = cljs.core.count.call(null,c__5525__auto__);
var G__12152 = (0);
seq__11989 = G__12149;
chunk__11990 = G__12150;
count__11991 = G__12151;
i__11992 = G__12152;
continue;
} else {
var n = cljs.core.first.call(null,seq__11989__$1);
c3kit.wire.spec_helper.click_BANG_.call(null,["#index-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join(''));

var expected__11389__auto___12153 = true;
var actual__11390__auto___12154 = c3kit.wire.spec_helper.disabled_QMARK_.call(null,["#index-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join(''));
if(cljs.core._EQ_.call(null,expected__11389__auto___12153,actual__11390__auto___12154)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__11389__auto___12153;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11357__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11357__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__11390__auto___12154;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11357__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11357__auto__);
}
})()," (using =)"].join('')));
}

cljs.core.reset_BANG_.call(null,tic_tac_toe.screens.play_spec.state,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"board","board",-1907017633),tic_tac_toe.screens.play_spec.board_3,new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"current-screen","current-screen",-1454713691),new cljs.core.Keyword(null,"play","play",-580418022)], null));


var G__12155 = cljs.core.next.call(null,seq__11989__$1);
var G__12156 = null;
var G__12157 = (0);
var G__12158 = (0);
seq__11989 = G__12155;
chunk__11990 = G__12156;
count__11991 = G__12157;
i__11992 = G__12158;
continue;
}
} else {
return null;
}
}
break;
}
});})(_STAR_parent_description_STAR__orig_val__11947_12069,_STAR_parent_description_STAR__temp_val__11948_12070,description__11252__auto____$1,_STAR_parent_description_STAR__orig_val__11809_12040,_STAR_parent_description_STAR__temp_val__11810_12041,description__11252__auto___12039))
,false)],null)));
var chunk__11950_12072 = null;
var count__11951_12073 = (0);
var i__11952_12074 = (0);
while(true){
if((i__11952_12074 < count__11951_12073)){
var component__11253__auto___12159 = cljs.core._nth.call(null,chunk__11950_12072,i__11952_12074);
speclj.components.install.call(null,component__11253__auto___12159,description__11252__auto____$1);


var G__12160 = seq__11949_12071;
var G__12161 = chunk__11950_12072;
var G__12162 = count__11951_12073;
var G__12163 = (i__11952_12074 + (1));
seq__11949_12071 = G__12160;
chunk__11950_12072 = G__12161;
count__11951_12073 = G__12162;
i__11952_12074 = G__12163;
continue;
} else {
var temp__5804__auto___12164 = cljs.core.seq.call(null,seq__11949_12071);
if(temp__5804__auto___12164){
var seq__11949_12165__$1 = temp__5804__auto___12164;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11949_12165__$1)){
var c__5525__auto___12166 = cljs.core.chunk_first.call(null,seq__11949_12165__$1);
var G__12167 = cljs.core.chunk_rest.call(null,seq__11949_12165__$1);
var G__12168 = c__5525__auto___12166;
var G__12169 = cljs.core.count.call(null,c__5525__auto___12166);
var G__12170 = (0);
seq__11949_12071 = G__12167;
chunk__11950_12072 = G__12168;
count__11951_12073 = G__12169;
i__11952_12074 = G__12170;
continue;
} else {
var component__11253__auto___12171 = cljs.core.first.call(null,seq__11949_12165__$1);
speclj.components.install.call(null,component__11253__auto___12171,description__11252__auto____$1);


var G__12172 = cljs.core.next.call(null,seq__11949_12165__$1);
var G__12173 = null;
var G__12174 = (0);
var G__12175 = (0);
seq__11949_12071 = G__12172;
chunk__11950_12072 = G__12173;
count__11951_12073 = G__12174;
i__11952_12074 = G__12175;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__11947_12069);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__11252__auto____$1);
}

return description__11252__auto____$1;
})(),(function (){var description__11252__auto____$1 = speclj.components.new_description.call(null,"4x4",false,"tic-tac-toe.screens.play-spec");
var _STAR_parent_description_STAR__orig_val__11993_12176 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__11994_12177 = description__11252__auto____$1;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__11994_12177);

try{var seq__11995_12178 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,7,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_before.call(null,((function (_STAR_parent_description_STAR__orig_val__11993_12176,_STAR_parent_description_STAR__temp_val__11994_12177,description__11252__auto____$1,_STAR_parent_description_STAR__orig_val__11809_12040,_STAR_parent_description_STAR__temp_val__11810_12041,description__11252__auto___12039){
return (function (){
cljs.core.reset_BANG_.call(null,tic_tac_toe.screens.play_spec.state,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"current-screen","current-screen",-1454713691),new cljs.core.Keyword(null,"play","play",-580418022),new cljs.core.Keyword(null,"board","board",-1907017633),tic_tac_toe.screens.play_spec.board_4,new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"x","x",2099068185)], null));

return c3kit.wire.spec_helper.render.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tic_tac_toe.render_screen.render_screen,tic_tac_toe.screens.play_spec.state], null));
});})(_STAR_parent_description_STAR__orig_val__11993_12176,_STAR_parent_description_STAR__temp_val__11994_12177,description__11252__auto____$1,_STAR_parent_description_STAR__orig_val__11809_12040,_STAR_parent_description_STAR__temp_val__11810_12041,description__11252__auto___12039))
),speclj.components.new_characteristic.call(null,"renders board",((function (_STAR_parent_description_STAR__orig_val__11993_12176,_STAR_parent_description_STAR__temp_val__11994_12177,description__11252__auto____$1,_STAR_parent_description_STAR__orig_val__11809_12040,_STAR_parent_description_STAR__temp_val__11810_12041,description__11252__auto___12039){
return (function (){
var expected__11389__auto___12182 = (16);
var actual__11390__auto___12183 = cljs.core.count.call(null,cljs.core.vec.call(null,c3kit.wire.js.query_selector_all.call(null,".board-square")));
if(cljs.core._EQ_.call(null,expected__11389__auto___12182,actual__11390__auto___12183)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__11389__auto___12182;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11357__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11357__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__11390__auto___12183;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11357__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11357__auto__);
}
})()," (using =)"].join('')));
}

var value__11752__auto___12184 = "#board-wrapper";
var node__11753__auto___12185 = c3kit.wire.spec_helper.select.call(null,value__11752__auto___12184);
if(cljs.core.truth_(node__11753__auto___12185)){
} else {
throw (new speclj.platform.SpecFailure(["Expected selector to find node: ",(function (){var temp__5806__auto__ = value__11752__auto___12184;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11357__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11357__auto__);
}
})()].join('')));
}

var value__11752__auto__ = ".four-grid";
var node__11753__auto__ = c3kit.wire.spec_helper.select.call(null,value__11752__auto__);
if(cljs.core.truth_(node__11753__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected selector to find node: ",(function (){var temp__5806__auto__ = value__11752__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11357__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11357__auto__);
}
})()].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__11993_12176,_STAR_parent_description_STAR__temp_val__11994_12177,description__11252__auto____$1,_STAR_parent_description_STAR__orig_val__11809_12040,_STAR_parent_description_STAR__temp_val__11810_12041,description__11252__auto___12039))
,false),speclj.components.new_characteristic.call(null,"buttons have IDs 0-15",((function (_STAR_parent_description_STAR__orig_val__11993_12176,_STAR_parent_description_STAR__temp_val__11994_12177,description__11252__auto____$1,_STAR_parent_description_STAR__orig_val__11809_12040,_STAR_parent_description_STAR__temp_val__11810_12041,description__11252__auto___12039){
return (function (){
var seq__12019 = cljs.core.seq.call(null,cljs.core.range.call(null,(16)));
var chunk__12020 = null;
var count__12021 = (0);
var i__12022 = (0);
while(true){
if((i__12022 < count__12021)){
var n = cljs.core._nth.call(null,chunk__12020,i__12022);
var value__11752__auto___12186 = ["#index-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join('');
var node__11753__auto___12187 = c3kit.wire.spec_helper.select.call(null,value__11752__auto___12186);
if(cljs.core.truth_(node__11753__auto___12187)){
} else {
throw (new speclj.platform.SpecFailure(["Expected selector to find node: ",(function (){var temp__5806__auto__ = value__11752__auto___12186;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11357__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11357__auto__);
}
})()].join('')));
}


var G__12188 = seq__12019;
var G__12189 = chunk__12020;
var G__12190 = count__12021;
var G__12191 = (i__12022 + (1));
seq__12019 = G__12188;
chunk__12020 = G__12189;
count__12021 = G__12190;
i__12022 = G__12191;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__12019);
if(temp__5804__auto__){
var seq__12019__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12019__$1)){
var c__5525__auto__ = cljs.core.chunk_first.call(null,seq__12019__$1);
var G__12192 = cljs.core.chunk_rest.call(null,seq__12019__$1);
var G__12193 = c__5525__auto__;
var G__12194 = cljs.core.count.call(null,c__5525__auto__);
var G__12195 = (0);
seq__12019 = G__12192;
chunk__12020 = G__12193;
count__12021 = G__12194;
i__12022 = G__12195;
continue;
} else {
var n = cljs.core.first.call(null,seq__12019__$1);
var value__11752__auto___12196 = ["#index-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join('');
var node__11753__auto___12197 = c3kit.wire.spec_helper.select.call(null,value__11752__auto___12196);
if(cljs.core.truth_(node__11753__auto___12197)){
} else {
throw (new speclj.platform.SpecFailure(["Expected selector to find node: ",(function (){var temp__5806__auto__ = value__11752__auto___12196;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11357__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11357__auto__);
}
})()].join('')));
}


var G__12198 = cljs.core.next.call(null,seq__12019__$1);
var G__12199 = null;
var G__12200 = (0);
var G__12201 = (0);
seq__12019 = G__12198;
chunk__12020 = G__12199;
count__12021 = G__12200;
i__12022 = G__12201;
continue;
}
} else {
return null;
}
}
break;
}
});})(_STAR_parent_description_STAR__orig_val__11993_12176,_STAR_parent_description_STAR__temp_val__11994_12177,description__11252__auto____$1,_STAR_parent_description_STAR__orig_val__11809_12040,_STAR_parent_description_STAR__temp_val__11810_12041,description__11252__auto___12039))
,false),speclj.components.new_characteristic.call(null,"clicking button updates board in state",((function (_STAR_parent_description_STAR__orig_val__11993_12176,_STAR_parent_description_STAR__temp_val__11994_12177,description__11252__auto____$1,_STAR_parent_description_STAR__orig_val__11809_12040,_STAR_parent_description_STAR__temp_val__11810_12041,description__11252__auto___12039){
return (function (){
var seq__12023 = cljs.core.seq.call(null,cljs.core.range.call(null,(16)));
var chunk__12024 = null;
var count__12025 = (0);
var i__12026 = (0);
while(true){
if((i__12026 < count__12025)){
var n = cljs.core._nth.call(null,chunk__12024,i__12026);
c3kit.wire.spec_helper.click_BANG_.call(null,["#index-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join(''));

var expected__11389__auto___12202 = cljs.core.assoc.call(null,tic_tac_toe.screens.play_spec.board_4,n,new cljs.core.Keyword(null,"x","x",2099068185));
var actual__11390__auto___12203 = new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.screens.play_spec.state));
if(cljs.core._EQ_.call(null,expected__11389__auto___12202,actual__11390__auto___12203)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__11389__auto___12202;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11357__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11357__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__11390__auto___12203;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11357__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11357__auto__);
}
})()," (using =)"].join('')));
}

cljs.core.swap_BANG_.call(null,tic_tac_toe.screens.play_spec.state,cljs.core.assoc,new cljs.core.Keyword(null,"board","board",-1907017633),tic_tac_toe.screens.play_spec.board_4,new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"x","x",2099068185));


var G__12204 = seq__12023;
var G__12205 = chunk__12024;
var G__12206 = count__12025;
var G__12207 = (i__12026 + (1));
seq__12023 = G__12204;
chunk__12024 = G__12205;
count__12025 = G__12206;
i__12026 = G__12207;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__12023);
if(temp__5804__auto__){
var seq__12023__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12023__$1)){
var c__5525__auto__ = cljs.core.chunk_first.call(null,seq__12023__$1);
var G__12208 = cljs.core.chunk_rest.call(null,seq__12023__$1);
var G__12209 = c__5525__auto__;
var G__12210 = cljs.core.count.call(null,c__5525__auto__);
var G__12211 = (0);
seq__12023 = G__12208;
chunk__12024 = G__12209;
count__12025 = G__12210;
i__12026 = G__12211;
continue;
} else {
var n = cljs.core.first.call(null,seq__12023__$1);
c3kit.wire.spec_helper.click_BANG_.call(null,["#index-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join(''));

var expected__11389__auto___12212 = cljs.core.assoc.call(null,tic_tac_toe.screens.play_spec.board_4,n,new cljs.core.Keyword(null,"x","x",2099068185));
var actual__11390__auto___12213 = new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.screens.play_spec.state));
if(cljs.core._EQ_.call(null,expected__11389__auto___12212,actual__11390__auto___12213)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__11389__auto___12212;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11357__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11357__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__11390__auto___12213;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11357__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11357__auto__);
}
})()," (using =)"].join('')));
}

cljs.core.swap_BANG_.call(null,tic_tac_toe.screens.play_spec.state,cljs.core.assoc,new cljs.core.Keyword(null,"board","board",-1907017633),tic_tac_toe.screens.play_spec.board_4,new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"x","x",2099068185));


var G__12214 = cljs.core.next.call(null,seq__12023__$1);
var G__12215 = null;
var G__12216 = (0);
var G__12217 = (0);
seq__12023 = G__12214;
chunk__12024 = G__12215;
count__12025 = G__12216;
i__12026 = G__12217;
continue;
}
} else {
return null;
}
}
break;
}
});})(_STAR_parent_description_STAR__orig_val__11993_12176,_STAR_parent_description_STAR__temp_val__11994_12177,description__11252__auto____$1,_STAR_parent_description_STAR__orig_val__11809_12040,_STAR_parent_description_STAR__temp_val__11810_12041,description__11252__auto___12039))
,false),speclj.components.new_characteristic.call(null,"clicking button swaps player in state",((function (_STAR_parent_description_STAR__orig_val__11993_12176,_STAR_parent_description_STAR__temp_val__11994_12177,description__11252__auto____$1,_STAR_parent_description_STAR__orig_val__11809_12040,_STAR_parent_description_STAR__temp_val__11810_12041,description__11252__auto___12039){
return (function (){
var seq__12027 = cljs.core.seq.call(null,cljs.core.range.call(null,(16)));
var chunk__12028 = null;
var count__12029 = (0);
var i__12030 = (0);
while(true){
if((i__12030 < count__12029)){
var n = cljs.core._nth.call(null,chunk__12028,i__12030);
c3kit.wire.spec_helper.click_BANG_.call(null,["#index-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join(''));

var expected__11389__auto___12218 = new cljs.core.Keyword(null,"o","o",-1350007228);
var actual__11390__auto___12219 = new cljs.core.Keyword(null,"player","player",-97687400).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.screens.play_spec.state));
if(cljs.core._EQ_.call(null,expected__11389__auto___12218,actual__11390__auto___12219)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__11389__auto___12218;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11357__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11357__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__11390__auto___12219;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11357__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11357__auto__);
}
})()," (using =)"].join('')));
}

cljs.core.swap_BANG_.call(null,tic_tac_toe.screens.play_spec.state,cljs.core.assoc,new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"x","x",2099068185));


var G__12220 = seq__12027;
var G__12221 = chunk__12028;
var G__12222 = count__12029;
var G__12223 = (i__12030 + (1));
seq__12027 = G__12220;
chunk__12028 = G__12221;
count__12029 = G__12222;
i__12030 = G__12223;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__12027);
if(temp__5804__auto__){
var seq__12027__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12027__$1)){
var c__5525__auto__ = cljs.core.chunk_first.call(null,seq__12027__$1);
var G__12224 = cljs.core.chunk_rest.call(null,seq__12027__$1);
var G__12225 = c__5525__auto__;
var G__12226 = cljs.core.count.call(null,c__5525__auto__);
var G__12227 = (0);
seq__12027 = G__12224;
chunk__12028 = G__12225;
count__12029 = G__12226;
i__12030 = G__12227;
continue;
} else {
var n = cljs.core.first.call(null,seq__12027__$1);
c3kit.wire.spec_helper.click_BANG_.call(null,["#index-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join(''));

var expected__11389__auto___12228 = new cljs.core.Keyword(null,"o","o",-1350007228);
var actual__11390__auto___12229 = new cljs.core.Keyword(null,"player","player",-97687400).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.screens.play_spec.state));
if(cljs.core._EQ_.call(null,expected__11389__auto___12228,actual__11390__auto___12229)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__11389__auto___12228;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11357__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11357__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__11390__auto___12229;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11357__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11357__auto__);
}
})()," (using =)"].join('')));
}

cljs.core.swap_BANG_.call(null,tic_tac_toe.screens.play_spec.state,cljs.core.assoc,new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"x","x",2099068185));


var G__12230 = cljs.core.next.call(null,seq__12027__$1);
var G__12231 = null;
var G__12232 = (0);
var G__12233 = (0);
seq__12027 = G__12230;
chunk__12028 = G__12231;
count__12029 = G__12232;
i__12030 = G__12233;
continue;
}
} else {
return null;
}
}
break;
}
});})(_STAR_parent_description_STAR__orig_val__11993_12176,_STAR_parent_description_STAR__temp_val__11994_12177,description__11252__auto____$1,_STAR_parent_description_STAR__orig_val__11809_12040,_STAR_parent_description_STAR__temp_val__11810_12041,description__11252__auto___12039))
,false),speclj.components.new_characteristic.call(null,"clicking button adds token to button HTML",((function (_STAR_parent_description_STAR__orig_val__11993_12176,_STAR_parent_description_STAR__temp_val__11994_12177,description__11252__auto____$1,_STAR_parent_description_STAR__orig_val__11809_12040,_STAR_parent_description_STAR__temp_val__11810_12041,description__11252__auto___12039){
return (function (){
var seq__12031 = cljs.core.seq.call(null,cljs.core.range.call(null,(16)));
var chunk__12032 = null;
var count__12033 = (0);
var i__12034 = (0);
while(true){
if((i__12034 < count__12033)){
var n = cljs.core._nth.call(null,chunk__12032,i__12034);
c3kit.wire.spec_helper.click_BANG_.call(null,["#index-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join(''));

var expected__11389__auto___12234 = "X";
var actual__11390__auto___12235 = c3kit.wire.spec_helper.text.call(null,["#index-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join(''));
if(cljs.core._EQ_.call(null,expected__11389__auto___12234,actual__11390__auto___12235)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__11389__auto___12234;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11357__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11357__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__11390__auto___12235;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11357__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11357__auto__);
}
})()," (using =)"].join('')));
}

cljs.core.reset_BANG_.call(null,tic_tac_toe.screens.play_spec.state,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"board","board",-1907017633),tic_tac_toe.screens.play_spec.board_4,new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"current-screen","current-screen",-1454713691),new cljs.core.Keyword(null,"play","play",-580418022)], null));


var G__12236 = seq__12031;
var G__12237 = chunk__12032;
var G__12238 = count__12033;
var G__12239 = (i__12034 + (1));
seq__12031 = G__12236;
chunk__12032 = G__12237;
count__12033 = G__12238;
i__12034 = G__12239;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__12031);
if(temp__5804__auto__){
var seq__12031__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12031__$1)){
var c__5525__auto__ = cljs.core.chunk_first.call(null,seq__12031__$1);
var G__12240 = cljs.core.chunk_rest.call(null,seq__12031__$1);
var G__12241 = c__5525__auto__;
var G__12242 = cljs.core.count.call(null,c__5525__auto__);
var G__12243 = (0);
seq__12031 = G__12240;
chunk__12032 = G__12241;
count__12033 = G__12242;
i__12034 = G__12243;
continue;
} else {
var n = cljs.core.first.call(null,seq__12031__$1);
c3kit.wire.spec_helper.click_BANG_.call(null,["#index-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join(''));

var expected__11389__auto___12244 = "X";
var actual__11390__auto___12245 = c3kit.wire.spec_helper.text.call(null,["#index-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join(''));
if(cljs.core._EQ_.call(null,expected__11389__auto___12244,actual__11390__auto___12245)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__11389__auto___12244;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11357__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11357__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__11390__auto___12245;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11357__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11357__auto__);
}
})()," (using =)"].join('')));
}

cljs.core.reset_BANG_.call(null,tic_tac_toe.screens.play_spec.state,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"board","board",-1907017633),tic_tac_toe.screens.play_spec.board_4,new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"current-screen","current-screen",-1454713691),new cljs.core.Keyword(null,"play","play",-580418022)], null));


var G__12246 = cljs.core.next.call(null,seq__12031__$1);
var G__12247 = null;
var G__12248 = (0);
var G__12249 = (0);
seq__12031 = G__12246;
chunk__12032 = G__12247;
count__12033 = G__12248;
i__12034 = G__12249;
continue;
}
} else {
return null;
}
}
break;
}
});})(_STAR_parent_description_STAR__orig_val__11993_12176,_STAR_parent_description_STAR__temp_val__11994_12177,description__11252__auto____$1,_STAR_parent_description_STAR__orig_val__11809_12040,_STAR_parent_description_STAR__temp_val__11810_12041,description__11252__auto___12039))
,false),speclj.components.new_characteristic.call(null,"clicking button disables button",((function (_STAR_parent_description_STAR__orig_val__11993_12176,_STAR_parent_description_STAR__temp_val__11994_12177,description__11252__auto____$1,_STAR_parent_description_STAR__orig_val__11809_12040,_STAR_parent_description_STAR__temp_val__11810_12041,description__11252__auto___12039){
return (function (){
var seq__12035 = cljs.core.seq.call(null,cljs.core.range.call(null,(16)));
var chunk__12036 = null;
var count__12037 = (0);
var i__12038 = (0);
while(true){
if((i__12038 < count__12037)){
var n = cljs.core._nth.call(null,chunk__12036,i__12038);
c3kit.wire.spec_helper.click_BANG_.call(null,["#index-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join(''));

var expected__11389__auto___12250 = true;
var actual__11390__auto___12251 = c3kit.wire.spec_helper.disabled_QMARK_.call(null,["#index-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join(''));
if(cljs.core._EQ_.call(null,expected__11389__auto___12250,actual__11390__auto___12251)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__11389__auto___12250;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11357__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11357__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__11390__auto___12251;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11357__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11357__auto__);
}
})()," (using =)"].join('')));
}

cljs.core.reset_BANG_.call(null,tic_tac_toe.screens.play_spec.state,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"board","board",-1907017633),tic_tac_toe.screens.play_spec.board_4,new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"current-screen","current-screen",-1454713691),new cljs.core.Keyword(null,"play","play",-580418022)], null));


var G__12252 = seq__12035;
var G__12253 = chunk__12036;
var G__12254 = count__12037;
var G__12255 = (i__12038 + (1));
seq__12035 = G__12252;
chunk__12036 = G__12253;
count__12037 = G__12254;
i__12038 = G__12255;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__12035);
if(temp__5804__auto__){
var seq__12035__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12035__$1)){
var c__5525__auto__ = cljs.core.chunk_first.call(null,seq__12035__$1);
var G__12256 = cljs.core.chunk_rest.call(null,seq__12035__$1);
var G__12257 = c__5525__auto__;
var G__12258 = cljs.core.count.call(null,c__5525__auto__);
var G__12259 = (0);
seq__12035 = G__12256;
chunk__12036 = G__12257;
count__12037 = G__12258;
i__12038 = G__12259;
continue;
} else {
var n = cljs.core.first.call(null,seq__12035__$1);
c3kit.wire.spec_helper.click_BANG_.call(null,["#index-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join(''));

var expected__11389__auto___12260 = true;
var actual__11390__auto___12261 = c3kit.wire.spec_helper.disabled_QMARK_.call(null,["#index-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join(''));
if(cljs.core._EQ_.call(null,expected__11389__auto___12260,actual__11390__auto___12261)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__11389__auto___12260;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11357__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11357__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__11390__auto___12261;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11357__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11357__auto__);
}
})()," (using =)"].join('')));
}

cljs.core.reset_BANG_.call(null,tic_tac_toe.screens.play_spec.state,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"board","board",-1907017633),tic_tac_toe.screens.play_spec.board_4,new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"current-screen","current-screen",-1454713691),new cljs.core.Keyword(null,"play","play",-580418022)], null));


var G__12262 = cljs.core.next.call(null,seq__12035__$1);
var G__12263 = null;
var G__12264 = (0);
var G__12265 = (0);
seq__12035 = G__12262;
chunk__12036 = G__12263;
count__12037 = G__12264;
i__12038 = G__12265;
continue;
}
} else {
return null;
}
}
break;
}
});})(_STAR_parent_description_STAR__orig_val__11993_12176,_STAR_parent_description_STAR__temp_val__11994_12177,description__11252__auto____$1,_STAR_parent_description_STAR__orig_val__11809_12040,_STAR_parent_description_STAR__temp_val__11810_12041,description__11252__auto___12039))
,false)],null)));
var chunk__11996_12179 = null;
var count__11997_12180 = (0);
var i__11998_12181 = (0);
while(true){
if((i__11998_12181 < count__11997_12180)){
var component__11253__auto___12266 = cljs.core._nth.call(null,chunk__11996_12179,i__11998_12181);
speclj.components.install.call(null,component__11253__auto___12266,description__11252__auto____$1);


var G__12267 = seq__11995_12178;
var G__12268 = chunk__11996_12179;
var G__12269 = count__11997_12180;
var G__12270 = (i__11998_12181 + (1));
seq__11995_12178 = G__12267;
chunk__11996_12179 = G__12268;
count__11997_12180 = G__12269;
i__11998_12181 = G__12270;
continue;
} else {
var temp__5804__auto___12271 = cljs.core.seq.call(null,seq__11995_12178);
if(temp__5804__auto___12271){
var seq__11995_12272__$1 = temp__5804__auto___12271;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11995_12272__$1)){
var c__5525__auto___12273 = cljs.core.chunk_first.call(null,seq__11995_12272__$1);
var G__12274 = cljs.core.chunk_rest.call(null,seq__11995_12272__$1);
var G__12275 = c__5525__auto___12273;
var G__12276 = cljs.core.count.call(null,c__5525__auto___12273);
var G__12277 = (0);
seq__11995_12178 = G__12274;
chunk__11996_12179 = G__12275;
count__11997_12180 = G__12276;
i__11998_12181 = G__12277;
continue;
} else {
var component__11253__auto___12278 = cljs.core.first.call(null,seq__11995_12272__$1);
speclj.components.install.call(null,component__11253__auto___12278,description__11252__auto____$1);


var G__12279 = cljs.core.next.call(null,seq__11995_12272__$1);
var G__12280 = null;
var G__12281 = (0);
var G__12282 = (0);
seq__11995_12178 = G__12279;
chunk__11996_12179 = G__12280;
count__11997_12180 = G__12281;
i__11998_12181 = G__12282;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__11993_12176);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__11252__auto____$1);
}

return description__11252__auto____$1;
})()],null)));
var chunk__11814_12043 = null;
var count__11815_12044 = (0);
var i__11817_12045 = (0);
while(true){
if((i__11817_12045 < count__11815_12044)){
var component__11253__auto___12283 = cljs.core._nth.call(null,chunk__11814_12043,i__11817_12045);
speclj.components.install.call(null,component__11253__auto___12283,description__11252__auto___12039);


var G__12284 = seq__11811_12042;
var G__12285 = chunk__11814_12043;
var G__12286 = count__11815_12044;
var G__12287 = (i__11817_12045 + (1));
seq__11811_12042 = G__12284;
chunk__11814_12043 = G__12285;
count__11815_12044 = G__12286;
i__11817_12045 = G__12287;
continue;
} else {
var temp__5804__auto___12288 = cljs.core.seq.call(null,seq__11811_12042);
if(temp__5804__auto___12288){
var seq__11811_12289__$1 = temp__5804__auto___12288;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11811_12289__$1)){
var c__5525__auto___12290 = cljs.core.chunk_first.call(null,seq__11811_12289__$1);
var G__12291 = cljs.core.chunk_rest.call(null,seq__11811_12289__$1);
var G__12292 = c__5525__auto___12290;
var G__12293 = cljs.core.count.call(null,c__5525__auto___12290);
var G__12294 = (0);
seq__11811_12042 = G__12291;
chunk__11814_12043 = G__12292;
count__11815_12044 = G__12293;
i__11817_12045 = G__12294;
continue;
} else {
var component__11253__auto___12295 = cljs.core.first.call(null,seq__11811_12289__$1);
speclj.components.install.call(null,component__11253__auto___12295,description__11252__auto___12039);


var G__12296 = cljs.core.next.call(null,seq__11811_12289__$1);
var G__12297 = null;
var G__12298 = (0);
var G__12299 = (0);
seq__11811_12042 = G__12296;
chunk__11814_12043 = G__12297;
count__11815_12044 = G__12298;
i__11817_12045 = G__12299;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__11809_12040);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__11252__auto___12039);
}


//# sourceMappingURL=play_spec.js.map
