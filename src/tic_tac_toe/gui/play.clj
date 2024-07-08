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
  (loop [i 0]
    (when (< i 9)
      (let [row (quot i 3)
            col (mod i 3)]
        (if (and (q/mouse-pressed?)
                 (utils/mouse-over? (+ x-3 (* col size-3)) (+ y-3 (* row size-3)) size-3 size-3)
                 (number? (nth board i)))
          i
          (recur (inc i)))))))

(defmethod clicked 16 [{:keys [board]}]
  (loop [i 0]
    (when (< i 16)
      (let [row (quot i 4)
            col (mod i 4)]
        (if (and (q/mouse-pressed?)
                 (utils/mouse-over? (+ x-4 (* col size-4)) (+ y-4 (* row size-4)) size-4 size-4)
                 (number? (nth board i)))
          i
          (recur (inc i)))))))

(defn create-square [x y size token]
  (if (utils/mouse-over? x y size size)
    (q/fill 255 255 255)
    (q/fill 200 200 200))
  (q/rect x y size size)
  (when (keyword? token)
    (q/fill 0 0 0)
    (q/text-size size)
    (q/text (if (= :o token) "O" "X") x y)))

(defn three-board [x y size board]
  (doseq [row [0 1 2]
          col [0 1 2]]
    (create-square (+ x (* col size)) (+ y (* row size)) size (nth board (+ (* row 3) col)))))

(defn four-board [x y size board]
  (doseq [row [0 1 2 3]
          col [0 1 2 3]]
    (create-square (+ x (* col size)) (+ y (* row size)) size (nth board (+ (* row 4) col)))))

(defn play [{:keys [board player]}]
  (q/background 0 0 0)
  (q/text-size 30)
  (q/fill 255 255 255)
  (q/text (str (.toUpperCase (name player)) "'s turn!") 400 100)
  (cond
    (= 9 (count board)) (three-board x-3 y-3 size-3 board)
    (= 16 (count board)) (four-board x-4 y-4 size-4 board))
  :play)