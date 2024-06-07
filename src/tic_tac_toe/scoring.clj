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

(defn- won? [paths]
  (or (some #(every? #{:x} %) paths)
      (some #(every? #{:o} %) paths)))

(defn- get-winner [paths]
  (cond
    (some #(every? #{:x} %) paths) "X wins!"
    (some #(every? #{:o} %) paths) "O wins!"))

(defn score [board]
  (let [paths (->paths board)]
    (cond
      (won? paths) (get-winner paths)
      (every? #{:x :o} board) "It's a tie!"
      :else :in-progress)))



