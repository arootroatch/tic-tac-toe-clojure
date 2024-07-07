(ns tic-tac-toe.gui.core
  (:require [quil.core :as q]
            [quil.middleware :as m]
            [tic-tac-toe.gui.board-selection :refer [board-selection]]
            [tic-tac-toe.gui.first-level-selection :refer [first-level-selection]]
            [tic-tac-toe.gui.mode-selection :refer [mode-selection]]
            [tic-tac-toe.gui.play :refer [play]]
            [tic-tac-toe.gui.second-level-selection :refer [second-level-selection]]
            [tic-tac-toe.player :as player]))

(def window-size 800)

(defn setup []
  (q/frame-rate 30)
  (q/background 0 0 0)
  (q/rect-mode :center)
  (q/text-align :center)
  (q/color-mode :rgb)
  {:current-screen  (play nil)
   :mode            nil
   :board           (range 16)
   :first-ai-level  nil
   :second-ai-level nil
   :player-sequence player/player-sequence}
  ;:board-selection (board-selection)
  #_:mode-selection #_(mode-selection)
  #_:level-selection #_(first-level-selection)
  #_:play #_(play 2))

(defn update-state [state]
  (assoc state :current-screen (play state))
  #_(cond
      (nil? (:mode state)) (assoc state :current-screen (mode-selection state) :mode (mode-selection state))
      (nil? (:board state)) (assoc state :current-screen (board-selection state) :board (board-selection state))
      (and (not= :HvH (:mode state)) (nil? (:first-ai-level state))) (assoc state :current-screen (first-level-selection state) :first-ai-level (first-level-selection state))
      (and (= :CvC (:mode state)) (nil? (:second-ai-level state))) (assoc state :current-screen (second-level-selection state) :second-ai-level (second-level-selection state))
      :else (assoc state :current-screen (play (:board state)))))


(defn draw-state [state]
  (:current-screen state))

;(defn red [x y]
;  (prn x y)
;  #_(q/fill 255 0 0))

(q/defsketch gui-TTT
             :title "Tic-Tac-Toe"
             :size [window-size window-size]
             :setup setup
             :update update-state
             :draw draw-state
             :features [:keep-on-top]
             ;:mouse-clicked red
             ;:mouse-moved utils/get-pos
             :middleware [m/fun-mode])
