// Compiled by ClojureScript 1.11.132 {:optimizations :none}
goog.provide('clojure.math.combinatorics');
goog.require('cljs.core');
clojure.math.combinatorics._STAR__SINGLEQUOTE_ = cljs.core._STAR_;
clojure.math.combinatorics._PLUS__SINGLEQUOTE_ = cljs.core._PLUS_;
/**
 * Lazily concatenates a collection of collections into a flat sequence,
 *   because Clojure's `apply concat` is insufficiently lazy.
 */
clojure.math.combinatorics.join = (function clojure$math$combinatorics$join(colls){
return (new cljs.core.LazySeq(null,(function (){
var temp__5804__auto__ = cljs.core.seq.call(null,colls);
if(temp__5804__auto__){
var s = temp__5804__auto__;
return cljs.core.concat.call(null,cljs.core.first.call(null,s),clojure.math.combinatorics.join.call(null,cljs.core.rest.call(null,s)));
} else {
return null;
}
}),null,null));
});
/**
 * Uses join to achieve lazier version of mapcat (on one collection)
 */
clojure.math.combinatorics.mapjoin = (function clojure$math$combinatorics$mapjoin(f,coll){
return clojure.math.combinatorics.join.call(null,cljs.core.map.call(null,f,coll));
});
/**
 * Annoyingly, the built-in distinct? doesn't handle 0 args, so we need
 *   to write our own version that considers the empty-list to be distinct
 */
clojure.math.combinatorics.all_different_QMARK_ = (function clojure$math$combinatorics$all_different_QMARK_(s){
if(cljs.core.seq.call(null,s)){
return cljs.core.apply.call(null,cljs.core.distinct_QMARK_,s);
} else {
return true;
}
});
clojure.math.combinatorics.index_combinations = (function clojure$math$combinatorics$index_combinations(n,cnt){
return (new cljs.core.LazySeq(null,(function (){
var c = cljs.core.vec.call(null,cljs.core.cons.call(null,null,(function (){var iter__5480__auto__ = (function clojure$math$combinatorics$index_combinations_$_iter__18683(s__18684){
return (new cljs.core.LazySeq(null,(function (){
var s__18684__$1 = s__18684;
while(true){
var temp__5804__auto__ = cljs.core.seq.call(null,s__18684__$1);
if(temp__5804__auto__){
var s__18684__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__18684__$2)){
var c__5478__auto__ = cljs.core.chunk_first.call(null,s__18684__$2);
var size__5479__auto__ = cljs.core.count.call(null,c__5478__auto__);
var b__18686 = cljs.core.chunk_buffer.call(null,size__5479__auto__);
if((function (){var i__18685 = (0);
while(true){
if((i__18685 < size__5479__auto__)){
var j = cljs.core._nth.call(null,c__5478__auto__,i__18685);
cljs.core.chunk_append.call(null,b__18686,((j + cnt) + (- (n + (1)))));

var G__18711 = (i__18685 + (1));
i__18685 = G__18711;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18686),clojure$math$combinatorics$index_combinations_$_iter__18683.call(null,cljs.core.chunk_rest.call(null,s__18684__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18686),null);
}
} else {
var j = cljs.core.first.call(null,s__18684__$2);
return cljs.core.cons.call(null,((j + cnt) + (- (n + (1)))),clojure$math$combinatorics$index_combinations_$_iter__18683.call(null,cljs.core.rest.call(null,s__18684__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__.call(null,cljs.core.range.call(null,(1),(n + (1))));
})()));
var iter_comb = (function clojure$math$combinatorics$index_combinations_$_iter_comb(c__$1,j){
if((j > n)){
return null;
} else {
var c__$2 = cljs.core.assoc.call(null,c__$1,j,(c__$1.call(null,j) - (1)));
if((c__$2.call(null,j) < j)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c__$2,(j + (1))], null);
} else {
var c__$3 = c__$2;
var j__$1 = j;
while(true){
if(cljs.core._EQ_.call(null,j__$1,(1))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c__$3,j__$1], null);
} else {
var G__18719 = cljs.core.assoc.call(null,c__$3,(j__$1 - (1)),(c__$3.call(null,j__$1) - (1)));
var G__18720 = (j__$1 - (1));
c__$3 = G__18719;
j__$1 = G__18720;
continue;
}
break;
}
}
}
});
var step = (function clojure$math$combinatorics$index_combinations_$_step(c__$1,j){
return cljs.core.cons.call(null,cljs.core.rseq.call(null,cljs.core.subvec.call(null,c__$1,(1),(n + (1)))),(new cljs.core.LazySeq(null,(function (){
var next_step = iter_comb.call(null,c__$1,j);
if(cljs.core.truth_(next_step)){
return clojure$math$combinatorics$index_combinations_$_step.call(null,next_step.call(null,(0)),next_step.call(null,(1)));
} else {
return null;
}
}),null,null)));
});
return step.call(null,c,(1));
}),null,null));
});
clojure.math.combinatorics.distribute = (function clojure$math$combinatorics$distribute(m,index,total,distribution,already_distributed){
var distribution__$1 = distribution;
var index__$1 = index;
var already_distributed__$1 = already_distributed;
while(true){
if((index__$1 >= cljs.core.count.call(null,m))){
return null;
} else {
var quantity_to_distribute = (total - already_distributed__$1);
var mi = m.call(null,index__$1);
if((quantity_to_distribute <= mi)){
return cljs.core.conj.call(null,distribution__$1,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [index__$1,quantity_to_distribute,total], null));
} else {
var G__18732 = cljs.core.conj.call(null,distribution__$1,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [index__$1,mi,(already_distributed__$1 + mi)], null));
var G__18733 = (index__$1 + (1));
var G__18734 = (already_distributed__$1 + mi);
distribution__$1 = G__18732;
index__$1 = G__18733;
already_distributed__$1 = G__18734;
continue;
}
}
break;
}
});
clojure.math.combinatorics.next_distribution = (function clojure$math$combinatorics$next_distribution(m,total,distribution){
var vec__18712 = cljs.core.peek.call(null,distribution);
var index = cljs.core.nth.call(null,vec__18712,(0),null);
var this_bucket = cljs.core.nth.call(null,vec__18712,(1),null);
var this_and_to_the_left = cljs.core.nth.call(null,vec__18712,(2),null);
if((index < (cljs.core.count.call(null,m) - (1)))){
if(cljs.core._EQ_.call(null,this_bucket,(1))){
return cljs.core.conj.call(null,cljs.core.pop.call(null,distribution),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(index + (1)),(1),this_and_to_the_left], null));
} else {
return cljs.core.conj.call(null,cljs.core.pop.call(null,distribution),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,(this_bucket - (1)),(this_and_to_the_left - (1))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(index + (1)),(1),this_and_to_the_left], null));
}
} else {
if(cljs.core._EQ_.call(null,this_bucket,total)){
return null;
} else {
var distribution__$1 = cljs.core.pop.call(null,distribution);
while(true){
var vec__18721 = cljs.core.peek.call(null,distribution__$1);
var index__$1 = cljs.core.nth.call(null,vec__18721,(0),null);
var this_bucket__$1 = cljs.core.nth.call(null,vec__18721,(1),null);
var this_and_to_the_left__$1 = cljs.core.nth.call(null,vec__18721,(2),null);
var distribution__$2 = ((cljs.core._EQ_.call(null,this_bucket__$1,(1)))?cljs.core.pop.call(null,distribution__$1):cljs.core.conj.call(null,cljs.core.pop.call(null,distribution__$1),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [index__$1,(this_bucket__$1 - (1)),(this_and_to_the_left__$1 - (1))], null)));
if(((total - (this_and_to_the_left__$1 - (1))) <= cljs.core.apply.call(null,cljs.core._PLUS_,cljs.core.subvec.call(null,m,(index__$1 + (1)))))){
return clojure.math.combinatorics.distribute.call(null,m,(index__$1 + (1)),total,distribution__$2,(this_and_to_the_left__$1 - (1)));
} else {
if(cljs.core.seq.call(null,distribution__$2)){
var G__18743 = distribution__$2;
distribution__$1 = G__18743;
continue;
} else {
return null;

}
}
break;
}

}
}
});
clojure.math.combinatorics.bounded_distributions = (function clojure$math$combinatorics$bounded_distributions(m,t){
var step = (function clojure$math$combinatorics$bounded_distributions_$_step(distribution){
return cljs.core.cons.call(null,distribution,(new cljs.core.LazySeq(null,(function (){
var temp__5804__auto__ = clojure.math.combinatorics.next_distribution.call(null,m,t,distribution);
if(cljs.core.truth_(temp__5804__auto__)){
var next_step = temp__5804__auto__;
return clojure$math$combinatorics$bounded_distributions_$_step.call(null,next_step);
} else {
return null;
}
}),null,null)));
});
return step.call(null,clojure.math.combinatorics.distribute.call(null,m,(0),t,cljs.core.PersistentVector.EMPTY,(0)));
});
/**
 * Handles the case when you want the combinations of a list with duplicate items.
 */
clojure.math.combinatorics.multi_comb = (function clojure$math$combinatorics$multi_comb(l,t){
var f = cljs.core.frequencies.call(null,l);
var v = cljs.core.vec.call(null,cljs.core.distinct.call(null,l));
var domain = cljs.core.range.call(null,cljs.core.count.call(null,v));
var m = cljs.core.vec.call(null,(function (){var iter__5480__auto__ = (function clojure$math$combinatorics$multi_comb_$_iter__18739(s__18740){
return (new cljs.core.LazySeq(null,(function (){
var s__18740__$1 = s__18740;
while(true){
var temp__5804__auto__ = cljs.core.seq.call(null,s__18740__$1);
if(temp__5804__auto__){
var s__18740__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__18740__$2)){
var c__5478__auto__ = cljs.core.chunk_first.call(null,s__18740__$2);
var size__5479__auto__ = cljs.core.count.call(null,c__5478__auto__);
var b__18742 = cljs.core.chunk_buffer.call(null,size__5479__auto__);
if((function (){var i__18741 = (0);
while(true){
if((i__18741 < size__5479__auto__)){
var i = cljs.core._nth.call(null,c__5478__auto__,i__18741);
cljs.core.chunk_append.call(null,b__18742,f.call(null,v.call(null,i)));

var G__18797 = (i__18741 + (1));
i__18741 = G__18797;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18742),clojure$math$combinatorics$multi_comb_$_iter__18739.call(null,cljs.core.chunk_rest.call(null,s__18740__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18742),null);
}
} else {
var i = cljs.core.first.call(null,s__18740__$2);
return cljs.core.cons.call(null,f.call(null,v.call(null,i)),clojure$math$combinatorics$multi_comb_$_iter__18739.call(null,cljs.core.rest.call(null,s__18740__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__.call(null,domain);
})());
var qs = clojure.math.combinatorics.bounded_distributions.call(null,m,t);
var iter__5480__auto__ = (function clojure$math$combinatorics$multi_comb_$_iter__18748(s__18749){
return (new cljs.core.LazySeq(null,(function (){
var s__18749__$1 = s__18749;
while(true){
var temp__5804__auto__ = cljs.core.seq.call(null,s__18749__$1);
if(temp__5804__auto__){
var s__18749__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__18749__$2)){
var c__5478__auto__ = cljs.core.chunk_first.call(null,s__18749__$2);
var size__5479__auto__ = cljs.core.count.call(null,c__5478__auto__);
var b__18751 = cljs.core.chunk_buffer.call(null,size__5479__auto__);
if((function (){var i__18750 = (0);
while(true){
if((i__18750 < size__5479__auto__)){
var q = cljs.core._nth.call(null,c__5478__auto__,i__18750);
cljs.core.chunk_append.call(null,b__18751,clojure.math.combinatorics.join.call(null,(function (){var iter__5480__auto__ = ((function (i__18750,q,c__5478__auto__,size__5479__auto__,b__18751,s__18749__$2,temp__5804__auto__,f,v,domain,m,qs){
return (function clojure$math$combinatorics$multi_comb_$_iter__18748_$_iter__18756(s__18757){
return (new cljs.core.LazySeq(null,((function (i__18750,q,c__5478__auto__,size__5479__auto__,b__18751,s__18749__$2,temp__5804__auto__,f,v,domain,m,qs){
return (function (){
var s__18757__$1 = s__18757;
while(true){
var temp__5804__auto____$1 = cljs.core.seq.call(null,s__18757__$1);
if(temp__5804__auto____$1){
var s__18757__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__18757__$2)){
var c__5478__auto____$1 = cljs.core.chunk_first.call(null,s__18757__$2);
var size__5479__auto____$1 = cljs.core.count.call(null,c__5478__auto____$1);
var b__18759 = cljs.core.chunk_buffer.call(null,size__5479__auto____$1);
if((function (){var i__18758 = (0);
while(true){
if((i__18758 < size__5479__auto____$1)){
var vec__18760 = cljs.core._nth.call(null,c__5478__auto____$1,i__18758);
var index = cljs.core.nth.call(null,vec__18760,(0),null);
var this_bucket = cljs.core.nth.call(null,vec__18760,(1),null);
var _ = cljs.core.nth.call(null,vec__18760,(2),null);
cljs.core.chunk_append.call(null,b__18759,cljs.core.repeat.call(null,this_bucket,v.call(null,index)));

var G__18810 = (i__18758 + (1));
i__18758 = G__18810;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18759),clojure$math$combinatorics$multi_comb_$_iter__18748_$_iter__18756.call(null,cljs.core.chunk_rest.call(null,s__18757__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18759),null);
}
} else {
var vec__18763 = cljs.core.first.call(null,s__18757__$2);
var index = cljs.core.nth.call(null,vec__18763,(0),null);
var this_bucket = cljs.core.nth.call(null,vec__18763,(1),null);
var _ = cljs.core.nth.call(null,vec__18763,(2),null);
return cljs.core.cons.call(null,cljs.core.repeat.call(null,this_bucket,v.call(null,index)),clojure$math$combinatorics$multi_comb_$_iter__18748_$_iter__18756.call(null,cljs.core.rest.call(null,s__18757__$2)));
}
} else {
return null;
}
break;
}
});})(i__18750,q,c__5478__auto__,size__5479__auto__,b__18751,s__18749__$2,temp__5804__auto__,f,v,domain,m,qs))
,null,null));
});})(i__18750,q,c__5478__auto__,size__5479__auto__,b__18751,s__18749__$2,temp__5804__auto__,f,v,domain,m,qs))
;
return iter__5480__auto__.call(null,q);
})()));

var G__18815 = (i__18750 + (1));
i__18750 = G__18815;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18751),clojure$math$combinatorics$multi_comb_$_iter__18748.call(null,cljs.core.chunk_rest.call(null,s__18749__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18751),null);
}
} else {
var q = cljs.core.first.call(null,s__18749__$2);
return cljs.core.cons.call(null,clojure.math.combinatorics.join.call(null,(function (){var iter__5480__auto__ = ((function (q,s__18749__$2,temp__5804__auto__,f,v,domain,m,qs){
return (function clojure$math$combinatorics$multi_comb_$_iter__18748_$_iter__18770(s__18771){
return (new cljs.core.LazySeq(null,(function (){
var s__18771__$1 = s__18771;
while(true){
var temp__5804__auto____$1 = cljs.core.seq.call(null,s__18771__$1);
if(temp__5804__auto____$1){
var s__18771__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__18771__$2)){
var c__5478__auto__ = cljs.core.chunk_first.call(null,s__18771__$2);
var size__5479__auto__ = cljs.core.count.call(null,c__5478__auto__);
var b__18773 = cljs.core.chunk_buffer.call(null,size__5479__auto__);
if((function (){var i__18772 = (0);
while(true){
if((i__18772 < size__5479__auto__)){
var vec__18774 = cljs.core._nth.call(null,c__5478__auto__,i__18772);
var index = cljs.core.nth.call(null,vec__18774,(0),null);
var this_bucket = cljs.core.nth.call(null,vec__18774,(1),null);
var _ = cljs.core.nth.call(null,vec__18774,(2),null);
cljs.core.chunk_append.call(null,b__18773,cljs.core.repeat.call(null,this_bucket,v.call(null,index)));

var G__18819 = (i__18772 + (1));
i__18772 = G__18819;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18773),clojure$math$combinatorics$multi_comb_$_iter__18748_$_iter__18770.call(null,cljs.core.chunk_rest.call(null,s__18771__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18773),null);
}
} else {
var vec__18781 = cljs.core.first.call(null,s__18771__$2);
var index = cljs.core.nth.call(null,vec__18781,(0),null);
var this_bucket = cljs.core.nth.call(null,vec__18781,(1),null);
var _ = cljs.core.nth.call(null,vec__18781,(2),null);
return cljs.core.cons.call(null,cljs.core.repeat.call(null,this_bucket,v.call(null,index)),clojure$math$combinatorics$multi_comb_$_iter__18748_$_iter__18770.call(null,cljs.core.rest.call(null,s__18771__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(q,s__18749__$2,temp__5804__auto__,f,v,domain,m,qs))
;
return iter__5480__auto__.call(null,q);
})()),clojure$math$combinatorics$multi_comb_$_iter__18748.call(null,cljs.core.rest.call(null,s__18749__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__.call(null,qs);
});
/**
 * All the unique ways of taking t different elements from items
 */
clojure.math.combinatorics.combinations = (function clojure$math$combinatorics$combinations(items,t){
var v_items = cljs.core.vec.call(null,cljs.core.reverse.call(null,items));
if((t === (0))){
return (new cljs.core.List(null,cljs.core.List.EMPTY,null,(1),null));
} else {
var cnt = cljs.core.count.call(null,items);
if((t > cnt)){
return null;
} else {
if(cljs.core._EQ_.call(null,t,(1))){
var iter__5480__auto__ = (function clojure$math$combinatorics$combinations_$_iter__18789(s__18790){
return (new cljs.core.LazySeq(null,(function (){
var s__18790__$1 = s__18790;
while(true){
var temp__5804__auto__ = cljs.core.seq.call(null,s__18790__$1);
if(temp__5804__auto__){
var s__18790__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__18790__$2)){
var c__5478__auto__ = cljs.core.chunk_first.call(null,s__18790__$2);
var size__5479__auto__ = cljs.core.count.call(null,c__5478__auto__);
var b__18792 = cljs.core.chunk_buffer.call(null,size__5479__auto__);
if((function (){var i__18791 = (0);
while(true){
if((i__18791 < size__5479__auto__)){
var item = cljs.core._nth.call(null,c__5478__auto__,i__18791);
cljs.core.chunk_append.call(null,b__18792,(new cljs.core.List(null,item,null,(1),null)));

var G__18828 = (i__18791 + (1));
i__18791 = G__18828;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18792),clojure$math$combinatorics$combinations_$_iter__18789.call(null,cljs.core.chunk_rest.call(null,s__18790__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18792),null);
}
} else {
var item = cljs.core.first.call(null,s__18790__$2);
return cljs.core.cons.call(null,(new cljs.core.List(null,item,null,(1),null)),clojure$math$combinatorics$combinations_$_iter__18789.call(null,cljs.core.rest.call(null,s__18790__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__.call(null,cljs.core.distinct.call(null,items));
} else {
if(cljs.core.truth_(clojure.math.combinatorics.all_different_QMARK_.call(null,items))){
if(cljs.core._EQ_.call(null,t,cnt)){
return (new cljs.core.List(null,cljs.core.seq.call(null,items),null,(1),null));
} else {
return cljs.core.map.call(null,(function (p1__18784_SHARP_){
return cljs.core.map.call(null,v_items,p1__18784_SHARP_);
}),clojure.math.combinatorics.index_combinations.call(null,t,cnt));
}
} else {
return clojure.math.combinatorics.multi_comb.call(null,items,t);

}
}
}
}
});
/**
 * Given a sequence that may have chunks, return a sequence that is 1-at-a-time
 * lazy with no chunks. Chunks are good for efficiency when the data items are
 * small, but when being processed via map, for example, a reference is kept to
 * every function result in the chunk until the entire chunk has been processed,
 * which increases the amount of memory in use that cannot be garbage
 * collected.
 */
clojure.math.combinatorics.unchunk = (function clojure$math$combinatorics$unchunk(s){
return (new cljs.core.LazySeq(null,(function (){
if(cljs.core.seq.call(null,s)){
return cljs.core.cons.call(null,cljs.core.first.call(null,s),clojure.math.combinatorics.unchunk.call(null,cljs.core.rest.call(null,s)));
} else {
return null;
}
}),null,null));
});
/**
 * All the subsets of items
 */
clojure.math.combinatorics.subsets = (function clojure$math$combinatorics$subsets(items){
return clojure.math.combinatorics.mapjoin.call(null,(function (n){
return clojure.math.combinatorics.combinations.call(null,items,n);
}),clojure.math.combinatorics.unchunk.call(null,cljs.core.range.call(null,(cljs.core.count.call(null,items) + (1)))));
});
/**
 * All the ways to take one item from each sequence
 */
clojure.math.combinatorics.cartesian_product = (function clojure$math$combinatorics$cartesian_product(var_args){
var args__5732__auto__ = [];
var len__5726__auto___18845 = arguments.length;
var i__5727__auto___18846 = (0);
while(true){
if((i__5727__auto___18846 < len__5726__auto___18845)){
args__5732__auto__.push((arguments[i__5727__auto___18846]));

var G__18847 = (i__5727__auto___18846 + (1));
i__5727__auto___18846 = G__18847;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return clojure.math.combinatorics.cartesian_product.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(clojure.math.combinatorics.cartesian_product.cljs$core$IFn$_invoke$arity$variadic = (function (seqs){
var v_original_seqs = cljs.core.vec.call(null,seqs);
var step = (function clojure$math$combinatorics$step(v_seqs){
var increment = (function (v_seqs__$1){
var i = (cljs.core.count.call(null,v_seqs__$1) - (1));
var v_seqs__$2 = v_seqs__$1;
while(true){
if(cljs.core._EQ_.call(null,i,(-1))){
return null;
} else {
var temp__5802__auto__ = cljs.core.next.call(null,v_seqs__$2.call(null,i));
if(temp__5802__auto__){
var rst = temp__5802__auto__;
return cljs.core.assoc.call(null,v_seqs__$2,i,rst);
} else {
var G__18856 = (i - (1));
var G__18857 = cljs.core.assoc.call(null,v_seqs__$2,i,v_original_seqs.call(null,i));
i = G__18856;
v_seqs__$2 = G__18857;
continue;
}
}
break;
}
});
if(cljs.core.truth_(v_seqs)){
return cljs.core.cons.call(null,cljs.core.map.call(null,cljs.core.first,v_seqs),(new cljs.core.LazySeq(null,(function (){
return clojure$math$combinatorics$step.call(null,increment.call(null,v_seqs));
}),null,null)));
} else {
return null;
}
});
if(cljs.core.every_QMARK_.call(null,cljs.core.seq,seqs)){
return (new cljs.core.LazySeq(null,(function (){
return step.call(null,v_original_seqs);
}),null,null));
} else {
return null;
}
}));

(clojure.math.combinatorics.cartesian_product.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(clojure.math.combinatorics.cartesian_product.cljs$lang$applyTo = (function (seq18818){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq18818));
}));

/**
 * All the ways of taking n (possibly the same) elements from the sequence of items
 */
clojure.math.combinatorics.selections = (function clojure$math$combinatorics$selections(items,n){
return cljs.core.apply.call(null,clojure.math.combinatorics.cartesian_product,cljs.core.take.call(null,n,cljs.core.repeat.call(null,items)));
});
clojure.math.combinatorics.iter_perm = (function clojure$math$combinatorics$iter_perm(v){
var len = cljs.core.count.call(null,v);
var j = (function (){var i = (len - (2));
while(true){
if(cljs.core._EQ_.call(null,i,(-1))){
return null;
} else {
if((v.call(null,i) < v.call(null,(i + (1))))){
return i;
} else {
var G__18870 = (i - (1));
i = G__18870;
continue;

}
}
break;
}
})();
if(cljs.core.truth_(j)){
var vj = v.call(null,j);
var l = (function (){var i = (len - (1));
while(true){
if((vj < v.call(null,i))){
return i;
} else {
var G__18871 = (i - (1));
i = G__18871;
continue;
}
break;
}
})();
var v__$1 = cljs.core.assoc.call(null,v,j,v.call(null,l),l,vj);
var k = (j + (1));
var l__$1 = (len - (1));
while(true){
if((k < l__$1)){
var G__18876 = cljs.core.assoc.call(null,v__$1,k,v__$1.call(null,l__$1),l__$1,v__$1.call(null,k));
var G__18877 = (k + (1));
var G__18878 = (l__$1 - (1));
v__$1 = G__18876;
k = G__18877;
l__$1 = G__18878;
continue;
} else {
return v__$1;
}
break;
}
} else {
return null;
}
});
clojure.math.combinatorics.vec_lex_permutations = (function clojure$math$combinatorics$vec_lex_permutations(v){
if(cljs.core.truth_(v)){
return cljs.core.cons.call(null,v,(new cljs.core.LazySeq(null,(function (){
return clojure.math.combinatorics.vec_lex_permutations.call(null,clojure.math.combinatorics.iter_perm.call(null,v));
}),null,null)));
} else {
return null;
}
});
/**
 * DEPRECATED as a public function.
 * 
 * In prior versions of the combinatorics library, there were two similar functions: permutations and lex-permutations.  It was a source of confusion to know which to call.  Now, you can always call permutations.  When appropriate (i.e., when you pass in a sorted sequence of numbers), permutations will automatically call lex-permutations as a speed optimization.
 */
clojure.math.combinatorics.lex_permutations = (function clojure$math$combinatorics$lex_permutations(c){
return (new cljs.core.LazySeq(null,(function (){
var vec_sorted = cljs.core.vec.call(null,cljs.core.sort.call(null,c));
if((cljs.core.count.call(null,vec_sorted) === (0))){
return (new cljs.core.List(null,cljs.core.PersistentVector.EMPTY,null,(1),null));
} else {
return clojure.math.combinatorics.vec_lex_permutations.call(null,vec_sorted);
}
}),null,null));
});
/**
 * Returns true iff s is a sequence of numbers in non-decreasing order
 */
clojure.math.combinatorics.sorted_numbers_QMARK_ = (function clojure$math$combinatorics$sorted_numbers_QMARK_(s){
var and__5000__auto__ = cljs.core.every_QMARK_.call(null,cljs.core.number_QMARK_,s);
if(and__5000__auto__){
var or__5002__auto__ = cljs.core.empty_QMARK_.call(null,s);
if(or__5002__auto__){
return or__5002__auto__;
} else {
return cljs.core.apply.call(null,cljs.core._LT__EQ_,s);
}
} else {
return and__5000__auto__;
}
});
/**
 * Handles the case when you want the permutations of a list with duplicate items.
 */
clojure.math.combinatorics.multi_perm = (function clojure$math$combinatorics$multi_perm(l){
var f = cljs.core.frequencies.call(null,l);
var v = cljs.core.vec.call(null,cljs.core.distinct.call(null,l));
var indices = clojure.math.combinatorics.join.call(null,(function (){var iter__5480__auto__ = (function clojure$math$combinatorics$multi_perm_$_iter__18887(s__18888){
return (new cljs.core.LazySeq(null,(function (){
var s__18888__$1 = s__18888;
while(true){
var temp__5804__auto__ = cljs.core.seq.call(null,s__18888__$1);
if(temp__5804__auto__){
var s__18888__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__18888__$2)){
var c__5478__auto__ = cljs.core.chunk_first.call(null,s__18888__$2);
var size__5479__auto__ = cljs.core.count.call(null,c__5478__auto__);
var b__18890 = cljs.core.chunk_buffer.call(null,size__5479__auto__);
if((function (){var i__18889 = (0);
while(true){
if((i__18889 < size__5479__auto__)){
var i = cljs.core._nth.call(null,c__5478__auto__,i__18889);
cljs.core.chunk_append.call(null,b__18890,cljs.core.repeat.call(null,f.call(null,v.call(null,i)),i));

var G__18904 = (i__18889 + (1));
i__18889 = G__18904;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18890),clojure$math$combinatorics$multi_perm_$_iter__18887.call(null,cljs.core.chunk_rest.call(null,s__18888__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18890),null);
}
} else {
var i = cljs.core.first.call(null,s__18888__$2);
return cljs.core.cons.call(null,cljs.core.repeat.call(null,f.call(null,v.call(null,i)),i),clojure$math$combinatorics$multi_perm_$_iter__18887.call(null,cljs.core.rest.call(null,s__18888__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__.call(null,cljs.core.range.call(null,cljs.core.count.call(null,v)));
})());
return cljs.core.map.call(null,cljs.core.partial.call(null,cljs.core.map,v),clojure.math.combinatorics.lex_permutations.call(null,indices));
});
/**
 * All the distinct permutations of items, lexicographic by index 
 *   (special handling for duplicate items).
 */
clojure.math.combinatorics.permutations = (function clojure$math$combinatorics$permutations(items){
if(cljs.core.truth_(clojure.math.combinatorics.sorted_numbers_QMARK_.call(null,items))){
return clojure.math.combinatorics.lex_permutations.call(null,items);
} else {
if(cljs.core.truth_(clojure.math.combinatorics.all_different_QMARK_.call(null,items))){
var v = cljs.core.vec.call(null,items);
return cljs.core.map.call(null,(function (p1__18899_SHARP_){
return cljs.core.map.call(null,v,p1__18899_SHARP_);
}),clojure.math.combinatorics.lex_permutations.call(null,cljs.core.range.call(null,cljs.core.count.call(null,v))));
} else {
return clojure.math.combinatorics.multi_perm.call(null,items);

}
}
});
/**
 * Every permutation of every combination of t elements from items
 */
clojure.math.combinatorics.permuted_combinations = (function clojure$math$combinatorics$permuted_combinations(items,t){
return clojure.math.combinatorics.join.call(null,cljs.core.map.call(null,clojure.math.combinatorics.permutations,clojure.math.combinatorics.combinations.call(null,items,t)));
});
clojure.math.combinatorics.factorial = (function clojure$math$combinatorics$factorial(n){
if(cljs.core.integer_QMARK_.call(null,n)){
} else {
throw (new Error("Assert failed: (integer? n)"));
}

if((!((n < (0))))){
} else {
throw (new Error("Assert failed: (not (neg? n))"));
}

var acc = (1);
var n__$1 = n;
while(true){
if((n__$1 === (0))){
return acc;
} else {
var G__18917 = clojure.math.combinatorics._STAR__SINGLEQUOTE_.call(null,acc,n__$1);
var G__18918 = (n__$1 - (1));
acc = G__18917;
n__$1 = G__18918;
continue;
}
break;
}
});
/**
 * Input is a non-negative base 10 integer, output is the number in the
 * factorial number system (http://en.wikipedia.org/wiki/Factorial_number_system)
 * expressed as a list of 'digits'
 */
clojure.math.combinatorics.factorial_numbers = (function clojure$math$combinatorics$factorial_numbers(n){
if(cljs.core.integer_QMARK_.call(null,n)){
} else {
throw (new Error("Assert failed: (integer? n)"));
}

if((!((n < (0))))){
} else {
throw (new Error("Assert failed: (not (neg? n))"));
}

var n__$1 = n;
var digits = cljs.core.List.EMPTY;
var divisor = (1);
while(true){
if((n__$1 === (0))){
return digits;
} else {
var q = cljs.core.quot.call(null,n__$1,divisor);
var r = cljs.core.rem.call(null,n__$1,divisor);
var G__18919 = q;
var G__18920 = cljs.core.cons.call(null,r,digits);
var G__18921 = (divisor + (1));
n__$1 = G__18919;
digits = G__18920;
divisor = G__18921;
continue;
}
break;
}
});
clojure.math.combinatorics.remove_nth = (function clojure$math$combinatorics$remove_nth(l,n){
var acc = cljs.core.PersistentVector.EMPTY;
var l__$1 = l;
var n__$1 = n;
while(true){
if((n__$1 === (0))){
return cljs.core.into.call(null,acc,cljs.core.rest.call(null,l__$1));
} else {
var G__18922 = cljs.core.conj.call(null,acc,cljs.core.first.call(null,l__$1));
var G__18923 = cljs.core.rest.call(null,l__$1);
var G__18924 = (n__$1 - (1));
acc = G__18922;
l__$1 = G__18923;
n__$1 = G__18924;
continue;
}
break;
}
});
/**
 * Input should be a sorted sequential collection l of distinct items, 
 * output is nth-permutation (0-based)
 */
clojure.math.combinatorics.nth_permutation_distinct = (function clojure$math$combinatorics$nth_permutation_distinct(l,n){
if((n < clojure.math.combinatorics.factorial.call(null,cljs.core.count.call(null,l)))){
} else {
throw (new Error(["Assert failed: ",cljs.core.print_str.call(null,n,"is too large. Input has only",clojure.math.combinatorics.factorial.call(null,cljs.core.count.call(null,l)),"permutations."),"\n","(< n (factorial (count l)))"].join('')));
}

var length = cljs.core.count.call(null,l);
var fact_nums = clojure.math.combinatorics.factorial_numbers.call(null,n);
var indices = cljs.core.concat.call(null,cljs.core.repeat.call(null,(length - cljs.core.count.call(null,fact_nums)),(0)),fact_nums);
var l__$1 = l;
var perm = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.empty_QMARK_.call(null,indices)){
return perm;
} else {
var i = cljs.core.first.call(null,indices);
var item = cljs.core.nth.call(null,l__$1,i);
var G__18925 = cljs.core.rest.call(null,indices);
var G__18926 = clojure.math.combinatorics.remove_nth.call(null,l__$1,i);
var G__18927 = cljs.core.conj.call(null,perm,item);
indices = G__18925;
l__$1 = G__18926;
perm = G__18927;
continue;
}
break;
}
});
clojure.math.combinatorics.count_permutations_from_frequencies = (function clojure$math$combinatorics$count_permutations_from_frequencies(freqs){
var counts = cljs.core.vals.call(null,freqs);
return cljs.core.reduce.call(null,cljs.core._SLASH_,clojure.math.combinatorics.factorial.call(null,cljs.core.apply.call(null,cljs.core._PLUS_,counts)),cljs.core.map.call(null,clojure.math.combinatorics.factorial,counts));
});
/**
 * Counts the number of distinct permutations of l
 */
clojure.math.combinatorics.count_permutations = (function clojure$math$combinatorics$count_permutations(l){
if(cljs.core.truth_(clojure.math.combinatorics.all_different_QMARK_.call(null,l))){
return clojure.math.combinatorics.factorial.call(null,cljs.core.count.call(null,l));
} else {
return clojure.math.combinatorics.count_permutations_from_frequencies.call(null,cljs.core.frequencies.call(null,l));
}
});
/**
 * Takes a sorted frequency map and returns how far into the sequence of
 * lexicographic permutations you get by varying the first item
 */
clojure.math.combinatorics.initial_perm_numbers = (function clojure$math$combinatorics$initial_perm_numbers(freqs){
return cljs.core.reductions.call(null,clojure.math.combinatorics._PLUS__SINGLEQUOTE_,(0),(function (){var iter__5480__auto__ = (function clojure$math$combinatorics$initial_perm_numbers_$_iter__18928(s__18929){
return (new cljs.core.LazySeq(null,(function (){
var s__18929__$1 = s__18929;
while(true){
var temp__5804__auto__ = cljs.core.seq.call(null,s__18929__$1);
if(temp__5804__auto__){
var s__18929__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__18929__$2)){
var c__5478__auto__ = cljs.core.chunk_first.call(null,s__18929__$2);
var size__5479__auto__ = cljs.core.count.call(null,c__5478__auto__);
var b__18931 = cljs.core.chunk_buffer.call(null,size__5479__auto__);
if((function (){var i__18930 = (0);
while(true){
if((i__18930 < size__5479__auto__)){
var vec__18932 = cljs.core._nth.call(null,c__5478__auto__,i__18930);
var k = cljs.core.nth.call(null,vec__18932,(0),null);
var v = cljs.core.nth.call(null,vec__18932,(1),null);
cljs.core.chunk_append.call(null,b__18931,clojure.math.combinatorics.count_permutations_from_frequencies.call(null,cljs.core.assoc.call(null,freqs,k,(v - (1)))));

var G__18938 = (i__18930 + (1));
i__18930 = G__18938;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18931),clojure$math$combinatorics$initial_perm_numbers_$_iter__18928.call(null,cljs.core.chunk_rest.call(null,s__18929__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18931),null);
}
} else {
var vec__18935 = cljs.core.first.call(null,s__18929__$2);
var k = cljs.core.nth.call(null,vec__18935,(0),null);
var v = cljs.core.nth.call(null,vec__18935,(1),null);
return cljs.core.cons.call(null,clojure.math.combinatorics.count_permutations_from_frequencies.call(null,cljs.core.assoc.call(null,freqs,k,(v - (1)))),clojure$math$combinatorics$initial_perm_numbers_$_iter__18928.call(null,cljs.core.rest.call(null,s__18929__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__.call(null,freqs);
})());
});
/**
 * Finds the index and remainder from the initial-perm-numbers.
 */
clojure.math.combinatorics.index_remainder = (function clojure$math$combinatorics$index_remainder(perm_numbers,n){
var perm_numbers__$1 = perm_numbers;
var index = (0);
while(true){
if((((cljs.core.first.call(null,perm_numbers__$1) <= n)) && ((n < cljs.core.second.call(null,perm_numbers__$1))))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,(n - cljs.core.first.call(null,perm_numbers__$1))], null);
} else {
var G__18939 = cljs.core.rest.call(null,perm_numbers__$1);
var G__18940 = (index + (1));
perm_numbers__$1 = G__18939;
index = G__18940;
continue;
}
break;
}
});
clojure.math.combinatorics.dec_key = (function clojure$math$combinatorics$dec_key(m,k){
if(cljs.core._EQ_.call(null,(1),m.call(null,k))){
return cljs.core.dissoc.call(null,m,k);
} else {
return cljs.core.update_in.call(null,m,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [k], null),cljs.core.dec);
}
});
/**
 * Input is a non-negative base 10 integer n, and a sorted frequency map freqs.
 * Output is a list of 'digits' in this wacky duplicate factorial number system
 */
clojure.math.combinatorics.factorial_numbers_with_duplicates = (function clojure$math$combinatorics$factorial_numbers_with_duplicates(n,freqs){
var n__$1 = n;
var digits = cljs.core.PersistentVector.EMPTY;
var freqs__$1 = freqs;
while(true){
if((n__$1 === (0))){
return cljs.core.into.call(null,digits,cljs.core.repeat.call(null,cljs.core.apply.call(null,cljs.core._PLUS_,cljs.core.vals.call(null,freqs__$1)),(0)));
} else {
var vec__18944 = clojure.math.combinatorics.index_remainder.call(null,clojure.math.combinatorics.initial_perm_numbers.call(null,freqs__$1),n__$1);
var index = cljs.core.nth.call(null,vec__18944,(0),null);
var remainder = cljs.core.nth.call(null,vec__18944,(1),null);
var G__18947 = remainder;
var G__18948 = cljs.core.conj.call(null,digits,index);
var G__18949 = (function (){var nth_key = cljs.core.nth.call(null,cljs.core.keys.call(null,freqs__$1),index);
return clojure.math.combinatorics.dec_key.call(null,freqs__$1,nth_key);
})();
n__$1 = G__18947;
digits = G__18948;
freqs__$1 = G__18949;
continue;
}
break;
}
});
/**
 * Input should be a sorted sequential collection l of distinct items, 
 * output is nth-permutation (0-based)
 */
clojure.math.combinatorics.nth_permutation_duplicates = (function clojure$math$combinatorics$nth_permutation_duplicates(l,n){
if((n < clojure.math.combinatorics.count_permutations.call(null,l))){
} else {
throw (new Error(["Assert failed: ",cljs.core.print_str.call(null,n,"is too large. Input has only",clojure.math.combinatorics.count_permutations.call(null,l),"permutations."),"\n","(< n (count-permutations l))"].join('')));
}

var freqs = cljs.core.into.call(null,cljs.core.sorted_map.call(null),cljs.core.frequencies.call(null,l));
var indices = clojure.math.combinatorics.factorial_numbers_with_duplicates.call(null,n,freqs);
var perm = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.empty_QMARK_.call(null,indices)){
return perm;
} else {
var i = cljs.core.first.call(null,indices);
var item = cljs.core.nth.call(null,cljs.core.keys.call(null,freqs),i);
var G__18950 = clojure.math.combinatorics.dec_key.call(null,freqs,item);
var G__18951 = cljs.core.rest.call(null,indices);
var G__18952 = cljs.core.conj.call(null,perm,item);
freqs = G__18950;
indices = G__18951;
perm = G__18952;
continue;
}
break;
}
});
/**
 * (nth (permutations items)) but calculated more directly.
 */
clojure.math.combinatorics.nth_permutation = (function clojure$math$combinatorics$nth_permutation(items,n){
if(cljs.core.truth_(clojure.math.combinatorics.sorted_numbers_QMARK_.call(null,items))){
if(cljs.core.truth_(clojure.math.combinatorics.all_different_QMARK_.call(null,items))){
return clojure.math.combinatorics.nth_permutation_distinct.call(null,items,n);
} else {
return clojure.math.combinatorics.nth_permutation_duplicates.call(null,items,n);
}
} else {
if(cljs.core.truth_(clojure.math.combinatorics.all_different_QMARK_.call(null,items))){
var v = cljs.core.vec.call(null,items);
var perm_indices = clojure.math.combinatorics.nth_permutation_distinct.call(null,cljs.core.range.call(null,cljs.core.count.call(null,items)),n);
return cljs.core.vec.call(null,cljs.core.map.call(null,v,perm_indices));
} else {
var v = cljs.core.vec.call(null,cljs.core.distinct.call(null,items));
var f = cljs.core.frequencies.call(null,items);
var indices = clojure.math.combinatorics.join.call(null,(function (){var iter__5480__auto__ = (function clojure$math$combinatorics$nth_permutation_$_iter__18953(s__18954){
return (new cljs.core.LazySeq(null,(function (){
var s__18954__$1 = s__18954;
while(true){
var temp__5804__auto__ = cljs.core.seq.call(null,s__18954__$1);
if(temp__5804__auto__){
var s__18954__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__18954__$2)){
var c__5478__auto__ = cljs.core.chunk_first.call(null,s__18954__$2);
var size__5479__auto__ = cljs.core.count.call(null,c__5478__auto__);
var b__18956 = cljs.core.chunk_buffer.call(null,size__5479__auto__);
if((function (){var i__18955 = (0);
while(true){
if((i__18955 < size__5479__auto__)){
var i = cljs.core._nth.call(null,c__5478__auto__,i__18955);
cljs.core.chunk_append.call(null,b__18956,cljs.core.repeat.call(null,f.call(null,v.call(null,i)),i));

var G__18957 = (i__18955 + (1));
i__18955 = G__18957;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18956),clojure$math$combinatorics$nth_permutation_$_iter__18953.call(null,cljs.core.chunk_rest.call(null,s__18954__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18956),null);
}
} else {
var i = cljs.core.first.call(null,s__18954__$2);
return cljs.core.cons.call(null,cljs.core.repeat.call(null,f.call(null,v.call(null,i)),i),clojure$math$combinatorics$nth_permutation_$_iter__18953.call(null,cljs.core.rest.call(null,s__18954__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__.call(null,cljs.core.range.call(null,cljs.core.count.call(null,v)));
})());
return cljs.core.vec.call(null,cljs.core.map.call(null,v,clojure.math.combinatorics.nth_permutation_duplicates.call(null,indices,n)));
}
}
});
/**
 * (drop n (permutations items)) but calculated more directly.
 */
clojure.math.combinatorics.drop_permutations = (function clojure$math$combinatorics$drop_permutations(items,n){
if((n === (0))){
return clojure.math.combinatorics.permutations.call(null,items);
} else {
if(cljs.core._EQ_.call(null,n,clojure.math.combinatorics.count_permutations.call(null,items))){
return cljs.core.List.EMPTY;
} else {
if(cljs.core.truth_(clojure.math.combinatorics.sorted_numbers_QMARK_.call(null,items))){
if(cljs.core.truth_(clojure.math.combinatorics.all_different_QMARK_.call(null,items))){
return clojure.math.combinatorics.vec_lex_permutations.call(null,clojure.math.combinatorics.nth_permutation_distinct.call(null,items,n));
} else {
return clojure.math.combinatorics.vec_lex_permutations.call(null,clojure.math.combinatorics.nth_permutation_duplicates.call(null,items,n));
}
} else {
if(cljs.core.truth_(clojure.math.combinatorics.all_different_QMARK_.call(null,items))){
var v = cljs.core.vec.call(null,items);
var perm_indices = clojure.math.combinatorics.nth_permutation_distinct.call(null,cljs.core.range.call(null,cljs.core.count.call(null,items)),n);
return cljs.core.map.call(null,cljs.core.partial.call(null,cljs.core.map,v),clojure.math.combinatorics.vec_lex_permutations.call(null,perm_indices));
} else {
var v = cljs.core.vec.call(null,cljs.core.distinct.call(null,items));
var f = cljs.core.frequencies.call(null,items);
var indices = clojure.math.combinatorics.join.call(null,(function (){var iter__5480__auto__ = (function clojure$math$combinatorics$drop_permutations_$_iter__18958(s__18959){
return (new cljs.core.LazySeq(null,(function (){
var s__18959__$1 = s__18959;
while(true){
var temp__5804__auto__ = cljs.core.seq.call(null,s__18959__$1);
if(temp__5804__auto__){
var s__18959__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__18959__$2)){
var c__5478__auto__ = cljs.core.chunk_first.call(null,s__18959__$2);
var size__5479__auto__ = cljs.core.count.call(null,c__5478__auto__);
var b__18961 = cljs.core.chunk_buffer.call(null,size__5479__auto__);
if((function (){var i__18960 = (0);
while(true){
if((i__18960 < size__5479__auto__)){
var i = cljs.core._nth.call(null,c__5478__auto__,i__18960);
cljs.core.chunk_append.call(null,b__18961,cljs.core.repeat.call(null,f.call(null,v.call(null,i)),i));

var G__18962 = (i__18960 + (1));
i__18960 = G__18962;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18961),clojure$math$combinatorics$drop_permutations_$_iter__18958.call(null,cljs.core.chunk_rest.call(null,s__18959__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18961),null);
}
} else {
var i = cljs.core.first.call(null,s__18959__$2);
return cljs.core.cons.call(null,cljs.core.repeat.call(null,f.call(null,v.call(null,i)),i),clojure$math$combinatorics$drop_permutations_$_iter__18958.call(null,cljs.core.rest.call(null,s__18959__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__.call(null,cljs.core.range.call(null,cljs.core.count.call(null,v)));
})());
return cljs.core.map.call(null,cljs.core.partial.call(null,cljs.core.map,v),clojure.math.combinatorics.vec_lex_permutations.call(null,clojure.math.combinatorics.nth_permutation_duplicates.call(null,indices,n)));
}
}

}
}
});
clojure.math.combinatorics.n_take_k = (function clojure$math$combinatorics$n_take_k(n,k){
while(true){
if((k < (0))){
return (0);
} else {
if((k > n)){
return (0);
} else {
if((k === (0))){
return (1);
} else {
if(cljs.core._EQ_.call(null,k,(1))){
return n;
} else {
if((k > cljs.core.quot.call(null,n,(2)))){
var G__18963 = n;
var G__18964 = (n - k);
n = G__18963;
k = G__18964;
continue;
} else {
return (cljs.core.apply.call(null,clojure.math.combinatorics._STAR__SINGLEQUOTE_,cljs.core.range.call(null,((n - k) + (1)),(n + (1)))) / cljs.core.apply.call(null,clojure.math.combinatorics._STAR__SINGLEQUOTE_,cljs.core.range.call(null,(1),(k + (1)))));

}
}
}
}
}
break;
}
});
clojure.math.combinatorics.count_combinations_from_frequencies = (function clojure$math$combinatorics$count_combinations_from_frequencies(freqs,t){
var counts = cljs.core.vals.call(null,freqs);
var sum = cljs.core.apply.call(null,cljs.core._PLUS_,counts);
if((t === (0))){
return (1);
} else {
if(cljs.core._EQ_.call(null,t,(1))){
return cljs.core.count.call(null,freqs);
} else {
if(cljs.core.every_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [(1),null], null), null),counts)){
return clojure.math.combinatorics.n_take_k.call(null,cljs.core.count.call(null,freqs),t);
} else {
if((t > sum)){
return (0);
} else {
if(cljs.core._EQ_.call(null,t,sum)){
return (1);
} else {
if(cljs.core._EQ_.call(null,cljs.core.count.call(null,freqs),(1))){
return (1);
} else {
var new_freqs = clojure.math.combinatorics.dec_key.call(null,freqs,cljs.core.first.call(null,cljs.core.keys.call(null,freqs)));
return clojure.math.combinatorics._PLUS__SINGLEQUOTE_.call(null,clojure.math.combinatorics.count_combinations_from_frequencies.call(null,new_freqs,(t - (1))),clojure.math.combinatorics.count_combinations_from_frequencies.call(null,cljs.core.dissoc.call(null,freqs,cljs.core.first.call(null,cljs.core.keys.call(null,freqs))),t));

}
}
}
}
}
}
});
/**
 * We need an internal version that doesn't memoize each call to count-combinations-from-frequencies
 * so that we can memoize over a series of calls.
 */
clojure.math.combinatorics.count_combinations_unmemoized = (function clojure$math$combinatorics$count_combinations_unmemoized(items,t){
if(cljs.core.truth_(clojure.math.combinatorics.all_different_QMARK_.call(null,items))){
return clojure.math.combinatorics.n_take_k.call(null,cljs.core.count.call(null,items),t);
} else {
return clojure.math.combinatorics.count_combinations_from_frequencies.call(null,cljs.core.frequencies.call(null,items),t);
}
});
/**
 * (count (combinations items t)) but computed more directly
 */
clojure.math.combinatorics.count_combinations = (function clojure$math$combinatorics$count_combinations(items,t){
var count_combinations_from_frequencies_orig_val__18965 = clojure.math.combinatorics.count_combinations_from_frequencies;
var count_combinations_from_frequencies_temp_val__18966 = cljs.core.memoize.call(null,clojure.math.combinatorics.count_combinations_from_frequencies);
(clojure.math.combinatorics.count_combinations_from_frequencies = count_combinations_from_frequencies_temp_val__18966);

try{return clojure.math.combinatorics.count_combinations_unmemoized.call(null,items,t);
}finally {(clojure.math.combinatorics.count_combinations_from_frequencies = count_combinations_from_frequencies_orig_val__18965);
}});
clojure.math.combinatorics.expt_int = (function clojure$math$combinatorics$expt_int(base,pow){
var n = pow;
var y = (1);
var z = base;
while(true){
var t = cljs.core.even_QMARK_.call(null,n);
var n__$1 = cljs.core.quot.call(null,n,(2));
if(t){
var G__18967 = n__$1;
var G__18968 = y;
var G__18969 = clojure.math.combinatorics._STAR__SINGLEQUOTE_.call(null,z,z);
n = G__18967;
y = G__18968;
z = G__18969;
continue;
} else {
if((n__$1 === (0))){
return clojure.math.combinatorics._STAR__SINGLEQUOTE_.call(null,z,y);
} else {
var G__18974 = n__$1;
var G__18975 = clojure.math.combinatorics._STAR__SINGLEQUOTE_.call(null,z,y);
var G__18976 = clojure.math.combinatorics._STAR__SINGLEQUOTE_.call(null,z,z);
n = G__18974;
y = G__18975;
z = G__18976;
continue;

}
}
break;
}
});
clojure.math.combinatorics.count_subsets_unmemoized = (function clojure$math$combinatorics$count_subsets_unmemoized(items){
if(cljs.core.empty_QMARK_.call(null,items)){
return (1);
} else {
if(cljs.core.truth_(clojure.math.combinatorics.all_different_QMARK_.call(null,items))){
return clojure.math.combinatorics.expt_int.call(null,(2),cljs.core.count.call(null,items));
} else {
return cljs.core.apply.call(null,clojure.math.combinatorics._PLUS__SINGLEQUOTE_,(function (){var iter__5480__auto__ = (function clojure$math$combinatorics$count_subsets_unmemoized_$_iter__18970(s__18971){
return (new cljs.core.LazySeq(null,(function (){
var s__18971__$1 = s__18971;
while(true){
var temp__5804__auto__ = cljs.core.seq.call(null,s__18971__$1);
if(temp__5804__auto__){
var s__18971__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__18971__$2)){
var c__5478__auto__ = cljs.core.chunk_first.call(null,s__18971__$2);
var size__5479__auto__ = cljs.core.count.call(null,c__5478__auto__);
var b__18973 = cljs.core.chunk_buffer.call(null,size__5479__auto__);
if((function (){var i__18972 = (0);
while(true){
if((i__18972 < size__5479__auto__)){
var i = cljs.core._nth.call(null,c__5478__auto__,i__18972);
cljs.core.chunk_append.call(null,b__18973,clojure.math.combinatorics.count_combinations_unmemoized.call(null,items,i));

var G__18979 = (i__18972 + (1));
i__18972 = G__18979;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18973),clojure$math$combinatorics$count_subsets_unmemoized_$_iter__18970.call(null,cljs.core.chunk_rest.call(null,s__18971__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18973),null);
}
} else {
var i = cljs.core.first.call(null,s__18971__$2);
return cljs.core.cons.call(null,clojure.math.combinatorics.count_combinations_unmemoized.call(null,items,i),clojure$math$combinatorics$count_subsets_unmemoized_$_iter__18970.call(null,cljs.core.rest.call(null,s__18971__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__.call(null,cljs.core.range.call(null,(0),(cljs.core.count.call(null,items) + (1))));
})());

}
}
});
/**
 * (count (subsets items)) but computed more directly
 */
clojure.math.combinatorics.count_subsets = (function clojure$math$combinatorics$count_subsets(items){
var count_combinations_from_frequencies_orig_val__18977 = clojure.math.combinatorics.count_combinations_from_frequencies;
var count_combinations_from_frequencies_temp_val__18978 = cljs.core.memoize.call(null,clojure.math.combinatorics.count_combinations_from_frequencies);
(clojure.math.combinatorics.count_combinations_from_frequencies = count_combinations_from_frequencies_temp_val__18978);

try{return clojure.math.combinatorics.count_subsets_unmemoized.call(null,items);
}finally {(clojure.math.combinatorics.count_combinations_from_frequencies = count_combinations_from_frequencies_orig_val__18977);
}});
/**
 * The nth element of the sequence of t-combinations of items,
 * where items is a collection of distinct elements
 */
clojure.math.combinatorics.nth_combination_distinct = (function clojure$math$combinatorics$nth_combination_distinct(items,t,n){
var comb = cljs.core.PersistentVector.EMPTY;
var items__$1 = items;
var t__$1 = t;
var n__$1 = n;
while(true){
if((((n__$1 === (0))) || (cljs.core.empty_QMARK_.call(null,items__$1)))){
return cljs.core.into.call(null,comb,cljs.core.take.call(null,t__$1,items__$1));
} else {
var dc_dt = clojure.math.combinatorics.n_take_k.call(null,(cljs.core.count.call(null,items__$1) - (1)),(t__$1 - (1)));
if((n__$1 < dc_dt)){
var G__18980 = cljs.core.conj.call(null,comb,cljs.core.first.call(null,items__$1));
var G__18981 = cljs.core.rest.call(null,items__$1);
var G__18982 = (t__$1 - (1));
var G__18983 = n__$1;
comb = G__18980;
items__$1 = G__18981;
t__$1 = G__18982;
n__$1 = G__18983;
continue;
} else {
var G__18984 = comb;
var G__18985 = cljs.core.rest.call(null,items__$1);
var G__18986 = t__$1;
var G__18987 = (n__$1 - dc_dt);
comb = G__18984;
items__$1 = G__18985;
t__$1 = G__18986;
n__$1 = G__18987;
continue;
}
}
break;
}
});
/**
 * The nth element of the sequence of t-combinations of the multiset
 * represented by freqs
 */
clojure.math.combinatorics.nth_combination_freqs = (function clojure$math$combinatorics$nth_combination_freqs(freqs,t,n){
var comb = cljs.core.PersistentVector.EMPTY;
var freqs__$1 = freqs;
var t__$1 = t;
var n__$1 = n;
while(true){
if((((n__$1 === (0))) || (cljs.core.empty_QMARK_.call(null,freqs__$1)))){
return cljs.core.into.call(null,comb,cljs.core.take.call(null,t__$1,clojure.math.combinatorics.join.call(null,(function (){var iter__5480__auto__ = ((function (comb,freqs__$1,t__$1,n__$1){
return (function clojure$math$combinatorics$nth_combination_freqs_$_iter__18998(s__18999){
return (new cljs.core.LazySeq(null,((function (comb,freqs__$1,t__$1,n__$1){
return (function (){
var s__18999__$1 = s__18999;
while(true){
var temp__5804__auto__ = cljs.core.seq.call(null,s__18999__$1);
if(temp__5804__auto__){
var s__18999__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__18999__$2)){
var c__5478__auto__ = cljs.core.chunk_first.call(null,s__18999__$2);
var size__5479__auto__ = cljs.core.count.call(null,c__5478__auto__);
var b__19001 = cljs.core.chunk_buffer.call(null,size__5479__auto__);
if((function (){var i__19000 = (0);
while(true){
if((i__19000 < size__5479__auto__)){
var vec__19002 = cljs.core._nth.call(null,c__5478__auto__,i__19000);
var k = cljs.core.nth.call(null,vec__19002,(0),null);
var v = cljs.core.nth.call(null,vec__19002,(1),null);
cljs.core.chunk_append.call(null,b__19001,cljs.core.repeat.call(null,v,k));

var G__19008 = (i__19000 + (1));
i__19000 = G__19008;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19001),clojure$math$combinatorics$nth_combination_freqs_$_iter__18998.call(null,cljs.core.chunk_rest.call(null,s__18999__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19001),null);
}
} else {
var vec__19005 = cljs.core.first.call(null,s__18999__$2);
var k = cljs.core.nth.call(null,vec__19005,(0),null);
var v = cljs.core.nth.call(null,vec__19005,(1),null);
return cljs.core.cons.call(null,cljs.core.repeat.call(null,v,k),clojure$math$combinatorics$nth_combination_freqs_$_iter__18998.call(null,cljs.core.rest.call(null,s__18999__$2)));
}
} else {
return null;
}
break;
}
});})(comb,freqs__$1,t__$1,n__$1))
,null,null));
});})(comb,freqs__$1,t__$1,n__$1))
;
return iter__5480__auto__.call(null,freqs__$1);
})())));
} else {
var first_key = cljs.core.first.call(null,cljs.core.keys.call(null,freqs__$1));
var remove_one_key = clojure.math.combinatorics.dec_key.call(null,freqs__$1,first_key);
var dc_dt = clojure.math.combinatorics.count_combinations_from_frequencies.call(null,remove_one_key,(t__$1 - (1)));
if((n__$1 < dc_dt)){
var G__19011 = cljs.core.conj.call(null,comb,first_key);
var G__19012 = remove_one_key;
var G__19013 = (t__$1 - (1));
var G__19014 = n__$1;
comb = G__19011;
freqs__$1 = G__19012;
t__$1 = G__19013;
n__$1 = G__19014;
continue;
} else {
var G__19019 = comb;
var G__19020 = cljs.core.dissoc.call(null,freqs__$1,first_key);
var G__19021 = t__$1;
var G__19022 = (n__$1 - dc_dt);
comb = G__19019;
freqs__$1 = G__19020;
t__$1 = G__19021;
n__$1 = G__19022;
continue;
}
}
break;
}
});
/**
 * The nth element of the sequence of t-combinations of items
 */
clojure.math.combinatorics.nth_combination = (function clojure$math$combinatorics$nth_combination(items,t,n){
if((n < clojure.math.combinatorics.count_combinations.call(null,items,t))){
} else {
throw (new Error(["Assert failed: ",cljs.core.print_str.call(null,n,"is too large. Input has only",clojure.math.combinatorics.count_combinations_unmemoized.call(null,items,t),"combinations."),"\n","(< n (count-combinations items t))"].join('')));
}

if(cljs.core.truth_(clojure.math.combinatorics.all_different_QMARK_.call(null,items))){
return clojure.math.combinatorics.nth_combination_distinct.call(null,items,t,n);
} else {
var count_combinations_from_frequencies_orig_val__19009 = clojure.math.combinatorics.count_combinations_from_frequencies;
var count_combinations_from_frequencies_temp_val__19010 = cljs.core.memoize.call(null,clojure.math.combinatorics.count_combinations_from_frequencies);
(clojure.math.combinatorics.count_combinations_from_frequencies = count_combinations_from_frequencies_temp_val__19010);

try{var v = cljs.core.vec.call(null,cljs.core.distinct.call(null,items));
var f = cljs.core.frequencies.call(null,items);
var indices = clojure.math.combinatorics.join.call(null,(function (){var iter__5480__auto__ = (function clojure$math$combinatorics$nth_combination_$_iter__19015(s__19016){
return (new cljs.core.LazySeq(null,(function (){
var s__19016__$1 = s__19016;
while(true){
var temp__5804__auto__ = cljs.core.seq.call(null,s__19016__$1);
if(temp__5804__auto__){
var s__19016__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__19016__$2)){
var c__5478__auto__ = cljs.core.chunk_first.call(null,s__19016__$2);
var size__5479__auto__ = cljs.core.count.call(null,c__5478__auto__);
var b__19018 = cljs.core.chunk_buffer.call(null,size__5479__auto__);
if((function (){var i__19017 = (0);
while(true){
if((i__19017 < size__5479__auto__)){
var i = cljs.core._nth.call(null,c__5478__auto__,i__19017);
cljs.core.chunk_append.call(null,b__19018,cljs.core.repeat.call(null,f.call(null,v.call(null,i)),i));

var G__19023 = (i__19017 + (1));
i__19017 = G__19023;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19018),clojure$math$combinatorics$nth_combination_$_iter__19015.call(null,cljs.core.chunk_rest.call(null,s__19016__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19018),null);
}
} else {
var i = cljs.core.first.call(null,s__19016__$2);
return cljs.core.cons.call(null,cljs.core.repeat.call(null,f.call(null,v.call(null,i)),i),clojure$math$combinatorics$nth_combination_$_iter__19015.call(null,cljs.core.rest.call(null,s__19016__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__.call(null,cljs.core.range.call(null,cljs.core.count.call(null,v)));
})());
var indices_freqs = cljs.core.into.call(null,cljs.core.sorted_map.call(null),cljs.core.frequencies.call(null,indices));
return cljs.core.vec.call(null,cljs.core.map.call(null,v,clojure.math.combinatorics.nth_combination_freqs.call(null,indices_freqs,t,n)));
}finally {(clojure.math.combinatorics.count_combinations_from_frequencies = count_combinations_from_frequencies_orig_val__19009);
}}
});
clojure.math.combinatorics.nth_subset = (function clojure$math$combinatorics$nth_subset(items,n){
if((n < clojure.math.combinatorics.count_subsets.call(null,items))){
} else {
throw (new Error(["Assert failed: ",cljs.core.print_str.call(null,n,"is too large. Input has only",clojure.math.combinatorics.count_subsets.call(null,items),"subsets."),"\n","(< n (count-subsets items))"].join('')));
}

var size = (0);
var n__$1 = n;
while(true){
var num_combinations = clojure.math.combinatorics.count_combinations.call(null,items,size);
if((n__$1 < num_combinations)){
return clojure.math.combinatorics.nth_combination.call(null,items,size,n__$1);
} else {
var G__19024 = (size + (1));
var G__19025 = (n__$1 - num_combinations);
size = G__19024;
n__$1 = G__19025;
continue;
}
break;
}
});
/**
 * The opposite of nth, i.e., from an item in a list, find the n
 */
clojure.math.combinatorics.list_index = (function clojure$math$combinatorics$list_index(l,item){
var l__$1 = l;
var n = (0);
while(true){
if(cljs.core.seq.call(null,l__$1)){
} else {
throw (new Error("Assert failed: (seq l)"));
}

if(cljs.core._EQ_.call(null,item,cljs.core.first.call(null,l__$1))){
return n;
} else {
var G__19027 = cljs.core.rest.call(null,l__$1);
var G__19028 = (n + (1));
l__$1 = G__19027;
n = G__19028;
continue;
}
break;
}
});
clojure.math.combinatorics.permutation_index_distinct = (function clojure$math$combinatorics$permutation_index_distinct(l){
var l__$1 = l;
var index = (0);
var n = (cljs.core.count.call(null,l__$1) - (1));
while(true){
if(cljs.core.empty_QMARK_.call(null,l__$1)){
return index;
} else {
var G__19033 = cljs.core.rest.call(null,l__$1);
var G__19034 = clojure.math.combinatorics._PLUS__SINGLEQUOTE_.call(null,index,clojure.math.combinatorics._STAR__SINGLEQUOTE_.call(null,clojure.math.combinatorics.factorial.call(null,n),clojure.math.combinatorics.list_index.call(null,cljs.core.sort.call(null,l__$1),cljs.core.first.call(null,l__$1))));
var G__19035 = (n - (1));
l__$1 = G__19033;
index = G__19034;
n = G__19035;
continue;
}
break;
}
});
clojure.math.combinatorics.permutation_index_duplicates = (function clojure$math$combinatorics$permutation_index_duplicates(l){
var l__$1 = l;
var index = (0);
var freqs = cljs.core.into.call(null,cljs.core.sorted_map.call(null),cljs.core.frequencies.call(null,l__$1));
while(true){
if(cljs.core.empty_QMARK_.call(null,l__$1)){
return index;
} else {
var G__19040 = cljs.core.rest.call(null,l__$1);
var G__19041 = cljs.core.reduce.call(null,clojure.math.combinatorics._PLUS__SINGLEQUOTE_,index,(function (){var iter__5480__auto__ = ((function (l__$1,index,freqs){
return (function clojure$math$combinatorics$permutation_index_duplicates_$_iter__19036(s__19037){
return (new cljs.core.LazySeq(null,((function (l__$1,index,freqs){
return (function (){
var s__19037__$1 = s__19037;
while(true){
var temp__5804__auto__ = cljs.core.seq.call(null,s__19037__$1);
if(temp__5804__auto__){
var s__19037__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__19037__$2)){
var c__5478__auto__ = cljs.core.chunk_first.call(null,s__19037__$2);
var size__5479__auto__ = cljs.core.count.call(null,c__5478__auto__);
var b__19039 = cljs.core.chunk_buffer.call(null,size__5479__auto__);
if((function (){var i__19038 = (0);
while(true){
if((i__19038 < size__5479__auto__)){
var k = cljs.core._nth.call(null,c__5478__auto__,i__19038);
cljs.core.chunk_append.call(null,b__19039,clojure.math.combinatorics.count_permutations_from_frequencies.call(null,clojure.math.combinatorics.dec_key.call(null,freqs,k)));

var G__19043 = (i__19038 + (1));
i__19038 = G__19043;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19039),clojure$math$combinatorics$permutation_index_duplicates_$_iter__19036.call(null,cljs.core.chunk_rest.call(null,s__19037__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19039),null);
}
} else {
var k = cljs.core.first.call(null,s__19037__$2);
return cljs.core.cons.call(null,clojure.math.combinatorics.count_permutations_from_frequencies.call(null,clojure.math.combinatorics.dec_key.call(null,freqs,k)),clojure$math$combinatorics$permutation_index_duplicates_$_iter__19036.call(null,cljs.core.rest.call(null,s__19037__$2)));
}
} else {
return null;
}
break;
}
});})(l__$1,index,freqs))
,null,null));
});})(l__$1,index,freqs))
;
return iter__5480__auto__.call(null,cljs.core.take_while.call(null,((function (l__$1,index,freqs,iter__5480__auto__){
return (function (p1__19026_SHARP_){
return (cljs.core.compare.call(null,p1__19026_SHARP_,cljs.core.first.call(null,l__$1)) < (0));
});})(l__$1,index,freqs,iter__5480__auto__))
,cljs.core.keys.call(null,freqs)));
})());
var G__19042 = clojure.math.combinatorics.dec_key.call(null,freqs,cljs.core.first.call(null,l__$1));
l__$1 = G__19040;
index = G__19041;
freqs = G__19042;
continue;
}
break;
}
});
/**
 * Input must be a sortable collection of items.  Returns the n such that
 *  (nth-permutation (sort items) n) is items.
 */
clojure.math.combinatorics.permutation_index = (function clojure$math$combinatorics$permutation_index(items){
if(cljs.core.truth_(clojure.math.combinatorics.all_different_QMARK_.call(null,items))){
return clojure.math.combinatorics.permutation_index_distinct.call(null,items);
} else {
return clojure.math.combinatorics.permutation_index_duplicates.call(null,items);
}
});
clojure.math.combinatorics.update = (function clojure$math$combinatorics$update(vec,index,f){
var item = vec.call(null,index);
return cljs.core.assoc.call(null,vec,index,f.call(null,item));
});
clojure.math.combinatorics.reify_bool = (function clojure$math$combinatorics$reify_bool(statement){
if(cljs.core.truth_(statement)){
return (1);
} else {
return (0);
}
});
clojure.math.combinatorics.init = (function clojure$math$combinatorics$init(n,s){
if(cljs.core.truth_(s)){
return cljs.core.vec.call(null,(function (){var iter__5480__auto__ = (function clojure$math$combinatorics$init_$_iter__19044(s__19045){
return (new cljs.core.LazySeq(null,(function (){
var s__19045__$1 = s__19045;
while(true){
var temp__5804__auto__ = cljs.core.seq.call(null,s__19045__$1);
if(temp__5804__auto__){
var s__19045__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__19045__$2)){
var c__5478__auto__ = cljs.core.chunk_first.call(null,s__19045__$2);
var size__5479__auto__ = cljs.core.count.call(null,c__5478__auto__);
var b__19047 = cljs.core.chunk_buffer.call(null,size__5479__auto__);
if((function (){var i__19046 = (0);
while(true){
if((i__19046 < size__5479__auto__)){
var i = cljs.core._nth.call(null,c__5478__auto__,i__19046);
cljs.core.chunk_append.call(null,b__19047,(function (){var x__5087__auto__ = (0);
var y__5088__auto__ = (i - ((n - s) - (-1)));
return ((x__5087__auto__ > y__5088__auto__) ? x__5087__auto__ : y__5088__auto__);
})());

var G__19050 = (i__19046 + (1));
i__19046 = G__19050;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19047),clojure$math$combinatorics$init_$_iter__19044.call(null,cljs.core.chunk_rest.call(null,s__19045__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19047),null);
}
} else {
var i = cljs.core.first.call(null,s__19045__$2);
return cljs.core.cons.call(null,(function (){var x__5087__auto__ = (0);
var y__5088__auto__ = (i - ((n - s) - (-1)));
return ((x__5087__auto__ > y__5088__auto__) ? x__5087__auto__ : y__5088__auto__);
})(),clojure$math$combinatorics$init_$_iter__19044.call(null,cljs.core.rest.call(null,s__19045__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__.call(null,cljs.core.range.call(null,(1),(n + (1))));
})());
} else {
return cljs.core.vec.call(null,cljs.core.repeat.call(null,n,(0)));
}
});
clojure.math.combinatorics.growth_strings_H = (function clojure$math$combinatorics$growth_strings_H(var_args){
var G__19049 = arguments.length;
switch (G__19049) {
case 3:
return clojure.math.combinatorics.growth_strings_H.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 5:
return clojure.math.combinatorics.growth_strings_H.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(clojure.math.combinatorics.growth_strings_H.cljs$core$IFn$_invoke$arity$3 = (function (n,r,s){
return clojure.math.combinatorics.growth_strings_H.call(null,n,clojure.math.combinatorics.init.call(null,n,s),cljs.core.vec.call(null,cljs.core.repeat.call(null,n,(1))),r,s);
}));

(clojure.math.combinatorics.growth_strings_H.cljs$core$IFn$_invoke$arity$5 = (function (n,a,b,r,s){
return cljs.core.cons.call(null,a,(new cljs.core.LazySeq(null,(function (){
if((function (){var and__5000__auto__ = (cljs.core.peek.call(null,b) > cljs.core.peek.call(null,a));
if(and__5000__auto__){
if(cljs.core.truth_(r)){
return (cljs.core.peek.call(null,a) < (r - (1)));
} else {
return true;
}
} else {
return and__5000__auto__;
}
})()){
return clojure.math.combinatorics.growth_strings_H.call(null,n,clojure.math.combinatorics.update.call(null,a,(n - (1)),cljs.core.inc),b,r,s);
} else {
var j = (function (){var j = (n - (2));
while(true){
if((function (){var and__5000__auto__ = (a.call(null,j) < b.call(null,j));
if(and__5000__auto__){
var and__5000__auto____$1 = (cljs.core.truth_(r)?(a.call(null,j) < (r - (1))):true);
if(and__5000__auto____$1){
if(cljs.core.truth_(s)){
return (((s - b.call(null,j)) - clojure.math.combinatorics.reify_bool.call(null,((a.call(null,j) + (1)) === b.call(null,j)))) <= (n - j));
} else {
return true;
}
} else {
return and__5000__auto____$1;
}
} else {
return and__5000__auto__;
}
})()){
return j;
} else {
var G__19059 = (j - (1));
j = G__19059;
continue;
}
break;
}
})();
if((j === (0))){
return cljs.core.List.EMPTY;
} else {
var a__$1 = clojure.math.combinatorics.update.call(null,a,j,cljs.core.inc);
var x = (cljs.core.truth_(s)?(s - (b.call(null,j) + clojure.math.combinatorics.reify_bool.call(null,cljs.core._EQ_.call(null,a__$1.call(null,j),b.call(null,j))))):null);
var vec__19051 = (function (){var a__$2 = a__$1;
var b__$1 = b;
var i = (j + (1));
var current_max = (b__$1.call(null,j) + clojure.math.combinatorics.reify_bool.call(null,(b__$1.call(null,j) === a__$2.call(null,j))));
while(true){
if((i === n)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a__$2,b__$1], null);
} else {
if(cljs.core.truth_((function (){var and__5000__auto__ = s;
if(cljs.core.truth_(and__5000__auto__)){
return (i > ((n - x) - (1)));
} else {
return and__5000__auto__;
}
})())){
var new_a_i = ((i - n) + s);
var G__19060 = cljs.core.assoc.call(null,a__$2,i,new_a_i);
var G__19061 = cljs.core.assoc.call(null,b__$1,i,current_max);
var G__19062 = (i + (1));
var G__19063 = (function (){var x__5087__auto__ = current_max;
var y__5088__auto__ = (new_a_i + (1));
return ((x__5087__auto__ > y__5088__auto__) ? x__5087__auto__ : y__5088__auto__);
})();
a__$2 = G__19060;
b__$1 = G__19061;
i = G__19062;
current_max = G__19063;
continue;
} else {
var G__19064 = cljs.core.assoc.call(null,a__$2,i,(0));
var G__19065 = cljs.core.assoc.call(null,b__$1,i,current_max);
var G__19066 = (i + (1));
var G__19067 = current_max;
a__$2 = G__19064;
b__$1 = G__19065;
i = G__19066;
current_max = G__19067;
continue;

}
}
break;
}
})();
var a__$2 = cljs.core.nth.call(null,vec__19051,(0),null);
var b__$1 = cljs.core.nth.call(null,vec__19051,(1),null);
return clojure.math.combinatorics.growth_strings_H.call(null,n,a__$2,b__$1,r,s);
}
}
}),null,null)));
}));

(clojure.math.combinatorics.growth_strings_H.cljs$lang$maxFixedArity = 5);

clojure.math.combinatorics.lex_partitions_H = (function clojure$math$combinatorics$lex_partitions_H(var_args){
var args__5732__auto__ = [];
var len__5726__auto___19074 = arguments.length;
var i__5727__auto___19075 = (0);
while(true){
if((i__5727__auto___19075 < len__5726__auto___19074)){
args__5732__auto__.push((arguments[i__5727__auto___19075]));

var G__19076 = (i__5727__auto___19075 + (1));
i__5727__auto___19075 = G__19076;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return clojure.math.combinatorics.lex_partitions_H.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(clojure.math.combinatorics.lex_partitions_H.cljs$core$IFn$_invoke$arity$variadic = (function (N,p__19057){
var map__19058 = p__19057;
var map__19058__$1 = cljs.core.__destructure_map.call(null,map__19058);
var from = cljs.core.get.call(null,map__19058__$1,new cljs.core.Keyword(null,"min","min",444991522));
var to = cljs.core.get.call(null,map__19058__$1,new cljs.core.Keyword(null,"max","max",61366548));
if(cljs.core._EQ_.call(null,N,(0))){
if(((((function (){var or__5002__auto__ = from;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return (0);
}
})() <= (0))) && (((0) <= (function (){var or__5002__auto__ = to;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return (0);
}
})())))){
return cljs.core.list(cljs.core.List.EMPTY);
} else {
return cljs.core.List.EMPTY;
}
} else {
var from__$1 = (cljs.core.truth_((function (){var and__5000__auto__ = from;
if(cljs.core.truth_(and__5000__auto__)){
return (from <= (1));
} else {
return and__5000__auto__;
}
})())?null:from);
var to__$1 = (cljs.core.truth_((function (){var and__5000__auto__ = to;
if(cljs.core.truth_(and__5000__auto__)){
return (to >= N);
} else {
return and__5000__auto__;
}
})())?null:to);
if((!(((((1) <= (function (){var or__5002__auto__ = from__$1;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return (1);
}
})())) && (((((function (){var or__5002__auto__ = from__$1;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return (1);
}
})() <= (function (){var or__5002__auto__ = to__$1;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return N;
}
})())) && (((function (){var or__5002__auto__ = to__$1;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return N;
}
})() <= N)))))))){
return cljs.core.List.EMPTY;
} else {
if(cljs.core._EQ_.call(null,N,(0))){
return cljs.core.list(cljs.core.List.EMPTY);
} else {
if(cljs.core._EQ_.call(null,N,(1))){
return cljs.core.list(cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0)], null)));
} else {
if(cljs.core._EQ_.call(null,to__$1,(1))){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,cljs.core.range.call(null,N),null,(1),null))))),null,(1),null)))));
} else {
var growth_strings = clojure.math.combinatorics.growth_strings_H.call(null,N,to__$1,from__$1);
var iter__5480__auto__ = (function clojure$math$combinatorics$iter__19068(s__19069){
return (new cljs.core.LazySeq(null,(function (){
var s__19069__$1 = s__19069;
while(true){
var temp__5804__auto__ = cljs.core.seq.call(null,s__19069__$1);
if(temp__5804__auto__){
var s__19069__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__19069__$2)){
var c__5478__auto__ = cljs.core.chunk_first.call(null,s__19069__$2);
var size__5479__auto__ = cljs.core.count.call(null,c__5478__auto__);
var b__19071 = cljs.core.chunk_buffer.call(null,size__5479__auto__);
if((function (){var i__19070 = (0);
while(true){
if((i__19070 < size__5479__auto__)){
var growth_string = cljs.core._nth.call(null,c__5478__auto__,i__19070);
var groups = cljs.core.group_by.call(null,growth_string,cljs.core.range.call(null,N));
cljs.core.chunk_append.call(null,b__19071,cljs.core.map.call(null,groups,cljs.core.range.call(null,cljs.core.count.call(null,groups))));

var G__19085 = (i__19070 + (1));
i__19070 = G__19085;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19071),clojure$math$combinatorics$iter__19068.call(null,cljs.core.chunk_rest.call(null,s__19069__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19071),null);
}
} else {
var growth_string = cljs.core.first.call(null,s__19069__$2);
var groups = cljs.core.group_by.call(null,growth_string,cljs.core.range.call(null,N));
return cljs.core.cons.call(null,cljs.core.map.call(null,groups,cljs.core.range.call(null,cljs.core.count.call(null,groups))),clojure$math$combinatorics$iter__19068.call(null,cljs.core.rest.call(null,s__19069__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__.call(null,growth_strings);

}
}
}
}
}
}));

(clojure.math.combinatorics.lex_partitions_H.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(clojure.math.combinatorics.lex_partitions_H.cljs$lang$applyTo = (function (seq19055){
var G__19056 = cljs.core.first.call(null,seq19055);
var seq19055__$1 = cljs.core.next.call(null,seq19055);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__19056,seq19055__$1);
}));

clojure.math.combinatorics.partitions_H = (function clojure$math$combinatorics$partitions_H(var_args){
var args__5732__auto__ = [];
var len__5726__auto___19090 = arguments.length;
var i__5727__auto___19091 = (0);
while(true){
if((i__5727__auto___19091 < len__5726__auto___19090)){
args__5732__auto__.push((arguments[i__5727__auto___19091]));

var G__19092 = (i__5727__auto___19091 + (1));
i__5727__auto___19091 = G__19092;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return clojure.math.combinatorics.partitions_H.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(clojure.math.combinatorics.partitions_H.cljs$core$IFn$_invoke$arity$variadic = (function (items,args){
var items__$1 = cljs.core.vec.call(null,items);
var N = cljs.core.count.call(null,items__$1);
var lex = cljs.core.apply.call(null,clojure.math.combinatorics.lex_partitions_H,N,args);
var iter__5480__auto__ = (function clojure$math$combinatorics$iter__19077(s__19078){
return (new cljs.core.LazySeq(null,(function (){
var s__19078__$1 = s__19078;
while(true){
var temp__5804__auto__ = cljs.core.seq.call(null,s__19078__$1);
if(temp__5804__auto__){
var s__19078__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__19078__$2)){
var c__5478__auto__ = cljs.core.chunk_first.call(null,s__19078__$2);
var size__5479__auto__ = cljs.core.count.call(null,c__5478__auto__);
var b__19080 = cljs.core.chunk_buffer.call(null,size__5479__auto__);
if((function (){var i__19079 = (0);
while(true){
if((i__19079 < size__5479__auto__)){
var parts = cljs.core._nth.call(null,c__5478__auto__,i__19079);
cljs.core.chunk_append.call(null,b__19080,(function (){var iter__5480__auto__ = ((function (i__19079,parts,c__5478__auto__,size__5479__auto__,b__19080,s__19078__$2,temp__5804__auto__,items__$1,N,lex){
return (function clojure$math$combinatorics$iter__19077_$_iter__19081(s__19082){
return (new cljs.core.LazySeq(null,((function (i__19079,parts,c__5478__auto__,size__5479__auto__,b__19080,s__19078__$2,temp__5804__auto__,items__$1,N,lex){
return (function (){
var s__19082__$1 = s__19082;
while(true){
var temp__5804__auto____$1 = cljs.core.seq.call(null,s__19082__$1);
if(temp__5804__auto____$1){
var s__19082__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__19082__$2)){
var c__5478__auto____$1 = cljs.core.chunk_first.call(null,s__19082__$2);
var size__5479__auto____$1 = cljs.core.count.call(null,c__5478__auto____$1);
var b__19084 = cljs.core.chunk_buffer.call(null,size__5479__auto____$1);
if((function (){var i__19083 = (0);
while(true){
if((i__19083 < size__5479__auto____$1)){
var part = cljs.core._nth.call(null,c__5478__auto____$1,i__19083);
cljs.core.chunk_append.call(null,b__19084,cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,((function (i__19083,i__19079,part,c__5478__auto____$1,size__5479__auto____$1,b__19084,s__19082__$2,temp__5804__auto____$1,parts,c__5478__auto__,size__5479__auto__,b__19080,s__19078__$2,temp__5804__auto__,items__$1,N,lex){
return (function (v,o){
return cljs.core.conj_BANG_.call(null,v,items__$1.call(null,o));
});})(i__19083,i__19079,part,c__5478__auto____$1,size__5479__auto____$1,b__19084,s__19082__$2,temp__5804__auto____$1,parts,c__5478__auto__,size__5479__auto__,b__19080,s__19078__$2,temp__5804__auto__,items__$1,N,lex))
,cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY),part)));

var G__19098 = (i__19083 + (1));
i__19083 = G__19098;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19084),clojure$math$combinatorics$iter__19077_$_iter__19081.call(null,cljs.core.chunk_rest.call(null,s__19082__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19084),null);
}
} else {
var part = cljs.core.first.call(null,s__19082__$2);
return cljs.core.cons.call(null,cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,((function (i__19079,part,s__19082__$2,temp__5804__auto____$1,parts,c__5478__auto__,size__5479__auto__,b__19080,s__19078__$2,temp__5804__auto__,items__$1,N,lex){
return (function (v,o){
return cljs.core.conj_BANG_.call(null,v,items__$1.call(null,o));
});})(i__19079,part,s__19082__$2,temp__5804__auto____$1,parts,c__5478__auto__,size__5479__auto__,b__19080,s__19078__$2,temp__5804__auto__,items__$1,N,lex))
,cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY),part)),clojure$math$combinatorics$iter__19077_$_iter__19081.call(null,cljs.core.rest.call(null,s__19082__$2)));
}
} else {
return null;
}
break;
}
});})(i__19079,parts,c__5478__auto__,size__5479__auto__,b__19080,s__19078__$2,temp__5804__auto__,items__$1,N,lex))
,null,null));
});})(i__19079,parts,c__5478__auto__,size__5479__auto__,b__19080,s__19078__$2,temp__5804__auto__,items__$1,N,lex))
;
return iter__5480__auto__.call(null,parts);
})());

var G__19102 = (i__19079 + (1));
i__19079 = G__19102;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19080),clojure$math$combinatorics$iter__19077.call(null,cljs.core.chunk_rest.call(null,s__19078__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19080),null);
}
} else {
var parts = cljs.core.first.call(null,s__19078__$2);
return cljs.core.cons.call(null,(function (){var iter__5480__auto__ = ((function (parts,s__19078__$2,temp__5804__auto__,items__$1,N,lex){
return (function clojure$math$combinatorics$iter__19077_$_iter__19086(s__19087){
return (new cljs.core.LazySeq(null,(function (){
var s__19087__$1 = s__19087;
while(true){
var temp__5804__auto____$1 = cljs.core.seq.call(null,s__19087__$1);
if(temp__5804__auto____$1){
var s__19087__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__19087__$2)){
var c__5478__auto__ = cljs.core.chunk_first.call(null,s__19087__$2);
var size__5479__auto__ = cljs.core.count.call(null,c__5478__auto__);
var b__19089 = cljs.core.chunk_buffer.call(null,size__5479__auto__);
if((function (){var i__19088 = (0);
while(true){
if((i__19088 < size__5479__auto__)){
var part = cljs.core._nth.call(null,c__5478__auto__,i__19088);
cljs.core.chunk_append.call(null,b__19089,cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,((function (i__19088,part,c__5478__auto__,size__5479__auto__,b__19089,s__19087__$2,temp__5804__auto____$1,parts,s__19078__$2,temp__5804__auto__,items__$1,N,lex){
return (function (v,o){
return cljs.core.conj_BANG_.call(null,v,items__$1.call(null,o));
});})(i__19088,part,c__5478__auto__,size__5479__auto__,b__19089,s__19087__$2,temp__5804__auto____$1,parts,s__19078__$2,temp__5804__auto__,items__$1,N,lex))
,cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY),part)));

var G__19103 = (i__19088 + (1));
i__19088 = G__19103;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19089),clojure$math$combinatorics$iter__19077_$_iter__19086.call(null,cljs.core.chunk_rest.call(null,s__19087__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19089),null);
}
} else {
var part = cljs.core.first.call(null,s__19087__$2);
return cljs.core.cons.call(null,cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,((function (part,s__19087__$2,temp__5804__auto____$1,parts,s__19078__$2,temp__5804__auto__,items__$1,N,lex){
return (function (v,o){
return cljs.core.conj_BANG_.call(null,v,items__$1.call(null,o));
});})(part,s__19087__$2,temp__5804__auto____$1,parts,s__19078__$2,temp__5804__auto__,items__$1,N,lex))
,cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY),part)),clojure$math$combinatorics$iter__19077_$_iter__19086.call(null,cljs.core.rest.call(null,s__19087__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(parts,s__19078__$2,temp__5804__auto__,items__$1,N,lex))
;
return iter__5480__auto__.call(null,parts);
})(),clojure$math$combinatorics$iter__19077.call(null,cljs.core.rest.call(null,s__19078__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__.call(null,lex);
}));

(clojure.math.combinatorics.partitions_H.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(clojure.math.combinatorics.partitions_H.cljs$lang$applyTo = (function (seq19072){
var G__19073 = cljs.core.first.call(null,seq19072);
var seq19072__$1 = cljs.core.next.call(null,seq19072);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__19073,seq19072__$1);
}));


clojure.math.combinatorics.multiset_partitions_M = (function clojure$math$combinatorics$multiset_partitions_M(var_args){
var G__19094 = arguments.length;
switch (G__19094) {
case 3:
return clojure.math.combinatorics.multiset_partitions_M.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 11:
return clojure.math.combinatorics.multiset_partitions_M.cljs$core$IFn$_invoke$arity$11((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]),(arguments[(7)]),(arguments[(8)]),(arguments[(9)]),(arguments[(10)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(clojure.math.combinatorics.multiset_partitions_M.cljs$core$IFn$_invoke$arity$3 = (function (multiset,r,s){
var n = cljs.core.apply.call(null,cljs.core._PLUS_,cljs.core.vals.call(null,multiset));
var m = cljs.core.count.call(null,multiset);
var f = cljs.core.PersistentVector.EMPTY;
var c = cljs.core.PersistentVector.EMPTY;
var u = cljs.core.PersistentVector.EMPTY;
var v = cljs.core.PersistentVector.EMPTY;
var vec__19095 = (function (){var j = (0);
var c__$1 = c;
var u__$1 = u;
var v__$1 = v;
while(true){
if(cljs.core._EQ_.call(null,j,m)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [c__$1,u__$1,v__$1], null);
} else {
var G__19117 = (j + (1));
var G__19118 = cljs.core.assoc.call(null,c__$1,j,(j + (1)));
var G__19119 = cljs.core.assoc.call(null,u__$1,j,multiset.call(null,(j + (1))));
var G__19120 = cljs.core.assoc.call(null,v__$1,j,multiset.call(null,(j + (1))));
j = G__19117;
c__$1 = G__19118;
u__$1 = G__19119;
v__$1 = G__19120;
continue;
}
break;
}
})();
var c__$1 = cljs.core.nth.call(null,vec__19095,(0),null);
var u__$1 = cljs.core.nth.call(null,vec__19095,(1),null);
var v__$1 = cljs.core.nth.call(null,vec__19095,(2),null);
var a = (0);
var b = m;
var l = (0);
var f__$1 = cljs.core.assoc.call(null,f,(0),(0),(1),m);
var stack = cljs.core.List.EMPTY;
return clojure.math.combinatorics.multiset_partitions_M.call(null,n,m,f__$1,c__$1,u__$1,v__$1,a,b,l,r,s);
}));

(clojure.math.combinatorics.multiset_partitions_M.cljs$core$IFn$_invoke$arity$11 = (function (n,m,f,c,u,v,a,b,l,r,s){
while(true){
var vec__19099 = (function (){var j = a;
var k = b;
var x = false;
var u__$1 = u;
var v__$1 = v;
var c__$1 = c;
while(true){
if((j >= b)){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [u__$1,v__$1,c__$1,j,k], null);
} else {
var u__$2 = cljs.core.assoc.call(null,u__$1,k,(u__$1.call(null,j) - v__$1.call(null,j)));
if(cljs.core._EQ_.call(null,u__$2.call(null,k),(0))){
var G__19125 = (j + (1));
var G__19126 = k;
var G__19127 = true;
var G__19128 = u__$2;
var G__19129 = v__$1;
var G__19130 = c__$1;
j = G__19125;
k = G__19126;
x = G__19127;
u__$1 = G__19128;
v__$1 = G__19129;
c__$1 = G__19130;
continue;
} else {
if(cljs.core.not.call(null,x)){
var c__$2 = cljs.core.assoc.call(null,c__$1,k,c__$1.call(null,j));
var v__$2 = cljs.core.assoc.call(null,v__$1,k,(function (){var x__5090__auto__ = v__$1.call(null,j);
var y__5091__auto__ = u__$2.call(null,k);
return ((x__5090__auto__ < y__5091__auto__) ? x__5090__auto__ : y__5091__auto__);
})());
var x__$1 = (u__$2.call(null,k) < v__$2.call(null,j));
var k__$1 = (k + (1));
var j__$1 = (j + (1));
var G__19131 = j__$1;
var G__19132 = k__$1;
var G__19133 = x__$1;
var G__19134 = u__$2;
var G__19135 = v__$2;
var G__19136 = c__$2;
j = G__19131;
k = G__19132;
x = G__19133;
u__$1 = G__19134;
v__$1 = G__19135;
c__$1 = G__19136;
continue;
} else {
var c__$2 = cljs.core.assoc.call(null,c__$1,k,c__$1.call(null,j));
var v__$2 = cljs.core.assoc.call(null,v__$1,k,u__$2.call(null,k));
var k__$1 = (k + (1));
var j__$1 = (j + (1));
var G__19137 = j__$1;
var G__19138 = k__$1;
var G__19139 = x;
var G__19140 = u__$2;
var G__19141 = v__$2;
var G__19142 = c__$2;
j = G__19137;
k = G__19138;
x = G__19139;
u__$1 = G__19140;
v__$1 = G__19141;
c__$1 = G__19142;
continue;
}
}
}
break;
}
})();
var u__$1 = cljs.core.nth.call(null,vec__19099,(0),null);
var v__$1 = cljs.core.nth.call(null,vec__19099,(1),null);
var c__$1 = cljs.core.nth.call(null,vec__19099,(2),null);
var j = cljs.core.nth.call(null,vec__19099,(3),null);
var k = cljs.core.nth.call(null,vec__19099,(4),null);
if(cljs.core.truth_((function (){var and__5000__auto__ = r;
if(cljs.core.truth_(and__5000__auto__)){
return (((k > b)) && (cljs.core._EQ_.call(null,l,(r - (1)))));
} else {
return and__5000__auto__;
}
})())){
return clojure.math.combinatorics.m5.call(null,n,m,f,c__$1,u__$1,v__$1,a,b,l,r,s);
} else {
if(cljs.core.truth_((function (){var and__5000__auto__ = s;
if(cljs.core.truth_(and__5000__auto__)){
return (((k <= b)) && (((l + (1)) < s)));
} else {
return and__5000__auto__;
}
})())){
return clojure.math.combinatorics.m5.call(null,n,m,f,c__$1,u__$1,v__$1,a,b,l,r,s);
} else {
if((k > b)){
var a__$1 = b;
var b__$1 = k;
var l__$1 = (l + (1));
var f__$1 = cljs.core.assoc.call(null,f,(l__$1 + (1)),b__$1);
var G__19143 = n;
var G__19144 = m;
var G__19145 = f__$1;
var G__19146 = c__$1;
var G__19147 = u__$1;
var G__19148 = v__$1;
var G__19149 = a__$1;
var G__19150 = b__$1;
var G__19151 = l__$1;
var G__19152 = r;
var G__19153 = s;
n = G__19143;
m = G__19144;
f = G__19145;
c = G__19146;
u = G__19147;
v = G__19148;
a = G__19149;
b = G__19150;
l = G__19151;
r = G__19152;
s = G__19153;
continue;
} else {
var part = (function (){var iter__5480__auto__ = ((function (n,m,f,c,u,v,a,b,l,r,s,vec__19099,u__$1,v__$1,c__$1,j,k){
return (function clojure$math$combinatorics$iter__19104(s__19105){
return (new cljs.core.LazySeq(null,((function (n,m,f,c,u,v,a,b,l,r,s,vec__19099,u__$1,v__$1,c__$1,j,k){
return (function (){
var s__19105__$1 = s__19105;
while(true){
var temp__5804__auto__ = cljs.core.seq.call(null,s__19105__$1);
if(temp__5804__auto__){
var s__19105__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__19105__$2)){
var c__5478__auto__ = cljs.core.chunk_first.call(null,s__19105__$2);
var size__5479__auto__ = cljs.core.count.call(null,c__5478__auto__);
var b__19107 = cljs.core.chunk_buffer.call(null,size__5479__auto__);
if((function (){var i__19106 = (0);
while(true){
if((i__19106 < size__5479__auto__)){
var y = cljs.core._nth.call(null,c__5478__auto__,i__19106);
cljs.core.chunk_append.call(null,b__19107,(function (){var first_col = f.call(null,y);
var last_col = (f.call(null,(y + (1))) - (1));
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__5480__auto__ = ((function (i__19106,n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,c__5478__auto__,size__5479__auto__,b__19107,s__19105__$2,temp__5804__auto__,vec__19099,u__$1,v__$1,c__$1,j,k){
return (function clojure$math$combinatorics$iter__19104_$_iter__19108(s__19109){
return (new cljs.core.LazySeq(null,((function (i__19106,n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,c__5478__auto__,size__5479__auto__,b__19107,s__19105__$2,temp__5804__auto__,vec__19099,u__$1,v__$1,c__$1,j,k){
return (function (){
var s__19109__$1 = s__19109;
while(true){
var temp__5804__auto____$1 = cljs.core.seq.call(null,s__19109__$1);
if(temp__5804__auto____$1){
var s__19109__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__19109__$2)){
var c__5478__auto____$1 = cljs.core.chunk_first.call(null,s__19109__$2);
var size__5479__auto____$1 = cljs.core.count.call(null,c__5478__auto____$1);
var b__19111 = cljs.core.chunk_buffer.call(null,size__5479__auto____$1);
if((function (){var i__19110 = (0);
while(true){
if((i__19110 < size__5479__auto____$1)){
var z = cljs.core._nth.call(null,c__5478__auto____$1,i__19110);
if(cljs.core.not_EQ_.call(null,v__$1.call(null,z),(0))){
cljs.core.chunk_append.call(null,b__19111,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c__$1.call(null,z),v__$1.call(null,z)], null));

var G__19156 = (i__19110 + (1));
i__19110 = G__19156;
continue;
} else {
var G__19157 = (i__19110 + (1));
i__19110 = G__19157;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19111),clojure$math$combinatorics$iter__19104_$_iter__19108.call(null,cljs.core.chunk_rest.call(null,s__19109__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19111),null);
}
} else {
var z = cljs.core.first.call(null,s__19109__$2);
if(cljs.core.not_EQ_.call(null,v__$1.call(null,z),(0))){
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c__$1.call(null,z),v__$1.call(null,z)], null),clojure$math$combinatorics$iter__19104_$_iter__19108.call(null,cljs.core.rest.call(null,s__19109__$2)));
} else {
var G__19160 = cljs.core.rest.call(null,s__19109__$2);
s__19109__$1 = G__19160;
continue;
}
}
} else {
return null;
}
break;
}
});})(i__19106,n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,c__5478__auto__,size__5479__auto__,b__19107,s__19105__$2,temp__5804__auto__,vec__19099,u__$1,v__$1,c__$1,j,k))
,null,null));
});})(i__19106,n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,c__5478__auto__,size__5479__auto__,b__19107,s__19105__$2,temp__5804__auto__,vec__19099,u__$1,v__$1,c__$1,j,k))
;
return iter__5480__auto__.call(null,cljs.core.range.call(null,first_col,(last_col + (1))));
})());
})());

var G__19161 = (i__19106 + (1));
i__19106 = G__19161;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19107),clojure$math$combinatorics$iter__19104.call(null,cljs.core.chunk_rest.call(null,s__19105__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19107),null);
}
} else {
var y = cljs.core.first.call(null,s__19105__$2);
return cljs.core.cons.call(null,(function (){var first_col = f.call(null,y);
var last_col = (f.call(null,(y + (1))) - (1));
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__5480__auto__ = ((function (n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,s__19105__$2,temp__5804__auto__,vec__19099,u__$1,v__$1,c__$1,j,k){
return (function clojure$math$combinatorics$iter__19104_$_iter__19112(s__19113){
return (new cljs.core.LazySeq(null,((function (n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,s__19105__$2,temp__5804__auto__,vec__19099,u__$1,v__$1,c__$1,j,k){
return (function (){
var s__19113__$1 = s__19113;
while(true){
var temp__5804__auto____$1 = cljs.core.seq.call(null,s__19113__$1);
if(temp__5804__auto____$1){
var s__19113__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__19113__$2)){
var c__5478__auto__ = cljs.core.chunk_first.call(null,s__19113__$2);
var size__5479__auto__ = cljs.core.count.call(null,c__5478__auto__);
var b__19115 = cljs.core.chunk_buffer.call(null,size__5479__auto__);
if((function (){var i__19114 = (0);
while(true){
if((i__19114 < size__5479__auto__)){
var z = cljs.core._nth.call(null,c__5478__auto__,i__19114);
if(cljs.core.not_EQ_.call(null,v__$1.call(null,z),(0))){
cljs.core.chunk_append.call(null,b__19115,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c__$1.call(null,z),v__$1.call(null,z)], null));

var G__19162 = (i__19114 + (1));
i__19114 = G__19162;
continue;
} else {
var G__19163 = (i__19114 + (1));
i__19114 = G__19163;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19115),clojure$math$combinatorics$iter__19104_$_iter__19112.call(null,cljs.core.chunk_rest.call(null,s__19113__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19115),null);
}
} else {
var z = cljs.core.first.call(null,s__19113__$2);
if(cljs.core.not_EQ_.call(null,v__$1.call(null,z),(0))){
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c__$1.call(null,z),v__$1.call(null,z)], null),clojure$math$combinatorics$iter__19104_$_iter__19112.call(null,cljs.core.rest.call(null,s__19113__$2)));
} else {
var G__19168 = cljs.core.rest.call(null,s__19113__$2);
s__19113__$1 = G__19168;
continue;
}
}
} else {
return null;
}
break;
}
});})(n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,s__19105__$2,temp__5804__auto__,vec__19099,u__$1,v__$1,c__$1,j,k))
,null,null));
});})(n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,s__19105__$2,temp__5804__auto__,vec__19099,u__$1,v__$1,c__$1,j,k))
;
return iter__5480__auto__.call(null,cljs.core.range.call(null,first_col,(last_col + (1))));
})());
})(),clojure$math$combinatorics$iter__19104.call(null,cljs.core.rest.call(null,s__19105__$2)));
}
} else {
return null;
}
break;
}
});})(n,m,f,c,u,v,a,b,l,r,s,vec__19099,u__$1,v__$1,c__$1,j,k))
,null,null));
});})(n,m,f,c,u,v,a,b,l,r,s,vec__19099,u__$1,v__$1,c__$1,j,k))
;
return iter__5480__auto__.call(null,cljs.core.range.call(null,(l + (1))));
})();
return cljs.core.cons.call(null,part,(new cljs.core.LazySeq(null,((function (n,m,f,c,u,v,a,b,l,r,s,part,vec__19099,u__$1,v__$1,c__$1,j,k){
return (function (){
return clojure.math.combinatorics.m5.call(null,n,m,f,c__$1,u__$1,v__$1,a,b,l,r,s);
});})(n,m,f,c,u,v,a,b,l,r,s,part,vec__19099,u__$1,v__$1,c__$1,j,k))
,null,null)));

}
}
}
break;
}
}));

(clojure.math.combinatorics.multiset_partitions_M.cljs$lang$maxFixedArity = 11);

clojure.math.combinatorics.m5 = (function clojure$math$combinatorics$m5(n,m,f,c,u,v,a,b,l,r,s){
var j = (function (){var j = (b - (1));
while(true){
if(cljs.core.not_EQ_.call(null,v.call(null,j),(0))){
return j;
} else {
var G__19169 = (j - (1));
j = G__19169;
continue;
}
break;
}
})();
if(cljs.core.truth_((function (){var and__5000__auto__ = r;
if(cljs.core.truth_(and__5000__auto__)){
return ((cljs.core._EQ_.call(null,j,a)) && ((((v.call(null,j) - (1)) * (r - l)) < u.call(null,j))));
} else {
return and__5000__auto__;
}
})())){
return clojure.math.combinatorics.m6.call(null,n,m,f,c,u,v,a,b,l,r,s);
} else {
if(((cljs.core._EQ_.call(null,j,a)) && (cljs.core._EQ_.call(null,v.call(null,j),(1))))){
return clojure.math.combinatorics.m6.call(null,n,m,f,c,u,v,a,b,l,r,s);
} else {
var v__$1 = clojure.math.combinatorics.update.call(null,v,j,cljs.core.dec);
var diff_uv = (cljs.core.truth_(s)?cljs.core.apply.call(null,cljs.core._PLUS_,(function (){var iter__5480__auto__ = (function clojure$math$combinatorics$m5_$_iter__19121(s__19122){
return (new cljs.core.LazySeq(null,(function (){
var s__19122__$1 = s__19122;
while(true){
var temp__5804__auto__ = cljs.core.seq.call(null,s__19122__$1);
if(temp__5804__auto__){
var s__19122__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__19122__$2)){
var c__5478__auto__ = cljs.core.chunk_first.call(null,s__19122__$2);
var size__5479__auto__ = cljs.core.count.call(null,c__5478__auto__);
var b__19124 = cljs.core.chunk_buffer.call(null,size__5479__auto__);
if((function (){var i__19123 = (0);
while(true){
if((i__19123 < size__5479__auto__)){
var i = cljs.core._nth.call(null,c__5478__auto__,i__19123);
cljs.core.chunk_append.call(null,b__19124,(u.call(null,i) - v__$1.call(null,i)));

var G__19174 = (i__19123 + (1));
i__19123 = G__19174;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19124),clojure$math$combinatorics$m5_$_iter__19121.call(null,cljs.core.chunk_rest.call(null,s__19122__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19124),null);
}
} else {
var i = cljs.core.first.call(null,s__19122__$2);
return cljs.core.cons.call(null,(u.call(null,i) - v__$1.call(null,i)),clojure$math$combinatorics$m5_$_iter__19121.call(null,cljs.core.rest.call(null,s__19122__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__.call(null,cljs.core.range.call(null,a,(j + (1))));
})()):null);
var v__$2 = (function (){var ks = cljs.core.range.call(null,(j + (1)),b);
var v__$2 = v__$1;
while(true){
if(cljs.core.empty_QMARK_.call(null,ks)){
return v__$2;
} else {
var k = cljs.core.first.call(null,ks);
var G__19179 = cljs.core.rest.call(null,ks);
var G__19180 = cljs.core.assoc.call(null,v__$2,k,u.call(null,k));
ks = G__19179;
v__$2 = G__19180;
continue;
}
break;
}
})();
var min_partitions_after_this = (cljs.core.truth_(s)?(s - (l + (1))):(0));
var amount_to_dec = (cljs.core.truth_(s)?(function (){var x__5087__auto__ = (0);
var y__5088__auto__ = (min_partitions_after_this - diff_uv);
return ((x__5087__auto__ > y__5088__auto__) ? x__5087__auto__ : y__5088__auto__);
})():(0));
var v__$3 = ((cljs.core._EQ_.call(null,amount_to_dec,(0)))?v__$2:(function (){var k_1 = (b - (1));
var v__$3 = v__$2;
var amount = amount_to_dec;
while(true){
var vk = v__$3.call(null,k_1);
if((amount > vk)){
var G__19185 = (k_1 - (1));
var G__19186 = cljs.core.assoc.call(null,v__$3,k_1,(0));
var G__19187 = (amount - vk);
k_1 = G__19185;
v__$3 = G__19186;
amount = G__19187;
continue;
} else {
return cljs.core.assoc.call(null,v__$3,k_1,(vk - amount));
}
break;
}
})());
if((v__$3.call(null,a) === (0))){
return clojure.math.combinatorics.m6.call(null,n,m,f,c,u,v__$3,a,b,l,r,s);
} else {
return clojure.math.combinatorics.multiset_partitions_M.call(null,n,m,f,c,u,v__$3,a,b,l,r,s);
}

}
}
});
clojure.math.combinatorics.m6 = (function clojure$math$combinatorics$m6(n,m,f,c,u,v,a,b,l,r,s){
if(cljs.core._EQ_.call(null,l,(0))){
return cljs.core.List.EMPTY;
} else {
var l__$1 = (l - (1));
var b__$1 = a;
var a__$1 = f.call(null,l__$1);
return clojure.math.combinatorics.m5.call(null,n,m,f,c,u,v,a__$1,b__$1,l__$1,r,s);
}
});
clojure.math.combinatorics.partitions_M = (function clojure$math$combinatorics$partitions_M(var_args){
var args__5732__auto__ = [];
var len__5726__auto___19205 = arguments.length;
var i__5727__auto___19207 = (0);
while(true){
if((i__5727__auto___19207 < len__5726__auto___19205)){
args__5732__auto__.push((arguments[i__5727__auto___19207]));

var G__19208 = (i__5727__auto___19207 + (1));
i__5727__auto___19207 = G__19208;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return clojure.math.combinatorics.partitions_M.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(clojure.math.combinatorics.partitions_M.cljs$core$IFn$_invoke$arity$variadic = (function (items,p__19158){
var map__19159 = p__19158;
var map__19159__$1 = cljs.core.__destructure_map.call(null,map__19159);
var from = cljs.core.get.call(null,map__19159__$1,new cljs.core.Keyword(null,"min","min",444991522));
var to = cljs.core.get.call(null,map__19159__$1,new cljs.core.Keyword(null,"max","max",61366548));
if(cljs.core._EQ_.call(null,cljs.core.count.call(null,items),(0))){
if(((((function (){var or__5002__auto__ = from;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return (0);
}
})() <= (0))) && (((0) <= (function (){var or__5002__auto__ = to;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return (0);
}
})())))){
return cljs.core.list(cljs.core.List.EMPTY);
} else {
return cljs.core.List.EMPTY;
}
} else {
var items__$1 = cljs.core.vec.call(null,items);
var ditems = cljs.core.vec.call(null,cljs.core.distinct.call(null,items__$1));
var freqs = cljs.core.frequencies.call(null,items__$1);
var N = cljs.core.count.call(null,items__$1);
var M = cljs.core.count.call(null,ditems);
var from__$1 = (cljs.core.truth_((function (){var and__5000__auto__ = from;
if(cljs.core.truth_(and__5000__auto__)){
return (from <= (1));
} else {
return and__5000__auto__;
}
})())?null:from);
var to__$1 = (cljs.core.truth_((function (){var and__5000__auto__ = to;
if(cljs.core.truth_(and__5000__auto__)){
return (to >= N);
} else {
return and__5000__auto__;
}
})())?null:to);
if((!(((((1) <= (function (){var or__5002__auto__ = from__$1;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return (1);
}
})())) && (((((function (){var or__5002__auto__ = from__$1;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return (1);
}
})() <= (function (){var or__5002__auto__ = to__$1;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return N;
}
})())) && (((function (){var or__5002__auto__ = to__$1;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return N;
}
})() <= N)))))))){
return cljs.core.List.EMPTY;
} else {
if(cljs.core._EQ_.call(null,N,(1))){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,cljs.core.first.call(null,items__$1),null,(1),null)))))),null,(1),null))))),null,(1),null)))));
} else {
var start_multiset = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__5480__auto__ = (function clojure$math$combinatorics$iter__19164(s__19165){
return (new cljs.core.LazySeq(null,(function (){
var s__19165__$1 = s__19165;
while(true){
var temp__5804__auto__ = cljs.core.seq.call(null,s__19165__$1);
if(temp__5804__auto__){
var s__19165__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__19165__$2)){
var c__5478__auto__ = cljs.core.chunk_first.call(null,s__19165__$2);
var size__5479__auto__ = cljs.core.count.call(null,c__5478__auto__);
var b__19167 = cljs.core.chunk_buffer.call(null,size__5479__auto__);
if((function (){var i__19166 = (0);
while(true){
if((i__19166 < size__5479__auto__)){
var i = cljs.core._nth.call(null,c__5478__auto__,i__19166);
var j = (i + (1));
cljs.core.chunk_append.call(null,b__19167,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [j,freqs.call(null,ditems.call(null,i))], null));

var G__19209 = (i__19166 + (1));
i__19166 = G__19209;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19167),clojure$math$combinatorics$iter__19164.call(null,cljs.core.chunk_rest.call(null,s__19165__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19167),null);
}
} else {
var i = cljs.core.first.call(null,s__19165__$2);
var j = (i + (1));
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [j,freqs.call(null,ditems.call(null,i))], null),clojure$math$combinatorics$iter__19164.call(null,cljs.core.rest.call(null,s__19165__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__.call(null,cljs.core.range.call(null,M));
})());
var parts = clojure.math.combinatorics.multiset_partitions_M.call(null,start_multiset,to__$1,from__$1);
var iter__5480__auto__ = (function clojure$math$combinatorics$iter__19170(s__19171){
return (new cljs.core.LazySeq(null,(function (){
var s__19171__$1 = s__19171;
while(true){
var temp__5804__auto__ = cljs.core.seq.call(null,s__19171__$1);
if(temp__5804__auto__){
var s__19171__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__19171__$2)){
var c__5478__auto__ = cljs.core.chunk_first.call(null,s__19171__$2);
var size__5479__auto__ = cljs.core.count.call(null,c__5478__auto__);
var b__19173 = cljs.core.chunk_buffer.call(null,size__5479__auto__);
if((function (){var i__19172 = (0);
while(true){
if((i__19172 < size__5479__auto__)){
var part = cljs.core._nth.call(null,c__5478__auto__,i__19172);
cljs.core.chunk_append.call(null,b__19173,(function (){var iter__5480__auto__ = ((function (i__19172,part,c__5478__auto__,size__5479__auto__,b__19173,s__19171__$2,temp__5804__auto__,start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__19159,map__19159__$1,from,to){
return (function clojure$math$combinatorics$iter__19170_$_iter__19175(s__19176){
return (new cljs.core.LazySeq(null,((function (i__19172,part,c__5478__auto__,size__5479__auto__,b__19173,s__19171__$2,temp__5804__auto__,start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__19159,map__19159__$1,from,to){
return (function (){
var s__19176__$1 = s__19176;
while(true){
var temp__5804__auto____$1 = cljs.core.seq.call(null,s__19176__$1);
if(temp__5804__auto____$1){
var s__19176__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__19176__$2)){
var c__5478__auto____$1 = cljs.core.chunk_first.call(null,s__19176__$2);
var size__5479__auto____$1 = cljs.core.count.call(null,c__5478__auto____$1);
var b__19178 = cljs.core.chunk_buffer.call(null,size__5479__auto____$1);
if((function (){var i__19177 = (0);
while(true){
if((i__19177 < size__5479__auto____$1)){
var multiset = cljs.core._nth.call(null,c__5478__auto____$1,i__19177);
cljs.core.chunk_append.call(null,b__19178,cljs.core.vec.call(null,clojure.math.combinatorics.mapjoin.call(null,((function (i__19177,i__19172,multiset,c__5478__auto____$1,size__5479__auto____$1,b__19178,s__19176__$2,temp__5804__auto____$1,part,c__5478__auto__,size__5479__auto__,b__19173,s__19171__$2,temp__5804__auto__,start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__19159,map__19159__$1,from,to){
return (function (p__19181){
var vec__19182 = p__19181;
var index = cljs.core.nth.call(null,vec__19182,(0),null);
var numtimes = cljs.core.nth.call(null,vec__19182,(1),null);
return cljs.core.repeat.call(null,numtimes,ditems.call(null,(index - (1))));
});})(i__19177,i__19172,multiset,c__5478__auto____$1,size__5479__auto____$1,b__19178,s__19176__$2,temp__5804__auto____$1,part,c__5478__auto__,size__5479__auto__,b__19173,s__19171__$2,temp__5804__auto__,start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__19159,map__19159__$1,from,to))
,multiset)));

var G__19210 = (i__19177 + (1));
i__19177 = G__19210;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19178),clojure$math$combinatorics$iter__19170_$_iter__19175.call(null,cljs.core.chunk_rest.call(null,s__19176__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19178),null);
}
} else {
var multiset = cljs.core.first.call(null,s__19176__$2);
return cljs.core.cons.call(null,cljs.core.vec.call(null,clojure.math.combinatorics.mapjoin.call(null,((function (i__19172,multiset,s__19176__$2,temp__5804__auto____$1,part,c__5478__auto__,size__5479__auto__,b__19173,s__19171__$2,temp__5804__auto__,start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__19159,map__19159__$1,from,to){
return (function (p__19188){
var vec__19189 = p__19188;
var index = cljs.core.nth.call(null,vec__19189,(0),null);
var numtimes = cljs.core.nth.call(null,vec__19189,(1),null);
return cljs.core.repeat.call(null,numtimes,ditems.call(null,(index - (1))));
});})(i__19172,multiset,s__19176__$2,temp__5804__auto____$1,part,c__5478__auto__,size__5479__auto__,b__19173,s__19171__$2,temp__5804__auto__,start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__19159,map__19159__$1,from,to))
,multiset)),clojure$math$combinatorics$iter__19170_$_iter__19175.call(null,cljs.core.rest.call(null,s__19176__$2)));
}
} else {
return null;
}
break;
}
});})(i__19172,part,c__5478__auto__,size__5479__auto__,b__19173,s__19171__$2,temp__5804__auto__,start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__19159,map__19159__$1,from,to))
,null,null));
});})(i__19172,part,c__5478__auto__,size__5479__auto__,b__19173,s__19171__$2,temp__5804__auto__,start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__19159,map__19159__$1,from,to))
;
return iter__5480__auto__.call(null,part);
})());

var G__19211 = (i__19172 + (1));
i__19172 = G__19211;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19173),clojure$math$combinatorics$iter__19170.call(null,cljs.core.chunk_rest.call(null,s__19171__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19173),null);
}
} else {
var part = cljs.core.first.call(null,s__19171__$2);
return cljs.core.cons.call(null,(function (){var iter__5480__auto__ = ((function (part,s__19171__$2,temp__5804__auto__,start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__19159,map__19159__$1,from,to){
return (function clojure$math$combinatorics$iter__19170_$_iter__19192(s__19193){
return (new cljs.core.LazySeq(null,(function (){
var s__19193__$1 = s__19193;
while(true){
var temp__5804__auto____$1 = cljs.core.seq.call(null,s__19193__$1);
if(temp__5804__auto____$1){
var s__19193__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__19193__$2)){
var c__5478__auto__ = cljs.core.chunk_first.call(null,s__19193__$2);
var size__5479__auto__ = cljs.core.count.call(null,c__5478__auto__);
var b__19195 = cljs.core.chunk_buffer.call(null,size__5479__auto__);
if((function (){var i__19194 = (0);
while(true){
if((i__19194 < size__5479__auto__)){
var multiset = cljs.core._nth.call(null,c__5478__auto__,i__19194);
cljs.core.chunk_append.call(null,b__19195,cljs.core.vec.call(null,clojure.math.combinatorics.mapjoin.call(null,((function (i__19194,multiset,c__5478__auto__,size__5479__auto__,b__19195,s__19193__$2,temp__5804__auto____$1,part,s__19171__$2,temp__5804__auto__,start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__19159,map__19159__$1,from,to){
return (function (p__19196){
var vec__19197 = p__19196;
var index = cljs.core.nth.call(null,vec__19197,(0),null);
var numtimes = cljs.core.nth.call(null,vec__19197,(1),null);
return cljs.core.repeat.call(null,numtimes,ditems.call(null,(index - (1))));
});})(i__19194,multiset,c__5478__auto__,size__5479__auto__,b__19195,s__19193__$2,temp__5804__auto____$1,part,s__19171__$2,temp__5804__auto__,start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__19159,map__19159__$1,from,to))
,multiset)));

var G__19212 = (i__19194 + (1));
i__19194 = G__19212;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19195),clojure$math$combinatorics$iter__19170_$_iter__19192.call(null,cljs.core.chunk_rest.call(null,s__19193__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19195),null);
}
} else {
var multiset = cljs.core.first.call(null,s__19193__$2);
return cljs.core.cons.call(null,cljs.core.vec.call(null,clojure.math.combinatorics.mapjoin.call(null,((function (multiset,s__19193__$2,temp__5804__auto____$1,part,s__19171__$2,temp__5804__auto__,start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__19159,map__19159__$1,from,to){
return (function (p__19200){
var vec__19201 = p__19200;
var index = cljs.core.nth.call(null,vec__19201,(0),null);
var numtimes = cljs.core.nth.call(null,vec__19201,(1),null);
return cljs.core.repeat.call(null,numtimes,ditems.call(null,(index - (1))));
});})(multiset,s__19193__$2,temp__5804__auto____$1,part,s__19171__$2,temp__5804__auto__,start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__19159,map__19159__$1,from,to))
,multiset)),clojure$math$combinatorics$iter__19170_$_iter__19192.call(null,cljs.core.rest.call(null,s__19193__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(part,s__19171__$2,temp__5804__auto__,start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__19159,map__19159__$1,from,to))
;
return iter__5480__auto__.call(null,part);
})(),clojure$math$combinatorics$iter__19170.call(null,cljs.core.rest.call(null,s__19171__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__.call(null,parts);

}
}
}
}));

(clojure.math.combinatorics.partitions_M.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(clojure.math.combinatorics.partitions_M.cljs$lang$applyTo = (function (seq19154){
var G__19155 = cljs.core.first.call(null,seq19154);
var seq19154__$1 = cljs.core.next.call(null,seq19154);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__19155,seq19154__$1);
}));

/**
 * All the lexicographic distinct partitions of items.
 *  Optionally pass in :min and/or :max to specify inclusive bounds on the number of parts the items can be split into.
 */
clojure.math.combinatorics.partitions = (function clojure$math$combinatorics$partitions(var_args){
var args__5732__auto__ = [];
var len__5726__auto___19213 = arguments.length;
var i__5727__auto___19214 = (0);
while(true){
if((i__5727__auto___19214 < len__5726__auto___19213)){
args__5732__auto__.push((arguments[i__5727__auto___19214]));

var G__19215 = (i__5727__auto___19214 + (1));
i__5727__auto___19214 = G__19215;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return clojure.math.combinatorics.partitions.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(clojure.math.combinatorics.partitions.cljs$core$IFn$_invoke$arity$variadic = (function (items,args){
if(cljs.core._EQ_.call(null,cljs.core.count.call(null,items),(0))){
return cljs.core.apply.call(null,clojure.math.combinatorics.partitions_H,items,args);
} else {
if(cljs.core.truth_(clojure.math.combinatorics.all_different_QMARK_.call(null,items))){
return cljs.core.apply.call(null,clojure.math.combinatorics.partitions_H,items,args);
} else {
return cljs.core.apply.call(null,clojure.math.combinatorics.partitions_M,items,args);

}
}
}));

(clojure.math.combinatorics.partitions.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(clojure.math.combinatorics.partitions.cljs$lang$applyTo = (function (seq19204){
var G__19206 = cljs.core.first.call(null,seq19204);
var seq19204__$1 = cljs.core.next.call(null,seq19204);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__19206,seq19204__$1);
}));


//# sourceMappingURL=combinatorics.js.map
