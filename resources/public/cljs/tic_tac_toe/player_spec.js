// Compiled by ClojureScript 1.11.132 {:optimizations :none}
goog.provide('tic_tac_toe.player_spec');
goog.require('cljs.core');
goog.require('speclj.core');
goog.require('tic_tac_toe.player');
var description__7638__auto___8250 = speclj.components.new_description.call(null,"player namespace",false,"tic-tac-toe.player-spec");
var _STAR_parent_description_STAR__orig_val__8122_8251 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__8124_8252 = description__7638__auto___8250;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__8124_8252);

try{var seq__8129_8253 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[(function (){var description__7638__auto____$1 = speclj.components.new_description.call(null,"switch-player",false,"tic-tac-toe.player-spec");
var _STAR_parent_description_STAR__orig_val__8218_8257 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__8219_8258 = description__7638__auto____$1;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__8219_8258);

try{var seq__8220_8259 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_characteristic.call(null,"returns :o if player is :x",((function (_STAR_parent_description_STAR__orig_val__8218_8257,_STAR_parent_description_STAR__temp_val__8219_8258,description__7638__auto____$1,_STAR_parent_description_STAR__orig_val__8122_8251,_STAR_parent_description_STAR__temp_val__8124_8252,description__7638__auto___8250){
return (function (){
var expected__7775__auto__ = new cljs.core.Keyword(null,"o","o",-1350007228);
var actual__7776__auto__ = tic_tac_toe.player.switch_player.call(null,new cljs.core.Keyword(null,"x","x",2099068185));
if(cljs.core._EQ_.call(null,expected__7775__auto__,actual__7776__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__7775__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7743__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7743__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__7776__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7743__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7743__auto__);
}
})()," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__8218_8257,_STAR_parent_description_STAR__temp_val__8219_8258,description__7638__auto____$1,_STAR_parent_description_STAR__orig_val__8122_8251,_STAR_parent_description_STAR__temp_val__8124_8252,description__7638__auto___8250))
,false),speclj.components.new_characteristic.call(null,"returns :x if player is :o",((function (_STAR_parent_description_STAR__orig_val__8218_8257,_STAR_parent_description_STAR__temp_val__8219_8258,description__7638__auto____$1,_STAR_parent_description_STAR__orig_val__8122_8251,_STAR_parent_description_STAR__temp_val__8124_8252,description__7638__auto___8250){
return (function (){
var expected__7775__auto__ = new cljs.core.Keyword(null,"x","x",2099068185);
var actual__7776__auto__ = tic_tac_toe.player.switch_player.call(null,new cljs.core.Keyword(null,"o","o",-1350007228));
if(cljs.core._EQ_.call(null,expected__7775__auto__,actual__7776__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__7775__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7743__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7743__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__7776__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7743__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7743__auto__);
}
})()," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__8218_8257,_STAR_parent_description_STAR__temp_val__8219_8258,description__7638__auto____$1,_STAR_parent_description_STAR__orig_val__8122_8251,_STAR_parent_description_STAR__temp_val__8124_8252,description__7638__auto___8250))
,false)],null)));
var chunk__8221_8260 = null;
var count__8222_8261 = (0);
var i__8223_8262 = (0);
while(true){
if((i__8223_8262 < count__8222_8261)){
var component__7639__auto___8273 = cljs.core._nth.call(null,chunk__8221_8260,i__8223_8262);
speclj.components.install.call(null,component__7639__auto___8273,description__7638__auto____$1);


var G__8274 = seq__8220_8259;
var G__8275 = chunk__8221_8260;
var G__8276 = count__8222_8261;
var G__8277 = (i__8223_8262 + (1));
seq__8220_8259 = G__8274;
chunk__8221_8260 = G__8275;
count__8222_8261 = G__8276;
i__8223_8262 = G__8277;
continue;
} else {
var temp__5804__auto___8278 = cljs.core.seq.call(null,seq__8220_8259);
if(temp__5804__auto___8278){
var seq__8220_8281__$1 = temp__5804__auto___8278;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8220_8281__$1)){
var c__5525__auto___8282 = cljs.core.chunk_first.call(null,seq__8220_8281__$1);
var G__8283 = cljs.core.chunk_rest.call(null,seq__8220_8281__$1);
var G__8284 = c__5525__auto___8282;
var G__8285 = cljs.core.count.call(null,c__5525__auto___8282);
var G__8286 = (0);
seq__8220_8259 = G__8283;
chunk__8221_8260 = G__8284;
count__8222_8261 = G__8285;
i__8223_8262 = G__8286;
continue;
} else {
var component__7639__auto___8288 = cljs.core.first.call(null,seq__8220_8281__$1);
speclj.components.install.call(null,component__7639__auto___8288,description__7638__auto____$1);


var G__8289 = cljs.core.next.call(null,seq__8220_8281__$1);
var G__8290 = null;
var G__8291 = (0);
var G__8292 = (0);
seq__8220_8259 = G__8289;
chunk__8221_8260 = G__8290;
count__8222_8261 = G__8291;
i__8223_8262 = G__8292;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__8218_8257);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__7638__auto____$1);
}

return description__7638__auto____$1;
})()],null)));
var chunk__8137_8254 = null;
var count__8138_8255 = (0);
var i__8139_8256 = (0);
while(true){
if((i__8139_8256 < count__8138_8255)){
var component__7639__auto___8296 = cljs.core._nth.call(null,chunk__8137_8254,i__8139_8256);
speclj.components.install.call(null,component__7639__auto___8296,description__7638__auto___8250);


var G__8297 = seq__8129_8253;
var G__8298 = chunk__8137_8254;
var G__8299 = count__8138_8255;
var G__8300 = (i__8139_8256 + (1));
seq__8129_8253 = G__8297;
chunk__8137_8254 = G__8298;
count__8138_8255 = G__8299;
i__8139_8256 = G__8300;
continue;
} else {
var temp__5804__auto___8301 = cljs.core.seq.call(null,seq__8129_8253);
if(temp__5804__auto___8301){
var seq__8129_8302__$1 = temp__5804__auto___8301;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8129_8302__$1)){
var c__5525__auto___8303 = cljs.core.chunk_first.call(null,seq__8129_8302__$1);
var G__8304 = cljs.core.chunk_rest.call(null,seq__8129_8302__$1);
var G__8305 = c__5525__auto___8303;
var G__8306 = cljs.core.count.call(null,c__5525__auto___8303);
var G__8307 = (0);
seq__8129_8253 = G__8304;
chunk__8137_8254 = G__8305;
count__8138_8255 = G__8306;
i__8139_8256 = G__8307;
continue;
} else {
var component__7639__auto___8308 = cljs.core.first.call(null,seq__8129_8302__$1);
speclj.components.install.call(null,component__7639__auto___8308,description__7638__auto___8250);


var G__8309 = cljs.core.next.call(null,seq__8129_8302__$1);
var G__8310 = null;
var G__8311 = (0);
var G__8312 = (0);
seq__8129_8253 = G__8309;
chunk__8137_8254 = G__8310;
count__8138_8255 = G__8311;
i__8139_8256 = G__8312;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__8122_8251);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__7638__auto___8250);
}


//# sourceMappingURL=player_spec.js.map
