(ns tic-tac-toe.print-utils)

(defn display-invalid-move-error [] (println "Please choose an empty cell"))

(defn prompt-user-for-move [] (println "Please enter your move (type 1-9 and hit enter):"))

(defn display-bot-move-message [move] (println (str "Your opponent plays " move "!")))

(defn- format-board [board]
  (let [purple "\u001b[35m"
        reset "\u001b[0m"]
    (map #(if (keyword? %) (.toUpperCase (name %)) (str purple % reset)) board)))

(defn print-board [board]
  (let [board (format-board board)]
    (println (str (first board) " " (second board) " " (nth board 2) "\n"
                  (nth board 3) " " (nth board 4) " " (nth board 5) "\n"
                  (nth board 6) " " (nth board 7) " " (nth board 8)))))


