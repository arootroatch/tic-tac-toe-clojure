(ns tic-tac-toe.player-moves
  (:require [tic-tac-toe.print-utils :as print-utils]))

(defn play-user-turn [board player]
  (print-utils/prompt-user-for-move)
  (loop [move (print-utils/read-user-input)]
    (prn "move" move)
    (if (number? (get board move))
      (assoc board move player)
      (do (print-utils/display-invalid-move-error)
          (recur (print-utils/read-user-input))))))