// Compiled by ClojureScript 1.11.132 {:optimizations :none}
goog.provide('tic_tac_toe.ai.easy_medium_spec');
goog.require('cljs.core');
goog.require('speclj.core');
goog.require('speclj.stub');
goog.require('tic_tac_toe.ai.easy_medium');
var description__7638__auto___8781 = speclj.components.new_description.call(null,"medium mode",false,"tic-tac-toe.ai.easy-medium-spec");
var _STAR_parent_description_STAR__orig_val__8123_8782 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__8125_8783 = description__7638__auto___8781;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__8125_8783);

try{var seq__8128_8784 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,8,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_around.call(null,((function (_STAR_parent_description_STAR__orig_val__8123_8782,_STAR_parent_description_STAR__temp_val__8125_8783,description__7638__auto___8781){
return (function (it__8008__auto__){
var _STAR_stubbed_invocations_STAR__orig_val__8551 = speclj.stub._STAR_stubbed_invocations_STAR_;
var _STAR_stubbed_invocations_STAR__temp_val__8552 = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
(speclj.stub._STAR_stubbed_invocations_STAR_ = _STAR_stubbed_invocations_STAR__temp_val__8552);

try{return it__8008__auto__.call(null);
}finally {(speclj.stub._STAR_stubbed_invocations_STAR_ = _STAR_stubbed_invocations_STAR__orig_val__8551);
}});})(_STAR_parent_description_STAR__orig_val__8123_8782,_STAR_parent_description_STAR__temp_val__8125_8783,description__7638__auto___8781))
),speclj.components.new_characteristic.call(null,"blocks a win if possible",((function (_STAR_parent_description_STAR__orig_val__8123_8782,_STAR_parent_description_STAR__temp_val__8125_8783,description__7638__auto___8781){
return (function (){
var expected__7775__auto___8788 = (5);
var actual__7776__auto___8789 = tic_tac_toe.ai.easy_medium.find_medium_move.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(3),new cljs.core.Keyword(null,"x","x",2099068185),(5),new cljs.core.Keyword(null,"x","x",2099068185),(7),(8),(9)], null));
if(cljs.core._EQ_.call(null,expected__7775__auto___8788,actual__7776__auto___8789)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__7775__auto___8788;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7743__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7743__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__7776__auto___8789;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7743__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7743__auto__);
}
})()," (using =)"].join('')));
}

var expected__7775__auto___8794 = (7);
var actual__7776__auto___8795 = tic_tac_toe.ai.easy_medium.find_medium_move.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),(2),(3),new cljs.core.Keyword(null,"x","x",2099068185),(5),(6),(7),(8),(9)], null));
if(cljs.core._EQ_.call(null,expected__7775__auto___8794,actual__7776__auto___8795)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__7775__auto___8794;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7743__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7743__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__7776__auto___8795;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7743__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7743__auto__);
}
})()," (using =)"].join('')));
}

var expected__7775__auto__ = (3);
var actual__7776__auto__ = tic_tac_toe.ai.easy_medium.find_medium_move.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(3),(4),new cljs.core.Keyword(null,"x","x",2099068185),(6),new cljs.core.Keyword(null,"x","x",2099068185),(8),(9)], null));
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
});})(_STAR_parent_description_STAR__orig_val__8123_8782,_STAR_parent_description_STAR__temp_val__8125_8783,description__7638__auto___8781))
,false),speclj.components.new_characteristic.call(null,"wins if possible",((function (_STAR_parent_description_STAR__orig_val__8123_8782,_STAR_parent_description_STAR__temp_val__8125_8783,description__7638__auto___8781){
return (function (){
var expected__7775__auto___8796 = (5);
var actual__7776__auto___8797 = tic_tac_toe.ai.easy_medium.find_medium_move.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(3),new cljs.core.Keyword(null,"o","o",-1350007228),(5),new cljs.core.Keyword(null,"o","o",-1350007228),(7),(8),(9)], null));
if(cljs.core._EQ_.call(null,expected__7775__auto___8796,actual__7776__auto___8797)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__7775__auto___8796;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7743__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7743__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__7776__auto___8797;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7743__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7743__auto__);
}
})()," (using =)"].join('')));
}

var expected__7775__auto___8802 = (7);
var actual__7776__auto___8803 = tic_tac_toe.ai.easy_medium.find_medium_move.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"o","o",-1350007228),(2),(3),new cljs.core.Keyword(null,"o","o",-1350007228),(5),(6),(7),(8),(9)], null));
if(cljs.core._EQ_.call(null,expected__7775__auto___8802,actual__7776__auto___8803)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__7775__auto___8802;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7743__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7743__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__7776__auto___8803;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7743__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7743__auto__);
}
})()," (using =)"].join('')));
}

var expected__7775__auto__ = (3);
var actual__7776__auto__ = tic_tac_toe.ai.easy_medium.find_medium_move.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(3),(4),new cljs.core.Keyword(null,"o","o",-1350007228),(6),new cljs.core.Keyword(null,"o","o",-1350007228),(8),(9)], null));
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
});})(_STAR_parent_description_STAR__orig_val__8123_8782,_STAR_parent_description_STAR__temp_val__8125_8783,description__7638__auto___8781))
,false),speclj.components.new_characteristic.call(null,"play random available move if can't win or block",((function (_STAR_parent_description_STAR__orig_val__8123_8782,_STAR_parent_description_STAR__temp_val__8125_8783,description__7638__auto___8781){
return (function (){
var expected__7826__auto___8808 = tic_tac_toe.ai.easy_medium.find_medium_move.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"o","o",-1350007228),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"o","o",-1350007228),(4),new cljs.core.Keyword(null,"x","x",2099068185),(6),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"o","o",-1350007228),new cljs.core.Keyword(null,"x","x",2099068185)], null));
var actual__7827__auto___8809 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(4),(6)], null);
if((actual__7827__auto___8809 == null)){
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__7826__auto___8808;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7743__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7743__auto__);
}
})(),speclj.platform.endl,"to be in: nil"].join('')));
} else {
if(((typeof expected__7826__auto___8808 === 'string') && (typeof actual__7827__auto___8809 === 'string'))){
if(cljs.core._EQ_.call(null,(-1),actual__7827__auto___8809.indexOf(expected__7826__auto___8808))){
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__7826__auto___8808;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7743__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7743__auto__);
}
})(),speclj.platform.endl,"to be in: ",(function (){var temp__5806__auto__ = actual__7827__auto___8809;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7743__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7743__auto__);
}
})()," (using .contains)"].join('')));
} else {
}
} else {
if(((speclj.platform.re_QMARK_.call(null,expected__7826__auto___8808)) && (typeof actual__7827__auto___8809 === 'string'))){
if(cljs.core.empty_QMARK_.call(null,cljs.core.re_seq.call(null,expected__7826__auto___8808,actual__7827__auto___8809))){
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = actual__7827__auto___8809;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7743__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7743__auto__);
}
})(),speclj.platform.endl,"to match: ",(function (){var temp__5806__auto__ = expected__7826__auto___8808;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7743__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7743__auto__);
}
})()," (using re-seq)"].join('')));
} else {
}
} else {
if(cljs.core.map_QMARK_.call(null,actual__7827__auto___8809)){
if((!(cljs.core.contains_QMARK_.call(null,actual__7827__auto___8809,expected__7826__auto___8808)))){
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__7826__auto___8808;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7743__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7743__auto__);
}
})(),speclj.platform.endl,"to be a key in: ",(function (){var temp__5806__auto__ = actual__7827__auto___8809;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7743__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7743__auto__);
}
})()," (using contains?)"].join('')));
} else {
}
} else {
if(cljs.core.coll_QMARK_.call(null,actual__7827__auto___8809)){
if(cljs.core.not.call(null,cljs.core.some.call(null,(function (p1__7825__7828__auto__){
return cljs.core._EQ_.call(null,expected__7826__auto___8808,p1__7825__7828__auto__);
}),actual__7827__auto___8809))){
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__7826__auto___8808;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7743__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7743__auto__);
}
})(),speclj.platform.endl,"to be in: ",(function (){var temp__5806__auto__ = actual__7827__auto___8809;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7743__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7743__auto__);
}
})()," (using =)"].join('')));
} else {
}
} else {
throw (new Error((function (){var a__7754__auto__ = expected__7826__auto___8808;
var b__7755__auto__ = actual__7827__auto___8809;
var type_a__7756__auto__ = (((a__7754__auto__ == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,a__7754__auto__)));
var type_b__7757__auto__ = (((b__7755__auto__ == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,b__7755__auto__)));
return ["should-contain"," doesn't know how to handle these types: [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_a__7756__auto__)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_b__7757__auto__),"]"].join('');
})()));

}
}
}
}
}

var expected__7826__auto___8818 = tic_tac_toe.ai.easy_medium.find_medium_move.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),(2),(3),(4),new cljs.core.Keyword(null,"o","o",-1350007228),new cljs.core.Keyword(null,"x","x",2099068185),(7),(8),new cljs.core.Keyword(null,"o","o",-1350007228)], null));
var actual__7827__auto___8819 = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(3),(4),(7),(8)], null);
if((actual__7827__auto___8819 == null)){
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__7826__auto___8818;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7743__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7743__auto__);
}
})(),speclj.platform.endl,"to be in: nil"].join('')));
} else {
if(((typeof expected__7826__auto___8818 === 'string') && (typeof actual__7827__auto___8819 === 'string'))){
if(cljs.core._EQ_.call(null,(-1),actual__7827__auto___8819.indexOf(expected__7826__auto___8818))){
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__7826__auto___8818;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7743__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7743__auto__);
}
})(),speclj.platform.endl,"to be in: ",(function (){var temp__5806__auto__ = actual__7827__auto___8819;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7743__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7743__auto__);
}
})()," (using .contains)"].join('')));
} else {
}
} else {
if(((speclj.platform.re_QMARK_.call(null,expected__7826__auto___8818)) && (typeof actual__7827__auto___8819 === 'string'))){
if(cljs.core.empty_QMARK_.call(null,cljs.core.re_seq.call(null,expected__7826__auto___8818,actual__7827__auto___8819))){
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = actual__7827__auto___8819;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7743__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7743__auto__);
}
})(),speclj.platform.endl,"to match: ",(function (){var temp__5806__auto__ = expected__7826__auto___8818;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7743__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7743__auto__);
}
})()," (using re-seq)"].join('')));
} else {
}
} else {
if(cljs.core.map_QMARK_.call(null,actual__7827__auto___8819)){
if((!(cljs.core.contains_QMARK_.call(null,actual__7827__auto___8819,expected__7826__auto___8818)))){
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__7826__auto___8818;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7743__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7743__auto__);
}
})(),speclj.platform.endl,"to be a key in: ",(function (){var temp__5806__auto__ = actual__7827__auto___8819;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7743__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7743__auto__);
}
})()," (using contains?)"].join('')));
} else {
}
} else {
if(cljs.core.coll_QMARK_.call(null,actual__7827__auto___8819)){
if(cljs.core.not.call(null,cljs.core.some.call(null,(function (p1__7825__7828__auto__){
return cljs.core._EQ_.call(null,expected__7826__auto___8818,p1__7825__7828__auto__);
}),actual__7827__auto___8819))){
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__7826__auto___8818;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7743__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7743__auto__);
}
})(),speclj.platform.endl,"to be in: ",(function (){var temp__5806__auto__ = actual__7827__auto___8819;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7743__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7743__auto__);
}
})()," (using =)"].join('')));
} else {
}
} else {
throw (new Error((function (){var a__7754__auto__ = expected__7826__auto___8818;
var b__7755__auto__ = actual__7827__auto___8819;
var type_a__7756__auto__ = (((a__7754__auto__ == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,a__7754__auto__)));
var type_b__7757__auto__ = (((b__7755__auto__ == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,b__7755__auto__)));
return ["should-contain"," doesn't know how to handle these types: [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_a__7756__auto__)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_b__7757__auto__),"]"].join('');
})()));

}
}
}
}
}

var find_easy_move_orig_val__8615 = tic_tac_toe.ai.easy_medium.find_easy_move;
var find_easy_move_temp_val__8616 = speclj.stub.stub.call(null,new cljs.core.Keyword(null,"find-easy-move","find-easy-move",1506541355),cljs.core.PersistentArrayMap.EMPTY);
(tic_tac_toe.ai.easy_medium.find_easy_move = find_easy_move_temp_val__8616);

try{tic_tac_toe.ai.easy_medium.find_medium_move.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),(2),(3),(4),new cljs.core.Keyword(null,"o","o",-1350007228),new cljs.core.Keyword(null,"x","x",2099068185),(7),(8),new cljs.core.Keyword(null,"o","o",-1350007228)], null));

tic_tac_toe.ai.easy_medium.find_medium_move.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"o","o",-1350007228),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"o","o",-1350007228),(4),new cljs.core.Keyword(null,"x","x",2099068185),(6),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"o","o",-1350007228),new cljs.core.Keyword(null,"x","x",2099068185)], null));

var expected__7775__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),(2),(3),(4),new cljs.core.Keyword(null,"o","o",-1350007228),new cljs.core.Keyword(null,"x","x",2099068185),(7),(8),new cljs.core.Keyword(null,"o","o",-1350007228)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"o","o",-1350007228),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"o","o",-1350007228),(4),new cljs.core.Keyword(null,"x","x",2099068185),(6),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"o","o",-1350007228),new cljs.core.Keyword(null,"x","x",2099068185)], null)], null)], null);
var actual__7776__auto__ = speclj.stub.invocations_of.call(null,new cljs.core.Keyword(null,"find-easy-move","find-easy-move",1506541355));
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
}finally {(tic_tac_toe.ai.easy_medium.find_easy_move = find_easy_move_orig_val__8615);
}});})(_STAR_parent_description_STAR__orig_val__8123_8782,_STAR_parent_description_STAR__temp_val__8125_8783,description__7638__auto___8781))
,false),speclj.components.new_characteristic.call(null,"plays center square if first move is a corner",((function (_STAR_parent_description_STAR__orig_val__8123_8782,_STAR_parent_description_STAR__temp_val__8125_8783,description__7638__auto___8781){
return (function (){
var expected__7775__auto___8834 = (5);
var actual__7776__auto___8835 = tic_tac_toe.ai.easy_medium.find_medium_move.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),(2),(3),(4),(5),(6),(7),(8),(9)], null));
if(cljs.core._EQ_.call(null,expected__7775__auto___8834,actual__7776__auto___8835)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__7775__auto___8834;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7743__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7743__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__7776__auto___8835;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7743__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7743__auto__);
}
})()," (using =)"].join('')));
}

var expected__7775__auto___8840 = (5);
var actual__7776__auto___8841 = tic_tac_toe.ai.easy_medium.find_medium_move.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),new cljs.core.Keyword(null,"x","x",2099068185),(4),(5),(6),(7),(8),(9)], null));
if(cljs.core._EQ_.call(null,expected__7775__auto___8840,actual__7776__auto___8841)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__7775__auto___8840;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7743__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7743__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__7776__auto___8841;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7743__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7743__auto__);
}
})()," (using =)"].join('')));
}

var expected__7775__auto___8846 = (5);
var actual__7776__auto___8847 = tic_tac_toe.ai.easy_medium.find_medium_move.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(3),(4),(5),(6),new cljs.core.Keyword(null,"x","x",2099068185),(8),(9)], null));
if(cljs.core._EQ_.call(null,expected__7775__auto___8846,actual__7776__auto___8847)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__7775__auto___8846;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7743__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7743__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__7776__auto___8847;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7743__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7743__auto__);
}
})()," (using =)"].join('')));
}

var expected__7775__auto__ = (5);
var actual__7776__auto__ = tic_tac_toe.ai.easy_medium.find_medium_move.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(3),(4),(5),(6),(7),(8),new cljs.core.Keyword(null,"x","x",2099068185)], null));
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
});})(_STAR_parent_description_STAR__orig_val__8123_8782,_STAR_parent_description_STAR__temp_val__8125_8783,description__7638__auto___8781))
,false),speclj.components.new_characteristic.call(null,"plays top left if first move is center",((function (_STAR_parent_description_STAR__orig_val__8123_8782,_STAR_parent_description_STAR__temp_val__8125_8783,description__7638__auto___8781){
return (function (){
var expected__7775__auto__ = (1);
var actual__7776__auto__ = tic_tac_toe.ai.easy_medium.find_medium_move.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(3),(4),new cljs.core.Keyword(null,"x","x",2099068185),(6),(7),(8),(9)], null));
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
});})(_STAR_parent_description_STAR__orig_val__8123_8782,_STAR_parent_description_STAR__temp_val__8125_8783,description__7638__auto___8781))
,false),(function (){var description__7638__auto____$1 = speclj.components.new_description.call(null,"get-winning-move",false,"tic-tac-toe.ai.easy-medium-spec");
var _STAR_parent_description_STAR__orig_val__8633_8848 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__8634_8849 = description__7638__auto____$1;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__8634_8849);

try{var seq__8635_8850 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_characteristic.call(null,"finds move that will win the game for the given player",((function (_STAR_parent_description_STAR__orig_val__8633_8848,_STAR_parent_description_STAR__temp_val__8634_8849,description__7638__auto____$1,_STAR_parent_description_STAR__orig_val__8123_8782,_STAR_parent_description_STAR__temp_val__8125_8783,description__7638__auto___8781){
return (function (){
var expected__7775__auto___8854 = (5);
var actual__7776__auto___8855 = tic_tac_toe.ai.easy_medium.get_winning_move.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(3),new cljs.core.Keyword(null,"x","x",2099068185),(5),new cljs.core.Keyword(null,"x","x",2099068185),(7),(8),(9)], null),new cljs.core.Keyword(null,"x","x",2099068185));
if(cljs.core._EQ_.call(null,expected__7775__auto___8854,actual__7776__auto___8855)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__7775__auto___8854;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7743__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7743__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__7776__auto___8855;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7743__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7743__auto__);
}
})()," (using =)"].join('')));
}

var expected__7775__auto___8856 = (7);
var actual__7776__auto___8857 = tic_tac_toe.ai.easy_medium.get_winning_move.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),(2),(3),new cljs.core.Keyword(null,"x","x",2099068185),(5),(6),(7),(8),(9)], null),new cljs.core.Keyword(null,"x","x",2099068185));
if(cljs.core._EQ_.call(null,expected__7775__auto___8856,actual__7776__auto___8857)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__7775__auto___8856;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7743__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7743__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__7776__auto___8857;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7743__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7743__auto__);
}
})()," (using =)"].join('')));
}

var expected__7775__auto___8858 = (3);
var actual__7776__auto___8859 = tic_tac_toe.ai.easy_medium.get_winning_move.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(3),(4),new cljs.core.Keyword(null,"x","x",2099068185),(6),new cljs.core.Keyword(null,"x","x",2099068185),(8),(9)], null),new cljs.core.Keyword(null,"x","x",2099068185));
if(cljs.core._EQ_.call(null,expected__7775__auto___8858,actual__7776__auto___8859)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__7775__auto___8858;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7743__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7743__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__7776__auto___8859;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7743__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7743__auto__);
}
})()," (using =)"].join('')));
}

var expected__7775__auto___8864 = (8);
var actual__7776__auto___8865 = tic_tac_toe.ai.easy_medium.get_winning_move.call(null,new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(3),(4),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"x","x",2099068185),(8),(9),(10),(11),(12),(13),(14),(15),(16)], null),new cljs.core.Keyword(null,"x","x",2099068185));
if(cljs.core._EQ_.call(null,expected__7775__auto___8864,actual__7776__auto___8865)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__7775__auto___8864;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7743__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7743__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__7776__auto___8865;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7743__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7743__auto__);
}
})()," (using =)"].join('')));
}

var expected__7775__auto__ = (16);
var actual__7776__auto__ = tic_tac_toe.ai.easy_medium.get_winning_move.call(null,new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"o","o",-1350007228),(2),(3),(4),(5),new cljs.core.Keyword(null,"o","o",-1350007228),(7),(8),(9),(10),new cljs.core.Keyword(null,"o","o",-1350007228),(12),(13),(14),(15),(16)], null),new cljs.core.Keyword(null,"o","o",-1350007228));
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
});})(_STAR_parent_description_STAR__orig_val__8633_8848,_STAR_parent_description_STAR__temp_val__8634_8849,description__7638__auto____$1,_STAR_parent_description_STAR__orig_val__8123_8782,_STAR_parent_description_STAR__temp_val__8125_8783,description__7638__auto___8781))
,false),speclj.components.new_characteristic.call(null,"returns empty when no path is one move from winning for the given player",((function (_STAR_parent_description_STAR__orig_val__8633_8848,_STAR_parent_description_STAR__temp_val__8634_8849,description__7638__auto____$1,_STAR_parent_description_STAR__orig_val__8123_8782,_STAR_parent_description_STAR__temp_val__8125_8783,description__7638__auto___8781){
return (function (){
var expected__7775__auto___8870 = null;
var actual__7776__auto___8872 = tic_tac_toe.ai.easy_medium.get_winning_move.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"o","o",-1350007228),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"o","o",-1350007228),new cljs.core.Keyword(null,"o","o",-1350007228),new cljs.core.Keyword(null,"o","o",-1350007228),new cljs.core.Keyword(null,"x","x",2099068185)], null),new cljs.core.Keyword(null,"x","x",2099068185));
if(cljs.core._EQ_.call(null,expected__7775__auto___8870,actual__7776__auto___8872)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__7775__auto___8870;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7743__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7743__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__7776__auto___8872;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7743__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7743__auto__);
}
})()," (using =)"].join('')));
}

var expected__7775__auto___8876 = null;
var actual__7776__auto___8877 = tic_tac_toe.ai.easy_medium.get_winning_move.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"o","o",-1350007228),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"o","o",-1350007228),(4),new cljs.core.Keyword(null,"x","x",2099068185),(6),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"o","o",-1350007228),new cljs.core.Keyword(null,"x","x",2099068185)], null),new cljs.core.Keyword(null,"x","x",2099068185));
if(cljs.core._EQ_.call(null,expected__7775__auto___8876,actual__7776__auto___8877)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__7775__auto___8876;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7743__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7743__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__7776__auto___8877;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7743__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7743__auto__);
}
})()," (using =)"].join('')));
}

var expected__7775__auto___8878 = null;
var actual__7776__auto___8879 = tic_tac_toe.ai.easy_medium.get_winning_move.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),(2),(3),(4),new cljs.core.Keyword(null,"o","o",-1350007228),new cljs.core.Keyword(null,"x","x",2099068185),(7),(8),new cljs.core.Keyword(null,"o","o",-1350007228)], null),new cljs.core.Keyword(null,"x","x",2099068185));
if(cljs.core._EQ_.call(null,expected__7775__auto___8878,actual__7776__auto___8879)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__7775__auto___8878;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7743__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7743__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__7776__auto___8879;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7743__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7743__auto__);
}
})()," (using =)"].join('')));
}

var expected__7775__auto___8880 = null;
var actual__7776__auto___8881 = tic_tac_toe.ai.easy_medium.get_winning_move.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(3),(4),(5),(6),(7),(8),(9)], null),new cljs.core.Keyword(null,"x","x",2099068185));
if(cljs.core._EQ_.call(null,expected__7775__auto___8880,actual__7776__auto___8881)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__7775__auto___8880;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7743__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7743__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__7776__auto___8881;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7743__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7743__auto__);
}
})()," (using =)"].join('')));
}

var expected__7775__auto__ = null;
var actual__7776__auto__ = tic_tac_toe.ai.easy_medium.get_winning_move.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"o","o",-1350007228),(2),(3),(4),(5),(6),(7),(8),(9)], null),new cljs.core.Keyword(null,"o","o",-1350007228));
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
});})(_STAR_parent_description_STAR__orig_val__8633_8848,_STAR_parent_description_STAR__temp_val__8634_8849,description__7638__auto____$1,_STAR_parent_description_STAR__orig_val__8123_8782,_STAR_parent_description_STAR__temp_val__8125_8783,description__7638__auto___8781))
,false)],null)));
var chunk__8636_8851 = null;
var count__8637_8852 = (0);
var i__8638_8853 = (0);
while(true){
if((i__8638_8853 < count__8637_8852)){
var component__7639__auto___8882 = cljs.core._nth.call(null,chunk__8636_8851,i__8638_8853);
speclj.components.install.call(null,component__7639__auto___8882,description__7638__auto____$1);


var G__8883 = seq__8635_8850;
var G__8884 = chunk__8636_8851;
var G__8885 = count__8637_8852;
var G__8886 = (i__8638_8853 + (1));
seq__8635_8850 = G__8883;
chunk__8636_8851 = G__8884;
count__8637_8852 = G__8885;
i__8638_8853 = G__8886;
continue;
} else {
var temp__5804__auto___8887 = cljs.core.seq.call(null,seq__8635_8850);
if(temp__5804__auto___8887){
var seq__8635_8888__$1 = temp__5804__auto___8887;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8635_8888__$1)){
var c__5525__auto___8893 = cljs.core.chunk_first.call(null,seq__8635_8888__$1);
var G__8894 = cljs.core.chunk_rest.call(null,seq__8635_8888__$1);
var G__8895 = c__5525__auto___8893;
var G__8896 = cljs.core.count.call(null,c__5525__auto___8893);
var G__8897 = (0);
seq__8635_8850 = G__8894;
chunk__8636_8851 = G__8895;
count__8637_8852 = G__8896;
i__8638_8853 = G__8897;
continue;
} else {
var component__7639__auto___8898 = cljs.core.first.call(null,seq__8635_8888__$1);
speclj.components.install.call(null,component__7639__auto___8898,description__7638__auto____$1);


var G__8899 = cljs.core.next.call(null,seq__8635_8888__$1);
var G__8900 = null;
var G__8901 = (0);
var G__8902 = (0);
seq__8635_8850 = G__8899;
chunk__8636_8851 = G__8900;
count__8637_8852 = G__8901;
i__8638_8853 = G__8902;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__8633_8848);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__7638__auto____$1);
}

return description__7638__auto____$1;
})(),(function (){var description__7638__auto____$1 = speclj.components.new_description.call(null,"find-easy-move",false,"tic-tac-toe.ai.easy-medium-spec");
var _STAR_parent_description_STAR__orig_val__8693_8903 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__8694_8904 = description__7638__auto____$1;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__8694_8904);

try{var seq__8695_8905 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_characteristic.call(null,"picks an available move at random",((function (_STAR_parent_description_STAR__orig_val__8693_8903,_STAR_parent_description_STAR__temp_val__8694_8904,description__7638__auto____$1,_STAR_parent_description_STAR__orig_val__8123_8782,_STAR_parent_description_STAR__temp_val__8125_8783,description__7638__auto___8781){
return (function (){
var expected__7826__auto___8913 = tic_tac_toe.ai.easy_medium.find_easy_move.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(3),(4),(5),(6),(7),(8),(9)], null));
var actual__7827__auto___8914 = new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(3),(4),(5),(6),(7),(8),(9)], null);
if((actual__7827__auto___8914 == null)){
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__7826__auto___8913;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7743__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7743__auto__);
}
})(),speclj.platform.endl,"to be in: nil"].join('')));
} else {
if(((typeof expected__7826__auto___8913 === 'string') && (typeof actual__7827__auto___8914 === 'string'))){
if(cljs.core._EQ_.call(null,(-1),actual__7827__auto___8914.indexOf(expected__7826__auto___8913))){
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__7826__auto___8913;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7743__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7743__auto__);
}
})(),speclj.platform.endl,"to be in: ",(function (){var temp__5806__auto__ = actual__7827__auto___8914;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7743__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7743__auto__);
}
})()," (using .contains)"].join('')));
} else {
}
} else {
if(((speclj.platform.re_QMARK_.call(null,expected__7826__auto___8913)) && (typeof actual__7827__auto___8914 === 'string'))){
if(cljs.core.empty_QMARK_.call(null,cljs.core.re_seq.call(null,expected__7826__auto___8913,actual__7827__auto___8914))){
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = actual__7827__auto___8914;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7743__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7743__auto__);
}
})(),speclj.platform.endl,"to match: ",(function (){var temp__5806__auto__ = expected__7826__auto___8913;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7743__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7743__auto__);
}
})()," (using re-seq)"].join('')));
} else {
}
} else {
if(cljs.core.map_QMARK_.call(null,actual__7827__auto___8914)){
if((!(cljs.core.contains_QMARK_.call(null,actual__7827__auto___8914,expected__7826__auto___8913)))){
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__7826__auto___8913;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7743__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7743__auto__);
}
})(),speclj.platform.endl,"to be a key in: ",(function (){var temp__5806__auto__ = actual__7827__auto___8914;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7743__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7743__auto__);
}
})()," (using contains?)"].join('')));
} else {
}
} else {
if(cljs.core.coll_QMARK_.call(null,actual__7827__auto___8914)){
if(cljs.core.not.call(null,cljs.core.some.call(null,(function (p1__7825__7828__auto__){
return cljs.core._EQ_.call(null,expected__7826__auto___8913,p1__7825__7828__auto__);
}),actual__7827__auto___8914))){
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__7826__auto___8913;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7743__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7743__auto__);
}
})(),speclj.platform.endl,"to be in: ",(function (){var temp__5806__auto__ = actual__7827__auto___8914;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7743__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7743__auto__);
}
})()," (using =)"].join('')));
} else {
}
} else {
throw (new Error((function (){var a__7754__auto__ = expected__7826__auto___8913;
var b__7755__auto__ = actual__7827__auto___8914;
var type_a__7756__auto__ = (((a__7754__auto__ == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,a__7754__auto__)));
var type_b__7757__auto__ = (((b__7755__auto__ == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,b__7755__auto__)));
return ["should-contain"," doesn't know how to handle these types: [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_a__7756__auto__)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_b__7757__auto__),"]"].join('');
})()));

}
}
}
}
}

var expected__7826__auto___8917 = tic_tac_toe.ai.easy_medium.find_easy_move.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),(2),(3),(4),(5),(6),(7),(8),(9)], null));
var actual__7827__auto___8918 = new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(3),(4),(5),(6),(7),(8),(9)], null);
if((actual__7827__auto___8918 == null)){
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__7826__auto___8917;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7743__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7743__auto__);
}
})(),speclj.platform.endl,"to be in: nil"].join('')));
} else {
if(((typeof expected__7826__auto___8917 === 'string') && (typeof actual__7827__auto___8918 === 'string'))){
if(cljs.core._EQ_.call(null,(-1),actual__7827__auto___8918.indexOf(expected__7826__auto___8917))){
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__7826__auto___8917;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7743__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7743__auto__);
}
})(),speclj.platform.endl,"to be in: ",(function (){var temp__5806__auto__ = actual__7827__auto___8918;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7743__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7743__auto__);
}
})()," (using .contains)"].join('')));
} else {
}
} else {
if(((speclj.platform.re_QMARK_.call(null,expected__7826__auto___8917)) && (typeof actual__7827__auto___8918 === 'string'))){
if(cljs.core.empty_QMARK_.call(null,cljs.core.re_seq.call(null,expected__7826__auto___8917,actual__7827__auto___8918))){
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = actual__7827__auto___8918;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7743__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7743__auto__);
}
})(),speclj.platform.endl,"to match: ",(function (){var temp__5806__auto__ = expected__7826__auto___8917;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7743__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7743__auto__);
}
})()," (using re-seq)"].join('')));
} else {
}
} else {
if(cljs.core.map_QMARK_.call(null,actual__7827__auto___8918)){
if((!(cljs.core.contains_QMARK_.call(null,actual__7827__auto___8918,expected__7826__auto___8917)))){
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__7826__auto___8917;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7743__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7743__auto__);
}
})(),speclj.platform.endl,"to be a key in: ",(function (){var temp__5806__auto__ = actual__7827__auto___8918;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7743__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7743__auto__);
}
})()," (using contains?)"].join('')));
} else {
}
} else {
if(cljs.core.coll_QMARK_.call(null,actual__7827__auto___8918)){
if(cljs.core.not.call(null,cljs.core.some.call(null,(function (p1__7825__7828__auto__){
return cljs.core._EQ_.call(null,expected__7826__auto___8917,p1__7825__7828__auto__);
}),actual__7827__auto___8918))){
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__7826__auto___8917;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7743__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7743__auto__);
}
})(),speclj.platform.endl,"to be in: ",(function (){var temp__5806__auto__ = actual__7827__auto___8918;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7743__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7743__auto__);
}
})()," (using =)"].join('')));
} else {
}
} else {
throw (new Error((function (){var a__7754__auto__ = expected__7826__auto___8917;
var b__7755__auto__ = actual__7827__auto___8918;
var type_a__7756__auto__ = (((a__7754__auto__ == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,a__7754__auto__)));
var type_b__7757__auto__ = (((b__7755__auto__ == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,b__7755__auto__)));
return ["should-contain"," doesn't know how to handle these types: [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_a__7756__auto__)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_b__7757__auto__),"]"].join('');
})()));

}
}
}
}
}

var expected__7826__auto__ = tic_tac_toe.ai.easy_medium.find_easy_move.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"x","x",2099068185),(3),(4),(5),new cljs.core.Keyword(null,"o","o",-1350007228),(7),new cljs.core.Keyword(null,"o","o",-1350007228),new cljs.core.Keyword(null,"x","x",2099068185)], null));
var actual__7827__auto__ = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(4),(5),(7)], null);
if((actual__7827__auto__ == null)){
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__7826__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7743__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7743__auto__);
}
})(),speclj.platform.endl,"to be in: nil"].join('')));
} else {
if(((typeof expected__7826__auto__ === 'string') && (typeof actual__7827__auto__ === 'string'))){
if(cljs.core._EQ_.call(null,(-1),actual__7827__auto__.indexOf(expected__7826__auto__))){
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__7826__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7743__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7743__auto__);
}
})(),speclj.platform.endl,"to be in: ",(function (){var temp__5806__auto__ = actual__7827__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7743__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7743__auto__);
}
})()," (using .contains)"].join('')));
} else {
return null;
}
} else {
if(((speclj.platform.re_QMARK_.call(null,expected__7826__auto__)) && (typeof actual__7827__auto__ === 'string'))){
if(cljs.core.empty_QMARK_.call(null,cljs.core.re_seq.call(null,expected__7826__auto__,actual__7827__auto__))){
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = actual__7827__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7743__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7743__auto__);
}
})(),speclj.platform.endl,"to match: ",(function (){var temp__5806__auto__ = expected__7826__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7743__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7743__auto__);
}
})()," (using re-seq)"].join('')));
} else {
return null;
}
} else {
if(cljs.core.map_QMARK_.call(null,actual__7827__auto__)){
if((!(cljs.core.contains_QMARK_.call(null,actual__7827__auto__,expected__7826__auto__)))){
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__7826__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7743__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7743__auto__);
}
})(),speclj.platform.endl,"to be a key in: ",(function (){var temp__5806__auto__ = actual__7827__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7743__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7743__auto__);
}
})()," (using contains?)"].join('')));
} else {
return null;
}
} else {
if(cljs.core.coll_QMARK_.call(null,actual__7827__auto__)){
if(cljs.core.not.call(null,cljs.core.some.call(null,(function (p1__7825__7828__auto__){
return cljs.core._EQ_.call(null,expected__7826__auto__,p1__7825__7828__auto__);
}),actual__7827__auto__))){
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__7826__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7743__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7743__auto__);
}
})(),speclj.platform.endl,"to be in: ",(function (){var temp__5806__auto__ = actual__7827__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7743__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7743__auto__);
}
})()," (using =)"].join('')));
} else {
return null;
}
} else {
throw (new Error((function (){var a__7754__auto__ = expected__7826__auto__;
var b__7755__auto__ = actual__7827__auto__;
var type_a__7756__auto__ = (((a__7754__auto__ == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,a__7754__auto__)));
var type_b__7757__auto__ = (((b__7755__auto__ == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,b__7755__auto__)));
return ["should-contain"," doesn't know how to handle these types: [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_a__7756__auto__)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_b__7757__auto__),"]"].join('');
})()));

}
}
}
}
}
});})(_STAR_parent_description_STAR__orig_val__8693_8903,_STAR_parent_description_STAR__temp_val__8694_8904,description__7638__auto____$1,_STAR_parent_description_STAR__orig_val__8123_8782,_STAR_parent_description_STAR__temp_val__8125_8783,description__7638__auto___8781))
,false)],null)));
var chunk__8696_8906 = null;
var count__8697_8907 = (0);
var i__8698_8908 = (0);
while(true){
if((i__8698_8908 < count__8697_8907)){
var component__7639__auto___8971 = cljs.core._nth.call(null,chunk__8696_8906,i__8698_8908);
speclj.components.install.call(null,component__7639__auto___8971,description__7638__auto____$1);


var G__8972 = seq__8695_8905;
var G__8973 = chunk__8696_8906;
var G__8974 = count__8697_8907;
var G__8975 = (i__8698_8908 + (1));
seq__8695_8905 = G__8972;
chunk__8696_8906 = G__8973;
count__8697_8907 = G__8974;
i__8698_8908 = G__8975;
continue;
} else {
var temp__5804__auto___8976 = cljs.core.seq.call(null,seq__8695_8905);
if(temp__5804__auto___8976){
var seq__8695_8981__$1 = temp__5804__auto___8976;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8695_8981__$1)){
var c__5525__auto___8982 = cljs.core.chunk_first.call(null,seq__8695_8981__$1);
var G__8983 = cljs.core.chunk_rest.call(null,seq__8695_8981__$1);
var G__8984 = c__5525__auto___8982;
var G__8985 = cljs.core.count.call(null,c__5525__auto___8982);
var G__8986 = (0);
seq__8695_8905 = G__8983;
chunk__8696_8906 = G__8984;
count__8697_8907 = G__8985;
i__8698_8908 = G__8986;
continue;
} else {
var component__7639__auto___8987 = cljs.core.first.call(null,seq__8695_8981__$1);
speclj.components.install.call(null,component__7639__auto___8987,description__7638__auto____$1);


var G__8988 = cljs.core.next.call(null,seq__8695_8981__$1);
var G__8989 = null;
var G__8990 = (0);
var G__8991 = (0);
seq__8695_8905 = G__8988;
chunk__8696_8906 = G__8989;
count__8697_8907 = G__8990;
i__8698_8908 = G__8991;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__8693_8903);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__7638__auto____$1);
}

return description__7638__auto____$1;
})()],null)));
var chunk__8133_8785 = null;
var count__8135_8786 = (0);
var i__8136_8787 = (0);
while(true){
if((i__8136_8787 < count__8135_8786)){
var component__7639__auto___8992 = cljs.core._nth.call(null,chunk__8133_8785,i__8136_8787);
speclj.components.install.call(null,component__7639__auto___8992,description__7638__auto___8781);


var G__8993 = seq__8128_8784;
var G__8994 = chunk__8133_8785;
var G__8995 = count__8135_8786;
var G__8996 = (i__8136_8787 + (1));
seq__8128_8784 = G__8993;
chunk__8133_8785 = G__8994;
count__8135_8786 = G__8995;
i__8136_8787 = G__8996;
continue;
} else {
var temp__5804__auto___8997 = cljs.core.seq.call(null,seq__8128_8784);
if(temp__5804__auto___8997){
var seq__8128_8998__$1 = temp__5804__auto___8997;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8128_8998__$1)){
var c__5525__auto___9001 = cljs.core.chunk_first.call(null,seq__8128_8998__$1);
var G__9002 = cljs.core.chunk_rest.call(null,seq__8128_8998__$1);
var G__9003 = c__5525__auto___9001;
var G__9004 = cljs.core.count.call(null,c__5525__auto___9001);
var G__9005 = (0);
seq__8128_8784 = G__9002;
chunk__8133_8785 = G__9003;
count__8135_8786 = G__9004;
i__8136_8787 = G__9005;
continue;
} else {
var component__7639__auto___9010 = cljs.core.first.call(null,seq__8128_8998__$1);
speclj.components.install.call(null,component__7639__auto___9010,description__7638__auto___8781);


var G__9011 = cljs.core.next.call(null,seq__8128_8998__$1);
var G__9012 = null;
var G__9013 = (0);
var G__9014 = (0);
seq__8128_8784 = G__9011;
chunk__8133_8785 = G__9012;
count__8135_8786 = G__9013;
i__8136_8787 = G__9014;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__8123_8782);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__7638__auto___8781);
}


//# sourceMappingURL=easy_medium_spec.js.map
