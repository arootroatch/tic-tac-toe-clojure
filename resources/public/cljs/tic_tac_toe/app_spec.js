// Compiled by ClojureScript 1.11.132 {:optimizations :none}
goog.provide('tic_tac_toe.app_spec');
goog.require('cljs.core');
goog.require('speclj.core');
goog.require('c3kit.wire.spec_helper');
goog.require('tic_tac_toe.app');
var description__11259__auto___22321 = speclj.components.new_description.call(null,"app",false,"tic-tac-toe.app-spec");
var _STAR_parent_description_STAR__orig_val__22313_22323 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__22314_22327 = description__11259__auto___22321;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__22314_22327);

try{var seq__22315_22328 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,5,(5),cljs.core.PersistentVector.EMPTY_NODE,[c3kit.wire.spec_helper.with_root_dom.call(null),speclj.components.new_before.call(null,((function (_STAR_parent_description_STAR__orig_val__22313_22323,_STAR_parent_description_STAR__temp_val__22314_22327,description__11259__auto___22321){
return (function (){
return c3kit.wire.spec_helper.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tic_tac_toe.app.app], null));
});})(_STAR_parent_description_STAR__orig_val__22313_22323,_STAR_parent_description_STAR__temp_val__22314_22327,description__11259__auto___22321))
),speclj.components.new_characteristic.call(null,"renders parent div",((function (_STAR_parent_description_STAR__orig_val__22313_22323,_STAR_parent_description_STAR__temp_val__22314_22327,description__11259__auto___22321){
return (function (){
var value__11759__auto__ = "#app-wrapper";
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
});})(_STAR_parent_description_STAR__orig_val__22313_22323,_STAR_parent_description_STAR__temp_val__22314_22327,description__11259__auto___22321))
,false),speclj.components.new_characteristic.call(null,"renders mode-selection screen to start",((function (_STAR_parent_description_STAR__orig_val__22313_22323,_STAR_parent_description_STAR__temp_val__22314_22327,description__11259__auto___22321){
return (function (){
var value__11759__auto__ = "#mode-selection";
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
});})(_STAR_parent_description_STAR__orig_val__22313_22323,_STAR_parent_description_STAR__temp_val__22314_22327,description__11259__auto___22321))
,false),speclj.components.new_characteristic.call(null,"renders ttt heading",((function (_STAR_parent_description_STAR__orig_val__22313_22323,_STAR_parent_description_STAR__temp_val__22314_22327,description__11259__auto___22321){
return (function (){
var expected__11396__auto__ = "Tic-Tac-Toe";
var actual__11397__auto__ = c3kit.wire.spec_helper.text.call(null,"#app-wrapper h1");
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
});})(_STAR_parent_description_STAR__orig_val__22313_22323,_STAR_parent_description_STAR__temp_val__22314_22327,description__11259__auto___22321))
,false)],null)));
var chunk__22316_22329 = null;
var count__22317_22330 = (0);
var i__22318_22331 = (0);
while(true){
if((i__22318_22331 < count__22317_22330)){
var component__11260__auto___22334 = cljs.core._nth.call(null,chunk__22316_22329,i__22318_22331);
speclj.components.install.call(null,component__11260__auto___22334,description__11259__auto___22321);


var G__22339 = seq__22315_22328;
var G__22340 = chunk__22316_22329;
var G__22341 = count__22317_22330;
var G__22342 = (i__22318_22331 + (1));
seq__22315_22328 = G__22339;
chunk__22316_22329 = G__22340;
count__22317_22330 = G__22341;
i__22318_22331 = G__22342;
continue;
} else {
var temp__5804__auto___22343 = cljs.core.seq.call(null,seq__22315_22328);
if(temp__5804__auto___22343){
var seq__22315_22344__$1 = temp__5804__auto___22343;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22315_22344__$1)){
var c__5525__auto___22345 = cljs.core.chunk_first.call(null,seq__22315_22344__$1);
var G__22346 = cljs.core.chunk_rest.call(null,seq__22315_22344__$1);
var G__22347 = c__5525__auto___22345;
var G__22348 = cljs.core.count.call(null,c__5525__auto___22345);
var G__22349 = (0);
seq__22315_22328 = G__22346;
chunk__22316_22329 = G__22347;
count__22317_22330 = G__22348;
i__22318_22331 = G__22349;
continue;
} else {
var component__11260__auto___22350 = cljs.core.first.call(null,seq__22315_22344__$1);
speclj.components.install.call(null,component__11260__auto___22350,description__11259__auto___22321);


var G__22351 = cljs.core.next.call(null,seq__22315_22344__$1);
var G__22352 = null;
var G__22353 = (0);
var G__22354 = (0);
seq__22315_22328 = G__22351;
chunk__22316_22329 = G__22352;
count__22317_22330 = G__22353;
i__22318_22331 = G__22354;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__22313_22323);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__11259__auto___22321);
}


//# sourceMappingURL=app_spec.js.map
