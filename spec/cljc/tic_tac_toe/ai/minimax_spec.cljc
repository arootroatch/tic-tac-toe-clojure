(ns tic-tac-toe.ai.minimax-spec
  #?(:cljs (:require-macros [speclj.core :refer [describe with-stubs redefs-around context tags it should= stub]]))
  (:require [speclj.core :refer [describe with-stubs redefs-around context tags it should= stub]]
            [tic-tac-toe.ai.minimax :as sut]
            [tic-tac-toe.ai.minimax-test-fns :as test-fns]
            [tic-tac-toe.print-utils :as print]))

(describe "computer opponent - is maximizer"
  (with-stubs)
  (redefs-around [print/display-bot-thinking-message (stub :thinking)])

  (context "prove unbeatable"
    (tags :slow)
    (it "wins or ties every possible game against human player"
      (should= true (test-fns/unbeatable? (range 1 10))))

    (it "minimax vs minimax always ties"
      (should= true (test-fns/always-ties? (range 1 10)))
      (should= true (test-fns/always-ties? (range 1 17))))
    )

  (context "plays as O"
    (it "finds move if next move is a win"
      (should= 2 (sut/find-best-move-memo [:o 2 :o :x :x :o :x 8 :x] :o false))
      (should= 2 (sut/find-best-move-memo [:o 2 :o :x :x 6 :x 8 9] :o false))
      (should= 4 (sut/find-best-move-memo [1 :x :x 4 :o :o :o :x :x] :o false))
      (should= 3 (sut/find-best-move-memo [1 2 3 :x :x :o 7 :x :o] :o false)))

    (it "finds move if next move is a block"
      (should= 4 (sut/find-best-move-memo [1 2 :o 4 :x :x 7 8 9] :o false))
      (should= 1 (sut/find-best-move-memo [1 2 :o 4 :x 6 7 8 :x] :o false))
      (should= 9 (sut/find-best-move-memo [:x :o :x :o :o :x 7 :x 9] :o false))
      (should= 4 (sut/find-best-move-memo [:x :o :x 4 :o 6 :x :x :o] :o false)))

    (context "slow"
      (tags :slow)
     (it "finds move with most potential to win if not blocked"
      (should= 5 (sut/find-best-move-memo [:o :x :o :x 5 6 7 8 :x] :o false)))

    (it "plays center if first move is a corner"
      (should= 5 (sut/find-best-move-memo [:x 2 3 4 5 6 7 8 9] :o false))
      (should= 5 (sut/find-best-move-memo [1 2 :x 4 5 6 7 8 9] :o false))
      (should= 5 (sut/find-best-move-memo [1 2 3 4 5 6 :x 8 9] :o false))
      (should= 5 (sut/find-best-move-memo [1 2 3 4 5 6 7 8 :x] :o false))))
    )


  (context "plays as X"
    (it "finds move if next move is a win"
      (should= 2 (sut/find-best-move-memo [:x 2 :x :o :o :x :o 8 :o] :x false))
      (should= 2 (sut/find-best-move-memo [:x 2 :x :o :o 6 :o 8 9] :x false))
      (should= 4 (sut/find-best-move-memo [1 :o :o 4 :x :x :x :o :o] :x false))
      (should= 3 (sut/find-best-move-memo [1 2 3 :o :o :x 7 :o :x] :x false)))

    (it "finds move if next move is a block"
      (should= 4 (sut/find-best-move-memo [1 2 :x 4 :o :o 7 8 9] :x false))
      (should= 1 (sut/find-best-move-memo [1 2 :x 4 :o 6 7 8 :o] :x false))
      (should= 9 (sut/find-best-move-memo [:o :x :o :x :x :o 7 :o 9] :x false))
      (should= 4 (sut/find-best-move-memo [:o :x :o 4 :x 6 :o :o :x] :x false)))

    (context "slow"
      (tags :slow)
     (it "finds move with most potential to win if not blocked"
      (should= 5 (sut/find-best-move-memo [:x :o :x :o 5 6 7 8 :o] :x false)))

    (it "plays center if first move is a corner"
      (should= 5 (sut/find-best-move-memo [:o 2 3 4 5 6 7 8 9] :x false))
      (should= 5 (sut/find-best-move-memo [1 2 :o 4 5 6 7 8 9] :x false))
      (should= 5 (sut/find-best-move-memo [1 2 3 4 5 6 :o 8 9] :x false))
      (should= 5 (sut/find-best-move-memo [1 2 3 4 5 6 7 8 :o] :x false))))
    )

  (context "plays 4x4 board"
    (tags :slow)
    (it "finds move if next move is a win"
      (should= 5 (sut/find-best-move-memo [:x 2 3 :x 5 :o :o :o 9 10 :x 12 13 :x 15 16] :o false))
      (should= 5 (sut/find-best-move-memo [:o 2 3 :o 5 :x :x :x 9 10 :o 12 13 :o 15 16] :x false)))

    (it "finds move if next move is a block"
      (should= 4 (sut/find-best-move-memo [:x :x :x 4 5 6 7 8 9 10 11 12 13 14 15 16] :o false)))

    (it "finds move on empty board"
      (should= 1 (sut/find-best-move-memo (vec (range 1 17)) :x false)))

    (it "finds second move"
      (should= 2 (sut/find-best-move-memo [:x 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16] :o false))
      (should= 1 (sut/find-best-move-memo [1 :x 3 4 5 6 7 8 9 10 11 12 13 14 15 16] :o false))
      (should= 1 (sut/find-best-move-memo [1 2 :x 4 5 6 7 8 9 10 11 12 13 14 15 16] :o false))
      (should= 1 (sut/find-best-move-memo [1 2 3 :x 5 6 7 8 9 10 11 12 13 14 15 16] :o false))
      (should= 1 (sut/find-best-move-memo [1 2 3 4 :x 6 7 8 9 10 11 12 13 14 15 16] :o false))
      (should= 1 (sut/find-best-move-memo [1 2 3 4 5 :x 7 8 9 10 11 12 13 14 15 16] :o false))
      (should= 1 (sut/find-best-move-memo [1 2 3 4 5 6 :x 8 9 10 11 12 13 14 15 16] :o false))
      (should= 1 (sut/find-best-move-memo [1 2 3 4 5 6 7 :x 9 10 11 12 13 14 15 16] :o false))
      (should= 1 (sut/find-best-move-memo [1 2 3 4 5 6 7 8 :x 10 11 12 13 14 15 16] :o false))
      (should= 1 (sut/find-best-move-memo [1 2 3 4 5 6 7 8 9 :x 11 12 13 14 15 16] :o false))
      (should= 1 (sut/find-best-move-memo [1 2 3 4 5 6 7 8 9 10 :x 12 13 14 15 16] :o false))
      (should= 1 (sut/find-best-move-memo [1 2 3 4 5 6 7 8 9 10 11 :x 13 14 15 16] :o false))
      (should= 1 (sut/find-best-move-memo [1 2 3 4 5 6 7 8 9 10 11 12 :x 14 15 16] :o false))
      (should= 1 (sut/find-best-move-memo [1 2 3 4 5 6 7 8 9 10 11 12 13 :x 15 16] :o false))
      (should= 1 (sut/find-best-move-memo [1 2 3 4 5 6 7 8 9 10 11 12 13 14 :x 16] :o false))
      (should= 1 (sut/find-best-move-memo [1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 :x] :o false)))

    (it "finds third move"
      (should= 3 (sut/find-best-move-memo [:x :o 3 4 5 6 7 8 9 10 11 12 13 14 15 16] :x false))
      (should= 3 (sut/find-best-move-memo [:o :x 3 4 5 6 7 8 9 10 11 12 13 14 15 16] :x false))
      (should= 2 (sut/find-best-move-memo [:o 2 :x 4 5 6 7 8 9 10 11 12 13 14 15 16] :x false))
      (should= 2 (sut/find-best-move-memo [:o 2 3 :x 5 6 7 8 9 10 11 12 13 14 15 16] :x false))
      (should= 2 (sut/find-best-move-memo [:o 2 3 4 :x 6 7 8 9 10 11 12 13 14 15 16] :x false))
      (should= 2 (sut/find-best-move-memo [:o 2 3 4 5 :x 7 8 9 10 11 12 13 14 15 16] :x false))
      (should= 2 (sut/find-best-move-memo [:o 2 3 4 5 6 :x 8 9 10 11 12 13 14 15 16] :x false))
      (should= 2 (sut/find-best-move-memo [:o 2 3 4 5 6 7 :x 9 10 11 12 13 14 15 16] :x false))
      (should= 2 (sut/find-best-move-memo [:o 2 3 4 5 6 7 8 :x 10 11 12 13 14 15 16] :x false))
      (should= 2 (sut/find-best-move-memo [:o 2 3 4 5 6 7 8 9 :x 11 12 13 14 15 16] :x false))
      (should= 2 (sut/find-best-move-memo [:o 2 3 4 5 6 7 8 9 10 :x 12 13 14 15 16] :x false))
      (should= 2 (sut/find-best-move-memo [:o 2 3 4 5 6 7 8 9 10 11 :x 13 14 15 16] :x false))
      (should= 2 (sut/find-best-move-memo [:o 2 3 4 5 6 7 8 9 10 11 12 :x 14 15 16] :x false))
      (should= 2 (sut/find-best-move-memo [:o 2 3 4 5 6 7 8 9 10 11 12 13 :x 15 16] :x false))
      (should= 2 (sut/find-best-move-memo [:o 2 3 4 5 6 7 8 9 10 11 12 13 14 :x 16] :x false))
      (should= 2 (sut/find-best-move-memo [:o 2 3 4 5 6 7 8 9 10 11 12 13 14 15 :x] :x false)))

    (it "finds fourth move"
      (should= 4 (sut/find-best-move-memo [:x :o :x 4 5 6 7 8 9 10 11 12 13 14 15 16] :o false))
      (should= 4 (sut/find-best-move-memo [:o :x :x 4 5 6 7 8 9 10 11 12 13 14 15 16] :o false))
      (should= 4 (sut/find-best-move-memo [:o :x :x 4 5 6 7 8 9 10 11 12 13 14 15 16] :o false))
      (should= 2 (sut/find-best-move-memo [:o 2 :x :x 5 6 7 8 9 10 11 12 13 14 15 16] :o false))
      (should= 2 (sut/find-best-move-memo [:o 2 :x 4 :x 6 7 8 9 10 11 12 13 14 15 16] :o false))
      (should= 2 (sut/find-best-move-memo [:o 2 :x 4 5 :x 7 8 9 10 11 12 13 14 15 16] :o false))
      (should= 2 (sut/find-best-move-memo [:o 2 :x 4 5 6 :x 8 9 10 11 12 13 14 15 16] :o false))
      (should= 2 (sut/find-best-move-memo [:o 2 :x 4 5 6 7 :x 9 10 11 12 13 14 15 16] :o false))
      (should= 2 (sut/find-best-move-memo [:o 2 :x 4 5 6 7 8 :x 10 11 12 13 14 15 16] :o false))
      (should= 2 (sut/find-best-move-memo [:o 2 :x 4 5 6 7 8 9 :x 11 12 13 14 15 16] :o false))
      (should= 2 (sut/find-best-move-memo [:o 2 :x 4 5 6 7 8 9 10 :x 12 13 14 15 16] :o false))
      (should= 2 (sut/find-best-move-memo [:o 2 :x 4 5 6 7 8 9 10 11 :x 13 14 15 16] :o false))
      (should= 2 (sut/find-best-move-memo [:o 2 :x 4 5 6 7 8 9 10 11 12 :x 14 15 16] :o false))
      (should= 2 (sut/find-best-move-memo [:o 2 :x 4 5 6 7 8 9 10 11 12 13 :x 15 16] :o false))
      (should= 2 (sut/find-best-move-memo [:o 2 :x 4 5 6 7 8 9 10 11 12 13 14 :x 16] :o false))
      (should= 2 (sut/find-best-move-memo [:o 2 3 :x 5 6 7 8 9 10 11 12 13 14 15 :x] :o false)))

    (it "finds 6th move"
      ;picks three even with no max depth
      (should= 3 (sut/find-best-move-memo [:o :o 3 :x 5 6 7 8 :x 10 11 :x 13 14 15 16] :x false)))
    )

  (context "plays 3D board"
    (it "finds potential active winning paths for given player"
      (should= [[12 :o 18] [6 :o 24]]
               (sut/get-player-paths [1 :x 3 4 5 6 7 8 9 10 11 12 13 :x :o 16 17 18 19 20 21 22 23 24 25 26 27] :o)))

    (it "find potential active winning moves for given player"
      (should= [12 18 6 24]
               (sut/get-player-moves [1 :x 3 4 5 6 7 8 9 10 11 12 13 :x :o 16 17 18 19 20 21 22 23 24 25 26 27] :o)))

    (it "finds moves with higher potential for winning"
      (should= #{24 6 12 18}
               (sut/get-relevant-moves [1 :x 3 4 5 6 7 8 9 10 11 12 13 :x :o 16 17 18 19 20 21 22 23 24 25 26 27] :o))
      (should= #{7 20 27 1 21 25 17 3 12 23 19 11 9 5 16 10 18 8}
               (sut/get-relevant-moves [1 :x 3 4 5 6 7 8 9 10 11 12 13 :x :o 16 17 18 19 20 21 22 23 24 25 26 27] :x)))

    (it "finds next move"
      (should= 7 (sut/find-best-move-memo [1 2 3 4 :x 6 7 8 9 10 11 12 :x :o 15 16 17 18 19 20 21 22 23 24 25 26 27] :o false))
      (should= 1 (sut/find-best-move-memo [1 2 3 :x 5 6 7 8 9 10 11 12 13 :o 15 :x 17 18 19 20 21 22 23 24 25 26 27] :o false))
      (should= 7 (sut/find-best-move-memo [1 2 3 :x :o :x 7 8 9 10 11 12 13 :o 15 :x 17 18 19 20 21 :o :x 24 25 26 27] :o false))
      (should= 7 (sut/find-best-move-memo [1 2 3 4 :x 6 7 8 9 10 11 :x 13 :o 15 16 17 18 19 20 21 22 23 24 25 26 27] :o false))
      (should= 24 (sut/find-best-move-memo [1 2 :x 4 5 6 7 8 9 10 11 12 :x :o :o 16 17 18 19 20 21 22 23 24 25 26 :x] :o false))
      (should= 7 (sut/find-best-move-memo [1 2 3 4 5 :x 7 8 :o 10 11 12 13 :o 15 16 :x 18 :x 20 21 :o 23 24 :x 26 27] :o false))
      (should= 7 (sut/find-best-move-memo [:x 2 3 4 5 6 7 8 9 10 11 12 13 :o :x 16 17 18 19 20 21 :x 23 24 25 26 :o] :o false))
      (should= 25 (sut/find-best-move-memo [1 2 3 4 5 6 7 8 9 10 11 12 13 :o :x 16 17 18 19 20 21 :x 23 24 25 26 27] :o false))
      (should= 27 (sut/find-best-move-memo [1 2 3 4 5 6 :x 8 9 10 11 12 13 :o 15 16 17 :x 19 20 21 22 23 24 25 26 27] :o false))
      (should= 19 (sut/find-best-move-memo [1 2 3 4 5 6 7 :x 9 10 :x 12 13 :o 15 16 :o 18 19 :o 21 22 :x 24 25 :x 27] :o false))
      (should= 7 (sut/find-best-move-memo [:o :x 3 4 5 6 7 8 9 10 11 12 :x :o 15 16 17 18 19 20 21 22 23 24 :x :o :x] :o false))
      (should= 7 (sut/find-best-move-memo [1 2 :x 4 5 6 7 8 9 10 11 12 13 :o 15 16 17 :x 19 20 21 22 23 24 25 26 27] :o false))
      (should= 20 (sut/find-best-move-memo [1 2 :x 4 5 :o 7 8 :x 10 :x 12 13 :o 15 16 17 18 :o 20 21 :x 23 24 25 26 27] :o false))
      (should= 21 (sut/find-best-move-memo [:x :o :x 4 5 6 7 8 9 10 11 12 :x :o 15 16 17 18 19 20 21 22 23 24 :o :x 27] :o false))
      (should= 23 (sut/find-best-move-memo [1 2 3 4 5 6 7 8 9 10 11 12 13 :x 15 16 17 18 19 20 21 22 23 24 25 26 27] :o false))
      (should= 3 (sut/find-best-move-memo [:x 2 3 :x 5 6 :o :x :o :o 11 12 13 :x 15 16 17 :x :x 20 21 22 :o 24 25 26 :o] :o false)))
    ))


