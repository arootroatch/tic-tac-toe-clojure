(ns integration.edn-integration-spec
  (:require [speclj.core :refer :all]
            [clojure.java.io :as io]
            [tic-tac-toe.game-logs.game-logs :as game-logs]
            [tic-tac-toe.game_logs.edn-logs :as edn])
  (:import [java.nio.file Files]
           [java.nio.file.attribute FileAttribute]))

(defn delete-dir-recursive! [path]
  (let [f (io/file path)]
    (when (.exists f)
      (when (.isDirectory f)
        (doseq [child (.listFiles f)]
          (delete-dir-recursive! (.getPath child))))
      (.delete f))))

(def temp-dir (atom nil))

(describe "EDN integration"
  (tags :integration)

  (before
    (reset! temp-dir (str (Files/createTempDirectory "ttt-edn-test" (into-array FileAttribute [])))))

  (after
    (delete-dir-recursive! @temp-dir))

  (it "read-edn-file reads EDN entries from file"
    (let [path (str @temp-dir "/test.edn")]
      (spit path "{:game-id 1 :ui :tui}\n{:game-id 2 :ui :gui}\n")
      (should= [{:game-id 1 :ui :tui} {:game-id 2 :ui :gui}]
               (edn/read-edn-file path))))

  (it "read-edn-file returns nil for nonexistent file"
    (should-be-nil (edn/read-edn-file (str @temp-dir "/nonexistent.edn"))))

  (it "get-paths-in-dir lists files in directory"
    (spit (str @temp-dir "/file1.edn") "data")
    (spit (str @temp-dir "/file2.edn") "data")
    (let [paths (set (edn/get-paths-in-dir @temp-dir))]
      (should-contain (str @temp-dir "/file1.edn") paths)
      (should-contain (str @temp-dir "/file2.edn") paths)
      (should= 2 (count paths))))

  (it "get-new-game-id returns 1 when no ids exist"
    (let [path (str @temp-dir "/game-ids.edn")]
      (spit path "")
      (should= 1 (game-logs/get-new-game-id {:db :edn :path path}))))

  (it "get-new-game-id returns next id"
    (let [path (str @temp-dir "/game-ids.edn")]
      (spit path "1\n2\n3\n")
      (should= 4 (game-logs/get-new-game-id {:db :edn :path path}))))

  (it "log-game-id appends id to file"
    (let [path (str @temp-dir "/game-ids.edn")]
      (spit path "")
      (edn/log-game-id path 1)
      (edn/log-game-id path 2)
      (should= [1 2] (edn/read-edn-file path))))

  (it "create-in-progress-game-file writes game state"
    (let [path (str @temp-dir "/game-1.edn")
          state {:game-id 1 :game-state :in-progress :ui :tui :mode 2
                 :board [1 2 3 4 5 6 7 8 9] :first-ai-level 3
                 :second-ai-level nil :player :x :human? true}]
      (edn/create-in-progress-game-file path state)
      (let [data (edn/read-edn-file path)]
        (should= 1 (count data))
        (should= 1 (:game-id (first data))))))

  (it "log-move appends board to in-progress file"
    (let [path (str @temp-dir "/game-1.edn")]
      (edn/create-in-progress-game-file path {:game-id 1 :game-state :in-progress :mode 2})
      (game-logs/log-move {:state {:db :edn :filepath path :board [1 2 3 4 :x 6 7 8 9]}})
      (let [data (edn/read-edn-file path)]
        (should= 2 (count data))
        (should= [1 2 3 4 :x 6 7 8 9] (second data)))))

  (it "format-in-progress-data returns state with moves vector"
    (let [path (str @temp-dir "/game-1.edn")]
      (edn/create-in-progress-game-file path {:game-id 1 :game-state :in-progress :mode 2
                                               :board [1 2 3 4 5 6 7 8 9] :ui :tui
                                               :first-ai-level 3 :second-ai-level nil
                                               :player :x :human? true})
      (spit path "[1 2 3 4 5 6 7 8 9]\n" :append true)
      (spit path "[1 2 3 4 :x 6 7 8 9]\n" :append true)
      (let [formatted (edn/format-in-progress-data path)]
        (should= 1 (:game-id formatted))
        (should= [[1 2 3 4 5 6 7 8 9] [1 2 3 4 :x 6 7 8 9]] (:moves formatted)))))

  (it "log-completed-game writes to log and deletes temp file"
    (let [temp-file (str @temp-dir "/game-1.edn")
          log-file (str @temp-dir "/game-logs.edn")]
      (edn/create-in-progress-game-file temp-file {:game-id 1 :game-state :in-progress :mode 2
                                                    :board [1 2 3 4 5 6 7 8 9] :ui :tui
                                                    :first-ai-level 3 :second-ai-level nil
                                                    :player :x :human? true})
      (spit temp-file "[1 2 3 4 5 6 7 8 9]\n" :append true)
      (spit temp-file "[1 2 3 4 :x 6 7 8 9]\n" :append true)
      (spit log-file "")
      (game-logs/log-completed-game {:state {:db :edn :filepath temp-file :game-state "X wins!"}
                                     :log-file log-file})
      (should-not (.exists (io/file temp-file)))
      (let [logs (edn/read-edn-file log-file)]
        (should= 1 (count logs))
        (should= "X wins!" (:game-state (first logs))))))

  (it "get-game-log retrieves game by id"
    (let [log-file (str @temp-dir "/game-logs.edn")]
      (spit log-file "{:game-id 1 :moves [] :game-state \"X wins!\" :ui :tui}\n")
      (spit log-file "{:game-id 2 :moves [] :game-state \"O wins!\" :ui :gui}\n" :append true)
      (let [result (game-logs/get-game-log {:db :edn :id 2 :filepath log-file})]
        (should= 2 (:game-id result))
        (should= "O wins!" (:game-state result)))))

  (it "get-resumed-game-state reconstructs full state from file"
    (let [path (str @temp-dir "/game-1.edn")]
      (edn/create-in-progress-game-file path {:game-id 1 :game-state :in-progress :mode 2
                                               :board [1 2 3 4 5 6 7 8 9] :ui :tui
                                               :first-ai-level 3 :second-ai-level nil
                                               :player :x :human? true})
      (spit path "[1 2 3 4 5 6 7 8 9]\n" :append true)
      (spit path "[1 2 3 4 :x 6 7 8 9]\n" :append true)
      (let [result (edn/get-resumed-game-state path)]
        (should= 1 (:game-id result))
        (should= :edn (:db result))
        (should= [1 2 3 4 :x 6 7 8 9] (:board result))
        (should= :o (:player result))
        (should= false (:human? result))
        (should= path (:filepath result))))))
