(ns tic-tac-toe.bot-moves
  (:require [tic-tac-toe.ai.easy :refer [find-easy-move]]
            [tic-tac-toe.ai.medium :refer [find-medium-move]]
            [tic-tac-toe.ai.minimax :refer [find-best-move]]
            [tic-tac-toe.print-utils :refer [display-bot-move-message]]))

(defn get-bot-move [level board player round]
  (case level
    1 (find-easy-move board)
    2 (find-medium-move board round)
    3 (find-best-move board player)))

(defn play-bot-turn [level board player round]
  (let [move (get-bot-move level board player round)]
    (display-bot-move-message move)
    (assoc board (dec move) player)))
