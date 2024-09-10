(ns tic-tac-toe.bot-moves
  (:require [tic-tac-toe.ai.easy-medium :refer [find-medium-move find-easy-move]]
            [tic-tac-toe.ai.minimax :refer [find-best-move-memo]]
            [tic-tac-toe.player :as player]
            [tic-tac-toe.print-utils :refer [display-bot-move-message]]))

(defn play-bot-move [move board mode player ui]
  (when (= ui :tui) (display-bot-move-message move mode player))
  (assoc board (dec move) player))

(defmethod player/take-turn 1 [{:keys [board mode player ui]}]
  (let [move (find-easy-move board)]
    (play-bot-move move board mode player ui)))

(defmethod player/take-turn 2 [{:keys [board mode player ui]}]
  (let [move (find-medium-move board)]
    (play-bot-move move board mode player ui)))

(defmethod player/take-turn 3 [{:keys [board mode player ui]}]
  (let [move (find-best-move-memo board player ui)]
    (play-bot-move move board mode player ui)))