(ns tic-tac-toe.game-logs.fake-logs-spec
  (:require [speclj.core :refer :all]
            [tic-tac-toe.game-logs.fake-logs :as fake]
            [tic-tac-toe.game-logs.game-logs :as game-logs]))

(describe "fake game logs"
  (before (fake/reset-games!))

  (context "get-new-game-id"
    (it "returns 1 when no games exist"
      (should= 1 (game-logs/get-new-game-id {:db :fake})))

    (it "returns next id when games exist"
      (fake/add-game! {:game-id 1})
      (fake/add-game! {:game-id 2})
      (should= 3 (game-logs/get-new-game-id {:db :fake}))))

  (context "log-move"
    (it "appends board to game's moves"
      (fake/add-game! {:game-id 1 :moves [] :player :x :human? true})
      (game-logs/log-move {:state {:db :fake :game-id 1 :board [:x 2 3 4 5 6 7 8 9] :player :o :human? false}})
      (should= [[:x 2 3 4 5 6 7 8 9]] (:moves (first @fake/games))))

    (it "concatenates multiple moves"
      (fake/add-game! {:game-id 1 :moves [] :player :x :human? true})
      (game-logs/log-move {:state {:db :fake :game-id 1 :board [:x 2 3 4 5 6 7 8 9] :player :o :human? false}})
      (game-logs/log-move {:state {:db :fake :game-id 1 :board [:x :o 3 4 5 6 7 8 9] :player :x :human? true}})
      (should= [[:x 2 3 4 5 6 7 8 9] [:x :o 3 4 5 6 7 8 9]] (:moves (first @fake/games)))))

  (context "log-completed-game"
    (it "updates game state"
      (fake/add-game! {:game-id 1 :game-state :in-progress})
      (game-logs/log-completed-game {:state {:db :fake :game-id 1 :game-state "X wins!"}})
      (should= "X wins!" (:game-state (first @fake/games)))))

  (context "get-last-in-progress-game"
    (it "returns nil when no games exist"
      (should= nil (game-logs/get-last-in-progress-game {:db :fake})))

    (it "returns nil when last game is not in progress"
      (fake/add-game! {:game-id 1 :game-state "X wins!"})
      (should= nil (game-logs/get-last-in-progress-game {:db :fake})))

    (it "returns last game when it is in progress"
      (fake/add-game! {:game-id 1 :game-state :in-progress :board [1 2 3 4 5 6 7 8 9]})
      (should= {:game-id 1 :game-state :in-progress :board [1 2 3 4 5 6 7 8 9]}
               (game-logs/get-last-in-progress-game {:db :fake}))))

  (context "get-game-log"
    (it "returns nil when game doesn't exist"
      (should= nil (game-logs/get-game-log {:db :fake :id 99})))

    (it "returns game by id"
      (fake/add-game! {:game-id 1 :game-state "X wins!"})
      (fake/add-game! {:game-id 2 :game-state "O wins!"})
      (should= {:game-id 2 :game-state "O wins!"}
               (game-logs/get-game-log {:db :fake :id 2})))))
