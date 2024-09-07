// Compiled by ClojureScript 1.11.132 {:optimizations :none}
goog.provide('speclj.core');
goog.require('cljs.core');
goog.require('clojure.data');
goog.require('clojure.string');
goog.require('speclj.components');
goog.require('speclj.config');
goog.require('speclj.platform');
goog.require('speclj.reporting');
goog.require('speclj.results');
goog.require('speclj.running');
goog.require('speclj.stub');
goog.require('speclj.tags');
goog.require('speclj.report.documentation');
goog.require('speclj.report.progress');
goog.require('speclj.report.silent');
goog.require('speclj.run.standard');
var ret__5781__auto___17109 = (function (){
speclj.core._new_exception = (function speclj$core$_new_exception(var_args){
var G__17101 = arguments.length;
switch (G__17101) {
case 2:
return speclj.core._new_exception.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return speclj.core._new_exception.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return speclj.core._new_exception.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (2)))].join('')));

}
});

(speclj.core._new_exception.cljs$core$IFn$_invoke$arity$2 = (function (_AMPERSAND_form,_AMPERSAND_env){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","if-cljs","speclj.core/if-cljs",873977502,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("js","Error.","js/Error.",750655924,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"java.lang.Exception.","java.lang.Exception.",-863079624,null),null,(1),null))))),null,(1),null)))));
}));

(speclj.core._new_exception.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,message){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","if-cljs","speclj.core/if-cljs",873977502,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("js","Error.","js/Error.",750655924,null),null,(1),null)),(new cljs.core.List(null,message,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"java.lang.Exception.","java.lang.Exception.",-863079624,null),null,(1),null)),(new cljs.core.List(null,message,null,(1),null))))),null,(1),null)))));
}));

(speclj.core._new_exception.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,message,cause){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","if-cljs","speclj.core/if-cljs",873977502,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("js","Error.","js/Error.",750655924,null),null,(1),null)),(new cljs.core.List(null,message,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"java.lang.Exception.","java.lang.Exception.",-863079624,null),null,(1),null)),(new cljs.core.List(null,message,null,(1),null)),(new cljs.core.List(null,cause,null,(1),null))))),null,(1),null)))));
}));

(speclj.core._new_exception.cljs$lang$maxFixedArity = 4);

return null;
})()
;
(speclj.core._new_exception.cljs$lang$macro = true);

var ret__5781__auto___17119 = (function (){
speclj.core._new_throwable = (function speclj$core$_new_throwable(var_args){
var G__17113 = arguments.length;
switch (G__17113) {
case 2:
return speclj.core._new_throwable.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return speclj.core._new_throwable.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (2)))].join('')));

}
});

(speclj.core._new_throwable.cljs$core$IFn$_invoke$arity$2 = (function (_AMPERSAND_form,_AMPERSAND_env){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","if-cljs","speclj.core/if-cljs",873977502,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("js","Object.","js/Object.",-1306928840,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"java.lang.Throwable.","java.lang.Throwable.",1508443242,null),null,(1),null))))),null,(1),null)))));
}));

(speclj.core._new_throwable.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,message){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","if-cljs","speclj.core/if-cljs",873977502,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("js","Object.","js/Object.",-1306928840,null),null,(1),null)),(new cljs.core.List(null,message,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"java.lang.Throwable.","java.lang.Throwable.",1508443242,null),null,(1),null)),(new cljs.core.List(null,message,null,(1),null))))),null,(1),null)))));
}));

(speclj.core._new_throwable.cljs$lang$maxFixedArity = 3);

return null;
})()
;
(speclj.core._new_throwable.cljs$lang$macro = true);

var ret__5781__auto___17121 = speclj.core._new_failure = (function speclj$core$_new_failure(_AMPERSAND_form,_AMPERSAND_env,message){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"speclj.platform.SpecFailure.","speclj.platform.SpecFailure.",610897916,null),null,(1),null)),(new cljs.core.List(null,message,null,(1),null)))));
});
(speclj.core._new_failure.cljs$lang$macro = true);

var ret__5781__auto___17123 = speclj.core._new_pending = (function speclj$core$_new_pending(_AMPERSAND_form,_AMPERSAND_env,message){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"speclj.platform.SpecPending.","speclj.platform.SpecPending.",-1205652622,null),null,(1),null)),(new cljs.core.List(null,message,null,(1),null)))));
});
(speclj.core._new_pending.cljs$lang$macro = true);

var ret__5781__auto___17132 = (function (){
speclj.core.help_it = (function speclj$core$help_it(var_args){
var args__5732__auto__ = [];
var len__5726__auto___17135 = arguments.length;
var i__5727__auto___17136 = (0);
while(true){
if((i__5727__auto___17136 < len__5726__auto___17135)){
args__5732__auto__.push((arguments[i__5727__auto___17136]));

var G__17137 = (i__5727__auto___17136 + (1));
i__5727__auto___17136 = G__17137;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((4) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((4)),(0),null)):null);
return speclj.core.help_it.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__5733__auto__);
});

(speclj.core.help_it.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,name,focused_QMARK_,body){
if(cljs.core.seq.call(null,body)){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.components","new-characteristic","speclj.components/new-characteristic",-1463693127,null),null,(1),null)),(new cljs.core.List(null,name,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null)))),null,(1),null)),body))),null,(1),null)),(new cljs.core.List(null,focused_QMARK_,null,(1),null)))));
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.components","new-characteristic","speclj.components/new-characteristic",-1463693127,null),null,(1),null)),(new cljs.core.List(null,name,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null)))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","pending","speclj.core/pending",-571433532,null),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,focused_QMARK_,null,(1),null)))));
}
}));

(speclj.core.help_it.cljs$lang$maxFixedArity = (4));

/** @this {Function} */
(speclj.core.help_it.cljs$lang$applyTo = (function (seq17122){
var G__17124 = cljs.core.first.call(null,seq17122);
var seq17122__$1 = cljs.core.next.call(null,seq17122);
var G__17125 = cljs.core.first.call(null,seq17122__$1);
var seq17122__$2 = cljs.core.next.call(null,seq17122__$1);
var G__17126 = cljs.core.first.call(null,seq17122__$2);
var seq17122__$3 = cljs.core.next.call(null,seq17122__$2);
var G__17127 = cljs.core.first.call(null,seq17122__$3);
var seq17122__$4 = cljs.core.next.call(null,seq17122__$3);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__17124,G__17125,G__17126,G__17127,seq17122__$4);
}));

return null;
})()
;
(speclj.core.help_it.cljs$lang$macro = true);

var ret__5781__auto___17155 = (function (){
speclj.core.help_describe = (function speclj$core$help_describe(var_args){
var args__5732__auto__ = [];
var len__5726__auto___17160 = arguments.length;
var i__5727__auto___17161 = (0);
while(true){
if((i__5727__auto___17161 < len__5726__auto___17160)){
args__5732__auto__.push((arguments[i__5727__auto___17161]));

var G__17162 = (i__5727__auto___17161 + (1));
i__5727__auto___17161 = G__17162;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((4) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((4)),(0),null)):null);
return speclj.core.help_describe.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__5733__auto__);
});

(speclj.core.help_describe.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,name,focused_QMARK_,components){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"description__17133__auto__","description__17133__auto__",836259364,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.components","new-description","speclj.components/new-description",1764687593,null),null,(1),null)),(new cljs.core.List(null,name,null,(1),null)),(new cljs.core.List(null,focused_QMARK_,null,(1),null)),(new cljs.core.List(null,cljs.core.name.call(null,cljs.core._STAR_ns_STAR_.name()),null,(1),null))))),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","binding","cljs.core/binding",2050379843,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.config","*parent-description*","speclj.config/*parent-description*",923760011,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"description__17133__auto__","description__17133__auto__",836259364,null),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","doseq","cljs.core/doseq",-169320766,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"component__17134__auto__","component__17134__auto__",-922281753,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","vector","cljs.core/vector",720641726,null),null,(1),null)),components))),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.components","install","speclj.components/install",-280361868,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"component__17134__auto__","component__17134__auto__",-922281753,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"description__17133__auto__","description__17133__auto__",836259364,null),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","when-not","cljs.core/when-not",-556141047,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","if-cljs","speclj.core/if-cljs",873977502,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("speclj.config","*parent-description*","speclj.config/*parent-description*",923760011,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","bound?","speclj.core/bound?",-726786538,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"var","var",870848730,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("speclj.config","*parent-description*","speclj.config/*parent-description*",923760011,null),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.running","submit-description","speclj.running/submit-description",788083680,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.config","active-runner","speclj.config/active-runner",982927849,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"description__17133__auto__","description__17133__auto__",836259364,null),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"description__17133__auto__","description__17133__auto__",836259364,null),null,(1),null)))));
}));

(speclj.core.help_describe.cljs$lang$maxFixedArity = (4));

/** @this {Function} */
(speclj.core.help_describe.cljs$lang$applyTo = (function (seq17138){
var G__17139 = cljs.core.first.call(null,seq17138);
var seq17138__$1 = cljs.core.next.call(null,seq17138);
var G__17140 = cljs.core.first.call(null,seq17138__$1);
var seq17138__$2 = cljs.core.next.call(null,seq17138__$1);
var G__17141 = cljs.core.first.call(null,seq17138__$2);
var seq17138__$3 = cljs.core.next.call(null,seq17138__$2);
var G__17142 = cljs.core.first.call(null,seq17138__$3);
var seq17138__$4 = cljs.core.next.call(null,seq17138__$3);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__17139,G__17140,G__17141,G__17142,seq17138__$4);
}));

return null;
})()
;
(speclj.core.help_describe.cljs$lang$macro = true);

var ret__5781__auto___17168 = (function (){
/**
 * body => any forms, but should contain at least one assertion (should)
 * 
 *   Declares a new characteristic (example in rspec).
 */
speclj.core.it = (function speclj$core$it(var_args){
var args__5732__auto__ = [];
var len__5726__auto___17169 = arguments.length;
var i__5727__auto___17170 = (0);
while(true){
if((i__5727__auto___17170 < len__5726__auto___17169)){
args__5732__auto__.push((arguments[i__5727__auto___17170]));

var G__17171 = (i__5727__auto___17170 + (1));
i__5727__auto___17170 = G__17171;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((3) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((3)),(0),null)):null);
return speclj.core.it.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5733__auto__);
});

(speclj.core.it.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,name,body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","help-it","speclj.core/help-it",944489893,null),null,(1),null)),(new cljs.core.List(null,name,null,(1),null)),(new cljs.core.List(null,false,null,(1),null)),body)));
}));

(speclj.core.it.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(speclj.core.it.cljs$lang$applyTo = (function (seq17156){
var G__17157 = cljs.core.first.call(null,seq17156);
var seq17156__$1 = cljs.core.next.call(null,seq17156);
var G__17158 = cljs.core.first.call(null,seq17156__$1);
var seq17156__$2 = cljs.core.next.call(null,seq17156__$1);
var G__17159 = cljs.core.first.call(null,seq17156__$2);
var seq17156__$3 = cljs.core.next.call(null,seq17156__$2);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__17157,G__17158,G__17159,seq17156__$3);
}));

return null;
})()
;
(speclj.core.it.cljs$lang$macro = true);

var ret__5781__auto___17176 = (function (){
/**
 * Syntactic shortcut to make the characteristic pending.
 */
speclj.core.xit = (function speclj$core$xit(var_args){
var args__5732__auto__ = [];
var len__5726__auto___17177 = arguments.length;
var i__5727__auto___17179 = (0);
while(true){
if((i__5727__auto___17179 < len__5726__auto___17177)){
args__5732__auto__.push((arguments[i__5727__auto___17179]));

var G__17183 = (i__5727__auto___17179 + (1));
i__5727__auto___17179 = G__17183;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((3) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((3)),(0),null)):null);
return speclj.core.xit.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5733__auto__);
});

(speclj.core.xit.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,name,body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","it","speclj.core/it",396347491,null),null,(1),null)),(new cljs.core.List(null,name,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","pending","speclj.core/pending",-571433532,null),null,(1),null))))),null,(1),null)),body)));
}));

(speclj.core.xit.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(speclj.core.xit.cljs$lang$applyTo = (function (seq17164){
var G__17165 = cljs.core.first.call(null,seq17164);
var seq17164__$1 = cljs.core.next.call(null,seq17164);
var G__17166 = cljs.core.first.call(null,seq17164__$1);
var seq17164__$2 = cljs.core.next.call(null,seq17164__$1);
var G__17167 = cljs.core.first.call(null,seq17164__$2);
var seq17164__$3 = cljs.core.next.call(null,seq17164__$2);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__17165,G__17166,G__17167,seq17164__$3);
}));

return null;
})()
;
(speclj.core.xit.cljs$lang$macro = true);

var ret__5781__auto___17184 = (function (){
/**
 * Same as 'it', but it is meant to facilitate temporary debugging.
 *   Characteristics defined with this macro will be executed along with any
 *   other characteristics thus defined, but all other characteristic defined
 *   with 'it' will be ignored.
 */
speclj.core.focus_it = (function speclj$core$focus_it(var_args){
var args__5732__auto__ = [];
var len__5726__auto___17186 = arguments.length;
var i__5727__auto___17187 = (0);
while(true){
if((i__5727__auto___17187 < len__5726__auto___17186)){
args__5732__auto__.push((arguments[i__5727__auto___17187]));

var G__17192 = (i__5727__auto___17187 + (1));
i__5727__auto___17187 = G__17192;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((3) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((3)),(0),null)):null);
return speclj.core.focus_it.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5733__auto__);
});

(speclj.core.focus_it.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,name,body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","help-it","speclj.core/help-it",944489893,null),null,(1),null)),(new cljs.core.List(null,name,null,(1),null)),(new cljs.core.List(null,true,null,(1),null)),body)));
}));

(speclj.core.focus_it.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(speclj.core.focus_it.cljs$lang$applyTo = (function (seq17178){
var G__17180 = cljs.core.first.call(null,seq17178);
var seq17178__$1 = cljs.core.next.call(null,seq17178);
var G__17181 = cljs.core.first.call(null,seq17178__$1);
var seq17178__$2 = cljs.core.next.call(null,seq17178__$1);
var G__17182 = cljs.core.first.call(null,seq17178__$2);
var seq17178__$3 = cljs.core.next.call(null,seq17178__$2);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__17180,G__17181,G__17182,seq17178__$3);
}));

return null;
})()
;
(speclj.core.focus_it.cljs$lang$macro = true);

var ret__5781__auto___17200 = (function (){
speclj.core.when_not_bound = (function speclj$core$when_not_bound(var_args){
var args__5732__auto__ = [];
var len__5726__auto___17205 = arguments.length;
var i__5727__auto___17206 = (0);
while(true){
if((i__5727__auto___17206 < len__5726__auto___17205)){
args__5732__auto__.push((arguments[i__5727__auto___17206]));

var G__17211 = (i__5727__auto___17206 + (1));
i__5727__auto___17206 = G__17211;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((3) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((3)),(0),null)):null);
return speclj.core.when_not_bound.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5733__auto__);
});

(speclj.core.when_not_bound.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,name,body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","if-cljs","speclj.core/if-cljs",873977502,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","when-not","cljs.core/when-not",-556141047,null),null,(1),null)),(new cljs.core.List(null,name,null,(1),null)),body))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","when-not","cljs.core/when-not",-556141047,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","bound?","speclj.core/bound?",-726786538,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","find-var","speclj.core/find-var",1418073279,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,name,null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)),body))),null,(1),null)))));
}));

(speclj.core.when_not_bound.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(speclj.core.when_not_bound.cljs$lang$applyTo = (function (seq17188){
var G__17189 = cljs.core.first.call(null,seq17188);
var seq17188__$1 = cljs.core.next.call(null,seq17188);
var G__17190 = cljs.core.first.call(null,seq17188__$1);
var seq17188__$2 = cljs.core.next.call(null,seq17188__$1);
var G__17191 = cljs.core.first.call(null,seq17188__$2);
var seq17188__$3 = cljs.core.next.call(null,seq17188__$2);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__17189,G__17190,G__17191,seq17188__$3);
}));

return null;
})()
;
(speclj.core.when_not_bound.cljs$lang$macro = true);

var ret__5781__auto___17213 = (function (){
/**
 * body => & spec-components
 * 
 *   Declares a new spec.  The body can contain any forms that evaluate to spec components (it, before, after, with ...).
 */
speclj.core.describe = (function speclj$core$describe(var_args){
var args__5732__auto__ = [];
var len__5726__auto___17214 = arguments.length;
var i__5727__auto___17219 = (0);
while(true){
if((i__5727__auto___17219 < len__5726__auto___17214)){
args__5732__auto__.push((arguments[i__5727__auto___17219]));

var G__17220 = (i__5727__auto___17219 + (1));
i__5727__auto___17219 = G__17220;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((3) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((3)),(0),null)):null);
return speclj.core.describe.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5733__auto__);
});

(speclj.core.describe.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,name,components){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","help-describe","speclj.core/help-describe",-589196932,null),null,(1),null)),(new cljs.core.List(null,name,null,(1),null)),(new cljs.core.List(null,false,null,(1),null)),components)));
}));

(speclj.core.describe.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(speclj.core.describe.cljs$lang$applyTo = (function (seq17207){
var G__17208 = cljs.core.first.call(null,seq17207);
var seq17207__$1 = cljs.core.next.call(null,seq17207);
var G__17209 = cljs.core.first.call(null,seq17207__$1);
var seq17207__$2 = cljs.core.next.call(null,seq17207__$1);
var G__17210 = cljs.core.first.call(null,seq17207__$2);
var seq17207__$3 = cljs.core.next.call(null,seq17207__$2);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__17208,G__17209,G__17210,seq17207__$3);
}));

return null;
})()
;
(speclj.core.describe.cljs$lang$macro = true);

var ret__5781__auto___17221 = (function (){
/**
 * Same as 'describe', but it is meant to facilitate temporary debugging.
 * Components defined with this macro will be fully executed along with any
 * other components thus defined, but all other sibling components defined
 * with 'describe' will be ignored.
 */
speclj.core.focus_describe = (function speclj$core$focus_describe(var_args){
var args__5732__auto__ = [];
var len__5726__auto___17222 = arguments.length;
var i__5727__auto___17224 = (0);
while(true){
if((i__5727__auto___17224 < len__5726__auto___17222)){
args__5732__auto__.push((arguments[i__5727__auto___17224]));

var G__17228 = (i__5727__auto___17224 + (1));
i__5727__auto___17224 = G__17228;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((3) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((3)),(0),null)):null);
return speclj.core.focus_describe.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5733__auto__);
});

(speclj.core.focus_describe.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,name,components){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","help-describe","speclj.core/help-describe",-589196932,null),null,(1),null)),(new cljs.core.List(null,name,null,(1),null)),(new cljs.core.List(null,true,null,(1),null)),components)));
}));

(speclj.core.focus_describe.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(speclj.core.focus_describe.cljs$lang$applyTo = (function (seq17215){
var G__17216 = cljs.core.first.call(null,seq17215);
var seq17215__$1 = cljs.core.next.call(null,seq17215);
var G__17217 = cljs.core.first.call(null,seq17215__$1);
var seq17215__$2 = cljs.core.next.call(null,seq17215__$1);
var G__17218 = cljs.core.first.call(null,seq17215__$2);
var seq17215__$3 = cljs.core.next.call(null,seq17215__$2);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__17216,G__17217,G__17218,seq17215__$3);
}));

return null;
})()
;
(speclj.core.focus_describe.cljs$lang$macro = true);

var ret__5781__auto___17233 = (function (){
/**
 * Same as describe, but should be used to nest testing contexts inside the outer describe.
 *   Contexts can be nested any number of times.
 */
speclj.core.context = (function speclj$core$context(var_args){
var args__5732__auto__ = [];
var len__5726__auto___17235 = arguments.length;
var i__5727__auto___17238 = (0);
while(true){
if((i__5727__auto___17238 < len__5726__auto___17235)){
args__5732__auto__.push((arguments[i__5727__auto___17238]));

var G__17240 = (i__5727__auto___17238 + (1));
i__5727__auto___17238 = G__17240;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((3) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((3)),(0),null)):null);
return speclj.core.context.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5733__auto__);
});

(speclj.core.context.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,name,components){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","describe","speclj.core/describe",-925284183,null),null,(1),null)),(new cljs.core.List(null,name,null,(1),null)),components)));
}));

(speclj.core.context.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(speclj.core.context.cljs$lang$applyTo = (function (seq17223){
var G__17225 = cljs.core.first.call(null,seq17223);
var seq17223__$1 = cljs.core.next.call(null,seq17223);
var G__17226 = cljs.core.first.call(null,seq17223__$1);
var seq17223__$2 = cljs.core.next.call(null,seq17223__$1);
var G__17227 = cljs.core.first.call(null,seq17223__$2);
var seq17223__$3 = cljs.core.next.call(null,seq17223__$2);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__17225,G__17226,G__17227,seq17223__$3);
}));

return null;
})()
;
(speclj.core.context.cljs$lang$macro = true);

var ret__5781__auto___17242 = (function (){
/**
 * Same as 'context', but it is meant to facilitate temporary debugging.
 * Components defined with this macro will be fully executed along with any
 * other components thus defined, but all other sibling components defined
 * with 'context' will be ignored.
 */
speclj.core.focus_context = (function speclj$core$focus_context(var_args){
var args__5732__auto__ = [];
var len__5726__auto___17243 = arguments.length;
var i__5727__auto___17244 = (0);
while(true){
if((i__5727__auto___17244 < len__5726__auto___17243)){
args__5732__auto__.push((arguments[i__5727__auto___17244]));

var G__17248 = (i__5727__auto___17244 + (1));
i__5727__auto___17244 = G__17248;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((3) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((3)),(0),null)):null);
return speclj.core.focus_context.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5733__auto__);
});

(speclj.core.focus_context.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,name,components){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","focus-describe","speclj.core/focus-describe",-1186168696,null),null,(1),null)),(new cljs.core.List(null,name,null,(1),null)),components)));
}));

(speclj.core.focus_context.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(speclj.core.focus_context.cljs$lang$applyTo = (function (seq17234){
var G__17236 = cljs.core.first.call(null,seq17234);
var seq17234__$1 = cljs.core.next.call(null,seq17234);
var G__17237 = cljs.core.first.call(null,seq17234__$1);
var seq17234__$2 = cljs.core.next.call(null,seq17234__$1);
var G__17239 = cljs.core.first.call(null,seq17234__$2);
var seq17234__$3 = cljs.core.next.call(null,seq17234__$2);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__17236,G__17237,G__17239,seq17234__$3);
}));

return null;
})()
;
(speclj.core.focus_context.cljs$lang$macro = true);

var ret__5781__auto___17255 = (function (){
/**
 * Declares a function that is invoked before each characteristic in the containing describe scope is evaluated. The body
 *   may consist of any forms, presumably ones that perform side effects.
 */
speclj.core.before = (function speclj$core$before(var_args){
var args__5732__auto__ = [];
var len__5726__auto___17256 = arguments.length;
var i__5727__auto___17257 = (0);
while(true){
if((i__5727__auto___17257 < len__5726__auto___17256)){
args__5732__auto__.push((arguments[i__5727__auto___17257]));

var G__17260 = (i__5727__auto___17257 + (1));
i__5727__auto___17257 = G__17260;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((2) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((2)),(0),null)):null);
return speclj.core.before.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5733__auto__);
});

(speclj.core.before.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.components","new-before","speclj.components/new-before",-1748544967,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null)))),null,(1),null)),body))),null,(1),null)))));
}));

(speclj.core.before.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(speclj.core.before.cljs$lang$applyTo = (function (seq17245){
var G__17246 = cljs.core.first.call(null,seq17245);
var seq17245__$1 = cljs.core.next.call(null,seq17245);
var G__17247 = cljs.core.first.call(null,seq17245__$1);
var seq17245__$2 = cljs.core.next.call(null,seq17245__$1);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__17246,G__17247,seq17245__$2);
}));

return null;
})()
;
(speclj.core.before.cljs$lang$macro = true);

var ret__5781__auto___17268 = (function (){
/**
 * Declares a function that is invoked after each characteristic in the containing describe scope is evaluated. The body
 *   may consist of any forms, presumably ones that perform side effects.
 */
speclj.core.after = (function speclj$core$after(var_args){
var args__5732__auto__ = [];
var len__5726__auto___17269 = arguments.length;
var i__5727__auto___17270 = (0);
while(true){
if((i__5727__auto___17270 < len__5726__auto___17269)){
args__5732__auto__.push((arguments[i__5727__auto___17270]));

var G__17275 = (i__5727__auto___17270 + (1));
i__5727__auto___17270 = G__17275;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((2) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((2)),(0),null)):null);
return speclj.core.after.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5733__auto__);
});

(speclj.core.after.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.components","new-after","speclj.components/new-after",-755884805,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null)))),null,(1),null)),body))),null,(1),null)))));
}));

(speclj.core.after.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(speclj.core.after.cljs$lang$applyTo = (function (seq17259){
var G__17261 = cljs.core.first.call(null,seq17259);
var seq17259__$1 = cljs.core.next.call(null,seq17259);
var G__17262 = cljs.core.first.call(null,seq17259__$1);
var seq17259__$2 = cljs.core.next.call(null,seq17259__$1);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__17261,G__17262,seq17259__$2);
}));

return null;
})()
;
(speclj.core.after.cljs$lang$macro = true);

var ret__5781__auto___17276 = (function (){
/**
 * Declares a function that will be invoked around each characteristic of the containing describe scope.
 *   The characteristic will be passed in and the around function is responsible for invoking it.
 * 
 *   (around [it] (binding [*out* new-out] (it)))
 * 
 *   Note that if you have cleanup that must run, use a 'finally' block:
 * 
 *   (around [it] (try (it) (finally :clean-up)))
 */
speclj.core.around = (function speclj$core$around(var_args){
var args__5732__auto__ = [];
var len__5726__auto___17278 = arguments.length;
var i__5727__auto___17279 = (0);
while(true){
if((i__5727__auto___17279 < len__5726__auto___17278)){
args__5732__auto__.push((arguments[i__5727__auto___17279]));

var G__17280 = (i__5727__auto___17279 + (1));
i__5727__auto___17279 = G__17280;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((3) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((3)),(0),null)):null);
return speclj.core.around.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5733__auto__);
});

(speclj.core.around.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,binding,body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.components","new-around","speclj.components/new-around",1527117948,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),(new cljs.core.List(null,binding,null,(1),null)),body))),null,(1),null)))));
}));

(speclj.core.around.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(speclj.core.around.cljs$lang$applyTo = (function (seq17271){
var G__17272 = cljs.core.first.call(null,seq17271);
var seq17271__$1 = cljs.core.next.call(null,seq17271);
var G__17273 = cljs.core.first.call(null,seq17271__$1);
var seq17271__$2 = cljs.core.next.call(null,seq17271__$1);
var G__17274 = cljs.core.first.call(null,seq17271__$2);
var seq17271__$3 = cljs.core.next.call(null,seq17271__$2);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__17272,G__17273,G__17274,seq17271__$3);
}));

return null;
})()
;
(speclj.core.around.cljs$lang$macro = true);

var ret__5781__auto___17284 = /**
 * Redefines the bindings around each characteristic of the containing describe scope.
 */
speclj.core.redefs_around = (function speclj$core$redefs_around(_AMPERSAND_form,_AMPERSAND_env,bindings){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","around","speclj.core/around",649826642,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"it__17277__auto__","it__17277__auto__",-763494752,null),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","with-redefs","cljs.core/with-redefs",1134293954,null),null,(1),null)),(new cljs.core.List(null,bindings,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"it__17277__auto__","it__17277__auto__",-763494752,null),null,(1),null))))),null,(1),null))))),null,(1),null)))));
});
(speclj.core.redefs_around.cljs$lang$macro = true);

var ret__5781__auto___17289 = (function (){
/**
 * Declares a function that is invoked once before any characteristic in the containing describe scope is evaluated. The
 *   body may consist of any forms, presumably ones that perform side effects.
 */
speclj.core.before_all = (function speclj$core$before_all(var_args){
var args__5732__auto__ = [];
var len__5726__auto___17290 = arguments.length;
var i__5727__auto___17292 = (0);
while(true){
if((i__5727__auto___17292 < len__5726__auto___17290)){
args__5732__auto__.push((arguments[i__5727__auto___17292]));

var G__17295 = (i__5727__auto___17292 + (1));
i__5727__auto___17292 = G__17295;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((2) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((2)),(0),null)):null);
return speclj.core.before_all.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5733__auto__);
});

(speclj.core.before_all.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.components","new-before-all","speclj.components/new-before-all",879702550,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null)))),null,(1),null)),body))),null,(1),null)))));
}));

(speclj.core.before_all.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(speclj.core.before_all.cljs$lang$applyTo = (function (seq17281){
var G__17282 = cljs.core.first.call(null,seq17281);
var seq17281__$1 = cljs.core.next.call(null,seq17281);
var G__17283 = cljs.core.first.call(null,seq17281__$1);
var seq17281__$2 = cljs.core.next.call(null,seq17281__$1);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__17282,G__17283,seq17281__$2);
}));

return null;
})()
;
(speclj.core.before_all.cljs$lang$macro = true);

var ret__5781__auto___17297 = (function (){
/**
 * Declares a function that is invoked once after all the characteristics in the containing describe scope have been
 *   evaluated.  The body may consist of any forms, presumably ones that perform side effects.
 */
speclj.core.after_all = (function speclj$core$after_all(var_args){
var args__5732__auto__ = [];
var len__5726__auto___17298 = arguments.length;
var i__5727__auto___17300 = (0);
while(true){
if((i__5727__auto___17300 < len__5726__auto___17298)){
args__5732__auto__.push((arguments[i__5727__auto___17300]));

var G__17304 = (i__5727__auto___17300 + (1));
i__5727__auto___17300 = G__17304;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((2) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((2)),(0),null)):null);
return speclj.core.after_all.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5733__auto__);
});

(speclj.core.after_all.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.components","new-after-all","speclj.components/new-after-all",1608037396,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null)))),null,(1),null)),body))),null,(1),null)))));
}));

(speclj.core.after_all.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(speclj.core.after_all.cljs$lang$applyTo = (function (seq17291){
var G__17293 = cljs.core.first.call(null,seq17291);
var seq17291__$1 = cljs.core.next.call(null,seq17291);
var G__17294 = cljs.core.first.call(null,seq17291__$1);
var seq17291__$2 = cljs.core.next.call(null,seq17291__$1);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__17293,G__17294,seq17291__$2);
}));

return null;
})()
;
(speclj.core.after_all.cljs$lang$macro = true);

var ret__5781__auto___17308 = (function (){
/**
 * Declares a function that is invoked once around all characteristics of the containing describe scope.
 */
speclj.core.around_all = (function speclj$core$around_all(var_args){
var args__5732__auto__ = [];
var len__5726__auto___17309 = arguments.length;
var i__5727__auto___17311 = (0);
while(true){
if((i__5727__auto___17311 < len__5726__auto___17309)){
args__5732__auto__.push((arguments[i__5727__auto___17311]));

var G__17312 = (i__5727__auto___17311 + (1));
i__5727__auto___17311 = G__17312;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((3) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((3)),(0),null)):null);
return speclj.core.around_all.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5733__auto__);
});

(speclj.core.around_all.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,context,body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.components","new-around-all","speclj.components/new-around-all",1113944722,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),(new cljs.core.List(null,context,null,(1),null)),body))),null,(1),null)))));
}));

(speclj.core.around_all.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(speclj.core.around_all.cljs$lang$applyTo = (function (seq17299){
var G__17301 = cljs.core.first.call(null,seq17299);
var seq17299__$1 = cljs.core.next.call(null,seq17299);
var G__17302 = cljs.core.first.call(null,seq17299__$1);
var seq17299__$2 = cljs.core.next.call(null,seq17299__$1);
var G__17303 = cljs.core.first.call(null,seq17299__$2);
var seq17299__$3 = cljs.core.next.call(null,seq17299__$2);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__17301,G__17302,G__17303,seq17299__$3);
}));

return null;
})()
;
(speclj.core.around_all.cljs$lang$macro = true);

speclj.core._make_with = (function speclj$core$_make_with(name,body,ctor,bang_QMARK_){
var var_name = cljs.core.with_meta.call(null,cljs.core.symbol.call(null,name),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dynamic","dynamic",704819571),true], null));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","declare","cljs.core/declare",1312638100,null),null,(1),null)),(new cljs.core.List(null,var_name,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,ctor,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,var_name,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null)))),null,(1),null)),body))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"v__17310__auto__","v__17310__auto__",-219346385,null),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"set!","set!",250714521,null),null,(1),null)),(new cljs.core.List(null,var_name,null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"v__17310__auto__","v__17310__auto__",-219346385,null),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,bang_QMARK_,null,(1),null))))),null,(1),null)))));
});
var ret__5781__auto___17321 = (function (){
/**
 * Declares a reference-able symbol that will be lazily evaluated once per characteristic of the containing
 *   describe scope.  The body may contain any forms, the last of which will be the value of the dereferenced symbol.
 * 
 *   (with meaning 42)
 *   (it "knows the meaning of life" (should= @meaning (the-meaning-of :life)))
 */
speclj.core.with$ = (function speclj$core$with(var_args){
var args__5732__auto__ = [];
var len__5726__auto___17322 = arguments.length;
var i__5727__auto___17324 = (0);
while(true){
if((i__5727__auto___17324 < len__5726__auto___17322)){
args__5732__auto__.push((arguments[i__5727__auto___17324]));

var G__17328 = (i__5727__auto___17324 + (1));
i__5727__auto___17324 = G__17328;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((3) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((3)),(0),null)):null);
return speclj.core.with$.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5733__auto__);
});

(speclj.core.with$.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,name,body){
return speclj.core._make_with.call(null,name,body,new cljs.core.Symbol("speclj.components","new-with","speclj.components/new-with",-24310803,null),false);
}));

(speclj.core.with$.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(speclj.core.with$.cljs$lang$applyTo = (function (seq17316){
var G__17317 = cljs.core.first.call(null,seq17316);
var seq17316__$1 = cljs.core.next.call(null,seq17316);
var G__17318 = cljs.core.first.call(null,seq17316__$1);
var seq17316__$2 = cljs.core.next.call(null,seq17316__$1);
var G__17319 = cljs.core.first.call(null,seq17316__$2);
var seq17316__$3 = cljs.core.next.call(null,seq17316__$2);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__17317,G__17318,G__17319,seq17316__$3);
}));

return null;
})()
;
(speclj.core.with$.cljs$lang$macro = true);

var ret__5781__auto___17333 = (function (){
/**
 * Declares a reference-able symbol that will be evaluated immediately and reset once per characteristic of the containing
 *   describe scope.  The body may contain any forms, the last of which will be the value of the dereferenced symbol.
 * 
 *   (def my-num (atom 0))
 *   (with! my-with! (swap! my-num inc))
 *   (it "increments my-num before being accessed" (should= 1 @my-num) (should= 2 @my-with!))
 */
speclj.core.with_BANG_ = (function speclj$core$with_BANG_(var_args){
var args__5732__auto__ = [];
var len__5726__auto___17338 = arguments.length;
var i__5727__auto___17339 = (0);
while(true){
if((i__5727__auto___17339 < len__5726__auto___17338)){
args__5732__auto__.push((arguments[i__5727__auto___17339]));

var G__17340 = (i__5727__auto___17339 + (1));
i__5727__auto___17339 = G__17340;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((3) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((3)),(0),null)):null);
return speclj.core.with_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5733__auto__);
});

(speclj.core.with_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,name,body){
return speclj.core._make_with.call(null,name,body,new cljs.core.Symbol("speclj.components","new-with","speclj.components/new-with",-24310803,null),true);
}));

(speclj.core.with_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(speclj.core.with_BANG_.cljs$lang$applyTo = (function (seq17323){
var G__17325 = cljs.core.first.call(null,seq17323);
var seq17323__$1 = cljs.core.next.call(null,seq17323);
var G__17326 = cljs.core.first.call(null,seq17323__$1);
var seq17323__$2 = cljs.core.next.call(null,seq17323__$1);
var G__17327 = cljs.core.first.call(null,seq17323__$2);
var seq17323__$3 = cljs.core.next.call(null,seq17323__$2);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__17325,G__17326,G__17327,seq17323__$3);
}));

return null;
})()
;
(speclj.core.with_BANG_.cljs$lang$macro = true);

var ret__5781__auto___17346 = (function (){
/**
 * Declares a reference-able symbol that will be lazily evaluated once per context. The body may contain any forms,
 * the last of which will be the value of the dereferenced symbol.
 * 
 *   (with-all meaning 42)
 *   (it "knows the meaning of life" (should= @meaning (the-meaning-of :life)))
 */
speclj.core.with_all = (function speclj$core$with_all(var_args){
var args__5732__auto__ = [];
var len__5726__auto___17350 = arguments.length;
var i__5727__auto___17353 = (0);
while(true){
if((i__5727__auto___17353 < len__5726__auto___17350)){
args__5732__auto__.push((arguments[i__5727__auto___17353]));

var G__17354 = (i__5727__auto___17353 + (1));
i__5727__auto___17353 = G__17354;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((3) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((3)),(0),null)):null);
return speclj.core.with_all.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5733__auto__);
});

(speclj.core.with_all.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,name,body){
return speclj.core._make_with.call(null,name,body,new cljs.core.Symbol("speclj.components","new-with-all","speclj.components/new-with-all",1631732463,null),false);
}));

(speclj.core.with_all.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(speclj.core.with_all.cljs$lang$applyTo = (function (seq17334){
var G__17335 = cljs.core.first.call(null,seq17334);
var seq17334__$1 = cljs.core.next.call(null,seq17334);
var G__17336 = cljs.core.first.call(null,seq17334__$1);
var seq17334__$2 = cljs.core.next.call(null,seq17334__$1);
var G__17337 = cljs.core.first.call(null,seq17334__$2);
var seq17334__$3 = cljs.core.next.call(null,seq17334__$2);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__17335,G__17336,G__17337,seq17334__$3);
}));

return null;
})()
;
(speclj.core.with_all.cljs$lang$macro = true);

var ret__5781__auto___17355 = (function (){
/**
 * Declares a reference-able symbol that will be immediately evaluated once per context. The body may contain any forms,
 * the last of which will be the value of the dereferenced symbol.
 * 
 *   (def my-num (atom 0))
 *   (with-all! my-with-all! (swap! my-num inc))
 *   (it "increments my-num before being accessed"
 *  (should= 1 @my-num)
 *  (should= 2 @my-with!))
 *   (it "only increments my-num once per context"
 *  (should= 1 @my-num)
 *  (should= 2 @my-with!))
 */
speclj.core.with_all_BANG_ = (function speclj$core$with_all_BANG_(var_args){
var args__5732__auto__ = [];
var len__5726__auto___17357 = arguments.length;
var i__5727__auto___17358 = (0);
while(true){
if((i__5727__auto___17358 < len__5726__auto___17357)){
args__5732__auto__.push((arguments[i__5727__auto___17358]));

var G__17360 = (i__5727__auto___17358 + (1));
i__5727__auto___17358 = G__17360;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((3) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((3)),(0),null)):null);
return speclj.core.with_all_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5733__auto__);
});

(speclj.core.with_all_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,name,body){
return speclj.core._make_with.call(null,name,body,new cljs.core.Symbol("speclj.components","new-with-all","speclj.components/new-with-all",1631732463,null),true);
}));

(speclj.core.with_all_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(speclj.core.with_all_BANG_.cljs$lang$applyTo = (function (seq17348){
var G__17349 = cljs.core.first.call(null,seq17348);
var seq17348__$1 = cljs.core.next.call(null,seq17348);
var G__17351 = cljs.core.first.call(null,seq17348__$1);
var seq17348__$2 = cljs.core.next.call(null,seq17348__$1);
var G__17352 = cljs.core.first.call(null,seq17348__$2);
var seq17348__$3 = cljs.core.next.call(null,seq17348__$2);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__17349,G__17351,G__17352,seq17348__$3);
}));

return null;
})()
;
(speclj.core.with_all_BANG_.cljs$lang$macro = true);

var ret__5781__auto___17362 = speclj.core._to_s = (function speclj$core$_to_s(_AMPERSAND_form,_AMPERSAND_env,thing){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","if-some","cljs.core/if-some",790328718,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"thing__17356__auto__","thing__17356__auto__",-1152287812,null),null,(1),null)),(new cljs.core.List(null,thing,null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","pr-str","cljs.core/pr-str",-552799478,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"thing__17356__auto__","thing__17356__auto__",-1152287812,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,"nil",null,(1),null)))));
});
(speclj.core._to_s.cljs$lang$macro = true);

var ret__5781__auto___17369 = /**
 * Useful for making custom assertions.
 */
speclj.core._fail = (function speclj$core$_fail(_AMPERSAND_form,_AMPERSAND_env,message){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"throw","throw",595905694,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-new-failure","speclj.core/-new-failure",1552263542,null),null,(1),null)),(new cljs.core.List(null,message,null,(1),null))))),null,(1),null)))));
});
(speclj.core._fail.cljs$lang$macro = true);

var ret__5781__auto___17386 = speclj.core.wrong_types = (function speclj$core$wrong_types(_AMPERSAND_form,_AMPERSAND_env,assertion,a,b){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"a__17365__auto__","a__17365__auto__",338513154,null),null,(1),null)),(new cljs.core.List(null,a,null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"b__17366__auto__","b__17366__auto__",569222313,null),null,(1),null)),(new cljs.core.List(null,b,null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"type-a__17367__auto__","type-a__17367__auto__",2053387394,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","nil?","cljs.core/nil?",945071861,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"a__17365__auto__","a__17365__auto__",338513154,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,"nil",null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.platform","type-name","speclj.platform/type-name",-1621971592,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","type","cljs.core/type",-821761154,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"a__17365__auto__","a__17365__auto__",338513154,null),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"type-b__17368__auto__","type-b__17368__auto__",-849108805,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","nil?","cljs.core/nil?",945071861,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"b__17366__auto__","b__17366__auto__",569222313,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,"nil",null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.platform","type-name","speclj.platform/type-name",-1621971592,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","type","cljs.core/type",-821761154,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"b__17366__auto__","b__17366__auto__",569222313,null),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null),null,(1),null)),(new cljs.core.List(null,assertion,null,(1),null)),(new cljs.core.List(null," doesn't know how to handle these types: [",null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"type-a__17367__auto__","type-a__17367__auto__",2053387394,null),null,(1),null)),(new cljs.core.List(null," ",null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"type-b__17368__auto__","type-b__17368__auto__",-849108805,null),null,(1),null)),(new cljs.core.List(null,"]",null,(1),null))))),null,(1),null)))));
});
(speclj.core.wrong_types.cljs$lang$macro = true);

var ret__5781__auto___17390 = /**
 * Asserts the truthy-ness of a form
 */
speclj.core.should = (function speclj$core$should(_AMPERSAND_form,_AMPERSAND_env,form){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"value__17387__auto__","value__17387__auto__",-972967360,null),null,(1),null)),(new cljs.core.List(null,form,null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","when-not","cljs.core/when-not",-556141047,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"value__17387__auto__","value__17387__auto__",-972967360,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-fail","speclj.core/-fail",-436223201,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null),null,(1),null)),(new cljs.core.List(null,"Expected truthy but was: ",null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-to-s","speclj.core/-to-s",-1548927580,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"value__17387__auto__","value__17387__auto__",-972967360,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,"",null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)))));
});
(speclj.core.should.cljs$lang$macro = true);

var ret__5781__auto___17392 = /**
 * Asserts the falsy-ness of a form
 */
speclj.core.should_not = (function speclj$core$should_not(_AMPERSAND_form,_AMPERSAND_env,form){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","when-let","cljs.core/when-let",-2049838349,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"value__17389__auto__","value__17389__auto__",-773487521,null),null,(1),null)),(new cljs.core.List(null,form,null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-fail","speclj.core/-fail",-436223201,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null),null,(1),null)),(new cljs.core.List(null,"Expected falsy but was: ",null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-to-s","speclj.core/-to-s",-1548927580,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"value__17389__auto__","value__17389__auto__",-773487521,null),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)))));
});
(speclj.core.should_not.cljs$lang$macro = true);

var ret__5781__auto___17410 = (function (){
/**
 * Asserts that two forms evaluate to equal values, with the expected value as the first parameter.
 */
speclj.core.should_EQ_ = (function speclj$core$should_EQ_(var_args){
var G__17399 = arguments.length;
switch (G__17399) {
case 4:
return speclj.core.should_EQ_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return speclj.core.should_EQ_.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (2)))].join('')));

}
});

(speclj.core.should_EQ_.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,expected_form,actual_form){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"expected__17393__auto__","expected__17393__auto__",-1163943097,null),null,(1),null)),(new cljs.core.List(null,expected_form,null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"actual__17394__auto__","actual__17394__auto__",826467051,null),null,(1),null)),(new cljs.core.List(null,actual_form,null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","when-not","cljs.core/when-not",-556141047,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","=","cljs.core/=",-1891498332,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"expected__17393__auto__","expected__17393__auto__",-1163943097,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"actual__17394__auto__","actual__17394__auto__",826467051,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-fail","speclj.core/-fail",-436223201,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null),null,(1),null)),(new cljs.core.List(null,"Expected: ",null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-to-s","speclj.core/-to-s",-1548927580,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"expected__17393__auto__","expected__17393__auto__",-1163943097,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("speclj.platform","endl","speclj.platform/endl",-1139771306,null),null,(1),null)),(new cljs.core.List(null,"     got: ",null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-to-s","speclj.core/-to-s",-1548927580,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"actual__17394__auto__","actual__17394__auto__",826467051,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null," (using =)",null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)))));
}));

(speclj.core.should_EQ_.cljs$core$IFn$_invoke$arity$5 = (function (_AMPERSAND_form,_AMPERSAND_env,expected_form,actual_form,delta_form){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"expected__17395__auto__","expected__17395__auto__",-338430538,null),null,(1),null)),(new cljs.core.List(null,expected_form,null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"actual__17396__auto__","actual__17396__auto__",471612645,null),null,(1),null)),(new cljs.core.List(null,actual_form,null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"delta__17397__auto__","delta__17397__auto__",374846577,null),null,(1),null)),(new cljs.core.List(null,delta_form,null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","when","cljs.core/when",120293186,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.platform","difference-greater-than-delta?","speclj.platform/difference-greater-than-delta?",-954532948,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"expected__17395__auto__","expected__17395__auto__",-338430538,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"actual__17396__auto__","actual__17396__auto__",471612645,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"delta__17397__auto__","delta__17397__auto__",374846577,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-fail","speclj.core/-fail",-436223201,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null),null,(1),null)),(new cljs.core.List(null,"Expected: ",null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-to-s","speclj.core/-to-s",-1548927580,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"expected__17395__auto__","expected__17395__auto__",-338430538,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("speclj.platform","endl","speclj.platform/endl",-1139771306,null),null,(1),null)),(new cljs.core.List(null,"     got: ",null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-to-s","speclj.core/-to-s",-1548927580,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"actual__17396__auto__","actual__17396__auto__",471612645,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null," (using delta: ",null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"delta__17397__auto__","delta__17397__auto__",374846577,null),null,(1),null)),(new cljs.core.List(null,")",null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)))));
}));

(speclj.core.should_EQ_.cljs$lang$maxFixedArity = 5);

return null;
})()
;
(speclj.core.should_EQ_.cljs$lang$macro = true);

var ret__5781__auto___17420 = /**
 * Asserts that a form satisfies a function.
 */
speclj.core.should_be = (function speclj$core$should_be(_AMPERSAND_form,_AMPERSAND_env,f_form,actual_form){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"f__17412__auto__","f__17412__auto__",-2049261410,null),null,(1),null)),(new cljs.core.List(null,f_form,null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"actual__17413__auto__","actual__17413__auto__",-1926744852,null),null,(1),null)),(new cljs.core.List(null,actual_form,null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","when-not","cljs.core/when-not",-556141047,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"f__17412__auto__","f__17412__auto__",-2049261410,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"actual__17413__auto__","actual__17413__auto__",-1926744852,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-fail","speclj.core/-fail",-436223201,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null),null,(1),null)),(new cljs.core.List(null,"Expected ",null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-to-s","speclj.core/-to-s",-1548927580,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"actual__17413__auto__","actual__17413__auto__",-1926744852,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null," to satisfy: ",null,(1),null)),(new cljs.core.List(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(f_form),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)))));
});
(speclj.core.should_be.cljs$lang$macro = true);

var ret__5781__auto___17423 = /**
 * Asserts that a form does not satisfy a function.
 */
speclj.core.should_not_be = (function speclj$core$should_not_be(_AMPERSAND_form,_AMPERSAND_env,f_form,actual_form){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"f__17414__auto__","f__17414__auto__",-1526478912,null),null,(1),null)),(new cljs.core.List(null,f_form,null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"actual__17415__auto__","actual__17415__auto__",497606716,null),null,(1),null)),(new cljs.core.List(null,actual_form,null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","when","cljs.core/when",120293186,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"f__17414__auto__","f__17414__auto__",-1526478912,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"actual__17415__auto__","actual__17415__auto__",497606716,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-fail","speclj.core/-fail",-436223201,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null),null,(1),null)),(new cljs.core.List(null,"Expected ",null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-to-s","speclj.core/-to-s",-1548927580,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"actual__17415__auto__","actual__17415__auto__",497606716,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null," not to satisfy: ",null,(1),null)),(new cljs.core.List(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(f_form),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)))));
});
(speclj.core.should_not_be.cljs$lang$macro = true);

var ret__5781__auto___17424 = /**
 * Asserts that two forms evaluate to unequal values, with the unexpected value as the first parameter.
 */
speclj.core.should_not_EQ_ = (function speclj$core$should_not_EQ_(_AMPERSAND_form,_AMPERSAND_env,expected_form,actual_form){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"expected__17421__auto__","expected__17421__auto__",-1631709015,null),null,(1),null)),(new cljs.core.List(null,expected_form,null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"actual__17422__auto__","actual__17422__auto__",-384995972,null),null,(1),null)),(new cljs.core.List(null,actual_form,null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","when","cljs.core/when",120293186,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","=","cljs.core/=",-1891498332,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"expected__17421__auto__","expected__17421__auto__",-1631709015,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"actual__17422__auto__","actual__17422__auto__",-384995972,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-fail","speclj.core/-fail",-436223201,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null),null,(1),null)),(new cljs.core.List(null,"Expected: ",null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-to-s","speclj.core/-to-s",-1548927580,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"expected__17421__auto__","expected__17421__auto__",-1631709015,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("speclj.platform","endl","speclj.platform/endl",-1139771306,null),null,(1),null)),(new cljs.core.List(null,"not to =: ",null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-to-s","speclj.core/-to-s",-1548927580,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"actual__17422__auto__","actual__17422__auto__",-384995972,null),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)))));
});
(speclj.core.should_not_EQ_.cljs$lang$macro = true);

var ret__5781__auto___17453 = /**
 * Asserts that two forms evaluate to the same object, with the expected value as the first parameter.
 */
speclj.core.should_be_same = (function speclj$core$should_be_same(_AMPERSAND_form,_AMPERSAND_env,expected_form,actual_form){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"expected__17425__auto__","expected__17425__auto__",33555980,null),null,(1),null)),(new cljs.core.List(null,expected_form,null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"actual__17426__auto__","actual__17426__auto__",315121931,null),null,(1),null)),(new cljs.core.List(null,actual_form,null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","not","cljs.core/not",100665144,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","identical?","cljs.core/identical?",608476750,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"expected__17425__auto__","expected__17425__auto__",33555980,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"actual__17426__auto__","actual__17426__auto__",315121931,null),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-fail","speclj.core/-fail",-436223201,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null),null,(1),null)),(new cljs.core.List(null,"         Expected: ",null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-to-s","speclj.core/-to-s",-1548927580,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"expected__17425__auto__","expected__17425__auto__",33555980,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("speclj.platform","endl","speclj.platform/endl",-1139771306,null),null,(1),null)),(new cljs.core.List(null,"to be the same as: ",null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-to-s","speclj.core/-to-s",-1548927580,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"actual__17426__auto__","actual__17426__auto__",315121931,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null," (using identical?)",null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)))));
});
(speclj.core.should_be_same.cljs$lang$macro = true);

var ret__5781__auto___17459 = /**
 * Asserts that two forms evaluate to different objects, with the unexpected value as the first parameter.
 */
speclj.core.should_not_be_same = (function speclj$core$should_not_be_same(_AMPERSAND_form,_AMPERSAND_env,expected_form,actual_form){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"expected__17454__auto__","expected__17454__auto__",1652530121,null),null,(1),null)),(new cljs.core.List(null,expected_form,null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"actual__17455__auto__","actual__17455__auto__",-1650871452,null),null,(1),null)),(new cljs.core.List(null,actual_form,null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","when","cljs.core/when",120293186,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","identical?","cljs.core/identical?",608476750,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"expected__17454__auto__","expected__17454__auto__",1652530121,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"actual__17455__auto__","actual__17455__auto__",-1650871452,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-fail","speclj.core/-fail",-436223201,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null),null,(1),null)),(new cljs.core.List(null,"             Expected: ",null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-to-s","speclj.core/-to-s",-1548927580,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"expected__17454__auto__","expected__17454__auto__",1652530121,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("speclj.platform","endl","speclj.platform/endl",-1139771306,null),null,(1),null)),(new cljs.core.List(null,"not to be the same as: ",null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-to-s","speclj.core/-to-s",-1548927580,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"actual__17455__auto__","actual__17455__auto__",-1650871452,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null," (using identical?)",null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)))));
});
(speclj.core.should_not_be_same.cljs$lang$macro = true);

var ret__5781__auto___17464 = /**
 * Asserts that the form evaluates to nil
 */
speclj.core.should_be_nil = (function speclj$core$should_be_nil(_AMPERSAND_form,_AMPERSAND_env,form){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","should=","speclj.core/should=",83977914,null),null,(1),null)),(new cljs.core.List(null,null,null,(1),null)),(new cljs.core.List(null,form,null,(1),null)))));
});
(speclj.core.should_be_nil.cljs$lang$macro = true);

var ret__5781__auto___17476 = /**
 * Multipurpose assertion of containment.  Works on strings, regular expressions, sequences, and maps.
 * 
 *   (should-contain "foo" "foobar")            ; looks for sub-string
 *   (should-contain #"hello.*" "hello, world") ; looks for regular expression
 *   (should-contain :foo {:foo :bar})          ; looks for a key in a map
 *   (should-contain 3 [1 2 3 4])               ; looks for an object in a collection
 */
speclj.core.should_contain = (function speclj$core$should_contain(_AMPERSAND_form,_AMPERSAND_env,expected,actual){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"expected__17461__auto__","expected__17461__auto__",-278640746,null),null,(1),null)),(new cljs.core.List(null,expected,null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"actual__17462__auto__","actual__17462__auto__",-1393654566,null),null,(1),null)),(new cljs.core.List(null,actual,null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","cond","cljs.core/cond",2005388338,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","nil?","cljs.core/nil?",945071861,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"actual__17462__auto__","actual__17462__auto__",-1393654566,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-fail","speclj.core/-fail",-436223201,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null),null,(1),null)),(new cljs.core.List(null,"Expected: ",null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-to-s","speclj.core/-to-s",-1548927580,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"expected__17461__auto__","expected__17461__auto__",-278640746,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("speclj.platform","endl","speclj.platform/endl",-1139771306,null),null,(1),null)),(new cljs.core.List(null,"to be in: nil",null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","and","cljs.core/and",-6692549,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"expected__17461__auto__","expected__17461__auto__",-278640746,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"actual__17462__auto__","actual__17462__auto__",-1393654566,null),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","when","cljs.core/when",120293186,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","=","cljs.core/=",-1891498332,null),null,(1),null)),(new cljs.core.List(null,(-1),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,".indexOf",".indexOf",-1910538923,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"actual__17462__auto__","actual__17462__auto__",-1393654566,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"expected__17461__auto__","expected__17461__auto__",-278640746,null),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-fail","speclj.core/-fail",-436223201,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null),null,(1),null)),(new cljs.core.List(null,"Expected: ",null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-to-s","speclj.core/-to-s",-1548927580,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"expected__17461__auto__","expected__17461__auto__",-278640746,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("speclj.platform","endl","speclj.platform/endl",-1139771306,null),null,(1),null)),(new cljs.core.List(null,"to be in: ",null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-to-s","speclj.core/-to-s",-1548927580,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"actual__17462__auto__","actual__17462__auto__",-1393654566,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null," (using .contains)",null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","and","cljs.core/and",-6692549,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.platform","re?","speclj.platform/re?",-2045322539,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"expected__17461__auto__","expected__17461__auto__",-278640746,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"actual__17462__auto__","actual__17462__auto__",-1393654566,null),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","when","cljs.core/when",120293186,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","empty?","cljs.core/empty?",1866613644,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","re-seq","cljs.core/re-seq",-1438765119,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"expected__17461__auto__","expected__17461__auto__",-278640746,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"actual__17462__auto__","actual__17462__auto__",-1393654566,null),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-fail","speclj.core/-fail",-436223201,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null),null,(1),null)),(new cljs.core.List(null,"Expected: ",null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-to-s","speclj.core/-to-s",-1548927580,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"actual__17462__auto__","actual__17462__auto__",-1393654566,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("speclj.platform","endl","speclj.platform/endl",-1139771306,null),null,(1),null)),(new cljs.core.List(null,"to match: ",null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-to-s","speclj.core/-to-s",-1548927580,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"expected__17461__auto__","expected__17461__auto__",-278640746,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null," (using re-seq)",null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"actual__17462__auto__","actual__17462__auto__",-1393654566,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","when","cljs.core/when",120293186,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","not","cljs.core/not",100665144,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"actual__17462__auto__","actual__17462__auto__",-1393654566,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"expected__17461__auto__","expected__17461__auto__",-278640746,null),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-fail","speclj.core/-fail",-436223201,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null),null,(1),null)),(new cljs.core.List(null,"Expected: ",null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-to-s","speclj.core/-to-s",-1548927580,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"expected__17461__auto__","expected__17461__auto__",-278640746,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("speclj.platform","endl","speclj.platform/endl",-1139771306,null),null,(1),null)),(new cljs.core.List(null,"to be a key in: ",null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-to-s","speclj.core/-to-s",-1548927580,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"actual__17462__auto__","actual__17462__auto__",-1393654566,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null," (using contains?)",null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","coll?","cljs.core/coll?",1208130522,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"actual__17462__auto__","actual__17462__auto__",-1393654566,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","when","cljs.core/when",120293186,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","not","cljs.core/not",100665144,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","some","cljs.core/some",-977628065,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"p1__17460__17463__auto__","p1__17460__17463__auto__",693580842,null),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","=","cljs.core/=",-1891498332,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"expected__17461__auto__","expected__17461__auto__",-278640746,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"p1__17460__17463__auto__","p1__17460__17463__auto__",693580842,null),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"actual__17462__auto__","actual__17462__auto__",-1393654566,null),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-fail","speclj.core/-fail",-436223201,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null),null,(1),null)),(new cljs.core.List(null,"Expected: ",null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-to-s","speclj.core/-to-s",-1548927580,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"expected__17461__auto__","expected__17461__auto__",-278640746,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("speclj.platform","endl","speclj.platform/endl",-1139771306,null),null,(1),null)),(new cljs.core.List(null,"to be in: ",null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-to-s","speclj.core/-to-s",-1548927580,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"actual__17462__auto__","actual__17462__auto__",-1393654566,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null," (using =)",null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"else","else",-1508377146),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"throw","throw",595905694,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-new-exception","speclj.core/-new-exception",-969354487,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","wrong-types","speclj.core/wrong-types",408672787,null),null,(1),null)),(new cljs.core.List(null,"should-contain",null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"expected__17461__auto__","expected__17461__auto__",-278640746,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"actual__17462__auto__","actual__17462__auto__",-1393654566,null),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)))));
});
(speclj.core.should_contain.cljs$lang$macro = true);

var ret__5781__auto___17529 = /**
 * Multipurpose assertion of non-containment.  See should-contain as an example of opposite behavior.
 */
speclj.core.should_not_contain = (function speclj$core$should_not_contain(_AMPERSAND_form,_AMPERSAND_env,expected,actual){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"expected__17478__auto__","expected__17478__auto__",1265545673,null),null,(1),null)),(new cljs.core.List(null,expected,null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"actual__17479__auto__","actual__17479__auto__",-757356240,null),null,(1),null)),(new cljs.core.List(null,actual,null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","cond","cljs.core/cond",2005388338,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","nil?","cljs.core/nil?",945071861,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"actual__17479__auto__","actual__17479__auto__",-757356240,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,null,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","and","cljs.core/and",-6692549,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"expected__17478__auto__","expected__17478__auto__",1265545673,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"actual__17479__auto__","actual__17479__auto__",-757356240,null),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","when","cljs.core/when",120293186,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","not","cljs.core/not",100665144,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","=","cljs.core/=",-1891498332,null),null,(1),null)),(new cljs.core.List(null,(-1),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,".indexOf",".indexOf",-1910538923,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"actual__17479__auto__","actual__17479__auto__",-757356240,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"expected__17478__auto__","expected__17478__auto__",1265545673,null),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-fail","speclj.core/-fail",-436223201,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null),null,(1),null)),(new cljs.core.List(null,"Expected: ",null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-to-s","speclj.core/-to-s",-1548927580,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"expected__17478__auto__","expected__17478__auto__",1265545673,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("speclj.platform","endl","speclj.platform/endl",-1139771306,null),null,(1),null)),(new cljs.core.List(null,"not to be in: ",null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-to-s","speclj.core/-to-s",-1548927580,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"actual__17479__auto__","actual__17479__auto__",-757356240,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null," (using .contains)",null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","and","cljs.core/and",-6692549,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.platform","re?","speclj.platform/re?",-2045322539,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"expected__17478__auto__","expected__17478__auto__",1265545673,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"actual__17479__auto__","actual__17479__auto__",-757356240,null),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","when","cljs.core/when",120293186,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","not","cljs.core/not",100665144,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","empty?","cljs.core/empty?",1866613644,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","re-seq","cljs.core/re-seq",-1438765119,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"expected__17478__auto__","expected__17478__auto__",1265545673,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"actual__17479__auto__","actual__17479__auto__",-757356240,null),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-fail","speclj.core/-fail",-436223201,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null),null,(1),null)),(new cljs.core.List(null,"Expected: ",null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-to-s","speclj.core/-to-s",-1548927580,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"actual__17479__auto__","actual__17479__auto__",-757356240,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("speclj.platform","endl","speclj.platform/endl",-1139771306,null),null,(1),null)),(new cljs.core.List(null,"not to match: ",null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-to-s","speclj.core/-to-s",-1548927580,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"expected__17478__auto__","expected__17478__auto__",1265545673,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null," (using re-seq)",null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"actual__17479__auto__","actual__17479__auto__",-757356240,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","when","cljs.core/when",120293186,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"actual__17479__auto__","actual__17479__auto__",-757356240,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"expected__17478__auto__","expected__17478__auto__",1265545673,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-fail","speclj.core/-fail",-436223201,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null),null,(1),null)),(new cljs.core.List(null,"Expected: ",null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-to-s","speclj.core/-to-s",-1548927580,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"expected__17478__auto__","expected__17478__auto__",1265545673,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("speclj.platform","endl","speclj.platform/endl",-1139771306,null),null,(1),null)),(new cljs.core.List(null,"not to be a key in: ",null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-to-s","speclj.core/-to-s",-1548927580,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"actual__17479__auto__","actual__17479__auto__",-757356240,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null," (using contains?)",null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","coll?","cljs.core/coll?",1208130522,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"actual__17479__auto__","actual__17479__auto__",-757356240,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","when","cljs.core/when",120293186,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","some","cljs.core/some",-977628065,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"p1__17477__17480__auto__","p1__17477__17480__auto__",958505161,null),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","=","cljs.core/=",-1891498332,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"expected__17478__auto__","expected__17478__auto__",1265545673,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"p1__17477__17480__auto__","p1__17477__17480__auto__",958505161,null),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"actual__17479__auto__","actual__17479__auto__",-757356240,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-fail","speclj.core/-fail",-436223201,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null),null,(1),null)),(new cljs.core.List(null,"Expected: ",null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-to-s","speclj.core/-to-s",-1548927580,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"expected__17478__auto__","expected__17478__auto__",1265545673,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("speclj.platform","endl","speclj.platform/endl",-1139771306,null),null,(1),null)),(new cljs.core.List(null,"not to be in: ",null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-to-s","speclj.core/-to-s",-1548927580,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"actual__17479__auto__","actual__17479__auto__",-757356240,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null," (using =)",null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"else","else",-1508377146),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"throw","throw",595905694,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-new-exception","speclj.core/-new-exception",-969354487,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","wrong-types","speclj.core/wrong-types",408672787,null),null,(1),null)),(new cljs.core.List(null,"should-not-contain",null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"expected__17478__auto__","expected__17478__auto__",1265545673,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"actual__17479__auto__","actual__17479__auto__",-757356240,null),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)))));
});
(speclj.core.should_not_contain.cljs$lang$macro = true);

var ret__5781__auto___17554 = /**
 * Multipurpose assertion on (count %). Works on strings, sequences, and maps.
 * 
 *   (should-have-count 6 "foobar")
 *   (should-have-count 2 [1 2])
 *   (should-have-count 1 {:foo :bar})
 *   (should-have-count 0 [])
 *   (should-have-count 0 nil)
 */
speclj.core.should_have_count = (function speclj$core$should_have_count(_AMPERSAND_form,_AMPERSAND_env,expected,coll){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"expected__17530__auto__","expected__17530__auto__",-36300628,null),null,(1),null)),(new cljs.core.List(null,expected,null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"coll__17531__auto__","coll__17531__auto__",1552789933,null),null,(1),null)),(new cljs.core.List(null,coll,null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","if-not","cljs.core/if-not",-1997686824,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","and","cljs.core/and",-6692549,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","number?","cljs.core/number?",-811857295,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"expected__17530__auto__","expected__17530__auto__",-36300628,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","or","cljs.core/or",1201033885,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","nil?","cljs.core/nil?",945071861,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"coll__17531__auto__","coll__17531__auto__",1552789933,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"coll__17531__auto__","coll__17531__auto__",1552789933,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","counted?","cljs.core/counted?",1305324125,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"coll__17531__auto__","coll__17531__auto__",1552789933,null),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"throw","throw",595905694,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-new-exception","speclj.core/-new-exception",-969354487,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","wrong-types","speclj.core/wrong-types",408672787,null),null,(1),null)),(new cljs.core.List(null,"should-have-count",null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"expected__17530__auto__","expected__17530__auto__",-36300628,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"coll__17531__auto__","coll__17531__auto__",1552789933,null),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"actual__17532__auto__","actual__17532__auto__",1312006139,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","count","cljs.core/count",-921270233,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"coll__17531__auto__","coll__17531__auto__",1552789933,null),null,(1),null))))),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","when-not","cljs.core/when-not",-556141047,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","=","cljs.core/=",-1891498332,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"expected__17530__auto__","expected__17530__auto__",-36300628,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"actual__17532__auto__","actual__17532__auto__",1312006139,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-fail","speclj.core/-fail",-436223201,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null),null,(1),null)),(new cljs.core.List(null,"Expected count: ",null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"expected__17530__auto__","expected__17530__auto__",-36300628,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("speclj.platform","endl","speclj.platform/endl",-1139771306,null),null,(1),null)),(new cljs.core.List(null,"Actual count:   ",null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"actual__17532__auto__","actual__17532__auto__",1312006139,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("speclj.platform","endl","speclj.platform/endl",-1139771306,null),null,(1),null)),(new cljs.core.List(null,"Actual coll:    ",null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-to-s","speclj.core/-to-s",-1548927580,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"coll__17531__auto__","coll__17531__auto__",1552789933,null),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)))));
});
(speclj.core.should_have_count.cljs$lang$macro = true);

var ret__5781__auto___17563 = /**
 * Multipurpose assertion on (not= (count %)). Works on strings, sequences, and maps.
 * 
 *   (should-not-have-count 1 "foobar")
 *   (should-not-have-count 1 [1 2])
 *   (should-not-have-count 42 {:foo :bar})
 *   (should-not-have-count 1 [])
 *   (should-not-have-count 1 nil)
 */
speclj.core.should_not_have_count = (function speclj$core$should_not_have_count(_AMPERSAND_form,_AMPERSAND_env,expected,coll){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"expected__17547__auto__","expected__17547__auto__",473062459,null),null,(1),null)),(new cljs.core.List(null,expected,null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"coll__17548__auto__","coll__17548__auto__",1736992998,null),null,(1),null)),(new cljs.core.List(null,coll,null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","if-not","cljs.core/if-not",-1997686824,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","and","cljs.core/and",-6692549,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","number?","cljs.core/number?",-811857295,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"expected__17547__auto__","expected__17547__auto__",473062459,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","or","cljs.core/or",1201033885,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","nil?","cljs.core/nil?",945071861,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"coll__17548__auto__","coll__17548__auto__",1736992998,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"coll__17548__auto__","coll__17548__auto__",1736992998,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","counted?","cljs.core/counted?",1305324125,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"coll__17548__auto__","coll__17548__auto__",1736992998,null),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"throw","throw",595905694,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-new-exception","speclj.core/-new-exception",-969354487,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","wrong-types","speclj.core/wrong-types",408672787,null),null,(1),null)),(new cljs.core.List(null,"should-not-have-count",null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"expected__17547__auto__","expected__17547__auto__",473062459,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"coll__17548__auto__","coll__17548__auto__",1736992998,null),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"actual__17549__auto__","actual__17549__auto__",-2073090516,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","count","cljs.core/count",-921270233,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"coll__17548__auto__","coll__17548__auto__",1736992998,null),null,(1),null))))),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","when","cljs.core/when",120293186,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","=","cljs.core/=",-1891498332,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"expected__17547__auto__","expected__17547__auto__",473062459,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"actual__17549__auto__","actual__17549__auto__",-2073090516,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-fail","speclj.core/-fail",-436223201,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null),null,(1),null)),(new cljs.core.List(null,"Expected count to not equal ",null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"expected__17547__auto__","expected__17547__auto__",473062459,null),null,(1),null)),(new cljs.core.List(null," (but it did!)",null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("speclj.platform","endl","speclj.platform/endl",-1139771306,null),null,(1),null)),(new cljs.core.List(null,"Collection: ",null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-to-s","speclj.core/-to-s",-1548927580,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"coll__17548__auto__","coll__17548__auto__",1736992998,null),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)))));
});
(speclj.core.should_not_have_count.cljs$lang$macro = true);

var ret__5781__auto___17574 = speclj.core._remove_first = (function speclj$core$_remove_first(_AMPERSAND_form,_AMPERSAND_env,coll,value){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"value__17555__auto__","value__17555__auto__",1711888167,null),null,(1),null)),(new cljs.core.List(null,value,null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","loop","cljs.core/loop",-1829423021,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"coll__17556__auto__","coll__17556__auto__",980585153,null),null,(1),null)),(new cljs.core.List(null,coll,null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"seen__17557__auto__","seen__17557__auto__",711312699,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null)))),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","empty?","cljs.core/empty?",1866613644,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"coll__17556__auto__","coll__17556__auto__",980585153,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"seen__17557__auto__","seen__17557__auto__",711312699,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"f__17558__auto__","f__17558__auto__",-203398662,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","first","cljs.core/first",-752535972,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"coll__17556__auto__","coll__17556__auto__",980585153,null),null,(1),null))))),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","=","cljs.core/=",-1891498332,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"f__17558__auto__","f__17558__auto__",-203398662,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"value__17555__auto__","value__17555__auto__",1711888167,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","concat","cljs.core/concat",-1133584918,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"seen__17557__auto__","seen__17557__auto__",711312699,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","rest","cljs.core/rest",-285075455,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"coll__17556__auto__","coll__17556__auto__",980585153,null),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"recur","recur",1202958259,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","rest","cljs.core/rest",-285075455,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"coll__17556__auto__","coll__17556__auto__",980585153,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","conj","cljs.core/conj",-460750931,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"seen__17557__auto__","seen__17557__auto__",711312699,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"f__17558__auto__","f__17558__auto__",-203398662,null),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)))));
});
(speclj.core._remove_first.cljs$lang$macro = true);

var ret__5781__auto___17585 = speclj.core._coll_difference = (function speclj$core$_coll_difference(_AMPERSAND_form,_AMPERSAND_env,coll1,coll2){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"coll1__17566__auto__","coll1__17566__auto__",-2096351043,null),null,(1),null)),(new cljs.core.List(null,coll1,null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"coll2__17567__auto__","coll2__17567__auto__",-1003615009,null),null,(1),null)),(new cljs.core.List(null,coll2,null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"coll1__17566__auto__","coll1__17566__auto__",-2096351043,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","first","cljs.core/first",-752535972,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("clojure.data","diff","clojure.data/diff",-683865998,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"coll1__17566__auto__","coll1__17566__auto__",-2096351043,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"coll2__17567__auto__","coll2__17567__auto__",-1003615009,null),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","loop","cljs.core/loop",-1829423021,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"match-with__17568__auto__","match-with__17568__auto__",-2114123070,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"coll1__17566__auto__","coll1__17566__auto__",-2096351043,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"match-against__17569__auto__","match-against__17569__auto__",-124803407,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"coll2__17567__auto__","coll2__17567__auto__",-1003615009,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"diff__17570__auto__","diff__17570__auto__",-853195396,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null)))),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","empty?","cljs.core/empty?",1866613644,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"match-with__17568__auto__","match-with__17568__auto__",-2114123070,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"diff__17570__auto__","diff__17570__auto__",-853195396,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"f__17571__auto__","f__17571__auto__",-1850526924,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","first","cljs.core/first",-752535972,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"match-with__17568__auto__","match-with__17568__auto__",-2114123070,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"r__17572__auto__","r__17572__auto__",725607654,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","rest","cljs.core/rest",-285075455,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"match-with__17568__auto__","match-with__17568__auto__",-2114123070,null),null,(1),null))))),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","some","cljs.core/some",-977628065,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"p1__17565__17573__auto__","p1__17565__17573__auto__",1858804626,null),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","=","cljs.core/=",-1891498332,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"p1__17565__17573__auto__","p1__17565__17573__auto__",1858804626,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"f__17571__auto__","f__17571__auto__",-1850526924,null),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"match-against__17569__auto__","match-against__17569__auto__",-124803407,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"recur","recur",1202958259,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"r__17572__auto__","r__17572__auto__",725607654,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-remove-first","speclj.core/-remove-first",869128070,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"match-against__17569__auto__","match-against__17569__auto__",-124803407,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"f__17571__auto__","f__17571__auto__",-1850526924,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"diff__17570__auto__","diff__17570__auto__",-853195396,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"recur","recur",1202958259,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"r__17572__auto__","r__17572__auto__",725607654,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"match-against__17569__auto__","match-against__17569__auto__",-124803407,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","conj","cljs.core/conj",-460750931,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"diff__17570__auto__","diff__17570__auto__",-853195396,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"f__17571__auto__","f__17571__auto__",-1850526924,null),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)))));
});
(speclj.core._coll_difference.cljs$lang$macro = true);

var ret__5781__auto___17600 = /**
 * Assertion of prefix in strings and sequences.
 * 
 *   (should-start-with "foo" "foobar")            ; looks for string prefix
 *   (should-start-with [1 2] [1 2 3 4])               ; looks for a subset at start of collection
 */
speclj.core.should_start_with = (function speclj$core$should_start_with(_AMPERSAND_form,_AMPERSAND_env,prefix,whole){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"prefix__17587__auto__","prefix__17587__auto__",1180445795,null),null,(1),null)),(new cljs.core.List(null,prefix,null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"whole__17588__auto__","whole__17588__auto__",-2006367105,null),null,(1),null)),(new cljs.core.List(null,whole,null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","cond","cljs.core/cond",2005388338,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","and","cljs.core/and",-6692549,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"prefix__17587__auto__","prefix__17587__auto__",1180445795,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"whole__17588__auto__","whole__17588__auto__",-2006367105,null),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","when-not","cljs.core/when-not",-556141047,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("clojure.string","starts-with?","clojure.string/starts-with?",656256322,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"whole__17588__auto__","whole__17588__auto__",-2006367105,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"prefix__17587__auto__","prefix__17587__auto__",1180445795,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-fail","speclj.core/-fail",-436223201,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null),null,(1),null)),(new cljs.core.List(null,"Expected \"",null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"whole__17588__auto__","whole__17588__auto__",-2006367105,null),null,(1),null)),(new cljs.core.List(null,"\" to start",null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("speclj.platform","endl","speclj.platform/endl",-1139771306,null),null,(1),null)),(new cljs.core.List(null,"    with \"",null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"prefix__17587__auto__","prefix__17587__auto__",1180445795,null),null,(1),null)),(new cljs.core.List(null,"\"",null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","and","cljs.core/and",-6692549,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","coll?","cljs.core/coll?",1208130522,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"whole__17588__auto__","whole__17588__auto__",-2006367105,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","coll?","cljs.core/coll?",1208130522,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"prefix__17587__auto__","prefix__17587__auto__",1180445795,null),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"actual__17589__auto__","actual__17589__auto__",-1476238359,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","take","cljs.core/take",439591112,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","count","cljs.core/count",-921270233,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"prefix__17587__auto__","prefix__17587__auto__",1180445795,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"whole__17588__auto__","whole__17588__auto__",-2006367105,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"extra__17590__auto__","extra__17590__auto__",-966964547,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-coll-difference","speclj.core/-coll-difference",805206382,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"actual__17589__auto__","actual__17589__auto__",-1476238359,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"prefix__17587__auto__","prefix__17587__auto__",1180445795,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"missing__17591__auto__","missing__17591__auto__",1792844298,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-coll-difference","speclj.core/-coll-difference",805206382,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"prefix__17587__auto__","prefix__17587__auto__",1180445795,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"actual__17589__auto__","actual__17589__auto__",-1476238359,null),null,(1),null))))),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","when-not","cljs.core/when-not",-556141047,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","and","cljs.core/and",-6692549,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","empty?","cljs.core/empty?",1866613644,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"extra__17590__auto__","extra__17590__auto__",-966964547,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","empty?","cljs.core/empty?",1866613644,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"missing__17591__auto__","missing__17591__auto__",1792844298,null),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-fail","speclj.core/-fail",-436223201,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null),null,(1),null)),(new cljs.core.List(null,"Expected ",null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-to-s","speclj.core/-to-s",-1548927580,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"whole__17588__auto__","whole__17588__auto__",-2006367105,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null," to start",null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("speclj.platform","endl","speclj.platform/endl",-1139771306,null),null,(1),null)),(new cljs.core.List(null,"    with ",null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-to-s","speclj.core/-to-s",-1548927580,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"prefix__17587__auto__","prefix__17587__auto__",1180445795,null),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"else","else",-1508377146),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"throw","throw",595905694,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-new-exception","speclj.core/-new-exception",-969354487,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","wrong-types","speclj.core/wrong-types",408672787,null),null,(1),null)),(new cljs.core.List(null,"should-start-with",null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"prefix__17587__auto__","prefix__17587__auto__",1180445795,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"whole__17588__auto__","whole__17588__auto__",-2006367105,null),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)))));
});
(speclj.core.should_start_with.cljs$lang$macro = true);

var ret__5781__auto___17626 = /**
 * The inverse of should-start-with.
 */
speclj.core.should_not_start_with = (function speclj$core$should_not_start_with(_AMPERSAND_form,_AMPERSAND_env,prefix,whole){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"prefix__17601__auto__","prefix__17601__auto__",-1872677158,null),null,(1),null)),(new cljs.core.List(null,prefix,null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"whole__17602__auto__","whole__17602__auto__",-1616140225,null),null,(1),null)),(new cljs.core.List(null,whole,null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","cond","cljs.core/cond",2005388338,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","and","cljs.core/and",-6692549,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"prefix__17601__auto__","prefix__17601__auto__",-1872677158,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"whole__17602__auto__","whole__17602__auto__",-1616140225,null),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","when","cljs.core/when",120293186,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("clojure.string","starts-with?","clojure.string/starts-with?",656256322,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"whole__17602__auto__","whole__17602__auto__",-1616140225,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"prefix__17601__auto__","prefix__17601__auto__",-1872677158,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-fail","speclj.core/-fail",-436223201,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null),null,(1),null)),(new cljs.core.List(null,"Expected \"",null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"whole__17602__auto__","whole__17602__auto__",-1616140225,null),null,(1),null)),(new cljs.core.List(null,"\" to NOT start",null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("speclj.platform","endl","speclj.platform/endl",-1139771306,null),null,(1),null)),(new cljs.core.List(null,"    with \"",null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"prefix__17601__auto__","prefix__17601__auto__",-1872677158,null),null,(1),null)),(new cljs.core.List(null,"\"",null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","and","cljs.core/and",-6692549,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","coll?","cljs.core/coll?",1208130522,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"whole__17602__auto__","whole__17602__auto__",-1616140225,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","coll?","cljs.core/coll?",1208130522,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"prefix__17601__auto__","prefix__17601__auto__",-1872677158,null),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"actual__17603__auto__","actual__17603__auto__",2100666474,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","take","cljs.core/take",439591112,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","count","cljs.core/count",-921270233,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"prefix__17601__auto__","prefix__17601__auto__",-1872677158,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"whole__17602__auto__","whole__17602__auto__",-1616140225,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"extra__17604__auto__","extra__17604__auto__",-1465253350,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-coll-difference","speclj.core/-coll-difference",805206382,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"actual__17603__auto__","actual__17603__auto__",2100666474,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"prefix__17601__auto__","prefix__17601__auto__",-1872677158,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"missing__17605__auto__","missing__17605__auto__",-2105645748,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-coll-difference","speclj.core/-coll-difference",805206382,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"prefix__17601__auto__","prefix__17601__auto__",-1872677158,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"actual__17603__auto__","actual__17603__auto__",2100666474,null),null,(1),null))))),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","when","cljs.core/when",120293186,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","and","cljs.core/and",-6692549,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","empty?","cljs.core/empty?",1866613644,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"extra__17604__auto__","extra__17604__auto__",-1465253350,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","empty?","cljs.core/empty?",1866613644,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"missing__17605__auto__","missing__17605__auto__",-2105645748,null),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-fail","speclj.core/-fail",-436223201,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null),null,(1),null)),(new cljs.core.List(null,"Expected ",null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-to-s","speclj.core/-to-s",-1548927580,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"whole__17602__auto__","whole__17602__auto__",-1616140225,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null," to NOT start",null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("speclj.platform","endl","speclj.platform/endl",-1139771306,null),null,(1),null)),(new cljs.core.List(null,"    with ",null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-to-s","speclj.core/-to-s",-1548927580,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"prefix__17601__auto__","prefix__17601__auto__",-1872677158,null),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"else","else",-1508377146),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"throw","throw",595905694,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-new-exception","speclj.core/-new-exception",-969354487,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","wrong-types","speclj.core/wrong-types",408672787,null),null,(1),null)),(new cljs.core.List(null,"should-not-start-with",null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"prefix__17601__auto__","prefix__17601__auto__",-1872677158,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"whole__17602__auto__","whole__17602__auto__",-1616140225,null),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)))));
});
(speclj.core.should_not_start_with.cljs$lang$macro = true);

var ret__5781__auto___17644 = /**
 * Assertion of suffix in strings and sequences.
 * 
 *   (should-end-with "foo" "foobar")            ; looks for string suffix
 *   (should-end-with [1 2] [1 2 3 4])               ; looks for a subset at end of collection
 */
speclj.core.should_end_with = (function speclj$core$should_end_with(_AMPERSAND_form,_AMPERSAND_env,suffix,whole){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"suffix__17627__auto__","suffix__17627__auto__",-143188667,null),null,(1),null)),(new cljs.core.List(null,suffix,null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"whole__17628__auto__","whole__17628__auto__",292917099,null),null,(1),null)),(new cljs.core.List(null,whole,null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","cond","cljs.core/cond",2005388338,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","and","cljs.core/and",-6692549,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"suffix__17627__auto__","suffix__17627__auto__",-143188667,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"whole__17628__auto__","whole__17628__auto__",292917099,null),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","when-not","cljs.core/when-not",-556141047,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("clojure.string","ends-with?","clojure.string/ends-with?",-745964149,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"whole__17628__auto__","whole__17628__auto__",292917099,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"suffix__17627__auto__","suffix__17627__auto__",-143188667,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"padding__17629__auto__","padding__17629__auto__",936611465,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","apply","cljs.core/apply",1757277831,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","repeat","cljs.core/repeat",-89455077,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","-","cljs.core/-",187040141,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","count","cljs.core/count",-921270233,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"whole__17628__auto__","whole__17628__auto__",292917099,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","count","cljs.core/count",-921270233,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"suffix__17627__auto__","suffix__17627__auto__",-143188667,null),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null," ",null,(1),null))))),null,(1),null))))),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-fail","speclj.core/-fail",-436223201,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null),null,(1),null)),(new cljs.core.List(null,"Expected [",null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"whole__17628__auto__","whole__17628__auto__",292917099,null),null,(1),null)),(new cljs.core.List(null,"] to end\n",null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"padding__17629__auto__","padding__17629__auto__",936611465,null),null,(1),null)),(new cljs.core.List(null,"    with [",null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"suffix__17627__auto__","suffix__17627__auto__",-143188667,null),null,(1),null)),(new cljs.core.List(null,"]",null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","and","cljs.core/and",-6692549,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","coll?","cljs.core/coll?",1208130522,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"whole__17628__auto__","whole__17628__auto__",292917099,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","coll?","cljs.core/coll?",1208130522,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"suffix__17627__auto__","suffix__17627__auto__",-143188667,null),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"actual__17631__auto__","actual__17631__auto__",1580145766,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","take-last","cljs.core/take-last",374295804,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","count","cljs.core/count",-921270233,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"suffix__17627__auto__","suffix__17627__auto__",-143188667,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"whole__17628__auto__","whole__17628__auto__",292917099,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"extra__17632__auto__","extra__17632__auto__",-1897296362,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-coll-difference","speclj.core/-coll-difference",805206382,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"actual__17631__auto__","actual__17631__auto__",1580145766,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"suffix__17627__auto__","suffix__17627__auto__",-143188667,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"missing__17633__auto__","missing__17633__auto__",-947074870,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-coll-difference","speclj.core/-coll-difference",805206382,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"suffix__17627__auto__","suffix__17627__auto__",-143188667,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"actual__17631__auto__","actual__17631__auto__",1580145766,null),null,(1),null))))),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","when-not","cljs.core/when-not",-556141047,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","and","cljs.core/and",-6692549,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","empty?","cljs.core/empty?",1866613644,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"extra__17632__auto__","extra__17632__auto__",-1897296362,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","empty?","cljs.core/empty?",1866613644,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"missing__17633__auto__","missing__17633__auto__",-947074870,null),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"whole__17628__auto__","whole__17628__auto__",292917099,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-to-s","speclj.core/-to-s",-1548927580,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"whole__17628__auto__","whole__17628__auto__",292917099,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"suffix__17627__auto__","suffix__17627__auto__",-143188667,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-to-s","speclj.core/-to-s",-1548927580,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"suffix__17627__auto__","suffix__17627__auto__",-143188667,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"padding__17629__auto__","padding__17629__auto__",936611465,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","apply","cljs.core/apply",1757277831,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","repeat","cljs.core/repeat",-89455077,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","-","cljs.core/-",187040141,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","count","cljs.core/count",-921270233,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"whole__17628__auto__","whole__17628__auto__",292917099,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","count","cljs.core/count",-921270233,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"suffix__17627__auto__","suffix__17627__auto__",-143188667,null),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null," ",null,(1),null))))),null,(1),null))))),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-fail","speclj.core/-fail",-436223201,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null),null,(1),null)),(new cljs.core.List(null,"Expected ",null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"whole__17628__auto__","whole__17628__auto__",292917099,null),null,(1),null)),(new cljs.core.List(null," to end\n",null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"padding__17629__auto__","padding__17629__auto__",936611465,null),null,(1),null)),(new cljs.core.List(null,"    with ",null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"suffix__17627__auto__","suffix__17627__auto__",-143188667,null),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"else","else",-1508377146),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"throw","throw",595905694,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-new-exception","speclj.core/-new-exception",-969354487,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","wrong-types","speclj.core/wrong-types",408672787,null),null,(1),null)),(new cljs.core.List(null,"should-end-with",null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"suffix__17627__auto__","suffix__17627__auto__",-143188667,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"whole__17628__auto__","whole__17628__auto__",292917099,null),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)))));
});
(speclj.core.should_end_with.cljs$lang$macro = true);

var ret__5781__auto___17665 = /**
 * The inverse of should-end-with.
 */
speclj.core.should_not_end_with = (function speclj$core$should_not_end_with(_AMPERSAND_form,_AMPERSAND_env,prefix,whole){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"prefix__17645__auto__","prefix__17645__auto__",909386411,null),null,(1),null)),(new cljs.core.List(null,prefix,null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"whole__17646__auto__","whole__17646__auto__",1979052233,null),null,(1),null)),(new cljs.core.List(null,whole,null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","cond","cljs.core/cond",2005388338,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","and","cljs.core/and",-6692549,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"prefix__17645__auto__","prefix__17645__auto__",909386411,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"whole__17646__auto__","whole__17646__auto__",1979052233,null),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","when","cljs.core/when",120293186,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("clojure.string","ends-with?","clojure.string/ends-with?",-745964149,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"whole__17646__auto__","whole__17646__auto__",1979052233,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"prefix__17645__auto__","prefix__17645__auto__",909386411,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"padding__17647__auto__","padding__17647__auto__",1366743937,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","apply","cljs.core/apply",1757277831,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","repeat","cljs.core/repeat",-89455077,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","-","cljs.core/-",187040141,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","count","cljs.core/count",-921270233,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"whole__17646__auto__","whole__17646__auto__",1979052233,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","count","cljs.core/count",-921270233,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"prefix__17645__auto__","prefix__17645__auto__",909386411,null),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null," ",null,(1),null))))),null,(1),null))))),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-fail","speclj.core/-fail",-436223201,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null),null,(1),null)),(new cljs.core.List(null,"Expected [",null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"whole__17646__auto__","whole__17646__auto__",1979052233,null),null,(1),null)),(new cljs.core.List(null,"] to NOT end\n",null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"padding__17647__auto__","padding__17647__auto__",1366743937,null),null,(1),null)),(new cljs.core.List(null,"    with [",null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"prefix__17645__auto__","prefix__17645__auto__",909386411,null),null,(1),null)),(new cljs.core.List(null,"]",null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","and","cljs.core/and",-6692549,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","coll?","cljs.core/coll?",1208130522,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"whole__17646__auto__","whole__17646__auto__",1979052233,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","coll?","cljs.core/coll?",1208130522,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"prefix__17645__auto__","prefix__17645__auto__",909386411,null),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"actual__17648__auto__","actual__17648__auto__",2086501766,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","take-last","cljs.core/take-last",374295804,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","count","cljs.core/count",-921270233,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"prefix__17645__auto__","prefix__17645__auto__",909386411,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"whole__17646__auto__","whole__17646__auto__",1979052233,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"extra__17649__auto__","extra__17649__auto__",-1076029310,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-coll-difference","speclj.core/-coll-difference",805206382,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"actual__17648__auto__","actual__17648__auto__",2086501766,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"prefix__17645__auto__","prefix__17645__auto__",909386411,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"missing__17650__auto__","missing__17650__auto__",52564791,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-coll-difference","speclj.core/-coll-difference",805206382,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"prefix__17645__auto__","prefix__17645__auto__",909386411,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"actual__17648__auto__","actual__17648__auto__",2086501766,null),null,(1),null))))),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","when","cljs.core/when",120293186,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","and","cljs.core/and",-6692549,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","empty?","cljs.core/empty?",1866613644,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"extra__17649__auto__","extra__17649__auto__",-1076029310,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","empty?","cljs.core/empty?",1866613644,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"missing__17650__auto__","missing__17650__auto__",52564791,null),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"whole__17646__auto__","whole__17646__auto__",1979052233,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-to-s","speclj.core/-to-s",-1548927580,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"whole__17646__auto__","whole__17646__auto__",1979052233,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"prefix__17645__auto__","prefix__17645__auto__",909386411,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-to-s","speclj.core/-to-s",-1548927580,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"prefix__17645__auto__","prefix__17645__auto__",909386411,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"padding__17647__auto__","padding__17647__auto__",1366743937,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","apply","cljs.core/apply",1757277831,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","repeat","cljs.core/repeat",-89455077,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","-","cljs.core/-",187040141,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","count","cljs.core/count",-921270233,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"whole__17646__auto__","whole__17646__auto__",1979052233,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","count","cljs.core/count",-921270233,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"prefix__17645__auto__","prefix__17645__auto__",909386411,null),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null," ",null,(1),null))))),null,(1),null))))),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-fail","speclj.core/-fail",-436223201,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null),null,(1),null)),(new cljs.core.List(null,"Expected ",null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"whole__17646__auto__","whole__17646__auto__",1979052233,null),null,(1),null)),(new cljs.core.List(null," to NOT end\n",null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"padding__17647__auto__","padding__17647__auto__",1366743937,null),null,(1),null)),(new cljs.core.List(null,"    with ",null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"prefix__17645__auto__","prefix__17645__auto__",909386411,null),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"else","else",-1508377146),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"throw","throw",595905694,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-new-exception","speclj.core/-new-exception",-969354487,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","wrong-types","speclj.core/wrong-types",408672787,null),null,(1),null)),(new cljs.core.List(null,"should-not-end-with",null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"prefix__17645__auto__","prefix__17645__auto__",909386411,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"whole__17646__auto__","whole__17646__auto__",1979052233,null),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)))));
});
(speclj.core.should_not_end_with.cljs$lang$macro = true);

var ret__5781__auto___17698 = speclj.core._difference_message = (function speclj$core$_difference_message(_AMPERSAND_form,_AMPERSAND_env,expected,actual,extra,missing){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null),null,(1),null)),(new cljs.core.List(null,"Expected contents: ",null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-to-s","speclj.core/-to-s",-1548927580,null),null,(1),null)),(new cljs.core.List(null,expected,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("speclj.platform","endl","speclj.platform/endl",-1139771306,null),null,(1),null)),(new cljs.core.List(null,"              got: ",null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-to-s","speclj.core/-to-s",-1548927580,null),null,(1),null)),(new cljs.core.List(null,actual,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("speclj.platform","endl","speclj.platform/endl",-1139771306,null),null,(1),null)),(new cljs.core.List(null,"          missing: ",null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-to-s","speclj.core/-to-s",-1548927580,null),null,(1),null)),(new cljs.core.List(null,missing,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("speclj.platform","endl","speclj.platform/endl",-1139771306,null),null,(1),null)),(new cljs.core.List(null,"            extra: ",null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-to-s","speclj.core/-to-s",-1548927580,null),null,(1),null)),(new cljs.core.List(null,extra,null,(1),null))))),null,(1),null)))));
});
(speclj.core._difference_message.cljs$lang$macro = true);

var ret__5781__auto___17710 = /**
 * Asserts 'equivalency'.
 *   When passed collections it will check that they have the same contents.
 *   For anything else it will assert that clojure.core/== returns true.
 */
speclj.core.should_EQ__EQ_ = (function speclj$core$should_EQ__EQ_(_AMPERSAND_form,_AMPERSAND_env,expected,actual){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"expected__17671__auto__","expected__17671__auto__",1014270205,null),null,(1),null)),(new cljs.core.List(null,expected,null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"actual__17672__auto__","actual__17672__auto__",-684743693,null),null,(1),null)),(new cljs.core.List(null,actual,null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","cond","cljs.core/cond",2005388338,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","and","cljs.core/and",-6692549,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","coll?","cljs.core/coll?",1208130522,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"expected__17671__auto__","expected__17671__auto__",1014270205,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","coll?","cljs.core/coll?",1208130522,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"actual__17672__auto__","actual__17672__auto__",-684743693,null),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"extra__17673__auto__","extra__17673__auto__",-1667246738,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-coll-difference","speclj.core/-coll-difference",805206382,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"actual__17672__auto__","actual__17672__auto__",-684743693,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"expected__17671__auto__","expected__17671__auto__",1014270205,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"missing__17674__auto__","missing__17674__auto__",1170825987,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-coll-difference","speclj.core/-coll-difference",805206382,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"expected__17671__auto__","expected__17671__auto__",1014270205,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"actual__17672__auto__","actual__17672__auto__",-684743693,null),null,(1),null))))),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","when-not","cljs.core/when-not",-556141047,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","and","cljs.core/and",-6692549,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","empty?","cljs.core/empty?",1866613644,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"extra__17673__auto__","extra__17673__auto__",-1667246738,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","empty?","cljs.core/empty?",1866613644,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"missing__17674__auto__","missing__17674__auto__",1170825987,null),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-fail","speclj.core/-fail",-436223201,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-difference-message","speclj.core/-difference-message",762568995,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"expected__17671__auto__","expected__17671__auto__",1014270205,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"actual__17672__auto__","actual__17672__auto__",-684743693,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"extra__17673__auto__","extra__17673__auto__",-1667246738,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"missing__17674__auto__","missing__17674__auto__",1170825987,null),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","and","cljs.core/and",-6692549,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","number?","cljs.core/number?",-811857295,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"expected__17671__auto__","expected__17671__auto__",1014270205,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","number?","cljs.core/number?",-811857295,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"actual__17672__auto__","actual__17672__auto__",-684743693,null),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","when-not","cljs.core/when-not",-556141047,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","==","cljs.core/==",-632471488,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"expected__17671__auto__","expected__17671__auto__",1014270205,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"actual__17672__auto__","actual__17672__auto__",-684743693,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-fail","speclj.core/-fail",-436223201,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null),null,(1),null)),(new cljs.core.List(null,"Expected: ",null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-to-s","speclj.core/-to-s",-1548927580,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"expected__17671__auto__","expected__17671__auto__",1014270205,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("speclj.platform","endl","speclj.platform/endl",-1139771306,null),null,(1),null)),(new cljs.core.List(null,"     got: ",null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-to-s","speclj.core/-to-s",-1548927580,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"actual__17672__auto__","actual__17672__auto__",-684743693,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null," (using ==)",null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"else","else",-1508377146),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"throw","throw",595905694,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-new-exception","speclj.core/-new-exception",-969354487,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","wrong-types","speclj.core/wrong-types",408672787,null),null,(1),null)),(new cljs.core.List(null,"should==",null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"expected__17671__auto__","expected__17671__auto__",1014270205,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"actual__17672__auto__","actual__17672__auto__",-684743693,null),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)))));
});
(speclj.core.should_EQ__EQ_.cljs$lang$macro = true);

var ret__5781__auto___17725 = /**
 * Asserts 'non-equivalency'.
 *   When passed collections it will check that they do NOT have the same contents.
 *   For anything else it will assert that clojure.core/== returns false.
 */
speclj.core.should_not_EQ__EQ_ = (function speclj$core$should_not_EQ__EQ_(_AMPERSAND_form,_AMPERSAND_env,expected,actual){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"expected__17711__auto__","expected__17711__auto__",-743828607,null),null,(1),null)),(new cljs.core.List(null,expected,null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"actual__17712__auto__","actual__17712__auto__",-2035674546,null),null,(1),null)),(new cljs.core.List(null,actual,null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","cond","cljs.core/cond",2005388338,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","and","cljs.core/and",-6692549,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","coll?","cljs.core/coll?",1208130522,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"expected__17711__auto__","expected__17711__auto__",-743828607,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","coll?","cljs.core/coll?",1208130522,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"actual__17712__auto__","actual__17712__auto__",-2035674546,null),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"extra__17713__auto__","extra__17713__auto__",1008761868,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-coll-difference","speclj.core/-coll-difference",805206382,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"actual__17712__auto__","actual__17712__auto__",-2035674546,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"expected__17711__auto__","expected__17711__auto__",-743828607,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"missing__17714__auto__","missing__17714__auto__",-321678442,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-coll-difference","speclj.core/-coll-difference",805206382,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"expected__17711__auto__","expected__17711__auto__",-743828607,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"actual__17712__auto__","actual__17712__auto__",-2035674546,null),null,(1),null))))),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","when","cljs.core/when",120293186,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","and","cljs.core/and",-6692549,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","empty?","cljs.core/empty?",1866613644,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"extra__17713__auto__","extra__17713__auto__",1008761868,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","empty?","cljs.core/empty?",1866613644,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"missing__17714__auto__","missing__17714__auto__",-321678442,null),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-fail","speclj.core/-fail",-436223201,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null),null,(1),null)),(new cljs.core.List(null,"Expected contents: ",null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-to-s","speclj.core/-to-s",-1548927580,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"expected__17711__auto__","expected__17711__auto__",-743828607,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("speclj.platform","endl","speclj.platform/endl",-1139771306,null),null,(1),null)),(new cljs.core.List(null,"   to differ from: ",null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-to-s","speclj.core/-to-s",-1548927580,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"actual__17712__auto__","actual__17712__auto__",-2035674546,null),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","and","cljs.core/and",-6692549,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","number?","cljs.core/number?",-811857295,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"expected__17711__auto__","expected__17711__auto__",-743828607,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","number?","cljs.core/number?",-811857295,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"actual__17712__auto__","actual__17712__auto__",-2035674546,null),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","when-not","cljs.core/when-not",-556141047,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","not","cljs.core/not",100665144,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","==","cljs.core/==",-632471488,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"expected__17711__auto__","expected__17711__auto__",-743828607,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"actual__17712__auto__","actual__17712__auto__",-2035674546,null),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-fail","speclj.core/-fail",-436223201,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null),null,(1),null)),(new cljs.core.List(null," Expected: ",null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-to-s","speclj.core/-to-s",-1548927580,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"expected__17711__auto__","expected__17711__auto__",-743828607,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("speclj.platform","endl","speclj.platform/endl",-1139771306,null),null,(1),null)),(new cljs.core.List(null,"not to ==: ",null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-to-s","speclj.core/-to-s",-1548927580,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"actual__17712__auto__","actual__17712__auto__",-2035674546,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null," (using ==)",null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"else","else",-1508377146),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"throw","throw",595905694,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-new-exception","speclj.core/-new-exception",-969354487,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","wrong-types","speclj.core/wrong-types",408672787,null),null,(1),null)),(new cljs.core.List(null,"should-not==",null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"expected__17711__auto__","expected__17711__auto__",-743828607,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"actual__17712__auto__","actual__17712__auto__",-2035674546,null),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)))));
});
(speclj.core.should_not_EQ__EQ_.cljs$lang$macro = true);

var ret__5781__auto___17744 = /**
 * Asserts that the form evaluates to a non-nil value
 */
speclj.core.should_not_be_nil = (function speclj$core$should_not_be_nil(_AMPERSAND_form,_AMPERSAND_env,form){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","should-not=","speclj.core/should-not=",-671600182,null),null,(1),null)),(new cljs.core.List(null,null,null,(1),null)),(new cljs.core.List(null,form,null,(1),null)))));
});
(speclj.core.should_not_be_nil.cljs$lang$macro = true);

var ret__5781__auto___17745 = (function (){
/**
 * Forces a failure. An optional message may be passed in.
 */
speclj.core.should_fail = (function speclj$core$should_fail(var_args){
var G__17727 = arguments.length;
switch (G__17727) {
case 2:
return speclj.core.should_fail.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return speclj.core.should_fail.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (2)))].join('')));

}
});

(speclj.core.should_fail.cljs$core$IFn$_invoke$arity$2 = (function (_AMPERSAND_form,_AMPERSAND_env){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","should-fail","speclj.core/should-fail",1593830201,null),null,(1),null)),(new cljs.core.List(null,"Forced failure",null,(1),null)))));
}));

(speclj.core.should_fail.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,message){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-fail","speclj.core/-fail",-436223201,null),null,(1),null)),(new cljs.core.List(null,message,null,(1),null)))));
}));

(speclj.core.should_fail.cljs$lang$maxFixedArity = 3);

return null;
})()
;
(speclj.core.should_fail.cljs$lang$macro = true);

var ret__5781__auto___17755 = speclj.core._create_should_throw_failure = (function speclj$core$_create_should_throw_failure(_AMPERSAND_form,_AMPERSAND_env,expected,actual,expr){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"expected-name__17740__auto__","expected-name__17740__auto__",584461720,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.platform","type-name","speclj.platform/type-name",-1621971592,null),null,(1),null)),(new cljs.core.List(null,expected,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"expected-gaps__17741__auto__","expected-gaps__17741__auto__",-782762855,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","apply","cljs.core/apply",1757277831,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","repeat","cljs.core/repeat",-89455077,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","count","cljs.core/count",-921270233,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"expected-name__17740__auto__","expected-name__17740__auto__",584461720,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null," ",null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"actual-string__17742__auto__","actual-string__17742__auto__",928550247,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","if-let","cljs.core/if-let",1346583165,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"actual__17743__auto__","actual__17743__auto__",170318718,null),null,(1),null)),(new cljs.core.List(null,actual,null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","pr-str","cljs.core/pr-str",-552799478,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"actual__17743__auto__","actual__17743__auto__",170318718,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,"<nothing thrown>",null,(1),null))))),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-new-failure","speclj.core/-new-failure",1552263542,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null),null,(1),null)),(new cljs.core.List(null,"Expected ",null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"expected-name__17740__auto__","expected-name__17740__auto__",584461720,null),null,(1),null)),(new cljs.core.List(null," thrown from: ",null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","pr-str","cljs.core/pr-str",-552799478,null),null,(1),null)),(new cljs.core.List(null,expr,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("speclj.platform","endl","speclj.platform/endl",-1139771306,null),null,(1),null)),(new cljs.core.List(null,"         ",null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"expected-gaps__17741__auto__","expected-gaps__17741__auto__",-782762855,null),null,(1),null)),(new cljs.core.List(null,"     but got: ",null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"actual-string__17742__auto__","actual-string__17742__auto__",928550247,null),null,(1),null))))),null,(1),null))))),null,(1),null)))));
});
(speclj.core._create_should_throw_failure.cljs$lang$macro = true);

var ret__5781__auto___17824 = (function (){
/**
 * Asserts that a Throwable is throws by the evaluation of a form.
 * When a class is passed, it asserts that the thrown Exception is an instance of the class.
 * There are three options for passing different kinds of predicates:
 *   - If a string, assert that the message of the Exception is equal to the string.
 *   - If a regex, asserts that the message of the Exception matches the regex.
 *   - If a function, assert that calling the function on the Exception returns a truthy value.
 */
speclj.core.should_throw = (function speclj$core$should_throw(var_args){
var G__17764 = arguments.length;
switch (G__17764) {
case 3:
return speclj.core.should_throw.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return speclj.core.should_throw.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return speclj.core.should_throw.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (2)))].join('')));

}
});

(speclj.core.should_throw.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,form){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","should-throw","speclj.core/should-throw",-1013100325,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("speclj.platform","throwable","speclj.platform/throwable",-599125238,null),null,(1),null)),(new cljs.core.List(null,form,null,(1),null)))));
}));

(speclj.core.should_throw.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,throwable_type,form){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","try-catch-anything","speclj.core/try-catch-anything",2038895468,null),null,(1),null)),(new cljs.core.List(null,form,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"throw","throw",595905694,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-create-should-throw-failure","speclj.core/-create-should-throw-failure",2126405641,null),null,(1),null)),(new cljs.core.List(null,throwable_type,null,(1),null)),(new cljs.core.List(null,null,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,form,null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"catch","catch",-1616370245,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"e__17746__auto__","e__17746__auto__",-1032031691,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","cond","cljs.core/cond",2005388338,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.platform","failure?","speclj.platform/failure?",1598725570,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"e__17746__auto__","e__17746__auto__",-1032031691,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"throw","throw",595905694,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"e__17746__auto__","e__17746__auto__",-1032031691,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","not","cljs.core/not",100665144,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","instance?","cljs.core/instance?",2044751870,null),null,(1),null)),(new cljs.core.List(null,throwable_type,null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"e__17746__auto__","e__17746__auto__",-1032031691,null),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"throw","throw",595905694,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-create-should-throw-failure","speclj.core/-create-should-throw-failure",2126405641,null),null,(1),null)),(new cljs.core.List(null,throwable_type,null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"e__17746__auto__","e__17746__auto__",-1032031691,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,form,null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"else","else",-1508377146),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"e__17746__auto__","e__17746__auto__",-1032031691,null),null,(1),null))))),null,(1),null))))),null,(1),null)))));
}));

(speclj.core.should_throw.cljs$core$IFn$_invoke$arity$5 = (function (_AMPERSAND_form,_AMPERSAND_env,throwable_type,predicate,form){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"e__17748__auto__","e__17748__auto__",92166075,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","should-throw","speclj.core/should-throw",-1013100325,null),null,(1),null)),(new cljs.core.List(null,throwable_type,null,(1),null)),(new cljs.core.List(null,form,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"regex__17749__auto__","regex__17749__auto__",-1626692325,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","if-cljs","speclj.core/if-cljs",873977502,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("js","RegExp","js/RegExp",1778210562,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"java.util.regex.Pattern","java.util.regex.Pattern",484813383,null),null,(1),null))))),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","try-catch-anything","speclj.core/try-catch-anything",2038895468,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"predicate__17750__auto__","predicate__17750__auto__",-540380379,null),null,(1),null)),(new cljs.core.List(null,predicate,null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","cond","cljs.core/cond",2005388338,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","instance?","cljs.core/instance?",2044751870,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"regex__17749__auto__","regex__17749__auto__",-1626692325,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"predicate__17750__auto__","predicate__17750__auto__",-540380379,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","should-not-be-nil","speclj.core/should-not-be-nil",962725329,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","re-find","cljs.core/re-find",745076500,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"predicate__17750__auto__","predicate__17750__auto__",-540380379,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.platform","error-message","speclj.platform/error-message",124672328,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"e__17748__auto__","e__17748__auto__",92166075,null),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","ifn?","cljs.core/ifn?",1573873861,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"predicate__17750__auto__","predicate__17750__auto__",-540380379,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","should=","speclj.core/should=",83977914,null),null,(1),null)),(new cljs.core.List(null,true,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"predicate__17750__auto__","predicate__17750__auto__",-540380379,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"e__17748__auto__","e__17748__auto__",92166075,null),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"else","else",-1508377146),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","should=","speclj.core/should=",83977914,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"predicate__17750__auto__","predicate__17750__auto__",-540380379,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.platform","error-message","speclj.platform/error-message",124672328,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"e__17748__auto__","e__17748__auto__",92166075,null),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"catch","catch",-1616370245,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"f__17754__auto__","f__17754__auto__",-1165131361,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-fail","speclj.core/-fail",-436223201,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null),null,(1),null)),(new cljs.core.List(null,"Expected exception predicate didn't match",null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("speclj.platform","endl","speclj.platform/endl",-1139771306,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.platform","error-message","speclj.platform/error-message",124672328,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"f__17754__auto__","f__17754__auto__",-1165131361,null),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)))));
}));

(speclj.core.should_throw.cljs$lang$maxFixedArity = 5);

return null;
})()
;
(speclj.core.should_throw.cljs$lang$macro = true);

var ret__5781__auto___17849 = /**
 * Asserts that nothing is thrown by the evaluation of a form.
 */
speclj.core.should_not_throw = (function speclj$core$should_not_throw(_AMPERSAND_form,_AMPERSAND_env,form){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","try-catch-anything","speclj.core/try-catch-anything",2038895468,null),null,(1),null)),(new cljs.core.List(null,form,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"catch","catch",-1616370245,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"e__17825__auto__","e__17825__auto__",1031248005,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-fail","speclj.core/-fail",-436223201,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null),null,(1),null)),(new cljs.core.List(null,"Expected nothing thrown from: ",null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","pr-str","cljs.core/pr-str",-552799478,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,form,null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("speclj.platform","endl","speclj.platform/endl",-1139771306,null),null,(1),null)),(new cljs.core.List(null,"                     but got: ",null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","pr-str","cljs.core/pr-str",-552799478,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"e__17825__auto__","e__17825__auto__",1031248005,null),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)))));
});
(speclj.core.should_not_throw.cljs$lang$macro = true);

var ret__5781__auto___17858 = /**
 * Asserts that the type of the given form derives from or equals the expected type
 */
speclj.core.should_be_a = (function speclj$core$should_be_a(_AMPERSAND_form,_AMPERSAND_env,expected_type,actual_form){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"actual__17834__auto__","actual__17834__auto__",851022884,null),null,(1),null)),(new cljs.core.List(null,actual_form,null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"actual-type__17835__auto__","actual-type__17835__auto__",722204640,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","type","cljs.core/type",-821761154,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"actual__17834__auto__","actual__17834__auto__",851022884,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"expected-type__17836__auto__","expected-type__17836__auto__",-1610250765,null),null,(1),null)),(new cljs.core.List(null,expected_type,null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","when-not","cljs.core/when-not",-556141047,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","isa?","cljs.core/isa?",951980347,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"actual-type__17835__auto__","actual-type__17835__auto__",722204640,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"expected-type__17836__auto__","expected-type__17836__auto__",-1610250765,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-fail","speclj.core/-fail",-436223201,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null),null,(1),null)),(new cljs.core.List(null,"Expected ",null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-to-s","speclj.core/-to-s",-1548927580,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"actual__17834__auto__","actual__17834__auto__",851022884,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null," to be an instance of: ",null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-to-s","speclj.core/-to-s",-1548927580,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"expected-type__17836__auto__","expected-type__17836__auto__",-1610250765,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("speclj.platform","endl","speclj.platform/endl",-1139771306,null),null,(1),null)),(new cljs.core.List(null,"           but was an instance of: ",null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-to-s","speclj.core/-to-s",-1548927580,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"actual-type__17835__auto__","actual-type__17835__auto__",722204640,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null," (using isa?)",null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)))));
});
(speclj.core.should_be_a.cljs$lang$macro = true);

var ret__5781__auto___17865 = /**
 * Asserts that the type of the given form does not derive from or equal the expected type
 */
speclj.core.should_not_be_a = (function speclj$core$should_not_be_a(_AMPERSAND_form,_AMPERSAND_env,expected_type,actual_form){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"actual__17846__auto__","actual__17846__auto__",2000076159,null),null,(1),null)),(new cljs.core.List(null,actual_form,null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"actual-type__17847__auto__","actual-type__17847__auto__",-845057680,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","type","cljs.core/type",-821761154,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"actual__17846__auto__","actual__17846__auto__",2000076159,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"expected-type__17848__auto__","expected-type__17848__auto__",1628448219,null),null,(1),null)),(new cljs.core.List(null,expected_type,null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","when","cljs.core/when",120293186,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","isa?","cljs.core/isa?",951980347,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"actual-type__17847__auto__","actual-type__17847__auto__",-845057680,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"expected-type__17848__auto__","expected-type__17848__auto__",1628448219,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-fail","speclj.core/-fail",-436223201,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null),null,(1),null)),(new cljs.core.List(null,"Expected ",null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-to-s","speclj.core/-to-s",-1548927580,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"actual__17846__auto__","actual__17846__auto__",2000076159,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null," not to be an instance of ",null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-to-s","speclj.core/-to-s",-1548927580,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"expected-type__17848__auto__","expected-type__17848__auto__",1628448219,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null," but was (using isa?)",null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)))));
});
(speclj.core.should_not_be_a.cljs$lang$macro = true);

var ret__5781__auto___17872 = (function (){
/**
 * When added to a characteristic, it is marked as pending.  If a message is provided it will be printed
 *   in the run report
 */
speclj.core.pending = (function speclj$core$pending(var_args){
var G__17857 = arguments.length;
switch (G__17857) {
case 2:
return speclj.core.pending.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return speclj.core.pending.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (2)))].join('')));

}
});

(speclj.core.pending.cljs$core$IFn$_invoke$arity$2 = (function (_AMPERSAND_form,_AMPERSAND_env){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","pending","speclj.core/pending",-571433532,null),null,(1),null)),(new cljs.core.List(null,"Not Yet Implemented",null,(1),null)))));
}));

(speclj.core.pending.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,message){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"throw","throw",595905694,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-new-pending","speclj.core/-new-pending",-74755942,null),null,(1),null)),(new cljs.core.List(null,message,null,(1),null))))),null,(1),null)))));
}));

(speclj.core.pending.cljs$lang$maxFixedArity = 3);

return null;
})()
;
(speclj.core.pending.cljs$lang$macro = true);

var ret__5781__auto___17876 = (function (){
/**
 * Add tags to the containing context.  All values passed will be converted into keywords.  Contexts can be filtered
 *   at runtime by their tags.
 * 
 *   (tags :one :two)
 */
speclj.core.tags = (function speclj$core$tags(var_args){
var args__5732__auto__ = [];
var len__5726__auto___17877 = arguments.length;
var i__5727__auto___17878 = (0);
while(true){
if((i__5727__auto___17878 < len__5726__auto___17877)){
args__5732__auto__.push((arguments[i__5727__auto___17878]));

var G__17879 = (i__5727__auto___17878 + (1));
i__5727__auto___17878 = G__17879;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((2) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((2)),(0),null)):null);
return speclj.core.tags.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5733__auto__);
});

(speclj.core.tags.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,values){
var tag_kws = cljs.core.mapv.call(null,cljs.core.keyword,values);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","mapv","cljs.core/mapv",433728488,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("speclj.components","new-tag","speclj.components/new-tag",-1937226080,null),null,(1),null)),(new cljs.core.List(null,tag_kws,null,(1),null)))));
}));

(speclj.core.tags.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(speclj.core.tags.cljs$lang$applyTo = (function (seq17862){
var G__17863 = cljs.core.first.call(null,seq17862);
var seq17862__$1 = cljs.core.next.call(null,seq17862);
var G__17864 = cljs.core.first.call(null,seq17862__$1);
var seq17862__$2 = cljs.core.next.call(null,seq17862__$1);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__17863,G__17864,seq17862__$2);
}));

return null;
})()
;
(speclj.core.tags.cljs$lang$macro = true);

var ret__5781__auto___17886 = /**
 * Add this to describe/context blocks that use stubs.  It will set up a clean recording environment.
 */
speclj.core.with_stubs = (function speclj$core$with_stubs(_AMPERSAND_form,_AMPERSAND_env){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","around","speclj.core/around",649826642,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"it__17871__auto__","it__17871__auto__",1969130777,null),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","with-redefs","cljs.core/with-redefs",1134293954,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.stub","*stubbed-invocations*","speclj.stub/*stubbed-invocations*",-474598582,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","atom","cljs.core/atom",1943839529,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null)))),null,(1),null))))),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"it__17871__auto__","it__17871__auto__",1969130777,null),null,(1),null))))),null,(1),null))))),null,(1),null)))));
});
(speclj.core.with_stubs.cljs$lang$macro = true);

var ret__5781__auto___17896 = (function (){
/**
 * Creates a stub function.  Each call to the stub will be recorded and can later be looked up using the specified name.
 * 
 *   Options:
 *  :invoke - a function that will be invoked when the stub is invoked.  All the arguments passed to the stub will
 *    be passed to the :invoke value and its return value returned by the stub.
 *  :return - a value that will be returned by the stub.  This overrides the result of the :invoke value, if specified.
 *  :throw - an exception that will be thrown by the stub.
 */
speclj.core.stub = (function speclj$core$stub(var_args){
var G__17875 = arguments.length;
switch (G__17875) {
case 3:
return speclj.core.stub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return speclj.core.stub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (2)))].join('')));

}
});

(speclj.core.stub.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,name){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.stub","stub","speclj.stub/stub",977871771,null),null,(1),null)),(new cljs.core.List(null,name,null,(1),null)),(new cljs.core.List(null,cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null)))),null,(1),null)))));
}));

(speclj.core.stub.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,name,options){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.stub","stub","speclj.stub/stub",977871771,null),null,(1),null)),(new cljs.core.List(null,name,null,(1),null)),(new cljs.core.List(null,options,null,(1),null)))));
}));

(speclj.core.stub.cljs$lang$maxFixedArity = 4);

return null;
})()
;
(speclj.core.stub.cljs$lang$macro = true);

var ret__5781__auto___17950 = (function (){
/**
 * Checks for invocations of the specified stub.
 * 
 *   Options:
 *  :times - the number of times the stub should have been invoked. nil means at least once. (default: nil)
 *  :with - a list of arguments that the stubs should have been invoked with.
 *    If not specified, anything goes.  Special expected arguments include:
 *     :* - matches anything
 *     a fn - matches when the actual is the same fn or calling fn with the actual argument returns true
 * 
 *   Example:
 *   (let [foo (stub :foo)]
 *  (should-have-invoked :foo {:with [1] :times 3}) ; fail
 *  (foo 1)
 *  (foo 2)
 *  (should-have-invoked :foo {:with [1] :times 3}) ; fail
 *  (should-have-invoked :foo {:with [1] :times 1}) ; pass
 *  (should-have-invoked :foo {:with [2] :times 1}) ; pass
 *  (should-have-invoked :foo {:times 3}) ; fail
 *  (should-have-invoked :foo {:times 2}) ; pass
 *  (should-have-invoked :foo {:times 1}) ; fail
 *  (should-have-invoked :foo {:with [1]}) ; pass
 *  (should-have-invoked :foo {:with [2]}) ; pass
 *  )
 */
speclj.core.should_have_invoked = (function speclj$core$should_have_invoked(var_args){
var G__17912 = arguments.length;
switch (G__17912) {
case 3:
return speclj.core.should_have_invoked.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return speclj.core.should_have_invoked.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (2)))].join('')));

}
});

(speclj.core.should_have_invoked.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,name){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","should-have-invoked","speclj.core/should-have-invoked",-864349238,null),null,(1),null)),(new cljs.core.List(null,name,null,(1),null)),(new cljs.core.List(null,cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null)))),null,(1),null)))));
}));

(speclj.core.should_have_invoked.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,name,options){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"name__17893__auto__","name__17893__auto__",-1909047969,null),null,(1),null)),(new cljs.core.List(null,name,null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"options__17894__auto__","options__17894__auto__",727082829,null),null,(1),null)),(new cljs.core.List(null,options,null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"invocations__17895__auto__","invocations__17895__auto__",179825022,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.stub","invocations-of","speclj.stub/invocations-of",1244579949,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"name__17893__auto__","name__17893__auto__",-1909047969,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"times__17897__auto__","times__17897__auto__",533289531,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Keyword(null,"times","times",1671571467),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"options__17894__auto__","options__17894__auto__",727082829,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"times?__17898__auto__","times?__17898__auto__",489588582,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","number?","cljs.core/number?",-811857295,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"times__17897__auto__","times__17897__auto__",533289531,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"check-params?__17899__auto__","check-params?__17899__auto__",-515817173,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"options__17894__auto__","options__17894__auto__",727082829,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"with","with",-1536296876),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"with__17900__auto__","with__17900__auto__",-859533970,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Keyword(null,"with","with",-1536296876),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"options__17894__auto__","options__17894__auto__",727082829,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"with__17900__auto__","with__17900__auto__",-859533970,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","nil?","cljs.core/nil?",945071861,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"with__17900__auto__","with__17900__auto__",-859533970,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null)))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"with__17900__auto__","with__17900__auto__",-859533970,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"invocations-str__17901__auto__","invocations-str__17901__auto__",-468940637,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"p1__17890__17902__auto__","p1__17890__17902__auto__",949469672,null),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","=","cljs.core/=",-1891498332,null),null,(1),null)),(new cljs.core.List(null,(1),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"p1__17890__17902__auto__","p1__17890__17902__auto__",949469672,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,"invocation",null,(1),null)),(new cljs.core.List(null,"invocations",null,(1),null))))),null,(1),null))))),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","cond","cljs.core/cond",2005388338,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","and","cljs.core/and",-6692549,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"times?__17898__auto__","times?__17898__auto__",489588582,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"check-params?__17899__auto__","check-params?__17899__auto__",-515817173,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"matching-invocations__17906__auto__","matching-invocations__17906__auto__",-1003027356,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","filter","cljs.core/filter",-251894204,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"p1__17891__17907__auto__","p1__17891__17907__auto__",1103839870,null),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.stub","params-match?","speclj.stub/params-match?",-1909506443,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"with__17900__auto__","with__17900__auto__",-859533970,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"p1__17891__17907__auto__","p1__17891__17907__auto__",1103839870,null),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"invocations__17895__auto__","invocations__17895__auto__",179825022,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"matching-count__17909__auto__","matching-count__17909__auto__",-1987066943,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","count","cljs.core/count",-921270233,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"matching-invocations__17906__auto__","matching-invocations__17906__auto__",-1003027356,null),null,(1),null))))),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","when-not","cljs.core/when-not",-556141047,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","=","cljs.core/=",-1891498332,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"times__17897__auto__","times__17897__auto__",533289531,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"matching-count__17909__auto__","matching-count__17909__auto__",-1987066943,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-fail","speclj.core/-fail",-436223201,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null),null,(1),null)),(new cljs.core.List(null,"Expected: ",null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"times__17897__auto__","times__17897__auto__",533289531,null),null,(1),null)),(new cljs.core.List(null," ",null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"invocations-str__17901__auto__","invocations-str__17901__auto__",-468940637,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"times__17897__auto__","times__17897__auto__",533289531,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null," of ",null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"name__17893__auto__","name__17893__auto__",-1909047969,null),null,(1),null)),(new cljs.core.List(null," with ",null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","pr-str","cljs.core/pr-str",-552799478,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"with__17900__auto__","with__17900__auto__",-859533970,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("speclj.platform","endl","speclj.platform/endl",-1139771306,null),null,(1),null)),(new cljs.core.List(null,"     got: ",null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"matching-count__17909__auto__","matching-count__17909__auto__",-1987066943,null),null,(1),null)),(new cljs.core.List(null," ",null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"invocations-str__17901__auto__","invocations-str__17901__auto__",-468940637,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"matching-count__17909__auto__","matching-count__17909__auto__",-1987066943,null),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"check-params?__17899__auto__","check-params?__17899__auto__",-515817173,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","when-not","cljs.core/when-not",-556141047,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","some","cljs.core/some",-977628065,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"p1__17892__17910__auto__","p1__17892__17910__auto__",-1266826207,null),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.stub","params-match?","speclj.stub/params-match?",-1909506443,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"with__17900__auto__","with__17900__auto__",-859533970,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"p1__17892__17910__auto__","p1__17892__17910__auto__",-1266826207,null),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"invocations__17895__auto__","invocations__17895__auto__",179825022,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-fail","speclj.core/-fail",-436223201,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null),null,(1),null)),(new cljs.core.List(null,"Expected: invocation of ",null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"name__17893__auto__","name__17893__auto__",-1909047969,null),null,(1),null)),(new cljs.core.List(null," with ",null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","pr-str","cljs.core/pr-str",-552799478,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"with__17900__auto__","with__17900__auto__",-859533970,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("speclj.platform","endl","speclj.platform/endl",-1139771306,null),null,(1),null)),(new cljs.core.List(null,"     got: ",null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","pr-str","cljs.core/pr-str",-552799478,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"invocations__17895__auto__","invocations__17895__auto__",179825022,null),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"times?__17898__auto__","times?__17898__auto__",489588582,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","when-not","cljs.core/when-not",-556141047,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","=","cljs.core/=",-1891498332,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"times__17897__auto__","times__17897__auto__",533289531,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","count","cljs.core/count",-921270233,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"invocations__17895__auto__","invocations__17895__auto__",179825022,null),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-fail","speclj.core/-fail",-436223201,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null),null,(1),null)),(new cljs.core.List(null,"Expected: ",null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"times__17897__auto__","times__17897__auto__",533289531,null),null,(1),null)),(new cljs.core.List(null," ",null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"invocations-str__17901__auto__","invocations-str__17901__auto__",-468940637,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"times__17897__auto__","times__17897__auto__",533289531,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null," of ",null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"name__17893__auto__","name__17893__auto__",-1909047969,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("speclj.platform","endl","speclj.platform/endl",-1139771306,null),null,(1),null)),(new cljs.core.List(null,"     got: ",null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","count","cljs.core/count",-921270233,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"invocations__17895__auto__","invocations__17895__auto__",179825022,null),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"else","else",-1508377146),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","when-not","cljs.core/when-not",-556141047,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","seq","cljs.core/seq",-1649497689,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"invocations__17895__auto__","invocations__17895__auto__",179825022,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-fail","speclj.core/-fail",-436223201,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null),null,(1),null)),(new cljs.core.List(null,"Expected: an invocation of ",null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"name__17893__auto__","name__17893__auto__",-1909047969,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("speclj.platform","endl","speclj.platform/endl",-1139771306,null),null,(1),null)),(new cljs.core.List(null,"     got: ",null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","count","cljs.core/count",-921270233,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"invocations__17895__auto__","invocations__17895__auto__",179825022,null),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)))));
}));

(speclj.core.should_have_invoked.cljs$lang$maxFixedArity = 4);

return null;
})()
;
(speclj.core.should_have_invoked.cljs$lang$macro = true);

var ret__5781__auto___17994 = (function (){
/**
 * Inverse of should-have-invoked.
 * 
 *   Options:
 *  :times - the number of times the stub should not have been invoked. nil means never. (default: nil)
 *  :with - a list of arguments that the stubs should not have been invoked with.
 *    If not specified, anything goes. Special expected arguments include:
 *     :* - matches anything
 *     a fn - matches when the actual is the same fn or calling fn with the actual argument returns true
 * 
 *   Example:
 *   (let [foo (stub :foo)]
 *  (should-not-have-invoked :foo {:with [1] :times 3}) ; pass
 *  (foo 1)
 *  (should-not-have-invoked :foo {:with [1] :times 3}) ; pass
 *  (should-not-have-invoked :foo {:with [1] :times 1}) ; fail
 *  (should-not-have-invoked :foo {:times 3}) ; pass
 *  (should-not-have-invoked :foo {:times 1}) ; fail
 *  (should-not-have-invoked :foo {:with [1]}) ; fail
 *  )
 */
speclj.core.should_not_have_invoked = (function speclj$core$should_not_have_invoked(var_args){
var G__17976 = arguments.length;
switch (G__17976) {
case 3:
return speclj.core.should_not_have_invoked.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return speclj.core.should_not_have_invoked.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (2)))].join('')));

}
});

(speclj.core.should_not_have_invoked.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,name){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","should-not-have-invoked","speclj.core/should-not-have-invoked",1793584684,null),null,(1),null)),(new cljs.core.List(null,name,null,(1),null)),(new cljs.core.List(null,cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null)))),null,(1),null)))));
}));

(speclj.core.should_not_have_invoked.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,name,options){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"name__17962__auto__","name__17962__auto__",74690399,null),null,(1),null)),(new cljs.core.List(null,name,null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"options__17963__auto__","options__17963__auto__",88564514,null),null,(1),null)),(new cljs.core.List(null,options,null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"invocations__17964__auto__","invocations__17964__auto__",-1483648739,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.stub","invocations-of","speclj.stub/invocations-of",1244579949,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"name__17962__auto__","name__17962__auto__",74690399,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"times__17965__auto__","times__17965__auto__",-1582313845,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Keyword(null,"times","times",1671571467),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"options__17963__auto__","options__17963__auto__",88564514,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"times?__17966__auto__","times?__17966__auto__",-80786694,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","number?","cljs.core/number?",-811857295,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"times__17965__auto__","times__17965__auto__",-1582313845,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"check-params?__17967__auto__","check-params?__17967__auto__",-1566385442,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"options__17963__auto__","options__17963__auto__",88564514,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"with","with",-1536296876),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"with__17968__auto__","with__17968__auto__",1852537995,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Keyword(null,"with","with",-1536296876),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"options__17963__auto__","options__17963__auto__",88564514,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"with__17968__auto__","with__17968__auto__",1852537995,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","nil?","cljs.core/nil?",945071861,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"with__17968__auto__","with__17968__auto__",1852537995,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null)))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"with__17968__auto__","with__17968__auto__",1852537995,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"add-s__17969__auto__","add-s__17969__auto__",-884139351,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"p1__17952__17970__auto__","p1__17952__17970__auto__",204725593,null),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","=","cljs.core/=",-1891498332,null),null,(1),null)),(new cljs.core.List(null,(1),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"p1__17952__17970__auto__","p1__17952__17970__auto__",204725593,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,"",null,(1),null)),(new cljs.core.List(null,"s",null,(1),null))))),null,(1),null))))),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","cond","cljs.core/cond",2005388338,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","and","cljs.core/and",-6692549,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"times?__17966__auto__","times?__17966__auto__",-80786694,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"check-params?__17967__auto__","check-params?__17967__auto__",-1566385442,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"matching-invocations__17971__auto__","matching-invocations__17971__auto__",-72519743,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","filter","cljs.core/filter",-251894204,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"p1__17953__17972__auto__","p1__17953__17972__auto__",1634111935,null),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.stub","params-match?","speclj.stub/params-match?",-1909506443,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"with__17968__auto__","with__17968__auto__",1852537995,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"p1__17953__17972__auto__","p1__17953__17972__auto__",1634111935,null),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"invocations__17964__auto__","invocations__17964__auto__",-1483648739,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"matching-count__17973__auto__","matching-count__17973__auto__",1106905433,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","count","cljs.core/count",-921270233,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"matching-invocations__17971__auto__","matching-invocations__17971__auto__",-72519743,null),null,(1),null))))),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","when","cljs.core/when",120293186,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","=","cljs.core/=",-1891498332,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"times__17965__auto__","times__17965__auto__",-1582313845,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"matching-count__17973__auto__","matching-count__17973__auto__",1106905433,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-fail","speclj.core/-fail",-436223201,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null),null,(1),null)),(new cljs.core.List(null,"Expected: ",null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"name__17962__auto__","name__17962__auto__",74690399,null),null,(1),null)),(new cljs.core.List(null," not to have been invoked ",null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"times__17965__auto__","times__17965__auto__",-1582313845,null),null,(1),null)),(new cljs.core.List(null," time",null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"add-s__17969__auto__","add-s__17969__auto__",-884139351,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"matching-count__17973__auto__","matching-count__17973__auto__",1106905433,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null," with ",null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","pr-str","cljs.core/pr-str",-552799478,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"with__17968__auto__","with__17968__auto__",1852537995,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("speclj.platform","endl","speclj.platform/endl",-1139771306,null),null,(1),null)),(new cljs.core.List(null,"     got: ",null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"matching-count__17973__auto__","matching-count__17973__auto__",1106905433,null),null,(1),null)),(new cljs.core.List(null," invocation",null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"add-s__17969__auto__","add-s__17969__auto__",-884139351,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"matching-count__17973__auto__","matching-count__17973__auto__",1106905433,null),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"times?__17966__auto__","times?__17966__auto__",-80786694,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","when","cljs.core/when",120293186,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","=","cljs.core/=",-1891498332,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"times__17965__auto__","times__17965__auto__",-1582313845,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","count","cljs.core/count",-921270233,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"invocations__17964__auto__","invocations__17964__auto__",-1483648739,null),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-fail","speclj.core/-fail",-436223201,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null),null,(1),null)),(new cljs.core.List(null,"Expected: ",null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"name__17962__auto__","name__17962__auto__",74690399,null),null,(1),null)),(new cljs.core.List(null," not to have been invoked ",null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"times__17965__auto__","times__17965__auto__",-1582313845,null),null,(1),null)),(new cljs.core.List(null," time",null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"add-s__17969__auto__","add-s__17969__auto__",-884139351,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"times__17965__auto__","times__17965__auto__",-1582313845,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("speclj.platform","endl","speclj.platform/endl",-1139771306,null),null,(1),null)),(new cljs.core.List(null,"     got: ",null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"times__17965__auto__","times__17965__auto__",-1582313845,null),null,(1),null)),(new cljs.core.List(null," invocation",null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"add-s__17969__auto__","add-s__17969__auto__",-884139351,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"times__17965__auto__","times__17965__auto__",-1582313845,null),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"check-params?__17967__auto__","check-params?__17967__auto__",-1566385442,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","when","cljs.core/when",120293186,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","some","cljs.core/some",-977628065,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"p1__17961__17974__auto__","p1__17961__17974__auto__",-498600750,null),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.stub","params-match?","speclj.stub/params-match?",-1909506443,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"with__17968__auto__","with__17968__auto__",1852537995,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"p1__17961__17974__auto__","p1__17961__17974__auto__",-498600750,null),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"invocations__17964__auto__","invocations__17964__auto__",-1483648739,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-fail","speclj.core/-fail",-436223201,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null),null,(1),null)),(new cljs.core.List(null,"Expected: ",null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"name__17962__auto__","name__17962__auto__",74690399,null),null,(1),null)),(new cljs.core.List(null," not to have been invoked with ",null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","pr-str","cljs.core/pr-str",-552799478,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"with__17968__auto__","with__17968__auto__",1852537995,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("speclj.platform","endl","speclj.platform/endl",-1139771306,null),null,(1),null)),(new cljs.core.List(null,"     got: ",null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","pr-str","cljs.core/pr-str",-552799478,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"invocations__17964__auto__","invocations__17964__auto__",-1483648739,null),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"else","else",-1508377146),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","when","cljs.core/when",120293186,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","seq","cljs.core/seq",-1649497689,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"invocations__17964__auto__","invocations__17964__auto__",-1483648739,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-fail","speclj.core/-fail",-436223201,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null),null,(1),null)),(new cljs.core.List(null,"Expected: 0 invocations of ",null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"name__17962__auto__","name__17962__auto__",74690399,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("speclj.platform","endl","speclj.platform/endl",-1139771306,null),null,(1),null)),(new cljs.core.List(null,"     got: ",null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","count","cljs.core/count",-921270233,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"invocations__17964__auto__","invocations__17964__auto__",-1483648739,null),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)))));
}));

(speclj.core.should_not_have_invoked.cljs$lang$maxFixedArity = 4);

return null;
})()
;
(speclj.core.should_not_have_invoked.cljs$lang$macro = true);

speclj.core._STAR_bound_by_should_invoke_STAR_ = false;
var ret__5781__auto___18074 = speclj.core.bound_by_should_invoke_QMARK_ = (function speclj$core$bound_by_should_invoke_QMARK_(_AMPERSAND_form,_AMPERSAND_env){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","if-cljs","speclj.core/if-cljs",873977502,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","*bound-by-should-invoke*","speclj.core/*bound-by-should-invoke*",-207459510,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","and","cljs.core/and",-6692549,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","bound?","speclj.core/bound?",-726786538,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"var","var",870848730,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","*bound-by-should-invoke*","speclj.core/*bound-by-should-invoke*",-207459510,null),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","*bound-by-should-invoke*","speclj.core/*bound-by-should-invoke*",-207459510,null),null,(1),null))))),null,(1),null)))));
});
(speclj.core.bound_by_should_invoke_QMARK_.cljs$lang$macro = true);

var ret__5781__auto___18075 = (function (){
speclj.core.with_stubbed_invocations = (function speclj$core$with_stubbed_invocations(var_args){
var args__5732__auto__ = [];
var len__5726__auto___18076 = arguments.length;
var i__5727__auto___18077 = (0);
while(true){
if((i__5727__auto___18077 < len__5726__auto___18076)){
args__5732__auto__.push((arguments[i__5727__auto___18077]));

var G__18078 = (i__5727__auto___18077 + (1));
i__5727__auto___18077 = G__18078;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((2) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((2)),(0),null)):null);
return speclj.core.with_stubbed_invocations.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5733__auto__);
});

(speclj.core.with_stubbed_invocations.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","not","cljs.core/not",100665144,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.platform","bound-by-should-invoke?","speclj.platform/bound-by-should-invoke?",2142036973,null),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","with-redefs","cljs.core/with-redefs",1134293954,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.stub","*stubbed-invocations*","speclj.stub/*stubbed-invocations*",-474598582,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","atom","cljs.core/atom",1943839529,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null)))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("speclj.platform","*bound-by-should-invoke*","speclj.platform/*bound-by-should-invoke*",-572267866,null),null,(1),null)),(new cljs.core.List(null,true,null,(1),null)))))),null,(1),null)),body))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),body))),null,(1),null)))));
}));

(speclj.core.with_stubbed_invocations.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(speclj.core.with_stubbed_invocations.cljs$lang$applyTo = (function (seq17997){
var G__17998 = cljs.core.first.call(null,seq17997);
var seq17997__$1 = cljs.core.next.call(null,seq17997);
var G__17999 = cljs.core.first.call(null,seq17997__$1);
var seq17997__$2 = cljs.core.next.call(null,seq17997__$1);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__17998,G__17999,seq17997__$2);
}));

return null;
})()
;
(speclj.core.with_stubbed_invocations.cljs$lang$macro = true);

var ret__5781__auto___18079 = (function (){
/**
 * Creates a stub, and binds it to the specified var, evaluates the body, and checks the invocations.
 * 
 *   (should-invoke reverse {:with [1 2 3] :return []} (reverse [1 2 3]))
 * 
 *   See stub and should-have-invoked for valid options.
 */
speclj.core.should_invoke = (function speclj$core$should_invoke(var_args){
var args__5732__auto__ = [];
var len__5726__auto___18080 = arguments.length;
var i__5727__auto___18081 = (0);
while(true){
if((i__5727__auto___18081 < len__5726__auto___18080)){
args__5732__auto__.push((arguments[i__5727__auto___18081]));

var G__18082 = (i__5727__auto___18081 + (1));
i__5727__auto___18081 = G__18082;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((4) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((4)),(0),null)):null);
return speclj.core.should_invoke.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__5733__auto__);
});

(speclj.core.should_invoke.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,var$,options,body){
if(cljs.core.map_QMARK_.call(null,options)){
} else {
cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"throw","throw",595905694,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-new-exception","speclj.core/-new-exception",-969354487,null),null,(1),null)),(new cljs.core.List(null,"The second argument to should-invoke must be a map of options",null,(1),null))))),null,(1),null)))));
}

var var_name = cljs.core.str.cljs$core$IFn$_invoke$arity$1(var$);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"options__18012__auto__","options__18012__auto__",209263362,null),null,(1),null)),(new cljs.core.List(null,options,null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","with-stubbed-invocations","speclj.core/with-stubbed-invocations",-469130005,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","with-redefs","cljs.core/with-redefs",1134293954,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,var$,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.stub","stub","speclj.stub/stub",977871771,null),null,(1),null)),(new cljs.core.List(null,var_name,null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"options__18012__auto__","options__18012__auto__",209263362,null),null,(1),null))))),null,(1),null)))))),null,(1),null)),body))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","should-have-invoked","speclj.core/should-have-invoked",-864349238,null),null,(1),null)),(new cljs.core.List(null,var_name,null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"options__18012__auto__","options__18012__auto__",209263362,null),null,(1),null))))),null,(1),null))))),null,(1),null)))));
}));

(speclj.core.should_invoke.cljs$lang$maxFixedArity = (4));

/** @this {Function} */
(speclj.core.should_invoke.cljs$lang$applyTo = (function (seq18013){
var G__18014 = cljs.core.first.call(null,seq18013);
var seq18013__$1 = cljs.core.next.call(null,seq18013);
var G__18015 = cljs.core.first.call(null,seq18013__$1);
var seq18013__$2 = cljs.core.next.call(null,seq18013__$1);
var G__18016 = cljs.core.first.call(null,seq18013__$2);
var seq18013__$3 = cljs.core.next.call(null,seq18013__$2);
var G__18017 = cljs.core.first.call(null,seq18013__$3);
var seq18013__$4 = cljs.core.next.call(null,seq18013__$3);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18014,G__18015,G__18016,G__18017,seq18013__$4);
}));

return null;
})()
;
(speclj.core.should_invoke.cljs$lang$macro = true);

var ret__5781__auto___18085 = (function (){
/**
 * Creates a stub, and binds it to the specified var, evaluates the body, and checks that it was NOT invoked.
 * 
 *   (should-not-invoke reverse {:with [1 2 3] :return [] :times 2} (reverse [1 2 3])) ; pass
 *   (should-not-invoke reverse {:with [1 2 3] :return []} (reverse [1 2 3])) ; fail
 * 
 *   See stub and should-not-have-invoked for valid options.
 */
speclj.core.should_not_invoke = (function speclj$core$should_not_invoke(var_args){
var args__5732__auto__ = [];
var len__5726__auto___18086 = arguments.length;
var i__5727__auto___18087 = (0);
while(true){
if((i__5727__auto___18087 < len__5726__auto___18086)){
args__5732__auto__.push((arguments[i__5727__auto___18087]));

var G__18088 = (i__5727__auto___18087 + (1));
i__5727__auto___18087 = G__18088;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((4) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((4)),(0),null)):null);
return speclj.core.should_not_invoke.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__5733__auto__);
});

(speclj.core.should_not_invoke.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,var$,options,body){
if(cljs.core.map_QMARK_.call(null,options)){
} else {
cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"throw","throw",595905694,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-new-exception","speclj.core/-new-exception",-969354487,null),null,(1),null)),(new cljs.core.List(null,"The second argument to should-not-invoke must be a map of options",null,(1),null))))),null,(1),null)))));
}

var var_name = cljs.core.str.cljs$core$IFn$_invoke$arity$1(var$);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"options__18068__auto__","options__18068__auto__",1100980201,null),null,(1),null)),(new cljs.core.List(null,options,null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","with-stubbed-invocations","speclj.core/with-stubbed-invocations",-469130005,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","with-redefs","cljs.core/with-redefs",1134293954,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,var$,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.stub","stub","speclj.stub/stub",977871771,null),null,(1),null)),(new cljs.core.List(null,var_name,null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"options__18068__auto__","options__18068__auto__",1100980201,null),null,(1),null))))),null,(1),null)))))),null,(1),null)),body))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","should-not-have-invoked","speclj.core/should-not-have-invoked",1793584684,null),null,(1),null)),(new cljs.core.List(null,var_name,null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"options__18068__auto__","options__18068__auto__",1100980201,null),null,(1),null))))),null,(1),null))))),null,(1),null)))));
}));

(speclj.core.should_not_invoke.cljs$lang$maxFixedArity = (4));

/** @this {Function} */
(speclj.core.should_not_invoke.cljs$lang$applyTo = (function (seq18069){
var G__18070 = cljs.core.first.call(null,seq18069);
var seq18069__$1 = cljs.core.next.call(null,seq18069);
var G__18071 = cljs.core.first.call(null,seq18069__$1);
var seq18069__$2 = cljs.core.next.call(null,seq18069__$1);
var G__18072 = cljs.core.first.call(null,seq18069__$2);
var seq18069__$3 = cljs.core.next.call(null,seq18069__$2);
var G__18073 = cljs.core.first.call(null,seq18069__$3);
var seq18069__$4 = cljs.core.next.call(null,seq18069__$3);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18070,G__18071,G__18072,G__18073,seq18069__$4);
}));

return null;
})()
;
(speclj.core.should_not_invoke.cljs$lang$macro = true);

var ret__5781__auto___18094 = /**
 * Asserts that the first numeric form is less than the second numeric form, using the built-in < function.
 */
speclj.core.should_LT_ = (function speclj$core$should_LT_(_AMPERSAND_form,_AMPERSAND_env,a,b){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"a__18083__auto__","a__18083__auto__",1577209292,null),null,(1),null)),(new cljs.core.List(null,a,null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"b__18084__auto__","b__18084__auto__",-712435835,null),null,(1),null)),(new cljs.core.List(null,b,null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","and","cljs.core/and",-6692549,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","number?","cljs.core/number?",-811857295,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"a__18083__auto__","a__18083__auto__",1577209292,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","number?","cljs.core/number?",-811857295,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"b__18084__auto__","b__18084__auto__",-712435835,null),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","when-not","cljs.core/when-not",-556141047,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","<","cljs.core/<",1677496129,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"a__18083__auto__","a__18083__auto__",1577209292,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"b__18084__auto__","b__18084__auto__",-712435835,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-fail","speclj.core/-fail",-436223201,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null),null,(1),null)),(new cljs.core.List(null,"expected ",null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"a__18083__auto__","a__18083__auto__",1577209292,null),null,(1),null)),(new cljs.core.List(null," to be less than ",null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"b__18084__auto__","b__18084__auto__",-712435835,null),null,(1),null)),(new cljs.core.List(null," but got: (< ",null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"a__18083__auto__","a__18083__auto__",1577209292,null),null,(1),null)),(new cljs.core.List(null," ",null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"b__18084__auto__","b__18084__auto__",-712435835,null),null,(1),null)),(new cljs.core.List(null,")",null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"throw","throw",595905694,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-new-exception","speclj.core/-new-exception",-969354487,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","wrong-types","speclj.core/wrong-types",408672787,null),null,(1),null)),(new cljs.core.List(null,"should<",null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"a__18083__auto__","a__18083__auto__",1577209292,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"b__18084__auto__","b__18084__auto__",-712435835,null),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)))));
});
(speclj.core.should_LT_.cljs$lang$macro = true);

var ret__5781__auto___18095 = /**
 * Asserts that the first numeric form is greater than the second numeric form, using the built-in > function.
 */
speclj.core.should_GT_ = (function speclj$core$should_GT_(_AMPERSAND_form,_AMPERSAND_env,a,b){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"a__18092__auto__","a__18092__auto__",1390993307,null),null,(1),null)),(new cljs.core.List(null,a,null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"b__18093__auto__","b__18093__auto__",636068747,null),null,(1),null)),(new cljs.core.List(null,b,null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","and","cljs.core/and",-6692549,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","number?","cljs.core/number?",-811857295,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"a__18092__auto__","a__18092__auto__",1390993307,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","number?","cljs.core/number?",-811857295,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"b__18093__auto__","b__18093__auto__",636068747,null),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","when-not","cljs.core/when-not",-556141047,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core",">","cljs.core/>",2020535938,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"a__18092__auto__","a__18092__auto__",1390993307,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"b__18093__auto__","b__18093__auto__",636068747,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-fail","speclj.core/-fail",-436223201,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null),null,(1),null)),(new cljs.core.List(null,"expected ",null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"a__18092__auto__","a__18092__auto__",1390993307,null),null,(1),null)),(new cljs.core.List(null," to be greater than ",null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"b__18093__auto__","b__18093__auto__",636068747,null),null,(1),null)),(new cljs.core.List(null," but got: (> ",null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"a__18092__auto__","a__18092__auto__",1390993307,null),null,(1),null)),(new cljs.core.List(null," ",null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"b__18093__auto__","b__18093__auto__",636068747,null),null,(1),null)),(new cljs.core.List(null,")",null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"throw","throw",595905694,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-new-exception","speclj.core/-new-exception",-969354487,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","wrong-types","speclj.core/wrong-types",408672787,null),null,(1),null)),(new cljs.core.List(null,"should>",null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"a__18092__auto__","a__18092__auto__",1390993307,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"b__18093__auto__","b__18093__auto__",636068747,null),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)))));
});
(speclj.core.should_GT_.cljs$lang$macro = true);

var ret__5781__auto___18107 = /**
 * Asserts that the first numeric form is less than or equal to the second numeric form, using the built-in <= function.
 */
speclj.core.should_LT__EQ_ = (function speclj$core$should_LT__EQ_(_AMPERSAND_form,_AMPERSAND_env,a,b){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"a__18096__auto__","a__18096__auto__",-432753706,null),null,(1),null)),(new cljs.core.List(null,a,null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"b__18097__auto__","b__18097__auto__",363500386,null),null,(1),null)),(new cljs.core.List(null,b,null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","and","cljs.core/and",-6692549,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","number?","cljs.core/number?",-811857295,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"a__18096__auto__","a__18096__auto__",-432753706,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","number?","cljs.core/number?",-811857295,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"b__18097__auto__","b__18097__auto__",363500386,null),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","when-not","cljs.core/when-not",-556141047,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","<=","cljs.core/<=",1677001748,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"a__18096__auto__","a__18096__auto__",-432753706,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"b__18097__auto__","b__18097__auto__",363500386,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-fail","speclj.core/-fail",-436223201,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null),null,(1),null)),(new cljs.core.List(null,"expected ",null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"a__18096__auto__","a__18096__auto__",-432753706,null),null,(1),null)),(new cljs.core.List(null," to be less than or equal to ",null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"b__18097__auto__","b__18097__auto__",363500386,null),null,(1),null)),(new cljs.core.List(null," but got: (<= ",null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"a__18096__auto__","a__18096__auto__",-432753706,null),null,(1),null)),(new cljs.core.List(null," ",null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"b__18097__auto__","b__18097__auto__",363500386,null),null,(1),null)),(new cljs.core.List(null,")",null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"throw","throw",595905694,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-new-exception","speclj.core/-new-exception",-969354487,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","wrong-types","speclj.core/wrong-types",408672787,null),null,(1),null)),(new cljs.core.List(null,"should<=",null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"a__18096__auto__","a__18096__auto__",-432753706,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"b__18097__auto__","b__18097__auto__",363500386,null),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)))));
});
(speclj.core.should_LT__EQ_.cljs$lang$macro = true);

var ret__5781__auto___18110 = /**
 * Asserts that the first numeric form is greater than or equal to the second numeric form, using the built-in >= function.
 */
speclj.core.should_GT__EQ_ = (function speclj$core$should_GT__EQ_(_AMPERSAND_form,_AMPERSAND_env,a,b){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"a__18108__auto__","a__18108__auto__",515726053,null),null,(1),null)),(new cljs.core.List(null,a,null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"b__18109__auto__","b__18109__auto__",1687298676,null),null,(1),null)),(new cljs.core.List(null,b,null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","and","cljs.core/and",-6692549,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","number?","cljs.core/number?",-811857295,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"a__18108__auto__","a__18108__auto__",515726053,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","number?","cljs.core/number?",-811857295,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"b__18109__auto__","b__18109__auto__",1687298676,null),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","when-not","cljs.core/when-not",-556141047,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core",">=","cljs.core/>=",350096541,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"a__18108__auto__","a__18108__auto__",515726053,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"b__18109__auto__","b__18109__auto__",1687298676,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-fail","speclj.core/-fail",-436223201,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null),null,(1),null)),(new cljs.core.List(null,"expected ",null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"a__18108__auto__","a__18108__auto__",515726053,null),null,(1),null)),(new cljs.core.List(null," to be greater than or equal to ",null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"b__18109__auto__","b__18109__auto__",1687298676,null),null,(1),null)),(new cljs.core.List(null," but got: (>= ",null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"a__18108__auto__","a__18108__auto__",515726053,null),null,(1),null)),(new cljs.core.List(null," ",null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"b__18109__auto__","b__18109__auto__",1687298676,null),null,(1),null)),(new cljs.core.List(null,")",null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"throw","throw",595905694,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-new-exception","speclj.core/-new-exception",-969354487,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","wrong-types","speclj.core/wrong-types",408672787,null),null,(1),null)),(new cljs.core.List(null,"should>=",null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"a__18108__auto__","a__18108__auto__",515726053,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"b__18109__auto__","b__18109__auto__",1687298676,null),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)))));
});
(speclj.core.should_GT__EQ_.cljs$lang$macro = true);

var ret__5781__auto___18117 = speclj.core.run_specs = (function speclj$core$run_specs(_AMPERSAND_form,_AMPERSAND_env){

return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","if-cljs","speclj.core/if-cljs",873977502,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","comment","cljs.core/comment",1774254937,null),null,(1),null)),(new cljs.core.List(null,"Ignoring run-specs for clojurescript",null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","require","cljs.core/require",2107770869,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"speclj.cli","speclj.cli",1577675379,null),null,(1),null)))))),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.run.standard","run-specs","speclj.run.standard/run-specs",-1568794497,null),null,(1),null))))),null,(1),null))))),null,(1),null)))));
});
(speclj.core.run_specs.cljs$lang$macro = true);


//# sourceMappingURL=core.js.map
