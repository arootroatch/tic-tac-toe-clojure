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
var c = cljs.core.vec.call(null,cljs.core.cons.call(null,null,(function (){var iter__5480__auto__ = (function clojure$math$combinatorics$index_combinations_$_iter__24475(s__24476){
return (new cljs.core.LazySeq(null,(function (){
var s__24476__$1 = s__24476;
while(true){
var temp__5804__auto__ = cljs.core.seq.call(null,s__24476__$1);
if(temp__5804__auto__){
var s__24476__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__24476__$2)){
var c__5478__auto__ = cljs.core.chunk_first.call(null,s__24476__$2);
var size__5479__auto__ = cljs.core.count.call(null,c__5478__auto__);
var b__24478 = cljs.core.chunk_buffer.call(null,size__5479__auto__);
if((function (){var i__24477 = (0);
while(true){
if((i__24477 < size__5479__auto__)){
var j = cljs.core._nth.call(null,c__5478__auto__,i__24477);
cljs.core.chunk_append.call(null,b__24478,((j + cnt) + (- (n + (1)))));

var G__24508 = (i__24477 + (1));
i__24477 = G__24508;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24478),clojure$math$combinatorics$index_combinations_$_iter__24475.call(null,cljs.core.chunk_rest.call(null,s__24476__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24478),null);
}
} else {
var j = cljs.core.first.call(null,s__24476__$2);
return cljs.core.cons.call(null,((j + cnt) + (- (n + (1)))),clojure$math$combinatorics$index_combinations_$_iter__24475.call(null,cljs.core.rest.call(null,s__24476__$2)));
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
var G__24516 = cljs.core.assoc.call(null,c__$3,(j__$1 - (1)),(c__$3.call(null,j__$1) - (1)));
var G__24517 = (j__$1 - (1));
c__$3 = G__24516;
j__$1 = G__24517;
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
var G__24521 = cljs.core.conj.call(null,distribution__$1,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [index__$1,mi,(already_distributed__$1 + mi)], null));
var G__24522 = (index__$1 + (1));
var G__24523 = (already_distributed__$1 + mi);
distribution__$1 = G__24521;
index__$1 = G__24522;
already_distributed__$1 = G__24523;
continue;
}
}
break;
}
});
clojure.math.combinatorics.next_distribution = (function clojure$math$combinatorics$next_distribution(m,total,distribution){
var vec__24509 = cljs.core.peek.call(null,distribution);
var index = cljs.core.nth.call(null,vec__24509,(0),null);
var this_bucket = cljs.core.nth.call(null,vec__24509,(1),null);
var this_and_to_the_left = cljs.core.nth.call(null,vec__24509,(2),null);
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
var vec__24518 = cljs.core.peek.call(null,distribution__$1);
var index__$1 = cljs.core.nth.call(null,vec__24518,(0),null);
var this_bucket__$1 = cljs.core.nth.call(null,vec__24518,(1),null);
var this_and_to_the_left__$1 = cljs.core.nth.call(null,vec__24518,(2),null);
var distribution__$2 = ((cljs.core._EQ_.call(null,this_bucket__$1,(1)))?cljs.core.pop.call(null,distribution__$1):cljs.core.conj.call(null,cljs.core.pop.call(null,distribution__$1),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [index__$1,(this_bucket__$1 - (1)),(this_and_to_the_left__$1 - (1))], null)));
if(((total - (this_and_to_the_left__$1 - (1))) <= cljs.core.apply.call(null,cljs.core._PLUS_,cljs.core.subvec.call(null,m,(index__$1 + (1)))))){
return clojure.math.combinatorics.distribute.call(null,m,(index__$1 + (1)),total,distribution__$2,(this_and_to_the_left__$1 - (1)));
} else {
if(cljs.core.seq.call(null,distribution__$2)){
var G__24539 = distribution__$2;
distribution__$1 = G__24539;
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
var m = cljs.core.vec.call(null,(function (){var iter__5480__auto__ = (function clojure$math$combinatorics$multi_comb_$_iter__24528(s__24529){
return (new cljs.core.LazySeq(null,(function (){
var s__24529__$1 = s__24529;
while(true){
var temp__5804__auto__ = cljs.core.seq.call(null,s__24529__$1);
if(temp__5804__auto__){
var s__24529__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__24529__$2)){
var c__5478__auto__ = cljs.core.chunk_first.call(null,s__24529__$2);
var size__5479__auto__ = cljs.core.count.call(null,c__5478__auto__);
var b__24531 = cljs.core.chunk_buffer.call(null,size__5479__auto__);
if((function (){var i__24530 = (0);
while(true){
if((i__24530 < size__5479__auto__)){
var i = cljs.core._nth.call(null,c__5478__auto__,i__24530);
cljs.core.chunk_append.call(null,b__24531,f.call(null,v.call(null,i)));

var G__24627 = (i__24530 + (1));
i__24530 = G__24627;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24531),clojure$math$combinatorics$multi_comb_$_iter__24528.call(null,cljs.core.chunk_rest.call(null,s__24529__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24531),null);
}
} else {
var i = cljs.core.first.call(null,s__24529__$2);
return cljs.core.cons.call(null,f.call(null,v.call(null,i)),clojure$math$combinatorics$multi_comb_$_iter__24528.call(null,cljs.core.rest.call(null,s__24529__$2)));
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
var iter__5480__auto__ = (function clojure$math$combinatorics$multi_comb_$_iter__24548(s__24549){
return (new cljs.core.LazySeq(null,(function (){
var s__24549__$1 = s__24549;
while(true){
var temp__5804__auto__ = cljs.core.seq.call(null,s__24549__$1);
if(temp__5804__auto__){
var s__24549__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__24549__$2)){
var c__5478__auto__ = cljs.core.chunk_first.call(null,s__24549__$2);
var size__5479__auto__ = cljs.core.count.call(null,c__5478__auto__);
var b__24551 = cljs.core.chunk_buffer.call(null,size__5479__auto__);
if((function (){var i__24550 = (0);
while(true){
if((i__24550 < size__5479__auto__)){
var q = cljs.core._nth.call(null,c__5478__auto__,i__24550);
cljs.core.chunk_append.call(null,b__24551,clojure.math.combinatorics.join.call(null,(function (){var iter__5480__auto__ = ((function (i__24550,q,c__5478__auto__,size__5479__auto__,b__24551,s__24549__$2,temp__5804__auto__,f,v,domain,m,qs){
return (function clojure$math$combinatorics$multi_comb_$_iter__24548_$_iter__24555(s__24556){
return (new cljs.core.LazySeq(null,((function (i__24550,q,c__5478__auto__,size__5479__auto__,b__24551,s__24549__$2,temp__5804__auto__,f,v,domain,m,qs){
return (function (){
var s__24556__$1 = s__24556;
while(true){
var temp__5804__auto____$1 = cljs.core.seq.call(null,s__24556__$1);
if(temp__5804__auto____$1){
var s__24556__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__24556__$2)){
var c__5478__auto____$1 = cljs.core.chunk_first.call(null,s__24556__$2);
var size__5479__auto____$1 = cljs.core.count.call(null,c__5478__auto____$1);
var b__24558 = cljs.core.chunk_buffer.call(null,size__5479__auto____$1);
if((function (){var i__24557 = (0);
while(true){
if((i__24557 < size__5479__auto____$1)){
var vec__24563 = cljs.core._nth.call(null,c__5478__auto____$1,i__24557);
var index = cljs.core.nth.call(null,vec__24563,(0),null);
var this_bucket = cljs.core.nth.call(null,vec__24563,(1),null);
var _ = cljs.core.nth.call(null,vec__24563,(2),null);
cljs.core.chunk_append.call(null,b__24558,cljs.core.repeat.call(null,this_bucket,v.call(null,index)));

var G__24648 = (i__24557 + (1));
i__24557 = G__24648;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24558),clojure$math$combinatorics$multi_comb_$_iter__24548_$_iter__24555.call(null,cljs.core.chunk_rest.call(null,s__24556__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24558),null);
}
} else {
var vec__24573 = cljs.core.first.call(null,s__24556__$2);
var index = cljs.core.nth.call(null,vec__24573,(0),null);
var this_bucket = cljs.core.nth.call(null,vec__24573,(1),null);
var _ = cljs.core.nth.call(null,vec__24573,(2),null);
return cljs.core.cons.call(null,cljs.core.repeat.call(null,this_bucket,v.call(null,index)),clojure$math$combinatorics$multi_comb_$_iter__24548_$_iter__24555.call(null,cljs.core.rest.call(null,s__24556__$2)));
}
} else {
return null;
}
break;
}
});})(i__24550,q,c__5478__auto__,size__5479__auto__,b__24551,s__24549__$2,temp__5804__auto__,f,v,domain,m,qs))
,null,null));
});})(i__24550,q,c__5478__auto__,size__5479__auto__,b__24551,s__24549__$2,temp__5804__auto__,f,v,domain,m,qs))
;
return iter__5480__auto__.call(null,q);
})()));

var G__24653 = (i__24550 + (1));
i__24550 = G__24653;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24551),clojure$math$combinatorics$multi_comb_$_iter__24548.call(null,cljs.core.chunk_rest.call(null,s__24549__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24551),null);
}
} else {
var q = cljs.core.first.call(null,s__24549__$2);
return cljs.core.cons.call(null,clojure.math.combinatorics.join.call(null,(function (){var iter__5480__auto__ = ((function (q,s__24549__$2,temp__5804__auto__,f,v,domain,m,qs){
return (function clojure$math$combinatorics$multi_comb_$_iter__24548_$_iter__24586(s__24587){
return (new cljs.core.LazySeq(null,(function (){
var s__24587__$1 = s__24587;
while(true){
var temp__5804__auto____$1 = cljs.core.seq.call(null,s__24587__$1);
if(temp__5804__auto____$1){
var s__24587__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__24587__$2)){
var c__5478__auto__ = cljs.core.chunk_first.call(null,s__24587__$2);
var size__5479__auto__ = cljs.core.count.call(null,c__5478__auto__);
var b__24589 = cljs.core.chunk_buffer.call(null,size__5479__auto__);
if((function (){var i__24588 = (0);
while(true){
if((i__24588 < size__5479__auto__)){
var vec__24590 = cljs.core._nth.call(null,c__5478__auto__,i__24588);
var index = cljs.core.nth.call(null,vec__24590,(0),null);
var this_bucket = cljs.core.nth.call(null,vec__24590,(1),null);
var _ = cljs.core.nth.call(null,vec__24590,(2),null);
cljs.core.chunk_append.call(null,b__24589,cljs.core.repeat.call(null,this_bucket,v.call(null,index)));

var G__24666 = (i__24588 + (1));
i__24588 = G__24666;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24589),clojure$math$combinatorics$multi_comb_$_iter__24548_$_iter__24586.call(null,cljs.core.chunk_rest.call(null,s__24587__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24589),null);
}
} else {
var vec__24600 = cljs.core.first.call(null,s__24587__$2);
var index = cljs.core.nth.call(null,vec__24600,(0),null);
var this_bucket = cljs.core.nth.call(null,vec__24600,(1),null);
var _ = cljs.core.nth.call(null,vec__24600,(2),null);
return cljs.core.cons.call(null,cljs.core.repeat.call(null,this_bucket,v.call(null,index)),clojure$math$combinatorics$multi_comb_$_iter__24548_$_iter__24586.call(null,cljs.core.rest.call(null,s__24587__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(q,s__24549__$2,temp__5804__auto__,f,v,domain,m,qs))
;
return iter__5480__auto__.call(null,q);
})()),clojure$math$combinatorics$multi_comb_$_iter__24548.call(null,cljs.core.rest.call(null,s__24549__$2)));
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
var iter__5480__auto__ = (function clojure$math$combinatorics$combinations_$_iter__24620(s__24621){
return (new cljs.core.LazySeq(null,(function (){
var s__24621__$1 = s__24621;
while(true){
var temp__5804__auto__ = cljs.core.seq.call(null,s__24621__$1);
if(temp__5804__auto__){
var s__24621__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__24621__$2)){
var c__5478__auto__ = cljs.core.chunk_first.call(null,s__24621__$2);
var size__5479__auto__ = cljs.core.count.call(null,c__5478__auto__);
var b__24623 = cljs.core.chunk_buffer.call(null,size__5479__auto__);
if((function (){var i__24622 = (0);
while(true){
if((i__24622 < size__5479__auto__)){
var item = cljs.core._nth.call(null,c__5478__auto__,i__24622);
cljs.core.chunk_append.call(null,b__24623,(new cljs.core.List(null,item,null,(1),null)));

var G__24674 = (i__24622 + (1));
i__24622 = G__24674;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24623),clojure$math$combinatorics$combinations_$_iter__24620.call(null,cljs.core.chunk_rest.call(null,s__24621__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24623),null);
}
} else {
var item = cljs.core.first.call(null,s__24621__$2);
return cljs.core.cons.call(null,(new cljs.core.List(null,item,null,(1),null)),clojure$math$combinatorics$combinations_$_iter__24620.call(null,cljs.core.rest.call(null,s__24621__$2)));
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
return cljs.core.map.call(null,(function (p1__24615_SHARP_){
return cljs.core.map.call(null,v_items,p1__24615_SHARP_);
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
var len__5726__auto___24679 = arguments.length;
var i__5727__auto___24681 = (0);
while(true){
if((i__5727__auto___24681 < len__5726__auto___24679)){
args__5732__auto__.push((arguments[i__5727__auto___24681]));

var G__24685 = (i__5727__auto___24681 + (1));
i__5727__auto___24681 = G__24685;
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
var G__24697 = (i - (1));
var G__24698 = cljs.core.assoc.call(null,v_seqs__$2,i,v_original_seqs.call(null,i));
i = G__24697;
v_seqs__$2 = G__24698;
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
(clojure.math.combinatorics.cartesian_product.cljs$lang$applyTo = (function (seq24661){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq24661));
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
var G__24699 = (i - (1));
i = G__24699;
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
var G__24700 = (i - (1));
i = G__24700;
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
var G__24701 = cljs.core.assoc.call(null,v__$1,k,v__$1.call(null,l__$1),l__$1,v__$1.call(null,k));
var G__24702 = (k + (1));
var G__24703 = (l__$1 - (1));
v__$1 = G__24701;
k = G__24702;
l__$1 = G__24703;
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
var indices = clojure.math.combinatorics.join.call(null,(function (){var iter__5480__auto__ = (function clojure$math$combinatorics$multi_perm_$_iter__24714(s__24715){
return (new cljs.core.LazySeq(null,(function (){
var s__24715__$1 = s__24715;
while(true){
var temp__5804__auto__ = cljs.core.seq.call(null,s__24715__$1);
if(temp__5804__auto__){
var s__24715__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__24715__$2)){
var c__5478__auto__ = cljs.core.chunk_first.call(null,s__24715__$2);
var size__5479__auto__ = cljs.core.count.call(null,c__5478__auto__);
var b__24717 = cljs.core.chunk_buffer.call(null,size__5479__auto__);
if((function (){var i__24716 = (0);
while(true){
if((i__24716 < size__5479__auto__)){
var i = cljs.core._nth.call(null,c__5478__auto__,i__24716);
cljs.core.chunk_append.call(null,b__24717,cljs.core.repeat.call(null,f.call(null,v.call(null,i)),i));

var G__24720 = (i__24716 + (1));
i__24716 = G__24720;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24717),clojure$math$combinatorics$multi_perm_$_iter__24714.call(null,cljs.core.chunk_rest.call(null,s__24715__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24717),null);
}
} else {
var i = cljs.core.first.call(null,s__24715__$2);
return cljs.core.cons.call(null,cljs.core.repeat.call(null,f.call(null,v.call(null,i)),i),clojure$math$combinatorics$multi_perm_$_iter__24714.call(null,cljs.core.rest.call(null,s__24715__$2)));
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
return cljs.core.map.call(null,(function (p1__24719_SHARP_){
return cljs.core.map.call(null,v,p1__24719_SHARP_);
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
var G__24737 = clojure.math.combinatorics._STAR__SINGLEQUOTE_.call(null,acc,n__$1);
var G__24738 = (n__$1 - (1));
acc = G__24737;
n__$1 = G__24738;
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
var G__24740 = q;
var G__24741 = cljs.core.cons.call(null,r,digits);
var G__24742 = (divisor + (1));
n__$1 = G__24740;
digits = G__24741;
divisor = G__24742;
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
var G__24779 = cljs.core.conj.call(null,acc,cljs.core.first.call(null,l__$1));
var G__24780 = cljs.core.rest.call(null,l__$1);
var G__24781 = (n__$1 - (1));
acc = G__24779;
l__$1 = G__24780;
n__$1 = G__24781;
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
var G__24791 = cljs.core.rest.call(null,indices);
var G__24792 = clojure.math.combinatorics.remove_nth.call(null,l__$1,i);
var G__24793 = cljs.core.conj.call(null,perm,item);
indices = G__24791;
l__$1 = G__24792;
perm = G__24793;
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
return cljs.core.reductions.call(null,clojure.math.combinatorics._PLUS__SINGLEQUOTE_,(0),(function (){var iter__5480__auto__ = (function clojure$math$combinatorics$initial_perm_numbers_$_iter__24794(s__24795){
return (new cljs.core.LazySeq(null,(function (){
var s__24795__$1 = s__24795;
while(true){
var temp__5804__auto__ = cljs.core.seq.call(null,s__24795__$1);
if(temp__5804__auto__){
var s__24795__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__24795__$2)){
var c__5478__auto__ = cljs.core.chunk_first.call(null,s__24795__$2);
var size__5479__auto__ = cljs.core.count.call(null,c__5478__auto__);
var b__24797 = cljs.core.chunk_buffer.call(null,size__5479__auto__);
if((function (){var i__24796 = (0);
while(true){
if((i__24796 < size__5479__auto__)){
var vec__24798 = cljs.core._nth.call(null,c__5478__auto__,i__24796);
var k = cljs.core.nth.call(null,vec__24798,(0),null);
var v = cljs.core.nth.call(null,vec__24798,(1),null);
cljs.core.chunk_append.call(null,b__24797,clojure.math.combinatorics.count_permutations_from_frequencies.call(null,cljs.core.assoc.call(null,freqs,k,(v - (1)))));

var G__24804 = (i__24796 + (1));
i__24796 = G__24804;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24797),clojure$math$combinatorics$initial_perm_numbers_$_iter__24794.call(null,cljs.core.chunk_rest.call(null,s__24795__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24797),null);
}
} else {
var vec__24801 = cljs.core.first.call(null,s__24795__$2);
var k = cljs.core.nth.call(null,vec__24801,(0),null);
var v = cljs.core.nth.call(null,vec__24801,(1),null);
return cljs.core.cons.call(null,clojure.math.combinatorics.count_permutations_from_frequencies.call(null,cljs.core.assoc.call(null,freqs,k,(v - (1)))),clojure$math$combinatorics$initial_perm_numbers_$_iter__24794.call(null,cljs.core.rest.call(null,s__24795__$2)));
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
var G__24811 = cljs.core.rest.call(null,perm_numbers__$1);
var G__24812 = (index + (1));
perm_numbers__$1 = G__24811;
index = G__24812;
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
var vec__24813 = clojure.math.combinatorics.index_remainder.call(null,clojure.math.combinatorics.initial_perm_numbers.call(null,freqs__$1),n__$1);
var index = cljs.core.nth.call(null,vec__24813,(0),null);
var remainder = cljs.core.nth.call(null,vec__24813,(1),null);
var G__24816 = remainder;
var G__24817 = cljs.core.conj.call(null,digits,index);
var G__24818 = (function (){var nth_key = cljs.core.nth.call(null,cljs.core.keys.call(null,freqs__$1),index);
return clojure.math.combinatorics.dec_key.call(null,freqs__$1,nth_key);
})();
n__$1 = G__24816;
digits = G__24817;
freqs__$1 = G__24818;
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
var G__24819 = clojure.math.combinatorics.dec_key.call(null,freqs,item);
var G__24820 = cljs.core.rest.call(null,indices);
var G__24821 = cljs.core.conj.call(null,perm,item);
freqs = G__24819;
indices = G__24820;
perm = G__24821;
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
var indices = clojure.math.combinatorics.join.call(null,(function (){var iter__5480__auto__ = (function clojure$math$combinatorics$nth_permutation_$_iter__24822(s__24823){
return (new cljs.core.LazySeq(null,(function (){
var s__24823__$1 = s__24823;
while(true){
var temp__5804__auto__ = cljs.core.seq.call(null,s__24823__$1);
if(temp__5804__auto__){
var s__24823__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__24823__$2)){
var c__5478__auto__ = cljs.core.chunk_first.call(null,s__24823__$2);
var size__5479__auto__ = cljs.core.count.call(null,c__5478__auto__);
var b__24825 = cljs.core.chunk_buffer.call(null,size__5479__auto__);
if((function (){var i__24824 = (0);
while(true){
if((i__24824 < size__5479__auto__)){
var i = cljs.core._nth.call(null,c__5478__auto__,i__24824);
cljs.core.chunk_append.call(null,b__24825,cljs.core.repeat.call(null,f.call(null,v.call(null,i)),i));

var G__24830 = (i__24824 + (1));
i__24824 = G__24830;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24825),clojure$math$combinatorics$nth_permutation_$_iter__24822.call(null,cljs.core.chunk_rest.call(null,s__24823__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24825),null);
}
} else {
var i = cljs.core.first.call(null,s__24823__$2);
return cljs.core.cons.call(null,cljs.core.repeat.call(null,f.call(null,v.call(null,i)),i),clojure$math$combinatorics$nth_permutation_$_iter__24822.call(null,cljs.core.rest.call(null,s__24823__$2)));
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
var indices = clojure.math.combinatorics.join.call(null,(function (){var iter__5480__auto__ = (function clojure$math$combinatorics$drop_permutations_$_iter__24826(s__24827){
return (new cljs.core.LazySeq(null,(function (){
var s__24827__$1 = s__24827;
while(true){
var temp__5804__auto__ = cljs.core.seq.call(null,s__24827__$1);
if(temp__5804__auto__){
var s__24827__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__24827__$2)){
var c__5478__auto__ = cljs.core.chunk_first.call(null,s__24827__$2);
var size__5479__auto__ = cljs.core.count.call(null,c__5478__auto__);
var b__24829 = cljs.core.chunk_buffer.call(null,size__5479__auto__);
if((function (){var i__24828 = (0);
while(true){
if((i__24828 < size__5479__auto__)){
var i = cljs.core._nth.call(null,c__5478__auto__,i__24828);
cljs.core.chunk_append.call(null,b__24829,cljs.core.repeat.call(null,f.call(null,v.call(null,i)),i));

var G__24840 = (i__24828 + (1));
i__24828 = G__24840;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24829),clojure$math$combinatorics$drop_permutations_$_iter__24826.call(null,cljs.core.chunk_rest.call(null,s__24827__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24829),null);
}
} else {
var i = cljs.core.first.call(null,s__24827__$2);
return cljs.core.cons.call(null,cljs.core.repeat.call(null,f.call(null,v.call(null,i)),i),clojure$math$combinatorics$drop_permutations_$_iter__24826.call(null,cljs.core.rest.call(null,s__24827__$2)));
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
var G__24842 = n;
var G__24843 = (n - k);
n = G__24842;
k = G__24843;
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
var count_combinations_from_frequencies_orig_val__24841 = clojure.math.combinatorics.count_combinations_from_frequencies;
var count_combinations_from_frequencies_temp_val__24844 = cljs.core.memoize.call(null,clojure.math.combinatorics.count_combinations_from_frequencies);
(clojure.math.combinatorics.count_combinations_from_frequencies = count_combinations_from_frequencies_temp_val__24844);

try{return clojure.math.combinatorics.count_combinations_unmemoized.call(null,items,t);
}finally {(clojure.math.combinatorics.count_combinations_from_frequencies = count_combinations_from_frequencies_orig_val__24841);
}});
clojure.math.combinatorics.expt_int = (function clojure$math$combinatorics$expt_int(base,pow){
var n = pow;
var y = (1);
var z = base;
while(true){
var t = cljs.core.even_QMARK_.call(null,n);
var n__$1 = cljs.core.quot.call(null,n,(2));
if(t){
var G__24849 = n__$1;
var G__24850 = y;
var G__24851 = clojure.math.combinatorics._STAR__SINGLEQUOTE_.call(null,z,z);
n = G__24849;
y = G__24850;
z = G__24851;
continue;
} else {
if((n__$1 === (0))){
return clojure.math.combinatorics._STAR__SINGLEQUOTE_.call(null,z,y);
} else {
var G__24852 = n__$1;
var G__24853 = clojure.math.combinatorics._STAR__SINGLEQUOTE_.call(null,z,y);
var G__24854 = clojure.math.combinatorics._STAR__SINGLEQUOTE_.call(null,z,z);
n = G__24852;
y = G__24853;
z = G__24854;
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
return cljs.core.apply.call(null,clojure.math.combinatorics._PLUS__SINGLEQUOTE_,(function (){var iter__5480__auto__ = (function clojure$math$combinatorics$count_subsets_unmemoized_$_iter__24845(s__24846){
return (new cljs.core.LazySeq(null,(function (){
var s__24846__$1 = s__24846;
while(true){
var temp__5804__auto__ = cljs.core.seq.call(null,s__24846__$1);
if(temp__5804__auto__){
var s__24846__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__24846__$2)){
var c__5478__auto__ = cljs.core.chunk_first.call(null,s__24846__$2);
var size__5479__auto__ = cljs.core.count.call(null,c__5478__auto__);
var b__24848 = cljs.core.chunk_buffer.call(null,size__5479__auto__);
if((function (){var i__24847 = (0);
while(true){
if((i__24847 < size__5479__auto__)){
var i = cljs.core._nth.call(null,c__5478__auto__,i__24847);
cljs.core.chunk_append.call(null,b__24848,clojure.math.combinatorics.count_combinations_unmemoized.call(null,items,i));

var G__24863 = (i__24847 + (1));
i__24847 = G__24863;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24848),clojure$math$combinatorics$count_subsets_unmemoized_$_iter__24845.call(null,cljs.core.chunk_rest.call(null,s__24846__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24848),null);
}
} else {
var i = cljs.core.first.call(null,s__24846__$2);
return cljs.core.cons.call(null,clojure.math.combinatorics.count_combinations_unmemoized.call(null,items,i),clojure$math$combinatorics$count_subsets_unmemoized_$_iter__24845.call(null,cljs.core.rest.call(null,s__24846__$2)));
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
var count_combinations_from_frequencies_orig_val__24861 = clojure.math.combinatorics.count_combinations_from_frequencies;
var count_combinations_from_frequencies_temp_val__24862 = cljs.core.memoize.call(null,clojure.math.combinatorics.count_combinations_from_frequencies);
(clojure.math.combinatorics.count_combinations_from_frequencies = count_combinations_from_frequencies_temp_val__24862);

try{return clojure.math.combinatorics.count_subsets_unmemoized.call(null,items);
}finally {(clojure.math.combinatorics.count_combinations_from_frequencies = count_combinations_from_frequencies_orig_val__24861);
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
var G__24872 = cljs.core.conj.call(null,comb,cljs.core.first.call(null,items__$1));
var G__24873 = cljs.core.rest.call(null,items__$1);
var G__24874 = (t__$1 - (1));
var G__24875 = n__$1;
comb = G__24872;
items__$1 = G__24873;
t__$1 = G__24874;
n__$1 = G__24875;
continue;
} else {
var G__24880 = comb;
var G__24881 = cljs.core.rest.call(null,items__$1);
var G__24882 = t__$1;
var G__24883 = (n__$1 - dc_dt);
comb = G__24880;
items__$1 = G__24881;
t__$1 = G__24882;
n__$1 = G__24883;
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
return (function clojure$math$combinatorics$nth_combination_freqs_$_iter__24894(s__24895){
return (new cljs.core.LazySeq(null,((function (comb,freqs__$1,t__$1,n__$1){
return (function (){
var s__24895__$1 = s__24895;
while(true){
var temp__5804__auto__ = cljs.core.seq.call(null,s__24895__$1);
if(temp__5804__auto__){
var s__24895__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__24895__$2)){
var c__5478__auto__ = cljs.core.chunk_first.call(null,s__24895__$2);
var size__5479__auto__ = cljs.core.count.call(null,c__5478__auto__);
var b__24897 = cljs.core.chunk_buffer.call(null,size__5479__auto__);
if((function (){var i__24896 = (0);
while(true){
if((i__24896 < size__5479__auto__)){
var vec__24898 = cljs.core._nth.call(null,c__5478__auto__,i__24896);
var k = cljs.core.nth.call(null,vec__24898,(0),null);
var v = cljs.core.nth.call(null,vec__24898,(1),null);
cljs.core.chunk_append.call(null,b__24897,cljs.core.repeat.call(null,v,k));

var G__24917 = (i__24896 + (1));
i__24896 = G__24917;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24897),clojure$math$combinatorics$nth_combination_freqs_$_iter__24894.call(null,cljs.core.chunk_rest.call(null,s__24895__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24897),null);
}
} else {
var vec__24901 = cljs.core.first.call(null,s__24895__$2);
var k = cljs.core.nth.call(null,vec__24901,(0),null);
var v = cljs.core.nth.call(null,vec__24901,(1),null);
return cljs.core.cons.call(null,cljs.core.repeat.call(null,v,k),clojure$math$combinatorics$nth_combination_freqs_$_iter__24894.call(null,cljs.core.rest.call(null,s__24895__$2)));
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
var G__24927 = cljs.core.conj.call(null,comb,first_key);
var G__24928 = remove_one_key;
var G__24929 = (t__$1 - (1));
var G__24930 = n__$1;
comb = G__24927;
freqs__$1 = G__24928;
t__$1 = G__24929;
n__$1 = G__24930;
continue;
} else {
var G__24931 = comb;
var G__24932 = cljs.core.dissoc.call(null,freqs__$1,first_key);
var G__24933 = t__$1;
var G__24934 = (n__$1 - dc_dt);
comb = G__24931;
freqs__$1 = G__24932;
t__$1 = G__24933;
n__$1 = G__24934;
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
var count_combinations_from_frequencies_orig_val__24909 = clojure.math.combinatorics.count_combinations_from_frequencies;
var count_combinations_from_frequencies_temp_val__24910 = cljs.core.memoize.call(null,clojure.math.combinatorics.count_combinations_from_frequencies);
(clojure.math.combinatorics.count_combinations_from_frequencies = count_combinations_from_frequencies_temp_val__24910);

try{var v = cljs.core.vec.call(null,cljs.core.distinct.call(null,items));
var f = cljs.core.frequencies.call(null,items);
var indices = clojure.math.combinatorics.join.call(null,(function (){var iter__5480__auto__ = (function clojure$math$combinatorics$nth_combination_$_iter__24911(s__24912){
return (new cljs.core.LazySeq(null,(function (){
var s__24912__$1 = s__24912;
while(true){
var temp__5804__auto__ = cljs.core.seq.call(null,s__24912__$1);
if(temp__5804__auto__){
var s__24912__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__24912__$2)){
var c__5478__auto__ = cljs.core.chunk_first.call(null,s__24912__$2);
var size__5479__auto__ = cljs.core.count.call(null,c__5478__auto__);
var b__24914 = cljs.core.chunk_buffer.call(null,size__5479__auto__);
if((function (){var i__24913 = (0);
while(true){
if((i__24913 < size__5479__auto__)){
var i = cljs.core._nth.call(null,c__5478__auto__,i__24913);
cljs.core.chunk_append.call(null,b__24914,cljs.core.repeat.call(null,f.call(null,v.call(null,i)),i));

var G__24950 = (i__24913 + (1));
i__24913 = G__24950;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24914),clojure$math$combinatorics$nth_combination_$_iter__24911.call(null,cljs.core.chunk_rest.call(null,s__24912__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24914),null);
}
} else {
var i = cljs.core.first.call(null,s__24912__$2);
return cljs.core.cons.call(null,cljs.core.repeat.call(null,f.call(null,v.call(null,i)),i),clojure$math$combinatorics$nth_combination_$_iter__24911.call(null,cljs.core.rest.call(null,s__24912__$2)));
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
}finally {(clojure.math.combinatorics.count_combinations_from_frequencies = count_combinations_from_frequencies_orig_val__24909);
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
var G__24963 = (size + (1));
var G__24964 = (n__$1 - num_combinations);
size = G__24963;
n__$1 = G__24964;
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
var G__24966 = cljs.core.rest.call(null,l__$1);
var G__24967 = (n + (1));
l__$1 = G__24966;
n = G__24967;
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
var G__24972 = cljs.core.rest.call(null,l__$1);
var G__24973 = clojure.math.combinatorics._PLUS__SINGLEQUOTE_.call(null,index,clojure.math.combinatorics._STAR__SINGLEQUOTE_.call(null,clojure.math.combinatorics.factorial.call(null,n),clojure.math.combinatorics.list_index.call(null,cljs.core.sort.call(null,l__$1),cljs.core.first.call(null,l__$1))));
var G__24974 = (n - (1));
l__$1 = G__24972;
index = G__24973;
n = G__24974;
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
var G__24982 = cljs.core.rest.call(null,l__$1);
var G__24983 = cljs.core.reduce.call(null,clojure.math.combinatorics._PLUS__SINGLEQUOTE_,index,(function (){var iter__5480__auto__ = ((function (l__$1,index,freqs){
return (function clojure$math$combinatorics$permutation_index_duplicates_$_iter__24975(s__24976){
return (new cljs.core.LazySeq(null,((function (l__$1,index,freqs){
return (function (){
var s__24976__$1 = s__24976;
while(true){
var temp__5804__auto__ = cljs.core.seq.call(null,s__24976__$1);
if(temp__5804__auto__){
var s__24976__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__24976__$2)){
var c__5478__auto__ = cljs.core.chunk_first.call(null,s__24976__$2);
var size__5479__auto__ = cljs.core.count.call(null,c__5478__auto__);
var b__24978 = cljs.core.chunk_buffer.call(null,size__5479__auto__);
if((function (){var i__24977 = (0);
while(true){
if((i__24977 < size__5479__auto__)){
var k = cljs.core._nth.call(null,c__5478__auto__,i__24977);
cljs.core.chunk_append.call(null,b__24978,clojure.math.combinatorics.count_permutations_from_frequencies.call(null,clojure.math.combinatorics.dec_key.call(null,freqs,k)));

var G__24995 = (i__24977 + (1));
i__24977 = G__24995;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24978),clojure$math$combinatorics$permutation_index_duplicates_$_iter__24975.call(null,cljs.core.chunk_rest.call(null,s__24976__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24978),null);
}
} else {
var k = cljs.core.first.call(null,s__24976__$2);
return cljs.core.cons.call(null,clojure.math.combinatorics.count_permutations_from_frequencies.call(null,clojure.math.combinatorics.dec_key.call(null,freqs,k)),clojure$math$combinatorics$permutation_index_duplicates_$_iter__24975.call(null,cljs.core.rest.call(null,s__24976__$2)));
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
return (function (p1__24965_SHARP_){
return (cljs.core.compare.call(null,p1__24965_SHARP_,cljs.core.first.call(null,l__$1)) < (0));
});})(l__$1,index,freqs,iter__5480__auto__))
,cljs.core.keys.call(null,freqs)));
})());
var G__24984 = clojure.math.combinatorics.dec_key.call(null,freqs,cljs.core.first.call(null,l__$1));
l__$1 = G__24982;
index = G__24983;
freqs = G__24984;
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
return cljs.core.vec.call(null,(function (){var iter__5480__auto__ = (function clojure$math$combinatorics$init_$_iter__24996(s__24997){
return (new cljs.core.LazySeq(null,(function (){
var s__24997__$1 = s__24997;
while(true){
var temp__5804__auto__ = cljs.core.seq.call(null,s__24997__$1);
if(temp__5804__auto__){
var s__24997__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__24997__$2)){
var c__5478__auto__ = cljs.core.chunk_first.call(null,s__24997__$2);
var size__5479__auto__ = cljs.core.count.call(null,c__5478__auto__);
var b__24999 = cljs.core.chunk_buffer.call(null,size__5479__auto__);
if((function (){var i__24998 = (0);
while(true){
if((i__24998 < size__5479__auto__)){
var i = cljs.core._nth.call(null,c__5478__auto__,i__24998);
cljs.core.chunk_append.call(null,b__24999,(function (){var x__5087__auto__ = (0);
var y__5088__auto__ = (i - ((n - s) - (-1)));
return ((x__5087__auto__ > y__5088__auto__) ? x__5087__auto__ : y__5088__auto__);
})());

var G__25008 = (i__24998 + (1));
i__24998 = G__25008;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24999),clojure$math$combinatorics$init_$_iter__24996.call(null,cljs.core.chunk_rest.call(null,s__24997__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24999),null);
}
} else {
var i = cljs.core.first.call(null,s__24997__$2);
return cljs.core.cons.call(null,(function (){var x__5087__auto__ = (0);
var y__5088__auto__ = (i - ((n - s) - (-1)));
return ((x__5087__auto__ > y__5088__auto__) ? x__5087__auto__ : y__5088__auto__);
})(),clojure$math$combinatorics$init_$_iter__24996.call(null,cljs.core.rest.call(null,s__24997__$2)));
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
var G__25007 = arguments.length;
switch (G__25007) {
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
var G__25028 = (j - (1));
j = G__25028;
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
var vec__25010 = (function (){var a__$2 = a__$1;
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
var G__25029 = cljs.core.assoc.call(null,a__$2,i,new_a_i);
var G__25030 = cljs.core.assoc.call(null,b__$1,i,current_max);
var G__25031 = (i + (1));
var G__25032 = (function (){var x__5087__auto__ = current_max;
var y__5088__auto__ = (new_a_i + (1));
return ((x__5087__auto__ > y__5088__auto__) ? x__5087__auto__ : y__5088__auto__);
})();
a__$2 = G__25029;
b__$1 = G__25030;
i = G__25031;
current_max = G__25032;
continue;
} else {
var G__25037 = cljs.core.assoc.call(null,a__$2,i,(0));
var G__25038 = cljs.core.assoc.call(null,b__$1,i,current_max);
var G__25039 = (i + (1));
var G__25040 = current_max;
a__$2 = G__25037;
b__$1 = G__25038;
i = G__25039;
current_max = G__25040;
continue;

}
}
break;
}
})();
var a__$2 = cljs.core.nth.call(null,vec__25010,(0),null);
var b__$1 = cljs.core.nth.call(null,vec__25010,(1),null);
return clojure.math.combinatorics.growth_strings_H.call(null,n,a__$2,b__$1,r,s);
}
}
}),null,null)));
}));

(clojure.math.combinatorics.growth_strings_H.cljs$lang$maxFixedArity = 5);

clojure.math.combinatorics.lex_partitions_H = (function clojure$math$combinatorics$lex_partitions_H(var_args){
var args__5732__auto__ = [];
var len__5726__auto___25053 = arguments.length;
var i__5727__auto___25054 = (0);
while(true){
if((i__5727__auto___25054 < len__5726__auto___25053)){
args__5732__auto__.push((arguments[i__5727__auto___25054]));

var G__25055 = (i__5727__auto___25054 + (1));
i__5727__auto___25054 = G__25055;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return clojure.math.combinatorics.lex_partitions_H.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(clojure.math.combinatorics.lex_partitions_H.cljs$core$IFn$_invoke$arity$variadic = (function (N,p__25026){
var map__25027 = p__25026;
var map__25027__$1 = cljs.core.__destructure_map.call(null,map__25027);
var from = cljs.core.get.call(null,map__25027__$1,new cljs.core.Keyword(null,"min","min",444991522));
var to = cljs.core.get.call(null,map__25027__$1,new cljs.core.Keyword(null,"max","max",61366548));
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
var iter__5480__auto__ = (function clojure$math$combinatorics$iter__25042(s__25043){
return (new cljs.core.LazySeq(null,(function (){
var s__25043__$1 = s__25043;
while(true){
var temp__5804__auto__ = cljs.core.seq.call(null,s__25043__$1);
if(temp__5804__auto__){
var s__25043__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__25043__$2)){
var c__5478__auto__ = cljs.core.chunk_first.call(null,s__25043__$2);
var size__5479__auto__ = cljs.core.count.call(null,c__5478__auto__);
var b__25045 = cljs.core.chunk_buffer.call(null,size__5479__auto__);
if((function (){var i__25044 = (0);
while(true){
if((i__25044 < size__5479__auto__)){
var growth_string = cljs.core._nth.call(null,c__5478__auto__,i__25044);
var groups = cljs.core.group_by.call(null,growth_string,cljs.core.range.call(null,N));
cljs.core.chunk_append.call(null,b__25045,cljs.core.map.call(null,groups,cljs.core.range.call(null,cljs.core.count.call(null,groups))));

var G__25072 = (i__25044 + (1));
i__25044 = G__25072;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__25045),clojure$math$combinatorics$iter__25042.call(null,cljs.core.chunk_rest.call(null,s__25043__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__25045),null);
}
} else {
var growth_string = cljs.core.first.call(null,s__25043__$2);
var groups = cljs.core.group_by.call(null,growth_string,cljs.core.range.call(null,N));
return cljs.core.cons.call(null,cljs.core.map.call(null,groups,cljs.core.range.call(null,cljs.core.count.call(null,groups))),clojure$math$combinatorics$iter__25042.call(null,cljs.core.rest.call(null,s__25043__$2)));
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
(clojure.math.combinatorics.lex_partitions_H.cljs$lang$applyTo = (function (seq25024){
var G__25025 = cljs.core.first.call(null,seq25024);
var seq25024__$1 = cljs.core.next.call(null,seq25024);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__25025,seq25024__$1);
}));

clojure.math.combinatorics.partitions_H = (function clojure$math$combinatorics$partitions_H(var_args){
var args__5732__auto__ = [];
var len__5726__auto___25083 = arguments.length;
var i__5727__auto___25084 = (0);
while(true){
if((i__5727__auto___25084 < len__5726__auto___25083)){
args__5732__auto__.push((arguments[i__5727__auto___25084]));

var G__25085 = (i__5727__auto___25084 + (1));
i__5727__auto___25084 = G__25085;
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
var iter__5480__auto__ = (function clojure$math$combinatorics$iter__25059(s__25060){
return (new cljs.core.LazySeq(null,(function (){
var s__25060__$1 = s__25060;
while(true){
var temp__5804__auto__ = cljs.core.seq.call(null,s__25060__$1);
if(temp__5804__auto__){
var s__25060__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__25060__$2)){
var c__5478__auto__ = cljs.core.chunk_first.call(null,s__25060__$2);
var size__5479__auto__ = cljs.core.count.call(null,c__5478__auto__);
var b__25062 = cljs.core.chunk_buffer.call(null,size__5479__auto__);
if((function (){var i__25061 = (0);
while(true){
if((i__25061 < size__5479__auto__)){
var parts = cljs.core._nth.call(null,c__5478__auto__,i__25061);
cljs.core.chunk_append.call(null,b__25062,(function (){var iter__5480__auto__ = ((function (i__25061,parts,c__5478__auto__,size__5479__auto__,b__25062,s__25060__$2,temp__5804__auto__,items__$1,N,lex){
return (function clojure$math$combinatorics$iter__25059_$_iter__25067(s__25068){
return (new cljs.core.LazySeq(null,((function (i__25061,parts,c__5478__auto__,size__5479__auto__,b__25062,s__25060__$2,temp__5804__auto__,items__$1,N,lex){
return (function (){
var s__25068__$1 = s__25068;
while(true){
var temp__5804__auto____$1 = cljs.core.seq.call(null,s__25068__$1);
if(temp__5804__auto____$1){
var s__25068__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__25068__$2)){
var c__5478__auto____$1 = cljs.core.chunk_first.call(null,s__25068__$2);
var size__5479__auto____$1 = cljs.core.count.call(null,c__5478__auto____$1);
var b__25070 = cljs.core.chunk_buffer.call(null,size__5479__auto____$1);
if((function (){var i__25069 = (0);
while(true){
if((i__25069 < size__5479__auto____$1)){
var part = cljs.core._nth.call(null,c__5478__auto____$1,i__25069);
cljs.core.chunk_append.call(null,b__25070,cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,((function (i__25069,i__25061,part,c__5478__auto____$1,size__5479__auto____$1,b__25070,s__25068__$2,temp__5804__auto____$1,parts,c__5478__auto__,size__5479__auto__,b__25062,s__25060__$2,temp__5804__auto__,items__$1,N,lex){
return (function (v,o){
return cljs.core.conj_BANG_.call(null,v,items__$1.call(null,o));
});})(i__25069,i__25061,part,c__5478__auto____$1,size__5479__auto____$1,b__25070,s__25068__$2,temp__5804__auto____$1,parts,c__5478__auto__,size__5479__auto__,b__25062,s__25060__$2,temp__5804__auto__,items__$1,N,lex))
,cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY),part)));

var G__25104 = (i__25069 + (1));
i__25069 = G__25104;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__25070),clojure$math$combinatorics$iter__25059_$_iter__25067.call(null,cljs.core.chunk_rest.call(null,s__25068__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__25070),null);
}
} else {
var part = cljs.core.first.call(null,s__25068__$2);
return cljs.core.cons.call(null,cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,((function (i__25061,part,s__25068__$2,temp__5804__auto____$1,parts,c__5478__auto__,size__5479__auto__,b__25062,s__25060__$2,temp__5804__auto__,items__$1,N,lex){
return (function (v,o){
return cljs.core.conj_BANG_.call(null,v,items__$1.call(null,o));
});})(i__25061,part,s__25068__$2,temp__5804__auto____$1,parts,c__5478__auto__,size__5479__auto__,b__25062,s__25060__$2,temp__5804__auto__,items__$1,N,lex))
,cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY),part)),clojure$math$combinatorics$iter__25059_$_iter__25067.call(null,cljs.core.rest.call(null,s__25068__$2)));
}
} else {
return null;
}
break;
}
});})(i__25061,parts,c__5478__auto__,size__5479__auto__,b__25062,s__25060__$2,temp__5804__auto__,items__$1,N,lex))
,null,null));
});})(i__25061,parts,c__5478__auto__,size__5479__auto__,b__25062,s__25060__$2,temp__5804__auto__,items__$1,N,lex))
;
return iter__5480__auto__.call(null,parts);
})());

var G__25111 = (i__25061 + (1));
i__25061 = G__25111;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__25062),clojure$math$combinatorics$iter__25059.call(null,cljs.core.chunk_rest.call(null,s__25060__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__25062),null);
}
} else {
var parts = cljs.core.first.call(null,s__25060__$2);
return cljs.core.cons.call(null,(function (){var iter__5480__auto__ = ((function (parts,s__25060__$2,temp__5804__auto__,items__$1,N,lex){
return (function clojure$math$combinatorics$iter__25059_$_iter__25078(s__25079){
return (new cljs.core.LazySeq(null,(function (){
var s__25079__$1 = s__25079;
while(true){
var temp__5804__auto____$1 = cljs.core.seq.call(null,s__25079__$1);
if(temp__5804__auto____$1){
var s__25079__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__25079__$2)){
var c__5478__auto__ = cljs.core.chunk_first.call(null,s__25079__$2);
var size__5479__auto__ = cljs.core.count.call(null,c__5478__auto__);
var b__25081 = cljs.core.chunk_buffer.call(null,size__5479__auto__);
if((function (){var i__25080 = (0);
while(true){
if((i__25080 < size__5479__auto__)){
var part = cljs.core._nth.call(null,c__5478__auto__,i__25080);
cljs.core.chunk_append.call(null,b__25081,cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,((function (i__25080,part,c__5478__auto__,size__5479__auto__,b__25081,s__25079__$2,temp__5804__auto____$1,parts,s__25060__$2,temp__5804__auto__,items__$1,N,lex){
return (function (v,o){
return cljs.core.conj_BANG_.call(null,v,items__$1.call(null,o));
});})(i__25080,part,c__5478__auto__,size__5479__auto__,b__25081,s__25079__$2,temp__5804__auto____$1,parts,s__25060__$2,temp__5804__auto__,items__$1,N,lex))
,cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY),part)));

var G__25121 = (i__25080 + (1));
i__25080 = G__25121;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__25081),clojure$math$combinatorics$iter__25059_$_iter__25078.call(null,cljs.core.chunk_rest.call(null,s__25079__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__25081),null);
}
} else {
var part = cljs.core.first.call(null,s__25079__$2);
return cljs.core.cons.call(null,cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,((function (part,s__25079__$2,temp__5804__auto____$1,parts,s__25060__$2,temp__5804__auto__,items__$1,N,lex){
return (function (v,o){
return cljs.core.conj_BANG_.call(null,v,items__$1.call(null,o));
});})(part,s__25079__$2,temp__5804__auto____$1,parts,s__25060__$2,temp__5804__auto__,items__$1,N,lex))
,cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY),part)),clojure$math$combinatorics$iter__25059_$_iter__25078.call(null,cljs.core.rest.call(null,s__25079__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(parts,s__25060__$2,temp__5804__auto__,items__$1,N,lex))
;
return iter__5480__auto__.call(null,parts);
})(),clojure$math$combinatorics$iter__25059.call(null,cljs.core.rest.call(null,s__25060__$2)));
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
(clojure.math.combinatorics.partitions_H.cljs$lang$applyTo = (function (seq25051){
var G__25052 = cljs.core.first.call(null,seq25051);
var seq25051__$1 = cljs.core.next.call(null,seq25051);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__25052,seq25051__$1);
}));


clojure.math.combinatorics.multiset_partitions_M = (function clojure$math$combinatorics$multiset_partitions_M(var_args){
var G__25095 = arguments.length;
switch (G__25095) {
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
var vec__25101 = (function (){var j = (0);
var c__$1 = c;
var u__$1 = u;
var v__$1 = v;
while(true){
if(cljs.core._EQ_.call(null,j,m)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [c__$1,u__$1,v__$1], null);
} else {
var G__25198 = (j + (1));
var G__25199 = cljs.core.assoc.call(null,c__$1,j,(j + (1)));
var G__25200 = cljs.core.assoc.call(null,u__$1,j,multiset.call(null,(j + (1))));
var G__25201 = cljs.core.assoc.call(null,v__$1,j,multiset.call(null,(j + (1))));
j = G__25198;
c__$1 = G__25199;
u__$1 = G__25200;
v__$1 = G__25201;
continue;
}
break;
}
})();
var c__$1 = cljs.core.nth.call(null,vec__25101,(0),null);
var u__$1 = cljs.core.nth.call(null,vec__25101,(1),null);
var v__$1 = cljs.core.nth.call(null,vec__25101,(2),null);
var a = (0);
var b = m;
var l = (0);
var f__$1 = cljs.core.assoc.call(null,f,(0),(0),(1),m);
var stack = cljs.core.List.EMPTY;
return clojure.math.combinatorics.multiset_partitions_M.call(null,n,m,f__$1,c__$1,u__$1,v__$1,a,b,l,r,s);
}));

(clojure.math.combinatorics.multiset_partitions_M.cljs$core$IFn$_invoke$arity$11 = (function (n,m,f,c,u,v,a,b,l,r,s){
while(true){
var vec__25115 = (function (){var j = a;
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
var G__25217 = (j + (1));
var G__25218 = k;
var G__25219 = true;
var G__25220 = u__$2;
var G__25221 = v__$1;
var G__25222 = c__$1;
j = G__25217;
k = G__25218;
x = G__25219;
u__$1 = G__25220;
v__$1 = G__25221;
c__$1 = G__25222;
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
var G__25227 = j__$1;
var G__25228 = k__$1;
var G__25229 = x__$1;
var G__25230 = u__$2;
var G__25231 = v__$2;
var G__25232 = c__$2;
j = G__25227;
k = G__25228;
x = G__25229;
u__$1 = G__25230;
v__$1 = G__25231;
c__$1 = G__25232;
continue;
} else {
var c__$2 = cljs.core.assoc.call(null,c__$1,k,c__$1.call(null,j));
var v__$2 = cljs.core.assoc.call(null,v__$1,k,u__$2.call(null,k));
var k__$1 = (k + (1));
var j__$1 = (j + (1));
var G__25234 = j__$1;
var G__25235 = k__$1;
var G__25236 = x;
var G__25237 = u__$2;
var G__25238 = v__$2;
var G__25239 = c__$2;
j = G__25234;
k = G__25235;
x = G__25236;
u__$1 = G__25237;
v__$1 = G__25238;
c__$1 = G__25239;
continue;
}
}
}
break;
}
})();
var u__$1 = cljs.core.nth.call(null,vec__25115,(0),null);
var v__$1 = cljs.core.nth.call(null,vec__25115,(1),null);
var c__$1 = cljs.core.nth.call(null,vec__25115,(2),null);
var j = cljs.core.nth.call(null,vec__25115,(3),null);
var k = cljs.core.nth.call(null,vec__25115,(4),null);
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
var G__25245 = n;
var G__25246 = m;
var G__25247 = f__$1;
var G__25248 = c__$1;
var G__25249 = u__$1;
var G__25250 = v__$1;
var G__25251 = a__$1;
var G__25252 = b__$1;
var G__25253 = l__$1;
var G__25254 = r;
var G__25255 = s;
n = G__25245;
m = G__25246;
f = G__25247;
c = G__25248;
u = G__25249;
v = G__25250;
a = G__25251;
b = G__25252;
l = G__25253;
r = G__25254;
s = G__25255;
continue;
} else {
var part = (function (){var iter__5480__auto__ = ((function (n,m,f,c,u,v,a,b,l,r,s,vec__25115,u__$1,v__$1,c__$1,j,k){
return (function clojure$math$combinatorics$iter__25147(s__25148){
return (new cljs.core.LazySeq(null,((function (n,m,f,c,u,v,a,b,l,r,s,vec__25115,u__$1,v__$1,c__$1,j,k){
return (function (){
var s__25148__$1 = s__25148;
while(true){
var temp__5804__auto__ = cljs.core.seq.call(null,s__25148__$1);
if(temp__5804__auto__){
var s__25148__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__25148__$2)){
var c__5478__auto__ = cljs.core.chunk_first.call(null,s__25148__$2);
var size__5479__auto__ = cljs.core.count.call(null,c__5478__auto__);
var b__25150 = cljs.core.chunk_buffer.call(null,size__5479__auto__);
if((function (){var i__25149 = (0);
while(true){
if((i__25149 < size__5479__auto__)){
var y = cljs.core._nth.call(null,c__5478__auto__,i__25149);
cljs.core.chunk_append.call(null,b__25150,(function (){var first_col = f.call(null,y);
var last_col = (f.call(null,(y + (1))) - (1));
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__5480__auto__ = ((function (i__25149,n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,c__5478__auto__,size__5479__auto__,b__25150,s__25148__$2,temp__5804__auto__,vec__25115,u__$1,v__$1,c__$1,j,k){
return (function clojure$math$combinatorics$iter__25147_$_iter__25151(s__25152){
return (new cljs.core.LazySeq(null,((function (i__25149,n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,c__5478__auto__,size__5479__auto__,b__25150,s__25148__$2,temp__5804__auto__,vec__25115,u__$1,v__$1,c__$1,j,k){
return (function (){
var s__25152__$1 = s__25152;
while(true){
var temp__5804__auto____$1 = cljs.core.seq.call(null,s__25152__$1);
if(temp__5804__auto____$1){
var s__25152__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__25152__$2)){
var c__5478__auto____$1 = cljs.core.chunk_first.call(null,s__25152__$2);
var size__5479__auto____$1 = cljs.core.count.call(null,c__5478__auto____$1);
var b__25154 = cljs.core.chunk_buffer.call(null,size__5479__auto____$1);
if((function (){var i__25153 = (0);
while(true){
if((i__25153 < size__5479__auto____$1)){
var z = cljs.core._nth.call(null,c__5478__auto____$1,i__25153);
if(cljs.core.not_EQ_.call(null,v__$1.call(null,z),(0))){
cljs.core.chunk_append.call(null,b__25154,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c__$1.call(null,z),v__$1.call(null,z)], null));

var G__25266 = (i__25153 + (1));
i__25153 = G__25266;
continue;
} else {
var G__25267 = (i__25153 + (1));
i__25153 = G__25267;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__25154),clojure$math$combinatorics$iter__25147_$_iter__25151.call(null,cljs.core.chunk_rest.call(null,s__25152__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__25154),null);
}
} else {
var z = cljs.core.first.call(null,s__25152__$2);
if(cljs.core.not_EQ_.call(null,v__$1.call(null,z),(0))){
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c__$1.call(null,z),v__$1.call(null,z)], null),clojure$math$combinatorics$iter__25147_$_iter__25151.call(null,cljs.core.rest.call(null,s__25152__$2)));
} else {
var G__25270 = cljs.core.rest.call(null,s__25152__$2);
s__25152__$1 = G__25270;
continue;
}
}
} else {
return null;
}
break;
}
});})(i__25149,n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,c__5478__auto__,size__5479__auto__,b__25150,s__25148__$2,temp__5804__auto__,vec__25115,u__$1,v__$1,c__$1,j,k))
,null,null));
});})(i__25149,n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,c__5478__auto__,size__5479__auto__,b__25150,s__25148__$2,temp__5804__auto__,vec__25115,u__$1,v__$1,c__$1,j,k))
;
return iter__5480__auto__.call(null,cljs.core.range.call(null,first_col,(last_col + (1))));
})());
})());

var G__25271 = (i__25149 + (1));
i__25149 = G__25271;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__25150),clojure$math$combinatorics$iter__25147.call(null,cljs.core.chunk_rest.call(null,s__25148__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__25150),null);
}
} else {
var y = cljs.core.first.call(null,s__25148__$2);
return cljs.core.cons.call(null,(function (){var first_col = f.call(null,y);
var last_col = (f.call(null,(y + (1))) - (1));
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__5480__auto__ = ((function (n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,s__25148__$2,temp__5804__auto__,vec__25115,u__$1,v__$1,c__$1,j,k){
return (function clojure$math$combinatorics$iter__25147_$_iter__25172(s__25173){
return (new cljs.core.LazySeq(null,((function (n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,s__25148__$2,temp__5804__auto__,vec__25115,u__$1,v__$1,c__$1,j,k){
return (function (){
var s__25173__$1 = s__25173;
while(true){
var temp__5804__auto____$1 = cljs.core.seq.call(null,s__25173__$1);
if(temp__5804__auto____$1){
var s__25173__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__25173__$2)){
var c__5478__auto__ = cljs.core.chunk_first.call(null,s__25173__$2);
var size__5479__auto__ = cljs.core.count.call(null,c__5478__auto__);
var b__25175 = cljs.core.chunk_buffer.call(null,size__5479__auto__);
if((function (){var i__25174 = (0);
while(true){
if((i__25174 < size__5479__auto__)){
var z = cljs.core._nth.call(null,c__5478__auto__,i__25174);
if(cljs.core.not_EQ_.call(null,v__$1.call(null,z),(0))){
cljs.core.chunk_append.call(null,b__25175,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c__$1.call(null,z),v__$1.call(null,z)], null));

var G__25298 = (i__25174 + (1));
i__25174 = G__25298;
continue;
} else {
var G__25300 = (i__25174 + (1));
i__25174 = G__25300;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__25175),clojure$math$combinatorics$iter__25147_$_iter__25172.call(null,cljs.core.chunk_rest.call(null,s__25173__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__25175),null);
}
} else {
var z = cljs.core.first.call(null,s__25173__$2);
if(cljs.core.not_EQ_.call(null,v__$1.call(null,z),(0))){
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c__$1.call(null,z),v__$1.call(null,z)], null),clojure$math$combinatorics$iter__25147_$_iter__25172.call(null,cljs.core.rest.call(null,s__25173__$2)));
} else {
var G__25306 = cljs.core.rest.call(null,s__25173__$2);
s__25173__$1 = G__25306;
continue;
}
}
} else {
return null;
}
break;
}
});})(n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,s__25148__$2,temp__5804__auto__,vec__25115,u__$1,v__$1,c__$1,j,k))
,null,null));
});})(n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,s__25148__$2,temp__5804__auto__,vec__25115,u__$1,v__$1,c__$1,j,k))
;
return iter__5480__auto__.call(null,cljs.core.range.call(null,first_col,(last_col + (1))));
})());
})(),clojure$math$combinatorics$iter__25147.call(null,cljs.core.rest.call(null,s__25148__$2)));
}
} else {
return null;
}
break;
}
});})(n,m,f,c,u,v,a,b,l,r,s,vec__25115,u__$1,v__$1,c__$1,j,k))
,null,null));
});})(n,m,f,c,u,v,a,b,l,r,s,vec__25115,u__$1,v__$1,c__$1,j,k))
;
return iter__5480__auto__.call(null,cljs.core.range.call(null,(l + (1))));
})();
return cljs.core.cons.call(null,part,(new cljs.core.LazySeq(null,((function (n,m,f,c,u,v,a,b,l,r,s,part,vec__25115,u__$1,v__$1,c__$1,j,k){
return (function (){
return clojure.math.combinatorics.m5.call(null,n,m,f,c__$1,u__$1,v__$1,a,b,l,r,s);
});})(n,m,f,c,u,v,a,b,l,r,s,part,vec__25115,u__$1,v__$1,c__$1,j,k))
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
var G__25315 = (j - (1));
j = G__25315;
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
var diff_uv = (cljs.core.truth_(s)?cljs.core.apply.call(null,cljs.core._PLUS_,(function (){var iter__5480__auto__ = (function clojure$math$combinatorics$m5_$_iter__25209(s__25210){
return (new cljs.core.LazySeq(null,(function (){
var s__25210__$1 = s__25210;
while(true){
var temp__5804__auto__ = cljs.core.seq.call(null,s__25210__$1);
if(temp__5804__auto__){
var s__25210__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__25210__$2)){
var c__5478__auto__ = cljs.core.chunk_first.call(null,s__25210__$2);
var size__5479__auto__ = cljs.core.count.call(null,c__5478__auto__);
var b__25212 = cljs.core.chunk_buffer.call(null,size__5479__auto__);
if((function (){var i__25211 = (0);
while(true){
if((i__25211 < size__5479__auto__)){
var i = cljs.core._nth.call(null,c__5478__auto__,i__25211);
cljs.core.chunk_append.call(null,b__25212,(u.call(null,i) - v__$1.call(null,i)));

var G__25330 = (i__25211 + (1));
i__25211 = G__25330;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__25212),clojure$math$combinatorics$m5_$_iter__25209.call(null,cljs.core.chunk_rest.call(null,s__25210__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__25212),null);
}
} else {
var i = cljs.core.first.call(null,s__25210__$2);
return cljs.core.cons.call(null,(u.call(null,i) - v__$1.call(null,i)),clojure$math$combinatorics$m5_$_iter__25209.call(null,cljs.core.rest.call(null,s__25210__$2)));
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
var G__25341 = cljs.core.rest.call(null,ks);
var G__25342 = cljs.core.assoc.call(null,v__$2,k,u.call(null,k));
ks = G__25341;
v__$2 = G__25342;
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
var G__25347 = (k_1 - (1));
var G__25348 = cljs.core.assoc.call(null,v__$3,k_1,(0));
var G__25349 = (amount - vk);
k_1 = G__25347;
v__$3 = G__25348;
amount = G__25349;
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
var len__5726__auto___25423 = arguments.length;
var i__5727__auto___25424 = (0);
while(true){
if((i__5727__auto___25424 < len__5726__auto___25423)){
args__5732__auto__.push((arguments[i__5727__auto___25424]));

var G__25425 = (i__5727__auto___25424 + (1));
i__5727__auto___25424 = G__25425;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return clojure.math.combinatorics.partitions_M.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(clojure.math.combinatorics.partitions_M.cljs$core$IFn$_invoke$arity$variadic = (function (items,p__25285){
var map__25286 = p__25285;
var map__25286__$1 = cljs.core.__destructure_map.call(null,map__25286);
var from = cljs.core.get.call(null,map__25286__$1,new cljs.core.Keyword(null,"min","min",444991522));
var to = cljs.core.get.call(null,map__25286__$1,new cljs.core.Keyword(null,"max","max",61366548));
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
var start_multiset = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__5480__auto__ = (function clojure$math$combinatorics$iter__25311(s__25312){
return (new cljs.core.LazySeq(null,(function (){
var s__25312__$1 = s__25312;
while(true){
var temp__5804__auto__ = cljs.core.seq.call(null,s__25312__$1);
if(temp__5804__auto__){
var s__25312__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__25312__$2)){
var c__5478__auto__ = cljs.core.chunk_first.call(null,s__25312__$2);
var size__5479__auto__ = cljs.core.count.call(null,c__5478__auto__);
var b__25314 = cljs.core.chunk_buffer.call(null,size__5479__auto__);
if((function (){var i__25313 = (0);
while(true){
if((i__25313 < size__5479__auto__)){
var i = cljs.core._nth.call(null,c__5478__auto__,i__25313);
var j = (i + (1));
cljs.core.chunk_append.call(null,b__25314,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [j,freqs.call(null,ditems.call(null,i))], null));

var G__25447 = (i__25313 + (1));
i__25313 = G__25447;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__25314),clojure$math$combinatorics$iter__25311.call(null,cljs.core.chunk_rest.call(null,s__25312__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__25314),null);
}
} else {
var i = cljs.core.first.call(null,s__25312__$2);
var j = (i + (1));
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [j,freqs.call(null,ditems.call(null,i))], null),clojure$math$combinatorics$iter__25311.call(null,cljs.core.rest.call(null,s__25312__$2)));
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
var iter__5480__auto__ = (function clojure$math$combinatorics$iter__25337(s__25338){
return (new cljs.core.LazySeq(null,(function (){
var s__25338__$1 = s__25338;
while(true){
var temp__5804__auto__ = cljs.core.seq.call(null,s__25338__$1);
if(temp__5804__auto__){
var s__25338__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__25338__$2)){
var c__5478__auto__ = cljs.core.chunk_first.call(null,s__25338__$2);
var size__5479__auto__ = cljs.core.count.call(null,c__5478__auto__);
var b__25340 = cljs.core.chunk_buffer.call(null,size__5479__auto__);
if((function (){var i__25339 = (0);
while(true){
if((i__25339 < size__5479__auto__)){
var part = cljs.core._nth.call(null,c__5478__auto__,i__25339);
cljs.core.chunk_append.call(null,b__25340,(function (){var iter__5480__auto__ = ((function (i__25339,part,c__5478__auto__,size__5479__auto__,b__25340,s__25338__$2,temp__5804__auto__,start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__25286,map__25286__$1,from,to){
return (function clojure$math$combinatorics$iter__25337_$_iter__25343(s__25344){
return (new cljs.core.LazySeq(null,((function (i__25339,part,c__5478__auto__,size__5479__auto__,b__25340,s__25338__$2,temp__5804__auto__,start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__25286,map__25286__$1,from,to){
return (function (){
var s__25344__$1 = s__25344;
while(true){
var temp__5804__auto____$1 = cljs.core.seq.call(null,s__25344__$1);
if(temp__5804__auto____$1){
var s__25344__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__25344__$2)){
var c__5478__auto____$1 = cljs.core.chunk_first.call(null,s__25344__$2);
var size__5479__auto____$1 = cljs.core.count.call(null,c__5478__auto____$1);
var b__25346 = cljs.core.chunk_buffer.call(null,size__5479__auto____$1);
if((function (){var i__25345 = (0);
while(true){
if((i__25345 < size__5479__auto____$1)){
var multiset = cljs.core._nth.call(null,c__5478__auto____$1,i__25345);
cljs.core.chunk_append.call(null,b__25346,cljs.core.vec.call(null,clojure.math.combinatorics.mapjoin.call(null,((function (i__25345,i__25339,multiset,c__5478__auto____$1,size__5479__auto____$1,b__25346,s__25344__$2,temp__5804__auto____$1,part,c__5478__auto__,size__5479__auto__,b__25340,s__25338__$2,temp__5804__auto__,start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__25286,map__25286__$1,from,to){
return (function (p__25355){
var vec__25356 = p__25355;
var index = cljs.core.nth.call(null,vec__25356,(0),null);
var numtimes = cljs.core.nth.call(null,vec__25356,(1),null);
return cljs.core.repeat.call(null,numtimes,ditems.call(null,(index - (1))));
});})(i__25345,i__25339,multiset,c__5478__auto____$1,size__5479__auto____$1,b__25346,s__25344__$2,temp__5804__auto____$1,part,c__5478__auto__,size__5479__auto__,b__25340,s__25338__$2,temp__5804__auto__,start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__25286,map__25286__$1,from,to))
,multiset)));

var G__25455 = (i__25345 + (1));
i__25345 = G__25455;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__25346),clojure$math$combinatorics$iter__25337_$_iter__25343.call(null,cljs.core.chunk_rest.call(null,s__25344__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__25346),null);
}
} else {
var multiset = cljs.core.first.call(null,s__25344__$2);
return cljs.core.cons.call(null,cljs.core.vec.call(null,clojure.math.combinatorics.mapjoin.call(null,((function (i__25339,multiset,s__25344__$2,temp__5804__auto____$1,part,c__5478__auto__,size__5479__auto__,b__25340,s__25338__$2,temp__5804__auto__,start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__25286,map__25286__$1,from,to){
return (function (p__25368){
var vec__25369 = p__25368;
var index = cljs.core.nth.call(null,vec__25369,(0),null);
var numtimes = cljs.core.nth.call(null,vec__25369,(1),null);
return cljs.core.repeat.call(null,numtimes,ditems.call(null,(index - (1))));
});})(i__25339,multiset,s__25344__$2,temp__5804__auto____$1,part,c__5478__auto__,size__5479__auto__,b__25340,s__25338__$2,temp__5804__auto__,start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__25286,map__25286__$1,from,to))
,multiset)),clojure$math$combinatorics$iter__25337_$_iter__25343.call(null,cljs.core.rest.call(null,s__25344__$2)));
}
} else {
return null;
}
break;
}
});})(i__25339,part,c__5478__auto__,size__5479__auto__,b__25340,s__25338__$2,temp__5804__auto__,start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__25286,map__25286__$1,from,to))
,null,null));
});})(i__25339,part,c__5478__auto__,size__5479__auto__,b__25340,s__25338__$2,temp__5804__auto__,start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__25286,map__25286__$1,from,to))
;
return iter__5480__auto__.call(null,part);
})());

var G__25466 = (i__25339 + (1));
i__25339 = G__25466;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__25340),clojure$math$combinatorics$iter__25337.call(null,cljs.core.chunk_rest.call(null,s__25338__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__25340),null);
}
} else {
var part = cljs.core.first.call(null,s__25338__$2);
return cljs.core.cons.call(null,(function (){var iter__5480__auto__ = ((function (part,s__25338__$2,temp__5804__auto__,start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__25286,map__25286__$1,from,to){
return (function clojure$math$combinatorics$iter__25337_$_iter__25375(s__25376){
return (new cljs.core.LazySeq(null,(function (){
var s__25376__$1 = s__25376;
while(true){
var temp__5804__auto____$1 = cljs.core.seq.call(null,s__25376__$1);
if(temp__5804__auto____$1){
var s__25376__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__25376__$2)){
var c__5478__auto__ = cljs.core.chunk_first.call(null,s__25376__$2);
var size__5479__auto__ = cljs.core.count.call(null,c__5478__auto__);
var b__25378 = cljs.core.chunk_buffer.call(null,size__5479__auto__);
if((function (){var i__25377 = (0);
while(true){
if((i__25377 < size__5479__auto__)){
var multiset = cljs.core._nth.call(null,c__5478__auto__,i__25377);
cljs.core.chunk_append.call(null,b__25378,cljs.core.vec.call(null,clojure.math.combinatorics.mapjoin.call(null,((function (i__25377,multiset,c__5478__auto__,size__5479__auto__,b__25378,s__25376__$2,temp__5804__auto____$1,part,s__25338__$2,temp__5804__auto__,start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__25286,map__25286__$1,from,to){
return (function (p__25389){
var vec__25390 = p__25389;
var index = cljs.core.nth.call(null,vec__25390,(0),null);
var numtimes = cljs.core.nth.call(null,vec__25390,(1),null);
return cljs.core.repeat.call(null,numtimes,ditems.call(null,(index - (1))));
});})(i__25377,multiset,c__5478__auto__,size__5479__auto__,b__25378,s__25376__$2,temp__5804__auto____$1,part,s__25338__$2,temp__5804__auto__,start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__25286,map__25286__$1,from,to))
,multiset)));

var G__25469 = (i__25377 + (1));
i__25377 = G__25469;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__25378),clojure$math$combinatorics$iter__25337_$_iter__25375.call(null,cljs.core.chunk_rest.call(null,s__25376__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__25378),null);
}
} else {
var multiset = cljs.core.first.call(null,s__25376__$2);
return cljs.core.cons.call(null,cljs.core.vec.call(null,clojure.math.combinatorics.mapjoin.call(null,((function (multiset,s__25376__$2,temp__5804__auto____$1,part,s__25338__$2,temp__5804__auto__,start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__25286,map__25286__$1,from,to){
return (function (p__25398){
var vec__25400 = p__25398;
var index = cljs.core.nth.call(null,vec__25400,(0),null);
var numtimes = cljs.core.nth.call(null,vec__25400,(1),null);
return cljs.core.repeat.call(null,numtimes,ditems.call(null,(index - (1))));
});})(multiset,s__25376__$2,temp__5804__auto____$1,part,s__25338__$2,temp__5804__auto__,start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__25286,map__25286__$1,from,to))
,multiset)),clojure$math$combinatorics$iter__25337_$_iter__25375.call(null,cljs.core.rest.call(null,s__25376__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(part,s__25338__$2,temp__5804__auto__,start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__25286,map__25286__$1,from,to))
;
return iter__5480__auto__.call(null,part);
})(),clojure$math$combinatorics$iter__25337.call(null,cljs.core.rest.call(null,s__25338__$2)));
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
(clojure.math.combinatorics.partitions_M.cljs$lang$applyTo = (function (seq25268){
var G__25269 = cljs.core.first.call(null,seq25268);
var seq25268__$1 = cljs.core.next.call(null,seq25268);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__25269,seq25268__$1);
}));

/**
 * All the lexicographic distinct partitions of items.
 *  Optionally pass in :min and/or :max to specify inclusive bounds on the number of parts the items can be split into.
 */
clojure.math.combinatorics.partitions = (function clojure$math$combinatorics$partitions(var_args){
var args__5732__auto__ = [];
var len__5726__auto___25478 = arguments.length;
var i__5727__auto___25479 = (0);
while(true){
if((i__5727__auto___25479 < len__5726__auto___25478)){
args__5732__auto__.push((arguments[i__5727__auto___25479]));

var G__25480 = (i__5727__auto___25479 + (1));
i__5727__auto___25479 = G__25480;
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
(clojure.math.combinatorics.partitions.cljs$lang$applyTo = (function (seq25421){
var G__25422 = cljs.core.first.call(null,seq25421);
var seq25421__$1 = cljs.core.next.call(null,seq25421);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__25422,seq25421__$1);
}));


//# sourceMappingURL=combinatorics.js.map
