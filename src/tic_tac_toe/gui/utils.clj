(ns tic-tac-toe.gui.utils
  (:require [quil.core :as q]))

(defn mouse-over?
  ([x y w h]
   (let [left (- x (/ w 2))
         right (+ x (/ w 2))
         top (- y (/ h 2))
         bottom (+ y (/ h 2))]
     (if (and (and (> (q/mouse-x) left) (< (q/mouse-x) right))
              (and (> (q/mouse-y) top) (< (q/mouse-y) bottom))) true false)))
  ([x y w h {mouse-x :x mouse-y :y}]
   (let [left (- x (/ w 2))
         right (+ x (/ w 2))
         top (- y (/ h 2))
         bottom (+ y (/ h 2))]
     (if (and (and (> mouse-x left) (< mouse-x right))
              (and (> mouse-y top) (< mouse-y bottom))) true false))))

(defmulti handle-click :current-screen)

(defn switch-player [player]
  (if (= :x player) :o :x))


