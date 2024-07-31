(ns tic-tac-toe.tui.print-utils)

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


(defn print-board-selection [input]
  (case input
    1 (println "3x3 board activated!\n")
    2 (println "4x4 board activated!\n")
    3 (println "3 dimensional board activated!\n")))

(def board-prompt ["Please select board:" "3x3" "4x4" "3x3x3 (3 Dimensional)"])

(defn prompt-user-for-board []
  (println (nth board-prompt 0))
  (println (str "1 - " (nth board-prompt 1)))
  (println (str "2 - " (nth board-prompt 2)))
  (println (str "3 - " (nth board-prompt 3))))


(defn print-level-selection [level mode board]
  (case level
    1 (println "Easy mode activated!\n")
    2 (println "Medium mode activated!\n")
    3 (if (and (= 3 board) (= 2 mode)) (println "Hard mode activated!\n") (println "Unbeatable mode activated!\n"))))

(def level-prompt ["Please select level for player X:"
                   "Please select level for player O:"
                   "Please select level of difficulty:"
                   "Easy"
                   "Medium"
                   "Hard"
                   "Unbeatable"])

(defn prompt-user-for-level [ai mode board]
  (cond
    (and (= ai 1) (= mode 4)) (println (nth level-prompt 0))
    (and (= ai 2) (= mode 4)) (println (nth level-prompt 1))
    :else (println (nth level-prompt 2)))
  (println (str "1 - " (nth level-prompt 3)))
  (println (str "2 - " (nth level-prompt 4)))
  (if (and (= 2 mode) (= 3 board)) (println (str "3 - " (nth level-prompt 5))) (println (str "3 - " (nth level-prompt 6)))))


(defn print-mode-selection [mode]
  (case mode
    1 (println "Human vs Human activated!\n")
    2 (println "Human vs Computer activated!\n")
    3 (println "Computer vs Human activated!\n")
    4 (println "Computer vs Computer activated!\n")))

(def mode-prompt ["Please select game mode (X always plays first):"
                  "Human vs Human"
                  "Human vs Computer (Human plays first)"
                  "Computer vs Human (Computer plays first)"
                  "Computer vs Computer"])

(defn prompt-user-for-mode []
  (println (first mode-prompt))
  (println (str "1 - " (nth mode-prompt 1)))
  (println (str "2 - " (nth mode-prompt 2)))
  (println (str "3 - " (nth mode-prompt 3)))
  (println (str "4 - " (nth mode-prompt 4))))

(defn print-resume-selection [input]
  (case input
    1 (println "Game resumed!\n")
    2 (println "New game started!\n")))

(def resume-prompt ["There's an unfinished game! Would you like resume?"
                  "Yes"
                  "No"])

(defn prompt-user-to-resume []
  (println (first resume-prompt))
  (println (str "1 - " (nth resume-prompt 1)))
  (println (str "2 - " (nth resume-prompt 2))))


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

