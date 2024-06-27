(ns tic-tac-toe.main
  (:require [tic-tac-toe.bot-moves]
            [tic-tac-toe.human-moves]
            [tic-tac-toe.eval-board :refer [score]]
            [tic-tac-toe.player :refer [take-turn player-sequence]]
            [tic-tac-toe.ui.get-level-selection :refer [get-level-selection]]
            [tic-tac-toe.ui.get-mode-selection :refer [get-mode-selection]]
            [tic-tac-toe.ui.get-board-selection :as board]
            [tic-tac-toe.ui.print-utils :as print-utils]))

(defn -main []
  (let [mode (get-mode-selection)
        board-selection (board/get-board-selection)
        first-ai-level (if (= 1 mode) nil (get-level-selection 1 mode))
        second-ai-level (if (= 4 mode) (get-level-selection 2 mode) nil)
        game-options {:mode mode :first-ai-level first-ai-level :second-ai-level second-ai-level}]
    (loop [board (case board-selection 1 board/initial-3x3-board 2 board/initial-4x4-board 3 board/initial-3x3x3-board)
           player player-sequence]
      (print-utils/print-board board)
      (if (not= (score board) :in-progress)
        (println (score board))
        (recur (take-turn (assoc game-options :board board :player (first player))) (rest player))))))


