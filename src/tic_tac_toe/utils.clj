(ns tic-tac-toe.utils)

(defn display-invalid-move-error [] (println "Please choose an empty cell"))

(defn- format-board [board]
  (map #(if (keyword? %) (.toUpperCase (name %)) (str "\u001B[35m" % "\u001B[0m")) board))

(defn print-board [board]
  (let [board (format-board board)]
    (println (first board) (second board) (nth board 2))
    (println (nth board 3) (nth board 4) (nth board 5))
    (println (nth board 6) (nth board 7) (nth board 8))))
