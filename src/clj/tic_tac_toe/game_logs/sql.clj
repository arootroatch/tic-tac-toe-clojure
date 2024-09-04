(ns tic-tac-toe.game-logs.sql
  (:require [next.jdbc :as jdbc]
            [tic-tac-toe.game-logs.game-logs :as game-logs]))

(def db {:dbtype "postgres" :dbname "ttt"})
(def ds (jdbc/get-datasource db))

(defmethod game-logs/get-new-game-id :sql [{:keys [ds]}]
  (let [query (jdbc/execute! ds ["SELECT id FROM games"])
        ids (map #(:games/id %) query)]
    (if (empty? ids) 1 (->> ids sort last inc))))

(defn- format-values
  [{:keys [game-id mode first-ai-level second-ai-level game-state current-screen human? ui player board]}]
  (str game-id ", " mode ", " (if (nil? first-ai-level) 0 first-ai-level) ", "
       (if (nil? second-ai-level) 0 second-ai-level) ", '" game-state "', '" current-screen "', " human? ", '" ui
       "', '" player "', '" board))

(defn log-game-state [ds state]
  (jdbc/execute!
    ds [(str "INSERT INTO games
    (id, mode, first_ai_level, second_ai_level, game_state, current_screen, human, ui, player, board)
    VALUES (" (format-values state) "')")]))

(defmethod game-logs/log-move :sql [{:keys [ds state]}]
  (let [{:keys [board game-id player human?]} state]
    (jdbc/execute!
      ds [(str "UPDATE games
    SET moves = CONCAT(moves, '" board "'), player = '" player "', human = '" human? "'
    WHERE id = " game-id)])))

(defmethod game-logs/log-completed-game :sql [{:keys [ds state]}]
  (let [{:keys [game-state game-id]} state]
    (jdbc/execute!
      ds [(str "UPDATE games SET game_state = '" game-state "' WHERE id = " game-id)])))

(defn- get-last-id [ds]
  (let [query (jdbc/execute! ds ["SELECT id FROM games ORDER BY id DESC LIMIT 1"])]
    (-> query first :games/id)))

(defmethod game-logs/get-last-in-progress-game :sql [{:keys [ds]}]
  (let [last-id (get-last-id ds)
        last-game (if (some? last-id) (first (jdbc/execute! ds [(str "SELECT * FROM games WHERE id = " last-id)])))]
    (when (= ":in-progress" (:games/game_state last-game)) last-game)))

(defn set-abandoned-game-state [ds id]
  (jdbc/execute!
    ds [(str "UPDATE games
    SET game_state = 'abandoned'
    WHERE id = " id)]))

(defn- parse-value [v]
  (when (not-empty v) (read-string (str v))))

(defn- parse-board [board]
  (when (not-empty board) (last (read-string (str \[ board \])))))

(defn- parse-state [state]
  (let [parsed (when (some? state) (read-string state))]
    (if (= :in-progress parsed) parsed state)))

(defn format-game-state [state replay?]
  {:current-screen  (parse-value (:games/current_screen state)),
   :game-state      (parse-state (:games/game_state state)),
   :human?          (:games/human state),
   :mode            (:games/mode state),
   :first-ai-level  (:games/first_ai_level state),
   :second-ai-level (:games/second_ai_level state),
   :board           (if replay? (parse-board (:games/board state)) (parse-board (:games/moves state))),
   :game-id         (:games/id state),
   :ui              (parse-value (:games/ui state)),
   :player          (parse-value (:games/player state))
   :db              :sql})

(defmethod game-logs/get-game-log :sql [{:keys [ds id]}]
  (let [game-log (jdbc/execute! ds [(str "SELECT * FROM games WHERE id = " id)])
        formatted (format-game-state (first game-log) true)
        moves (read-string (str \[ (:games/moves (first game-log)) \]))]
    (assoc formatted :moves moves)))

