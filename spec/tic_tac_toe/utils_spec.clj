(ns tic-tac-toe.utils-spec
  (:require [speclj.core :refer :all]
            [tic-tac-toe.utils :refer :all]))

(describe "utility functions"
  (with-stubs)
  (context "error handling"
    (it "throws error when invalid move"
      (should= "Please enter a valid move (1-9)" (throw-invalid-move-error))))


  (context "printing"
    (it "prints the board to the terminal"
      (with-redefs [println (stub :printer)]
        (print-board [1 :x 3 4 :o 6 :o 8 9])
        (should-have-invoked :printer {:with [1 "x" 3] [4 "o" 6] ["o" 8 9]})


        (print-board [1 2 3 4 5 6 7 8 9])
        (should-have-invoked :printer {:with [1 2 3] [4 5 6] [7 8 9]})))))

