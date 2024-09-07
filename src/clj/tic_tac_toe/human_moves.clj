(ns tic-tac-toe.human-moves
  (:require [tic-tac-toe.player :as player]
            [tic-tac-toe.tui.get-user-input :as get-user-input]
            [tic-tac-toe.print-utils :as print-utils]))

(defmethod player/take-turn :default [{:keys [board player mode]}]
  (print-utils/prompt-user-for-move player mode board)
  (loop [move (get-user-input/read-user-input)]
    (if (and (number? move) (number? (get board (dec move))))
      (assoc board (dec move) player)
      (do (print-utils/display-invalid-move-error)
          (recur (get-user-input/read-user-input))))))