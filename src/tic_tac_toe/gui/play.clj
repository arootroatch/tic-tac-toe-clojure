(ns tic-tac-toe.gui.play
  (:require [quil.core :as q]
            [tic-tac-toe.gui.components :refer [three-board four-board]]))

(defn play [board]
  (q/text "X's turn!" 400 150)
  (cond
    (= 1 board) (three-board 250 300 150)
    (= 2 board) (four-board 220 300 120)))
