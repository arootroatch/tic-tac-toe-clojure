// Compiled by ClojureScript 1.11.132 {:optimizations :none}
goog.provide('tic_tac_toe.ai.easy_medium_spec');
goog.require('cljs.core');
goog.require('speclj.core');
goog.require('speclj.stub');
goog.require('tic_tac_toe.ai.easy_medium');
var description__26625__auto___28156 = speclj.components.new_description.call(null,"medium mode",false,"tic-tac-toe.ai.easy-medium-spec");
var _STAR_parent_description_STAR__orig_val__27600_28157 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__27601_28158 = description__26625__auto___28156;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__27601_28158);

try{var seq__27603_28159 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,8,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_around.call(null,((function (_STAR_parent_description_STAR__orig_val__27600_28157,_STAR_parent_description_STAR__temp_val__27601_28158,description__26625__auto___28156){
return (function (it__26995__auto__){
var _STAR_stubbed_invocations_STAR__orig_val__28006 = speclj.stub._STAR_stubbed_invocations_STAR_;
var _STAR_stubbed_invocations_STAR__temp_val__28007 = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
(speclj.stub._STAR_stubbed_invocations_STAR_ = _STAR_stubbed_invocations_STAR__temp_val__28007);

try{return it__26995__auto__.call(null);
}finally {(speclj.stub._STAR_stubbed_invocations_STAR_ = _STAR_stubbed_invocations_STAR__orig_val__28006);
}});})(_STAR_parent_description_STAR__orig_val__27600_28157,_STAR_parent_description_STAR__temp_val__27601_28158,description__26625__auto___28156))
),speclj.components.new_characteristic.call(null,"blocks a win if possible",((function (_STAR_parent_description_STAR__orig_val__27600_28157,_STAR_parent_description_STAR__temp_val__27601_28158,description__26625__auto___28156){
return (function (){
var expected__26762__auto___28163 = (5);
var actual__26763__auto___28164 = tic_tac_toe.ai.easy_medium.find_medium_move.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(3),new cljs.core.Keyword(null,"x","x",2099068185),(5),new cljs.core.Keyword(null,"x","x",2099068185),(7),(8),(9)], null));
if(cljs.core._EQ_.call(null,expected__26762__auto___28163,actual__26763__auto___28164)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__26762__auto___28163;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__26730__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__26730__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__26763__auto___28164;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__26730__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__26730__auto__);
}
})()," (using =)"].join('')));
}

var expected__26762__auto___28165 = (7);
var actual__26763__auto___28166 = tic_tac_toe.ai.easy_medium.find_medium_move.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),(2),(3),new cljs.core.Keyword(null,"x","x",2099068185),(5),(6),(7),(8),(9)], null));
if(cljs.core._EQ_.call(null,expected__26762__auto___28165,actual__26763__auto___28166)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__26762__auto___28165;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__26730__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__26730__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__26763__auto___28166;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__26730__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__26730__auto__);
}
})()," (using =)"].join('')));
}

var expected__26762__auto__ = (3);
var actual__26763__auto__ = tic_tac_toe.ai.easy_medium.find_medium_move.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(3),(4),new cljs.core.Keyword(null,"x","x",2099068185),(6),new cljs.core.Keyword(null,"x","x",2099068185),(8),(9)], null));
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
});})(_STAR_parent_description_STAR__orig_val__27600_28157,_STAR_parent_description_STAR__temp_val__27601_28158,description__26625__auto___28156))
,false),speclj.components.new_characteristic.call(null,"wins if possible",((function (_STAR_parent_description_STAR__orig_val__27600_28157,_STAR_parent_description_STAR__temp_val__27601_28158,description__26625__auto___28156){
return (function (){
var expected__26762__auto___28167 = (5);
var actual__26763__auto___28168 = tic_tac_toe.ai.easy_medium.find_medium_move.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(3),new cljs.core.Keyword(null,"o","o",-1350007228),(5),new cljs.core.Keyword(null,"o","o",-1350007228),(7),(8),(9)], null));
if(cljs.core._EQ_.call(null,expected__26762__auto___28167,actual__26763__auto___28168)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__26762__auto___28167;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__26730__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__26730__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__26763__auto___28168;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__26730__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__26730__auto__);
}
})()," (using =)"].join('')));
}

var expected__26762__auto___28169 = (7);
var actual__26763__auto___28170 = tic_tac_toe.ai.easy_medium.find_medium_move.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"o","o",-1350007228),(2),(3),new cljs.core.Keyword(null,"o","o",-1350007228),(5),(6),(7),(8),(9)], null));
if(cljs.core._EQ_.call(null,expected__26762__auto___28169,actual__26763__auto___28170)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__26762__auto___28169;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__26730__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__26730__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__26763__auto___28170;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__26730__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__26730__auto__);
}
})()," (using =)"].join('')));
}

var expected__26762__auto__ = (3);
var actual__26763__auto__ = tic_tac_toe.ai.easy_medium.find_medium_move.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(3),(4),new cljs.core.Keyword(null,"o","o",-1350007228),(6),new cljs.core.Keyword(null,"o","o",-1350007228),(8),(9)], null));
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
});})(_STAR_parent_description_STAR__orig_val__27600_28157,_STAR_parent_description_STAR__temp_val__27601_28158,description__26625__auto___28156))
,false),speclj.components.new_characteristic.call(null,"play random available move if can't win or block",((function (_STAR_parent_description_STAR__orig_val__27600_28157,_STAR_parent_description_STAR__temp_val__27601_28158,description__26625__auto___28156){
return (function (){
var expected__26813__auto___28171 = tic_tac_toe.ai.easy_medium.find_medium_move.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"o","o",-1350007228),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"o","o",-1350007228),(4),new cljs.core.Keyword(null,"x","x",2099068185),(6),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"o","o",-1350007228),new cljs.core.Keyword(null,"x","x",2099068185)], null));
var actual__26814__auto___28172 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(4),(6)], null);
if((actual__26814__auto___28172 == null)){
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__26813__auto___28171;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__26730__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__26730__auto__);
}
})(),speclj.platform.endl,"to be in: nil"].join('')));
} else {
if(((typeof expected__26813__auto___28171 === 'string') && (typeof actual__26814__auto___28172 === 'string'))){
if(cljs.core._EQ_.call(null,(-1),actual__26814__auto___28172.indexOf(expected__26813__auto___28171))){
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__26813__auto___28171;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__26730__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__26730__auto__);
}
})(),speclj.platform.endl,"to be in: ",(function (){var temp__5806__auto__ = actual__26814__auto___28172;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__26730__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__26730__auto__);
}
})()," (using .contains)"].join('')));
} else {
}
} else {
if(((speclj.platform.re_QMARK_.call(null,expected__26813__auto___28171)) && (typeof actual__26814__auto___28172 === 'string'))){
if(cljs.core.empty_QMARK_.call(null,cljs.core.re_seq.call(null,expected__26813__auto___28171,actual__26814__auto___28172))){
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = actual__26814__auto___28172;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__26730__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__26730__auto__);
}
})(),speclj.platform.endl,"to match: ",(function (){var temp__5806__auto__ = expected__26813__auto___28171;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__26730__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__26730__auto__);
}
})()," (using re-seq)"].join('')));
} else {
}
} else {
if(cljs.core.map_QMARK_.call(null,actual__26814__auto___28172)){
if((!(cljs.core.contains_QMARK_.call(null,actual__26814__auto___28172,expected__26813__auto___28171)))){
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__26813__auto___28171;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__26730__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__26730__auto__);
}
})(),speclj.platform.endl,"to be a key in: ",(function (){var temp__5806__auto__ = actual__26814__auto___28172;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__26730__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__26730__auto__);
}
})()," (using contains?)"].join('')));
} else {
}
} else {
if(cljs.core.coll_QMARK_.call(null,actual__26814__auto___28172)){
if(cljs.core.not.call(null,cljs.core.some.call(null,(function (p1__26812__26815__auto__){
return cljs.core._EQ_.call(null,expected__26813__auto___28171,p1__26812__26815__auto__);
}),actual__26814__auto___28172))){
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__26813__auto___28171;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__26730__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__26730__auto__);
}
})(),speclj.platform.endl,"to be in: ",(function (){var temp__5806__auto__ = actual__26814__auto___28172;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__26730__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__26730__auto__);
}
})()," (using =)"].join('')));
} else {
}
} else {
throw (new Error((function (){var a__26741__auto__ = expected__26813__auto___28171;
var b__26742__auto__ = actual__26814__auto___28172;
var type_a__26743__auto__ = (((a__26741__auto__ == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,a__26741__auto__)));
var type_b__26744__auto__ = (((b__26742__auto__ == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,b__26742__auto__)));
return ["should-contain"," doesn't know how to handle these types: [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_a__26743__auto__)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_b__26744__auto__),"]"].join('');
})()));

}
}
}
}
}

var expected__26813__auto___28173 = tic_tac_toe.ai.easy_medium.find_medium_move.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),(2),(3),(4),new cljs.core.Keyword(null,"o","o",-1350007228),new cljs.core.Keyword(null,"x","x",2099068185),(7),(8),new cljs.core.Keyword(null,"o","o",-1350007228)], null));
var actual__26814__auto___28174 = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(3),(4),(7),(8)], null);
if((actual__26814__auto___28174 == null)){
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__26813__auto___28173;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__26730__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__26730__auto__);
}
})(),speclj.platform.endl,"to be in: nil"].join('')));
} else {
if(((typeof expected__26813__auto___28173 === 'string') && (typeof actual__26814__auto___28174 === 'string'))){
if(cljs.core._EQ_.call(null,(-1),actual__26814__auto___28174.indexOf(expected__26813__auto___28173))){
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__26813__auto___28173;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__26730__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__26730__auto__);
}
})(),speclj.platform.endl,"to be in: ",(function (){var temp__5806__auto__ = actual__26814__auto___28174;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__26730__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__26730__auto__);
}
})()," (using .contains)"].join('')));
} else {
}
} else {
if(((speclj.platform.re_QMARK_.call(null,expected__26813__auto___28173)) && (typeof actual__26814__auto___28174 === 'string'))){
if(cljs.core.empty_QMARK_.call(null,cljs.core.re_seq.call(null,expected__26813__auto___28173,actual__26814__auto___28174))){
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = actual__26814__auto___28174;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__26730__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__26730__auto__);
}
})(),speclj.platform.endl,"to match: ",(function (){var temp__5806__auto__ = expected__26813__auto___28173;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__26730__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__26730__auto__);
}
})()," (using re-seq)"].join('')));
} else {
}
} else {
if(cljs.core.map_QMARK_.call(null,actual__26814__auto___28174)){
if((!(cljs.core.contains_QMARK_.call(null,actual__26814__auto___28174,expected__26813__auto___28173)))){
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__26813__auto___28173;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__26730__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__26730__auto__);
}
})(),speclj.platform.endl,"to be a key in: ",(function (){var temp__5806__auto__ = actual__26814__auto___28174;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__26730__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__26730__auto__);
}
})()," (using contains?)"].join('')));
} else {
}
} else {
if(cljs.core.coll_QMARK_.call(null,actual__26814__auto___28174)){
if(cljs.core.not.call(null,cljs.core.some.call(null,(function (p1__26812__26815__auto__){
return cljs.core._EQ_.call(null,expected__26813__auto___28173,p1__26812__26815__auto__);
}),actual__26814__auto___28174))){
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__26813__auto___28173;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__26730__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__26730__auto__);
}
})(),speclj.platform.endl,"to be in: ",(function (){var temp__5806__auto__ = actual__26814__auto___28174;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__26730__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__26730__auto__);
}
})()," (using =)"].join('')));
} else {
}
} else {
throw (new Error((function (){var a__26741__auto__ = expected__26813__auto___28173;
var b__26742__auto__ = actual__26814__auto___28174;
var type_a__26743__auto__ = (((a__26741__auto__ == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,a__26741__auto__)));
var type_b__26744__auto__ = (((b__26742__auto__ == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,b__26742__auto__)));
return ["should-contain"," doesn't know how to handle these types: [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_a__26743__auto__)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_b__26744__auto__),"]"].join('');
})()));

}
}
}
}
}

var find_easy_move_orig_val__28042 = tic_tac_toe.ai.easy_medium.find_easy_move;
var find_easy_move_temp_val__28043 = speclj.stub.stub.call(null,new cljs.core.Keyword(null,"find-easy-move","find-easy-move",1506541355),cljs.core.PersistentArrayMap.EMPTY);
(tic_tac_toe.ai.easy_medium.find_easy_move = find_easy_move_temp_val__28043);

try{tic_tac_toe.ai.easy_medium.find_medium_move.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),(2),(3),(4),new cljs.core.Keyword(null,"o","o",-1350007228),new cljs.core.Keyword(null,"x","x",2099068185),(7),(8),new cljs.core.Keyword(null,"o","o",-1350007228)], null));

tic_tac_toe.ai.easy_medium.find_medium_move.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"o","o",-1350007228),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"o","o",-1350007228),(4),new cljs.core.Keyword(null,"x","x",2099068185),(6),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"o","o",-1350007228),new cljs.core.Keyword(null,"x","x",2099068185)], null));

var expected__26762__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),(2),(3),(4),new cljs.core.Keyword(null,"o","o",-1350007228),new cljs.core.Keyword(null,"x","x",2099068185),(7),(8),new cljs.core.Keyword(null,"o","o",-1350007228)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"o","o",-1350007228),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"o","o",-1350007228),(4),new cljs.core.Keyword(null,"x","x",2099068185),(6),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"o","o",-1350007228),new cljs.core.Keyword(null,"x","x",2099068185)], null)], null)], null);
var actual__26763__auto__ = speclj.stub.invocations_of.call(null,new cljs.core.Keyword(null,"find-easy-move","find-easy-move",1506541355));
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
}finally {(tic_tac_toe.ai.easy_medium.find_easy_move = find_easy_move_orig_val__28042);
}});})(_STAR_parent_description_STAR__orig_val__27600_28157,_STAR_parent_description_STAR__temp_val__27601_28158,description__26625__auto___28156))
,false),speclj.components.new_characteristic.call(null,"plays center square if first move is a corner",((function (_STAR_parent_description_STAR__orig_val__27600_28157,_STAR_parent_description_STAR__temp_val__27601_28158,description__26625__auto___28156){
return (function (){
var expected__26762__auto___28175 = (5);
var actual__26763__auto___28176 = tic_tac_toe.ai.easy_medium.find_medium_move.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),(2),(3),(4),(5),(6),(7),(8),(9)], null));
if(cljs.core._EQ_.call(null,expected__26762__auto___28175,actual__26763__auto___28176)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__26762__auto___28175;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__26730__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__26730__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__26763__auto___28176;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__26730__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__26730__auto__);
}
})()," (using =)"].join('')));
}

var expected__26762__auto___28177 = (5);
var actual__26763__auto___28178 = tic_tac_toe.ai.easy_medium.find_medium_move.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),new cljs.core.Keyword(null,"x","x",2099068185),(4),(5),(6),(7),(8),(9)], null));
if(cljs.core._EQ_.call(null,expected__26762__auto___28177,actual__26763__auto___28178)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__26762__auto___28177;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__26730__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__26730__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__26763__auto___28178;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__26730__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__26730__auto__);
}
})()," (using =)"].join('')));
}

var expected__26762__auto___28179 = (5);
var actual__26763__auto___28180 = tic_tac_toe.ai.easy_medium.find_medium_move.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(3),(4),(5),(6),new cljs.core.Keyword(null,"x","x",2099068185),(8),(9)], null));
if(cljs.core._EQ_.call(null,expected__26762__auto___28179,actual__26763__auto___28180)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__26762__auto___28179;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__26730__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__26730__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__26763__auto___28180;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__26730__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__26730__auto__);
}
})()," (using =)"].join('')));
}

var expected__26762__auto__ = (5);
var actual__26763__auto__ = tic_tac_toe.ai.easy_medium.find_medium_move.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(3),(4),(5),(6),(7),(8),new cljs.core.Keyword(null,"x","x",2099068185)], null));
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
});})(_STAR_parent_description_STAR__orig_val__27600_28157,_STAR_parent_description_STAR__temp_val__27601_28158,description__26625__auto___28156))
,false),speclj.components.new_characteristic.call(null,"plays top left if first move is center",((function (_STAR_parent_description_STAR__orig_val__27600_28157,_STAR_parent_description_STAR__temp_val__27601_28158,description__26625__auto___28156){
return (function (){
var expected__26762__auto__ = (1);
var actual__26763__auto__ = tic_tac_toe.ai.easy_medium.find_medium_move.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(3),(4),new cljs.core.Keyword(null,"x","x",2099068185),(6),(7),(8),(9)], null));
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
});})(_STAR_parent_description_STAR__orig_val__27600_28157,_STAR_parent_description_STAR__temp_val__27601_28158,description__26625__auto___28156))
,false),(function (){var description__26625__auto____$1 = speclj.components.new_description.call(null,"get-winning-move",false,"tic-tac-toe.ai.easy-medium-spec");
var _STAR_parent_description_STAR__orig_val__28065_28181 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__28066_28182 = description__26625__auto____$1;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__28066_28182);

try{var seq__28067_28183 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_characteristic.call(null,"finds move that will win the game for the given player",((function (_STAR_parent_description_STAR__orig_val__28065_28181,_STAR_parent_description_STAR__temp_val__28066_28182,description__26625__auto____$1,_STAR_parent_description_STAR__orig_val__27600_28157,_STAR_parent_description_STAR__temp_val__27601_28158,description__26625__auto___28156){
return (function (){
var expected__26762__auto___28187 = (5);
var actual__26763__auto___28188 = tic_tac_toe.ai.easy_medium.get_winning_move.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(3),new cljs.core.Keyword(null,"x","x",2099068185),(5),new cljs.core.Keyword(null,"x","x",2099068185),(7),(8),(9)], null),new cljs.core.Keyword(null,"x","x",2099068185));
if(cljs.core._EQ_.call(null,expected__26762__auto___28187,actual__26763__auto___28188)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__26762__auto___28187;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__26730__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__26730__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__26763__auto___28188;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__26730__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__26730__auto__);
}
})()," (using =)"].join('')));
}

var expected__26762__auto___28189 = (7);
var actual__26763__auto___28190 = tic_tac_toe.ai.easy_medium.get_winning_move.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),(2),(3),new cljs.core.Keyword(null,"x","x",2099068185),(5),(6),(7),(8),(9)], null),new cljs.core.Keyword(null,"x","x",2099068185));
if(cljs.core._EQ_.call(null,expected__26762__auto___28189,actual__26763__auto___28190)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__26762__auto___28189;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__26730__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__26730__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__26763__auto___28190;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__26730__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__26730__auto__);
}
})()," (using =)"].join('')));
}

var expected__26762__auto___28191 = (3);
var actual__26763__auto___28192 = tic_tac_toe.ai.easy_medium.get_winning_move.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(3),(4),new cljs.core.Keyword(null,"x","x",2099068185),(6),new cljs.core.Keyword(null,"x","x",2099068185),(8),(9)], null),new cljs.core.Keyword(null,"x","x",2099068185));
if(cljs.core._EQ_.call(null,expected__26762__auto___28191,actual__26763__auto___28192)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__26762__auto___28191;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__26730__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__26730__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__26763__auto___28192;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__26730__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__26730__auto__);
}
})()," (using =)"].join('')));
}

var expected__26762__auto___28193 = (8);
var actual__26763__auto___28194 = tic_tac_toe.ai.easy_medium.get_winning_move.call(null,new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(3),(4),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"x","x",2099068185),(8),(9),(10),(11),(12),(13),(14),(15),(16)], null),new cljs.core.Keyword(null,"x","x",2099068185));
if(cljs.core._EQ_.call(null,expected__26762__auto___28193,actual__26763__auto___28194)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__26762__auto___28193;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__26730__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__26730__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__26763__auto___28194;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__26730__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__26730__auto__);
}
})()," (using =)"].join('')));
}

var expected__26762__auto__ = (16);
var actual__26763__auto__ = tic_tac_toe.ai.easy_medium.get_winning_move.call(null,new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"o","o",-1350007228),(2),(3),(4),(5),new cljs.core.Keyword(null,"o","o",-1350007228),(7),(8),(9),(10),new cljs.core.Keyword(null,"o","o",-1350007228),(12),(13),(14),(15),(16)], null),new cljs.core.Keyword(null,"o","o",-1350007228));
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
});})(_STAR_parent_description_STAR__orig_val__28065_28181,_STAR_parent_description_STAR__temp_val__28066_28182,description__26625__auto____$1,_STAR_parent_description_STAR__orig_val__27600_28157,_STAR_parent_description_STAR__temp_val__27601_28158,description__26625__auto___28156))
,false),speclj.components.new_characteristic.call(null,"returns empty when no path is one move from winning for the given player",((function (_STAR_parent_description_STAR__orig_val__28065_28181,_STAR_parent_description_STAR__temp_val__28066_28182,description__26625__auto____$1,_STAR_parent_description_STAR__orig_val__27600_28157,_STAR_parent_description_STAR__temp_val__27601_28158,description__26625__auto___28156){
return (function (){
var expected__26762__auto___28195 = null;
var actual__26763__auto___28196 = tic_tac_toe.ai.easy_medium.get_winning_move.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"o","o",-1350007228),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"o","o",-1350007228),new cljs.core.Keyword(null,"o","o",-1350007228),new cljs.core.Keyword(null,"o","o",-1350007228),new cljs.core.Keyword(null,"x","x",2099068185)], null),new cljs.core.Keyword(null,"x","x",2099068185));
if(cljs.core._EQ_.call(null,expected__26762__auto___28195,actual__26763__auto___28196)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__26762__auto___28195;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__26730__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__26730__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__26763__auto___28196;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__26730__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__26730__auto__);
}
})()," (using =)"].join('')));
}

var expected__26762__auto___28197 = null;
var actual__26763__auto___28198 = tic_tac_toe.ai.easy_medium.get_winning_move.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"o","o",-1350007228),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"o","o",-1350007228),(4),new cljs.core.Keyword(null,"x","x",2099068185),(6),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"o","o",-1350007228),new cljs.core.Keyword(null,"x","x",2099068185)], null),new cljs.core.Keyword(null,"x","x",2099068185));
if(cljs.core._EQ_.call(null,expected__26762__auto___28197,actual__26763__auto___28198)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__26762__auto___28197;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__26730__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__26730__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__26763__auto___28198;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__26730__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__26730__auto__);
}
})()," (using =)"].join('')));
}

var expected__26762__auto___28199 = null;
var actual__26763__auto___28200 = tic_tac_toe.ai.easy_medium.get_winning_move.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),(2),(3),(4),new cljs.core.Keyword(null,"o","o",-1350007228),new cljs.core.Keyword(null,"x","x",2099068185),(7),(8),new cljs.core.Keyword(null,"o","o",-1350007228)], null),new cljs.core.Keyword(null,"x","x",2099068185));
if(cljs.core._EQ_.call(null,expected__26762__auto___28199,actual__26763__auto___28200)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__26762__auto___28199;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__26730__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__26730__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__26763__auto___28200;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__26730__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__26730__auto__);
}
})()," (using =)"].join('')));
}

var expected__26762__auto___28201 = null;
var actual__26763__auto___28202 = tic_tac_toe.ai.easy_medium.get_winning_move.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(3),(4),(5),(6),(7),(8),(9)], null),new cljs.core.Keyword(null,"x","x",2099068185));
if(cljs.core._EQ_.call(null,expected__26762__auto___28201,actual__26763__auto___28202)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__26762__auto___28201;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__26730__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__26730__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__26763__auto___28202;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__26730__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__26730__auto__);
}
})()," (using =)"].join('')));
}

var expected__26762__auto__ = null;
var actual__26763__auto__ = tic_tac_toe.ai.easy_medium.get_winning_move.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"o","o",-1350007228),(2),(3),(4),(5),(6),(7),(8),(9)], null),new cljs.core.Keyword(null,"o","o",-1350007228));
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
});})(_STAR_parent_description_STAR__orig_val__28065_28181,_STAR_parent_description_STAR__temp_val__28066_28182,description__26625__auto____$1,_STAR_parent_description_STAR__orig_val__27600_28157,_STAR_parent_description_STAR__temp_val__27601_28158,description__26625__auto___28156))
,false)],null)));
var chunk__28068_28184 = null;
var count__28069_28185 = (0);
var i__28070_28186 = (0);
while(true){
if((i__28070_28186 < count__28069_28185)){
var component__26626__auto___28203 = cljs.core._nth.call(null,chunk__28068_28184,i__28070_28186);
speclj.components.install.call(null,component__26626__auto___28203,description__26625__auto____$1);


var G__28204 = seq__28067_28183;
var G__28205 = chunk__28068_28184;
var G__28206 = count__28069_28185;
var G__28207 = (i__28070_28186 + (1));
seq__28067_28183 = G__28204;
chunk__28068_28184 = G__28205;
count__28069_28185 = G__28206;
i__28070_28186 = G__28207;
continue;
} else {
var temp__5804__auto___28208 = cljs.core.seq.call(null,seq__28067_28183);
if(temp__5804__auto___28208){
var seq__28067_28209__$1 = temp__5804__auto___28208;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28067_28209__$1)){
var c__5525__auto___28210 = cljs.core.chunk_first.call(null,seq__28067_28209__$1);
var G__28211 = cljs.core.chunk_rest.call(null,seq__28067_28209__$1);
var G__28212 = c__5525__auto___28210;
var G__28213 = cljs.core.count.call(null,c__5525__auto___28210);
var G__28214 = (0);
seq__28067_28183 = G__28211;
chunk__28068_28184 = G__28212;
count__28069_28185 = G__28213;
i__28070_28186 = G__28214;
continue;
} else {
var component__26626__auto___28215 = cljs.core.first.call(null,seq__28067_28209__$1);
speclj.components.install.call(null,component__26626__auto___28215,description__26625__auto____$1);


var G__28216 = cljs.core.next.call(null,seq__28067_28209__$1);
var G__28217 = null;
var G__28218 = (0);
var G__28219 = (0);
seq__28067_28183 = G__28216;
chunk__28068_28184 = G__28217;
count__28069_28185 = G__28218;
i__28070_28186 = G__28219;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__28065_28181);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__26625__auto____$1);
}

return description__26625__auto____$1;
})(),(function (){var description__26625__auto____$1 = speclj.components.new_description.call(null,"find-easy-move",false,"tic-tac-toe.ai.easy-medium-spec");
var _STAR_parent_description_STAR__orig_val__28120_28220 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__28121_28221 = description__26625__auto____$1;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__28121_28221);

try{var seq__28122_28222 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_characteristic.call(null,"picks an available move at random",((function (_STAR_parent_description_STAR__orig_val__28120_28220,_STAR_parent_description_STAR__temp_val__28121_28221,description__26625__auto____$1,_STAR_parent_description_STAR__orig_val__27600_28157,_STAR_parent_description_STAR__temp_val__27601_28158,description__26625__auto___28156){
return (function (){
var expected__26813__auto___28226 = tic_tac_toe.ai.easy_medium.find_easy_move.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(3),(4),(5),(6),(7),(8),(9)], null));
var actual__26814__auto___28227 = new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(3),(4),(5),(6),(7),(8),(9)], null);
if((actual__26814__auto___28227 == null)){
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__26813__auto___28226;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__26730__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__26730__auto__);
}
})(),speclj.platform.endl,"to be in: nil"].join('')));
} else {
if(((typeof expected__26813__auto___28226 === 'string') && (typeof actual__26814__auto___28227 === 'string'))){
if(cljs.core._EQ_.call(null,(-1),actual__26814__auto___28227.indexOf(expected__26813__auto___28226))){
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__26813__auto___28226;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__26730__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__26730__auto__);
}
})(),speclj.platform.endl,"to be in: ",(function (){var temp__5806__auto__ = actual__26814__auto___28227;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__26730__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__26730__auto__);
}
})()," (using .contains)"].join('')));
} else {
}
} else {
if(((speclj.platform.re_QMARK_.call(null,expected__26813__auto___28226)) && (typeof actual__26814__auto___28227 === 'string'))){
if(cljs.core.empty_QMARK_.call(null,cljs.core.re_seq.call(null,expected__26813__auto___28226,actual__26814__auto___28227))){
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = actual__26814__auto___28227;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__26730__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__26730__auto__);
}
})(),speclj.platform.endl,"to match: ",(function (){var temp__5806__auto__ = expected__26813__auto___28226;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__26730__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__26730__auto__);
}
})()," (using re-seq)"].join('')));
} else {
}
} else {
if(cljs.core.map_QMARK_.call(null,actual__26814__auto___28227)){
if((!(cljs.core.contains_QMARK_.call(null,actual__26814__auto___28227,expected__26813__auto___28226)))){
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__26813__auto___28226;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__26730__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__26730__auto__);
}
})(),speclj.platform.endl,"to be a key in: ",(function (){var temp__5806__auto__ = actual__26814__auto___28227;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__26730__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__26730__auto__);
}
})()," (using contains?)"].join('')));
} else {
}
} else {
if(cljs.core.coll_QMARK_.call(null,actual__26814__auto___28227)){
if(cljs.core.not.call(null,cljs.core.some.call(null,(function (p1__26812__26815__auto__){
return cljs.core._EQ_.call(null,expected__26813__auto___28226,p1__26812__26815__auto__);
}),actual__26814__auto___28227))){
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__26813__auto___28226;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__26730__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__26730__auto__);
}
})(),speclj.platform.endl,"to be in: ",(function (){var temp__5806__auto__ = actual__26814__auto___28227;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__26730__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__26730__auto__);
}
})()," (using =)"].join('')));
} else {
}
} else {
throw (new Error((function (){var a__26741__auto__ = expected__26813__auto___28226;
var b__26742__auto__ = actual__26814__auto___28227;
var type_a__26743__auto__ = (((a__26741__auto__ == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,a__26741__auto__)));
var type_b__26744__auto__ = (((b__26742__auto__ == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,b__26742__auto__)));
return ["should-contain"," doesn't know how to handle these types: [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_a__26743__auto__)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_b__26744__auto__),"]"].join('');
})()));

}
}
}
}
}

var expected__26813__auto___28228 = tic_tac_toe.ai.easy_medium.find_easy_move.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),(2),(3),(4),(5),(6),(7),(8),(9)], null));
var actual__26814__auto___28229 = new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(3),(4),(5),(6),(7),(8),(9)], null);
if((actual__26814__auto___28229 == null)){
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__26813__auto___28228;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__26730__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__26730__auto__);
}
})(),speclj.platform.endl,"to be in: nil"].join('')));
} else {
if(((typeof expected__26813__auto___28228 === 'string') && (typeof actual__26814__auto___28229 === 'string'))){
if(cljs.core._EQ_.call(null,(-1),actual__26814__auto___28229.indexOf(expected__26813__auto___28228))){
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__26813__auto___28228;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__26730__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__26730__auto__);
}
})(),speclj.platform.endl,"to be in: ",(function (){var temp__5806__auto__ = actual__26814__auto___28229;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__26730__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__26730__auto__);
}
})()," (using .contains)"].join('')));
} else {
}
} else {
if(((speclj.platform.re_QMARK_.call(null,expected__26813__auto___28228)) && (typeof actual__26814__auto___28229 === 'string'))){
if(cljs.core.empty_QMARK_.call(null,cljs.core.re_seq.call(null,expected__26813__auto___28228,actual__26814__auto___28229))){
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = actual__26814__auto___28229;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__26730__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__26730__auto__);
}
})(),speclj.platform.endl,"to match: ",(function (){var temp__5806__auto__ = expected__26813__auto___28228;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__26730__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__26730__auto__);
}
})()," (using re-seq)"].join('')));
} else {
}
} else {
if(cljs.core.map_QMARK_.call(null,actual__26814__auto___28229)){
if((!(cljs.core.contains_QMARK_.call(null,actual__26814__auto___28229,expected__26813__auto___28228)))){
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__26813__auto___28228;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__26730__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__26730__auto__);
}
})(),speclj.platform.endl,"to be a key in: ",(function (){var temp__5806__auto__ = actual__26814__auto___28229;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__26730__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__26730__auto__);
}
})()," (using contains?)"].join('')));
} else {
}
} else {
if(cljs.core.coll_QMARK_.call(null,actual__26814__auto___28229)){
if(cljs.core.not.call(null,cljs.core.some.call(null,(function (p1__26812__26815__auto__){
return cljs.core._EQ_.call(null,expected__26813__auto___28228,p1__26812__26815__auto__);
}),actual__26814__auto___28229))){
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__26813__auto___28228;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__26730__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__26730__auto__);
}
})(),speclj.platform.endl,"to be in: ",(function (){var temp__5806__auto__ = actual__26814__auto___28229;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__26730__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__26730__auto__);
}
})()," (using =)"].join('')));
} else {
}
} else {
throw (new Error((function (){var a__26741__auto__ = expected__26813__auto___28228;
var b__26742__auto__ = actual__26814__auto___28229;
var type_a__26743__auto__ = (((a__26741__auto__ == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,a__26741__auto__)));
var type_b__26744__auto__ = (((b__26742__auto__ == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,b__26742__auto__)));
return ["should-contain"," doesn't know how to handle these types: [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_a__26743__auto__)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_b__26744__auto__),"]"].join('');
})()));

}
}
}
}
}

var expected__26813__auto__ = tic_tac_toe.ai.easy_medium.find_easy_move.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"x","x",2099068185),(3),(4),(5),new cljs.core.Keyword(null,"o","o",-1350007228),(7),new cljs.core.Keyword(null,"o","o",-1350007228),new cljs.core.Keyword(null,"x","x",2099068185)], null));
var actual__26814__auto__ = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(4),(5),(7)], null);
if((actual__26814__auto__ == null)){
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__26813__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__26730__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__26730__auto__);
}
})(),speclj.platform.endl,"to be in: nil"].join('')));
} else {
if(((typeof expected__26813__auto__ === 'string') && (typeof actual__26814__auto__ === 'string'))){
if(cljs.core._EQ_.call(null,(-1),actual__26814__auto__.indexOf(expected__26813__auto__))){
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__26813__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__26730__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__26730__auto__);
}
})(),speclj.platform.endl,"to be in: ",(function (){var temp__5806__auto__ = actual__26814__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__26730__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__26730__auto__);
}
})()," (using .contains)"].join('')));
} else {
return null;
}
} else {
if(((speclj.platform.re_QMARK_.call(null,expected__26813__auto__)) && (typeof actual__26814__auto__ === 'string'))){
if(cljs.core.empty_QMARK_.call(null,cljs.core.re_seq.call(null,expected__26813__auto__,actual__26814__auto__))){
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = actual__26814__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__26730__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__26730__auto__);
}
})(),speclj.platform.endl,"to match: ",(function (){var temp__5806__auto__ = expected__26813__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__26730__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__26730__auto__);
}
})()," (using re-seq)"].join('')));
} else {
return null;
}
} else {
if(cljs.core.map_QMARK_.call(null,actual__26814__auto__)){
if((!(cljs.core.contains_QMARK_.call(null,actual__26814__auto__,expected__26813__auto__)))){
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__26813__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__26730__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__26730__auto__);
}
})(),speclj.platform.endl,"to be a key in: ",(function (){var temp__5806__auto__ = actual__26814__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__26730__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__26730__auto__);
}
})()," (using contains?)"].join('')));
} else {
return null;
}
} else {
if(cljs.core.coll_QMARK_.call(null,actual__26814__auto__)){
if(cljs.core.not.call(null,cljs.core.some.call(null,(function (p1__26812__26815__auto__){
return cljs.core._EQ_.call(null,expected__26813__auto__,p1__26812__26815__auto__);
}),actual__26814__auto__))){
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__26813__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__26730__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__26730__auto__);
}
})(),speclj.platform.endl,"to be in: ",(function (){var temp__5806__auto__ = actual__26814__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__26730__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__26730__auto__);
}
})()," (using =)"].join('')));
} else {
return null;
}
} else {
throw (new Error((function (){var a__26741__auto__ = expected__26813__auto__;
var b__26742__auto__ = actual__26814__auto__;
var type_a__26743__auto__ = (((a__26741__auto__ == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,a__26741__auto__)));
var type_b__26744__auto__ = (((b__26742__auto__ == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,b__26742__auto__)));
return ["should-contain"," doesn't know how to handle these types: [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_a__26743__auto__)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_b__26744__auto__),"]"].join('');
})()));

}
}
}
}
}
});})(_STAR_parent_description_STAR__orig_val__28120_28220,_STAR_parent_description_STAR__temp_val__28121_28221,description__26625__auto____$1,_STAR_parent_description_STAR__orig_val__27600_28157,_STAR_parent_description_STAR__temp_val__27601_28158,description__26625__auto___28156))
,false)],null)));
var chunk__28123_28223 = null;
var count__28124_28224 = (0);
var i__28125_28225 = (0);
while(true){
if((i__28125_28225 < count__28124_28224)){
var component__26626__auto___28230 = cljs.core._nth.call(null,chunk__28123_28223,i__28125_28225);
speclj.components.install.call(null,component__26626__auto___28230,description__26625__auto____$1);


var G__28231 = seq__28122_28222;
var G__28232 = chunk__28123_28223;
var G__28233 = count__28124_28224;
var G__28234 = (i__28125_28225 + (1));
seq__28122_28222 = G__28231;
chunk__28123_28223 = G__28232;
count__28124_28224 = G__28233;
i__28125_28225 = G__28234;
continue;
} else {
var temp__5804__auto___28235 = cljs.core.seq.call(null,seq__28122_28222);
if(temp__5804__auto___28235){
var seq__28122_28236__$1 = temp__5804__auto___28235;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28122_28236__$1)){
var c__5525__auto___28237 = cljs.core.chunk_first.call(null,seq__28122_28236__$1);
var G__28238 = cljs.core.chunk_rest.call(null,seq__28122_28236__$1);
var G__28239 = c__5525__auto___28237;
var G__28240 = cljs.core.count.call(null,c__5525__auto___28237);
var G__28241 = (0);
seq__28122_28222 = G__28238;
chunk__28123_28223 = G__28239;
count__28124_28224 = G__28240;
i__28125_28225 = G__28241;
continue;
} else {
var component__26626__auto___28242 = cljs.core.first.call(null,seq__28122_28236__$1);
speclj.components.install.call(null,component__26626__auto___28242,description__26625__auto____$1);


var G__28243 = cljs.core.next.call(null,seq__28122_28236__$1);
var G__28244 = null;
var G__28245 = (0);
var G__28246 = (0);
seq__28122_28222 = G__28243;
chunk__28123_28223 = G__28244;
count__28124_28224 = G__28245;
i__28125_28225 = G__28246;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__28120_28220);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__26625__auto____$1);
}

return description__26625__auto____$1;
})()],null)));
var chunk__27604_28160 = null;
var count__27605_28161 = (0);
var i__27606_28162 = (0);
while(true){
if((i__27606_28162 < count__27605_28161)){
var component__26626__auto___28247 = cljs.core._nth.call(null,chunk__27604_28160,i__27606_28162);
speclj.components.install.call(null,component__26626__auto___28247,description__26625__auto___28156);


var G__28248 = seq__27603_28159;
var G__28249 = chunk__27604_28160;
var G__28250 = count__27605_28161;
var G__28251 = (i__27606_28162 + (1));
seq__27603_28159 = G__28248;
chunk__27604_28160 = G__28249;
count__27605_28161 = G__28250;
i__27606_28162 = G__28251;
continue;
} else {
var temp__5804__auto___28252 = cljs.core.seq.call(null,seq__27603_28159);
if(temp__5804__auto___28252){
var seq__27603_28253__$1 = temp__5804__auto___28252;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27603_28253__$1)){
var c__5525__auto___28254 = cljs.core.chunk_first.call(null,seq__27603_28253__$1);
var G__28255 = cljs.core.chunk_rest.call(null,seq__27603_28253__$1);
var G__28256 = c__5525__auto___28254;
var G__28257 = cljs.core.count.call(null,c__5525__auto___28254);
var G__28258 = (0);
seq__27603_28159 = G__28255;
chunk__27604_28160 = G__28256;
count__27605_28161 = G__28257;
i__27606_28162 = G__28258;
continue;
} else {
var component__26626__auto___28259 = cljs.core.first.call(null,seq__27603_28253__$1);
speclj.components.install.call(null,component__26626__auto___28259,description__26625__auto___28156);


var G__28260 = cljs.core.next.call(null,seq__27603_28253__$1);
var G__28261 = null;
var G__28262 = (0);
var G__28263 = (0);
seq__27603_28159 = G__28260;
chunk__27604_28160 = G__28261;
count__27605_28161 = G__28262;
i__27606_28162 = G__28263;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__27600_28157);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__26625__auto___28156);
}


//# sourceMappingURL=easy_medium_spec.js.map
