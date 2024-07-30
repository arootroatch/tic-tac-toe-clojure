(ns tic-tac-toe.game-logs.game-logs)

(defmulti get-new-game-id :db)

(defmulti log-completed-game :db)

(defmulti log-move :db)