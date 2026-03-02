(ns tic-tac-toe.game-logs.sql-spec
  (:require [speclj.core :refer :all]
            [tic-tac-toe.game-logs.sql :refer :all]))

(def initial-state {:game-id         7
                    :filepath        "src/tic_tac_toe/game_logs/in_progress/gui/game-7.edn"
                    :current-screen  :play
                    :second-ai-level nil
                    :mode            3
                    :first-ai-level  3
                    :game-state      :in-progress
                    :human?          false
                    :ui              :gui
                    :player          :x
                    :board           [1 2 3 4 5 6 7 8 9]})

(def game-log [{:games/current_screen  ":play",
                :games/game_state      ":in-progress",
                :games/human           false,
                :games/mode            3,
                :games/first_ai_level  3,
                :games/second_ai_level 0,
                :games/board           "[1 2 3 4 5 6 7 8 9]",
                :games/id              7,
                :games/ui              ":gui",
                :games/player          ":x",
                :games/moves           nil}])

(def game-log-formatted {:game-id         7
                         :current-screen  :play
                         :db              :sql
                         :moves           []
                         :second-ai-level 0
                         :mode            3
                         :first-ai-level  3
                         :game-state      :in-progress
                         :human?          false
                         :ui              :gui
                         :player          :x
                         :board           [1 2 3 4 5 6 7 8 9]})

(def in-progress {:games/current_screen  "",
                  :games/game_state      ":in-progress",
                  :games/human           false,
                  :games/mode            2,
                  :games/first_ai_level  3,
                  :games/second_ai_level 0,
                  :games/board           "[1 2 3 4 5 6 7 8 9]",
                  :games/id              8,
                  :games/ui              ":tui",
                  :games/player          ":o",
                  :games/moves           "[1 2 3 4 :x 6 7 8 9][:o 2 3 4 :x 6 7 8 9]"})

(def in-progress-formatted {:current-screen  nil,
                            :game-state      :in-progress,
                            :human?          false,
                            :mode            2,
                            :first-ai-level  3,
                            :second-ai-level 0,
                            :board           [:o 2 3 4 :x 6 7 8 9],
                            :game-id         8,
                            :ui              :tui,
                            :player          :o,
                            :db              :sql})

(def game-log-formatted-2 (assoc in-progress-formatted
                            :board [1 2 3 4 5 6 7 8 9]
                            :moves [[1 2 3 4 :x 6 7 8 9] [:o 2 3 4 :x 6 7 8 9]]))

(describe "sql pure functions"

  (it "formats in-progress game state for resuming"
    (should= in-progress-formatted (format-game-state in-progress false)))

  (it "formats in-progress game state for replay (uses board instead of moves)"
    (should= (assoc in-progress-formatted :board [1 2 3 4 5 6 7 8 9])
             (format-game-state in-progress true)))

  (it "formats completed game state"
    (should= (assoc in-progress-formatted :game-state "O wins!")
             (format-game-state (assoc in-progress :games/game_state "O wins!") false))))
