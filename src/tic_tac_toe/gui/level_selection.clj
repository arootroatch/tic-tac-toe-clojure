(ns tic-tac-toe.gui.level-selection
  (:require [quil.core :as q]
            [tic-tac-toe.gui.components :refer [text-button]]
            [tic-tac-toe.ui.print-utils :as print]))

(defn level-selection []
  (q/text (first print/level-prompt) 400 150)
  (text-button (nth print/level-prompt 1) 400 300 400 60)
  (text-button (nth print/level-prompt 2) 400 380 400 60)
  (text-button (nth print/level-prompt 3) 400 460 400 60))
