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
var description__11259__auto___23948 = speclj.components.new_description.call(null,"play screen",false,"tic-tac-toe.screens.play-spec");
var _STAR_parent_description_STAR__orig_val__23474_23949 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__23475_23950 = description__11259__auto___23948;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__23475_23950);

try{var seq__23476_23951 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,6,(5),cljs.core.PersistentVector.EMPTY_NODE,[c3kit.wire.spec_helper.with_root_dom.call(null),speclj.components.new_characteristic.call(null,"displays restart button at end of game",((function (_STAR_parent_description_STAR__orig_val__23474_23949,_STAR_parent_description_STAR__temp_val__23475_23950,description__11259__auto___23948){
return (function (){
cljs.core.swap_BANG_.call(null,tic_tac_toe.screens.play_spec.state,cljs.core.assoc,new cljs.core.Keyword(null,"game-state","game-state",935682735),"X wins!");

c3kit.wire.spec_helper.render.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tic_tac_toe.render_screen.render_screen,tic_tac_toe.screens.play_spec.state], null));

var value__11759__auto___23955 = "#restart";
var node__11760__auto___23956 = c3kit.wire.spec_helper.select.call(null,value__11759__auto___23955);
if(cljs.core.truth_(node__11760__auto___23956)){
} else {
throw (new speclj.platform.SpecFailure(["Expected selector to find node: ",(function (){var temp__5806__auto__ = value__11759__auto___23955;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11364__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11364__auto__);
}
})()].join('')));
}

var expected__11396__auto__ = "Restart";
var actual__11397__auto__ = c3kit.wire.spec_helper.text.call(null,"#restart");
if(cljs.core._EQ_.call(null,expected__11396__auto__,actual__11397__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__11396__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11364__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11364__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__11397__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11364__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11364__auto__);
}
})()," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__23474_23949,_STAR_parent_description_STAR__temp_val__23475_23950,description__11259__auto___23948))
,false),speclj.components.new_characteristic.call(null,"doesn't display restart button if game is in progress",((function (_STAR_parent_description_STAR__orig_val__23474_23949,_STAR_parent_description_STAR__temp_val__23475_23950,description__11259__auto___23948){
return (function (){
cljs.core.swap_BANG_.call(null,tic_tac_toe.screens.play_spec.state,cljs.core.assoc,new cljs.core.Keyword(null,"game-state","game-state",935682735),new cljs.core.Keyword(null,"in-progress","in-progress",2126442630));

c3kit.wire.spec_helper.render.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tic_tac_toe.render_screen.render_screen,tic_tac_toe.screens.play_spec.state], null));

var value__11768__auto__ = "#restart";
var node__11769__auto__ = c3kit.wire.spec_helper.select.call(null,value__11768__auto__);
if(cljs.core.truth_(node__11769__auto__)){
throw (new speclj.platform.SpecFailure(["Expected selector NOT to find node: ",(function (){var temp__5806__auto__ = value__11768__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11364__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11364__auto__);
}
})()].join('')));
} else {
return null;
}
});})(_STAR_parent_description_STAR__orig_val__23474_23949,_STAR_parent_description_STAR__temp_val__23475_23950,description__11259__auto___23948))
,false),(function (){var description__11259__auto____$1 = speclj.components.new_description.call(null,"play heading",false,"tic-tac-toe.screens.play-spec");
var _STAR_parent_description_STAR__orig_val__23714_23957 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__23715_23958 = description__11259__auto____$1;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__23715_23958);

try{var seq__23716_23959 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,4,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_before.call(null,((function (_STAR_parent_description_STAR__orig_val__23714_23957,_STAR_parent_description_STAR__temp_val__23715_23958,description__11259__auto____$1,_STAR_parent_description_STAR__orig_val__23474_23949,_STAR_parent_description_STAR__temp_val__23475_23950,description__11259__auto___23948){
return (function (){
return cljs.core.reset_BANG_.call(null,tic_tac_toe.screens.play_spec.state,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"current-screen","current-screen",-1454713691),new cljs.core.Keyword(null,"play","play",-580418022),new cljs.core.Keyword(null,"board","board",-1907017633),tic_tac_toe.screens.play_spec.board_3,new cljs.core.Keyword(null,"game-state","game-state",935682735),new cljs.core.Keyword(null,"in-progress","in-progress",2126442630)], null));
});})(_STAR_parent_description_STAR__orig_val__23714_23957,_STAR_parent_description_STAR__temp_val__23715_23958,description__11259__auto____$1,_STAR_parent_description_STAR__orig_val__23474_23949,_STAR_parent_description_STAR__temp_val__23475_23950,description__11259__auto___23948))
),speclj.components.new_characteristic.call(null,"prompts player x for move",((function (_STAR_parent_description_STAR__orig_val__23714_23957,_STAR_parent_description_STAR__temp_val__23715_23958,description__11259__auto____$1,_STAR_parent_description_STAR__orig_val__23474_23949,_STAR_parent_description_STAR__temp_val__23475_23950,description__11259__auto___23948){
return (function (){
cljs.core.swap_BANG_.call(null,tic_tac_toe.screens.play_spec.state,cljs.core.assoc,new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"x","x",2099068185));

c3kit.wire.spec_helper.render.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tic_tac_toe.render_screen.render_screen,tic_tac_toe.screens.play_spec.state], null));

var expected__11396__auto__ = "X's turn!";
var actual__11397__auto__ = c3kit.wire.spec_helper.text.call(null,"#play-heading");
if(cljs.core._EQ_.call(null,expected__11396__auto__,actual__11397__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__11396__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11364__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11364__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__11397__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11364__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11364__auto__);
}
})()," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__23714_23957,_STAR_parent_description_STAR__temp_val__23715_23958,description__11259__auto____$1,_STAR_parent_description_STAR__orig_val__23474_23949,_STAR_parent_description_STAR__temp_val__23475_23950,description__11259__auto___23948))
,false),speclj.components.new_characteristic.call(null,"prompts player o for move",((function (_STAR_parent_description_STAR__orig_val__23714_23957,_STAR_parent_description_STAR__temp_val__23715_23958,description__11259__auto____$1,_STAR_parent_description_STAR__orig_val__23474_23949,_STAR_parent_description_STAR__temp_val__23475_23950,description__11259__auto___23948){
return (function (){
cljs.core.swap_BANG_.call(null,tic_tac_toe.screens.play_spec.state,cljs.core.assoc,new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"o","o",-1350007228));

c3kit.wire.spec_helper.render.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tic_tac_toe.render_screen.render_screen,tic_tac_toe.screens.play_spec.state], null));

var expected__11396__auto__ = "O's turn!";
var actual__11397__auto__ = c3kit.wire.spec_helper.text.call(null,"#play-heading");
if(cljs.core._EQ_.call(null,expected__11396__auto__,actual__11397__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__11396__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11364__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11364__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__11397__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11364__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11364__auto__);
}
})()," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__23714_23957,_STAR_parent_description_STAR__temp_val__23715_23958,description__11259__auto____$1,_STAR_parent_description_STAR__orig_val__23474_23949,_STAR_parent_description_STAR__temp_val__23475_23950,description__11259__auto___23948))
,false),speclj.components.new_characteristic.call(null,"displays game state if game over",((function (_STAR_parent_description_STAR__orig_val__23714_23957,_STAR_parent_description_STAR__temp_val__23715_23958,description__11259__auto____$1,_STAR_parent_description_STAR__orig_val__23474_23949,_STAR_parent_description_STAR__temp_val__23475_23950,description__11259__auto___23948){
return (function (){
cljs.core.swap_BANG_.call(null,tic_tac_toe.screens.play_spec.state,cljs.core.assoc,new cljs.core.Keyword(null,"game-state","game-state",935682735),"X wins!");

c3kit.wire.spec_helper.render.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tic_tac_toe.render_screen.render_screen,tic_tac_toe.screens.play_spec.state], null));

var expected__11396__auto__ = "X wins!";
var actual__11397__auto__ = c3kit.wire.spec_helper.text.call(null,"#play-heading");
if(cljs.core._EQ_.call(null,expected__11396__auto__,actual__11397__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__11396__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11364__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11364__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__11397__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11364__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11364__auto__);
}
})()," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__23714_23957,_STAR_parent_description_STAR__temp_val__23715_23958,description__11259__auto____$1,_STAR_parent_description_STAR__orig_val__23474_23949,_STAR_parent_description_STAR__temp_val__23475_23950,description__11259__auto___23948))
,false)],null)));
var chunk__23717_23960 = null;
var count__23718_23961 = (0);
var i__23719_23962 = (0);
while(true){
if((i__23719_23962 < count__23718_23961)){
var component__11260__auto___23963 = cljs.core._nth.call(null,chunk__23717_23960,i__23719_23962);
speclj.components.install.call(null,component__11260__auto___23963,description__11259__auto____$1);


var G__23964 = seq__23716_23959;
var G__23965 = chunk__23717_23960;
var G__23966 = count__23718_23961;
var G__23967 = (i__23719_23962 + (1));
seq__23716_23959 = G__23964;
chunk__23717_23960 = G__23965;
count__23718_23961 = G__23966;
i__23719_23962 = G__23967;
continue;
} else {
var temp__5804__auto___23968 = cljs.core.seq.call(null,seq__23716_23959);
if(temp__5804__auto___23968){
var seq__23716_23969__$1 = temp__5804__auto___23968;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23716_23969__$1)){
var c__5525__auto___23970 = cljs.core.chunk_first.call(null,seq__23716_23969__$1);
var G__23971 = cljs.core.chunk_rest.call(null,seq__23716_23969__$1);
var G__23972 = c__5525__auto___23970;
var G__23973 = cljs.core.count.call(null,c__5525__auto___23970);
var G__23974 = (0);
seq__23716_23959 = G__23971;
chunk__23717_23960 = G__23972;
count__23718_23961 = G__23973;
i__23719_23962 = G__23974;
continue;
} else {
var component__11260__auto___23975 = cljs.core.first.call(null,seq__23716_23969__$1);
speclj.components.install.call(null,component__11260__auto___23975,description__11259__auto____$1);


var G__23976 = cljs.core.next.call(null,seq__23716_23969__$1);
var G__23977 = null;
var G__23978 = (0);
var G__23979 = (0);
seq__23716_23959 = G__23976;
chunk__23717_23960 = G__23977;
count__23718_23961 = G__23978;
i__23719_23962 = G__23979;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__23714_23957);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__11259__auto____$1);
}

return description__11259__auto____$1;
})(),(function (){var description__11259__auto____$1 = speclj.components.new_description.call(null,"3x3",false,"tic-tac-toe.screens.play-spec");
var _STAR_parent_description_STAR__orig_val__23720_23980 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__23721_23981 = description__11259__auto____$1;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__23721_23981);

try{var seq__23722_23982 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,12,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_before.call(null,((function (_STAR_parent_description_STAR__orig_val__23720_23980,_STAR_parent_description_STAR__temp_val__23721_23981,description__11259__auto____$1,_STAR_parent_description_STAR__orig_val__23474_23949,_STAR_parent_description_STAR__temp_val__23475_23950,description__11259__auto___23948){
return (function (){
cljs.core.reset_BANG_.call(null,tic_tac_toe.screens.play_spec.state,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"current-screen","current-screen",-1454713691),new cljs.core.Keyword(null,"play","play",-580418022),new cljs.core.Keyword(null,"board","board",-1907017633),tic_tac_toe.screens.play_spec.board_3,new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"mode","mode",654403691),(1),new cljs.core.Keyword(null,"game-state","game-state",935682735),new cljs.core.Keyword(null,"in-progress","in-progress",2126442630)], null));

return c3kit.wire.spec_helper.render.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tic_tac_toe.render_screen.render_screen,tic_tac_toe.screens.play_spec.state], null));
});})(_STAR_parent_description_STAR__orig_val__23720_23980,_STAR_parent_description_STAR__temp_val__23721_23981,description__11259__auto____$1,_STAR_parent_description_STAR__orig_val__23474_23949,_STAR_parent_description_STAR__temp_val__23475_23950,description__11259__auto___23948))
),speclj.components.new_characteristic.call(null,"renders board",((function (_STAR_parent_description_STAR__orig_val__23720_23980,_STAR_parent_description_STAR__temp_val__23721_23981,description__11259__auto____$1,_STAR_parent_description_STAR__orig_val__23474_23949,_STAR_parent_description_STAR__temp_val__23475_23950,description__11259__auto___23948){
return (function (){
var expected__11396__auto___23986 = (9);
var actual__11397__auto___23987 = cljs.core.count.call(null,cljs.core.vec.call(null,c3kit.wire.js.query_selector_all.call(null,".board-square")));
if(cljs.core._EQ_.call(null,expected__11396__auto___23986,actual__11397__auto___23987)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__11396__auto___23986;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11364__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11364__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__11397__auto___23987;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11364__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11364__auto__);
}
})()," (using =)"].join('')));
}

var value__11759__auto___23988 = "#board-wrapper";
var node__11760__auto___23989 = c3kit.wire.spec_helper.select.call(null,value__11759__auto___23988);
if(cljs.core.truth_(node__11760__auto___23989)){
} else {
throw (new speclj.platform.SpecFailure(["Expected selector to find node: ",(function (){var temp__5806__auto__ = value__11759__auto___23988;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11364__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11364__auto__);
}
})()].join('')));
}

var value__11759__auto__ = ".three-grid";
var node__11760__auto__ = c3kit.wire.spec_helper.select.call(null,value__11759__auto__);
if(cljs.core.truth_(node__11760__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected selector to find node: ",(function (){var temp__5806__auto__ = value__11759__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11364__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11364__auto__);
}
})()].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__23720_23980,_STAR_parent_description_STAR__temp_val__23721_23981,description__11259__auto____$1,_STAR_parent_description_STAR__orig_val__23474_23949,_STAR_parent_description_STAR__temp_val__23475_23950,description__11259__auto___23948))
,false),speclj.components.new_characteristic.call(null,"buttons have IDs 0-8",((function (_STAR_parent_description_STAR__orig_val__23720_23980,_STAR_parent_description_STAR__temp_val__23721_23981,description__11259__auto____$1,_STAR_parent_description_STAR__orig_val__23474_23949,_STAR_parent_description_STAR__temp_val__23475_23950,description__11259__auto___23948){
return (function (){
var seq__23786 = cljs.core.seq.call(null,cljs.core.range.call(null,(9)));
var chunk__23787 = null;
var count__23788 = (0);
var i__23789 = (0);
while(true){
if((i__23789 < count__23788)){
var n = cljs.core._nth.call(null,chunk__23787,i__23789);
var value__11759__auto___23990 = ["#index-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join('');
var node__11760__auto___23991 = c3kit.wire.spec_helper.select.call(null,value__11759__auto___23990);
if(cljs.core.truth_(node__11760__auto___23991)){
} else {
throw (new speclj.platform.SpecFailure(["Expected selector to find node: ",(function (){var temp__5806__auto__ = value__11759__auto___23990;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11364__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11364__auto__);
}
})()].join('')));
}


var G__23992 = seq__23786;
var G__23993 = chunk__23787;
var G__23994 = count__23788;
var G__23995 = (i__23789 + (1));
seq__23786 = G__23992;
chunk__23787 = G__23993;
count__23788 = G__23994;
i__23789 = G__23995;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__23786);
if(temp__5804__auto__){
var seq__23786__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23786__$1)){
var c__5525__auto__ = cljs.core.chunk_first.call(null,seq__23786__$1);
var G__23996 = cljs.core.chunk_rest.call(null,seq__23786__$1);
var G__23997 = c__5525__auto__;
var G__23998 = cljs.core.count.call(null,c__5525__auto__);
var G__23999 = (0);
seq__23786 = G__23996;
chunk__23787 = G__23997;
count__23788 = G__23998;
i__23789 = G__23999;
continue;
} else {
var n = cljs.core.first.call(null,seq__23786__$1);
var value__11759__auto___24000 = ["#index-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join('');
var node__11760__auto___24001 = c3kit.wire.spec_helper.select.call(null,value__11759__auto___24000);
if(cljs.core.truth_(node__11760__auto___24001)){
} else {
throw (new speclj.platform.SpecFailure(["Expected selector to find node: ",(function (){var temp__5806__auto__ = value__11759__auto___24000;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11364__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11364__auto__);
}
})()].join('')));
}


var G__24002 = cljs.core.next.call(null,seq__23786__$1);
var G__24003 = null;
var G__24004 = (0);
var G__24005 = (0);
seq__23786 = G__24002;
chunk__23787 = G__24003;
count__23788 = G__24004;
i__23789 = G__24005;
continue;
}
} else {
return null;
}
}
break;
}
});})(_STAR_parent_description_STAR__orig_val__23720_23980,_STAR_parent_description_STAR__temp_val__23721_23981,description__11259__auto____$1,_STAR_parent_description_STAR__orig_val__23474_23949,_STAR_parent_description_STAR__temp_val__23475_23950,description__11259__auto___23948))
,false),speclj.components.new_characteristic.call(null,"clicking button updates board in state",((function (_STAR_parent_description_STAR__orig_val__23720_23980,_STAR_parent_description_STAR__temp_val__23721_23981,description__11259__auto____$1,_STAR_parent_description_STAR__orig_val__23474_23949,_STAR_parent_description_STAR__temp_val__23475_23950,description__11259__auto___23948){
return (function (){
var seq__23790 = cljs.core.seq.call(null,cljs.core.range.call(null,(9)));
var chunk__23791 = null;
var count__23792 = (0);
var i__23793 = (0);
while(true){
if((i__23793 < count__23792)){
var n = cljs.core._nth.call(null,chunk__23791,i__23793);
c3kit.wire.spec_helper.click_BANG_.call(null,["#index-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join(''));

var expected__11396__auto___24006 = cljs.core.assoc.call(null,tic_tac_toe.screens.play_spec.board_3,n,new cljs.core.Keyword(null,"x","x",2099068185));
var actual__11397__auto___24007 = new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.screens.play_spec.state));
if(cljs.core._EQ_.call(null,expected__11396__auto___24006,actual__11397__auto___24007)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__11396__auto___24006;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11364__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11364__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__11397__auto___24007;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11364__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11364__auto__);
}
})()," (using =)"].join('')));
}

cljs.core.swap_BANG_.call(null,tic_tac_toe.screens.play_spec.state,cljs.core.assoc,new cljs.core.Keyword(null,"board","board",-1907017633),tic_tac_toe.screens.play_spec.board_3,new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"x","x",2099068185));


var G__24008 = seq__23790;
var G__24009 = chunk__23791;
var G__24010 = count__23792;
var G__24011 = (i__23793 + (1));
seq__23790 = G__24008;
chunk__23791 = G__24009;
count__23792 = G__24010;
i__23793 = G__24011;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__23790);
if(temp__5804__auto__){
var seq__23790__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23790__$1)){
var c__5525__auto__ = cljs.core.chunk_first.call(null,seq__23790__$1);
var G__24012 = cljs.core.chunk_rest.call(null,seq__23790__$1);
var G__24013 = c__5525__auto__;
var G__24014 = cljs.core.count.call(null,c__5525__auto__);
var G__24015 = (0);
seq__23790 = G__24012;
chunk__23791 = G__24013;
count__23792 = G__24014;
i__23793 = G__24015;
continue;
} else {
var n = cljs.core.first.call(null,seq__23790__$1);
c3kit.wire.spec_helper.click_BANG_.call(null,["#index-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join(''));

var expected__11396__auto___24016 = cljs.core.assoc.call(null,tic_tac_toe.screens.play_spec.board_3,n,new cljs.core.Keyword(null,"x","x",2099068185));
var actual__11397__auto___24017 = new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.screens.play_spec.state));
if(cljs.core._EQ_.call(null,expected__11396__auto___24016,actual__11397__auto___24017)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__11396__auto___24016;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11364__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11364__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__11397__auto___24017;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11364__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11364__auto__);
}
})()," (using =)"].join('')));
}

cljs.core.swap_BANG_.call(null,tic_tac_toe.screens.play_spec.state,cljs.core.assoc,new cljs.core.Keyword(null,"board","board",-1907017633),tic_tac_toe.screens.play_spec.board_3,new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"x","x",2099068185));


var G__24018 = cljs.core.next.call(null,seq__23790__$1);
var G__24019 = null;
var G__24020 = (0);
var G__24021 = (0);
seq__23790 = G__24018;
chunk__23791 = G__24019;
count__23792 = G__24020;
i__23793 = G__24021;
continue;
}
} else {
return null;
}
}
break;
}
});})(_STAR_parent_description_STAR__orig_val__23720_23980,_STAR_parent_description_STAR__temp_val__23721_23981,description__11259__auto____$1,_STAR_parent_description_STAR__orig_val__23474_23949,_STAR_parent_description_STAR__temp_val__23475_23950,description__11259__auto___23948))
,false),speclj.components.new_characteristic.call(null,"clicking button swaps player in state",((function (_STAR_parent_description_STAR__orig_val__23720_23980,_STAR_parent_description_STAR__temp_val__23721_23981,description__11259__auto____$1,_STAR_parent_description_STAR__orig_val__23474_23949,_STAR_parent_description_STAR__temp_val__23475_23950,description__11259__auto___23948){
return (function (){
var seq__23794 = cljs.core.seq.call(null,cljs.core.range.call(null,(9)));
var chunk__23795 = null;
var count__23796 = (0);
var i__23797 = (0);
while(true){
if((i__23797 < count__23796)){
var n = cljs.core._nth.call(null,chunk__23795,i__23797);
c3kit.wire.spec_helper.click_BANG_.call(null,["#index-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join(''));

var expected__11396__auto___24022 = new cljs.core.Keyword(null,"o","o",-1350007228);
var actual__11397__auto___24023 = new cljs.core.Keyword(null,"player","player",-97687400).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.screens.play_spec.state));
if(cljs.core._EQ_.call(null,expected__11396__auto___24022,actual__11397__auto___24023)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__11396__auto___24022;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11364__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11364__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__11397__auto___24023;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11364__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11364__auto__);
}
})()," (using =)"].join('')));
}

cljs.core.swap_BANG_.call(null,tic_tac_toe.screens.play_spec.state,cljs.core.assoc,new cljs.core.Keyword(null,"board","board",-1907017633),tic_tac_toe.screens.play_spec.board_3,new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"x","x",2099068185));


var G__24024 = seq__23794;
var G__24025 = chunk__23795;
var G__24026 = count__23796;
var G__24027 = (i__23797 + (1));
seq__23794 = G__24024;
chunk__23795 = G__24025;
count__23796 = G__24026;
i__23797 = G__24027;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__23794);
if(temp__5804__auto__){
var seq__23794__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23794__$1)){
var c__5525__auto__ = cljs.core.chunk_first.call(null,seq__23794__$1);
var G__24028 = cljs.core.chunk_rest.call(null,seq__23794__$1);
var G__24029 = c__5525__auto__;
var G__24030 = cljs.core.count.call(null,c__5525__auto__);
var G__24031 = (0);
seq__23794 = G__24028;
chunk__23795 = G__24029;
count__23796 = G__24030;
i__23797 = G__24031;
continue;
} else {
var n = cljs.core.first.call(null,seq__23794__$1);
c3kit.wire.spec_helper.click_BANG_.call(null,["#index-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join(''));

var expected__11396__auto___24032 = new cljs.core.Keyword(null,"o","o",-1350007228);
var actual__11397__auto___24033 = new cljs.core.Keyword(null,"player","player",-97687400).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.screens.play_spec.state));
if(cljs.core._EQ_.call(null,expected__11396__auto___24032,actual__11397__auto___24033)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__11396__auto___24032;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11364__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11364__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__11397__auto___24033;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11364__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11364__auto__);
}
})()," (using =)"].join('')));
}

cljs.core.swap_BANG_.call(null,tic_tac_toe.screens.play_spec.state,cljs.core.assoc,new cljs.core.Keyword(null,"board","board",-1907017633),tic_tac_toe.screens.play_spec.board_3,new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"x","x",2099068185));


var G__24034 = cljs.core.next.call(null,seq__23794__$1);
var G__24035 = null;
var G__24036 = (0);
var G__24037 = (0);
seq__23794 = G__24034;
chunk__23795 = G__24035;
count__23796 = G__24036;
i__23797 = G__24037;
continue;
}
} else {
return null;
}
}
break;
}
});})(_STAR_parent_description_STAR__orig_val__23720_23980,_STAR_parent_description_STAR__temp_val__23721_23981,description__11259__auto____$1,_STAR_parent_description_STAR__orig_val__23474_23949,_STAR_parent_description_STAR__temp_val__23475_23950,description__11259__auto___23948))
,false),speclj.components.new_characteristic.call(null,"clicking button updates game-state in state",((function (_STAR_parent_description_STAR__orig_val__23720_23980,_STAR_parent_description_STAR__temp_val__23721_23981,description__11259__auto____$1,_STAR_parent_description_STAR__orig_val__23474_23949,_STAR_parent_description_STAR__temp_val__23475_23950,description__11259__auto___23948){
return (function (){
cljs.core.swap_BANG_.call(null,tic_tac_toe.screens.play_spec.state,cljs.core.assoc,new cljs.core.Keyword(null,"board","board",-1907017633),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"o","o",-1350007228),new cljs.core.Keyword(null,"o","o",-1350007228),(6),(7),(8),(9)], null));

c3kit.wire.spec_helper.click_BANG_.call(null,"#index-0");

var expected__11396__auto__ = "X wins!";
var actual__11397__auto__ = new cljs.core.Keyword(null,"game-state","game-state",935682735).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.screens.play_spec.state));
if(cljs.core._EQ_.call(null,expected__11396__auto__,actual__11397__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__11396__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11364__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11364__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__11397__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11364__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11364__auto__);
}
})()," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__23720_23980,_STAR_parent_description_STAR__temp_val__23721_23981,description__11259__auto____$1,_STAR_parent_description_STAR__orig_val__23474_23949,_STAR_parent_description_STAR__temp_val__23475_23950,description__11259__auto___23948))
,false),speclj.components.new_characteristic.call(null,"clicking button adds token to button HTML",((function (_STAR_parent_description_STAR__orig_val__23720_23980,_STAR_parent_description_STAR__temp_val__23721_23981,description__11259__auto____$1,_STAR_parent_description_STAR__orig_val__23474_23949,_STAR_parent_description_STAR__temp_val__23475_23950,description__11259__auto___23948){
return (function (){
var seq__23798 = cljs.core.seq.call(null,cljs.core.range.call(null,(9)));
var chunk__23799 = null;
var count__23800 = (0);
var i__23801 = (0);
while(true){
if((i__23801 < count__23800)){
var n = cljs.core._nth.call(null,chunk__23799,i__23801);
c3kit.wire.spec_helper.click_BANG_.call(null,["#index-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join(''));

var expected__11396__auto___24038 = "X";
var actual__11397__auto___24039 = c3kit.wire.spec_helper.text.call(null,["#index-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join(''));
if(cljs.core._EQ_.call(null,expected__11396__auto___24038,actual__11397__auto___24039)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__11396__auto___24038;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11364__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11364__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__11397__auto___24039;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11364__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11364__auto__);
}
})()," (using =)"].join('')));
}

cljs.core.reset_BANG_.call(null,tic_tac_toe.screens.play_spec.state,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"board","board",-1907017633),tic_tac_toe.screens.play_spec.board_3,new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"current-screen","current-screen",-1454713691),new cljs.core.Keyword(null,"play","play",-580418022),new cljs.core.Keyword(null,"mode","mode",654403691),(1)], null));


var G__24040 = seq__23798;
var G__24041 = chunk__23799;
var G__24042 = count__23800;
var G__24043 = (i__23801 + (1));
seq__23798 = G__24040;
chunk__23799 = G__24041;
count__23800 = G__24042;
i__23801 = G__24043;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__23798);
if(temp__5804__auto__){
var seq__23798__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23798__$1)){
var c__5525__auto__ = cljs.core.chunk_first.call(null,seq__23798__$1);
var G__24044 = cljs.core.chunk_rest.call(null,seq__23798__$1);
var G__24045 = c__5525__auto__;
var G__24046 = cljs.core.count.call(null,c__5525__auto__);
var G__24047 = (0);
seq__23798 = G__24044;
chunk__23799 = G__24045;
count__23800 = G__24046;
i__23801 = G__24047;
continue;
} else {
var n = cljs.core.first.call(null,seq__23798__$1);
c3kit.wire.spec_helper.click_BANG_.call(null,["#index-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join(''));

var expected__11396__auto___24048 = "X";
var actual__11397__auto___24049 = c3kit.wire.spec_helper.text.call(null,["#index-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join(''));
if(cljs.core._EQ_.call(null,expected__11396__auto___24048,actual__11397__auto___24049)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__11396__auto___24048;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11364__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11364__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__11397__auto___24049;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11364__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11364__auto__);
}
})()," (using =)"].join('')));
}

cljs.core.reset_BANG_.call(null,tic_tac_toe.screens.play_spec.state,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"board","board",-1907017633),tic_tac_toe.screens.play_spec.board_3,new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"current-screen","current-screen",-1454713691),new cljs.core.Keyword(null,"play","play",-580418022),new cljs.core.Keyword(null,"mode","mode",654403691),(1)], null));


var G__24050 = cljs.core.next.call(null,seq__23798__$1);
var G__24051 = null;
var G__24052 = (0);
var G__24053 = (0);
seq__23798 = G__24050;
chunk__23799 = G__24051;
count__23800 = G__24052;
i__23801 = G__24053;
continue;
}
} else {
return null;
}
}
break;
}
});})(_STAR_parent_description_STAR__orig_val__23720_23980,_STAR_parent_description_STAR__temp_val__23721_23981,description__11259__auto____$1,_STAR_parent_description_STAR__orig_val__23474_23949,_STAR_parent_description_STAR__temp_val__23475_23950,description__11259__auto___23948))
,false),speclj.components.new_characteristic.call(null,"clicking button disables button",((function (_STAR_parent_description_STAR__orig_val__23720_23980,_STAR_parent_description_STAR__temp_val__23721_23981,description__11259__auto____$1,_STAR_parent_description_STAR__orig_val__23474_23949,_STAR_parent_description_STAR__temp_val__23475_23950,description__11259__auto___23948){
return (function (){
var seq__23802 = cljs.core.seq.call(null,cljs.core.range.call(null,(9)));
var chunk__23803 = null;
var count__23804 = (0);
var i__23805 = (0);
while(true){
if((i__23805 < count__23804)){
var n = cljs.core._nth.call(null,chunk__23803,i__23805);
c3kit.wire.spec_helper.click_BANG_.call(null,["#index-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join(''));

var expected__11396__auto___24054 = true;
var actual__11397__auto___24055 = c3kit.wire.spec_helper.disabled_QMARK_.call(null,["#index-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join(''));
if(cljs.core._EQ_.call(null,expected__11396__auto___24054,actual__11397__auto___24055)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__11396__auto___24054;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11364__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11364__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__11397__auto___24055;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11364__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11364__auto__);
}
})()," (using =)"].join('')));
}

cljs.core.reset_BANG_.call(null,tic_tac_toe.screens.play_spec.state,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"board","board",-1907017633),tic_tac_toe.screens.play_spec.board_3,new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"current-screen","current-screen",-1454713691),new cljs.core.Keyword(null,"play","play",-580418022),new cljs.core.Keyword(null,"mode","mode",654403691),(1)], null));


var G__24056 = seq__23802;
var G__24057 = chunk__23803;
var G__24058 = count__23804;
var G__24059 = (i__23805 + (1));
seq__23802 = G__24056;
chunk__23803 = G__24057;
count__23804 = G__24058;
i__23805 = G__24059;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__23802);
if(temp__5804__auto__){
var seq__23802__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23802__$1)){
var c__5525__auto__ = cljs.core.chunk_first.call(null,seq__23802__$1);
var G__24060 = cljs.core.chunk_rest.call(null,seq__23802__$1);
var G__24061 = c__5525__auto__;
var G__24062 = cljs.core.count.call(null,c__5525__auto__);
var G__24063 = (0);
seq__23802 = G__24060;
chunk__23803 = G__24061;
count__23804 = G__24062;
i__23805 = G__24063;
continue;
} else {
var n = cljs.core.first.call(null,seq__23802__$1);
c3kit.wire.spec_helper.click_BANG_.call(null,["#index-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join(''));

var expected__11396__auto___24064 = true;
var actual__11397__auto___24065 = c3kit.wire.spec_helper.disabled_QMARK_.call(null,["#index-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join(''));
if(cljs.core._EQ_.call(null,expected__11396__auto___24064,actual__11397__auto___24065)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__11396__auto___24064;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11364__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11364__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__11397__auto___24065;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11364__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11364__auto__);
}
})()," (using =)"].join('')));
}

cljs.core.reset_BANG_.call(null,tic_tac_toe.screens.play_spec.state,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"board","board",-1907017633),tic_tac_toe.screens.play_spec.board_3,new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"current-screen","current-screen",-1454713691),new cljs.core.Keyword(null,"play","play",-580418022),new cljs.core.Keyword(null,"mode","mode",654403691),(1)], null));


var G__24066 = cljs.core.next.call(null,seq__23802__$1);
var G__24067 = null;
var G__24068 = (0);
var G__24069 = (0);
seq__23802 = G__24066;
chunk__23803 = G__24067;
count__23804 = G__24068;
i__23805 = G__24069;
continue;
}
} else {
return null;
}
}
break;
}
});})(_STAR_parent_description_STAR__orig_val__23720_23980,_STAR_parent_description_STAR__temp_val__23721_23981,description__11259__auto____$1,_STAR_parent_description_STAR__orig_val__23474_23949,_STAR_parent_description_STAR__temp_val__23475_23950,description__11259__auto___23948))
,false),speclj.components.new_characteristic.call(null,"all buttons disabled when game-over",((function (_STAR_parent_description_STAR__orig_val__23720_23980,_STAR_parent_description_STAR__temp_val__23721_23981,description__11259__auto____$1,_STAR_parent_description_STAR__orig_val__23474_23949,_STAR_parent_description_STAR__temp_val__23475_23950,description__11259__auto___23948){
return (function (){
var seq__23806 = cljs.core.seq.call(null,cljs.core.range.call(null,(9)));
var chunk__23811 = null;
var count__23812 = (0);
var i__23813 = (0);
while(true){
if((i__23813 < count__23812)){
var n = cljs.core._nth.call(null,chunk__23811,i__23813);
var seq__23814_24070 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["X wins!","O wins!","It is a tie!"], null));
var chunk__23815_24071 = null;
var count__23816_24072 = (0);
var i__23817_24073 = (0);
while(true){
if((i__23817_24073 < count__23816_24072)){
var states_24074 = cljs.core._nth.call(null,chunk__23815_24071,i__23817_24073);
cljs.core.swap_BANG_.call(null,tic_tac_toe.screens.play_spec.state,cljs.core.assoc,new cljs.core.Keyword(null,"game-state","game-state",935682735),states_24074);

c3kit.wire.spec_helper.render.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tic_tac_toe.render_screen.render_screen,tic_tac_toe.screens.play_spec.state], null));

var expected__11396__auto___24075 = true;
var actual__11397__auto___24076 = c3kit.wire.spec_helper.disabled_QMARK_.call(null,["#index-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join(''));
if(cljs.core._EQ_.call(null,expected__11396__auto___24075,actual__11397__auto___24076)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__11396__auto___24075;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11364__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11364__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__11397__auto___24076;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11364__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11364__auto__);
}
})()," (using =)"].join('')));
}

cljs.core.reset_BANG_.call(null,tic_tac_toe.screens.play_spec.state,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"board","board",-1907017633),tic_tac_toe.screens.play_spec.board_3,new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"current-screen","current-screen",-1454713691),new cljs.core.Keyword(null,"play","play",-580418022),new cljs.core.Keyword(null,"mode","mode",654403691),(1)], null));


var G__24077 = seq__23814_24070;
var G__24078 = chunk__23815_24071;
var G__24079 = count__23816_24072;
var G__24080 = (i__23817_24073 + (1));
seq__23814_24070 = G__24077;
chunk__23815_24071 = G__24078;
count__23816_24072 = G__24079;
i__23817_24073 = G__24080;
continue;
} else {
var temp__5804__auto___24081 = cljs.core.seq.call(null,seq__23814_24070);
if(temp__5804__auto___24081){
var seq__23814_24082__$1 = temp__5804__auto___24081;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23814_24082__$1)){
var c__5525__auto___24083 = cljs.core.chunk_first.call(null,seq__23814_24082__$1);
var G__24084 = cljs.core.chunk_rest.call(null,seq__23814_24082__$1);
var G__24085 = c__5525__auto___24083;
var G__24086 = cljs.core.count.call(null,c__5525__auto___24083);
var G__24087 = (0);
seq__23814_24070 = G__24084;
chunk__23815_24071 = G__24085;
count__23816_24072 = G__24086;
i__23817_24073 = G__24087;
continue;
} else {
var states_24088 = cljs.core.first.call(null,seq__23814_24082__$1);
cljs.core.swap_BANG_.call(null,tic_tac_toe.screens.play_spec.state,cljs.core.assoc,new cljs.core.Keyword(null,"game-state","game-state",935682735),states_24088);

c3kit.wire.spec_helper.render.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tic_tac_toe.render_screen.render_screen,tic_tac_toe.screens.play_spec.state], null));

var expected__11396__auto___24089 = true;
var actual__11397__auto___24090 = c3kit.wire.spec_helper.disabled_QMARK_.call(null,["#index-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join(''));
if(cljs.core._EQ_.call(null,expected__11396__auto___24089,actual__11397__auto___24090)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__11396__auto___24089;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11364__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11364__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__11397__auto___24090;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11364__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11364__auto__);
}
})()," (using =)"].join('')));
}

cljs.core.reset_BANG_.call(null,tic_tac_toe.screens.play_spec.state,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"board","board",-1907017633),tic_tac_toe.screens.play_spec.board_3,new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"current-screen","current-screen",-1454713691),new cljs.core.Keyword(null,"play","play",-580418022),new cljs.core.Keyword(null,"mode","mode",654403691),(1)], null));


var G__24091 = cljs.core.next.call(null,seq__23814_24082__$1);
var G__24092 = null;
var G__24093 = (0);
var G__24094 = (0);
seq__23814_24070 = G__24091;
chunk__23815_24071 = G__24092;
count__23816_24072 = G__24093;
i__23817_24073 = G__24094;
continue;
}
} else {
}
}
break;
}

var G__24095 = seq__23806;
var G__24096 = chunk__23811;
var G__24097 = count__23812;
var G__24098 = (i__23813 + (1));
seq__23806 = G__24095;
chunk__23811 = G__24096;
count__23812 = G__24097;
i__23813 = G__24098;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__23806);
if(temp__5804__auto__){
var seq__23806__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23806__$1)){
var c__5525__auto__ = cljs.core.chunk_first.call(null,seq__23806__$1);
var G__24099 = cljs.core.chunk_rest.call(null,seq__23806__$1);
var G__24100 = c__5525__auto__;
var G__24101 = cljs.core.count.call(null,c__5525__auto__);
var G__24102 = (0);
seq__23806 = G__24099;
chunk__23811 = G__24100;
count__23812 = G__24101;
i__23813 = G__24102;
continue;
} else {
var n = cljs.core.first.call(null,seq__23806__$1);
var seq__23807_24103 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["X wins!","O wins!","It is a tie!"], null));
var chunk__23808_24104 = null;
var count__23809_24105 = (0);
var i__23810_24106 = (0);
while(true){
if((i__23810_24106 < count__23809_24105)){
var states_24107 = cljs.core._nth.call(null,chunk__23808_24104,i__23810_24106);
cljs.core.swap_BANG_.call(null,tic_tac_toe.screens.play_spec.state,cljs.core.assoc,new cljs.core.Keyword(null,"game-state","game-state",935682735),states_24107);

c3kit.wire.spec_helper.render.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tic_tac_toe.render_screen.render_screen,tic_tac_toe.screens.play_spec.state], null));

var expected__11396__auto___24108 = true;
var actual__11397__auto___24109 = c3kit.wire.spec_helper.disabled_QMARK_.call(null,["#index-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join(''));
if(cljs.core._EQ_.call(null,expected__11396__auto___24108,actual__11397__auto___24109)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__11396__auto___24108;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11364__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11364__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__11397__auto___24109;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11364__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11364__auto__);
}
})()," (using =)"].join('')));
}

cljs.core.reset_BANG_.call(null,tic_tac_toe.screens.play_spec.state,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"board","board",-1907017633),tic_tac_toe.screens.play_spec.board_3,new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"current-screen","current-screen",-1454713691),new cljs.core.Keyword(null,"play","play",-580418022),new cljs.core.Keyword(null,"mode","mode",654403691),(1)], null));


var G__24110 = seq__23807_24103;
var G__24111 = chunk__23808_24104;
var G__24112 = count__23809_24105;
var G__24113 = (i__23810_24106 + (1));
seq__23807_24103 = G__24110;
chunk__23808_24104 = G__24111;
count__23809_24105 = G__24112;
i__23810_24106 = G__24113;
continue;
} else {
var temp__5804__auto___24114__$1 = cljs.core.seq.call(null,seq__23807_24103);
if(temp__5804__auto___24114__$1){
var seq__23807_24115__$1 = temp__5804__auto___24114__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23807_24115__$1)){
var c__5525__auto___24116 = cljs.core.chunk_first.call(null,seq__23807_24115__$1);
var G__24117 = cljs.core.chunk_rest.call(null,seq__23807_24115__$1);
var G__24118 = c__5525__auto___24116;
var G__24119 = cljs.core.count.call(null,c__5525__auto___24116);
var G__24120 = (0);
seq__23807_24103 = G__24117;
chunk__23808_24104 = G__24118;
count__23809_24105 = G__24119;
i__23810_24106 = G__24120;
continue;
} else {
var states_24121 = cljs.core.first.call(null,seq__23807_24115__$1);
cljs.core.swap_BANG_.call(null,tic_tac_toe.screens.play_spec.state,cljs.core.assoc,new cljs.core.Keyword(null,"game-state","game-state",935682735),states_24121);

c3kit.wire.spec_helper.render.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tic_tac_toe.render_screen.render_screen,tic_tac_toe.screens.play_spec.state], null));

var expected__11396__auto___24122 = true;
var actual__11397__auto___24123 = c3kit.wire.spec_helper.disabled_QMARK_.call(null,["#index-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join(''));
if(cljs.core._EQ_.call(null,expected__11396__auto___24122,actual__11397__auto___24123)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__11396__auto___24122;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11364__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11364__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__11397__auto___24123;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11364__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11364__auto__);
}
})()," (using =)"].join('')));
}

cljs.core.reset_BANG_.call(null,tic_tac_toe.screens.play_spec.state,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"board","board",-1907017633),tic_tac_toe.screens.play_spec.board_3,new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"current-screen","current-screen",-1454713691),new cljs.core.Keyword(null,"play","play",-580418022),new cljs.core.Keyword(null,"mode","mode",654403691),(1)], null));


var G__24124 = cljs.core.next.call(null,seq__23807_24115__$1);
var G__24125 = null;
var G__24126 = (0);
var G__24127 = (0);
seq__23807_24103 = G__24124;
chunk__23808_24104 = G__24125;
count__23809_24105 = G__24126;
i__23810_24106 = G__24127;
continue;
}
} else {
}
}
break;
}

var G__24128 = cljs.core.next.call(null,seq__23806__$1);
var G__24129 = null;
var G__24130 = (0);
var G__24131 = (0);
seq__23806 = G__24128;
chunk__23811 = G__24129;
count__23812 = G__24130;
i__23813 = G__24131;
continue;
}
} else {
return null;
}
}
break;
}
});})(_STAR_parent_description_STAR__orig_val__23720_23980,_STAR_parent_description_STAR__temp_val__23721_23981,description__11259__auto____$1,_STAR_parent_description_STAR__orig_val__23474_23949,_STAR_parent_description_STAR__temp_val__23475_23950,description__11259__auto___23948))
,false),speclj.components.new_characteristic.call(null,"clicking button triggers AI if mode 2 or 3",((function (_STAR_parent_description_STAR__orig_val__23720_23980,_STAR_parent_description_STAR__temp_val__23721_23981,description__11259__auto____$1,_STAR_parent_description_STAR__orig_val__23474_23949,_STAR_parent_description_STAR__temp_val__23475_23950,description__11259__auto___23948){
return (function (){
var seq__23818 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(3)], null));
var chunk__23831 = null;
var count__23832 = (0);
var i__23833 = (0);
while(true){
if((i__23833 < count__23832)){
var ai = cljs.core._nth.call(null,chunk__23831,i__23833);
var seq__23834_24132 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(3)], null));
var chunk__23839_24133 = null;
var count__23840_24134 = (0);
var i__23841_24135 = (0);
while(true){
if((i__23841_24135 < count__23840_24134)){
var mode_24136 = cljs.core._nth.call(null,chunk__23839_24133,i__23841_24135);
var seq__23842_24137 = cljs.core.seq.call(null,cljs.core.range.call(null,(9)));
var chunk__23843_24138 = null;
var count__23844_24139 = (0);
var i__23845_24140 = (0);
while(true){
if((i__23845_24140 < count__23844_24139)){
var n_24141 = cljs.core._nth.call(null,chunk__23843_24138,i__23845_24140);
cljs.core.swap_BANG_.call(null,tic_tac_toe.screens.play_spec.state,cljs.core.assoc,new cljs.core.Keyword(null,"mode","mode",654403691),mode_24136,new cljs.core.Keyword(null,"first-ai-level","first-ai-level",1004633644),ai,new cljs.core.Keyword(null,"player","player",-97687400),((cljs.core._EQ_.call(null,(2),mode_24136))?new cljs.core.Keyword(null,"x","x",2099068185):new cljs.core.Keyword(null,"o","o",-1350007228)),new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"gui","gui",604532813));

c3kit.wire.spec_helper.render.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tic_tac_toe.render_screen.render_screen,tic_tac_toe.screens.play_spec.state], null));

c3kit.wire.spec_helper.click_BANG_.call(null,["#index-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n_24141)].join(''));

var expected__11420__auto___24142 = cljs.core.assoc.call(null,tic_tac_toe.screens.play_spec.board_3,n_24141,new cljs.core.Keyword(null,"x","x",2099068185));
var actual__11421__auto___24143 = new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.screens.play_spec.state));
if(cljs.core._EQ_.call(null,expected__11420__auto___24142,actual__11421__auto___24143)){
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__11420__auto___24142;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11364__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11364__auto__);
}
})(),speclj.platform.endl,"not to =: ",(function (){var temp__5806__auto__ = actual__11421__auto___24143;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11364__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11364__auto__);
}
})()].join('')));
} else {
}

var expected__11396__auto___24144 = ((cljs.core._EQ_.call(null,(2),mode_24136))?new cljs.core.Keyword(null,"x","x",2099068185):new cljs.core.Keyword(null,"o","o",-1350007228));
var actual__11397__auto___24145 = new cljs.core.Keyword(null,"player","player",-97687400).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.screens.play_spec.state));
if(cljs.core._EQ_.call(null,expected__11396__auto___24144,actual__11397__auto___24145)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__11396__auto___24144;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11364__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11364__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__11397__auto___24145;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11364__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11364__auto__);
}
})()," (using =)"].join('')));
}

cljs.core.reset_BANG_.call(null,tic_tac_toe.screens.play_spec.state,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"board","board",-1907017633),tic_tac_toe.screens.play_spec.board_3,new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"current-screen","current-screen",-1454713691),new cljs.core.Keyword(null,"play","play",-580418022)], null));


var G__24146 = seq__23842_24137;
var G__24147 = chunk__23843_24138;
var G__24148 = count__23844_24139;
var G__24149 = (i__23845_24140 + (1));
seq__23842_24137 = G__24146;
chunk__23843_24138 = G__24147;
count__23844_24139 = G__24148;
i__23845_24140 = G__24149;
continue;
} else {
var temp__5804__auto___24150 = cljs.core.seq.call(null,seq__23842_24137);
if(temp__5804__auto___24150){
var seq__23842_24151__$1 = temp__5804__auto___24150;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23842_24151__$1)){
var c__5525__auto___24152 = cljs.core.chunk_first.call(null,seq__23842_24151__$1);
var G__24153 = cljs.core.chunk_rest.call(null,seq__23842_24151__$1);
var G__24154 = c__5525__auto___24152;
var G__24155 = cljs.core.count.call(null,c__5525__auto___24152);
var G__24156 = (0);
seq__23842_24137 = G__24153;
chunk__23843_24138 = G__24154;
count__23844_24139 = G__24155;
i__23845_24140 = G__24156;
continue;
} else {
var n_24157 = cljs.core.first.call(null,seq__23842_24151__$1);
cljs.core.swap_BANG_.call(null,tic_tac_toe.screens.play_spec.state,cljs.core.assoc,new cljs.core.Keyword(null,"mode","mode",654403691),mode_24136,new cljs.core.Keyword(null,"first-ai-level","first-ai-level",1004633644),ai,new cljs.core.Keyword(null,"player","player",-97687400),((cljs.core._EQ_.call(null,(2),mode_24136))?new cljs.core.Keyword(null,"x","x",2099068185):new cljs.core.Keyword(null,"o","o",-1350007228)),new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"gui","gui",604532813));

c3kit.wire.spec_helper.render.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tic_tac_toe.render_screen.render_screen,tic_tac_toe.screens.play_spec.state], null));

c3kit.wire.spec_helper.click_BANG_.call(null,["#index-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n_24157)].join(''));

var expected__11420__auto___24158 = cljs.core.assoc.call(null,tic_tac_toe.screens.play_spec.board_3,n_24157,new cljs.core.Keyword(null,"x","x",2099068185));
var actual__11421__auto___24159 = new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.screens.play_spec.state));
if(cljs.core._EQ_.call(null,expected__11420__auto___24158,actual__11421__auto___24159)){
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__11420__auto___24158;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11364__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11364__auto__);
}
})(),speclj.platform.endl,"not to =: ",(function (){var temp__5806__auto__ = actual__11421__auto___24159;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11364__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11364__auto__);
}
})()].join('')));
} else {
}

var expected__11396__auto___24160 = ((cljs.core._EQ_.call(null,(2),mode_24136))?new cljs.core.Keyword(null,"x","x",2099068185):new cljs.core.Keyword(null,"o","o",-1350007228));
var actual__11397__auto___24161 = new cljs.core.Keyword(null,"player","player",-97687400).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.screens.play_spec.state));
if(cljs.core._EQ_.call(null,expected__11396__auto___24160,actual__11397__auto___24161)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__11396__auto___24160;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11364__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11364__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__11397__auto___24161;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11364__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11364__auto__);
}
})()," (using =)"].join('')));
}

cljs.core.reset_BANG_.call(null,tic_tac_toe.screens.play_spec.state,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"board","board",-1907017633),tic_tac_toe.screens.play_spec.board_3,new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"current-screen","current-screen",-1454713691),new cljs.core.Keyword(null,"play","play",-580418022)], null));


var G__24162 = cljs.core.next.call(null,seq__23842_24151__$1);
var G__24163 = null;
var G__24164 = (0);
var G__24165 = (0);
seq__23842_24137 = G__24162;
chunk__23843_24138 = G__24163;
count__23844_24139 = G__24164;
i__23845_24140 = G__24165;
continue;
}
} else {
}
}
break;
}

var G__24166 = seq__23834_24132;
var G__24167 = chunk__23839_24133;
var G__24168 = count__23840_24134;
var G__24169 = (i__23841_24135 + (1));
seq__23834_24132 = G__24166;
chunk__23839_24133 = G__24167;
count__23840_24134 = G__24168;
i__23841_24135 = G__24169;
continue;
} else {
var temp__5804__auto___24170 = cljs.core.seq.call(null,seq__23834_24132);
if(temp__5804__auto___24170){
var seq__23834_24171__$1 = temp__5804__auto___24170;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23834_24171__$1)){
var c__5525__auto___24172 = cljs.core.chunk_first.call(null,seq__23834_24171__$1);
var G__24173 = cljs.core.chunk_rest.call(null,seq__23834_24171__$1);
var G__24174 = c__5525__auto___24172;
var G__24175 = cljs.core.count.call(null,c__5525__auto___24172);
var G__24176 = (0);
seq__23834_24132 = G__24173;
chunk__23839_24133 = G__24174;
count__23840_24134 = G__24175;
i__23841_24135 = G__24176;
continue;
} else {
var mode_24177 = cljs.core.first.call(null,seq__23834_24171__$1);
var seq__23835_24178 = cljs.core.seq.call(null,cljs.core.range.call(null,(9)));
var chunk__23836_24179 = null;
var count__23837_24180 = (0);
var i__23838_24181 = (0);
while(true){
if((i__23838_24181 < count__23837_24180)){
var n_24182 = cljs.core._nth.call(null,chunk__23836_24179,i__23838_24181);
cljs.core.swap_BANG_.call(null,tic_tac_toe.screens.play_spec.state,cljs.core.assoc,new cljs.core.Keyword(null,"mode","mode",654403691),mode_24177,new cljs.core.Keyword(null,"first-ai-level","first-ai-level",1004633644),ai,new cljs.core.Keyword(null,"player","player",-97687400),((cljs.core._EQ_.call(null,(2),mode_24177))?new cljs.core.Keyword(null,"x","x",2099068185):new cljs.core.Keyword(null,"o","o",-1350007228)),new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"gui","gui",604532813));

c3kit.wire.spec_helper.render.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tic_tac_toe.render_screen.render_screen,tic_tac_toe.screens.play_spec.state], null));

c3kit.wire.spec_helper.click_BANG_.call(null,["#index-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n_24182)].join(''));

var expected__11420__auto___24183 = cljs.core.assoc.call(null,tic_tac_toe.screens.play_spec.board_3,n_24182,new cljs.core.Keyword(null,"x","x",2099068185));
var actual__11421__auto___24184 = new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.screens.play_spec.state));
if(cljs.core._EQ_.call(null,expected__11420__auto___24183,actual__11421__auto___24184)){
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__11420__auto___24183;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11364__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11364__auto__);
}
})(),speclj.platform.endl,"not to =: ",(function (){var temp__5806__auto__ = actual__11421__auto___24184;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11364__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11364__auto__);
}
})()].join('')));
} else {
}

var expected__11396__auto___24185 = ((cljs.core._EQ_.call(null,(2),mode_24177))?new cljs.core.Keyword(null,"x","x",2099068185):new cljs.core.Keyword(null,"o","o",-1350007228));
var actual__11397__auto___24186 = new cljs.core.Keyword(null,"player","player",-97687400).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.screens.play_spec.state));
if(cljs.core._EQ_.call(null,expected__11396__auto___24185,actual__11397__auto___24186)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__11396__auto___24185;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11364__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11364__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__11397__auto___24186;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11364__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11364__auto__);
}
})()," (using =)"].join('')));
}

cljs.core.reset_BANG_.call(null,tic_tac_toe.screens.play_spec.state,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"board","board",-1907017633),tic_tac_toe.screens.play_spec.board_3,new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"current-screen","current-screen",-1454713691),new cljs.core.Keyword(null,"play","play",-580418022)], null));


var G__24187 = seq__23835_24178;
var G__24188 = chunk__23836_24179;
var G__24189 = count__23837_24180;
var G__24190 = (i__23838_24181 + (1));
seq__23835_24178 = G__24187;
chunk__23836_24179 = G__24188;
count__23837_24180 = G__24189;
i__23838_24181 = G__24190;
continue;
} else {
var temp__5804__auto___24191__$1 = cljs.core.seq.call(null,seq__23835_24178);
if(temp__5804__auto___24191__$1){
var seq__23835_24192__$1 = temp__5804__auto___24191__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23835_24192__$1)){
var c__5525__auto___24193 = cljs.core.chunk_first.call(null,seq__23835_24192__$1);
var G__24194 = cljs.core.chunk_rest.call(null,seq__23835_24192__$1);
var G__24195 = c__5525__auto___24193;
var G__24196 = cljs.core.count.call(null,c__5525__auto___24193);
var G__24197 = (0);
seq__23835_24178 = G__24194;
chunk__23836_24179 = G__24195;
count__23837_24180 = G__24196;
i__23838_24181 = G__24197;
continue;
} else {
var n_24198 = cljs.core.first.call(null,seq__23835_24192__$1);
cljs.core.swap_BANG_.call(null,tic_tac_toe.screens.play_spec.state,cljs.core.assoc,new cljs.core.Keyword(null,"mode","mode",654403691),mode_24177,new cljs.core.Keyword(null,"first-ai-level","first-ai-level",1004633644),ai,new cljs.core.Keyword(null,"player","player",-97687400),((cljs.core._EQ_.call(null,(2),mode_24177))?new cljs.core.Keyword(null,"x","x",2099068185):new cljs.core.Keyword(null,"o","o",-1350007228)),new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"gui","gui",604532813));

c3kit.wire.spec_helper.render.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tic_tac_toe.render_screen.render_screen,tic_tac_toe.screens.play_spec.state], null));

c3kit.wire.spec_helper.click_BANG_.call(null,["#index-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n_24198)].join(''));

var expected__11420__auto___24199 = cljs.core.assoc.call(null,tic_tac_toe.screens.play_spec.board_3,n_24198,new cljs.core.Keyword(null,"x","x",2099068185));
var actual__11421__auto___24200 = new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.screens.play_spec.state));
if(cljs.core._EQ_.call(null,expected__11420__auto___24199,actual__11421__auto___24200)){
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__11420__auto___24199;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11364__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11364__auto__);
}
})(),speclj.platform.endl,"not to =: ",(function (){var temp__5806__auto__ = actual__11421__auto___24200;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11364__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11364__auto__);
}
})()].join('')));
} else {
}

var expected__11396__auto___24201 = ((cljs.core._EQ_.call(null,(2),mode_24177))?new cljs.core.Keyword(null,"x","x",2099068185):new cljs.core.Keyword(null,"o","o",-1350007228));
var actual__11397__auto___24202 = new cljs.core.Keyword(null,"player","player",-97687400).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.screens.play_spec.state));
if(cljs.core._EQ_.call(null,expected__11396__auto___24201,actual__11397__auto___24202)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__11396__auto___24201;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11364__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11364__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__11397__auto___24202;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11364__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11364__auto__);
}
})()," (using =)"].join('')));
}

cljs.core.reset_BANG_.call(null,tic_tac_toe.screens.play_spec.state,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"board","board",-1907017633),tic_tac_toe.screens.play_spec.board_3,new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"current-screen","current-screen",-1454713691),new cljs.core.Keyword(null,"play","play",-580418022)], null));


var G__24203 = cljs.core.next.call(null,seq__23835_24192__$1);
var G__24204 = null;
var G__24205 = (0);
var G__24206 = (0);
seq__23835_24178 = G__24203;
chunk__23836_24179 = G__24204;
count__23837_24180 = G__24205;
i__23838_24181 = G__24206;
continue;
}
} else {
}
}
break;
}

var G__24207 = cljs.core.next.call(null,seq__23834_24171__$1);
var G__24208 = null;
var G__24209 = (0);
var G__24210 = (0);
seq__23834_24132 = G__24207;
chunk__23839_24133 = G__24208;
count__23840_24134 = G__24209;
i__23841_24135 = G__24210;
continue;
}
} else {
}
}
break;
}

var G__24211 = seq__23818;
var G__24212 = chunk__23831;
var G__24213 = count__23832;
var G__24214 = (i__23833 + (1));
seq__23818 = G__24211;
chunk__23831 = G__24212;
count__23832 = G__24213;
i__23833 = G__24214;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__23818);
if(temp__5804__auto__){
var seq__23818__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23818__$1)){
var c__5525__auto__ = cljs.core.chunk_first.call(null,seq__23818__$1);
var G__24215 = cljs.core.chunk_rest.call(null,seq__23818__$1);
var G__24216 = c__5525__auto__;
var G__24217 = cljs.core.count.call(null,c__5525__auto__);
var G__24218 = (0);
seq__23818 = G__24215;
chunk__23831 = G__24216;
count__23832 = G__24217;
i__23833 = G__24218;
continue;
} else {
var ai = cljs.core.first.call(null,seq__23818__$1);
var seq__23819_24219 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(3)], null));
var chunk__23824_24220 = null;
var count__23825_24221 = (0);
var i__23826_24222 = (0);
while(true){
if((i__23826_24222 < count__23825_24221)){
var mode_24223 = cljs.core._nth.call(null,chunk__23824_24220,i__23826_24222);
var seq__23827_24224 = cljs.core.seq.call(null,cljs.core.range.call(null,(9)));
var chunk__23828_24225 = null;
var count__23829_24226 = (0);
var i__23830_24227 = (0);
while(true){
if((i__23830_24227 < count__23829_24226)){
var n_24228 = cljs.core._nth.call(null,chunk__23828_24225,i__23830_24227);
cljs.core.swap_BANG_.call(null,tic_tac_toe.screens.play_spec.state,cljs.core.assoc,new cljs.core.Keyword(null,"mode","mode",654403691),mode_24223,new cljs.core.Keyword(null,"first-ai-level","first-ai-level",1004633644),ai,new cljs.core.Keyword(null,"player","player",-97687400),((cljs.core._EQ_.call(null,(2),mode_24223))?new cljs.core.Keyword(null,"x","x",2099068185):new cljs.core.Keyword(null,"o","o",-1350007228)),new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"gui","gui",604532813));

c3kit.wire.spec_helper.render.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tic_tac_toe.render_screen.render_screen,tic_tac_toe.screens.play_spec.state], null));

c3kit.wire.spec_helper.click_BANG_.call(null,["#index-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n_24228)].join(''));

var expected__11420__auto___24229 = cljs.core.assoc.call(null,tic_tac_toe.screens.play_spec.board_3,n_24228,new cljs.core.Keyword(null,"x","x",2099068185));
var actual__11421__auto___24230 = new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.screens.play_spec.state));
if(cljs.core._EQ_.call(null,expected__11420__auto___24229,actual__11421__auto___24230)){
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__11420__auto___24229;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11364__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11364__auto__);
}
})(),speclj.platform.endl,"not to =: ",(function (){var temp__5806__auto__ = actual__11421__auto___24230;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11364__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11364__auto__);
}
})()].join('')));
} else {
}

var expected__11396__auto___24231 = ((cljs.core._EQ_.call(null,(2),mode_24223))?new cljs.core.Keyword(null,"x","x",2099068185):new cljs.core.Keyword(null,"o","o",-1350007228));
var actual__11397__auto___24232 = new cljs.core.Keyword(null,"player","player",-97687400).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.screens.play_spec.state));
if(cljs.core._EQ_.call(null,expected__11396__auto___24231,actual__11397__auto___24232)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__11396__auto___24231;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11364__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11364__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__11397__auto___24232;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11364__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11364__auto__);
}
})()," (using =)"].join('')));
}

cljs.core.reset_BANG_.call(null,tic_tac_toe.screens.play_spec.state,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"board","board",-1907017633),tic_tac_toe.screens.play_spec.board_3,new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"current-screen","current-screen",-1454713691),new cljs.core.Keyword(null,"play","play",-580418022)], null));


var G__24233 = seq__23827_24224;
var G__24234 = chunk__23828_24225;
var G__24235 = count__23829_24226;
var G__24236 = (i__23830_24227 + (1));
seq__23827_24224 = G__24233;
chunk__23828_24225 = G__24234;
count__23829_24226 = G__24235;
i__23830_24227 = G__24236;
continue;
} else {
var temp__5804__auto___24237__$1 = cljs.core.seq.call(null,seq__23827_24224);
if(temp__5804__auto___24237__$1){
var seq__23827_24238__$1 = temp__5804__auto___24237__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23827_24238__$1)){
var c__5525__auto___24239 = cljs.core.chunk_first.call(null,seq__23827_24238__$1);
var G__24240 = cljs.core.chunk_rest.call(null,seq__23827_24238__$1);
var G__24241 = c__5525__auto___24239;
var G__24242 = cljs.core.count.call(null,c__5525__auto___24239);
var G__24243 = (0);
seq__23827_24224 = G__24240;
chunk__23828_24225 = G__24241;
count__23829_24226 = G__24242;
i__23830_24227 = G__24243;
continue;
} else {
var n_24244 = cljs.core.first.call(null,seq__23827_24238__$1);
cljs.core.swap_BANG_.call(null,tic_tac_toe.screens.play_spec.state,cljs.core.assoc,new cljs.core.Keyword(null,"mode","mode",654403691),mode_24223,new cljs.core.Keyword(null,"first-ai-level","first-ai-level",1004633644),ai,new cljs.core.Keyword(null,"player","player",-97687400),((cljs.core._EQ_.call(null,(2),mode_24223))?new cljs.core.Keyword(null,"x","x",2099068185):new cljs.core.Keyword(null,"o","o",-1350007228)),new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"gui","gui",604532813));

c3kit.wire.spec_helper.render.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tic_tac_toe.render_screen.render_screen,tic_tac_toe.screens.play_spec.state], null));

c3kit.wire.spec_helper.click_BANG_.call(null,["#index-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n_24244)].join(''));

var expected__11420__auto___24245 = cljs.core.assoc.call(null,tic_tac_toe.screens.play_spec.board_3,n_24244,new cljs.core.Keyword(null,"x","x",2099068185));
var actual__11421__auto___24246 = new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.screens.play_spec.state));
if(cljs.core._EQ_.call(null,expected__11420__auto___24245,actual__11421__auto___24246)){
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__11420__auto___24245;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11364__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11364__auto__);
}
})(),speclj.platform.endl,"not to =: ",(function (){var temp__5806__auto__ = actual__11421__auto___24246;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11364__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11364__auto__);
}
})()].join('')));
} else {
}

var expected__11396__auto___24247 = ((cljs.core._EQ_.call(null,(2),mode_24223))?new cljs.core.Keyword(null,"x","x",2099068185):new cljs.core.Keyword(null,"o","o",-1350007228));
var actual__11397__auto___24248 = new cljs.core.Keyword(null,"player","player",-97687400).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.screens.play_spec.state));
if(cljs.core._EQ_.call(null,expected__11396__auto___24247,actual__11397__auto___24248)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__11396__auto___24247;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11364__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11364__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__11397__auto___24248;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11364__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11364__auto__);
}
})()," (using =)"].join('')));
}

cljs.core.reset_BANG_.call(null,tic_tac_toe.screens.play_spec.state,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"board","board",-1907017633),tic_tac_toe.screens.play_spec.board_3,new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"current-screen","current-screen",-1454713691),new cljs.core.Keyword(null,"play","play",-580418022)], null));


var G__24249 = cljs.core.next.call(null,seq__23827_24238__$1);
var G__24250 = null;
var G__24251 = (0);
var G__24252 = (0);
seq__23827_24224 = G__24249;
chunk__23828_24225 = G__24250;
count__23829_24226 = G__24251;
i__23830_24227 = G__24252;
continue;
}
} else {
}
}
break;
}

var G__24253 = seq__23819_24219;
var G__24254 = chunk__23824_24220;
var G__24255 = count__23825_24221;
var G__24256 = (i__23826_24222 + (1));
seq__23819_24219 = G__24253;
chunk__23824_24220 = G__24254;
count__23825_24221 = G__24255;
i__23826_24222 = G__24256;
continue;
} else {
var temp__5804__auto___24257__$1 = cljs.core.seq.call(null,seq__23819_24219);
if(temp__5804__auto___24257__$1){
var seq__23819_24258__$1 = temp__5804__auto___24257__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23819_24258__$1)){
var c__5525__auto___24259 = cljs.core.chunk_first.call(null,seq__23819_24258__$1);
var G__24260 = cljs.core.chunk_rest.call(null,seq__23819_24258__$1);
var G__24261 = c__5525__auto___24259;
var G__24262 = cljs.core.count.call(null,c__5525__auto___24259);
var G__24263 = (0);
seq__23819_24219 = G__24260;
chunk__23824_24220 = G__24261;
count__23825_24221 = G__24262;
i__23826_24222 = G__24263;
continue;
} else {
var mode_24264 = cljs.core.first.call(null,seq__23819_24258__$1);
var seq__23820_24265 = cljs.core.seq.call(null,cljs.core.range.call(null,(9)));
var chunk__23821_24266 = null;
var count__23822_24267 = (0);
var i__23823_24268 = (0);
while(true){
if((i__23823_24268 < count__23822_24267)){
var n_24269 = cljs.core._nth.call(null,chunk__23821_24266,i__23823_24268);
cljs.core.swap_BANG_.call(null,tic_tac_toe.screens.play_spec.state,cljs.core.assoc,new cljs.core.Keyword(null,"mode","mode",654403691),mode_24264,new cljs.core.Keyword(null,"first-ai-level","first-ai-level",1004633644),ai,new cljs.core.Keyword(null,"player","player",-97687400),((cljs.core._EQ_.call(null,(2),mode_24264))?new cljs.core.Keyword(null,"x","x",2099068185):new cljs.core.Keyword(null,"o","o",-1350007228)),new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"gui","gui",604532813));

c3kit.wire.spec_helper.render.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tic_tac_toe.render_screen.render_screen,tic_tac_toe.screens.play_spec.state], null));

c3kit.wire.spec_helper.click_BANG_.call(null,["#index-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n_24269)].join(''));

var expected__11420__auto___24270 = cljs.core.assoc.call(null,tic_tac_toe.screens.play_spec.board_3,n_24269,new cljs.core.Keyword(null,"x","x",2099068185));
var actual__11421__auto___24271 = new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.screens.play_spec.state));
if(cljs.core._EQ_.call(null,expected__11420__auto___24270,actual__11421__auto___24271)){
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__11420__auto___24270;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11364__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11364__auto__);
}
})(),speclj.platform.endl,"not to =: ",(function (){var temp__5806__auto__ = actual__11421__auto___24271;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11364__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11364__auto__);
}
})()].join('')));
} else {
}

var expected__11396__auto___24272 = ((cljs.core._EQ_.call(null,(2),mode_24264))?new cljs.core.Keyword(null,"x","x",2099068185):new cljs.core.Keyword(null,"o","o",-1350007228));
var actual__11397__auto___24273 = new cljs.core.Keyword(null,"player","player",-97687400).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.screens.play_spec.state));
if(cljs.core._EQ_.call(null,expected__11396__auto___24272,actual__11397__auto___24273)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__11396__auto___24272;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11364__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11364__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__11397__auto___24273;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11364__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11364__auto__);
}
})()," (using =)"].join('')));
}

cljs.core.reset_BANG_.call(null,tic_tac_toe.screens.play_spec.state,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"board","board",-1907017633),tic_tac_toe.screens.play_spec.board_3,new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"current-screen","current-screen",-1454713691),new cljs.core.Keyword(null,"play","play",-580418022)], null));


var G__24274 = seq__23820_24265;
var G__24275 = chunk__23821_24266;
var G__24276 = count__23822_24267;
var G__24277 = (i__23823_24268 + (1));
seq__23820_24265 = G__24274;
chunk__23821_24266 = G__24275;
count__23822_24267 = G__24276;
i__23823_24268 = G__24277;
continue;
} else {
var temp__5804__auto___24278__$2 = cljs.core.seq.call(null,seq__23820_24265);
if(temp__5804__auto___24278__$2){
var seq__23820_24279__$1 = temp__5804__auto___24278__$2;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23820_24279__$1)){
var c__5525__auto___24280 = cljs.core.chunk_first.call(null,seq__23820_24279__$1);
var G__24281 = cljs.core.chunk_rest.call(null,seq__23820_24279__$1);
var G__24282 = c__5525__auto___24280;
var G__24283 = cljs.core.count.call(null,c__5525__auto___24280);
var G__24284 = (0);
seq__23820_24265 = G__24281;
chunk__23821_24266 = G__24282;
count__23822_24267 = G__24283;
i__23823_24268 = G__24284;
continue;
} else {
var n_24285 = cljs.core.first.call(null,seq__23820_24279__$1);
cljs.core.swap_BANG_.call(null,tic_tac_toe.screens.play_spec.state,cljs.core.assoc,new cljs.core.Keyword(null,"mode","mode",654403691),mode_24264,new cljs.core.Keyword(null,"first-ai-level","first-ai-level",1004633644),ai,new cljs.core.Keyword(null,"player","player",-97687400),((cljs.core._EQ_.call(null,(2),mode_24264))?new cljs.core.Keyword(null,"x","x",2099068185):new cljs.core.Keyword(null,"o","o",-1350007228)),new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"gui","gui",604532813));

c3kit.wire.spec_helper.render.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tic_tac_toe.render_screen.render_screen,tic_tac_toe.screens.play_spec.state], null));

c3kit.wire.spec_helper.click_BANG_.call(null,["#index-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n_24285)].join(''));

var expected__11420__auto___24286 = cljs.core.assoc.call(null,tic_tac_toe.screens.play_spec.board_3,n_24285,new cljs.core.Keyword(null,"x","x",2099068185));
var actual__11421__auto___24287 = new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.screens.play_spec.state));
if(cljs.core._EQ_.call(null,expected__11420__auto___24286,actual__11421__auto___24287)){
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__11420__auto___24286;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11364__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11364__auto__);
}
})(),speclj.platform.endl,"not to =: ",(function (){var temp__5806__auto__ = actual__11421__auto___24287;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11364__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11364__auto__);
}
})()].join('')));
} else {
}

var expected__11396__auto___24288 = ((cljs.core._EQ_.call(null,(2),mode_24264))?new cljs.core.Keyword(null,"x","x",2099068185):new cljs.core.Keyword(null,"o","o",-1350007228));
var actual__11397__auto___24289 = new cljs.core.Keyword(null,"player","player",-97687400).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.screens.play_spec.state));
if(cljs.core._EQ_.call(null,expected__11396__auto___24288,actual__11397__auto___24289)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__11396__auto___24288;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11364__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11364__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__11397__auto___24289;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11364__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11364__auto__);
}
})()," (using =)"].join('')));
}

cljs.core.reset_BANG_.call(null,tic_tac_toe.screens.play_spec.state,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"board","board",-1907017633),tic_tac_toe.screens.play_spec.board_3,new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"current-screen","current-screen",-1454713691),new cljs.core.Keyword(null,"play","play",-580418022)], null));


var G__24290 = cljs.core.next.call(null,seq__23820_24279__$1);
var G__24291 = null;
var G__24292 = (0);
var G__24293 = (0);
seq__23820_24265 = G__24290;
chunk__23821_24266 = G__24291;
count__23822_24267 = G__24292;
i__23823_24268 = G__24293;
continue;
}
} else {
}
}
break;
}

var G__24294 = cljs.core.next.call(null,seq__23819_24258__$1);
var G__24295 = null;
var G__24296 = (0);
var G__24297 = (0);
seq__23819_24219 = G__24294;
chunk__23824_24220 = G__24295;
count__23825_24221 = G__24296;
i__23826_24222 = G__24297;
continue;
}
} else {
}
}
break;
}

var G__24298 = cljs.core.next.call(null,seq__23818__$1);
var G__24299 = null;
var G__24300 = (0);
var G__24301 = (0);
seq__23818 = G__24298;
chunk__23831 = G__24299;
count__23832 = G__24300;
i__23833 = G__24301;
continue;
}
} else {
return null;
}
}
break;
}
});})(_STAR_parent_description_STAR__orig_val__23720_23980,_STAR_parent_description_STAR__temp_val__23721_23981,description__11259__auto____$1,_STAR_parent_description_STAR__orig_val__23474_23949,_STAR_parent_description_STAR__temp_val__23475_23950,description__11259__auto___23948))
,false),speclj.components.new_characteristic.call(null,"AI is not triggered if game over",((function (_STAR_parent_description_STAR__orig_val__23720_23980,_STAR_parent_description_STAR__temp_val__23721_23981,description__11259__auto____$1,_STAR_parent_description_STAR__orig_val__23474_23949,_STAR_parent_description_STAR__temp_val__23475_23950,description__11259__auto___23948){
return (function (){
cljs.core.swap_BANG_.call(null,tic_tac_toe.screens.play_spec.state,cljs.core.assoc,new cljs.core.Keyword(null,"board","board",-1907017633),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"x","x",2099068185),(3),new cljs.core.Keyword(null,"o","o",-1350007228),new cljs.core.Keyword(null,"o","o",-1350007228),(6),(7),(8),(9)], null),new cljs.core.Keyword(null,"mode","mode",654403691),(2),new cljs.core.Keyword(null,"first-ai-level","first-ai-level",1004633644),(3));

c3kit.wire.spec_helper.click_BANG_.call(null,"#index-2");

var expected__11396__auto__ = new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"o","o",-1350007228),new cljs.core.Keyword(null,"o","o",-1350007228),(6),(7),(8),(9)], null);
var actual__11397__auto__ = new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.screens.play_spec.state));
if(cljs.core._EQ_.call(null,expected__11396__auto__,actual__11397__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__11396__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11364__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11364__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__11397__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11364__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11364__auto__);
}
})()," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__23720_23980,_STAR_parent_description_STAR__temp_val__23721_23981,description__11259__auto____$1,_STAR_parent_description_STAR__orig_val__23474_23949,_STAR_parent_description_STAR__temp_val__23475_23950,description__11259__auto___23948))
,false),speclj.components.new_characteristic.call(null,"AI updates game state",((function (_STAR_parent_description_STAR__orig_val__23720_23980,_STAR_parent_description_STAR__temp_val__23721_23981,description__11259__auto____$1,_STAR_parent_description_STAR__orig_val__23474_23949,_STAR_parent_description_STAR__temp_val__23475_23950,description__11259__auto___23948){
return (function (){
cljs.core.swap_BANG_.call(null,tic_tac_toe.screens.play_spec.state,cljs.core.assoc,new cljs.core.Keyword(null,"board","board",-1907017633),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"x","x",2099068185),(3),new cljs.core.Keyword(null,"o","o",-1350007228),new cljs.core.Keyword(null,"o","o",-1350007228),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"o","o",-1350007228),new cljs.core.Keyword(null,"o","o",-1350007228),(9)], null),new cljs.core.Keyword(null,"mode","mode",654403691),(2),new cljs.core.Keyword(null,"first-ai-level","first-ai-level",1004633644),(3));

c3kit.wire.spec_helper.click_BANG_.call(null,"#index-8");

var expected__11396__auto__ = "O wins!";
var actual__11397__auto__ = new cljs.core.Keyword(null,"game-state","game-state",935682735).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.screens.play_spec.state));
if(cljs.core._EQ_.call(null,expected__11396__auto__,actual__11397__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__11396__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11364__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11364__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__11397__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11364__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11364__auto__);
}
})()," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__23720_23980,_STAR_parent_description_STAR__temp_val__23721_23981,description__11259__auto____$1,_STAR_parent_description_STAR__orig_val__23474_23949,_STAR_parent_description_STAR__temp_val__23475_23950,description__11259__auto___23948))
,false)],null)));
var chunk__23723_23983 = null;
var count__23724_23984 = (0);
var i__23725_23985 = (0);
while(true){
if((i__23725_23985 < count__23724_23984)){
var component__11260__auto___24302 = cljs.core._nth.call(null,chunk__23723_23983,i__23725_23985);
speclj.components.install.call(null,component__11260__auto___24302,description__11259__auto____$1);


var G__24303 = seq__23722_23982;
var G__24304 = chunk__23723_23983;
var G__24305 = count__23724_23984;
var G__24306 = (i__23725_23985 + (1));
seq__23722_23982 = G__24303;
chunk__23723_23983 = G__24304;
count__23724_23984 = G__24305;
i__23725_23985 = G__24306;
continue;
} else {
var temp__5804__auto___24307 = cljs.core.seq.call(null,seq__23722_23982);
if(temp__5804__auto___24307){
var seq__23722_24308__$1 = temp__5804__auto___24307;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23722_24308__$1)){
var c__5525__auto___24309 = cljs.core.chunk_first.call(null,seq__23722_24308__$1);
var G__24310 = cljs.core.chunk_rest.call(null,seq__23722_24308__$1);
var G__24311 = c__5525__auto___24309;
var G__24312 = cljs.core.count.call(null,c__5525__auto___24309);
var G__24313 = (0);
seq__23722_23982 = G__24310;
chunk__23723_23983 = G__24311;
count__23724_23984 = G__24312;
i__23725_23985 = G__24313;
continue;
} else {
var component__11260__auto___24314 = cljs.core.first.call(null,seq__23722_24308__$1);
speclj.components.install.call(null,component__11260__auto___24314,description__11259__auto____$1);


var G__24315 = cljs.core.next.call(null,seq__23722_24308__$1);
var G__24316 = null;
var G__24317 = (0);
var G__24318 = (0);
seq__23722_23982 = G__24315;
chunk__23723_23983 = G__24316;
count__23724_23984 = G__24317;
i__23725_23985 = G__24318;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__23720_23980);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__11259__auto____$1);
}

return description__11259__auto____$1;
})(),(function (){var description__11259__auto____$1 = speclj.components.new_description.call(null,"4x4",false,"tic-tac-toe.screens.play-spec");
var _STAR_parent_description_STAR__orig_val__23846_24319 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__23847_24320 = description__11259__auto____$1;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__23847_24320);

try{var seq__23848_24321 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,9,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_before.call(null,((function (_STAR_parent_description_STAR__orig_val__23846_24319,_STAR_parent_description_STAR__temp_val__23847_24320,description__11259__auto____$1,_STAR_parent_description_STAR__orig_val__23474_23949,_STAR_parent_description_STAR__temp_val__23475_23950,description__11259__auto___23948){
return (function (){
cljs.core.reset_BANG_.call(null,tic_tac_toe.screens.play_spec.state,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"current-screen","current-screen",-1454713691),new cljs.core.Keyword(null,"play","play",-580418022),new cljs.core.Keyword(null,"board","board",-1907017633),tic_tac_toe.screens.play_spec.board_4,new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"mode","mode",654403691),(1),new cljs.core.Keyword(null,"game-state","game-state",935682735),new cljs.core.Keyword(null,"in-progress","in-progress",2126442630)], null));

return c3kit.wire.spec_helper.render.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tic_tac_toe.render_screen.render_screen,tic_tac_toe.screens.play_spec.state], null));
});})(_STAR_parent_description_STAR__orig_val__23846_24319,_STAR_parent_description_STAR__temp_val__23847_24320,description__11259__auto____$1,_STAR_parent_description_STAR__orig_val__23474_23949,_STAR_parent_description_STAR__temp_val__23475_23950,description__11259__auto___23948))
),speclj.components.new_characteristic.call(null,"renders board",((function (_STAR_parent_description_STAR__orig_val__23846_24319,_STAR_parent_description_STAR__temp_val__23847_24320,description__11259__auto____$1,_STAR_parent_description_STAR__orig_val__23474_23949,_STAR_parent_description_STAR__temp_val__23475_23950,description__11259__auto___23948){
return (function (){
var expected__11396__auto___24325 = (16);
var actual__11397__auto___24326 = cljs.core.count.call(null,cljs.core.vec.call(null,c3kit.wire.js.query_selector_all.call(null,".board-square")));
if(cljs.core._EQ_.call(null,expected__11396__auto___24325,actual__11397__auto___24326)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__11396__auto___24325;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11364__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11364__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__11397__auto___24326;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11364__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11364__auto__);
}
})()," (using =)"].join('')));
}

var value__11759__auto___24327 = "#board-wrapper";
var node__11760__auto___24328 = c3kit.wire.spec_helper.select.call(null,value__11759__auto___24327);
if(cljs.core.truth_(node__11760__auto___24328)){
} else {
throw (new speclj.platform.SpecFailure(["Expected selector to find node: ",(function (){var temp__5806__auto__ = value__11759__auto___24327;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11364__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11364__auto__);
}
})()].join('')));
}

var value__11759__auto__ = ".four-grid";
var node__11760__auto__ = c3kit.wire.spec_helper.select.call(null,value__11759__auto__);
if(cljs.core.truth_(node__11760__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected selector to find node: ",(function (){var temp__5806__auto__ = value__11759__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11364__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11364__auto__);
}
})()].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__23846_24319,_STAR_parent_description_STAR__temp_val__23847_24320,description__11259__auto____$1,_STAR_parent_description_STAR__orig_val__23474_23949,_STAR_parent_description_STAR__temp_val__23475_23950,description__11259__auto___23948))
,false),speclj.components.new_characteristic.call(null,"buttons have IDs 0-15",((function (_STAR_parent_description_STAR__orig_val__23846_24319,_STAR_parent_description_STAR__temp_val__23847_24320,description__11259__auto____$1,_STAR_parent_description_STAR__orig_val__23474_23949,_STAR_parent_description_STAR__temp_val__23475_23950,description__11259__auto___23948){
return (function (){
var seq__23900 = cljs.core.seq.call(null,cljs.core.range.call(null,(16)));
var chunk__23901 = null;
var count__23902 = (0);
var i__23903 = (0);
while(true){
if((i__23903 < count__23902)){
var n = cljs.core._nth.call(null,chunk__23901,i__23903);
var value__11759__auto___24329 = ["#index-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join('');
var node__11760__auto___24330 = c3kit.wire.spec_helper.select.call(null,value__11759__auto___24329);
if(cljs.core.truth_(node__11760__auto___24330)){
} else {
throw (new speclj.platform.SpecFailure(["Expected selector to find node: ",(function (){var temp__5806__auto__ = value__11759__auto___24329;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11364__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11364__auto__);
}
})()].join('')));
}


var G__24331 = seq__23900;
var G__24332 = chunk__23901;
var G__24333 = count__23902;
var G__24334 = (i__23903 + (1));
seq__23900 = G__24331;
chunk__23901 = G__24332;
count__23902 = G__24333;
i__23903 = G__24334;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__23900);
if(temp__5804__auto__){
var seq__23900__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23900__$1)){
var c__5525__auto__ = cljs.core.chunk_first.call(null,seq__23900__$1);
var G__24335 = cljs.core.chunk_rest.call(null,seq__23900__$1);
var G__24336 = c__5525__auto__;
var G__24337 = cljs.core.count.call(null,c__5525__auto__);
var G__24338 = (0);
seq__23900 = G__24335;
chunk__23901 = G__24336;
count__23902 = G__24337;
i__23903 = G__24338;
continue;
} else {
var n = cljs.core.first.call(null,seq__23900__$1);
var value__11759__auto___24339 = ["#index-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join('');
var node__11760__auto___24340 = c3kit.wire.spec_helper.select.call(null,value__11759__auto___24339);
if(cljs.core.truth_(node__11760__auto___24340)){
} else {
throw (new speclj.platform.SpecFailure(["Expected selector to find node: ",(function (){var temp__5806__auto__ = value__11759__auto___24339;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11364__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11364__auto__);
}
})()].join('')));
}


var G__24341 = cljs.core.next.call(null,seq__23900__$1);
var G__24342 = null;
var G__24343 = (0);
var G__24344 = (0);
seq__23900 = G__24341;
chunk__23901 = G__24342;
count__23902 = G__24343;
i__23903 = G__24344;
continue;
}
} else {
return null;
}
}
break;
}
});})(_STAR_parent_description_STAR__orig_val__23846_24319,_STAR_parent_description_STAR__temp_val__23847_24320,description__11259__auto____$1,_STAR_parent_description_STAR__orig_val__23474_23949,_STAR_parent_description_STAR__temp_val__23475_23950,description__11259__auto___23948))
,false),speclj.components.new_characteristic.call(null,"clicking button updates board in state",((function (_STAR_parent_description_STAR__orig_val__23846_24319,_STAR_parent_description_STAR__temp_val__23847_24320,description__11259__auto____$1,_STAR_parent_description_STAR__orig_val__23474_23949,_STAR_parent_description_STAR__temp_val__23475_23950,description__11259__auto___23948){
return (function (){
var seq__23904 = cljs.core.seq.call(null,cljs.core.range.call(null,(16)));
var chunk__23905 = null;
var count__23906 = (0);
var i__23907 = (0);
while(true){
if((i__23907 < count__23906)){
var n = cljs.core._nth.call(null,chunk__23905,i__23907);
c3kit.wire.spec_helper.click_BANG_.call(null,["#index-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join(''));

var expected__11396__auto___24345 = cljs.core.assoc.call(null,tic_tac_toe.screens.play_spec.board_4,n,new cljs.core.Keyword(null,"x","x",2099068185));
var actual__11397__auto___24346 = new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.screens.play_spec.state));
if(cljs.core._EQ_.call(null,expected__11396__auto___24345,actual__11397__auto___24346)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__11396__auto___24345;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11364__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11364__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__11397__auto___24346;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11364__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11364__auto__);
}
})()," (using =)"].join('')));
}

cljs.core.swap_BANG_.call(null,tic_tac_toe.screens.play_spec.state,cljs.core.assoc,new cljs.core.Keyword(null,"board","board",-1907017633),tic_tac_toe.screens.play_spec.board_4,new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"x","x",2099068185));


var G__24347 = seq__23904;
var G__24348 = chunk__23905;
var G__24349 = count__23906;
var G__24350 = (i__23907 + (1));
seq__23904 = G__24347;
chunk__23905 = G__24348;
count__23906 = G__24349;
i__23907 = G__24350;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__23904);
if(temp__5804__auto__){
var seq__23904__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23904__$1)){
var c__5525__auto__ = cljs.core.chunk_first.call(null,seq__23904__$1);
var G__24351 = cljs.core.chunk_rest.call(null,seq__23904__$1);
var G__24352 = c__5525__auto__;
var G__24353 = cljs.core.count.call(null,c__5525__auto__);
var G__24354 = (0);
seq__23904 = G__24351;
chunk__23905 = G__24352;
count__23906 = G__24353;
i__23907 = G__24354;
continue;
} else {
var n = cljs.core.first.call(null,seq__23904__$1);
c3kit.wire.spec_helper.click_BANG_.call(null,["#index-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join(''));

var expected__11396__auto___24355 = cljs.core.assoc.call(null,tic_tac_toe.screens.play_spec.board_4,n,new cljs.core.Keyword(null,"x","x",2099068185));
var actual__11397__auto___24356 = new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.screens.play_spec.state));
if(cljs.core._EQ_.call(null,expected__11396__auto___24355,actual__11397__auto___24356)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__11396__auto___24355;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11364__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11364__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__11397__auto___24356;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11364__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11364__auto__);
}
})()," (using =)"].join('')));
}

cljs.core.swap_BANG_.call(null,tic_tac_toe.screens.play_spec.state,cljs.core.assoc,new cljs.core.Keyword(null,"board","board",-1907017633),tic_tac_toe.screens.play_spec.board_4,new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"x","x",2099068185));


var G__24357 = cljs.core.next.call(null,seq__23904__$1);
var G__24358 = null;
var G__24359 = (0);
var G__24360 = (0);
seq__23904 = G__24357;
chunk__23905 = G__24358;
count__23906 = G__24359;
i__23907 = G__24360;
continue;
}
} else {
return null;
}
}
break;
}
});})(_STAR_parent_description_STAR__orig_val__23846_24319,_STAR_parent_description_STAR__temp_val__23847_24320,description__11259__auto____$1,_STAR_parent_description_STAR__orig_val__23474_23949,_STAR_parent_description_STAR__temp_val__23475_23950,description__11259__auto___23948))
,false),speclj.components.new_characteristic.call(null,"clicking button swaps player in state",((function (_STAR_parent_description_STAR__orig_val__23846_24319,_STAR_parent_description_STAR__temp_val__23847_24320,description__11259__auto____$1,_STAR_parent_description_STAR__orig_val__23474_23949,_STAR_parent_description_STAR__temp_val__23475_23950,description__11259__auto___23948){
return (function (){
var seq__23908 = cljs.core.seq.call(null,cljs.core.range.call(null,(16)));
var chunk__23909 = null;
var count__23910 = (0);
var i__23911 = (0);
while(true){
if((i__23911 < count__23910)){
var n = cljs.core._nth.call(null,chunk__23909,i__23911);
c3kit.wire.spec_helper.click_BANG_.call(null,["#index-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join(''));

var expected__11396__auto___24361 = new cljs.core.Keyword(null,"o","o",-1350007228);
var actual__11397__auto___24362 = new cljs.core.Keyword(null,"player","player",-97687400).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.screens.play_spec.state));
if(cljs.core._EQ_.call(null,expected__11396__auto___24361,actual__11397__auto___24362)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__11396__auto___24361;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11364__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11364__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__11397__auto___24362;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11364__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11364__auto__);
}
})()," (using =)"].join('')));
}

cljs.core.swap_BANG_.call(null,tic_tac_toe.screens.play_spec.state,cljs.core.assoc,new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"board","board",-1907017633),tic_tac_toe.screens.play_spec.board_4);


var G__24363 = seq__23908;
var G__24364 = chunk__23909;
var G__24365 = count__23910;
var G__24366 = (i__23911 + (1));
seq__23908 = G__24363;
chunk__23909 = G__24364;
count__23910 = G__24365;
i__23911 = G__24366;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__23908);
if(temp__5804__auto__){
var seq__23908__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23908__$1)){
var c__5525__auto__ = cljs.core.chunk_first.call(null,seq__23908__$1);
var G__24367 = cljs.core.chunk_rest.call(null,seq__23908__$1);
var G__24368 = c__5525__auto__;
var G__24369 = cljs.core.count.call(null,c__5525__auto__);
var G__24370 = (0);
seq__23908 = G__24367;
chunk__23909 = G__24368;
count__23910 = G__24369;
i__23911 = G__24370;
continue;
} else {
var n = cljs.core.first.call(null,seq__23908__$1);
c3kit.wire.spec_helper.click_BANG_.call(null,["#index-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join(''));

var expected__11396__auto___24371 = new cljs.core.Keyword(null,"o","o",-1350007228);
var actual__11397__auto___24372 = new cljs.core.Keyword(null,"player","player",-97687400).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.screens.play_spec.state));
if(cljs.core._EQ_.call(null,expected__11396__auto___24371,actual__11397__auto___24372)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__11396__auto___24371;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11364__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11364__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__11397__auto___24372;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11364__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11364__auto__);
}
})()," (using =)"].join('')));
}

cljs.core.swap_BANG_.call(null,tic_tac_toe.screens.play_spec.state,cljs.core.assoc,new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"board","board",-1907017633),tic_tac_toe.screens.play_spec.board_4);


var G__24373 = cljs.core.next.call(null,seq__23908__$1);
var G__24374 = null;
var G__24375 = (0);
var G__24376 = (0);
seq__23908 = G__24373;
chunk__23909 = G__24374;
count__23910 = G__24375;
i__23911 = G__24376;
continue;
}
} else {
return null;
}
}
break;
}
});})(_STAR_parent_description_STAR__orig_val__23846_24319,_STAR_parent_description_STAR__temp_val__23847_24320,description__11259__auto____$1,_STAR_parent_description_STAR__orig_val__23474_23949,_STAR_parent_description_STAR__temp_val__23475_23950,description__11259__auto___23948))
,false),speclj.components.new_characteristic.call(null,"clicking button adds token to button HTML",((function (_STAR_parent_description_STAR__orig_val__23846_24319,_STAR_parent_description_STAR__temp_val__23847_24320,description__11259__auto____$1,_STAR_parent_description_STAR__orig_val__23474_23949,_STAR_parent_description_STAR__temp_val__23475_23950,description__11259__auto___23948){
return (function (){
var seq__23912 = cljs.core.seq.call(null,cljs.core.range.call(null,(16)));
var chunk__23913 = null;
var count__23914 = (0);
var i__23915 = (0);
while(true){
if((i__23915 < count__23914)){
var n = cljs.core._nth.call(null,chunk__23913,i__23915);
c3kit.wire.spec_helper.click_BANG_.call(null,["#index-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join(''));

var expected__11396__auto___24377 = "X";
var actual__11397__auto___24378 = c3kit.wire.spec_helper.text.call(null,["#index-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join(''));
if(cljs.core._EQ_.call(null,expected__11396__auto___24377,actual__11397__auto___24378)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__11396__auto___24377;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11364__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11364__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__11397__auto___24378;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11364__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11364__auto__);
}
})()," (using =)"].join('')));
}

cljs.core.reset_BANG_.call(null,tic_tac_toe.screens.play_spec.state,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"board","board",-1907017633),tic_tac_toe.screens.play_spec.board_4,new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"current-screen","current-screen",-1454713691),new cljs.core.Keyword(null,"play","play",-580418022),new cljs.core.Keyword(null,"mode","mode",654403691),(1)], null));


var G__24379 = seq__23912;
var G__24380 = chunk__23913;
var G__24381 = count__23914;
var G__24382 = (i__23915 + (1));
seq__23912 = G__24379;
chunk__23913 = G__24380;
count__23914 = G__24381;
i__23915 = G__24382;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__23912);
if(temp__5804__auto__){
var seq__23912__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23912__$1)){
var c__5525__auto__ = cljs.core.chunk_first.call(null,seq__23912__$1);
var G__24383 = cljs.core.chunk_rest.call(null,seq__23912__$1);
var G__24384 = c__5525__auto__;
var G__24385 = cljs.core.count.call(null,c__5525__auto__);
var G__24386 = (0);
seq__23912 = G__24383;
chunk__23913 = G__24384;
count__23914 = G__24385;
i__23915 = G__24386;
continue;
} else {
var n = cljs.core.first.call(null,seq__23912__$1);
c3kit.wire.spec_helper.click_BANG_.call(null,["#index-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join(''));

var expected__11396__auto___24387 = "X";
var actual__11397__auto___24388 = c3kit.wire.spec_helper.text.call(null,["#index-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join(''));
if(cljs.core._EQ_.call(null,expected__11396__auto___24387,actual__11397__auto___24388)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__11396__auto___24387;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11364__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11364__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__11397__auto___24388;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11364__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11364__auto__);
}
})()," (using =)"].join('')));
}

cljs.core.reset_BANG_.call(null,tic_tac_toe.screens.play_spec.state,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"board","board",-1907017633),tic_tac_toe.screens.play_spec.board_4,new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"current-screen","current-screen",-1454713691),new cljs.core.Keyword(null,"play","play",-580418022),new cljs.core.Keyword(null,"mode","mode",654403691),(1)], null));


var G__24389 = cljs.core.next.call(null,seq__23912__$1);
var G__24390 = null;
var G__24391 = (0);
var G__24392 = (0);
seq__23912 = G__24389;
chunk__23913 = G__24390;
count__23914 = G__24391;
i__23915 = G__24392;
continue;
}
} else {
return null;
}
}
break;
}
});})(_STAR_parent_description_STAR__orig_val__23846_24319,_STAR_parent_description_STAR__temp_val__23847_24320,description__11259__auto____$1,_STAR_parent_description_STAR__orig_val__23474_23949,_STAR_parent_description_STAR__temp_val__23475_23950,description__11259__auto___23948))
,false),speclj.components.new_characteristic.call(null,"clicking button disables button",((function (_STAR_parent_description_STAR__orig_val__23846_24319,_STAR_parent_description_STAR__temp_val__23847_24320,description__11259__auto____$1,_STAR_parent_description_STAR__orig_val__23474_23949,_STAR_parent_description_STAR__temp_val__23475_23950,description__11259__auto___23948){
return (function (){
var seq__23916 = cljs.core.seq.call(null,cljs.core.range.call(null,(16)));
var chunk__23917 = null;
var count__23918 = (0);
var i__23919 = (0);
while(true){
if((i__23919 < count__23918)){
var n = cljs.core._nth.call(null,chunk__23917,i__23919);
c3kit.wire.spec_helper.click_BANG_.call(null,["#index-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join(''));

var expected__11396__auto___24393 = true;
var actual__11397__auto___24394 = c3kit.wire.spec_helper.disabled_QMARK_.call(null,["#index-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join(''));
if(cljs.core._EQ_.call(null,expected__11396__auto___24393,actual__11397__auto___24394)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__11396__auto___24393;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11364__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11364__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__11397__auto___24394;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11364__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11364__auto__);
}
})()," (using =)"].join('')));
}

cljs.core.reset_BANG_.call(null,tic_tac_toe.screens.play_spec.state,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"board","board",-1907017633),tic_tac_toe.screens.play_spec.board_4,new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"current-screen","current-screen",-1454713691),new cljs.core.Keyword(null,"play","play",-580418022),new cljs.core.Keyword(null,"mode","mode",654403691),(1)], null));


var G__24395 = seq__23916;
var G__24396 = chunk__23917;
var G__24397 = count__23918;
var G__24398 = (i__23919 + (1));
seq__23916 = G__24395;
chunk__23917 = G__24396;
count__23918 = G__24397;
i__23919 = G__24398;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__23916);
if(temp__5804__auto__){
var seq__23916__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23916__$1)){
var c__5525__auto__ = cljs.core.chunk_first.call(null,seq__23916__$1);
var G__24399 = cljs.core.chunk_rest.call(null,seq__23916__$1);
var G__24400 = c__5525__auto__;
var G__24401 = cljs.core.count.call(null,c__5525__auto__);
var G__24402 = (0);
seq__23916 = G__24399;
chunk__23917 = G__24400;
count__23918 = G__24401;
i__23919 = G__24402;
continue;
} else {
var n = cljs.core.first.call(null,seq__23916__$1);
c3kit.wire.spec_helper.click_BANG_.call(null,["#index-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join(''));

var expected__11396__auto___24403 = true;
var actual__11397__auto___24404 = c3kit.wire.spec_helper.disabled_QMARK_.call(null,["#index-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join(''));
if(cljs.core._EQ_.call(null,expected__11396__auto___24403,actual__11397__auto___24404)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__11396__auto___24403;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11364__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11364__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__11397__auto___24404;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11364__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11364__auto__);
}
})()," (using =)"].join('')));
}

cljs.core.reset_BANG_.call(null,tic_tac_toe.screens.play_spec.state,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"board","board",-1907017633),tic_tac_toe.screens.play_spec.board_4,new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"current-screen","current-screen",-1454713691),new cljs.core.Keyword(null,"play","play",-580418022),new cljs.core.Keyword(null,"mode","mode",654403691),(1)], null));


var G__24405 = cljs.core.next.call(null,seq__23916__$1);
var G__24406 = null;
var G__24407 = (0);
var G__24408 = (0);
seq__23916 = G__24405;
chunk__23917 = G__24406;
count__23918 = G__24407;
i__23919 = G__24408;
continue;
}
} else {
return null;
}
}
break;
}
});})(_STAR_parent_description_STAR__orig_val__23846_24319,_STAR_parent_description_STAR__temp_val__23847_24320,description__11259__auto____$1,_STAR_parent_description_STAR__orig_val__23474_23949,_STAR_parent_description_STAR__temp_val__23475_23950,description__11259__auto___23948))
,false),speclj.components.new_characteristic.call(null,"clicking button triggers AI if mode 2 or 3",((function (_STAR_parent_description_STAR__orig_val__23846_24319,_STAR_parent_description_STAR__temp_val__23847_24320,description__11259__auto____$1,_STAR_parent_description_STAR__orig_val__23474_23949,_STAR_parent_description_STAR__temp_val__23475_23950,description__11259__auto___23948){
return (function (){
var seq__23920 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(3)], null));
var chunk__23933 = null;
var count__23934 = (0);
var i__23935 = (0);
while(true){
if((i__23935 < count__23934)){
var ai = cljs.core._nth.call(null,chunk__23933,i__23935);
var seq__23936_24409 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(3)], null));
var chunk__23941_24410 = null;
var count__23942_24411 = (0);
var i__23943_24412 = (0);
while(true){
if((i__23943_24412 < count__23942_24411)){
var mode_24413 = cljs.core._nth.call(null,chunk__23941_24410,i__23943_24412);
var seq__23944_24414 = cljs.core.seq.call(null,cljs.core.range.call(null,(16)));
var chunk__23945_24415 = null;
var count__23946_24416 = (0);
var i__23947_24417 = (0);
while(true){
if((i__23947_24417 < count__23946_24416)){
var n_24418 = cljs.core._nth.call(null,chunk__23945_24415,i__23947_24417);
cljs.core.swap_BANG_.call(null,tic_tac_toe.screens.play_spec.state,cljs.core.assoc,new cljs.core.Keyword(null,"mode","mode",654403691),mode_24413,new cljs.core.Keyword(null,"first-ai-level","first-ai-level",1004633644),ai,new cljs.core.Keyword(null,"player","player",-97687400),((cljs.core._EQ_.call(null,(2),mode_24413))?new cljs.core.Keyword(null,"x","x",2099068185):new cljs.core.Keyword(null,"o","o",-1350007228)),new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"gui","gui",604532813));

c3kit.wire.spec_helper.render.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tic_tac_toe.render_screen.render_screen,tic_tac_toe.screens.play_spec.state], null));

c3kit.wire.spec_helper.click_BANG_.call(null,["#index-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n_24418)].join(''));

var expected__11420__auto___24419 = cljs.core.assoc.call(null,tic_tac_toe.screens.play_spec.board_4,n_24418,new cljs.core.Keyword(null,"x","x",2099068185));
var actual__11421__auto___24420 = new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.screens.play_spec.state));
if(cljs.core._EQ_.call(null,expected__11420__auto___24419,actual__11421__auto___24420)){
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__11420__auto___24419;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11364__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11364__auto__);
}
})(),speclj.platform.endl,"not to =: ",(function (){var temp__5806__auto__ = actual__11421__auto___24420;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11364__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11364__auto__);
}
})()].join('')));
} else {
}

var expected__11396__auto___24421 = ((cljs.core._EQ_.call(null,(2),mode_24413))?new cljs.core.Keyword(null,"x","x",2099068185):new cljs.core.Keyword(null,"o","o",-1350007228));
var actual__11397__auto___24422 = new cljs.core.Keyword(null,"player","player",-97687400).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.screens.play_spec.state));
if(cljs.core._EQ_.call(null,expected__11396__auto___24421,actual__11397__auto___24422)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__11396__auto___24421;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11364__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11364__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__11397__auto___24422;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11364__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11364__auto__);
}
})()," (using =)"].join('')));
}

cljs.core.reset_BANG_.call(null,tic_tac_toe.screens.play_spec.state,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"board","board",-1907017633),tic_tac_toe.screens.play_spec.board_4,new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"current-screen","current-screen",-1454713691),new cljs.core.Keyword(null,"play","play",-580418022)], null));


var G__24423 = seq__23944_24414;
var G__24424 = chunk__23945_24415;
var G__24425 = count__23946_24416;
var G__24426 = (i__23947_24417 + (1));
seq__23944_24414 = G__24423;
chunk__23945_24415 = G__24424;
count__23946_24416 = G__24425;
i__23947_24417 = G__24426;
continue;
} else {
var temp__5804__auto___24427 = cljs.core.seq.call(null,seq__23944_24414);
if(temp__5804__auto___24427){
var seq__23944_24428__$1 = temp__5804__auto___24427;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23944_24428__$1)){
var c__5525__auto___24429 = cljs.core.chunk_first.call(null,seq__23944_24428__$1);
var G__24430 = cljs.core.chunk_rest.call(null,seq__23944_24428__$1);
var G__24431 = c__5525__auto___24429;
var G__24432 = cljs.core.count.call(null,c__5525__auto___24429);
var G__24433 = (0);
seq__23944_24414 = G__24430;
chunk__23945_24415 = G__24431;
count__23946_24416 = G__24432;
i__23947_24417 = G__24433;
continue;
} else {
var n_24434 = cljs.core.first.call(null,seq__23944_24428__$1);
cljs.core.swap_BANG_.call(null,tic_tac_toe.screens.play_spec.state,cljs.core.assoc,new cljs.core.Keyword(null,"mode","mode",654403691),mode_24413,new cljs.core.Keyword(null,"first-ai-level","first-ai-level",1004633644),ai,new cljs.core.Keyword(null,"player","player",-97687400),((cljs.core._EQ_.call(null,(2),mode_24413))?new cljs.core.Keyword(null,"x","x",2099068185):new cljs.core.Keyword(null,"o","o",-1350007228)),new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"gui","gui",604532813));

c3kit.wire.spec_helper.render.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tic_tac_toe.render_screen.render_screen,tic_tac_toe.screens.play_spec.state], null));

c3kit.wire.spec_helper.click_BANG_.call(null,["#index-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n_24434)].join(''));

var expected__11420__auto___24435 = cljs.core.assoc.call(null,tic_tac_toe.screens.play_spec.board_4,n_24434,new cljs.core.Keyword(null,"x","x",2099068185));
var actual__11421__auto___24436 = new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.screens.play_spec.state));
if(cljs.core._EQ_.call(null,expected__11420__auto___24435,actual__11421__auto___24436)){
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__11420__auto___24435;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11364__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11364__auto__);
}
})(),speclj.platform.endl,"not to =: ",(function (){var temp__5806__auto__ = actual__11421__auto___24436;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11364__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11364__auto__);
}
})()].join('')));
} else {
}

var expected__11396__auto___24437 = ((cljs.core._EQ_.call(null,(2),mode_24413))?new cljs.core.Keyword(null,"x","x",2099068185):new cljs.core.Keyword(null,"o","o",-1350007228));
var actual__11397__auto___24438 = new cljs.core.Keyword(null,"player","player",-97687400).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.screens.play_spec.state));
if(cljs.core._EQ_.call(null,expected__11396__auto___24437,actual__11397__auto___24438)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__11396__auto___24437;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11364__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11364__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__11397__auto___24438;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11364__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11364__auto__);
}
})()," (using =)"].join('')));
}

cljs.core.reset_BANG_.call(null,tic_tac_toe.screens.play_spec.state,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"board","board",-1907017633),tic_tac_toe.screens.play_spec.board_4,new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"current-screen","current-screen",-1454713691),new cljs.core.Keyword(null,"play","play",-580418022)], null));


var G__24439 = cljs.core.next.call(null,seq__23944_24428__$1);
var G__24440 = null;
var G__24441 = (0);
var G__24442 = (0);
seq__23944_24414 = G__24439;
chunk__23945_24415 = G__24440;
count__23946_24416 = G__24441;
i__23947_24417 = G__24442;
continue;
}
} else {
}
}
break;
}

var G__24443 = seq__23936_24409;
var G__24444 = chunk__23941_24410;
var G__24445 = count__23942_24411;
var G__24446 = (i__23943_24412 + (1));
seq__23936_24409 = G__24443;
chunk__23941_24410 = G__24444;
count__23942_24411 = G__24445;
i__23943_24412 = G__24446;
continue;
} else {
var temp__5804__auto___24447 = cljs.core.seq.call(null,seq__23936_24409);
if(temp__5804__auto___24447){
var seq__23936_24448__$1 = temp__5804__auto___24447;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23936_24448__$1)){
var c__5525__auto___24449 = cljs.core.chunk_first.call(null,seq__23936_24448__$1);
var G__24450 = cljs.core.chunk_rest.call(null,seq__23936_24448__$1);
var G__24451 = c__5525__auto___24449;
var G__24452 = cljs.core.count.call(null,c__5525__auto___24449);
var G__24453 = (0);
seq__23936_24409 = G__24450;
chunk__23941_24410 = G__24451;
count__23942_24411 = G__24452;
i__23943_24412 = G__24453;
continue;
} else {
var mode_24454 = cljs.core.first.call(null,seq__23936_24448__$1);
var seq__23937_24455 = cljs.core.seq.call(null,cljs.core.range.call(null,(16)));
var chunk__23938_24456 = null;
var count__23939_24457 = (0);
var i__23940_24458 = (0);
while(true){
if((i__23940_24458 < count__23939_24457)){
var n_24459 = cljs.core._nth.call(null,chunk__23938_24456,i__23940_24458);
cljs.core.swap_BANG_.call(null,tic_tac_toe.screens.play_spec.state,cljs.core.assoc,new cljs.core.Keyword(null,"mode","mode",654403691),mode_24454,new cljs.core.Keyword(null,"first-ai-level","first-ai-level",1004633644),ai,new cljs.core.Keyword(null,"player","player",-97687400),((cljs.core._EQ_.call(null,(2),mode_24454))?new cljs.core.Keyword(null,"x","x",2099068185):new cljs.core.Keyword(null,"o","o",-1350007228)),new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"gui","gui",604532813));

c3kit.wire.spec_helper.render.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tic_tac_toe.render_screen.render_screen,tic_tac_toe.screens.play_spec.state], null));

c3kit.wire.spec_helper.click_BANG_.call(null,["#index-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n_24459)].join(''));

var expected__11420__auto___24460 = cljs.core.assoc.call(null,tic_tac_toe.screens.play_spec.board_4,n_24459,new cljs.core.Keyword(null,"x","x",2099068185));
var actual__11421__auto___24461 = new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.screens.play_spec.state));
if(cljs.core._EQ_.call(null,expected__11420__auto___24460,actual__11421__auto___24461)){
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__11420__auto___24460;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11364__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11364__auto__);
}
})(),speclj.platform.endl,"not to =: ",(function (){var temp__5806__auto__ = actual__11421__auto___24461;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11364__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11364__auto__);
}
})()].join('')));
} else {
}

var expected__11396__auto___24462 = ((cljs.core._EQ_.call(null,(2),mode_24454))?new cljs.core.Keyword(null,"x","x",2099068185):new cljs.core.Keyword(null,"o","o",-1350007228));
var actual__11397__auto___24463 = new cljs.core.Keyword(null,"player","player",-97687400).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.screens.play_spec.state));
if(cljs.core._EQ_.call(null,expected__11396__auto___24462,actual__11397__auto___24463)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__11396__auto___24462;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11364__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11364__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__11397__auto___24463;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11364__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11364__auto__);
}
})()," (using =)"].join('')));
}

cljs.core.reset_BANG_.call(null,tic_tac_toe.screens.play_spec.state,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"board","board",-1907017633),tic_tac_toe.screens.play_spec.board_4,new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"current-screen","current-screen",-1454713691),new cljs.core.Keyword(null,"play","play",-580418022)], null));


var G__24464 = seq__23937_24455;
var G__24465 = chunk__23938_24456;
var G__24466 = count__23939_24457;
var G__24467 = (i__23940_24458 + (1));
seq__23937_24455 = G__24464;
chunk__23938_24456 = G__24465;
count__23939_24457 = G__24466;
i__23940_24458 = G__24467;
continue;
} else {
var temp__5804__auto___24468__$1 = cljs.core.seq.call(null,seq__23937_24455);
if(temp__5804__auto___24468__$1){
var seq__23937_24469__$1 = temp__5804__auto___24468__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23937_24469__$1)){
var c__5525__auto___24470 = cljs.core.chunk_first.call(null,seq__23937_24469__$1);
var G__24471 = cljs.core.chunk_rest.call(null,seq__23937_24469__$1);
var G__24472 = c__5525__auto___24470;
var G__24473 = cljs.core.count.call(null,c__5525__auto___24470);
var G__24474 = (0);
seq__23937_24455 = G__24471;
chunk__23938_24456 = G__24472;
count__23939_24457 = G__24473;
i__23940_24458 = G__24474;
continue;
} else {
var n_24475 = cljs.core.first.call(null,seq__23937_24469__$1);
cljs.core.swap_BANG_.call(null,tic_tac_toe.screens.play_spec.state,cljs.core.assoc,new cljs.core.Keyword(null,"mode","mode",654403691),mode_24454,new cljs.core.Keyword(null,"first-ai-level","first-ai-level",1004633644),ai,new cljs.core.Keyword(null,"player","player",-97687400),((cljs.core._EQ_.call(null,(2),mode_24454))?new cljs.core.Keyword(null,"x","x",2099068185):new cljs.core.Keyword(null,"o","o",-1350007228)),new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"gui","gui",604532813));

c3kit.wire.spec_helper.render.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tic_tac_toe.render_screen.render_screen,tic_tac_toe.screens.play_spec.state], null));

c3kit.wire.spec_helper.click_BANG_.call(null,["#index-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n_24475)].join(''));

var expected__11420__auto___24476 = cljs.core.assoc.call(null,tic_tac_toe.screens.play_spec.board_4,n_24475,new cljs.core.Keyword(null,"x","x",2099068185));
var actual__11421__auto___24477 = new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.screens.play_spec.state));
if(cljs.core._EQ_.call(null,expected__11420__auto___24476,actual__11421__auto___24477)){
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__11420__auto___24476;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11364__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11364__auto__);
}
})(),speclj.platform.endl,"not to =: ",(function (){var temp__5806__auto__ = actual__11421__auto___24477;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11364__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11364__auto__);
}
})()].join('')));
} else {
}

var expected__11396__auto___24478 = ((cljs.core._EQ_.call(null,(2),mode_24454))?new cljs.core.Keyword(null,"x","x",2099068185):new cljs.core.Keyword(null,"o","o",-1350007228));
var actual__11397__auto___24479 = new cljs.core.Keyword(null,"player","player",-97687400).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.screens.play_spec.state));
if(cljs.core._EQ_.call(null,expected__11396__auto___24478,actual__11397__auto___24479)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__11396__auto___24478;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11364__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11364__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__11397__auto___24479;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11364__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11364__auto__);
}
})()," (using =)"].join('')));
}

cljs.core.reset_BANG_.call(null,tic_tac_toe.screens.play_spec.state,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"board","board",-1907017633),tic_tac_toe.screens.play_spec.board_4,new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"current-screen","current-screen",-1454713691),new cljs.core.Keyword(null,"play","play",-580418022)], null));


var G__24480 = cljs.core.next.call(null,seq__23937_24469__$1);
var G__24481 = null;
var G__24482 = (0);
var G__24483 = (0);
seq__23937_24455 = G__24480;
chunk__23938_24456 = G__24481;
count__23939_24457 = G__24482;
i__23940_24458 = G__24483;
continue;
}
} else {
}
}
break;
}

var G__24484 = cljs.core.next.call(null,seq__23936_24448__$1);
var G__24485 = null;
var G__24486 = (0);
var G__24487 = (0);
seq__23936_24409 = G__24484;
chunk__23941_24410 = G__24485;
count__23942_24411 = G__24486;
i__23943_24412 = G__24487;
continue;
}
} else {
}
}
break;
}

var G__24488 = seq__23920;
var G__24489 = chunk__23933;
var G__24490 = count__23934;
var G__24491 = (i__23935 + (1));
seq__23920 = G__24488;
chunk__23933 = G__24489;
count__23934 = G__24490;
i__23935 = G__24491;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__23920);
if(temp__5804__auto__){
var seq__23920__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23920__$1)){
var c__5525__auto__ = cljs.core.chunk_first.call(null,seq__23920__$1);
var G__24492 = cljs.core.chunk_rest.call(null,seq__23920__$1);
var G__24493 = c__5525__auto__;
var G__24494 = cljs.core.count.call(null,c__5525__auto__);
var G__24495 = (0);
seq__23920 = G__24492;
chunk__23933 = G__24493;
count__23934 = G__24494;
i__23935 = G__24495;
continue;
} else {
var ai = cljs.core.first.call(null,seq__23920__$1);
var seq__23921_24496 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(3)], null));
var chunk__23926_24497 = null;
var count__23927_24498 = (0);
var i__23928_24499 = (0);
while(true){
if((i__23928_24499 < count__23927_24498)){
var mode_24500 = cljs.core._nth.call(null,chunk__23926_24497,i__23928_24499);
var seq__23929_24501 = cljs.core.seq.call(null,cljs.core.range.call(null,(16)));
var chunk__23930_24502 = null;
var count__23931_24503 = (0);
var i__23932_24504 = (0);
while(true){
if((i__23932_24504 < count__23931_24503)){
var n_24505 = cljs.core._nth.call(null,chunk__23930_24502,i__23932_24504);
cljs.core.swap_BANG_.call(null,tic_tac_toe.screens.play_spec.state,cljs.core.assoc,new cljs.core.Keyword(null,"mode","mode",654403691),mode_24500,new cljs.core.Keyword(null,"first-ai-level","first-ai-level",1004633644),ai,new cljs.core.Keyword(null,"player","player",-97687400),((cljs.core._EQ_.call(null,(2),mode_24500))?new cljs.core.Keyword(null,"x","x",2099068185):new cljs.core.Keyword(null,"o","o",-1350007228)),new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"gui","gui",604532813));

c3kit.wire.spec_helper.render.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tic_tac_toe.render_screen.render_screen,tic_tac_toe.screens.play_spec.state], null));

c3kit.wire.spec_helper.click_BANG_.call(null,["#index-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n_24505)].join(''));

var expected__11420__auto___24506 = cljs.core.assoc.call(null,tic_tac_toe.screens.play_spec.board_4,n_24505,new cljs.core.Keyword(null,"x","x",2099068185));
var actual__11421__auto___24507 = new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.screens.play_spec.state));
if(cljs.core._EQ_.call(null,expected__11420__auto___24506,actual__11421__auto___24507)){
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__11420__auto___24506;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11364__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11364__auto__);
}
})(),speclj.platform.endl,"not to =: ",(function (){var temp__5806__auto__ = actual__11421__auto___24507;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11364__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11364__auto__);
}
})()].join('')));
} else {
}

var expected__11396__auto___24508 = ((cljs.core._EQ_.call(null,(2),mode_24500))?new cljs.core.Keyword(null,"x","x",2099068185):new cljs.core.Keyword(null,"o","o",-1350007228));
var actual__11397__auto___24509 = new cljs.core.Keyword(null,"player","player",-97687400).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.screens.play_spec.state));
if(cljs.core._EQ_.call(null,expected__11396__auto___24508,actual__11397__auto___24509)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__11396__auto___24508;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11364__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11364__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__11397__auto___24509;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11364__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11364__auto__);
}
})()," (using =)"].join('')));
}

cljs.core.reset_BANG_.call(null,tic_tac_toe.screens.play_spec.state,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"board","board",-1907017633),tic_tac_toe.screens.play_spec.board_4,new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"current-screen","current-screen",-1454713691),new cljs.core.Keyword(null,"play","play",-580418022)], null));


var G__24510 = seq__23929_24501;
var G__24511 = chunk__23930_24502;
var G__24512 = count__23931_24503;
var G__24513 = (i__23932_24504 + (1));
seq__23929_24501 = G__24510;
chunk__23930_24502 = G__24511;
count__23931_24503 = G__24512;
i__23932_24504 = G__24513;
continue;
} else {
var temp__5804__auto___24514__$1 = cljs.core.seq.call(null,seq__23929_24501);
if(temp__5804__auto___24514__$1){
var seq__23929_24515__$1 = temp__5804__auto___24514__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23929_24515__$1)){
var c__5525__auto___24516 = cljs.core.chunk_first.call(null,seq__23929_24515__$1);
var G__24517 = cljs.core.chunk_rest.call(null,seq__23929_24515__$1);
var G__24518 = c__5525__auto___24516;
var G__24519 = cljs.core.count.call(null,c__5525__auto___24516);
var G__24520 = (0);
seq__23929_24501 = G__24517;
chunk__23930_24502 = G__24518;
count__23931_24503 = G__24519;
i__23932_24504 = G__24520;
continue;
} else {
var n_24521 = cljs.core.first.call(null,seq__23929_24515__$1);
cljs.core.swap_BANG_.call(null,tic_tac_toe.screens.play_spec.state,cljs.core.assoc,new cljs.core.Keyword(null,"mode","mode",654403691),mode_24500,new cljs.core.Keyword(null,"first-ai-level","first-ai-level",1004633644),ai,new cljs.core.Keyword(null,"player","player",-97687400),((cljs.core._EQ_.call(null,(2),mode_24500))?new cljs.core.Keyword(null,"x","x",2099068185):new cljs.core.Keyword(null,"o","o",-1350007228)),new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"gui","gui",604532813));

c3kit.wire.spec_helper.render.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tic_tac_toe.render_screen.render_screen,tic_tac_toe.screens.play_spec.state], null));

c3kit.wire.spec_helper.click_BANG_.call(null,["#index-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n_24521)].join(''));

var expected__11420__auto___24522 = cljs.core.assoc.call(null,tic_tac_toe.screens.play_spec.board_4,n_24521,new cljs.core.Keyword(null,"x","x",2099068185));
var actual__11421__auto___24523 = new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.screens.play_spec.state));
if(cljs.core._EQ_.call(null,expected__11420__auto___24522,actual__11421__auto___24523)){
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__11420__auto___24522;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11364__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11364__auto__);
}
})(),speclj.platform.endl,"not to =: ",(function (){var temp__5806__auto__ = actual__11421__auto___24523;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11364__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11364__auto__);
}
})()].join('')));
} else {
}

var expected__11396__auto___24524 = ((cljs.core._EQ_.call(null,(2),mode_24500))?new cljs.core.Keyword(null,"x","x",2099068185):new cljs.core.Keyword(null,"o","o",-1350007228));
var actual__11397__auto___24525 = new cljs.core.Keyword(null,"player","player",-97687400).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.screens.play_spec.state));
if(cljs.core._EQ_.call(null,expected__11396__auto___24524,actual__11397__auto___24525)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__11396__auto___24524;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11364__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11364__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__11397__auto___24525;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11364__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11364__auto__);
}
})()," (using =)"].join('')));
}

cljs.core.reset_BANG_.call(null,tic_tac_toe.screens.play_spec.state,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"board","board",-1907017633),tic_tac_toe.screens.play_spec.board_4,new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"current-screen","current-screen",-1454713691),new cljs.core.Keyword(null,"play","play",-580418022)], null));


var G__24526 = cljs.core.next.call(null,seq__23929_24515__$1);
var G__24527 = null;
var G__24528 = (0);
var G__24529 = (0);
seq__23929_24501 = G__24526;
chunk__23930_24502 = G__24527;
count__23931_24503 = G__24528;
i__23932_24504 = G__24529;
continue;
}
} else {
}
}
break;
}

var G__24530 = seq__23921_24496;
var G__24531 = chunk__23926_24497;
var G__24532 = count__23927_24498;
var G__24533 = (i__23928_24499 + (1));
seq__23921_24496 = G__24530;
chunk__23926_24497 = G__24531;
count__23927_24498 = G__24532;
i__23928_24499 = G__24533;
continue;
} else {
var temp__5804__auto___24534__$1 = cljs.core.seq.call(null,seq__23921_24496);
if(temp__5804__auto___24534__$1){
var seq__23921_24535__$1 = temp__5804__auto___24534__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23921_24535__$1)){
var c__5525__auto___24536 = cljs.core.chunk_first.call(null,seq__23921_24535__$1);
var G__24537 = cljs.core.chunk_rest.call(null,seq__23921_24535__$1);
var G__24538 = c__5525__auto___24536;
var G__24539 = cljs.core.count.call(null,c__5525__auto___24536);
var G__24540 = (0);
seq__23921_24496 = G__24537;
chunk__23926_24497 = G__24538;
count__23927_24498 = G__24539;
i__23928_24499 = G__24540;
continue;
} else {
var mode_24541 = cljs.core.first.call(null,seq__23921_24535__$1);
var seq__23922_24542 = cljs.core.seq.call(null,cljs.core.range.call(null,(16)));
var chunk__23923_24543 = null;
var count__23924_24544 = (0);
var i__23925_24545 = (0);
while(true){
if((i__23925_24545 < count__23924_24544)){
var n_24546 = cljs.core._nth.call(null,chunk__23923_24543,i__23925_24545);
cljs.core.swap_BANG_.call(null,tic_tac_toe.screens.play_spec.state,cljs.core.assoc,new cljs.core.Keyword(null,"mode","mode",654403691),mode_24541,new cljs.core.Keyword(null,"first-ai-level","first-ai-level",1004633644),ai,new cljs.core.Keyword(null,"player","player",-97687400),((cljs.core._EQ_.call(null,(2),mode_24541))?new cljs.core.Keyword(null,"x","x",2099068185):new cljs.core.Keyword(null,"o","o",-1350007228)),new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"gui","gui",604532813));

c3kit.wire.spec_helper.render.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tic_tac_toe.render_screen.render_screen,tic_tac_toe.screens.play_spec.state], null));

c3kit.wire.spec_helper.click_BANG_.call(null,["#index-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n_24546)].join(''));

var expected__11420__auto___24547 = cljs.core.assoc.call(null,tic_tac_toe.screens.play_spec.board_4,n_24546,new cljs.core.Keyword(null,"x","x",2099068185));
var actual__11421__auto___24548 = new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.screens.play_spec.state));
if(cljs.core._EQ_.call(null,expected__11420__auto___24547,actual__11421__auto___24548)){
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__11420__auto___24547;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11364__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11364__auto__);
}
})(),speclj.platform.endl,"not to =: ",(function (){var temp__5806__auto__ = actual__11421__auto___24548;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11364__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11364__auto__);
}
})()].join('')));
} else {
}

var expected__11396__auto___24549 = ((cljs.core._EQ_.call(null,(2),mode_24541))?new cljs.core.Keyword(null,"x","x",2099068185):new cljs.core.Keyword(null,"o","o",-1350007228));
var actual__11397__auto___24550 = new cljs.core.Keyword(null,"player","player",-97687400).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.screens.play_spec.state));
if(cljs.core._EQ_.call(null,expected__11396__auto___24549,actual__11397__auto___24550)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__11396__auto___24549;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11364__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11364__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__11397__auto___24550;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11364__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11364__auto__);
}
})()," (using =)"].join('')));
}

cljs.core.reset_BANG_.call(null,tic_tac_toe.screens.play_spec.state,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"board","board",-1907017633),tic_tac_toe.screens.play_spec.board_4,new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"current-screen","current-screen",-1454713691),new cljs.core.Keyword(null,"play","play",-580418022)], null));


var G__24551 = seq__23922_24542;
var G__24552 = chunk__23923_24543;
var G__24553 = count__23924_24544;
var G__24554 = (i__23925_24545 + (1));
seq__23922_24542 = G__24551;
chunk__23923_24543 = G__24552;
count__23924_24544 = G__24553;
i__23925_24545 = G__24554;
continue;
} else {
var temp__5804__auto___24555__$2 = cljs.core.seq.call(null,seq__23922_24542);
if(temp__5804__auto___24555__$2){
var seq__23922_24556__$1 = temp__5804__auto___24555__$2;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23922_24556__$1)){
var c__5525__auto___24557 = cljs.core.chunk_first.call(null,seq__23922_24556__$1);
var G__24558 = cljs.core.chunk_rest.call(null,seq__23922_24556__$1);
var G__24559 = c__5525__auto___24557;
var G__24560 = cljs.core.count.call(null,c__5525__auto___24557);
var G__24561 = (0);
seq__23922_24542 = G__24558;
chunk__23923_24543 = G__24559;
count__23924_24544 = G__24560;
i__23925_24545 = G__24561;
continue;
} else {
var n_24562 = cljs.core.first.call(null,seq__23922_24556__$1);
cljs.core.swap_BANG_.call(null,tic_tac_toe.screens.play_spec.state,cljs.core.assoc,new cljs.core.Keyword(null,"mode","mode",654403691),mode_24541,new cljs.core.Keyword(null,"first-ai-level","first-ai-level",1004633644),ai,new cljs.core.Keyword(null,"player","player",-97687400),((cljs.core._EQ_.call(null,(2),mode_24541))?new cljs.core.Keyword(null,"x","x",2099068185):new cljs.core.Keyword(null,"o","o",-1350007228)),new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"gui","gui",604532813));

c3kit.wire.spec_helper.render.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tic_tac_toe.render_screen.render_screen,tic_tac_toe.screens.play_spec.state], null));

c3kit.wire.spec_helper.click_BANG_.call(null,["#index-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n_24562)].join(''));

var expected__11420__auto___24563 = cljs.core.assoc.call(null,tic_tac_toe.screens.play_spec.board_4,n_24562,new cljs.core.Keyword(null,"x","x",2099068185));
var actual__11421__auto___24564 = new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.screens.play_spec.state));
if(cljs.core._EQ_.call(null,expected__11420__auto___24563,actual__11421__auto___24564)){
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__11420__auto___24563;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11364__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11364__auto__);
}
})(),speclj.platform.endl,"not to =: ",(function (){var temp__5806__auto__ = actual__11421__auto___24564;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11364__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11364__auto__);
}
})()].join('')));
} else {
}

var expected__11396__auto___24565 = ((cljs.core._EQ_.call(null,(2),mode_24541))?new cljs.core.Keyword(null,"x","x",2099068185):new cljs.core.Keyword(null,"o","o",-1350007228));
var actual__11397__auto___24566 = new cljs.core.Keyword(null,"player","player",-97687400).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.screens.play_spec.state));
if(cljs.core._EQ_.call(null,expected__11396__auto___24565,actual__11397__auto___24566)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__11396__auto___24565;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11364__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11364__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__11397__auto___24566;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11364__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11364__auto__);
}
})()," (using =)"].join('')));
}

cljs.core.reset_BANG_.call(null,tic_tac_toe.screens.play_spec.state,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"board","board",-1907017633),tic_tac_toe.screens.play_spec.board_4,new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"current-screen","current-screen",-1454713691),new cljs.core.Keyword(null,"play","play",-580418022)], null));


var G__24567 = cljs.core.next.call(null,seq__23922_24556__$1);
var G__24568 = null;
var G__24569 = (0);
var G__24570 = (0);
seq__23922_24542 = G__24567;
chunk__23923_24543 = G__24568;
count__23924_24544 = G__24569;
i__23925_24545 = G__24570;
continue;
}
} else {
}
}
break;
}

var G__24571 = cljs.core.next.call(null,seq__23921_24535__$1);
var G__24572 = null;
var G__24573 = (0);
var G__24574 = (0);
seq__23921_24496 = G__24571;
chunk__23926_24497 = G__24572;
count__23927_24498 = G__24573;
i__23928_24499 = G__24574;
continue;
}
} else {
}
}
break;
}

var G__24575 = cljs.core.next.call(null,seq__23920__$1);
var G__24576 = null;
var G__24577 = (0);
var G__24578 = (0);
seq__23920 = G__24575;
chunk__23933 = G__24576;
count__23934 = G__24577;
i__23935 = G__24578;
continue;
}
} else {
return null;
}
}
break;
}
});})(_STAR_parent_description_STAR__orig_val__23846_24319,_STAR_parent_description_STAR__temp_val__23847_24320,description__11259__auto____$1,_STAR_parent_description_STAR__orig_val__23474_23949,_STAR_parent_description_STAR__temp_val__23475_23950,description__11259__auto___23948))
,false),speclj.components.new_characteristic.call(null,"AI is not triggered if game over",((function (_STAR_parent_description_STAR__orig_val__23846_24319,_STAR_parent_description_STAR__temp_val__23847_24320,description__11259__auto____$1,_STAR_parent_description_STAR__orig_val__23474_23949,_STAR_parent_description_STAR__temp_val__23475_23950,description__11259__auto___23948){
return (function (){
cljs.core.swap_BANG_.call(null,tic_tac_toe.screens.play_spec.state,cljs.core.assoc,new cljs.core.Keyword(null,"board","board",-1907017633),new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"x","x",2099068185),(3),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"o","o",-1350007228),new cljs.core.Keyword(null,"o","o",-1350007228),new cljs.core.Keyword(null,"o","o",-1350007228),(8),(9),(10),(11),(12),(13),(14),(15),(16)], null),new cljs.core.Keyword(null,"mode","mode",654403691),(2),new cljs.core.Keyword(null,"first-ai-level","first-ai-level",1004633644),(3));

c3kit.wire.spec_helper.click_BANG_.call(null,"#index-2");

var expected__11396__auto__ = new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"o","o",-1350007228),new cljs.core.Keyword(null,"o","o",-1350007228),new cljs.core.Keyword(null,"o","o",-1350007228),(8),(9),(10),(11),(12),(13),(14),(15),(16)], null);
var actual__11397__auto__ = new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.screens.play_spec.state));
if(cljs.core._EQ_.call(null,expected__11396__auto__,actual__11397__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__11396__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11364__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11364__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__11397__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11364__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11364__auto__);
}
})()," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__23846_24319,_STAR_parent_description_STAR__temp_val__23847_24320,description__11259__auto____$1,_STAR_parent_description_STAR__orig_val__23474_23949,_STAR_parent_description_STAR__temp_val__23475_23950,description__11259__auto___23948))
,false)],null)));
var chunk__23849_24322 = null;
var count__23850_24323 = (0);
var i__23851_24324 = (0);
while(true){
if((i__23851_24324 < count__23850_24323)){
var component__11260__auto___24579 = cljs.core._nth.call(null,chunk__23849_24322,i__23851_24324);
speclj.components.install.call(null,component__11260__auto___24579,description__11259__auto____$1);


var G__24580 = seq__23848_24321;
var G__24581 = chunk__23849_24322;
var G__24582 = count__23850_24323;
var G__24583 = (i__23851_24324 + (1));
seq__23848_24321 = G__24580;
chunk__23849_24322 = G__24581;
count__23850_24323 = G__24582;
i__23851_24324 = G__24583;
continue;
} else {
var temp__5804__auto___24584 = cljs.core.seq.call(null,seq__23848_24321);
if(temp__5804__auto___24584){
var seq__23848_24585__$1 = temp__5804__auto___24584;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23848_24585__$1)){
var c__5525__auto___24586 = cljs.core.chunk_first.call(null,seq__23848_24585__$1);
var G__24587 = cljs.core.chunk_rest.call(null,seq__23848_24585__$1);
var G__24588 = c__5525__auto___24586;
var G__24589 = cljs.core.count.call(null,c__5525__auto___24586);
var G__24590 = (0);
seq__23848_24321 = G__24587;
chunk__23849_24322 = G__24588;
count__23850_24323 = G__24589;
i__23851_24324 = G__24590;
continue;
} else {
var component__11260__auto___24591 = cljs.core.first.call(null,seq__23848_24585__$1);
speclj.components.install.call(null,component__11260__auto___24591,description__11259__auto____$1);


var G__24592 = cljs.core.next.call(null,seq__23848_24585__$1);
var G__24593 = null;
var G__24594 = (0);
var G__24595 = (0);
seq__23848_24321 = G__24592;
chunk__23849_24322 = G__24593;
count__23850_24323 = G__24594;
i__23851_24324 = G__24595;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__23846_24319);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__11259__auto____$1);
}

return description__11259__auto____$1;
})()],null)));
var chunk__23477_23952 = null;
var count__23478_23953 = (0);
var i__23479_23954 = (0);
while(true){
if((i__23479_23954 < count__23478_23953)){
var component__11260__auto___24596 = cljs.core._nth.call(null,chunk__23477_23952,i__23479_23954);
speclj.components.install.call(null,component__11260__auto___24596,description__11259__auto___23948);


var G__24597 = seq__23476_23951;
var G__24598 = chunk__23477_23952;
var G__24599 = count__23478_23953;
var G__24600 = (i__23479_23954 + (1));
seq__23476_23951 = G__24597;
chunk__23477_23952 = G__24598;
count__23478_23953 = G__24599;
i__23479_23954 = G__24600;
continue;
} else {
var temp__5804__auto___24601 = cljs.core.seq.call(null,seq__23476_23951);
if(temp__5804__auto___24601){
var seq__23476_24602__$1 = temp__5804__auto___24601;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23476_24602__$1)){
var c__5525__auto___24603 = cljs.core.chunk_first.call(null,seq__23476_24602__$1);
var G__24604 = cljs.core.chunk_rest.call(null,seq__23476_24602__$1);
var G__24605 = c__5525__auto___24603;
var G__24606 = cljs.core.count.call(null,c__5525__auto___24603);
var G__24607 = (0);
seq__23476_23951 = G__24604;
chunk__23477_23952 = G__24605;
count__23478_23953 = G__24606;
i__23479_23954 = G__24607;
continue;
} else {
var component__11260__auto___24608 = cljs.core.first.call(null,seq__23476_24602__$1);
speclj.components.install.call(null,component__11260__auto___24608,description__11259__auto___23948);


var G__24609 = cljs.core.next.call(null,seq__23476_24602__$1);
var G__24610 = null;
var G__24611 = (0);
var G__24612 = (0);
seq__23476_23951 = G__24609;
chunk__23477_23952 = G__24610;
count__23478_23953 = G__24611;
i__23479_23954 = G__24612;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__23474_23949);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__11259__auto___23948);
}


//# sourceMappingURL=play_spec.js.map
