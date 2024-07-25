(defproject tic-tac-toe "0.1.0-SNAPSHOT"
  :description "FIXME: write description"
  :url "http://example.com/FIXME"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}
  :main tic-tac-toe.main
  :dependencies [[org.clojure/clojure "1.11.2"]
                 [quil "4.3.1323"]
                 [com.github.seancorfield/next.jdbc "1.3.939"]
                 [org.postgresql/postgresql "42.7.3"]]
  :profiles {:dev {:dependencies [[speclj "3.4.6"]
                                  [org.clojure/math.combinatorics "0.3.0"]]}}
  :plugins [[speclj "3.4.6"]]
  :test-paths ["spec"])
