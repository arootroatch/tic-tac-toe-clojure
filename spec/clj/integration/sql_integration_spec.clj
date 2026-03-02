(ns integration.sql-integration-spec
  (:require [speclj.core :refer :all]
            [next.jdbc :as jdbc]
            [tic-tac-toe.game-logs.sql :as sql]
            [tic-tac-toe.game-logs.game-logs :as game-logs]))

(def test-db-name "ttt-integration-test")
(def test-db {:dbtype "postgres" :dbname test-db-name})
(def admin-ds (jdbc/get-datasource {:dbtype "postgres" :dbname "postgres"}))

(defn drop-test-db! []
  (with-open [conn (jdbc/get-connection admin-ds)]
    (.setAutoCommit conn true)
    (jdbc/execute! conn [(str "DROP DATABASE IF EXISTS \"" test-db-name "\"")])))

(defn create-test-db! []
  (with-open [conn (jdbc/get-connection admin-ds)]
    (.setAutoCommit conn true)
    (jdbc/execute! conn [(str "CREATE DATABASE \"" test-db-name "\"")])))

(def create-table-sql
  "CREATE TABLE IF NOT EXISTS games (
    id INTEGER PRIMARY KEY,
    mode INTEGER,
    first_ai_level INTEGER,
    second_ai_level INTEGER,
    game_state TEXT,
    current_screen TEXT,
    human BOOLEAN,
    ui TEXT,
    player TEXT,
    board TEXT,
    moves TEXT)")

(def test-ds (atom nil))

(def sample-state
  {:game-id 1 :mode 2 :first-ai-level 3 :second-ai-level 0
   :game-state ":in-progress" :current-screen :play
   :human? true :ui :tui :player :x :board [1 2 3 4 5 6 7 8 9]})

(describe "SQL integration"
  (tags :integration)

  (before-all
    (drop-test-db!)
    (create-test-db!)
    (reset! test-ds (jdbc/get-datasource test-db))
    (jdbc/execute! @test-ds [create-table-sql]))

  (before
    (jdbc/execute! @test-ds ["TRUNCATE TABLE games"]))

  (after-all
    (reset! test-ds nil)
    (drop-test-db!))

  (it "get-new-game-id returns 1 for empty table"
    (should= 1 (game-logs/get-new-game-id {:db :sql :ds @test-ds})))

  (it "get-new-game-id returns next id after insert"
    (sql/log-game-state @test-ds sample-state)
    (should= 2 (game-logs/get-new-game-id {:db :sql :ds @test-ds})))

  (it "log-game-state inserts a row"
    (sql/log-game-state @test-ds sample-state)
    (let [row (first (jdbc/execute! @test-ds ["SELECT * FROM games WHERE id = 1"]))]
      (should= 1 (:games/id row))
      (should= 2 (:games/mode row))
      (should= 3 (:games/first_ai_level row))
      (should= ":in-progress" (:games/game_state row))))

  (it "log-move appends move data"
    (sql/log-game-state @test-ds sample-state)
    (game-logs/log-move {:ds @test-ds :state {:db :sql :game-id 1
                                              :board [1 2 3 4 :x 6 7 8 9]
                                              :player :o :human? false}})
    (let [row (first (jdbc/execute! @test-ds ["SELECT moves, player, human FROM games WHERE id = 1"]))]
      (should= "[1 2 3 4 :x 6 7 8 9]" (:games/moves row))
      (should= ":o" (:games/player row))
      (should= false (:games/human row))))

  (it "log-completed-game updates game state"
    (sql/log-game-state @test-ds sample-state)
    (game-logs/log-completed-game {:ds @test-ds :state {:db :sql :game-id 1 :game-state "X wins!"}})
    (let [row (first (jdbc/execute! @test-ds ["SELECT game_state FROM games WHERE id = 1"]))]
      (should= "X wins!" (:games/game_state row))))

  (it "get-last-in-progress-game returns nil when no games"
    (should-be-nil (game-logs/get-last-in-progress-game {:db :sql :ds @test-ds})))

  (it "get-last-in-progress-game returns last in-progress game"
    (sql/log-game-state @test-ds sample-state)
    (let [result (game-logs/get-last-in-progress-game {:db :sql :ds @test-ds})]
      (should= 1 (:games/id result))
      (should= ":in-progress" (:games/game_state result))))

  (it "get-last-in-progress-game returns nil when last game is completed"
    (sql/log-game-state @test-ds sample-state)
    (game-logs/log-completed-game {:ds @test-ds :state {:db :sql :game-id 1 :game-state "X wins!"}})
    (should-be-nil (game-logs/get-last-in-progress-game {:db :sql :ds @test-ds})))

  (it "set-abandoned-game-state marks game abandoned"
    (sql/log-game-state @test-ds sample-state)
    (sql/set-abandoned-game-state @test-ds 1)
    (let [row (first (jdbc/execute! @test-ds ["SELECT game_state FROM games WHERE id = 1"]))]
      (should= "abandoned" (:games/game_state row))))

  (it "get-game-log retrieves formatted game with moves"
    (sql/log-game-state @test-ds (assoc sample-state :game-state ":in-progress"))
    (game-logs/log-move {:ds @test-ds :state {:db :sql :game-id 1
                                              :board [1 2 3 4 :x 6 7 8 9]
                                              :player :o :human? false}})
    (game-logs/log-move {:ds @test-ds :state {:db :sql :game-id 1
                                              :board [:o 2 3 4 :x 6 7 8 9]
                                              :player :x :human? true}})
    (let [result (game-logs/get-game-log {:db :sql :ds @test-ds :id 1})]
      (should= 1 (:game-id result))
      (should= :sql (:db result))
      (should= [1 2 3 4 5 6 7 8 9] (:board result))
      (should= 2 (count (:moves result)))))

  (it "format-game-state converts raw row to game state map"
    (sql/log-game-state @test-ds sample-state)
    (let [raw (first (jdbc/execute! @test-ds ["SELECT * FROM games WHERE id = 1"]))
          formatted (sql/format-game-state raw false)]
      (should= 1 (:game-id formatted))
      (should= :sql (:db formatted))
      (should= 2 (:mode formatted))
      (should= :play (:current-screen formatted))
      (should= :tui (:ui formatted)))))

(describe "ensure-db! end-to-end"
  (tags :integration)

  (def ensure-db-name "ttt-ensure-test")

  (after
    (with-open [conn (jdbc/get-connection admin-ds)]
      (.setAutoCommit conn true)
      (jdbc/execute! conn [(str "DROP DATABASE IF EXISTS \"" ensure-db-name "\"")])))

  (it "creates database and table from scratch"
    (with-open [conn (jdbc/get-connection admin-ds)]
      (.setAutoCommit conn true)
      (jdbc/execute! conn [(str "DROP DATABASE IF EXISTS \"" ensure-db-name "\"")]))
    (let [test-db {:dbtype "postgres" :dbname ensure-db-name}
          test-ds (jdbc/get-datasource test-db)]
      (with-redefs [sql/db test-db
                    sql/ds test-ds]
        (sql/ensure-db!)
        (should (sql/database-exists? ensure-db-name))
        (should-not-throw
          (jdbc/execute! test-ds ["INSERT INTO games (id, mode) VALUES (1, 2)"]))))))
