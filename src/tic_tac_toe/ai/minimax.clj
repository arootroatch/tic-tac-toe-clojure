(ns tic-tac-toe.ai.minimax
  (:require [tic-tac-toe.ai.easy-medium :as ai]
            [tic-tac-toe.ai.lookup-tables :refer :all]
            [tic-tac-toe.eval-board :refer [->paths evaluate-board]]
            [tic-tac-toe.tui.print-utils :as print]))

(declare minimax)

(defn- switch-player [player]
  (if (= player :x) :o :x))

(defn get-player-paths [board player]
  (let [paths (->paths board)]
    (filter #(and (not (contains? (set %) (switch-player player))) (some #{player} %)) paths)))

(defn get-player-moves [board player]
  (->> (get-player-paths board player)
       flatten
       (filter number?)))

(defn get-relevant-moves [board player]
  (let [available (filter number? board)
        opponent-moves (get-player-moves board (switch-player player))
        player-moves (get-player-moves board player)
        overlap (filter (set player-moves) (set opponent-moves))]
    (cond
      (and (> (count overlap) 3) (> (count available) 16)) (if (> (count overlap) 6) (take 6 overlap) overlap)
      (and (not-empty player-moves) (> (count available) 16)) (set player-moves)
      (> (count available) 16) (set opponent-moves)
      :else available)))

(defn- minimax-move [board max? player depth alpha beta]
  (loop [available (get-relevant-moves board player)
         best-score (if max? -1000 1000)
         new-alpha alpha
         new-beta beta]
    (if (or (empty? available) (> alpha beta))
      best-score
      (let [move (first available)
            new-board (assoc board (dec move) player)
            score (minimax new-board (not max?) (inc depth) (switch-player player) new-alpha new-beta)]
        (if max?
          (recur (rest available) (max best-score score) (max alpha score) beta)
          (recur (rest available) (min best-score score) alpha (min beta score)))))))

(def minimax-move-memo (memoize minimax-move))

(defn- minimax [board max? depth player alpha beta]
  (let [maximizer (if max? player (switch-player player))
        game-state (evaluate-board board depth maximizer)]
    (cond (not= :in-progress game-state) game-state
          (> depth 4) 0
          :else (minimax-move-memo board max? player depth alpha beta))))

(defn- search-with-minimax [board player gui]
  (loop [available (get-relevant-moves board player)
         best-move -1
         best-score -1000]
    (when (not gui) (print/display-bot-thinking-message player))
    (if (empty? available)
      best-move
      (let [move (first available)
            new-board (assoc board (dec move) player)
            score (minimax new-board false 0 (switch-player player) -1000 1000)]
        (recur (rest available) (if (> score best-score) move best-move) (max score best-score))))))

(def search-with-minimax-memo (memoize search-with-minimax))

(defn- find-best-move [board player gui]
  (let [available (filter number? board)
        winning-move (ai/get-winning-move board player)
        blocking-move (ai/get-winning-move board (switch-player player))
        move-table (if (= player :x) move-table-x move-table-o)]
    (cond (every? number? board) (if (= 27 (count board)) 14 1)
          (some? winning-move) winning-move
          (some? blocking-move) blocking-move
          (and (= 16 (count board)) (>= (count available) 12)) (first available)
          (and (= 27 (count board)) (number? (nth board 13))) 14
          (and (= 27 (count board)) (contains? move-table board)) (get move-table board)
          :else (search-with-minimax-memo board player gui))))

(def find-best-move-memo (memoize find-best-move))
