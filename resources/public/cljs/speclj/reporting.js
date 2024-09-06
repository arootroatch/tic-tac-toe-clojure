// Compiled by ClojureScript 1.11.132 {:optimizations :none}
goog.provide('speclj.reporting');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('goog.string');
goog.require('speclj.config');
goog.require('speclj.platform');
goog.require('speclj.results');
speclj.reporting.tally_time = (function speclj$reporting$tally_time(results){
return cljs.core.apply.call(null,cljs.core._PLUS_,cljs.core.map.call(null,(function (p1__14398_SHARP_){
return p1__14398_SHARP_.seconds;
}),results));
});

/**
 * @interface
 */
speclj.reporting.Reporter = function(){};

var speclj$reporting$Reporter$report_message$dyn_14401 = (function (reporter,message){
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
return speclj$reporting$Reporter$report_message$dyn_14401.call(null,reporter,message);
}
});

var speclj$reporting$Reporter$report_description$dyn_14402 = (function (this$,description){
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
return speclj$reporting$Reporter$report_description$dyn_14402.call(null,this$,description);
}
});

var speclj$reporting$Reporter$report_pass$dyn_14407 = (function (this$,result){
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
return speclj$reporting$Reporter$report_pass$dyn_14407.call(null,this$,result);
}
});

var speclj$reporting$Reporter$report_pending$dyn_14408 = (function (this$,result){
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
return speclj$reporting$Reporter$report_pending$dyn_14408.call(null,this$,result);
}
});

var speclj$reporting$Reporter$report_fail$dyn_14409 = (function (this$,result){
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
return speclj$reporting$Reporter$report_fail$dyn_14409.call(null,this$,result);
}
});

var speclj$reporting$Reporter$report_runs$dyn_14410 = (function (this$,results){
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
return speclj$reporting$Reporter$report_runs$dyn_14410.call(null,this$,results);
}
});

var speclj$reporting$Reporter$report_error$dyn_14415 = (function (this$,exception){
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
return speclj$reporting$Reporter$report_error$dyn_14415.call(null,this$,exception);
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
var seq__14403 = cljs.core.seq.call(null,reporters);
var chunk__14404 = null;
var count__14405 = (0);
var i__14406 = (0);
while(true){
if((i__14406 < count__14405)){
var reporter = cljs.core._nth.call(null,chunk__14404,i__14406);
speclj.reporting.report_pass.call(null,reporter,result);


var G__14416 = seq__14403;
var G__14417 = chunk__14404;
var G__14418 = count__14405;
var G__14419 = (i__14406 + (1));
seq__14403 = G__14416;
chunk__14404 = G__14417;
count__14405 = G__14418;
i__14406 = G__14419;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__14403);
if(temp__5804__auto__){
var seq__14403__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14403__$1)){
var c__5525__auto__ = cljs.core.chunk_first.call(null,seq__14403__$1);
var G__14420 = cljs.core.chunk_rest.call(null,seq__14403__$1);
var G__14421 = c__5525__auto__;
var G__14422 = cljs.core.count.call(null,c__5525__auto__);
var G__14423 = (0);
seq__14403 = G__14420;
chunk__14404 = G__14421;
count__14405 = G__14422;
i__14406 = G__14423;
continue;
} else {
var reporter = cljs.core.first.call(null,seq__14403__$1);
speclj.reporting.report_pass.call(null,reporter,result);


var G__14424 = cljs.core.next.call(null,seq__14403__$1);
var G__14425 = null;
var G__14426 = (0);
var G__14427 = (0);
seq__14403 = G__14424;
chunk__14404 = G__14425;
count__14405 = G__14426;
i__14406 = G__14427;
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
var seq__14411 = cljs.core.seq.call(null,reporters);
var chunk__14412 = null;
var count__14413 = (0);
var i__14414 = (0);
while(true){
if((i__14414 < count__14413)){
var reporter = cljs.core._nth.call(null,chunk__14412,i__14414);
speclj.reporting.report_fail.call(null,reporter,result);


var G__14432 = seq__14411;
var G__14433 = chunk__14412;
var G__14434 = count__14413;
var G__14435 = (i__14414 + (1));
seq__14411 = G__14432;
chunk__14412 = G__14433;
count__14413 = G__14434;
i__14414 = G__14435;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__14411);
if(temp__5804__auto__){
var seq__14411__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14411__$1)){
var c__5525__auto__ = cljs.core.chunk_first.call(null,seq__14411__$1);
var G__14436 = cljs.core.chunk_rest.call(null,seq__14411__$1);
var G__14437 = c__5525__auto__;
var G__14438 = cljs.core.count.call(null,c__5525__auto__);
var G__14439 = (0);
seq__14411 = G__14436;
chunk__14412 = G__14437;
count__14413 = G__14438;
i__14414 = G__14439;
continue;
} else {
var reporter = cljs.core.first.call(null,seq__14411__$1);
speclj.reporting.report_fail.call(null,reporter,result);


var G__14440 = cljs.core.next.call(null,seq__14411__$1);
var G__14441 = null;
var G__14442 = (0);
var G__14443 = (0);
seq__14411 = G__14440;
chunk__14412 = G__14441;
count__14413 = G__14442;
i__14414 = G__14443;
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
var seq__14428 = cljs.core.seq.call(null,reporters);
var chunk__14429 = null;
var count__14430 = (0);
var i__14431 = (0);
while(true){
if((i__14431 < count__14430)){
var reporter = cljs.core._nth.call(null,chunk__14429,i__14431);
speclj.reporting.report_pending.call(null,reporter,result);


var G__14444 = seq__14428;
var G__14445 = chunk__14429;
var G__14446 = count__14430;
var G__14447 = (i__14431 + (1));
seq__14428 = G__14444;
chunk__14429 = G__14445;
count__14430 = G__14446;
i__14431 = G__14447;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__14428);
if(temp__5804__auto__){
var seq__14428__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14428__$1)){
var c__5525__auto__ = cljs.core.chunk_first.call(null,seq__14428__$1);
var G__14452 = cljs.core.chunk_rest.call(null,seq__14428__$1);
var G__14453 = c__5525__auto__;
var G__14454 = cljs.core.count.call(null,c__5525__auto__);
var G__14455 = (0);
seq__14428 = G__14452;
chunk__14429 = G__14453;
count__14430 = G__14454;
i__14431 = G__14455;
continue;
} else {
var reporter = cljs.core.first.call(null,seq__14428__$1);
speclj.reporting.report_pending.call(null,reporter,result);


var G__14456 = cljs.core.next.call(null,seq__14428__$1);
var G__14457 = null;
var G__14458 = (0);
var G__14459 = (0);
seq__14428 = G__14456;
chunk__14429 = G__14457;
count__14430 = G__14458;
i__14431 = G__14459;
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
var seq__14448 = cljs.core.seq.call(null,reporters);
var chunk__14449 = null;
var count__14450 = (0);
var i__14451 = (0);
while(true){
if((i__14451 < count__14450)){
var reporter = cljs.core._nth.call(null,chunk__14449,i__14451);
speclj.reporting.report_error.call(null,reporter,result);


var G__14460 = seq__14448;
var G__14461 = chunk__14449;
var G__14462 = count__14450;
var G__14463 = (i__14451 + (1));
seq__14448 = G__14460;
chunk__14449 = G__14461;
count__14450 = G__14462;
i__14451 = G__14463;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__14448);
if(temp__5804__auto__){
var seq__14448__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14448__$1)){
var c__5525__auto__ = cljs.core.chunk_first.call(null,seq__14448__$1);
var G__14464 = cljs.core.chunk_rest.call(null,seq__14448__$1);
var G__14465 = c__5525__auto__;
var G__14466 = cljs.core.count.call(null,c__5525__auto__);
var G__14467 = (0);
seq__14448 = G__14464;
chunk__14449 = G__14465;
count__14450 = G__14466;
i__14451 = G__14467;
continue;
} else {
var reporter = cljs.core.first.call(null,seq__14448__$1);
speclj.reporting.report_error.call(null,reporter,result);


var G__14468 = cljs.core.next.call(null,seq__14448__$1);
var G__14469 = null;
var G__14470 = (0);
var G__14471 = (0);
seq__14448 = G__14468;
chunk__14449 = G__14469;
count__14450 = G__14470;
i__14451 = G__14471;
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
var levels_14472 = speclj.platform.stack_trace.call(null,exception);
var elides_14473 = (0);
while(true){
if(cljs.core.seq.call(null,levels_14472)){
var level_14474 = cljs.core.first.call(null,levels_14472);
if(speclj.platform.elide_level_QMARK_.call(null,level_14474)){
var G__14475 = cljs.core.rest.call(null,levels_14472);
var G__14476 = (elides_14473 + (1));
levels_14472 = G__14475;
elides_14473 = G__14476;
continue;
} else {
speclj.reporting.print_elides.call(null,elides_14473);

cljs.core.println.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(level_14474));

var G__14477 = cljs.core.rest.call(null,levels_14472);
var G__14478 = (0);
levels_14472 = G__14477;
elides_14473 = G__14478;
continue;
}
} else {
speclj.reporting.print_elides.call(null,elides_14473);
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
var _STAR_print_newline_STAR__orig_val__14479_14486 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__14480_14487 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__14481_14488 = true;
var _STAR_print_fn_STAR__temp_val__14482_14489 = (function (x__5648__auto__){
return sb__5647__auto__.append(x__5648__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__14481_14488);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__14482_14489);

try{if(cljs.core.truth_(speclj.config._STAR_full_stack_trace_QMARK__STAR_)){
speclj.platform.print_stack_trace.call(null,exception);
} else {
speclj.reporting.print_exception.call(null,null,exception);
}
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__14480_14487);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__14479_14486);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5647__auto__);
});
speclj.reporting.prefix = (function speclj$reporting$prefix(var_args){
var args__5732__auto__ = [];
var len__5726__auto___14492 = arguments.length;
var i__5727__auto___14493 = (0);
while(true){
if((i__5727__auto___14493 < len__5726__auto___14492)){
args__5732__auto__.push((arguments[i__5727__auto___14493]));

var G__14494 = (i__5727__auto___14493 + (1));
i__5727__auto___14493 = G__14494;
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
var prefixed_lines = cljs.core.map.call(null,(function (p1__14483_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(pre),cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__14483_SHARP_)].join('');
}),lines);
return clojure.string.join.call(null,speclj.platform.endl,prefixed_lines);
}));

(speclj.reporting.prefix.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(speclj.reporting.prefix.cljs$lang$applyTo = (function (seq14484){
var G__14485 = cljs.core.first.call(null,seq14484);
var seq14484__$1 = cljs.core.next.call(null,seq14484);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__14485,seq14484__$1);
}));

speclj.reporting.indent = (function speclj$reporting$indent(var_args){
var args__5732__auto__ = [];
var len__5726__auto___14495 = arguments.length;
var i__5727__auto___14500 = (0);
while(true){
if((i__5727__auto___14500 < len__5726__auto___14495)){
args__5732__auto__.push((arguments[i__5727__auto___14500]));

var G__14501 = (i__5727__auto___14500 + (1));
i__5727__auto___14500 = G__14501;
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
(speclj.reporting.indent.cljs$lang$applyTo = (function (seq14490){
var G__14491 = cljs.core.first.call(null,seq14490);
var seq14490__$1 = cljs.core.next.call(null,seq14490);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__14491,seq14490__$1);
}));

speclj.reporting.report_description_STAR_ = (function speclj$reporting$report_description_STAR_(reporters,description){
var seq__14496 = cljs.core.seq.call(null,reporters);
var chunk__14497 = null;
var count__14498 = (0);
var i__14499 = (0);
while(true){
if((i__14499 < count__14498)){
var reporter = cljs.core._nth.call(null,chunk__14497,i__14499);
speclj.reporting.report_description.call(null,reporter,description);


var G__14506 = seq__14496;
var G__14507 = chunk__14497;
var G__14508 = count__14498;
var G__14509 = (i__14499 + (1));
seq__14496 = G__14506;
chunk__14497 = G__14507;
count__14498 = G__14508;
i__14499 = G__14509;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__14496);
if(temp__5804__auto__){
var seq__14496__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14496__$1)){
var c__5525__auto__ = cljs.core.chunk_first.call(null,seq__14496__$1);
var G__14510 = cljs.core.chunk_rest.call(null,seq__14496__$1);
var G__14511 = c__5525__auto__;
var G__14512 = cljs.core.count.call(null,c__5525__auto__);
var G__14513 = (0);
seq__14496 = G__14510;
chunk__14497 = G__14511;
count__14498 = G__14512;
i__14499 = G__14513;
continue;
} else {
var reporter = cljs.core.first.call(null,seq__14496__$1);
speclj.reporting.report_description.call(null,reporter,description);


var G__14514 = cljs.core.next.call(null,seq__14496__$1);
var G__14515 = null;
var G__14516 = (0);
var G__14517 = (0);
seq__14496 = G__14514;
chunk__14497 = G__14515;
count__14498 = G__14516;
i__14499 = G__14517;
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
var seq__14502 = cljs.core.seq.call(null,reporters);
var chunk__14503 = null;
var count__14504 = (0);
var i__14505 = (0);
while(true){
if((i__14505 < count__14504)){
var reporter = cljs.core._nth.call(null,chunk__14503,i__14505);
speclj.reporting.report_runs.call(null,reporter,results);


var G__14522 = seq__14502;
var G__14523 = chunk__14503;
var G__14524 = count__14504;
var G__14525 = (i__14505 + (1));
seq__14502 = G__14522;
chunk__14503 = G__14523;
count__14504 = G__14524;
i__14505 = G__14525;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__14502);
if(temp__5804__auto__){
var seq__14502__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14502__$1)){
var c__5525__auto__ = cljs.core.chunk_first.call(null,seq__14502__$1);
var G__14526 = cljs.core.chunk_rest.call(null,seq__14502__$1);
var G__14527 = c__5525__auto__;
var G__14528 = cljs.core.count.call(null,c__5525__auto__);
var G__14529 = (0);
seq__14502 = G__14526;
chunk__14503 = G__14527;
count__14504 = G__14528;
i__14505 = G__14529;
continue;
} else {
var reporter = cljs.core.first.call(null,seq__14502__$1);
speclj.reporting.report_runs.call(null,reporter,results);


var G__14530 = cljs.core.next.call(null,seq__14502__$1);
var G__14531 = null;
var G__14532 = (0);
var G__14533 = (0);
seq__14502 = G__14530;
chunk__14503 = G__14531;
count__14504 = G__14532;
i__14505 = G__14533;
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
var seq__14518 = cljs.core.seq.call(null,reporters);
var chunk__14519 = null;
var count__14520 = (0);
var i__14521 = (0);
while(true){
if((i__14521 < count__14520)){
var reporter = cljs.core._nth.call(null,chunk__14519,i__14521);
speclj.reporting.report_message.call(null,reporter,message);


var G__14538 = seq__14518;
var G__14539 = chunk__14519;
var G__14540 = count__14520;
var G__14541 = (i__14521 + (1));
seq__14518 = G__14538;
chunk__14519 = G__14539;
count__14520 = G__14540;
i__14521 = G__14541;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__14518);
if(temp__5804__auto__){
var seq__14518__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14518__$1)){
var c__5525__auto__ = cljs.core.chunk_first.call(null,seq__14518__$1);
var G__14542 = cljs.core.chunk_rest.call(null,seq__14518__$1);
var G__14543 = c__5525__auto__;
var G__14544 = cljs.core.count.call(null,c__5525__auto__);
var G__14545 = (0);
seq__14518 = G__14542;
chunk__14519 = G__14543;
count__14520 = G__14544;
i__14521 = G__14545;
continue;
} else {
var reporter = cljs.core.first.call(null,seq__14518__$1);
speclj.reporting.report_message.call(null,reporter,message);


var G__14546 = cljs.core.next.call(null,seq__14518__$1);
var G__14547 = null;
var G__14548 = (0);
var G__14549 = (0);
seq__14518 = G__14546;
chunk__14519 = G__14547;
count__14520 = G__14548;
i__14521 = G__14549;
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
var seq__14534 = cljs.core.seq.call(null,reporters);
var chunk__14535 = null;
var count__14536 = (0);
var i__14537 = (0);
while(true){
if((i__14537 < count__14536)){
var reporter = cljs.core._nth.call(null,chunk__14535,i__14537);
speclj.reporting.report_error.call(null,reporter,exception);


var G__14550 = seq__14534;
var G__14551 = chunk__14535;
var G__14552 = count__14536;
var G__14553 = (i__14537 + (1));
seq__14534 = G__14550;
chunk__14535 = G__14551;
count__14536 = G__14552;
i__14537 = G__14553;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__14534);
if(temp__5804__auto__){
var seq__14534__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14534__$1)){
var c__5525__auto__ = cljs.core.chunk_first.call(null,seq__14534__$1);
var G__14554 = cljs.core.chunk_rest.call(null,seq__14534__$1);
var G__14555 = c__5525__auto__;
var G__14556 = cljs.core.count.call(null,c__5525__auto__);
var G__14557 = (0);
seq__14534 = G__14554;
chunk__14535 = G__14555;
count__14536 = G__14556;
i__14537 = G__14557;
continue;
} else {
var reporter = cljs.core.first.call(null,seq__14534__$1);
speclj.reporting.report_error.call(null,reporter,exception);


var G__14558 = cljs.core.next.call(null,seq__14534__$1);
var G__14559 = null;
var G__14560 = (0);
var G__14561 = (0);
seq__14534 = G__14558;
chunk__14535 = G__14559;
count__14536 = G__14560;
i__14537 = G__14561;
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
