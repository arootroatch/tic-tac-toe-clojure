(ns tic-tac-toe.screens.first-level-selection
  (:require [tic-tac-toe.render-screen :refer [render-screen]]
            [tic-tac-toe.print-utils :as print]
            [tic-tac-toe.screens.selection-button :refer [selection-button]]
            [tic-tac-toe.state :refer [state]]))

(defn- on-click []
  (swap! state assoc :current-screen (if (= 4 (:mode @state)) :second-level-selection :play)))

(defn selection-heading [state]
  (if (= 4 (:mode @state)) (first print/level-prompt) (nth print/level-prompt 2)))

(defmethod render-screen :first-level-selection [state]
  [:div#first-level-selection.screen
   [:h2 (selection-heading state)]
   (map #(selection-button (nth print/level-prompt %) on-click %) [3 4 6])])
