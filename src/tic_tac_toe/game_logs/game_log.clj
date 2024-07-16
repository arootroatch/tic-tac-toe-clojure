(ns tic-tac-toe.game_logs.game-log)

(def logs-path "src/tic_tac_toe/game_logs/game-logs.edn")
(def game-id-path "src/tic_tac_toe/game_logs/game-ids.edn")
(def in-progress-dir-path-gui "src/tic_tac_toe/game_logs/in_progress/gui")
(def in-progress-dir-path-tui "src/tic_tac_toe/game_logs/in_progress/tui")

(defn read-edn-file [path]
  (try
    (clojure.edn/read-string (str \[ (slurp path) \]))
    (catch Exception _)))

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

(defn get-resumed-game-state [path]
  (let [data (read-edn-file path)
        state (first data)
        board (last data)
        player (get-current-player board)
        mode (:mode state)]
    (assoc state :board board :player player :human? (set-human mode player))))

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
  (spit temp-file (str state "\n")))

(defn log-move [temp-file move]
  (spit temp-file (str move "\n") :append true))

(defn format-in-progress-data [path]
  (let [data (read-edn-file path)
        moves (rest data)
        state (first data)]
    (when data (assoc state :moves moves))))

(defn log-completed-game [temp-file log-file]
  (let [data (format-in-progress-data temp-file)]
    (when data
      (spit log-file (str data "\n") :append true)
      (clojure.java.io/delete-file temp-file))))


