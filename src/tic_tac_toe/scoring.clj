(ns tic-tac-toe.scoring
  (:require [tic-tac-toe.utils :refer [throw-invalid-board-error]]))

(defn ->paths [board]
  "Top, middle, bottom, left, middle, right, l-r, r-l"
  (concat (partition 3 board)
          (list
            (take-nth 3 board)
            (take-nth 3 (drop 1 board))
            (take-nth 3 (drop 2 board))
            (take-nth 4 board)
            (take-nth 2 (drop-last (drop 2 board))))))

(defn- won? [board]
  (some (or #(every? #{:x} %) #(every? #{:o} %)) (->paths board)))

(defn- get-winner [board]
  (first (flatten (filter (or #(every? #{:x} %) #(every? #{:o} %)) (->paths board)))))

(defn score [board]
  (cond
    (and (not (won? board)) (not (every? #{:x :o} board))) :in-progress
    (and (not (won? board)) (every? #{:x :o} board)) "It's a tie!"
    (won? board) (get-winner board)))


