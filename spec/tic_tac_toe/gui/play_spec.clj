(ns tic-tac-toe.gui.play-spec
  (:require [quil.core :as q]
            [speclj.core :refer :all]
            [speclj.stub :as stub]
            [tic-tac-toe.game_logs.game-log :as game-log]
            [tic-tac-toe.gui.components :as components]
            [tic-tac-toe.gui.play :refer :all]
            [tic-tac-toe.gui.utils :as utils]
            [tic-tac-toe.player :as player]))

(def in-progress-state {:current-screen :play
                        :board          [1 2 3 4 5 6 7 8 9]
                        :game-state     :in-progress
                        :player         :x
                        :human?         true})

(def end-state {:current-screen :play
                :board          [:x :x :x :o :o 6 7 8 9]
                :game-state     "X wins!"
                :player         :x
                :human?         true})

(def initial-state {:current-screen  :mode-selection
                    :mode            nil
                    :board           nil
                    :first-ai-level  nil
                    :second-ai-level nil
                    :player          :x
                    :human?          nil
                    :game-state      :in-progress
                    :gui             true})

(def replay-state {:replay? true :game-id 5, :filepath "src/tic_tac_toe/game_logs/in_progress/gui/game-5.edn", :current-screen :replay, :moves '([1 2 3 4 :x 6 7 8 9] [:o 2 3 4 :x 6 7 8 9] [:o 2 3 4 :x :x 7 8 9] [:o 2 3 :o :x :x 7 8 9] [:o 2 :x :o :x :x 7 8 9] [:o 2 :x :o :x :x :o 8 9]), :second-ai-level nil, :mode 2, :first-ai-level 3, :game-state :in-progress, :human? true, :ui :gui, :player :x, :board [1 2 3 4 5 6 7 8 9]})

(describe "play screen"
  (with-stubs)
  (redefs-around [q/rect (stub :rect)
                  q/fill (stub :fill)
                  q/text (stub :text)
                  q/text-size (stub :text-size)
                  q/text-align (stub :text-align)])

  (context "ai turn"
    (redefs-around [game-log/log-move (stub :log-move)])
    (it "plays AI move to board"
      (with-redefs [player/take-turn (stub :take-turn {:return [1 2 3 4 :o 6 7 8 9]})]
        (should= {:current-screen :play :board [1 2 3 4 :o 6 7 8 9] :human? true :player :x :game-state :in-progress}
                 (ai-turn {:current-screen :play :board [1 2 3 4 5 6 7 8 9] :human? false :player :o :game-state :in-progress}))))

    (it "logs move to temp file"
      (with-redefs [player/take-turn (stub :take-turn {:return [1 2 3 4 :o 6 7 8 9]})]
        (ai-turn {:current-screen :play :board [1 2 3 4 5 6 7 8 9] :human? false :player :o :game-state :in-progress})
        (should-have-invoked :log-move {:with [nil [1 2 3 4 :o 6 7 8 9]]})))

    (it "updates game state if terminal"
      (with-redefs [player/take-turn (stub :take-turn {:return [:o :o :o :x 5 6 :x 8 9]})]
        (should= {:current-screen :play :board [:o :o :o :x 5 6 :x 8 9] :human? true :player :x :game-state "O wins!"}
                 (ai-turn {:current-screen :play :board [1 :o :o :x :x 6 7 8 9] :human? false :player :o :game-state :in-progress}))))
    )

  (context "create-square"
    (redefs-around [q/mouse-x (stub :mouse-x {:return 400})
                    q/mouse-y (stub :mouse-y {:return 400})])
    (it "displays one square of the board"
      (create-square 400 400 150 :o :in-progress)
      (should-have-invoked :rect {:with [400 400 150 150]}))

    (it "displays token O square"
      (create-square 400 400 150 :o :in-progress)
      (should-have-invoked :text {:with ["O" 400 400]})
      (should-have-invoked :text-align {:with [:center :center]})
      (should-have-invoked :text-size {:with [150]})
      (should-have-invoked :fill {:with [0 0 0]}))

    (it "displays token X in square"
      (create-square 400 400 150 :x :in-progress)
      (should-have-invoked :text {:with ["X" 400 400]})
      (should-have-invoked :text-align {:with [:center :center]})
      (should-have-invoked :text-size {:with [150]})
      (should-have-invoked :fill {:with [0 0 0]}))

    (it "doesn't display number in square"
      (create-square 400 400 150 1 :in-progress)
      (should-not-have-invoked :text)
      (should-not-have-invoked :text-size)
      (should-not-have-invoked :text-align)
      (should-not-have-invoked :fill {:with [0 0 0]}))

    (it "highlights square white on hover"
      (create-square 400 400 150 :o :in-progress)
      (should-have-invoked :fill {:with [255 255 255]}))

    (it "colors square dim white when not hovering"
      (create-square 250 250 150 1 :in-progress)
      (should-have-invoked :fill {:with [200 200 200]}))
    )

  (context "three-board"
    (it "displays 3x3 board"
      (with-redefs [create-square (stub :create-square)]
        (three-board x-3 y-3 size-3 [1 2 3 4 5 6 7 8 9] :in-progress)
        (should-have-invoked :create-square {:times 9})
        (should= [[250 250 150 1 :in-progress] [400 250 150 2 :in-progress] [550 250 150 3 :in-progress] [250 400 150 4 :in-progress] [400 400 150 5 :in-progress] [550 400 150 6 :in-progress] [250 550 150 7 :in-progress] [400 550 150 8 :in-progress] [550 550 150 9 :in-progress]]
                 (stub/invocations-of :create-square))))
    )

  (context "four-board"
    (it "displays 4x4 board"
      (with-redefs [create-square (stub :create-square)]
        (four-board x-4 y-4 size-4 [1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16] :in-progress)
        (should-have-invoked :create-square {:times 16})
        (should= [[220 220 120 1 :in-progress] [340 220 120 2 :in-progress] [460 220 120 3 :in-progress] [580 220 120 4 :in-progress] [220 340 120 5 :in-progress] [340 340 120 6 :in-progress] [460 340 120 7 :in-progress] [580 340 120 8 :in-progress] [220 460 120 9 :in-progress] [340 460 120 10 :in-progress] [460 460 120 11 :in-progress] [580 460 120 12 :in-progress] [220 580 120 13 :in-progress] [340 580 120 14 :in-progress] [460 580 120 15 :in-progress] [580 580 120 16 :in-progress]]
                 (stub/invocations-of :create-square))))
    )

  (context "play"
    (redefs-around [q/background (stub :background)
                    three-board (stub :three-board)
                    four-board (stub :four-board)
                    components/text-button (stub :text-button)
                    game-log/log-completed-game (stub :log-completed)
                    ai-turn (stub :ai-turn)])

    (it "resets background"
      (utils/update-state in-progress-state) (should-have-invoked :background {:with [0 0 0]}))

    (it "sets text size to 30"
      (utils/update-state in-progress-state) (should-have-invoked :text-size {:with [30]}))

    (it "sets text color fill to white"
      (utils/update-state in-progress-state) (should-have-invoked :fill {:with [255 255 255]}))

    (it "signals when the computer is taking it's turn"
      (utils/update-state (assoc in-progress-state :human? false :mode 4 :first-ai-level 3))
      (should-have-invoked :text {:with ["Your opponent is thinking..." 400 100]}))

    (it "signals when Xs turn"
      (utils/update-state in-progress-state)
      (should-have-invoked :text {:with ["X's turn!" 400 100]}))

    (it "signals when Os turn"
      (utils/update-state (assoc in-progress-state :player :o))
      (should-have-invoked :text {:with ["O's turn!" 400 100]}))

    (it "logs completed game"
      (utils/update-state end-state)
      (should-have-invoked :log-completed {:with [nil "src/tic_tac_toe/game_logs/game-logs.edn"]}))

    (it "displays X wins"
      (utils/update-state end-state)
      (should-have-invoked :text {:with ["X wins!" 400 100]}))

    (it "displays O wins"
      (utils/update-state {:game-state "O wins!" :current-screen :play})
      (should-have-invoked :text {:with ["O wins!" 400 100]}))

    (it "displays 3x3 board"
      (utils/update-state in-progress-state)
      (should-have-invoked :three-board {:with [x-3 y-3 size-3 [1 2 3 4 5 6 7 8 9] :in-progress]}))

    (it "displays 4x4 board"
      (utils/update-state (assoc in-progress-state :board (vec (range 1 17))))
      (should-have-invoked :four-board {:with [x-4 y-4 size-4 (vec (range 1 17)) :in-progress]}))

    (it "displays play again button at end of game"
      (utils/update-state end-state)
      (should-have-invoked :text-button {:with ["Play again?" 400 700 600 60]}))

    (it "does not display play again button during game"
      (utils/update-state in-progress-state)
      (should-not-have-invoked :text-button))

    (it "displays play screen if in progress, all selections have been made, is humans turn"
      (should= in-progress-state (utils/update-state (assoc in-progress-state :current-screen :play))))

    (it "plays ai if not human turn"
      (with-redefs [ai-turn (stub :ai)]
        (utils/update-state (assoc in-progress-state :human? false))
        (should-have-invoked :ai {:with [(assoc in-progress-state :human? false)]})))

    (it "displays play screen in terminal state"
      (should= (assoc in-progress-state :game-state "X wins!")
               (utils/update-state (assoc in-progress-state :game-state "X wins!"))))
    )

  (context "replay"
    (redefs-around [q/background (stub :background)
                    three-board (stub :three-board)
                    four-board (stub :four-board)
                    components/text-button (stub :text-button)])
    (it "displays start new game button if replaying logged game"
      (utils/update-state (assoc replay-state :game-state "X wins!"))
      (should-have-invoked :text-button {:with ["Start new game?" 400 700 600 60]}))

    (it "plays moves to board"
      (let [result (utils/update-state replay-state)]
        (should= [1 2 3 4 :x 6 7 8 9] (:board result))
        (should= [[:o 2 3 4 :x 6 7 8 9] [:o 2 3 4 :x :x 7 8 9] [:o 2 3 :o :x :x 7 8 9]
                  [:o 2 :x :o :x :x 7 8 9] [:o 2 :x :o :x :x :o 8 9]]
                 (:moves result))
        (should= :in-progress (:game-state result))
        (should= :o (:player result))))

    (it "updates game state when game ends"
      (let [result (utils/update-state (assoc replay-state :moves [[:o 2 :x :o :x :x :o 8 9]]))]
        (should= [:o 2 :x :o :x :x :o 8 9] (:board result))
        (should= [] (:moves result))
        (should= "O wins!" (:game-state result))))
    )


  (context "clicked 3x3"
    (it "returns number of square clicked 0"
      (should= 0 (clicked {:board [1 2 3 4 5 6 7 8 9]} {:x 250 :y 250})))

    (it "returns number of square clicked 1"
      (should= 1 (clicked {:board [1 2 3 4 5 6 7 8 9]} {:x 400 :y 250})))

    (it "returns number of square clicked 2"
      (should= 2 (clicked {:board [1 2 3 4 5 6 7 8 9]} {:x 550 :y 250})))

    (it "returns number of square clicked 3"
      (should= 3 (clicked {:board [1 2 3 4 5 6 7 8 9]} {:x 250 :y 400})))

    (it "returns number of square clicked 4"
      (should= 4 (clicked {:board [1 2 3 4 5 6 7 8 9]} {:x 400 :y 400})))

    (it "returns number of square clicked 5"
      (should= 5 (clicked {:board [1 2 3 4 5 6 7 8 9]} {:x 550 :y 400})))

    (it "returns number of square clicked 6"
      (should= 6 (clicked {:board [1 2 3 4 5 6 7 8 9]} {:x 250 :y 550})))

    (it "returns number of square clicked 7"
      (should= 7 (clicked {:board [1 2 3 4 5 6 7 8 9]} {:x 400 :y 550})))

    (it "returns number of square clicked 8"
      (should= 8 (clicked {:board [1 2 3 4 5 6 7 8 9]} {:x 550 :y 550})))
    )

  (context "clicked 4x4"
    (it "returns number of square clicked 0"
      (should= 0 (clicked {:board (vec (range 1 17))} {:x 220 :y 220})))

    (it "returns number of square clicked 1"
      (should= 1 (clicked {:board (vec (range 1 17))} {:x 340 :y 220})))

    (it "returns number of square clicked 2"
      (should= 2 (clicked {:board (vec (range 1 17))} {:x 460 :y 220})))

    (it "returns number of square clicked 3"
      (should= 3 (clicked {:board (vec (range 1 17))} {:x 580 :y 220})))

    (it "returns number of square clicked 4"
      (should= 4 (clicked {:board (vec (range 1 17))} {:x 220 :y 340})))

    (it "returns number of square clicked 5"
      (should= 5 (clicked {:board (vec (range 1 17))} {:x 340 :y 340})))

    (it "returns number of square clicked 6"
      (should= 6 (clicked {:board (vec (range 1 17))} {:x 460 :y 340})))

    (it "returns number of square clicked 7"
      (should= 7 (clicked {:board (vec (range 1 17))} {:x 580 :y 340})))

    (it "returns number of square clicked 8"
      (should= 8 (clicked {:board (vec (range 1 17))} {:x 220 :y 460})))

    (it "returns number of square clicked 9"
      (should= 9 (clicked {:board (vec (range 1 17))} {:x 340 :y 460})))

    (it "returns number of square clicked 10"
      (should= 10 (clicked {:board (vec (range 1 17))} {:x 460 :y 460})))

    (it "returns number of square clicked 11"
      (should= 11 (clicked {:board (vec (range 1 17))} {:x 580 :y 460})))

    (it "returns number of square clicked 12"
      (should= 12 (clicked {:board (vec (range 1 17))} {:x 220 :y 580})))

    (it "returns number of square clicked 13"
      (should= 13 (clicked {:board (vec (range 1 17))} {:x 340 :y 580})))

    (it "returns number of square clicked 14"
      (should= 14 (clicked {:board (vec (range 1 17))} {:x 460 :y 580})))

    (it "returns number of square clicked 15"
      (should= 15 (clicked {:board (vec (range 1 17))} {:x 580 :y 580})))
    )

  (context "handle click"
    (redefs-around [utils/update-state (stub :play {:return :play})
                    game-log/log-move (stub :log-move)])

    (it "updates board with user move"
      (should= (assoc in-progress-state :board [:x 2 3 4 5 6 7 8 9] :player :o :human? false)
               (utils/handle-click in-progress-state {:x 250 :y 250})))

    (it "logs move to temp file"
      (utils/handle-click in-progress-state {:x 250 :y 250})
      (should-have-invoked :log-move {:with [nil [:x 2 3 4 5 6 7 8 9]]}))

    (it "updates game-state"
      (should= (assoc in-progress-state :board [:x :x :x 4 5 6 7 8 9] :game-state "X wins!" :player :o :human? false)
               (utils/handle-click (assoc in-progress-state :board [1 :x :x 4 5 6 7 8 9]) {:x 250 :y 250})))

    (it "returns state if square clicked was unavailable"
      (should= (assoc in-progress-state :board [:x 2 3 4 5 6 7 8 9])
               (utils/handle-click (assoc in-progress-state :board [:x 2 3 4 5 6 7 8 9]) {:x 250 :y 250})))

    (it "resets state if user chooses to play again"
      (should= initial-state (utils/handle-click end-state {:x 400 :y 700})))

    (it "returns state if click is outside of buttons"
      (should= in-progress-state (utils/handle-click in-progress-state {:x 0 :y 0})))))


