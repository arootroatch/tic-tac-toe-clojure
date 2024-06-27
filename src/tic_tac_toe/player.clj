(ns tic-tac-toe.player)

(def player-sequence (cycle [:x :o]))

(defn- dispatch-player [{:keys [player mode first-ai-level second-ai-level]}]
  (cond
    (or (and (= player :o) (= mode 2))
        (and (= player :x) (or (= mode 3) (= mode 4)))) first-ai-level
    (and (= player :o) (=  mode 4)) second-ai-level))

(defmulti take-turn dispatch-player)