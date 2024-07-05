(ns tic-tac-toe.ui.get-selection
  (:require [tic-tac-toe.ui.get-user-input :refer [get-input-in-range]]
            [tic-tac-toe.ui.print-utils :as print]))

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