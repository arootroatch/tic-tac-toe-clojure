(ns tic-tac-toe.tui.get-selection-spec
  (:require [speclj.core :refer :all]
            [speclj.stub :as stub]
            [tic-tac-toe.tui.get-selection :refer :all]))


(describe "get-selection"
  (with-stubs)
  (redefs-around [println (stub :println)
                  load-file (stub :load-file)])

  (context "board-selection"
    (it "asks user to select board and confirms 3x3"
      (with-in-str "1" (get-selection {:option :board}))
      (should= [["Please select board:"]
                ["1 - 3x3"]
                ["2 - 4x4"]
                ["3 - 3x3x3 (3 Dimensional)"]
                ["3x3 board activated!\n"]]
               (stub/invocations-of :println)))

    (it "asks user to select board and confirms mode 4x4"
      (with-in-str "2" (get-selection {:option :board}))
      (should= [["Please select board:"]
                ["1 - 3x3"]
                ["2 - 4x4"]
                ["3 - 3x3x3 (3 Dimensional)"]
                ["4x4 board activated!\n"]]
               (stub/invocations-of :println)))

    (it "asks user to select board and confirms mode 3x3x3"
      (with-in-str "3" (get-selection {:option :board}))
      (should= [["Please select board:"]
                ["1 - 3x3"]
                ["2 - 4x4"]
                ["3 - 3x3x3 (3 Dimensional)"]
                ["3 dimensional board activated!\n"]]
               (stub/invocations-of :println)))

    (it "returns user input"
      (should= 1 (with-in-str "1" (get-selection {:option :board})))
      (should= 2 (with-in-str "2" (get-selection {:option :board})))
      (should= 3 (with-in-str "3" (get-selection {:option :board}))))
    )

  (context "level-selection"
    (it "asks user to select level of difficulty"
      (with-in-str "1" (get-selection {:option :level :ai 1 :mode 2}))
      (with-in-str "2" (get-selection {:option :level :ai 1 :mode 2}))
      (with-in-str "3" (get-selection {:option :level :ai 1 :mode 2}))
      (should= [["Please select level of difficulty:"] ["1 - Easy"] ["2 - Medium"] ["3 - Unbeatable"]
                ["Easy mode activated!\n"]
                ["Please select level of difficulty:"] ["1 - Easy"] ["2 - Medium"] ["3 - Unbeatable"]
                ["Medium mode activated!\n"]
                ["Please select level of difficulty:"] ["1 - Easy"] ["2 - Medium"] ["3 - Unbeatable"]
                ["Unbeatable mode activated!\n"]]
               (stub/invocations-of :println)))

    (it "says 'hard' instead of 'unbeatable' if 3d and user goes first"
      (with-in-str "3" (get-selection {:option :level :ai 1 :mode 2 :board 3}))
      (should= [["Please select level of difficulty:"] ["1 - Easy"] ["2 - Medium"] ["3 - Hard"]
                ["Hard mode activated!\n"]]
               (stub/invocations-of :println)))


    (it "specifies X if mode is CvC and selecting first player level"
      (with-in-str "1" (get-selection {:option :level :ai 1 :mode 4}))
      (should= [["Please select level for player X:"] ["1 - Easy"] ["2 - Medium"] ["3 - Unbeatable"]
                ["Easy mode activated!\n"]]
               (stub/invocations-of :println)))

    (it "specifies O if mode is CvC and selecting second player level"
      (with-in-str "1" (get-selection {:option :level :ai 2 :mode 4}))
      (should= [["Please select level for player O:"] ["1 - Easy"] ["2 - Medium"] ["3 - Unbeatable"]
                ["Easy mode activated!\n"]]
               (stub/invocations-of :println)))

    (it "returns user input"
      (should= 1 (with-in-str "1" (get-selection {:option :level :ai 1 :mode 4})))
      (should= 2 (with-in-str "2" (get-selection {:option :level :ai 1 :mode 4})))
      (should= 3 (with-in-str "3" (get-selection {:option :level :ai 1 :mode 4})))
      )
    )

  (context "mode selection"
    (it "asks user to select game mode and confirms mode 1"
      (with-in-str "1" (get-selection {:option :mode}))
      (should= [["Please select game mode (X always plays first):"]
                ["1 - Human vs Human"]
                ["2 - Human vs Computer (Human plays first)"]
                ["3 - Computer vs Human (Computer plays first)"]
                ["4 - Computer vs Computer"]
                ["Human vs Human activated!\n"]]
               (stub/invocations-of :println)))

    (it "asks user to select game mode and confirms mode 2"
      (with-in-str "2" (get-selection {:option :mode}))
      (should= [["Please select game mode (X always plays first):"]
                ["1 - Human vs Human"]
                ["2 - Human vs Computer (Human plays first)"]
                ["3 - Computer vs Human (Computer plays first)"]
                ["4 - Computer vs Computer"]
                ["Human vs Computer activated!\n"]]
               (stub/invocations-of :println)))

    (it "asks user to select game mode and confirms mode 3"
      (with-in-str "3" (get-selection {:option :mode}))
      (should= [["Please select game mode (X always plays first):"]
                ["1 - Human vs Human"]
                ["2 - Human vs Computer (Human plays first)"]
                ["3 - Computer vs Human (Computer plays first)"]
                ["4 - Computer vs Computer"]
                ["Computer vs Human activated!\n"]]
               (stub/invocations-of :println)))

    (it "asks user to select game mode and confirms mode 4"
      (with-in-str "4" (get-selection {:option :mode}))
      (should= [["Please select game mode (X always plays first):"]
                ["1 - Human vs Human"]
                ["2 - Human vs Computer (Human plays first)"]
                ["3 - Computer vs Human (Computer plays first)"]
                ["4 - Computer vs Computer"]
                ["Computer vs Computer activated!\n"]]
               (stub/invocations-of :println)))

    (it "returns user input"
      (should= 1 (with-in-str "1" (get-selection {:option :mode})))
      (should= 2 (with-in-str "2" (get-selection {:option :mode})))
      (should= 3 (with-in-str "3" (get-selection {:option :mode})))
      (should= 4 (with-in-str "4" (get-selection {:option :mode})))
      )
    )

  (context "get-resume-selection"
    (redefs-around [clojure.java.io/delete-file (stub :delete-file)])

    (it "asks user to resume unfinished game and confirms yes"
      (with-in-str "1" (get-selection {:option :resume}))
      (should= [["There's and unfinished game! Would you like resume?"]
                ["1 - Yes"]
                ["2 - No (deletes game history)"]
                ["Game resumed!\n"]]
               (stub/invocations-of :println)))

    (it "asks user to resume unfinished game and confirms no"
      (with-in-str "2" (get-selection {:option :resume}))
      (should= [["There's and unfinished game! Would you like resume?"]
                ["1 - Yes"]
                ["2 - No (deletes game history)"]
                ["Game history deleted.\n"]]
               (stub/invocations-of :println)))

    (it "deletes file if not resumed"
      (with-in-str "2" (get-selection {:option :resume :filepath "test.path"}))
      (should-have-invoked :delete-file {:with ["test.path" true]}))
    ))