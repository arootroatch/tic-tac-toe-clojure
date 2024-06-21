(ns tic-tac-toe.ui.get-board-selection
  (:require [tic-tac-toe.ui.get-user-input :refer [get-input-in-range]]))

(defn- print-board-selection [mode]
  (case mode
    1 (println "3x3 board activated!\n")
    2 (println "4x4 board activated!\n")))

(defn- prompt-user-for-board []
  (println "Please select board:")
  (println "1 - 3x3")
  (println "2 - 4x4"))

(defn get-board-selection []
  (prompt-user-for-board)
  (let [input (get-input-in-range 3)]
    (do (print-board-selection input) input)))