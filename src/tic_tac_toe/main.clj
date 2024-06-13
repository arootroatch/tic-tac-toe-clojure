(ns tic-tac-toe.main
  (:require [tic-tac-toe.bot-moves :refer [play-bot-turn]]
            [tic-tac-toe.eval-board :refer [score]]
            [tic-tac-toe.player-moves :refer [play-user-turn]]
            [tic-tac-toe.print-utils :refer [print-board]]))

(def initial-board [1 2 3 4 5 6 7 8 9])

(def player-sequence (cycle [:x :o]))

(defn- dispatch-player [level board player round]
  (if (= player :x)
    (play-user-turn board player)
    (play-bot-turn level board player round)))

(defn -main []
  (loop [board initial-board
         player player-sequence
         round 1]
    (print-board board)
    (if (not= (score board) :in-progress)
      (println (score board))
      (recur (dispatch-player level board (first player) round) (rest player) (inc round)))))
