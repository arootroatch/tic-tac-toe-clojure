(ns tic-tac-toe.gui.mode-selection
  (:require [quil.core :as q]
            [tic-tac-toe.gui.components :refer [text-button]]
            [tic-tac-toe.ui.print-utils :as print]))

(defn mode-selection []
  (q/text (first print/mode-prompt) 400 150)
  (text-button (nth print/mode-prompt 1) 400 300 400 60)
  (text-button (nth print/mode-prompt 2) 400 380 400 60)
  (text-button (nth print/mode-prompt 3) 400 460 400 60)
  (text-button (nth print/mode-prompt 4) 400 540 400 60))
