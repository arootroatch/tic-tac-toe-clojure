(ns tic-tac-toe.ui.get-level-selection
  (:require [tic-tac-toe.ui.get-user-input :refer [get-input-in-range]]))

(defn- print-level-selection [level]
  (case level
    1 (println "Easy mode activated!\n")
    2 (println "Medium mode activated!\n")
    3 (println "Unbeatable mode activated!\n")))

(defn- prompt-user-for-level [ai mode]
  (cond
    (and (= ai 1) (= mode 4)) (println "Please select level for player X:")
    (and (= ai 2) (= mode 4)) (println "Please select level for player O:")
    :else (println "Please select level of difficulty:"))
  (println "1 - Easy")
  (println "2 - Medium")
  (println "3 - Unbeatable"))

(defn get-level-selection [ai mode]
  (prompt-user-for-level ai mode)
  (let [input (get-input-in-range 4)]
    (do (print-level-selection input) input)))