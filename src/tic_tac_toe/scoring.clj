(ns tic-tac-toe.scoring)

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
  (or (some #(every? #{:x} %) (->paths board))
      (some #(every? #{:o} %) (->paths board))))

(defn- get-winner [board]
  ())

(defn score [board]
  (cond
    (won? board) (get-winner board)
    (every? #{:x :o} board) "It's a tie!"
    :else :in-progress))




