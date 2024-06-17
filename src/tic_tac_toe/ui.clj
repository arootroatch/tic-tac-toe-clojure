(ns tic-tac-toe.ui)

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

(defn read-user-input []
  (try
    (Integer/parseInt (read-line))
    (catch Exception _)))

(defn- print-level-selection [level]
  (case level
    1 (println "Easy mode activated!")
    2 (println "Medium mode activated!")
    3 (println "Unbeatable mode activated!")
    ))

(defn prompt-user-for-level []
  (println "Please select level of difficulty:")
  (println "1 - Easy")
  (println "2 - Medium")
  (println "3 - Unbeatable")
  (loop [input (read-user-input)]
    (if (and (number? input) (> input 0) (< input 4))
      (do (print-level-selection input)
        input)
      (do (println "Please enter a number 1-3")
          (recur (read-user-input))))))

