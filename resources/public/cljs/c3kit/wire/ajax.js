// Compiled by ClojureScript 1.11.132 {:optimizations :none}
goog.provide('c3kit.wire.ajax');
goog.require('cljs.core');
goog.require('c3kit.apron.corec');
goog.require('c3kit.apron.log');
goog.require('c3kit.wire.api');
goog.require('c3kit.wire.flash');
goog.require('c3kit.wire.js');
goog.require('cljs_http.client');
goog.require('cljs.core.async');
goog.require('clojure.string');
goog.require('reagent.core');
c3kit.wire.ajax.active_ajax_requests = reagent.core.atom.call(null,(0));
c3kit.wire.ajax.activity_QMARK_ = (function c3kit$wire$ajax$activity_QMARK_(){
return cljs.core.not_EQ_.call(null,(0),cljs.core.deref.call(null,c3kit.wire.ajax.active_ajax_requests));
});
c3kit.wire.ajax.server_down_QMARK_ = (function c3kit$wire$ajax$server_down_QMARK_(p__16557){
var map__16558 = p__16557;
var map__16558__$1 = cljs.core.__destructure_map.call(null,map__16558);
var error_code = cljs.core.get.call(null,map__16558__$1,new cljs.core.Keyword(null,"error-code","error-code",180497232));
var status = cljs.core.get.call(null,map__16558__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var and__5000__auto__ = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"http-error","http-error",-1040049553),error_code);
if(and__5000__auto__){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [(0),null,(502),null], null), null).call(null,status);
} else {
return and__5000__auto__;
}
});
c3kit.wire.ajax.handle_server_down = (function c3kit$wire$ajax$handle_server_down(ajax_call){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"c3kit.wire.ajax",null,null,null,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Appears that server is down.  Will retry after in a moment."], null);
}),null)),null,(72),null);

c3kit.wire.flash.add_BANG_.call(null,c3kit.wire.api.server_down_flash);

return c3kit.wire.js.timeout.call(null,(3000),(function (){
return c3kit.wire.ajax._do_ajax_request.call(null,ajax_call);
}));
});
c3kit.wire.ajax.handle_unexpected_response = (function c3kit$wire$ajax$handle_unexpected_response(response,ajax_call){
var temp__5802__auto__ = new cljs.core.Keyword(null,"on-http-error","on-http-error",268314602).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(ajax_call));
if(cljs.core.truth_(temp__5802__auto__)){
var on_http_error = temp__5802__auto__;
return on_http_error.call(null,response);
} else {
return taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"c3kit.wire.ajax",null,null,null,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Unexpected AJAX response: ",response,ajax_call], null);
}),null)),null,(73),null);
}
});
c3kit.wire.ajax.handle_unsuccessful_response = (function c3kit$wire$ajax$handle_unsuccessful_response(response,ajax_call){
if(cljs.core.truth_(c3kit.wire.ajax.server_down_QMARK_.call(null,response))){
return c3kit.wire.ajax.handle_server_down.call(null,ajax_call);
} else {
if(cljs.core._EQ_.call(null,(403),new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(response))){
return c3kit.wire.flash.add_BANG_.call(null,c3kit.wire.api.forbidden_flash);
} else {
return c3kit.wire.ajax.handle_unexpected_response.call(null,response,ajax_call);

}
}
});
c3kit.wire.ajax.triage_response = (function c3kit$wire$ajax$triage_response(response,ajax_call){
if(cljs.core._EQ_.call(null,(200),new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(response))){
return c3kit.wire.api.handle_api_response.call(null,new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(response),ajax_call);
} else {
var temp__5802__auto__ = new cljs.core.Keyword(null,"ajax-on-unsuccessful-response","ajax-on-unsuccessful-response",-334902909).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,c3kit.wire.api.config));
if(cljs.core.truth_(temp__5802__auto__)){
var handler = temp__5802__auto__;
return handler.call(null,response,ajax_call);
} else {
return c3kit.wire.ajax.handle_unsuccessful_response.call(null,response,ajax_call);
}

}
});
/**
 * Create a prep fn to add a CSRF header to each request
 *   (prep-csrf "X-CSRF-Token"] csrf-token)
 */
c3kit.wire.ajax.prep_csrf = (function c3kit$wire$ajax$prep_csrf(header,token){
return (function (ajax_call){
return cljs.core.assoc_in.call(null,ajax_call,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"headers","headers",-835030129),header], null),token);
});
});
c3kit.wire.ajax.params_key = (function c3kit$wire$ajax$params_key(ajax_call){
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["HEAD",null,"GET",null], null), null).call(null,new cljs.core.Keyword(null,"method","method",55703592).cljs$core$IFn$_invoke$arity$1(ajax_call)))){
return new cljs.core.Keyword(null,"query-params","query-params",900640534);
} else {
var G__16561 = new cljs.core.Keyword(null,"params-type","params-type",1941495334).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(ajax_call));
if(cljs.core._EQ_.call(null,null,G__16561)){
return new cljs.core.Keyword(null,"transit-params","transit-params",357261095);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"transit","transit",359458387),G__16561)){
return new cljs.core.Keyword(null,"transit-params","transit-params",357261095);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"query","query",-1288509510),G__16561)){
return new cljs.core.Keyword(null,"query-params","query-params",900640534);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"form","form",-1624062471),G__16561)){
return new cljs.core.Keyword(null,"form-params","form-params",1884296467);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"edn","edn",1317840885),G__16561)){
return new cljs.core.Keyword(null,"edn-params","edn-params",894273052);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"json","json",1279968570),G__16561)){
return new cljs.core.Keyword(null,"json-params","json-params",-1112693596);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"multipart","multipart",1158197946),G__16561)){
return new cljs.core.Keyword(null,"multipart-params","multipart-params",-1033508707);
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__16561)].join('')));

}
}
}
}
}
}
}
}
});
c3kit.wire.ajax.pass_through_keys = new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"accept","accept",1874130431),new cljs.core.Keyword(null,"basic-auth","basic-auth",-673163332),new cljs.core.Keyword(null,"content-type","content-type",-508222634),new cljs.core.Keyword(null,"default-headers","default-headers",-43146094),new cljs.core.Keyword(null,"headers","headers",-835030129),new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"oauth-token","oauth-token",311415191),new cljs.core.Keyword(null,"transit-opts","transit-opts",1104386010),new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222)], null);
c3kit.wire.ajax.request_map = (function c3kit$wire$ajax$request_map(ajax_call){
var prep = (function (){var or__5002__auto__ = new cljs.core.Keyword(null,"ajax-prep-fn","ajax-prep-fn",1814062099).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,c3kit.wire.api.config));
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.identity;
}
})();
var map__16567 = prep.call(null,ajax_call);
var map__16567__$1 = cljs.core.__destructure_map.call(null,map__16567);
var ajax_call__$1 = map__16567__$1;
var options = cljs.core.get.call(null,map__16567__$1,new cljs.core.Keyword(null,"options","options",99638489));
var params = cljs.core.get.call(null,map__16567__$1,new cljs.core.Keyword(null,"params","params",710516235));
var G__16571 = cljs.core.select_keys.call(null,options,c3kit.wire.ajax.pass_through_keys);
if(cljs.core.truth_(params)){
return cljs.core.assoc.call(null,G__16571,c3kit.wire.ajax.params_key.call(null,ajax_call__$1),params);
} else {
return G__16571;
}
});
c3kit.wire.ajax._do_ajax_request = (function c3kit$wire$ajax$_do_ajax_request(p__16578){
var map__16579 = p__16578;
var map__16579__$1 = cljs.core.__destructure_map.call(null,map__16579);
var ajax_call = map__16579__$1;
var method = cljs.core.get.call(null,map__16579__$1,new cljs.core.Keyword(null,"method","method",55703592));
var method_fn = cljs.core.get.call(null,map__16579__$1,new cljs.core.Keyword(null,"method-fn","method-fn",1314848696));
var url = cljs.core.get.call(null,map__16579__$1,new cljs.core.Keyword(null,"url","url",276297046));
var params = cljs.core.get.call(null,map__16579__$1,new cljs.core.Keyword(null,"params","params",710516235));
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"c3kit.wire.ajax",null,null,null,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["<",method,url,params], null);
}),null)),null,(76),null);

var c__11371__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__11372__auto__ = (function (){var switch__11190__auto__ = (function (state_16605){
var state_val_16606 = (state_16605[(1)]);
if((state_val_16606 === (1))){
var inst_16586 = (state_16605[(7)]);
var inst_16584 = cljs.core.swap_BANG_.call(null,c3kit.wire.ajax.active_ajax_requests,cljs.core.inc);
var inst_16586__$1 = c3kit.wire.ajax.request_map.call(null,ajax_call);
var inst_16587 = method_fn.call(null,url,inst_16586__$1);
var state_16605__$1 = (function (){var statearr_16610 = state_16605;
(statearr_16610[(8)] = inst_16584);

(statearr_16610[(7)] = inst_16586__$1);

return statearr_16610;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16605__$1,(2),inst_16587);
} else {
if((state_val_16606 === (2))){
var inst_16586 = (state_16605[(7)]);
var inst_16589 = (state_16605[(2)]);
var inst_16590 = cljs.core.__destructure_map.call(null,inst_16589);
var inst_16592 = cljs.core.get.call(null,inst_16590,new cljs.core.Keyword(null,"error-code","error-code",180497232));
var inst_16597 = cljs.core.get.call(null,inst_16590,new cljs.core.Keyword(null,"status","status",-1997798413));
var inst_16598 = cljs.core.get.call(null,inst_16590,new cljs.core.Keyword(null,"body","body",-2049205669));
var inst_16599 = (function (){var request = inst_16586;
var map__16585 = inst_16590;
var response = inst_16590;
var error_code = inst_16592;
var status = inst_16597;
var body = inst_16598;
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [">",method,url,error_code,status,new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(body)], null);
});
})();
var inst_16600 = (new cljs.core.Delay(inst_16599,null));
var inst_16601 = taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"c3kit.wire.ajax",null,null,null,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),inst_16600,null,(77),null);
var inst_16602 = c3kit.wire.ajax.triage_response.call(null,inst_16590,ajax_call);
var inst_16603 = cljs.core.swap_BANG_.call(null,c3kit.wire.ajax.active_ajax_requests,cljs.core.dec);
var state_16605__$1 = (function (){var statearr_16619 = state_16605;
(statearr_16619[(9)] = inst_16601);

(statearr_16619[(10)] = inst_16602);

return statearr_16619;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16605__$1,inst_16603);
} else {
return null;
}
}
});
return (function() {
var c3kit$wire$ajax$_do_ajax_request_$_state_machine__11191__auto__ = null;
var c3kit$wire$ajax$_do_ajax_request_$_state_machine__11191__auto____0 = (function (){
var statearr_16623 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_16623[(0)] = c3kit$wire$ajax$_do_ajax_request_$_state_machine__11191__auto__);

(statearr_16623[(1)] = (1));

return statearr_16623;
});
var c3kit$wire$ajax$_do_ajax_request_$_state_machine__11191__auto____1 = (function (state_16605){
while(true){
var ret_value__11192__auto__ = (function (){try{while(true){
var result__11193__auto__ = switch__11190__auto__.call(null,state_16605);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11193__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11193__auto__;
}
break;
}
}catch (e16624){var ex__11194__auto__ = e16624;
var statearr_16625_16680 = state_16605;
(statearr_16625_16680[(2)] = ex__11194__auto__);


if(cljs.core.seq.call(null,(state_16605[(4)]))){
var statearr_16627_16683 = state_16605;
(statearr_16627_16683[(1)] = cljs.core.first.call(null,(state_16605[(4)])));

} else {
throw ex__11194__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11192__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16690 = state_16605;
state_16605 = G__16690;
continue;
} else {
return ret_value__11192__auto__;
}
break;
}
});
c3kit$wire$ajax$_do_ajax_request_$_state_machine__11191__auto__ = function(state_16605){
switch(arguments.length){
case 0:
return c3kit$wire$ajax$_do_ajax_request_$_state_machine__11191__auto____0.call(this);
case 1:
return c3kit$wire$ajax$_do_ajax_request_$_state_machine__11191__auto____1.call(this,state_16605);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
c3kit$wire$ajax$_do_ajax_request_$_state_machine__11191__auto__.cljs$core$IFn$_invoke$arity$0 = c3kit$wire$ajax$_do_ajax_request_$_state_machine__11191__auto____0;
c3kit$wire$ajax$_do_ajax_request_$_state_machine__11191__auto__.cljs$core$IFn$_invoke$arity$1 = c3kit$wire$ajax$_do_ajax_request_$_state_machine__11191__auto____1;
return c3kit$wire$ajax$_do_ajax_request_$_state_machine__11191__auto__;
})()
})();
var state__11373__auto__ = (function (){var statearr_16642 = f__11372__auto__.call(null);
(statearr_16642[(6)] = c__11371__auto__);

return statearr_16642;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11373__auto__);
}));

return c__11371__auto__;
});
c3kit.wire.ajax.build_ajax_call = (function c3kit$wire$ajax$build_ajax_call(method,method_fn,url,params,handler,opt_args){
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"options","options",99638489),c3kit.apron.corec.__GT_options.call(null,opt_args),new cljs.core.Keyword(null,"method","method",55703592),method,new cljs.core.Keyword(null,"method-fn","method-fn",1314848696),method_fn,new cljs.core.Keyword(null,"url","url",276297046),url,new cljs.core.Keyword(null,"params","params",710516235),params,new cljs.core.Keyword(null,"handler","handler",-195596612),handler], null);
});
c3kit.wire.ajax._method_parts = (function c3kit$wire$ajax$_method_parts(method){
var G__16658 = method;
var G__16658__$1 = (((G__16658 instanceof cljs.core.Keyword))?G__16658.fqn:null);
switch (G__16658__$1) {
case "get":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["GET",cljs_http.client.get], null);

break;
case "post":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["POST",cljs_http.client.post], null);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__16658__$1)].join('')));

}
});
c3kit.wire.ajax.get_BANG_ = (function c3kit$wire$ajax$get_BANG_(var_args){
var args__5732__auto__ = [];
var len__5726__auto___16720 = arguments.length;
var i__5727__auto___16721 = (0);
while(true){
if((i__5727__auto___16721 < len__5726__auto___16720)){
args__5732__auto__.push((arguments[i__5727__auto___16721]));

var G__16722 = (i__5727__auto___16721 + (1));
i__5727__auto___16721 = G__16722;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((3) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((3)),(0),null)):null);
return c3kit.wire.ajax.get_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5733__auto__);
});

(c3kit.wire.ajax.get_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (url,params,handler,opt_args){
return c3kit.wire.ajax._do_ajax_request.call(null,c3kit.wire.ajax.build_ajax_call.call(null,"GET",cljs_http.client.get,url,params,handler,opt_args));
}));

(c3kit.wire.ajax.get_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(c3kit.wire.ajax.get_BANG_.cljs$lang$applyTo = (function (seq16664){
var G__16665 = cljs.core.first.call(null,seq16664);
var seq16664__$1 = cljs.core.next.call(null,seq16664);
var G__16666 = cljs.core.first.call(null,seq16664__$1);
var seq16664__$2 = cljs.core.next.call(null,seq16664__$1);
var G__16667 = cljs.core.first.call(null,seq16664__$2);
var seq16664__$3 = cljs.core.next.call(null,seq16664__$2);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__16665,G__16666,G__16667,seq16664__$3);
}));

c3kit.wire.ajax.post_BANG_ = (function c3kit$wire$ajax$post_BANG_(var_args){
var args__5732__auto__ = [];
var len__5726__auto___16737 = arguments.length;
var i__5727__auto___16738 = (0);
while(true){
if((i__5727__auto___16738 < len__5726__auto___16737)){
args__5732__auto__.push((arguments[i__5727__auto___16738]));

var G__16742 = (i__5727__auto___16738 + (1));
i__5727__auto___16738 = G__16742;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((3) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((3)),(0),null)):null);
return c3kit.wire.ajax.post_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5733__auto__);
});

(c3kit.wire.ajax.post_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (url,params,handler,opt_args){
return c3kit.wire.ajax._do_ajax_request.call(null,c3kit.wire.ajax.build_ajax_call.call(null,"POST",cljs_http.client.post,url,params,handler,opt_args));
}));

(c3kit.wire.ajax.post_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(c3kit.wire.ajax.post_BANG_.cljs$lang$applyTo = (function (seq16685){
var G__16687 = cljs.core.first.call(null,seq16685);
var seq16685__$1 = cljs.core.next.call(null,seq16685);
var G__16688 = cljs.core.first.call(null,seq16685__$1);
var seq16685__$2 = cljs.core.next.call(null,seq16685__$1);
var G__16689 = cljs.core.first.call(null,seq16685__$2);
var seq16685__$3 = cljs.core.next.call(null,seq16685__$2);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__16687,G__16688,G__16689,seq16685__$3);
}));

c3kit.wire.ajax.request_BANG_ = (function c3kit$wire$ajax$request_BANG_(var_args){
var args__5732__auto__ = [];
var len__5726__auto___16754 = arguments.length;
var i__5727__auto___16755 = (0);
while(true){
if((i__5727__auto___16755 < len__5726__auto___16754)){
args__5732__auto__.push((arguments[i__5727__auto___16755]));

var G__16756 = (i__5727__auto___16755 + (1));
i__5727__auto___16755 = G__16756;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((4) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((4)),(0),null)):null);
return c3kit.wire.ajax.request_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__5733__auto__);
});

(c3kit.wire.ajax.request_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (method,url,params,handler,opt_args){
var method_name = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));
var method_fn = (function() { 
var G__16759__delegate = function (url__$1,p__16746){
var vec__16747 = p__16746;
var req = cljs.core.nth.call(null,vec__16747,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method,new cljs.core.Keyword(null,"url","url",276297046),url__$1], null)));
};
var G__16759 = function (url__$1,var_args){
var p__16746 = null;
if (arguments.length > 1) {
var G__16764__i = 0, G__16764__a = new Array(arguments.length -  1);
while (G__16764__i < G__16764__a.length) {G__16764__a[G__16764__i] = arguments[G__16764__i + 1]; ++G__16764__i;}
  p__16746 = new cljs.core.IndexedSeq(G__16764__a,0,null);
} 
return G__16759__delegate.call(this,url__$1,p__16746);};
G__16759.cljs$lang$maxFixedArity = 1;
G__16759.cljs$lang$applyTo = (function (arglist__16765){
var url__$1 = cljs.core.first(arglist__16765);
var p__16746 = cljs.core.rest(arglist__16765);
return G__16759__delegate(url__$1,p__16746);
});
G__16759.cljs$core$IFn$_invoke$arity$variadic = G__16759__delegate;
return G__16759;
})()
;
return c3kit.wire.ajax._do_ajax_request.call(null,c3kit.wire.ajax.build_ajax_call.call(null,method_name,method_fn,url,params,handler,opt_args));
}));

(c3kit.wire.ajax.request_BANG_.cljs$lang$maxFixedArity = (4));

/** @this {Function} */
(c3kit.wire.ajax.request_BANG_.cljs$lang$applyTo = (function (seq16725){
var G__16726 = cljs.core.first.call(null,seq16725);
var seq16725__$1 = cljs.core.next.call(null,seq16725);
var G__16727 = cljs.core.first.call(null,seq16725__$1);
var seq16725__$2 = cljs.core.next.call(null,seq16725__$1);
var G__16728 = cljs.core.first.call(null,seq16725__$2);
var seq16725__$3 = cljs.core.next.call(null,seq16725__$2);
var G__16729 = cljs.core.first.call(null,seq16725__$3);
var seq16725__$4 = cljs.core.next.call(null,seq16725__$3);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__16726,G__16727,G__16728,G__16729,seq16725__$4);
}));


//# sourceMappingURL=ajax.js.map
