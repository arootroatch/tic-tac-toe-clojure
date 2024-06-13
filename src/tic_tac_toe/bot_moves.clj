(ns tic-tac-toe.bot-moves
  (:require [tic-tac-toe.print-utils :refer [display-bot-move-message]]
            [tic-tac-toe.ai.minimax :refer [find-best-move]]))

(defn play-bot-turn [board player]
  (let [move (find-best-move board player)]
    (display-bot-move-message move)
    (assoc board (dec move) player)))
