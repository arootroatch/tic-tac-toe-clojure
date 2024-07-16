(ns tic-tac-toe.gui.resume-selection-spec
  (:require [quil.core :as q]
            [speclj.core :refer :all]
            [speclj.stub :as stub]
            [tic-tac-toe.game_logs.game-log :as game-log]
            [tic-tac-toe.gui.components :as components]
            [tic-tac-toe.gui.resume-selection :refer :all]
            [tic-tac-toe.gui.utils :as utils]))

(def test-state {:current-screen  :play
                 :mode            2
                 :board           [:x :x 3 4 :o 6 7 8 9]
                 :first-ai-level  3
                 :second-ai-level nil
                 :player          :x
                 :human?          false
                 :game-state      :in-progress
                 :gui             true})

(describe "resume-selection"
  (with-stubs)

  (context "handle-click"
    (redefs-around [game-log/get-resumed-game-state (stub :resumed-state {:return test-state})
                    clojure.java.io/delete-file (stub :delete-file)])

    (it "updates state with previous game state"
      (should= test-state
               (utils/handle-click {:current-screen :resume-selection} {:x 400 :y 250})))

    (it "updates to mode-selection"
      (should= {:current-screen :mode-selection}
               (utils/handle-click {:current-screen :resume-selection} {:x 400 :y 300})))

    (it "deletes temp file"
      (utils/handle-click {:current-screen :resume-selection} {:x 400 :y 300})
      (should-have-invoked :delete-file))
    )

  (context "resume-selection-screen"
    (redefs-around [q/background (stub :background)
                    q/text-size (stub :text-size)
                    q/text (stub :text)
                    components/text-button (stub :text-button)
                    game-log/get-last-in-progress-game (stub :last-game {:return "test.path"})])
    (it "resets background"
      (utils/update-state {:current-screen :resume-selection}) (should-have-invoked :background {:with [0 0 0]}))

    (it "sets text size to 30"
      (utils/update-state {:current-screen :resume-selection}) (should-have-invoked :text-size {:with [30]}))

    (it "displays resume heading"
      (utils/update-state {:current-screen :resume-selection})
      (should-have-invoked :text {:with ["There's and unfinished game! Would you like resume?" 400 100]}))

    (it "displays all mode buttons"
      (utils/update-state {:current-screen :resume-selection})
      (should= [["Yes" 400 250 600 60] ["No (deletes game history)" 400 330 600 60]]
               (stub/invocations-of :text-button)))

    (it "updates to mode selection screen if no previous game"
      (with-redefs [game-log/get-last-in-progress-game (stub :last-game {:return nil})]
        (should= {:current-screen :mode-selection} (utils/update-state {:current-screen :resume-selection}))))

    (it "gets last in-progress game"
      (with-redefs [game-log/get-last-in-progress-game (stub :last-game)]
        (utils/update-state {:current-screen :resume-selection})
        (should-have-invoked :last-game {:with [game-log/in-progress-dir-path-gui]})))
    ))

