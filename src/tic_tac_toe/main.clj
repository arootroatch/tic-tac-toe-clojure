(ns tic-tac-toe.main
  (:require [tic-tac-toe.bot-moves :refer [play-bot-turn]]
            [tic-tac-toe.player-moves :refer [play-user-turn]]
            [tic-tac-toe.utils :refer [initial-board player-sequence print-board score]]))

(defn- dispatch-player [board player]
  (if (= player :x)
    (play-user-turn board player)
    (play-bot-turn board player)))

(defn -main []
  (loop [board initial-board
         player player-sequence]
    (print-board board)
    (if (not= (score board) :in-progress)
      (println (score board))
      (recur (dispatch-player board (first player)) (rest player)))))
