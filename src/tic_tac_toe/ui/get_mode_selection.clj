(ns tic-tac-toe.ui.get-mode-selection
  (:require [tic-tac-toe.ui.get-user-input :refer [get-input-in-range]]))

(defn- print-mode-selection [mode]
  (case mode
    1 (println "Human vs Human activated!\n")
    2 (println "Human vs Computer activated!\n")
    3 (println "Computer vs Human activated!\n")
    4 (println "Computer vs Computer activated!\n")))

(defn- prompt-user-for-mode []
  (println "Please select game mode (X always plays first):")
  (println "1 - Human vs Human")
  (println "2 - Human vs Computer (Human plays first)")
  (println "3 - Computer vs Human (Computer plays first)")
  (println "4 - Computer vs Computer"))

(defn get-mode-selection []
  (prompt-user-for-mode)
  (let [input (get-input-in-range 5)]
    (do (print-mode-selection input) input)))