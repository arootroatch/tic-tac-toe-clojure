(ns tic-tac-toe.print-utils-spec
  (:require [speclj.core :refer :all]
            [tic-tac-toe.print-utils :refer :all]))

(defn purple [s]
  (str "\u001B[35m" s))

(defn white [s]
  (str "\u001B[0m" s))

(describe "utility functions"
  (it "prints the board to the terminal"
    (should= "1 X 3\n4 O 6\nO 8 9\n"
             (with-out-str (print-board [1 :x 3 4 :o 6 :o 8 9])))
    (should= "1 2 3\n4 5 6\n7 8 9\n"
             (with-out-str (print-board [1 2 3 4 5 6 7 8 9]))))

  (it "asks for a valid move"
    (should= "Please choose an empty cell\n" (with-out-str (display-invalid-move-error))))

  (it "asks user to input a move"
    (should= "Please enter your move (type 1-9 and hit enter):\n" (with-out-str (prompt-user-for-move))))

  )


