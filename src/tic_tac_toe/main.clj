(ns tic-tac-toe.main
  (:require [tic-tac-toe.bot-moves]
            [tic-tac-toe.eval-board :refer [score]]
            [tic-tac-toe.human-moves]
            [tic-tac-toe.player :refer [take-turn]]
            [tic-tac-toe.ui :as ui]))

(def initial-board [1 2 3 4 5 6 7 8 9])

(def player-sequence (cycle [:x :o]))

(defn- dispatch-player [level board player mode]
  (cond
    (or (and (= player :o) (= mode 2))
        (and (= player :x) (= mode 3))) (take-turn {:level level :board board :player player :mode mode})
    :else (take-turn {:level 0 :board board :player player :mode mode})))

(defn -main []
  (let [mode (ui/prompt-user-for-mode)
        level (if (= 1 mode) 0 (ui/prompt-user-for-level))]
    (loop [board initial-board
           player player-sequence]
      (ui/print-board board)
      (if (not= (score board) :in-progress)
        (println (score board))
        (recur (dispatch-player level board (first player) mode) (rest player))))))
