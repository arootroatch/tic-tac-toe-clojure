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
tic_tac_toe.screens.play_spec.state = reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"current-screen","current-screen",-1454713691),new cljs.core.Keyword(null,"play","play",-580418022),new cljs.core.Keyword(null,"board","board",-1907017633),tic_tac_toe.screens.play_spec.board_3,new cljs.core.Keyword(null,"game-state","game-state",935682735),new cljs.core.Keyword(null,"in-progress","in-progress",2126442630),new cljs.core.Keyword(null,"human?","human?",-2017219054),true], null));
}
var description__20276__auto___22918 = speclj.components.new_description.call(null,"play screen",false,"tic-tac-toe.screens.play-spec");
var _STAR_parent_description_STAR__orig_val__21397_22919 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__21398_22920 = description__20276__auto___22918;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__21398_22920);

try{var seq__21399_22921 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,6,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_around.call(null,((function (_STAR_parent_description_STAR__orig_val__21397_22919,_STAR_parent_description_STAR__temp_val__21398_22920,description__20276__auto___22918){
return (function (it__20646__auto__){
var _STAR_stubbed_invocations_STAR__orig_val__22596 = speclj.stub._STAR_stubbed_invocations_STAR_;
var _STAR_stubbed_invocations_STAR__temp_val__22597 = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
(speclj.stub._STAR_stubbed_invocations_STAR_ = _STAR_stubbed_invocations_STAR__temp_val__22597);

try{return it__20646__auto__.call(null);
}finally {(speclj.stub._STAR_stubbed_invocations_STAR_ = _STAR_stubbed_invocations_STAR__orig_val__22596);
}});})(_STAR_parent_description_STAR__orig_val__21397_22919,_STAR_parent_description_STAR__temp_val__21398_22920,description__20276__auto___22918))
),c3kit.wire.spec_helper.with_root_dom.call(null),(function (){var description__20276__auto____$1 = speclj.components.new_description.call(null,"restart",false,"tic-tac-toe.screens.play-spec");
var _STAR_parent_description_STAR__orig_val__22598_22925 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__22599_22926 = description__20276__auto____$1;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__22599_22926);

try{var seq__22600_22927 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_characteristic.call(null,"displays restart button at end of game",((function (_STAR_parent_description_STAR__orig_val__22598_22925,_STAR_parent_description_STAR__temp_val__22599_22926,description__20276__auto____$1,_STAR_parent_description_STAR__orig_val__21397_22919,_STAR_parent_description_STAR__temp_val__21398_22920,description__20276__auto___22918){
return (function (){
cljs.core.swap_BANG_.call(null,tic_tac_toe.screens.play_spec.state,cljs.core.assoc,new cljs.core.Keyword(null,"game-state","game-state",935682735),"X wins!");

c3kit.wire.spec_helper.render.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tic_tac_toe.render_screen.render_screen,tic_tac_toe.screens.play_spec.state], null));

var value__21320__auto___22931 = "#restart";
var node__21321__auto___22932 = c3kit.wire.spec_helper.select.call(null,value__21320__auto___22931);
if(cljs.core.truth_(node__21321__auto___22932)){
} else {
throw (new speclj.platform.SpecFailure(["Expected selector to find node: ",(function (){var temp__5806__auto__ = value__21320__auto___22931;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__20381__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__20381__auto__);
}
})()].join('')));
}

var expected__20413__auto__ = "Restart";
var actual__20414__auto__ = c3kit.wire.spec_helper.text.call(null,"#restart");
if(cljs.core._EQ_.call(null,expected__20413__auto__,actual__20414__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__20413__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__20381__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__20381__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__20414__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__20381__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__20381__auto__);
}
})()," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__22598_22925,_STAR_parent_description_STAR__temp_val__22599_22926,description__20276__auto____$1,_STAR_parent_description_STAR__orig_val__21397_22919,_STAR_parent_description_STAR__temp_val__21398_22920,description__20276__auto___22918))
,false),speclj.components.new_characteristic.call(null,"resets game state",((function (_STAR_parent_description_STAR__orig_val__22598_22925,_STAR_parent_description_STAR__temp_val__22599_22926,description__20276__auto____$1,_STAR_parent_description_STAR__orig_val__21397_22919,_STAR_parent_description_STAR__temp_val__21398_22920,description__20276__auto___22918){
return (function (){
cljs.core.swap_BANG_.call(null,tic_tac_toe.screens.play_spec.state,cljs.core.assoc,new cljs.core.Keyword(null,"game-state","game-state",935682735),"X wins!");

c3kit.wire.spec_helper.render.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tic_tac_toe.render_screen.render_screen,tic_tac_toe.screens.play_spec.state], null));

c3kit.wire.spec_helper.click_BANG_.call(null,"#restart");

var expected__20413__auto__ = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"current-screen","current-screen",-1454713691),new cljs.core.Keyword(null,"second-ai-level","second-ai-level",-418730455),new cljs.core.Keyword(null,"mode","mode",654403691),new cljs.core.Keyword(null,"first-ai-level","first-ai-level",1004633644),new cljs.core.Keyword(null,"game-state","game-state",935682735),new cljs.core.Keyword(null,"human?","human?",-2017219054),new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"board","board",-1907017633)],[new cljs.core.Keyword(null,"mode-selection","mode-selection",986239762),null,null,null,new cljs.core.Keyword(null,"in-progress","in-progress",2126442630),true,new cljs.core.Keyword(null,"gui","gui",604532813),new cljs.core.Keyword(null,"x","x",2099068185),null]);
var actual__20414__auto__ = cljs.core.deref.call(null,tic_tac_toe.screens.play_spec.state);
if(cljs.core._EQ_.call(null,expected__20413__auto__,actual__20414__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__20413__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__20381__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__20381__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__20414__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__20381__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__20381__auto__);
}
})()," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__22598_22925,_STAR_parent_description_STAR__temp_val__22599_22926,description__20276__auto____$1,_STAR_parent_description_STAR__orig_val__21397_22919,_STAR_parent_description_STAR__temp_val__21398_22920,description__20276__auto___22918))
,false),speclj.components.new_characteristic.call(null,"doesn't display restart button if game is in progress",((function (_STAR_parent_description_STAR__orig_val__22598_22925,_STAR_parent_description_STAR__temp_val__22599_22926,description__20276__auto____$1,_STAR_parent_description_STAR__orig_val__21397_22919,_STAR_parent_description_STAR__temp_val__21398_22920,description__20276__auto___22918){
return (function (){
cljs.core.swap_BANG_.call(null,tic_tac_toe.screens.play_spec.state,cljs.core.assoc,new cljs.core.Keyword(null,"game-state","game-state",935682735),new cljs.core.Keyword(null,"in-progress","in-progress",2126442630));

c3kit.wire.spec_helper.render.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tic_tac_toe.render_screen.render_screen,tic_tac_toe.screens.play_spec.state], null));

var value__21329__auto__ = "#restart";
var node__21330__auto__ = c3kit.wire.spec_helper.select.call(null,value__21329__auto__);
if(cljs.core.truth_(node__21330__auto__)){
throw (new speclj.platform.SpecFailure(["Expected selector NOT to find node: ",(function (){var temp__5806__auto__ = value__21329__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__20381__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__20381__auto__);
}
})()].join('')));
} else {
return null;
}
});})(_STAR_parent_description_STAR__orig_val__22598_22925,_STAR_parent_description_STAR__temp_val__22599_22926,description__20276__auto____$1,_STAR_parent_description_STAR__orig_val__21397_22919,_STAR_parent_description_STAR__temp_val__21398_22920,description__20276__auto___22918))
,false)],null)));
var chunk__22601_22928 = null;
var count__22602_22929 = (0);
var i__22603_22930 = (0);
while(true){
if((i__22603_22930 < count__22602_22929)){
var component__20277__auto___22933 = cljs.core._nth.call(null,chunk__22601_22928,i__22603_22930);
speclj.components.install.call(null,component__20277__auto___22933,description__20276__auto____$1);


var G__22934 = seq__22600_22927;
var G__22935 = chunk__22601_22928;
var G__22936 = count__22602_22929;
var G__22937 = (i__22603_22930 + (1));
seq__22600_22927 = G__22934;
chunk__22601_22928 = G__22935;
count__22602_22929 = G__22936;
i__22603_22930 = G__22937;
continue;
} else {
var temp__5804__auto___22938 = cljs.core.seq.call(null,seq__22600_22927);
if(temp__5804__auto___22938){
var seq__22600_22939__$1 = temp__5804__auto___22938;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22600_22939__$1)){
var c__5525__auto___22940 = cljs.core.chunk_first.call(null,seq__22600_22939__$1);
var G__22941 = cljs.core.chunk_rest.call(null,seq__22600_22939__$1);
var G__22942 = c__5525__auto___22940;
var G__22943 = cljs.core.count.call(null,c__5525__auto___22940);
var G__22944 = (0);
seq__22600_22927 = G__22941;
chunk__22601_22928 = G__22942;
count__22602_22929 = G__22943;
i__22603_22930 = G__22944;
continue;
} else {
var component__20277__auto___22945 = cljs.core.first.call(null,seq__22600_22939__$1);
speclj.components.install.call(null,component__20277__auto___22945,description__20276__auto____$1);


var G__22946 = cljs.core.next.call(null,seq__22600_22939__$1);
var G__22947 = null;
var G__22948 = (0);
var G__22949 = (0);
seq__22600_22927 = G__22946;
chunk__22601_22928 = G__22947;
count__22602_22929 = G__22948;
i__22603_22930 = G__22949;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__22598_22925);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__20276__auto____$1);
}

return description__20276__auto____$1;
})(),(function (){var description__20276__auto____$1 = speclj.components.new_description.call(null,"play heading",false,"tic-tac-toe.screens.play-spec");
var _STAR_parent_description_STAR__orig_val__22604_22950 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__22605_22951 = description__20276__auto____$1;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__22605_22951);

try{var seq__22606_22952 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,4,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_before.call(null,((function (_STAR_parent_description_STAR__orig_val__22604_22950,_STAR_parent_description_STAR__temp_val__22605_22951,description__20276__auto____$1,_STAR_parent_description_STAR__orig_val__21397_22919,_STAR_parent_description_STAR__temp_val__21398_22920,description__20276__auto___22918){
return (function (){
return cljs.core.reset_BANG_.call(null,tic_tac_toe.screens.play_spec.state,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"current-screen","current-screen",-1454713691),new cljs.core.Keyword(null,"play","play",-580418022),new cljs.core.Keyword(null,"board","board",-1907017633),tic_tac_toe.screens.play_spec.board_3,new cljs.core.Keyword(null,"game-state","game-state",935682735),new cljs.core.Keyword(null,"in-progress","in-progress",2126442630),new cljs.core.Keyword(null,"human?","human?",-2017219054),true], null));
});})(_STAR_parent_description_STAR__orig_val__22604_22950,_STAR_parent_description_STAR__temp_val__22605_22951,description__20276__auto____$1,_STAR_parent_description_STAR__orig_val__21397_22919,_STAR_parent_description_STAR__temp_val__21398_22920,description__20276__auto___22918))
),speclj.components.new_characteristic.call(null,"prompts player x for move",((function (_STAR_parent_description_STAR__orig_val__22604_22950,_STAR_parent_description_STAR__temp_val__22605_22951,description__20276__auto____$1,_STAR_parent_description_STAR__orig_val__21397_22919,_STAR_parent_description_STAR__temp_val__21398_22920,description__20276__auto___22918){
return (function (){
cljs.core.swap_BANG_.call(null,tic_tac_toe.screens.play_spec.state,cljs.core.assoc,new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"x","x",2099068185));

c3kit.wire.spec_helper.render.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tic_tac_toe.render_screen.render_screen,tic_tac_toe.screens.play_spec.state], null));

var expected__20413__auto__ = "X's turn!";
var actual__20414__auto__ = c3kit.wire.spec_helper.text.call(null,"#play-heading");
if(cljs.core._EQ_.call(null,expected__20413__auto__,actual__20414__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__20413__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__20381__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__20381__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__20414__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__20381__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__20381__auto__);
}
})()," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__22604_22950,_STAR_parent_description_STAR__temp_val__22605_22951,description__20276__auto____$1,_STAR_parent_description_STAR__orig_val__21397_22919,_STAR_parent_description_STAR__temp_val__21398_22920,description__20276__auto___22918))
,false),speclj.components.new_characteristic.call(null,"prompts player o for move",((function (_STAR_parent_description_STAR__orig_val__22604_22950,_STAR_parent_description_STAR__temp_val__22605_22951,description__20276__auto____$1,_STAR_parent_description_STAR__orig_val__21397_22919,_STAR_parent_description_STAR__temp_val__21398_22920,description__20276__auto___22918){
return (function (){
cljs.core.swap_BANG_.call(null,tic_tac_toe.screens.play_spec.state,cljs.core.assoc,new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"o","o",-1350007228));

c3kit.wire.spec_helper.render.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tic_tac_toe.render_screen.render_screen,tic_tac_toe.screens.play_spec.state], null));

var expected__20413__auto__ = "O's turn!";
var actual__20414__auto__ = c3kit.wire.spec_helper.text.call(null,"#play-heading");
if(cljs.core._EQ_.call(null,expected__20413__auto__,actual__20414__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__20413__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__20381__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__20381__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__20414__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__20381__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__20381__auto__);
}
})()," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__22604_22950,_STAR_parent_description_STAR__temp_val__22605_22951,description__20276__auto____$1,_STAR_parent_description_STAR__orig_val__21397_22919,_STAR_parent_description_STAR__temp_val__21398_22920,description__20276__auto___22918))
,false),speclj.components.new_characteristic.call(null,"displays game state if game over",((function (_STAR_parent_description_STAR__orig_val__22604_22950,_STAR_parent_description_STAR__temp_val__22605_22951,description__20276__auto____$1,_STAR_parent_description_STAR__orig_val__21397_22919,_STAR_parent_description_STAR__temp_val__21398_22920,description__20276__auto___22918){
return (function (){
cljs.core.swap_BANG_.call(null,tic_tac_toe.screens.play_spec.state,cljs.core.assoc,new cljs.core.Keyword(null,"game-state","game-state",935682735),"X wins!");

c3kit.wire.spec_helper.render.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tic_tac_toe.render_screen.render_screen,tic_tac_toe.screens.play_spec.state], null));

var expected__20413__auto__ = "X wins!";
var actual__20414__auto__ = c3kit.wire.spec_helper.text.call(null,"#play-heading");
if(cljs.core._EQ_.call(null,expected__20413__auto__,actual__20414__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__20413__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__20381__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__20381__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__20414__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__20381__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__20381__auto__);
}
})()," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__22604_22950,_STAR_parent_description_STAR__temp_val__22605_22951,description__20276__auto____$1,_STAR_parent_description_STAR__orig_val__21397_22919,_STAR_parent_description_STAR__temp_val__21398_22920,description__20276__auto___22918))
,false)],null)));
var chunk__22607_22953 = null;
var count__22608_22954 = (0);
var i__22609_22955 = (0);
while(true){
if((i__22609_22955 < count__22608_22954)){
var component__20277__auto___22956 = cljs.core._nth.call(null,chunk__22607_22953,i__22609_22955);
speclj.components.install.call(null,component__20277__auto___22956,description__20276__auto____$1);


var G__22957 = seq__22606_22952;
var G__22958 = chunk__22607_22953;
var G__22959 = count__22608_22954;
var G__22960 = (i__22609_22955 + (1));
seq__22606_22952 = G__22957;
chunk__22607_22953 = G__22958;
count__22608_22954 = G__22959;
i__22609_22955 = G__22960;
continue;
} else {
var temp__5804__auto___22961 = cljs.core.seq.call(null,seq__22606_22952);
if(temp__5804__auto___22961){
var seq__22606_22962__$1 = temp__5804__auto___22961;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22606_22962__$1)){
var c__5525__auto___22963 = cljs.core.chunk_first.call(null,seq__22606_22962__$1);
var G__22964 = cljs.core.chunk_rest.call(null,seq__22606_22962__$1);
var G__22965 = c__5525__auto___22963;
var G__22966 = cljs.core.count.call(null,c__5525__auto___22963);
var G__22967 = (0);
seq__22606_22952 = G__22964;
chunk__22607_22953 = G__22965;
count__22608_22954 = G__22966;
i__22609_22955 = G__22967;
continue;
} else {
var component__20277__auto___22968 = cljs.core.first.call(null,seq__22606_22962__$1);
speclj.components.install.call(null,component__20277__auto___22968,description__20276__auto____$1);


var G__22969 = cljs.core.next.call(null,seq__22606_22962__$1);
var G__22970 = null;
var G__22971 = (0);
var G__22972 = (0);
seq__22606_22952 = G__22969;
chunk__22607_22953 = G__22970;
count__22608_22954 = G__22971;
i__22609_22955 = G__22972;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__22604_22950);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__20276__auto____$1);
}

return description__20276__auto____$1;
})(),(function (){var description__20276__auto____$1 = speclj.components.new_description.call(null,"3x3",false,"tic-tac-toe.screens.play-spec");
var _STAR_parent_description_STAR__orig_val__22610_22973 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__22611_22974 = description__20276__auto____$1;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__22611_22974);

try{var seq__22612_22975 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,15,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_before.call(null,((function (_STAR_parent_description_STAR__orig_val__22610_22973,_STAR_parent_description_STAR__temp_val__22611_22974,description__20276__auto____$1,_STAR_parent_description_STAR__orig_val__21397_22919,_STAR_parent_description_STAR__temp_val__21398_22920,description__20276__auto___22918){
return (function (){
cljs.core.reset_BANG_.call(null,tic_tac_toe.screens.play_spec.state,new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"current-screen","current-screen",-1454713691),new cljs.core.Keyword(null,"play","play",-580418022),new cljs.core.Keyword(null,"board","board",-1907017633),tic_tac_toe.screens.play_spec.board_3,new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"mode","mode",654403691),(1),new cljs.core.Keyword(null,"game-state","game-state",935682735),new cljs.core.Keyword(null,"in-progress","in-progress",2126442630),new cljs.core.Keyword(null,"human?","human?",-2017219054),true,new cljs.core.Keyword(null,"first-ai-level","first-ai-level",1004633644),(1),new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"gui","gui",604532813)], null));

return c3kit.wire.spec_helper.render.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tic_tac_toe.render_screen.render_screen,tic_tac_toe.screens.play_spec.state], null));
});})(_STAR_parent_description_STAR__orig_val__22610_22973,_STAR_parent_description_STAR__temp_val__22611_22974,description__20276__auto____$1,_STAR_parent_description_STAR__orig_val__21397_22919,_STAR_parent_description_STAR__temp_val__21398_22920,description__20276__auto___22918))
),speclj.components.new_characteristic.call(null,"renders board",((function (_STAR_parent_description_STAR__orig_val__22610_22973,_STAR_parent_description_STAR__temp_val__22611_22974,description__20276__auto____$1,_STAR_parent_description_STAR__orig_val__21397_22919,_STAR_parent_description_STAR__temp_val__21398_22920,description__20276__auto___22918){
return (function (){
var expected__20413__auto___22979 = (9);
var actual__20414__auto___22980 = cljs.core.count.call(null,cljs.core.vec.call(null,c3kit.wire.js.query_selector_all.call(null,".board-square")));
if(cljs.core._EQ_.call(null,expected__20413__auto___22979,actual__20414__auto___22980)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__20413__auto___22979;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__20381__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__20381__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__20414__auto___22980;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__20381__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__20381__auto__);
}
})()," (using =)"].join('')));
}

var value__21320__auto___22981 = "#board-wrapper";
var node__21321__auto___22982 = c3kit.wire.spec_helper.select.call(null,value__21320__auto___22981);
if(cljs.core.truth_(node__21321__auto___22982)){
} else {
throw (new speclj.platform.SpecFailure(["Expected selector to find node: ",(function (){var temp__5806__auto__ = value__21320__auto___22981;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__20381__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__20381__auto__);
}
})()].join('')));
}

var value__21320__auto__ = ".three-grid";
var node__21321__auto__ = c3kit.wire.spec_helper.select.call(null,value__21320__auto__);
if(cljs.core.truth_(node__21321__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected selector to find node: ",(function (){var temp__5806__auto__ = value__21320__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__20381__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__20381__auto__);
}
})()].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__22610_22973,_STAR_parent_description_STAR__temp_val__22611_22974,description__20276__auto____$1,_STAR_parent_description_STAR__orig_val__21397_22919,_STAR_parent_description_STAR__temp_val__21398_22920,description__20276__auto___22918))
,false),speclj.components.new_characteristic.call(null,"buttons have IDs 0-8",((function (_STAR_parent_description_STAR__orig_val__22610_22973,_STAR_parent_description_STAR__temp_val__22611_22974,description__20276__auto____$1,_STAR_parent_description_STAR__orig_val__21397_22919,_STAR_parent_description_STAR__temp_val__21398_22920,description__20276__auto___22918){
return (function (){
var seq__22696 = cljs.core.seq.call(null,cljs.core.range.call(null,(9)));
var chunk__22697 = null;
var count__22698 = (0);
var i__22699 = (0);
while(true){
if((i__22699 < count__22698)){
var n = cljs.core._nth.call(null,chunk__22697,i__22699);
var value__21320__auto___22983 = ["#index-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join('');
var node__21321__auto___22984 = c3kit.wire.spec_helper.select.call(null,value__21320__auto___22983);
if(cljs.core.truth_(node__21321__auto___22984)){
} else {
throw (new speclj.platform.SpecFailure(["Expected selector to find node: ",(function (){var temp__5806__auto__ = value__21320__auto___22983;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__20381__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__20381__auto__);
}
})()].join('')));
}


var G__22985 = seq__22696;
var G__22986 = chunk__22697;
var G__22987 = count__22698;
var G__22988 = (i__22699 + (1));
seq__22696 = G__22985;
chunk__22697 = G__22986;
count__22698 = G__22987;
i__22699 = G__22988;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__22696);
if(temp__5804__auto__){
var seq__22696__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22696__$1)){
var c__5525__auto__ = cljs.core.chunk_first.call(null,seq__22696__$1);
var G__22989 = cljs.core.chunk_rest.call(null,seq__22696__$1);
var G__22990 = c__5525__auto__;
var G__22991 = cljs.core.count.call(null,c__5525__auto__);
var G__22992 = (0);
seq__22696 = G__22989;
chunk__22697 = G__22990;
count__22698 = G__22991;
i__22699 = G__22992;
continue;
} else {
var n = cljs.core.first.call(null,seq__22696__$1);
var value__21320__auto___22993 = ["#index-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join('');
var node__21321__auto___22994 = c3kit.wire.spec_helper.select.call(null,value__21320__auto___22993);
if(cljs.core.truth_(node__21321__auto___22994)){
} else {
throw (new speclj.platform.SpecFailure(["Expected selector to find node: ",(function (){var temp__5806__auto__ = value__21320__auto___22993;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__20381__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__20381__auto__);
}
})()].join('')));
}


var G__22995 = cljs.core.next.call(null,seq__22696__$1);
var G__22996 = null;
var G__22997 = (0);
var G__22998 = (0);
seq__22696 = G__22995;
chunk__22697 = G__22996;
count__22698 = G__22997;
i__22699 = G__22998;
continue;
}
} else {
return null;
}
}
break;
}
});})(_STAR_parent_description_STAR__orig_val__22610_22973,_STAR_parent_description_STAR__temp_val__22611_22974,description__20276__auto____$1,_STAR_parent_description_STAR__orig_val__21397_22919,_STAR_parent_description_STAR__temp_val__21398_22920,description__20276__auto___22918))
,false),speclj.components.new_characteristic.call(null,"clicking button updates board in state",((function (_STAR_parent_description_STAR__orig_val__22610_22973,_STAR_parent_description_STAR__temp_val__22611_22974,description__20276__auto____$1,_STAR_parent_description_STAR__orig_val__21397_22919,_STAR_parent_description_STAR__temp_val__21398_22920,description__20276__auto___22918){
return (function (){
var seq__22700 = cljs.core.seq.call(null,cljs.core.range.call(null,(9)));
var chunk__22701 = null;
var count__22702 = (0);
var i__22703 = (0);
while(true){
if((i__22703 < count__22702)){
var n = cljs.core._nth.call(null,chunk__22701,i__22703);
c3kit.wire.spec_helper.click_BANG_.call(null,["#index-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join(''));

var expected__20413__auto___22999 = cljs.core.assoc.call(null,tic_tac_toe.screens.play_spec.board_3,n,new cljs.core.Keyword(null,"x","x",2099068185));
var actual__20414__auto___23000 = new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.screens.play_spec.state));
if(cljs.core._EQ_.call(null,expected__20413__auto___22999,actual__20414__auto___23000)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__20413__auto___22999;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__20381__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__20381__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__20414__auto___23000;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__20381__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__20381__auto__);
}
})()," (using =)"].join('')));
}

cljs.core.swap_BANG_.call(null,tic_tac_toe.screens.play_spec.state,cljs.core.assoc,new cljs.core.Keyword(null,"board","board",-1907017633),tic_tac_toe.screens.play_spec.board_3,new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"x","x",2099068185));


var G__23001 = seq__22700;
var G__23002 = chunk__22701;
var G__23003 = count__22702;
var G__23004 = (i__22703 + (1));
seq__22700 = G__23001;
chunk__22701 = G__23002;
count__22702 = G__23003;
i__22703 = G__23004;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__22700);
if(temp__5804__auto__){
var seq__22700__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22700__$1)){
var c__5525__auto__ = cljs.core.chunk_first.call(null,seq__22700__$1);
var G__23005 = cljs.core.chunk_rest.call(null,seq__22700__$1);
var G__23006 = c__5525__auto__;
var G__23007 = cljs.core.count.call(null,c__5525__auto__);
var G__23008 = (0);
seq__22700 = G__23005;
chunk__22701 = G__23006;
count__22702 = G__23007;
i__22703 = G__23008;
continue;
} else {
var n = cljs.core.first.call(null,seq__22700__$1);
c3kit.wire.spec_helper.click_BANG_.call(null,["#index-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join(''));

var expected__20413__auto___23009 = cljs.core.assoc.call(null,tic_tac_toe.screens.play_spec.board_3,n,new cljs.core.Keyword(null,"x","x",2099068185));
var actual__20414__auto___23010 = new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.screens.play_spec.state));
if(cljs.core._EQ_.call(null,expected__20413__auto___23009,actual__20414__auto___23010)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__20413__auto___23009;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__20381__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__20381__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__20414__auto___23010;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__20381__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__20381__auto__);
}
})()," (using =)"].join('')));
}

cljs.core.swap_BANG_.call(null,tic_tac_toe.screens.play_spec.state,cljs.core.assoc,new cljs.core.Keyword(null,"board","board",-1907017633),tic_tac_toe.screens.play_spec.board_3,new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"x","x",2099068185));


var G__23011 = cljs.core.next.call(null,seq__22700__$1);
var G__23012 = null;
var G__23013 = (0);
var G__23014 = (0);
seq__22700 = G__23011;
chunk__22701 = G__23012;
count__22702 = G__23013;
i__22703 = G__23014;
continue;
}
} else {
return null;
}
}
break;
}
});})(_STAR_parent_description_STAR__orig_val__22610_22973,_STAR_parent_description_STAR__temp_val__22611_22974,description__20276__auto____$1,_STAR_parent_description_STAR__orig_val__21397_22919,_STAR_parent_description_STAR__temp_val__21398_22920,description__20276__auto___22918))
,false),speclj.components.new_characteristic.call(null,"clicking button swaps player in state",((function (_STAR_parent_description_STAR__orig_val__22610_22973,_STAR_parent_description_STAR__temp_val__22611_22974,description__20276__auto____$1,_STAR_parent_description_STAR__orig_val__21397_22919,_STAR_parent_description_STAR__temp_val__21398_22920,description__20276__auto___22918){
return (function (){
var seq__22704 = cljs.core.seq.call(null,cljs.core.range.call(null,(9)));
var chunk__22705 = null;
var count__22706 = (0);
var i__22707 = (0);
while(true){
if((i__22707 < count__22706)){
var n = cljs.core._nth.call(null,chunk__22705,i__22707);
c3kit.wire.spec_helper.click_BANG_.call(null,["#index-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join(''));

var expected__20413__auto___23015 = new cljs.core.Keyword(null,"o","o",-1350007228);
var actual__20414__auto___23016 = new cljs.core.Keyword(null,"player","player",-97687400).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.screens.play_spec.state));
if(cljs.core._EQ_.call(null,expected__20413__auto___23015,actual__20414__auto___23016)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__20413__auto___23015;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__20381__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__20381__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__20414__auto___23016;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__20381__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__20381__auto__);
}
})()," (using =)"].join('')));
}

cljs.core.swap_BANG_.call(null,tic_tac_toe.screens.play_spec.state,cljs.core.assoc,new cljs.core.Keyword(null,"board","board",-1907017633),tic_tac_toe.screens.play_spec.board_3,new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"x","x",2099068185));


var G__23017 = seq__22704;
var G__23018 = chunk__22705;
var G__23019 = count__22706;
var G__23020 = (i__22707 + (1));
seq__22704 = G__23017;
chunk__22705 = G__23018;
count__22706 = G__23019;
i__22707 = G__23020;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__22704);
if(temp__5804__auto__){
var seq__22704__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22704__$1)){
var c__5525__auto__ = cljs.core.chunk_first.call(null,seq__22704__$1);
var G__23021 = cljs.core.chunk_rest.call(null,seq__22704__$1);
var G__23022 = c__5525__auto__;
var G__23023 = cljs.core.count.call(null,c__5525__auto__);
var G__23024 = (0);
seq__22704 = G__23021;
chunk__22705 = G__23022;
count__22706 = G__23023;
i__22707 = G__23024;
continue;
} else {
var n = cljs.core.first.call(null,seq__22704__$1);
c3kit.wire.spec_helper.click_BANG_.call(null,["#index-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join(''));

var expected__20413__auto___23025 = new cljs.core.Keyword(null,"o","o",-1350007228);
var actual__20414__auto___23026 = new cljs.core.Keyword(null,"player","player",-97687400).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.screens.play_spec.state));
if(cljs.core._EQ_.call(null,expected__20413__auto___23025,actual__20414__auto___23026)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__20413__auto___23025;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__20381__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__20381__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__20414__auto___23026;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__20381__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__20381__auto__);
}
})()," (using =)"].join('')));
}

cljs.core.swap_BANG_.call(null,tic_tac_toe.screens.play_spec.state,cljs.core.assoc,new cljs.core.Keyword(null,"board","board",-1907017633),tic_tac_toe.screens.play_spec.board_3,new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"x","x",2099068185));


var G__23027 = cljs.core.next.call(null,seq__22704__$1);
var G__23028 = null;
var G__23029 = (0);
var G__23030 = (0);
seq__22704 = G__23027;
chunk__22705 = G__23028;
count__22706 = G__23029;
i__22707 = G__23030;
continue;
}
} else {
return null;
}
}
break;
}
});})(_STAR_parent_description_STAR__orig_val__22610_22973,_STAR_parent_description_STAR__temp_val__22611_22974,description__20276__auto____$1,_STAR_parent_description_STAR__orig_val__21397_22919,_STAR_parent_description_STAR__temp_val__21398_22920,description__20276__auto___22918))
,false),speclj.components.new_characteristic.call(null,"clicking button toggles human? to false if mode 2 or 3",((function (_STAR_parent_description_STAR__orig_val__22610_22973,_STAR_parent_description_STAR__temp_val__22611_22974,description__20276__auto____$1,_STAR_parent_description_STAR__orig_val__21397_22919,_STAR_parent_description_STAR__temp_val__21398_22920,description__20276__auto___22918){
return (function (){
var ai_turn_orig_val__22708 = tic_tac_toe.screens.play.ai_turn;
var ai_turn_temp_val__22709 = speclj.stub.stub.call(null,new cljs.core.Keyword(null,"ai-turn","ai-turn",-1581895352),cljs.core.PersistentArrayMap.EMPTY);
(tic_tac_toe.screens.play.ai_turn = ai_turn_temp_val__22709);

try{var seq__22710 = cljs.core.seq.call(null,cljs.core.range.call(null,(9)));
var chunk__22715 = null;
var count__22716 = (0);
var i__22717 = (0);
while(true){
if((i__22717 < count__22716)){
var n = cljs.core._nth.call(null,chunk__22715,i__22717);
var seq__22718_23031 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(3)], null));
var chunk__22719_23032 = null;
var count__22720_23033 = (0);
var i__22721_23034 = (0);
while(true){
if((i__22721_23034 < count__22720_23033)){
var mode_23035 = cljs.core._nth.call(null,chunk__22719_23032,i__22721_23034);
cljs.core.swap_BANG_.call(null,tic_tac_toe.screens.play_spec.state,cljs.core.assoc,new cljs.core.Keyword(null,"mode","mode",654403691),mode_23035);

c3kit.wire.spec_helper.render.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tic_tac_toe.render_screen.render_screen,tic_tac_toe.screens.play_spec.state], null));

c3kit.wire.spec_helper.click_BANG_.call(null,["#index-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join(''));

var expected__20413__auto___23036 = false;
var actual__20414__auto___23037 = new cljs.core.Keyword(null,"human?","human?",-2017219054).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.screens.play_spec.state));
if(cljs.core._EQ_.call(null,expected__20413__auto___23036,actual__20414__auto___23037)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__20413__auto___23036;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__20381__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__20381__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__20414__auto___23037;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__20381__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__20381__auto__);
}
})()," (using =)"].join('')));
}

cljs.core.swap_BANG_.call(null,tic_tac_toe.screens.play_spec.state,cljs.core.assoc,new cljs.core.Keyword(null,"board","board",-1907017633),tic_tac_toe.screens.play_spec.board_3,new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"x","x",2099068185));


var G__23038 = seq__22718_23031;
var G__23039 = chunk__22719_23032;
var G__23040 = count__22720_23033;
var G__23041 = (i__22721_23034 + (1));
seq__22718_23031 = G__23038;
chunk__22719_23032 = G__23039;
count__22720_23033 = G__23040;
i__22721_23034 = G__23041;
continue;
} else {
var temp__5804__auto___23042 = cljs.core.seq.call(null,seq__22718_23031);
if(temp__5804__auto___23042){
var seq__22718_23043__$1 = temp__5804__auto___23042;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22718_23043__$1)){
var c__5525__auto___23044 = cljs.core.chunk_first.call(null,seq__22718_23043__$1);
var G__23045 = cljs.core.chunk_rest.call(null,seq__22718_23043__$1);
var G__23046 = c__5525__auto___23044;
var G__23047 = cljs.core.count.call(null,c__5525__auto___23044);
var G__23048 = (0);
seq__22718_23031 = G__23045;
chunk__22719_23032 = G__23046;
count__22720_23033 = G__23047;
i__22721_23034 = G__23048;
continue;
} else {
var mode_23049 = cljs.core.first.call(null,seq__22718_23043__$1);
cljs.core.swap_BANG_.call(null,tic_tac_toe.screens.play_spec.state,cljs.core.assoc,new cljs.core.Keyword(null,"mode","mode",654403691),mode_23049);

c3kit.wire.spec_helper.render.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tic_tac_toe.render_screen.render_screen,tic_tac_toe.screens.play_spec.state], null));

c3kit.wire.spec_helper.click_BANG_.call(null,["#index-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join(''));

var expected__20413__auto___23050 = false;
var actual__20414__auto___23051 = new cljs.core.Keyword(null,"human?","human?",-2017219054).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.screens.play_spec.state));
if(cljs.core._EQ_.call(null,expected__20413__auto___23050,actual__20414__auto___23051)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__20413__auto___23050;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__20381__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__20381__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__20414__auto___23051;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__20381__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__20381__auto__);
}
})()," (using =)"].join('')));
}

cljs.core.swap_BANG_.call(null,tic_tac_toe.screens.play_spec.state,cljs.core.assoc,new cljs.core.Keyword(null,"board","board",-1907017633),tic_tac_toe.screens.play_spec.board_3,new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"x","x",2099068185));


var G__23052 = cljs.core.next.call(null,seq__22718_23043__$1);
var G__23053 = null;
var G__23054 = (0);
var G__23055 = (0);
seq__22718_23031 = G__23052;
chunk__22719_23032 = G__23053;
count__22720_23033 = G__23054;
i__22721_23034 = G__23055;
continue;
}
} else {
}
}
break;
}

var G__23056 = seq__22710;
var G__23057 = chunk__22715;
var G__23058 = count__22716;
var G__23059 = (i__22717 + (1));
seq__22710 = G__23056;
chunk__22715 = G__23057;
count__22716 = G__23058;
i__22717 = G__23059;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__22710);
if(temp__5804__auto__){
var seq__22710__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22710__$1)){
var c__5525__auto__ = cljs.core.chunk_first.call(null,seq__22710__$1);
var G__23060 = cljs.core.chunk_rest.call(null,seq__22710__$1);
var G__23061 = c__5525__auto__;
var G__23062 = cljs.core.count.call(null,c__5525__auto__);
var G__23063 = (0);
seq__22710 = G__23060;
chunk__22715 = G__23061;
count__22716 = G__23062;
i__22717 = G__23063;
continue;
} else {
var n = cljs.core.first.call(null,seq__22710__$1);
var seq__22711_23064 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(3)], null));
var chunk__22712_23065 = null;
var count__22713_23066 = (0);
var i__22714_23067 = (0);
while(true){
if((i__22714_23067 < count__22713_23066)){
var mode_23068 = cljs.core._nth.call(null,chunk__22712_23065,i__22714_23067);
cljs.core.swap_BANG_.call(null,tic_tac_toe.screens.play_spec.state,cljs.core.assoc,new cljs.core.Keyword(null,"mode","mode",654403691),mode_23068);

c3kit.wire.spec_helper.render.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tic_tac_toe.render_screen.render_screen,tic_tac_toe.screens.play_spec.state], null));

c3kit.wire.spec_helper.click_BANG_.call(null,["#index-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join(''));

var expected__20413__auto___23069 = false;
var actual__20414__auto___23070 = new cljs.core.Keyword(null,"human?","human?",-2017219054).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.screens.play_spec.state));
if(cljs.core._EQ_.call(null,expected__20413__auto___23069,actual__20414__auto___23070)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__20413__auto___23069;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__20381__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__20381__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__20414__auto___23070;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__20381__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__20381__auto__);
}
})()," (using =)"].join('')));
}

cljs.core.swap_BANG_.call(null,tic_tac_toe.screens.play_spec.state,cljs.core.assoc,new cljs.core.Keyword(null,"board","board",-1907017633),tic_tac_toe.screens.play_spec.board_3,new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"x","x",2099068185));


var G__23071 = seq__22711_23064;
var G__23072 = chunk__22712_23065;
var G__23073 = count__22713_23066;
var G__23074 = (i__22714_23067 + (1));
seq__22711_23064 = G__23071;
chunk__22712_23065 = G__23072;
count__22713_23066 = G__23073;
i__22714_23067 = G__23074;
continue;
} else {
var temp__5804__auto___23075__$1 = cljs.core.seq.call(null,seq__22711_23064);
if(temp__5804__auto___23075__$1){
var seq__22711_23076__$1 = temp__5804__auto___23075__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22711_23076__$1)){
var c__5525__auto___23077 = cljs.core.chunk_first.call(null,seq__22711_23076__$1);
var G__23078 = cljs.core.chunk_rest.call(null,seq__22711_23076__$1);
var G__23079 = c__5525__auto___23077;
var G__23080 = cljs.core.count.call(null,c__5525__auto___23077);
var G__23081 = (0);
seq__22711_23064 = G__23078;
chunk__22712_23065 = G__23079;
count__22713_23066 = G__23080;
i__22714_23067 = G__23081;
continue;
} else {
var mode_23082 = cljs.core.first.call(null,seq__22711_23076__$1);
cljs.core.swap_BANG_.call(null,tic_tac_toe.screens.play_spec.state,cljs.core.assoc,new cljs.core.Keyword(null,"mode","mode",654403691),mode_23082);

c3kit.wire.spec_helper.render.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tic_tac_toe.render_screen.render_screen,tic_tac_toe.screens.play_spec.state], null));

c3kit.wire.spec_helper.click_BANG_.call(null,["#index-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join(''));

var expected__20413__auto___23083 = false;
var actual__20414__auto___23084 = new cljs.core.Keyword(null,"human?","human?",-2017219054).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.screens.play_spec.state));
if(cljs.core._EQ_.call(null,expected__20413__auto___23083,actual__20414__auto___23084)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__20413__auto___23083;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__20381__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__20381__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__20414__auto___23084;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__20381__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__20381__auto__);
}
})()," (using =)"].join('')));
}

cljs.core.swap_BANG_.call(null,tic_tac_toe.screens.play_spec.state,cljs.core.assoc,new cljs.core.Keyword(null,"board","board",-1907017633),tic_tac_toe.screens.play_spec.board_3,new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"x","x",2099068185));


var G__23085 = cljs.core.next.call(null,seq__22711_23076__$1);
var G__23086 = null;
var G__23087 = (0);
var G__23088 = (0);
seq__22711_23064 = G__23085;
chunk__22712_23065 = G__23086;
count__22713_23066 = G__23087;
i__22714_23067 = G__23088;
continue;
}
} else {
}
}
break;
}

var G__23089 = cljs.core.next.call(null,seq__22710__$1);
var G__23090 = null;
var G__23091 = (0);
var G__23092 = (0);
seq__22710 = G__23089;
chunk__22715 = G__23090;
count__22716 = G__23091;
i__22717 = G__23092;
continue;
}
} else {
return null;
}
}
break;
}
}finally {(tic_tac_toe.screens.play.ai_turn = ai_turn_orig_val__22708);
}});})(_STAR_parent_description_STAR__orig_val__22610_22973,_STAR_parent_description_STAR__temp_val__22611_22974,description__20276__auto____$1,_STAR_parent_description_STAR__orig_val__21397_22919,_STAR_parent_description_STAR__temp_val__21398_22920,description__20276__auto___22918))
,false),speclj.components.new_characteristic.call(null,"clicking button does not toggle human if mode 1",((function (_STAR_parent_description_STAR__orig_val__22610_22973,_STAR_parent_description_STAR__temp_val__22611_22974,description__20276__auto____$1,_STAR_parent_description_STAR__orig_val__21397_22919,_STAR_parent_description_STAR__temp_val__21398_22920,description__20276__auto___22918){
return (function (){
var ai_turn_orig_val__22722 = tic_tac_toe.screens.play.ai_turn;
var ai_turn_temp_val__22723 = speclj.stub.stub.call(null,new cljs.core.Keyword(null,"ai-turn","ai-turn",-1581895352),cljs.core.PersistentArrayMap.EMPTY);
(tic_tac_toe.screens.play.ai_turn = ai_turn_temp_val__22723);

try{var seq__22724 = cljs.core.seq.call(null,cljs.core.range.call(null,(9)));
var chunk__22725 = null;
var count__22726 = (0);
var i__22727 = (0);
while(true){
if((i__22727 < count__22726)){
var n = cljs.core._nth.call(null,chunk__22725,i__22727);
c3kit.wire.spec_helper.click_BANG_.call(null,["#index-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join(''));

var expected__20413__auto___23093 = true;
var actual__20414__auto___23094 = new cljs.core.Keyword(null,"human?","human?",-2017219054).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.screens.play_spec.state));
if(cljs.core._EQ_.call(null,expected__20413__auto___23093,actual__20414__auto___23094)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__20413__auto___23093;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__20381__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__20381__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__20414__auto___23094;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__20381__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__20381__auto__);
}
})()," (using =)"].join('')));
}

cljs.core.swap_BANG_.call(null,tic_tac_toe.screens.play_spec.state,cljs.core.assoc,new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"board","board",-1907017633),tic_tac_toe.screens.play_spec.board_4);


var G__23095 = seq__22724;
var G__23096 = chunk__22725;
var G__23097 = count__22726;
var G__23098 = (i__22727 + (1));
seq__22724 = G__23095;
chunk__22725 = G__23096;
count__22726 = G__23097;
i__22727 = G__23098;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__22724);
if(temp__5804__auto__){
var seq__22724__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22724__$1)){
var c__5525__auto__ = cljs.core.chunk_first.call(null,seq__22724__$1);
var G__23099 = cljs.core.chunk_rest.call(null,seq__22724__$1);
var G__23100 = c__5525__auto__;
var G__23101 = cljs.core.count.call(null,c__5525__auto__);
var G__23102 = (0);
seq__22724 = G__23099;
chunk__22725 = G__23100;
count__22726 = G__23101;
i__22727 = G__23102;
continue;
} else {
var n = cljs.core.first.call(null,seq__22724__$1);
c3kit.wire.spec_helper.click_BANG_.call(null,["#index-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join(''));

var expected__20413__auto___23103 = true;
var actual__20414__auto___23104 = new cljs.core.Keyword(null,"human?","human?",-2017219054).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.screens.play_spec.state));
if(cljs.core._EQ_.call(null,expected__20413__auto___23103,actual__20414__auto___23104)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__20413__auto___23103;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__20381__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__20381__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__20414__auto___23104;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__20381__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__20381__auto__);
}
})()," (using =)"].join('')));
}

cljs.core.swap_BANG_.call(null,tic_tac_toe.screens.play_spec.state,cljs.core.assoc,new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"board","board",-1907017633),tic_tac_toe.screens.play_spec.board_4);


var G__23105 = cljs.core.next.call(null,seq__22724__$1);
var G__23106 = null;
var G__23107 = (0);
var G__23108 = (0);
seq__22724 = G__23105;
chunk__22725 = G__23106;
count__22726 = G__23107;
i__22727 = G__23108;
continue;
}
} else {
return null;
}
}
break;
}
}finally {(tic_tac_toe.screens.play.ai_turn = ai_turn_orig_val__22722);
}});})(_STAR_parent_description_STAR__orig_val__22610_22973,_STAR_parent_description_STAR__temp_val__22611_22974,description__20276__auto____$1,_STAR_parent_description_STAR__orig_val__21397_22919,_STAR_parent_description_STAR__temp_val__21398_22920,description__20276__auto___22918))
,false),speclj.components.new_characteristic.call(null,"clicking button updates game-state in state",((function (_STAR_parent_description_STAR__orig_val__22610_22973,_STAR_parent_description_STAR__temp_val__22611_22974,description__20276__auto____$1,_STAR_parent_description_STAR__orig_val__21397_22919,_STAR_parent_description_STAR__temp_val__21398_22920,description__20276__auto___22918){
return (function (){
cljs.core.swap_BANG_.call(null,tic_tac_toe.screens.play_spec.state,cljs.core.assoc,new cljs.core.Keyword(null,"board","board",-1907017633),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"o","o",-1350007228),new cljs.core.Keyword(null,"o","o",-1350007228),(6),(7),(8),(9)], null));

c3kit.wire.spec_helper.click_BANG_.call(null,"#index-0");

var expected__20413__auto__ = "X wins!";
var actual__20414__auto__ = new cljs.core.Keyword(null,"game-state","game-state",935682735).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.screens.play_spec.state));
if(cljs.core._EQ_.call(null,expected__20413__auto__,actual__20414__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__20413__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__20381__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__20381__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__20414__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__20381__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__20381__auto__);
}
})()," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__22610_22973,_STAR_parent_description_STAR__temp_val__22611_22974,description__20276__auto____$1,_STAR_parent_description_STAR__orig_val__21397_22919,_STAR_parent_description_STAR__temp_val__21398_22920,description__20276__auto___22918))
,false),speclj.components.new_characteristic.call(null,"clicking button adds token to button HTML",((function (_STAR_parent_description_STAR__orig_val__22610_22973,_STAR_parent_description_STAR__temp_val__22611_22974,description__20276__auto____$1,_STAR_parent_description_STAR__orig_val__21397_22919,_STAR_parent_description_STAR__temp_val__21398_22920,description__20276__auto___22918){
return (function (){
var seq__22728 = cljs.core.seq.call(null,cljs.core.range.call(null,(9)));
var chunk__22729 = null;
var count__22730 = (0);
var i__22731 = (0);
while(true){
if((i__22731 < count__22730)){
var n = cljs.core._nth.call(null,chunk__22729,i__22731);
c3kit.wire.spec_helper.click_BANG_.call(null,["#index-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join(''));

var expected__20413__auto___23109 = "X";
var actual__20414__auto___23110 = c3kit.wire.spec_helper.text.call(null,["#index-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join(''));
if(cljs.core._EQ_.call(null,expected__20413__auto___23109,actual__20414__auto___23110)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__20413__auto___23109;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__20381__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__20381__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__20414__auto___23110;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__20381__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__20381__auto__);
}
})()," (using =)"].join('')));
}

cljs.core.reset_BANG_.call(null,tic_tac_toe.screens.play_spec.state,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"board","board",-1907017633),tic_tac_toe.screens.play_spec.board_3,new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"current-screen","current-screen",-1454713691),new cljs.core.Keyword(null,"play","play",-580418022),new cljs.core.Keyword(null,"mode","mode",654403691),(1)], null));


var G__23111 = seq__22728;
var G__23112 = chunk__22729;
var G__23113 = count__22730;
var G__23114 = (i__22731 + (1));
seq__22728 = G__23111;
chunk__22729 = G__23112;
count__22730 = G__23113;
i__22731 = G__23114;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__22728);
if(temp__5804__auto__){
var seq__22728__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22728__$1)){
var c__5525__auto__ = cljs.core.chunk_first.call(null,seq__22728__$1);
var G__23115 = cljs.core.chunk_rest.call(null,seq__22728__$1);
var G__23116 = c__5525__auto__;
var G__23117 = cljs.core.count.call(null,c__5525__auto__);
var G__23118 = (0);
seq__22728 = G__23115;
chunk__22729 = G__23116;
count__22730 = G__23117;
i__22731 = G__23118;
continue;
} else {
var n = cljs.core.first.call(null,seq__22728__$1);
c3kit.wire.spec_helper.click_BANG_.call(null,["#index-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join(''));

var expected__20413__auto___23119 = "X";
var actual__20414__auto___23120 = c3kit.wire.spec_helper.text.call(null,["#index-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join(''));
if(cljs.core._EQ_.call(null,expected__20413__auto___23119,actual__20414__auto___23120)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__20413__auto___23119;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__20381__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__20381__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__20414__auto___23120;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__20381__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__20381__auto__);
}
})()," (using =)"].join('')));
}

cljs.core.reset_BANG_.call(null,tic_tac_toe.screens.play_spec.state,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"board","board",-1907017633),tic_tac_toe.screens.play_spec.board_3,new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"current-screen","current-screen",-1454713691),new cljs.core.Keyword(null,"play","play",-580418022),new cljs.core.Keyword(null,"mode","mode",654403691),(1)], null));


var G__23121 = cljs.core.next.call(null,seq__22728__$1);
var G__23122 = null;
var G__23123 = (0);
var G__23124 = (0);
seq__22728 = G__23121;
chunk__22729 = G__23122;
count__22730 = G__23123;
i__22731 = G__23124;
continue;
}
} else {
return null;
}
}
break;
}
});})(_STAR_parent_description_STAR__orig_val__22610_22973,_STAR_parent_description_STAR__temp_val__22611_22974,description__20276__auto____$1,_STAR_parent_description_STAR__orig_val__21397_22919,_STAR_parent_description_STAR__temp_val__21398_22920,description__20276__auto___22918))
,false),speclj.components.new_characteristic.call(null,"clicking button disables button",((function (_STAR_parent_description_STAR__orig_val__22610_22973,_STAR_parent_description_STAR__temp_val__22611_22974,description__20276__auto____$1,_STAR_parent_description_STAR__orig_val__21397_22919,_STAR_parent_description_STAR__temp_val__21398_22920,description__20276__auto___22918){
return (function (){
var seq__22732 = cljs.core.seq.call(null,cljs.core.range.call(null,(9)));
var chunk__22733 = null;
var count__22734 = (0);
var i__22735 = (0);
while(true){
if((i__22735 < count__22734)){
var n = cljs.core._nth.call(null,chunk__22733,i__22735);
c3kit.wire.spec_helper.click_BANG_.call(null,["#index-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join(''));

var expected__20413__auto___23125 = true;
var actual__20414__auto___23126 = c3kit.wire.spec_helper.disabled_QMARK_.call(null,["#index-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join(''));
if(cljs.core._EQ_.call(null,expected__20413__auto___23125,actual__20414__auto___23126)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__20413__auto___23125;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__20381__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__20381__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__20414__auto___23126;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__20381__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__20381__auto__);
}
})()," (using =)"].join('')));
}

cljs.core.reset_BANG_.call(null,tic_tac_toe.screens.play_spec.state,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"board","board",-1907017633),tic_tac_toe.screens.play_spec.board_3,new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"current-screen","current-screen",-1454713691),new cljs.core.Keyword(null,"play","play",-580418022),new cljs.core.Keyword(null,"mode","mode",654403691),(1)], null));


var G__23127 = seq__22732;
var G__23128 = chunk__22733;
var G__23129 = count__22734;
var G__23130 = (i__22735 + (1));
seq__22732 = G__23127;
chunk__22733 = G__23128;
count__22734 = G__23129;
i__22735 = G__23130;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__22732);
if(temp__5804__auto__){
var seq__22732__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22732__$1)){
var c__5525__auto__ = cljs.core.chunk_first.call(null,seq__22732__$1);
var G__23131 = cljs.core.chunk_rest.call(null,seq__22732__$1);
var G__23132 = c__5525__auto__;
var G__23133 = cljs.core.count.call(null,c__5525__auto__);
var G__23134 = (0);
seq__22732 = G__23131;
chunk__22733 = G__23132;
count__22734 = G__23133;
i__22735 = G__23134;
continue;
} else {
var n = cljs.core.first.call(null,seq__22732__$1);
c3kit.wire.spec_helper.click_BANG_.call(null,["#index-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join(''));

var expected__20413__auto___23135 = true;
var actual__20414__auto___23136 = c3kit.wire.spec_helper.disabled_QMARK_.call(null,["#index-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join(''));
if(cljs.core._EQ_.call(null,expected__20413__auto___23135,actual__20414__auto___23136)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__20413__auto___23135;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__20381__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__20381__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__20414__auto___23136;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__20381__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__20381__auto__);
}
})()," (using =)"].join('')));
}

cljs.core.reset_BANG_.call(null,tic_tac_toe.screens.play_spec.state,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"board","board",-1907017633),tic_tac_toe.screens.play_spec.board_3,new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"current-screen","current-screen",-1454713691),new cljs.core.Keyword(null,"play","play",-580418022),new cljs.core.Keyword(null,"mode","mode",654403691),(1)], null));


var G__23137 = cljs.core.next.call(null,seq__22732__$1);
var G__23138 = null;
var G__23139 = (0);
var G__23140 = (0);
seq__22732 = G__23137;
chunk__22733 = G__23138;
count__22734 = G__23139;
i__22735 = G__23140;
continue;
}
} else {
return null;
}
}
break;
}
});})(_STAR_parent_description_STAR__orig_val__22610_22973,_STAR_parent_description_STAR__temp_val__22611_22974,description__20276__auto____$1,_STAR_parent_description_STAR__orig_val__21397_22919,_STAR_parent_description_STAR__temp_val__21398_22920,description__20276__auto___22918))
,false),speclj.components.new_characteristic.call(null,"all buttons disabled when game-over",((function (_STAR_parent_description_STAR__orig_val__22610_22973,_STAR_parent_description_STAR__temp_val__22611_22974,description__20276__auto____$1,_STAR_parent_description_STAR__orig_val__21397_22919,_STAR_parent_description_STAR__temp_val__21398_22920,description__20276__auto___22918){
return (function (){
var seq__22736 = cljs.core.seq.call(null,cljs.core.range.call(null,(9)));
var chunk__22741 = null;
var count__22742 = (0);
var i__22743 = (0);
while(true){
if((i__22743 < count__22742)){
var n = cljs.core._nth.call(null,chunk__22741,i__22743);
var seq__22744_23141 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["X wins!","O wins!","It is a tie!"], null));
var chunk__22745_23142 = null;
var count__22746_23143 = (0);
var i__22747_23144 = (0);
while(true){
if((i__22747_23144 < count__22746_23143)){
var states_23145 = cljs.core._nth.call(null,chunk__22745_23142,i__22747_23144);
cljs.core.swap_BANG_.call(null,tic_tac_toe.screens.play_spec.state,cljs.core.assoc,new cljs.core.Keyword(null,"game-state","game-state",935682735),states_23145);

c3kit.wire.spec_helper.render.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tic_tac_toe.render_screen.render_screen,tic_tac_toe.screens.play_spec.state], null));

var expected__20413__auto___23146 = true;
var actual__20414__auto___23147 = c3kit.wire.spec_helper.disabled_QMARK_.call(null,["#index-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join(''));
if(cljs.core._EQ_.call(null,expected__20413__auto___23146,actual__20414__auto___23147)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__20413__auto___23146;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__20381__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__20381__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__20414__auto___23147;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__20381__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__20381__auto__);
}
})()," (using =)"].join('')));
}

cljs.core.reset_BANG_.call(null,tic_tac_toe.screens.play_spec.state,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"board","board",-1907017633),tic_tac_toe.screens.play_spec.board_3,new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"current-screen","current-screen",-1454713691),new cljs.core.Keyword(null,"play","play",-580418022),new cljs.core.Keyword(null,"mode","mode",654403691),(1)], null));


var G__23148 = seq__22744_23141;
var G__23149 = chunk__22745_23142;
var G__23150 = count__22746_23143;
var G__23151 = (i__22747_23144 + (1));
seq__22744_23141 = G__23148;
chunk__22745_23142 = G__23149;
count__22746_23143 = G__23150;
i__22747_23144 = G__23151;
continue;
} else {
var temp__5804__auto___23152 = cljs.core.seq.call(null,seq__22744_23141);
if(temp__5804__auto___23152){
var seq__22744_23153__$1 = temp__5804__auto___23152;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22744_23153__$1)){
var c__5525__auto___23154 = cljs.core.chunk_first.call(null,seq__22744_23153__$1);
var G__23155 = cljs.core.chunk_rest.call(null,seq__22744_23153__$1);
var G__23156 = c__5525__auto___23154;
var G__23157 = cljs.core.count.call(null,c__5525__auto___23154);
var G__23158 = (0);
seq__22744_23141 = G__23155;
chunk__22745_23142 = G__23156;
count__22746_23143 = G__23157;
i__22747_23144 = G__23158;
continue;
} else {
var states_23159 = cljs.core.first.call(null,seq__22744_23153__$1);
cljs.core.swap_BANG_.call(null,tic_tac_toe.screens.play_spec.state,cljs.core.assoc,new cljs.core.Keyword(null,"game-state","game-state",935682735),states_23159);

c3kit.wire.spec_helper.render.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tic_tac_toe.render_screen.render_screen,tic_tac_toe.screens.play_spec.state], null));

var expected__20413__auto___23160 = true;
var actual__20414__auto___23161 = c3kit.wire.spec_helper.disabled_QMARK_.call(null,["#index-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join(''));
if(cljs.core._EQ_.call(null,expected__20413__auto___23160,actual__20414__auto___23161)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__20413__auto___23160;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__20381__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__20381__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__20414__auto___23161;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__20381__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__20381__auto__);
}
})()," (using =)"].join('')));
}

cljs.core.reset_BANG_.call(null,tic_tac_toe.screens.play_spec.state,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"board","board",-1907017633),tic_tac_toe.screens.play_spec.board_3,new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"current-screen","current-screen",-1454713691),new cljs.core.Keyword(null,"play","play",-580418022),new cljs.core.Keyword(null,"mode","mode",654403691),(1)], null));


var G__23162 = cljs.core.next.call(null,seq__22744_23153__$1);
var G__23163 = null;
var G__23164 = (0);
var G__23165 = (0);
seq__22744_23141 = G__23162;
chunk__22745_23142 = G__23163;
count__22746_23143 = G__23164;
i__22747_23144 = G__23165;
continue;
}
} else {
}
}
break;
}

var G__23166 = seq__22736;
var G__23167 = chunk__22741;
var G__23168 = count__22742;
var G__23169 = (i__22743 + (1));
seq__22736 = G__23166;
chunk__22741 = G__23167;
count__22742 = G__23168;
i__22743 = G__23169;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__22736);
if(temp__5804__auto__){
var seq__22736__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22736__$1)){
var c__5525__auto__ = cljs.core.chunk_first.call(null,seq__22736__$1);
var G__23170 = cljs.core.chunk_rest.call(null,seq__22736__$1);
var G__23171 = c__5525__auto__;
var G__23172 = cljs.core.count.call(null,c__5525__auto__);
var G__23173 = (0);
seq__22736 = G__23170;
chunk__22741 = G__23171;
count__22742 = G__23172;
i__22743 = G__23173;
continue;
} else {
var n = cljs.core.first.call(null,seq__22736__$1);
var seq__22737_23174 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["X wins!","O wins!","It is a tie!"], null));
var chunk__22738_23175 = null;
var count__22739_23176 = (0);
var i__22740_23177 = (0);
while(true){
if((i__22740_23177 < count__22739_23176)){
var states_23178 = cljs.core._nth.call(null,chunk__22738_23175,i__22740_23177);
cljs.core.swap_BANG_.call(null,tic_tac_toe.screens.play_spec.state,cljs.core.assoc,new cljs.core.Keyword(null,"game-state","game-state",935682735),states_23178);

c3kit.wire.spec_helper.render.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tic_tac_toe.render_screen.render_screen,tic_tac_toe.screens.play_spec.state], null));

var expected__20413__auto___23179 = true;
var actual__20414__auto___23180 = c3kit.wire.spec_helper.disabled_QMARK_.call(null,["#index-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join(''));
if(cljs.core._EQ_.call(null,expected__20413__auto___23179,actual__20414__auto___23180)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__20413__auto___23179;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__20381__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__20381__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__20414__auto___23180;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__20381__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__20381__auto__);
}
})()," (using =)"].join('')));
}

cljs.core.reset_BANG_.call(null,tic_tac_toe.screens.play_spec.state,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"board","board",-1907017633),tic_tac_toe.screens.play_spec.board_3,new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"current-screen","current-screen",-1454713691),new cljs.core.Keyword(null,"play","play",-580418022),new cljs.core.Keyword(null,"mode","mode",654403691),(1)], null));


var G__23181 = seq__22737_23174;
var G__23182 = chunk__22738_23175;
var G__23183 = count__22739_23176;
var G__23184 = (i__22740_23177 + (1));
seq__22737_23174 = G__23181;
chunk__22738_23175 = G__23182;
count__22739_23176 = G__23183;
i__22740_23177 = G__23184;
continue;
} else {
var temp__5804__auto___23185__$1 = cljs.core.seq.call(null,seq__22737_23174);
if(temp__5804__auto___23185__$1){
var seq__22737_23186__$1 = temp__5804__auto___23185__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22737_23186__$1)){
var c__5525__auto___23187 = cljs.core.chunk_first.call(null,seq__22737_23186__$1);
var G__23188 = cljs.core.chunk_rest.call(null,seq__22737_23186__$1);
var G__23189 = c__5525__auto___23187;
var G__23190 = cljs.core.count.call(null,c__5525__auto___23187);
var G__23191 = (0);
seq__22737_23174 = G__23188;
chunk__22738_23175 = G__23189;
count__22739_23176 = G__23190;
i__22740_23177 = G__23191;
continue;
} else {
var states_23192 = cljs.core.first.call(null,seq__22737_23186__$1);
cljs.core.swap_BANG_.call(null,tic_tac_toe.screens.play_spec.state,cljs.core.assoc,new cljs.core.Keyword(null,"game-state","game-state",935682735),states_23192);

c3kit.wire.spec_helper.render.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tic_tac_toe.render_screen.render_screen,tic_tac_toe.screens.play_spec.state], null));

var expected__20413__auto___23193 = true;
var actual__20414__auto___23194 = c3kit.wire.spec_helper.disabled_QMARK_.call(null,["#index-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join(''));
if(cljs.core._EQ_.call(null,expected__20413__auto___23193,actual__20414__auto___23194)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__20413__auto___23193;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__20381__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__20381__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__20414__auto___23194;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__20381__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__20381__auto__);
}
})()," (using =)"].join('')));
}

cljs.core.reset_BANG_.call(null,tic_tac_toe.screens.play_spec.state,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"board","board",-1907017633),tic_tac_toe.screens.play_spec.board_3,new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"current-screen","current-screen",-1454713691),new cljs.core.Keyword(null,"play","play",-580418022),new cljs.core.Keyword(null,"mode","mode",654403691),(1)], null));


var G__23195 = cljs.core.next.call(null,seq__22737_23186__$1);
var G__23196 = null;
var G__23197 = (0);
var G__23198 = (0);
seq__22737_23174 = G__23195;
chunk__22738_23175 = G__23196;
count__22739_23176 = G__23197;
i__22740_23177 = G__23198;
continue;
}
} else {
}
}
break;
}

var G__23199 = cljs.core.next.call(null,seq__22736__$1);
var G__23200 = null;
var G__23201 = (0);
var G__23202 = (0);
seq__22736 = G__23199;
chunk__22741 = G__23200;
count__22742 = G__23201;
i__22743 = G__23202;
continue;
}
} else {
return null;
}
}
break;
}
});})(_STAR_parent_description_STAR__orig_val__22610_22973,_STAR_parent_description_STAR__temp_val__22611_22974,description__20276__auto____$1,_STAR_parent_description_STAR__orig_val__21397_22919,_STAR_parent_description_STAR__temp_val__21398_22920,description__20276__auto___22918))
,false),speclj.components.new_characteristic.call(null,"clicking button triggers AI if mode 2 or 3",((function (_STAR_parent_description_STAR__orig_val__22610_22973,_STAR_parent_description_STAR__temp_val__22611_22974,description__20276__auto____$1,_STAR_parent_description_STAR__orig_val__21397_22919,_STAR_parent_description_STAR__temp_val__21398_22920,description__20276__auto___22918){
return (function (){
var seq__22748 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(3)], null));
var chunk__22761 = null;
var count__22762 = (0);
var i__22763 = (0);
while(true){
if((i__22763 < count__22762)){
var ai = cljs.core._nth.call(null,chunk__22761,i__22763);
var seq__22764_23203 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(3)], null));
var chunk__22769_23204 = null;
var count__22770_23205 = (0);
var i__22771_23206 = (0);
while(true){
if((i__22771_23206 < count__22770_23205)){
var mode_23207 = cljs.core._nth.call(null,chunk__22769_23204,i__22771_23206);
var seq__22772_23208 = cljs.core.seq.call(null,cljs.core.range.call(null,(9)));
var chunk__22773_23209 = null;
var count__22774_23210 = (0);
var i__22775_23211 = (0);
while(true){
if((i__22775_23211 < count__22774_23210)){
var n_23212 = cljs.core._nth.call(null,chunk__22773_23209,i__22775_23211);
cljs.core.swap_BANG_.call(null,tic_tac_toe.screens.play_spec.state,cljs.core.assoc,new cljs.core.Keyword(null,"mode","mode",654403691),mode_23207,new cljs.core.Keyword(null,"first-ai-level","first-ai-level",1004633644),ai,new cljs.core.Keyword(null,"player","player",-97687400),((cljs.core._EQ_.call(null,(2),mode_23207))?new cljs.core.Keyword(null,"x","x",2099068185):new cljs.core.Keyword(null,"o","o",-1350007228)),new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"gui","gui",604532813));

c3kit.wire.spec_helper.render.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tic_tac_toe.render_screen.render_screen,tic_tac_toe.screens.play_spec.state], null));

c3kit.wire.spec_helper.click_BANG_.call(null,["#index-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n_23212)].join(''));

var expected__20437__auto___23213 = cljs.core.assoc.call(null,tic_tac_toe.screens.play_spec.board_3,n_23212,new cljs.core.Keyword(null,"x","x",2099068185));
var actual__20438__auto___23214 = new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.screens.play_spec.state));
if(cljs.core._EQ_.call(null,expected__20437__auto___23213,actual__20438__auto___23214)){
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__20437__auto___23213;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__20381__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__20381__auto__);
}
})(),speclj.platform.endl,"not to =: ",(function (){var temp__5806__auto__ = actual__20438__auto___23214;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__20381__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__20381__auto__);
}
})()].join('')));
} else {
}

var expected__20413__auto___23215 = ((cljs.core._EQ_.call(null,(2),mode_23207))?new cljs.core.Keyword(null,"x","x",2099068185):new cljs.core.Keyword(null,"o","o",-1350007228));
var actual__20414__auto___23216 = new cljs.core.Keyword(null,"player","player",-97687400).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.screens.play_spec.state));
if(cljs.core._EQ_.call(null,expected__20413__auto___23215,actual__20414__auto___23216)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__20413__auto___23215;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__20381__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__20381__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__20414__auto___23216;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__20381__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__20381__auto__);
}
})()," (using =)"].join('')));
}

cljs.core.reset_BANG_.call(null,tic_tac_toe.screens.play_spec.state,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"board","board",-1907017633),tic_tac_toe.screens.play_spec.board_3,new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"current-screen","current-screen",-1454713691),new cljs.core.Keyword(null,"play","play",-580418022)], null));


var G__23217 = seq__22772_23208;
var G__23218 = chunk__22773_23209;
var G__23219 = count__22774_23210;
var G__23220 = (i__22775_23211 + (1));
seq__22772_23208 = G__23217;
chunk__22773_23209 = G__23218;
count__22774_23210 = G__23219;
i__22775_23211 = G__23220;
continue;
} else {
var temp__5804__auto___23221 = cljs.core.seq.call(null,seq__22772_23208);
if(temp__5804__auto___23221){
var seq__22772_23222__$1 = temp__5804__auto___23221;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22772_23222__$1)){
var c__5525__auto___23223 = cljs.core.chunk_first.call(null,seq__22772_23222__$1);
var G__23224 = cljs.core.chunk_rest.call(null,seq__22772_23222__$1);
var G__23225 = c__5525__auto___23223;
var G__23226 = cljs.core.count.call(null,c__5525__auto___23223);
var G__23227 = (0);
seq__22772_23208 = G__23224;
chunk__22773_23209 = G__23225;
count__22774_23210 = G__23226;
i__22775_23211 = G__23227;
continue;
} else {
var n_23228 = cljs.core.first.call(null,seq__22772_23222__$1);
cljs.core.swap_BANG_.call(null,tic_tac_toe.screens.play_spec.state,cljs.core.assoc,new cljs.core.Keyword(null,"mode","mode",654403691),mode_23207,new cljs.core.Keyword(null,"first-ai-level","first-ai-level",1004633644),ai,new cljs.core.Keyword(null,"player","player",-97687400),((cljs.core._EQ_.call(null,(2),mode_23207))?new cljs.core.Keyword(null,"x","x",2099068185):new cljs.core.Keyword(null,"o","o",-1350007228)),new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"gui","gui",604532813));

c3kit.wire.spec_helper.render.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tic_tac_toe.render_screen.render_screen,tic_tac_toe.screens.play_spec.state], null));

c3kit.wire.spec_helper.click_BANG_.call(null,["#index-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n_23228)].join(''));

var expected__20437__auto___23229 = cljs.core.assoc.call(null,tic_tac_toe.screens.play_spec.board_3,n_23228,new cljs.core.Keyword(null,"x","x",2099068185));
var actual__20438__auto___23230 = new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.screens.play_spec.state));
if(cljs.core._EQ_.call(null,expected__20437__auto___23229,actual__20438__auto___23230)){
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__20437__auto___23229;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__20381__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__20381__auto__);
}
})(),speclj.platform.endl,"not to =: ",(function (){var temp__5806__auto__ = actual__20438__auto___23230;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__20381__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__20381__auto__);
}
})()].join('')));
} else {
}

var expected__20413__auto___23231 = ((cljs.core._EQ_.call(null,(2),mode_23207))?new cljs.core.Keyword(null,"x","x",2099068185):new cljs.core.Keyword(null,"o","o",-1350007228));
var actual__20414__auto___23232 = new cljs.core.Keyword(null,"player","player",-97687400).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.screens.play_spec.state));
if(cljs.core._EQ_.call(null,expected__20413__auto___23231,actual__20414__auto___23232)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__20413__auto___23231;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__20381__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__20381__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__20414__auto___23232;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__20381__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__20381__auto__);
}
})()," (using =)"].join('')));
}

cljs.core.reset_BANG_.call(null,tic_tac_toe.screens.play_spec.state,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"board","board",-1907017633),tic_tac_toe.screens.play_spec.board_3,new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"current-screen","current-screen",-1454713691),new cljs.core.Keyword(null,"play","play",-580418022)], null));


var G__23233 = cljs.core.next.call(null,seq__22772_23222__$1);
var G__23234 = null;
var G__23235 = (0);
var G__23236 = (0);
seq__22772_23208 = G__23233;
chunk__22773_23209 = G__23234;
count__22774_23210 = G__23235;
i__22775_23211 = G__23236;
continue;
}
} else {
}
}
break;
}

var G__23237 = seq__22764_23203;
var G__23238 = chunk__22769_23204;
var G__23239 = count__22770_23205;
var G__23240 = (i__22771_23206 + (1));
seq__22764_23203 = G__23237;
chunk__22769_23204 = G__23238;
count__22770_23205 = G__23239;
i__22771_23206 = G__23240;
continue;
} else {
var temp__5804__auto___23241 = cljs.core.seq.call(null,seq__22764_23203);
if(temp__5804__auto___23241){
var seq__22764_23242__$1 = temp__5804__auto___23241;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22764_23242__$1)){
var c__5525__auto___23243 = cljs.core.chunk_first.call(null,seq__22764_23242__$1);
var G__23244 = cljs.core.chunk_rest.call(null,seq__22764_23242__$1);
var G__23245 = c__5525__auto___23243;
var G__23246 = cljs.core.count.call(null,c__5525__auto___23243);
var G__23247 = (0);
seq__22764_23203 = G__23244;
chunk__22769_23204 = G__23245;
count__22770_23205 = G__23246;
i__22771_23206 = G__23247;
continue;
} else {
var mode_23248 = cljs.core.first.call(null,seq__22764_23242__$1);
var seq__22765_23249 = cljs.core.seq.call(null,cljs.core.range.call(null,(9)));
var chunk__22766_23250 = null;
var count__22767_23251 = (0);
var i__22768_23252 = (0);
while(true){
if((i__22768_23252 < count__22767_23251)){
var n_23253 = cljs.core._nth.call(null,chunk__22766_23250,i__22768_23252);
cljs.core.swap_BANG_.call(null,tic_tac_toe.screens.play_spec.state,cljs.core.assoc,new cljs.core.Keyword(null,"mode","mode",654403691),mode_23248,new cljs.core.Keyword(null,"first-ai-level","first-ai-level",1004633644),ai,new cljs.core.Keyword(null,"player","player",-97687400),((cljs.core._EQ_.call(null,(2),mode_23248))?new cljs.core.Keyword(null,"x","x",2099068185):new cljs.core.Keyword(null,"o","o",-1350007228)),new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"gui","gui",604532813));

c3kit.wire.spec_helper.render.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tic_tac_toe.render_screen.render_screen,tic_tac_toe.screens.play_spec.state], null));

c3kit.wire.spec_helper.click_BANG_.call(null,["#index-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n_23253)].join(''));

var expected__20437__auto___23254 = cljs.core.assoc.call(null,tic_tac_toe.screens.play_spec.board_3,n_23253,new cljs.core.Keyword(null,"x","x",2099068185));
var actual__20438__auto___23255 = new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.screens.play_spec.state));
if(cljs.core._EQ_.call(null,expected__20437__auto___23254,actual__20438__auto___23255)){
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__20437__auto___23254;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__20381__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__20381__auto__);
}
})(),speclj.platform.endl,"not to =: ",(function (){var temp__5806__auto__ = actual__20438__auto___23255;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__20381__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__20381__auto__);
}
})()].join('')));
} else {
}

var expected__20413__auto___23256 = ((cljs.core._EQ_.call(null,(2),mode_23248))?new cljs.core.Keyword(null,"x","x",2099068185):new cljs.core.Keyword(null,"o","o",-1350007228));
var actual__20414__auto___23257 = new cljs.core.Keyword(null,"player","player",-97687400).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.screens.play_spec.state));
if(cljs.core._EQ_.call(null,expected__20413__auto___23256,actual__20414__auto___23257)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__20413__auto___23256;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__20381__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__20381__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__20414__auto___23257;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__20381__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__20381__auto__);
}
})()," (using =)"].join('')));
}

cljs.core.reset_BANG_.call(null,tic_tac_toe.screens.play_spec.state,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"board","board",-1907017633),tic_tac_toe.screens.play_spec.board_3,new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"current-screen","current-screen",-1454713691),new cljs.core.Keyword(null,"play","play",-580418022)], null));


var G__23258 = seq__22765_23249;
var G__23259 = chunk__22766_23250;
var G__23260 = count__22767_23251;
var G__23261 = (i__22768_23252 + (1));
seq__22765_23249 = G__23258;
chunk__22766_23250 = G__23259;
count__22767_23251 = G__23260;
i__22768_23252 = G__23261;
continue;
} else {
var temp__5804__auto___23262__$1 = cljs.core.seq.call(null,seq__22765_23249);
if(temp__5804__auto___23262__$1){
var seq__22765_23263__$1 = temp__5804__auto___23262__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22765_23263__$1)){
var c__5525__auto___23264 = cljs.core.chunk_first.call(null,seq__22765_23263__$1);
var G__23265 = cljs.core.chunk_rest.call(null,seq__22765_23263__$1);
var G__23266 = c__5525__auto___23264;
var G__23267 = cljs.core.count.call(null,c__5525__auto___23264);
var G__23268 = (0);
seq__22765_23249 = G__23265;
chunk__22766_23250 = G__23266;
count__22767_23251 = G__23267;
i__22768_23252 = G__23268;
continue;
} else {
var n_23269 = cljs.core.first.call(null,seq__22765_23263__$1);
cljs.core.swap_BANG_.call(null,tic_tac_toe.screens.play_spec.state,cljs.core.assoc,new cljs.core.Keyword(null,"mode","mode",654403691),mode_23248,new cljs.core.Keyword(null,"first-ai-level","first-ai-level",1004633644),ai,new cljs.core.Keyword(null,"player","player",-97687400),((cljs.core._EQ_.call(null,(2),mode_23248))?new cljs.core.Keyword(null,"x","x",2099068185):new cljs.core.Keyword(null,"o","o",-1350007228)),new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"gui","gui",604532813));

c3kit.wire.spec_helper.render.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tic_tac_toe.render_screen.render_screen,tic_tac_toe.screens.play_spec.state], null));

c3kit.wire.spec_helper.click_BANG_.call(null,["#index-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n_23269)].join(''));

var expected__20437__auto___23270 = cljs.core.assoc.call(null,tic_tac_toe.screens.play_spec.board_3,n_23269,new cljs.core.Keyword(null,"x","x",2099068185));
var actual__20438__auto___23271 = new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.screens.play_spec.state));
if(cljs.core._EQ_.call(null,expected__20437__auto___23270,actual__20438__auto___23271)){
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__20437__auto___23270;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__20381__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__20381__auto__);
}
})(),speclj.platform.endl,"not to =: ",(function (){var temp__5806__auto__ = actual__20438__auto___23271;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__20381__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__20381__auto__);
}
})()].join('')));
} else {
}

var expected__20413__auto___23272 = ((cljs.core._EQ_.call(null,(2),mode_23248))?new cljs.core.Keyword(null,"x","x",2099068185):new cljs.core.Keyword(null,"o","o",-1350007228));
var actual__20414__auto___23273 = new cljs.core.Keyword(null,"player","player",-97687400).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.screens.play_spec.state));
if(cljs.core._EQ_.call(null,expected__20413__auto___23272,actual__20414__auto___23273)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__20413__auto___23272;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__20381__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__20381__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__20414__auto___23273;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__20381__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__20381__auto__);
}
})()," (using =)"].join('')));
}

cljs.core.reset_BANG_.call(null,tic_tac_toe.screens.play_spec.state,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"board","board",-1907017633),tic_tac_toe.screens.play_spec.board_3,new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"current-screen","current-screen",-1454713691),new cljs.core.Keyword(null,"play","play",-580418022)], null));


var G__23274 = cljs.core.next.call(null,seq__22765_23263__$1);
var G__23275 = null;
var G__23276 = (0);
var G__23277 = (0);
seq__22765_23249 = G__23274;
chunk__22766_23250 = G__23275;
count__22767_23251 = G__23276;
i__22768_23252 = G__23277;
continue;
}
} else {
}
}
break;
}

var G__23278 = cljs.core.next.call(null,seq__22764_23242__$1);
var G__23279 = null;
var G__23280 = (0);
var G__23281 = (0);
seq__22764_23203 = G__23278;
chunk__22769_23204 = G__23279;
count__22770_23205 = G__23280;
i__22771_23206 = G__23281;
continue;
}
} else {
}
}
break;
}

var G__23282 = seq__22748;
var G__23283 = chunk__22761;
var G__23284 = count__22762;
var G__23285 = (i__22763 + (1));
seq__22748 = G__23282;
chunk__22761 = G__23283;
count__22762 = G__23284;
i__22763 = G__23285;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__22748);
if(temp__5804__auto__){
var seq__22748__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22748__$1)){
var c__5525__auto__ = cljs.core.chunk_first.call(null,seq__22748__$1);
var G__23286 = cljs.core.chunk_rest.call(null,seq__22748__$1);
var G__23287 = c__5525__auto__;
var G__23288 = cljs.core.count.call(null,c__5525__auto__);
var G__23289 = (0);
seq__22748 = G__23286;
chunk__22761 = G__23287;
count__22762 = G__23288;
i__22763 = G__23289;
continue;
} else {
var ai = cljs.core.first.call(null,seq__22748__$1);
var seq__22749_23290 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(3)], null));
var chunk__22754_23291 = null;
var count__22755_23292 = (0);
var i__22756_23293 = (0);
while(true){
if((i__22756_23293 < count__22755_23292)){
var mode_23294 = cljs.core._nth.call(null,chunk__22754_23291,i__22756_23293);
var seq__22757_23295 = cljs.core.seq.call(null,cljs.core.range.call(null,(9)));
var chunk__22758_23296 = null;
var count__22759_23297 = (0);
var i__22760_23298 = (0);
while(true){
if((i__22760_23298 < count__22759_23297)){
var n_23299 = cljs.core._nth.call(null,chunk__22758_23296,i__22760_23298);
cljs.core.swap_BANG_.call(null,tic_tac_toe.screens.play_spec.state,cljs.core.assoc,new cljs.core.Keyword(null,"mode","mode",654403691),mode_23294,new cljs.core.Keyword(null,"first-ai-level","first-ai-level",1004633644),ai,new cljs.core.Keyword(null,"player","player",-97687400),((cljs.core._EQ_.call(null,(2),mode_23294))?new cljs.core.Keyword(null,"x","x",2099068185):new cljs.core.Keyword(null,"o","o",-1350007228)),new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"gui","gui",604532813));

c3kit.wire.spec_helper.render.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tic_tac_toe.render_screen.render_screen,tic_tac_toe.screens.play_spec.state], null));

c3kit.wire.spec_helper.click_BANG_.call(null,["#index-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n_23299)].join(''));

var expected__20437__auto___23300 = cljs.core.assoc.call(null,tic_tac_toe.screens.play_spec.board_3,n_23299,new cljs.core.Keyword(null,"x","x",2099068185));
var actual__20438__auto___23301 = new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.screens.play_spec.state));
if(cljs.core._EQ_.call(null,expected__20437__auto___23300,actual__20438__auto___23301)){
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__20437__auto___23300;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__20381__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__20381__auto__);
}
})(),speclj.platform.endl,"not to =: ",(function (){var temp__5806__auto__ = actual__20438__auto___23301;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__20381__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__20381__auto__);
}
})()].join('')));
} else {
}

var expected__20413__auto___23302 = ((cljs.core._EQ_.call(null,(2),mode_23294))?new cljs.core.Keyword(null,"x","x",2099068185):new cljs.core.Keyword(null,"o","o",-1350007228));
var actual__20414__auto___23303 = new cljs.core.Keyword(null,"player","player",-97687400).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.screens.play_spec.state));
if(cljs.core._EQ_.call(null,expected__20413__auto___23302,actual__20414__auto___23303)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__20413__auto___23302;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__20381__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__20381__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__20414__auto___23303;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__20381__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__20381__auto__);
}
})()," (using =)"].join('')));
}

cljs.core.reset_BANG_.call(null,tic_tac_toe.screens.play_spec.state,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"board","board",-1907017633),tic_tac_toe.screens.play_spec.board_3,new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"current-screen","current-screen",-1454713691),new cljs.core.Keyword(null,"play","play",-580418022)], null));


var G__23304 = seq__22757_23295;
var G__23305 = chunk__22758_23296;
var G__23306 = count__22759_23297;
var G__23307 = (i__22760_23298 + (1));
seq__22757_23295 = G__23304;
chunk__22758_23296 = G__23305;
count__22759_23297 = G__23306;
i__22760_23298 = G__23307;
continue;
} else {
var temp__5804__auto___23308__$1 = cljs.core.seq.call(null,seq__22757_23295);
if(temp__5804__auto___23308__$1){
var seq__22757_23309__$1 = temp__5804__auto___23308__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22757_23309__$1)){
var c__5525__auto___23310 = cljs.core.chunk_first.call(null,seq__22757_23309__$1);
var G__23311 = cljs.core.chunk_rest.call(null,seq__22757_23309__$1);
var G__23312 = c__5525__auto___23310;
var G__23313 = cljs.core.count.call(null,c__5525__auto___23310);
var G__23314 = (0);
seq__22757_23295 = G__23311;
chunk__22758_23296 = G__23312;
count__22759_23297 = G__23313;
i__22760_23298 = G__23314;
continue;
} else {
var n_23315 = cljs.core.first.call(null,seq__22757_23309__$1);
cljs.core.swap_BANG_.call(null,tic_tac_toe.screens.play_spec.state,cljs.core.assoc,new cljs.core.Keyword(null,"mode","mode",654403691),mode_23294,new cljs.core.Keyword(null,"first-ai-level","first-ai-level",1004633644),ai,new cljs.core.Keyword(null,"player","player",-97687400),((cljs.core._EQ_.call(null,(2),mode_23294))?new cljs.core.Keyword(null,"x","x",2099068185):new cljs.core.Keyword(null,"o","o",-1350007228)),new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"gui","gui",604532813));

c3kit.wire.spec_helper.render.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tic_tac_toe.render_screen.render_screen,tic_tac_toe.screens.play_spec.state], null));

c3kit.wire.spec_helper.click_BANG_.call(null,["#index-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n_23315)].join(''));

var expected__20437__auto___23316 = cljs.core.assoc.call(null,tic_tac_toe.screens.play_spec.board_3,n_23315,new cljs.core.Keyword(null,"x","x",2099068185));
var actual__20438__auto___23317 = new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.screens.play_spec.state));
if(cljs.core._EQ_.call(null,expected__20437__auto___23316,actual__20438__auto___23317)){
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__20437__auto___23316;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__20381__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__20381__auto__);
}
})(),speclj.platform.endl,"not to =: ",(function (){var temp__5806__auto__ = actual__20438__auto___23317;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__20381__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__20381__auto__);
}
})()].join('')));
} else {
}

var expected__20413__auto___23318 = ((cljs.core._EQ_.call(null,(2),mode_23294))?new cljs.core.Keyword(null,"x","x",2099068185):new cljs.core.Keyword(null,"o","o",-1350007228));
var actual__20414__auto___23319 = new cljs.core.Keyword(null,"player","player",-97687400).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.screens.play_spec.state));
if(cljs.core._EQ_.call(null,expected__20413__auto___23318,actual__20414__auto___23319)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__20413__auto___23318;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__20381__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__20381__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__20414__auto___23319;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__20381__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__20381__auto__);
}
})()," (using =)"].join('')));
}

cljs.core.reset_BANG_.call(null,tic_tac_toe.screens.play_spec.state,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"board","board",-1907017633),tic_tac_toe.screens.play_spec.board_3,new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"current-screen","current-screen",-1454713691),new cljs.core.Keyword(null,"play","play",-580418022)], null));


var G__23320 = cljs.core.next.call(null,seq__22757_23309__$1);
var G__23321 = null;
var G__23322 = (0);
var G__23323 = (0);
seq__22757_23295 = G__23320;
chunk__22758_23296 = G__23321;
count__22759_23297 = G__23322;
i__22760_23298 = G__23323;
continue;
}
} else {
}
}
break;
}

var G__23324 = seq__22749_23290;
var G__23325 = chunk__22754_23291;
var G__23326 = count__22755_23292;
var G__23327 = (i__22756_23293 + (1));
seq__22749_23290 = G__23324;
chunk__22754_23291 = G__23325;
count__22755_23292 = G__23326;
i__22756_23293 = G__23327;
continue;
} else {
var temp__5804__auto___23328__$1 = cljs.core.seq.call(null,seq__22749_23290);
if(temp__5804__auto___23328__$1){
var seq__22749_23329__$1 = temp__5804__auto___23328__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22749_23329__$1)){
var c__5525__auto___23330 = cljs.core.chunk_first.call(null,seq__22749_23329__$1);
var G__23331 = cljs.core.chunk_rest.call(null,seq__22749_23329__$1);
var G__23332 = c__5525__auto___23330;
var G__23333 = cljs.core.count.call(null,c__5525__auto___23330);
var G__23334 = (0);
seq__22749_23290 = G__23331;
chunk__22754_23291 = G__23332;
count__22755_23292 = G__23333;
i__22756_23293 = G__23334;
continue;
} else {
var mode_23335 = cljs.core.first.call(null,seq__22749_23329__$1);
var seq__22750_23336 = cljs.core.seq.call(null,cljs.core.range.call(null,(9)));
var chunk__22751_23337 = null;
var count__22752_23338 = (0);
var i__22753_23339 = (0);
while(true){
if((i__22753_23339 < count__22752_23338)){
var n_23340 = cljs.core._nth.call(null,chunk__22751_23337,i__22753_23339);
cljs.core.swap_BANG_.call(null,tic_tac_toe.screens.play_spec.state,cljs.core.assoc,new cljs.core.Keyword(null,"mode","mode",654403691),mode_23335,new cljs.core.Keyword(null,"first-ai-level","first-ai-level",1004633644),ai,new cljs.core.Keyword(null,"player","player",-97687400),((cljs.core._EQ_.call(null,(2),mode_23335))?new cljs.core.Keyword(null,"x","x",2099068185):new cljs.core.Keyword(null,"o","o",-1350007228)),new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"gui","gui",604532813));

c3kit.wire.spec_helper.render.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tic_tac_toe.render_screen.render_screen,tic_tac_toe.screens.play_spec.state], null));

c3kit.wire.spec_helper.click_BANG_.call(null,["#index-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n_23340)].join(''));

var expected__20437__auto___23341 = cljs.core.assoc.call(null,tic_tac_toe.screens.play_spec.board_3,n_23340,new cljs.core.Keyword(null,"x","x",2099068185));
var actual__20438__auto___23342 = new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.screens.play_spec.state));
if(cljs.core._EQ_.call(null,expected__20437__auto___23341,actual__20438__auto___23342)){
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__20437__auto___23341;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__20381__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__20381__auto__);
}
})(),speclj.platform.endl,"not to =: ",(function (){var temp__5806__auto__ = actual__20438__auto___23342;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__20381__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__20381__auto__);
}
})()].join('')));
} else {
}

var expected__20413__auto___23343 = ((cljs.core._EQ_.call(null,(2),mode_23335))?new cljs.core.Keyword(null,"x","x",2099068185):new cljs.core.Keyword(null,"o","o",-1350007228));
var actual__20414__auto___23344 = new cljs.core.Keyword(null,"player","player",-97687400).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.screens.play_spec.state));
if(cljs.core._EQ_.call(null,expected__20413__auto___23343,actual__20414__auto___23344)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__20413__auto___23343;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__20381__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__20381__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__20414__auto___23344;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__20381__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__20381__auto__);
}
})()," (using =)"].join('')));
}

cljs.core.reset_BANG_.call(null,tic_tac_toe.screens.play_spec.state,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"board","board",-1907017633),tic_tac_toe.screens.play_spec.board_3,new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"current-screen","current-screen",-1454713691),new cljs.core.Keyword(null,"play","play",-580418022)], null));


var G__23345 = seq__22750_23336;
var G__23346 = chunk__22751_23337;
var G__23347 = count__22752_23338;
var G__23348 = (i__22753_23339 + (1));
seq__22750_23336 = G__23345;
chunk__22751_23337 = G__23346;
count__22752_23338 = G__23347;
i__22753_23339 = G__23348;
continue;
} else {
var temp__5804__auto___23349__$2 = cljs.core.seq.call(null,seq__22750_23336);
if(temp__5804__auto___23349__$2){
var seq__22750_23350__$1 = temp__5804__auto___23349__$2;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22750_23350__$1)){
var c__5525__auto___23351 = cljs.core.chunk_first.call(null,seq__22750_23350__$1);
var G__23352 = cljs.core.chunk_rest.call(null,seq__22750_23350__$1);
var G__23353 = c__5525__auto___23351;
var G__23354 = cljs.core.count.call(null,c__5525__auto___23351);
var G__23355 = (0);
seq__22750_23336 = G__23352;
chunk__22751_23337 = G__23353;
count__22752_23338 = G__23354;
i__22753_23339 = G__23355;
continue;
} else {
var n_23356 = cljs.core.first.call(null,seq__22750_23350__$1);
cljs.core.swap_BANG_.call(null,tic_tac_toe.screens.play_spec.state,cljs.core.assoc,new cljs.core.Keyword(null,"mode","mode",654403691),mode_23335,new cljs.core.Keyword(null,"first-ai-level","first-ai-level",1004633644),ai,new cljs.core.Keyword(null,"player","player",-97687400),((cljs.core._EQ_.call(null,(2),mode_23335))?new cljs.core.Keyword(null,"x","x",2099068185):new cljs.core.Keyword(null,"o","o",-1350007228)),new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"gui","gui",604532813));

c3kit.wire.spec_helper.render.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tic_tac_toe.render_screen.render_screen,tic_tac_toe.screens.play_spec.state], null));

c3kit.wire.spec_helper.click_BANG_.call(null,["#index-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n_23356)].join(''));

var expected__20437__auto___23357 = cljs.core.assoc.call(null,tic_tac_toe.screens.play_spec.board_3,n_23356,new cljs.core.Keyword(null,"x","x",2099068185));
var actual__20438__auto___23358 = new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.screens.play_spec.state));
if(cljs.core._EQ_.call(null,expected__20437__auto___23357,actual__20438__auto___23358)){
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__20437__auto___23357;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__20381__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__20381__auto__);
}
})(),speclj.platform.endl,"not to =: ",(function (){var temp__5806__auto__ = actual__20438__auto___23358;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__20381__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__20381__auto__);
}
})()].join('')));
} else {
}

var expected__20413__auto___23359 = ((cljs.core._EQ_.call(null,(2),mode_23335))?new cljs.core.Keyword(null,"x","x",2099068185):new cljs.core.Keyword(null,"o","o",-1350007228));
var actual__20414__auto___23360 = new cljs.core.Keyword(null,"player","player",-97687400).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.screens.play_spec.state));
if(cljs.core._EQ_.call(null,expected__20413__auto___23359,actual__20414__auto___23360)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__20413__auto___23359;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__20381__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__20381__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__20414__auto___23360;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__20381__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__20381__auto__);
}
})()," (using =)"].join('')));
}

cljs.core.reset_BANG_.call(null,tic_tac_toe.screens.play_spec.state,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"board","board",-1907017633),tic_tac_toe.screens.play_spec.board_3,new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"current-screen","current-screen",-1454713691),new cljs.core.Keyword(null,"play","play",-580418022)], null));


var G__23361 = cljs.core.next.call(null,seq__22750_23350__$1);
var G__23362 = null;
var G__23363 = (0);
var G__23364 = (0);
seq__22750_23336 = G__23361;
chunk__22751_23337 = G__23362;
count__22752_23338 = G__23363;
i__22753_23339 = G__23364;
continue;
}
} else {
}
}
break;
}

var G__23365 = cljs.core.next.call(null,seq__22749_23329__$1);
var G__23366 = null;
var G__23367 = (0);
var G__23368 = (0);
seq__22749_23290 = G__23365;
chunk__22754_23291 = G__23366;
count__22755_23292 = G__23367;
i__22756_23293 = G__23368;
continue;
}
} else {
}
}
break;
}

var G__23369 = cljs.core.next.call(null,seq__22748__$1);
var G__23370 = null;
var G__23371 = (0);
var G__23372 = (0);
seq__22748 = G__23369;
chunk__22761 = G__23370;
count__22762 = G__23371;
i__22763 = G__23372;
continue;
}
} else {
return null;
}
}
break;
}
});})(_STAR_parent_description_STAR__orig_val__22610_22973,_STAR_parent_description_STAR__temp_val__22611_22974,description__20276__auto____$1,_STAR_parent_description_STAR__orig_val__21397_22919,_STAR_parent_description_STAR__temp_val__21398_22920,description__20276__auto___22918))
,false),speclj.components.new_characteristic.call(null,"AI is not triggered if game over",((function (_STAR_parent_description_STAR__orig_val__22610_22973,_STAR_parent_description_STAR__temp_val__22611_22974,description__20276__auto____$1,_STAR_parent_description_STAR__orig_val__21397_22919,_STAR_parent_description_STAR__temp_val__21398_22920,description__20276__auto___22918){
return (function (){
cljs.core.swap_BANG_.call(null,tic_tac_toe.screens.play_spec.state,cljs.core.assoc,new cljs.core.Keyword(null,"board","board",-1907017633),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"x","x",2099068185),(3),new cljs.core.Keyword(null,"o","o",-1350007228),new cljs.core.Keyword(null,"o","o",-1350007228),(6),(7),(8),(9)], null),new cljs.core.Keyword(null,"mode","mode",654403691),(2),new cljs.core.Keyword(null,"first-ai-level","first-ai-level",1004633644),(3));

c3kit.wire.spec_helper.click_BANG_.call(null,"#index-2");

var expected__20413__auto__ = new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"o","o",-1350007228),new cljs.core.Keyword(null,"o","o",-1350007228),(6),(7),(8),(9)], null);
var actual__20414__auto__ = new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.screens.play_spec.state));
if(cljs.core._EQ_.call(null,expected__20413__auto__,actual__20414__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__20413__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__20381__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__20381__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__20414__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__20381__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__20381__auto__);
}
})()," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__22610_22973,_STAR_parent_description_STAR__temp_val__22611_22974,description__20276__auto____$1,_STAR_parent_description_STAR__orig_val__21397_22919,_STAR_parent_description_STAR__temp_val__21398_22920,description__20276__auto___22918))
,false),speclj.components.new_characteristic.call(null,"AI updates game state",((function (_STAR_parent_description_STAR__orig_val__22610_22973,_STAR_parent_description_STAR__temp_val__22611_22974,description__20276__auto____$1,_STAR_parent_description_STAR__orig_val__21397_22919,_STAR_parent_description_STAR__temp_val__21398_22920,description__20276__auto___22918){
return (function (){
cljs.core.swap_BANG_.call(null,tic_tac_toe.screens.play_spec.state,cljs.core.assoc,new cljs.core.Keyword(null,"board","board",-1907017633),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"x","x",2099068185),(3),new cljs.core.Keyword(null,"o","o",-1350007228),new cljs.core.Keyword(null,"o","o",-1350007228),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"o","o",-1350007228),new cljs.core.Keyword(null,"o","o",-1350007228),(9)], null),new cljs.core.Keyword(null,"mode","mode",654403691),(2),new cljs.core.Keyword(null,"first-ai-level","first-ai-level",1004633644),(3));

c3kit.wire.spec_helper.click_BANG_.call(null,"#index-8");

var expected__20413__auto__ = "O wins!";
var actual__20414__auto__ = new cljs.core.Keyword(null,"game-state","game-state",935682735).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.screens.play_spec.state));
if(cljs.core._EQ_.call(null,expected__20413__auto__,actual__20414__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__20413__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__20381__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__20381__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__20414__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__20381__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__20381__auto__);
}
})()," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__22610_22973,_STAR_parent_description_STAR__temp_val__22611_22974,description__20276__auto____$1,_STAR_parent_description_STAR__orig_val__21397_22919,_STAR_parent_description_STAR__temp_val__21398_22920,description__20276__auto___22918))
,false),speclj.components.new_characteristic.call(null,"AI doesn't toggle human? to true if mode 4",((function (_STAR_parent_description_STAR__orig_val__22610_22973,_STAR_parent_description_STAR__temp_val__22611_22974,description__20276__auto____$1,_STAR_parent_description_STAR__orig_val__21397_22919,_STAR_parent_description_STAR__temp_val__21398_22920,description__20276__auto___22918){
return (function (){
cljs.core.swap_BANG_.call(null,tic_tac_toe.screens.play_spec.state,cljs.core.assoc,new cljs.core.Keyword(null,"mode","mode",654403691),(4),new cljs.core.Keyword(null,"human?","human?",-2017219054),false,new cljs.core.Keyword(null,"first-ai-level","first-ai-level",1004633644),(1),new cljs.core.Keyword(null,"second-ai-level","second-ai-level",-418730455),(3));

c3kit.wire.spec_helper.render.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tic_tac_toe.render_screen.render_screen,tic_tac_toe.screens.play_spec.state], null));

var expected__20413__auto__ = false;
var actual__20414__auto__ = new cljs.core.Keyword(null,"human?","human?",-2017219054).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.screens.play_spec.state));
if(cljs.core._EQ_.call(null,expected__20413__auto__,actual__20414__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__20413__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__20381__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__20381__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__20414__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__20381__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__20381__auto__);
}
})()," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__22610_22973,_STAR_parent_description_STAR__temp_val__22611_22974,description__20276__auto____$1,_STAR_parent_description_STAR__orig_val__21397_22919,_STAR_parent_description_STAR__temp_val__21398_22920,description__20276__auto___22918))
,false)],null)));
var chunk__22613_22976 = null;
var count__22614_22977 = (0);
var i__22615_22978 = (0);
while(true){
if((i__22615_22978 < count__22614_22977)){
var component__20277__auto___23373 = cljs.core._nth.call(null,chunk__22613_22976,i__22615_22978);
speclj.components.install.call(null,component__20277__auto___23373,description__20276__auto____$1);


var G__23374 = seq__22612_22975;
var G__23375 = chunk__22613_22976;
var G__23376 = count__22614_22977;
var G__23377 = (i__22615_22978 + (1));
seq__22612_22975 = G__23374;
chunk__22613_22976 = G__23375;
count__22614_22977 = G__23376;
i__22615_22978 = G__23377;
continue;
} else {
var temp__5804__auto___23378 = cljs.core.seq.call(null,seq__22612_22975);
if(temp__5804__auto___23378){
var seq__22612_23379__$1 = temp__5804__auto___23378;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22612_23379__$1)){
var c__5525__auto___23380 = cljs.core.chunk_first.call(null,seq__22612_23379__$1);
var G__23381 = cljs.core.chunk_rest.call(null,seq__22612_23379__$1);
var G__23382 = c__5525__auto___23380;
var G__23383 = cljs.core.count.call(null,c__5525__auto___23380);
var G__23384 = (0);
seq__22612_22975 = G__23381;
chunk__22613_22976 = G__23382;
count__22614_22977 = G__23383;
i__22615_22978 = G__23384;
continue;
} else {
var component__20277__auto___23385 = cljs.core.first.call(null,seq__22612_23379__$1);
speclj.components.install.call(null,component__20277__auto___23385,description__20276__auto____$1);


var G__23386 = cljs.core.next.call(null,seq__22612_23379__$1);
var G__23387 = null;
var G__23388 = (0);
var G__23389 = (0);
seq__22612_22975 = G__23386;
chunk__22613_22976 = G__23387;
count__22614_22977 = G__23388;
i__22615_22978 = G__23389;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__22610_22973);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__20276__auto____$1);
}

return description__20276__auto____$1;
})(),(function (){var description__20276__auto____$1 = speclj.components.new_description.call(null,"4x4",false,"tic-tac-toe.screens.play-spec");
var _STAR_parent_description_STAR__orig_val__22776_23390 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__22777_23391 = description__20276__auto____$1;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__22777_23391);

try{var seq__22778_23392 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,11,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_before.call(null,((function (_STAR_parent_description_STAR__orig_val__22776_23390,_STAR_parent_description_STAR__temp_val__22777_23391,description__20276__auto____$1,_STAR_parent_description_STAR__orig_val__21397_22919,_STAR_parent_description_STAR__temp_val__21398_22920,description__20276__auto___22918){
return (function (){
cljs.core.reset_BANG_.call(null,tic_tac_toe.screens.play_spec.state,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"current-screen","current-screen",-1454713691),new cljs.core.Keyword(null,"play","play",-580418022),new cljs.core.Keyword(null,"board","board",-1907017633),tic_tac_toe.screens.play_spec.board_4,new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"mode","mode",654403691),(1),new cljs.core.Keyword(null,"game-state","game-state",935682735),new cljs.core.Keyword(null,"in-progress","in-progress",2126442630),new cljs.core.Keyword(null,"human?","human?",-2017219054),true], null));

return c3kit.wire.spec_helper.render.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tic_tac_toe.render_screen.render_screen,tic_tac_toe.screens.play_spec.state], null));
});})(_STAR_parent_description_STAR__orig_val__22776_23390,_STAR_parent_description_STAR__temp_val__22777_23391,description__20276__auto____$1,_STAR_parent_description_STAR__orig_val__21397_22919,_STAR_parent_description_STAR__temp_val__21398_22920,description__20276__auto___22918))
),speclj.components.new_characteristic.call(null,"renders board",((function (_STAR_parent_description_STAR__orig_val__22776_23390,_STAR_parent_description_STAR__temp_val__22777_23391,description__20276__auto____$1,_STAR_parent_description_STAR__orig_val__21397_22919,_STAR_parent_description_STAR__temp_val__21398_22920,description__20276__auto___22918){
return (function (){
var expected__20413__auto___23396 = (16);
var actual__20414__auto___23397 = cljs.core.count.call(null,cljs.core.vec.call(null,c3kit.wire.js.query_selector_all.call(null,".board-square")));
if(cljs.core._EQ_.call(null,expected__20413__auto___23396,actual__20414__auto___23397)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__20413__auto___23396;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__20381__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__20381__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__20414__auto___23397;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__20381__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__20381__auto__);
}
})()," (using =)"].join('')));
}

var value__21320__auto___23398 = "#board-wrapper";
var node__21321__auto___23399 = c3kit.wire.spec_helper.select.call(null,value__21320__auto___23398);
if(cljs.core.truth_(node__21321__auto___23399)){
} else {
throw (new speclj.platform.SpecFailure(["Expected selector to find node: ",(function (){var temp__5806__auto__ = value__21320__auto___23398;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__20381__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__20381__auto__);
}
})()].join('')));
}

var value__21320__auto__ = ".four-grid";
var node__21321__auto__ = c3kit.wire.spec_helper.select.call(null,value__21320__auto__);
if(cljs.core.truth_(node__21321__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected selector to find node: ",(function (){var temp__5806__auto__ = value__21320__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__20381__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__20381__auto__);
}
})()].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__22776_23390,_STAR_parent_description_STAR__temp_val__22777_23391,description__20276__auto____$1,_STAR_parent_description_STAR__orig_val__21397_22919,_STAR_parent_description_STAR__temp_val__21398_22920,description__20276__auto___22918))
,false),speclj.components.new_characteristic.call(null,"buttons have IDs 0-15",((function (_STAR_parent_description_STAR__orig_val__22776_23390,_STAR_parent_description_STAR__temp_val__22777_23391,description__20276__auto____$1,_STAR_parent_description_STAR__orig_val__21397_22919,_STAR_parent_description_STAR__temp_val__21398_22920,description__20276__auto___22918){
return (function (){
var seq__22850 = cljs.core.seq.call(null,cljs.core.range.call(null,(16)));
var chunk__22851 = null;
var count__22852 = (0);
var i__22853 = (0);
while(true){
if((i__22853 < count__22852)){
var n = cljs.core._nth.call(null,chunk__22851,i__22853);
var value__21320__auto___23400 = ["#index-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join('');
var node__21321__auto___23401 = c3kit.wire.spec_helper.select.call(null,value__21320__auto___23400);
if(cljs.core.truth_(node__21321__auto___23401)){
} else {
throw (new speclj.platform.SpecFailure(["Expected selector to find node: ",(function (){var temp__5806__auto__ = value__21320__auto___23400;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__20381__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__20381__auto__);
}
})()].join('')));
}


var G__23402 = seq__22850;
var G__23403 = chunk__22851;
var G__23404 = count__22852;
var G__23405 = (i__22853 + (1));
seq__22850 = G__23402;
chunk__22851 = G__23403;
count__22852 = G__23404;
i__22853 = G__23405;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__22850);
if(temp__5804__auto__){
var seq__22850__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22850__$1)){
var c__5525__auto__ = cljs.core.chunk_first.call(null,seq__22850__$1);
var G__23406 = cljs.core.chunk_rest.call(null,seq__22850__$1);
var G__23407 = c__5525__auto__;
var G__23408 = cljs.core.count.call(null,c__5525__auto__);
var G__23409 = (0);
seq__22850 = G__23406;
chunk__22851 = G__23407;
count__22852 = G__23408;
i__22853 = G__23409;
continue;
} else {
var n = cljs.core.first.call(null,seq__22850__$1);
var value__21320__auto___23410 = ["#index-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join('');
var node__21321__auto___23411 = c3kit.wire.spec_helper.select.call(null,value__21320__auto___23410);
if(cljs.core.truth_(node__21321__auto___23411)){
} else {
throw (new speclj.platform.SpecFailure(["Expected selector to find node: ",(function (){var temp__5806__auto__ = value__21320__auto___23410;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__20381__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__20381__auto__);
}
})()].join('')));
}


var G__23412 = cljs.core.next.call(null,seq__22850__$1);
var G__23413 = null;
var G__23414 = (0);
var G__23415 = (0);
seq__22850 = G__23412;
chunk__22851 = G__23413;
count__22852 = G__23414;
i__22853 = G__23415;
continue;
}
} else {
return null;
}
}
break;
}
});})(_STAR_parent_description_STAR__orig_val__22776_23390,_STAR_parent_description_STAR__temp_val__22777_23391,description__20276__auto____$1,_STAR_parent_description_STAR__orig_val__21397_22919,_STAR_parent_description_STAR__temp_val__21398_22920,description__20276__auto___22918))
,false),speclj.components.new_characteristic.call(null,"clicking button updates board in state",((function (_STAR_parent_description_STAR__orig_val__22776_23390,_STAR_parent_description_STAR__temp_val__22777_23391,description__20276__auto____$1,_STAR_parent_description_STAR__orig_val__21397_22919,_STAR_parent_description_STAR__temp_val__21398_22920,description__20276__auto___22918){
return (function (){
var seq__22854 = cljs.core.seq.call(null,cljs.core.range.call(null,(16)));
var chunk__22855 = null;
var count__22856 = (0);
var i__22857 = (0);
while(true){
if((i__22857 < count__22856)){
var n = cljs.core._nth.call(null,chunk__22855,i__22857);
c3kit.wire.spec_helper.click_BANG_.call(null,["#index-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join(''));

var expected__20413__auto___23416 = cljs.core.assoc.call(null,tic_tac_toe.screens.play_spec.board_4,n,new cljs.core.Keyword(null,"x","x",2099068185));
var actual__20414__auto___23417 = new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.screens.play_spec.state));
if(cljs.core._EQ_.call(null,expected__20413__auto___23416,actual__20414__auto___23417)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__20413__auto___23416;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__20381__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__20381__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__20414__auto___23417;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__20381__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__20381__auto__);
}
})()," (using =)"].join('')));
}

cljs.core.swap_BANG_.call(null,tic_tac_toe.screens.play_spec.state,cljs.core.assoc,new cljs.core.Keyword(null,"board","board",-1907017633),tic_tac_toe.screens.play_spec.board_4,new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"x","x",2099068185));


var G__23418 = seq__22854;
var G__23419 = chunk__22855;
var G__23420 = count__22856;
var G__23421 = (i__22857 + (1));
seq__22854 = G__23418;
chunk__22855 = G__23419;
count__22856 = G__23420;
i__22857 = G__23421;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__22854);
if(temp__5804__auto__){
var seq__22854__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22854__$1)){
var c__5525__auto__ = cljs.core.chunk_first.call(null,seq__22854__$1);
var G__23422 = cljs.core.chunk_rest.call(null,seq__22854__$1);
var G__23423 = c__5525__auto__;
var G__23424 = cljs.core.count.call(null,c__5525__auto__);
var G__23425 = (0);
seq__22854 = G__23422;
chunk__22855 = G__23423;
count__22856 = G__23424;
i__22857 = G__23425;
continue;
} else {
var n = cljs.core.first.call(null,seq__22854__$1);
c3kit.wire.spec_helper.click_BANG_.call(null,["#index-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join(''));

var expected__20413__auto___23426 = cljs.core.assoc.call(null,tic_tac_toe.screens.play_spec.board_4,n,new cljs.core.Keyword(null,"x","x",2099068185));
var actual__20414__auto___23427 = new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.screens.play_spec.state));
if(cljs.core._EQ_.call(null,expected__20413__auto___23426,actual__20414__auto___23427)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__20413__auto___23426;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__20381__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__20381__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__20414__auto___23427;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__20381__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__20381__auto__);
}
})()," (using =)"].join('')));
}

cljs.core.swap_BANG_.call(null,tic_tac_toe.screens.play_spec.state,cljs.core.assoc,new cljs.core.Keyword(null,"board","board",-1907017633),tic_tac_toe.screens.play_spec.board_4,new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"x","x",2099068185));


var G__23428 = cljs.core.next.call(null,seq__22854__$1);
var G__23429 = null;
var G__23430 = (0);
var G__23431 = (0);
seq__22854 = G__23428;
chunk__22855 = G__23429;
count__22856 = G__23430;
i__22857 = G__23431;
continue;
}
} else {
return null;
}
}
break;
}
});})(_STAR_parent_description_STAR__orig_val__22776_23390,_STAR_parent_description_STAR__temp_val__22777_23391,description__20276__auto____$1,_STAR_parent_description_STAR__orig_val__21397_22919,_STAR_parent_description_STAR__temp_val__21398_22920,description__20276__auto___22918))
,false),speclj.components.new_characteristic.call(null,"clicking button swaps player in state",((function (_STAR_parent_description_STAR__orig_val__22776_23390,_STAR_parent_description_STAR__temp_val__22777_23391,description__20276__auto____$1,_STAR_parent_description_STAR__orig_val__21397_22919,_STAR_parent_description_STAR__temp_val__21398_22920,description__20276__auto___22918){
return (function (){
var seq__22858 = cljs.core.seq.call(null,cljs.core.range.call(null,(16)));
var chunk__22859 = null;
var count__22860 = (0);
var i__22861 = (0);
while(true){
if((i__22861 < count__22860)){
var n = cljs.core._nth.call(null,chunk__22859,i__22861);
c3kit.wire.spec_helper.click_BANG_.call(null,["#index-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join(''));

var expected__20413__auto___23432 = new cljs.core.Keyword(null,"o","o",-1350007228);
var actual__20414__auto___23433 = new cljs.core.Keyword(null,"player","player",-97687400).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.screens.play_spec.state));
if(cljs.core._EQ_.call(null,expected__20413__auto___23432,actual__20414__auto___23433)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__20413__auto___23432;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__20381__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__20381__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__20414__auto___23433;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__20381__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__20381__auto__);
}
})()," (using =)"].join('')));
}

cljs.core.swap_BANG_.call(null,tic_tac_toe.screens.play_spec.state,cljs.core.assoc,new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"board","board",-1907017633),tic_tac_toe.screens.play_spec.board_4);


var G__23434 = seq__22858;
var G__23435 = chunk__22859;
var G__23436 = count__22860;
var G__23437 = (i__22861 + (1));
seq__22858 = G__23434;
chunk__22859 = G__23435;
count__22860 = G__23436;
i__22861 = G__23437;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__22858);
if(temp__5804__auto__){
var seq__22858__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22858__$1)){
var c__5525__auto__ = cljs.core.chunk_first.call(null,seq__22858__$1);
var G__23438 = cljs.core.chunk_rest.call(null,seq__22858__$1);
var G__23439 = c__5525__auto__;
var G__23440 = cljs.core.count.call(null,c__5525__auto__);
var G__23441 = (0);
seq__22858 = G__23438;
chunk__22859 = G__23439;
count__22860 = G__23440;
i__22861 = G__23441;
continue;
} else {
var n = cljs.core.first.call(null,seq__22858__$1);
c3kit.wire.spec_helper.click_BANG_.call(null,["#index-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join(''));

var expected__20413__auto___23442 = new cljs.core.Keyword(null,"o","o",-1350007228);
var actual__20414__auto___23443 = new cljs.core.Keyword(null,"player","player",-97687400).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.screens.play_spec.state));
if(cljs.core._EQ_.call(null,expected__20413__auto___23442,actual__20414__auto___23443)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__20413__auto___23442;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__20381__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__20381__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__20414__auto___23443;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__20381__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__20381__auto__);
}
})()," (using =)"].join('')));
}

cljs.core.swap_BANG_.call(null,tic_tac_toe.screens.play_spec.state,cljs.core.assoc,new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"board","board",-1907017633),tic_tac_toe.screens.play_spec.board_4);


var G__23444 = cljs.core.next.call(null,seq__22858__$1);
var G__23445 = null;
var G__23446 = (0);
var G__23447 = (0);
seq__22858 = G__23444;
chunk__22859 = G__23445;
count__22860 = G__23446;
i__22861 = G__23447;
continue;
}
} else {
return null;
}
}
break;
}
});})(_STAR_parent_description_STAR__orig_val__22776_23390,_STAR_parent_description_STAR__temp_val__22777_23391,description__20276__auto____$1,_STAR_parent_description_STAR__orig_val__21397_22919,_STAR_parent_description_STAR__temp_val__21398_22920,description__20276__auto___22918))
,false),speclj.components.new_characteristic.call(null,"clicking button toggles human? to false if mode 2 or 3",((function (_STAR_parent_description_STAR__orig_val__22776_23390,_STAR_parent_description_STAR__temp_val__22777_23391,description__20276__auto____$1,_STAR_parent_description_STAR__orig_val__21397_22919,_STAR_parent_description_STAR__temp_val__21398_22920,description__20276__auto___22918){
return (function (){
var ai_turn_orig_val__22862 = tic_tac_toe.screens.play.ai_turn;
var ai_turn_temp_val__22863 = speclj.stub.stub.call(null,new cljs.core.Keyword(null,"ai-turn","ai-turn",-1581895352),cljs.core.PersistentArrayMap.EMPTY);
(tic_tac_toe.screens.play.ai_turn = ai_turn_temp_val__22863);

try{var seq__22864 = cljs.core.seq.call(null,cljs.core.range.call(null,(16)));
var chunk__22869 = null;
var count__22870 = (0);
var i__22871 = (0);
while(true){
if((i__22871 < count__22870)){
var n = cljs.core._nth.call(null,chunk__22869,i__22871);
var seq__22872_23448 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(3)], null));
var chunk__22873_23449 = null;
var count__22874_23450 = (0);
var i__22875_23451 = (0);
while(true){
if((i__22875_23451 < count__22874_23450)){
var mode_23452 = cljs.core._nth.call(null,chunk__22873_23449,i__22875_23451);
cljs.core.swap_BANG_.call(null,tic_tac_toe.screens.play_spec.state,cljs.core.assoc,new cljs.core.Keyword(null,"mode","mode",654403691),mode_23452);

c3kit.wire.spec_helper.render.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tic_tac_toe.render_screen.render_screen,tic_tac_toe.screens.play_spec.state], null));

c3kit.wire.spec_helper.click_BANG_.call(null,["#index-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join(''));

var expected__20413__auto___23453 = false;
var actual__20414__auto___23454 = new cljs.core.Keyword(null,"human?","human?",-2017219054).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.screens.play_spec.state));
if(cljs.core._EQ_.call(null,expected__20413__auto___23453,actual__20414__auto___23454)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__20413__auto___23453;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__20381__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__20381__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__20414__auto___23454;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__20381__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__20381__auto__);
}
})()," (using =)"].join('')));
}

cljs.core.swap_BANG_.call(null,tic_tac_toe.screens.play_spec.state,cljs.core.assoc,new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"board","board",-1907017633),tic_tac_toe.screens.play_spec.board_4);


var G__23455 = seq__22872_23448;
var G__23456 = chunk__22873_23449;
var G__23457 = count__22874_23450;
var G__23458 = (i__22875_23451 + (1));
seq__22872_23448 = G__23455;
chunk__22873_23449 = G__23456;
count__22874_23450 = G__23457;
i__22875_23451 = G__23458;
continue;
} else {
var temp__5804__auto___23459 = cljs.core.seq.call(null,seq__22872_23448);
if(temp__5804__auto___23459){
var seq__22872_23460__$1 = temp__5804__auto___23459;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22872_23460__$1)){
var c__5525__auto___23461 = cljs.core.chunk_first.call(null,seq__22872_23460__$1);
var G__23462 = cljs.core.chunk_rest.call(null,seq__22872_23460__$1);
var G__23463 = c__5525__auto___23461;
var G__23464 = cljs.core.count.call(null,c__5525__auto___23461);
var G__23465 = (0);
seq__22872_23448 = G__23462;
chunk__22873_23449 = G__23463;
count__22874_23450 = G__23464;
i__22875_23451 = G__23465;
continue;
} else {
var mode_23466 = cljs.core.first.call(null,seq__22872_23460__$1);
cljs.core.swap_BANG_.call(null,tic_tac_toe.screens.play_spec.state,cljs.core.assoc,new cljs.core.Keyword(null,"mode","mode",654403691),mode_23466);

c3kit.wire.spec_helper.render.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tic_tac_toe.render_screen.render_screen,tic_tac_toe.screens.play_spec.state], null));

c3kit.wire.spec_helper.click_BANG_.call(null,["#index-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join(''));

var expected__20413__auto___23467 = false;
var actual__20414__auto___23468 = new cljs.core.Keyword(null,"human?","human?",-2017219054).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.screens.play_spec.state));
if(cljs.core._EQ_.call(null,expected__20413__auto___23467,actual__20414__auto___23468)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__20413__auto___23467;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__20381__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__20381__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__20414__auto___23468;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__20381__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__20381__auto__);
}
})()," (using =)"].join('')));
}

cljs.core.swap_BANG_.call(null,tic_tac_toe.screens.play_spec.state,cljs.core.assoc,new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"board","board",-1907017633),tic_tac_toe.screens.play_spec.board_4);


var G__23469 = cljs.core.next.call(null,seq__22872_23460__$1);
var G__23470 = null;
var G__23471 = (0);
var G__23472 = (0);
seq__22872_23448 = G__23469;
chunk__22873_23449 = G__23470;
count__22874_23450 = G__23471;
i__22875_23451 = G__23472;
continue;
}
} else {
}
}
break;
}

var G__23473 = seq__22864;
var G__23474 = chunk__22869;
var G__23475 = count__22870;
var G__23476 = (i__22871 + (1));
seq__22864 = G__23473;
chunk__22869 = G__23474;
count__22870 = G__23475;
i__22871 = G__23476;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__22864);
if(temp__5804__auto__){
var seq__22864__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22864__$1)){
var c__5525__auto__ = cljs.core.chunk_first.call(null,seq__22864__$1);
var G__23477 = cljs.core.chunk_rest.call(null,seq__22864__$1);
var G__23478 = c__5525__auto__;
var G__23479 = cljs.core.count.call(null,c__5525__auto__);
var G__23480 = (0);
seq__22864 = G__23477;
chunk__22869 = G__23478;
count__22870 = G__23479;
i__22871 = G__23480;
continue;
} else {
var n = cljs.core.first.call(null,seq__22864__$1);
var seq__22865_23481 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(3)], null));
var chunk__22866_23482 = null;
var count__22867_23483 = (0);
var i__22868_23484 = (0);
while(true){
if((i__22868_23484 < count__22867_23483)){
var mode_23485 = cljs.core._nth.call(null,chunk__22866_23482,i__22868_23484);
cljs.core.swap_BANG_.call(null,tic_tac_toe.screens.play_spec.state,cljs.core.assoc,new cljs.core.Keyword(null,"mode","mode",654403691),mode_23485);

c3kit.wire.spec_helper.render.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tic_tac_toe.render_screen.render_screen,tic_tac_toe.screens.play_spec.state], null));

c3kit.wire.spec_helper.click_BANG_.call(null,["#index-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join(''));

var expected__20413__auto___23486 = false;
var actual__20414__auto___23487 = new cljs.core.Keyword(null,"human?","human?",-2017219054).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.screens.play_spec.state));
if(cljs.core._EQ_.call(null,expected__20413__auto___23486,actual__20414__auto___23487)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__20413__auto___23486;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__20381__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__20381__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__20414__auto___23487;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__20381__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__20381__auto__);
}
})()," (using =)"].join('')));
}

cljs.core.swap_BANG_.call(null,tic_tac_toe.screens.play_spec.state,cljs.core.assoc,new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"board","board",-1907017633),tic_tac_toe.screens.play_spec.board_4);


var G__23488 = seq__22865_23481;
var G__23489 = chunk__22866_23482;
var G__23490 = count__22867_23483;
var G__23491 = (i__22868_23484 + (1));
seq__22865_23481 = G__23488;
chunk__22866_23482 = G__23489;
count__22867_23483 = G__23490;
i__22868_23484 = G__23491;
continue;
} else {
var temp__5804__auto___23492__$1 = cljs.core.seq.call(null,seq__22865_23481);
if(temp__5804__auto___23492__$1){
var seq__22865_23493__$1 = temp__5804__auto___23492__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22865_23493__$1)){
var c__5525__auto___23494 = cljs.core.chunk_first.call(null,seq__22865_23493__$1);
var G__23495 = cljs.core.chunk_rest.call(null,seq__22865_23493__$1);
var G__23496 = c__5525__auto___23494;
var G__23497 = cljs.core.count.call(null,c__5525__auto___23494);
var G__23498 = (0);
seq__22865_23481 = G__23495;
chunk__22866_23482 = G__23496;
count__22867_23483 = G__23497;
i__22868_23484 = G__23498;
continue;
} else {
var mode_23499 = cljs.core.first.call(null,seq__22865_23493__$1);
cljs.core.swap_BANG_.call(null,tic_tac_toe.screens.play_spec.state,cljs.core.assoc,new cljs.core.Keyword(null,"mode","mode",654403691),mode_23499);

c3kit.wire.spec_helper.render.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tic_tac_toe.render_screen.render_screen,tic_tac_toe.screens.play_spec.state], null));

c3kit.wire.spec_helper.click_BANG_.call(null,["#index-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join(''));

var expected__20413__auto___23500 = false;
var actual__20414__auto___23501 = new cljs.core.Keyword(null,"human?","human?",-2017219054).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.screens.play_spec.state));
if(cljs.core._EQ_.call(null,expected__20413__auto___23500,actual__20414__auto___23501)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__20413__auto___23500;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__20381__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__20381__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__20414__auto___23501;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__20381__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__20381__auto__);
}
})()," (using =)"].join('')));
}

cljs.core.swap_BANG_.call(null,tic_tac_toe.screens.play_spec.state,cljs.core.assoc,new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"board","board",-1907017633),tic_tac_toe.screens.play_spec.board_4);


var G__23502 = cljs.core.next.call(null,seq__22865_23493__$1);
var G__23503 = null;
var G__23504 = (0);
var G__23505 = (0);
seq__22865_23481 = G__23502;
chunk__22866_23482 = G__23503;
count__22867_23483 = G__23504;
i__22868_23484 = G__23505;
continue;
}
} else {
}
}
break;
}

var G__23506 = cljs.core.next.call(null,seq__22864__$1);
var G__23507 = null;
var G__23508 = (0);
var G__23509 = (0);
seq__22864 = G__23506;
chunk__22869 = G__23507;
count__22870 = G__23508;
i__22871 = G__23509;
continue;
}
} else {
return null;
}
}
break;
}
}finally {(tic_tac_toe.screens.play.ai_turn = ai_turn_orig_val__22862);
}});})(_STAR_parent_description_STAR__orig_val__22776_23390,_STAR_parent_description_STAR__temp_val__22777_23391,description__20276__auto____$1,_STAR_parent_description_STAR__orig_val__21397_22919,_STAR_parent_description_STAR__temp_val__21398_22920,description__20276__auto___22918))
,false),speclj.components.new_characteristic.call(null,"clicking button does not toggle human if mode 1",((function (_STAR_parent_description_STAR__orig_val__22776_23390,_STAR_parent_description_STAR__temp_val__22777_23391,description__20276__auto____$1,_STAR_parent_description_STAR__orig_val__21397_22919,_STAR_parent_description_STAR__temp_val__21398_22920,description__20276__auto___22918){
return (function (){
var ai_turn_orig_val__22876 = tic_tac_toe.screens.play.ai_turn;
var ai_turn_temp_val__22877 = speclj.stub.stub.call(null,new cljs.core.Keyword(null,"ai-turn","ai-turn",-1581895352),cljs.core.PersistentArrayMap.EMPTY);
(tic_tac_toe.screens.play.ai_turn = ai_turn_temp_val__22877);

try{var seq__22878 = cljs.core.seq.call(null,cljs.core.range.call(null,(16)));
var chunk__22879 = null;
var count__22880 = (0);
var i__22881 = (0);
while(true){
if((i__22881 < count__22880)){
var n = cljs.core._nth.call(null,chunk__22879,i__22881);
c3kit.wire.spec_helper.click_BANG_.call(null,["#index-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join(''));

var expected__20413__auto___23510 = true;
var actual__20414__auto___23511 = new cljs.core.Keyword(null,"human?","human?",-2017219054).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.screens.play_spec.state));
if(cljs.core._EQ_.call(null,expected__20413__auto___23510,actual__20414__auto___23511)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__20413__auto___23510;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__20381__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__20381__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__20414__auto___23511;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__20381__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__20381__auto__);
}
})()," (using =)"].join('')));
}

cljs.core.swap_BANG_.call(null,tic_tac_toe.screens.play_spec.state,cljs.core.assoc,new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"board","board",-1907017633),tic_tac_toe.screens.play_spec.board_4);


var G__23512 = seq__22878;
var G__23513 = chunk__22879;
var G__23514 = count__22880;
var G__23515 = (i__22881 + (1));
seq__22878 = G__23512;
chunk__22879 = G__23513;
count__22880 = G__23514;
i__22881 = G__23515;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__22878);
if(temp__5804__auto__){
var seq__22878__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22878__$1)){
var c__5525__auto__ = cljs.core.chunk_first.call(null,seq__22878__$1);
var G__23516 = cljs.core.chunk_rest.call(null,seq__22878__$1);
var G__23517 = c__5525__auto__;
var G__23518 = cljs.core.count.call(null,c__5525__auto__);
var G__23519 = (0);
seq__22878 = G__23516;
chunk__22879 = G__23517;
count__22880 = G__23518;
i__22881 = G__23519;
continue;
} else {
var n = cljs.core.first.call(null,seq__22878__$1);
c3kit.wire.spec_helper.click_BANG_.call(null,["#index-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join(''));

var expected__20413__auto___23520 = true;
var actual__20414__auto___23521 = new cljs.core.Keyword(null,"human?","human?",-2017219054).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.screens.play_spec.state));
if(cljs.core._EQ_.call(null,expected__20413__auto___23520,actual__20414__auto___23521)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__20413__auto___23520;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__20381__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__20381__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__20414__auto___23521;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__20381__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__20381__auto__);
}
})()," (using =)"].join('')));
}

cljs.core.swap_BANG_.call(null,tic_tac_toe.screens.play_spec.state,cljs.core.assoc,new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"board","board",-1907017633),tic_tac_toe.screens.play_spec.board_4);


var G__23522 = cljs.core.next.call(null,seq__22878__$1);
var G__23523 = null;
var G__23524 = (0);
var G__23525 = (0);
seq__22878 = G__23522;
chunk__22879 = G__23523;
count__22880 = G__23524;
i__22881 = G__23525;
continue;
}
} else {
return null;
}
}
break;
}
}finally {(tic_tac_toe.screens.play.ai_turn = ai_turn_orig_val__22876);
}});})(_STAR_parent_description_STAR__orig_val__22776_23390,_STAR_parent_description_STAR__temp_val__22777_23391,description__20276__auto____$1,_STAR_parent_description_STAR__orig_val__21397_22919,_STAR_parent_description_STAR__temp_val__21398_22920,description__20276__auto___22918))
,false),speclj.components.new_characteristic.call(null,"clicking button adds token to button HTML",((function (_STAR_parent_description_STAR__orig_val__22776_23390,_STAR_parent_description_STAR__temp_val__22777_23391,description__20276__auto____$1,_STAR_parent_description_STAR__orig_val__21397_22919,_STAR_parent_description_STAR__temp_val__21398_22920,description__20276__auto___22918){
return (function (){
var seq__22882 = cljs.core.seq.call(null,cljs.core.range.call(null,(16)));
var chunk__22883 = null;
var count__22884 = (0);
var i__22885 = (0);
while(true){
if((i__22885 < count__22884)){
var n = cljs.core._nth.call(null,chunk__22883,i__22885);
c3kit.wire.spec_helper.click_BANG_.call(null,["#index-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join(''));

var expected__20413__auto___23526 = "X";
var actual__20414__auto___23527 = c3kit.wire.spec_helper.text.call(null,["#index-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join(''));
if(cljs.core._EQ_.call(null,expected__20413__auto___23526,actual__20414__auto___23527)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__20413__auto___23526;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__20381__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__20381__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__20414__auto___23527;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__20381__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__20381__auto__);
}
})()," (using =)"].join('')));
}

cljs.core.reset_BANG_.call(null,tic_tac_toe.screens.play_spec.state,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"board","board",-1907017633),tic_tac_toe.screens.play_spec.board_4,new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"current-screen","current-screen",-1454713691),new cljs.core.Keyword(null,"play","play",-580418022),new cljs.core.Keyword(null,"mode","mode",654403691),(1)], null));


var G__23528 = seq__22882;
var G__23529 = chunk__22883;
var G__23530 = count__22884;
var G__23531 = (i__22885 + (1));
seq__22882 = G__23528;
chunk__22883 = G__23529;
count__22884 = G__23530;
i__22885 = G__23531;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__22882);
if(temp__5804__auto__){
var seq__22882__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22882__$1)){
var c__5525__auto__ = cljs.core.chunk_first.call(null,seq__22882__$1);
var G__23532 = cljs.core.chunk_rest.call(null,seq__22882__$1);
var G__23533 = c__5525__auto__;
var G__23534 = cljs.core.count.call(null,c__5525__auto__);
var G__23535 = (0);
seq__22882 = G__23532;
chunk__22883 = G__23533;
count__22884 = G__23534;
i__22885 = G__23535;
continue;
} else {
var n = cljs.core.first.call(null,seq__22882__$1);
c3kit.wire.spec_helper.click_BANG_.call(null,["#index-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join(''));

var expected__20413__auto___23536 = "X";
var actual__20414__auto___23537 = c3kit.wire.spec_helper.text.call(null,["#index-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join(''));
if(cljs.core._EQ_.call(null,expected__20413__auto___23536,actual__20414__auto___23537)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__20413__auto___23536;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__20381__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__20381__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__20414__auto___23537;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__20381__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__20381__auto__);
}
})()," (using =)"].join('')));
}

cljs.core.reset_BANG_.call(null,tic_tac_toe.screens.play_spec.state,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"board","board",-1907017633),tic_tac_toe.screens.play_spec.board_4,new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"current-screen","current-screen",-1454713691),new cljs.core.Keyword(null,"play","play",-580418022),new cljs.core.Keyword(null,"mode","mode",654403691),(1)], null));


var G__23538 = cljs.core.next.call(null,seq__22882__$1);
var G__23539 = null;
var G__23540 = (0);
var G__23541 = (0);
seq__22882 = G__23538;
chunk__22883 = G__23539;
count__22884 = G__23540;
i__22885 = G__23541;
continue;
}
} else {
return null;
}
}
break;
}
});})(_STAR_parent_description_STAR__orig_val__22776_23390,_STAR_parent_description_STAR__temp_val__22777_23391,description__20276__auto____$1,_STAR_parent_description_STAR__orig_val__21397_22919,_STAR_parent_description_STAR__temp_val__21398_22920,description__20276__auto___22918))
,false),speclj.components.new_characteristic.call(null,"clicking button disables button",((function (_STAR_parent_description_STAR__orig_val__22776_23390,_STAR_parent_description_STAR__temp_val__22777_23391,description__20276__auto____$1,_STAR_parent_description_STAR__orig_val__21397_22919,_STAR_parent_description_STAR__temp_val__21398_22920,description__20276__auto___22918){
return (function (){
var seq__22886 = cljs.core.seq.call(null,cljs.core.range.call(null,(16)));
var chunk__22887 = null;
var count__22888 = (0);
var i__22889 = (0);
while(true){
if((i__22889 < count__22888)){
var n = cljs.core._nth.call(null,chunk__22887,i__22889);
c3kit.wire.spec_helper.click_BANG_.call(null,["#index-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join(''));

var expected__20413__auto___23542 = true;
var actual__20414__auto___23543 = c3kit.wire.spec_helper.disabled_QMARK_.call(null,["#index-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join(''));
if(cljs.core._EQ_.call(null,expected__20413__auto___23542,actual__20414__auto___23543)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__20413__auto___23542;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__20381__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__20381__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__20414__auto___23543;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__20381__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__20381__auto__);
}
})()," (using =)"].join('')));
}

cljs.core.reset_BANG_.call(null,tic_tac_toe.screens.play_spec.state,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"board","board",-1907017633),tic_tac_toe.screens.play_spec.board_4,new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"current-screen","current-screen",-1454713691),new cljs.core.Keyword(null,"play","play",-580418022),new cljs.core.Keyword(null,"mode","mode",654403691),(1)], null));


var G__23544 = seq__22886;
var G__23545 = chunk__22887;
var G__23546 = count__22888;
var G__23547 = (i__22889 + (1));
seq__22886 = G__23544;
chunk__22887 = G__23545;
count__22888 = G__23546;
i__22889 = G__23547;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__22886);
if(temp__5804__auto__){
var seq__22886__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22886__$1)){
var c__5525__auto__ = cljs.core.chunk_first.call(null,seq__22886__$1);
var G__23548 = cljs.core.chunk_rest.call(null,seq__22886__$1);
var G__23549 = c__5525__auto__;
var G__23550 = cljs.core.count.call(null,c__5525__auto__);
var G__23551 = (0);
seq__22886 = G__23548;
chunk__22887 = G__23549;
count__22888 = G__23550;
i__22889 = G__23551;
continue;
} else {
var n = cljs.core.first.call(null,seq__22886__$1);
c3kit.wire.spec_helper.click_BANG_.call(null,["#index-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join(''));

var expected__20413__auto___23552 = true;
var actual__20414__auto___23553 = c3kit.wire.spec_helper.disabled_QMARK_.call(null,["#index-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join(''));
if(cljs.core._EQ_.call(null,expected__20413__auto___23552,actual__20414__auto___23553)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__20413__auto___23552;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__20381__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__20381__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__20414__auto___23553;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__20381__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__20381__auto__);
}
})()," (using =)"].join('')));
}

cljs.core.reset_BANG_.call(null,tic_tac_toe.screens.play_spec.state,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"board","board",-1907017633),tic_tac_toe.screens.play_spec.board_4,new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"current-screen","current-screen",-1454713691),new cljs.core.Keyword(null,"play","play",-580418022),new cljs.core.Keyword(null,"mode","mode",654403691),(1)], null));


var G__23554 = cljs.core.next.call(null,seq__22886__$1);
var G__23555 = null;
var G__23556 = (0);
var G__23557 = (0);
seq__22886 = G__23554;
chunk__22887 = G__23555;
count__22888 = G__23556;
i__22889 = G__23557;
continue;
}
} else {
return null;
}
}
break;
}
});})(_STAR_parent_description_STAR__orig_val__22776_23390,_STAR_parent_description_STAR__temp_val__22777_23391,description__20276__auto____$1,_STAR_parent_description_STAR__orig_val__21397_22919,_STAR_parent_description_STAR__temp_val__21398_22920,description__20276__auto___22918))
,false),speclj.components.new_characteristic.call(null,"clicking button triggers AI if mode 2 or 3",((function (_STAR_parent_description_STAR__orig_val__22776_23390,_STAR_parent_description_STAR__temp_val__22777_23391,description__20276__auto____$1,_STAR_parent_description_STAR__orig_val__21397_22919,_STAR_parent_description_STAR__temp_val__21398_22920,description__20276__auto___22918){
return (function (){
var seq__22890 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(3)], null));
var chunk__22903 = null;
var count__22904 = (0);
var i__22905 = (0);
while(true){
if((i__22905 < count__22904)){
var ai = cljs.core._nth.call(null,chunk__22903,i__22905);
var seq__22906_23558 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(3)], null));
var chunk__22911_23559 = null;
var count__22912_23560 = (0);
var i__22913_23561 = (0);
while(true){
if((i__22913_23561 < count__22912_23560)){
var mode_23562 = cljs.core._nth.call(null,chunk__22911_23559,i__22913_23561);
var seq__22914_23563 = cljs.core.seq.call(null,cljs.core.range.call(null,(16)));
var chunk__22915_23564 = null;
var count__22916_23565 = (0);
var i__22917_23566 = (0);
while(true){
if((i__22917_23566 < count__22916_23565)){
var n_23567 = cljs.core._nth.call(null,chunk__22915_23564,i__22917_23566);
cljs.core.swap_BANG_.call(null,tic_tac_toe.screens.play_spec.state,cljs.core.assoc,new cljs.core.Keyword(null,"mode","mode",654403691),mode_23562,new cljs.core.Keyword(null,"first-ai-level","first-ai-level",1004633644),ai,new cljs.core.Keyword(null,"player","player",-97687400),((cljs.core._EQ_.call(null,(2),mode_23562))?new cljs.core.Keyword(null,"x","x",2099068185):new cljs.core.Keyword(null,"o","o",-1350007228)),new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"gui","gui",604532813));

c3kit.wire.spec_helper.render.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tic_tac_toe.render_screen.render_screen,tic_tac_toe.screens.play_spec.state], null));

c3kit.wire.spec_helper.click_BANG_.call(null,["#index-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n_23567)].join(''));

var expected__20437__auto___23568 = cljs.core.assoc.call(null,tic_tac_toe.screens.play_spec.board_4,n_23567,new cljs.core.Keyword(null,"x","x",2099068185));
var actual__20438__auto___23569 = new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.screens.play_spec.state));
if(cljs.core._EQ_.call(null,expected__20437__auto___23568,actual__20438__auto___23569)){
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__20437__auto___23568;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__20381__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__20381__auto__);
}
})(),speclj.platform.endl,"not to =: ",(function (){var temp__5806__auto__ = actual__20438__auto___23569;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__20381__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__20381__auto__);
}
})()].join('')));
} else {
}

var expected__20413__auto___23570 = ((cljs.core._EQ_.call(null,(2),mode_23562))?new cljs.core.Keyword(null,"x","x",2099068185):new cljs.core.Keyword(null,"o","o",-1350007228));
var actual__20414__auto___23571 = new cljs.core.Keyword(null,"player","player",-97687400).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.screens.play_spec.state));
if(cljs.core._EQ_.call(null,expected__20413__auto___23570,actual__20414__auto___23571)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__20413__auto___23570;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__20381__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__20381__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__20414__auto___23571;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__20381__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__20381__auto__);
}
})()," (using =)"].join('')));
}

cljs.core.reset_BANG_.call(null,tic_tac_toe.screens.play_spec.state,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"board","board",-1907017633),tic_tac_toe.screens.play_spec.board_4,new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"current-screen","current-screen",-1454713691),new cljs.core.Keyword(null,"play","play",-580418022)], null));


var G__23572 = seq__22914_23563;
var G__23573 = chunk__22915_23564;
var G__23574 = count__22916_23565;
var G__23575 = (i__22917_23566 + (1));
seq__22914_23563 = G__23572;
chunk__22915_23564 = G__23573;
count__22916_23565 = G__23574;
i__22917_23566 = G__23575;
continue;
} else {
var temp__5804__auto___23576 = cljs.core.seq.call(null,seq__22914_23563);
if(temp__5804__auto___23576){
var seq__22914_23577__$1 = temp__5804__auto___23576;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22914_23577__$1)){
var c__5525__auto___23578 = cljs.core.chunk_first.call(null,seq__22914_23577__$1);
var G__23579 = cljs.core.chunk_rest.call(null,seq__22914_23577__$1);
var G__23580 = c__5525__auto___23578;
var G__23581 = cljs.core.count.call(null,c__5525__auto___23578);
var G__23582 = (0);
seq__22914_23563 = G__23579;
chunk__22915_23564 = G__23580;
count__22916_23565 = G__23581;
i__22917_23566 = G__23582;
continue;
} else {
var n_23583 = cljs.core.first.call(null,seq__22914_23577__$1);
cljs.core.swap_BANG_.call(null,tic_tac_toe.screens.play_spec.state,cljs.core.assoc,new cljs.core.Keyword(null,"mode","mode",654403691),mode_23562,new cljs.core.Keyword(null,"first-ai-level","first-ai-level",1004633644),ai,new cljs.core.Keyword(null,"player","player",-97687400),((cljs.core._EQ_.call(null,(2),mode_23562))?new cljs.core.Keyword(null,"x","x",2099068185):new cljs.core.Keyword(null,"o","o",-1350007228)),new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"gui","gui",604532813));

c3kit.wire.spec_helper.render.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tic_tac_toe.render_screen.render_screen,tic_tac_toe.screens.play_spec.state], null));

c3kit.wire.spec_helper.click_BANG_.call(null,["#index-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n_23583)].join(''));

var expected__20437__auto___23584 = cljs.core.assoc.call(null,tic_tac_toe.screens.play_spec.board_4,n_23583,new cljs.core.Keyword(null,"x","x",2099068185));
var actual__20438__auto___23585 = new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.screens.play_spec.state));
if(cljs.core._EQ_.call(null,expected__20437__auto___23584,actual__20438__auto___23585)){
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__20437__auto___23584;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__20381__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__20381__auto__);
}
})(),speclj.platform.endl,"not to =: ",(function (){var temp__5806__auto__ = actual__20438__auto___23585;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__20381__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__20381__auto__);
}
})()].join('')));
} else {
}

var expected__20413__auto___23586 = ((cljs.core._EQ_.call(null,(2),mode_23562))?new cljs.core.Keyword(null,"x","x",2099068185):new cljs.core.Keyword(null,"o","o",-1350007228));
var actual__20414__auto___23587 = new cljs.core.Keyword(null,"player","player",-97687400).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.screens.play_spec.state));
if(cljs.core._EQ_.call(null,expected__20413__auto___23586,actual__20414__auto___23587)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__20413__auto___23586;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__20381__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__20381__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__20414__auto___23587;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__20381__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__20381__auto__);
}
})()," (using =)"].join('')));
}

cljs.core.reset_BANG_.call(null,tic_tac_toe.screens.play_spec.state,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"board","board",-1907017633),tic_tac_toe.screens.play_spec.board_4,new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"current-screen","current-screen",-1454713691),new cljs.core.Keyword(null,"play","play",-580418022)], null));


var G__23588 = cljs.core.next.call(null,seq__22914_23577__$1);
var G__23589 = null;
var G__23590 = (0);
var G__23591 = (0);
seq__22914_23563 = G__23588;
chunk__22915_23564 = G__23589;
count__22916_23565 = G__23590;
i__22917_23566 = G__23591;
continue;
}
} else {
}
}
break;
}

var G__23592 = seq__22906_23558;
var G__23593 = chunk__22911_23559;
var G__23594 = count__22912_23560;
var G__23595 = (i__22913_23561 + (1));
seq__22906_23558 = G__23592;
chunk__22911_23559 = G__23593;
count__22912_23560 = G__23594;
i__22913_23561 = G__23595;
continue;
} else {
var temp__5804__auto___23596 = cljs.core.seq.call(null,seq__22906_23558);
if(temp__5804__auto___23596){
var seq__22906_23597__$1 = temp__5804__auto___23596;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22906_23597__$1)){
var c__5525__auto___23598 = cljs.core.chunk_first.call(null,seq__22906_23597__$1);
var G__23599 = cljs.core.chunk_rest.call(null,seq__22906_23597__$1);
var G__23600 = c__5525__auto___23598;
var G__23601 = cljs.core.count.call(null,c__5525__auto___23598);
var G__23602 = (0);
seq__22906_23558 = G__23599;
chunk__22911_23559 = G__23600;
count__22912_23560 = G__23601;
i__22913_23561 = G__23602;
continue;
} else {
var mode_23603 = cljs.core.first.call(null,seq__22906_23597__$1);
var seq__22907_23604 = cljs.core.seq.call(null,cljs.core.range.call(null,(16)));
var chunk__22908_23605 = null;
var count__22909_23606 = (0);
var i__22910_23607 = (0);
while(true){
if((i__22910_23607 < count__22909_23606)){
var n_23608 = cljs.core._nth.call(null,chunk__22908_23605,i__22910_23607);
cljs.core.swap_BANG_.call(null,tic_tac_toe.screens.play_spec.state,cljs.core.assoc,new cljs.core.Keyword(null,"mode","mode",654403691),mode_23603,new cljs.core.Keyword(null,"first-ai-level","first-ai-level",1004633644),ai,new cljs.core.Keyword(null,"player","player",-97687400),((cljs.core._EQ_.call(null,(2),mode_23603))?new cljs.core.Keyword(null,"x","x",2099068185):new cljs.core.Keyword(null,"o","o",-1350007228)),new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"gui","gui",604532813));

c3kit.wire.spec_helper.render.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tic_tac_toe.render_screen.render_screen,tic_tac_toe.screens.play_spec.state], null));

c3kit.wire.spec_helper.click_BANG_.call(null,["#index-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n_23608)].join(''));

var expected__20437__auto___23609 = cljs.core.assoc.call(null,tic_tac_toe.screens.play_spec.board_4,n_23608,new cljs.core.Keyword(null,"x","x",2099068185));
var actual__20438__auto___23610 = new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.screens.play_spec.state));
if(cljs.core._EQ_.call(null,expected__20437__auto___23609,actual__20438__auto___23610)){
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__20437__auto___23609;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__20381__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__20381__auto__);
}
})(),speclj.platform.endl,"not to =: ",(function (){var temp__5806__auto__ = actual__20438__auto___23610;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__20381__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__20381__auto__);
}
})()].join('')));
} else {
}

var expected__20413__auto___23611 = ((cljs.core._EQ_.call(null,(2),mode_23603))?new cljs.core.Keyword(null,"x","x",2099068185):new cljs.core.Keyword(null,"o","o",-1350007228));
var actual__20414__auto___23612 = new cljs.core.Keyword(null,"player","player",-97687400).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.screens.play_spec.state));
if(cljs.core._EQ_.call(null,expected__20413__auto___23611,actual__20414__auto___23612)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__20413__auto___23611;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__20381__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__20381__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__20414__auto___23612;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__20381__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__20381__auto__);
}
})()," (using =)"].join('')));
}

cljs.core.reset_BANG_.call(null,tic_tac_toe.screens.play_spec.state,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"board","board",-1907017633),tic_tac_toe.screens.play_spec.board_4,new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"current-screen","current-screen",-1454713691),new cljs.core.Keyword(null,"play","play",-580418022)], null));


var G__23613 = seq__22907_23604;
var G__23614 = chunk__22908_23605;
var G__23615 = count__22909_23606;
var G__23616 = (i__22910_23607 + (1));
seq__22907_23604 = G__23613;
chunk__22908_23605 = G__23614;
count__22909_23606 = G__23615;
i__22910_23607 = G__23616;
continue;
} else {
var temp__5804__auto___23617__$1 = cljs.core.seq.call(null,seq__22907_23604);
if(temp__5804__auto___23617__$1){
var seq__22907_23618__$1 = temp__5804__auto___23617__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22907_23618__$1)){
var c__5525__auto___23619 = cljs.core.chunk_first.call(null,seq__22907_23618__$1);
var G__23620 = cljs.core.chunk_rest.call(null,seq__22907_23618__$1);
var G__23621 = c__5525__auto___23619;
var G__23622 = cljs.core.count.call(null,c__5525__auto___23619);
var G__23623 = (0);
seq__22907_23604 = G__23620;
chunk__22908_23605 = G__23621;
count__22909_23606 = G__23622;
i__22910_23607 = G__23623;
continue;
} else {
var n_23624 = cljs.core.first.call(null,seq__22907_23618__$1);
cljs.core.swap_BANG_.call(null,tic_tac_toe.screens.play_spec.state,cljs.core.assoc,new cljs.core.Keyword(null,"mode","mode",654403691),mode_23603,new cljs.core.Keyword(null,"first-ai-level","first-ai-level",1004633644),ai,new cljs.core.Keyword(null,"player","player",-97687400),((cljs.core._EQ_.call(null,(2),mode_23603))?new cljs.core.Keyword(null,"x","x",2099068185):new cljs.core.Keyword(null,"o","o",-1350007228)),new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"gui","gui",604532813));

c3kit.wire.spec_helper.render.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tic_tac_toe.render_screen.render_screen,tic_tac_toe.screens.play_spec.state], null));

c3kit.wire.spec_helper.click_BANG_.call(null,["#index-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n_23624)].join(''));

var expected__20437__auto___23625 = cljs.core.assoc.call(null,tic_tac_toe.screens.play_spec.board_4,n_23624,new cljs.core.Keyword(null,"x","x",2099068185));
var actual__20438__auto___23626 = new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.screens.play_spec.state));
if(cljs.core._EQ_.call(null,expected__20437__auto___23625,actual__20438__auto___23626)){
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__20437__auto___23625;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__20381__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__20381__auto__);
}
})(),speclj.platform.endl,"not to =: ",(function (){var temp__5806__auto__ = actual__20438__auto___23626;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__20381__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__20381__auto__);
}
})()].join('')));
} else {
}

var expected__20413__auto___23627 = ((cljs.core._EQ_.call(null,(2),mode_23603))?new cljs.core.Keyword(null,"x","x",2099068185):new cljs.core.Keyword(null,"o","o",-1350007228));
var actual__20414__auto___23628 = new cljs.core.Keyword(null,"player","player",-97687400).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.screens.play_spec.state));
if(cljs.core._EQ_.call(null,expected__20413__auto___23627,actual__20414__auto___23628)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__20413__auto___23627;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__20381__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__20381__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__20414__auto___23628;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__20381__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__20381__auto__);
}
})()," (using =)"].join('')));
}

cljs.core.reset_BANG_.call(null,tic_tac_toe.screens.play_spec.state,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"board","board",-1907017633),tic_tac_toe.screens.play_spec.board_4,new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"current-screen","current-screen",-1454713691),new cljs.core.Keyword(null,"play","play",-580418022)], null));


var G__23629 = cljs.core.next.call(null,seq__22907_23618__$1);
var G__23630 = null;
var G__23631 = (0);
var G__23632 = (0);
seq__22907_23604 = G__23629;
chunk__22908_23605 = G__23630;
count__22909_23606 = G__23631;
i__22910_23607 = G__23632;
continue;
}
} else {
}
}
break;
}

var G__23633 = cljs.core.next.call(null,seq__22906_23597__$1);
var G__23634 = null;
var G__23635 = (0);
var G__23636 = (0);
seq__22906_23558 = G__23633;
chunk__22911_23559 = G__23634;
count__22912_23560 = G__23635;
i__22913_23561 = G__23636;
continue;
}
} else {
}
}
break;
}

var G__23637 = seq__22890;
var G__23638 = chunk__22903;
var G__23639 = count__22904;
var G__23640 = (i__22905 + (1));
seq__22890 = G__23637;
chunk__22903 = G__23638;
count__22904 = G__23639;
i__22905 = G__23640;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__22890);
if(temp__5804__auto__){
var seq__22890__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22890__$1)){
var c__5525__auto__ = cljs.core.chunk_first.call(null,seq__22890__$1);
var G__23641 = cljs.core.chunk_rest.call(null,seq__22890__$1);
var G__23642 = c__5525__auto__;
var G__23643 = cljs.core.count.call(null,c__5525__auto__);
var G__23644 = (0);
seq__22890 = G__23641;
chunk__22903 = G__23642;
count__22904 = G__23643;
i__22905 = G__23644;
continue;
} else {
var ai = cljs.core.first.call(null,seq__22890__$1);
var seq__22891_23645 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(3)], null));
var chunk__22896_23646 = null;
var count__22897_23647 = (0);
var i__22898_23648 = (0);
while(true){
if((i__22898_23648 < count__22897_23647)){
var mode_23649 = cljs.core._nth.call(null,chunk__22896_23646,i__22898_23648);
var seq__22899_23650 = cljs.core.seq.call(null,cljs.core.range.call(null,(16)));
var chunk__22900_23651 = null;
var count__22901_23652 = (0);
var i__22902_23653 = (0);
while(true){
if((i__22902_23653 < count__22901_23652)){
var n_23654 = cljs.core._nth.call(null,chunk__22900_23651,i__22902_23653);
cljs.core.swap_BANG_.call(null,tic_tac_toe.screens.play_spec.state,cljs.core.assoc,new cljs.core.Keyword(null,"mode","mode",654403691),mode_23649,new cljs.core.Keyword(null,"first-ai-level","first-ai-level",1004633644),ai,new cljs.core.Keyword(null,"player","player",-97687400),((cljs.core._EQ_.call(null,(2),mode_23649))?new cljs.core.Keyword(null,"x","x",2099068185):new cljs.core.Keyword(null,"o","o",-1350007228)),new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"gui","gui",604532813));

c3kit.wire.spec_helper.render.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tic_tac_toe.render_screen.render_screen,tic_tac_toe.screens.play_spec.state], null));

c3kit.wire.spec_helper.click_BANG_.call(null,["#index-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n_23654)].join(''));

var expected__20437__auto___23655 = cljs.core.assoc.call(null,tic_tac_toe.screens.play_spec.board_4,n_23654,new cljs.core.Keyword(null,"x","x",2099068185));
var actual__20438__auto___23656 = new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.screens.play_spec.state));
if(cljs.core._EQ_.call(null,expected__20437__auto___23655,actual__20438__auto___23656)){
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__20437__auto___23655;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__20381__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__20381__auto__);
}
})(),speclj.platform.endl,"not to =: ",(function (){var temp__5806__auto__ = actual__20438__auto___23656;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__20381__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__20381__auto__);
}
})()].join('')));
} else {
}

var expected__20413__auto___23657 = ((cljs.core._EQ_.call(null,(2),mode_23649))?new cljs.core.Keyword(null,"x","x",2099068185):new cljs.core.Keyword(null,"o","o",-1350007228));
var actual__20414__auto___23658 = new cljs.core.Keyword(null,"player","player",-97687400).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.screens.play_spec.state));
if(cljs.core._EQ_.call(null,expected__20413__auto___23657,actual__20414__auto___23658)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__20413__auto___23657;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__20381__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__20381__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__20414__auto___23658;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__20381__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__20381__auto__);
}
})()," (using =)"].join('')));
}

cljs.core.reset_BANG_.call(null,tic_tac_toe.screens.play_spec.state,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"board","board",-1907017633),tic_tac_toe.screens.play_spec.board_4,new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"current-screen","current-screen",-1454713691),new cljs.core.Keyword(null,"play","play",-580418022)], null));


var G__23659 = seq__22899_23650;
var G__23660 = chunk__22900_23651;
var G__23661 = count__22901_23652;
var G__23662 = (i__22902_23653 + (1));
seq__22899_23650 = G__23659;
chunk__22900_23651 = G__23660;
count__22901_23652 = G__23661;
i__22902_23653 = G__23662;
continue;
} else {
var temp__5804__auto___23663__$1 = cljs.core.seq.call(null,seq__22899_23650);
if(temp__5804__auto___23663__$1){
var seq__22899_23664__$1 = temp__5804__auto___23663__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22899_23664__$1)){
var c__5525__auto___23665 = cljs.core.chunk_first.call(null,seq__22899_23664__$1);
var G__23666 = cljs.core.chunk_rest.call(null,seq__22899_23664__$1);
var G__23667 = c__5525__auto___23665;
var G__23668 = cljs.core.count.call(null,c__5525__auto___23665);
var G__23669 = (0);
seq__22899_23650 = G__23666;
chunk__22900_23651 = G__23667;
count__22901_23652 = G__23668;
i__22902_23653 = G__23669;
continue;
} else {
var n_23670 = cljs.core.first.call(null,seq__22899_23664__$1);
cljs.core.swap_BANG_.call(null,tic_tac_toe.screens.play_spec.state,cljs.core.assoc,new cljs.core.Keyword(null,"mode","mode",654403691),mode_23649,new cljs.core.Keyword(null,"first-ai-level","first-ai-level",1004633644),ai,new cljs.core.Keyword(null,"player","player",-97687400),((cljs.core._EQ_.call(null,(2),mode_23649))?new cljs.core.Keyword(null,"x","x",2099068185):new cljs.core.Keyword(null,"o","o",-1350007228)),new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"gui","gui",604532813));

c3kit.wire.spec_helper.render.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tic_tac_toe.render_screen.render_screen,tic_tac_toe.screens.play_spec.state], null));

c3kit.wire.spec_helper.click_BANG_.call(null,["#index-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n_23670)].join(''));

var expected__20437__auto___23671 = cljs.core.assoc.call(null,tic_tac_toe.screens.play_spec.board_4,n_23670,new cljs.core.Keyword(null,"x","x",2099068185));
var actual__20438__auto___23672 = new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.screens.play_spec.state));
if(cljs.core._EQ_.call(null,expected__20437__auto___23671,actual__20438__auto___23672)){
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__20437__auto___23671;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__20381__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__20381__auto__);
}
})(),speclj.platform.endl,"not to =: ",(function (){var temp__5806__auto__ = actual__20438__auto___23672;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__20381__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__20381__auto__);
}
})()].join('')));
} else {
}

var expected__20413__auto___23673 = ((cljs.core._EQ_.call(null,(2),mode_23649))?new cljs.core.Keyword(null,"x","x",2099068185):new cljs.core.Keyword(null,"o","o",-1350007228));
var actual__20414__auto___23674 = new cljs.core.Keyword(null,"player","player",-97687400).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.screens.play_spec.state));
if(cljs.core._EQ_.call(null,expected__20413__auto___23673,actual__20414__auto___23674)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__20413__auto___23673;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__20381__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__20381__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__20414__auto___23674;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__20381__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__20381__auto__);
}
})()," (using =)"].join('')));
}

cljs.core.reset_BANG_.call(null,tic_tac_toe.screens.play_spec.state,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"board","board",-1907017633),tic_tac_toe.screens.play_spec.board_4,new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"current-screen","current-screen",-1454713691),new cljs.core.Keyword(null,"play","play",-580418022)], null));


var G__23675 = cljs.core.next.call(null,seq__22899_23664__$1);
var G__23676 = null;
var G__23677 = (0);
var G__23678 = (0);
seq__22899_23650 = G__23675;
chunk__22900_23651 = G__23676;
count__22901_23652 = G__23677;
i__22902_23653 = G__23678;
continue;
}
} else {
}
}
break;
}

var G__23679 = seq__22891_23645;
var G__23680 = chunk__22896_23646;
var G__23681 = count__22897_23647;
var G__23682 = (i__22898_23648 + (1));
seq__22891_23645 = G__23679;
chunk__22896_23646 = G__23680;
count__22897_23647 = G__23681;
i__22898_23648 = G__23682;
continue;
} else {
var temp__5804__auto___23683__$1 = cljs.core.seq.call(null,seq__22891_23645);
if(temp__5804__auto___23683__$1){
var seq__22891_23684__$1 = temp__5804__auto___23683__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22891_23684__$1)){
var c__5525__auto___23685 = cljs.core.chunk_first.call(null,seq__22891_23684__$1);
var G__23686 = cljs.core.chunk_rest.call(null,seq__22891_23684__$1);
var G__23687 = c__5525__auto___23685;
var G__23688 = cljs.core.count.call(null,c__5525__auto___23685);
var G__23689 = (0);
seq__22891_23645 = G__23686;
chunk__22896_23646 = G__23687;
count__22897_23647 = G__23688;
i__22898_23648 = G__23689;
continue;
} else {
var mode_23690 = cljs.core.first.call(null,seq__22891_23684__$1);
var seq__22892_23691 = cljs.core.seq.call(null,cljs.core.range.call(null,(16)));
var chunk__22893_23692 = null;
var count__22894_23693 = (0);
var i__22895_23694 = (0);
while(true){
if((i__22895_23694 < count__22894_23693)){
var n_23695 = cljs.core._nth.call(null,chunk__22893_23692,i__22895_23694);
cljs.core.swap_BANG_.call(null,tic_tac_toe.screens.play_spec.state,cljs.core.assoc,new cljs.core.Keyword(null,"mode","mode",654403691),mode_23690,new cljs.core.Keyword(null,"first-ai-level","first-ai-level",1004633644),ai,new cljs.core.Keyword(null,"player","player",-97687400),((cljs.core._EQ_.call(null,(2),mode_23690))?new cljs.core.Keyword(null,"x","x",2099068185):new cljs.core.Keyword(null,"o","o",-1350007228)),new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"gui","gui",604532813));

c3kit.wire.spec_helper.render.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tic_tac_toe.render_screen.render_screen,tic_tac_toe.screens.play_spec.state], null));

c3kit.wire.spec_helper.click_BANG_.call(null,["#index-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n_23695)].join(''));

var expected__20437__auto___23696 = cljs.core.assoc.call(null,tic_tac_toe.screens.play_spec.board_4,n_23695,new cljs.core.Keyword(null,"x","x",2099068185));
var actual__20438__auto___23697 = new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.screens.play_spec.state));
if(cljs.core._EQ_.call(null,expected__20437__auto___23696,actual__20438__auto___23697)){
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__20437__auto___23696;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__20381__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__20381__auto__);
}
})(),speclj.platform.endl,"not to =: ",(function (){var temp__5806__auto__ = actual__20438__auto___23697;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__20381__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__20381__auto__);
}
})()].join('')));
} else {
}

var expected__20413__auto___23698 = ((cljs.core._EQ_.call(null,(2),mode_23690))?new cljs.core.Keyword(null,"x","x",2099068185):new cljs.core.Keyword(null,"o","o",-1350007228));
var actual__20414__auto___23699 = new cljs.core.Keyword(null,"player","player",-97687400).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.screens.play_spec.state));
if(cljs.core._EQ_.call(null,expected__20413__auto___23698,actual__20414__auto___23699)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__20413__auto___23698;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__20381__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__20381__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__20414__auto___23699;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__20381__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__20381__auto__);
}
})()," (using =)"].join('')));
}

cljs.core.reset_BANG_.call(null,tic_tac_toe.screens.play_spec.state,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"board","board",-1907017633),tic_tac_toe.screens.play_spec.board_4,new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"current-screen","current-screen",-1454713691),new cljs.core.Keyword(null,"play","play",-580418022)], null));


var G__23700 = seq__22892_23691;
var G__23701 = chunk__22893_23692;
var G__23702 = count__22894_23693;
var G__23703 = (i__22895_23694 + (1));
seq__22892_23691 = G__23700;
chunk__22893_23692 = G__23701;
count__22894_23693 = G__23702;
i__22895_23694 = G__23703;
continue;
} else {
var temp__5804__auto___23704__$2 = cljs.core.seq.call(null,seq__22892_23691);
if(temp__5804__auto___23704__$2){
var seq__22892_23705__$1 = temp__5804__auto___23704__$2;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22892_23705__$1)){
var c__5525__auto___23706 = cljs.core.chunk_first.call(null,seq__22892_23705__$1);
var G__23707 = cljs.core.chunk_rest.call(null,seq__22892_23705__$1);
var G__23708 = c__5525__auto___23706;
var G__23709 = cljs.core.count.call(null,c__5525__auto___23706);
var G__23710 = (0);
seq__22892_23691 = G__23707;
chunk__22893_23692 = G__23708;
count__22894_23693 = G__23709;
i__22895_23694 = G__23710;
continue;
} else {
var n_23711 = cljs.core.first.call(null,seq__22892_23705__$1);
cljs.core.swap_BANG_.call(null,tic_tac_toe.screens.play_spec.state,cljs.core.assoc,new cljs.core.Keyword(null,"mode","mode",654403691),mode_23690,new cljs.core.Keyword(null,"first-ai-level","first-ai-level",1004633644),ai,new cljs.core.Keyword(null,"player","player",-97687400),((cljs.core._EQ_.call(null,(2),mode_23690))?new cljs.core.Keyword(null,"x","x",2099068185):new cljs.core.Keyword(null,"o","o",-1350007228)),new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"gui","gui",604532813));

c3kit.wire.spec_helper.render.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tic_tac_toe.render_screen.render_screen,tic_tac_toe.screens.play_spec.state], null));

c3kit.wire.spec_helper.click_BANG_.call(null,["#index-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n_23711)].join(''));

var expected__20437__auto___23712 = cljs.core.assoc.call(null,tic_tac_toe.screens.play_spec.board_4,n_23711,new cljs.core.Keyword(null,"x","x",2099068185));
var actual__20438__auto___23713 = new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.screens.play_spec.state));
if(cljs.core._EQ_.call(null,expected__20437__auto___23712,actual__20438__auto___23713)){
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__20437__auto___23712;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__20381__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__20381__auto__);
}
})(),speclj.platform.endl,"not to =: ",(function (){var temp__5806__auto__ = actual__20438__auto___23713;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__20381__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__20381__auto__);
}
})()].join('')));
} else {
}

var expected__20413__auto___23714 = ((cljs.core._EQ_.call(null,(2),mode_23690))?new cljs.core.Keyword(null,"x","x",2099068185):new cljs.core.Keyword(null,"o","o",-1350007228));
var actual__20414__auto___23715 = new cljs.core.Keyword(null,"player","player",-97687400).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.screens.play_spec.state));
if(cljs.core._EQ_.call(null,expected__20413__auto___23714,actual__20414__auto___23715)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__20413__auto___23714;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__20381__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__20381__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__20414__auto___23715;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__20381__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__20381__auto__);
}
})()," (using =)"].join('')));
}

cljs.core.reset_BANG_.call(null,tic_tac_toe.screens.play_spec.state,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"board","board",-1907017633),tic_tac_toe.screens.play_spec.board_4,new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"current-screen","current-screen",-1454713691),new cljs.core.Keyword(null,"play","play",-580418022)], null));


var G__23716 = cljs.core.next.call(null,seq__22892_23705__$1);
var G__23717 = null;
var G__23718 = (0);
var G__23719 = (0);
seq__22892_23691 = G__23716;
chunk__22893_23692 = G__23717;
count__22894_23693 = G__23718;
i__22895_23694 = G__23719;
continue;
}
} else {
}
}
break;
}

var G__23720 = cljs.core.next.call(null,seq__22891_23684__$1);
var G__23721 = null;
var G__23722 = (0);
var G__23723 = (0);
seq__22891_23645 = G__23720;
chunk__22896_23646 = G__23721;
count__22897_23647 = G__23722;
i__22898_23648 = G__23723;
continue;
}
} else {
}
}
break;
}

var G__23724 = cljs.core.next.call(null,seq__22890__$1);
var G__23725 = null;
var G__23726 = (0);
var G__23727 = (0);
seq__22890 = G__23724;
chunk__22903 = G__23725;
count__22904 = G__23726;
i__22905 = G__23727;
continue;
}
} else {
return null;
}
}
break;
}
});})(_STAR_parent_description_STAR__orig_val__22776_23390,_STAR_parent_description_STAR__temp_val__22777_23391,description__20276__auto____$1,_STAR_parent_description_STAR__orig_val__21397_22919,_STAR_parent_description_STAR__temp_val__21398_22920,description__20276__auto___22918))
,false),speclj.components.new_characteristic.call(null,"AI is not triggered if game over",((function (_STAR_parent_description_STAR__orig_val__22776_23390,_STAR_parent_description_STAR__temp_val__22777_23391,description__20276__auto____$1,_STAR_parent_description_STAR__orig_val__21397_22919,_STAR_parent_description_STAR__temp_val__21398_22920,description__20276__auto___22918){
return (function (){
cljs.core.swap_BANG_.call(null,tic_tac_toe.screens.play_spec.state,cljs.core.assoc,new cljs.core.Keyword(null,"board","board",-1907017633),new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"x","x",2099068185),(3),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"o","o",-1350007228),new cljs.core.Keyword(null,"o","o",-1350007228),new cljs.core.Keyword(null,"o","o",-1350007228),(8),(9),(10),(11),(12),(13),(14),(15),(16)], null),new cljs.core.Keyword(null,"mode","mode",654403691),(2),new cljs.core.Keyword(null,"first-ai-level","first-ai-level",1004633644),(3));

c3kit.wire.spec_helper.click_BANG_.call(null,"#index-2");

var expected__20413__auto__ = new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"o","o",-1350007228),new cljs.core.Keyword(null,"o","o",-1350007228),new cljs.core.Keyword(null,"o","o",-1350007228),(8),(9),(10),(11),(12),(13),(14),(15),(16)], null);
var actual__20414__auto__ = new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.screens.play_spec.state));
if(cljs.core._EQ_.call(null,expected__20413__auto__,actual__20414__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__20413__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__20381__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__20381__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__20414__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__20381__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__20381__auto__);
}
})()," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__22776_23390,_STAR_parent_description_STAR__temp_val__22777_23391,description__20276__auto____$1,_STAR_parent_description_STAR__orig_val__21397_22919,_STAR_parent_description_STAR__temp_val__21398_22920,description__20276__auto___22918))
,false)],null)));
var chunk__22779_23393 = null;
var count__22780_23394 = (0);
var i__22781_23395 = (0);
while(true){
if((i__22781_23395 < count__22780_23394)){
var component__20277__auto___23728 = cljs.core._nth.call(null,chunk__22779_23393,i__22781_23395);
speclj.components.install.call(null,component__20277__auto___23728,description__20276__auto____$1);


var G__23729 = seq__22778_23392;
var G__23730 = chunk__22779_23393;
var G__23731 = count__22780_23394;
var G__23732 = (i__22781_23395 + (1));
seq__22778_23392 = G__23729;
chunk__22779_23393 = G__23730;
count__22780_23394 = G__23731;
i__22781_23395 = G__23732;
continue;
} else {
var temp__5804__auto___23733 = cljs.core.seq.call(null,seq__22778_23392);
if(temp__5804__auto___23733){
var seq__22778_23734__$1 = temp__5804__auto___23733;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22778_23734__$1)){
var c__5525__auto___23735 = cljs.core.chunk_first.call(null,seq__22778_23734__$1);
var G__23736 = cljs.core.chunk_rest.call(null,seq__22778_23734__$1);
var G__23737 = c__5525__auto___23735;
var G__23738 = cljs.core.count.call(null,c__5525__auto___23735);
var G__23739 = (0);
seq__22778_23392 = G__23736;
chunk__22779_23393 = G__23737;
count__22780_23394 = G__23738;
i__22781_23395 = G__23739;
continue;
} else {
var component__20277__auto___23740 = cljs.core.first.call(null,seq__22778_23734__$1);
speclj.components.install.call(null,component__20277__auto___23740,description__20276__auto____$1);


var G__23741 = cljs.core.next.call(null,seq__22778_23734__$1);
var G__23742 = null;
var G__23743 = (0);
var G__23744 = (0);
seq__22778_23392 = G__23741;
chunk__22779_23393 = G__23742;
count__22780_23394 = G__23743;
i__22781_23395 = G__23744;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__22776_23390);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__20276__auto____$1);
}

return description__20276__auto____$1;
})()],null)));
var chunk__21400_22922 = null;
var count__21401_22923 = (0);
var i__21402_22924 = (0);
while(true){
if((i__21402_22924 < count__21401_22923)){
var component__20277__auto___23745 = cljs.core._nth.call(null,chunk__21400_22922,i__21402_22924);
speclj.components.install.call(null,component__20277__auto___23745,description__20276__auto___22918);


var G__23746 = seq__21399_22921;
var G__23747 = chunk__21400_22922;
var G__23748 = count__21401_22923;
var G__23749 = (i__21402_22924 + (1));
seq__21399_22921 = G__23746;
chunk__21400_22922 = G__23747;
count__21401_22923 = G__23748;
i__21402_22924 = G__23749;
continue;
} else {
var temp__5804__auto___23750 = cljs.core.seq.call(null,seq__21399_22921);
if(temp__5804__auto___23750){
var seq__21399_23751__$1 = temp__5804__auto___23750;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21399_23751__$1)){
var c__5525__auto___23752 = cljs.core.chunk_first.call(null,seq__21399_23751__$1);
var G__23753 = cljs.core.chunk_rest.call(null,seq__21399_23751__$1);
var G__23754 = c__5525__auto___23752;
var G__23755 = cljs.core.count.call(null,c__5525__auto___23752);
var G__23756 = (0);
seq__21399_22921 = G__23753;
chunk__21400_22922 = G__23754;
count__21401_22923 = G__23755;
i__21402_22924 = G__23756;
continue;
} else {
var component__20277__auto___23757 = cljs.core.first.call(null,seq__21399_23751__$1);
speclj.components.install.call(null,component__20277__auto___23757,description__20276__auto___22918);


var G__23758 = cljs.core.next.call(null,seq__21399_23751__$1);
var G__23759 = null;
var G__23760 = (0);
var G__23761 = (0);
seq__21399_22921 = G__23758;
chunk__21400_22922 = G__23759;
count__21401_22923 = G__23760;
i__21402_22924 = G__23761;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__21397_22919);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__20276__auto___22918);
}


//# sourceMappingURL=play_spec.js.map
