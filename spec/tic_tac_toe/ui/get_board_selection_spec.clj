(ns tic-tac-toe.ui.get-board-selection-spec
  (:require [speclj.core :refer :all]
            [speclj.stub :as stub]
            [tic-tac-toe.ui.get-board-selection :refer :all]))


(describe "get-mode-selection"
  (with-stubs)
  (redefs-around [println (stub :println)])

  (it "asks user to select board and confirms 3x3"
    (with-in-str "1" (get-board-selection))
    (should= [["Please select board:"]
              ["1 - 3x3"]
              ["2 - 4x4"]
              ["3x3 board activated!\n"]]
             (stub/invocations-of :println)))

  (it "asks user to select board and confirms mode 4x4"
    (with-in-str "2" (get-board-selection))
    (should= [["Please select board:"]
              ["1 - 3x3"]
              ["2 - 4x4"]
              ["4x4 board activated!\n"]]
             (stub/invocations-of :println)))

  (it "returns user input"
    (should= 1 (with-in-str "1" (get-board-selection)))
    (should= 2 (with-in-str "2" (get-board-selection))))
  )