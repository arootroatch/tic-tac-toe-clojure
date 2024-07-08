(ns tic-tac-toe.gui.core
  (:require [quil.core :as q]
            [quil.middleware :as m]
            [tic-tac-toe.gui.board-selection :refer [board-selection-screen board-selection]]
            [tic-tac-toe.gui.first-level-selection :refer [first-level-selection-screen first-level-selection]]
            [tic-tac-toe.gui.mode-selection :refer [mode-selection-screen mode-selection]]
            [tic-tac-toe.gui.play :refer [clicked play]]
            [tic-tac-toe.gui.second-level-selection :refer [second-level-selection-screen second-level-selection]]))

(def window-size 800)

(defn setup []
  (q/frame-rate 30)
  (q/background 0 0 0)
  (q/rect-mode :center)
  (q/text-align :center)
  (q/color-mode :rgb)
  {:current-screen  mode-selection-screen
   :mode            nil
   :board           nil
   :first-ai-level  nil
   :second-ai-level nil
   :player          :x})

(defn- switch-player [player]
  (if (= :x player) :o :x))

(defn update-state [state]
  #_(assoc state
      :current-screen (play state)
      :board (if (clicked state) (assoc (:board state) (clicked state) (:player state)) (:board state))
      :player (if (clicked state) (switch-player (:player state)) (:player state)))

  (cond
    (nil? (:mode state)) (assoc state :current-screen mode-selection-screen :mode (mode-selection state))
    (nil? (:board state)) (assoc state :current-screen board-selection-screen :board (board-selection state))
    (and (not= 1 (:mode state)) (nil? (:first-ai-level state))) (assoc state :current-screen (partial first-level-selection-screen state)
                                                                             :first-ai-level (first-level-selection state))
    (and (= 4 (:mode state)) (nil? (:second-ai-level state))) (assoc state :current-screen (partial second-level-selection-screen state)
                                                                           :second-ai-level (second-level-selection state))
    :else (assoc state
            :current-screen (partial play state)
            :board (if (clicked state) (assoc (:board state) (clicked state) (:player state)) (:board state))
            :player (if (clicked state) (switch-player (:player state)) (:player state)))))


(defn draw-state [state]
  (prn state)
  ((:current-screen state)))

(q/defsketch gui-TTT
             :title "Tic-Tac-Toe"
             :size [window-size window-size]
             :setup setup
             :draw draw-state
             ;:mouse-clicked
             :update update-state
             :features [:keep-on-top]
             :middleware [m/fun-mode])
