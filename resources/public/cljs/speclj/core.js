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
var ret__5781__auto___17174 = (function (){
speclj.core._new_exception = (function speclj$core$_new_exception(var_args){
var G__17172 = arguments.length;
switch (G__17172) {
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

var ret__5781__auto___17184 = (function (){
speclj.core._new_throwable = (function speclj$core$_new_throwable(var_args){
var G__17177 = arguments.length;
switch (G__17177) {
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

var ret__5781__auto___17187 = speclj.core._new_failure = (function speclj$core$_new_failure(_AMPERSAND_form,_AMPERSAND_env,message){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"speclj.platform.SpecFailure.","speclj.platform.SpecFailure.",610897916,null),null,(1),null)),(new cljs.core.List(null,message,null,(1),null)))));
});
(speclj.core._new_failure.cljs$lang$macro = true);

var ret__5781__auto___17188 = speclj.core._new_pending = (function speclj$core$_new_pending(_AMPERSAND_form,_AMPERSAND_env,message){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"speclj.platform.SpecPending.","speclj.platform.SpecPending.",-1205652622,null),null,(1),null)),(new cljs.core.List(null,message,null,(1),null)))));
});
(speclj.core._new_pending.cljs$lang$macro = true);

var ret__5781__auto___17199 = (function (){
speclj.core.help_it = (function speclj$core$help_it(var_args){
var args__5732__auto__ = [];
var len__5726__auto___17200 = arguments.length;
var i__5727__auto___17202 = (0);
while(true){
if((i__5727__auto___17202 < len__5726__auto___17200)){
args__5732__auto__.push((arguments[i__5727__auto___17202]));

var G__17204 = (i__5727__auto___17202 + (1));
i__5727__auto___17202 = G__17204;
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
(speclj.core.help_it.cljs$lang$applyTo = (function (seq17189){
var G__17190 = cljs.core.first.call(null,seq17189);
var seq17189__$1 = cljs.core.next.call(null,seq17189);
var G__17191 = cljs.core.first.call(null,seq17189__$1);
var seq17189__$2 = cljs.core.next.call(null,seq17189__$1);
var G__17192 = cljs.core.first.call(null,seq17189__$2);
var seq17189__$3 = cljs.core.next.call(null,seq17189__$2);
var G__17193 = cljs.core.first.call(null,seq17189__$3);
var seq17189__$4 = cljs.core.next.call(null,seq17189__$3);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__17190,G__17191,G__17192,G__17193,seq17189__$4);
}));

return null;
})()
;
(speclj.core.help_it.cljs$lang$macro = true);

var ret__5781__auto___17221 = (function (){
speclj.core.help_describe = (function speclj$core$help_describe(var_args){
var args__5732__auto__ = [];
var len__5726__auto___17222 = arguments.length;
var i__5727__auto___17223 = (0);
while(true){
if((i__5727__auto___17223 < len__5726__auto___17222)){
args__5732__auto__.push((arguments[i__5727__auto___17223]));

var G__17228 = (i__5727__auto___17223 + (1));
i__5727__auto___17223 = G__17228;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((4) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((4)),(0),null)):null);
return speclj.core.help_describe.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__5733__auto__);
});

(speclj.core.help_describe.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,name,focused_QMARK_,components){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"description__17201__auto__","description__17201__auto__",1866424924,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.components","new-description","speclj.components/new-description",1764687593,null),null,(1),null)),(new cljs.core.List(null,name,null,(1),null)),(new cljs.core.List(null,focused_QMARK_,null,(1),null)),(new cljs.core.List(null,cljs.core.name.call(null,cljs.core._STAR_ns_STAR_.name()),null,(1),null))))),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","binding","cljs.core/binding",2050379843,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.config","*parent-description*","speclj.config/*parent-description*",923760011,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"description__17201__auto__","description__17201__auto__",1866424924,null),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","doseq","cljs.core/doseq",-169320766,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"component__17203__auto__","component__17203__auto__",616779956,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","vector","cljs.core/vector",720641726,null),null,(1),null)),components))),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.components","install","speclj.components/install",-280361868,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"component__17203__auto__","component__17203__auto__",616779956,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"description__17201__auto__","description__17201__auto__",1866424924,null),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","when-not","cljs.core/when-not",-556141047,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","if-cljs","speclj.core/if-cljs",873977502,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("speclj.config","*parent-description*","speclj.config/*parent-description*",923760011,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","bound?","speclj.core/bound?",-726786538,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"var","var",870848730,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("speclj.config","*parent-description*","speclj.config/*parent-description*",923760011,null),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.running","submit-description","speclj.running/submit-description",788083680,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.config","active-runner","speclj.config/active-runner",982927849,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"description__17201__auto__","description__17201__auto__",1866424924,null),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"description__17201__auto__","description__17201__auto__",1866424924,null),null,(1),null)))));
}));

(speclj.core.help_describe.cljs$lang$maxFixedArity = (4));

/** @this {Function} */
(speclj.core.help_describe.cljs$lang$applyTo = (function (seq17205){
var G__17206 = cljs.core.first.call(null,seq17205);
var seq17205__$1 = cljs.core.next.call(null,seq17205);
var G__17207 = cljs.core.first.call(null,seq17205__$1);
var seq17205__$2 = cljs.core.next.call(null,seq17205__$1);
var G__17208 = cljs.core.first.call(null,seq17205__$2);
var seq17205__$3 = cljs.core.next.call(null,seq17205__$2);
var G__17209 = cljs.core.first.call(null,seq17205__$3);
var seq17205__$4 = cljs.core.next.call(null,seq17205__$3);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__17206,G__17207,G__17208,G__17209,seq17205__$4);
}));

return null;
})()
;
(speclj.core.help_describe.cljs$lang$macro = true);

var ret__5781__auto___17242 = (function (){
/**
 * body => any forms, but should contain at least one assertion (should)
 * 
 *   Declares a new characteristic (example in rspec).
 */
speclj.core.it = (function speclj$core$it(var_args){
var args__5732__auto__ = [];
var len__5726__auto___17243 = arguments.length;
var i__5727__auto___17244 = (0);
while(true){
if((i__5727__auto___17244 < len__5726__auto___17243)){
args__5732__auto__.push((arguments[i__5727__auto___17244]));

var G__17246 = (i__5727__auto___17244 + (1));
i__5727__auto___17244 = G__17246;
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
(speclj.core.it.cljs$lang$applyTo = (function (seq17224){
var G__17225 = cljs.core.first.call(null,seq17224);
var seq17224__$1 = cljs.core.next.call(null,seq17224);
var G__17226 = cljs.core.first.call(null,seq17224__$1);
var seq17224__$2 = cljs.core.next.call(null,seq17224__$1);
var G__17227 = cljs.core.first.call(null,seq17224__$2);
var seq17224__$3 = cljs.core.next.call(null,seq17224__$2);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__17225,G__17226,G__17227,seq17224__$3);
}));

return null;
})()
;
(speclj.core.it.cljs$lang$macro = true);

var ret__5781__auto___17250 = (function (){
/**
 * Syntactic shortcut to make the characteristic pending.
 */
speclj.core.xit = (function speclj$core$xit(var_args){
var args__5732__auto__ = [];
var len__5726__auto___17252 = arguments.length;
var i__5727__auto___17255 = (0);
while(true){
if((i__5727__auto___17255 < len__5726__auto___17252)){
args__5732__auto__.push((arguments[i__5727__auto___17255]));

var G__17258 = (i__5727__auto___17255 + (1));
i__5727__auto___17255 = G__17258;
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
(speclj.core.xit.cljs$lang$applyTo = (function (seq17237){
var G__17238 = cljs.core.first.call(null,seq17237);
var seq17237__$1 = cljs.core.next.call(null,seq17237);
var G__17239 = cljs.core.first.call(null,seq17237__$1);
var seq17237__$2 = cljs.core.next.call(null,seq17237__$1);
var G__17240 = cljs.core.first.call(null,seq17237__$2);
var seq17237__$3 = cljs.core.next.call(null,seq17237__$2);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__17238,G__17239,G__17240,seq17237__$3);
}));

return null;
})()
;
(speclj.core.xit.cljs$lang$macro = true);

var ret__5781__auto___17259 = (function (){
/**
 * Same as 'it', but it is meant to facilitate temporary debugging.
 *   Characteristics defined with this macro will be executed along with any
 *   other characteristics thus defined, but all other characteristic defined
 *   with 'it' will be ignored.
 */
speclj.core.focus_it = (function speclj$core$focus_it(var_args){
var args__5732__auto__ = [];
var len__5726__auto___17260 = arguments.length;
var i__5727__auto___17261 = (0);
while(true){
if((i__5727__auto___17261 < len__5726__auto___17260)){
args__5732__auto__.push((arguments[i__5727__auto___17261]));

var G__17266 = (i__5727__auto___17261 + (1));
i__5727__auto___17261 = G__17266;
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
(speclj.core.focus_it.cljs$lang$applyTo = (function (seq17251){
var G__17253 = cljs.core.first.call(null,seq17251);
var seq17251__$1 = cljs.core.next.call(null,seq17251);
var G__17254 = cljs.core.first.call(null,seq17251__$1);
var seq17251__$2 = cljs.core.next.call(null,seq17251__$1);
var G__17256 = cljs.core.first.call(null,seq17251__$2);
var seq17251__$3 = cljs.core.next.call(null,seq17251__$2);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__17253,G__17254,G__17256,seq17251__$3);
}));

return null;
})()
;
(speclj.core.focus_it.cljs$lang$macro = true);

var ret__5781__auto___17269 = (function (){
speclj.core.when_not_bound = (function speclj$core$when_not_bound(var_args){
var args__5732__auto__ = [];
var len__5726__auto___17274 = arguments.length;
var i__5727__auto___17275 = (0);
while(true){
if((i__5727__auto___17275 < len__5726__auto___17274)){
args__5732__auto__.push((arguments[i__5727__auto___17275]));

var G__17276 = (i__5727__auto___17275 + (1));
i__5727__auto___17275 = G__17276;
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
(speclj.core.when_not_bound.cljs$lang$applyTo = (function (seq17262){
var G__17263 = cljs.core.first.call(null,seq17262);
var seq17262__$1 = cljs.core.next.call(null,seq17262);
var G__17264 = cljs.core.first.call(null,seq17262__$1);
var seq17262__$2 = cljs.core.next.call(null,seq17262__$1);
var G__17265 = cljs.core.first.call(null,seq17262__$2);
var seq17262__$3 = cljs.core.next.call(null,seq17262__$2);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__17263,G__17264,G__17265,seq17262__$3);
}));

return null;
})()
;
(speclj.core.when_not_bound.cljs$lang$macro = true);

var ret__5781__auto___17281 = (function (){
/**
 * body => & spec-components
 * 
 *   Declares a new spec.  The body can contain any forms that evaluate to spec components (it, before, after, with ...).
 */
speclj.core.describe = (function speclj$core$describe(var_args){
var args__5732__auto__ = [];
var len__5726__auto___17282 = arguments.length;
var i__5727__auto___17283 = (0);
while(true){
if((i__5727__auto___17283 < len__5726__auto___17282)){
args__5732__auto__.push((arguments[i__5727__auto___17283]));

var G__17284 = (i__5727__auto___17283 + (1));
i__5727__auto___17283 = G__17284;
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
(speclj.core.describe.cljs$lang$applyTo = (function (seq17270){
var G__17271 = cljs.core.first.call(null,seq17270);
var seq17270__$1 = cljs.core.next.call(null,seq17270);
var G__17272 = cljs.core.first.call(null,seq17270__$1);
var seq17270__$2 = cljs.core.next.call(null,seq17270__$1);
var G__17273 = cljs.core.first.call(null,seq17270__$2);
var seq17270__$3 = cljs.core.next.call(null,seq17270__$2);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__17271,G__17272,G__17273,seq17270__$3);
}));

return null;
})()
;
(speclj.core.describe.cljs$lang$macro = true);

var ret__5781__auto___17294 = (function (){
/**
 * Same as 'describe', but it is meant to facilitate temporary debugging.
 * Components defined with this macro will be fully executed along with any
 * other components thus defined, but all other sibling components defined
 * with 'describe' will be ignored.
 */
speclj.core.focus_describe = (function speclj$core$focus_describe(var_args){
var args__5732__auto__ = [];
var len__5726__auto___17295 = arguments.length;
var i__5727__auto___17296 = (0);
while(true){
if((i__5727__auto___17296 < len__5726__auto___17295)){
args__5732__auto__.push((arguments[i__5727__auto___17296]));

var G__17300 = (i__5727__auto___17296 + (1));
i__5727__auto___17296 = G__17300;
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
(speclj.core.focus_describe.cljs$lang$applyTo = (function (seq17285){
var G__17286 = cljs.core.first.call(null,seq17285);
var seq17285__$1 = cljs.core.next.call(null,seq17285);
var G__17287 = cljs.core.first.call(null,seq17285__$1);
var seq17285__$2 = cljs.core.next.call(null,seq17285__$1);
var G__17288 = cljs.core.first.call(null,seq17285__$2);
var seq17285__$3 = cljs.core.next.call(null,seq17285__$2);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__17286,G__17287,G__17288,seq17285__$3);
}));

return null;
})()
;
(speclj.core.focus_describe.cljs$lang$macro = true);

var ret__5781__auto___17317 = (function (){
/**
 * Same as describe, but should be used to nest testing contexts inside the outer describe.
 *   Contexts can be nested any number of times.
 */
speclj.core.context = (function speclj$core$context(var_args){
var args__5732__auto__ = [];
var len__5726__auto___17319 = arguments.length;
var i__5727__auto___17320 = (0);
while(true){
if((i__5727__auto___17320 < len__5726__auto___17319)){
args__5732__auto__.push((arguments[i__5727__auto___17320]));

var G__17322 = (i__5727__auto___17320 + (1));
i__5727__auto___17320 = G__17322;
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
(speclj.core.context.cljs$lang$applyTo = (function (seq17297){
var G__17298 = cljs.core.first.call(null,seq17297);
var seq17297__$1 = cljs.core.next.call(null,seq17297);
var G__17299 = cljs.core.first.call(null,seq17297__$1);
var seq17297__$2 = cljs.core.next.call(null,seq17297__$1);
var G__17301 = cljs.core.first.call(null,seq17297__$2);
var seq17297__$3 = cljs.core.next.call(null,seq17297__$2);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__17298,G__17299,G__17301,seq17297__$3);
}));

return null;
})()
;
(speclj.core.context.cljs$lang$macro = true);

var ret__5781__auto___17329 = (function (){
/**
 * Same as 'context', but it is meant to facilitate temporary debugging.
 * Components defined with this macro will be fully executed along with any
 * other components thus defined, but all other sibling components defined
 * with 'context' will be ignored.
 */
speclj.core.focus_context = (function speclj$core$focus_context(var_args){
var args__5732__auto__ = [];
var len__5726__auto___17333 = arguments.length;
var i__5727__auto___17334 = (0);
while(true){
if((i__5727__auto___17334 < len__5726__auto___17333)){
args__5732__auto__.push((arguments[i__5727__auto___17334]));

var G__17335 = (i__5727__auto___17334 + (1));
i__5727__auto___17334 = G__17335;
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
(speclj.core.focus_context.cljs$lang$applyTo = (function (seq17313){
var G__17314 = cljs.core.first.call(null,seq17313);
var seq17313__$1 = cljs.core.next.call(null,seq17313);
var G__17315 = cljs.core.first.call(null,seq17313__$1);
var seq17313__$2 = cljs.core.next.call(null,seq17313__$1);
var G__17316 = cljs.core.first.call(null,seq17313__$2);
var seq17313__$3 = cljs.core.next.call(null,seq17313__$2);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__17314,G__17315,G__17316,seq17313__$3);
}));

return null;
})()
;
(speclj.core.focus_context.cljs$lang$macro = true);

var ret__5781__auto___17339 = (function (){
/**
 * Declares a function that is invoked before each characteristic in the containing describe scope is evaluated. The body
 *   may consist of any forms, presumably ones that perform side effects.
 */
speclj.core.before = (function speclj$core$before(var_args){
var args__5732__auto__ = [];
var len__5726__auto___17340 = arguments.length;
var i__5727__auto___17341 = (0);
while(true){
if((i__5727__auto___17341 < len__5726__auto___17340)){
args__5732__auto__.push((arguments[i__5727__auto___17341]));

var G__17342 = (i__5727__auto___17341 + (1));
i__5727__auto___17341 = G__17342;
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
(speclj.core.before.cljs$lang$applyTo = (function (seq17330){
var G__17331 = cljs.core.first.call(null,seq17330);
var seq17330__$1 = cljs.core.next.call(null,seq17330);
var G__17332 = cljs.core.first.call(null,seq17330__$1);
var seq17330__$2 = cljs.core.next.call(null,seq17330__$1);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__17331,G__17332,seq17330__$2);
}));

return null;
})()
;
(speclj.core.before.cljs$lang$macro = true);

var ret__5781__auto___17343 = (function (){
/**
 * Declares a function that is invoked after each characteristic in the containing describe scope is evaluated. The body
 *   may consist of any forms, presumably ones that perform side effects.
 */
speclj.core.after = (function speclj$core$after(var_args){
var args__5732__auto__ = [];
var len__5726__auto___17345 = arguments.length;
var i__5727__auto___17349 = (0);
while(true){
if((i__5727__auto___17349 < len__5726__auto___17345)){
args__5732__auto__.push((arguments[i__5727__auto___17349]));

var G__17350 = (i__5727__auto___17349 + (1));
i__5727__auto___17349 = G__17350;
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
(speclj.core.after.cljs$lang$applyTo = (function (seq17336){
var G__17337 = cljs.core.first.call(null,seq17336);
var seq17336__$1 = cljs.core.next.call(null,seq17336);
var G__17338 = cljs.core.first.call(null,seq17336__$1);
var seq17336__$2 = cljs.core.next.call(null,seq17336__$1);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__17337,G__17338,seq17336__$2);
}));

return null;
})()
;
(speclj.core.after.cljs$lang$macro = true);

var ret__5781__auto___17355 = (function (){
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
var len__5726__auto___17357 = arguments.length;
var i__5727__auto___17358 = (0);
while(true){
if((i__5727__auto___17358 < len__5726__auto___17357)){
args__5732__auto__.push((arguments[i__5727__auto___17358]));

var G__17359 = (i__5727__auto___17358 + (1));
i__5727__auto___17358 = G__17359;
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
(speclj.core.around.cljs$lang$applyTo = (function (seq17344){
var G__17346 = cljs.core.first.call(null,seq17344);
var seq17344__$1 = cljs.core.next.call(null,seq17344);
var G__17347 = cljs.core.first.call(null,seq17344__$1);
var seq17344__$2 = cljs.core.next.call(null,seq17344__$1);
var G__17348 = cljs.core.first.call(null,seq17344__$2);
var seq17344__$3 = cljs.core.next.call(null,seq17344__$2);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__17346,G__17347,G__17348,seq17344__$3);
}));

return null;
})()
;
(speclj.core.around.cljs$lang$macro = true);

var ret__5781__auto___17363 = /**
 * Redefines the bindings around each characteristic of the containing describe scope.
 */
speclj.core.redefs_around = (function speclj$core$redefs_around(_AMPERSAND_form,_AMPERSAND_env,bindings){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","around","speclj.core/around",649826642,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"it__17356__auto__","it__17356__auto__",-1912148484,null),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","with-redefs","cljs.core/with-redefs",1134293954,null),null,(1),null)),(new cljs.core.List(null,bindings,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"it__17356__auto__","it__17356__auto__",-1912148484,null),null,(1),null))))),null,(1),null))))),null,(1),null)))));
});
(speclj.core.redefs_around.cljs$lang$macro = true);

var ret__5781__auto___17380 = (function (){
/**
 * Declares a function that is invoked once before any characteristic in the containing describe scope is evaluated. The
 *   body may consist of any forms, presumably ones that perform side effects.
 */
speclj.core.before_all = (function speclj$core$before_all(var_args){
var args__5732__auto__ = [];
var len__5726__auto___17381 = arguments.length;
var i__5727__auto___17382 = (0);
while(true){
if((i__5727__auto___17382 < len__5726__auto___17381)){
args__5732__auto__.push((arguments[i__5727__auto___17382]));

var G__17383 = (i__5727__auto___17382 + (1));
i__5727__auto___17382 = G__17383;
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
(speclj.core.before_all.cljs$lang$applyTo = (function (seq17364){
var G__17365 = cljs.core.first.call(null,seq17364);
var seq17364__$1 = cljs.core.next.call(null,seq17364);
var G__17366 = cljs.core.first.call(null,seq17364__$1);
var seq17364__$2 = cljs.core.next.call(null,seq17364__$1);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__17365,G__17366,seq17364__$2);
}));

return null;
})()
;
(speclj.core.before_all.cljs$lang$macro = true);

var ret__5781__auto___17390 = (function (){
/**
 * Declares a function that is invoked once after all the characteristics in the containing describe scope have been
 *   evaluated.  The body may consist of any forms, presumably ones that perform side effects.
 */
speclj.core.after_all = (function speclj$core$after_all(var_args){
var args__5732__auto__ = [];
var len__5726__auto___17391 = arguments.length;
var i__5727__auto___17393 = (0);
while(true){
if((i__5727__auto___17393 < len__5726__auto___17391)){
args__5732__auto__.push((arguments[i__5727__auto___17393]));

var G__17398 = (i__5727__auto___17393 + (1));
i__5727__auto___17393 = G__17398;
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
(speclj.core.after_all.cljs$lang$applyTo = (function (seq17377){
var G__17378 = cljs.core.first.call(null,seq17377);
var seq17377__$1 = cljs.core.next.call(null,seq17377);
var G__17379 = cljs.core.first.call(null,seq17377__$1);
var seq17377__$2 = cljs.core.next.call(null,seq17377__$1);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__17378,G__17379,seq17377__$2);
}));

return null;
})()
;
(speclj.core.after_all.cljs$lang$macro = true);

var ret__5781__auto___17405 = (function (){
/**
 * Declares a function that is invoked once around all characteristics of the containing describe scope.
 */
speclj.core.around_all = (function speclj$core$around_all(var_args){
var args__5732__auto__ = [];
var len__5726__auto___17407 = arguments.length;
var i__5727__auto___17408 = (0);
while(true){
if((i__5727__auto___17408 < len__5726__auto___17407)){
args__5732__auto__.push((arguments[i__5727__auto___17408]));

var G__17409 = (i__5727__auto___17408 + (1));
i__5727__auto___17408 = G__17409;
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
(speclj.core.around_all.cljs$lang$applyTo = (function (seq17399){
var G__17400 = cljs.core.first.call(null,seq17399);
var seq17399__$1 = cljs.core.next.call(null,seq17399);
var G__17401 = cljs.core.first.call(null,seq17399__$1);
var seq17399__$2 = cljs.core.next.call(null,seq17399__$1);
var G__17402 = cljs.core.first.call(null,seq17399__$2);
var seq17399__$3 = cljs.core.next.call(null,seq17399__$2);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__17400,G__17401,G__17402,seq17399__$3);
}));

return null;
})()
;
(speclj.core.around_all.cljs$lang$macro = true);

speclj.core._make_with = (function speclj$core$_make_with(name,body,ctor,bang_QMARK_){
var var_name = cljs.core.with_meta.call(null,cljs.core.symbol.call(null,name),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dynamic","dynamic",704819571),true], null));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","declare","cljs.core/declare",1312638100,null),null,(1),null)),(new cljs.core.List(null,var_name,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,ctor,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,var_name,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null)))),null,(1),null)),body))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"v__17406__auto__","v__17406__auto__",154438459,null),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"set!","set!",250714521,null),null,(1),null)),(new cljs.core.List(null,var_name,null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"v__17406__auto__","v__17406__auto__",154438459,null),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,bang_QMARK_,null,(1),null))))),null,(1),null)))));
});
var ret__5781__auto___17425 = (function (){
/**
 * Declares a reference-able symbol that will be lazily evaluated once per characteristic of the containing
 *   describe scope.  The body may contain any forms, the last of which will be the value of the dereferenced symbol.
 * 
 *   (with meaning 42)
 *   (it "knows the meaning of life" (should= @meaning (the-meaning-of :life)))
 */
speclj.core.with$ = (function speclj$core$with(var_args){
var args__5732__auto__ = [];
var len__5726__auto___17430 = arguments.length;
var i__5727__auto___17431 = (0);
while(true){
if((i__5727__auto___17431 < len__5726__auto___17430)){
args__5732__auto__.push((arguments[i__5727__auto___17431]));

var G__17432 = (i__5727__auto___17431 + (1));
i__5727__auto___17431 = G__17432;
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
(speclj.core.with$.cljs$lang$applyTo = (function (seq17413){
var G__17414 = cljs.core.first.call(null,seq17413);
var seq17413__$1 = cljs.core.next.call(null,seq17413);
var G__17415 = cljs.core.first.call(null,seq17413__$1);
var seq17413__$2 = cljs.core.next.call(null,seq17413__$1);
var G__17416 = cljs.core.first.call(null,seq17413__$2);
var seq17413__$3 = cljs.core.next.call(null,seq17413__$2);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__17414,G__17415,G__17416,seq17413__$3);
}));

return null;
})()
;
(speclj.core.with$.cljs$lang$macro = true);

var ret__5781__auto___17435 = (function (){
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
var len__5726__auto___17437 = arguments.length;
var i__5727__auto___17441 = (0);
while(true){
if((i__5727__auto___17441 < len__5726__auto___17437)){
args__5732__auto__.push((arguments[i__5727__auto___17441]));

var G__17442 = (i__5727__auto___17441 + (1));
i__5727__auto___17441 = G__17442;
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
(speclj.core.with_BANG_.cljs$lang$applyTo = (function (seq17426){
var G__17427 = cljs.core.first.call(null,seq17426);
var seq17426__$1 = cljs.core.next.call(null,seq17426);
var G__17428 = cljs.core.first.call(null,seq17426__$1);
var seq17426__$2 = cljs.core.next.call(null,seq17426__$1);
var G__17429 = cljs.core.first.call(null,seq17426__$2);
var seq17426__$3 = cljs.core.next.call(null,seq17426__$2);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__17427,G__17428,G__17429,seq17426__$3);
}));

return null;
})()
;
(speclj.core.with_BANG_.cljs$lang$macro = true);

var ret__5781__auto___17448 = (function (){
/**
 * Declares a reference-able symbol that will be lazily evaluated once per context. The body may contain any forms,
 * the last of which will be the value of the dereferenced symbol.
 * 
 *   (with-all meaning 42)
 *   (it "knows the meaning of life" (should= @meaning (the-meaning-of :life)))
 */
speclj.core.with_all = (function speclj$core$with_all(var_args){
var args__5732__auto__ = [];
var len__5726__auto___17450 = arguments.length;
var i__5727__auto___17453 = (0);
while(true){
if((i__5727__auto___17453 < len__5726__auto___17450)){
args__5732__auto__.push((arguments[i__5727__auto___17453]));

var G__17455 = (i__5727__auto___17453 + (1));
i__5727__auto___17453 = G__17455;
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
(speclj.core.with_all.cljs$lang$applyTo = (function (seq17436){
var G__17438 = cljs.core.first.call(null,seq17436);
var seq17436__$1 = cljs.core.next.call(null,seq17436);
var G__17439 = cljs.core.first.call(null,seq17436__$1);
var seq17436__$2 = cljs.core.next.call(null,seq17436__$1);
var G__17440 = cljs.core.first.call(null,seq17436__$2);
var seq17436__$3 = cljs.core.next.call(null,seq17436__$2);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__17438,G__17439,G__17440,seq17436__$3);
}));

return null;
})()
;
(speclj.core.with_all.cljs$lang$macro = true);

var ret__5781__auto___17462 = (function (){
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
var len__5726__auto___17463 = arguments.length;
var i__5727__auto___17464 = (0);
while(true){
if((i__5727__auto___17464 < len__5726__auto___17463)){
args__5732__auto__.push((arguments[i__5727__auto___17464]));

var G__17465 = (i__5727__auto___17464 + (1));
i__5727__auto___17464 = G__17465;
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
(speclj.core.with_all_BANG_.cljs$lang$applyTo = (function (seq17449){
var G__17451 = cljs.core.first.call(null,seq17449);
var seq17449__$1 = cljs.core.next.call(null,seq17449);
var G__17452 = cljs.core.first.call(null,seq17449__$1);
var seq17449__$2 = cljs.core.next.call(null,seq17449__$1);
var G__17454 = cljs.core.first.call(null,seq17449__$2);
var seq17449__$3 = cljs.core.next.call(null,seq17449__$2);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__17451,G__17452,G__17454,seq17449__$3);
}));

return null;
})()
;
(speclj.core.with_all_BANG_.cljs$lang$macro = true);

var ret__5781__auto___17470 = speclj.core._to_s = (function speclj$core$_to_s(_AMPERSAND_form,_AMPERSAND_env,thing){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","if-some","cljs.core/if-some",790328718,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"thing__17461__auto__","thing__17461__auto__",-965875179,null),null,(1),null)),(new cljs.core.List(null,thing,null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","pr-str","cljs.core/pr-str",-552799478,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"thing__17461__auto__","thing__17461__auto__",-965875179,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,"nil",null,(1),null)))));
});
(speclj.core._to_s.cljs$lang$macro = true);

var ret__5781__auto___17475 = /**
 * Useful for making custom assertions.
 */
speclj.core._fail = (function speclj$core$_fail(_AMPERSAND_form,_AMPERSAND_env,message){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"throw","throw",595905694,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-new-failure","speclj.core/-new-failure",1552263542,null),null,(1),null)),(new cljs.core.List(null,message,null,(1),null))))),null,(1),null)))));
});
(speclj.core._fail.cljs$lang$macro = true);

var ret__5781__auto___17491 = speclj.core.wrong_types = (function speclj$core$wrong_types(_AMPERSAND_form,_AMPERSAND_env,assertion,a,b){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"a__17476__auto__","a__17476__auto__",433540327,null),null,(1),null)),(new cljs.core.List(null,a,null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"b__17479__auto__","b__17479__auto__",1069744758,null),null,(1),null)),(new cljs.core.List(null,b,null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"type-a__17482__auto__","type-a__17482__auto__",-1319863740,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","nil?","cljs.core/nil?",945071861,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"a__17476__auto__","a__17476__auto__",433540327,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,"nil",null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.platform","type-name","speclj.platform/type-name",-1621971592,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","type","cljs.core/type",-821761154,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"a__17476__auto__","a__17476__auto__",433540327,null),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"type-b__17483__auto__","type-b__17483__auto__",-1242024000,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","nil?","cljs.core/nil?",945071861,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"b__17479__auto__","b__17479__auto__",1069744758,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,"nil",null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.platform","type-name","speclj.platform/type-name",-1621971592,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","type","cljs.core/type",-821761154,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"b__17479__auto__","b__17479__auto__",1069744758,null),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null),null,(1),null)),(new cljs.core.List(null,assertion,null,(1),null)),(new cljs.core.List(null," doesn't know how to handle these types: [",null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"type-a__17482__auto__","type-a__17482__auto__",-1319863740,null),null,(1),null)),(new cljs.core.List(null," ",null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"type-b__17483__auto__","type-b__17483__auto__",-1242024000,null),null,(1),null)),(new cljs.core.List(null,"]",null,(1),null))))),null,(1),null)))));
});
(speclj.core.wrong_types.cljs$lang$macro = true);

var ret__5781__auto___17498 = /**
 * Asserts the truthy-ness of a form
 */
speclj.core.should = (function speclj$core$should(_AMPERSAND_form,_AMPERSAND_env,form){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"value__17492__auto__","value__17492__auto__",-1582688102,null),null,(1),null)),(new cljs.core.List(null,form,null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","when-not","cljs.core/when-not",-556141047,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"value__17492__auto__","value__17492__auto__",-1582688102,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-fail","speclj.core/-fail",-436223201,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null),null,(1),null)),(new cljs.core.List(null,"Expected truthy but was: ",null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-to-s","speclj.core/-to-s",-1548927580,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"value__17492__auto__","value__17492__auto__",-1582688102,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,"",null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)))));
});
(speclj.core.should.cljs$lang$macro = true);

var ret__5781__auto___17504 = /**
 * Asserts the falsy-ness of a form
 */
speclj.core.should_not = (function speclj$core$should_not(_AMPERSAND_form,_AMPERSAND_env,form){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","when-let","cljs.core/when-let",-2049838349,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"value__17496__auto__","value__17496__auto__",-1172171682,null),null,(1),null)),(new cljs.core.List(null,form,null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-fail","speclj.core/-fail",-436223201,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null),null,(1),null)),(new cljs.core.List(null,"Expected falsy but was: ",null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-to-s","speclj.core/-to-s",-1548927580,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"value__17496__auto__","value__17496__auto__",-1172171682,null),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)))));
});
(speclj.core.should_not.cljs$lang$macro = true);

var ret__5781__auto___17522 = (function (){
/**
 * Asserts that two forms evaluate to equal values, with the expected value as the first parameter.
 */
speclj.core.should_EQ_ = (function speclj$core$should_EQ_(var_args){
var G__17512 = arguments.length;
switch (G__17512) {
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
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"expected__17505__auto__","expected__17505__auto__",472739269,null),null,(1),null)),(new cljs.core.List(null,expected_form,null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"actual__17506__auto__","actual__17506__auto__",-1298937830,null),null,(1),null)),(new cljs.core.List(null,actual_form,null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","when-not","cljs.core/when-not",-556141047,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","=","cljs.core/=",-1891498332,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"expected__17505__auto__","expected__17505__auto__",472739269,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"actual__17506__auto__","actual__17506__auto__",-1298937830,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-fail","speclj.core/-fail",-436223201,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null),null,(1),null)),(new cljs.core.List(null,"Expected: ",null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-to-s","speclj.core/-to-s",-1548927580,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"expected__17505__auto__","expected__17505__auto__",472739269,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("speclj.platform","endl","speclj.platform/endl",-1139771306,null),null,(1),null)),(new cljs.core.List(null,"     got: ",null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-to-s","speclj.core/-to-s",-1548927580,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"actual__17506__auto__","actual__17506__auto__",-1298937830,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null," (using =)",null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)))));
}));

(speclj.core.should_EQ_.cljs$core$IFn$_invoke$arity$5 = (function (_AMPERSAND_form,_AMPERSAND_env,expected_form,actual_form,delta_form){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"expected__17507__auto__","expected__17507__auto__",1156136207,null),null,(1),null)),(new cljs.core.List(null,expected_form,null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"actual__17508__auto__","actual__17508__auto__",359082683,null),null,(1),null)),(new cljs.core.List(null,actual_form,null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"delta__17509__auto__","delta__17509__auto__",1135522670,null),null,(1),null)),(new cljs.core.List(null,delta_form,null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","when","cljs.core/when",120293186,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.platform","difference-greater-than-delta?","speclj.platform/difference-greater-than-delta?",-954532948,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"expected__17507__auto__","expected__17507__auto__",1156136207,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"actual__17508__auto__","actual__17508__auto__",359082683,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"delta__17509__auto__","delta__17509__auto__",1135522670,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-fail","speclj.core/-fail",-436223201,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null),null,(1),null)),(new cljs.core.List(null,"Expected: ",null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-to-s","speclj.core/-to-s",-1548927580,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"expected__17507__auto__","expected__17507__auto__",1156136207,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("speclj.platform","endl","speclj.platform/endl",-1139771306,null),null,(1),null)),(new cljs.core.List(null,"     got: ",null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-to-s","speclj.core/-to-s",-1548927580,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"actual__17508__auto__","actual__17508__auto__",359082683,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null," (using delta: ",null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"delta__17509__auto__","delta__17509__auto__",1135522670,null),null,(1),null)),(new cljs.core.List(null,")",null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)))));
}));

(speclj.core.should_EQ_.cljs$lang$maxFixedArity = 5);

return null;
})()
;
(speclj.core.should_EQ_.cljs$lang$macro = true);

var ret__5781__auto___17534 = /**
 * Asserts that a form satisfies a function.
 */
speclj.core.should_be = (function speclj$core$should_be(_AMPERSAND_form,_AMPERSAND_env,f_form,actual_form){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"f__17524__auto__","f__17524__auto__",-2136671966,null),null,(1),null)),(new cljs.core.List(null,f_form,null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"actual__17525__auto__","actual__17525__auto__",866986685,null),null,(1),null)),(new cljs.core.List(null,actual_form,null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","when-not","cljs.core/when-not",-556141047,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"f__17524__auto__","f__17524__auto__",-2136671966,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"actual__17525__auto__","actual__17525__auto__",866986685,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-fail","speclj.core/-fail",-436223201,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null),null,(1),null)),(new cljs.core.List(null,"Expected ",null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-to-s","speclj.core/-to-s",-1548927580,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"actual__17525__auto__","actual__17525__auto__",866986685,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null," to satisfy: ",null,(1),null)),(new cljs.core.List(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(f_form),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)))));
});
(speclj.core.should_be.cljs$lang$macro = true);

var ret__5781__auto___17537 = /**
 * Asserts that a form does not satisfy a function.
 */
speclj.core.should_not_be = (function speclj$core$should_not_be(_AMPERSAND_form,_AMPERSAND_env,f_form,actual_form){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"f__17526__auto__","f__17526__auto__",226463570,null),null,(1),null)),(new cljs.core.List(null,f_form,null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"actual__17527__auto__","actual__17527__auto__",-1300822335,null),null,(1),null)),(new cljs.core.List(null,actual_form,null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","when","cljs.core/when",120293186,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"f__17526__auto__","f__17526__auto__",226463570,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"actual__17527__auto__","actual__17527__auto__",-1300822335,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-fail","speclj.core/-fail",-436223201,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null),null,(1),null)),(new cljs.core.List(null,"Expected ",null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-to-s","speclj.core/-to-s",-1548927580,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"actual__17527__auto__","actual__17527__auto__",-1300822335,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null," not to satisfy: ",null,(1),null)),(new cljs.core.List(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(f_form),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)))));
});
(speclj.core.should_not_be.cljs$lang$macro = true);

var ret__5781__auto___17538 = /**
 * Asserts that two forms evaluate to unequal values, with the unexpected value as the first parameter.
 */
speclj.core.should_not_EQ_ = (function speclj$core$should_not_EQ_(_AMPERSAND_form,_AMPERSAND_env,expected_form,actual_form){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"expected__17535__auto__","expected__17535__auto__",2080998532,null),null,(1),null)),(new cljs.core.List(null,expected_form,null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"actual__17536__auto__","actual__17536__auto__",51323903,null),null,(1),null)),(new cljs.core.List(null,actual_form,null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","when","cljs.core/when",120293186,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","=","cljs.core/=",-1891498332,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"expected__17535__auto__","expected__17535__auto__",2080998532,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"actual__17536__auto__","actual__17536__auto__",51323903,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-fail","speclj.core/-fail",-436223201,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null),null,(1),null)),(new cljs.core.List(null,"Expected: ",null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-to-s","speclj.core/-to-s",-1548927580,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"expected__17535__auto__","expected__17535__auto__",2080998532,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("speclj.platform","endl","speclj.platform/endl",-1139771306,null),null,(1),null)),(new cljs.core.List(null,"not to =: ",null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-to-s","speclj.core/-to-s",-1548927580,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"actual__17536__auto__","actual__17536__auto__",51323903,null),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)))));
});
(speclj.core.should_not_EQ_.cljs$lang$macro = true);

var ret__5781__auto___17569 = /**
 * Asserts that two forms evaluate to the same object, with the expected value as the first parameter.
 */
speclj.core.should_be_same = (function speclj$core$should_be_same(_AMPERSAND_form,_AMPERSAND_env,expected_form,actual_form){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"expected__17539__auto__","expected__17539__auto__",-942314893,null),null,(1),null)),(new cljs.core.List(null,expected_form,null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"actual__17540__auto__","actual__17540__auto__",-695682744,null),null,(1),null)),(new cljs.core.List(null,actual_form,null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","not","cljs.core/not",100665144,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","identical?","cljs.core/identical?",608476750,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"expected__17539__auto__","expected__17539__auto__",-942314893,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"actual__17540__auto__","actual__17540__auto__",-695682744,null),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-fail","speclj.core/-fail",-436223201,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null),null,(1),null)),(new cljs.core.List(null,"         Expected: ",null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-to-s","speclj.core/-to-s",-1548927580,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"expected__17539__auto__","expected__17539__auto__",-942314893,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("speclj.platform","endl","speclj.platform/endl",-1139771306,null),null,(1),null)),(new cljs.core.List(null,"to be the same as: ",null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-to-s","speclj.core/-to-s",-1548927580,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"actual__17540__auto__","actual__17540__auto__",-695682744,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null," (using identical?)",null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)))));
});
(speclj.core.should_be_same.cljs$lang$macro = true);

var ret__5781__auto___17575 = /**
 * Asserts that two forms evaluate to different objects, with the unexpected value as the first parameter.
 */
speclj.core.should_not_be_same = (function speclj$core$should_not_be_same(_AMPERSAND_form,_AMPERSAND_env,expected_form,actual_form){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"expected__17570__auto__","expected__17570__auto__",-1733133092,null),null,(1),null)),(new cljs.core.List(null,expected_form,null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"actual__17571__auto__","actual__17571__auto__",21040581,null),null,(1),null)),(new cljs.core.List(null,actual_form,null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","when","cljs.core/when",120293186,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","identical?","cljs.core/identical?",608476750,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"expected__17570__auto__","expected__17570__auto__",-1733133092,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"actual__17571__auto__","actual__17571__auto__",21040581,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-fail","speclj.core/-fail",-436223201,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null),null,(1),null)),(new cljs.core.List(null,"             Expected: ",null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-to-s","speclj.core/-to-s",-1548927580,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"expected__17570__auto__","expected__17570__auto__",-1733133092,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("speclj.platform","endl","speclj.platform/endl",-1139771306,null),null,(1),null)),(new cljs.core.List(null,"not to be the same as: ",null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-to-s","speclj.core/-to-s",-1548927580,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"actual__17571__auto__","actual__17571__auto__",21040581,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null," (using identical?)",null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)))));
});
(speclj.core.should_not_be_same.cljs$lang$macro = true);

var ret__5781__auto___17580 = /**
 * Asserts that the form evaluates to nil
 */
speclj.core.should_be_nil = (function speclj$core$should_be_nil(_AMPERSAND_form,_AMPERSAND_env,form){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","should=","speclj.core/should=",83977914,null),null,(1),null)),(new cljs.core.List(null,null,null,(1),null)),(new cljs.core.List(null,form,null,(1),null)))));
});
(speclj.core.should_be_nil.cljs$lang$macro = true);

var ret__5781__auto___17592 = /**
 * Multipurpose assertion of containment.  Works on strings, regular expressions, sequences, and maps.
 * 
 *   (should-contain "foo" "foobar")            ; looks for sub-string
 *   (should-contain #"hello.*" "hello, world") ; looks for regular expression
 *   (should-contain :foo {:foo :bar})          ; looks for a key in a map
 *   (should-contain 3 [1 2 3 4])               ; looks for an object in a collection
 */
speclj.core.should_contain = (function speclj$core$should_contain(_AMPERSAND_form,_AMPERSAND_env,expected,actual){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"expected__17577__auto__","expected__17577__auto__",-2018917879,null),null,(1),null)),(new cljs.core.List(null,expected,null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"actual__17578__auto__","actual__17578__auto__",-1214958506,null),null,(1),null)),(new cljs.core.List(null,actual,null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","cond","cljs.core/cond",2005388338,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","nil?","cljs.core/nil?",945071861,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"actual__17578__auto__","actual__17578__auto__",-1214958506,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-fail","speclj.core/-fail",-436223201,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null),null,(1),null)),(new cljs.core.List(null,"Expected: ",null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-to-s","speclj.core/-to-s",-1548927580,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"expected__17577__auto__","expected__17577__auto__",-2018917879,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("speclj.platform","endl","speclj.platform/endl",-1139771306,null),null,(1),null)),(new cljs.core.List(null,"to be in: nil",null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","and","cljs.core/and",-6692549,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"expected__17577__auto__","expected__17577__auto__",-2018917879,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"actual__17578__auto__","actual__17578__auto__",-1214958506,null),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","when","cljs.core/when",120293186,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","=","cljs.core/=",-1891498332,null),null,(1),null)),(new cljs.core.List(null,(-1),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,".indexOf",".indexOf",-1910538923,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"actual__17578__auto__","actual__17578__auto__",-1214958506,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"expected__17577__auto__","expected__17577__auto__",-2018917879,null),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-fail","speclj.core/-fail",-436223201,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null),null,(1),null)),(new cljs.core.List(null,"Expected: ",null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-to-s","speclj.core/-to-s",-1548927580,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"expected__17577__auto__","expected__17577__auto__",-2018917879,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("speclj.platform","endl","speclj.platform/endl",-1139771306,null),null,(1),null)),(new cljs.core.List(null,"to be in: ",null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-to-s","speclj.core/-to-s",-1548927580,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"actual__17578__auto__","actual__17578__auto__",-1214958506,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null," (using .contains)",null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","and","cljs.core/and",-6692549,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.platform","re?","speclj.platform/re?",-2045322539,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"expected__17577__auto__","expected__17577__auto__",-2018917879,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"actual__17578__auto__","actual__17578__auto__",-1214958506,null),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","when","cljs.core/when",120293186,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","empty?","cljs.core/empty?",1866613644,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","re-seq","cljs.core/re-seq",-1438765119,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"expected__17577__auto__","expected__17577__auto__",-2018917879,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"actual__17578__auto__","actual__17578__auto__",-1214958506,null),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-fail","speclj.core/-fail",-436223201,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null),null,(1),null)),(new cljs.core.List(null,"Expected: ",null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-to-s","speclj.core/-to-s",-1548927580,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"actual__17578__auto__","actual__17578__auto__",-1214958506,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("speclj.platform","endl","speclj.platform/endl",-1139771306,null),null,(1),null)),(new cljs.core.List(null,"to match: ",null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-to-s","speclj.core/-to-s",-1548927580,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"expected__17577__auto__","expected__17577__auto__",-2018917879,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null," (using re-seq)",null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"actual__17578__auto__","actual__17578__auto__",-1214958506,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","when","cljs.core/when",120293186,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","not","cljs.core/not",100665144,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"actual__17578__auto__","actual__17578__auto__",-1214958506,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"expected__17577__auto__","expected__17577__auto__",-2018917879,null),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-fail","speclj.core/-fail",-436223201,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null),null,(1),null)),(new cljs.core.List(null,"Expected: ",null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-to-s","speclj.core/-to-s",-1548927580,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"expected__17577__auto__","expected__17577__auto__",-2018917879,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("speclj.platform","endl","speclj.platform/endl",-1139771306,null),null,(1),null)),(new cljs.core.List(null,"to be a key in: ",null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-to-s","speclj.core/-to-s",-1548927580,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"actual__17578__auto__","actual__17578__auto__",-1214958506,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null," (using contains?)",null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","coll?","cljs.core/coll?",1208130522,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"actual__17578__auto__","actual__17578__auto__",-1214958506,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","when","cljs.core/when",120293186,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","not","cljs.core/not",100665144,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","some","cljs.core/some",-977628065,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"p1__17576__17579__auto__","p1__17576__17579__auto__",1794710233,null),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","=","cljs.core/=",-1891498332,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"expected__17577__auto__","expected__17577__auto__",-2018917879,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"p1__17576__17579__auto__","p1__17576__17579__auto__",1794710233,null),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"actual__17578__auto__","actual__17578__auto__",-1214958506,null),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-fail","speclj.core/-fail",-436223201,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null),null,(1),null)),(new cljs.core.List(null,"Expected: ",null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-to-s","speclj.core/-to-s",-1548927580,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"expected__17577__auto__","expected__17577__auto__",-2018917879,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("speclj.platform","endl","speclj.platform/endl",-1139771306,null),null,(1),null)),(new cljs.core.List(null,"to be in: ",null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-to-s","speclj.core/-to-s",-1548927580,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"actual__17578__auto__","actual__17578__auto__",-1214958506,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null," (using =)",null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"else","else",-1508377146),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"throw","throw",595905694,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-new-exception","speclj.core/-new-exception",-969354487,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","wrong-types","speclj.core/wrong-types",408672787,null),null,(1),null)),(new cljs.core.List(null,"should-contain",null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"expected__17577__auto__","expected__17577__auto__",-2018917879,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"actual__17578__auto__","actual__17578__auto__",-1214958506,null),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)))));
});
(speclj.core.should_contain.cljs$lang$macro = true);

var ret__5781__auto___17642 = /**
 * Multipurpose assertion of non-containment.  See should-contain as an example of opposite behavior.
 */
speclj.core.should_not_contain = (function speclj$core$should_not_contain(_AMPERSAND_form,_AMPERSAND_env,expected,actual){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"expected__17594__auto__","expected__17594__auto__",-277091207,null),null,(1),null)),(new cljs.core.List(null,expected,null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"actual__17595__auto__","actual__17595__auto__",1299528900,null),null,(1),null)),(new cljs.core.List(null,actual,null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","cond","cljs.core/cond",2005388338,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","nil?","cljs.core/nil?",945071861,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"actual__17595__auto__","actual__17595__auto__",1299528900,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,null,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","and","cljs.core/and",-6692549,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"expected__17594__auto__","expected__17594__auto__",-277091207,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"actual__17595__auto__","actual__17595__auto__",1299528900,null),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","when","cljs.core/when",120293186,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","not","cljs.core/not",100665144,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","=","cljs.core/=",-1891498332,null),null,(1),null)),(new cljs.core.List(null,(-1),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,".indexOf",".indexOf",-1910538923,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"actual__17595__auto__","actual__17595__auto__",1299528900,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"expected__17594__auto__","expected__17594__auto__",-277091207,null),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-fail","speclj.core/-fail",-436223201,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null),null,(1),null)),(new cljs.core.List(null,"Expected: ",null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-to-s","speclj.core/-to-s",-1548927580,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"expected__17594__auto__","expected__17594__auto__",-277091207,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("speclj.platform","endl","speclj.platform/endl",-1139771306,null),null,(1),null)),(new cljs.core.List(null,"not to be in: ",null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-to-s","speclj.core/-to-s",-1548927580,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"actual__17595__auto__","actual__17595__auto__",1299528900,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null," (using .contains)",null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","and","cljs.core/and",-6692549,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.platform","re?","speclj.platform/re?",-2045322539,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"expected__17594__auto__","expected__17594__auto__",-277091207,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"actual__17595__auto__","actual__17595__auto__",1299528900,null),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","when","cljs.core/when",120293186,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","not","cljs.core/not",100665144,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","empty?","cljs.core/empty?",1866613644,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","re-seq","cljs.core/re-seq",-1438765119,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"expected__17594__auto__","expected__17594__auto__",-277091207,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"actual__17595__auto__","actual__17595__auto__",1299528900,null),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-fail","speclj.core/-fail",-436223201,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null),null,(1),null)),(new cljs.core.List(null,"Expected: ",null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-to-s","speclj.core/-to-s",-1548927580,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"actual__17595__auto__","actual__17595__auto__",1299528900,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("speclj.platform","endl","speclj.platform/endl",-1139771306,null),null,(1),null)),(new cljs.core.List(null,"not to match: ",null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-to-s","speclj.core/-to-s",-1548927580,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"expected__17594__auto__","expected__17594__auto__",-277091207,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null," (using re-seq)",null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"actual__17595__auto__","actual__17595__auto__",1299528900,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","when","cljs.core/when",120293186,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"actual__17595__auto__","actual__17595__auto__",1299528900,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"expected__17594__auto__","expected__17594__auto__",-277091207,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-fail","speclj.core/-fail",-436223201,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null),null,(1),null)),(new cljs.core.List(null,"Expected: ",null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-to-s","speclj.core/-to-s",-1548927580,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"expected__17594__auto__","expected__17594__auto__",-277091207,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("speclj.platform","endl","speclj.platform/endl",-1139771306,null),null,(1),null)),(new cljs.core.List(null,"not to be a key in: ",null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-to-s","speclj.core/-to-s",-1548927580,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"actual__17595__auto__","actual__17595__auto__",1299528900,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null," (using contains?)",null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","coll?","cljs.core/coll?",1208130522,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"actual__17595__auto__","actual__17595__auto__",1299528900,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","when","cljs.core/when",120293186,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","some","cljs.core/some",-977628065,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"p1__17593__17596__auto__","p1__17593__17596__auto__",-1436321698,null),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","=","cljs.core/=",-1891498332,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"expected__17594__auto__","expected__17594__auto__",-277091207,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"p1__17593__17596__auto__","p1__17593__17596__auto__",-1436321698,null),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"actual__17595__auto__","actual__17595__auto__",1299528900,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-fail","speclj.core/-fail",-436223201,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null),null,(1),null)),(new cljs.core.List(null,"Expected: ",null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-to-s","speclj.core/-to-s",-1548927580,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"expected__17594__auto__","expected__17594__auto__",-277091207,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("speclj.platform","endl","speclj.platform/endl",-1139771306,null),null,(1),null)),(new cljs.core.List(null,"not to be in: ",null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-to-s","speclj.core/-to-s",-1548927580,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"actual__17595__auto__","actual__17595__auto__",1299528900,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null," (using =)",null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"else","else",-1508377146),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"throw","throw",595905694,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-new-exception","speclj.core/-new-exception",-969354487,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","wrong-types","speclj.core/wrong-types",408672787,null),null,(1),null)),(new cljs.core.List(null,"should-not-contain",null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"expected__17594__auto__","expected__17594__auto__",-277091207,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"actual__17595__auto__","actual__17595__auto__",1299528900,null),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)))));
});
(speclj.core.should_not_contain.cljs$lang$macro = true);

var ret__5781__auto___17665 = /**
 * Multipurpose assertion on (count %). Works on strings, sequences, and maps.
 * 
 *   (should-have-count 6 "foobar")
 *   (should-have-count 2 [1 2])
 *   (should-have-count 1 {:foo :bar})
 *   (should-have-count 0 [])
 *   (should-have-count 0 nil)
 */
speclj.core.should_have_count = (function speclj$core$should_have_count(_AMPERSAND_form,_AMPERSAND_env,expected,coll){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"expected__17645__auto__","expected__17645__auto__",1512707412,null),null,(1),null)),(new cljs.core.List(null,expected,null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"coll__17646__auto__","coll__17646__auto__",1845963731,null),null,(1),null)),(new cljs.core.List(null,coll,null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","if-not","cljs.core/if-not",-1997686824,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","and","cljs.core/and",-6692549,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","number?","cljs.core/number?",-811857295,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"expected__17645__auto__","expected__17645__auto__",1512707412,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","or","cljs.core/or",1201033885,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","nil?","cljs.core/nil?",945071861,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"coll__17646__auto__","coll__17646__auto__",1845963731,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"coll__17646__auto__","coll__17646__auto__",1845963731,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","counted?","cljs.core/counted?",1305324125,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"coll__17646__auto__","coll__17646__auto__",1845963731,null),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"throw","throw",595905694,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-new-exception","speclj.core/-new-exception",-969354487,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","wrong-types","speclj.core/wrong-types",408672787,null),null,(1),null)),(new cljs.core.List(null,"should-have-count",null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"expected__17645__auto__","expected__17645__auto__",1512707412,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"coll__17646__auto__","coll__17646__auto__",1845963731,null),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"actual__17647__auto__","actual__17647__auto__",-686102550,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","count","cljs.core/count",-921270233,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"coll__17646__auto__","coll__17646__auto__",1845963731,null),null,(1),null))))),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","when-not","cljs.core/when-not",-556141047,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","=","cljs.core/=",-1891498332,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"expected__17645__auto__","expected__17645__auto__",1512707412,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"actual__17647__auto__","actual__17647__auto__",-686102550,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-fail","speclj.core/-fail",-436223201,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null),null,(1),null)),(new cljs.core.List(null,"Expected count: ",null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"expected__17645__auto__","expected__17645__auto__",1512707412,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("speclj.platform","endl","speclj.platform/endl",-1139771306,null),null,(1),null)),(new cljs.core.List(null,"Actual count:   ",null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"actual__17647__auto__","actual__17647__auto__",-686102550,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("speclj.platform","endl","speclj.platform/endl",-1139771306,null),null,(1),null)),(new cljs.core.List(null,"Actual coll:    ",null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-to-s","speclj.core/-to-s",-1548927580,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"coll__17646__auto__","coll__17646__auto__",1845963731,null),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)))));
});
(speclj.core.should_have_count.cljs$lang$macro = true);

var ret__5781__auto___17675 = /**
 * Multipurpose assertion on (not= (count %)). Works on strings, sequences, and maps.
 * 
 *   (should-not-have-count 1 "foobar")
 *   (should-not-have-count 1 [1 2])
 *   (should-not-have-count 42 {:foo :bar})
 *   (should-not-have-count 1 [])
 *   (should-not-have-count 1 nil)
 */
speclj.core.should_not_have_count = (function speclj$core$should_not_have_count(_AMPERSAND_form,_AMPERSAND_env,expected,coll){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"expected__17654__auto__","expected__17654__auto__",-101298088,null),null,(1),null)),(new cljs.core.List(null,expected,null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"coll__17655__auto__","coll__17655__auto__",-1167097577,null),null,(1),null)),(new cljs.core.List(null,coll,null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","if-not","cljs.core/if-not",-1997686824,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","and","cljs.core/and",-6692549,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","number?","cljs.core/number?",-811857295,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"expected__17654__auto__","expected__17654__auto__",-101298088,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","or","cljs.core/or",1201033885,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","nil?","cljs.core/nil?",945071861,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"coll__17655__auto__","coll__17655__auto__",-1167097577,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"coll__17655__auto__","coll__17655__auto__",-1167097577,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","counted?","cljs.core/counted?",1305324125,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"coll__17655__auto__","coll__17655__auto__",-1167097577,null),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"throw","throw",595905694,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-new-exception","speclj.core/-new-exception",-969354487,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","wrong-types","speclj.core/wrong-types",408672787,null),null,(1),null)),(new cljs.core.List(null,"should-not-have-count",null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"expected__17654__auto__","expected__17654__auto__",-101298088,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"coll__17655__auto__","coll__17655__auto__",-1167097577,null),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"actual__17657__auto__","actual__17657__auto__",-1808666687,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","count","cljs.core/count",-921270233,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"coll__17655__auto__","coll__17655__auto__",-1167097577,null),null,(1),null))))),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","when","cljs.core/when",120293186,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","=","cljs.core/=",-1891498332,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"expected__17654__auto__","expected__17654__auto__",-101298088,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"actual__17657__auto__","actual__17657__auto__",-1808666687,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-fail","speclj.core/-fail",-436223201,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null),null,(1),null)),(new cljs.core.List(null,"Expected count to not equal ",null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"expected__17654__auto__","expected__17654__auto__",-101298088,null),null,(1),null)),(new cljs.core.List(null," (but it did!)",null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("speclj.platform","endl","speclj.platform/endl",-1139771306,null),null,(1),null)),(new cljs.core.List(null,"Collection: ",null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-to-s","speclj.core/-to-s",-1548927580,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"coll__17655__auto__","coll__17655__auto__",-1167097577,null),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)))));
});
(speclj.core.should_not_have_count.cljs$lang$macro = true);

var ret__5781__auto___17689 = speclj.core._remove_first = (function speclj$core$_remove_first(_AMPERSAND_form,_AMPERSAND_env,coll,value){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"value__17671__auto__","value__17671__auto__",-737255586,null),null,(1),null)),(new cljs.core.List(null,value,null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","loop","cljs.core/loop",-1829423021,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"coll__17672__auto__","coll__17672__auto__",-1151578596,null),null,(1),null)),(new cljs.core.List(null,coll,null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"seen__17673__auto__","seen__17673__auto__",18516426,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null)))),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","empty?","cljs.core/empty?",1866613644,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"coll__17672__auto__","coll__17672__auto__",-1151578596,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"seen__17673__auto__","seen__17673__auto__",18516426,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"f__17674__auto__","f__17674__auto__",-1604374238,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","first","cljs.core/first",-752535972,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"coll__17672__auto__","coll__17672__auto__",-1151578596,null),null,(1),null))))),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","=","cljs.core/=",-1891498332,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"f__17674__auto__","f__17674__auto__",-1604374238,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"value__17671__auto__","value__17671__auto__",-737255586,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","concat","cljs.core/concat",-1133584918,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"seen__17673__auto__","seen__17673__auto__",18516426,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","rest","cljs.core/rest",-285075455,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"coll__17672__auto__","coll__17672__auto__",-1151578596,null),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"recur","recur",1202958259,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","rest","cljs.core/rest",-285075455,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"coll__17672__auto__","coll__17672__auto__",-1151578596,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","conj","cljs.core/conj",-460750931,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"seen__17673__auto__","seen__17673__auto__",18516426,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"f__17674__auto__","f__17674__auto__",-1604374238,null),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)))));
});
(speclj.core._remove_first.cljs$lang$macro = true);

var ret__5781__auto___17700 = speclj.core._coll_difference = (function speclj$core$_coll_difference(_AMPERSAND_form,_AMPERSAND_env,coll1,coll2){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"coll1__17681__auto__","coll1__17681__auto__",-1394493689,null),null,(1),null)),(new cljs.core.List(null,coll1,null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"coll2__17682__auto__","coll2__17682__auto__",1718698091,null),null,(1),null)),(new cljs.core.List(null,coll2,null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"coll1__17681__auto__","coll1__17681__auto__",-1394493689,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","first","cljs.core/first",-752535972,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("clojure.data","diff","clojure.data/diff",-683865998,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"coll1__17681__auto__","coll1__17681__auto__",-1394493689,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"coll2__17682__auto__","coll2__17682__auto__",1718698091,null),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","loop","cljs.core/loop",-1829423021,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"match-with__17683__auto__","match-with__17683__auto__",660454652,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"coll1__17681__auto__","coll1__17681__auto__",-1394493689,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"match-against__17684__auto__","match-against__17684__auto__",-1243451248,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"coll2__17682__auto__","coll2__17682__auto__",1718698091,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"diff__17685__auto__","diff__17685__auto__",193137476,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null)))),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","empty?","cljs.core/empty?",1866613644,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"match-with__17683__auto__","match-with__17683__auto__",660454652,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"diff__17685__auto__","diff__17685__auto__",193137476,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"f__17686__auto__","f__17686__auto__",1754321280,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","first","cljs.core/first",-752535972,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"match-with__17683__auto__","match-with__17683__auto__",660454652,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"r__17687__auto__","r__17687__auto__",-1788228496,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","rest","cljs.core/rest",-285075455,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"match-with__17683__auto__","match-with__17683__auto__",660454652,null),null,(1),null))))),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","some","cljs.core/some",-977628065,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"p1__17680__17688__auto__","p1__17680__17688__auto__",2117002558,null),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","=","cljs.core/=",-1891498332,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"p1__17680__17688__auto__","p1__17680__17688__auto__",2117002558,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"f__17686__auto__","f__17686__auto__",1754321280,null),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"match-against__17684__auto__","match-against__17684__auto__",-1243451248,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"recur","recur",1202958259,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"r__17687__auto__","r__17687__auto__",-1788228496,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-remove-first","speclj.core/-remove-first",869128070,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"match-against__17684__auto__","match-against__17684__auto__",-1243451248,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"f__17686__auto__","f__17686__auto__",1754321280,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"diff__17685__auto__","diff__17685__auto__",193137476,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"recur","recur",1202958259,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"r__17687__auto__","r__17687__auto__",-1788228496,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"match-against__17684__auto__","match-against__17684__auto__",-1243451248,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","conj","cljs.core/conj",-460750931,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"diff__17685__auto__","diff__17685__auto__",193137476,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"f__17686__auto__","f__17686__auto__",1754321280,null),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)))));
});
(speclj.core._coll_difference.cljs$lang$macro = true);

var ret__5781__auto___17716 = /**
 * Assertion of prefix in strings and sequences.
 * 
 *   (should-start-with "foo" "foobar")            ; looks for string prefix
 *   (should-start-with [1 2] [1 2 3 4])               ; looks for a subset at start of collection
 */
speclj.core.should_start_with = (function speclj$core$should_start_with(_AMPERSAND_form,_AMPERSAND_env,prefix,whole){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"prefix__17702__auto__","prefix__17702__auto__",-855973546,null),null,(1),null)),(new cljs.core.List(null,prefix,null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"whole__17703__auto__","whole__17703__auto__",-1822361802,null),null,(1),null)),(new cljs.core.List(null,whole,null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","cond","cljs.core/cond",2005388338,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","and","cljs.core/and",-6692549,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"prefix__17702__auto__","prefix__17702__auto__",-855973546,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"whole__17703__auto__","whole__17703__auto__",-1822361802,null),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","when-not","cljs.core/when-not",-556141047,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("clojure.string","starts-with?","clojure.string/starts-with?",656256322,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"whole__17703__auto__","whole__17703__auto__",-1822361802,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"prefix__17702__auto__","prefix__17702__auto__",-855973546,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-fail","speclj.core/-fail",-436223201,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null),null,(1),null)),(new cljs.core.List(null,"Expected \"",null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"whole__17703__auto__","whole__17703__auto__",-1822361802,null),null,(1),null)),(new cljs.core.List(null,"\" to start",null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("speclj.platform","endl","speclj.platform/endl",-1139771306,null),null,(1),null)),(new cljs.core.List(null,"    with \"",null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"prefix__17702__auto__","prefix__17702__auto__",-855973546,null),null,(1),null)),(new cljs.core.List(null,"\"",null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","and","cljs.core/and",-6692549,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","coll?","cljs.core/coll?",1208130522,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"whole__17703__auto__","whole__17703__auto__",-1822361802,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","coll?","cljs.core/coll?",1208130522,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"prefix__17702__auto__","prefix__17702__auto__",-855973546,null),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"actual__17704__auto__","actual__17704__auto__",-1866550405,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","take","cljs.core/take",439591112,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","count","cljs.core/count",-921270233,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"prefix__17702__auto__","prefix__17702__auto__",-855973546,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"whole__17703__auto__","whole__17703__auto__",-1822361802,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"extra__17705__auto__","extra__17705__auto__",-1945872192,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-coll-difference","speclj.core/-coll-difference",805206382,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"actual__17704__auto__","actual__17704__auto__",-1866550405,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"prefix__17702__auto__","prefix__17702__auto__",-855973546,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"missing__17706__auto__","missing__17706__auto__",1900913732,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-coll-difference","speclj.core/-coll-difference",805206382,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"prefix__17702__auto__","prefix__17702__auto__",-855973546,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"actual__17704__auto__","actual__17704__auto__",-1866550405,null),null,(1),null))))),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","when-not","cljs.core/when-not",-556141047,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","and","cljs.core/and",-6692549,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","empty?","cljs.core/empty?",1866613644,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"extra__17705__auto__","extra__17705__auto__",-1945872192,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","empty?","cljs.core/empty?",1866613644,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"missing__17706__auto__","missing__17706__auto__",1900913732,null),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-fail","speclj.core/-fail",-436223201,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null),null,(1),null)),(new cljs.core.List(null,"Expected ",null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-to-s","speclj.core/-to-s",-1548927580,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"whole__17703__auto__","whole__17703__auto__",-1822361802,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null," to start",null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("speclj.platform","endl","speclj.platform/endl",-1139771306,null),null,(1),null)),(new cljs.core.List(null,"    with ",null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-to-s","speclj.core/-to-s",-1548927580,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"prefix__17702__auto__","prefix__17702__auto__",-855973546,null),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"else","else",-1508377146),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"throw","throw",595905694,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-new-exception","speclj.core/-new-exception",-969354487,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","wrong-types","speclj.core/wrong-types",408672787,null),null,(1),null)),(new cljs.core.List(null,"should-start-with",null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"prefix__17702__auto__","prefix__17702__auto__",-855973546,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"whole__17703__auto__","whole__17703__auto__",-1822361802,null),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)))));
});
(speclj.core.should_start_with.cljs$lang$macro = true);

var ret__5781__auto___17741 = /**
 * The inverse of should-start-with.
 */
speclj.core.should_not_start_with = (function speclj$core$should_not_start_with(_AMPERSAND_form,_AMPERSAND_env,prefix,whole){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"prefix__17717__auto__","prefix__17717__auto__",-1173350373,null),null,(1),null)),(new cljs.core.List(null,prefix,null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"whole__17718__auto__","whole__17718__auto__",-1084374805,null),null,(1),null)),(new cljs.core.List(null,whole,null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","cond","cljs.core/cond",2005388338,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","and","cljs.core/and",-6692549,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"prefix__17717__auto__","prefix__17717__auto__",-1173350373,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"whole__17718__auto__","whole__17718__auto__",-1084374805,null),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","when","cljs.core/when",120293186,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("clojure.string","starts-with?","clojure.string/starts-with?",656256322,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"whole__17718__auto__","whole__17718__auto__",-1084374805,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"prefix__17717__auto__","prefix__17717__auto__",-1173350373,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-fail","speclj.core/-fail",-436223201,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null),null,(1),null)),(new cljs.core.List(null,"Expected \"",null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"whole__17718__auto__","whole__17718__auto__",-1084374805,null),null,(1),null)),(new cljs.core.List(null,"\" to NOT start",null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("speclj.platform","endl","speclj.platform/endl",-1139771306,null),null,(1),null)),(new cljs.core.List(null,"    with \"",null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"prefix__17717__auto__","prefix__17717__auto__",-1173350373,null),null,(1),null)),(new cljs.core.List(null,"\"",null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","and","cljs.core/and",-6692549,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","coll?","cljs.core/coll?",1208130522,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"whole__17718__auto__","whole__17718__auto__",-1084374805,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","coll?","cljs.core/coll?",1208130522,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"prefix__17717__auto__","prefix__17717__auto__",-1173350373,null),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"actual__17719__auto__","actual__17719__auto__",-671647286,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","take","cljs.core/take",439591112,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","count","cljs.core/count",-921270233,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"prefix__17717__auto__","prefix__17717__auto__",-1173350373,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"whole__17718__auto__","whole__17718__auto__",-1084374805,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"extra__17720__auto__","extra__17720__auto__",1760436177,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-coll-difference","speclj.core/-coll-difference",805206382,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"actual__17719__auto__","actual__17719__auto__",-671647286,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"prefix__17717__auto__","prefix__17717__auto__",-1173350373,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"missing__17721__auto__","missing__17721__auto__",-1160043408,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-coll-difference","speclj.core/-coll-difference",805206382,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"prefix__17717__auto__","prefix__17717__auto__",-1173350373,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"actual__17719__auto__","actual__17719__auto__",-671647286,null),null,(1),null))))),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","when","cljs.core/when",120293186,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","and","cljs.core/and",-6692549,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","empty?","cljs.core/empty?",1866613644,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"extra__17720__auto__","extra__17720__auto__",1760436177,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","empty?","cljs.core/empty?",1866613644,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"missing__17721__auto__","missing__17721__auto__",-1160043408,null),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-fail","speclj.core/-fail",-436223201,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null),null,(1),null)),(new cljs.core.List(null,"Expected ",null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-to-s","speclj.core/-to-s",-1548927580,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"whole__17718__auto__","whole__17718__auto__",-1084374805,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null," to NOT start",null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("speclj.platform","endl","speclj.platform/endl",-1139771306,null),null,(1),null)),(new cljs.core.List(null,"    with ",null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-to-s","speclj.core/-to-s",-1548927580,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"prefix__17717__auto__","prefix__17717__auto__",-1173350373,null),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"else","else",-1508377146),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"throw","throw",595905694,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-new-exception","speclj.core/-new-exception",-969354487,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","wrong-types","speclj.core/wrong-types",408672787,null),null,(1),null)),(new cljs.core.List(null,"should-not-start-with",null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"prefix__17717__auto__","prefix__17717__auto__",-1173350373,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"whole__17718__auto__","whole__17718__auto__",-1084374805,null),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)))));
});
(speclj.core.should_not_start_with.cljs$lang$macro = true);

var ret__5781__auto___17760 = /**
 * Assertion of suffix in strings and sequences.
 * 
 *   (should-end-with "foo" "foobar")            ; looks for string suffix
 *   (should-end-with [1 2] [1 2 3 4])               ; looks for a subset at end of collection
 */
speclj.core.should_end_with = (function speclj$core$should_end_with(_AMPERSAND_form,_AMPERSAND_env,suffix,whole){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"suffix__17742__auto__","suffix__17742__auto__",1395513741,null),null,(1),null)),(new cljs.core.List(null,suffix,null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"whole__17743__auto__","whole__17743__auto__",1230555777,null),null,(1),null)),(new cljs.core.List(null,whole,null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","cond","cljs.core/cond",2005388338,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","and","cljs.core/and",-6692549,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"suffix__17742__auto__","suffix__17742__auto__",1395513741,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"whole__17743__auto__","whole__17743__auto__",1230555777,null),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","when-not","cljs.core/when-not",-556141047,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("clojure.string","ends-with?","clojure.string/ends-with?",-745964149,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"whole__17743__auto__","whole__17743__auto__",1230555777,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"suffix__17742__auto__","suffix__17742__auto__",1395513741,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"padding__17744__auto__","padding__17744__auto__",281907569,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","apply","cljs.core/apply",1757277831,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","repeat","cljs.core/repeat",-89455077,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","-","cljs.core/-",187040141,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","count","cljs.core/count",-921270233,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"whole__17743__auto__","whole__17743__auto__",1230555777,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","count","cljs.core/count",-921270233,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"suffix__17742__auto__","suffix__17742__auto__",1395513741,null),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null," ",null,(1),null))))),null,(1),null))))),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-fail","speclj.core/-fail",-436223201,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null),null,(1),null)),(new cljs.core.List(null,"Expected [",null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"whole__17743__auto__","whole__17743__auto__",1230555777,null),null,(1),null)),(new cljs.core.List(null,"] to end\n",null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"padding__17744__auto__","padding__17744__auto__",281907569,null),null,(1),null)),(new cljs.core.List(null,"    with [",null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"suffix__17742__auto__","suffix__17742__auto__",1395513741,null),null,(1),null)),(new cljs.core.List(null,"]",null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","and","cljs.core/and",-6692549,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","coll?","cljs.core/coll?",1208130522,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"whole__17743__auto__","whole__17743__auto__",1230555777,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","coll?","cljs.core/coll?",1208130522,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"suffix__17742__auto__","suffix__17742__auto__",1395513741,null),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"actual__17745__auto__","actual__17745__auto__",-511868390,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","take-last","cljs.core/take-last",374295804,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","count","cljs.core/count",-921270233,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"suffix__17742__auto__","suffix__17742__auto__",1395513741,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"whole__17743__auto__","whole__17743__auto__",1230555777,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"extra__17746__auto__","extra__17746__auto__",-557284057,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-coll-difference","speclj.core/-coll-difference",805206382,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"actual__17745__auto__","actual__17745__auto__",-511868390,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"suffix__17742__auto__","suffix__17742__auto__",1395513741,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"missing__17747__auto__","missing__17747__auto__",1440638918,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-coll-difference","speclj.core/-coll-difference",805206382,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"suffix__17742__auto__","suffix__17742__auto__",1395513741,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"actual__17745__auto__","actual__17745__auto__",-511868390,null),null,(1),null))))),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","when-not","cljs.core/when-not",-556141047,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","and","cljs.core/and",-6692549,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","empty?","cljs.core/empty?",1866613644,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"extra__17746__auto__","extra__17746__auto__",-557284057,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","empty?","cljs.core/empty?",1866613644,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"missing__17747__auto__","missing__17747__auto__",1440638918,null),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"whole__17743__auto__","whole__17743__auto__",1230555777,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-to-s","speclj.core/-to-s",-1548927580,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"whole__17743__auto__","whole__17743__auto__",1230555777,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"suffix__17742__auto__","suffix__17742__auto__",1395513741,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-to-s","speclj.core/-to-s",-1548927580,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"suffix__17742__auto__","suffix__17742__auto__",1395513741,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"padding__17744__auto__","padding__17744__auto__",281907569,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","apply","cljs.core/apply",1757277831,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","repeat","cljs.core/repeat",-89455077,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","-","cljs.core/-",187040141,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","count","cljs.core/count",-921270233,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"whole__17743__auto__","whole__17743__auto__",1230555777,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","count","cljs.core/count",-921270233,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"suffix__17742__auto__","suffix__17742__auto__",1395513741,null),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null," ",null,(1),null))))),null,(1),null))))),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-fail","speclj.core/-fail",-436223201,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null),null,(1),null)),(new cljs.core.List(null,"Expected ",null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"whole__17743__auto__","whole__17743__auto__",1230555777,null),null,(1),null)),(new cljs.core.List(null," to end\n",null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"padding__17744__auto__","padding__17744__auto__",281907569,null),null,(1),null)),(new cljs.core.List(null,"    with ",null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"suffix__17742__auto__","suffix__17742__auto__",1395513741,null),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"else","else",-1508377146),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"throw","throw",595905694,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-new-exception","speclj.core/-new-exception",-969354487,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","wrong-types","speclj.core/wrong-types",408672787,null),null,(1),null)),(new cljs.core.List(null,"should-end-with",null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"suffix__17742__auto__","suffix__17742__auto__",1395513741,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"whole__17743__auto__","whole__17743__auto__",1230555777,null),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)))));
});
(speclj.core.should_end_with.cljs$lang$macro = true);

var ret__5781__auto___17789 = /**
 * The inverse of should-end-with.
 */
speclj.core.should_not_end_with = (function speclj$core$should_not_end_with(_AMPERSAND_form,_AMPERSAND_env,prefix,whole){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"prefix__17761__auto__","prefix__17761__auto__",2112128449,null),null,(1),null)),(new cljs.core.List(null,prefix,null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"whole__17762__auto__","whole__17762__auto__",1144361951,null),null,(1),null)),(new cljs.core.List(null,whole,null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","cond","cljs.core/cond",2005388338,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","and","cljs.core/and",-6692549,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"prefix__17761__auto__","prefix__17761__auto__",2112128449,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"whole__17762__auto__","whole__17762__auto__",1144361951,null),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","when","cljs.core/when",120293186,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("clojure.string","ends-with?","clojure.string/ends-with?",-745964149,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"whole__17762__auto__","whole__17762__auto__",1144361951,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"prefix__17761__auto__","prefix__17761__auto__",2112128449,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"padding__17763__auto__","padding__17763__auto__",-1650979778,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","apply","cljs.core/apply",1757277831,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","repeat","cljs.core/repeat",-89455077,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","-","cljs.core/-",187040141,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","count","cljs.core/count",-921270233,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"whole__17762__auto__","whole__17762__auto__",1144361951,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","count","cljs.core/count",-921270233,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"prefix__17761__auto__","prefix__17761__auto__",2112128449,null),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null," ",null,(1),null))))),null,(1),null))))),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-fail","speclj.core/-fail",-436223201,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null),null,(1),null)),(new cljs.core.List(null,"Expected [",null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"whole__17762__auto__","whole__17762__auto__",1144361951,null),null,(1),null)),(new cljs.core.List(null,"] to NOT end\n",null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"padding__17763__auto__","padding__17763__auto__",-1650979778,null),null,(1),null)),(new cljs.core.List(null,"    with [",null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"prefix__17761__auto__","prefix__17761__auto__",2112128449,null),null,(1),null)),(new cljs.core.List(null,"]",null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","and","cljs.core/and",-6692549,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","coll?","cljs.core/coll?",1208130522,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"whole__17762__auto__","whole__17762__auto__",1144361951,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","coll?","cljs.core/coll?",1208130522,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"prefix__17761__auto__","prefix__17761__auto__",2112128449,null),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"actual__17764__auto__","actual__17764__auto__",-91948529,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","take-last","cljs.core/take-last",374295804,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","count","cljs.core/count",-921270233,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"prefix__17761__auto__","prefix__17761__auto__",2112128449,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"whole__17762__auto__","whole__17762__auto__",1144361951,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"extra__17765__auto__","extra__17765__auto__",-191337066,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-coll-difference","speclj.core/-coll-difference",805206382,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"actual__17764__auto__","actual__17764__auto__",-91948529,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"prefix__17761__auto__","prefix__17761__auto__",2112128449,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"missing__17766__auto__","missing__17766__auto__",-501186121,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-coll-difference","speclj.core/-coll-difference",805206382,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"prefix__17761__auto__","prefix__17761__auto__",2112128449,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"actual__17764__auto__","actual__17764__auto__",-91948529,null),null,(1),null))))),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","when","cljs.core/when",120293186,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","and","cljs.core/and",-6692549,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","empty?","cljs.core/empty?",1866613644,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"extra__17765__auto__","extra__17765__auto__",-191337066,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","empty?","cljs.core/empty?",1866613644,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"missing__17766__auto__","missing__17766__auto__",-501186121,null),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"whole__17762__auto__","whole__17762__auto__",1144361951,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-to-s","speclj.core/-to-s",-1548927580,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"whole__17762__auto__","whole__17762__auto__",1144361951,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"prefix__17761__auto__","prefix__17761__auto__",2112128449,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-to-s","speclj.core/-to-s",-1548927580,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"prefix__17761__auto__","prefix__17761__auto__",2112128449,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"padding__17763__auto__","padding__17763__auto__",-1650979778,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","apply","cljs.core/apply",1757277831,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","repeat","cljs.core/repeat",-89455077,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","-","cljs.core/-",187040141,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","count","cljs.core/count",-921270233,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"whole__17762__auto__","whole__17762__auto__",1144361951,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","count","cljs.core/count",-921270233,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"prefix__17761__auto__","prefix__17761__auto__",2112128449,null),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null," ",null,(1),null))))),null,(1),null))))),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-fail","speclj.core/-fail",-436223201,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null),null,(1),null)),(new cljs.core.List(null,"Expected ",null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"whole__17762__auto__","whole__17762__auto__",1144361951,null),null,(1),null)),(new cljs.core.List(null," to NOT end\n",null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"padding__17763__auto__","padding__17763__auto__",-1650979778,null),null,(1),null)),(new cljs.core.List(null,"    with ",null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"prefix__17761__auto__","prefix__17761__auto__",2112128449,null),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"else","else",-1508377146),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"throw","throw",595905694,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-new-exception","speclj.core/-new-exception",-969354487,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","wrong-types","speclj.core/wrong-types",408672787,null),null,(1),null)),(new cljs.core.List(null,"should-not-end-with",null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"prefix__17761__auto__","prefix__17761__auto__",2112128449,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"whole__17762__auto__","whole__17762__auto__",1144361951,null),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)))));
});
(speclj.core.should_not_end_with.cljs$lang$macro = true);

var ret__5781__auto___17825 = speclj.core._difference_message = (function speclj$core$_difference_message(_AMPERSAND_form,_AMPERSAND_env,expected,actual,extra,missing){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null),null,(1),null)),(new cljs.core.List(null,"Expected contents: ",null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-to-s","speclj.core/-to-s",-1548927580,null),null,(1),null)),(new cljs.core.List(null,expected,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("speclj.platform","endl","speclj.platform/endl",-1139771306,null),null,(1),null)),(new cljs.core.List(null,"              got: ",null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-to-s","speclj.core/-to-s",-1548927580,null),null,(1),null)),(new cljs.core.List(null,actual,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("speclj.platform","endl","speclj.platform/endl",-1139771306,null),null,(1),null)),(new cljs.core.List(null,"          missing: ",null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-to-s","speclj.core/-to-s",-1548927580,null),null,(1),null)),(new cljs.core.List(null,missing,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("speclj.platform","endl","speclj.platform/endl",-1139771306,null),null,(1),null)),(new cljs.core.List(null,"            extra: ",null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-to-s","speclj.core/-to-s",-1548927580,null),null,(1),null)),(new cljs.core.List(null,extra,null,(1),null))))),null,(1),null)))));
});
(speclj.core._difference_message.cljs$lang$macro = true);

var ret__5781__auto___17826 = /**
 * Asserts 'equivalency'.
 *   When passed collections it will check that they have the same contents.
 *   For anything else it will assert that clojure.core/== returns true.
 */
speclj.core.should_EQ__EQ_ = (function speclj$core$should_EQ__EQ_(_AMPERSAND_form,_AMPERSAND_env,expected,actual){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"expected__17793__auto__","expected__17793__auto__",-1552733246,null),null,(1),null)),(new cljs.core.List(null,expected,null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"actual__17794__auto__","actual__17794__auto__",92615130,null),null,(1),null)),(new cljs.core.List(null,actual,null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","cond","cljs.core/cond",2005388338,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","and","cljs.core/and",-6692549,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","coll?","cljs.core/coll?",1208130522,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"expected__17793__auto__","expected__17793__auto__",-1552733246,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","coll?","cljs.core/coll?",1208130522,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"actual__17794__auto__","actual__17794__auto__",92615130,null),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"extra__17795__auto__","extra__17795__auto__",687519714,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-coll-difference","speclj.core/-coll-difference",805206382,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"actual__17794__auto__","actual__17794__auto__",92615130,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"expected__17793__auto__","expected__17793__auto__",-1552733246,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"missing__17796__auto__","missing__17796__auto__",1641897818,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-coll-difference","speclj.core/-coll-difference",805206382,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"expected__17793__auto__","expected__17793__auto__",-1552733246,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"actual__17794__auto__","actual__17794__auto__",92615130,null),null,(1),null))))),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","when-not","cljs.core/when-not",-556141047,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","and","cljs.core/and",-6692549,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","empty?","cljs.core/empty?",1866613644,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"extra__17795__auto__","extra__17795__auto__",687519714,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","empty?","cljs.core/empty?",1866613644,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"missing__17796__auto__","missing__17796__auto__",1641897818,null),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-fail","speclj.core/-fail",-436223201,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-difference-message","speclj.core/-difference-message",762568995,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"expected__17793__auto__","expected__17793__auto__",-1552733246,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"actual__17794__auto__","actual__17794__auto__",92615130,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"extra__17795__auto__","extra__17795__auto__",687519714,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"missing__17796__auto__","missing__17796__auto__",1641897818,null),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","and","cljs.core/and",-6692549,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","number?","cljs.core/number?",-811857295,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"expected__17793__auto__","expected__17793__auto__",-1552733246,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","number?","cljs.core/number?",-811857295,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"actual__17794__auto__","actual__17794__auto__",92615130,null),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","when-not","cljs.core/when-not",-556141047,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","==","cljs.core/==",-632471488,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"expected__17793__auto__","expected__17793__auto__",-1552733246,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"actual__17794__auto__","actual__17794__auto__",92615130,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-fail","speclj.core/-fail",-436223201,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null),null,(1),null)),(new cljs.core.List(null,"Expected: ",null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-to-s","speclj.core/-to-s",-1548927580,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"expected__17793__auto__","expected__17793__auto__",-1552733246,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("speclj.platform","endl","speclj.platform/endl",-1139771306,null),null,(1),null)),(new cljs.core.List(null,"     got: ",null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-to-s","speclj.core/-to-s",-1548927580,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"actual__17794__auto__","actual__17794__auto__",92615130,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null," (using ==)",null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"else","else",-1508377146),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"throw","throw",595905694,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-new-exception","speclj.core/-new-exception",-969354487,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","wrong-types","speclj.core/wrong-types",408672787,null),null,(1),null)),(new cljs.core.List(null,"should==",null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"expected__17793__auto__","expected__17793__auto__",-1552733246,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"actual__17794__auto__","actual__17794__auto__",92615130,null),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)))));
});
(speclj.core.should_EQ__EQ_.cljs$lang$macro = true);

var ret__5781__auto___17841 = /**
 * Asserts 'non-equivalency'.
 *   When passed collections it will check that they do NOT have the same contents.
 *   For anything else it will assert that clojure.core/== returns false.
 */
speclj.core.should_not_EQ__EQ_ = (function speclj$core$should_not_EQ__EQ_(_AMPERSAND_form,_AMPERSAND_env,expected,actual){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"expected__17827__auto__","expected__17827__auto__",-1312863632,null),null,(1),null)),(new cljs.core.List(null,expected,null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"actual__17828__auto__","actual__17828__auto__",1137112421,null),null,(1),null)),(new cljs.core.List(null,actual,null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","cond","cljs.core/cond",2005388338,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","and","cljs.core/and",-6692549,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","coll?","cljs.core/coll?",1208130522,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"expected__17827__auto__","expected__17827__auto__",-1312863632,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","coll?","cljs.core/coll?",1208130522,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"actual__17828__auto__","actual__17828__auto__",1137112421,null),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"extra__17829__auto__","extra__17829__auto__",-125849996,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-coll-difference","speclj.core/-coll-difference",805206382,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"actual__17828__auto__","actual__17828__auto__",1137112421,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"expected__17827__auto__","expected__17827__auto__",-1312863632,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"missing__17830__auto__","missing__17830__auto__",5757516,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-coll-difference","speclj.core/-coll-difference",805206382,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"expected__17827__auto__","expected__17827__auto__",-1312863632,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"actual__17828__auto__","actual__17828__auto__",1137112421,null),null,(1),null))))),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","when","cljs.core/when",120293186,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","and","cljs.core/and",-6692549,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","empty?","cljs.core/empty?",1866613644,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"extra__17829__auto__","extra__17829__auto__",-125849996,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","empty?","cljs.core/empty?",1866613644,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"missing__17830__auto__","missing__17830__auto__",5757516,null),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-fail","speclj.core/-fail",-436223201,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null),null,(1),null)),(new cljs.core.List(null,"Expected contents: ",null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-to-s","speclj.core/-to-s",-1548927580,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"expected__17827__auto__","expected__17827__auto__",-1312863632,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("speclj.platform","endl","speclj.platform/endl",-1139771306,null),null,(1),null)),(new cljs.core.List(null,"   to differ from: ",null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-to-s","speclj.core/-to-s",-1548927580,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"actual__17828__auto__","actual__17828__auto__",1137112421,null),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","and","cljs.core/and",-6692549,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","number?","cljs.core/number?",-811857295,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"expected__17827__auto__","expected__17827__auto__",-1312863632,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","number?","cljs.core/number?",-811857295,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"actual__17828__auto__","actual__17828__auto__",1137112421,null),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","when-not","cljs.core/when-not",-556141047,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","not","cljs.core/not",100665144,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","==","cljs.core/==",-632471488,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"expected__17827__auto__","expected__17827__auto__",-1312863632,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"actual__17828__auto__","actual__17828__auto__",1137112421,null),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-fail","speclj.core/-fail",-436223201,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null),null,(1),null)),(new cljs.core.List(null," Expected: ",null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-to-s","speclj.core/-to-s",-1548927580,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"expected__17827__auto__","expected__17827__auto__",-1312863632,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("speclj.platform","endl","speclj.platform/endl",-1139771306,null),null,(1),null)),(new cljs.core.List(null,"not to ==: ",null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-to-s","speclj.core/-to-s",-1548927580,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"actual__17828__auto__","actual__17828__auto__",1137112421,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null," (using ==)",null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"else","else",-1508377146),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"throw","throw",595905694,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-new-exception","speclj.core/-new-exception",-969354487,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","wrong-types","speclj.core/wrong-types",408672787,null),null,(1),null)),(new cljs.core.List(null,"should-not==",null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"expected__17827__auto__","expected__17827__auto__",-1312863632,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"actual__17828__auto__","actual__17828__auto__",1137112421,null),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)))));
});
(speclj.core.should_not_EQ__EQ_.cljs$lang$macro = true);

var ret__5781__auto___17860 = /**
 * Asserts that the form evaluates to a non-nil value
 */
speclj.core.should_not_be_nil = (function speclj$core$should_not_be_nil(_AMPERSAND_form,_AMPERSAND_env,form){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","should-not=","speclj.core/should-not=",-671600182,null),null,(1),null)),(new cljs.core.List(null,null,null,(1),null)),(new cljs.core.List(null,form,null,(1),null)))));
});
(speclj.core.should_not_be_nil.cljs$lang$macro = true);

var ret__5781__auto___17861 = (function (){
/**
 * Forces a failure. An optional message may be passed in.
 */
speclj.core.should_fail = (function speclj$core$should_fail(var_args){
var G__17843 = arguments.length;
switch (G__17843) {
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

var ret__5781__auto___17876 = speclj.core._create_should_throw_failure = (function speclj$core$_create_should_throw_failure(_AMPERSAND_form,_AMPERSAND_env,expected,actual,expr){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"expected-name__17856__auto__","expected-name__17856__auto__",-1737091250,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.platform","type-name","speclj.platform/type-name",-1621971592,null),null,(1),null)),(new cljs.core.List(null,expected,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"expected-gaps__17857__auto__","expected-gaps__17857__auto__",-182486613,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","apply","cljs.core/apply",1757277831,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","repeat","cljs.core/repeat",-89455077,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","count","cljs.core/count",-921270233,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"expected-name__17856__auto__","expected-name__17856__auto__",-1737091250,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null," ",null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"actual-string__17858__auto__","actual-string__17858__auto__",518303010,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","if-let","cljs.core/if-let",1346583165,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"actual__17859__auto__","actual__17859__auto__",1794378286,null),null,(1),null)),(new cljs.core.List(null,actual,null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","pr-str","cljs.core/pr-str",-552799478,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"actual__17859__auto__","actual__17859__auto__",1794378286,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,"<nothing thrown>",null,(1),null))))),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-new-failure","speclj.core/-new-failure",1552263542,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null),null,(1),null)),(new cljs.core.List(null,"Expected ",null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"expected-name__17856__auto__","expected-name__17856__auto__",-1737091250,null),null,(1),null)),(new cljs.core.List(null," thrown from: ",null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","pr-str","cljs.core/pr-str",-552799478,null),null,(1),null)),(new cljs.core.List(null,expr,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("speclj.platform","endl","speclj.platform/endl",-1139771306,null),null,(1),null)),(new cljs.core.List(null,"         ",null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"expected-gaps__17857__auto__","expected-gaps__17857__auto__",-182486613,null),null,(1),null)),(new cljs.core.List(null,"     but got: ",null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"actual-string__17858__auto__","actual-string__17858__auto__",518303010,null),null,(1),null))))),null,(1),null))))),null,(1),null)))));
});
(speclj.core._create_should_throw_failure.cljs$lang$macro = true);

var ret__5781__auto___17941 = (function (){
/**
 * Asserts that a Throwable is throws by the evaluation of a form.
 * When a class is passed, it asserts that the thrown Exception is an instance of the class.
 * There are three options for passing different kinds of predicates:
 *   - If a string, assert that the message of the Exception is equal to the string.
 *   - If a regex, asserts that the message of the Exception matches the regex.
 *   - If a function, assert that calling the function on the Exception returns a truthy value.
 */
speclj.core.should_throw = (function speclj$core$should_throw(var_args){
var G__17891 = arguments.length;
switch (G__17891) {
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
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","try-catch-anything","speclj.core/try-catch-anything",2038895468,null),null,(1),null)),(new cljs.core.List(null,form,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"throw","throw",595905694,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-create-should-throw-failure","speclj.core/-create-should-throw-failure",2126405641,null),null,(1),null)),(new cljs.core.List(null,throwable_type,null,(1),null)),(new cljs.core.List(null,null,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,form,null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"catch","catch",-1616370245,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"e__17880__auto__","e__17880__auto__",-544849314,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","cond","cljs.core/cond",2005388338,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.platform","failure?","speclj.platform/failure?",1598725570,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"e__17880__auto__","e__17880__auto__",-544849314,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"throw","throw",595905694,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"e__17880__auto__","e__17880__auto__",-544849314,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","not","cljs.core/not",100665144,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","instance?","cljs.core/instance?",2044751870,null),null,(1),null)),(new cljs.core.List(null,throwable_type,null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"e__17880__auto__","e__17880__auto__",-544849314,null),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"throw","throw",595905694,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-create-should-throw-failure","speclj.core/-create-should-throw-failure",2126405641,null),null,(1),null)),(new cljs.core.List(null,throwable_type,null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"e__17880__auto__","e__17880__auto__",-544849314,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,form,null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"else","else",-1508377146),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"e__17880__auto__","e__17880__auto__",-544849314,null),null,(1),null))))),null,(1),null))))),null,(1),null)))));
}));

(speclj.core.should_throw.cljs$core$IFn$_invoke$arity$5 = (function (_AMPERSAND_form,_AMPERSAND_env,throwable_type,predicate,form){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"e__17886__auto__","e__17886__auto__",243755305,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","should-throw","speclj.core/should-throw",-1013100325,null),null,(1),null)),(new cljs.core.List(null,throwable_type,null,(1),null)),(new cljs.core.List(null,form,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"regex__17887__auto__","regex__17887__auto__",-439049775,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","if-cljs","speclj.core/if-cljs",873977502,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("js","RegExp","js/RegExp",1778210562,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"java.util.regex.Pattern","java.util.regex.Pattern",484813383,null),null,(1),null))))),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","try-catch-anything","speclj.core/try-catch-anything",2038895468,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"predicate__17888__auto__","predicate__17888__auto__",400960246,null),null,(1),null)),(new cljs.core.List(null,predicate,null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","cond","cljs.core/cond",2005388338,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","instance?","cljs.core/instance?",2044751870,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"regex__17887__auto__","regex__17887__auto__",-439049775,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"predicate__17888__auto__","predicate__17888__auto__",400960246,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","should-not-be-nil","speclj.core/should-not-be-nil",962725329,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","re-find","cljs.core/re-find",745076500,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"predicate__17888__auto__","predicate__17888__auto__",400960246,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.platform","error-message","speclj.platform/error-message",124672328,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"e__17886__auto__","e__17886__auto__",243755305,null),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","ifn?","cljs.core/ifn?",1573873861,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"predicate__17888__auto__","predicate__17888__auto__",400960246,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","should=","speclj.core/should=",83977914,null),null,(1),null)),(new cljs.core.List(null,true,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"predicate__17888__auto__","predicate__17888__auto__",400960246,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"e__17886__auto__","e__17886__auto__",243755305,null),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"else","else",-1508377146),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","should=","speclj.core/should=",83977914,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"predicate__17888__auto__","predicate__17888__auto__",400960246,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.platform","error-message","speclj.platform/error-message",124672328,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"e__17886__auto__","e__17886__auto__",243755305,null),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"catch","catch",-1616370245,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"f__17889__auto__","f__17889__auto__",1005581407,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-fail","speclj.core/-fail",-436223201,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null),null,(1),null)),(new cljs.core.List(null,"Expected exception predicate didn't match",null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("speclj.platform","endl","speclj.platform/endl",-1139771306,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.platform","error-message","speclj.platform/error-message",124672328,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"f__17889__auto__","f__17889__auto__",1005581407,null),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)))));
}));

(speclj.core.should_throw.cljs$lang$maxFixedArity = 5);

return null;
})()
;
(speclj.core.should_throw.cljs$lang$macro = true);

var ret__5781__auto___17965 = /**
 * Asserts that nothing is thrown by the evaluation of a form.
 */
speclj.core.should_not_throw = (function speclj$core$should_not_throw(_AMPERSAND_form,_AMPERSAND_env,form){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","try-catch-anything","speclj.core/try-catch-anything",2038895468,null),null,(1),null)),(new cljs.core.List(null,form,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"catch","catch",-1616370245,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"e__17942__auto__","e__17942__auto__",148089837,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-fail","speclj.core/-fail",-436223201,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null),null,(1),null)),(new cljs.core.List(null,"Expected nothing thrown from: ",null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","pr-str","cljs.core/pr-str",-552799478,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,form,null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("speclj.platform","endl","speclj.platform/endl",-1139771306,null),null,(1),null)),(new cljs.core.List(null,"                     but got: ",null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","pr-str","cljs.core/pr-str",-552799478,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"e__17942__auto__","e__17942__auto__",148089837,null),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)))));
});
(speclj.core.should_not_throw.cljs$lang$macro = true);

var ret__5781__auto___17974 = /**
 * Asserts that the type of the given form derives from or equals the expected type
 */
speclj.core.should_be_a = (function speclj$core$should_be_a(_AMPERSAND_form,_AMPERSAND_env,expected_type,actual_form){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"actual__17950__auto__","actual__17950__auto__",878836066,null),null,(1),null)),(new cljs.core.List(null,actual_form,null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"actual-type__17951__auto__","actual-type__17951__auto__",214926780,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","type","cljs.core/type",-821761154,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"actual__17950__auto__","actual__17950__auto__",878836066,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"expected-type__17952__auto__","expected-type__17952__auto__",-406633740,null),null,(1),null)),(new cljs.core.List(null,expected_type,null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","when-not","cljs.core/when-not",-556141047,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","isa?","cljs.core/isa?",951980347,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"actual-type__17951__auto__","actual-type__17951__auto__",214926780,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"expected-type__17952__auto__","expected-type__17952__auto__",-406633740,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-fail","speclj.core/-fail",-436223201,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null),null,(1),null)),(new cljs.core.List(null,"Expected ",null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-to-s","speclj.core/-to-s",-1548927580,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"actual__17950__auto__","actual__17950__auto__",878836066,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null," to be an instance of: ",null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-to-s","speclj.core/-to-s",-1548927580,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"expected-type__17952__auto__","expected-type__17952__auto__",-406633740,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("speclj.platform","endl","speclj.platform/endl",-1139771306,null),null,(1),null)),(new cljs.core.List(null,"           but was an instance of: ",null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-to-s","speclj.core/-to-s",-1548927580,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"actual-type__17951__auto__","actual-type__17951__auto__",214926780,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null," (using isa?)",null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)))));
});
(speclj.core.should_be_a.cljs$lang$macro = true);

var ret__5781__auto___17981 = /**
 * Asserts that the type of the given form does not derive from or equal the expected type
 */
speclj.core.should_not_be_a = (function speclj$core$should_not_be_a(_AMPERSAND_form,_AMPERSAND_env,expected_type,actual_form){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"actual__17962__auto__","actual__17962__auto__",1996846457,null),null,(1),null)),(new cljs.core.List(null,actual_form,null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"actual-type__17963__auto__","actual-type__17963__auto__",-1601708152,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","type","cljs.core/type",-821761154,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"actual__17962__auto__","actual__17962__auto__",1996846457,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"expected-type__17964__auto__","expected-type__17964__auto__",-2007688537,null),null,(1),null)),(new cljs.core.List(null,expected_type,null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","when","cljs.core/when",120293186,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","isa?","cljs.core/isa?",951980347,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"actual-type__17963__auto__","actual-type__17963__auto__",-1601708152,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"expected-type__17964__auto__","expected-type__17964__auto__",-2007688537,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-fail","speclj.core/-fail",-436223201,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null),null,(1),null)),(new cljs.core.List(null,"Expected ",null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-to-s","speclj.core/-to-s",-1548927580,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"actual__17962__auto__","actual__17962__auto__",1996846457,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null," not to be an instance of ",null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-to-s","speclj.core/-to-s",-1548927580,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"expected-type__17964__auto__","expected-type__17964__auto__",-2007688537,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null," but was (using isa?)",null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)))));
});
(speclj.core.should_not_be_a.cljs$lang$macro = true);

var ret__5781__auto___17988 = (function (){
/**
 * When added to a characteristic, it is marked as pending.  If a message is provided it will be printed
 *   in the run report
 */
speclj.core.pending = (function speclj$core$pending(var_args){
var G__17973 = arguments.length;
switch (G__17973) {
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

var ret__5781__auto___17991 = (function (){
/**
 * Add tags to the containing context.  All values passed will be converted into keywords.  Contexts can be filtered
 *   at runtime by their tags.
 * 
 *   (tags :one :two)
 */
speclj.core.tags = (function speclj$core$tags(var_args){
var args__5732__auto__ = [];
var len__5726__auto___17993 = arguments.length;
var i__5727__auto___17994 = (0);
while(true){
if((i__5727__auto___17994 < len__5726__auto___17993)){
args__5732__auto__.push((arguments[i__5727__auto___17994]));

var G__17995 = (i__5727__auto___17994 + (1));
i__5727__auto___17994 = G__17995;
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
(speclj.core.tags.cljs$lang$applyTo = (function (seq17978){
var G__17979 = cljs.core.first.call(null,seq17978);
var seq17978__$1 = cljs.core.next.call(null,seq17978);
var G__17980 = cljs.core.first.call(null,seq17978__$1);
var seq17978__$2 = cljs.core.next.call(null,seq17978__$1);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__17979,G__17980,seq17978__$2);
}));

return null;
})()
;
(speclj.core.tags.cljs$lang$macro = true);

var ret__5781__auto___17996 = /**
 * Add this to describe/context blocks that use stubs.  It will set up a clean recording environment.
 */
speclj.core.with_stubs = (function speclj$core$with_stubs(_AMPERSAND_form,_AMPERSAND_env){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","around","speclj.core/around",649826642,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"it__17987__auto__","it__17987__auto__",1538529330,null),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","with-redefs","cljs.core/with-redefs",1134293954,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.stub","*stubbed-invocations*","speclj.stub/*stubbed-invocations*",-474598582,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","atom","cljs.core/atom",1943839529,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null)))),null,(1),null))))),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"it__17987__auto__","it__17987__auto__",1538529330,null),null,(1),null))))),null,(1),null))))),null,(1),null)))));
});
(speclj.core.with_stubs.cljs$lang$macro = true);

var ret__5781__auto___18001 = (function (){
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
var G__17992 = arguments.length;
switch (G__17992) {
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

var ret__5781__auto___18062 = (function (){
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
var G__18025 = arguments.length;
switch (G__18025) {
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
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"name__18008__auto__","name__18008__auto__",-560510693,null),null,(1),null)),(new cljs.core.List(null,name,null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"options__18009__auto__","options__18009__auto__",490439358,null),null,(1),null)),(new cljs.core.List(null,options,null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"invocations__18010__auto__","invocations__18010__auto__",499727341,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.stub","invocations-of","speclj.stub/invocations-of",1244579949,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"name__18008__auto__","name__18008__auto__",-560510693,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"times__18011__auto__","times__18011__auto__",503478475,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Keyword(null,"times","times",1671571467),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"options__18009__auto__","options__18009__auto__",490439358,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"times?__18012__auto__","times?__18012__auto__",-1658480253,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","number?","cljs.core/number?",-811857295,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"times__18011__auto__","times__18011__auto__",503478475,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"check-params?__18013__auto__","check-params?__18013__auto__",1037153725,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"options__18009__auto__","options__18009__auto__",490439358,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"with","with",-1536296876),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"with__18014__auto__","with__18014__auto__",1699413146,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Keyword(null,"with","with",-1536296876),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"options__18009__auto__","options__18009__auto__",490439358,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"with__18014__auto__","with__18014__auto__",1699413146,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","nil?","cljs.core/nil?",945071861,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"with__18014__auto__","with__18014__auto__",1699413146,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null)))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"with__18014__auto__","with__18014__auto__",1699413146,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"invocations-str__18015__auto__","invocations-str__18015__auto__",1179607982,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"p1__18000__18016__auto__","p1__18000__18016__auto__",-1217066534,null),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","=","cljs.core/=",-1891498332,null),null,(1),null)),(new cljs.core.List(null,(1),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"p1__18000__18016__auto__","p1__18000__18016__auto__",-1217066534,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,"invocation",null,(1),null)),(new cljs.core.List(null,"invocations",null,(1),null))))),null,(1),null))))),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","cond","cljs.core/cond",2005388338,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","and","cljs.core/and",-6692549,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"times?__18012__auto__","times?__18012__auto__",-1658480253,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"check-params?__18013__auto__","check-params?__18013__auto__",1037153725,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"matching-invocations__18017__auto__","matching-invocations__18017__auto__",-1163685555,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","filter","cljs.core/filter",-251894204,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"p1__18002__18018__auto__","p1__18002__18018__auto__",2053587315,null),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.stub","params-match?","speclj.stub/params-match?",-1909506443,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"with__18014__auto__","with__18014__auto__",1699413146,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"p1__18002__18018__auto__","p1__18002__18018__auto__",2053587315,null),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"invocations__18010__auto__","invocations__18010__auto__",499727341,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"matching-count__18019__auto__","matching-count__18019__auto__",1612202884,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","count","cljs.core/count",-921270233,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"matching-invocations__18017__auto__","matching-invocations__18017__auto__",-1163685555,null),null,(1),null))))),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","when-not","cljs.core/when-not",-556141047,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","=","cljs.core/=",-1891498332,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"times__18011__auto__","times__18011__auto__",503478475,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"matching-count__18019__auto__","matching-count__18019__auto__",1612202884,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-fail","speclj.core/-fail",-436223201,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null),null,(1),null)),(new cljs.core.List(null,"Expected: ",null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"times__18011__auto__","times__18011__auto__",503478475,null),null,(1),null)),(new cljs.core.List(null," ",null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"invocations-str__18015__auto__","invocations-str__18015__auto__",1179607982,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"times__18011__auto__","times__18011__auto__",503478475,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null," of ",null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"name__18008__auto__","name__18008__auto__",-560510693,null),null,(1),null)),(new cljs.core.List(null," with ",null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","pr-str","cljs.core/pr-str",-552799478,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"with__18014__auto__","with__18014__auto__",1699413146,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("speclj.platform","endl","speclj.platform/endl",-1139771306,null),null,(1),null)),(new cljs.core.List(null,"     got: ",null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"matching-count__18019__auto__","matching-count__18019__auto__",1612202884,null),null,(1),null)),(new cljs.core.List(null," ",null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"invocations-str__18015__auto__","invocations-str__18015__auto__",1179607982,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"matching-count__18019__auto__","matching-count__18019__auto__",1612202884,null),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"check-params?__18013__auto__","check-params?__18013__auto__",1037153725,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","when-not","cljs.core/when-not",-556141047,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","some","cljs.core/some",-977628065,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"p1__18003__18020__auto__","p1__18003__18020__auto__",1701963636,null),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.stub","params-match?","speclj.stub/params-match?",-1909506443,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"with__18014__auto__","with__18014__auto__",1699413146,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"p1__18003__18020__auto__","p1__18003__18020__auto__",1701963636,null),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"invocations__18010__auto__","invocations__18010__auto__",499727341,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-fail","speclj.core/-fail",-436223201,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null),null,(1),null)),(new cljs.core.List(null,"Expected: invocation of ",null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"name__18008__auto__","name__18008__auto__",-560510693,null),null,(1),null)),(new cljs.core.List(null," with ",null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","pr-str","cljs.core/pr-str",-552799478,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"with__18014__auto__","with__18014__auto__",1699413146,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("speclj.platform","endl","speclj.platform/endl",-1139771306,null),null,(1),null)),(new cljs.core.List(null,"     got: ",null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","pr-str","cljs.core/pr-str",-552799478,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"invocations__18010__auto__","invocations__18010__auto__",499727341,null),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"times?__18012__auto__","times?__18012__auto__",-1658480253,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","when-not","cljs.core/when-not",-556141047,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","=","cljs.core/=",-1891498332,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"times__18011__auto__","times__18011__auto__",503478475,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","count","cljs.core/count",-921270233,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"invocations__18010__auto__","invocations__18010__auto__",499727341,null),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-fail","speclj.core/-fail",-436223201,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null),null,(1),null)),(new cljs.core.List(null,"Expected: ",null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"times__18011__auto__","times__18011__auto__",503478475,null),null,(1),null)),(new cljs.core.List(null," ",null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"invocations-str__18015__auto__","invocations-str__18015__auto__",1179607982,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"times__18011__auto__","times__18011__auto__",503478475,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null," of ",null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"name__18008__auto__","name__18008__auto__",-560510693,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("speclj.platform","endl","speclj.platform/endl",-1139771306,null),null,(1),null)),(new cljs.core.List(null,"     got: ",null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","count","cljs.core/count",-921270233,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"invocations__18010__auto__","invocations__18010__auto__",499727341,null),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"else","else",-1508377146),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","when-not","cljs.core/when-not",-556141047,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","seq","cljs.core/seq",-1649497689,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"invocations__18010__auto__","invocations__18010__auto__",499727341,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-fail","speclj.core/-fail",-436223201,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null),null,(1),null)),(new cljs.core.List(null,"Expected: an invocation of ",null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"name__18008__auto__","name__18008__auto__",-560510693,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("speclj.platform","endl","speclj.platform/endl",-1139771306,null),null,(1),null)),(new cljs.core.List(null,"     got: ",null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","count","cljs.core/count",-921270233,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"invocations__18010__auto__","invocations__18010__auto__",499727341,null),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)))));
}));

(speclj.core.should_have_invoked.cljs$lang$maxFixedArity = 4);

return null;
})()
;
(speclj.core.should_have_invoked.cljs$lang$macro = true);

var ret__5781__auto___18108 = (function (){
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
var G__18089 = arguments.length;
switch (G__18089) {
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
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"name__18071__auto__","name__18071__auto__",1601018822,null),null,(1),null)),(new cljs.core.List(null,name,null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"options__18072__auto__","options__18072__auto__",-1964440217,null),null,(1),null)),(new cljs.core.List(null,options,null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"invocations__18073__auto__","invocations__18073__auto__",-225067727,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.stub","invocations-of","speclj.stub/invocations-of",1244579949,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"name__18071__auto__","name__18071__auto__",1601018822,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"times__18074__auto__","times__18074__auto__",-1230473279,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Keyword(null,"times","times",1671571467),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"options__18072__auto__","options__18072__auto__",-1964440217,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"times?__18075__auto__","times?__18075__auto__",648075505,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","number?","cljs.core/number?",-811857295,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"times__18074__auto__","times__18074__auto__",-1230473279,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"check-params?__18076__auto__","check-params?__18076__auto__",264189647,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"options__18072__auto__","options__18072__auto__",-1964440217,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"with","with",-1536296876),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"with__18077__auto__","with__18077__auto__",-102082653,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Keyword(null,"with","with",-1536296876),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"options__18072__auto__","options__18072__auto__",-1964440217,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"with__18077__auto__","with__18077__auto__",-102082653,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","nil?","cljs.core/nil?",945071861,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"with__18077__auto__","with__18077__auto__",-102082653,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null)))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"with__18077__auto__","with__18077__auto__",-102082653,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"add-s__18078__auto__","add-s__18078__auto__",1255896506,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"p1__18064__18079__auto__","p1__18064__18079__auto__",764566610,null),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","=","cljs.core/=",-1891498332,null),null,(1),null)),(new cljs.core.List(null,(1),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"p1__18064__18079__auto__","p1__18064__18079__auto__",764566610,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,"",null,(1),null)),(new cljs.core.List(null,"s",null,(1),null))))),null,(1),null))))),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","cond","cljs.core/cond",2005388338,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","and","cljs.core/and",-6692549,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"times?__18075__auto__","times?__18075__auto__",648075505,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"check-params?__18076__auto__","check-params?__18076__auto__",264189647,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"matching-invocations__18080__auto__","matching-invocations__18080__auto__",-64458069,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","filter","cljs.core/filter",-251894204,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"p1__18065__18081__auto__","p1__18065__18081__auto__",-1135060767,null),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.stub","params-match?","speclj.stub/params-match?",-1909506443,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"with__18077__auto__","with__18077__auto__",-102082653,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"p1__18065__18081__auto__","p1__18065__18081__auto__",-1135060767,null),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"invocations__18073__auto__","invocations__18073__auto__",-225067727,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"matching-count__18082__auto__","matching-count__18082__auto__",-1958152638,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","count","cljs.core/count",-921270233,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"matching-invocations__18080__auto__","matching-invocations__18080__auto__",-64458069,null),null,(1),null))))),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","when","cljs.core/when",120293186,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","=","cljs.core/=",-1891498332,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"times__18074__auto__","times__18074__auto__",-1230473279,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"matching-count__18082__auto__","matching-count__18082__auto__",-1958152638,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-fail","speclj.core/-fail",-436223201,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null),null,(1),null)),(new cljs.core.List(null,"Expected: ",null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"name__18071__auto__","name__18071__auto__",1601018822,null),null,(1),null)),(new cljs.core.List(null," not to have been invoked ",null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"times__18074__auto__","times__18074__auto__",-1230473279,null),null,(1),null)),(new cljs.core.List(null," time",null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"add-s__18078__auto__","add-s__18078__auto__",1255896506,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"matching-count__18082__auto__","matching-count__18082__auto__",-1958152638,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null," with ",null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","pr-str","cljs.core/pr-str",-552799478,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"with__18077__auto__","with__18077__auto__",-102082653,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("speclj.platform","endl","speclj.platform/endl",-1139771306,null),null,(1),null)),(new cljs.core.List(null,"     got: ",null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"matching-count__18082__auto__","matching-count__18082__auto__",-1958152638,null),null,(1),null)),(new cljs.core.List(null," invocation",null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"add-s__18078__auto__","add-s__18078__auto__",1255896506,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"matching-count__18082__auto__","matching-count__18082__auto__",-1958152638,null),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"times?__18075__auto__","times?__18075__auto__",648075505,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","when","cljs.core/when",120293186,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","=","cljs.core/=",-1891498332,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"times__18074__auto__","times__18074__auto__",-1230473279,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","count","cljs.core/count",-921270233,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"invocations__18073__auto__","invocations__18073__auto__",-225067727,null),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-fail","speclj.core/-fail",-436223201,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null),null,(1),null)),(new cljs.core.List(null,"Expected: ",null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"name__18071__auto__","name__18071__auto__",1601018822,null),null,(1),null)),(new cljs.core.List(null," not to have been invoked ",null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"times__18074__auto__","times__18074__auto__",-1230473279,null),null,(1),null)),(new cljs.core.List(null," time",null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"add-s__18078__auto__","add-s__18078__auto__",1255896506,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"times__18074__auto__","times__18074__auto__",-1230473279,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("speclj.platform","endl","speclj.platform/endl",-1139771306,null),null,(1),null)),(new cljs.core.List(null,"     got: ",null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"times__18074__auto__","times__18074__auto__",-1230473279,null),null,(1),null)),(new cljs.core.List(null," invocation",null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"add-s__18078__auto__","add-s__18078__auto__",1255896506,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"times__18074__auto__","times__18074__auto__",-1230473279,null),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"check-params?__18076__auto__","check-params?__18076__auto__",264189647,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","when","cljs.core/when",120293186,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","some","cljs.core/some",-977628065,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"p1__18066__18083__auto__","p1__18066__18083__auto__",-647752209,null),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.stub","params-match?","speclj.stub/params-match?",-1909506443,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"with__18077__auto__","with__18077__auto__",-102082653,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"p1__18066__18083__auto__","p1__18066__18083__auto__",-647752209,null),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"invocations__18073__auto__","invocations__18073__auto__",-225067727,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-fail","speclj.core/-fail",-436223201,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null),null,(1),null)),(new cljs.core.List(null,"Expected: ",null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"name__18071__auto__","name__18071__auto__",1601018822,null),null,(1),null)),(new cljs.core.List(null," not to have been invoked with ",null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","pr-str","cljs.core/pr-str",-552799478,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"with__18077__auto__","with__18077__auto__",-102082653,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("speclj.platform","endl","speclj.platform/endl",-1139771306,null),null,(1),null)),(new cljs.core.List(null,"     got: ",null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","pr-str","cljs.core/pr-str",-552799478,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"invocations__18073__auto__","invocations__18073__auto__",-225067727,null),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"else","else",-1508377146),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","when","cljs.core/when",120293186,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","seq","cljs.core/seq",-1649497689,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"invocations__18073__auto__","invocations__18073__auto__",-225067727,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-fail","speclj.core/-fail",-436223201,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null),null,(1),null)),(new cljs.core.List(null,"Expected: 0 invocations of ",null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"name__18071__auto__","name__18071__auto__",1601018822,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("speclj.platform","endl","speclj.platform/endl",-1139771306,null),null,(1),null)),(new cljs.core.List(null,"     got: ",null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","count","cljs.core/count",-921270233,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"invocations__18073__auto__","invocations__18073__auto__",-225067727,null),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)))));
}));

(speclj.core.should_not_have_invoked.cljs$lang$maxFixedArity = 4);

return null;
})()
;
(speclj.core.should_not_have_invoked.cljs$lang$macro = true);

speclj.core._STAR_bound_by_should_invoke_STAR_ = false;
var ret__5781__auto___18181 = speclj.core.bound_by_should_invoke_QMARK_ = (function speclj$core$bound_by_should_invoke_QMARK_(_AMPERSAND_form,_AMPERSAND_env){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","if-cljs","speclj.core/if-cljs",873977502,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","*bound-by-should-invoke*","speclj.core/*bound-by-should-invoke*",-207459510,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","and","cljs.core/and",-6692549,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","bound?","speclj.core/bound?",-726786538,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"var","var",870848730,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","*bound-by-should-invoke*","speclj.core/*bound-by-should-invoke*",-207459510,null),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","*bound-by-should-invoke*","speclj.core/*bound-by-should-invoke*",-207459510,null),null,(1),null))))),null,(1),null)))));
});
(speclj.core.bound_by_should_invoke_QMARK_.cljs$lang$macro = true);

var ret__5781__auto___18191 = (function (){
speclj.core.with_stubbed_invocations = (function speclj$core$with_stubbed_invocations(var_args){
var args__5732__auto__ = [];
var len__5726__auto___18192 = arguments.length;
var i__5727__auto___18193 = (0);
while(true){
if((i__5727__auto___18193 < len__5726__auto___18192)){
args__5732__auto__.push((arguments[i__5727__auto___18193]));

var G__18194 = (i__5727__auto___18193 + (1));
i__5727__auto___18193 = G__18194;
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
(speclj.core.with_stubbed_invocations.cljs$lang$applyTo = (function (seq18112){
var G__18113 = cljs.core.first.call(null,seq18112);
var seq18112__$1 = cljs.core.next.call(null,seq18112);
var G__18114 = cljs.core.first.call(null,seq18112__$1);
var seq18112__$2 = cljs.core.next.call(null,seq18112__$1);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18113,G__18114,seq18112__$2);
}));

return null;
})()
;
(speclj.core.with_stubbed_invocations.cljs$lang$macro = true);

var ret__5781__auto___18195 = (function (){
/**
 * Creates a stub, and binds it to the specified var, evaluates the body, and checks the invocations.
 * 
 *   (should-invoke reverse {:with [1 2 3] :return []} (reverse [1 2 3]))
 * 
 *   See stub and should-have-invoked for valid options.
 */
speclj.core.should_invoke = (function speclj$core$should_invoke(var_args){
var args__5732__auto__ = [];
var len__5726__auto___18196 = arguments.length;
var i__5727__auto___18197 = (0);
while(true){
if((i__5727__auto___18197 < len__5726__auto___18196)){
args__5732__auto__.push((arguments[i__5727__auto___18197]));

var G__18198 = (i__5727__auto___18197 + (1));
i__5727__auto___18197 = G__18198;
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
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"options__18120__auto__","options__18120__auto__",-2063466975,null),null,(1),null)),(new cljs.core.List(null,options,null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","with-stubbed-invocations","speclj.core/with-stubbed-invocations",-469130005,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","with-redefs","cljs.core/with-redefs",1134293954,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,var$,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.stub","stub","speclj.stub/stub",977871771,null),null,(1),null)),(new cljs.core.List(null,var_name,null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"options__18120__auto__","options__18120__auto__",-2063466975,null),null,(1),null))))),null,(1),null)))))),null,(1),null)),body))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","should-have-invoked","speclj.core/should-have-invoked",-864349238,null),null,(1),null)),(new cljs.core.List(null,var_name,null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"options__18120__auto__","options__18120__auto__",-2063466975,null),null,(1),null))))),null,(1),null))))),null,(1),null)))));
}));

(speclj.core.should_invoke.cljs$lang$maxFixedArity = (4));

/** @this {Function} */
(speclj.core.should_invoke.cljs$lang$applyTo = (function (seq18126){
var G__18127 = cljs.core.first.call(null,seq18126);
var seq18126__$1 = cljs.core.next.call(null,seq18126);
var G__18129 = cljs.core.first.call(null,seq18126__$1);
var seq18126__$2 = cljs.core.next.call(null,seq18126__$1);
var G__18132 = cljs.core.first.call(null,seq18126__$2);
var seq18126__$3 = cljs.core.next.call(null,seq18126__$2);
var G__18133 = cljs.core.first.call(null,seq18126__$3);
var seq18126__$4 = cljs.core.next.call(null,seq18126__$3);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18127,G__18129,G__18132,G__18133,seq18126__$4);
}));

return null;
})()
;
(speclj.core.should_invoke.cljs$lang$macro = true);

var ret__5781__auto___18201 = (function (){
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
var len__5726__auto___18202 = arguments.length;
var i__5727__auto___18203 = (0);
while(true){
if((i__5727__auto___18203 < len__5726__auto___18202)){
args__5732__auto__.push((arguments[i__5727__auto___18203]));

var G__18204 = (i__5727__auto___18203 + (1));
i__5727__auto___18203 = G__18204;
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
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"options__18167__auto__","options__18167__auto__",1515590611,null),null,(1),null)),(new cljs.core.List(null,options,null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","with-stubbed-invocations","speclj.core/with-stubbed-invocations",-469130005,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","with-redefs","cljs.core/with-redefs",1134293954,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,var$,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.stub","stub","speclj.stub/stub",977871771,null),null,(1),null)),(new cljs.core.List(null,var_name,null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"options__18167__auto__","options__18167__auto__",1515590611,null),null,(1),null))))),null,(1),null)))))),null,(1),null)),body))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","should-not-have-invoked","speclj.core/should-not-have-invoked",1793584684,null),null,(1),null)),(new cljs.core.List(null,var_name,null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"options__18167__auto__","options__18167__auto__",1515590611,null),null,(1),null))))),null,(1),null))))),null,(1),null)))));
}));

(speclj.core.should_not_invoke.cljs$lang$maxFixedArity = (4));

/** @this {Function} */
(speclj.core.should_not_invoke.cljs$lang$applyTo = (function (seq18176){
var G__18177 = cljs.core.first.call(null,seq18176);
var seq18176__$1 = cljs.core.next.call(null,seq18176);
var G__18178 = cljs.core.first.call(null,seq18176__$1);
var seq18176__$2 = cljs.core.next.call(null,seq18176__$1);
var G__18179 = cljs.core.first.call(null,seq18176__$2);
var seq18176__$3 = cljs.core.next.call(null,seq18176__$2);
var G__18180 = cljs.core.first.call(null,seq18176__$3);
var seq18176__$4 = cljs.core.next.call(null,seq18176__$3);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18177,G__18178,G__18179,G__18180,seq18176__$4);
}));

return null;
})()
;
(speclj.core.should_not_invoke.cljs$lang$macro = true);

var ret__5781__auto___18210 = /**
 * Asserts that the first numeric form is less than the second numeric form, using the built-in < function.
 */
speclj.core.should_LT_ = (function speclj$core$should_LT_(_AMPERSAND_form,_AMPERSAND_env,a,b){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"a__18199__auto__","a__18199__auto__",511094725,null),null,(1),null)),(new cljs.core.List(null,a,null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"b__18200__auto__","b__18200__auto__",2026858895,null),null,(1),null)),(new cljs.core.List(null,b,null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","and","cljs.core/and",-6692549,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","number?","cljs.core/number?",-811857295,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"a__18199__auto__","a__18199__auto__",511094725,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","number?","cljs.core/number?",-811857295,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"b__18200__auto__","b__18200__auto__",2026858895,null),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","when-not","cljs.core/when-not",-556141047,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","<","cljs.core/<",1677496129,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"a__18199__auto__","a__18199__auto__",511094725,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"b__18200__auto__","b__18200__auto__",2026858895,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-fail","speclj.core/-fail",-436223201,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null),null,(1),null)),(new cljs.core.List(null,"expected ",null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"a__18199__auto__","a__18199__auto__",511094725,null),null,(1),null)),(new cljs.core.List(null," to be less than ",null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"b__18200__auto__","b__18200__auto__",2026858895,null),null,(1),null)),(new cljs.core.List(null," but got: (< ",null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"a__18199__auto__","a__18199__auto__",511094725,null),null,(1),null)),(new cljs.core.List(null," ",null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"b__18200__auto__","b__18200__auto__",2026858895,null),null,(1),null)),(new cljs.core.List(null,")",null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"throw","throw",595905694,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-new-exception","speclj.core/-new-exception",-969354487,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","wrong-types","speclj.core/wrong-types",408672787,null),null,(1),null)),(new cljs.core.List(null,"should<",null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"a__18199__auto__","a__18199__auto__",511094725,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"b__18200__auto__","b__18200__auto__",2026858895,null),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)))));
});
(speclj.core.should_LT_.cljs$lang$macro = true);

var ret__5781__auto___18211 = /**
 * Asserts that the first numeric form is greater than the second numeric form, using the built-in > function.
 */
speclj.core.should_GT_ = (function speclj$core$should_GT_(_AMPERSAND_form,_AMPERSAND_env,a,b){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"a__18208__auto__","a__18208__auto__",-1797744301,null),null,(1),null)),(new cljs.core.List(null,a,null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"b__18209__auto__","b__18209__auto__",881701149,null),null,(1),null)),(new cljs.core.List(null,b,null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","and","cljs.core/and",-6692549,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","number?","cljs.core/number?",-811857295,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"a__18208__auto__","a__18208__auto__",-1797744301,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","number?","cljs.core/number?",-811857295,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"b__18209__auto__","b__18209__auto__",881701149,null),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","when-not","cljs.core/when-not",-556141047,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core",">","cljs.core/>",2020535938,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"a__18208__auto__","a__18208__auto__",-1797744301,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"b__18209__auto__","b__18209__auto__",881701149,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-fail","speclj.core/-fail",-436223201,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null),null,(1),null)),(new cljs.core.List(null,"expected ",null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"a__18208__auto__","a__18208__auto__",-1797744301,null),null,(1),null)),(new cljs.core.List(null," to be greater than ",null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"b__18209__auto__","b__18209__auto__",881701149,null),null,(1),null)),(new cljs.core.List(null," but got: (> ",null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"a__18208__auto__","a__18208__auto__",-1797744301,null),null,(1),null)),(new cljs.core.List(null," ",null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"b__18209__auto__","b__18209__auto__",881701149,null),null,(1),null)),(new cljs.core.List(null,")",null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"throw","throw",595905694,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-new-exception","speclj.core/-new-exception",-969354487,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","wrong-types","speclj.core/wrong-types",408672787,null),null,(1),null)),(new cljs.core.List(null,"should>",null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"a__18208__auto__","a__18208__auto__",-1797744301,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"b__18209__auto__","b__18209__auto__",881701149,null),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)))));
});
(speclj.core.should_GT_.cljs$lang$macro = true);

var ret__5781__auto___18223 = /**
 * Asserts that the first numeric form is less than or equal to the second numeric form, using the built-in <= function.
 */
speclj.core.should_LT__EQ_ = (function speclj$core$should_LT__EQ_(_AMPERSAND_form,_AMPERSAND_env,a,b){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"a__18212__auto__","a__18212__auto__",-211321323,null),null,(1),null)),(new cljs.core.List(null,a,null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"b__18213__auto__","b__18213__auto__",-38376654,null),null,(1),null)),(new cljs.core.List(null,b,null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","and","cljs.core/and",-6692549,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","number?","cljs.core/number?",-811857295,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"a__18212__auto__","a__18212__auto__",-211321323,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","number?","cljs.core/number?",-811857295,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"b__18213__auto__","b__18213__auto__",-38376654,null),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","when-not","cljs.core/when-not",-556141047,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","<=","cljs.core/<=",1677001748,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"a__18212__auto__","a__18212__auto__",-211321323,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"b__18213__auto__","b__18213__auto__",-38376654,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-fail","speclj.core/-fail",-436223201,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null),null,(1),null)),(new cljs.core.List(null,"expected ",null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"a__18212__auto__","a__18212__auto__",-211321323,null),null,(1),null)),(new cljs.core.List(null," to be less than or equal to ",null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"b__18213__auto__","b__18213__auto__",-38376654,null),null,(1),null)),(new cljs.core.List(null," but got: (<= ",null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"a__18212__auto__","a__18212__auto__",-211321323,null),null,(1),null)),(new cljs.core.List(null," ",null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"b__18213__auto__","b__18213__auto__",-38376654,null),null,(1),null)),(new cljs.core.List(null,")",null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"throw","throw",595905694,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-new-exception","speclj.core/-new-exception",-969354487,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","wrong-types","speclj.core/wrong-types",408672787,null),null,(1),null)),(new cljs.core.List(null,"should<=",null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"a__18212__auto__","a__18212__auto__",-211321323,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"b__18213__auto__","b__18213__auto__",-38376654,null),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)))));
});
(speclj.core.should_LT__EQ_.cljs$lang$macro = true);

var ret__5781__auto___18226 = /**
 * Asserts that the first numeric form is greater than or equal to the second numeric form, using the built-in >= function.
 */
speclj.core.should_GT__EQ_ = (function speclj$core$should_GT__EQ_(_AMPERSAND_form,_AMPERSAND_env,a,b){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"a__18224__auto__","a__18224__auto__",-1078166527,null),null,(1),null)),(new cljs.core.List(null,a,null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"b__18225__auto__","b__18225__auto__",684701680,null),null,(1),null)),(new cljs.core.List(null,b,null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","and","cljs.core/and",-6692549,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","number?","cljs.core/number?",-811857295,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"a__18224__auto__","a__18224__auto__",-1078166527,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","number?","cljs.core/number?",-811857295,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"b__18225__auto__","b__18225__auto__",684701680,null),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","when-not","cljs.core/when-not",-556141047,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core",">=","cljs.core/>=",350096541,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"a__18224__auto__","a__18224__auto__",-1078166527,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"b__18225__auto__","b__18225__auto__",684701680,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-fail","speclj.core/-fail",-436223201,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null),null,(1),null)),(new cljs.core.List(null,"expected ",null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"a__18224__auto__","a__18224__auto__",-1078166527,null),null,(1),null)),(new cljs.core.List(null," to be greater than or equal to ",null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"b__18225__auto__","b__18225__auto__",684701680,null),null,(1),null)),(new cljs.core.List(null," but got: (>= ",null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"a__18224__auto__","a__18224__auto__",-1078166527,null),null,(1),null)),(new cljs.core.List(null," ",null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"b__18225__auto__","b__18225__auto__",684701680,null),null,(1),null)),(new cljs.core.List(null,")",null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"throw","throw",595905694,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-new-exception","speclj.core/-new-exception",-969354487,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","wrong-types","speclj.core/wrong-types",408672787,null),null,(1),null)),(new cljs.core.List(null,"should>=",null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"a__18224__auto__","a__18224__auto__",-1078166527,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"b__18225__auto__","b__18225__auto__",684701680,null),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)))));
});
(speclj.core.should_GT__EQ_.cljs$lang$macro = true);

var ret__5781__auto___18233 = speclj.core.run_specs = (function speclj$core$run_specs(_AMPERSAND_form,_AMPERSAND_env){

return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","if-cljs","speclj.core/if-cljs",873977502,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","comment","cljs.core/comment",1774254937,null),null,(1),null)),(new cljs.core.List(null,"Ignoring run-specs for clojurescript",null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","require","cljs.core/require",2107770869,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"speclj.cli","speclj.cli",1577675379,null),null,(1),null)))))),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.run.standard","run-specs","speclj.run.standard/run-specs",-1568794497,null),null,(1),null))))),null,(1),null))))),null,(1),null)))));
});
(speclj.core.run_specs.cljs$lang$macro = true);


//# sourceMappingURL=core.js.map
