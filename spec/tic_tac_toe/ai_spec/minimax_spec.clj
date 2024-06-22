(ns tic-tac-toe.ai-spec.minimax-spec
  (:require [speclj.core :refer :all]
            [tic-tac-toe.ai.minimax :refer :all]
            [tic-tac-toe.ai-spec.minimax-test-fns :refer :all]))

(describe "computer opponent - is maximizer"

  (context "plays as O"
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
    )


  (context "plays as X"
    (it "finds move if next move is a win"
      (should= 2 (find-best-move [:x 2 :x :o :o :x :o 8 :o] :x))
      (should= 2 (find-best-move [:x 2 :x :o :o 6 :o 8 9] :x))
      (should= 4 (find-best-move [1 :o :o 4 :x :x :x :o :o] :x))
      (should= 3 (find-best-move [1 2 3 :o :o :x 7 :o :x] :x)))

    (it "finds move if next move is a block"
      (should= 4 (find-best-move [1 2 :x 4 :o :o 7 8 9] :x))
      (should= 1 (find-best-move [1 2 :x 4 :o 6 7 8 :o] :x))
      (should= 9 (find-best-move [:o :x :o :x :x :o 7 :o 9] :x))
      (should= 4 (find-best-move [:o :x :o 4 :x 6 :o :o :x] :x)))

    (it "finds move with most potential to win if not blocked"
      (should= 5 (find-best-move [:x :o :x :o 5 6 7 8 :o] :x)))

    (tags :slow)
    (it "plays center if first move is a corner"
      (should= 5 (find-best-move [:o 2 3 4 5 6 7 8 9] :x))
      (should= 5 (find-best-move [1 2 :o 4 5 6 7 8 9] :x))
      (should= 5 (find-best-move [1 2 3 4 5 6 :o 8 9] :x))
      (should= 5 (find-best-move [1 2 3 4 5 6 7 8 :o] :x)))
    )

  (context "plays 4x4 board"
    (it "finds move if next move is a win"
      (should= 5 (find-best-move [:x 2 3 :x 5 :o :o :o 9 10 :x 12 13 :x 15 16] :o))
      (should= 5 (find-best-move [:o 2 3 :o 5 :x :x :x 9 10 :o 12 13 :o 15 16] :x)))

    #_(focus-it "finds move on empty board"
      (should= nil (find-best-move (vec (range 1 17)) :x)))
    )

  (tags :slow)
  (it "wins or ties every possible game against human player"
    (should= true (unbeatable?)))

  (it "minimax vs minimax always ties"
    (should= true (always-ties?))))


