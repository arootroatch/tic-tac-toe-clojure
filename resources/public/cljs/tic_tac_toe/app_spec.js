// Compiled by ClojureScript 1.11.132 {:optimizations :none}
goog.provide('tic_tac_toe.app_spec');
goog.require('cljs.core');
goog.require('speclj.core');
goog.require('c3kit.wire.spec_helper');
goog.require('tic_tac_toe.app');
var description__11244__auto___13308 = speclj.components.new_description.call(null,"app",false,"tic-tac-toe.app-spec");
var _STAR_parent_description_STAR__orig_val__13300_13309 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__13301_13310 = description__11244__auto___13308;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__13301_13310);

try{var seq__13302_13311 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,5,(5),cljs.core.PersistentVector.EMPTY_NODE,[c3kit.wire.spec_helper.with_root_dom.call(null),speclj.components.new_before.call(null,((function (_STAR_parent_description_STAR__orig_val__13300_13309,_STAR_parent_description_STAR__temp_val__13301_13310,description__11244__auto___13308){
return (function (){
return c3kit.wire.spec_helper.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tic_tac_toe.app.app], null));
});})(_STAR_parent_description_STAR__orig_val__13300_13309,_STAR_parent_description_STAR__temp_val__13301_13310,description__11244__auto___13308))
),speclj.components.new_characteristic.call(null,"renders parent div",((function (_STAR_parent_description_STAR__orig_val__13300_13309,_STAR_parent_description_STAR__temp_val__13301_13310,description__11244__auto___13308){
return (function (){
var value__11744__auto__ = "#app-wrapper";
var node__11745__auto__ = c3kit.wire.spec_helper.select.call(null,value__11744__auto__);
if(cljs.core.truth_(node__11745__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected selector to find node: ",(function (){var temp__5806__auto__ = value__11744__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11349__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11349__auto__);
}
})()].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__13300_13309,_STAR_parent_description_STAR__temp_val__13301_13310,description__11244__auto___13308))
,false),speclj.components.new_characteristic.call(null,"renders mode-selection screen to start",((function (_STAR_parent_description_STAR__orig_val__13300_13309,_STAR_parent_description_STAR__temp_val__13301_13310,description__11244__auto___13308){
return (function (){
var value__11744__auto__ = "#mode-selection";
var node__11745__auto__ = c3kit.wire.spec_helper.select.call(null,value__11744__auto__);
if(cljs.core.truth_(node__11745__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected selector to find node: ",(function (){var temp__5806__auto__ = value__11744__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11349__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11349__auto__);
}
})()].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__13300_13309,_STAR_parent_description_STAR__temp_val__13301_13310,description__11244__auto___13308))
,false),speclj.components.new_characteristic.call(null,"renders ttt heading",((function (_STAR_parent_description_STAR__orig_val__13300_13309,_STAR_parent_description_STAR__temp_val__13301_13310,description__11244__auto___13308){
return (function (){
var expected__11381__auto__ = "Tic-Tac-Toe";
var actual__11382__auto__ = c3kit.wire.spec_helper.text.call(null,"#app-wrapper h1");
if(cljs.core._EQ_.call(null,expected__11381__auto__,actual__11382__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__11381__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11349__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11349__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__11382__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11349__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11349__auto__);
}
})()," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__13300_13309,_STAR_parent_description_STAR__temp_val__13301_13310,description__11244__auto___13308))
,false)],null)));
var chunk__13303_13312 = null;
var count__13304_13313 = (0);
var i__13305_13314 = (0);
while(true){
if((i__13305_13314 < count__13304_13313)){
var component__11245__auto___13315 = cljs.core._nth.call(null,chunk__13303_13312,i__13305_13314);
speclj.components.install.call(null,component__11245__auto___13315,description__11244__auto___13308);


var G__13316 = seq__13302_13311;
var G__13317 = chunk__13303_13312;
var G__13318 = count__13304_13313;
var G__13319 = (i__13305_13314 + (1));
seq__13302_13311 = G__13316;
chunk__13303_13312 = G__13317;
count__13304_13313 = G__13318;
i__13305_13314 = G__13319;
continue;
} else {
var temp__5804__auto___13320 = cljs.core.seq.call(null,seq__13302_13311);
if(temp__5804__auto___13320){
var seq__13302_13321__$1 = temp__5804__auto___13320;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13302_13321__$1)){
var c__5525__auto___13322 = cljs.core.chunk_first.call(null,seq__13302_13321__$1);
var G__13323 = cljs.core.chunk_rest.call(null,seq__13302_13321__$1);
var G__13324 = c__5525__auto___13322;
var G__13325 = cljs.core.count.call(null,c__5525__auto___13322);
var G__13326 = (0);
seq__13302_13311 = G__13323;
chunk__13303_13312 = G__13324;
count__13304_13313 = G__13325;
i__13305_13314 = G__13326;
continue;
} else {
var component__11245__auto___13327 = cljs.core.first.call(null,seq__13302_13321__$1);
speclj.components.install.call(null,component__11245__auto___13327,description__11244__auto___13308);


var G__13328 = cljs.core.next.call(null,seq__13302_13321__$1);
var G__13329 = null;
var G__13330 = (0);
var G__13331 = (0);
seq__13302_13311 = G__13328;
chunk__13303_13312 = G__13329;
count__13304_13313 = G__13330;
i__13305_13314 = G__13331;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__13300_13309);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__11244__auto___13308);
}


//# sourceMappingURL=app_spec.js.map
