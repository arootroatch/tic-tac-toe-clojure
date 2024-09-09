(ns tic-tac-toe.screens.second-level-selection-spec
  (:require-macros [speclj.core :refer [should= it describe before]]
                   [c3kit.wire.spec-helperc :refer [should-not-select should-select]])
  (:require
    [speclj.core]
    [c3kit.wire.spec-helper :as wire]
    [tic-tac-toe.print-utils :as print]
    [tic-tac-toe.render-screen :as sut]
    [tic-tac-toe.screens.second-level-selection]))

(defonce state (atom {:current-screen :second-level-selection}))

(describe "second level selection screen"
  (wire/with-root-dom)
  (before
    (reset! state {:current-screen :second-level-selection})
    (wire/render [sut/render-screen state]))

  (it "renders second level selection screen"
    (should-select "#second-level-selection")
    (should= (nth print/level-prompt 1) (wire/text "#second-level-selection h2"))
    (should= (nth print/level-prompt 3) (wire/text "#second-level-selection button:nth-of-type(1)"))
    (should= (nth print/level-prompt 4) (wire/text "#second-level-selection button:nth-of-type(2)"))
    (should= (nth print/level-prompt 6) (wire/text "#second-level-selection button:nth-of-type(3)")))

  (it "sets :first-ai-level to 1 when Easy is clicked"
    (wire/click! "#second-level-selection button:nth-of-type(1)")
    (should= 1 (:second-ai-level @state)))

  (it "sets :first-ai-level to 2 when Medium is clicked"
    (wire/click! "#second-level-selection button:nth-of-type(2)")
    (should= 2 (:second-ai-level @state)))

  (it "sets :first-ai-level to 3 when Unbeatable is clicked"
    (wire/click! "#second-level-selection button:nth-of-type(3)")
    (should= 3 (:second-ai-level @state)))

  (it "sets screen to play upon user selection"
    (doseq [item ["#second-level-selection button:nth-of-type(1)"
                  "#second-level-selection button:nth-of-type(2)"
                  "#second-level-selection button:nth-of-type(3)"]]
      (wire/click! item)
      (should= :play (:current-screen @state)))))
