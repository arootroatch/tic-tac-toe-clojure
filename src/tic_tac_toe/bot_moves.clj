(ns tic-tac-toe.bot-moves
  (:require [tic-tac-toe.ai.easy :refer [find-easy-move]]
            [tic-tac-toe.ai.medium :refer [find-medium-move]]
            [tic-tac-toe.ai.minimax :refer [find-best-move]]
            [tic-tac-toe.player :as player]
            [tic-tac-toe.ui :refer [display-bot-move-message]]))

(defn play-bot-move [board move player]
  (display-bot-move-message move)
  (assoc board (dec move) player))

(defmethod player/take-turn 1 [{:keys [board player]}]
  (let [move (find-easy-move board)]
    (play-bot-move board move player)))

(defmethod player/take-turn 2 [{:keys [board player]}]
  (let [move (find-medium-move board)]
    (play-bot-move board move player)))

(defmethod player/take-turn 3 [{:keys [board player]}]
  (let [move (find-best-move board player)]
    (play-bot-move board move player)))

