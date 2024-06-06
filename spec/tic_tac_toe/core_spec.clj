(ns tic-tac-toe.core-spec
  (:require [speclj.core :refer :all]
            [tic-tac-toe.core :refer :all]))

(describe "tic-tac-toe"

  (context "scoring a game"
    (it "is in progress if board is empty"
      #_(should= :in-progress (score []))
      (should= :in-progress (score (repeat 9 ""))))

    (it "throws error if board is less than 9"
      (should= "Please enter a valid board" (score [])))

    (it "is in progress if board is not full"
      (should= :in-progress (score [:x :o :x :o :o "" "" "" ""])))

    #_(it "returns winner if three in a row"
        (should= :x (score [:x :x :x "" "" "" "" "" ""]))))


  (context "->triplets"
    (it "throws error if board is less than 9"
      (should= "Please enter a valid board" (score [])))

    (it "separates board into winning paths"
      (should= (repeat 8 (repeat 3 "")) (->paths (repeat 9 "")))
      (should= [[1 2 3] [4 5 6] [7 8 9]
                [1 4 7] [2 5 8] [3 6 9]
                [1 5 9] [3 5 7]]
               (->paths [1 2 3 4 5 6 7 8 9]))
      (should= [[:o :o :o] ["" :x ""] ["" :x :x]
                [:o "" ""] [:o :x :x] [:o "" :x]
                [:o :x :x] [:o :x ""]]
               (->paths [:o :o :o "" :x "" "" :x :x])))))


