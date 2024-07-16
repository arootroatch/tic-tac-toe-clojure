(ns tic-tac-toe.gui.resume-selection
  (:require [quil.core :as q]
            [tic-tac-toe.game_logs.game-log :as game-log]
            [tic-tac-toe.gui.components :refer [text-button]]
            [tic-tac-toe.gui.utils :as utils]
            [tic-tac-toe.tui.print-utils :as print]))

(defn- resume-selection-screen []
  (q/background 0 0 0)
  (q/text-size 30)
  (q/text (first print/resume-prompt) 400 100)
  (text-button (nth print/resume-prompt 1) 400 250 600 60)
  (text-button (nth print/resume-prompt 2) 400 330 600 60))

(defmethod utils/update-state :resume-selection [state]
  (resume-selection-screen)
  state
  #_(let [old-game (game-log/get-last-in-progress-game game-log/in-progress-dir-path-gui)]
    (if (some? old-game)
      (do
        (resume-selection-screen)
        (assoc state :filepath old-game))
      (assoc state :current-screen :mode-selection))))

(defn- handle-resume [n state]
  (cond
    (= n 1) (game-log/get-resumed-game-state (:filepath state))
    (= n 2) (do (clojure.java.io/delete-file (:filepath state) true)
                (assoc state :current-screen :mode-selection))
    :else (assoc state :current-screen :mode-selection)
    ))

(defmethod utils/handle-click :resume-selection [state mouse-xy]
  (cond
    (:mode state) (:mode state)
    (utils/mouse-over? 400 250 600 60 mouse-xy) (handle-resume 1 state)
    (utils/mouse-over? 400 330 600 60 mouse-xy) (handle-resume 2 state)
    :else state))