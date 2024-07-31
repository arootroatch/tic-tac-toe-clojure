(ns tic-tac-toe.game_logs.edn-logs
  (:require [tic-tac-toe.game-logs.game-logs :as game-logs]))

(def logs-path "src/tic_tac_toe/game_logs/game-logs.edn")
(def game-id-path "src/tic_tac_toe/game_logs/game-ids.edn")
(def in-progress-dir-path-gui "src/tic_tac_toe/game_logs/in_progress/gui")
(def in-progress-dir-path-tui "src/tic_tac_toe/game_logs/in_progress/tui")

(defn read-edn-file [path]
  (try
    (clojure.edn/read-string (str \[ (slurp path) \]))
    (catch Exception _)))

(defn get-paths-in-dir [path]
  (->> (file-seq (clojure.java.io/file path))
       (map #(.getPath %))
       (filter #(not= path %))))

(defmethod game-logs/get-last-in-progress-game :edn [{:keys [dir-path]}]
  (let [in-progress-games (get-paths-in-dir dir-path)]
    (if (empty? in-progress-games)
      nil
      (->> in-progress-games
           sort
           last))))

(defn- get-current-player [board]
  (let [x (filter #{:x} board)
        o (filter #{:o} board)]
    (if (<= (count x) (count o)) :x :o)))

(defn- set-human [mode player]
  (cond
    (= 1 mode) true
    (and (= 2 mode) (= :x player)) true
    (and (= 3 mode) (= :o player)) true
    :else false))

(defn get-resumed-game-board [path]
  (let [data (read-edn-file path)
        state (first data)]
    (:board state)))

(defn get-resumed-game-state [path]
  (let [data (read-edn-file path)
        state (first data)
        board (last data)
        player (get-current-player board)
        mode (:mode state)]
    (assoc state :board board :player player :human? (set-human mode player))))

(defmethod game-logs/get-new-game-id :edn [{:keys [path]}]
  (let [last-id (last (read-edn-file path))]
    (if (some? last-id) (inc last-id) 1)))

(defn log-game-id [path id]
  (spit path (str id "\n") :append true))

(defn create-new-filepath [in-progress-dir game-id]
  (str in-progress-dir "/game-" game-id ".edn"))

(defn create-in-progress-game-file [temp-file state]
  (spit temp-file (str state "\n")))

(defmethod game-logs/log-move :edn [{:keys [state]}]
  (spit (:filepath state) (str (:board state) "\n") :append true))

(defn format-in-progress-data [path]
  (let [data (read-edn-file path)
        moves (vec (rest data))
        state (first data)]
    (when data (assoc state :moves moves))))

(defmethod game-logs/log-completed-game :edn [{:keys [state log-file]}]
  (let [temp-file (:filepath state)
        game-state (:game-state state)
        data (format-in-progress-data temp-file)]
    (when data
      (spit log-file (str (assoc data :game-state game-state) "\n") :append true)
      (clojure.java.io/delete-file temp-file))))

(defmethod game-logs/get-game-log :edn [{:keys [id filepath]}]
  (let [logs (read-edn-file filepath)]
    (first (filter #(= (:game-id %) id) logs))))