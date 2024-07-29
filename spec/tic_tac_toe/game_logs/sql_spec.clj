(ns tic-tac-toe.game-logs.sql-spec
  (:require [next.jdbc :as jdbc]
            [speclj.core :refer :all]
            [speclj.stub :as stub]
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
                :games/game_state      "X wins!",
                :games/human           false,
                :games/mode            3,
                :games/first_ai_level  3,
                :games/second_ai_level 0,
                :games/board           "[1 2 3 4 5 6 7 8 9]",
                :games/id              7,
                :games/ui              ":gui",
                :games/player          ":x",
                :games/moves           "[1 2 3 4 :x 6 7 8 9][:o 2 3 4 :x 6 7 8 9]"}])

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
                            :player          :o,})

(def db-test {:dbtype "postgres" :dbname "ttt-test"})
(def ds-test (jdbc/get-datasource db-test))

(describe "db functions"
  (with-stubs)

  (it "gets new game ID"
    (with-redefs [jdbc/execute! (stub :execute {:return []})]
      (should= 1 (get-new-game-id ds-test)))
    (should= 9 (get-new-game-id ds-test)))

  (it "logs game state to db"
    (with-redefs [jdbc/execute! (stub :execute)]
      (log-game-state ds-test initial-state)
      (should= ["INSERT INTO games\n    (id, mode, first_ai_level, second_ai_level, game_state, current_screen, human, ui, player, board)\n    VALUES (7, 3, 3, 0, ':in-progress', ':play', false, ':gui', ':x', '[1 2 3 4 5 6 7 8 9]')"]
               (last (last (stub/invocations-of :execute)))))
    (let [result (jdbc/execute! ds-test ["SELECT * FROM games WHERE id = 7"])]
      (should= game-log result)))

  (it "logs each move as it's played"
    (with-redefs [jdbc/execute! (stub :execute)]
      (log-move ds-test (assoc initial-state :board [1 2 3 4 :x 6 7 8 9]))
      (should=  ["UPDATE games\n    SET moves = CONCAT(moves, '[1 2 3 4 :x 6 7 8 9]'), player = ':x', human = 'false'\n    WHERE id = 7"]
               (last (last (stub/invocations-of :execute))))))

  (it "concats next move with last move"
    (with-redefs [jdbc/execute! (stub :execute)]
      (log-move ds-test (assoc initial-state :board [:o 2 3 4 :x 6 7 8 9]))
      (should= ["UPDATE games\n    SET moves = CONCAT(moves, '[:o 2 3 4 :x 6 7 8 9]'), player = ':x', human = 'false'\n    WHERE id = 7"]
               (last (last (stub/invocations-of :execute)))))
    (let [result (jdbc/execute! ds-test ["SELECT moves FROM games WHERE id = 7"])]
      (should= [{:games/moves "[1 2 3 4 :x 6 7 8 9][:o 2 3 4 :x 6 7 8 9]"}] result)))

  (it "updates game state"
    (with-redefs [jdbc/execute! (stub :execute)]
      (update-game-state ds-test (assoc initial-state :game-state "X wins!"))
      (should= ["UPDATE games\n    SET game_state = 'X wins!'\n    WHERE id = 7"]
               (last (last (stub/invocations-of :execute)))))
    (let [result (jdbc/execute! ds-test ["SELECT game_state FROM games WHERE id = 7"])]
      (should= [{:games/game_state "X wins!"}] result)))

  (it "gets last in progress game"
    (should= in-progress (get-last-in-progress-game ds-test)))

  (it "sets game state to abandoned"
    (set-abandoned-game-state ds-test 1)
    (should= "abandoned" (->> (jdbc/execute! ds-test [(str "SELECT game_state FROM games WHERE id = " 1)])
                              first
                              :games/game_state)))

  (it "formats game state"
    (should= in-progress-formatted (format-game-state in-progress)))

  (it "get game moves to replay"
    (should= [[1 2 3 4 :x 6 7 8 9][:o 2 3 4 :x 6 7 8 9]] (get-game-moves ds-test 7)))
  )

