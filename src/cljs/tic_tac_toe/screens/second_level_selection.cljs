(ns tic-tac-toe.screens.second-level-selection
  (:require [tic-tac-toe.render-screen :refer [render-screen]]
            [tic-tac-toe.prompts :as prompts]
            [tic-tac-toe.screens.selection-button :refer [selection-button]]))

(defn- on-click [state n]
  (swap! state assoc :current-screen :play :second-ai-level n))

(defn- set-number [n]
  (case n 3 1 4 2 6 3))

(defmethod render-screen :second-level-selection [state]
  [:div#second-level-selection.screen
   [:h2 (nth prompts/level-prompt 1)]
   (for [n [3 4 6]]
     ^{:key n} [selection-button (nth prompts/level-prompt n) (partial on-click state (set-number n))])])
