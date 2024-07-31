(ns tic-tac-toe.tui.tui-main
  (:require [tic-tac-toe.bot-moves]
            [tic-tac-toe.eval-board :refer [score]]
            [tic-tac-toe.game-logs.game-logs :as game-logs]
            [tic-tac-toe.game-logs.sql :as sql]
            [tic-tac-toe.game_logs.edn-logs :as edn]
            [tic-tac-toe.human-moves]
            [tic-tac-toe.launch-user-interface :refer [launch-user-interface]]
            [tic-tac-toe.player :refer [switch-player take-turn]]
            [tic-tac-toe.tui.get-selection :refer [get-selection initial-3x3-board initial-3x3x3-board initial-4x4-board]]
            [tic-tac-toe.tui.print-utils :as print-utils]))

(defn- get-options [db]
  (let [mode (get-selection {:option :mode})
        human? (if (or (= mode 3) (= mode 4)) false true)
        board-selection (get-selection {:option :board})
        first-ai-level (if (= 1 mode) nil (get-selection {:option :level :ai 1 :mode mode :board board-selection}))
        second-ai-level (if (= 4 mode) (get-selection {:option :level :ai 2 :mode mode}) nil)
        board (case board-selection 1 initial-3x3-board 2 initial-4x4-board 3 initial-3x3x3-board)
        player :x
        game-id (game-logs/get-new-game-id {:db db :path edn/game-id-path :ds sql/ds})]
    {:mode   mode :first-ai-level first-ai-level :second-ai-level second-ai-level :board board :player player :ui :tui
     :human? human? :game-state :in-progress :game-id game-id}))

(defn- set-filepath [path game-options]
  (if (some? path) path (edn/create-new-filepath edn/in-progress-dir-path-tui (:game-id game-options))))

(defn- play-loop [state]
  (loop [state state]
    (let [{:keys [board player human? game-state]} state]
      (print-utils/print-board board)
      (if (not= game-state :in-progress)
        (do (game-logs/log-completed-game {:ds sql/ds :log-file edn/logs-path :state state})
            (println game-state))
        (let [new-board (take-turn state)
              new-state (assoc state :board new-board
                                     :player (switch-player player)
                                     :human? (not human?)
                                     :game-state (score new-board))]
          (game-logs/log-move {:ds sql/ds :state new-state})
          (recur new-state))))))

(defmethod launch-user-interface ["--edndb"] [_]
  (let [old-game (game-logs/get-last-in-progress-game {:db :edn :dir-path edn/in-progress-dir-path-tui})
        resume-selection (if (some? old-game) (get-selection {:option :resume-edn :filepath old-game}) nil)
        game-options (if (= 1 resume-selection) (edn/get-resumed-game-state old-game) (get-options :edn))
        filepath (set-filepath old-game game-options)]
    (when (not= 1 resume-selection)
      (edn/create-in-progress-game-file filepath game-options)
      (edn/log-game-id edn/game-id-path (:game-id game-options)))
    (play-loop (assoc game-options :filepath filepath :db :edn))))

(defmethod launch-user-interface ["--psqldb"] [_]
  (let [old-game (game-logs/get-last-in-progress-game {:db :sql :ds sql/ds})
        game-id (:games/id old-game)
        resume-selection (if (some? old-game) (get-selection {:option :resume-sql :game-id game-id}) nil)
        game-options (if (= 1 resume-selection) (sql/format-game-state old-game false) (get-options :sql))]
    (when (not= 1 resume-selection) (sql/log-game-state sql/ds game-options))
    (play-loop (assoc game-options :db :sql))))

(defmethod launch-user-interface ["--edndb" "--game"] [args]
  (let [game-id (Integer/parseInt (last args))
        game-log (edn/get-game-log game-id edn/logs-path)]
    (prn game-log)
    (if (nil? game-log)
      (print-utils/display-invalid-game-id-error game-id)
      (print-utils/play-logged-game (:moves game-log) (:game-state game-log)))))

(defmethod launch-user-interface ["--psqldb" "--game"] [args]
  (let [game-id (Integer/parseInt (last args))
        game-log (sql/get-game-log sql/ds game-id)]
    (prn game-log)
    (if (= "abandoned" (:game-state game-log))
      (print-utils/display-unfinished-game-error)
      (print-utils/play-logged-game (:moves game-log) (:game-state game-log)))))