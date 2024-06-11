(ns tic-tac-toe.main-spec
  (:require [speclj.core :refer :all]
            [tic-tac-toe.main :refer :all]))

#_(describe "a full game of TTT"
  (it "says X wins"
    (should= "1 2 3\n4 5 6\n7 8 9
Please enter your move (type 1-9 and hit enter):
X 2 3\n4 5 6\n7 8 9
Please enter your move (type 1-9 and hit enter):
X O 3\n4 5 6\n7 8 9
Please enter your move (type 1-9 and hit enter):
X O 3\nX 5 6\n7 8 9
Please enter your move (type 1-9 and hit enter):
X O O\nX 5 6\n7 8 9
Please enter your move (type 1-9 and hit enter):
X O O\nX 5 6\nX 8 9
X wins!\n"
             (with-out-str (with-in-str "1\n2\n4\n3\n7\n" (-main)))))

  (it "says O wins"
    (should= "1 2 3\n4 5 6\n7 8 9
Please enter your move (type 1-9 and hit enter):
X 2 3\n4 5 6\n7 8 9
Please enter your move (type 1-9 and hit enter):
X O 3\n4 5 6\n7 8 9
Please enter your move (type 1-9 and hit enter):
X O 3\nX 5 6\n7 8 9
Please enter your move (type 1-9 and hit enter):
X O 3\nX O 6\n7 8 9
Please enter your move (type 1-9 and hit enter):
X O 3\nX O 6\n7 X 9
Please enter your move (type 1-9 and hit enter):
X O O\nX O 6\n7 X 9
Please enter your move (type 1-9 and hit enter):
X O O\nX O 6\n7 X X
Please enter your move (type 1-9 and hit enter):
X O O\nX O 6\nO X X
O wins!\n"
             (with-out-str (with-in-str "1\n2\n4\n5\n8\n3\n9\n7\n" (-main)))))

  (it "says tie game"
    (should= "1 2 3\n4 5 6\n7 8 9
Please enter your move (type 1-9 and hit enter):
1 2 3\n4 5 X\n7 8 9
Please enter your move (type 1-9 and hit enter):
1 2 O\n4 5 X\n7 8 9
Please enter your move (type 1-9 and hit enter):
X 2 O\n4 5 X\n7 8 9
Please enter your move (type 1-9 and hit enter):
X O O\n4 5 X\n7 8 9
Please enter your move (type 1-9 and hit enter):
X O O\n4 X X\n7 8 9
Please enter your move (type 1-9 and hit enter):
X O O\nO X X\n7 8 9
Please enter your move (type 1-9 and hit enter):
X O O\nO X X\nX 8 9
Please enter your move (type 1-9 and hit enter):
X O O\nO X X\nX 8 O
Please enter your move (type 1-9 and hit enter):
X O O\nO X X\nX X O
It's a tie!\n"
             (with-out-str (with-in-str "6\n3\n1\n2\n5\n4\n7\n9\n8\n" (-main)))))

  )