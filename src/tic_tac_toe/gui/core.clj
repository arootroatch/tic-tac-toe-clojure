(ns tic-tac-toe.gui.core
  (:require [quil.core :as q]
            [quil.middleware :as m]
            [tic-tac-toe.gui.board-selection :refer [board-selection]]
            [tic-tac-toe.gui.mode-selection :refer [mode-selection]]
            [tic-tac-toe.gui.level-selection :refer [level-selection]]
            [tic-tac-toe.gui.play :refer [play]]))

(def window-size 800)
(def square-size 50)

(defn setup []
  (q/background 0 0 0)
  (q/rect-mode :center)
  (q/text-align :center)
  (q/text-size 30)
  (q/color-mode :rgb)
  (q/fill 255 255 255)
  :frame-rate (q/frame-rate 2)
  :color-mode (q/color-mode :rgb)
  #_:board-selection #_(board-selection)
  #_:mode-selection #_(mode-selection)
  #_:level-selection #_(level-selection)
  :play (play 2))

(defn update-state [state])

(defn draw-state [state]
  (:level-selection state))

(defn red [x y]
  (prn x y)
  (q/fill 255 0 0))

(q/defsketch gui-TTT
             :title "Tic-Tac-Toe"
             :size [window-size window-size]
             :setup setup
             :update update-state
             :draw draw-state
             :features [:keep-on-top]
             :mouse-clicked red
             :middleware [m/fun-mode])
