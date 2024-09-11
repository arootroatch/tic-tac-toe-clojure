(ns tic-tac-toe.screens.play
  (:require [clojure.string :as string]
            [tic-tac-toe.bot-moves]
            [tic-tac-toe.eval-board :as eval-board]
            [tic-tac-toe.player :as player]
            [tic-tac-toe.render-screen :refer [render-screen]]))

(defn- on-click [state move]
  (let [board (:board @state)
        player (:player @state)
        new-board (assoc board move player)]
    (swap! state assoc :board new-board
           :player (player/switch-player player)
           :game-state (eval-board/score new-board)
           :human? (if (= 1 (:mode @state)) true false))))

(defn- set-token [state n]
  (let [val (nth (:board @state) n)]
    (when (keyword? val) (string/capitalize (name val)))))

(defn- board-square [state n]
  (let [token (set-token state n)]
    [:button.board-square {:id       (str "index-" n)
                           :on-click (partial on-click state n)
                           :disabled (or (not (:human? @state))
                                         (not= :in-progress (:game-state @state))
                                         (some? token))}
     token]))

(defn ai-turn [state]
  (when (and (= :in-progress (:game-state @state)) (not (:human? @state)))
    (let [new-board (player/take-turn @state)]
      (swap! state assoc :player (player/switch-player (:player @state))
             :board new-board
             :game-state (eval-board/score new-board)
             :human? (if (= 4 (:mode @state)) false true)))))

(defmulti render-board (fn [state] (count (:board @state))))

(defmethod render-board 9 [state]
  (js/React.useEffect (partial ai-turn state))
  [:div.three-grid
   (for [n (range 9)]
     ^{:key n} [board-square state n])])

(defmethod render-board 16 [state]
  (js/React.useEffect (partial ai-turn state))
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

(defn- reset-state [state]
  (reset! state {:current-screen  :mode-selection
                 :mode            nil
                 :board           nil
                 :first-ai-level  nil
                 :second-ai-level nil
                 :player          :x
                 :human?          true
                 :game-state      :in-progress
                 :ui              :gui}))

(defmethod render-screen :play [state]
  [:div#board-wrapper
   [play-heading state]
   [:f> render-board state]
   (when (not= :in-progress (:game-state @state))
     [:button#restart {:on-click (partial reset-state state)} "Restart"])]
  )
