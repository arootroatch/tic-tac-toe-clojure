(ns tic-tac-toe.print-utils-spec
  (:require [speclj.core :refer :all]
            [tic-tac-toe.print-utils :refer :all]))

(def purple "\u001b[35m")

(def reset "\u001b[0m")

(describe "utility functions"
  (it "prints the board to the terminal"
    (should= (str purple 1 reset " " purple 2 reset " " purple 3 reset "\n"
                  purple 4 reset " " purple 5 reset " " purple 6 reset "\n"
                  purple 7 reset " " purple 8 reset " " purple 9 reset "\n")
             (with-out-str (print-board [1 2 3 4 5 6 7 8 9])))
    (should= (str purple 1 reset " X " purple 3 reset "\n"
                  purple 4 reset " O " purple 6 reset "\n"
                  "O " purple 8 reset " " purple 9 reset "\n")
             (with-out-str (print-board [1 :x 3 4 :o 6 :o 8 9]))))

  (it "asks for a valid move"
    (should= "Please choose an empty cell\n"
             (with-out-str (display-invalid-move-error))))

  (it "asks user to input a move"
    (should= "Please enter your move (type 1-9 and hit enter):\n"
             (with-out-str (prompt-user-for-move)))))


