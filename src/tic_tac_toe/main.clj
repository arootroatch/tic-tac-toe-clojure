(ns tic-tac-toe.main
  (:require [tic-tac-toe.bot-moves]
            [tic-tac-toe.eval-board :refer [score]]
            [tic-tac-toe.human-moves]
            [tic-tac-toe.player :refer [take-turn]]
            [tic-tac-toe.ui :as ui]))

(def initial-board [1 2 3 4 5 6 7 8 9])

(def player-sequence (cycle [:x :o]))

(defn- dispatch-player [first-ai-level second-ai-level board player mode]
  (cond
    (or (and (= player :o) (= mode 2))
        (and (= player :x) (= mode 3))
        (and (= player :x) (= mode 4))) (take-turn {:level first-ai-level :board board :player player :mode mode})
    (and (= player :o) (= mode 4)) (take-turn {:level second-ai-level :board board :player player :mode mode})
    :else (take-turn {:board board :player player :mode mode})))

(defn -main []
  (let [mode (ui/prompt-user-for-mode)
        first-ai-level (if (= 1 mode) nil (ui/prompt-user-for-level 1 mode))
        second-ai-level (if (= 4 mode) (ui/prompt-user-for-level 2 mode) nil)]
    (loop [board initial-board
           player player-sequence]
      (ui/print-board board)
      (if (not= (score board) :in-progress)
        (println (score board))
        (recur (dispatch-player first-ai-level second-ai-level board (first player) mode) (rest player))))))
