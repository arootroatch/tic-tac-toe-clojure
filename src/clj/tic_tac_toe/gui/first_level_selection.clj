(ns tic-tac-toe.gui.first-level-selection
  (:require [quil.core :as q]
            [tic-tac-toe.game-logs.sql :as sql]
            [tic-tac-toe.game_logs.edn-logs :as edn]
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

(defmulti set-next-screen :db)

(defmethod set-next-screen :edn [state]
  (if (= 4 (:mode state))
    (assoc state :current-screen :second-level-selection)
    (let [new-state (assoc state :current-screen :play)]
      (edn/create-in-progress-game-file (:filepath state) new-state)
      (edn/log-game-id edn/game-id-path (:game-id state))
      new-state)))

(defmethod set-next-screen :sql [state]
  (if (= 4 (:mode state))
    (assoc state :current-screen :second-level-selection)
    (let [new-state (assoc state :current-screen :play)]
      (sql/log-game-state sql/ds new-state)
      new-state)))

(defmethod utils/handle-click :first-level-selection [state mouse-xy]
  (cond
    (:first-ai-level state) (:first-ai-level state)
    (utils/mouse-over? 400 300 400 60 mouse-xy) (set-next-screen (assoc state :first-ai-level 1))
    (utils/mouse-over? 400 380 600 60 mouse-xy) (set-next-screen (assoc state :first-ai-level 2))
    (utils/mouse-over? 400 460 600 60 mouse-xy) (set-next-screen (assoc state :first-ai-level 3))
    :else state))
