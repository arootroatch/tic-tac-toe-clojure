(ns tic-tac-toe.gui.board-selection
  (:require [quil.core :as q]
            [tic-tac-toe.game_logs.game-log :as game-log]
            [tic-tac-toe.tui.print-utils :as print]
            [tic-tac-toe.gui.utils :as utils]
            [tic-tac-toe.tui.get-selection :as selection]))

(defn three-board-preview [x y square-size]
  (q/fill 255 255 255)
  (q/stroke 0 0 0)
  (doseq [row [0 1 2]
          col [0 1 2]]
    (q/rect (+ x (* col square-size)) (+ y (* row square-size)) square-size square-size)))

(defn four-board-preview [x y square-size]
  (q/fill 255 255 255)
  (q/stroke 0 0 0)
  (doseq [row [0 1 2 3]
          col [0 1 2 3]]
    (q/rect (+ x (* col square-size)) (+ y (* row square-size)) square-size square-size)))

(defn three-by-three-container [x y]
  (if (utils/mouse-over? x y 600 200) (q/fill 100 100 100) (q/fill 0 0 0))
  (q/stroke 255 255 255)
  (q/stroke-weight 5)
  (q/rect x y 600 200 10)
  (q/fill 255 255 255)
  (q/text-size 50)
  (q/text-align :center)
  (q/text "3 x 3" (- x 120) (+ y 10))
  (three-board-preview (+ x 60) (- y 50) 50))

(defn four-by-four-container [x y]
  (if (utils/mouse-over? x y 600 200) (q/fill 100 100 100) (q/fill 0 0 0))
  (q/stroke 255 255 255)
  (q/stroke-weight 5)
  (q/rect x y 600 200 10)
  (q/fill 255 255 255)
  (q/text-size 50)
  (q/text-align :center)
  (q/text "4 x 4" (- x 120) (+ y 10))
  (four-board-preview (+ x 50) (- y 60) 40))

(defn- board-selection-screen []
  (q/background 0 0 0)
  (q/text-size 30)
  (q/text (first print/board-prompt) 400 100)
  (three-by-three-container 400 280)
  (four-by-four-container 400 530))

(defmethod utils/update-state :board-selection [state]
  (board-selection-screen)
  state)

(defn- set-board [board-selection state]
  (if (= 1 (:mode state))
    (let [new-state (assoc state :board board-selection :current-screen :play)]
      (game-log/create-in-progress-game-file (:filepath state) new-state)
      (game-log/log-game-id game-log/game-id-path (:game-id state))
      new-state)
    (assoc state :board board-selection :current-screen :first-level-selection)))

(defmethod utils/handle-click :board-selection [state mouse-xy]
  (cond
    (:board state) (:board state)
    (utils/mouse-over? 400 280 600 200 mouse-xy) (set-board selection/initial-3x3-board state)
    (utils/mouse-over? 400 530 600 200 mouse-xy) (set-board selection/initial-4x4-board state)
    :else state))