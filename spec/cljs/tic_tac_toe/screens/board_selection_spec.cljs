(ns tic-tac-toe.screens.board-selection-spec
  (:require-macros [c3kit.wire.spec-helperc :refer [should-not-select should-select]]
                   [speclj.core :refer [before describe it should=]])
  (:require
    [c3kit.wire.spec-helper :as wire]
    [speclj.core]
    [tic-tac-toe.print-utils :as print]
    [tic-tac-toe.render-screen :as sut]
    [tic-tac-toe.screens.board-selection]))

(describe "board selection screen"
  (wire/with-root-dom)
  (before
    (wire/render [sut/render-screen (atom {:current-screen :board-selection})]))

  (it "renders board selection screen"
    (should-select "#board-selection")
    (should= (first print/board-prompt) (wire/text "#board-selection h2"))
    (should= (nth print/board-prompt 1) (wire/text "#board-selection button:nth-of-type(1)"))
    (should= (nth print/board-prompt 2) (wire/text "#board-selection button:nth-of-type(2)"))))
