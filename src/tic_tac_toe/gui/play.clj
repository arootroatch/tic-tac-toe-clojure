(ns tic-tac-toe.gui.play
  (:require [quil.core :as q]
            [tic-tac-toe.gui.utils :as utils]))

(def x-3 250)
(def y-3 250)
(def size-3 150)
(def x-4 220)
(def y-4 220)
(def size-4 120)

(defmulti clicked (fn [state] (count (:board state))))

(defmethod clicked 9 [{:keys [board]}]
  (cond
    (and (q/mouse-pressed?) (utils/mouse-over? x-3 y-3 size-3 size-3) (number? (nth board 0))) 0
    (and (q/mouse-pressed?) (utils/mouse-over? (+ x-3 size-3) y-3 size-3 size-3) (number? (nth board 1))) 1
    (and (q/mouse-pressed?) (utils/mouse-over? (+ x-3 (* 2 size-3)) y-3 size-3 size-3) (number? (nth board 2))) 2
    (and (q/mouse-pressed?) (utils/mouse-over? x-3 (+ y-3 size-3) size-3 size-3) (number? (nth board 3))) 3
    (and (q/mouse-pressed?) (utils/mouse-over? (+ x-3 size-3) (+ y-3 size-3) size-3 size-3) (number? (nth board 4))) 4
    (and (q/mouse-pressed?) (utils/mouse-over? (+ x-3 (* 2 size-3)) (+ y-3 size-3) size-3 size-3) (number? (nth board 5))) 5
    (and (q/mouse-pressed?) (utils/mouse-over? x-3 (+ y-3 (* 2 size-3)) size-3 size-3) (number? (nth board 6))) 6
    (and (q/mouse-pressed?) (utils/mouse-over? (+ x-3 size-3) (+ y-3 (* 2 size-3)) size-3 size-3) (number? (nth board 7))) 7
    (and (q/mouse-pressed?) (utils/mouse-over? (+ x-3 (* 2 size-3)) (+ y-3 (* 2 size-3)) size-3 size-3) (number? (nth board 8))) 8))

(defmethod clicked 16 [{:keys [board]}]
  (cond
    (and (q/mouse-pressed?) (utils/mouse-over? x-4 y-4 size-4 size-4) (number? (nth board 0))) 0
    (and (q/mouse-pressed?) (utils/mouse-over? (+ x-4 size-4) y-4 size-4 size-4) (number? (nth board 1))) 1
    (and (q/mouse-pressed?) (utils/mouse-over? (+ x-4 (* 2 size-4)) y-4 size-4 size-4) (number? (nth board 2))) 2
    (and (q/mouse-pressed?) (utils/mouse-over? (+ x-4 (* 3 size-4)) y-4 size-4 size-4) (number? (nth board 3))) 3
    (and (q/mouse-pressed?) (utils/mouse-over? x-4 (+ y-4 size-4) size-4 size-4) (number? (nth board 4))) 4
    (and (q/mouse-pressed?) (utils/mouse-over? (+ x-4 size-4) (+ y-4 size-4) size-4 size-4) (number? (nth board 5))) 5
    (and (q/mouse-pressed?) (utils/mouse-over? (+ x-4 (* 2 size-4)) (+ y-4 size-4) size-4 size-4) (number? (nth board 6))) 6
    (and (q/mouse-pressed?) (utils/mouse-over? (+ x-4 (* 3 size-4)) (+ y-4 size-4) size-4 size-4) (number? (nth board 7))) 7
    (and (q/mouse-pressed?) (utils/mouse-over? x-4 (+ y-4 (* 2 size-4)) size-4 size-4) (number? (nth board 8))) 8
    (and (q/mouse-pressed?) (utils/mouse-over? (+ x-4 size-4) (+ y-4 (* 2 size-4)) size-4 size-4) (number? (nth board 9))) 9
    (and (q/mouse-pressed?) (utils/mouse-over? (+ x-4 (* 2 size-4)) (+ y-4 (* 2 size-4)) size-4 size-4) (number? (nth board 10))) 10
    (and (q/mouse-pressed?) (utils/mouse-over? (+ x-4 (* 3 size-4)) (+ y-4 (* 2 size-4)) size-4 size-4) (number? (nth board 11))) 11
    (and (q/mouse-pressed?) (utils/mouse-over? x-4 (+ y-4 (* 3 size-4)) size-4 size-4) (number? (nth board 12))) 12
    (and (q/mouse-pressed?) (utils/mouse-over? (+ x-4 size-4) (+ y-4 (* 3 size-4)) size-4 size-4) (number? (nth board 13))) 13
    (and (q/mouse-pressed?) (utils/mouse-over? (+ x-4 (* 2 size-4)) (+ y-4 (* 3 size-4)) size-4 size-4) (number? (nth board 14))) 14
    (and (q/mouse-pressed?) (utils/mouse-over? (+ x-4 (* 3 size-4)) (+ y-4 (* 3 size-4)) size-4 size-4) (number? (nth board 15))) 15))

(defn create-square [x y size token]
  (if (utils/mouse-over? x y size size)
    (q/fill 255 255 255)
    (q/fill 200 200 200))
  (q/rect x y size size)
  (q/fill 0 0 0)
  (q/text-size size)
  (when (keyword? token) (q/text (if (= :o token) "O" "X") x (+ y (/ size 3)))))

(defn three-board [x y size board]
  (for [row [0 1 2]
        col [0 1 2]]
    (create-square (+ x (* col size)) (+ y (* row size)) size (nth board (+ (* row 3) col)))))

(defn four-board [x y size board]
  (doseq [row [0 1 2 3]
          col [0 1 2 3]]
    (create-square (+ x (* col size)) (+ y (* row size)) size (nth board (+ (* row 4) col)))))

(defn play [{:keys [board player]}]
  (q/text-size 30)
  (q/fill 255 255 255)
  (q/text (str (name player) "'s turn!") 400 100)
  (cond
    (= 9 (count board)) (three-board x-3 y-3 size-3 board)
    (= 16 (count board)) (four-board x-4 y-4 size-4 board))
  :play)