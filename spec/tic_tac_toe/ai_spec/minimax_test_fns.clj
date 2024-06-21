(ns tic-tac-toe.ai-spec.minimax-test-fns
  (:require [clojure.test :refer :all]
            [tic-tac-toe.ai.minimax :refer :all]
            [clojure.math.combinatorics :as combo]
            [tic-tac-toe.eval-board :as eval-board]))

(defn- possible-combo? [moves]
  (or
    (and (= 1 (first moves)) (not (some #{5} moves)))
    (and (= 2 (first moves)) (not (some #{1} moves)))
    (and (= 3 (first moves)) (not (some #{5} moves)))
    (and (= 4 (first moves)) (not (some #{1} moves)))
    (and (= 5 (first moves)) (not (some #{1} moves)))
    (and (= 6 (first moves)) (not (some #{3} moves)))
    (and (= 7 (first moves)) (not (some #{5} moves)))
    (and (= 8 (first moves)) (not (some #{2} moves)))
    (and (= 9 (first moves)) (not (some #{5} moves)))))

(defn- play-minimax-turn [board player]
  (let [move (find-best-move board player)]
    (assoc board (dec move) player)))

(defn- play-sim-game [coll]
  (loop [moves coll
         board [1 2 3 4 5 6 7 8 9]
         player (cycle [:x :o])]
    (cond
      (not= (eval-board/score board) :in-progress) (eval-board/score board)
      (not (number? (get board (dec (first moves))))) "O wins!"
      (= (first player) :x) (recur (rest moves) (assoc board (dec (first moves)) (first player)) (rest player))
      :else (recur moves (play-minimax-turn board (first player)) (rest player)))))

(defn unbeatable? []
  (loop [all-move-combos (set (filter possible-combo? (map #(drop-last 4 %) (combo/permutations [1 2 3 4 5 6 7 8 9]))))
         lost? false
         game-count 0]
    (if (or (empty? all-move-combos) lost?)
      (not lost?)
      (recur (rest all-move-combos)
             (if (= "X wins!" (play-sim-game (first all-move-combos))) true false)
             (inc game-count)))))


(defn- play-ai-game []
  (loop [player (cycle [:x :o])
         board [1 2 3 4 5 6 7 8 9]]
    (if (not= (eval-board/score board) :in-progress)
      (eval-board/score board)
      (recur (rest player) (play-minimax-turn board (first player))))))

(defn always-ties? []
  (loop [ties? true
         games (range 1 1001)]
    (if (or (empty? games) (not ties?))
      ties?
      (recur (if (= "It's a tie!" (play-ai-game)) true false) (rest games)))))
