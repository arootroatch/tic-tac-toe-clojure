(ns tic-tac-toe.main
  (:require [tic-tac-toe.player-moves :refer [play-move]]
            [tic-tac-toe.scoring :refer [score]]
            [tic-tac-toe.utils :refer [print-board]]))

(def initial-board [1 2 3 4 5 6 7 8 9])

(def player-sequence (cycle [:x :o]))

(defn -main []
  (loop [board initial-board
         player player-sequence]
    (print-board board)
    (if (not= (score board) :in-progress)
      (println (score board))
      (recur (play-move board (first player)) (rest player))
      )
    ))
