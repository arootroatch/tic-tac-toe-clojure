(ns tic-tac-toe.gui.mode-selection
  (:require [quil.core :as q]
            [tic-tac-toe.gui.components :refer [text-button]]))

(defn mode-selection []
  (q/text "Please select game mode:" 400 150)
  (text-button "Human vs Human" 400 300 400 60)
  (text-button "Human vs Computer" 400 380 400 60)
  (text-button "Computer vs Human" 400 460 400 60)
  (text-button "Computer vs Computer" 400 540 400 60))
