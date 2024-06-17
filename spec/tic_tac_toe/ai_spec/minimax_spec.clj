(ns tic-tac-toe.ai-spec.minimax-spec
  (:require [speclj.core :refer :all]
            [tic-tac-toe.ai.minimax :refer :all]
            [clojure.math.combinatorics :as combo]
            [tic-tac-toe.eval-board :as eval-board]))

(defn possible-combo? [moves]
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

(defn play-minimax-turn [board player]
  (let [move (find-best-move board player)]
    (assoc board (dec move) player)))

(defn play-sim-game [coll]
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

(describe "computer opponent - is maximizer"
  (it "finds move if next move is a win"
    (should= 2 (find-best-move [:o 2 :o :x :x :o :x 8 :x] :o))
    (should= 2 (find-best-move [:o 2 :o :x :x 6 :x 8 9] :o))
    (should= 4 (find-best-move [1 :x :x 4 :o :o :o :x :x] :o))
    (should= 3 (find-best-move [1 2 3 :x :x :o 7 :x :o] :o)))

  (it "finds move if next move is a block"
    (should= 4 (find-best-move [1 2 :o 4 :x :x 7 8 9] :o))
    (should= 1 (find-best-move [1 2 :o 4 :x 6 7 8 :x] :o))
    (should= 9 (find-best-move [:x :o :x :o :o :x 7 :x 9] :o))
    (should= 4 (find-best-move [:x :o :x 4 :o 6 :x :x :o] :o)))

  (it "finds move with most potential to win if not blocked"
    (should= 5 (find-best-move [:o :x :o :x 5 6 7 8 :x] :o)))

  (tags :slow)
  (it "plays center if first move is a corner"
    (should= 5 (find-best-move [:x 2 3 4 5 6 7 8 9] :o))
    (should= 5 (find-best-move [1 2 :x 4 5 6 7 8 9] :o))
    (should= 5 (find-best-move [1 2 3 4 5 6 :x 8 9] :o))
    (should= 5 (find-best-move [1 2 3 4 5 6 7 8 :x] :o)))

  (tags :slow)
  (it "wins or ties every possible game"
    (should= true (unbeatable?))))


