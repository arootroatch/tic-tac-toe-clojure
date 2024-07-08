(ns tic-tac-toe.gui.core
  (:require [quil.core :as q]
            [quil.middleware :as m]
            [tic-tac-toe.gui.board-selection :refer [board-selection]]
            [tic-tac-toe.gui.first-level-selection :refer [first-level-selection]]
            [tic-tac-toe.gui.mode-selection :refer [mode-selection]]
            [tic-tac-toe.gui.play :refer [clicked play]]
            [tic-tac-toe.gui.second-level-selection :refer [second-level-selection]]))

(def window-size 800)

(defn setup []
  (q/frame-rate 30)
  (q/background 0 0 0)
  (q/rect-mode :center)
  (q/text-align :center)
  (q/color-mode :rgb)
  {:current-screen  (mode-selection nil)
   :mode            nil
   :board           (vec (range 1 10))
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
    (nil? (:mode state)) (assoc state :current-screen (mode-selection state) :mode (mode-selection state))
    (nil? (:board state)) (assoc state :current-screen (board-selection state) :board (board-selection state))
    (and (not= 1 (:mode state)) (nil? (:first-ai-level state))) (assoc state :current-screen (first-level-selection state) :first-ai-level (first-level-selection state))
    (and (= 4 (:mode state)) (nil? (:second-ai-level state))) (assoc state :current-screen (second-level-selection state) :second-ai-level (second-level-selection state))
    :else (assoc state
            :current-screen (play state)
            :board (if (clicked state) (assoc (:board state) (clicked state) (:player state)) (:board state))
            :player (if (clicked state) (switch-player (:player state)) (:player state)))))


(defn draw-state [state]
  (prn state)
  (:current-screen state))

(q/defsketch gui-TTT
             :title "Tic-Tac-Toe"
             :size [window-size window-size]
             :setup setup
             :update update-state
             :draw draw-state
             :features [:keep-on-top]
             :middleware [m/fun-mode])
