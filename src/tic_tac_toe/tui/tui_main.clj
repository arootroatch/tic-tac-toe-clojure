(ns tic-tac-toe.tui.tui-main
  (:require [tic-tac-toe.bot-moves]
            [tic-tac-toe.eval-board :refer [score]]
            [tic-tac-toe.game_logs.game-log :as game-log]
            [tic-tac-toe.human-moves]
            [tic-tac-toe.launch-user-interface :refer [launch-user-interface]]
            [tic-tac-toe.player :refer [switch-player take-turn]]
            [tic-tac-toe.tui.get-selection :refer [get-selection initial-3x3-board initial-3x3x3-board initial-4x4-board]]
            [tic-tac-toe.tui.print-utils :as print-utils]))

(defn- get-options []
  (let [mode (get-selection {:option :mode})
        board-selection (get-selection {:option :board})
        first-ai-level (if (= 1 mode) nil (get-selection {:option :level :ai 1 :mode mode :board board-selection}))
        second-ai-level (if (= 4 mode) (get-selection {:option :level :ai 2 :mode mode}) nil)
        board (case board-selection 1 initial-3x3-board 2 initial-4x4-board 3 initial-3x3x3-board)
        player :x
        game-id (game-log/get-new-game-id game-log/game-id-path)]
    {:mode mode :first-ai-level first-ai-level :second-ai-level second-ai-level :board board :player player :game-id game-id :ui :tui}))

(defn- handle-resume [n path]
  (cond
    (= 1 n) (game-log/get-resumed-game-state path)
    (= 2 n) (do (clojure.java.io/delete-file path true) (get-options))
    :else (get-options)))

(defn- set-filepath [path game-options]
  (if (some? path) path (game-log/create-new-filepath game-log/in-progress-dir-path-tui (:game-id game-options))))

(defn- play-loop [game-options filepath]
  (loop [game-options game-options]
    (let [{:keys [board player]} game-options]
      (print-utils/print-board board)
      (if (not= (score board) :in-progress)
        (do
          (game-log/log-completed-game filepath game-log/logs-path)
          (println (score board)))
        (let [new-board (take-turn game-options)]
          (game-log/log-move filepath new-board)
          (recur (assoc game-options :board new-board :player (switch-player player))))))))

(defmethod launch-user-interface :default [_]
  (let [old-game (game-log/get-last-in-progress-game game-log/in-progress-dir-path-tui)
        resume-selection (if (some? old-game) (get-selection {:option :resume :filepath old-game}) nil)
        game-options (handle-resume resume-selection old-game)
        filepath (set-filepath old-game game-options)]
    (when (not= 1 resume-selection)
      (game-log/create-in-progress-game-file filepath game-options)
      (game-log/log-game-id game-log/game-id-path (:game-id game-options)))
    (play-loop game-options filepath)))
