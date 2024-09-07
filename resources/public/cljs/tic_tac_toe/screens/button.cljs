(ns tic-tac-toe.screens.button)

(defn selection-button [label onclick key]
  ^{:key key}[:button {:class "selection-btn" :on-click onclick} label])
