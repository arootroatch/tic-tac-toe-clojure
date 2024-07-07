(ns tic-tac-toe.gui.board-selection
  (:require [quil.core :as q]
            [tic-tac-toe.ui.print-utils :as print]
            [tic-tac-toe.gui.utils :as utils]
            [tic-tac-toe.ui.get-selection :as selection]))

(defn- three-board-preview [x y square-size]
  (q/fill 255 255 255)
  (q/stroke 0 0 0)
  (run! #(q/rect % y square-size square-size)
        [x (+ square-size x) (+ (* 2 square-size) x)])
  (run! #(q/rect % (+ square-size y) square-size square-size)
        [x (+ square-size x) (+ (* 2 square-size) x)])
  (run! #(q/rect % (+ (* 2 square-size) y) square-size square-size)
        [x (+ square-size x) (+ (* 2 square-size) x)]))

(defn- four-board-preview [x y square-size]
  (q/fill 255 255 255)
  (q/stroke 0 0 0)
  (run! #(q/rect % y square-size square-size)
        [x (+ square-size x) (+ (* 2 square-size) x) (+ x (* 3 square-size))])
  (run! #(q/rect % (+ square-size y) square-size square-size)
        [x (+ square-size x) (+ (* 2 square-size) x) (+ x (* 3 square-size))])
  (run! #(q/rect % (+ (* 2 square-size) y) square-size square-size)
        [x (+ square-size x) (+ (* 2 square-size) x) (+ x (* 3 square-size))])
  (run! #(q/rect % (+ (* 3 square-size) y) square-size square-size)
        [x (+ square-size x) (+ (* 2 square-size) x) (+ x (* 3 square-size))]))

(defn- three-by-three-container [x y]
  (if (utils/mouse-over? x y 600 200) (q/fill 100 100 100) (q/fill 0 0 0))
  (q/stroke 255 255 255)
  (q/stroke-weight 5)
  (q/rect x y 600 200 10)
  (q/fill 255 255 255)
  (q/text-size 50)
  (q/text-align :center)
  (q/text "3 x 3" (- x 120) (+ y 10))
  (three-board-preview (+ x 60) (- y 50) 50))

(defn- four-by-four-container [x y]
  (if (utils/mouse-over? x y 600 200) (q/fill 100 100 100) (q/fill 0 0 0))
  (q/stroke 255 255 255)
  (q/stroke-weight 5)
  (q/rect x y 600 200 10)
  (q/fill 255 255 255)
  (q/text-size 50)
  (q/text-align :center)
  (q/text "4 x 4" (- x 120) (+ y 10))
  (four-board-preview (+ x 50) (- y 60) 40))

(defn board-selection [state]
  (q/text-size 30)
  (q/text (first print/board-prompt) 400 100)
  (three-by-three-container 400 280)
  (four-by-four-container 400 530)
  (cond
    (:board state) (:board state)
    (and (q/mouse-pressed?) (utils/mouse-over? 400 280 600 200)) selection/initial-3x3-board
    (and (q/mouse-pressed?) (utils/mouse-over? 400 530 600 200)) selection/initial-4x4-board))


