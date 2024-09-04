(ns tic-tac-toe.gui.utils-spec
  (:require [speclj.core :refer :all]
            [tic-tac-toe.gui.utils :refer :all]
            [quil.core :as q]))

(describe "util functions"
  (with-stubs)
  (redefs-around [q/mouse-x (stub :mouse-x {:return 300})
                  q/mouse-y (stub :mouse-y {:return 300})])
  (context "mouse-over?"
    (it "returns true if mouse is within given coordinates"
      (should= true (mouse-over? 400 330 600 200)))

    (it "returns false if mouse is outside of given coordinates"
      (should= false (mouse-over? 0 0 50 50)))
    ))

