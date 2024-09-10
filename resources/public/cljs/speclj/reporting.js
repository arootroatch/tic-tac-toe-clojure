// Compiled by ClojureScript 1.11.132 {:optimizations :none}
goog.provide('speclj.reporting');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('goog.string');
goog.require('speclj.config');
goog.require('speclj.platform');
goog.require('speclj.results');
speclj.reporting.tally_time = (function speclj$reporting$tally_time(results){
return cljs.core.apply.call(null,cljs.core._PLUS_,cljs.core.map.call(null,(function (p1__16350_SHARP_){
return p1__16350_SHARP_.seconds;
}),results));
});

/**
 * @interface
 */
speclj.reporting.Reporter = function(){};

var speclj$reporting$Reporter$report_message$dyn_16358 = (function (reporter,message){
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
return speclj$reporting$Reporter$report_message$dyn_16358.call(null,reporter,message);
}
});

var speclj$reporting$Reporter$report_description$dyn_16359 = (function (this$,description){
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
return speclj$reporting$Reporter$report_description$dyn_16359.call(null,this$,description);
}
});

var speclj$reporting$Reporter$report_pass$dyn_16364 = (function (this$,result){
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
return speclj$reporting$Reporter$report_pass$dyn_16364.call(null,this$,result);
}
});

var speclj$reporting$Reporter$report_pending$dyn_16369 = (function (this$,result){
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
return speclj$reporting$Reporter$report_pending$dyn_16369.call(null,this$,result);
}
});

var speclj$reporting$Reporter$report_fail$dyn_16370 = (function (this$,result){
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
return speclj$reporting$Reporter$report_fail$dyn_16370.call(null,this$,result);
}
});

var speclj$reporting$Reporter$report_runs$dyn_16371 = (function (this$,results){
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
return speclj$reporting$Reporter$report_runs$dyn_16371.call(null,this$,results);
}
});

var speclj$reporting$Reporter$report_error$dyn_16376 = (function (this$,exception){
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
return speclj$reporting$Reporter$report_error$dyn_16376.call(null,this$,exception);
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
var seq__16360 = cljs.core.seq.call(null,reporters);
var chunk__16361 = null;
var count__16362 = (0);
var i__16363 = (0);
while(true){
if((i__16363 < count__16362)){
var reporter = cljs.core._nth.call(null,chunk__16361,i__16363);
speclj.reporting.report_pass.call(null,reporter,result);


var G__16381 = seq__16360;
var G__16382 = chunk__16361;
var G__16383 = count__16362;
var G__16384 = (i__16363 + (1));
seq__16360 = G__16381;
chunk__16361 = G__16382;
count__16362 = G__16383;
i__16363 = G__16384;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__16360);
if(temp__5804__auto__){
var seq__16360__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16360__$1)){
var c__5525__auto__ = cljs.core.chunk_first.call(null,seq__16360__$1);
var G__16389 = cljs.core.chunk_rest.call(null,seq__16360__$1);
var G__16390 = c__5525__auto__;
var G__16391 = cljs.core.count.call(null,c__5525__auto__);
var G__16392 = (0);
seq__16360 = G__16389;
chunk__16361 = G__16390;
count__16362 = G__16391;
i__16363 = G__16392;
continue;
} else {
var reporter = cljs.core.first.call(null,seq__16360__$1);
speclj.reporting.report_pass.call(null,reporter,result);


var G__16393 = cljs.core.next.call(null,seq__16360__$1);
var G__16394 = null;
var G__16395 = (0);
var G__16396 = (0);
seq__16360 = G__16393;
chunk__16361 = G__16394;
count__16362 = G__16395;
i__16363 = G__16396;
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
var seq__16385 = cljs.core.seq.call(null,reporters);
var chunk__16386 = null;
var count__16387 = (0);
var i__16388 = (0);
while(true){
if((i__16388 < count__16387)){
var reporter = cljs.core._nth.call(null,chunk__16386,i__16388);
speclj.reporting.report_fail.call(null,reporter,result);


var G__16405 = seq__16385;
var G__16406 = chunk__16386;
var G__16407 = count__16387;
var G__16408 = (i__16388 + (1));
seq__16385 = G__16405;
chunk__16386 = G__16406;
count__16387 = G__16407;
i__16388 = G__16408;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__16385);
if(temp__5804__auto__){
var seq__16385__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16385__$1)){
var c__5525__auto__ = cljs.core.chunk_first.call(null,seq__16385__$1);
var G__16409 = cljs.core.chunk_rest.call(null,seq__16385__$1);
var G__16410 = c__5525__auto__;
var G__16411 = cljs.core.count.call(null,c__5525__auto__);
var G__16412 = (0);
seq__16385 = G__16409;
chunk__16386 = G__16410;
count__16387 = G__16411;
i__16388 = G__16412;
continue;
} else {
var reporter = cljs.core.first.call(null,seq__16385__$1);
speclj.reporting.report_fail.call(null,reporter,result);


var G__16413 = cljs.core.next.call(null,seq__16385__$1);
var G__16414 = null;
var G__16415 = (0);
var G__16416 = (0);
seq__16385 = G__16413;
chunk__16386 = G__16414;
count__16387 = G__16415;
i__16388 = G__16416;
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
var seq__16399 = cljs.core.seq.call(null,reporters);
var chunk__16400 = null;
var count__16401 = (0);
var i__16402 = (0);
while(true){
if((i__16402 < count__16401)){
var reporter = cljs.core._nth.call(null,chunk__16400,i__16402);
speclj.reporting.report_pending.call(null,reporter,result);


var G__16437 = seq__16399;
var G__16438 = chunk__16400;
var G__16439 = count__16401;
var G__16440 = (i__16402 + (1));
seq__16399 = G__16437;
chunk__16400 = G__16438;
count__16401 = G__16439;
i__16402 = G__16440;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__16399);
if(temp__5804__auto__){
var seq__16399__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16399__$1)){
var c__5525__auto__ = cljs.core.chunk_first.call(null,seq__16399__$1);
var G__16445 = cljs.core.chunk_rest.call(null,seq__16399__$1);
var G__16446 = c__5525__auto__;
var G__16447 = cljs.core.count.call(null,c__5525__auto__);
var G__16448 = (0);
seq__16399 = G__16445;
chunk__16400 = G__16446;
count__16401 = G__16447;
i__16402 = G__16448;
continue;
} else {
var reporter = cljs.core.first.call(null,seq__16399__$1);
speclj.reporting.report_pending.call(null,reporter,result);


var G__16453 = cljs.core.next.call(null,seq__16399__$1);
var G__16454 = null;
var G__16455 = (0);
var G__16456 = (0);
seq__16399 = G__16453;
chunk__16400 = G__16454;
count__16401 = G__16455;
i__16402 = G__16456;
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
var seq__16429 = cljs.core.seq.call(null,reporters);
var chunk__16430 = null;
var count__16431 = (0);
var i__16432 = (0);
while(true){
if((i__16432 < count__16431)){
var reporter = cljs.core._nth.call(null,chunk__16430,i__16432);
speclj.reporting.report_error.call(null,reporter,result);


var G__16481 = seq__16429;
var G__16482 = chunk__16430;
var G__16483 = count__16431;
var G__16484 = (i__16432 + (1));
seq__16429 = G__16481;
chunk__16430 = G__16482;
count__16431 = G__16483;
i__16432 = G__16484;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__16429);
if(temp__5804__auto__){
var seq__16429__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16429__$1)){
var c__5525__auto__ = cljs.core.chunk_first.call(null,seq__16429__$1);
var G__16485 = cljs.core.chunk_rest.call(null,seq__16429__$1);
var G__16486 = c__5525__auto__;
var G__16487 = cljs.core.count.call(null,c__5525__auto__);
var G__16488 = (0);
seq__16429 = G__16485;
chunk__16430 = G__16486;
count__16431 = G__16487;
i__16432 = G__16488;
continue;
} else {
var reporter = cljs.core.first.call(null,seq__16429__$1);
speclj.reporting.report_error.call(null,reporter,result);


var G__16489 = cljs.core.next.call(null,seq__16429__$1);
var G__16490 = null;
var G__16491 = (0);
var G__16492 = (0);
seq__16429 = G__16489;
chunk__16430 = G__16490;
count__16431 = G__16491;
i__16432 = G__16492;
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
var levels_16496 = speclj.platform.stack_trace.call(null,exception);
var elides_16497 = (0);
while(true){
if(cljs.core.seq.call(null,levels_16496)){
var level_16498 = cljs.core.first.call(null,levels_16496);
if(speclj.platform.elide_level_QMARK_.call(null,level_16498)){
var G__16499 = cljs.core.rest.call(null,levels_16496);
var G__16500 = (elides_16497 + (1));
levels_16496 = G__16499;
elides_16497 = G__16500;
continue;
} else {
speclj.reporting.print_elides.call(null,elides_16497);

cljs.core.println.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(level_16498));

var G__16502 = cljs.core.rest.call(null,levels_16496);
var G__16503 = (0);
levels_16496 = G__16502;
elides_16497 = G__16503;
continue;
}
} else {
speclj.reporting.print_elides.call(null,elides_16497);
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
var _STAR_print_newline_STAR__orig_val__16505_16522 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__16506_16523 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__16507_16525 = true;
var _STAR_print_fn_STAR__temp_val__16508_16527 = (function (x__5648__auto__){
return sb__5647__auto__.append(x__5648__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__16507_16525);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__16508_16527);

try{if(cljs.core.truth_(speclj.config._STAR_full_stack_trace_QMARK__STAR_)){
speclj.platform.print_stack_trace.call(null,exception);
} else {
speclj.reporting.print_exception.call(null,null,exception);
}
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__16506_16523);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__16505_16522);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5647__auto__);
});
speclj.reporting.prefix = (function speclj$reporting$prefix(var_args){
var args__5732__auto__ = [];
var len__5726__auto___16538 = arguments.length;
var i__5727__auto___16539 = (0);
while(true){
if((i__5727__auto___16539 < len__5726__auto___16538)){
args__5732__auto__.push((arguments[i__5727__auto___16539]));

var G__16540 = (i__5727__auto___16539 + (1));
i__5727__auto___16539 = G__16540;
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
var prefixed_lines = cljs.core.map.call(null,(function (p1__16517_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(pre),cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__16517_SHARP_)].join('');
}),lines);
return clojure.string.join.call(null,speclj.platform.endl,prefixed_lines);
}));

(speclj.reporting.prefix.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(speclj.reporting.prefix.cljs$lang$applyTo = (function (seq16520){
var G__16521 = cljs.core.first.call(null,seq16520);
var seq16520__$1 = cljs.core.next.call(null,seq16520);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__16521,seq16520__$1);
}));

speclj.reporting.indent = (function speclj$reporting$indent(var_args){
var args__5732__auto__ = [];
var len__5726__auto___16546 = arguments.length;
var i__5727__auto___16548 = (0);
while(true){
if((i__5727__auto___16548 < len__5726__auto___16546)){
args__5732__auto__.push((arguments[i__5727__auto___16548]));

var G__16553 = (i__5727__auto___16548 + (1));
i__5727__auto___16548 = G__16553;
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
(speclj.reporting.indent.cljs$lang$applyTo = (function (seq16535){
var G__16536 = cljs.core.first.call(null,seq16535);
var seq16535__$1 = cljs.core.next.call(null,seq16535);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__16536,seq16535__$1);
}));

speclj.reporting.report_description_STAR_ = (function speclj$reporting$report_description_STAR_(reporters,description){
var seq__16547 = cljs.core.seq.call(null,reporters);
var chunk__16549 = null;
var count__16550 = (0);
var i__16551 = (0);
while(true){
if((i__16551 < count__16550)){
var reporter = cljs.core._nth.call(null,chunk__16549,i__16551);
speclj.reporting.report_description.call(null,reporter,description);


var G__16565 = seq__16547;
var G__16566 = chunk__16549;
var G__16567 = count__16550;
var G__16568 = (i__16551 + (1));
seq__16547 = G__16565;
chunk__16549 = G__16566;
count__16550 = G__16567;
i__16551 = G__16568;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__16547);
if(temp__5804__auto__){
var seq__16547__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16547__$1)){
var c__5525__auto__ = cljs.core.chunk_first.call(null,seq__16547__$1);
var G__16569 = cljs.core.chunk_rest.call(null,seq__16547__$1);
var G__16570 = c__5525__auto__;
var G__16571 = cljs.core.count.call(null,c__5525__auto__);
var G__16572 = (0);
seq__16547 = G__16569;
chunk__16549 = G__16570;
count__16550 = G__16571;
i__16551 = G__16572;
continue;
} else {
var reporter = cljs.core.first.call(null,seq__16547__$1);
speclj.reporting.report_description.call(null,reporter,description);


var G__16573 = cljs.core.next.call(null,seq__16547__$1);
var G__16574 = null;
var G__16575 = (0);
var G__16576 = (0);
seq__16547 = G__16573;
chunk__16549 = G__16574;
count__16550 = G__16575;
i__16551 = G__16576;
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
var seq__16561 = cljs.core.seq.call(null,reporters);
var chunk__16562 = null;
var count__16563 = (0);
var i__16564 = (0);
while(true){
if((i__16564 < count__16563)){
var reporter = cljs.core._nth.call(null,chunk__16562,i__16564);
speclj.reporting.report_runs.call(null,reporter,results);


var G__16606 = seq__16561;
var G__16607 = chunk__16562;
var G__16608 = count__16563;
var G__16609 = (i__16564 + (1));
seq__16561 = G__16606;
chunk__16562 = G__16607;
count__16563 = G__16608;
i__16564 = G__16609;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__16561);
if(temp__5804__auto__){
var seq__16561__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16561__$1)){
var c__5525__auto__ = cljs.core.chunk_first.call(null,seq__16561__$1);
var G__16610 = cljs.core.chunk_rest.call(null,seq__16561__$1);
var G__16611 = c__5525__auto__;
var G__16612 = cljs.core.count.call(null,c__5525__auto__);
var G__16613 = (0);
seq__16561 = G__16610;
chunk__16562 = G__16611;
count__16563 = G__16612;
i__16564 = G__16613;
continue;
} else {
var reporter = cljs.core.first.call(null,seq__16561__$1);
speclj.reporting.report_runs.call(null,reporter,results);


var G__16618 = cljs.core.next.call(null,seq__16561__$1);
var G__16619 = null;
var G__16620 = (0);
var G__16621 = (0);
seq__16561 = G__16618;
chunk__16562 = G__16619;
count__16563 = G__16620;
i__16564 = G__16621;
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
var seq__16614 = cljs.core.seq.call(null,reporters);
var chunk__16615 = null;
var count__16616 = (0);
var i__16617 = (0);
while(true){
if((i__16617 < count__16616)){
var reporter = cljs.core._nth.call(null,chunk__16615,i__16617);
speclj.reporting.report_message.call(null,reporter,message);


var G__16626 = seq__16614;
var G__16627 = chunk__16615;
var G__16628 = count__16616;
var G__16629 = (i__16617 + (1));
seq__16614 = G__16626;
chunk__16615 = G__16627;
count__16616 = G__16628;
i__16617 = G__16629;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__16614);
if(temp__5804__auto__){
var seq__16614__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16614__$1)){
var c__5525__auto__ = cljs.core.chunk_first.call(null,seq__16614__$1);
var G__16630 = cljs.core.chunk_rest.call(null,seq__16614__$1);
var G__16631 = c__5525__auto__;
var G__16632 = cljs.core.count.call(null,c__5525__auto__);
var G__16633 = (0);
seq__16614 = G__16630;
chunk__16615 = G__16631;
count__16616 = G__16632;
i__16617 = G__16633;
continue;
} else {
var reporter = cljs.core.first.call(null,seq__16614__$1);
speclj.reporting.report_message.call(null,reporter,message);


var G__16634 = cljs.core.next.call(null,seq__16614__$1);
var G__16635 = null;
var G__16636 = (0);
var G__16637 = (0);
seq__16614 = G__16634;
chunk__16615 = G__16635;
count__16616 = G__16636;
i__16617 = G__16637;
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
var seq__16622 = cljs.core.seq.call(null,reporters);
var chunk__16623 = null;
var count__16624 = (0);
var i__16625 = (0);
while(true){
if((i__16625 < count__16624)){
var reporter = cljs.core._nth.call(null,chunk__16623,i__16625);
speclj.reporting.report_error.call(null,reporter,exception);


var G__16638 = seq__16622;
var G__16639 = chunk__16623;
var G__16640 = count__16624;
var G__16641 = (i__16625 + (1));
seq__16622 = G__16638;
chunk__16623 = G__16639;
count__16624 = G__16640;
i__16625 = G__16641;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__16622);
if(temp__5804__auto__){
var seq__16622__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16622__$1)){
var c__5525__auto__ = cljs.core.chunk_first.call(null,seq__16622__$1);
var G__16642 = cljs.core.chunk_rest.call(null,seq__16622__$1);
var G__16643 = c__5525__auto__;
var G__16644 = cljs.core.count.call(null,c__5525__auto__);
var G__16645 = (0);
seq__16622 = G__16642;
chunk__16623 = G__16643;
count__16624 = G__16644;
i__16625 = G__16645;
continue;
} else {
var reporter = cljs.core.first.call(null,seq__16622__$1);
speclj.reporting.report_error.call(null,reporter,exception);


var G__16646 = cljs.core.next.call(null,seq__16622__$1);
var G__16647 = null;
var G__16648 = (0);
var G__16649 = (0);
seq__16622 = G__16646;
chunk__16623 = G__16647;
count__16624 = G__16648;
i__16625 = G__16649;
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
