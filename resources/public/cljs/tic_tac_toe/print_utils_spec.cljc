(ns tic-tac-toe.print-utils-spec
  (:require [speclj.core :refer [describe with-stubs context it should= stub should-have-invoked]]
            [speclj.stub :as stub]
            [tic-tac-toe.print-utils :as sut]))


(describe "utility functions"
  (with-stubs)

  (let [empty-3x3 [1 2 3 4 5 6 7 8 9]
        empty-4x4 [1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16]]

    (context "display-invalid-move-error"
      (it "asks for a valid move"
        (should= "Please choose an empty cell\n"
                 (with-out-str (sut/display-invalid-move-error))))
      )


    (context "prompt-user-for-move"
      (it "asks user to input a move"
        (should= "Please enter your move (type 1-9 and hit enter):\n"
                 (with-out-str (sut/prompt-user-for-move :o 2 empty-3x3))))

      (it "says which player's turn it is if human vs human"
        (should= "O's turn!\nPlease enter your move (type 1-9 and hit enter):\n"
                 (with-out-str (sut/prompt-user-for-move :o 1 empty-3x3)))
        (should= "X's turn!\nPlease enter your move (type 1-9 and hit enter):\n"
                 (with-out-str (sut/prompt-user-for-move :x 1 empty-3x3))))

      (it "specifies 1-16 if board is 4x4"
        (should= "Please enter your move (type 1-16 and hit enter):\n"
                 (with-out-str (sut/prompt-user-for-move :o 2 empty-4x4)))
        (should= "O's turn!\nPlease enter your move (type 1-16 and hit enter):\n"
                 (with-out-str (sut/prompt-user-for-move :o 1 empty-4x4))))
      )

    (context "display-bot-thinking"
      (it "prints message to let the user know the computer is processing"
        (should= "Player X is thinking..."
                 (with-out-str (sut/display-bot-thinking-message :x)))
        (should= "Player O is thinking..."
                 (with-out-str (sut/display-bot-thinking-message :o)))))

    (context "display-bot-move-message"
      (it "informs human of computer's move"
        (should= "Your opponent plays 5!\n" (with-out-str (sut/display-bot-move-message 5 2 :o))))

      (it "informs human of first AI's move"
        (should= "X plays 1!\n" (with-out-str (sut/display-bot-move-message 1 4 :x))))

      (it "informs human of second AI's move"
        (should= "O plays 8!\n" (with-out-str (sut/display-bot-move-message 8 4 :o))))
      )


    (context "print-board"
      (it "prints 3x3 board to the terminal"
        (should= (str " " sut/purple 1 sut/reset "  " sut/purple 2 sut/reset "  " sut/purple 3 sut/reset "\n"
                      " " sut/purple 4 sut/reset "  " sut/purple 5 sut/reset "  " sut/purple 6 sut/reset "\n"
                      " " sut/purple 7 sut/reset "  " sut/purple 8 sut/reset "  " sut/purple 9 sut/reset "\n\n")
                 (with-out-str (sut/print-board empty-3x3)))
        (should= (str " " sut/purple 1 sut/reset "  X  " sut/purple 3 sut/reset "\n"
                      " " sut/purple 4 sut/reset "  O  " sut/purple 6 sut/reset "\n"
                      " O  " sut/purple 8 sut/reset "  " sut/purple 9 sut/reset "\n\n")
                 (with-out-str (sut/print-board [1 :x 3 4 :o 6 :o 8 9]))))

      (it "prints 4x4 board to the terminal"
        (should= (str " " sut/purple 1 sut/reset "  " sut/purple 2 sut/reset "  " sut/purple 3 sut/reset "  " sut/purple 4 sut/reset "\n"
                      " " sut/purple 5 sut/reset "  " sut/purple 6 sut/reset "  " sut/purple 7 sut/reset "  " sut/purple 8 sut/reset "\n"
                      " " sut/purple 9 sut/reset " " sut/purple 10 sut/reset " " sut/purple 11 sut/reset " " sut/purple 12 sut/reset "\n"
                      sut/purple 13 sut/reset " " sut/purple 14 sut/reset " " sut/purple 15 sut/reset " " sut/purple 16 sut/reset "\n\n")
                 (with-out-str (sut/print-board empty-4x4)))
        (should= (str " " sut/purple 1 sut/reset "  X  " sut/purple 3 sut/reset "  " sut/purple 4 sut/reset "\n"
                      " O  " sut/purple 6 sut/reset "  O  " sut/purple 8 sut/reset "\n"
                      " X  X  O  O\n"
                      sut/purple 13 sut/reset "  X  X  O\n\n")
                 (with-out-str (sut/print-board [1 :x 3 4 :o 6 :o 8 :x :x :o :o 13 :x :x :o]))))

      (it "prints 3x3x3 board to the terminal"
        (should= (str " " sut/purple 1 sut/reset "  " sut/purple 2 sut/reset "  " sut/purple 3 sut/reset "\n"
                      " " sut/purple 4 sut/reset "  " sut/purple 5 sut/reset "  " sut/purple 6 sut/reset "\n"
                      " " sut/purple 7 sut/reset "  " sut/purple 8 sut/reset "  " sut/purple 9 sut/reset "\n\n"
                      sut/purple 10 sut/reset " " sut/purple 11 sut/reset " " sut/purple 12 sut/reset "\n"
                      sut/purple 13 sut/reset " " sut/purple 14 sut/reset " " sut/purple 15 sut/reset "\n"
                      sut/purple 16 sut/reset " " sut/purple 17 sut/reset " " sut/purple 18 sut/reset "\n\n"
                      sut/purple 19 sut/reset " " sut/purple 20 sut/reset " " sut/purple 21 sut/reset "\n"
                      sut/purple 22 sut/reset " " sut/purple 23 sut/reset " " sut/purple 24 sut/reset "\n"
                      sut/purple 25 sut/reset " " sut/purple 26 sut/reset " " sut/purple 27 sut/reset "\n\n")
                  (with-out-str (sut/print-board (range 1 28)))))
      ))

  (context "play-logged-game"
    (it "prints error message if there are no moves"
      (should= "There are no moves to show for this game.\n"
               (with-out-str (sut/play-logged-game [] nil)))
      (should= "There are no moves to show for this game.\n"
               (with-out-str (sut/play-logged-game nil nil))))

    (it "prints each move to the console in order followed by winner"
      (with-redefs [sut/print-board (stub :print-board)
                    println (stub :println)]
        (sut/play-logged-game '([1 2 3 4 :x 6 7 8 9] [:o 2 3 4 :x 6 7 8 9] [:o 2 3 4 :x :x 7 8 9] [:o 2 3 :o :x :x 7 8 9]
                            [:o 2 :x :o :x :x 7 8 9] [:o 2 :x :o :x :x :o 8 9]) "O wins!")
        (should= [[[1 2 3 4 :x 6 7 8 9]] [[:o 2 3 4 :x 6 7 8 9]] [[:o 2 3 4 :x :x 7 8 9]]
                  [[:o 2 3 :o :x :x 7 8 9]] [[:o 2 :x :o :x :x 7 8 9]] [[:o 2 :x :o :x :x :o 8 9]]]
                 (stub/invocations-of :print-board))
        (should-have-invoked :println {:with ["O wins!"]})))
    )

  (it "shows error message when psql game is incomplete and can't be replayed"
    (should= "The requested game is unfinished. Please choose a completed game to replay.\n"
             (with-out-str (sut/display-unfinished-game-error))))

  (it "shows error message when game id is invalid"
    (should= "There is no game with ID 20\n" (with-out-str (sut/display-invalid-game-id-error 20))))

  (it "displays command options to user"
    (with-redefs [println (stub :println)]
      (sut/display-command-options)
      (should= [["Please enter your preferences:"]
                ["Format: 'lein run <ui> <db> <game id>"]
                ["<db> is the only required field\n"]
                ["--psqldb         Run with PostgreSQL"]
                ["--edndb         Run with EDN Database"]
                ["gui             Run GUI"]
                ["--game <id>     Run GUI"]]
              (stub/invocations-of :println)))))