(ns tic-tac-toe.screens.mode-selection
  (:require [tic-tac-toe.render-screen :refer [render-screen]]
            [tic-tac-toe.print-utils :as print]
            [tic-tac-toe.screens.button :refer [selection-button]]
            [tic-tac-toe.state :refer [state]]))

(defn- on-click [n]
  (swap! state assoc :current-screen :board-selection)
  (swap! state assoc :mode n)
  (println @state))

(defmethod render-screen :mode-selection [_]
  [:div#mode-selection
   [:h2 (first print/mode-prompt)]
   (map #(selection-button (nth print/mode-prompt %) (partial on-click %) %) [1 2 3 4])
   ])