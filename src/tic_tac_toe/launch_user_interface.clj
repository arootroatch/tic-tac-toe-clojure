(ns tic-tac-toe.launch-user-interface)

(defn- dispatch-ui [args]
  (cond (= (count args) 4) (take 3 args)
        (= (count args) 3) (take 2 args)
        :else args))

(defmulti launch-user-interface dispatch-ui)

(defmethod launch-user-interface :default [_]
  (println "Please enter your preferences:")
  (println "Format: 'lein run <ui> <db> <game id>")
  (println "<db> is the only required field\n")
  (println "--psqldb         Run with PostgreSQL")
  (println "--edndb         Run with EDN Database")
  (println "gui             Run GUI")
  (println "--game <id>     Run GUI"))