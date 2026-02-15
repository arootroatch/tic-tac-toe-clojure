// Compiled by ClojureScript 1.11.132 {:optimizations :none}
goog.provide('speclj.reporting');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('goog.string');
goog.require('speclj.config');
goog.require('speclj.platform');
goog.require('speclj.results');
speclj.reporting.tally_time = (function speclj$reporting$tally_time(results){
return cljs.core.apply.call(null,cljs.core._PLUS_,cljs.core.map.call(null,(function (p1__20686_SHARP_){
return p1__20686_SHARP_.seconds;
}),results));
});

/**
 * @interface
 */
speclj.reporting.Reporter = function(){};

var speclj$reporting$Reporter$report_message$dyn_20691 = (function (reporter,message){
var x__5350__auto__ = (((reporter == null))?null:reporter);
var m__5351__auto__ = (speclj.reporting.report_message[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return m__5351__auto__.call(null,reporter,message);
} else {
var m__5349__auto__ = (speclj.reporting.report_message["_"]);
if((!((m__5349__auto__ == null)))){
return m__5349__auto__.call(null,reporter,message);
} else {
throw cljs.core.missing_protocol.call(null,"Reporter.report-message",reporter);
}
}
});
speclj.reporting.report_message = (function speclj$reporting$report_message(reporter,message){
if((((!((reporter == null)))) && ((!((reporter.speclj$reporting$Reporter$report_message$arity$2 == null)))))){
return reporter.speclj$reporting$Reporter$report_message$arity$2(reporter,message);
} else {
return speclj$reporting$Reporter$report_message$dyn_20691.call(null,reporter,message);
}
});

var speclj$reporting$Reporter$report_description$dyn_20692 = (function (this$,description){
var x__5350__auto__ = (((this$ == null))?null:this$);
var m__5351__auto__ = (speclj.reporting.report_description[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return m__5351__auto__.call(null,this$,description);
} else {
var m__5349__auto__ = (speclj.reporting.report_description["_"]);
if((!((m__5349__auto__ == null)))){
return m__5349__auto__.call(null,this$,description);
} else {
throw cljs.core.missing_protocol.call(null,"Reporter.report-description",this$);
}
}
});
speclj.reporting.report_description = (function speclj$reporting$report_description(this$,description){
if((((!((this$ == null)))) && ((!((this$.speclj$reporting$Reporter$report_description$arity$2 == null)))))){
return this$.speclj$reporting$Reporter$report_description$arity$2(this$,description);
} else {
return speclj$reporting$Reporter$report_description$dyn_20692.call(null,this$,description);
}
});

var speclj$reporting$Reporter$report_pass$dyn_20697 = (function (this$,result){
var x__5350__auto__ = (((this$ == null))?null:this$);
var m__5351__auto__ = (speclj.reporting.report_pass[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return m__5351__auto__.call(null,this$,result);
} else {
var m__5349__auto__ = (speclj.reporting.report_pass["_"]);
if((!((m__5349__auto__ == null)))){
return m__5349__auto__.call(null,this$,result);
} else {
throw cljs.core.missing_protocol.call(null,"Reporter.report-pass",this$);
}
}
});
speclj.reporting.report_pass = (function speclj$reporting$report_pass(this$,result){
if((((!((this$ == null)))) && ((!((this$.speclj$reporting$Reporter$report_pass$arity$2 == null)))))){
return this$.speclj$reporting$Reporter$report_pass$arity$2(this$,result);
} else {
return speclj$reporting$Reporter$report_pass$dyn_20697.call(null,this$,result);
}
});

var speclj$reporting$Reporter$report_pending$dyn_20698 = (function (this$,result){
var x__5350__auto__ = (((this$ == null))?null:this$);
var m__5351__auto__ = (speclj.reporting.report_pending[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return m__5351__auto__.call(null,this$,result);
} else {
var m__5349__auto__ = (speclj.reporting.report_pending["_"]);
if((!((m__5349__auto__ == null)))){
return m__5349__auto__.call(null,this$,result);
} else {
throw cljs.core.missing_protocol.call(null,"Reporter.report-pending",this$);
}
}
});
speclj.reporting.report_pending = (function speclj$reporting$report_pending(this$,result){
if((((!((this$ == null)))) && ((!((this$.speclj$reporting$Reporter$report_pending$arity$2 == null)))))){
return this$.speclj$reporting$Reporter$report_pending$arity$2(this$,result);
} else {
return speclj$reporting$Reporter$report_pending$dyn_20698.call(null,this$,result);
}
});

var speclj$reporting$Reporter$report_fail$dyn_20699 = (function (this$,result){
var x__5350__auto__ = (((this$ == null))?null:this$);
var m__5351__auto__ = (speclj.reporting.report_fail[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return m__5351__auto__.call(null,this$,result);
} else {
var m__5349__auto__ = (speclj.reporting.report_fail["_"]);
if((!((m__5349__auto__ == null)))){
return m__5349__auto__.call(null,this$,result);
} else {
throw cljs.core.missing_protocol.call(null,"Reporter.report-fail",this$);
}
}
});
speclj.reporting.report_fail = (function speclj$reporting$report_fail(this$,result){
if((((!((this$ == null)))) && ((!((this$.speclj$reporting$Reporter$report_fail$arity$2 == null)))))){
return this$.speclj$reporting$Reporter$report_fail$arity$2(this$,result);
} else {
return speclj$reporting$Reporter$report_fail$dyn_20699.call(null,this$,result);
}
});

var speclj$reporting$Reporter$report_runs$dyn_20700 = (function (this$,results){
var x__5350__auto__ = (((this$ == null))?null:this$);
var m__5351__auto__ = (speclj.reporting.report_runs[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return m__5351__auto__.call(null,this$,results);
} else {
var m__5349__auto__ = (speclj.reporting.report_runs["_"]);
if((!((m__5349__auto__ == null)))){
return m__5349__auto__.call(null,this$,results);
} else {
throw cljs.core.missing_protocol.call(null,"Reporter.report-runs",this$);
}
}
});
speclj.reporting.report_runs = (function speclj$reporting$report_runs(this$,results){
if((((!((this$ == null)))) && ((!((this$.speclj$reporting$Reporter$report_runs$arity$2 == null)))))){
return this$.speclj$reporting$Reporter$report_runs$arity$2(this$,results);
} else {
return speclj$reporting$Reporter$report_runs$dyn_20700.call(null,this$,results);
}
});

var speclj$reporting$Reporter$report_error$dyn_20705 = (function (this$,exception){
var x__5350__auto__ = (((this$ == null))?null:this$);
var m__5351__auto__ = (speclj.reporting.report_error[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return m__5351__auto__.call(null,this$,exception);
} else {
var m__5349__auto__ = (speclj.reporting.report_error["_"]);
if((!((m__5349__auto__ == null)))){
return m__5349__auto__.call(null,this$,exception);
} else {
throw cljs.core.missing_protocol.call(null,"Reporter.report-error",this$);
}
}
});
speclj.reporting.report_error = (function speclj$reporting$report_error(this$,exception){
if((((!((this$ == null)))) && ((!((this$.speclj$reporting$Reporter$report_error$arity$2 == null)))))){
return this$.speclj$reporting$Reporter$report_error$arity$2(this$,exception);
} else {
return speclj$reporting$Reporter$report_error$dyn_20705.call(null,this$,exception);
}
});

if((typeof speclj !== 'undefined') && (typeof speclj.reporting !== 'undefined') && (typeof speclj.reporting.report_run !== 'undefined')){
} else {
speclj.reporting.report_run = (function (){var method_table__5599__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5600__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5601__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5602__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5603__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"speclj.reporting","report-run"),(function (result,reporters){
return cljs.core.type.call(null,result);
}),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5603__auto__,method_table__5599__auto__,prefer_table__5600__auto__,method_cache__5601__auto__,cached_hierarchy__5602__auto__));
})();
}
cljs.core._add_method.call(null,speclj.reporting.report_run,speclj.results.PassResult,(function (result,reporters){
var seq__20693 = cljs.core.seq.call(null,reporters);
var chunk__20694 = null;
var count__20695 = (0);
var i__20696 = (0);
while(true){
if((i__20696 < count__20695)){
var reporter = cljs.core._nth.call(null,chunk__20694,i__20696);
speclj.reporting.report_pass.call(null,reporter,result);


var G__20714 = seq__20693;
var G__20715 = chunk__20694;
var G__20716 = count__20695;
var G__20717 = (i__20696 + (1));
seq__20693 = G__20714;
chunk__20694 = G__20715;
count__20695 = G__20716;
i__20696 = G__20717;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__20693);
if(temp__5804__auto__){
var seq__20693__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20693__$1)){
var c__5525__auto__ = cljs.core.chunk_first.call(null,seq__20693__$1);
var G__20718 = cljs.core.chunk_rest.call(null,seq__20693__$1);
var G__20719 = c__5525__auto__;
var G__20720 = cljs.core.count.call(null,c__5525__auto__);
var G__20721 = (0);
seq__20693 = G__20718;
chunk__20694 = G__20719;
count__20695 = G__20720;
i__20696 = G__20721;
continue;
} else {
var reporter = cljs.core.first.call(null,seq__20693__$1);
speclj.reporting.report_pass.call(null,reporter,result);


var G__20722 = cljs.core.next.call(null,seq__20693__$1);
var G__20723 = null;
var G__20724 = (0);
var G__20725 = (0);
seq__20693 = G__20722;
chunk__20694 = G__20723;
count__20695 = G__20724;
i__20696 = G__20725;
continue;
}
} else {
return null;
}
}
break;
}
}));
cljs.core._add_method.call(null,speclj.reporting.report_run,speclj.results.FailResult,(function (result,reporters){
var seq__20701 = cljs.core.seq.call(null,reporters);
var chunk__20702 = null;
var count__20703 = (0);
var i__20704 = (0);
while(true){
if((i__20704 < count__20703)){
var reporter = cljs.core._nth.call(null,chunk__20702,i__20704);
speclj.reporting.report_fail.call(null,reporter,result);


var G__20726 = seq__20701;
var G__20727 = chunk__20702;
var G__20728 = count__20703;
var G__20729 = (i__20704 + (1));
seq__20701 = G__20726;
chunk__20702 = G__20727;
count__20703 = G__20728;
i__20704 = G__20729;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__20701);
if(temp__5804__auto__){
var seq__20701__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20701__$1)){
var c__5525__auto__ = cljs.core.chunk_first.call(null,seq__20701__$1);
var G__20730 = cljs.core.chunk_rest.call(null,seq__20701__$1);
var G__20731 = c__5525__auto__;
var G__20732 = cljs.core.count.call(null,c__5525__auto__);
var G__20733 = (0);
seq__20701 = G__20730;
chunk__20702 = G__20731;
count__20703 = G__20732;
i__20704 = G__20733;
continue;
} else {
var reporter = cljs.core.first.call(null,seq__20701__$1);
speclj.reporting.report_fail.call(null,reporter,result);


var G__20734 = cljs.core.next.call(null,seq__20701__$1);
var G__20735 = null;
var G__20736 = (0);
var G__20737 = (0);
seq__20701 = G__20734;
chunk__20702 = G__20735;
count__20703 = G__20736;
i__20704 = G__20737;
continue;
}
} else {
return null;
}
}
break;
}
}));
cljs.core._add_method.call(null,speclj.reporting.report_run,speclj.results.PendingResult,(function (result,reporters){
var seq__20706 = cljs.core.seq.call(null,reporters);
var chunk__20707 = null;
var count__20708 = (0);
var i__20709 = (0);
while(true){
if((i__20709 < count__20708)){
var reporter = cljs.core._nth.call(null,chunk__20707,i__20709);
speclj.reporting.report_pending.call(null,reporter,result);


var G__20742 = seq__20706;
var G__20743 = chunk__20707;
var G__20744 = count__20708;
var G__20745 = (i__20709 + (1));
seq__20706 = G__20742;
chunk__20707 = G__20743;
count__20708 = G__20744;
i__20709 = G__20745;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__20706);
if(temp__5804__auto__){
var seq__20706__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20706__$1)){
var c__5525__auto__ = cljs.core.chunk_first.call(null,seq__20706__$1);
var G__20746 = cljs.core.chunk_rest.call(null,seq__20706__$1);
var G__20747 = c__5525__auto__;
var G__20748 = cljs.core.count.call(null,c__5525__auto__);
var G__20749 = (0);
seq__20706 = G__20746;
chunk__20707 = G__20747;
count__20708 = G__20748;
i__20709 = G__20749;
continue;
} else {
var reporter = cljs.core.first.call(null,seq__20706__$1);
speclj.reporting.report_pending.call(null,reporter,result);


var G__20750 = cljs.core.next.call(null,seq__20706__$1);
var G__20751 = null;
var G__20752 = (0);
var G__20753 = (0);
seq__20706 = G__20750;
chunk__20707 = G__20751;
count__20708 = G__20752;
i__20709 = G__20753;
continue;
}
} else {
return null;
}
}
break;
}
}));
cljs.core._add_method.call(null,speclj.reporting.report_run,speclj.results.ErrorResult,(function (result,reporters){
var seq__20738 = cljs.core.seq.call(null,reporters);
var chunk__20739 = null;
var count__20740 = (0);
var i__20741 = (0);
while(true){
if((i__20741 < count__20740)){
var reporter = cljs.core._nth.call(null,chunk__20739,i__20741);
speclj.reporting.report_error.call(null,reporter,result);


var G__20755 = seq__20738;
var G__20756 = chunk__20739;
var G__20757 = count__20740;
var G__20758 = (i__20741 + (1));
seq__20738 = G__20755;
chunk__20739 = G__20756;
count__20740 = G__20757;
i__20741 = G__20758;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__20738);
if(temp__5804__auto__){
var seq__20738__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20738__$1)){
var c__5525__auto__ = cljs.core.chunk_first.call(null,seq__20738__$1);
var G__20759 = cljs.core.chunk_rest.call(null,seq__20738__$1);
var G__20760 = c__5525__auto__;
var G__20761 = cljs.core.count.call(null,c__5525__auto__);
var G__20762 = (0);
seq__20738 = G__20759;
chunk__20739 = G__20760;
count__20740 = G__20761;
i__20741 = G__20762;
continue;
} else {
var reporter = cljs.core.first.call(null,seq__20738__$1);
speclj.reporting.report_error.call(null,reporter,result);


var G__20763 = cljs.core.next.call(null,seq__20738__$1);
var G__20764 = null;
var G__20765 = (0);
var G__20766 = (0);
seq__20738 = G__20763;
chunk__20739 = G__20764;
count__20740 = G__20765;
i__20741 = G__20766;
continue;
}
} else {
return null;
}
}
break;
}
}));
speclj.reporting.stylizer = (function speclj$reporting$stylizer(code){
return (function (text){
if(cljs.core.truth_(speclj.config._STAR_color_QMARK__STAR_)){
return ["\u001B[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(code),"m",cljs.core.str.cljs$core$IFn$_invoke$arity$1(text),"\u001B[0m"].join('');
} else {
return text;
}
});
});
speclj.reporting.red = speclj.reporting.stylizer.call(null,"31");
speclj.reporting.green = speclj.reporting.stylizer.call(null,"32");
speclj.reporting.yellow = speclj.reporting.stylizer.call(null,"33");
speclj.reporting.grey = speclj.reporting.stylizer.call(null,"90");
speclj.reporting.print_elides = (function speclj$reporting$print_elides(n){
if((n > (0))){
return cljs.core.println.call(null,"\t...",n,"stack levels elided ...");
} else {
return null;
}
});
speclj.reporting.print_stack_levels = (function speclj$reporting$print_stack_levels(exception){
var levels_20767 = speclj.platform.stack_trace.call(null,exception);
var elides_20768 = (0);
while(true){
if(cljs.core.seq.call(null,levels_20767)){
var level_20769 = cljs.core.first.call(null,levels_20767);
if(speclj.platform.elide_level_QMARK_.call(null,level_20769)){
var G__20770 = cljs.core.rest.call(null,levels_20767);
var G__20771 = (elides_20768 + (1));
levels_20767 = G__20770;
elides_20768 = G__20771;
continue;
} else {
speclj.reporting.print_elides.call(null,elides_20768);

cljs.core.println.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(level_20769));

var G__20772 = cljs.core.rest.call(null,levels_20767);
var G__20773 = (0);
levels_20767 = G__20772;
elides_20768 = G__20773;
continue;
}
} else {
speclj.reporting.print_elides.call(null,elides_20768);
}
break;
}

var temp__5802__auto__ = speclj.platform.cause.call(null,exception);
if(cljs.core.truth_(temp__5802__auto__)){
var cause = temp__5802__auto__;
return speclj.reporting.print_exception.call(null,"Caused by:",cause);
} else {
return null;
}
});
speclj.reporting.print_exception = (function speclj$reporting$print_exception(prefix,exception){
if(cljs.core.truth_(prefix)){
cljs.core.println.call(null,prefix,cljs.core.str.cljs$core$IFn$_invoke$arity$1(exception));
} else {
cljs.core.println.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(exception));
}

return speclj.reporting.print_stack_levels.call(null,exception);
});
speclj.reporting.stack_trace_str = (function speclj$reporting$stack_trace_str(exception){
var sb__5647__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__20774_20780 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__20775_20782 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__20776_20783 = true;
var _STAR_print_fn_STAR__temp_val__20777_20784 = (function (x__5648__auto__){
return sb__5647__auto__.append(x__5648__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__20776_20783);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__20777_20784);

try{if(cljs.core.truth_(speclj.config._STAR_full_stack_trace_QMARK__STAR_)){
speclj.platform.print_stack_trace.call(null,exception);
} else {
speclj.reporting.print_exception.call(null,null,exception);
}
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__20775_20782);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__20774_20780);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5647__auto__);
});
speclj.reporting.prefix = (function speclj$reporting$prefix(var_args){
var args__5732__auto__ = [];
var len__5726__auto___20787 = arguments.length;
var i__5727__auto___20788 = (0);
while(true){
if((i__5727__auto___20788 < len__5726__auto___20787)){
args__5732__auto__.push((arguments[i__5727__auto___20788]));

var G__20789 = (i__5727__auto___20788 + (1));
i__5727__auto___20788 = G__20789;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return speclj.reporting.prefix.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(speclj.reporting.prefix.cljs$core$IFn$_invoke$arity$variadic = (function (pre,args){
var value = cljs.core.apply.call(null,cljs.core.str,args);
var lines = clojure.string.split.call(null,value,/[\r\n]+/);
var prefixed_lines = cljs.core.map.call(null,(function (p1__20778_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(pre),cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__20778_SHARP_)].join('');
}),lines);
return clojure.string.join.call(null,speclj.platform.endl,prefixed_lines);
}));

(speclj.reporting.prefix.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(speclj.reporting.prefix.cljs$lang$applyTo = (function (seq20779){
var G__20781 = cljs.core.first.call(null,seq20779);
var seq20779__$1 = cljs.core.next.call(null,seq20779);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__20781,seq20779__$1);
}));

speclj.reporting.indent = (function speclj$reporting$indent(var_args){
var args__5732__auto__ = [];
var len__5726__auto___20794 = arguments.length;
var i__5727__auto___20795 = (0);
while(true){
if((i__5727__auto___20795 < len__5726__auto___20794)){
args__5732__auto__.push((arguments[i__5727__auto___20795]));

var G__20796 = (i__5727__auto___20795 + (1));
i__5727__auto___20795 = G__20796;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return speclj.reporting.indent.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(speclj.reporting.indent.cljs$core$IFn$_invoke$arity$variadic = (function (n,args){
var spaces = ((n * 2.0) | (0));
var indention = cljs.core.reduce.call(null,(function (p,_){
return [" ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p)].join('');
}),"",cljs.core.range.call(null,spaces));
return cljs.core.apply.call(null,speclj.reporting.prefix,indention,args);
}));

(speclj.reporting.indent.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(speclj.reporting.indent.cljs$lang$applyTo = (function (seq20785){
var G__20786 = cljs.core.first.call(null,seq20785);
var seq20785__$1 = cljs.core.next.call(null,seq20785);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__20786,seq20785__$1);
}));

speclj.reporting.report_description_STAR_ = (function speclj$reporting$report_description_STAR_(reporters,description){
var seq__20790 = cljs.core.seq.call(null,reporters);
var chunk__20791 = null;
var count__20792 = (0);
var i__20793 = (0);
while(true){
if((i__20793 < count__20792)){
var reporter = cljs.core._nth.call(null,chunk__20791,i__20793);
speclj.reporting.report_description.call(null,reporter,description);


var G__20801 = seq__20790;
var G__20802 = chunk__20791;
var G__20803 = count__20792;
var G__20804 = (i__20793 + (1));
seq__20790 = G__20801;
chunk__20791 = G__20802;
count__20792 = G__20803;
i__20793 = G__20804;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__20790);
if(temp__5804__auto__){
var seq__20790__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20790__$1)){
var c__5525__auto__ = cljs.core.chunk_first.call(null,seq__20790__$1);
var G__20805 = cljs.core.chunk_rest.call(null,seq__20790__$1);
var G__20806 = c__5525__auto__;
var G__20807 = cljs.core.count.call(null,c__5525__auto__);
var G__20808 = (0);
seq__20790 = G__20805;
chunk__20791 = G__20806;
count__20792 = G__20807;
i__20793 = G__20808;
continue;
} else {
var reporter = cljs.core.first.call(null,seq__20790__$1);
speclj.reporting.report_description.call(null,reporter,description);


var G__20809 = cljs.core.next.call(null,seq__20790__$1);
var G__20810 = null;
var G__20811 = (0);
var G__20812 = (0);
seq__20790 = G__20809;
chunk__20791 = G__20810;
count__20792 = G__20811;
i__20793 = G__20812;
continue;
}
} else {
return null;
}
}
break;
}
});
speclj.reporting.report_runs_STAR_ = (function speclj$reporting$report_runs_STAR_(reporters,results){
var seq__20797 = cljs.core.seq.call(null,reporters);
var chunk__20798 = null;
var count__20799 = (0);
var i__20800 = (0);
while(true){
if((i__20800 < count__20799)){
var reporter = cljs.core._nth.call(null,chunk__20798,i__20800);
speclj.reporting.report_runs.call(null,reporter,results);


var G__20817 = seq__20797;
var G__20818 = chunk__20798;
var G__20819 = count__20799;
var G__20820 = (i__20800 + (1));
seq__20797 = G__20817;
chunk__20798 = G__20818;
count__20799 = G__20819;
i__20800 = G__20820;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__20797);
if(temp__5804__auto__){
var seq__20797__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20797__$1)){
var c__5525__auto__ = cljs.core.chunk_first.call(null,seq__20797__$1);
var G__20821 = cljs.core.chunk_rest.call(null,seq__20797__$1);
var G__20822 = c__5525__auto__;
var G__20823 = cljs.core.count.call(null,c__5525__auto__);
var G__20824 = (0);
seq__20797 = G__20821;
chunk__20798 = G__20822;
count__20799 = G__20823;
i__20800 = G__20824;
continue;
} else {
var reporter = cljs.core.first.call(null,seq__20797__$1);
speclj.reporting.report_runs.call(null,reporter,results);


var G__20825 = cljs.core.next.call(null,seq__20797__$1);
var G__20826 = null;
var G__20827 = (0);
var G__20828 = (0);
seq__20797 = G__20825;
chunk__20798 = G__20826;
count__20799 = G__20827;
i__20800 = G__20828;
continue;
}
} else {
return null;
}
}
break;
}
});
speclj.reporting.report_message_STAR_ = (function speclj$reporting$report_message_STAR_(reporters,message){
var seq__20813 = cljs.core.seq.call(null,reporters);
var chunk__20814 = null;
var count__20815 = (0);
var i__20816 = (0);
while(true){
if((i__20816 < count__20815)){
var reporter = cljs.core._nth.call(null,chunk__20814,i__20816);
speclj.reporting.report_message.call(null,reporter,message);


var G__20833 = seq__20813;
var G__20834 = chunk__20814;
var G__20835 = count__20815;
var G__20836 = (i__20816 + (1));
seq__20813 = G__20833;
chunk__20814 = G__20834;
count__20815 = G__20835;
i__20816 = G__20836;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__20813);
if(temp__5804__auto__){
var seq__20813__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20813__$1)){
var c__5525__auto__ = cljs.core.chunk_first.call(null,seq__20813__$1);
var G__20837 = cljs.core.chunk_rest.call(null,seq__20813__$1);
var G__20838 = c__5525__auto__;
var G__20839 = cljs.core.count.call(null,c__5525__auto__);
var G__20840 = (0);
seq__20813 = G__20837;
chunk__20814 = G__20838;
count__20815 = G__20839;
i__20816 = G__20840;
continue;
} else {
var reporter = cljs.core.first.call(null,seq__20813__$1);
speclj.reporting.report_message.call(null,reporter,message);


var G__20841 = cljs.core.next.call(null,seq__20813__$1);
var G__20842 = null;
var G__20843 = (0);
var G__20844 = (0);
seq__20813 = G__20841;
chunk__20814 = G__20842;
count__20815 = G__20843;
i__20816 = G__20844;
continue;
}
} else {
return null;
}
}
break;
}
});
speclj.reporting.report_error_STAR_ = (function speclj$reporting$report_error_STAR_(reporters,exception){
var seq__20829 = cljs.core.seq.call(null,reporters);
var chunk__20830 = null;
var count__20831 = (0);
var i__20832 = (0);
while(true){
if((i__20832 < count__20831)){
var reporter = cljs.core._nth.call(null,chunk__20830,i__20832);
speclj.reporting.report_error.call(null,reporter,exception);


var G__20846 = seq__20829;
var G__20847 = chunk__20830;
var G__20848 = count__20831;
var G__20849 = (i__20832 + (1));
seq__20829 = G__20846;
chunk__20830 = G__20847;
count__20831 = G__20848;
i__20832 = G__20849;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__20829);
if(temp__5804__auto__){
var seq__20829__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20829__$1)){
var c__5525__auto__ = cljs.core.chunk_first.call(null,seq__20829__$1);
var G__20851 = cljs.core.chunk_rest.call(null,seq__20829__$1);
var G__20852 = c__5525__auto__;
var G__20853 = cljs.core.count.call(null,c__5525__auto__);
var G__20854 = (0);
seq__20829 = G__20851;
chunk__20830 = G__20852;
count__20831 = G__20853;
i__20832 = G__20854;
continue;
} else {
var reporter = cljs.core.first.call(null,seq__20829__$1);
speclj.reporting.report_error.call(null,reporter,exception);


var G__20855 = cljs.core.next.call(null,seq__20829__$1);
var G__20856 = null;
var G__20857 = (0);
var G__20858 = (0);
seq__20829 = G__20855;
chunk__20830 = G__20856;
count__20831 = G__20857;
i__20832 = G__20858;
continue;
}
} else {
return null;
}
}
break;
}
});

//# sourceMappingURL=reporting.js.map
