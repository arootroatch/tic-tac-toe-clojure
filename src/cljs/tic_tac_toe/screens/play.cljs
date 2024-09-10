(ns tic-tac-toe.screens.play
  (:require [c3kit.wire.js :as wjs]
            [tic-tac-toe.eval-board :as eval-board]
            [tic-tac-toe.player :as player]
            [tic-tac-toe.render-screen :refer [render-screen]]))

(defn- read-player [player]
  (if (= :x player) "X" "O"))

(defn- on-click [state move]
  (let [board (:board @state)
        player (:player @state)
        new-board (assoc board move player)
        btn (wjs/element-by-id (str "index-" move))]
    (set! (.-innerHTML btn) (read-player player))
    (set! (.-disabled btn) true)
    (swap! state assoc :board new-board :player (player/switch-player player) :game-state (eval-board/score new-board))))

(defn- board-square [state n]
  ^{:key n} [:button.board-square {:id (str "index-" n) :on-click (partial on-click state n)}])

(defmulti render-board (fn [state] (count (:board @state))))

(defmethod render-board 9 [state]
  [:div.three-grid
   (map #(board-square state %) (range 9))])

(defmethod render-board 16 [state]
  [:div.four-grid
   (map #(board-square state %) (range 16))])

(defn- play-heading [state]
  (let [player (read-player (:player @state))
        game-state (:game-state @state)]
    (if (= :in-progress game-state)
      (str player "'s turn!")
      game-state)))

(defmethod render-screen :play [state]
  [:div#board-wrapper
   [:h2#play-heading (play-heading state)]
   (render-board state)])
