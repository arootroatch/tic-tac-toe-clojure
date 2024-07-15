(ns tic-tac-toe.gui.first-level-selection
  (:require [quil.core :as q]
            [tic-tac-toe.gui.components :refer [text-button]]
            [tic-tac-toe.gui.utils :as utils]
            [tic-tac-toe.tui.print-utils :as print]))

(defmethod utils/update-state :first-level-selection [state]
  (q/background 0 0 0)
  (q/text-size 30)
  (if (= 4 (:mode state))
    (q/text (first print/level-prompt) 400 100)
    (q/text (nth print/level-prompt 2) 400 100))
  (text-button (nth print/level-prompt 3) 400 300 400 60)
  (text-button (nth print/level-prompt 4) 400 380 400 60)
  (text-button (nth print/level-prompt 6) 400 460 400 60)
  state)

(defn- set-screen [state]
  (if (= 4 (:mode state)) :second-level-selection :play))

(defmethod utils/handle-click :first-level-selection [state mouse-xy]
  (cond
    (:first-ai-level state) (:first-ai-level state)
    (utils/mouse-over? 400 300 400 60 mouse-xy) (assoc state :first-ai-level 1 :current-screen (set-screen state))
    (utils/mouse-over? 400 380 600 60 mouse-xy) (assoc state :first-ai-level 2 :current-screen (set-screen state))
    (utils/mouse-over? 400 460 600 60 mouse-xy) (assoc state :first-ai-level 3 :current-screen (set-screen state))
    :else state))
