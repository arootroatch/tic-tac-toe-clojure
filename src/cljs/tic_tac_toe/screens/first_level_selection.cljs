(ns tic-tac-toe.screens.first-level-selection
  (:require [tic-tac-toe.render-screen :refer [render-screen]]
            [tic-tac-toe.print-utils :as print]
            [tic-tac-toe.screens.selection-button :refer [selection-button]]))

(defn- on-click [state n]
  (swap! state assoc :current-screen (if (= 4 (:mode @state)) :second-level-selection :play))
  (swap! state assoc :first-ai-level n))

(defn- selection-heading [state]
  (if (= 4 (:mode @state)) (first print/level-prompt) (nth print/level-prompt 2)))

(defn- set-number [n]
  (case n 3 1 4 2 6 3))

(defmethod render-screen :first-level-selection [state]
  [:div#first-level-selection.screen
   [:h2 (selection-heading state)]
   (for [n [3 4 6]]
     ^{:key n}[selection-button (nth print/level-prompt n) (partial on-click state (set-number n))])])
