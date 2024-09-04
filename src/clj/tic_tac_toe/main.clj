(ns tic-tac-toe.main
  (:require [tic-tac-toe.launch-user-interface :refer [launch-user-interface]]
            [tic-tac-toe.gui.gui-main]
            [tic-tac-toe.tui.tui-main]))

(defn -main [& args]
  (launch-user-interface args))