(ns tic-tac-toe.gui.mode-selection-spec
  (:require [speclj.core :refer :all]
            [tic-tac-toe.gui.mode-selection :refer :all]
            [tic-tac-toe.gui.utils :as utils]))

(describe "mode-selection"
  (with-stubs)

  (context "handle-click"
    (it "updates state with mode 1"
      (should= {:current-screen :mode-selection, :mode 1 :human? true}
               (utils/handle-click {:current-screen :mode-selection :mode nil} {:x 400 :y 250})))

    (it "updates state with mode 2"
      (should= {:current-screen :mode-selection, :mode 2 :human? true}
               (utils/handle-click {:current-screen :mode-selection :mode nil} {:x 400 :y 300})))

    (it "updates state with mode 3"
      (should= {:current-screen :mode-selection, :mode 3 :human? false}
               (utils/handle-click {:current-screen :mode-selection :mode nil} {:x 400 :y 410})))

    (it "updates state with mode 4"
      (should= {:current-screen :mode-selection, :mode 4 :human? false}
               (utils/handle-click {:current-screen :mode-selection :mode nil} {:x 400 :y 490})))
    ))



