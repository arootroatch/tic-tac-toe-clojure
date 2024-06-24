(ns tic-tac-toe.player)

(defn- dispatch-player [x]
  (cond
    (or (and (= (:player x) :o) (= (:mode x) 2))
        (and (= (:player x) :x) (or (= (:mode x) 3) (= (:mode x) 4)))) (:first-ai-level x)
    (and (= (:player x) :o) (= (:mode x) 4)) (:second-ai-level x)))

(defmulti take-turn dispatch-player)