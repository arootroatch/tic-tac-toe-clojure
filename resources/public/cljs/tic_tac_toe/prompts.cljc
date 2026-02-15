(ns tic-tac-toe.prompts)

;region Data Constants

(def mode-prompt ["Please select game mode (X always plays first):"
                  "Human vs Human"
                  "Human vs Computer (Human plays first)"
                  "Computer vs Human (Computer plays first)"
                  "Computer vs Computer"])

(def board-prompt ["Please select board:" "3x3" "4x4" "3x3x3 (3 Dimensional)"])

(def level-prompt ["Please select level for player X:"
                   "Please select level for player O:"
                   "Please select level of difficulty:"
                   "Easy"
                   "Medium"
                   "Hard"
                   "Unbeatable"])

(def resume-prompt ["There's an unfinished game! Would you like resume?"
                    "Yes"
                    "No"])

;endregion

;region Selection Display Functions

(defn print-mode-selection [mode]
  (case mode
    1 (println "Human vs Human activated!\n")
    2 (println "Human vs Computer activated!\n")
    3 (println "Computer vs Human activated!\n")
    4 (println "Computer vs Computer activated!\n")))

(defn prompt-user-for-mode []
  (println (first mode-prompt))
  (println (str "1 - " (nth mode-prompt 1)))
  (println (str "2 - " (nth mode-prompt 2)))
  (println (str "3 - " (nth mode-prompt 3)))
  (println (str "4 - " (nth mode-prompt 4))))

(defn print-board-selection [input]
  (case input
    1 (println "3x3 board activated!\n")
    2 (println "4x4 board activated!\n")
    3 (println "3 dimensional board activated!\n")))

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

(defn prompt-user-for-level [ai mode board]
  (cond
    (and (= ai 1) (= mode 4)) (println (nth level-prompt 0))
    (and (= ai 2) (= mode 4)) (println (nth level-prompt 1))
    :else (println (nth level-prompt 2)))
  (println (str "1 - " (nth level-prompt 3)))
  (println (str "2 - " (nth level-prompt 4)))
  (if (and (= 2 mode) (= 3 board)) (println (str "3 - " (nth level-prompt 5))) (println (str "3 - " (nth level-prompt 6)))))

(defn print-resume-selection [input]
  (case input
    1 (println "Game resumed!\n")
    2 (println "New game started!\n")))

(defn prompt-user-to-resume []
  (println (first resume-prompt))
  (println (str "1 - " (nth resume-prompt 1)))
  (println (str "2 - " (nth resume-prompt 2))))

;endregion
