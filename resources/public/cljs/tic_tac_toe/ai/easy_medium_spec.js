// Compiled by ClojureScript 1.11.132 {:optimizations :none}
goog.provide('tic_tac_toe.ai.easy_medium_spec');
goog.require('cljs.core');
goog.require('speclj.core');
goog.require('speclj.stub');
goog.require('tic_tac_toe.ai.easy_medium');
var description__20276__auto___21901 = speclj.components.new_description.call(null,"medium mode",false,"tic-tac-toe.ai.easy-medium-spec");
var _STAR_parent_description_STAR__orig_val__21413_21902 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__21414_21903 = description__20276__auto___21901;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__21414_21903);

try{var seq__21415_21904 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,8,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_around.call(null,((function (_STAR_parent_description_STAR__orig_val__21413_21902,_STAR_parent_description_STAR__temp_val__21414_21903,description__20276__auto___21901){
return (function (it__20646__auto__){
var _STAR_stubbed_invocations_STAR__orig_val__21751 = speclj.stub._STAR_stubbed_invocations_STAR_;
var _STAR_stubbed_invocations_STAR__temp_val__21752 = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
(speclj.stub._STAR_stubbed_invocations_STAR_ = _STAR_stubbed_invocations_STAR__temp_val__21752);

try{return it__20646__auto__.call(null);
}finally {(speclj.stub._STAR_stubbed_invocations_STAR_ = _STAR_stubbed_invocations_STAR__orig_val__21751);
}});})(_STAR_parent_description_STAR__orig_val__21413_21902,_STAR_parent_description_STAR__temp_val__21414_21903,description__20276__auto___21901))
),speclj.components.new_characteristic.call(null,"blocks a win if possible",((function (_STAR_parent_description_STAR__orig_val__21413_21902,_STAR_parent_description_STAR__temp_val__21414_21903,description__20276__auto___21901){
return (function (){
var expected__20413__auto___21908 = (5);
var actual__20414__auto___21909 = tic_tac_toe.ai.easy_medium.find_medium_move.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(3),new cljs.core.Keyword(null,"x","x",2099068185),(5),new cljs.core.Keyword(null,"x","x",2099068185),(7),(8),(9)], null));
if(cljs.core._EQ_.call(null,expected__20413__auto___21908,actual__20414__auto___21909)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__20413__auto___21908;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__20381__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__20381__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__20414__auto___21909;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__20381__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__20381__auto__);
}
})()," (using =)"].join('')));
}

var expected__20413__auto___21910 = (7);
var actual__20414__auto___21911 = tic_tac_toe.ai.easy_medium.find_medium_move.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),(2),(3),new cljs.core.Keyword(null,"x","x",2099068185),(5),(6),(7),(8),(9)], null));
if(cljs.core._EQ_.call(null,expected__20413__auto___21910,actual__20414__auto___21911)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__20413__auto___21910;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__20381__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__20381__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__20414__auto___21911;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__20381__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__20381__auto__);
}
})()," (using =)"].join('')));
}

var expected__20413__auto__ = (3);
var actual__20414__auto__ = tic_tac_toe.ai.easy_medium.find_medium_move.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(3),(4),new cljs.core.Keyword(null,"x","x",2099068185),(6),new cljs.core.Keyword(null,"x","x",2099068185),(8),(9)], null));
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
});})(_STAR_parent_description_STAR__orig_val__21413_21902,_STAR_parent_description_STAR__temp_val__21414_21903,description__20276__auto___21901))
,false),speclj.components.new_characteristic.call(null,"wins if possible",((function (_STAR_parent_description_STAR__orig_val__21413_21902,_STAR_parent_description_STAR__temp_val__21414_21903,description__20276__auto___21901){
return (function (){
var expected__20413__auto___21912 = (5);
var actual__20414__auto___21913 = tic_tac_toe.ai.easy_medium.find_medium_move.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(3),new cljs.core.Keyword(null,"o","o",-1350007228),(5),new cljs.core.Keyword(null,"o","o",-1350007228),(7),(8),(9)], null));
if(cljs.core._EQ_.call(null,expected__20413__auto___21912,actual__20414__auto___21913)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__20413__auto___21912;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__20381__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__20381__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__20414__auto___21913;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__20381__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__20381__auto__);
}
})()," (using =)"].join('')));
}

var expected__20413__auto___21914 = (7);
var actual__20414__auto___21915 = tic_tac_toe.ai.easy_medium.find_medium_move.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"o","o",-1350007228),(2),(3),new cljs.core.Keyword(null,"o","o",-1350007228),(5),(6),(7),(8),(9)], null));
if(cljs.core._EQ_.call(null,expected__20413__auto___21914,actual__20414__auto___21915)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__20413__auto___21914;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__20381__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__20381__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__20414__auto___21915;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__20381__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__20381__auto__);
}
})()," (using =)"].join('')));
}

var expected__20413__auto__ = (3);
var actual__20414__auto__ = tic_tac_toe.ai.easy_medium.find_medium_move.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(3),(4),new cljs.core.Keyword(null,"o","o",-1350007228),(6),new cljs.core.Keyword(null,"o","o",-1350007228),(8),(9)], null));
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
});})(_STAR_parent_description_STAR__orig_val__21413_21902,_STAR_parent_description_STAR__temp_val__21414_21903,description__20276__auto___21901))
,false),speclj.components.new_characteristic.call(null,"play random available move if can't win or block",((function (_STAR_parent_description_STAR__orig_val__21413_21902,_STAR_parent_description_STAR__temp_val__21414_21903,description__20276__auto___21901){
return (function (){
var expected__20464__auto___21916 = tic_tac_toe.ai.easy_medium.find_medium_move.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"o","o",-1350007228),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"o","o",-1350007228),(4),new cljs.core.Keyword(null,"x","x",2099068185),(6),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"o","o",-1350007228),new cljs.core.Keyword(null,"x","x",2099068185)], null));
var actual__20465__auto___21917 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(4),(6)], null);
if((actual__20465__auto___21917 == null)){
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__20464__auto___21916;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__20381__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__20381__auto__);
}
})(),speclj.platform.endl,"to be in: nil"].join('')));
} else {
if(((typeof expected__20464__auto___21916 === 'string') && (typeof actual__20465__auto___21917 === 'string'))){
if(cljs.core._EQ_.call(null,(-1),actual__20465__auto___21917.indexOf(expected__20464__auto___21916))){
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__20464__auto___21916;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__20381__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__20381__auto__);
}
})(),speclj.platform.endl,"to be in: ",(function (){var temp__5806__auto__ = actual__20465__auto___21917;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__20381__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__20381__auto__);
}
})()," (using .contains)"].join('')));
} else {
}
} else {
if(((speclj.platform.re_QMARK_.call(null,expected__20464__auto___21916)) && (typeof actual__20465__auto___21917 === 'string'))){
if(cljs.core.empty_QMARK_.call(null,cljs.core.re_seq.call(null,expected__20464__auto___21916,actual__20465__auto___21917))){
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = actual__20465__auto___21917;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__20381__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__20381__auto__);
}
})(),speclj.platform.endl,"to match: ",(function (){var temp__5806__auto__ = expected__20464__auto___21916;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__20381__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__20381__auto__);
}
})()," (using re-seq)"].join('')));
} else {
}
} else {
if(cljs.core.map_QMARK_.call(null,actual__20465__auto___21917)){
if((!(cljs.core.contains_QMARK_.call(null,actual__20465__auto___21917,expected__20464__auto___21916)))){
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__20464__auto___21916;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__20381__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__20381__auto__);
}
})(),speclj.platform.endl,"to be a key in: ",(function (){var temp__5806__auto__ = actual__20465__auto___21917;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__20381__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__20381__auto__);
}
})()," (using contains?)"].join('')));
} else {
}
} else {
if(cljs.core.coll_QMARK_.call(null,actual__20465__auto___21917)){
if(cljs.core.not.call(null,cljs.core.some.call(null,(function (p1__20463__20466__auto__){
return cljs.core._EQ_.call(null,expected__20464__auto___21916,p1__20463__20466__auto__);
}),actual__20465__auto___21917))){
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__20464__auto___21916;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__20381__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__20381__auto__);
}
})(),speclj.platform.endl,"to be in: ",(function (){var temp__5806__auto__ = actual__20465__auto___21917;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__20381__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__20381__auto__);
}
})()," (using =)"].join('')));
} else {
}
} else {
throw (new Error((function (){var a__20392__auto__ = expected__20464__auto___21916;
var b__20393__auto__ = actual__20465__auto___21917;
var type_a__20394__auto__ = (((a__20392__auto__ == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,a__20392__auto__)));
var type_b__20395__auto__ = (((b__20393__auto__ == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,b__20393__auto__)));
return ["should-contain"," doesn't know how to handle these types: [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_a__20394__auto__)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_b__20395__auto__),"]"].join('');
})()));

}
}
}
}
}

var expected__20464__auto___21918 = tic_tac_toe.ai.easy_medium.find_medium_move.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),(2),(3),(4),new cljs.core.Keyword(null,"o","o",-1350007228),new cljs.core.Keyword(null,"x","x",2099068185),(7),(8),new cljs.core.Keyword(null,"o","o",-1350007228)], null));
var actual__20465__auto___21919 = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(3),(4),(7),(8)], null);
if((actual__20465__auto___21919 == null)){
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__20464__auto___21918;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__20381__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__20381__auto__);
}
})(),speclj.platform.endl,"to be in: nil"].join('')));
} else {
if(((typeof expected__20464__auto___21918 === 'string') && (typeof actual__20465__auto___21919 === 'string'))){
if(cljs.core._EQ_.call(null,(-1),actual__20465__auto___21919.indexOf(expected__20464__auto___21918))){
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__20464__auto___21918;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__20381__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__20381__auto__);
}
})(),speclj.platform.endl,"to be in: ",(function (){var temp__5806__auto__ = actual__20465__auto___21919;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__20381__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__20381__auto__);
}
})()," (using .contains)"].join('')));
} else {
}
} else {
if(((speclj.platform.re_QMARK_.call(null,expected__20464__auto___21918)) && (typeof actual__20465__auto___21919 === 'string'))){
if(cljs.core.empty_QMARK_.call(null,cljs.core.re_seq.call(null,expected__20464__auto___21918,actual__20465__auto___21919))){
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = actual__20465__auto___21919;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__20381__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__20381__auto__);
}
})(),speclj.platform.endl,"to match: ",(function (){var temp__5806__auto__ = expected__20464__auto___21918;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__20381__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__20381__auto__);
}
})()," (using re-seq)"].join('')));
} else {
}
} else {
if(cljs.core.map_QMARK_.call(null,actual__20465__auto___21919)){
if((!(cljs.core.contains_QMARK_.call(null,actual__20465__auto___21919,expected__20464__auto___21918)))){
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__20464__auto___21918;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__20381__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__20381__auto__);
}
})(),speclj.platform.endl,"to be a key in: ",(function (){var temp__5806__auto__ = actual__20465__auto___21919;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__20381__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__20381__auto__);
}
})()," (using contains?)"].join('')));
} else {
}
} else {
if(cljs.core.coll_QMARK_.call(null,actual__20465__auto___21919)){
if(cljs.core.not.call(null,cljs.core.some.call(null,(function (p1__20463__20466__auto__){
return cljs.core._EQ_.call(null,expected__20464__auto___21918,p1__20463__20466__auto__);
}),actual__20465__auto___21919))){
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__20464__auto___21918;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__20381__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__20381__auto__);
}
})(),speclj.platform.endl,"to be in: ",(function (){var temp__5806__auto__ = actual__20465__auto___21919;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__20381__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__20381__auto__);
}
})()," (using =)"].join('')));
} else {
}
} else {
throw (new Error((function (){var a__20392__auto__ = expected__20464__auto___21918;
var b__20393__auto__ = actual__20465__auto___21919;
var type_a__20394__auto__ = (((a__20392__auto__ == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,a__20392__auto__)));
var type_b__20395__auto__ = (((b__20393__auto__ == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,b__20393__auto__)));
return ["should-contain"," doesn't know how to handle these types: [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_a__20394__auto__)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_b__20395__auto__),"]"].join('');
})()));

}
}
}
}
}

var find_easy_move_orig_val__21808 = tic_tac_toe.ai.easy_medium.find_easy_move;
var find_easy_move_temp_val__21809 = speclj.stub.stub.call(null,new cljs.core.Keyword(null,"find-easy-move","find-easy-move",1506541355),cljs.core.PersistentArrayMap.EMPTY);
(tic_tac_toe.ai.easy_medium.find_easy_move = find_easy_move_temp_val__21809);

try{tic_tac_toe.ai.easy_medium.find_medium_move.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),(2),(3),(4),new cljs.core.Keyword(null,"o","o",-1350007228),new cljs.core.Keyword(null,"x","x",2099068185),(7),(8),new cljs.core.Keyword(null,"o","o",-1350007228)], null));

tic_tac_toe.ai.easy_medium.find_medium_move.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"o","o",-1350007228),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"o","o",-1350007228),(4),new cljs.core.Keyword(null,"x","x",2099068185),(6),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"o","o",-1350007228),new cljs.core.Keyword(null,"x","x",2099068185)], null));

var expected__20413__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),(2),(3),(4),new cljs.core.Keyword(null,"o","o",-1350007228),new cljs.core.Keyword(null,"x","x",2099068185),(7),(8),new cljs.core.Keyword(null,"o","o",-1350007228)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"o","o",-1350007228),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"o","o",-1350007228),(4),new cljs.core.Keyword(null,"x","x",2099068185),(6),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"o","o",-1350007228),new cljs.core.Keyword(null,"x","x",2099068185)], null)], null)], null);
var actual__20414__auto__ = speclj.stub.invocations_of.call(null,new cljs.core.Keyword(null,"find-easy-move","find-easy-move",1506541355));
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
}finally {(tic_tac_toe.ai.easy_medium.find_easy_move = find_easy_move_orig_val__21808);
}});})(_STAR_parent_description_STAR__orig_val__21413_21902,_STAR_parent_description_STAR__temp_val__21414_21903,description__20276__auto___21901))
,false),speclj.components.new_characteristic.call(null,"plays center square if first move is a corner",((function (_STAR_parent_description_STAR__orig_val__21413_21902,_STAR_parent_description_STAR__temp_val__21414_21903,description__20276__auto___21901){
return (function (){
var expected__20413__auto___21926 = (5);
var actual__20414__auto___21927 = tic_tac_toe.ai.easy_medium.find_medium_move.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),(2),(3),(4),(5),(6),(7),(8),(9)], null));
if(cljs.core._EQ_.call(null,expected__20413__auto___21926,actual__20414__auto___21927)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__20413__auto___21926;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__20381__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__20381__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__20414__auto___21927;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__20381__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__20381__auto__);
}
})()," (using =)"].join('')));
}

var expected__20413__auto___21928 = (5);
var actual__20414__auto___21929 = tic_tac_toe.ai.easy_medium.find_medium_move.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),new cljs.core.Keyword(null,"x","x",2099068185),(4),(5),(6),(7),(8),(9)], null));
if(cljs.core._EQ_.call(null,expected__20413__auto___21928,actual__20414__auto___21929)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__20413__auto___21928;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__20381__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__20381__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__20414__auto___21929;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__20381__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__20381__auto__);
}
})()," (using =)"].join('')));
}

var expected__20413__auto___21930 = (5);
var actual__20414__auto___21931 = tic_tac_toe.ai.easy_medium.find_medium_move.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(3),(4),(5),(6),new cljs.core.Keyword(null,"x","x",2099068185),(8),(9)], null));
if(cljs.core._EQ_.call(null,expected__20413__auto___21930,actual__20414__auto___21931)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__20413__auto___21930;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__20381__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__20381__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__20414__auto___21931;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__20381__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__20381__auto__);
}
})()," (using =)"].join('')));
}

var expected__20413__auto__ = (5);
var actual__20414__auto__ = tic_tac_toe.ai.easy_medium.find_medium_move.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(3),(4),(5),(6),(7),(8),new cljs.core.Keyword(null,"x","x",2099068185)], null));
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
});})(_STAR_parent_description_STAR__orig_val__21413_21902,_STAR_parent_description_STAR__temp_val__21414_21903,description__20276__auto___21901))
,false),speclj.components.new_characteristic.call(null,"plays top left if first move is center",((function (_STAR_parent_description_STAR__orig_val__21413_21902,_STAR_parent_description_STAR__temp_val__21414_21903,description__20276__auto___21901){
return (function (){
var expected__20413__auto__ = (1);
var actual__20414__auto__ = tic_tac_toe.ai.easy_medium.find_medium_move.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(3),(4),new cljs.core.Keyword(null,"x","x",2099068185),(6),(7),(8),(9)], null));
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
});})(_STAR_parent_description_STAR__orig_val__21413_21902,_STAR_parent_description_STAR__temp_val__21414_21903,description__20276__auto___21901))
,false),(function (){var description__20276__auto____$1 = speclj.components.new_description.call(null,"get-winning-move",false,"tic-tac-toe.ai.easy-medium-spec");
var _STAR_parent_description_STAR__orig_val__21837_21932 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__21838_21933 = description__20276__auto____$1;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__21838_21933);

try{var seq__21839_21934 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_characteristic.call(null,"finds move that will win the game for the given player",((function (_STAR_parent_description_STAR__orig_val__21837_21932,_STAR_parent_description_STAR__temp_val__21838_21933,description__20276__auto____$1,_STAR_parent_description_STAR__orig_val__21413_21902,_STAR_parent_description_STAR__temp_val__21414_21903,description__20276__auto___21901){
return (function (){
var expected__20413__auto___21938 = (5);
var actual__20414__auto___21939 = tic_tac_toe.ai.easy_medium.get_winning_move.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(3),new cljs.core.Keyword(null,"x","x",2099068185),(5),new cljs.core.Keyword(null,"x","x",2099068185),(7),(8),(9)], null),new cljs.core.Keyword(null,"x","x",2099068185));
if(cljs.core._EQ_.call(null,expected__20413__auto___21938,actual__20414__auto___21939)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__20413__auto___21938;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__20381__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__20381__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__20414__auto___21939;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__20381__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__20381__auto__);
}
})()," (using =)"].join('')));
}

var expected__20413__auto___21940 = (7);
var actual__20414__auto___21941 = tic_tac_toe.ai.easy_medium.get_winning_move.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),(2),(3),new cljs.core.Keyword(null,"x","x",2099068185),(5),(6),(7),(8),(9)], null),new cljs.core.Keyword(null,"x","x",2099068185));
if(cljs.core._EQ_.call(null,expected__20413__auto___21940,actual__20414__auto___21941)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__20413__auto___21940;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__20381__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__20381__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__20414__auto___21941;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__20381__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__20381__auto__);
}
})()," (using =)"].join('')));
}

var expected__20413__auto___21942 = (3);
var actual__20414__auto___21943 = tic_tac_toe.ai.easy_medium.get_winning_move.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(3),(4),new cljs.core.Keyword(null,"x","x",2099068185),(6),new cljs.core.Keyword(null,"x","x",2099068185),(8),(9)], null),new cljs.core.Keyword(null,"x","x",2099068185));
if(cljs.core._EQ_.call(null,expected__20413__auto___21942,actual__20414__auto___21943)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__20413__auto___21942;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__20381__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__20381__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__20414__auto___21943;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__20381__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__20381__auto__);
}
})()," (using =)"].join('')));
}

var expected__20413__auto___21944 = (8);
var actual__20414__auto___21945 = tic_tac_toe.ai.easy_medium.get_winning_move.call(null,new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(3),(4),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"x","x",2099068185),(8),(9),(10),(11),(12),(13),(14),(15),(16)], null),new cljs.core.Keyword(null,"x","x",2099068185));
if(cljs.core._EQ_.call(null,expected__20413__auto___21944,actual__20414__auto___21945)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__20413__auto___21944;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__20381__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__20381__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__20414__auto___21945;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__20381__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__20381__auto__);
}
})()," (using =)"].join('')));
}

var expected__20413__auto__ = (16);
var actual__20414__auto__ = tic_tac_toe.ai.easy_medium.get_winning_move.call(null,new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"o","o",-1350007228),(2),(3),(4),(5),new cljs.core.Keyword(null,"o","o",-1350007228),(7),(8),(9),(10),new cljs.core.Keyword(null,"o","o",-1350007228),(12),(13),(14),(15),(16)], null),new cljs.core.Keyword(null,"o","o",-1350007228));
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
});})(_STAR_parent_description_STAR__orig_val__21837_21932,_STAR_parent_description_STAR__temp_val__21838_21933,description__20276__auto____$1,_STAR_parent_description_STAR__orig_val__21413_21902,_STAR_parent_description_STAR__temp_val__21414_21903,description__20276__auto___21901))
,false),speclj.components.new_characteristic.call(null,"returns empty when no path is one move from winning for the given player",((function (_STAR_parent_description_STAR__orig_val__21837_21932,_STAR_parent_description_STAR__temp_val__21838_21933,description__20276__auto____$1,_STAR_parent_description_STAR__orig_val__21413_21902,_STAR_parent_description_STAR__temp_val__21414_21903,description__20276__auto___21901){
return (function (){
var expected__20413__auto___21946 = null;
var actual__20414__auto___21947 = tic_tac_toe.ai.easy_medium.get_winning_move.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"o","o",-1350007228),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"o","o",-1350007228),new cljs.core.Keyword(null,"o","o",-1350007228),new cljs.core.Keyword(null,"o","o",-1350007228),new cljs.core.Keyword(null,"x","x",2099068185)], null),new cljs.core.Keyword(null,"x","x",2099068185));
if(cljs.core._EQ_.call(null,expected__20413__auto___21946,actual__20414__auto___21947)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__20413__auto___21946;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__20381__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__20381__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__20414__auto___21947;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__20381__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__20381__auto__);
}
})()," (using =)"].join('')));
}

var expected__20413__auto___21948 = null;
var actual__20414__auto___21949 = tic_tac_toe.ai.easy_medium.get_winning_move.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"o","o",-1350007228),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"o","o",-1350007228),(4),new cljs.core.Keyword(null,"x","x",2099068185),(6),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"o","o",-1350007228),new cljs.core.Keyword(null,"x","x",2099068185)], null),new cljs.core.Keyword(null,"x","x",2099068185));
if(cljs.core._EQ_.call(null,expected__20413__auto___21948,actual__20414__auto___21949)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__20413__auto___21948;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__20381__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__20381__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__20414__auto___21949;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__20381__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__20381__auto__);
}
})()," (using =)"].join('')));
}

var expected__20413__auto___21950 = null;
var actual__20414__auto___21951 = tic_tac_toe.ai.easy_medium.get_winning_move.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),(2),(3),(4),new cljs.core.Keyword(null,"o","o",-1350007228),new cljs.core.Keyword(null,"x","x",2099068185),(7),(8),new cljs.core.Keyword(null,"o","o",-1350007228)], null),new cljs.core.Keyword(null,"x","x",2099068185));
if(cljs.core._EQ_.call(null,expected__20413__auto___21950,actual__20414__auto___21951)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__20413__auto___21950;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__20381__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__20381__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__20414__auto___21951;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__20381__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__20381__auto__);
}
})()," (using =)"].join('')));
}

var expected__20413__auto___21952 = null;
var actual__20414__auto___21953 = tic_tac_toe.ai.easy_medium.get_winning_move.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(3),(4),(5),(6),(7),(8),(9)], null),new cljs.core.Keyword(null,"x","x",2099068185));
if(cljs.core._EQ_.call(null,expected__20413__auto___21952,actual__20414__auto___21953)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__20413__auto___21952;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__20381__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__20381__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__20414__auto___21953;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__20381__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__20381__auto__);
}
})()," (using =)"].join('')));
}

var expected__20413__auto__ = null;
var actual__20414__auto__ = tic_tac_toe.ai.easy_medium.get_winning_move.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"o","o",-1350007228),(2),(3),(4),(5),(6),(7),(8),(9)], null),new cljs.core.Keyword(null,"o","o",-1350007228));
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
});})(_STAR_parent_description_STAR__orig_val__21837_21932,_STAR_parent_description_STAR__temp_val__21838_21933,description__20276__auto____$1,_STAR_parent_description_STAR__orig_val__21413_21902,_STAR_parent_description_STAR__temp_val__21414_21903,description__20276__auto___21901))
,false)],null)));
var chunk__21840_21935 = null;
var count__21841_21936 = (0);
var i__21842_21937 = (0);
while(true){
if((i__21842_21937 < count__21841_21936)){
var component__20277__auto___21960 = cljs.core._nth.call(null,chunk__21840_21935,i__21842_21937);
speclj.components.install.call(null,component__20277__auto___21960,description__20276__auto____$1);


var G__21961 = seq__21839_21934;
var G__21962 = chunk__21840_21935;
var G__21963 = count__21841_21936;
var G__21964 = (i__21842_21937 + (1));
seq__21839_21934 = G__21961;
chunk__21840_21935 = G__21962;
count__21841_21936 = G__21963;
i__21842_21937 = G__21964;
continue;
} else {
var temp__5804__auto___21965 = cljs.core.seq.call(null,seq__21839_21934);
if(temp__5804__auto___21965){
var seq__21839_21966__$1 = temp__5804__auto___21965;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21839_21966__$1)){
var c__5525__auto___21967 = cljs.core.chunk_first.call(null,seq__21839_21966__$1);
var G__21968 = cljs.core.chunk_rest.call(null,seq__21839_21966__$1);
var G__21969 = c__5525__auto___21967;
var G__21970 = cljs.core.count.call(null,c__5525__auto___21967);
var G__21971 = (0);
seq__21839_21934 = G__21968;
chunk__21840_21935 = G__21969;
count__21841_21936 = G__21970;
i__21842_21937 = G__21971;
continue;
} else {
var component__20277__auto___21972 = cljs.core.first.call(null,seq__21839_21966__$1);
speclj.components.install.call(null,component__20277__auto___21972,description__20276__auto____$1);


var G__21973 = cljs.core.next.call(null,seq__21839_21966__$1);
var G__21974 = null;
var G__21975 = (0);
var G__21976 = (0);
seq__21839_21934 = G__21973;
chunk__21840_21935 = G__21974;
count__21841_21936 = G__21975;
i__21842_21937 = G__21976;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__21837_21932);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__20276__auto____$1);
}

return description__20276__auto____$1;
})(),(function (){var description__20276__auto____$1 = speclj.components.new_description.call(null,"find-easy-move",false,"tic-tac-toe.ai.easy-medium-spec");
var _STAR_parent_description_STAR__orig_val__21883_21977 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__21884_21978 = description__20276__auto____$1;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__21884_21978);

try{var seq__21885_21979 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_characteristic.call(null,"picks an available move at random",((function (_STAR_parent_description_STAR__orig_val__21883_21977,_STAR_parent_description_STAR__temp_val__21884_21978,description__20276__auto____$1,_STAR_parent_description_STAR__orig_val__21413_21902,_STAR_parent_description_STAR__temp_val__21414_21903,description__20276__auto___21901){
return (function (){
var expected__20464__auto___21983 = tic_tac_toe.ai.easy_medium.find_easy_move.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(3),(4),(5),(6),(7),(8),(9)], null));
var actual__20465__auto___21984 = new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(3),(4),(5),(6),(7),(8),(9)], null);
if((actual__20465__auto___21984 == null)){
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__20464__auto___21983;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__20381__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__20381__auto__);
}
})(),speclj.platform.endl,"to be in: nil"].join('')));
} else {
if(((typeof expected__20464__auto___21983 === 'string') && (typeof actual__20465__auto___21984 === 'string'))){
if(cljs.core._EQ_.call(null,(-1),actual__20465__auto___21984.indexOf(expected__20464__auto___21983))){
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__20464__auto___21983;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__20381__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__20381__auto__);
}
})(),speclj.platform.endl,"to be in: ",(function (){var temp__5806__auto__ = actual__20465__auto___21984;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__20381__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__20381__auto__);
}
})()," (using .contains)"].join('')));
} else {
}
} else {
if(((speclj.platform.re_QMARK_.call(null,expected__20464__auto___21983)) && (typeof actual__20465__auto___21984 === 'string'))){
if(cljs.core.empty_QMARK_.call(null,cljs.core.re_seq.call(null,expected__20464__auto___21983,actual__20465__auto___21984))){
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = actual__20465__auto___21984;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__20381__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__20381__auto__);
}
})(),speclj.platform.endl,"to match: ",(function (){var temp__5806__auto__ = expected__20464__auto___21983;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__20381__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__20381__auto__);
}
})()," (using re-seq)"].join('')));
} else {
}
} else {
if(cljs.core.map_QMARK_.call(null,actual__20465__auto___21984)){
if((!(cljs.core.contains_QMARK_.call(null,actual__20465__auto___21984,expected__20464__auto___21983)))){
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__20464__auto___21983;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__20381__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__20381__auto__);
}
})(),speclj.platform.endl,"to be a key in: ",(function (){var temp__5806__auto__ = actual__20465__auto___21984;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__20381__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__20381__auto__);
}
})()," (using contains?)"].join('')));
} else {
}
} else {
if(cljs.core.coll_QMARK_.call(null,actual__20465__auto___21984)){
if(cljs.core.not.call(null,cljs.core.some.call(null,(function (p1__20463__20466__auto__){
return cljs.core._EQ_.call(null,expected__20464__auto___21983,p1__20463__20466__auto__);
}),actual__20465__auto___21984))){
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__20464__auto___21983;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__20381__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__20381__auto__);
}
})(),speclj.platform.endl,"to be in: ",(function (){var temp__5806__auto__ = actual__20465__auto___21984;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__20381__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__20381__auto__);
}
})()," (using =)"].join('')));
} else {
}
} else {
throw (new Error((function (){var a__20392__auto__ = expected__20464__auto___21983;
var b__20393__auto__ = actual__20465__auto___21984;
var type_a__20394__auto__ = (((a__20392__auto__ == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,a__20392__auto__)));
var type_b__20395__auto__ = (((b__20393__auto__ == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,b__20393__auto__)));
return ["should-contain"," doesn't know how to handle these types: [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_a__20394__auto__)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_b__20395__auto__),"]"].join('');
})()));

}
}
}
}
}

var expected__20464__auto___21985 = tic_tac_toe.ai.easy_medium.find_easy_move.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),(2),(3),(4),(5),(6),(7),(8),(9)], null));
var actual__20465__auto___21986 = new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(3),(4),(5),(6),(7),(8),(9)], null);
if((actual__20465__auto___21986 == null)){
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__20464__auto___21985;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__20381__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__20381__auto__);
}
})(),speclj.platform.endl,"to be in: nil"].join('')));
} else {
if(((typeof expected__20464__auto___21985 === 'string') && (typeof actual__20465__auto___21986 === 'string'))){
if(cljs.core._EQ_.call(null,(-1),actual__20465__auto___21986.indexOf(expected__20464__auto___21985))){
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__20464__auto___21985;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__20381__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__20381__auto__);
}
})(),speclj.platform.endl,"to be in: ",(function (){var temp__5806__auto__ = actual__20465__auto___21986;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__20381__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__20381__auto__);
}
})()," (using .contains)"].join('')));
} else {
}
} else {
if(((speclj.platform.re_QMARK_.call(null,expected__20464__auto___21985)) && (typeof actual__20465__auto___21986 === 'string'))){
if(cljs.core.empty_QMARK_.call(null,cljs.core.re_seq.call(null,expected__20464__auto___21985,actual__20465__auto___21986))){
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = actual__20465__auto___21986;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__20381__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__20381__auto__);
}
})(),speclj.platform.endl,"to match: ",(function (){var temp__5806__auto__ = expected__20464__auto___21985;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__20381__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__20381__auto__);
}
})()," (using re-seq)"].join('')));
} else {
}
} else {
if(cljs.core.map_QMARK_.call(null,actual__20465__auto___21986)){
if((!(cljs.core.contains_QMARK_.call(null,actual__20465__auto___21986,expected__20464__auto___21985)))){
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__20464__auto___21985;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__20381__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__20381__auto__);
}
})(),speclj.platform.endl,"to be a key in: ",(function (){var temp__5806__auto__ = actual__20465__auto___21986;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__20381__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__20381__auto__);
}
})()," (using contains?)"].join('')));
} else {
}
} else {
if(cljs.core.coll_QMARK_.call(null,actual__20465__auto___21986)){
if(cljs.core.not.call(null,cljs.core.some.call(null,(function (p1__20463__20466__auto__){
return cljs.core._EQ_.call(null,expected__20464__auto___21985,p1__20463__20466__auto__);
}),actual__20465__auto___21986))){
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__20464__auto___21985;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__20381__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__20381__auto__);
}
})(),speclj.platform.endl,"to be in: ",(function (){var temp__5806__auto__ = actual__20465__auto___21986;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__20381__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__20381__auto__);
}
})()," (using =)"].join('')));
} else {
}
} else {
throw (new Error((function (){var a__20392__auto__ = expected__20464__auto___21985;
var b__20393__auto__ = actual__20465__auto___21986;
var type_a__20394__auto__ = (((a__20392__auto__ == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,a__20392__auto__)));
var type_b__20395__auto__ = (((b__20393__auto__ == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,b__20393__auto__)));
return ["should-contain"," doesn't know how to handle these types: [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_a__20394__auto__)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_b__20395__auto__),"]"].join('');
})()));

}
}
}
}
}

var expected__20464__auto__ = tic_tac_toe.ai.easy_medium.find_easy_move.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"x","x",2099068185),(3),(4),(5),new cljs.core.Keyword(null,"o","o",-1350007228),(7),new cljs.core.Keyword(null,"o","o",-1350007228),new cljs.core.Keyword(null,"x","x",2099068185)], null));
var actual__20465__auto__ = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(4),(5),(7)], null);
if((actual__20465__auto__ == null)){
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__20464__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__20381__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__20381__auto__);
}
})(),speclj.platform.endl,"to be in: nil"].join('')));
} else {
if(((typeof expected__20464__auto__ === 'string') && (typeof actual__20465__auto__ === 'string'))){
if(cljs.core._EQ_.call(null,(-1),actual__20465__auto__.indexOf(expected__20464__auto__))){
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__20464__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__20381__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__20381__auto__);
}
})(),speclj.platform.endl,"to be in: ",(function (){var temp__5806__auto__ = actual__20465__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__20381__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__20381__auto__);
}
})()," (using .contains)"].join('')));
} else {
return null;
}
} else {
if(((speclj.platform.re_QMARK_.call(null,expected__20464__auto__)) && (typeof actual__20465__auto__ === 'string'))){
if(cljs.core.empty_QMARK_.call(null,cljs.core.re_seq.call(null,expected__20464__auto__,actual__20465__auto__))){
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = actual__20465__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__20381__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__20381__auto__);
}
})(),speclj.platform.endl,"to match: ",(function (){var temp__5806__auto__ = expected__20464__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__20381__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__20381__auto__);
}
})()," (using re-seq)"].join('')));
} else {
return null;
}
} else {
if(cljs.core.map_QMARK_.call(null,actual__20465__auto__)){
if((!(cljs.core.contains_QMARK_.call(null,actual__20465__auto__,expected__20464__auto__)))){
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__20464__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__20381__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__20381__auto__);
}
})(),speclj.platform.endl,"to be a key in: ",(function (){var temp__5806__auto__ = actual__20465__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__20381__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__20381__auto__);
}
})()," (using contains?)"].join('')));
} else {
return null;
}
} else {
if(cljs.core.coll_QMARK_.call(null,actual__20465__auto__)){
if(cljs.core.not.call(null,cljs.core.some.call(null,(function (p1__20463__20466__auto__){
return cljs.core._EQ_.call(null,expected__20464__auto__,p1__20463__20466__auto__);
}),actual__20465__auto__))){
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__20464__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__20381__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__20381__auto__);
}
})(),speclj.platform.endl,"to be in: ",(function (){var temp__5806__auto__ = actual__20465__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__20381__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__20381__auto__);
}
})()," (using =)"].join('')));
} else {
return null;
}
} else {
throw (new Error((function (){var a__20392__auto__ = expected__20464__auto__;
var b__20393__auto__ = actual__20465__auto__;
var type_a__20394__auto__ = (((a__20392__auto__ == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,a__20392__auto__)));
var type_b__20395__auto__ = (((b__20393__auto__ == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,b__20393__auto__)));
return ["should-contain"," doesn't know how to handle these types: [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_a__20394__auto__)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_b__20395__auto__),"]"].join('');
})()));

}
}
}
}
}
});})(_STAR_parent_description_STAR__orig_val__21883_21977,_STAR_parent_description_STAR__temp_val__21884_21978,description__20276__auto____$1,_STAR_parent_description_STAR__orig_val__21413_21902,_STAR_parent_description_STAR__temp_val__21414_21903,description__20276__auto___21901))
,false)],null)));
var chunk__21886_21980 = null;
var count__21887_21981 = (0);
var i__21888_21982 = (0);
while(true){
if((i__21888_21982 < count__21887_21981)){
var component__20277__auto___21987 = cljs.core._nth.call(null,chunk__21886_21980,i__21888_21982);
speclj.components.install.call(null,component__20277__auto___21987,description__20276__auto____$1);


var G__21988 = seq__21885_21979;
var G__21989 = chunk__21886_21980;
var G__21990 = count__21887_21981;
var G__21991 = (i__21888_21982 + (1));
seq__21885_21979 = G__21988;
chunk__21886_21980 = G__21989;
count__21887_21981 = G__21990;
i__21888_21982 = G__21991;
continue;
} else {
var temp__5804__auto___21992 = cljs.core.seq.call(null,seq__21885_21979);
if(temp__5804__auto___21992){
var seq__21885_21993__$1 = temp__5804__auto___21992;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21885_21993__$1)){
var c__5525__auto___21994 = cljs.core.chunk_first.call(null,seq__21885_21993__$1);
var G__21995 = cljs.core.chunk_rest.call(null,seq__21885_21993__$1);
var G__21996 = c__5525__auto___21994;
var G__21997 = cljs.core.count.call(null,c__5525__auto___21994);
var G__21998 = (0);
seq__21885_21979 = G__21995;
chunk__21886_21980 = G__21996;
count__21887_21981 = G__21997;
i__21888_21982 = G__21998;
continue;
} else {
var component__20277__auto___21999 = cljs.core.first.call(null,seq__21885_21993__$1);
speclj.components.install.call(null,component__20277__auto___21999,description__20276__auto____$1);


var G__22000 = cljs.core.next.call(null,seq__21885_21993__$1);
var G__22001 = null;
var G__22002 = (0);
var G__22003 = (0);
seq__21885_21979 = G__22000;
chunk__21886_21980 = G__22001;
count__21887_21981 = G__22002;
i__21888_21982 = G__22003;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__21883_21977);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__20276__auto____$1);
}

return description__20276__auto____$1;
})()],null)));
var chunk__21416_21905 = null;
var count__21417_21906 = (0);
var i__21418_21907 = (0);
while(true){
if((i__21418_21907 < count__21417_21906)){
var component__20277__auto___22004 = cljs.core._nth.call(null,chunk__21416_21905,i__21418_21907);
speclj.components.install.call(null,component__20277__auto___22004,description__20276__auto___21901);


var G__22005 = seq__21415_21904;
var G__22006 = chunk__21416_21905;
var G__22007 = count__21417_21906;
var G__22008 = (i__21418_21907 + (1));
seq__21415_21904 = G__22005;
chunk__21416_21905 = G__22006;
count__21417_21906 = G__22007;
i__21418_21907 = G__22008;
continue;
} else {
var temp__5804__auto___22009 = cljs.core.seq.call(null,seq__21415_21904);
if(temp__5804__auto___22009){
var seq__21415_22010__$1 = temp__5804__auto___22009;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21415_22010__$1)){
var c__5525__auto___22011 = cljs.core.chunk_first.call(null,seq__21415_22010__$1);
var G__22012 = cljs.core.chunk_rest.call(null,seq__21415_22010__$1);
var G__22013 = c__5525__auto___22011;
var G__22014 = cljs.core.count.call(null,c__5525__auto___22011);
var G__22015 = (0);
seq__21415_21904 = G__22012;
chunk__21416_21905 = G__22013;
count__21417_21906 = G__22014;
i__21418_21907 = G__22015;
continue;
} else {
var component__20277__auto___22016 = cljs.core.first.call(null,seq__21415_22010__$1);
speclj.components.install.call(null,component__20277__auto___22016,description__20276__auto___21901);


var G__22017 = cljs.core.next.call(null,seq__21415_22010__$1);
var G__22018 = null;
var G__22019 = (0);
var G__22020 = (0);
seq__21415_21904 = G__22017;
chunk__21416_21905 = G__22018;
count__21417_21906 = G__22019;
i__21418_21907 = G__22020;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__21413_21902);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__20276__auto___21901);
}


//# sourceMappingURL=easy_medium_spec.js.map
