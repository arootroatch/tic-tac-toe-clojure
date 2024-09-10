// Compiled by ClojureScript 1.11.132 {:optimizations :none}
goog.provide('tic_tac_toe.app_spec');
goog.require('cljs.core');
goog.require('speclj.core');
goog.require('c3kit.wire.spec_helper');
goog.require('tic_tac_toe.app');
var description__11262__auto___17532 = speclj.components.new_description.call(null,"app",false,"tic-tac-toe.app-spec");
var _STAR_parent_description_STAR__orig_val__17516_17533 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__17517_17534 = description__11262__auto___17532;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__17517_17534);

try{var seq__17518_17535 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,5,(5),cljs.core.PersistentVector.EMPTY_NODE,[c3kit.wire.spec_helper.with_root_dom.call(null),speclj.components.new_before.call(null,((function (_STAR_parent_description_STAR__orig_val__17516_17533,_STAR_parent_description_STAR__temp_val__17517_17534,description__11262__auto___17532){
return (function (){
return c3kit.wire.spec_helper.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tic_tac_toe.app.app], null));
});})(_STAR_parent_description_STAR__orig_val__17516_17533,_STAR_parent_description_STAR__temp_val__17517_17534,description__11262__auto___17532))
),speclj.components.new_characteristic.call(null,"renders parent div",((function (_STAR_parent_description_STAR__orig_val__17516_17533,_STAR_parent_description_STAR__temp_val__17517_17534,description__11262__auto___17532){
return (function (){
var value__11762__auto__ = "#app-wrapper";
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
});})(_STAR_parent_description_STAR__orig_val__17516_17533,_STAR_parent_description_STAR__temp_val__17517_17534,description__11262__auto___17532))
,false),speclj.components.new_characteristic.call(null,"renders mode-selection screen to start",((function (_STAR_parent_description_STAR__orig_val__17516_17533,_STAR_parent_description_STAR__temp_val__17517_17534,description__11262__auto___17532){
return (function (){
var value__11762__auto__ = "#mode-selection";
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
});})(_STAR_parent_description_STAR__orig_val__17516_17533,_STAR_parent_description_STAR__temp_val__17517_17534,description__11262__auto___17532))
,false),speclj.components.new_characteristic.call(null,"renders ttt heading",((function (_STAR_parent_description_STAR__orig_val__17516_17533,_STAR_parent_description_STAR__temp_val__17517_17534,description__11262__auto___17532){
return (function (){
var expected__11399__auto__ = "Tic-Tac-Toe";
var actual__11400__auto__ = c3kit.wire.spec_helper.text.call(null,"#app-wrapper h1");
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
});})(_STAR_parent_description_STAR__orig_val__17516_17533,_STAR_parent_description_STAR__temp_val__17517_17534,description__11262__auto___17532))
,false)],null)));
var chunk__17519_17536 = null;
var count__17520_17537 = (0);
var i__17521_17538 = (0);
while(true){
if((i__17521_17538 < count__17520_17537)){
var component__11263__auto___17539 = cljs.core._nth.call(null,chunk__17519_17536,i__17521_17538);
speclj.components.install.call(null,component__11263__auto___17539,description__11262__auto___17532);


var G__17540 = seq__17518_17535;
var G__17541 = chunk__17519_17536;
var G__17542 = count__17520_17537;
var G__17543 = (i__17521_17538 + (1));
seq__17518_17535 = G__17540;
chunk__17519_17536 = G__17541;
count__17520_17537 = G__17542;
i__17521_17538 = G__17543;
continue;
} else {
var temp__5804__auto___17544 = cljs.core.seq.call(null,seq__17518_17535);
if(temp__5804__auto___17544){
var seq__17518_17545__$1 = temp__5804__auto___17544;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__17518_17545__$1)){
var c__5525__auto___17546 = cljs.core.chunk_first.call(null,seq__17518_17545__$1);
var G__17547 = cljs.core.chunk_rest.call(null,seq__17518_17545__$1);
var G__17548 = c__5525__auto___17546;
var G__17549 = cljs.core.count.call(null,c__5525__auto___17546);
var G__17550 = (0);
seq__17518_17535 = G__17547;
chunk__17519_17536 = G__17548;
count__17520_17537 = G__17549;
i__17521_17538 = G__17550;
continue;
} else {
var component__11263__auto___17551 = cljs.core.first.call(null,seq__17518_17545__$1);
speclj.components.install.call(null,component__11263__auto___17551,description__11262__auto___17532);


var G__17556 = cljs.core.next.call(null,seq__17518_17545__$1);
var G__17557 = null;
var G__17558 = (0);
var G__17559 = (0);
seq__17518_17535 = G__17556;
chunk__17519_17536 = G__17557;
count__17520_17537 = G__17558;
i__17521_17538 = G__17559;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__17516_17533);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__11262__auto___17532);
}


//# sourceMappingURL=app_spec.js.map
