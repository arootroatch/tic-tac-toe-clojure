// Compiled by ClojureScript 1.11.132 {:optimizations :none}
goog.provide('tic_tac_toe.app_spec');
goog.require('cljs.core');
goog.require('speclj.core');
goog.require('c3kit.wire.spec_helper');
goog.require('tic_tac_toe.app');
var description__9652__auto___13147 = speclj.components.new_description.call(null,"app",false,"tic-tac-toe.app-spec");
var _STAR_parent_description_STAR__orig_val__13135_13148 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__13136_13149 = description__9652__auto___13147;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__13136_13149);

try{var seq__13139_13150 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,5,(5),cljs.core.PersistentVector.EMPTY_NODE,[c3kit.wire.spec_helper.with_root_dom.call(null),speclj.components.new_before.call(null,((function (_STAR_parent_description_STAR__orig_val__13135_13148,_STAR_parent_description_STAR__temp_val__13136_13149,description__9652__auto___13147){
return (function (){
return c3kit.wire.spec_helper.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tic_tac_toe.app.app], null));
});})(_STAR_parent_description_STAR__orig_val__13135_13148,_STAR_parent_description_STAR__temp_val__13136_13149,description__9652__auto___13147))
),speclj.components.new_characteristic.call(null,"renders parent div",((function (_STAR_parent_description_STAR__orig_val__13135_13148,_STAR_parent_description_STAR__temp_val__13136_13149,description__9652__auto___13147){
return (function (){
var value__10152__auto__ = "#app-wrapper";
var node__10153__auto__ = c3kit.wire.spec_helper.select.call(null,value__10152__auto__);
if(cljs.core.truth_(node__10153__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected selector to find node: ",(function (){var temp__5806__auto__ = value__10152__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9757__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9757__auto__);
}
})()].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__13135_13148,_STAR_parent_description_STAR__temp_val__13136_13149,description__9652__auto___13147))
,false),speclj.components.new_characteristic.call(null,"renders mode-selection screen to start",((function (_STAR_parent_description_STAR__orig_val__13135_13148,_STAR_parent_description_STAR__temp_val__13136_13149,description__9652__auto___13147){
return (function (){
var value__10152__auto__ = "#mode-selection";
var node__10153__auto__ = c3kit.wire.spec_helper.select.call(null,value__10152__auto__);
if(cljs.core.truth_(node__10153__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected selector to find node: ",(function (){var temp__5806__auto__ = value__10152__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9757__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9757__auto__);
}
})()].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__13135_13148,_STAR_parent_description_STAR__temp_val__13136_13149,description__9652__auto___13147))
,false),speclj.components.new_characteristic.call(null,"renders ttt heading",((function (_STAR_parent_description_STAR__orig_val__13135_13148,_STAR_parent_description_STAR__temp_val__13136_13149,description__9652__auto___13147){
return (function (){
var expected__9789__auto__ = "Tic-Tac-Toe";
var actual__9790__auto__ = c3kit.wire.spec_helper.text.call(null,"#app-wrapper h1");
if(cljs.core._EQ_.call(null,expected__9789__auto__,actual__9790__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__9789__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9757__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9757__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__9790__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9757__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9757__auto__);
}
})()," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__13135_13148,_STAR_parent_description_STAR__temp_val__13136_13149,description__9652__auto___13147))
,false)],null)));
var chunk__13140_13151 = null;
var count__13141_13152 = (0);
var i__13142_13153 = (0);
while(true){
if((i__13142_13153 < count__13141_13152)){
var component__9653__auto___13154 = cljs.core._nth.call(null,chunk__13140_13151,i__13142_13153);
speclj.components.install.call(null,component__9653__auto___13154,description__9652__auto___13147);


var G__13155 = seq__13139_13150;
var G__13156 = chunk__13140_13151;
var G__13157 = count__13141_13152;
var G__13158 = (i__13142_13153 + (1));
seq__13139_13150 = G__13155;
chunk__13140_13151 = G__13156;
count__13141_13152 = G__13157;
i__13142_13153 = G__13158;
continue;
} else {
var temp__5804__auto___13159 = cljs.core.seq.call(null,seq__13139_13150);
if(temp__5804__auto___13159){
var seq__13139_13160__$1 = temp__5804__auto___13159;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13139_13160__$1)){
var c__5525__auto___13161 = cljs.core.chunk_first.call(null,seq__13139_13160__$1);
var G__13162 = cljs.core.chunk_rest.call(null,seq__13139_13160__$1);
var G__13163 = c__5525__auto___13161;
var G__13164 = cljs.core.count.call(null,c__5525__auto___13161);
var G__13165 = (0);
seq__13139_13150 = G__13162;
chunk__13140_13151 = G__13163;
count__13141_13152 = G__13164;
i__13142_13153 = G__13165;
continue;
} else {
var component__9653__auto___13166 = cljs.core.first.call(null,seq__13139_13160__$1);
speclj.components.install.call(null,component__9653__auto___13166,description__9652__auto___13147);


var G__13167 = cljs.core.next.call(null,seq__13139_13160__$1);
var G__13168 = null;
var G__13169 = (0);
var G__13170 = (0);
seq__13139_13150 = G__13167;
chunk__13140_13151 = G__13168;
count__13141_13152 = G__13169;
i__13142_13153 = G__13170;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__13135_13148);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__9652__auto___13147);
}


//# sourceMappingURL=app_spec.js.map
