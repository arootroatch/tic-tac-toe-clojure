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
var description__11238__auto___19127 = speclj.components.new_description.call(null,"play screen",false,"tic-tac-toe.screens.play-spec");
var _STAR_parent_description_STAR__orig_val__18925_19128 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__18926_19129 = description__11238__auto___19127;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__18926_19129);

try{var seq__18927_19130 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,4,(5),cljs.core.PersistentVector.EMPTY_NODE,[c3kit.wire.spec_helper.with_root_dom.call(null),(function (){var description__11238__auto____$1 = speclj.components.new_description.call(null,"play heading",false,"tic-tac-toe.screens.play-spec");
var _STAR_parent_description_STAR__orig_val__19029_19134 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__19030_19135 = description__11238__auto____$1;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__19030_19135);

try{var seq__19031_19136 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_characteristic.call(null,"prompts player x for move",((function (_STAR_parent_description_STAR__orig_val__19029_19134,_STAR_parent_description_STAR__temp_val__19030_19135,description__11238__auto____$1,_STAR_parent_description_STAR__orig_val__18925_19128,_STAR_parent_description_STAR__temp_val__18926_19129,description__11238__auto___19127){
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
});})(_STAR_parent_description_STAR__orig_val__19029_19134,_STAR_parent_description_STAR__temp_val__19030_19135,description__11238__auto____$1,_STAR_parent_description_STAR__orig_val__18925_19128,_STAR_parent_description_STAR__temp_val__18926_19129,description__11238__auto___19127))
,false),speclj.components.new_characteristic.call(null,"prompts player o for move",((function (_STAR_parent_description_STAR__orig_val__19029_19134,_STAR_parent_description_STAR__temp_val__19030_19135,description__11238__auto____$1,_STAR_parent_description_STAR__orig_val__18925_19128,_STAR_parent_description_STAR__temp_val__18926_19129,description__11238__auto___19127){
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
});})(_STAR_parent_description_STAR__orig_val__19029_19134,_STAR_parent_description_STAR__temp_val__19030_19135,description__11238__auto____$1,_STAR_parent_description_STAR__orig_val__18925_19128,_STAR_parent_description_STAR__temp_val__18926_19129,description__11238__auto___19127))
,false),speclj.components.new_characteristic.call(null,"displays game state if game over",((function (_STAR_parent_description_STAR__orig_val__19029_19134,_STAR_parent_description_STAR__temp_val__19030_19135,description__11238__auto____$1,_STAR_parent_description_STAR__orig_val__18925_19128,_STAR_parent_description_STAR__temp_val__18926_19129,description__11238__auto___19127){
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
});})(_STAR_parent_description_STAR__orig_val__19029_19134,_STAR_parent_description_STAR__temp_val__19030_19135,description__11238__auto____$1,_STAR_parent_description_STAR__orig_val__18925_19128,_STAR_parent_description_STAR__temp_val__18926_19129,description__11238__auto___19127))
,false)],null)));
var chunk__19032_19137 = null;
var count__19033_19138 = (0);
var i__19034_19139 = (0);
while(true){
if((i__19034_19139 < count__19033_19138)){
var component__11239__auto___19140 = cljs.core._nth.call(null,chunk__19032_19137,i__19034_19139);
speclj.components.install.call(null,component__11239__auto___19140,description__11238__auto____$1);


var G__19141 = seq__19031_19136;
var G__19142 = chunk__19032_19137;
var G__19143 = count__19033_19138;
var G__19144 = (i__19034_19139 + (1));
seq__19031_19136 = G__19141;
chunk__19032_19137 = G__19142;
count__19033_19138 = G__19143;
i__19034_19139 = G__19144;
continue;
} else {
var temp__5804__auto___19145 = cljs.core.seq.call(null,seq__19031_19136);
if(temp__5804__auto___19145){
var seq__19031_19146__$1 = temp__5804__auto___19145;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19031_19146__$1)){
var c__5525__auto___19147 = cljs.core.chunk_first.call(null,seq__19031_19146__$1);
var G__19148 = cljs.core.chunk_rest.call(null,seq__19031_19146__$1);
var G__19149 = c__5525__auto___19147;
var G__19150 = cljs.core.count.call(null,c__5525__auto___19147);
var G__19151 = (0);
seq__19031_19136 = G__19148;
chunk__19032_19137 = G__19149;
count__19033_19138 = G__19150;
i__19034_19139 = G__19151;
continue;
} else {
var component__11239__auto___19152 = cljs.core.first.call(null,seq__19031_19146__$1);
speclj.components.install.call(null,component__11239__auto___19152,description__11238__auto____$1);


var G__19153 = cljs.core.next.call(null,seq__19031_19146__$1);
var G__19154 = null;
var G__19155 = (0);
var G__19156 = (0);
seq__19031_19136 = G__19153;
chunk__19032_19137 = G__19154;
count__19033_19138 = G__19155;
i__19034_19139 = G__19156;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__19029_19134);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__11238__auto____$1);
}

return description__11238__auto____$1;
})(),(function (){var description__11238__auto____$1 = speclj.components.new_description.call(null,"3x3",false,"tic-tac-toe.screens.play-spec");
var _STAR_parent_description_STAR__orig_val__19035_19157 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__19036_19158 = description__11238__auto____$1;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__19036_19158);

try{var seq__19037_19159 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,8,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_before.call(null,((function (_STAR_parent_description_STAR__orig_val__19035_19157,_STAR_parent_description_STAR__temp_val__19036_19158,description__11238__auto____$1,_STAR_parent_description_STAR__orig_val__18925_19128,_STAR_parent_description_STAR__temp_val__18926_19129,description__11238__auto___19127){
return (function (){
cljs.core.reset_BANG_.call(null,tic_tac_toe.screens.play_spec.state,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"current-screen","current-screen",-1454713691),new cljs.core.Keyword(null,"play","play",-580418022),new cljs.core.Keyword(null,"board","board",-1907017633),tic_tac_toe.screens.play_spec.board_3,new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"x","x",2099068185)], null));

return c3kit.wire.spec_helper.render.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tic_tac_toe.render_screen.render_screen,tic_tac_toe.screens.play_spec.state], null));
});})(_STAR_parent_description_STAR__orig_val__19035_19157,_STAR_parent_description_STAR__temp_val__19036_19158,description__11238__auto____$1,_STAR_parent_description_STAR__orig_val__18925_19128,_STAR_parent_description_STAR__temp_val__18926_19129,description__11238__auto___19127))
),speclj.components.new_characteristic.call(null,"renders board",((function (_STAR_parent_description_STAR__orig_val__19035_19157,_STAR_parent_description_STAR__temp_val__19036_19158,description__11238__auto____$1,_STAR_parent_description_STAR__orig_val__18925_19128,_STAR_parent_description_STAR__temp_val__18926_19129,description__11238__auto___19127){
return (function (){
var expected__11375__auto___19163 = (9);
var actual__11376__auto___19164 = cljs.core.count.call(null,cljs.core.vec.call(null,c3kit.wire.js.query_selector_all.call(null,".board-square")));
if(cljs.core._EQ_.call(null,expected__11375__auto___19163,actual__11376__auto___19164)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__11375__auto___19163;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11343__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11343__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__11376__auto___19164;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11343__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11343__auto__);
}
})()," (using =)"].join('')));
}

var value__11738__auto___19165 = "#board-wrapper";
var node__11739__auto___19166 = c3kit.wire.spec_helper.select.call(null,value__11738__auto___19165);
if(cljs.core.truth_(node__11739__auto___19166)){
} else {
throw (new speclj.platform.SpecFailure(["Expected selector to find node: ",(function (){var temp__5806__auto__ = value__11738__auto___19165;
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
});})(_STAR_parent_description_STAR__orig_val__19035_19157,_STAR_parent_description_STAR__temp_val__19036_19158,description__11238__auto____$1,_STAR_parent_description_STAR__orig_val__18925_19128,_STAR_parent_description_STAR__temp_val__18926_19129,description__11238__auto___19127))
,false),speclj.components.new_characteristic.call(null,"buttons have IDs 0-8",((function (_STAR_parent_description_STAR__orig_val__19035_19157,_STAR_parent_description_STAR__temp_val__19036_19158,description__11238__auto____$1,_STAR_parent_description_STAR__orig_val__18925_19128,_STAR_parent_description_STAR__temp_val__18926_19129,description__11238__auto___19127){
return (function (){
var seq__19061 = cljs.core.seq.call(null,cljs.core.range.call(null,(9)));
var chunk__19062 = null;
var count__19063 = (0);
var i__19064 = (0);
while(true){
if((i__19064 < count__19063)){
var n = cljs.core._nth.call(null,chunk__19062,i__19064);
var value__11738__auto___19167 = ["#index-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join('');
var node__11739__auto___19168 = c3kit.wire.spec_helper.select.call(null,value__11738__auto___19167);
if(cljs.core.truth_(node__11739__auto___19168)){
} else {
throw (new speclj.platform.SpecFailure(["Expected selector to find node: ",(function (){var temp__5806__auto__ = value__11738__auto___19167;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11343__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11343__auto__);
}
})()].join('')));
}


var G__19169 = seq__19061;
var G__19170 = chunk__19062;
var G__19171 = count__19063;
var G__19172 = (i__19064 + (1));
seq__19061 = G__19169;
chunk__19062 = G__19170;
count__19063 = G__19171;
i__19064 = G__19172;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__19061);
if(temp__5804__auto__){
var seq__19061__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19061__$1)){
var c__5525__auto__ = cljs.core.chunk_first.call(null,seq__19061__$1);
var G__19173 = cljs.core.chunk_rest.call(null,seq__19061__$1);
var G__19174 = c__5525__auto__;
var G__19175 = cljs.core.count.call(null,c__5525__auto__);
var G__19176 = (0);
seq__19061 = G__19173;
chunk__19062 = G__19174;
count__19063 = G__19175;
i__19064 = G__19176;
continue;
} else {
var n = cljs.core.first.call(null,seq__19061__$1);
var value__11738__auto___19177 = ["#index-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join('');
var node__11739__auto___19178 = c3kit.wire.spec_helper.select.call(null,value__11738__auto___19177);
if(cljs.core.truth_(node__11739__auto___19178)){
} else {
throw (new speclj.platform.SpecFailure(["Expected selector to find node: ",(function (){var temp__5806__auto__ = value__11738__auto___19177;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11343__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11343__auto__);
}
})()].join('')));
}


var G__19179 = cljs.core.next.call(null,seq__19061__$1);
var G__19180 = null;
var G__19181 = (0);
var G__19182 = (0);
seq__19061 = G__19179;
chunk__19062 = G__19180;
count__19063 = G__19181;
i__19064 = G__19182;
continue;
}
} else {
return null;
}
}
break;
}
});})(_STAR_parent_description_STAR__orig_val__19035_19157,_STAR_parent_description_STAR__temp_val__19036_19158,description__11238__auto____$1,_STAR_parent_description_STAR__orig_val__18925_19128,_STAR_parent_description_STAR__temp_val__18926_19129,description__11238__auto___19127))
,false),speclj.components.new_characteristic.call(null,"clicking button updates board in state",((function (_STAR_parent_description_STAR__orig_val__19035_19157,_STAR_parent_description_STAR__temp_val__19036_19158,description__11238__auto____$1,_STAR_parent_description_STAR__orig_val__18925_19128,_STAR_parent_description_STAR__temp_val__18926_19129,description__11238__auto___19127){
return (function (){
var seq__19065 = cljs.core.seq.call(null,cljs.core.range.call(null,(9)));
var chunk__19066 = null;
var count__19067 = (0);
var i__19068 = (0);
while(true){
if((i__19068 < count__19067)){
var n = cljs.core._nth.call(null,chunk__19066,i__19068);
c3kit.wire.spec_helper.click_BANG_.call(null,["#index-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join(''));

var expected__11375__auto___19183 = cljs.core.assoc.call(null,tic_tac_toe.screens.play_spec.board_3,n,new cljs.core.Keyword(null,"x","x",2099068185));
var actual__11376__auto___19184 = new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.screens.play_spec.state));
if(cljs.core._EQ_.call(null,expected__11375__auto___19183,actual__11376__auto___19184)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__11375__auto___19183;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11343__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11343__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__11376__auto___19184;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11343__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11343__auto__);
}
})()," (using =)"].join('')));
}

cljs.core.swap_BANG_.call(null,tic_tac_toe.screens.play_spec.state,cljs.core.assoc,new cljs.core.Keyword(null,"board","board",-1907017633),tic_tac_toe.screens.play_spec.board_3,new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"x","x",2099068185));


var G__19185 = seq__19065;
var G__19186 = chunk__19066;
var G__19187 = count__19067;
var G__19188 = (i__19068 + (1));
seq__19065 = G__19185;
chunk__19066 = G__19186;
count__19067 = G__19187;
i__19068 = G__19188;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__19065);
if(temp__5804__auto__){
var seq__19065__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19065__$1)){
var c__5525__auto__ = cljs.core.chunk_first.call(null,seq__19065__$1);
var G__19189 = cljs.core.chunk_rest.call(null,seq__19065__$1);
var G__19190 = c__5525__auto__;
var G__19191 = cljs.core.count.call(null,c__5525__auto__);
var G__19192 = (0);
seq__19065 = G__19189;
chunk__19066 = G__19190;
count__19067 = G__19191;
i__19068 = G__19192;
continue;
} else {
var n = cljs.core.first.call(null,seq__19065__$1);
c3kit.wire.spec_helper.click_BANG_.call(null,["#index-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join(''));

var expected__11375__auto___19193 = cljs.core.assoc.call(null,tic_tac_toe.screens.play_spec.board_3,n,new cljs.core.Keyword(null,"x","x",2099068185));
var actual__11376__auto___19194 = new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.screens.play_spec.state));
if(cljs.core._EQ_.call(null,expected__11375__auto___19193,actual__11376__auto___19194)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__11375__auto___19193;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11343__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11343__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__11376__auto___19194;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11343__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11343__auto__);
}
})()," (using =)"].join('')));
}

cljs.core.swap_BANG_.call(null,tic_tac_toe.screens.play_spec.state,cljs.core.assoc,new cljs.core.Keyword(null,"board","board",-1907017633),tic_tac_toe.screens.play_spec.board_3,new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"x","x",2099068185));


var G__19195 = cljs.core.next.call(null,seq__19065__$1);
var G__19196 = null;
var G__19197 = (0);
var G__19198 = (0);
seq__19065 = G__19195;
chunk__19066 = G__19196;
count__19067 = G__19197;
i__19068 = G__19198;
continue;
}
} else {
return null;
}
}
break;
}
});})(_STAR_parent_description_STAR__orig_val__19035_19157,_STAR_parent_description_STAR__temp_val__19036_19158,description__11238__auto____$1,_STAR_parent_description_STAR__orig_val__18925_19128,_STAR_parent_description_STAR__temp_val__18926_19129,description__11238__auto___19127))
,false),speclj.components.new_characteristic.call(null,"clicking button swaps player in state",((function (_STAR_parent_description_STAR__orig_val__19035_19157,_STAR_parent_description_STAR__temp_val__19036_19158,description__11238__auto____$1,_STAR_parent_description_STAR__orig_val__18925_19128,_STAR_parent_description_STAR__temp_val__18926_19129,description__11238__auto___19127){
return (function (){
var seq__19069 = cljs.core.seq.call(null,cljs.core.range.call(null,(9)));
var chunk__19070 = null;
var count__19071 = (0);
var i__19072 = (0);
while(true){
if((i__19072 < count__19071)){
var n = cljs.core._nth.call(null,chunk__19070,i__19072);
c3kit.wire.spec_helper.click_BANG_.call(null,["#index-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join(''));

var expected__11375__auto___19199 = new cljs.core.Keyword(null,"o","o",-1350007228);
var actual__11376__auto___19200 = new cljs.core.Keyword(null,"player","player",-97687400).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.screens.play_spec.state));
if(cljs.core._EQ_.call(null,expected__11375__auto___19199,actual__11376__auto___19200)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__11375__auto___19199;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11343__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11343__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__11376__auto___19200;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11343__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11343__auto__);
}
})()," (using =)"].join('')));
}

cljs.core.swap_BANG_.call(null,tic_tac_toe.screens.play_spec.state,cljs.core.assoc,new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"x","x",2099068185));


var G__19201 = seq__19069;
var G__19202 = chunk__19070;
var G__19203 = count__19071;
var G__19204 = (i__19072 + (1));
seq__19069 = G__19201;
chunk__19070 = G__19202;
count__19071 = G__19203;
i__19072 = G__19204;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__19069);
if(temp__5804__auto__){
var seq__19069__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19069__$1)){
var c__5525__auto__ = cljs.core.chunk_first.call(null,seq__19069__$1);
var G__19205 = cljs.core.chunk_rest.call(null,seq__19069__$1);
var G__19206 = c__5525__auto__;
var G__19207 = cljs.core.count.call(null,c__5525__auto__);
var G__19208 = (0);
seq__19069 = G__19205;
chunk__19070 = G__19206;
count__19071 = G__19207;
i__19072 = G__19208;
continue;
} else {
var n = cljs.core.first.call(null,seq__19069__$1);
c3kit.wire.spec_helper.click_BANG_.call(null,["#index-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join(''));

var expected__11375__auto___19209 = new cljs.core.Keyword(null,"o","o",-1350007228);
var actual__11376__auto___19210 = new cljs.core.Keyword(null,"player","player",-97687400).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.screens.play_spec.state));
if(cljs.core._EQ_.call(null,expected__11375__auto___19209,actual__11376__auto___19210)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__11375__auto___19209;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11343__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11343__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__11376__auto___19210;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11343__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11343__auto__);
}
})()," (using =)"].join('')));
}

cljs.core.swap_BANG_.call(null,tic_tac_toe.screens.play_spec.state,cljs.core.assoc,new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"x","x",2099068185));


var G__19211 = cljs.core.next.call(null,seq__19069__$1);
var G__19212 = null;
var G__19213 = (0);
var G__19214 = (0);
seq__19069 = G__19211;
chunk__19070 = G__19212;
count__19071 = G__19213;
i__19072 = G__19214;
continue;
}
} else {
return null;
}
}
break;
}
});})(_STAR_parent_description_STAR__orig_val__19035_19157,_STAR_parent_description_STAR__temp_val__19036_19158,description__11238__auto____$1,_STAR_parent_description_STAR__orig_val__18925_19128,_STAR_parent_description_STAR__temp_val__18926_19129,description__11238__auto___19127))
,false),speclj.components.new_characteristic.call(null,"clicking button updates game-state in state",((function (_STAR_parent_description_STAR__orig_val__19035_19157,_STAR_parent_description_STAR__temp_val__19036_19158,description__11238__auto____$1,_STAR_parent_description_STAR__orig_val__18925_19128,_STAR_parent_description_STAR__temp_val__18926_19129,description__11238__auto___19127){
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
});})(_STAR_parent_description_STAR__orig_val__19035_19157,_STAR_parent_description_STAR__temp_val__19036_19158,description__11238__auto____$1,_STAR_parent_description_STAR__orig_val__18925_19128,_STAR_parent_description_STAR__temp_val__18926_19129,description__11238__auto___19127))
,false),speclj.components.new_characteristic.call(null,"clicking button adds token to button HTML",((function (_STAR_parent_description_STAR__orig_val__19035_19157,_STAR_parent_description_STAR__temp_val__19036_19158,description__11238__auto____$1,_STAR_parent_description_STAR__orig_val__18925_19128,_STAR_parent_description_STAR__temp_val__18926_19129,description__11238__auto___19127){
return (function (){
var seq__19073 = cljs.core.seq.call(null,cljs.core.range.call(null,(9)));
var chunk__19074 = null;
var count__19075 = (0);
var i__19076 = (0);
while(true){
if((i__19076 < count__19075)){
var n = cljs.core._nth.call(null,chunk__19074,i__19076);
c3kit.wire.spec_helper.click_BANG_.call(null,["#index-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join(''));

var expected__11375__auto___19215 = "X";
var actual__11376__auto___19216 = c3kit.wire.spec_helper.text.call(null,["#index-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join(''));
if(cljs.core._EQ_.call(null,expected__11375__auto___19215,actual__11376__auto___19216)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__11375__auto___19215;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11343__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11343__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__11376__auto___19216;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11343__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11343__auto__);
}
})()," (using =)"].join('')));
}

cljs.core.reset_BANG_.call(null,tic_tac_toe.screens.play_spec.state,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"board","board",-1907017633),tic_tac_toe.screens.play_spec.board_3,new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"current-screen","current-screen",-1454713691),new cljs.core.Keyword(null,"play","play",-580418022)], null));


var G__19217 = seq__19073;
var G__19218 = chunk__19074;
var G__19219 = count__19075;
var G__19220 = (i__19076 + (1));
seq__19073 = G__19217;
chunk__19074 = G__19218;
count__19075 = G__19219;
i__19076 = G__19220;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__19073);
if(temp__5804__auto__){
var seq__19073__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19073__$1)){
var c__5525__auto__ = cljs.core.chunk_first.call(null,seq__19073__$1);
var G__19221 = cljs.core.chunk_rest.call(null,seq__19073__$1);
var G__19222 = c__5525__auto__;
var G__19223 = cljs.core.count.call(null,c__5525__auto__);
var G__19224 = (0);
seq__19073 = G__19221;
chunk__19074 = G__19222;
count__19075 = G__19223;
i__19076 = G__19224;
continue;
} else {
var n = cljs.core.first.call(null,seq__19073__$1);
c3kit.wire.spec_helper.click_BANG_.call(null,["#index-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join(''));

var expected__11375__auto___19225 = "X";
var actual__11376__auto___19226 = c3kit.wire.spec_helper.text.call(null,["#index-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join(''));
if(cljs.core._EQ_.call(null,expected__11375__auto___19225,actual__11376__auto___19226)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__11375__auto___19225;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11343__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11343__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__11376__auto___19226;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11343__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11343__auto__);
}
})()," (using =)"].join('')));
}

cljs.core.reset_BANG_.call(null,tic_tac_toe.screens.play_spec.state,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"board","board",-1907017633),tic_tac_toe.screens.play_spec.board_3,new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"current-screen","current-screen",-1454713691),new cljs.core.Keyword(null,"play","play",-580418022)], null));


var G__19227 = cljs.core.next.call(null,seq__19073__$1);
var G__19228 = null;
var G__19229 = (0);
var G__19230 = (0);
seq__19073 = G__19227;
chunk__19074 = G__19228;
count__19075 = G__19229;
i__19076 = G__19230;
continue;
}
} else {
return null;
}
}
break;
}
});})(_STAR_parent_description_STAR__orig_val__19035_19157,_STAR_parent_description_STAR__temp_val__19036_19158,description__11238__auto____$1,_STAR_parent_description_STAR__orig_val__18925_19128,_STAR_parent_description_STAR__temp_val__18926_19129,description__11238__auto___19127))
,false),speclj.components.new_characteristic.call(null,"clicking button disables button",((function (_STAR_parent_description_STAR__orig_val__19035_19157,_STAR_parent_description_STAR__temp_val__19036_19158,description__11238__auto____$1,_STAR_parent_description_STAR__orig_val__18925_19128,_STAR_parent_description_STAR__temp_val__18926_19129,description__11238__auto___19127){
return (function (){
var seq__19077 = cljs.core.seq.call(null,cljs.core.range.call(null,(9)));
var chunk__19078 = null;
var count__19079 = (0);
var i__19080 = (0);
while(true){
if((i__19080 < count__19079)){
var n = cljs.core._nth.call(null,chunk__19078,i__19080);
c3kit.wire.spec_helper.click_BANG_.call(null,["#index-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join(''));

var expected__11375__auto___19231 = true;
var actual__11376__auto___19232 = c3kit.wire.spec_helper.disabled_QMARK_.call(null,["#index-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join(''));
if(cljs.core._EQ_.call(null,expected__11375__auto___19231,actual__11376__auto___19232)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__11375__auto___19231;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11343__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11343__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__11376__auto___19232;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11343__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11343__auto__);
}
})()," (using =)"].join('')));
}

cljs.core.reset_BANG_.call(null,tic_tac_toe.screens.play_spec.state,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"board","board",-1907017633),tic_tac_toe.screens.play_spec.board_3,new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"current-screen","current-screen",-1454713691),new cljs.core.Keyword(null,"play","play",-580418022)], null));


var G__19233 = seq__19077;
var G__19234 = chunk__19078;
var G__19235 = count__19079;
var G__19236 = (i__19080 + (1));
seq__19077 = G__19233;
chunk__19078 = G__19234;
count__19079 = G__19235;
i__19080 = G__19236;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__19077);
if(temp__5804__auto__){
var seq__19077__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19077__$1)){
var c__5525__auto__ = cljs.core.chunk_first.call(null,seq__19077__$1);
var G__19237 = cljs.core.chunk_rest.call(null,seq__19077__$1);
var G__19238 = c__5525__auto__;
var G__19239 = cljs.core.count.call(null,c__5525__auto__);
var G__19240 = (0);
seq__19077 = G__19237;
chunk__19078 = G__19238;
count__19079 = G__19239;
i__19080 = G__19240;
continue;
} else {
var n = cljs.core.first.call(null,seq__19077__$1);
c3kit.wire.spec_helper.click_BANG_.call(null,["#index-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join(''));

var expected__11375__auto___19241 = true;
var actual__11376__auto___19242 = c3kit.wire.spec_helper.disabled_QMARK_.call(null,["#index-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join(''));
if(cljs.core._EQ_.call(null,expected__11375__auto___19241,actual__11376__auto___19242)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__11375__auto___19241;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11343__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11343__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__11376__auto___19242;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11343__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11343__auto__);
}
})()," (using =)"].join('')));
}

cljs.core.reset_BANG_.call(null,tic_tac_toe.screens.play_spec.state,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"board","board",-1907017633),tic_tac_toe.screens.play_spec.board_3,new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"current-screen","current-screen",-1454713691),new cljs.core.Keyword(null,"play","play",-580418022)], null));


var G__19243 = cljs.core.next.call(null,seq__19077__$1);
var G__19244 = null;
var G__19245 = (0);
var G__19246 = (0);
seq__19077 = G__19243;
chunk__19078 = G__19244;
count__19079 = G__19245;
i__19080 = G__19246;
continue;
}
} else {
return null;
}
}
break;
}
});})(_STAR_parent_description_STAR__orig_val__19035_19157,_STAR_parent_description_STAR__temp_val__19036_19158,description__11238__auto____$1,_STAR_parent_description_STAR__orig_val__18925_19128,_STAR_parent_description_STAR__temp_val__18926_19129,description__11238__auto___19127))
,false)],null)));
var chunk__19038_19160 = null;
var count__19039_19161 = (0);
var i__19040_19162 = (0);
while(true){
if((i__19040_19162 < count__19039_19161)){
var component__11239__auto___19247 = cljs.core._nth.call(null,chunk__19038_19160,i__19040_19162);
speclj.components.install.call(null,component__11239__auto___19247,description__11238__auto____$1);


var G__19248 = seq__19037_19159;
var G__19249 = chunk__19038_19160;
var G__19250 = count__19039_19161;
var G__19251 = (i__19040_19162 + (1));
seq__19037_19159 = G__19248;
chunk__19038_19160 = G__19249;
count__19039_19161 = G__19250;
i__19040_19162 = G__19251;
continue;
} else {
var temp__5804__auto___19252 = cljs.core.seq.call(null,seq__19037_19159);
if(temp__5804__auto___19252){
var seq__19037_19253__$1 = temp__5804__auto___19252;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19037_19253__$1)){
var c__5525__auto___19254 = cljs.core.chunk_first.call(null,seq__19037_19253__$1);
var G__19255 = cljs.core.chunk_rest.call(null,seq__19037_19253__$1);
var G__19256 = c__5525__auto___19254;
var G__19257 = cljs.core.count.call(null,c__5525__auto___19254);
var G__19258 = (0);
seq__19037_19159 = G__19255;
chunk__19038_19160 = G__19256;
count__19039_19161 = G__19257;
i__19040_19162 = G__19258;
continue;
} else {
var component__11239__auto___19259 = cljs.core.first.call(null,seq__19037_19253__$1);
speclj.components.install.call(null,component__11239__auto___19259,description__11238__auto____$1);


var G__19260 = cljs.core.next.call(null,seq__19037_19253__$1);
var G__19261 = null;
var G__19262 = (0);
var G__19263 = (0);
seq__19037_19159 = G__19260;
chunk__19038_19160 = G__19261;
count__19039_19161 = G__19262;
i__19040_19162 = G__19263;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__19035_19157);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__11238__auto____$1);
}

return description__11238__auto____$1;
})(),(function (){var description__11238__auto____$1 = speclj.components.new_description.call(null,"4x4",false,"tic-tac-toe.screens.play-spec");
var _STAR_parent_description_STAR__orig_val__19081_19264 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__19082_19265 = description__11238__auto____$1;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__19082_19265);

try{var seq__19083_19266 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,7,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_before.call(null,((function (_STAR_parent_description_STAR__orig_val__19081_19264,_STAR_parent_description_STAR__temp_val__19082_19265,description__11238__auto____$1,_STAR_parent_description_STAR__orig_val__18925_19128,_STAR_parent_description_STAR__temp_val__18926_19129,description__11238__auto___19127){
return (function (){
cljs.core.reset_BANG_.call(null,tic_tac_toe.screens.play_spec.state,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"current-screen","current-screen",-1454713691),new cljs.core.Keyword(null,"play","play",-580418022),new cljs.core.Keyword(null,"board","board",-1907017633),tic_tac_toe.screens.play_spec.board_4,new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"x","x",2099068185)], null));

return c3kit.wire.spec_helper.render.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tic_tac_toe.render_screen.render_screen,tic_tac_toe.screens.play_spec.state], null));
});})(_STAR_parent_description_STAR__orig_val__19081_19264,_STAR_parent_description_STAR__temp_val__19082_19265,description__11238__auto____$1,_STAR_parent_description_STAR__orig_val__18925_19128,_STAR_parent_description_STAR__temp_val__18926_19129,description__11238__auto___19127))
),speclj.components.new_characteristic.call(null,"renders board",((function (_STAR_parent_description_STAR__orig_val__19081_19264,_STAR_parent_description_STAR__temp_val__19082_19265,description__11238__auto____$1,_STAR_parent_description_STAR__orig_val__18925_19128,_STAR_parent_description_STAR__temp_val__18926_19129,description__11238__auto___19127){
return (function (){
var expected__11375__auto___19270 = (16);
var actual__11376__auto___19271 = cljs.core.count.call(null,cljs.core.vec.call(null,c3kit.wire.js.query_selector_all.call(null,".board-square")));
if(cljs.core._EQ_.call(null,expected__11375__auto___19270,actual__11376__auto___19271)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__11375__auto___19270;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11343__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11343__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__11376__auto___19271;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11343__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11343__auto__);
}
})()," (using =)"].join('')));
}

var value__11738__auto___19272 = "#board-wrapper";
var node__11739__auto___19273 = c3kit.wire.spec_helper.select.call(null,value__11738__auto___19272);
if(cljs.core.truth_(node__11739__auto___19273)){
} else {
throw (new speclj.platform.SpecFailure(["Expected selector to find node: ",(function (){var temp__5806__auto__ = value__11738__auto___19272;
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
});})(_STAR_parent_description_STAR__orig_val__19081_19264,_STAR_parent_description_STAR__temp_val__19082_19265,description__11238__auto____$1,_STAR_parent_description_STAR__orig_val__18925_19128,_STAR_parent_description_STAR__temp_val__18926_19129,description__11238__auto___19127))
,false),speclj.components.new_characteristic.call(null,"buttons have IDs 0-15",((function (_STAR_parent_description_STAR__orig_val__19081_19264,_STAR_parent_description_STAR__temp_val__19082_19265,description__11238__auto____$1,_STAR_parent_description_STAR__orig_val__18925_19128,_STAR_parent_description_STAR__temp_val__18926_19129,description__11238__auto___19127){
return (function (){
var seq__19107 = cljs.core.seq.call(null,cljs.core.range.call(null,(16)));
var chunk__19108 = null;
var count__19109 = (0);
var i__19110 = (0);
while(true){
if((i__19110 < count__19109)){
var n = cljs.core._nth.call(null,chunk__19108,i__19110);
var value__11738__auto___19274 = ["#index-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join('');
var node__11739__auto___19275 = c3kit.wire.spec_helper.select.call(null,value__11738__auto___19274);
if(cljs.core.truth_(node__11739__auto___19275)){
} else {
throw (new speclj.platform.SpecFailure(["Expected selector to find node: ",(function (){var temp__5806__auto__ = value__11738__auto___19274;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11343__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11343__auto__);
}
})()].join('')));
}


var G__19276 = seq__19107;
var G__19277 = chunk__19108;
var G__19278 = count__19109;
var G__19279 = (i__19110 + (1));
seq__19107 = G__19276;
chunk__19108 = G__19277;
count__19109 = G__19278;
i__19110 = G__19279;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__19107);
if(temp__5804__auto__){
var seq__19107__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19107__$1)){
var c__5525__auto__ = cljs.core.chunk_first.call(null,seq__19107__$1);
var G__19280 = cljs.core.chunk_rest.call(null,seq__19107__$1);
var G__19281 = c__5525__auto__;
var G__19282 = cljs.core.count.call(null,c__5525__auto__);
var G__19283 = (0);
seq__19107 = G__19280;
chunk__19108 = G__19281;
count__19109 = G__19282;
i__19110 = G__19283;
continue;
} else {
var n = cljs.core.first.call(null,seq__19107__$1);
var value__11738__auto___19284 = ["#index-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join('');
var node__11739__auto___19285 = c3kit.wire.spec_helper.select.call(null,value__11738__auto___19284);
if(cljs.core.truth_(node__11739__auto___19285)){
} else {
throw (new speclj.platform.SpecFailure(["Expected selector to find node: ",(function (){var temp__5806__auto__ = value__11738__auto___19284;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11343__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11343__auto__);
}
})()].join('')));
}


var G__19286 = cljs.core.next.call(null,seq__19107__$1);
var G__19287 = null;
var G__19288 = (0);
var G__19289 = (0);
seq__19107 = G__19286;
chunk__19108 = G__19287;
count__19109 = G__19288;
i__19110 = G__19289;
continue;
}
} else {
return null;
}
}
break;
}
});})(_STAR_parent_description_STAR__orig_val__19081_19264,_STAR_parent_description_STAR__temp_val__19082_19265,description__11238__auto____$1,_STAR_parent_description_STAR__orig_val__18925_19128,_STAR_parent_description_STAR__temp_val__18926_19129,description__11238__auto___19127))
,false),speclj.components.new_characteristic.call(null,"clicking button updates board in state",((function (_STAR_parent_description_STAR__orig_val__19081_19264,_STAR_parent_description_STAR__temp_val__19082_19265,description__11238__auto____$1,_STAR_parent_description_STAR__orig_val__18925_19128,_STAR_parent_description_STAR__temp_val__18926_19129,description__11238__auto___19127){
return (function (){
var seq__19111 = cljs.core.seq.call(null,cljs.core.range.call(null,(16)));
var chunk__19112 = null;
var count__19113 = (0);
var i__19114 = (0);
while(true){
if((i__19114 < count__19113)){
var n = cljs.core._nth.call(null,chunk__19112,i__19114);
c3kit.wire.spec_helper.click_BANG_.call(null,["#index-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join(''));

var expected__11375__auto___19290 = cljs.core.assoc.call(null,tic_tac_toe.screens.play_spec.board_4,n,new cljs.core.Keyword(null,"x","x",2099068185));
var actual__11376__auto___19291 = new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.screens.play_spec.state));
if(cljs.core._EQ_.call(null,expected__11375__auto___19290,actual__11376__auto___19291)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__11375__auto___19290;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11343__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11343__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__11376__auto___19291;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11343__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11343__auto__);
}
})()," (using =)"].join('')));
}

cljs.core.swap_BANG_.call(null,tic_tac_toe.screens.play_spec.state,cljs.core.assoc,new cljs.core.Keyword(null,"board","board",-1907017633),tic_tac_toe.screens.play_spec.board_4,new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"x","x",2099068185));


var G__19292 = seq__19111;
var G__19293 = chunk__19112;
var G__19294 = count__19113;
var G__19295 = (i__19114 + (1));
seq__19111 = G__19292;
chunk__19112 = G__19293;
count__19113 = G__19294;
i__19114 = G__19295;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__19111);
if(temp__5804__auto__){
var seq__19111__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19111__$1)){
var c__5525__auto__ = cljs.core.chunk_first.call(null,seq__19111__$1);
var G__19296 = cljs.core.chunk_rest.call(null,seq__19111__$1);
var G__19297 = c__5525__auto__;
var G__19298 = cljs.core.count.call(null,c__5525__auto__);
var G__19299 = (0);
seq__19111 = G__19296;
chunk__19112 = G__19297;
count__19113 = G__19298;
i__19114 = G__19299;
continue;
} else {
var n = cljs.core.first.call(null,seq__19111__$1);
c3kit.wire.spec_helper.click_BANG_.call(null,["#index-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join(''));

var expected__11375__auto___19300 = cljs.core.assoc.call(null,tic_tac_toe.screens.play_spec.board_4,n,new cljs.core.Keyword(null,"x","x",2099068185));
var actual__11376__auto___19301 = new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.screens.play_spec.state));
if(cljs.core._EQ_.call(null,expected__11375__auto___19300,actual__11376__auto___19301)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__11375__auto___19300;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11343__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11343__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__11376__auto___19301;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11343__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11343__auto__);
}
})()," (using =)"].join('')));
}

cljs.core.swap_BANG_.call(null,tic_tac_toe.screens.play_spec.state,cljs.core.assoc,new cljs.core.Keyword(null,"board","board",-1907017633),tic_tac_toe.screens.play_spec.board_4,new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"x","x",2099068185));


var G__19302 = cljs.core.next.call(null,seq__19111__$1);
var G__19303 = null;
var G__19304 = (0);
var G__19305 = (0);
seq__19111 = G__19302;
chunk__19112 = G__19303;
count__19113 = G__19304;
i__19114 = G__19305;
continue;
}
} else {
return null;
}
}
break;
}
});})(_STAR_parent_description_STAR__orig_val__19081_19264,_STAR_parent_description_STAR__temp_val__19082_19265,description__11238__auto____$1,_STAR_parent_description_STAR__orig_val__18925_19128,_STAR_parent_description_STAR__temp_val__18926_19129,description__11238__auto___19127))
,false),speclj.components.new_characteristic.call(null,"clicking button swaps player in state",((function (_STAR_parent_description_STAR__orig_val__19081_19264,_STAR_parent_description_STAR__temp_val__19082_19265,description__11238__auto____$1,_STAR_parent_description_STAR__orig_val__18925_19128,_STAR_parent_description_STAR__temp_val__18926_19129,description__11238__auto___19127){
return (function (){
var seq__19115 = cljs.core.seq.call(null,cljs.core.range.call(null,(16)));
var chunk__19116 = null;
var count__19117 = (0);
var i__19118 = (0);
while(true){
if((i__19118 < count__19117)){
var n = cljs.core._nth.call(null,chunk__19116,i__19118);
c3kit.wire.spec_helper.click_BANG_.call(null,["#index-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join(''));

var expected__11375__auto___19306 = new cljs.core.Keyword(null,"o","o",-1350007228);
var actual__11376__auto___19307 = new cljs.core.Keyword(null,"player","player",-97687400).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.screens.play_spec.state));
if(cljs.core._EQ_.call(null,expected__11375__auto___19306,actual__11376__auto___19307)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__11375__auto___19306;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11343__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11343__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__11376__auto___19307;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11343__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11343__auto__);
}
})()," (using =)"].join('')));
}

cljs.core.swap_BANG_.call(null,tic_tac_toe.screens.play_spec.state,cljs.core.assoc,new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"x","x",2099068185));


var G__19308 = seq__19115;
var G__19309 = chunk__19116;
var G__19310 = count__19117;
var G__19311 = (i__19118 + (1));
seq__19115 = G__19308;
chunk__19116 = G__19309;
count__19117 = G__19310;
i__19118 = G__19311;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__19115);
if(temp__5804__auto__){
var seq__19115__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19115__$1)){
var c__5525__auto__ = cljs.core.chunk_first.call(null,seq__19115__$1);
var G__19312 = cljs.core.chunk_rest.call(null,seq__19115__$1);
var G__19313 = c__5525__auto__;
var G__19314 = cljs.core.count.call(null,c__5525__auto__);
var G__19315 = (0);
seq__19115 = G__19312;
chunk__19116 = G__19313;
count__19117 = G__19314;
i__19118 = G__19315;
continue;
} else {
var n = cljs.core.first.call(null,seq__19115__$1);
c3kit.wire.spec_helper.click_BANG_.call(null,["#index-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join(''));

var expected__11375__auto___19316 = new cljs.core.Keyword(null,"o","o",-1350007228);
var actual__11376__auto___19317 = new cljs.core.Keyword(null,"player","player",-97687400).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.screens.play_spec.state));
if(cljs.core._EQ_.call(null,expected__11375__auto___19316,actual__11376__auto___19317)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__11375__auto___19316;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11343__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11343__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__11376__auto___19317;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11343__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11343__auto__);
}
})()," (using =)"].join('')));
}

cljs.core.swap_BANG_.call(null,tic_tac_toe.screens.play_spec.state,cljs.core.assoc,new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"x","x",2099068185));


var G__19318 = cljs.core.next.call(null,seq__19115__$1);
var G__19319 = null;
var G__19320 = (0);
var G__19321 = (0);
seq__19115 = G__19318;
chunk__19116 = G__19319;
count__19117 = G__19320;
i__19118 = G__19321;
continue;
}
} else {
return null;
}
}
break;
}
});})(_STAR_parent_description_STAR__orig_val__19081_19264,_STAR_parent_description_STAR__temp_val__19082_19265,description__11238__auto____$1,_STAR_parent_description_STAR__orig_val__18925_19128,_STAR_parent_description_STAR__temp_val__18926_19129,description__11238__auto___19127))
,false),speclj.components.new_characteristic.call(null,"clicking button adds token to button HTML",((function (_STAR_parent_description_STAR__orig_val__19081_19264,_STAR_parent_description_STAR__temp_val__19082_19265,description__11238__auto____$1,_STAR_parent_description_STAR__orig_val__18925_19128,_STAR_parent_description_STAR__temp_val__18926_19129,description__11238__auto___19127){
return (function (){
var seq__19119 = cljs.core.seq.call(null,cljs.core.range.call(null,(16)));
var chunk__19120 = null;
var count__19121 = (0);
var i__19122 = (0);
while(true){
if((i__19122 < count__19121)){
var n = cljs.core._nth.call(null,chunk__19120,i__19122);
c3kit.wire.spec_helper.click_BANG_.call(null,["#index-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join(''));

var expected__11375__auto___19322 = "X";
var actual__11376__auto___19323 = c3kit.wire.spec_helper.text.call(null,["#index-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join(''));
if(cljs.core._EQ_.call(null,expected__11375__auto___19322,actual__11376__auto___19323)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__11375__auto___19322;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11343__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11343__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__11376__auto___19323;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11343__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11343__auto__);
}
})()," (using =)"].join('')));
}

cljs.core.reset_BANG_.call(null,tic_tac_toe.screens.play_spec.state,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"board","board",-1907017633),tic_tac_toe.screens.play_spec.board_4,new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"current-screen","current-screen",-1454713691),new cljs.core.Keyword(null,"play","play",-580418022)], null));


var G__19324 = seq__19119;
var G__19325 = chunk__19120;
var G__19326 = count__19121;
var G__19327 = (i__19122 + (1));
seq__19119 = G__19324;
chunk__19120 = G__19325;
count__19121 = G__19326;
i__19122 = G__19327;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__19119);
if(temp__5804__auto__){
var seq__19119__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19119__$1)){
var c__5525__auto__ = cljs.core.chunk_first.call(null,seq__19119__$1);
var G__19328 = cljs.core.chunk_rest.call(null,seq__19119__$1);
var G__19329 = c__5525__auto__;
var G__19330 = cljs.core.count.call(null,c__5525__auto__);
var G__19331 = (0);
seq__19119 = G__19328;
chunk__19120 = G__19329;
count__19121 = G__19330;
i__19122 = G__19331;
continue;
} else {
var n = cljs.core.first.call(null,seq__19119__$1);
c3kit.wire.spec_helper.click_BANG_.call(null,["#index-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join(''));

var expected__11375__auto___19332 = "X";
var actual__11376__auto___19333 = c3kit.wire.spec_helper.text.call(null,["#index-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join(''));
if(cljs.core._EQ_.call(null,expected__11375__auto___19332,actual__11376__auto___19333)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__11375__auto___19332;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11343__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11343__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__11376__auto___19333;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11343__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11343__auto__);
}
})()," (using =)"].join('')));
}

cljs.core.reset_BANG_.call(null,tic_tac_toe.screens.play_spec.state,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"board","board",-1907017633),tic_tac_toe.screens.play_spec.board_4,new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"current-screen","current-screen",-1454713691),new cljs.core.Keyword(null,"play","play",-580418022)], null));


var G__19334 = cljs.core.next.call(null,seq__19119__$1);
var G__19335 = null;
var G__19336 = (0);
var G__19337 = (0);
seq__19119 = G__19334;
chunk__19120 = G__19335;
count__19121 = G__19336;
i__19122 = G__19337;
continue;
}
} else {
return null;
}
}
break;
}
});})(_STAR_parent_description_STAR__orig_val__19081_19264,_STAR_parent_description_STAR__temp_val__19082_19265,description__11238__auto____$1,_STAR_parent_description_STAR__orig_val__18925_19128,_STAR_parent_description_STAR__temp_val__18926_19129,description__11238__auto___19127))
,false),speclj.components.new_characteristic.call(null,"clicking button disables button",((function (_STAR_parent_description_STAR__orig_val__19081_19264,_STAR_parent_description_STAR__temp_val__19082_19265,description__11238__auto____$1,_STAR_parent_description_STAR__orig_val__18925_19128,_STAR_parent_description_STAR__temp_val__18926_19129,description__11238__auto___19127){
return (function (){
var seq__19123 = cljs.core.seq.call(null,cljs.core.range.call(null,(16)));
var chunk__19124 = null;
var count__19125 = (0);
var i__19126 = (0);
while(true){
if((i__19126 < count__19125)){
var n = cljs.core._nth.call(null,chunk__19124,i__19126);
c3kit.wire.spec_helper.click_BANG_.call(null,["#index-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join(''));

var expected__11375__auto___19338 = true;
var actual__11376__auto___19339 = c3kit.wire.spec_helper.disabled_QMARK_.call(null,["#index-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join(''));
if(cljs.core._EQ_.call(null,expected__11375__auto___19338,actual__11376__auto___19339)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__11375__auto___19338;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11343__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11343__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__11376__auto___19339;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11343__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11343__auto__);
}
})()," (using =)"].join('')));
}

cljs.core.reset_BANG_.call(null,tic_tac_toe.screens.play_spec.state,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"board","board",-1907017633),tic_tac_toe.screens.play_spec.board_4,new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"current-screen","current-screen",-1454713691),new cljs.core.Keyword(null,"play","play",-580418022)], null));


var G__19340 = seq__19123;
var G__19341 = chunk__19124;
var G__19342 = count__19125;
var G__19343 = (i__19126 + (1));
seq__19123 = G__19340;
chunk__19124 = G__19341;
count__19125 = G__19342;
i__19126 = G__19343;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__19123);
if(temp__5804__auto__){
var seq__19123__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19123__$1)){
var c__5525__auto__ = cljs.core.chunk_first.call(null,seq__19123__$1);
var G__19344 = cljs.core.chunk_rest.call(null,seq__19123__$1);
var G__19345 = c__5525__auto__;
var G__19346 = cljs.core.count.call(null,c__5525__auto__);
var G__19347 = (0);
seq__19123 = G__19344;
chunk__19124 = G__19345;
count__19125 = G__19346;
i__19126 = G__19347;
continue;
} else {
var n = cljs.core.first.call(null,seq__19123__$1);
c3kit.wire.spec_helper.click_BANG_.call(null,["#index-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join(''));

var expected__11375__auto___19348 = true;
var actual__11376__auto___19349 = c3kit.wire.spec_helper.disabled_QMARK_.call(null,["#index-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join(''));
if(cljs.core._EQ_.call(null,expected__11375__auto___19348,actual__11376__auto___19349)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__11375__auto___19348;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11343__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11343__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__11376__auto___19349;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11343__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11343__auto__);
}
})()," (using =)"].join('')));
}

cljs.core.reset_BANG_.call(null,tic_tac_toe.screens.play_spec.state,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"board","board",-1907017633),tic_tac_toe.screens.play_spec.board_4,new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"current-screen","current-screen",-1454713691),new cljs.core.Keyword(null,"play","play",-580418022)], null));


var G__19350 = cljs.core.next.call(null,seq__19123__$1);
var G__19351 = null;
var G__19352 = (0);
var G__19353 = (0);
seq__19123 = G__19350;
chunk__19124 = G__19351;
count__19125 = G__19352;
i__19126 = G__19353;
continue;
}
} else {
return null;
}
}
break;
}
});})(_STAR_parent_description_STAR__orig_val__19081_19264,_STAR_parent_description_STAR__temp_val__19082_19265,description__11238__auto____$1,_STAR_parent_description_STAR__orig_val__18925_19128,_STAR_parent_description_STAR__temp_val__18926_19129,description__11238__auto___19127))
,false)],null)));
var chunk__19084_19267 = null;
var count__19085_19268 = (0);
var i__19086_19269 = (0);
while(true){
if((i__19086_19269 < count__19085_19268)){
var component__11239__auto___19354 = cljs.core._nth.call(null,chunk__19084_19267,i__19086_19269);
speclj.components.install.call(null,component__11239__auto___19354,description__11238__auto____$1);


var G__19355 = seq__19083_19266;
var G__19356 = chunk__19084_19267;
var G__19357 = count__19085_19268;
var G__19358 = (i__19086_19269 + (1));
seq__19083_19266 = G__19355;
chunk__19084_19267 = G__19356;
count__19085_19268 = G__19357;
i__19086_19269 = G__19358;
continue;
} else {
var temp__5804__auto___19359 = cljs.core.seq.call(null,seq__19083_19266);
if(temp__5804__auto___19359){
var seq__19083_19360__$1 = temp__5804__auto___19359;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19083_19360__$1)){
var c__5525__auto___19361 = cljs.core.chunk_first.call(null,seq__19083_19360__$1);
var G__19362 = cljs.core.chunk_rest.call(null,seq__19083_19360__$1);
var G__19363 = c__5525__auto___19361;
var G__19364 = cljs.core.count.call(null,c__5525__auto___19361);
var G__19365 = (0);
seq__19083_19266 = G__19362;
chunk__19084_19267 = G__19363;
count__19085_19268 = G__19364;
i__19086_19269 = G__19365;
continue;
} else {
var component__11239__auto___19366 = cljs.core.first.call(null,seq__19083_19360__$1);
speclj.components.install.call(null,component__11239__auto___19366,description__11238__auto____$1);


var G__19367 = cljs.core.next.call(null,seq__19083_19360__$1);
var G__19368 = null;
var G__19369 = (0);
var G__19370 = (0);
seq__19083_19266 = G__19367;
chunk__19084_19267 = G__19368;
count__19085_19268 = G__19369;
i__19086_19269 = G__19370;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__19081_19264);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__11238__auto____$1);
}

return description__11238__auto____$1;
})()],null)));
var chunk__18928_19131 = null;
var count__18929_19132 = (0);
var i__18930_19133 = (0);
while(true){
if((i__18930_19133 < count__18929_19132)){
var component__11239__auto___19371 = cljs.core._nth.call(null,chunk__18928_19131,i__18930_19133);
speclj.components.install.call(null,component__11239__auto___19371,description__11238__auto___19127);


var G__19372 = seq__18927_19130;
var G__19373 = chunk__18928_19131;
var G__19374 = count__18929_19132;
var G__19375 = (i__18930_19133 + (1));
seq__18927_19130 = G__19372;
chunk__18928_19131 = G__19373;
count__18929_19132 = G__19374;
i__18930_19133 = G__19375;
continue;
} else {
var temp__5804__auto___19376 = cljs.core.seq.call(null,seq__18927_19130);
if(temp__5804__auto___19376){
var seq__18927_19377__$1 = temp__5804__auto___19376;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18927_19377__$1)){
var c__5525__auto___19378 = cljs.core.chunk_first.call(null,seq__18927_19377__$1);
var G__19379 = cljs.core.chunk_rest.call(null,seq__18927_19377__$1);
var G__19380 = c__5525__auto___19378;
var G__19381 = cljs.core.count.call(null,c__5525__auto___19378);
var G__19382 = (0);
seq__18927_19130 = G__19379;
chunk__18928_19131 = G__19380;
count__18929_19132 = G__19381;
i__18930_19133 = G__19382;
continue;
} else {
var component__11239__auto___19383 = cljs.core.first.call(null,seq__18927_19377__$1);
speclj.components.install.call(null,component__11239__auto___19383,description__11238__auto___19127);


var G__19384 = cljs.core.next.call(null,seq__18927_19377__$1);
var G__19385 = null;
var G__19386 = (0);
var G__19387 = (0);
seq__18927_19130 = G__19384;
chunk__18928_19131 = G__19385;
count__18929_19132 = G__19386;
i__18930_19133 = G__19387;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__18925_19128);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__11238__auto___19127);
}


//# sourceMappingURL=play_spec.js.map
