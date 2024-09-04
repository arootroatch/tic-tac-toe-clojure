(ns tic-tac-toe.tui.get-user-input)

(defn read-user-input []
  (try
    (Integer/parseInt (read-line))
    (catch Exception _)))

(defn get-input-in-range [limit]
  (loop [input (read-user-input)]
    (if (and (number? input) (> input 0) (< input limit))
      input
      (do (println (str "Please enter a number 1-" (dec limit)))
          (recur (read-user-input))))))
