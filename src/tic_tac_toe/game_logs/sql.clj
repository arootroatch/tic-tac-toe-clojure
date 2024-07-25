(ns tic-tac-toe.game-logs.sql
  (:require [next.jdbc :as jdbc]))

(def db {:dbtype "postgres" :dbname "ttt"})
(def ds (jdbc/get-datasource db))

(defn get-new-game-id [ds]
  (let [query (jdbc/execute! ds ["SELECT id FROM games"])
        ids (map #(:games/id %) query)]
    (if (empty? ids) 1 (->> ids (sort) (last) (inc)))))

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

(defn log-move [ds {:keys [board game-id]}]
  (jdbc/execute!
    ds [(str "UPDATE games
    SET moves = CONCAT(moves, '" board "')
    WHERE id = " game-id)]))

(defn update-game-state [ds {:keys [game-state game-id]}]
  (jdbc/execute!
    ds [(str "UPDATE games
    SET game_state = '" game-state "'
    WHERE id = " game-id)]))