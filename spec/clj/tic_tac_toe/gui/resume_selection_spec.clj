(ns tic-tac-toe.gui.resume-selection-spec
  (:require [quil.core :as q]
            [speclj.core :refer :all]
            [speclj.stub :as stub]
            [tic-tac-toe.game-logs.game-logs :as game-logs]
            [tic-tac-toe.game-logs.sql :as sql]
            [tic-tac-toe.game_logs.edn-logs :as edn]
            [tic-tac-toe.gui.components :as components]
            [tic-tac-toe.gui.resume-selection :refer :all]
            [tic-tac-toe.gui.utils :as utils]))

(def test-state {:current-screen  :play
                 :mode            2
                 :board           [:x :x 3 4 :o 6 7 8 9]
                 :first-ai-level  3
                 :second-ai-level nil
                 :player          :x
                 :human?          false
                 :game-state      :in-progress
                 :ui              :tui})

(def edn-result-state (assoc test-state
                        :player :o
                        :board [1 2 3 4 :x 6 7 8 9]
                        :game-id 4
                        :db :edn
                        :filepath "spec/clj/tic_tac_toe/game_logs/in_progress/game-4.edn"
                        :ui :gui))

(def edn-test-state {:current-screen :resume-selection
                     :db             :edn
                     :filepath       "spec/clj/tic_tac_toe/game_logs/in_progress/game-4.edn"})

(describe "resume-selection"
  (with-stubs)

  (context "handle-click edn"
    (redefs-around [clojure.java.io/delete-file (stub :delete-file)])

    (it "updates state with previous game state"
      (should= edn-result-state (utils/handle-click edn-test-state {:x 400 :y 250})))

    (it "updates ui in state to gui if tui"
      (with-redefs [edn/get-resumed-game-state (stub :get-resumed {:return (assoc edn-result-state :ui :tui)})]
        (should= edn-result-state (utils/handle-click edn-test-state {:x 400 :y 250}))))

    (it "updates to mode-selection"
      (should= {:current-screen :mode-selection :db :edn}
               (utils/handle-click {:current-screen :resume-selection :db :edn} {:x 400 :y 330})))

    (it "deletes temp file"
      (utils/handle-click {:current-screen :resume-selection :db :edn} {:x 400 :y 330})
      (should-have-invoked :delete-file))
    )

  (context "handle-click sql"
    (redefs-around [sql/format-game-state (stub :resumed-state {:return (assoc test-state :db :sql)})
                    sql/set-abandoned-game-state (stub :abandon)])

    (it "updates state with previous game state"
      (should= (assoc test-state :db :sql :ui :gui)
               (utils/handle-click {:current-screen :resume-selection :db :sql} {:x 400 :y 250})))

    (it "adds current screen :play to previous game state if missing"
      (with-redefs [sql/format-game-state (stub :resumed-state {:return (assoc test-state :current-screen nil :db :sql)})]
        (should= (assoc test-state :db :sql :ui :gui)
                 (utils/handle-click {:current-screen :resume-selection :db :sql} {:x 400 :y 250}))))

    (it "updates to mode-selection"
      (should= {:current-screen :mode-selection :db :sql}
               (utils/handle-click {:current-screen :resume-selection :db :sql} {:x 400 :y 330})))

    (it "sets game state to abandoned"
      (utils/handle-click {:current-screen :resume-selection :db :sql} {:x 400 :y 330})
      (should-have-invoked :abandon))
    )

  (context "resume-selection-screen"
    (redefs-around [q/background (stub :background)
                    q/text-size (stub :text-size)
                    q/text (stub :text)
                    components/text-button (stub :text-button)
                    game-logs/get-last-in-progress-game (stub :last-game {:return {:games/board "[1 2 3 4 5 6 7 8 9]"}})])
    (it "resets background"
      (utils/update-state {:current-screen :resume-selection :db :sql}) (should-have-invoked :background {:with [0 0 0]}))

    (it "sets text size to 30"
      (utils/update-state {:current-screen :resume-selection :db :sql}) (should-have-invoked :text-size {:with [30]}))

    (it "displays resume heading"
      (utils/update-state {:current-screen :resume-selection :db :sql})
      (should-have-invoked :text {:with ["There's an unfinished game! Would you like resume?" 400 100]}))

    (it "displays all mode buttons"
      (utils/update-state {:current-screen :resume-selection :db :edn})
      (should= [["Yes" 400 250 600 60] ["No" 400 330 600 60]]
               (stub/invocations-of :text-button)))

    (it "updates to mode selection screen if no previous game - edn"
      (with-redefs [game-logs/get-last-in-progress-game (stub :last-game {:return nil})]
        (should= {:current-screen :mode-selection :db :edn} (utils/update-state {:current-screen :resume-selection :db :edn}))))

    (it "updates to mode selection screen if no previous game - sql"
      (with-redefs [game-logs/get-last-in-progress-game (stub :last-game {:return nil})]
        (should= {:current-screen :mode-selection :db :sql} (utils/update-state {:current-screen :resume-selection :db :sql}))))

    (it "gets last in-progress game"
      (with-redefs [game-logs/get-last-in-progress-game (stub :last-game)]
        (utils/update-state {:current-screen :resume-selection :db :edn})
        (should-have-invoked :last-game {:with [{:db :edn :dir-path edn/in-progress-dir-path :ds sql/ds}]})))

    (it "doesn't allow continuation of 3x3x3 games"
      (with-redefs [game-logs/get-last-in-progress-game (stub :last-game {:return {:games/board (str (range 1 28))}})]
        (should= {:current-screen :mode-selection :db :sql} (utils/update-state {:current-screen :resume-selection :db :sql}))))
    ))

