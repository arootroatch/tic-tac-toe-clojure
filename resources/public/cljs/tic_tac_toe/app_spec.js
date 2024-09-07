// Compiled by ClojureScript 1.11.132 {:optimizations :none}
goog.provide('tic_tac_toe.app_spec');
goog.require('cljs.core');
goog.require('speclj.core');
goog.require('c3kit.wire.spec_helper');
goog.require('tic_tac_toe.app');
var description__11247__auto___11806 = speclj.components.new_description.call(null,"app",false,"tic-tac-toe.app-spec");
var _STAR_parent_description_STAR__orig_val__11800_11807 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__11801_11808 = description__11247__auto___11806;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__11801_11808);

try{var seq__11802_11809 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,5,(5),cljs.core.PersistentVector.EMPTY_NODE,[c3kit.wire.spec_helper.with_root_dom.call(null),speclj.components.new_before.call(null,((function (_STAR_parent_description_STAR__orig_val__11800_11807,_STAR_parent_description_STAR__temp_val__11801_11808,description__11247__auto___11806){
return (function (){
return c3kit.wire.spec_helper.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tic_tac_toe.app.app], null));
});})(_STAR_parent_description_STAR__orig_val__11800_11807,_STAR_parent_description_STAR__temp_val__11801_11808,description__11247__auto___11806))
),speclj.components.new_characteristic.call(null,"renders parent div",((function (_STAR_parent_description_STAR__orig_val__11800_11807,_STAR_parent_description_STAR__temp_val__11801_11808,description__11247__auto___11806){
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
});})(_STAR_parent_description_STAR__orig_val__11800_11807,_STAR_parent_description_STAR__temp_val__11801_11808,description__11247__auto___11806))
,false),speclj.components.new_characteristic.call(null,"renders mode-selection screen to start",((function (_STAR_parent_description_STAR__orig_val__11800_11807,_STAR_parent_description_STAR__temp_val__11801_11808,description__11247__auto___11806){
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
});})(_STAR_parent_description_STAR__orig_val__11800_11807,_STAR_parent_description_STAR__temp_val__11801_11808,description__11247__auto___11806))
,false),speclj.components.new_characteristic.call(null,"renders ttt heading",((function (_STAR_parent_description_STAR__orig_val__11800_11807,_STAR_parent_description_STAR__temp_val__11801_11808,description__11247__auto___11806){
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
});})(_STAR_parent_description_STAR__orig_val__11800_11807,_STAR_parent_description_STAR__temp_val__11801_11808,description__11247__auto___11806))
,false)],null)));
var chunk__11803_11810 = null;
var count__11804_11811 = (0);
var i__11805_11812 = (0);
while(true){
if((i__11805_11812 < count__11804_11811)){
var component__11248__auto___11813 = cljs.core._nth.call(null,chunk__11803_11810,i__11805_11812);
speclj.components.install.call(null,component__11248__auto___11813,description__11247__auto___11806);


var G__11814 = seq__11802_11809;
var G__11815 = chunk__11803_11810;
var G__11816 = count__11804_11811;
var G__11817 = (i__11805_11812 + (1));
seq__11802_11809 = G__11814;
chunk__11803_11810 = G__11815;
count__11804_11811 = G__11816;
i__11805_11812 = G__11817;
continue;
} else {
var temp__5804__auto___11818 = cljs.core.seq.call(null,seq__11802_11809);
if(temp__5804__auto___11818){
var seq__11802_11819__$1 = temp__5804__auto___11818;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11802_11819__$1)){
var c__5525__auto___11820 = cljs.core.chunk_first.call(null,seq__11802_11819__$1);
var G__11821 = cljs.core.chunk_rest.call(null,seq__11802_11819__$1);
var G__11822 = c__5525__auto___11820;
var G__11823 = cljs.core.count.call(null,c__5525__auto___11820);
var G__11824 = (0);
seq__11802_11809 = G__11821;
chunk__11803_11810 = G__11822;
count__11804_11811 = G__11823;
i__11805_11812 = G__11824;
continue;
} else {
var component__11248__auto___11825 = cljs.core.first.call(null,seq__11802_11819__$1);
speclj.components.install.call(null,component__11248__auto___11825,description__11247__auto___11806);


var G__11826 = cljs.core.next.call(null,seq__11802_11819__$1);
var G__11827 = null;
var G__11828 = (0);
var G__11829 = (0);
seq__11802_11809 = G__11826;
chunk__11803_11810 = G__11827;
count__11804_11811 = G__11828;
i__11805_11812 = G__11829;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__11800_11807);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__11247__auto___11806);
}


//# sourceMappingURL=app_spec.js.map
