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
var description__11245__auto___14983 = speclj.components.new_description.call(null,"first level selection screen",false,"tic-tac-toe.screens.first-level-selection-spec");
var _STAR_parent_description_STAR__orig_val__14961_14984 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__14962_14985 = description__11245__auto___14983;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__14962_14985);

try{var seq__14963_14986 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,9,(5),cljs.core.PersistentVector.EMPTY_NODE,[c3kit.wire.spec_helper.with_root_dom.call(null),speclj.components.new_before.call(null,((function (_STAR_parent_description_STAR__orig_val__14961_14984,_STAR_parent_description_STAR__temp_val__14962_14985,description__11245__auto___14983){
return (function (){
cljs.core.reset_BANG_.call(null,tic_tac_toe.screens.first_level_selection_spec.state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"current-screen","current-screen",-1454713691),new cljs.core.Keyword(null,"first-level-selection","first-level-selection",-675329011)], null));

return c3kit.wire.spec_helper.render.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tic_tac_toe.render_screen.render_screen,tic_tac_toe.screens.first_level_selection_spec.state], null));
});})(_STAR_parent_description_STAR__orig_val__14961_14984,_STAR_parent_description_STAR__temp_val__14962_14985,description__11245__auto___14983))
),speclj.components.new_characteristic.call(null,"renders first level selection screen",((function (_STAR_parent_description_STAR__orig_val__14961_14984,_STAR_parent_description_STAR__temp_val__14962_14985,description__11245__auto___14983){
return (function (){
var value__11745__auto___14990 = "#first-level-selection";
var node__11746__auto___14991 = c3kit.wire.spec_helper.select.call(null,value__11745__auto___14990);
if(cljs.core.truth_(node__11746__auto___14991)){
} else {
throw (new speclj.platform.SpecFailure(["Expected selector to find node: ",(function (){var temp__5806__auto__ = value__11745__auto___14990;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11350__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11350__auto__);
}
})()].join('')));
}

var expected__11382__auto___14992 = cljs.core.nth.call(null,tic_tac_toe.print_utils.level_prompt,(2));
var actual__11383__auto___14993 = c3kit.wire.spec_helper.text.call(null,"#first-level-selection h2");
if(cljs.core._EQ_.call(null,expected__11382__auto___14992,actual__11383__auto___14993)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__11382__auto___14992;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11350__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11350__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__11383__auto___14993;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11350__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11350__auto__);
}
})()," (using =)"].join('')));
}

var expected__11382__auto___14994 = cljs.core.nth.call(null,tic_tac_toe.print_utils.level_prompt,(3));
var actual__11383__auto___14995 = c3kit.wire.spec_helper.text.call(null,"#first-level-selection button:nth-of-type(1)");
if(cljs.core._EQ_.call(null,expected__11382__auto___14994,actual__11383__auto___14995)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__11382__auto___14994;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11350__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11350__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__11383__auto___14995;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11350__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11350__auto__);
}
})()," (using =)"].join('')));
}

var expected__11382__auto___14996 = cljs.core.nth.call(null,tic_tac_toe.print_utils.level_prompt,(4));
var actual__11383__auto___14997 = c3kit.wire.spec_helper.text.call(null,"#first-level-selection button:nth-of-type(2)");
if(cljs.core._EQ_.call(null,expected__11382__auto___14996,actual__11383__auto___14997)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__11382__auto___14996;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11350__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11350__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__11383__auto___14997;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11350__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11350__auto__);
}
})()," (using =)"].join('')));
}

var expected__11382__auto__ = cljs.core.nth.call(null,tic_tac_toe.print_utils.level_prompt,(6));
var actual__11383__auto__ = c3kit.wire.spec_helper.text.call(null,"#first-level-selection button:nth-of-type(3)");
if(cljs.core._EQ_.call(null,expected__11382__auto__,actual__11383__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__11382__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11350__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11350__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__11383__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11350__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11350__auto__);
}
})()," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__14961_14984,_STAR_parent_description_STAR__temp_val__14962_14985,description__11245__auto___14983))
,false),speclj.components.new_characteristic.call(null,"specifies player X if mode is 4",((function (_STAR_parent_description_STAR__orig_val__14961_14984,_STAR_parent_description_STAR__temp_val__14962_14985,description__11245__auto___14983){
return (function (){
cljs.core.swap_BANG_.call(null,tic_tac_toe.screens.first_level_selection_spec.state,cljs.core.assoc,new cljs.core.Keyword(null,"mode","mode",654403691),(4));

c3kit.wire.spec_helper.render.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tic_tac_toe.render_screen.render_screen,tic_tac_toe.screens.first_level_selection_spec.state], null));

var expected__11382__auto__ = cljs.core.first.call(null,tic_tac_toe.print_utils.level_prompt);
var actual__11383__auto__ = c3kit.wire.spec_helper.text.call(null,"#first-level-selection h2");
if(cljs.core._EQ_.call(null,expected__11382__auto__,actual__11383__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__11382__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11350__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11350__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__11383__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11350__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11350__auto__);
}
})()," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__14961_14984,_STAR_parent_description_STAR__temp_val__14962_14985,description__11245__auto___14983))
,false),speclj.components.new_characteristic.call(null,"sets :first-ai-level to 1 when Easy is clicked",((function (_STAR_parent_description_STAR__orig_val__14961_14984,_STAR_parent_description_STAR__temp_val__14962_14985,description__11245__auto___14983){
return (function (){
c3kit.wire.spec_helper.click_BANG_.call(null,"#first-level-selection button:nth-of-type(1)");

var expected__11382__auto__ = (1);
var actual__11383__auto__ = new cljs.core.Keyword(null,"first-ai-level","first-ai-level",1004633644).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.screens.first_level_selection_spec.state));
if(cljs.core._EQ_.call(null,expected__11382__auto__,actual__11383__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__11382__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11350__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11350__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__11383__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11350__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11350__auto__);
}
})()," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__14961_14984,_STAR_parent_description_STAR__temp_val__14962_14985,description__11245__auto___14983))
,false),speclj.components.new_characteristic.call(null,"sets :first-ai-level to 2 when Medium is clicked",((function (_STAR_parent_description_STAR__orig_val__14961_14984,_STAR_parent_description_STAR__temp_val__14962_14985,description__11245__auto___14983){
return (function (){
c3kit.wire.spec_helper.click_BANG_.call(null,"#first-level-selection button:nth-of-type(2)");

var expected__11382__auto__ = (2);
var actual__11383__auto__ = new cljs.core.Keyword(null,"first-ai-level","first-ai-level",1004633644).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.screens.first_level_selection_spec.state));
if(cljs.core._EQ_.call(null,expected__11382__auto__,actual__11383__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__11382__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11350__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11350__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__11383__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11350__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11350__auto__);
}
})()," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__14961_14984,_STAR_parent_description_STAR__temp_val__14962_14985,description__11245__auto___14983))
,false),speclj.components.new_characteristic.call(null,"sets :first-ai-level to 3 when Unbeatable is clicked",((function (_STAR_parent_description_STAR__orig_val__14961_14984,_STAR_parent_description_STAR__temp_val__14962_14985,description__11245__auto___14983){
return (function (){
c3kit.wire.spec_helper.click_BANG_.call(null,"#first-level-selection button:nth-of-type(3)");

var expected__11382__auto__ = (3);
var actual__11383__auto__ = new cljs.core.Keyword(null,"first-ai-level","first-ai-level",1004633644).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.screens.first_level_selection_spec.state));
if(cljs.core._EQ_.call(null,expected__11382__auto__,actual__11383__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__11382__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11350__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11350__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__11383__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11350__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11350__auto__);
}
})()," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__14961_14984,_STAR_parent_description_STAR__temp_val__14962_14985,description__11245__auto___14983))
,false),speclj.components.new_characteristic.call(null,"sets screen to play upon user selection if not mode 4",((function (_STAR_parent_description_STAR__orig_val__14961_14984,_STAR_parent_description_STAR__temp_val__14962_14985,description__11245__auto___14983){
return (function (){
var seq__14975 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#first-level-selection button:nth-of-type(1)","#first-level-selection button:nth-of-type(2)","#first-level-selection button:nth-of-type(3)"], null));
var chunk__14976 = null;
var count__14977 = (0);
var i__14978 = (0);
while(true){
if((i__14978 < count__14977)){
var item = cljs.core._nth.call(null,chunk__14976,i__14978);
c3kit.wire.spec_helper.click_BANG_.call(null,item);

var expected__11382__auto___14998 = new cljs.core.Keyword(null,"play","play",-580418022);
var actual__11383__auto___14999 = new cljs.core.Keyword(null,"current-screen","current-screen",-1454713691).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.screens.first_level_selection_spec.state));
if(cljs.core._EQ_.call(null,expected__11382__auto___14998,actual__11383__auto___14999)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__11382__auto___14998;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11350__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11350__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__11383__auto___14999;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11350__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11350__auto__);
}
})()," (using =)"].join('')));
}


var G__15000 = seq__14975;
var G__15001 = chunk__14976;
var G__15002 = count__14977;
var G__15003 = (i__14978 + (1));
seq__14975 = G__15000;
chunk__14976 = G__15001;
count__14977 = G__15002;
i__14978 = G__15003;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__14975);
if(temp__5804__auto__){
var seq__14975__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14975__$1)){
var c__5525__auto__ = cljs.core.chunk_first.call(null,seq__14975__$1);
var G__15004 = cljs.core.chunk_rest.call(null,seq__14975__$1);
var G__15005 = c__5525__auto__;
var G__15006 = cljs.core.count.call(null,c__5525__auto__);
var G__15007 = (0);
seq__14975 = G__15004;
chunk__14976 = G__15005;
count__14977 = G__15006;
i__14978 = G__15007;
continue;
} else {
var item = cljs.core.first.call(null,seq__14975__$1);
c3kit.wire.spec_helper.click_BANG_.call(null,item);

var expected__11382__auto___15008 = new cljs.core.Keyword(null,"play","play",-580418022);
var actual__11383__auto___15009 = new cljs.core.Keyword(null,"current-screen","current-screen",-1454713691).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.screens.first_level_selection_spec.state));
if(cljs.core._EQ_.call(null,expected__11382__auto___15008,actual__11383__auto___15009)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__11382__auto___15008;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11350__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11350__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__11383__auto___15009;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11350__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11350__auto__);
}
})()," (using =)"].join('')));
}


var G__15010 = cljs.core.next.call(null,seq__14975__$1);
var G__15011 = null;
var G__15012 = (0);
var G__15013 = (0);
seq__14975 = G__15010;
chunk__14976 = G__15011;
count__14977 = G__15012;
i__14978 = G__15013;
continue;
}
} else {
return null;
}
}
break;
}
});})(_STAR_parent_description_STAR__orig_val__14961_14984,_STAR_parent_description_STAR__temp_val__14962_14985,description__11245__auto___14983))
,false),speclj.components.new_characteristic.call(null,"sets screen to second-level-selection upon user selection and mode is 4",((function (_STAR_parent_description_STAR__orig_val__14961_14984,_STAR_parent_description_STAR__temp_val__14962_14985,description__11245__auto___14983){
return (function (){
cljs.core.swap_BANG_.call(null,tic_tac_toe.screens.first_level_selection_spec.state,cljs.core.assoc,new cljs.core.Keyword(null,"mode","mode",654403691),(4));

var seq__14979 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#first-level-selection button:nth-of-type(1)","#first-level-selection button:nth-of-type(2)","#first-level-selection button:nth-of-type(3)"], null));
var chunk__14980 = null;
var count__14981 = (0);
var i__14982 = (0);
while(true){
if((i__14982 < count__14981)){
var item = cljs.core._nth.call(null,chunk__14980,i__14982);
c3kit.wire.spec_helper.click_BANG_.call(null,item);

var expected__11382__auto___15014 = new cljs.core.Keyword(null,"second-level-selection","second-level-selection",199785260);
var actual__11383__auto___15015 = new cljs.core.Keyword(null,"current-screen","current-screen",-1454713691).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.screens.first_level_selection_spec.state));
if(cljs.core._EQ_.call(null,expected__11382__auto___15014,actual__11383__auto___15015)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__11382__auto___15014;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11350__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11350__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__11383__auto___15015;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11350__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11350__auto__);
}
})()," (using =)"].join('')));
}


var G__15016 = seq__14979;
var G__15017 = chunk__14980;
var G__15018 = count__14981;
var G__15019 = (i__14982 + (1));
seq__14979 = G__15016;
chunk__14980 = G__15017;
count__14981 = G__15018;
i__14982 = G__15019;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__14979);
if(temp__5804__auto__){
var seq__14979__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14979__$1)){
var c__5525__auto__ = cljs.core.chunk_first.call(null,seq__14979__$1);
var G__15020 = cljs.core.chunk_rest.call(null,seq__14979__$1);
var G__15021 = c__5525__auto__;
var G__15022 = cljs.core.count.call(null,c__5525__auto__);
var G__15023 = (0);
seq__14979 = G__15020;
chunk__14980 = G__15021;
count__14981 = G__15022;
i__14982 = G__15023;
continue;
} else {
var item = cljs.core.first.call(null,seq__14979__$1);
c3kit.wire.spec_helper.click_BANG_.call(null,item);

var expected__11382__auto___15024 = new cljs.core.Keyword(null,"second-level-selection","second-level-selection",199785260);
var actual__11383__auto___15025 = new cljs.core.Keyword(null,"current-screen","current-screen",-1454713691).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.screens.first_level_selection_spec.state));
if(cljs.core._EQ_.call(null,expected__11382__auto___15024,actual__11383__auto___15025)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__11382__auto___15024;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11350__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11350__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__11383__auto___15025;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11350__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11350__auto__);
}
})()," (using =)"].join('')));
}


var G__15026 = cljs.core.next.call(null,seq__14979__$1);
var G__15027 = null;
var G__15028 = (0);
var G__15029 = (0);
seq__14979 = G__15026;
chunk__14980 = G__15027;
count__14981 = G__15028;
i__14982 = G__15029;
continue;
}
} else {
return null;
}
}
break;
}
});})(_STAR_parent_description_STAR__orig_val__14961_14984,_STAR_parent_description_STAR__temp_val__14962_14985,description__11245__auto___14983))
,false)],null)));
var chunk__14964_14987 = null;
var count__14965_14988 = (0);
var i__14966_14989 = (0);
while(true){
if((i__14966_14989 < count__14965_14988)){
var component__11246__auto___15030 = cljs.core._nth.call(null,chunk__14964_14987,i__14966_14989);
speclj.components.install.call(null,component__11246__auto___15030,description__11245__auto___14983);


var G__15031 = seq__14963_14986;
var G__15032 = chunk__14964_14987;
var G__15033 = count__14965_14988;
var G__15034 = (i__14966_14989 + (1));
seq__14963_14986 = G__15031;
chunk__14964_14987 = G__15032;
count__14965_14988 = G__15033;
i__14966_14989 = G__15034;
continue;
} else {
var temp__5804__auto___15035 = cljs.core.seq.call(null,seq__14963_14986);
if(temp__5804__auto___15035){
var seq__14963_15036__$1 = temp__5804__auto___15035;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14963_15036__$1)){
var c__5525__auto___15037 = cljs.core.chunk_first.call(null,seq__14963_15036__$1);
var G__15038 = cljs.core.chunk_rest.call(null,seq__14963_15036__$1);
var G__15039 = c__5525__auto___15037;
var G__15040 = cljs.core.count.call(null,c__5525__auto___15037);
var G__15041 = (0);
seq__14963_14986 = G__15038;
chunk__14964_14987 = G__15039;
count__14965_14988 = G__15040;
i__14966_14989 = G__15041;
continue;
} else {
var component__11246__auto___15042 = cljs.core.first.call(null,seq__14963_15036__$1);
speclj.components.install.call(null,component__11246__auto___15042,description__11245__auto___14983);


var G__15043 = cljs.core.next.call(null,seq__14963_15036__$1);
var G__15044 = null;
var G__15045 = (0);
var G__15046 = (0);
seq__14963_14986 = G__15043;
chunk__14964_14987 = G__15044;
count__14965_14988 = G__15045;
i__14966_14989 = G__15046;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__14961_14984);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__11245__auto___14983);
}


//# sourceMappingURL=first_level_selection_spec.js.map
