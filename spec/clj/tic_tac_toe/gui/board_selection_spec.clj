(ns tic-tac-toe.gui.board-selection-spec
  (:require [quil.core :as q]
            [speclj.core :refer :all]
            [speclj.stub :as stub]
            [tic-tac-toe.game-logs.sql :as sql]
            [tic-tac-toe.game_logs.edn-logs :as edn]
            [tic-tac-toe.gui.board-selection :refer :all]
            [tic-tac-toe.gui.utils :as utils]))

(describe "board selection screen"
  (with-stubs)
  (redefs-around [q/fill (stub :fill)
                  q/stroke (stub :stroke)
                  q/rect (stub :rect)
                  q/stroke-weight (stub :stroke-weight)
                  q/text-size (stub :text-size)
                  q/text-align (stub :text-align)
                  q/text (stub :text)
                  q/background (stub :background)])

  (context "three board preview"
    (it "set fill to white"
      (three-board-preview 460 230 50) (should-have-invoked :fill {:with [255 255 255]}))

    (it "sets stroke to black"
      (three-board-preview 460 230 50) (should-have-invoked :stroke {:with [0 0 0]}))

    (it "creates 3x3 grid"
      (three-board-preview 460 230 50)
      (should= [[460 230 50 50] [510 230 50 50] [560 230 50 50]
                [460 280 50 50] [510 280 50 50] [560 280 50 50]
                [460 330 50 50] [510 330 50 50] [560 330 50 50]]
               (stub/invocations-of :rect)))
    )

  (context "four board preview"
    (it "set fill to white"
      (four-board-preview 450 470 40) (should-have-invoked :fill {:with [255 255 255]}))

    (it "sets stroke to black"
      (four-board-preview 450 470 40) (should-have-invoked :stroke {:with [0 0 0]}))

    (it "creates 4x4 grid"
      (four-board-preview 450 470 40)
      (should= [[450 470 40 40] [490 470 40 40] [530 470 40 40] [570 470 40 40]
                [450 510 40 40] [490 510 40 40] [530 510 40 40] [570 510 40 40]
                [450 550 40 40] [490 550 40 40] [530 550 40 40] [570 550 40 40]
                [450 590 40 40] [490 590 40 40] [530 590 40 40] [570 590 40 40]]
               (stub/invocations-of :rect)))
    )

  (context "3x3 container"
    (redefs-around [three-board-preview (stub :three-board)
                    q/mouse-x (stub :mouse-x {:return 400})
                    q/mouse-y (stub :mouse-y {:return 280})])

    (it "is grey background with white text if the mouse is over it"
      (three-by-three-container 400 280)
      (should= [[100 100 100] [255 255 255]] (stub/invocations-of :fill)))

    (it "is black background with white text if the mouse is not over it"
      (with-redefs [q/mouse-x (stub :mouse-x {:return 0})
                    q/mouse-y (stub :mouse-y {:return 0})]
        (three-by-three-container 400 280)
        (should= [[0 0 0] [255 255 255]] (stub/invocations-of :fill))))

    (it "sets stroke to white"
      (three-by-three-container 400 280) (should-have-invoked :stroke {:with [255 255 255]}))

    (it "sets stroke weight to 5"
      (three-by-three-container 400 280) (should-have-invoked :stroke-weight {:with [5]}))

    (it "draw rectangle with rounded corners"
      (three-by-three-container 400 280)
      (should-have-invoked :rect {:with [400 280 600 200 10]}))

    (it "sets text size to 50"
      (three-by-three-container 400 280)
      (should-have-invoked :text-size {:with [50]}))

    (it "sets text align center"
      (three-by-three-container 400 280)
      (should-have-invoked :text-align {:with [:center]}))

    (it "labels button 3x3"
      (three-by-three-container 400 280)
      (should-have-invoked :text {:with ["3 x 3" 280 290]}))

    (it "show 3x3 preview"
      (three-by-three-container 400 280)
      (should-have-invoked :three-board {:with [460 230 50]}))

    )

  (context "4x4 container"
    (redefs-around [four-board-preview (stub :four-board)
                    q/mouse-x (stub :mouse-x {:return 400})
                    q/mouse-y (stub :mouse-y {:return 530})])

    (it "is grey background with white text if the mouse is over it"
      (four-by-four-container 400 530)
      (should= [[100 100 100] [255 255 255]] (stub/invocations-of :fill)))

    (it "is black background with white text if the mouse is not over it"
      (with-redefs [q/mouse-x (stub :mouse-x {:return 0})
                    q/mouse-y (stub :mouse-y {:return 0})]
        (four-by-four-container 400 530)
        (should= [[0 0 0] [255 255 255]] (stub/invocations-of :fill))))

    (it "sets stroke to white"
      (four-by-four-container 400 530) (should-have-invoked :stroke {:with [255 255 255]}))

    (it "sets stroke weight to 5"
      (four-by-four-container 400 530) (should-have-invoked :stroke-weight {:with [5]}))

    (it "draw rectangle with rounded corners"
      (four-by-four-container 400 530)
      (should-have-invoked :rect {:with [400 530 600 200 10]}))

    (it "sets text size to 50"
      (four-by-four-container 400 530)
      (should-have-invoked :text-size {:with [50]}))

    (it "sets text align center"
      (four-by-four-container 400 530)
      (should-have-invoked :text-align {:with [:center]}))

    (it "labels button 3x3"
      (four-by-four-container 400 530)
      (should-have-invoked :text {:with ["4 x 4" 280 540]}))

    (it "show 3x3 preview"
      (four-by-four-container 400 530)
      (should-have-invoked :four-board {:with [450 470 40]}))
    )

  (context "board-selection-screen"
    (redefs-around [four-by-four-container (stub :four-container)
                    three-by-three-container (stub :three-container)
                    q/mouse-x (stub :mouse-x {:return 400})
                    q/mouse-y (stub :mouse-y {:return 530})])
    (it "resets background"
      (utils/update-state {:current-screen :board-selection}) (should-have-invoked :background {:with [0 0 0]}))

    (it "sets text-size to 30"
      (utils/update-state {:current-screen :board-selection}) (should-have-invoked :text-size {:with [30]}))

    (it "prompts user to select board"
      (utils/update-state {:current-screen :board-selection})
      (should-have-invoked :text {:with ["Please select board:" 400 100]}))

    (it "displays 3x3 container"
      (utils/update-state {:current-screen :board-selection})
      (should-have-invoked :three-container {:with [400 280]}))

    (it "displays 4x4 container"
      (utils/update-state {:current-screen :board-selection})
      (should-have-invoked :four-container {:with [400 530]}))
    )

  (context "handle-click edn"
    (redefs-around [edn/create-in-progress-game-file (stub :game-file)
                    edn/log-game-id (stub :log-id)])

    (it "updates state with 3x3 board"
      (should= {:current-screen :play, :mode 1 :human? true :board [1 2 3 4 5 6 7 8 9] :db :edn}
               (utils/handle-click {:current-screen :board-selection :mode 1 :human? true :board nil :db :edn}
                                   {:x 400 :y 280})))

    (it "creates new game log file if screen is set to :play"
      (utils/handle-click {:current-screen :board-selection :mode 1 :human? true :board nil :filepath "test.path" :db :edn}
                          {:x 400 :y 280})
      (should-have-invoked :game-file {:with ["test.path" {:current-screen :play,
                                                           :mode           1,
                                                           :human?         true,
                                                           :board          [1 2 3 4 5 6 7 8 9],
                                                           :filepath       "test.path"
                                                           :db             :edn}]}))

    (it "logs game id if screen is set to :play"
      (utils/handle-click {:current-screen :board-selection :mode 1 :human? true :board nil :game-id 5 :db :edn}
                          {:x 400 :y 280})
      (should-have-invoked :log-id {:with [edn/game-id-path 5]}))

    (it "updates state with 4x4 board"
      (should= {:current-screen :first-level-selection, :mode 2 :human? true :board (vec (range 1 17)) :db :edn}
               (utils/handle-click {:current-screen :board-selection :mode 2 :human? true :db :edn} {:x 400 :y 530})))

    (it "returns state if state is already set"
      (should= (vec (range 1 10))
               (utils/handle-click {:current-screen :board-selection :board (vec (range 1 10)) :db :edn} {:x 400 :y 530})))

    (it "returns state if clicked outside of buttons"
      (should= {:current-screen :board-selection :board nil :db :edn}
               (utils/handle-click {:current-screen :board-selection :board nil :db :edn} {:x 0 :y 0})))

    )

  (context "handle-click sql"
    (redefs-around [sql/log-game-state (stub :game-state)])

    (it "updates state with 3x3 board"
      (should= {:current-screen :play, :mode 1 :human? true :board [1 2 3 4 5 6 7 8 9] :db :sql}
               (utils/handle-click {:current-screen :board-selection :mode 1 :human? true :board nil :db :sql}
                                   {:x 400 :y 280})))

    (it "creates new game log if screen is set to :play"
      (utils/handle-click {:current-screen :board-selection :mode 1 :human? true :board nil :db :sql}
                          {:x 400 :y 280})
      (should-have-invoked :game-state {:with [sql/ds {:current-screen :play,
                                                       :mode           1,
                                                       :human?         true,
                                                       :board          [1 2 3 4 5 6 7 8 9],
                                                       :db             :sql}]}))


    (it "updates state with 4x4 board"
      (should= {:current-screen :first-level-selection, :mode 2 :human? true :board (vec (range 1 17)) :db :sql}
               (utils/handle-click {:current-screen :board-selection :mode 2 :human? true :db :sql} {:x 400 :y 530})))

    (it "returns state if state is already set"
      (should= (vec (range 1 10))
               (utils/handle-click {:current-screen :board-selection :board (vec (range 1 10)) :db :sql} {:x 400 :y 530})))

    (it "returns state if clicked outside of buttons"
      (should= {:current-screen :board-selection :board nil :db :sql}
               (utils/handle-click {:current-screen :board-selection :board nil :db :sql} {:x 0 :y 0})))

    ))