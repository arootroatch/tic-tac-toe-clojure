(ns tic-tac-toe.bot-moves
  (:require [tic-tac-toe.eval-board :refer [evaluate-board]]
            [tic-tac-toe.print-utils :refer [display-bot-move-message]]))

(declare minimax)

(defn- min-move [board player depth]
  (loop [available (filter number? board)
         best-score 1000]
    (if (empty? available)
      best-score
      (let [move (first available)
            new-board (assoc board (dec move) player)
            score (minimax new-board true (inc depth))]
        (recur (rest available) (min best-score score))))))

(defn- max-move [board player depth]
  (loop [available (filter number? board)
         best-score -1000]
    (if (empty? available)
      best-score
      (let [move (first available)
            new-board (assoc board (dec move) player)
            score (minimax new-board false (inc depth))]
        (recur (rest available) (max best-score score))))))

(defn- minimax [board max? depth]
  (let [game-state (evaluate-board board)]
    (cond
      (not= :in-progress game-state) game-state
      max? (max-move board :o depth)
      :else (min-move board :x depth))))

(defn find-best-move [board player]
  (loop [available (filter number? board)
         best-move nil
         best-score -1000]
    (if (empty? available)
      best-move
      (let [move (first available)
            new-board (assoc board (dec move) player)
            score (minimax new-board false 0)]
        (if (> score best-score)
          (recur (rest available) move score)
          (recur (rest available) best-move best-score))))))

(defn play-bot-turn [board player]
  (let [move (find-best-move board player)]
    (display-bot-move-message move)
    (assoc board (dec move) player)))
