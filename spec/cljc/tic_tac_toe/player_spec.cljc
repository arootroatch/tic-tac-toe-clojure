(ns tic-tac-toe.player-spec
  (:require [speclj.core :refer :all]
            [tic-tac-toe.player :refer :all]))

(describe "player namespace"
  (context "switch-player"
    (it "returns :o if player is :x"
      (should= :o (switch-player :x)))

    (it "returns :x if player is :o"
      (should= :x (switch-player :o)))
    ))

