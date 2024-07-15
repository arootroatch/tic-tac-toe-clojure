(ns tic-tac-toe.gui.mode-selection-spec
  (:require [quil.core :as q]
            [speclj.core :refer :all]
            [speclj.stub :as stub]
            [tic-tac-toe.gui.mode-selection :refer :all]
            [tic-tac-toe.gui.utils :as utils]
            [tic-tac-toe.gui.components :as components]))

(describe "mode-selection"
  (with-stubs)


  (context "handle-click"
    (it "updates state with mode 1"
      (should= {:current-screen :board-selection, :mode 1 :human? true}
               (utils/handle-click {:current-screen :mode-selection :mode nil} {:x 400 :y 250})))

    (it "updates state with mode 2"
      (should= {:current-screen :board-selection, :mode 2 :human? true}
               (utils/handle-click {:current-screen :mode-selection :mode nil} {:x 400 :y 300})))

    (it "updates state with mode 3"
      (should= {:current-screen :board-selection, :mode 3 :human? false}
               (utils/handle-click {:current-screen :mode-selection :mode nil} {:x 400 :y 410})))

    (it "updates state with mode 4"
      (should= {:current-screen :board-selection, :mode 4 :human? false}
               (utils/handle-click {:current-screen :mode-selection :mode nil} {:x 400 :y 490})))

    (it "returns state if state is already set"
      (should= 1 (utils/handle-click {:current-screen :mode-selection :mode 1} {:x 400 :y 490})))

    (it "returns state if clicked outside of buttons"
      (should= {:current-screen :mode-selection :mode nil}
               (utils/handle-click {:current-screen :mode-selection :mode nil} {:x 0 :y 0})))
    )

  (context "mode-selection-screen"
    (redefs-around [q/background (stub :background)
                    q/text-size (stub :text-size)
                    q/text (stub :text)
                    components/text-button (stub :text-button)])
    (it "resets background"
      (utils/update-state {:current-screen :mode-selection}) (should-have-invoked :background {:with [0 0 0]}))

    (it "sets text size to 30"
      (utils/update-state {:current-screen :mode-selection}) (should-have-invoked :text-size {:with [30]}))

    (it "displays mode heading"
      (utils/update-state {:current-screen :mode-selection}) (should-have-invoked :text {:with ["Please select game mode (X always plays first):" 400 100]}))

    (it "displays all mode buttons"
      (utils/update-state {:current-screen :mode-selection})
      (should= [["Human vs Human" 400 250 600 60]
                ["Human vs Computer (Human plays first)" 400 330 600 60]
                ["Computer vs Human (Computer plays first)" 400 410 600 60]
                ["Computer vs Computer" 400 490 600 60]]
               (stub/invocations-of :text-button)))
    ))



