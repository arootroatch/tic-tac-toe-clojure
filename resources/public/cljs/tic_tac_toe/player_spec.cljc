(ns tic-tac-toe.player-spec
  (:require [speclj.core :refer [describe context it should=]]
            [tic-tac-toe.player :as sut]))

(describe "player namespace"
  (context "switch-player"
    (it "returns :o if player is :x"
      (should= :o (sut/switch-player :x)))

    (it "returns :x if player is :o"
      (should= :x (sut/switch-player :o)))
    ))

