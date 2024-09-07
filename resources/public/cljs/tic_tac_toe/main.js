// Compiled by ClojureScript 1.11.132 {:optimizations :none}
goog.provide('tic_tac_toe.main');
goog.require('cljs.core');
goog.require('reagent.dom');
goog.require('c3kit.wire.js');
goog.require('tic_tac_toe.app');
tic_tac_toe.main.main = (function tic_tac_toe$main$main(){
return reagent.dom.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tic_tac_toe.app.app], null),c3kit.wire.js.element_by_id.call(null,"app"));
});
goog.exportSymbol('tic_tac_toe.main.main', tic_tac_toe.main.main);

//# sourceMappingURL=main.js.map
