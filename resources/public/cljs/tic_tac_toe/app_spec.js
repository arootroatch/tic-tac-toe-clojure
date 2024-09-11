// Compiled by ClojureScript 1.11.132 {:optimizations :none}
goog.provide('tic_tac_toe.app_spec');
goog.require('cljs.core');
goog.require('speclj.core');
goog.require('c3kit.wire.spec_helper');
goog.require('tic_tac_toe.app');
var description__20276__auto___21713 = speclj.components.new_description.call(null,"app",false,"tic-tac-toe.app-spec");
var _STAR_parent_description_STAR__orig_val__21701_21714 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__21702_21715 = description__20276__auto___21713;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__21702_21715);

try{var seq__21703_21716 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,5,(5),cljs.core.PersistentVector.EMPTY_NODE,[c3kit.wire.spec_helper.with_root_dom.call(null),speclj.components.new_before.call(null,((function (_STAR_parent_description_STAR__orig_val__21701_21714,_STAR_parent_description_STAR__temp_val__21702_21715,description__20276__auto___21713){
return (function (){
return c3kit.wire.spec_helper.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tic_tac_toe.app.app], null));
});})(_STAR_parent_description_STAR__orig_val__21701_21714,_STAR_parent_description_STAR__temp_val__21702_21715,description__20276__auto___21713))
),speclj.components.new_characteristic.call(null,"renders parent div",((function (_STAR_parent_description_STAR__orig_val__21701_21714,_STAR_parent_description_STAR__temp_val__21702_21715,description__20276__auto___21713){
return (function (){
var value__21320__auto__ = "#app-wrapper";
var node__21321__auto__ = c3kit.wire.spec_helper.select.call(null,value__21320__auto__);
if(cljs.core.truth_(node__21321__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected selector to find node: ",(function (){var temp__5806__auto__ = value__21320__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__20381__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__20381__auto__);
}
})()].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__21701_21714,_STAR_parent_description_STAR__temp_val__21702_21715,description__20276__auto___21713))
,false),speclj.components.new_characteristic.call(null,"renders mode-selection screen to start",((function (_STAR_parent_description_STAR__orig_val__21701_21714,_STAR_parent_description_STAR__temp_val__21702_21715,description__20276__auto___21713){
return (function (){
var value__21320__auto__ = "#mode-selection";
var node__21321__auto__ = c3kit.wire.spec_helper.select.call(null,value__21320__auto__);
if(cljs.core.truth_(node__21321__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected selector to find node: ",(function (){var temp__5806__auto__ = value__21320__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__20381__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__20381__auto__);
}
})()].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__21701_21714,_STAR_parent_description_STAR__temp_val__21702_21715,description__20276__auto___21713))
,false),speclj.components.new_characteristic.call(null,"renders ttt heading",((function (_STAR_parent_description_STAR__orig_val__21701_21714,_STAR_parent_description_STAR__temp_val__21702_21715,description__20276__auto___21713){
return (function (){
var expected__20413__auto__ = "Tic-Tac-Toe";
var actual__20414__auto__ = c3kit.wire.spec_helper.text.call(null,"#app-wrapper h1");
if(cljs.core._EQ_.call(null,expected__20413__auto__,actual__20414__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__20413__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__20381__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__20381__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__20414__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__20381__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__20381__auto__);
}
})()," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__21701_21714,_STAR_parent_description_STAR__temp_val__21702_21715,description__20276__auto___21713))
,false)],null)));
var chunk__21704_21717 = null;
var count__21705_21718 = (0);
var i__21706_21719 = (0);
while(true){
if((i__21706_21719 < count__21705_21718)){
var component__20277__auto___21720 = cljs.core._nth.call(null,chunk__21704_21717,i__21706_21719);
speclj.components.install.call(null,component__20277__auto___21720,description__20276__auto___21713);


var G__21721 = seq__21703_21716;
var G__21722 = chunk__21704_21717;
var G__21723 = count__21705_21718;
var G__21724 = (i__21706_21719 + (1));
seq__21703_21716 = G__21721;
chunk__21704_21717 = G__21722;
count__21705_21718 = G__21723;
i__21706_21719 = G__21724;
continue;
} else {
var temp__5804__auto___21725 = cljs.core.seq.call(null,seq__21703_21716);
if(temp__5804__auto___21725){
var seq__21703_21726__$1 = temp__5804__auto___21725;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21703_21726__$1)){
var c__5525__auto___21727 = cljs.core.chunk_first.call(null,seq__21703_21726__$1);
var G__21728 = cljs.core.chunk_rest.call(null,seq__21703_21726__$1);
var G__21729 = c__5525__auto___21727;
var G__21730 = cljs.core.count.call(null,c__5525__auto___21727);
var G__21731 = (0);
seq__21703_21716 = G__21728;
chunk__21704_21717 = G__21729;
count__21705_21718 = G__21730;
i__21706_21719 = G__21731;
continue;
} else {
var component__20277__auto___21732 = cljs.core.first.call(null,seq__21703_21726__$1);
speclj.components.install.call(null,component__20277__auto___21732,description__20276__auto___21713);


var G__21733 = cljs.core.next.call(null,seq__21703_21726__$1);
var G__21734 = null;
var G__21735 = (0);
var G__21736 = (0);
seq__21703_21716 = G__21733;
chunk__21704_21717 = G__21734;
count__21705_21718 = G__21735;
i__21706_21719 = G__21736;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__21701_21714);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__20276__auto___21713);
}


//# sourceMappingURL=app_spec.js.map
