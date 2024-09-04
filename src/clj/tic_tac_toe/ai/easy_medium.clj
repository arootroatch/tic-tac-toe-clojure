(ns tic-tac-toe.ai.easy-medium
  (:require [tic-tac-toe.eval-board :as eval-board]))

(defn- played-corner? [board]
  (some #{:x :o} (map #(nth board %) [0 2 6 8])))

(defn- can-win? [path player]
  (and (= (if (= 4 (count path)) 3 2) (count (filter #{player} path)))
       (some number? path)))

(defn get-winning-move [board player]
  (let [paths (eval-board/->paths board)]
    (first (filter number? (flatten (filter #(can-win? % player) paths))))))

(defn find-easy-move [board]
  (let [available (filter number? board)]
    (nth available (rand-int (count available)))))

(defn find-medium-move [board]
  (cond
    (and (= 9 (count board)) (= 1 (count (filter keyword? board)))) (if (played-corner? board) 5 1)
    (some? (get-winning-move board :x)) (get-winning-move board :x)
    (some? (get-winning-move board :o)) (get-winning-move board :o)
    :else (find-easy-move board)))
