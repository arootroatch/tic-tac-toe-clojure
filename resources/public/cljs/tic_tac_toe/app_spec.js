// Compiled by ClojureScript 1.11.132 {:optimizations :none}
goog.provide('tic_tac_toe.app_spec');
goog.require('cljs.core');
goog.require('speclj.core');
goog.require('c3kit.wire.spec_helper');
goog.require('tic_tac_toe.app');
var description__11264__auto___11845 = speclj.components.new_description.call(null,"app",false,"tic-tac-toe.app-spec");
var _STAR_parent_description_STAR__orig_val__11822_11846 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__11824_11847 = description__11264__auto___11845;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__11824_11847);

try{var seq__11829_11848 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,5,(5),cljs.core.PersistentVector.EMPTY_NODE,[c3kit.wire.spec_helper.with_root_dom.call(null),speclj.components.new_before.call(null,((function (_STAR_parent_description_STAR__orig_val__11822_11846,_STAR_parent_description_STAR__temp_val__11824_11847,description__11264__auto___11845){
return (function (){
return c3kit.wire.spec_helper.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tic_tac_toe.app.app], null));
});})(_STAR_parent_description_STAR__orig_val__11822_11846,_STAR_parent_description_STAR__temp_val__11824_11847,description__11264__auto___11845))
),speclj.components.new_characteristic.call(null,"renders parent div",((function (_STAR_parent_description_STAR__orig_val__11822_11846,_STAR_parent_description_STAR__temp_val__11824_11847,description__11264__auto___11845){
return (function (){
var value__11764__auto__ = "#app-wrapper";
var node__11765__auto__ = c3kit.wire.spec_helper.select.call(null,value__11764__auto__);
if(cljs.core.truth_(node__11765__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected selector to find node: ",(function (){var temp__5806__auto__ = value__11764__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11369__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11369__auto__);
}
})()].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__11822_11846,_STAR_parent_description_STAR__temp_val__11824_11847,description__11264__auto___11845))
,false),speclj.components.new_characteristic.call(null,"renders mode-selection screen to start",((function (_STAR_parent_description_STAR__orig_val__11822_11846,_STAR_parent_description_STAR__temp_val__11824_11847,description__11264__auto___11845){
return (function (){
var value__11764__auto__ = "#mode-selection";
var node__11765__auto__ = c3kit.wire.spec_helper.select.call(null,value__11764__auto__);
if(cljs.core.truth_(node__11765__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected selector to find node: ",(function (){var temp__5806__auto__ = value__11764__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11369__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11369__auto__);
}
})()].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__11822_11846,_STAR_parent_description_STAR__temp_val__11824_11847,description__11264__auto___11845))
,false),speclj.components.new_characteristic.call(null,"renders ttt heading",((function (_STAR_parent_description_STAR__orig_val__11822_11846,_STAR_parent_description_STAR__temp_val__11824_11847,description__11264__auto___11845){
return (function (){
var expected__11401__auto__ = "Tic-Tac-Toe";
var actual__11402__auto__ = c3kit.wire.spec_helper.text.call(null,"#app-wrapper h1");
if(cljs.core._EQ_.call(null,expected__11401__auto__,actual__11402__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__11401__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11369__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11369__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__11402__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11369__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11369__auto__);
}
})()," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__11822_11846,_STAR_parent_description_STAR__temp_val__11824_11847,description__11264__auto___11845))
,false)],null)));
var chunk__11832_11849 = null;
var count__11834_11850 = (0);
var i__11837_11851 = (0);
while(true){
if((i__11837_11851 < count__11834_11850)){
var component__11265__auto___11853 = cljs.core._nth.call(null,chunk__11832_11849,i__11837_11851);
speclj.components.install.call(null,component__11265__auto___11853,description__11264__auto___11845);


var G__11857 = seq__11829_11848;
var G__11858 = chunk__11832_11849;
var G__11859 = count__11834_11850;
var G__11860 = (i__11837_11851 + (1));
seq__11829_11848 = G__11857;
chunk__11832_11849 = G__11858;
count__11834_11850 = G__11859;
i__11837_11851 = G__11860;
continue;
} else {
var temp__5804__auto___11861 = cljs.core.seq.call(null,seq__11829_11848);
if(temp__5804__auto___11861){
var seq__11829_11862__$1 = temp__5804__auto___11861;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11829_11862__$1)){
var c__5525__auto___11865 = cljs.core.chunk_first.call(null,seq__11829_11862__$1);
var G__11867 = cljs.core.chunk_rest.call(null,seq__11829_11862__$1);
var G__11868 = c__5525__auto___11865;
var G__11870 = cljs.core.count.call(null,c__5525__auto___11865);
var G__11871 = (0);
seq__11829_11848 = G__11867;
chunk__11832_11849 = G__11868;
count__11834_11850 = G__11870;
i__11837_11851 = G__11871;
continue;
} else {
var component__11265__auto___11874 = cljs.core.first.call(null,seq__11829_11862__$1);
speclj.components.install.call(null,component__11265__auto___11874,description__11264__auto___11845);


var G__11875 = cljs.core.next.call(null,seq__11829_11862__$1);
var G__11876 = null;
var G__11877 = (0);
var G__11878 = (0);
seq__11829_11848 = G__11875;
chunk__11832_11849 = G__11876;
count__11834_11850 = G__11877;
i__11837_11851 = G__11878;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__11822_11846);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__11264__auto___11845);
}


//# sourceMappingURL=app_spec.js.map
