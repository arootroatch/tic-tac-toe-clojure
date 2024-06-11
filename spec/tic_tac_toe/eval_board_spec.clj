(ns tic-tac-toe.eval-board-spec
  (:require [speclj.core :refer :all]
            [tic-tac-toe.eval-board :refer :all]))

(describe "evaluating the game board"

  (it "evaluates board state"
    (should= 10 (evaluate-board [:o :o :o :x :x :o :x 8 :x]))
    (should= 10 (evaluate-board [:o 2 :x :o :x :x :o :x :o]))
    (should= -10 (evaluate-board [1 2 :x 4 :x :o :x 7 :o]))
    (should= 0 (evaluate-board [:x :x :o :o :o :x :x :o :x])))

  (it "separates board into winning paths"
    (should= (repeat 8 (repeat 3 "")) (->paths (repeat 9 "")))
    (should= [[1 2 3] [4 5 6] [7 8 9]
              [1 4 7] [2 5 8] [3 6 9]
              [1 5 9] [3 5 7]]
             (->paths [1 2 3 4 5 6 7 8 9]))
    (should= [[:o :o :o] [4 :x 6] [7 :x :x]
              [:o 4 7] [:o :x :x] [:o 6 :x]
              [:o :x :x] [:o :x 7]]
             (->paths [:o :o :o 4 :x 6 7 :x :x])))


  (context "scoring a game"
    (it "is in progress if board is empty"
      (should= :in-progress (score (repeat 9 ""))))

    (it "is in progress if board is not full and has no winner"
      (should= :in-progress (score [:x :o :x :o :o 6 7 8 9]))
      (should= :in-progress (score [1 2 3 4 5 6 7 8 9])))

    (it "returns winner if three in a row"
      (should= "X wins!" (score [:x :x :x 4 5 6 7 8 9]))
      (should= "X wins!" (score [1 2 3 :x :x :x 7 8 9]))
      (should= "O wins!" (score [1 2 3 :o :o :o 7 8 9])))

    (it "is a tie if board is full and has no winner"
      (should= "It's a tie!" (score [:x :o :x :x :x :o :o :x :o])))
    ))