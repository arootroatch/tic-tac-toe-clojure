// Compiled by ClojureScript 1.11.132 {:optimizations :none}
goog.provide('tic_tac_toe.app');
goog.require('cljs.core');
goog.require('tic_tac_toe.render_screen');
goog.require('tic_tac_toe.state');
goog.require('tic_tac_toe.screens.mode_selection');
goog.require('tic_tac_toe.screens.board_selection');
goog.require('tic_tac_toe.screens.first_level_selection');
goog.require('tic_tac_toe.screens.second_level_selection');
tic_tac_toe.app.app = (function tic_tac_toe$app$app(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#app-wrapper","div#app-wrapper",2122757759),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"Tic-Tac-Toe"], null),tic_tac_toe.render_screen.render_screen.call(null,tic_tac_toe.state.state)], null);
});

//# sourceMappingURL=app.js.map
