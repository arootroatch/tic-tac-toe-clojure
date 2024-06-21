(ns tic-tac-toe.ui-spec.get-mode-selection-spec
  (:require [speclj.core :refer :all]
            [speclj.stub :as stub]
            [tic-tac-toe.ui.get-mode-selection :refer :all]))

(describe "get-mode-selection"
  (with-stubs)
  (redefs-around [println (stub :println)])

  (it "asks user to select game mode and confirms mode 1"
    (with-in-str "1" (get-mode-selection))
    (should= [["Please select game mode (X always plays first):"]
              ["1 - Human vs Human"]
              ["2 - Human vs Computer (Human plays first)"]
              ["3 - Computer vs Human (Computer plays first)"]
              ["4 - Computer vs Computer"]
              ["Human vs Human activated!\n"]]
             (stub/invocations-of :println)))

  (it "asks user to select game mode and confirms mode 2"
    (with-in-str "2" (get-mode-selection))
    (should= [["Please select game mode (X always plays first):"]
              ["1 - Human vs Human"]
              ["2 - Human vs Computer (Human plays first)"]
              ["3 - Computer vs Human (Computer plays first)"]
              ["4 - Computer vs Computer"]
              ["Human vs Computer activated!\n"]]
             (stub/invocations-of :println)))

  (it "asks user to select game mode and confirms mode 3"
    (with-in-str "3" (get-mode-selection))
    (should= [["Please select game mode (X always plays first):"]
              ["1 - Human vs Human"]
              ["2 - Human vs Computer (Human plays first)"]
              ["3 - Computer vs Human (Computer plays first)"]
              ["4 - Computer vs Computer"]
              ["Computer vs Human activated!\n"]]
             (stub/invocations-of :println)))

  (it "asks user to select game mode and confirms mode 4"
    (with-in-str "4" (get-mode-selection))
    (should= [["Please select game mode (X always plays first):"]
              ["1 - Human vs Human"]
              ["2 - Human vs Computer (Human plays first)"]
              ["3 - Computer vs Human (Computer plays first)"]
              ["4 - Computer vs Computer"]
              ["Computer vs Computer activated!\n"]]
             (stub/invocations-of :println)))

  (it "returns user input"
    (should= 1 (with-in-str "1" (get-mode-selection)))
    (should= 2 (with-in-str "2" (get-mode-selection)))
    (should= 3 (with-in-str "3" (get-mode-selection)))
    (should= 4 (with-in-str "4" (get-mode-selection)))
    )
  )

