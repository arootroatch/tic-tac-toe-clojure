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
c3kit.wire.ajax.server_down_QMARK_ = (function c3kit$wire$ajax$server_down_QMARK_(p__14674){
var map__14675 = p__14674;
var map__14675__$1 = cljs.core.__destructure_map.call(null,map__14675);
var error_code = cljs.core.get.call(null,map__14675__$1,new cljs.core.Keyword(null,"error-code","error-code",180497232));
var status = cljs.core.get.call(null,map__14675__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
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
}),null)),null,(70),null);

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
}),null)),null,(72),null);
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
var G__14714 = new cljs.core.Keyword(null,"params-type","params-type",1941495334).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(ajax_call));
if(cljs.core._EQ_.call(null,null,G__14714)){
return new cljs.core.Keyword(null,"transit-params","transit-params",357261095);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"transit","transit",359458387),G__14714)){
return new cljs.core.Keyword(null,"transit-params","transit-params",357261095);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"query","query",-1288509510),G__14714)){
return new cljs.core.Keyword(null,"query-params","query-params",900640534);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"form","form",-1624062471),G__14714)){
return new cljs.core.Keyword(null,"form-params","form-params",1884296467);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"edn","edn",1317840885),G__14714)){
return new cljs.core.Keyword(null,"edn-params","edn-params",894273052);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"json","json",1279968570),G__14714)){
return new cljs.core.Keyword(null,"json-params","json-params",-1112693596);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"multipart","multipart",1158197946),G__14714)){
return new cljs.core.Keyword(null,"multipart-params","multipart-params",-1033508707);
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__14714)].join('')));

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
var map__14735 = prep.call(null,ajax_call);
var map__14735__$1 = cljs.core.__destructure_map.call(null,map__14735);
var ajax_call__$1 = map__14735__$1;
var options = cljs.core.get.call(null,map__14735__$1,new cljs.core.Keyword(null,"options","options",99638489));
var params = cljs.core.get.call(null,map__14735__$1,new cljs.core.Keyword(null,"params","params",710516235));
var G__14751 = cljs.core.select_keys.call(null,options,c3kit.wire.ajax.pass_through_keys);
if(cljs.core.truth_(params)){
return cljs.core.assoc.call(null,G__14751,c3kit.wire.ajax.params_key.call(null,ajax_call__$1),params);
} else {
return G__14751;
}
});
c3kit.wire.ajax._do_ajax_request = (function c3kit$wire$ajax$_do_ajax_request(p__14761){
var map__14762 = p__14761;
var map__14762__$1 = cljs.core.__destructure_map.call(null,map__14762);
var ajax_call = map__14762__$1;
var method = cljs.core.get.call(null,map__14762__$1,new cljs.core.Keyword(null,"method","method",55703592));
var method_fn = cljs.core.get.call(null,map__14762__$1,new cljs.core.Keyword(null,"method-fn","method-fn",1314848696));
var url = cljs.core.get.call(null,map__14762__$1,new cljs.core.Keyword(null,"url","url",276297046));
var params = cljs.core.get.call(null,map__14762__$1,new cljs.core.Keyword(null,"params","params",710516235));
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"c3kit.wire.ajax",null,null,null,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["<",method,url,params], null);
}),null)),null,(75),null);

var c__9544__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__9545__auto__ = (function (){var switch__9363__auto__ = (function (state_14784){
var state_val_14785 = (state_14784[(1)]);
if((state_val_14785 === (1))){
var inst_14766 = (state_14784[(7)]);
var inst_14764 = cljs.core.swap_BANG_.call(null,c3kit.wire.ajax.active_ajax_requests,cljs.core.inc);
var inst_14766__$1 = c3kit.wire.ajax.request_map.call(null,ajax_call);
var inst_14767 = method_fn.call(null,url,inst_14766__$1);
var state_14784__$1 = (function (){var statearr_14786 = state_14784;
(statearr_14786[(8)] = inst_14764);

(statearr_14786[(7)] = inst_14766__$1);

return statearr_14786;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14784__$1,(2),inst_14767);
} else {
if((state_val_14785 === (2))){
var inst_14766 = (state_14784[(7)]);
var inst_14769 = (state_14784[(2)]);
var inst_14772 = cljs.core.__destructure_map.call(null,inst_14769);
var inst_14775 = cljs.core.get.call(null,inst_14772,new cljs.core.Keyword(null,"error-code","error-code",180497232));
var inst_14776 = cljs.core.get.call(null,inst_14772,new cljs.core.Keyword(null,"status","status",-1997798413));
var inst_14777 = cljs.core.get.call(null,inst_14772,new cljs.core.Keyword(null,"body","body",-2049205669));
var inst_14778 = (function (){var request = inst_14766;
var map__14765 = inst_14772;
var response = inst_14772;
var error_code = inst_14775;
var status = inst_14776;
var body = inst_14777;
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [">",method,url,error_code,status,new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(body)], null);
});
})();
var inst_14779 = (new cljs.core.Delay(inst_14778,null));
var inst_14780 = taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"c3kit.wire.ajax",null,null,null,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),inst_14779,null,(76),null);
var inst_14781 = c3kit.wire.ajax.triage_response.call(null,inst_14772,ajax_call);
var inst_14782 = cljs.core.swap_BANG_.call(null,c3kit.wire.ajax.active_ajax_requests,cljs.core.dec);
var state_14784__$1 = (function (){var statearr_14789 = state_14784;
(statearr_14789[(9)] = inst_14780);

(statearr_14789[(10)] = inst_14781);

return statearr_14789;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14784__$1,inst_14782);
} else {
return null;
}
}
});
return (function() {
var c3kit$wire$ajax$_do_ajax_request_$_state_machine__9364__auto__ = null;
var c3kit$wire$ajax$_do_ajax_request_$_state_machine__9364__auto____0 = (function (){
var statearr_14798 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_14798[(0)] = c3kit$wire$ajax$_do_ajax_request_$_state_machine__9364__auto__);

(statearr_14798[(1)] = (1));

return statearr_14798;
});
var c3kit$wire$ajax$_do_ajax_request_$_state_machine__9364__auto____1 = (function (state_14784){
while(true){
var ret_value__9365__auto__ = (function (){try{while(true){
var result__9366__auto__ = switch__9363__auto__.call(null,state_14784);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9366__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9366__auto__;
}
break;
}
}catch (e14803){var ex__9367__auto__ = e14803;
var statearr_14804_14812 = state_14784;
(statearr_14804_14812[(2)] = ex__9367__auto__);


if(cljs.core.seq.call(null,(state_14784[(4)]))){
var statearr_14805_14813 = state_14784;
(statearr_14805_14813[(1)] = cljs.core.first.call(null,(state_14784[(4)])));

} else {
throw ex__9367__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9365__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14814 = state_14784;
state_14784 = G__14814;
continue;
} else {
return ret_value__9365__auto__;
}
break;
}
});
c3kit$wire$ajax$_do_ajax_request_$_state_machine__9364__auto__ = function(state_14784){
switch(arguments.length){
case 0:
return c3kit$wire$ajax$_do_ajax_request_$_state_machine__9364__auto____0.call(this);
case 1:
return c3kit$wire$ajax$_do_ajax_request_$_state_machine__9364__auto____1.call(this,state_14784);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
c3kit$wire$ajax$_do_ajax_request_$_state_machine__9364__auto__.cljs$core$IFn$_invoke$arity$0 = c3kit$wire$ajax$_do_ajax_request_$_state_machine__9364__auto____0;
c3kit$wire$ajax$_do_ajax_request_$_state_machine__9364__auto__.cljs$core$IFn$_invoke$arity$1 = c3kit$wire$ajax$_do_ajax_request_$_state_machine__9364__auto____1;
return c3kit$wire$ajax$_do_ajax_request_$_state_machine__9364__auto__;
})()
})();
var state__9546__auto__ = (function (){var statearr_14806 = f__9545__auto__.call(null);
(statearr_14806[(6)] = c__9544__auto__);

return statearr_14806;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9546__auto__);
}));

return c__9544__auto__;
});
c3kit.wire.ajax.build_ajax_call = (function c3kit$wire$ajax$build_ajax_call(method,method_fn,url,params,handler,opt_args){
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"options","options",99638489),c3kit.apron.corec.__GT_options.call(null,opt_args),new cljs.core.Keyword(null,"method","method",55703592),method,new cljs.core.Keyword(null,"method-fn","method-fn",1314848696),method_fn,new cljs.core.Keyword(null,"url","url",276297046),url,new cljs.core.Keyword(null,"params","params",710516235),params,new cljs.core.Keyword(null,"handler","handler",-195596612),handler], null);
});
c3kit.wire.ajax._method_parts = (function c3kit$wire$ajax$_method_parts(method){
var G__14807 = method;
var G__14807__$1 = (((G__14807 instanceof cljs.core.Keyword))?G__14807.fqn:null);
switch (G__14807__$1) {
case "get":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["GET",cljs_http.client.get], null);

break;
case "post":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["POST",cljs_http.client.post], null);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__14807__$1)].join('')));

}
});
c3kit.wire.ajax.get_BANG_ = (function c3kit$wire$ajax$get_BANG_(var_args){
var args__5732__auto__ = [];
var len__5726__auto___14820 = arguments.length;
var i__5727__auto___14821 = (0);
while(true){
if((i__5727__auto___14821 < len__5726__auto___14820)){
args__5732__auto__.push((arguments[i__5727__auto___14821]));

var G__14822 = (i__5727__auto___14821 + (1));
i__5727__auto___14821 = G__14822;
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
(c3kit.wire.ajax.get_BANG_.cljs$lang$applyTo = (function (seq14808){
var G__14809 = cljs.core.first.call(null,seq14808);
var seq14808__$1 = cljs.core.next.call(null,seq14808);
var G__14810 = cljs.core.first.call(null,seq14808__$1);
var seq14808__$2 = cljs.core.next.call(null,seq14808__$1);
var G__14811 = cljs.core.first.call(null,seq14808__$2);
var seq14808__$3 = cljs.core.next.call(null,seq14808__$2);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__14809,G__14810,G__14811,seq14808__$3);
}));

c3kit.wire.ajax.post_BANG_ = (function c3kit$wire$ajax$post_BANG_(var_args){
var args__5732__auto__ = [];
var len__5726__auto___14823 = arguments.length;
var i__5727__auto___14825 = (0);
while(true){
if((i__5727__auto___14825 < len__5726__auto___14823)){
args__5732__auto__.push((arguments[i__5727__auto___14825]));

var G__14830 = (i__5727__auto___14825 + (1));
i__5727__auto___14825 = G__14830;
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
(c3kit.wire.ajax.post_BANG_.cljs$lang$applyTo = (function (seq14815){
var G__14816 = cljs.core.first.call(null,seq14815);
var seq14815__$1 = cljs.core.next.call(null,seq14815);
var G__14817 = cljs.core.first.call(null,seq14815__$1);
var seq14815__$2 = cljs.core.next.call(null,seq14815__$1);
var G__14818 = cljs.core.first.call(null,seq14815__$2);
var seq14815__$3 = cljs.core.next.call(null,seq14815__$2);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__14816,G__14817,G__14818,seq14815__$3);
}));

c3kit.wire.ajax.request_BANG_ = (function c3kit$wire$ajax$request_BANG_(var_args){
var args__5732__auto__ = [];
var len__5726__auto___14835 = arguments.length;
var i__5727__auto___14836 = (0);
while(true){
if((i__5727__auto___14836 < len__5726__auto___14835)){
args__5732__auto__.push((arguments[i__5727__auto___14836]));

var G__14837 = (i__5727__auto___14836 + (1));
i__5727__auto___14836 = G__14837;
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
var G__14838__delegate = function (url__$1,p__14831){
var vec__14832 = p__14831;
var req = cljs.core.nth.call(null,vec__14832,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method,new cljs.core.Keyword(null,"url","url",276297046),url__$1], null)));
};
var G__14838 = function (url__$1,var_args){
var p__14831 = null;
if (arguments.length > 1) {
var G__14839__i = 0, G__14839__a = new Array(arguments.length -  1);
while (G__14839__i < G__14839__a.length) {G__14839__a[G__14839__i] = arguments[G__14839__i + 1]; ++G__14839__i;}
  p__14831 = new cljs.core.IndexedSeq(G__14839__a,0,null);
} 
return G__14838__delegate.call(this,url__$1,p__14831);};
G__14838.cljs$lang$maxFixedArity = 1;
G__14838.cljs$lang$applyTo = (function (arglist__14840){
var url__$1 = cljs.core.first(arglist__14840);
var p__14831 = cljs.core.rest(arglist__14840);
return G__14838__delegate(url__$1,p__14831);
});
G__14838.cljs$core$IFn$_invoke$arity$variadic = G__14838__delegate;
return G__14838;
})()
;
return c3kit.wire.ajax._do_ajax_request.call(null,c3kit.wire.ajax.build_ajax_call.call(null,method_name,method_fn,url,params,handler,opt_args));
}));

(c3kit.wire.ajax.request_BANG_.cljs$lang$maxFixedArity = (4));

/** @this {Function} */
(c3kit.wire.ajax.request_BANG_.cljs$lang$applyTo = (function (seq14824){
var G__14826 = cljs.core.first.call(null,seq14824);
var seq14824__$1 = cljs.core.next.call(null,seq14824);
var G__14827 = cljs.core.first.call(null,seq14824__$1);
var seq14824__$2 = cljs.core.next.call(null,seq14824__$1);
var G__14828 = cljs.core.first.call(null,seq14824__$2);
var seq14824__$3 = cljs.core.next.call(null,seq14824__$2);
var G__14829 = cljs.core.first.call(null,seq14824__$3);
var seq14824__$4 = cljs.core.next.call(null,seq14824__$3);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__14826,G__14827,G__14828,G__14829,seq14824__$4);
}));


//# sourceMappingURL=ajax.js.map
