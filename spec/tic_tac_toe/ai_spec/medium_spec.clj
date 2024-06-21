(ns tic-tac-toe.ai-spec.medium-spec
  (:require [speclj.core :refer :all]
            [speclj.stub :as stub]
            [tic-tac-toe.ai.easy :as easy]
            [tic-tac-toe.ai.medium :refer :all]))

(describe "medium mode"
  (with-stubs)

  (it "blocks a win if possible"
    (should= 5 (find-medium-move [1 2 3 :x 5 :x 7 8 9]))
    (should= 7 (find-medium-move [:x 2 3 :x 5 6 7 8 9]))
    (should= 3 (find-medium-move [1 2 3 4 :x 6 :x 8 9])))

  (it "wins if possible"
    (should= 5 (find-medium-move [1 2 3 :o 5 :o 7 8 9]))
    (should= 7 (find-medium-move [:o 2 3 :o 5 6 7 8 9]))
    (should= 3 (find-medium-move [1 2 3 4 :o 6 :o 8 9])))

  (it "play random available move if can't win or block"
    (should-contain (find-medium-move [:o :x :o 4 :x 6 :x :o :x]) [4 6])
    (should-contain (find-medium-move [:x 2 3 4 :o :x 7 8 :o]) [2 3 4 7 8])
    (with-redefs [easy/find-easy-move (stub :find-easy-move)]
      (find-medium-move [:x 2 3 4 :o :x 7 8 :o])
      (find-medium-move [:o :x :o 4 :x 6 :x :o :x])
      (should= [[[:x 2 3 4 :o :x 7 8 :o]] [[:o :x :o 4 :x 6 :x :o :x]]]
               (stub/invocations-of :find-easy-move))))

  (it "plays center square if first move is a corner"
    (should= 5 (find-medium-move [:x 2 3 4 5 6 7 8 9]))
    (should= 5 (find-medium-move [1 2 :x 4 5 6 7 8 9]))
    (should= 5 (find-medium-move [1 2 3 4 5 6 :x 8 9]))
    (should= 5 (find-medium-move [1 2 3 4 5 6 7 8 :x]))
    )

  (it "plays top left if first move is center"
    (should= 1 (find-medium-move [1 2 3 4 :x 6 7 8 9])))


  (context "path-to-win"
    (it "finds when a path is one move from winning for the given player"
      (should= [:x 5 :x] (path-to-win [1 2 3 :x 5 :x 7 8 9] :x))
      (should= [:x :x 7] (path-to-win [:x 2 3 :x 5 6 7 8 9] :x))
      (should= [3 :x :x] (path-to-win [1 2 3 4 :x 6 :x 8 9] :x)))

    (it "returns empty when no path is one move from winning for the given player"
      (should= [] (path-to-win [:x :x :o :x :x :o :o :o :x] :x))
      (should= [] (path-to-win [:o :x :o 4 :x 6 :x :o :x] :x))
      (should= [] (path-to-win [:x 2 3 4 :o :x 7 8 :o] :x))
      (should= [] (path-to-win [1 2 3 4 5 6 7 8 9] :x))
      (should= [] (path-to-win [:o 2 3 4 5 6 7 8 9] :o))

      )
    ))