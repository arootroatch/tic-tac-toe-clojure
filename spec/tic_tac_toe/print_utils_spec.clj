(ns tic-tac-toe.print-utils-spec
  (:require [speclj.core :refer :all]
            [tic-tac-toe.print-utils :refer :all]))

(defn- format-board [board]
  (let [purple "\u001b[35m"
        reset "\u001b[0m"]
    (map #(if (keyword? %) (.toUpperCase (name %)) (str purple % reset)) board)))

(defn print-board-test [board]
  (let [board (format-board board)]
    (println (first board) (second board) (nth board 2))
    (println (nth board 3) (nth board 4) (nth board 5))
    (println (nth board 6) (nth board 7) (nth board 8))))

(describe "utility functions"
  (it "prints the board to the terminal"
    (let [result (with-out-str (print-board-test [1 :x 3 4 :o 6 :o 8 9]))]
      (should= result
        (with-out-str (print-board [1 :x 3 4 :o 6 :o 8 9])))))

  (it "asks for a valid move"
    (should= "Please choose an empty cell\n"
             (with-out-str (display-invalid-move-error))))

  (it "asks user to input a move"
    (should= "Please enter your move (type 1-9 and hit enter):\n"
             (with-out-str (prompt-user-for-move))))

  )


