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
c3kit.wire.ajax.server_down_QMARK_ = (function c3kit$wire$ajax$server_down_QMARK_(p__16570){
var map__16571 = p__16570;
var map__16571__$1 = cljs.core.__destructure_map.call(null,map__16571);
var error_code = cljs.core.get.call(null,map__16571__$1,new cljs.core.Keyword(null,"error-code","error-code",180497232));
var status = cljs.core.get.call(null,map__16571__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
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
}),null)),null,(76),null);

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
}),null)),null,(79),null);
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
var G__16592 = new cljs.core.Keyword(null,"params-type","params-type",1941495334).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(ajax_call));
if(cljs.core._EQ_.call(null,null,G__16592)){
return new cljs.core.Keyword(null,"transit-params","transit-params",357261095);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"transit","transit",359458387),G__16592)){
return new cljs.core.Keyword(null,"transit-params","transit-params",357261095);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"query","query",-1288509510),G__16592)){
return new cljs.core.Keyword(null,"query-params","query-params",900640534);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"form","form",-1624062471),G__16592)){
return new cljs.core.Keyword(null,"form-params","form-params",1884296467);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"edn","edn",1317840885),G__16592)){
return new cljs.core.Keyword(null,"edn-params","edn-params",894273052);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"json","json",1279968570),G__16592)){
return new cljs.core.Keyword(null,"json-params","json-params",-1112693596);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"multipart","multipart",1158197946),G__16592)){
return new cljs.core.Keyword(null,"multipart-params","multipart-params",-1033508707);
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__16592)].join('')));

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
var map__16599 = prep.call(null,ajax_call);
var map__16599__$1 = cljs.core.__destructure_map.call(null,map__16599);
var ajax_call__$1 = map__16599__$1;
var options = cljs.core.get.call(null,map__16599__$1,new cljs.core.Keyword(null,"options","options",99638489));
var params = cljs.core.get.call(null,map__16599__$1,new cljs.core.Keyword(null,"params","params",710516235));
var G__16602 = cljs.core.select_keys.call(null,options,c3kit.wire.ajax.pass_through_keys);
if(cljs.core.truth_(params)){
return cljs.core.assoc.call(null,G__16602,c3kit.wire.ajax.params_key.call(null,ajax_call__$1),params);
} else {
return G__16602;
}
});
c3kit.wire.ajax._do_ajax_request = (function c3kit$wire$ajax$_do_ajax_request(p__16606){
var map__16607 = p__16606;
var map__16607__$1 = cljs.core.__destructure_map.call(null,map__16607);
var ajax_call = map__16607__$1;
var method = cljs.core.get.call(null,map__16607__$1,new cljs.core.Keyword(null,"method","method",55703592));
var method_fn = cljs.core.get.call(null,map__16607__$1,new cljs.core.Keyword(null,"method-fn","method-fn",1314848696));
var url = cljs.core.get.call(null,map__16607__$1,new cljs.core.Keyword(null,"url","url",276297046));
var params = cljs.core.get.call(null,map__16607__$1,new cljs.core.Keyword(null,"params","params",710516235));
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"c3kit.wire.ajax",null,null,null,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["<",method,url,params], null);
}),null)),null,(82),null);

var c__11371__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__11372__auto__ = (function (){var switch__11190__auto__ = (function (state_16631){
var state_val_16632 = (state_16631[(1)]);
if((state_val_16632 === (1))){
var inst_16616 = (state_16631[(7)]);
var inst_16614 = cljs.core.swap_BANG_.call(null,c3kit.wire.ajax.active_ajax_requests,cljs.core.inc);
var inst_16616__$1 = c3kit.wire.ajax.request_map.call(null,ajax_call);
var inst_16617 = method_fn.call(null,url,inst_16616__$1);
var state_16631__$1 = (function (){var statearr_16639 = state_16631;
(statearr_16639[(8)] = inst_16614);

(statearr_16639[(7)] = inst_16616__$1);

return statearr_16639;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16631__$1,(2),inst_16617);
} else {
if((state_val_16632 === (2))){
var inst_16616 = (state_16631[(7)]);
var inst_16619 = (state_16631[(2)]);
var inst_16620 = cljs.core.__destructure_map.call(null,inst_16619);
var inst_16621 = cljs.core.get.call(null,inst_16620,new cljs.core.Keyword(null,"error-code","error-code",180497232));
var inst_16622 = cljs.core.get.call(null,inst_16620,new cljs.core.Keyword(null,"status","status",-1997798413));
var inst_16623 = cljs.core.get.call(null,inst_16620,new cljs.core.Keyword(null,"body","body",-2049205669));
var inst_16624 = (function (){var request = inst_16616;
var map__16615 = inst_16620;
var response = inst_16620;
var error_code = inst_16621;
var status = inst_16622;
var body = inst_16623;
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [">",method,url,error_code,status,new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(body)], null);
});
})();
var inst_16625 = (new cljs.core.Delay(inst_16624,null));
var inst_16626 = taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"c3kit.wire.ajax",null,null,null,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),inst_16625,null,(83),null);
var inst_16627 = c3kit.wire.ajax.triage_response.call(null,inst_16620,ajax_call);
var inst_16628 = cljs.core.swap_BANG_.call(null,c3kit.wire.ajax.active_ajax_requests,cljs.core.dec);
var state_16631__$1 = (function (){var statearr_16645 = state_16631;
(statearr_16645[(9)] = inst_16626);

(statearr_16645[(10)] = inst_16627);

return statearr_16645;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16631__$1,inst_16628);
} else {
return null;
}
}
});
return (function() {
var c3kit$wire$ajax$_do_ajax_request_$_state_machine__11191__auto__ = null;
var c3kit$wire$ajax$_do_ajax_request_$_state_machine__11191__auto____0 = (function (){
var statearr_16649 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_16649[(0)] = c3kit$wire$ajax$_do_ajax_request_$_state_machine__11191__auto__);

(statearr_16649[(1)] = (1));

return statearr_16649;
});
var c3kit$wire$ajax$_do_ajax_request_$_state_machine__11191__auto____1 = (function (state_16631){
while(true){
var ret_value__11192__auto__ = (function (){try{while(true){
var result__11193__auto__ = switch__11190__auto__.call(null,state_16631);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11193__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11193__auto__;
}
break;
}
}catch (e16651){var ex__11194__auto__ = e16651;
var statearr_16652_16698 = state_16631;
(statearr_16652_16698[(2)] = ex__11194__auto__);


if(cljs.core.seq.call(null,(state_16631[(4)]))){
var statearr_16654_16701 = state_16631;
(statearr_16654_16701[(1)] = cljs.core.first.call(null,(state_16631[(4)])));

} else {
throw ex__11194__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11192__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16704 = state_16631;
state_16631 = G__16704;
continue;
} else {
return ret_value__11192__auto__;
}
break;
}
});
c3kit$wire$ajax$_do_ajax_request_$_state_machine__11191__auto__ = function(state_16631){
switch(arguments.length){
case 0:
return c3kit$wire$ajax$_do_ajax_request_$_state_machine__11191__auto____0.call(this);
case 1:
return c3kit$wire$ajax$_do_ajax_request_$_state_machine__11191__auto____1.call(this,state_16631);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
c3kit$wire$ajax$_do_ajax_request_$_state_machine__11191__auto__.cljs$core$IFn$_invoke$arity$0 = c3kit$wire$ajax$_do_ajax_request_$_state_machine__11191__auto____0;
c3kit$wire$ajax$_do_ajax_request_$_state_machine__11191__auto__.cljs$core$IFn$_invoke$arity$1 = c3kit$wire$ajax$_do_ajax_request_$_state_machine__11191__auto____1;
return c3kit$wire$ajax$_do_ajax_request_$_state_machine__11191__auto__;
})()
})();
var state__11373__auto__ = (function (){var statearr_16656 = f__11372__auto__.call(null);
(statearr_16656[(6)] = c__11371__auto__);

return statearr_16656;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11373__auto__);
}));

return c__11371__auto__;
});
c3kit.wire.ajax.build_ajax_call = (function c3kit$wire$ajax$build_ajax_call(method,method_fn,url,params,handler,opt_args){
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"options","options",99638489),c3kit.apron.corec.__GT_options.call(null,opt_args),new cljs.core.Keyword(null,"method","method",55703592),method,new cljs.core.Keyword(null,"method-fn","method-fn",1314848696),method_fn,new cljs.core.Keyword(null,"url","url",276297046),url,new cljs.core.Keyword(null,"params","params",710516235),params,new cljs.core.Keyword(null,"handler","handler",-195596612),handler], null);
});
c3kit.wire.ajax._method_parts = (function c3kit$wire$ajax$_method_parts(method){
var G__16664 = method;
var G__16664__$1 = (((G__16664 instanceof cljs.core.Keyword))?G__16664.fqn:null);
switch (G__16664__$1) {
case "get":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["GET",cljs_http.client.get], null);

break;
case "post":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["POST",cljs_http.client.post], null);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__16664__$1)].join('')));

}
});
c3kit.wire.ajax.get_BANG_ = (function c3kit$wire$ajax$get_BANG_(var_args){
var args__5732__auto__ = [];
var len__5726__auto___16730 = arguments.length;
var i__5727__auto___16731 = (0);
while(true){
if((i__5727__auto___16731 < len__5726__auto___16730)){
args__5732__auto__.push((arguments[i__5727__auto___16731]));

var G__16732 = (i__5727__auto___16731 + (1));
i__5727__auto___16731 = G__16732;
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
(c3kit.wire.ajax.get_BANG_.cljs$lang$applyTo = (function (seq16667){
var G__16668 = cljs.core.first.call(null,seq16667);
var seq16667__$1 = cljs.core.next.call(null,seq16667);
var G__16669 = cljs.core.first.call(null,seq16667__$1);
var seq16667__$2 = cljs.core.next.call(null,seq16667__$1);
var G__16670 = cljs.core.first.call(null,seq16667__$2);
var seq16667__$3 = cljs.core.next.call(null,seq16667__$2);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__16668,G__16669,G__16670,seq16667__$3);
}));

c3kit.wire.ajax.post_BANG_ = (function c3kit$wire$ajax$post_BANG_(var_args){
var args__5732__auto__ = [];
var len__5726__auto___16750 = arguments.length;
var i__5727__auto___16751 = (0);
while(true){
if((i__5727__auto___16751 < len__5726__auto___16750)){
args__5732__auto__.push((arguments[i__5727__auto___16751]));

var G__16755 = (i__5727__auto___16751 + (1));
i__5727__auto___16751 = G__16755;
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
(c3kit.wire.ajax.post_BANG_.cljs$lang$applyTo = (function (seq16699){
var G__16700 = cljs.core.first.call(null,seq16699);
var seq16699__$1 = cljs.core.next.call(null,seq16699);
var G__16702 = cljs.core.first.call(null,seq16699__$1);
var seq16699__$2 = cljs.core.next.call(null,seq16699__$1);
var G__16703 = cljs.core.first.call(null,seq16699__$2);
var seq16699__$3 = cljs.core.next.call(null,seq16699__$2);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__16700,G__16702,G__16703,seq16699__$3);
}));

c3kit.wire.ajax.request_BANG_ = (function c3kit$wire$ajax$request_BANG_(var_args){
var args__5732__auto__ = [];
var len__5726__auto___16779 = arguments.length;
var i__5727__auto___16780 = (0);
while(true){
if((i__5727__auto___16780 < len__5726__auto___16779)){
args__5732__auto__.push((arguments[i__5727__auto___16780]));

var G__16781 = (i__5727__auto___16780 + (1));
i__5727__auto___16780 = G__16781;
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
var G__16791__delegate = function (url__$1,p__16756){
var vec__16757 = p__16756;
var req = cljs.core.nth.call(null,vec__16757,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method,new cljs.core.Keyword(null,"url","url",276297046),url__$1], null)));
};
var G__16791 = function (url__$1,var_args){
var p__16756 = null;
if (arguments.length > 1) {
var G__16798__i = 0, G__16798__a = new Array(arguments.length -  1);
while (G__16798__i < G__16798__a.length) {G__16798__a[G__16798__i] = arguments[G__16798__i + 1]; ++G__16798__i;}
  p__16756 = new cljs.core.IndexedSeq(G__16798__a,0,null);
} 
return G__16791__delegate.call(this,url__$1,p__16756);};
G__16791.cljs$lang$maxFixedArity = 1;
G__16791.cljs$lang$applyTo = (function (arglist__16799){
var url__$1 = cljs.core.first(arglist__16799);
var p__16756 = cljs.core.rest(arglist__16799);
return G__16791__delegate(url__$1,p__16756);
});
G__16791.cljs$core$IFn$_invoke$arity$variadic = G__16791__delegate;
return G__16791;
})()
;
return c3kit.wire.ajax._do_ajax_request.call(null,c3kit.wire.ajax.build_ajax_call.call(null,method_name,method_fn,url,params,handler,opt_args));
}));

(c3kit.wire.ajax.request_BANG_.cljs$lang$maxFixedArity = (4));

/** @this {Function} */
(c3kit.wire.ajax.request_BANG_.cljs$lang$applyTo = (function (seq16733){
var G__16738 = cljs.core.first.call(null,seq16733);
var seq16733__$1 = cljs.core.next.call(null,seq16733);
var G__16739 = cljs.core.first.call(null,seq16733__$1);
var seq16733__$2 = cljs.core.next.call(null,seq16733__$1);
var G__16740 = cljs.core.first.call(null,seq16733__$2);
var seq16733__$3 = cljs.core.next.call(null,seq16733__$2);
var G__16741 = cljs.core.first.call(null,seq16733__$3);
var seq16733__$4 = cljs.core.next.call(null,seq16733__$3);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__16738,G__16739,G__16740,G__16741,seq16733__$4);
}));


//# sourceMappingURL=ajax.js.map
