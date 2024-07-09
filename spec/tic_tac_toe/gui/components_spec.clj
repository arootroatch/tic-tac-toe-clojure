(ns tic-tac-toe.gui.components-spec
  (:require [quil.core :as q]
            [speclj.core :refer :all]
            [speclj.stub :as stub]
            [tic-tac-toe.gui.components :refer :all]))

(describe "text-button"
  (with-stubs)
  (redefs-around [q/stroke (stub :stroke)
                  q/stroke-weight (stub :stroke-weight)
                  q/rect (stub :rect)
                  q/fill (stub :fill)
                  q/text-align (stub :text-align)
                  q/text (stub :text)
                  q/mouse-x (stub :mouse-x {:return 400})
                  q/mouse-y (stub :mouse-y {:return 400})])

  (it "is gray with white text if mouse is over it"
    (text-button "Test" 400 400 600 200)
    (should= [[100 100 100][255 255 255]] (stub/invocations-of :fill)))

  (it "is black with white text if mouse is not over it"
    (text-button "Test" 200 200 200 200)
    (should= [[0 0 0][255 255 255]] (stub/invocations-of :fill)))

  (it "sets stroke to white"
    (text-button "Test" 400 400 600 200)
    (should-have-invoked :stroke {:with [255 255 255]}))

  (it "sets stroke weight to 2"
    (text-button "Test" 400 400 600 200)
    (should-have-invoked :stroke-weight {:with [2]}))

  (it "draw rectangle with rounded corners at given placement with given dimensions"
    (text-button "Test" 400 400 600 200)
    (should-have-invoked :rect {:with [400 400 600 200 10]}))

  (it "sets text align to center vertically and horizontally"
    (text-button "Test" 400 400 600 200)
    (should-have-invoked :text-align {:with [:center :center]}))

  (it "displays given label"
    (text-button "Test" 400 400 600 200)
    (should-have-invoked :text {:with ["Test" 400 400]}))
  )

