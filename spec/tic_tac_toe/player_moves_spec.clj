(ns tic-tac-toe.player-moves-spec
  (:require [speclj.core :refer :all]
            [tic-tac-toe.player-moves :refer :all]))

(describe "making moves"
  (it "throws error if invalid entry"
    (should= "Please enter a valid move (1-9)" (set-move "" [] :x)))
    (it "updates the board with the inputted move"
      (should= [:x "" "" "" "" "" "" "" ""] (set-move 1 ["" "" "" "" "" "" "" "" ""] :x))))