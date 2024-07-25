(ns tic-tac-toe.launch-user-interface)

(defn- dispatch-ui [args]
    (cond (= (count args) 2) (first args)
          (= (count args) 3) (take 2 args)
          :else args))

(defmulti launch-user-interface dispatch-ui)