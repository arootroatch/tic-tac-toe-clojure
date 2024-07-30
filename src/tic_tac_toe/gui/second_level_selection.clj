(ns tic-tac-toe.gui.second-level-selection
  (:require [quil.core :as q]
            [tic-tac-toe.game_logs.edn-logs :as game-log]
            [tic-tac-toe.gui.components :refer [text-button]]
            [tic-tac-toe.gui.utils :as utils]
            [tic-tac-toe.tui.print-utils :as print]))

(defn- second-level-selection []
  (q/background 0 0 0)
  (q/text-size 30)
  (q/text (nth print/level-prompt 1) 400 100)
  (text-button (nth print/level-prompt 3) 400 300 400 60)
  (text-button (nth print/level-prompt 4) 400 380 400 60)
  (text-button (nth print/level-prompt 6) 400 460 400 60))

(defmethod utils/update-state :second-level-selection [state]
  (second-level-selection)
  state)

(defn set-level [n state]
  (let [new-state (assoc state :second-ai-level n :current-screen :play)]
    (game-log/create-in-progress-game-file (:filepath state) new-state)
    (game-log/log-game-id game-log/game-id-path (:game-id state))
    new-state))

(defmethod utils/handle-click :second-level-selection [state mouse-xy]
  (cond
    (:second-ai-level state) (:second-ai-level state)
    (utils/mouse-over? 400 300 400 60 mouse-xy) (set-level 1 state)
    (utils/mouse-over? 400 380 600 60 mouse-xy) (set-level 2 state)
    (utils/mouse-over? 400 460 600 60 mouse-xy) (set-level 3 state)
    :else state))
