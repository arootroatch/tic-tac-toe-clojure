// Compiled by ClojureScript 1.11.132 {:optimizations :none}
goog.provide('speclj.reporting');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('goog.string');
goog.require('speclj.config');
goog.require('speclj.platform');
goog.require('speclj.results');
speclj.reporting.tally_time = (function speclj$reporting$tally_time(results){
return cljs.core.apply.call(null,cljs.core._PLUS_,cljs.core.map.call(null,(function (p1__16283_SHARP_){
return p1__16283_SHARP_.seconds;
}),results));
});

/**
 * @interface
 */
speclj.reporting.Reporter = function(){};

var speclj$reporting$Reporter$report_message$dyn_16310 = (function (reporter,message){
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
return speclj$reporting$Reporter$report_message$dyn_16310.call(null,reporter,message);
}
});

var speclj$reporting$Reporter$report_description$dyn_16319 = (function (this$,description){
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
return speclj$reporting$Reporter$report_description$dyn_16319.call(null,this$,description);
}
});

var speclj$reporting$Reporter$report_pass$dyn_16332 = (function (this$,result){
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
return speclj$reporting$Reporter$report_pass$dyn_16332.call(null,this$,result);
}
});

var speclj$reporting$Reporter$report_pending$dyn_16341 = (function (this$,result){
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
return speclj$reporting$Reporter$report_pending$dyn_16341.call(null,this$,result);
}
});

var speclj$reporting$Reporter$report_fail$dyn_16354 = (function (this$,result){
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
return speclj$reporting$Reporter$report_fail$dyn_16354.call(null,this$,result);
}
});

var speclj$reporting$Reporter$report_runs$dyn_16355 = (function (this$,results){
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
return speclj$reporting$Reporter$report_runs$dyn_16355.call(null,this$,results);
}
});

var speclj$reporting$Reporter$report_error$dyn_16360 = (function (this$,exception){
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
return speclj$reporting$Reporter$report_error$dyn_16360.call(null,this$,exception);
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
var seq__16324 = cljs.core.seq.call(null,reporters);
var chunk__16325 = null;
var count__16326 = (0);
var i__16327 = (0);
while(true){
if((i__16327 < count__16326)){
var reporter = cljs.core._nth.call(null,chunk__16325,i__16327);
speclj.reporting.report_pass.call(null,reporter,result);


var G__16363 = seq__16324;
var G__16364 = chunk__16325;
var G__16365 = count__16326;
var G__16366 = (i__16327 + (1));
seq__16324 = G__16363;
chunk__16325 = G__16364;
count__16326 = G__16365;
i__16327 = G__16366;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__16324);
if(temp__5804__auto__){
var seq__16324__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16324__$1)){
var c__5525__auto__ = cljs.core.chunk_first.call(null,seq__16324__$1);
var G__16367 = cljs.core.chunk_rest.call(null,seq__16324__$1);
var G__16368 = c__5525__auto__;
var G__16369 = cljs.core.count.call(null,c__5525__auto__);
var G__16370 = (0);
seq__16324 = G__16367;
chunk__16325 = G__16368;
count__16326 = G__16369;
i__16327 = G__16370;
continue;
} else {
var reporter = cljs.core.first.call(null,seq__16324__$1);
speclj.reporting.report_pass.call(null,reporter,result);


var G__16372 = cljs.core.next.call(null,seq__16324__$1);
var G__16373 = null;
var G__16374 = (0);
var G__16375 = (0);
seq__16324 = G__16372;
chunk__16325 = G__16373;
count__16326 = G__16374;
i__16327 = G__16375;
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
var seq__16356 = cljs.core.seq.call(null,reporters);
var chunk__16357 = null;
var count__16358 = (0);
var i__16359 = (0);
while(true){
if((i__16359 < count__16358)){
var reporter = cljs.core._nth.call(null,chunk__16357,i__16359);
speclj.reporting.report_fail.call(null,reporter,result);


var G__16380 = seq__16356;
var G__16381 = chunk__16357;
var G__16382 = count__16358;
var G__16383 = (i__16359 + (1));
seq__16356 = G__16380;
chunk__16357 = G__16381;
count__16358 = G__16382;
i__16359 = G__16383;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__16356);
if(temp__5804__auto__){
var seq__16356__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16356__$1)){
var c__5525__auto__ = cljs.core.chunk_first.call(null,seq__16356__$1);
var G__16384 = cljs.core.chunk_rest.call(null,seq__16356__$1);
var G__16385 = c__5525__auto__;
var G__16386 = cljs.core.count.call(null,c__5525__auto__);
var G__16387 = (0);
seq__16356 = G__16384;
chunk__16357 = G__16385;
count__16358 = G__16386;
i__16359 = G__16387;
continue;
} else {
var reporter = cljs.core.first.call(null,seq__16356__$1);
speclj.reporting.report_fail.call(null,reporter,result);


var G__16388 = cljs.core.next.call(null,seq__16356__$1);
var G__16389 = null;
var G__16390 = (0);
var G__16391 = (0);
seq__16356 = G__16388;
chunk__16357 = G__16389;
count__16358 = G__16390;
i__16359 = G__16391;
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
var seq__16376 = cljs.core.seq.call(null,reporters);
var chunk__16377 = null;
var count__16378 = (0);
var i__16379 = (0);
while(true){
if((i__16379 < count__16378)){
var reporter = cljs.core._nth.call(null,chunk__16377,i__16379);
speclj.reporting.report_pending.call(null,reporter,result);


var G__16396 = seq__16376;
var G__16397 = chunk__16377;
var G__16398 = count__16378;
var G__16399 = (i__16379 + (1));
seq__16376 = G__16396;
chunk__16377 = G__16397;
count__16378 = G__16398;
i__16379 = G__16399;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__16376);
if(temp__5804__auto__){
var seq__16376__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16376__$1)){
var c__5525__auto__ = cljs.core.chunk_first.call(null,seq__16376__$1);
var G__16400 = cljs.core.chunk_rest.call(null,seq__16376__$1);
var G__16401 = c__5525__auto__;
var G__16402 = cljs.core.count.call(null,c__5525__auto__);
var G__16403 = (0);
seq__16376 = G__16400;
chunk__16377 = G__16401;
count__16378 = G__16402;
i__16379 = G__16403;
continue;
} else {
var reporter = cljs.core.first.call(null,seq__16376__$1);
speclj.reporting.report_pending.call(null,reporter,result);


var G__16404 = cljs.core.next.call(null,seq__16376__$1);
var G__16405 = null;
var G__16406 = (0);
var G__16407 = (0);
seq__16376 = G__16404;
chunk__16377 = G__16405;
count__16378 = G__16406;
i__16379 = G__16407;
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
var seq__16392 = cljs.core.seq.call(null,reporters);
var chunk__16393 = null;
var count__16394 = (0);
var i__16395 = (0);
while(true){
if((i__16395 < count__16394)){
var reporter = cljs.core._nth.call(null,chunk__16393,i__16395);
speclj.reporting.report_error.call(null,reporter,result);


var G__16410 = seq__16392;
var G__16412 = chunk__16393;
var G__16413 = count__16394;
var G__16414 = (i__16395 + (1));
seq__16392 = G__16410;
chunk__16393 = G__16412;
count__16394 = G__16413;
i__16395 = G__16414;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__16392);
if(temp__5804__auto__){
var seq__16392__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16392__$1)){
var c__5525__auto__ = cljs.core.chunk_first.call(null,seq__16392__$1);
var G__16415 = cljs.core.chunk_rest.call(null,seq__16392__$1);
var G__16416 = c__5525__auto__;
var G__16417 = cljs.core.count.call(null,c__5525__auto__);
var G__16418 = (0);
seq__16392 = G__16415;
chunk__16393 = G__16416;
count__16394 = G__16417;
i__16395 = G__16418;
continue;
} else {
var reporter = cljs.core.first.call(null,seq__16392__$1);
speclj.reporting.report_error.call(null,reporter,result);


var G__16419 = cljs.core.next.call(null,seq__16392__$1);
var G__16420 = null;
var G__16421 = (0);
var G__16422 = (0);
seq__16392 = G__16419;
chunk__16393 = G__16420;
count__16394 = G__16421;
i__16395 = G__16422;
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
var levels_16427 = speclj.platform.stack_trace.call(null,exception);
var elides_16428 = (0);
while(true){
if(cljs.core.seq.call(null,levels_16427)){
var level_16430 = cljs.core.first.call(null,levels_16427);
if(speclj.platform.elide_level_QMARK_.call(null,level_16430)){
var G__16431 = cljs.core.rest.call(null,levels_16427);
var G__16432 = (elides_16428 + (1));
levels_16427 = G__16431;
elides_16428 = G__16432;
continue;
} else {
speclj.reporting.print_elides.call(null,elides_16428);

cljs.core.println.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(level_16430));

var G__16433 = cljs.core.rest.call(null,levels_16427);
var G__16434 = (0);
levels_16427 = G__16433;
elides_16428 = G__16434;
continue;
}
} else {
speclj.reporting.print_elides.call(null,elides_16428);
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
var _STAR_print_newline_STAR__orig_val__16435_16440 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__16436_16442 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__16437_16443 = true;
var _STAR_print_fn_STAR__temp_val__16438_16445 = (function (x__5648__auto__){
return sb__5647__auto__.append(x__5648__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__16437_16443);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__16438_16445);

try{if(cljs.core.truth_(speclj.config._STAR_full_stack_trace_QMARK__STAR_)){
speclj.platform.print_stack_trace.call(null,exception);
} else {
speclj.reporting.print_exception.call(null,null,exception);
}
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__16436_16442);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__16435_16440);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5647__auto__);
});
speclj.reporting.prefix = (function speclj$reporting$prefix(var_args){
var args__5732__auto__ = [];
var len__5726__auto___16451 = arguments.length;
var i__5727__auto___16452 = (0);
while(true){
if((i__5727__auto___16452 < len__5726__auto___16451)){
args__5732__auto__.push((arguments[i__5727__auto___16452]));

var G__16453 = (i__5727__auto___16452 + (1));
i__5727__auto___16452 = G__16453;
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
var prefixed_lines = cljs.core.map.call(null,(function (p1__16439_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(pre),cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__16439_SHARP_)].join('');
}),lines);
return clojure.string.join.call(null,speclj.platform.endl,prefixed_lines);
}));

(speclj.reporting.prefix.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(speclj.reporting.prefix.cljs$lang$applyTo = (function (seq16441){
var G__16444 = cljs.core.first.call(null,seq16441);
var seq16441__$1 = cljs.core.next.call(null,seq16441);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__16444,seq16441__$1);
}));

speclj.reporting.indent = (function speclj$reporting$indent(var_args){
var args__5732__auto__ = [];
var len__5726__auto___16457 = arguments.length;
var i__5727__auto___16458 = (0);
while(true){
if((i__5727__auto___16458 < len__5726__auto___16457)){
args__5732__auto__.push((arguments[i__5727__auto___16458]));

var G__16463 = (i__5727__auto___16458 + (1));
i__5727__auto___16458 = G__16463;
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
(speclj.reporting.indent.cljs$lang$applyTo = (function (seq16449){
var G__16450 = cljs.core.first.call(null,seq16449);
var seq16449__$1 = cljs.core.next.call(null,seq16449);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__16450,seq16449__$1);
}));

speclj.reporting.report_description_STAR_ = (function speclj$reporting$report_description_STAR_(reporters,description){
var seq__16459 = cljs.core.seq.call(null,reporters);
var chunk__16460 = null;
var count__16461 = (0);
var i__16462 = (0);
while(true){
if((i__16462 < count__16461)){
var reporter = cljs.core._nth.call(null,chunk__16460,i__16462);
speclj.reporting.report_description.call(null,reporter,description);


var G__16479 = seq__16459;
var G__16480 = chunk__16460;
var G__16481 = count__16461;
var G__16482 = (i__16462 + (1));
seq__16459 = G__16479;
chunk__16460 = G__16480;
count__16461 = G__16481;
i__16462 = G__16482;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__16459);
if(temp__5804__auto__){
var seq__16459__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16459__$1)){
var c__5525__auto__ = cljs.core.chunk_first.call(null,seq__16459__$1);
var G__16483 = cljs.core.chunk_rest.call(null,seq__16459__$1);
var G__16484 = c__5525__auto__;
var G__16485 = cljs.core.count.call(null,c__5525__auto__);
var G__16486 = (0);
seq__16459 = G__16483;
chunk__16460 = G__16484;
count__16461 = G__16485;
i__16462 = G__16486;
continue;
} else {
var reporter = cljs.core.first.call(null,seq__16459__$1);
speclj.reporting.report_description.call(null,reporter,description);


var G__16487 = cljs.core.next.call(null,seq__16459__$1);
var G__16488 = null;
var G__16489 = (0);
var G__16490 = (0);
seq__16459 = G__16487;
chunk__16460 = G__16488;
count__16461 = G__16489;
i__16462 = G__16490;
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
var seq__16475 = cljs.core.seq.call(null,reporters);
var chunk__16476 = null;
var count__16477 = (0);
var i__16478 = (0);
while(true){
if((i__16478 < count__16477)){
var reporter = cljs.core._nth.call(null,chunk__16476,i__16478);
speclj.reporting.report_runs.call(null,reporter,results);


var G__16495 = seq__16475;
var G__16496 = chunk__16476;
var G__16497 = count__16477;
var G__16498 = (i__16478 + (1));
seq__16475 = G__16495;
chunk__16476 = G__16496;
count__16477 = G__16497;
i__16478 = G__16498;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__16475);
if(temp__5804__auto__){
var seq__16475__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16475__$1)){
var c__5525__auto__ = cljs.core.chunk_first.call(null,seq__16475__$1);
var G__16499 = cljs.core.chunk_rest.call(null,seq__16475__$1);
var G__16500 = c__5525__auto__;
var G__16501 = cljs.core.count.call(null,c__5525__auto__);
var G__16502 = (0);
seq__16475 = G__16499;
chunk__16476 = G__16500;
count__16477 = G__16501;
i__16478 = G__16502;
continue;
} else {
var reporter = cljs.core.first.call(null,seq__16475__$1);
speclj.reporting.report_runs.call(null,reporter,results);


var G__16503 = cljs.core.next.call(null,seq__16475__$1);
var G__16504 = null;
var G__16505 = (0);
var G__16506 = (0);
seq__16475 = G__16503;
chunk__16476 = G__16504;
count__16477 = G__16505;
i__16478 = G__16506;
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
var seq__16491 = cljs.core.seq.call(null,reporters);
var chunk__16492 = null;
var count__16493 = (0);
var i__16494 = (0);
while(true){
if((i__16494 < count__16493)){
var reporter = cljs.core._nth.call(null,chunk__16492,i__16494);
speclj.reporting.report_message.call(null,reporter,message);


var G__16511 = seq__16491;
var G__16512 = chunk__16492;
var G__16513 = count__16493;
var G__16514 = (i__16494 + (1));
seq__16491 = G__16511;
chunk__16492 = G__16512;
count__16493 = G__16513;
i__16494 = G__16514;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__16491);
if(temp__5804__auto__){
var seq__16491__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16491__$1)){
var c__5525__auto__ = cljs.core.chunk_first.call(null,seq__16491__$1);
var G__16515 = cljs.core.chunk_rest.call(null,seq__16491__$1);
var G__16516 = c__5525__auto__;
var G__16517 = cljs.core.count.call(null,c__5525__auto__);
var G__16518 = (0);
seq__16491 = G__16515;
chunk__16492 = G__16516;
count__16493 = G__16517;
i__16494 = G__16518;
continue;
} else {
var reporter = cljs.core.first.call(null,seq__16491__$1);
speclj.reporting.report_message.call(null,reporter,message);


var G__16519 = cljs.core.next.call(null,seq__16491__$1);
var G__16520 = null;
var G__16521 = (0);
var G__16522 = (0);
seq__16491 = G__16519;
chunk__16492 = G__16520;
count__16493 = G__16521;
i__16494 = G__16522;
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
var seq__16507 = cljs.core.seq.call(null,reporters);
var chunk__16508 = null;
var count__16509 = (0);
var i__16510 = (0);
while(true){
if((i__16510 < count__16509)){
var reporter = cljs.core._nth.call(null,chunk__16508,i__16510);
speclj.reporting.report_error.call(null,reporter,exception);


var G__16523 = seq__16507;
var G__16524 = chunk__16508;
var G__16525 = count__16509;
var G__16526 = (i__16510 + (1));
seq__16507 = G__16523;
chunk__16508 = G__16524;
count__16509 = G__16525;
i__16510 = G__16526;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__16507);
if(temp__5804__auto__){
var seq__16507__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16507__$1)){
var c__5525__auto__ = cljs.core.chunk_first.call(null,seq__16507__$1);
var G__16527 = cljs.core.chunk_rest.call(null,seq__16507__$1);
var G__16528 = c__5525__auto__;
var G__16529 = cljs.core.count.call(null,c__5525__auto__);
var G__16530 = (0);
seq__16507 = G__16527;
chunk__16508 = G__16528;
count__16509 = G__16529;
i__16510 = G__16530;
continue;
} else {
var reporter = cljs.core.first.call(null,seq__16507__$1);
speclj.reporting.report_error.call(null,reporter,exception);


var G__16531 = cljs.core.next.call(null,seq__16507__$1);
var G__16532 = null;
var G__16533 = (0);
var G__16534 = (0);
seq__16507 = G__16531;
chunk__16508 = G__16532;
count__16509 = G__16533;
i__16510 = G__16534;
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
