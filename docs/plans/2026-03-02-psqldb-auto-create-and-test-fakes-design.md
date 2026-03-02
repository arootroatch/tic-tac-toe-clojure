# Design: PostgreSQL Auto-Creation and Test Fakes

## Problem

1. Running with `--psqldb` fails if the `ttt` database doesn't exist, with no guidance in the README
2. `sql_spec.clj` requires a running PostgreSQL instance with a `ttt-test` database, making tests non-portable
3. `edn_logs_spec.clj` reads from real files on disk

## Solution

### 1. `ensure-db!` in `sql.clj`

Add database/table auto-creation when using `--psqldb`:

- `database-exists?` — connects to `postgres` admin database, queries `pg_database` catalog for `"ttt"`
- `create-database!` — connects to `postgres` with auto-commit enabled (required for `CREATE DATABASE` DDL), runs `CREATE DATABASE ttt`
- `create-games-table!` — runs `CREATE TABLE IF NOT EXISTS games (...)` against the `ttt` datasource
- `ensure-db!` — orchestrates: check if DB exists, create if not, then ensure table exists

Call sites: each `--psqldb` defmethod in `tui_main.clj` and `gui_main.clj` calls `(sql/ensure-db!)` as its first line.

Table schema (inferred from existing INSERT/SELECT statements):

```sql
CREATE TABLE IF NOT EXISTS games (
    id INTEGER PRIMARY KEY,
    mode INTEGER,
    first_ai_level INTEGER,
    second_ai_level INTEGER,
    game_state TEXT,
    current_screen TEXT,
    human BOOLEAN,
    ui TEXT,
    player TEXT,
    board TEXT,
    moves TEXT
)
```

### 2. Fake Multimethod Implementations

New file: `spec/clj/tic_tac_toe/game_logs/fake_logs.clj`

A `:fake` dispatch implementation of all 5 multimethods in `game_logs.clj`, backed by an atom:

- `games` atom stores a vector of game maps
- `get-new-game-id :fake` — `(inc (count @games))` or 1 if empty
- `log-move :fake` — updates the matching game's moves in the atom
- `log-completed-game :fake` — updates game-state for the matching game
- `get-last-in-progress-game :fake` — finds last game with `:in-progress` state
- `get-game-log :fake` — finds game by id

### 3. Rewrite `sql_spec.clj`

- Remove the `:db` tag and all `jdbc/execute!` / real database calls
- Keep tests for pure functions: `format-game-state`, `parse-board`, `parse-value`, `parse-state`
- Remove integration tests that hit real PostgreSQL
- Add tests for `ensure-db!` by stubbing `jdbc/execute!` and `jdbc/get-connection`

### 4. Rewrite `edn_logs_spec.clj`

- Tests already stubbing `spit`/`delete-file` stay as-is
- Tests reading real `.edn` files get stubbed with `with-redefs` on `slurp`/`file-seq`

### 5. README Update

Add a PostgreSQL section under Prerequisites:

- Install PostgreSQL via Homebrew / apt
- Ensure the PostgreSQL service is running
- Note that the app auto-creates the `ttt` database and `games` table on first run

## Trade-offs

- We lose integration coverage of actual SQL queries and file I/O
- We gain tests that run anywhere without infrastructure dependencies
- Pure function tests in `sql_spec.clj` still verify formatting/parsing logic