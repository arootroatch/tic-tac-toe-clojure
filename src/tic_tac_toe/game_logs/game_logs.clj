(ns tic-tac-toe.game-logs.game-logs)

(defmulti get-new-game-id :db)

(defmulti log-completed-game (fn [x] (:db (:state x))))

(defmulti log-move (fn [x] (:db (:state x))))

(defmulti get-last-in-progress-game :db)

(defmulti get-game-log :db)