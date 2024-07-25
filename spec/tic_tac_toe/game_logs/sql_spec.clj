(ns tic-tac-toe.game-logs.sql-spec
  (:require [speclj.core :refer :all]
            [speclj.stub :as stub]
            [tic-tac-toe.game-logs.sql :refer :all]
            [next.jdbc :as jdbc]))

(def initial-state {:game-id 7
                    :filepath "src/tic_tac_toe/game_logs/in_progress/gui/game-7.edn"
                    :current-screen :play
                    :second-ai-level nil
                    :mode 3
                    :first-ai-level 3
                    :game-state :in-progress
                    :human? false
                    :ui :gui
                    :player :x
                    :board [1 2 3 4 5 6 7 8 9]})
(def game-log [{:games/current_screen ":play",
                :games/game_state "X wins!",
                :games/human false, :games/mode 3,
                :games/first_ai_level 3,
                :games/second_ai_level 0,
                :games/board "[1 2 3 4 5 6 7 8 9]",
                :games/id 7,
                :games/ui ":gui",
                :games/player ":x",
                :games/moves "[1 2 3 4 :x 6 7 8 9][:o 2 3 4 :x 6 7 8 9]"}])
(def db-test {:dbtype "postgres" :dbname "ttt-test"})
(def ds-test (jdbc/get-datasource db-test))

(describe "db functions"
  (with-stubs)

  (it "gets new game ID"
    (with-redefs [jdbc/execute! (stub :execute {:return []})]
      (should= 1 (get-new-game-id ds-test)))
    (should= 8 (get-new-game-id ds-test)))

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
      (should= ["UPDATE games\n    SET moves = CONCAT(moves, '[1 2 3 4 :x 6 7 8 9]')\n    WHERE id = 7"]
               (last (last (stub/invocations-of :execute))))))

  (it "concats next move with last move"
    (with-redefs [jdbc/execute! (stub :execute)]
      (log-move ds-test (assoc initial-state :board [:o 2 3 4 :x 6 7 8 9]))
      (should= ["UPDATE games\n    SET moves = CONCAT(moves, '[:o 2 3 4 :x 6 7 8 9]')\n    WHERE id = 7"]
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
  )

