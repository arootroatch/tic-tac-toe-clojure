(ns tic-tac-toe.gui.utils
  (:require [quil.core :as q]))

(defn mouse-over? [x y w h]
  (let [left (- x (/ w 2))
        right (+ x (/ w 2))
        top (- y (/ h 2))
        bottom (+ y (/ h 2))]
    (if (and (and (> (q/mouse-x) left) (< (q/mouse-x) right))
             (and (> (q/mouse-y) top) (< (q/mouse-y) bottom))) true false)))
