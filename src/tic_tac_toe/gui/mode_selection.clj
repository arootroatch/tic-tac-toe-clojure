(ns tic-tac-toe.gui.mode-selection
  (:require [quil.core :as q]
            [tic-tac-toe.gui.components :refer [text-button]]
            [tic-tac-toe.gui.utils :as utils]
            [tic-tac-toe.tui.print-utils :as print]))

(defn mode-selection-screen []
  (q/background 0 0 0)
  (q/text-size 30)
  (q/text (first print/mode-prompt) 400 100)
  (text-button (nth print/mode-prompt 1) 400 250 600 60)
  (text-button (nth print/mode-prompt 2) 400 330 600 60)
  (text-button (nth print/mode-prompt 3) 400 410 600 60)
  (text-button (nth print/mode-prompt 4) 400 490 600 60)
  :mode-selection)

(defmethod utils/handle-click :mode-selection [state mouse-xy]
  (cond
    (:mode state) (:mode state)
    (utils/mouse-over? 400 250 600 60 mouse-xy) (assoc state :mode 1 :human? true)
    (utils/mouse-over? 400 300 600 60 mouse-xy) (assoc state :mode 2 :human? true)
    (utils/mouse-over? 400 410 600 60 mouse-xy) (assoc state :mode 3 :human? false)
    (utils/mouse-over? 400 490 600 60 mouse-xy) (assoc state :mode 4 :human? false)
    :else state))
