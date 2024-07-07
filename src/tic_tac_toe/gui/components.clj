(ns tic-tac-toe.gui.components
  (:require [quil.core :as q]
            [tic-tac-toe.gui.utils :as utils]))

(defn text-button [text x y w h]
  (if (utils/mouse-over? x y w h) (q/fill 100 100 100) (q/fill 0 0 0))
  (q/stroke 255 255 255)
  (q/stroke-weight 2)
  (q/rect x y w h 10)
  (q/fill 255 255 255)
  (q/text-align :center :center)
  (q/text text x y))

