(ns tic-tac-toe.eval-board)

(defn ->paths [board]
  "Top, middle, bottom, left, middle, right, l-r, r-l"
  (concat (partition 3 board)
          (list
            (take-nth 3 board)
            (take-nth 3 (drop 1 board))
            (take-nth 3 (drop 2 board))
            (take-nth 4 board)
            (take-nth 2 (drop-last (drop 2 board))))))

(defn score [board]
  (let [paths (->paths board)]
    (cond
      (some #(every? #{:x} %) paths) "X wins!"
      (some #(every? #{:o} %) paths) "O wins!"
      (every? #{:x :o} board) "It's a tie!"
      :else :in-progress)))

(defn evaluate-board [board depth maximizer]
  (let [paths (->paths board)
        minimizer (if (= maximizer :x) :o :x)]
    (cond
      (some #(every? #{minimizer} %) paths) (+ -10 depth)
      (some #(every? #{maximizer} %) paths) (- 10 depth)
      (every? #{:x :o} board) 0
      :else :in-progress)))