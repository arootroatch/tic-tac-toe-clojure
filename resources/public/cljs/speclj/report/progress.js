// Compiled by ClojureScript 1.11.132 {:optimizations :none}
goog.provide('speclj.report.progress');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('speclj.config');
goog.require('speclj.platform');
goog.require('speclj.reporting');
goog.require('speclj.results');
speclj.report.progress.full_name = (function speclj$report$progress$full_name(characteristic){
var context = cljs.core.deref.call(null,characteristic.parent);
var name = characteristic.name;
while(true){
if(cljs.core.truth_(context)){
var G__21118 = cljs.core.deref.call(null,context.parent);
var G__21119 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(context.name)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join('');
context = G__21118;
name = G__21119;
continue;
} else {
return name;
}
break;
}
});
speclj.report.progress.print_failure = (function speclj$report$progress$print_failure(id,result){
var characteristic = result.characteristic;
var failure = result.failure;
cljs.core.println.call(null);

cljs.core.println.call(null,speclj.reporting.indent.call(null,(1),id,") ",speclj.report.progress.full_name.call(null,characteristic)));

cljs.core.println.call(null,speclj.reporting.red.call(null,speclj.reporting.indent.call(null,2.5,speclj.platform.error_message.call(null,failure))));

if(speclj.platform.failure_QMARK_.call(null,failure)){
return cljs.core.println.call(null,speclj.reporting.grey.call(null,speclj.reporting.indent.call(null,2.5,speclj.platform.failure_source.call(null,failure))));
} else {
return cljs.core.println.call(null,speclj.reporting.grey.call(null,speclj.reporting.indent.call(null,2.5,speclj.reporting.stack_trace_str.call(null,failure))));
}
});
speclj.report.progress.print_failures = (function speclj$report$progress$print_failures(failures){
if(cljs.core.seq.call(null,failures)){
cljs.core.println.call(null);

cljs.core.println.call(null,"Failures:");
} else {
}

var n__5593__auto__ = cljs.core.count.call(null,failures);
var i = (0);
while(true){
if((i < n__5593__auto__)){
speclj.report.progress.print_failure.call(null,(i + (1)),cljs.core.nth.call(null,failures,i));

var G__21136 = (i + (1));
i = G__21136;
continue;
} else {
return null;
}
break;
}
});
speclj.report.progress.print_pendings = (function speclj$report$progress$print_pendings(pending_results){
if(cljs.core.truth_(speclj.config._STAR_omit_pending_QMARK__STAR_)){
return null;
} else {
if(cljs.core.seq.call(null,pending_results)){
cljs.core.println.call(null);

cljs.core.println.call(null,"Pending:");
} else {
}

var seq__21132 = cljs.core.seq.call(null,pending_results);
var chunk__21133 = null;
var count__21134 = (0);
var i__21135 = (0);
while(true){
if((i__21135 < count__21134)){
var result = cljs.core._nth.call(null,chunk__21133,i__21135);
cljs.core.println.call(null);

cljs.core.println.call(null,speclj.reporting.yellow.call(null,["  ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(speclj.report.progress.full_name.call(null,result.characteristic))].join('')));

cljs.core.println.call(null,speclj.reporting.grey.call(null,["    ; ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(speclj.platform.error_message.call(null,result.exception))].join('')));

cljs.core.println.call(null,speclj.reporting.grey.call(null,["    ; ",speclj.platform.failure_source.call(null,result.exception)].join('')));


var G__21171 = seq__21132;
var G__21172 = chunk__21133;
var G__21173 = count__21134;
var G__21174 = (i__21135 + (1));
seq__21132 = G__21171;
chunk__21133 = G__21172;
count__21134 = G__21173;
i__21135 = G__21174;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__21132);
if(temp__5804__auto__){
var seq__21132__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21132__$1)){
var c__5525__auto__ = cljs.core.chunk_first.call(null,seq__21132__$1);
var G__21180 = cljs.core.chunk_rest.call(null,seq__21132__$1);
var G__21181 = c__5525__auto__;
var G__21182 = cljs.core.count.call(null,c__5525__auto__);
var G__21183 = (0);
seq__21132 = G__21180;
chunk__21133 = G__21181;
count__21134 = G__21182;
i__21135 = G__21183;
continue;
} else {
var result = cljs.core.first.call(null,seq__21132__$1);
cljs.core.println.call(null);

cljs.core.println.call(null,speclj.reporting.yellow.call(null,["  ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(speclj.report.progress.full_name.call(null,result.characteristic))].join('')));

cljs.core.println.call(null,speclj.reporting.grey.call(null,["    ; ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(speclj.platform.error_message.call(null,result.exception))].join('')));

cljs.core.println.call(null,speclj.reporting.grey.call(null,["    ; ",speclj.platform.failure_source.call(null,result.exception)].join('')));


var G__21186 = cljs.core.next.call(null,seq__21132__$1);
var G__21187 = null;
var G__21188 = (0);
var G__21189 = (0);
seq__21132 = G__21186;
chunk__21133 = G__21187;
count__21134 = G__21188;
i__21135 = G__21189;
continue;
}
} else {
return null;
}
}
break;
}
}
});
speclj.report.progress.print_errors = (function speclj$report$progress$print_errors(error_results){
if(cljs.core.seq.call(null,error_results)){
cljs.core.println.call(null);

cljs.core.println.call(null,"Errors:");
} else {
}

var seq__21167_21214 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),cljs.core.interleave.call(null,cljs.core.iterate.call(null,cljs.core.inc,(1)),error_results)));
var chunk__21168_21215 = null;
var count__21169_21216 = (0);
var i__21170_21217 = (0);
while(true){
if((i__21170_21217 < count__21169_21216)){
var vec__21198_21218 = cljs.core._nth.call(null,chunk__21168_21215,i__21170_21217);
var number_21219 = cljs.core.nth.call(null,vec__21198_21218,(0),null);
var result_21220 = cljs.core.nth.call(null,vec__21198_21218,(1),null);
cljs.core.println.call(null);

cljs.core.println.call(null,speclj.reporting.indent.call(null,(1),number_21219,") ",speclj.reporting.red.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(result_21220.exception))));

cljs.core.println.call(null,speclj.reporting.grey.call(null,speclj.reporting.indent.call(null,2.5,speclj.reporting.stack_trace_str.call(null,result_21220.exception))));


var G__21222 = seq__21167_21214;
var G__21223 = chunk__21168_21215;
var G__21224 = count__21169_21216;
var G__21225 = (i__21170_21217 + (1));
seq__21167_21214 = G__21222;
chunk__21168_21215 = G__21223;
count__21169_21216 = G__21224;
i__21170_21217 = G__21225;
continue;
} else {
var temp__5804__auto___21226 = cljs.core.seq.call(null,seq__21167_21214);
if(temp__5804__auto___21226){
var seq__21167_21227__$1 = temp__5804__auto___21226;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21167_21227__$1)){
var c__5525__auto___21228 = cljs.core.chunk_first.call(null,seq__21167_21227__$1);
var G__21229 = cljs.core.chunk_rest.call(null,seq__21167_21227__$1);
var G__21230 = c__5525__auto___21228;
var G__21231 = cljs.core.count.call(null,c__5525__auto___21228);
var G__21232 = (0);
seq__21167_21214 = G__21229;
chunk__21168_21215 = G__21230;
count__21169_21216 = G__21231;
i__21170_21217 = G__21232;
continue;
} else {
var vec__21207_21233 = cljs.core.first.call(null,seq__21167_21227__$1);
var number_21234 = cljs.core.nth.call(null,vec__21207_21233,(0),null);
var result_21235 = cljs.core.nth.call(null,vec__21207_21233,(1),null);
cljs.core.println.call(null);

cljs.core.println.call(null,speclj.reporting.indent.call(null,(1),number_21234,") ",speclj.reporting.red.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(result_21235.exception))));

cljs.core.println.call(null,speclj.reporting.grey.call(null,speclj.reporting.indent.call(null,2.5,speclj.reporting.stack_trace_str.call(null,result_21235.exception))));


var G__21236 = cljs.core.next.call(null,seq__21167_21227__$1);
var G__21237 = null;
var G__21238 = (0);
var G__21239 = (0);
seq__21167_21214 = G__21236;
chunk__21168_21215 = G__21237;
count__21169_21216 = G__21238;
i__21170_21217 = G__21239;
continue;
}
} else {
}
}
break;
}

return cljs.core.flush.call(null);
});
speclj.report.progress.print_duration = (function speclj$report$progress$print_duration(results){
cljs.core.println.call(null);

return cljs.core.println.call(null,"Finished in",speclj.platform.format_seconds.call(null,speclj.reporting.tally_time.call(null,results)),"seconds");
});
speclj.report.progress.color_fn_for = (function speclj$report$progress$color_fn_for(result_map){
if(cljs.core.not_EQ_.call(null,(0),cljs.core.count.call(null,cljs.core.concat.call(null,new cljs.core.Keyword(null,"fail","fail",1706214930).cljs$core$IFn$_invoke$arity$1(result_map),new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(result_map))))){
return speclj.reporting.red;
} else {
if(cljs.core.not_EQ_.call(null,(0),cljs.core.count.call(null,new cljs.core.Keyword(null,"pending","pending",-220036727).cljs$core$IFn$_invoke$arity$1(result_map)))){
return speclj.reporting.yellow;
} else {
return speclj.reporting.green;

}
}
});
speclj.report.progress.apply_pending_tally = (function speclj$report$progress$apply_pending_tally(report,tally){
if((new cljs.core.Keyword(null,"pending","pending",-220036727).cljs$core$IFn$_invoke$arity$1(tally) > (0))){
return cljs.core.conj.call(null,report,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"pending","pending",-220036727).cljs$core$IFn$_invoke$arity$1(tally))," pending"].join(''));
} else {
return report;
}
});
speclj.report.progress.apply_error_tally = (function speclj$report$progress$apply_error_tally(report,tally){
if((new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(tally) > (0))){
return cljs.core.conj.call(null,report,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(tally))," errors"].join(''));
} else {
return report;
}
});
speclj.report.progress.describe_counts_for = (function speclj$report$progress$describe_counts_for(result_map){
var tally = cljs.core.zipmap.call(null,cljs.core.keys.call(null,result_map),cljs.core.map.call(null,cljs.core.count,cljs.core.vals.call(null,result_map)));
var always_on_counts = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.call(null,cljs.core._PLUS_,cljs.core.vals.call(null,tally)))," examples"].join(''),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"fail","fail",1706214930).cljs$core$IFn$_invoke$arity$1(tally))," failures"].join('')], null);
return clojure.string.join.call(null,", ",speclj.report.progress.apply_error_tally.call(null,speclj.report.progress.apply_pending_tally.call(null,always_on_counts,tally),tally));
});
speclj.report.progress.print_tally = (function speclj$report$progress$print_tally(result_map){
var color_fn = speclj.report.progress.color_fn_for.call(null,result_map);
return cljs.core.println.call(null,color_fn.call(null,speclj.report.progress.describe_counts_for.call(null,result_map)));
});
speclj.report.progress.print_summary = (function speclj$report$progress$print_summary(results){
var result_map = speclj.results.categorize.call(null,results);
speclj.report.progress.print_failures.call(null,new cljs.core.Keyword(null,"fail","fail",1706214930).cljs$core$IFn$_invoke$arity$1(result_map));

speclj.report.progress.print_pendings.call(null,new cljs.core.Keyword(null,"pending","pending",-220036727).cljs$core$IFn$_invoke$arity$1(result_map));

speclj.report.progress.print_errors.call(null,new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(result_map));

speclj.report.progress.print_duration.call(null,results);

return speclj.report.progress.print_tally.call(null,result_map);
});

/**
* @constructor
 * @implements {speclj.reporting.Reporter}
*/
speclj.report.progress.ProgressReporter = (function (){
});
(speclj.report.progress.ProgressReporter.prototype.speclj$reporting$Reporter$ = cljs.core.PROTOCOL_SENTINEL);

(speclj.report.progress.ProgressReporter.prototype.speclj$reporting$Reporter$report_message$arity$2 = (function (_this,message){
var self__ = this;
var _this__$1 = this;
cljs.core.println.call(null,message);

return cljs.core.flush.call(null);
}));

(speclj.report.progress.ProgressReporter.prototype.speclj$reporting$Reporter$report_description$arity$2 = (function (_this,_description){
var self__ = this;
var _this__$1 = this;
return null;
}));

(speclj.report.progress.ProgressReporter.prototype.speclj$reporting$Reporter$report_pass$arity$2 = (function (_this,_result){
var self__ = this;
var _this__$1 = this;
cljs.core.print.call(null,speclj.reporting.green.call(null,"."));

return cljs.core.flush.call(null);
}));

(speclj.report.progress.ProgressReporter.prototype.speclj$reporting$Reporter$report_pending$arity$2 = (function (_this,_result){
var self__ = this;
var _this__$1 = this;
cljs.core.print.call(null,speclj.reporting.yellow.call(null,"*"));

return cljs.core.flush.call(null);
}));

(speclj.report.progress.ProgressReporter.prototype.speclj$reporting$Reporter$report_fail$arity$2 = (function (_this,_result){
var self__ = this;
var _this__$1 = this;
cljs.core.print.call(null,speclj.reporting.red.call(null,"F"));

return cljs.core.flush.call(null);
}));

(speclj.report.progress.ProgressReporter.prototype.speclj$reporting$Reporter$report_error$arity$2 = (function (_this,_result){
var self__ = this;
var _this__$1 = this;
cljs.core.print.call(null,speclj.reporting.red.call(null,"E"));

return cljs.core.flush.call(null);
}));

(speclj.report.progress.ProgressReporter.prototype.speclj$reporting$Reporter$report_runs$arity$2 = (function (_this,results){
var self__ = this;
var _this__$1 = this;
cljs.core.println.call(null);

return speclj.report.progress.print_summary.call(null,results);
}));

(speclj.report.progress.ProgressReporter.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
}));

(speclj.report.progress.ProgressReporter.cljs$lang$type = true);

(speclj.report.progress.ProgressReporter.cljs$lang$ctorStr = "speclj.report.progress/ProgressReporter");

(speclj.report.progress.ProgressReporter.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write.call(null,writer__5288__auto__,"speclj.report.progress/ProgressReporter");
}));

/**
 * Positional factory function for speclj.report.progress/ProgressReporter.
 */
speclj.report.progress.__GT_ProgressReporter = (function speclj$report$progress$__GT_ProgressReporter(){
return (new speclj.report.progress.ProgressReporter());
});

speclj.report.progress.new_progress_reporter = (function speclj$report$progress$new_progress_reporter(){
return (new speclj.report.progress.ProgressReporter());
});
goog.exportSymbol('speclj.report.progress.new_progress_reporter', speclj.report.progress.new_progress_reporter);
cljs.core.reset_BANG_.call(null,speclj.config.default_reporters,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [speclj.report.progress.new_progress_reporter.call(null)], null));

//# sourceMappingURL=progress.js.map
