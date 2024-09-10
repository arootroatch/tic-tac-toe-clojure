// Compiled by ClojureScript 1.11.132 {:optimizations :none}
goog.provide('tic_tac_toe.ai.easy_medium_spec');
goog.require('cljs.core');
goog.require('speclj.core');
goog.require('speclj.stub');
goog.require('tic_tac_toe.ai.easy_medium');
var description__9152__auto___11763 = speclj.components.new_description.call(null,"medium mode",false,"tic-tac-toe.ai.easy-medium-spec");
var _STAR_parent_description_STAR__orig_val__10975_11764 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__10976_11765 = description__9152__auto___11763;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__10976_11765);

try{var seq__10977_11766 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,8,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_around.call(null,((function (_STAR_parent_description_STAR__orig_val__10975_11764,_STAR_parent_description_STAR__temp_val__10976_11765,description__9152__auto___11763){
return (function (it__9522__auto__){
var _STAR_stubbed_invocations_STAR__orig_val__11522 = speclj.stub._STAR_stubbed_invocations_STAR_;
var _STAR_stubbed_invocations_STAR__temp_val__11523 = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
(speclj.stub._STAR_stubbed_invocations_STAR_ = _STAR_stubbed_invocations_STAR__temp_val__11523);

try{return it__9522__auto__.call(null);
}finally {(speclj.stub._STAR_stubbed_invocations_STAR_ = _STAR_stubbed_invocations_STAR__orig_val__11522);
}});})(_STAR_parent_description_STAR__orig_val__10975_11764,_STAR_parent_description_STAR__temp_val__10976_11765,description__9152__auto___11763))
),speclj.components.new_characteristic.call(null,"blocks a win if possible",((function (_STAR_parent_description_STAR__orig_val__10975_11764,_STAR_parent_description_STAR__temp_val__10976_11765,description__9152__auto___11763){
return (function (){
var expected__9289__auto___11778 = (5);
var actual__9290__auto___11779 = tic_tac_toe.ai.easy_medium.find_medium_move.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(3),new cljs.core.Keyword(null,"x","x",2099068185),(5),new cljs.core.Keyword(null,"x","x",2099068185),(7),(8),(9)], null));
if(cljs.core._EQ_.call(null,expected__9289__auto___11778,actual__9290__auto___11779)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__9289__auto___11778;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9257__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9257__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__9290__auto___11779;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9257__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9257__auto__);
}
})()," (using =)"].join('')));
}

var expected__9289__auto___11782 = (7);
var actual__9290__auto___11783 = tic_tac_toe.ai.easy_medium.find_medium_move.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),(2),(3),new cljs.core.Keyword(null,"x","x",2099068185),(5),(6),(7),(8),(9)], null));
if(cljs.core._EQ_.call(null,expected__9289__auto___11782,actual__9290__auto___11783)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__9289__auto___11782;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9257__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9257__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__9290__auto___11783;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9257__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9257__auto__);
}
})()," (using =)"].join('')));
}

var expected__9289__auto__ = (3);
var actual__9290__auto__ = tic_tac_toe.ai.easy_medium.find_medium_move.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(3),(4),new cljs.core.Keyword(null,"x","x",2099068185),(6),new cljs.core.Keyword(null,"x","x",2099068185),(8),(9)], null));
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
});})(_STAR_parent_description_STAR__orig_val__10975_11764,_STAR_parent_description_STAR__temp_val__10976_11765,description__9152__auto___11763))
,false),speclj.components.new_characteristic.call(null,"wins if possible",((function (_STAR_parent_description_STAR__orig_val__10975_11764,_STAR_parent_description_STAR__temp_val__10976_11765,description__9152__auto___11763){
return (function (){
var expected__9289__auto___11788 = (5);
var actual__9290__auto___11789 = tic_tac_toe.ai.easy_medium.find_medium_move.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(3),new cljs.core.Keyword(null,"o","o",-1350007228),(5),new cljs.core.Keyword(null,"o","o",-1350007228),(7),(8),(9)], null));
if(cljs.core._EQ_.call(null,expected__9289__auto___11788,actual__9290__auto___11789)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__9289__auto___11788;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9257__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9257__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__9290__auto___11789;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9257__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9257__auto__);
}
})()," (using =)"].join('')));
}

var expected__9289__auto___11803 = (7);
var actual__9290__auto___11804 = tic_tac_toe.ai.easy_medium.find_medium_move.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"o","o",-1350007228),(2),(3),new cljs.core.Keyword(null,"o","o",-1350007228),(5),(6),(7),(8),(9)], null));
if(cljs.core._EQ_.call(null,expected__9289__auto___11803,actual__9290__auto___11804)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__9289__auto___11803;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9257__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9257__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__9290__auto___11804;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9257__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9257__auto__);
}
})()," (using =)"].join('')));
}

var expected__9289__auto__ = (3);
var actual__9290__auto__ = tic_tac_toe.ai.easy_medium.find_medium_move.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(3),(4),new cljs.core.Keyword(null,"o","o",-1350007228),(6),new cljs.core.Keyword(null,"o","o",-1350007228),(8),(9)], null));
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
});})(_STAR_parent_description_STAR__orig_val__10975_11764,_STAR_parent_description_STAR__temp_val__10976_11765,description__9152__auto___11763))
,false),speclj.components.new_characteristic.call(null,"play random available move if can't win or block",((function (_STAR_parent_description_STAR__orig_val__10975_11764,_STAR_parent_description_STAR__temp_val__10976_11765,description__9152__auto___11763){
return (function (){
var expected__9340__auto___11822 = tic_tac_toe.ai.easy_medium.find_medium_move.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"o","o",-1350007228),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"o","o",-1350007228),(4),new cljs.core.Keyword(null,"x","x",2099068185),(6),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"o","o",-1350007228),new cljs.core.Keyword(null,"x","x",2099068185)], null));
var actual__9341__auto___11823 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(4),(6)], null);
if((actual__9341__auto___11823 == null)){
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__9340__auto___11822;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9257__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9257__auto__);
}
})(),speclj.platform.endl,"to be in: nil"].join('')));
} else {
if(((typeof expected__9340__auto___11822 === 'string') && (typeof actual__9341__auto___11823 === 'string'))){
if(cljs.core._EQ_.call(null,(-1),actual__9341__auto___11823.indexOf(expected__9340__auto___11822))){
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__9340__auto___11822;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9257__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9257__auto__);
}
})(),speclj.platform.endl,"to be in: ",(function (){var temp__5806__auto__ = actual__9341__auto___11823;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9257__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9257__auto__);
}
})()," (using .contains)"].join('')));
} else {
}
} else {
if(((speclj.platform.re_QMARK_.call(null,expected__9340__auto___11822)) && (typeof actual__9341__auto___11823 === 'string'))){
if(cljs.core.empty_QMARK_.call(null,cljs.core.re_seq.call(null,expected__9340__auto___11822,actual__9341__auto___11823))){
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = actual__9341__auto___11823;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9257__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9257__auto__);
}
})(),speclj.platform.endl,"to match: ",(function (){var temp__5806__auto__ = expected__9340__auto___11822;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9257__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9257__auto__);
}
})()," (using re-seq)"].join('')));
} else {
}
} else {
if(cljs.core.map_QMARK_.call(null,actual__9341__auto___11823)){
if((!(cljs.core.contains_QMARK_.call(null,actual__9341__auto___11823,expected__9340__auto___11822)))){
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__9340__auto___11822;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9257__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9257__auto__);
}
})(),speclj.platform.endl,"to be a key in: ",(function (){var temp__5806__auto__ = actual__9341__auto___11823;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9257__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9257__auto__);
}
})()," (using contains?)"].join('')));
} else {
}
} else {
if(cljs.core.coll_QMARK_.call(null,actual__9341__auto___11823)){
if(cljs.core.not.call(null,cljs.core.some.call(null,(function (p1__9339__9342__auto__){
return cljs.core._EQ_.call(null,expected__9340__auto___11822,p1__9339__9342__auto__);
}),actual__9341__auto___11823))){
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__9340__auto___11822;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9257__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9257__auto__);
}
})(),speclj.platform.endl,"to be in: ",(function (){var temp__5806__auto__ = actual__9341__auto___11823;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9257__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9257__auto__);
}
})()," (using =)"].join('')));
} else {
}
} else {
throw (new Error((function (){var a__9268__auto__ = expected__9340__auto___11822;
var b__9269__auto__ = actual__9341__auto___11823;
var type_a__9270__auto__ = (((a__9268__auto__ == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,a__9268__auto__)));
var type_b__9271__auto__ = (((b__9269__auto__ == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,b__9269__auto__)));
return ["should-contain"," doesn't know how to handle these types: [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_a__9270__auto__)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_b__9271__auto__),"]"].join('');
})()));

}
}
}
}
}

var expected__9340__auto___11856 = tic_tac_toe.ai.easy_medium.find_medium_move.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),(2),(3),(4),new cljs.core.Keyword(null,"o","o",-1350007228),new cljs.core.Keyword(null,"x","x",2099068185),(7),(8),new cljs.core.Keyword(null,"o","o",-1350007228)], null));
var actual__9341__auto___11857 = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(3),(4),(7),(8)], null);
if((actual__9341__auto___11857 == null)){
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__9340__auto___11856;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9257__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9257__auto__);
}
})(),speclj.platform.endl,"to be in: nil"].join('')));
} else {
if(((typeof expected__9340__auto___11856 === 'string') && (typeof actual__9341__auto___11857 === 'string'))){
if(cljs.core._EQ_.call(null,(-1),actual__9341__auto___11857.indexOf(expected__9340__auto___11856))){
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__9340__auto___11856;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9257__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9257__auto__);
}
})(),speclj.platform.endl,"to be in: ",(function (){var temp__5806__auto__ = actual__9341__auto___11857;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9257__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9257__auto__);
}
})()," (using .contains)"].join('')));
} else {
}
} else {
if(((speclj.platform.re_QMARK_.call(null,expected__9340__auto___11856)) && (typeof actual__9341__auto___11857 === 'string'))){
if(cljs.core.empty_QMARK_.call(null,cljs.core.re_seq.call(null,expected__9340__auto___11856,actual__9341__auto___11857))){
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = actual__9341__auto___11857;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9257__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9257__auto__);
}
})(),speclj.platform.endl,"to match: ",(function (){var temp__5806__auto__ = expected__9340__auto___11856;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9257__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9257__auto__);
}
})()," (using re-seq)"].join('')));
} else {
}
} else {
if(cljs.core.map_QMARK_.call(null,actual__9341__auto___11857)){
if((!(cljs.core.contains_QMARK_.call(null,actual__9341__auto___11857,expected__9340__auto___11856)))){
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__9340__auto___11856;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9257__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9257__auto__);
}
})(),speclj.platform.endl,"to be a key in: ",(function (){var temp__5806__auto__ = actual__9341__auto___11857;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9257__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9257__auto__);
}
})()," (using contains?)"].join('')));
} else {
}
} else {
if(cljs.core.coll_QMARK_.call(null,actual__9341__auto___11857)){
if(cljs.core.not.call(null,cljs.core.some.call(null,(function (p1__9339__9342__auto__){
return cljs.core._EQ_.call(null,expected__9340__auto___11856,p1__9339__9342__auto__);
}),actual__9341__auto___11857))){
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__9340__auto___11856;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9257__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9257__auto__);
}
})(),speclj.platform.endl,"to be in: ",(function (){var temp__5806__auto__ = actual__9341__auto___11857;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9257__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9257__auto__);
}
})()," (using =)"].join('')));
} else {
}
} else {
throw (new Error((function (){var a__9268__auto__ = expected__9340__auto___11856;
var b__9269__auto__ = actual__9341__auto___11857;
var type_a__9270__auto__ = (((a__9268__auto__ == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,a__9268__auto__)));
var type_b__9271__auto__ = (((b__9269__auto__ == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,b__9269__auto__)));
return ["should-contain"," doesn't know how to handle these types: [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_a__9270__auto__)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_b__9271__auto__),"]"].join('');
})()));

}
}
}
}
}

var find_easy_move_orig_val__11579 = tic_tac_toe.ai.easy_medium.find_easy_move;
var find_easy_move_temp_val__11580 = speclj.stub.stub.call(null,new cljs.core.Keyword(null,"find-easy-move","find-easy-move",1506541355),cljs.core.PersistentArrayMap.EMPTY);
(tic_tac_toe.ai.easy_medium.find_easy_move = find_easy_move_temp_val__11580);

try{tic_tac_toe.ai.easy_medium.find_medium_move.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),(2),(3),(4),new cljs.core.Keyword(null,"o","o",-1350007228),new cljs.core.Keyword(null,"x","x",2099068185),(7),(8),new cljs.core.Keyword(null,"o","o",-1350007228)], null));

tic_tac_toe.ai.easy_medium.find_medium_move.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"o","o",-1350007228),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"o","o",-1350007228),(4),new cljs.core.Keyword(null,"x","x",2099068185),(6),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"o","o",-1350007228),new cljs.core.Keyword(null,"x","x",2099068185)], null));

var expected__9289__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),(2),(3),(4),new cljs.core.Keyword(null,"o","o",-1350007228),new cljs.core.Keyword(null,"x","x",2099068185),(7),(8),new cljs.core.Keyword(null,"o","o",-1350007228)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"o","o",-1350007228),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"o","o",-1350007228),(4),new cljs.core.Keyword(null,"x","x",2099068185),(6),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"o","o",-1350007228),new cljs.core.Keyword(null,"x","x",2099068185)], null)], null)], null);
var actual__9290__auto__ = speclj.stub.invocations_of.call(null,new cljs.core.Keyword(null,"find-easy-move","find-easy-move",1506541355));
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
}finally {(tic_tac_toe.ai.easy_medium.find_easy_move = find_easy_move_orig_val__11579);
}});})(_STAR_parent_description_STAR__orig_val__10975_11764,_STAR_parent_description_STAR__temp_val__10976_11765,description__9152__auto___11763))
,false),speclj.components.new_characteristic.call(null,"plays center square if first move is a corner",((function (_STAR_parent_description_STAR__orig_val__10975_11764,_STAR_parent_description_STAR__temp_val__10976_11765,description__9152__auto___11763){
return (function (){
var expected__9289__auto___11893 = (5);
var actual__9290__auto___11894 = tic_tac_toe.ai.easy_medium.find_medium_move.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),(2),(3),(4),(5),(6),(7),(8),(9)], null));
if(cljs.core._EQ_.call(null,expected__9289__auto___11893,actual__9290__auto___11894)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__9289__auto___11893;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9257__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9257__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__9290__auto___11894;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9257__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9257__auto__);
}
})()," (using =)"].join('')));
}

var expected__9289__auto___11895 = (5);
var actual__9290__auto___11896 = tic_tac_toe.ai.easy_medium.find_medium_move.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),new cljs.core.Keyword(null,"x","x",2099068185),(4),(5),(6),(7),(8),(9)], null));
if(cljs.core._EQ_.call(null,expected__9289__auto___11895,actual__9290__auto___11896)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__9289__auto___11895;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9257__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9257__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__9290__auto___11896;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9257__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9257__auto__);
}
})()," (using =)"].join('')));
}

var expected__9289__auto___11897 = (5);
var actual__9290__auto___11898 = tic_tac_toe.ai.easy_medium.find_medium_move.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(3),(4),(5),(6),new cljs.core.Keyword(null,"x","x",2099068185),(8),(9)], null));
if(cljs.core._EQ_.call(null,expected__9289__auto___11897,actual__9290__auto___11898)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__9289__auto___11897;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9257__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9257__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__9290__auto___11898;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9257__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9257__auto__);
}
})()," (using =)"].join('')));
}

var expected__9289__auto__ = (5);
var actual__9290__auto__ = tic_tac_toe.ai.easy_medium.find_medium_move.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(3),(4),(5),(6),(7),(8),new cljs.core.Keyword(null,"x","x",2099068185)], null));
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
});})(_STAR_parent_description_STAR__orig_val__10975_11764,_STAR_parent_description_STAR__temp_val__10976_11765,description__9152__auto___11763))
,false),speclj.components.new_characteristic.call(null,"plays top left if first move is center",((function (_STAR_parent_description_STAR__orig_val__10975_11764,_STAR_parent_description_STAR__temp_val__10976_11765,description__9152__auto___11763){
return (function (){
var expected__9289__auto__ = (1);
var actual__9290__auto__ = tic_tac_toe.ai.easy_medium.find_medium_move.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(3),(4),new cljs.core.Keyword(null,"x","x",2099068185),(6),(7),(8),(9)], null));
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
});})(_STAR_parent_description_STAR__orig_val__10975_11764,_STAR_parent_description_STAR__temp_val__10976_11765,description__9152__auto___11763))
,false),(function (){var description__9152__auto____$1 = speclj.components.new_description.call(null,"get-winning-move",false,"tic-tac-toe.ai.easy-medium-spec");
var _STAR_parent_description_STAR__orig_val__11593_11917 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__11594_11918 = description__9152__auto____$1;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__11594_11918);

try{var seq__11595_11923 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_characteristic.call(null,"finds move that will win the game for the given player",((function (_STAR_parent_description_STAR__orig_val__11593_11917,_STAR_parent_description_STAR__temp_val__11594_11918,description__9152__auto____$1,_STAR_parent_description_STAR__orig_val__10975_11764,_STAR_parent_description_STAR__temp_val__10976_11765,description__9152__auto___11763){
return (function (){
var expected__9289__auto___11927 = (5);
var actual__9290__auto___11928 = tic_tac_toe.ai.easy_medium.get_winning_move.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(3),new cljs.core.Keyword(null,"x","x",2099068185),(5),new cljs.core.Keyword(null,"x","x",2099068185),(7),(8),(9)], null),new cljs.core.Keyword(null,"x","x",2099068185));
if(cljs.core._EQ_.call(null,expected__9289__auto___11927,actual__9290__auto___11928)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__9289__auto___11927;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9257__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9257__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__9290__auto___11928;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9257__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9257__auto__);
}
})()," (using =)"].join('')));
}

var expected__9289__auto___11937 = (7);
var actual__9290__auto___11938 = tic_tac_toe.ai.easy_medium.get_winning_move.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),(2),(3),new cljs.core.Keyword(null,"x","x",2099068185),(5),(6),(7),(8),(9)], null),new cljs.core.Keyword(null,"x","x",2099068185));
if(cljs.core._EQ_.call(null,expected__9289__auto___11937,actual__9290__auto___11938)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__9289__auto___11937;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9257__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9257__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__9290__auto___11938;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9257__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9257__auto__);
}
})()," (using =)"].join('')));
}

var expected__9289__auto___11939 = (3);
var actual__9290__auto___11940 = tic_tac_toe.ai.easy_medium.get_winning_move.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(3),(4),new cljs.core.Keyword(null,"x","x",2099068185),(6),new cljs.core.Keyword(null,"x","x",2099068185),(8),(9)], null),new cljs.core.Keyword(null,"x","x",2099068185));
if(cljs.core._EQ_.call(null,expected__9289__auto___11939,actual__9290__auto___11940)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__9289__auto___11939;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9257__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9257__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__9290__auto___11940;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9257__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9257__auto__);
}
})()," (using =)"].join('')));
}

var expected__9289__auto___11941 = (8);
var actual__9290__auto___11942 = tic_tac_toe.ai.easy_medium.get_winning_move.call(null,new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(3),(4),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"x","x",2099068185),(8),(9),(10),(11),(12),(13),(14),(15),(16)], null),new cljs.core.Keyword(null,"x","x",2099068185));
if(cljs.core._EQ_.call(null,expected__9289__auto___11941,actual__9290__auto___11942)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__9289__auto___11941;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9257__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9257__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__9290__auto___11942;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9257__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9257__auto__);
}
})()," (using =)"].join('')));
}

var expected__9289__auto__ = (16);
var actual__9290__auto__ = tic_tac_toe.ai.easy_medium.get_winning_move.call(null,new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"o","o",-1350007228),(2),(3),(4),(5),new cljs.core.Keyword(null,"o","o",-1350007228),(7),(8),(9),(10),new cljs.core.Keyword(null,"o","o",-1350007228),(12),(13),(14),(15),(16)], null),new cljs.core.Keyword(null,"o","o",-1350007228));
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
});})(_STAR_parent_description_STAR__orig_val__11593_11917,_STAR_parent_description_STAR__temp_val__11594_11918,description__9152__auto____$1,_STAR_parent_description_STAR__orig_val__10975_11764,_STAR_parent_description_STAR__temp_val__10976_11765,description__9152__auto___11763))
,false),speclj.components.new_characteristic.call(null,"returns empty when no path is one move from winning for the given player",((function (_STAR_parent_description_STAR__orig_val__11593_11917,_STAR_parent_description_STAR__temp_val__11594_11918,description__9152__auto____$1,_STAR_parent_description_STAR__orig_val__10975_11764,_STAR_parent_description_STAR__temp_val__10976_11765,description__9152__auto___11763){
return (function (){
var expected__9289__auto___11947 = null;
var actual__9290__auto___11948 = tic_tac_toe.ai.easy_medium.get_winning_move.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"o","o",-1350007228),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"o","o",-1350007228),new cljs.core.Keyword(null,"o","o",-1350007228),new cljs.core.Keyword(null,"o","o",-1350007228),new cljs.core.Keyword(null,"x","x",2099068185)], null),new cljs.core.Keyword(null,"x","x",2099068185));
if(cljs.core._EQ_.call(null,expected__9289__auto___11947,actual__9290__auto___11948)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__9289__auto___11947;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9257__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9257__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__9290__auto___11948;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9257__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9257__auto__);
}
})()," (using =)"].join('')));
}

var expected__9289__auto___11949 = null;
var actual__9290__auto___11950 = tic_tac_toe.ai.easy_medium.get_winning_move.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"o","o",-1350007228),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"o","o",-1350007228),(4),new cljs.core.Keyword(null,"x","x",2099068185),(6),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"o","o",-1350007228),new cljs.core.Keyword(null,"x","x",2099068185)], null),new cljs.core.Keyword(null,"x","x",2099068185));
if(cljs.core._EQ_.call(null,expected__9289__auto___11949,actual__9290__auto___11950)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__9289__auto___11949;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9257__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9257__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__9290__auto___11950;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9257__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9257__auto__);
}
})()," (using =)"].join('')));
}

var expected__9289__auto___11955 = null;
var actual__9290__auto___11956 = tic_tac_toe.ai.easy_medium.get_winning_move.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),(2),(3),(4),new cljs.core.Keyword(null,"o","o",-1350007228),new cljs.core.Keyword(null,"x","x",2099068185),(7),(8),new cljs.core.Keyword(null,"o","o",-1350007228)], null),new cljs.core.Keyword(null,"x","x",2099068185));
if(cljs.core._EQ_.call(null,expected__9289__auto___11955,actual__9290__auto___11956)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__9289__auto___11955;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9257__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9257__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__9290__auto___11956;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9257__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9257__auto__);
}
})()," (using =)"].join('')));
}

var expected__9289__auto___11957 = null;
var actual__9290__auto___11958 = tic_tac_toe.ai.easy_medium.get_winning_move.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(3),(4),(5),(6),(7),(8),(9)], null),new cljs.core.Keyword(null,"x","x",2099068185));
if(cljs.core._EQ_.call(null,expected__9289__auto___11957,actual__9290__auto___11958)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__9289__auto___11957;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9257__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9257__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__9290__auto___11958;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9257__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9257__auto__);
}
})()," (using =)"].join('')));
}

var expected__9289__auto__ = null;
var actual__9290__auto__ = tic_tac_toe.ai.easy_medium.get_winning_move.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"o","o",-1350007228),(2),(3),(4),(5),(6),(7),(8),(9)], null),new cljs.core.Keyword(null,"o","o",-1350007228));
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
});})(_STAR_parent_description_STAR__orig_val__11593_11917,_STAR_parent_description_STAR__temp_val__11594_11918,description__9152__auto____$1,_STAR_parent_description_STAR__orig_val__10975_11764,_STAR_parent_description_STAR__temp_val__10976_11765,description__9152__auto___11763))
,false)],null)));
var chunk__11596_11924 = null;
var count__11597_11925 = (0);
var i__11598_11926 = (0);
while(true){
if((i__11598_11926 < count__11597_11925)){
var component__9153__auto___11976 = cljs.core._nth.call(null,chunk__11596_11924,i__11598_11926);
speclj.components.install.call(null,component__9153__auto___11976,description__9152__auto____$1);


var G__11979 = seq__11595_11923;
var G__11980 = chunk__11596_11924;
var G__11981 = count__11597_11925;
var G__11982 = (i__11598_11926 + (1));
seq__11595_11923 = G__11979;
chunk__11596_11924 = G__11980;
count__11597_11925 = G__11981;
i__11598_11926 = G__11982;
continue;
} else {
var temp__5804__auto___11987 = cljs.core.seq.call(null,seq__11595_11923);
if(temp__5804__auto___11987){
var seq__11595_11988__$1 = temp__5804__auto___11987;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11595_11988__$1)){
var c__5525__auto___11991 = cljs.core.chunk_first.call(null,seq__11595_11988__$1);
var G__11992 = cljs.core.chunk_rest.call(null,seq__11595_11988__$1);
var G__11993 = c__5525__auto___11991;
var G__11994 = cljs.core.count.call(null,c__5525__auto___11991);
var G__11995 = (0);
seq__11595_11923 = G__11992;
chunk__11596_11924 = G__11993;
count__11597_11925 = G__11994;
i__11598_11926 = G__11995;
continue;
} else {
var component__9153__auto___12000 = cljs.core.first.call(null,seq__11595_11988__$1);
speclj.components.install.call(null,component__9153__auto___12000,description__9152__auto____$1);


var G__12001 = cljs.core.next.call(null,seq__11595_11988__$1);
var G__12002 = null;
var G__12003 = (0);
var G__12004 = (0);
seq__11595_11923 = G__12001;
chunk__11596_11924 = G__12002;
count__11597_11925 = G__12003;
i__11598_11926 = G__12004;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__11593_11917);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__9152__auto____$1);
}

return description__9152__auto____$1;
})(),(function (){var description__9152__auto____$1 = speclj.components.new_description.call(null,"find-easy-move",false,"tic-tac-toe.ai.easy-medium-spec");
var _STAR_parent_description_STAR__orig_val__11641_12005 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__11642_12006 = description__9152__auto____$1;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__11642_12006);

try{var seq__11643_12007 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_characteristic.call(null,"picks an available move at random",((function (_STAR_parent_description_STAR__orig_val__11641_12005,_STAR_parent_description_STAR__temp_val__11642_12006,description__9152__auto____$1,_STAR_parent_description_STAR__orig_val__10975_11764,_STAR_parent_description_STAR__temp_val__10976_11765,description__9152__auto___11763){
return (function (){
var expected__9340__auto___12015 = tic_tac_toe.ai.easy_medium.find_easy_move.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(3),(4),(5),(6),(7),(8),(9)], null));
var actual__9341__auto___12016 = new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(3),(4),(5),(6),(7),(8),(9)], null);
if((actual__9341__auto___12016 == null)){
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__9340__auto___12015;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9257__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9257__auto__);
}
})(),speclj.platform.endl,"to be in: nil"].join('')));
} else {
if(((typeof expected__9340__auto___12015 === 'string') && (typeof actual__9341__auto___12016 === 'string'))){
if(cljs.core._EQ_.call(null,(-1),actual__9341__auto___12016.indexOf(expected__9340__auto___12015))){
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__9340__auto___12015;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9257__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9257__auto__);
}
})(),speclj.platform.endl,"to be in: ",(function (){var temp__5806__auto__ = actual__9341__auto___12016;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9257__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9257__auto__);
}
})()," (using .contains)"].join('')));
} else {
}
} else {
if(((speclj.platform.re_QMARK_.call(null,expected__9340__auto___12015)) && (typeof actual__9341__auto___12016 === 'string'))){
if(cljs.core.empty_QMARK_.call(null,cljs.core.re_seq.call(null,expected__9340__auto___12015,actual__9341__auto___12016))){
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = actual__9341__auto___12016;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9257__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9257__auto__);
}
})(),speclj.platform.endl,"to match: ",(function (){var temp__5806__auto__ = expected__9340__auto___12015;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9257__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9257__auto__);
}
})()," (using re-seq)"].join('')));
} else {
}
} else {
if(cljs.core.map_QMARK_.call(null,actual__9341__auto___12016)){
if((!(cljs.core.contains_QMARK_.call(null,actual__9341__auto___12016,expected__9340__auto___12015)))){
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__9340__auto___12015;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9257__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9257__auto__);
}
})(),speclj.platform.endl,"to be a key in: ",(function (){var temp__5806__auto__ = actual__9341__auto___12016;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9257__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9257__auto__);
}
})()," (using contains?)"].join('')));
} else {
}
} else {
if(cljs.core.coll_QMARK_.call(null,actual__9341__auto___12016)){
if(cljs.core.not.call(null,cljs.core.some.call(null,(function (p1__9339__9342__auto__){
return cljs.core._EQ_.call(null,expected__9340__auto___12015,p1__9339__9342__auto__);
}),actual__9341__auto___12016))){
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__9340__auto___12015;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9257__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9257__auto__);
}
})(),speclj.platform.endl,"to be in: ",(function (){var temp__5806__auto__ = actual__9341__auto___12016;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9257__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9257__auto__);
}
})()," (using =)"].join('')));
} else {
}
} else {
throw (new Error((function (){var a__9268__auto__ = expected__9340__auto___12015;
var b__9269__auto__ = actual__9341__auto___12016;
var type_a__9270__auto__ = (((a__9268__auto__ == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,a__9268__auto__)));
var type_b__9271__auto__ = (((b__9269__auto__ == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,b__9269__auto__)));
return ["should-contain"," doesn't know how to handle these types: [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_a__9270__auto__)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_b__9271__auto__),"]"].join('');
})()));

}
}
}
}
}

var expected__9340__auto___12025 = tic_tac_toe.ai.easy_medium.find_easy_move.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),(2),(3),(4),(5),(6),(7),(8),(9)], null));
var actual__9341__auto___12026 = new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(3),(4),(5),(6),(7),(8),(9)], null);
if((actual__9341__auto___12026 == null)){
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__9340__auto___12025;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9257__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9257__auto__);
}
})(),speclj.platform.endl,"to be in: nil"].join('')));
} else {
if(((typeof expected__9340__auto___12025 === 'string') && (typeof actual__9341__auto___12026 === 'string'))){
if(cljs.core._EQ_.call(null,(-1),actual__9341__auto___12026.indexOf(expected__9340__auto___12025))){
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__9340__auto___12025;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9257__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9257__auto__);
}
})(),speclj.platform.endl,"to be in: ",(function (){var temp__5806__auto__ = actual__9341__auto___12026;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9257__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9257__auto__);
}
})()," (using .contains)"].join('')));
} else {
}
} else {
if(((speclj.platform.re_QMARK_.call(null,expected__9340__auto___12025)) && (typeof actual__9341__auto___12026 === 'string'))){
if(cljs.core.empty_QMARK_.call(null,cljs.core.re_seq.call(null,expected__9340__auto___12025,actual__9341__auto___12026))){
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = actual__9341__auto___12026;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9257__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9257__auto__);
}
})(),speclj.platform.endl,"to match: ",(function (){var temp__5806__auto__ = expected__9340__auto___12025;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9257__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9257__auto__);
}
})()," (using re-seq)"].join('')));
} else {
}
} else {
if(cljs.core.map_QMARK_.call(null,actual__9341__auto___12026)){
if((!(cljs.core.contains_QMARK_.call(null,actual__9341__auto___12026,expected__9340__auto___12025)))){
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__9340__auto___12025;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9257__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9257__auto__);
}
})(),speclj.platform.endl,"to be a key in: ",(function (){var temp__5806__auto__ = actual__9341__auto___12026;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9257__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9257__auto__);
}
})()," (using contains?)"].join('')));
} else {
}
} else {
if(cljs.core.coll_QMARK_.call(null,actual__9341__auto___12026)){
if(cljs.core.not.call(null,cljs.core.some.call(null,(function (p1__9339__9342__auto__){
return cljs.core._EQ_.call(null,expected__9340__auto___12025,p1__9339__9342__auto__);
}),actual__9341__auto___12026))){
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__9340__auto___12025;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9257__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9257__auto__);
}
})(),speclj.platform.endl,"to be in: ",(function (){var temp__5806__auto__ = actual__9341__auto___12026;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9257__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9257__auto__);
}
})()," (using =)"].join('')));
} else {
}
} else {
throw (new Error((function (){var a__9268__auto__ = expected__9340__auto___12025;
var b__9269__auto__ = actual__9341__auto___12026;
var type_a__9270__auto__ = (((a__9268__auto__ == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,a__9268__auto__)));
var type_b__9271__auto__ = (((b__9269__auto__ == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,b__9269__auto__)));
return ["should-contain"," doesn't know how to handle these types: [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_a__9270__auto__)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_b__9271__auto__),"]"].join('');
})()));

}
}
}
}
}

var expected__9340__auto__ = tic_tac_toe.ai.easy_medium.find_easy_move.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"x","x",2099068185),(3),(4),(5),new cljs.core.Keyword(null,"o","o",-1350007228),(7),new cljs.core.Keyword(null,"o","o",-1350007228),new cljs.core.Keyword(null,"x","x",2099068185)], null));
var actual__9341__auto__ = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(4),(5),(7)], null);
if((actual__9341__auto__ == null)){
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__9340__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9257__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9257__auto__);
}
})(),speclj.platform.endl,"to be in: nil"].join('')));
} else {
if(((typeof expected__9340__auto__ === 'string') && (typeof actual__9341__auto__ === 'string'))){
if(cljs.core._EQ_.call(null,(-1),actual__9341__auto__.indexOf(expected__9340__auto__))){
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__9340__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9257__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9257__auto__);
}
})(),speclj.platform.endl,"to be in: ",(function (){var temp__5806__auto__ = actual__9341__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9257__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9257__auto__);
}
})()," (using .contains)"].join('')));
} else {
return null;
}
} else {
if(((speclj.platform.re_QMARK_.call(null,expected__9340__auto__)) && (typeof actual__9341__auto__ === 'string'))){
if(cljs.core.empty_QMARK_.call(null,cljs.core.re_seq.call(null,expected__9340__auto__,actual__9341__auto__))){
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = actual__9341__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9257__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9257__auto__);
}
})(),speclj.platform.endl,"to match: ",(function (){var temp__5806__auto__ = expected__9340__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9257__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9257__auto__);
}
})()," (using re-seq)"].join('')));
} else {
return null;
}
} else {
if(cljs.core.map_QMARK_.call(null,actual__9341__auto__)){
if((!(cljs.core.contains_QMARK_.call(null,actual__9341__auto__,expected__9340__auto__)))){
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__9340__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9257__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9257__auto__);
}
})(),speclj.platform.endl,"to be a key in: ",(function (){var temp__5806__auto__ = actual__9341__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9257__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9257__auto__);
}
})()," (using contains?)"].join('')));
} else {
return null;
}
} else {
if(cljs.core.coll_QMARK_.call(null,actual__9341__auto__)){
if(cljs.core.not.call(null,cljs.core.some.call(null,(function (p1__9339__9342__auto__){
return cljs.core._EQ_.call(null,expected__9340__auto__,p1__9339__9342__auto__);
}),actual__9341__auto__))){
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__9340__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9257__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9257__auto__);
}
})(),speclj.platform.endl,"to be in: ",(function (){var temp__5806__auto__ = actual__9341__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9257__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9257__auto__);
}
})()," (using =)"].join('')));
} else {
return null;
}
} else {
throw (new Error((function (){var a__9268__auto__ = expected__9340__auto__;
var b__9269__auto__ = actual__9341__auto__;
var type_a__9270__auto__ = (((a__9268__auto__ == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,a__9268__auto__)));
var type_b__9271__auto__ = (((b__9269__auto__ == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,b__9269__auto__)));
return ["should-contain"," doesn't know how to handle these types: [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_a__9270__auto__)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_b__9271__auto__),"]"].join('');
})()));

}
}
}
}
}
});})(_STAR_parent_description_STAR__orig_val__11641_12005,_STAR_parent_description_STAR__temp_val__11642_12006,description__9152__auto____$1,_STAR_parent_description_STAR__orig_val__10975_11764,_STAR_parent_description_STAR__temp_val__10976_11765,description__9152__auto___11763))
,false)],null)));
var chunk__11644_12008 = null;
var count__11645_12009 = (0);
var i__11646_12010 = (0);
while(true){
if((i__11646_12010 < count__11645_12009)){
var component__9153__auto___12065 = cljs.core._nth.call(null,chunk__11644_12008,i__11646_12010);
speclj.components.install.call(null,component__9153__auto___12065,description__9152__auto____$1);


var G__12070 = seq__11643_12007;
var G__12071 = chunk__11644_12008;
var G__12072 = count__11645_12009;
var G__12073 = (i__11646_12010 + (1));
seq__11643_12007 = G__12070;
chunk__11644_12008 = G__12071;
count__11645_12009 = G__12072;
i__11646_12010 = G__12073;
continue;
} else {
var temp__5804__auto___12074 = cljs.core.seq.call(null,seq__11643_12007);
if(temp__5804__auto___12074){
var seq__11643_12075__$1 = temp__5804__auto___12074;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11643_12075__$1)){
var c__5525__auto___12076 = cljs.core.chunk_first.call(null,seq__11643_12075__$1);
var G__12077 = cljs.core.chunk_rest.call(null,seq__11643_12075__$1);
var G__12078 = c__5525__auto___12076;
var G__12079 = cljs.core.count.call(null,c__5525__auto___12076);
var G__12080 = (0);
seq__11643_12007 = G__12077;
chunk__11644_12008 = G__12078;
count__11645_12009 = G__12079;
i__11646_12010 = G__12080;
continue;
} else {
var component__9153__auto___12081 = cljs.core.first.call(null,seq__11643_12075__$1);
speclj.components.install.call(null,component__9153__auto___12081,description__9152__auto____$1);


var G__12082 = cljs.core.next.call(null,seq__11643_12075__$1);
var G__12083 = null;
var G__12084 = (0);
var G__12085 = (0);
seq__11643_12007 = G__12082;
chunk__11644_12008 = G__12083;
count__11645_12009 = G__12084;
i__11646_12010 = G__12085;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__11641_12005);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__9152__auto____$1);
}

return description__9152__auto____$1;
})()],null)));
var chunk__10978_11767 = null;
var count__10979_11768 = (0);
var i__10980_11769 = (0);
while(true){
if((i__10980_11769 < count__10979_11768)){
var component__9153__auto___12086 = cljs.core._nth.call(null,chunk__10978_11767,i__10980_11769);
speclj.components.install.call(null,component__9153__auto___12086,description__9152__auto___11763);


var G__12087 = seq__10977_11766;
var G__12088 = chunk__10978_11767;
var G__12089 = count__10979_11768;
var G__12090 = (i__10980_11769 + (1));
seq__10977_11766 = G__12087;
chunk__10978_11767 = G__12088;
count__10979_11768 = G__12089;
i__10980_11769 = G__12090;
continue;
} else {
var temp__5804__auto___12091 = cljs.core.seq.call(null,seq__10977_11766);
if(temp__5804__auto___12091){
var seq__10977_12092__$1 = temp__5804__auto___12091;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10977_12092__$1)){
var c__5525__auto___12093 = cljs.core.chunk_first.call(null,seq__10977_12092__$1);
var G__12094 = cljs.core.chunk_rest.call(null,seq__10977_12092__$1);
var G__12095 = c__5525__auto___12093;
var G__12096 = cljs.core.count.call(null,c__5525__auto___12093);
var G__12097 = (0);
seq__10977_11766 = G__12094;
chunk__10978_11767 = G__12095;
count__10979_11768 = G__12096;
i__10980_11769 = G__12097;
continue;
} else {
var component__9153__auto___12098 = cljs.core.first.call(null,seq__10977_12092__$1);
speclj.components.install.call(null,component__9153__auto___12098,description__9152__auto___11763);


var G__12099 = cljs.core.next.call(null,seq__10977_12092__$1);
var G__12100 = null;
var G__12101 = (0);
var G__12102 = (0);
seq__10977_11766 = G__12099;
chunk__10978_11767 = G__12100;
count__10979_11768 = G__12101;
i__10980_11769 = G__12102;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__10975_11764);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__9152__auto___11763);
}


//# sourceMappingURL=easy_medium_spec.js.map
