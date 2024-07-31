(ns tic-tac-toe.tui.print-utils-spec
  (:require [speclj.core :refer :all]
            [speclj.stub :as stub]
            [tic-tac-toe.tui.print-utils :refer :all]))


(describe "utility functions"
  (let [empty-3x3 [1 2 3 4 5 6 7 8 9]
        empty-4x4 [1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16]]

    (context "display-invalid-move-error"
      (it "asks for a valid move"
        (should= "Please choose an empty cell\n"
                 (with-out-str (display-invalid-move-error))))
      )


    (context "prompt-user-for-move"
      (it "asks user to input a move"
        (should= "Please enter your move (type 1-9 and hit enter):\n"
                 (with-out-str (prompt-user-for-move :o 2 empty-3x3))))

      (it "says which player's turn it is if human vs human"
        (should= "O's turn!\nPlease enter your move (type 1-9 and hit enter):\n"
                 (with-out-str (prompt-user-for-move :o 1 empty-3x3)))
        (should= "X's turn!\nPlease enter your move (type 1-9 and hit enter):\n"
                 (with-out-str (prompt-user-for-move :x 1 empty-3x3))))

      (it "specifies 1-16 if board is 4x4"
        (should= "Please enter your move (type 1-16 and hit enter):\n"
                 (with-out-str (prompt-user-for-move :o 2 empty-4x4)))
        (should= "O's turn!\nPlease enter your move (type 1-16 and hit enter):\n"
                 (with-out-str (prompt-user-for-move :o 1 empty-4x4))))
      )

    (context "display-bot-thinking"
      (it "prints message to let the user know the computer is processing"
        (should= "Player X is thinking..."
                 (with-out-str (display-bot-thinking-message :x)))
        (should= "Player O is thinking..."
                 (with-out-str (display-bot-thinking-message :o)))))

    (context "display-bot-move-message"
      (it "informs human of computer's move"
        (should= "Your opponent plays 5!\n" (with-out-str (display-bot-move-message 5 2 :o))))

      (it "informs human of first AI's move"
        (should= "X plays 1!\n" (with-out-str (display-bot-move-message 1 4 :x))))

      (it "informs human of second AI's move"
        (should= "O plays 8!\n" (with-out-str (display-bot-move-message 8 4 :o))))
      )


    (context "print-board"
      (it "prints 3x3 board to the terminal"
        (should= (str " " purple 1 reset "  " purple 2 reset "  " purple 3 reset "\n"
                      " " purple 4 reset "  " purple 5 reset "  " purple 6 reset "\n"
                      " " purple 7 reset "  " purple 8 reset "  " purple 9 reset "\n\n")
                 (with-out-str (print-board empty-3x3)))
        (should= (str " " purple 1 reset "  X  " purple 3 reset "\n"
                      " " purple 4 reset "  O  " purple 6 reset "\n"
                      " O  " purple 8 reset "  " purple 9 reset "\n\n")
                 (with-out-str (print-board [1 :x 3 4 :o 6 :o 8 9]))))

      (it "prints 4x4 board to the terminal"
        (should= (str " " purple 1 reset "  " purple 2 reset "  " purple 3 reset "  " purple 4 reset "\n"
                      " " purple 5 reset "  " purple 6 reset "  " purple 7 reset "  " purple 8 reset "\n"
                      " " purple 9 reset " " purple 10 reset " " purple 11 reset " " purple 12 reset "\n"
                      purple 13 reset " " purple 14 reset " " purple 15 reset " " purple 16 reset "\n\n")
                 (with-out-str (print-board empty-4x4)))
        (should= (str " " purple 1 reset "  X  " purple 3 reset "  " purple 4 reset "\n"
                      " O  " purple 6 reset "  O  " purple 8 reset "\n"
                      " X  X  O  O\n"
                      purple 13 reset "  X  X  O\n\n")
                 (with-out-str (print-board [1 :x 3 4 :o 6 :o 8 :x :x :o :o 13 :x :x :o]))))

      (it "prints 3x3x3 board to the terminal"
        (should= (str " " purple 1 reset "  " purple 2 reset "  " purple 3 reset "\n"
                      " " purple 4 reset "  " purple 5 reset "  " purple 6 reset "\n"
                      " " purple 7 reset "  " purple 8 reset "  " purple 9 reset "\n\n"
                      purple 10 reset " " purple 11 reset " " purple 12 reset "\n"
                      purple 13 reset " " purple 14 reset " " purple 15 reset "\n"
                      purple 16 reset " " purple 17 reset " " purple 18 reset "\n\n"
                      purple 19 reset " " purple 20 reset " " purple 21 reset "\n"
                      purple 22 reset " " purple 23 reset " " purple 24 reset "\n"
                      purple 25 reset " " purple 26 reset " " purple 27 reset "\n\n")
                  (with-out-str (print-board (range 1 28)))))
      ))

  (context "play-logged-game"
    (with-stubs)

    (it "prints error message if there are no moves"
      (should= "There are no moves to show for this game.\n"
               (with-out-str (play-logged-game [])))
      (should= "There are no moves to show for this game.\n"
               (with-out-str (play-logged-game nil))))

    (it "prints each move to the console in order"
      (with-redefs [print-board (stub :print-board)]
        (play-logged-game '([1 2 3 4 :x 6 7 8 9] [:o 2 3 4 :x 6 7 8 9] [:o 2 3 4 :x :x 7 8 9] [:o 2 3 :o :x :x 7 8 9] [:o 2 :x :o :x :x 7 8 9] [:o 2 :x :o :x :x :o 8 9]))
        (should= [[[1 2 3 4 :x 6 7 8 9]] [[:o 2 3 4 :x 6 7 8 9]] [[:o 2 3 4 :x :x 7 8 9]]
                  [[:o 2 3 :o :x :x 7 8 9]] [[:o 2 :x :o :x :x 7 8 9]] [[:o 2 :x :o :x :x :o 8 9]]]
                 (stub/invocations-of :print-board))))
    )

  (it "shows error message when psql game is incomplete and can't be replayed"
    (should= "The requested game is unfinished. Please choose a completed game to replay.\n"
             (with-out-str (display-unfinished-game-error)))))