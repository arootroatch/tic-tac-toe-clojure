(ns tic-tac-toe.screens.first-level-selection-spec
  (:require-macros [c3kit.wire.spec-helperc :refer [should-not-select should-select]]
                   [speclj.core :refer [before describe focus-it xit it should=]])
  (:require
    [c3kit.wire.spec-helper :as wire]
    [speclj.core]
    [tic-tac-toe.prompts :as prompts]
    [tic-tac-toe.render-screen :as sut]
    [tic-tac-toe.screens.first-level-selection]))

(defonce state (atom {:current-screen :first-level-selection}))

(describe "first level selection screen"
  (wire/with-root-dom)
  (before (reset! state {:current-screen :first-level-selection})
          (wire/render [sut/render-screen state]))

  (it "renders first level selection screen"
    (should-select "#first-level-selection")
    (should= (nth prompts/level-prompt 2) (wire/text "#first-level-selection h2"))
    (should= (nth prompts/level-prompt 3) (wire/text "#first-level-selection button:nth-of-type(1)"))
    (should= (nth prompts/level-prompt 4) (wire/text "#first-level-selection button:nth-of-type(2)"))
    (should= (nth prompts/level-prompt 6) (wire/text "#first-level-selection button:nth-of-type(3)")))

  (it "specifies player X if mode is 4"
    (swap! state assoc :mode 4)
    (wire/render [sut/render-screen state])
    (should= (first prompts/level-prompt) (wire/text "#first-level-selection h2")))

  (it "sets :first-ai-level to 1 when Easy is clicked"
      (wire/click! "#first-level-selection button:nth-of-type(1)")
      (should= 1 (:first-ai-level @state)))

  (it "sets :first-ai-level to 2 when Medium is clicked"
      (wire/click! "#first-level-selection button:nth-of-type(2)")
      (should= 2 (:first-ai-level @state)))

  (it "sets :first-ai-level to 3 when Unbeatable is clicked"
      (wire/click! "#first-level-selection button:nth-of-type(3)")
      (should= 3 (:first-ai-level @state)))

  (it "sets screen to play upon user selection if not mode 4"
      (doseq [item ["#first-level-selection button:nth-of-type(1)"
                    "#first-level-selection button:nth-of-type(2)"
                    "#first-level-selection button:nth-of-type(3)"]]
        (wire/click! item)
        (should= :play (:current-screen @state))))

  (it "sets screen to second-level-selection upon user selection and mode is 4"
    (swap! state assoc :mode 4)
      (doseq [item ["#first-level-selection button:nth-of-type(1)"
                    "#first-level-selection button:nth-of-type(2)"
                    "#first-level-selection button:nth-of-type(3)"]]
        (wire/click! item)
        (should= :second-level-selection (:current-screen @state))))
  )
