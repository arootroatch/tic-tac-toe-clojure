(ns tic-tac-toe.gui.gui-main
  (:require [quil.core :as q]
            [quil.middleware :as m]
            [tic-tac-toe.game_logs.edn :as edn]
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

(def game-id (edn/get-new-game-id edn/game-id-path))
(def filepath (edn/create-new-filepath edn/in-progress-dir-path-gui game-id))

(def state {:current-screen  :resume-selection
            :mode            nil
            :board           nil
            :first-ai-level  nil
            :second-ai-level nil
            :player          :x
            :human?          nil
            :game-state      :in-progress
            :ui              :gui})

(defn setup [state]
  (q/frame-rate 30)
  (q/background 0 0 0)
  (q/rect-mode :center)
  (q/text-align :center)
  (q/color-mode :rgb)
  state)

(defn draw-state [state]
  (:current-screen state))

(defn launch-quil [new-state]
  (q/defsketch gui-TTT
               :title "Tic-Tac-Toe"
               :size [window-size window-size]
               :setup (partial setup new-state)
               :draw draw-state
               :mouse-clicked handle-click
               :update utils/update-state
               :features [:keep-on-top]
               :middleware [m/fun-mode]))

(defmethod launch-user-interface ["gui" "--edndb"] [_]
  (let [game-id (edn/get-new-game-id edn/game-id-path)
        filepath (edn/create-new-filepath edn/in-progress-dir-path-gui game-id)
        new-state (assoc state :game-id game-id :filepath filepath)]
    (launch-quil new-state)))

(defmethod launch-user-interface ["gui" "--edndb" "--game"] [args]
  (let [game-id (Integer/parseInt (last args))
        game-log (edn/get-game-log game-id edn/logs-path)
        new-state (assoc game-log :replay? true :current-screen :replay)]
    (launch-quil new-state)))


