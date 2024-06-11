(ns tic-tac-toe.bot-moves
  (:require [tic-tac-toe.utils :refer [->paths]]))

(defn evaluate-board [board]
  (let [paths (->paths board)]
    (cond
      (some #(every? #{:x} %) paths) -10
      (some #(every? #{:o} %) paths) 10
      (every? #{:x :o} board) 0
      :else :in-progress)))

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
            score (minimax new-board false 1)]
        (if (> score best-score)
          (recur (rest available) move score)
          (recur (rest available) best-move best-score))))))

(defn play-bot-turn [board player]
  (let [move (find-best-move board player)]
    (println (str "Your opponent plays " move "!"))
    (assoc board (dec move) player)))
