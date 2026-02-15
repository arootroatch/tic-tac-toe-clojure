// Compiled by ClojureScript 1.11.132 {:optimizations :none}
goog.provide('tic_tac_toe.player_spec');
goog.require('cljs.core');
goog.require('speclj.core');
goog.require('tic_tac_toe.player');
speclj.core.describe.call(null,"player namespace",speclj.core.context.call(null,"switch-player",speclj.core.it.call(null,"returns :o if player is :x",speclj.core.should_EQ_.call(null,new cljs.core.Keyword(null,"o","o",-1350007228),tic_tac_toe.player.switch_player.call(null,new cljs.core.Keyword(null,"x","x",2099068185)))),speclj.core.it.call(null,"returns :x if player is :o",speclj.core.should_EQ_.call(null,new cljs.core.Keyword(null,"x","x",2099068185),tic_tac_toe.player.switch_player.call(null,new cljs.core.Keyword(null,"o","o",-1350007228))))));

//# sourceMappingURL=player_spec.js.map
