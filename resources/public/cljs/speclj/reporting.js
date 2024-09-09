// Compiled by ClojureScript 1.11.132 {:optimizations :none}
goog.provide('speclj.reporting');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('goog.string');
goog.require('speclj.config');
goog.require('speclj.platform');
goog.require('speclj.results');
speclj.reporting.tally_time = (function speclj$reporting$tally_time(results){
return cljs.core.apply.call(null,cljs.core._PLUS_,cljs.core.map.call(null,(function (p1__16240_SHARP_){
return p1__16240_SHARP_.seconds;
}),results));
});

/**
 * @interface
 */
speclj.reporting.Reporter = function(){};

var speclj$reporting$Reporter$report_message$dyn_16241 = (function (reporter,message){
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
return speclj$reporting$Reporter$report_message$dyn_16241.call(null,reporter,message);
}
});

var speclj$reporting$Reporter$report_description$dyn_16242 = (function (this$,description){
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
return speclj$reporting$Reporter$report_description$dyn_16242.call(null,this$,description);
}
});

var speclj$reporting$Reporter$report_pass$dyn_16243 = (function (this$,result){
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
return speclj$reporting$Reporter$report_pass$dyn_16243.call(null,this$,result);
}
});

var speclj$reporting$Reporter$report_pending$dyn_16244 = (function (this$,result){
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
return speclj$reporting$Reporter$report_pending$dyn_16244.call(null,this$,result);
}
});

var speclj$reporting$Reporter$report_fail$dyn_16249 = (function (this$,result){
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
return speclj$reporting$Reporter$report_fail$dyn_16249.call(null,this$,result);
}
});

var speclj$reporting$Reporter$report_runs$dyn_16250 = (function (this$,results){
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
return speclj$reporting$Reporter$report_runs$dyn_16250.call(null,this$,results);
}
});

var speclj$reporting$Reporter$report_error$dyn_16251 = (function (this$,exception){
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
return speclj$reporting$Reporter$report_error$dyn_16251.call(null,this$,exception);
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
var seq__16245 = cljs.core.seq.call(null,reporters);
var chunk__16246 = null;
var count__16247 = (0);
var i__16248 = (0);
while(true){
if((i__16248 < count__16247)){
var reporter = cljs.core._nth.call(null,chunk__16246,i__16248);
speclj.reporting.report_pass.call(null,reporter,result);


var G__16252 = seq__16245;
var G__16253 = chunk__16246;
var G__16254 = count__16247;
var G__16255 = (i__16248 + (1));
seq__16245 = G__16252;
chunk__16246 = G__16253;
count__16247 = G__16254;
i__16248 = G__16255;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__16245);
if(temp__5804__auto__){
var seq__16245__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16245__$1)){
var c__5525__auto__ = cljs.core.chunk_first.call(null,seq__16245__$1);
var G__16256 = cljs.core.chunk_rest.call(null,seq__16245__$1);
var G__16257 = c__5525__auto__;
var G__16258 = cljs.core.count.call(null,c__5525__auto__);
var G__16259 = (0);
seq__16245 = G__16256;
chunk__16246 = G__16257;
count__16247 = G__16258;
i__16248 = G__16259;
continue;
} else {
var reporter = cljs.core.first.call(null,seq__16245__$1);
speclj.reporting.report_pass.call(null,reporter,result);


var G__16264 = cljs.core.next.call(null,seq__16245__$1);
var G__16265 = null;
var G__16266 = (0);
var G__16267 = (0);
seq__16245 = G__16264;
chunk__16246 = G__16265;
count__16247 = G__16266;
i__16248 = G__16267;
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
var seq__16260 = cljs.core.seq.call(null,reporters);
var chunk__16261 = null;
var count__16262 = (0);
var i__16263 = (0);
while(true){
if((i__16263 < count__16262)){
var reporter = cljs.core._nth.call(null,chunk__16261,i__16263);
speclj.reporting.report_fail.call(null,reporter,result);


var G__16272 = seq__16260;
var G__16273 = chunk__16261;
var G__16274 = count__16262;
var G__16275 = (i__16263 + (1));
seq__16260 = G__16272;
chunk__16261 = G__16273;
count__16262 = G__16274;
i__16263 = G__16275;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__16260);
if(temp__5804__auto__){
var seq__16260__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16260__$1)){
var c__5525__auto__ = cljs.core.chunk_first.call(null,seq__16260__$1);
var G__16276 = cljs.core.chunk_rest.call(null,seq__16260__$1);
var G__16277 = c__5525__auto__;
var G__16278 = cljs.core.count.call(null,c__5525__auto__);
var G__16279 = (0);
seq__16260 = G__16276;
chunk__16261 = G__16277;
count__16262 = G__16278;
i__16263 = G__16279;
continue;
} else {
var reporter = cljs.core.first.call(null,seq__16260__$1);
speclj.reporting.report_fail.call(null,reporter,result);


var G__16280 = cljs.core.next.call(null,seq__16260__$1);
var G__16281 = null;
var G__16282 = (0);
var G__16283 = (0);
seq__16260 = G__16280;
chunk__16261 = G__16281;
count__16262 = G__16282;
i__16263 = G__16283;
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
var seq__16268 = cljs.core.seq.call(null,reporters);
var chunk__16269 = null;
var count__16270 = (0);
var i__16271 = (0);
while(true){
if((i__16271 < count__16270)){
var reporter = cljs.core._nth.call(null,chunk__16269,i__16271);
speclj.reporting.report_pending.call(null,reporter,result);


var G__16288 = seq__16268;
var G__16289 = chunk__16269;
var G__16290 = count__16270;
var G__16291 = (i__16271 + (1));
seq__16268 = G__16288;
chunk__16269 = G__16289;
count__16270 = G__16290;
i__16271 = G__16291;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__16268);
if(temp__5804__auto__){
var seq__16268__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16268__$1)){
var c__5525__auto__ = cljs.core.chunk_first.call(null,seq__16268__$1);
var G__16292 = cljs.core.chunk_rest.call(null,seq__16268__$1);
var G__16293 = c__5525__auto__;
var G__16294 = cljs.core.count.call(null,c__5525__auto__);
var G__16295 = (0);
seq__16268 = G__16292;
chunk__16269 = G__16293;
count__16270 = G__16294;
i__16271 = G__16295;
continue;
} else {
var reporter = cljs.core.first.call(null,seq__16268__$1);
speclj.reporting.report_pending.call(null,reporter,result);


var G__16296 = cljs.core.next.call(null,seq__16268__$1);
var G__16297 = null;
var G__16298 = (0);
var G__16299 = (0);
seq__16268 = G__16296;
chunk__16269 = G__16297;
count__16270 = G__16298;
i__16271 = G__16299;
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
var seq__16284 = cljs.core.seq.call(null,reporters);
var chunk__16285 = null;
var count__16286 = (0);
var i__16287 = (0);
while(true){
if((i__16287 < count__16286)){
var reporter = cljs.core._nth.call(null,chunk__16285,i__16287);
speclj.reporting.report_error.call(null,reporter,result);


var G__16300 = seq__16284;
var G__16301 = chunk__16285;
var G__16302 = count__16286;
var G__16303 = (i__16287 + (1));
seq__16284 = G__16300;
chunk__16285 = G__16301;
count__16286 = G__16302;
i__16287 = G__16303;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__16284);
if(temp__5804__auto__){
var seq__16284__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16284__$1)){
var c__5525__auto__ = cljs.core.chunk_first.call(null,seq__16284__$1);
var G__16304 = cljs.core.chunk_rest.call(null,seq__16284__$1);
var G__16305 = c__5525__auto__;
var G__16306 = cljs.core.count.call(null,c__5525__auto__);
var G__16307 = (0);
seq__16284 = G__16304;
chunk__16285 = G__16305;
count__16286 = G__16306;
i__16287 = G__16307;
continue;
} else {
var reporter = cljs.core.first.call(null,seq__16284__$1);
speclj.reporting.report_error.call(null,reporter,result);


var G__16308 = cljs.core.next.call(null,seq__16284__$1);
var G__16309 = null;
var G__16310 = (0);
var G__16311 = (0);
seq__16284 = G__16308;
chunk__16285 = G__16309;
count__16286 = G__16310;
i__16287 = G__16311;
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
var levels_16312 = speclj.platform.stack_trace.call(null,exception);
var elides_16313 = (0);
while(true){
if(cljs.core.seq.call(null,levels_16312)){
var level_16314 = cljs.core.first.call(null,levels_16312);
if(speclj.platform.elide_level_QMARK_.call(null,level_16314)){
var G__16315 = cljs.core.rest.call(null,levels_16312);
var G__16316 = (elides_16313 + (1));
levels_16312 = G__16315;
elides_16313 = G__16316;
continue;
} else {
speclj.reporting.print_elides.call(null,elides_16313);

cljs.core.println.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(level_16314));

var G__16317 = cljs.core.rest.call(null,levels_16312);
var G__16318 = (0);
levels_16312 = G__16317;
elides_16313 = G__16318;
continue;
}
} else {
speclj.reporting.print_elides.call(null,elides_16313);
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
var _STAR_print_newline_STAR__orig_val__16319_16326 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__16320_16327 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__16321_16328 = true;
var _STAR_print_fn_STAR__temp_val__16322_16329 = (function (x__5648__auto__){
return sb__5647__auto__.append(x__5648__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__16321_16328);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__16322_16329);

try{if(cljs.core.truth_(speclj.config._STAR_full_stack_trace_QMARK__STAR_)){
speclj.platform.print_stack_trace.call(null,exception);
} else {
speclj.reporting.print_exception.call(null,null,exception);
}
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__16320_16327);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__16319_16326);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5647__auto__);
});
speclj.reporting.prefix = (function speclj$reporting$prefix(var_args){
var args__5732__auto__ = [];
var len__5726__auto___16332 = arguments.length;
var i__5727__auto___16333 = (0);
while(true){
if((i__5727__auto___16333 < len__5726__auto___16332)){
args__5732__auto__.push((arguments[i__5727__auto___16333]));

var G__16334 = (i__5727__auto___16333 + (1));
i__5727__auto___16333 = G__16334;
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
var prefixed_lines = cljs.core.map.call(null,(function (p1__16323_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(pre),cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__16323_SHARP_)].join('');
}),lines);
return clojure.string.join.call(null,speclj.platform.endl,prefixed_lines);
}));

(speclj.reporting.prefix.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(speclj.reporting.prefix.cljs$lang$applyTo = (function (seq16324){
var G__16325 = cljs.core.first.call(null,seq16324);
var seq16324__$1 = cljs.core.next.call(null,seq16324);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__16325,seq16324__$1);
}));

speclj.reporting.indent = (function speclj$reporting$indent(var_args){
var args__5732__auto__ = [];
var len__5726__auto___16335 = arguments.length;
var i__5727__auto___16336 = (0);
while(true){
if((i__5727__auto___16336 < len__5726__auto___16335)){
args__5732__auto__.push((arguments[i__5727__auto___16336]));

var G__16337 = (i__5727__auto___16336 + (1));
i__5727__auto___16336 = G__16337;
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
(speclj.reporting.indent.cljs$lang$applyTo = (function (seq16330){
var G__16331 = cljs.core.first.call(null,seq16330);
var seq16330__$1 = cljs.core.next.call(null,seq16330);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__16331,seq16330__$1);
}));

speclj.reporting.report_description_STAR_ = (function speclj$reporting$report_description_STAR_(reporters,description){
var seq__16338 = cljs.core.seq.call(null,reporters);
var chunk__16339 = null;
var count__16340 = (0);
var i__16341 = (0);
while(true){
if((i__16341 < count__16340)){
var reporter = cljs.core._nth.call(null,chunk__16339,i__16341);
speclj.reporting.report_description.call(null,reporter,description);


var G__16351 = seq__16338;
var G__16352 = chunk__16339;
var G__16353 = count__16340;
var G__16354 = (i__16341 + (1));
seq__16338 = G__16351;
chunk__16339 = G__16352;
count__16340 = G__16353;
i__16341 = G__16354;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__16338);
if(temp__5804__auto__){
var seq__16338__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16338__$1)){
var c__5525__auto__ = cljs.core.chunk_first.call(null,seq__16338__$1);
var G__16359 = cljs.core.chunk_rest.call(null,seq__16338__$1);
var G__16360 = c__5525__auto__;
var G__16361 = cljs.core.count.call(null,c__5525__auto__);
var G__16362 = (0);
seq__16338 = G__16359;
chunk__16339 = G__16360;
count__16340 = G__16361;
i__16341 = G__16362;
continue;
} else {
var reporter = cljs.core.first.call(null,seq__16338__$1);
speclj.reporting.report_description.call(null,reporter,description);


var G__16363 = cljs.core.next.call(null,seq__16338__$1);
var G__16364 = null;
var G__16365 = (0);
var G__16366 = (0);
seq__16338 = G__16363;
chunk__16339 = G__16364;
count__16340 = G__16365;
i__16341 = G__16366;
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
var seq__16355 = cljs.core.seq.call(null,reporters);
var chunk__16356 = null;
var count__16357 = (0);
var i__16358 = (0);
while(true){
if((i__16358 < count__16357)){
var reporter = cljs.core._nth.call(null,chunk__16356,i__16358);
speclj.reporting.report_runs.call(null,reporter,results);


var G__16375 = seq__16355;
var G__16376 = chunk__16356;
var G__16377 = count__16357;
var G__16378 = (i__16358 + (1));
seq__16355 = G__16375;
chunk__16356 = G__16376;
count__16357 = G__16377;
i__16358 = G__16378;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__16355);
if(temp__5804__auto__){
var seq__16355__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16355__$1)){
var c__5525__auto__ = cljs.core.chunk_first.call(null,seq__16355__$1);
var G__16379 = cljs.core.chunk_rest.call(null,seq__16355__$1);
var G__16380 = c__5525__auto__;
var G__16381 = cljs.core.count.call(null,c__5525__auto__);
var G__16382 = (0);
seq__16355 = G__16379;
chunk__16356 = G__16380;
count__16357 = G__16381;
i__16358 = G__16382;
continue;
} else {
var reporter = cljs.core.first.call(null,seq__16355__$1);
speclj.reporting.report_runs.call(null,reporter,results);


var G__16383 = cljs.core.next.call(null,seq__16355__$1);
var G__16384 = null;
var G__16385 = (0);
var G__16386 = (0);
seq__16355 = G__16383;
chunk__16356 = G__16384;
count__16357 = G__16385;
i__16358 = G__16386;
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
var seq__16371 = cljs.core.seq.call(null,reporters);
var chunk__16372 = null;
var count__16373 = (0);
var i__16374 = (0);
while(true){
if((i__16374 < count__16373)){
var reporter = cljs.core._nth.call(null,chunk__16372,i__16374);
speclj.reporting.report_message.call(null,reporter,message);


var G__16400 = seq__16371;
var G__16401 = chunk__16372;
var G__16402 = count__16373;
var G__16403 = (i__16374 + (1));
seq__16371 = G__16400;
chunk__16372 = G__16401;
count__16373 = G__16402;
i__16374 = G__16403;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__16371);
if(temp__5804__auto__){
var seq__16371__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16371__$1)){
var c__5525__auto__ = cljs.core.chunk_first.call(null,seq__16371__$1);
var G__16404 = cljs.core.chunk_rest.call(null,seq__16371__$1);
var G__16405 = c__5525__auto__;
var G__16406 = cljs.core.count.call(null,c__5525__auto__);
var G__16407 = (0);
seq__16371 = G__16404;
chunk__16372 = G__16405;
count__16373 = G__16406;
i__16374 = G__16407;
continue;
} else {
var reporter = cljs.core.first.call(null,seq__16371__$1);
speclj.reporting.report_message.call(null,reporter,message);


var G__16408 = cljs.core.next.call(null,seq__16371__$1);
var G__16409 = null;
var G__16410 = (0);
var G__16411 = (0);
seq__16371 = G__16408;
chunk__16372 = G__16409;
count__16373 = G__16410;
i__16374 = G__16411;
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
var seq__16392 = cljs.core.seq.call(null,reporters);
var chunk__16393 = null;
var count__16394 = (0);
var i__16395 = (0);
while(true){
if((i__16395 < count__16394)){
var reporter = cljs.core._nth.call(null,chunk__16393,i__16395);
speclj.reporting.report_error.call(null,reporter,exception);


var G__16416 = seq__16392;
var G__16417 = chunk__16393;
var G__16418 = count__16394;
var G__16419 = (i__16395 + (1));
seq__16392 = G__16416;
chunk__16393 = G__16417;
count__16394 = G__16418;
i__16395 = G__16419;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__16392);
if(temp__5804__auto__){
var seq__16392__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16392__$1)){
var c__5525__auto__ = cljs.core.chunk_first.call(null,seq__16392__$1);
var G__16420 = cljs.core.chunk_rest.call(null,seq__16392__$1);
var G__16421 = c__5525__auto__;
var G__16422 = cljs.core.count.call(null,c__5525__auto__);
var G__16423 = (0);
seq__16392 = G__16420;
chunk__16393 = G__16421;
count__16394 = G__16422;
i__16395 = G__16423;
continue;
} else {
var reporter = cljs.core.first.call(null,seq__16392__$1);
speclj.reporting.report_error.call(null,reporter,exception);


var G__16424 = cljs.core.next.call(null,seq__16392__$1);
var G__16425 = null;
var G__16426 = (0);
var G__16427 = (0);
seq__16392 = G__16424;
chunk__16393 = G__16425;
count__16394 = G__16426;
i__16395 = G__16427;
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
