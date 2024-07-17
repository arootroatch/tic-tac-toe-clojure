(ns tic-tac-toe.gui.gui-main
  (:require [quil.core :as q]
            [quil.middleware :as m]
            [tic-tac-toe.game_logs.game-log :as game-log]
            [tic-tac-toe.gui.board-selection]
            [tic-tac-toe.gui.first-level-selection]
            [tic-tac-toe.gui.mode-selection]
            [tic-tac-toe.gui.play]
            [tic-tac-toe.gui.second-level-selection]
            [tic-tac-toe.gui.resume-selection]
            [tic-tac-toe.gui.utils :as utils]
            [tic-tac-toe.gui.utils :refer [handle-click]]
            [tic-tac-toe.launch-user-interface :refer [launch-user-interface]]))

(def window-size 800)

(def game-id (game-log/get-new-game-id game-log/game-id-path))
(def filepath (game-log/create-new-filepath game-log/in-progress-dir-path-gui game-id))

(def state {:current-screen  :resume-selection
            :mode            nil
            :board           nil
            :first-ai-level  nil
            :second-ai-level nil
            :player          :x
            :human?          nil
            :game-state      :in-progress
            :ui              :gui
            :game-id         game-id
            :filepath        filepath})

(defn setup []
  (q/frame-rate 30)
  (q/background 0 0 0)
  (q/rect-mode :center)
  (q/text-align :center)
  (q/color-mode :rgb)
  state)

(defn replay-setup [state]
  (q/frame-rate 1)
  (q/background 0 0 0)
  (q/rect-mode :center)
  (q/text-align :center)
  (q/color-mode :rgb)
  state)

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

(defmethod launch-user-interface ["gui" "--game"] [args]
  (let [game-id (Integer/parseInt (last args))
        game-log (game-log/get-game-log game-id game-log/logs-path)
        state (assoc game-log :replay? true :current-screen :replay)]
    (q/defsketch gui-replay
                 :title "Tic-Tac-Toe"
                 :size [window-size window-size]
                 :setup (partial replay-setup state)
                 :draw draw-state
                 :mouse-clicked handle-click
                 :update utils/update-state
                 :features [:keep-on-top]
                 :middleware [m/fun-mode])))

