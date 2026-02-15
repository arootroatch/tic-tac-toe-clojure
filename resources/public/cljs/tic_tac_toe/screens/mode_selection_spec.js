// Compiled by ClojureScript 1.11.132 {:optimizations :none}
goog.provide('tic_tac_toe.screens.mode_selection_spec');
goog.require('cljs.core');
goog.require('speclj.core');
goog.require('c3kit.wire.spec_helper');
goog.require('tic_tac_toe.prompts');
goog.require('tic_tac_toe.render_screen');
goog.require('tic_tac_toe.screens.mode_selection');
if((typeof tic_tac_toe !== 'undefined') && (typeof tic_tac_toe.screens !== 'undefined') && (typeof tic_tac_toe.screens.mode_selection_spec !== 'undefined') && (typeof tic_tac_toe.screens.mode_selection_spec.state !== 'undefined')){
} else {
tic_tac_toe.screens.mode_selection_spec.state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"current-screen","current-screen",-1454713691),new cljs.core.Keyword(null,"mode-selection","mode-selection",986239762),new cljs.core.Keyword(null,"human?","human?",-2017219054),true], null));
}
var description__26625__auto___28048 = speclj.components.new_description.call(null,"mode selection screen",false,"tic-tac-toe.screens.mode-selection-spec");
var _STAR_parent_description_STAR__orig_val__27859_28049 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__27860_28050 = description__26625__auto___28048;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__27860_28050);

try{var seq__27861_28051 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,12,(5),cljs.core.PersistentVector.EMPTY_NODE,[c3kit.wire.spec_helper.with_root_dom.call(null),speclj.components.new_before.call(null,((function (_STAR_parent_description_STAR__orig_val__27859_28049,_STAR_parent_description_STAR__temp_val__27860_28050,description__26625__auto___28048){
return (function (){
cljs.core.reset_BANG_.call(null,tic_tac_toe.screens.mode_selection_spec.state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"current-screen","current-screen",-1454713691),new cljs.core.Keyword(null,"mode-selection","mode-selection",986239762)], null));

return c3kit.wire.spec_helper.render.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tic_tac_toe.render_screen.render_screen,tic_tac_toe.screens.mode_selection_spec.state], null));
});})(_STAR_parent_description_STAR__orig_val__27859_28049,_STAR_parent_description_STAR__temp_val__27860_28050,description__26625__auto___28048))
),speclj.components.new_characteristic.call(null,"renders mode selection screen",((function (_STAR_parent_description_STAR__orig_val__27859_28049,_STAR_parent_description_STAR__temp_val__27860_28050,description__26625__auto___28048){
return (function (){
var value__27629__auto___28055 = "#mode-selection";
var node__27630__auto___28056 = c3kit.wire.spec_helper.select.call(null,value__27629__auto___28055);
if(cljs.core.truth_(node__27630__auto___28056)){
} else {
throw (new speclj.platform.SpecFailure(["Expected selector to find node: ",(function (){var temp__5806__auto__ = value__27629__auto___28055;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__26730__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__26730__auto__);
}
})()].join('')));
}

var expected__26762__auto___28057 = cljs.core.first.call(null,tic_tac_toe.prompts.mode_prompt);
var actual__26763__auto___28058 = c3kit.wire.spec_helper.text.call(null,"#mode-selection h2");
if(cljs.core._EQ_.call(null,expected__26762__auto___28057,actual__26763__auto___28058)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__26762__auto___28057;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__26730__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__26730__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__26763__auto___28058;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__26730__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__26730__auto__);
}
})()," (using =)"].join('')));
}

var expected__26762__auto___28059 = cljs.core.nth.call(null,tic_tac_toe.prompts.mode_prompt,(1));
var actual__26763__auto___28060 = c3kit.wire.spec_helper.text.call(null,"#mode-selection button:nth-of-type(1)");
if(cljs.core._EQ_.call(null,expected__26762__auto___28059,actual__26763__auto___28060)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__26762__auto___28059;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__26730__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__26730__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__26763__auto___28060;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__26730__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__26730__auto__);
}
})()," (using =)"].join('')));
}

var expected__26762__auto___28061 = cljs.core.nth.call(null,tic_tac_toe.prompts.mode_prompt,(2));
var actual__26763__auto___28062 = c3kit.wire.spec_helper.text.call(null,"#mode-selection button:nth-of-type(2)");
if(cljs.core._EQ_.call(null,expected__26762__auto___28061,actual__26763__auto___28062)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__26762__auto___28061;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__26730__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__26730__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__26763__auto___28062;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__26730__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__26730__auto__);
}
})()," (using =)"].join('')));
}

var expected__26762__auto___28063 = cljs.core.nth.call(null,tic_tac_toe.prompts.mode_prompt,(3));
var actual__26763__auto___28064 = c3kit.wire.spec_helper.text.call(null,"#mode-selection button:nth-of-type(3)");
if(cljs.core._EQ_.call(null,expected__26762__auto___28063,actual__26763__auto___28064)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__26762__auto___28063;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__26730__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__26730__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__26763__auto___28064;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__26730__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__26730__auto__);
}
})()," (using =)"].join('')));
}

var expected__26762__auto__ = cljs.core.nth.call(null,tic_tac_toe.prompts.mode_prompt,(4));
var actual__26763__auto__ = c3kit.wire.spec_helper.text.call(null,"#mode-selection button:nth-of-type(4)");
if(cljs.core._EQ_.call(null,expected__26762__auto__,actual__26763__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__26762__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__26730__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__26730__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__26763__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__26730__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__26730__auto__);
}
})()," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__27859_28049,_STAR_parent_description_STAR__temp_val__27860_28050,description__26625__auto___28048))
,false),speclj.components.new_characteristic.call(null,"sets mode to 1 if user selects HvH",((function (_STAR_parent_description_STAR__orig_val__27859_28049,_STAR_parent_description_STAR__temp_val__27860_28050,description__26625__auto___28048){
return (function (){
c3kit.wire.spec_helper.click_BANG_.call(null,"#mode-selection button:nth-of-type(1)");

var expected__26762__auto__ = (1);
var actual__26763__auto__ = new cljs.core.Keyword(null,"mode","mode",654403691).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.screens.mode_selection_spec.state));
if(cljs.core._EQ_.call(null,expected__26762__auto__,actual__26763__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__26762__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__26730__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__26730__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__26763__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__26730__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__26730__auto__);
}
})()," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__27859_28049,_STAR_parent_description_STAR__temp_val__27860_28050,description__26625__auto___28048))
,false),speclj.components.new_characteristic.call(null,"sets mode to 2 if user selects HvC",((function (_STAR_parent_description_STAR__orig_val__27859_28049,_STAR_parent_description_STAR__temp_val__27860_28050,description__26625__auto___28048){
return (function (){
c3kit.wire.spec_helper.click_BANG_.call(null,"#mode-selection button:nth-of-type(2)");

var expected__26762__auto__ = (2);
var actual__26763__auto__ = new cljs.core.Keyword(null,"mode","mode",654403691).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.screens.mode_selection_spec.state));
if(cljs.core._EQ_.call(null,expected__26762__auto__,actual__26763__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__26762__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__26730__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__26730__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__26763__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__26730__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__26730__auto__);
}
})()," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__27859_28049,_STAR_parent_description_STAR__temp_val__27860_28050,description__26625__auto___28048))
,false),speclj.components.new_characteristic.call(null,"sets mode to 3 if user selects CvH",((function (_STAR_parent_description_STAR__orig_val__27859_28049,_STAR_parent_description_STAR__temp_val__27860_28050,description__26625__auto___28048){
return (function (){
c3kit.wire.spec_helper.click_BANG_.call(null,"#mode-selection button:nth-of-type(3)");

var expected__26762__auto__ = (3);
var actual__26763__auto__ = new cljs.core.Keyword(null,"mode","mode",654403691).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.screens.mode_selection_spec.state));
if(cljs.core._EQ_.call(null,expected__26762__auto__,actual__26763__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__26762__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__26730__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__26730__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__26763__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__26730__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__26730__auto__);
}
})()," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__27859_28049,_STAR_parent_description_STAR__temp_val__27860_28050,description__26625__auto___28048))
,false),speclj.components.new_characteristic.call(null,"sets mode to 4 if user selects CvC",((function (_STAR_parent_description_STAR__orig_val__27859_28049,_STAR_parent_description_STAR__temp_val__27860_28050,description__26625__auto___28048){
return (function (){
c3kit.wire.spec_helper.click_BANG_.call(null,"#mode-selection button:nth-of-type(4)");

var expected__26762__auto__ = (4);
var actual__26763__auto__ = new cljs.core.Keyword(null,"mode","mode",654403691).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.screens.mode_selection_spec.state));
if(cljs.core._EQ_.call(null,expected__26762__auto__,actual__26763__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__26762__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__26730__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__26730__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__26763__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__26730__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__26730__auto__);
}
})()," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__27859_28049,_STAR_parent_description_STAR__temp_val__27860_28050,description__26625__auto___28048))
,false),speclj.components.new_characteristic.call(null,"sets screen to board-selection upon user selection",((function (_STAR_parent_description_STAR__orig_val__27859_28049,_STAR_parent_description_STAR__temp_val__27860_28050,description__26625__auto___28048){
return (function (){
var seq__28028 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#mode-selection button:nth-of-type(1)","#mode-selection button:nth-of-type(2)","#mode-selection button:nth-of-type(3)","#mode-selection button:nth-of-type(4)"], null));
var chunk__28029 = null;
var count__28030 = (0);
var i__28031 = (0);
while(true){
if((i__28031 < count__28030)){
var item = cljs.core._nth.call(null,chunk__28029,i__28031);
c3kit.wire.spec_helper.click_BANG_.call(null,item);

var expected__26762__auto___28071 = new cljs.core.Keyword(null,"board-selection","board-selection",276837898);
var actual__26763__auto___28072 = new cljs.core.Keyword(null,"current-screen","current-screen",-1454713691).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.screens.mode_selection_spec.state));
if(cljs.core._EQ_.call(null,expected__26762__auto___28071,actual__26763__auto___28072)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__26762__auto___28071;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__26730__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__26730__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__26763__auto___28072;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__26730__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__26730__auto__);
}
})()," (using =)"].join('')));
}


var G__28077 = seq__28028;
var G__28078 = chunk__28029;
var G__28079 = count__28030;
var G__28080 = (i__28031 + (1));
seq__28028 = G__28077;
chunk__28029 = G__28078;
count__28030 = G__28079;
i__28031 = G__28080;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__28028);
if(temp__5804__auto__){
var seq__28028__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28028__$1)){
var c__5525__auto__ = cljs.core.chunk_first.call(null,seq__28028__$1);
var G__28081 = cljs.core.chunk_rest.call(null,seq__28028__$1);
var G__28082 = c__5525__auto__;
var G__28083 = cljs.core.count.call(null,c__5525__auto__);
var G__28084 = (0);
seq__28028 = G__28081;
chunk__28029 = G__28082;
count__28030 = G__28083;
i__28031 = G__28084;
continue;
} else {
var item = cljs.core.first.call(null,seq__28028__$1);
c3kit.wire.spec_helper.click_BANG_.call(null,item);

var expected__26762__auto___28085 = new cljs.core.Keyword(null,"board-selection","board-selection",276837898);
var actual__26763__auto___28086 = new cljs.core.Keyword(null,"current-screen","current-screen",-1454713691).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.screens.mode_selection_spec.state));
if(cljs.core._EQ_.call(null,expected__26762__auto___28085,actual__26763__auto___28086)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__26762__auto___28085;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__26730__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__26730__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__26763__auto___28086;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__26730__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__26730__auto__);
}
})()," (using =)"].join('')));
}


var G__28087 = cljs.core.next.call(null,seq__28028__$1);
var G__28088 = null;
var G__28089 = (0);
var G__28090 = (0);
seq__28028 = G__28087;
chunk__28029 = G__28088;
count__28030 = G__28089;
i__28031 = G__28090;
continue;
}
} else {
return null;
}
}
break;
}
});})(_STAR_parent_description_STAR__orig_val__27859_28049,_STAR_parent_description_STAR__temp_val__27860_28050,description__26625__auto___28048))
,false),speclj.components.new_characteristic.call(null,"sets human? to false if mode 3",((function (_STAR_parent_description_STAR__orig_val__27859_28049,_STAR_parent_description_STAR__temp_val__27860_28050,description__26625__auto___28048){
return (function (){
c3kit.wire.spec_helper.click_BANG_.call(null,"#mode-selection button:nth-of-type(3)");

var expected__26762__auto__ = false;
var actual__26763__auto__ = new cljs.core.Keyword(null,"human?","human?",-2017219054).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.screens.mode_selection_spec.state));
if(cljs.core._EQ_.call(null,expected__26762__auto__,actual__26763__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__26762__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__26730__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__26730__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__26763__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__26730__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__26730__auto__);
}
})()," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__27859_28049,_STAR_parent_description_STAR__temp_val__27860_28050,description__26625__auto___28048))
,false),speclj.components.new_characteristic.call(null,"sets human? to false if mode 4",((function (_STAR_parent_description_STAR__orig_val__27859_28049,_STAR_parent_description_STAR__temp_val__27860_28050,description__26625__auto___28048){
return (function (){
c3kit.wire.spec_helper.click_BANG_.call(null,"#mode-selection button:nth-of-type(4)");

var expected__26762__auto__ = false;
var actual__26763__auto__ = new cljs.core.Keyword(null,"human?","human?",-2017219054).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.screens.mode_selection_spec.state));
if(cljs.core._EQ_.call(null,expected__26762__auto__,actual__26763__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__26762__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__26730__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__26730__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__26763__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__26730__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__26730__auto__);
}
})()," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__27859_28049,_STAR_parent_description_STAR__temp_val__27860_28050,description__26625__auto___28048))
,false),speclj.components.new_characteristic.call(null,"sets human? to true if mode 1",((function (_STAR_parent_description_STAR__orig_val__27859_28049,_STAR_parent_description_STAR__temp_val__27860_28050,description__26625__auto___28048){
return (function (){
c3kit.wire.spec_helper.click_BANG_.call(null,"#mode-selection button:nth-of-type(1)");

var expected__26762__auto__ = true;
var actual__26763__auto__ = new cljs.core.Keyword(null,"human?","human?",-2017219054).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.screens.mode_selection_spec.state));
if(cljs.core._EQ_.call(null,expected__26762__auto__,actual__26763__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__26762__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__26730__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__26730__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__26763__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__26730__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__26730__auto__);
}
})()," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__27859_28049,_STAR_parent_description_STAR__temp_val__27860_28050,description__26625__auto___28048))
,false),speclj.components.new_characteristic.call(null,"sets human? to true if mode 2",((function (_STAR_parent_description_STAR__orig_val__27859_28049,_STAR_parent_description_STAR__temp_val__27860_28050,description__26625__auto___28048){
return (function (){
c3kit.wire.spec_helper.click_BANG_.call(null,"#mode-selection button:nth-of-type(2)");

var expected__26762__auto__ = true;
var actual__26763__auto__ = new cljs.core.Keyword(null,"human?","human?",-2017219054).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.screens.mode_selection_spec.state));
if(cljs.core._EQ_.call(null,expected__26762__auto__,actual__26763__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__26762__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__26730__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__26730__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__26763__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__26730__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__26730__auto__);
}
})()," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__27859_28049,_STAR_parent_description_STAR__temp_val__27860_28050,description__26625__auto___28048))
,false)],null)));
var chunk__27862_28052 = null;
var count__27863_28053 = (0);
var i__27864_28054 = (0);
while(true){
if((i__27864_28054 < count__27863_28053)){
var component__26626__auto___28091 = cljs.core._nth.call(null,chunk__27862_28052,i__27864_28054);
speclj.components.install.call(null,component__26626__auto___28091,description__26625__auto___28048);


var G__28092 = seq__27861_28051;
var G__28093 = chunk__27862_28052;
var G__28094 = count__27863_28053;
var G__28095 = (i__27864_28054 + (1));
seq__27861_28051 = G__28092;
chunk__27862_28052 = G__28093;
count__27863_28053 = G__28094;
i__27864_28054 = G__28095;
continue;
} else {
var temp__5804__auto___28096 = cljs.core.seq.call(null,seq__27861_28051);
if(temp__5804__auto___28096){
var seq__27861_28097__$1 = temp__5804__auto___28096;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27861_28097__$1)){
var c__5525__auto___28098 = cljs.core.chunk_first.call(null,seq__27861_28097__$1);
var G__28099 = cljs.core.chunk_rest.call(null,seq__27861_28097__$1);
var G__28100 = c__5525__auto___28098;
var G__28101 = cljs.core.count.call(null,c__5525__auto___28098);
var G__28102 = (0);
seq__27861_28051 = G__28099;
chunk__27862_28052 = G__28100;
count__27863_28053 = G__28101;
i__27864_28054 = G__28102;
continue;
} else {
var component__26626__auto___28103 = cljs.core.first.call(null,seq__27861_28097__$1);
speclj.components.install.call(null,component__26626__auto___28103,description__26625__auto___28048);


var G__28104 = cljs.core.next.call(null,seq__27861_28097__$1);
var G__28105 = null;
var G__28106 = (0);
var G__28107 = (0);
seq__27861_28051 = G__28104;
chunk__27862_28052 = G__28105;
count__27863_28053 = G__28106;
i__27864_28054 = G__28107;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__27859_28049);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__26625__auto___28048);
}


//# sourceMappingURL=mode_selection_spec.js.map
