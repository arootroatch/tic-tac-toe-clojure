(ns tic-tac-toe.print-utils)

;region Move Messages

(defn display-invalid-move-error [] (println "Please choose an empty cell"))

(defn prompt-user-for-move [player mode board]
  (let [letter (.toUpperCase (name player))]
    (cond
      (and (= 1 mode) (= 16 (count board))) (println (str letter "'s turn!\nPlease enter your move (type 1-16 and hit enter):"))
      (= 1 mode) (println (str letter "'s turn!\nPlease enter your move (type 1-9 and hit enter):"))
      (= 16 (count board)) (println "Please enter your move (type 1-16 and hit enter):")
      :else (println "Please enter your move (type 1-9 and hit enter):"))))

(defn display-bot-thinking-message [player]
  (println (str "Player " (.toUpperCase (name player)) " is thinking...")))

(defn display-bot-move-message [move mode player]
  (if (= mode 4)
    (println (str (.toUpperCase (name player)) " plays " move "!"))
    (println (str "Your opponent plays " move "!"))))

;endregion

;region Board Display

(def purple "\u001b[35m")
(def reset "\u001b[0m")

(defn format-board [board]
  (map #(cond (keyword? %) (str " " (.toUpperCase (name %)))
              (< % 10) (str " " purple % reset)
              :else (str purple % reset)) board))

(defmulti print-board count)

(defmethod print-board 9 [board]
  (let [board (format-board board)]
    (println (str (first board) " " (second board) " " (nth board 2) "\n"
                  (nth board 3) " " (nth board 4) " " (nth board 5) "\n"
                  (nth board 6) " " (nth board 7) " " (nth board 8) "\n"))))

(defmethod print-board 16 [board]
  (let [board (format-board board)]
    (println (str (first board) " " (second board) " " (nth board 2) " " (nth board 3) "\n"
                  (nth board 4) " " (nth board 5) " " (nth board 6) " " (nth board 7) "\n"
                  (nth board 8) " " (nth board 9) " " (nth board 10) " " (nth board 11) "\n"
                  (nth board 12) " " (nth board 13) " " (nth board 14) " " (nth board 15) "\n"))))

(defmethod print-board 27 [board]
  (let [top-board (first (partition 9 board))
        middle-board (second (partition 9 board))
        bottom-board (last (partition 9 board))]
    (print-board top-board)
    (print-board middle-board)
    (print-board bottom-board)))

;endregion

;region Game Messages

(defn display-no-moves-error []
  (println "There are no moves to show for this game."))

(defn play-logged-game [moves winner]
  (if (empty? moves)
    (display-no-moves-error)
    (do (run! print-board moves) (println winner))))

(defn display-unfinished-game-error []
  (println "The requested game is unfinished. Please choose a completed game to replay."))

(defn display-invalid-game-id-error [id]
  (println (str "There is no game with ID " id)))

(defn display-command-options []
  (println "Please enter your preferences:")
  (println "Format: 'lein run <ui> <db> <game id>")
  (println "<db> is the only required field\n")
  (println "--psqldb         Run with PostgreSQL")
  (println "--edndb         Run with EDN Database")
  (println "gui             Run GUI")
  (println "--game <id>     Run GUI"))

;endregion
