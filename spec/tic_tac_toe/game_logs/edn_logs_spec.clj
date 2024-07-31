(ns tic-tac-toe.game-logs.edn-logs-spec
  (:require [speclj.core :refer :all]
            [tic-tac-toe.game-logs.game-logs :as game-logs]
            [tic-tac-toe.game_logs.edn-logs :refer :all]))

(def test-path "spec/tic_tac_toe/game_logs/game-logs-test.edn")
(def game-ids-test-path "spec/tic_tac_toe/game_logs/game-ids.edn")
(def empty-test-path "spec/tic_tac_toe/game_logs/game-logs-empty-test.edn")

(describe "logging games"
  (with-stubs)
  (it "gets all game-logs"
    (should= [
              {:game-id 1, :moves [], :game-state :in-progress, :ui :gui}
              {:game-id 2, :moves [], :game-state :in-progress, :ui :tui}
              {:game-id 5, :filepath "src/tic_tac_toe/game_logs/in_progress/gui/game-5.edn", :current-screen :play, :moves '([1 2 3 4 :x 6 7 8 9] [:o 2 3 4 :x 6 7 8 9] [:o 2 3 4 :x :x 7 8 9] [:o 2 3 :o :x :x 7 8 9] [:o 2 :x :o :x :x 7 8 9] [:o 2 :x :o :x :x :o 8 9]), :second-ai-level nil, :mode 2, :first-ai-level 3, :game-state :in-progress, :human? true, :ui :gui, :player :x, :board [1 2 3 4 5 6 7 8 9]}
              {:mode 2, :first-ai-level 3, :second-ai-level nil, :board [1 2 3 4 5 6 7 8 9], :player :x, :game-id 6, :ui :tui, :moves '([1 :x 3 4 5 6 7 8 9] [:o :x 3 4 5 6 7 8 9] [:o :x 3 :x 5 6 7 8 9] [:o :x 3 :x :o 6 7 8 9] [:o :x 3 :x :o 6 :x 8 9] [:o :x 3 :x :o 6 :x 8 :o])}
              ]
             (read-edn-file test-path)))

  (it "gets last in progress game"
    (with-redefs [get-paths-in-dir (stub :get-paths {:return ["spec/tic_tac_toe/game_logs/in_progress/game-5.edn"
                                                              "spec/tic_tac_toe/game_logs/in_progress/game-4.edn"]})]
      (should= "spec/tic_tac_toe/game_logs/in_progress/game-5.edn"
               (game-logs/get-last-in-progress-game {:db :edn :dir-path "spec/tic_tac_toe/game_logs/in_progress"}))))

  (it "gets resumed game's board"
    (should= [1 2 3 4 5 6 7 8 9] (get-resumed-game-board "spec/tic_tac_toe/game_logs/in_progress/game-4.edn")))

  (it "gets game state for resumed game"
    (should= {:game-id         4
              :game-state      :in-progress
              :ui              :gui
              :mode            2
              :board           [1 2 3 4 :x 6 7 8 9]
              :first-ai-level  3
              :second-ai-level nil
              :player          :o
              :human?          false}
             (get-resumed-game-state "spec/tic_tac_toe/game_logs/in_progress/game-4.edn")))

  (it "adds game id to game id file"
    (with-redefs [spit (stub :spit)]
      (log-game-id game-ids-test-path 5)
      (should-have-invoked :spit {:with ["spec/tic_tac_toe/game_logs/game-ids.edn" "5\n" :append true]})))

  (it "gets paths in given directory"
    (should= ["spec/tic_tac_toe/game_logs/game-logs-empty-test.edn"
              "spec/tic_tac_toe/game_logs/in_progress"
              "spec/tic_tac_toe/game_logs/in_progress/completed-game.edn"
              "spec/tic_tac_toe/game_logs/in_progress/game-4.edn"
              "spec/tic_tac_toe/game_logs/in_progress_empty"
              "spec/tic_tac_toe/game_logs/game-logs-test.edn"
              "spec/tic_tac_toe/game_logs/sql_spec.clj"
              "spec/tic_tac_toe/game_logs/game-ids.edn"
              "spec/tic_tac_toe/game_logs/edn_logs_spec.clj"]
             (get-paths-in-dir "spec/tic_tac_toe/game_logs")))

  (it "creates new filename and path for in progress game"
    (should= "spec/tic_tac_toe/game_logs/in_progress/game-5.edn"
             (create-new-filepath "spec/tic_tac_toe/game_logs/in_progress" 5)))

  (it "creates in progress game file with game data"
    (with-redefs [spit (stub :spit)]
      (create-in-progress-game-file "spec/tic_tac_toe/game_logs/in_progress/game-5.edn" {:game-state :in-progress :game-id 5})
      (should-have-invoked :spit {:with ["spec/tic_tac_toe/game_logs/in_progress/game-5.edn"
                                         "{:game-state :in-progress, :game-id 5}\n"]})))

  (it "logs move to temp-file"
    (with-redefs [spit (stub :spit)]
      (game-logs/log-move {:state {:db :edn :filepath "spec/tic_tac_toe/game_logs/in_progress/game-4.edn" :board [:x 2 3 4 5 6 7 8 9]}})
      (should-have-invoked :spit {:with ["spec/tic_tac_toe/game_logs/in_progress/game-4.edn"
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
               (format-in-progress-data "spec/tic_tac_toe/game_logs/in_progress/game-4.edn")))

    (it "returns nil if temp-fil does not exist"
      (should= nil (format-in-progress-data "spec/tic_tac_toe/game_logs/in_progress/game-5.edn")))
    )


  (context "log completed game"
    (it "writes completed game to game log"
      (with-redefs [spit (stub :spit)
                    clojure.java.io/delete-file (stub :delete-file)]
        (game-logs/log-completed-game {:state {:filepath "spec/tic_tac_toe/game_logs/in_progress/completed-game.edn" :db :edn :game-state "O wins!"}
                                       :log-file test-path})
        (should-have-invoked :spit {:with ["spec/tic_tac_toe/game_logs/game-logs-test.edn"
                                           "{:game-id 5, :moves [[1 2 3 4 5 6 7 8 9] [1 2 3 4 :x 6 7 8 9] [:o 2 3 4 :x 6 7 8 9] [:o 2 3 4 :x :x 7 8 9] [:o 2 3 :o :x :x 7 8 9] [:o :x 3 :o :x :x 7 8 9] [:o :x 3 :o :x :x :o 8 9]], :second-ai-level nil, :mode 2, :first-ai-level 3, :game-state \"O wins!\", :human? true, :ui :gui, :player :x, :board [1 2 3 4 5 6 7 8 9]}\n"
                                           :append true]})))

    (it "deletes temp file after logging"
      (with-redefs [spit (stub :spit)
                    clojure.java.io/delete-file (stub :delete-file)]
        (game-logs/log-completed-game {:state {:filepath "spec/tic_tac_toe/game_logs/in_progress/game-4.edn" :db :edn}
                                       :log-file test-path})
        (should-have-invoked :delete-file {:with ["spec/tic_tac_toe/game_logs/in_progress/game-4.edn"]})))

    (it "doesn't run if temp-file does not exist"
      (with-redefs [spit (stub :spit)
                    clojure.java.io/delete-file (stub :delete-file)]
        (game-logs/log-completed-game {:state {:filepath "spec/tic_tac_toe/game_logs/in_progress/game-5.edn" :db :edn}
                                       :log-file test-path})
        (should-not-have-invoked :spit)
        (should-not-have-invoked :delete-file)))
    )

  (context "get-game-log"
    (it "gets game log for given game id"
      (should= {:game-id 1, :moves [], :game-state :in-progress, :ui :gui}
               (game-logs/get-game-log {:id 1 :db :edn :filepath test-path}))
      (should= {:game-id 5, :filepath "src/tic_tac_toe/game_logs/in_progress/gui/game-5.edn", :current-screen :play, :moves '([1 2 3 4 :x 6 7 8 9] [:o 2 3 4 :x 6 7 8 9] [:o 2 3 4 :x :x 7 8 9] [:o 2 3 :o :x :x 7 8 9] [:o 2 :x :o :x :x 7 8 9] [:o 2 :x :o :x :x :o 8 9]), :second-ai-level nil, :mode 2, :first-ai-level 3, :game-state :in-progress, :human? true, :ui :gui, :player :x, :board [1 2 3 4 5 6 7 8 9]}
               (game-logs/get-game-log {:id 5 :filepath test-path :db :edn})))

    (it "returns nil if game id does not exist"
      (should= nil (game-logs/get-game-log {:id 10 :filepath test-path :db :edn})))
    )
  )