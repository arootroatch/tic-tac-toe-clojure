(ns tic-tac-toe.player-moves-spec
  (:require [speclj.core :refer :all]
            [tic-tac-toe.player-moves :refer :all]))

(def empty-board (vec (range 1 10)))

(describe "making moves"
  (context "play-move"

    #_(it "prompts user for input at beginning of turn"
      (should= "Please enter your move (type 1-9 and hit enter):"
               (with-out-str (play-move empty-board :x)))
      (should= [:x 2 3 4 5 6 7 8 9] (with-in-str "1" (play-move empty-board :x))))

    (it "plays first cell"
      (with-in-str "1"
        (let [result (play-move empty-board :x)]
          (should= [:x 2 3 4 5 6 7 8 9] result))))

    (it "plays second cell"
      (with-in-str "2"
        (let [result (play-move empty-board :x)]
          (should= [1 :x 3 4 5 6 7 8 9] result))))

    (it "plays third cell"
      (with-in-str "3"
        (let [result (play-move empty-board :x)]
          (should= [1 2 :x 4 5 6 7 8 9] result))))

    (it "does not print an error when user enters a valid move"
      (with-in-str "3"
        (let [message (with-out-str (play-move empty-board :x))]
          (should= "" message))))

    (it "O plays a move"
      (with-in-str "9"
        (let [result (play-move empty-board :o)]
          (should= [1 2 3 4 5 6 7 8 :o] result))))

    (it "O plays one of X's already played cells"
      (let [board (assoc empty-board 0 :x)
            message (with-out-str (with-in-str "1\n2" (play-move board :o)))
            result (with-in-str "1\n2" (play-move board :o))]
        (should= "Please choose an empty cell\n" message)
        (should= [:x :o 3 4 5 6 7 8 9] result)))

    (it "O plays one of O's already played cells"
      (let [board (assoc empty-board 0 :o)
            message (with-out-str (with-in-str "1\n2" (play-move board :o)))
            result (with-in-str "1\n2" (play-move board :o))]
        (should= "Please choose an empty cell\n" message)
        (should= [:o :o 3 4 5 6 7 8 9] result)))

    (it "plays a move that is out of range"
      (let [result (with-in-str "10\n2" (play-move empty-board :o))]
        (should= [1 :o 3 4 5 6 7 8 9] result)))

    (it "plays a non-numeric move"
      (let [result (with-in-str "blah\n3" (play-move empty-board :o))]
        (should= [1 2 :o 4 5 6 7 8 9] result)))
    )
  )