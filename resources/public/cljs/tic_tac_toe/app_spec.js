// Compiled by ClojureScript 1.11.132 {:optimizations :none}
goog.provide('tic_tac_toe.app_spec');
goog.require('cljs.core');
goog.require('speclj.core');
goog.require('c3kit.wire.spec_helper');
goog.require('tic_tac_toe.app');
var description__7638__auto___11511 = speclj.components.new_description.call(null,"app",false,"tic-tac-toe.app-spec");
var _STAR_parent_description_STAR__orig_val__11490_11512 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__11491_11513 = description__7638__auto___11511;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__11491_11513);

try{var seq__11493_11514 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,5,(5),cljs.core.PersistentVector.EMPTY_NODE,[c3kit.wire.spec_helper.with_root_dom.call(null),speclj.components.new_before.call(null,((function (_STAR_parent_description_STAR__orig_val__11490_11512,_STAR_parent_description_STAR__temp_val__11491_11513,description__7638__auto___11511){
return (function (){
return c3kit.wire.spec_helper.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tic_tac_toe.app.app], null));
});})(_STAR_parent_description_STAR__orig_val__11490_11512,_STAR_parent_description_STAR__temp_val__11491_11513,description__7638__auto___11511))
),speclj.components.new_characteristic.call(null,"renders parent div",((function (_STAR_parent_description_STAR__orig_val__11490_11512,_STAR_parent_description_STAR__temp_val__11491_11513,description__7638__auto___11511){
return (function (){
var value__11436__auto__ = "#app-wrapper";
var node__11437__auto__ = c3kit.wire.spec_helper.select.call(null,value__11436__auto__);
if(cljs.core.truth_(node__11437__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected selector to find node: ",(function (){var temp__5806__auto__ = value__11436__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7743__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7743__auto__);
}
})()].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__11490_11512,_STAR_parent_description_STAR__temp_val__11491_11513,description__7638__auto___11511))
,false),speclj.components.new_characteristic.call(null,"renders mode-selection screen to start",((function (_STAR_parent_description_STAR__orig_val__11490_11512,_STAR_parent_description_STAR__temp_val__11491_11513,description__7638__auto___11511){
return (function (){
var value__11436__auto__ = "#mode-selection";
var node__11437__auto__ = c3kit.wire.spec_helper.select.call(null,value__11436__auto__);
if(cljs.core.truth_(node__11437__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected selector to find node: ",(function (){var temp__5806__auto__ = value__11436__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7743__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7743__auto__);
}
})()].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__11490_11512,_STAR_parent_description_STAR__temp_val__11491_11513,description__7638__auto___11511))
,false),speclj.components.new_characteristic.call(null,"renders ttt heading",((function (_STAR_parent_description_STAR__orig_val__11490_11512,_STAR_parent_description_STAR__temp_val__11491_11513,description__7638__auto___11511){
return (function (){
var expected__7775__auto__ = "Tic-Tac-Toe";
var actual__7776__auto__ = c3kit.wire.spec_helper.text.call(null,"#app-wrapper h1");
if(cljs.core._EQ_.call(null,expected__7775__auto__,actual__7776__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__7775__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7743__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7743__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__7776__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7743__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7743__auto__);
}
})()," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__11490_11512,_STAR_parent_description_STAR__temp_val__11491_11513,description__7638__auto___11511))
,false)],null)));
var chunk__11494_11515 = null;
var count__11495_11516 = (0);
var i__11496_11517 = (0);
while(true){
if((i__11496_11517 < count__11495_11516)){
var component__7639__auto___11518 = cljs.core._nth.call(null,chunk__11494_11515,i__11496_11517);
speclj.components.install.call(null,component__7639__auto___11518,description__7638__auto___11511);


var G__11519 = seq__11493_11514;
var G__11520 = chunk__11494_11515;
var G__11521 = count__11495_11516;
var G__11522 = (i__11496_11517 + (1));
seq__11493_11514 = G__11519;
chunk__11494_11515 = G__11520;
count__11495_11516 = G__11521;
i__11496_11517 = G__11522;
continue;
} else {
var temp__5804__auto___11523 = cljs.core.seq.call(null,seq__11493_11514);
if(temp__5804__auto___11523){
var seq__11493_11524__$1 = temp__5804__auto___11523;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11493_11524__$1)){
var c__5525__auto___11525 = cljs.core.chunk_first.call(null,seq__11493_11524__$1);
var G__11526 = cljs.core.chunk_rest.call(null,seq__11493_11524__$1);
var G__11527 = c__5525__auto___11525;
var G__11528 = cljs.core.count.call(null,c__5525__auto___11525);
var G__11529 = (0);
seq__11493_11514 = G__11526;
chunk__11494_11515 = G__11527;
count__11495_11516 = G__11528;
i__11496_11517 = G__11529;
continue;
} else {
var component__7639__auto___11530 = cljs.core.first.call(null,seq__11493_11524__$1);
speclj.components.install.call(null,component__7639__auto___11530,description__7638__auto___11511);


var G__11531 = cljs.core.next.call(null,seq__11493_11524__$1);
var G__11532 = null;
var G__11533 = (0);
var G__11534 = (0);
seq__11493_11514 = G__11531;
chunk__11494_11515 = G__11532;
count__11495_11516 = G__11533;
i__11496_11517 = G__11534;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__11490_11512);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__7638__auto___11511);
}


//# sourceMappingURL=app_spec.js.map
