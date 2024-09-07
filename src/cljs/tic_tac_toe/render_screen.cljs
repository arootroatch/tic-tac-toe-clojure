(ns tic-tac-toe.render-screen)

(defmulti render-screen (fn [state] (:current-screen @state)))
