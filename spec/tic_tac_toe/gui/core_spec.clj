(ns tic-tac-toe.gui.core-spec
  (:require [speclj.core :refer :all]
            [tic-tac-toe.gui.gui-main :refer :all]
            [tic-tac-toe.gui.play]
            [tic-tac-toe.gui.utils :as utils]
            [tic-tac-toe.player :as player]))

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

  (context "draw-state"
    (it "draws current screen"
      (should= :play (draw-state in-progress-state)))))

