(ns tic-tac-toe.ui.get-level-selection-spec
  (:require [speclj.core :refer :all]
            [speclj.stub :as stub]
            [tic-tac-toe.ui.get-level-selection :refer :all]))

(describe "get-level-selection"
  (with-stubs)
  (redefs-around [println (stub :println)])

  (it "asks user to select level of difficulty"
    (with-in-str "1" (get-level-selection 1 2))
    (with-in-str "2" (get-level-selection 1 2))
    (with-in-str "3" (get-level-selection 1 2))
    (should= [["Please select level of difficulty:"] ["1 - Easy"] ["2 - Medium"] ["3 - Unbeatable"]
              ["Easy mode activated!\n"]
              ["Please select level of difficulty:"] ["1 - Easy"] ["2 - Medium"] ["3 - Unbeatable"]
              ["Medium mode activated!\n"]
              ["Please select level of difficulty:"] ["1 - Easy"] ["2 - Medium"] ["3 - Unbeatable"]
              ["Unbeatable mode activated!\n"]]
             (stub/invocations-of :println)))


  (it "specifies X if mode is CvC and selecting first player level"
    (with-in-str "1" (get-level-selection 1 4))
    (should= [["Please select level for player X:"] ["1 - Easy"] ["2 - Medium"] ["3 - Unbeatable"]
              ["Easy mode activated!\n"]]
             (stub/invocations-of :println)))

  (it "specifies O if mode is CvC and selecting second player level"
    (with-in-str "1" (get-level-selection 2 4))
    (should= [["Please select level for player O:"] ["1 - Easy"] ["2 - Medium"] ["3 - Unbeatable"]
              ["Easy mode activated!\n"]]
             (stub/invocations-of :println)))

  (it "returns user input"
    (should= 1 (with-in-str "1" (get-level-selection 1 4)))
    (should= 2 (with-in-str "2" (get-level-selection 1 4)))
    (should= 3 (with-in-str "3" (get-level-selection 1 4)))
    )
  )