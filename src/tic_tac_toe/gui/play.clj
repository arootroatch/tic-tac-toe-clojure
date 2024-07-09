(ns tic-tac-toe.gui.play
  (:require [quil.core :as q]
            [tic-tac-toe.bot-moves]
            [tic-tac-toe.eval-board :as eval]
            [tic-tac-toe.gui.components :refer [text-button]]
            [tic-tac-toe.gui.mode-selection :refer [mode-selection-screen]]
            [tic-tac-toe.gui.utils :as utils]
            [tic-tac-toe.human-moves]))

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
        (if (and (utils/mouse-over? (+ x-3 (* col size-3)) (+ y-3 (* row size-3)) size-3 size-3)
                 (number? (nth board i)))
          i
          (recur (inc i)))))))

(defmethod clicked 16 [{:keys [board]}]
  (loop [i 0]
    (when (< i 16)
      (let [row (quot i 4)
            col (mod i 4)]
        (if (and (utils/mouse-over? (+ x-4 (* col size-4)) (+ y-4 (* row size-4)) size-4 size-4)
                 (number? (nth board i)))
          i
          (recur (inc i)))))))

(defn get-user-click [state]
  (let [board (:board state)
        move (clicked state)
        player (:player state)
        new-board (assoc board move player)]
    (if (number? move)
      (assoc state
        :board new-board
        :player (utils/switch-player player)
        :human? (if (not= 1 (:mode state)) false true)
        :game-state (eval/score new-board))
      state)))

(defn reset-state [state]
  (assoc state :current-screen (mode-selection-screen)
               :mode nil
               :board nil
               :first-ai-level nil
               :second-ai-level nil
               :player :x
               :human? nil
               :game-state :not-started
               :gui true))

(defmethod utils/handle-click :play [state mouse-xy]
  (cond
    (= :in-progress (:game-state state)) (get-user-click state)
    (and (= :not-started (:game-state state))
         (utils/mouse-over? 400 700 600 60 mouse-xy)) (assoc state :game-state :in-progress)
    (utils/mouse-over? 400 700 600 60 mouse-xy) (reset-state state)
    :else state))

(defn create-square [x y size token game-state]
  (if (and (= :in-progress game-state) (utils/mouse-over? x y size size))
    (q/fill 255 255 255)
    (q/fill 200 200 200))
  (q/rect x y size size)
  (when (keyword? token)
    (q/fill 0 0 0)
    (q/text-size size)
    (q/text-align :center :center)
    (q/text (if (= :o token) "O" "X") x y)))

(defn three-board [x y size board game-state]
  (doseq [row [0 1 2]
          col [0 1 2]]
    (create-square (+ x (* col size)) (+ y (* row size)) size (nth board (+ (* row 3) col)) game-state)))

(defn four-board [x y size board game-state]
  (doseq [row [0 1 2 3]
          col [0 1 2 3]]
    (create-square (+ x (* col size)) (+ y (* row size)) size (nth board (+ (* row 4) col)) game-state)))

(defn play-heading [player game-state]
  (cond
    (= game-state :in-progress) (str (.toUpperCase (name player)) "'s turn!")
    (= game-state :not-started) "Ready?"
    :else game-state))

(defn play [{:keys [board player game-state]}]
  (q/background 0 0 0)
  (q/text-size 30)
  (q/fill 255 255 255)
  (q/text (play-heading player game-state) 400 100)
  (cond
    (= 9 (count board)) (three-board x-3 y-3 size-3 board game-state)
    (= 16 (count board)) (four-board x-4 y-4 size-4 board game-state))
  (when (= :not-started game-state)
    (q/text-size 30) (text-button "Let's go!" 400 700 600 60))
  (when (and (not= :not-started game-state) (not= :in-progress game-state))
    (q/text-size 30) (text-button "Play again?" 400 700 600 60))
  :play)