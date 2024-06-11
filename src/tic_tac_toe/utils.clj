(ns tic-tac-toe.utils)

(def initial-board [1 2 3 4 5 6 7 8 9])

(def player-sequence (cycle [:x :o]))

(defn display-invalid-move-error [] (println "Please choose an empty cell"))

(defn prompt-user-for-move [] (println "Please enter your move (type 1-9 and hit enter):"))


(defn- format-board [board]
  (map #(if (keyword? %) (.toUpperCase (name %)) (str "\u001B[35m" % "\u001B[0m")) board))

(defn print-board [board]
  (let [board (format-board board)]
    (println (first board) (second board) (nth board 2))
    (println (nth board 3) (nth board 4) (nth board 5))
    (println (nth board 6) (nth board 7) (nth board 8))))


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