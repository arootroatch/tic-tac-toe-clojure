// Compiled by ClojureScript 1.11.132 {:optimizations :none}
goog.provide('tic_tac_toe.main_spec');
goog.require('cljs.core');
goog.require('speclj.core');
goog.require('c3kit.wire.spec_helper');
goog.require('tic_tac_toe.main');
var description__11157__auto___11714 = speclj.components.new_description.call(null,"main",false,"tic-tac-toe.main-spec");
var _STAR_parent_description_STAR__orig_val__11708_11715 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__11709_11716 = description__11157__auto___11714;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__11709_11716);

try{var seq__11710_11717 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[c3kit.wire.spec_helper.with_root_dom.call(null),speclj.components.new_before.call(null,((function (_STAR_parent_description_STAR__orig_val__11708_11715,_STAR_parent_description_STAR__temp_val__11709_11716,description__11157__auto___11714){
return (function (){
return c3kit.wire.spec_helper.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tic_tac_toe.main.base], null));
});})(_STAR_parent_description_STAR__orig_val__11708_11715,_STAR_parent_description_STAR__temp_val__11709_11716,description__11157__auto___11714))
),speclj.components.new_characteristic.call(null,"does stuff",((function (_STAR_parent_description_STAR__orig_val__11708_11715,_STAR_parent_description_STAR__temp_val__11709_11716,description__11157__auto___11714){
return (function (){
var expected__11294__auto___11721 = (1);
var actual__11295__auto___11722 = tic_tac_toe.main.one;
if(cljs.core._EQ_.call(null,expected__11294__auto___11721,actual__11295__auto___11722)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__11294__auto___11721;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11262__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11262__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__11295__auto___11722;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11262__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11262__auto__);
}
})()," (using =)"].join('')));
}

var value__11657__auto___11723 = "#bob";
var node__11658__auto___11724 = c3kit.wire.spec_helper.select.call(null,value__11657__auto___11723);
if(cljs.core.truth_(node__11658__auto___11724)){
} else {
throw (new speclj.platform.SpecFailure(["Expected selector to find node: ",(function (){var temp__5806__auto__ = value__11657__auto___11723;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11262__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11262__auto__);
}
})()].join('')));
}

var expected__11294__auto__ = "file:///";
var actual__11295__auto__ = c3kit.wire.spec_helper.href.call(null,"#bob a");
if(cljs.core._EQ_.call(null,expected__11294__auto__,actual__11295__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__11294__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11262__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11262__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__11295__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11262__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11262__auto__);
}
})()," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__11708_11715,_STAR_parent_description_STAR__temp_val__11709_11716,description__11157__auto___11714))
,false)],null)));
var chunk__11711_11718 = null;
var count__11712_11719 = (0);
var i__11713_11720 = (0);
while(true){
if((i__11713_11720 < count__11712_11719)){
var component__11158__auto___11725 = cljs.core._nth.call(null,chunk__11711_11718,i__11713_11720);
speclj.components.install.call(null,component__11158__auto___11725,description__11157__auto___11714);


var G__11726 = seq__11710_11717;
var G__11727 = chunk__11711_11718;
var G__11728 = count__11712_11719;
var G__11729 = (i__11713_11720 + (1));
seq__11710_11717 = G__11726;
chunk__11711_11718 = G__11727;
count__11712_11719 = G__11728;
i__11713_11720 = G__11729;
continue;
} else {
var temp__5804__auto___11730 = cljs.core.seq.call(null,seq__11710_11717);
if(temp__5804__auto___11730){
var seq__11710_11731__$1 = temp__5804__auto___11730;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11710_11731__$1)){
var c__5525__auto___11732 = cljs.core.chunk_first.call(null,seq__11710_11731__$1);
var G__11733 = cljs.core.chunk_rest.call(null,seq__11710_11731__$1);
var G__11734 = c__5525__auto___11732;
var G__11735 = cljs.core.count.call(null,c__5525__auto___11732);
var G__11736 = (0);
seq__11710_11717 = G__11733;
chunk__11711_11718 = G__11734;
count__11712_11719 = G__11735;
i__11713_11720 = G__11736;
continue;
} else {
var component__11158__auto___11737 = cljs.core.first.call(null,seq__11710_11731__$1);
speclj.components.install.call(null,component__11158__auto___11737,description__11157__auto___11714);


var G__11738 = cljs.core.next.call(null,seq__11710_11731__$1);
var G__11739 = null;
var G__11740 = (0);
var G__11741 = (0);
seq__11710_11717 = G__11738;
chunk__11711_11718 = G__11739;
count__11712_11719 = G__11740;
i__11713_11720 = G__11741;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__11708_11715);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__11157__auto___11714);
}


//# sourceMappingURL=main_spec.js.map
