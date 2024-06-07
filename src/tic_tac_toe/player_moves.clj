(ns tic-tac-toe.player-moves
  (:require [tic-tac-toe.utils :refer [display-invalid-move-error]]))

(defn- read-move []
  (try
    (dec (Integer/parseInt (read-line)))
    (catch Exception _)))

(defn play-move [board player]
  #_(println "Please enter your move (type 1-9 and hit enter):")
  (loop [move (read-move)]
      (if (number? (get board move))
        (assoc board move player)
        (do (display-invalid-move-error)
            (recur (read-move))))))
