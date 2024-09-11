// Compiled by ClojureScript 1.11.132 {:optimizations :none}
goog.provide('tic_tac_toe.player_spec');
goog.require('cljs.core');
goog.require('speclj.core');
goog.require('tic_tac_toe.player');
var description__20276__auto___21251 = speclj.components.new_description.call(null,"player namespace",false,"tic-tac-toe.player-spec");
var _STAR_parent_description_STAR__orig_val__21221_21252 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__21222_21253 = description__20276__auto___21251;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__21222_21253);

try{var seq__21223_21254 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[(function (){var description__20276__auto____$1 = speclj.components.new_description.call(null,"switch-player",false,"tic-tac-toe.player-spec");
var _STAR_parent_description_STAR__orig_val__21239_21258 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__21240_21259 = description__20276__auto____$1;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__21240_21259);

try{var seq__21241_21260 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_characteristic.call(null,"returns :o if player is :x",((function (_STAR_parent_description_STAR__orig_val__21239_21258,_STAR_parent_description_STAR__temp_val__21240_21259,description__20276__auto____$1,_STAR_parent_description_STAR__orig_val__21221_21252,_STAR_parent_description_STAR__temp_val__21222_21253,description__20276__auto___21251){
return (function (){
var expected__20413__auto__ = new cljs.core.Keyword(null,"o","o",-1350007228);
var actual__20414__auto__ = tic_tac_toe.player.switch_player.call(null,new cljs.core.Keyword(null,"x","x",2099068185));
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
});})(_STAR_parent_description_STAR__orig_val__21239_21258,_STAR_parent_description_STAR__temp_val__21240_21259,description__20276__auto____$1,_STAR_parent_description_STAR__orig_val__21221_21252,_STAR_parent_description_STAR__temp_val__21222_21253,description__20276__auto___21251))
,false),speclj.components.new_characteristic.call(null,"returns :x if player is :o",((function (_STAR_parent_description_STAR__orig_val__21239_21258,_STAR_parent_description_STAR__temp_val__21240_21259,description__20276__auto____$1,_STAR_parent_description_STAR__orig_val__21221_21252,_STAR_parent_description_STAR__temp_val__21222_21253,description__20276__auto___21251){
return (function (){
var expected__20413__auto__ = new cljs.core.Keyword(null,"x","x",2099068185);
var actual__20414__auto__ = tic_tac_toe.player.switch_player.call(null,new cljs.core.Keyword(null,"o","o",-1350007228));
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
});})(_STAR_parent_description_STAR__orig_val__21239_21258,_STAR_parent_description_STAR__temp_val__21240_21259,description__20276__auto____$1,_STAR_parent_description_STAR__orig_val__21221_21252,_STAR_parent_description_STAR__temp_val__21222_21253,description__20276__auto___21251))
,false)],null)));
var chunk__21242_21261 = null;
var count__21243_21262 = (0);
var i__21244_21263 = (0);
while(true){
if((i__21244_21263 < count__21243_21262)){
var component__20277__auto___21264 = cljs.core._nth.call(null,chunk__21242_21261,i__21244_21263);
speclj.components.install.call(null,component__20277__auto___21264,description__20276__auto____$1);


var G__21265 = seq__21241_21260;
var G__21266 = chunk__21242_21261;
var G__21267 = count__21243_21262;
var G__21268 = (i__21244_21263 + (1));
seq__21241_21260 = G__21265;
chunk__21242_21261 = G__21266;
count__21243_21262 = G__21267;
i__21244_21263 = G__21268;
continue;
} else {
var temp__5804__auto___21269 = cljs.core.seq.call(null,seq__21241_21260);
if(temp__5804__auto___21269){
var seq__21241_21270__$1 = temp__5804__auto___21269;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21241_21270__$1)){
var c__5525__auto___21271 = cljs.core.chunk_first.call(null,seq__21241_21270__$1);
var G__21272 = cljs.core.chunk_rest.call(null,seq__21241_21270__$1);
var G__21273 = c__5525__auto___21271;
var G__21274 = cljs.core.count.call(null,c__5525__auto___21271);
var G__21275 = (0);
seq__21241_21260 = G__21272;
chunk__21242_21261 = G__21273;
count__21243_21262 = G__21274;
i__21244_21263 = G__21275;
continue;
} else {
var component__20277__auto___21276 = cljs.core.first.call(null,seq__21241_21270__$1);
speclj.components.install.call(null,component__20277__auto___21276,description__20276__auto____$1);


var G__21277 = cljs.core.next.call(null,seq__21241_21270__$1);
var G__21278 = null;
var G__21279 = (0);
var G__21280 = (0);
seq__21241_21260 = G__21277;
chunk__21242_21261 = G__21278;
count__21243_21262 = G__21279;
i__21244_21263 = G__21280;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__21239_21258);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__20276__auto____$1);
}

return description__20276__auto____$1;
})()],null)));
var chunk__21224_21255 = null;
var count__21225_21256 = (0);
var i__21226_21257 = (0);
while(true){
if((i__21226_21257 < count__21225_21256)){
var component__20277__auto___21281 = cljs.core._nth.call(null,chunk__21224_21255,i__21226_21257);
speclj.components.install.call(null,component__20277__auto___21281,description__20276__auto___21251);


var G__21282 = seq__21223_21254;
var G__21283 = chunk__21224_21255;
var G__21284 = count__21225_21256;
var G__21285 = (i__21226_21257 + (1));
seq__21223_21254 = G__21282;
chunk__21224_21255 = G__21283;
count__21225_21256 = G__21284;
i__21226_21257 = G__21285;
continue;
} else {
var temp__5804__auto___21286 = cljs.core.seq.call(null,seq__21223_21254);
if(temp__5804__auto___21286){
var seq__21223_21287__$1 = temp__5804__auto___21286;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21223_21287__$1)){
var c__5525__auto___21288 = cljs.core.chunk_first.call(null,seq__21223_21287__$1);
var G__21289 = cljs.core.chunk_rest.call(null,seq__21223_21287__$1);
var G__21290 = c__5525__auto___21288;
var G__21291 = cljs.core.count.call(null,c__5525__auto___21288);
var G__21292 = (0);
seq__21223_21254 = G__21289;
chunk__21224_21255 = G__21290;
count__21225_21256 = G__21291;
i__21226_21257 = G__21292;
continue;
} else {
var component__20277__auto___21293 = cljs.core.first.call(null,seq__21223_21287__$1);
speclj.components.install.call(null,component__20277__auto___21293,description__20276__auto___21251);


var G__21294 = cljs.core.next.call(null,seq__21223_21287__$1);
var G__21295 = null;
var G__21296 = (0);
var G__21297 = (0);
seq__21223_21254 = G__21294;
chunk__21224_21255 = G__21295;
count__21225_21256 = G__21296;
i__21226_21257 = G__21297;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__21221_21252);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__20276__auto___21251);
}


//# sourceMappingURL=player_spec.js.map
