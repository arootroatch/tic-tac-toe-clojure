(ns tic-tac-toe.launch-user-interface
  (:require [tic-tac-toe.tui.print-utils :as print-utils]))

(defn- dispatch-ui [args]
  (cond (= (count args) 4) (take 3 args)
        (= (count args) 3) (take 2 args)
        :else args))

(defmulti launch-user-interface dispatch-ui)

(defmethod launch-user-interface :default [_]
  (print-utils/display-command-options))