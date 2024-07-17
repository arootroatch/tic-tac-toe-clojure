(ns tic-tac-toe.launch-user-interface)

(defmulti launch-user-interface
          (fn [args] (cond (= (count args) 2) (first args) (= (count args) 3) (take 2 args) :else args)))