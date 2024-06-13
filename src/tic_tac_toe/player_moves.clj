(ns tic-tac-toe.player-moves
  (:require [tic-tac-toe.print-utils :refer [display-invalid-move-error prompt-user-for-move]]))

(defn- read-move []
  (try
    (dec (Integer/parseInt (read-line)))
    (catch Exception _)))

(defn play-user-turn [board player]
  (prompt-user-for-move)
  (loop [move (read-move)]
    (if (number? (get board move))
      (assoc board move player)
      (do (display-invalid-move-error)
          (recur (read-move))))))