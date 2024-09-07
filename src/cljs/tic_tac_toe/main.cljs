(ns tic-tac-toe.main
  (:require [reagent.dom :as rdom]
            [c3kit.wire.js :as wjs]
            [tic-tac-toe.app :refer [app]]))

(defn ^:export main []
  (rdom/render [app] (wjs/element-by-id "app")))