(ns tic-tac-toe.game-logs.sql
  (:require [next.jdbc :as jdbc]))

(def db {:dbtype "postgres" :dbname "ttt"})
(def ds (jdbc/get-datasource db))

(defn get-new-game-id [ds]
  (let [query (jdbc/execute! ds ["SELECT id FROM games"])
        ids (map #(:games/id %) query)]
    (if (empty? ids) 1 (->> ids sort last inc))))

(defn- format-values
  [{:keys [game-id mode first-ai-level second-ai-level game-state current-screen human? ui player board]}]
  (str game-id ", " mode ", " (if (nil? first-ai-level) 0 first-ai-level) ", "
       (if (nil? second-ai-level) 0 second-ai-level) ", '" game-state "', '" current-screen "', " human? ", '" ui
       "', '" player "', '" board))

(defn log-game-state [ds state]
  (println (str "INSERT INTO games
    (id, mode, first_ai_level, second_ai_level, game_state, current_screen, human, ui, player, board)
    VALUES (" (format-values state) "')"))
  (jdbc/execute!
    ds [(str "INSERT INTO games
    (id, mode, first_ai_level, second_ai_level, game_state, current_screen, human, ui, player, board)
    VALUES (" (format-values state) "')")]))

(defn log-move [ds {:keys [board game-id player human?]}]
  (jdbc/execute!
    ds [(str "UPDATE games
    SET moves = CONCAT(moves, '" board "'), player = '" player "', human = '" human? "'
    WHERE id = " game-id)]))

(defn update-game-state [ds {:keys [game-state game-id]}]
  (prn "update state" game-state game-id)
  (jdbc/execute!
    ds [(str "UPDATE games
    SET game_state = '" game-state "'
    WHERE id = " game-id)]))

(defn- get-last-id [ds]
  (let [query (jdbc/execute! ds ["SELECT id FROM games"])
        ids (map #(:games/id %) query)
        last-id (->> ids sort last)]
    last-id))

(defn get-last-in-progress-game [ds]
  (let [last-id (get-last-id ds)
        last-game (if (some? last-id) (first (jdbc/execute! ds [(str "SELECT * FROM games WHERE id = " last-id)])))]
    (when (= ":in-progress" (:games/game_state last-game)) last-game)))

(defn set-abandoned-game-state [ds id]
  (jdbc/execute!
    ds [(str "UPDATE games
    SET game_state = 'abandoned'
    WHERE id = " id)]))

(defn- parse-value [v]
  (when (not-empty v) (last (read-string (str \[ v \])))))

(defn format-game-state [state]
  {:current-screen  (parse-value (:games/current_screen state)),
   :game-state      (parse-value (:games/game_state state)),
   :human?          (:games/human state),
   :mode            (:games/mode state),
   :first-ai-level  (:games/first_ai_level state),
   :second-ai-level (:games/second_ai_level state),
   :board           (parse-value (:games/moves state)),
   :game-id         (:games/id state),
   :ui              (parse-value (:games/ui state)),
   :player          (parse-value (:games/player state))})

(defn get-game-moves [ds id]
  (let [moves (first (jdbc/execute! ds [(str "SELECT moves FROM games WHERE id = " id)]))]
    (read-string (str \[(:games/moves moves)\] ))))