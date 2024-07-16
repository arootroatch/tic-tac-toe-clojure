(ns tic-tac-toe.game_logs.game-log)

(def logs-path "src/tic_tac_toe/game_logs/game-logs.edn")
(def game-id-path "src/tic_tac_toe/game_logs/game-ids.edn")
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
    (prn path last-game)
    (when (some? data) (:game-id (first data)))))

(defn get-new-game-id [path]
  (let [last-id (last (read-edn-file path))]
    (if (some? last-id) (inc last-id) 1)))

(defn log-game-id [path id]
  (spit path (str id "\n") :append true))

(defn create-new-filepath [in-progress-dir game-id]
  (let [filename (str in-progress-dir "/game-" game-id ".edn")]
    filename))

(defn create-in-progress-game-file [temp-file state]
    (spit temp-file state))

(defn log-move [temp-file move]
  (spit temp-file move :append true))

(defn format-in-progress-data [path]
  (let [data (read-edn-file path)
        moves (rest data)
        state (first data)]
    (assoc state :moves moves)))

(defn log-completed-game [temp-file log-file]
  (let [data (format-in-progress-data temp-file)]
    (spit log-file (str data "\n") :append true)
    (clojure.java.io/delete-file temp-file)))


