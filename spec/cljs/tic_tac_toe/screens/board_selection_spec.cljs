(ns tic-tac-toe.screens.board-selection-spec
  (:require-macros [c3kit.wire.spec-helperc :refer [should-not-select should-select]]
                   [speclj.core :refer [before describe it should=]])
  (:require
    [c3kit.wire.spec-helper :as wire]
    [speclj.core]
    [tic-tac-toe.prompts :as prompts]
    [tic-tac-toe.render-screen :as sut]
    [tic-tac-toe.screens.board-selection]
    [tic-tac-toe.board-options :as board]))

(defonce state (atom {:current-screen :board-selection}))

(describe "board selection screen"
  (wire/with-root-dom)
  (before
    (reset! state {:current-screen :board-selection})
    (wire/render [sut/render-screen state]))

  (it "renders board selection screen"
    (should-select "#board-selection")
    (should= (first prompts/board-prompt) (wire/text "#board-selection h2"))
    (should= (nth prompts/board-prompt 1) (wire/text "#board-selection button:nth-of-type(1)"))
    (should= (nth prompts/board-prompt 2) (wire/text "#board-selection button:nth-of-type(2)")))

  (it "sets 3x3 board upon user selection"
    (wire/click! "#board-selection button:nth-of-type(1)")
    (should= board/initial-3x3-board (:board @state)))

  (it "sets 4x4 board upon user selection"
    (wire/click! "#board-selection button:nth-of-type(2)")
    (should= board/initial-4x4-board (:board @state)))

  (it "sets screen to first-level-selection upon user selection and not mode 1"
    (doseq [item ["#board-selection button:nth-of-type(1)"
                  "#board-selection button:nth-of-type(2)"]]
      (wire/click! item)
      (should= :first-level-selection (:current-screen @state))))

  (it "sets screen to play upon user selection and mode 1"
    (swap! state assoc :mode 1)
    (doseq [item ["#board-selection button:nth-of-type(1)"
                  "#board-selection button:nth-of-type(2)"]]
      (wire/click! item)
      (should= :play (:current-screen @state)))))
