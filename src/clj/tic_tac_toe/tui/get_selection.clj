(ns tic-tac-toe.tui.get-selection
  (:require [tic-tac-toe.game-logs.sql :as sql]
            [tic-tac-toe.tui.get-user-input :refer [get-input-in-range]]
            [tic-tac-toe.tui.print-utils :as print]))

(def initial-3x3-board [1 2 3 4 5 6 7 8 9])
(def initial-4x4-board [1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16])
(def initial-3x3x3-board (vec (range 1 28)))

(defmulti get-selection :option)

(defmethod get-selection :board [_]
  (print/prompt-user-for-board)
  (let [input (get-input-in-range 4)]
    (do (print/print-board-selection input)) input))

(defmethod get-selection :level [{:keys [ai mode board]}]
  (print/prompt-user-for-level ai mode board)
  (let [input (get-input-in-range 4)]
    (do (print/print-level-selection input mode board)) input))

(defmethod get-selection :mode [_]
  (print/prompt-user-for-mode)
  (let [input (get-input-in-range 5)]
    (do (print/print-mode-selection input)) input))

(defmethod get-selection :resume-edn [{:keys [filepath]}]
  (print/prompt-user-to-resume)
  (let [input (get-input-in-range 3)]
    (if (= 2 input)
      (do (clojure.java.io/delete-file filepath true)
          (print/print-resume-selection input))
      (do (print/print-resume-selection input) input))))

(defmethod get-selection :resume-sql [{:keys [game-id]}]
  (print/prompt-user-to-resume)
  (let [input (get-input-in-range 3)]
    (if (= 2 input)
      (do (sql/set-abandoned-game-state sql/ds game-id)
          (print/print-resume-selection input))
      (do (print/print-resume-selection input) input))))