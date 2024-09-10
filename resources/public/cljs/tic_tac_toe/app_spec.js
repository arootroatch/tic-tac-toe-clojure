// Compiled by ClojureScript 1.11.132 {:optimizations :none}
goog.provide('tic_tac_toe.app_spec');
goog.require('cljs.core');
goog.require('speclj.core');
goog.require('c3kit.wire.spec_helper');
goog.require('tic_tac_toe.app');
var description__11246__auto___11819 = speclj.components.new_description.call(null,"app",false,"tic-tac-toe.app-spec");
var _STAR_parent_description_STAR__orig_val__11801_11820 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__11802_11821 = description__11246__auto___11819;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__11802_11821);

try{var seq__11806_11822 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,5,(5),cljs.core.PersistentVector.EMPTY_NODE,[c3kit.wire.spec_helper.with_root_dom.call(null),speclj.components.new_before.call(null,((function (_STAR_parent_description_STAR__orig_val__11801_11820,_STAR_parent_description_STAR__temp_val__11802_11821,description__11246__auto___11819){
return (function (){
return c3kit.wire.spec_helper.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tic_tac_toe.app.app], null));
});})(_STAR_parent_description_STAR__orig_val__11801_11820,_STAR_parent_description_STAR__temp_val__11802_11821,description__11246__auto___11819))
),speclj.components.new_characteristic.call(null,"renders parent div",((function (_STAR_parent_description_STAR__orig_val__11801_11820,_STAR_parent_description_STAR__temp_val__11802_11821,description__11246__auto___11819){
return (function (){
var value__11746__auto__ = "#app-wrapper";
var node__11747__auto__ = c3kit.wire.spec_helper.select.call(null,value__11746__auto__);
if(cljs.core.truth_(node__11747__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected selector to find node: ",(function (){var temp__5806__auto__ = value__11746__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11351__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11351__auto__);
}
})()].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__11801_11820,_STAR_parent_description_STAR__temp_val__11802_11821,description__11246__auto___11819))
,false),speclj.components.new_characteristic.call(null,"renders mode-selection screen to start",((function (_STAR_parent_description_STAR__orig_val__11801_11820,_STAR_parent_description_STAR__temp_val__11802_11821,description__11246__auto___11819){
return (function (){
var value__11746__auto__ = "#mode-selection";
var node__11747__auto__ = c3kit.wire.spec_helper.select.call(null,value__11746__auto__);
if(cljs.core.truth_(node__11747__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected selector to find node: ",(function (){var temp__5806__auto__ = value__11746__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11351__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11351__auto__);
}
})()].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__11801_11820,_STAR_parent_description_STAR__temp_val__11802_11821,description__11246__auto___11819))
,false),speclj.components.new_characteristic.call(null,"renders ttt heading",((function (_STAR_parent_description_STAR__orig_val__11801_11820,_STAR_parent_description_STAR__temp_val__11802_11821,description__11246__auto___11819){
return (function (){
var expected__11383__auto__ = "Tic-Tac-Toe";
var actual__11384__auto__ = c3kit.wire.spec_helper.text.call(null,"#app-wrapper h1");
if(cljs.core._EQ_.call(null,expected__11383__auto__,actual__11384__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__11383__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11351__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11351__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__11384__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11351__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11351__auto__);
}
})()," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__11801_11820,_STAR_parent_description_STAR__temp_val__11802_11821,description__11246__auto___11819))
,false)],null)));
var chunk__11810_11823 = null;
var count__11811_11824 = (0);
var i__11812_11825 = (0);
while(true){
if((i__11812_11825 < count__11811_11824)){
var component__11247__auto___11832 = cljs.core._nth.call(null,chunk__11810_11823,i__11812_11825);
speclj.components.install.call(null,component__11247__auto___11832,description__11246__auto___11819);


var G__11833 = seq__11806_11822;
var G__11834 = chunk__11810_11823;
var G__11835 = count__11811_11824;
var G__11836 = (i__11812_11825 + (1));
seq__11806_11822 = G__11833;
chunk__11810_11823 = G__11834;
count__11811_11824 = G__11835;
i__11812_11825 = G__11836;
continue;
} else {
var temp__5804__auto___11837 = cljs.core.seq.call(null,seq__11806_11822);
if(temp__5804__auto___11837){
var seq__11806_11838__$1 = temp__5804__auto___11837;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11806_11838__$1)){
var c__5525__auto___11839 = cljs.core.chunk_first.call(null,seq__11806_11838__$1);
var G__11840 = cljs.core.chunk_rest.call(null,seq__11806_11838__$1);
var G__11841 = c__5525__auto___11839;
var G__11842 = cljs.core.count.call(null,c__5525__auto___11839);
var G__11843 = (0);
seq__11806_11822 = G__11840;
chunk__11810_11823 = G__11841;
count__11811_11824 = G__11842;
i__11812_11825 = G__11843;
continue;
} else {
var component__11247__auto___11844 = cljs.core.first.call(null,seq__11806_11838__$1);
speclj.components.install.call(null,component__11247__auto___11844,description__11246__auto___11819);


var G__11849 = cljs.core.next.call(null,seq__11806_11838__$1);
var G__11850 = null;
var G__11851 = (0);
var G__11852 = (0);
seq__11806_11822 = G__11849;
chunk__11810_11823 = G__11850;
count__11811_11824 = G__11851;
i__11812_11825 = G__11852;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__11801_11820);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__11246__auto___11819);
}


//# sourceMappingURL=app_spec.js.map
