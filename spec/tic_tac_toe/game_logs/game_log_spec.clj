(ns tic-tac-toe.game-logs.game-log-spec
  (:require [speclj.core :refer :all]
            [tic-tac-toe.game_logs.game-log :refer :all]))

(def test-path "spec/tic_tac_toe/game_logs/game-logs-test.edn")
(def game-ids-test-path "spec/tic_tac_toe/game_logs/game-ids.edn")
(def empty-test-path "spec/tic_tac_toe/game_logs/game-logs-empty-test.edn")

(describe "logging games"
  (with-stubs)
  (it "gets all game-logs"
    (should= [{:game-id    1
               :moves      []
               :game-state :in-progress
               :ui         :gui}
              {:game-id    2
               :moves      []
               :game-state :in-progress
               :ui         :tui}]
             (read-edn-file test-path)))

  (it "gets last game"
    (should= {:game-id    2
              :moves      []
              :game-state :in-progress
              :ui         :tui}
             (get-last-completed-game test-path)))

  (it "gets last in progress game"
    (with-redefs [get-paths-in-dir (stub :get-paths {:return ["spec/tic_tac_toe/game_logs/in_progress/game-5.edn"
                                                              "spec/tic_tac_toe/game_logs/in_progress/game-4.edn"]})]
      (should= "spec/tic_tac_toe/game_logs/in_progress/game-5.edn"
               (get-last-in-progress-game "spec/tic_tac_toe/game_logs/in_progress"))))

  (it "gets game state for resumed game"
    (should= {:game-id 4
              :game-state :in-progress
              :ui :gui
              :mode 2
              :board [1 2 3 4 :x 6 7 8 9]
              :first-ai-level 3
              :second-ai-level nil
              :player :o
              :human? false}
             (get-resumed-game-state "spec/tic_tac_toe/game_logs/in_progress/game-4.edn")))

  (it "get last in progress game id"
    (should= 4 (get-last-in-progress-game-id "spec/tic_tac_toe/game_logs/in_progress")))

  (it "returns nil if no in-progress games"
    (with-redefs [get-last-in-progress-game (stub :last-game {:return nil})]
      (should= nil (get-last-in-progress-game-id "spec/tic_tac_toe/game_logs/in_progress"))))

  (it "gets new game id"
    (should= 5 (get-new-game-id game-ids-test-path)))

  (it "returns 1 if no previous games"
      (should= 1 (get-new-game-id empty-test-path)))

  (it "adds game id to game id file"
    (with-redefs [spit (stub :spit)]
      (log-game-id game-ids-test-path 5)
      (should-have-invoked :spit {:with ["spec/tic_tac_toe/game_logs/game-ids.edn" "5\n" :append true]})))

  (it "gets paths in given directory"
    (should= ["spec/tic_tac_toe/game_logs/game-logs-empty-test.edn"
              "spec/tic_tac_toe/game_logs/in_progress"
              "spec/tic_tac_toe/game_logs/in_progress/game-4.edn"
              "spec/tic_tac_toe/game_logs/in_progress_empty"
              "spec/tic_tac_toe/game_logs/game-logs-test.edn"
              "spec/tic_tac_toe/game_logs/game_log_spec.clj"
              "spec/tic_tac_toe/game_logs/game-ids.edn"]
             (get-paths-in-dir "spec/tic_tac_toe/game_logs")))

  (it "creates new filename and path for in progress game"
    (should= "spec/tic_tac_toe/game_logs/in_progress/game-5.edn"
             (create-new-filepath "spec/tic_tac_toe/game_logs/in_progress" 5)))

  (it "creates in progress game file with game data"
    (with-redefs [spit (stub :spit)]
      (create-in-progress-game-file "spec/tic_tac_toe/game_logs/in_progress/game-5.edn" {:game-state :in-progress :game-id 5})
      (should-have-invoked :spit {:with ["spec/tic_tac_toe/game_logs/in_progress/game-5.edn"
                                         "{:game-state :in-progress, :game-id 5}\n"]})))

  (it "formats data from in-progress file for completed games log"
    (should= {:game-id 4
              :game-state :in-progress
              :ui :gui
              :mode 2
              :board [1 2 3 4 5 6 7 8 9]
              :first-ai-level 3
              :second-ai-level nil
              :player :x
              :human? true
              :moves [[1 2 3 4 5 6 7 8 9]
                      [1 2 3 4 :x 6 7 8 9]]}
             (format-in-progress-data "spec/tic_tac_toe/game_logs/in_progress/game-4.edn")))

  (it "returns nil if temp-fil does not exist"
            (should= nil (format-in-progress-data "spec/tic_tac_toe/game_logs/in_progress/game-5.edn")))

  (it "writes completed game to game log"
    (with-redefs [spit (stub :spit)
                  clojure.java.io/delete-file (stub :delete-file)]
      (log-completed-game "spec/tic_tac_toe/game_logs/in_progress/game-4.edn" test-path)
      (should-have-invoked :spit {:with ["spec/tic_tac_toe/game_logs/game-logs-test.edn"
                                         "{:game-id 4, :moves ([1 2 3 4 5 6 7 8 9] [1 2 3 4 :x 6 7 8 9]), :second-ai-level nil, :mode 2, :first-ai-level 3, :game-state :in-progress, :human? true, :ui :gui, :player :x, :board [1 2 3 4 5 6 7 8 9]}\n"
                                         :append true]})))

  (it "deletes temp file after logging"
    (with-redefs [spit (stub :spit)
                  clojure.java.io/delete-file (stub :delete-file)]
      (log-completed-game "spec/tic_tac_toe/game_logs/in_progress/game-4.edn" test-path)
      (should-have-invoked :delete-file {:with ["spec/tic_tac_toe/game_logs/in_progress/game-4.edn"]})))

  (it "doesn't run if temp-file does not exist"
            (with-redefs [spit (stub :spit)
                          clojure.java.io/delete-file (stub :delete-file)]
              (log-completed-game "spec/tic_tac_toe/game_logs/in_progress/game-5.edn" test-path)
              (should-not-have-invoked :spit)
              (should-not-have-invoked :delete-file)))

  (it "logs move to temp-file"
    (with-redefs [spit (stub :spit)]
      (log-move "spec/tic_tac_toe/game_logs/in_progress/game-4.edn" [:x 2 3 4 5 6 7 8 9])
      (should-have-invoked :spit {:with ["spec/tic_tac_toe/game_logs/in_progress/game-4.edn"
                                         "[:x 2 3 4 5 6 7 8 9]\n"
                                         :append true]}))))