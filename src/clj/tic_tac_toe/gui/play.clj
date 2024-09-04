(ns tic-tac-toe.gui.play
  (:require [quil.core :as q]
            [tic-tac-toe.bot-moves]
            [tic-tac-toe.eval-board :as eval]
            [tic-tac-toe.game-logs.game-logs :as game-logs]
            [tic-tac-toe.game-logs.sql :as sql]
            [tic-tac-toe.game_logs.edn-logs :as edn]
            [tic-tac-toe.gui.components :refer [text-button]]
            [tic-tac-toe.gui.utils :as utils]
            [tic-tac-toe.human-moves]
            [tic-tac-toe.player :as player]))

(def x-3 250)
(def y-3 250)
(def size-3 150)
(def x-4 220)
(def y-4 220)
(def size-4 120)

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

(defn play-heading [player game-state human?]
  (cond
    (and (= game-state :in-progress) (not human?)) "Your opponent is thinking..."
    (= game-state :in-progress) (str (.toUpperCase (name player)) "'s turn!")
    :else game-state))

(defn ai-turn [state]
  (let [{:keys [mode player]} state
        new-board (player/take-turn state)
        new-state (assoc state
                    :board new-board
                    :human? (if (not= 4 mode) true false)
                    :player (utils/switch-player player)
                    :game-state (eval/score new-board))]
    (game-logs/log-move {:ds sql/ds :state new-state})
    new-state))

(defn- play-screen [{:keys [board player game-state human? replay?]}]
  (q/background 0 0 0)
  (q/text-size 30)
  (q/fill 255 255 255)
  (q/text (play-heading player game-state human?) 400 100)
  (cond
    (= 9 (count board)) (three-board x-3 y-3 size-3 board game-state)
    (= 16 (count board)) (four-board x-4 y-4 size-4 board game-state))
  (when (not= :in-progress game-state)
    (text-button (if replay? "Start new game?" "Play again?") 400 700 600 60)))

(defmethod utils/update-state :play [state]
  (let [{:keys [game-state human?]} state]
    (play-screen state)
    (cond
      (and (= :in-progress game-state) human?) state
      (and (= :in-progress game-state) (not human?)) (ai-turn state)
      :else (do (game-logs/log-completed-game {:ds sql/ds :log-file edn/logs-path :state state})
                state))))

(defmethod utils/update-state :replay [state]
  (play-screen state)
  (q/frame-rate 1)
  (let [{:keys [game-state player moves]} state]
    (if (= :in-progress game-state)
      (assoc state :player (player/switch-player player)
                   :board (first moves)
                   :moves (rest moves)
                   :game-state (eval/score (first moves)))
      (do (q/frame-rate 30) state))))

(defmulti clicked (fn [state _] (count (:board state))))

(defmethod clicked 9 [{:keys [board]} mouse-xy]
  (loop [i 0]
    (when (< i 9)
      (let [row (quot i 3)
            col (mod i 3)]
        (if (and (utils/mouse-over? (+ x-3 (* col size-3)) (+ y-3 (* row size-3)) size-3 size-3 mouse-xy)
                 (number? (nth board i)))
          i
          (recur (inc i)))))))

(defmethod clicked 16 [{:keys [board]} mouse-xy]
  (loop [i 0]
    (when (< i 16)
      (let [row (quot i 4)
            col (mod i 4)]
        (if (and (utils/mouse-over? (+ x-4 (* col size-4)) (+ y-4 (* row size-4)) size-4 size-4 mouse-xy)
                 (number? (nth board i)))
          i
          (recur (inc i)))))))

(defn- get-user-move [state mouse-xy]
  (let [{:keys [board player]} state
        move (clicked state mouse-xy)]
    (if (number? move)
      (let [new-state (assoc state
                            :board (assoc board move player)
                            :player (utils/switch-player player)
                            :human? (if (not= 1 (:mode state)) false true)
                            :game-state (eval/score (assoc board move player)))]
            (game-logs/log-move {:ds sql/ds :state new-state})
            new-state)
      state)))

(defn- reset-state [state]
  (assoc state :current-screen :mode-selection
               :mode nil
               :board nil
               :first-ai-level nil
               :second-ai-level nil
               :player :x
               :human? nil
               :game-state :in-progress
               :gui true
               :game-id (inc (:game-id state))))

(defmethod utils/handle-click :play [state mouse-xy]
  (cond
    (= :in-progress (:game-state state)) (get-user-move state mouse-xy)
    (utils/mouse-over? 400 700 600 60 mouse-xy) (reset-state state)
    :else state))

(defmethod utils/handle-click :replay [state mouse-xy]
  (if (utils/mouse-over? 400 700 600 60 mouse-xy) (do (reset-state state)) state))