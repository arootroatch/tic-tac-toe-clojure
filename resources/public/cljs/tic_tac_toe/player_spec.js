// Compiled by ClojureScript 1.11.132 {:optimizations :none}
goog.provide('tic_tac_toe.player_spec');
goog.require('cljs.core');
goog.require('speclj.core');
goog.require('tic_tac_toe.player');
var description__9152__auto___10835 = speclj.components.new_description.call(null,"player namespace",false,"tic-tac-toe.player-spec");
var _STAR_parent_description_STAR__orig_val__10688_10836 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__10689_10837 = description__9152__auto___10835;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__10689_10837);

try{var seq__10698_10838 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[(function (){var description__9152__auto____$1 = speclj.components.new_description.call(null,"switch-player",false,"tic-tac-toe.player-spec");
var _STAR_parent_description_STAR__orig_val__10788_10842 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__10789_10843 = description__9152__auto____$1;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__10789_10843);

try{var seq__10791_10844 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_characteristic.call(null,"returns :o if player is :x",((function (_STAR_parent_description_STAR__orig_val__10788_10842,_STAR_parent_description_STAR__temp_val__10789_10843,description__9152__auto____$1,_STAR_parent_description_STAR__orig_val__10688_10836,_STAR_parent_description_STAR__temp_val__10689_10837,description__9152__auto___10835){
return (function (){
var expected__9289__auto__ = new cljs.core.Keyword(null,"o","o",-1350007228);
var actual__9290__auto__ = tic_tac_toe.player.switch_player.call(null,new cljs.core.Keyword(null,"x","x",2099068185));
if(cljs.core._EQ_.call(null,expected__9289__auto__,actual__9290__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__9289__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9257__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9257__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__9290__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9257__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9257__auto__);
}
})()," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__10788_10842,_STAR_parent_description_STAR__temp_val__10789_10843,description__9152__auto____$1,_STAR_parent_description_STAR__orig_val__10688_10836,_STAR_parent_description_STAR__temp_val__10689_10837,description__9152__auto___10835))
,false),speclj.components.new_characteristic.call(null,"returns :x if player is :o",((function (_STAR_parent_description_STAR__orig_val__10788_10842,_STAR_parent_description_STAR__temp_val__10789_10843,description__9152__auto____$1,_STAR_parent_description_STAR__orig_val__10688_10836,_STAR_parent_description_STAR__temp_val__10689_10837,description__9152__auto___10835){
return (function (){
var expected__9289__auto__ = new cljs.core.Keyword(null,"x","x",2099068185);
var actual__9290__auto__ = tic_tac_toe.player.switch_player.call(null,new cljs.core.Keyword(null,"o","o",-1350007228));
if(cljs.core._EQ_.call(null,expected__9289__auto__,actual__9290__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__9289__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9257__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9257__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__9290__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9257__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9257__auto__);
}
})()," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__10788_10842,_STAR_parent_description_STAR__temp_val__10789_10843,description__9152__auto____$1,_STAR_parent_description_STAR__orig_val__10688_10836,_STAR_parent_description_STAR__temp_val__10689_10837,description__9152__auto___10835))
,false)],null)));
var chunk__10792_10845 = null;
var count__10793_10846 = (0);
var i__10794_10847 = (0);
while(true){
if((i__10794_10847 < count__10793_10846)){
var component__9153__auto___10857 = cljs.core._nth.call(null,chunk__10792_10845,i__10794_10847);
speclj.components.install.call(null,component__9153__auto___10857,description__9152__auto____$1);


var G__10858 = seq__10791_10844;
var G__10859 = chunk__10792_10845;
var G__10860 = count__10793_10846;
var G__10861 = (i__10794_10847 + (1));
seq__10791_10844 = G__10858;
chunk__10792_10845 = G__10859;
count__10793_10846 = G__10860;
i__10794_10847 = G__10861;
continue;
} else {
var temp__5804__auto___10862 = cljs.core.seq.call(null,seq__10791_10844);
if(temp__5804__auto___10862){
var seq__10791_10863__$1 = temp__5804__auto___10862;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10791_10863__$1)){
var c__5525__auto___10864 = cljs.core.chunk_first.call(null,seq__10791_10863__$1);
var G__10865 = cljs.core.chunk_rest.call(null,seq__10791_10863__$1);
var G__10866 = c__5525__auto___10864;
var G__10867 = cljs.core.count.call(null,c__5525__auto___10864);
var G__10868 = (0);
seq__10791_10844 = G__10865;
chunk__10792_10845 = G__10866;
count__10793_10846 = G__10867;
i__10794_10847 = G__10868;
continue;
} else {
var component__9153__auto___10869 = cljs.core.first.call(null,seq__10791_10863__$1);
speclj.components.install.call(null,component__9153__auto___10869,description__9152__auto____$1);


var G__10870 = cljs.core.next.call(null,seq__10791_10863__$1);
var G__10871 = null;
var G__10872 = (0);
var G__10873 = (0);
seq__10791_10844 = G__10870;
chunk__10792_10845 = G__10871;
count__10793_10846 = G__10872;
i__10794_10847 = G__10873;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__10788_10842);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__9152__auto____$1);
}

return description__9152__auto____$1;
})()],null)));
var chunk__10699_10839 = null;
var count__10700_10840 = (0);
var i__10701_10841 = (0);
while(true){
if((i__10701_10841 < count__10700_10840)){
var component__9153__auto___10881 = cljs.core._nth.call(null,chunk__10699_10839,i__10701_10841);
speclj.components.install.call(null,component__9153__auto___10881,description__9152__auto___10835);


var G__10882 = seq__10698_10838;
var G__10883 = chunk__10699_10839;
var G__10884 = count__10700_10840;
var G__10885 = (i__10701_10841 + (1));
seq__10698_10838 = G__10882;
chunk__10699_10839 = G__10883;
count__10700_10840 = G__10884;
i__10701_10841 = G__10885;
continue;
} else {
var temp__5804__auto___10886 = cljs.core.seq.call(null,seq__10698_10838);
if(temp__5804__auto___10886){
var seq__10698_10887__$1 = temp__5804__auto___10886;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10698_10887__$1)){
var c__5525__auto___10888 = cljs.core.chunk_first.call(null,seq__10698_10887__$1);
var G__10889 = cljs.core.chunk_rest.call(null,seq__10698_10887__$1);
var G__10890 = c__5525__auto___10888;
var G__10891 = cljs.core.count.call(null,c__5525__auto___10888);
var G__10892 = (0);
seq__10698_10838 = G__10889;
chunk__10699_10839 = G__10890;
count__10700_10840 = G__10891;
i__10701_10841 = G__10892;
continue;
} else {
var component__9153__auto___10893 = cljs.core.first.call(null,seq__10698_10887__$1);
speclj.components.install.call(null,component__9153__auto___10893,description__9152__auto___10835);


var G__10894 = cljs.core.next.call(null,seq__10698_10887__$1);
var G__10895 = null;
var G__10896 = (0);
var G__10897 = (0);
seq__10698_10838 = G__10894;
chunk__10699_10839 = G__10895;
count__10700_10840 = G__10896;
i__10701_10841 = G__10897;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__10688_10836);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__9152__auto___10835);
}


//# sourceMappingURL=player_spec.js.map
