(ns tic-tac-toe.screens.board-selection
  (:require [tic-tac-toe.print-utils :as print]
            [tic-tac-toe.render-screen :refer [render-screen]]
            [tic-tac-toe.state :refer [state]]
            [tic-tac-toe.board-options :as board]))

(defn- on-click [n]
  (swap! state assoc :current-screen (if (= 1 (:mode @state)) :play :first-level-selection))
  (swap! state assoc :board (case n 1 board/initial-3x3-board 2 board/initial-4x4-board)))

(defn- preview-square [key size]
  ^{:key key} [:span {:class (str "preview-square-" size)}])

(defn- three-by-three-preview []
  [:span.three-grid
   (map #(preview-square % 27) (range 9))])

(defn- four-by-four-preview []
  [:span.four-grid
   (map #(preview-square % 20) (range 16))])

(defn- board-preview [n]
  (case n
    1 (three-by-three-preview)
    2 (four-by-four-preview)))

(defn- select-board-btn [n]
  ^{:key n}[:button.select-board-btn {:on-click (partial on-click n)} (board-preview n) (nth print/board-prompt n)])

(defmethod render-screen :board-selection [_]
  [:div#board-selection.screen
   [:h2 (first print/board-prompt)]
   (map #(select-board-btn %) [1 2])])