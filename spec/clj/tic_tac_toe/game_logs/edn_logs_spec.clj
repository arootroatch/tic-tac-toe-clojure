(ns tic-tac-toe.game-logs.edn-logs-spec
  (:require [speclj.core :refer :all]
            [tic-tac-toe.game-logs.game-logs :as game-logs]
            [tic-tac-toe.game_logs.edn-logs :refer :all]))

;region Fixture data (inline replacements for filesystem reads)

(def test-path "spec/clj/tic_tac_toe/game_logs/game-logs-test.edn")
(def game-ids-test-path "spec/clj/tic_tac_toe/game_logs/game-ids.edn")
(def empty-test-path "spec/clj/tic_tac_toe/game_logs/game-logs-empty-test.edn")

(def test-path-content
  (str "{:game-id    1\n :moves      []\n :game-state :in-progress\n :ui         :gui}\n"
       "{:game-id    2\n :moves      []\n :game-state :in-progress\n :ui         :tui}\n"
       "{:game-id 5, :filepath \"src/clj/tic_tac_toe/game_logs/in_progress/gui/game-5.edn\", :current-screen :play, :moves [[1 2 3 4 :x 6 7 8 9] [:o 2 3 4 :x 6 7 8 9] [:o 2 3 4 :x :x 7 8 9] [:o 2 3 :o :x :x 7 8 9] [:o 2 :x :o :x :x 7 8 9] [:o 2 :x :o :x :x :o 8 9]], :second-ai-level nil, :mode 2, :first-ai-level 3, :game-state \"O wins!\", :human? true, :ui :gui, :player :x, :board [1 2 3 4 5 6 7 8 9]}\n"
       "{:mode 2, :first-ai-level 3, :second-ai-level nil, :board [1 2 3 4 5 6 7 8 9], :player :x, :game-id 6, :ui :tui, :moves [[1 :x 3 4 5 6 7 8 9] [:o :x 3 4 5 6 7 8 9] [:o :x 3 :x 5 6 7 8 9] [:o :x 3 :x :o 6 7 8 9] [:o :x 3 :x :o 6 :x 8 9] [:o :x 3 :x :o 6 :x 8 :o]]}\n"))

(def game-ids-content "1\n2\n3\n4\n")

(def empty-file-content "")

(def game-4-path "spec/clj/tic_tac_toe/game_logs/in_progress/game-4.edn")
(def game-4-content
  (str "{:game-id 4\n :game-state :in-progress\n :ui :gui\n :mode 2\n :board [1 2 3 4 5 6 7 8 9]\n :first-ai-level 3\n :second-ai-level nil\n :player :x\n :human? true}\n\n"
       "[1 2 3 4 5 6 7 8 9]\n"
       "[1 2 3 4 :x 6 7 8 9]\n"))

(def completed-game-path "spec/clj/tic_tac_toe/game_logs/in_progress/completed-game.edn")
(def completed-game-content
  (str "{:game-id 5\n :game-state :in-progress\n :ui :gui\n :mode 2\n :board [1 2 3 4 5 6 7 8 9]\n :first-ai-level 3\n :second-ai-level nil\n :player :x\n :human? true}\n\n"
       "[1 2 3 4 5 6 7 8 9]\n"
       "[1 2 3 4 :x 6 7 8 9]\n"
       "[:o 2 3 4 :x 6 7 8 9]\n"
       "[:o 2 3 4 :x :x 7 8 9]\n"
       "[:o 2 3 :o :x :x 7 8 9]\n"
       "[:o :x 3 :o :x :x 7 8 9]\n"
       "[:o :x 3 :o :x :x :o 8 9]\n"))

(defn fake-slurp [path]
  (condp = path
    test-path test-path-content
    game-ids-test-path game-ids-content
    empty-test-path empty-file-content
    game-4-path game-4-content
    completed-game-path completed-game-content
    (throw (java.io.FileNotFoundException. (str "Fake slurp: file not found " path)))))

;endregion

;region Public defs (imported by tui_main_spec)

(def resumed-state {:game-id         4
                    :game-state      :in-progress
                    :ui              :gui
                    :mode            2
                    :board           [1 2 3 4 :x 6 7 8 9]
                    :first-ai-level  3
                    :second-ai-level nil
                    :player          :o
                    :human?          false
                    :db              :edn
                    :filepath        "spec/clj/tic_tac_toe/game_logs/in_progress/game-4.edn"})

(def game-log {:game-id 5, :filepath "src/clj/tic_tac_toe/game_logs/in_progress/gui/game-5.edn", :current-screen :play, :moves '([1 2 3 4 :x 6 7 8 9] [:o 2 3 4 :x 6 7 8 9] [:o 2 3 4 :x :x 7 8 9] [:o 2 3 :o :x :x 7 8 9] [:o 2 :x :o :x :x 7 8 9] [:o 2 :x :o :x :x :o 8 9]), :second-ai-level nil, :mode 2, :first-ai-level 3, :game-state "O wins!", :human? true, :ui :gui, :player :x, :board [1 2 3 4 5 6 7 8 9]})

;endregion

(describe "logging games"
  (with-stubs)
  (redefs-around [slurp fake-slurp])

  (it "gets all game-logs"
    (should= [
              {:game-id 1, :moves [], :game-state :in-progress, :ui :gui}
              {:game-id 2, :moves [], :game-state :in-progress, :ui :tui}
              game-log
              {:mode 2, :first-ai-level 3, :second-ai-level nil, :board [1 2 3 4 5 6 7 8 9], :player :x, :game-id 6, :ui :tui, :moves '([1 :x 3 4 5 6 7 8 9] [:o :x 3 4 5 6 7 8 9] [:o :x 3 :x 5 6 7 8 9] [:o :x 3 :x :o 6 7 8 9] [:o :x 3 :x :o 6 :x 8 9] [:o :x 3 :x :o 6 :x 8 :o])}
              ]
             (read-edn-file test-path)))

  (it "gets last in progress game"
    (with-redefs [get-paths-in-dir (stub :get-paths {:return ["spec/tic_tac_toe/game_logs/in_progress/game-5.edn"
                                                              "spec/tic_tac_toe/game_logs/in_progress/game-4.edn"]})]
      (should= "spec/tic_tac_toe/game_logs/in_progress/game-5.edn"
               (game-logs/get-last-in-progress-game {:db :edn :dir-path "spec/tic_tac_toe/game_logs/in_progress"}))))

  (it "gets resumed game's board"
    (should= [1 2 3 4 5 6 7 8 9] (get-resumed-game-board game-4-path)))

  (it "gets game state for resumed game"
    (should= resumed-state
             (get-resumed-game-state game-4-path)))

  (it "adds game id to game id file"
    (with-redefs [spit (stub :spit)]
      (log-game-id game-ids-test-path 5)
      (should-have-invoked :spit {:with ["spec/clj/tic_tac_toe/game_logs/game-ids.edn" "5\n" :append true]})))

  (it "gets paths in given directory"
    (let [mock-files (map #(java.io.File. %)
                          ["spec/clj/tic_tac_toe/game_logs"
                           "spec/clj/tic_tac_toe/game_logs/game-logs-test.edn"
                           "spec/clj/tic_tac_toe/game_logs/game-ids.edn"
                           "spec/clj/tic_tac_toe/game_logs/in_progress"
                           "spec/clj/tic_tac_toe/game_logs/in_progress/game-4.edn"])]
      (with-redefs [clojure.java.io/file (constantly nil)
                    file-seq (constantly mock-files)]
        (should= #{"spec/clj/tic_tac_toe/game_logs/game-logs-test.edn"
                    "spec/clj/tic_tac_toe/game_logs/game-ids.edn"
                    "spec/clj/tic_tac_toe/game_logs/in_progress"
                    "spec/clj/tic_tac_toe/game_logs/in_progress/game-4.edn"}
                 (set (get-paths-in-dir "spec/clj/tic_tac_toe/game_logs"))))))

  (it "creates new filename and path for in progress game"
    (should= "spec/clj/tic_tac_toe/game_logs/in_progress/game-5.edn"
             (create-new-filepath "spec/clj/tic_tac_toe/game_logs/in_progress" 5)))

  (it "creates in progress game file with game data"
    (with-redefs [spit (stub :spit)]
      (create-in-progress-game-file "spec/clj/tic_tac_toe/game_logs/in_progress/game-5.edn" {:game-state :in-progress :game-id 5})
      (should-have-invoked :spit {:with ["spec/clj/tic_tac_toe/game_logs/in_progress/game-5.edn"
                                         "{:game-state :in-progress, :game-id 5}\n"]})))

  (it "logs move to temp-file"
    (with-redefs [spit (stub :spit)]
      (game-logs/log-move {:state {:db :edn :filepath "spec/clj/tic_tac_toe/game_logs/in_progress/game-4.edn" :board [:x 2 3 4 5 6 7 8 9]}})
      (should-have-invoked :spit {:with ["spec/clj/tic_tac_toe/game_logs/in_progress/game-4.edn"
                                         "[:x 2 3 4 5 6 7 8 9]\n"
                                         :append true]})))


  (context "get-new-game-id"
    (it "gets new game id"
      (should= 5 (game-logs/get-new-game-id {:db :edn :path game-ids-test-path})))

    (it "returns 1 if no previous games"
      (should= 1 (game-logs/get-new-game-id {:db :edn :path empty-test-path})))
    )


  (context "format in progress data"
    (it "formats data from in-progress file for completed games log"
      (should= {:game-id         4
                :game-state      :in-progress
                :ui              :gui
                :mode            2
                :board           [1 2 3 4 5 6 7 8 9]
                :first-ai-level  3
                :second-ai-level nil
                :player          :x
                :human?          true
                :moves           [[1 2 3 4 5 6 7 8 9]
                                  [1 2 3 4 :x 6 7 8 9]]}
               (format-in-progress-data game-4-path)))

    (it "returns nil if temp-fil does not exist"
      (should= nil (format-in-progress-data "spec/clj/tic_tac_toe/game_logs/in_progress/game-5.edn")))
    )


  (context "log completed game"
    (it "writes completed game to game log"
      (with-redefs [spit (stub :spit)
                    clojure.java.io/delete-file (stub :delete-file)]
        (game-logs/log-completed-game {:state    {:filepath completed-game-path :db :edn :game-state "O wins!"}
                                       :log-file test-path})
        (should-have-invoked :spit {:with ["spec/clj/tic_tac_toe/game_logs/game-logs-test.edn"
                                           "{:game-id 5, :moves [[1 2 3 4 5 6 7 8 9] [1 2 3 4 :x 6 7 8 9] [:o 2 3 4 :x 6 7 8 9] [:o 2 3 4 :x :x 7 8 9] [:o 2 3 :o :x :x 7 8 9] [:o :x 3 :o :x :x 7 8 9] [:o :x 3 :o :x :x :o 8 9]], :second-ai-level nil, :mode 2, :first-ai-level 3, :game-state \"O wins!\", :human? true, :ui :gui, :player :x, :board [1 2 3 4 5 6 7 8 9]}\n"
                                           :append true]})))

    (it "deletes temp file after logging"
      (with-redefs [spit (stub :spit)
                    clojure.java.io/delete-file (stub :delete-file)]
        (game-logs/log-completed-game {:state    {:filepath game-4-path :db :edn}
                                       :log-file test-path})
        (should-have-invoked :delete-file {:with [game-4-path]})))

    (it "doesn't run if temp-file does not exist"
      (with-redefs [spit (stub :spit)
                    clojure.java.io/delete-file (stub :delete-file)]
        (game-logs/log-completed-game {:state    {:filepath "spec/clj/tic_tac_toe/game_logs/in_progress/game-5.edn" :db :edn}
                                       :log-file test-path})
        (should-not-have-invoked :spit)
        (should-not-have-invoked :delete-file)))
    )

  (context "get-game-log"
    (it "gets game log for given game id"
      (should= {:game-id 1, :moves [], :game-state :in-progress, :ui :gui}
               (game-logs/get-game-log {:id 1 :db :edn :filepath test-path}))
      (should= game-log
               (game-logs/get-game-log {:id 5 :filepath test-path :db :edn})))

    (it "returns nil if game id does not exist"
      (should= nil (game-logs/get-game-log {:id 10 :filepath test-path :db :edn})))
    )
  )
