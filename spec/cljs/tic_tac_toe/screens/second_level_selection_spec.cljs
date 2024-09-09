(ns tic-tac-toe.screens.second-level-selection-spec
  (:require-macros [speclj.core :refer [should= it describe before]]
                   [c3kit.wire.spec-helperc :refer [should-not-select should-select]])
  (:require
    [speclj.core]
    [c3kit.wire.spec-helper :as wire]
    [tic-tac-toe.print-utils :as print]
    [tic-tac-toe.render-screen :as sut]
    [tic-tac-toe.screens.second-level-selection]))

(describe "second level selection screen"
  (wire/with-root-dom)
  (before
    (wire/render [sut/render-screen (atom {:current-screen :second-level-selection})]))

  (it "renders second level selection screen"
    (should-select "#second-level-selection")
    (should= (nth print/level-prompt 1) (wire/text "#second-level-selection h2"))
    (should= (nth print/level-prompt 3) (wire/text "#second-level-selection button:nth-of-type(1)"))
    (should= (nth print/level-prompt 4) (wire/text "#second-level-selection button:nth-of-type(2)"))
    (should= (nth print/level-prompt 6) (wire/text "#second-level-selection button:nth-of-type(3)"))
    ))
