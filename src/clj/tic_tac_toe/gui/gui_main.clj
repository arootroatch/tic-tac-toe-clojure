(ns tic-tac-toe.gui.gui-main
  (:require [quil.core :as q]
            [quil.middleware :as m]
            [tic-tac-toe.game-logs.game-logs :as game-logs]
            [tic-tac-toe.game-logs.sql :as sql]
            [tic-tac-toe.game_logs.edn-logs :as edn]
            [tic-tac-toe.gui.board-selection]
            [tic-tac-toe.gui.first-level-selection]
            [tic-tac-toe.gui.mode-selection]
            [tic-tac-toe.gui.play]
            [tic-tac-toe.gui.resume-selection]
            [tic-tac-toe.gui.second-level-selection]
            [tic-tac-toe.gui.utils :as utils]
            [tic-tac-toe.gui.utils :refer [handle-click]]
            [tic-tac-toe.launch-user-interface :refer [launch-user-interface]]
            [tic-tac-toe.tui.print-utils :as print-utils]))

(def window-size 800)

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
  (let [game-id (game-logs/get-new-game-id {:db :edn :path edn/game-id-path})
        filepath (edn/create-new-filepath edn/in-progress-dir-path game-id)
        new-state (assoc state :game-id game-id :filepath filepath :db :edn)]
    (launch-quil new-state)))

(defmethod launch-user-interface ["gui" "--psqldb"] [_]
  (let [game-id (game-logs/get-new-game-id {:db :sql :ds sql/ds})
        new-state (assoc state :game-id game-id :db :sql)]
    (launch-quil new-state)))

(defn- set-replay-state [game-log db]
  (assoc game-log :replay? true :current-screen :replay :game-state :in-progress :human? true :player :x :db db))

(defn- replay [game-id db]
  (let [game-log (game-logs/get-game-log {:db db :filepath edn/logs-path :ds sql/ds :id game-id})
        old-board (when game-log (:board game-log))
        old-state (when game-log (str (:game-state game-log)))
        new-state (set-replay-state game-log db)]
    (cond (nil? (:game-id game-log)) (print-utils/display-invalid-game-id-error game-id)
          (empty? (:moves game-log)) (print-utils/display-no-moves-error)
          (> (count old-board) 16) (println "3x3x3 games cannot be replayed in the GUI.")
          (= "abandoned" old-state) (print-utils/display-unfinished-game-error)
          :else (launch-quil new-state))))

(defmethod launch-user-interface ["gui" "--edndb" "--game"] [args]
  (replay (Integer/parseInt (last args)) :edn))

(defmethod launch-user-interface ["gui" "--psqldb" "--game"] [args]
  (replay (Integer/parseInt (last args)) :sql))