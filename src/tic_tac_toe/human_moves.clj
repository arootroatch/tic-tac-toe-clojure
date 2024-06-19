(ns tic-tac-toe.human-moves
  (:require [tic-tac-toe.ui :as print-utils]
            [tic-tac-toe.player :as player]))

(defmethod player/take-turn 0 [{:keys [board player]}]
  (print-utils/prompt-user-for-move)
  (loop [move (print-utils/read-user-input)]
    (if (and (number? move) (number? (get board (dec move))))
      (assoc board (dec move) player)
      (do (print-utils/display-invalid-move-error)
          (recur (print-utils/read-user-input))))))
