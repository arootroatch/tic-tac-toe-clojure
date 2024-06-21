(ns tic-tac-toe.ui.print-utils)

(defn display-invalid-move-error [] (println "Please choose an empty cell"))

(defn prompt-user-for-move [player mode board]
  (let [letter (.toUpperCase (name player))]
    (cond
      (and (= 1 mode) (= 16 (count board))) (println (str letter "'s turn!\nPlease enter your move (type 1-16 and hit enter):"))
      (= 1 mode) (println (str letter "'s turn!\nPlease enter your move (type 1-9 and hit enter):"))
      (= 16 (count board)) (println "Please enter your move (type 1-16 and hit enter):")
      :else (println "Please enter your move (type 1-9 and hit enter):"))))

(defn display-bot-move-message [move mode player]
  (if (= mode 4)
    (println (str (.toUpperCase (name player)) " plays " move "!"))
    (println (str "Your opponent plays " move "!"))))

(defmulti format-board #(count %))

(def purple "\u001b[35m")
(def reset "\u001b[0m")

(defmethod format-board 9 [board]
  (map #(if (keyword? %) (.toUpperCase (name %)) (str purple % reset)) board))

(defmethod format-board 16 [board]
  (map #(cond (keyword? %) (str " " (.toUpperCase (name %)))
              (< % 10) (str " " purple % reset)
              :else (str purple % reset))
       board))


(defmulti print-board (fn [x] (count x)))

(defmethod print-board 9 [board]
  (let [board (format-board board)]
    (println (str (first board) " " (second board) " " (nth board 2) "\n"
                  (nth board 3) " " (nth board 4) " " (nth board 5) "\n"
                  (nth board 6) " " (nth board 7) " " (nth board 8) "\n")))
  )

(defmethod print-board 16 [board]
  (let [board (format-board board)]
    (println (str (first board) " " (second board) " " (nth board 2) " " (nth board 3) "\n"
                  (nth board 4) " " (nth board 5) " " (nth board 6) " " (nth board 7) "\n"
                  (nth board 8) " " (nth board 9) " " (nth board 10) " " (nth board 11) "\n"
                  (nth board 12) " " (nth board 13) " " (nth board 14) " " (nth board 15) "\n"))))
