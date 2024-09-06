(ns tic-tac-toe.main
  (:require [reagent.dom :as rdom]
            [c3kit.wire.js :as wjs])
  )

(defn base []
  [:div
   {:id "bob"}
   [:a {:href "/"}]])


(def one 1)

(defn ^:export main []
  (println "hi from cljs")
  (rdom/render [base] (wjs/element-by-id "app ")))