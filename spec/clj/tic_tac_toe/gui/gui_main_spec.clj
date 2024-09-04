(ns tic-tac-toe.gui.gui-main-spec
  (:require [speclj.core :refer :all]
            [tic-tac-toe.game-logs.game-logs :as game-logs]
            [tic-tac-toe.gui.gui-main :refer :all]
            [tic-tac-toe.gui.play]
            [tic-tac-toe.launch-user-interface :refer [launch-user-interface]]))

(def board [1 2 3 4 5 6 7 8 9])

(def in-progress-state {:current-screen  :play
                        :mode            3
                        :board           board
                        :first-ai-level  3
                        :second-ai-level nil
                        :player          :o
                        :human?          true
                        :game-state      :in-progress
                        :gui             true})


(describe "ttt-gui"
  (with-stubs)

  (context "draw-state"
    (it "draws current screen"
      (should= :play (draw-state in-progress-state)))
    )

  (context "play game edn"
    (it "launches quil with new game-id, filepath, and sets db type"
      (with-redefs [launch-quil (stub :launch-quil)
                    game-logs/get-new-game-id (stub :new-id {:return 13})]
        (launch-user-interface ["gui" "--edndb"])
        (should-have-invoked :launch-quil {:with [{:game-id 13, :filepath "src/clj/tic_tac_toe/game_logs/in_progress/game-13.edn", :current-screen :resume-selection, :db :edn, :second-ai-level nil, :mode nil, :first-ai-level nil, :game-state :in-progress, :human? nil, :ui :gui, :player :x, :board nil}]})))
    )

  (context "play game sql"
    (it "launches quil with new game-id and sets db type"
      (with-redefs [launch-quil (stub :launch-quil)
                    game-logs/get-new-game-id (stub :new-id {:return 13})]
        (launch-user-interface ["gui" "--psqldb"])
        (should-have-invoked :launch-quil {:with [{:game-id 13, :current-screen :resume-selection, :db :sql, :second-ai-level nil, :mode nil, :first-ai-level nil, :game-state :in-progress, :human? nil, :ui :gui, :player :x, :board nil}]})))
    )

  (context "replay edn"
    (it "displays game id error when invalid game id is entered"
      (should= "There is no game with ID 50\n"
               (with-out-str (launch-user-interface ["gui" "--edndb" "--game" "50"]))))

    (it "displays moves error when game has no moves"
      (with-redefs [game-logs/get-game-log (stub :game-log {:return {:moves [] :game-id 2}})]
        (should= "There are no moves to show for this game.\n"
                 (with-out-str (launch-user-interface ["gui" "--edndb" "--game" "50"])))))

    (it "sets game-state to state from log and launches quil"
      (with-redefs [launch-quil (stub :launch-quil)]
        (launch-user-interface ["gui" "--edndb" "--game" "2"])
        (should-have-invoked :launch-quil {:with [{:game-id 2, :filepath "src/clj/tic_tac_toe/game_logs/in_progress/gui/game-2.edn", :current-screen :replay, :db :edn, :moves [[1 2 3 4 :x 6 7 8 9] [:o 2 3 4 :x 6 7 8 9] [:o 2 3 4 :x 6 7 :x 9] [:o :o 3 4 :x 6 7 :x 9] [:o :o 3 4 :x 6 7 :x :x] [:o :o :o 4 :x 6 7 :x :x]], :second-ai-level nil, :mode 2, :first-ai-level 3, :game-state :in-progress, :human? true, :ui :gui, :player :x, :board [1 2 3 4 5 6 7 8 9], :replay? true}]})))
    )

  (context "replay sql"
    (it "displays game id error when invalid game id is entered"
      (should= "There is no game with ID 50\n"
               (with-out-str (launch-user-interface ["gui" "--psqldb" "--game" "50"]))))

    (it "displays moves error when game has no moves"
      (with-redefs [game-logs/get-game-log (stub :game-log {:return {:moves [] :game-id 2}})]
        (should= "There are no moves to show for this game.\n"
                 (with-out-str (launch-user-interface ["gui" "--psqldb" "--game" "50"])))))

    (it "sets game-state to state from log and launches quil"
      (with-redefs [launch-quil (stub :launch-quil)]
        (launch-user-interface ["gui" "--psqldb" "--game" "2"])
        (should-have-invoked :launch-quil {:with [{:game-id 2, :current-screen :replay, :db :sql, :moves [[1 2 3 4 :x 6 7 8 9] [:o 2 3 4 :x 6 7 8 9] [:o :x 3 4 :x 6 7 8 9] [:o :x 3 4 :x 6 7 :o 9] [:o :x :x 4 :x 6 7 :o 9] [:o :x :x 4 :x 6 :o :o 9] [:o :x :x 4 :x :x :o :o 9] [:o :x :x 4 :x :x :o :o :o]], :second-ai-level 0, :mode 2, :first-ai-level 3, :game-state :in-progress, :human? true, :ui :tui, :player :x, :board [1 2 3 4 5 6 7 8 9], :replay? true}]})))
    ))

