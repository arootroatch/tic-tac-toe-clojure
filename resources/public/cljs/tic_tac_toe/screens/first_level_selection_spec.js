// Compiled by ClojureScript 1.11.132 {:optimizations :none}
goog.provide('tic_tac_toe.screens.first_level_selection_spec');
goog.require('cljs.core');
goog.require('c3kit.wire.spec_helper');
goog.require('speclj.core');
goog.require('tic_tac_toe.print_utils');
goog.require('tic_tac_toe.render_screen');
goog.require('tic_tac_toe.screens.first_level_selection');
if((typeof tic_tac_toe !== 'undefined') && (typeof tic_tac_toe.screens !== 'undefined') && (typeof tic_tac_toe.screens.first_level_selection_spec !== 'undefined') && (typeof tic_tac_toe.screens.first_level_selection_spec.state !== 'undefined')){
} else {
tic_tac_toe.screens.first_level_selection_spec.state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"current-screen","current-screen",-1454713691),new cljs.core.Keyword(null,"first-level-selection","first-level-selection",-675329011)], null));
}
var description__11264__auto___11923 = speclj.components.new_description.call(null,"first level selection screen",false,"tic-tac-toe.screens.first-level-selection-spec");
var _STAR_parent_description_STAR__orig_val__11819_11924 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__11823_11925 = description__11264__auto___11923;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__11823_11925);

try{var seq__11827_11926 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,9,(5),cljs.core.PersistentVector.EMPTY_NODE,[c3kit.wire.spec_helper.with_root_dom.call(null),speclj.components.new_before.call(null,((function (_STAR_parent_description_STAR__orig_val__11819_11924,_STAR_parent_description_STAR__temp_val__11823_11925,description__11264__auto___11923){
return (function (){
cljs.core.reset_BANG_.call(null,tic_tac_toe.screens.first_level_selection_spec.state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"current-screen","current-screen",-1454713691),new cljs.core.Keyword(null,"first-level-selection","first-level-selection",-675329011)], null));

return c3kit.wire.spec_helper.render.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tic_tac_toe.render_screen.render_screen,tic_tac_toe.screens.first_level_selection_spec.state], null));
});})(_STAR_parent_description_STAR__orig_val__11819_11924,_STAR_parent_description_STAR__temp_val__11823_11925,description__11264__auto___11923))
),speclj.components.new_characteristic.call(null,"renders first level selection screen",((function (_STAR_parent_description_STAR__orig_val__11819_11924,_STAR_parent_description_STAR__temp_val__11823_11925,description__11264__auto___11923){
return (function (){
var value__11764__auto___11930 = "#first-level-selection";
var node__11765__auto___11931 = c3kit.wire.spec_helper.select.call(null,value__11764__auto___11930);
if(cljs.core.truth_(node__11765__auto___11931)){
} else {
throw (new speclj.platform.SpecFailure(["Expected selector to find node: ",(function (){var temp__5806__auto__ = value__11764__auto___11930;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11369__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11369__auto__);
}
})()].join('')));
}

var expected__11401__auto___11932 = cljs.core.nth.call(null,tic_tac_toe.print_utils.level_prompt,(2));
var actual__11402__auto___11933 = c3kit.wire.spec_helper.text.call(null,"#first-level-selection h2");
if(cljs.core._EQ_.call(null,expected__11401__auto___11932,actual__11402__auto___11933)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__11401__auto___11932;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11369__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11369__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__11402__auto___11933;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11369__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11369__auto__);
}
})()," (using =)"].join('')));
}

var expected__11401__auto___11934 = cljs.core.nth.call(null,tic_tac_toe.print_utils.level_prompt,(3));
var actual__11402__auto___11935 = c3kit.wire.spec_helper.text.call(null,"#first-level-selection button:nth-of-type(1)");
if(cljs.core._EQ_.call(null,expected__11401__auto___11934,actual__11402__auto___11935)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__11401__auto___11934;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11369__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11369__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__11402__auto___11935;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11369__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11369__auto__);
}
})()," (using =)"].join('')));
}

var expected__11401__auto___11936 = cljs.core.nth.call(null,tic_tac_toe.print_utils.level_prompt,(4));
var actual__11402__auto___11937 = c3kit.wire.spec_helper.text.call(null,"#first-level-selection button:nth-of-type(2)");
if(cljs.core._EQ_.call(null,expected__11401__auto___11936,actual__11402__auto___11937)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__11401__auto___11936;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11369__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11369__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__11402__auto___11937;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11369__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11369__auto__);
}
})()," (using =)"].join('')));
}

var expected__11401__auto__ = cljs.core.nth.call(null,tic_tac_toe.print_utils.level_prompt,(6));
var actual__11402__auto__ = c3kit.wire.spec_helper.text.call(null,"#first-level-selection button:nth-of-type(3)");
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
});})(_STAR_parent_description_STAR__orig_val__11819_11924,_STAR_parent_description_STAR__temp_val__11823_11925,description__11264__auto___11923))
,false),speclj.components.new_characteristic.call(null,"specifies player X if mode is 4",((function (_STAR_parent_description_STAR__orig_val__11819_11924,_STAR_parent_description_STAR__temp_val__11823_11925,description__11264__auto___11923){
return (function (){
cljs.core.swap_BANG_.call(null,tic_tac_toe.screens.first_level_selection_spec.state,cljs.core.assoc,new cljs.core.Keyword(null,"mode","mode",654403691),(4));

c3kit.wire.spec_helper.render.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tic_tac_toe.render_screen.render_screen,tic_tac_toe.screens.first_level_selection_spec.state], null));

var expected__11401__auto__ = cljs.core.first.call(null,tic_tac_toe.print_utils.level_prompt);
var actual__11402__auto__ = c3kit.wire.spec_helper.text.call(null,"#first-level-selection h2");
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
});})(_STAR_parent_description_STAR__orig_val__11819_11924,_STAR_parent_description_STAR__temp_val__11823_11925,description__11264__auto___11923))
,false),speclj.components.new_characteristic.call(null,"sets :first-ai-level to 1 when Easy is clicked",((function (_STAR_parent_description_STAR__orig_val__11819_11924,_STAR_parent_description_STAR__temp_val__11823_11925,description__11264__auto___11923){
return (function (){
c3kit.wire.spec_helper.click_BANG_.call(null,"#first-level-selection button:nth-of-type(1)");

var expected__11401__auto__ = (1);
var actual__11402__auto__ = new cljs.core.Keyword(null,"first-ai-level","first-ai-level",1004633644).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.screens.first_level_selection_spec.state));
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
});})(_STAR_parent_description_STAR__orig_val__11819_11924,_STAR_parent_description_STAR__temp_val__11823_11925,description__11264__auto___11923))
,false),speclj.components.new_characteristic.call(null,"sets :first-ai-level to 2 when Medium is clicked",((function (_STAR_parent_description_STAR__orig_val__11819_11924,_STAR_parent_description_STAR__temp_val__11823_11925,description__11264__auto___11923){
return (function (){
c3kit.wire.spec_helper.click_BANG_.call(null,"#first-level-selection button:nth-of-type(2)");

var expected__11401__auto__ = (2);
var actual__11402__auto__ = new cljs.core.Keyword(null,"first-ai-level","first-ai-level",1004633644).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.screens.first_level_selection_spec.state));
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
});})(_STAR_parent_description_STAR__orig_val__11819_11924,_STAR_parent_description_STAR__temp_val__11823_11925,description__11264__auto___11923))
,false),speclj.components.new_characteristic.call(null,"sets :first-ai-level to 3 when Unbeatable is clicked",((function (_STAR_parent_description_STAR__orig_val__11819_11924,_STAR_parent_description_STAR__temp_val__11823_11925,description__11264__auto___11923){
return (function (){
c3kit.wire.spec_helper.click_BANG_.call(null,"#first-level-selection button:nth-of-type(3)");

var expected__11401__auto__ = (3);
var actual__11402__auto__ = new cljs.core.Keyword(null,"first-ai-level","first-ai-level",1004633644).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.screens.first_level_selection_spec.state));
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
});})(_STAR_parent_description_STAR__orig_val__11819_11924,_STAR_parent_description_STAR__temp_val__11823_11925,description__11264__auto___11923))
,false),speclj.components.new_characteristic.call(null,"sets screen to play upon user selection if not mode 4",((function (_STAR_parent_description_STAR__orig_val__11819_11924,_STAR_parent_description_STAR__temp_val__11823_11925,description__11264__auto___11923){
return (function (){
var seq__11899 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#first-level-selection button:nth-of-type(1)","#first-level-selection button:nth-of-type(2)","#first-level-selection button:nth-of-type(3)"], null));
var chunk__11900 = null;
var count__11901 = (0);
var i__11902 = (0);
while(true){
if((i__11902 < count__11901)){
var item = cljs.core._nth.call(null,chunk__11900,i__11902);
c3kit.wire.spec_helper.click_BANG_.call(null,item);

var expected__11401__auto___11938 = new cljs.core.Keyword(null,"play","play",-580418022);
var actual__11402__auto___11939 = new cljs.core.Keyword(null,"current-screen","current-screen",-1454713691).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.screens.first_level_selection_spec.state));
if(cljs.core._EQ_.call(null,expected__11401__auto___11938,actual__11402__auto___11939)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__11401__auto___11938;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11369__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11369__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__11402__auto___11939;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11369__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11369__auto__);
}
})()," (using =)"].join('')));
}


var G__11940 = seq__11899;
var G__11941 = chunk__11900;
var G__11942 = count__11901;
var G__11943 = (i__11902 + (1));
seq__11899 = G__11940;
chunk__11900 = G__11941;
count__11901 = G__11942;
i__11902 = G__11943;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__11899);
if(temp__5804__auto__){
var seq__11899__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11899__$1)){
var c__5525__auto__ = cljs.core.chunk_first.call(null,seq__11899__$1);
var G__11944 = cljs.core.chunk_rest.call(null,seq__11899__$1);
var G__11945 = c__5525__auto__;
var G__11946 = cljs.core.count.call(null,c__5525__auto__);
var G__11947 = (0);
seq__11899 = G__11944;
chunk__11900 = G__11945;
count__11901 = G__11946;
i__11902 = G__11947;
continue;
} else {
var item = cljs.core.first.call(null,seq__11899__$1);
c3kit.wire.spec_helper.click_BANG_.call(null,item);

var expected__11401__auto___11948 = new cljs.core.Keyword(null,"play","play",-580418022);
var actual__11402__auto___11949 = new cljs.core.Keyword(null,"current-screen","current-screen",-1454713691).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.screens.first_level_selection_spec.state));
if(cljs.core._EQ_.call(null,expected__11401__auto___11948,actual__11402__auto___11949)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__11401__auto___11948;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11369__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11369__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__11402__auto___11949;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11369__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11369__auto__);
}
})()," (using =)"].join('')));
}


var G__11950 = cljs.core.next.call(null,seq__11899__$1);
var G__11951 = null;
var G__11952 = (0);
var G__11953 = (0);
seq__11899 = G__11950;
chunk__11900 = G__11951;
count__11901 = G__11952;
i__11902 = G__11953;
continue;
}
} else {
return null;
}
}
break;
}
});})(_STAR_parent_description_STAR__orig_val__11819_11924,_STAR_parent_description_STAR__temp_val__11823_11925,description__11264__auto___11923))
,false),speclj.components.new_characteristic.call(null,"sets screen to second-level-selection upon user selection and mode is 4",((function (_STAR_parent_description_STAR__orig_val__11819_11924,_STAR_parent_description_STAR__temp_val__11823_11925,description__11264__auto___11923){
return (function (){
cljs.core.swap_BANG_.call(null,tic_tac_toe.screens.first_level_selection_spec.state,cljs.core.assoc,new cljs.core.Keyword(null,"mode","mode",654403691),(4));

var seq__11907 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#first-level-selection button:nth-of-type(1)","#first-level-selection button:nth-of-type(2)","#first-level-selection button:nth-of-type(3)"], null));
var chunk__11908 = null;
var count__11909 = (0);
var i__11910 = (0);
while(true){
if((i__11910 < count__11909)){
var item = cljs.core._nth.call(null,chunk__11908,i__11910);
c3kit.wire.spec_helper.click_BANG_.call(null,item);

var expected__11401__auto___11954 = new cljs.core.Keyword(null,"second-level-selection","second-level-selection",199785260);
var actual__11402__auto___11955 = new cljs.core.Keyword(null,"current-screen","current-screen",-1454713691).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.screens.first_level_selection_spec.state));
if(cljs.core._EQ_.call(null,expected__11401__auto___11954,actual__11402__auto___11955)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__11401__auto___11954;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11369__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11369__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__11402__auto___11955;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11369__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11369__auto__);
}
})()," (using =)"].join('')));
}


var G__11956 = seq__11907;
var G__11957 = chunk__11908;
var G__11958 = count__11909;
var G__11959 = (i__11910 + (1));
seq__11907 = G__11956;
chunk__11908 = G__11957;
count__11909 = G__11958;
i__11910 = G__11959;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__11907);
if(temp__5804__auto__){
var seq__11907__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11907__$1)){
var c__5525__auto__ = cljs.core.chunk_first.call(null,seq__11907__$1);
var G__11960 = cljs.core.chunk_rest.call(null,seq__11907__$1);
var G__11961 = c__5525__auto__;
var G__11962 = cljs.core.count.call(null,c__5525__auto__);
var G__11963 = (0);
seq__11907 = G__11960;
chunk__11908 = G__11961;
count__11909 = G__11962;
i__11910 = G__11963;
continue;
} else {
var item = cljs.core.first.call(null,seq__11907__$1);
c3kit.wire.spec_helper.click_BANG_.call(null,item);

var expected__11401__auto___11964 = new cljs.core.Keyword(null,"second-level-selection","second-level-selection",199785260);
var actual__11402__auto___11965 = new cljs.core.Keyword(null,"current-screen","current-screen",-1454713691).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.screens.first_level_selection_spec.state));
if(cljs.core._EQ_.call(null,expected__11401__auto___11964,actual__11402__auto___11965)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__11401__auto___11964;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11369__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11369__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__11402__auto___11965;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11369__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11369__auto__);
}
})()," (using =)"].join('')));
}


var G__11966 = cljs.core.next.call(null,seq__11907__$1);
var G__11967 = null;
var G__11968 = (0);
var G__11969 = (0);
seq__11907 = G__11966;
chunk__11908 = G__11967;
count__11909 = G__11968;
i__11910 = G__11969;
continue;
}
} else {
return null;
}
}
break;
}
});})(_STAR_parent_description_STAR__orig_val__11819_11924,_STAR_parent_description_STAR__temp_val__11823_11925,description__11264__auto___11923))
,false)],null)));
var chunk__11831_11927 = null;
var count__11835_11928 = (0);
var i__11838_11929 = (0);
while(true){
if((i__11838_11929 < count__11835_11928)){
var component__11265__auto___11970 = cljs.core._nth.call(null,chunk__11831_11927,i__11838_11929);
speclj.components.install.call(null,component__11265__auto___11970,description__11264__auto___11923);


var G__11971 = seq__11827_11926;
var G__11972 = chunk__11831_11927;
var G__11973 = count__11835_11928;
var G__11974 = (i__11838_11929 + (1));
seq__11827_11926 = G__11971;
chunk__11831_11927 = G__11972;
count__11835_11928 = G__11973;
i__11838_11929 = G__11974;
continue;
} else {
var temp__5804__auto___11975 = cljs.core.seq.call(null,seq__11827_11926);
if(temp__5804__auto___11975){
var seq__11827_11976__$1 = temp__5804__auto___11975;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11827_11976__$1)){
var c__5525__auto___11977 = cljs.core.chunk_first.call(null,seq__11827_11976__$1);
var G__11978 = cljs.core.chunk_rest.call(null,seq__11827_11976__$1);
var G__11979 = c__5525__auto___11977;
var G__11980 = cljs.core.count.call(null,c__5525__auto___11977);
var G__11981 = (0);
seq__11827_11926 = G__11978;
chunk__11831_11927 = G__11979;
count__11835_11928 = G__11980;
i__11838_11929 = G__11981;
continue;
} else {
var component__11265__auto___11982 = cljs.core.first.call(null,seq__11827_11976__$1);
speclj.components.install.call(null,component__11265__auto___11982,description__11264__auto___11923);


var G__11983 = cljs.core.next.call(null,seq__11827_11976__$1);
var G__11984 = null;
var G__11985 = (0);
var G__11986 = (0);
seq__11827_11926 = G__11983;
chunk__11831_11927 = G__11984;
count__11835_11928 = G__11985;
i__11838_11929 = G__11986;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__11819_11924);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__11264__auto___11923);
}


//# sourceMappingURL=first_level_selection_spec.js.map
