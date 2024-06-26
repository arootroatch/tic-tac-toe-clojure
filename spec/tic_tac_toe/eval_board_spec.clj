(ns tic-tac-toe.eval-board-spec
  (:require [speclj.core :refer :all]
            [tic-tac-toe.eval-board :refer :all]))

(describe "evaluating the game board"

  (context "->paths"
    (it "separates board into winning 3x3 paths"
      (should= (repeat 8 (repeat 3 "")) (->paths (repeat 9 "")))
      (should= [[1 2 3] [4 5 6] [7 8 9]
                [1 4 7] [2 5 8] [3 6 9]
                [1 5 9] [3 5 7]]
               (->paths [1 2 3 4 5 6 7 8 9]))
      (should= [[:o :o :o] [4 :x 6] [7 :x :x]
                [:o 4 7] [:o :x :x] [:o 6 :x]
                [:o :x :x] [:o :x 7]]
               (->paths [:o :o :o 4 :x 6 7 :x :x])))

    (it "separate board into winning 4x4 paths"
      (should= (repeat 10 (repeat 4 "")) (->paths (repeat 16 "")))
      (should= [[1 2 3 4] [5 6 7 8] [9 10 11 12] [13 14 15 16]
                [1 5 9 13] [2 6 10 14] [3 7 11 15] [4 8 12 16]
                [1 6 11 16] [4 7 10 13]]
               (->paths [1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16])))

    (it "separate board into winning 3 dimensional paths"
      #_(should= (repeat 49 (repeat 3 "")) (->paths (repeat 27 "")))
      (should= [[1 2 3] [4 5 6] [7 8 9] [10 11 12] [13 14 15] [16 17 18] [19 20 21] [22 23 24] [25 26 27] ;all 2D rows
                [1 4 7] [2 5 8] [3 6 9] [10 13 16] [11 14 17] [12 15 18] [19 22 25] [20 23 26] [21 24 27] ;all 2D columns
                [1 5 9] [10 14 18] [19 23 27] [3 5 7] [12 14 16] [21 23 25] ;all 2D diagonals l-r then r-l
                [1 11 21] [1 13 25] [1 14 27] [3 14 25] [3 15 27] [7 13 19] [8 14 20] [9 15 21] [7 14 21] [7 17 27] ;3D diagonals
                [3 11 19] [9 17 25] [9 14 19] [2 14 26] [4 14 24] [6 14 22] ;3D diagonals
                [1 10 19] [2 11 20] [3 12 21] [4 13 22] [5 14 23] [6 15 24] [7 16 25] [8 17 26] [9 18 27]] ;3D columns
               (->paths (range 1 28))))
    )


  (context "evaluate-board"
    (it "evaluates board state with O as maximizer"
      (should= 10 (evaluate-board [:o :o :o :x :x :o :x 8 :x] 0 :o))
      (should= 10 (evaluate-board [:o 2 :x :o :x :x :o :x :o] 0 :o))
      (should= 8 (evaluate-board [:o 2 :x :o :x :x :o :x :o] 2 :o))
      (should= -10 (evaluate-board [1 2 :x 4 :x :o :x 7 :o] 0 :o))
      (should= -8 (evaluate-board [1 2 :x 4 :x :o :x 7 :o] 2 :o))
      (should= 0 (evaluate-board [:x :x :o :o :o :x :x :o :x] 0 :o))
      (should= 0 (evaluate-board [:x :x :o :o :o :x :x :o :x] 2 :o)))

    (it "evaluates board state with X as maximizer"
      (should= 10 (evaluate-board [:x :x :x :o :o :x :o 8 :o] 0 :x))
      (should= 10 (evaluate-board [:x 2 :o :x :o :o :x :o :x] 0 :x))
      (should= 8 (evaluate-board [:x 2 :o :x :o :o :x :o :x] 2 :x))
      (should= -10 (evaluate-board [1 2 :o 4 :o :x :o 7 :x] 0 :x))
      (should= -8 (evaluate-board [1 2 :o 4 :o :x :o 7 :x] 2 :x))
      (should= 0 (evaluate-board [:o :o :x :x :x :o :o :x :o] 0 :x))
      (should= 0 (evaluate-board [:o :o :x :x :x :o :o :x :o] 2 :x)))
    )



  (context "scoring a game"
    (it "is in progress if board is empty"
      (should= :in-progress (score (repeat 9 ""))))

    (it "is in progress if board is not full and has no winner"
      (should= :in-progress (score [:x :o :x :o :o 6 7 8 9]))
      (should= :in-progress (score [1 2 3 4 5 6 7 8 9])))

    (it "returns winner if three in a row on 3x3"
      (should= "X wins!" (score [:x :x :x 4 5 6 7 8 9]))
      (should= "X wins!" (score [1 2 3 :x :x :x 7 8 9]))
      (should= "O wins!" (score [1 2 3 :o :o :o 7 8 9])))

    (it "returns winner if four in a row on 4x4"
      (should= "X wins!" (score [:x :x :x :x 5 6 7 8 9 10 11 12 13 14 15 16]))
      (should= "X wins!" (score [1 2 3 4 :x :x :x :x 9 10 11 12 13 14 15 16]))
      (should= "X wins!" (score [:x 2 3 4 :x 6 7 8 :x 10 11 12 :x 14 15 16]))
      (should= "X wins!" (score [:x 2 3 4 5 :x 7 8 9 10 :x 12 13 14 15 :x]))
      )

    (it "returns winner on 3x3x3 board"
      (should= "X wins!" (score (concat [:x] (range 2 14) [:x] (range 15 27) [:x]))))

    (it "is a tie if board is full and has no winner"
      (should= "It's a tie!" (score [:x :o :x :x :x :o :o :x :o]))
      (should= "It's a tie!" (score [:x :o :x :x :x :o :o :x :o :x :o :x :o :x :x :o])))
    ))