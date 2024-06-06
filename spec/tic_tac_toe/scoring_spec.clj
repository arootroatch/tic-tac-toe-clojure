(ns tic-tac-toe.scoring-spec
  (:require [speclj.core :refer :all]
            [tic-tac-toe.scoring :refer :all]))

(describe "scoring a game"
  (it "is in progress if board is empty"
    (should= :in-progress (score (repeat 9 ""))))

  (it "throws error if board is less than 9"
    (should= "Please enter a valid board" (score [])))

  (it "is in progress if board is not full and has no winner"
    (should= :in-progress (score [:x :o :x :o :o "" "" "" ""]))
    (should= :in-progress (score [1 2 3 4 5 6 7 8 9])))

  (it "returns winner if three in a row"
    (should= :x (score [:x :x :x "" "" "" "" "" ""])))

  (it "is a tie if board is full and has no winner"
    (should= "It's a tie!" (score [:x :o :x :x :x :o :o :x :o])))


  (context "->paths"
    (it "separates board into winning paths"
      (should= (repeat 8 (repeat 3 "")) (->paths (repeat 9 "")))
      (should= [[1 2 3] [4 5 6] [7 8 9]
                [1 4 7] [2 5 8] [3 6 9]
                [1 5 9] [3 5 7]]
               (->paths [1 2 3 4 5 6 7 8 9]))
      (should= [[:o :o :o] ["" :x ""] ["" :x :x]
                [:o "" ""] [:o :x :x] [:o "" :x]
                [:o :x :x] [:o :x ""]]
               (->paths [:o :o :o "" :x "" "" :x :x]))))
  )



