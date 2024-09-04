(ns tic-tac-toe.game-logs.sql-spec
  (:require [next.jdbc :as jdbc]
            [speclj.core :refer :all]
            [tic-tac-toe.game-logs.game-logs :as game-logs]
            [tic-tac-toe.game-logs.sql :refer :all]
            [tic-tac-toe.game-logs.test-data :refer :all]))

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

(def db-test {:dbtype "postgres" :dbname "ttt-test"})
(def ds-test (jdbc/get-datasource db-test))
(defn populate-db [] (run! #(log-game-state ds-test %) test-data))
(defn clear-db [] (jdbc/execute! ds-test ["TRUNCATE TABLE games;"]))

(describe "db functions"
  (before-all (clear-db))
  (after (clear-db))

  (it "gets new game ID"
    (should= 1 (game-logs/get-new-game-id {:db :sql :ds ds-test}))
    (populate-db)
    (should= 29 (game-logs/get-new-game-id {:db :sql :ds ds-test})))

  (it "logs game state to db"
    (log-game-state ds-test initial-state)
    (let [result (jdbc/execute! ds-test ["SELECT * FROM games WHERE id = 7"])]
      (should= game-log result)))

  (it "logs each move as it's played"
    (log-game-state ds-test initial-state)
    (game-logs/log-move {:ds ds-test :state (assoc initial-state :board [1 2 3 4 :x 6 7 8 9] :db :sql)})
    (let [result (jdbc/execute! ds-test ["SELECT moves FROM games WHERE id = 7"])]
      (should= [{:games/moves "[1 2 3 4 :x 6 7 8 9]"}] result)))

  (it "concats next move with last move"
    (log-game-state ds-test initial-state)
    (game-logs/log-move {:ds ds-test :state (assoc initial-state :board [1 2 3 4 :x 6 7 8 9] :db :sql)})
    (game-logs/log-move {:ds ds-test :state (assoc initial-state :board [:o 2 3 4 :x 6 7 8 9] :db :sql)})
    (let [result (jdbc/execute! ds-test ["SELECT moves FROM games WHERE id = 7"])]
      (should= [{:games/moves "[1 2 3 4 :x 6 7 8 9][:o 2 3 4 :x 6 7 8 9]"}] result)))

  (it "updates game state"
    (log-game-state ds-test initial-state)
    (game-logs/log-completed-game {:ds    ds-test
                                   :state (assoc initial-state :game-state "X wins!" :db :sql)})
    (let [result (jdbc/execute! ds-test ["SELECT game_state FROM games WHERE id = 7"])]
      (should= [{:games/game_state "X wins!"}] result)))

  (it "gets last in progress game"
    (log-game-state ds-test initial-state)
    (should= (first game-log) (game-logs/get-last-in-progress-game {:db :sql :ds ds-test})))

  (it "last in progress game returns nil if the last game is not in progress"
    (populate-db)
    (should= nil (game-logs/get-last-in-progress-game {:db :sql :ds ds-test})))

  (it "sets game state to abandoned"
    (log-game-state ds-test initial-state)
    (set-abandoned-game-state ds-test 7)
    (should= "abandoned" (->> (jdbc/execute! ds-test ["SELECT game_state FROM games WHERE id = 7"])
                              first
                              :games/game_state)))

  (it "formats game state"
    (should= in-progress-formatted (format-game-state in-progress false))
    (should= (assoc in-progress-formatted :board [1 2 3 4 5 6 7 8 9]) (format-game-state in-progress true))
    (should= (assoc in-progress-formatted :game-state "O wins!")
             (format-game-state (assoc in-progress :games/game_state "O wins!") false)))

  (it "gets game log"
    (log-game-state ds-test initial-state)
    (should= game-log-formatted
             (game-logs/get-game-log {:ds ds-test :id 7 :db :sql}))))

