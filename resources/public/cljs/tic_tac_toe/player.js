// Compiled by ClojureScript 1.11.132 {:optimizations :none}
goog.provide('tic_tac_toe.player');
goog.require('cljs.core');
tic_tac_toe.player.dispatch_player = (function tic_tac_toe$player$dispatch_player(p__8407){
var map__8408 = p__8407;
var map__8408__$1 = cljs.core.__destructure_map.call(null,map__8408);
var player = cljs.core.get.call(null,map__8408__$1,new cljs.core.Keyword(null,"player","player",-97687400));
var mode = cljs.core.get.call(null,map__8408__$1,new cljs.core.Keyword(null,"mode","mode",654403691));
var first_ai_level = cljs.core.get.call(null,map__8408__$1,new cljs.core.Keyword(null,"first-ai-level","first-ai-level",1004633644));
var second_ai_level = cljs.core.get.call(null,map__8408__$1,new cljs.core.Keyword(null,"second-ai-level","second-ai-level",-418730455));
if(((((cljs.core._EQ_.call(null,player,new cljs.core.Keyword(null,"o","o",-1350007228))) && (cljs.core._EQ_.call(null,mode,(2))))) || (((cljs.core._EQ_.call(null,player,new cljs.core.Keyword(null,"x","x",2099068185))) && (((cljs.core._EQ_.call(null,mode,(3))) || (cljs.core._EQ_.call(null,mode,(4))))))))){
return first_ai_level;
} else {
if(((cljs.core._EQ_.call(null,player,new cljs.core.Keyword(null,"o","o",-1350007228))) && (cljs.core._EQ_.call(null,mode,(4))))){
return second_ai_level;
} else {
return null;
}
}
});
if((typeof tic_tac_toe !== 'undefined') && (typeof tic_tac_toe.player !== 'undefined') && (typeof tic_tac_toe.player.take_turn !== 'undefined')){
} else {
tic_tac_toe.player.take_turn = (function (){var method_table__5599__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5600__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5601__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5602__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5603__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"tic-tac-toe.player","take-turn"),tic_tac_toe.player.dispatch_player,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5603__auto__,method_table__5599__auto__,prefer_table__5600__auto__,method_cache__5601__auto__,cached_hierarchy__5602__auto__));
})();
}
tic_tac_toe.player.switch_player = (function tic_tac_toe$player$switch_player(player){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"x","x",2099068185),player)){
return new cljs.core.Keyword(null,"o","o",-1350007228);
} else {
return new cljs.core.Keyword(null,"x","x",2099068185);
}
});

//# sourceMappingURL=player.js.map
