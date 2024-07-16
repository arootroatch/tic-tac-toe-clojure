(ns tic-tac-toe.gui.gui-main
  (:require [quil.core :as q]
            [quil.middleware :as m]
            [tic-tac-toe.gui.play]
            [tic-tac-toe.gui.utils :as utils]
            [tic-tac-toe.gui.utils :refer [handle-click]]
            [tic-tac-toe.launch-user-interface :refer [launch-user-interface]]
            [tic-tac-toe.gui.mode-selection]
            [tic-tac-toe.gui.first-level-selection]
            [tic-tac-toe.gui.second-level-selection]
            [tic-tac-toe.gui.board-selection]))

(def window-size 800)

(defn setup []
  (q/frame-rate 30)
  (q/background 0 0 0)
  (q/rect-mode :center)
  (q/text-align :center)
  (q/color-mode :rgb)
  {:current-screen  :mode-selection
   :mode            nil
   :board           nil
   :first-ai-level  nil
   :second-ai-level nil
   :player          :x
   :human?          nil
   :game-state      :in-progress
   :gui             true})

(defn draw-state [state]
  (:current-screen state))

(defmethod launch-user-interface ["gui"] [_]
  (q/defsketch gui-TTT
               :title "Tic-Tac-Toe"
               :size [window-size window-size]
               :setup setup
               :draw draw-state
               :mouse-clicked handle-click
               :update utils/update-state
               :features [:keep-on-top]
               :middleware [m/fun-mode]))

