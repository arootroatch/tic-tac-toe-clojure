(ns tic-tac-toe.bot-moves
  (:require [tic-tac-toe.ai.easy :refer [find-easy-move]]
            [tic-tac-toe.ai.medium :refer [find-medium-move]]
            [tic-tac-toe.ai.minimax :refer [find-best-move]]
            [tic-tac-toe.ui :refer [display-bot-move-message]]))

(defn get-bot-move [level board player]
  (case level
    1 (find-easy-move board)
    2 (find-medium-move board)
    3 (find-best-move board player)))

(defn play-bot-turn [level board player]
  (let [move (get-bot-move level board player)]
    (display-bot-move-message move)
    (assoc board (dec move) player)))
