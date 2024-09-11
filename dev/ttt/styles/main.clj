(ns ttt.styles.main
  (:refer-clojure :exclude [rem])
  (:require [ttt.styles.core :refer :all]))

(defstyles screen

           [:body {
                   :text-align       "center"
                   :background-color "rgb(0, 57, 97)"
                   :box-sizing       "border-box"
                   :color            "whitesmoke"
                   }]

           [:h1 {:margin-bottom "4rem"
                 :margin-top    "5rem"}]

           [:.screen [:h2 {:margin-bottom "4rem"}]]

           [:#play-heading {:margin-bottom "4rem"}]

           [:.selection-btn
            :.select-board-btn
            :#restart {
                       :display       "block"
                       :padding       "1rem"
                       :border-radius "10px"
                       :font-size     "1.2rem"
                       }]

           [:#restart {:width "100%"
                       :margin "2rem auto"}]

           [:.selection-btn
            :.select-board-btn {:width  "420px"
                                :margin "1rem auto"}]

           [:.selection-btn
            :.select-board-btn
            :.board-square
            :#restart {
                       :color            "whitesmoke"
                       :background-color "rgba(151, 2, 159, 0.785)"
                       :cursor           "pointer"
                       }]

           [:.selection-btn:hover
            :.select-board-btn:hover
            :.board-square:hover {
                                  :background-color "rgba(201, 1, 201, 0.678)"
                                  }]

           [:.three-grid
            :.four-grid {
                         :display "grid"
                         }]

           [:.three-grid
            :.four-grid
            :#board-wrapper {
                             :width "fit-content"
                             }]

           [:.three-grid {
                          :grid-template-columns "1fr 1fr 1fr"
                          }]

           [:.four-grid {
                         :grid-template-columns "1fr 1fr 1fr 1fr"
                         }]

           [:#board-wrapper {
                             :margin "0 auto"
                             }]

           [:.preview-square-20 {
                                 :height "20px"
                                 :width  "20px"
                                 }]

           [:.preview-square-27 {
                                 :height "27px"
                                 :width  "27px"
                                 }]

           [:.board-square {
                            :height     "100px"
                            :width      "100px"
                            :font-size  "80px"
                            :padding    "0"
                            :text-align "center"
                            }]

           [:.board-square:disabled {
                                     :background-color "rgba(138, 1, 138, 0.649)"
                                     }]

           [:.three-grid
            :.preview-square-20
            :.preview-square-27
            :.four-grid
            :.board-square {
                            :border "1px solid white"
                            }]

           [:.select-board-btn {
                                :display         "flex"
                                :align-items     "center"
                                :justify-content "space-evenly"
                                :font-size       "1.5rem"
                                :padding-right   "2rem"
                                }]

           )