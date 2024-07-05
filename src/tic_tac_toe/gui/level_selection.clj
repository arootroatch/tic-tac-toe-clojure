(ns tic-tac-toe.gui.level-selection
  (:require [quil.core :as q]
            [tic-tac-toe.gui.components :refer [text-button]]))

(defn level-selection []
  (q/text "Please select level of difficulty:" 400 150)
  (text-button "Easy" 400 300 400 60)
  (text-button "Medium" 400 380 400 60)
  (text-button "Unbeatable" 400 460 400 60))
