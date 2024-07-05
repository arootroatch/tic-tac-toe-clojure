(ns tic-tac-toe.gui.components
  (:require [quil.core :as q]))

(defn text-button [text x y w h]
  (q/mouse-button)
  (q/fill 0 0 0)
  (q/stroke 255 255 255)
  (q/stroke-weight 2)
  (q/rect x y w h 10)
  (q/fill 255 255 255)
  (q/text-align :center :center)
  (q/text text x y))

(defn three-board [x y square-size]
  (q/fill 255 255 255)
  (q/stroke 0 0 0)
  (run! #(q/rect % y square-size square-size)
        [x (+ square-size x) (+ (* 2 square-size) x)])
  (run! #(q/rect % (+ square-size y) square-size square-size)
        [x (+ square-size x) (+ (* 2 square-size) x)])
  (run! #(q/rect % (+ (* 2 square-size) y) square-size square-size)
        [x (+ square-size x) (+ (* 2 square-size) x)]))

(defn four-board [x y square-size]
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