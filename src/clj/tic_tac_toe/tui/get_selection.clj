(ns tic-tac-toe.tui.get-selection
  (:require [tic-tac-toe.game-logs.sql :as sql]
            [tic-tac-toe.tui.get-user-input :refer [get-input-in-range]]
            [tic-tac-toe.prompts :as prompts]))

(defmulti get-selection :option)

(defmethod get-selection :board [_]
  (prompts/prompt-user-for-board)
  (let [input (get-input-in-range 4)]
    (do (prompts/print-board-selection input)) input))

(defmethod get-selection :level [{:keys [ai mode board]}]
  (prompts/prompt-user-for-level ai mode board)
  (let [input (get-input-in-range 4)]
    (do (prompts/print-level-selection input mode board)) input))

(defmethod get-selection :mode [_]
  (prompts/prompt-user-for-mode)
  (let [input (get-input-in-range 5)]
    (do (prompts/print-mode-selection input)) input))

(defmethod get-selection :resume-edn [{:keys [filepath]}]
  (prompts/prompt-user-to-resume)
  (let [input (get-input-in-range 3)]
    (if (= 2 input)
      (do (clojure.java.io/delete-file filepath true)
          (prompts/print-resume-selection input))
      (do (prompts/print-resume-selection input) input))))

(defmethod get-selection :resume-sql [{:keys [game-id]}]
  (prompts/prompt-user-to-resume)
  (let [input (get-input-in-range 3)]
    (if (= 2 input)
      (do (sql/set-abandoned-game-state sql/ds game-id)
          (prompts/print-resume-selection input))
      (do (prompts/print-resume-selection input) input))))