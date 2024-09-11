(ns tic-tac-toe.screens.mode-selection
  (:require [tic-tac-toe.print-utils :as print]
            [tic-tac-toe.render-screen :refer [render-screen]]
            [tic-tac-toe.screens.selection-button :refer [selection-button]]))

(defn- on-click [state n]
  (swap! state assoc :current-screen :board-selection
         :mode n
         :human? (if (or (= 4 n) (= 3 n)) false true)))

(defmethod render-screen :mode-selection [state]
  [:div#mode-selection.screen
   [:h2 (first print/mode-prompt)]
   (for [n [1 2 3 4]]
     ^{:key n} [selection-button (nth print/mode-prompt n) (partial on-click state n)])])