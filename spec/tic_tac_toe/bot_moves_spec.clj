(ns tic-tac-toe.bot-moves-spec
  (:require [speclj.core :refer :all]
            [speclj.stub :as stub]
            [tic-tac-toe.ui :as ui]
            [tic-tac-toe.ai.easy :refer [find-easy-move]]
            [tic-tac-toe.ai.medium :refer [find-medium-move]]
            [tic-tac-toe.ai.minimax :refer [find-best-move]]
            [tic-tac-toe.bot-moves :refer :all]
            [tic-tac-toe.player :as player]))

(describe "playing bot moves"
  (with-stubs)
  (redefs-around [println (stub :println)])

  (context "defmethods"
    (redefs-around [find-easy-move (stub :find-easy-move)
                    find-medium-move (stub :find-medium-move)
                    find-best-move (stub :find-best-move)
                    play-bot-move (stub :play-bot-move)])

    (it "calls find-easy-move"
      (player/take-turn {:level 1 :board [1 2 3 4 5 6 7 8 9] :player :o})
      (player/take-turn {:level 1 :board [:x 2 3 4 5 6 7 8 9] :player :o})
      (should= [[[1 2 3 4 5 6 7 8 9]] [[:x 2 3 4 5 6 7 8 9]]]
               (stub/invocations-of :find-easy-move)))

    (it "calls find-medium-move"
      (player/take-turn {:level 2 :board [1 2 3 4 5 6 7 8 9] :player :o})
      (player/take-turn {:level 2 :board [:x 2 3 4 5 6 7 8 9] :player :o})
      (should= [[[1 2 3 4 5 6 7 8 9]] [[:x 2 3 4 5 6 7 8 9]]]
               (stub/invocations-of :find-medium-move)))

    (it "calls find-best-move"
      (player/take-turn {:level 3 :board [1 2 3 4 5 6 7 8 9] :player :o})
      (player/take-turn {:level 3 :board [:x 2 3 4 5 6 7 8 9] :player :o})
      (should= [[[1 2 3 4 5 6 7 8 9] :o] [[:x 2 3 4 5 6 7 8 9] :o]]
               (stub/invocations-of :find-best-move)))

    (it "plays the bot move to the board"
      (player/take-turn {:level 1 :board [1 2 3 4 5 6 7 8 9] :player :o :mode 2})
      (should-have-invoked :play-bot-move {:with [nil [1 2 3 4 5 6 7 8 9] 2 :o]}))
    )


  (context "play-bot-move"
    (it "plays bot move to board"
      (should= [1 2 3 4 :o 6 7 8 9] (play-bot-move 5 [1 2 3 4 5 6 7 8 9] 2 :o))
      (should= [:o 2 3 4 5 6 7 8 9] (play-bot-move 1 [1 2 3 4 5 6 7 8 9] 2 :o))
      (should= [1 2 3 4 5 6 7 8 :o] (play-bot-move 9 [1 2 3 4 5 6 7 8 9] 2 :o)))

    (it "displays bot-move to user"
      (with-redefs [ui/display-bot-move-message (stub :display-bot-move-message)]
        (play-bot-move 5 [1 2 3 4 5 6 7 8 9] 2 :o)
        (should-have-invoked :display-bot-move-message {:with [5 2 :o]})))
    ))

