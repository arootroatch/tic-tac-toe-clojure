(ns tic-tac-toe.gui.board-selection
  (:require [quil.core :as q]
            [tic-tac-toe.gui.components :refer [three-board four-board]]))

(defn- three-by-three-container [x y]
  (q/fill 0 0 0)
  (q/stroke 255 255 255)
  (q/stroke-weight 5)
  (q/mouse-button)
  (q/rect x y 600 200 10)
  (q/fill 255 255 255)
  (q/text-size 50)
  (q/text-align :center)
  (q/text "3 x 3" (- x 120) (+ y 10))
  (three-board (+ x 60) (- y 50) 50))

(defn- four-by-four-container [x y]
  (q/fill 0 0 0)
  (q/stroke 255 255 255)
  (q/stroke-weight 5)
  (q/mouse-button)
  (q/rect x y 600 200 10)
  (q/fill 255 255 255)
  (q/text-size 50)
  (q/text-align :center)
  (q/text "4 x 4" (- x 120) (+ y 10))
  (four-board (+ x 50) (- y 60) 40))

(defn board-selection []
  (q/text "Please select a board:" 400 150)
  (three-by-three-container 400 330)
  (four-by-four-container 400 580))


