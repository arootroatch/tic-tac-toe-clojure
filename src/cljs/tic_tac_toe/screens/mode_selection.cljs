(ns tic-tac-toe.screens.mode-selection
  (:require [tic-tac-toe.render-screen :refer [render-screen]]
            [tic-tac-toe.print-utils :as print]
            [tic-tac-toe.screens.selection-button :refer [selection-button]]))

(defn- on-click [state n]
  (swap! state assoc :current-screen :board-selection)
  (swap! state assoc :mode n))

(defmethod render-screen :mode-selection [state]
  [:div#mode-selection.screen
   [:h2 (first print/mode-prompt)]
   (map #(selection-button (nth print/mode-prompt %) (partial on-click state %) %) [1 2 3 4])])