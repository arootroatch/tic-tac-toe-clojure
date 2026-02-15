(ns tic-tac-toe.ai.easy-medium-spec
  #?(:cljs (:require-macros [speclj.core :refer [describe with-stubs it should= should-contain stub context]]))
  (:require [speclj.core :refer [describe with-stubs it should= should-contain stub context]]
            [speclj.stub :as stub]
            [tic-tac-toe.ai.easy-medium :as sut]))

(describe "medium mode"
  (with-stubs)

  (it "blocks a win if possible"
    (should= 5 (sut/find-medium-move [1 2 3 :x 5 :x 7 8 9]))
    (should= 7 (sut/find-medium-move [:x 2 3 :x 5 6 7 8 9]))
    (should= 3 (sut/find-medium-move [1 2 3 4 :x 6 :x 8 9])))

  (it "wins if possible"
    (should= 5 (sut/find-medium-move [1 2 3 :o 5 :o 7 8 9]))
    (should= 7 (sut/find-medium-move [:o 2 3 :o 5 6 7 8 9]))
    (should= 3 (sut/find-medium-move [1 2 3 4 :o 6 :o 8 9])))

  (it "play random available move if can't win or block"
    (should-contain (sut/find-medium-move [:o :x :o 4 :x 6 :x :o :x]) [4 6])
    (should-contain (sut/find-medium-move [:x 2 3 4 :o :x 7 8 :o]) [2 3 4 7 8])
    (with-redefs [sut/find-easy-move (stub :find-easy-move)]
      (sut/find-medium-move [:x 2 3 4 :o :x 7 8 :o])
      (sut/find-medium-move [:o :x :o 4 :x 6 :x :o :x])
      (should= [[[:x 2 3 4 :o :x 7 8 :o]] [[:o :x :o 4 :x 6 :x :o :x]]]
               (stub/invocations-of :find-easy-move))))

  (it "plays center square if first move is a corner"
    (should= 5 (sut/find-medium-move [:x 2 3 4 5 6 7 8 9]))
    (should= 5 (sut/find-medium-move [1 2 :x 4 5 6 7 8 9]))
    (should= 5 (sut/find-medium-move [1 2 3 4 5 6 :x 8 9]))
    (should= 5 (sut/find-medium-move [1 2 3 4 5 6 7 8 :x]))
    )

  (it "plays top left if first move is center"
    (should= 1 (sut/find-medium-move [1 2 3 4 :x 6 7 8 9])))


  (context "get-winning-move"
    (it "finds move that will win the game for the given player"
      (should= 5 (sut/get-winning-move [1 2 3 :x 5 :x 7 8 9] :x))
      (should= 7 (sut/get-winning-move [:x 2 3 :x 5 6 7 8 9] :x))
      (should= 3 (sut/get-winning-move [1 2 3 4 :x 6 :x 8 9] :x))
      (should= 8 (sut/get-winning-move [1 2 3 4 :x :x :x 8 9 10 11 12 13 14 15 16] :x))
      (should= 16 (sut/get-winning-move [:o 2 3 4 5 :o 7 8 9 10 :o 12 13 14 15 16] :o)))

    (it "returns empty when no path is one move from winning for the given player"
      (should= nil (sut/get-winning-move [:x :x :o :x :x :o :o :o :x] :x))
      (should= nil (sut/get-winning-move [:o :x :o 4 :x 6 :x :o :x] :x))
      (should= nil (sut/get-winning-move [:x 2 3 4 :o :x 7 8 :o] :x))
      (should= nil (sut/get-winning-move [1 2 3 4 5 6 7 8 9] :x))
      (should= nil (sut/get-winning-move [:o 2 3 4 5 6 7 8 9] :o)))
    )

  (context "find-easy-move"
    (it "picks an available move at random"
      (should-contain (sut/find-easy-move [1 2 3 4 5 6 7 8 9]) [1 2 3 4 5 6 7 8 9])
      (should-contain (sut/find-easy-move [:x 2 3 4 5 6 7 8 9]) [2 3 4 5 6 7 8 9])
      (should-contain (sut/find-easy-move [:x :x 3 4 5 :o 7 :o :x]) [3 4 5 7])
      )))