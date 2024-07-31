(ns tic-tac-toe.tui.tui-main-spec
  (:require [speclj.core :refer :all]
            [speclj.stub :as stub]
            [tic-tac-toe.game-logs.game-logs :as game-logs]
            [tic-tac-toe.game-logs.sql :as sql]
            [tic-tac-toe.game_logs.edn-logs :as edn]
            [tic-tac-toe.player :as player]
            [tic-tac-toe.tui.print-utils :as print-utils]
            [tic-tac-toe.tui.tui-main :refer :all]))

(def state {:board [:o 2 :x :o :x :x 7 8 9]
            :mode 2
            :human? true
            :first-ai-level 3
            :second-ai-level nil
            :player :x
            :ui :tui
            :game-state :in-progress
            :game-id 20})

(def end-state {:board [:o 2 :x :o :x :x :o 8 9]
                :mode 2
                :human? false
                :first-ai-level 3
                :second-ai-level nil
                :player :o
                :ui :tui
                :game-state "O wins!"
                :game-id 20})

(describe "tui TTT"
  (with-stubs)

  (context "play loop"
    (redefs-around [print-utils/print-board (stub :print-board)
                    game-logs/log-completed-game (stub :log-completed)
                    println (stub :println)
                    player/take-turn (stub :take-turn {:return [:o 2 :x :o :x :x :o 8 9]})
                    game-logs/log-move (stub :log-move)])

    (it "prints board at the beginning of each turn"
      (play-loop state)
      (should= [[[:o 2 :x :o :x :x 7 8 9]] [[:o 2 :x :o :x :x :o 8 9]]]
               (stub/invocations-of :print-board)))

    (it "logs completed game when game finishes"
      (play-loop state)
      (should-have-invoked :log-completed {:with [{:ds sql/ds :log-file edn/logs-path :state end-state}]}))

    (it "displays winner when game finishes"
      (play-loop state)
      (should-have-invoked :println {:with ["O wins!"]}))

    (it "calls take-turn if game is not over"
      (play-loop state)
      (should-have-invoked :take-turn {:with [state]}))

    (it "logs move with updated state"
      (play-loop state)
      (should-have-invoked :log-move {:with [{:ds sql/ds :state end-state}]}))
    )

  (context "launch-user-interface edn"
    ))

