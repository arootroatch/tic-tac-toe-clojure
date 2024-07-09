(ns tic-tac-toe.gui.play-spec
  (:require [quil.core :as q]
            [speclj.core :refer :all]
            [speclj.stub :as stub]
            [tic-tac-toe.gui.play :refer :all]))

(describe "play screen"
  (with-stubs)
  (redefs-around [q/rect (stub :rect)
                  q/fill (stub :fill)
                  q/text (stub :text)
                  q/text-size (stub :text-size)
                  q/text-align (stub :text-align)
                  q/mouse-pressed? (stub :mouse-pressed {:return true})])

  (context "create-square"
    (redefs-around [q/mouse-x (stub :mouse-x {:return 400})
                    q/mouse-y (stub :mouse-y {:return 400})])
    (it "displays one square of the board"
      (create-square 400 400 150 :o :in-progress)
      (should-have-invoked :rect {:with [400 400 150 150]}))

    (it "displays token O square"
      (create-square 400 400 150 :o :in-progress)
      (should-have-invoked :text {:with ["O" 400 400]})
      (should-have-invoked :text-align {:with [:center :center]})
      (should-have-invoked :text-size {:with [150]})
      (should-have-invoked :fill {:with [0 0 0]}))

    (it "displays token X in square"
      (create-square 400 400 150 :x :in-progress)
      (should-have-invoked :text {:with ["X" 400 400]})
      (should-have-invoked :text-align {:with [:center :center]})
      (should-have-invoked :text-size {:with [150]})
      (should-have-invoked :fill {:with [0 0 0]}))

    (it "doesn't display number in square"
      (create-square 400 400 150 1 :in-progress)
      (should-not-have-invoked :text)
      (should-not-have-invoked :text-size)
      (should-not-have-invoked :text-align)
      (should-not-have-invoked :fill {:with [0 0 0]}))

    (it "highlights square white on hover"
      (create-square 400 400 150 :o :in-progress)
      (should-have-invoked :fill {:with [255 255 255]}))

    (it "colors square dim white when not hovering"
      (create-square 250 250 150 1 :in-progress)
      (should-have-invoked :fill {:with [200 200 200]}))
    )

  (context "three-board"
    (it "displays 3x3 board"
      (with-redefs [create-square (stub :create-square)]
        (three-board x-3 y-3 size-3 [1 2 3 4 5 6 7 8 9] :in-progress)
        (should-have-invoked :create-square {:times 9})
        (should= [[250 250 150 1 :in-progress] [400 250 150 2 :in-progress] [550 250 150 3 :in-progress] [250 400 150 4 :in-progress] [400 400 150 5 :in-progress] [550 400 150 6 :in-progress] [250 550 150 7 :in-progress] [400 550 150 8 :in-progress] [550 550 150 9 :in-progress]]
                 (stub/invocations-of :create-square))))
    )

  (context "four-board"
    (it "displays 4x4 board"
      (with-redefs [create-square (stub :create-square)]
        (four-board x-4 y-4 size-4 [1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16] :in-progress)
        (should-have-invoked :create-square {:times 16})
        (should= [[220 220 120 1 :in-progress] [340 220 120 2 :in-progress] [460 220 120 3 :in-progress] [580 220 120 4 :in-progress] [220 340 120 5 :in-progress] [340 340 120 6 :in-progress] [460 340 120 7 :in-progress] [580 340 120 8 :in-progress] [220 460 120 9 :in-progress] [340 460 120 10 :in-progress] [460 460 120 11 :in-progress] [580 460 120 12 :in-progress] [220 580 120 13 :in-progress] [340 580 120 14 :in-progress] [460 580 120 15 :in-progress] [580 580 120 16 :in-progress]]
                 (stub/invocations-of :create-square))))
    )


  (context "clicked 3x3"
    (it "returns number of square clicked 0"
      (should= 0 (clicked {:board [1 2 3 4 5 6 7 8 9]} {:x 250 :y 250})))

    (it "returns number of square clicked 1"
      (should= 1 (clicked {:board [1 2 3 4 5 6 7 8 9]} {:x 400 :y 250})))

    (it "returns number of square clicked 2"
      (should= 2 (clicked {:board [1 2 3 4 5 6 7 8 9]} {:x 550 :y 250})))

    (it "returns number of square clicked 3"
      (should= 3 (clicked {:board [1 2 3 4 5 6 7 8 9]} {:x 250 :y 400})))

    (it "returns number of square clicked 4"
      (should= 4 (clicked {:board [1 2 3 4 5 6 7 8 9]} {:x 400 :y 400})))

    (it "returns number of square clicked 5"
      (should= 5 (clicked {:board [1 2 3 4 5 6 7 8 9]} {:x 550 :y 400})))

    (it "returns number of square clicked 6"
      (should= 6 (clicked {:board [1 2 3 4 5 6 7 8 9]} {:x 250 :y 550})))

    (it "returns number of square clicked 7"
      (should= 7 (clicked {:board [1 2 3 4 5 6 7 8 9]} {:x 400 :y 550})))

    (it "returns number of square clicked 8"
      (should= 8 (clicked {:board [1 2 3 4 5 6 7 8 9]} {:x 550 :y 550})))
    )

  (context "clicked 4x4"
    (it "returns number of square clicked 0"
        (should= 0 (clicked {:board (vec (range 1 17))} {:x 220 :y 220})))

    (it "returns number of square clicked 1"
        (should= 1 (clicked {:board (vec (range 1 17))} {:x 340 :y 220})))

    (it "returns number of square clicked 2"
        (should= 2 (clicked {:board (vec (range 1 17))} {:x 460 :y 220})))

    (it "returns number of square clicked 3"
        (should= 3 (clicked {:board (vec (range 1 17))} {:x 580 :y 220})))

    (it "returns number of square clicked 4"
        (should= 4 (clicked {:board (vec (range 1 17))} {:x 220 :y 340})))

    (it "returns number of square clicked 5"
        (should= 5 (clicked {:board (vec (range 1 17))} {:x 340 :y 340})))

    (it "returns number of square clicked 6"
        (should= 6 (clicked {:board (vec (range 1 17))} {:x 460 :y 340})))

    (it "returns number of square clicked 7"
        (should= 7 (clicked {:board (vec (range 1 17))} {:x 580 :y 340})))

    (it "returns number of square clicked 8"
        (should= 8 (clicked {:board (vec (range 1 17))} {:x 220 :y 460})))

    (it "returns number of square clicked 9"
        (should= 9 (clicked {:board (vec (range 1 17))} {:x 340 :y 460})))

    (it "returns number of square clicked 10"
        (should= 10 (clicked {:board (vec (range 1 17))} {:x 460 :y 460})))

    (it "returns number of square clicked 11"
        (should= 11 (clicked {:board (vec (range 1 17))} {:x 580 :y 460})))

    (it "returns number of square clicked 12"
        (should= 12 (clicked {:board (vec (range 1 17))} {:x 220 :y 580})))

    (it "returns number of square clicked 13"
        (should= 13 (clicked {:board (vec (range 1 17))} {:x 340 :y 580})))

    (it "returns number of square clicked 14"
        (should= 14 (clicked {:board (vec (range 1 17))} {:x 460 :y 580})))

    (it "returns number of square clicked 15"
        (should= 15 (clicked {:board (vec (range 1 17))} {:x 580 :y 580})))
    ))


