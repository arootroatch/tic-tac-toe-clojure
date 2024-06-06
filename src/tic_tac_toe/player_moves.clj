(ns tic-tac-toe.player-moves
  (:require [tic-tac-toe.utils :refer [throw-invalid-move-error]]))

(defn set-move [move board player]
  (if (some #(= move %) [1 2 3 4 5 6 7 8 9])
    (assoc board (dec move) player)
    (throw-invalid-move-error)))
