(ns tic-tac-toe.utils-spec
  (:require [speclj.core :refer :all]
            [tic-tac-toe.utils :refer :all]))

(describe "utility functions"
  #_(context "printing"
    (it "prints the board to the terminal"
      (should= "1 X 3\n4 O 6\nO 8 9\n"
               (with-out-str (print-board [1 :x 3 4 :o 6 :o 8 9])))

      (should= "1 2 3\n4 5 6\n7 8 9\n"
               (with-out-str (print-board [1 2 3 4 5 6 7 8 9])))))


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
      (should= "It's a tie!" (score [:x :o :x :x :x :o :o :x :o]))))


  (context "->paths"
    (it "separates board into winning paths"
      (should= (repeat 8 (repeat 3 "")) (->paths (repeat 9 "")))
      (should= [[1 2 3] [4 5 6] [7 8 9]
                [1 4 7] [2 5 8] [3 6 9]
                [1 5 9] [3 5 7]]
               (->paths [1 2 3 4 5 6 7 8 9]))
      (should= [[:o :o :o] [4 :x 6] [7 :x :x]
                [:o 4 7] [:o :x :x] [:o 6 :x]
                [:o :x :x] [:o :x 7]]
               (->paths [:o :o :o 4 :x 6 7 :x :x])))))


