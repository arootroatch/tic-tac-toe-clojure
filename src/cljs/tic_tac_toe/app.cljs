(ns tic-tac-toe.app
  (:require [tic-tac-toe.render-screen :refer [render-screen]]
            [tic-tac-toe.state :refer [state]]
            [tic-tac-toe.screens.mode-selection]
            [tic-tac-toe.screens.board-selection]
            [tic-tac-toe.screens.first-level-selection]
            [tic-tac-toe.screens.second-level-selection]
            ))

(defn app []
  [:div#app-wrapper
   [:h1 "Tic-Tac-Toe"]
   (render-screen state)])