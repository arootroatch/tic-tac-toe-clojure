(ns tic-tac-toe.tui.tui-main-spec
  (:require [speclj.core :refer :all]
            [speclj.stub :as stub]
            [tic-tac-toe.game-logs.edn-logs-spec :as edn-spec]
            [tic-tac-toe.game-logs.game-logs :as game-logs]
            [tic-tac-toe.game-logs.sql :as sql]
            [tic-tac-toe.game-logs.sql-spec :as sql-spec]
            [tic-tac-toe.game_logs.edn-logs :as edn]
            [tic-tac-toe.launch-user-interface :refer [launch-user-interface]]
            [tic-tac-toe.player :as player]
            [tic-tac-toe.tui.get-selection :as get-selection]
            [tic-tac-toe.tui.print-utils :as print-utils]
            [tic-tac-toe.tui.tui-main :refer :all]))

(def state {:board           [:o 2 :x :o :x :x 7 8 9]
            :mode            2
            :human?          true
            :first-ai-level  3
            :second-ai-level nil
            :player          :x
            :ui              :tui
            :game-state      :in-progress
            :game-id         20})

(def end-state {:board           [:o 2 :x :o :x :x :o 8 9]
                :mode            2
                :human?          false
                :first-ai-level  3
                :second-ai-level nil
                :player          :o
                :ui              :tui
                :game-state      "O wins!"
                :game-id         20})

(def get-options-result {:mode            2
                         :first-ai-level  3
                         :second-ai-level nil
                         :board           [1 2 3 4 5 6 7 8 9]
                         :player          :x
                         :ui              :tui
                         :human?          true
                         :game-state      :in-progress
                         :game-id         13
                         :db              :edn})


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

  (context "get-options"
    (redefs-around [game-logs/get-new-game-id (stub :game-id {:return 13})
                    println (stub :println)])

    (it "sets HvC, unbeatable, 3x3 board, gets new game id"
      (should= get-options-result (with-in-str "2\n\n1\n3" (get-options :edn)))
      (should-have-invoked :game-id {:with [{:db :edn :path edn/game-id-path :ds sql/ds}]}))

    (it "sets HvH, 3x3 board, gets new game id"
      (should= (assoc get-options-result :mode 1 :first-ai-level nil) (with-in-str "1\n1" (get-options :edn)))
      (should-have-invoked :game-id {:with [{:db :edn :path edn/game-id-path :ds sql/ds}]}))

    (it "sets CvH, unbeatable, 3x3 board, gets new game id"
      (should= (assoc get-options-result :mode 3 :first-ai-level 3 :human? false)
               (with-in-str "3\n1\n3" (get-options :edn)))
      (should-have-invoked :game-id {:with [{:db :edn :path edn/game-id-path :ds sql/ds}]}))

    (it "sets CvC, unbeatable, unbeatable, 3x3 board, gets new game id"
      (should= (assoc get-options-result :mode 4 :first-ai-level 3 :human? false :second-ai-level 3)
               (with-in-str "4\n1\n3\n3" (get-options :edn)))
      (should-have-invoked :game-id {:with [{:db :edn :path edn/game-id-path :ds sql/ds}]}))

    (it "sets CvC, medium, medium, 4x4 board, gets new game id"
      (should= (assoc get-options-result :mode 4
                                         :first-ai-level 2
                                         :human? false
                                         :second-ai-level 2
                                         :board (vec (range 1 17)))
               (with-in-str "4\n2\n2\n2" (get-options :edn)))
      (should-have-invoked :game-id {:with [{:db :edn :path edn/game-id-path :ds sql/ds}]}))

    (it "sets CvC, easy, easy, 3x3x3 board, gets new game id"
      (should= (assoc get-options-result
                 :mode 4 :first-ai-level 1
                 :db :sql
                 :human? false
                 :second-ai-level 1
                 :board (vec (range 1 28)))
               (with-in-str "4\n3\n1\n1" (get-options :sql)))
      (should-have-invoked :game-id {:with [{:db :sql :path edn/game-id-path :ds sql/ds}]}))
    )

  (context "launch-user-interface edn"
    (redefs-around [game-logs/get-last-in-progress-game
                    (stub :get-last {:return "spec/tic_tac_toe/game_logs/in_progress/game-4.edn"})
                    println (stub :println)
                    edn/get-resumed-game-state (stub :resumed-state {:return edn-spec/resumed-state})
                    get-options (stub :get-options {:return get-options-result})
                    edn/create-in-progress-game-file (stub :create-file)
                    edn/log-game-id (stub :log-id)
                    play-loop (stub :play-loop)
                    edn/create-new-filepath
                    (stub :new-filepath {:return "spec/tic_tac_toe/game_logs/in_progress/game-13.edn"})])

    (it "checks for in-progress game"
      (with-in-str "1\n" (launch-user-interface ["--edndb"]))
      (should-have-invoked :get-last {:with [{:db :edn :dir-path edn/in-progress-dir-path}]}))

    (it "asks user to resume game. If yes, gets resumed game state, sets filepath to old game's filepath,
    and starts play loop"
      (with-in-str "1\n" (launch-user-interface ["--edndb"]))
      (should-not-have-invoked :get-options)
      (should-not-have-invoked :new-filepath)
      (should-have-invoked :resumed-state {:with ["spec/tic_tac_toe/game_logs/in_progress/game-4.edn"]})
      (should-have-invoked :play-loop {:with [(assoc edn-spec/resumed-state
                                                :ui :tui
                                                :filepath "spec/tic_tac_toe/game_logs/in_progress/game-4.edn")]}))

    (it "asks user to resume game. If no, deletes temp file, gets user options, gets new filepath,
    logs game state and game id, and starts play loop"
      (with-redefs [get-selection/get-selection (stub :selection {:return 2})]
        (launch-user-interface ["--edndb"])
        (should-have-invoked :selection {:with [{:option   :resume-edn
                                                 :filepath "spec/tic_tac_toe/game_logs/in_progress/game-4.edn"}]})
        (should-not-have-invoked :resumed-state)
        (should-have-invoked :get-options {:with [:edn]})
        (should-have-invoked :new-filepath {:with [edn/in-progress-dir-path 13]})
        (should-have-invoked :create-file
                             {:with ["spec/tic_tac_toe/game_logs/in_progress/game-13.edn" get-options-result]})
        (should-have-invoked :log-id {:with [edn/game-id-path 13]})
        (should-have-invoked :play-loop {:with [(assoc get-options-result
                                                  :ui :tui
                                                  :filepath "spec/tic_tac_toe/game_logs/in_progress/game-13.edn")]})))

    (it "does not ask user to resume if there's no in-progress game"
      (with-redefs [game-logs/get-last-in-progress-game (stub :get-last {:return nil})
                    get-selection/get-selection (stub :selection)]
        (launch-user-interface ["--edndb"])
        (should-not-have-invoked :selection)))
    )

  (context "launch-user-interface sql"
    (redefs-around [game-logs/get-last-in-progress-game
                    (stub :get-last {:return sql-spec/in-progress})
                    println (stub :println)
                    get-options (stub :get-options {:return (assoc get-options-result :db :sql)})
                    sql/format-game-state (stub :format {:return sql-spec/in-progress-formatted})
                    sql/log-game-state (stub :log-state)
                    play-loop (stub :play-loop)])

    (it "checks for in-progress game"
      (with-in-str "1\n" (launch-user-interface ["--psqldb"]))
      (should-have-invoked :get-last {:with [{:db :sql :ds sql/ds}]}))

    (it "asks user to resume game. If yes, gets resumed game state, and starts play loop"
      (with-in-str "1\n" (launch-user-interface ["--psqldb"]))
      (should-have-invoked :format {:with [sql-spec/in-progress false]})
      (should-not-have-invoked :get-options)
      (should-have-invoked :play-loop {:with [(assoc sql-spec/in-progress-formatted :ui :tui)]}))

    (it "asks user to resume game. If no, gets user options, logs game state , and starts play loop"
      (with-redefs [get-selection/get-selection (stub :selection {:return 2})]
        (launch-user-interface ["--psqldb"])
        (should-have-invoked :selection {:with [{:option  :resume-sql
                                                 :game-id 8}]})
        (should-not-have-invoked :format)
        (should-have-invoked :get-options {:with [:sql]})
        (should-have-invoked :log-state {:with [sql/ds (assoc get-options-result :db :sql)]})
        (should-have-invoked :play-loop {:with [(assoc get-options-result :ui :tui :db :sql)]})))

    (it "does not ask user to resume if there's no in-progress game"
      (with-redefs [game-logs/get-last-in-progress-game (stub :get-last {:return nil})
                    get-selection/get-selection (stub :selection)]
        (launch-user-interface ["--psqldb"])
        (should-not-have-invoked :selection)))
    )

  (context "launch-user-interface replay edn"
    (redefs-around [game-logs/get-game-log (stub :game-log {:return edn-spec/game-log})
                    print-utils/display-invalid-game-id-error (stub :id-error)
                    print-utils/display-unfinished-game-error (stub :unfinished)
                    print-utils/play-logged-game (stub :logged)])

    (it "gets game log for given game id"
      (launch-user-interface ["--edndb" "--game" "5"])
      (should-have-invoked :game-log {:with [{:db :edn :filepath edn/logs-path :ds sql/ds :id 5}]}))

    (it "displays error if game id doesn't exist"
      (with-redefs [game-logs/get-game-log (stub :game-log {:return nil})]
        (launch-user-interface ["--edndb" "--game" "5"])
        (should-have-invoked :id-error {:with [5]})))

    (it "displays error if game state is 'abandoned'"
      (with-redefs [game-logs/get-game-log (stub :game-log {:return (assoc edn-spec/game-log :game-state "abandoned")})]
        (launch-user-interface ["--edndb" "--game" "5"])
        (should-have-invoked :unfinished)))

    (it "prints moves to the console"
      (launch-user-interface ["--edndb" "--game" "5"])
      (should-have-invoked :logged {:with [(:moves edn-spec/game-log) (:game-state edn-spec/game-log)]}))
    )


  (context "launch-user-interface replay sql"
    (redefs-around [game-logs/get-game-log (stub :game-log {:return sql-spec/game-log-formatted})
                    print-utils/display-invalid-game-id-error (stub :id-error)
                    print-utils/display-unfinished-game-error (stub :unfinished)
                    print-utils/play-logged-game (stub :logged)])

    (it "gets game log for given game id"
      (launch-user-interface ["--psqldb" "--game" "5"])
      (should-have-invoked :game-log {:with [{:db :sql :filepath edn/logs-path :ds sql/ds :id 5}]}))

    (it "displays error if game id doesn't exist"
      (with-redefs [game-logs/get-game-log (stub :game-log {:return nil})]
        (launch-user-interface ["--psqldb" "--game" "5"])
        (should-have-invoked :id-error {:with [5]})))

    (it "displays error if game state is 'abandoned'"
      (with-redefs [game-logs/get-game-log
                    (stub :game-log {:return (assoc sql-spec/game-log-formatted :game-state "abandoned")})]
        (launch-user-interface ["--psqldb" "--game" "5"])
        (should-have-invoked :unfinished)))

    (it "prints moves to the console"
      (let [moves (:moves sql-spec/game-log-formatted)
            game-state (:game-state sql-spec/game-log-formatted)]
        (launch-user-interface ["--psqldb" "--game" "5"])
        (should-have-invoked :logged {:with [moves game-state]})))
    ))