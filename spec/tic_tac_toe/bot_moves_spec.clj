(ns tic-tac-toe.bot-moves-spec
  (:require [speclj.core :refer :all]
            [tic-tac-toe.bot-moves :refer :all]))

(describe "computer opponent - is maximizer"
  (it "finds move if next move is a win"
    (should= 2 (find-best-move [:o 2 :o :x :x :o :x 8 :x] :o))
    (should= 4 (find-best-move [1 :x :x 4 :o :o :o :x :x] :o))
    (should= 3 (find-best-move [1 2 3 :x :x :o 7 :x :o] :o)))
  (it "finds move if next move is a block"
    (should= 4 (find-best-move [1 2 :o 4 :x :x 7 8 9] :o))
    (should= 1 (find-best-move [1 2 :o 4 :x 6 7 8 :x] :o))
    (should= 9 (find-best-move [:x :o :x :o :o :x 7 :x 9] :o))))