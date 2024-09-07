(ns tic-tac-toe.screens.mode-selection-spec
  (:require-macros [speclj.core :refer [should= it describe before]]
                   [c3kit.wire.spec-helperc :refer [should-not-select should-select]])
  (:require
    [speclj.core]
    [c3kit.wire.spec-helper :as wire]
    [tic-tac-toe.print-utils :as print]
    [tic-tac-toe.render-screen :as sut]))

(describe "mode selection screen"
  (wire/with-root-dom)
  (before
    (wire/render [sut/render-screen (atom {:current-screen :mode-selection})]))

  (it "renders mode selection screen"
    (should-select "#mode-selection")
    (should= (first print/mode-prompt) (wire/text "#mode-selection h2"))
    (should= (nth print/mode-prompt 1) (wire/text "#mode-selection button:nth-of-type(1)"))
    (should= (nth print/mode-prompt 2) (wire/text "#mode-selection button:nth-of-type(2)"))
    (should= (nth print/mode-prompt 3) (wire/text "#mode-selection button:nth-of-type(3)"))
    (should= (nth print/mode-prompt 4) (wire/text "#mode-selection button:nth-of-type(4)"))
    ))
