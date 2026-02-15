# Tic-Tac-Toe

[![Tests](https://github.com/arootroatch/tic-tac-toe-clojure/actions/workflows/test.yml/badge.svg)](https://github.com/arootroatch/tic-tac-toe-clojure/actions/workflows/test.yml)

A multi-frontend tic-tac-toe engine built in Clojure/ClojureScript, featuring three AI difficulty levels, multiple board sizes, and persistent game logging.

**[Live Demo](https://arootroatch-blog.vercel.app/ttt/index.html)** — play in your browser

## Features

- **Three frontends**: Terminal (TUI), desktop GUI (Quil), and web app (Reagent)
- **Three board sizes**: 3x3, 4x4, and 3x3x3 (3-dimensional)
- **Four game modes**: Human vs Human, Human vs Computer, Computer vs Human, Computer vs Computer
- **Three AI levels**: Easy (random), Medium (strategic heuristic), Unbeatable (minimax with alpha-beta pruning)
- **Game persistence**: Save/resume in-progress games via EDN files or PostgreSQL
- **Auto-resume**: Detects incomplete games on startup and prompts the user to continue or start fresh
- **Game replay**: Review completed games move-by-move

## Architecture

The core game engine lives in shared `.cljc` files, consumed by both Clojure (TUI, GUI) and ClojureScript (web) frontends:

```
                      ┌─────────────────────┐
                      │   Shared Engine      │
                      │   (.cljc files)      │
                      │                      │
                      │  AI · Board · Rules  │
                      │  Players · Prompts   │
                      └──────────┬──────────┘
                                 │
            ┌────────────────────┼────────────────────┐
            │                    │                     │
   ┌────────▼────────┐ ┌────────▼────────┐ ┌─────────▼────────┐
   │  Terminal (TUI)  │ │  Desktop (Quil) │ │   Web (Reagent)  │
   │   Clojure CLI    │ │   Clojure GUI   │ │  ClojureScript   │
   └────────┬────────┘ └────────┬────────┘ └──────────────────┘
            │                    │
            └────────┬───────────┘
                     │
          ┌──────────┼──────────┐
          │                     │
   ┌──────▼──────┐    ┌────────▼────────┐
   │  EDN Files  │    │   PostgreSQL    │
   │  (data/)    │    │   (next.jdbc)   │
   └─────────────┘    └─────────────────┘
```

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

## Prerequisites

### Java

Clojure runs on the JVM. Install Java 11 or later:

```bash
# macOS (Homebrew)
brew install openjdk

# Ubuntu/Debian
sudo apt install openjdk-17-jdk

# Verify installation
java -version
```

### Clojure CLI

```bash
# macOS (Homebrew)
brew install clojure/tools/clojure

# Linux
curl -L -O https://github.com/clojure/brew-install/releases/latest/download/linux-install.sh
chmod +x linux-install.sh
sudo ./linux-install.sh
```

See the [official Clojure install guide](https://clojure.org/guides/install_clojure) for more options.

## Running

```
clj -M:run <ui> <db> [--game <id>]
```

`<db>` is required for TUI and GUI:

| Flag | Description |
|------|-------------|
| `--edndb` | Run with EDN file database |
| `--psqldb` | Run with PostgreSQL database |
| `gui` | Run desktop GUI (Quil) |
| `--game <id>` | Replay a specific game |

### Examples

```bash
# Terminal with EDN persistence
clj -M:run --edndb

# Desktop GUI with PostgreSQL
clj -M:run gui --psqldb

# Replay a game
clj -M:run --edndb --game 42
```

### Web App

```bash
# Start dev server with ClojureScript compilation + CSS
clj -M:test:dev
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
