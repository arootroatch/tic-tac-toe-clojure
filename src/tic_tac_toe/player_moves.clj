(ns tic-tac-toe.player-moves
  (:require [tic-tac-toe.ui :as print-utils]))

(defn play-user-turn [board player]
  (print-utils/prompt-user-for-move)
  (loop [move (print-utils/read-user-input)]
    (if (and (number? move) (number? (get board (dec move))))
      (assoc board (dec move) player)
      (do (print-utils/display-invalid-move-error)
          (recur (print-utils/read-user-input))))))