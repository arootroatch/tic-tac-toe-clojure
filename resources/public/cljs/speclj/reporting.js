// Compiled by ClojureScript 1.11.132 {:optimizations :none}
goog.provide('speclj.reporting');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('goog.string');
goog.require('speclj.config');
goog.require('speclj.platform');
goog.require('speclj.results');
speclj.reporting.tally_time = (function speclj$reporting$tally_time(results){
return cljs.core.apply.call(null,cljs.core._PLUS_,cljs.core.map.call(null,(function (p1__16227_SHARP_){
return p1__16227_SHARP_.seconds;
}),results));
});

/**
 * @interface
 */
speclj.reporting.Reporter = function(){};

var speclj$reporting$Reporter$report_message$dyn_16230 = (function (reporter,message){
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
return speclj$reporting$Reporter$report_message$dyn_16230.call(null,reporter,message);
}
});

var speclj$reporting$Reporter$report_description$dyn_16231 = (function (this$,description){
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
return speclj$reporting$Reporter$report_description$dyn_16231.call(null,this$,description);
}
});

var speclj$reporting$Reporter$report_pass$dyn_16236 = (function (this$,result){
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
return speclj$reporting$Reporter$report_pass$dyn_16236.call(null,this$,result);
}
});

var speclj$reporting$Reporter$report_pending$dyn_16237 = (function (this$,result){
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
return speclj$reporting$Reporter$report_pending$dyn_16237.call(null,this$,result);
}
});

var speclj$reporting$Reporter$report_fail$dyn_16238 = (function (this$,result){
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
return speclj$reporting$Reporter$report_fail$dyn_16238.call(null,this$,result);
}
});

var speclj$reporting$Reporter$report_runs$dyn_16239 = (function (this$,results){
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
return speclj$reporting$Reporter$report_runs$dyn_16239.call(null,this$,results);
}
});

var speclj$reporting$Reporter$report_error$dyn_16244 = (function (this$,exception){
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
return speclj$reporting$Reporter$report_error$dyn_16244.call(null,this$,exception);
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
var seq__16232 = cljs.core.seq.call(null,reporters);
var chunk__16233 = null;
var count__16234 = (0);
var i__16235 = (0);
while(true){
if((i__16235 < count__16234)){
var reporter = cljs.core._nth.call(null,chunk__16233,i__16235);
speclj.reporting.report_pass.call(null,reporter,result);


var G__16245 = seq__16232;
var G__16246 = chunk__16233;
var G__16247 = count__16234;
var G__16248 = (i__16235 + (1));
seq__16232 = G__16245;
chunk__16233 = G__16246;
count__16234 = G__16247;
i__16235 = G__16248;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__16232);
if(temp__5804__auto__){
var seq__16232__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16232__$1)){
var c__5525__auto__ = cljs.core.chunk_first.call(null,seq__16232__$1);
var G__16249 = cljs.core.chunk_rest.call(null,seq__16232__$1);
var G__16250 = c__5525__auto__;
var G__16251 = cljs.core.count.call(null,c__5525__auto__);
var G__16252 = (0);
seq__16232 = G__16249;
chunk__16233 = G__16250;
count__16234 = G__16251;
i__16235 = G__16252;
continue;
} else {
var reporter = cljs.core.first.call(null,seq__16232__$1);
speclj.reporting.report_pass.call(null,reporter,result);


var G__16257 = cljs.core.next.call(null,seq__16232__$1);
var G__16258 = null;
var G__16259 = (0);
var G__16260 = (0);
seq__16232 = G__16257;
chunk__16233 = G__16258;
count__16234 = G__16259;
i__16235 = G__16260;
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
var seq__16240 = cljs.core.seq.call(null,reporters);
var chunk__16241 = null;
var count__16242 = (0);
var i__16243 = (0);
while(true){
if((i__16243 < count__16242)){
var reporter = cljs.core._nth.call(null,chunk__16241,i__16243);
speclj.reporting.report_fail.call(null,reporter,result);


var G__16261 = seq__16240;
var G__16262 = chunk__16241;
var G__16263 = count__16242;
var G__16264 = (i__16243 + (1));
seq__16240 = G__16261;
chunk__16241 = G__16262;
count__16242 = G__16263;
i__16243 = G__16264;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__16240);
if(temp__5804__auto__){
var seq__16240__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16240__$1)){
var c__5525__auto__ = cljs.core.chunk_first.call(null,seq__16240__$1);
var G__16265 = cljs.core.chunk_rest.call(null,seq__16240__$1);
var G__16266 = c__5525__auto__;
var G__16267 = cljs.core.count.call(null,c__5525__auto__);
var G__16268 = (0);
seq__16240 = G__16265;
chunk__16241 = G__16266;
count__16242 = G__16267;
i__16243 = G__16268;
continue;
} else {
var reporter = cljs.core.first.call(null,seq__16240__$1);
speclj.reporting.report_fail.call(null,reporter,result);


var G__16269 = cljs.core.next.call(null,seq__16240__$1);
var G__16270 = null;
var G__16271 = (0);
var G__16272 = (0);
seq__16240 = G__16269;
chunk__16241 = G__16270;
count__16242 = G__16271;
i__16243 = G__16272;
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
var seq__16253 = cljs.core.seq.call(null,reporters);
var chunk__16254 = null;
var count__16255 = (0);
var i__16256 = (0);
while(true){
if((i__16256 < count__16255)){
var reporter = cljs.core._nth.call(null,chunk__16254,i__16256);
speclj.reporting.report_pending.call(null,reporter,result);


var G__16277 = seq__16253;
var G__16278 = chunk__16254;
var G__16279 = count__16255;
var G__16280 = (i__16256 + (1));
seq__16253 = G__16277;
chunk__16254 = G__16278;
count__16255 = G__16279;
i__16256 = G__16280;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__16253);
if(temp__5804__auto__){
var seq__16253__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16253__$1)){
var c__5525__auto__ = cljs.core.chunk_first.call(null,seq__16253__$1);
var G__16281 = cljs.core.chunk_rest.call(null,seq__16253__$1);
var G__16282 = c__5525__auto__;
var G__16283 = cljs.core.count.call(null,c__5525__auto__);
var G__16284 = (0);
seq__16253 = G__16281;
chunk__16254 = G__16282;
count__16255 = G__16283;
i__16256 = G__16284;
continue;
} else {
var reporter = cljs.core.first.call(null,seq__16253__$1);
speclj.reporting.report_pending.call(null,reporter,result);


var G__16285 = cljs.core.next.call(null,seq__16253__$1);
var G__16286 = null;
var G__16287 = (0);
var G__16288 = (0);
seq__16253 = G__16285;
chunk__16254 = G__16286;
count__16255 = G__16287;
i__16256 = G__16288;
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
var seq__16273 = cljs.core.seq.call(null,reporters);
var chunk__16274 = null;
var count__16275 = (0);
var i__16276 = (0);
while(true){
if((i__16276 < count__16275)){
var reporter = cljs.core._nth.call(null,chunk__16274,i__16276);
speclj.reporting.report_error.call(null,reporter,result);


var G__16289 = seq__16273;
var G__16290 = chunk__16274;
var G__16291 = count__16275;
var G__16292 = (i__16276 + (1));
seq__16273 = G__16289;
chunk__16274 = G__16290;
count__16275 = G__16291;
i__16276 = G__16292;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__16273);
if(temp__5804__auto__){
var seq__16273__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16273__$1)){
var c__5525__auto__ = cljs.core.chunk_first.call(null,seq__16273__$1);
var G__16293 = cljs.core.chunk_rest.call(null,seq__16273__$1);
var G__16294 = c__5525__auto__;
var G__16295 = cljs.core.count.call(null,c__5525__auto__);
var G__16296 = (0);
seq__16273 = G__16293;
chunk__16274 = G__16294;
count__16275 = G__16295;
i__16276 = G__16296;
continue;
} else {
var reporter = cljs.core.first.call(null,seq__16273__$1);
speclj.reporting.report_error.call(null,reporter,result);


var G__16297 = cljs.core.next.call(null,seq__16273__$1);
var G__16298 = null;
var G__16299 = (0);
var G__16300 = (0);
seq__16273 = G__16297;
chunk__16274 = G__16298;
count__16275 = G__16299;
i__16276 = G__16300;
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
var levels_16301 = speclj.platform.stack_trace.call(null,exception);
var elides_16302 = (0);
while(true){
if(cljs.core.seq.call(null,levels_16301)){
var level_16303 = cljs.core.first.call(null,levels_16301);
if(speclj.platform.elide_level_QMARK_.call(null,level_16303)){
var G__16304 = cljs.core.rest.call(null,levels_16301);
var G__16305 = (elides_16302 + (1));
levels_16301 = G__16304;
elides_16302 = G__16305;
continue;
} else {
speclj.reporting.print_elides.call(null,elides_16302);

cljs.core.println.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(level_16303));

var G__16306 = cljs.core.rest.call(null,levels_16301);
var G__16307 = (0);
levels_16301 = G__16306;
elides_16302 = G__16307;
continue;
}
} else {
speclj.reporting.print_elides.call(null,elides_16302);
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
var _STAR_print_newline_STAR__orig_val__16308_16315 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__16309_16316 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__16310_16317 = true;
var _STAR_print_fn_STAR__temp_val__16311_16318 = (function (x__5648__auto__){
return sb__5647__auto__.append(x__5648__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__16310_16317);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__16311_16318);

try{if(cljs.core.truth_(speclj.config._STAR_full_stack_trace_QMARK__STAR_)){
speclj.platform.print_stack_trace.call(null,exception);
} else {
speclj.reporting.print_exception.call(null,null,exception);
}
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__16309_16316);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__16308_16315);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5647__auto__);
});
speclj.reporting.prefix = (function speclj$reporting$prefix(var_args){
var args__5732__auto__ = [];
var len__5726__auto___16321 = arguments.length;
var i__5727__auto___16322 = (0);
while(true){
if((i__5727__auto___16322 < len__5726__auto___16321)){
args__5732__auto__.push((arguments[i__5727__auto___16322]));

var G__16323 = (i__5727__auto___16322 + (1));
i__5727__auto___16322 = G__16323;
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
var prefixed_lines = cljs.core.map.call(null,(function (p1__16312_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(pre),cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__16312_SHARP_)].join('');
}),lines);
return clojure.string.join.call(null,speclj.platform.endl,prefixed_lines);
}));

(speclj.reporting.prefix.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(speclj.reporting.prefix.cljs$lang$applyTo = (function (seq16313){
var G__16314 = cljs.core.first.call(null,seq16313);
var seq16313__$1 = cljs.core.next.call(null,seq16313);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__16314,seq16313__$1);
}));

speclj.reporting.indent = (function speclj$reporting$indent(var_args){
var args__5732__auto__ = [];
var len__5726__auto___16324 = arguments.length;
var i__5727__auto___16325 = (0);
while(true){
if((i__5727__auto___16325 < len__5726__auto___16324)){
args__5732__auto__.push((arguments[i__5727__auto___16325]));

var G__16330 = (i__5727__auto___16325 + (1));
i__5727__auto___16325 = G__16330;
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
(speclj.reporting.indent.cljs$lang$applyTo = (function (seq16319){
var G__16320 = cljs.core.first.call(null,seq16319);
var seq16319__$1 = cljs.core.next.call(null,seq16319);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__16320,seq16319__$1);
}));

speclj.reporting.report_description_STAR_ = (function speclj$reporting$report_description_STAR_(reporters,description){
var seq__16326 = cljs.core.seq.call(null,reporters);
var chunk__16327 = null;
var count__16328 = (0);
var i__16329 = (0);
while(true){
if((i__16329 < count__16328)){
var reporter = cljs.core._nth.call(null,chunk__16327,i__16329);
speclj.reporting.report_description.call(null,reporter,description);


var G__16335 = seq__16326;
var G__16336 = chunk__16327;
var G__16337 = count__16328;
var G__16338 = (i__16329 + (1));
seq__16326 = G__16335;
chunk__16327 = G__16336;
count__16328 = G__16337;
i__16329 = G__16338;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__16326);
if(temp__5804__auto__){
var seq__16326__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16326__$1)){
var c__5525__auto__ = cljs.core.chunk_first.call(null,seq__16326__$1);
var G__16339 = cljs.core.chunk_rest.call(null,seq__16326__$1);
var G__16340 = c__5525__auto__;
var G__16341 = cljs.core.count.call(null,c__5525__auto__);
var G__16342 = (0);
seq__16326 = G__16339;
chunk__16327 = G__16340;
count__16328 = G__16341;
i__16329 = G__16342;
continue;
} else {
var reporter = cljs.core.first.call(null,seq__16326__$1);
speclj.reporting.report_description.call(null,reporter,description);


var G__16343 = cljs.core.next.call(null,seq__16326__$1);
var G__16344 = null;
var G__16345 = (0);
var G__16346 = (0);
seq__16326 = G__16343;
chunk__16327 = G__16344;
count__16328 = G__16345;
i__16329 = G__16346;
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
var seq__16331 = cljs.core.seq.call(null,reporters);
var chunk__16332 = null;
var count__16333 = (0);
var i__16334 = (0);
while(true){
if((i__16334 < count__16333)){
var reporter = cljs.core._nth.call(null,chunk__16332,i__16334);
speclj.reporting.report_runs.call(null,reporter,results);


var G__16351 = seq__16331;
var G__16352 = chunk__16332;
var G__16353 = count__16333;
var G__16354 = (i__16334 + (1));
seq__16331 = G__16351;
chunk__16332 = G__16352;
count__16333 = G__16353;
i__16334 = G__16354;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__16331);
if(temp__5804__auto__){
var seq__16331__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16331__$1)){
var c__5525__auto__ = cljs.core.chunk_first.call(null,seq__16331__$1);
var G__16355 = cljs.core.chunk_rest.call(null,seq__16331__$1);
var G__16356 = c__5525__auto__;
var G__16357 = cljs.core.count.call(null,c__5525__auto__);
var G__16358 = (0);
seq__16331 = G__16355;
chunk__16332 = G__16356;
count__16333 = G__16357;
i__16334 = G__16358;
continue;
} else {
var reporter = cljs.core.first.call(null,seq__16331__$1);
speclj.reporting.report_runs.call(null,reporter,results);


var G__16359 = cljs.core.next.call(null,seq__16331__$1);
var G__16360 = null;
var G__16361 = (0);
var G__16362 = (0);
seq__16331 = G__16359;
chunk__16332 = G__16360;
count__16333 = G__16361;
i__16334 = G__16362;
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
var seq__16347 = cljs.core.seq.call(null,reporters);
var chunk__16348 = null;
var count__16349 = (0);
var i__16350 = (0);
while(true){
if((i__16350 < count__16349)){
var reporter = cljs.core._nth.call(null,chunk__16348,i__16350);
speclj.reporting.report_message.call(null,reporter,message);


var G__16367 = seq__16347;
var G__16368 = chunk__16348;
var G__16369 = count__16349;
var G__16370 = (i__16350 + (1));
seq__16347 = G__16367;
chunk__16348 = G__16368;
count__16349 = G__16369;
i__16350 = G__16370;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__16347);
if(temp__5804__auto__){
var seq__16347__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16347__$1)){
var c__5525__auto__ = cljs.core.chunk_first.call(null,seq__16347__$1);
var G__16371 = cljs.core.chunk_rest.call(null,seq__16347__$1);
var G__16372 = c__5525__auto__;
var G__16373 = cljs.core.count.call(null,c__5525__auto__);
var G__16374 = (0);
seq__16347 = G__16371;
chunk__16348 = G__16372;
count__16349 = G__16373;
i__16350 = G__16374;
continue;
} else {
var reporter = cljs.core.first.call(null,seq__16347__$1);
speclj.reporting.report_message.call(null,reporter,message);


var G__16375 = cljs.core.next.call(null,seq__16347__$1);
var G__16376 = null;
var G__16377 = (0);
var G__16378 = (0);
seq__16347 = G__16375;
chunk__16348 = G__16376;
count__16349 = G__16377;
i__16350 = G__16378;
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
var seq__16363 = cljs.core.seq.call(null,reporters);
var chunk__16364 = null;
var count__16365 = (0);
var i__16366 = (0);
while(true){
if((i__16366 < count__16365)){
var reporter = cljs.core._nth.call(null,chunk__16364,i__16366);
speclj.reporting.report_error.call(null,reporter,exception);


var G__16382 = seq__16363;
var G__16383 = chunk__16364;
var G__16384 = count__16365;
var G__16385 = (i__16366 + (1));
seq__16363 = G__16382;
chunk__16364 = G__16383;
count__16365 = G__16384;
i__16366 = G__16385;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__16363);
if(temp__5804__auto__){
var seq__16363__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16363__$1)){
var c__5525__auto__ = cljs.core.chunk_first.call(null,seq__16363__$1);
var G__16390 = cljs.core.chunk_rest.call(null,seq__16363__$1);
var G__16391 = c__5525__auto__;
var G__16392 = cljs.core.count.call(null,c__5525__auto__);
var G__16393 = (0);
seq__16363 = G__16390;
chunk__16364 = G__16391;
count__16365 = G__16392;
i__16366 = G__16393;
continue;
} else {
var reporter = cljs.core.first.call(null,seq__16363__$1);
speclj.reporting.report_error.call(null,reporter,exception);


var G__16394 = cljs.core.next.call(null,seq__16363__$1);
var G__16395 = null;
var G__16396 = (0);
var G__16397 = (0);
seq__16363 = G__16394;
chunk__16364 = G__16395;
count__16365 = G__16396;
i__16366 = G__16397;
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
