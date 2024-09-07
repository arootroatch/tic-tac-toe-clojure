(ns tic-tac-toe.screens.button)

(defn selection-button [label onclick key]
  [:button {:class "selection-btn" :on-click onclick :key key} label])
