(ns tic-tac-toe.gui.resume-selection
  (:require [quil.core :as q]
            [tic-tac-toe.game-logs.game-logs :as game-logs]
            [tic-tac-toe.game-logs.sql :as sql]
            [tic-tac-toe.game_logs.edn-logs :as edn]
            [tic-tac-toe.gui.components :refer [text-button]]
            [tic-tac-toe.gui.utils :as utils]
            [tic-tac-toe.tui.print-utils :as print]))

(defn- resume-selection-screen []
  (q/background 0 0 0)
  (q/text-size 30)
  (q/text (first print/resume-prompt) 400 100)
  (text-button (nth print/resume-prompt 1) 400 250 600 60)
  (text-button (nth print/resume-prompt 2) 400 330 600 60))

(defn- get-resumed-game-board [db old-game]
  (when old-game
    (case db
      :edn (edn/get-resumed-game-board old-game)
      :sql (read-string (:games/board old-game)))))

(defmethod utils/update-state :resume-selection [state]
  (let [old-game (game-logs/get-last-in-progress-game
                   {:db (:db state) :dir-path edn/in-progress-dir-path-gui :ds sql/ds})
        old-board (get-resumed-game-board (:db state) old-game)]
    (if (and (some? old-game) (< (count old-board) 17))
      (do (resume-selection-screen)
          (if (= :edn (:db state))
            (assoc state :filepath old-game)
            (assoc state :game-log old-game)))
      (assoc state :current-screen :mode-selection))))

(defmulti handle-resume (fn [x] (:db (:state x))))

(defmethod handle-resume :edn [{:keys [n state]}]
  (cond
    (= n 1) (assoc (edn/get-resumed-game-state (:filepath state)) :db :edn)
    (= n 2) (do (clojure.java.io/delete-file (:filepath state) true)
                (assoc state :current-screen :mode-selection))
    :else (assoc state :current-screen :mode-selection)))

(defmethod handle-resume :sql [{:keys [n state]}]
  (cond
    (= n 1) (assoc (sql/format-game-state (:game-log state) false) :db :sql)
    (= n 2) (do (sql/set-abandoned-game-state sql/ds (:games/id (:game-log state)))
                (assoc state :current-screen :mode-selection))
    :else (assoc state :current-screen :mode-selection)))

(defmethod utils/handle-click :resume-selection [state mouse-xy]
  (cond
    (:mode state) (:mode state)
    (utils/mouse-over? 400 250 600 60 mouse-xy) (handle-resume {:n 1 :state state})
    (utils/mouse-over? 400 330 600 60 mouse-xy) (handle-resume {:n 2 :state state})
    :else state))