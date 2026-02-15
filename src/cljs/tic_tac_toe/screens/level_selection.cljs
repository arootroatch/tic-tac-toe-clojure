(ns tic-tac-toe.screens.level-selection
  (:require [tic-tac-toe.render-screen :refer [render-screen]]
            [tic-tac-toe.prompts :as prompts]
            [tic-tac-toe.screens.selection-button :refer [selection-button]]))

;region Helpers

(defn- prompt-index->level [n]
  (case n 3 1 4 2 6 3))

(defn- heading-text [state]
  (cond
    (= :second-level-selection (:current-screen @state)) (nth prompts/level-prompt 1)
    (= 4 (:mode @state)) (first prompts/level-prompt)
    :else (nth prompts/level-prompt 2)))

;endregion

;region Click Handling

(defn- on-click [state screen n]
  (let [lk (if (= :first-level-selection screen) :first-ai-level :second-ai-level)
        ns (if (and (= :first-level-selection screen) (= 4 (:mode @state)))
             :second-level-selection
             :play)]
    (swap! state assoc :current-screen ns lk (prompt-index->level n))))

;endregion

;region Screen Rendering

(defn- level-selection-screen [screen-id screen state]
  [:div {:id screen-id :class "screen"}
   [:h2 (heading-text state)]
   (for [n [3 4 6]]
     ^{:key n} [selection-button (nth prompts/level-prompt n) (partial on-click state screen n)])])

(defmethod render-screen :first-level-selection [state]
  (level-selection-screen "first-level-selection" :first-level-selection state))

(defmethod render-screen :second-level-selection [state]
  (level-selection-screen "second-level-selection" :second-level-selection state))

;endregion
