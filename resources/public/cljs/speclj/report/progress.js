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
var G__16604 = cljs.core.deref.call(null,context.parent);
var G__16605 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(context.name)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join('');
context = G__16604;
name = G__16605;
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

var G__16643 = (i + (1));
i = G__16643;
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

var seq__16634 = cljs.core.seq.call(null,pending_results);
var chunk__16635 = null;
var count__16636 = (0);
var i__16637 = (0);
while(true){
if((i__16637 < count__16636)){
var result = cljs.core._nth.call(null,chunk__16635,i__16637);
cljs.core.println.call(null);

cljs.core.println.call(null,speclj.reporting.yellow.call(null,["  ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(speclj.report.progress.full_name.call(null,result.characteristic))].join('')));

cljs.core.println.call(null,speclj.reporting.grey.call(null,["    ; ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(speclj.platform.error_message.call(null,result.exception))].join('')));

cljs.core.println.call(null,speclj.reporting.grey.call(null,["    ; ",speclj.platform.failure_source.call(null,result.exception)].join('')));


var G__16679 = seq__16634;
var G__16680 = chunk__16635;
var G__16681 = count__16636;
var G__16682 = (i__16637 + (1));
seq__16634 = G__16679;
chunk__16635 = G__16680;
count__16636 = G__16681;
i__16637 = G__16682;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__16634);
if(temp__5804__auto__){
var seq__16634__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16634__$1)){
var c__5525__auto__ = cljs.core.chunk_first.call(null,seq__16634__$1);
var G__16683 = cljs.core.chunk_rest.call(null,seq__16634__$1);
var G__16684 = c__5525__auto__;
var G__16685 = cljs.core.count.call(null,c__5525__auto__);
var G__16686 = (0);
seq__16634 = G__16683;
chunk__16635 = G__16684;
count__16636 = G__16685;
i__16637 = G__16686;
continue;
} else {
var result = cljs.core.first.call(null,seq__16634__$1);
cljs.core.println.call(null);

cljs.core.println.call(null,speclj.reporting.yellow.call(null,["  ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(speclj.report.progress.full_name.call(null,result.characteristic))].join('')));

cljs.core.println.call(null,speclj.reporting.grey.call(null,["    ; ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(speclj.platform.error_message.call(null,result.exception))].join('')));

cljs.core.println.call(null,speclj.reporting.grey.call(null,["    ; ",speclj.platform.failure_source.call(null,result.exception)].join('')));


var G__16693 = cljs.core.next.call(null,seq__16634__$1);
var G__16694 = null;
var G__16695 = (0);
var G__16696 = (0);
seq__16634 = G__16693;
chunk__16635 = G__16694;
count__16636 = G__16695;
i__16637 = G__16696;
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

var seq__16671_16746 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),cljs.core.interleave.call(null,cljs.core.iterate.call(null,cljs.core.inc,(1)),error_results)));
var chunk__16672_16747 = null;
var count__16673_16748 = (0);
var i__16674_16749 = (0);
while(true){
if((i__16674_16749 < count__16673_16748)){
var vec__16709_16752 = cljs.core._nth.call(null,chunk__16672_16747,i__16674_16749);
var number_16753 = cljs.core.nth.call(null,vec__16709_16752,(0),null);
var result_16754 = cljs.core.nth.call(null,vec__16709_16752,(1),null);
cljs.core.println.call(null);

cljs.core.println.call(null,speclj.reporting.indent.call(null,(1),number_16753,") ",speclj.reporting.red.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(result_16754.exception))));

cljs.core.println.call(null,speclj.reporting.grey.call(null,speclj.reporting.indent.call(null,2.5,speclj.reporting.stack_trace_str.call(null,result_16754.exception))));


var G__16760 = seq__16671_16746;
var G__16761 = chunk__16672_16747;
var G__16762 = count__16673_16748;
var G__16763 = (i__16674_16749 + (1));
seq__16671_16746 = G__16760;
chunk__16672_16747 = G__16761;
count__16673_16748 = G__16762;
i__16674_16749 = G__16763;
continue;
} else {
var temp__5804__auto___16764 = cljs.core.seq.call(null,seq__16671_16746);
if(temp__5804__auto___16764){
var seq__16671_16766__$1 = temp__5804__auto___16764;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16671_16766__$1)){
var c__5525__auto___16767 = cljs.core.chunk_first.call(null,seq__16671_16766__$1);
var G__16768 = cljs.core.chunk_rest.call(null,seq__16671_16766__$1);
var G__16769 = c__5525__auto___16767;
var G__16770 = cljs.core.count.call(null,c__5525__auto___16767);
var G__16771 = (0);
seq__16671_16746 = G__16768;
chunk__16672_16747 = G__16769;
count__16673_16748 = G__16770;
i__16674_16749 = G__16771;
continue;
} else {
var vec__16727_16772 = cljs.core.first.call(null,seq__16671_16766__$1);
var number_16773 = cljs.core.nth.call(null,vec__16727_16772,(0),null);
var result_16774 = cljs.core.nth.call(null,vec__16727_16772,(1),null);
cljs.core.println.call(null);

cljs.core.println.call(null,speclj.reporting.indent.call(null,(1),number_16773,") ",speclj.reporting.red.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(result_16774.exception))));

cljs.core.println.call(null,speclj.reporting.grey.call(null,speclj.reporting.indent.call(null,2.5,speclj.reporting.stack_trace_str.call(null,result_16774.exception))));


var G__16775 = cljs.core.next.call(null,seq__16671_16766__$1);
var G__16776 = null;
var G__16777 = (0);
var G__16778 = (0);
seq__16671_16746 = G__16775;
chunk__16672_16747 = G__16776;
count__16673_16748 = G__16777;
i__16674_16749 = G__16778;
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
