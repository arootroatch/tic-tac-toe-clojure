(ns tic-tac-toe.ai.easy)

(defn find-easy-move [board]
  (let [available (filter number? board)]
    (nth available (rand-int (count available)))))