(ns tic-tac-toe.gui.core
  (:require [quil.core :as q]
            [quil.middleware :as m]
            [tic-tac-toe.eval-board :as eval]
            [tic-tac-toe.gui.board-selection :refer [board-selection-screen]]
            [tic-tac-toe.gui.first-level-selection :refer [first-level-selection-screen]]
            [tic-tac-toe.gui.mode-selection :refer [mode-selection-screen]]
            [tic-tac-toe.gui.play :refer [play]]
            [tic-tac-toe.gui.second-level-selection :refer [second-level-selection-screen]]
            [tic-tac-toe.gui.utils :as utils]
            [tic-tac-toe.gui.utils :refer [handle-click]]
            [tic-tac-toe.player :as player]))

(def window-size 800)

(defn setup []
  (q/frame-rate 30)
  (q/background 0 0 0)
  (q/rect-mode :center)
  (q/text-align :center)
  (q/color-mode :rgb)
  {:current-screen  (mode-selection-screen)
   :mode            nil
   :board           nil
   :first-ai-level  nil
   :second-ai-level nil
   :player          :x
   :human?          nil
   :game-state      :in-progress
   :gui             true})

(defn ai-turn [state]
  (let [{:keys [mode player]} state
        new-board (player/take-turn state)]
    (assoc state
      :current-screen (play state)
      :board new-board
      :human? (if (not= 4 mode) true false)
      :player (utils/switch-player player)
      :game-state (eval/score new-board))))

(defn update-state [state]
  (let [{:keys [mode board game-state human? second-ai-level first-ai-level]} state]
    (cond
      (nil? mode) (assoc state :current-screen (mode-selection-screen))
      (nil? board) (assoc state :current-screen (board-selection-screen))
      (and (not= 1 mode) (nil? first-ai-level)) (assoc state :current-screen (first-level-selection-screen state))
      (and (= 4 mode) (nil? second-ai-level)) (assoc state :current-screen (second-level-selection-screen))
      (and (= :in-progress game-state) human?) (assoc state :current-screen (play state))
      (and (= :in-progress game-state) (not human?)) (ai-turn state)
      :else (assoc state :current-screen (play state)))))

(defn draw-state [state]
  (:current-screen state))

(q/defsketch gui-TTT
             :title "Tic-Tac-Toe"
             :size [window-size window-size]
             :setup setup
             :draw draw-state
             :mouse-clicked handle-click
             :update update-state
             :features [:keep-on-top]
             :middleware [m/fun-mode])
