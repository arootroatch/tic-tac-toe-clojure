(ns tic-tac-toe.main
  (:require [tic-tac-toe.bot-moves]
            [tic-tac-toe.human-moves]
            [tic-tac-toe.eval-board :refer [score]]
            [tic-tac-toe.player :refer [take-turn player-sequence]]
            [tic-tac-toe.ui.get-selection :refer [get-selection initial-3x3-board initial-4x4-board initial-3x3x3-board]]
            [tic-tac-toe.ui.print-utils :as print-utils]))

(defn -main [&args]
  (let [gui (if (= &args "gui") (do (load-file "src/tic_tac_toe/gui/core.clj") 1) nil)
        mode (get-selection {:option :mode :gui gui})
        board-selection (get-selection {:option :board :gui ui})
        first-ai-level (if (= 1 mode) nil (get-selection {:option :level :ai 1 :mode mode :board board-selection :gui gui}))
        second-ai-level (if (= 4 mode) (get-selection {:option :level :ai 2 :mode mode :gui gui}) nil)
        game-options {:mode mode :first-ai-level first-ai-level :second-ai-level second-ai-level :gui gui}]
    (loop [board (case board-selection 1 initial-3x3-board 2 initial-4x4-board 3 initial-3x3x3-board)
           player player-sequence]
      (print-utils/print-board board)
      (if (not= (score board) :in-progress)
        (println (score board))
        (recur (take-turn (assoc game-options :board board :player (first player))) (rest player))))))


