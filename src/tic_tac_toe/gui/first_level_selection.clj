(ns tic-tac-toe.gui.first-level-selection
  (:require [quil.core :as q]
            [tic-tac-toe.gui.components :refer [text-button]]
            [tic-tac-toe.gui.utils :as utils]
            [tic-tac-toe.ui.print-utils :as print]))

(defn first-level-selection [state]
  (q/text-size 30)
  (if (= :CvC (:mode state))
    (q/text (first print/level-prompt) 400 100)
    (q/text (nth print/level-prompt 2) 400 100))
  (text-button (nth print/level-prompt 3) 400 300 400 60)
  (text-button (nth print/level-prompt 4) 400 380 400 60)
  (text-button (nth print/level-prompt 6) 400 460 400 60)
  (cond
    (:first-ai-level state) (:first-ai-level state)
    (and (q/mouse-pressed?) (utils/mouse-over? 400 300 400 60)) :easy
    (and (q/mouse-pressed?) (utils/mouse-over? 400 380 600 60)) :medium
    (and (q/mouse-pressed?) (utils/mouse-over? 400 460 600 60)) :hard))
