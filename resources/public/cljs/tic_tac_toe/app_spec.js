// Compiled by ClojureScript 1.11.132 {:optimizations :none}
goog.provide('tic_tac_toe.app_spec');
goog.require('cljs.core');
goog.require('speclj.core');
goog.require('c3kit.wire.spec_helper');
goog.require('tic_tac_toe.app');
var description__11279__auto___11852 = speclj.components.new_description.call(null,"app",false,"tic-tac-toe.app-spec");
var _STAR_parent_description_STAR__orig_val__11834_11853 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__11835_11854 = description__11279__auto___11852;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__11835_11854);

try{var seq__11839_11855 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,5,(5),cljs.core.PersistentVector.EMPTY_NODE,[c3kit.wire.spec_helper.with_root_dom.call(null),speclj.components.new_before.call(null,((function (_STAR_parent_description_STAR__orig_val__11834_11853,_STAR_parent_description_STAR__temp_val__11835_11854,description__11279__auto___11852){
return (function (){
return c3kit.wire.spec_helper.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tic_tac_toe.app.app], null));
});})(_STAR_parent_description_STAR__orig_val__11834_11853,_STAR_parent_description_STAR__temp_val__11835_11854,description__11279__auto___11852))
),speclj.components.new_characteristic.call(null,"renders parent div",((function (_STAR_parent_description_STAR__orig_val__11834_11853,_STAR_parent_description_STAR__temp_val__11835_11854,description__11279__auto___11852){
return (function (){
var value__11779__auto__ = "#app-wrapper";
var node__11780__auto__ = c3kit.wire.spec_helper.select.call(null,value__11779__auto__);
if(cljs.core.truth_(node__11780__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected selector to find node: ",(function (){var temp__5806__auto__ = value__11779__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11384__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11384__auto__);
}
})()].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__11834_11853,_STAR_parent_description_STAR__temp_val__11835_11854,description__11279__auto___11852))
,false),speclj.components.new_characteristic.call(null,"renders mode-selection screen to start",((function (_STAR_parent_description_STAR__orig_val__11834_11853,_STAR_parent_description_STAR__temp_val__11835_11854,description__11279__auto___11852){
return (function (){
var value__11779__auto__ = "#mode-selection";
var node__11780__auto__ = c3kit.wire.spec_helper.select.call(null,value__11779__auto__);
if(cljs.core.truth_(node__11780__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected selector to find node: ",(function (){var temp__5806__auto__ = value__11779__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11384__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11384__auto__);
}
})()].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__11834_11853,_STAR_parent_description_STAR__temp_val__11835_11854,description__11279__auto___11852))
,false),speclj.components.new_characteristic.call(null,"renders ttt heading",((function (_STAR_parent_description_STAR__orig_val__11834_11853,_STAR_parent_description_STAR__temp_val__11835_11854,description__11279__auto___11852){
return (function (){
var expected__11416__auto__ = "Tic-Tac-Toe";
var actual__11417__auto__ = c3kit.wire.spec_helper.text.call(null,"#app-wrapper h1");
if(cljs.core._EQ_.call(null,expected__11416__auto__,actual__11417__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__11416__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11384__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11384__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__11417__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11384__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11384__auto__);
}
})()," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__11834_11853,_STAR_parent_description_STAR__temp_val__11835_11854,description__11279__auto___11852))
,false)],null)));
var chunk__11841_11856 = null;
var count__11843_11857 = (0);
var i__11845_11858 = (0);
while(true){
if((i__11845_11858 < count__11843_11857)){
var component__11280__auto___11859 = cljs.core._nth.call(null,chunk__11841_11856,i__11845_11858);
speclj.components.install.call(null,component__11280__auto___11859,description__11279__auto___11852);


var G__11860 = seq__11839_11855;
var G__11861 = chunk__11841_11856;
var G__11862 = count__11843_11857;
var G__11863 = (i__11845_11858 + (1));
seq__11839_11855 = G__11860;
chunk__11841_11856 = G__11861;
count__11843_11857 = G__11862;
i__11845_11858 = G__11863;
continue;
} else {
var temp__5804__auto___11864 = cljs.core.seq.call(null,seq__11839_11855);
if(temp__5804__auto___11864){
var seq__11839_11865__$1 = temp__5804__auto___11864;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11839_11865__$1)){
var c__5525__auto___11866 = cljs.core.chunk_first.call(null,seq__11839_11865__$1);
var G__11867 = cljs.core.chunk_rest.call(null,seq__11839_11865__$1);
var G__11868 = c__5525__auto___11866;
var G__11869 = cljs.core.count.call(null,c__5525__auto___11866);
var G__11870 = (0);
seq__11839_11855 = G__11867;
chunk__11841_11856 = G__11868;
count__11843_11857 = G__11869;
i__11845_11858 = G__11870;
continue;
} else {
var component__11280__auto___11871 = cljs.core.first.call(null,seq__11839_11865__$1);
speclj.components.install.call(null,component__11280__auto___11871,description__11279__auto___11852);


var G__11872 = cljs.core.next.call(null,seq__11839_11865__$1);
var G__11873 = null;
var G__11874 = (0);
var G__11875 = (0);
seq__11839_11855 = G__11872;
chunk__11841_11856 = G__11873;
count__11843_11857 = G__11874;
i__11845_11858 = G__11875;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__11834_11853);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__11279__auto___11852);
}


//# sourceMappingURL=app_spec.js.map
