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
var description__11262__auto___16163 = speclj.components.new_description.call(null,"play screen",false,"tic-tac-toe.screens.play-spec");
var _STAR_parent_description_STAR__orig_val__15935_16164 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__15936_16165 = description__11262__auto___16163;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__15936_16165);

try{var seq__15937_16166 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,4,(5),cljs.core.PersistentVector.EMPTY_NODE,[c3kit.wire.spec_helper.with_root_dom.call(null),(function (){var description__11262__auto____$1 = speclj.components.new_description.call(null,"play heading",false,"tic-tac-toe.screens.play-spec");
var _STAR_parent_description_STAR__orig_val__16065_16170 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__16066_16171 = description__11262__auto____$1;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__16066_16171);

try{var seq__16067_16172 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_characteristic.call(null,"prompts player x for move",((function (_STAR_parent_description_STAR__orig_val__16065_16170,_STAR_parent_description_STAR__temp_val__16066_16171,description__11262__auto____$1,_STAR_parent_description_STAR__orig_val__15935_16164,_STAR_parent_description_STAR__temp_val__15936_16165,description__11262__auto___16163){
return (function (){
cljs.core.swap_BANG_.call(null,tic_tac_toe.screens.play_spec.state,cljs.core.assoc,new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"x","x",2099068185));

c3kit.wire.spec_helper.render.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tic_tac_toe.render_screen.render_screen,tic_tac_toe.screens.play_spec.state], null));

var expected__11399__auto__ = "X's turn!";
var actual__11400__auto__ = c3kit.wire.spec_helper.text.call(null,"#play-heading");
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
});})(_STAR_parent_description_STAR__orig_val__16065_16170,_STAR_parent_description_STAR__temp_val__16066_16171,description__11262__auto____$1,_STAR_parent_description_STAR__orig_val__15935_16164,_STAR_parent_description_STAR__temp_val__15936_16165,description__11262__auto___16163))
,false),speclj.components.new_characteristic.call(null,"prompts player o for move",((function (_STAR_parent_description_STAR__orig_val__16065_16170,_STAR_parent_description_STAR__temp_val__16066_16171,description__11262__auto____$1,_STAR_parent_description_STAR__orig_val__15935_16164,_STAR_parent_description_STAR__temp_val__15936_16165,description__11262__auto___16163){
return (function (){
cljs.core.swap_BANG_.call(null,tic_tac_toe.screens.play_spec.state,cljs.core.assoc,new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"o","o",-1350007228));

c3kit.wire.spec_helper.render.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tic_tac_toe.render_screen.render_screen,tic_tac_toe.screens.play_spec.state], null));

var expected__11399__auto__ = "O's turn!";
var actual__11400__auto__ = c3kit.wire.spec_helper.text.call(null,"#play-heading");
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
});})(_STAR_parent_description_STAR__orig_val__16065_16170,_STAR_parent_description_STAR__temp_val__16066_16171,description__11262__auto____$1,_STAR_parent_description_STAR__orig_val__15935_16164,_STAR_parent_description_STAR__temp_val__15936_16165,description__11262__auto___16163))
,false),speclj.components.new_characteristic.call(null,"displays game state if game over",((function (_STAR_parent_description_STAR__orig_val__16065_16170,_STAR_parent_description_STAR__temp_val__16066_16171,description__11262__auto____$1,_STAR_parent_description_STAR__orig_val__15935_16164,_STAR_parent_description_STAR__temp_val__15936_16165,description__11262__auto___16163){
return (function (){
cljs.core.swap_BANG_.call(null,tic_tac_toe.screens.play_spec.state,cljs.core.assoc,new cljs.core.Keyword(null,"game-state","game-state",935682735),"X wins!");

c3kit.wire.spec_helper.render.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tic_tac_toe.render_screen.render_screen,tic_tac_toe.screens.play_spec.state], null));

var expected__11399__auto__ = "X wins!";
var actual__11400__auto__ = c3kit.wire.spec_helper.text.call(null,"#play-heading");
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
});})(_STAR_parent_description_STAR__orig_val__16065_16170,_STAR_parent_description_STAR__temp_val__16066_16171,description__11262__auto____$1,_STAR_parent_description_STAR__orig_val__15935_16164,_STAR_parent_description_STAR__temp_val__15936_16165,description__11262__auto___16163))
,false)],null)));
var chunk__16068_16173 = null;
var count__16069_16174 = (0);
var i__16070_16175 = (0);
while(true){
if((i__16070_16175 < count__16069_16174)){
var component__11263__auto___16176 = cljs.core._nth.call(null,chunk__16068_16173,i__16070_16175);
speclj.components.install.call(null,component__11263__auto___16176,description__11262__auto____$1);


var G__16177 = seq__16067_16172;
var G__16178 = chunk__16068_16173;
var G__16179 = count__16069_16174;
var G__16180 = (i__16070_16175 + (1));
seq__16067_16172 = G__16177;
chunk__16068_16173 = G__16178;
count__16069_16174 = G__16179;
i__16070_16175 = G__16180;
continue;
} else {
var temp__5804__auto___16181 = cljs.core.seq.call(null,seq__16067_16172);
if(temp__5804__auto___16181){
var seq__16067_16182__$1 = temp__5804__auto___16181;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16067_16182__$1)){
var c__5525__auto___16183 = cljs.core.chunk_first.call(null,seq__16067_16182__$1);
var G__16184 = cljs.core.chunk_rest.call(null,seq__16067_16182__$1);
var G__16185 = c__5525__auto___16183;
var G__16186 = cljs.core.count.call(null,c__5525__auto___16183);
var G__16187 = (0);
seq__16067_16172 = G__16184;
chunk__16068_16173 = G__16185;
count__16069_16174 = G__16186;
i__16070_16175 = G__16187;
continue;
} else {
var component__11263__auto___16188 = cljs.core.first.call(null,seq__16067_16182__$1);
speclj.components.install.call(null,component__11263__auto___16188,description__11262__auto____$1);


var G__16189 = cljs.core.next.call(null,seq__16067_16182__$1);
var G__16190 = null;
var G__16191 = (0);
var G__16192 = (0);
seq__16067_16172 = G__16189;
chunk__16068_16173 = G__16190;
count__16069_16174 = G__16191;
i__16070_16175 = G__16192;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__16065_16170);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__11262__auto____$1);
}

return description__11262__auto____$1;
})(),(function (){var description__11262__auto____$1 = speclj.components.new_description.call(null,"3x3",false,"tic-tac-toe.screens.play-spec");
var _STAR_parent_description_STAR__orig_val__16071_16193 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__16072_16194 = description__11262__auto____$1;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__16072_16194);

try{var seq__16073_16195 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,8,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_before.call(null,((function (_STAR_parent_description_STAR__orig_val__16071_16193,_STAR_parent_description_STAR__temp_val__16072_16194,description__11262__auto____$1,_STAR_parent_description_STAR__orig_val__15935_16164,_STAR_parent_description_STAR__temp_val__15936_16165,description__11262__auto___16163){
return (function (){
cljs.core.reset_BANG_.call(null,tic_tac_toe.screens.play_spec.state,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"current-screen","current-screen",-1454713691),new cljs.core.Keyword(null,"play","play",-580418022),new cljs.core.Keyword(null,"board","board",-1907017633),tic_tac_toe.screens.play_spec.board_3,new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"mode","mode",654403691),(1)], null));

return c3kit.wire.spec_helper.render.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tic_tac_toe.render_screen.render_screen,tic_tac_toe.screens.play_spec.state], null));
});})(_STAR_parent_description_STAR__orig_val__16071_16193,_STAR_parent_description_STAR__temp_val__16072_16194,description__11262__auto____$1,_STAR_parent_description_STAR__orig_val__15935_16164,_STAR_parent_description_STAR__temp_val__15936_16165,description__11262__auto___16163))
),speclj.components.new_characteristic.call(null,"renders board",((function (_STAR_parent_description_STAR__orig_val__16071_16193,_STAR_parent_description_STAR__temp_val__16072_16194,description__11262__auto____$1,_STAR_parent_description_STAR__orig_val__15935_16164,_STAR_parent_description_STAR__temp_val__15936_16165,description__11262__auto___16163){
return (function (){
var expected__11399__auto___16199 = (9);
var actual__11400__auto___16200 = cljs.core.count.call(null,cljs.core.vec.call(null,c3kit.wire.js.query_selector_all.call(null,".board-square")));
if(cljs.core._EQ_.call(null,expected__11399__auto___16199,actual__11400__auto___16200)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__11399__auto___16199;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11367__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11367__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__11400__auto___16200;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11367__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11367__auto__);
}
})()," (using =)"].join('')));
}

var value__11762__auto___16201 = "#board-wrapper";
var node__11763__auto___16202 = c3kit.wire.spec_helper.select.call(null,value__11762__auto___16201);
if(cljs.core.truth_(node__11763__auto___16202)){
} else {
throw (new speclj.platform.SpecFailure(["Expected selector to find node: ",(function (){var temp__5806__auto__ = value__11762__auto___16201;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11367__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11367__auto__);
}
})()].join('')));
}

var value__11762__auto__ = ".three-grid";
var node__11763__auto__ = c3kit.wire.spec_helper.select.call(null,value__11762__auto__);
if(cljs.core.truth_(node__11763__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected selector to find node: ",(function (){var temp__5806__auto__ = value__11762__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11367__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11367__auto__);
}
})()].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__16071_16193,_STAR_parent_description_STAR__temp_val__16072_16194,description__11262__auto____$1,_STAR_parent_description_STAR__orig_val__15935_16164,_STAR_parent_description_STAR__temp_val__15936_16165,description__11262__auto___16163))
,false),speclj.components.new_characteristic.call(null,"buttons have IDs 0-8",((function (_STAR_parent_description_STAR__orig_val__16071_16193,_STAR_parent_description_STAR__temp_val__16072_16194,description__11262__auto____$1,_STAR_parent_description_STAR__orig_val__15935_16164,_STAR_parent_description_STAR__temp_val__15936_16165,description__11262__auto___16163){
return (function (){
var seq__16097 = cljs.core.seq.call(null,cljs.core.range.call(null,(9)));
var chunk__16098 = null;
var count__16099 = (0);
var i__16100 = (0);
while(true){
if((i__16100 < count__16099)){
var n = cljs.core._nth.call(null,chunk__16098,i__16100);
var value__11762__auto___16203 = ["#index-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join('');
var node__11763__auto___16204 = c3kit.wire.spec_helper.select.call(null,value__11762__auto___16203);
if(cljs.core.truth_(node__11763__auto___16204)){
} else {
throw (new speclj.platform.SpecFailure(["Expected selector to find node: ",(function (){var temp__5806__auto__ = value__11762__auto___16203;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11367__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11367__auto__);
}
})()].join('')));
}


var G__16205 = seq__16097;
var G__16206 = chunk__16098;
var G__16207 = count__16099;
var G__16208 = (i__16100 + (1));
seq__16097 = G__16205;
chunk__16098 = G__16206;
count__16099 = G__16207;
i__16100 = G__16208;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__16097);
if(temp__5804__auto__){
var seq__16097__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16097__$1)){
var c__5525__auto__ = cljs.core.chunk_first.call(null,seq__16097__$1);
var G__16209 = cljs.core.chunk_rest.call(null,seq__16097__$1);
var G__16210 = c__5525__auto__;
var G__16211 = cljs.core.count.call(null,c__5525__auto__);
var G__16212 = (0);
seq__16097 = G__16209;
chunk__16098 = G__16210;
count__16099 = G__16211;
i__16100 = G__16212;
continue;
} else {
var n = cljs.core.first.call(null,seq__16097__$1);
var value__11762__auto___16213 = ["#index-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join('');
var node__11763__auto___16214 = c3kit.wire.spec_helper.select.call(null,value__11762__auto___16213);
if(cljs.core.truth_(node__11763__auto___16214)){
} else {
throw (new speclj.platform.SpecFailure(["Expected selector to find node: ",(function (){var temp__5806__auto__ = value__11762__auto___16213;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11367__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11367__auto__);
}
})()].join('')));
}


var G__16215 = cljs.core.next.call(null,seq__16097__$1);
var G__16216 = null;
var G__16217 = (0);
var G__16218 = (0);
seq__16097 = G__16215;
chunk__16098 = G__16216;
count__16099 = G__16217;
i__16100 = G__16218;
continue;
}
} else {
return null;
}
}
break;
}
});})(_STAR_parent_description_STAR__orig_val__16071_16193,_STAR_parent_description_STAR__temp_val__16072_16194,description__11262__auto____$1,_STAR_parent_description_STAR__orig_val__15935_16164,_STAR_parent_description_STAR__temp_val__15936_16165,description__11262__auto___16163))
,false),speclj.components.new_characteristic.call(null,"clicking button updates board in state",((function (_STAR_parent_description_STAR__orig_val__16071_16193,_STAR_parent_description_STAR__temp_val__16072_16194,description__11262__auto____$1,_STAR_parent_description_STAR__orig_val__15935_16164,_STAR_parent_description_STAR__temp_val__15936_16165,description__11262__auto___16163){
return (function (){
var seq__16101 = cljs.core.seq.call(null,cljs.core.range.call(null,(9)));
var chunk__16102 = null;
var count__16103 = (0);
var i__16104 = (0);
while(true){
if((i__16104 < count__16103)){
var n = cljs.core._nth.call(null,chunk__16102,i__16104);
c3kit.wire.spec_helper.click_BANG_.call(null,["#index-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join(''));

var expected__11399__auto___16219 = cljs.core.assoc.call(null,tic_tac_toe.screens.play_spec.board_3,n,new cljs.core.Keyword(null,"x","x",2099068185));
var actual__11400__auto___16220 = new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.screens.play_spec.state));
if(cljs.core._EQ_.call(null,expected__11399__auto___16219,actual__11400__auto___16220)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__11399__auto___16219;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11367__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11367__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__11400__auto___16220;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11367__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11367__auto__);
}
})()," (using =)"].join('')));
}

cljs.core.swap_BANG_.call(null,tic_tac_toe.screens.play_spec.state,cljs.core.assoc,new cljs.core.Keyword(null,"board","board",-1907017633),tic_tac_toe.screens.play_spec.board_3,new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"x","x",2099068185));


var G__16221 = seq__16101;
var G__16222 = chunk__16102;
var G__16223 = count__16103;
var G__16224 = (i__16104 + (1));
seq__16101 = G__16221;
chunk__16102 = G__16222;
count__16103 = G__16223;
i__16104 = G__16224;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__16101);
if(temp__5804__auto__){
var seq__16101__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16101__$1)){
var c__5525__auto__ = cljs.core.chunk_first.call(null,seq__16101__$1);
var G__16225 = cljs.core.chunk_rest.call(null,seq__16101__$1);
var G__16226 = c__5525__auto__;
var G__16227 = cljs.core.count.call(null,c__5525__auto__);
var G__16228 = (0);
seq__16101 = G__16225;
chunk__16102 = G__16226;
count__16103 = G__16227;
i__16104 = G__16228;
continue;
} else {
var n = cljs.core.first.call(null,seq__16101__$1);
c3kit.wire.spec_helper.click_BANG_.call(null,["#index-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join(''));

var expected__11399__auto___16229 = cljs.core.assoc.call(null,tic_tac_toe.screens.play_spec.board_3,n,new cljs.core.Keyword(null,"x","x",2099068185));
var actual__11400__auto___16230 = new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.screens.play_spec.state));
if(cljs.core._EQ_.call(null,expected__11399__auto___16229,actual__11400__auto___16230)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__11399__auto___16229;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11367__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11367__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__11400__auto___16230;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11367__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11367__auto__);
}
})()," (using =)"].join('')));
}

cljs.core.swap_BANG_.call(null,tic_tac_toe.screens.play_spec.state,cljs.core.assoc,new cljs.core.Keyword(null,"board","board",-1907017633),tic_tac_toe.screens.play_spec.board_3,new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"x","x",2099068185));


var G__16231 = cljs.core.next.call(null,seq__16101__$1);
var G__16232 = null;
var G__16233 = (0);
var G__16234 = (0);
seq__16101 = G__16231;
chunk__16102 = G__16232;
count__16103 = G__16233;
i__16104 = G__16234;
continue;
}
} else {
return null;
}
}
break;
}
});})(_STAR_parent_description_STAR__orig_val__16071_16193,_STAR_parent_description_STAR__temp_val__16072_16194,description__11262__auto____$1,_STAR_parent_description_STAR__orig_val__15935_16164,_STAR_parent_description_STAR__temp_val__15936_16165,description__11262__auto___16163))
,false),speclj.components.new_characteristic.call(null,"clicking button swaps player in state",((function (_STAR_parent_description_STAR__orig_val__16071_16193,_STAR_parent_description_STAR__temp_val__16072_16194,description__11262__auto____$1,_STAR_parent_description_STAR__orig_val__15935_16164,_STAR_parent_description_STAR__temp_val__15936_16165,description__11262__auto___16163){
return (function (){
var seq__16105 = cljs.core.seq.call(null,cljs.core.range.call(null,(9)));
var chunk__16106 = null;
var count__16107 = (0);
var i__16108 = (0);
while(true){
if((i__16108 < count__16107)){
var n = cljs.core._nth.call(null,chunk__16106,i__16108);
c3kit.wire.spec_helper.click_BANG_.call(null,["#index-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join(''));

var expected__11399__auto___16235 = new cljs.core.Keyword(null,"o","o",-1350007228);
var actual__11400__auto___16236 = new cljs.core.Keyword(null,"player","player",-97687400).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.screens.play_spec.state));
if(cljs.core._EQ_.call(null,expected__11399__auto___16235,actual__11400__auto___16236)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__11399__auto___16235;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11367__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11367__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__11400__auto___16236;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11367__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11367__auto__);
}
})()," (using =)"].join('')));
}

cljs.core.swap_BANG_.call(null,tic_tac_toe.screens.play_spec.state,cljs.core.assoc,new cljs.core.Keyword(null,"board","board",-1907017633),tic_tac_toe.screens.play_spec.board_3,new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"x","x",2099068185));


var G__16237 = seq__16105;
var G__16238 = chunk__16106;
var G__16239 = count__16107;
var G__16240 = (i__16108 + (1));
seq__16105 = G__16237;
chunk__16106 = G__16238;
count__16107 = G__16239;
i__16108 = G__16240;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__16105);
if(temp__5804__auto__){
var seq__16105__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16105__$1)){
var c__5525__auto__ = cljs.core.chunk_first.call(null,seq__16105__$1);
var G__16241 = cljs.core.chunk_rest.call(null,seq__16105__$1);
var G__16242 = c__5525__auto__;
var G__16243 = cljs.core.count.call(null,c__5525__auto__);
var G__16244 = (0);
seq__16105 = G__16241;
chunk__16106 = G__16242;
count__16107 = G__16243;
i__16108 = G__16244;
continue;
} else {
var n = cljs.core.first.call(null,seq__16105__$1);
c3kit.wire.spec_helper.click_BANG_.call(null,["#index-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join(''));

var expected__11399__auto___16245 = new cljs.core.Keyword(null,"o","o",-1350007228);
var actual__11400__auto___16246 = new cljs.core.Keyword(null,"player","player",-97687400).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.screens.play_spec.state));
if(cljs.core._EQ_.call(null,expected__11399__auto___16245,actual__11400__auto___16246)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__11399__auto___16245;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11367__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11367__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__11400__auto___16246;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11367__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11367__auto__);
}
})()," (using =)"].join('')));
}

cljs.core.swap_BANG_.call(null,tic_tac_toe.screens.play_spec.state,cljs.core.assoc,new cljs.core.Keyword(null,"board","board",-1907017633),tic_tac_toe.screens.play_spec.board_3,new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"x","x",2099068185));


var G__16247 = cljs.core.next.call(null,seq__16105__$1);
var G__16248 = null;
var G__16249 = (0);
var G__16250 = (0);
seq__16105 = G__16247;
chunk__16106 = G__16248;
count__16107 = G__16249;
i__16108 = G__16250;
continue;
}
} else {
return null;
}
}
break;
}
});})(_STAR_parent_description_STAR__orig_val__16071_16193,_STAR_parent_description_STAR__temp_val__16072_16194,description__11262__auto____$1,_STAR_parent_description_STAR__orig_val__15935_16164,_STAR_parent_description_STAR__temp_val__15936_16165,description__11262__auto___16163))
,false),speclj.components.new_characteristic.call(null,"clicking button updates game-state in state",((function (_STAR_parent_description_STAR__orig_val__16071_16193,_STAR_parent_description_STAR__temp_val__16072_16194,description__11262__auto____$1,_STAR_parent_description_STAR__orig_val__15935_16164,_STAR_parent_description_STAR__temp_val__15936_16165,description__11262__auto___16163){
return (function (){
cljs.core.swap_BANG_.call(null,tic_tac_toe.screens.play_spec.state,cljs.core.assoc,new cljs.core.Keyword(null,"board","board",-1907017633),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"o","o",-1350007228),new cljs.core.Keyword(null,"o","o",-1350007228),(6),(7),(8),(9)], null));

c3kit.wire.spec_helper.click_BANG_.call(null,"#index-0");

var expected__11399__auto__ = "X wins!";
var actual__11400__auto__ = new cljs.core.Keyword(null,"game-state","game-state",935682735).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.screens.play_spec.state));
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
});})(_STAR_parent_description_STAR__orig_val__16071_16193,_STAR_parent_description_STAR__temp_val__16072_16194,description__11262__auto____$1,_STAR_parent_description_STAR__orig_val__15935_16164,_STAR_parent_description_STAR__temp_val__15936_16165,description__11262__auto___16163))
,false),speclj.components.new_characteristic.call(null,"clicking button adds token to button HTML",((function (_STAR_parent_description_STAR__orig_val__16071_16193,_STAR_parent_description_STAR__temp_val__16072_16194,description__11262__auto____$1,_STAR_parent_description_STAR__orig_val__15935_16164,_STAR_parent_description_STAR__temp_val__15936_16165,description__11262__auto___16163){
return (function (){
var seq__16109 = cljs.core.seq.call(null,cljs.core.range.call(null,(9)));
var chunk__16110 = null;
var count__16111 = (0);
var i__16112 = (0);
while(true){
if((i__16112 < count__16111)){
var n = cljs.core._nth.call(null,chunk__16110,i__16112);
c3kit.wire.spec_helper.click_BANG_.call(null,["#index-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join(''));

var expected__11399__auto___16251 = "X";
var actual__11400__auto___16252 = c3kit.wire.spec_helper.text.call(null,["#index-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join(''));
if(cljs.core._EQ_.call(null,expected__11399__auto___16251,actual__11400__auto___16252)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__11399__auto___16251;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11367__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11367__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__11400__auto___16252;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11367__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11367__auto__);
}
})()," (using =)"].join('')));
}

cljs.core.reset_BANG_.call(null,tic_tac_toe.screens.play_spec.state,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"board","board",-1907017633),tic_tac_toe.screens.play_spec.board_3,new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"current-screen","current-screen",-1454713691),new cljs.core.Keyword(null,"play","play",-580418022),new cljs.core.Keyword(null,"mode","mode",654403691),(1)], null));


var G__16253 = seq__16109;
var G__16254 = chunk__16110;
var G__16255 = count__16111;
var G__16256 = (i__16112 + (1));
seq__16109 = G__16253;
chunk__16110 = G__16254;
count__16111 = G__16255;
i__16112 = G__16256;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__16109);
if(temp__5804__auto__){
var seq__16109__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16109__$1)){
var c__5525__auto__ = cljs.core.chunk_first.call(null,seq__16109__$1);
var G__16257 = cljs.core.chunk_rest.call(null,seq__16109__$1);
var G__16258 = c__5525__auto__;
var G__16259 = cljs.core.count.call(null,c__5525__auto__);
var G__16260 = (0);
seq__16109 = G__16257;
chunk__16110 = G__16258;
count__16111 = G__16259;
i__16112 = G__16260;
continue;
} else {
var n = cljs.core.first.call(null,seq__16109__$1);
c3kit.wire.spec_helper.click_BANG_.call(null,["#index-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join(''));

var expected__11399__auto___16261 = "X";
var actual__11400__auto___16262 = c3kit.wire.spec_helper.text.call(null,["#index-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join(''));
if(cljs.core._EQ_.call(null,expected__11399__auto___16261,actual__11400__auto___16262)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__11399__auto___16261;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11367__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11367__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__11400__auto___16262;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11367__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11367__auto__);
}
})()," (using =)"].join('')));
}

cljs.core.reset_BANG_.call(null,tic_tac_toe.screens.play_spec.state,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"board","board",-1907017633),tic_tac_toe.screens.play_spec.board_3,new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"current-screen","current-screen",-1454713691),new cljs.core.Keyword(null,"play","play",-580418022),new cljs.core.Keyword(null,"mode","mode",654403691),(1)], null));


var G__16263 = cljs.core.next.call(null,seq__16109__$1);
var G__16264 = null;
var G__16265 = (0);
var G__16266 = (0);
seq__16109 = G__16263;
chunk__16110 = G__16264;
count__16111 = G__16265;
i__16112 = G__16266;
continue;
}
} else {
return null;
}
}
break;
}
});})(_STAR_parent_description_STAR__orig_val__16071_16193,_STAR_parent_description_STAR__temp_val__16072_16194,description__11262__auto____$1,_STAR_parent_description_STAR__orig_val__15935_16164,_STAR_parent_description_STAR__temp_val__15936_16165,description__11262__auto___16163))
,false),speclj.components.new_characteristic.call(null,"clicking button disables button",((function (_STAR_parent_description_STAR__orig_val__16071_16193,_STAR_parent_description_STAR__temp_val__16072_16194,description__11262__auto____$1,_STAR_parent_description_STAR__orig_val__15935_16164,_STAR_parent_description_STAR__temp_val__15936_16165,description__11262__auto___16163){
return (function (){
var seq__16113 = cljs.core.seq.call(null,cljs.core.range.call(null,(9)));
var chunk__16114 = null;
var count__16115 = (0);
var i__16116 = (0);
while(true){
if((i__16116 < count__16115)){
var n = cljs.core._nth.call(null,chunk__16114,i__16116);
c3kit.wire.spec_helper.click_BANG_.call(null,["#index-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join(''));

var expected__11399__auto___16267 = true;
var actual__11400__auto___16268 = c3kit.wire.spec_helper.disabled_QMARK_.call(null,["#index-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join(''));
if(cljs.core._EQ_.call(null,expected__11399__auto___16267,actual__11400__auto___16268)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__11399__auto___16267;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11367__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11367__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__11400__auto___16268;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11367__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11367__auto__);
}
})()," (using =)"].join('')));
}

cljs.core.reset_BANG_.call(null,tic_tac_toe.screens.play_spec.state,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"board","board",-1907017633),tic_tac_toe.screens.play_spec.board_3,new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"current-screen","current-screen",-1454713691),new cljs.core.Keyword(null,"play","play",-580418022),new cljs.core.Keyword(null,"mode","mode",654403691),(1)], null));


var G__16269 = seq__16113;
var G__16270 = chunk__16114;
var G__16271 = count__16115;
var G__16272 = (i__16116 + (1));
seq__16113 = G__16269;
chunk__16114 = G__16270;
count__16115 = G__16271;
i__16116 = G__16272;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__16113);
if(temp__5804__auto__){
var seq__16113__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16113__$1)){
var c__5525__auto__ = cljs.core.chunk_first.call(null,seq__16113__$1);
var G__16273 = cljs.core.chunk_rest.call(null,seq__16113__$1);
var G__16274 = c__5525__auto__;
var G__16275 = cljs.core.count.call(null,c__5525__auto__);
var G__16276 = (0);
seq__16113 = G__16273;
chunk__16114 = G__16274;
count__16115 = G__16275;
i__16116 = G__16276;
continue;
} else {
var n = cljs.core.first.call(null,seq__16113__$1);
c3kit.wire.spec_helper.click_BANG_.call(null,["#index-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join(''));

var expected__11399__auto___16277 = true;
var actual__11400__auto___16278 = c3kit.wire.spec_helper.disabled_QMARK_.call(null,["#index-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join(''));
if(cljs.core._EQ_.call(null,expected__11399__auto___16277,actual__11400__auto___16278)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__11399__auto___16277;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11367__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11367__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__11400__auto___16278;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11367__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11367__auto__);
}
})()," (using =)"].join('')));
}

cljs.core.reset_BANG_.call(null,tic_tac_toe.screens.play_spec.state,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"board","board",-1907017633),tic_tac_toe.screens.play_spec.board_3,new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"current-screen","current-screen",-1454713691),new cljs.core.Keyword(null,"play","play",-580418022),new cljs.core.Keyword(null,"mode","mode",654403691),(1)], null));


var G__16279 = cljs.core.next.call(null,seq__16113__$1);
var G__16280 = null;
var G__16281 = (0);
var G__16282 = (0);
seq__16113 = G__16279;
chunk__16114 = G__16280;
count__16115 = G__16281;
i__16116 = G__16282;
continue;
}
} else {
return null;
}
}
break;
}
});})(_STAR_parent_description_STAR__orig_val__16071_16193,_STAR_parent_description_STAR__temp_val__16072_16194,description__11262__auto____$1,_STAR_parent_description_STAR__orig_val__15935_16164,_STAR_parent_description_STAR__temp_val__15936_16165,description__11262__auto___16163))
,false)],null)));
var chunk__16074_16196 = null;
var count__16075_16197 = (0);
var i__16076_16198 = (0);
while(true){
if((i__16076_16198 < count__16075_16197)){
var component__11263__auto___16283 = cljs.core._nth.call(null,chunk__16074_16196,i__16076_16198);
speclj.components.install.call(null,component__11263__auto___16283,description__11262__auto____$1);


var G__16284 = seq__16073_16195;
var G__16285 = chunk__16074_16196;
var G__16286 = count__16075_16197;
var G__16287 = (i__16076_16198 + (1));
seq__16073_16195 = G__16284;
chunk__16074_16196 = G__16285;
count__16075_16197 = G__16286;
i__16076_16198 = G__16287;
continue;
} else {
var temp__5804__auto___16288 = cljs.core.seq.call(null,seq__16073_16195);
if(temp__5804__auto___16288){
var seq__16073_16289__$1 = temp__5804__auto___16288;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16073_16289__$1)){
var c__5525__auto___16290 = cljs.core.chunk_first.call(null,seq__16073_16289__$1);
var G__16291 = cljs.core.chunk_rest.call(null,seq__16073_16289__$1);
var G__16292 = c__5525__auto___16290;
var G__16293 = cljs.core.count.call(null,c__5525__auto___16290);
var G__16294 = (0);
seq__16073_16195 = G__16291;
chunk__16074_16196 = G__16292;
count__16075_16197 = G__16293;
i__16076_16198 = G__16294;
continue;
} else {
var component__11263__auto___16295 = cljs.core.first.call(null,seq__16073_16289__$1);
speclj.components.install.call(null,component__11263__auto___16295,description__11262__auto____$1);


var G__16296 = cljs.core.next.call(null,seq__16073_16289__$1);
var G__16297 = null;
var G__16298 = (0);
var G__16299 = (0);
seq__16073_16195 = G__16296;
chunk__16074_16196 = G__16297;
count__16075_16197 = G__16298;
i__16076_16198 = G__16299;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__16071_16193);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__11262__auto____$1);
}

return description__11262__auto____$1;
})(),(function (){var description__11262__auto____$1 = speclj.components.new_description.call(null,"4x4",false,"tic-tac-toe.screens.play-spec");
var _STAR_parent_description_STAR__orig_val__16117_16300 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__16118_16301 = description__11262__auto____$1;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__16118_16301);

try{var seq__16119_16302 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,7,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_before.call(null,((function (_STAR_parent_description_STAR__orig_val__16117_16300,_STAR_parent_description_STAR__temp_val__16118_16301,description__11262__auto____$1,_STAR_parent_description_STAR__orig_val__15935_16164,_STAR_parent_description_STAR__temp_val__15936_16165,description__11262__auto___16163){
return (function (){
cljs.core.reset_BANG_.call(null,tic_tac_toe.screens.play_spec.state,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"current-screen","current-screen",-1454713691),new cljs.core.Keyword(null,"play","play",-580418022),new cljs.core.Keyword(null,"board","board",-1907017633),tic_tac_toe.screens.play_spec.board_4,new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"mode","mode",654403691),(1)], null));

return c3kit.wire.spec_helper.render.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tic_tac_toe.render_screen.render_screen,tic_tac_toe.screens.play_spec.state], null));
});})(_STAR_parent_description_STAR__orig_val__16117_16300,_STAR_parent_description_STAR__temp_val__16118_16301,description__11262__auto____$1,_STAR_parent_description_STAR__orig_val__15935_16164,_STAR_parent_description_STAR__temp_val__15936_16165,description__11262__auto___16163))
),speclj.components.new_characteristic.call(null,"renders board",((function (_STAR_parent_description_STAR__orig_val__16117_16300,_STAR_parent_description_STAR__temp_val__16118_16301,description__11262__auto____$1,_STAR_parent_description_STAR__orig_val__15935_16164,_STAR_parent_description_STAR__temp_val__15936_16165,description__11262__auto___16163){
return (function (){
var expected__11399__auto___16306 = (16);
var actual__11400__auto___16307 = cljs.core.count.call(null,cljs.core.vec.call(null,c3kit.wire.js.query_selector_all.call(null,".board-square")));
if(cljs.core._EQ_.call(null,expected__11399__auto___16306,actual__11400__auto___16307)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__11399__auto___16306;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11367__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11367__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__11400__auto___16307;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11367__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11367__auto__);
}
})()," (using =)"].join('')));
}

var value__11762__auto___16308 = "#board-wrapper";
var node__11763__auto___16309 = c3kit.wire.spec_helper.select.call(null,value__11762__auto___16308);
if(cljs.core.truth_(node__11763__auto___16309)){
} else {
throw (new speclj.platform.SpecFailure(["Expected selector to find node: ",(function (){var temp__5806__auto__ = value__11762__auto___16308;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11367__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11367__auto__);
}
})()].join('')));
}

var value__11762__auto__ = ".four-grid";
var node__11763__auto__ = c3kit.wire.spec_helper.select.call(null,value__11762__auto__);
if(cljs.core.truth_(node__11763__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected selector to find node: ",(function (){var temp__5806__auto__ = value__11762__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11367__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11367__auto__);
}
})()].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__16117_16300,_STAR_parent_description_STAR__temp_val__16118_16301,description__11262__auto____$1,_STAR_parent_description_STAR__orig_val__15935_16164,_STAR_parent_description_STAR__temp_val__15936_16165,description__11262__auto___16163))
,false),speclj.components.new_characteristic.call(null,"buttons have IDs 0-15",((function (_STAR_parent_description_STAR__orig_val__16117_16300,_STAR_parent_description_STAR__temp_val__16118_16301,description__11262__auto____$1,_STAR_parent_description_STAR__orig_val__15935_16164,_STAR_parent_description_STAR__temp_val__15936_16165,description__11262__auto___16163){
return (function (){
var seq__16143 = cljs.core.seq.call(null,cljs.core.range.call(null,(16)));
var chunk__16144 = null;
var count__16145 = (0);
var i__16146 = (0);
while(true){
if((i__16146 < count__16145)){
var n = cljs.core._nth.call(null,chunk__16144,i__16146);
var value__11762__auto___16310 = ["#index-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join('');
var node__11763__auto___16311 = c3kit.wire.spec_helper.select.call(null,value__11762__auto___16310);
if(cljs.core.truth_(node__11763__auto___16311)){
} else {
throw (new speclj.platform.SpecFailure(["Expected selector to find node: ",(function (){var temp__5806__auto__ = value__11762__auto___16310;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11367__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11367__auto__);
}
})()].join('')));
}


var G__16312 = seq__16143;
var G__16313 = chunk__16144;
var G__16314 = count__16145;
var G__16315 = (i__16146 + (1));
seq__16143 = G__16312;
chunk__16144 = G__16313;
count__16145 = G__16314;
i__16146 = G__16315;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__16143);
if(temp__5804__auto__){
var seq__16143__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16143__$1)){
var c__5525__auto__ = cljs.core.chunk_first.call(null,seq__16143__$1);
var G__16316 = cljs.core.chunk_rest.call(null,seq__16143__$1);
var G__16317 = c__5525__auto__;
var G__16318 = cljs.core.count.call(null,c__5525__auto__);
var G__16319 = (0);
seq__16143 = G__16316;
chunk__16144 = G__16317;
count__16145 = G__16318;
i__16146 = G__16319;
continue;
} else {
var n = cljs.core.first.call(null,seq__16143__$1);
var value__11762__auto___16320 = ["#index-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join('');
var node__11763__auto___16321 = c3kit.wire.spec_helper.select.call(null,value__11762__auto___16320);
if(cljs.core.truth_(node__11763__auto___16321)){
} else {
throw (new speclj.platform.SpecFailure(["Expected selector to find node: ",(function (){var temp__5806__auto__ = value__11762__auto___16320;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11367__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11367__auto__);
}
})()].join('')));
}


var G__16322 = cljs.core.next.call(null,seq__16143__$1);
var G__16323 = null;
var G__16324 = (0);
var G__16325 = (0);
seq__16143 = G__16322;
chunk__16144 = G__16323;
count__16145 = G__16324;
i__16146 = G__16325;
continue;
}
} else {
return null;
}
}
break;
}
});})(_STAR_parent_description_STAR__orig_val__16117_16300,_STAR_parent_description_STAR__temp_val__16118_16301,description__11262__auto____$1,_STAR_parent_description_STAR__orig_val__15935_16164,_STAR_parent_description_STAR__temp_val__15936_16165,description__11262__auto___16163))
,false),speclj.components.new_characteristic.call(null,"clicking button updates board in state",((function (_STAR_parent_description_STAR__orig_val__16117_16300,_STAR_parent_description_STAR__temp_val__16118_16301,description__11262__auto____$1,_STAR_parent_description_STAR__orig_val__15935_16164,_STAR_parent_description_STAR__temp_val__15936_16165,description__11262__auto___16163){
return (function (){
var seq__16147 = cljs.core.seq.call(null,cljs.core.range.call(null,(16)));
var chunk__16148 = null;
var count__16149 = (0);
var i__16150 = (0);
while(true){
if((i__16150 < count__16149)){
var n = cljs.core._nth.call(null,chunk__16148,i__16150);
c3kit.wire.spec_helper.click_BANG_.call(null,["#index-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join(''));

var expected__11399__auto___16326 = cljs.core.assoc.call(null,tic_tac_toe.screens.play_spec.board_4,n,new cljs.core.Keyword(null,"x","x",2099068185));
var actual__11400__auto___16327 = new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.screens.play_spec.state));
if(cljs.core._EQ_.call(null,expected__11399__auto___16326,actual__11400__auto___16327)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__11399__auto___16326;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11367__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11367__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__11400__auto___16327;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11367__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11367__auto__);
}
})()," (using =)"].join('')));
}

cljs.core.swap_BANG_.call(null,tic_tac_toe.screens.play_spec.state,cljs.core.assoc,new cljs.core.Keyword(null,"board","board",-1907017633),tic_tac_toe.screens.play_spec.board_4,new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"x","x",2099068185));


var G__16328 = seq__16147;
var G__16329 = chunk__16148;
var G__16330 = count__16149;
var G__16331 = (i__16150 + (1));
seq__16147 = G__16328;
chunk__16148 = G__16329;
count__16149 = G__16330;
i__16150 = G__16331;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__16147);
if(temp__5804__auto__){
var seq__16147__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16147__$1)){
var c__5525__auto__ = cljs.core.chunk_first.call(null,seq__16147__$1);
var G__16332 = cljs.core.chunk_rest.call(null,seq__16147__$1);
var G__16333 = c__5525__auto__;
var G__16334 = cljs.core.count.call(null,c__5525__auto__);
var G__16335 = (0);
seq__16147 = G__16332;
chunk__16148 = G__16333;
count__16149 = G__16334;
i__16150 = G__16335;
continue;
} else {
var n = cljs.core.first.call(null,seq__16147__$1);
c3kit.wire.spec_helper.click_BANG_.call(null,["#index-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join(''));

var expected__11399__auto___16336 = cljs.core.assoc.call(null,tic_tac_toe.screens.play_spec.board_4,n,new cljs.core.Keyword(null,"x","x",2099068185));
var actual__11400__auto___16337 = new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.screens.play_spec.state));
if(cljs.core._EQ_.call(null,expected__11399__auto___16336,actual__11400__auto___16337)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__11399__auto___16336;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11367__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11367__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__11400__auto___16337;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11367__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11367__auto__);
}
})()," (using =)"].join('')));
}

cljs.core.swap_BANG_.call(null,tic_tac_toe.screens.play_spec.state,cljs.core.assoc,new cljs.core.Keyword(null,"board","board",-1907017633),tic_tac_toe.screens.play_spec.board_4,new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"x","x",2099068185));


var G__16338 = cljs.core.next.call(null,seq__16147__$1);
var G__16339 = null;
var G__16340 = (0);
var G__16341 = (0);
seq__16147 = G__16338;
chunk__16148 = G__16339;
count__16149 = G__16340;
i__16150 = G__16341;
continue;
}
} else {
return null;
}
}
break;
}
});})(_STAR_parent_description_STAR__orig_val__16117_16300,_STAR_parent_description_STAR__temp_val__16118_16301,description__11262__auto____$1,_STAR_parent_description_STAR__orig_val__15935_16164,_STAR_parent_description_STAR__temp_val__15936_16165,description__11262__auto___16163))
,false),speclj.components.new_characteristic.call(null,"clicking button swaps player in state",((function (_STAR_parent_description_STAR__orig_val__16117_16300,_STAR_parent_description_STAR__temp_val__16118_16301,description__11262__auto____$1,_STAR_parent_description_STAR__orig_val__15935_16164,_STAR_parent_description_STAR__temp_val__15936_16165,description__11262__auto___16163){
return (function (){
var seq__16151 = cljs.core.seq.call(null,cljs.core.range.call(null,(16)));
var chunk__16152 = null;
var count__16153 = (0);
var i__16154 = (0);
while(true){
if((i__16154 < count__16153)){
var n = cljs.core._nth.call(null,chunk__16152,i__16154);
c3kit.wire.spec_helper.click_BANG_.call(null,["#index-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join(''));

var expected__11399__auto___16342 = new cljs.core.Keyword(null,"o","o",-1350007228);
var actual__11400__auto___16343 = new cljs.core.Keyword(null,"player","player",-97687400).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.screens.play_spec.state));
if(cljs.core._EQ_.call(null,expected__11399__auto___16342,actual__11400__auto___16343)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__11399__auto___16342;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11367__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11367__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__11400__auto___16343;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11367__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11367__auto__);
}
})()," (using =)"].join('')));
}

cljs.core.swap_BANG_.call(null,tic_tac_toe.screens.play_spec.state,cljs.core.assoc,new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"x","x",2099068185));


var G__16344 = seq__16151;
var G__16345 = chunk__16152;
var G__16346 = count__16153;
var G__16347 = (i__16154 + (1));
seq__16151 = G__16344;
chunk__16152 = G__16345;
count__16153 = G__16346;
i__16154 = G__16347;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__16151);
if(temp__5804__auto__){
var seq__16151__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16151__$1)){
var c__5525__auto__ = cljs.core.chunk_first.call(null,seq__16151__$1);
var G__16348 = cljs.core.chunk_rest.call(null,seq__16151__$1);
var G__16349 = c__5525__auto__;
var G__16350 = cljs.core.count.call(null,c__5525__auto__);
var G__16351 = (0);
seq__16151 = G__16348;
chunk__16152 = G__16349;
count__16153 = G__16350;
i__16154 = G__16351;
continue;
} else {
var n = cljs.core.first.call(null,seq__16151__$1);
c3kit.wire.spec_helper.click_BANG_.call(null,["#index-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join(''));

var expected__11399__auto___16352 = new cljs.core.Keyword(null,"o","o",-1350007228);
var actual__11400__auto___16353 = new cljs.core.Keyword(null,"player","player",-97687400).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.screens.play_spec.state));
if(cljs.core._EQ_.call(null,expected__11399__auto___16352,actual__11400__auto___16353)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__11399__auto___16352;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11367__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11367__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__11400__auto___16353;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11367__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11367__auto__);
}
})()," (using =)"].join('')));
}

cljs.core.swap_BANG_.call(null,tic_tac_toe.screens.play_spec.state,cljs.core.assoc,new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"x","x",2099068185));


var G__16354 = cljs.core.next.call(null,seq__16151__$1);
var G__16355 = null;
var G__16356 = (0);
var G__16357 = (0);
seq__16151 = G__16354;
chunk__16152 = G__16355;
count__16153 = G__16356;
i__16154 = G__16357;
continue;
}
} else {
return null;
}
}
break;
}
});})(_STAR_parent_description_STAR__orig_val__16117_16300,_STAR_parent_description_STAR__temp_val__16118_16301,description__11262__auto____$1,_STAR_parent_description_STAR__orig_val__15935_16164,_STAR_parent_description_STAR__temp_val__15936_16165,description__11262__auto___16163))
,false),speclj.components.new_characteristic.call(null,"clicking button adds token to button HTML",((function (_STAR_parent_description_STAR__orig_val__16117_16300,_STAR_parent_description_STAR__temp_val__16118_16301,description__11262__auto____$1,_STAR_parent_description_STAR__orig_val__15935_16164,_STAR_parent_description_STAR__temp_val__15936_16165,description__11262__auto___16163){
return (function (){
var seq__16155 = cljs.core.seq.call(null,cljs.core.range.call(null,(16)));
var chunk__16156 = null;
var count__16157 = (0);
var i__16158 = (0);
while(true){
if((i__16158 < count__16157)){
var n = cljs.core._nth.call(null,chunk__16156,i__16158);
c3kit.wire.spec_helper.click_BANG_.call(null,["#index-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join(''));

var expected__11399__auto___16358 = "X";
var actual__11400__auto___16359 = c3kit.wire.spec_helper.text.call(null,["#index-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join(''));
if(cljs.core._EQ_.call(null,expected__11399__auto___16358,actual__11400__auto___16359)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__11399__auto___16358;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11367__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11367__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__11400__auto___16359;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11367__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11367__auto__);
}
})()," (using =)"].join('')));
}

cljs.core.reset_BANG_.call(null,tic_tac_toe.screens.play_spec.state,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"board","board",-1907017633),tic_tac_toe.screens.play_spec.board_4,new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"current-screen","current-screen",-1454713691),new cljs.core.Keyword(null,"play","play",-580418022),new cljs.core.Keyword(null,"mode","mode",654403691),(1)], null));


var G__16360 = seq__16155;
var G__16361 = chunk__16156;
var G__16362 = count__16157;
var G__16363 = (i__16158 + (1));
seq__16155 = G__16360;
chunk__16156 = G__16361;
count__16157 = G__16362;
i__16158 = G__16363;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__16155);
if(temp__5804__auto__){
var seq__16155__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16155__$1)){
var c__5525__auto__ = cljs.core.chunk_first.call(null,seq__16155__$1);
var G__16364 = cljs.core.chunk_rest.call(null,seq__16155__$1);
var G__16365 = c__5525__auto__;
var G__16366 = cljs.core.count.call(null,c__5525__auto__);
var G__16367 = (0);
seq__16155 = G__16364;
chunk__16156 = G__16365;
count__16157 = G__16366;
i__16158 = G__16367;
continue;
} else {
var n = cljs.core.first.call(null,seq__16155__$1);
c3kit.wire.spec_helper.click_BANG_.call(null,["#index-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join(''));

var expected__11399__auto___16368 = "X";
var actual__11400__auto___16369 = c3kit.wire.spec_helper.text.call(null,["#index-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join(''));
if(cljs.core._EQ_.call(null,expected__11399__auto___16368,actual__11400__auto___16369)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__11399__auto___16368;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11367__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11367__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__11400__auto___16369;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11367__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11367__auto__);
}
})()," (using =)"].join('')));
}

cljs.core.reset_BANG_.call(null,tic_tac_toe.screens.play_spec.state,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"board","board",-1907017633),tic_tac_toe.screens.play_spec.board_4,new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"current-screen","current-screen",-1454713691),new cljs.core.Keyword(null,"play","play",-580418022),new cljs.core.Keyword(null,"mode","mode",654403691),(1)], null));


var G__16370 = cljs.core.next.call(null,seq__16155__$1);
var G__16371 = null;
var G__16372 = (0);
var G__16373 = (0);
seq__16155 = G__16370;
chunk__16156 = G__16371;
count__16157 = G__16372;
i__16158 = G__16373;
continue;
}
} else {
return null;
}
}
break;
}
});})(_STAR_parent_description_STAR__orig_val__16117_16300,_STAR_parent_description_STAR__temp_val__16118_16301,description__11262__auto____$1,_STAR_parent_description_STAR__orig_val__15935_16164,_STAR_parent_description_STAR__temp_val__15936_16165,description__11262__auto___16163))
,false),speclj.components.new_characteristic.call(null,"clicking button disables button",((function (_STAR_parent_description_STAR__orig_val__16117_16300,_STAR_parent_description_STAR__temp_val__16118_16301,description__11262__auto____$1,_STAR_parent_description_STAR__orig_val__15935_16164,_STAR_parent_description_STAR__temp_val__15936_16165,description__11262__auto___16163){
return (function (){
var seq__16159 = cljs.core.seq.call(null,cljs.core.range.call(null,(16)));
var chunk__16160 = null;
var count__16161 = (0);
var i__16162 = (0);
while(true){
if((i__16162 < count__16161)){
var n = cljs.core._nth.call(null,chunk__16160,i__16162);
c3kit.wire.spec_helper.click_BANG_.call(null,["#index-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join(''));

var expected__11399__auto___16374 = true;
var actual__11400__auto___16375 = c3kit.wire.spec_helper.disabled_QMARK_.call(null,["#index-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join(''));
if(cljs.core._EQ_.call(null,expected__11399__auto___16374,actual__11400__auto___16375)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__11399__auto___16374;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11367__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11367__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__11400__auto___16375;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11367__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11367__auto__);
}
})()," (using =)"].join('')));
}

cljs.core.reset_BANG_.call(null,tic_tac_toe.screens.play_spec.state,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"board","board",-1907017633),tic_tac_toe.screens.play_spec.board_4,new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"current-screen","current-screen",-1454713691),new cljs.core.Keyword(null,"play","play",-580418022),new cljs.core.Keyword(null,"mode","mode",654403691),(1)], null));


var G__16376 = seq__16159;
var G__16377 = chunk__16160;
var G__16378 = count__16161;
var G__16379 = (i__16162 + (1));
seq__16159 = G__16376;
chunk__16160 = G__16377;
count__16161 = G__16378;
i__16162 = G__16379;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__16159);
if(temp__5804__auto__){
var seq__16159__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16159__$1)){
var c__5525__auto__ = cljs.core.chunk_first.call(null,seq__16159__$1);
var G__16380 = cljs.core.chunk_rest.call(null,seq__16159__$1);
var G__16381 = c__5525__auto__;
var G__16382 = cljs.core.count.call(null,c__5525__auto__);
var G__16383 = (0);
seq__16159 = G__16380;
chunk__16160 = G__16381;
count__16161 = G__16382;
i__16162 = G__16383;
continue;
} else {
var n = cljs.core.first.call(null,seq__16159__$1);
c3kit.wire.spec_helper.click_BANG_.call(null,["#index-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join(''));

var expected__11399__auto___16384 = true;
var actual__11400__auto___16385 = c3kit.wire.spec_helper.disabled_QMARK_.call(null,["#index-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join(''));
if(cljs.core._EQ_.call(null,expected__11399__auto___16384,actual__11400__auto___16385)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__11399__auto___16384;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11367__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11367__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__11400__auto___16385;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11367__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11367__auto__);
}
})()," (using =)"].join('')));
}

cljs.core.reset_BANG_.call(null,tic_tac_toe.screens.play_spec.state,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"board","board",-1907017633),tic_tac_toe.screens.play_spec.board_4,new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"current-screen","current-screen",-1454713691),new cljs.core.Keyword(null,"play","play",-580418022),new cljs.core.Keyword(null,"mode","mode",654403691),(1)], null));


var G__16386 = cljs.core.next.call(null,seq__16159__$1);
var G__16387 = null;
var G__16388 = (0);
var G__16389 = (0);
seq__16159 = G__16386;
chunk__16160 = G__16387;
count__16161 = G__16388;
i__16162 = G__16389;
continue;
}
} else {
return null;
}
}
break;
}
});})(_STAR_parent_description_STAR__orig_val__16117_16300,_STAR_parent_description_STAR__temp_val__16118_16301,description__11262__auto____$1,_STAR_parent_description_STAR__orig_val__15935_16164,_STAR_parent_description_STAR__temp_val__15936_16165,description__11262__auto___16163))
,false)],null)));
var chunk__16120_16303 = null;
var count__16121_16304 = (0);
var i__16122_16305 = (0);
while(true){
if((i__16122_16305 < count__16121_16304)){
var component__11263__auto___16390 = cljs.core._nth.call(null,chunk__16120_16303,i__16122_16305);
speclj.components.install.call(null,component__11263__auto___16390,description__11262__auto____$1);


var G__16391 = seq__16119_16302;
var G__16392 = chunk__16120_16303;
var G__16393 = count__16121_16304;
var G__16394 = (i__16122_16305 + (1));
seq__16119_16302 = G__16391;
chunk__16120_16303 = G__16392;
count__16121_16304 = G__16393;
i__16122_16305 = G__16394;
continue;
} else {
var temp__5804__auto___16395 = cljs.core.seq.call(null,seq__16119_16302);
if(temp__5804__auto___16395){
var seq__16119_16396__$1 = temp__5804__auto___16395;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16119_16396__$1)){
var c__5525__auto___16397 = cljs.core.chunk_first.call(null,seq__16119_16396__$1);
var G__16398 = cljs.core.chunk_rest.call(null,seq__16119_16396__$1);
var G__16399 = c__5525__auto___16397;
var G__16400 = cljs.core.count.call(null,c__5525__auto___16397);
var G__16401 = (0);
seq__16119_16302 = G__16398;
chunk__16120_16303 = G__16399;
count__16121_16304 = G__16400;
i__16122_16305 = G__16401;
continue;
} else {
var component__11263__auto___16402 = cljs.core.first.call(null,seq__16119_16396__$1);
speclj.components.install.call(null,component__11263__auto___16402,description__11262__auto____$1);


var G__16403 = cljs.core.next.call(null,seq__16119_16396__$1);
var G__16404 = null;
var G__16405 = (0);
var G__16406 = (0);
seq__16119_16302 = G__16403;
chunk__16120_16303 = G__16404;
count__16121_16304 = G__16405;
i__16122_16305 = G__16406;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__16117_16300);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__11262__auto____$1);
}

return description__11262__auto____$1;
})()],null)));
var chunk__15938_16167 = null;
var count__15939_16168 = (0);
var i__15940_16169 = (0);
while(true){
if((i__15940_16169 < count__15939_16168)){
var component__11263__auto___16407 = cljs.core._nth.call(null,chunk__15938_16167,i__15940_16169);
speclj.components.install.call(null,component__11263__auto___16407,description__11262__auto___16163);


var G__16408 = seq__15937_16166;
var G__16409 = chunk__15938_16167;
var G__16410 = count__15939_16168;
var G__16411 = (i__15940_16169 + (1));
seq__15937_16166 = G__16408;
chunk__15938_16167 = G__16409;
count__15939_16168 = G__16410;
i__15940_16169 = G__16411;
continue;
} else {
var temp__5804__auto___16412 = cljs.core.seq.call(null,seq__15937_16166);
if(temp__5804__auto___16412){
var seq__15937_16413__$1 = temp__5804__auto___16412;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15937_16413__$1)){
var c__5525__auto___16414 = cljs.core.chunk_first.call(null,seq__15937_16413__$1);
var G__16415 = cljs.core.chunk_rest.call(null,seq__15937_16413__$1);
var G__16416 = c__5525__auto___16414;
var G__16417 = cljs.core.count.call(null,c__5525__auto___16414);
var G__16418 = (0);
seq__15937_16166 = G__16415;
chunk__15938_16167 = G__16416;
count__15939_16168 = G__16417;
i__15940_16169 = G__16418;
continue;
} else {
var component__11263__auto___16419 = cljs.core.first.call(null,seq__15937_16413__$1);
speclj.components.install.call(null,component__11263__auto___16419,description__11262__auto___16163);


var G__16420 = cljs.core.next.call(null,seq__15937_16413__$1);
var G__16421 = null;
var G__16422 = (0);
var G__16423 = (0);
seq__15937_16166 = G__16420;
chunk__15938_16167 = G__16421;
count__15939_16168 = G__16422;
i__15940_16169 = G__16423;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__15935_16164);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__11262__auto___16163);
}


//# sourceMappingURL=play_spec.js.map
