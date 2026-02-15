(ns tic-tac-toe.screens.board-selection
  (:require [tic-tac-toe.prompts :as prompts]
            [tic-tac-toe.render-screen :refer [render-screen]]
            [tic-tac-toe.board-options :as board]))

(defn- on-click [state n]
  (swap! state assoc :current-screen (if (= 1 (:mode @state)) :play :first-level-selection))
  (swap! state assoc :board (case n 1 board/initial-3x3-board 2 board/initial-4x4-board)))

(defn- preview-square [size]
   [:span {:class (str "preview-square-" size)}])

(defn- three-by-three-preview []
  [:span.three-grid
   (for [n (range 9)]
     ^{:key n} [preview-square 27])])

(defn- four-by-four-preview []
  [:span.four-grid
   (for [n (range 16)]
     ^{:key n} [preview-square 20])])

(defn- board-preview [n]
  (case n
    1 (three-by-three-preview)
    2 (four-by-four-preview)))

(defn- select-board-btn [state n]
  [:button.select-board-btn {:on-click (partial on-click state n)} (board-preview n) (nth prompts/board-prompt n)])

(defmethod render-screen :board-selection [state]
  [:div#board-selection.screen
   [:h2 (first prompts/board-prompt)]
   (for [n [1 2]]
     ^{:key n} [select-board-btn state n])])