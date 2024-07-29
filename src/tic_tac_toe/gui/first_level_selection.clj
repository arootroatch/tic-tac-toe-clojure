(ns tic-tac-toe.gui.first-level-selection
  (:require [quil.core :as q]
            [tic-tac-toe.game_logs.edn :as game-log]
            [tic-tac-toe.gui.components :refer [text-button]]
            [tic-tac-toe.gui.utils :as utils]
            [tic-tac-toe.tui.print-utils :as print]))

(defn first-level-selection-screen [state]
  (q/background 0 0 0)
  (q/text-size 30)
  (if (= 4 (:mode state))
    (q/text (first print/level-prompt) 400 100)
    (q/text (nth print/level-prompt 2) 400 100))
  (text-button (nth print/level-prompt 3) 400 300 400 60)
  (text-button (nth print/level-prompt 4) 400 380 400 60)
  (text-button (nth print/level-prompt 6) 400 460 400 60))

(defmethod utils/update-state :first-level-selection [state]
  (first-level-selection-screen state)
  state)

(defn- set-level [n state]
  (if (= 4 (:mode state))
    (assoc state :first-ai-level n :current-screen :second-level-selection)
    (let [new-state (assoc state :first-ai-level n :current-screen :play)]
      (game-log/create-in-progress-game-file (:filepath state) new-state)
      (game-log/log-game-id game-log/game-id-path (:game-id state))
      new-state)))

(defmethod utils/handle-click :first-level-selection [state mouse-xy]
  (cond
    (:first-ai-level state) (:first-ai-level state)
    (utils/mouse-over? 400 300 400 60 mouse-xy) (set-level 1 state)
    (utils/mouse-over? 400 380 600 60 mouse-xy) (set-level 2 state)
    (utils/mouse-over? 400 460 600 60 mouse-xy) (set-level 3 state)
    :else state))
