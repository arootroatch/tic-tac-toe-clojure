(ns tic-tac-toe.core)

(defn ->paths [board]
  "Top, middle, bottom, left, middle, right, l-r, r-l"
  (if (< (count board) 9)
    "Please enter a valid board"
    (concat (partition 3 board)
            (list
              (take-nth 3 board)
              (take-nth 3 (drop 1 board))
              (take-nth 3 (drop 2 board))
              (take-nth 4 board)
              (take-nth 2 (drop-last (drop 2 board)))))))


(defn won? [board]
  (some (or #(every? #{:x} %) #(every? #{:o} %)) (->paths board)))

(defn get-winner [board]
  (first (flatten (filter (or #(every? #{:x} %) #(every? #{:o} %)) (->paths board)))))

(defn score [board]
  (cond
    (< (count board) 9) "Please enter a valid board"
    (and (not (won? board)) (not (every? #{:x :o} board))) :in-progress
    (and (not (won? board)) (every? #{:x :o} board)) "It's a tie!"
    (won? board) (get-winner board)))


(defn -main
  [& args]
  (println "Hello World"))

;sorts into paths every time it check for win and then again to get win
;sorts into paths and iterates through just to check winner and again to find winner
;state booleans? game board data in state?