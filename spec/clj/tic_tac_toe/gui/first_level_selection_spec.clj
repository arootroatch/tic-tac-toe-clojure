(ns tic-tac-toe.gui.first-level-selection-spec
  (:require [quil.core :as q]
            [speclj.core :refer :all]
            [speclj.stub :as stub]
            [tic-tac-toe.game-logs.sql :as sql]
            [tic-tac-toe.game_logs.edn-logs :as edn]
            [tic-tac-toe.gui.components :as components]
            [tic-tac-toe.gui.first-level-selection :refer :all]
            [tic-tac-toe.gui.utils :as utils]))

(def state {:current-screen :first-level-selection
            :mode           2
            :db             :edn})

(def state-4 {:current-screen :first-level-selection
              :mode           4
              :db             :edn})

(describe "first level selection"
  (with-stubs)
  (redefs-around [components/text-button (stub :text-button)
                  q/text-size (stub :text-size)
                  q/text (stub :text)
                  q/background (stub :background)])

  (context "first level selection"
    (it "resets background"
      (utils/update-state state)
      (should-have-invoked :background {:with [0 0 0]}))

    (it "sets text size to 30"
      (utils/update-state state)
      (should-have-invoked :text-size {:with [30]}))

    (it "prompts user to select difficulty"
      (utils/update-state state)
      (should-have-invoked :text {:with ["Please select level of difficulty:" 400 100]}))

    (it "specifies player X if mode 4"
      (utils/update-state state-4)
      (should-have-invoked :text {:with ["Please select level for player X:" 400 100]}))

    (it "displays all level selection buttons"
      (utils/update-state state)
      (should= [["Easy" 400 300 400 60] ["Medium" 400 380 400 60] ["Unbeatable" 400 460 400 60]]
               (stub/invocations-of :text-button)))
    )

  (context "handle-click edn"
    (redefs-around [edn/create-in-progress-game-file (stub :game-file)
                    edn/log-game-id (stub :log-id)])

    (it "sets state to level 1"
      (should= {:current-screen :play :mode 2 :first-ai-level 1 :db :edn}
               (utils/handle-click state {:x 400 :y 300})))

    (it "sets state to level 2"
      (should= {:current-screen :play :mode 2 :first-ai-level 2 :db :edn}
               (utils/handle-click state {:x 400 :y 380})))

    (it "sets state to level 3"
      (should= {:current-screen :second-level-selection :mode 4 :first-ai-level 3 :db :edn}
               (utils/handle-click state-4 {:x 400 :y 460})))

    (it "creates new game log file if screen is set to :play"
      (utils/handle-click (assoc state :filepath "test.path") {:x 400 :y 280})
      (should-have-invoked :game-file {:with ["test.path" {:current-screen :play,
                                                           :mode           2,
                                                           :filepath       "test.path",
                                                           :first-ai-level 1
                                                           :db             :edn}]}))

    (it "logs game id if screen is set to :play"
      (utils/handle-click (assoc state :game-id 5) {:x 400 :y 280})
      (should-have-invoked :log-id {:with [edn/game-id-path 5]}))

    (it "returns state if state is already set"
      (should= 2 (utils/handle-click {:current-screen :first-level-selection :first-ai-level 2} {:x 400 :y 300})))

    (it "returns state if clicked outside of buttons"
      (should= state (utils/handle-click state {:x 0 :y 0})))
    )

  (context "handle-click sql"
    (redefs-around [sql/log-game-state (stub :game-state)])

    (it "sets state to level 1"
      (should= {:current-screen :play :mode 2 :first-ai-level 1 :db :sql}
               (utils/handle-click (assoc state :db :sql) {:x 400 :y 300})))

    (it "sets state to level 2"
      (should= {:current-screen :play :mode 2 :first-ai-level 2 :db :sql}
               (utils/handle-click (assoc state :db :sql) {:x 400 :y 380})))

    (it "sets state to level 3"
      (should= {:current-screen :second-level-selection :mode 4 :first-ai-level 3 :db :sql}
               (utils/handle-click (assoc state-4 :db :sql) {:x 400 :y 460})))

    (it "creates new game log file if screen is set to :play"
      (utils/handle-click (assoc state :db :sql) {:x 400 :y 280})
      (should-have-invoked :game-state {:with [sql/ds {:current-screen :play,
                                                       :mode           2,
                                                       :first-ai-level 1
                                                       :db             :sql}]}))

    (it "returns state if state is already set"
      (should= 2 (utils/handle-click {:current-screen :first-level-selection :first-ai-level 2 :db :sql} {:x 400 :y 300})))

    (it "returns state if clicked outside of buttons"
      (should= (assoc state :db :sql) (utils/handle-click (assoc state :db :sql) {:x 0 :y 0})))
    ))

