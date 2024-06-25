(ns tic-tac-toe.ai.minimax
  (:require [tic-tac-toe.eval-board :refer [evaluate-board]]))

(declare minimax)

(defn- switch-player [player]
  (if (= player :x) :o :x))

(defn- minmax-move [board max? player depth alpha beta]
  (loop [available (filter number? board)
         best-score (if max? -1000 1000)
         new-alpha alpha
         new-beta beta]
    (if (or (empty? available) (> alpha beta))
      best-score
      (let [move (first available)
            new-board (assoc board (dec move) player)
            score (minimax new-board (not max?) (inc depth) (switch-player player) new-alpha new-beta)]
        (recur (rest available)
               ((if max? max min) best-score score)
               (if max? (max alpha score) alpha)
               (if max? beta (min beta score)))))))

(def minmax-move-memo (memoize minmax-move))

(defn- minimax [board max? depth player alpha beta]
  (let [maximizer (if max? player (switch-player player))
        game-state (evaluate-board board depth maximizer)]
    (cond (not= :in-progress game-state) game-state
          (> depth 4) 0
          :else (minmax-move-memo board max? player depth alpha beta))))

(defn- search-with-minimax [board player available]
  (loop [available available
         best-move -1
         best-score -1000]
    (if (empty? available)
      best-move
      (let [move (first available)
            new-board (assoc board (dec move) player)
            score (minimax new-board false 0 (switch-player player) -1000 1000)]
          (recur (rest available) (if (> score best-score) move best-move) (max score best-score))))))

(def search-with-minimax-memo (memoize search-with-minimax))

(defn- find-best-move [board player]
  (let [available (filter number? board)]
    (cond (every? number? board) 1
          (>= (count available) 13) (first available)
          :else (search-with-minimax-memo board player available))))

(def find-best-move-memo (memoize find-best-move))
