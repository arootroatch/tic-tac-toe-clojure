// Compiled by ClojureScript 1.11.132 {:optimizations :none}
goog.provide('tic_tac_toe.screens.board_selection_spec');
goog.require('cljs.core');
goog.require('c3kit.wire.spec_helper');
goog.require('speclj.core');
goog.require('tic_tac_toe.print_utils');
goog.require('tic_tac_toe.render_screen');
goog.require('tic_tac_toe.screens.board_selection');
goog.require('tic_tac_toe.board_options');
if((typeof tic_tac_toe !== 'undefined') && (typeof tic_tac_toe.screens !== 'undefined') && (typeof tic_tac_toe.screens.board_selection_spec !== 'undefined') && (typeof tic_tac_toe.screens.board_selection_spec.state !== 'undefined')){
} else {
tic_tac_toe.screens.board_selection_spec.state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"current-screen","current-screen",-1454713691),new cljs.core.Keyword(null,"board-selection","board-selection",276837898)], null));
}
var description__11262__auto___17193 = speclj.components.new_description.call(null,"board selection screen",false,"tic-tac-toe.screens.board-selection-spec");
var _STAR_parent_description_STAR__orig_val__17133_17194 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__17134_17195 = description__11262__auto___17193;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__17134_17195);

try{var seq__17135_17196 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,7,(5),cljs.core.PersistentVector.EMPTY_NODE,[c3kit.wire.spec_helper.with_root_dom.call(null),speclj.components.new_before.call(null,((function (_STAR_parent_description_STAR__orig_val__17133_17194,_STAR_parent_description_STAR__temp_val__17134_17195,description__11262__auto___17193){
return (function (){
cljs.core.reset_BANG_.call(null,tic_tac_toe.screens.board_selection_spec.state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"current-screen","current-screen",-1454713691),new cljs.core.Keyword(null,"board-selection","board-selection",276837898)], null));

return c3kit.wire.spec_helper.render.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tic_tac_toe.render_screen.render_screen,tic_tac_toe.screens.board_selection_spec.state], null));
});})(_STAR_parent_description_STAR__orig_val__17133_17194,_STAR_parent_description_STAR__temp_val__17134_17195,description__11262__auto___17193))
),speclj.components.new_characteristic.call(null,"renders board selection screen",((function (_STAR_parent_description_STAR__orig_val__17133_17194,_STAR_parent_description_STAR__temp_val__17134_17195,description__11262__auto___17193){
return (function (){
var value__11762__auto___17200 = "#board-selection";
var node__11763__auto___17201 = c3kit.wire.spec_helper.select.call(null,value__11762__auto___17200);
if(cljs.core.truth_(node__11763__auto___17201)){
} else {
throw (new speclj.platform.SpecFailure(["Expected selector to find node: ",(function (){var temp__5806__auto__ = value__11762__auto___17200;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11367__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11367__auto__);
}
})()].join('')));
}

var expected__11399__auto___17202 = cljs.core.first.call(null,tic_tac_toe.print_utils.board_prompt);
var actual__11400__auto___17203 = c3kit.wire.spec_helper.text.call(null,"#board-selection h2");
if(cljs.core._EQ_.call(null,expected__11399__auto___17202,actual__11400__auto___17203)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__11399__auto___17202;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11367__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11367__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__11400__auto___17203;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11367__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11367__auto__);
}
})()," (using =)"].join('')));
}

var expected__11399__auto___17204 = cljs.core.nth.call(null,tic_tac_toe.print_utils.board_prompt,(1));
var actual__11400__auto___17205 = c3kit.wire.spec_helper.text.call(null,"#board-selection button:nth-of-type(1)");
if(cljs.core._EQ_.call(null,expected__11399__auto___17204,actual__11400__auto___17205)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__11399__auto___17204;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11367__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11367__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__11400__auto___17205;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11367__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11367__auto__);
}
})()," (using =)"].join('')));
}

var expected__11399__auto__ = cljs.core.nth.call(null,tic_tac_toe.print_utils.board_prompt,(2));
var actual__11400__auto__ = c3kit.wire.spec_helper.text.call(null,"#board-selection button:nth-of-type(2)");
if(cljs.core._EQ_.call(null,expected__11399__auto__,actual__11400__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__11399__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11367__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11367__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__11400__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11367__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11367__auto__);
}
})()," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__17133_17194,_STAR_parent_description_STAR__temp_val__17134_17195,description__11262__auto___17193))
,false),speclj.components.new_characteristic.call(null,"sets 3x3 board upon user selection",((function (_STAR_parent_description_STAR__orig_val__17133_17194,_STAR_parent_description_STAR__temp_val__17134_17195,description__11262__auto___17193){
return (function (){
c3kit.wire.spec_helper.click_BANG_.call(null,"#board-selection button:nth-of-type(1)");

var expected__11399__auto__ = tic_tac_toe.board_options.initial_3x3_board;
var actual__11400__auto__ = new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.screens.board_selection_spec.state));
if(cljs.core._EQ_.call(null,expected__11399__auto__,actual__11400__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__11399__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11367__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11367__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__11400__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11367__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11367__auto__);
}
})()," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__17133_17194,_STAR_parent_description_STAR__temp_val__17134_17195,description__11262__auto___17193))
,false),speclj.components.new_characteristic.call(null,"sets 4x4 board upon user selection",((function (_STAR_parent_description_STAR__orig_val__17133_17194,_STAR_parent_description_STAR__temp_val__17134_17195,description__11262__auto___17193){
return (function (){
c3kit.wire.spec_helper.click_BANG_.call(null,"#board-selection button:nth-of-type(2)");

var expected__11399__auto__ = tic_tac_toe.board_options.initial_4x4_board;
var actual__11400__auto__ = new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.screens.board_selection_spec.state));
if(cljs.core._EQ_.call(null,expected__11399__auto__,actual__11400__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__11399__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11367__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11367__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__11400__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11367__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11367__auto__);
}
})()," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__17133_17194,_STAR_parent_description_STAR__temp_val__17134_17195,description__11262__auto___17193))
,false),speclj.components.new_characteristic.call(null,"sets screen to first-level-selection upon user selection and not mode 1",((function (_STAR_parent_description_STAR__orig_val__17133_17194,_STAR_parent_description_STAR__temp_val__17134_17195,description__11262__auto___17193){
return (function (){
var seq__17185 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#board-selection button:nth-of-type(1)","#board-selection button:nth-of-type(2)"], null));
var chunk__17186 = null;
var count__17187 = (0);
var i__17188 = (0);
while(true){
if((i__17188 < count__17187)){
var item = cljs.core._nth.call(null,chunk__17186,i__17188);
c3kit.wire.spec_helper.click_BANG_.call(null,item);

var expected__11399__auto___17206 = new cljs.core.Keyword(null,"first-level-selection","first-level-selection",-675329011);
var actual__11400__auto___17207 = new cljs.core.Keyword(null,"current-screen","current-screen",-1454713691).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.screens.board_selection_spec.state));
if(cljs.core._EQ_.call(null,expected__11399__auto___17206,actual__11400__auto___17207)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__11399__auto___17206;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11367__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11367__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__11400__auto___17207;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11367__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11367__auto__);
}
})()," (using =)"].join('')));
}


var G__17208 = seq__17185;
var G__17209 = chunk__17186;
var G__17210 = count__17187;
var G__17211 = (i__17188 + (1));
seq__17185 = G__17208;
chunk__17186 = G__17209;
count__17187 = G__17210;
i__17188 = G__17211;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__17185);
if(temp__5804__auto__){
var seq__17185__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__17185__$1)){
var c__5525__auto__ = cljs.core.chunk_first.call(null,seq__17185__$1);
var G__17212 = cljs.core.chunk_rest.call(null,seq__17185__$1);
var G__17213 = c__5525__auto__;
var G__17214 = cljs.core.count.call(null,c__5525__auto__);
var G__17215 = (0);
seq__17185 = G__17212;
chunk__17186 = G__17213;
count__17187 = G__17214;
i__17188 = G__17215;
continue;
} else {
var item = cljs.core.first.call(null,seq__17185__$1);
c3kit.wire.spec_helper.click_BANG_.call(null,item);

var expected__11399__auto___17216 = new cljs.core.Keyword(null,"first-level-selection","first-level-selection",-675329011);
var actual__11400__auto___17217 = new cljs.core.Keyword(null,"current-screen","current-screen",-1454713691).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.screens.board_selection_spec.state));
if(cljs.core._EQ_.call(null,expected__11399__auto___17216,actual__11400__auto___17217)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__11399__auto___17216;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11367__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11367__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__11400__auto___17217;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11367__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11367__auto__);
}
})()," (using =)"].join('')));
}


var G__17218 = cljs.core.next.call(null,seq__17185__$1);
var G__17219 = null;
var G__17220 = (0);
var G__17221 = (0);
seq__17185 = G__17218;
chunk__17186 = G__17219;
count__17187 = G__17220;
i__17188 = G__17221;
continue;
}
} else {
return null;
}
}
break;
}
});})(_STAR_parent_description_STAR__orig_val__17133_17194,_STAR_parent_description_STAR__temp_val__17134_17195,description__11262__auto___17193))
,false),speclj.components.new_characteristic.call(null,"sets screen to play upon user selection and mode 1",((function (_STAR_parent_description_STAR__orig_val__17133_17194,_STAR_parent_description_STAR__temp_val__17134_17195,description__11262__auto___17193){
return (function (){
cljs.core.swap_BANG_.call(null,tic_tac_toe.screens.board_selection_spec.state,cljs.core.assoc,new cljs.core.Keyword(null,"mode","mode",654403691),(1));

var seq__17189 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#board-selection button:nth-of-type(1)","#board-selection button:nth-of-type(2)"], null));
var chunk__17190 = null;
var count__17191 = (0);
var i__17192 = (0);
while(true){
if((i__17192 < count__17191)){
var item = cljs.core._nth.call(null,chunk__17190,i__17192);
c3kit.wire.spec_helper.click_BANG_.call(null,item);

var expected__11399__auto___17222 = new cljs.core.Keyword(null,"play","play",-580418022);
var actual__11400__auto___17223 = new cljs.core.Keyword(null,"current-screen","current-screen",-1454713691).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.screens.board_selection_spec.state));
if(cljs.core._EQ_.call(null,expected__11399__auto___17222,actual__11400__auto___17223)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__11399__auto___17222;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11367__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11367__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__11400__auto___17223;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11367__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11367__auto__);
}
})()," (using =)"].join('')));
}


var G__17224 = seq__17189;
var G__17225 = chunk__17190;
var G__17226 = count__17191;
var G__17227 = (i__17192 + (1));
seq__17189 = G__17224;
chunk__17190 = G__17225;
count__17191 = G__17226;
i__17192 = G__17227;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__17189);
if(temp__5804__auto__){
var seq__17189__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__17189__$1)){
var c__5525__auto__ = cljs.core.chunk_first.call(null,seq__17189__$1);
var G__17228 = cljs.core.chunk_rest.call(null,seq__17189__$1);
var G__17229 = c__5525__auto__;
var G__17230 = cljs.core.count.call(null,c__5525__auto__);
var G__17231 = (0);
seq__17189 = G__17228;
chunk__17190 = G__17229;
count__17191 = G__17230;
i__17192 = G__17231;
continue;
} else {
var item = cljs.core.first.call(null,seq__17189__$1);
c3kit.wire.spec_helper.click_BANG_.call(null,item);

var expected__11399__auto___17232 = new cljs.core.Keyword(null,"play","play",-580418022);
var actual__11400__auto___17233 = new cljs.core.Keyword(null,"current-screen","current-screen",-1454713691).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.screens.board_selection_spec.state));
if(cljs.core._EQ_.call(null,expected__11399__auto___17232,actual__11400__auto___17233)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__11399__auto___17232;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11367__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11367__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__11400__auto___17233;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__11367__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__11367__auto__);
}
})()," (using =)"].join('')));
}


var G__17234 = cljs.core.next.call(null,seq__17189__$1);
var G__17235 = null;
var G__17236 = (0);
var G__17237 = (0);
seq__17189 = G__17234;
chunk__17190 = G__17235;
count__17191 = G__17236;
i__17192 = G__17237;
continue;
}
} else {
return null;
}
}
break;
}
});})(_STAR_parent_description_STAR__orig_val__17133_17194,_STAR_parent_description_STAR__temp_val__17134_17195,description__11262__auto___17193))
,false)],null)));
var chunk__17136_17197 = null;
var count__17137_17198 = (0);
var i__17138_17199 = (0);
while(true){
if((i__17138_17199 < count__17137_17198)){
var component__11263__auto___17238 = cljs.core._nth.call(null,chunk__17136_17197,i__17138_17199);
speclj.components.install.call(null,component__11263__auto___17238,description__11262__auto___17193);


var G__17239 = seq__17135_17196;
var G__17240 = chunk__17136_17197;
var G__17241 = count__17137_17198;
var G__17242 = (i__17138_17199 + (1));
seq__17135_17196 = G__17239;
chunk__17136_17197 = G__17240;
count__17137_17198 = G__17241;
i__17138_17199 = G__17242;
continue;
} else {
var temp__5804__auto___17243 = cljs.core.seq.call(null,seq__17135_17196);
if(temp__5804__auto___17243){
var seq__17135_17244__$1 = temp__5804__auto___17243;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__17135_17244__$1)){
var c__5525__auto___17245 = cljs.core.chunk_first.call(null,seq__17135_17244__$1);
var G__17246 = cljs.core.chunk_rest.call(null,seq__17135_17244__$1);
var G__17247 = c__5525__auto___17245;
var G__17248 = cljs.core.count.call(null,c__5525__auto___17245);
var G__17249 = (0);
seq__17135_17196 = G__17246;
chunk__17136_17197 = G__17247;
count__17137_17198 = G__17248;
i__17138_17199 = G__17249;
continue;
} else {
var component__11263__auto___17250 = cljs.core.first.call(null,seq__17135_17244__$1);
speclj.components.install.call(null,component__11263__auto___17250,description__11262__auto___17193);


var G__17251 = cljs.core.next.call(null,seq__17135_17244__$1);
var G__17252 = null;
var G__17253 = (0);
var G__17254 = (0);
seq__17135_17196 = G__17251;
chunk__17136_17197 = G__17252;
count__17137_17198 = G__17253;
i__17138_17199 = G__17254;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__17133_17194);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__11262__auto___17193);
}


//# sourceMappingURL=board_selection_spec.js.map
