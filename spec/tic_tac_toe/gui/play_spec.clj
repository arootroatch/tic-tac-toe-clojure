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
      (with-redefs [q/mouse-x (stub :mouse-x {:return 250})
                    q/mouse-y (stub :mouse-y {:return 250})]
        (should= 0 (clicked {:board [1 2 3 4 5 6 7 8 9]}))))

    (it "returns number of square clicked 1"
      (with-redefs [q/mouse-x (stub :mouse-x {:return 400})
                    q/mouse-y (stub :mouse-y {:return 250})]
        (should= 1 (clicked {:board [1 2 3 4 5 6 7 8 9]}))))

    (it "returns number of square clicked 2"
      (with-redefs [q/mouse-x (stub :mouse-x {:return 550})
                    q/mouse-y (stub :mouse-y {:return 250})]
        (should= 2 (clicked {:board [1 2 3 4 5 6 7 8 9]}))))

    (it "returns number of square clicked 3"
      (with-redefs [q/mouse-x (stub :mouse-x {:return 250})
                    q/mouse-y (stub :mouse-y {:return 400})]
        (should= 3 (clicked {:board [1 2 3 4 5 6 7 8 9]}))))

    (it "returns number of square clicked 4"
      (with-redefs [q/mouse-x (stub :mouse-x {:return 400})
                    q/mouse-y (stub :mouse-y {:return 400})]
        (should= 4 (clicked {:board [1 2 3 4 5 6 7 8 9]}))))

    (it "returns number of square clicked 5"
      (with-redefs [q/mouse-x (stub :mouse-x {:return 550})
                    q/mouse-y (stub :mouse-y {:return 400})]
        (should= 5 (clicked {:board [1 2 3 4 5 6 7 8 9]}))))

    (it "returns number of square clicked 6"
      (with-redefs [q/mouse-x (stub :mouse-x {:return 250})
                    q/mouse-y (stub :mouse-y {:return 550})]
        (should= 6 (clicked {:board [1 2 3 4 5 6 7 8 9]}))))

    (it "returns number of square clicked 7"
      (with-redefs [q/mouse-x (stub :mouse-x {:return 400})
                    q/mouse-y (stub :mouse-y {:return 550})]
        (should= 7 (clicked {:board [1 2 3 4 5 6 7 8 9]}))))

    (it "returns number of square clicked 8"
      (with-redefs [q/mouse-x (stub :mouse-x {:return 550})
                    q/mouse-y (stub :mouse-y {:return 550})]
        (should= 8 (clicked {:board [1 2 3 4 5 6 7 8 9]}))))
    )

  (context "clicked 4x4"
    (it "returns number of square clicked 0"
      (with-redefs [q/mouse-x (stub :mouse-x {:return 220})
                    q/mouse-y (stub :mouse-y {:return 220})]
        (should= 0 (clicked {:board (vec (range 1 17))}))))

    (it "returns number of square clicked 1"
      (with-redefs [q/mouse-x (stub :mouse-x {:return 340})
                    q/mouse-y (stub :mouse-y {:return 220})]
        (should= 1 (clicked {:board (vec (range 1 17))}))))

    (it "returns number of square clicked 2"
      (with-redefs [q/mouse-x (stub :mouse-x {:return 460})
                    q/mouse-y (stub :mouse-y {:return 220})]
        (should= 2 (clicked {:board (vec (range 1 17))}))))

    (it "returns number of square clicked 3"
      (with-redefs [q/mouse-x (stub :mouse-x {:return 580})
                    q/mouse-y (stub :mouse-y {:return 220})]
        (should= 3 (clicked {:board (vec (range 1 17))}))))

    (it "returns number of square clicked 4"
      (with-redefs [q/mouse-x (stub :mouse-x {:return 220})
                    q/mouse-y (stub :mouse-y {:return 340})]
        (should= 4 (clicked {:board (vec (range 1 17))}))))

    (it "returns number of square clicked 5"
      (with-redefs [q/mouse-x (stub :mouse-x {:return 340})
                    q/mouse-y (stub :mouse-y {:return 340})]
        (should= 5 (clicked {:board (vec (range 1 17))}))))

    (it "returns number of square clicked 6"
      (with-redefs [q/mouse-x (stub :mouse-x {:return 460})
                    q/mouse-y (stub :mouse-y {:return 340})]
        (should= 6 (clicked {:board (vec (range 1 17))}))))

    (it "returns number of square clicked 7"
      (with-redefs [q/mouse-x (stub :mouse-x {:return 580})
                    q/mouse-y (stub :mouse-y {:return 340})]
        (should= 7 (clicked {:board (vec (range 1 17))}))))

    (it "returns number of square clicked 8"
      (with-redefs [q/mouse-x (stub :mouse-x {:return 220})
                    q/mouse-y (stub :mouse-y {:return 460})]
        (should= 8 (clicked {:board (vec (range 1 17))}))))

    (it "returns number of square clicked 9"
      (with-redefs [q/mouse-x (stub :mouse-x {:return 340})
                    q/mouse-y (stub :mouse-y {:return 460})]
        (should= 9 (clicked {:board (vec (range 1 17))}))))

    (it "returns number of square clicked 10"
      (with-redefs [q/mouse-x (stub :mouse-x {:return 460})
                    q/mouse-y (stub :mouse-y {:return 460})]
        (should= 10 (clicked {:board (vec (range 1 17))}))))

    (it "returns number of square clicked 11"
      (with-redefs [q/mouse-x (stub :mouse-x {:return 580})
                    q/mouse-y (stub :mouse-y {:return 460})]
        (should= 11 (clicked {:board (vec (range 1 17))}))))

    (it "returns number of square clicked 12"
      (with-redefs [q/mouse-x (stub :mouse-x {:return 220})
                    q/mouse-y (stub :mouse-y {:return 580})]
        (should= 12 (clicked {:board (vec (range 1 17))}))))

    (it "returns number of square clicked 13"
      (with-redefs [q/mouse-x (stub :mouse-x {:return 340})
                    q/mouse-y (stub :mouse-y {:return 580})]
        (should= 13 (clicked {:board (vec (range 1 17))}))))

    (it "returns number of square clicked 14"
      (with-redefs [q/mouse-x (stub :mouse-x {:return 460})
                    q/mouse-y (stub :mouse-y {:return 580})]
        (should= 14 (clicked {:board (vec (range 1 17))}))))

    (it "returns number of square clicked 15"
      (with-redefs [q/mouse-x (stub :mouse-x {:return 580})
                    q/mouse-y (stub :mouse-y {:return 580})]
        (should= 15 (clicked {:board (vec (range 1 17))}))))
    ))


