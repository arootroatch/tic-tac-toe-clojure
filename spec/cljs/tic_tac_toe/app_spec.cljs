(ns tic-tac-toe.app-spec
  (:require-macros [speclj.core :refer [should= it describe before]]
                   [c3kit.wire.spec-helperc :refer [should-not-select should-select]])
  (:require
    [speclj.core]
    [c3kit.wire.spec-helper :as wire]
    [tic-tac-toe.app :as sut]))

(describe "app"
  (wire/with-root-dom)
  (before
    (wire/render [sut/app]))

  (it "renders parent div"
    (should-select "#app-wrapper"))

  (it "renders mode-selection screen to start"
    (should-select "#mode-selection"))

  (it "renders ttt heading"
    (should= "Tic-Tac-Toe" (wire/text "#app-wrapper h1"))))