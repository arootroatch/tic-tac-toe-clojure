(ns tic-tac-toe.app
  (:require [reagent.dom :as rd]
            [reagent.core :as r]
            [c3kit.wire.js :as wjs]
            [tic-tac-toe.render-screen :refer [render-screen]]
            [tic-tac-toe.state :refer [state]]
            [tic-tac-toe.screens.mode-selection]))

(defn app []
  [:div#app-wrapper
   [:h1 "Tic-Tac-Toe"]
   (render-screen state)])