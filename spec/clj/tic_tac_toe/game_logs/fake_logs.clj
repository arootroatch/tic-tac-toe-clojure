(ns tic-tac-toe.game-logs.fake-logs
  (:require [tic-tac-toe.game-logs.game-logs :as game-logs]))

(def games (atom []))

(defn reset-games! [] (reset! games []))

(defn add-game! [game]
  (swap! games conj game))

(defmethod game-logs/get-new-game-id :fake [_]
  (if (empty? @games) 1 (inc (apply max (map :game-id @games)))))

(defmethod game-logs/log-move :fake [{:keys [state]}]
  (let [{:keys [board game-id]} state]
    (swap! games (fn [gs]
                   (mapv (fn [g]
                           (if (= (:game-id g) game-id)
                             (update g :moves conj board)
                             g))
                         gs)))))

(defmethod game-logs/log-completed-game :fake [{:keys [state]}]
  (let [{:keys [game-state game-id]} state]
    (swap! games (fn [gs]
                   (mapv (fn [g]
                           (if (= (:game-id g) game-id)
                             (assoc g :game-state game-state)
                             g))
                         gs)))))

(defmethod game-logs/get-last-in-progress-game :fake [_]
  (let [last-game (last @games)]
    (when (= :in-progress (:game-state last-game)) last-game)))

(defmethod game-logs/get-game-log :fake [{:keys [id]}]
  (first (filter #(= (:game-id %) id) @games)))
