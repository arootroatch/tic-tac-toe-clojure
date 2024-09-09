(ns tic-tac-toe.screens.first-level-selection-spec
  (:require-macros [speclj.core :refer [should= it describe before]]
                   [c3kit.wire.spec-helperc :refer [should-not-select should-select]])
  (:require
    [speclj.core]
    [c3kit.wire.spec-helper :as wire]
    [tic-tac-toe.print-utils :as print]
    [tic-tac-toe.render-screen :as sut]
    [tic-tac-toe.screens.first-level-selection]))

(describe "first level selection screen"
  (wire/with-root-dom)

  (it "renders first level selection screen"
    (wire/render [sut/render-screen (atom {:current-screen :first-level-selection})])
    (should-select "#first-level-selection")
    (should= (nth print/level-prompt 2) (wire/text "#first-level-selection h2"))
    (should= (nth print/level-prompt 3) (wire/text "#first-level-selection button:nth-of-type(1)"))
    (should= (nth print/level-prompt 4) (wire/text "#first-level-selection button:nth-of-type(2)"))
    (should= (nth print/level-prompt 6) (wire/text "#first-level-selection button:nth-of-type(3)")))

  (it "specifies player X if mode is 4"
    (wire/render [sut/render-screen (atom {:current-screen :first-level-selection :mode 4})])
    (should= (first print/level-prompt) (wire/text "#first-level-selection h2"))))
