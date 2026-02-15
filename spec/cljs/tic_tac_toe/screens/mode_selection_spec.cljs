(ns tic-tac-toe.screens.mode-selection-spec
  (:require-macros [speclj.core :refer [should= it describe before]]
                   [c3kit.wire.spec-helperc :refer [should-not-select should-select]])
  (:require
    [speclj.core]
    [c3kit.wire.spec-helper :as wire]
    [tic-tac-toe.prompts :as prompts]
    [tic-tac-toe.render-screen :as sut]
    [tic-tac-toe.screens.mode-selection]))

(defonce state (atom {:current-screen :mode-selection :human? true}))

(describe "mode selection screen"
  (wire/with-root-dom)
  (before
    (reset! state {:current-screen :mode-selection})
    (wire/render [sut/render-screen state]))

  (it "renders mode selection screen"
    (should-select "#mode-selection")
    (should= (first prompts/mode-prompt) (wire/text "#mode-selection h2"))
    (should= (nth prompts/mode-prompt 1) (wire/text "#mode-selection button:nth-of-type(1)"))
    (should= (nth prompts/mode-prompt 2) (wire/text "#mode-selection button:nth-of-type(2)"))
    (should= (nth prompts/mode-prompt 3) (wire/text "#mode-selection button:nth-of-type(3)"))
    (should= (nth prompts/mode-prompt 4) (wire/text "#mode-selection button:nth-of-type(4)")))

  (it "sets mode to 1 if user selects HvH"
    (wire/click! "#mode-selection button:nth-of-type(1)")
    (should= 1 (:mode @state)))

  (it "sets mode to 2 if user selects HvC"
    (wire/click! "#mode-selection button:nth-of-type(2)")
    (should= 2 (:mode @state)))

  (it "sets mode to 3 if user selects CvH"
    (wire/click! "#mode-selection button:nth-of-type(3)")
    (should= 3 (:mode @state)))

  (it "sets mode to 4 if user selects CvC"
    (wire/click! "#mode-selection button:nth-of-type(4)")
    (should= 4 (:mode @state)))

  (it "sets screen to board-selection upon user selection"
    (doseq [item ["#mode-selection button:nth-of-type(1)"
                  "#mode-selection button:nth-of-type(2)"
                  "#mode-selection button:nth-of-type(3)"
                  "#mode-selection button:nth-of-type(4)"]]
      (wire/click! item)
      (should= :board-selection (:current-screen @state))))

  (it "sets human? to false if mode 3"
    (wire/click! "#mode-selection button:nth-of-type(3)")
    (should= false (:human? @state)))

  (it "sets human? to false if mode 4"
    (wire/click! "#mode-selection button:nth-of-type(4)")
    (should= false (:human? @state)))

  (it "sets human? to true if mode 1"
    (wire/click! "#mode-selection button:nth-of-type(1)")
    (should= true (:human? @state)))

  (it "sets human? to true if mode 2"
    (wire/click! "#mode-selection button:nth-of-type(2)")
    (should= true (:human? @state)))
  )
