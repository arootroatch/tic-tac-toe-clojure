(ns tic-tac-toe.gui.core
  (:require [quil.core :as q]
            [quil.middleware :as m]))

(def window-size 800)
(def square-size 50)

(defn setup []
  (q/rect-mode :center)
  :frame-rate (q/frame-rate 2)
  :color-mode (q/color-mode :rgb))

(defn update-state [state])

(defn draw-state [state]
  (q/background 0))

(q/defsketch gui-TTT
             :title "Tic-Tac-Toe"
             :size [window-size window-size]
             :setup setup
             :update update-state
             :draw draw-state
             :features [:keep-on-top]
             :middleware [m/fun-mode])
