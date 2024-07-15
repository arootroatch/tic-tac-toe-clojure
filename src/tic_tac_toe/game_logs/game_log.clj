(ns tic-tac-toe.game_logs.game-log)

(def logs-path "src/tic_tac_toe/game_logs/game-logs.edn")
(def in-progress-dir-path "src/tic_tac_toe/game_logs/in_progress")

(defn read-edn-file [path]
  (clojure.edn/read-string (str \[ (slurp path) \])))

(defn get-last-completed-game [path]
  (last (read-edn-file path)))

(defn get-paths-in-dir [path]
  (->> (file-seq (clojure.java.io/file path))
       (map #(.getPath %))
       (filter #(not= path %))))

(defn get-last-in-progress-game [path]
  (let [in-progress-games (get-paths-in-dir path)]
    (if (empty? in-progress-games)
      nil
      (->> in-progress-games
           sort
           last))))

(defn get-last-in-progress-game-id [path]
  (let [last-game (get-last-in-progress-game path)
        data (when (some? last-game) (read-edn-file last-game))]
    (when (some? data) (:game-id (first data)))))

(defn get-last-game-id [path in-progress-dir]
  (let [last-in-progress-game-id (get-last-in-progress-game-id in-progress-dir)
        last-completed-game (get-last-completed-game path)
        last-completed-game-id (:game-id last-completed-game)]
    (if (some? last-in-progress-game-id)
      (max last-in-progress-game-id last-completed-game-id)
      last-completed-game-id)))

(defn get-new-game-id [path in-progress-dir]
  (let [last-id (get-last-game-id path in-progress-dir)]
    (if (some? last-id) (inc last-id) 1)))

(defn create-in-progress-game-file [path in-progress-dir state]
  (let [game-id (get-new-game-id path in-progress-dir)
        filename (str in-progress-dir "/game-" game-id ".edn")
        data (assoc state :game-id game-id)]
    (spit filename data)))

(defn log-move [temp-file move]
  (spit temp-file move :append true))

(defn format-in-progress-data [path]
  (let [data (read-edn-file path)
        moves (rest data)
        state (first data)]
    (assoc state :moves moves)))

(defn log-completed-game [temp-file log-file]
  (let [data (format-in-progress-data temp-file)]
    (spit log-file data :append true)
    (clojure.java.io/delete-file temp-file)))


