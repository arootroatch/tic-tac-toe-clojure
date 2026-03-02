# PostgreSQL Auto-Creation and Test Fakes Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Auto-create the `ttt` database and `games` table when running with `--psqldb`, document PostgreSQL prerequisites in the README, and eliminate all database/filesystem dependencies from tests.

**Architecture:** Add `ensure-db!` to `sql.clj` that checks for and creates the `ttt` database and `games` table via the `postgres` admin database. Replace all infrastructure-dependent tests with stubs and a new `:fake` multimethod implementation backed by an atom.

**Tech Stack:** Clojure, next.jdbc, PostgreSQL, Speclj

---

### Task 1: Create fake multimethod implementations (TDD)

**Files:**
- Create: `spec/clj/tic_tac_toe/game_logs/fake_logs_spec.clj`
- Create: `spec/clj/tic_tac_toe/game_logs/fake_logs.clj`

**Step 1: Write the failing tests**

```clojure
;; spec/clj/tic_tac_toe/game_logs/fake_logs_spec.clj
(ns tic-tac-toe.game-logs.fake-logs-spec
  (:require [speclj.core :refer :all]
            [tic-tac-toe.game-logs.fake-logs :as fake]
            [tic-tac-toe.game-logs.game-logs :as game-logs]))

(describe "fake game logs"
  (before (fake/reset-games!))

  (context "get-new-game-id"
    (it "returns 1 when no games exist"
      (should= 1 (game-logs/get-new-game-id {:db :fake})))

    (it "returns next id when games exist"
      (fake/add-game! {:game-id 1})
      (fake/add-game! {:game-id 2})
      (should= 3 (game-logs/get-new-game-id {:db :fake}))))

  (context "log-move"
    (it "appends board to game's moves"
      (fake/add-game! {:game-id 1 :moves [] :player :x :human? true})
      (game-logs/log-move {:state {:db :fake :game-id 1 :board [:x 2 3 4 5 6 7 8 9] :player :o :human? false}})
      (should= [[:x 2 3 4 5 6 7 8 9]] (:moves (first @fake/games))))

    (it "concatenates multiple moves"
      (fake/add-game! {:game-id 1 :moves [] :player :x :human? true})
      (game-logs/log-move {:state {:db :fake :game-id 1 :board [:x 2 3 4 5 6 7 8 9] :player :o :human? false}})
      (game-logs/log-move {:state {:db :fake :game-id 1 :board [:x :o 3 4 5 6 7 8 9] :player :x :human? true}})
      (should= [[:x 2 3 4 5 6 7 8 9] [:x :o 3 4 5 6 7 8 9]] (:moves (first @fake/games)))))

  (context "log-completed-game"
    (it "updates game state"
      (fake/add-game! {:game-id 1 :game-state :in-progress})
      (game-logs/log-completed-game {:state {:db :fake :game-id 1 :game-state "X wins!"}})
      (should= "X wins!" (:game-state (first @fake/games)))))

  (context "get-last-in-progress-game"
    (it "returns nil when no games exist"
      (should= nil (game-logs/get-last-in-progress-game {:db :fake})))

    (it "returns nil when last game is not in progress"
      (fake/add-game! {:game-id 1 :game-state "X wins!"})
      (should= nil (game-logs/get-last-in-progress-game {:db :fake})))

    (it "returns last game when it is in progress"
      (fake/add-game! {:game-id 1 :game-state :in-progress :board [1 2 3 4 5 6 7 8 9]})
      (should= {:game-id 1 :game-state :in-progress :board [1 2 3 4 5 6 7 8 9]}
               (game-logs/get-last-in-progress-game {:db :fake}))))

  (context "get-game-log"
    (it "returns nil when game doesn't exist"
      (should= nil (game-logs/get-game-log {:db :fake :id 99})))

    (it "returns game by id"
      (fake/add-game! {:game-id 1 :game-state "X wins!"})
      (fake/add-game! {:game-id 2 :game-state "O wins!"})
      (should= {:game-id 2 :game-state "O wins!"}
               (game-logs/get-game-log {:db :fake :id 2})))))
```

**Step 2: Run tests to verify they fail**

Check autorunner output: `tail -50 <task-output-file>`

Expected: failures because `fake-logs` namespace doesn't exist yet.

**Step 3: Implement the fake multimethods**

```clojure
;; spec/clj/tic_tac_toe/game_logs/fake_logs.clj
(ns tic-tac-toe.game-logs.fake-logs
  (:require [tic-tac-toe.game-logs.game-logs :as game-logs]))

(def games (atom []))

(defn reset-games! [] (reset! games []))

(defn add-game! [game]
  (swap! games conj game))

(defmethod game-logs/get-new-game-id :fake [_]
  (if (empty? @games) 1 (inc (apply max (map :game-id @games)))))

(defmethod game-logs/log-move :fake [{:keys [state]}]
  (let [{:keys [board game-id]} state]
    (swap! games (fn [gs]
                   (mapv (fn [g]
                           (if (= (:game-id g) game-id)
                             (update g :moves conj board)
                             g))
                         gs)))))

(defmethod game-logs/log-completed-game :fake [{:keys [state]}]
  (let [{:keys [game-state game-id]} state]
    (swap! games (fn [gs]
                   (mapv (fn [g]
                           (if (= (:game-id g) game-id)
                             (assoc g :game-state game-state)
                             g))
                         gs)))))

(defmethod game-logs/get-last-in-progress-game :fake [_]
  (let [last-game (last @games)]
    (when (= :in-progress (:game-state last-game)) last-game)))

(defmethod game-logs/get-game-log :fake [{:keys [id]}]
  (first (filter #(= (:game-id %) id) @games)))
```

**Step 4: Run tests to verify they pass**

Check autorunner output: `tail -50 <task-output-file>`

Expected: all fake-logs-spec tests PASS.

**Step 5: Commit**

```bash
git add spec/clj/tic_tac_toe/game_logs/fake_logs.clj spec/clj/tic_tac_toe/game_logs/fake_logs_spec.clj
git commit -m "add fake multimethod implementations for game-logs testing"
```

---

### Task 2: Rewrite sql_spec.clj to remove database dependency

**Files:**
- Modify: `spec/clj/tic_tac_toe/game_logs/sql_spec.clj`

**Context:** Currently this file creates a `ds-test` datasource at the top level, causing a connection error when `ttt-test` doesn't exist. All `jdbc/execute!` calls hit a real database. We keep the pure function tests (`format-game-state`) and remove all DB integration tests.

**Step 1: Rewrite the spec file**

Remove: `:db` tag, `db-test`, `ds-test`, `populate-db`, `clear-db`, `before-all`, `after`, and all tests that use `jdbc/execute!` directly.

Keep: `initial-state`, `game-log`, `game-log-formatted`, `in-progress`, `in-progress-formatted`, `game-log-formatted-2` (these are used by `tui_main_spec.clj` which imports them).

Keep: all `format-game-state` tests (these are pure function tests, no DB needed).

The rewritten file:

```clojure
(ns tic-tac-toe.game-logs.sql-spec
  (:require [speclj.core :refer :all]
            [tic-tac-toe.game-logs.sql :refer :all]))

(def initial-state {:game-id         7
                    :filepath        "src/tic_tac_toe/game_logs/in_progress/gui/game-7.edn"
                    :current-screen  :play
                    :second-ai-level nil
                    :mode            3
                    :first-ai-level  3
                    :game-state      :in-progress
                    :human?          false
                    :ui              :gui
                    :player          :x
                    :board           [1 2 3 4 5 6 7 8 9]})

(def game-log [{:games/current_screen  ":play",
                :games/game_state      ":in-progress",
                :games/human           false,
                :games/mode            3,
                :games/first_ai_level  3,
                :games/second_ai_level 0,
                :games/board           "[1 2 3 4 5 6 7 8 9]",
                :games/id              7,
                :games/ui              ":gui",
                :games/player          ":x",
                :games/moves           nil}])

(def game-log-formatted {:game-id         7
                         :current-screen  :play
                         :db              :sql
                         :moves           []
                         :second-ai-level 0
                         :mode            3
                         :first-ai-level  3
                         :game-state      :in-progress
                         :human?          false
                         :ui              :gui
                         :player          :x
                         :board           [1 2 3 4 5 6 7 8 9]})

(def in-progress {:games/current_screen  "",
                  :games/game_state      ":in-progress",
                  :games/human           false,
                  :games/mode            2,
                  :games/first_ai_level  3,
                  :games/second_ai_level 0,
                  :games/board           "[1 2 3 4 5 6 7 8 9]",
                  :games/id              8,
                  :games/ui              ":tui",
                  :games/player          ":o",
                  :games/moves           "[1 2 3 4 :x 6 7 8 9][:o 2 3 4 :x 6 7 8 9]"})

(def in-progress-formatted {:current-screen  nil,
                            :game-state      :in-progress,
                            :human?          false,
                            :mode            2,
                            :first-ai-level  3,
                            :second-ai-level 0,
                            :board           [:o 2 3 4 :x 6 7 8 9],
                            :game-id         8,
                            :ui              :tui,
                            :player          :o,
                            :db              :sql})

(def game-log-formatted-2 (assoc in-progress-formatted
                            :board [1 2 3 4 5 6 7 8 9]
                            :moves [[1 2 3 4 :x 6 7 8 9] [:o 2 3 4 :x 6 7 8 9]]))

(describe "sql pure functions"

  (it "formats in-progress game state for resuming"
    (should= in-progress-formatted (format-game-state in-progress false)))

  (it "formats in-progress game state for replay (uses board instead of moves)"
    (should= (assoc in-progress-formatted :board [1 2 3 4 5 6 7 8 9])
             (format-game-state in-progress true)))

  (it "formats completed game state"
    (should= (assoc in-progress-formatted :game-state "O wins!")
             (format-game-state (assoc in-progress :games/game_state "O wins!") false))))
```

**Step 2: Run tests to verify they pass**

Check autorunner output. Expected: the `PSQLException: database "ttt-test" does not exist` error is GONE. The `format-game-state` tests pass.

**Step 3: Commit**

```bash
git add spec/clj/tic_tac_toe/game_logs/sql_spec.clj
git commit -m "remove database dependency from sql_spec"
```

---

### Task 3: Rewrite edn_logs_spec.clj to remove filesystem dependency

**Files:**
- Modify: `spec/clj/tic_tac_toe/game_logs/edn_logs_spec.clj`

**Context:** Many tests read real fixture files from disk. We stub `slurp`, `file-seq`, and `clojure.java.io/file` to inline the test data. The fixture file contents (from the actual files) are:

- `game-logs-test.edn`: 4 game log entries
- `game-ids.edn`: `"1\n2\n3\n4\n"`
- `game-logs-empty-test.edn`: empty file
- `in_progress/game-4.edn`: game state header + 2 board states
- `in_progress/completed-game.edn`: game state header + 7 board states

**Step 1: Rewrite tests to stub filesystem operations**

For tests calling `read-edn-file` directly or indirectly: stub `slurp` to return the file contents as strings.

For `get-paths-in-dir` test: already stubs via `with-redefs` in one test, but the standalone test at line 52-64 uses real filesystem. Stub `file-seq`.

For `create-new-filepath` test: already pure (string concatenation), no changes needed.

Key pattern for stubbing `slurp`:

```clojure
(with-redefs [slurp (fn [path]
               (case path
                 "test-path" "{:game-id 1 :moves [] :game-state :in-progress :ui :gui}\n..."
                 (throw (Exception. (str "Unexpected slurp: " path)))))]
  ...)
```

The full rewritten spec should:
- Define inline string constants for each fixture file's content
- Use `with-redefs` on `slurp` for tests calling `read-edn-file`, `get-resumed-game-board`, `get-resumed-game-state`, `format-in-progress-data`, `get-new-game-id`, `get-game-log`
- Use `with-redefs` on `file-seq` and `clojure.java.io/file` for the `get-paths-in-dir` standalone test
- Keep existing stubs on `spit` and `delete-file` as-is

**Step 2: Run tests to verify they pass**

Check autorunner output. Expected: all edn_logs_spec tests pass without reading from disk.

**Step 3: Commit**

```bash
git add spec/clj/tic_tac_toe/game_logs/edn_logs_spec.clj
git commit -m "remove filesystem dependency from edn_logs_spec"
```

---

### Task 4: Fix gui_main_spec.clj database-dependent tests

**Files:**
- Modify: `spec/clj/tic_tac_toe/gui/gui_main_spec.clj`

**Context:** The "replay sql" context has `(tags :db)` and two tests that hit real infrastructure:
- Line 63-65: calls `get-game-log :sql` hitting real database
- Line 73-75: calls `get-game-log :sql` hitting real database

The "replay edn" context also has tests hitting real filesystem:
- Line 47-48: calls `get-game-log :edn` reading real EDN files
- Line 56-58: calls `get-game-log :edn` reading real EDN files

**Step 1: Add stubs for infrastructure-dependent tests**

For "replay sql" tests: remove `(tags :db)`, add `with-redefs` on `game-logs/get-game-log` with appropriate canned data.

For "replay edn" tests: add `with-redefs` on `game-logs/get-game-log` with appropriate canned data.

The test at line 63-65 ("displays game id error when invalid game id is entered") should stub `get-game-log` to return nil:
```clojure
(with-redefs [game-logs/get-game-log (stub :game-log {:return nil})]
  (should= "There is no game with ID 50\n"
           (with-out-str (launch-user-interface ["gui" "--psqldb" "--game" "50"]))))
```

The test at line 73-75 ("sets game-state to state from log and launches quil") should stub `get-game-log` to return a known game log map matching the expected output.

Apply the same pattern for the edn replay tests at lines 47-48 and 56-58.

**Step 2: Run tests to verify they pass**

Check autorunner output. Expected: gui_main_spec tests pass without `:db` tag and without filesystem reads.

**Step 3: Commit**

```bash
git add spec/clj/tic_tac_toe/gui/gui_main_spec.clj
git commit -m "remove database and filesystem dependencies from gui_main_spec"
```

---

### Task 5: TDD `ensure-db!` in sql.clj

**Files:**
- Modify: `spec/clj/tic_tac_toe/game_logs/sql_spec.clj`
- Modify: `src/clj/tic_tac_toe/game_logs/sql.clj`

**Step 1: Write failing tests for ensure-db!**

Add to `sql_spec.clj`. The helper functions (`database-exists?`, `create-database!`, `create-games-table!`) should be public so they can be stubbed:

```clojure
(describe "ensure-db!"
  (with-stubs)

  (it "creates database and table when database doesn't exist"
    (with-redefs [database-exists? (stub :db-exists {:return false})
                  create-database! (stub :create-db)
                  create-games-table! (stub :create-table)]
      (ensure-db!)
      (should-have-invoked :db-exists {:with ["ttt"]})
      (should-have-invoked :create-db {:with ["ttt"]})
      (should-have-invoked :create-table)))

  (it "skips database creation when database already exists"
    (with-redefs [database-exists? (stub :db-exists {:return true})
                  create-database! (stub :create-db)
                  create-games-table! (stub :create-table)]
      (ensure-db!)
      (should-have-invoked :db-exists {:with ["ttt"]})
      (should-not-have-invoked :create-db)
      (should-have-invoked :create-table))))
```

**Step 2: Run tests to verify they fail**

Expected: failures because `ensure-db!`, `database-exists?`, `create-database!`, `create-games-table!` don't exist yet.

**Step 3: Implement ensure-db! in sql.clj**

Add after the `ds` def:

```clojure
(defn database-exists? [db-name]
  (let [admin-ds (jdbc/get-datasource {:dbtype "postgres" :dbname "postgres"})]
    (with-open [conn (jdbc/get-connection admin-ds)]
      (seq (jdbc/execute! conn ["SELECT 1 FROM pg_database WHERE datname = ?" db-name])))))

(defn create-database! [db-name]
  (let [admin-ds (jdbc/get-datasource {:dbtype "postgres" :dbname "postgres"})]
    (with-open [conn (jdbc/get-connection admin-ds)]
      (.setAutoCommit conn true)
      (jdbc/execute! conn [(str "CREATE DATABASE " db-name)]))))

(defn create-games-table! []
  (jdbc/execute! ds ["CREATE TABLE IF NOT EXISTS games (
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
    moves TEXT)"]))

(defn ensure-db! []
  (when-not (database-exists? "ttt")
    (create-database! "ttt"))
  (create-games-table!))
```

**Step 4: Run tests to verify they pass**

Expected: ensure-db! tests PASS.

**Step 5: Commit**

```bash
git add spec/clj/tic_tac_toe/game_logs/sql_spec.clj src/clj/tic_tac_toe/game_logs/sql.clj
git commit -m "add ensure-db! to auto-create ttt database and games table"
```

---

### Task 6: Wire ensure-db! into launch methods (TDD)

**Files:**
- Modify: `spec/clj/tic_tac_toe/tui/tui_main_spec.clj`
- Modify: `spec/clj/tic_tac_toe/gui/gui_main_spec.clj`
- Modify: `src/clj/tic_tac_toe/tui/tui_main.clj`
- Modify: `src/clj/tic_tac_toe/gui/gui_main.clj`

**Step 1: Write failing tests**

In `tui_main_spec.clj`, add to the "launch-user-interface sql" context's `redefs-around`:

```clojure
sql/ensure-db! (stub :ensure-db)
```

Add test:

```clojure
(it "calls ensure-db! before starting"
  (with-in-str "1\n" (launch-user-interface ["--psqldb"]))
  (should-have-invoked :ensure-db))
```

Do the same for the "launch-user-interface replay sql" context in `tui_main_spec.clj`:

```clojure
sql/ensure-db! (stub :ensure-db)
```

```clojure
(it "calls ensure-db! before replay"
  (launch-user-interface ["--psqldb" "--game" "5"])
  (should-have-invoked :ensure-db))
```

In `gui_main_spec.clj`, add `sql/ensure-db! (stub :ensure-db)` to the "play game sql" context's `redefs-around` (or add `with-redefs` in each test), and add similar assertion tests for both "play game sql" and "replay sql" contexts.

**Step 2: Run tests to verify they fail**

Expected: tests fail because `ensure-db!` is not being called in the launch methods.

**Step 3: Wire ensure-db! into launch methods**

In `tui_main.clj`, add `(sql/ensure-db!)` as the first line of:
- `(defmethod launch-user-interface ["--psqldb"] [_]` (line 53)
- `(defmethod launch-user-interface ["--psqldb" "--game"] [args]` (line 70)

In `gui_main.clj`, add `(sql/ensure-db!)` as the first line of:
- `(defmethod launch-user-interface ["gui" "--psqldb"] [_]` (line 57)
- `(defmethod launch-user-interface ["gui" "--psqldb" "--game"] [args]` (line 79)

**Step 4: Run tests to verify they pass**

Expected: all new ensure-db! invocation tests PASS.

**Step 5: Commit**

```bash
git add src/clj/tic_tac_toe/tui/tui_main.clj src/clj/tic_tac_toe/gui/gui_main.clj \
        spec/clj/tic_tac_toe/tui/tui_main_spec.clj spec/clj/tic_tac_toe/gui/gui_main_spec.clj
git commit -m "wire ensure-db! into all --psqldb launch methods"
```

---

### Task 7: Update README

**Files:**
- Modify: `README.md`

**Step 1: Add PostgreSQL section after "Clojure CLI" in Prerequisites**

```markdown
### PostgreSQL (for TUI/GUI with `--psqldb`)

Required only if using the `--psqldb` flag. The EDN backend (`--edndb`) needs no additional setup.

\```bash
# macOS (Homebrew)
brew install postgresql@17
brew services start postgresql@17

# Ubuntu/Debian
sudo apt install postgresql
sudo systemctl start postgresql
\```

The app automatically creates the `ttt` database and `games` table on first run.
```

**Step 2: Commit**

```bash
git add README.md
git commit -m "add PostgreSQL prerequisites to README"
```

---

### Task 8: Final verification

**Step 1: Run the full test suite**

```bash
clj -M:test:spec -c
```

Expected: ALL tests pass with 0 failures, 0 errors. No `:db` tags remain.

**Step 2: Verify no `:db` tags remain in specs**

```bash
grep -r "(tags :db)" spec/
```

Expected: no output.

**Step 3: Verify no direct filesystem reads in specs (optional sanity check)**

```bash
grep -rn "slurp\|file-seq" spec/clj/tic_tac_toe/game_logs/edn_logs_spec.clj
```

Expected: only appears inside `with-redefs` blocks.