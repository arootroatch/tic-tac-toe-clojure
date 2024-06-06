(ns tic-tac-toe.utils)

(defn throw-invalid-board-error [] "Please enter a valid board")

(defn throw-invalid-move-error [] "Please enter a valid move (1-9)")

(defn print-board [board]
  (let [board (map #(if (keyword? %) (subs (str %) 1) %) board)]
    (println (first board)(second board)(nth board 2))
    (println (nth board 3)(nth board 4)(nth board 5))
    (println (nth board 6)(nth board 7)(nth board 8))))
