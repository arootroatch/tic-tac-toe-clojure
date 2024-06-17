(ns tic-tac-toe.ui-spec
  (:require [speclj.core :refer :all]
            [speclj.stub :as stub]
            [tic-tac-toe.ui :refer :all]))

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
             (with-out-str (prompt-user-for-move))))

  (context "prompt-user-for-level"
    (with-stubs)
    (redefs-around [println (stub :println)])

    (it "asks user to select level of difficulty"
      (with-in-str "1" (prompt-user-for-level))
      (with-in-str "2" (prompt-user-for-level))
      (with-in-str "3" (prompt-user-for-level))
      (should= [["Please select level of difficulty:"] ["1 - Easy"] ["2 - Medium"] ["3 - Unbeatable"]
                ["Easy mode activated!"]
                ["Please select level of difficulty:"] ["1 - Easy"] ["2 - Medium"] ["3 - Unbeatable"]
                ["Medium mode activated!"]
                ["Please select level of difficulty:"] ["1 - Easy"] ["2 - Medium"] ["3 - Unbeatable"]
                ["Unbeatable mode activated!"]]
               (stub/invocations-of :println)))

    (it "gets user selection 1-3"
      (should= 1 (with-in-str "1" (prompt-user-for-level)))
      (should= 2 (with-in-str "2" (prompt-user-for-level)))
      (should= 3 (with-in-str "3" (prompt-user-for-level))))

    (it "rejects input that is not 1-3"
      (should= 1 (with-in-str "4\n1" (prompt-user-for-level))))

    (it "rejects non-numeric input"
      (should= 1 (with-in-str "blah\n1" (prompt-user-for-level))))

    (it "displays error message on wrong number entry"
      (with-in-str "7\n1" (prompt-user-for-level))
      (should= [["Please select level of difficulty:"] ["1 - Easy"] ["2 - Medium"] ["3 - Unbeatable"]
                ["Please enter a number 1-3"]
                ["Easy mode activated!"]]
               (stub/invocations-of :println)))

    (it "displays error message on non-numeric input"
      (with-in-str "Blah\n1" (prompt-user-for-level))
      (should= [["Please select level of difficulty:"] ["1 - Easy"] ["2 - Medium"] ["3 - Unbeatable"]
                ["Please enter a number 1-3"]
                ["Easy mode activated!"]]
               (stub/invocations-of :println)))
    ))


