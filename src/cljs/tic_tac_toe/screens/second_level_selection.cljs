(ns tic-tac-toe.screens.second-level-selection
  (:require [tic-tac-toe.render-screen :refer [render-screen]]
            [tic-tac-toe.print-utils :as print]
            [tic-tac-toe.screens.selection-button :refer [selection-button]]
            [tic-tac-toe.state :refer [state]]))

(defn- on-click []
  (swap! state assoc :current-screen :play))

(defmethod render-screen :second-level-selection [_]
  [:div#second-level-selection.screen
   [:h2 (nth print/level-prompt 1)]
   (map #(selection-button (nth print/level-prompt %) on-click %) [3 4 6])])
