// Compiled by ClojureScript 1.11.132 {:optimizations :none}
goog.provide('tic_tac_toe.screens.mode_selection_spec');
goog.require('cljs.core');
goog.require('speclj.core');
goog.require('c3kit.wire.spec_helper');
goog.require('tic_tac_toe.print_utils');
goog.require('tic_tac_toe.render_screen');
var description__11244__auto___13225 = speclj.components.new_description.call(null,"mode selection screen",false,"tic-tac-toe.screens.mode-selection-spec");
var _STAR_parent_description_STAR__orig_val__13219_13226 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__13220_13227 = description__11244__auto___13225;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__13220_13227);

try{var seq__13221_13228 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[c3kit.wire.spec_helper.with_root_dom.call(null),speclj.components.new_before.call(null,((function (_STAR_parent_description_STAR__orig_val__13219_13226,_STAR_parent_description_STAR__temp_val__13220_13227,description__11244__auto___13225){
return (function (){
return c3kit.wire.spec_helper.render.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tic_tac_toe.render_screen.render_screen,cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"current-screen","current-screen",-1454713691),new cljs.core.Keyword(null,"mode-selection","mode-selection",986239762)], null))], null));
});})(_STAR_parent_description_STAR__orig_val__13219_13226,_STAR_parent_description_STAR__temp_val__13220_13227,description__11244__auto___13225))
),speclj.components.new_characteristic.call(null,"renders mode selection screen",((function (_STAR_parent_description_STAR__orig_val__13219_13226,_STAR_parent_description_STAR__temp_val__13220_13227,description__11244__auto___13225){
return (function (){
var value__11744__auto___13232 = "#mode-selection";
var node__11745__auto___13233 = c3kit.wire.spec_helper.select.call(null,value__11744__auto___13232);
if(cljs.core.truth_(node__11745__auto___13233)){
} else {
throw (new speclj.platform.SpecFailure(["Expected selector to find node: ",(function (){var temp__5806__auto__ = value__11744__auto___13232;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11349__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11349__auto__);
}
})()].join('')));
}

var expected__11381__auto___13234 = cljs.core.first.call(null,tic_tac_toe.print_utils.mode_prompt);
var actual__11382__auto___13235 = c3kit.wire.spec_helper.text.call(null,"#mode-selection h2");
if(cljs.core._EQ_.call(null,expected__11381__auto___13234,actual__11382__auto___13235)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__11381__auto___13234;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11349__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11349__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__11382__auto___13235;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11349__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11349__auto__);
}
})()," (using =)"].join('')));
}

var expected__11381__auto___13236 = cljs.core.nth.call(null,tic_tac_toe.print_utils.mode_prompt,(1));
var actual__11382__auto___13237 = c3kit.wire.spec_helper.text.call(null,"#mode-selection button:nth-of-type(1)");
if(cljs.core._EQ_.call(null,expected__11381__auto___13236,actual__11382__auto___13237)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__11381__auto___13236;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11349__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11349__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__11382__auto___13237;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11349__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11349__auto__);
}
})()," (using =)"].join('')));
}

var expected__11381__auto___13238 = cljs.core.nth.call(null,tic_tac_toe.print_utils.mode_prompt,(2));
var actual__11382__auto___13239 = c3kit.wire.spec_helper.text.call(null,"#mode-selection button:nth-of-type(2)");
if(cljs.core._EQ_.call(null,expected__11381__auto___13238,actual__11382__auto___13239)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__11381__auto___13238;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11349__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11349__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__11382__auto___13239;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11349__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11349__auto__);
}
})()," (using =)"].join('')));
}

var expected__11381__auto___13240 = cljs.core.nth.call(null,tic_tac_toe.print_utils.mode_prompt,(3));
var actual__11382__auto___13241 = c3kit.wire.spec_helper.text.call(null,"#mode-selection button:nth-of-type(3)");
if(cljs.core._EQ_.call(null,expected__11381__auto___13240,actual__11382__auto___13241)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__11381__auto___13240;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11349__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11349__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__11382__auto___13241;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11349__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11349__auto__);
}
})()," (using =)"].join('')));
}

var expected__11381__auto__ = cljs.core.nth.call(null,tic_tac_toe.print_utils.mode_prompt,(4));
var actual__11382__auto__ = c3kit.wire.spec_helper.text.call(null,"#mode-selection button:nth-of-type(4)");
if(cljs.core._EQ_.call(null,expected__11381__auto__,actual__11382__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__11381__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11349__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11349__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__11382__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11349__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11349__auto__);
}
})()," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__13219_13226,_STAR_parent_description_STAR__temp_val__13220_13227,description__11244__auto___13225))
,false)],null)));
var chunk__13222_13229 = null;
var count__13223_13230 = (0);
var i__13224_13231 = (0);
while(true){
if((i__13224_13231 < count__13223_13230)){
var component__11245__auto___13242 = cljs.core._nth.call(null,chunk__13222_13229,i__13224_13231);
speclj.components.install.call(null,component__11245__auto___13242,description__11244__auto___13225);


var G__13243 = seq__13221_13228;
var G__13244 = chunk__13222_13229;
var G__13245 = count__13223_13230;
var G__13246 = (i__13224_13231 + (1));
seq__13221_13228 = G__13243;
chunk__13222_13229 = G__13244;
count__13223_13230 = G__13245;
i__13224_13231 = G__13246;
continue;
} else {
var temp__5804__auto___13247 = cljs.core.seq.call(null,seq__13221_13228);
if(temp__5804__auto___13247){
var seq__13221_13248__$1 = temp__5804__auto___13247;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13221_13248__$1)){
var c__5525__auto___13249 = cljs.core.chunk_first.call(null,seq__13221_13248__$1);
var G__13250 = cljs.core.chunk_rest.call(null,seq__13221_13248__$1);
var G__13251 = c__5525__auto___13249;
var G__13252 = cljs.core.count.call(null,c__5525__auto___13249);
var G__13253 = (0);
seq__13221_13228 = G__13250;
chunk__13222_13229 = G__13251;
count__13223_13230 = G__13252;
i__13224_13231 = G__13253;
continue;
} else {
var component__11245__auto___13254 = cljs.core.first.call(null,seq__13221_13248__$1);
speclj.components.install.call(null,component__11245__auto___13254,description__11244__auto___13225);


var G__13255 = cljs.core.next.call(null,seq__13221_13248__$1);
var G__13256 = null;
var G__13257 = (0);
var G__13258 = (0);
seq__13221_13228 = G__13255;
chunk__13222_13229 = G__13256;
count__13223_13230 = G__13257;
i__13224_13231 = G__13258;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__13219_13226);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__11244__auto___13225);
}


//# sourceMappingURL=mode_selection_spec.js.map
