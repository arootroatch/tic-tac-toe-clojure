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
var c = cljs.core.vec.call(null,cljs.core.cons.call(null,null,(function (){var iter__5480__auto__ = (function clojure$math$combinatorics$index_combinations_$_iter__10655(s__10656){
return (new cljs.core.LazySeq(null,(function (){
var s__10656__$1 = s__10656;
while(true){
var temp__5804__auto__ = cljs.core.seq.call(null,s__10656__$1);
if(temp__5804__auto__){
var s__10656__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__10656__$2)){
var c__5478__auto__ = cljs.core.chunk_first.call(null,s__10656__$2);
var size__5479__auto__ = cljs.core.count.call(null,c__5478__auto__);
var b__10658 = cljs.core.chunk_buffer.call(null,size__5479__auto__);
if((function (){var i__10657 = (0);
while(true){
if((i__10657 < size__5479__auto__)){
var j = cljs.core._nth.call(null,c__5478__auto__,i__10657);
cljs.core.chunk_append.call(null,b__10658,((j + cnt) + (- (n + (1)))));

var G__10659 = (i__10657 + (1));
i__10657 = G__10659;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10658),clojure$math$combinatorics$index_combinations_$_iter__10655.call(null,cljs.core.chunk_rest.call(null,s__10656__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10658),null);
}
} else {
var j = cljs.core.first.call(null,s__10656__$2);
return cljs.core.cons.call(null,((j + cnt) + (- (n + (1)))),clojure$math$combinatorics$index_combinations_$_iter__10655.call(null,cljs.core.rest.call(null,s__10656__$2)));
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
var G__10663 = cljs.core.assoc.call(null,c__$3,(j__$1 - (1)),(c__$3.call(null,j__$1) - (1)));
var G__10664 = (j__$1 - (1));
c__$3 = G__10663;
j__$1 = G__10664;
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
var G__10668 = cljs.core.conj.call(null,distribution__$1,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [index__$1,mi,(already_distributed__$1 + mi)], null));
var G__10669 = (index__$1 + (1));
var G__10670 = (already_distributed__$1 + mi);
distribution__$1 = G__10668;
index__$1 = G__10669;
already_distributed__$1 = G__10670;
continue;
}
}
break;
}
});
clojure.math.combinatorics.next_distribution = (function clojure$math$combinatorics$next_distribution(m,total,distribution){
var vec__10660 = cljs.core.peek.call(null,distribution);
var index = cljs.core.nth.call(null,vec__10660,(0),null);
var this_bucket = cljs.core.nth.call(null,vec__10660,(1),null);
var this_and_to_the_left = cljs.core.nth.call(null,vec__10660,(2),null);
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
var vec__10665 = cljs.core.peek.call(null,distribution__$1);
var index__$1 = cljs.core.nth.call(null,vec__10665,(0),null);
var this_bucket__$1 = cljs.core.nth.call(null,vec__10665,(1),null);
var this_and_to_the_left__$1 = cljs.core.nth.call(null,vec__10665,(2),null);
var distribution__$2 = ((cljs.core._EQ_.call(null,this_bucket__$1,(1)))?cljs.core.pop.call(null,distribution__$1):cljs.core.conj.call(null,cljs.core.pop.call(null,distribution__$1),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [index__$1,(this_bucket__$1 - (1)),(this_and_to_the_left__$1 - (1))], null)));
if(((total - (this_and_to_the_left__$1 - (1))) <= cljs.core.apply.call(null,cljs.core._PLUS_,cljs.core.subvec.call(null,m,(index__$1 + (1)))))){
return clojure.math.combinatorics.distribute.call(null,m,(index__$1 + (1)),total,distribution__$2,(this_and_to_the_left__$1 - (1)));
} else {
if(cljs.core.seq.call(null,distribution__$2)){
var G__10675 = distribution__$2;
distribution__$1 = G__10675;
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
var m = cljs.core.vec.call(null,(function (){var iter__5480__auto__ = (function clojure$math$combinatorics$multi_comb_$_iter__10671(s__10672){
return (new cljs.core.LazySeq(null,(function (){
var s__10672__$1 = s__10672;
while(true){
var temp__5804__auto__ = cljs.core.seq.call(null,s__10672__$1);
if(temp__5804__auto__){
var s__10672__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__10672__$2)){
var c__5478__auto__ = cljs.core.chunk_first.call(null,s__10672__$2);
var size__5479__auto__ = cljs.core.count.call(null,c__5478__auto__);
var b__10674 = cljs.core.chunk_buffer.call(null,size__5479__auto__);
if((function (){var i__10673 = (0);
while(true){
if((i__10673 < size__5479__auto__)){
var i = cljs.core._nth.call(null,c__5478__auto__,i__10673);
cljs.core.chunk_append.call(null,b__10674,f.call(null,v.call(null,i)));

var G__10749 = (i__10673 + (1));
i__10673 = G__10749;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10674),clojure$math$combinatorics$multi_comb_$_iter__10671.call(null,cljs.core.chunk_rest.call(null,s__10672__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10674),null);
}
} else {
var i = cljs.core.first.call(null,s__10672__$2);
return cljs.core.cons.call(null,f.call(null,v.call(null,i)),clojure$math$combinatorics$multi_comb_$_iter__10671.call(null,cljs.core.rest.call(null,s__10672__$2)));
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
var iter__5480__auto__ = (function clojure$math$combinatorics$multi_comb_$_iter__10676(s__10677){
return (new cljs.core.LazySeq(null,(function (){
var s__10677__$1 = s__10677;
while(true){
var temp__5804__auto__ = cljs.core.seq.call(null,s__10677__$1);
if(temp__5804__auto__){
var s__10677__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__10677__$2)){
var c__5478__auto__ = cljs.core.chunk_first.call(null,s__10677__$2);
var size__5479__auto__ = cljs.core.count.call(null,c__5478__auto__);
var b__10679 = cljs.core.chunk_buffer.call(null,size__5479__auto__);
if((function (){var i__10678 = (0);
while(true){
if((i__10678 < size__5479__auto__)){
var q = cljs.core._nth.call(null,c__5478__auto__,i__10678);
cljs.core.chunk_append.call(null,b__10679,clojure.math.combinatorics.join.call(null,(function (){var iter__5480__auto__ = ((function (i__10678,q,c__5478__auto__,size__5479__auto__,b__10679,s__10677__$2,temp__5804__auto__,f,v,domain,m,qs){
return (function clojure$math$combinatorics$multi_comb_$_iter__10676_$_iter__10684(s__10685){
return (new cljs.core.LazySeq(null,((function (i__10678,q,c__5478__auto__,size__5479__auto__,b__10679,s__10677__$2,temp__5804__auto__,f,v,domain,m,qs){
return (function (){
var s__10685__$1 = s__10685;
while(true){
var temp__5804__auto____$1 = cljs.core.seq.call(null,s__10685__$1);
if(temp__5804__auto____$1){
var s__10685__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__10685__$2)){
var c__5478__auto____$1 = cljs.core.chunk_first.call(null,s__10685__$2);
var size__5479__auto____$1 = cljs.core.count.call(null,c__5478__auto____$1);
var b__10687 = cljs.core.chunk_buffer.call(null,size__5479__auto____$1);
if((function (){var i__10686 = (0);
while(true){
if((i__10686 < size__5479__auto____$1)){
var vec__10690 = cljs.core._nth.call(null,c__5478__auto____$1,i__10686);
var index = cljs.core.nth.call(null,vec__10690,(0),null);
var this_bucket = cljs.core.nth.call(null,vec__10690,(1),null);
var _ = cljs.core.nth.call(null,vec__10690,(2),null);
cljs.core.chunk_append.call(null,b__10687,cljs.core.repeat.call(null,this_bucket,v.call(null,index)));

var G__10770 = (i__10686 + (1));
i__10686 = G__10770;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10687),clojure$math$combinatorics$multi_comb_$_iter__10676_$_iter__10684.call(null,cljs.core.chunk_rest.call(null,s__10685__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10687),null);
}
} else {
var vec__10693 = cljs.core.first.call(null,s__10685__$2);
var index = cljs.core.nth.call(null,vec__10693,(0),null);
var this_bucket = cljs.core.nth.call(null,vec__10693,(1),null);
var _ = cljs.core.nth.call(null,vec__10693,(2),null);
return cljs.core.cons.call(null,cljs.core.repeat.call(null,this_bucket,v.call(null,index)),clojure$math$combinatorics$multi_comb_$_iter__10676_$_iter__10684.call(null,cljs.core.rest.call(null,s__10685__$2)));
}
} else {
return null;
}
break;
}
});})(i__10678,q,c__5478__auto__,size__5479__auto__,b__10679,s__10677__$2,temp__5804__auto__,f,v,domain,m,qs))
,null,null));
});})(i__10678,q,c__5478__auto__,size__5479__auto__,b__10679,s__10677__$2,temp__5804__auto__,f,v,domain,m,qs))
;
return iter__5480__auto__.call(null,q);
})()));

var G__10772 = (i__10678 + (1));
i__10678 = G__10772;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10679),clojure$math$combinatorics$multi_comb_$_iter__10676.call(null,cljs.core.chunk_rest.call(null,s__10677__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10679),null);
}
} else {
var q = cljs.core.first.call(null,s__10677__$2);
return cljs.core.cons.call(null,clojure.math.combinatorics.join.call(null,(function (){var iter__5480__auto__ = ((function (q,s__10677__$2,temp__5804__auto__,f,v,domain,m,qs){
return (function clojure$math$combinatorics$multi_comb_$_iter__10676_$_iter__10706(s__10707){
return (new cljs.core.LazySeq(null,(function (){
var s__10707__$1 = s__10707;
while(true){
var temp__5804__auto____$1 = cljs.core.seq.call(null,s__10707__$1);
if(temp__5804__auto____$1){
var s__10707__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__10707__$2)){
var c__5478__auto__ = cljs.core.chunk_first.call(null,s__10707__$2);
var size__5479__auto__ = cljs.core.count.call(null,c__5478__auto__);
var b__10709 = cljs.core.chunk_buffer.call(null,size__5479__auto__);
if((function (){var i__10708 = (0);
while(true){
if((i__10708 < size__5479__auto__)){
var vec__10720 = cljs.core._nth.call(null,c__5478__auto__,i__10708);
var index = cljs.core.nth.call(null,vec__10720,(0),null);
var this_bucket = cljs.core.nth.call(null,vec__10720,(1),null);
var _ = cljs.core.nth.call(null,vec__10720,(2),null);
cljs.core.chunk_append.call(null,b__10709,cljs.core.repeat.call(null,this_bucket,v.call(null,index)));

var G__10779 = (i__10708 + (1));
i__10708 = G__10779;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10709),clojure$math$combinatorics$multi_comb_$_iter__10676_$_iter__10706.call(null,cljs.core.chunk_rest.call(null,s__10707__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10709),null);
}
} else {
var vec__10727 = cljs.core.first.call(null,s__10707__$2);
var index = cljs.core.nth.call(null,vec__10727,(0),null);
var this_bucket = cljs.core.nth.call(null,vec__10727,(1),null);
var _ = cljs.core.nth.call(null,vec__10727,(2),null);
return cljs.core.cons.call(null,cljs.core.repeat.call(null,this_bucket,v.call(null,index)),clojure$math$combinatorics$multi_comb_$_iter__10676_$_iter__10706.call(null,cljs.core.rest.call(null,s__10707__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(q,s__10677__$2,temp__5804__auto__,f,v,domain,m,qs))
;
return iter__5480__auto__.call(null,q);
})()),clojure$math$combinatorics$multi_comb_$_iter__10676.call(null,cljs.core.rest.call(null,s__10677__$2)));
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
var iter__5480__auto__ = (function clojure$math$combinatorics$combinations_$_iter__10745(s__10746){
return (new cljs.core.LazySeq(null,(function (){
var s__10746__$1 = s__10746;
while(true){
var temp__5804__auto__ = cljs.core.seq.call(null,s__10746__$1);
if(temp__5804__auto__){
var s__10746__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__10746__$2)){
var c__5478__auto__ = cljs.core.chunk_first.call(null,s__10746__$2);
var size__5479__auto__ = cljs.core.count.call(null,c__5478__auto__);
var b__10748 = cljs.core.chunk_buffer.call(null,size__5479__auto__);
if((function (){var i__10747 = (0);
while(true){
if((i__10747 < size__5479__auto__)){
var item = cljs.core._nth.call(null,c__5478__auto__,i__10747);
cljs.core.chunk_append.call(null,b__10748,(new cljs.core.List(null,item,null,(1),null)));

var G__10790 = (i__10747 + (1));
i__10747 = G__10790;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10748),clojure$math$combinatorics$combinations_$_iter__10745.call(null,cljs.core.chunk_rest.call(null,s__10746__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10748),null);
}
} else {
var item = cljs.core.first.call(null,s__10746__$2);
return cljs.core.cons.call(null,(new cljs.core.List(null,item,null,(1),null)),clojure$math$combinatorics$combinations_$_iter__10745.call(null,cljs.core.rest.call(null,s__10746__$2)));
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
return cljs.core.map.call(null,(function (p1__10736_SHARP_){
return cljs.core.map.call(null,v_items,p1__10736_SHARP_);
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
var len__5726__auto___10799 = arguments.length;
var i__5727__auto___10800 = (0);
while(true){
if((i__5727__auto___10800 < len__5726__auto___10799)){
args__5732__auto__.push((arguments[i__5727__auto___10800]));

var G__10801 = (i__5727__auto___10800 + (1));
i__5727__auto___10800 = G__10801;
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
var G__10806 = (i - (1));
var G__10807 = cljs.core.assoc.call(null,v_seqs__$2,i,v_original_seqs.call(null,i));
i = G__10806;
v_seqs__$2 = G__10807;
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
(clojure.math.combinatorics.cartesian_product.cljs$lang$applyTo = (function (seq10771){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq10771));
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
var G__10812 = (i - (1));
i = G__10812;
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
var G__10825 = (i - (1));
i = G__10825;
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
var G__10826 = cljs.core.assoc.call(null,v__$1,k,v__$1.call(null,l__$1),l__$1,v__$1.call(null,k));
var G__10827 = (k + (1));
var G__10828 = (l__$1 - (1));
v__$1 = G__10826;
k = G__10827;
l__$1 = G__10828;
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
var indices = clojure.math.combinatorics.join.call(null,(function (){var iter__5480__auto__ = (function clojure$math$combinatorics$multi_perm_$_iter__10808(s__10809){
return (new cljs.core.LazySeq(null,(function (){
var s__10809__$1 = s__10809;
while(true){
var temp__5804__auto__ = cljs.core.seq.call(null,s__10809__$1);
if(temp__5804__auto__){
var s__10809__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__10809__$2)){
var c__5478__auto__ = cljs.core.chunk_first.call(null,s__10809__$2);
var size__5479__auto__ = cljs.core.count.call(null,c__5478__auto__);
var b__10811 = cljs.core.chunk_buffer.call(null,size__5479__auto__);
if((function (){var i__10810 = (0);
while(true){
if((i__10810 < size__5479__auto__)){
var i = cljs.core._nth.call(null,c__5478__auto__,i__10810);
cljs.core.chunk_append.call(null,b__10811,cljs.core.repeat.call(null,f.call(null,v.call(null,i)),i));

var G__10834 = (i__10810 + (1));
i__10810 = G__10834;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10811),clojure$math$combinatorics$multi_perm_$_iter__10808.call(null,cljs.core.chunk_rest.call(null,s__10809__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10811),null);
}
} else {
var i = cljs.core.first.call(null,s__10809__$2);
return cljs.core.cons.call(null,cljs.core.repeat.call(null,f.call(null,v.call(null,i)),i),clojure$math$combinatorics$multi_perm_$_iter__10808.call(null,cljs.core.rest.call(null,s__10809__$2)));
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
return cljs.core.map.call(null,(function (p1__10829_SHARP_){
return cljs.core.map.call(null,v,p1__10829_SHARP_);
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
var G__10852 = clojure.math.combinatorics._STAR__SINGLEQUOTE_.call(null,acc,n__$1);
var G__10853 = (n__$1 - (1));
acc = G__10852;
n__$1 = G__10853;
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
var G__10854 = q;
var G__10855 = cljs.core.cons.call(null,r,digits);
var G__10856 = (divisor + (1));
n__$1 = G__10854;
digits = G__10855;
divisor = G__10856;
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
var G__10874 = cljs.core.conj.call(null,acc,cljs.core.first.call(null,l__$1));
var G__10875 = cljs.core.rest.call(null,l__$1);
var G__10876 = (n__$1 - (1));
acc = G__10874;
l__$1 = G__10875;
n__$1 = G__10876;
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
var G__10906 = cljs.core.rest.call(null,indices);
var G__10907 = clojure.math.combinatorics.remove_nth.call(null,l__$1,i);
var G__10908 = cljs.core.conj.call(null,perm,item);
indices = G__10906;
l__$1 = G__10907;
perm = G__10908;
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
return cljs.core.reductions.call(null,clojure.math.combinatorics._PLUS__SINGLEQUOTE_,(0),(function (){var iter__5480__auto__ = (function clojure$math$combinatorics$initial_perm_numbers_$_iter__10902(s__10903){
return (new cljs.core.LazySeq(null,(function (){
var s__10903__$1 = s__10903;
while(true){
var temp__5804__auto__ = cljs.core.seq.call(null,s__10903__$1);
if(temp__5804__auto__){
var s__10903__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__10903__$2)){
var c__5478__auto__ = cljs.core.chunk_first.call(null,s__10903__$2);
var size__5479__auto__ = cljs.core.count.call(null,c__5478__auto__);
var b__10905 = cljs.core.chunk_buffer.call(null,size__5479__auto__);
if((function (){var i__10904 = (0);
while(true){
if((i__10904 < size__5479__auto__)){
var vec__10915 = cljs.core._nth.call(null,c__5478__auto__,i__10904);
var k = cljs.core.nth.call(null,vec__10915,(0),null);
var v = cljs.core.nth.call(null,vec__10915,(1),null);
cljs.core.chunk_append.call(null,b__10905,clojure.math.combinatorics.count_permutations_from_frequencies.call(null,cljs.core.assoc.call(null,freqs,k,(v - (1)))));

var G__10925 = (i__10904 + (1));
i__10904 = G__10925;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10905),clojure$math$combinatorics$initial_perm_numbers_$_iter__10902.call(null,cljs.core.chunk_rest.call(null,s__10903__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10905),null);
}
} else {
var vec__10918 = cljs.core.first.call(null,s__10903__$2);
var k = cljs.core.nth.call(null,vec__10918,(0),null);
var v = cljs.core.nth.call(null,vec__10918,(1),null);
return cljs.core.cons.call(null,clojure.math.combinatorics.count_permutations_from_frequencies.call(null,cljs.core.assoc.call(null,freqs,k,(v - (1)))),clojure$math$combinatorics$initial_perm_numbers_$_iter__10902.call(null,cljs.core.rest.call(null,s__10903__$2)));
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
var G__10936 = cljs.core.rest.call(null,perm_numbers__$1);
var G__10937 = (index + (1));
perm_numbers__$1 = G__10936;
index = G__10937;
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
var vec__10931 = clojure.math.combinatorics.index_remainder.call(null,clojure.math.combinatorics.initial_perm_numbers.call(null,freqs__$1),n__$1);
var index = cljs.core.nth.call(null,vec__10931,(0),null);
var remainder = cljs.core.nth.call(null,vec__10931,(1),null);
var G__10946 = remainder;
var G__10947 = cljs.core.conj.call(null,digits,index);
var G__10948 = (function (){var nth_key = cljs.core.nth.call(null,cljs.core.keys.call(null,freqs__$1),index);
return clojure.math.combinatorics.dec_key.call(null,freqs__$1,nth_key);
})();
n__$1 = G__10946;
digits = G__10947;
freqs__$1 = G__10948;
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
var G__10957 = clojure.math.combinatorics.dec_key.call(null,freqs,item);
var G__10958 = cljs.core.rest.call(null,indices);
var G__10959 = cljs.core.conj.call(null,perm,item);
freqs = G__10957;
indices = G__10958;
perm = G__10959;
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
var indices = clojure.math.combinatorics.join.call(null,(function (){var iter__5480__auto__ = (function clojure$math$combinatorics$nth_permutation_$_iter__10953(s__10954){
return (new cljs.core.LazySeq(null,(function (){
var s__10954__$1 = s__10954;
while(true){
var temp__5804__auto__ = cljs.core.seq.call(null,s__10954__$1);
if(temp__5804__auto__){
var s__10954__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__10954__$2)){
var c__5478__auto__ = cljs.core.chunk_first.call(null,s__10954__$2);
var size__5479__auto__ = cljs.core.count.call(null,c__5478__auto__);
var b__10956 = cljs.core.chunk_buffer.call(null,size__5479__auto__);
if((function (){var i__10955 = (0);
while(true){
if((i__10955 < size__5479__auto__)){
var i = cljs.core._nth.call(null,c__5478__auto__,i__10955);
cljs.core.chunk_append.call(null,b__10956,cljs.core.repeat.call(null,f.call(null,v.call(null,i)),i));

var G__10971 = (i__10955 + (1));
i__10955 = G__10971;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10956),clojure$math$combinatorics$nth_permutation_$_iter__10953.call(null,cljs.core.chunk_rest.call(null,s__10954__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10956),null);
}
} else {
var i = cljs.core.first.call(null,s__10954__$2);
return cljs.core.cons.call(null,cljs.core.repeat.call(null,f.call(null,v.call(null,i)),i),clojure$math$combinatorics$nth_permutation_$_iter__10953.call(null,cljs.core.rest.call(null,s__10954__$2)));
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
var indices = clojure.math.combinatorics.join.call(null,(function (){var iter__5480__auto__ = (function clojure$math$combinatorics$drop_permutations_$_iter__10964(s__10965){
return (new cljs.core.LazySeq(null,(function (){
var s__10965__$1 = s__10965;
while(true){
var temp__5804__auto__ = cljs.core.seq.call(null,s__10965__$1);
if(temp__5804__auto__){
var s__10965__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__10965__$2)){
var c__5478__auto__ = cljs.core.chunk_first.call(null,s__10965__$2);
var size__5479__auto__ = cljs.core.count.call(null,c__5478__auto__);
var b__10967 = cljs.core.chunk_buffer.call(null,size__5479__auto__);
if((function (){var i__10966 = (0);
while(true){
if((i__10966 < size__5479__auto__)){
var i = cljs.core._nth.call(null,c__5478__auto__,i__10966);
cljs.core.chunk_append.call(null,b__10967,cljs.core.repeat.call(null,f.call(null,v.call(null,i)),i));

var G__10995 = (i__10966 + (1));
i__10966 = G__10995;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10967),clojure$math$combinatorics$drop_permutations_$_iter__10964.call(null,cljs.core.chunk_rest.call(null,s__10965__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10967),null);
}
} else {
var i = cljs.core.first.call(null,s__10965__$2);
return cljs.core.cons.call(null,cljs.core.repeat.call(null,f.call(null,v.call(null,i)),i),clojure$math$combinatorics$drop_permutations_$_iter__10964.call(null,cljs.core.rest.call(null,s__10965__$2)));
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
var G__10998 = n;
var G__10999 = (n - k);
n = G__10998;
k = G__10999;
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
var count_combinations_from_frequencies_orig_val__10996 = clojure.math.combinatorics.count_combinations_from_frequencies;
var count_combinations_from_frequencies_temp_val__10997 = cljs.core.memoize.call(null,clojure.math.combinatorics.count_combinations_from_frequencies);
(clojure.math.combinatorics.count_combinations_from_frequencies = count_combinations_from_frequencies_temp_val__10997);

try{return clojure.math.combinatorics.count_combinations_unmemoized.call(null,items,t);
}finally {(clojure.math.combinatorics.count_combinations_from_frequencies = count_combinations_from_frequencies_orig_val__10996);
}});
clojure.math.combinatorics.expt_int = (function clojure$math$combinatorics$expt_int(base,pow){
var n = pow;
var y = (1);
var z = base;
while(true){
var t = cljs.core.even_QMARK_.call(null,n);
var n__$1 = cljs.core.quot.call(null,n,(2));
if(t){
var G__11018 = n__$1;
var G__11019 = y;
var G__11020 = clojure.math.combinatorics._STAR__SINGLEQUOTE_.call(null,z,z);
n = G__11018;
y = G__11019;
z = G__11020;
continue;
} else {
if((n__$1 === (0))){
return clojure.math.combinatorics._STAR__SINGLEQUOTE_.call(null,z,y);
} else {
var G__11027 = n__$1;
var G__11028 = clojure.math.combinatorics._STAR__SINGLEQUOTE_.call(null,z,y);
var G__11029 = clojure.math.combinatorics._STAR__SINGLEQUOTE_.call(null,z,z);
n = G__11027;
y = G__11028;
z = G__11029;
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
return cljs.core.apply.call(null,clojure.math.combinatorics._PLUS__SINGLEQUOTE_,(function (){var iter__5480__auto__ = (function clojure$math$combinatorics$count_subsets_unmemoized_$_iter__11004(s__11005){
return (new cljs.core.LazySeq(null,(function (){
var s__11005__$1 = s__11005;
while(true){
var temp__5804__auto__ = cljs.core.seq.call(null,s__11005__$1);
if(temp__5804__auto__){
var s__11005__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__11005__$2)){
var c__5478__auto__ = cljs.core.chunk_first.call(null,s__11005__$2);
var size__5479__auto__ = cljs.core.count.call(null,c__5478__auto__);
var b__11007 = cljs.core.chunk_buffer.call(null,size__5479__auto__);
if((function (){var i__11006 = (0);
while(true){
if((i__11006 < size__5479__auto__)){
var i = cljs.core._nth.call(null,c__5478__auto__,i__11006);
cljs.core.chunk_append.call(null,b__11007,clojure.math.combinatorics.count_combinations_unmemoized.call(null,items,i));

var G__11042 = (i__11006 + (1));
i__11006 = G__11042;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11007),clojure$math$combinatorics$count_subsets_unmemoized_$_iter__11004.call(null,cljs.core.chunk_rest.call(null,s__11005__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11007),null);
}
} else {
var i = cljs.core.first.call(null,s__11005__$2);
return cljs.core.cons.call(null,clojure.math.combinatorics.count_combinations_unmemoized.call(null,items,i),clojure$math$combinatorics$count_subsets_unmemoized_$_iter__11004.call(null,cljs.core.rest.call(null,s__11005__$2)));
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
var count_combinations_from_frequencies_orig_val__11021 = clojure.math.combinatorics.count_combinations_from_frequencies;
var count_combinations_from_frequencies_temp_val__11022 = cljs.core.memoize.call(null,clojure.math.combinatorics.count_combinations_from_frequencies);
(clojure.math.combinatorics.count_combinations_from_frequencies = count_combinations_from_frequencies_temp_val__11022);

try{return clojure.math.combinatorics.count_subsets_unmemoized.call(null,items);
}finally {(clojure.math.combinatorics.count_combinations_from_frequencies = count_combinations_from_frequencies_orig_val__11021);
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
var G__11054 = cljs.core.conj.call(null,comb,cljs.core.first.call(null,items__$1));
var G__11055 = cljs.core.rest.call(null,items__$1);
var G__11056 = (t__$1 - (1));
var G__11057 = n__$1;
comb = G__11054;
items__$1 = G__11055;
t__$1 = G__11056;
n__$1 = G__11057;
continue;
} else {
var G__11058 = comb;
var G__11059 = cljs.core.rest.call(null,items__$1);
var G__11060 = t__$1;
var G__11061 = (n__$1 - dc_dt);
comb = G__11058;
items__$1 = G__11059;
t__$1 = G__11060;
n__$1 = G__11061;
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
return (function clojure$math$combinatorics$nth_combination_freqs_$_iter__11069(s__11070){
return (new cljs.core.LazySeq(null,((function (comb,freqs__$1,t__$1,n__$1){
return (function (){
var s__11070__$1 = s__11070;
while(true){
var temp__5804__auto__ = cljs.core.seq.call(null,s__11070__$1);
if(temp__5804__auto__){
var s__11070__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__11070__$2)){
var c__5478__auto__ = cljs.core.chunk_first.call(null,s__11070__$2);
var size__5479__auto__ = cljs.core.count.call(null,c__5478__auto__);
var b__11072 = cljs.core.chunk_buffer.call(null,size__5479__auto__);
if((function (){var i__11071 = (0);
while(true){
if((i__11071 < size__5479__auto__)){
var vec__11073 = cljs.core._nth.call(null,c__5478__auto__,i__11071);
var k = cljs.core.nth.call(null,vec__11073,(0),null);
var v = cljs.core.nth.call(null,vec__11073,(1),null);
cljs.core.chunk_append.call(null,b__11072,cljs.core.repeat.call(null,v,k));

var G__11095 = (i__11071 + (1));
i__11071 = G__11095;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11072),clojure$math$combinatorics$nth_combination_freqs_$_iter__11069.call(null,cljs.core.chunk_rest.call(null,s__11070__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11072),null);
}
} else {
var vec__11076 = cljs.core.first.call(null,s__11070__$2);
var k = cljs.core.nth.call(null,vec__11076,(0),null);
var v = cljs.core.nth.call(null,vec__11076,(1),null);
return cljs.core.cons.call(null,cljs.core.repeat.call(null,v,k),clojure$math$combinatorics$nth_combination_freqs_$_iter__11069.call(null,cljs.core.rest.call(null,s__11070__$2)));
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
var G__11108 = cljs.core.conj.call(null,comb,first_key);
var G__11109 = remove_one_key;
var G__11110 = (t__$1 - (1));
var G__11111 = n__$1;
comb = G__11108;
freqs__$1 = G__11109;
t__$1 = G__11110;
n__$1 = G__11111;
continue;
} else {
var G__11112 = comb;
var G__11113 = cljs.core.dissoc.call(null,freqs__$1,first_key);
var G__11114 = t__$1;
var G__11115 = (n__$1 - dc_dt);
comb = G__11112;
freqs__$1 = G__11113;
t__$1 = G__11114;
n__$1 = G__11115;
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
var count_combinations_from_frequencies_orig_val__11089 = clojure.math.combinatorics.count_combinations_from_frequencies;
var count_combinations_from_frequencies_temp_val__11090 = cljs.core.memoize.call(null,clojure.math.combinatorics.count_combinations_from_frequencies);
(clojure.math.combinatorics.count_combinations_from_frequencies = count_combinations_from_frequencies_temp_val__11090);

try{var v = cljs.core.vec.call(null,cljs.core.distinct.call(null,items));
var f = cljs.core.frequencies.call(null,items);
var indices = clojure.math.combinatorics.join.call(null,(function (){var iter__5480__auto__ = (function clojure$math$combinatorics$nth_combination_$_iter__11091(s__11092){
return (new cljs.core.LazySeq(null,(function (){
var s__11092__$1 = s__11092;
while(true){
var temp__5804__auto__ = cljs.core.seq.call(null,s__11092__$1);
if(temp__5804__auto__){
var s__11092__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__11092__$2)){
var c__5478__auto__ = cljs.core.chunk_first.call(null,s__11092__$2);
var size__5479__auto__ = cljs.core.count.call(null,c__5478__auto__);
var b__11094 = cljs.core.chunk_buffer.call(null,size__5479__auto__);
if((function (){var i__11093 = (0);
while(true){
if((i__11093 < size__5479__auto__)){
var i = cljs.core._nth.call(null,c__5478__auto__,i__11093);
cljs.core.chunk_append.call(null,b__11094,cljs.core.repeat.call(null,f.call(null,v.call(null,i)),i));

var G__11118 = (i__11093 + (1));
i__11093 = G__11118;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11094),clojure$math$combinatorics$nth_combination_$_iter__11091.call(null,cljs.core.chunk_rest.call(null,s__11092__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11094),null);
}
} else {
var i = cljs.core.first.call(null,s__11092__$2);
return cljs.core.cons.call(null,cljs.core.repeat.call(null,f.call(null,v.call(null,i)),i),clojure$math$combinatorics$nth_combination_$_iter__11091.call(null,cljs.core.rest.call(null,s__11092__$2)));
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
}finally {(clojure.math.combinatorics.count_combinations_from_frequencies = count_combinations_from_frequencies_orig_val__11089);
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
var G__11128 = (size + (1));
var G__11129 = (n__$1 - num_combinations);
size = G__11128;
n__$1 = G__11129;
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
var G__11130 = cljs.core.rest.call(null,l__$1);
var G__11131 = (n + (1));
l__$1 = G__11130;
n = G__11131;
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
var G__11132 = cljs.core.rest.call(null,l__$1);
var G__11133 = clojure.math.combinatorics._PLUS__SINGLEQUOTE_.call(null,index,clojure.math.combinatorics._STAR__SINGLEQUOTE_.call(null,clojure.math.combinatorics.factorial.call(null,n),clojure.math.combinatorics.list_index.call(null,cljs.core.sort.call(null,l__$1),cljs.core.first.call(null,l__$1))));
var G__11134 = (n - (1));
l__$1 = G__11132;
index = G__11133;
n = G__11134;
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
var G__11143 = cljs.core.rest.call(null,l__$1);
var G__11144 = cljs.core.reduce.call(null,clojure.math.combinatorics._PLUS__SINGLEQUOTE_,index,(function (){var iter__5480__auto__ = ((function (l__$1,index,freqs){
return (function clojure$math$combinatorics$permutation_index_duplicates_$_iter__11135(s__11136){
return (new cljs.core.LazySeq(null,((function (l__$1,index,freqs){
return (function (){
var s__11136__$1 = s__11136;
while(true){
var temp__5804__auto__ = cljs.core.seq.call(null,s__11136__$1);
if(temp__5804__auto__){
var s__11136__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__11136__$2)){
var c__5478__auto__ = cljs.core.chunk_first.call(null,s__11136__$2);
var size__5479__auto__ = cljs.core.count.call(null,c__5478__auto__);
var b__11138 = cljs.core.chunk_buffer.call(null,size__5479__auto__);
if((function (){var i__11137 = (0);
while(true){
if((i__11137 < size__5479__auto__)){
var k = cljs.core._nth.call(null,c__5478__auto__,i__11137);
cljs.core.chunk_append.call(null,b__11138,clojure.math.combinatorics.count_permutations_from_frequencies.call(null,clojure.math.combinatorics.dec_key.call(null,freqs,k)));

var G__11162 = (i__11137 + (1));
i__11137 = G__11162;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11138),clojure$math$combinatorics$permutation_index_duplicates_$_iter__11135.call(null,cljs.core.chunk_rest.call(null,s__11136__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11138),null);
}
} else {
var k = cljs.core.first.call(null,s__11136__$2);
return cljs.core.cons.call(null,clojure.math.combinatorics.count_permutations_from_frequencies.call(null,clojure.math.combinatorics.dec_key.call(null,freqs,k)),clojure$math$combinatorics$permutation_index_duplicates_$_iter__11135.call(null,cljs.core.rest.call(null,s__11136__$2)));
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
return (function (p1__11119_SHARP_){
return (cljs.core.compare.call(null,p1__11119_SHARP_,cljs.core.first.call(null,l__$1)) < (0));
});})(l__$1,index,freqs,iter__5480__auto__))
,cljs.core.keys.call(null,freqs)));
})());
var G__11145 = clojure.math.combinatorics.dec_key.call(null,freqs,cljs.core.first.call(null,l__$1));
l__$1 = G__11143;
index = G__11144;
freqs = G__11145;
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
return cljs.core.vec.call(null,(function (){var iter__5480__auto__ = (function clojure$math$combinatorics$init_$_iter__11158(s__11159){
return (new cljs.core.LazySeq(null,(function (){
var s__11159__$1 = s__11159;
while(true){
var temp__5804__auto__ = cljs.core.seq.call(null,s__11159__$1);
if(temp__5804__auto__){
var s__11159__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__11159__$2)){
var c__5478__auto__ = cljs.core.chunk_first.call(null,s__11159__$2);
var size__5479__auto__ = cljs.core.count.call(null,c__5478__auto__);
var b__11161 = cljs.core.chunk_buffer.call(null,size__5479__auto__);
if((function (){var i__11160 = (0);
while(true){
if((i__11160 < size__5479__auto__)){
var i = cljs.core._nth.call(null,c__5478__auto__,i__11160);
cljs.core.chunk_append.call(null,b__11161,(function (){var x__5087__auto__ = (0);
var y__5088__auto__ = (i - ((n - s) - (-1)));
return ((x__5087__auto__ > y__5088__auto__) ? x__5087__auto__ : y__5088__auto__);
})());

var G__11169 = (i__11160 + (1));
i__11160 = G__11169;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11161),clojure$math$combinatorics$init_$_iter__11158.call(null,cljs.core.chunk_rest.call(null,s__11159__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11161),null);
}
} else {
var i = cljs.core.first.call(null,s__11159__$2);
return cljs.core.cons.call(null,(function (){var x__5087__auto__ = (0);
var y__5088__auto__ = (i - ((n - s) - (-1)));
return ((x__5087__auto__ > y__5088__auto__) ? x__5087__auto__ : y__5088__auto__);
})(),clojure$math$combinatorics$init_$_iter__11158.call(null,cljs.core.rest.call(null,s__11159__$2)));
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
var G__11171 = arguments.length;
switch (G__11171) {
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
var G__11198 = (j - (1));
j = G__11198;
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
var vec__11180 = (function (){var a__$2 = a__$1;
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
var G__11199 = cljs.core.assoc.call(null,a__$2,i,new_a_i);
var G__11200 = cljs.core.assoc.call(null,b__$1,i,current_max);
var G__11201 = (i + (1));
var G__11202 = (function (){var x__5087__auto__ = current_max;
var y__5088__auto__ = (new_a_i + (1));
return ((x__5087__auto__ > y__5088__auto__) ? x__5087__auto__ : y__5088__auto__);
})();
a__$2 = G__11199;
b__$1 = G__11200;
i = G__11201;
current_max = G__11202;
continue;
} else {
var G__11203 = cljs.core.assoc.call(null,a__$2,i,(0));
var G__11204 = cljs.core.assoc.call(null,b__$1,i,current_max);
var G__11205 = (i + (1));
var G__11206 = current_max;
a__$2 = G__11203;
b__$1 = G__11204;
i = G__11205;
current_max = G__11206;
continue;

}
}
break;
}
})();
var a__$2 = cljs.core.nth.call(null,vec__11180,(0),null);
var b__$1 = cljs.core.nth.call(null,vec__11180,(1),null);
return clojure.math.combinatorics.growth_strings_H.call(null,n,a__$2,b__$1,r,s);
}
}
}),null,null)));
}));

(clojure.math.combinatorics.growth_strings_H.cljs$lang$maxFixedArity = 5);

clojure.math.combinatorics.lex_partitions_H = (function clojure$math$combinatorics$lex_partitions_H(var_args){
var args__5732__auto__ = [];
var len__5726__auto___11232 = arguments.length;
var i__5727__auto___11233 = (0);
while(true){
if((i__5727__auto___11233 < len__5726__auto___11232)){
args__5732__auto__.push((arguments[i__5727__auto___11233]));

var G__11238 = (i__5727__auto___11233 + (1));
i__5727__auto___11233 = G__11238;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return clojure.math.combinatorics.lex_partitions_H.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(clojure.math.combinatorics.lex_partitions_H.cljs$core$IFn$_invoke$arity$variadic = (function (N,p__11196){
var map__11197 = p__11196;
var map__11197__$1 = cljs.core.__destructure_map.call(null,map__11197);
var from = cljs.core.get.call(null,map__11197__$1,new cljs.core.Keyword(null,"min","min",444991522));
var to = cljs.core.get.call(null,map__11197__$1,new cljs.core.Keyword(null,"max","max",61366548));
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
var iter__5480__auto__ = (function clojure$math$combinatorics$iter__11207(s__11208){
return (new cljs.core.LazySeq(null,(function (){
var s__11208__$1 = s__11208;
while(true){
var temp__5804__auto__ = cljs.core.seq.call(null,s__11208__$1);
if(temp__5804__auto__){
var s__11208__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__11208__$2)){
var c__5478__auto__ = cljs.core.chunk_first.call(null,s__11208__$2);
var size__5479__auto__ = cljs.core.count.call(null,c__5478__auto__);
var b__11210 = cljs.core.chunk_buffer.call(null,size__5479__auto__);
if((function (){var i__11209 = (0);
while(true){
if((i__11209 < size__5479__auto__)){
var growth_string = cljs.core._nth.call(null,c__5478__auto__,i__11209);
var groups = cljs.core.group_by.call(null,growth_string,cljs.core.range.call(null,N));
cljs.core.chunk_append.call(null,b__11210,cljs.core.map.call(null,groups,cljs.core.range.call(null,cljs.core.count.call(null,groups))));

var G__11259 = (i__11209 + (1));
i__11209 = G__11259;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11210),clojure$math$combinatorics$iter__11207.call(null,cljs.core.chunk_rest.call(null,s__11208__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11210),null);
}
} else {
var growth_string = cljs.core.first.call(null,s__11208__$2);
var groups = cljs.core.group_by.call(null,growth_string,cljs.core.range.call(null,N));
return cljs.core.cons.call(null,cljs.core.map.call(null,groups,cljs.core.range.call(null,cljs.core.count.call(null,groups))),clojure$math$combinatorics$iter__11207.call(null,cljs.core.rest.call(null,s__11208__$2)));
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
(clojure.math.combinatorics.lex_partitions_H.cljs$lang$applyTo = (function (seq11189){
var G__11190 = cljs.core.first.call(null,seq11189);
var seq11189__$1 = cljs.core.next.call(null,seq11189);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__11190,seq11189__$1);
}));

clojure.math.combinatorics.partitions_H = (function clojure$math$combinatorics$partitions_H(var_args){
var args__5732__auto__ = [];
var len__5726__auto___11270 = arguments.length;
var i__5727__auto___11271 = (0);
while(true){
if((i__5727__auto___11271 < len__5726__auto___11270)){
args__5732__auto__.push((arguments[i__5727__auto___11271]));

var G__11272 = (i__5727__auto___11271 + (1));
i__5727__auto___11271 = G__11272;
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
var iter__5480__auto__ = (function clojure$math$combinatorics$iter__11243(s__11244){
return (new cljs.core.LazySeq(null,(function (){
var s__11244__$1 = s__11244;
while(true){
var temp__5804__auto__ = cljs.core.seq.call(null,s__11244__$1);
if(temp__5804__auto__){
var s__11244__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__11244__$2)){
var c__5478__auto__ = cljs.core.chunk_first.call(null,s__11244__$2);
var size__5479__auto__ = cljs.core.count.call(null,c__5478__auto__);
var b__11246 = cljs.core.chunk_buffer.call(null,size__5479__auto__);
if((function (){var i__11245 = (0);
while(true){
if((i__11245 < size__5479__auto__)){
var parts = cljs.core._nth.call(null,c__5478__auto__,i__11245);
cljs.core.chunk_append.call(null,b__11246,(function (){var iter__5480__auto__ = ((function (i__11245,parts,c__5478__auto__,size__5479__auto__,b__11246,s__11244__$2,temp__5804__auto__,items__$1,N,lex){
return (function clojure$math$combinatorics$iter__11243_$_iter__11247(s__11248){
return (new cljs.core.LazySeq(null,((function (i__11245,parts,c__5478__auto__,size__5479__auto__,b__11246,s__11244__$2,temp__5804__auto__,items__$1,N,lex){
return (function (){
var s__11248__$1 = s__11248;
while(true){
var temp__5804__auto____$1 = cljs.core.seq.call(null,s__11248__$1);
if(temp__5804__auto____$1){
var s__11248__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__11248__$2)){
var c__5478__auto____$1 = cljs.core.chunk_first.call(null,s__11248__$2);
var size__5479__auto____$1 = cljs.core.count.call(null,c__5478__auto____$1);
var b__11250 = cljs.core.chunk_buffer.call(null,size__5479__auto____$1);
if((function (){var i__11249 = (0);
while(true){
if((i__11249 < size__5479__auto____$1)){
var part = cljs.core._nth.call(null,c__5478__auto____$1,i__11249);
cljs.core.chunk_append.call(null,b__11250,cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,((function (i__11249,i__11245,part,c__5478__auto____$1,size__5479__auto____$1,b__11250,s__11248__$2,temp__5804__auto____$1,parts,c__5478__auto__,size__5479__auto__,b__11246,s__11244__$2,temp__5804__auto__,items__$1,N,lex){
return (function (v,o){
return cljs.core.conj_BANG_.call(null,v,items__$1.call(null,o));
});})(i__11249,i__11245,part,c__5478__auto____$1,size__5479__auto____$1,b__11250,s__11248__$2,temp__5804__auto____$1,parts,c__5478__auto__,size__5479__auto__,b__11246,s__11244__$2,temp__5804__auto__,items__$1,N,lex))
,cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY),part)));

var G__11299 = (i__11249 + (1));
i__11249 = G__11299;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11250),clojure$math$combinatorics$iter__11243_$_iter__11247.call(null,cljs.core.chunk_rest.call(null,s__11248__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11250),null);
}
} else {
var part = cljs.core.first.call(null,s__11248__$2);
return cljs.core.cons.call(null,cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,((function (i__11245,part,s__11248__$2,temp__5804__auto____$1,parts,c__5478__auto__,size__5479__auto__,b__11246,s__11244__$2,temp__5804__auto__,items__$1,N,lex){
return (function (v,o){
return cljs.core.conj_BANG_.call(null,v,items__$1.call(null,o));
});})(i__11245,part,s__11248__$2,temp__5804__auto____$1,parts,c__5478__auto__,size__5479__auto__,b__11246,s__11244__$2,temp__5804__auto__,items__$1,N,lex))
,cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY),part)),clojure$math$combinatorics$iter__11243_$_iter__11247.call(null,cljs.core.rest.call(null,s__11248__$2)));
}
} else {
return null;
}
break;
}
});})(i__11245,parts,c__5478__auto__,size__5479__auto__,b__11246,s__11244__$2,temp__5804__auto__,items__$1,N,lex))
,null,null));
});})(i__11245,parts,c__5478__auto__,size__5479__auto__,b__11246,s__11244__$2,temp__5804__auto__,items__$1,N,lex))
;
return iter__5480__auto__.call(null,parts);
})());

var G__11308 = (i__11245 + (1));
i__11245 = G__11308;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11246),clojure$math$combinatorics$iter__11243.call(null,cljs.core.chunk_rest.call(null,s__11244__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11246),null);
}
} else {
var parts = cljs.core.first.call(null,s__11244__$2);
return cljs.core.cons.call(null,(function (){var iter__5480__auto__ = ((function (parts,s__11244__$2,temp__5804__auto__,items__$1,N,lex){
return (function clojure$math$combinatorics$iter__11243_$_iter__11260(s__11261){
return (new cljs.core.LazySeq(null,(function (){
var s__11261__$1 = s__11261;
while(true){
var temp__5804__auto____$1 = cljs.core.seq.call(null,s__11261__$1);
if(temp__5804__auto____$1){
var s__11261__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__11261__$2)){
var c__5478__auto__ = cljs.core.chunk_first.call(null,s__11261__$2);
var size__5479__auto__ = cljs.core.count.call(null,c__5478__auto__);
var b__11263 = cljs.core.chunk_buffer.call(null,size__5479__auto__);
if((function (){var i__11262 = (0);
while(true){
if((i__11262 < size__5479__auto__)){
var part = cljs.core._nth.call(null,c__5478__auto__,i__11262);
cljs.core.chunk_append.call(null,b__11263,cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,((function (i__11262,part,c__5478__auto__,size__5479__auto__,b__11263,s__11261__$2,temp__5804__auto____$1,parts,s__11244__$2,temp__5804__auto__,items__$1,N,lex){
return (function (v,o){
return cljs.core.conj_BANG_.call(null,v,items__$1.call(null,o));
});})(i__11262,part,c__5478__auto__,size__5479__auto__,b__11263,s__11261__$2,temp__5804__auto____$1,parts,s__11244__$2,temp__5804__auto__,items__$1,N,lex))
,cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY),part)));

var G__11318 = (i__11262 + (1));
i__11262 = G__11318;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11263),clojure$math$combinatorics$iter__11243_$_iter__11260.call(null,cljs.core.chunk_rest.call(null,s__11261__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11263),null);
}
} else {
var part = cljs.core.first.call(null,s__11261__$2);
return cljs.core.cons.call(null,cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,((function (part,s__11261__$2,temp__5804__auto____$1,parts,s__11244__$2,temp__5804__auto__,items__$1,N,lex){
return (function (v,o){
return cljs.core.conj_BANG_.call(null,v,items__$1.call(null,o));
});})(part,s__11261__$2,temp__5804__auto____$1,parts,s__11244__$2,temp__5804__auto__,items__$1,N,lex))
,cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY),part)),clojure$math$combinatorics$iter__11243_$_iter__11260.call(null,cljs.core.rest.call(null,s__11261__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(parts,s__11244__$2,temp__5804__auto__,items__$1,N,lex))
;
return iter__5480__auto__.call(null,parts);
})(),clojure$math$combinatorics$iter__11243.call(null,cljs.core.rest.call(null,s__11244__$2)));
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
(clojure.math.combinatorics.partitions_H.cljs$lang$applyTo = (function (seq11230){
var G__11231 = cljs.core.first.call(null,seq11230);
var seq11230__$1 = cljs.core.next.call(null,seq11230);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__11231,seq11230__$1);
}));


clojure.math.combinatorics.multiset_partitions_M = (function clojure$math$combinatorics$multiset_partitions_M(var_args){
var G__11274 = arguments.length;
switch (G__11274) {
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
var vec__11287 = (function (){var j = (0);
var c__$1 = c;
var u__$1 = u;
var v__$1 = v;
while(true){
if(cljs.core._EQ_.call(null,j,m)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [c__$1,u__$1,v__$1], null);
} else {
var G__11380 = (j + (1));
var G__11381 = cljs.core.assoc.call(null,c__$1,j,(j + (1)));
var G__11382 = cljs.core.assoc.call(null,u__$1,j,multiset.call(null,(j + (1))));
var G__11383 = cljs.core.assoc.call(null,v__$1,j,multiset.call(null,(j + (1))));
j = G__11380;
c__$1 = G__11381;
u__$1 = G__11382;
v__$1 = G__11383;
continue;
}
break;
}
})();
var c__$1 = cljs.core.nth.call(null,vec__11287,(0),null);
var u__$1 = cljs.core.nth.call(null,vec__11287,(1),null);
var v__$1 = cljs.core.nth.call(null,vec__11287,(2),null);
var a = (0);
var b = m;
var l = (0);
var f__$1 = cljs.core.assoc.call(null,f,(0),(0),(1),m);
var stack = cljs.core.List.EMPTY;
return clojure.math.combinatorics.multiset_partitions_M.call(null,n,m,f__$1,c__$1,u__$1,v__$1,a,b,l,r,s);
}));

(clojure.math.combinatorics.multiset_partitions_M.cljs$core$IFn$_invoke$arity$11 = (function (n,m,f,c,u,v,a,b,l,r,s){
while(true){
var vec__11309 = (function (){var j = a;
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
var G__11393 = (j + (1));
var G__11397 = k;
var G__11398 = true;
var G__11399 = u__$2;
var G__11400 = v__$1;
var G__11401 = c__$1;
j = G__11393;
k = G__11397;
x = G__11398;
u__$1 = G__11399;
v__$1 = G__11400;
c__$1 = G__11401;
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
var G__11406 = j__$1;
var G__11407 = k__$1;
var G__11408 = x__$1;
var G__11409 = u__$2;
var G__11410 = v__$2;
var G__11411 = c__$2;
j = G__11406;
k = G__11407;
x = G__11408;
u__$1 = G__11409;
v__$1 = G__11410;
c__$1 = G__11411;
continue;
} else {
var c__$2 = cljs.core.assoc.call(null,c__$1,k,c__$1.call(null,j));
var v__$2 = cljs.core.assoc.call(null,v__$1,k,u__$2.call(null,k));
var k__$1 = (k + (1));
var j__$1 = (j + (1));
var G__11412 = j__$1;
var G__11413 = k__$1;
var G__11414 = x;
var G__11415 = u__$2;
var G__11416 = v__$2;
var G__11417 = c__$2;
j = G__11412;
k = G__11413;
x = G__11414;
u__$1 = G__11415;
v__$1 = G__11416;
c__$1 = G__11417;
continue;
}
}
}
break;
}
})();
var u__$1 = cljs.core.nth.call(null,vec__11309,(0),null);
var v__$1 = cljs.core.nth.call(null,vec__11309,(1),null);
var c__$1 = cljs.core.nth.call(null,vec__11309,(2),null);
var j = cljs.core.nth.call(null,vec__11309,(3),null);
var k = cljs.core.nth.call(null,vec__11309,(4),null);
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
var G__11418 = n;
var G__11419 = m;
var G__11420 = f__$1;
var G__11421 = c__$1;
var G__11422 = u__$1;
var G__11423 = v__$1;
var G__11424 = a__$1;
var G__11425 = b__$1;
var G__11426 = l__$1;
var G__11427 = r;
var G__11428 = s;
n = G__11418;
m = G__11419;
f = G__11420;
c = G__11421;
u = G__11422;
v = G__11423;
a = G__11424;
b = G__11425;
l = G__11426;
r = G__11427;
s = G__11428;
continue;
} else {
var part = (function (){var iter__5480__auto__ = ((function (n,m,f,c,u,v,a,b,l,r,s,vec__11309,u__$1,v__$1,c__$1,j,k){
return (function clojure$math$combinatorics$iter__11323(s__11324){
return (new cljs.core.LazySeq(null,((function (n,m,f,c,u,v,a,b,l,r,s,vec__11309,u__$1,v__$1,c__$1,j,k){
return (function (){
var s__11324__$1 = s__11324;
while(true){
var temp__5804__auto__ = cljs.core.seq.call(null,s__11324__$1);
if(temp__5804__auto__){
var s__11324__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__11324__$2)){
var c__5478__auto__ = cljs.core.chunk_first.call(null,s__11324__$2);
var size__5479__auto__ = cljs.core.count.call(null,c__5478__auto__);
var b__11326 = cljs.core.chunk_buffer.call(null,size__5479__auto__);
if((function (){var i__11325 = (0);
while(true){
if((i__11325 < size__5479__auto__)){
var y = cljs.core._nth.call(null,c__5478__auto__,i__11325);
cljs.core.chunk_append.call(null,b__11326,(function (){var first_col = f.call(null,y);
var last_col = (f.call(null,(y + (1))) - (1));
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__5480__auto__ = ((function (i__11325,n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,c__5478__auto__,size__5479__auto__,b__11326,s__11324__$2,temp__5804__auto__,vec__11309,u__$1,v__$1,c__$1,j,k){
return (function clojure$math$combinatorics$iter__11323_$_iter__11327(s__11328){
return (new cljs.core.LazySeq(null,((function (i__11325,n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,c__5478__auto__,size__5479__auto__,b__11326,s__11324__$2,temp__5804__auto__,vec__11309,u__$1,v__$1,c__$1,j,k){
return (function (){
var s__11328__$1 = s__11328;
while(true){
var temp__5804__auto____$1 = cljs.core.seq.call(null,s__11328__$1);
if(temp__5804__auto____$1){
var s__11328__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__11328__$2)){
var c__5478__auto____$1 = cljs.core.chunk_first.call(null,s__11328__$2);
var size__5479__auto____$1 = cljs.core.count.call(null,c__5478__auto____$1);
var b__11330 = cljs.core.chunk_buffer.call(null,size__5479__auto____$1);
if((function (){var i__11329 = (0);
while(true){
if((i__11329 < size__5479__auto____$1)){
var z = cljs.core._nth.call(null,c__5478__auto____$1,i__11329);
if(cljs.core.not_EQ_.call(null,v__$1.call(null,z),(0))){
cljs.core.chunk_append.call(null,b__11330,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c__$1.call(null,z),v__$1.call(null,z)], null));

var G__11433 = (i__11329 + (1));
i__11329 = G__11433;
continue;
} else {
var G__11434 = (i__11329 + (1));
i__11329 = G__11434;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11330),clojure$math$combinatorics$iter__11323_$_iter__11327.call(null,cljs.core.chunk_rest.call(null,s__11328__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11330),null);
}
} else {
var z = cljs.core.first.call(null,s__11328__$2);
if(cljs.core.not_EQ_.call(null,v__$1.call(null,z),(0))){
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c__$1.call(null,z),v__$1.call(null,z)], null),clojure$math$combinatorics$iter__11323_$_iter__11327.call(null,cljs.core.rest.call(null,s__11328__$2)));
} else {
var G__11435 = cljs.core.rest.call(null,s__11328__$2);
s__11328__$1 = G__11435;
continue;
}
}
} else {
return null;
}
break;
}
});})(i__11325,n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,c__5478__auto__,size__5479__auto__,b__11326,s__11324__$2,temp__5804__auto__,vec__11309,u__$1,v__$1,c__$1,j,k))
,null,null));
});})(i__11325,n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,c__5478__auto__,size__5479__auto__,b__11326,s__11324__$2,temp__5804__auto__,vec__11309,u__$1,v__$1,c__$1,j,k))
;
return iter__5480__auto__.call(null,cljs.core.range.call(null,first_col,(last_col + (1))));
})());
})());

var G__11436 = (i__11325 + (1));
i__11325 = G__11436;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11326),clojure$math$combinatorics$iter__11323.call(null,cljs.core.chunk_rest.call(null,s__11324__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11326),null);
}
} else {
var y = cljs.core.first.call(null,s__11324__$2);
return cljs.core.cons.call(null,(function (){var first_col = f.call(null,y);
var last_col = (f.call(null,(y + (1))) - (1));
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__5480__auto__ = ((function (n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,s__11324__$2,temp__5804__auto__,vec__11309,u__$1,v__$1,c__$1,j,k){
return (function clojure$math$combinatorics$iter__11323_$_iter__11369(s__11370){
return (new cljs.core.LazySeq(null,((function (n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,s__11324__$2,temp__5804__auto__,vec__11309,u__$1,v__$1,c__$1,j,k){
return (function (){
var s__11370__$1 = s__11370;
while(true){
var temp__5804__auto____$1 = cljs.core.seq.call(null,s__11370__$1);
if(temp__5804__auto____$1){
var s__11370__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__11370__$2)){
var c__5478__auto__ = cljs.core.chunk_first.call(null,s__11370__$2);
var size__5479__auto__ = cljs.core.count.call(null,c__5478__auto__);
var b__11372 = cljs.core.chunk_buffer.call(null,size__5479__auto__);
if((function (){var i__11371 = (0);
while(true){
if((i__11371 < size__5479__auto__)){
var z = cljs.core._nth.call(null,c__5478__auto__,i__11371);
if(cljs.core.not_EQ_.call(null,v__$1.call(null,z),(0))){
cljs.core.chunk_append.call(null,b__11372,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c__$1.call(null,z),v__$1.call(null,z)], null));

var G__11451 = (i__11371 + (1));
i__11371 = G__11451;
continue;
} else {
var G__11452 = (i__11371 + (1));
i__11371 = G__11452;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11372),clojure$math$combinatorics$iter__11323_$_iter__11369.call(null,cljs.core.chunk_rest.call(null,s__11370__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11372),null);
}
} else {
var z = cljs.core.first.call(null,s__11370__$2);
if(cljs.core.not_EQ_.call(null,v__$1.call(null,z),(0))){
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c__$1.call(null,z),v__$1.call(null,z)], null),clojure$math$combinatorics$iter__11323_$_iter__11369.call(null,cljs.core.rest.call(null,s__11370__$2)));
} else {
var G__11457 = cljs.core.rest.call(null,s__11370__$2);
s__11370__$1 = G__11457;
continue;
}
}
} else {
return null;
}
break;
}
});})(n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,s__11324__$2,temp__5804__auto__,vec__11309,u__$1,v__$1,c__$1,j,k))
,null,null));
});})(n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,s__11324__$2,temp__5804__auto__,vec__11309,u__$1,v__$1,c__$1,j,k))
;
return iter__5480__auto__.call(null,cljs.core.range.call(null,first_col,(last_col + (1))));
})());
})(),clojure$math$combinatorics$iter__11323.call(null,cljs.core.rest.call(null,s__11324__$2)));
}
} else {
return null;
}
break;
}
});})(n,m,f,c,u,v,a,b,l,r,s,vec__11309,u__$1,v__$1,c__$1,j,k))
,null,null));
});})(n,m,f,c,u,v,a,b,l,r,s,vec__11309,u__$1,v__$1,c__$1,j,k))
;
return iter__5480__auto__.call(null,cljs.core.range.call(null,(l + (1))));
})();
return cljs.core.cons.call(null,part,(new cljs.core.LazySeq(null,((function (n,m,f,c,u,v,a,b,l,r,s,part,vec__11309,u__$1,v__$1,c__$1,j,k){
return (function (){
return clojure.math.combinatorics.m5.call(null,n,m,f,c__$1,u__$1,v__$1,a,b,l,r,s);
});})(n,m,f,c,u,v,a,b,l,r,s,part,vec__11309,u__$1,v__$1,c__$1,j,k))
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
var G__11466 = (j - (1));
j = G__11466;
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
var diff_uv = (cljs.core.truth_(s)?cljs.core.apply.call(null,cljs.core._PLUS_,(function (){var iter__5480__auto__ = (function clojure$math$combinatorics$m5_$_iter__11388(s__11389){
return (new cljs.core.LazySeq(null,(function (){
var s__11389__$1 = s__11389;
while(true){
var temp__5804__auto__ = cljs.core.seq.call(null,s__11389__$1);
if(temp__5804__auto__){
var s__11389__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__11389__$2)){
var c__5478__auto__ = cljs.core.chunk_first.call(null,s__11389__$2);
var size__5479__auto__ = cljs.core.count.call(null,c__5478__auto__);
var b__11391 = cljs.core.chunk_buffer.call(null,size__5479__auto__);
if((function (){var i__11390 = (0);
while(true){
if((i__11390 < size__5479__auto__)){
var i = cljs.core._nth.call(null,c__5478__auto__,i__11390);
cljs.core.chunk_append.call(null,b__11391,(u.call(null,i) - v__$1.call(null,i)));

var G__11475 = (i__11390 + (1));
i__11390 = G__11475;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11391),clojure$math$combinatorics$m5_$_iter__11388.call(null,cljs.core.chunk_rest.call(null,s__11389__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11391),null);
}
} else {
var i = cljs.core.first.call(null,s__11389__$2);
return cljs.core.cons.call(null,(u.call(null,i) - v__$1.call(null,i)),clojure$math$combinatorics$m5_$_iter__11388.call(null,cljs.core.rest.call(null,s__11389__$2)));
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
var G__11488 = cljs.core.rest.call(null,ks);
var G__11489 = cljs.core.assoc.call(null,v__$2,k,u.call(null,k));
ks = G__11488;
v__$2 = G__11489;
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
var G__11494 = (k_1 - (1));
var G__11495 = cljs.core.assoc.call(null,v__$3,k_1,(0));
var G__11496 = (amount - vk);
k_1 = G__11494;
v__$3 = G__11495;
amount = G__11496;
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
var len__5726__auto___11515 = arguments.length;
var i__5727__auto___11516 = (0);
while(true){
if((i__5727__auto___11516 < len__5726__auto___11515)){
args__5732__auto__.push((arguments[i__5727__auto___11516]));

var G__11517 = (i__5727__auto___11516 + (1));
i__5727__auto___11516 = G__11517;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return clojure.math.combinatorics.partitions_M.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(clojure.math.combinatorics.partitions_M.cljs$core$IFn$_invoke$arity$variadic = (function (items,p__11449){
var map__11450 = p__11449;
var map__11450__$1 = cljs.core.__destructure_map.call(null,map__11450);
var from = cljs.core.get.call(null,map__11450__$1,new cljs.core.Keyword(null,"min","min",444991522));
var to = cljs.core.get.call(null,map__11450__$1,new cljs.core.Keyword(null,"max","max",61366548));
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
var start_multiset = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__5480__auto__ = (function clojure$math$combinatorics$iter__11462(s__11463){
return (new cljs.core.LazySeq(null,(function (){
var s__11463__$1 = s__11463;
while(true){
var temp__5804__auto__ = cljs.core.seq.call(null,s__11463__$1);
if(temp__5804__auto__){
var s__11463__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__11463__$2)){
var c__5478__auto__ = cljs.core.chunk_first.call(null,s__11463__$2);
var size__5479__auto__ = cljs.core.count.call(null,c__5478__auto__);
var b__11465 = cljs.core.chunk_buffer.call(null,size__5479__auto__);
if((function (){var i__11464 = (0);
while(true){
if((i__11464 < size__5479__auto__)){
var i = cljs.core._nth.call(null,c__5478__auto__,i__11464);
var j = (i + (1));
cljs.core.chunk_append.call(null,b__11465,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [j,freqs.call(null,ditems.call(null,i))], null));

var G__11532 = (i__11464 + (1));
i__11464 = G__11532;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11465),clojure$math$combinatorics$iter__11462.call(null,cljs.core.chunk_rest.call(null,s__11463__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11465),null);
}
} else {
var i = cljs.core.first.call(null,s__11463__$2);
var j = (i + (1));
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [j,freqs.call(null,ditems.call(null,i))], null),clojure$math$combinatorics$iter__11462.call(null,cljs.core.rest.call(null,s__11463__$2)));
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
var iter__5480__auto__ = (function clojure$math$combinatorics$iter__11471(s__11472){
return (new cljs.core.LazySeq(null,(function (){
var s__11472__$1 = s__11472;
while(true){
var temp__5804__auto__ = cljs.core.seq.call(null,s__11472__$1);
if(temp__5804__auto__){
var s__11472__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__11472__$2)){
var c__5478__auto__ = cljs.core.chunk_first.call(null,s__11472__$2);
var size__5479__auto__ = cljs.core.count.call(null,c__5478__auto__);
var b__11474 = cljs.core.chunk_buffer.call(null,size__5479__auto__);
if((function (){var i__11473 = (0);
while(true){
if((i__11473 < size__5479__auto__)){
var part = cljs.core._nth.call(null,c__5478__auto__,i__11473);
cljs.core.chunk_append.call(null,b__11474,(function (){var iter__5480__auto__ = ((function (i__11473,part,c__5478__auto__,size__5479__auto__,b__11474,s__11472__$2,temp__5804__auto__,start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__11450,map__11450__$1,from,to){
return (function clojure$math$combinatorics$iter__11471_$_iter__11476(s__11477){
return (new cljs.core.LazySeq(null,((function (i__11473,part,c__5478__auto__,size__5479__auto__,b__11474,s__11472__$2,temp__5804__auto__,start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__11450,map__11450__$1,from,to){
return (function (){
var s__11477__$1 = s__11477;
while(true){
var temp__5804__auto____$1 = cljs.core.seq.call(null,s__11477__$1);
if(temp__5804__auto____$1){
var s__11477__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__11477__$2)){
var c__5478__auto____$1 = cljs.core.chunk_first.call(null,s__11477__$2);
var size__5479__auto____$1 = cljs.core.count.call(null,c__5478__auto____$1);
var b__11479 = cljs.core.chunk_buffer.call(null,size__5479__auto____$1);
if((function (){var i__11478 = (0);
while(true){
if((i__11478 < size__5479__auto____$1)){
var multiset = cljs.core._nth.call(null,c__5478__auto____$1,i__11478);
cljs.core.chunk_append.call(null,b__11479,cljs.core.vec.call(null,clojure.math.combinatorics.mapjoin.call(null,((function (i__11478,i__11473,multiset,c__5478__auto____$1,size__5479__auto____$1,b__11479,s__11477__$2,temp__5804__auto____$1,part,c__5478__auto__,size__5479__auto__,b__11474,s__11472__$2,temp__5804__auto__,start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__11450,map__11450__$1,from,to){
return (function (p__11484){
var vec__11485 = p__11484;
var index = cljs.core.nth.call(null,vec__11485,(0),null);
var numtimes = cljs.core.nth.call(null,vec__11485,(1),null);
return cljs.core.repeat.call(null,numtimes,ditems.call(null,(index - (1))));
});})(i__11478,i__11473,multiset,c__5478__auto____$1,size__5479__auto____$1,b__11479,s__11477__$2,temp__5804__auto____$1,part,c__5478__auto__,size__5479__auto__,b__11474,s__11472__$2,temp__5804__auto__,start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__11450,map__11450__$1,from,to))
,multiset)));

var G__11537 = (i__11478 + (1));
i__11478 = G__11537;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11479),clojure$math$combinatorics$iter__11471_$_iter__11476.call(null,cljs.core.chunk_rest.call(null,s__11477__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11479),null);
}
} else {
var multiset = cljs.core.first.call(null,s__11477__$2);
return cljs.core.cons.call(null,cljs.core.vec.call(null,clojure.math.combinatorics.mapjoin.call(null,((function (i__11473,multiset,s__11477__$2,temp__5804__auto____$1,part,c__5478__auto__,size__5479__auto__,b__11474,s__11472__$2,temp__5804__auto__,start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__11450,map__11450__$1,from,to){
return (function (p__11490){
var vec__11491 = p__11490;
var index = cljs.core.nth.call(null,vec__11491,(0),null);
var numtimes = cljs.core.nth.call(null,vec__11491,(1),null);
return cljs.core.repeat.call(null,numtimes,ditems.call(null,(index - (1))));
});})(i__11473,multiset,s__11477__$2,temp__5804__auto____$1,part,c__5478__auto__,size__5479__auto__,b__11474,s__11472__$2,temp__5804__auto__,start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__11450,map__11450__$1,from,to))
,multiset)),clojure$math$combinatorics$iter__11471_$_iter__11476.call(null,cljs.core.rest.call(null,s__11477__$2)));
}
} else {
return null;
}
break;
}
});})(i__11473,part,c__5478__auto__,size__5479__auto__,b__11474,s__11472__$2,temp__5804__auto__,start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__11450,map__11450__$1,from,to))
,null,null));
});})(i__11473,part,c__5478__auto__,size__5479__auto__,b__11474,s__11472__$2,temp__5804__auto__,start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__11450,map__11450__$1,from,to))
;
return iter__5480__auto__.call(null,part);
})());

var G__11538 = (i__11473 + (1));
i__11473 = G__11538;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11474),clojure$math$combinatorics$iter__11471.call(null,cljs.core.chunk_rest.call(null,s__11472__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11474),null);
}
} else {
var part = cljs.core.first.call(null,s__11472__$2);
return cljs.core.cons.call(null,(function (){var iter__5480__auto__ = ((function (part,s__11472__$2,temp__5804__auto__,start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__11450,map__11450__$1,from,to){
return (function clojure$math$combinatorics$iter__11471_$_iter__11497(s__11498){
return (new cljs.core.LazySeq(null,(function (){
var s__11498__$1 = s__11498;
while(true){
var temp__5804__auto____$1 = cljs.core.seq.call(null,s__11498__$1);
if(temp__5804__auto____$1){
var s__11498__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__11498__$2)){
var c__5478__auto__ = cljs.core.chunk_first.call(null,s__11498__$2);
var size__5479__auto__ = cljs.core.count.call(null,c__5478__auto__);
var b__11500 = cljs.core.chunk_buffer.call(null,size__5479__auto__);
if((function (){var i__11499 = (0);
while(true){
if((i__11499 < size__5479__auto__)){
var multiset = cljs.core._nth.call(null,c__5478__auto__,i__11499);
cljs.core.chunk_append.call(null,b__11500,cljs.core.vec.call(null,clojure.math.combinatorics.mapjoin.call(null,((function (i__11499,multiset,c__5478__auto__,size__5479__auto__,b__11500,s__11498__$2,temp__5804__auto____$1,part,s__11472__$2,temp__5804__auto__,start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__11450,map__11450__$1,from,to){
return (function (p__11501){
var vec__11502 = p__11501;
var index = cljs.core.nth.call(null,vec__11502,(0),null);
var numtimes = cljs.core.nth.call(null,vec__11502,(1),null);
return cljs.core.repeat.call(null,numtimes,ditems.call(null,(index - (1))));
});})(i__11499,multiset,c__5478__auto__,size__5479__auto__,b__11500,s__11498__$2,temp__5804__auto____$1,part,s__11472__$2,temp__5804__auto__,start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__11450,map__11450__$1,from,to))
,multiset)));

var G__11549 = (i__11499 + (1));
i__11499 = G__11549;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11500),clojure$math$combinatorics$iter__11471_$_iter__11497.call(null,cljs.core.chunk_rest.call(null,s__11498__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11500),null);
}
} else {
var multiset = cljs.core.first.call(null,s__11498__$2);
return cljs.core.cons.call(null,cljs.core.vec.call(null,clojure.math.combinatorics.mapjoin.call(null,((function (multiset,s__11498__$2,temp__5804__auto____$1,part,s__11472__$2,temp__5804__auto__,start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__11450,map__11450__$1,from,to){
return (function (p__11505){
var vec__11506 = p__11505;
var index = cljs.core.nth.call(null,vec__11506,(0),null);
var numtimes = cljs.core.nth.call(null,vec__11506,(1),null);
return cljs.core.repeat.call(null,numtimes,ditems.call(null,(index - (1))));
});})(multiset,s__11498__$2,temp__5804__auto____$1,part,s__11472__$2,temp__5804__auto__,start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__11450,map__11450__$1,from,to))
,multiset)),clojure$math$combinatorics$iter__11471_$_iter__11497.call(null,cljs.core.rest.call(null,s__11498__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(part,s__11472__$2,temp__5804__auto__,start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__11450,map__11450__$1,from,to))
;
return iter__5480__auto__.call(null,part);
})(),clojure$math$combinatorics$iter__11471.call(null,cljs.core.rest.call(null,s__11472__$2)));
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
(clojure.math.combinatorics.partitions_M.cljs$lang$applyTo = (function (seq11437){
var G__11438 = cljs.core.first.call(null,seq11437);
var seq11437__$1 = cljs.core.next.call(null,seq11437);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__11438,seq11437__$1);
}));

/**
 * All the lexicographic distinct partitions of items.
 *  Optionally pass in :min and/or :max to specify inclusive bounds on the number of parts the items can be split into.
 */
clojure.math.combinatorics.partitions = (function clojure$math$combinatorics$partitions(var_args){
var args__5732__auto__ = [];
var len__5726__auto___11554 = arguments.length;
var i__5727__auto___11555 = (0);
while(true){
if((i__5727__auto___11555 < len__5726__auto___11554)){
args__5732__auto__.push((arguments[i__5727__auto___11555]));

var G__11556 = (i__5727__auto___11555 + (1));
i__5727__auto___11555 = G__11556;
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
(clojure.math.combinatorics.partitions.cljs$lang$applyTo = (function (seq11513){
var G__11514 = cljs.core.first.call(null,seq11513);
var seq11513__$1 = cljs.core.next.call(null,seq11513);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__11514,seq11513__$1);
}));


//# sourceMappingURL=combinatorics.js.map
