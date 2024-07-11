(ns tic-tac-toe.tui.tui-main
  (:require [tic-tac-toe.bot-moves]
            [tic-tac-toe.eval-board :refer [score]]
            [tic-tac-toe.human-moves]
            [tic-tac-toe.player :refer [player-sequence take-turn]]
            [tic-tac-toe.tui.get-selection :refer [get-selection initial-3x3-board initial-3x3x3-board initial-4x4-board]]
            [tic-tac-toe.tui.print-utils :as print-utils]
            [tic-tac-toe.launch-user-interface :refer [launch-user-interface]]))

(defmethod launch-user-interface :default [_]
  (let [mode (get-selection {:option :mode})
        board-selection (get-selection {:option :board})
        first-ai-level (if (= 1 mode) nil (get-selection {:option :level :ai 1 :mode mode :board board-selection}))
        second-ai-level (if (= 4 mode) (get-selection {:option :level :ai 2 :mode mode}) nil)
        game-options {:mode mode :first-ai-level first-ai-level :second-ai-level second-ai-level}]
    (loop [board (case board-selection 1 initial-3x3-board 2 initial-4x4-board 3 initial-3x3x3-board)
           player player-sequence]
      (print-utils/print-board board)
      (if (not= (score board) :in-progress)
        (println (score board))
        (recur (take-turn (assoc game-options :board board :player (first player))) (rest player))))))
