(ns tic-tac-toe.main-spec
  (:require-macros [speclj.core :refer [should= stub it describe before]]
                   [c3kit.wire.spec-helperc :refer [should-not-select should-select should-have-invoked-ajax-post]])
  (:require
    [speclj.core]
    [c3kit.wire.spec-helper :as wire]
    [tic-tac-toe.main :as main]
    ))

(describe "main"
  (wire/with-root-dom)
  (before
    (wire/render [main/base]))

  (it "does stuff"
    (should= 1 main/one)
    (should-select "#bob")
    (should= "file:///" (wire/href "#bob a"))))
