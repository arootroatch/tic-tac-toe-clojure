(ns tic-tac-toe.player-moves
  (:require [tic-tac-toe.utils :refer [throw-invalid-move-error]]))

(defn set-move [move board player]
  (if (not= move (or 1 2 3 4 5 6 7 8 9))
    (throw-invalid-move-error)
    (assoc board (dec move) player)))