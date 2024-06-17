(ns tic-tac-toe.bot-moves-spec
  (:require [speclj.core :refer :all]
            [speclj.stub :as stub]
            [tic-tac-toe.ai.easy :refer [find-easy-move]]
            [tic-tac-toe.ai.medium :refer [find-medium-move]]
            [tic-tac-toe.ai.minimax :refer [find-best-move]]
            [tic-tac-toe.bot-moves :refer :all]))

(describe "playing bot moves"
  (with-stubs)
  (redefs-around [find-easy-move (stub :find-easy-move)
                  find-medium-move (stub :find-medium-move)
                  find-best-move (stub :find-best-move)])

  (it "calls find-easy-move"
    (get-bot-move 1 [1 2 3 4 5 6 7 8 9] :o)
    (get-bot-move 1 [:x 2 3 4 5 6 7 8 9] :o)
    (should= [[[1 2 3 4 5 6 7 8 9]] [[:x 2 3 4 5 6 7 8 9]]]
             (stub/invocations-of :find-easy-move))
    #_(should-have-invoked :find-easy-move {:with [[[1 2 3 4 5 6 7 8 9]] [[:x 2 3 4 5 6 7 8 9]]]}))

  (it "calls find-medium-move"
    (get-bot-move 2 [1 2 3 4 5 6 7 8 9] :o)
    (get-bot-move 2 [:x 2 3 4 5 6 7 8 9] :o)
    (should= [[[1 2 3 4 5 6 7 8 9]] [[:x 2 3 4 5 6 7 8 9]]]
             (stub/invocations-of :find-medium-move)))

  (it "calls find-best-move"
    (get-bot-move 3 [1 2 3 4 5 6 7 8 9] :o)
    (get-bot-move 3 [:x 2 3 4 5 6 7 8 9] :o)
    (should= [[[1 2 3 4 5 6 7 8 9] :o] [[:x 2 3 4 5 6 7 8 9] :o]]
             (stub/invocations-of :find-best-move)))

  )
