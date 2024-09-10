(ns tic-tac-toe.screens.play-spec
  (:require-macros [c3kit.wire.spec-helperc :refer [should-select]]
                   [speclj.core :refer [before context describe it should-contain should=]])
  (:require
    [c3kit.wire.js :as wjs]
    [c3kit.wire.spec-helper :as wire]
    [speclj.core]
    [tic-tac-toe.render-screen :as sut]
    [tic-tac-toe.screens.play]))

(def board-3 [1 2 3 4 5 6 7 8 9])
(def board-4 (vec (range 1 17)))
(defonce state (atom {:current-screen :play :board board-3 :game-state :in-progress}))

(describe "play screen"
  (wire/with-root-dom)

  (context "play heading"
    (it "prompts player x for move"
      (swap! state assoc :player :x)
      (wire/render [sut/render-screen state])
      (should= "X's turn!" (wire/text "#play-heading")))

    (it "prompts player o for move"
      (swap! state assoc :player :o)
      (wire/render [sut/render-screen state])
      (should= "O's turn!" (wire/text "#play-heading")))

    (it "displays game state if game over"
      (swap! state assoc :game-state "X wins!")
      (wire/render [sut/render-screen state])
      (should= "X wins!" (wire/text "#play-heading")))
    )


  (context "3x3"
    (before (reset! state {:current-screen :play :board board-3 :player :x :mode 1})
            (wire/render [sut/render-screen state]))

    (it "renders board"
      (should= 9 (count (vec (wjs/query-selector-all ".board-square"))))
      (should-select "#board-wrapper")
      (should-select ".three-grid"))

    (it "buttons have IDs 0-8"
      (doseq [n (range 9)]
        (should-select (str "#index-" n))))

    (it "clicking button updates board in state"
      (doseq [n (range 9)]
        (wire/click! (str "#index-" n))
        (should= (assoc board-3 n :x) (:board @state))
        (swap! state assoc :board board-3 :player :x)))

    (it "clicking button swaps player in state"
      (doseq [n (range 9)]
        (wire/click! (str "#index-" n))
        (should= :o (:player @state))
        (swap! state assoc :board board-3 :player :x)))

    (it "clicking button updates game-state in state"
      (swap! state assoc :board [1 :x :x :o :o 6 7 8 9])
      (wire/click! "#index-0")
      (should= "X wins!" (:game-state @state)))

    (it "clicking button adds token to button HTML"
      (doseq [n (range 9)]
        (wire/click! (str "#index-" n))
        (should= "X" (wire/text (str "#index-" n)))
        (reset! state {:board board-3 :player :x :current-screen :play :mode 1})))

    (it "clicking button disables button"
      (doseq [n (range 9)]
        (wire/click! (str "#index-" n))
        (should= true (wire/disabled? (str "#index-" n)))
        (reset! state {:board board-3 :player :x :current-screen :play :mode 1})))
    )


  (context "4x4"
    (before (reset! state {:current-screen :play :board board-4 :player :x :mode 1})
            (wire/render [sut/render-screen state]))

    (it "renders board"
      (should= 16 (count (vec (wjs/query-selector-all ".board-square"))))
      (should-select "#board-wrapper")
      (should-select ".four-grid"))

    (it "buttons have IDs 0-15"
      (doseq [n (range 16)]
        (should-select (str "#index-" n))))

    (it "clicking button updates board in state"
      (doseq [n (range 16)]
        (wire/click! (str "#index-" n))
        (should= (assoc board-4 n :x) (:board @state))
        (swap! state assoc :board board-4 :player :x)))

    (it "clicking button swaps player in state"
      (doseq [n (range 16)]
        (wire/click! (str "#index-" n))
        (should= :o (:player @state))
        (swap! state assoc :player :x)))

    (it "clicking button adds token to button HTML"
      (doseq [n (range 16)]
        (wire/click! (str "#index-" n))
        (should= "X" (wire/text (str "#index-" n)))
        (reset! state {:board board-4 :player :x :current-screen :play :mode 1})))

    (it "clicking button disables button"
      (doseq [n (range 16)]
        (wire/click! (str "#index-" n))
        (should= true (wire/disabled? (str "#index-" n)))
        (reset! state {:board board-4 :player :x :current-screen :play :mode 1})))
    ))
