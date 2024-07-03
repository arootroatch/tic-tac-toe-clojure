(ns tic-tac-toe.eval-board)

(defmulti ->paths count)

(defmethod ->paths 9 [board]
  "Top, middle, bottom, left, middle, right, l-r, r-l"
  (concat (partition 3 board)
          (map #(take-nth 3 (drop % board)) [0 1 2])
          (list (take-nth 4 board) (take-nth 2 (drop-last (drop 2 board))))))

(defmethod ->paths 16 [board]
  "Rows top to bottom, columns left to right, diagonals l-r and r-l"
  (concat (partition 4 board)
          (map #(take-nth 4 (drop % board)) [0 1 2 3])
          (list (take-nth 5 board) (take-nth 3 (drop-last (drop 3 board))))))

(defn- ->3D-diagonals [board]
  (list
      (take-nth 13 board)
      (take-nth 11 (drop 2 board))
      (take-nth 7 (drop 6 board))
      (drop-last (take-nth 5 (drop 8 board)))))

(defn- ->2D-diagonals [board]
  (concat (map #(take 3 (take-nth 4 (drop % board))) [0 9 18])
          (map #(take 3 (take-nth 2 (drop % board))) [2 11 20])))

(defmethod ->paths 27 [board]
  "2D rows (x3), 2D columns (x3), 2D diagonals l-r then r-l (x3),
  3d diagonals top to bottom, 3d columns top to bottom"
  (concat (partition 3 board)
          (map #(take 3 (take-nth 3 (drop % board))) [0 1 2 9 10 11 18 19 20])
          (->2D-diagonals board)
          (->3D-diagonals board)
          (map #(take-nth 9 (drop % board)) [0 1 2 3 4 5 6 7 8])))


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