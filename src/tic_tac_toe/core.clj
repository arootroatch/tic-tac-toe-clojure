(ns tic-tac-toe.core)

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
  (cond
    (empty? board) "Please enter a valid board"
    (not (every? #{:x :o} board)) :in-progress))

(defn -main
  [& args]
  (println "Hello World"))
