(ns tic-tac-toe.bot-moves-spec
  (:require [speclj.core :refer :all]
            [speclj.stub :as stub]
            [tic-tac-toe.print-utils :as print-utils]
            [tic-tac-toe.ai.easy-medium :refer [find-medium-move find-easy-move]]
            [tic-tac-toe.ai.minimax :refer [find-best-move-memo]]
            [tic-tac-toe.bot-moves :refer :all]
            [tic-tac-toe.player :as player]))

(describe "playing bot moves"
  (with-stubs)
  (redefs-around [println (stub :println)])

  (context "defmethods"
    (redefs-around [find-easy-move (stub :find-easy-move)
                    find-medium-move (stub :find-medium-move)
                    find-best-move-memo (stub :find-best-move)
                    play-bot-move (stub :play-bot-move)])

    (it "calls find-easy-move"
      (player/take-turn {:first-ai-level 1 :board [1 2 3 4 5 6 7 8 9] :player :o :mode 2 :second-ai-level nil})
      (player/take-turn {:first-ai-level 1 :board [:x 2 3 4 5 6 7 8 9] :player :o :mode 2 :second-ai-level nil})
      (should= [[[1 2 3 4 5 6 7 8 9]] [[:x 2 3 4 5 6 7 8 9]]]
               (stub/invocations-of :find-easy-move)))

    (it "calls find-medium-move"
      (player/take-turn {:first-ai-level 2 :board [1 2 3 4 5 6 7 8 9] :player :x :mode 3 :second-ai-level nil})
      (player/take-turn {:second-ai-level 2 :board [:x 2 3 4 5 6 7 8 9] :player :o :mode 4 :first-ai-level 1})
      (should= [[[1 2 3 4 5 6 7 8 9]] [[:x 2 3 4 5 6 7 8 9]]]
               (stub/invocations-of :find-medium-move)))

    (it "calls find-best-move"
      (player/take-turn {:first-ai-level 3 :board [1 2 3 4 5 6 7 8 9] :player :x :mode 4 :second-ai-level nil})
      (player/take-turn {:second-ai-level 3 :board [:x 2 3 4 5 6 7 8 9] :player :o :mode 4 :first-ai-level 1})
      (should= [[[1 2 3 4 5 6 7 8 9] :x nil] [[:x 2 3 4 5 6 7 8 9] :o nil]]
               (stub/invocations-of :find-best-move)))

    (it "plays the bot move to the board"
      (player/take-turn {:first-ai-level 1 :board [1 2 3 4 5 6 7 8 9] :player :o :mode 2})
      (should-have-invoked :play-bot-move {:with [nil [1 2 3 4 5 6 7 8 9] 2 :o nil]}))
    )


  (context "play-bot-move"
    (it "plays bot move to board"
      (should= [1 2 3 4 :o 6 7 8 9] (play-bot-move 5 [1 2 3 4 5 6 7 8 9] 2 :o false))
      (should= [:o 2 3 4 5 6 7 8 9] (play-bot-move 1 [1 2 3 4 5 6 7 8 9] 2 :o false))
      (should= [1 2 3 4 5 6 7 8 :o] (play-bot-move 9 [1 2 3 4 5 6 7 8 9] 2 :o false)))

    (it "displays bot-move to user"
      (with-redefs [print-utils/display-bot-move-message (stub :display-bot-move-message)]
        (play-bot-move 5 [1 2 3 4 5 6 7 8 9] 2 :o :tui)
        (should-have-invoked :display-bot-move-message {:with [5 2 :o]})))
    ))

