(ns tic-tac-toe.utils-spec
  (:require [speclj.core :refer :all]
            [tic-tac-toe.utils :refer :all]))

(describe "utility functions"
  (context "printing"
    (it "prints the board to the terminal"
      (should= "1 X 3\n4 O 6\nO 8 9\n"
               (with-out-str (print-board [1 :x 3 4 :o 6 :o 8 9])))

      (should= "1 2 3\n4 5 6\n7 8 9\n"
               (with-out-str (print-board [1 2 3 4 5 6 7 8 9]))))))



