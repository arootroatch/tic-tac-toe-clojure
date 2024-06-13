(ns tic-tac-toe.ai-spec.easy-spec
  (:require [speclj.core :refer :all]
            [tic-tac-toe.ai.easy :refer :all]))

(describe "easy mode"
  (it "picks an available move at random"
    (should-contain (find-easy-move [1 2 3 4 5 6 7 8 9]) [1 2 3 4 5 6 7 8 9])
    (should-contain (find-easy-move [:x 2 3 4 5 6 7 8 9]) [2 3 4 5 6 7 8 9])
    (should-contain (find-easy-move [:x :x 3 4 5 :o 7 :o :x]) [3 4 5 7])
    ))