(ns tic-tac-toe.screens.selection-button)

(defn selection-button [label onclick]
  [:button {:class "selection-btn" :on-click onclick} label])
