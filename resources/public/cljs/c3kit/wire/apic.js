// Compiled by ClojureScript 1.11.132 {:optimizations :none}
goog.provide('c3kit.wire.apic');
goog.require('cljs.core');
goog.require('c3kit.apron.corec');
goog.require('c3kit.apron.log');
goog.require('c3kit.apron.schema');
goog.require('c3kit.wire.flashc');
c3kit.wire.apic.response_schema = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"keyword","keyword",811389747)], null),new cljs.core.Keyword(null,"flash","flash",934660619),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ignore","ignore",-1631542033)], null)], null),new cljs.core.Keyword(null,"payload","payload",-383036092),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"ignore","ignore",-1631542033)], null),new cljs.core.Keyword(null,"uri","uri",-774711847),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"string","string",-1989541586)], null),new cljs.core.Keyword(null,"version","version",425292698),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"string","string",-1989541586)], null)], null);
c3kit.wire.apic.conform_response = (function c3kit$wire$apic$conform_response(response){
var response__$1 = c3kit.apron.schema.conform.call(null,c3kit.wire.apic.response_schema,response);
if(c3kit.apron.schema.error_QMARK_.call(null,response__$1)){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"c3kit.wire.apic",null,null,null,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Failed to conform response."], null);
}),null)),null,(47),null);

var seq__14049_14069 = cljs.core.seq.call(null,c3kit.apron.schema.messages.call(null,response__$1));
var chunk__14050_14070 = null;
var count__14051_14071 = (0);
var i__14052_14072 = (0);
while(true){
if((i__14052_14072 < count__14051_14071)){
var message_14073 = cljs.core._nth.call(null,chunk__14050_14070,i__14052_14072);
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"c3kit.wire.apic",null,null,null,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (seq__14049_14069,chunk__14050_14070,count__14051_14071,i__14052_14072,message_14073,response__$1){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [message_14073], null);
});})(seq__14049_14069,chunk__14050_14070,count__14051_14071,i__14052_14072,message_14073,response__$1))
,null)),null,(50),null);


var G__14074 = seq__14049_14069;
var G__14075 = chunk__14050_14070;
var G__14076 = count__14051_14071;
var G__14077 = (i__14052_14072 + (1));
seq__14049_14069 = G__14074;
chunk__14050_14070 = G__14075;
count__14051_14071 = G__14076;
i__14052_14072 = G__14077;
continue;
} else {
var temp__5804__auto___14078 = cljs.core.seq.call(null,seq__14049_14069);
if(temp__5804__auto___14078){
var seq__14049_14079__$1 = temp__5804__auto___14078;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14049_14079__$1)){
var c__5525__auto___14080 = cljs.core.chunk_first.call(null,seq__14049_14079__$1);
var G__14081 = cljs.core.chunk_rest.call(null,seq__14049_14079__$1);
var G__14082 = c__5525__auto___14080;
var G__14083 = cljs.core.count.call(null,c__5525__auto___14080);
var G__14084 = (0);
seq__14049_14069 = G__14081;
chunk__14050_14070 = G__14082;
count__14051_14071 = G__14083;
i__14052_14072 = G__14084;
continue;
} else {
var message_14085 = cljs.core.first.call(null,seq__14049_14079__$1);
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"c3kit.wire.apic",null,null,null,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (seq__14049_14069,chunk__14050_14070,count__14051_14071,i__14052_14072,message_14085,seq__14049_14079__$1,temp__5804__auto___14078,response__$1){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [message_14085], null);
});})(seq__14049_14069,chunk__14050_14070,count__14051_14071,i__14052_14072,message_14085,seq__14049_14079__$1,temp__5804__auto___14078,response__$1))
,null)),null,(51),null);


var G__14088 = cljs.core.next.call(null,seq__14049_14079__$1);
var G__14089 = null;
var G__14090 = (0);
var G__14091 = (0);
seq__14049_14069 = G__14088;
chunk__14050_14070 = G__14089;
count__14051_14071 = G__14090;
i__14052_14072 = G__14091;
continue;
}
} else {
}
}
break;
}

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"error","error",-978969032)], null);
} else {
return response__$1;
}
});
c3kit.wire.apic.flash_success = (function c3kit$wire$apic$flash_success(response,msg){
return cljs.core.update.call(null,response,new cljs.core.Keyword(null,"flash","flash",934660619),c3kit.apron.corec.conjv,c3kit.wire.flashc.success.call(null,msg));
});
c3kit.wire.apic.flash_warn = (function c3kit$wire$apic$flash_warn(response,msg){
return cljs.core.update.call(null,response,new cljs.core.Keyword(null,"flash","flash",934660619),c3kit.apron.corec.conjv,c3kit.wire.flashc.warn.call(null,msg));
});
c3kit.wire.apic.flash_error = (function c3kit$wire$apic$flash_error(response,msg){
return cljs.core.update.call(null,response,new cljs.core.Keyword(null,"flash","flash",934660619),c3kit.apron.corec.conjv,c3kit.wire.flashc.error.call(null,msg));
});
c3kit.wire.apic.flash_level = (function c3kit$wire$apic$flash_level(response,n){
return c3kit.wire.flashc.level.call(null,cljs.core.nth.call(null,new cljs.core.Keyword(null,"flash","flash",934660619).cljs$core$IFn$_invoke$arity$1(response),n));
});
c3kit.wire.apic.flash_text = (function c3kit$wire$apic$flash_text(response,n){
return c3kit.wire.flashc.text.call(null,cljs.core.nth.call(null,new cljs.core.Keyword(null,"flash","flash",934660619).cljs$core$IFn$_invoke$arity$1(response),n));
});
c3kit.wire.apic.first_flash = (function c3kit$wire$apic$first_flash(response){
return cljs.core.first.call(null,new cljs.core.Keyword(null,"flash","flash",934660619).cljs$core$IFn$_invoke$arity$1(response));
});
c3kit.wire.apic.first_flash_text = (function c3kit$wire$apic$first_flash_text(response){
return c3kit.wire.flashc.text.call(null,c3kit.wire.apic.first_flash.call(null,response));
});
/**
 * The request was processed without a hitch.
 */
c3kit.wire.apic.ok = (function c3kit$wire$apic$ok(var_args){
var G__14107 = arguments.length;
switch (G__14107) {
case 0:
return c3kit.wire.apic.ok.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return c3kit.wire.apic.ok.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return c3kit.wire.apic.ok.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(c3kit.wire.apic.ok.cljs$core$IFn$_invoke$arity$0 = (function (){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"ok","ok",967785236)], null);
}));

(c3kit.wire.apic.ok.cljs$core$IFn$_invoke$arity$1 = (function (payload){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"payload","payload",-383036092),payload,new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"ok","ok",967785236)], null);
}));

(c3kit.wire.apic.ok.cljs$core$IFn$_invoke$arity$2 = (function (payload,msg){
return c3kit.wire.apic.flash_success.call(null,c3kit.wire.apic.ok.call(null,payload),msg);
}));

(c3kit.wire.apic.ok.cljs$lang$maxFixedArity = 2);

/**
 * The request failed for anticipated reasons.
 */
c3kit.wire.apic.fail = (function c3kit$wire$apic$fail(var_args){
var G__14119 = arguments.length;
switch (G__14119) {
case 0:
return c3kit.wire.apic.fail.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return c3kit.wire.apic.fail.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return c3kit.wire.apic.fail.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(c3kit.wire.apic.fail.cljs$core$IFn$_invoke$arity$0 = (function (){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"fail","fail",1706214930)], null);
}));

(c3kit.wire.apic.fail.cljs$core$IFn$_invoke$arity$1 = (function (payload){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"payload","payload",-383036092),payload,new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"fail","fail",1706214930)], null);
}));

(c3kit.wire.apic.fail.cljs$core$IFn$_invoke$arity$2 = (function (payload,msg){
return c3kit.wire.apic.flash_error.call(null,c3kit.wire.apic.fail.call(null,payload),msg);
}));

(c3kit.wire.apic.fail.cljs$lang$maxFixedArity = 2);

/**
 * An unexpected exception was thrown while processing the request.
 */
c3kit.wire.apic.error = (function c3kit$wire$apic$error(var_args){
var G__14122 = arguments.length;
switch (G__14122) {
case 0:
return c3kit.wire.apic.error.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return c3kit.wire.apic.error.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return c3kit.wire.apic.error.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(c3kit.wire.apic.error.cljs$core$IFn$_invoke$arity$0 = (function (){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"error","error",-978969032)], null);
}));

(c3kit.wire.apic.error.cljs$core$IFn$_invoke$arity$1 = (function (payload){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"payload","payload",-383036092),payload,new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"error","error",-978969032)], null);
}));

(c3kit.wire.apic.error.cljs$core$IFn$_invoke$arity$2 = (function (payload,msg){
return c3kit.wire.apic.flash_error.call(null,c3kit.wire.apic.error.call(null,payload),msg);
}));

(c3kit.wire.apic.error.cljs$lang$maxFixedArity = 2);

c3kit.wire.apic.redirect = (function c3kit$wire$apic$redirect(var_args){
var G__14130 = arguments.length;
switch (G__14130) {
case 1:
return c3kit.wire.apic.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return c3kit.wire.apic.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(c3kit.wire.apic.redirect.cljs$core$IFn$_invoke$arity$1 = (function (uri){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"redirect","redirect",-1975673286),new cljs.core.Keyword(null,"uri","uri",-774711847),uri], null);
}));

(c3kit.wire.apic.redirect.cljs$core$IFn$_invoke$arity$2 = (function (uri,msg){
return c3kit.wire.apic.flash_warn.call(null,c3kit.wire.apic.redirect.call(null,uri),msg);
}));

(c3kit.wire.apic.redirect.cljs$lang$maxFixedArity = 2);

c3kit.wire.apic.status = (function c3kit$wire$apic$status(response){
return new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(response);
});
c3kit.wire.apic.error_QMARK_ = (function c3kit$wire$apic$error_QMARK_(response){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(response));
});
c3kit.wire.apic.ok_QMARK_ = (function c3kit$wire$apic$ok_QMARK_(response){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"ok","ok",967785236),new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(response));
});
c3kit.wire.apic.fail_QMARK_ = (function c3kit$wire$apic$fail_QMARK_(response){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(response));
});
c3kit.wire.apic.redirect_QMARK_ = (function c3kit$wire$apic$redirect_QMARK_(response){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"redirect","redirect",-1975673286),new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(response));
});
c3kit.wire.apic.payload = (function c3kit$wire$apic$payload(response){
return new cljs.core.Keyword(null,"payload","payload",-383036092).cljs$core$IFn$_invoke$arity$1(response);
});

//# sourceMappingURL=apic.js.map
