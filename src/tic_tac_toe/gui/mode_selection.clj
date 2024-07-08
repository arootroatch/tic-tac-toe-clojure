(ns tic-tac-toe.gui.mode-selection
  (:require [quil.core :as q]
            [tic-tac-toe.gui.components :refer [text-button]]
            [tic-tac-toe.gui.utils :as utils]
            [tic-tac-toe.ui.print-utils :as print]))

(defn mode-selection-screen []
  (q/text-size 30)
  (q/text (first print/mode-prompt) 400 100)
  (text-button (nth print/mode-prompt 1) 400 250 600 60)
  (text-button (nth print/mode-prompt 2) 400 330 600 60)
  (text-button (nth print/mode-prompt 3) 400 410 600 60)
  (text-button (nth print/mode-prompt 4) 400 490 600 60))

(defn mode-selection [state]
  (cond
    (:mode state) (:mode state)
    (and (q/mouse-pressed?) (utils/mouse-over? 400 250 600 60)) 1
    (and (q/mouse-pressed?) (utils/mouse-over? 400 300 600 60)) 2
    (and (q/mouse-pressed?) (utils/mouse-over? 400 410 600 60)) 3
    (and (q/mouse-pressed?) (utils/mouse-over? 400 490 600 60)) 4))
