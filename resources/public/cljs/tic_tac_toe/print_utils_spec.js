// Compiled by ClojureScript 1.11.132 {:optimizations :none}
goog.provide('tic_tac_toe.print_utils_spec');
goog.require('cljs.core');
goog.require('speclj.core');
goog.require('speclj.stub');
goog.require('tic_tac_toe.print_utils');
speclj.core.describe.call(null,"utility functions",speclj.core.with_stubs.call(null),(function (){var empty_3x3 = new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(3),(4),(5),(6),(7),(8),(9)], null);
var empty_4x4 = new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(3),(4),(5),(6),(7),(8),(9),(10),(11),(12),(13),(14),(15),(16)], null);
speclj.core.context.call(null,"display-invalid-move-error",speclj.core.it.call(null,"asks for a valid move",speclj.core.should_EQ_.call(null,"Please choose an empty cell\n",(function (){var sb__5647__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__18679_18820 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__18680_18821 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__18681_18822 = true;
var _STAR_print_fn_STAR__temp_val__18682_18823 = (function (x__5648__auto__){
return sb__5647__auto__.append(x__5648__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__18681_18822);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__18682_18823);

try{tic_tac_toe.print_utils.display_invalid_move_error.call(null);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__18680_18821);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__18679_18820);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5647__auto__);
})())));

speclj.core.context.call(null,"prompt-user-for-move",speclj.core.it.call(null,"asks user to input a move",speclj.core.should_EQ_.call(null,"Please enter your move (type 1-9 and hit enter):\n",(function (){var sb__5647__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__18687_18824 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__18688_18825 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__18689_18826 = true;
var _STAR_print_fn_STAR__temp_val__18690_18827 = (function (x__5648__auto__){
return sb__5647__auto__.append(x__5648__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__18689_18826);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__18690_18827);

try{tic_tac_toe.print_utils.prompt_user_for_move.call(null,new cljs.core.Keyword(null,"o","o",-1350007228),(2),empty_3x3);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__18688_18825);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__18687_18824);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5647__auto__);
})())),speclj.core.it.call(null,"says which player's turn it is if human vs human",speclj.core.should_EQ_.call(null,"O's turn!\nPlease enter your move (type 1-9 and hit enter):\n",(function (){var sb__5647__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__18691_18829 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__18692_18830 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__18693_18831 = true;
var _STAR_print_fn_STAR__temp_val__18694_18832 = (function (x__5648__auto__){
return sb__5647__auto__.append(x__5648__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__18693_18831);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__18694_18832);

try{tic_tac_toe.print_utils.prompt_user_for_move.call(null,new cljs.core.Keyword(null,"o","o",-1350007228),(1),empty_3x3);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__18692_18830);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__18691_18829);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5647__auto__);
})()),speclj.core.should_EQ_.call(null,"X's turn!\nPlease enter your move (type 1-9 and hit enter):\n",(function (){var sb__5647__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__18695_18833 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__18696_18834 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__18697_18835 = true;
var _STAR_print_fn_STAR__temp_val__18698_18836 = (function (x__5648__auto__){
return sb__5647__auto__.append(x__5648__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__18697_18835);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__18698_18836);

try{tic_tac_toe.print_utils.prompt_user_for_move.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(1),empty_3x3);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__18696_18834);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__18695_18833);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5647__auto__);
})())),speclj.core.it.call(null,"specifies 1-16 if board is 4x4",speclj.core.should_EQ_.call(null,"Please enter your move (type 1-16 and hit enter):\n",(function (){var sb__5647__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__18699_18837 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__18700_18838 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__18701_18839 = true;
var _STAR_print_fn_STAR__temp_val__18702_18840 = (function (x__5648__auto__){
return sb__5647__auto__.append(x__5648__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__18701_18839);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__18702_18840);

try{tic_tac_toe.print_utils.prompt_user_for_move.call(null,new cljs.core.Keyword(null,"o","o",-1350007228),(2),empty_4x4);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__18700_18838);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__18699_18837);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5647__auto__);
})()),speclj.core.should_EQ_.call(null,"O's turn!\nPlease enter your move (type 1-16 and hit enter):\n",(function (){var sb__5647__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__18703_18841 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__18704_18842 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__18705_18843 = true;
var _STAR_print_fn_STAR__temp_val__18706_18844 = (function (x__5648__auto__){
return sb__5647__auto__.append(x__5648__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__18705_18843);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__18706_18844);

try{tic_tac_toe.print_utils.prompt_user_for_move.call(null,new cljs.core.Keyword(null,"o","o",-1350007228),(1),empty_4x4);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__18704_18842);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__18703_18841);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5647__auto__);
})())));

speclj.core.context.call(null,"display-bot-thinking",speclj.core.it.call(null,"prints message to let the user know the computer is processing",speclj.core.should_EQ_.call(null,"Player X is thinking...",(function (){var sb__5647__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__18707_18848 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__18708_18849 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__18709_18850 = true;
var _STAR_print_fn_STAR__temp_val__18710_18851 = (function (x__5648__auto__){
return sb__5647__auto__.append(x__5648__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__18709_18850);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__18710_18851);

try{tic_tac_toe.print_utils.display_bot_thinking_message.call(null,new cljs.core.Keyword(null,"x","x",2099068185));
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__18708_18849);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__18707_18848);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5647__auto__);
})()),speclj.core.should_EQ_.call(null,"Player O is thinking...",(function (){var sb__5647__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__18715_18852 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__18716_18853 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__18717_18854 = true;
var _STAR_print_fn_STAR__temp_val__18718_18855 = (function (x__5648__auto__){
return sb__5647__auto__.append(x__5648__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__18717_18854);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__18718_18855);

try{tic_tac_toe.print_utils.display_bot_thinking_message.call(null,new cljs.core.Keyword(null,"o","o",-1350007228));
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__18716_18853);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__18715_18852);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5647__auto__);
})())));

speclj.core.context.call(null,"display-bot-move-message",speclj.core.it.call(null,"informs human of computer's move",speclj.core.should_EQ_.call(null,"Your opponent plays 5!\n",(function (){var sb__5647__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__18724_18858 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__18725_18859 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__18726_18860 = true;
var _STAR_print_fn_STAR__temp_val__18727_18861 = (function (x__5648__auto__){
return sb__5647__auto__.append(x__5648__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__18726_18860);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__18727_18861);

try{tic_tac_toe.print_utils.display_bot_move_message.call(null,(5),(2),new cljs.core.Keyword(null,"o","o",-1350007228));
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__18725_18859);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__18724_18858);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5647__auto__);
})())),speclj.core.it.call(null,"informs human of first AI's move",speclj.core.should_EQ_.call(null,"X plays 1!\n",(function (){var sb__5647__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__18728_18862 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__18729_18863 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__18730_18864 = true;
var _STAR_print_fn_STAR__temp_val__18731_18865 = (function (x__5648__auto__){
return sb__5647__auto__.append(x__5648__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__18730_18864);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__18731_18865);

try{tic_tac_toe.print_utils.display_bot_move_message.call(null,(1),(4),new cljs.core.Keyword(null,"x","x",2099068185));
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__18729_18863);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__18728_18862);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5647__auto__);
})())),speclj.core.it.call(null,"informs human of second AI's move",speclj.core.should_EQ_.call(null,"O plays 8!\n",(function (){var sb__5647__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__18735_18866 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__18736_18867 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__18737_18868 = true;
var _STAR_print_fn_STAR__temp_val__18738_18869 = (function (x__5648__auto__){
return sb__5647__auto__.append(x__5648__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__18737_18868);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__18738_18869);

try{tic_tac_toe.print_utils.display_bot_move_message.call(null,(8),(4),new cljs.core.Keyword(null,"o","o",-1350007228));
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__18736_18867);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__18735_18866);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5647__auto__);
})())));

return speclj.core.context.call(null,"print-board",speclj.core.it.call(null,"prints 3x3 board to the terminal",speclj.core.should_EQ_.call(null,[" ",tic_tac_toe.print_utils.purple,cljs.core.str.cljs$core$IFn$_invoke$arity$1((1)),tic_tac_toe.print_utils.reset,"  ",tic_tac_toe.print_utils.purple,cljs.core.str.cljs$core$IFn$_invoke$arity$1((2)),tic_tac_toe.print_utils.reset,"  ",tic_tac_toe.print_utils.purple,cljs.core.str.cljs$core$IFn$_invoke$arity$1((3)),tic_tac_toe.print_utils.reset,"\n"," ",tic_tac_toe.print_utils.purple,cljs.core.str.cljs$core$IFn$_invoke$arity$1((4)),tic_tac_toe.print_utils.reset,"  ",tic_tac_toe.print_utils.purple,cljs.core.str.cljs$core$IFn$_invoke$arity$1((5)),tic_tac_toe.print_utils.reset,"  ",tic_tac_toe.print_utils.purple,cljs.core.str.cljs$core$IFn$_invoke$arity$1((6)),tic_tac_toe.print_utils.reset,"\n"," ",tic_tac_toe.print_utils.purple,cljs.core.str.cljs$core$IFn$_invoke$arity$1((7)),tic_tac_toe.print_utils.reset,"  ",tic_tac_toe.print_utils.purple,cljs.core.str.cljs$core$IFn$_invoke$arity$1((8)),tic_tac_toe.print_utils.reset,"  ",tic_tac_toe.print_utils.purple,cljs.core.str.cljs$core$IFn$_invoke$arity$1((9)),tic_tac_toe.print_utils.reset,"\n\n"].join(''),(function (){var sb__5647__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__18744_18872 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__18745_18873 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__18746_18874 = true;
var _STAR_print_fn_STAR__temp_val__18747_18875 = (function (x__5648__auto__){
return sb__5647__auto__.append(x__5648__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__18746_18874);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__18747_18875);

try{tic_tac_toe.print_utils.print_board.call(null,empty_3x3);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__18745_18873);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__18744_18872);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5647__auto__);
})()),speclj.core.should_EQ_.call(null,[" ",tic_tac_toe.print_utils.purple,cljs.core.str.cljs$core$IFn$_invoke$arity$1((1)),tic_tac_toe.print_utils.reset,"  X  ",tic_tac_toe.print_utils.purple,cljs.core.str.cljs$core$IFn$_invoke$arity$1((3)),tic_tac_toe.print_utils.reset,"\n"," ",tic_tac_toe.print_utils.purple,cljs.core.str.cljs$core$IFn$_invoke$arity$1((4)),tic_tac_toe.print_utils.reset,"  O  ",tic_tac_toe.print_utils.purple,cljs.core.str.cljs$core$IFn$_invoke$arity$1((6)),tic_tac_toe.print_utils.reset,"\n"," O  ",tic_tac_toe.print_utils.purple,cljs.core.str.cljs$core$IFn$_invoke$arity$1((8)),tic_tac_toe.print_utils.reset,"  ",tic_tac_toe.print_utils.purple,cljs.core.str.cljs$core$IFn$_invoke$arity$1((9)),tic_tac_toe.print_utils.reset,"\n\n"].join(''),(function (){var sb__5647__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__18752_18879 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__18753_18880 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__18754_18881 = true;
var _STAR_print_fn_STAR__temp_val__18755_18882 = (function (x__5648__auto__){
return sb__5647__auto__.append(x__5648__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__18754_18881);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__18755_18882);

try{tic_tac_toe.print_utils.print_board.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),new cljs.core.Keyword(null,"x","x",2099068185),(3),(4),new cljs.core.Keyword(null,"o","o",-1350007228),(6),new cljs.core.Keyword(null,"o","o",-1350007228),(8),(9)], null));
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__18753_18880);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__18752_18879);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5647__auto__);
})())),speclj.core.it.call(null,"prints 4x4 board to the terminal",speclj.core.should_EQ_.call(null,[" ",tic_tac_toe.print_utils.purple,cljs.core.str.cljs$core$IFn$_invoke$arity$1((1)),tic_tac_toe.print_utils.reset,"  ",tic_tac_toe.print_utils.purple,cljs.core.str.cljs$core$IFn$_invoke$arity$1((2)),tic_tac_toe.print_utils.reset,"  ",tic_tac_toe.print_utils.purple,cljs.core.str.cljs$core$IFn$_invoke$arity$1((3)),tic_tac_toe.print_utils.reset,"  ",tic_tac_toe.print_utils.purple,cljs.core.str.cljs$core$IFn$_invoke$arity$1((4)),tic_tac_toe.print_utils.reset,"\n"," ",tic_tac_toe.print_utils.purple,cljs.core.str.cljs$core$IFn$_invoke$arity$1((5)),tic_tac_toe.print_utils.reset,"  ",tic_tac_toe.print_utils.purple,cljs.core.str.cljs$core$IFn$_invoke$arity$1((6)),tic_tac_toe.print_utils.reset,"  ",tic_tac_toe.print_utils.purple,cljs.core.str.cljs$core$IFn$_invoke$arity$1((7)),tic_tac_toe.print_utils.reset,"  ",tic_tac_toe.print_utils.purple,cljs.core.str.cljs$core$IFn$_invoke$arity$1((8)),tic_tac_toe.print_utils.reset,"\n"," ",tic_tac_toe.print_utils.purple,cljs.core.str.cljs$core$IFn$_invoke$arity$1((9)),tic_tac_toe.print_utils.reset," ",tic_tac_toe.print_utils.purple,cljs.core.str.cljs$core$IFn$_invoke$arity$1((10)),tic_tac_toe.print_utils.reset," ",tic_tac_toe.print_utils.purple,cljs.core.str.cljs$core$IFn$_invoke$arity$1((11)),tic_tac_toe.print_utils.reset," ",tic_tac_toe.print_utils.purple,cljs.core.str.cljs$core$IFn$_invoke$arity$1((12)),tic_tac_toe.print_utils.reset,"\n",tic_tac_toe.print_utils.purple,cljs.core.str.cljs$core$IFn$_invoke$arity$1((13)),tic_tac_toe.print_utils.reset," ",tic_tac_toe.print_utils.purple,cljs.core.str.cljs$core$IFn$_invoke$arity$1((14)),tic_tac_toe.print_utils.reset," ",tic_tac_toe.print_utils.purple,cljs.core.str.cljs$core$IFn$_invoke$arity$1((15)),tic_tac_toe.print_utils.reset," ",tic_tac_toe.print_utils.purple,cljs.core.str.cljs$core$IFn$_invoke$arity$1((16)),tic_tac_toe.print_utils.reset,"\n\n"].join(''),(function (){var sb__5647__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__18766_18883 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__18767_18884 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__18768_18885 = true;
var _STAR_print_fn_STAR__temp_val__18769_18886 = (function (x__5648__auto__){
return sb__5647__auto__.append(x__5648__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__18768_18885);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__18769_18886);

try{tic_tac_toe.print_utils.print_board.call(null,empty_4x4);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__18767_18884);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__18766_18883);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5647__auto__);
})()),speclj.core.should_EQ_.call(null,[" ",tic_tac_toe.print_utils.purple,cljs.core.str.cljs$core$IFn$_invoke$arity$1((1)),tic_tac_toe.print_utils.reset,"  X  ",tic_tac_toe.print_utils.purple,cljs.core.str.cljs$core$IFn$_invoke$arity$1((3)),tic_tac_toe.print_utils.reset,"  ",tic_tac_toe.print_utils.purple,cljs.core.str.cljs$core$IFn$_invoke$arity$1((4)),tic_tac_toe.print_utils.reset,"\n"," O  ",tic_tac_toe.print_utils.purple,cljs.core.str.cljs$core$IFn$_invoke$arity$1((6)),tic_tac_toe.print_utils.reset,"  O  ",tic_tac_toe.print_utils.purple,cljs.core.str.cljs$core$IFn$_invoke$arity$1((8)),tic_tac_toe.print_utils.reset,"\n"," X  X  O  O\n",tic_tac_toe.print_utils.purple,cljs.core.str.cljs$core$IFn$_invoke$arity$1((13)),tic_tac_toe.print_utils.reset,"  X  X  O\n\n"].join(''),(function (){var sb__5647__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__18777_18891 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__18778_18892 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__18779_18893 = true;
var _STAR_print_fn_STAR__temp_val__18780_18894 = (function (x__5648__auto__){
return sb__5647__auto__.append(x__5648__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__18779_18893);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__18780_18894);

try{tic_tac_toe.print_utils.print_board.call(null,new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),new cljs.core.Keyword(null,"x","x",2099068185),(3),(4),new cljs.core.Keyword(null,"o","o",-1350007228),(6),new cljs.core.Keyword(null,"o","o",-1350007228),(8),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"o","o",-1350007228),new cljs.core.Keyword(null,"o","o",-1350007228),(13),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"o","o",-1350007228)], null));
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__18778_18892);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__18777_18891);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5647__auto__);
})())),speclj.core.it.call(null,"prints 3x3x3 board to the terminal",speclj.core.should_EQ_.call(null,[" ",tic_tac_toe.print_utils.purple,cljs.core.str.cljs$core$IFn$_invoke$arity$1((1)),tic_tac_toe.print_utils.reset,"  ",tic_tac_toe.print_utils.purple,cljs.core.str.cljs$core$IFn$_invoke$arity$1((2)),tic_tac_toe.print_utils.reset,"  ",tic_tac_toe.print_utils.purple,cljs.core.str.cljs$core$IFn$_invoke$arity$1((3)),tic_tac_toe.print_utils.reset,"\n"," ",tic_tac_toe.print_utils.purple,cljs.core.str.cljs$core$IFn$_invoke$arity$1((4)),tic_tac_toe.print_utils.reset,"  ",tic_tac_toe.print_utils.purple,cljs.core.str.cljs$core$IFn$_invoke$arity$1((5)),tic_tac_toe.print_utils.reset,"  ",tic_tac_toe.print_utils.purple,cljs.core.str.cljs$core$IFn$_invoke$arity$1((6)),tic_tac_toe.print_utils.reset,"\n"," ",tic_tac_toe.print_utils.purple,cljs.core.str.cljs$core$IFn$_invoke$arity$1((7)),tic_tac_toe.print_utils.reset,"  ",tic_tac_toe.print_utils.purple,cljs.core.str.cljs$core$IFn$_invoke$arity$1((8)),tic_tac_toe.print_utils.reset,"  ",tic_tac_toe.print_utils.purple,cljs.core.str.cljs$core$IFn$_invoke$arity$1((9)),tic_tac_toe.print_utils.reset,"\n\n",tic_tac_toe.print_utils.purple,cljs.core.str.cljs$core$IFn$_invoke$arity$1((10)),tic_tac_toe.print_utils.reset," ",tic_tac_toe.print_utils.purple,cljs.core.str.cljs$core$IFn$_invoke$arity$1((11)),tic_tac_toe.print_utils.reset," ",tic_tac_toe.print_utils.purple,cljs.core.str.cljs$core$IFn$_invoke$arity$1((12)),tic_tac_toe.print_utils.reset,"\n",tic_tac_toe.print_utils.purple,cljs.core.str.cljs$core$IFn$_invoke$arity$1((13)),tic_tac_toe.print_utils.reset," ",tic_tac_toe.print_utils.purple,cljs.core.str.cljs$core$IFn$_invoke$arity$1((14)),tic_tac_toe.print_utils.reset," ",tic_tac_toe.print_utils.purple,cljs.core.str.cljs$core$IFn$_invoke$arity$1((15)),tic_tac_toe.print_utils.reset,"\n",tic_tac_toe.print_utils.purple,cljs.core.str.cljs$core$IFn$_invoke$arity$1((16)),tic_tac_toe.print_utils.reset," ",tic_tac_toe.print_utils.purple,cljs.core.str.cljs$core$IFn$_invoke$arity$1((17)),tic_tac_toe.print_utils.reset," ",tic_tac_toe.print_utils.purple,cljs.core.str.cljs$core$IFn$_invoke$arity$1((18)),tic_tac_toe.print_utils.reset,"\n\n",tic_tac_toe.print_utils.purple,cljs.core.str.cljs$core$IFn$_invoke$arity$1((19)),tic_tac_toe.print_utils.reset," ",tic_tac_toe.print_utils.purple,cljs.core.str.cljs$core$IFn$_invoke$arity$1((20)),tic_tac_toe.print_utils.reset," ",tic_tac_toe.print_utils.purple,cljs.core.str.cljs$core$IFn$_invoke$arity$1((21)),tic_tac_toe.print_utils.reset,"\n",tic_tac_toe.print_utils.purple,cljs.core.str.cljs$core$IFn$_invoke$arity$1((22)),tic_tac_toe.print_utils.reset," ",tic_tac_toe.print_utils.purple,cljs.core.str.cljs$core$IFn$_invoke$arity$1((23)),tic_tac_toe.print_utils.reset," ",tic_tac_toe.print_utils.purple,cljs.core.str.cljs$core$IFn$_invoke$arity$1((24)),tic_tac_toe.print_utils.reset,"\n",tic_tac_toe.print_utils.purple,cljs.core.str.cljs$core$IFn$_invoke$arity$1((25)),tic_tac_toe.print_utils.reset," ",tic_tac_toe.print_utils.purple,cljs.core.str.cljs$core$IFn$_invoke$arity$1((26)),tic_tac_toe.print_utils.reset," ",tic_tac_toe.print_utils.purple,cljs.core.str.cljs$core$IFn$_invoke$arity$1((27)),tic_tac_toe.print_utils.reset,"\n\n"].join(''),(function (){var sb__5647__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__18785_18895 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__18786_18896 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__18787_18897 = true;
var _STAR_print_fn_STAR__temp_val__18788_18898 = (function (x__5648__auto__){
return sb__5647__auto__.append(x__5648__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__18787_18897);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__18788_18898);

try{tic_tac_toe.print_utils.print_board.call(null,cljs.core.range.call(null,(1),(28)));
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__18786_18896);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__18785_18895);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5647__auto__);
})())));
})(),speclj.core.context.call(null,"play-logged-game",speclj.core.it.call(null,"prints error message if there are no moves",speclj.core.should_EQ_.call(null,"There are no moves to show for this game.\n",(function (){var sb__5647__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__18793_18900 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__18794_18901 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__18795_18902 = true;
var _STAR_print_fn_STAR__temp_val__18796_18903 = (function (x__5648__auto__){
return sb__5647__auto__.append(x__5648__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__18795_18902);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__18796_18903);

try{tic_tac_toe.print_utils.play_logged_game.call(null,cljs.core.PersistentVector.EMPTY,null);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__18794_18901);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__18793_18900);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5647__auto__);
})()),speclj.core.should_EQ_.call(null,"There are no moves to show for this game.\n",(function (){var sb__5647__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__18798_18905 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__18799_18906 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__18800_18907 = true;
var _STAR_print_fn_STAR__temp_val__18801_18908 = (function (x__5648__auto__){
return sb__5647__auto__.append(x__5648__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__18800_18907);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__18801_18908);

try{tic_tac_toe.print_utils.play_logged_game.call(null,null,null);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__18799_18906);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__18798_18905);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5647__auto__);
})())),speclj.core.it.call(null,"prints each move to the console in order followed by winner",(function (){var print_board_orig_val__18802 = tic_tac_toe.print_utils.print_board;
var println_orig_val__18803 = cljs.core.println;
var print_board_temp_val__18804 = speclj.core.stub.call(null,new cljs.core.Keyword(null,"print-board","print-board",1861954072));
var println_temp_val__18805 = speclj.core.stub.call(null,new cljs.core.Keyword(null,"println","println",1920840330));
(tic_tac_toe.print_utils.print_board = print_board_temp_val__18804);

(cljs.core.println = println_temp_val__18805);

try{tic_tac_toe.print_utils.play_logged_game.call(null,cljs.core.list(new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(3),(4),new cljs.core.Keyword(null,"x","x",2099068185),(6),(7),(8),(9)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"o","o",-1350007228),(2),(3),(4),new cljs.core.Keyword(null,"x","x",2099068185),(6),(7),(8),(9)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"o","o",-1350007228),(2),(3),(4),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"x","x",2099068185),(7),(8),(9)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"o","o",-1350007228),(2),(3),new cljs.core.Keyword(null,"o","o",-1350007228),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"x","x",2099068185),(7),(8),(9)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"o","o",-1350007228),(2),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"o","o",-1350007228),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"x","x",2099068185),(7),(8),(9)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"o","o",-1350007228),(2),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"o","o",-1350007228),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"o","o",-1350007228),(8),(9)], null)),"O wins!");

speclj.core.should_EQ_.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(3),(4),new cljs.core.Keyword(null,"x","x",2099068185),(6),(7),(8),(9)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"o","o",-1350007228),(2),(3),(4),new cljs.core.Keyword(null,"x","x",2099068185),(6),(7),(8),(9)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"o","o",-1350007228),(2),(3),(4),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"x","x",2099068185),(7),(8),(9)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"o","o",-1350007228),(2),(3),new cljs.core.Keyword(null,"o","o",-1350007228),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"x","x",2099068185),(7),(8),(9)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"o","o",-1350007228),(2),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"o","o",-1350007228),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"x","x",2099068185),(7),(8),(9)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"o","o",-1350007228),(2),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"o","o",-1350007228),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"o","o",-1350007228),(8),(9)], null)], null)], null),speclj.stub.invocations_of.call(null,new cljs.core.Keyword(null,"print-board","print-board",1861954072)));

return speclj.core.should_have_invoked.call(null,new cljs.core.Keyword(null,"println","println",1920840330),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"with","with",-1536296876),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["O wins!"], null)], null));
}finally {(cljs.core.println = println_orig_val__18803);

(tic_tac_toe.print_utils.print_board = print_board_orig_val__18802);
}})())),speclj.core.it.call(null,"shows error message when psql game is incomplete and can't be replayed",speclj.core.should_EQ_.call(null,"The requested game is unfinished. Please choose a completed game to replay.\n",(function (){var sb__5647__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__18806_18909 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__18807_18910 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__18808_18911 = true;
var _STAR_print_fn_STAR__temp_val__18809_18912 = (function (x__5648__auto__){
return sb__5647__auto__.append(x__5648__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__18808_18911);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__18809_18912);

try{tic_tac_toe.print_utils.display_unfinished_game_error.call(null);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__18807_18910);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__18806_18909);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5647__auto__);
})())),speclj.core.it.call(null,"shows error message when game id is invalid",speclj.core.should_EQ_.call(null,"There is no game with ID 20\n",(function (){var sb__5647__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__18811_18913 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__18812_18914 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__18813_18915 = true;
var _STAR_print_fn_STAR__temp_val__18814_18916 = (function (x__5648__auto__){
return sb__5647__auto__.append(x__5648__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__18813_18915);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__18814_18916);

try{tic_tac_toe.print_utils.display_invalid_game_id_error.call(null,(20));
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__18812_18914);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__18811_18913);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5647__auto__);
})())),speclj.core.it.call(null,"displays command options to user",(function (){var println_orig_val__18816 = cljs.core.println;
var println_temp_val__18817 = speclj.core.stub.call(null,new cljs.core.Keyword(null,"println","println",1920840330));
(cljs.core.println = println_temp_val__18817);

try{tic_tac_toe.print_utils.display_command_options.call(null);

return speclj.core.should_EQ_.call(null,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Please enter your preferences:"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Format: 'lein run <ui> <db> <game id>"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["<db> is the only required field\n"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["--psqldb         Run with PostgreSQL"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["--edndb         Run with EDN Database"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["gui             Run GUI"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["--game <id>     Run GUI"], null)], null),speclj.stub.invocations_of.call(null,new cljs.core.Keyword(null,"println","println",1920840330)));
}finally {(cljs.core.println = println_orig_val__18816);
}})()));

//# sourceMappingURL=print_utils_spec.js.map
