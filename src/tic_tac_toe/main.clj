(ns tic-tac-toe.main
  (:require [tic-tac-toe.eval-board :refer [score]]
            [tic-tac-toe.player :refer [take-turn]]
            [tic-tac-toe.ui :refer [print-board prompt-user-for-level]]
            [tic-tac-toe.human-moves]
            [tic-tac-toe.bot-moves]))

(def initial-board [1 2 3 4 5 6 7 8 9])

(def player-sequence (cycle [:x :o]))

(defn- dispatch-player [level board player]
  (if (= player :x)
    (take-turn {:level 0 :board board :player player})
    (take-turn {:level level :board board :player player})))

(defn -main []
  (let [level (prompt-user-for-level)]
    (loop [board initial-board
           player player-sequence]
      (print-board board)
      (if (not= (score board) :in-progress)
        (println (score board))
        (recur (dispatch-player level board (first player)) (rest player))))))
