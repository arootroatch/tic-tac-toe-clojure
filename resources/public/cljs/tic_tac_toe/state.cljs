(ns tic-tac-toe.state
  (:require [reagent.core :as r]))

(defonce state (r/atom {:current-screen  :mode-selection
                        :mode            nil
                        :board           nil
                        :first-ai-level  nil
                        :second-ai-level nil
                        :player          :x
                        :game-state      :in-progress}))
