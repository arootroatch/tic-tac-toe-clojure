(ns tic-tac-toe.gui.core-spec
  (:require [speclj.core :refer :all]
            [tic-tac-toe.gui.gui-main :refer :all]
            [tic-tac-toe.gui.play :refer [play]]
            [tic-tac-toe.player :as player]
            [tic-tac-toe.gui.mode-selection :refer [mode-selection-screen]]
            [tic-tac-toe.gui.board-selection :refer [board-selection-screen]]
            [tic-tac-toe.gui.first-level-selection :refer [first-level-selection-screen]]
            [tic-tac-toe.gui.second-level-selection :refer [second-level-selection-screen]]))

(def initial-state {:current-screen  :mode-selection
                    :mode            nil
                    :board           nil
                    :first-ai-level  nil
                    :second-ai-level nil
                    :player          :x
                    :human?          nil
                    :game-state      :in-progress
                    :gui             true})

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
  (redefs-around [play (stub :play {:return :play})
                  mode-selection-screen (stub :mode-selection-screen {:return :mode-selection})
                  board-selection-screen (stub :board-selection-screen {:return :board-selection})
                  first-level-selection-screen (stub :first-level {:return :first-level-selection})
                  second-level-selection-screen (stub :second-level {:return :second-level-selection})])

  (context "ai turn"
    (it "plays AI move to board"
      (with-redefs [player/take-turn (stub :take-turn {:return [1 2 3 4 :o 6 7 8 9]})]
        (should= {:current-screen :play :board [1 2 3 4 :o 6 7 8 9] :human? true :player :x :game-state :in-progress}
                 (ai-turn {:current-screen :play :board board :human? false :player :o :game-state :in-progress}))))

    (it "updates game state if terminal"
      (with-redefs [player/take-turn (stub :take-turn {:return [:o :o :o :x 5 6 :x 8 9]})]
        (should= {:current-screen :play :board [:o :o :o :x 5 6 :x 8 9] :human? true :player :x :game-state "O wins!"}
                 (ai-turn {:current-screen :play :board [1 :o :o :x :x 6 7 8 9] :human? false :player :o :game-state :in-progress}))))
    )

  (context "update-state"
    (it "displays mode selection if no mode"
      (should= initial-state (update-state initial-state)))

    (it "displays board selection if mode but no board"
      (should= (assoc initial-state :mode 4 :current-screen :board-selection)
               (update-state (assoc initial-state :mode 4))))

    (it "displays first ai level selection if not HvH and mode and board has been selected"
      (should= (assoc initial-state :mode 4 :board board :current-screen :first-level-selection)
               (update-state (assoc initial-state :mode 4 :board board :current-screen :board-selection))))

    (it "displays second ai level selection if mode 4 and board and first ai are chosen"
      (should= (assoc initial-state :mode 4 :board board :current-screen :second-level-selection :first-ai-level 3)
               (update-state (assoc initial-state :mode 4 :board board :current-screen :first-level-selection :first-ai-level 3))))

    (it "displays play screen if in progress, all selections have been made, is humans turn"
      (should= in-progress-state (update-state (assoc in-progress-state :current-screen :first-level-selection))))

    (it "plays ai if not human turn"
      (with-redefs [ai-turn (stub :ai)]
        (update-state (assoc in-progress-state :human? false))
        (should-have-invoked :ai {:with [(assoc in-progress-state :human? false)]})))

    (it "displays play screen in terminal state"
      (should= (assoc in-progress-state :game-state "X wins!")
               (update-state (assoc in-progress-state :game-state "X wins!"))))
    )

  (context "draw-state"
    (it "draws current screen"
      (should= :play (draw-state in-progress-state)))))

