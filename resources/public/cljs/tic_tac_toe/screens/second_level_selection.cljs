(ns tic-tac-toe.screens.second-level-selection
  (:require [tic-tac-toe.render-screen :refer [render-screen]]
            [tic-tac-toe.print-utils :as print]
            [tic-tac-toe.screens.selection-button :refer [selection-button]]))

(defn- on-click [state n]
  (swap! state assoc :current-screen :play :second-ai-level n))

(defn- set-number [n]
  (case n 3 1 4 2 6 3))

(defmethod render-screen :second-level-selection [state]
  [:div#second-level-selection.screen
   [:h2 (nth print/level-prompt 1)]
   (map #(selection-button (nth print/level-prompt %) (partial on-click state (set-number %)) %) [3 4 6])])
