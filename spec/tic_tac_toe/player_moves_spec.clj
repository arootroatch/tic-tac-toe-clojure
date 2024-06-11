(ns tic-tac-toe.player-moves-spec
  (:require [speclj.core :refer :all]
            [speclj.stub :as stub]
            [tic-tac-toe.player-moves :refer :all]))

(def empty-board (vec (range 1 10)))

(describe "making moves"
  (with-stubs)
  (redefs-around [println (stub :println)])

  (context "play-move"

    (it "prompts user for input at beginning of turn"
      (with-in-str "1"
        (play-user-turn empty-board :x)
        (should-have-invoked :println {:with ["Please enter your move (type 1-9 and hit enter):"]})))

    (it "plays first cell"
      (with-in-str "1"
        (should= [:x 2 3 4 5 6 7 8 9] (play-user-turn empty-board :x))))

    (it "plays second cell"
      (with-in-str "2"
        (let [result (play-user-turn empty-board :x)]
          (should= [1 :x 3 4 5 6 7 8 9] result))))

    (it "plays third cell"
      (with-in-str "3"
        (let [result (play-user-turn empty-board :x)]
          (should= [1 2 :x 4 5 6 7 8 9] result))))

    (it "does not print an error when user enters a valid move"
      (with-in-str "3"
        (let [message (play-user-turn empty-board :x)]
          (should= [["Please enter your move (type 1-9 and hit enter):"]]
                   (stub/invocations-of :println)))))

    (it "O plays a move"
      (with-in-str "9"
        (let [result (play-user-turn empty-board :o)]
          (should= [1 2 3 4 5 6 7 8 :o] result))))

    (it "O plays one of X's already played cells"
      (let [board (assoc empty-board 0 :x)
            result (with-in-str "1\n2" (play-user-turn board :o))]
        (should= [["Please enter your move (type 1-9 and hit enter):"]
                  ["Please choose an empty cell"]]
                 (stub/invocations-of :println))
        (should= [:x :o 3 4 5 6 7 8 9] result)))

    (it "O plays one of O's already played cells"
      (let [board (assoc empty-board 0 :o)
            result (with-in-str "1\n2" (play-user-turn board :o))]
        (should= [["Please enter your move (type 1-9 and hit enter):"]
                  ["Please choose an empty cell"]]
                 (stub/invocations-of :println))
        (should= [:o :o 3 4 5 6 7 8 9] result)))

    (it "plays a move that is out of range"
      (let [result (with-in-str "10\n2" (play-user-turn empty-board :o))]
        (should= [1 :o 3 4 5 6 7 8 9] result)))

    (it "plays a non-numeric move"
      (let [result (with-in-str "blah\n3" (play-user-turn empty-board :o))]
        (should= [1 2 :o 4 5 6 7 8 9] result)))
    )
  )