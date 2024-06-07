(ns tic-tac-toe.utils)

(defn display-invalid-move-error [] (println "Please choose an empty cell"))

(defn print-board [board]
  (let [board (map #(if (keyword? %) (.toUpperCase (name %)) %) board)]
    (println (first board) (second board) (nth board 2))
    (println (nth board 3) (nth board 4) (nth board 5))
    (println (nth board 6) (nth board 7) (nth board 8))))
