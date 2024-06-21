(ns tic-tac-toe.ai.medium
  (:require [tic-tac-toe.ai.easy :as easy]
            [tic-tac-toe.eval-board :as eval-board]))

(defn- played-corner? [board]
  (or (not (number? (nth board 0)))
      (not (number? (nth board 2)))
      (not (number? (nth board 6)))
      (not (number? (nth board 8)))))

(defn- can-win? [path player]
  (and (= 2 (count (filter #{player} path)))
       (some number? path)))

(defn path-to-win [board player]
  (let [paths (eval-board/->paths board)]
    (flatten (filter #(can-win? % player) paths))))

(defn find-medium-move [board]
  (cond
    (= 1 (count (filter keyword? board))) (if (played-corner? board) 5 1)
    (not-empty (path-to-win board :x)) (first (filter number? (path-to-win board :x)))
    (not-empty (path-to-win board :o)) (first (filter number? (path-to-win board :o)))
    :else (easy/find-easy-move board)))
