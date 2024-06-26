(ns tic-tac-toe.ui.get-user-input-spec
  (:require [speclj.core :refer :all]
            [speclj.stub :as stub]
            [tic-tac-toe.ui.get-user-input :refer :all]))

(describe "get-input-in-range"
  (with-stubs)
  (redefs-around [println (stub :println)])

  (it "gets user selection from 1 to specified limit (exclusive)"
    (should= 1 (with-in-str "1" (get-input-in-range 4)))
    (should= 2 (with-in-str "2" (get-input-in-range 4)))
    (should= 3 (with-in-str "3" (get-input-in-range 4))))

  (it "rejects input that is not between 1 and limit"
    (should= 1 (with-in-str "4\n1" (get-input-in-range 4))))

  (it "rejects non-numeric input"
    (should= 1 (with-in-str "blah\n1" (get-input-in-range 4))))

  (it "displays error message on wrong number entry"
    (with-in-str "7\n1" (get-input-in-range 5))
    (should= [["Please enter a number 1-4"]]
             (stub/invocations-of :println)))

  (it "displays error message on non-numeric input"
    (with-in-str "Blah\n1" (get-input-in-range 5))
    (should= [["Please enter a number 1-4"]]
             (stub/invocations-of :println)))
  )


