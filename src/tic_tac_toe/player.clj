(ns tic-tac-toe.player)

(defmulti take-turn (fn [x] (:level x)))
