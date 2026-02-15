(ns tic-tac-toe.gui.level-selection
  (:require [quil.core :as q]
            [tic-tac-toe.game-logs.sql :as sql]
            [tic-tac-toe.game_logs.edn-logs :as edn]
            [tic-tac-toe.gui.components :refer [text-button]]
            [tic-tac-toe.gui.utils :as utils]
            [tic-tac-toe.prompts :as prompts]))

;region Helpers

(defn- level-key [state]
  (if (= :first-level-selection (:current-screen state))
    :first-ai-level
    :second-ai-level))

(defn- heading-text [state]
  (cond
    (= :second-level-selection (:current-screen state)) (nth prompts/level-prompt 1)
    (= 4 (:mode state)) (first prompts/level-prompt)
    :else (nth prompts/level-prompt 2)))

(defn- next-screen [state]
  (if (and (= :first-level-selection (:current-screen state))
           (= 4 (:mode state)))
    :second-level-selection
    :play))

;endregion

;region Screen Rendering

(defn- level-selection-screen [state]
  (q/background 0 0 0)
  (q/text-size 30)
  (q/text (heading-text state) 400 100)
  (text-button (nth prompts/level-prompt 3) 400 300 400 60)
  (text-button (nth prompts/level-prompt 4) 400 380 400 60)
  (text-button (nth prompts/level-prompt 6) 400 460 400 60))

(defmethod utils/update-state :first-level-selection [state]
  (level-selection-screen state)
  state)

(defmethod utils/update-state :second-level-selection [state]
  (level-selection-screen state)
  state)

;endregion

;region Persistence

(defmulti log-and-transition :db)

(defmethod log-and-transition :edn [state]
  (let [screen (next-screen state)
        new-state (assoc state :current-screen screen)]
    (when (= :play screen)
      (edn/create-in-progress-game-file (:filepath state) new-state)
      (edn/log-game-id edn/game-id-path (:game-id state)))
    new-state))

(defmethod log-and-transition :sql [state]
  (let [screen (next-screen state)
        new-state (assoc state :current-screen screen)]
    (when (= :play screen)
      (sql/log-game-state sql/ds new-state))
    new-state))

;endregion

;region Click Handling

(defn- handle-level-click [state mouse-xy]
  (let [lk (level-key state)]
    (cond
      (lk state) (lk state)
      (utils/mouse-over? 400 300 400 60 mouse-xy) (log-and-transition (assoc state lk 1))
      (utils/mouse-over? 400 380 600 60 mouse-xy) (log-and-transition (assoc state lk 2))
      (utils/mouse-over? 400 460 600 60 mouse-xy) (log-and-transition (assoc state lk 3))
      :else state)))

(defmethod utils/handle-click :first-level-selection [state mouse-xy]
  (handle-level-click state mouse-xy))

(defmethod utils/handle-click :second-level-selection [state mouse-xy]
  (handle-level-click state mouse-xy))

;endregion
