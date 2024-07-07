(ns tic-tac-toe.gui.play
  (:require [quil.core :as q]
            [tic-tac-toe.gui.utils :as utils]))

(defn create-square [x y size token]
  (if (utils/mouse-over? x y size size)
    (q/fill 255 255 255)
    (q/fill 200 200 200))
  (q/rect x y size size)
  (q/fill 0 0 0)
  (q/text-size size)
  (when (keyword? token) (q/text (if (= :o token) "O" "X") x (+ y (/ size 3)))))

(defn three-board [x y size board]
  (create-square x y size (nth board 0))
  (create-square (+ x size) y size (nth board 1))
  (create-square (+ x (* 2 size)) y size (nth board 2))
  (create-square x (+ y size) size (nth board 3))
  (create-square (+ x size) (+ y size) size (nth board 4))
  (create-square (+ x (* 2 size)) (+ y size) size (nth board 5))
  (create-square x (+ y (* size 2)) size (nth board 6))
  (create-square (+ x size) (+ y (* size 2)) size (nth board 7))
  (create-square (+ x (* 2 size)) (+ y (* size 2)) size (nth board 8)))

(defn four-board [x y size board]
  (create-square x y size (nth board 0))
  (create-square (+ x size) y size (nth board 1))
  (create-square (+ x (* size 2)) y size (nth board 2))
  (create-square (+ x (* size 3)) y size (nth board 3))
  (create-square x (+ y size) size (nth board 4))
  (create-square (+ x size) (+ y size) size (nth board 5))
  (create-square (+ x (* size 2)) (+ y size) size (nth board 6))
  (create-square (+ x (* size 3)) (+ y size) size (nth board 7))
  (create-square x (+ y (* size 2)) size (nth board 8))
  (create-square (+ x size) (+ y (* size 2)) size (nth board 9))
  (create-square (+ x (* size 2)) (+ y (* size 2)) size (nth board 10))
  (create-square (+ x (* size 3)) (+ y (* size 2)) size (nth board 11))
  (create-square x (+ y (* size 3)) size (nth board 12))
  (create-square (+ x size) (+ y (* size 3)) size (nth board 13))
  (create-square (+ x (* size 2)) (+ y (* size 3)) size (nth board 14))
  (create-square (+ x (* size 3)) (+ y (* size 3)) size (nth board 15)))

#_(defn four-board [x y size board]
  (doseq [i [0 1 2 3]
          j [0 1 2 3]
          idx (+ (* i 4) j)]
    (create-square (+ x (* j size)) (+ y (* i size)) size (nth board idx))))

(defn- three-board-preview [x y square-size]
  (q/fill 255 255 255)
  (q/stroke 0 0 0)
  (run! #(q/rect % y square-size square-size)
        [x (+ square-size x) (+ (* 2 square-size) x)])
  (run! #(q/rect % (+ square-size y) square-size square-size)
        [x (+ square-size x) (+ (* 2 square-size) x)])
  (run! #(q/rect % (+ (* 2 square-size) y) square-size square-size)
        [x (+ square-size x) (+ (* 2 square-size) x)]))

(defn play [state]
  (q/text-size 30)
  (q/fill 255 255 255)
  (if (= :x (:player state))
    (q/text "X's turn!" 400 100)
    (q/text "O's turn!" 400 100))
  (cond
    (= 9 (count (:board state))) (three-board 250 250 150 [:x 2 3 4 :o 6 7 8 9])
    (= 16 (count (:board state))) (four-board 220 220 120 [:x :o :x :o :x :o :x :o 9 10 11 12 13 14 15 16]))
  :playing)