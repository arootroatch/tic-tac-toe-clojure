(ns tic-tac-toe.screens.play
  (:require [c3kit.wire.js :as wjs]
            [clojure.string :as string]
            [tic-tac-toe.bot-moves]
            [tic-tac-toe.eval-board :as eval-board]
            [tic-tac-toe.player :as player]
            [tic-tac-toe.render-screen :refer [render-screen]]))

(defn- on-click [state move]
  (let [board (:board @state)
        player (:player @state)
        new-board (assoc board move player)
        btn (wjs/element-by-id (str "index-" move))]
    (swap! state assoc :board new-board :player (player/switch-player player) :game-state (eval-board/score new-board))))

(defn- set-token [state n]
  (let [val (nth (:board @state) n)]
    (when (keyword? val) (string/capitalize (name val)))))

(defn- board-square [state n]
  (let [token (set-token state n)]
    [:button.board-square {:id       (str "index-" n)
                           :on-click (partial on-click state n)
                           :disabled (some? token)} token]))

(defmulti render-board (fn [state] (count (:board @state))))

(defmethod render-board 9 [state]
  [:div.three-grid
   (for [n (range 9)]
     ^{:key n} [board-square state n])])

(defmethod render-board 16 [state]
  [:div.four-grid
   (for [n (range 16)]
     ^{:key n} [board-square state n])])

(defn- play-heading [state]
  [:h2#play-heading
   (let [player (some-> (:player @state) name string/capitalize)
         game-state (:game-state @state)]
     (if (= :in-progress game-state)
       (str player "'s turn!")
       game-state))])

(defmethod render-screen :play [state]
  [:div#board-wrapper
   [play-heading state]
   [render-board state]])
