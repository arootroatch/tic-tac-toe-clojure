(ns tic-tac-toe.main
  (:require [reagent.dom :as rdom]
            [c3kit.wire.js :as wjs]))

(defn base []
  [:div
   {:id "bob"}
   [:a {:href "/"}]])

(defn ^:export main []
  (rdom/render [base] (wjs/element-by-id "app ")))