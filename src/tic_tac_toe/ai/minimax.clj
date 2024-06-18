(ns tic-tac-toe.ai.minimax
  (:require [tic-tac-toe.eval-board :refer [evaluate-board]]))

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

(def min-move (memoize min-move))

(defn- max-move [board player depth]
  (loop [available (filter number? board)
         best-score -1000]
    (if (empty? available)
      best-score
      (let [move (first available)
            new-board (assoc board (dec move) player)
            score (minimax new-board false (inc depth))]
        (recur (rest available) (max best-score score))))))

(def max-move (memoize max-move))

(defn- minimax [board max? depth]
  (let [game-state (evaluate-board board depth)]
    (cond
      (not= :in-progress game-state) game-state
      max? (max-move board :o depth)
      :else (min-move board :x depth))))

(defn- find-best-move [board player]
  (loop [available (filter number? board)
         best-move nil
         best-score -1000]
    (if (empty? available)
      best-move
      (let [move (first available)
            new-board (assoc board (dec move) player)
            score (minimax new-board false 0)]
        (prn "score" score)
        (if (> score best-score)
          (recur (rest available) move score)
          (recur (rest available) best-move best-score))))))

(def find-best-move (memoize find-best-move))
