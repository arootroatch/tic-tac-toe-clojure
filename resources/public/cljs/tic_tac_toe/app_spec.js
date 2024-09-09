// Compiled by ClojureScript 1.11.132 {:optimizations :none}
goog.provide('tic_tac_toe.app_spec');
goog.require('cljs.core');
goog.require('speclj.core');
goog.require('c3kit.wire.spec_helper');
goog.require('tic_tac_toe.app');
var description__11247__auto___14597 = speclj.components.new_description.call(null,"app",false,"tic-tac-toe.app-spec");
var _STAR_parent_description_STAR__orig_val__14587_14598 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__14588_14599 = description__11247__auto___14597;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__14588_14599);

try{var seq__14589_14600 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,5,(5),cljs.core.PersistentVector.EMPTY_NODE,[c3kit.wire.spec_helper.with_root_dom.call(null),speclj.components.new_before.call(null,((function (_STAR_parent_description_STAR__orig_val__14587_14598,_STAR_parent_description_STAR__temp_val__14588_14599,description__11247__auto___14597){
return (function (){
return c3kit.wire.spec_helper.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tic_tac_toe.app.app], null));
});})(_STAR_parent_description_STAR__orig_val__14587_14598,_STAR_parent_description_STAR__temp_val__14588_14599,description__11247__auto___14597))
),speclj.components.new_characteristic.call(null,"renders parent div",((function (_STAR_parent_description_STAR__orig_val__14587_14598,_STAR_parent_description_STAR__temp_val__14588_14599,description__11247__auto___14597){
return (function (){
var value__11747__auto__ = "#app-wrapper";
var node__11748__auto__ = c3kit.wire.spec_helper.select.call(null,value__11747__auto__);
if(cljs.core.truth_(node__11748__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected selector to find node: ",(function (){var temp__5806__auto__ = value__11747__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11352__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11352__auto__);
}
})()].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__14587_14598,_STAR_parent_description_STAR__temp_val__14588_14599,description__11247__auto___14597))
,false),speclj.components.new_characteristic.call(null,"renders mode-selection screen to start",((function (_STAR_parent_description_STAR__orig_val__14587_14598,_STAR_parent_description_STAR__temp_val__14588_14599,description__11247__auto___14597){
return (function (){
var value__11747__auto__ = "#mode-selection";
var node__11748__auto__ = c3kit.wire.spec_helper.select.call(null,value__11747__auto__);
if(cljs.core.truth_(node__11748__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected selector to find node: ",(function (){var temp__5806__auto__ = value__11747__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11352__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11352__auto__);
}
})()].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__14587_14598,_STAR_parent_description_STAR__temp_val__14588_14599,description__11247__auto___14597))
,false),speclj.components.new_characteristic.call(null,"renders ttt heading",((function (_STAR_parent_description_STAR__orig_val__14587_14598,_STAR_parent_description_STAR__temp_val__14588_14599,description__11247__auto___14597){
return (function (){
var expected__11384__auto__ = "Tic-Tac-Toe";
var actual__11385__auto__ = c3kit.wire.spec_helper.text.call(null,"#app-wrapper h1");
if(cljs.core._EQ_.call(null,expected__11384__auto__,actual__11385__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__11384__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11352__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11352__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__11385__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11352__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11352__auto__);
}
})()," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__14587_14598,_STAR_parent_description_STAR__temp_val__14588_14599,description__11247__auto___14597))
,false)],null)));
var chunk__14590_14602 = null;
var count__14591_14603 = (0);
var i__14592_14604 = (0);
while(true){
if((i__14592_14604 < count__14591_14603)){
var component__11248__auto___14617 = cljs.core._nth.call(null,chunk__14590_14602,i__14592_14604);
speclj.components.install.call(null,component__11248__auto___14617,description__11247__auto___14597);


var G__14618 = seq__14589_14600;
var G__14619 = chunk__14590_14602;
var G__14620 = count__14591_14603;
var G__14621 = (i__14592_14604 + (1));
seq__14589_14600 = G__14618;
chunk__14590_14602 = G__14619;
count__14591_14603 = G__14620;
i__14592_14604 = G__14621;
continue;
} else {
var temp__5804__auto___14622 = cljs.core.seq.call(null,seq__14589_14600);
if(temp__5804__auto___14622){
var seq__14589_14625__$1 = temp__5804__auto___14622;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14589_14625__$1)){
var c__5525__auto___14626 = cljs.core.chunk_first.call(null,seq__14589_14625__$1);
var G__14627 = cljs.core.chunk_rest.call(null,seq__14589_14625__$1);
var G__14628 = c__5525__auto___14626;
var G__14629 = cljs.core.count.call(null,c__5525__auto___14626);
var G__14630 = (0);
seq__14589_14600 = G__14627;
chunk__14590_14602 = G__14628;
count__14591_14603 = G__14629;
i__14592_14604 = G__14630;
continue;
} else {
var component__11248__auto___14631 = cljs.core.first.call(null,seq__14589_14625__$1);
speclj.components.install.call(null,component__11248__auto___14631,description__11247__auto___14597);


var G__14634 = cljs.core.next.call(null,seq__14589_14625__$1);
var G__14635 = null;
var G__14636 = (0);
var G__14637 = (0);
seq__14589_14600 = G__14634;
chunk__14590_14602 = G__14635;
count__14591_14603 = G__14636;
i__14592_14604 = G__14637;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__14587_14598);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__11247__auto___14597);
}


//# sourceMappingURL=app_spec.js.map
