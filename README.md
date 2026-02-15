# Tic-Tac-Toe

A multi-frontend tic-tac-toe engine built in Clojure/ClojureScript, featuring three AI difficulty levels, multiple board sizes, and persistent game logging.

## Features

- **Three frontends**: Terminal (TUI), desktop GUI (Quil), and web app (Reagent)
- **Three board sizes**: 3x3, 4x4, and 3x3x3 (3-dimensional)
- **Four game modes**: Human vs Human, Human vs Computer, Computer vs Human, Computer vs Computer
- **Three AI levels**: Easy (random), Medium (strategic heuristic), Unbeatable (minimax with alpha-beta pruning)
- **Game persistence**: Save/resume in-progress games via EDN files or PostgreSQL
- **Game replay**: Review completed games move-by-move

## Architecture

The core game engine lives in shared `.cljc` files, consumed by both Clojure (TUI, GUI) and ClojureScript (web) frontends:

```
src/
  cljc/tic_tac_toe/       # Shared game engine
    ai/                    #   Minimax, easy/medium AI
    eval_board.cljc        #   Win/draw detection
    player.cljc            #   Turn dispatch
    board_options.cljc     #   Board configurations
    prompts.cljc           #   UI text constants
    print_utils.cljc       #   Board rendering
  clj/tic_tac_toe/         # Clojure backends
    tui/                   #   Terminal interface
    gui/                   #   Quil desktop GUI
    game_logs/             #   EDN + PostgreSQL persistence
  cljs/tic_tac_toe/        # ClojureScript web frontend
    screens/               #   Reagent components
data/                      # Game log storage (EDN)
```

## Running

### Terminal (TUI)

```bash
clj -M:run
```

### Desktop GUI (Quil)

```bash
clj -M:dev
```

### Web App

```bash
# Start dev server with ClojureScript compilation + CSS
clj -M:test:dev-
```

Then open `http://localhost:8080` in your browser.

## Testing

Tests use [Speclj](https://github.com/slagyr/speclj) with an autorunner that watches for file changes.

```bash
# Clojure tests (autorunner)
clj -M:test:spec -a

# ClojureScript tests (autorunner)
clj -M:test:cljs
```

## Tech Stack

- **Clojure 1.11** / **ClojureScript 1.11**
- **Quil** (Processing wrapper) for desktop GUI
- **Reagent** (React wrapper) for web frontend
- **next.jdbc** + **PostgreSQL** for SQL persistence
- **Speclj** for BDD-style testing
