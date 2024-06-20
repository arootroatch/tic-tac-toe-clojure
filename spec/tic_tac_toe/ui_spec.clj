(ns tic-tac-toe.ui-spec
  (:require [speclj.core :refer :all]
            [speclj.stub :as stub]
            [tic-tac-toe.ui :refer :all]))

(def purple "\u001b[35m")

(def reset "\u001b[0m")

(describe "utility functions"

  (context "display-invalid-move-error"
    (it "asks for a valid move"
      (should= "Please choose an empty cell\n"
               (with-out-str (display-invalid-move-error))))
    )


  (context "prompt-user-for-move"
    (it "asks user to input a move"
      (should= "Please enter your move (type 1-9 and hit enter):\n"
               (with-out-str (prompt-user-for-move :o 2))))

    (it "says which player's turn it is if human vs human"
      (should= "O's turn!\nPlease enter your move (type 1-9 and hit enter):\n"
               (with-out-str (prompt-user-for-move :o 1)))
      (should= "X's turn!\nPlease enter your move (type 1-9 and hit enter):\n"
               (with-out-str (prompt-user-for-move :x 1))))
    )


  (context "display-bot-move-message"
    (it "informs human of computer's move"
      (should= "Your opponent plays 5!\n" (with-out-str (display-bot-move-message 5 2 :o))))

    (it "informs human of first AI's move"
      (should= "X plays 1!\n" (with-out-str (display-bot-move-message 1 4 :x))))

    (it "informs human of second AI's move"
      (should= "O plays 8!\n" (with-out-str (display-bot-move-message 8 4 :o))))
    )


  (context "print-board"
    (it "prints the board to the terminal"
      (should= (str purple 1 reset " " purple 2 reset " " purple 3 reset "\n"
                    purple 4 reset " " purple 5 reset " " purple 6 reset "\n"
                    purple 7 reset " " purple 8 reset " " purple 9 reset "\n\n")
               (with-out-str (print-board [1 2 3 4 5 6 7 8 9])))
      (should= (str purple 1 reset " X " purple 3 reset "\n"
                    purple 4 reset " O " purple 6 reset "\n"
                    "O " purple 8 reset " " purple 9 reset "\n\n")
               (with-out-str (print-board [1 :x 3 4 :o 6 :o 8 9]))))
    )



  (context "prompt-user-for-level"
    (with-stubs)
    (redefs-around [println (stub :println)])

    (it "asks user to select level of difficulty"
      (with-in-str "1" (prompt-user-for-level 1 2))
      (with-in-str "2" (prompt-user-for-level 1 2))
      (with-in-str "3" (prompt-user-for-level 1 2))
      (should= [["Please select level of difficulty:"] ["1 - Easy"] ["2 - Medium"] ["3 - Unbeatable"]
                ["Easy mode activated!\n"]
                ["Please select level of difficulty:"] ["1 - Easy"] ["2 - Medium"] ["3 - Unbeatable"]
                ["Medium mode activated!\n"]
                ["Please select level of difficulty:"] ["1 - Easy"] ["2 - Medium"] ["3 - Unbeatable"]
                ["Unbeatable mode activated!\n"]]
               (stub/invocations-of :println)))

    (it "gets user selection 1-3"
      (should= 1 (with-in-str "1" (prompt-user-for-level 1 2)))
      (should= 2 (with-in-str "2" (prompt-user-for-level 1 2)))
      (should= 3 (with-in-str "3" (prompt-user-for-level 1 2))))

    (it "rejects input that is not 1-3"
      (should= 1 (with-in-str "4\n1" (prompt-user-for-level 1 2))))

    (it "rejects non-numeric input"
      (should= 1 (with-in-str "blah\n1" (prompt-user-for-level 1 2))))

    (it "displays error message on wrong number entry"
      (with-in-str "7\n1" (prompt-user-for-level 1 2))
      (should= [["Please select level of difficulty:"] ["1 - Easy"] ["2 - Medium"] ["3 - Unbeatable"]
                ["Please enter a number 1-3"]
                ["Easy mode activated!\n"]]
               (stub/invocations-of :println)))

    (it "displays error message on non-numeric input"
      (with-in-str "Blah\n1" (prompt-user-for-level 1 2))
      (should= [["Please select level of difficulty:"] ["1 - Easy"] ["2 - Medium"] ["3 - Unbeatable"]
                ["Please enter a number 1-3"]
                ["Easy mode activated!\n"]]
               (stub/invocations-of :println)))

    (it "specifies X if mode is CvC and selecting first player level"
      (with-in-str "1" (prompt-user-for-level 1 4))
      (should= [["Please select level for player X:"] ["1 - Easy"] ["2 - Medium"] ["3 - Unbeatable"]
                ["Easy mode activated!\n"]]
               (stub/invocations-of :println)))

    (it "specifies O if mode is CvC and selecting second player level"
      (with-in-str "1" (prompt-user-for-level 2 4))
      (should= [["Please select level for player O:"] ["1 - Easy"] ["2 - Medium"] ["3 - Unbeatable"]
                ["Easy mode activated!\n"]]
               (stub/invocations-of :println)))
    )


  (context "prompt-user-for-mode"
    (with-stubs)
    (redefs-around [println (stub :println)])

    (it "asks user to select game mode and confirms mode 1"
      (with-in-str "1" (prompt-user-for-mode))
      (should= [["Please select game mode:"]
                ["1 - Human vs Human"]
                ["2 - Human vs Computer (Human plays first)"]
                ["3 - Computer vs Human (Computer plays first)"]
                ["4 - Computer vs Computer"]
                ["Human vs Human activated!\n"]]
               (stub/invocations-of :println)))

    (it "asks user to select game mode and confirms mode 2"
      (with-in-str "2" (prompt-user-for-mode))
      (should= [["Please select game mode:"]
                ["1 - Human vs Human"]
                ["2 - Human vs Computer (Human plays first)"]
                ["3 - Computer vs Human (Computer plays first)"]
                ["4 - Computer vs Computer"]
                ["Human vs Computer activated!\n"]]
               (stub/invocations-of :println)))

    (it "asks user to select game mode and confirms mode 3"
      (with-in-str "3" (prompt-user-for-mode))
      (should= [["Please select game mode:"]
                ["1 - Human vs Human"]
                ["2 - Human vs Computer (Human plays first)"]
                ["3 - Computer vs Human (Computer plays first)"]
                ["4 - Computer vs Computer"]
                ["Computer vs Human activated!\n"]]
               (stub/invocations-of :println)))

    (it "asks user to select game mode and confirms mode 4"
      (with-in-str "4" (prompt-user-for-mode))
      (should= [["Please select game mode:"]
                ["1 - Human vs Human"]
                ["2 - Human vs Computer (Human plays first)"]
                ["3 - Computer vs Human (Computer plays first)"]
                ["4 - Computer vs Computer"]
                ["Computer vs Computer activated!\n"]]
               (stub/invocations-of :println)))

    (it "gets user selection 1-4"
      (should= 1 (with-in-str "1" (prompt-user-for-mode)))
      (should= 2 (with-in-str "2" (prompt-user-for-mode)))
      (should= 3 (with-in-str "3" (prompt-user-for-mode)))
      (should= 4 (with-in-str "4" (prompt-user-for-mode))))

    (it "rejects input that is not 1-4"
      (should= 1 (with-in-str "5\n1" (prompt-user-for-mode))))

    (it "rejects non-numeric input"
      (should= 1 (with-in-str "blah\n1" (prompt-user-for-mode))))

    (it "displays error message on wrong number entry"
      (with-in-str "7\n1" (prompt-user-for-mode))
      (should= [["Please select game mode:"]
                ["1 - Human vs Human"]
                ["2 - Human vs Computer (Human plays first)"]
                ["3 - Computer vs Human (Computer plays first)"]
                ["4 - Computer vs Computer"]
                ["Please enter a number 1-4"]
                ["Human vs Human activated!\n"]]
               (stub/invocations-of :println)))

    (it "displays error message on non-numeric input"
      (with-in-str "Blah\n1" (prompt-user-for-mode))
      (should= [["Please select game mode:"]
                ["1 - Human vs Human"]
                ["2 - Human vs Computer (Human plays first)"]
                ["3 - Computer vs Human (Computer plays first)"]
                ["4 - Computer vs Computer"]
                ["Please enter a number 1-4"]
                ["Human vs Human activated!\n"]]
               (stub/invocations-of :println)))
    ))


